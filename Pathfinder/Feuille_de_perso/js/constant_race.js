"use strict";
var RACES = {
    key  : "ascendance",
    label: "Ascendance",
    ENUM : [
        {
            name          : "elfe",
            start_life    : 6,
            size          : SIZE.M,
            speed         : 9,
            prime         : [CARAC.DEX, CARAC.INT, CARAC.FREE],
            penality      : [CARAC.CON],
            language      : [LANGUAGE.COMMON, LANGUAGE.COMMON],
            trait         : [TRAIT.ELFE, TRAIT.HUMANOIDE],
            vision_nocture: VM._1,
            heritage      : {
                arctique   : {},
                bois       : {},
                caverne    : {},
                murmure    : {},
                visionnaire: {}
            },
            info          : "ddddd",
            dons          : {}
        },
        {
            name          : "gobelin",
            start_life    : 6,
            size          : SIZE.P,
            speed         : 7.5,
            prime         : [CARAC.DEX, CARAC.CHA, CARAC.FREE],
            penality      : [CARAC.SAG],
            language      : [LANGUAGE.COMMON, LANGUAGE.GOBELIN],
            trait         : [TRAIT.GOBELIN, TRAIT.HUMANOIDE],
            vision_nocture: VM._1,
            heritage      : {
                boyaud_fer  : {},
                dent_rasoir : {},
                neige       : {},
                incassable  : {},
                peau_charbon: {}
            },
            dons          : {}
        }
    ]
};