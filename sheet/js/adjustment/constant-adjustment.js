"use strict";
/**
 * Constants of the adjustments domain: the neutral categories of the manual
 * additions to the character.
 */
var ADJUSTMENT = {};

// Categories of the adjustments tab: each one owns its section, the value is
// a free text whose meaning belongs to its category, the explanation cites
// the source. The value_picker drives the add row: "selector" when a list
// exists (the pick waits for the + commit), "speed" adds the meters input
// next to the mode selector, "input" for the free text cases. The mastery
// picks its lists with its phase 2 consumption; the characteristic boost
// landed with the Historique (user decision: the historic bonuses display
// only, the boost of the free choice rides here by hand).
ADJUSTMENT.KINDS = [
    {
        key         : "language",
        label       : "Langues",
        value_picker: "selector"
    },
    {
        key         : "lore",
        label       : "Connaissances",
        value_picker: "selector"
    },
    {
        key         : "action",
        label       : "Actions",
        value_picker: "selector"
    },
    {
        key         : "deity",
        label       : "Divinité",
        value_picker: "selector"
    },
    {
        key               : "sense",
        label             : "Sens",
        value_picker      : "input",
        value_placeholder : "Sens"
    },
    {
        key         : "speed",
        label       : "Vitesse",
        value_picker: "speed"
    },
    {
        key         : "feat",
        label       : "Dons",
        value_picker: "selector"
    },
    {
        key         : "mastery",
        label       : "Compétences",
        value_picker: "mastery"
    },
    {
        key         : "characteristic_boost",
        label       : "Bonus de caractéristique",
        value_picker: "selector"
    },
    {
        key               : "note",
        label             : "Notes",
        value_picker      : "input",
        value_placeholder : "Note"
    }
];

// Speed modes beyond the race walk, hand-written PF2 list
ADJUSTMENT.SPEED_MODES = [ "Vol", "Nage", "Escalade", "Creusage" ];

// Ranks proposed for a manual mastery: qualification and above, displayed
// "Label (short)", ex: "Expert (E)"
ADJUSTMENT.MASTERY_RANKS = [ "Q", "E", "M", "L" ].map( function ( short ) {
    let rank = MASTERY.getByShort( short );
    return { "name": rank.label + " (" + rank.short + ")" };
 } );

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
