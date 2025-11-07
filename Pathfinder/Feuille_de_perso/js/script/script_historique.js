"use strict";
var SCRIPT_HISTORIQUES = (function ( self ) {
    self.getAllDOM           = function () {
        return document.querySelectorAll( ".mdc-data-table__row.element-row" );
    };
    self.getAll              = function () {
        let doms       = self.getAllDOM();
        self.to_return = [];
        let timeout    = 1000;
        //for ( let i = 0, _size_i = 2; i < _size_i; i++ ) {
        for ( let i = 0, _size_i = doms.length; i < _size_i; i++ ) {
            setTimeout( function () {
                self.parseDom( doms[ i ] );
            }, timeout );
            timeout += 400;
        }
    };
    self.parseDom            = function ( dom_element, array_to_push_in ) {
        self.previous_title        = "description";
        let to_return              = {};
        to_return[ "name" ]        = dom_element.querySelector( ".cdk-column-name_trans" ).innerText.replaceAll( '"', "" );
        console.log("GSOU", "[SCRIPT_HISTORIQUES - parseDom]", to_return[ "name" ] );
        to_return[ "requirement" ] = [];
        to_return[ "description" ] = [];
        to_return[ "gift_skill" ]  = [];
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
                self.parseChildByText( current_child, object_to_complete );
                break;
            default:
                console.warn( "GSOU", 1, "[SCRIPT_CLASSES - parseChildByPart]", "[NOT MANAGED]", current_child.tagName );
                break;
        }
    };
    self.parseChildByText    = function ( dom_element, object_to_complete, text ) {
        if ( dom_element ) {
            text      = text || dom_element.innerText;
            let links = dom_element.querySelectorAll( "a span" );
            for ( let i = 0, _size_i = links.length; i < _size_i; i++ ) {
                object_to_complete[ "gift_skill" ].push( links[ i ].innerText.trim() );
            }
        }
        if ( SERVICE.STRING.startsWith( text, "Prérequis" ) ) {
            object_to_complete[ "requirement" ].push( SERVICE.STRING.replaceAll( text, "Prérequis ", "" ) );
        }
        else if ( SERVICE.STRING.containsIgnoreCase( text, "Choisissez deux primes d'attributs" ) ) {
            object_to_complete[ "characteristics_bonus" ] = {
                number: 2,
                choice: SERVICE.STRING.parseMatching( text, CHARACTERISTIC )
            };
        }
        else if ( SERVICE.STRING.containsIgnoreCase( text, "Vous êtes qualifié" ) ) {
            let split = text.split( "." );
            self.parseTextToSkill( split[ 0 ], "qualify", object_to_complete );
            for ( let i = 1, _size_i = split.length; i < _size_i; i++ ) {
                self.parseChildByText( null, object_to_complete, split[ i ] );
            }
        }
        else if ( SERVICE.STRING.containsIgnoreCase( text, "Vous obtenez le don de compétence" ) ) {
        }
        else if ( SERVICE.STRING.containsIgnoreCase( text, "Vous obtenez le don" ) ) {
            object_to_complete[ "gift_skill" ].push( text.replace( "Vous obtenez le don ", "" ) );
        }
            //else if ( SERVICE.STRING.containsIgnoreCase( text, "Vous êtes expert" ) ) {
        //}
        else if ( text ) {
            object_to_complete[ "description" ].push( text );
        }
    };
    self.parseTextToSkill    = function ( text, rank_skill, object_to_complete ) {
        object_to_complete[ "skills" ]               = object_to_complete[ "skills" ] || {};
        object_to_complete[ "skills" ][ rank_skill ] = object_to_complete[ "skills" ][ rank_skill ] || [];
        let skills                                   = SKILLS.parseTextInSkill( text );
        for ( let i = 0, _size_i = skills.length; i < _size_i; i++ ) {
            object_to_complete[ "skills" ][ rank_skill ].push( skills[ i ] );
        }
        
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
var CHARACTERISTICS = {
    key          : "characteristics",
    label        : "Caractéritiques",
    key_element  : "characteristic",
    label_element: "Caractéritique",
    INITIAL_VALUE: 10,
    ENUM         : [
        {
            "name" : "FOR",
            "label": "Force"
        },
        {
            "name" : "DEX",
            "label": "Dextérité"
        },
        {
            "name" : "CON",
            "label": "Constitution"
        },
        {
            "name" : "INT",
            "label": "Intelligence"
        },
        {
            "name" : "SAG",
            "label": "Sagesse"
        },
        {
            "name" : "CHA",
            "label": "Charisme"
        }
    ]
};
CHARACTERISTICS.FOR = CHARACTERISTICS.ENUM[ 0 ];
CHARACTERISTICS.DEX = CHARACTERISTICS.ENUM[ 1 ];
CHARACTERISTICS.CON = CHARACTERISTICS.ENUM[ 2 ];
CHARACTERISTICS.INT = CHARACTERISTICS.ENUM[ 3 ];
CHARACTERISTICS.SAG = CHARACTERISTICS.ENUM[ 4 ];
CHARACTERISTICS.CHA = CHARACTERISTICS.ENUM[ 5 ];
var SKILLS         = {
    LIST            : {
        ACROBATICS  : {
            label         : "Acrobaties",
            characteristic: CHARACTERISTICS.DEX.name,
            armor_penalty : true
        },
        ARCANA      : {
            label         : "Arcanes",
            characteristic: CHARACTERISTICS.INT.name
        },
        CRAFTING    : {
            label         : "Artisanat",
            characteristic: CHARACTERISTICS.INT.name,
            need_qualifier: true
        },
        ATHLETICS   : {
            label         : "Athlétisme",
            characteristic: CHARACTERISTICS.FOR.name,
            armor_penalty : true
        },
        LORE        : {
            label         : "Connaissance",
            characteristic: CHARACTERISTICS.INT.name,
            need_qualifier: true
        },
        DIPLOMACY   : {
            label         : "Diplomatie",
            characteristic: CHARACTERISTICS.CHA.name
        },
        STEALTH     : {
            label         : "Discrétion",
            characteristic: CHARACTERISTICS.DEX.name,
            armor_penalty : true
        },
        DECEPTION   : {
            label         : "Duperie",
            characteristic: CHARACTERISTICS.CHA.name
        },
        INTIMIDATION: {
            label         : "Intimidation",
            characteristic: CHARACTERISTICS.CHA.name
        },
        MEDICINE    : {
            label         : "Médecine",
            characteristic: CHARACTERISTICS.SAG.name
        },
        NATURE      : {
            label         : "Nature",
            characteristic: CHARACTERISTICS.SAG.name
        },
        OCCULTISM   : {
            label         : "Occultisme",
            characteristic: CHARACTERISTICS.INT.name
        },
        RELIGION    : {
            label         : "Religion",
            characteristic: CHARACTERISTICS.SAG.name
        },
        PERFORMANCE : {
            label         : "Représentation",
            characteristic: CHARACTERISTICS.CHA.name
        },
        SOCIETY     : {
            label         : "Société",
            characteristic: CHARACTERISTICS.INT.name
        },
        SURVIVAL    : {
            label         : "Survie",
            characteristic: CHARACTERISTICS.SAG.name
        },
        THIEVERY    : {
            label         : "Vol",
            characteristic: CHARACTERISTICS.DEX.name,
            armor_penalty : true
        }
    },
    parseTextInSkill: function ( text ) {
        let to_return = [];
        let split     = text.split( " " );
        for ( let i = 0, _size_i = split.length; i < _size_i; i++ ) {
            let is_as_skill = SKILLS.isASkill( split[ i ] );
            if ( is_as_skill ) {
                to_return.push( is_as_skill );
            }
            if ( is_as_skill.need_qualifier ) {
                let split_qualifier   = text.split( is_as_skill.label )[ 1 ];
                split_qualifier       = split_qualifier.split( "." )[ 0 ];
                is_as_skill.qualifier = split_qualifier.trim();
            }
        }
        return to_return;
    },
    isASkill        : function ( word ) {
        var _keys = Object.keys( SKILLS.LIST );
        var _current;
        for ( let i = 0, _size = _keys.length; i < _size; i++ ) {
            _current = SKILLS.LIST[ _keys[ i ] ];
            if ( _current.label.toLowerCase() === word.toLowerCase() ) {
                return JSON.parse( JSON.stringify( _current ) );
            }
        }
        return false;
    }
};

SCRIPT_HISTORIQUES.getAll();
setTimeout( function () {
    console.log( "GSOU", "[ - ]", SCRIPT_HISTORIQUES.to_return );
    //}, 30000 );
}, 10000 );

