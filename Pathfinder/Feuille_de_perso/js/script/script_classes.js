"use strict";
var SCRIPT_CLASSES = (function ( self ) {
    self.getAllDOM           = function () {
        return document.querySelectorAll( ".mat-mdc-row.mdc-data-table__row.cdk-row.element-row" );
    };
    self.getAll              = function () {
        let doms       = self.getAllDOM();
        self.to_return = [];
        let timeout    = 1000;
        for ( let i = 13, _size_i = doms.length; i < 14; i++ ) {
            //for ( let i = 0, _size_i = doms.length; i < _size_i; i++ ) {
            setTimeout( function () {
                self.parseDom( doms[ i ] );
            }, timeout );
            timeout += 400;
        }
    };
    self.parseDom            = function ( dom_element, array_to_push_in ) {
        let to_return             = {};
        to_return[ "name" ]       = dom_element.querySelector( ".cdk-column-name_trans" ).innerText;
        to_return[ "capacities" ] = [];
        self.to_return.push( to_return );
        dom_element.querySelector( ".cdk-column-name_trans" ).click();
        setTimeout( () => {
            self.capacity_doms  = false;
            self.previous_title = "";
            let dom_sibling     = dom_element.nextElementSibling;
            let children        = dom_sibling.querySelector( ".description" ).children;
            self.parseChildrenBy( children, to_return );
        }, 200 );
    };
    self.parseChildrenBy     = function ( children, object_to_complete ) {
        let current_child;
        for ( let i = 0, _size_i = children.length; i < _size_i; i++ ) {
            if ( !self.capacity_doms ) {
                self.parseChildByClass( children[ i ], object_to_complete );
            }
            else {
                self.parseChildByPart( children[ i ], object_to_complete );
            }
        }
    };
    self.parseChildByClass   = function ( current_child, object_to_complete ) {
        switch ( current_child.className ) {
            case "fluff":
                object_to_complete[ "general_desc" ] = current_child.innerText;
                break;
            case "basics-title":
                if ( SERVICE.STRING.contains( current_child.innerText, "Attribut essentiel" ) ) {
                    object_to_complete[ "prime_attribute" ] = SERVICE.STRING.splitAndTrim( current_child.innerText, ":", 1 );
                }
                if ( SERVICE.STRING.contains( current_child.innerText, "Points de vie" ) ) {
                    object_to_complete[ "life_point_by_level" ] = SERVICE.STRING.parseStringToPositiveInteger( current_child.innerText );
                }
                break;
            case "basics-content":
            case "title":
                break;
            case "basics-container":
            case "starting-info-container":
                self.parseChildrenBy( current_child.children, object_to_complete );
                break;
            case "roleplaying-container":
            case "initial-proficiencies-container":
                self.parseChildrenByPart( current_child.children, object_to_complete );
                break;
            case "pf2e remaster":
            case "pf2e":
                self.parseTableCapacity( current_child, object_to_complete );
                self.capacity_doms = true;
                break;
            case "":
                break;
            default:
                console.log( "GSOU", "[SCRIPT_CLASSES - parseChildByClass]", "[NOT MANAGED]", current_child.className, current_child );
                break;
        }
    };
    self.parseChildrenByPart = function ( children, object_to_complete ) {
        for ( let i = 0, _size_i = children.length; i < _size_i; i++ ) {
            self.parseChildByPart( children[ i ], object_to_complete );
        }
    };
    self.parseChildByPart    = function ( current_child, object_to_complete ) {
        if ( self.capacity_doms ) {
            if ( current_child.innerText ) {
                object_to_complete[ "capacities" ].push( current_child.innerText );
            }
            return;
        }
        switch ( current_child.tagName ) {
            case "H1":
            case "H2":
                self.previous_title = this.parseTitleToParam( current_child );
                return;
            case "P":
                if ( !object_to_complete[ self.previous_title ] ) {
                    object_to_complete[ self.previous_title ] = current_child.innerText;
                    return;
                }
                else if ( !Array.isArray( object_to_complete[ self.previous_title ] ) ) {
                    object_to_complete[ self.previous_title ] = [object_to_complete[ self.previous_title ]];
                }
                object_to_complete[ self.previous_title ].push( current_child.innerText );
                break;
            case "UL":
                object_to_complete[ self.previous_title ] = [];
                self.parseChildrenByPart( current_child.children, object_to_complete );
                break;
            case "LI":
                object_to_complete[ self.previous_title ].push( current_child.innerText );
                break;
            default:
                console.log( "GSOU", "[SCRIPT_CLASSES - parseChildByPart]", "[NOT MANAGED]", current_child.tagName );
                break;
        }
    };
    self.parseTableCapacity  = function ( current_child, object_to_complete ) {
        object_to_complete[ "capacity_by_level" ] = [];
        let dom_lines_td                          = current_child.querySelectorAll( "td" );
        for ( let i = 1, _size_i = dom_lines_td.length; i < _size_i; i++ ) {
            object_to_complete[ "capacity_by_level" ].push( dom_lines_td[ i ].innerText );
            i++;
        }
    };
    self.parseTitleToParam   = function ( dom_element ) {
        let text = dom_element.innerText;
        switch ( text ) {
            case "Lors des rencontres de combat...":
            case "Durant les rencontres de combat...":
                return "desc_fight";
            case "Lors des rencontres sociales...":
            case "Durant les rencontres sociales...":
                return "desc_socially";
            case "En exploration...":
            case "En Exploration...":
                return "desc_exploration";
            case "Durant les intermèdes...":
            case "Pendant un intermède...":
            case "Durant les intermèdes":
                return "desc_interlude";
            case "Vous pourriez...":
            case "Vous...":
                return "desc_you_could";
            case "Probablement que les autres...":
                return "desc_probably_others";
            case "Maîtrises initiales":
            case "Maitrises initiales":
            case "Compétences initiales":
                return "mastery_initial";
            case "Perception":
                return "mastery_perception";
            case "Jets de sauvegarde":
            case "Jet de sauvegarde":
                return "mastery_js";
            case "Compétences":
                return "mastery_skill";
            case "Attaques":
                return "mastery_attack";
            case "Défenses":
            case "Défense":
            case "Defenses":
                return "mastery_defense";
            case "Sorts":
                return "mastery_spell";
            case "Rareté":
                return "mastery_rarity";
            case "DD de Classe":
            case "DD de classe":
                return "mastery_dd";
            default :
                console.warn( "GSOU", "[SCRIPT_CLASSES - parseTitleToParam]", "NOT MANAGED", dom_element.innerText );
            
        }
    };
    
    self.replaceAll = function ( string, target, replacement ) {
        return string.split( target ).join( replacement || '' );
    };
    
    return self;
})( SCRIPT_CLASSES || {} );

var SERVICE    = {};
SERVICE.STRING = (function ( self ) {
    self.replaceAll                   = function ( string, target, replacement ) {
        return string.split( target ).join( replacement || '' );
    };
    self.contains                     = function ( string, to_find ) {
        if ( !string || !to_find ) {
            return false;
        }
        return string.indexOf( to_find ) !== -1;
    };
    self.splitAndTrim                 = function ( string_to_split, separator, index_to_return ) {
        let to_return = string_to_split.split( separator );
        return to_return[ index_to_return ].trim();
    };
    self.parseStringToPositiveInteger = function ( value ) {
        return parseInt( value.replace( /[^\d]/g, '' ) );
    };
    return self;
})( SERVICE.STRING || {} );


SCRIPT_CLASSES.getAll();
setTimeout( function () {
    console.log( "GSOU", "[ - ]", SCRIPT_CLASSES.to_return );
}, 30000 );
