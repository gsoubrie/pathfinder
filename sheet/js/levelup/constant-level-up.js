"use strict";
/**
 * Constants of the level-up domain: the skills unlocked at each class level.
 */
var LEVELUP = {};

LEVELUP.key = "level_up_skills";

// Ability key of the "maîtrises initiales" unlock line, English override of the scraped label
LEVELUP.INITIAL_MASTERIES_KEY = "initial_masteries";

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
    "attribute_boost": "💪",
    "spell"          : "✨",
    "class_feature"  : "🔧"
};
