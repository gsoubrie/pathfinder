"use strict";
/* global SCRAPPER */

var SCRAPPER = SCRAPPER || {};

SCRAPPER.Heritage = (function ( self ) {

    //********************************************  PRIVATE  **************************************************//

    function _replaceAnnotationLinks ( block ) {
        const clone = block.cloneNode( true );

        clone.querySelectorAll( "elt-foundry-annotation" ).forEach( annotation => {
            const a = annotation.querySelector( "a[href]" );
            if ( !a ) {
                return;
            }

            const href   = a.getAttribute( "href" );
            const parts  = href.split( "/" ).filter( Boolean );
            const linkId = parts[ 1 ];
            const name   = SCRAPPER.Shared.cleanText( a );

            const div     = document.createElement( "div" );
            div.className = "gs-link-information";
            div.setAttribute( "onclick", `CONTROLLER.Main.doActionAfter('event__show_information', {'param__object__uuid': '${linkId}'})` );
            div.textContent = name;

            annotation.replaceWith( div );
        } );

        return clone;
    }

    //********************************************  ACTIONS  **************************************************//

    self.extract = function () {
        const cleanText = SCRAPPER.Shared.cleanText;
        const result    = {};

        const title = document.querySelector( ".content .header .title" );
        result.name = cleanText( title );

        const traits  = document.querySelectorAll( ".trait" );
        result.traits = Array.from( traits ).map( t => cleanText( t ) );

        const detailBlock = document.querySelector( ".description, [class*='description'], .detail-content" );

        if ( !detailBlock ) {
            result._fallback = true;
            return result;
        }

        const processedBlock = _replaceAnnotationLinks( detailBlock );

        result.general_desc = Array.from( processedBlock.children )
                                   .map( el => el.innerHTML.trim() )
                                   .filter( html => html.length > 0 );

        return result;
    };

    return self;

})( SCRAPPER.Heritage || {} );
