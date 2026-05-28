"use strict";

var SCRAPPER = SCRAPPER || {};

SCRAPPER.Popup = (function ( self ) {
    
    //********************************************  CONSTANTS  **************************************************//
    
    const CATEGORY_LABELS = {
        spell     : "sort",
        ancestry  : "race",
        "class"   : "classe",
        feat      : "don",
        item      : "objet",
        monster   : "monstre",
        condition : "condition",
        background: "historique",
        deity     : "divinité",
        domain    : "domaine",
        trait     : "trait"
    };
    
    //********************************************  PRIVATE  **************************************************//
    
    let _scraped_data     = null;
    let _current_category = "unknown";
    
    let _dom = {};
    
    function _getCategoryLabel ( cat ) {
        return CATEGORY_LABELS[ cat ] || cat || "entrée";
    }
    
    function _setStatus ( type, text ) {
        _dom.status_bar.className    = "status-bar " + type;
        _dom.status_text.textContent = text;
    }
    
    function _buildPreview ( entries, count ) {
        let text = "{\n";
        Object.entries( entries ).slice( 0, 3 ).forEach( ( [id, entry] ) => {
            text += `  "${id}": {\n`;
            text += `    "category": "${entry.category}",\n`;
            text += `    "href"    : "${entry.href}",\n`;
            text += `    "id"      : "${entry.id}",\n`;
            text += `    "text"    : "${entry.text}"\n`;
            text += `  },\n`;
        } );
        if ( count > 3 ) {
            text += `  … (${count - 3} autres)\n`;
        }
        text += "}";
        return text;
    }
    
    //********************************************  ACTIONS  **************************************************//
    
    async function _checkPage () {
        try {
            const [tab] = await chrome.tabs.query( { active: true, currentWindow: true } );
            
            if ( !tab || !tab.url ) {
                _setStatus( "error", "Impossible de lire l'onglet actif." );
                return;
            }
            
            if ( !tab.url.includes( "pf2e.pathfinder-fr.org/" ) ) {
                _setStatus( "error", "Ouvrez une page de pf2e.pathfinder-fr.org" );
                _dom.warn_msg.innerHTML = '→ <a href="https://pf2e.pathfinder-fr.org/spells" target="_blank">Ouvrir les sorts</a>';
                return;
            }
            
            const response = await chrome.tabs.sendMessage( tab.id, { action: "get_page_info" } ).catch( () => null );
            
            if ( !response ) {
                _setStatus( "error", "Content script non chargé. Rechargez la page." );
                return;
            }
            
            if ( !response.ready ) {
                _setStatus( "info", "Page en chargement… attendez quelques secondes." );
                setTimeout( _checkPage, 1500 );
                return;
            }
            
            _current_category = response.category || "unknown";
            const lbl         = _getCategoryLabel( _current_category );
            
            _setStatus( "ok", `Page prête — catégorie : « ${_current_category} »` );
            _dom.btn_scrape.textContent = `⚔ Extraire les ${lbl}s`;
            _dom.stat_label.textContent = lbl.charAt( 0 ).toUpperCase() + lbl.slice( 1 ) + "s";
            _dom.btn_scrape.disabled    = false;
            
        }
        catch ( e ) {
            _setStatus( "error", "Erreur : " + e.message );
        }
    }
    
    async function _onScrape () {
        _dom.btn_scrape.disabled = true;
        _setStatus( "info", "Extraction en cours…" );
        _dom.results.classList.remove( "visible" );
        _scraped_data             = null;
        _dom.warn_msg.textContent = "";
        
        try {
            const [tab]    = await chrome.tabs.query( { active: true, currentWindow: true } );
            const response = await chrome.tabs.sendMessage( tab.id, { action: "scrape" } );
            
            if ( !response.success ) {
                _setStatus( "error", response.error || "Échec de l'extraction." );
                if ( response.errors?.length > 0 ) {
                    _dom.warn_msg.textContent = response.errors.slice( 0, 3 ).join( " | " );
                }
                _dom.btn_scrape.disabled = false;
                return;
            }
            
            _scraped_data = response.to_return;
            const count   = response.count;
            const cat     = response.category || _current_category;
            const err_len = (response.errors || []).length;
            
            _setStatus( "ok", `${count} entrée${count > 1 ? "s" : ""} (${cat}) extraite${count > 1 ? "s" : ""}.` );
            
            _dom.stat_count.textContent  = count;
            _dom.stat_errors.textContent = err_len;
            _dom.preview.textContent     = _buildPreview( _scraped_data, count );
            
            _dom.results.classList.add( "visible" );
            _dom.btn_dl.disabled   = false;
            _dom.btn_copy.disabled = false;
            
            if ( err_len > 0 ) {
                _dom.warn_msg.textContent = `⚠ ${err_len} ligne(s) ignorée(s) (structure inattendue).`;
            }
            
        }
        catch ( e ) {
            _setStatus( "error", "Erreur JS : " + e.message );
            _dom.btn_scrape.disabled = false;
        }
    }
    
    function _onDownload () {
        if ( !_scraped_data ) {
            return;
        }
        const json = JSON.stringify( _scraped_data, null, 2 );
        const blob = new Blob( [json], { type: "application/json" } );
        const url  = URL.createObjectURL( blob );
        chrome.downloads.download( {
            url,
            filename: `pf2e_${_current_category}_uuid.json`,
            saveAs  : false
        } );
        _dom.btn_dl.textContent = "✓ Téléchargé !";
        setTimeout( () => {
            _dom.btn_dl.textContent = "↓ Télécharger JSON";
        }, 2000 );
    }
    
    async function _onCopy () {
        if ( !_scraped_data ) {
            return;
        }
        await navigator.clipboard.writeText( JSON.stringify( _scraped_data, null, 2 ) );
        _dom.btn_copy.textContent = "✓ Copié !";
        setTimeout( () => {
            _dom.btn_copy.textContent = "⎘ Copier dans le presse-papier";
        }, 2000 );
    }
    
    //********************************************  INIT  **************************************************//
    
    self.init = function () {
        _dom = {
            status_bar : document.getElementById( "status" ),
            status_text: document.getElementById( "status-text" ),
            btn_scrape : document.getElementById( "btn-scrape" ),
            results    : document.getElementById( "results" ),
            stat_count : document.getElementById( "stat-count" ),
            stat_label : document.getElementById( "stat-label" ),
            stat_errors: document.getElementById( "stat-errors" ),
            preview    : document.getElementById( "preview" ),
            btn_dl     : document.getElementById( "btn-download" ),
            btn_copy   : document.getElementById( "btn-copy" ),
            warn_msg   : document.getElementById( "warn-msg" )
        };
        
        _dom.btn_scrape.addEventListener( "click", _onScrape );
        _dom.btn_dl.addEventListener( "click", _onDownload );
        _dom.btn_copy.addEventListener( "click", _onCopy );
        
        _checkPage();
    };
    
    return self;
    
})( SCRAPPER.Popup || {} );

document.addEventListener( "DOMContentLoaded", function () {
    SCRAPPER.Popup.init();
} );