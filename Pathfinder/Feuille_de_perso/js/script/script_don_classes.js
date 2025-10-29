"use strict";
var SCRIPT_DON_CLASSES = (function ( self ) {
    self.getAllDOM         = function () {
        return document.querySelectorAll( ".mat-mdc-row.mdc-data-table__row.cdk-row.element-row" );
    };
    self.getAll            = function () {
        let doms       = self.getAllDOM();
        self.to_return = [];
        let timeout    = 1000;
        //for ( let i = 0, _size_i = doms.length; i < 2; i++ ) {
        for ( let i = 0, _size_i = doms.length; i < _size_i; i++ ) {
            setTimeout( function () {
                self.parseDom( doms[ i ] );
            }, timeout );
            timeout += 400;
        }
    };
    self.parseDom          = function ( dom_element ) {
        let to_return              = {};
        to_return[ "name" ]        = dom_element.querySelector( ".cdk-column-name_trans" ).innerText;
        to_return[ "required" ]    = [];
        to_return[ "description" ] = [];
        to_return[ "effect" ]      = [];
        self.to_return.push( to_return );
        dom_element.querySelector( ".cdk-column-name_trans" ).click();
        setTimeout( () => {
            self.previous_title = "";
            let dom_sibling     = dom_element.nextElementSibling;
            self.parseMetadatas( dom_sibling.querySelector( ".metadata" ).children, to_return );
            self.parseChildrenBy( dom_sibling.querySelector( ".description" ).children, to_return );
        }, 200 );
    };
    self.parseMetadatas    = function ( children, object_to_complete ) {
        let current_child;
        for ( let i = 0, _size_i = children.length; i < _size_i; i++ ) {
            self.parseMetadata( children[ i ], object_to_complete );
        }
    };
    self.parseMetadata     = function ( current_child, object_to_complete ) {
        switch ( current_child.tagName ) {
            case "DIV":
                let to_add = current_child.innerText;
                if ( SERVICE.STRING.contains( to_add, "Prérequis" ) ) {
                    to_add = SERVICE.STRING.replaceAll( to_add, "Prérequis", "" );
                }
                object_to_complete[ "required" ].push( to_add.trim() );
                return;
            default:
                console.log( "GSOU", "[SCRIPT_CLASSES - parseChildByPart]", "[NOT MANAGED]", current_child.tagName );
                break;
        }
    };
    self.parseChildrenBy   = function ( children, object_to_complete ) {
        let current_child;
        for ( let i = 0, _size_i = children.length; i < _size_i; i++ ) {
            self.parseChild( children[ i ], object_to_complete );
        }
    };
    self.parseChild        = function ( current_child, object_to_complete ) {
        switch ( current_child.tagName ) {
            case "P":
                let annotation = current_child.querySelector( "elt-foundry-annotation" );
                if ( annotation ) {
                    object_to_complete[ "effect" ].push( annotation.getAttribute( "text" ) );
                }
                else {
                    object_to_complete[ "description" ].push( current_child.innerText );
                }
                break;
            case "UL":
                object_to_complete[ "description" ].push( self.parseChildUL( current_child ) );
                break;
            default:
                console.log( "GSOU", "[SCRIPT_CLASSES - parseChildByPart]", "[NOT MANAGED]", current_child.tagName );
                break;
        }
    };
    self.parseChildUL      = function ( current_child ) {
        let to_return = [];
        let dom_li    = current_child.querySelectorAll( "li" );
        for ( let i = 0, _size_i = dom_li.length; i < _size_i; i++ ) {
            to_return.push( dom_li[ i ].innerText );
        }
        return to_return;
    };
    self.parseTitleToParam = function ( dom_element ) {
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
})( SCRIPT_DON_CLASSES || {} );

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


SCRIPT_DON_CLASSES.getAll();
setTimeout( function () {
    console.log( "GSOU", "[ - ]", SCRIPT_DON_CLASSES.to_return );
}, 30000 );
