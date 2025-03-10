"use strict";
var SCRIPT_RACES = (function ( self ) {
    self.getAllRacesDOM    = function ( race_name ) {
        return document.querySelectorAll( ".mdc-data-table__content .mat-mdc-row.element-row" );
    };
    self.getAllRaces       = function ( race_name ) {
        let doms       = self.getAllRacesDOM();
        self.to_return = [];
        let timeout    = 0;
        for ( let i = 0, _size_i = doms.length; i < 1; i++ ) {
            //for ( let i = 0, _size_i = doms.length; i < _size_i; i++ ) {
            setTimeout( () => {
                self.parseRaceDom( doms[ i ], self.to_return );
            }, timeout );
            timeout += 400;
        }
    };
    self.parseRaceDom      = function ( dom_element, array_to_push_in ) {
        let to_return       = {};
        to_return[ "name" ] = dom_element.querySelector( ".cdk-column-name_trans" ).innerText;
        array_to_push_in.push( to_return );
        dom_element.querySelector( ".cdk-column-name_trans" ).click();
        setTimeout( () => {
            let dom_sibling      = dom_element.nextElementSibling;
            let traits_dom       = dom_sibling.querySelectorAll( ".trait" );
            to_return[ "trait" ] = [];
            for ( let i = 0, _size_i = traits_dom.length; i < _size_i; i++ ) {
                to_return[ "trait" ].push( traits_dom[ i ].innerText );
            }
            let dom_descriptions       = dom_sibling.querySelector( ".description" ).children;
            let current_param          = "general_desc";
            to_return[ current_param ] = [];
            for ( let i = 0, _size_i = dom_descriptions.length; i < _size_i; i++ ) {
                if ( dom_descriptions[ i ].tagName === "H2" ) {
                    current_param              = self.parseTitleToParam( dom_descriptions[ i ] );
                    switch ( current_param ) {
                        case "Vous":
                        case "Les autres":
                            break;
                        default:
                            to_return[ current_param ] = [];
                            break;
                    }
                }
                else {
                    switch ( current_param ) {
                        case "Vous":
                        case "Les autres":
                            to_return[ "general_desc" ].push( current_param + " : " + self.replaceAll( dom_descriptions[ i ].outerHTML, "\n", "" ) );
                            break;
                        case "believe_desc":
                            switch ( dom_descriptions[ i ].innerText ) {
                                case "Édits populaires":
                                case "Anathèmes populaires":
                                    to_return[ current_param ].push( dom_descriptions[ i ].outerHTML );
                                    break;
                                default:
                                    to_return[ current_param ].push( dom_descriptions[ i ].innerText );
                                    break;
                            }
                            break;
                        case "society_desc":
                            switch ( dom_descriptions[ i ].innerText ) {
                                case "Exemples de noms":
                                    to_return[ current_param ].push( dom_descriptions[ i ].outerHTML );
                                    break;
                                default:
                                    to_return[ current_param ].push( dom_descriptions[ i ].innerText );
                                    break;
                            }
                            break;
                        case "mecanic":
                            switch ( dom_descriptions[ i ].querySelector("strong").innerText ) {
                                case "Points de vie":
                                    to_return[ "start_life" ] = dom_descriptions[ i ].innerText;
                                    break;
                                default:
                                    to_return[ current_param ].push( dom_descriptions[ i ].innerText );
                                    break;
                            }
                            break;
                        default:
                            to_return[ current_param ].push( dom_descriptions[ i ].innerText );
                            break;
                    }
                }
            }
        }, 200 );
    };
    self.parseTitleToParam = function ( dom_element ) {
        switch ( dom_element.innerText ) {
            case "Vous...":
                return "Vous";
            case "Probablement que les autres...":
                return "Les autres";
            case "Description physique":
                return "physical_desc";
            case "Société":
                return "society_desc";
            case "Croyances":
                return "believe_desc";
            case "Mécaniques de l'elfe":
                return "mecanic";
            case "Héritages elfiques":
                return "heritages";
            default :
                console.warn( "GSOU", "[SCRIPT_RACES - parseTitleToParam]", "NOT MANAGED", dom_element.innerText );
            
        }
    };
    
    self.replaceAll = function ( string, target, replacement ) {
        return string.split( target ).join( replacement || '' );
    };
    
    return self;
})( SCRIPT_RACES || {} );

SCRIPT_RACES.getAllRaces();
setTimeout( function () {
    console.log( "GSOU", "[ - ]", SCRIPT_RACES.to_return );
}, 500 );
