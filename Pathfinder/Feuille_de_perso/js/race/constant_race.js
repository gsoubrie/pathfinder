"use strict";
var RACES = {
    key  : "ascendance",
    label: "Ascendance",
    ENUM : [
        {
            name                : "elfe",
            start_life          : 6,
            body_size           : SIZE.M,
            speed               : 9,
            characteristic_bonus: [CARAC.DEX, CARAC.INT, CARAC.FREE],
            characteristic_malus: [CARAC.CON],
            language            : [LANGUAGE.COMMON, LANGUAGE.COMMON],
            traits               : [TRAIT.ELFE, TRAIT.HUMANOIDE],
            night_vision        : VM._1,
            heritage            : {
                arctique   : {},
                bois       : {},
                caverne    : {},
                murmure    : {},
                visionnaire: {}
            },
            info                : "ddddd",
            dons                : {}
        },
        {
            name                : "gobelin",
            start_life          : 6,
            body_size           : SIZE.P,
            speed               : 7.5,
            characteristic_bonus: [CARAC.DEX, CARAC.CHA, CARAC.FREE],
            characteristic_malus: [CARAC.SAG],
            language            : [LANGUAGE.COMMON, LANGUAGE.GOBELIN],
            traits               : [TRAIT.GOBELIN, TRAIT.HUMANOIDE],
            night_vision        : VM._1,
            heritage            : {
                boyaud_fer  : {},
                dent_rasoir : {},
                neige       : {},
                incassable  : {},
                peau_charbon: {}
            },
            dons                : {}
        },
        {
            name                : "humain",
            start_life          : 8,
            body_size           : SIZE.M,
            speed               : 7.5,
            characteristic_bonus: [CARAC.FREE, CARAC.FREE],
            characteristic_malus: [],
            language            : [LANGUAGE.COMMON],
            traits               : [TRAIT.HUMANOIDE],
            night_vision        : VM._1,
            heritage            : {
                boyaud_fer  : {},
                dent_rasoir : {},
                neige       : {},
                incassable  : {},
                peau_charbon: {}
            },
            dons                : {}
        }
    ]
};