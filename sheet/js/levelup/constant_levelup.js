"use strict";
/**
 * Constants of the level-up domain: the skills unlocked at each class level.
 */
var LEVELUP = {};

LEVELUP.key = "level_up_skills";

// Unlock types opening a choice (feats): the skill row then waits for a value
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
