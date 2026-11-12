"use strict";
/**
 * Constants of the spells domain : the natures of the spellbook sections
 * and the data accessors of the scraped spell dataset (SPELLS.CONST,
 * generated file — the accessors survive the re-scrap, never the edit).
 */

// The natures of the spells : the element_type of the scraped data maps
// to one of them (SORT N belongs to the ranked "spell" nature), the
// unknown nature holds the free-named spells of the repertoire — the
// array order drives the spellbook sections (the "spell" nature unfolds
// one section per rank, by ascending rank under the tours de magie)
SPELL.NATURES = [
    {
        "key"          : "cantrip",
        "label"        : "Tours de magie",
        "full_label"   : "Tour de magie",
        "element_type" : "TOUR DE MAGIE"
    },
    {
        "key"          : "spell",
        "label"        : "Rang",
        "element_type" : "SORT"
    },
    {
        "key"          : "focus",
        "label"        : "Sorts focalisés",
        "full_label"   : "Sort focalisé",
        "element_type" : "FOCALISÉ"
    },
    {
        "key"          : "ritual",
        "label"        : "Rituels",
        "full_label"   : "Rituel",
        "element_type" : "RITUEL"
    },
    {
        "key"  : "unknown",
        "label": "Autres sorts"
    }
];

// The action cost glyphs (mêmes mappings que la popup d'action : la carte
// parle la langue RÉELLE des données scrapées)
SPELL.ACTION_COST_LABELS = {
    "1": "◆",
    "2": "◆◆",
    "3": "◆◆◆",
    "f": "⟳",
    "r": "⟲"
};

SPELL.NO_COST_LABEL = "—";
SPELL.NO_RANK_LABEL = "—";

//********************************************  DATA ACCESSORS  **************************************************//

/**
 * @param {string} name  Spell name, ex: "Boule de feu"
 * @returns {Object|null} The scraped dataset entry
 */
SPELLS.getSpellData = function ( name ) {
    let _keys = Object.keys( SPELLS.CONST );
    for ( let i = 0, _size_i = _keys.length; i < _size_i; i++ ) {
        if ( SPELLS.CONST[ _keys[ i ] ][ "text" ] === name ) {
            return SPELLS.CONST[ _keys[ i ] ];
        }
    }
    return null;
};

/**
 * @param {string} nature_key  Nature key, ex: "focus"
 * @returns {Object|null}      The nature data { key, label, element_type }
 */
SPELL.getNatureData = function ( nature_key ) {
    for ( let i = 0, _size_i = SPELL.NATURES.length; i < _size_i; i++ ) {
        if ( SPELL.NATURES[ i ].key === nature_key ) {
            return SPELL.NATURES[ i ];
        }
    }
    return null;
};

// The scraped element_type designates the nature and the rank ("SORT 3",
// "TOUR DE MAGIE 1", "FOCALISÉ 2", "RITUEL 5") — the nature owns its
// element_type keyword, the trailing number sorts the ranked sections
SPELLS.parseNatureAndRank = function ( element_type ) {
    for ( let i = 0, _size_i = SPELL.NATURES.length; i < _size_i; i++ ) {
        let nature_data = SPELL.NATURES[ i ];
        if ( !nature_data.element_type || element_type.indexOf( nature_data.element_type ) !== 0 ) {
            continue;
        }
        let rank = parseInt( element_type.slice( nature_data.element_type.length ).trim(), 10 );
        return { "nature_key": nature_data.key, "rank": isNaN( rank ) ? 0 : rank };
    }
    return null;
};

/**
 * @param {string} name  Spell name
 * @returns {string}     The nature key of the entry, "unknown" on a free name
 */
SPELLS.getNatureKeyOfName = function ( name ) {
    let entry = SPELLS.getSpellData( name );
    if ( !entry ) {
        return "unknown";
    }
    let parsed = SPELLS.parseNatureAndRank( entry[ "element_type" ] );
    return parsed ? parsed.nature_key : "unknown";
};

/**
 * @param {string} name  Spell name
 * @returns {number}     The rank of the entry, 0 on a free name
 */
SPELLS.getRankOfName = function ( name ) {
    let entry = SPELLS.getSpellData( name );
    if ( !entry ) {
        return 0;
    }
    let parsed = SPELLS.parseNatureAndRank( entry[ "element_type" ] );
    return parsed ? parsed.rank : 0;
};

/**
 * @param {string} name  Spell name
 * @returns {string}     The action cost glyph, "—" without cost
 */
SPELLS.getActionCostLabel = function ( name ) {
    let entry = SPELLS.getSpellData( name );
    if ( !entry || entry[ "action_cost" ] === null || entry[ "action_cost" ] === undefined ) {
        return SPELL.NO_COST_LABEL;
    }
    return SPELL.ACTION_COST_LABELS[ entry[ "action_cost" ] ] || entry[ "action_cost" ];
};

/**
 * @param {string} name  Spell name
 * @returns {string}     The readable type label, ex: "Sort 3", "Tour de magie 1"
 */
SPELLS.getFullTypeLabel = function ( name ) {
    let entry = SPELLS.getSpellData( name );
    if ( !entry ) {
        return "";
    }
    let nature_key = SPELLS.getNatureKeyOfName( name );
    let rank       = SPELLS.getRankOfName( name );
    if ( nature_key === "spell" ) {
        return "Sort " + rank;
    }
    let nature_data = SPELL.getNatureData( nature_key );
    return ( nature_data && nature_data.full_label ? nature_data.full_label : nature_key ) + ( rank ? " " + rank : "" );
};

// The type labels of the add popup list (user wording, shorter than the
// section titles of the spellbook — the label feeds the FILTER, "Sorts
// focalises" would never match a normal typing)
SPELL.LIST_TYPE_LABELS = {
    "cantrip": "Tour de magie",
    "spell"  : "Sort",
    "focus"  : "Focalisé",
    "ritual" : "Rituel"
};

// The list of the add popup : every scraped spell in ONE pass (the by-name
// accessors scan the whole map, never call them in a loop), the sort
// follows the NATURES order (the list reads like the spellbook sections)
// then rank then name, the type rides along with its label for the filter
SPELLS.getSpellListData = function () {
    let to_return = [];
    let _keys     = Object.keys( SPELLS.CONST );
    for ( let i = 0, _size_i = _keys.length; i < _size_i; i++ ) {
        let entry  = SPELLS.CONST[ _keys[ i ] ];
        let parsed = SPELLS.parseNatureAndRank( entry[ "element_type" ] );
        let nature_key   = parsed ? parsed.nature_key : "unknown";
        let nature_order = SPELL.NATURES.length;
        for ( let n = 0, _size_n = SPELL.NATURES.length; n < _size_n; n++ ) {
            if ( SPELL.NATURES[ n ].key === nature_key ) {
                nature_order = n;
            }
        }
        let cost_label = SPELL.NO_COST_LABEL;
        if ( entry[ "action_cost" ] !== null && entry[ "action_cost" ] !== undefined ) {
            cost_label = SPELL.ACTION_COST_LABELS[ entry[ "action_cost" ] ] || entry[ "action_cost" ];
        }
        to_return.push( {
            "name"       : entry[ "text" ],
            "type_order" : nature_order,
            "type_label" : SPELL.LIST_TYPE_LABELS[ nature_key ] || "",
            "rank"       : parsed ? parsed.rank : 0,
            "cost_label" : cost_label,
            "description": entry[ "description" ]
        } );
    }
    to_return.sort( function ( spell_a, spell_b ) {
        if ( spell_a.type_order !== spell_b.type_order ) {
            return spell_a.type_order - spell_b.type_order;
        }
        if ( spell_a.rank !== spell_b.rank ) {
            return spell_a.rank - spell_b.rank;
        }
        return spell_a.name.localeCompare( spell_b.name );
    } );
    return to_return;
};

// The spell popup data (renderer "spell" : name, type label badge, action
// cost, traits, description) — static data, the popup caches by its
// scraped uuid
SPELLS.getSpellInformation = function ( name ) {
    let entry = SPELLS.getSpellData( name );
    if ( !entry ) {
        return null;
    }
    return {
        "id"          : entry[ "id" ],
        "category"    : "spell",
        "text"        : entry[ "text" ],
        "element_type": SPELLS.getFullTypeLabel( name ),
        "action_cost" : entry[ "action_cost" ],
        "traits"      : entry[ "traits" ],
        "description" : entry[ "description" ]
    };
};
