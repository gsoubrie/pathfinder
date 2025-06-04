"use strict";
var CHARACTERISTICS = {
    key          : "characteristics",
    label        : "Caractéritiques",
    key_element  : "characteristic",
    label_element: "Caractéritique",
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

var SKILLS = {
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
                is_as_skill.qualifier = split_qualifier;
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