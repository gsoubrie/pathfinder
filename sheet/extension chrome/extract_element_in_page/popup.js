"use strict";
/* global chrome */
// popup.js — interface utilisateur de l'extension
// Gère le chargement du JSON, le lancement et l'affichage de la progression

var SCRAPPER = SCRAPPER || {};

SCRAPPER.Popup = (function ( self ) {
    
    //********************************************  CONSTANTS  **************************************************//
    
    const RETRY_MAX = 1;
    
    //********************************************  PRIVATE  **************************************************//
    
    // ── État local ──────────────────────────────────────────────────────────────
    let _loadedItems = null; // [{id, href, category, text}]
    
    // ── Références DOM ──────────────────────────────────────────────────────────
    const _dom = {
        jsonInput   : document.getElementById( "json-input" ),
        btnLoad     : document.getElementById( "btn-load" ),
        btnStart    : document.getElementById( "btn-start" ),
        btnDownload : document.getElementById( "btn-download" ),
        btnCopy     : document.getElementById( "btn-copy" ),
        btnReset    : document.getElementById( "btn-reset" ),
        statusBar   : document.getElementById( "status" ),
        statusText  : document.getElementById( "status-text" ),
        progressWrap: document.getElementById( "progress-wrap" ),
        progressFill: document.getElementById( "progress-fill" ),
        progressTxt : document.getElementById( "progress-text" ),
        progressPct : document.getElementById( "progress-pct" ),
        currentItem : document.getElementById( "current-item" ),
        statsDiv    : document.getElementById( "stats" ),
        statOk      : document.getElementById( "stat-ok" ),
        statErr     : document.getElementById( "stat-err" ),
        logDiv      : document.getElementById( "log" ),
        dropZone    : document.getElementById( "drop-zone" )
    };
    
    // ── Helpers UI ──────────────────────────────────────────────────────────────
    function _setStatus ( type, text ) {
        _dom.statusBar.className    = "status-bar " + type;
        _dom.statusText.textContent = text;
    }
    
    function _addLog ( msg, isError = false ) {
        const line = document.createElement( "div" );
        if ( isError ) {
            line.className = "err";
        }
        line.textContent = msg;
        _dom.logDiv.appendChild( line );
        _dom.logDiv.scrollTop = _dom.logDiv.scrollHeight;
    }
    
    function _setProgress ( done, total ) {
        const pct                     = total > 0 ? Math.round( (done / total) * 100 ) : 0;
        _dom.progressFill.style.width = pct + "%";
        _dom.progressTxt.textContent  = `${done} / ${total}`;
        _dom.progressPct.textContent  = pct + "%";
    }
    
    function _showStats ( ok, err ) {
        _dom.statsDiv.style.display = "flex";
        _dom.statOk.textContent     = ok;
        _dom.statErr.textContent    = err;
    }
    
    //********************************************  ACTIONS  **************************************************//
    
    function _parseJsonInput () {
        const raw = _dom.jsonInput.value.trim();
        if ( !raw ) {
            _setStatus( "error", "Le champ JSON est vide." );
            return;
        }
        
        try {
            const json = JSON.parse( raw );
            
            // Accepte deux formats :
            // 1. Dict {id: {id, href, category, text}} (sorti par scrapper_spell_uuid)
            // 2. Tableau [{id, href, category, text}]
            let items = Array.isArray( json ) ? json : Object.values( json );
            items     = items.filter( it => it && it.href );
            
            if ( items.length === 0 ) {
                _setStatus( "error", "JSON vide ou format invalide." );
                return;
            }
            
            _loadedItems             = items;
            _dom.btnStart.disabled   = false;
            _dom.btnReset.disabled   = false;
            _dom.btnLoad.textContent = `✓ ${items.length} éléments chargés`;
            _setStatus( "ok", `${items.length} éléments prêts à extraire.` );
            _addLog( `JSON chargé : ${items.length} éléments (${items[ 0 ]?.category || "?"}).` );
            
        }
        catch ( err ) {
            _setStatus( "error", "JSON invalide : " + err.message );
        }
    }
    
    async function _startExtraction () {
        if ( !_loadedItems ) {
            return;
        }
        
        _dom.btnStart.disabled = true;
        _dom.progressWrap.classList.add( "visible" );
        _dom.currentItem.classList.add( "visible" );
        _dom.statsDiv.style.display = "none";
        _dom.logDiv.innerHTML       = "";
        _setProgress( 0, _loadedItems.length );
        _setStatus( "info", "Extraction en cours…" );
        
        await chrome.runtime.sendMessage( { action: "start_extraction", items: _loadedItems } );
    }
    
    async function _resetExtraction () {
        await chrome.runtime.sendMessage( { action: "reset" } );
        
        _loadedItems = null;
        _dom.dropZone.classList.remove( "loaded" );
        _dom.dropZone.innerHTML = `Glissez-déposez votre JSON ici<br/><small>ou cliquez pour sélectionner</small>`;
        _dom.logDiv.innerHTML   = "";
        _dom.progressWrap.classList.remove( "visible" );
        _dom.currentItem.classList.remove( "visible" );
        _dom.statsDiv.style.display = "none";
        _dom.btnStart.disabled      = true;
        _dom.btnDownload.disabled   = true;
        _dom.btnCopy.disabled       = true;
        _dom.btnReset.disabled      = true;
        _setStatus( "", "Chargez un fichier JSON pour commencer." );
    }
    
    async function _downloadResults () {
        const { results, links } = await chrome.runtime.sendMessage( { action: "get_results" } );
        const output              = { results, links, exported_at: new Date().toISOString() };
        const blob                = new Blob( [JSON.stringify( output, null, 2 )], { type: "application/json" } );
        const url                 = URL.createObjectURL( blob );
        const cat                 = _loadedItems?.[ 0 ]?.category || "elements";
        
        chrome.downloads.download( { url, filename: `pf2e_${cat}_extracted.json`, saveAs: false } );
        _dom.btnDownload.textContent = "✓ Téléchargé !";
        setTimeout( () => {
            _dom.btnDownload.textContent = "↓ Télécharger les résultats";
        }, 2000 );
    }
    
    async function _copyResults () {
        const { results, links } = await chrome.runtime.sendMessage( { action: "get_results" } );
        await navigator.clipboard.writeText( JSON.stringify( { results, links }, null, 2 ) );
        _dom.btnCopy.textContent = "✓ Copié !";
        setTimeout( () => {
            _dom.btnCopy.textContent = "⎘ Copier dans le presse-papier";
        }, 2000 );
    }
    
    async function _restoreState () {
        const state = await chrome.runtime.sendMessage( { action: "get_state" } );
        if ( !state ) {
            return;
        }
        
        if ( state.running ) {
            _dom.progressWrap.classList.add( "visible" );
            _dom.currentItem.classList.add( "visible" );
            _dom.btnReset.disabled = false;
            _setProgress( state.done, state.total );
            _setStatus( "info", "Extraction en cours…" );
            _addLog( "Extraction en cours, reprise de l'affichage…" );
            return;
        }
        
        const ok = Object.keys( state.results || {} ).length;
        if ( ok > 0 ) {
            const err = (state.errors || []).length;
            _dom.progressWrap.classList.add( "visible" );
            _dom.btnDownload.disabled = false;
            _dom.btnCopy.disabled     = false;
            _dom.btnReset.disabled    = false;
            _setProgress( state.done, state.total );
            _setStatus( "ok", `Résultats disponibles : ${ok} extraits, ${err} erreur(s).` );
            _showStats( ok, err );
            _addLog( `Résultats en mémoire : ${ok} éléments. Téléchargez ou réinitialisez.` );
        }
    }
    
    //********************************************  MESSAGES  **************************************************//
    
    self.init = function () {
        
        // ── Listeners DOM ────────────────────────────────────────────────────────
        _dom.btnLoad.addEventListener( "click", () => _parseJsonInput() );
        _dom.btnStart.addEventListener( "click", () => _startExtraction() );
        _dom.btnReset.addEventListener( "click", () => _resetExtraction() );
        _dom.btnDownload.addEventListener( "click", () => _downloadResults() );
        _dom.btnCopy.addEventListener( "click", () => _copyResults() );
        
        _dom.jsonInput.addEventListener( "keydown", e => {
            if ( e.key === "Enter" && e.ctrlKey ) {
                _parseJsonInput();
            }
        } );
        
        // ── Listener background ──────────────────────────────────────────────────
        chrome.runtime.onMessage.addListener( ( msg ) => {
            switch ( msg.action ) {
                case "progress":
                    _setProgress( msg.done, msg.total );
                    if ( msg.current ) {
                        _dom.currentItem.textContent = `⚙ ${msg.current.text || msg.current.id} (${msg.done + 1}/${msg.total})`;
                    }
                    break;
                
                case "retry":
                    _addLog( `↺ Retry ${msg.attempt}/${RETRY_MAX} : ${msg.item.text || msg.item.id}` );
                    _setStatus( "info", `Réessai en cours… ${msg.item.text || msg.item.id}` );
                    break;
                
                case "error":
                    _addLog( `✗ ${msg.item.text || msg.item.id} — ${msg.error}`, true );
                    break;
                
                case "extraction_done":
                    chrome.runtime.sendMessage( { action: "get_state" } ).then( state => {
                        const ok                     = Object.keys( state.results ).length;
                        const err                    = state.errors.length;
                        _dom.currentItem.textContent = "✓ Extraction terminée.";
                        _dom.btnDownload.disabled    = false;
                        _setStatus( "ok", `Terminé ! ${ok} extraits, ${err} erreur(s).` );
                        _showStats( ok, err );
                        _addLog( `─── Terminé : ${ok} OK / ${err} erreur(s) ───` );
                    } );
                    break;
            }
        } );
        
        // ── Restauration de l'état au rouverture du popup ────────────────────────
        _restoreState();
    };
    
    return self;
    
})( SCRAPPER.Popup || {} );

SCRAPPER.Popup.init();