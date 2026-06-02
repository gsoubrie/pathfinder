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

    //********************************************  PATTERNS  **************************************************//

    // Chaque pattern travaille sur le texte brut de general_desc (HTML strippé),
    // sans modifier le champ d'origine.
    // - field    : chemin dans result.bonus (notation pointée)
    // - regex    : expression à appliquer sur le texte complet
    // - extract  : transforme le(s) match(es) en valeur(s) à stocker
    // - multiple : si true, accumule tous les matches dans un tableau

    const PATTERNS = [
        {
            // "Vous obtenez le trait elfe, le trait aiuvarin et la capacité X"
            // Capture la liste complète après "Vous obtenez" puis extrait chaque "le trait X"
            field   : "bonus.traits",
            regex   : /Vous obtenez ([^\.]+)/,
            extract : ( match ) => {
                const segment = match[ 1 ];
                const found   = [];
                const re      = /le trait ([^,\. ]+(?:\s[^,\. ]+)*?)(?=\s*(,|et\s+le|et\s+la|$))/g;
                let   m;
                while ( ( m = re.exec( segment ) ) !== null ) {
                    found.push( m[ 1 ].trim() );
                }
                return found;
            },
            multiple: false
        },
        {
            // "la capacité vision nocturne" → "vision nocturne"
            // "la capacité résistance aux poisons 5"
            field   : "bonus.sens",
            regex   : /la capacité ([^,\.<]+?)(?=\s*[,\.]|\s+et\s+(?:la|le)\s+|\s+Lorsque|$)/g,
            extract : ( match ) => match[ 1 ].trim(),
            multiple: true
        },
        {
            // "et la vision nocturne" (sans "capacité", ex: Dromaar)
            // On exclut "et la capacité" pour ne pas doubler avec le pattern précédent
            field   : "bonus.sens",
            regex   : /et la (?!capacité)([^,\.<]+?)(?=\s*[,\.]|\s+et\s+(?:la|le)\s+|\s+Lorsque|$)/g,
            extract : ( match ) => {
                const val = match[ 1 ].trim();
                if ( /^le trait/i.test( val ) ) return null;
                return val;
            },
            multiple: true
        },
        {
            // "la liste des dons des elfes, des aiuvarins…"
            // "la liste de dons des orcs, des dromaars…"  (variante sans "les")
            field   : "bonus.dons.ancestraux",
            regex   : /la liste d(?:es|e) dons des ([^\.]+)/,
            extract : ( match ) => match[ 1 ]
                .split( /,?\s*(?:des|et des)\s+/ )
                .map( s => s.replace( /\s*et (?:d[eo] (?:votre|leur)|celle d[eo]).*$/i, "" ).trim() )
                .filter( Boolean ),
            multiple: false
        }
    ];

    // Écrit une valeur dans result en suivant un chemin pointé ("bonus.dons.ancestraux")
    function _setPath ( obj, path, value ) {
        const keys = path.split( "." );
        let   cur  = obj;
        for ( let i = 0; i < keys.length - 1; i++ ) {
            if ( !cur[ keys[ i ] ] ) {
                cur[ keys[ i ] ] = {};
            }
            cur = cur[ keys[ i ] ];
        }
        cur[ keys[ keys.length - 1 ] ] = value;
    }

    // Récupère une valeur dans result en suivant un chemin pointé
    function _getPath ( obj, path ) {
        return path.split( "." ).reduce( ( cur, k ) => cur && cur[ k ], obj );
    }

    // Transforme le HTML de general_desc en texte brut pour l'analyse
    function _descToText ( general_desc ) {
        return general_desc
            .map( html => html.replace( /<[^>]+>/g, " " ).replace( /\s+/g, " " ).trim() )
            .join( " " );
    }

    function _parseHeritageBonuses ( result ) {
        if ( !result.general_desc || result.general_desc.length === 0 ) {
            return;
        }

        const text = _descToText( result.general_desc );

        PATTERNS.forEach( pattern => {
            if ( pattern.multiple ) {
                const values  = [];
                let   match;
                const re      = new RegExp( pattern.regex.source, pattern.regex.flags );

                while ( ( match = re.exec( text ) ) !== null ) {
                    values.push( pattern.extract( match ) );
                }

                if ( values.length > 0 ) {
                    const existing = _getPath( result, pattern.field ) || [];
                    _setPath( result, pattern.field, [ ...existing, ...values ] );
                }
            }
            else {
                const match = text.match( pattern.regex );
                if ( match ) {
                    _setPath( result, pattern.field, pattern.extract( match ) );
                }
            }
        } );
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

        _parseHeritageBonuses( result );

        return result;
    };

    return self;

})( SCRAPPER.Heritage || {} );