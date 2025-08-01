"use strict";
var HISTORICS = {
    key          : "historics",
    label        : "Historiques",
    key_element  : "historic",
    label_element: "Historique",
    ENUM         : [
        {
            "name"           : "Acolyte",
            "requirement"    : [],
            "description"    : [
                "Vous avez passé votre jeunesse dans un monastère religieux ou un cloître. Vous avez peut-être voyagé afin de répandre la bonne parole de votre religion, ou parce que vous avez rejeté les enseignements de celle-ci. Ces leçons restent cependant gravées en vous."
            ],
            "gift_skill"     : [
                "Étudiant du droit canon"
            ],
            "characteristics_bonus": {
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
            "characteristics_bonus": {
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
            "characteristics_bonus": {
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
            "characteristics_bonus": {
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
            "name"           : "Adjoint",
            "requirement"    : [],
            "description"    : [
                "Bien que votre vie ait pu prendre des tournants dans les années qui ont suivi, vous avez été un jour adjoint en tant que protecteur légal d'une communauté. Bien que ce rôle ait été temporaire et que vous ayez depuis rendu votre insigne, cette responsabilité vous a façonné. Chaque fois qu'une communauté est en difficulté et que le shérif est introuvable, les habitants font appel à vous pour capturer un criminel, sauver la progéniture du maire des bandits ou encore affronter des hors-la-loi."
            ],
            "gift_skill"     : [
                "Pisteur expérimenté"
            ],
            "characteristics_bonus": {
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
            "characteristics_bonus": {
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
            "characteristics_bonus": {
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
            "characteristics_bonus": {
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
            "name"           : "Anti-Magie",
            "requirement"    : [],
            "description"    : [
                "La magie n'a jamais fonctionné tout à fait normalement autour de vous. Peut-être êtes-vous devenu un utilisateur de magie malgré tout, ou peut-être utilisez-vous votre capacité unique pour combattre les utilisateurs de magie.",
                " Chaque fois que vous seriez affecté par la magie, votre propre magie ou celle d'un allié, l'initiateur de l'effet doit tenter un Test nu, DD 3 ",
                "Sur un échec, la magie ne vous affecte pas (bien qu'elle ait toujours ses effets normaux sur toute autre personne). En cas de succès, la magie vous affecte et il n'est pas nécessaire de tenter d'autres tests nu pour le même effet magique, même s'il vous affecte à nouveau par la suite."
            ],
            "gift_skill"     : [],
            "characteristics_bonus": {
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
            "characteristics_bonus": {
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
            "name"           : "Armurier",
            "requirement"    : [],
            "description"    : [
                "Dès votre jeune âge, vous avez été l'apprenti d'un armurier expérimenté et, au fil du temps, vos compétences et vos connaissances se sont élevées pour égaler celles de votre maître. Aujourd'hui, vous pouvez facilement réparer, modifier ou améliorer presque toutes les armes à feu que vous avez déjà vues et même si vous ne l'avez pas vue, vous la décomposerez pour apprendre ce qui la fait fonctionner en un rien de temps. Vous avez emmené ces compétences sur la route, en les utilisant pour vous aider, vous et vos alliés en tant qu'aventurier, lorsqu'il s'agit d'entretenir des armes, des boucliers, des armures, et même davantage."
            ],
            "gift_skill"     : [
                "Réparation rapide"
            ],
            "characteristics_bonus": {
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
            "characteristics_bonus": {
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
            "characteristics_bonus": {
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
            "characteristics_bonus": {
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
            "characteristics_bonus": {
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
            "name"           : "Astrologue",
            "requirement"    : [],
            "description"    : [
                "Les astrologues scrutent les étoiles à la recherche de signes et de présages, utilisant la position des astres pour tracer des thèmes astraux pour ceux qui vivent dessous. Tel le déplacement des sphères célestes, le destin lui-même se transforme. Vous avez étudié les étoiles et appris à tracer votre chemin en fonction de leurs conseils. Que les étoiles vous aient directement invitées à une vie d'aventure ou que vous utilisiez les étoiles pour guider votre envie d'errer, vous vivez les conseils des étoiles dans une vie d'aventure."
            ],
            "gift_skill"     : [
                "Identification de bizarreries"
            ],
            "characteristics_bonus": {
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
            "name"           : "Avocat",
            "requirement"    : [],
            "description"    : [
                "Les longues heures passées le nez dans des piles d'ouvrages législatifs sous le regard sévère de vos professeurs et à fréquenter les tribunaux vous ont permis d'apprendre le fonctionnement des lois. Vous êtes capable de monter un dossier d'accusation ou de défense pour un procès et vous vous tenez informé des lois locales, car il est impossible de prédire quand elles pourront vous être utiles."
            ],
            "gift_skill"     : [
                "Bonne impression de groupe"
            ],
            "characteristics_bonus": {
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
            "name"           : "Bandit",
            "requirement"    : [],
            "description"    : [
                "Votre passé comprend une bonne part de banditisme rural, de voyageurs volés sur la route et d'égratignures. Que votre brigandage ait été puni par un noble local ou que vous l'ayez perpétré avec son accord, vous avez fini par prendre goût à la vie d'aventure."
            ],
            "gift_skill"     : [
                "Contraindre un groupe"
            ],
            "characteristics_bonus": {
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
            "characteristics_bonus": {
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
            "characteristics_bonus": {
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
            "characteristics_bonus": {
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
            "characteristics_bonus": {
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
            "characteristics_bonus": {
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
            "name"           : "Bibliothécaire occulte",
            "requirement"    : [],
            "description"    : [
                "Les heures passées à lire de nombreux recueils dédiés à divers sujets occultes ont affiné votre connaissance de ces plus obscurs arts magiques. Vous avez peut-être pris l'habitude de partir à l'aventure pour financer l'acquisition de tomes rares, explorer des mystères occultes qui ne se trouvent pas dans les pages d'un livre ou peut-être pour mettre vos compétences à l'épreuve."
            ],
            "gift_skill"     : [
                "Éduqué dans les secrets"
            ],
            "characteristics_bonus": {
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
            "name"           : "Botaniste",
            "requirement"    : [],
            "description"    : [
                "Vous avez toujours eu la main verte, ce qui vous permet de prendre soin de plantes que d'autres trouvent trop difficiles à faire pousser et à entretenir avec une habileté qui frise la magie. En voyageant, vous rencontrez toutes sortes de nouvelles plantes et créatures végétales, ce qui vous permet d'élargir vos horizons et d'approfondir votre connaissance de la flore."
            ],
            "gift_skill"     : [
                "Médecine naturelle"
            ],
            "characteristics_bonus": {
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
            "characteristics_bonus": {
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
            "name"           : "Brise-combat",
            "requirement"    : [],
            "description"    : [
                "Vous avez l'art de déceler les tensions qui couvent et de calmer les nerfs à vif. Vous vous fiez à votre intuition pour discerner quand et comment la violence est imminente et à vos compétences - diplomatiques ou autres - pour désamorcer les situations tendues. Vous pouvez choisir la vie d'aventurier pour vous colleter à des conflits nouveaux et inconnus ou pour essayer d'échapper aux représailles de ceux qui se nourrissent de la violence et qui n'apprécient pas votre capacité à maintenir la paix."
            ],
            "gift_skill"     : [
                "Bonne impression de groupe"
            ],
            "characteristics_bonus": {
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
            "name"           : "Camelot",
            "requirement"    : [],
            "description"    : [
                "Vous vivez à la périphérie de la civilisation, passant au peigne fin les détritus laissés derrière vous pour trouver des bibelots intéressants à vendre ou à utiliser dans vos propres fabrications. Bien que vous ayez un terrain de prédilection à fouiller, vous savez que les plus grands trésors se trouvent là où les gens font un plus grand usage de la technologie."
            ],
            "gift_skill"     : [
                "Portefaix"
            ],
            "characteristics_bonus": {
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
            "characteristics_bonus": {
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
            "characteristics_bonus": {
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
            "characteristics_bonus": {
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
            "characteristics_bonus": {
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
            "characteristics_bonus": {
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
            "characteristics_bonus": {
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
            "characteristics_bonus": {
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
            "characteristics_bonus": {
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
            "name"           : "Chercheur en mécanique",
            "requirement"    : [],
            "description"    : [
                "Les nouvelles formes de technologie mécaniques sont incroyablement intéressantes pour vous et vous en avez étudié des exemples pour voir où elles pourraient être le mieux utilisées. Vous pourriez éventuellement développer un nouveau prototype de machine ou trouver un moyen de rendre les technologies connexes suffisamment pratiques pour que tout le monde en profite. Mais avant cela, vous devez poursuivre vos recherches !"
            ],
            "gift_skill"     : [
                "Évaluation de l'artisan"
            ],
            "characteristics_bonus": {
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
            "name"           : "Chevaucheur des plaines",
            "requirement"    : [],
            "description"    : [
                "Durant votre jeunesse, vous galopiez à dos de cheval sur de vastes prairies, servant d'avant garde pour votre communauté, une armée ou pour un autre groupe. Voir tant de paysages différents a été l'origine de votre envie d'aventure et d'explorer le monde plutôt que de juste y passer rapidement."
            ],
            "gift_skill"     : [
                "Chevaucheur rapide"
            ],
            "characteristics_bonus": {
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
            "characteristics_bonus": {
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
        },
        {
            "name"           : "Collectionneur de déchets",
            "requirement"    : [],
            "description"    : [
                "Vous vivez selon l'adage selon lequel les déchets des uns sont les trésors des autres. Que ce soit en passant au crible des tas de ferraille ou en creusant sur de vieux champs de bataille, vous restez à l'affût d'objets perdus ou mis au rebut que vous pourriez transformer en quelque chose d'utile. Le plus souvent, ce que vous trouvez n'est que de la camelote... mais vous êtes convaincu qu'un de ces jours, vous allez toucher le gros lot. Vous vous êtes même lancé dans l'aventure comme moyen d'augmenter drastiquement votre accès à toutes sortes d'objets de pacotille, d'équipement et de butin."
            ],
            "gift_skill"     : [
                "Évaluation de l'artisan"
            ],
            "characteristics_bonus": {
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
                        "label"         : "Artisanat",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "au choix"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de l'ingénierie ou minière"
                    }
                ]
            }
        },
        {
            "name"           : "Comptable",
            "requirement"    : [],
            "description"    : [
                "Vous vous occupez des chiffres sur une large échelle, pour les besoins d'un marchand ou pour une guilde majeure de la ville. Vous gardiez trace des dépenses, des livres de paie, des profits et de tout ce qui à trait à l'argent, pour le meilleur et pour le pire. Pour le meilleur, vous pourriez être parti à l'aventure pour apprendre comment d'autres pratiquent ce métier. Si c'est pour le pire, vous pourriez fuir les conséquences qui en découlent, dans l'espoir que personne ne vous trouve."
            ],
            "gift_skill"     : [
                "Œil pour les nombres"
            ],
            "characteristics_bonus": {
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
                        "label"         : "Société",
                        "characteristic": "INT"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de la comptabilité"
                    }
                ]
            }
        },
        {
            "name"           : "Contact d'eidolon",
            "requirement"    : [],
            "description"    : [
                "Vous êtes entré en contact avec un être désincarné d'essence magique connu sous le nom d'eidolon. Vous avez peut-être forgé un puissant conduit avec cet eidolon, vous permettant de le manifester en tant qu'invocateur, mais il est bien plus probable que vous ayez perdu le contact avec le temps, non sans avoir appris quelques secrets à moitié oubliés. Si vous avez perdu le contact, vous êtes peut-être devenu un aventurier pour tenter d'atteindre à nouveau l'eidolon, ou pour être sûr d'en être débarrassé à jamais."
            ],
            "gift_skill"     : [
                "Savoir douteux"
            ],
            "characteristics_bonus": {
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
                        "label"         : "Arcanes",
                        "characteristic": "SAG"
                    },
                    {
                        "label"         : "Nature",
                        "characteristic": "SAG"
                    },
                    {
                        "label"         : "Ocultisme ",
                        "characteristic": "SAG"
                    },
                    {
                        "label"         : "Religion",
                        "characteristic": "SAG"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "concernant les créatures associées à l'eidolon contacté"
                    }
                ]
            }
        },
        {
            "name"           : "Contrebandier du Marché noir",
            "requirement"    : [
                "Région - Route dorée"
            ],
            "description"    : [
                "Vous savez comment travailler du côté moins-que-légal des marchés de la région et comment glisser de la contrebande sous le nez des autorités."
            ],
            "gift_skill"     : [
                "Contrebandier expérimenté"
            ],
            "characteristics_bonus": {
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
            "name"           : "Convocation Scout",
            "requirement"    : [],
            "description"    : [
                "The Convocation is the biggest, most anticipated academic event in recent years. Eager to create long-lasting alliances as well as recruit promising students or staff to their own ranks, your school has sent you as a representative to advance their interests. Your tact, analytical ability, and gift for communication serve you well in scouting profitable partnerships with the Convocation's other sponsors and guests.",
                "Choose two attribute boosts. One must be to Wisdom or Charisma, and one is a free attribute boost.",
                "You're trained in Diplomacy. You're also trained in the Politics Lore skill or a Lore skill associated with your school. You gain the Group Impression skill feat."
            ],
            "gift_skill"     : [
                "Impression de groupe"
            ],
            "characteristics_bonus": {
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
                        "characteristic": "CHA",
                        "need_qualifier": true
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
            "name"           : "Convoyeur de fonds",
            "requirement"    : [],
            "description"    : [
                "Lorsque de l'argent, des biens ou des marchandises doivent être transportés sur de grandes distances, les convoyeurs de fonds sont plus efficaces et plus dignes de confiance que les mercenaires locaux. Vous connaissez les tenants et les aboutissants des routes commerciales et les protocoles qui les accompagnent. Si certains vous considèrent comme un aventurier ou un mercenaire ordinaire, vous savez que vous pouvez faire le travail mieux et plus sûrement que n'importe qui d'autre."
            ],
            "gift_skill"     : ["Professionnel expérimenté"],
            "characteristics_bonus": {
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
                        "qualifier"     : "soit du travail soit du mercenariat"
                    }
                ]
            }
        },
        {
            "name"           : "Coursier",
            "requirement"    : [],
            "description"    : [
                "Vous avez servi de messager pour une faction spécifique, une guilde, une maison ou un individu, devant fréquemment courir pour délivrer ces messages sur une brève période de temps. Trouver le plus court chemin pour aller du point A au point B est votre spécialité et vous avez appris à tirer le meilleur parti de vos capacités athétiques et de navigation."
            ],
            "gift_skill"     : [
                "Saut rapide"
            ],
            "characteristics_bonus": {
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
                        "label"         : "Athlétisme",
                        "characteristic": "FOR",
                        "armor_penalty" : true
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de la cité dans laquelle vous avez été un messager"
                    }
                ]
            }
        },
        {
            "name"           : "Criminel",
            "requirement"    : [],
            "description"    : [
                "Vous avez vécu hors-la-loi comme individu indépendant dénué de scrupules ou comme membre d'une organisation criminelle. Vous vous êtes peut-être tourné vers l'aventure pour y trouver la rédemption, pour échapper à la loi, ou simplement dans l'espoir d'obtenir un butin plus conséquent et de meilleure qualité."
            ],
            "gift_skill"     : [
                "Contrebandier expérimenté"
            ],
            "characteristics_bonus": {
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
                        "label"         : "Discrétion",
                        "characteristic": "DEX",
                        "armor_penalty" : true
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de la Pègre"
                    }
                ]
            }
        },
        {
            "name"           : "Croisé du Geb",
            "requirement"    : [
                "Région - Terres impossibles"
            ],
            "description"    : [
                "Vous avez grandi en considérant que la nation morte-vivante du Geb est une atrocité et vous vous êtes entraîné pour pouvoir un jour prendre part à sa destruction en donnant ainsi un repos définitif à ses abominables habitants. Un élément de vos préparatifs est une étude approfondie de Pharasma, d'Urgathoa et d'autres divinités en lien avec les morts-vivants et leurs philosophies."
            ],
            "gift_skill"     : [
                "Étudiant du droit canon"
            ],
            "characteristics_bonus": {
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
                        "label"         : "Religion",
                        "characteristic": "SAG"
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
            "name"           : "Croque-mort",
            "requirement"    : [],
            "description"    : [
                "Les gens meurent. C'est la malheureuse réalité sur laquelle vous avez fondé votre entreprise, car partout où des gens meurent, il y a une demande de services mortuaires. Vous pouvez être un prêtre pharasmien ou un professionnel laïc, mais votre travail consiste à vous occuper du corps, à réconforter les personnes en deuil et à vous assurer que le défunt va au devant de sa récompense ultime avec toute la dignité requise. Bien sûr, quelqu'un dans votre position voit beaucoup de morts étranges, et il y a de fortes chances que l'une d'entre elles vous mette sur la voie de l'aventure..."
            ],
            "gift_skill"     : [
                "Perspicacité forensique"
            ],
            "characteristics_bonus": {
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
                        "label"         : "Médecine",
                        "characteristic": "SAG"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "spécialisée dans un type local de mort-vivant"
                    }
                ]
            }
        },
        {
            "name"           : "Cryptographe",
            "requirement"    : [],
            "description"    : [
                "Que vous soyez employé par une organisation militaire pour déchiffrer les messages codés envoyés par des factions ennemies ou que vous travailliez indépendamment pour résoudre une énigme créée par une civilisation passée, vous êtes doué pour les schémas obscurs et la linguistique. Vous pourriez même utiliser de nouveaux dispositifs automatisés pour vous aider dans vos efforts."
            ],
            "gift_skill"     : [
                "Glaner des informations"
            ],
            "characteristics_bonus": {
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
                        "label"         : "Société",
                        "characteristic": "INT"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de la cryptographie"
                    }
                ]
            }
        },
        {
            "name"           : "Cueilleur de racines",
            "requirement"    : [],
            "description"    : [
                "Certaines affections ne peuvent être soignées uniquement par des herbes. Vous avez également appris des remèdes rituels, faisant appel aux esprits de la nature pour soulager les douleurs et préserver du mauvais œil. Partir avec des aventuriers vous a apporté de la compagnie sur la route ainsi qu'une protection contre ceux qui voudraient vous traiter d'imposteur - ou pire."
            ],
            "gift_skill"     : [
                "Magie des racines"
            ],
            "characteristics_bonus": {
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
                        "qualifier"     : "de l'herboristerie"
                    }
                ]
            }
        },
        {
            "name"           : "Cuisinier",
            "requirement"    : [],
            "description"    : [
                "Vous avez été élevé dans les cuisines d'une taverne ou dans un autre établissement où l'on mange et y avez excellé, devenant un cuisinier extraordinaire. Pétrir, cuire, un peu de brassage à côté, vous avez passé beaucoup de temps hors de vue. Il est désormais temps que vous sortiez de votre cuisine pour voir par vous-même le monde extérieur."
            ],
            "gift_skill"     : [
                "Chef"
            ],
            "characteristics_bonus": {
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
                        "label"         : "Survie",
                        "characteristic": "SAG"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de la cuisine"
                    }
                ]
            }
        },
        {
            "name"           : "Cultiste",
            "requirement"    : [],
            "description"    : [
                "Vous avez été (ou êtes encore) un membre d'un culte dont les rites peuvent impliquer des danses sacrées pour assurer une bonne récolte ou des rituels sanglants qui font appel à de sombres pouvoirs. Vous pourriez être parti à l'aventure pour remplir les objectifs de votre culte, pour vous initier aux plus grands mystères du monde ou pour fuir les pratiques répugnantes ou les interdits."
            ],
            "gift_skill"     : [
                "Éduqué dans les secrets"
            ],
            "characteristics_bonus": {
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
                        "label"         : "Occultisme",
                        "characteristic": "INT"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "en lien avec votre divinité ou votre culte"
                    }
                ]
            }
        },
        {
            "name"           : "Cultivateur de soie",
            "requirement"    : [],
            "description"    : [
                "Accès Originaire du Tian Xia",
                "Vous avez étudié et maîtrisé l'art de la sériciculture. L'élevage des vers à soie pour produire de la soie est une industrie importante qui nécessite une quantité intense d'études et de soins. La routine immuable d'un éleveur de vers à soie pourrait rendre n'importe quelle aventure épique en comparaison, et c'est peut-être cette perspective qui vous a poussé à partir à l'aventure."
            ],
            "gift_skill"     : [
                "Artisanat spécialisé"
            ],
            "characteristics_bonus": {
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
                        "label"         : "Artisanat",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "et en Connaissance de la sériciculture"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de la sériciculture"
                    }
                ]
            }
        },
        {
            "name"           : "Danseur du soleil",
            "requirement"    : [],
            "description"    : [
                "On vous a appris que les bénédictions de la Mère Ardente pouvaient être invoquées par des danses effectuées en sa présence, comme pour saluer les premiers rayons de chaleur au printemps. Vous avez pu être l'apprenti d'un lanceur de sorts primordiaux qui souhaitait exploiter le pouvoir du soleil pour ses incantations ou vivre dans une communauté qui vénère la Fille de la Caravane cosmique en manifestant sa vénération pour le soleil. Quoi qu'il en soit, vous avez développé un lien surnaturel avec le soleil.",
                " Si vous utilisez de don en extérieur sous la lumière directe du soleil, vous obtenez un bonus de circonstances de +1 au test de compétence"
            ],
            "gift_skill"     : [
                "Représentation fascinante"
            ],
            "characteristics_bonus": {
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
                    }
                ]
            }
        },
        {
            "name"           : "De sang royal",
            "requirement"    : [],
            "description"    : [
                "Vous êtes un membre proéminent d'une famille royale. Vous avez échappé aux routines quotidiennes de la vie royale et adopté une vie d'aventurier. Peut-être êtes vous une reine déposée qui espère récupérer son trône, un prince cherchant une vie plus exaltante ou un héritier d'un souverain chargé d'une mission secrète.",
                " Si vous obtenez plus tard le don de compétence military_techUtiliser ses relations , vous disposez automatiquement de relations parmi les nobles et les gens du peuple au sein de n'importe laquelle des communautés au sein du territoire de votre famille et vous disposez de relations nobles dans les communautés de grande taille en dehors de votre territoire"
            ],
            "gift_skill"     : [
                "Manières courtoises",
                "Utiliser ses relations"
            ],
            "characteristics_bonus": {
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
                    }
                ]
            }
        },
        {
            "name"           : "Décrocheur d'académie",
            "requirement"    : [],
            "description"    : [
                "Vous étiez inscrit dans une prestigieuse académie de magie, mais vous avez depuis abandonné vos études. Peut-être qu'il y a eu un incident majeur, peut-être que vous avez dû endosser d'autres responsabilités ou peut-être que c'était tout simplement trop pour vous. Quoi qu'il en soit, votre sortie de l'académie a façonné votre vie autant que votre entrée et vous a conduit à une vie d'aventure."
            ],
            "gift_skill"     : [
                "Savoir douteux"
            ],
            "characteristics_bonus": {
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
                        "label"         : "Arcanes",
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
            "name"           : "Dendrologue",
            "requirement"    : [],
            "description"    : [
                "Les arbres grandissent dans chaque biome et votre admiration pour leur capacité à conquérir le terrain vous a incité à étudier plus en profondeur leur fonctionnement. Il y a des arbres partout et votre étude des arbres vous mènera inévitablement plus loin à la recherche de nouvelles variétés, peut-être même jusqu'au Plan du Bois lui-même."
            ],
            "gift_skill"     : [
                "Expertise du terrain"
            ],
            "characteristics_bonus": {
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
                        "label"         : "Survie",
                        "characteristic": "SAG"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "du plan du bois"
                    }
                ]
            }
        },
        {
            "name"           : "Descendant de la Mante",
            "requirement"    : [
                "Région - Hautes mers"
            ],
            "description"    : [
                "Au moins un de vos parents est un membre des célèbres assassins de la Mante Rouge, des tueurs à gages sans pitié qui n'échouent que rarement à réclamer leur proie. Que ce soit délibérément ou par une simple exposition, vous êtes entraîné depuis votre jeune âge dans l'art de traquer et de tuer des gens."
            ],
            "gift_skill"     : [
                "Assurance"
            ],
            "characteristics_bonus": {
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
                        "label"         : "Discrétion",
                        "characteristic": "DEX",
                        "armor_penalty" : true
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de l'assassin"
                    }
                ]
            }
        },
        {
            "name"           : "Descendant de la Voie du Murmure",
            "requirement"    : [
                "Région - Œil de l'effroi"
            ],
            "description"    : [
                "Votre famille a longtemps été associée à l'énigmatique Culte de la mort connu sous le nom de la Voie du Murmure, laquelle a récemment été à l'origine de la dévastation terrible de la nation du Dernier-Rempart. Que vous ayez suivi ou non leurs traces, vous connaissez un grand nombre des secrets de cette philosophie."
            ],
            "gift_skill"     : [
                "Étudiant du droit canon"
            ],
            "characteristics_bonus": {
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
                        "qualifier"     : "des morts-vivants"
                    }
                ]
            }
        },
        {
            "name"           : "Descendant de tueurs",
            "requirement"    : [],
            "description"    : [
                "Vous provenez d'une lignée de tueurs de mort-vivant. Ce n'est pas une simple occupation pour votre famille, tuer est un fardeau presque mystique transmis de parent à enfant. Au fil des générations, cette dévotion sans faille a commencé à se manifester de manière étrange pendant le combat.",
                " Vous pouvez lancer le tour de magie auto_awesomeDéchaînement de vitalité comme un tour de magie divin inné",
                " Vous pouvez utiliser l'Intelligence comme attribut d'incantation pour ce sort inné"
            ],
            "spell_free"     : [
                "Déchaînement de vitalité"
            ],
            "characteristics_bonus": {
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
                        "label"         : "Athlétisme",
                        "characteristic": "FOR",
                        "armor_penalty" : true
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
            "name"           : "Désiré vivant",
            "requirement"    : [],
            "description"    : [
                "Auparavant, vous étiez une simple créature artificielle ou une poupée inanimée mais grâce à un souhait profondément ressenti, le vôtre ou celui d'un autre, vous avez pris vie et vous êtes donc maintenant une créature vivante et qui respire.",
                " Une fois par jour, par une action unique ayant le trait concentration, vous pouvez souhaiter avec ferveur quelque chose que vous pouvez vous efforcer de réaliser",
                " Lorsque vous le faites, vous obtenez un bonus de circonstances de +2 au premier test de compétence que vous tentez avant la fin de votre tour pour réaliser ce souhait"
            ],
            "gift_skill"     : [],
            "characteristics_bonus": {
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
                        "label"         : "Diplomatie",
                        "characteristic": "CHA"
                    }
                ]
            }
        },
        {
            "name"           : "Détective",
            "requirement"    : [],
            "description"    : [
                "Vous étiez un inspecteur de police élucidant des crimes ou un détective privé au service de riches clients. Votre présent d'aventurier peut être lié à un mystère que vous cherchez à éclaircir, mais il est dans tous les cas probable que votre situation ait un rapport avec les conséquences d'une précédente affaire."
            ],
            "gift_skill"     : [
                "Savoir urbain"
            ],
            "characteristics_bonus": {
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
                        "label"         : "Société",
                        "characteristic": "INT"
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
            "name"           : "Dévouement persévérant",
            "requirement"    : [],
            "description"    : [
                "Les recruteurs invitent de nombreux candidats comme vous à s'entraîner pour devenir chevaliers de Dernier-Rempart, mais seuls quelques élus font l'affaire. Alors que d'autres perdent courage, votre persévérance a porté ses fruits. Votre engagement pour la cause est si clair qu'il a surmonté tout ce qui a pu disqualifier vos précédentes tentatives pour rejoindre la nouvelle Croisade Étincelante."
            ],
            "gift_skill"     : [
                "Perspicacité astucieuse",
                " military_techPerspicacité astucieuse "
            ],
            "characteristics_bonus": {
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
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de la guerre"
                    }
                ]
            }
        },
        {
            "name"           : "Disciple de l'engrenage",
            "requirement"    : [],
            "description"    : [
                "Alors que beaucoup considèrent la science et la foi comme incompatibles, vous croyez que le progrès scientifique est la volonté de votre divinité. Peut-être êtes-vous un adepte de Brigh, de Casandalee ou d'une autre divinité de la technologie ou peut-être voyez-vous les fourneaux et les étincelles de la modernité comme les récentes manifestations de la flamme de Sarenrae ou de la foudre de Gozreh - quoi qu'il en soit, vous êtes toujours prêt à répandre la parole de votre divinité et vous avez appris la base du bricolage de base pour montrer comment le centre d'intérêt de votre divinité peut augmenter le niveau de vie commun."
            ],
            "gift_skill"     : [
                "Réparation rapide"
            ],
            "characteristics_bonus": {
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
                        "label"         : "Artisanat",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "et en Connaissance de votre divinité"
                    },
                    {
                        "label"         : "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier"     : "de votre divinité"
                    }
                ]
            }
        },
        {
            "name"           : "Disciple martial",
            "requirement"    : [],
            "description"    : [
                "Vous vous êtes dédié vous-même à un entraînement intense et à une étude rigoureuse pour devenir un grand combattant. L'école à laquelle vous appartenez pourrait avoir été un monastère traditionaliste, une académie militaire d'élite ou la branche locale d'une organisation mercenaire prestigieuse.",
                " Vous obtenez un don de compétence"
            ],
            "gift_skill"     : [
                "Chute féline",
                "Saut rapide"
            ],
            "characteristics_bonus": {
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
                        "label"         : "Athlétisme",
                        "characteristic": "FOR",
                        "armor_penalty" : true
                    }
                ]
            }
        },
        {
            "name"           : "Docteur d'arrière salle",
            "requirement"    : [],
            "description"    : [
                "Vous êtes le docteur vers lequel on se tourne lorsqu'un soigneur ou un clinicien plus officiel pourrait ne pas être accessible. Vous pouvez vous être spécialisé dans la couture des blessures par arme à feu ou avoir un accord confidentiel avec une organisation criminelle pour fournir vos services à n'importe quelle heure du jour et de la nuit. Dans les deux cas, vous vous êtes peut-être tourné vers une vie aventurière lorsqu'un client précédent s'est révélé mécontent de votre travail ou lorsque des membres de l'establishment local ont commencé à poser beaucoup de questions."
            ],
            "gift_skill"     : [
                "Chirurgie risquée"
            ],
            "characteristics_bonus": {
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
                        "label"         : "Médecine",
                        "characteristic": "SAG"
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
            "name"           : "Doublure rejetée",
            "requirement"    : [],
            "description"    : [
                "Quelqu'un vous a créé dans un but précis. Une personne importante - qu'il s'agisse d'une famille royale, d'un politicien ou d'un chef militaire - avait besoin d'une doublure pour ses apparitions les plus dangereuses. Grâce à un mélange de science marginale et de magie, vous avez été commissionné et entraîné pour imiter cette personne en tout point et l'avez remplacée dans d'innombrables circonstances mortelles. Vous connaissez peut-être ou pas la raison de votre mise à l'écart mais celui qui vous a rejeté ne vous a pas achevé. Maintenant, le monde est à vous pour l'explorer - mais \"vous\" pouvez avoir une réputation audacieuse ou brutale ou l'individu que vous avez ainsi doublé peut être mort depuis longtemps. Quel que soit le sort de cet individu, votre mode de vie a radicalement changé.",
                "Vous et le MJ pouvez trouver un moyen d'intégrer votre vie antérieure dans votre histoire. Le MJ peut garder cette connaissance cachée même pour vous à moins que vous ou un autre personnage sachiez ce qui s'est passé. Vous et le MJ pouvez également laisser l'information en suspens et la compléter plus tard.",
                "Vous gagnez trois primes d'attributs libres. Vous en choisissez deux et le MJ en choisit une en fonction des attributs du personnage que vous avez été construit pour dupliquer."
            ],
            "gift_skill"     : [],
            "characteristics_bonus": {
                "number": 3,
                "choice": [
                    "FRE",
                    "FRE",
                    "FRE"
                ]
            }
        },
        {
            "name"           : "Dresseur",
            "requirement"    : [],
            "description"    : [
                "Vous avez toujours eu un lien particulier avec les animaux et il vous a donc semblé naturel de devenir dresseur. Vous rencontrez constamment de nouvelles créatures lors de vos voyages et ne perdez pas une occasion de vous en faire des amies."
            ],
            "gift_skill"     : [
                "Dressage Animalier"
            ],
            "characteristics_bonus": {
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
                        "qualifier"     : "à un terrain occupé par les animaux que vous appréciez"
                    }
                ]
            }
        },{
            "name": "Éclaireur",
            "requirement": [],
            "description": [
                "La nature a été votre seconde maison lorsque vous découvriez des sentiers et guidiez des voyageurs. C'est peut-être votre soif de voyages qui vous a poussé à partir à l'aventure, ou vous avez découvert, en servant d'éclaireur à des soldats, que vous aviez pris goût aux combats."
            ],
            "gift_skill": [
                "Glaneur"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "DEX",
                    "SAG",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Survie",
                        "characteristic": "SAG"
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "liée à un type de terrain dans lequel vous avez déjà effectué une reconnaissance"
                    }
                ]
            }
        },
        {
            "name": "Éclaireur de la Concordance",
            "requirement": [],
            "description": [
                "Vous avez été embauché par la Concordance des éléments pour rechercher des rumeurs de failles planaires ou d'autres preuves de déséquilibres planaires. Lorsque vous les aurez signalées à la Concordance, elle enverra des agents beaucoup mieux équipés pour résoudre la situation. Pourtant, ce travail vous a attiré plus d'ennuis que vos employeurs ne le soupçonnent et vous avez appris à obtenir vos informations rapidement et à vous en sortir relativement indemne."
            ],
            "gift_skill": [
                "Animal social"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "CON",
                    "CHA",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Diplomatie",
                        "characteristic": "CHA"
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "d'un Plan"
                    }
                ]
            }
        },
        {
            "name": "Écuyer",
            "requirement": [],
            "description": [
                "Vous vous êtes entraîné aux pieds d'un Chevalier, fourbissant son équipement et l'encourageant durant les tournois ou les batailles. Maintenant vous recherchez un défi qui prouvera que vous êtes capable d'être fait à votre tour Chevalier ou vous avez repoussé la pompe et le cérémonial pour vous tester dans un combat honnête mais moins formel."
            ],
            "gift_skill": [
                "Aide armure"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "FOR",
                    "CON",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Athlétisme",
                        "characteristic": "FOR",
                        "armor_penalty": true
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "de l'héraldique ou de la guerre"
                    }
                ]
            }
        },
        {
            "name": "Élevé dans la Foi",
            "requirement": [],
            "description": [
                "Que ce soit dans un monastère, une enclave religieuse ou juste comme une partie de votre vie quotidienne, vous avez été éduqué dans les traditions d'une foi ou d'une philosophie. Vous pouvez y rester dévoué ou avoir tourné le dos aux principes de votre enfance mais vos compétences restent toujours fondées sur votre ancienne dévotion."
            ],
            "gift_skill": [
                "Assurance"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "d'Abadar, par exemple"
                    }
                ]
            }
        },
        {
            "name": "Élu",
            "requirement": [],
            "description": [
                "Votre naissance a réalisé une prédiction et vos proches comptent sur vous pour réaliser de grandes choses. Une pression intense s'exerce sur vous pour que vous soyez à la hauteur de la tâche et la nature inconstante de la prophétie complique votre chemin.",
                " Vous obtenez l'action gratuite sports_martial_artsJouet de la prophétie ",
                "Note: Vous devez sélectionner la compétence manuellement et ajouter l'action Jouet de la Prophétie."
            ],
            "gift_skill": [
                "Jouet de la prophétie"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "FOR",
                    "CHA",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "de la voyance"
                    }
                ]
            }
        },
        {
            "name": "Émissaire",
            "requirement": [],
            "description": [
                "Remplissant le rôle de diplomate ou de messager, vous avez énormément voyagé. Votre quotidien consistait à communiquer avec de nouvelles personnes et à former des alliances.\n"
            ],
            "gift_skill": [
                "Polyglotte"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "INT",
                    "CHA",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Société",
                        "characteristic": "INT"
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "en lien avec une cité dans laquelle vous vous êtes souvent rendu"
                    }
                ]
            }
        },
        {
            "name": "Enfant des rues",
            "requirement": [],
            "description": [
                "Vous vous efforciez de survivre en faisant les poches aux passants dans les artères d'une grande ville, sans jamais savoir quand serait votre prochain repas. Si certaines personnes se tournent vers l'aventure pour la gloire, pour vous c'est une question de survie."
            ],
            "gift_skill": [
                "Vol à la tire"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "DEX",
                    "CON",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Vol",
                        "characteristic": "DEX",
                        "armor_penalty": true
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "correspondant à la cité dans laquelle vous avez vécu comme enfant des rues"
                    }
                ]
            }
        },
        {
            "name": "Enfant du village de jumeaux",
            "requirement": [],
            "description": [
                "Vous êtes né dans un village où tout le monde possède un jumeau avec un lien spécial. Vous avez déménagé dans le vaste monde pour des raisons personnelles, mais vous avez toujours un lien indéfectible avec votre jumeau à travers vos rêves.",
                " Vous obtenez la capacité de communiquer avec votre jumeau par le biais de vos rêves",
                " Vous et votre jumeau obtenez les effets d'un auto_awesomeMessage onirique chaque nuit, seulement entre vous deux ; ceci n'est pas un sort, mais un effet naturel",
                " À moins que votre jumeau ne soit un autre PJ, votre MJ jour votre jumeau ou résume votre interaction au cours de ces rêves"
            ],
            "gift_skill": [
                "Message onirique"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "CON",
                    "CHA",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Diplomatie",
                        "characteristic": "CHA"
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "du Pays des rêves"
                    }
                ]
            }
        },
        {
            "name": "Enfant sauvage",
            "requirement": [],
            "description": [
                "Vous avez passé votre jeunesse dans les étendues sauvages, en vivant à proximité ou en ayant été élevé par des animaux. Vous avez un lien proche et mystique avec ces animaux et obtenu avec eux certaines capacités, bien que cela ait aussi limité votre épanouissement mental.",
                "Choisissez une prime d'attribut. Elle doit être de Force, de Dextérité ou de Constitution.",
                " Vous obtenez vision nocturne (ou vision dans le noir si vous possédez déjà vision nocturne), un sens imprécis avec une portée de 9 m et le don de compétence military_techGlaneur "
            ],
            "gift_skill": [
                "Glaneur"
            ],
            "skills": {
                "qualify": [
                    {
                        "label": "Nature",
                        "characteristic": "SAG"
                    },
                    {
                        "label": "Survie",
                        "characteristic": "SAG"
                    }
                ]
            }
        },
        {
            "name": "Enquêteur de source magique",
            "requirement": [],
            "description": [
                "Des rivières qui charment tous ceux qui s'en approchent aux forêts qui parlent à travers des messages oniriques, vous avez vu et étudié de nombreux types de terrains magiques. Le monde est si riche en magie qu'elle peut affecter la terre elle-même. Comme vous avez beaucoup voyagé pour apprendre, vous avez les moyens d'identifier les bizarreries des terrains magiques où qu'ils se présentent."
            ],
            "gift_skill": [
                "Expertise du terrain"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "CON",
                    "SAG",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Nature",
                        "characteristic": "SAG"
                    },
                    {
                        "label": "Occultisme",
                        "characteristic": "INT"
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "des terrains magiques"
                    }
                ]
            }
        },
        {
            "name": "Enseignant",
            "requirement": [],
            "description": [
                "Vous êtes incroyablement savant, compétent et peut-être même habilité à enseigner aux enfants et aux adultes le monde et ses merveilles. Des livres aux classes, vous vous êtes donné pour objectif de transmettre vos connaissances à tous. Tout ne peut cependant pas être appris ou enseigné à partir des livres, raison pour laquelle vous êtes devenu un aventurier pour apprendre des sujets plus directement et pour pouvoir rapporter cette compréhension à vos élèves."
            ],
            "gift_skill": [
                "Professionnel expérimenté"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "INT",
                    "SAG",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Société",
                        "characteristic": "INT"
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "universitaire"
                    }
                ]
            }
        },
        {
            "name": "Ermite",
            "requirement": [],
            "description": [
                "Dans un lieu reculé, que ce soit une caverne, une oasis isolée ou cloîtré dans un manoir, vous avez vécu une vie solitaire. L'aventure peut être un répit bienvenu de la solitude ou un changement non désiré, mais dans tous les cas, il est probable que vous soyez encore un peu rugueux sur les bords."
            ],
            "gift_skill": [
                "Savoir douteux"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "CON",
                    "INT",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Occultisme",
                        "characteristic": "INT"
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "liée au type de terrain où vous avez vécu quand vous étiez un ermite"
                    }
                ]
            }
        },
        {
            "name": "Érudit",
            "requirement": [],
            "description": [
                "Vous avez toujours eu des facilités pour apprendre et vous vous êtes ainsi vous-même coupé du monde pour assimiler tout ce que vous pouviez. Vous en avez découvert tant de choses et de lieux merveilleux dans vos lectures, en rêvant toujours du jour où vous pourriez les voir réellement. Finalement, la curiosité vous a conduit à abandonner vos études pour devenir un aventurier.",
                " Vous êtes également qualifié dans la compétence Connaissance universitaire"
            ],
            "gift_skill": [
                "Assurance"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "INT",
                    "SAG",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Occultisme",
                        "characteristic": "INT"
                    },
                    {
                        "label": "Religion",
                        "characteristic": "SAG"
                    }
                ]
            }
        },
        {
            "name": "Étudiant en magie",
            "requirement": [],
            "description": [
                "Vous êtes actuellement inscrit dans une école de magie, où vous apprenez les bases de votre tradition magique. Que vos aventures aient lieu pendant les pauses entre les semestres, dans le cadre d'un programme d'alternance ou même dans les couloirs de l'académie elle-même, vous devrez apprendre à jongler avec votre double vie."
            ],
            "gift_skill": [
                "Reconnaître des sorts"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "INT",
                    "SAG",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Occultisme",
                        "characteristic": "INT"
                    },
                    {
                        "label": "Religion",
                        "characteristic": "SAG"
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "universitaire"
                    }
                ]
            }
        },
        {
            "name": "Expérience magique",
            "requirement": [],
            "description": [
                "À un moment de votre vie, des personnes puissantes ont réalisé sur vous des expériences magiques qui vous ont changé de façon permanente. Vous vous êtes peut-être engagé volontairement, mais il se peut que ce soit contre votre volonté. Vous en portez toujours les marques, ainsi que les capacités.",
                "Choisissez une prime d'attribut.. Elle doit être de Constitution.",
                " Vous obtenez une capacité spéciale résultant de l'expérience magique réalisée sur vous",
                " Consultez le Maître de jeu afin de sélectionner une capacité appropriée de la liste suivante ou proposez une autre capacité spéciale"
            ],
            "gift_skill": [],
            "skills": {
                "qualify": [
                    {
                        "label": "Occultisme",
                        "characteristic": "INT"
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "universitaire"
                    }
                ]
            }
        },
        {
            "name": "Fabricant de jouets",
            "requirement": [],
            "description": [
                "Vous vous délectez à fabriquer de petites babioles pour les enfants de tous âges et voir leur visage s'illuminer grâce à l'une de vos créations vous met le cœur en joie. Peut-être vendez-vous vos marchandises dans une boutique particulière ou à l'arrière d'un chariot lorsque vous voyagez de ville en ville."
            ],
            "gift_skill": [
                "Artisanat spécialisé"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "INT",
                    "CHA",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Artisanat",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "et en Connaissance commerciale"
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "commerciale"
                    }
                ]
            }
        },
        {
            "name": "Faux médium",
            "requirement": [],
            "description": [
                "Il existe dans ce monde des personnes qui possèdent la capacité de percer le voile entre le monde des vivants et celui des morts, ce qui leur permet de communiquer avec les esprits. Vous... n'êtes pas l'un d'entre eux. Mais vous en savez assez sur l'occulte ainsi que sur les trucs de mentalistes et les diverses pratiques des religions locales, pour vous frayer un chemin dans les porte-monnaie des gens. À la différence d'un charlatan pur et dur, il y a une véritable méthodologie occulte derrière votre escroquerie, mais c'est probablement un piètre réconfort pour les personnes que vous escroquez. Que vous ayez décidé d'emprunter une voie plus juste, que vous ayez été pris et que vous vous soyez engagé à réparer les dégâts, ou que vous glissiez encore quelques \"séances\" entre deux aventures, vous avez adopté un style de vie d'aventurier en vous déplaçant d'un endroit à l'autre."
            ],
            "gift_skill": [
                "Culte trompeur"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "INT",
                    "CHA",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Occultisme",
                        "characteristic": "INT"
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "de la voyance"
                    }
                ]
            }
        },
        {
            "name": "Forçat des mers",
            "requirement": [],
            "description": [
                "Aviez vous bu cinq ou six coups ? Ce n'est pas si important en fin de compte car après que ces braves gens vous aient payé à boire, vous vous êtes réveillé tout en bas de l'échelle. Que ce soit comme membre d'équipage, conscrit dans une armée ou pire, vous ne pouvez aller nulle part, sauf vous élever. Cet historique nécessite généralement l'adhésion de l'ensemble du groupe pour partir d'une histoire vous permettant d'incarner un personnage qui part à l'aventure en raison de circonstances indépendantes de sa volonté. Cependant, vous pouvez aussi jouer un personnage qui a été un jour forçat des mers et qui a, depuis, échappé à cette vie. Dans ce cas, l'historique perd le trait peu courant et il garde les mêmes effets en terme de mécaniques."
            ],
            "gift_skill": [
                "Aide armure"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "FOR",
                    "SAG",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Athlétisme",
                        "characteristic": "FOR",
                        "armor_penalty": true
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "du travail"
                    }
                ]
            }
        },
        {
            "name": "Forgeron d'alliage",
            "requirement": [],
            "description": [
                "Si la forge est sans aucun doute une profession ancienne, vous êtes à la pointe du progrès. Vous avez étudié les propriétés des différents métaux, vous les avez expérimentés en les combinant, en les exposant à différents éléments et procédés et vous avez même plongé dans la nature métaphysique du métal dans votre quête pour le maîtriser. Vous êtes peut-être parti à l'aventure pour acquérir davantage de fonds et de matériaux ou pour tester vos créations."
            ],
            "gift_skill": [
                "Artisanat spécialisé"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "FOR",
                    "INT",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Artisanat",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "et en Connaissance du Plan du Métal"
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "du Plan du Métal"
                    }
                ]
            }
        },
        {
            "name": "Garçon de course",
            "requirement": [],
            "description": [
                "Dans votre jeunesse, vous avez gagné de l'argent en transportant des messages pour des personnes fortunées et d'influence, vous faufilant dans les rues des villes bondées. Votre ténacité à délivrer votre message a été un bon entraînement pour une vie d'aventure."
            ],
            "gift_skill": [
                "Glaner des informations"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "DEX",
                    "INT",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Société",
                        "characteristic": "INT"
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "de la cité dans laquelle vous avez été élevé"
                    }
                ]
            }
        },
        {
            "name": "Garde",
            "requirement": [],
            "description": [
                "Vous avez servi dans la garde, par patriotisme ou pour pour la solde. Dans un cas comme dans l'autre, vous avez appris à faire parler un suspect réticent. Après avoir quitté la garde, vous pourriez penser que partir à l'aventure sera l'occasion de mettre en œuvre vos compétences plus largement."
            ],
            "gift_skill": [
                "Contrainte rapide"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "FOR",
                    "CHA",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Intimidation",
                        "characteristic": "CHA"
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "juridique ou de la guerre"
                    }
                ]
            }
        },
        {
            "name": "Gardien du feu",
            "requirement": [],
            "description": [
                "Que vous ayez combattu des incendies dans la nature ou dans les rues bondées de la ville, vous avez eu votre lot de flammes incontrôlées. Vous avez lutté contre d'épaisses fumées et des émanations toxiques, vous avez brisé des obstacles pour sauver des personnes prises au piège d'une tombe enflammée et vous avez étudié la nature et la source du feu lui-même pour essayer de mieux apprendre à le combattre."
            ],
            "gift_skill": [
                "Contrôle de la respiration"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "FOR",
                    "CON",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Athlétisme",
                        "characteristic": "FOR",
                        "armor_penalty": true
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "du Plan du Feu"
                    }
                ]
            }
        },
        {
            "name": "Gladiateur",
            "requirement": [],
            "description": [
                "Vous avez appris à vous battre lors des sanglants jeux de l'arène. Vous avez cependant quitté l'arène (ou vous vous êtes enfui) avant d'y atteindre la gloire. Votre capacité à faire couler le sang et à éveiller l'intérêt des foules vous est utile dans votre nouvelle vie d'aventurier."
            ],
            "gift_skill": [
                "Représentation impressionnante"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "FOR",
                    "CHA",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Représentation",
                        "characteristic": "CHA"
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "des gladiateurs"
                    }
                ]
            }
        },
        {
            "name": "Guérisseur (curandero)",
            "requirement": [],
            "description": [
                "Vous avez appris les arts de la guérison de votre communauté en maniant votre chonta cérémoniale, un outil que vous avez sculpté vous-même et imprégné d'huiles et d'herbes sacrées. Ce processus vous a ouvert les yeux sur des maux de nature plus mystique : esprits maléfiques, hantises, possession, etc. Vous vous êtes probablement lancé dans l'aventure pour combattre ces horreurs ou vous avez peut-être fui un mal que vous n'aviez pas le pouvoir de vaincre."
            ],
            "gift_skill": [
                "Vaccination"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "CON",
                    "SAG",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Médecine",
                        "characteristic": "SAG"
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "de l'herboristerie"
                    }
                ]
            }
        },
        {
            "name": "Guetteur",
            "requirement": [],
            "description": [
                "Un œil pour les détails, le sens du vent et une confiance aiguë en votre intuition. Ces qualités vous distinguent des autres lorsqu'il s'agit de permettre à un tireur d'élite à effectuer le tir parfait contre sa cible. L'élévation, la vitesse et la dissimulation - Ce sont autant de facteurs essentiels qui doivent être pris en compte pour réussir un véritable exploit de tireur et aucun sniper ne pourrait en être capable sans un guetteur expérimenté. Depuis votre plus jeune âge, vous mettez vos compétences de guetteur à profit pour travailler en tant qu'aventurier. Que vous effectuiez désormais vos propres tirs ou que vous soyez le guetteur pour les autres, vos talents vous donnent un avantage dans une carrière d'aventurier."
            ],
            "gift_skill": [
                "Traqueur de terrain"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "DEX",
                    "SAG",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Discrétion",
                        "characteristic": "DEX",
                        "armor_penalty": true
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "du métier d'éclaireur"
                    }
                ]
            }
        },
        {
            "name": "Hanté",
            "requirement": [],
            "description": [
                "Vous êtes poursuivi par un esprit ou une entité, soit depuis votre enfance, soit à la suite d'un évènement majeur. Vous et d'autres pourriez avoir vu cette entité. Vous avez étudié des sujets ésotériques en tentant de comprendre votre situation mais cette présence dans votre vie reste un mystère. Quelle que soit cette entité ou ce qu'elle veut, cela influence votre vie de manière subtile, et pas toujours pour le meilleur. Quelques fois, cette entité vous aide, mais à d'autres moments, son influence est malveillante ou dangereuse. L'entité a davantage tendance à faire surface lors de situations stressantes.",
                " Chaque fois que vous faites un test de compétence avec la compétence accordée par l'entité, le MJ peut vous attribuer un bonus de circonstances au test de +1, comme si l'entité vous sports_martial_artsAidait ",
                " Si vous acceptez cette aide mais que vous obtenez un échec sur le test, vous êtes sentiment_very_dissatisfiedEffrayé 2 (Effrayé 4 en cas d'échec critique)",
                " La valeur initiale de l'état Effrayé ne peut être réduite par des effets qui réduiraient ou empêcheraient la manifestation de l'état (comme la bravoure du guerrier)"
            ],
            "gift_skill": [
                "Aidait",
                "Effrayé 2"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "SAG",
                    "CHA",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Occultisme",
                        "characteristic": "INT"
                    }
                ]
            }
        },
        {
            "name": "Herboriste",
            "requirement": [],
            "description": [
                "Vous avez suivi une formation officielle d'apothicaire ou avez pratiqué la médecine populaire à la campagne et vous connaissez les propriétés médicinales des herbes. Vous savez récolter les bons remèdes naturels dans toutes sortes d'environnements et les préparer comme il se doit."
            ],
            "gift_skill": [
                "Médecine naturelle"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "CON",
                    "SAG",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Nature",
                        "characteristic": "SAG"
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "de l'herboristerie"
                    }
                ]
            }
        },
        {
            "name": "Héritage du marteau",
            "requirement": [],
            "description": [
                "Votre introduction à la vie criminelle a été inspirée par un marteau apparemment inoffensif qui vous a fourni toutes sortes d'idées criminelles innovantes. Depuis, vous ne l'avez plus en votre possession, mais de temps en temps, vous entendez un léger murmure qui vous pousse à commettre des crimes."
            ],
            "gift_skill": [
                "Tour de passe-passe"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "DEX",
                    "CHA",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Vol",
                        "characteristic": "DEX",
                        "armor_penalty": true
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "de l'ingénierie"
                    }
                ]
            }
        },
        {
            "name": "Homme d'armes",
            "requirement": [],
            "description": [
                "Dans votre jeunesse, vous avez combattu en tant que mercenaire, guerrier défendant un peuple nomade ou membre d'une milice ou d'une armée. Vous avez peut-être eu envie de vous affranchir de la structure hiérarchique de ces forces armées, mais vous pouvez également avoir toujours été un guerrier indépendant."
            ],
            "gift_skill": [
                "Regard intimidant"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "FOR",
                    "CON",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Intimidation",
                        "characteristic": "CHA"
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "de la guerre"
                    }
                ]
            }
        },
        {
            "name": "Hors-la-loi d'Alkenastre",
            "requirement": [],
            "description": [
                "Vous êtes un hors-la-loi dont le premier crime a été de voler des armes de l'armurerie d'Alkenastre, ce qui vous a permis de commencer une série de crimes aux proportions épiques. Vous ne savez pas où votre route se termine, mais ce sera probablement une affaire sanglante. La vie d'un aventurier pourrait même être un soulagement par rapport à une vie éternellement passée à fuir des autorités d'Alkenastre et de leurs alliés."
            ],
            "gift_skill": [
                "Vol subtil"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "DEX",
                    "CON",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Vol",
                        "characteristic": "DEX",
                        "armor_penalty": true
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "de la pègre"
                    }
                ]
            }
        },
        {
            "name": "Hôte consentant",
            "requirement": [],
            "description": [
                "Vous parlez à des esprits que vous seuls pouvez percevoir : lambeaux d'âme perdues, gardiens des maisonnées, esprits ancestraux et autres entités. Vous pouvez négocier avec ces êtres, les laisser entrer dans votre corps pour qu'ils vous transmettent des connaissances ou vous aident dans une tâche en échange d'une faveur."
            ],
            "gift_skill": [
                "Accueillir un esprit"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "SAG",
                    "CHA",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "des esprits"
                    }
                ]
            }
        },
        {
            "name": "Imprégné par les éléments",
            "requirement": [],
            "description": [
                "Vous avez été exposé à une violente explosion d'essence élémentaire provenant directement d'un Plan élémentaire, probablement causée par une brèche planaire. Votre corps a absorbé l'essence élémentaire sans effets néfastes et elle se concentre maintenant en vous. Avec le temps, vous avez appris à projeter la puissance élémentaire d'une manière sûre pour vous, mais toujours dangereuse pour les autres.",
                " Vous obtenez aussi un tour de magie correspondant au plan choisi :"
            ],
            "gift_skill": [
                "Coup de vent",
    "Lecture de racine",
    "Jaillissement",
    "Allumage",
    "Fléchettes aiguilles",
    "Projection d'éboulis"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "CON",
                    "CHA",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "correspondante a votre élément"
                    }
                ]
            }
        },
        {
            "name": "Imprimeur",
            "requirement": [],
            "description": [
                "En prenant le pouls de la ville, vous rédigez un petit journal d'information destiné à être vendu au coin des rues. Vous louez l'usage d'une presse à imprimer pour atteindre cet objectif et vous êtes donc familier avec ces machines. Cependant, les gens et leurs histoires sont votre principal centre d'intérêt et vous partez à l'aventure pour chasser le dernier scoop."
            ],
            "gift_skill": [
                "Polyglotte"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "INT",
                    "CHA",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Société",
                        "characteristic": "INT"
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "du copiste"
                    }
                ]
            }
        },
        {
            "name": "Insurgé",
            "requirement": [],
            "description": [
                "Vous avez été plus qu'un rebelle : vous avez été un révolutionnaire, combattant pour la promesse d'un nouveau ou d'un meilleur pays. Vous croyez encore ou non en cette cause ou peut-être que la victoire ou l'exil vous ont conduit sur cette nouvelle voie pour faire rayonner votre gloire à moins qu'il ne s'agisse d'échapper aux conséquences de votre défaite."
            ],
            "gift_skill": [
                "Diversion interminable"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "FOR",
                    "SAG",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Duperie",
                        "characteristic": "CHA"
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "de la guerre"
                    }
                ]
            }
        },
        {
            "name": "Juge itinérant",
            "requirement": [],
            "description": [
                "Vous êtes un juge itinérant, un tribunal à cheval qui dessert un groupe de communautés dans la Désolation de Mana ou une région reculée similaire. Vous vous présentez tous les deux mois, vous entendez les affaires qui se sont empilées depuis votre dernière visite, vous rendez vos verdicts et c'est reparti pour la prochaine ville de votre itinéraire. Ce n'est pas la vie la plus facile du monde, mais c'est une vie intéressante et vous entendez des cas très étranges. Il y a de fortes chances que ce soit l'une de ces affaires qui vous ait mis sur la voie de l'aventure."
            ],
            "gift_skill": [
                "Ose me mentir"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "INT",
                    "SAG",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Duperie",
                        "characteristic": "CHA"
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "juridique"
                    }
                ]
            }
        },
        {
            "name": "Lié avec les fées",
            "requirement": [],
            "description": [
                "Vous avez passé du temps dans le Premier Monde ou un autre royaume des fées et n'êtes plus entièrement la personne que vous étiez auparavant. Peut-être avez vous acquis quelque chose sur le légendaire marché des sorciers ou avez partagé profondément la nourriture et le vin des fées. Quel que soit ce qui vous est arrivé, par inadvertance ou de manière volontaire, vous avez passé un marché avec les fées dont les avantages viennent aussi avec un inconvénient.",
                " Vous devez en échange suivre une certaine règle ou une limitation comme contrepartie à votre pacte avec les fées",
                " Si vous violez cette règle, vous perdez Chance féerique jusqu'à ce que vous receviez les effet d'un rituel de auto_awesomePénitence en utilisant la compétence Nature",
                " La limitation exacte se décide avec votre MJ mais la plus courante est celle qui vous impose de remplir une unique requête de toute fée qui connaît votre nom"
            ],
            "gift_skill": [
                "Chance féerique",
                "Pénitence"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "DEX",
                    "CHA",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "des fées"
                    }
                ]
            }
        },
        {
            "name": "Lithothérapeute",
            "requirement": [],
            "description": [
                "Les formations minérales peuvent être de belles choses, étincelantes et disposées dans des configurations géométriques. Pour vous, ce sont aussi de puissantes aides naturelles à la guérison. Vous vous êtes peut-être lancé dans l'aventure pour faire vos preuves en soignant les malades ou pour trouver de nouveaux cristaux aux propriétés uniques à ajouter à votre collection grandissante."
            ],
            "gift_skill": [
                "Médecine naturelle"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "SAG",
                    "CHA",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Nature",
                        "characteristic": "SAG"
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "du plan de la Terre"
                    }
                ]
            }
        },
        {
            "name": "Manoeuvre",
            "requirement": [],
            "description": [
                "Vous avez passé des années à exercer un pénible travail physique. C'était une période difficile, mais vous avez réussi à survivre. Vous vous êtes peut-être tourné vers l'aventure car vous y voyez une méthode plus simple de vous faire une place dans le monde, ou bien vous accompagnez quelqu'un dont vous êtes sous les ordres."
            ],
            "gift_skill": [
                "Portefaix"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "FOR",
                    "CON",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Athlétisme",
                        "characteristic": "FOR",
                        "armor_penalty": true
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "du travail"
                    }
                ]
            }
        },
        {
            "name": "Marchand",
            "requirement": [],
            "description": [
                "Votre précédente activité consistait à vendre des produits et échanger des biens, peut-être dans une boutique poussiéreuse, derrière un étal de marché, ou dans une caravane marchande. Les compétences que vous avez acquises vous servent dans votre nouvelle vocation d'aventurier, dans le cadre de laquelle votre capacité à obtenir une réduction sur le prix d'une bonne armure pourra vous sauver la vie."
            ],
            "gift_skill": [
                "Chasseur de bonnes affaires"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "INT",
                    "CHA",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Diplomatie",
                        "characteristic": "CHA"
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "commerciale"
                    }
                ]
            }
        },
        {
            "name": "Marchand d'armes de la Main d'or",
            "requirement": [],
            "description": [
                "Vous êtes un agent nain de la Loge de la Main d'or, un ensemble de marchands nains basés à Fort Dongun qui cherche à vendre des armes à feu à grande échelle. Le Grand Roi Anong Arunak n'a pas encore donné son accord pour une telle méthode de distribution mais en attendant, vous êtes toujours en déplacement, vantant les mérites de vos produits et faisant occasionnellement des démonstrations palpables de l'écrasante puissance d'arrêt de vos armes à feu. Ces démonstrations et ces ventes vous ont donné le goût de l'aventure et la menace constante de la piraterie vous a convaincu de l'importance de partir à l'aventure en groupe."
            ],
            "gift_skill": [
                "Bonne impression de groupe"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "DEX",
                    "CHA",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Diplomatie",
                        "characteristic": "CHA"
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "commerciale"
                    }
                ]
            }
        },
        {
            "name": "Marchand magique",
            "requirement": [],
            "description": [
                "Vendre des objets magiques n'est pas comme être un marchand ordinaire. Les marchandises que vous achetez et vendez sont coûteuses, ce qui rend chaque vente rare et lucrative. Vous avez développé des connaissances en matière de fabrication experte pour vous assurer de ne pas vous faire arnaquer car l'achat d'un seul article contrefait peut vous conduire à la faillite. Que vous ayez fait faillite et ayez dû trouver un autre emploi ou que vous vous soyez lancé dans l'aventure pour acquérir de nouvelles marchandises, vous vous êtes lancé de vous-même à l'aventure."
            ],
            "gift_skill": [
                "Évaluation de l'artisan"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "INT",
                    "CHA",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Artisanat",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "et en Connaissance commerciale"
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "commerciale"
                    }
                ]
            }
        },
        {
            "name": "Marginal de la magie",
            "requirement": [],
            "description": [
                "Vous ne comprenez pas les gens qui prétendent que le talent magique est une sorte de charge qui engendre d'importantes responsabilités. Vous avez toujours utilisé votre magie pour causer des ennuis et en fuir les conséquences. Que devenir aventurier soit votre tentative de vous racheter ou simplement une nouvelle façon de faire des bêtises, vous êtes enthousiaste à l'idée de voir où cela vous mènera et vous prenez toujours plaisir à utiliser vos compétences pour vous sortir d'affaire."
            ],
            "gift_skill": [
                "Usurpation d'objet magique"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "INT",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Arcanes",
                        "characteristic": "INT"
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "de la pègre"
                    }
                ]
            }
        },
        {
            "name": "Marin",
            "requirement": [],
            "description": [
                "Vous avez entendu l'appel de la mer dès votre jeune âge. Vous avez peut-être rejoint un vaisseau marchand, la marine, ou un équipage de pirates et de vauriens."
            ],
            "gift_skill": [
                "Maraudeur aquatique"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "FOR",
                    "DEX",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Athlétisme",
                        "characteristic": "FOR",
                        "armor_penalty": true
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "de la navigation maritime"
                    }
                ]
            }
        },
        {
            "name": "Maudit",
            "requirement": [],
            "description": [
                "Vous être la victime d'une malédiction personnelle ou héréditaire. Par de grands efforts et l'étude occulte, vous avez appris à repousser les pires effets de la malédiction et, par extension, vous pouvez vous protéger contre d'autres magies nuisibles. Quoi qu'il en soit, la malédiction est une épée de Damoclès et se manifeste parfois de dangereuse manière.",
                " Vous obtenez la réaction sports_martial_artsSigne de protection ",
                " Vous et le MJ devriez déterminer les pleins effets de la malédiction, bien que vous soyez parvenu à maîtriser la plupart de ses effets pour le moment",
                " Le MJ détermine les manifestations persistantes de la malédiction qui vous affecte, lesquelles pourraient notamment inclure au moins un effet thématique constant ou très fréquent et des effets occasionnels dangereux"
            ],
            "gift_skill": [
                "Signe de protection"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "INT",
                    "CHA",
                    "FRE"
                ]
            },
            "skills": {
                "qualify": [
                    {
                        "label": "Occultisme",
                        "characteristic": "INT"
                    },
                    {
                        "label": "Connaissance",
                        "characteristic": "INT",
                        "need_qualifier": true,
                        "qualifier": "des malédictions"
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
let toto          = [
    
];