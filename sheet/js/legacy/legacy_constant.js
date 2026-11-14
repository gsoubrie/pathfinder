"use strict";
var LEGACIES = {
    key          : "legacies",
    label        : "Héritages",
    key_element  : "legacy",
    default_value: "Aucun",
    label_element: "Héritage"
};

LEGACIES.getDataByName = function ( legacies_name ) {
    var _keys = Object.keys( LEGACIES.ENUM );
    var _current_key;
    for ( let i = 0, _size = _keys.length; i < _size; i++ ) {
        _current_key = _keys[ i ];
        if ( SERVICE.STRING.containsIgnoreCase( LEGACIES.ENUM[ _current_key ].name, legacies_name ) ) {
            return LEGACIES.ENUM[ _current_key ];
        }
    }
    return null;
};

// Les heritages polyvalents ne portent aucune marque fiable dans le scrap
// (le trait "Peu courant" existe aussi sur des heritages d'ascendance) :
// la liste vit ici, ecrite a la main, elle survit au re-scrap.
LEGACIES.VERSATILE      = [
    "Aiuvarin",
    "Changelin",
    "Crépusculaire",
    "Dhampir",
    "Dromaar",
    "Néphilim",
    "Sang-dragon"
];
LEGACIES.VERSATILE_LABEL = "Héritages polyvalents";

// Les langues qu'un herititage polyvalent ajoute au pool des langues
// supplementaires ne vivent QUE dans la prose du scrap («Ajoutez le
// draconique à la liste des langues supplémentaires de votre ascendance») :
// carte ecrite a la main, elle survit au re-scrap.
LEGACIES.ADDITIONAL_LANGUAGES = {
    "Sang-dragon": [
        "Draconique"
    ]
};

LEGACIES.getAdditionalLanguages = function ( legacy_name ) {
    if ( !legacy_name ) {
        return [];
    }
    let _name_to_lower_case = legacy_name.toLowerCase();
    let _keys               = Object.keys( LEGACIES.ADDITIONAL_LANGUAGES );
    for ( let i = 0, _size_i = _keys.length; i < _size_i; i++ ) {
        if ( _keys[ i ].toLowerCase() === _name_to_lower_case ) {
            return LEGACIES.ADDITIONAL_LANGUAGES[ _keys[ i ] ];
        }
    }
    return [];
};

LEGACIES.isVersatile = function ( legacy_name ) {
    if ( !legacy_name ) {
        return false;
    }
    let _name_to_lower_case = legacy_name.toLowerCase();
    for ( let i = 0, _size_i = LEGACIES.VERSATILE.length; i < _size_i; i++ ) {
        if ( LEGACIES.VERSATILE[ i ].toLowerCase() === _name_to_lower_case ) {
            return true;
        }
    }
    return false;
};