"use strict";
/**
 * Constants of the adjustments domain: the neutral categories of the manual
 * additions to the character.
 */
var ADJUSTMENT = {};

// Categories of the adjustments tab: each one owns its section, the value is
// a free text whose meaning belongs to its category, the explanation cites
// the source. The characteristic boost stays out until its consumption is
// decided.
ADJUSTMENT.KINDS = [
    {
        key               : "language",
        label             : "Langues",
        value_placeholder : "Langue"
    },
    {
        key               : "sense",
        label             : "Sens",
        value_placeholder : "Sens"
    },
    {
        key               : "speed",
        label             : "Vitesse",
        value_placeholder : "Mode, ex : Vol 15 mètres"
    },
    {
        key               : "feat",
        label             : "Dons",
        value_placeholder : "Don"
    },
    {
        key               : "mastery",
        label             : "Maîtrises",
        value_placeholder : "Maîtrise, ex : Arcanes experte"
    },
    {
        key               : "note",
        label             : "Notes",
        value_placeholder : "Note"
    }
];

ADJUSTMENT.EXPLANATION_PLACEHOLDER = "Source ou explication";

/**
 * @param {string} kind_key  Category key, ex: "language"
 * @returns {Object|null}    The kind data { key, label, value_placeholder }
 */
ADJUSTMENT.getKindData = function ( kind_key ) {
    for ( let i = 0, _size_i = ADJUSTMENT.KINDS.length; i < _size_i; i++ ) {
        if ( ADJUSTMENT.KINDS[ i ].key === kind_key ) {
            return ADJUSTMENT.KINDS[ i ];
        }
    }
    return null;
};
