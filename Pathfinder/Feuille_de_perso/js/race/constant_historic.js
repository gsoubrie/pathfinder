"use strict";
var HISTORICS = {
    key          : "historics",
    label        : "Historiques",
    key_element  : "historic",
    label_element: "Historique",
    ENUM         : [
        {
            "name"           : "Vif",
            "requirement"    : [
                "Région - Terres impossibles"
            ],
            "description"    : [
                "Rester en vie parmi les morts-vivants sournois et affamés du Geb a requis une profonde connaissance de leurs motivations, de leurs capacités et de leurs faiblesses. Bien souvent, cela a aussi nécessité la capacité d'inventer des alibis et des demi-vérités pour influencer leurs cœurs éteints."
            ],
            "gift_skill"     : [
                "Menteur charismatique"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "CON",
                    "CHA",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Duperie",
                        "characteristic": "CHA"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "des morts-vivants"
                    }
                ]
            }
        },
        {
            "name"           : "À la recherche de la Perfection",
            "requirement"    : [
                "Région - Terres impossibles"
            ],
            "description"    : [
                "Vous aspirez à perfectionner votre corps et votre esprit par la tradition des Écoles de la Perfection de Jalmeray, affûtant vos compétences acrobatiques et vos facultés mentales en préparation d'une vie repoussant les frontières de ce que beaucoup considèrent possible."
            ],
            "gift_skill"     : [
                "Chûte féline"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "INT",
                    "CHA",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Société",
                        "characteristic": "INT"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "en lien avec une cité dans laquelle vous vous êtes souvent rendu"
                    }
                ]
            }
        },
        {
            "name"           : "Acolyte",
            "requirement"    : [],
            "description"    : [
                "Vous avez passé votre jeunesse dans un monastère religieux ou un cloître. Vous avez peut-être voyagé afin de répandre la bonne parole de votre religion, ou parce que vous avez rejeté les enseignements de celle-ci. Ces leçons restent cependant gravées en vous."
            ],
            "gift_skill"     : [
                "Étudiant du droit canon"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "INT",
                    "SAG",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Religion",
                        "characteristic": "SAG"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "du copiste"
                    }
                ]
            }
        },
        {
            "name"           : "Acrobate",
            "requirement"    : [],
            "description"    : [
                "Vous avez exercé le métier d'acrobate dans un cirque ou dans la rue. Vous vous êtes peut-être tourné vers l'aventure parce que vous ne gagniez plus assez d'argent, ou simplement parce que vous avez décidé de faire autre chose de vos talents."
            ],
            "gift_skill"     : [
                "Équilibre stable"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "FOR",
                    "DEX",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Acrobaties",
                        "characteristic": "DEX",
                        "armor_penalty" : true
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "du cirque"
                    }
                ]
            }
        },
        {
            "name"           : "Activiste anti-techno",
            "requirement"    : [],
            "description"    : [
                "Vous avez vu le genre de choses que la technologie apporte - la pollution de l'environnement, des travailleurs mis au chômage ou horriblement mutilés et la lente érosion de la société - et vous avez juré d'informer le monde entier de ces maux. Pour ce faire, vous prononcez de longs discours passionnés au coin des rues et sur les places des villages, et vous vous entretenez personnellement avec les chefs des différentes guildes. S'aventurer dans le grand monde pourrait aider à diffuser votre message encore plus loin."
            ],
            "gift_skill"     : [
                "Contraindre un groupe"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "CON",
                    "CHA",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Intimidation",
                        "characteristic": "CHA"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "des guildes"
                    }
                ]
            }
        },
        {
            "name"           : "Acupuncteur",
            "requirement"    : [],
            "description"    : [
                "Accès Originaire du Tian Xia",
                "Vous avez étudié le Qi et ses capacités à guérir le corps en évaluant et en régulant le flux de Qi. Vous connaissez les techniques occultes qui ont vu le jour à Chu Ye avant que ses maîtres ne soient chassés par les oni. Vous avez peut-être rencontré un maître désireux d'enseigner à un élève enthousiaste ou ressenti le soulagement par sa pratique sur votre propre corps, ce qui a encore plus suscité votre intérêt."
            ],
            "gift_skill"     : [
                " Médecine militaire"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "DEX",
                    "SAG",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Médecine",
                        "characteristic": "INT"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de l'acupuncture"
                    }
                ]
            }
        },
        {
            "name"           : "Adhérent du Rivethun",
            "requirement"    : [
                "Région - Royaumes étincelants"
            ],
            "description"    : [
                "Vous avez passé du temps à apprendre les pratiques et les traditions des antiques chamans nains du Rivethun et pouvez reconnaître toute sortes de magies. Vous pouvez avoir choisi votre propre voie depuis ou vous pouvez continuer à adhérer à leur philosophie."
            ],
            "gift_skill"     : [
                "Reconnaître des sorts"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "CON",
                    "SAG",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Occultisme",
                        "characteristic": "INT"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "des esprits"
                    }
                ]
            }
        },
        {
            "name"           : "Adjoint",
            "requirement"    : [],
            "description"    : [
                "Bien que votre vie ait pu prendre des tournants dans les années qui ont suivi, vous avez été un jour adjoint en tant que protecteur légal d'une communauté. Bien que ce rôle ait été temporaire et que vous ayez depuis rendu votre insigne, cette responsabilité vous a façonné. Chaque fois qu'une communauté est en difficulté et que le shérif est introuvable, les habitants font appel à vous pour capturer un criminel, sauver la progéniture du maire des bandits ou encore affronter des hors-la-loi."
            ],
            "gift_skill"     : [
                "Pisteur expérimenté"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "DEX",
                    "SAG",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Survie",
                        "characteristic": "SAG"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de la chasse"
                    }
                ]
            }
        },
        {
            "name"           : "Agent de la Campanule",
            "requirement"    : [
                "Région - Ancien Chéliax"
            ],
            "description"    : [
                "Vous avez rejoint une société secrète dédiée à la libération des esclaves halfelins, le plus souvent du règne cruel du Chéliax. Vous savez faire passer en contrebande des gens vers l'intérieur ou l'extérieur des frontières."
            ],
            "gift_skill"     : [
                "Contrebandier expérimenté"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "DEX",
                    "CHA",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Discrétion",
                        "characteristic": "DEX",
                        "armor_penalty" : true
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de la pègre"
                    }
                ]
            }
        },
        {
            "name"           : "Amateur de sensations fortes",
            "requirement"    : [],
            "description"    : [
                "Vous avez survécu à une situation de vie ou de mort et l'avez trouvée étonnamment exaltante. Vous recherchez désormais ce sentiment d'invincibilité que l'on n'obtient qu'en flirtant avec la mort. Votre désir d'exaltation vous pousse à escalader des immeubles, à sauter des toits, à franchir des gouffres et à accomplir d'autres cascades qui défient la mort."
            ],
            "gift_skill"     : [
                "Combattant-grimpeur"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "FOR",
                    "CON",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Athlétisme",
                        "characteristic": "FOR",
                        "armor_penalty" : true
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de l'ingénierie"
                    }
                ]
            }
        },
        {
            "name"           : "Âme réincarnée",
            "requirement"    : [],
            "description"    : [
                "Des forces mystérieuses vous ont donné une seconde chance de vivre sur les Terres des secondes âmes. Vous vous souvenez de votre vie précédant votre mort et vous vivez maintenant avec une vie supplémentaire de connaissances.",
                " Au niveau 3, 7 et 15, vous recevez une amélioration de compétence que vous ne pouvez appliquer qu'à ces compétences de connaissance",
                " Dans certaines situations analogues à votre vie antérieure, des fragments de souvenirs refont surface, vous aidant potentiellement ou vous distrayant",
                " Le MJ peut vous fournir un bonus de circonstances de +1 sur les tests de compétences avec l'une ou l'autre de ces compétences de Connaissance ou sur un autre test de compétence qui fait écho à votre passé",
                " Si vous acceptez mais que vous obtenez un échec au test, vous êtes Stupéfié 1 pendant 1 minute par la distraction mentale lié aux souvenirs de votre vie antérieure ou Stupéfié 2 pendant 1 minute sur un échec critique"
            ],
            "gift_skill"     : [],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "CON",
                    "INT",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "choix du MJ"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "choix du MJ"
                    }
                ]
            }
        },
        {
            "name"           : "Amnésique",
            "requirement"    : [],
            "description"    : [
                "Votre historique est... comment dire... honnêtement, vous ne pouvez plus vous en souvenir ! Vous pouvez avoir des impressions au plus profond de votre esprit, des émotions inhabituelles ou des réactions inattendues face à certaines personnes ou situations, mais en fin de compte, vous ne savez pas qui vous étiez auparavant. Il se peut que vous partiez à l'aventure dans le but de le découvrir. C'est à vous et au MJ de décider comment gérer la vérité sur les origines de votre personnage. Vous pouvez laisser au MJ le soin de garder le secret, collaborer avec lui, ou même choisir de ne rien décider avant la fin de la partie. Quoi qu'il en soit, vous et votre MJ devez déterminer quelques détails notables concernant votre personnage ou ses affaires afin d'obtenir les premiers indices sur votre passé.",
                "Vous obtenez trois primes d'attributs. Vous en choisissez deux et le MJ en choisit une troisième basée sur les premières idées de l'histoire possible de votre personnage."
            ],
            "gift_skill"     : [],
            "prime_attribute": {
                "number": 3,
                "choice": [
                    "FRE",
                    "FRE",
                    "FRE"
                ]
            }
        },
        {
            "name"           : "Amuseur de saloon",
            "requirement"    : [],
            "description"    : [
                "Tout ce que vous voulez, c'est divertir les gens mais bien sûr, les mauvaises nouvelles semblent vous suivre. Des fusillades, des bagarres, des vols et bien d'autres choses encore s'abattent sur les établissements où vous jouez, et la nouvelle se répand vite. Gardez une ville d'avance sur les ragots, et vous pourrez peut-être à nouveau jouer un concert, commander une scène ou tenir une table."
            ],
            "gift_skill"     : [
                "Artiste virtuose"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "DEX",
                    "CHA",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Représentation",
                        "characteristic": "CHA"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de votre choix"
                    }
                ]
            }
        },
        {
            "name"           : "Annonciateur du malheur",
            "requirement"    : [],
            "description"    : [
                "Dans les étoiles, vous ne voyez pas de conseils ou de sagesse mais une porte scintillante vers la fin imminente de toutes choses. Vous avez peut-être été élevé dans cette idéologie, l'avez glanée par superstition ou avez reçu une vision prophétique. Quoi qu'il en soit, vous en êtes venu à considérer les étoiles et le pouvoir qu'elles incarnent comme un chemin vers le malheur, une malédiction pour avertir les masses. Certains peuvent ignorer vos avertissements, d'autres se joindront à vous pour éclairer les ignorants. Pour vous, il n'y a pas de plus grande vérité que la fin à venir et vous savez que, quelle qu'en soit la cause, elle viendra des étoiles - ou peut-être que les étoiles ne sont qu'une porte vers un au-delà plus terrifiant."
            ],
            "gift_skill"     : [
                "Infortune stellaire"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "INT",
                    "SAG",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Occultisme",
                        "characteristic": "INT"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "des étoiles"
                    }
                ]
            }
        },
        {
            "name"           : "Anti-Magie",
            "requirement"    : [],
            "description"    : [
                "La magie n'a jamais fonctionné tout à fait normalement autour de vous. Peut-être êtes-vous devenu un utilisateur de magie malgré tout, ou peut-être utilisez-vous votre capacité unique pour combattre les utilisateurs de magie.",
                " Chaque fois que vous seriez affecté par la magie, votre propre magie ou celle d'un allié, l'initiateur de l'effet doit tenter un Test nu, DD 3 ",
                "Sur un échec, la magie ne vous affecte pas (bien qu'elle ait toujours ses effets normaux sur toute autre personne). En cas de succès, la magie vous affecte et il n'est pas nécessaire de tenter d'autres tests nu pour le même effet magique, même s'il vous affecte à nouveau par la suite."
            ],
            "gift_skill"     : [],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "CON",
                    "SAG",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "d'un sujet de votre choix, bien qu'il ne puisse pas porter sur un sujet magique (déterminé par le MJ si ce n'est pas clair)"
                    }
                ]
            }
        },
        {
            "name"           : "Apprenti de nécromant",
            "requirement"    : [],
            "description"    : [
                "Vous avez été apprenti sous les ordres d'un nécromancien - une éducation difficile dans un domaine où un cadavre que vous disséquiez pouvait soudainement s'animer et où chaque artefact magique semblait mortel. Maintenant que vous êtes indépendant, vous êtes reconnaissant d'avoir appris à identifier les menaces magiques rapidement et minutieusement."
            ],
            "gift_skill"     : [
                "Identification rapide"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "CON",
                    "INT",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Arcanes",
                        "characteristic": "INT"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de la nécromancie"
                    }
                ]
            }
        },
        {
            "name"           : "Archéologue",
            "requirement"    : [],
            "description"    : [
                "Vous avez exhumé assez de sites pour savoir que les civilisations antiques ne sont pas perdues ; elles sont à peine enterrées et attendent que l'érudit approprié les déterre et raconte leurs histoires. Vous pourriez avoir travaillé comme ouvrier ou guide local avant d'apprendre les techniques archéologiques formelles."
            ],
            "gift_skill"     : [
                "Connaissance supplémentaire"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "CON",
                    "INT",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Société",
                        "characteristic": "INT"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de l'architecture"
                    }
                ]
            }
        },
        {
            "name"           : "Armurier",
            "requirement"    : [],
            "description"    : [
                "Dès votre jeune âge, vous avez été l'apprenti d'un armurier expérimenté et, au fil du temps, vos compétences et vos connaissances se sont élevées pour égaler celles de votre maître. Aujourd'hui, vous pouvez facilement réparer, modifier ou améliorer presque toutes les armes à feu que vous avez déjà vues et même si vous ne l'avez pas vue, vous la décomposerez pour apprendre ce qui la fait fonctionner en un rien de temps. Vous avez emmené ces compétences sur la route, en les utilisant pour vous aider, vous et vos alliés en tant qu'aventurier, lorsqu'il s'agit d'entretenir des armes, des boucliers, des armures, et même davantage."
            ],
            "gift_skill"     : [
                "Réparation rapide"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "DEX",
                    "INT",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Artisanat",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "et Connaissance de l'ingénierie"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de l'ingénierie"
                    }
                ]
            }
        },
        {
            "name"           : "Arpenteur de la Désolation",
            "requirement"    : [],
            "description"    : [
                "Que vous ayez grandi dans la Désolation de Mana ou dans un autre endroit aussi désertique, vous avez rapidement appris que seuls les forts survivent. Vous et votre famille avez été contraints d'échapper aux monstres, aux mutants, à la magie erratique et pire encore, chaque nouveau jour annonçant la possibilité de devoir affronter un danger ou une menace que vous n'aviez jamais vus auparavant. Vous avez appris à vous adapter aux pires conditions possibles et à chercher de la nourriture et à survivre dans un endroit où peu d'autres oseraient vivre."
            ],
            "gift_skill"     : [
                "Glaneur"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "FOR",
                    "SAG",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Survie",
                        "characteristic": "SAG"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de la Désolation de Mana"
                    }
                ]
            }
        },
        {
            "name"           : "Artisan",
            "requirement"    : [],
            "description"    : [
                "Vous avez été apprenti dans un métier impliquant de construire ou confectionner quelque chose et avez ainsi développé une compétence spécialisée. Vous avez peut-être été un apprenti forgeron vous éreintant devant la forge pendant d'innombrables heures, un jeune tailleur confectionnant des vêtements de toutes sortes, ou encore un ouvrier sur un chantier naval façonnant les coques des navires."
            ],
            "gift_skill"     : [
                "Artisanat spécialisé"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "FOR",
                    "INT",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Artisanat",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "et en Connaissance des guildes"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "des guildes"
                    }
                ]
            }
        },
        {
            "name"           : "Artiste",
            "requirement"    : [],
            "description"    : [
                "Votre art, quelle que soit la manière dont il s'exprime, représente votre passion. L'aventure vous aide peut-être à trouver l'inspiration, ou alors il s'agit simplement un moyen de survivre en attendant de devenir un artiste de renommée mondiale."
            ],
            "gift_skill"     : [
                "Artisanat spécialisé"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "DEX",
                    "CHA",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Artisanat",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "et en Connaissance artistique"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "artistique"
                    }
                ]
            }
        },
        {
            "name"           : "Artiste de feux d'artifice",
            "requirement"    : [],
            "description"    : [
                "Peu de célébrations au Tian Xia se terminent sans un spectacle de feux d'artifice et votre travail consiste à vous assurer qu'ils se déroulent sans accroc. Vous chargez les feux d'artifice, allumez les fusées et chorégraphiez le spectacle, qui se termine par un final de lumières et d'explosions. Ensuite, il est temps de remballer votre matériel et de vous rendre à la prochaine fête civile ou religieuse. Bien sûr, quelqu'un qui parcourt les routes avec un paquet rempli d'explosifs puissants ne peut manquer de vivre une aventure ou deux en cours de route, et ainsi, au fil du temps, vos feux d'artifice ont été dépensés pour soutenir cette vie."
            ],
            "gift_skill"     : [
                "Représentation fascinante"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "INT",
                    "CHA",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Représentation",
                        "characteristic": "CHA"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "des feux d'artifice"
                    }
                ]
            }
        },
        {
            "name"           : "Aspirant Agitateur",
            "requirement"    : [],
            "description"    : [
                "Vous avez été sauvé ou libéré d'une situation désespérée par un groupe d'Agitateurs et depuis lors, vous aspirez à devenir un Agitateur pour poursuivre leur héritage. Vous continuez à suivre les nouvelles de leurs aventures et vous espérez un jour rencontrer vos héros en tant que camarades."
            ],
            "gift_skill"     : [
                "Assurance"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "FOR",
                    "CHA",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Athlétisme",
                        "characteristic": "FOR",
                        "armor_penalty" : true
                    },
                    {
                        "label"         : "Représentation",
                        "characteristic": "CHA"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "des Agitateurs"
                    }
                ]
            }
        },
        {
            "name"           : "Aspirant Capitaine-libre",
            "requirement"    : [
                "Région - Hautes mers"
            ],
            "description"    : [
                "Vous cherchez à rejoindre les Capitaines libres des Entraves et avez appris tout ce que vous avez besoin de savoir pour Naviguer et commander les hommes qui vous entourent. Maintenant, vous avez juste besoin d'un navire et d'un équipage."
            ],
            "gift_skill"     : [
                "Contraindre un groupe"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "SAG",
                    "CHA",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Intimidation",
                        "characteristic": "CHA"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de la navigation maritime"
                    }
                ]
            }
        },
        {
            "name"           : "Aspirant Éclaireur",
            "requirement"    : [
                "Région - Absalom et Île de la Pierre-Étoile"
            ],
            "description"    : [
                "Vous avez toujours rêvé de rejoindre l'audacieuse Société des Éclaireurs. Vous avez choisi la vie dangereuse d'aventurier dans l'espoir de gagner votre place parmi eux."
            ],
            "gift_skill"     : [
                "Connaissance supplémentaire"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "CON",
                    "INT",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Société",
                        "characteristic": "INT"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de la Société des Éclaireurs"
                    },
                    {
                        "label"         : "Société",
                        "characteristic": "INT"
                    }
                ]
            }
        },
        {
            "name"           : "Aspirant Monarque du Fleuve",
            "requirement"    : [
                "Région - Terres brisées"
            ],
            "description"    : [
                "De nouveaux royaumes émergent constamment dans les Royaumes du fleuve et vous avez l'intention de diriger l'un d'entre eux. Faire en sorte qu'il dure, quoi qu'il en soit, va requérir à la fois de la force et de la grâce."
            ],
            "gift_skill"     : [
                "Manières courtoises"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "SAG",
                    "CHA",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Société",
                        "characteristic": "INT"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de la politique"
                    }
                ]
            }
        },
        {
            "name"           : "Astrologue",
            "requirement"    : [],
            "description"    : [
                "Les astrologues scrutent les étoiles à la recherche de signes et de présages, utilisant la position des astres pour tracer des thèmes astraux pour ceux qui vivent dessous. Tel le déplacement des sphères célestes, le destin lui-même se transforme. Vous avez étudié les étoiles et appris à tracer votre chemin en fonction de leurs conseils. Que les étoiles vous aient directement invitées à une vie d'aventure ou que vous utilisiez les étoiles pour guider votre envie d'errer, vous vivez les conseils des étoiles dans une vie d'aventure."
            ],
            "gift_skill"     : [
                "Identification de bizarreries"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "INT",
                    "SAG",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Occultisme",
                        "characteristic": "INT"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de l'astrologie"
                    }
                ]
            }
        },
        {
            "name"           : "Athlète star",
            "requirement"    : [],
            "description"    : [
                "Quel que soit le sport, qu'il s'agisse du basilic, de balle au pied, de lutte, de course à pied, de stickball, de canoë ou de foot-volley, vous l'avez pratiqué ou vous avez envie de l'essayer. Vous avez probablement manqué des cours à cause des entraînements ou des compétitions et des professeurs irrités pourraient vous considérer comme paresseux ou incapable d'apprendre. Ces hypothèses ne tiennent pas compte des innombrables heures que vous avez consacrées à l'excellence sportive.",
                " Vous êtes aussi qualifié dans la compétence Connaissance ludique ou une compétence de Connaissance en lien avec votreécole"
            ],
            "gift_skill"     : [
                "Assurance"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "FOR",
                    "DEX",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Athlétisme",
                        "characteristic": "FOR",
                        "armor_penalty" : true
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "FOR",
                        "need_qualifier": true,
                        "qualifier"     : "ludique"
                        
                    }
                ]
            }
        },
        {
            "name"           : "Augure astrologique",
            "requirement"    : [],
            "description"    : [
                "Au cours de vos années de formation, vous avez appris que les étoiles sont une porte d'entrée vers des pouvoirs mystiques ou des prévisions de l'avenir. Vous avez peut-être grandi dans la culture Iruxie ou dans l'un des derniers sanctuaires Lirgeni. Vous avez étudié les constellations, utilisant leur alignement pour prédire la fortune (ou le malheur) et en obtenant des pouvoirs magiques différents de ceux des autres astrologues que vous connaissez. Vos lectures peuvent se concentrer principalement sur la Caravane cosmique à moins que vous n'utilisiez d'autres étoiles pour vous guider, comme le zodiaque du Tian Xia.",
                " Vous pouvez lancer Augure comme un sort divin inné une fois par semaine et les effets du sorts peuvent voir jusqu'à une heure dans l'avenir plutôt que dans les 30 minutes"
            ],
            "free_spell"     : [
                {
                    name     : "Augure",
                    frequency: 1,
                    period   : "week"
                }
            
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "SAG",
                    "CHA",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de l'astrologie"
                    }
                ]
            }
        },
        {
            "name"           : "Avocat",
            "requirement"    : [],
            "description"    : [
                "Les longues heures passées le nez dans des piles d'ouvrages législatifs sous le regard sévère de vos professeurs et à fréquenter les tribunaux vous ont permis d'apprendre le fonctionnement des lois. Vous êtes capable de monter un dossier d'accusation ou de défense pour un procès et vous vous tenez informé des lois locales, car il est impossible de prédire quand elles pourront vous être utiles."
            ],
            "gift_skill"     : [
                "Bonne impression de groupe"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "INT",
                    "CHA",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Diplomatie",
                        "characteristic": "CHA"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "juridique"
                    }
                ]
            }
        },
        {
            "name"           : "Balayeur de fumier de la Ménagerie",
            "requirement"    : [
                "Région - Absalom et Île de la Pierre-Étoile"
            ],
            "description"    : [
                "Que vous laviez les bêtes de combat sous le plancher de l'arène de l'Irorium ou pris soin des animaux mutants d'un spectacle des Flaques, vous avez l'expérience avec toutes sortes de bêtes étranges."
            ],
            "gift_skill"     : [
                "Dressage animalier"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "CON",
                    "SAG",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Nature",
                        "characteristic": "SAG"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "des animaux"
                    }
                ]
            }
        },
        {
            "name"           : "Bandit",
            "requirement"    : [],
            "description"    : [
                "Votre passé comprend une bonne part de banditisme rural, de voyageurs volés sur la route et d'égratignures. Que votre brigandage ait été puni par un noble local ou que vous l'ayez perpétré avec son accord, vous avez fini par prendre goût à la vie d'aventure."
            ],
            "gift_skill"     : [
                "Contraindre un groupe"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "DEX",
                    "CHA",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Intimidation",
                        "characteristic": "CHA"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "en lien avec le terrain sur lequel vous avez évolué"
                    }
                ]
            }
        },
        {
            "name"           : "Barbier",
            "requirement"    : [],
            "description"    : [
                "Coupe de cheveux, dentisterie, saignée et chirurgie : s'il faut une main sûre et un rasoir effilé, vous pouvez le faire. Vous pourriez avoir pris la route pour étendre vos compétences ou pour expérimenter vous-même face à un monde qui laisse vos patients tellement battus et contusionnés."
            ],
            "gift_skill"     : [
                "Chirurgie risquée"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "DEX",
                    "SAG",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Médecine",
                        "characteristic": "INT"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de la chirurgie"
                    }
                ]
            }
        },
        {
            "name"           : "Bateleur",
            "requirement"    : [],
            "description"    : [
                "Une éducation dans les arts ou un entraînement obstiné vous ont permis d'apprendre à divertir les foules. Vous étiez peut-être comédien, danseur, musicien, magicien des rues ou un autre type d'artiste."
            ],
            "gift_skill"     : [
                "Représentation fascinante"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "DEX",
                    "CHA",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Représentation",
                        "characteristic": "CHA"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "théâtrale"
                    }
                ]
            }
        },
        {
            "name"           : "Bâtisseur de bûcher",
            "requirement"    : [],
            "description"    : [
                "Vous avez de l'expérience dans la construction de bûchers funéraires. Vous avez peut-être allumé les bières enflammées dans les Terres des rois de linnorm, entretenu les fosses de crémation du Chéliax ou du Vudra ou avoir été un charbonnier de la campagne, en utilisant le bon mélange d'alchimie pour agir comme un accélérateur. Quel que soit votre culte, vous savez que rien n'expédie les défunts comme la flamme."
            ],
            "gift_skill"     : [
                "Artisanat alchimique"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "DEX",
                    "INT",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Artisanat",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "et en Connaissance des funérailles"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "des funérailles"
                    }
                ]
            }
        },
        {
            "name"           : "Béni",
            "requirement"    : [],
            "description"    : [
                "Vous avez été béni par une divinité. Pour une raison inconnue, et indépendamment de vos croyances actuelles, une divinité vous a accordé un don pour l'utiliser pour le bien ou le mal. Cette bénédiction vous accorde la sagesse et l'introspection pour vous aider dans vos combats. Vous pouvez ne pas connaître l'identité de l'être qui vous a béni et la bénédiction peut avoir un coût que vous découvrirez plus tard.",
                " Soit vous pouvez lancer auto_awesomeAssistance surnaturelle comme un sort divin inné à volonté, soit vous obtenez une bénédiction du même ordre déterminée par le MJ"
            ],
            "gift_skill"     : [
                "Assistance surnaturelle"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "SAG",
                    "CHA",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "associée à la divinité"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de votre choix"
                    }
                ]
            }
        },
        {
            "name"           : "Béni des génies",
            "requirement"    : [],
            "description"    : [
                "Vous avez cherché un génie puissant et demandé sa bénédiction, dans l'espoir d'augmenter votre fortune. Votre souhait était vague, mais la fortune et le génie vous ont favorisé avec un effet plus puissant qu'un souhait ordinaire, vous accordant des bribes de chance issues de ce souhait tout au long de votre vie. Pendant ce temps, d'autres génies du même genre vous reconnaissent comme étant béni par l'un de leurs nobles les plus puissants et pourraient vous traiter avec plus de respect ou d'envie.",
                " Vous obtenez l'action gratuite sports_martial_artsSouhait de bonne fortune "
            ],
            "gift_skill"     : [
                "Souhait de bonne fortune"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "CHA",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Diplomatie",
                        "characteristic": "CHA"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "des génies"
                    }
                ]
            }
        },
        {
            "name"           : "Béni par la bête",
            "requirement"    : [],
            "description"    : [
                "Vous avez autrefois libéré une bête magique de la captivité, que cela ait ou non été intentionnel ou le produit indirect d'une autre action. La créature reconnaissante vous a placé sur vous une bénédiction de liberté. Votre bénédiction se manifeste physiquement, comme par exemple des canines allongées, des ongles qui poussent en étant très aiguisés, un excès de pilosité ou tout autre trait. Cette manifestation est uniquement cosmétique et n'accorde aucun avantage.",
                " Vous obtenez la réaction sports_martial_artsClarté bestiale "
            ],
            "gift_skill"     : [
                "Clarté bestiale"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "DEX",
                    "SAG",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Survie",
                        "characteristic": "SAG"
                    }
                ]
            }
        },
        {
            "name"           : "Bibliothécaire occulte",
            "requirement"    : [],
            "description"    : [
                "Les heures passées à lire de nombreux recueils dédiés à divers sujets occultes ont affiné votre connaissance de ces plus obscurs arts magiques. Vous avez peut-être pris l'habitude de partir à l'aventure pour financer l'acquisition de tomes rares, explorer des mystères occultes qui ne se trouvent pas dans les pages d'un livre ou peut-être pour mettre vos compétences à l'épreuve."
            ],
            "gift_skill"     : [
                "Éduqué dans les secrets"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "INT",
                    "SAG",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Occultisme",
                        "characteristic": "INT"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "universitaire"
                    }
                ]
            }
        },
        {
            "name"           : "Bonuwat Touché par les vagues",
            "requirement"    : [
                "Région - Étendues du Mwangi"
            ],
            "description"    : [
                "Vous êtes un enfant du peuple Bonuwat et l'eau de mer circule dans vos veines. Vous avez appris à naviguer et à nager avec aisance, vous permettant d'obtenir le titre honorifique de Touché par les vagues.",
                "Spécial Vous pouvez choisir le don ancestral military_techParangon touché par les vagues au niveau 1 au lieu du niveau 5."
            ],
            "gift_skill"     : [
                "Maraudeur aquatique",
                "Parangon touché par les vagues"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "FOR",
                    "SAG",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Athlétisme",
                        "characteristic": "FOR",
                        "armor_penalty" : true
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de l'océan"
                    }
                ]
            }
        },
        {
            "name"           : "Botaniste",
            "requirement"    : [],
            "description"    : [
                "Vous avez toujours eu la main verte, ce qui vous permet de prendre soin de plantes que d'autres trouvent trop difficiles à faire pousser et à entretenir avec une habileté qui frise la magie. En voyageant, vous rencontrez toutes sortes de nouvelles plantes et créatures végétales, ce qui vous permet d'élargir vos horizons et d'approfondir votre connaissance de la flore."
            ],
            "gift_skill"     : [
                "Médecine naturelle"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "SAG",
                    "CHA",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Nature",
                        "characteristic": "SAG"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "des plantes"
                    }
                ]
            }
        },
        {
            "name"           : "Bricoleur",
            "requirement"    : [],
            "description"    : [
                "Vous inventez toutes sortes de petites choses afin de satisfaire votre imagination fertile. Vos compétences en ingénierie s'expriment avec beaucoup de créativité et il est impossible de deviner ce que vous allez bien pouvoir inventer ensuite. Il s'agira peut-être d'un génial appareil qui aura un potentiel fabuleux... ou qui risquera d'exploser."
            ],
            "gift_skill"     : [
                "Artisanat spécialisé"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "DEX",
                    "INT",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Artisanat",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "et en Connaissance de l'ingénierie"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de l'ingénierie"
                    }
                ]
            }
        },
        {
            "name"           : "Bricoleur d'Alkenastre",
            "requirement"    : [
                "Région - Terres impossibles"
            ],
            "description"    : [
                "Votre dévotion pour la recherche scientifique de votre native Alkenastre vous fournit une profonde intuition pour l'innovation mécanique et chimique."
            ],
            "gift_skill"     : [
                "Artisanat alchimique"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "DEX",
                    "INT",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Artisanat",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "et en Connaissance de l'Ingénierie"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de l'Ingénierie"
                    }
                ]
            }
        },
        {
            "name"           : "Brise-combat",
            "requirement"    : [],
            "description"    : [
                "Vous avez l'art de déceler les tensions qui couvent et de calmer les nerfs à vif. Vous vous fiez à votre intuition pour discerner quand et comment la violence est imminente et à vos compétences - diplomatiques ou autres - pour désamorcer les situations tendues. Vous pouvez choisir la vie d'aventurier pour vous colleter à des conflits nouveaux et inconnus ou pour essayer d'échapper aux représailles de ceux qui se nourrissent de la violence et qui n'apprécient pas votre capacité à maintenir la paix."
            ],
            "gift_skill"     : [
                "Bonne impression de groupe"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "SAG",
                    "CHA",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Diplomatie",
                        "characteristic": "CHA"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de la cité ou de la communauté dans laquelle vous avez vécu avant de devenir un Brise-combat"
                    }
                ]
            }
        },
        {
            "name"           : "Bureaucrate du Grand conseil",
            "requirement"    : [
                "Région - Absalom et l'Île de la Pierre-Étoile"
            ],
            "description"    : [
                "Vous avez passé des années à travailler comme clerc d'un fonctionnaire du gouvernement d'Absalom. Votre service vous a appris une chose ou deux à propos des discours d'encouragement et à manipuler la bureaucratie de la ville."
            ],
            "gift_skill"     : [
                "Bonne impression de groupe"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "INT",
                    "CHA",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Diplomatie",
                        "characteristic": "CHA"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "du gouvernement"
                    }
                ]
            }
        },
        {
            "name"           : "Camelot",
            "requirement"    : [],
            "description"    : [
                "Vous vivez à la périphérie de la civilisation, passant au peigne fin les détritus laissés derrière vous pour trouver des bibelots intéressants à vendre ou à utiliser dans vos propres fabrications. Bien que vous ayez un terrain de prédilection à fouiller, vous savez que les plus grands trésors se trouvent là où les gens font un plus grand usage de la technologie."
            ],
            "gift_skill"     : [
                "Portefaix"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "FOR",
                    "SAG",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Athlétisme",
                        "characteristic": "FOR",
                        "armor_penalty" : true
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "du terrain que vous farfouillez"
                    }
                ]
            }
        },
        {
            "name"           : "Cannonier",
            "requirement"    : [],
            "description"    : [
                "Vous avez servi comme membre d'équipage à bord d'un navire militaire ou d'un navire pirate et étiez responsable de l'utilisation et de l'entretien des canons du navire. Un dos solide et des réflexes rapides étaient tout aussi importants pour vous dans vos fonctions et vous savez vous y prendre avec les explosifs et connaissez les dangers qu'ils recèlent. Ces compétences vous servent bien dans votre nouvelle vie d'aventurier, car comparé au poids d'un canon, le poids du matériel qui fait blanchir vos alliés vous fait plutôt rire."
            ],
            "gift_skill"     : [
                "Portefaix"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "FOR",
                    "DEX",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Athlétisme",
                        "characteristic": "FOR",
                        "armor_penalty" : true
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de la Guerre"
                    }
                ]
            }
        },
        {
            "name"           : "Cavalier du ciel",
            "requirement"    : [],
            "description"    : [
                "La liberté d'un oiseau en vol est quelque chose d'enviable et vous l'avez enviée, mais pas longtemps. Vous avez emprunté des planeurs mécaniques ou cherché à profiter des avantages du vol à voile et du vol assisté par magie, faisant n'importe quoi pour avoir l'occasion de regarder le monde d'en haut avec seulement le vent pour vous maintenir en l'air. Le coût de ces expériences a peut-être été un facteur déterminant dans votre décision de suivre un mode de vie aventureux ou peut-être cherchez-vous à maîtriser de nouvelles méthodes de vol."
            ],
            "gift_skill"     : [
                "Chute féline"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "DEX",
                    "SAG",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Acrobaties",
                        "characteristic": "DEX",
                        "armor_penalty" : true
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "du Plan de l'Air"
                    }
                ]
            }
        },
        {
            "name"           : "Céleste banni",
            "requirement"    : [],
            "description"    : [
                "Vous étiez autrefois un être surnaturel - un agent céleste, une faucheuse, un phénix immortel ou un tyran démoniaque. Pour une raison ou une autre, vous avez été contraint de vivre sous une forme mortelle. Vous avez peut-être été scellé par le pouvoir sacré d'un moine ou cruellement trahi et tué, mais il est plus probable que vos supérieurs vous aient puni pour votre orgueil démesuré. Vous ne vous souvenez pas très bien de votre vie antérieure, si tant est que vous ayez conscience d'avoir été autre chose que ce que vous êtes aujourd'hui, mais vous n'êtes pas complètement abandonné par les puissances qui régissaient autrefois votre vie. Vous trouvez souvent une étincelle d'illumination dans l'échec, car le destin vous pousse à corriger les erreurs ou les tragédies qui ont causé votre déchéance.",
                " Vous obtenez la capacité sports_martial_artsIllumination dans l'adversité "
            ],
            "gift_skill"     : [
                "Illumination dans l'adversité"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": []
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de votre choix"
                    },
                    {
                        "label"         : "?",
                        "characteristic": "?",
                        "qualifier"     : "de votre choix"
                    }
                ]
            }
        },
        {
            "name"         : "Chant des profondeurs de l'océan",
            "requirement"  : [],
            "description"  : [
                "Lors d'un voyage en mer, vous êtes passé par-dessus bord, avez ingéré de l'eau de mer et vous vous êtes noyé. Des hommes-poisson, des kelpies, des serpents de mer ou un autre habitant magique de la mer ont sorti votre corps inconscient des profondeurs saumâtres. Ayant passé tant de temps sous l'eau, vos poumons étaient remplis d'eau salée. Pour vous rendre la capacité de respirer, ils ont expiré dans vos poumons et ont partagé la capacité de respirer sous l'eau. Vous êtes revenu avec la capacité de respirer de l'eau et avec de nouvelles connaissances acquises lors de vos moments passés sous les vagues.",
                "Choisissez une prime d'attribut. Elle doit être de Force, de Constitution ou de Charisme.",
                " Vous gagnez la capacité de respirer sous l'eau",
                "Spécial Vous pouvez choisir de perdre la faculté de respirer l'air lorsque vous choisissez cet historique, pour garder la seule faculté de respirer seulement dans l'eau. Si tel est le cas vous pouvez ajouter une seconde prime d'attribut, qui est une prime d'attribut libre."
            ],
            "free_capacity": ["respirer sous l'eau"],
            "skills"       : {
                "qualify": [
                    {
                        "label"         : "Athlétisme",
                        "characteristic": "FOR",
                        "armor_penalty" : true
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de l'océan"
                    }
                ]
            }
        },
        {
            "name"           : "Charlatan",
            "requirement"    : [],
            "description"    : [
                "Vous vous rendiez de ville en ville, prétendant lire l'avenir et vendre des remèdes miracles à un endroit et vous faisant passer pour un héritier royal en exil dans le suivant afin de séduire le ou la riche bénéficiaire d'un héritage. Prendre l'étiquette d'aventurier peut être votre dernière combine ou une véritable tentative d'utiliser vos talents à meilleur escient. Il peut également s'agir des deux et vous vous rendez alors compte que vous êtes en train de devenir le héros pour lequel vous vous faites passer."
            ],
            "gift_skill"     : [
                "Menteur charismatique"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "INT",
                    "CHA",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Duperie",
                        "characteristic": "CHA"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de la pègre"
                    }
                ]
            }
        },
        {
            "name"           : "Chasseur",
            "requirement"    : [],
            "description"    : [
                "Vous avez traqué et abattu des animaux et d'autres créatures sauvages. Écorcher les animaux, récolter leur chair et les cuisiner ont également été inclus dans votre formation, ce qui peut vous donner des ressources utiles lorsque vous partez à l'aventure."
            ],
            "gift_skill"     : [
                "Observation de la nature"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "DEX",
                    "SAG",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Survie",
                        "characteristic": "SAG"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de la tannerie"
                    }
                ]
            }
        },
        {
            "name"           : "Chasseur à l'aigle",
            "requirement"    : [],
            "description"    : [
                "Vous êtes un chasseur lié à un aigle comme compagnon animal depuis votre plus jeune âge. Vous avez entraîné votre aigle à chasser avec vous, devenant à la fois une extension de vous-même et un partenaire de confiance sur lequel vous pouvez compter. Les peuples nomades d'Hongal ont créé cette pratique pour chasser sur leur territoire hostile. Vous chassez du petit gibier, généralement des renards et des lièvres, ou vous participez à des événements de chasse qui attirent des foules de spectateurs. C'est peut-être la perspective d'un public plus nombreux qui vous attire, ou peut-être la promesse d'un plus gros gibier en dehors de vos terrains de chasse habituels. Qui sait ce qui pousse un chasseur à l'aventure ?",
                " Vos aigles dressés peuvent effectuer l'action Aide lorsque vous tentez un test de Nature, de Perception ou de Survie",
                " Ce bénéfice ne s'applique qu'à vous et aux autres personnages ayant l'historique de Chasseur à l'aigle"
            ],
            "gift_skill"     : [
                " général Animal de compagnie et le don de compétence dressage animalier, mais vous ne pouvez utiliser ces dons que pour obtenir ou dresser des aigles"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "FOR",
                    "SAG",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Nature",
                        "characteristic": "SAG"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de la chasse"
                    }
                ]
            }
        },
        {
            "name"           : "Chasseur de primes",
            "requirement"    : [],
            "description"    : [
                "Vous vous êtes enrichi en traquant les délinquants. Vos motivations étaient peut-être altruistes et chasser les criminels était pour vous un moyen de rendre les rues plus sûres, ou alors vous étiez seulement motivé par l'argent. Vous n'avez aucun mal à transposer vos techniques de traque des criminels à votre profession d'aventurier."
            ],
            "gift_skill"     : [
                "Pisteur expérimenté"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "FOR",
                    "SAG",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Survie",
                        "characteristic": "SAG"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "juridique"
                    }
                ]
            }
        },
        {
            "name"           : "Chercheur de la Concordance",
            "requirement"    : [],
            "description"    : [
                "Chargé par la Concordance des éléments de mener des recherches sur divers phénomènes planaires énigmatiques, vous avez acquis des connaissances très spécifiques sur les plans et leurs interactions. Bien que le métier de chercheur soit généralement paisible, la Concordance peut vous demander d'aller sur le terrain et de rechercher des conditions planaires instables."
            ],
            "gift_skill"     : [],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "INT",
                    "SAG",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "du Plan de l'Air,"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "Plan de la Terre"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "Plan de l'eau"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "du bois,"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "du fer"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "du Plan du métal"
                    }
                ]
            }
        },
        {
            "name"           : "Chercheur de sort",
            "requirement"    : [],
            "description"    : [
                "La magie conventionnelle ne peut retenir votre attention qu'un certain temps. Vous vous êtes plutôt consacré à la compréhension de sorts véritablement ésotériques, ce qui vous pousse invariablement à explorer le monde et toutes ses traditions mystiques."
            ],
            "gift_skill"     : [
                "Reconnaître des sorts"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "CON",
                    "SAG",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Arcanes ou Occultisme",
                        "characteristic": "INT"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "des bibliothèques"
                    }
                ]
            }
        },
        {
            "name"           : "Chercheur en mécanique",
            "requirement"    : [],
            "description"    : [
                "Les nouvelles formes de technologie mécaniques sont incroyablement intéressantes pour vous et vous en avez étudié des exemples pour voir où elles pourraient être le mieux utilisées. Vous pourriez éventuellement développer un nouveau prototype de machine ou trouver un moyen de rendre les technologies connexes suffisamment pratiques pour que tout le monde en profite. Mais avant cela, vous devez poursuivre vos recherches !"
            ],
            "gift_skill"     : [
                "Évaluation de l'artisan"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "DEX",
                    "INT",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Société",
                        "characteristic": "INT"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de l'ingénierie"
                    }
                ]
            }
        },
        {
            "name"           : "Chercheur Rivain",
            "requirement"    : [],
            "description"    : [
                "Vous avez dédié votre vie à résoudre les secrets de l'antique Empire Rivain, soit au travers de recherches méticuleuses, soit en voyageant dans des ruines dangereuses et lointaines pour retrouver la trace d'artefacts depuis longtemps perdus."
            ],
            "gift_skill"     : [
                "Artisanat spécialisé"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "DEX",
                    "INT",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Artisanat",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "et en Connaissance de l'empire Rivain"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de l'empire Rivain"
                    }
                ]
            }
        },
        {
            "name"           : "Chevaucheur des plaines",
            "requirement"    : [],
            "description"    : [
                "Durant votre jeunesse, vous galopiez à dos de cheval sur de vastes prairies, servant d'avant garde pour votre communauté, une armée ou pour un autre groupe. Voir tant de paysages différents a été l'origine de votre envie d'aventure et d'explorer le monde plutôt que de juste y passer rapidement."
            ],
            "gift_skill"     : [
                "Chevaucheur rapide"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "CON",
                    "SAG",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Nature",
                        "characteristic": "SAG"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "des plaines"
                    }
                ]
            }
        },
        {
            "name"           : "Citoyen hanté",
            "requirement"    : [],
            "description"    : [
                "Vous avez grandi dans une région où les morts-vivants rôdent partout. Cela pourrait être un domaine aussi petit que le fief d'un vampire ou aussi vaste que la nation d'Ustalav. En tant que préoccupation constante, les morts-vivants ont grandement influencé votre vie. Vivre avec la peur est devenu une compétence de tous les jours... tout comme le fait de plaider pour votre vie."
            ],
            "gift_skill"     : [
                "Pas besoin de s'alarmer"
            ],
            "prime_attribute": {
                "number": 2,
                "choice": [
                    "SAG",
                    "CHA",
                    "FRE"
                ]
            },
            "skills"         : {
                "qualify": [
                    {
                        "label"         : "Diplomatie",
                        "characteristic": "CHA"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de la communauté qui est votre foyer"
                    }
                ]
            }
        }
    ]
};

RACES.getLegacies = function ( race_name ) {
    for ( let i = 0, _size_i = RACES.ENUM.length; i < _size_i; i++ ) {
        if ( RACES.ENUM[ i ].name === race_name ) {
            return RACES.ENUM[ i ][ LEGACIES.key ];
        }
    }
    return null;
};
let toto          = [];