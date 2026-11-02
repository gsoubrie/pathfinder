"use strict";

/**
 * Choices opened by class abilities, for the level-up window.
 * Structure: CLASSES.CHOICES[ class_name ][ ability_key ] = { entries }
 * - entries: the selectable options, { name, uuid }, each uuid targeting
 *   OBJECT.COMPENDIUM so every option opens its information popup.
 * The ability key is the unlock label, normalized (lowercase, accents removed,
 * separators as underscore): "école arcanique" -> "ecole_arcanique".
 * The "?" link of a choice row opens the ability information popup
 * (CLASSES.getAbilityInformation), built from the class data itself.
 */
CLASSES.CHOICES = {
    "Alchimiste": {
        "champ_de_recherche": {
            "entries": [
                { "name": "Bombardier" },
                { "name": "Chirurgien" },
                { "name": "Mutagéniste" },
                { "name": "Toxicologiste" }
            ]
        }
    },
    "Barbare": {
        "instinct": {
            "entries": [
                { "name": "Instinct animal" },
                { "name": "Instinct de décomposition" },
                { "name": "Instinct de géant" },
                { "name": "Instinct de la furie" },
                { "name": "Instinct du dragon" },
                { "name": "Instinct élémentaire" },
                { "name": "Instinct ligneux" },
                { "name": "Instinct spirituel" },
                { "name": "Instinct superstitieux" }
            ]
        }
    },
    "Barde": {
        "muse": {
            "entries": [
                { "name": "Combattante" },
                { "name": "Énigmatique" },
                { "name": "Maestro" },
                { "name": "Touche-à-tout" },
                { "name": "Zoophonie" }
            ]
        }
    },
    "Bretteur": {
        "style_de_bretteur": {
            "entries": [
                { "name": "Danseur de combat" },
                { "name": "Escrimeur" },
                { "name": "Esprit" },
                { "name": "Fanfaron" },
                { "name": "Fripouille" },
                { "name": "Gymnaste" }
            ]
        }
    },
    "Champion": {
        "cause": {
            "entries": [
                { "name": "Grandeur" },
                { "name": "Iniquité" },
                { "name": "Justice" },
                { "name": "Libération" },
                { "name": "Obéissance" },
                { "name": "Profanation" },
                { "name": "Rédemption" }
            ]
        }
    },
    "Druide": {
        "ordre_druidique": {
            "entries": [
                { "name": "Ordre animal" },
                { "name": "Ordre de la feuille" },
                { "name": "Ordre des spores" },
                { "name": "Ordre du cultivateur" },
                { "name": "Ordre de la flamme" },
                { "name": "Ordre de la pierre" },
                { "name": "Ordre de la tempête" },
                { "name": "Ordre de la vague" },
                { "name": "Ordre indompté" }
            ]
        }
    },
    "Enquêteur": {
        "methodologie": {
            "entries": [
                { "name": "Empirisme" },
                { "name": "Interrogatoire" },
                { "name": "Médecine forensique" },
                { "name": "Sciences alchimiques" }
            ]
        }
    },
    "Ensorceleur": {
        "lignage": {
            "entries": [
                { "name": "Aberrant" },
                { "name": "Aesir" },
                { "name": "Angélique" },
                { "name": "Béni du ver" },
                { "name": "Démoniaque" },
                { "name": "Diabolique" },
                { "name": "Draconique" },
                { "name": "Élémentaire" },
                { "name": "Féerique" },
                { "name": "Génie" },
                { "name": "Guenaude" },
                { "name": "Impérial" },
                { "name": "Mort-vivant" },
                { "name": "Nymphe" },
                { "name": "Ombre" },
                { "name": "Phénix" },
                { "name": "Psychopompe" },
                { "name": "Tourment" }
            ]
        }
    },
    "Magicien": {
        "ecole_arcanique": {
            "entries": [
                { "name": "École de forme protéenne",            "uuid": "ZBFICTkzUjE4BDGJ" },
                { "name": "École de Kalistrade",                  "uuid": "jtAqb5rnhQblZuM8" },
                { "name": "École de la frontière",                "uuid": "ZpFCZnVzIfZLfNii" },
                { "name": "École de magie civique",               "uuid": "YZ2XPmx1WHyWtM0g" },
                { "name": "École des lettres",                    "uuid": "wObrT6PytPdS5aUi" },
                { "name": "École des portails",                   "uuid": "XXnGHBxNZvRsdkKM" },
                { "name": "École des technologies magiques",      "uuid": "dPAwM9IdabdH68mW" },
                { "name": "École du mentalisme",                  "uuid": "L5FiuXsfW6Sa31gO" },
                { "name": "École de la théorie magique unifiée",  "uuid": "xYYhJtGhFSWNifcO" },
                { "name": "École de la récupération",             "uuid": "n2LRzksKVSzOuzqN" },
                { "name": "École de la sagesse enracinée",        "uuid": "KGkWSv9rARpwWzXW" }
            ]
        },
        "these_arcanique": {
            "entries": [
                { "name": "Bâton nexus" },
                { "name": "Expérimentation mutamagique" },
                { "name": "Harmonisation avec le familier améliorée" },
                { "name": "Mélange de sorts" },
                { "name": "Substitution de sort" }
            ]
        }
    },
    "Oracle": {
        "mystere": {
            "entries": [
                { "name": "Ancêtres" },
                { "name": "Cendres" },
                { "name": "Combat" },
                { "name": "Cosmos" },
                { "name": "Décrépitude" },
                { "name": "Flammes" },
                { "name": "Ossements" },
                { "name": "Savoir" },
                { "name": "Tempête" },
                { "name": "Temps" },
                { "name": "Vie" }
            ]
        }
    },
    "Prêtre": {
        "doctrine": {
            "entries": [
                { "name": "Prêtre cloîtré" },
                { "name": "Prêtre combattant" }
            ]
        }
    },
    "Rôdeur": {
        "specialite_du_chasseur": {
            "entries": [
                { "name": "Déluge" },
                { "name": "Précision" },
                { "name": "Ruse" }
            ]
        }
    },
    "Roublard": {
        "trafic_de_roublard": {
            "entries": [
                { "name": "Mystificateur" },
                { "name": "Scélérat" },
                { "name": "Stratège" },
                { "name": "Voleur" },
                { "name": "Voyou" }
            ]
        }
    },
    "Sorcier": {
        "patron": {
            "entries": [
                { "name": "Chœur politique" },
                { "name": "Dévoreur de pourriture" },
                { "name": "Gardien de la flamme de la foi" },
                { "name": "Intendant de la nature" },
                { "name": "L'inscrit" },
                { "name": "Le courtier invisible" },
                { "name": "Le ressentiment" },
                { "name": "Murmure des ailes" },
                { "name": "Moustique" },
                { "name": "Ombre sans étoile" },
                { "name": "Ondulation dans les profondeurs" },
                { "name": "Paradoxe des opposés" },
                { "name": "Silence dans la neige" },
                { "name": "Tisseur de fils" }
            ]
        }
    }
};

/**
 * Abilities named differently in capacity_by_level (level table) than in the
 * class abilities data: normalized label key -> real abilities key, per class
 * key. These are the same ability scraped under two names.
 */
CLASSES.ABILITY_ALIASES = {
    "barde": {
        "incantateur_maitre"           : "maitre_incantateur",
        "expert_en_vigueur"            : "expertise_en_vigueur",
        "coeur_de_performeur_superieur": "c_ur_de_performeur_superieur"
    },
    "druide": {
        "maitre_incantateur": "incantateur_maitre"
    },
    "ensorceleur": {
        "incantation_d_ensorceleur": "incantation_de_l_ensorceleur",
        "incantateur_expert"       : "incantation_experte"
    },
    "magicien": {
        "incantation_arcanique": "incantation_de_magicien"
    }
};

/**
 * Mastery rank upgrades opened by class abilities, per class key: ability key
 * -> the slots raised and their guaranteed rank. Hand-written from the ability
 * descriptions (the class data carries no structured rank data). Choice-based
 * abilities (skill increases, monk's path to perfection, fighter's weapon
 * groups, priest doctrines) are not fixed upgrades and stay out.
 */
CLASSES.MASTERY_UPGRADES = {
    "alchimiste": {
        "expertise_avec_les_armes_alchimiques" : [ { "slot": "attack__simple_weapons", "rank": "E" }, { "slot": "attack__alchemical_bombs", "rank": "E" }, { "slot": "attack__unarmed", "rank": "E" } ],
        "expertise_alchimique"                 : [ { "slot": "class_dc", "rank": "E" } ],
        "expertise_en_volonte"                 : [ { "slot": "save__will", "rank": "E" } ],
        "expertise_en_perception"              : [ { "slot": "perception", "rank": "E" } ],
        "resistance_aux_produits_chimiques"    : [ { "slot": "save__fortitude", "rank": "M" } ],
        "expertise_avec_les_armures_intermediaires": [ { "slot": "defense__light_armor", "rank": "E" }, { "slot": "defense__medium_armor", "rank": "E" }, { "slot": "defense__unarmored", "rank": "E" } ],
        "esquiveur_d_explosion"                : [ { "slot": "save__reflex", "rank": "M" } ],
        "maitrise_des_armes_alchimiques"       : [ { "slot": "attack__simple_weapons", "rank": "M" }, { "slot": "attack__alchemical_bombs", "rank": "M" }, { "slot": "attack__unarmed", "rank": "M" } ],
        "maitrise_alchimique"                  : [ { "slot": "class_dc", "rank": "M" } ],
        "maitrise_des_armures_intermediaires"  : [ { "slot": "defense__light_armor", "rank": "M" }, { "slot": "defense__medium_armor", "rank": "M" }, { "slot": "defense__unarmored", "rank": "M" } ]
    },
    "barbare": {
        "brutalite"                            : [ { "slot": "attack__simple_weapons", "rank": "E" }, { "slot": "attack__martial_weapons", "rank": "E" }, { "slot": "attack__unarmed", "rank": "E" } ],
        "juggernaut"                           : [ { "slot": "save__fortitude", "rank": "M" } ],
        "rage_formidable"                      : [ { "slot": "class_dc", "rank": "E" } ],
        "expertise_en_reflexes"                : [ { "slot": "save__reflex", "rank": "E" } ],
        "expertise_avec_les_armures_intermediaires": [ { "slot": "defense__light_armor", "rank": "E" }, { "slot": "defense__medium_armor", "rank": "E" }, { "slot": "defense__unarmored", "rank": "E" } ],
        "maitrise_des_armes"                   : [ { "slot": "attack__simple_weapons", "rank": "M" }, { "slot": "attack__martial_weapons", "rank": "M" }, { "slot": "attack__unarmed", "rank": "M" } ],
        "volonte_indomptable"                  : [ { "slot": "save__will", "rank": "M" } ],
        "maitrise_en_perception"               : [ { "slot": "perception", "rank": "M" } ],
        "devastateur"                          : [ { "slot": "class_dc", "rank": "M" } ],
        "maitrise_des_armures"                 : [ { "slot": "defense__light_armor", "rank": "M" }, { "slot": "defense__medium_armor", "rank": "M" }, { "slot": "defense__unarmored", "rank": "M" } ]
    },
    "barde": {
        "expertise_en_reflexes"                : [ { "slot": "save__reflex", "rank": "E" } ],
        "incantateur_expert"                   : [ { "slot": "spell_attack", "rank": "E" }, { "slot": "spell_dc", "rank": "E" } ],
        "c_ur_de_performeur"                   : [ { "slot": "save__will", "rank": "M" } ],
        "expertise_en_vigueur"                 : [ { "slot": "save__fortitude", "rank": "E" } ],
        "expertise_avec_les_armes_du_barde"    : [ { "slot": "attack__simple_weapons", "rank": "E" }, { "slot": "attack__martial_weapons", "rank": "E" }, { "slot": "attack__unarmed", "rank": "E" } ],
        "maitrise_en_perception"               : [ { "slot": "perception", "rank": "M" } ],
        "expertise_avec_les_armures_legeres"   : [ { "slot": "defense__light_armor", "rank": "E" }, { "slot": "defense__unarmored", "rank": "E" } ],
        "maitre_incantateur"                   : [ { "slot": "spell_attack", "rank": "M" }, { "slot": "spell_dc", "rank": "M" } ],
        "incantateur_legendaire"               : [ { "slot": "spell_attack", "rank": "L" }, { "slot": "spell_dc", "rank": "L" } ]
    },
    "bretteur": {
        "expertise_en_vigueur"                 : [ { "slot": "save__fortitude", "rank": "E" } ],
        "expertise_avec_les_armes"             : [ { "slot": "attack__simple_weapons", "rank": "E" }, { "slot": "attack__martial_weapons", "rank": "E" }, { "slot": "attack__unarmed", "rank": "E" } ],
        "evasion_confiante"                   : [ { "slot": "save__reflex", "rank": "M" } ],
        "expertise_du_bretteur"                : [ { "slot": "class_dc", "rank": "E" } ],
        "maitrise_en_perception"               : [ { "slot": "perception", "rank": "M" } ],
        "expertise_avec_les_armures_legeres"   : [ { "slot": "defense__light_armor", "rank": "E" }, { "slot": "defense__unarmored", "rank": "E" } ],
        "weapon_mastery"                       : [ { "slot": "attack__simple_weapons", "rank": "M" }, { "slot": "attack__martial_weapons", "rank": "M" }, { "slot": "attack__unarmed", "rank": "M" } ],
        "ego_renforce"                         : [ { "slot": "save__will", "rank": "M" } ],
        "confiance_eternelle"                  : [ { "slot": "class_dc", "rank": "M" } ],
        "maitrise_des_armures_legeres"         : [ { "slot": "defense__light_armor", "rank": "M" }, { "slot": "defense__unarmored", "rank": "M" } ]
    },
    "champion": {
        "expertise_avec_les_armes"             : [ { "slot": "attack__simple_weapons", "rank": "E" }, { "slot": "attack__martial_weapons", "rank": "E" }, { "slot": "attack__unarmed", "rank": "E" } ],
        "expertise_en_armure"                  : [ { "slot": "defense__light_armor", "rank": "E" }, { "slot": "defense__medium_armor", "rank": "E" }, { "slot": "defense__heavy_armor", "rank": "E" }, { "slot": "defense__unarmored", "rank": "E" } ],
        "corps_sacre"                          : [ { "slot": "save__fortitude", "rank": "M" } ],
        "expertise_du_champion"                : [ { "slot": "class_dc", "rank": "E" }, { "slot": "spell_attack", "rank": "E" }, { "slot": "spell_dc", "rank": "E" } ],
        "expertise_en_reflexes"                : [ { "slot": "save__reflex", "rank": "E" } ],
        "expertise_en_perception"              : [ { "slot": "perception", "rank": "E" } ],
        "maitrise_des_armures"                 : [ { "slot": "defense__light_armor", "rank": "M" }, { "slot": "defense__medium_armor", "rank": "M" }, { "slot": "defense__heavy_armor", "rank": "M" }, { "slot": "defense__unarmored", "rank": "M" } ],
        "maitrise_du_champion"                 : [ { "slot": "class_dc", "rank": "M" }, { "slot": "spell_attack", "rank": "M" }, { "slot": "spell_dc", "rank": "M" } ]
    },
    "druide": {
        "expertise_en_perception"              : [ { "slot": "perception", "rank": "E" } ],
        "expertise_en_vigueur"                 : [ { "slot": "save__fortitude", "rank": "E" } ],
        "expertise_en_reflexes"                : [ { "slot": "save__reflex", "rank": "E" } ],
        "incantateur_expert"                   : [ { "slot": "spell_attack", "rank": "E" }, { "slot": "spell_dc", "rank": "E" } ],
        "determination_sauvage"                : [ { "slot": "save__will", "rank": "M" } ],
        "expertise_avec_les_armes"             : [ { "slot": "attack__simple_weapons", "rank": "E" }, { "slot": "attack__unarmed", "rank": "E" } ],
        "incantateur_maitre"                   : [ { "slot": "spell_attack", "rank": "M" }, { "slot": "spell_dc", "rank": "M" } ]
    },
    "enqueteur": {
        "expertise_avec_les_armes"             : [ { "slot": "attack__simple_weapons", "rank": "E" }, { "slot": "attack__martial_weapons", "rank": "E" }, { "slot": "attack__unarmed", "rank": "E" } ],
        "maitrise_en_perception"               : [ { "slot": "perception", "rank": "M" } ],
        "expertise_en_vigueur"                 : [ { "slot": "save__fortitude", "rank": "E" } ],
        "volonte_inebranlable"                 : [ { "slot": "save__will", "rank": "M" } ],
        "expertise_avec_les_armures_legeres"   : [ { "slot": "defense__light_armor", "rank": "E" }, { "slot": "defense__unarmored", "rank": "E" } ],
        "reflexes_avises"                      : [ { "slot": "save__reflex", "rank": "M" } ],
        "maitrise_des_armures_legeres"         : [ { "slot": "defense__light_armor", "rank": "M" }, { "slot": "defense__unarmored", "rank": "M" } ]
    },
    "ensorceleur": {
        "vigueur_magique"                       : [ { "slot": "save__fortitude", "rank": "E" } ],
        "incantation_experte"                  : [ { "slot": "spell_attack", "rank": "E" }, { "slot": "spell_dc", "rank": "E" } ],
        "expertise_en_reflexes"                : [ { "slot": "save__reflex", "rank": "E" } ],
        "expertise_avec_les_armes"             : [ { "slot": "attack__simple_weapons", "rank": "E" }, { "slot": "attack__unarmed", "rank": "E" } ],
        "expertise_en_perception"              : [ { "slot": "perception", "rank": "E" } ],
        "robes_defensives"                     : [ { "slot": "defense__unarmored", "rank": "E" } ],
        "incantateur_maitre"                   : [ { "slot": "spell_attack", "rank": "M" }, { "slot": "spell_dc", "rank": "M" } ],
        "volonte_majestueuse"                  : [ { "slot": "save__will", "rank": "M" } ]
    },
    "guerrier": {
        "bravoure"                             : [ { "slot": "save__will", "rank": "E" } ],
        "arpenteur_du_champ_de_bataille"       : [ { "slot": "perception", "rank": "M" } ],
        "endurci_au_combat"                    : [ { "slot": "save__fortitude", "rank": "M" } ],
        "expertise_avec_les_armures"           : [ { "slot": "defense__light_armor", "rank": "E" }, { "slot": "defense__medium_armor", "rank": "E" }, { "slot": "defense__heavy_armor", "rank": "E" }, { "slot": "defense__unarmored", "rank": "E" } ],
        "expertise_du_guerrier"                : [ { "slot": "class_dc", "rank": "E" } ],
        "reflexes_exerces"                    : [ { "slot": "save__reflex", "rank": "M" } ],
        "legende_des_armes"                    : [ { "slot": "attack__simple_weapons", "rank": "M" }, { "slot": "attack__martial_weapons", "rank": "M" }, { "slot": "attack__unarmed", "rank": "M" } ],
        "maitrise_des_armures"                 : [ { "slot": "defense__light_armor", "rank": "M" }, { "slot": "defense__medium_armor", "rank": "M" }, { "slot": "defense__heavy_armor", "rank": "M" }, { "slot": "defense__unarmored", "rank": "M" } ],
        "legende_polyvalente"                  : [ { "slot": "attack__simple_weapons", "rank": "L" }, { "slot": "attack__martial_weapons", "rank": "L" }, { "slot": "attack__unarmed", "rank": "L" } ]
    },
    "magicien": {
        "expertise_en_reflexes"                : [ { "slot": "save__reflex", "rank": "E" } ],
        "incantateur_expert"                   : [ { "slot": "spell_attack", "rank": "E" }, { "slot": "spell_dc", "rank": "E" } ],
        "vigueur_magique"                      : [ { "slot": "save__fortitude", "rank": "E" } ],
        "expertise_en_perception"              : [ { "slot": "perception", "rank": "E" } ],
        "expertise_avec_les_armes_du_magicien" : [ { "slot": "attack__simple_weapons", "rank": "E" }, { "slot": "attack__unarmed", "rank": "E" } ],
        "robes_defensives"                     : [ { "slot": "defense__unarmored", "rank": "E" } ],
        "incantateur_maitre"                   : [ { "slot": "spell_attack", "rank": "M" }, { "slot": "spell_dc", "rank": "M" } ],
        "volonte_prodigieuse"                  : [ { "slot": "save__will", "rank": "M" } ]
    },
    "moine": {
        "expertise_en_perception"              : [ { "slot": "perception", "rank": "E" } ],
        "frappes_expertes"                    : [ { "slot": "attack__simple_weapons", "rank": "E" }, { "slot": "attack__unarmed", "rank": "E" } ],
        "expertise_du_moine"                   : [ { "slot": "class_dc", "rank": "E" } ],
        "frappes_de_maitre"                    : [ { "slot": "attack__simple_weapons", "rank": "M" }, { "slot": "attack__unarmed", "rank": "M" } ],
        "maitrise_gracieuse"                   : [ { "slot": "defense__unarmored", "rank": "M" } ],
        "legende_gracieuse"                    : [ { "slot": "defense__unarmored", "rank": "L" }, { "slot": "class_dc", "rank": "M" } ]
    },
    "oracle": {
        "incantateur_expert"                   : [ { "slot": "spell_attack", "rank": "E" }, { "slot": "spell_dc", "rank": "E" } ],
        "resolution_mysterieuse"               : [ { "slot": "save__will", "rank": "M" } ],
        "vigueur_magique"                      : [ { "slot": "save__fortitude", "rank": "E" } ],
        "expertise_avec_les_armes"             : [ { "slot": "attack__simple_weapons", "rank": "E" }, { "slot": "attack__unarmed", "rank": "E" } ],
        "sens_oraculaires"                    : [ { "slot": "perception", "rank": "E" } ],
        "expertise_avec_les_armure_legeres"    : [ { "slot": "defense__light_armor", "rank": "E" }, { "slot": "defense__unarmored", "rank": "E" } ],
        "reflexes_premonitoires"               : [ { "slot": "save__reflex", "rank": "E" } ],
        "incantateur_maitre"                   : [ { "slot": "spell_attack", "rank": "M" }, { "slot": "spell_dc", "rank": "M" } ]
    },
    "pretre": {
        "expertise_en_perception"              : [ { "slot": "perception", "rank": "E" } ],
        "foi_resolue"                          : [ { "slot": "save__will", "rank": "M" } ],
        "expertise_en_reflexes"                : [ { "slot": "save__reflex", "rank": "E" } ],
        "defense_divine"                       : [ { "slot": "defense__unarmored", "rank": "E" } ]
    },
    "rodeur": {
        "expertise_en_volonte"                 : [ { "slot": "save__will", "rank": "E" } ],
        "expertise_avec_les_armes_de_rodeur"   : [ { "slot": "attack__simple_weapons", "rank": "E" }, { "slot": "attack__martial_weapons", "rank": "E" }, { "slot": "attack__unarmed", "rank": "E" } ],
        "reflexes_naturels"                   : [ { "slot": "save__reflex", "rank": "M" } ],
        "maitrise_en_perception"               : [ { "slot": "perception", "rank": "M" } ],
        "expertise_du_rodeur"                 : [ { "slot": "class_dc", "rank": "E" } ],
        "endurance_du_gardien"                : [ { "slot": "save__fortitude", "rank": "M" } ],
        "maitre_chasseur"                      : [ { "slot": "class_dc", "rank": "M" } ],
        "maitrise_des_armures_intermediaires"  : [ { "slot": "defense__light_armor", "rank": "M" }, { "slot": "defense__medium_armor", "rank": "M" }, { "slot": "defense__unarmored", "rank": "M" } ]
    },
    "roublard": {
        "astuces_martiales"                    : [ { "slot": "attack__unarmed", "rank": "E" }, { "slot": "attack__simple_weapons", "rank": "E" }, { "slot": "attack__martial_weapons", "rank": "E" } ],
        "maitrise_en_perception"               : [ { "slot": "perception", "rank": "M" } ],
        "reflexes_d_evitement"                : [ { "slot": "save__reflex", "rank": "M" } ],
        "resilience_du_roublard"               : [ { "slot": "save__fortitude", "rank": "E" } ],
        "expertise_du_roublard"               : [ { "slot": "class_dc", "rank": "E" } ],
        "astuces_de_maitre"                    : [ { "slot": "attack__unarmed", "rank": "M" }, { "slot": "attack__simple_weapons", "rank": "M" }, { "slot": "attack__martial_weapons", "rank": "M" } ],
        "expertise_avec_les_armures_legeres"   : [ { "slot": "defense__light_armor", "rank": "E" }, { "slot": "defense__unarmored", "rank": "E" } ],
        "esprit_fuyant"                        : [ { "slot": "save__will", "rank": "M" } ],
        "frappe_de_maitre"                     : [ { "slot": "class_dc", "rank": "M" } ],
        "maitrise_des_armures_legeres"         : [ { "slot": "defense__light_armor", "rank": "M" }, { "slot": "defense__unarmored", "rank": "M" } ]
    },
    "sorcier": {
        "vigueur_magique"                      : [ { "slot": "save__fortitude", "rank": "E" } ],
        "incantateur_expert"                   : [ { "slot": "spell_attack", "rank": "E" }, { "slot": "spell_dc", "rank": "E" } ],
        "expertise_en_reflexes"                : [ { "slot": "save__reflex", "rank": "E" } ],
        "expertise_en_perception"              : [ { "slot": "perception", "rank": "E" } ],
        "expertise_martiale"                   : [ { "slot": "attack__simple_weapons", "rank": "E" }, { "slot": "attack__unarmed", "rank": "E" } ],
        "robes_defensives"                     : [ { "slot": "defense__unarmored", "rank": "E" } ],
        "incantateur_maitre"                   : [ { "slot": "spell_attack", "rank": "M" }, { "slot": "spell_dc", "rank": "M" } ],
        "volonte_du_pupille"                   : [ { "slot": "save__will", "rank": "M" } ]
    }
};

/**
 * @param {string} class_name   Class name, ex: "Magicien"
 * @param {string} ability_key  Normalized unlock label key, ex: "expertise_en_reflexes"
 * @returns {Array}            [ { slot, rank } ] of the upgrades, empty when the ability raises nothing
 */
CLASSES.getMasteriesUpgrade = function ( class_name, ability_key ) {
    let class_data = CLASSES.getDataByName( class_name );
    let upgrades   = class_data && CLASSES.MASTERY_UPGRADES[ class_data.key ] ? CLASSES.MASTERY_UPGRADES[ class_data.key ] : null;
    if ( !upgrades || !upgrades[ ability_key ] ) {
        return [];
    }
    return upgrades[ ability_key ];
};

/**
 * Mastery contributions of a class: every line of its "mastery" data block
 * mapped to its normalized slot. Lines without a recognized slot (ex: the
 * int-based free skill choices) are dropped.
 *
 * @param {string} class_name   Class name, ex: "Magicien"
 * @returns {Array}            [ { slot, rank, label } ]
 */
CLASSES.getMasteriesContributions = function ( class_name ) {
    let class_data = CLASSES.getDataByName( class_name );
    if ( !class_data || !class_data.mastery ) {
        return [];
    }
    let mastery = class_data.mastery;
    let rows    = [];
    if ( mastery.perception ) {
        rows.push( { level: mastery.perception, description: "Perception" } );
    }
    rows = rows.concat( MASTERY.toArray( mastery.saves ) )
        .concat( MASTERY.toArray( mastery.skills ) )
        .concat( MASTERY.toArray( mastery.attacks ) )
        .concat( MASTERY.toArray( mastery.defenses ) )
        .concat( MASTERY.toArray( mastery.spells ) );
    if ( mastery.class_dc ) {
        rows.push( { level: mastery.class_dc, description: "DD de classe" } );
    }
    let to_return = [];
    for ( let i = 0, _size_i = rows.length; i < _size_i; i++ ) {
        let slot_data = MASTERY.getSlotFromDescription( rows[ i ].description );
        if ( slot_data ) {
            to_return.push( { slot: slot_data.slot, rank: rows[ i ].level, label: slot_data.label } );
        }
    }
    return to_return;
};

// Hand-written overrides of scraped ability keys: data identifiers are English,
// this map survives a re-scrap of the class data
CLASSES.ABILITY_KEY_OVERRIDES = {
    "maitrises_initiales": "initial_masteries"
};

/**
 * @param {string} label  Unlock label from capacity_by_level, ex: "école arcanique"
 * @returns {string}      Normalized ability key, ex: "ecole_arcanique"
 */
CLASSES.getAbilityKey = function ( label ) {
    let slug = label.toLowerCase()
        .normalize( "NFD" )
        .replace( /[\u0300-\u036f]/g, "" )
        .replace( /[^a-z0-9]+/g, "_" );
    return CLASSES.ABILITY_KEY_OVERRIDES[ slug ] || slug;
};

// Choices shared by every class: the skill increase line picks any skill of
// the game, the entries derive from SKILLS.LIST (single source)
CLASSES.COMMON_CHOICES = {
    "amelioration_de_competence": {
        "entries": ( function () {
            let entries = [];
            let _keys   = Object.keys( SKILLS.LIST ).sort( function ( key_a, key_b ) {
                return SKILLS.LIST[ key_a ].label.localeCompare( SKILLS.LIST[ key_b ].label );
            } );
            for ( let i = 0, _size_i = _keys.length; i < _size_i; i++ ) {
                entries.push( { "name": SKILLS.LIST[ _keys[ i ] ].label } );
            }
            return entries;
        } )()
    }
};

/**
 * Masteries granted by the value chosen on a choice line, per class key and
 * ability key: chosen value -> [ { slot, rank } ]. Only entries backed by the
 * class data descriptions belong here.
 */
CLASSES.CHOICE_MASTERIES = {
    "bretteur": {
        "style_de_bretteur": {
            "Danseur de combat": [ { "slot": "skill__performance",  "rank": "Q" } ],
            "Escrimeur"       : [ { "slot": "skill__deception",     "rank": "Q" } ],
            "Esprit"          : [ { "slot": "skill__diplomacy",     "rank": "Q" } ],
            "Fanfaron"        : [ { "slot": "skill__intimidation",  "rank": "Q" } ],
            "Fripouille"      : [ { "slot": "skill__thievery",      "rank": "Q" } ],
            "Gymnaste"        : [ { "slot": "skill__athletics",     "rank": "Q" } ]
        }
    }
};

/**
 * @param {string} class_name    Class name, ex: "Bretteur"
 * @param {string} ability_key   Normalized ability key, ex: "style_de_bretteur"
 * @param {string} choice_value  Value chosen on the line, ex: "Gymnaste"
 * @returns {Array}              [ { slot, rank } ] of the granted upgrades, empty when the choice grants nothing
 */
CLASSES.getChoiceMasteriesUpgrade = function ( class_name, ability_key, choice_value ) {
    let class_data = CLASSES.getDataByName( class_name );
    let class_map  = class_data && CLASSES.CHOICE_MASTERIES[ class_data.key ];
    if ( !class_map || !class_map[ ability_key ] ) {
        return [];
    }
    return class_map[ ability_key ][ choice_value ] || [];
};

/**
 * @param {string} class_name   Class name, ex: "Magicien"
 * @param {string} ability_key  Normalized ability key, ex: "ecole_arcanique"
 * @returns {Object|null}       The choice object { entries }, or null when the ability opens no choice
 */
CLASSES.getChoices = function ( class_name, ability_key ) {
    if ( !CLASSES.CHOICES[ class_name ] || !CLASSES.CHOICES[ class_name ][ ability_key ] ) {
        return CLASSES.COMMON_CHOICES[ ability_key ] || null;
    }
    return CLASSES.CHOICES[ class_name ][ ability_key ];
};

/**
 * Resolves the class abilities key matching an unlock label key.
 * Exact match first, then plural-insensitive match (each word stripped of its
 * trailing french plural "s"/"x": "don de compétence" matches "dons de
 * compétence"), then the shortest key extending the label ("expertise avec les
 * armes" -> "expertise avec les armes du magicien").
 *
 * @param {Object} class_data   Class data object carrying "abilities"
 * @param {string} ability_key  Normalized unlock label key, ex: "ecole_arcanique"
 * @returns {string|null}       The matched abilities key, or null when unknown
 */
CLASSES.resolveAbilityKey = function ( class_data, ability_key ) {
    if ( !class_data || !class_data.abilities ) {
        return null;
    }
    if ( class_data.abilities[ ability_key ] ) {
        return ability_key;
    }
    let aliases    = CLASSES.ABILITY_ALIASES[ class_data.key ] || {};
    let alias_key = aliases[ ability_key ];
    if ( alias_key && class_data.abilities[ alias_key ] ) {
        return alias_key;
    }
    let singular_label = CLASSES.getSingularAbilityKey( ability_key );
    let _keys          = Object.keys( class_data.abilities );
    let best_key       = null;
    for ( let i = 0, _size_i = _keys.length; i < _size_i; i++ ) {
        let singular_key = CLASSES.getSingularAbilityKey( _keys[ i ] );
        if ( singular_key !== singular_label && singular_key.indexOf( singular_label + "_" ) !== 0 ) {
            continue;
        }
        if ( best_key === null || _keys[ i ].length < best_key.length ) {
            best_key = _keys[ i ];
        }
    }
    return best_key;
};

/**
 * Strips the french plural of every word of an ability key.
 * "-aux" -> "-al" ("generaux" -> "general"), trailing "s"/"x" otherwise
 * ("dons" -> "don", "primes_d_attributs" -> "prime_d_attribut").
 *
 * @param {string} ability_key  Normalized key, ex: "dons_generaux"
 * @returns {string}           Singularized key, ex: "don_general"
 */
CLASSES.getSingularAbilityKey = function ( ability_key ) {
    let _words = ability_key.split( "_" );
    for ( let i = 0, _size_i = _words.length; i < _size_i; i++ ) {
        if ( _words[ i ].slice( -3 ) === "aux" ) {
            _words[ i ] = _words[ i ].slice( 0, -3 ) + "al";
        }
        else {
            _words[ i ] = _words[ i ].replace( /[sx]$/, "" );
        }
    }
    return _words.join( "_" );
};

/**
 * Builds the information popup data of a class ability, from the class data.
 *
 * @param {string} class_name   Class name, ex: "Magicien"
 * @param {string} ability_key  Normalized unlock label key, ex: "ecole_arcanique"
 * @returns {Object|null}       Popup-shaped object { id, category, text, description }, or null when unknown
 */
CLASSES.getAbilityInformation = function ( class_name, ability_key ) {
    let class_data     = CLASSES.getDataByName( class_name );
    let abilities_key = CLASSES.resolveAbilityKey( class_data, ability_key );
    if ( !abilities_key ) {
        return null;
    }
    let ability = class_data.abilities[ abilities_key ];
    return {
        "id"         : class_name + "__" + abilities_key,
        "category"   : "class-feature",
        "text"       : ability.name || ability_key,
        "description": ability.description ? ability.description.join( "<br>" ) : ""
    };
};
