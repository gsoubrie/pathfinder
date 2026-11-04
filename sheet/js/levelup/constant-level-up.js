"use strict";
/**
 * Constants of the level-up domain: the skills unlocked at each class level.
 */
var LEVELUP = {};

// Ability key of the "maîtrises initiales" unlock line, English override of the scraped label
LEVELUP.INITIAL_MASTERIES_KEY = "initial_masteries";

// Additional trained skills of a class (N + Intelligence modifier): the lines
// live on the class level-1 entry, the slot key is positional so the chosen
// values stay stable while the Intelligence modifier moves the count
LEVELUP.ADDITIONAL_SKILL_TYPE  = "additional_skill";
LEVELUP.ADDITIONAL_SKILL_KEY   = "additional_skill_";
LEVELUP.ADDITIONAL_SKILL_LABEL = "Compétence supplémentaire";

// Additional languages of the ancestry (N = Intelligence modifier if
// positive, one more for Humain): the lines live on the ancestry level-1
// entry, positional slot key for the same stability reason
LEVELUP.ADDITIONAL_LANGUAGE_TYPE  = "additional_language";
LEVELUP.ADDITIONAL_LANGUAGE_KEY   = "additional_language_";
LEVELUP.ADDITIONAL_LANGUAGE_LABEL = "Langue supplémentaire";

// Feat lines: chosen through a selector, the options come by sync (they
// depend on the character state: feat level and skill prerequisites)
LEVELUP.FEAT_TYPES = [
    "skill_feat",
    "class_feat",
    "ancestry_feat"
];

// Gift category of each feat type, for the information popup (DON domain)
LEVELUP.FEAT_CATEGORIES = {
    "skill_feat"   : "skill",
    "class_feat"   : "class",
    "ancestry_feat": "race"
};

// Character levels granting an ancestry feat (PF2): one section per level
// reached, on CHARACTER.AncestryHistory
LEVELUP.ANCESTRY_FEAT_LEVELS = [ 1, 5, 9, 13, 17 ];

// The ancestry feat line: type and slot key of the single line of an entry
LEVELUP.ANCESTRY_FEAT_KEY   = "ancestry_feat";
LEVELUP.ANCESTRY_FEAT_LABEL = "Don d'ascendance";

// Phases of a level-up line. Domain values, NOT GS.OBJECT.CONST.PHASE ones:
// a phase value carries global utility styles (SLEEPING = cursor not-allowed
// + children pointer-events none) that contradict a line which stays
// clickable while pending. RUNNING is borrowed vocabulary (the utility blue
// background is covered by the explicit row background in sheet_levelup.css)
LEVELUP.PHASE = {
    SELECTED: "SELECTED",
    RUNNING : "RUNNING"
};

// Unlock types opening a choice (feats): they carry a positional slot key
// (type + index) so the validated state stays stable across rebuilds
LEVELUP.CHOICE_TYPES = [
    "general_feat",
    "class_feat",
    "skill_feat",
    "ancestry_feat"
];

// Icon of each unlock type, shown at the start of its row
LEVELUP.ICONS = {
    "general_feat"   : "🎖",
    "class_feat"     : "⚔",
    "skill_feat"     : "📚",
    "ancestry_feat"  : "🌿",
    "skill_increase" : "📈",
    "additional_skill": "➕",
    "additional_language": "💬",
    "attribute_boost": "💪",
    "spell"          : "✨",
    "class_feature"  : "🔧"
};
