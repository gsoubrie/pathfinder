"use strict";
/* global SCRAPPER */

var SCRAPPER = SCRAPPER || {};

SCRAPPER.Ancestry = (function ( self ) {

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

    const INLINE_SECTIONS = [ "Vous", "Les autres", "Vous pourriez...", "Les autres pourraient…" ];

    const CHARACTERISTICS_MAP = {
        "Force"        : "FOR",
        "Dextérité"    : "DEX",
        "Constitution" : "CON",
        "Intelligence" : "INT",
        "Sagesse"      : "SAG",
        "Charisme"     : "CHA",
        "Libre"        : "FREE"
    };

    //********************************************  PRIVATE  **************************************************//

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

    function _parseCharacteristics ( value ) {
        const choice  = value.split( ", " ).map( s => CHARACTERISTICS_MAP[ s.trim() ] || s.trim() );
        const nb_free = choice.filter( s => s === "FREE" ).length;
        return {
            number : choice.length,
            nb_free,
            choice
        };
    }

    function _parseMechanic ( el, result ) {
        const cleanText = SCRAPPER.Shared.cleanText;
        const strong    = el.querySelector( "strong" );

        if ( !strong ) {
            if ( !result[ "mechanic" ] ) {
                result[ "mechanic" ] = [];
            }
            result[ "mechanic" ].push( cleanText( el ) );
            return;
        }

        const label = cleanText( strong );
        const full  = cleanText( el );
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
                result.characteristics_bonus = _parseCharacteristics( value );
                break;
            case "Pénalité d'attribut":
            case "Pénalités d'attribut":
                result.characteristics_malus = _parseCharacteristics( value );
                break;
            case "Langues":
                result.language = value.split( ", " ).map( s => s.trim() );
                break;
            case "Langues supplémentaires":
                const cleaned      = value
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
                result[ "mechanic" ].push( cleanText( el ) );
        }
    }

    //********************************************  ACTIONS  **************************************************//

    self.extract = function () {
        const cleanText = SCRAPPER.Shared.cleanText;
        const result    = {};

        const title = document.querySelector( ".content .header .title" );
        result.name = cleanText( title );

        const detailBlock = document.querySelector( ".description, [class*='description'], .detail-content" );

        if ( !detailBlock ) {
            result._fallback = true;
            return result;
        }

        const children = Array.from( detailBlock.children );

        const traits  = document.querySelectorAll( ".trait" );
        result.traits = Array.from( traits ).map( t => cleanText( t ) );

        let currentSection       = "general_desc";
        result[ currentSection ] = [];

        children.forEach( el => {
            const tag  = el.tagName.toUpperCase();
            const text = cleanText( el );

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
    };

    return self;

})( SCRAPPER.Ancestry || {} );
