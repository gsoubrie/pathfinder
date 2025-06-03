"use strict";
var BODY_SIZE      = {
    P : {
        value: "P",
        label: "Petit"
    },
    M : {
        value: "M",
        label: "Moyen"
    },
    G : {
        value: "G",
        label: "Grand"
    },
    TG: {
        value: "TG",
        label: "Trés Grand"
    }
};
var LANGUAGE       = {
    COMMON    : "commun",
    ELF       : "elfique",
    CELESTE   : "celeste",
    DRACONIQUE: "draconique",
    GNOLL     : "gnoll",
    GNOME     : "gnomien",
    GOBELIN   : "gobelin",
    ORQUIEN   : "orquien",
    SYLVESTRE : "sylvestre"
};
var TRAIT          = {
    ELFE     : "elfe",
    HUMAIN   : "humain",
    HUMANOIDE: "humanoide",
    GOBELIN  : "gobelin"
};
var VM             = {
    _0: "aucun",
    _1: "faible",
    _2: "sombre"
};
var SKILLS         = {
    LIST            : {
        ACROBATICS  : {
            label         : "Acrobaties",
            characteristic: CHARACTERISTIC.DEXTERITY.key,
            armor_penalty : true
        },
        ARCANA      : {
            label         : "Arcanes",
            characteristic: CHARACTERISTIC.INTELLIGENCE.key
        },
        CRAFTING    : {
            label         : "Artisanat",
            characteristic: CHARACTERISTIC.INTELLIGENCE.key,
            need_qualifier: true
        },
        ATHLETICS   : {
            label         : "Athlétisme",
            characteristic: CHARACTERISTIC.FORCE.key,
            armor_penalty : true
        },
        LORE        : {
            label         : "Connaissance",
            characteristic: CHARACTERISTIC.INTELLIGENCE.key,
            need_qualifier: true
        },
        DIPLOMACY   : {
            label         : "Diplomatie",
            characteristic: CHARACTERISTIC.CHARISMA.key
        },
        STEALTH     : {
            label         : "Discrétion",
            characteristic: CHARACTERISTIC.DEXTERITY.key,
            armor_penalty : true
        },
        DECEPTION   : {
            label         : "Duperie",
            characteristic: CHARACTERISTIC.CHARISMA.key
        },
        INTIMIDATION: {
            label         : "Intimidation",
            characteristic: CHARACTERISTIC.CHARISMA.key
        },
        MEDICINE    : {
            label         : "Médecine",
            characteristic: CHARACTERISTIC.WISDOM.key
        },
        NATURE      : {
            label         : "Nature",
            characteristic: CHARACTERISTIC.WISDOM.key
        },
        OCCULTISM   : {
            label         : "Occultisme",
            characteristic: CHARACTERISTIC.INTELLIGENCE.key
        },
        RELIGION    : {
            label         : "Religion",
            characteristic: CHARACTERISTIC.WISDOM.key
        },
        PERFORMANCE : {
            label         : "Représentation",
            characteristic: CHARACTERISTIC.CHARISMA.key
        },
        SOCIETY     : {
            label         : "Société",
            characteristic: CHARACTERISTIC.INTELLIGENCE.key
        },
        SURVIVAL    : {
            label         : "Survie",
            characteristic: CHARACTERISTIC.WISDOM.key
        },
        THIEVERY    : {
            label         : "Vol",
            characteristic: CHARACTERISTIC.DEXTERITY.key,
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