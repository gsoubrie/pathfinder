"use strict";
/**
 * Constants of the stuffs domain : the equipment tab sections and the
 * data accessors of the scraped inventory.
 */
var STUFF = {};

// Kinds of the stuffs domain : each one owns its selector options, the
// inline fields of the equipment tab lines and the popup stats. The
// kind of an entry comes from STUFFS.getKindKeyOfData (the hand-written
// map below — it survives the re-scrap) : the SCRAPED FIELD wins (the
// fioles own Dégâts, they stay weapons ; the armures take the CA bonus,
// boucliers INCLUDED — their Solidité renders on the line, the armures
// carry none), then the NAME PREFIXES designate the consumable
// families, and the excluded names sort the traps (the lamp oil is no
// potion).
STUFF.KINDS = [
    {
        "key"          : "weapon",
        "label"        : "Armes",
        "scraped_field": "Dégâts",
        "inline_fields": [ "Dégâts", "Mains" ],
        "detail_fields": [ "Dégâts", "Mains", "Catégorie", "Groupe" ]
    },
    {
        "key"          : "armor",
        "label"        : "Armures/Boucliers",
        "scraped_field": "CA bonus",
        "inline_fields": [ "CA bonus", "Mod. de dex. max.", "Solidité" ],
        "detail_fields": [ "Base", "CA bonus", "Mod. de dex. max.", "Solidité", "Pénalité d'armure au test", "Pénalité à la vitesse", "Force requise", "Catégorie", "Groupe" ]
    },
    {
        "key"          : "other",
        "label"        : "Autres objets",
        "inline_fields": [],
        "detail_fields": []
    },
    {
        "key"          : "wand",
        "label"        : "Baguettes",
        "name_prefixes": [ "Baguette" ],
        "inline_fields": [ "Niveau" ],
        "detail_fields": []
    },
    {
        "key"          : "scroll",
        "label"        : "Parchemins",
        "name_prefixes": [ "Parchemin" ],
        "inline_fields": [ "Niveau" ],
        "detail_fields": []
    },
    {
        "key"          : "potion",
        "label"        : "Potions",
        "name_prefixes": [ "Potion", "Élixir", "Poison", "Huile" ],
        "excluded_names": [ "Huile (1/2 l)" ],
        "inline_fields": [ "Niveau" ],
        "detail_fields": []
    }
];

// The ALPHABETICAL order of the selector comes from the KINDS array
// itself — the classifier tolerates ANY order thanks to its exclusion
// maps (the armures exclude Solidité, the boucliers match their own
// field wherever they sit). The icon glyph of a kind on the entry
// lines (same hand-picked glyphs as LEVELUP.ICONS)
STUFF.ICONS = {
    "weapon": "⚔",
    "armor" : "🛡",
    "other" : "📦",
    "wand"  : "🪄",
    "scroll": "📜",
    "potion": "🧪"
};

// The retired kinds read back into their successor (retour utilisateur :
// les boucliers vivent AVEC les armures — les sauvegardes du Round 64
// portent kind "shield", la carte les remappe au chargement)
STUFF.OBSOLETE_KINDS = {
    "shield": "armor"
};

// The INLINE display labels whose scraped key diverges : the level of
// an entry scrapes under "level", the line reads it as "Niveau"
STUFF.DATA_KEYS = {
    "Niveau": "level"
};

// The consumables stack (a potion counts, a sword does not) : the trait
// drives the quantity, data-based, it survives a re-scrap
STUFF.CONSUMABLE_TRAIT = "Consommable";

// The storage locations of the inventory (PF2 : the character wears
// the equipped stuff, carries the backpack, leaves the rest somewhere
// — a place free text describes where a stored stuff sits, it stays
// with the entry when it travels back). The array order drives the
// categories bar, the sections and the entry location chips
STUFF.LOCATIONS = [
    {
        "key"  : "equipped",
        "label": "Équipé"
    },
    {
        "key"  : "backpack",
        "label": "Sac à dos"
    },
    {
        "key"  : "stored",
        "label": "Entreposé"
    }
];

// PF2 : the character carries the equipped stuff and the backpack, the
// stored bulk does not weight on them (the carried bulk of the bar,
// the stored section carries its own)
STUFF.CARRIED_LOCATIONS = [ "equipped", "backpack" ];

// PF2 : the equipped stuff is worn on the character, everything else
// enters the backpack ; the categories bar shows them ALL at once
STUFF.DEFAULT_LOCATION = "backpack";
STUFF.FILTER_ALL       = "all";

/**
 * @param {string} location_key  Location key, ex: "backpack"
 * @returns {Object|null}       The location data { key, label }
 */
STUFF.getLocationData = function ( location_key ) {
    for ( let i = 0, _size_i = STUFF.LOCATIONS.length; i < _size_i; i++ ) {
        if ( STUFF.LOCATIONS[ i ].key === location_key ) {
            return STUFF.LOCATIONS[ i ];
        }
    }
    return null;
};

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
    let entry    = STUFFS.getByName( name );
    let data_key = STUFF.DATA_KEYS[ field ] || field;
    return entry && field && entry[ data_key ] !== undefined ? String( entry[ data_key ] ) : null;
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

// The bulk of an OWNED entry : the quantity counts by unit for every
// entry (the quantity owns the whole inventory, the consumable trait
// only drives the stacking)
STUFFS.getEntryBulk = function ( stuff ) {
    return STUFFS.parseBulk( stuff.value ) * stuff.quantity;
};

STUFFS.getByName = function ( name ) {
    for ( let i = 0, _size_i = STUFFS.length; i < _size_i; i++ ) {
        if ( STUFFS[ i ].name === name ) {
            return STUFFS[ i ];
        }
    }
    return null;
};

//********************************************  KIND CLASSIFIER  **************************************************//

/**
 * @param {Object} entry  A scraped dataset entry
 * @returns {string}      The kind key of the entry, ex: "potion"
 */
STUFFS.getKindKeyOfData = function ( entry ) {
    if ( !entry ) {
        return "other";
    }
    for ( let i = 0, _size_i = STUFF.KINDS.length; i < _size_i; i++ ) {
        let kind_data = STUFF.KINDS[ i ];
        if ( kind_data.key === "other" ) {
            continue;
        }
        let is_kind_entry = true;
        if ( kind_data.scraped_field ) {
            is_kind_entry = entry[ kind_data.scraped_field ] !== undefined;
        }
        else if ( kind_data.name_prefixes ) {
            is_kind_entry = false;
            for ( let p = 0, _size_p = kind_data.name_prefixes.length; p < _size_p; p++ ) {
                if ( entry.name.indexOf( kind_data.name_prefixes[ p ] ) === 0 ) {
                    is_kind_entry = true;
                }
            }
        }
        if ( is_kind_entry && kind_data.excluded_fields ) {
            for ( let f = 0, _size_f = kind_data.excluded_fields.length; f < _size_f; f++ ) {
                if ( entry[ kind_data.excluded_fields[ f ] ] !== undefined ) {
                    is_kind_entry = false;
                }
            }
        }
        if ( is_kind_entry && kind_data.excluded_names ) {
            for ( let n = 0, _size_n = kind_data.excluded_names.length; n < _size_n; n++ ) {
                if ( entry.name === kind_data.excluded_names[ n ] ) {
                    is_kind_entry = false;
                }
            }
        }
        if ( is_kind_entry ) {
            return kind_data.key;
        }
    }
    return "other";
};

// The options of a kind come from the classifier — the weapons own
// Dégâts, the shields Solidité, the armors their CA bonus, the
// consumable families come from their name prefixes
STUFFS.getKindOptions = function ( kind_key ) {
    let to_return = [];
    for ( let i = 0, _size_i = STUFFS.length; i < _size_i; i++ ) {
        if ( STUFFS.getKindKeyOfData( STUFFS[ i ] ) === kind_key ) {
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
    // The detail fields of the entry kind — the kind comes from the
    // classifier (a shield owns its own stats, a scroll none)
    let details            = [];
    let kind_of_entry      = STUFF.getKindData( STUFFS.getKindKeyOfData( entry ) ) || STUFF.getKindData( "other" );
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
