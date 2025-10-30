"use strict";
var SCRIPT_DON_CLASSES = (function ( self ) {
    self.getAllDOM         = function () {
        return document.querySelectorAll( ".mat-mdc-row.mdc-data-table__row.cdk-row.element-row" );
    };
    self.getAll            = function () {
        let doms       = self.getAllDOM();
        self.to_return = [];
        let timeout    = 1000;
        //for ( let i = 0, _size_i = doms.length; i < 3; i++ ) {
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
        to_return[ "level" ]        = dom_element.querySelector( ".level-cell" ).innerText;
        to_return[ "required" ]    = [];               
        to_return[ "description" ] = [];
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
                    object_to_complete[ "description" ].push( current_child.innerText );                                
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
}, 60000 );
