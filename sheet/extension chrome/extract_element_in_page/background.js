"use strict";
/* global chrome */
// background.js — service worker
// Orchestre l'ouverture des pages et la collecte des données

var SCRAPPER = SCRAPPER || {};

SCRAPPER.Background = (function ( self ) {
    
    //********************************************  CONSTANTS  **************************************************//
    
    const STATE_KEY  = "extract_state";
    const TIMEOUT_MS = 10000; // 10s avant retry
    const RETRY_MAX  = 1;
    const BASE_URL   = "https://pf2e.pathfinder-fr.org";
    
    //********************************************  PRIVATE  **************************************************//
    
    function _defaultState () {
        return {
            running: false,
            queue  : [],    // [{id, href, category, text}]
            current: null,  // item en cours
            retries: 0,
            results: {},    // id → extracted data
            errors : [],    // [{id, href, error}]
            tabId  : null,
            total  : 0,
            done   : 0
        };
    }
    
    function _getState () {
        return new Promise( resolve => {
            chrome.storage.local.get( STATE_KEY, data => {
                resolve( data[ STATE_KEY ] || _defaultState() );
            } );
        } );
    }
    
    function _setState ( state ) {
        return new Promise( resolve => {
            chrome.storage.local.set( { [ STATE_KEY ]: state }, resolve );
        } );
    }
    
    function _notifyPopup ( msg ) {
        chrome.runtime.sendMessage( msg ).catch( () => {
        } ); // ignore si popup fermé
    }
    
    function _sleep ( ms ) {
        return new Promise( resolve => setTimeout( resolve, ms ) );
    }
    
    function _waitForTabReady ( tabId, timeout, callback ) {
        const start = Date.now();
        
        function check () {
            if ( Date.now() - start > timeout ) {
                callback( false );
                return;
            }
            chrome.tabs.get( tabId, tab => {
                if ( chrome.runtime.lastError || !tab ) {
                    callback( false );
                    return;
                }
                if ( tab.status === "complete" ) {
                    setTimeout( () => callback( true ), 1500 ); // petit délai pour Angular
                }
                else {
                    setTimeout( check, 300 );
                }
            } );
        }
        
        check();
    }
    
    async function _recordResult ( item, data ) {
        const state = await _getState();
        
        state.results[ item.id ] = { ...item, ...data.data };
        state.links              = state.links || {};
        Object.keys( data.links || {} ).forEach( function ( category ) {
            state.links[ category ] = { ...(state.links[ category ] || {}), ...data.links[ category ] };
        } );
        
        state.done++;
        
        await _setState( state );
        
        _notifyPopup( {
            action : "progress",
            done   : state.done,
            total  : state.total,
            current: item
        } );
    }
    
    async function _recordError ( item, error ) {
        const state = await _getState();
        state.errors.push( { ...item, error } );
        state.done++;
        await _setState( state );
        _notifyPopup( { action: "error", item, error } );
    }
    
    //********************************************  ACTIONS  **************************************************//
    
    async function _startExtraction ( items ) {
        const state   = _defaultState();
        state.running = true;
        state.queue   = [...items];
        state.total   = items.length;
        await _setState( state );
        _processNext();
        return { ok: true, total: items.length };
    }
    
    async function _processNext () {
        const state = await _getState();
        
        if ( !state.running || state.queue.length === 0 ) {
            state.running = false;
            await _setState( state );
            _notifyPopup( { action: "extraction_done" } );
            return;
        }
        
        const item    = state.queue.shift();
        state.current = item;
        state.retries = 0;
        await _setState( state );
        
        _notifyPopup( { action: "progress", done: state.done, total: state.total, current: item } );
        
        _openAndExtract( item, 0 );
    }
    
    async function _openAndExtract ( item, attempt ) {
        const url = BASE_URL + item.href;
        
        // Ouvre ou réutilise l'onglet
        const state = await _getState();
        let tabId   = state.tabId;
        
        if ( tabId ) {
            try {
                await chrome.tabs.update( tabId, { url } );
            }
            catch {
                tabId = null;
            }
        }
        
        if ( !tabId ) {
            const tab = await chrome.tabs.create( { url, active: false } );
            tabId     = tab.id;
            const s   = await _getState();
            s.tabId   = tabId;
            await _setState( s );
        }
        
        _waitForTabReady( tabId, TIMEOUT_MS, async( loaded ) => {
            if ( !loaded ) {
                if ( attempt < RETRY_MAX ) {
                    _notifyPopup( { action: "retry", item, attempt: attempt + 1 } );
                    _openAndExtract( item, attempt + 1 );
                }
                else {
                    await _recordError( item, "Timeout après " + RETRY_MAX + " tentative(s)" );
                    _processNext();
                }
                return;
            }
            
            try {
                const response = await chrome.tabs.sendMessage( tabId, { action: "extract_page" } );
                if ( response && response.success ) {
                    await _recordResult( item, response.data );
                }
                else {
                    await _recordError( item, response ? response.error : "Pas de réponse" );
                }
            }
            catch ( e ) {
                // Le content script n'est peut-être pas prêt : on réinjecte
                if ( attempt < RETRY_MAX ) {
                    try {
                        await chrome.scripting.executeScript( { target: { tabId }, files: ["content.js"] } );
                        await _sleep( 1000 );
                        const r2 = await chrome.tabs.sendMessage( tabId, { action: "extract_page" } );
                        if ( r2 && r2.success ) {
                            await _recordResult( item, r2.data );
                        }
                        else {
                            await _recordError( item, r2 ? r2.error : "Échec après ré-injection" );
                        }
                    }
                    catch ( e2 ) {
                        await _recordError( item, e2.message );
                    }
                }
                else {
                    await _recordError( item, e.message );
                }
            }
            
            _processNext();
        } );
    }
    
    //********************************************  MESSAGES  **************************************************//
    
    self.init = function () {
        chrome.runtime.onMessage.addListener( ( request, sender, sendResponse ) => {
            switch ( request.action ) {
                case "start_extraction":
                    _startExtraction( request.items ).then( sendResponse );
                    return true;
                case "get_state":
                    _getState().then( sendResponse );
                    return true;
                case "reset":
                    chrome.storage.local.remove( STATE_KEY, () => sendResponse( { ok: true } ) );
                    return true;
                case "get_results":
                    _getState().then( state => sendResponse( { results: state.results, links: state.links, errors: state.errors } ) );
                    return true;
            }
            return true;
        } );
    };
    
    return self;
    
})( SCRAPPER.Background || {} );

SCRAPPER.Background.init();