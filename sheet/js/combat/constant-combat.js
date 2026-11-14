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
// the armors : their scraped group tells them apart
COMBAT.BOMB_GROUP       = "Bombe";
COMBAT.BOMB_SLOT       = "attack__alchemical_bombs";
COMBAT.SHIELD_GROUP    = "Bouclier";
COMBAT.SHIELD_CA_BONUS = 2;

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
