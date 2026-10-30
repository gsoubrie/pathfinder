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

// Description keywords of a class mastery line -> normalized slot.
// The keywords are written normalized (lowercase, accents removed,
// underscores), the descriptions are normalized before matching.
// The more specific keywords come first.
MASTERY.SLOT_KEYWORDS = [
    { keywords: [ "perception" ],                    slot: "perception",                   label: "Perception" },
    { keywords: [ "en_vigueur" ],                 slot: "save__vigueur",                label: "Vigueur" },
    { keywords: [ "en_reflexes" ],                slot: "save__reflexes",               label: "Réflexes" },
    { keywords: [ "en_volonte" ],                 slot: "save__volonte",                label: "Volonté" },
    { keywords: [ "mains_nues" ],                 slot: "attack__mains_nues",           label: "Attaques à mains nues" },
    { keywords: [ "armes_simples" ],              slot: "attack__armes_simples",        label: "Armes simples" },
    { keywords: [ "armes_martiales" ],            slot: "attack__armes_martiales",      label: "Armes martiales" },
    { keywords: [ "armes_de_guerre" ],            slot: "attack__armes_de_guerre",      label: "Armes de guerre" },
    { keywords: [ "armes_avancees" ],             slot: "attack__armes_avancees",       label: "Armes avancées" },
    { keywords: [ "armes_evoluees" ],             slot: "attack__armes_evoluees",       label: "Armes évoluées" },
    { keywords: [ "bombes_alchimiques" ],         slot: "attack__bombes_alchimiques",   label: "Bombes alchimiques" },
    { keywords: [ "arme_de_predilection" ],       slot: "attack__arme_de_predilection", label: "Arme de prédilection" },
    { keywords: [ "sans_armure" ],                slot: "defense__sans_armure",         label: "Défense sans armure" },
    { keywords: [ "armures_legeres" ],            slot: "defense__armures_legeres",     label: "Armures légères" },
    { keywords: [ "armures_intermediaires" ],    slot: "defense__armures_intermediaires", label: "Armures intermédiaires" },
    { keywords: [ "armures_lourdes" ],            slot: "defense__armures_lourdes",     label: "Armures lourdes" },
    { keywords: [ "toutes_les_armures" ],         slot: "defense__toutes_les_armures",  label: "Toutes les armures" },
    { keywords: [ "attaques_de_sort", "attaque_de_sort", "modificateurs_de_sort", "modificateur_de_sort" ], slot: "spell_attack", label: "Attaques de sort" },
    { keywords: [ "dd_des_sorts", "dd_de_sort" ],  slot: "spell_dc",                     label: "DD des sorts" },
    { keywords: [ "dd_de_classe" ],               slot: "class_dc",                     label: "DD de classe" }
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

// Jets affichés dans la colonne dédiée du Général : le jet de Perception
// (l'initiative y default), puis les trois jets de sauvegarde, chacun avec
// sa caractéristique
MASTERY.SAVES = [
    { slot: "perception",  label: "Perception / Initiative", characteristic: "SAG" },
    { slot: "save__vigueur",  label: "Vigueur",  characteristic: "CON" },
    { slot: "save__reflexes", label: "Réflexes", characteristic: "DEX" },
    { slot: "save__volonte",  label: "Volonté",  characteristic: "SAG" }
];

/**
 * @param {string} skill_label  Display label of the skill, ex: "Acrobaties"
 * @returns {string}            The normalized mastery slot of the skill
 */
MASTERY.getSkillSlot = function ( skill_label ) {
    return "skill__" + CLASSES.getAbilityKey( skill_label );
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
 * @param {string} slot  Normalized slot, ex: "save__vigueur"
 * @returns {string}     The display label of the slot
 */
MASTERY.getSlotLabel = function ( slot ) {
    for ( let i = 0, _size_i = MASTERY.SLOT_KEYWORDS.length; i < _size_i; i++ ) {
        if ( MASTERY.SLOT_KEYWORDS[ i ].slot === slot ) {
            return MASTERY.SLOT_KEYWORDS[ i ].label;
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
    // Compétence : "<rang> en <compétence>", le nom reste court
    let rank_match = description.match( /^(?:Inexpérimenté|Qualifié|Expert|Maître|Légende)\s+en\s+(.+)$/i );
    if ( rank_match ) {
        let skill_name = rank_match[ 1 ].trim();
        if ( skill_name.split( /\s+/ ).length <= 2 && !/\d/.test( skill_name ) ) {
            return { slot: "skill__" + CLASSES.getAbilityKey( skill_name ), label: skill_name };
        }
    }
    return null;
};
