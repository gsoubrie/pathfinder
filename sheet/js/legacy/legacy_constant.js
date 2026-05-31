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
        if ( LEGACIES.ENUM[ _current_key ].name === legacies_name ) {
            return LEGACIES.ENUM[ _current_key ];
        }
    }
    return null;
};