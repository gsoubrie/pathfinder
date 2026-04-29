"use strict";
var CLASSES = {
    key          : "classes",
    label        : "Classes",
    key_element  : "class",
    default_value: "Guerrier",
    label_element: "Classe",
    ENUM         : [
    {
        "name": "Alchimiste",
        "key": "alchimiste",
        "general_desc": "Il n'y a rien de plus beau à vos yeux qu'un étrange breuvage en train de bouillonner dans un bécher et vous consommez vos ingénieux élixirs sans modération. Vous êtes fasciné par la découverte des secrets de la science et du monde naturel et, pour faire face à toutes éventualités, vous expérimentez constamment des concoctions inventives dans votre laboratoire ou à la volée. Vous faites preuve d'une audace sans faille face au risque, lançant des créations explosives ou toxiques sur vos ennemis. Votre chemin unique vers la gloire est jalonné de breuvages alchimiques qui repoussent les limites de votre esprit et de votre corps.",
        "characteristics_bonus": {
            "number": 1,
            "choice": [
                "INT"
            ]
        },
        "life_point_by_level": 8,
        "desc_fight": "Vous balancez des bombes sur vos adversaires, tourmentez vos ennemis et soutenez vos alliés grâce à de puissants élixirs. Vous pourriez même utiliser des mutagènes pour transformer votre corps en une arme aussi résistante que puissante.",
        "desc_socially": "Vous apportez vos connaissances et votre expérience des objets alchimiques et des secrets qui y sont liés, comme les poisons et les maladies.",
        "desc_exploration": "Vous gardez un œil pour des ingrédients supplémentaires que vous pouvez transformer en réactifs alchimiques, tout en donnant des conseils sur toutes les choses alchimiques et mystérieuses.",
        "desc_interlude": "Vous faites des expériences dans un laboratoire d'alchimie, concoctez des élixirs, confectionnez des bombes et approfondissez vos connaissances alchimiques.",
        "desc_you_could": [
            "Prenez plaisir à bidouiller des formules étranges et des réactifs alchimiques, souvent avec une dévotion et une témérité qui laissent les autres perplexes.",
            "Prendre plaisir à faire des ravages avec les préparations alchimiques que vous avez élaborées et à regarder les choses brûler, se dissoudre, se geler ou s'électrocuter.",
            "Expérimenter sans cesse pour découvrir de nouveaux outils alchimiques plus puissants."
        ],
        "desc_probably_others": [
            "Vous prennent pour une sorte de sorcier ou un magicien excentrique et ne comprennent pas que vous ne lancez pas de sorts ; les lanceurs de sorts qui s'essayent maladroitement à l'alchimie ne font qu'accentuer cette méprise.",
            "Ne comprennent pas votre engouement pour l'alchimie, la créativité et l'invention.",
            "Considèrent que si vous n'avez pas encore provoqué une catastrophe avec vos expérimentations, c'est que cela finira forcément par arriver."
        ],
        "mastery": {
            "perception": "Q",
            "saves": [
                {
                    "level": "E",
                    "description": "Expert en Vigueur"
                },
                {
                    "level": "E",
                    "description": "Expert en Réflexes"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en Volonté"
                }
            ],
            "skills": [
                {
                    "level": "Q",
                    "description": "Qualifié en Artisanat"
                },
                {
                    "level": "Q",
                    "description": "Qualifié dans un nombre de compétences supplémentaires égal à 3 plus votre modificateur d'Intelligence."
                }
            ],
            "attacks": [
                {
                    "level": "Q",
                    "description": "Qualifié avec les armes simples"
                },
                {
                    "level": "Q",
                    "description": "Qualifié avec les bombes alchimiques"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en attaques à mains nues"
                }
            ],
            "defenses": [
                {
                    "level": "Q",
                    "description": "Qualifié avec les armures légères"
                },
                {
                    "level": "Q",
                    "description": "Qualifié avec les armures intermédiaires"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en défense sans armure"
                }
            ],
            "spells": null,
            "class_dc": "Q",
            "rarity": null
        },
        "capacity_by_level": [
            "Alchimie, champ de recherche, don d'alchimiste, primes d'attributs, maîtrises initiales",
            "Don d'alchimiste, don de compétence",
            "Amélioration de compétence, don général",
            "Don d'alchimiste, don de compétence",
            "Alchimie puissante, amélioration de compétence, découverte de champ de recherche, don ancestral, primes d'attributs",
            "Don d'alchimiste, don de compétence",
            "Amélioration de compétence, don général, expertise avec les armes alchimiques, expertise en volonté",
            "Don d'alchimiste, don de compétence",
            "Amélioration de compétence, don ancestral, double préparation, expertise alchimique, expertise en perception",
            "Don d'alchimiste, don de compétence, primes d'attributs",
            "Amélioration de compétence, don général, fioles évoluées, résistance aux produits chimiques",
            "Don d'alchimiste, don de compétence",
            "Amélioration de compétence, découverte de champ de recherche supérieure, don ancestral, expertise avec les armures intermédiaires, spécialisation martiale",
            "Don d'alchimiste, don de compétence",
            "Amélioration de compétence, don général, esquiveur d'explosion, maîtrise des armes alchimiques, primes d'attributs",
            "Don d'alchimiste, don de compétence",
            "Amélioration de compétence, don ancestral,fioles abondantes, maîtrise alchimique",
            "Don d'alchimiste, don de compétence",
            "Amélioration de compétence, don général, maîtrise des armures intermédiaires",
            "Don d'alchimiste, don de compétence, primes d'attributs"
        ],
        "abilities": {
            "alchimie": {
                "name": "Alchimie",
                "description": [
                    "Vous comprenez les réactions complexes entre toutes sortes de réactifs et pouvez concocter des objets alchimiques pour répondre à vos besoins. Vous pouvez le faire en utilisant des réactifs normaux et l'activité Fabriquer ou vous pouvez utiliser des produits chimiques spécialement préparés qui vous permettent de fabriquer des objets temporaires rapidement et sans coût associé. Au fil du temps, vous pouvez créer de plus en plus d'objets alchimiques gratuitement et, dans la mesure où ceux-ci deviennent de plus en plus puissants, votre puissance progresse de manière dramatique, laissant derrière ceux qui ne comprennent rien à votre étrange science.",
                    "Vous obtenez le don <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'is3Oz9wt11lNq62K'})\">Artisanat alchimique</div> et vous pouvez automatiquement identifier les objets alchimiques dont vous disposez de la formule."
                ]
            },
            "recueil_de_formules": {
                "name": "Recueil de formules",
                "description": [
                    "Un alchimiste conserve les formules méticuleusement de tout objet que vous pouvez créer. Vous débutez avec un <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'qCEOZ6109Yo34tRx'})\">Recueil de formules</div> standard gratuitement. Le recueil de formules contient les formules de deux objets alchimiques courants de niveau 1 de votre choix, en plus de toutes les formules que vous avez obtenues par <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'is3Oz9wt11lNq62K'})\">Artisanat alchimique</div> et votre champ de recherche.",
                    "Chaque fois que vous gagnez un niveau, vous pouvez ajouter les formules de deux objets alchimiques courants de votre recueil de formules. Ces nouvelles formules peuvent être de n'importe quel niveau d'objet que vous pouvez créer. Vous apprenez ces formules automatiquement, mais il est aussi possible de trouver et acheter des formules supplémentaires dans les agglomérations ou d'autres alchimistes ou en sélectionnant le don de compétence <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'XR95taODq1sq82Du'})\">Inventeur</div> de sorte à pouvoir les inventer.",
                    "Comme à l'ordinaire, disposer de la formule de base est suffisant lorsque vous Fabriquez des versions supérieures de l'objet. Vous n'avez pas besoin d'apprendre les formules des niveaux supérieurs. Par exemple, si vous disposez de la formule de niveau 1 pour un élixirs de vie mineur, vous pouvez créer des élixirs de vie mineurs, inférieurs, modérés, supérieurs, majeur ou ultime tant que vous remplissez le niveau et les autres prérequis. Les objets dont les entrées de type ont des fonctions très variées nécessitent des formules distinctes, mais la plupart des objets alchimiques possèdent une structure similaire à celle de l'élixir de vie."
                ]
            },
            "alchimie_avancee": {
                "name": "Alchimie avancée",
                "description": [
                    "Au cours de vos préparatifs quotidiens, vous passez du temps à créer des objets alchimiques qui peuvent être utilisés au cours de la journée.",
                    "Vous n'avez pas besoin de faire un test d'Artisanat pour le faire, vous pouvez utiliser du matériel d'alchimiste au lieu d'un laboratoire d'alchimie et vous ignorez à la fois le nombre de jours habituellement nécessaire pour créer les objets et toutes les conditions de matériaux bruts alchimiques.",
                    "Vous pouvez Fabriquer un nombre d'objets alchimiques d'un maximum de 4 + votre modificateur d'Intelligence. Chaque objet doit être dans votre recueil de formule, avoir un niveau inférieur ou égal à votre niveau et avoir le trait consommable.",
                    "Ces objets possèdent le trait imprégné et restent efficaces pendant 24 heures ou jusqu'à vos prochains préparatifs quotidiens, selon ce qui se produit en premier."
                ]
            },
            "alchimie_rapide": {
                "name": "Alchimie rapide",
                "description": [
                    "Vous obtenez l'action <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'yzNJgwzV9XqEhKc6'})\">Alchimie rapide</div> pour faire les objets dont vous avez besoin à la volée."
                ]
            },
            "fioles_polyvalentes": {
                "name": "Fioles polyvalentes",
                "description": [
                    "Vous savez comment préparer les produits chimiques à action rapide pour en faire des fioles polyvalentes, des objets spéciaux qui peuvent être utilisés comme des bombes et transformés en objets alchimiques en introduisant des réactifs spéciaux. Au cours de vos préparatifs quotidiens, vous pouvez créer un nombre de fioles polyvalentes égal à 2 + votre modificateur d'Intelligence, qui est aussi votre nombre maximal de fioles. Si vous êtes en dessous de votre nombre maximal, vous pouvez recueillir des réactifs dans l'environnement qui vous entoure. Toutes les 10 minutes que vous passez en mode exploration, vous récupérez 2 fioles. Cela ne vous empêche pas de participer aux autres activités d'exploration.",
                    "Les fioles polyvalentes sont des objets imprégnés et sont détruites si elles ne sont pas utilisées à l'occasion de vos prochains préparatifs quotidiens. Une fiole que vous créez est toujours du type le plus élevé que vous pouvez Fabriquer. Voyez les statistiques sur la manière d'utiliser la fiole polyvalente en tant que bombe. Vous pouvez utiliser les fioles dans le cadre de l' <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'sPtl05wwTpqFI0lL'})\">Alchimie rapide</div> et votre champ de recherche peut ajouter des manières dont vous utilisez une fiole.",
                    "Vous pouvez emmagasiner toutes vos fioles polyvalentes au sein de votre <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '4ftXXUCBHcf4b0MH'})\">Matériel d'alchimiste</div> , sans augmenter son Encombrement. Bien que les fioles polyvalentes soient des objets physiques, elles ne peuvent être dupliquées ou conservées en aucune manière.",
                    "Les fioles polyvalentes peuvent être jetées comme le sont les bombes, avec les statistiques suivantes :"
                ]
            },
            "champ_de_recherche": {
                "name": "Champ de recherche",
                "description": [
                    "Vos études de la nature alchimique de l'univers vous a mené à vous concentrer sur un champ de recherche spécifique. Au niveau 1, vous choisissez votre champ de recherche. Ce choix vous donne davantage de formules, d'autres capacités pour vos fioles polyvalentes et d'autres avantages lorsque vous gagnez des niveaux.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '7JbiaZ8bxODM5mzS'})\">Bombardier</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'eNZnx4LISDNftbx2'})\">Chirurgien</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'tvdb1jkjl2bRZjSp'})\">Mutagéniste</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'P9quO9XZi3OWFe1k'})\">Toxicologiste</div>"
                ]
            },
            "dons_d_alchimiste": {
                "name": "Dons d'alchimiste",
                "description": [
                    "Au niveau 1 puis tous les niveaux pairs par la suite, vous obtenez un don de classe d'alchimiste."
                ]
            },
            "dons_de_competence": {
                "name": "Dons de compétence",
                "description": [
                    "Au niveau 2, puis tous les niveaux pairs, vous obtenez un don de compétence. vous devez être au moins qualifié dans la compétence correspondante pour choisir un don de compétence."
                ],
                "level": 2
            },
            "ameliorations_de_competence": {
                "name": "Améliorations de compétence",
                "description": [
                    "Au niveau 3, puis tous les 2 niveaux, vous obtenez une amélioration de compétence. Vous pouvez utiliser cette amélioration pour augmenter votre degré de maîtrise et devenir qualifié dans une compétence dans laquelle vous étiez inexpérimenté ou pour améliorer votre rang dans une compétence dans laquelle vous êtes déjà qualifié pour devenir expert.",
                    "À partir du niveau 7, vous pouvez utiliser l'amélioration de compétence pour devenir maître dans une compétence dans laquelle vous êtes déjà expert et à partir du niveau 15, vous pouvez l'utiliser pour devenir légendaire dans une compétence dans laquelle vous êtes déjà maître."
                ],
                "level": 3
            },
            "dons_generaux": {
                "name": "Dons généraux",
                "description": [
                    "Au niveau 3, puis tous les 4 niveaux, vous obtenez un don général."
                ],
                "level": 3
            },
            "alchimie_puissante": {
                "name": "Alchimie puissante",
                "description": [
                    "Les objets alchimiques que vous imprégnez sont particulièrement puissants. Lorsque vous créez un objet alchimique imprégné qui permet un jet de sauvegarde, vous pouvez remplacer son DD par votre DD de classe."
                ],
                "level": 5
            },
            "dons_ancestraux": {
                "name": "Dons ancestraux",
                "description": [
                    "En plus de celui avec lequel vous avez commencé, vous obtenez un don ancestral au niveau 5 puis tous les 4 niveaux."
                ],
                "level": 5
            },
            "decouverte_de_champ_de_recherche": {
                "name": "Découverte de champ de recherche",
                "description": [
                    "Vous apprenez une découverte indiquée dans votre champ de recherche."
                ],
                "level": 5
            },
            "primes_d_attributs": {
                "name": "Primes d'attributs",
                "description": [
                    "Au niveau 5, puis tous les 5 niveaux, vous améliorez quatre scores d'attributs différents. Vous pouvez utiliser ces primes d'attributs pour faire passer la valeur d'un score d'attribut au-dessus de +4. La prime augmente la valeur du score d'attribut de +1/2 s'il est supérieur ou égal à +4 ou de +1 s'il est inférieur à +3."
                ],
                "level": 5
            },
            "expertise_avec_les_armes_alchimiques": {
                "name": "Expertise avec les armes alchimiques",
                "description": [
                    "Vous vous êtes entraîné à manier plus efficacement les armes que vous trouvez dans votre laboratoire. Vous devenez expert avec les armes simples, les bombes alchimiques et les attaques à mains nues."
                ],
                "level": 7
            },
            "expertise_en_volonte": {
                "name": "Expertise en volonté",
                "description": [
                    "Vos défenses mentales deviennent plus fortes. votre degré de maîtrise pour les jets de Volonté passe à expert."
                ],
                "level": 7
            },
            "double_preparation": {
                "name": "Double préparation",
                "description": [
                    "Vous connaissez vos formules tellement bien que vous pouvez concoctez deux objets à la fois.",
                    "Quand vous utilisez l'action <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'yzNJgwzV9XqEhKc6'})\">Alchimie rapide</div> , vous pouvez créer deux objets. Ces objets n'ont pas besoin d'être les mêmes. Si vous créez deux consommables, vous devez dépenser une fiole polyvalente pour chacune."
                ],
                "level": 9
            },
            "expertise_alchimique": {
                "name": "Expertise alchimique",
                "description": [
                    "Une pratique constante a amélioré l'efficacité de vos concoctions. Vous êtes expert dans le DD de la classe d'alchimiste. De plus, lorsque vous réunissez des réactifs au cours du mode exploration, vous pouvez regagner trois fioles au lieu de deux."
                ],
                "level": 9
            },
            "expertise_en_perception": {
                "name": "Expertise en perception",
                "description": [
                    "Vous restez à l'affût des menaces qui vous entourent. Vous devenez expert en Perception."
                ],
                "level": 9
            },
            "fioles_evoluees": {
                "name": "Fioles évoluées",
                "description": [
                    "Votre expérience vous aide à améliorer vos Fioles de champ de recherches avec un avantage propre à votre champ de recherche."
                ],
                "level": 11
            },
            "resistance_aux_produits_chimiques": {
                "name": "Résistance aux produits chimiques",
                "description": [
                    "Boire des composés alchimiques a fortifié vos organes. Vous êtes maître en jet de Vigueur. Lorsque vous obtenez un succès sur un jet de Vigueur, il devient un succès critique."
                ],
                "level": 11
            },
            "decouverte_de_champ_de_recherche_superieure": {
                "name": "Découverte de champ de recherche supérieure",
                "description": [
                    "Vous faites une découverte incroyable qui vous apporte une meilleure compréhension de votre domaine de prédilection, comme indiqué dans votre champ de recherche."
                ],
                "level": 13
            },
            "expertise_avec_les_armures_intermediaires": {
                "name": "Expertise avec les armures intermédiaires",
                "description": [
                    "Vous avez appris à vous défendre mieux contre les attaques. Vos rangs de maîtrise avec les armures légères, les armures intermédiaires et en défense sans armure passent à expert."
                ],
                "level": 13
            },
            "specialisation_martiale": {
                "name": "Spécialisation martiale",
                "description": [
                    "Vous avez appris à infliger des blessures plus importantes avec les armes que vous connaissez le mieux. Vous infligez 2 dégâts supplémentaires avec les armes et les attaques à mains nues avec lesquelles vous êtes expert. Ces dégâts passent à 3 si vous êtes maître et à 4 si vous êtes légendaire."
                ],
                "level": 13
            },
            "esquiveur_d_explosion": {
                "name": "Esquiveur d'explosion",
                "description": [
                    "Vos expériences vous ont appris à vous projeter hors de la trajectoire des explosions soudaines. Vous devenez maître en jets de Réflexes. Lorsque vous obtenez un succès sur un jet de Réflexes, il devient un succès critique."
                ],
                "level": 15
            },
            "maitrise_des_armes_alchimiques": {
                "name": "Maîtrise des armes alchimiques",
                "description": [
                    "Vous avez maîtrisé la pleine capacité avec vos armes. Vos rangs de maîtrise pour les armes simples, les bombes alchimiques et les attaques à mains nues passent à maître."
                ],
                "level": 15
            },
            "fioles_abondantes": {
                "name": "Fioles abondantes",
                "description": [
                    "Vous êtes <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'nlCjDvLMf2EkV2dl'})\">Accéléré</div> de manière permanente et ne pouvez utiliser l'action supplémentaire que pour utiliser <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'yzNJgwzV9XqEhKc6'})\">Alchimie rapide</div> pour créer une fiole rapide. Vous ne pouvez créer qu'une fiole avec cette action, même si vous avez <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '76cwNLJEm4Yetnee'})\">Double breuvage</div> ou une capacité similaire."
                ],
                "level": 17
            },
            "maitrise_alchimique": {
                "name": "Maîtrise alchimique",
                "description": [
                    "Vos concoctions alchimiques sont incroyablement efficaces. Vous devenez maître en en DD de classe d'alchimiste."
                ],
                "level": 17
            },
            "maitrise_des_armures_intermediaires": {
                "name": "Maîtrise des armures intermédiaires",
                "description": [
                    "Votre maîtrise avec les armures légères et intermédiaires s'améliore, augmentant votre capacité à éviter les coups. Vous devenez maître avec les armures légères et intermédiaires ainsi qu'en défense sans armure."
                ],
                "level": 19
            }
        }
    },
    {
        "name": "Barbare",
        "key": "barbare",
        "general_desc": "Vous êtes submergé par la rage au combat. Vous adorez semer le chaos et utiliser des armes puissantes pour vous tailler un chemin au travers de vos ennemis, en vous reposant sur votre endurance extraordinaire plutôt que sur des techniques compliquées ou un entraînement rigoureux. Votre rage tire parti d'un instinct vicieux, que vous pourriez associer à un animal, à un esprit ou à une part de vous-même. Pour beaucoup de barbares, la force brute est un marteau et chaque problème auxquels ressemble à un clou alors que d'autres tentent de contenir la tempête d'émotions intérieure et de ne libérer leur rage que lorsqque cela importe le plus.",
        "characteristics_bonus": {
            "number": 1,
            "choice": [
                "FOR"
            ]
        },
        "life_point_by_level": 12,
        "desc_fight": "Vous faites appel à votre rage et vous vous précipitez vers la première ligne pour passer au travers. L'attaque est votre meilleure défense - il faut abattre vos ennemis avant qu'ils ne puissent exploiter vos défenses relativement faibles.",
        "desc_socially": "Vous utilisez l'intimidation pour obtenir ce dont vous avez besoin, particulièrement quand la méthode douce pourrait ne pas fonctionner.",
        "desc_exploration": "Vous êtes toujours à l'affût du danger, prêt à vous précipiter tête la première au combat à tout moment. Vous escaladez le mur de pierre qui vous défie et lancez la corde permettant aux autres de vous suivre et vous vous jetez dans les eaux tumultueuses pour atteindre le levier qui se trouve tout au fond. S'il faut casser quelque chose, vous êtes à la hauteur !",
        "desc_interlude": "Vous pourriez vous diriger vers une taverne pour y festoyer, construire la légende terrifiante de vos puissants exploits ou recruter des partisans afin de devenir un chef de guerre à part entière.",
        "desc_you_could": [
            "Ressentir un profond sentiment de colère, de haine ou de frustration.",
            "Préférer une approche directe à une autre qui nécessite de la patience et provoque de l'ennui.",
            "Suivre un régime d'entraînement physique et cogner tous ceux qui prétendent que cela va à l'encontre de votre dégoût pour la patience et l'ennui."
        ],
        "desc_probably_others": [
            "Comptent sur votre courage et votre force et croient que vous pourrez vous débrouiller par vous-même en combat.",
            "Vous considèrent comme un être non civilisé ou un rustre incapable d'évoluer au sein de la haute société.",
            "Sont convaincus de votre loyauté envers vos amis et alliés et que vous n'abandonnerez jamais avant que le combat ne soit achevé."
        ],
        "mastery": {
            "perception": "E",
            "saves": [
                {
                    "level": "E",
                    "description": "Expert en Vigueur"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en Réflexes"
                },
                {
                    "level": "E",
                    "description": "Expert en Volonté"
                }
            ],
            "skills": [
                {
                    "level": "Q",
                    "description": "Qualifié en Athlétisme"
                },
                {
                    "level": "Q",
                    "description": "Qualifié dans un nombre de compétences supplémentaires égal à 3 plus votre modificateur d'Intelligence."
                }
            ],
            "attacks": [
                {
                    "level": "Q",
                    "description": "Qualifié avec les armes simples"
                },
                {
                    "level": "Q",
                    "description": "Qualifié avec les armes de guerre"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en attaques à mains nues"
                }
            ],
            "defenses": [
                {
                    "level": "Q",
                    "description": "Qualifié avec les armures légères"
                },
                {
                    "level": "Q",
                    "description": "Qualifié avec les armures intermédiaires"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en défense sans armure"
                }
            ],
            "spells": null,
            "class_dc": "Q",
            "rarity": null
        },
        "capacity_by_level": [
            "don de barbare, impulsif, instinct, maîtrises initiales, primes d'attributs, rage",
            "Don de barbare, don de compétence",
            "Amélioration de compétence, démarche furieuse, don général",
            "Don de barbare, don de compétence",
            "Amélioration de compétence, brutalité, don ancestral, primes d'attributs",
            "Don de barbare, don de compétence",
            "Amélioration de compétence, don général, juggernaut, spécialisation martiale",
            "Don de barbare, don de compétence",
            "Amélioration de compétence, don ancestral, expertise en réflexes, résistance enragée",
            "Don de barbare, don de compétence, primes d'attributs",
            "Amélioration de compétence, don général, rage formidable",
            "Don de barbare, don de compétence",
            "Amélioration de compétence, don ancestral, expertise avec les armures intermédiaires, juggernaut supérieur, maîtrise des armures intermédiaires",
            "Don de barbare, don de compétence",
            "Amélioration de compétence, don général, primes d'attributs, spécialisation martiale supérieure, volonté indomptable",
            "Don de barbare, don de compétence",
            "Amélioration de compétence, don ancestral, rage revitalisante, sens aiguisés",
            "Don de barbare, don de compétence",
            "Amélioration de compétence, dévastateur, don général, maîtrise des armures",
            "Don de barbare, don de compétence, primes d'attributs"
        ],
        "abilities": {
            "dons_de_barbare": {
                "name": "Dons de barbare",
                "description": [
                    "Au niveau 1, puis tous les niveaux pairs, vous obtenez un don de classe de barbare."
                ]
            },
            "impulsif": {
                "name": "Impulsif",
                "description": [
                    "Vous obtenez l'action gratuite <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'a9PzINjFTO5GvAJN'})\">Impulsif</div> , ce qui vous permet d'entrer en <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'Ah5g9pDwWF9b9VW9'})\">Rage</div> à la moindre provocation."
                ]
            },
            "impulsif_f": {
                "name": "Impulsif F",
                "description": [
                    "Déclencheur Vous déterminez l'initiative.",
                    "Conditions Vous n'êtes pas <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'D5mg6Tc7Jzrj6ro7'})\">Surchargé</div> et ne portez pas d'armure lourde.",
                    "Du moment que vous êtes capable de vous déplacer librement, votre fureur est instinctive et instantanée. Vous entrez en Rage."
                ]
            },
            "rage": {
                "name": "Rage",
                "description": [
                    "Vous obtenez l'action <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'Ah5g9pDwWF9b9VW9'})\">Rage</div> qui vous permet de vous déchaîner."
                ]
            },
            "rage_a": {
                "name": "Rage A",
                "description": [
                    "Conditions Vous n'êtes pas <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'HL2l2VRSaQHu9lUw'})\">Fatigué</div> ou en rage.",
                    "Vous faites appel à votre fureur intérieure et entrez en rage. Vous obtenez une quantité de Points de vie temporaires égale à votre niveau plus votre modificateur de Constitution. Pendant que vous êtes enragé :",
                    "Vous infligez 2 dégâts supplémentaires avec vos Frappes au corps-à-corps. Ces dégâts supplémentaires sont réduits de moitié si votre arme ou votre attaque à mains nues possède le trait agile.",
                    "Vous ne pouvez pas utiliser d'actions avec le trait concentration, sauf si elles possèdent également le trait rage. Vous pouvez <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'BlAOM2X92SI6HMtJ'})\">Chercher</div> pendant que vous êtes enragé.",
                    "La rage dure pendant 1 minute, jusqu'à ce que vous tombiez <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'fBnFDH2MTzgFijKf'})\">Inconscient</div> ou que la rencontre se termine, selon ce qui se produit en premier. Vous ne pouvez pas volontairement mettre fin à votre rage. Quand vous mettez un terme à votre rage, vous perdez tous Points de vie temporaires restants obtenus grâce à la rage et vous ne pouvez plus obtenir de nouveau de Points de vie temporaires en utilisant l'action de Rage de nouveau pendant 1 minute."
                ]
            },
            "instinct": {
                "name": "Instinct",
                "description": [
                    "Votre rage naît d'un instinct dominant, que vous avez hérité d'une tradition ou qui vous est venu naturellement. Votre instinct vous donne une capacité, vous oblige à éviter certains comportements, vous accorde des dégâts et des résistances accrus aux niveaux supérieurs et vous permet de choisir des dons liés à votre instinct.",
                    "Les instincts peuvent être trouvés ici :",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '0FtzFbUrN56KA67z'})\">Instinct animal</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'znxs0soGlusvRP39'})\">Instinct de décomposition</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'JuKD6k7nDwfO0Ckv'})\">Instinct de géant</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'k7M9jedvt31AJ5ZR'})\">Instinct de la furie</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'VDot7CDcXElxmkkz'})\">Instinct du dragon</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '0jSS6pgNXsC8k4o7'})\">Instinct élémentaire</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'qVAeSFTI1dq64bB8'})\">Instinct ligneux</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'TQqv9Q5mB4PW6LH9'})\">Instinct spirituel</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'SCYSjUbMmw8JD9P9'})\">Instinct superstitieux</div>"
                ]
            },
            "dons_de_competence": {
                "name": "Dons de compétence",
                "description": [
                    "Au niveau 2, puis tous les niveaux pairs, vous obtenez un don de compétence. vous devez être au moins qualifié dans la compétence correspondante pour choisir un don de compétence."
                ],
                "level": 2
            },
            "ameliorations_de_competence": {
                "name": "Améliorations de compétence",
                "description": [
                    "Au niveau 3, puis tous les 2 niveaux, vous obtenez une amélioration de compétence. Vous pouvez utiliser cette amélioration pour augmenter votre degré de maîtrise et devenir qualifié dans une compétence dans laquelle vous étiez inexpérimenté ou pour améliorer votre rang dans une compétence dans laquelle vous êtes déjà qualifié pour devenir expert.",
                    "À partir du niveau 7, vous pouvez utiliser l'amélioration de compétence pour devenir maître dans une compétence dans laquelle vous êtes déjà expert et à partir du niveau 15, vous pouvez l'utiliser pour devenir légendaire dans une compétence dans laquelle vous êtes déjà maître."
                ],
                "level": 3
            },
            "demarche_furieuse": {
                "name": "Démarche furieuse",
                "description": [
                    "L'envie de vous battre vous pousse à aller de l'avant. Vous obtenez un bonus de statut de +1,50 mètre à votre vitesse. Ce bonus passe à +3 mètres lorsque vous êtes enragé."
                ],
                "level": 3
            },
            "dons_generaux": {
                "name": "Dons généraux",
                "description": [
                    "Au niveau 3, puis tous les 4 niveaux, vous obtenez un don général."
                ],
                "level": 3
            },
            "brutalite": {
                "name": "Brutalité",
                "description": [
                    "Votre furie rend mortelles vos armes. Vous devenez expert avec les armes simples, les armes de guerre et les attaques à mains nues. Lorsque vous êtes Enragé, vous obtenez les avantages des effets critiques spécialisés des armes de corps-à-corps et des attaques à mains nues."
                ],
                "level": 5
            },
            "dons_ancestraux": {
                "name": "Dons ancestraux",
                "description": [
                    "En plus de celui avec lequel vous avez commencé, vous obtenez un don ancestral au niveau 5 puis tous les 4 niveaux."
                ],
                "level": 5
            },
            "primes_d_attributs": {
                "name": "Primes d'attributs",
                "description": [
                    "Au niveau 5, puis tous les 5 niveaux, vous améliorez quatre scores d'attributs différents. Vous pouvez utiliser ces primes d'attributs pour faire passer la valeur d'un score d'attribut au-dessus de +4. La prime augmente la valeur du score d'attribut de +1/2 s'il est supérieur ou égal à +4 ou de +1 s'il est inférieur à +3."
                ],
                "level": 5
            },
            "juggernaut": {
                "name": "Juggernaut",
                "description": [
                    "Votre corps s'est habitué à l'effort physique et à résister aux maladies. Vous devenez maître en jets de Vigueur. Quand vous obtenez un succès sur un jet de Vigueur, il devient un succès critique."
                ],
                "level": 7
            },
            "specialisation_martiale": {
                "name": "Spécialisation martiale",
                "description": [
                    "Vous avez appris à infliger des blessures plus importantes avec les armes que vous connaissez le mieux. Vous infligez 2 dégâts supplémentaires avec les armes et les attaques à mains nues avec lesquelles vous êtes expert. Ces dégâts passent à 3 si vous êtes maître et à 4 si vous êtes légendaire."
                ],
                "level": 7
            },
            "expertise_en_reflexes": {
                "name": "Expertise en réflexes",
                "description": [
                    "Vous avez développé un talent pour esquiver le danger. Vous devenez expert en jets de Réflexes.",
                    "Gardien Même dans la plus encombrante des armures, vous pouvez vous prémunir contre les effets répandus. Vous devenez expert en jets de Réflexes."
                ],
                "level": 9
            },
            "resistance_enragee": {
                "name": "Résistance enragée",
                "description": [
                    "Une exposition répétée et une peau épaisse vous permettent de mieux vous prémunir des dégâts. Quand vous êtes enragé, Vous obtenez une résistance égale à 3 + votre modificateur de Constitution face aux types de dégâts lié à votre instinct."
                ],
                "level": 9
            },
            "rage_formidable": {
                "name": "Rage formidable",
                "description": [
                    "Votre rage s'intensifie et vous permet de taper plus dur au début d'un combat. Vous devenez expert en DD de classe de barbare. De plus, lorsque vous utilisez Impulsif, la première Frappe que vous portez au cours de votre premier tour inflige des dégâts supplémentaires égaux aux dégâts de votre <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'Ah5g9pDwWF9b9VW9'})\">Rage</div> ."
                ],
                "level": 11
            },
            "juggernaut_superieur": {
                "name": "Juggernaut supérieur",
                "description": [
                    "Vous bénéficiez d'une physiologie particulièrement robuste. Votre degré de maîtrise pour les jets de Vigueur devient légendaire. Quand vous obtenez un échec critique sur un jet de Vigueur, il devient un échec. Lorsque vous obtenez un échec sur le jet de Vigueur contre un effet qui inflige des dégâts, vous diminuez de moitié les dégâts que vous subissez."
                ],
                "level": 13
            },
            "expertise_avec_les_armures_intermediaires": {
                "name": "Expertise avec les armures intermédiaires",
                "description": [
                    "Vous avez appris à vous défendre mieux contre les attaques. Vos rangs de maîtrise avec les armures légères, les armures intermédiaires et en défense sans armure passent à expert."
                ],
                "level": 13
            },
            "maitrise_des_armes": {
                "name": "Maîtrise des armes",
                "description": [
                    "Vous comprenez parfaitement vos armes. Vous devenez maître avec les armes simples et les armes de guerre ainsi que les attaques à mains nues."
                ],
                "level": 13
            },
            "specialisation_martiale_superieure": {
                "name": "Spécialisation martiale supérieure",
                "description": [
                    "Les armes que vous maîtrisez deviennent réellement terrifiantes entre vos mains. Les dégâts de spécialisation martiale passent à 4 avec les armes et les attaques à mains nues si vous possédez le rang expert avec celles-ci, à 6 si vous possédez le rang maître et à 8 si vous possédez le rang légendaire.",
                    "Vous gagnez plus d'avantages grâce au pouvoir de spécialisation de votre instinct."
                ],
                "level": 15
            },
            "volonte_indomptable": {
                "name": "Volonté indomptable",
                "description": [
                    "Votre rage vous rend difficile à contrôler. Votre degré de maîtrise pour les jets de Volonté passe à maître. Quand vous obtenez un succès sur un jet de Volonté, celui-ci est transformé en succès critique."
                ],
                "level": 15
            },
            "maitrise_en_perception": {
                "name": "Maîtrise en perception",
                "description": [
                    "Votre instinct aiguise chacun de vos sens. Vous devenez maître en Perception."
                ],
                "level": 17
            },
            "rage_revitalisante": {
                "name": "Rage revitalisante",
                "description": [
                    "Votre rage vous permet de tenir plus fréquemment, vous laissant prêt à sauter dans la bataille remis à neuf. Au lieu d'attendre 1 minute avant de pouvoir regagner des Points de vie temporaires, vous n'avez plus désormais besoin que d'attendre un tour complet sans être Enragé."
                ],
                "level": 17
            },
            "devastateur": {
                "name": "Dévastateur",
                "description": [
                    "Vos Frappes sont si dévastatrices que vous souciez peu de la résistance et vos capacités de barbare sont sans pareille. Vous devenez maître dans le DD de classe de barbare. Vos Frappes au corps-à-corps ignorent 10 points de résistance aux dégâts physiques qu'elles infligent."
                ],
                "level": 19
            },
            "maitrise_des_armures": {
                "name": "Maîtrise des armures",
                "description": [
                    "Votre entraînement et votre rage vous permettent d'approfondir votre lien avec votre armure. Vous devenez maître avec les armures légères et intermédiaires ainsi qu'en défense sans armure."
                ],
                "level": 19
            }
        }
    },
    {
        "name": "Barde",
        "key": "barde",
        "general_desc": "Vous êtes un maître des arts, un érudit des secrets cachés et un persuadeur envoûtant. Grâce à de puissantes représentations, vous influencez les esprits et élevez les âmes à de nouveaux niveaux d'héroïsme. Vous pouvez utiliser vos pouvoirs pour devenir un leader charismatique, mais vous pouvez aussi être un conseiller, un manipulateur, un érudit, un scélérat ou un virtuose. Si votre polyvalence conduit certains à vous considérer comme un séduisant bonimenteur et un touche-à-tout, il est dangereux de ne pas vous considérer comme un maître en la matière.",
        "characteristics_bonus": {
            "number": 1,
            "choice": [
                "CHA"
            ]
        },
        "life_point_by_level": 8,
        "desc_fight": "Vous utilisez des représentations magiques pour modifier les chances en faveur de vos alliés. Vous alternez avec assurance les attaques, les soins et les sorts utiles en fonction des besoins.",
        "desc_socially": "Vous persuadez, tergiversez et menacez avec aisance.",
        "desc_exploration": "Vous êtes un puits de connaissances, de contes, de légendes et de savoir qui fournissent un contexte plus vaste et une reconnaissance utile pour les aventures du groupe. Vos sorts et vos représentations inspirent à vos alliés de plus grandes découvertes et de plus grands succès.",
        "desc_interlude": "Vous pouvez gagner de l'argent et du prestige à l'aide de vos représentations, en vous faisant un nom et en acquérant des mécènes. Enfin, les récits de vos talents et de vos triomphes pourraient inciter d'autres bardes à étudier vos techniques dans un collège de bardes.",
        "desc_you_could": [
            "Être si passionné par votre art que vous forgez une relation spirituelle avec lui.",
            "Prendre les choses en main quand le tact et les solutions non violentes sont nécessaires.",
            "Suivre votre muse, qu'elle soit une mystérieuse créature féerique, un concept philosophique, une force psychique ou une divinité de l'art ou de la musique et, avec son aide, découvrir des connaissances secrètes que peu d'autres possèdent."
        ],
        "desc_probably_others": [
            "Prennent plaisir à vous inviter lors des évènements mondains, que ce soit comme artiste ou comme invité, mais ont tendance à vous considérer comme une sorte de curiosité dans leurs cercles sociaux.",
            "Vous sous-estiment par rapport à d'autres lanceurs de sort, en pensant que vous n'êtes rien de plus qu'un ménestrel précieux en sous-estimant la subtile puissance de votre magie.",
            "Réagissent favorablement à votre charme et à vos capacités sociales mais restent méfiants quant à votre magie envoûtante."
        ],
        "mastery": {
            "perception": "E",
            "saves": [
                {
                    "level": "Q",
                    "description": "Qualifié en Vigueur"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en Réflexes"
                },
                {
                    "level": "E",
                    "description": "Expert en Volonté"
                }
            ],
            "skills": [
                {
                    "level": "Q",
                    "description": "Qualifié en Occultisme"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en Représentations"
                },
                {
                    "level": "Q",
                    "description": "Qualifié dans un nombre de compétences supplémentaires égal à 4 plus votre modificateur d'Intelligence"
                }
            ],
            "attacks": [
                {
                    "level": "Q",
                    "description": "Qualifié avec les attaques à mains nues"
                },
                {
                    "level": "Q",
                    "description": "Qualifié avec les armes simples"
                },
                {
                    "level": "Q",
                    "description": "Qualifié avec les armes de guerre"
                }
            ],
            "defenses": [
                {
                    "level": "Q",
                    "description": "Qualifié en défense sans armure"
                },
                {
                    "level": "Q",
                    "description": "Qualifié avec les armures légères"
                }
            ],
            "spells": [
                {
                    "level": "Q",
                    "description": "Qualifié en modificateur d'attaque de sort"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en DD de sort"
                }
            ],
            "class_dc": "Q",
            "rarity": null
        },
        "capacity_by_level": [
            "incantation de barde, maîtrises initiales, muse, primes d'attribut, répertoire de sorts, sorts de composition",
            "Don de barde, don de compétence",
            "Amélioration de compétence, don général, expertise en réflexes, sorts de rang 2, sorts emblématiques",
            "Don de barde, don de compétence",
            "Amélioration de compétence, don ancestral, primes d'attributs, sorts de rang 3",
            "Don de barde, don de compétence",
            "Amélioration de compétence, don général, incantateur expert, sorts de rang 4",
            "Don de barde, don de compétence",
            "Amélioration de compétence, cœur de performeur, don ancestral, expert en vigueur, sorts de rang 5, vigueur surhumaine",
            "Don de barde, don de compétence, primes d'attributs",
            "Amélioration de compétence, don général, expertise avec les armes du barde, maîtrise en perception, sorts de rang 6",
            "Don de barde, don de compétence",
            "Amélioration de compétence, don ancestral, expertise avec les armures légères, sorts de rang 7, spécialisation martiale",
            "Don de barde, don de compétence",
            "Amélioration de compétence, don général, incantateur maître, primes d'attributs, sorts de rang 8",
            "Don de barde, don de compétence",
            "Amélioration de compétence, coeur de performeur supérieur, don ancestral, sorts de rang 9",
            "Don de barde, don de compétence",
            "Amélioration de compétence, don général, incantateur légendaire, magnum opus",
            "Don de barde, don de compétence, primes d'attributs"
        ],
        "abilities": {
            "incantation_de_barde": {
                "name": "Incantation de barde",
                "description": [
                    "Vous puisez la magie de vos connaissances ésotériques. Vous êtes un incantateur et pouvez lancer des sorts de la tradition occulte en utilisant l'activité Lancer un sort.",
                    "En tant que barde, lorsque vous lancez des sorts, vos incantations pourraient être des airs de musique ou des poèmes savants, vos gestes pourraient incorporer de la danse et des pantomimes théâtrales et vous pourriez accompagner l'incantation de vos sorts en jouant d'un instrument de musique.",
                    "Vous pouvez lancer jusqu'à deux sorts de rang 1 par jour. Vous devez connaître ces sorts pour les lancer et vous les apprenez grâce à la capacité de classe répertoire de sorts. Le nombre de sorts que vous pouvez lancer chaque jour est représenté par vos emplacements de sort.",
                    "En gagnant des niveaux en tant que barde, le nombre de sorts, ainsi que le rang du sort le plus élevé, que vous pouvez lancer quotidiennement augmentent, comme indiqué dans le tableau des sorts de barde par jour.",
                    "Certains sorts exigent un jet d'attaque de sort pour déterminer leur efficacité ou obligent vos ennemis à faire un jet contre leur DD (en général un jet de sauvegarde). Comme le Charisme est votre attribut essentiel, vos jets d'attaque de sort et vos DD utilisent votre modificateur de Charisme."
                ]
            },
            "muses": {
                "name": "Muses",
                "description": [
                    "En tant que barde, vous choisissez une muse au niveau 1. Cette muse vous conduit à faire de grandes choses et pourrait être quelqu'un que vous connaissez, une créature surnaturelle, un lieu, une divinité, une philosophie ou un mystère fascinant. En fonction du type d'inspiration que vous recevez, votre muse vous accorde au niveau 1 un don de barde de niveau 1 et ajoute un sort à votre répertoire.",
                    "En plus de cela, chaque muse ouvre la porte à nombre de dons de bardes. Si un type d'inspiration n'est pas suffisante pour représenter votre muse, considérez le don <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'a898miJnjgD93ZsX'})\">Muse polyvalente</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'N03BtRvjX9TeHRa4'})\">Combattante</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '4ripp6EfdVpS0d60'})\">Énigmatique</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'YMBsi4bndRAk5CX4'})\">Maestro</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'y0jGimYdMGDJWrEq'})\">Touche-à-tout</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'jHOlcSnGyjCnwoPP'})\">Zoophonie</div>"
                ]
            },
            "repertoire_de_sorts": {
                "name": "Répertoire de sorts",
                "description": [
                    "On appelle répertoire de sorts l'ensemble des sorts que vous pouvez lancer. Au niveau 1, vous apprenez deux sorts occultes de rang 1 ainsi que cinq tours de magie occultes de votre choix. Vous les choisissez dans la liste des sorts occultes courants ou parmi les autres sorts occultes auxquels vous avez accès. Vous pouvez lancer tout sort de votre répertoire en utilisant un emplacement de sort du rang approprié.",
                    "Vous ajoutez à ce répertoire de sorts lorsque vous gagnez des niveaux. Chaque fois que vous obtenez un emplacement de sort (voir les sorts de barde par jour), vous ajoutez un sort du même rang dans votre répertoire. Au niveau 2, vous choisissez un autre sort de rang 1. Au niveau 3, vous choisissez deux sorts de rang 2, etc. Quand vous ajoutez des sorts, vous pourriez ajouter la version de rang supérieur d'un sort que vous connaissez déjà afin de pouvoir lancer une version intensifiée de ce sort.",
                    "Bien que vous les obteniez au même rythme, vos emplacements de sort et les sorts dans votre répertoire sont deux choses distinctes. Si un don ou une autre capacité ajoute un sort à votre répertoire de sorts, cela ne vous donne pas pour autant un nouvel emplacement de sort et vice versa."
                ]
            },
            "remplacer_des_sorts_de_votre_repertoire": {
                "name": "Remplacer des sorts de votre répertoire",
                "description": [
                    "Lorsque vous ajoutez de nouveaux sorts dans votre répertoire, vous pourriez vouloir remplacer certains des sorts que vous avez appris auparavant. Chaque fois que vous gagnez un niveau et que vous apprenez de nouveaux sorts, vous pouvez remplacer l'un de vos anciens sorts par un sort différent du même rang. Ce sort peut être un tour de magie. Vous pouvez également remplacer des sorts grâce au réapprentissage au cours des périodes d'intermède."
                ]
            },
            "sorts_de_composition": {
                "name": "Sorts de composition",
                "description": [
                    "Vous pouvez imprégner vos représentations de magie pour créer des effets uniques appelés des compositions. Les compositions forment un type spécial de sort qui nécessite souvent l'utilisation de la compétence Représentation lorsque vous les incantez. Les sorts de composition sont un type de sorts focalisés. Il faut dépenser 1 point de focalisation pour lancer un sort focalisé et vous commencez avec une réserve de focalisation de 1 point de focalisation. Vous remplissez votre réserve de focalisation au cours de vos préparatifs quotidiens et vous pouvez récupérer 1 point de focalisation en passant 10 minutes en utilisant l'activité Refocaliser en assurant une représentation, en créant une nouvelle composition ou en suscitant votre muse autrement.",
                    "Les sorts focalisés sont automatiquement intensifiés à la moitié de votre niveau arrondi au supérieur, comme les tours de magie. Un sort focalisé n'a pas besoin d'emplacement de sort et vous les lancer en utilisant un emplacement de sort. Prendre des dons peut vous donner plus de sorts focalisés et augmenter votre réserve de focalisation, bien que cette dernière ne puisse jamais contenir plus de 3 points de focalisation. Vous apprenez le sort de composition <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'WILXkjU5Yq3yw10r'})\">Contre-représentation</div> qui vous protège contre les effets audibles et visuels."
                ]
            },
            "tours_de_magie_de_composition": {
                "name": "Tours de magie de composition",
                "description": [
                    "Les tours de magie de composition sont des sorts de compositions spéciaux qui ne coûtent aucun point de focalisation, de sorte que vous pouvez les utiliser aussi souvent que vous le souhaitez. Les tours de magie de composition s'ajoutent à ceux que vous sélectionnez avec incantation du barde. Contrairement aux autres tours de magie, vous ne pouvez pas remplacer les tours de magie de composition obtenus grâce à un don de barde à un niveau ultérieur, à moins que vous ne remplaciez ce don particulier grâce au réapprentissage.",
                    "Vous apprenez le tour de magie de composition <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'IAjvwqgiDr3qGYxY'})\">Hymne de courage</div> qui améliore les attaques, les dégâts et la défense contre la terreur chez vos alliés."
                ]
            },
            "dons_de_barde": {
                "name": "Dons de barde",
                "description": [
                    "Au niveau 2, puis tous les niveaux pairs, vous obtenez un don de classe de barde."
                ],
                "level": 2
            },
            "dons_de_competences": {
                "name": "Dons de compétences",
                "description": [
                    "Au niveau 2, puis tous les deux niveaux, vous obtenez un don de compétence. Ces dons disposent du trait compétence. Vous devez être au moins qualifié dans la compétence correspondante pour choisir un don de compétence."
                ],
                "level": 2
            },
            "ameliorations_de_competence": {
                "name": "Améliorations de compétence",
                "description": [
                    "Au niveau 3, puis tous les 2 niveaux, vous obtenez une amélioration de compétence. Vous pouvez utiliser cette amélioration pour augmenter votre degré de maîtrise et devenir qualifié dans une compétence dans laquelle vous étiez inexpérimenté ou pour améliorer votre rang dans une compétence dans laquelle vous êtes déjà qualifié pour devenir expert.",
                    "À partir du niveau 7, vous pouvez utiliser l'amélioration de compétence pour devenir maître dans une compétence dans laquelle vous êtes déjà expert et à partir du niveau 15, vous pouvez l'utiliser pour devenir légendaire dans une compétence dans laquelle vous êtes déjà maître."
                ],
                "level": 3
            },
            "dons_generaux": {
                "name": "Dons généraux",
                "description": [
                    "Au niveau 3, puis tous les 4 niveaux, vous obtenez un don général."
                ],
                "level": 3
            },
            "expertise_en_reflexes": {
                "name": "Expertise en réflexes",
                "description": [
                    "Vous avez développé un talent pour esquiver le danger. Vous devenez expert en jets de Réflexes.",
                    "Gardien Même dans la plus encombrante des armures, vous pouvez vous prémunir contre les effets répandus. Vous devenez expert en jets de Réflexes."
                ],
                "level": 3
            },
            "sorts_emblematiques": {
                "name": "Sorts emblématiques",
                "description": [
                    "L'expérience vous permet de lancer certains sorts avec plus de souplesse. Pour chaque rang de sort auquel vous avez accès, choisissez un sort de ce rang pour en faire un sort emblématique. Vous n'avez pas besoin d'apprendre une à une les versions intensifiées des sorts emblématiques. Au lieu de cela, vous pouvez intensifier librement ces sorts. Si vous avez appris un sort emblématique à un rang supérieur à son rang minimum, vous pouvez également lancer toutes ses versions de rang inférieur sans avoir à apprendre ces derniers séparément. Si vous remplacez un sort emblématique, vous pouvez l'échanger contre un autre sort emblématique de même rang que celui auquel vous avez appris celui que vous remplacez. Il est nécessaire de passer autant de temps de réapprentissage que pour un sort."
                ],
                "level": 3
            },
            "dons_ancestraux": {
                "name": "Dons ancestraux",
                "description": [
                    "En plus de celui avec lequel vous avez débuté, vous obtenez un don ancestral au niveau 5 puis tous les quatre niveaux."
                ],
                "level": 5
            },
            "primes_d_attributs": {
                "name": "Primes d'attributs",
                "description": [
                    "Au niveau 5, puis tous les 5 niveaux, vous améliorez quatre scores d'attributs différents. Vous pouvez utiliser ces primes d'attributs pour faire passer la valeur d'un score d'attribut au-dessus de +4. La prime augmente la valeur du score d'attribut de +1/2 s'il est supérieur ou égal à +4 ou de +1 s'il est inférieur à +3."
                ],
                "level": 5
            },
            "incantateur_expert": {
                "name": "Incantateur expert",
                "description": [
                    "Vos techniques magiques se renforcent. Vous devenez expert en modificateur d'attaque de sorts et en DD de sort."
                ],
                "level": 7
            },
            "c_ur_de_performeur": {
                "name": "Cœur de performeur",
                "description": [
                    "De plus grandes performances nécessitent une compréhension de votre propre esprit et de vos défauts de concentration. Votre degré de maîtrise pour les jets de Volonté passe à maître. Lorsque vous obtenez un succès sur un jet de Volonté, il devient un succès critique."
                ],
                "level": 9
            },
            "expertise_en_vigueur": {
                "name": "Expertise en Vigueur",
                "description": [
                    "Votre physique s'est endurci au fil de vos aventures. Vous devenez expert en jets de Vigueur."
                ],
                "level": 9
            },
            "expertise_avec_les_armes_du_barde": {
                "name": "Expertise avec les armes du barde",
                "description": [
                    "Vous êtes à présent un véritable expert du maniement des armes de barde. Votre degré de maîtrise avec les armes simples, les armes de guerre et les attaques à mains nues passe à expert. Lorsque vous obtenez un coup critique sur un jet d'attaque en utilisant l'une de ces armes pendant que l'une de vos compositions est active, vous appliquez l'effet critique spécialisé de cette arme ou de cette attaque à mains nues."
                ],
                "level": 11
            },
            "maitrise_en_perception": {
                "name": "Maîtrise en perception",
                "description": [
                    "Vous avez développé une vigilance accrue et une attention particulière aux détails. Vous devenez maître en Perception."
                ],
                "level": 11
            },
            "expertise_avec_les_armures_legeres": {
                "name": "Expertise avec les armures légères",
                "description": [
                    "Vous avez appris à mieux esquiver en ne portant pas d'armure ou une armure légère. Votre degré de maîtrise avec les armures légères et en défense sans armure passe à expert."
                ],
                "level": 13
            },
            "specialisation_martiale": {
                "name": "Spécialisation martiale",
                "description": [
                    "Vous avez appris à infliger des blessures plus importantes avec les armes que vous connaissez le mieux. Vous infligez 2 dégâts supplémentaires avec les armes et les attaques à mains nues avec lesquelles vous êtes expert. Ces dégâts passent à 3 si vous êtes maître et à 4 si vous êtes légendaire."
                ],
                "level": 13
            },
            "maitre_incantateur": {
                "name": "Maître incantateur",
                "description": [
                    "Vous pincez les fils de la magie comme les cordes d'une harpe. Vous devenez maître en modificateur d'attaque de sorts et en DD de sort."
                ],
                "level": 15
            },
            "c_ur_de_performeur_superieur": {
                "name": "Cœur de performeur supérieur",
                "description": [
                    "Vos représentations déforment l'esprit et font fleurir les émotions, et comprendre comment y parvenir forge également une compréhension incomparable de votre propre esprit. Votre rang de compétence pour les jets de Volonté passe à légendaire. Lorsque vous obtenez un échec critique sur un jet de Volonté, il devient un échec. Lorsque vous obtenez un échec sur un jet de Volonté contre un effet qui inflige des dégâts, vous ne subissez que la moitié des dégâts."
                ],
                "level": 17
            },
            "incantateur_legendaire": {
                "name": "Incantateur légendaire",
                "description": [
                    "Votre maîtrise de la magie est digne des légendes. Vous devenez légendaire en modificateur d'attaque de sorts et en DD de sorts."
                ],
                "level": 19
            },
            "magnum_opus": {
                "name": "Magnum Opus",
                "description": [
                    "Vous avez porté vos capacités d'incantation au plus haut niveau. Ajoutez deux sorts occultes courants de rang 10 à votre répertoire. Vous obtenez un unique emplacement de sort de rang 10 que vous pouvez utiliser pour lancer ces sorts en utilisant la capacité incantation du barde. Contrairement aux autres emplacements de sorts, vous ne pouvez utiliser les emplacements de sort de rang 10 avec des capacités qui vous accordent plus d'emplacements de sorts ou qui vous permettent de lancer des sorts sans dépenser d'emplacements de sorts. Vous n'obtenez pas d'autres sorts de rang 10 lorsque vous gagnez un niveau, mais vous pouvez prendre le don Rappel parfait pour obtenir un second emplacement."
                ],
                "level": 19
            }
        }
    },
    {
        "name": "Bretteur",
        "key": "bretteur",
        "general_desc": "De nombreux combattants se reposent principalement sur la force brute, les armures lourdes ou les armes encombrantes. Pour vous, le combat est une danse au cours de laquelle vous vous déplacez parmi vos adversaires avec style et grâce. Vous glissez entre les combattants avec élégance et portez de puissantes bottes précises d'un geste du poignet et d'un bref éclair de votre lame, tout en parant les attaques avec des ripostes élégantes qui déstabilisent vos ennemis. Harceler et déjouer vos ennemis vous permet de charmer le destin et de tromper la mort à maintes reprises, avec brio et une touche de flamboyance.",
        "characteristics_bonus": {
            "number": 1,
            "choice": [
                "DEX"
            ]
        },
        "life_point_by_level": 10,
        "desc_fight": "Vous frimez pour obtenir du panache et tirez parti de votre élégance pour pouvoir placer progressivement de puissantes bottes finales. Vous restez agile, pour obtenir la meilleure position de manière à placer vos manœuvres tout en esquivant les coups ennemis et en y répondant par de rapides ripostes. En fonction de votre style, vous pouvez danser au milieu de vos adversaires, vous glisser sous leurs défenses ou les tromper, les distraire ou les effrayer.",
        "desc_socially": "Vous pouvez tout autant charmer ou intimider les autres, voire les deux en même temps. Vous pourriez être un habile mondain ou vous pourriez créer des distractions pour d'autres qui conduisent la discussion.",
        "desc_exploration": "Vous gardez un œil attentif sur votre environnement et sur les autres, toujours prêt à passer à l'action avec bravoure et élégance. Vous interagissez avec votre environnement de manière audacieuse et déterminée, préférant les gestes francs et spectaculaires à la discrétion et à la dissimulation.",
        "desc_interlude": "Vous pourriez festoyer à la taverne, réparer et entretenir votre équipement ou vous entraîner pour apprendre de nouvelles techniques. Pour conserver votre réputation impressionnante, vous pouvez mettre sur pied une organisation à votre nom ou monter une cohorte d'admirateurs.",
        "desc_you_could": [
            "Vous présenter comme un trompe-la-mort héroïque ou un fanfaron sans scrupule, en sachant que vous pouvez assumer cette image.",
            "Avoir une haute estime de vous-même, confiant en vos capacités et en votre réputation.",
            "Pratiquer régulièrement vos talents et vos manœuvres pour vous assurer de ne jamais vous sentir rouillé."
        ],
        "desc_probably_others": [
            "Admirent votre comportement théâtral, votre bravoure et votre talent avec les lames.",
            "Vous trouvent arrogant, à moins qu'ils ne vous connaissent suffisamment pour apprécier votre style.",
            "Sous-estiment le danger que vous représentez jusqu'à ce qu'ils se retrouvent face à votre lame mortelle."
        ],
        "mastery": {
            "perception": "E",
            "saves": [
                {
                    "level": "Q",
                    "description": "Qualifié en Vigueur"
                },
                {
                    "level": "E",
                    "description": "Expert en Réflexes"
                },
                {
                    "level": "E",
                    "description": "Expert en Volonté"
                }
            ],
            "skills": [
                {
                    "level": "Q",
                    "description": "Qualifié en Acrobaties"
                },
                {
                    "level": "Q",
                    "description": "Qualifié dans une compétence déterminée par votre style de bretteur"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en un nombre de compétences égal à 4 plus votre modificateur d'Intelligence"
                }
            ],
            "attacks": [
                {
                    "level": "Q",
                    "description": "Qualifié avec les armes simples"
                },
                {
                    "level": "Q",
                    "description": "Qualifié avec les armes de guerre"
                },
                {
                    "level": "Q",
                    "description": "Qualifié avec les attaques à mains nues"
                }
            ],
            "defenses": [
                {
                    "level": "Q",
                    "description": "Qualifié avec les armures légères"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en défense sans armure"
                }
            ],
            "spells": null,
            "class_dc": "Q",
            "rarity": null
        },
        "capacity_by_level": [
            "Aboutissement assuré, combattant stylé, don de bretteur, frappe précise, maîtrises initiales, panache, primes d'attributs, style de bretteur",
            "Don de bretteur, don de compétence",
            "Amélioration de compétence, astuce de style, don général, expertise en vigueur, riposte opportune, vitesse exubérante",
            "Don de bretteur, don de compétence",
            "Amélioration de compétence, don ancestral, expertise avec les armes, frappe précise (3d6), primes d'attributs",
            "Don de bretteur, don de compétence",
            "Amélioration de compétence, astuce de style, don général, évasion confiante, spécialisation martiale, vitesse exubérante",
            "Don de bretteur, don de compétence",
            "Amélioration de compétence, aboutissement exemplaire, don ancestral, expertise du bretteur, frappe précise (4d6)",
            "Don de bretteur, don de compétence, primes d'attributs",
            "Amélioration de compétence, don général, élégance continuelle, maîtrise en perception, vitesse éxubérante",
            "Don de bretteur, don de compétence",
            "Amélioration de compétence, don ancestral, évasion améliorée, expertise avec les armures légères, frappe précise (5d6), maîtrise des armes",
            "Don de bretteur, don de compétence",
            "Amélioration de compétence, astuce de style, don général, élégance aiguë, primes d'attributs, spécialisation martiale supérieure, vitesse exubérante",
            "Don de bretteur, don de compétence",
            "Amélioration de compétence, don ancestral, frappe précise (6d6), résolution",
            "Don de bretteur, don de compétence",
            "Amélioration de compétence, confiance éternelle, don général, maîtrise des armures légères, vitesse exubérante",
            "Don de bretteur, don de compétence, primes d'attributs"
        ],
        "abilities": {
            "aboutissement_assure": {
                "name": "Aboutissement assuré",
                "description": [
                    "Vous obtenez une attaque finale élégante que vous pouvez porter quand vous possédez du panache. Vous obtenez l'action <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'K878asDgf1EF0B9S'})\">Aboutissement assuré</div> ."
                ]
            },
            "combattant_style": {
                "name": "Combattant stylé",
                "description": [
                    "Vous obtenez un bonus de circonstances de +1 aux tests de compétences ayant le trait bravade au cours d'une rencontre de combat. Tant que vous avez du panache, vous bénéficiez d'un bonus de statut de +1,50 mètre à vos Vitesses."
                ]
            },
            "dons_de_bretteur": {
                "name": "Dons de bretteur",
                "description": [
                    "Au niveau 1 puis tous les niveaux pairs, vous obtenez un don de classe de bretteur."
                ]
            },
            "frappe_precise": {
                "name": "Frappe précise",
                "description": [
                    "Lorsque vous portez une Frappe avec une arme au corps-à-corps possédant le trait agile ou finesse ou une attaque à mains nues avec ces mêmes traits, vous infligez 2 dégâts supplémentaires de précision. Si la Frappe fait partie d'un aboutissement, les dégâts supplémentaires passent à 2d6 dégâts de précision à la place.",
                    "Lorsque votre niveau de bretteur augmente, c'est aussi le cas des dégâts supplémentaires de Frappe précise. Aux niveaux 5, 9, 13 et 17, augmentez le montant des dégâts supplémentaires sur une Frappe de 1 et les dégâts supplémentaires sur un aboutissement de 1d6."
                ]
            },
            "panache": {
                "name": "Panache",
                "description": [
                    "Vous vous souciez autant de la manière d'accomplir quelque chose que du fait de l'accomplir. Quand vous réalisez une action avec une élégance particulière, vous pouvez tirer parti de ce moment de grâce pour réaliser des manœuvres spectaculaires et mortelles. Cet état de grâce s'appelle le panache.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'uBJsxCzNhje8m8jj'})\">Effet : Panache</div>",
                    "Vous obtenez du panache en accomplissant des actions qui possèdent le trait bravade. <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '21WIfSu7Xd7uKqV8'})\">Déplacement acrobatique</div> et des actions supplémentaires déterminées par votre style de bretteur obtiennent le trait bravade. Le MJ pourrait décider qu'accomplir une action particulièrement osée, comme vous balancer à un chandelier ou glisser le long d'une tenture, peuvent gagner le trait bravade. Ces tests impliquent typiquement au moins une action et un DD qui ne soit pas trivial. Normalement, vous obtenez et utilisez votre panache uniquement lors des rencontres de combat. Lorsqu'une rencontre se termine, vous perdez votre panache.",
                    "De puissantes actions d'aboutissement, comme <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'K878asDgf1EF0B9S'})\">Aboutissement assuré</div> , ne peuvent être utilisées que si vous disposez de panache et elles vous font perdre du panache."
                ]
            },
            "style_de_bretteur": {
                "name": "Style de bretteur",
                "description": [
                    "Votre propre style distinctif vous permet de gérer avec élégance chaque situation. Choisissez un style de bretteur. Ce style détermine les actions supplémentaires que vous pouvez utiliser pour gagner du panache et vous rend qualifié dans la compétence liée à cette action.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '5HoEwzLDJGTCZtFa'})\">Danseur de combat</div> Pour vous, un combat est une sorte de représentation artistique et vous captez l'attention de vos ennemis par des mouvements hypnotisants. Vous êtes qualifié en Représentation et obtenez le don de compétence <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '7LB00jkh6JaJr3vS'})\">Représentation fascinante</div> . Quand vous <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'EEDElIyin4z60PXx'})\">Vous produisez</div> , l'action obtient le trait bravade.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'Jgid6Ja6Y879COlN'})\">Escrimeur</div> Vous vous déplacez précautionneusement, en feintant et en créant de fausses ouvertures pour conduire vos adversaires à faire des attaques inopportunes. Vous êtes qualifié en Duperie. Lorsque vous <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'QNAVeNKtHA0EUw4X'})\">Feintez</div> ou <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'GkmbTGfg8KcgynOA'})\">Créez une diversion</div> , l'action obtient le trait bravade.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '4lGhbEjlEoGP4scl'})\">Esprit</div> Vous êtes amical, intelligent et plein d'humour et vous savez toujours quoi dire. Vos traits d'esprit laissent vos ennemis à la merci du talent et de la rapidité de vos attaques. Vous êtes qualifié en Diplomatie et obtenez le don de compétence <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '0GF2j54roPFIDmXf'})\">Bon Mot</div> . Lorsque vous utilisez Bon mot, l'action obtient le trait bravade.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'KBhwFjdptrKyN5EM'})\">Fanfaron</div> Vous vous vantez, vous moquez et aiguillonnez psychologiquement vos ennemis. Vous êtes qualifié en Intimidation. Lorsque vous <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '2u915NdUyQan6uKF'})\">Démoralisez</div> , l'action obtient le trait bravade.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'XKhg55V7WmpLrvqL'})\">Fripouille</div> Vous n'avez pas peur d'utiliser des tactiques fourbes pour prendre l'avantage sur vos adversaires. Vous êtes qualifié en Vol et obtenez le don général <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '5eNKs6738aykAhK2'})\">Sale coup</div> . Lorsque vous utilisez Sale coup, l'action obtient le trait bravade.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'B7RMnrHwQHlezlJT'})\">Gymnaste</div> Vous vous repositionnez, manœuvrez et déroutez vos ennemis par des prouesses physiques audacieuses. Vous êtes qualifié en Athlétisme. Lorsque vous <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'PMbdMWc2QroouFGD'})\">Saisissez</div> , <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '7blmbDrQFNfdT731'})\">Poussez</div> , <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'lOE4yjUnETTdaf2T'})\">Repositionnez</div> ou faites un <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'ge56Lu1xXVFYUnLP'})\">Croc-en-jambe</div> à un adversaire, l'action obtient le trait bravade."
                ]
            },
            "dons_de_competence": {
                "name": "Dons de compétence",
                "description": [
                    "Au niveau 2, puis tous les niveaux pairs, vous obtenez un don de compétence. vous devez être au moins qualifié dans la compétence correspondante pour choisir un don de compétence."
                ],
                "level": 2
            },
            "ameliorations_de_competence": {
                "name": "Améliorations de compétence",
                "description": [
                    "Au niveau 3, puis tous les 2 niveaux, vous obtenez une amélioration de compétence. Vous pouvez utiliser cette amélioration pour augmenter votre degré de maîtrise et devenir qualifié dans une compétence dans laquelle vous étiez inexpérimenté ou pour améliorer votre rang dans une compétence dans laquelle vous êtes déjà qualifié pour devenir expert.",
                    "À partir du niveau 7, vous pouvez utiliser l'amélioration de compétence pour devenir maître dans une compétence dans laquelle vous êtes déjà expert et à partir du niveau 15, vous pouvez l'utiliser pour devenir légendaire dans une compétence dans laquelle vous êtes déjà maître."
                ],
                "level": 3
            },
            "astuce_de_style": {
                "name": "Astuce de style",
                "description": [
                    "Aux niveaux 3, 7 et 15, vous obtenez une amélioration de compétence supplémentaire que vous ne pouvez appliquer qu'en Acrobaties ou à la compétence de votre style de bretteur."
                ],
                "level": 3
            },
            "dons_generaux": {
                "name": "Dons généraux",
                "description": [
                    "Au niveau 3 puis tous les 4 niveaux par la suite, vous obtenez un don général."
                ],
                "level": 3
            },
            "expertise_en_vigueur": {
                "name": "Expertise en vigueur",
                "description": [
                    "Les aventures ont rendu votre physique plus résistant. Vous devenez expert en jets de Vigueur."
                ],
                "level": 3
            },
            "riposte_opportune": {
                "name": "Riposte opportune",
                "description": [
                    "Vous renversez la situation quand des ennemis font un faux pas en combat, profitant immédiatement de leur erreur. Vous gagnez la réaction <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'EfjoIuDmtUn4yiow'})\">Riposte opportune</div> ."
                ],
                "level": 3
            },
            "vitesse_exuberante": {
                "name": "Vitesse exubérante",
                "description": [
                    "Quand vous avez fait forte impression, vous pouvez vous déplacer encore plus vite que la normale, virevoltant sur le champ de bataille à une vitesse incroyable. Augmentez votre bonus de statut à vos Vitesses de Combattant stylé à +3 mètres. Ce bonus augmente de +1,50 mètre aux niveaux 7, 11, 15 et 19. Quand vous ne possédez pas de panache, vous bénéficiez tout de même de la moitié de ce bonus de statut à votre Vitesse (arrondi à la plus proche tranche de 1,50 mètre inférieure)."
                ],
                "level": 3
            },
            "dons_ancestraux": {
                "name": "Dons ancestraux",
                "description": [
                    "En plus de celui avec lequel vous avez commencé, vous obtenez un don ancestral au niveau 5 puis tous les 4 niveaux."
                ],
                "level": 5
            },
            "expertise_avec_les_armes": {
                "name": "Expertise avec les armes",
                "description": [
                    "Vous vous consacrez à l'apprentissage approfondi des subtilités de vos armes. Vous devenez expert avec les armes simples, les armes de guerre et les attaques à mains nues. Vous obtenez l'accès aux effets critiques spécialisés de toutes les armes pour lesquelles vous êtes expert."
                ],
                "level": 5
            },
            "primes_d_attributs": {
                "name": "Primes d'attributs",
                "description": [
                    "Au niveau 5, puis tous les 5 niveaux, vous améliorez quatre scores d'attributs différents. Vous pouvez utiliser ces primes d'attributs pour faire passer la valeur d'un score d'attribut au-dessus de +4. La prime augmente la valeur du score d'attribut de +1/2 s'il est supérieur ou égal à +4 ou de +1 s'il est inférieur à +3."
                ],
                "level": 5
            },
            "evasion_confiante": {
                "name": "Évasion confiante",
                "description": [
                    "Vous avez appris à vous déplacer rapidement afin d'échapper aux explosions, au souffle d'un dragon et à bien pire. Vous devenez maître en jets de Réflexes. Quand vous obtenez un succès sur un jet de Réflexes, il devient un succès critique."
                ],
                "level": 7
            },
            "specialisation_martiale": {
                "name": "Spécialisation martiale",
                "description": [
                    "Vous avez appris à infliger des blessures plus importantes avec les armes que vous connaissez le mieux. Vous infligez 2 dégâts supplémentaires avec les armes et les attaques à mains nues avec lesquelles vous êtes expert. Ces dégâts passent à 3 si vous êtes maître et à 4 si vous êtes légendaire."
                ],
                "level": 7
            },
            "aboutissement_exemplaire": {
                "name": "Aboutissement exemplaire",
                "description": [
                    "Vous exécutez vos mouvements ultimes avec une élégance toute particulière, ajoutant des effets spéciaux à vos aboutissements. Si une Frappe que vous effectuez au cours d'un aboutissement touche un ennemi, vous lui ajoutez un des effets suivants, en fonction de votre style de bretteur.",
                    "Danseur de combat Vous pouvez <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'UHpkTuCtyaPqiCAB'})\">Faire un pas</div> en utilisant une action gratuite immédiatement après l'aboutissement.",
                    "Escrimeur L'ennemi est <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'AJh5ex99aV6VTggg'})\">Pris au dépourvu</div> jusqu'à votre prochain tour.",
                    "Esprit L'ennemi subit une pénalité de circonstances de -2 aux jets d'attaques contre vous jusqu'au début de votre prochain tour. <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'cu10OjQUdY0a9gpj'})\">Effet : Aboutissement exemplaire - Esprit</div>",
                    "Fanfaron Si l'ennemi était temporairement immunisé à vos tentatives de <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '2u915NdUyQan6uKF'})\">Démoralisation</div> , cette immunité temporaire prend fin.",
                    "Fripouille L'ennemi subit une pénalité de circonstances de -3 mètres à sa vitesse jusqu'au début de votre prochain tour. <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'fgz7lwg1xHsVW4dX'})\">Effet : Aboutissement exemplaire - Fripouille</div>",
                    "Gymnaste Si l'ennemi est <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'kWc1fhmv9LBiTuei'})\">Agrippé</div> , <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'VcDeM8A5oI6VqhbM'})\">Entravé</div> ou <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'j91X7x0XSomq8d60'})\">À terre</div> , vous obtenez un bonus de circonstances aux dégâts égal à deux fois le nombre de dés de dégâts de votre arme."
                ],
                "level": 9
            },
            "expertise_du_bretteur": {
                "name": "Expertise du bretteur",
                "description": [
                    "Vous accomplissez des techniques de bretteur avec une élégance exceptionnelle, ce qui rend plus difficile de leur résister. Votre bonus de circonstances de Combattant stylé passe à +2. Vous devenez expert en DD de classe de bretteur."
                ],
                "level": 9
            },
            "elegance_continuelle": {
                "name": "Élégance continuelle",
                "description": [
                    "Bien que cela ne soit pas égal à votre panache au combat, vous faites preuve d'une élégance théâtrale dans toutes les situations. Le bonus de circonstances de Combattant stylé s'applique durant le mode exploration."
                ],
                "level": 11
            },
            "maitrise_en_perception": {
                "name": "Maîtrise en perception",
                "description": [
                    "Au fil de vos aventures, vous avez développé une vigilance accrue et une attention aux détails. Vous devenez maître en Perception."
                ],
                "level": 11
            },
            "evasion_assuree": {
                "name": "Évasion assurée",
                "description": [
                    "Votre capacité à éviter le danger est sans égale. Vous devenez légendaire en jets de Réflexes. Quand vous obtenez un échec critique sur un jet de Réflexes, il devient un échec. Lorsque vous obtenez un échec sur un jet de Réflexes contre un effet qui inflige des dégâts, vous ne subissez que la moitié des dégâts."
                ],
                "level": 13
            },
            "expertise_avec_les_armures_legeres": {
                "name": "Expertise avec les armures légères",
                "description": [
                    "Vous avez appris à mieux esquiver en ne portant pas d'armure ou une armure légère. Votre degré de maîtrise avec les armures légères et en défense sans armure passe à expert."
                ],
                "level": 13
            },
            "weapon_mastery": {
                "name": "Weapon Mastery",
                "description": [
                    "Vous comprenez pleinement vos armes. Vous êtes maître avec les armes simples, les armes de guerre et les attaques à mains nues."
                ],
                "level": 13
            },
            "elegance_aigue": {
                "name": "Élégance aiguë",
                "description": [
                    "Vous portez des attaques tout particulièrement dévastatrices même contre des adversaires bien protégés. Quand vous Frappez avec une arme ou une attaque à mains nues pour laquelle vous êtes un maître, si vous obtenez un 19 sur le dé et qu'il s'agit d'un succès, le résultat est considéré comme un coup critique."
                ],
                "level": 15
            },
            "specialisation_martiale_superieure": {
                "name": "Spécialisation martiale supérieure",
                "description": [
                    "Les dégâts de spécialisation martiale passent à 4 avec les armes et les attaques à mains nues avec lesquelles vous êtes expert, à 6 si vous êtes maître et à 8 si vous êtes légendaire."
                ],
                "level": 15
            },
            "ego_renforce": {
                "name": "Ego renforcé",
                "description": [
                    "Vous avez cuirassé votre esprit avec résolution. Votre degré de maîtrise pour les jets de Volonté passe à maître. Quand vous obtenez un succès sur un jet de Volonté, vous bénéficiez à la place d'un succès critique."
                ],
                "level": 17
            },
            "confiance_eternelle": {
                "name": "Confiance éternelle",
                "description": [
                    "En tant que bretteur au sommet de son art, vous possédez une confiance en vous et une bravade qui paraît dans chacune de vos attaques. Votre degré de maîtrise passe à maître en DD de classe de bretteur .",
                    "Lorsque vous faites une Frappe comme partie d'un aboutissement ou d'une <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'EfjoIuDmtUn4yiow'})\">Riposte opportune</div> , vous pouvez donner à la Frappe l'effet d'échec du <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'pyo0vmxUFIFX2GNl'})\">Aboutissement assuré</div> , incluant l'augmentation provenant de <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'qeLpqH2cMSmIrILV'})\">Aboutissement précis</div> si vous possédez ce don.",
                    "Vous ne pouvez profiter de cet avantage que si vous utilisez une arme ou une attaque sans arme pour la Frappe avec laquelle vous pouvez utiliser <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'qeLpqH2cMSmIrILV'})\">Aboutissement assuré</div> ."
                ],
                "level": 17
            },
            "maitrise_des_armures_legeres": {
                "name": "Maîtrise des armures légères",
                "description": [
                    "Votre compétence avec les armures légères s'améliore, augmentant votre capacité à esquiver les coups. Vous devenez maître avec les armures légères et en défense sans armure."
                ],
                "level": 19
            }
        }
    },
    {
        "name": "Champion",
        "key": "champion",
        "general_desc": "Vous êtes un émissaire d'une divinité, un serviteur dévoué qui a endossé de lourdes responsabilités et vous poursuivez avec ferveur une cause qui vous sépare de ceux qui vous entourent. Vous disposez de puissantes défenses que vous partagez avec vos alliés et les spectateurs innocents, ainsi que des pouvoirs divins que vous utilisez pour mettre un terme aux menaces auxquelles votre divinité s'oppose.",
        "characteristics_bonus": {
            "number": 1,
            "choice": [
                "FOR",
                "DEX"
            ]
        },
        "life_point_by_level": 10,
        "desc_fight": "Vous affrontez vos ennemis au corps-à-corps tout en vous positionnant soigneusement de manière à protéger vos alliés.",
        "desc_socially": "Vous êtes la voix d'une autorité dévouée, avec de fortes intentions d'incarner les comportements que votre divinité encourage.",
        "desc_exploration": "Vous surmontez les obstacles tant physiques que spirituels, en inspirant vos alliés par vos actions et, quand vos compagnons d'aventures vous le demandent, en leur donnant des conseils de manière assurée.",
        "desc_interlude": "Vous consacrez la plupart de votre temps en contemplation et prières solennelles, en entraînement rigoureux, à accomplir les édits de votre cause, mais cela ne signifie pas qu'il ne vous reste pas de temps pour pratiquer un métier ou un passe-temps.",
        "desc_you_could": [
            "Croire que la justesse de votre cause triomphera, même si les chances semblent faibles.",
            "Expliquer comment les enseignements de votre divinité s'appliquent aux décisions et aux actions de la vie quotidienne.",
            "Être légèrement sur-protecteur à l'égard de vos alliés."
        ],
        "desc_probably_others": [
            "Vous considèrent comme un symbole de votre divinité et vous répercutent leurs opinions sur cette dernière.",
            "Craignent que vous les méprisiez secrètement parce qu'ils ne sont pas à la hauteur de vos standards impossibles à atteindre ou que vous ne soyez pas disposé à faire des compromis lorsque c'est nécessaire.",
            "Savent que vous avez prêté des serments divins de service et qu'ils peuvent vous faire confiance pour les respecter."
        ],
        "mastery": {
            "perception": "Q",
            "saves": [
                {
                    "level": "E",
                    "description": "Expert en Vigueur"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en Réflexes"
                },
                {
                    "level": "E",
                    "description": "Expert en Volonté"
                }
            ],
            "skills": [
                {
                    "level": "Q",
                    "description": "Qualifié en Religion"
                },
                {
                    "level": "Q",
                    "description": "Qualifié dans une compétence déterminée par la divinité que vous avez choisie"
                },
                {
                    "level": "Q",
                    "description": "Qualifié dans un nombre de compétences supplémentaires égal à 2 plus votre modificateur d'Intelligence"
                }
            ],
            "attacks": [
                {
                    "level": "Q",
                    "description": "Qualifié avec les armes simples"
                },
                {
                    "level": "Q",
                    "description": "Qualifié avec les armes de guerre"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en attaques à mains nues"
                }
            ],
            "defenses": [
                {
                    "level": "Q",
                    "description": "Qualifié avec toutes les armures"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en défense sans armure"
                }
            ],
            "spells": [
                {
                    "level": "Q",
                    "description": "Qualifié en modificateur de sorts"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en DD de sorts"
                }
            ],
            "class_dc": "Q",
            "rarity": null
        },
        "capacity_by_level": [
            "blocage au bouclier, cause, divinité, don de champion, maîtrises initiales, primes d'attributs, sorts de dévotion",
            "Don de champion, don de compétence",
            "Amélioration de compétence, bénédiction du dévôt, don général",
            "Don de champion, don de compétence",
            "Amélioration de compétence, don ancestral, expertise avec les armes, primes d'attributs",
            "Don de champion, don de compétence",
            "Amélioration de compétence, don général, expertise avec les armures, spécialisation martiale",
            "Don de champion, don de compétence",
            "Amélioration de compétence, corps sacré, don ancestral, expertise du champion, expertise en réflexes, réaction implacable",
            "Don de champion, don de compétence, primes d'attributs",
            "Amélioration de compétence, don général, expertise en perception, réaction exaltée, volonté divine",
            "Don de champion, don de compétence",
            "Amélioration de compétence, don ancestral, maîtrise des armures, maîtrise des armes",
            "Don de champion, don de compétence",
            "Amélioration de compétence, don général, primes d'attributs, spécialisation martiale supérieure",
            "Don de champion, don de compétence",
            "Amélioration de compétence, armure légendaire, don ancestral, maîtrise du champion",
            "Don de champion, don de compétence",
            "Amélioration de compétence, défi du héros, don général",
            "Don de champion, don de compétence, primes d'attributs"
        ],
        "abilities": {
            "blocage_au_bouclier": {
                "name": "Blocage au bouclier",
                "description": [
                    "Vous obtenez le don général <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'jM72TjJ965jocBV8'})\">Blocage au bouclier</div> , une réaction qui vous permet de réduire les dégâts avec votre bouclier."
                ]
            },
            "cause": {
                "name": "Cause",
                "description": [
                    "Vous vous dévouez à une cause spécifique au nom de votre divinité. Certaines sont limitées au regard de la sanctification, comme précisé entre parenthèses. Votre cause ajoute à vos édits et anathèmes et vous accorde une réaction spéciale appelée votre réaction de champion, qui apparaît après le séparateur, en même temps que ses améliorations si vous obtenez les capacités Réaction implacable et Réaction exaltée aux niveaux supérieurs.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'h1NGH4TVeBljftni'})\">Grandeur</div> (Saint) : Vous illustrez la gloire et la splendeur des royaumes célestes.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'EQ6DVIQHAUXUhY6Y'})\">Iniquité</div> (Impie) : Vous détruisez, tirez parti et agissez avec déshonneur.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'peEXunfbSD8WcMFk'})\">Justice</div> : Vous respectez les lois et infligez un juste châtiment.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'FCoMFUsth4xB4veC'})\">Libération</div> : Vous vous opposez à la tyrannie et combattent pour la liberté.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'HiIvez0TqESbleB5'})\">Obéissance</div> : Vous respectez la hiérarchie et l'ordre.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '8YIA0jh64Ecz0TG6'})\">Profanation</div> (Impie) : Vous corrompez égoïstement et détruisez.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'UyuwFp0jQqYL2AdF'})\">Rédemption</div> (Saint) : Vous tentez de racheter ceux qui commettent de mauvaises actions."
                ]
            },
            "divinite": {
                "name": "Divinité",
                "description": [
                    "En tant que champion, vous êtes un combattant au service d'une divinité que vous vénérez au-dessus de toutes les autres. Choisissez une divinité apparaissant dans la liste des divinités ainsi que ses édits, ses domaines de prédilection et les avantages que vous obtenez en étant un fidèle de cette divinité."
                ]
            },
            "competence": {
                "name": "Compétence",
                "description": [
                    "Vous êtes qualifié dans la compétence divine indiquée pour votre divinité. Comme à l'ordinaire, si vous devriez déjà être qualifié dans cette compétence, vous êtes qualifié dans une autre compétence de votre choix."
                ]
            },
            "anatheme": {
                "name": "Anathème",
                "description": [
                    "Les champions se soucient profondément des édits et des anathèmes de leur divinité, de leur sanctification et de leur cause. Comme avec toute autre implémentation des édits et des anathèmes dans les règles, il s'agit d'outils pour incarner le personnage entre vous, le MJ et les autres joueurs autour de la table : vous jouez toujours un personnage nuancé et ne suivez par machinalement et strictement un script.",
                    "Agir de manière fondamentalement opposée aux principes des idéaux de votre divinité est anathème pour votre foi. Apprendre ou Lancer des sorts, commettre des actes et utiliser des objets qui sont anathèmes à votre divinité vous retire des bonnes grâces de cette dernière.",
                    "De la même manière, utiliser des objets, des sorts ou des actions qui sont anathèmes aux principes ou aux buts de votre foi interfèrent avec votre lien à l'égard de votre divinité. Par exemple, assister à un rituel qui crée des morts-vivants serait un acte anathème pour Pharasma, la déesse de la mort. Nombre d'actions qui sont anathèmes n'apparaissent pas dans la liste formelle de votre divinité. Pour les cas douteux, vous et votre MJ déterminez quels actes sont anathèmes.",
                    "Si vous accomplissez suffisamment d'actes qui sont anathèmes pour votre divinité, vous perdez les capacités magiques qui proviennent de votre lien à votre divinité. Les capacités de classe que vous perdez sont déterminées par le MJ, mais elles risquent d'inclure votre trait saint ou impie, votre réserve de focalisation et votre Bénédiction du dévot. Cas capacités peuvent être récupérées uniquement si vous vous repentez en conduisant un rituel de <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '7Fd4lxozd11MQ55N'})\">Pénitence</div> . Si votre divinité ne nécessite par la sanctification que vous aviez, votre MJ pourrait vous laisser utiliser le réapprentissage de votre sanctification et de votre cause alors que vous êtes toujours fidèle de la même divinité."
                ]
            },
            "sanctification": {
                "name": "Sanctification",
                "description": [
                    "En fonction de votre divinité, sa sanctification peut vous rendre saint ou impie. Ceci vous place d'un côté d'une lutte sur les âmes. Que vous soyez saint, impie ou ni l'un, ni l'autre va limiter votre choix des causes, des sorts de dévotion et vos dons.",
                    "Si vous \"pouvez être\" saint ou impie en fonction de l'entrée sanctification de votre divinité, vous faites ce choix. Et si vous \"devez être\" saint ou impie, vous obtenez automatiquement le trait. Si la divinité indique \"aucune\", vous ne pouvez choisir que des options qui ne nécessitent ni le trait saint, ni le trait impie. Si vous êtes saint ou impie et obtenez le trait opposé d'une manière ou d'une autre, vous perdez l'ancien trait jusqu'à ce que vous fassiez Pénitence.",
                    "La sanctification impie pour un champion peut être extrêmement perturbante dans une partie typique et ne devrait être une option de personnage joueur que dans des aventures ou campagnes appropriées où le groupe décide collectivement de partir sur cette base. La sanctification et les causes impie sont des options peu courantes.",
                    "Saint Vous obtenez le trait saint et ajoutez ce trait à toutes les Frappes que vous portez. Vous obtenez l'édit : \"Ne commet pas intentionnellement du tort aux innocents et ne manque pas d'éviter qu'un tort soit commis contre un innocent si ton intervention directe peut le sauver\" et l'anathème \"Ne commet pas de meurtre\". Même si votre partie inclut des comportements en dehors du cadre de Pathfinder, les actes indiqués ici vous sont anathèmes.",
                    "Impie Vous obtenez la trait impie et ajoutez ce trait à toutes les Frappes que vous portez. Vous obtenez l'édit \"Ne placez pas les besoins des autres avant les vôtres ou ceux de votre divinité\" et l'anathème \"faire un geste entièrement altruiste, tel que donner quelque chose par pure charité\" et \"Mettre les besoins de quelqu'un avant ceux de votre divinité\". Aucun de ces actes ne vous empêche d'accomplir des actes que d'autres pourraient considérer comme amicaux, mais ces actes doivent être entrepris en vue d'atteindre en définitive vos propres buts ou ceux de votre divinité."
                ]
            },
            "arme_deifique": {
                "name": "Arme déifique",
                "description": [
                    "Vous brandissez avec zèle l'arme de prédilection de votre divinité. Si c'est une attaque à mains nues avec un d4 comme dé de dégât ou une arme simple, augmenter le dé de dégâts d'un cran (de d4 à d6, de d6 à d8, de d8 à d10, de d10 à d12). Si l'arme est peu courante, vous y avez aussi accès et s'il s'agit d'une arme évoluée, vous la considérez comme une arme de guerre pour ce qui est de sa maîtrise."
                ]
            },
            "aura_de_champion": {
                "name": "Aura de champion",
                "description": [
                    "Vous êtes entouré d'une aura dans une émanation de 4,50 mètres. Elle possède les traits aura et divin. Tout fidèle de votre divinité au sein de l'aura sait immédiatement que vous êtes un champion de votre divinité. Cette aura est utilisée comme portée de votre réaction de champion et pour d'autres effets variés. Vous pouvez réprimer ou réactiver l'aura par une action unique qui possède le trait concentration et elle s'achève si vous êtes <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'fBnFDH2MTzgFijKf'})\">Inconscient</div> ."
                ]
            },
            "dons_de_champion": {
                "name": "Dons de champion",
                "description": [
                    "Au niveau 1 et à chaque niveau pair par la suite, vous obtenez un don de classe de champion."
                ]
            },
            "sorts_de_devotion": {
                "name": "Sorts de dévotion",
                "description": [
                    "La puissance de votre divinité vous confère des sorts divins spéciaux appelés sorts de dévotion qui sont un type de sorts focalisés. Choisissez soit <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'ZL97DcoJ8us6EwAF'})\">Boucliers de l'esprit</div> , soit un sort basé sur la source divine de votre divinité ( <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'zNN9212H2FGfM7VS'})\">Imposition des mains</div> si votre divinité autorise Guérison, soit <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'jFmWSIpJGGebim6y'})\">Toucher du vide</div> si votre divinité autorise Mise à mal).",
                    "Il faut 1 point de focalisation pour lancer un sort de focalisation. Lorsque vous obtenez votre premier sort de dévotion, vous obtenez également une réserve de focalisation de 1 point de focalisation. Vous rechargez votre réserve de focalisation au cours de vos préparatifs quotidiens et vous regagnez 1 point de focalisation en passant 10 minutes à utiliser l'activité Refocaliser pour prier votre divinité ou servir ses causes.",
                    "Vos sorts de dévotion sont des sorts divins. Le Charisme est votre attribut d'incantation",
                    "Les sorts focalisés sont automatiquement intensifiés à la moitié de votre niveau arrondi au supérieur. Certains dons vous accordent d'autres sorts focalisés. Le nombre maximal de points de focalisation de votre réserve est égal au nombre de sorts focalisés que vous avez, mais ne peut jamais être supérieur à 3 points."
                ]
            },
            "dons_de_competence": {
                "name": "Dons de compétence",
                "description": [
                    "Au niveau 2, puis tous les niveaux pairs, vous obtenez un don de compétence. vous devez être au moins qualifié dans la compétence correspondante pour choisir un don de compétence."
                ],
                "level": 2
            },
            "ameliorations_de_competence": {
                "name": "Améliorations de compétence",
                "description": [
                    "Au niveau 3, puis tous les 2 niveaux, vous obtenez une amélioration de compétence. Vous pouvez utiliser cette amélioration pour augmenter votre degré de maîtrise et devenir qualifié dans une compétence dans laquelle vous étiez inexpérimenté ou pour améliorer votre rang dans une compétence dans laquelle vous êtes déjà qualifié pour devenir expert.",
                    "À partir du niveau 7, vous pouvez utiliser l'amélioration de compétence pour devenir maître dans une compétence dans laquelle vous êtes déjà expert et à partir du niveau 15, vous pouvez l'utiliser pour devenir légendaire dans une compétence dans laquelle vous êtes déjà maître."
                ],
                "level": 3
            },
            "benediction_du_devot": {
                "name": "Bénédiction du dévôt",
                "description": [
                    "Votre divinité bénit vos actions en vous accordant un bienfait. Cela peut prendre la forme d'un esprit qui vous rend visite et se loge dans vos objets ou votre corps, d'un mystérieux tatouage divin sur votre corps ou de quelque chose de ce genre. Choisissez l'une des bénédictions suivantes ou toute autre à laquelle vous avez accès.",
                    "Arme bénie Choisissez une arme ou des <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'FNDq4NFSN0g2HKWO'})\">Bandelettes de coups puissants</div> . Vous obtenez l'effet critique spécialisé de cette arme et vous lui allouez une rune de propriété de votre choix dans la liste suivante : <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'qlunQzfnzPQpMG6U'})\">Boomerang</div> , <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'P6v2AtJw7AUwaDzf'})\">Effrayante</div> , <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'JQdwHECogcTzdd8R'})\">Spectrale</div> , <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'roeYtwlIe65BPMJ1'})\">Changeante</div> ou <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'LwQb7ryTC8FlOXgX'})\">Vitalisante</div> . Au cours de vos préparatifs quotidiens, vous pouvez changer l'esprit pour qu'il vienne habiter un armement différent, qu'il accorde une rune différente ou les deux.",
                    "Bouclier béni Entre vos mains, un bouclier obtient la rune <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'x9SNVpAAnXKJeoqp'})\">Renforcement</div> mineure. Au fur et à mesure que vous gagnez des niveaux, le bouclier obtient la rune Renforcement de votre niveau (inférieur au niveau 7, modéré au niveau 10, supérieur au niveau 13, majeur au niveau 16 et ultime au niveau 19). Si votre bouclier possède la rune de Renforcement de votre niveau ou s'il s'agit d'un <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'f9ygr5Cjrmop8LWV'})\">Bouclier renforcé</div> du même niveau que la rune de Renforcement appropriée, la Solidité du bouclier augmente de 1 à la place.",
                    "Célérité bénie Vous obtenez un bonus de statut de +1,50 mètre à la Vitesse. Si vous êtes monté, votre monture obtient le bonus à la place. En plus, lorsque le déplacement d'un de vos alliés déclenche une réaction d'un ennemi alors que l'allié est dans votre aura de champion, l'allié obtient un bonus de statut de +2 à toutes les défenses contre cette réaction."
                ],
                "level": 3
            },
            "dons_generaux": {
                "name": "Dons généraux",
                "description": [
                    "Au niveau 3, puis tous les 4 niveaux, vous obtenez un don général."
                ],
                "level": 3
            },
            "dons_ancestraux": {
                "name": "Dons ancestraux",
                "description": [
                    "En plus de celui avec lequel vous avez commencé, vous obtenez un don ancestral au niveau 5 puis tous les 4 niveaux."
                ],
                "level": 5
            },
            "expertise_avec_les_armes": {
                "name": "Expertise avec les armes",
                "description": [
                    "Vous vous consacrez à l'apprentissage approfondi des subtilités de vos armes. Vous devenez expert avec les armes simples, les armes de guerre et les attaques à mains nues."
                ],
                "level": 5
            },
            "primes_d_attributs": {
                "name": "Primes d'attributs",
                "description": [
                    "Au niveau 5, puis tous les 5 niveaux, vous améliorez quatre scores d'attributs différents. Vous pouvez utiliser ces primes d'attributs pour faire passer la valeur d'un score d'attribut au-dessus de +4. La prime augmente la valeur du score d'attribut de +1/2 s'il est supérieur ou égal à +4 ou de +1 s'il est inférieur à +3."
                ],
                "level": 5
            },
            "expertise_en_armure": {
                "name": "Expertise en armure",
                "description": [
                    "Vous avez passé tellement de temps en armure que vous savez comment tirer le meilleur de sa protection. Vous devenez expert avec les armures légères, intermédiaires et lourdes, ainsi qu'en défense sans armure. Vous obtenez les effets spécialisés des armures intermédiaires et lourdes."
                ],
                "level": 7
            },
            "specialisation_martiale": {
                "name": "Spécialisation martiale",
                "description": [
                    "Vous avez appris à infliger des blessures plus importantes avec les armes que vous connaissez le mieux. Vous infligez 2 dégâts supplémentaires avec les armes et les attaques à mains nues avec lesquelles vous êtes expert. Ces dégâts passent à 3 si vous êtes maître et à 4 si vous êtes légendaire."
                ],
                "level": 7
            },
            "corps_sacre": {
                "name": "Corps sacré",
                "description": [
                    "Le pouvoir de votre divinité protège votre corps de toute atteinte, comme un véritable édifice de la foi, au même titre qu'un grand temple. Vous devenez maître en jets de Vigueur. Lorsque vous obtenez un succès sur un jet de Vigueur, il devient un succès critique."
                ],
                "level": 9
            },
            "expertise_du_champion": {
                "name": "Expertise du champion",
                "description": [
                    "Les prières renforcent votre puissance divine. Votre degré de maîtrise dans le DD de classe de champion, les jets d'attaque des sorts divins et les DD de vos sorts divins passent à expert."
                ],
                "level": 9
            },
            "expertise_en_reflexes": {
                "name": "Expertise en réflexes",
                "description": [
                    "Vous avez développé un talent pour esquiver le danger. Vous devenez expert en jets de Réflexes.",
                    "Gardien Même dans la plus encombrante des armures, vous pouvez vous prémunir contre les effets répandus. Vous devenez expert en jets de Réflexes."
                ],
                "level": 9
            },
            "reaction_implacable": {
                "name": "Réaction implacable",
                "description": [
                    "Votre Réaction de champion s'améliore, typiquement pour punir l'attaquant avec un contrecoup spirituel. Elle obtient l'avantage de la réaction implacable indiquée dans votre cause, sous votre réaction de champion."
                ],
                "level": 9
            },
            "expertise_en_perception": {
                "name": "Expertise en perception",
                "description": [
                    "Vous restez à l'affût des menaces qui vous entourent. Vous devenez expert en Perception."
                ],
                "level": 11
            },
            "reaction_exaltee": {
                "name": "Réaction exaltée",
                "description": [
                    "Votre réaction de champion exalte les alliés proches, leur permettant également d'en tirer avantage. Lorsque vous utilisez votre réaction de champion, vous obtenez aussi l'effet indiqué de sa réaction exaltée."
                ],
                "level": 11
            },
            "volonte_divine": {
                "name": "Volonté divine",
                "description": [
                    "Votre foi vous permet de parfaitement contrôler votre volonté. Vous êtes maître en jets de Volonté. Quand vous obtenez un succès sur un jet de Volonté, celui-ci est transformé en succès critique."
                ],
                "level": 11
            },
            "maitrise_des_armes": {
                "name": "Maîtrise des armes",
                "description": [
                    "Vous comprenez pleinement vos armes. Vous êtes maître avec les armes simples, les armes de guerre et les attaques à mains nues."
                ],
                "level": 13
            },
            "maitrise_des_armures": {
                "name": "Maîtrise des armures",
                "description": [
                    "Votre compétence avec les armures s'améliore encore. Vous devenez maître avec les armures légères, intermédiaires et lourdes ainsi qu'en défense sans armure."
                ],
                "level": 13
            },
            "specialisation_martiale_superieure": {
                "name": "Spécialisation martiale supérieure",
                "description": [
                    "Les dégâts de spécialisation martiale passent à 4 avec les armes et les attaques à mains nues avec lesquelles vous êtes expert, à 6 si vous êtes maître et à 8 si vous êtes légendaire."
                ],
                "level": 15
            },
            "armure_legendaire": {
                "name": "Armure légendaire",
                "description": [
                    "Votre foi vous protège tout aussi efficacement que l'acier. Votre degré de maîtrise avec les armures légères, intermédiaires et lourdes, ainsi qu'avec la défense sans armure, passe à légendaire."
                ],
                "level": 17
            },
            "maitrise_du_champion": {
                "name": "Maîtrise du champion",
                "description": [
                    "Vous utilisez à présent parfaitement l'arsenal des techniques et des sorts divins du champion. Votre degré de maîtrise dans le DD de classe de champion, les jets d'attaque des sorts divins et les DD de vos sorts divins, passe à maître."
                ],
                "level": 17
            },
            "defi_du_heros": {
                "name": "Défi du héros",
                "description": [
                    "Vous pouvez continuer à combattre tant qu'il vous reste de l'énergie divine. Vous obtenez le sort de dévotion <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'uGXWkR2h8q9MRzEM'})\">Défi du héros</div> ."
                ],
                "level": 19
            }
        }
    },
    {
        "name": "Druide",
        "key": "druide",
        "general_desc": "Le pouvoir de la nature est irrésistible. Elle peut ruiner la plus solide des forteresses en quelques minutes, réduire les ouvrages les plus imposants en simples ruines, les réduire en cendres, les ensevelir sous une avalanche de neige ou les noyer sous les flots. Elle peut offrir une abondance sans fin et une splendeur à couper le souffle à ceux qui la respectent - et une mort atroce à ceux qui la prennent trop à la légère. Vous êtes de ceux qui entendent l'appel de la nature. Vous vous tenez en admiration devant la majesté de sa puissance et vous vous mettez à son service.",
        "characteristics_bonus": {
            "number": 1,
            "choice": [
                "SAG"
            ]
        },
        "life_point_by_level": 8,
        "desc_fight": "Vous lancez des sorts qui font appel à la magie primordiale pour vous protéger et protéger vos amis, soigner leurs blessures ou invoquer des animaux mortels pour qu'ils se battent à vos côtés. En fonction de votre lien avec la nature, vous pourriez faire appel à une puissante magie élémentaire ou prendre la forme d'une bête terrifiante.",
        "desc_socially": "Vous représentez l'équilibre et une approche raisonnée des problèmes, cherchant des solutions qui non seulement sont les meilleures pour le monde naturel, mais qui permettent aussi aux créatures qui le composent de vivre en harmonie et en paix. Vous proposez souvent des compromis qui permettent aux deux parties d'obtenir ce dont elles ont vraiment besoin, même si elles ne peuvent pas avoir tout ce qu'elles désirent.",
        "desc_exploration": "Vos compétences sur la nature sont inestimables. Vous pourchassez les ennemis, parcourez les étendues sauvages sans vous perdre et utilisez des sorts pour détecter les auras magiques qui vous entourent. Vous pourriez même demander aux animaux sauvages qu'ils utilisent leurs moyens de perceptions extraordinaires et leurs capacités d'éclaireurs pour aider votre groupe.",
        "desc_interlude": "Vous pourriez fabriquer des objets magiques ou des potions. Ou encore, votre attachement à la nature pourrait vous amener à vous occuper d'une zone sauvage, à vous lier d'amitié avec les bêtes et à soigner les blessures causées par la civilisation. Vous pourriez même enseigner des techniques d'agriculture durable et d'élevage respectueuses qui permettent aux autres de vivre de la terre sans nuire à l'équilibre naturel.",
        "desc_you_could": [
            "Avoir un respect sincère et profond pour la puissance de la nature.",
            "Être en admiration constante pour le monde naturel, toujours prêt à partager ses bienfaits avec les autres tout en vous préoccupant de leur influence sur lui.",
            "Traiter les plantes et les animaux comme des alliés, travaillant à leurs côtés pour atteindre vos objectifs."
        ],
        "desc_probably_others": [
            "Vous voient comme un représentant de la nature et sont sûrs que vous pouvez la contrôler.",
            "Supposent que vous êtes un ermite qui évite la société et les cités et qui préfère vivre dans les étendues sauvages.",
            "Vous considèrent comme un mystique, semblable à un prêtre, mais ne répondant qu'aux forces de la nature."
        ],
        "mastery": {
            "perception": "Q",
            "saves": [
                {
                    "level": "Q",
                    "description": "Qualifié en Vigueur"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en Réflexes"
                },
                {
                    "level": "E",
                    "description": "Expert en Volonté"
                }
            ],
            "skills": [
                {
                    "level": "Q",
                    "description": "Qualifié en Nature"
                },
                {
                    "level": "Q",
                    "description": "Qualifié dans une compétence déterminée par votre ordre druidique"
                },
                {
                    "level": "Q",
                    "description": "Qualifié dans un nombre de compétences supplémentaire égal à 2 plus votre modificateur d'Intelligence"
                }
            ],
            "attacks": [
                {
                    "level": "Q",
                    "description": "Qualifié en attaques à mains nues"
                },
                {
                    "level": "Q",
                    "description": "Qualifié avec les armes simples"
                }
            ],
            "defenses": [
                {
                    "level": "Q",
                    "description": "Qualifié en défense sans armure"
                },
                {
                    "level": "Q",
                    "description": "Qualifié avec les armures légères"
                },
                {
                    "level": "Q",
                    "description": "Qualifié avec les armures intermédiaires"
                }
            ],
            "spells": [
                {
                    "level": "Q",
                    "description": "Qualifié en modificateur d'attaque de sort"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en DD de sorts"
                }
            ],
            "class_dc": null,
            "rarity": null
        },
        "capacity_by_level": [
            "anathème, blocage au bouclier, chant sauvage, incantation de druide, maîtrises initiales, primes d'attribut, ordre druidique, voix de la nature",
            "Don de compétence, don de druide",
            "Amélioration de compétence, don général, expertise en perception, expertise en vigueur, sorts de rang 2",
            "Don de compétence, don de druide",
            "Amélioration de compétence, don ancestral, expertise en réflexes, primes d'attributs, sorts de rang 3",
            "Don de compétence, don de druide",
            "Amélioration de compétence, don général, incantateur expert, sorts de rang 4",
            "Don de compétence, don de druide",
            "Amélioration de compétence, don ancestral, sorts de rang 5",
            "Don de compétence, don de druide, primes d'attributs",
            "Amélioration de compétence, détermination sauvage, don général, expertise avec les armes, sorts de rang 6",
            "Don de compétence, don de druide",
            "Amélioration de compétence, don ancestral, expertise avec les armures intermédiaires, sorts de rang 7, spécialisation martiale",
            "Don de compétence, don de druide",
            "Amélioration de compétence, don général, maître incantateur, primes d'attributs, sorts de rang 8",
            "Don de compétence, don de druide",
            "Amélioration de compétence, don ancestral, sorts de rang 9",
            "Don de compétence, don de druide",
            "Amélioration de compétence, Don général, incantateur légendaire, hiérophante primordial",
            "Don de compétence, don de druide, primes d'attributs"
        ],
        "abilities": {
            "anatheme": {
                "name": "Anathème",
                "description": [
                    "En tant que gardiens de l'ordre naturel, les druides trouvent que les affronts à la nature sont anathèmes. Si vous accomplissez de manière répétée de tels actes, vous perdez les capacités magiques de la classe de druide, notamment votre incantation de druide et les avantages de votre ordre. Ces capacités ne peuvent être récupérées que si vous démontrer votre repentir au cours d'un rituel de <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '7Fd4lxozd11MQ55N'})\">Pénitence</div> .",
                    "Les agissements suivants sont considérés comme anathèmes par tous les druides :",
                    "Anathèmes détériorer des sites naturels, consommer plus de ressources naturelles qu'il n'est nécessaire pour vivre confortablement, apprendre le chant sauvage aux non druides.",
                    "Votre choix d'un ordre druidique ajoute d'autres anathèmes, comme indiqué dans l'entrée de l'ordre."
                ]
            },
            "blocage_au_bouclier": {
                "name": "Blocage au bouclier",
                "description": [
                    "Vous obtenez le don général <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'jM72TjJ965jocBV8'})\">Blocage au bouclier</div> , une réaction qui vous permet de réduire les dégâts avec votre bouclier."
                ]
            },
            "chant_sauvage": {
                "name": "Chant sauvage",
                "description": [
                    "Vous connaissez le chant sauvage, une langue secrète connue uniquement au sein des ordres de druides, en plus de toute langue que vous connaissez grâce à votre ascendance. Le Chant sauvage est une langue mélodique et tonale qui ressemble davantage à des cris d'animaux qu'à une langue parlée et son alphabet comporte des fractales et des spirales, comme la disposition des chambres d'un coquillage, les cristaux d'un flocon de neige ou les frondes d'une fougère. Enseigner le Chant sauvage aux non-druides est anathème."
                ]
            },
            "incantation_de_druide": {
                "name": "Incantation de druide",
                "description": [
                    "La puissance du monde sauvage s'écoule à travers vous. Vous êtes un incantateur et pouvez lancer des sorts de tradition primordiale en utilisant l'activité <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'aBQ8ajvEBByv45yz'})\">Lancer un sort</div> . En tant que druide, vos incantations pour lancer des sorts peuvent s'appuyer sur l'environnement qui vous entoure ou sur l'invocation d'anciens serments ; vos mains peuvent se balancer comme des saules ou se recroqueviller en forme de griffes tandis que vos gestes dirigent votre magie. Au niveau 1, vous pouvez préparer chaque matin deux sorts de rang 1 et cinq tours de magie à partir des sorts courants de la liste des sorts primordiaux ou à partir d'autres sorts primordiaux auxquels vous avez accès et que vous apprenez par le biais d'Apprendre un sort. Les sorts préparés vous restent disponibles jusqu'à ce que vous les lanciez ou que vous prépariez à nouveau vos sorts. Le nombre de sorts que vous pouvez préparer chaque jour s'appelle vos emplacements de sorts.",
                    "Au fur et à mesure que vous gagnez des niveaux en tant que druide, le nombre de sorts que vous pouvez préparer chaque jour augmente, tout comme le rang le plus élevé de sort que vous pouvez lancer, comme indiqué sur la table des sorts de druide par jour.",
                    "Certains sorts nécessitent que vous tentiez une attaque de sort pour déterminer leur efficacité ou obligent vos ennemis à faire un jet contre le DD du sort (en tentant typiquement un jet de sauvegarde). Comme la Sagesse est votre attribut essentiel, votre modificateur d'attaque de sort et votre DD de sort utilisent votre modificateur de Sagesse."
                ]
            },
            "intensification_de_sorts": {
                "name": "Intensification de sorts",
                "description": [
                    "Lorsque vous obtenez des emplacements de sorts de rang 2 et supérieur, vous pouvez remplir ces emplacements avec des versions plus puissantes de sorts de rang inférieur. Ceci augmente le rang du sort, l'intensifiant pour correspondre à l'emplacement du sort. Nombre de sorts possèdent des améliorations spécifiques lorsqu'ils sont intensifiés à certains rangs."
                ]
            },
            "tours_de_magie": {
                "name": "Tours de magie",
                "description": [
                    "Certains de vos sorts sont des tours de magie. Un tour de magie est un type spécifique de sort qui n'utilise pas d'emplacement de sort. Vous pouvez lancer un tour de magie à volonté, n'importe quel nombre de fois par jour. Un tour de magie est toujours intensifié automatiquement à la moitié de votre niveau arrondi au supérieur — c'est habituellement égal au plus haut rang de vos emplacements de sorts de druide que vous possédez. Par exemple, en tant que druide de niveau 1, vos tours de magie sont de rang 1 et en tant que druide de niveau 5, vos tours de magie sont des sorts de rang 3."
                ]
            },
            "ordre_druidique": {
                "name": "Ordre druidique",
                "description": [
                    "En devenant druide, vous vous alignez sur un ordre druidique, ce qui vous confère un don de classe, un sort d'ordre (voir ci-dessous) et une compétence supplémentaire dans laquelle vous êtes qualifié liée à votre ordre. Bien que vous soyez toujours membre de votre ordre initial, il n'est pas inhabituel pour un druide de demander à étudier avec d'autres ordres afin d'obtenir une meilleure compréhension du monde naturel et les PJ druides sont parmi les plus enclins à mélanger les pouvoirs de différents ordres.",
                    "Les sorts d'ordre sont un type de sorts focalisés. Il faut dépenser 1 point de focalisation pour lancer un sort focalisé et vous commencez avec une réserve de focalisation de 1 point de focalisation. Vous remplissez votre réserve de focalisation lors de vos préparatifs quotidiens et vous pouvez récupérer 1 point de focalisation en utilisant l'activité Refocaliser pendant dix minutes pour communier avec les esprits locaux de la nature ou pour prendre soin de la nature d'une façon qui convient à votre ordre.",
                    "Un sort focalisé est automatiquement intensifié à la moitié de votre niveau arrondi au supérieur, comme un tour de magie. Un sort focalisé n'a pas besoin d'emplacement de sort et vous ne pouvez les lancer en utilisant un emplacement de sort. Le maximum de points de focalisation que peut contenir votre réserve de focalisation est égal au nombre de sorts focalisés que vous possédez mais elle ne peut jamais dépasser 3 points.",
                    "Compétence d'ordre Vous êtes qualifié dans la compétence indiquée. Si vous êtes déjà qualifié dans cette compétence, vous êtes qualifié dans une compétence différente de votre choix.",
                    "Don de druide Vous obtenez ce don de druide de niveau 1.",
                    "Sort d'ordre Vous obtenez automatiquement le sort d'ordre indiqué au niveau 1.",
                    "Anathèmes Ajoutez cet anathème à ceux de tous les druides.",
                    "Voici les différents ordres druidiques :",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'POBvoXifa9HaejAg'})\">Ordre animal</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'u4nlOzPj2WHkIj9l'})\">Ordre de la feuille</div> et ses variantes <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'X0k3njLOLX0322Po'})\">Ordre des spores</div> et <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'IiYUhFGqq2Nw0b5Y'})\">Ordre du cultivateur</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'NdeFvIXdHwKYLiUj'})\">Ordre de la flamme</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'fKTewWlYgFuhl4KA'})\">Ordre de la pierre</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'acqqlYmti8D9QJi0'})\">Ordre de la tempête</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'FuUXyv2yBs7zRgqT'})\">Ordre de la vague</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'v0EjtiwdeMj8ykI0'})\">Ordre indompté</div>"
                ]
            },
            "voix_de_la_nature": {
                "name": "Voix de la nature",
                "description": [
                    "Vous obtenez au choix <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'cg816q76S5otM7yD'})\">Empathie animale</div> ou <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'ahyQpMVDIqhvXkQ4'})\">Empathie avec les plantes</div> en tant que don de druide."
                ]
            },
            "dons_de_competence": {
                "name": "Dons de compétence",
                "description": [
                    "Au niveau 2, puis tous les niveaux pairs, vous obtenez un don de compétence. vous devez être au moins qualifié dans la compétence correspondante pour choisir un don de compétence."
                ],
                "level": 2
            },
            "dons_de_druide": {
                "name": "Dons de druide",
                "description": [
                    "Au niveau 2, puis tous les niveaux pairs, vous obtenez un don de classe de druide."
                ],
                "level": 2
            },
            "ameliorations_de_competence": {
                "name": "Améliorations de compétence",
                "description": [
                    "Au niveau 3, puis tous les 2 niveaux, vous obtenez une amélioration de compétence. Vous pouvez utiliser cette amélioration pour augmenter votre degré de maîtrise et devenir qualifié dans une compétence dans laquelle vous étiez inexpérimenté ou pour améliorer votre rang dans une compétence dans laquelle vous êtes déjà qualifié pour devenir expert.",
                    "À partir du niveau 7, vous pouvez utiliser l'amélioration de compétence pour devenir maître dans une compétence dans laquelle vous êtes déjà expert et à partir du niveau 15, vous pouvez l'utiliser pour devenir légendaire dans une compétence dans laquelle vous êtes déjà maître."
                ],
                "level": 3
            },
            "dons_generaux": {
                "name": "Dons généraux",
                "description": [
                    "Au niveau 3, puis tous les 4 niveaux, vous obtenez un don général."
                ],
                "level": 3
            },
            "expertise_en_perception": {
                "name": "Expertise en perception",
                "description": [
                    "Vous restez à l'affût des menaces qui vous entourent. Vous devenez expert en Perception."
                ],
                "level": 3
            },
            "expertise_en_vigueur": {
                "name": "Expertise en vigueur",
                "description": [
                    "Les aventures ont rendu votre physique plus résistant. Vous devenez expert en jets de Vigueur."
                ],
                "level": 3
            },
            "dons_ancestraux": {
                "name": "Dons ancestraux",
                "description": [
                    "En plus de celui avec lequel vous avez commencé, vous obtenez un don ancestral au niveau 5 puis tous les 4 niveaux."
                ],
                "level": 5
            },
            "expertise_en_reflexes": {
                "name": "Expertise en réflexes",
                "description": [
                    "Vous avez développé un talent pour esquiver le danger. Vous devenez expert en jets de Réflexes."
                ],
                "level": 5
            },
            "primes_d_attributs": {
                "name": "Primes d'attributs",
                "description": [
                    "Au niveau 5, puis tous les 5 niveaux, vous améliorez quatre scores d'attributs différents. Vous pouvez utiliser ces primes d'attributs pour faire passer la valeur d'un score d'attribut au-dessus de +4. La prime augmente la valeur du score d'attribut de +1/2 s'il est supérieur ou égal à +4 ou de +1 s'il est inférieur à +3."
                ],
                "level": 5
            },
            "incantateur_expert": {
                "name": "Incantateur expert",
                "description": [
                    "Votre contrôle des forces primordiales s'est approfondi, donnant plus de puissance à vos sorts. Vous devenez expert en modificateur d'attaque de sorts et en DD de sort."
                ],
                "level": 7
            },
            "determination_sauvage": {
                "name": "Détermination sauvage",
                "description": [
                    "Votre volonté primordiale, comme celle des plus grandes bêtes, ne peut être domptée. Votre degré de maîtrise pour les jets de Volonté passe à maître. Lorsque vous obtenez un succès sur un jet de Volonté, il devient un succès critique."
                ],
                "level": 11
            },
            "expertise_avec_les_armes": {
                "name": "Expertise avec les armes",
                "description": [
                    "Vous avez amélioré votre compétence au combat. Vous devenez expert avec les armes simples et les attaques à mains nues."
                ],
                "level": 11
            },
            "expertise_avec_les_armures_intermediaires": {
                "name": "Expertise avec les armures intermédiaires",
                "description": [
                    "Vous avez appris à vous défendre mieux contre les attaques. Vos rangs de maîtrise avec les armures légères, les armures intermédiaires et en défense sans armure passent à expert."
                ],
                "level": 13
            },
            "specialisation_martiale": {
                "name": "Spécialisation martiale",
                "description": [
                    "Vous avez appris à infliger des blessures plus importantes avec les armes que vous connaissez le mieux. Vous infligez 2 dégâts supplémentaires avec les armes et les attaques à mains nues avec lesquelles vous êtes expert. Ces dégâts passent à 3 si vous êtes maître et à 4 si vous êtes légendaire."
                ],
                "level": 13
            },
            "incantateur_maitre": {
                "name": "Incantateur maître",
                "description": [
                    "La magie primordiale obéit à vos ordres. Vous devenez maître en modificateur d'attaque de sorts et en DD de sort."
                ],
                "level": 15
            },
            "incantateur_legendaire": {
                "name": "Incantateur légendaire",
                "description": [
                    "Vous avez développé un rapport sans pareil avec la magie de la nature. Vous devenez légendaire en modificateur d'attaque de sorts et en DD de sorts."
                ],
                "level": 19
            },
            "hierophante_primordial": {
                "name": "Hiérophante primordial",
                "description": [
                    "Vous commandez les forces les plus puissantes de la magie primordiale et pouvez lancer un sort au pouvoir vraiment incroyable. Vous obtenez un unique emplacement de sort de rang 10 et pouvez l'utiliser pour préparer un sort dans cet emplacement avec incantation de druide. Contrairement aux autres emplacements de sort, vous ne pouvez pas utiliser les emplacements de sort de rang 10 avec des capacités qui vous donnent plus d'emplacements de sort ou qui vous permettent de lancer des sorts sans dépenser d'emplacement de sort. Vous n'obtenez pas plus d'emplacements de rang 10 en gagnant un niveau, mais vous pouvez prendre le don <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'Chu6s3xVnpOB64GH'})\">Puissance du hiérophante</div> pour obtenir un second emplacement."
                ],
                "level": 19
            }
        }
    },
    {
        "name": "Enquêteur",
        "key": "enqueteur",
        "general_desc": "Vous cherchez à découvrir la vérité et vous remontez des pistes sans lâcher prise pour dévoiler des complots de méchants sournois, découvrir d'anciens secrets ou percer des mystères. Votre esprit analytique formule rapidement des solutions aux problèmes les plus complexes et vos sens affutés donnent un sens même aux indices les plus obscurs. Armé de vos connaissances, vous étudiez les créatures et les dangers que vous rencontrez afin d'exploiter leurs points faibles.",
        "characteristics_bonus": {
            "number": 1,
            "choice": [
                "INT"
            ]
        },
        "life_point_by_level": 8,
        "desc_fight": [
            "Grâce à votre intuition affûtée concernant vos ennemis, vous êtes plus dangereux que ce que votre puissance physique laisse présager. Après avoir passé un moment à étudier vos ennemis, vos talents en perception vous permettent d'agir rapidement et de frapper là où cela va faire le plus mal.",
            "Vous assistez souvent les membres plus robustes de votre groupe, vous protégeant sagement tout en offrant une aide vitale."
        ],
        "desc_socially": "Rares sont ceux qui peuvent vous cacher des choses. Vous n'êtes peut-être pas le plus charmant mais vous voyez les choses telles qu'elles sont réellement et parvenez à jauger rapidement une situation sociale. Chaque conversation est un interrogatoire, après tout, et vous ne savez jamais ce que vous allez rencontrer !",
        "desc_exploration": "Vous recherchez des indices dans votre environnement. Vous vous montrez souvent un allié précieux en servant d'éclaireur pour le groupe, en analysant les subtilités des énigmes ou des phénomènes mystérieux, et en poursuivant des pistes qui pourraient révéler des informations bénéfiques.",
        "desc_interlude": "Vous étudiez des sujets nouveaux et anciens, vous vous faites de nouveaux alliés avec qui partager des informations, et vous poursuivez des passe-temps qui satisfont votre esprit actif. Vous pourriez gagner un peu d'argent en travaillant comme détective privé ou en consultant pour le prévôt local.",
        "desc_you_could": [
            "Commencer à poser des questions, y compris des questions plutôt complexes, juste après avoir été confronté à une énigme.",
            "Vous efforcer de dévoiler le sens caché de tout ce que vous rencontrez et d'identifier les machinations sociales qui expliquent comment les choses se passent vraiment au-delà des apparences.",
            "Vous plonger si profondément dans une affaire que vous ignorez complètement tous les autres sujets, les considérant comme triviaux."
        ],
        "desc_probably_others": [
            "Trouvent le flot d'informations que vous déversez extrêmement utile, quoique parfois difficile à bien comprendre.",
            "Peuvent être agacés par le fait que vous sachiez toujours tout sur tout.",
            "Comptent sur vous pour résoudre les mystères, les énigmes et les autres défis nécessitant de la curiosité intellectuelle et du raisonnement."
        ],
        "mastery": {
            "perception": "E",
            "saves": [
                {
                    "level": "Q",
                    "description": "Qualifié en Vigueur"
                },
                {
                    "level": "E",
                    "description": "Expert en Réflexes"
                },
                {
                    "level": "E",
                    "description": "Expert en Volonté"
                }
            ],
            "skills": [
                {
                    "level": "Q",
                    "description": "Qualifié en Société"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en une ou plusieurs compétences déterminées par votre méthodologie"
                },
                {
                    "level": "Q",
                    "description": "Qualifié dans un nombre de compétences supplémentaires égal à 4 plus votre modificateur d'Intelligence"
                }
            ],
            "attacks": [
                {
                    "level": "Q",
                    "description": "Qualifié avec les armes simples et de guerre"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en attaques à mains nues"
                }
            ],
            "defenses": [
                {
                    "level": "Q",
                    "description": "Qualifié avec les armures légères"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en défense sans armure"
                }
            ],
            "spells": null,
            "class_dc": "Q",
            "rarity": null
        },
        "capacity_by_level": [
            "concevoir un stratagème, don d'enquêteur, frappe stratégique 1d6, maîtrises initiales, méthodologie, primes d'attribut, sur l'affaire",
            "Amélioration de compétence, don d'enquêteur, don de compétence",
            "Amélioration de compétence, don général, leçons accomplies, souvenirs affûtés",
            "Amélioration de compétence, don d'enquêteur, don de compétence",
            "Amélioration de compétence, don ancestral, expertise avec les armes, frappe stratégique 2d6, primes d'attributs, leçons accomplies",
            "Amélioration de compétence, don d'enquêteur, don de compétence",
            "Amélioration de compétence, don général, leçons accomplies, maîtrise en perception, spécialisation martiale",
            "Amélioration de compétence, don d'enquêteur, don de compétence",
            "Amélioration de compétence, don ancestral, expertise de l'enquêteur, expertise en vigueur, frappe stratégique 3d6, leçons accomplies",
            "Amélioration de compétence, don d'enquêteur, don de compétence, primes d'attributs",
            "Amélioration de compétence, don général, improvisation déductive, leçons accomplies, volonté inébranlable",
            "Amélioration de compétence, don d'enquêteur, don de compétence",
            "Amélioration de compétence, don ancestral, expertise avec les armures légères, frappe stratégique 4d6, leçons accomplies, maîtrise martiale, sens extraordinaires",
            "Amélioration de compétence, don d'enquêteur, don de compétence",
            "Amélioration de compétence, don général, leçons accomplies, primes d'attributs, réflexes avisés, spécialisation martiale supérieure",
            "Amélioration de compétence, don d'enquêteur, don de compétence",
            "Amélioration de compétence, don ancestral, frappe stratégique 5d6, leçons accomplies, volonté inébranlable supérieure",
            "Amélioration de compétence, don d'enquêteur, don de compétence",
            "Amélioration de compétence, don général, leçons accomplies, maître détective, maîtrise des armures légères",
            "Amélioration de compétence, don d'enquêteur, don de compétence, primes d'attributs"
        ],
        "abilities": {
            "concevoir_un_stratageme": {
                "name": "Concevoir un stratagème",
                "description": [
                    "Vous pouvez simuler un combat dans votre esprit et utiliser votre cerveau plutôt que vos muscles pour porter une attaque.",
                    "Vous obtenez l'action <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'm0f2B7G9eaaTmhFL'})\">Concevoir un stratagème</div>",
                    "Vous obtenez l'action <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'm0f2B7G9eaaTmhFL'})\">Concevoir un stratagème</div>"
                ]
            },
            "dons_d_enqueteur": {
                "name": "Dons d'enquêteur",
                "description": [
                    "Au niveau 1 puis tous les niveaux pairs par la suite, vous obtenez un don de classe d'enquêteur."
                ]
            },
            "frappe_strategique": {
                "name": "Frappe stratégique",
                "description": [
                    "Quand vous portez une attaque avec grand soin et en la préparant, vous infligez un coup plus significatif. Quand vous effectuez une Frappe qui ajoute votre modificateur d'Intelligence au jet d'attaque grâce à <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'lgo65ldX7WkXC8Ir'})\">Concevoir un stratagème</div> , vous infligez 1d6 dégâts de précision supplémentaires.",
                    "Au fur et à mesure que votre niveau d'enquêteur augmente, il en est de même de la dangerosité de votre frappe stratégique. Augmentez le nombre de dés de 1 aux niveaux 5, 9, 13 et 17."
                ]
            },
            "methodologie": {
                "name": "Méthodologie",
                "description": [
                    "Vous études vous ont rendu savant dans de nombreux domaines, mais un en particulier a attiré votre intérêt de manière intense.",
                    "Choisissez une méthodologie parmi les suivantes :",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'g3mNzNphtVxyR9Xr'})\">Empirisme</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'UIHUNNYZyQ3p4Vmo'})\">Interrogatoire</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'O3IX7rTxXWWvDVM3'})\">Médecine forensique</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'ln2Y1a4SxlU9sizX'})\">Sciences alchimiques</div>"
                ]
            },
            "sur_l_affaire": {
                "name": "Sur l'affaire",
                "description": [
                    "En tant qu'investigateur, vous considérez vos aventures comme des affaires qui n'attendent que d'être résolues. Vous obtenez une activité et une réaction que vous pouvez utiliser pour enquêter sur vos affaires : <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'xTK2zsWFyxSJvYbX'})\">Suivre une piste</div> et <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '25WDi1cVUrW92sUj'})\">Partager les indices</div> ."
                ]
            },
            "dons_de_competence": {
                "name": "Dons de compétence",
                "description": [
                    "Au niveau 2, puis tous les niveaux pairs suivants, vous obtenez un don de compétence. vous devez être au moins qualifié dans la compétence correspondante pour choisir un don de compétence."
                ],
                "level": 2
            },
            "ameliorations_de_competence": {
                "name": "Améliorations de compétence",
                "description": [
                    "Au niveau 3, puis tous les 2 niveaux, vous obtenez une amélioration de compétence. Vous pouvez utiliser cette amélioration pour augmenter votre degré de maîtrise et devenir qualifié dans une compétence dans laquelle vous étiez inexpérimenté ou pour améliorer votre rang dans une compétence dans laquelle vous êtes déjà qualifié pour devenir expert.",
                    "À partir du niveau 7, vous pouvez utiliser l'amélioration de compétence pour devenir maître dans une compétence dans laquelle vous êtes déjà expert et à partir du niveau 15, vous pouvez l'utiliser pour devenir légendaire dans une compétence dans laquelle vous êtes déjà maître."
                ],
                "level": 3
            },
            "dons_generaux": {
                "name": "Dons généraux",
                "description": [
                    "Au niveau 3, puis tous les 4 niveaux, vous obtenez un don général."
                ],
                "level": 3
            },
            "lecons_accomplies": {
                "name": "Leçons accomplies",
                "description": [
                    "Au niveau 3, puis à tous les autres niveaux impairs, vous obtenez un don de compétence. Ce don doit être associé à une compétence basée sur l'Intelligence, la Sagesse, le Charisme ou à la compétence que vous avez gagnée grâce à votre méthodologie."
                ],
                "level": 3
            },
            "souvenirs_affutes": {
                "name": "Souvenirs affûtés",
                "description": [
                    "Vous pouvez vous souvenir de faits pertinents sur des sujets qui ne sont pas votre spécialité. Votre bonus de maîtrise pour les tests visant à <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '1OagaWtBpVXExToo'})\">Vous souvenir</div> dans des compétences pour lesquelles vous n'êtes pas qualifié est égal à votre niveau au lieu de +0."
                ],
                "level": 3
            },
            "dons_ancestraux": {
                "name": "Dons ancestraux",
                "description": [
                    "En plus de celui avec lequel vous avez commencé, vous obtenez un don ancestral au niveau 5 puis tous les 4 niveaux."
                ],
                "level": 5
            },
            "expertise_avec_les_armes": {
                "name": "Expertise avec les armes",
                "description": [
                    "Vous vous consacrez à l'apprentissage approfondi des subtilités de vos armes. Vous devenez expert avec les armes simples, les armes de guerre et les attaques à mains nues."
                ],
                "level": 5
            },
            "primes_d_attributs": {
                "name": "Primes d'attributs",
                "description": [
                    "Au niveau 5, puis tous les 5 niveaux, vous améliorez quatre scores d'attributs différents. Vous pouvez utiliser ces primes d'attributs pour faire passer la valeur d'un score d'attribut au-dessus de +4. La prime augmente la valeur du score d'attribut de +1/2 s'il est supérieur ou égal à +4 ou de +1 s'il est inférieur à +3."
                ],
                "level": 5
            },
            "maitrise_en_perception": {
                "name": "Maîtrise en perception",
                "description": [
                    "Vous avez développé une vigilance accrue et une attention particulière aux détails. Vous devenez maître en Perception."
                ],
                "level": 7
            },
            "specialisation_martiale": {
                "name": "Spécialisation martiale",
                "description": [
                    "Vous avez appris à infliger des blessures plus importantes avec les armes que vous connaissez le mieux. Vous infligez 2 dégâts supplémentaires avec les armes et les attaques à mains nues avec lesquelles vous êtes expert. Ces dégâts passent à 3 si vous êtes maître et à 4 si vous êtes légendaire."
                ],
                "level": 7
            },
            "expertise_en_vigueur": {
                "name": "Expertise en vigueur",
                "description": [
                    "Les aventures ont rendu votre physique plus résistant. Vous devenez expert en jets de Vigueur."
                ],
                "level": 9
            },
            "expertise_de_l_enqueteur": {
                "name": "Expertise de l'enquêteur",
                "description": [
                    "Vous avez affiné vos techniques d'investigation à un degré exceptionnel. Le bonus de circonstances obtenu grâce à <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'xTK2zsWFyxSJvYbX'})\">Suivre une piste</div> passe à +2. Votre degré de maîtrise pour le DD de classe d'enquêteur passe à expert."
                ],
                "level": 9
            },
            "improvisation_deductive": {
                "name": "Improvisation déductive",
                "description": [
                    "Vous utilisez vos talents de déduction pour accomplir n'importe quelle tâche nécessaire s'avère pour résoudre l'affaire.",
                    "Vous pouvez tenter n'importe quel test nécessitant que vous soyez qualifié dans une compétence et ce, même si vous êtes inexpérimenté dans la compétence en question. Vous pouvez tenter n'importe quel test nécessitant que vous soyez expert dans une compétence pour autant que vous soyez qualifié dans la compétence en question. Vous pouvez tenter n'importe quel test nécessitant que vous soyez maître dans une compétence pour autant que vous soyez expert dans la compétence en question."
                ],
                "level": 11
            },
            "volonte_inebranlable": {
                "name": "Volonté inébranlable",
                "description": [
                    "Dans votre poursuite de la vérité et de la connaissance, vous ne serez pas dissuadé. Vous devenez maître en jets de Volonté. Lorsque vous obtenez un succès sur un jet de Volonté, il devient un succès critique."
                ],
                "level": 11
            },
            "expertise_avec_les_armures_legeres": {
                "name": "Expertise avec les armures légères",
                "description": [
                    "Vous avez appris à mieux esquiver en ne portant pas d'armure ou une armure légère. Votre degré de maîtrise avec les armures légères et en défense sans armure passe à expert."
                ],
                "level": 13
            },
            "sens_incroyables": {
                "name": "Sens incroyables",
                "description": [
                    "Vous remarquez des choses quasiment impossibles à détecter pour une personne ordinaire. Vous devenez légendaire en Perception."
                ],
                "level": 13
            },
            "maitrise_des_armes": {
                "name": "Maîtrise des armes",
                "description": [
                    "Vous comprenez pleinement vos armes. Vous êtes maître avec les armes simples, les armes de guerre et les attaques à mains nues."
                ],
                "level": 13
            },
            "reflexes_avises": {
                "name": "Réflexes avisés",
                "description": [
                    "Toujours à l'affût du danger, vous vous protégez des blessures de façon magistrale. Vous devenez maître en jets de Réflexes. Lorsque vous obtenez un succès sur un jet de Réflexes, il devient un succès critique."
                ],
                "level": 15
            },
            "specialisation_martiale_superieure": {
                "name": "Spécialisation martiale supérieure",
                "description": [
                    "Les dégâts de spécialisation martiale passent à 4 avec les armes et les attaques à mains nues avec lesquelles vous êtes expert, à 6 si vous êtes maître et à 8 si vous êtes légendaire."
                ],
                "level": 15
            },
            "resolution_inebranlable_superieure": {
                "name": "Résolution inébranlable supérieure",
                "description": [
                    "Votre force de volonté devient réellement indestructible. Vous devenez légendaire en jets de Volonté. Lorsque vous obtenez un succès sur un jet de Volonté, vous bénéficiez d'un succès critique. Lorsque vous obtenez un échec critique sur un jet de Volonté, il devient un échec. Lorsque vous obtenez un échec sur un jet de Volonté contre un effet dommageable, vous ne subissez que la moitié des dégâts."
                ],
                "level": 17
            },
            "maitre_detective": {
                "name": "Maître Détective",
                "description": [
                    "En tant que maître-détective, vous pouvez résoudre n'importe quelle affaire et trouver tous les indices disponibles. Votre réputation vous précède et même les criminels et les imposteurs expérimentés vous craignent. Vous devenez maîtrise dans le DD de classe d'enquêteur.",
                    "De plus lorsque vous pénétrez dans un nouvel endroit qui comporte un nouvel indice permettant de résoudre la question au coeur de l'une de vos enquêtes actives, le MJ vous informe de l'existence de l'indice et de son type : un objet, une personne, un effet de sort ou quelque chose du genre. Quand vous trouvez l'indice, le MJ vous informe que c'est lui.",
                    "S'il y a plus d'un indice dans l'endroit en question, le MJ en choisit un et vous informe à son propos. Quand vous trouvez l'un des indices présents à cet endroit, le MJ vous indique que vous avez trouvé l'indice, même s'il ne s'agissait pas de celui qu'il avait choisi ou s'il y a d'autres indices que vous n'avez pas trouvés."
                ],
                "level": 19
            },
            "maitrise_des_armures_legeres": {
                "name": "Maîtrise des armures légères",
                "description": [
                    "Votre compétence avec les armures légères s'améliore, augmentant votre capacité à esquiver les coups. Vous devenez maître avec les armures légères et en défense sans armure."
                ],
                "level": 19
            }
        }
    },
    {
        "name": "Ensorceleur",
        "key": "ensorceleur",
        "general_desc": "Vous n'avez pas choisi de devenir un lanceur de sorts — vous êtes né ainsi. La magie coule dans vos veines, peut-être parce qu'une divinité a béni l'un de vos ancêtres, parce qu'un ancien membre de votre famille a communié avec une créature primordiale ou parce qu'un puissant rituel occulte a influencé votre lignée. L'introspection et l'étude vous permettent d'affiner vos compétences magiques inhérentes et de développer de nouveaux pouvoirs plus puissants. Le pouvoir qui imprègne votre sang comporte pourtant un risque et vous devez constamment faire des choix dont les conséquences vous élèveront au rang de lanceur de sorts émérite ou causeront votre destruction.",
        "characteristics_bonus": {
            "number": 1,
            "choice": [
                "CHA"
            ]
        },
        "life_point_by_level": 6,
        "desc_fight": "Vous utilisez vos sorts pour blesser vos ennemis, influencer leur esprit et gêner leurs déplacements. Vous pourriez vous sentir trop vulnérable dans un combat au corps-à-corps, mais votre lignage pourrait aussi vous conférer des pouvoirs qui vous permettent de tenir votre position dans une bagarre. Bien que votre magie soit puissante, pour conserver vos meilleurs sorts ou lorsque vous les avez tous utilisés, vous pouvez également compter sur vos tours de magie.",
        "desc_socially": "Votre charisme naturel vous permet d'avoir de bonnes interactions sociales.",
        "desc_exploration": "Vous détectez la magie qui vous entoure, en dénichant les trésors et en avertissant votre groupe d'aventuriers de la présence de pièges magiques. Quand votre groupe tombe sur des mystères ou des problèmes en rapport avec votre lignage, vous tentez de les résoudre.",
        "desc_interlude": "Vous fabriquez des objets magiques ou écrivez des parchemins. Votre lignage pourrait vous pousser à faire des recherches sur votre ascendance ou à vous associer à des gens ou des créatures affiliés.",
        "desc_you_could": [
            "Êtes souvent très indépendant et, que vous rejetiez ou acceptiez votre héritage magique, vous tenez à vous distinguer à la fois comme lanceur de sorts et en tant qu'individu.",
            "Considérez votre lignage avec fascination, terreur ou entre les deux : toutes les nuances entre une acceptation sans réserve et un rejet véhément.",
            "Vous reposez sur l'utilisation d'objets magiques tels que les parchemins et les baguettes pour compléter votre sélection limitée de sorts."
        ],
        "desc_probably_others": [
            "S'émerveillent de votre capacité à créer de la magie à partir de rien et voient vos capacités avec autant de méfiance que d'admiration.",
            "Vous considèrent comme moins investi que les magiciens assidus, les prêtres dévoués ou d'autres praticiens de la magie car vos capacités vous viennent naturellement.",
            "Partent du principe que vous êtes aussi imprévisible que la magie que vous pratiquez, même si votre personnalité prouve le contraire."
        ],
        "mastery": {
            "perception": "Q",
            "saves": [
                {
                    "level": "Q",
                    "description": "Qualifié en Vigueur"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en Réflexes"
                },
                {
                    "level": "E",
                    "description": "Expert en Volonté"
                }
            ],
            "skills": [
                {
                    "level": "Q",
                    "description": "Qualifié dans une ou plusieurs compétences déterminées par votre lignage"
                },
                {
                    "level": "Q",
                    "description": "Qualifié dans un nombre de compétences supplémentaires égal à 2 plus votre modificateur d'Intelligence"
                }
            ],
            "attacks": [
                {
                    "level": "Q",
                    "description": "Qualifié avec les armes simples"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en attaques à mains nues"
                }
            ],
            "defenses": [
                {
                    "level": "I",
                    "description": "Inexpérimenté avec toutes les armures"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en défense sans armure"
                }
            ],
            "spells": [
                {
                    "level": "Q",
                    "description": "Qualifié en jets d'attaque de sort"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en DD de sorts"
                }
            ],
            "class_dc": "Q",
            "rarity": null
        },
        "capacity_by_level": [
            "maîtrises initiales, lignage, incantation d'ensorceleur, primes d'attribut, puissance ensorcelante, répertoire de sorts",
            "Don de compétence, don d'ensorceleur",
            "Amélioration de compétence, don général, sorts de rang 2, sorts emblématiques",
            "Don de compétence, don d'ensorceleur",
            "Amélioration de compétence, don ancestral, primes d'attributs, sorts de rang 3, vigueur magique",
            "Don de compétence, don d'ensorceleur",
            "Amélioration de compétence, don général, incantateur expert, sorts de rang 4",
            "Don de compétence, don d'ensorceleur",
            "Amélioration de compétence, don ancestral, expertise en réflexes, sorts de rang 5",
            "Don de compétence, don d'ensorceleur, primes d'attributs",
            "Amélioration de compétence, don général, expertise en perception, expertise avec les armes, sorts de rang 6",
            "Don de compétence, don d'ensorceleur",
            "Amélioration de compétence, don ancestral robes défensives, sorts de rang 7, spécialisation martiale",
            "Don de compétence, don d'ensorceleur",
            "Amélioration de compétence, don général, primes d'attributs, sorts de rang 8, maître incantateur",
            "Don de compétence, don d'ensorceleur",
            "Amélioration de compétence, don ancestral, sorts de rang 9, volonté majestueuse",
            "Don de compétence, don d'ensorceleur",
            "Amélioration de compétence, don général, incantateur légendaire, parangon du lignage,",
            "Primes d'attributs, don de compétence, don d'ensorceleur"
        ],
        "abilities": {
            "incantation_de_l_ensorceleur": {
                "name": "Incantation de l'ensorceleur",
                "description": [
                    "Votre lignage vous procure une incroyable puissance magique. Vous êtes un incantateur et pouvez lancer des sorts avec l'activité Lancer un sort. La tradition dont proviennent vos sorts est déterminée par votre lignage. En tant qu'ensorceleur, vous tirez votre pouvoir de vous-même et les gestes et les incantations que vous utilisez pour façonner votre pouvoir pourraient évoquer la nature de votre lignage. Par exemple, un ensorceleur avec un lignage démoniaque pourrait chanter des phrases gutturales en fiélon ou faire des gestes brefs et rapides pour lancer un sort.",
                    "Chaque jour, vous pouvez lancer jusqu'à trois sorts de rang 1. Vous devez connaître les sorts pour les lancer et vous les apprenez par le biais de la capacité de classe Répertoire de sorts.",
                    "Au fur et à mesure que vous gagnez des niveaux en tant qu'ensorceleur, le nombre de vos sorts augmente, ainsi que le rang le plus élevé des sorts que vous pouvez lancer, comme indiqué sur la table des sorts d'ensorceleur ci-dessous.",
                    "Certains de vos sorts exigent un jet d'attaque de sort pour déterminer leur efficacité ou obligent vos ennemis à faire un jet contre leur DD (en tentant généralement un jet de sauvegarde). Comme le Charisme est votre attribut essentiel, votre modificateur d'attaque de sort de votre DD de sort utilisent votre modificateur de Charisme."
                ]
            },
            "sorts_intensifies": {
                "name": "Sorts intensifiés",
                "description": [
                    "Quand vous obtenez des emplacements de sort de rang 2 et supérieur, vous pouvez les remplir avec des versions plus puissantes de sorts de rang inférieur. Ceci augmente le rang du sort pour qu'il corresponde à celui de l'emplacement du sort. Vous devez posséder, dans votre répertoire de sorts, un sort au rang où vous souhaitez le lancer pour pouvoir l'intensifier à ce rang. Nombre de sorts possèdent des améliorations spécifiques quand ils sont intensifiés à certains rangs. La capacité de classe Sorts emblématiques vous permet d'intensifier certains sorts librement."
                ]
            },
            "tours_de_magie": {
                "name": "Tours de magie",
                "description": [
                    "Certains de vos sorts sont des tours de magie. Un tour de magie est un type de sort qui n'utilise pas d'emplacement de sort. Vous pouvez lancer un tour de magie à volonté, n'importe quel nombre de fois par jour. Un tour de magie est toujours automatiquement intensifié à la moitié de votre niveau arrondi au supérieur. Habituellement, c'est égal au sort du rang le plus élevé que vous pouvez lancer en tant qu'ensorceleur. Par exemple, les tours de magie d'un ensorceleur de niveau 1 sont de rang 1, tandis que ceux d'un ensorceleur de niveau 5 sont de rang 3."
                ]
            },
            "lignage": {
                "name": "Lignage",
                "description": [
                    "Choisissez un lignage qui vous confère votre talent d'incantation. Ce choix détermine le type de sorts que vous lancez et la liste de sorts que vous utilisez pour les sélectionner, les sorts supplémentaires que vous apprenez et les compétences supplémentaires dans lesquelles vous êtes qualifié. Vous obtenez également des points de focalisation et des sorts focalisés spéciaux déterminés par votre lignage. Voici les différents lignages.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '3qqvnC2U8W26yae7'})\">Aberrant</div> une étrange et incompréhensible influence vous transmet des sorts occultes.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'TFihgf3jDhmKd0fa'})\">Aesir</div> L'un de vos ancètres a été touché par un aesir et maintenant le fracas de l'acier contre l'acier et l'appel constant à se battre fait écho dans votre sang.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'vhW3glAaEfq2DKrw'})\">Angélique</div> la grâce divine vous accorde des sorts divins.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'dKTb959aCQIzSIXj'})\">Béni du ver</div> la puissance draconique sacrée vous accorde des sorts divins.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'w5koctOVrEcpxTIq'})\">Démoniaque</div> une corruption impure vous confère des sorts divins.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'o39zQMIdERWtmBSB'})\">Diabolique</div> un lien avec les diables vous octroie des sorts divins.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'ZHabYxSgYK0XbjhM'})\">Draconique</div> le sang des dragons vous attribue des sorts arcaniques.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'RXRnJcG4XSabZ35a'})\">Élémentaire</div> la puissance des éléments se manifeste en vous sous la forme de sorts primordiaux.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'eW3cfCH7Wpx2vik2'})\">Féerique</div> l'influence des fées vous confère des sorts primordiaux.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'tYOMBiH3HbViNWwn'})\">Génie</div> l'influence des génies vous confère des sorts arcaniques.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'O0uXZRWMNliDbkxU'})\">Guenaude</div> la corruption d'une guenaude vous procure des sorts occultes.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'ZEtJJ5UOlV5oTWWp'})\">Impérial</div> une puissance ancienne vous octroie des sorts arcaniques.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '7WBZ2kkhZ7JorWu2'})\">Mort-vivant</div> le contact de la mort vous confère des sorts divins.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '5Wxjghw7lHuCxjZz'})\">Nymphe</div> l'influence des nymphes vous confère des sorts primordiaux.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'uoQOm41BVdSo6pAS'})\">Ombre</div> l'influence du Nébulmonde vous confère des sorts occultes.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'TWR1wbPJuCLnGdFZ'})\">Phénix</div> l'influence du phénix vous confère des sorts primordiaux.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'PpzH9tJULk5ksX9w'})\">Psychopompe</div> l'influence des psychopompes vous confère des sorts divins.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'b6hyZTs1rVGHDexz'})\">Tourment</div> Vous possédez un lien profond avec le Tourment."
                ]
            },
            "primes_d_attributs": {
                "name": "Primes d'attributs",
                "description": [
                    "En plus de celle que vous avez obtenu par votre classe au niveau 1, vous disposez de quatre primes gratuites à allouer à des modificateurs d'attributs différents.",
                    "Au niveau 5, puis tous les 5 niveaux, vous obtenez quatre primes à allouer à différents modificateurs d'attribut. Si un modificateur d'attribut est déjà de +4 ou supérieur, il faut deux primes d'attributs pour l'augmenter. Vous obtenez une prime partielle et devrez améliorer de nouveau cet attribut à un autre niveau par la suite pour l'augmenter de 1."
                ]
            },
            "puissance_ensorcelante": {
                "name": "Puissance ensorcelante",
                "description": [
                    "En raison du pouvoir magique inhérent à votre sang, vos sorts qui blessent ou soignent sont plus puissants que ceux des autres lanceurs de sorts. Lorsque vous lancez un sort d'un emplacement de sort qui inflige des dégâts ou restaure des Points de vie, vous bénéficiez d'un bonus de statut aux dégâts ou aux soins de ce sort égal au rang du sort. Cela ne s'applique qu'aux dégâts ou soins initiaux que le sort inflige lorsqu'il est lancé. Une créature ne subit ces dégâts ou ne bénéficie de ces soins qu'une seule fois par sort, même si le sort aurait pu lui infliger des dégâts ou des soins à plusieurs reprises."
                ]
            },
            "repertoire_de_sorts": {
                "name": "Répertoire de sorts",
                "description": [
                    "On appelle répertoire de sorts l'ensemble des sorts que vous pouvez lancer. Au niveau 1, vous apprenez deux sorts de rang 1 et quatre tours de magie de votre choix, ainsi qu'un sort et un tour de magie supplémentaires conférés par votre lignage. Vous les choisissez dans la liste des sorts courants de la tradition correspondant à votre lignage ou parmi les autres sorts de cette tradition auxquels vous avez accès. Vous pouvez lancer un sort de votre répertoire en utilisant un emplacement de sort du rang correspondant.",
                    "Vous ajoutez à ce répertoire de sorts lorsque vous gagnez des niveaux. Chaque fois que vous obtenez un emplacement de sort (voir le tableau des sorts d'ensorceleur par jour), vous ajoutez un sort du même rang dans votre répertoire. Quand vous avez accès à un nouveau rang de sort, votre premier nouveau sort de ce rang est toujours celui conféré par votre lignage, mais vous pouvez choisir les autres sorts que vous obtenez. Au niveau 2, vous choisissez un autre sort de rang 1. Au niveau 3, vous obtenez un nouveau sort de lignage et deux autres sorts de rang 2, etc. Quand vous ajoutez des sorts, vous pourriez choisir une version de rang supérieur d'un sort que vous connaissez déjà afin de pouvoir lancer une version intensifiée de ce sort.",
                    "Même si vous les obtenez au même rythme, vos emplacements de sort et les sorts dans votre répertoire sont deux choses distinctes. Si un don ou une autre capacité ajoute un sort à votre répertoire, cela ne vous donne pas pour autant un nouvel emplacement de sort, et vice versa."
                ]
            },
            "remplacer_des_sorts_de_votre_repertoire": {
                "name": "Remplacer des sorts de votre répertoire",
                "description": [
                    "Lorsque vous ajoutez de nouveaux sorts dans votre répertoire de sorts, vous pourriez vouloir remplacer certains de ceux que vous avez déjà appris précédemment. Chaque fois que vous gagnez un niveau et que vous apprenez de nouveaux sorts, vous pouvez remplacer l'un de vos anciens sorts par un sort différent du même rang. Ce sort peut être un tour de magie mais vous ne pouvez pas remplacer vos sorts de lignage. Vous pouvez également remplacer des sorts grâce au réapprentissage durant les intermèdes."
                ]
            },
            "sorts_de_lignage": {
                "name": "Sorts de lignage",
                "description": [
                    "Votre lignage vous accorde des sorts de lignage, des sorts spéciaux qui sont propres à votre lignage. Les sorts de lignage sont un type de sorts focalisés. Il faut dépenser 1 point de focalisation pour lancer un sort focalisé et vous commencez avec une réserve de focalisation de 1 point. Vous remplissez votre réserve de focalisation au cours de vos préparatifs quotidiens et vous pouvez récupérer 1 point de focalisation en utilisant l'activité Refocaliser en y consacrant 10 minutes. Contrairement à autres personnages, vous n'avez pas besoin de vous consacrer à une activité spécifique quand vous Refocalisez car le pouvoir qui coule dans vos veines remplit naturellement votre réserve de focalisation.",
                    "Les sorts focalisés sont automatiquement intensifiés à la moitié de votre niveau arrondie au supérieur, comme les tours de magie. Les sorts focalisés n'ont pas besoin d'emplacement de sort. Le nombre maximal de Points de focalisation de votre réserve de focalisation est égal au nombre de sorts focalisés que vous possédez, mais ne peut jamais dépasser plus de 3 points. Vous apprenez le sort initial de lignage, qui est propre à votre lignage."
                ]
            },
            "description_d_un_lignage": {
                "name": "Description d'un lignage",
                "description": [
                    "Une entrée de lignage contient les informations suivantes :",
                    "Tradition Vous utilisez cette tradition magique et sa liste de sorts.",
                    "Compétences de lignage Vous êtes qualifié dans les compétences indiquées.",
                    "Legs d'ensorceleur Vous ajoutez automatiquement les sorts indiqués ici à votre répertoire de sorts, comme indiqué dans la capacité <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'lURKSJZAGKVD6cH9'})\">Répertoire de sorts</div> . Au niveau 1, vous obtenez un tour de magie et un sort de rang 1. Vous apprenez les autres sorts sur la liste dès que vous obtenez la capacité de lancer des sorts d'ensorceleur de ce rang.",
                    "Sorts de lignage Vous obtenez automatiquement le sort de lignage initial au rang 1 et vous pouvez en obtenir davantage en prenant les dons <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'eZrftEihfuJBldG5'})\">Lignage avancé</div> et <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'DpRMdytpPiCypmkJ'})\">Lignage supérieur</div> .",
                    "Magie du sang Chaque fois que vous lancez un sort de lignage en utilisant un point de focalisation ou un sort provenant des Legs d'ensorceleur, vous choisissez effet de magie du sang que vous connaissez pour en tirer avantage. Vous commencez à jouer avec l'avantage indiqué dans votre lignage et en gagnez d'autres grâce aux dons d'ensorceleur.",
                    "Si la magie du sang vous offre un choix, faites-le avant de résoudre le sort. L'effet de magie du sang se produit après les tests nécessaires pour résoudre les effets initiaux du sort et contre un adversaire, il s'applique uniquement si le sort est une attaque réussie ou si l'adversaire rate son jet de sauvegarde. Si le sort possède une zone, vous devez vous désigner vous-même ou désigner une cible dans la zone quand vous lancez le sort pour qu'elle soit la cible de l'effet de la magie du sang. Toute référence au rang du sort concerne le rang du sort que vous lancez."
                ]
            },
            "dons_de_competence": {
                "name": "Dons de compétence",
                "description": [
                    "Au niveau 2, puis tous les niveaux pairs, vous obtenez un don de compétence. vous devez être au moins qualifié dans la compétence correspondante pour choisir un don de compétence."
                ],
                "level": 2
            },
            "dons_d_ensorceleur": {
                "name": "Dons d'ensorceleur",
                "description": [
                    "Au niveau 2, puis tous les niveaux pairs, vous obtenez un don de classe d'ensorceleur."
                ],
                "level": 2
            },
            "ameliorations_de_competence": {
                "name": "Améliorations de compétence",
                "description": [
                    "Au niveau 3, puis tous les 2 niveaux, vous obtenez une amélioration de compétence. Vous pouvez utiliser cette amélioration pour augmenter votre degré de maîtrise et devenir qualifié dans une compétence dans laquelle vous étiez inexpérimenté ou pour améliorer votre rang dans une compétence dans laquelle vous êtes déjà qualifié pour devenir expert.",
                    "À partir du niveau 7, vous pouvez utiliser l'amélioration de compétence pour devenir maître dans une compétence dans laquelle vous êtes déjà expert et à partir du niveau 15, vous pouvez l'utiliser pour devenir légendaire dans une compétence dans laquelle vous êtes déjà maître."
                ],
                "level": 3
            },
            "dons_generaux": {
                "name": "Dons généraux",
                "description": [
                    "Au niveau 3, puis tous les 4 niveaux, vous obtenez un don général."
                ],
                "level": 3
            },
            "sorts_emblematiques": {
                "name": "Sorts emblématiques",
                "description": [
                    "L'expérience vous permet de lancer certains sorts avec plus de souplesse. Pour chaque rang de sort auquel vous avez accès, choisissez un sort de ce rang pour en faire un sort emblématique. Vous n'avez pas besoin d'apprendre une à une les versions intensifiées des sorts emblématiques. Au lieu de cela, vous pouvez intensifier librement ces sorts. Si vous avez appris un sort emblématique à un rang supérieur à son rang minimum, vous pouvez également lancer toutes ses versions de rang inférieur sans avoir à apprendre ces derniers séparément. Si vous remplacez un sort emblématique, vous pouvez l'échanger contre un autre sort emblématique de même rang que celui auquel vous avez appris celui que vous remplacez. Il est nécessaire de passer autant de temps de réapprentissage que pour un sort."
                ],
                "level": 3
            },
            "dons_ancestraux": {
                "name": "Dons ancestraux",
                "description": [
                    "En plus de celui avec lequel vous avez commencé, vous obtenez un don ancestral au niveau 5 puis tous les 4 niveaux."
                ],
                "level": 5
            },
            "vigueur_magique": {
                "name": "Vigueur magique",
                "description": [
                    "La puissance magique a amélioré la résilience de votre corps. Vous devenez expert en jets de Vigueur."
                ],
                "level": 5
            },
            "incantation_experte": {
                "name": "Incantation experte",
                "description": [
                    "Votre magie intrinsèque répond facilement et puissamment à vos sollicitations. Vous devenez expert en modificateur d'attaque de sorts et en DD de sort."
                ],
                "level": 7
            },
            "expertise_en_reflexes": {
                "name": "Expertise en Réflexes",
                "description": [
                    "Vous avez développé un talent pour esquiver le danger. Vous devenez expert en jets de Réflexes."
                ],
                "level": 9
            },
            "expertise_avec_les_armes": {
                "name": "Expertise avec les armes",
                "description": [
                    "Vous avez amélioré votre compétence au combat. Vous devenez expert avec les armes simples et les attaques à mains nues."
                ],
                "level": 11
            },
            "expertise_en_perception": {
                "name": "Expertise en perception",
                "description": [
                    "Vous restez à l'affût des menaces qui vous entourent. Vous devenez expert en Perception."
                ],
                "level": 11
            },
            "robes_defensives": {
                "name": "Robes défensives",
                "description": [
                    "Le flux de la magie et votre entraînement défensif se combinent pour vous placer hors du passage avant une attaque. Votre degré de maîtrise pour la défense sans armure passe à expert."
                ],
                "level": 13
            },
            "specialisation_martiale": {
                "name": "Spécialisation martiale",
                "description": [
                    "Vous avez appris à infliger des blessures plus importantes avec les armes que vous connaissez le mieux. Vous infligez 2 dégâts supplémentaires avec les armes et les attaques à mains nues avec lesquelles vous êtes expert. Ces dégâts passent à 3 si vous êtes maître et à 4 si vous êtes légendaire."
                ],
                "level": 13
            },
            "incantateur_maitre": {
                "name": "Incantateur maître",
                "description": [
                    "Vous avez terminé de maîtriser la magie qui se trouve dans votre sang. Vous devenez maître en modificateur d'attaque de sorts et en DD de sort."
                ],
                "level": 15
            },
            "volonte_majestueuse": {
                "name": "Volonté majestueuse",
                "description": [
                    "Votre esprit et votre volonté sont tempérés par votre maîtrise des forces magiques. Votre degré de maîtrise pour les jets de Volonté passe à maître. Lorsque vous obtenez un succès sur un jet de Volonté, il devient un succès critique."
                ],
                "level": 17
            },
            "parangon_du_lignage": {
                "name": "Parangon du lignage",
                "description": [
                    "Vous maîtrisez à présent parfaitement la magie de votre lignage. Ajoutez deux sorts courants de rang 10 de votre tradition à votre répertoire. Vous gagnez un unique emplacement de sort de rang 10 que vous pouvez utiliser pour lancer l'un de ces deux sorts avec la capacité Incantation de l'ensorceleur. Au contraire des autres emplacements de sort, vous ne gagnez pas plus de sorts de rang 10 lorsque vous gagnez un niveaux et vous ne pouvez pas les utiliser avec des capacités qui vous permettent de lancer des sorts sans dépenser d'emplacements ou avec des capacités qui vous procurent davantage d'emplacements de sort. Vous pouvez prendre le don d'ensorceleur <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '6SEDoht4dXEJE5SW'})\">Perfection du lignage</div> pour obtenir un deuxième emplacement."
                ],
                "level": 19
            },
            "incantateur_legendaire": {
                "name": "Incantateur légendaire",
                "description": [
                    "Vous démontrez un prodigieux talent pour l'incantation. Vous devenez légendaire en modificateur d'attaque de sorts et en DD de sorts.",
                    "Votre lignage détermine votre liste de sorts, la tradition des sorts que vous lancez et vous permet de vous qualifier dans des compétences propres à votre lignage."
                ],
                "level": 19
            }
        }
    },
    {
        "name": "Guerrier",
        "key": "guerrier",
        "general_desc": "Combattant pour l'honneur, l'appât du gain, la loyauté ou simplement pour le frisson de la bataille, vous êtes un maître incontesté de l'armement et des techniques de combat. Vous combinez vos actions grâce à de savantes combinaisons d'ouvertures, de bottes et de contre-attaques lorsque vos ennemis sont assez imprudents pour baisser leur garde. Que vous soyez chevalier, mercenaire, tireur d'élite ou maître de la lame, vous avez affiné vos compétences martiales jusqu'à en faire un art et vous portez des attaques critiques dévastatrices sur vos ennemis.",
        "characteristics_bonus": {
            "number": 1,
            "choice": [
                "FOR",
                "DEX"
            ]
        },
        "life_point_by_level": 10,
        "desc_fight": "Vous frappez avec une précision inégalée et appliquez des techniques de combat spécialisées. Un guerrier au corps-à-corps se place entre ses alliés et les ennemis, en attaquant les adversaires qui tentent de le contourner. Un guerrier à distance délivre des tirs précis en restant à distance.",
        "desc_socially": "Vous pouvez être une présence intimidante. Cela peut être utile lors de négociations avec des ennemis, mais s'avérer un handicap dans des interactions plus courtoises.",
        "desc_exploration": "Vous maintenez vos défenses actives en prévision du combat et gardez l'œil ouvert pour repérer les menaces cachées. Vous surmontez à votre façon les défis physiques, en enfonçant les portes, en soulevant les obstacles, en escaladant avec facilité et en sautant par-dessus les fosses.",
        "desc_interlude": "Vous pourriez effectuer des travaux manuels ou fabriquer et réparer votre arsenal. Si vous connaissez des techniques qui ne vous servent plus, vous pourriez vous entraîner pour en apprendre de nouvelles. Si vous vous êtes déjà forgé une réputation, vous pourriez fonder une organisation ou construire une forteresse qui soit la vôtre.",
        "desc_you_could": [
            "Connaître la fonction et les spécificités de toutes les armes et armures que vous possédez.",
            "Reconnaître que les dangers d'une vie d'aventurier doivent être compensés par de grandes festivités ou des projets ambitieux.",
            "Être peu enclin à la patience face aux énigmes ou problèmes nécessitant une logique détaillée ou une étude approfondie."
        ],
        "desc_probably_others": [
            "Vous trouvent intimidant jusqu'à ce qu'ils commencent à vous connaître — et peut-être même après avoir fait votre connaissance.",
            "Vous voient comme une brute épaisse et écervelée.",
            "Respectent votre expertise dans l'art de la guerre et apprécient vos opinions sur la qualité des armes et armures."
        ],
        "mastery": {
            "perception": "E",
            "saves": [
                {
                    "level": "E",
                    "description": "Expert en Vigueur"
                },
                {
                    "level": "E",
                    "description": "Expert en Réflexes"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en Volonté"
                }
            ],
            "skills": [
                {
                    "level": "Q",
                    "description": "Qualifié à votre choix en Acrobaties ou en Athlétisme"
                },
                {
                    "level": "Q",
                    "description": "Qualifié dans un nombre de compétences supplémentaires égal à 3 plus votre modificateur d'Intelligence."
                }
            ],
            "attacks": [
                {
                    "level": "E",
                    "description": "Expert en attaques à mains nues"
                },
                {
                    "level": "E",
                    "description": "Expert avec les armes simples"
                },
                {
                    "level": "E",
                    "description": "Expert avec les armes de guerre"
                },
                {
                    "level": "Q",
                    "description": "Qualifié avec les armes évoluées"
                }
            ],
            "defenses": [
                {
                    "level": "Q",
                    "description": "Qualifié en défense sans armure"
                },
                {
                    "level": "Q",
                    "description": "Qualifié avec toutes les armures"
                }
            ],
            "spells": null,
            "class_dc": "Q",
            "rarity": null
        },
        "capacity_by_level": [
            "blocage au bouclier, don de guerrier, frappe réactive, maîtrises initiales",
            "Don de compétence, don de guerrier",
            "Amélioration de compétence, bravoure, don général",
            "Don de compétence, don de guerrier",
            "Amélioration de compétence, don ancestral, maîtrise martiale du guerrier, primes d'attributs",
            "Don de compétence, don de guerrier",
            "Amélioration de compétence, arpenteur du champ de bataille, don général, spécialisation martiale",
            "Don de compétence, don de guerrier",
            "Amélioration de compétence, don ancestral, endurci au combat, flexibilité martiale",
            "Don de compétence, don de guerrier, primes d'attributs",
            "Amélioration de compétence, don général, expertise avec les armures, expertise du guerrier",
            "Don de compétence, don de guerrier",
            "Don ancestral, amélioration de compétence, légende des armes",
            "Don de compétence, don de guerrier",
            "Amélioration de compétence, don général, flexibilité améliorée, primes d'attributs, réflexes exercés, spécialisation martiale supérieure",
            "Don de compétence, don de guerrier",
            "Amélioration de compétence, don ancestral, maîtrise des armures",
            "Don de compétence, don de guerrier",
            "Amélioration de compétence, don général, légende polyvalente",
            "Don de compétence, don de guerrier, primes d'attributs"
        ],
        "abilities": {
            "blocage_au_bouclier": {
                "name": "Blocage au bouclier",
                "description": [
                    "Vous obtenez le don général <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'jM72TjJ965jocBV8'})\">Blocage au bouclier</div> , une réaction qui vous permet de réduire les dégâts avec votre bouclier."
                ]
            },
            "dons_de_classe": {
                "name": "Dons de classe",
                "description": [
                    "Au niveau 1, puis tous les niveaux pairs, vous obtenez un don de classe de guerrier."
                ]
            },
            "frappe_reactive": {
                "name": "Frappe réactive",
                "description": [
                    "Toujours à l'affût de la moindre faiblesse, vous attaquez aussitôt qu'une faille s'ouvre dans la défense de vos ennemis. Vous obtenez la réaction <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'KAVf7AmRnbCAHrkT'})\">Frappe réactive</div> .",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'KAVf7AmRnbCAHrkT'})\">Frappe réactive</div> R",
                    "Déclencheur Une créature qui se trouve dans votre allonge utilise une action de manipulation ou de déplacement, fait une attaque à distance ou quitte une case lors d'une action de déplacement qu'elle entreprend.",
                    "Vous frappez un adversaire qui vous laisse une ouverture. Vous faites une Frappe au corps-à-corps contre la créature déclencheuse. Si votre attaque est un coup critique et que le déclencheur était une action de manipulation, vous interrompez cette action. Cette Frappe n'est pas prise en compte pour calculer votre pénalité d'attaques multiples et votre pénalité d'attaques multiples ne s'applique pas à cette Frappe."
                ]
            },
            "dons_de_competence": {
                "name": "Dons de compétence",
                "description": [
                    "Au niveau 2, puis tous les deux niveaux, vous obtenez un don de compétence. Pour choisir un don de compétence, vous devez être au moins qualifié dans la compétence correspondante."
                ],
                "level": 2
            },
            "ameliorations_de_competence": {
                "name": "Améliorations de compétence",
                "description": [
                    "Au niveau 3, puis tous les 2 niveaux, vous obtenez une amélioration de compétence. Vous pouvez utiliser cette amélioration pour augmenter votre degré de maîtrise et devenir qualifié dans une compétence dans laquelle vous étiez inexpérimenté ou pour améliorer votre rang dans une compétence dans laquelle vous êtes déjà qualifié pour devenir expert.",
                    "À partir du niveau 7, vous pouvez utiliser l'amélioration de compétence pour devenir maître dans une compétence dans laquelle vous êtes déjà expert et à partir du niveau 15, vous pouvez l'utiliser pour devenir légendaire dans une compétence dans laquelle vous êtes déjà maître."
                ],
                "level": 3
            },
            "bravoure": {
                "name": "Bravoure",
                "description": [
                    "Après avoir affronté d'innombrables ennemis et le chaos de la bataille, vous avez appris à rester fort face à la peur. Vous devenez expert en jet de Volonté. Lorsque vous obtenez un succès sur un jet de Volonté contre un effet de terreur, il devient un succès critique. De plus, chaque fois que vous obtenez l'état <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'TBSHQspnbcqxsmjL'})\">Effrayé</div> , réduisez sa valeur de 1."
                ],
                "level": 3
            },
            "dons_generaux": {
                "name": "Dons généraux",
                "description": [
                    "Au niveau 3, puis tous les 4 niveaux, vous obtenez un don général."
                ],
                "level": 3
            },
            "dons_ancestraux": {
                "name": "Dons ancestraux",
                "description": [
                    "En plus de celui avec lequel vous avez commencé, vous obtenez un don ancestral au niveau 5 puis tous les 4 niveaux."
                ],
                "level": 5
            },
            "maitrise_martiale_du_guerrier": {
                "name": "Maîtrise martiale du guerrier",
                "description": [
                    "Les heures passées à vous entraîner au maniement de vos armes de prédilection, à apprendre et à développer de nouvelles techniques de combat, ont grandement augmenté votre efficacité avec vos armes favorites. Choisissez un groupe d'armes. Votre degré de maîtrise passe à maître avec les armes simples, les armes de guerre et les attaques à mains nues de ce groupe et à expert avec les armes évoluées de ce groupe.",
                    "Vous infligez les effets critiques spécialisés de toutes les armes et attaques à mains nues avec lesquelles vous êtes maître."
                ],
                "level": 5
            },
            "primes_d_attributs": {
                "name": "Primes d'attributs",
                "description": [
                    "Au niveau 5, puis tous les 5 niveaux, vous améliorez quatre scores d'attributs différents. Vous pouvez utiliser ces primes d'attributs pour faire passer la valeur d'un score d'attribut au-dessus de +4. La prime augmente la valeur du score d'attribut de +1/2 s'il est supérieur ou égal à +4 ou de +1 s'il est inférieur à +3."
                ],
                "level": 5
            },
            "arpenteur_du_champ_de_bataille": {
                "name": "Arpenteur du champ de bataille",
                "description": [
                    "Que ce soit pour faire le point sur l'armée ennemie ou pour simplement monter la garde, vous savez parfaitement observer vos ennemis. Votre degré de maîtrise en Perception passe à maître. De plus, vous réagissez plus vite en combat, vous obtenez un bonus de circonstances de +2 aux tests de Perception pour l'initiative, ce qui vous permet de réagir plus vite durant le combat."
                ],
                "level": 7
            },
            "specialisation_martiale": {
                "name": "Spécialisation martiale",
                "description": [
                    "Vous avez appris à infliger des blessures plus importantes avec les armes que vous connaissez le mieux. Vous infligez 2 dégâts supplémentaires avec les armes et les attaques à mains nues avec lesquelles vous êtes expert. Ces dégâts passent à 3 si vous êtes maître et à 4 si vous êtes légendaire."
                ],
                "level": 7
            },
            "endurci_au_combat": {
                "name": "Endurci au combat",
                "description": [
                    "Votre expérience au combat vous protège autant contre la magie que contre les toxines. Vous devenez maître en jets de Vigueur. Lorsque vous obtenez un succès sur un jet de Vigueur, il devient un succès critique."
                ],
                "level": 9
            },
            "flexibilite_martiale": {
                "name": "Flexibilité martiale",
                "description": [
                    "Vous pouvez préparez vos tactiques pour vous adapter à différentes situations. Au cours de vos préparatifs quotidiens, vous obtenez un don de guerrier de niveau 8 ou inférieur dont vous remplissez les prérequis et que vous n'avez pas déjà. Vous pouvez utiliser ce don jusqu'à vos prochains préparatifs quotidiens."
                ],
                "level": 9
            },
            "expertise_avec_les_armures": {
                "name": "Expertise avec les armures",
                "description": [
                    "Vous avez passé tellement de temps en armure que vous savez comment tirer le meilleur de sa protection. Vous devenez expert avec les armures légères, intermédiaires et lourdes, ainsi qu'en défense sans armure. Vous obtenez les effets spécialisés des armures intermédiaires et lourdes."
                ],
                "level": 11
            },
            "expertise_du_guerrier": {
                "name": "Expertise du guerrier",
                "description": [
                    "Les techniques que vous avez appliquées vous ont rendu encore plus redoutable. Votre degré de maîtrise en DD de classe de guerrier passe à expert"
                ],
                "level": 11
            },
            "legende_des_armes": {
                "name": "Légende des armes",
                "description": [
                    "Vous avez appris des techniques de combat qui s'appliquent à toutes les armes et vous avez développé une compétence inégalée avec vos armes préférées. Votre degré de maîtrise avec les armes simples, les armes de guerre et les attaques à mains nues passe à maître. Votre degré de maîtrise avec les armes évoluées passe à expert.",
                    "Vous pouvez choisir un groupe d'armes et augmenter votre degré de maîtrise avec toutes les armes simples, les armes de guerre et les attaques à mains nues de ce groupe et à maître avec toutes les armes évoluées appartenant à ce groupe."
                ],
                "level": 13
            },
            "flexibilite_amelioree": {
                "name": "Flexibilité améliorée",
                "description": [
                    "Votre expérience considérable vous donne une capacité d'adaptation encore supérieure pour affronter les défis de chaque jour. Quand vous utilisez flexibilité martiale, vous obtenez deux dons de guerrier au lieu d'un seul. Le premier don doit toujours être de niveau 8 ou inférieur, mais le deuxième peut être de niveau 14 ou inférieur. De plus, le premier don peut vous permettre de remplir les prérequis du deuxième. Vous devez remplir tous les prérequis de ces dons."
                ],
                "level": 15
            },
            "reflexes_exerces": {
                "name": "Réflexes exercés",
                "description": [
                    "Des réflexes exercés vous permettent de vous mettre à l'abri, même en cas d'explosion cataclysmique. Votre degré de maîtrise pour les jets de Réflexes passe à maître. Lorsque vous obtenez un succès sur un jet de Réflexes, il devient un succès critique."
                ],
                "level": 15
            },
            "specialisation_martiale_superieure": {
                "name": "Spécialisation martiale supérieure",
                "description": [
                    "Les dégâts de spécialisation martiale passent à 4 avec les armes et les attaques à mains nues avec lesquelles vous êtes expert, à 6 si vous êtes maître et à 8 si vous êtes légendaire."
                ],
                "level": 15
            },
            "maitrise_des_armures": {
                "name": "Maîtrise des armures",
                "description": [
                    "Votre compétence avec les armures s'améliore encore. Vous devenez maître avec les armures légères, intermédiaires et lourdes ainsi qu'en défense sans armure."
                ],
                "level": 17
            },
            "legende_polyvalente": {
                "name": "Légende polyvalente",
                "description": [
                    "Votre habileté avec toutes les armes est quasiment sans égale. Votre degré de maîtrise avec les armes simples, les armes de guerre et les attaques à mains nues passe à légendaire et votre degré de maîtrise avec les armes évoluées à maître. Votre degré de maîtrise dans le DD de la classe de guerrier passe à maître."
                ],
                "level": 19
            }
        }
    },
    {
        "name": "Magicien",
        "key": "magicien",
        "general_desc": "Vous êtes un éternel étudiant des secrets de l'univers, utilisant votre maîtrise de la magie pour lancer de puissants sorts. Vous traitez la magie comme une science, recoupant les derniers textes sur la pratique de la pratique de l'incantation des sorts avec des tomes anciens pour découvrir et comprendre les arcanes de la magie. Cependant, la théorie magique est vaste et il est impossible de tout étudier. La plupart des magiciens apprennent dans le cadre d'une scolarité formelle, leur programme d'études s'inscrivant dans une catégorie spécifique, même si certains chercheurs particulièrement motivés élaborent parfois leurs propres théories.",
        "characteristics_bonus": {
            "number": 1,
            "choice": [
                "INT"
            ]
        },
        "life_point_by_level": 6,
        "desc_fight": "Vous essayez probablement de rester loin de la mêlée, en appréciant soigneusement le moment pour utiliser vos sorts. Vous conservez votre magie la plus puissante pour mettre hors de combat les adversaires menaçants et utilisez vos tours de magie quand il ne reste que des adversaires faibles. Quand des ennemis utilisent des ruses comme <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'XXqE1eY3w3z6xJCB'})\">Invisibilité</div> ou <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'A2JfEKe6BZcTG1S8'})\">Vol</div> , vous répondez par des sorts comme <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '0qaqksrGGDj74HXE'})\">Lumière révélatrice</div> ou <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'gPvtmKMRpg9I9D7H'})\">Cloué à terre</div> , ce qui permet à vos alliés d'être à pied d'égalité.",
        "desc_socially": "Vous êtes un puits de connaissances sur des sujets obscurs et vous faites preuve de logique lors des débats.",
        "desc_exploration": "Vous localisez les auras magiques et déterminez la signification arcanique des écrits magiques ou des phénomènes que vous découvrez. Quand vous croisez un obstacle inhabituel qui vous empêche de progresser, vous disposez sûrement du parchemin idéal pour le surmonter plus facilement.",
        "desc_interlude": "Vous apprenez de nouveaux sorts, fabriquez des objets magiques ou rédigez des parchemins pour votre groupe. Vous cherchez de nouvelles formules excitantes en plus de vos sorts. Vous pourriez même nouer des relations avec des érudits ou créer votre propre école ou guilde.",
        "desc_you_could": [
            "Ressentir une curiosité intellectuelle intarissable sur le fonctionnement de tout ce qui vous entoure - la magie en particulier.",
            "Chercher à appliquer les enseignements de votre école à n'importe quelle situation, voir les problèmes à travers le prisme des sorts que vous avez consacrés votre vie à apprendre.",
            "Utiliser un jargon ésotérique et des termes très techniques pour décrire précisément les détails des effets magiques, bien que ces précisions échappent probablement à la majorité des gens."
        ],
        "desc_probably_others": [
            "Considèrent probablement que vous êtes incroyablement puissant et potentiellement dangereux.",
            "Craignent probablement ce que votre magie peut faire à leur esprit, leur corps et leur âme et vous demandent sûrement d'éviter de lancer des sorts en bonne compagnie car peu de gens sont capables de les identifier et de savoir s'ils sont inoffensifs ou maléfiques avant qu'il ne soit trop tard.",
            "Présument que vous pouvez facilement résoudre tous leurs problèmes, qu'il s'agisse de conditions météorologiques dangereuses ou de mauvaises récoltes et vous demandent des sorts qui les aideront à obtenir tout ce qu'ils désirent."
        ],
        "mastery": {
            "perception": "Q",
            "saves": [
                {
                    "level": "Q",
                    "description": "Qualifié en Vigueur"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en Réflexes"
                },
                {
                    "level": "E",
                    "description": "Expert en Volonté"
                }
            ],
            "skills": [
                {
                    "level": "Q",
                    "description": "Qualifié en Arcanes"
                },
                {
                    "level": "Q",
                    "description": "Qualifié dans un nombre de compétences supplémentaire égal à 2 plus votre modificateur d'Intelligence"
                }
            ],
            "attacks": [
                {
                    "level": "Q",
                    "description": "Qualifié en attaques à mains nues"
                },
                {
                    "level": "Q",
                    "description": "Qualifié avec les armes simples"
                }
            ],
            "defenses": {
                "level": "Q",
                "description": "Qualifié en défense sans armure"
            },
            "spells": [
                {
                    "level": "Q",
                    "description": "Qualifié en modificateurs d'attaques de sort"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en DD des sorts"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en DD de classe de magicien"
                }
            ],
            "class_dc": null,
            "rarity": null
        },
        "capacity_by_level": [
            "école arcanique, incantation arcanique, lien arcanique, maîtrises initiales, thèse arcanique",
            "Don de compétence, don de magicien",
            "Amélioration de compétence, don général, sorts de rang 2",
            "Don de compétence, don de magicien",
            "Amélioration de compétence, don ancestral, expertise en réflexes, primes d'attributs, sorts de rang 3",
            "Don de compétence, don de magicien",
            "Amélioration de compétence, don général, incantateur expert, sorts de rang 4",
            "Don de compétence, don de magicien",
            "Amélioration de compétence, don ancestral, sorts de rang 5, vigueur magique",
            "Don de compétence, don de magicien, primes d'attributs",
            "Amélioration de compétence, don général, expertise en perception, expertise avec les armes, sorts de rang 6,",
            "Don de compétence, don de magicien",
            "Amélioration de compétence, don ancestral, robes défensives, sorts de rang 7, spécialisation martiale",
            "Don de compétence, don de magicien",
            "Amélioration de compétence, don général, incantateur maître, primes d'attributs, sorts de rang 8",
            "Don de compétence, don de magicien",
            "Amélioration de compétence, don ancestral, sorts de rang 9, volonté prodigieuse",
            "Don de compétence, don de magicien",
            "Amélioration de compétence, art magique de l'archimage, don général, incantateur légendaire",
            "Don de compétence, don de magicien, primes d'attributs"
        ],
        "abilities": {
            "ecole_arcanique": {
                "name": "École arcanique",
                "description": [
                    "La plupart des magiciens acquièrent leurs connaissances des sorts par le biais d'un enseignement éducatif formel, dispensés dans un établissement tel que l'Arcanamirium ou le Magaambya. Au niveau 1, vous choisissez votre <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'kzxu2dI7tFxv6Ix6.JournalEntryPage.wDukeO3euLEGn6FA#arcane-schools'})\">école arcanique</div> qui vous accorde vos capacités magiques.",
                    "Vous obtenez des sorts supplémentaires et des emplacements de sorts du cursus enseigné par l'école au sein de laquelle vous avez étudié. Certains magiciens suivent l'école de la théorie magique unifiée qui tente de construire une nouvelle école en étudiant différemment et en tirant des informations de toutes sortes de textes et de tuteurs. Bien qu'un magicien de cette école manque de la spécialisation propre à une formation formelle, il possède une meilleure polyvalence."
                ]
            },
            "incantation_de_magicien": {
                "name": "Incantation de magicien",
                "description": [
                    "Grâce à l'étude et la pratique assidues, vous pouvez construire des sorts avec une rigueur académique en façonnant la magie arcanique. Vous êtes un incantateur et vous pouvez lancer des sorts de la tradition arcanique en utilisant l'activité Lancer un sort. En tant que magicien, lorsque vous lancez des sorts, vos incantations précisent exactement quelles forces vous invoquez et comment les façonner et vos gestes façonnent et dirigent précisément votre magie tandis que des cercles de runes arcaniques prennent vie.",
                    "Au niveau 1, vous pouvez préparer jusqu'à deux sorts de rang 1 et cinq tours de magie chaque matin à partir des sorts issus de votre grimoire, plus un tour de magie de cursus et un sort de cursus de chaque rang que vous pouvez lancer de votre école arcanique. Les sorts que vous préparez restent disponibles jusqu'à ce que vous les lanciez ou que vous prépariez vos sorts de nouveau. Le nombre de sorts que vous pouvez préparer est appelé emplacements de sort.",
                    "Quand vous gagnez des niveaux en tant que magicien, le nombre de sorts que vous pouvez préparer chaque jour augmente ainsi que le plus haut rang de sort que vous pouvez lancer comme indiqué sur la table des Sorts de magicien par jour.",
                    "Certains de vos sorts nécessitent que vous tentiez un jet d'attaque pour déterminer leur efficacité ou obligent vos ennemis à faire un test contre votre DD de sort (typiquement en tentant un jet de sauvegarde). Comme votre attribut essentiel est l'Intelligence, votre modificateur de sort d'attaque et votre DD de sorts utilise votre modificateur d'Intelligence."
                ]
            },
            "l_intensification_de_sorts": {
                "name": "L'intensification de sorts",
                "description": [
                    "Lorsque vous obtenez des emplacements de sorts de rang 2 et supérieur, vous pouvez remplir ces emplacements avec des versions plus puissantes de sorts de rang inférieur. Ceci augmente le rang du sort, l'intensifiant pour correspondre à l'emplacement du sort. Nombre de sorts possèdent des améliorations spécifiques lorsqu'ils sont intensifiés à certains rangs."
                ]
            },
            "les_tours_de_magie": {
                "name": "Les tours de magie",
                "description": [
                    "Certains de vos sorts sont des tours de magie. Un tour de magie est un type spécifique de sort qui n'utilise pas d'emplacement de sort. Vous pouvez lancer un tour de magie à volonté, n'importe quel nombre de fois par jour. Un tour de magie est toujours intensifié automatiquement à la moitié de votre niveau arrondi au supérieur — c'est habituellement égal au plus haut rang de vos emplacements de sorts de magicien. Par exemple, en tant que magicien de niveau 1, vos tours de magie sont de rang 1 et en tant que magicien de niveau 5, vos tours de magie sont des sorts de rang 3."
                ]
            },
            "le_grimoire": {
                "name": "Le grimoire",
                "description": [
                    "Chaque sort arcanique possède une version écrite, que vous pouvez enregistrer dans votre livre de sorts personnalisé. Vous débutez avec un grimoire d'une valeur inférieure ou égale à 10 pa, que vous recevez gratuitement et devez étudier chaque jour pour préparer vos sorts. La forme et le nom de votre grimoire sont laissés à votre choix. Il peut s'agir d'un tome à la reliure de cuir qui sent le renfermé ou d'un assortiment de minces disques métalliques reliés par un anneau de laiton. Son nom pourrait être ésotérique comme Le grimoire des variations ondilignes ou quelque chose de plus académique comme Applications pyromantiques avancées de la théorie élémentaire du Jalmeray.",
                    "Le grimoire contient 10 tours de magie et 5 sorts arcaniques de rang 1 de votre choix. Vous les choisissez parmi les sorts courants de la liste de sorts arcaniques ou d'autres sorts arcaniques auxquels vous avez accès. Vous ajoutez aussi deux sorts de rang 1 du cursus de votre école arcanique (à l'exception de l'école de la théorie magique unifiée, comme indiqué dans cette école).",
                    "Chaque fois que vous obtenez un niveau, vous ajoutez deux sorts arcaniques à votre grimoire, de n'importe quel rang pour lequel vous possédez des rangs de sorts, choisis parmi les sorts courants de votre tradition ou d'autres sorts auxquels vous avez obtenu accès. . Vous pouvez également ajouter des sorts à votre grimoire avec l'activité Apprendre un sort. Lorsque vous obtenez des emplacements de sort d'un nouveau rang, vous ajoutez aussi un sort supplémentaire du cursus de votre école (à moins qu'il ne s'agisse de l'école de la théorie magique unifiée)."
                ]
            },
            "lien_arcanique": {
                "name": "Lien arcanique",
                "description": [
                    "Vous placez une partie de votre puissance magique dans un objet lié. Chaque jour lorsque vous préparez vos sorts, vous pouvez désigner un unique objet en votre possession comme votre objet lié. Il s'agit en général d'un objet associé à l'incantation, comme une baguette, un anneau ou un bâton, mais vous êtes libre de choisir une arme ou autre chose. Vous obtenez l'action gratuite <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'v82XtjAVN4ffgVVR'})\">Drain d'objet lié</div> ."
                ]
            },
            "div_class_gs_link_information_onclick_controller_main_doactionafter_event_show_information_param_information_uuid_v82xtjavn4ffgvvr_drain_d_objet_lie_div_f": {
                "name": "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'v82XtjAVN4ffgVVR'})\">Drain d'objet lié</div> F",
                "description": [
                    "Fréquence Une fois par jour",
                    "Conditions Votre objet lié est sur votre personne.",
                    "Vous dépensez la puissance magique contenue dans votre objet lié. Lors du tour actuel, vous pouvez lancer un sort que vous avez préparé pour la journée et déjà lancé, sans dépenser d'emplacement de sort. Vous devez toujours Lancer le sort et remplir les autres conditions du sort."
                ]
            },
            "these_arcanique": {
                "name": "Thèse arcanique",
                "description": [
                    "Au cours de vos études pour devenir un magicien à part entière, vous avez écrit une thèse de recherches magiques uniques. Vous obtenez un avantage dépendant du sujet de votre thèse de recherche. Les thèses arcaniques sont décrites ci-après. Votre thèse spécifique avait probablement un titre plus long et plus technique, comme \"À propos des méthodes d'interpolation de sort et de la genèse d'une nouvelle compréhension des Fondations de la magie\".",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'Klb35AwlkNrq1gpB'})\">Bâton nexus</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '89zWKD2CN7nRu2xp'})\">Expérimentation mutamagique</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'SNZ46g3u7U6x0XJj'})\">Harmonisation avec le familier améliorée</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'OAcxS625AXSGrQIC'})\">Mélange de sorts</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'QzWXMCSGNfvvpYgF'})\">Substitution de sort</div>"
                ]
            },
            "dons_de_competence": {
                "name": "Dons de compétence",
                "description": [
                    "Au niveau 2, puis tous les niveaux pairs, vous obtenez un don de compétence. vous devez être au moins qualifié dans la compétence correspondante pour choisir un don de compétence."
                ],
                "level": 2
            },
            "dons_de_magicien": {
                "name": "Dons de magicien",
                "description": [
                    "Au niveau 2, puis tous les niveaux pairs, vous obtenez un don de classe de magicien."
                ],
                "level": 2
            },
            "dons_generaux": {
                "name": "Dons généraux",
                "description": [
                    "Au niveau 3, puis tous les 4 niveaux, vous obtenez un don général."
                ],
                "level": 3
            },
            "ameliorations_de_competence": {
                "name": "Améliorations de compétence",
                "description": [
                    "Au niveau 3, puis tous les 2 niveaux, vous obtenez une amélioration de compétence. Vous pouvez utiliser cette amélioration pour augmenter votre degré de maîtrise et devenir qualifié dans une compétence dans laquelle vous étiez inexpérimenté ou pour améliorer votre rang dans une compétence dans laquelle vous êtes déjà qualifié pour devenir expert.",
                    "À partir du niveau 7, vous pouvez utiliser l'amélioration de compétence pour devenir maître dans une compétence dans laquelle vous êtes déjà expert et à partir du niveau 15, vous pouvez l'utiliser pour devenir légendaire dans une compétence dans laquelle vous êtes déjà maître."
                ],
                "level": 3
            },
            "dons_ancestraux": {
                "name": "Dons ancestraux",
                "description": [
                    "En plus de celui avec lequel vous avez commencé, vous obtenez un don ancestral au niveau 5 puis tous les 4 niveaux."
                ],
                "level": 5
            },
            "expertise_en_reflexes": {
                "name": "Expertise en réflexes",
                "description": [
                    "Vous avez développé un talent pour esquiver le danger. Vous devenez expert en jets de Réflexes."
                ],
                "level": 5
            },
            "primes_d_attributs": {
                "name": "Primes d'attributs",
                "description": [
                    "Au niveau 5, puis tous les 5 niveaux, vous améliorez quatre scores d'attributs différents. Vous pouvez utiliser ces primes d'attributs pour faire passer la valeur d'un score d'attribut au-dessus de +4. La prime augmente la valeur du score d'attribut de +1/2 s'il est supérieur ou égal à +4 ou de +1 s'il est inférieur à +3."
                ],
                "level": 5
            },
            "incantateur_expert": {
                "name": "Incantateur expert",
                "description": [
                    "Une longue pratique des arcanes a amélioré vos aptitudes. Vous devenez expert en modificateur d'attaque de sorts et en DD de sort."
                ],
                "level": 7
            },
            "vigueur_magique": {
                "name": "Vigueur magique",
                "description": [
                    "La puissance magique a amélioré la résilience de votre corps. Vous devenez expert en jets de Vigueur."
                ],
                "level": 9
            },
            "expertise_en_perception": {
                "name": "Expertise en perception",
                "description": [
                    "Vous restez à l'affût des menaces qui vous entourent. Vous devenez expert en Perception."
                ],
                "level": 11
            },
            "expertise_avec_les_armes_du_magicien": {
                "name": "Expertise avec les armes du magicien",
                "description": [
                    "Par l'intermédiaire de la seule expérience, vous avez amélioré votre technique avec vos armes. Vous devenez expert avec les armes simples et les attaques à mains nues."
                ],
                "level": 11
            },
            "robes_defensives": {
                "name": "Robes défensives",
                "description": [
                    "Le flux de la magie et votre entraînement défensif se combinent pour vous placer hors du passage avant une attaque. Votre degré de maîtrise pour la défense sans armure passe à expert."
                ],
                "level": 13
            },
            "specialisation_martiale": {
                "name": "Spécialisation martiale",
                "description": [
                    "Vous avez appris à infliger des blessures plus importantes avec les armes que vous connaissez le mieux. Vous infligez 2 dégâts supplémentaires avec les armes et les attaques à mains nues avec lesquelles vous êtes expert. Ces dégâts passent à 3 si vous êtes maître et à 4 si vous êtes légendaire."
                ],
                "level": 13
            },
            "incantateur_maitre": {
                "name": "Incantateur maître",
                "description": [
                    "Vous possédez des capacités de lanceur de sorts exceptionnelles. Vous devenez maître en modificateur d'attaque de sorts et en DD de sort."
                ],
                "level": 15
            },
            "volonte_prodigieuse": {
                "name": "Volonté prodigieuse",
                "description": [
                    "Votre esprit est simplement trop complexe et sophistiqué pour pouvoir être bidouillé. Votre degré de maîtrise en jets de Volonté passe à maître. Lorsque vous obtenez un succès sur un jet de Volonté, il devient un succès critique."
                ],
                "level": 17
            },
            "art_magique_de_l_archimage": {
                "name": "Art magique de l'archimage",
                "description": [
                    "Vous disposez de la plus puissante des magies et pouvez lancer un sort d'une puissance réellement incroyable. Vous obtenez un unique emplacement de sort de rang 10 et pouvez préparer un sort en utilisant Incantation de magicien. Contrairement aux autres emplacements de sort, vous ne pouvez utiliser des emplacements de sorts de rang 10 avec des capacités qui vous accorde davantage d'emplacements de sorts ou qui vous permettent de dépenser des sorts sans dépenser d'emplacements de sorts. Vous n'obtenez pas plus d'emplacements de sort de rang 10 en gagnant un niveau, mais vous pouvez prendre le don <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'tP26mgaFPpr6df1i'})\">Puissance de l'archimage</div> pour obtenir un second emplacement."
                ],
                "level": 19
            },
            "incantateur_legendaire": {
                "name": "Incantateur légendaire",
                "description": [
                    "Vous êtes un incantateur consommé, mêlant à la fois la théorie arcanique et la pratique de la fabrication des sorts. Vous devenez légendaire en modificateur d'attaque de sorts et en DD de sorts.",
                    "Votre école arcanique est l'endroit où vous vous êtes consacré à l'étude de la magie. Que vous ayez appris dans les salles prestigieuses d'une institution officielle, par le biais d'un apprentissage auprès d'un archimage ou en autodidacte dans des ouvrages de seconde main, votre école arcanique a défini de manière indélébile votre cursus et l'orientation de votre magie.",
                    "Sorts de cursus Vous ajoutez automatiquement à votre grimoire certains des sorts figurant dans le programme de votre école. Au niveau 1, vous ajoutez un tour de magie et deux sorts de rang 1 de votre choix. Dès que vous obtenez la capacité de lancer des sorts de magicien d'un rang nouveau, choisissez l'un des sorts de votre cursus de ce rang pour l'ajouter à votre grimoire. Votre MJ peut vous permettre d'échanger ou d'ajouter d'autres sorts à votre cursus s'ils s'intègrent bien à son thème.",
                    "Emplacements de sorts Chaque jour, vous pouvez préparer un tour de magie supplémentaire issu de votre cursus. Vous obtenez un emplacement de sort supplémentaire de chaque rang de sort pour lequel vous disposez d'emplacements de sort de magicien. Vous ne pouvez préparer que des sorts de votre cursus dans ces emplacements de sorts. Tout sort indiqué dans votre cursus qui est d'un rang de sort convenable est éligible et peut être préparé dans chacun de ces emplacements de sorts supplémentaires, quelle que soit la manière dont vous l'avez ajouté à votre grimoire.",
                    "Sort d'école Les sorts d'école sont un type de sorts focalisés. Il faut dépenser 1 point de focalisation pour lancer un sort focalisé et vous commencez avec une réserve de focalisation de 1 point de focalisation. Vous remplissez votre réserve de focalisation lors de vos préparatifs quotidiens et vous pouvez récupérer 1 point de focalisation en utilisant l'activité Refocaliser pendant dix minutes pour étudier votre grimoire ou conduire une recherche arcanique.",
                    "Un sort focalisé est automatiquement intensifié à la moitié de votre niveau arrondi au supérieur, comme un tour de magie. Un sort focalisé n'a pas besoin d'emplacement de sort et vous ne pouvez pas le lancer en utilisant un emplacement de sort. Le nombre maximum de points de focalisation que peut contenir votre réserve de focalisation est égal au nombre de sorts focalisés que vous possédez mais ne peut jamais dépasser 3 points.",
                    "Vous apprenez le sort d'école initial, qui est propre à votre école. Vous pouvez apprendre le sort d'école avancé avec le don Sort d'école avancé.",
                    "Voici les différents cursus possibles :",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'ZBFICTkzUjE4BDGJ'})\">École de forme protéenne</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'jtAqb5rnhQblZuM8'})\">École de Kalistrade</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'ZpFCZnVzIfZLfNii'})\">École de la frontière</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'YZ2XPmx1WHyWtM0g'})\">École de magie civique</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'wObrT6PytPdS5aUi'})\">École des lettres</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'XXnGHBxNZvRsdkKM'})\">École des portails</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'dPAwM9IdabdH68mW'})\">École des technologies magiques</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'L5FiuXsfW6Sa31gO'})\">École du mentalisme</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'xYYhJtGhFSWNifcO'})\">École de la théorie magique unifiée</div>",
                    "peu courant",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'n2LRzksKVSzOuzqN'})\">École de la récupération</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'KGkWSv9rARpwWzXW'})\">École de la sagesse enracinée</div> qui permet d'accéder à un tronc primaire et à l'une des cinq branches du Magaambya.",
                    "Plusieurs archétypes de la classe de magicien fonctionnent avec des règles différentes avec un accès à des écoles de magie qui leur sont propres.",
                    "L'Élémentaliste vous donne accès à la <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'pUkUC8HHom2DmYzz'})\">Magie élémentaire</div> et vous permet de choisir éventuellement l' <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '5rFzX6JK6CXLFxUP'})\">École élémentaire</div>",
                    "peu courant",
                    "Le Mage de guerre vous donne accès à la <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'vky5bQfK7SG3uOMA'})\">Magie de guerre</div> et à l' <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'E4GZDMn4DYk6qSEV'})\">École de la magie de combat</div>",
                    "rare",
                    "Le <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'HYTaibaCGE85rhbZ'})\">Seigneur des runes</div> vous donne accès à l' <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'aYWPtW5T4Lx07Occ'})\">École de la magie runique thassilonienne</div>"
                ],
                "level": 19
            }
        }
    },
    {
        "name": "Moine",
        "key": "moine",
        "general_desc": "La force de vos poings provient de votre âme et de votre esprit. Vous recherchez la perfection en sculptant votre corps pour en faire un instrument sans faille et votre esprit pour en faire un bastion de discipline et de sagesse. Vous êtes un farouche combattant réputé pour sa maîtrise des arts martiaux et ses postures martiales qui lui permettent de réaliser des manœuvres de combat uniques en leur genre. Bien que le défi de la maîtrise de nombreux styles de combat vous conduit à de grandes hauteurs, vous aimez également méditer sur des questions philosophiques et sur la découvert de nouveaux moyens pour être en paix et atteindre l'illumination.",
        "characteristics_bonus": {
            "number": 1,
            "choice": [
                "FOR",
                "DEX"
            ]
        },
        "life_point_by_level": 10,
        "desc_fight": "Vous vous précipitez dans la mêlée, en réalisant des acrobaties pour esquiver ou bondir par-dessus les obstacles. Vous frappez vos adversaires en une rafale d'attaques rapides, utilisant vos seuls poings ou en maniant des armes spécifiques maîtrisées lors de votre entraînement monastique. Les postures vous permettent de passer rapidement d'un style de combat à un autre pour vous adapter à chaque situation et les pouvoirs Qi permettent des prouesses mystiques comme vous soigner ou vous envoler dans les airs.",
        "desc_socially": "Votre perspicacité vous permet de détecter les mensonges et votre formation philosophique vous apporte quelque chose en toute situation.",
        "desc_exploration": "Vous escaladez les murs, esquivez les pièges, surmontez les obstacles et sautez par-dessus les fosses. Vous restez le plus souvent en périphérie du groupe pour protéger les membres les plus vulnérables et êtes particulièrement apte à repérer le danger ou à vous déplacer discrètement.",
        "desc_interlude": "Vous vous exercez avec assiduité, mangez une nourriture saine, méditez et étudiez divers courants philosophiques. Vous pouvez également pratiquer un artisanat que vous cherchez à perfectionner.",
        "desc_you_could": [
            "Suivre un régime d'exercice et de méditation.",
            "Affronter l'adversité de manière calme et mesurée, sans jamais paniquer ou succomber au désespoir.",
            "Vous projeter dans l'avenir en réfléchissant à des approches qui vous permettront de vous améliorer tout en restant en paix avec votre moi actuel."
        ],
        "desc_probably_others": [
            "S'émerveillent de vos capacités physiques.",
            "Pensent que vous êtes particulièrement tatillon en ce qui concerne vos vœux et vos principes.",
            "Viennent vous trouver pour vos conseils philosophiques."
        ],
        "mastery": {
            "perception": "Q",
            "saves": [
                {
                    "level": "E",
                    "description": "Expert en Vigueur"
                },
                {
                    "level": "E",
                    "description": "Expert en Réflexes"
                },
                {
                    "level": "E",
                    "description": "Expert en Volonté"
                }
            ],
            "skills": {
                "level": "Q",
                "description": "Qualifié dans un nombre de compétences supplémentaires égal à 4 plus votre modificateur d'Intelligence"
            },
            "attacks": [
                {
                    "level": "Q",
                    "description": "Qualifié avec les armes simples"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en attaques à mains nues"
                }
            ],
            "defenses": [
                {
                    "level": "I",
                    "description": "Inexpérimenté avec toutes les armures"
                },
                {
                    "level": "E",
                    "description": "Expert en défense sans armure"
                }
            ],
            "spells": null,
            "class_dc": "Q",
            "rarity": null
        },
        "capacity_by_level": [
            "déluge de coups, don de moine, maîtrises initiales, poings puissants, primes d'attributs",
            "Don de compétence, don de moine",
            "Amélioration de compétence, déplacement extraordinaire +3 mètres, don général, frappes mystiques",
            "Don de compétence, don de moine",
            "Amélioration de compétence, don ancestral, expertise en perception, frappes expertes, primes d'attributs",
            "Don de compétence, don de moine",
            "Amélioration de compétence, déplacement extraordinaire +4,50 mètres, don général, spécialisation martiale, voie vers la perfection",
            "Don de compétence, don de moine",
            "Amélioration de compétence, don ancestral, expertise du moine, frappes de métal",
            "Don de compétence, don de moine, primes d'attributs",
            "Amélioration de compétence, déplacement extraordinaire +6 mètres, deuxième voie vers la perfection, don général",
            "Don de compétence, don de moine",
            "Amélioration de compétence, don ancestral, frappes de maître, maîtrise gracieuse",
            "Don de compétence, don de moine",
            "Amélioration de compétence, déplacement extraordinaire +7,50 mètres, don général, primes d'attributs, spécialisation martiale supérieure, troisième voie vers la perfection",
            "Don de compétence, don de moine",
            "Amélioration de compétence, don ancestral, frappes d'adamantium, légende gracieuse",
            "Don de compétence, don de moine",
            "Amélioration de compétence, déplacement extraordinaire +9 mètres, don général, forme parfaite",
            "Don de compétence, don de moine, primes d'attributs"
        ],
        "abilities": {
            "deluge_de_coups": {
                "name": "Déluge de coups",
                "description": [
                    "Vous pouvez attaquer rapidement avec l'action Déluge de coups"
                ]
            },
            "div_class_gs_link_information_onclick_controller_main_doactionafter_event_show_information_param_information_uuid_nbfnetdpee8cvm17_deluge_de_coups_div_a": {
                "name": "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'nbfNETdpee8CVM17'})\">Déluge de coups</div> A",
                "description": [
                    "Effectuez deux Frappes à mains nues. Si les deux touchent la même créature, ajoutez leurs dégâts lorsqu'il s'agit de résistance et de faiblesse. Appliquez votre pénalité d'attaques multiples aux Frappes comme à l'ordinaire. S'agissant d'une capacité de sophistication, vous ne pouvez utiliser Déluge de coups qu'une seule fois par round."
                ]
            },
            "dons_de_moine": {
                "name": "Dons de moine",
                "description": [
                    "Au niveau 1 puis tous les niveaux pairs par la suite, vous obtenez un don de classe de moine."
                ]
            },
            "poings_puissants": {
                "name": "Poings puissants",
                "description": [
                    "Vos poings sont des armes mortelles. Le dé de dégâts de vos poings passe à 1d6 au lieu de 1d4. Vous ne subissez pas la pénalité de circonstances habituelle de -2 quand vous effectuez une attaque létale avec vos poings ou n'importe quelle autre attaque à mains nues."
                ]
            },
            "dons_de_competence": {
                "name": "Dons de compétence",
                "description": [
                    "Au niveau 2, puis tous les niveaux pairs, vous obtenez un don de compétence. vous devez être au moins qualifié dans la compétence correspondante pour choisir un don de compétence."
                ],
                "level": 2
            },
            "ameliorations_de_competence": {
                "name": "Améliorations de compétence",
                "description": [
                    "Au niveau 3, puis tous les 2 niveaux, vous obtenez une amélioration de compétence. Vous pouvez utiliser cette amélioration pour augmenter votre degré de maîtrise et devenir qualifié dans une compétence dans laquelle vous étiez inexpérimenté ou pour améliorer votre rang dans une compétence dans laquelle vous êtes déjà qualifié pour devenir expert.",
                    "À partir du niveau 7, vous pouvez utiliser l'amélioration de compétence pour devenir maître dans une compétence dans laquelle vous êtes déjà expert et à partir du niveau 15, vous pouvez l'utiliser pour devenir légendaire dans une compétence dans laquelle vous êtes déjà maître."
                ],
                "level": 3
            },
            "deplacement_extraordinaire": {
                "name": "Déplacement extraordinaire",
                "description": [
                    "Vous êtes aussi rapide que le vent. Vous obtenez un bonus de statut de +3 mètres à votre Vitesse lorsque vous ne portez pas d'armure. Le bonus augmente de 1,50 mètre tous les 4 niveaux au-delà du troisième."
                ],
                "level": 3
            },
            "dons_generaux": {
                "name": "Dons généraux",
                "description": [
                    "Au niveau 3, puis tous les 4 niveaux, vous obtenez un don général."
                ],
                "level": 3
            },
            "frappes_mystiques": {
                "name": "Frappes mystiques",
                "description": [
                    "Vous vous focalisez avec détermination sur vos attaques physiques, ce qui les imprègne d'énergie mystique. Vos attaques à mains nues deviennent magiques, ce qui vous permet d'ignorer les résistances aux attaques non magiques. Toutefois, des objets, tels que les <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'FNDq4NFSN0g2HKWO'})\">Bandelettes de coups puissants</div> , seront toujours nécessaires si vous voulez bénéficier d'un bonus d'objet aux jets d'attaque ou augmenter les dés de dégâts d'arme de vos attaques."
                ],
                "level": 3
            },
            "dons_ancestraux": {
                "name": "Dons ancestraux",
                "description": [
                    "En plus de celui avec lequel vous avez commencé, vous obtenez un don ancestral au niveau 5 puis tous les 4 niveaux."
                ],
                "level": 5
            },
            "expertise_en_perception": {
                "name": "Expertise en perception",
                "description": [
                    "Vous restez à l'affût des menaces qui vous entourent. Vous devenez expert en Perception."
                ],
                "level": 5
            },
            "frappes_expertes": {
                "name": "Frappes expertes",
                "description": [
                    "Vous avez pratiqué les arts martiaux et avez maintenant surpassé vos précédentes compétences. Vous devenez expert avec les armes simples et les attaques à mains nues. Quand vous obtenez un succès critique sur une attaque à mains nues appartenant au groupe pugilat, vous appliquez son effet de critique spécialisé."
                ],
                "level": 5
            },
            "primes_d_attributs": {
                "name": "Primes d'attributs",
                "description": [
                    "Au niveau 5, puis tous les 5 niveaux, vous améliorez quatre scores d'attributs différents. Vous pouvez utiliser ces primes d'attributs pour faire passer la valeur d'un score d'attribut au-dessus de +4. La prime augmente la valeur du score d'attribut de +1/2 s'il est supérieur ou égal à +4 ou de +1 s'il est inférieur à +3."
                ],
                "level": 5
            },
            "specialisation_martiale": {
                "name": "Spécialisation martiale",
                "description": [
                    "Vous avez appris à infliger des blessures plus importantes avec les armes que vous connaissez le mieux. Vous infligez 2 dégâts supplémentaires avec les armes et les attaques à mains nues avec lesquelles vous êtes expert. Ces dégâts passent à 3 si vous êtes maître et à 4 si vous êtes légendaire."
                ],
                "level": 7
            },
            "voie_vers_la_perfection": {
                "name": "Voie vers la perfection",
                "description": [
                    "Vous avez progressé le long de votre propre voie vers l'illumination. Choisissez entre votre jet de Réflexes, de Vigueur ou de Volonté. Vous devenez maître dans le jet de sauvegarde choisi. Quand vous obtenez un succès sur le jet de sauvegarde choisi, il devient un succès critique."
                ],
                "level": 7
            },
            "expertise_du_moine": {
                "name": "Expertise du moine",
                "description": [
                    "Vous devenez expert dans le DD de classe de moine. Si vous avez des sorts qi, vous devenez expert en attaque de sort et en DD de sort."
                ],
                "level": 9
            },
            "frappes_de_metal": {
                "name": "Frappes de métal",
                "description": [
                    "Vous savez modifier votre corps pour effectuer des attaques à mains nues imprégnées de l'énergie mystique de métaux rares. On considère que vos attaques à mains nues sont en fer froid et en argent. Ceci vous permet d'infliger plus de dégâts à divers types de créatures surnaturelles, comme les démons, les diables et les fées."
                ],
                "level": 9
            },
            "deuxieme_voie_vers_la_perfection": {
                "name": "Deuxième voie vers la perfection",
                "description": [
                    "Vous avez appris à trouver la perfection dans chacun de vos succès. Choisissez un jet de sauvegarde différent de celui que vous avez choisi avec Voie vers la perfection. Vous devenez maître dans le jet de sauvegarde choisi. Quand vous obtenez un succès sur le jet de sauvegarde choisi, il devient un succès critique."
                ],
                "level": 11
            },
            "frappes_de_maitre": {
                "name": "Frappes de maître",
                "description": [
                    "Vous avez fait de votre corps une arme encore plus mortelle. Vous devenez maître avec les armes simples et les attaques à mains nues."
                ],
                "level": 13
            },
            "maitrise_gracieuse": {
                "name": "Maîtrise gracieuse",
                "description": [
                    "Vous vous déplacez perpétuellement avec grâce, en écartant les coups. Vous devenez maître en défense sans armure."
                ],
                "level": 13
            },
            "specialisation_martiale_superieure": {
                "name": "Spécialisation martiale supérieure",
                "description": [
                    "Les dégâts de spécialisation martiale passent à 4 avec les armes et les attaques à mains nues avec lesquelles vous êtes expert, à 6 si vous êtes maître et à 8 si vous êtes légendaire."
                ],
                "level": 15
            },
            "troisieme_voie_vers_la_perfection": {
                "name": "Troisième voie vers la Perfection",
                "description": [
                    "Vous avez beaucoup progressé dans votre quête personnelle de l'illumination. Choisissez un des jets de sauvegarde choisi avec Voie vers la perfection ou avec Deuxième voie vers la perfection. Votre degré de maîtrise avec ce jet de sauvegarde passe à légendaire.",
                    "Quand vous obtenez un échec critique au jet de sauvegarde choisi, celui-ci se transforme en échec. Lorsque vous obtenez un échec sur le jet de sauvegarde choisi contre un effet qui inflige des dégâts, vous ne subissez que la moitié des dégâts."
                ],
                "level": 15
            },
            "frappes_d_adamantium": {
                "name": "Frappes d'adamantium",
                "description": [
                    "Quand vous vous focalisez avec détermination sur vos membres, vos coups produisent le même impact que le plus solide des métaux. On considère que vos attaques à mains nues sont en adamantium."
                ],
                "level": 17
            },
            "legende_gracieuse": {
                "name": "Légende gracieuse",
                "description": [
                    "Vos mouvements d'une grâce absolue vous confèrent une capacité d'attaque et de défense hors pair. Vous devenez légendaire en défense sans armure et maître en DD de classe de moine. Si vous avez des sorts qi, vous devenez maître en modificateur d'attaque de sort et en DD de sorts."
                ],
                "level": 17
            },
            "forme_parfaite": {
                "name": "Forme parfaite",
                "description": [
                    "Vos techniques sont à présent sans faille. Lors de la première Frappe de votre tour, si vous obtenez moins de 10 sur votre jet de dé, vous pouvez considérer que vous avez obtenu 10 sur votre jet d'attaque. Il s'agit d'un effet de fortune."
                ],
                "level": 19
            }
        }
    },
    {
        "name": "Oracle",
        "key": "oracle",
        "general_desc": "Vous explorez l'un de ces mystères et en tirez le pouvoir de lancer des sorts miraculeux, mais ce pouvoir a un revers terrible : une malédiction qui s'intensifie si vous puisez dedans. Vos capacités sont une épée à double tranchant, que vous pouvez brandir comme un instrument divin ou considérer comme une malédiction des dieux.",
        "characteristics_bonus": {
            "number": 1,
            "choice": [
                "CHA"
            ]
        },
        "life_point_by_level": 8,
        "desc_fight": "Vous puisez dans votre mystère pour accroître votre puissance au combat, en veillant à l'équilibre entre les effets miraculeux que vous produisez et l'augmentation de l'intensité de votre malédiction lorsque les exigences divines contradictoires épuisent votre corps physique. Vous lancez des sorts pour aider vos alliés et semer la destruction sur vos ennemis ou, en fonction de votre mystère, vous vous jetez vous-même dans la bataille.",
        "desc_socially": "Vous vous appuyez sur les intuitions provenant de votre mystère. Vous pourriez tirer parti de votre malédiction pour intimider les gens ou cacher ses effets pour mieux vous y mêler.",
        "desc_exploration": "Vous vous recentrez sur vous-même pour ramener les terribles conflits métaphysiques provoquant votre malédiction sous contrôle de manière à pouvoir de nouveau faire appel plus tard aux pouvoirs de votre mystère. Vous restez conscient des forces surnaturelles qui agissent autour de vous et allez même peut-être jusqu'à jeter un coup d'œil dans le futur pour affiner vos intuitions.",
        "desc_interlude": "Vous pourriez tenter d'en apprendre plus au sujet de votre mystère et des sources divines qui alimentent vos pouvoirs. Vous associer avec d'autres personnes intéressées par le sujet de votre mystère peut vous aider à vivre avec votre malédiction. Vous pourriez vous associer avec une religion organisée ou même fonder vous-même le culte dédié à votre mystère.",
        "desc_you_could": [
            "Considérer vos pouvoirs oraculaires comme une bénédiction, une malédiction ou les deux à la fois.",
            "Pousser jusqu'aux limites de ce que vous pouvez supporter pour réaliser de hauts faits magiques.",
            "Compter sur des objets magiques pour fournir une réserve de magie moins dangereuse et plus fiable."
        ],
        "desc_probably_others": [
            "Ne se rendent pas compte que vos incantations tirent leur source de la puissance divine et pensent plutôt que vous disposez de pouvoirs plus étranges, voire même mauvais.",
            "Supposent que vous avez commis un acte terrible pour que les dieux vous maudissent de la sorte.",
            "Admirent votre détermination et les sacrifices que vous endurez pour produire des actes merveilleux."
        ],
        "mastery": {
            "perception": "Q",
            "saves": [
                {
                    "level": "Q",
                    "description": "Qualifié en Vigueur"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en Réflexes"
                },
                {
                    "level": "E",
                    "description": "Expert en Volonté"
                }
            ],
            "skills": [
                {
                    "level": "Q",
                    "description": "Qualifié en Religion"
                },
                {
                    "level": "Q",
                    "description": "Qualifié dans une ou plusieurs compétences déterminées par votre mystère"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en un nombre de compétences supplémentaires égal à 3 plus votre modificateur d'Intelligence"
                }
            ],
            "attacks": [
                {
                    "level": "Q",
                    "description": "Qualifié avec les armes simples"
                },
                {
                    "level": "Q",
                    "description": "Qualifié avec les attaques à mains nues"
                }
            ],
            "defenses": [
                {
                    "level": "Q",
                    "description": "Qualifié avec les armures légères"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en défense sans armure"
                }
            ],
            "spells": [
                {
                    "level": "Q",
                    "description": "Qualifié en modificateur d'attaque de sort"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en DD de sorts"
                }
            ],
            "class_dc": "Q",
            "rarity": null
        },
        "capacity_by_level": [
            "incantation de l'oracle, maîtrises initiales, mystère, primes d'attribut, répertoire de sorts",
            "Don d'oracle, don de compétence",
            "Amélioration de compétence, don général, sorts de rang 2, sorts emblématiques",
            "Don d'oracle, don de compétence",
            "Amélioration de compétence, don ancestral, primes d'attributs, sorts de rang 3",
            "Don d'oracle, don de compétence",
            "Amélioration de compétence, don général, incantateur expert, résolution mystérieuse, sorts de rang 4",
            "Don d'oracle, don de compétence",
            "Amélioration de compétence, don ancestral, sorts de rang 5, vigueur magique",
            "Don d'oracle, don de compétence, primes d'attributs",
            "Accès divin, amélioration de compétence, don général, expertise avec les armes, malédiction majeure, sens oraculaires, sorts de rang 6",
            "Don d'oracle, don de compétence",
            "Amélioration de compétence, don ancestral, expertise avec les armures légères, réflexes prémonitoires, sorts de rang 7, spécialisation martiale",
            "Don d'oracle, don de compétence",
            "Amélioration de compétence, don général, incantateur maître, primes d'attributs, sorts de rang 8",
            "Don d'oracle, don de compétence",
            "Amélioration de compétence, don ancestral, malédiction extrême, résolution mystérieuse supérieure, sorts de rang 9",
            "Don d'oracle, don de compétence",
            "Amélioration de compétence, clarté oraculaire, don général, incantateur légendaire",
            "Don d'oracle, don de compétence, primes d'attributs"
        ],
        "abilities": {
            "incantation_de_l_oracle": {
                "name": "Incantation de l'oracle",
                "description": [
                    "Vous avez un lien dépourvu de filtre avec les grands pouvoirs de l'univers et des plans au-delà et vous pouvez laisser ce pouvoir se répandre sous forme de magie divine. Vous êtes un incantateur et vous pouvez lancer des sorts de la tradition divine en utilisant l'activité Lancer un sort. En tant qu'oracle, lorsque vous lancez des sorts, vos incantations pourraient se répandre rapidement à partir de vos lèvres en parlant dans d'autres langues ou avoir une intonation d'une voix qui n'est pas tout à fait la vôtre et vos gestes pourraient être désordonnés et sans entraves lorsque l'extase religieuse atteint brièvement votre esprit.",
                    "Chaque jour, vous pouvez lancez jusqu'à trois sorts de rang 1. Vous devez connaître les sorts pour les lancer et vous les apprenez par le biais de la capacité de classe Répertoire de sorts. Le nombre de sorts que vous pouvez lancer chaque jour est appelé vos emplacements de sorts.",
                    "Au fur et à mesure que vous gagnez des niveaux en tant qu'oracle, le nombre de sorts par jour augmente comme le rang le plus élevé des sorts que vous pouvez lancer comme indiqué sur la table des sorts d'oracle par jour ci-dessous.",
                    "Certains de vos sorts nécessitent que vous tentiez un jet d'attaque pour déterminer leur efficacité ou que vos ennemis tentent un jet contre votre DD de sort (typiquement en tentant un jet de sauvegarde). Comme votre attribut essentiel est le Charisme, vos modificateurs d'attaque de sort et vos DD de sort utilisent votre modificateur de Charisme."
                ]
            },
            "les_sorts_intensifies": {
                "name": "Les sorts intensifiés",
                "description": [
                    "Quand vous obtenez des emplacements de sort de rang 2 et supérieurs, vous pouvez remplir leurs emplacements avec des versions plus puissantes de sorts de rang inférieur. Cela augmente le rang du sort, l'intensifiant pour qu'il corresponde à l'emplacement de sort. Vous devez avoir un sort dans votre répertoire de sort du rang que vous voulez lancer en vue de pouvoir l'intensifier à ce rang. Nombre de sorts possèdent des améliorations spécifiques quand ils sont intensifiés à un rang donné. La capacité de classe sorts emblématiques vous permet d'intensifier certains sorts librement."
                ]
            },
            "tours_de_magie": {
                "name": "Tours de magie",
                "description": [
                    "Certains de vos sorts sont des tours de magie. Un tour de magie est un type spécial de sort qui n'utilise pas d'emplacements de sorts. Vous pouvez lancer un tour de magie à volonté, n'importe quel nombre de fois par jour. Un tour de magie est automatiquement intensifié à la moitié de votre niveau arrondi au supérieur. C'est habituellement égal au plus haut rang d'emplacement de sort d'oracle que vous possédez. Par exemple, en tant qu'oracle de niveau 1, vos tours de magie sont de rang 1 et en tant qu'oracle de niveau 5, vos tours de magie sont des sorts de rang 3."
                ]
            },
            "mystere": {
                "name": "Mystère",
                "description": [
                    "Un oracle manie la puissance divine, mais pas celle d'un unique être divin. Ce pouvoir pourrait avoir comme origine un concept puissant ou un idéal, l'attention de plusieurs entités divines dons les domaines d'attention concernent ce sujet ou un conduit direct et dangereux vers la puissance divine brute. C'est le mystère de l'oracle, une source de magie divine qui n'appartient pas à une divinité.",
                    "Choisissez le mystère qui alimente votre magie. Votre mystère vous accorde des sorts supplémentaires et des sorts focalisés spécifiques appelés sorts de révélation. Votre mystère vous accorde également une capacité liée à la malédiction unique qui vous permet de puiser dans le divin, ainsi que de dicter les effets de la malédition oraculaire qui vous afflige lorsque vous touchez trop à cette puissance.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'qvRlih3u7vK3FYUR'})\">Ancêtres</div> Les voix des générations précédentes vous enseignent et vous hantent.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'g3HTg0z3doXZZzAV'})\">Cendres</div> Vous considérez toutes les choses du monde comme passagères et temporaires, attendant d'être purifiées jusqu'à leur essence de base : la cendre laissée après un feu intense.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'gjOGOR30Czpnx3tM'})\">Combat</div> Vous incarnez les vertus des héros de légende.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'RI2EMRBBPNSoTJXu'})\">Cosmos</div> Vous tirez votre puissance des étoiles et de l'espace qui les séparent.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '1PHDn7WJFtR3NgTr'})\">Décrépitude</div> Un bourgeon de printemps se fane, un chêne puissant s'écrase sur le sol de la forêt et un novice grandit jusqu'à la maturité, puis décline vers la vieillesse.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'GTSvbFb36InvuH0w'})\">Flammes</div> Vous dansez avec le feu et faites de votre mieux pour ne pas vous y brûler.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'IaxmCkdsPlA52spu'})\">Ossements</div> La mort semble toujours proche et les morts vous parlent.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'tZBb3Kh4nJcNoUFI'})\">Savoir</div> Vous obtenez un accès à une connaissance sans pareille mais écrasante.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'W9cF7wZztLDb1WGY'})\">Tempête</div> Le vent, les vagues et les tempêtes se déchaînent sur vous.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'EslxR2sbDK9XJaAl'})\">Temps</div> Que ce soit par accident, par le destin ou par le jeu d'une intervention délibérée, vous existez légèrement en dehors du temps.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'o1gGG36wpn9mxeop'})\">Vie</div> Les énergies foisonnantes de la vie s'écoulent à travers vous vers le monde."
                ]
            },
            "lire_une_description_de_mystere": {
                "name": "Lire une description de mystère",
                "description": [
                    "Une description de mystère comprend les informations suivantes et est suivie d'une description de la malédiction de ce mystère.",
                    "Sorts accordés Vous ajoutez automatiquement les sorts indiqués ici aux sorts de votre répertoire de sorts comme indiqué dans Répertoire de sorts. Au niveau 1, vous obtenez un tour de magie et un sort de rang 1. Vous apprenez les autres sorts de la liste dès que vous obtenez la capacité de lancer de sorts de ce rang.",
                    "Sorts de révélation Vous obtenez automatiquement le sort de révélation initial de votre mystère au niveau 1 et pouvez en gagner d'autres en choisissant les dons d'oracle <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'FPVe3o7YctBicSQa'})\">Révélation avancée</div> , <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'HSW3N9pfHhM7upRB'})\">Révélation supérieure</div> et <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '2HeRmbcHcsRMccir'})\">Mystère diversifié</div> .",
                    "Domaines liés Il s'agit des domaines de prêtre associés à votre mystère. Vous obtenez des sorts de domaine en prenant le don <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'qmFWCHOuubEl7VpX'})\">Sagacité du domaine</div> et <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'ENoRkTXtdfsbs98S'})\">Maîtrise du domaine</div> . Au niveau 11, la capacité de classe Accès divin vous donne également d'autres sorts d'emplacements supplémentaires en fonction de vos domaines.",
                    "Compétence de mystère Vous êtes qualifié dans la compétence indiquée. Quelques mystères peuvent vous qualifier dans plus d'une compétence.",
                    "Don d'oracle Vous obtenez ce don d'oracle de niveau 1. C'est un don Lié à la malédiction de sorte que son utilisation aggrave votre malédiction oraculaire."
                ]
            },
            "l_etat_lie_a_la_malediction": {
                "name": "L'état Lié à la malédiction",
                "description": [
                    "Votre malédiction oraculaire vous enserre lorsque vous recevez une punition divine après avoir puisé trop profondément sur vos pouvoirs de mystère. Lié à la malédiction est un état qui n'affecte que les créatures avec une malédiction oraculaire et Lié à la malédiction inclut toujours une valeur. Votre malédiction oraculaire spécifique impose d'uniques effets négatifs en fonction de la valeur de l'état Lié à la malédiction. Vous pouvez retirer l'état Lié à la malédiction qu'en Refocalisant."
                ]
            },
            "repertoire_de_sorts": {
                "name": "Répertoire de sorts",
                "description": [
                    "On appelle répertoire de sorts l'ensemble des sorts que vous pouvez lancer. Au niveau 1, vous apprenez deux sorts divins de rang 1 de votre choix et cinq tours de magie divins de votre choix. Vous les choisissez parmi la liste des sorts courants sur la liste divine ou parmi les autres sorts divins auxquels vous avez accès. Vous pouvez lancer n'importe quel sort de votre répertoire en utilisant un emplacement de sort du rang approprié.",
                    "Vous ajoutez des sorts à votre répertoire lorsque vous gagnez des niveaux. Chaque fois que vous obtenez un emplacement de sort (voir la table des sorts par jour de l'oracle), vous ajoutez à votre répertoire un sort du même rang. Au niveau 2, vous choisissez un autre sort de rang 2. Au niveau 3, vous choisissez deux sorts de rang 2. Lorsque vous ajoutez des sorts, vous pourriez ajouter une version de rang supérieur d'un sort que vous avez déjà, de manière à pouvoir à pouvoir lancer une version intensifiée de ce sort.",
                    "Vos emplacements de sort et les sorts dans votre répertoire de sorts sont deux choses distinctes. Si un don ou une autre capacité ajoute un sort à votre répertoire, cela ne vous donne pas pour autant un nouvel emplacement de sort et vice versa."
                ]
            },
            "remplacer_des_sorts_dans_votre_repertoire": {
                "name": "Remplacer des sorts dans votre répertoire",
                "description": [
                    "Lorsque vous gagnez de nouveaux sorts dans votre répertoire, vous pourriez vouloir remplacer certains des sorts que vous aviez précédemment appris. Chaque fois que vous gagnez un niveau et apprenez de nouveaux sorts, vous pouvez remplacer un de vos anciens sorts par un sort différent de même rang. Ce sort peut être un tour de magie. Vous pouvez également remplacer des sorts grâce au réapprentissage durant les intermèdes."
                ]
            },
            "dons_de_competence": {
                "name": "Dons de compétence",
                "description": [
                    "Au niveau 2, puis tous les niveaux pairs, vous obtenez un don de compétence. vous devez être au moins qualifié dans la compétence correspondante pour choisir un don de compétence."
                ],
                "level": 2
            },
            "dons_d_oracle": {
                "name": "Dons d'oracle",
                "description": [
                    "Au niveau 2 puis tous les niveaux pairs par la suite, vous obtenez un don de classe d'oracle."
                ],
                "level": 2
            },
            "ameliorations_de_competence": {
                "name": "Améliorations de compétence",
                "description": [
                    "Au niveau 3, puis tous les 2 niveaux, vous obtenez une amélioration de compétence. Vous pouvez utiliser cette amélioration pour augmenter votre degré de maîtrise et devenir qualifié dans une compétence dans laquelle vous étiez inexpérimenté ou pour améliorer votre rang dans une compétence dans laquelle vous êtes déjà qualifié pour devenir expert.",
                    "À partir du niveau 7, vous pouvez utiliser l'amélioration de compétence pour devenir maître dans une compétence dans laquelle vous êtes déjà expert et à partir du niveau 15, vous pouvez l'utiliser pour devenir légendaire dans une compétence dans laquelle vous êtes déjà maître."
                ],
                "level": 3
            },
            "dons_generaux": {
                "name": "Dons généraux",
                "description": [
                    "Au niveau 3, puis tous les 4 niveaux, vous obtenez un don général."
                ],
                "level": 3
            },
            "sorts_emblematiques": {
                "name": "Sorts emblématiques",
                "description": [
                    "L'expérience vous permet de lancer certains sorts avec plus de souplesse. Pour chaque rang de sort auquel vous avez accès, choisissez un sort de ce rang pour en faire un sort emblématique. Vous n'avez pas besoin d'apprendre une à une les versions intensifiées des sorts emblématiques. Au lieu de cela, vous pouvez intensifier librement ces sorts. Si vous avez appris un sort emblématique à un rang supérieur à son rang minimum, vous pouvez également lancer toutes ses versions de rang inférieur sans avoir à apprendre ces derniers séparément. Si vous remplacez un sort emblématique, vous pouvez l'échanger contre un autre sort emblématique de même rang que celui auquel vous avez appris celui que vous remplacez. Il est nécessaire de passer autant de temps de réapprentissage que pour un sort."
                ],
                "level": 3
            },
            "dons_ancestraux": {
                "name": "Dons ancestraux",
                "description": [
                    "En plus de celui avec lequel vous avez commencé, vous obtenez un don ancestral au niveau 5 puis tous les 4 niveaux."
                ],
                "level": 5
            },
            "primes_d_attributs": {
                "name": "Primes d'attributs",
                "description": [
                    "Au niveau 5, puis tous les 5 niveaux, vous améliorez quatre scores d'attributs différents. Vous pouvez utiliser ces primes d'attributs pour faire passer la valeur d'un score d'attribut au-dessus de +4. La prime augmente la valeur du score d'attribut de +1/2 s'il est supérieur ou égal à +4 ou de +1 s'il est inférieur à +3."
                ],
                "level": 5
            },
            "incantateur_expert": {
                "name": "Incantateur expert",
                "description": [
                    "La subtilité de votre pouvoir divin est devenue plus claire au fil du temps. Vous devenez expert en modificateur d'attaque de sorts et en DD de sort."
                ],
                "level": 7
            },
            "resolution_mysterieuse": {
                "name": "Résolution mystérieuse",
                "description": [
                    "Le pouvoir de votre mystère qui brûle dans votre âme rend plus difficile l'emprise d'autres pouvoirs sur votre esprit. Vous devenez maître en jets de Volonté. Lorsque vous obtenez un succès sur un jet de Volonté, il devient un succès critique."
                ],
                "level": 7
            },
            "vigueur_magique": {
                "name": "Vigueur magique",
                "description": [
                    "La puissance magique a amélioré la résilience de votre corps. Vous devenez expert en jets de Vigueur."
                ],
                "level": 9
            },
            "acces_divin": {
                "name": "Accès divin",
                "description": [
                    "Votre mystère vous offre un accès étrange à des sorts typiquement réservés à des fidèles plus conventionnels. Choisissez une divinité qui accorde l'un des domaines accordés par votre mystère. Ajoutez jusqu'à trois sorts de prêtre de votre choix accordés par cette divinité à votre liste de sorts. Ajoutez-les à votre répertoire de sorts dès que vous pouvez lancer des sorts du rang approprié."
                ],
                "level": 11
            },
            "expertise_avec_les_armes": {
                "name": "Expertise avec les armes",
                "description": [
                    "Vous vous consacrez à l'apprentissage approfondi des subtilités de vos armes. Vous devenez expert avec les armes simples et les attaques à mains nues."
                ],
                "level": 11
            },
            "malediction_majeure": {
                "name": "Malédiction majeure",
                "description": [
                    "Vous avez appris à mieux équilibrer les puissances opposées qui dévastent votre corps. La valeur maximale de votre état <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'zXZjC8HLaRoLR17U'})\">Lié à la malédiction</div> passe de Lié à la malédiction 2 à Lié à la malédiction 3."
                ],
                "level": 11
            },
            "sens_oraculaires": {
                "name": "Sens oraculaires",
                "description": [
                    "Vous avez toujours été capable de percevoir un peu plus que les autres. Vous devenez expert en Perception."
                ],
                "level": 11
            },
            "expertise_avec_les_armure_legeres": {
                "name": "Expertise avec les armure légères",
                "description": [
                    "Vous avez appris à mieux esquiver en ne portant pas d'armure ou une armure légère. Votre degré de maîtrise avec les armures légères et en défense sans armure passe à expert."
                ],
                "level": 13
            },
            "reflexes_premonitoires": {
                "name": "Réflexes prémonitoires",
                "description": [
                    "Un frisson vous parcourt l'échine avant que le danger ne frappe, vous donnant un tout petit peu plus de temps pour esquiver ou vous mettre à l'abri. Vous devenez expert en jets de Réflexes."
                ],
                "level": 13
            },
            "specialisation_martiale": {
                "name": "Spécialisation martiale",
                "description": [
                    "Vous avez appris à infliger des blessures plus importantes avec les armes que vous connaissez le mieux. Vous infligez 2 dégâts supplémentaires avec les armes et les attaques à mains nues avec lesquelles vous êtes expert. Ces dégâts passent à 3 si vous êtes maître et à 4 si vous êtes légendaire."
                ],
                "level": 13
            },
            "incantateur_maitre": {
                "name": "Incantateur maître",
                "description": [
                    "Vous comprenez vraiment la profondeur et la complexité du pouvoir divin de votre mystère. Vous devenez maître en modificateur d'attaque de sorts et en DD de sort."
                ],
                "level": 15
            },
            "malediction_extreme": {
                "name": "Malédiction extrême",
                "description": [
                    "Vous avez maîtrisé un équilibre précaire entre les pouvoirs divins opposés de votre mystère, ce qui vous permet de tolérer un niveau périlleux de malédiction divine. La valeur maximale de votre état <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'zXZjC8HLaRoLR17U'})\">Lié à la malédiction</div> passe de Lié à la malédiction 3 à Lié à la malédiction 4."
                ],
                "level": 17
            },
            "resolution_mysterieuse_superieure": {
                "name": "Résolution mystérieuse supérieure",
                "description": [
                    "Le temps que vous avez passé à contempler les mystères de la création vous a donné un esprit et une âme puissants. Vous devenez légendaire en jets de Volonté. Lorsque vous obtenez un succès sur un jet de Volonté, il devient un succès critique. Lorsque vous obtenez un échec critique sur un jet de Volonté, vous bénéficiez d'un échec. Lorsque vous obtenez un échec sur un jet de Volonté contre un effet dommageable, vous ne subissez que la moitié des dégâts."
                ],
                "level": 17
            },
            "clarte_oraculaire": {
                "name": "Clarté oraculaire",
                "description": [
                    "Vous comprenez désormais complètement la nature des puissances divines liées à votre mystère, ce qui vous permet de produire des effets magiques similaires à des miracles. Ajoutez deux sorts divins courants de rang 10 à votre répertoire. Vous obtenez un unique emplacement de sort de rang 10 que vous pouvez utiliser pour lancer l'un de ces deux sorts via votre capacité de lancement de sorts d'oracle.",
                    "Contrairement aux autres emplacements de sorts, vous ne gagnez pas plus de sorts de rang 10 en gagnant des niveaux et vous ne pouvez pas utiliser ces emplacements de sorts de rang 10 avec des capacités qui vous donnent plus d'emplacements de sorts ou qui vous permettent de lancer des sorts sans dépenser d'emplacement de sorts. Vous pouvez prendre le don <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'PExiZZTSP4p7TZaW'})\">Providence oraculaire</div> pour obtenir un second emplacement."
                ],
                "level": 19
            },
            "incantateur_legendaire": {
                "name": "Incantateur légendaire",
                "description": [
                    "Vous pouvez exploiter le pouvoir divin à un niveau que peu d'autres peuvent atteindre. Vous devenez légendaire en modificateur d'attaque de sorts et en DD de sorts.",
                    "Choisissez le mystère divin qui alimente votre puissance mystique. Votre mystère peut représenter une dévotion panthéiste à toutes les divinités ayant un pouvoir sur le sujet de votre mystère, la vénération d'un idéal particulier ou un conduit vers l'énergie divine brute. Quelles que soient son origine et sa nature, votre mystère détermine les sorts de révélation que vous pouvez lancer et la malédiction oraculaire qui s'empare de votre corps. Vous apprenez des compétences liées à ce mystère, accédez à un tour de magie et bénéficiez d'un avantage spécial tiré de la combinaison des connaissances et expériences divines de votre mystère"
                ],
                "level": 19
            }
        }
    },
    {
        "name": "Prêtre",
        "key": "pretre",
        "general_desc": "Les divinités exercent leur volonté sur le monde de manières infinies et vous êtes l'un de leurs plus fidèles serviteurs mortels. Béni par la magie divine, vous vivez les idéaux de votre foi, vous vous parez des symboles de votre église et vous vous entraînez assidûment à manier l'arme de prédilection de votre divinité. Vos sorts peuvent protéger et guérir vos alliés ou punir les ennemis de votre foi, selon la volonté de votre divinité. Vous menez une vie de dévotion, diffusant les enseignements de votre foi par la parole comme par l'action.",
        "characteristics_bonus": {
            "number": 1,
            "choice": [
                "SAG"
            ]
        },
        "life_point_by_level": 8,
        "desc_fight": "Si vous êtes un prêtre combattant, vous balancez entre incantations de sorts et attaques avec les armes, le plus souvent avec l'arme de prédilection de votre divinité. Si vous êtes un prêtre cloîtré, vous privilégiez l'incantation de sorts. La plupart de vos sorts stimulent, protègent ou soignent vos alliés. En fonction de votre divinité, vous obtenez des sorts supplémentaires pour soigner vos alliés ou blesser vos ennemis.",
        "desc_socially": "Vous pourriez faire des propositions diplomatiques ou des discours marquants. Grâce à votre sagesse élevée, vous sentez aussi lorsque les autres manquent de franchise.",
        "desc_exploration": "Vous détectez la magie à proximité et interprétez les écrits religieux que vous découvrez. Vous pourriez aussi vous concentrer sur un sort qui protège vos alliés en cas d'attaque. Après un combat ou un danger, vous pourriez soigner tous ceux qui ont été blessés.",
        "desc_interlude": "Vous pourriez mener des offices dans un temple, voyager pour répandre la parole de votre divinité, étudier des écrits sacrés, célébrer les jours saints, voire même fonder un nouveau temple.",
        "desc_you_could": [
            "Visiter les temples et les sites sacrés de votre religion et avoir une affinité immédiate avec les autres fidèles de votre divinité.",
            "Connaitre les enseignements des textes sacrés de votre religion et savoir comment les appliquer à un dilemme.",
            "Coopérer avec vos alliés, à condition qu'ils ne vous demandent pas d'agir contre la volonté de votre divinité."
        ],
        "desc_probably_others": [
            "Trouvent votre dévotion impressionnante, même s'ils ne la comprennent pas.",
            "S'attendent à ce que vous soigniez leurs blessures.",
            "Comptent sur vous pour que vous interagissiez avec les autres individus religieux."
        ],
        "mastery": {
            "perception": "Q",
            "saves": [
                {
                    "level": "Q",
                    "description": "Qualifié en Vigueur"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en Réflexes"
                },
                {
                    "level": "E",
                    "description": "Expert en Volonté"
                }
            ],
            "skills": [
                {
                    "level": "Q",
                    "description": "Qualifié en Religion"
                },
                {
                    "level": "Q",
                    "description": "Qualifié dans une compétence déterminée par la divinité que vous avez choisie"
                },
                {
                    "level": "Q",
                    "description": "Qualifié dans un nombre de compétences supplémentaires égal à 2 plus votre modificateur d'Intelligence"
                }
            ],
            "attacks": [
                {
                    "level": "Q",
                    "description": "Qualifié avec les attaques à mains nues"
                },
                {
                    "level": "Q",
                    "description": "Qualifié avec les armes simples"
                },
                {
                    "level": "Q",
                    "description": "Qualifié avec l'arme de prédilection de votre divinité. Si l'arme de prédilection de votre divinité est peu courante, vous obtenez l'accès à cette arme"
                }
            ],
            "defenses": [
                {
                    "level": "I",
                    "description": "Inexpérimenté avec toutes les armures, bien que votre doctrine puisse modifier cela"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en défense sans armure"
                }
            ],
            "spells": [
                {
                    "level": "Q",
                    "description": "Qualifié en modificateur d'attaques de sort"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en DD de sorts"
                }
            ],
            "class_dc": null,
            "rarity": null
        },
        "capacity_by_level": [
            "divinité, doctrine, incantation de prêtre, maîtrises initiales, primes d'attribut, source divine",
            "Don de compétence, don de prêtre",
            "Amélioration de compétence, deuxième doctrine, don général, sorts de rang 2",
            "Don de compétence, don de prêtre",
            "Amélioration de compétence, don ancestral, primes d'attributs, sorts de rang 3",
            "Don de compétence, don de prêtre",
            "Amélioration de compétence, don général, sorts de rang 4, troisième doctrine",
            "Don de compétence, don de prêtre",
            "Amélioration de compétence, don ancestral, expertise en perception, foi résolue, sorts de rang 5",
            "Don de compétence, don de prêtre, primes d'attributs",
            "Amélioration de compétence, don général, expertise en réflexes, quatrième doctrine, sorts de rang 6",
            "Don de compétence, don de prêtre",
            "Amélioration de compétence, défense divine, don ancestral, sorts de rang 7, spécialisation martiale",
            "Don de compétence, don de prêtre",
            "Amélioration de compétence, cinquième doctrine, don général, primes d'attributs, sorts de rang 8",
            "Don de compétence, don de prêtre",
            "Amélioration de compétence, don ancestral, sorts de rang 9",
            "Don de compétence, don de prêtre",
            "Amélioration de compétence, dernière doctrine, don général, sort miraculeux,",
            "Don de compétence, don de prêtre, primes d'attributs"
        ],
        "abilities": {
            "divinite": {
                "name": "Divinité",
                "description": [
                    "En tant que prêtre, vous êtes le serviteur mortel d'une divinité que vous vénérez plus que toutes les autres. Votre divinité vous accorde la maîtrise qualifiée dans une compétence et avec l'arme de prédilection de votre divinité. Si l'arme de prédilection de votre divinité n'est pas courante, vous obtenez également accès à cette arme.",
                    "Votre divinité ajoute également des sorts à votre liste de sorts. Vous pouvez les préparer comme n'importe quel autre sort de votre liste de sorts divins dès que vous pouvez préparer des sorts de ce rang en tant que prêtre. Tout sort qui ne fait pas normalement partie de la liste des sorts divins reste un sort divin si vous le préparez de cette manière."
                ]
            },
            "sanctification": {
                "name": "Sanctification",
                "description": [
                    "En fonction votre divinité, sa sanctification peut vous rendre saint ou impie. Cela vous donne le trait saint ou impie, qui vous range d'un côté d'un conflit pour les âmes des plans et peut être référencé dans d'autres capacités. Si vous \"pouvez être\" saint ou impie en fonction de votre divinité, vous faites ce choix et, si vous \"devez\" être saint ou impie, vous obtenez automatiquement le trait. Si vous obtenez le trait opposé d'une manière ou d'une autre, vous perdez le trait précédent jusqu'à ce que vous accomplissiez un rituel de Pénitence."
                ]
            },
            "anatheme": {
                "name": "Anathème",
                "description": [
                    "Commettre des actes fondamentalement opposés aux idéaux de votre divinité sont des anathèmes à votre foi. Apprendre ou lancer des sorts, commettre des actes et utiliser des objets qui sont anathèmes à votre divinité vous retirent des bonnes grâces de votre divinité.",
                    "Lancer des sorts avec le trait impie est presque toujours anathème pour les divinités qui n'autorisent pas une sanctification impie et lancer des sorts saint est quelque fois anathèmes à ceux qui n'autorisent pas la sanctification sainte. De manière similaire, lancer des sorts qui sont anathèmes aux principes ou buts de votre foi pourraient interférer avec le lien que vous entretenez avec votre divinité. Par exemple, lancer un sort pour créer un mort-vivant serait anathème pour Pharasma, la déesse de la mort. Beaucoup d'actions qui sont anathèmes n'apparaissent pas dans la liste formelle d'une divinité. Pour les cas limites, vous et votre MJ déterminez quels actes sont anathèmes.",
                    "Si vous accomplissez suffisamment d'actes qui sont anathèmes pour votre divinité, vous perdez les capacités magiques qui viennent de votre lien avec votre divinité. Les capacités de classe que vous perdez sont déterminées par le MJ, mais ils incluent notamment votre source divine et toutes les incantations de prêtre. Ces capacités peuvent être regagnées seulement si vous vous repentez en conduisant un rituel de Pénitence."
                ]
            },
            "doctrine": {
                "name": "Doctrine",
                "description": [
                    "Même parmi les fidèles d'une même divinité, les approches varient. Au niveau 1, vous choisissez entre Prêtre cloîtré ou prêtre combattant et vous obtenez les avantages de sa première doctrine. Aux niveaux 3, puis tous les 4 niveaux par la suite, vous obtenez un autre avantage de votre doctrine.",
                    "Voici les différentes doctrines :",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'ZZzLMOUAtBVgV1DF'})\">Prêtre cloîtré</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '0Aocw3igLwna9cjp'})\">Prêtre combattant</div> ."
                ]
            },
            "pretre_cloitre": {
                "name": "Prêtre cloîtré",
                "description": [
                    "Vous êtes un prêtre du clergé qui se concentre sur la magie divine et votre lien dans les domaines de votre divinité.",
                    "Première doctrine (1er) vous obtenez le don de prêtre <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'hT4INKGtly4QY8KN'})\">Initié du domaine</div> .",
                    "Deuxième doctrine (3e) Vous devenez expert en jets de Vigueur.",
                    "Troisième doctrine (7e) Votre degré de maîtrise pour le modificateur d'attaque de sort et les statistiques du DD passe à expert.",
                    "Quatrième doctrine (11e) vous devenez expert avec l'arme de prédilection de votre divinité, les armes simples et les attaques à mains nues. Quand vous obtenez un coup critique sur un jet d'attaque en utilisant l'arme de prédilection de votre divinité, vous appliquez l'effet critique spécialisé de l'arme ; vous pouvez utiliser le DD de vos sorts au lieu de votre DD de classe.",
                    "Cinquième doctrine Votre degré de maîtrise pour le modificateur d'attaque de sort et les statistiques du DD passe à maître.",
                    "Dernière doctrine Votre degré de maîtrise pour le modificateur d'attaque de sort et les statistiques du DD passe à légendaire."
                ]
            },
            "pretre_combattant": {
                "name": "Prêtre combattant",
                "description": [
                    "Vous vous êtes entraîné auprès de la doctrine la plus militante de votre église, vous concentrant à la fois sur les sorts et le combat.",
                    "Première doctrine (1er) vous êtes qualifié avec les armures légères et intermédiaires et vous êtes expert en jets de Vigueur. Vous obtenez le don général <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'jM72TjJ965jocBV8'})\">Blocage au bouclier</div> , une réaction pour réduire les dégâts avec un bouclier. Si l'arme de prédilection de votre divinité est simple ou une attaque à mains nues, vous obtenez le don de prêtre <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'DfLkIIg2reyYW3a8'})\">Simplicité mortelle</div> . Au niveau 13, si vous obtenez la capacité de classe <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '0mJTp4LdEHBLInoe'})\">Défense divine</div> , vous devenez aussi expert avec les armures légères et intermédiaires.",
                    "Deuxième doctrine (3e) vous êtes qualifié avec les armes de guerre.",
                    "Troisième doctrine (7e) vous devenez expert avec les attaques à mains nues, les armes simples et l'arme de prédilection de votre divinité. Quand vous obtenez un coup critique sur un jet d'attaque en maniant cette dernière, vous appliquez l'effet critique spécialisé de l'arme ; Vous pouvez utiliser le DD de vos sorts au lieu de votre DD de classe.",
                    "Quatrième doctrine (11e) votre degré de maîtrise en modificateur d'attaque de sort et en statistiques de DD passe à expert.",
                    "Cinquième doctrine (15e) votre degré de maîtrise en jets de Vigueur passe à maître. Quand vous obtenez un succès sur un jet de Vigueur, il devient un succès critique.",
                    "Dernière doctrine (19e) Votre degré de maîtrise avec l'arme de prédilection de votre divinté, le modificateur d'attaque de sorts et en DD de sorts passe à maître."
                ]
            },
            "incantation_de_pretre": {
                "name": "Incantation de prêtre",
                "description": [
                    "Votre divinité vous accorde le pouvoir de lancer des sorts divins. Vous êtes un lanceur de sorts et vous pouvez lancer des sorts de la tradition divine en utilisant l'activité Lancer un sort. En tant que prêtre, vos chants invoquent généralement votre divinité et ses puissants serviteurs par leur nom ou leur titre, alors que vos gestes sont suivis par des symboles sacrés ou d'autres représentations de votre divinité.",
                    "Au niveau 1, vous pouvez préparer chaque matin deux sorts de rang 1 et cinq tours de magie que vous choisissez parmi les sorts courants de la liste des sorts divins du livre du joueur ou issus des autres sorts divins auxquels vous avez accès et avez appris par l'activité Apprendre un sort. Les sorts préparés vous restent disponibles jusqu'à ce que vous les lanciez ou jusqu'à ce que vous prépariez vos sorts de nouveau. Le nombre de sorts que vous pouvez préparer chaque jour s'appelle vos emplacements de sorts.",
                    "Lorsque vous gagnez un niveau de prêtre, le nombre de sorts que vous pouvez préparer chaque jour augmente, tout comme le plus haut rang du sort que vous pouvez lancer, comme indiqué dans le tableau des sorts de prêtre quotidiens.",
                    "Certains de vos sorts nécessitent que vous fassiez une attaque de sort pour déterminer leur efficacité ou obligent vos ennemis à faire un jet contre le DD de votre sort (en général un jet de sauvegarde). Comme votre attribut essentiel est la Sagesse, votre modificateur d'attaque de sort et le DD de sorts utilisent votre modificateur de Sagesse."
                ]
            },
            "intensification_de_sorts": {
                "name": "Intensification de sorts",
                "description": [
                    "Lorsque vous obtenez des emplacements de sorts de rang 2 et supérieur, vous pouvez remplir ces emplacements avec des versions plus puissantes de sorts de rang inférieur. Ceci augmente le rang du sort, l'intensifiant pour correspondre à l'emplacement du sort. Nombre de sorts possèdent des améliorations spécifiques lorsqu'ils sont intensifiés à certains rangs."
                ]
            },
            "tours_de_magie": {
                "name": "Tours de magie",
                "description": [
                    "Certains de vos sorts sont des tours de magie. Un tour de magie est un type spécifique de sort qui n'utilise pas d'emplacement de sort. Vous pouvez lancer un tour de magie à volonté, n'importe quel nombre de fois par jour. Un tour de magie est toujours intensifié automatiquement à la moitié de votre niveau arrondi au supérieur — c'est habituellement égal au plus haut rang de vos emplacements de sorts de prêtre que vous possédez. Par exemple, en tant que prêtre de niveau 1, vos tours de magie sont de rang 1 et en tant que prêtre de niveau 5, vos tours de magie sont des sorts de rang 3."
                ]
            },
            "source_divine": {
                "name": "Source divine",
                "description": [
                    "Par la bénédiction que vous accorde votre divinité, vous obtenez des sorts supplémentaires qui canalisent soit la force de vie appelée vitalité, soit son opposé, le vide. Quand vous préparez vos sorts chaque jour, vous pouvez préparer des sorts <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'rfZpqmj0AIIdkVIs'})\">Guérison</div> ou <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'wdA52JJnsuQWeyqz'})\">Mise à mal</div> supplémentaires, en fonction de votre divinité. Le sort de source divine que votre divinité vous accorde est indiqué dans l'entrée Source divine de votre divinité. Si les deux sont indiqués, vous pouvez choisir entre Guérison ou Mise à mal. Une fois que vous avez choisi, vous ne pouvez plus changer votre choix sauf en cas d'intervention divine.",
                    "Source de guérison Chaque jour, vous obtenez 4 emplacements de sort supplémentaires du rang le plus élevé des emplacements de vos sorts. Vous ne pouvez préparer que des sorts de Guérison dans ces emplacements. Au niveau 5, le nombre des emplacements de sorts supplémentaires passe à 5 et au niveau 15, le nombre total d'emplacements de sorts supplémentaires passe à 6.",
                    "Source de mise à mal Chaque jour, vous obtenez 4 emplacements de sort supplémentaires du rang le plus élevé des emplacements de vos sorts. Vous ne pouvez préparer que des sorts de Mise à mal dans ces emplacements. Au niveau 5, le nombre des emplacements de sorts supplémentaires passe à 5 et au niveau 15, le nombre total d'emplacements de sorts supplémentaires passe à 6."
                ]
            },
            "dons_de_competences": {
                "name": "Dons de compétences",
                "description": [
                    "Au niveau 2, puis tous les deux niveaux, vous obtenez un don de compétence. Ces dons disposent du trait compétence. Pour choisir un don de compétence, vous devez être au moins qualifié dans la compétence correspondante."
                ],
                "level": 2
            },
            "dons_de_pretre": {
                "name": "Dons de prêtre",
                "description": [
                    "Au niveau 2, puis tous les deux niveaux, vous obtenez un don de classe de prêtre."
                ],
                "level": 2
            },
            "ameliorations_de_competence": {
                "name": "Améliorations de compétence",
                "description": [
                    "Au niveau 3, puis tous les 2 niveaux, vous obtenez une amélioration de compétence. Vous pouvez utiliser cette amélioration pour devenir qualifié dans une compétence dans laquelle vous êtes inexpérimenté ou pour devenir expert dans une compétence dans laquelle vous êtes déjà qualifié.",
                    "Vous pouvez utiliser les améliorations de compétence que vous obtenez au niveau 7 ou supérieur pour devenir maître dans une compétence dans laquelle vous êtes expert et les améliorations de compétence que vous obtenez au niveau 15 ou supérieur pour devenir légendaire dans une compétence dans laquelle vous êtes maître."
                ],
                "level": 3
            },
            "dons_generaux": {
                "name": "Dons généraux",
                "description": [
                    "Au niveau 3, puis tous les 4 niveaux, vous obtenez un don général."
                ],
                "level": 3
            },
            "dons_ancestraux": {
                "name": "Dons ancestraux",
                "description": [
                    "En plus de celui avec lequel vous avez débuté, vous obtenez un don ancestral au niveau 5 puis tous les quatre niveaux."
                ],
                "level": 5
            },
            "expertise_en_perception": {
                "name": "Expertise en perception",
                "description": [
                    "Vous restez à l'affût des menaces qui vous entourent. Vous devenez expert en Perception."
                ],
                "level": 5
            },
            "primes_d_attributs": {
                "name": "Primes d'attributs",
                "description": [
                    "Au niveau 5, puis tous les 5 niveaux, vous améliorez quatre scores d'attributs différents. Vous pouvez utiliser ces primes d'attributs pour faire passer la valeur d'un score d'attribut au-dessus de +4. La prime augmente la valeur du score d'attribut de +1/2 s'il est supérieur ou égal à +4 ou de +1 s'il est inférieur à +3."
                ],
                "level": 5
            },
            "foi_resolue": {
                "name": "Foi résolue",
                "description": [
                    "La croyance fournit un rempart contre les pensées insidieuses. Votre degré de maîtrise pour les jets de Volonté passe à maître. Lorsque vous obtenez un succès sur un jet de Volonté, il devient un succès critique."
                ],
                "level": 9
            },
            "expertise_en_reflexes": {
                "name": "Expertise en réflexes",
                "description": [
                    "Vous avez développé un talent pour esquiver le danger. Vous devenez expert en jets de Réflexes.",
                    "Gardien Même dans la plus encombrante des armures, vous pouvez vous prémunir contre les effets répandus. Vous devenez expert en jets de Réflexes."
                ],
                "level": 11
            },
            "defense_divine": {
                "name": "Défense divine",
                "description": [
                    "Votre entraînement et votre divinité vous protègent contre les coups. Votre degré de maîtrise pour la défense sans armure passe à expert."
                ],
                "level": 13
            },
            "specialisation_martiale": {
                "name": "Spécialisation martiale",
                "description": [
                    "Vous avez appris à infliger des blessures plus importantes avec les armes que vous connaissez le mieux. Vous infligez 2 dégâts supplémentaires avec les armes et les attaques à mains nues avec lesquelles vous êtes expert. Ces dégâts passent à 3 si vous êtes maître et à 4 si vous êtes légendaire."
                ],
                "level": 13
            },
            "sort_miraculeux": {
                "name": "Sort miraculeux",
                "description": [
                    "Vous êtes élevé par votre divinité et obtenez des sorts véritablement incroyables. Vous obtenez un seul emplacement de sort de rang 10 et pouvez préparer un sort dans cet emplacement en utilisant l'incantation de prêtre. Contrairement aux autres emplacements de sorts, vous ne pouvez pas utiliser les emplacements de rang 10 avec des capacités qui vous donnent plus d'emplacements de sorts ou qui vous permettent de lancer des sorts sans dépenser d'emplacements de sorts. Vous n'obtenez pas plus d'emplacements de niveau 10 en gagnant un niveau mais vous pouvez prendre le don <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'QDjpZKOrWIV1G8XJ'})\">Faiseur de miracles</div> pour obtenir un second emplacement."
                ],
                "level": 19
            }
        }
    },
    {
        "name": "Rôdeur",
        "key": "rodeur",
        "general_desc": "Certains rôdeurs croient que la civilisation abîme l'âme mais qu'il y a toujours besoin de la protéger des créatures sauvages. D'autres disent que la nature a besoin d'être protégée des gens avides qui souhaitent s'accaparer ses beautés et piller ses trésors. Vous pourriez soutenir l'une de ces causes, voire les deux. Vous pourriez être un éclaireur, un pisteur ou un chasseur de fugitifs ou de bêtes qui hante la périphérie de la civilisation ou explore les contrées sauvages. Vous savez comment vivre de la nature et vous êtes particulièrement talentueux pour repérer et abattre des proies opportunes et des ennemis haïs.",
        "characteristics_bonus": {
            "number": 1,
            "choice": [
                "FOR",
                "DEX"
            ]
        },
        "life_point_by_level": 10,
        "desc_fight": "Vous pouvez chasser des ennemis particuliers, ce qui vous permet de mieux les vaincre. Vous ciblez et brutalisez l'ennemi choisi avec un arc ou des armes de corps-à-corps, tout en soutenant vos alliés avec vos compétences.",
        "desc_socially": "Quand vous prenez la parole, c'est avec la voix de l'expérience du terrain et du pragmatisme, en particulier en matière d'exploration en milieu sauvage..",
        "desc_exploration": "Vous guidez vos alliés à travers les étendues sauvages ou suivez des traces. Vous gardez toujours l'œil ouvert, constamment à l'affût du danger, même lorsqu'il n'est pas pas manifeste.",
        "desc_interlude": "Vous fabriquez des armes et dressez des animaux pour préparer votre prochaine aventure. Si vous préférez rester en pleine nature, vous pourriez partir à la chasse ou patrouiller les environs pour mieux comprendre votre environnement.",
        "desc_you_could": [
            "Respecter la puissance brute de la nature et comprendre comment tirer le meilleur parti de ses bienfaits.",
            "Apprécier le frisson de la chasse.",
            "Partir en éclaireur devant votre groupe pour reconnaître les dangers avant que le combat ne débute."
        ],
        "desc_probably_others": [
            "Comptent sur vous pour les protéger des dangers de la nature ou de l'empiétement de la civilisation.",
            "S'attendent à ce que vous soyez un solitaire calme ou taciturne.",
            "Pensent qu'il y a quelque chose de dangereux et de sauvage en vous."
        ],
        "mastery": {
            "perception": "E",
            "saves": [
                {
                    "level": "E",
                    "description": "Expert en Vigueur"
                },
                {
                    "level": "E",
                    "description": "Expert en Réflexes"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en Volonté"
                }
            ],
            "skills": [
                {
                    "level": "Q",
                    "description": "Qualifié en Nature"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en Survie"
                },
                {
                    "level": "Q",
                    "description": "Qualifié dans un nombre de compétences supplémentaires égal à 4 plus votre modificateur d'Intelligence."
                }
            ],
            "attacks": [
                {
                    "level": "Q",
                    "description": "Qualifié en attaques à mains nues"
                },
                {
                    "level": "Q",
                    "description": "Qualifié avec les armes simples"
                },
                {
                    "level": "Q",
                    "description": "Qualifié avec les armes de guerre"
                }
            ],
            "defenses": [
                {
                    "level": "Q",
                    "description": "Qualifié avec les armures légères"
                },
                {
                    "level": "Q",
                    "description": "Qualifié avec les armures intermédiaires"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en défense sans armure"
                }
            ],
            "spells": null,
            "class_dc": "Q",
            "rarity": null
        },
        "capacity_by_level": [
            "chasser une proie, don de rôdeur, maîtrises initiales, spécialité du chasseur",
            "Don de compétence, don de rôdeur",
            "Amélioration de compétence, don général, expertise en volonté",
            "Don de compétence, don de rôdeur",
            "Amélioration de compétence, don ancestral, expertise avec les armes de rôdeur, parcours sans trace, primes d'attributs",
            "Don de compétence, don de rôdeur",
            "Amélioration de compétence, don général, maîtrise en perception, réflexes naturels, spécialisation martiale",
            "Don de compétence, don de rôdeur",
            "Amélioration de compétence, avantage naturel, don ancestral, expertise du rôdeur",
            "Don de compétence, don de rôdeur, primes d'attributs",
            "Amélioration de compétence, don général, expertise avec les armures intermédiaires, endurance du gardien, parcours sans obstacle",
            "Don de compétence, don de rôdeur",
            "Amélioration de compétence, don ancestral, maîtrise des armes de guerre",
            "Don de compétence, don de rôdeur",
            "Amélioration de compétence, don général, légendaire en perception, primes d'attributs, réflexes naturels supérieurs, spécialisation martiale supérieure",
            "Don de compétence, don de rôdeur",
            "Amélioration de compétence, don ancestral, maître chasseur",
            "Don de compétence, don de rôdeur",
            "Amélioration de compétence, don général, maîtrise des armures intermédiaires, proie rapide",
            "Don de compétence, don de rôdeur, primes d'attributs"
        ],
        "abilities": {
            "chasser_une_proie": {
                "name": "Chasser une proie",
                "description": [
                    "Quand vous concentrez votre attention sur un unique adversaire, plus rien ne peut vous empêcher de le traquer. Vous obtenez l'action <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'JYi4MnsdFu618hPm'})\">Chasser une proie</div> ."
                ]
            },
            "div_class_gs_link_information_onclick_controller_main_doactionafter_event_show_information_param_information_uuid_jyi4mnsdfu618hpm_chasser_une_proie_div_1": {
                "name": "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'JYi4MnsdFu618hPm'})\">Chasser une proie</div> 1",
                "description": [
                    "Vous désignez une unique créature qui devient votre proie et vous concentrez vos attaques sur celle-ci. Vous devez voir ou entendre la proie ou vous devez être en train de la pister pendant l'exploration.",
                    "Vous bénéficiez d'un bonus de circonstances de +2 aux tests de Perception quand vous <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'BlAOM2X92SI6HMtJ'})\">Cherchez</div> votre proie et aux tests de Survie quand vous la <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'EA5vuSgJfiHH7plD'})\">Pistez</div> . Vous ignorez également la pénalité si la proie que vous chassez se trouve dans le deuxième facteur de portée de votre arme à distance.",
                    "Vous ne pouvez désigner qu'une créature comme proie à la fois. Si vous utilisez Chasser une proie pour désigner une autre créature alors que vous avez déjà une créature désignée comme proie, la précédente est remplacée par la dernière qui devient votre nouvelle proie. Cette désignation dure jusqu'à vos prochains préparatifs quotidiens."
                ]
            },
            "dons_de_rodeur": {
                "name": "Dons de rôdeur",
                "description": [
                    "Au niveau 1, puis tous les niveaux pairs, vous obtenez un don de classe de rôdeur."
                ]
            },
            "specialite_du_chasseur": {
                "name": "Spécialité du chasseur",
                "description": [
                    "Vous vous êtes entraîné à devenir un chasseur et un pisteur expérimenté, en obtenant un avantage supplémentaire lorsque vous Chassez une proie, en fonction de la spécialité à laquelle vous vous êtes entraîné. Choisissez une spécialité de chasseur.",
                    "Choisissez une des spécialités du chasseur suivantes :",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '6v4Rj7wWfOH1882r'})\">Déluge</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'u6cBjqz2fiRBadBt'})\">Précision</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'NBHyoTrI8q62uDsU'})\">Ruse</div>"
                ]
            },
            "dons_de_competence": {
                "name": "Dons de compétence",
                "description": [
                    "Au niveau 2, puis tous les deux niveaux, vous obtenez un don de compétence. Pour choisir un don de compétence, vous devez être au moins qualifié dans la compétence correspondante."
                ],
                "level": 2
            },
            "dons_generaux": {
                "name": "Dons généraux",
                "description": [
                    "Au niveau 3, puis tous les 4 niveaux, vous obtenez un don général."
                ],
                "level": 3
            },
            "ameliorations_de_competence": {
                "name": "Améliorations de compétence",
                "description": [
                    "Au niveau 3, puis tous les 2 niveaux, vous obtenez une amélioration de compétence. Vous pouvez utiliser cette amélioration pour augmenter votre degré de maîtrise et devenir qualifié dans une compétence dans laquelle vous étiez inexpérimenté ou pour améliorer votre rang dans une compétence dans laquelle vous êtes déjà qualifié pour devenir expert.",
                    "À partir du niveau 7, vous pouvez utiliser l'amélioration de compétence pour devenir maître dans une compétence dans laquelle vous êtes déjà expert et à partir du niveau 15, vous pouvez l'utiliser pour devenir légendaire dans une compétence dans laquelle vous êtes déjà maître."
                ],
                "level": 3
            },
            "expertise_en_volonte": {
                "name": "Expertise en volonté",
                "description": [
                    "Vos défenses mentales deviennent plus fortes. votre degré de maîtrise pour les jets de Volonté passe à expert."
                ],
                "level": 3
            },
            "dons_ancestraux": {
                "name": "Dons ancestraux",
                "description": [
                    "En plus de celui avec lequel vous avez commencé, vous obtenez un don ancestral au niveau 5 puis tous les 4 niveaux."
                ],
                "level": 5
            },
            "expertise_avec_les_armes_de_rodeur": {
                "name": "Expertise avec les armes de rôdeur",
                "description": [
                    "Vous tirez tous les avantages de vos armes. Votre degré de maîtrise avec les armes simples, les armes de guerre et les attaques à mains nues passe à expert. Vous obtenez l'accès aux effets critiques spécialisés de toutes ces armes et des attaques à mains nues lorsque vous attaquez votre proie."
                ],
                "level": 5
            },
            "parcours_sans_traces": {
                "name": "Parcours sans traces",
                "description": [
                    "Lorsque vous traversez des terrains naturels, vous êtes difficile à pister. Vous obtenez en permanence des avantages de l'action <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'SB7cMECVtE06kByk'})\">Dissimuler des traces</div> sur de tels terrains, sans devoir vous déplacer à la moitié de votre Vitesse."
                ],
                "level": 5
            },
            "primes_d_attributs": {
                "name": "Primes d'attributs",
                "description": [
                    "Au niveau 5, puis tous les 5 niveaux, vous améliorez quatre scores d'attributs différents. Vous pouvez utiliser ces primes d'attributs pour faire passer la valeur d'un score d'attribut au-dessus de +4. La prime augmente la valeur du score d'attribut de +1/2 s'il est supérieur ou égal à +4 ou de +1 s'il est inférieur à +3."
                ],
                "level": 5
            },
            "reflexes_naturels": {
                "name": "Réflexes naturels",
                "description": [
                    "Vous avez affiné vos réflexes en évitant les chutes d'arbres et le pilonnement de la grêle. Votre degré de maîtrise pour les jets de Réflexes passe à maître. Lorsque vous obtenez un succès sur un jet de Réflexes, il devient un succès critique."
                ],
                "level": 7
            },
            "maitrise_en_perception": {
                "name": "Maîtrise en perception",
                "description": [
                    "Vous avez amélioré votre acuité et une attention particulière aux détails. Vous devenez maître en Perception."
                ],
                "level": 7
            },
            "specialisation_martiale": {
                "name": "Spécialisation martiale",
                "description": [
                    "Vous avez appris à infliger des blessures plus importantes avec les armes que vous connaissez le mieux. Vous infligez 2 dégâts supplémentaires avec les armes et les attaques à mains nues avec lesquelles vous êtes expert. Ces dégâts passent à 3 si vous êtes maître et à 4 si vous êtes légendaire."
                ],
                "level": 7
            },
            "avantage_naturel": {
                "name": "Avantage naturel",
                "description": [
                    "Vous trouvez toujours les points faibles dans les défenses de vos ennemis quand ils se trouvent sur un terrain défavorable. Les ennemis sont <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'AJh5ex99aV6VTggg'})\">Pris au dépourvu</div> à votre égard lorsqu'ils se trouvent sur un terrain difficile."
                ],
                "level": 9
            },
            "expertise_du_rodeur": {
                "name": "Expertise du rôdeur",
                "description": [
                    "Vous avez acquis des techniques qui améliorent votre ruse et votre habileté. Votre degré de maîtrise en DD de rôdeur passe à expert. Si vous disposez de sorts de gardien, votre degré de maîtrise pour les attaques de sort et le DD des sorts passe à expert."
                ],
                "level": 9
            },
            "endurance_du_gardien": {
                "name": "Endurance du gardien",
                "description": [
                    "Vous vous débarrassez avec la même facilité de l'emprise d'un grizzli ou des effets néfastes d'un poison. Votre degré de maîtrise pour les jets de Vigueur passe à maître. Lorsque vous obtenez un succès sur un jet de Vigueur, il devient un succès critique."
                ],
                "level": 11
            },
            "expertise_avec_les_armures_intermediaires": {
                "name": "Expertise avec les armures intermédiaires",
                "description": [
                    "Vous avez appris à vous défendre mieux contre les attaques. Vos rangs de maîtrise avec les armures légères, les armures intermédiaires et en défense sans armure passent à expert."
                ],
                "level": 11
            },
            "parcours_sans_obstacles": {
                "name": "Parcours sans obstacles",
                "description": [
                    "Vous vous déplacez rapidement à travers les obstacles, qu'il s'agisse de pierres éboulées ou de broussailles enchevêtrées. Vous pouvez ignorer les effets du terrain difficile. Comme à l'ordinaire lorsque vous ignorez le terrain difficile, cela vous permet également de traiter les obstacles d'un terrain très difficile comme ceux d'un terrain difficile."
                ],
                "level": 11
            },
            "maitrise_des_armes_de_guerre": {
                "name": "Maîtrise des armes de guerre",
                "description": [
                    "Vous comprenez pleinement vos armes. Vous êtes maître avec les armes simples, les armes de guerre et les attaques à mains nues."
                ],
                "level": 13
            },
            "specialisation_martiale_superieure": {
                "name": "Spécialisation martiale supérieure",
                "description": [
                    "Les dégâts de spécialisation martiale passent à 4 avec les armes et les attaques à mains nues avec lesquelles vous êtes expert, à 6 si vous êtes maître et à 8 si vous êtes légendaire."
                ],
                "level": 15
            },
            "reflexes_naturels_superieurs": {
                "name": "Réflexes naturels supérieurs",
                "description": [
                    "Vous évitez les explosions grace à des réflexes qu'un chat vous envierait. Vous devenez légendaire en jets de Réflexes. Lorsque vous obtenez un échec critique sur un jet de Réflexes, il devient un échec. Lorsque vous obtenez un échec sur un jet de Réflexes contre un effet qui inflige des dégâts, vous ne subissez que la moitié des dégâts."
                ],
                "level": 15
            },
            "legendaire_en_perception": {
                "name": "Légendaire en perception",
                "description": [
                    "Vous remarquez presque l'imperceptible. Vous devenez légendaire en Perception."
                ],
                "level": 15
            },
            "maitre_chasseur": {
                "name": "Maître chasseur",
                "description": [
                    "Vous avez affûté vos capacités en tant que chasseur à des niveaux incroyables. Votre degré de maîtrise en DD de classe de rôdeur passe à maître. Si vous possédez des sorts de gardien, votre degré de maîtrise en jets d'attaques de sorts et en DD de sorts passe à maître. Quand vous utilisez une arme à distance avec laquelle vous êtes maître, vous pouvez ignorer la pénalité si vous attaquez votre proie dans le deuxième ou troisième facteur de portée de votre arme.",
                    "Si vous êtes un maître en Perception, vous bénéficiez d'un bonus de circonstances de +4 aux tests de Perception quand vous <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'BlAOM2X92SI6HMtJ'})\">Cherchez</div> votre proie et si vous êtes un maître en Survie, vous bénéficiez d'un bonus de circonstances de +4 aux tests de Survie lorsque vous <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'EA5vuSgJfiHH7plD'})\">Pistez</div> votre proie. Vous bénéficiez également d'un avantage supplémentaire qui dépend de votre spécialité du chasseur.",
                    "Déluge Vous pouvez mélanger votre maîtrise martiale avec votre compétence à cibler pour porter des séries d'attaques précises. Si vous êtes maître avec votre arme, votre pénalité d'attaques multiples contre votre proie est de -2 (-1 avec une arme agile) sur votre deuxième attaque du tour et de -4 (-2 avec une arme agile) sur votre troisième et les autres attaques du tour.",
                    "Précision Votre maîtrise martiale vous permet de toucher les parties vitales de votre proie à plusieurs reprises. La seconde fois que vous touchez votre proie lors du round, vous infligez également 1d8 dégâts de précision. Au niveau 19, lorsque vous touchez pour la seconde fois en un round votre proie, vous lui infligez 2d8 dégâts de précision et la troisième fois que vous touchez lors du round votre proie, vous lui infligez également 1d8 dégâts de précision.",
                    "Ruse La maîtrise de vos compétences vous permet d'écraser votre proie. Si vous êtes maître en Discrétion, en Duperie, en intimidation ou dans la compétence que vous utilisez pour Vous souvenir à propos de votre proie, vous augmentez le bonus de circonstances contre la proie avec cette compétence de +2 à +4. Si vous êtes maître dans votre armure, vous augmentez le bonus de circonstances à la CA contre votre proie de +1 à +2."
                ],
                "level": 17
            },
            "maitrise_des_armures_intermediaires": {
                "name": "Maîtrise des armures intermédiaires",
                "description": [
                    "Votre maîtrise avec les armures légères et intermédiaires s'améliore, augmentant votre capacité à éviter les coups. Vous devenez maître avec les armures légères et intermédiaires ainsi qu'en défense sans armure."
                ],
                "level": 19
            },
            "proie_rapide": {
                "name": "Proie rapide",
                "description": [
                    "Vous jaugez votre proie d'un simple coup d'œil. Vous pouvez utiliser <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'JYi4MnsdFu618hPm'})\">Chasser une proie</div> par une action gratuite si c'est la première action de votre tour."
                ],
                "level": 19
            }
        }
    },
    {
        "name": "Roublard",
        "key": "roublard",
        "general_desc": "Vous êtes compétent et opportuniste. Grâce à votre vivacité d'esprit et à vos réactions rapides, vous tirez parti des erreurs de vos adversaires et frappez là où ça fait vraiment mal. Vous jouez un jeu dangereux, en recherchant des sensations fortes et en mettant vos compétences à l'épreuve, et vous ne vous souciez probablement pas beaucoup des lois qui se mettent en travers de votre chemin. Si le parcours de chaque roublard est unique et semé d'embûches, la seule chose que vous avez en commun est l'étendue et la qualité de vos compétences.",
        "characteristics_bonus": {
            "number": 1,
            "choice": [
                "DEX",
                "FREE"
            ]
        },
        "life_point_by_level": 8,
        "desc_fight": "Vous vous déplacez furtivement afin de surprendre vos adversaires. Vous êtes un instrument de précision, plus utile contre un boss coriace ou un lanceur de sorts éloigné que contre des soldats du rang.",
        "desc_socially": "Vos compétences vous donnent de multiples outils pour influencer vos adversaires. Tirer les ficelles et dénicher les informations, c'est une seconde nature pour vous.",
        "desc_exploration": "Vous vous faufilez pour surprendre les ennemis et repérer les dangers ou les pièges. Vous êtes un atout précieux car vous pouvez désactiver des pièges, résoudre des énigmes et anticiper les dangers.",
        "desc_interlude": "Vous pourriez faire les poches ou faire de la contrebande de marchandises illégales. Vous pouvez également intégrer une guilde de voleurs ou même fonder la vôtre.",
        "desc_you_could": [
            "Parfaire vos compétences par une pratique intense, à la fois en solitaire et sur le terrain.",
            "Savoir où vous procurer des produits illicites.",
            "contourner ou enfreindre la loi parce que vous pensez qu'elle n'a pas de sens ou appliquer votre propre code."
        ],
        "desc_probably_others": [
            "vous trouvent charmant ou fascinant, même s'ils pensent qu'il vaut mieux ne pas vous faire confiance.",
            "S'adressent à vous lorsqu'ils ont besoin de quelqu'un qui est prêt à prendre des risques ou à utiliser des méthodes discutables.",
            "Vous soupçonnent d'être motivé avant tout par l'appât du gain."
        ],
        "mastery": {
            "perception": "E",
            "saves": [
                {
                    "level": "Q",
                    "description": "Qualifié en Vigueur"
                },
                {
                    "level": "E",
                    "description": "Expert en Réflexes"
                },
                {
                    "level": "E",
                    "description": "Expert en Volonté"
                }
            ],
            "skills": [
                {
                    "level": "Q",
                    "description": "Qualifié en Discrétion"
                },
                {
                    "level": "Q",
                    "description": "Qualifié dans une compétence déterminée par votre trafic de roublard."
                },
                {
                    "level": "Q",
                    "description": "Qualifié dans un nombre de compétences supplémentaires égal à 7 plus votre modificateur d'Intelligence"
                }
            ],
            "attacks": [
                {
                    "level": "Q",
                    "description": "Qualifié en attaques à mains nues"
                },
                {
                    "level": "Q",
                    "description": "Qualifié avec les armes simples"
                },
                {
                    "level": "Q",
                    "description": "Qualifié avec les armes de guerre"
                }
            ],
            "defenses": [
                {
                    "level": "Q",
                    "description": "Qualifié en défense sans armure"
                },
                {
                    "level": "Q",
                    "description": "Qualifié avec les armures légères"
                }
            ],
            "spells": null,
            "class_dc": "Q",
            "rarity": null
        },
        "capacity_by_level": [
            "attaque sournoise 1d6, attaque surprise, don de compétence, don de roublard, maîtrises initiales, primes d'attributs, trafic de roublard",
            "Amélioration de compétence, don de compétence, don de roublard",
            "Amélioration de compétence, don de compétence, don de roublard, don général, refus d'avantage",
            "Amélioration de compétence, don de compétence, don de roublard",
            "Amélioration de compétence, astuces martiales, attaque sournoise 2d6, don ancestral, don de compétence, primes d'attributs",
            "Amélioration de compétence, don de compétence, don de roublard",
            "Amélioration de compétence, don de compétence, don général, maîtrise en perception, réflexes d'évitement, spécialisation martiale",
            "Amélioration de compétence, don de compétence, don de roublard",
            "Amélioration de compétence, don ancestral, don de compétence, frappe incapacitante, résilience du roublard",
            "Amélioration de compétence, don de compétence, don de roublard, primes d'attributs",
            "Amélioration de compétence, attaque sournoise 3d6, don de compétence, don général, expertise du roublard",
            "Amélioration de compétence, don de compétence, don de roublard",
            "Amélioration de compétence, astuces de maître, don ancestral, don de compétence, expertise avec les armures légères, légendaire en perception, réflexes du roublard améliorés",
            "Amélioration de compétence, don de compétence, don de roublard",
            "Amélioration de compétence, don de compétence, don général, double handicap, primes d'attributs, spécialisation martiale supérieure",
            "Amélioration de compétence, don de compétence, don de roublard",
            "Amélioration de compétence, attaque sournoise 4d6, don ancestral, don de compétence, esprit fuyant",
            "Amélioration de compétence, don de compétence, don de roublard",
            "Amélioration de compétence, don de compétence, don général, frappe de maître, maîtrise des armures légères",
            "Amélioration de compétence, don de compétence, don de roublard, primes d'attributs"
        ],
        "abilities": {
            "attaque_sournoise": {
                "name": "Attaque sournoise",
                "description": [
                    "Lorsque votre ennemi ne peut se défendre correctement, vous en tirez profit pour lui infliger des dégâts supplémentaires. Si vous Frappez une créature qui est <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'AJh5ex99aV6VTggg'})\">Prise au dépourvu</div> avec une arme de corps-à-corps agile ou de finesse, avec une attaque à mains nues agile ou de finesse ou avec une attaque d'arme à distance ou avec une attaque à mains nues à distance, vous lui infligez 1d6 dégâts de précision supplémentaires. Pour une attaque à distance avec une arme de corps-à-corps de jet, cette arme doit également posséder le trait agile ou finesse.",
                    "Lorsque vous gagnez des niveaux, le nombre de dés de dégâts augmente de un aux niveaux 5, 11 et 17."
                ]
            },
            "attaque_surprise": {
                "name": "Attaque surprise",
                "description": [
                    "Vous agissez avant que vos adversaires ne réagissent. Lors du premier round de combat, si vous utilisez la Duperie ou la Discrétion pour déterminer l'initiative, les créatures qui n'ont pas encore agi sont <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'AJh5ex99aV6VTggg'})\">Prises au dépourvu</div> à votre égard."
                ],
                "required": {
                    "archetypes": [
                        {
                            "id": "assassin",
                            "name": "Assassin"
                        }
                    ]
                }
            },
            "dons_de_competences": {
                "name": "Dons de compétences",
                "description": [
                    "Vous obtenez des dons de compétences plus souvent que d'autres. Au niveau 1 et à chaque niveau suivant, vous obtenez un don de compétence."
                ]
            },
            "dons_de_roublard": {
                "name": "Dons de roublard",
                "description": [
                    "Au niveau 1, puis tous les niveaux pairs, vous obtenez un don de classe de roublard."
                ]
            },
            "trafic_de_roublard": {
                "name": "Trafic de roublard",
                "description": [
                    "En vous engageant sur la voie du roublard, vous développez votre propre style grâce auquel vous mènerez vos activités illicites. Votre trafic oriente vos techniques de roublard et la manière dont vous envisagez un coup, tout en contribuant à faire reconnaître votre talent pour un certain type de missions auprès de la pègre. Ainsi, un client fortuné qui envisage un casse pourra engager une équipe de roublards aux trafics spécialisés couvrant tous les aspects de la mission. Choisissez un trafic de roublard.",
                    "Vous avez commencé à développer vos techniques et une approche du métier, en vous bâtissant une réputation parmi les cercles de roublard. Choisissez un trafic de roublard dans la liste ci-dessous.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'D8qtAo2w4jsqjBrM'})\">Mystificateur</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'ZvfxtUMtfIOLYHyg'})\">Scélérat</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'RyOkmu0W9svavuAB'})\">Stratège</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'wAh2riuFRzz0edPl'})\">Voleur</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '3KPZ7svIO6kmmEKH'})\">Voyou</div>"
                ]
            },
            "ameliorations_de_competence": {
                "name": "Améliorations de compétence",
                "description": [
                    "Vous obtenez plus d'améliorations de compétences que les membres des autres classes. Au niveau 2 et à chaque niveau suivant, vous obtenez une amélioration de compétence. Vous pouvez utiliser cette amélioration soit pour devenir qualifié dans une compétence dans laquelle vous êtes inexpérimenté, soit pour devenir expert dans une compétence dans laquelle vous êtes déjà qualifié.",
                    "À partir du niveau 7, vous pouvez utiliser l'amélioration de compétence pour devenir maître dans une compétence dans laquelle vous êtes déjà expert et à partir du niveau 15, vous pouvez l'utiliser pour devenir légendaire dans une compétence dans laquelle vous êtes déjà maître."
                ],
                "level": 2
            },
            "refus_d_avantage": {
                "name": "Refus d'avantage",
                "description": [
                    "Comme vous profitez des ouvertures dans la défense des autres, vous veillez à ne pas en laisser vous-même. Vous n'êtes pas <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'AJh5ex99aV6VTggg'})\">Pris au dépourvu</div> par les créatures qui sont <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'iU0fEDdBp3rXpTMC'})\">Cachées</div> , <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'VRSef5y1LmL2Hkjf'})\">Non détectées</div> ou qui vous prennent en tenaille si elles sont d'un niveau inférieur ou égal au vôtre, ni par les créatures d'un niveau inférieur ou égal au vôtre qui utilisent Attaque surprise. Cependant, ces créatures peuvent toujours aider leurs alliés à vous prendre en tenaille."
                ],
                "level": 3
            },
            "dons_generaux": {
                "name": "Dons généraux",
                "description": [
                    "Au niveau 3, puis tous les 4 niveaux, vous obtenez un don général."
                ],
                "level": 3
            },
            "astuces_martiales": {
                "name": "Astuces martiales",
                "description": [
                    "Votre degré de maîtrise avec les attaques à mains nues, les armes simples et les armes de guerre passe à expert. Lorsque vous obtenez un coup critique sur un jet d'attaque contre une créature <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'AJh5ex99aV6VTggg'})\">Prise au dépourvu</div> alors que vous utilisez une arme ou une attaque à mains nues ayant les traits agile ou finesse, vous appliquez l'effet critique spécialisé de l'arme ou de l'attaque à mains nues que vous maniez."
                ],
                "level": 5
            },
            "dons_ancestraux": {
                "name": "Dons ancestraux",
                "description": [
                    "En plus de celui avec lequel vous avez commencé, vous obtenez un don ancestral au niveau 5 puis tous les 4 niveaux."
                ],
                "level": 5
            },
            "primes_d_attributs": {
                "name": "Primes d'attributs",
                "description": [
                    "Au niveau 5, puis tous les 5 niveaux, vous améliorez quatre scores d'attributs différents. Vous pouvez utiliser ces primes d'attributs pour faire passer la valeur d'un score d'attribut au-dessus de +4. La prime augmente la valeur du score d'attribut de +1/2 s'il est supérieur ou égal à +4 ou de +1 s'il est inférieur à +3."
                ],
                "level": 5
            },
            "maitrise_en_perception": {
                "name": "Maîtrise en perception",
                "description": [
                    "Vous avez développé une vigilance accrue et une attention particulière aux détails. Vous devenez maître en Perception."
                ],
                "level": 7
            },
            "reflexes_d_evitement": {
                "name": "Réflexes d'évitement",
                "description": [
                    "Vous avez appris à vous déplacer rapidement pour éviter les explosions, le souffle des dragons et pire. Votre degré de maîtrise pour les jets de Réflexes passe à maître. Lorsque vous obtenez un succès sur un jet de Réflexes, il devient un succès critique."
                ],
                "level": 7
            },
            "specialisation_martiale": {
                "name": "Spécialisation martiale",
                "description": [
                    "Vous avez appris à infliger des blessures plus importantes avec les armes que vous connaissez le mieux. Vous infligez 2 dégâts supplémentaires avec les armes et les attaques à mains nues avec lesquelles vous êtes expert. Ces dégâts passent à 3 si vous êtes maître et à 4 si vous êtes légendaire."
                ],
                "level": 7
            },
            "frappe_incapacitante": {
                "name": "Frappe incapacitante",
                "description": [
                    "Quand vous profitez d'une ouverture, vous blessez et handicapez votre adversaire. Vous obtenez l'action gratuite Frappe incapacitante."
                ],
                "level": 9
            },
            "div_class_gs_link_information_onclick_controller_main_doactionafter_event_show_information_param_information_uuid_bp0up04x3dzgk5bb_frappe_incapacitante_div_f": {
                "name": "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'bp0Up04x3dzGK5bB'})\">Frappe incapacitante</div> F",
                "description": [
                    "Déclencheur Votre Frappe touche une créature Prise au dépourvu et lui inflige des dégâts.",
                    "Vous appliquez l'un des handicaps suivants qui dure jusqu'à la fin de votre prochain tour.",
                    "Handicap La cible subit une pénalité de statut de -3 mètres à ses Vitesses.",
                    "Handicap La cible devient <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'MIRkyAjyBeXivMa7'})\">Affaiblie 1</div> ."
                ]
            },
            "resilience_du_roublard": {
                "name": "Résilience du roublard",
                "description": [
                    "Votre physique est incroyablement résistant. Votre degré de maîtrise pour les jets de Vigueur passe à expert. Lorsque vous obtenez un succès sur un jet de Vigueur, il devient un succès critique."
                ],
                "level": 9
            },
            "expertise_du_roublard": {
                "name": "Expertise du roublard",
                "description": [
                    "Il est désormais plus difficile de résister à vos techniques. Votre degré de maîtrise dans le DD de classe roublard passe à expert."
                ],
                "level": 11
            },
            "astuces_de_maitre": {
                "name": "Astuces de maître",
                "description": [
                    "Vous avez maîtrisé les mouvements de combat du roublard. Vous devenez maître avec toutes les armes simples, les armes de guerre et les attaques à mains nues."
                ],
                "level": 13
            },
            "expertise_avec_les_armures_legeres": {
                "name": "Expertise avec les armures légères",
                "description": [
                    "Vous avez appris à mieux esquiver en ne portant pas d'armure ou une armure légère. Votre degré de maîtrise avec les armures légères et en défense sans armure passe à expert."
                ],
                "level": 13
            },
            "legendaire_en_perception": {
                "name": "Légendaire en perception",
                "description": [
                    "Vous remarquez presque l'imperceptible. Vous devenez légendaire en Perception."
                ],
                "level": 13
            },
            "reflexes_du_roublard_ameliores": {
                "name": "Réflexes du roublard améliorés",
                "description": [
                    "Vous éludez le danger à un degré que peu parviennent à atteindre. Votre degré de maîtrise pour les jets de Réflexes passe à légendaire. Lorsque vous obtenez un échec critique sur un jet de Réflexes, il devient un échec. Lorsque vous obtenez un échec sur un jet de Réflexes contre des effets causant des dégâts, vous ne subissez que la moitié des dégâts."
                ],
                "level": 13
            },
            "double_handicap": {
                "name": "Double handicap",
                "description": [
                    "Vos attaques opportunistes sont particulièrement préjudiciables. Quand vous utilisez <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'bp0Up04x3dzGK5bB'})\">Frappe incapacitante</div> , vous pouvez appliquer deux handicaps simultanément. Mettre un terme à l'un élimine également le second."
                ],
                "level": 15
            },
            "specialisation_martiale_superieure": {
                "name": "Spécialisation martiale supérieure",
                "description": [
                    "Les dégâts de spécialisation martiale passent à 4 avec les armes et les attaques à mains nues avec lesquelles vous êtes expert, à 6 si vous êtes maître et à 8 si vous êtes légendaire."
                ],
                "level": 15
            },
            "esprit_fuyant": {
                "name": "Esprit fuyant",
                "description": [
                    "Vous jouez à des jeux mentaux et employez des astuces cognitives pour contrer les effets altérant l'esprit. Vous êtes maître en jets de Volonté. Quand vous obtenez un succès sur un jet de Volonté, il devient un succès critique."
                ],
                "level": 17
            },
            "frappe_de_maitre": {
                "name": "Frappe de maître",
                "description": [
                    "Vous pouvez mettre hors de combat un ennemi distrait en lui assénant une unique frappe. Votre degré de maîtrise dans le DD de classe de roublard passe à maître. Vous obtenez l'action gratuite <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'Rlp7ND33yYfxiEWi'})\">Frappe de maître</div> ."
                ],
                "level": 19
            },
            "div_class_gs_link_information_onclick_controller_main_doactionafter_event_show_information_param_information_uuid_rlp7nd33yyfxiewi_frappe_de_maitre_div_f": {
                "name": "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'Rlp7ND33yYfxiEWi'})\">Frappe de maître</div> F",
                "description": [
                    "Déclencheur Vous réussissez une Frappe contre une créature <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'AJh5ex99aV6VTggg'})\">Prise au dépourvu</div> et lui infligez des dégâts.",
                    "La cible fait un jet de Vigueur contre votre DD de classe. Elle devient temporairement immunisée à votre Frappe de maître pour 1 journée.",
                    "Succès critique La cible n'est pas affectée.",
                    "Succès La cible est <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'MIRkyAjyBeXivMa7'})\">Affaiblie 2</div> jusqu'à la fin de votre prochain tour.",
                    "Échec La cible est <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '6uEgoh53GbXuHpTF'})\">Paralysée</div> pendant 4 rounds.",
                    "Échec critique La cible est Paralysée pendant 4 rounds, se trouve dans l'état <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'fBnFDH2MTzgFijKf'})\">Inconscient</div> pendant 2 heures ou est tuée (à vous de décider)."
                ]
            },
            "maitrise_des_armures_legeres": {
                "name": "Maîtrise des armures légères",
                "description": [
                    "Votre compétence avec les armures légères s'améliore, augmentant votre capacité à esquiver les coups. Vous devenez maître avec les armures légères et en défense sans armure."
                ],
                "level": 19
            }
        }
    },
    {
        "name": "Sorcier",
        "key": "sorcier",
        "general_desc": "Vous possédez de puissants magiques, non par l'étude ou la dévotion, mais en tant qu'agent d'un patron d'un autre monde que vous ne comprenez même pas entièrement. Cette entité pourrait être une divinité secrète, une puissante créature féerique, un esprit ancien ou tout autre être surnaturel puissant — mais sa nature est probablement aussi mystérieuse pour vous que pour les autres. Grâce à un familier très particulier, votre patron vous octroie des sorts diversifiés et des maléfices puissants que vous pouvez utiliser à votre guise, sans jamais vraiment être certain que cela contribuera ou non aux objectifs plus vastes de votre patron.",
        "characteristics_bonus": {
            "number": 1,
            "choice": [
                "INT"
            ]
        },
        "life_point_by_level": 6,
        "desc_fight": "Vous lancez des sorts pour modifier le cours de la bataille. Vous utilisez des maléfices magiques pour affaiblir les ennemis et venir en aide à vos alliés, tout en lançant des sorts plus puissants pour contrôler le champ de bataille, pour soigner comme pour blesser. Vous vous appuyez aussi sur l'aide de votre familier extraordinaire, de potions que vous créez et des objets magiques.",
        "desc_socially": "Vous prodiguez vos connaissances dans de nombreux domaines, y compris divers sujets magiques et vous pourriez faire appel à la magie de votre patron pour charmer ou pour tromper.",
        "desc_exploration": "Vous restez attentif à la présence de pièges ou de trésors magiques en employant un arsenal de sorts judicieusement choisi pour surmonter les obstacles qui se dressent sur votre route. Votre familier pourrait vous aider grâce à son impressionnante panoplie de capacités extraordinaires.",
        "desc_interlude": "Vous créez des potions, fabriquez d'autres objets magiques ou partez à la recherche de nouveaux sorts que votre familier pourra apprendre. Vous pourriez tenter d'en apprendre plus au sujet de votre patron, de ses objectifs ou de vos propres pouvoirs et vous pourriez rechercher la compagnie d'autres sorciers en vue de collaborer ou vous rassembler.",
        "desc_you_could": [
            "Vous efforcer d'en apprendre plus à propos de votre patron ou de votre familier, des objectifs de votre patron, de la raison pour laquelle il vous a choisi et du rôle que vous jouez dans ses plans.",
            "Rechercher de nouvelles sources de magie comme des parchemins et des grimoires pour compléter les sorts que votre patron vous fournit.",
            "Pourriez considérer votre familier comme un allié loyal, un ami cher ou une nuisance indispensable, en fonction de sa personnalité."
        ],
        "desc_probably_others": [
            "Se posent des questions sur la nature de votre patron et de la source de votre magie, craignant que vous ne vous retourniez contre eux ou que vous ne serviez inconsciemment une puissance maléfique.",
            "Apprécient votre capacité à leur venir en aide grâce à votre magie, que vous le fassiez en les aidant directement ou en affaiblissant vos ennemis.",
            "Veillent de ne pas vous offenser, de peur que vous ne leur lanciez un maléfice malicieux s'ils vous mettent en colère."
        ],
        "mastery": {
            "perception": "Q",
            "saves": [
                {
                    "level": "Q",
                    "description": "Qualifié en Vigueur"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en Réflexes"
                },
                {
                    "level": "E",
                    "description": "Expert en Volonté"
                }
            ],
            "skills": [
                {
                    "level": "Q",
                    "description": "Qualifié en une compétence déterminée par votre patron"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en un nombre de compétences supplémentaires égal à 3 plus votre modificateur d'Intelligence"
                }
            ],
            "attacks": [
                {
                    "level": "Q",
                    "description": "Qualifié avec les attaques à mains nues"
                },
                {
                    "level": "Q",
                    "description": "Qualifié avec les armes simples"
                }
            ],
            "defenses": {
                "level": "Q",
                "description": "Qualifié en défense sans armure"
            },
            "spells": [
                {
                    "level": "Q",
                    "description": "Qualifié en modificateur d'attaque de sort"
                },
                {
                    "level": "Q",
                    "description": "Qualifié en DD de classe de sorcier"
                }
            ],
            "class_dc": null,
            "rarity": null
        },
        "capacity_by_level": [
            "familier, incantation de sorcier, maîtrises initiales, patron, sorts de maléfice",
            "Don de compétence, don de sorcier",
            "Amélioration de compétence, don général, sorts de rang 2",
            "Don de compétence, don de sorcier",
            "Amélioration de compétence, don ancestral, primes d'attributs, sorts de rang 3, vigueur magique",
            "Capacité de familier, don de compétence, don de sorcier",
            "Amélioration de compétence, don général, incantateur expert, sorts de rang 4",
            "Don de compétence, don de sorcier",
            "Amélioration de compétence, don ancestral, expertise en réflexes, sorts de rang 5",
            "Don de compétence, don de sorcier, primes d'attributs",
            "Amélioration de compétence, don général, expertise en perception, expertise avec les armes, sorts de rang 6",
            "Capacité de familier, don de compétence, don de sorcier",
            "Amélioration de compétence, don ancestral, robes défensives, sorts de rang 7, spécialisation martiale",
            "Don de compétence, don de sorcier",
            "Amélioration de compétence, don général, incantateur maître, primes d'attributs, sorts de rang 8",
            "Don de compétence, don de sorcier",
            "Amélioration de compétence, don ancestral, sorts de rang 9, volonté du pupille",
            "Capacité de familier, don de compétence, don de sorcier",
            "Amélioration de compétence, cadeau du patron, don général, incantateur légendaire",
            "Don de compétence, don de sorcier, primes d'attributs"
        ],
        "abilities": {
            "incantation_de_sorcier": {
                "name": "Incantation de sorcier",
                "description": [
                    "En utilisant votre familier comme intermédiaire, votre patron vous accorde le pouvoir de lancer des sorts. Vous êtes un incantateur et vous pouvez lancer des sorts de la tradition de votre patron en utilisant l'activité <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'aBQ8ajvEBByv45yz'})\">Lancer un sort</div> . En tant que sorcier, vos incantations peuvent être des rimes, vos gestes peuvent être aussi simples qu'un doigt pointé ou un signe folklorique complexe et votre familier peut même se faire l'écho de vos paroles ou de vos mouvements au fur et à mesure que la magie de votre patron s'intensifie.",
                    "Au niveau 1, vous pouvez préparer jusqu'à deux sorts de rang 1 et cinq tours de magie chaque matin à partir des sorts que votre familier connaît. Les sorts préparés restent disponibles jusqu'à ce que vous les lanciez ou jusqu'à ce que vous prépariez vos sorts à nouveau. Le nombre de sorts que vous pouvez préparer correspond à ce qu'on appelle vos emplacements de sorts. Au fur et à mesure que vous gagnez des niveaux de sorcier, le nombre d'emplacements de sorts dont vous disposez augmente également, comme indiqué sur la table des sorts de Sorcier par jour.",
                    "Certains de vos sorts exigent de votre part un jet d'attaque de sort pour déterminer leur efficacité ou qui obligent vos ennemis à faire un jet contre votre DD de sort (en général un jet de sauvegarde). Comme l'Intelligence est votre attribut essentiel, votre modificateur de jets d'attaque de sort et le DD de vos sorts utilisent votre modificateur d'Intelligence."
                ]
            },
            "sorts_intensifies": {
                "name": "Sorts intensifiés",
                "description": []
            },
            "tours_de_magie": {
                "name": "Tours de magie",
                "description": [
                    "Certains de vos sorts sont des tours de magie. Un tour de magie est un type de sort spécial qui n'utilise pas d'emplacement de sort. Vous pouvez lancer un tour de magie à volonté, n'importe quel nombre de fois par jour. Un tour de magie est toujours automatiquement intensifié à la moitié de votre niveau arrondi au supérieur, donc généralement égal au sort du rang le plus élevé que vous pouvez lancer en tant que sorcier. Par exemple, les tours de magie d'un sorcier de niveau 1 sont de rang 1, tandis que ceux d'un sorcier de niveau 5 sont de rang 3."
                ]
            },
            "familier": {
                "name": "Familier",
                "description": [
                    "Votre patron vous a envoyé un familier, une créature mystique qui vous enseigne la magie et facilite vos sorts. Ce familier suit les règles des familiers mais, comme il s'agit d'un conduit direct entre vous et votre patron, il est plus puissant que les familiers typiques. Votre familier obtient deux pouvoirs de familier supplémentaires : un de ces deux est un pouvoir unique propre à votre patron et est toujours choisi et l'autre est un pouvoir de familier supplémentaire qui peut être choisi quotidiennement comme à l'ordinaire. Votre familier obtient un autre pouvoir supplémentaire aux niveaux 6, 12 et 18.",
                    "Sorts Votre familier est la source et le dépositaire des sorts que votre patron vous a octroyés et vous devez communier avec votre familier pour préparer vos sorts de sorcier chaque jour en utilisant votre incantation de sorcier. Votre familier commence en connaissant 10 tours de magie, 5 sorts de rang 1 et un sort supplémentaire propre à la leçon initiale de votre patron. Vous choisissez ces sorts dans la liste des sorts courants de la tradition propre à votre patron ou parmi les autres sorts de cette tradition auxquels vous avez accès. Chaque fois que vous gagnez un niveau, votre patron enseigne à votre familier deux nouveaux sorts de n'importe quel rang que vous pouvez lancer, choisis parmi les sorts courants de votre tradition ou de ceux auxquels vous avez accès. Des dons peuvent également donner à votre familier des sorts supplémentaires.",
                    "Apprendre des sorts Votre familier peut apprendre des nouveaux sorts indépendamment de votre patron. Il peut apprendre n'importe quel sort se trouvant sur la liste de votre tradition en consommant physiquement une version écrite, processus qui lui prend 1 heure. Cela peut être un parchemin de ce sort ou vous pouvez en préparer une version écrite en utilisant l'activité d'exploration <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'Q5iIYCFdqJFM31GW'})\">Apprendre un sort</div> . Vous et votre familier pouvez utiliser l'activité Apprendre un sort pour enseigner à votre familier un sort provenant du familier d'un autre sorcier. Les deux familiers doivent être présents durant la totalité de l'activité, le sort doit se trouver sur la liste de votre tradition et vous devez payer le coût habituel pour cette activité, généralement sous la forme d'offrandes au patron de l'autre familier. Vous ne pouvez pas préparer de sorts provenant du familier d'un autre sorcier.",
                    "Indestructible Si votre familier meurt, votre patron le remplace au cours de vos prochains préparatifs quotidiens. Le nouveau familier pourrait être une réplique ou une réincarnation de votre ancien familier ou une toute nouvelle entité, mais il connaît les mêmes sorts que votre précédent familier. La mort de votre familier n'affecte pas les sorts que vous avez déjà préparés."
                ]
            },
            "patron": {
                "name": "Patron",
                "description": [
                    "Vous n'êtes pas né avec la capacité de lancer des sorts et vous n'avez pas non plus dédié plusieurs années à étudier des tomes ni à approfondir votre dévotion envers des dieux ou des secrets mystiques. Vos pouvoirs proviennent d'une puissante entité qui vous a choisi comme réceptacle pour faire avancer ses objectifs dans le monde. Cette entité est généralement mystérieuse et distante et ne révèle que peu de choses à propos de son identité et de ses motivations. Elle vous octroie des sorts et d'autres pouvoirs magiques grâce à un familier qui sert d'intermédiaire à son pouvoir.",
                    "Un patron pourrait être une divinité ou un demi-dieu, un conclave de puissantes guenaudes, un Seigneur-fée, un archidiable ou une autre entité de même niveau de puissance, voire même plusieurs entités similaires œuvrant de concert. En acquérant de plus en plus de pouvoirs de la part de votre patron, vous pourriez en apprendre plus sur son identité (certaines combinaisons de thèmes et de leçons suggèrent des patrons ou des objectifs spécifiques) mais les patrons accordent leurs pouvoirs à des sorciers pour des raisons secrètes qu'ils ne révèlent que très rarement en totalité.",
                    "Au niveau 1, choisissez le thème de votre patron, qui détermine votre tradition de lanceur de sorts, vous accorde une compétence, un tour de magie spécifique que vous obtenez et un sort qui est ajouté à votre familier."
                ]
            },
            "sorts_de_malefice": {
                "name": "Sorts de maléfice",
                "description": [
                    "En tant qu'agent privilégié de votre patron, vous pouvez invoquer son pouvoir pour une intervention magique plus directe. Un maléfice est un sort conçu par votre patron et qui vous est envoyé par l'intermédiaire de votre familier, plutôt qu'une capacité que vous utilisez directement. Votre patron attend de vous que vous serviez ses intérêts et ne voit pas d'un bon œil les demandes d'aide répétées. Vous ne pouvez donc utiliser qu'un seul maléfice par tour, et toute tentative d'utilisation d'un second maléfice pendant ce tour échoue et les actions sont perdues.",
                    "Les sorts de maléfice sont un type particulier de sorts focalisés. Lancer un sort focalisé coûte 1 Point de Focalisation et vous commencez votre carrière avec une réserve de focalisation de 1 Point de Focalisation. Vous remplissez votre réserve de focalisation au cours de vos préparatifs quotidiens et vous pouvez regagner 1 Point de Focalisation en passant 10 minutes à utiliser l'activité Refocaliser pour communier avec votre familier.",
                    "Les sorts focalisés sont automatiquement intensifiés à la moitié de votre niveau arrondi au supérieur. Ils n'utilisent pas d'emplacement de sorts et vous ne pouvez pas les lancer en utilisant un emplacement de sorts. Certains dons vous donnent plus de sorts focalisés. Le nombre de points de focalisation de votre réserve de focalisation est égal au nombre de sorts focalisés que vous possédez, mais votre réserve de focalisation ne peut jamais dépasser 3 Points de Focalisation.",
                    "À votre choix, vous apprenez le maléfice <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'aq1yonHeYpbaj3XI'})\">Poupée du patron</div> ou le maléfice <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'rMOI8JFJ0nT2mrCF'})\">Déphasage de familier</div> qui vous permettent respectivement de diriger votre familier ou de le défendre contre ce qui pourrait lui causer du tort. Vous apprenez la plupart des autres maléfices par le biais des <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'SOan0fqyFTrkqJLV'})\">Leçons du sorcier</div> ."
                ]
            },
            "tours_de_magie_de_malefice": {
                "name": "Tours de magie de maléfice",
                "description": [
                    "Les tours de magie de maléfice sont des maléfices spéciaux qui ne coûtent pas de Point de Focalisation, de sorte que vous pouvez les lancer aussi souvent que vous le souhaitez, bien que vous ne puissiez toujours utiliser qu'un seul maléfice par round. Les tours de magie de maléfice s'ajoutent aux tours de magie que vous choisissez mais ne sont pas pris en compte parmi les tours de magie que vous pouvez préparer.",
                    "Vous obtenez un tour de magie de maléfice déterminé par le choix de votre <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'nocYmxbi4rqCC2qS'})\">Thème de patron</div> ."
                ]
            },
            "dons_de_competence": {
                "name": "Dons de compétence",
                "description": [
                    "Au niveau 2, puis tous les niveaux pairs, vous obtenez un don de compétence. vous devez être au moins qualifié dans la compétence correspondante pour choisir un don de compétence."
                ],
                "level": 2
            },
            "dons_de_sorcier": {
                "name": "Dons de sorcier",
                "description": [
                    "Au niveau 2, puis tous les niveaux pairs, vous obtenez un don de classe de sorcier."
                ],
                "level": 2
            },
            "ameliorations_de_competence": {
                "name": "Améliorations de compétence",
                "description": [
                    "Au niveau 3, puis tous les 2 niveaux, vous obtenez une amélioration de compétence. Vous pouvez utiliser cette amélioration pour augmenter votre degré de maîtrise et devenir qualifié dans une compétence dans laquelle vous étiez inexpérimenté ou pour améliorer votre rang dans une compétence dans laquelle vous êtes déjà qualifié pour devenir expert.",
                    "À partir du niveau 7, vous pouvez utiliser l'amélioration de compétence pour devenir maître dans une compétence dans laquelle vous êtes déjà expert et à partir du niveau 15, vous pouvez l'utiliser pour devenir légendaire dans une compétence dans laquelle vous êtes déjà maître."
                ],
                "level": 3
            },
            "dons_generaux": {
                "name": "Dons généraux",
                "description": [
                    "Au niveau 3, puis tous les 4 niveaux, vous obtenez un don général."
                ],
                "level": 3
            },
            "dons_ancestraux": {
                "name": "Dons ancestraux",
                "description": [
                    "En plus de celui avec lequel vous avez commencé, vous obtenez un don ancestral au niveau 5 puis tous les 4 niveaux."
                ],
                "level": 5
            },
            "primes_d_attributs": {
                "name": "Primes d'attributs",
                "description": [
                    "Au niveau 5, puis tous les 5 niveaux, vous améliorez quatre scores d'attributs différents. Vous pouvez utiliser ces primes d'attributs pour faire passer la valeur d'un score d'attribut au-dessus de +4. La prime augmente la valeur du score d'attribut de +1/2 s'il est supérieur ou égal à +4 ou de +1 s'il est inférieur à +3."
                ],
                "level": 5
            },
            "vigueur_magique": {
                "name": "Vigueur magique",
                "description": [
                    "La puissance de votre patron augmente votre résilience physique. Vous devenez expert en jets de Vigueur."
                ],
                "level": 5
            },
            "incantateur_expert": {
                "name": "Incantateur expert",
                "description": [
                    "Vous avez appris à mieux contrôler le pouvoir que votre patron vous a accordé. Vous devenez expert en modificateur d'attaque de sorts et en DD de sort."
                ],
                "level": 7
            },
            "expertise_en_reflexes": {
                "name": "Expertise en réflexes",
                "description": [
                    "Vos réflexes sont rapides comme l'éclair, vous aidant à esquiver le danger. Vous devenez expert en jets de Réflexes."
                ],
                "level": 9
            },
            "expertise_en_perception": {
                "name": "Expertise en perception",
                "description": [
                    "Vous restez à l'affût des menaces qui vous entourent. Vous devenez expert en Perception."
                ],
                "level": 11
            },
            "expertise_martiale": {
                "name": "Expertise martiale",
                "description": [
                    "Par l'intermédiaire de la seule expérience, vous avez amélioré votre technique avec vos armes. Vous devenez expert avec les armes simples et les attaques à mains nues."
                ],
                "level": 11
            },
            "specialisation_martiale": {
                "name": "Spécialisation martiale",
                "description": [
                    "Vous avez appris à infliger des blessures plus importantes avec les armes que vous connaissez le mieux. Vous infligez 2 dégâts supplémentaires avec les armes et les attaques à mains nues avec lesquelles vous êtes expert. Ces dégâts passent à 3 si vous êtes maître et à 4 si vous êtes légendaire."
                ],
                "level": 13
            },
            "robes_defensives": {
                "name": "Robes défensives",
                "description": [
                    "Le flux de la magie et votre entraînement défensif se combinent pour vous placer hors du passage avant une attaque. Votre degré de maîtrise pour la défense sans armure passe à expert."
                ],
                "level": 13
            },
            "incantateur_maitre": {
                "name": "Incantateur maître",
                "description": [
                    "Vous avez achevé de maîtriser la magie de votre patron. Vous devenez maître en modificateur d'attaque de sorts et en DD de sort."
                ],
                "level": 15
            },
            "volonte_du_pupille": {
                "name": "Volonté du pupille",
                "description": [
                    "Vous avez appris à infliger des blessures plus importantes avec les armes que vous connaissez le mieux. Vous infligez 2 dégâts supplémentaires avec les armes et les attaques à mains nues avec lesquelles vous êtes expert. Ces dégâts passent à 3 si vous êtes maître et à 4 si vous êtes légendaire."
                ],
                "level": 17
            },
            "cadeau_du_patron": {
                "name": "Cadeau du patron",
                "description": [
                    "Votre patron vous octroie le pouvoir de réaliser d'incroyables prouesses magiques. Vous obtenez un unique emplacement de sort de rang 10 et vous pouvez l'utiliser pour préparer un sort dans cet emplacement en utilisant incantation de sorcier. Contrairement aux autres emplacements de sort, vous ne pouvez utiliser un emplacement de sort de rang 10 avec des capacités qui vous accordent plus d'emplacements de sort ou qui vous permettent de lancer un sort sans dépenser d'emplacement de sort. Vous ne gagnez pas d'autres emplacements de sort de rang 10 en gagnant des niveaux supplémentaires mais vous pouvez prendre le don <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'SelPslNtTfzxp7fs'})\">Vérité du patron</div> pour en obtenir un second."
                ],
                "level": 19
            },
            "incantateur_legendaire": {
                "name": "Incantateur légendaire",
                "description": [
                    "Vous avez perfectionné votre autorité sur la magie que votre patron fournit. Vous devenez légendaire en modificateur d'attaque de sorts et en DD de sorts."
                ],
                "level": 19
            },
            "patrons": {
                "name": "Patrons",
                "description": [
                    "Lorsque votre patron entre en contact avec vous pour la première fois, il ne vous révèle généralement rien de plus que des aperçus ou des manifestations spécifiques - vous pouvez voir des yeux dans les ombres de la forêt ou entendre une voix sans paroles résonner dans la toundra gelée avant que votre familier ne se fasse connaître. La véritable identité de votre patron pourrait être une puissante guenaude, une fée souveraine, une divinité ou un demi-dieu, un archidiable, ou une entité tout aussi puissante — ou peut-être plusieurs entités de ce type travaillant de concert. Mais c'est à vous de tenter de découvrir cette identité au fur et à mesure que vous apprenez les leçons de votre patron. Certains patrons ont de multiples facettes, se présentant sous différentes formes et accordant différents pouvoirs à différents sorciers. Dans certains cas, le sorcier peut connaître l'identité de son patron, mais d'autres aspects restent incertains : il peut connaître le nom de son patron, mais pas ses motivations, ou même s'il connaît l'identité du patron, il a reçu une malédiction l'empêchant de la révéler à d'autres.",
                    "votre patron détermine les éléments suivants :",
                    "Liste de sorts Vous utilisez cette tradition magique et cette liste de sorts.",
                    "Compétence de patron Vous devenez qualifié dans la compétence indiquée.",
                    "Leçon initiale C'est la première leçon que votre patron vous enseigne et elle est propre à votre patron.",
                    "Capacité de familier Une des deux capacités supplémentaires de votre familier est toujours celle indiquée ici, une marque de l'influence indélébile de votre patron. L'avantage ne peut se produire qu'une fois par round lorsque vous Lancez ou Maintenez un maléfice, et vous pouvez choisir s'il se produit avant ou après les effets du Lancement ou du Maintien du maléfice.",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'v2JQB6j3VIKWqPpQ'})\">Choeur politique</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'T9wA833bzZVlB3Lo'})\">Dévoreur de pourriture</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'mFqMSQoNl0NMDklv'})\">Gardien de la flamme de la foi</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'e0VhUyjz1clW3sC4'})\">Intendant de la nature</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'FdLx4VODZEYLGOK9'})\">L'inscrit</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'ydI39ViUy22nBRn6'})\">Le courtier invisible</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '9OwWgOP8ZWxTAqbg'})\">Le ressentiment</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '4zE3seVFtLPNw9EQ'})\">Murmure des ailes</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'zy0toWeGIeQstbT4'})\">Moustique</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'r2ZPRAw9c3VGZi8A'})\">Ombre sans étoile</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'lgv4VIoj5TLhm9u0'})\">Ondulation dans les profondeurs</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'RdOzBNPKLTMUWrJs'})\">Paradoxe des opposés</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '9c57R18pfgfqlBCD'})\">Silence dans la neige</div>",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'ghIsqhEsJTvjJiNl'})\">Tisseur de fils</div>",
                    "Rare",
                    "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'VVMMJdIWL7fAsQf3'})\">Baba Yaga</div>"
                ]
            },
            "lecons_de_sorcier": {
                "name": "Leçons de sorcier",
                "description": [
                    "Le savoir d'un sorcier prend la forme de leçons que vous pouvez apprendre en choisissant des dons tels que Leçon basique. Chaque leçon vous accorde un maléfice et enseigne un nouveau sort à votre familier qui vient s'ajouter aux sorts que vous pouvez préparer avec Incantation de sorcier. Vous obtenez ce sort même s'il ne se trouve pas sur la liste de votre tradition.",
                    "Vous pouvez choisir l'une de ces leçons quand un don ou un autre effet vous octroie une leçon basique.",
                    "Leçon des éléments Les catastrophes naturelles et les intempéries ont plus de pouvoir que la plus puissante des créatures. Vous obtenez le maléfice <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'f9uqHnNBMU0774SF'})\">Trahison élémentaire</div> . Votre familier apprend à votre choix soit <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'W69zswpj0Trdy5rj'})\">Bulle d'air</div> , <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'y6rAdMK6EFlV6U0t'})\">Cracher du feu</div> , <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'Rn2LkoSq1XhLsODV'})\">Frappe de débris</div> ou <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'jfVCuOpzC6mUrf6f'})\">Poussée hydraulique</div> .",
                    "Leçon de protection Une dose de protection vaut mieux que son poids en remèdes. Vous obtenez le maléfice <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'dFejDNEmVj3CwYLL'})\">Protection du sang</div> et votre familier apprend <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'aAbfKn8maGjJjk2W'})\">Armure mystique</div> .",
                    "Leçon des rêves Les rêves peuvent être une fenêtre vers des intuitions supérieures. Vous obtenez le maléfice <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'NNoKWiWKqJkdD2ln'})\">Voile des rêves</div> et votre familier apprend <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'o4lRVTwSxnOOn5vl'})\">Sommeil</div> .",
                    "Leçon de vengeance Ne pas souffrir le moindre affront. Vous obtenez le maléfice <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'aEitTTb9PnOyidRf'})\">Aiguillon de la vengeance</div> et votre familier apprend <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'R8bqnYiThB6MYTxD'})\">Douleur fantôme</div> .",
                    "Leçon de vie La vie peut être partagée. Vous obtenez le maléfice <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'fAlzXtQAASaJx0mY'})\">Gain de vie</div> et votre familier apprend <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'yHujiDQPdtXW797e'})\">Lien spirituel</div> .",
                    "Peu courant",
                    "Leçon de calamité Vous obtenez le maléfice <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'X8PSYw6WC2ePYSXd'})\">Malédiction titubante</div> et votre familier apprend <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '6ZIKB0151LUR19Rw'})\">Mauvais présage</div> .",
                    "Vous pouvez choisir parmi ces leçons lorsqu'un don ou un autre effet vous accorde une leçon supérieure.",
                    "Leçon d'ombre Une ombre est loin d'être inutile : elle contient quelque chose de la personne qui la projette. Vous obtenez le maléfice <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'vhMCd15ZwNJn0zen'})\">Ombre malicieuse</div> et votre familier apprend <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'sRfSBHWHdbIa0aGc'})\">Ténèbres glaciales</div> .",
                    "Leçon de faveurs Vous obtenez le maléfice <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '9gMQPCaFM27PEIh4'})\">Rendre la faveur</div> et votre familier apprend <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'fPlFRu4dp09qJs3K'})\">Esprit de menace</div> .",
                    "Leçon de malice Il n'y a rien de mal à faire quelques bêtises, de temps à autre. Vous obtenez le maléfice <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'FrKPwgFxWIGMGgs4'})\">Cape de tromperie</div> et votre familier apprend <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'tFKJCPvOQZxKq6ON'})\">Singes fous</div> .",
                    "Leçon de neige Imitez la neige, car elle peut étouffer la vie malgré sa douceur. Vous obtenez le maléfice <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'g4MAIQodRDVfNp1B'})\">Blizzard personnel</div> et votre familier apprend <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'it4ZsAi6XgvGcodc'})\">Mur de vent</div> .",
                    "Leçon de pourriture Toutes les choses vivantes finissent par pourrir, nourrissant les champignons et les insectes. Vous obtenez le maléfice <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'V4jrHiaMh4XuANOP'})\">Maladie mycologique</div> et votre familier apprend <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'XI6Lzd2B5pernkPd'})\">Forme d'insecte</div> .",
                    "Leçon du squale Vous apprenez les manières de ce prédateur océanique mortel. Vous obtenez le maléfice <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'CXpOlv2ZZq2jVbRX'})\">Sang dans l'eau</div> et votre familier apprend <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'RvBlSIJmxiqfCpR9'})\">Pieds en nageoires</div> .",
                    "Leçon du troupeau La puissance afflue lorsque plusieurs travaillent comme un seul. Vous obtenez le maléfice <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'gxK5XW4WAXOgY1mN'})\">Ailes protectrices</div> et votre familier apprend <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'fI20AVwOzJMHXRdo'})\">Lévitation</div> .",
                    "peu courant"
                ]
            },
            "lecons_majeures": {
                "name": "Leçons majeures",
                "description": [
                    "Vous pouvez choisir parmi ces leçons lorsqu'un don ou un autre effet vous accorde une leçon majeure.",
                    "Leçon de marchandage Vous obtenez le maléfice <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'PcmFpaHPCReNp1BD'})\">Sur des charbons ardents</div> et votre familier apprend <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'GP3wewkQXEPrLxYj'})\">Suggestion subconsciente</div> .",
                    "Leçon de mort La mort est définitive, mais pas aussi inéluctable qu'il n'y paraît. Vous obtenez le maléfice <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'nQS4vPm5zprqkzFZ'})\">Malédiction de mort</div> et votre familier apprend <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'IkGYwHRLhkuoGReG'})\">Rappel à la vie</div> .",
                    "Leçon de renouveau L'entropie s'abat sur tous, mais il est possible de l'enrayer au prix d'un effort. Vous obtenez le maléfice <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'pCvJ4yoZJxDtgUMI'})\">Moment restauratif</div> et votre familier apprend <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'x5rGOmhDRDVQPrnW'})\">Champ de vie</div> .",
                    "Rare",
                    "Leçon de la reine glacée Vous obtenez le maléfice <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'ZyREiMaul0VhDYh3'})\">Cœur glacial</div> et votre familier apprend <div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': 'R5FHRv7VqyRnxg2t'})\">Mur de glace</div> ."
                ]
            }
        }
    }
]
};

CLASSES.getDataByName = function ( name ) {
    for ( let i = 0, _size_i = CLASSES.ENUM.length; i < _size_i; i++ ) {
        if ( CLASSES.ENUM[ i ].name === name ) {
            return CLASSES.ENUM[ i ];
        }
    }
    return null;
};

