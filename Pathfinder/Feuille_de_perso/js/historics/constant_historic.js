"use strict";
var HISTORICS = {
    key          : "historics",
    label        : "Historiques",
    key_element  : "historic",
    label_element: "Historique",
    ENUM         : [
        {
            "name"                 : "Acolyte",
            "requirement"          : [],
            "description"          : [
                "Vous avez passé votre jeunesse dans un monastère religieux ou un cloître. Vous avez peut-être voyagé afin de répandre la bonne parole de votre religion, ou parce que vous avez rejeté les enseignements de celle-ci. Ces leçons restent cependant gravées en vous."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Religion",
                    "characteristic": "SAG",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "du copiste"
                }
            ]
        },
        {
            "name"                 : "Acrobate",
            "requirement"          : [],
            "description"          : [
                "Vous avez exercé le métier d'acrobate dans un cirque ou dans la rue. Vous vous êtes peut-être tourné vers l'aventure parce que vous ne gagniez plus assez d'argent, ou simplement parce que vous avez décidé de faire autre chose de vos talents."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Acrobaties",
                    "characteristic": "DEX",
                    "armor_penalty" : true,
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "du cirque"
                }
            ]
        },
        {
            "name"       : "Amnésique",
            "requirement": [],
            "description": [
                "Votre historique est... comment dire... honnêtement, vous ne pouvez plus vous en souvenir ! Vous pouvez avoir des impressions au plus profond de votre esprit, des émotions inhabituelles ou des réactions inattendues face à certaines personnes ou situations, mais en fin de compte, vous ne savez pas qui vous étiez auparavant. Il se peut que vous partiez à l'aventure dans le but de le découvrir. C'est à vous et au MJ de décider comment gérer la vérité sur les origines de votre personnage. Vous pouvez laisser au MJ le soin de garder le secret, collaborer avec lui, ou même choisir de ne rien décider avant la fin de la partie. Quoi qu'il en soit, vous et votre MJ devez déterminer quelques détails notables concernant votre personnage ou ses affaires afin d'obtenir les premiers indices sur votre passé.",
                "Vous obtenez trois primes d'attributs. Vous en choisissez deux et le MJ en choisit une troisième basée sur les premières idées de l'histoire possible de votre personnage."
            ],
            "gift_skill" : []
        },
        {
            "name"                 : "Artisan",
            "requirement"          : [],
            "description"          : [
                "Vous avez été apprenti dans un métier impliquant de construire ou confectionner quelque chose et avez ainsi développé une compétence spécialisée. Vous avez peut-être été un apprenti forgeron vous éreintant devant la forge pendant d'innombrables heures, un jeune tailleur confectionnant des vêtements de toutes sortes, ou encore un ouvrier sur un chantier naval façonnant les coques des navires."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Artisanat",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "et en Connaissance des guildes"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "des guildes"
                }
            ]
        },
        {
            "name"                 : "Artiste",
            "requirement"          : [],
            "description"          : [
                "Votre art, quelle que soit la manière dont il s'exprime, représente votre passion. L'aventure vous aide peut-être à trouver l'inspiration, ou alors il s'agit simplement un moyen de survivre en attendant de devenir un artiste de renommée mondiale."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Artisanat",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "et en Connaissance artistique"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "artistique"
                }
            ]
        },
        {
            "name"                 : "Astrologue",
            "requirement"          : [],
            "description"          : [
                "Les astrologues scrutent les étoiles à la recherche de signes et de présages, utilisant la position des astres pour tracer des thèmes astraux pour ceux qui vivent dessous. Tel le déplacement des sphères célestes, le destin lui-même se transforme. Vous avez étudié les étoiles et appris à tracer votre chemin en fonction de leurs conseils. Que les étoiles vous aient directement invitées à une vie d'aventure ou que vous utilisiez les étoiles pour guider votre envie d'errer, vous vivez les conseils des étoiles dans une vie d'aventure."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Occultisme",
                    "characteristic": "INT",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "de l'astrologie"
                }
            ]
        },
        {
            "name"                 : "Avocat",
            "requirement"          : [],
            "description"          : [
                "Les longues heures passées le nez dans des piles d'ouvrages législatifs sous le regard sévère de vos professeurs et à fréquenter les tribunaux vous ont permis d'apprendre le fonctionnement des lois. Vous êtes capable de monter un dossier d'accusation ou de défense pour un procès et vous vous tenez informé des lois locales, car il est impossible de prédire quand elles pourront vous être utiles."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Diplomatie",
                    "characteristic": "CHA",
                    "rank"          : "qualify"
                }
            ]
        },
        {
            "name"                 : "Bandit",
            "requirement"          : [],
            "description"          : [
                "Votre passé comprend une bonne part de banditisme rural, de voyageurs volés sur la route et d'égratignures. Que votre brigandage ait été puni par un noble local ou que vous l'ayez perpétré avec son accord, vous avez fini par prendre goût à la vie d'aventure."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Intimidation",
                    "characteristic": "CHA",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "en lien avec le terrain sur lequel vous avez évolué (tel que"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "en lien avec le terrain sur lequel vous avez évolué (tel que"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "en lien avec le terrain sur lequel vous avez évolué (tel que"
                }
            ]
        },
        {
            "name"                 : "Barbier",
            "requirement"          : [],
            "description"          : [
                "Coupe de cheveux, dentisterie, saignée et chirurgie : s'il faut une main sûre et un rasoir effilé, vous pouvez le faire. Vous pourriez avoir pris la route pour étendre vos compétences ou pour expérimenter vous-même face à un monde qui laisse vos patients tellement battus et contusionnés."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Médecine",
                    "characteristic": "SAG",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "de la chirurgie"
                }
            ]
        },
        {
            "name"                 : "Bateleur",
            "requirement"          : [],
            "description"          : [
                "Une éducation dans les arts ou un entraînement obstiné vous ont permis d'apprendre à divertir les foules. Vous étiez peut-être comédien, danseur, musicien, magicien des rues ou un autre type d'artiste."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Représentation",
                    "characteristic": "CHA",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "théâtrale"
                }
            ]
        },
        {
            "name"                 : "Béni",
            "requirement"          : [],
            "description"          : [
                "Vous avez été béni par une divinité. Pour une raison inconnue, et indépendamment de vos croyances actuelles, une divinité vous a accordé un don pour l'utiliser pour le bien ou le mal. Cette bénédiction vous accorde la sagesse et l'introspection pour vous aider dans vos combats. Vous pouvez ne pas connaître l'identité de l'être qui vous a béni et la bénédiction peut avoir un coût que vous découvrirez plus tard.",
                " Soit vous pouvez lancer auto_awesomeAssistance surnaturelle comme un sort divin inné à volonté, soit vous obtenez une bénédiction du même ordre déterminée par le MJ"
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "associée à la divinité qui vous a béni (comme"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "associée à la divinité qui vous a béni (comme"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "associée à la divinité qui vous a béni (comme"
                }
            ]
        },
        {
            "name"                 : "Bricoleur",
            "requirement"          : [],
            "description"          : [
                "Vous inventez toutes sortes de petites choses afin de satisfaire votre imagination fertile. Vos compétences en ingénierie s'expriment avec beaucoup de créativité et il est impossible de deviner ce que vous allez bien pouvoir inventer ensuite. Il s'agira peut-être d'un génial appareil qui aura un potentiel fabuleux... ou qui risquera d'exploser."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Artisanat",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "et en Connaissance de l'ingénierie"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "de l'ingénierie"
                }
            ]
        },
        {
            "name"                 : "Charlatan",
            "requirement"          : [],
            "description"          : [
                "Vous vous rendiez de ville en ville, prétendant lire l'avenir et vendre des remèdes miracles à un endroit et vous faisant passer pour un héritier royal en exil dans le suivant afin de séduire le ou la riche bénéficiaire d'un héritage. Prendre l'étiquette d'aventurier peut être votre dernière combine ou une véritable tentative d'utiliser vos talents à meilleur escient. Il peut également s'agir des deux et vous vous rendez alors compte que vous êtes en train de devenir le héros pour lequel vous vous faites passer."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Duperie",
                    "characteristic": "CHA",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "de la pègre"
                }
            ]
        },
        {
            "name"                 : "Chasseur",
            "requirement"          : [],
            "description"          : [
                "Vous avez traqué et abattu des animaux et d'autres créatures sauvages. Écorcher les animaux, récolter leur chair et les cuisiner ont également été inclus dans votre formation, ce qui peut vous donner des ressources utiles lorsque vous partez à l'aventure."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Survie",
                    "characteristic": "SAG",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "de la tannerie"
                }
            ]
        },
        {
            "name"                 : "Chasseur de primes",
            "requirement"          : [],
            "description"          : [
                "Vous vous êtes enrichi en traquant les délinquants. Vos motivations étaient peut-être altruistes et chasser les criminels était pour vous un moyen de rendre les rues plus sûres, ou alors vous étiez seulement motivé par l'argent. Vous n'avez aucun mal à transposer vos techniques de traque des criminels à votre profession d'aventurier."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Survie",
                    "characteristic": "SAG",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "juridique"
                }
            ]
        },
        {
            "name"                 : "Chevaucheur des plaines",
            "requirement"          : [],
            "description"          : [
                "Durant votre jeunesse, vous galopiez à dos de cheval sur de vastes prairies, servant d'avant garde pour votre communauté, une armée ou pour un autre groupe. Voir tant de paysages différents a été l'origine de votre envie d'aventure et d'explorer le monde plutôt que de juste y passer rapidement."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Nature",
                    "characteristic": "SAG",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "des plaines"
                }
            ]
        },
        {
            "name"                 : "Comptable",
            "requirement"          : [],
            "description"          : [
                "Vous vous occupez des chiffres sur une large échelle, pour les besoins d'un marchand ou pour une guilde majeure de la ville. Vous gardiez trace des dépenses, des livres de paie, des profits et de tout ce qui à trait à l'argent, pour le meilleur et pour le pire. Pour le meilleur, vous pourriez être parti à l'aventure pour apprendre comment d'autres pratiquent ce métier. Si c'est pour le pire, vous pourriez fuir les conséquences qui en découlent, dans l'espoir que personne ne vous trouve."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Société",
                    "characteristic": "INT",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "de la comptabilité"
                }
            ]
        },
        {
            "name"                 : "Criminel",
            "requirement"          : [],
            "description"          : [
                "Vous avez vécu hors-la-loi comme individu indépendant dénué de scrupules ou comme membre d'une organisation criminelle. Vous vous êtes peut-être tourné vers l'aventure pour y trouver la rédemption, pour échapper à la loi, ou simplement dans l'espoir d'obtenir un butin plus conséquent et de meilleure qualité."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Discrétion",
                    "characteristic": "DEX",
                    "armor_penalty" : true,
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "de la Pègre"
                }
            ]
        },
        {
            "name"                 : "Cueilleur de racines",
            "requirement"          : [],
            "description"          : [
                "Certaines affections ne peuvent être soignées uniquement par des herbes. Vous avez également appris des remèdes rituels, faisant appel aux esprits de la nature pour soulager les douleurs et préserver du mauvais œil. Partir avec des aventuriers vous a apporté de la compagnie sur la route ainsi qu'une protection contre ceux qui voudraient vous traiter d'imposteur - ou pire."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Occultisme",
                    "characteristic": "INT",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "de l'herboristerie"
                }
            ]
        },
        {
            "name"                 : "Cuisinier",
            "requirement"          : [],
            "description"          : [
                "Vous avez été élevé dans les cuisines d'une taverne ou dans un autre établissement où l'on mange et y avez excellé, devenant un cuisinier extraordinaire. Pétrir, cuire, un peu de brassage à côté, vous avez passé beaucoup de temps hors de vue. Il est désormais temps que vous sortiez de votre cuisine pour voir par vous-même le monde extérieur."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Survie",
                    "characteristic": "SAG",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "de la cuisine"
                }
            ]
        },
        {
            "name"                 : "Cultiste",
            "requirement"          : [],
            "description"          : [
                "Vous avez été (ou êtes encore) un membre d'un culte dont les rites peuvent impliquer des danses sacrées pour assurer une bonne récolte ou des rituels sanglants qui font appel à de sombres pouvoirs. Vous pourriez être parti à l'aventure pour remplir les objectifs de votre culte, pour vous initier aux plus grands mystères du monde ou pour fuir les pratiques répugnantes ou les interdits."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Occultisme",
                    "characteristic": "INT",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "en lien avec votre divinité ou votre culte"
                }
            ]
        },
        {
            "name"                 : "De sang royal",
            "requirement"          : [],
            "description"          : [
                "Vous êtes un membre proéminent d'une famille royale. Vous avez échappé aux routines quotidiennes de la vie royale et adopté une vie d'aventurier. Peut-être êtes vous une reine déposée qui espère récupérer son trône, un prince cherchant une vie plus exaltante ou un héritier d'un souverain chargé d'une mission secrète.",
                " Si vous obtenez plus tard le don de compétence military_techUtiliser ses relations , vous disposez automatiquement de relations parmi les nobles et les gens du peuple au sein de n'importe laquelle des communautés au sein du territoire de votre famille et vous disposez de relations nobles dans les communautés de grande taille en dehors de votre territoire"
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Société",
                    "characteristic": "INT",
                    "rank"          : "qualify"
                }
            ]
        },
        {
            "name"                 : "Détective",
            "requirement"          : [],
            "description"          : [
                "Vous étiez un inspecteur de police élucidant des crimes ou un détective privé au service de riches clients. Votre présent d'aventurier peut être lié à un mystère que vous cherchez à éclaircir, mais il est dans tous les cas probable que votre situation ait un rapport avec les conséquences d'une précédente affaire."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Société",
                    "characteristic": "INT",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "de la pègre"
                }
            ]
        },
        {
            "name"                 : "Disciple martial",
            "requirement"          : [],
            "description"          : [
                "Vous vous êtes dédié vous-même à un entraînement intense et à une étude rigoureuse pour devenir un grand combattant. L'école à laquelle vous appartenez pourrait avoir été un monastère traditionaliste, une académie militaire d'élite ou la branche locale d'une organisation mercenaire prestigieuse.",
                " Vous obtenez un don de compétence"
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Acrobaties",
                    "characteristic": "DEX",
                    "armor_penalty" : true,
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Athlétisme",
                    "characteristic": "FOR",
                    "armor_penalty" : true,
                    "rank"          : "qualify"
                }
            ]
        },
        {
            "name"                 : "Dresseur",
            "requirement"          : [],
            "description"          : [
                "Vous avez toujours eu un lien particulier avec les animaux et il vous a donc semblé naturel de devenir dresseur. Vous rencontrez constamment de nouvelles créatures lors de vos voyages et ne perdez pas une occasion de vous en faire des amies."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Nature",
                    "characteristic": "SAG",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "des plaines ou"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "des plaines ou"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "des plaines ou"
                }
            ]
        },
        {
            "name"                 : "Éclaireur",
            "requirement"          : [],
            "description"          : [
                "La nature a été votre seconde maison lorsque vous découvriez des sentiers et guidiez des voyageurs. C'est peut-être votre soif de voyages qui vous a poussé à partir à l'aventure, ou vous avez découvert, en servant d'éclaireur à des soldats, que vous aviez pris goût aux combats."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Survie",
                    "characteristic": "SAG",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "liée à un type de terrain dans lequel vous avez déjà effectué une reconnaissance (comme"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "liée à un type de terrain dans lequel vous avez déjà effectué une reconnaissance (comme"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "liée à un type de terrain dans lequel vous avez déjà effectué une reconnaissance (comme"
                }
            ]
        },
        {
            "name"                 : "Écuyer",
            "requirement"          : [],
            "description"          : [
                "Vous vous êtes entraîné aux pieds d'un Chevalier, fourbissant son équipement et l'encourageant durant les tournois ou les batailles. Maintenant vous recherchez un défi qui prouvera que vous êtes capable d'être fait à votre tour Chevalier ou vous avez repoussé la pompe et le cérémonial pour vous tester dans un combat honnête mais moins formel."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Athlétisme",
                    "characteristic": "FOR",
                    "armor_penalty" : true,
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "de l'héraldique ou"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "de l'héraldique ou"
                }
            ]
        },
        {
            "name"                 : "Élevé dans la Foi",
            "requirement"          : [],
            "description"          : [
                "Que ce soit dans un monastère, une enclave religieuse ou juste comme une partie de votre vie quotidienne, vous avez été éduqué dans les traditions d'une foi ou d'une philosophie. Vous pouvez y rester dévoué ou avoir tourné le dos aux principes de votre enfance mais vos compétences restent toujours fondées sur votre ancienne dévotion."
            ],
            "gift_skill"           : [
                "Assurance"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "FRE"
                ]
            },
            "skills"               : [
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "d'Abadar, par exemple)"
                }
            ]
        },
        {
            "name"                 : "Émissaire",
            "requirement"          : [],
            "description"          : [
                "Remplissant le rôle de diplomate ou de messager, vous avez énormément voyagé. Votre quotidien consistait à communiquer avec de nouvelles personnes et à former des alliances.\n"
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Société",
                    "characteristic": "INT",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "en lien avec une cité dans laquelle vous vous êtes souvent rendu"
                }
            ]
        },
        {
            "name"                 : "Enfant des rues",
            "requirement"          : [],
            "description"          : [
                "Vous vous efforciez de survivre en faisant les poches aux passants dans les artères d'une grande ville, sans jamais savoir quand serait votre prochain repas. Si certaines personnes se tournent vers l'aventure pour la gloire, pour vous c'est une question de survie."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Vol",
                    "characteristic": "DEX",
                    "armor_penalty" : true,
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "correspondant à la cité dans laquelle vous avez vécu comme enfant des rues (comme"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "correspondant à la cité dans laquelle vous avez vécu comme enfant des rues (comme"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "correspondant à la cité dans laquelle vous avez vécu comme enfant des rues (comme"
                }
            ]
        },
        {
            "name"       : "Enfant sauvage",
            "requirement": [],
            "description": [
                "Vous avez passé votre jeunesse dans les étendues sauvages, en vivant à proximité ou en ayant été élevé par des animaux. Vous avez un lien proche et mystique avec ces animaux et obtenu avec eux certaines capacités, bien que cela ait aussi limité votre épanouissement mental.",
                "Choisissez une prime d'attribut. Elle doit être de Force, de Dextérité ou de Constitution.",
                " Vous obtenez vision nocturne (ou vision dans le noir si vous possédez déjà vision nocturne), Odorat imprécis avec une portée de 9 mètres et le don de compétence military_techGlaneur "
            ],
            "gift_skill" : [
                "Glaneur"
            ],
            "skills"     : [
                {
                    "label"         : "Nature",
                    "characteristic": "SAG",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Survie",
                    "characteristic": "SAG",
                    "rank"          : "qualify"
                }
            ]
        },
        {
            "name"                 : "Enseignant",
            "requirement"          : [],
            "description"          : [
                "Vous êtes incroyablement savant, compétent et peut-être même habilité à enseigner aux enfants et aux adultes le monde et ses merveilles. Des livres aux classes, vous vous êtes donné pour objectif de transmettre vos connaissances à tous. Tout ne peut cependant pas être appris ou enseigné à partir des livres, raison pour laquelle vous êtes devenu un aventurier pour apprendre des sujets plus directement et pour pouvoir rapporter cette compréhension à vos élèves."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Société",
                    "characteristic": "INT",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "universitaire"
                }
            ]
        },
        {
            "name"                 : "Ermite",
            "requirement"          : [],
            "description"          : [
                "Dans un lieu reculé, que ce soit une caverne, une oasis isolée ou cloîtré dans un manoir, vous avez vécu une vie solitaire. L'aventure peut être un répit bienvenu de la solitude ou un changement non désiré, mais dans tous les cas, il est probable que vous soyez encore un peu rugueux sur les bords."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Occultisme",
                    "characteristic": "INT",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "liée au type de terrain où vous avez vécu quand vous étiez un ermite (comme"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "liée au type de terrain où vous avez vécu quand vous étiez un ermite (comme"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "liée au type de terrain où vous avez vécu quand vous étiez un ermite (comme"
                }
            ]
        },
        {
            "name"                 : "Érudit",
            "requirement"          : [],
            "description"          : [
                "Vous avez toujours eu des facilités pour apprendre et vous vous êtes ainsi vous-même coupé du monde pour assimiler tout ce que vous pouviez. Vous en avez découvert tant de choses et de lieux merveilleux dans vos lectures, en rêvant toujours du jour où vous pourriez les voir réellement. Finalement, la curiosité vous a conduit à abandonner vos études pour devenir un aventurier.",
                " Vous êtes également qualifié en Connaissance universitaire"
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Occultisme",
                    "characteristic": "INT",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Religion",
                    "characteristic": "SAG",
                    "rank"          : "qualify"
                }
            ]
        },
        {
            "name"                 : "Garçon de course",
            "requirement"          : [],
            "description"          : [
                "Dans votre jeunesse, vous avez gagné de l'argent en transportant des messages pour des personnes fortunées et d'influence, vous faufilant dans les rues des villes bondées. Votre ténacité à délivrer votre message a été un bon entraînement pour une vie d'aventure."
            ],
            "gift_skill"           : [
                "Glaner des informations",
                " military_techGlaner des informations "
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "DEX",
                    "INT",
                    "FRE"
                ]
            },
            "skills"               : [
                {
                    "label"         : "Société",
                    "characteristic": "INT",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "de la cité dans laquelle vous avez été élevé"
                }
            ]
        },
        {
            "name"                 : "Garde",
            "requirement"          : [],
            "description"          : [
                "Vous avez servi dans la garde, par patriotisme ou pour pour la solde. Dans un cas comme dans l'autre, vous avez appris à faire parler un suspect réticent. Après avoir quitté la garde, vous pourriez penser que partir à l'aventure sera l'occasion de mettre en œuvre vos compétences plus largement."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Intimidation",
                    "characteristic": "CHA",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "juridique ou"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "juridique ou"
                }
            ]
        },
        {
            "name"                 : "Gladiateur",
            "requirement"          : [],
            "description"          : [
                "Vous avez appris à vous battre lors des sanglants jeux de l'arène. Vous avez cependant quitté l'arène (ou vous vous êtes enfui) avant d'y atteindre la gloire. Votre capacité à faire couler le sang et à éveiller l'intérêt des foules vous est utile dans votre nouvelle vie d'aventurier."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Représentation",
                    "characteristic": "CHA",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "des gladiateurs"
                }
            ]
        },
        {
            "name"                 : "Hanté",
            "requirement"          : [],
            "description"          : [
                "Vous êtes poursuivi par un esprit ou une entité, soit depuis votre enfance, soit à la suite d'un évènement majeur. Vous et d'autres pourriez avoir vu cette entité. Vous avez étudié des sujets ésotériques en tentant de comprendre votre situation mais cette présence dans votre vie reste un mystère. Quelle que soit cette entité ou ce qu'elle veut, cela influence votre vie de manière subtile, et pas toujours pour le meilleur. Quelques fois, cette entité vous aide, mais à d'autres moments, son influence est malveillante ou dangereuse. L'entité a davantage tendance à faire surface lors de situations stressantes.",
                " Chaque fois que vous faites un test de compétence avec la compétence accordée par l'entité, le MJ peut vous attribuer un bonus de circonstances au test de +1, comme si l'entité vous sports_martial_artsAidait ",
                " Si vous acceptez cette aide mais que vous obtenez un échec sur le test, vous êtes sentiment_very_dissatisfiedEffrayé 2 (Effrayé 4 en cas d'échec critique)",
                " La valeur initiale de l'état Effrayé ne peut être réduite par des effets qui réduiraient ou empêcheraient la manifestation de l'état (comme la bravoure du guerrier)"
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Occultisme",
                    "characteristic": "INT",
                    "rank"          : "qualify"
                }
            ]
        },
        {
            "name"                 : "Herboriste",
            "requirement"          : [],
            "description"          : [
                "Vous avez suivi une formation officielle d'apothicaire ou avez pratiqué la médecine populaire à la campagne et vous connaissez les propriétés médicinales des herbes. Vous savez récolter les bons remèdes naturels dans toutes sortes d'environnements et les préparer comme il se doit."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Nature",
                    "characteristic": "SAG",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "de l'herboristerie"
                }
            ]
        },
        {
            "name"                 : "Homme d'armes",
            "requirement"          : [],
            "description"          : [
                "Dans votre jeunesse, vous avez combattu en tant que mercenaire, guerrier défendant un peuple nomade ou membre d'une milice ou d'une armée. Vous avez peut-être eu envie de vous affranchir de la structure hiérarchique de ces forces armées, mais vous pouvez également avoir toujours été un guerrier indépendant."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Intimidation",
                    "characteristic": "CHA",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "de la guerre"
                }
            ]
        },
        {
            "name"                 : "Insurgé",
            "requirement"          : [],
            "description"          : [
                "Vous avez été plus qu'un rebelle : vous avez été un révolutionnaire, combattant pour la promesse d'un nouveau ou d'un meilleur pays. Vous croyez encore ou non en cette cause ou peut-être que la victoire ou l'exil vous ont conduit sur cette nouvelle voie pour faire rayonner votre gloire à moins qu'il ne s'agisse d'échapper aux conséquences de votre défaite."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Duperie",
                    "characteristic": "CHA",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "de la guerre"
                }
            ]
        },
        {
            "name"                 : "Lié avec les fées",
            "requirement"          : [],
            "description"          : [
                "Vous avez passé du temps dans le Premier Monde ou un autre royaume des fées et n'êtes plus entièrement la personne que vous étiez auparavant. Peut-être avez vous acquis quelque chose sur le légendaire marché des sorciers ou avez partagé profondément la nourriture et le vin des fées. Quel que soit ce qui vous est arrivé, par inadvertance ou de manière volontaire, vous avez passé un marché avec les fées dont les avantages viennent aussi avec un inconvénient.",
                " Vous devez en échange suivre une certaine règle ou une limitation comme contrepartie à votre pacte avec les fées",
                " Si vous violez cette règle, vous perdez Chance féerique jusqu'à ce que vous receviez les effet d'un rituel de auto_awesomePénitence en utilisant la compétence Nature",
                " La limitation exacte se décide avec votre MJ mais la plus courante est celle qui vous impose de remplir une unique requête de toute fée qui connaît votre nom"
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "des fées et obtenez l'action gratuite sports_martial_artsChance féerique"
                }
            ]
        },
        {
            "name"                 : "Manoeuvre",
            "requirement"          : [],
            "description"          : [
                "Vous avez passé des années à exercer un pénible travail physique. C'était une période difficile, mais vous avez réussi à survivre. Vous vous êtes peut-être tourné vers l'aventure car vous y voyez une méthode plus simple de vous faire une place dans le monde, ou bien vous accompagnez quelqu'un dont vous êtes sous les ordres."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Athlétisme",
                    "characteristic": "FOR",
                    "armor_penalty" : true,
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "du travail"
                }
            ]
        },
        {
            "name"                 : "Marchand",
            "requirement"          : [],
            "description"          : [
                "Votre précédente activité consistait à vendre des produits et échanger des biens, peut-être dans une boutique poussiéreuse, derrière un étal de marché, ou dans une caravane marchande. Les compétences que vous avez acquises vous servent dans votre nouvelle vocation d'aventurier, dans le cadre de laquelle votre capacité à obtenir une réduction sur le prix d'une bonne armure pourra vous sauver la vie."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Diplomatie",
                    "characteristic": "CHA",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "commerciale"
                }
            ]
        },
        {
            "name"                 : "Marin",
            "requirement"          : [],
            "description"          : [
                "Vous avez entendu l'appel de la mer dès votre jeune âge. Vous avez peut-être rejoint un vaisseau marchand, la marine, ou un équipage de pirates et de vauriens."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Athlétisme",
                    "characteristic": "FOR",
                    "armor_penalty" : true,
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "de la navigation maritime"
                }
            ]
        },
        {
            "name"                 : "Maudit",
            "requirement"          : [],
            "description"          : [
                "Vous être la victime d'une malédiction personnelle ou héréditaire. Par de grands efforts et l'étude occulte, vous avez appris à repousser les pires effets de la malédiction et, par extension, vous pouvez vous protéger contre d'autres magies nuisibles. Quoi qu'il en soit, la malédiction est une épée de Damoclès et se manifeste parfois de dangereuse manière.",
                " Vous obtenez la réaction sports_martial_artsSigne de protection ",
                " Vous et le MJ devriez déterminer les pleins effets de la malédiction, bien que vous soyez parvenu à maîtriser la plupart de ses effets pour le moment",
                " Le MJ détermine les manifestations persistantes de la malédiction qui vous affecte, lesquelles pourraient notamment inclure au moins un effet thématique constant ou très fréquent et des effets occasionnels dangereux"
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Occultisme",
                    "characteristic": "INT",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "des malédictions"
                }
            ]
        },
        {
            "name"                 : "Médecin militaire",
            "requirement"          : [],
            "description"          : [
                "Plongé dans le chaos des batailles, vous avez appris à vous adapter à une situation en constante évolution tout en prenant soin des blessés. Vous prodiguiez des soins à des soldats, des gardes ou d'autres combattants et vous avez par la même occasion appris de nombreuses choses sur la logistique de la guerre."
            ],
            "gift_skill"           : [
                "Médecine militaire"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "CON",
                    "SAG",
                    "FRE"
                ]
            },
            "skills"               : [
                {
                    "label"         : "Médecine",
                    "characteristic": "SAG",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "de la guerre"
                }
            ]
        },
        {
            "name"                 : "Mineur",
            "requirement"          : [],
            "description"          : [
                "Vous gagniez votre vie en extrayant des minerais précieux des profondeurs obscures de la terre. Comparé à cet épuisant labeur, partir à l'aventure peut vous sembler une alternative lucrative et séduisante. Et si vous deviez retourner sous terre, vous comptez bien le faire avec une véritable arme en main et non une pioche de mineur."
            ],
            "gift_skill"           : [
                "Expertise du terrain"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "FOR",
                    "SAG",
                    "FRE"
                ]
            },
            "skills"               : [
                {
                    "label"         : "Survie",
                    "characteristic": "SAG",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "minière"
                }
            ]
        },
        {
            "name"                 : "Noble",
            "requirement"          : [],
            "description"          : [
                "Si pour les gens du commun, la vie d'un noble semble un luxe idyllique, vous avez grandi en tant que noble ou membre d'une famille aspirant à le devenir et vous connaissez la réalité : le lot des nobles est faite d'obligations et d'intrigues. Que vous cherchiez à échapper à vos devoirs en partant à l'aventure ou à améliorer votre statut social, vous avez échangé les soieries et le faste pour revêtir une vie d'aventurier."
            ],
            "gift_skill"           : [
                "Manières courtoises"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "INT",
                    "CHA",
                    "FRE"
                ]
            },
            "skills"               : [
                {
                    "label"         : "Société",
                    "characteristic": "INT",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "généalogique, soit en"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "généalogique, soit en"
                }
            ]
        },
        {
            "name"                 : "Nomade",
            "requirement"          : [],
            "description"          : [
                "Vous avez beaucoup voyagé et appris par la même occasion les grands principes de la survie sur les routes et dans des terres inconnues, quand les provisions se font rares et le confort presque inexistant. Maintenant que vous êtes aventurier, vous continuez de voyager, mais souvent dans des endroits encore plus dangereux."
            ],
            "gift_skill"           : [
                "Assurance"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "CON",
                    "SAG",
                    "FRE"
                ]
            },
            "skills"               : [
                {
                    "label"         : "Survie",
                    "characteristic": "SAG",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "liée à un type de terrain que vous avez déjà traversé (comme"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "liée à un type de terrain que vous avez déjà traversé (comme"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "liée à un type de terrain que vous avez déjà traversé (comme"
                }
            ]
        },
        {
            "name"                 : "Ouvrier agricole",
            "requirement"          : [],
            "description"          : [
                "Alliant robustesse et compréhension des cycles saisonniers, vous labouriez la terre et preniez soin des récoltes. Votre ferme a peut-être été démolie par des envahisseurs, vous pourriez avoir perdu la famille qui vous rattachait à la terre ou vous en avez peut-être tout simplement eu assez de vous épuiser à la tâche. En tout cas, vous avez décidé de devenir aventurier."
            ],
            "gift_skill"           : [
                "Assurance"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "CON",
                    "SAG",
                    "FRE"
                ]
            },
            "skills"               : [
                {
                    "label"         : "Athlétisme",
                    "characteristic": "FOR",
                    "armor_penalty" : true,
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "de l'agriculture"
                }
            ]
        },
        {
            "name"                 : "Parieur",
            "requirement"          : [],
            "description"          : [
                "Le frisson du jeu vous a fait vous perdre dans les jeux de hasard. Il s'agissait peut-être d'un à-côté lucratif qui a perdu de son attrait comparé aux véritables risques liés à la vie d'aventurier, ou votre passion du jeu vous a mis dans une situation difficile et vous vous êtes tourné vers l'aventure avant d'être irrémédiablement pris dans l'engrenage."
            ],
            "gift_skill"           : [
                "Ose me mentir"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "DEX",
                    "CHA",
                    "FRE"
                ]
            },
            "skills"               : [
                {
                    "label"         : "Duperie",
                    "characteristic": "CHA",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "ludique"
                }
            ]
        },
        {
            "name"                 : "Pèlerin",
            "requirement"          : [],
            "description"          : [
                "Dans votre jeunesse, vous avez accompli plusieurs pèlerinages vers des temples importants et des sites sacrés. Vous pourriez avoir été un frère mendiant, un vendeur de reliques religieuses (réelles ou frauduleuses) ou simplement un fermier qui suit les piliers de sa foi. Quels que soient désormais les objectifs de vos errances, votre foi vous protège toujours sur la route."
            ],
            "gift_skill"           : [
                "Amulette du pèlerin"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "SAG",
                    "CHA",
                    "FRE"
                ]
            },
            "skills"               : [
                {
                    "label"         : "Religion",
                    "characteristic": "SAG",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "de votre divinité patronne"
                }
            ]
        },
        {
            "name"                 : "Percepteur",
            "requirement"          : [],
            "description"          : [
                "Vilipendé mais nécessaire, vous avez été envoyé récolter les impôts non payés. Effectuer votre travail pourrait vous avoir amené à voyager et à faire preuve de persuasion à moins que vous n'ayez été responsable de la collecte des taxes sur le commerce. Quoi qu'il en soit, cela signifie qu'il vous a fallu quelquefois vous salir les mains. Partir à l'aventure vous a semblé la prochaine chose logique à faire."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Intimidation",
                    "characteristic": "CHA",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "de la communauté qui vous a employé"
                }
            ]
        },
        {
            "name"                 : "Prisonnier",
            "requirement"          : [],
            "description"          : [
                "Vous avez été emprisonné ou puni pour un crime (que vous avez commis ou non). Maintenant que vous avez purgé votre peine ou que vous vous êtes évadé, vous tirez pleinement part de la liberté retrouvée de votre vie d'aventurier."
            ],
            "gift_skill"           : [
                "Contrebandier expérimenté"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "FOR",
                    "CON",
                    "FRE"
                ]
            },
            "skills"               : [
                {
                    "label"         : "Discrétion",
                    "characteristic": "DEX",
                    "armor_penalty" : true,
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "de la pègre"
                }
            ]
        },
        {
            "name"                 : "Pupille",
            "requirement"          : [],
            "description"          : [],
            "gift_skill"           : [
                "Représentation fascinante"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "CON",
                    "CHA",
                    "FRE"
                ]
            },
            "skills"               : [
                {
                    "label"         : "Représentation",
                    "characteristic": "CHA",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "de la généalogie"
                }
            ]
        },
        {
            "name"                 : "Récupérateur",
            "requirement"          : [],
            "description"          : [
                "Vous vous êtes construit une vie en récupérant les choses que la société rejette. Vous pourriez avoir fouillé les poubelles simplement pour survivre ou avoir construit un commerce de chiffonnier ou de transporteur de fumier ou tout autre du même genre. Lorsque vous avez laissé cette vie derrière vous, vous avez conservé l'habitude de garder un œil sur ce qui se trouve par terre."
            ],
            "gift_skill"           : [
                "Glaneur"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "INT",
                    "SAG",
                    "FRE"
                ]
            },
            "skills"               : [
                {
                    "label"         : "Survie",
                    "characteristic": "SAG",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "rank"          : "qualify",
                    "need_qualifier": true,
                    "qualifier"     : "de la ville"
                }
            ]
        },
        {
            "name"                 : "Réfugié (PC2)",
            "requirement"          : [],
            "description"          : [
                "Vous êtes originaire d'un pays très distant de celui dans lequel vous vous trouvez, à cause de la guerre, d'une épidémie ou simplement à la poursuite d'une opportunité. Quelle que soit votre origine ou la raison pour laquelle vous avez quitté votre patrie, vous vous sentez un étranger dans ce nouveau pays. Partir à l'aventure est un moyen de vous encourager à offrir de l'espoir à ceux qui en ont davantage besoin."
            ],
            "gift_skill"           : [
                "Savoir urbain"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "CON",
                    "SAG",
                    "FRE"
                ]
            },
            "skills"               : [
                {
                    "label"         : "Société",
                    "characteristic": "INT",
                    "rank"          : "qualify"
                }
            ]
        },
        {
            "name"                 : "Ressuscité",
            "requirement"          : [],
            "description"          : [
                "Vous êtes mort et avez miraculeusement ressuscité avec une connaissance des royaumes au-delà de la mort et un lien plus fort avec la vie. Certains esprits morts et morts-vivants pourraient sentir une étrange et instinctive proximité avec vous."
            ],
            "gift_skill"           : [
                "Dur à cuire",
                "Connaissance supplémentaire",
                "military_techDur à cuire et military_techConnaissance supplémentaire pour la Connaissance du Cimetière."
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "CON",
                    "SAG",
                    "FRE"
                ]
            }
        },
        {
            "name"                 : "Saboteur",
            "requirement"          : [],
            "description"          : [
                "Que vous le fassiez par plaisir personnel ou à la demande d'une société de mercenaires ou d'une organisation militaire, vous avez le don de détruire les choses. Vous avez le sens des points faibles d'un objet ou d'une structure et savez où porter un coup de marteau ou lancer une bombe alchimique. Vous vous aventurez à affiner vos compétences ou pour mener à bien une mission particulière."
            ],
            "gift_skill"           : [
                "Tour de passe-passe"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "FOR",
                    "DEX",
                    "FRE"
                ]
            },
            "skills"               : [
                {
                    "label"         : "Vol",
                    "characteristic": "DEX",
                    "armor_penalty" : true,
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "de l'ingénierie"
                }
            ]
        },
        {
            "name"                 : "Serviteur",
            "requirement"          : [],
            "description"          : [
                "Vous avez occupé un rôle de servitude auprès de nobles et engendrant leur confiance comme l'un des confidents de la maisonnée. Vous pourriez être parti en bons termes ou peut-être en emportant des secrets dangereux sur vos anciens employeurs. Quoi qu'il en soit, vous partez à l'aventure pour obtenir du changement et vous trouvez que dans ce nouveau rôle, les compétences que vous avez apprises vous servent désormais."
            ],
            "gift_skill"           : [
                "Lire sur les lèvres"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "DEX",
                    "CHA",
                    "FRE"
                ]
            },
            "skills"               : [
                {
                    "label"         : "Société",
                    "characteristic": "INT",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "du travail"
                }
            ]
        },
        {
            "name"                 : "Tavernier",
            "requirement"          : [],
            "description"          : [
                "Vous possédez cinq spécialités : porter des tonneaux, boire, polir des chopes, boire et boire. Vous avez travaillé dans un bar, où vous avez appris à tenir l'alcool et à vous sociabiliser bruyamment avec la clientèle."
            ],
            "gift_skill"           : [
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
            "skills"               : [
                {
                    "label"         : "Diplomatie",
                    "characteristic": "CHA",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "des alcools"
                }
            ]
        },
        {
            "name"                 : "Voyant",
            "requirement"          : [],
            "description"          : [
                "Vous avez appris de nombreuses méthodes traditionnelles pour prédire l'avenir et vous voyez ainsi avec clarté les fils du destin s'étirer devant vous. Vous avez peut-être utilisé ces compétences pour guider votre communauté, ou simplement pour gagner votre vie. Cependant, la moindre incursion dans ce genre de pratiques vous connecte aux mystères occultes de l'univers."
            ],
            "gift_skill"           : [
                "Identification de bizarreries"
            ],
            "characteristics_bonus": {
                "number": 2,
                "choice": [
                    "INT",
                    "CHA",
                    "FRE"
                ]
            },
            "skills"               : [
                {
                    "label"         : "Occultisme",
                    "characteristic": "INT",
                    "rank"          : "qualify"
                },
                {
                    "label"         : "Connaissance",
                    "characteristic": "INT",
                    "need_qualifier": true,
                    "rank"          : "qualify",
                    "qualifier"     : "de la voyance"
                }
            ]
        }
    ]
};
