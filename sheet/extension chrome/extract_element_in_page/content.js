"use strict";

var SCRAPPER = SCRAPPER || {};

SCRAPPER.Shared = (function () {

    function cleanText ( el ) {
        if ( !el ) {
            return "";
        }
        const clone = el.cloneNode ? el.cloneNode( true ) : el;
        if ( clone.querySelectorAll ) {
            clone.querySelectorAll( "app-action-icon, mat-icon, .mat-icon" ).forEach( n => n.remove() );
        }
        return (clone.textContent || clone.innerText || "").replace( /\s+/g, " " ).trim();
    }

    function extractLinks () {
        const anchors    = document.querySelectorAll( "elt-foundry-annotation a[href]" );
        const byCategory = {};

        anchors.forEach( a => {
            const href   = a.getAttribute( "href" );
            const parts  = href.split( "/" ).filter( Boolean );
            const cat    = parts[ 0 ];
            const linkId = parts[ 1 ];
            const name   = cleanText( a );

            if ( !cat || !linkId ) {
                return;
            }

            if ( !byCategory[ cat ] ) {
                byCategory[ cat ] = {};
            }

            byCategory[ cat ][ linkId ] = { id: linkId, href, name, category: cat };
        } );

        return byCategory;
    }

    return { cleanText, extractLinks };

})();

SCRAPPER.Content = (function ( self ) {

    function _extractPage () {
        const path     = window.location.pathname;
        const segments = path.split( "/" ).filter( Boolean );
        const category = segments[ 0 ];
        const id       = segments[ 1 ];

        const links = SCRAPPER.Shared.extractLinks();

        let data = {};
        switch ( category ) {
            case "ancestries":
                data = SCRAPPER.Ancestry.extract();
                break;
            case "heritages":
                data = SCRAPPER.Heritage.extract();
                break;
            default:
                data = { _raw: true, text: document.body.innerText.slice( 0, 500 ) };
        }
        data[ "category" ] = category;
        data[ "id" ]       = id;
        data[ "href" ]     = path;

        return { data, links };
    }

    self.init = function () {
        chrome.runtime.onMessage.addListener( ( request, sender, sendResponse ) => {
            switch ( request.action ) {
                case "extract_page":
                    setTimeout( () => {
                        try {
                            sendResponse( { success: true, data: _extractPage() } );
                        }
                        catch ( e ) {
                            sendResponse( { success: false, error: e.message } );
                        }
                    }, 800 );
                    return true;
                case "ping":
                    sendResponse( { ready: true } );
                    return true;
            }
            return true;
        } );
    };

    return self;

})( SCRAPPER.Content || {} );

SCRAPPER.Content.init();