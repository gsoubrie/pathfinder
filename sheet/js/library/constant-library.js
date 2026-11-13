"use strict";
/**
 * Constants of the library domain : the subjects of the Bibliothèque tab.
 * The old Dons tab becomes the consultation tab of every scraped subject
 * (user decision) : the display stays, each subject browses its dataset
 * through the same cards.
 */
var LIBRARY = {};

// The subjects of the tab : the array order drives the subject chips, the
// default subject opens first (user decision : Dons)
LIBRARY.SUBJECTS = [
    {
        "key"        : "feats",
        "label"      : "Dons",
        "placeholder": "Rechercher un don..."
    },
    {
        "key"        : "spells",
        "label"      : "Sorts",
        "placeholder": "Rechercher un sort..."
    },
    {
        "key"        : "stuffs",
        "label"      : "Équipement",
        "placeholder": "Rechercher un objet..."
    }
];

LIBRARY.DEFAULT_SUBJECT_KEY = "feats";
LIBRARY.FILTER_ALL_KEY      = "all";
LIBRARY.FILTER_ALL_LABEL    = "Tous";

// The type chips of the feats subject : each one filters the sources of
// the cards (the living types of the old Dons tab)
LIBRARY.FEAT_TYPES = [
    { "key": "all",       "label": "Tous" },
    { "key": "general",   "label": "Généraux" },
    { "key": "class",     "label": "Classe" },
    { "key": "race",      "label": "Ascendance" },
    { "key": "skill",     "label": "Compétence" },
    { "key": "archetype", "label": "Archétype" }
];

// The type tag a feat card carries (NOT the plural labels of the chips —
// the card speaks of ONE source) : the label rides the tag AND the text
// filter (a "Ascendance" typed finds the race feats, their scraped traits
// carry the race name only)
LIBRARY.FEAT_TYPE_LABELS = {
    "general"  : "Général",
    "class"    : "Classe",
    "race"     : "Ascendance",
    "skill"    : "Compétence",
    "archetype": "Archétype"
};
