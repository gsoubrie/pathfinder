"use strict";
/* global chrome */
// content.js — injecté sur chaque page pf2e.pathfinder-fr.org
// Écoute une demande d'extraction depuis le background

var SCRAPPER = SCRAPPER || {};

SCRAPPER.Content = (function ( self ) {
    
    //********************************************  CONSTANTS  **************************************************//
    
    const SECTION_MAP = {
        "Vous..."                       : "Vous",
        "Probablement que les autres...": "Les autres",
        "Vous pourriez..."              : "Vous pourriez...",
        "Les autres pourraient…"        : "Les autres pourraient…",
        "Description physique"          : "physical_desc",
        "Description Physique"          : "physical_desc",
        "Société"                       : "society_desc",
        "Croyances"                     : "believe_desc",
        "Noms"                          : "noms"
    };
    
    const TAILLE_MAP = {
        "Moyenne"    : "M",
        "Petite"     : "P",
        "Très petite": "TP",
        "Grande"     : "G",
        "Très grande": "TG",
        "Gigantesque": "T"
    };
    
    const INLINE_SECTIONS = ["Vous", "Les autres", "Vous pourriez...", "Les autres pourraient…"];
    
    //********************************************  PRIVATE  **************************************************//
    
    function _cleanText ( el ) {
        if ( !el ) {
            return "";
        }
        const clone = el.cloneNode ? el.cloneNode( true ) : el;
        if ( clone.querySelectorAll ) {
            clone.querySelectorAll( "app-action-icon, mat-icon, .mat-icon" ).forEach( n => n.remove() );
        }
        return (clone.textContent || clone.innerText || "").replace( /\s+/g, " " ).trim();
    }
    
    function _parseSectionTitle ( text ) {
        if ( text.startsWith( "Méchaniques" ) || text.startsWith( "Mécaniques" ) ) {
            return "mechanic";
        }
        if ( text.startsWith( "Héritages" ) ) {
            return "legacies";
        }
        return SECTION_MAP[ text ] || text;
    }
    
    function _parseTaille ( value ) {
        return TAILLE_MAP[ value ] || value;
    }
    
    function _parseMechanic ( el, result ) {
        const strong = el.querySelector( "strong" );
        
        if ( !strong ) {
            if ( !result[ "mechanic" ] ) {
                result[ "mechanic" ] = [];
            }
            result[ "mechanic" ].push( _cleanText( el ) );
            return;
        }
        
        const label = _cleanText( strong );
        const full  = _cleanText( el );
        const value = full.replace( label, "" ).trim();
        
        switch ( label ) {
            case "Points de vie":
                result.start_life = parseInt( value ) || value;
                break;
            case "Taille":
                result.body_size = _parseTaille( value );
                break;
            case "Vitesse":
                result.speed = parseInt( value ) || value;
                break;
            case "Primes d'attributs":
                result.characteristics_bonus = value.split( ", " ).map( s => s.trim() );
                break;
            case "Pénalité d'attribut":
            case "Pénalités d'attribut":
                result.characteristics_malus = value.split( ", " ).map( s => s.trim() );
                break;
            case "Langues":
                result.language = value.split( ", " ).map( s => s.trim() );
                break;
            case "Langues supplémentaires":
                const cleaned       = value
                .replace( /^égal à votre modificateur d'Intelligence \(si(l est)? positif\)\. Choisissez parmi\s*/i, "" )
                .replace( / et toute autre langue.*$/i, "" )
                .trim();
                result.language_sup = cleaned.split( ", " ).map( s => s.trim() );
                break;
            case "Sens":
                result.sens = value;
                break;
            default:
                if ( !result[ "mechanic" ] ) {
                    result[ "mechanic" ] = [];
                }
                result[ "mechanic" ].push( _cleanText( el ) );
        }
    }
    
    // Remplace les elt-foundry-annotation par des <div class="gs-link-information"> dans un clone
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
            const name   = _cleanText( a );
            
            const div     = document.createElement( "div" );
            div.className = "gs-link-information";
            div.setAttribute( "onclick", `CONTROLLER.Main.doActionAfter('event__show_information', {'param__object__uuid': '${linkId}'})` );
            div.textContent = name;
            
            annotation.replaceWith( div );
        } );
        
        return clone;
    }
    
    //********************************************  ACTIONS  **************************************************//
    
    function _extractLinks () {
        const anchors    = document.querySelectorAll( "elt-foundry-annotation a[href]" );
        const byCategory = {};
        
        anchors.forEach( a => {
            const href   = a.getAttribute( "href" );
            const parts  = href.split( "/" ).filter( Boolean );
            const cat    = parts[ 0 ];
            const linkId = parts[ 1 ];
            const name   = _cleanText( a ); // _cleanText retire les mat-icon
            
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
    
    function _extractAncestry () {
        const result = {};
        
        const title = document.querySelector( ".content .header .title" );
        result.name = _cleanText( title );
        
        const detailBlock = document.querySelector( ".description, [class*='description'], .detail-content" );
        
        if ( !detailBlock ) {
            result._fallback = true;
            return result;
        }
        
        const children = Array.from( detailBlock.children );
        
        const traits  = document.querySelectorAll( ".trait" );
        result.traits = Array.from( traits ).map( t => _cleanText( t ) );
        
        let currentSection       = "general_desc";
        result[ currentSection ] = [];
        
        children.forEach( el => {
            const tag  = el.tagName.toUpperCase();
            const text = _cleanText( el );
            
            if ( tag === "H2" || tag === "H3" ) {
                currentSection = _parseSectionTitle( text );
                if ( !INLINE_SECTIONS.includes( currentSection ) ) {
                    if ( !result[ currentSection ] ) {
                        result[ currentSection ] = [];
                    }
                }
                return;
            }
            
            switch ( currentSection ) {
                case "Vous":
                case "Les autres":
                case "Vous pourriez...":
                case "Les autres pourraient…":
                    result[ "general_desc" ].push( currentSection + " : " + el.innerHTML.replace( /\n/g, "" ) );
                    break;
                
                case "noms":
                    break; // ignorés
                
                case "mechanic":
                    _parseMechanic( el, result );
                    break;
                
                default:
                    if ( text ) {
                        if ( !result[ currentSection ] ) {
                            result[ currentSection ] = [];
                        }
                        result[ currentSection ].push( text );
                    }
            }
        } );
        return result;
    }
    
    function _extractHeritage () {
        const result = {};
        
        const title = document.querySelector( ".content .header .title" );
        result.name = _cleanText( title );
        
        const traits  = document.querySelectorAll( ".trait" );
        result.traits = Array.from( traits ).map( t => _cleanText( t ) );
        
        const detailBlock = document.querySelector( ".description, [class*='description'], .detail-content" );
        
        if ( !detailBlock ) {
            result._fallback = true;
            return result;
        }
        
        // Remplace les annotations par des gs-link-information avant d'extraire le HTML
        const processedBlock = _replaceAnnotationLinks( detailBlock );
        
        result.general_desc = Array.from( processedBlock.children )
                                   .map( el => el.innerHTML.trim() )
                                   .filter( html => html.length > 0 );
        
        return result;
    }
    
    function _extractPage () {
        const path     = window.location.pathname;
        const segments = path.split( "/" ).filter( Boolean );
        const category = segments[ 0 ]; // "ancestries", "classes", etc.
        const id       = segments[ 1 ];
        
        const links = _extractLinks();
        
        let data = {};
        switch ( category ) {
            case "ancestries":
                data = _extractAncestry();
                break;
            case "heritages":
                data = _extractHeritage();
                break;
            default:
                data = { _raw: true, text: document.body.innerText.slice( 0, 500 ) };
        }
        data[ "category" ] = category;
        data[ "id" ]       = id;
        data[ "href" ]     = path;
        
        return { data, links };
    }
    
    //********************************************  MESSAGES  **************************************************//
    
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
                    return true; // async
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