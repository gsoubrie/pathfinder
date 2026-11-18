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
                { "name": "Bombardier",    "uuid": "7JbiaZ8bxODM5mzS" },
                { "name": "Chirurgien",    "uuid": "eNZnx4LISDNftbx2" },
                { "name": "Mutagéniste",   "uuid": "tvdb1jkjl2bRZjSp" },
                { "name": "Toxicologiste", "uuid": "P9quO9XZi3OWFe1k" }
            ]
        }
    },
    "Barbare": {
        "instinct": {
            "entries": [
                { "name": "Instinct animal",           "uuid": "0FtzFbUrN56KA67z" },
                { "name": "Instinct de décomposition", "uuid": "znxs0soGlusvRP39" },
                { "name": "Instinct de géant",         "uuid": "JuKD6k7nDwfO0Ckv" },
                { "name": "Instinct de la furie",      "uuid": "k7M9jedvt31AJ5ZR" },
                { "name": "Instinct du dragon",        "uuid": "VDot7CDcXElxmkkz" },
                { "name": "Instinct élémentaire",      "uuid": "0jSS6pgNXsC8k4o7" },
                { "name": "Instinct ligneux",          "uuid": "qVAeSFTI1dq64bB8" },
                { "name": "Instinct spirituel",        "uuid": "TQqv9Q5mB4PW6LH9" },
                { "name": "Instinct superstitieux",    "uuid": "SCYSjUbMmw8JD9P9" }
            ]
        }
    },
    "Barde": {
        "muse": {
            "entries": [
                { "name": "Combattante",   "uuid": "N03BtRvjX9TeHRa4" },
                { "name": "Énigmatique",   "uuid": "4ripp6EfdVpS0d60" },
                { "name": "Maestro",       "uuid": "YMBsi4bndRAk5CX4" },
                { "name": "Touche-à-tout", "uuid": "y0jGimYdMGDJWrEq" },
                { "name": "Zoophonie",     "uuid": "jHOlcSnGyjCnwoPP" }
            ]
        }
    },
    "Bretteur": {
        "style_de_bretteur": {
            "entries": [
                { "name": "Danseur de combat", "uuid": "5HoEwzLDJGTCZtFa" },
                { "name": "Escrimeur",         "uuid": "Jgid6Ja6Y879COlN" },
                { "name": "Esprit",            "uuid": "4lGhbEjlEoGP4scl" },
                { "name": "Fanfaron",          "uuid": "KBhwFjdptrKyN5EM" },
                { "name": "Fripouille",        "uuid": "XKhg55V7WmpLrvqL" },
                { "name": "Gymnaste",          "uuid": "B7RMnrHwQHlezlJT" }
            ]
        }
    },
    "Champion": {
        "cause": {
            "entries": [
                { "name": "Grandeur",    "uuid": "h1NGH4TVeBljftni" },
                { "name": "Iniquité",    "uuid": "EQ6DVIQHAUXUhY6Y" },
                { "name": "Justice",     "uuid": "peEXunfbSD8WcMFk" },
                { "name": "Libération",  "uuid": "FCoMFUsth4xB4veC" },
                { "name": "Obéissance",  "uuid": "HiIvez0TqESbleB5" },
                { "name": "Profanation", "uuid": "8YIA0jh64Ecz0TG6" },
                { "name": "Rédemption",  "uuid": "UyuwFp0jQqYL2AdF" }
            ]
        }
    },
    "Druide": {
        "ordre_druidique": {
            "entries": [
                { "name": "Ordre animal",         "uuid": "POBvoXifa9HaejAg" },
                { "name": "Ordre de la feuille",  "uuid": "u4nlOzPj2WHkIj9l" },
                { "name": "Ordre des spores",     "uuid": "X0k3njLOLX0322Po" },
                { "name": "Ordre du cultivateur", "uuid": "IiYUhFGqq2Nw0b5Y" },
                { "name": "Ordre de la flamme",   "uuid": "NdeFvIXdHwKYLiUj" },
                { "name": "Ordre de la pierre",   "uuid": "fKTewWlYgFuhl4KA" },
                { "name": "Ordre de la tempête",  "uuid": "acqqlYmti8D9QJi0" },
                { "name": "Ordre de la vague",    "uuid": "FuUXyv2yBs7zRgqT" },
                { "name": "Ordre indompté",       "uuid": "v0EjtiwdeMj8ykI0" }
            ]
        }
    },
    "Enquêteur": {
        "methodologie": {
            "entries": [
                { "name": "Empirisme",           "uuid": "g3mNzNphtVxyR9Xr" },
                { "name": "Interrogatoire",      "uuid": "UIHUNNYZyQ3p4Vmo" },
                { "name": "Médecine forensique", "uuid": "O3IX7rTxXWWvDVM3" },
                { "name": "Sciences alchimiques", "uuid": "ln2Y1a4SxlU9sizX" }
            ]
        }
    },
    "Ensorceleur": {
        "lignage": {
            "entries": [
                { "name": "Aberrant",    "uuid": "3qqvnC2U8W26yae7" },
                { "name": "Aesir",       "uuid": "TFihgf3jDhmKd0fa" },
                { "name": "Angélique",   "uuid": "vhW3glAaEfq2DKrw" },
                { "name": "Béni du ver", "uuid": "dKTb959aCQIzSIXj" },
                { "name": "Démoniaque",  "uuid": "w5koctOVrEcpxTIq" },
                { "name": "Diabolique",  "uuid": "o39zQMIdERWtmBSB" },
                { "name": "Draconique",  "uuid": "ZHabYxSgYK0XbjhM" },
                { "name": "Élémentaire", "uuid": "RXRnJcG4XSabZ35a" },
                { "name": "Féerique",    "uuid": "eW3cfCH7Wpx2vik2" },
                { "name": "Génie",       "uuid": "tYOMBiH3HbViNWwn" },
                { "name": "Guenaude",    "uuid": "O0uXZRWMNliDbkxU" },
                { "name": "Impérial",    "uuid": "ZEtJJ5UOlV5oTWWp" },
                { "name": "Mort-vivant", "uuid": "7WBZ2kkhZ7JorWu2" },
                { "name": "Nymphe",      "uuid": "5Wxjghw7lHuCxjZz" },
                { "name": "Ombre",       "uuid": "uoQOm41BVdSo6pAS" },
                { "name": "Phénix",      "uuid": "TWR1wbPJuCLnGdFZ" },
                { "name": "Psychopompe", "uuid": "PpzH9tJULk5ksX9w" },
                { "name": "Tourment",    "uuid": "b6hyZTs1rVGHDexz" }
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
                { "name": "Bâton nexus",                              "uuid": "Klb35AwlkNrq1gpB" },
                { "name": "Expérimentation mutamagique",              "uuid": "89zWKD2CN7nRu2xp" },
                { "name": "Harmonisation avec le familier améliorée", "uuid": "SNZ46g3u7U6x0XJj" },
                { "name": "Mélange de sorts",                         "uuid": "OAcxS625AXSGrQIC" },
                { "name": "Substitution de sort",                     "uuid": "QzWXMCSGNfvvpYgF" }
            ]
        }
    },
    "Oracle": {
        "mystere": {
            "entries": [
                { "name": "Ancêtres",    "uuid": "qvRlih3u7vK3FYUR" },
                { "name": "Cendres",     "uuid": "g3HTg0z3doXZZzAV" },
                { "name": "Combat",      "uuid": "gjOGOR30Czpnx3tM" },
                { "name": "Cosmos",      "uuid": "RI2EMRBBPNSoTJXu" },
                { "name": "Décrépitude", "uuid": "1PHDn7WJFtR3NgTr" },
                { "name": "Flammes",     "uuid": "GTSvbFb36InvuH0w" },
                { "name": "Ossements",   "uuid": "IaxmCkdsPlA52spu" },
                { "name": "Savoir",      "uuid": "tZBb3Kh4nJcNoUFI" },
                { "name": "Tempête",     "uuid": "W9cF7wZztLDb1WGY" },
                { "name": "Temps",       "uuid": "EslxR2sbDK9XJaAl" },
                { "name": "Vie",         "uuid": "o1gGG36wpn9mxeop" }
            ]
        }
    },
    "Prêtre": {
        "doctrine": {
            "entries": [
                { "name": "Prêtre cloîtré",      "uuid": "ZZzLMOUAtBVgV1DF" },
                { "name": "Prêtre combattant",   "uuid": "0Aocw3igLwna9cjp" }
            ]
        }
    },
    "Rôdeur": {
        "specialite_du_chasseur": {
            "entries": [
                { "name": "Déluge",    "uuid": "6v4Rj7wWfOH1882r" },
                { "name": "Précision", "uuid": "u6cBjqz2fiRBadBt" },
                { "name": "Ruse",      "uuid": "NBHyoTrI8q62uDsU" }
            ]
        }
    },
    "Roublard": {
        "trafic_de_roublard": {
            "entries": [
                { "name": "Mystificateur", "uuid": "D8qtAo2w4jsqjBrM" },
                { "name": "Scélérat",      "uuid": "ZvfxtUMtfIOLYHyg" },
                { "name": "Stratège",      "uuid": "RyOkmu0W9svavuAB" },
                { "name": "Voleur",        "uuid": "wAh2riuFRzz0edPl" },
                { "name": "Voyou",         "uuid": "3KPZ7svIO6kmmEKH" }
            ]
        }
    },
    "Sorcier": {
        "patron": {
            "entries": [
                { "name": "Chœur politique",                 "uuid": "v2JQB6j3VIKWqPpQ" },
                { "name": "Dévoreur de pourriture",          "uuid": "T9wA833bzZVlB3Lo" },
                { "name": "Gardien de la flamme de la foi",  "uuid": "mFqMSQoNl0NMDklv" },
                { "name": "Intendant de la nature",          "uuid": "e0VhUyjz1clW3sC4" },
                { "name": "L'inscrit",                       "uuid": "FdLx4VODZEYLGOK9" },
                { "name": "Le courtier invisible",           "uuid": "ydI39ViUy22nBRn6" },
                { "name": "Le ressentiment",                 "uuid": "9OwWgOP8ZWxTAqbg" },
                { "name": "Murmure des ailes",               "uuid": "4zE3seVFtLPNw9EQ" },
                { "name": "Moustique",                       "uuid": "zy0toWeGIeQstbT4" },
                { "name": "Ombre sans étoile",               "uuid": "r2ZPRAw9c3VGZi8A" },
                { "name": "Ondulation dans les profondeurs", "uuid": "lgv4VIoj5TLhm9u0" },
                { "name": "Paradoxe des opposés",            "uuid": "RdOzBNPKLTMUWrJs" },
                { "name": "Silence dans la neige",           "uuid": "9c57R18pfgfqlBCD" },
                { "name": "Tisseur de fils",                 "uuid": "ghIsqhEsJTvjJiNl" }
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
// the game, the entries derive from SKILLS.LIST (single source); the deity
// line (Prêtre, Champion...) picks any deity of the compendium (single
// source), each entry carrying its compendium uuid for the "?" popup
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
    },
    "divinite": {
        "entries": OBJECT.getKnownDeities()
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
 * Number of additional trained skills of a class, from its mastery block:
 * the "compétences supplémentaires" line counts "<N> plus votre
 * modificateur d'Intelligence", 0 when the class grants none.
 *
 * @param {string} class_name  Class name, ex: "Magicien"
 * @returns {number}           The fixed part of the additional skills count
 */
CLASSES.getAdditionalSkillsNumber = function ( class_name ) {
    let class_data = CLASSES.getDataByName( class_name );
    if ( !class_data || !class_data.mastery || !class_data.mastery.skills ) {
        return 0;
    }
    let skills_lines = MASTERY.toArray( class_data.mastery.skills );
    for ( let i = 0, _size_i = skills_lines.length; i < _size_i; i++ ) {
        let number_match = skills_lines[ i ].description.match( /(\d+)\s*plus\s*votre\s*modificateur/i );
        if ( number_match ) {
            return parseInt( number_match[ 1 ], 10 );
        }
    }
    return 0;
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
 * Compendium data of a choice value, for the « ? » of a choice line: the
 * entries carrying a uuid own a matching OBJECT.COMPENDIUM entry (the
 * option opens its information popup), the others open nothing.
 *
 * @param {string} class_name    Class name, ex: "Enquêteur"
 * @param {string} ability_key   Normalized ability key, ex: "methodologie"
 * @param {string} choice_value  Value chosen on the line, ex: "Empirisme"
 * @returns {Object|null}        The compendium data of the value, or null when the choice carries none
 */
CLASSES.getChoiceInformation = function ( class_name, ability_key, choice_value ) {
    let choice = CLASSES.getChoices( class_name, ability_key );
    if ( !choice ) {
        return null;
    }
    for ( let i = 0, _size_i = choice.entries.length; i < _size_i; i++ ) {
        if ( choice.entries[ i ].name === choice_value && choice.entries[ i ].uuid ) {
            return OBJECT.COMPENDIUM[ choice.entries[ i ].uuid ] || null;
        }
    }
    return null;
};

/**
 * Resolves the class abilities key matching an unlock label key.
 * Exact match first, then plural-insensitive match (each word stripped of its
 * trailing french plural "s"/"x": "don de compétence" matches "dons de
 * compétence"), then the shortest key extending the label ("expertise avec les
 * armes" -> "expertise avec les armes du magicien"), and last the longest key
 * the label EXTENDS — the class tables append the dice to the label
 * ("frappe stratégique 1d6" -> "frappe_strategique").
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
    if ( best_key ) {
        return best_key;
    }
    // The class tables append the dice of the level to the label : the
    // LONGEST key the label extends wins (a shorter key stays under a
    // more specific one)
    let extending_key = null;
    for ( let i = 0, _size_i = _keys.length; i < _size_i; i++ ) {
        if ( _keys[ i ].length >= ability_key.length ) {
            continue;
        }
        if ( ability_key.indexOf( _keys[ i ] + "_" ) === 0 && ( extending_key === null || _keys[ i ].length > extending_key.length ) ) {
            extending_key = _keys[ i ];
        }
    }
    return extending_key;
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

// Hand-written spell slot grid, by class key: level -> [ tours de magie,
// rank 1..10 ]. The scraped class data carries no slot table (the grid lives
// in the class progression tables of the rulebook), the map survives a
// re-scrap. The rank 10 exception (sort d'archimage at level 19, one slot
// that never grows) is encoded in the raw values.
CLASSES.SPELL_SLOTS = {
    "magicien": {
        1 : [ 5, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        2 : [ 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        3 : [ 5, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0 ],
        4 : [ 5, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0 ],
        5 : [ 5, 3, 3, 2, 0, 0, 0, 0, 0, 0, 0 ],
        6 : [ 5, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0 ],
        7 : [ 5, 3, 3, 3, 2, 0, 0, 0, 0, 0, 0 ],
        8 : [ 5, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0 ],
        9 : [ 5, 3, 3, 3, 3, 2, 0, 0, 0, 0, 0 ],
        10: [ 5, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0 ],
        11: [ 5, 3, 3, 3, 3, 3, 2, 0, 0, 0, 0 ],
        12: [ 5, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0 ],
        13: [ 5, 3, 3, 3, 3, 3, 3, 2, 0, 0, 0 ],
        14: [ 5, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0 ],
        15: [ 5, 3, 3, 3, 3, 3, 3, 3, 2, 0, 0 ],
        16: [ 5, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0 ],
        17: [ 5, 3, 3, 3, 3, 3, 3, 3, 3, 2, 0 ],
        18: [ 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0 ],
        19: [ 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1 ],
        20: [ 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1 ]
    }
};

/**
 * @param {string} class_name   Class name, ex: "Magicien"
 * @param {number} class_level  Level of that class on the character
 * @returns {Array|null}        [ tours de magie, rank 1..10 ], null for a
 *                               class without spell slots
 */
CLASSES.getSpellSlotsForLevel = function ( class_name, class_level ) {
    let class_data = CLASSES.getDataByName( class_name );
    let class_grid = class_data ? CLASSES.SPELL_SLOTS[ class_data.key ] : null;
    if ( !class_grid ) {
        return null;
    }
    return class_grid[ class_level ] || null;
};

/**
 * @param {string} class_name  Class name, ex: "Magicien"
 * @returns {Object|null}     The whole grid level -> row, null for a class
 *                             without spell slots (the class popup section)
 */
CLASSES.getSpellSlotsData = function ( class_name ) {
    let class_data = CLASSES.getDataByName( class_name );
    return class_data ? CLASSES.SPELL_SLOTS[ class_data.key ] || null : null;
};

// Spell slots granted every day by the value chosen on a choice line, per
// class key and ability key: the arcane school curriculum grants one extra
// slot of every rank the class can access (none at rank 10 : the sort
// d'archimage slot never takes a bonus) and one extra cantrip — except for
// the schools without a curriculum. Backed by the scraped school text.
CLASSES.CHOICE_CURRICULUM = {
    "magicien": {
        "ecole_arcanique": {
            "slots_per_rank": 1,
            "extra_cantrips": 1,
            "except_rank"    : 10,
            "excluded_values": [ "École de la théorie magique unifiée" ]
        }
    }
};

/**
 * @param {string} class_name    Class name, ex: "Magicien"
 * @param {string} ability_key   Normalized key, ex: "ecole_arcanique"
 * @param {string} choice_value  The value chosen on the line
 * @returns {Object|null}        The curriculum config, null when the choice
 *                                grants no spell slots
 */
CLASSES.getChoiceCurriculum = function ( class_name, ability_key, choice_value ) {
    let class_data = CLASSES.getDataByName( class_name );
    let class_map  = class_data && CLASSES.CHOICE_CURRICULUM[ class_data.key ];
    if ( !class_map || !class_map[ ability_key ] ) {
        return null;
    }
    let config = class_map[ ability_key ];
    if ( config.excluded_values.indexOf( choice_value ) !== -1 ) {
        return null;
    }
    return config;
};
