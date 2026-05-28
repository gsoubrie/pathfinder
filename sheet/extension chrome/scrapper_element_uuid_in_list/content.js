"use strict";
/* global chrome */

var SCRAPPER = SCRAPPER || {};

SCRAPPER.Content = (function ( self ) {
    
    //********************************************  CONSTANTS  **************************************************//
    const CATEGORY_MAP = {
        "spells"     : "spell",
        "ancestries" : "ancestry",
        "classes"    : "class",
        "feats"      : "feat",
        "items"      : "item",
        "monsters"   : "monster",
        "conditions" : "condition",
        "backgrounds": "background",
        "deities"    : "deity",
        "domains"    : "domain",
        "traits"     : "trait"
    };
    
    //********************************************  PRIVATE  **************************************************//
    
    function _getCategory ( url ) {
        const segment = url.split( "/" ).filter( Boolean ).pop();
        return CATEGORY_MAP[ segment ] || segment || "unknown";
    }
    
    function _extractName ( dom_line ) {
        const name = dom_line.querySelector( ".cdk-column-name_trans" ).innerText;
        return name.replace( /\s+/g, " " ).trim();
    }
    
    //********************************************  ACTIONS  **************************************************//
    
    self.scrape = function () {
        const category = _getCategory( window.location.pathname );
        const rows     = document.querySelectorAll( ".mdc-data-table__content .element-row" );
        
        const to_return = {};
        let count       = 0;
        const errors    = [];
        
        let current_dom;
        for ( let i = 0, _size_i = rows.length; i < _size_i; i++ ) {
            current_dom = rows[ i ];
            const link  = current_dom.querySelector( "a[href]" );
            const href  = link.getAttribute( "href" );
            const id    = href.split( "/" ).filter( Boolean ).pop();
            const text  = _extractName( current_dom );
            
            to_return[ id ] = { category, href, id, text };
            count++;
        }
        return { success: true, to_return, count, errors, category };
    };
    
    self.getPageInfo = function () {
        const category = _getCategory( window.location.pathname );
        return {
            url  : window.location.href,
            category,
            ready: document.querySelectorAll( "table tr" ).length > 1
        };
    };
    
    //********************************************  MESSAGES  **************************************************//
    
    self.init = function () {
        chrome.runtime.onMessage.addListener( ( request, sender, sendResponse ) => {
            switch ( request.action ) {
                case "scrape":
                    sendResponse( self.scrape() );
                    break;
                case "get_page_info":
                    sendResponse( self.getPageInfo() );
                    break;
            }
            return true;
        } );
    };
    
    return self;
    
})( SCRAPPER.Content || {} );

SCRAPPER.Content.init();