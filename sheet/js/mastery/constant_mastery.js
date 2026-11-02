"use strict";

/**
 * Constants of the mastery domain: rank ordering (masteries aggregate by the
 * highest rank, they never add) and the description keywords mapping each
 * mastery line of the class data to its normalized slot.
 */

// Rank ordering used by the aggregation: the character keeps the best rank
MASTERY.ORDER = {
    "I": 0,
    "Q": 1,
    "E": 2,
    "M": 3,
    "L": 4
};

/**
 * @param {string|null} rank_a  Rank short letter, ex: "Q"
 * @param {string|null} rank_b  Rank short letter, ex: "E"
 * @returns {string|null}       The highest of the two ranks
 */
MASTERY.getHigherRank = function ( rank_a, rank_b ) {
    if ( !rank_b ) {
        return rank_a;
    }
    if ( !rank_a ) {
        return rank_b;
    }
    return MASTERY.ORDER[ rank_b ] > MASTERY.ORDER[ rank_a ] ? rank_b : rank_a;
};

/**
 * Rank right above the given one, "Q" when the skill is not trained yet.
 *
 * @param {string|null} rank  Rank short letter, ex: "Q"
 * @returns {string}          The next rank short letter, ex: "E"
 */
MASTERY.getNextRank = function ( rank ) {
    let current = rank ? MASTERY.ORDER[ rank ] : MASTERY.ORDER[ "I" ];
    let _keys   = Object.keys( MASTERY.ORDER );
    for ( let i = 0, _size_i = _keys.length; i < _size_i; i++ ) {
        if ( MASTERY.ORDER[ _keys[ i ] ] > current ) {
            return _keys[ i ];
        }
    }
    return "L";
};

/**
 * Rank a skill increase grants at the given level: one step above the
 * current rank, capped by the level (expert before 7, master before 15).
 *
 * @param {string|null} rank          Current rank short letter, ex: "Q"
 * @param {number}      level_number  Level at which the increase is taken
 * @returns {string}                  The granted rank short letter
 */
MASTERY.getIncreasedRank = function ( rank, level_number ) {
    let next_rank = MASTERY.getNextRank( rank );
    let gate      = level_number >= 15 ? "L" : ( level_number >= 7 ? "M" : "E" );
    return MASTERY.ORDER[ next_rank ] <= MASTERY.ORDER[ gate ] ? next_rank : gate;
};

// Description keywords of a class mastery line -> normalized slot.
// The keywords are written normalized (lowercase, accents removed,
// underscores), the descriptions are normalized before matching.
// The more specific keywords come first.
MASTERY.SLOT_KEYWORDS = [
    { keywords: [ "perception" ],                 slot: "perception",               label: "Perception" },
    { keywords: [ "en_vigueur" ],                 slot: "save__fortitude",          label: "Vigueur" },
    { keywords: [ "en_reflexes" ],                slot: "save__reflex",             label: "Réflexes" },
    { keywords: [ "en_volonte" ],                 slot: "save__will",               label: "Volonté" },
    { keywords: [ "mains_nues" ],                 slot: "attack__unarmed",          label: "Attaques à mains nues" },
    { keywords: [ "armes_simples" ],              slot: "attack__simple_weapons",  label: "Armes simples" },
    { keywords: [ "armes_de_guerre" ],            slot: "attack__martial_weapons", label: "Armes de guerre" },
    { keywords: [ "armes_evoluees" ],             slot: "attack__advanced_weapons", label: "Armes évoluées" },
    { keywords: [ "bombes_alchimiques" ],         slot: "attack__alchemical_bombs", label: "Bombes alchimiques" },
    { keywords: [ "arme_de_predilection" ],       slot: "attack__favored_weapon",  label: "Arme de prédilection" },
    { keywords: [ "sans_armure" ],                slot: "defense__unarmored",      label: "Défense sans armure" },
    { keywords: [ "armures_legeres" ],            slot: "defense__light_armor",    label: "Armures légères" },
    { keywords: [ "armures_intermediaires" ],     slot: "defense__medium_armor",   label: "Armures intermédiaires" },
    { keywords: [ "armures_lourdes" ],            slot: "defense__heavy_armor",    label: "Armures lourdes" },
    { keywords: [ "toutes_les_armures" ],         slot: "defense__all_armor",      label: "Toutes les armures" },
    { keywords: [ "attaques_de_sort", "attaque_de_sort", "modificateurs_de_sort", "modificateur_de_sort" ], slot: "spell_attack", label: "Attaques de sort" },
    { keywords: [ "dd_des_sorts", "dd_de_sort" ], slot: "spell_dc",                 label: "DD des sorts" },
    { keywords: [ "dd_de_classe" ],               slot: "class_dc",                         label: "DD de classe" }
];

// Sections of the character masteries popup, in display order.
// A line joins the section of its slot prefix, spell and class DC lines last.
MASTERY.SECTIONS = [
    { key: "perception", title: "Perception" },
    { key: "save__",     title: "Jets de sauvegarde" },
    { key: "skill__",    title: "Compétences" },
    { key: "attack__",   title: "Attaques" },
    { key: "defense__",  title: "Défenses" },
    { key: "",           title: "Sorts et DD de classe" }
];

// Saves displayed in the jets column of the General window: the Perception
// roll (the initiative rolls with it), then the three saving throws, each
// with its characteristic
MASTERY.SAVES = [
    { slot: "perception",      label: "Perception / Initiative", characteristic: "SAG" },
    { slot: "save__fortitude", label: "Vigueur",                 characteristic: "CON" },
    { slot: "save__reflex",    label: "Réflexes",                characteristic: "DEX" },
    { slot: "save__will",      label: "Volonté",                 characteristic: "SAG" }
];

/**
 * English key of a skill, resolved through SKILLS.LIST (labels are French,
 * keys are English) with singularization against scraped divergences
 * ("Représentations" matches PERFORMANCE), fallback: the normalized label.
 *
 * @param {string} skill_label  Display label of the skill, ex: "Acrobaties"
 * @returns {string}            The English key of the skill, ex: "acrobatics"
 */
MASTERY.getSkillKey = function ( skill_label ) {
    let ability_key = CLASSES.getAbilityKey( skill_label );
    let singular    = CLASSES.getSingularAbilityKey( ability_key );
    let _keys       = Object.keys( SKILLS.LIST );
    for ( let i = 0, _size_i = _keys.length; i < _size_i; i++ ) {
        let list_key = CLASSES.getAbilityKey( SKILLS.LIST[ _keys[ i ] ].label );
        if ( CLASSES.getSingularAbilityKey( list_key ) === singular ) {
            return _keys[ i ].toLowerCase();
        }
    }
    return ability_key;
};

/**
 * @param {string} skill_label  Display label of the skill, ex: "Acrobaties"
 * @returns {string}            The normalized mastery slot of the skill
 */
MASTERY.getSkillSlot = function ( skill_label ) {
    return "skill__" + MASTERY.getSkillKey( skill_label );
};

/**
 * @param {Array|Object|null} mastery_lines  Mastery lines of the class data,
 *                                           a single object or an array of them
 * @returns {Array}                          Always an array of { level, description }
 */
MASTERY.toArray = function ( mastery_lines ) {
    if ( !mastery_lines ) {
        return [];
    }
    if ( Array.isArray( mastery_lines ) ) {
        return mastery_lines;
    }
    return [ mastery_lines ];
};

/**
 * @param {string} slot  Normalized slot, ex: "save__fortitude"
 * @returns {string}     The display label of the slot
 */
MASTERY.getSlotLabel = function ( slot ) {
    for ( let i = 0, _size_i = MASTERY.SLOT_KEYWORDS.length; i < _size_i; i++ ) {
        if ( MASTERY.SLOT_KEYWORDS[ i ].slot === slot ) {
            return MASTERY.SLOT_KEYWORDS[ i ].label;
        }
    }
    if ( slot.indexOf( "skill__" ) === 0 ) {
        let list_data = SKILLS.LIST[ slot.slice( "skill__".length ).toUpperCase() ];
        if ( list_data ) {
            return list_data.label;
        }
    }
    return slot;
};

/**
 * Finds the normalized slot of a class mastery line from its description.
 * A line describing a single skill ("Qualifié en Arcanes") falls back to the
 * skill__ slot, anything else unmatched is dropped (returned null).
 *
 * @param {string} description  Mastery line description, ex: "Qualifié en Vigueur"
 * @returns {Object|null}        { slot, label }, or null when no slot matches
 */
MASTERY.getSlotFromDescription = function ( description ) {
    if ( !description ) {
        return null;
    }
    let normalized = CLASSES.getAbilityKey( description );
    for ( let i = 0, _size_i = MASTERY.SLOT_KEYWORDS.length; i < _size_i; i++ ) {
        let slot_keywords = MASTERY.SLOT_KEYWORDS[ i ];
        for ( let k = 0, _size_k = slot_keywords.keywords.length; k < _size_k; k++ ) {
            if ( normalized.indexOf( slot_keywords.keywords[ k ] ) !== -1 ) {
                return { slot: slot_keywords.slot, label: slot_keywords.label };
            }
        }
    }
    // A skill line: "<rank> en <skill>", the name stays short
    let rank_match = description.match( /^(?:Inexpérimenté|Qualifié|Expert|Maître|Légende)\s+en\s+(.+)$/i );
    if ( rank_match ) {
        let skill_name = rank_match[ 1 ].trim();
        if ( skill_name.split( /\s+/ ).length <= 2 && !/\d/.test( skill_name ) ) {
            return { slot: MASTERY.getSkillSlot( skill_name ), label: skill_name };
        }
    }
    return null;
};
