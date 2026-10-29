"use strict";

/**
 * Choices opened by class abilities, for the level-up window.
 * Structure: CLASSES.CHOICES[ class_name ][ ability_key ] = { entries }
 * - entries: the selectable options, { name, uuid }, each uuid targeting
 *   OBJECT.COMPENDIUM so every option opens its information popup.
 * The ability key is the unlock label, normalized (lowercase, accents removed,
 * separators as underscore): "école arcanique" -> "ecole_arcanique".
 * The "?" link of a choice row opens the ability information popup
 * (CLASSES.getAbilityInformation), built from the class data itself.
 */
CLASSES.CHOICES = {
    "Magicien": {
        "ecole_arcanique": {
            "entries": [
                { "name": "École de forme protéenne",            "uuid": "ZBFICTkzUjE4BDGJ" },
                { "name": "École de Kalistrade",                  "uuid": "jtAqb5rnhQblZuM8" },
                { "name": "École de la frontière",                "uuid": "ZpFCZnVzIfZLfNii" },
                { "name": "École de magie civique",               "uuid": "YZ2XPmx1WHyWtM0g" },
                { "name": "École des lettres",                    "uuid": "wObrT6PytPdS5aUi" },
                { "name": "École des portails",                   "uuid": "XXnGHBxNZvRsdkKM" },
                { "name": "École des technologies magiques",      "uuid": "dPAwM9IdabdH68mW" },
                { "name": "École du mentalisme",                  "uuid": "L5FiuXsfW6Sa31gO" },
                { "name": "École de la théorie magique unifiée",  "uuid": "xYYhJtGhFSWNifcO" },
                { "name": "École de la récupération",             "uuid": "n2LRzksKVSzOuzqN" },
                { "name": "École de la sagesse enracinée",        "uuid": "KGkWSv9rARpwWzXW" }
            ]
        }
    }
};

/**
 * @param {string} label  Unlock label from capacity_by_level, ex: "école arcanique"
 * @returns {string}      Normalized ability key, ex: "ecole_arcanique"
 */
CLASSES.getAbilityKey = function ( label ) {
    return label.toLowerCase()
        .normalize( "NFD" )
        .replace( /[\u0300-\u036f]/g, "" )
        .replace( /[^a-z0-9]+/g, "_" );
};

/**
 * @param {string} class_name   Class name, ex: "Magicien"
 * @param {string} ability_key  Normalized ability key, ex: "ecole_arcanique"
 * @returns {Object|null}       The choice object { entries }, or null when the ability opens no choice
 */
CLASSES.getChoices = function ( class_name, ability_key ) {
    if ( !CLASSES.CHOICES[ class_name ] || !CLASSES.CHOICES[ class_name ][ ability_key ] ) {
        return null;
    }
    return CLASSES.CHOICES[ class_name ][ ability_key ];
};

/**
 * Resolves the class abilities key matching an unlock label key.
 * Exact match first, then plural-insensitive match (each word stripped of its
 * trailing french plural "s"/"x": "don de compétence" matches "dons de
 * compétence"), then the shortest key extending the label ("expertise avec les
 * armes" -> "expertise avec les armes du magicien").
 *
 * @param {Object} class_data   Class data object carrying "abilities"
 * @param {string} ability_key  Normalized unlock label key, ex: "ecole_arcanique"
 * @returns {string|null}       The matched abilities key, or null when unknown
 */
CLASSES.resolveAbilityKey = function ( class_data, ability_key ) {
    if ( !class_data || !class_data.abilities ) {
        return null;
    }
    if ( class_data.abilities[ ability_key ] ) {
        return ability_key;
    }
    let singular_label = CLASSES.getSingularAbilityKey( ability_key );
    let _keys          = Object.keys( class_data.abilities );
    let best_key       = null;
    for ( let i = 0, _size_i = _keys.length; i < _size_i; i++ ) {
        let singular_key = CLASSES.getSingularAbilityKey( _keys[ i ] );
        if ( singular_key !== singular_label && singular_key.indexOf( singular_label + "_" ) !== 0 ) {
            continue;
        }
        if ( best_key === null || _keys[ i ].length < best_key.length ) {
            best_key = _keys[ i ];
        }
    }
    return best_key;
};

/**
 * Strips the french plural of every word of an ability key.
 * "-aux" -> "-al" ("generaux" -> "general"), trailing "s"/"x" otherwise
 * ("dons" -> "don", "primes_d_attributs" -> "prime_d_attribut").
 *
 * @param {string} ability_key  Normalized key, ex: "dons_generaux"
 * @returns {string}           Singularized key, ex: "don_general"
 */
CLASSES.getSingularAbilityKey = function ( ability_key ) {
    let _words = ability_key.split( "_" );
    for ( let i = 0, _size_i = _words.length; i < _size_i; i++ ) {
        if ( _words[ i ].slice( -3 ) === "aux" ) {
            _words[ i ] = _words[ i ].slice( 0, -3 ) + "al";
        }
        else {
            _words[ i ] = _words[ i ].replace( /[sx]$/, "" );
        }
    }
    return _words.join( "_" );
};

/**
 * Builds the information popup data of a class ability, from the class data.
 *
 * @param {string} class_name   Class name, ex: "Magicien"
 * @param {string} ability_key  Normalized unlock label key, ex: "ecole_arcanique"
 * @returns {Object|null}       Popup-shaped object { id, category, text, description }, or null when unknown
 */
CLASSES.getAbilityInformation = function ( class_name, ability_key ) {
    let class_data     = CLASSES.getDataByName( class_name );
    let abilities_key = CLASSES.resolveAbilityKey( class_data, ability_key );
    if ( !abilities_key ) {
        return null;
    }
    let ability = class_data.abilities[ abilities_key ];
    return {
        "id"         : class_name + "__" + abilities_key,
        "category"   : "class-feature",
        "text"       : ability.name || ability_key,
        "description": ability.description ? ability.description.join( "<br>" ) : ""
    };
};
