"use strict";
var SCRIPT_HISTORIQUES = (function ( self ) {
    self.getAllDOM           = function () {
        return document.querySelectorAll( ".mat-mdc-row.mdc-data-table__row.cdk-row.element-row" );
    };
    self.getAll              = function () {
        let doms = self.getAllDOM();
        console.log( "GSOU", "[SCRIPT_HISTORIQUES - getAll]", doms );
        self.to_return = [];
        let timeout    = 1000;
        for ( let i = 0, _size_i = doms.length; i < 2; i++ ) {
            //for ( let i = 0, _size_i = doms.length; i < _size_i; i++ ) {
            setTimeout( function () {
                self.parseDom( doms[ i ] );
            }, timeout );
            timeout += 400;
        }
    };
    self.parseDom            = function ( dom_element, array_to_push_in ) {
        self.previous_title        = "description";
        let to_return              = {};
        to_return[ "name" ]        = dom_element.querySelector( ".cdk-column-name_trans" ).innerText;
        to_return[ "requirement" ] = [];
        to_return[ "description" ] = [];
        self.to_return.push( to_return );
        dom_element.querySelector( ".cdk-column-name_trans" ).click();
        setTimeout( () => {
            let dom_sibling = dom_element.nextElementSibling;
            let children    = dom_sibling.querySelector( ".description" ).children;
            self.parseChildrenBy( children, to_return );
        }, 200 );
    };
    self.parseChildrenBy     = function ( children, object_to_complete ) {
        let current_child;
        for ( let i = 0, _size_i = children.length; i < _size_i; i++ ) {
            self.parseChildByPart( children[ i ], object_to_complete );
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
            case "P":
                self.parseChildByText( current_child.innerText, object_to_complete );
                break;
            default:
                console.log( "GSOU", "[SCRIPT_CLASSES - parseChildByPart]", "[NOT MANAGED]", current_child.tagName );
                break;
        }
    };
    self.parseChildByText    = function ( text, object_to_complete ) {
        if ( SERVICE.STRING.startsWith( text, "Prérequis" ) ) {
            object_to_complete[ "requirement" ].push( SERVICE.STRING.replaceAll( text, "Prérequis ", "" ) );
        }
        else if ( SERVICE.STRING.containsIgnoreCase( text, "Choisissez deux primes d'attributs" ) ) {
            object_to_complete[ "prime_attribute" ] = {
                number: 2,
                choice: SERVICE.STRING.parseMatching( text, CHARACTERISTIC )
            };
        }
        else if ( SERVICE.STRING.containsIgnoreCase( text, "Vous êtes qualifié" ) ) {
            let split = text.split( "." );
            self.parseTextToSkill( split[ 0 ], "qualify", object_to_complete );
            for ( let i = 1, _size_i = split.length; i < _size_i; i++ ) {
                self.parseChildByText( split[ i ], object_to_complete );
            }
        }
        else {
            object_to_complete[ "description" ].push( text );
            console.log( "GSOU", "[SCRIPT_HISTORIQUES - parseChildByPart]", text );
        }
    };
    self.parseTextToSkill    = function ( text, rank_skill, object_to_complete ) {
        object_to_complete[ "skills" ]               = object_to_complete[ "skills" ] || {};
        object_to_complete[ "skills" ][ rank_skill ] = object_to_complete[ "skills" ][ rank_skill ] || [];
        let split                                    = text.split( "en" );
        for ( let i = 1, _size_i = split.length; i < _size_i; i++ ) {
            object_to_complete[ "skills" ][ rank_skill ].push( self.cleanTextToSkill( split[ i ] ) );
        }
    };
    self.cleanTextToSkill    = function ( text_skill ) {
        text_skill = SERVICE.STRING.replaceAll( text_skill, "et", "" );
        text_skill = text_skill.trim();
        return text_skill;
    };
    
    return self;
})( SCRIPT_HISTORIQUES || {} );

var SERVICE    = {};
SERVICE.STRING = (function ( self ) {
    self.replaceAll                   = function ( string, target, replacement ) {
        return string.split( target ).join( replacement || '' );
    };
    self.containsIgnoreCase           = function ( string, to_find ) {
        if ( !string ) {
            return false;
        }
        
        var _string_to_lower_case  = string.toLowerCase();
        var _to_find_to_lower_case = to_find.toLowerCase();
        return self.contains( _string_to_lower_case, _to_find_to_lower_case );
    };
    self.contains                     = function ( string, to_find ) {
        if ( !string || !to_find ) {
            return false;
        }
        return string.indexOf( to_find ) !== -1;
    };
    self.startsWith                   = function ( string, to_find ) {
        if ( !string ) {
            return false;
        }
        return string.substr( 0, to_find.length ) === to_find;
    };
    self.splitAndTrim                 = function ( string_to_split, separator, index_to_return ) {
        let to_return = string_to_split.split( separator );
        return to_return[ index_to_return ].trim();
    };
    self.parseStringToPositiveInteger = function ( value ) {
        return parseInt( value.replace( /[^\d]/g, '' ) );
    };
    self.parseMatching                = function ( text, matching_list ) {
        let to_return = [];
        var _keys     = Object.keys( matching_list );
        var _current_key;
        for ( let i = 0, _size = _keys.length; i < _size; i++ ) {
            _current_key = _keys[ i ];
            if ( self.containsIgnoreCase( text, matching_list[ _current_key ].label ) ) {
                to_return.push( matching_list[ _current_key ].key );
            }
        }
        return to_return;
    };
    return self;
})( SERVICE.STRING || {} );

var CHARACTERISTIC = {
    FORCE       : {
        key  : "FOR",
        label: "Force"
    },
    DEXTERITY   : {
        key  : "DEX",
        label: "Dextérité"
    },
    CONSTITUTION: {
        key  : "CON",
        label: "Constitution"
    },
    INTELLIGENCE: {
        key  : "INT",
        label: "Intelligence"
    },
    WISDOM      : {
        key  : "SAG",
        label: "Sagesse"
    },
    CHARISMA    : {
        key  : "CHA",
        label: "Charisme"
    },
    FREE        : {
        key  : "FRE",
        label: "Libre"
    }
};

SCRIPT_HISTORIQUES.getAll();
setTimeout( function () {
    console.log( "GSOU", "[ - ]", SCRIPT_HISTORIQUES.to_return );
    //}, 30000 );
}, 10000 );

