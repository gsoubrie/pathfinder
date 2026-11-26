"use strict";
/**
 * Constants of the combat domain : the calculation cards of the Combat tab.
 * The COMBAT namespace lives in constant.js (it already carries the damage
 * types of the health modals) — the domain file ADDS to it, never resets it.
 * The scraped fields of the equipment data drive everything they can (the
 * carrying category, the range), the hand-written cards below survive the
 * re-scrap and spell out the PF2 rules the data never shows.
 */

// The initiative rides Perception (PF2 : the default initiative roll), the
// three saves complete the reference row
COMBAT.INITIATIVE_ROLL = { "slot": "perception", "characteristic": "SAG" };

COMBAT.SAVES = [
    { "slot": "save__fortitude", "label": "Vigueur",   "characteristic": "CON" },
    { "slot": "save__reflex",    "label": "Réflexes",  "characteristic": "DEX" },
    { "slot": "save__will",      "label": "Volonté",   "characteristic": "SAG" }
];

// PF2 : the armor class starts at ten
COMBAT.BASE_ARMOR_CLASS = 10;

// The scraped category of a WEAPON -> the attack slot of its strike
COMBAT.WEAPON_CATEGORY_SLOTS = {
    "Arme simple"  : "attack__simple_weapons",
    "Arme de guerre": "attack__martial_weapons",
    "Arme évoluée" : "attack__advanced_weapons"
};

// The scraped category of an ARMOR -> the defense slot of the character
COMBAT.ARMOR_CATEGORY_SLOTS = {
    "Armure légère"        : "defense__light_armor",
    "Armure intermédiaire": "defense__medium_armor",
    "Armure lourde"        : "defense__heavy_armor"
};

// No armor worn : the unarmored defense rank drives the class
COMBAT.UNARMORED_DEFENSE_SLOT = "defense__unarmored";

// The bombs roll on the alchemical slot, the shields ride the same kind as
// the armors : the scraped group "Bouclier" belongs to the shield ATTACHMENTS
// (weapons), a shield itself is told apart by its Solidité (no armor wears one)
COMBAT.BOMB_GROUP       = "Bombe";
COMBAT.BOMB_SLOT       = "attack__alchemical_bombs";
COMBAT.SHIELD_CA_BONUS = 2;

/**
 * Whether a worn armor-kind entry is a shield : the Solidité field is the
 * scraped tell (every shield wears one, no armor does).
 *
 * @param {CHARACTER.Stuff} entry  A worn entry of kind "armor"
 * @returns {boolean}              True when the entry is a shield
 */
COMBAT.isShieldEntry = function ( entry ) {
    return !!entry.getCharacteristicValue( COMBAT.STURDINESS_FIELD );
};

// The scraped field names (the same labels the equipment lines read)
COMBAT.RANGE_FIELD      = "Portée";
COMBAT.DAMAGE_FIELD     = "Dégâts";
COMBAT.HANDS_FIELD      = "Mains";
COMBAT.CATEGORY_FIELD   = "Catégorie";
COMBAT.GROUP_FIELD      = "Groupe";
COMBAT.ARMOR_BONUS_FIELD = "CA bonus";
COMBAT.DEX_CAP_FIELD     = "Mod. de dex. max.";
COMBAT.STURDINESS_FIELD  = "Solidité";
COMBAT.FINESSE_TRAIT     = "Finesse";

// PF2 : everyone strikes with a fist, 1d4 bludgeoning
COMBAT.UNARMED_NAME  = "Mains nues";
COMBAT.UNARMED_SLOT  = "attack__unarmed";
COMBAT.UNARMED_DAMAGE = "1d4 contondant";

// The ranged and finesse strikes roll on Dexterity, the melee ones on
// Strength (a finesse strike lets the player CHOOSE Dexterity : the sheet
// rides the agile option, a Strength build lives in the frontier)
COMBAT.RANGED_CHARACTERISTIC  = "DEX";
COMBAT.MELEE_CHARACTERISTIC   = "FOR";
COMBAT.UNARMED_CHARACTERISTIC = "FOR";

/**
 * The signed number of a scraped field : "+3" reads 3, anything else reads
 * null (the caller owns its default).
 *
 * @param {string|null} text_value  Scraped value, ex: "+3"
 * @returns {number|null}           The parsed number
 */
COMBAT.parseSignedNumber = function ( text_value ) {
    if ( text_value === null || text_value === undefined ) {
        return null;
    }
    let parsed = parseInt( String( text_value ).replace( "+", "" ), 10 );
    return isNaN( parsed ) ? null : parsed;
};

//********************************************  ACTIONS  **************************************************//

// The sections of the Actions zone, in display order. The key of a line is
// derived from the scraped traits of its compendium entry (see
// getActionSectionKey), the hand-written card below only picks WHICH basic
// actions the zone always shows — the names are the exact labels of the
// scraped compendium
COMBAT.ACTION_SECTIONS = [
    { "key": "attack",     "label": "Attaques" },
    { "key": "move",       "label": "Déplacements" },
    { "key": "manipulate", "label": "Manipulation" },
    { "key": "stealth",    "label": "Discrétion" },
    { "key": "reaction",   "label": "Réactions" },
    { "key": "other",      "label": "Autres" }
];

// The basic combat actions every character owns (PF2 remaster labels of the
// scraped compendium, verified against OBJECT.COMPENDIUM)
COMBAT.BASIC_ACTIONS = [
    "Frapper",
    "Saisir",
    "Pousser",
    "Désarmer",
    "Croc-en-jambe",
    "Repositionner",
    "S'échapper",
    "Ouvrir de force",
    "Marcher rapidement",
    "Bondir",
    "Escalader",
    "Nager",
    "Ramper",
    "Se jeter à terre",
    "Se relever",
    "Être furtif",
    "Interagir",
    "Mise à l'abri",
    "Se cacher",
    "Chercher",
    "Se souvenir",
    "Aider"
];

/**
 * The section key of a compendium action, derived from its scraped traits :
 * a reaction rides its cost, then Attaque / Déplacement / Manipulation /
 * Secret win over the remaining traits, anything else lands in "other".
 *
 * @param {Object|null} action_data  A compendium entry of category "action"
 * @returns {string}                 A key of COMBAT.ACTION_SECTIONS
 */
COMBAT.getActionSectionKey = function ( action_data ) {
    if ( !action_data ) {
        return "other";
    }
    if ( action_data.action_cost === "r" ) {
        return "reaction";
    }
    let traits = action_data.traits || [];
    if ( traits.indexOf( "Attaque" ) !== -1 ) {
        return "attack";
    }
    if ( traits.indexOf( "Déplacement" ) !== -1 ) {
        return "move";
    }
    if ( traits.indexOf( "Manipulation" ) !== -1 ) {
        return "manipulate";
    }
    if ( traits.indexOf( "Secret" ) !== -1 ) {
        return "stealth";
    }
    return "other";
};

//********************************************  MODE TABS  **************************************************//

// The three play modes of the Combat tab (PF2) : each tab swaps the action
// column on the right, the main column stays identical. The order and the
// default are user decisions (Exploration first, active at load) ; the mode
// is a VIEW STATE of the window, never saved
COMBAT.MODE_TABS = [
    { "key": "exploration", "label": "Exploration", "trait": "Exploration" },
    { "key": "combat",      "label": "Combats",      "trait": null },
    { "key": "intermede",   "label": "Intermède",   "trait": "Intermède" }
];

COMBAT.DEFAULT_MODE = "exploration";

// The activity modes (Exploration / Intermède) hide the combat zones of the
// main column (Attaques, Incantation) and show the remaining spells instead ;
// the combat mode keeps the full column (user decision). The state rides the
// data-current-mode attribute of the main column, the CSS reads it
COMBAT.ACTIVITY_MODES = [ "exploration", "intermede" ];

/**
 * @param {string} mode_key  "exploration" / "combat" / "intermede"
 * @returns {boolean}        True when the mode is an activity mode
 */
COMBAT.isActivityMode = function ( mode_key ) {
    return COMBAT.ACTIVITY_MODES.indexOf( mode_key ) !== -1;
};

// The remaining-spells zone of the activity modes : one line per prepared,
// unspent daily slot (title + empty line, French display labels)
COMBAT.REMAINING_SPELLS_TITLE = "Sorts restants";
COMBAT.REMAINING_SPELLS_EMPTY = "Aucun sort restant";

// The COMMON activities of an activity mode (exploration/intermède),
// hand-written card (same pattern as BASIC_ACTIONS, survives the re-scrap) :
// the base PF2 activities every character can undertake. The scraped
// compendium lists far more entries with the mode trait (campaign- and
// feat-specific activities) — those reach the tab ONLY through the
// character's own "action" adjustments carrying the trait ; the full list
// stays consultable in the Library (Actions subject)
COMBAT.MODE_COMMON_ACTIONS = {
    "exploration": [
        "Détection de la magie",
        "Dissimuler des traces",
        "Échapper aux regards",
        "Identifier l'alchimie",
        "Identifier la magie",
        "Recueillir des informations",
        "Rechercher",
        "Réparer",
        "S'orienter",
        "Se faufiler",
        "Soigner les blessures",
        "Suivre une piste"
    ],
    "intermede": [
        "Bachoter",
        "Fabriquer",
        "Gagner de l'argent",
        "Repos long",
        "Réapprentissage",
        "Soigner une maladie",
        "Subsister"
    ]
};

// PF2 : most exploration/downtime activities require the character to be
// TRAINED in a skill (the scraped "required" fields are empty for them,
// the rule lives in the rulebook prose) — hand-written card keyed by action
// name, survives the re-scrap. "skills" lists the skill labels the activity
// can ride (any one trained is enough, ex. Identifier la magie rides the
// tradition skill) ; "spell" means the character must be able to cast
// (Détection de la magie is a spell) ; "any_skill" means any trained skill
// (Gagner de l'argent). No card entry = always available. An "action"
// adjustment chosen by the character always shows, whatever the requirement
COMBAT.MIN_ACTIVITY_RANK = "Q";

COMBAT.MODE_ACTION_REQUIREMENTS = {
    "Détection de la magie" : { "spell"    : true },
    "Identifier la magie"   : { "skills"   : [ "Arcanes", "Nature", "Occultisme", "Religion" ] },
    "Identifier l'alchimie" : { "skills"   : [ "Artisanat" ] },
    "Réparer"               : { "skills"   : [ "Artisanat" ] },
    "S'orienter"            : { "skills"   : [ "Survie" ] },
    "Suivre une piste"      : { "skills"   : [ "Survie" ] },
    "Soigner les blessures" : { "skills"   : [ "Médecine" ] },
    "Dissimuler des traces" : { "skills"   : [ "Discrétion" ] },
    "Fabriquer"             : { "skills"   : [ "Artisanat" ] },
    "Gagner de l'argent"    : { "any_skill": true },
    "Soigner une maladie"   : { "skills"   : [ "Médecine" ] }
};

/**
 * The mode tab of a mode key.
 *
 * @param {string} mode_key  "exploration" / "combat" / "intermede"
 * @returns {Object|null}    An entry of COMBAT.MODE_TABS
 */
COMBAT.getModeTab = function ( mode_key ) {
    for ( let i = 0, _size_i = COMBAT.MODE_TABS.length; i < _size_i; i++ ) {
        if ( COMBAT.MODE_TABS[ i ].key === mode_key ) {
            return COMBAT.MODE_TABS[ i ];
        }
    }
    return null;
};

//********************************************  CONDITIONAL BONUSES  **************************************************//

// Hand-written card of the CONDITIONAL bonuses (survives the re-scrap, same
// pattern as MASTERY_UPGRADES) : each entry names its source ("legacy"
// today, "feat"/"stuff" when their structured data arrive), the save slots
// it applies to, and the display label with the clickable action names
// (resolved in the compendium, popup ACTION by name). DISPLAY ONLY : the
// save roll stays raw, the bonus applies against specific attempts (the GM
// owns it)
COMBAT.CONDITIONAL_BONUSES = [
    {
        "source"     : "legacy",
        "source_name": "Nain des roches",
        "value"      : 2,
        "type"       : "circonstance",
        "slots"      : [ "save__fortitude", "save__reflex" ],
        "label"      : "contre Pousser, Croc-en-jambe, Repositionner et les effets vous faisant tomber À terre",
        "actions"    : [ "Pousser", "Croc-en-jambe", "Repositionner" ]
    }
];
