"use strict";
/**
 * Constants of the stuffs domain : the equipment tab sections and the
 * data accessors of the scraped inventory.
 */
var STUFF = {};

// Sections of the equipment tab : each one owns its section, the entries
// carry their worn toggle (phase 2 will consume them for the AC and attack
// rows — PF2 requires computation first, the scrap carries the fields :
// the weapons own "Dégâts"/"Catégorie", the armors own "CA bonus"). The
// inline info field of an entry line and the popup detail fields are the
// SCRAPED keys (they survive a re-scrap, cf. KINDS picker).
STUFF.KINDS = [
    {
        "key"          : "weapon",
        "label"        : "Armes",
        picker         : "Dégâts",
        "info_field"   : "Dégâts",
        "detail_fields": [ "Dégâts", "Mains", "Catégorie", "Groupe" ]
    },
    {
        "key"          : "armor",
        "label"        : "Armures",
        picker         : "CA bonus",
        "info_field"   : "CA bonus",
        "detail_fields": [ "CA bonus", "Mod. de dex. max.", "Pénalité d'armure au test", "Pénalité à la vitesse", "Force requise", "Catégorie", "Groupe" ]
    },
    {
        "key"          : "other",
        "label"        : "Autres objets",
        picker         : null,
        "info_field"   : null,
        "detail_fields": []
    }
];

// The consumables stack (a potion counts, a sword does not) : the trait
// drives the quantity, data-based, it survives a re-scrap
STUFF.CONSUMABLE_TRAIT = "Consommable";

/**
 * @param {string} kind_key  Section key, ex: "weapon"
 * @returns {Object|null}    The kind data { key, label, picker }
 */
STUFF.getKindData = function ( kind_key ) {
    for ( let i = 0, _size_i = STUFF.KINDS.length; i < _size_i; i++ ) {
        if ( STUFF.KINDS[ i ].key === kind_key ) {
            return STUFF.KINDS[ i ];
        }
    }
    return null;
};

//********************************************  DATA ACCESSORS  **************************************************//

STUFFS.getEntryData = function ( name ) {
    return STUFFS.getByName( name );
};

STUFFS.getFieldValue = function ( name, field ) {
    let entry = STUFFS.getByName( name );
    return entry && field && entry[ field ] !== undefined ? String( entry[ field ] ) : null;
};

// PF2 bulk : a numeric bulk, or L (10 lights = 1 bulk) ; a few scraped
// entries carry no bulk at all, they weigh nothing
STUFFS.parseBulk = function ( name ) {
    let entry = STUFFS.getByName( name );
    if ( !entry || entry.bulk === undefined || entry.bulk === "" ) {
        return 0;
    }
    if ( entry.bulk === "L" ) {
        return 0.1;
    }
    let parsed = parseFloat( entry.bulk, 10 );
    return isNaN( parsed ) ? 0 : parsed;
};

// The bulk of an OWNED entry : the consumables count by unit
STUFFS.getEntryBulk = function ( stuff ) {
    return STUFFS.parseBulk( stuff.value ) * ( stuff.isConsumable() ? stuff.quantity : 1 );
};

STUFFS.getByName = function ( name ) {
    for ( let i = 0, _size_i = STUFFS.length; i < _size_i; i++ ) {
        if ( STUFFS[ i ].name === name ) {
            return STUFFS[ i ];
        }
    }
    return null;
};

// The options of a section follow its picker field : the weapons carry
// "Dégâts", the armors "CA bonus", everything else lands in "other"
STUFFS.getKindOptions = function ( kind_key ) {
    let kind_data = STUFF.getKindData( kind_key );
    let to_return = [];
    for ( let i = 0, _size_i = STUFFS.length; i < _size_i; i++ ) {
        let is_kind_entry = kind_data.picker ? STUFFS[ i ][ kind_data.picker ] !== undefined : true;
        if ( kind_key === "other" ) {
            is_kind_entry = !STUFFS[ i ][ "Dégâts" ] && !STUFFS[ i ][ "CA bonus" ];
        }
        if ( is_kind_entry ) {
            to_return.push( { "name": STUFFS[ i ].name } );
        }
    }
    return to_return;
};

STUFFS.isConsumable = function ( name ) {
    let entry = STUFFS.getByName( name );
    if ( !entry ) {
        return false;
    }
    return entry.traits.indexOf( STUFF.CONSUMABLE_TRAIT ) !== -1;
};

// The item popup data (renderer "item" : name, level badge, traits,
// bulk, price, kind detail fields scraped, description) — static data,
// the popup caches by uuid
STUFFS.getItemInformation = function ( name ) {
    let entry = STUFFS.getByName( name );
    if ( !entry ) {
        return null;
    }
    // The detail fields of the entry kind (KINDS, scraped keys) : a
    // weapon carries Dégâts/Mains/Catégorie, an armor its armor stats
    let details            = [];
    let kind_of_entry      = STUFF.KINDS[ 0 ];
    for ( let i = 0, _size_i = STUFF.KINDS.length; i < _size_i; i++ ) {
        if ( STUFF.KINDS[ i ].picker ? entry[ STUFF.KINDS[ i ].picker ] !== undefined : !entry[ "Dégâts" ] && !entry[ "CA bonus" ] ) {
            kind_of_entry = STUFF.KINDS[ i ];
        }
    }
    for ( let i = 0, _size_i = kind_of_entry.detail_fields.length; i < _size_i; i++ ) {
        if ( entry[ kind_of_entry.detail_fields[ i ] ] !== undefined ) {
            details.push( { "label": kind_of_entry.detail_fields[ i ], "value": String( entry[ kind_of_entry.detail_fields[ i ] ] ) } );
        }
    }
    return {
        "id"          : "stuff__" + entry.name,
        "category"    : "item",
        "text"        : entry.name,
        "element_type": "Niveau " + entry.level,
        "bulk"        : entry.bulk === undefined ? null : entry.bulk,
        "price"       : entry.price,
        "traits"      : entry.traits,
        "details"     : details,
        "description" : entry.description
    };
};
