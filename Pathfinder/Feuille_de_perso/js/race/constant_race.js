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
            traits              : [TRAIT.ELFE, TRAIT.HUMANOIDE],
            night_vision        : VM._1,
            heritage            : {
                arctique   : {},
                bois       : {},
                caverne    : {},
                murmure    : {},
                visionnaire: {}
            },
            info                : "ddddd",
            dons                : {},
            physical_desc       : "Bien que généralement plus grands que les humains, les elfes possèdent une grâce fragile accentuée par leurs traits fins et leurs oreilles pointues. Leurs yeux sont en amande, leurs pupilles larges et vivement colorées occupent toute la partie visible de leur oeil. Ces pupilles, qui leur donnent un aspect étrange, leur confèrent une vision précise, même dans de mauvaises conditions lumineuses.<br>Les elfes s'adaptent graduellement à leur environnement et à leurs compagnons et adoptent souvent des traits physiques qui reflètent leur environnement. Un elfe qui a habité dans des forêts primitives depuis des siècles pourrait présenter des cheveux verdoyants et des doigts noueux, tandis que ceux qui ont vécu dans un désert pourraient avoir des pupilles et une peau dorées. Les elfes atteignent l'âge adulte à environ 20 ans, bien qu'ils ne soient pas considérés émotionnellement mûrs par leurs congénères avant de se rapprocher de leur premier siècle. Un elfe ordinaire peut vivre environ 600 ans."
        },
        {
            name                : "gobelin",
            start_life          : 6,
            body_size           : SIZE.P,
            speed               : 7.5,
            characteristic_bonus: [CARAC.DEX, CARAC.CHA, CARAC.FREE],
            characteristic_malus: [CARAC.SAG],
            language            : [LANGUAGE.COMMON, LANGUAGE.GOBELIN],
            traits              : [TRAIT.GOBELIN, TRAIT.HUMANOIDE],
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
            traits              : [TRAIT.HUMANOIDE],
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