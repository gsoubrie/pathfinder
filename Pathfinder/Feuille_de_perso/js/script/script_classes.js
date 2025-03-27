"use strict";
var SCRIPT_CLASSES = (function ( self ) {
    self.getAllDOM            = function () {
        return document.querySelectorAll( ".mat-mdc-row.mdc-data-table__row.cdk-row.element-row" );
    };
    self.getAll               = function () {
        let doms       = self.getAllDOM();
        self.to_return = [];
        let timeout    = 0;
        for ( let i = 0, _size_i = doms.length; i < 1; i++ ) {
            //for ( let i = 0, _size_i = doms.length; i < _size_i; i++ ) {
            setTimeout( function () {
                self.parseDom( doms[ i ] );
            }, timeout );
            timeout += 400;
        }
    };
    self.parseDom             = function ( dom_element, array_to_push_in ) {
        let to_return       = {};
        to_return[ "name" ] = dom_element.querySelector( ".cdk-column-name_trans" ).innerText;
        console.log( to_return[ "name" ] );
        self.to_return.push( to_return );
        dom_element.querySelector( ".cdk-column-name_trans" ).click();
        setTimeout( () => {
            let dom_sibling = dom_element.nextElementSibling;
            let traits_dom  = dom_sibling.querySelectorAll( ".trait" );
            let children    = dom_sibling.querySelector( ".description" ).children;
            //let current_param          = "general_desc";
            //to_return[ current_param ] = [];
            self.parseChildrenByClass( children, to_return );
            //let current_child;
            //for ( let i = 0, _size_i = children.length; i < _size_i; i++ ) {
            //    if ( children[ i ].tagName === "H2" ) {
            //        current_param = self.parseTitleToParam( children[ i ] );
            //        switch ( current_param ) {
            //            case "Vous":
            //            case "Les autres":
            //            case "Vous pourriez...":
            //                break;
            //            default:
            //                to_return[ current_param ] = [];
            //                break;
            //        }
            //    }
            //    else {
            //        switch ( current_param ) {
            //            case "Vous":
            //            case "Les autres":
            //            case "Vous pourriez...":
            //            case "Les autres pourraient…":
            //                to_return[ "general_desc" ].push( current_param + " : " + self.replaceAll( children[ i ].outerHTML, "\n", "" ) );
            //                break;
            //            case "noms":
            //                break;
            //            case "believe_desc":
            //                switch ( children[ i ].innerText ) {
            //                    case "Édits populaires":
            //                    case "Anathèmes populaires":
            //                        to_return[ current_param ].push( children[ i ].outerHTML );
            //                        break;
            //                    default:
            //                        to_return[ current_param ].push( children[ i ].innerText );
            //                        break;
            //                }
            //                break;
            //            case "society_desc":
            //                switch ( children[ i ].innerText ) {
            //                    case "Exemples de noms":
            //                        to_return[ current_param ].push( children[ i ].outerHTML );
            //                        break;
            //                    default:
            //                        to_return[ current_param ].push( children[ i ].innerText );
            //                        break;
            //                }
            //                break;
            //            case "mecanic":
            //                switch ( children[ i ].querySelector( "strong" ).innerText ) {
            //                    case "Points de vie":
            //                        to_return[ "start_life" ] = parseInt( self.replaceAll( children[ i ].innerText, "Points de vie ", "" ) );
            //                        break;
            //                    case "Taille":
            //                        switch ( self.replaceAll( children[ i ].innerText, "Taille ", "" ) ) {
            //                            case "Moyenne":
            //                                to_return[ "body_size" ] = "M";
            //                                break;
            //                            case "Petite":
            //                                to_return[ "body_size" ] = "P";
            //                                break;
            //                            case "Très petite":
            //                                to_return[ "body_size" ] = "TP";
            //                                break;
            //                            case "Grande":
            //                                to_return[ "body_size" ] = "G";
            //                                break;
            //                            case "Très grande":
            //                                to_return[ "body_size" ] = "TG";
            //                                break;
            //                            case "Gigantesque":
            //                                to_return[ "body_size" ] = "T";
            //                                break;
            //                            default:
            //                                console.warn( "GSOU", "[SIZE UNKNOWN]", "NOT MANAGED", self.replaceAll( children[ i ].innerText, "Taille ", "" ) );
            //                                break;
            //                        }
            //                        break;
            //                    case "Vitesse":
            //                        to_return[ "speed" ] = self.replaceAll( children[ i ].innerText, "Vitesse ", "" );
            //                        to_return[ "speed" ] = parseInt( self.replaceAll( to_return[ "speed" ], "mètres", "" ) );
            //                        break;
            //                    case "Primes d'attributs":
            //                        to_return[ "characteristic_bonus" ] = self.replaceAll( children[ i ].innerText, "Primes d'attributs ", "" );
            //                        to_return[ "characteristic_bonus" ] = to_return[ "characteristic_bonus" ].split( ", " );
            //                        break;
            //                    case "Pénalité d'attribut":
            //                        to_return[ "characteristic_malus" ] = self.replaceAll( children[ i ].innerText, "Pénalité d'attribut ", "" );
            //                        to_return[ "characteristic_malus" ] = to_return[ "characteristic_malus" ].split( ", " );
            //                        break;
            //                    case "Pénalité d'attribut":
            //                        to_return[ "characteristic_malus" ] = self.replaceAll( children[ i ].innerText, "Pénalité d'attribut ", "" );
            //                        to_return[ "characteristic_malus" ] = to_return[ "characteristic_malus" ].split( ", " );
            //                        break;
            //                    case "Langues":
            //                        to_return[ "language" ] = self.replaceAll( children[ i ].innerText, "Langues ", "" );
            //                        to_return[ "language" ] = to_return[ "language" ].split( ", " );
            //                        break;
            //                    case "Langues supplémentaires":
            //                        to_return[ "language_sup" ] = self.replaceAll( children[ i ].innerText, "Langues supplémentaires égal à votre modificateur d'Intelligence (si positif). Choisissez parmi ", "" );
            //                        to_return[ "language_sup" ] = self.replaceAll( to_return[ "language_sup" ], "Langues supplémentaires égal à votre modificateur d'Intelligence (s'il est positif). Choisissez parmi ", "" );
            //                        to_return[ "language_sup" ] = self.replaceAll( to_return[ "language_sup" ], " et toute autre langue à laquelle vous avez accès (telles que les langues prévalentes dans votre région).", "" );
            //                        to_return[ "language_sup" ] = to_return[ "language_sup" ].split( ", " );
            //                        break;
            //                    case "Sens":
            //                        to_return[ "sens" ] = self.replaceAll( children[ i ].innerText, "Sens ", "" );
            //                        break;
            //                    default:
            //                        to_return[ current_param ].push( children[ i ].innerText );
            //                        break;
            //                }
            //                break;
            //            default:
            //                to_return[ current_param ].push( children[ i ].innerText );
            //                break;
            //        }
            //    }
            //}
        }, 200 );
    };
    self.parseChildrenByClass = function ( children, object_to_complete ) {
        let current_child;
        for ( let i = 0, _size_i = children.length; i < _size_i; i++ ) {
            self.parseChildByClass( children[ i ], object_to_complete );
        }
    };
    self.parseChildByClass    = function ( current_child, object_to_complete ) {
        switch ( current_child.className ) {
            case "fluff":
                object_to_complete[ "general_desc" ] = current_child.innerText;
                break;
            case "basics-title":
                if ( SERVICE.STRING.contains( current_child.innerText, "Attribut essentiel" ) ) {
                    object_to_complete[ "prime_attribute" ] = SERVICE.STRING.splitAndTrim( current_child.innerText, ":", 1 );
                }
                break;
            case "basics-container":
                self.parseChildrenByClass( current_child.children, object_to_complete );
                break;
            case "":
                break;
            default:
                console.log( "GSOU", "[SCRIPT_CLASSES - parseChildByClass]", "[NOT MANAGED]", current_child.className );
                break;
        }
    };
    self.parseTitleToParam    = function ( dom_element ) {
        let text = dom_element.innerText;
        if ( text.startsWith( "Méchaniques" ) ) {
            return "mecanic";
        }
        if ( text.startsWith( "Mécaniques" ) ) {
            return "mecanic";
        }
        if ( text.startsWith( "Héritages" ) ) {
            return "legacies";
        }
        switch ( text ) {
            case "Vous...":
                return "Vous";
            case "Probablement que les autres...":
                return "Les autres";
            case "Vous pourriez...":
                return "Vous pourriez...";
            case "Les autres pourraient…":
                return "Les autres pourraient…";
            case "Description physique":
            case "Description Physique":
                return "physical_desc";
            case "Société":
                return "society_desc";
            case "Croyances":
                return "believe_desc";
            case "Mécaniques de l'elfe":
                return "mecanic";
            case "Noms":
                return "noms";
            default :
                console.warn( "GSOU", "[SCRIPT_CLASSES - parseTitleToParam]", "NOT MANAGED", dom_element.innerText );
            
        }
    };
    
    self.replaceAll = function ( string, target, replacement ) {
        return string.split( target ).join( replacement || '' );
    };
    
    return self;
})( SCRIPT_CLASSES || {} );

SCRIPT_CLASSES.getAll();
setTimeout( function () {
    console.log( "GSOU", "[ - ]", SCRIPT_CLASSES.to_return );
}, 2000 );
