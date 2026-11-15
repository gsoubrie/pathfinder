"use strict";

/**
 * Actions of each skill, keyed by skill key (CLASSES.getAbilityKey of
 * the SKILLS.LIST label). One entry per action with its rank requirement
 * ("I" usable untrained, "Q", "E", "M", "L"), the general actions usable
 * with the skill, and the descriptions of both. The character sheet shows
 * an action as usable when his rank on the skill reaches the requirement.
 * Scraped from grimoire-vf.fr, generated data : do not edit by hand,
 * re-run the extraction instead.
 */
OBJECT.SKILL_ACTIONS = {
    "acrobaties": {
        "label"       : "Acrobaties",
        "description" : "La compétence Acrobaties mesure votre capacité à accomplir des tâches nécessitant coordination et agilité. Quand vous utilisez l'action basique S'échapper , vous pouvez appliquer votre modificateur d'Acrobaties à la place de votre modificateur d'attaque à mains nues . Vous pouvez également l'utiliser à la place de Réflexes pour les actions basiques Arrêter une chute et Se raccrocher in extremis .",
        "actions": [
            {
                "name"        : "Déplacement acrobatique",
                "cost"        : "1 action",
                "traits"      : ["déplacement"],
                "rank"        : "I",
                "prerequisite": "",
                "condition"   : "",
                "description" : "Vous Marchez rapidement d'une distance égale à votre Vitesse. Pendant ce déplacement, vous pouvez tenter de traverser l'espace occupé par un ennemi. Effectuez un test d' Acrobaties contre le DD de Réflexes de l'ennemi dès que vous tentez d'entrer dans l'espace qu'il occupe. Vous pouvez faire un Déplacement acrobatique en effectuant les actions Voler , Escalader , Nager ou une autre action en fonction de votre environnement au lieu de Marcher rapidement .",
                "results"     : [
                    { "label": "Succès", "text": "Vous traversez l'espace occupé par l'ennemi, en considérant les cases dans son espace comme un terrain difficile (chaque déplacement de 1,5 m compte comme un déplacement de 3 m). Si vous n'avez pas assez de Vitesse pour traverser complètement l'espace qu'il occupe, vous appliquez l'effet de l'échec." },
                    { "label": "Échec", "text": "Votre déplacement prend fin et vous déclenchez des réactions comme si vous étiez sorti de la case dans laquelle vous avez commencé." }
                ]
            },
            {
                "name"        : "Garder l'équilibre",
                "cost"        : "1 action",
                "traits"      : ["déplacement"],
                "rank"        : "I",
                "prerequisite": "",
                "condition"   : "Vous vous trouvez dans une case contenant une surface étroite, un sol inégal ou un autre élément similaire.",
                "description" : "Vous vous déplacez sur une surface étroite ou sur un sol inégal en effectuant un test d' Acrobaties contre son DD pour Garder l'équilibre. Vous êtes pris par surprise lorsque vous êtes sur une surface étroite ou un sol inégal. Exemples de tâches :",
                "tasks"       : [
                    { "rank_label": "Inexpérimenté", "text": "enchevêtrement de racines, pavés déchaussés" },
                    { "rank_label": "Qualifié", "text": "poutre de bois" },
                    { "rank_label": "Expert", "text": "épaisse couche de graviers" },
                    { "rank_label": "Maître", "text": "corde tendue, surface lisse et verglacée" },
                    { "rank_label": "Légendaire", "text": "lame de rasoir, des sections du sol qui s'effondrent brusquement" }
                ],
                "results"     : [
                    { "label": "Succès critique", "text": "Vous vous déplacez d'une distance maximale égale à votre Vitesse." },
                    { "label": "Succès", "text": "Vous vous déplacez d'une distance maximale égale à votre Vitesse, en considérant la surface traversée comme un terrain difficile (chaque déplacement de 1,5 m compte comme un déplacement de 3 m)." },
                    { "label": "Échec", "text": "Vous devez rester sur place pour garder l'équilibre (l'action est tout de même dépensée) ou vous chutez. Votre tour prend fin si vous chutez." },
                    { "label": "Échec critique", "text": "Vous chutez et votre tour prend fin." }
                ]
            },
            {
                "name"        : "Manœuvrer en vol",
                "cost"        : "1 action",
                "traits"      : ["déplacement"],
                "rank"        : "Q",
                "prerequisite": "Qualifié en Acrobaties",
                "condition"   : "Vous avez une Vitesse de vol .",
                "description" : "Vous tentez une manœuvre difficile en volant. Effectuez un test d' Acrobaties . Le MJ détermine quelles manœuvres sont possibles mais elles vous permettent rarement de vous déplacer plus loin que votre Vitesse de vol . Exemples de tâches :",
                "tasks"       : [
                    { "rank_label": "Qualifié", "text": "ascension ou descente brusque" },
                    { "rank_label": "Expert", "text": "voler contre le vent" },
                    { "rank_label": "Maître", "text": "se retourner dans la direction opposée" },
                    { "rank_label": "Légendaire", "text": "voler lors d'une tempête par vent violent" }
                ],
                "results"     : [
                    { "label": "Succès", "text": "Vous réussissez la manœuvre." },
                    { "label": "Échec", "text": "Votre manœuvre échoue. Le MJ décide si vous ne vous déplacez simplement pas ou si un autre effet néfaste se produit. Cet effet devrait correspondre à la manœuvre que vous avez tentée." },
                    { "label": "Échec critique", "text": "Comme un échec, mais les conséquences sont plus néfastes." }
                ]
            },
            {
                "name"        : "Se faufiler",
                "cost"        : "",
                "traits"      : ["exploration", "déplacement"],
                "rank"        : "Q",
                "prerequisite": "Qualifié en Acrobaties",
                "condition"   : "",
                "description" : "Vous vous contorsionnez pour vous faufiler dans un espace si étroit que vous pouvez à peine le traverser. Cette action concerne les espaces exceptionnellement étroits ; nombre d'espaces étroits sont considérés comme du terrain difficile que vous pouvez traverser plus rapidement et sans avoir à effectuer de test. Exemples de tâches :",
                "tasks"       : [
                    { "rank_label": "Qualifié", "text": "espace tout juste assez large pour y passer vos épaules" },
                    { "rank_label": "Maître", "text": "espace tout juste assez large pour y passer votre tête" }
                ],
                "results"     : [
                    { "label": "Succès critique", "text": "Vous traversez l'espace étroit en vous faufilant et cela vous prend 1 min tous les 3 m." },
                    { "label": "Succès", "text": "Vous vous faufilez en 1 min par tranche de 1,5 m." },
                    { "label": "Échec critique", "text": "Vous restez coincé dans l'espace étroit. Lorsque vous êtes coincé de la sorte, vous pouvez effectuer un autre test d' Acrobaties contre le même DD en y consacrant 1 min. Tout résultat autre qu'un échec critique sur ce test permet de vous décoincer." }
                ]
            }
        ],
        "general_actions": [
        ]
    }
,
    "arcanes": {
        "label"       : "Arcanes",
        "description" : "La compétence Arcanes mesure vos connaissances de la magie et des créatures arcaniques. Vous pouvez effectuer l'action Se souvenir même si vous êtes inexpérimenté. Se souvenir de théories arcaniques, de traditions magiques, de créatures importantes d'un point de vue arcanique (comme les créatures artificielles , les bêtes et les élémentaires), du plan astral , des plans élémentaires et du monde des ténèbres .",
        "actions": [
            {
                "name"        : "Emprunter un sort arcanique",
                "cost"        : "",
                "traits"      : ["concentration", "exploration"],
                "rank"        : "Q",
                "prerequisite": "Qualifié en Arcanes",
                "condition"   : "",
                "description" : "Si vous êtes un incantateur arcanique qui prépare ses sorts, vous pouvez essayer de préparer un sort inscrit dans le grimoire arcanique de quelqu'un d'autre, auprès du familier d'un sorcier arcanique ou d'une chose similaire. Le MJ fixe le DD du test en fonction du rang du sort et de sa rareté ; c'est généralement un peu plus simple que d'Apprendre le sort.",
                "results"     : [
                    { "label": "Succès", "text": "Vous préparez le sort emprunté lors de votre préparation normale des sorts." },
                    { "label": "Échec", "text": "Vous ne parvenez pas à préparer le sort mais l'emplacement de sort reste disponible pour en préparer un autre. Vous ne pouvez pas tenter de préparer ce sort jusqu'à votre prochaine préparation des sorts." }
                ]
            }
        ],
        "general_actions": [
            { "name": "Apprendre un sort", "rank": "Q" },
            { "name": "Déchiffrer un texte", "rank": "Q" },
            { "name": "Identifier la magie", "rank": "Q" },
            { "name": "Se souvenir", "rank": "I" }
        ]
    }
,
    "artisanat": {
        "label"       : "Artisanat",
        "description" : "Vous pouvez utiliser cette compétence pour créer et réparer des objets. Vous pouvez effectuer l'action Se souvenir même si vous êtes inexpérimenté. Se souvenir d'informations sur les réactions alchimiques, la valeur des objets, l'ingénierie, les matériaux inhabituels et les créatures mécaniques ou alchimiques. Le MJ détermine quelles créatures entrent dans ce champ de connaissances mais il inclut généralement les créatures artificielles .",
        "actions": [
            {
                "name"        : "Réparer",
                "cost"        : "",
                "traits"      : ["exploration", "manipulation"],
                "rank"        : "I",
                "prerequisite": "",
                "condition"   : "Vous tenez ou portez du matériel de réparation .",
                "description" : "Vous passez 10 min à tenter de réparer un objet endommagé, en le plaçant sur une surface stable et en utilisant le matériel de réparation avec vos deux mains. Effectuez un test d' Artisanat . Le MJ détermine le DD, sachant que le DD pour Réparer un objet donné est généralement similaire à celui pour le Fabriquer . Vous ne pouvez pas Réparer un objet détruit.",
                "results"     : [
                    { "label": "Succès critique", "text": "L'objet réparé récupère 10 points de vie, et 10 points de vie supplémentaires par rang de maîtrise que vous avez en Artisanat (pour un total de 20 PV si vous êtes qualifié, 30 PV si vous êtes un expert, 40 PV si vous êtes un maître ou 50 PV si vous êtes légendaire)." },
                    { "label": "Succès", "text": "L'objet réparé récupère 5 points de vie, et 5 points de vie supplémentaires par rang de maîtrise que vous avez en Artisanat (pour un total de 10 PV si vous êtes qualifié, 15 PV si vous êtes un expert, 20 PV si vous êtes un maître ou 25 PV si vous êtes légendaire)." },
                    { "label": "Échec critique", "text": "Vous infligez 2d6 dégâts à l'objet. Appliquez la Solidité de l'objet à ces dégâts." }
                ]
            },
            {
                "name"        : "Fabriquer",
                "cost"        : "",
                "traits"      : ["intermède", "manipulation"],
                "rank"        : "Q",
                "prerequisite": "Qualifié en Artisanat",
                "condition"   : "",
                "description" : "Vous pouvez fabriquer un objet avec des matières premières. Vous devez satisfaire aux conditions suivantes : l'objet est d'un niveau inférieur ou égal au vôtre (maître requis si niveau 9+, légendaire si niveau 17+) ; l'objet doit être commun ou vous devez en avoir un à disposition ; vous possédez les outils appropriés et un atelier si nécessaire ; vous fournissez les matières premières d'une valeur au moins égale à la moitié du prix de l'objet. Effectuez un test d' Artisanat après avoir passé 2 jours à travailler (ou 1 jour si vous possédez la formule de l'objet).",
                "results"     : [
                    { "label": "Succès critique", "text": "Votre tentative est réussie. Chaque jour supplémentaire réduit la valeur des matières nécessaires d'un montant basé sur votre niveau +1 et votre rang de maîtrise." },
                    { "label": "Succès", "text": "Votre tentative est réussie. Chaque jour supplémentaire réduit la valeur des matières nécessaires d'un montant basé sur votre niveau et votre rang de maîtrise." },
                    { "label": "Échec", "text": "Vous ne parvenez pas à terminer la fabrication. Vous pouvez récupérer la pleine valeur des matières premières." },
                    { "label": "Échec critique", "text": "Vous ne parvenez pas à terminer la fabrication. Vous perdez 10 % des matières premières." }
                ]
            },
            {
                "name"        : "Identifier l'alchimie",
                "cost"        : "",
                "traits"      : ["concentration", "exploration", "secret"],
                "rank"        : "Q",
                "prerequisite": "Qualifié en Artisanat",
                "condition"   : "Vous tenez ou portez du matériel d'alchimiste .",
                "description" : "Vous pouvez identifier la nature d'un objet alchimique en l'analysant pendant 10 min avec votre matériel d'alchimiste. Si votre tentative est interrompue, vous devez la reprendre depuis le début.",
                "results"     : [
                    { "label": "Succès", "text": "Vous identifiez l'objet et découvrez la méthode pour l'activer." },
                    { "label": "Échec", "text": "Vous ne parvenez pas à identifier l'objet mais vous pouvez recommencer." },
                    { "label": "Échec critique", "text": "Vous identifiez l'objet de travers et le prenez pour un autre objet au choix du MJ." }
                ]
            }
        ],
        "general_actions": [
            { "name": "Gagner de l'argent", "rank": "Q" },
            { "name": "Se souvenir", "rank": "I" }
        ]
    }
,
    "athletisme": {
        "label"       : "Athlétisme",
        "description" : "L'Athlétisme vous permet d'accomplir des prouesses physiques. La plupart des actions d'Athlétisme vous permettent de vous déplacer dans votre environnement ( Escalader , Sauter en hauteur , Sauter en longueur , Nager ) ou de contrôler les déplacements de votre adversaire en combat ( Saisir , Repositionner , Pousser , Croc-en-jambe et Désarmer ). S'échapper Quand vous utilisez l'action basique S'échapper , vous pouvez appliquer votre modificateur d'Athlétisme à la place de votre modificateur d'attaque à mains nues .",
        "actions": [
            {
                "name"        : "Croc-en-jambe",
                "cost"        : "1 action",
                "traits"      : ["attaque"],
                "rank"        : "I",
                "prerequisite": "",
                "condition"   : "L'une de vos mains au moins est libre. Votre cible ne peut pas être de plus d'une catégorie de taille de plus que vous.",
                "description" : "Vous tentez de faire tomber une créature. Effectuez un test d' Athlétisme contre le DD de Réflexes de la cible.",
                "results"     : [
                    { "label": "Succès critique", "text": "La cible tombe à terre et subit 1d6 dégâts contondants." },
                    { "label": "Succès", "text": "La cible tombe à terre ." },
                    { "label": "Échec critique", "text": "Vous perdez l'équilibre et tombez à terre ." }
                ]
            },
            {
                "name"        : "Escalader",
                "cost"        : "1 action",
                "traits"      : ["déplacement"],
                "rank"        : "I",
                "prerequisite": "",
                "condition"   : "Vos deux mains sont libres.",
                "description" : "Vous tentez un test d' Athlétisme pour monter, descendre ou parcourir une déclivité sur une distance maximale de 1,5 m. Vous êtes pris par surprise quand vous escaladez, sauf si vous avez une Vitesse d'escalade. Le MJ détermine le DD en se basant sur la nature de la déclivité et les circonstances environnementales. Si votre Vitesse au sol est égale ou supérieure à 12 m, augmentez de 1,5 m la distance maximale parcourue par tranche de 6 m de Vitesse au-dessus de 6. Exemples de tâches :",
                "tasks"       : [
                    { "rank_label": "Inexpérimenté", "text": "échelle, pente abrupte, arbre aux branches basses" },
                    { "rank_label": "Qualifié", "text": "gréement, corde, arbre typique" },
                    { "rank_label": "Expert", "text": "mur avec des petites prises pour les pieds et les mains" },
                    { "rank_label": "Maître", "text": "plafond avec des prises pour les pieds et les mains, mur de roche" },
                    { "rank_label": "Légendaire", "text": "surface lisse" }
                ],
                "results"     : [
                    { "label": "Succès critique", "text": "Vous montez, descendez ou parcourez la déclivité en augmentant de 1,5 m la distance maximale parcourue." },
                    { "label": "Succès", "text": "Vous montez, descendez ou parcourez la déclivité." },
                    { "label": "Échec critique", "text": "Vous chutez. Si vous avez commencé votre escalade sur un sol stable, vous tombez à terre ." }
                ]
            },
            {
                "name"        : "Nager",
                "cost"        : "1 action",
                "traits"      : ["déplacement"],
                "rank"        : "I",
                "prerequisite": "",
                "condition"   : "",
                "description" : "Vous effectuez un test d' Athlétisme pour vous déplacer dans l'eau d'une distance maximale de 3 m. Le MJ détermine le DD en se basant sur la turbulence ou le danger de l'eau ; dans la plupart des cas où l'eau est calme, vous obtenez un succès critique automatique. Si votre Vitesse au sol est égale ou supérieure à 12 m, augmentez de 1,5 m la distance maximale par tranche de 6 m de Vitesse au-dessus de 6. Si vous terminez votre tour dans l'eau et que vous n'avez pas réussi une action Nager lors de ce tour, vous coulez de 3 m ou vous êtes emporté par le courant. Exemples de tâches :",
                "tasks"       : [
                    { "rank_label": "Inexpérimenté", "text": "lac ou autre étendue d'eau immobile" },
                    { "rank_label": "Qualifié", "text": "eau vive, telle que celle d'une rivière" },
                    { "rank_label": "Expert", "text": "rivière au débit rapide" },
                    { "rank_label": "Maître", "text": "mer démontée" },
                    { "rank_label": "Légendaire", "text": "maelström, chute d'eau" }
                ],
                "results"     : [
                    { "label": "Succès critique", "text": "Vous vous déplacez dans l'eau en augmentant de 1,5 m la distance maximale parcourue." },
                    { "label": "Succès", "text": "Vous vous déplacez dans l'eau." },
                    { "label": "Échec critique", "text": "Vous ne progressez pas. Si vous retenez votre respiration, vous perdez un round d'air." }
                ]
            },
            {
                "name"        : "Ouvrir de force",
                "cost"        : "1 action",
                "traits"      : ["attaque"],
                "rank"        : "I",
                "prerequisite": "",
                "condition"   : "",
                "description" : "En utilisant votre masse corporelle, un levier ou un autre outil, vous tentez de forcer l'ouverture d'une porte, d'une fenêtre, d'un contenant ou d'une grille épaisse. Avec un résultat suffisamment élevé, vous pouvez même traverser des murs. Vous subissez un malus d'objet de −2 au test d' Athlétisme si vous tentez d'Ouvrir de force quelque chose sans pied-de-biche . Exemples de tâches :",
                "tasks"       : [
                    { "rank_label": "Inexpérimenté", "text": "tissu , verre fin" },
                    { "rank_label": "Qualifié", "text": "glace, verre épais" },
                    { "rank_label": "Expert", "text": "porte en bois peu épaisse, herse en bois" },
                    { "rank_label": "Maître", "text": "porte en bois épaisse, herse en fer, barreau métallique" },
                    { "rank_label": "Légendaire", "text": "porte en pierre ou en fer" }
                ],
                "results"     : [
                    { "label": "Succès critique", "text": "Vous ouvrez la porte, la fenêtre, le contenant ou la grille sans l'endommager si vous le souhaitez." },
                    { "label": "Succès", "text": "Vous enfoncez la porte, la fenêtre, le contenant ou la grille, et l'objet enfoncé obtient l'état brisé . S'il est particulièrement solide, le MJ peut décider qu'il subit des dégâts sans être brisé ." },
                    { "label": "Échec critique", "text": "Votre tentative bloque la porte, la fenêtre, le contenant ou la grille, imposant un malus de circonstances de −2 aux tentatives ultérieures pour l'Ouvrir de force." }
                ]
            },
            {
                "name"        : "Pousser",
                "cost"        : "1 action",
                "traits"      : ["attaque"],
                "rank"        : "I",
                "prerequisite": "",
                "condition"   : "L'une de vos mains au moins est libre. La cible ne peut pas être de plus d'une catégorie de taille de plus que vous.",
                "description" : "Vous repoussez une créature. Effectuez un test d' Athlétisme contre son DD de Vigueur.",
                "results"     : [
                    { "label": "Succès critique", "text": "Vous repoussez la cible de 3 m. Vous pouvez Marcher rapidement à sa suite, mais vous devez couvrir la même distance qu'elle et avancer dans la même direction." },
                    { "label": "Succès", "text": "Vous repoussez votre cible de 1,5 m. Vous pouvez Marcher rapidement à sa suite, mais vous devez couvrir la même distance qu'elle et avancer dans la même direction." },
                    { "label": "Échec critique", "text": "Vous perdez l'équilibre et tombez à terre ." }
                ]
            },
            {
                "name"        : "Repositionner",
                "cost"        : "1 action",
                "traits"      : ["attaque"],
                "rank"        : "I",
                "prerequisite": "",
                "condition"   : "L'une de vos mains au moins est libre, ou vous saisissez ou entravez la cible. La cible ne peut pas être de plus d'une catégorie de taille de plus que vous.",
                "description" : "Vous déplacez de force une créature ou un objet. Effectuez un test d' Athlétisme contre le DD de Vigueur de la cible.",
                "results"     : [
                    { "label": "Succès critique", "text": "Vous déplacez la créature d'une distance maximale de 3 m. Elle doit rester à portée de votre allonge pendant ce déplacement et vous ne pouvez pas la déplacer dans ou à travers des obstacles." },
                    { "label": "Succès", "text": "Vous déplacez la créature d'une distance maximale de 1,5 m. Elle doit rester à portée de votre allonge pendant ce déplacement et vous ne pouvez pas la déplacer dans ou à travers des obstacles." },
                    { "label": "Échec critique", "text": "La cible peut vous déplacer d'une distance maximale de 1,5 m comme si c'était elle qui avait réussi à vous repositionner." }
                ]
            },
            {
                "name"        : "Saisir",
                "cost"        : "1 action",
                "traits"      : ["attaque"],
                "rank"        : "I",
                "prerequisite": "",
                "condition"   : "L'une de vos mains au moins est libre et votre cible ne peut pas être de plus d'une catégorie de taille de plus que vous.",
                "description" : "Vous tentez de saisir une créature ou un objet avec votre main libre. Effectuez un test d' Athlétisme contre le DD de Vigueur de la cible. Vous pouvez Saisir une créature que vous avez déjà empoignée ou entravée sans avoir une main libre.",
                "results"     : [
                    { "label": "Succès critique", "text": "Votre adversaire est entravé jusqu'à la fin de votre prochain tour, sauf si vous vous déplacez ou si votre adversaire S'échappe ." },
                    { "label": "Succès", "text": "Votre adversaire est empoigné jusqu'à la fin de votre prochain tour, sauf si vous vous déplacez ou si votre adversaire S'échappe ." },
                    { "label": "Échec", "text": "Vous ne parvenez pas à saisir votre adversaire. Si vous avez déjà empoigné ou entravé votre adversaire en utilisant l'action Saisir, ces états sur cet adversaire disparaissent." },
                    { "label": "Échec critique", "text": "Si vous avez déjà empoigné ou entravé votre adversaire, il se libère. Votre cible peut vous saisir, comme si elle avait réussi à effectuer l'action Saisir contre vous, ou vous obliger à tomber à terre ." }
                ]
            },
            {
                "name"        : "Sauter en hauteur",
                "cost"        : "2 actions",
                "traits"      : [],
                "rank"        : "I",
                "prerequisite": "",
                "condition"   : "",
                "description" : "Vous Marchez rapidement puis effectuez un test d' Athlétisme DD 30 pour sauter en hauteur. Si vous ne prenez pas un élan d'au moins 3 m avec l'action Marcher rapidement , vous ratez automatiquement votre test. Le MJ peut augmenter ou diminuer ce DD en fonction des situations.",
                "results"     : [
                    { "label": "Succès critique", "text": "Vous Bondissez de 2,4 m à la verticale et de 3 m à l'horizontale." },
                    { "label": "Succès", "text": "Vous Bondissez de 1,5 m à la verticale et à l'horizontale." },
                    { "label": "Échec", "text": "Vous Bondissez normalement." },
                    { "label": "Échec critique", "text": "Vous tombez à terre dans votre espace." }
                ]
            },
            {
                "name"        : "Sauter en longueur",
                "cost"        : "2 actions",
                "traits"      : [],
                "rank"        : "I",
                "prerequisite": "",
                "condition"   : "",
                "description" : "Vous Marchez rapidement puis vous tentez un test d' Athlétisme DD 15 pour faire un saut en longueur dans la direction dans laquelle vous avez Marché rapidement. Si vous ne prenez pas un élan d'au moins 3 m avec l'action Marcher rapidement , vous ratez automatiquement votre test. Le MJ peut augmenter ou diminuer ce DD en fonction des situations.",
                "results"     : [
                    { "label": "Succès", "text": "Vous Bondissez jusqu'à une distance égale au résultat de votre test multiplié par 30 cm, en arrondissant au multiple de 1,5 m le plus proche. La longueur de votre Bond ne peut pas dépasser votre Vitesse au sol." },
                    { "label": "Échec", "text": "Vous faites un Bond horizontal normal." },
                    { "label": "Échec critique", "text": "Vous faites un Bond horizontal normal puis vous tombez à terre ." }
                ]
            },
            {
                "name"        : "Désarmer",
                "cost"        : "1 action",
                "traits"      : ["attaque"],
                "rank"        : "Q",
                "prerequisite": "Qualifié en Athlétisme",
                "condition"   : "L'une de vos mains au moins est libre. La cible ne peut pas être de plus d'une catégorie de taille de plus que vous.",
                "description" : "Vous tentez d'obliger une créature à lâcher un objet qu'elle tient. Effectuez un test d' Athlétisme contre le DD de Réflexes de la cible.",
                "results"     : [
                    { "label": "Succès critique", "text": "Votre obligez la créature à lâcher l'objet qu'elle tient. Celui-ci tombe au sol dans l'espace qu'elle occupe." },
                    { "label": "Succès", "text": "Vous affaiblissez la prise de votre adversaire sur l'objet. Les tentatives ultérieures pour la Désarmer bénéficient d'un bonus de circonstances de +2 et la cible subit un malus de circonstances de −2 aux attaques effectuées avec l'objet ou aux autres tests nécessitant une prise ferme sur l'objet. La créature peut mettre fin à l'effet en Interagissant pour changer sa prise sur l'objet." },
                    { "label": "Échec critique", "text": "Vous perdez l'équilibre et êtes pris par surprise jusqu'au début de votre prochain tour." }
                ]
            }
        ],
        "general_actions": [
        ]
    }
,
    "connaissance": {
        "label"       : "Connaissance",
        "description" : "Vous détenez des informations spécifiques sur un sujet restreint. La compétence Connaissances englobe de nombreuses sous-catégories. Vous pouvez avoir Connaissances militaires, Connaissances en navigation maritime, Connaissances vampiriques ou toute autre sous-catégorie de la compétence. Chaque sous-catégorie est une compétence à part entière ; ainsi, l'application d'une amélioration de compétence à Connaissances planaires n'améliorera pas votre maîtrise en Connaissances en navigation maritime, par exemple. La plupart des historiques vous permettent de devenir qualifié dans une sous-catégorie précise de la compétence Connaissances. Le MJ détermine quelles autres sous-catégories de Connaissances il autorise, mais ces sous-catégories sont toujours plus restreintes que toutes les autres compétences vous permettant de Vous souvenir d'une information, et elles ne devraient jamais pouvoir remplacer l'action Se souvenir d'une autre compétence. Par exemple, Connaissances en magie ne pourra jamais couvrir le même éventail de connaissances qu' Arcanes , Nature , Occultisme et Religion , Connaissances en aventure ne pourra jamais vous livrer toutes les informations dont un aventurier a besoin, et Connaissances planaires ne suffira pas pour obtenir toutes les informations réparties par ailleurs dans diverses compétences et sous-catégories telles que Connaissances sur le Paradis . Si vous avez plusieurs sous-catégories de Connaissances qui peuvent s'appliquer à un test ou qui coïncident avec une autre compétence hors Connaissances, vous pouvez utiliser la compétence que vous préférez. S'il y a un doute sur le choix de la compétence Connaissances à appliquer concernant un sujet ou une action spécifique, c'est le MJ qui décide quelles Connaissances sont utilisables ou non. Vous pouvez effectuer l'action Se souvenir même si vous êtes inexpérimenté en Connaissances. Se souvenir d'informations sur un sujet couvert par votre sous-catégorie de Connaissances.",
        "actions": [
        ],
        "general_actions": [
            { "name": "Gagner de l'argent", "rank": "Q" },
            { "name": "Se souvenir", "rank": "I" }
        ]
    }
,
    "diplomatie": {
        "label"       : "Diplomatie",
        "description" : "Vous influencez autrui par vos négociations et vos flatteries ou vous recueillez des informations par vos aimables discussions.",
        "actions": [
            {
                "name"        : "Faire bonne impression",
                "cost"        : "",
                "traits"      : ["audible", "concentration", "exploration", "linguistique", "mental"],
                "rank"        : "I",
                "prerequisite": "",
                "condition"   : "",
                "description" : "Lors d'une conversation d'au moins 1 min pendant laquelle vous faites des propositions charismatiques, des flatteries et montrez votre bonne volonté, vous cherchez à faire bonne impression à quelqu'un pour que son attitude vous soit temporairement favorable. À la fin de la conversation, effectuez un test de Diplomatie contre le DD de Volonté d'une cible. Vous pouvez vous imposer un malus de −2 en choisissant jusqu'à cinq cibles à la place. L'impression dure uniquement le temps de l'interaction sociale en cours, à moins que le MJ n'en décide autrement.",
                "results"     : [
                    { "label": "Succès critique", "text": "L'attitude de la cible à votre égard s'améliore de deux catégories." },
                    { "label": "Succès", "text": "L'attitude de la cible envers vous s'améliore d'une catégorie." },
                    { "label": "Échec critique", "text": "L'attitude de la cible à votre égard se détériore d'une catégorie." }
                ]
            },
            {
                "name"        : "Recueillir des informations",
                "cost"        : "",
                "traits"      : ["exploration", "secret"],
                "rank"        : "I",
                "prerequisite": "",
                "condition"   : "",
                "description" : "Vous fréquentez les marchés, les tavernes et les lieux de rassemblement locaux pour tenter de recueillir des informations sur un individu ou un sujet particulier. Le MJ détermine le DD du test et le temps qu'il faut investir (deux heures le plus souvent, mais parfois plus), en prenant en compte les éventuels avantages dont vous pouvez bénéficier en dépensant de l'argent en pots-de-vin, tournées de boisson ou divers cadeaux. Exemples de tâches :",
                "tasks"       : [
                    { "rank_label": "Inexpérimenté", "text": "ce dont tout le monde parle au village" },
                    { "rank_label": "Qualifié", "text": "rumeur connue" },
                    { "rank_label": "Expert", "text": "rumeur obscure, secret éventé" },
                    { "rank_label": "Maître", "text": "information ésotérique ou dissimulée" },
                    { "rank_label": "Légendaire", "text": "information connue par un nombre extrêmement réduit d'individus ou uniquement par des êtres extraordinaires" }
                ],
                "results"     : [
                    { "label": "Succès", "text": "Vous recueillez des informations sur l'individu ou le sujet. Le MJ détermine le contenu de ces informations." },
                    { "label": "Échec critique", "text": "Vous recueillez des informations erronées sur l'individu ou le sujet." }
                ]
            },
            {
                "name"        : "Solliciter",
                "cost"        : "1 action",
                "traits"      : ["audible", "concentration", "linguistique", "mental"],
                "rank"        : "I",
                "prerequisite": "",
                "condition"   : "",
                "description" : "Vous pouvez solliciter une créature amicale ou serviable envers vous. Vous devez formuler votre sollicitation de manière à ce que la cible accepte, étant donné son attitude actuelle envers vous. Le MJ détermine le DD en fonction de la difficulté de la sollicitation. Certaines sollicitations sont douteuses ou impossibles, et un PNJ, aussi serviable soit-il, ne les acceptera jamais.",
                "results"     : [
                    { "label": "Succès critique", "text": "La cible répond favorablement et sans réserve à votre sollicitation." },
                    { "label": "Succès", "text": "La cible répond favorablement à votre sollicitation, mais peut imposer des conditions ou modifier certains aspects de votre demande." },
                    { "label": "Échec", "text": "La cible refuse votre sollicitation mais peut proposer une alternative moins extrême." },
                    { "label": "Échec critique", "text": "Non seulement la cible refuse votre sollicitation mais son attitude à votre égard se détériore d'une catégorie à cause de la témérité de votre requête." }
                ]
            }
        ],
        "general_actions": [
        ]
    }
,
    "discretion": {
        "label"       : "Discrétion",
        "description" : "Vous avez un don pour éviter de vous faire repérer, ce qui vous permet de vous déplacer autour d'ennemis sans vous faire voir, de vous cacher ou de dissimuler un objet .",
        "actions": [
            {
                "name"        : "Dissimuler un objet",
                "cost"        : "1 action",
                "traits"      : ["manipulation", "secret"],
                "rank"        : "I",
                "prerequisite": "",
                "condition"   : "",
                "description" : "Vous dissimulez un petit objet sur vous (tel qu'une arme dont l'Encombrement est léger). Quand vous tentez de camoufler un objet sur vous pour que personne ne le remarque, le MJ effectue votre test de Discrétion et compare le résultat au DD de Perception de l'observateur passif. Une fois que le MJ a fait votre test pour un objet dissimulé, ce même résultat est utilisé, quel que soit le nombre d'observateurs passifs qui passent à votre proximité. Vous pouvez également dissimuler un objet ailleurs que sur vous, dans un buisson ou dans un compartiment secret, par exemple.",
                "results"     : [
                    { "label": "Succès", "text": "L'objet reste non détecté ." },
                    { "label": "Échec", "text": "La créature qui cherche trouve l'objet." }
                ]
            },
            {
                "name"        : "Être furtif",
                "cost"        : "1 action",
                "traits"      : ["déplacement", "secret"],
                "rank"        : "I",
                "prerequisite": "",
                "condition"   : "",
                "description" : "Vous tentez de vous déplacer vers un autre endroit tout en devenant ou en restant non détecté. Marchez rapidement jusqu'à la moitié de votre Vitesse. Vous pouvez Être furtif en Creusant, en Escaladant, en Volant ou en Nageant au lieu de Marcher rapidement si vous avez le type de déplacement correspondant. À la fin de votre déplacement, le MJ effectue votre test de Discrétion en secret et compare le résultat au DD de Perception de chaque créature vis-à-vis desquelles vous étiez caché ou non détecté au début de votre déplacement.",
                "results"     : [
                    { "label": "Succès", "text": "Vous êtes non détecté par la créature pendant votre déplacement et restez non détecté à la fin. Vous devenez observé dès que vous faites quoi que ce soit d'autre que Vous cacher , Être furtif ou Faire un pas . Si vous tentez de Frapper une créature, celle-ci reste prise par surprise contre cette attaque puis vous devenez observé ." },
                    { "label": "Échec", "text": "Vous restez dissimulé mais un bruit ou autre signe suspect révèle votre position. Vous êtes caché de la créature pendant votre déplacement et le restez." },
                    { "label": "Échec critique", "text": "Vous êtes repéré ! Vous êtes observé par la créature pendant votre déplacement et le restez." }
                ]
            },
            {
                "name"        : "Se cacher",
                "cost"        : "1 action",
                "traits"      : ["secret"],
                "rank"        : "I",
                "prerequisite": "",
                "condition"   : "",
                "description" : "Vous vous réfugiez derrière un abri normal ou important ou vous vous enfoncez dans un élément qui offre un camouflage pour être caché et non plus observé. Le MJ effectue votre test de Discrétion en secret et compare le résultat au DD de Perception de chaque créature qui vous observe mais vis-à-vis desquelles vous bénéficiez d'un abri ou êtes masqué . Vous obtenez un bonus de circonstances de +2 à votre test si vous bénéficiez d'un abri standard (ou +4 grâce à un abri important).",
                "results"     : [
                    { "label": "Succès", "text": "Si la créature pouvait vous voir, vous êtes à présent caché d'elle et non plus observé . Si vous étiez caché ou non détecté par la créature, vous conservez cet état. Vous n'êtes plus caché si vous faites quoi que ce soit d'autre que Se cacher, Être furtif ou Faire un pas ." },
                    { "label": "Échec", "text": "Vous restez observé ." }
                ]
            }
        ],
        "general_actions": [
        ]
    }
,
    "duperie": {
        "label"       : "Duperie",
        "description" : "Vous pouvez duper autrui et l'induire en erreur par le biais de déguisements, de mensonges et d'autres formes de subterfuges. Les tentatives de Duperie sont souvent accompagnées d'inconvénients si vous êtes démasqué, et il vaut souvent mieux être déjà loin quand cela arrive.",
        "actions": [
            {
                "name"        : "Faire diversion",
                "cost"        : "1 action",
                "traits"      : ["mental"],
                "rank"        : "I",
                "prerequisite": "",
                "condition"   : "",
                "description" : "À l'aide d'un geste, d'un tour de passe-passe ou de quelques mots destinés à détourner l'attention, vous pouvez faire diversion pour attirer l'attention de créatures ailleurs. Si vous utilisez un geste ou un tour de passe-passe, cette action obtient le trait manipulation . Si vous prononcez quelques mots, elle obtient les traits audible et linguistique . Effectuez un unique test de Duperie et comparez le résultat aux DD de Perception des créatures dont vous tentez de détourner l'attention. Qu'il soit réussi ou non, les créatures concernées bénéficient d'un bonus de circonstances de +4 à leur DD de Perception contre vos tentatives de Faire diversion pendant 1 min.",
                "results"     : [
                    { "label": "Succès", "text": "Vous devenez caché des créatures dont le DD de Perception est inférieur ou égal à votre résultat. Cela dure jusqu'à la fin de votre tour ou jusqu'à ce que vous fassiez autre chose que Faire un pas ou Se cacher / Être furtif ." },
                    { "label": "Échec", "text": "Vous ne parvenez à détourner l'attention d'aucune créature dont le DD est supérieur à votre résultat et ces créatures savent que vous avez essayé de les duper." }
                ]
            },
            {
                "name"        : "Mentir",
                "cost"        : "",
                "traits"      : ["audible", "concentration", "linguistique", "mental", "secret"],
                "rank"        : "I",
                "prerequisite": "",
                "condition"   : "",
                "description" : "Vous tentez de tromper quelqu'un en lui mentant. Cela demande un round au moins ou plus longtemps si le mensonge est élaboré. Vous effectuez un unique test de Duperie et comparez le résultat au DD de Perception de chaque créature que vous tentez de tromper. Des mensonges compliqués ou à peine croyables sont bien plus difficiles à croire que des mensonges plus simples et plus crédibles.",
                "results"     : [
                    { "label": "Succès", "text": "La cible croit à votre mensonge." },
                    { "label": "Échec", "text": "La cible ne croit pas à votre mensonge et bénéficie d'un bonus de circonstances de +4 contre vos tentatives pour Mentir pendant toute la durée de votre conversation. Elle se montrera également plus suspicieuse envers vous à l'avenir." }
                ]
            },
            {
                "name"        : "Se déguiser",
                "cost"        : "",
                "traits"      : ["concentration", "exploration", "manipulation", "secret"],
                "rank"        : "I",
                "prerequisite": "",
                "condition"   : "",
                "description" : "Vous vous confectionnez un déguisement pour vous faire passer pour quelqu'un ou quelque chose d'autre. La confection d'un déguisement convaincant prend 10 min et nécessite du matériel de déguisement , mais un déguisement plus simple confectionné au pied levé peut faire l'affaire si vous ne voulez pas vous faire passer pour quelqu'un en particulier, à l'appréciation du MJ. Dans la plupart des cas, les créatures ont une chance de détecter la supercherie uniquement si elles utilisent l'action Chercher pour effectuer des tests de Perception contre votre DD de Duperie .",
                "results"     : [
                    { "label": "Succès", "text": "La créature que vous dupez est convaincue que vous êtes bien la personne dont vous avez pris l'apparence. Un nouveau test peut être nécessaire si vous changez de comportement." },
                    { "label": "Échec", "text": "La créature peut affirmer que vous n'êtes pas la personne que vous prétendez être." },
                    { "label": "Échec critique", "text": "La créature peut affirmer que vous n'êtes pas la personne que vous prétendez être, et vous reconnaît si elle vous a déjà vu sans déguisement." }
                ]
            },
            {
                "name"        : "Feinter",
                "cost"        : "1 action",
                "traits"      : ["mental"],
                "rank"        : "Q",
                "prerequisite": "Qualifié en Duperie",
                "condition"   : "Vous êtes à portée d'allonge au corps à corps de la cible que vous tentez de Feinter.",
                "description" : "À l'aide d'un moulinet trompeur, vous faites en sorte qu'un adversaire ne puisse pas voir venir votre véritable attaque. Effectuez un test de Duperie contre le DD de Perception de votre cible.",
                "results"     : [
                    { "label": "Succès critique", "text": "Les tentatives de défense de votre ennemi sont complètement inefficaces. La cible est prise par surprise contre les attaques au corps à corps que vous portez contre elle jusqu'à la fin de votre prochain tour." },
                    { "label": "Succès", "text": "Vous feintez votre adversaire, mais pour un court instant seulement. La cible est prise par surprise contre la prochaine attaque au corps à corps que vous portez contre elle avant la fin de votre tour actuel." },
                    { "label": "Échec critique", "text": "Votre feinte se retourne contre vous. Vous êtes pris par surprise contre les attaques au corps à corps que la cible porte contre vous jusqu'à la fin de votre prochain tour." }
                ]
            }
        ],
        "general_actions": [
        ]
    }
,
    "intimidation": {
        "label"       : "Intimidation",
        "description" : "Vous soumettez autrui à votre volonté par le biais de menaces. Au contraire de la Duperie ou de la Diplomatie , l'Intimidation est généralement une méthode brutale qui ne laisse que peu de place à la nuance ou à l'attention.",
        "actions": [
            {
                "name"        : "Contraindre",
                "cost"        : "",
                "traits"      : ["audible", "concentration", "émotion", "exploration", "linguistique", "mental"],
                "rank"        : "I",
                "prerequisite": "",
                "condition"   : "",
                "description" : "À l'aide de menaces voilées ou manifestes, vous tentez d'intimider une créature pour la forcer à obéir à vos ordres. Vous devez interagir avec elle pendant au moins 1 min. À la fin de la conversation, effectuez un test d' Intimidation contre le DD de Volonté de la cible.",
                "results"     : [
                    { "label": "Succès critique", "text": "La cible vous révèle l'information que vous cherchez ou accepte de suivre vos directives tant qu'elles ne la mettent pas en danger. Elle continue d'obtempérer pendant une durée déterminée par le MJ (au maximum une journée). Une fois cette période écoulée, elle devient inamicale ." },
                    { "label": "Succès", "text": "Comme un succès critique, mais une fois la cible inamicale , elle peut décider d'agir contre vous en vous dénonçant aux autorités ou en aidant vos ennemis." },
                    { "label": "Échec", "text": "La cible ne fait pas ce que vous voulez et, si elle n'était pas déjà inamicale ou hostile , elle devient inamicale ." },
                    { "label": "Échec critique", "text": "La cible refuse d'obtempérer, devient hostile si elle ne l'était pas déjà et vous ne pouvez plus la Contraindre pendant au moins une semaine." }
                ]
            },
            {
                "name"        : "Démoraliser",
                "cost"        : "1 action",
                "traits"      : ["audible", "concentration", "émotion", "terreur", "mental"],
                "rank"        : "I",
                "prerequisite": "",
                "condition"   : "",
                "description" : "Vous pouvez ébranler la détermination d'un ennemi en poussant un cri soudain, en formulant un sarcasme au moment opportun ou en lâchant une insulte mordante. Désignez une créature située à 9 m ou moins de vous et dont vous percevez la présence. Effectuez un test d' Intimidation contre le DD de Volonté de cette cible. Si elle ne comprend pas la langue que vous parlez ou si vous ne parlez pas, vous subissez un malus de circonstances de −4 au test. Quel que soit le résultat, la cible est temporairement immunisée contre vos tentatives pour la Démoraliser pendant 10 min.",
                "results"     : [
                    { "label": "Succès critique", "text": "La cible devient effrayée 2." },
                    { "label": "Succès", "text": "La cible devient effrayée 1." }
                ]
            }
        ],
        "general_actions": [
        ]
    }
,
    "vol": {
        "label"       : "Vol",
        "description" : "Vous êtes entraîné dans un domaine particulier de compétences généralement pratiquées par les voleurs et les scélérats.",
        "actions": [
            {
                "name"        : "Dérober",
                "cost"        : "1 action",
                "traits"      : ["manipulation"],
                "rank"        : "I",
                "prerequisite": "",
                "condition"   : "",
                "description" : "Vous tentez de vous emparer d'un objet que porte une autre créature sans vous faire repérer. Généralement, vous ne pouvez Dérober qu'un objet dont l'Encombrement est négligeable, vous devez avoir une main libre et vous ratez automatiquement si la créature qui porte l'objet est en combat ou sur ses gardes. Effectuez un test de Larcin pour déterminer si vous réussissez à Dérober l'objet. Le DD pour Dérober est le plus souvent le DD de Perception de la créature qui porte l'objet.",
                "results"     : [
                    { "label": "Succès", "text": "Vous dérobez l'objet sans que son détenteur ne s'en aperçoive, ou un observateur ne vous voit pas prendre ou tenter de prendre l'objet." },
                    { "label": "Échec", "text": "Le détenteur de l'objet remarque votre tentative avant que vous puissiez prendre l'objet, ou un observateur vous voit prendre ou tenter de prendre l'objet." }
                ]
            },
            {
                "name"        : "Escamoter un objet",
                "cost"        : "1 action",
                "traits"      : ["manipulation"],
                "rank"        : "I",
                "prerequisite": "",
                "condition"   : "",
                "description" : "Vous vous emparez d'un petit objet que personne ne porte et vous tentez de ne pas vous faire repérer. Effectuez un test de Larcin contre les DD de Perception de toutes les créatures en train de vous observer. Vous ne pouvez généralement Escamoter que des objets dont l'Encombrement est négligeable, mais le MJ peut en décider autrement en fonction des situations.",
                "results"     : [
                    { "label": "Succès", "text": "La créature ne voit pas que vous Escamotez l'objet." },
                    { "label": "Échec", "text": "La créature voit que vous Escamotez l'objet." }
                ]
            },
            {
                "name"        : "Crocheter une serrure",
                "cost"        : "2 actions",
                "traits"      : ["manipulation"],
                "rank"        : "Q",
                "prerequisite": "Qualifié en Larcin",
                "condition"   : "Vous tenez ou portez du matériel de voleur .",
                "description" : "Déverrouiller une serrure sans sa clef est très similaire au Désamorçage d'un dispositif mais le DD du test est déterminé par la complexité et la structure de la serrure que vous tentez de crocheter. Les serrures de qualité supérieure nécessitent plusieurs succès pour parvenir à les crocheter. Si vous n'avez pas les bons outils, le MJ peut vous autoriser à utiliser du matériel improvisé, alors considéré comme du matériel de mauvaise qualité.",
                "results"     : [
                    { "label": "Succès critique", "text": "Vous crochetez la serrure ou obtenez deux succès pour réussir à crocheter une serrure nécessitant plus d'un succès. Vous ne laissez aucune trace de votre manipulation." },
                    { "label": "Succès", "text": "Vous crochetez la serrure ou obtenez un succès pour réussir à crocheter une serrure nécessitant plus d'un succès. Vous détériorez la serrure et des observateurs attentifs peuvent remarquer qu'elle a été crochetée." },
                    { "label": "Échec critique", "text": "Vous cassez votre matériel et détériorez la serrure de manière évidente. Réparer du matériel brisé nécessite l'utilisation de la compétence Artisanat pour Réparer ou leur remplacement." }
                ]
            },
            {
                "name"        : "Désamorcer un dispositif",
                "cost"        : "2 actions",
                "traits"      : ["manipulation"],
                "rank"        : "Q",
                "prerequisite": "Qualifié en Larcin",
                "condition"   : "",
                "description" : "Cette action vous permet de désamorcer un piège ou un autre dispositif complexe. Souvent, un dispositif nécessite de nombreux succès avant de réussir à le désamorcer, en fonction de sa structure et de sa complexité. C'est le MJ qui détermine si du matériel de voleur peut être utile et même parfois nécessaire pour Désamorcer un dispositif.",
                "results"     : [
                    { "label": "Succès critique", "text": "Vous désamorcez le dispositif ou obtenez deux succès pour réussir à désamorcer un dispositif nécessitant plus d'un succès. Vous ne laissez aucune trace de votre manipulation et vous pouvez réarmer le dispositif ultérieurement si cela est possible." },
                    { "label": "Succès", "text": "Vous désamorcez le dispositif ou obtenez un succès pour réussir à désamorcer un dispositif nécessitant plus d'un succès." },
                    { "label": "Échec critique", "text": "Vous déclenchez le dispositif." }
                ]
            }
        ],
        "general_actions": [
        ]
    }
,
    "medecine": {
        "label"       : "Médecine",
        "description" : "Vous pouvez soigner les blessures et aider les malades et les personnes empoisonnées à se rétablir. Soigner les blessures est particulièrement utile et permet à votre groupe d'aventuriers de récupérer entre les combats. Cette compétence augmente en efficacité avec des dons de compétence tels que Récupération continue et Infirmier . Vous pouvez effectuer l'action Se souvenir même si vous êtes inexpérimenté en Médecine. Se souvenir d'informations sur les maladies, les blessures, les poisons et autres affections. Vous pouvez utiliser cela dans un but criminalistique si vous passez 10 min (ou plus, à l'appréciation du MJ) à examiner un cadavre en quête d'indices, tels que l'aspect des blessures par exemple. C'est surtout utile pour déterminer les causes des blessures ou de la mort.",
        "actions": [
            {
                "name"        : "Prodiguer les premiers soins",
                "cost"        : "2 actions",
                "traits"      : ["manipulation"],
                "rank"        : "I",
                "prerequisite": "",
                "condition"   : "Vous portez ou tenez du matériel de guérisseur .",
                "description" : "Vous prodiguez les premiers soins à une créature adjacente qui est mourante ou victime de saignements. Si une créature est mourante et victime de saignements, choisissez quelle affection vous voulez soigner avant d'effectuer le test. Vous pouvez Prodiguer les premiers soins à nouveau pour tenter de soigner l'autre affliction. • Stabiliser. Effectuez un test de Médecine sur une créature dans l'état mourant à qui il reste 0 point de vie. Le DD est égal à 5 + le DD du test de récupération de cette créature (pour un total s'élevant le plus souvent à 15 + l'intensité de son état mourant ). • Stopper l'hémorragie. Effectuez un test de Médecine sur une créature victime de dégâts de saignement persistants . Le DD est le plus souvent égal à celui de l'effet qui a provoqué le saignement.",
                "results"     : [
                    { "label": "Succès", "text": "Si vous tentez de la stabiliser, la créature perd l'état mourant (mais elle reste inconsciente ). Si vous tentez de stopper l'hémorragie, la cible bénéficie d'un rétablissement assisté avec le DD réduit d'une aide particulièrement appropriée." },
                    { "label": "Échec critique", "text": "Si vous tentez de la stabiliser, l'intensité de son état mourant augmente de 1. Si vous tentez de stopper l'hémorragie, elle subit immédiatement un montant de dégâts égal à ses dégâts de saignements persistants." }
                ]
            },
            {
                "name"        : "Soigner les blessures",
                "cost"        : "",
                "traits"      : ["exploration", "guérison", "manipulation"],
                "rank"        : "Q",
                "prerequisite": "Qualifié en Médecine",
                "condition"   : "Vous portez ou tenez du matériel de guérisseur .",
                "description" : "Vous passez 10 min à soigner les blessures d'une créature vivante (vous pouvez soigner vos propres blessures si vous le souhaitez). La cible est ensuite temporairement immunisée aux actions Soigner les blessures pendant 1 h (cette durée comprend le temps du soin). Le DD du test de Médecine est le plus souvent de 15 mais le MJ peut le modifier en fonction des circonstances. Si vous êtes un expert en Médecine , vous pouvez faire à la place un test DD 20 pour augmenter de 10 les PV récupérés. Si vous êtes un maître, DD 30 pour +30 PV. Si vous êtes légendaire, DD 40 pour +50 PV. Si vous réussissez et soignez la cible pendant un total de 1 h, doublez les PV récupérés.",
                "results"     : [
                    { "label": "Succès critique", "text": "La cible récupère 4d8 points de vie et son état blessé disparaît." },
                    { "label": "Succès", "text": "La cible récupère 2d8 points de vie et son état blessé disparaît." },
                    { "label": "Échec critique", "text": "La cible subit 1d8 dégâts." }
                ]
            },
            {
                "name"        : "Soigner un empoisonnement",
                "cost"        : "1 action",
                "traits"      : ["manipulation"],
                "rank"        : "Q",
                "prerequisite": "Qualifié en Médecine",
                "condition"   : "Vous portez ou tenez du matériel de guérisseur .",
                "description" : "Vous soignez un patient empoisonné pour stopper la propagation du poison. Effectuez un test de Médecine contre le DD du poison. Après avoir tenté de soigner une créature empoisonnée, vous ne pouvez pas faire d'autres tentatives tant que la créature n'a pas encore fait son prochain jet de sauvegarde contre le poison.",
                "results"     : [
                    { "label": "Succès critique", "text": "Vous conférez un bonus de circonstances de +4 à son prochain jet de sauvegarde contre le poison." },
                    { "label": "Succès", "text": "Vous conférez un bonus de circonstances de +2 à son prochain jet de sauvegarde contre le poison." },
                    { "label": "Échec critique", "text": "Vos efforts imposent un malus de circonstances de −2 à son prochain jet de sauvegarde contre le poison." }
                ]
            },
            {
                "name"        : "Soigner une maladie",
                "cost"        : "",
                "traits"      : ["intermède", "manipulation"],
                "rank"        : "Q",
                "prerequisite": "Qualifié en Médecine",
                "condition"   : "Vous portez ou tenez du matériel de guérisseur .",
                "description" : "Vous passez au moins 8 h à prendre soin d'une créature malade. Effectuez un test de Médecine contre le DD de la maladie . Après avoir tenté de soigner une créature malade, vous ne pouvez pas faire d'autres tentatives tant que la créature n'a pas effectué son prochain jet de sauvegarde contre la maladie .",
                "results"     : [
                    { "label": "Succès critique", "text": "Vous conférez un bonus de circonstances de +4 à son prochain jet de sauvegarde contre la maladie ." },
                    { "label": "Succès", "text": "Vous conférez un bonus de circonstances de +2 à son prochain jet de sauvegarde contre la maladie ." },
                    { "label": "Échec critique", "text": "Vos efforts imposent un malus de circonstances de −2 à son prochain jet de sauvegarde contre la maladie ." }
                ]
            }
        ],
        "general_actions": [
            { "name": "Se souvenir", "rank": "I" }
        ]
    }
,
    "nature": {
        "label"       : "Nature",
        "description" : "Vous en savez beaucoup sur le monde naturel, et vous dirigez et dressez des animaux et des bêtes magiques. Vous pouvez effectuer l'action Se souvenir même si vous êtes inexpérimenté en Nature. Se souvenir d'informations sur la flore, la faune, la géographie, le climat, l'environnement, les créatures d'origine naturelle (comme les animaux, les bêtes , les fées et les plantes), et les plans élémentaires.",
        "actions": [
            {
                "name"        : "Diriger un animal",
                "cost"        : "1 action",
                "traits"      : ["audible", "concentration"],
                "rank"        : "I",
                "prerequisite": "",
                "condition"   : "",
                "description" : "Vous donnez un ordre à un animal. Effectuez un test de Nature contre le DD de Volonté de l'animal. Le MJ peut modifier le DD si l'animal a une attitude favorable envers vous, si vous lui demandez d'accomplir une action pour laquelle il est prédisposé ou si vous lui offrez une friandise. Vous ratez automatiquement si l'animal est hostile ou inamical envers vous. Si l'animal est serviable envers vous, augmentez d'un cran votre degré de succès. La plupart des animaux savent accomplir les actions basiques Bondir , Chercher , Marcher rapidement , Frapper , Se jeter à terre et Se relever .",
                "results"     : [
                    { "label": "Succès", "text": "L'animal obéit à vos ordres lors de son prochain tour." },
                    { "label": "Échec", "text": "L'animal hésite ou rechigne et ne fait rien." },
                    { "label": "Échec critique", "text": "L'animal ne comprend pas l'ordre ou l'interprète mal et accomplit une autre action déterminée par le MJ." }
                ]
            }
        ],
        "general_actions": [
            { "name": "Apprendre un sort", "rank": "Q" },
            { "name": "Identifier la magie", "rank": "Q" },
            { "name": "Se souvenir", "rank": "I" }
        ]
    }
,
    "occultisme": {
        "label"       : "Occultisme",
        "description" : "Vous en savez beaucoup sur les anciennes philosophies, les traditions ésotériques, le mysticisme obscur et les créatures surnaturelles. Vous pouvez effectuer l'action Se souvenir même si vous êtes inexpérimenté en Occultisme. Se souvenir d'informations sur les mystères antiques, les philosophies obscures, les créatures importantes d'un point de vue occulte (comme les aberrations , les esprits et les vases), et les plans ésotériques comme le plan astral , la forge de la Création, le plan éthéré , le monde des ténèbres et le Néant .",
        "actions": [
        ],
        "general_actions": [
            { "name": "Apprendre un sort", "rank": "Q" },
            { "name": "Déchiffrer un texte", "rank": "Q" },
            { "name": "Identifier la magie", "rank": "Q" },
            { "name": "Se souvenir", "rank": "I" }
        ]
    }
,
    "religion": {
        "label"       : "Religion",
        "description" : "Les secrets des divinités, du dogme, de la foi et des royaumes occupés par des créatures divines tout à la fois sublimes et sinistres sont à votre portée. Vous savez également comment fonctionne la magie, bien que votre formation donne une connotation religieuse à ce savoir. Vous pouvez effectuer l'action Se souvenir même si vous êtes inexpérimenté en Religion. Se souvenir d'informations sur les agents divins, les sujets théologiques les plus subtils, les mythes obscurs à propos d'une religion et les créatures importantes d'un point de vue religieux (comme les célestes, les fiélons et les morts-vivants ), la forge de la Création, le Néant et la Sphère extérieure.",
        "actions": [
        ],
        "general_actions": [
            { "name": "Apprendre un sort", "rank": "Q" },
            { "name": "Déchiffrer un texte", "rank": "Q" },
            { "name": "Identifier la magie", "rank": "Q" },
            { "name": "Se souvenir", "rank": "I" }
        ]
    }
,
    "representation": {
        "label"       : "Représentation",
        "description" : "Vous êtes doué dans la pratique d'une forme artistique et exploitez vos talents pour impressionner une foule ou gagner votre vie.",
        "actions": [
            {
                "name"        : "Se produire",
                "cost"        : "1 action",
                "traits"      : ["concentration"],
                "rank"        : "I",
                "prerequisite": "",
                "condition"   : "",
                "description" : "Quand vous donnez une courte représentation (une chanson, une danse rapide ou quelques histoires drôles), vous utilisez l'action Se produire. Cette action est particulièrement utile quand vous voulez prouver votre talent ou impressionner rapidement quelqu'un. Ce genre de représentations a rarement un impact en tant que tel mais elles peuvent influencer le DD de tests de Diplomatie ultérieurs vis-à-vis des observateurs, ou même changer leur attitude si le MJ le permet. Exemples de tâches :",
                "tasks"       : [
                    { "rank_label": "Inexpérimenté", "text": "public de roturiers" },
                    { "rank_label": "Qualifié", "text": "public d'artisans" },
                    { "rank_label": "Expert", "text": "public de marchands ou de nobles mineurs" },
                    { "rank_label": "Maître", "text": "public de nobles importants ou de membres mineurs de la famille royale" },
                    { "rank_label": "Légendaire", "text": "public de membres majeurs de la famille royale ou d'entités d'outre-monde" }
                ],
                "results"     : [
                    { "label": "Succès critique", "text": "Votre représentation impressionne les gens qui y assistent et ils parleront probablement autour d'eux de votre talent." },
                    { "label": "Succès", "text": "Vous faites vos preuves et les personnes présentes apprécient la qualité de votre représentation." },
                    { "label": "Échec", "text": "Votre représentation n'a pas l'effet escompté." },
                    { "label": "Échec critique", "text": "Vous ne parvenez à démontrer que votre incompétence." }
                ]
            }
        ],
        "general_actions": [
            { "name": "Gagner de l'argent", "rank": "Q" }
        ]
    }
,
    "societe": {
        "label"       : "Société",
        "description" : "Vous comprenez les gens et les systèmes qui participent au développement des civilisations, et vous connaissez les événements historiques qui expliquent l'évolution et la situation actuelle des sociétés. De plus, vous pouvez exploiter ce savoir pour vous frayer un chemin à travers les complexes rouages physiques, sociétaux et économiques des communautés. Vous pouvez effectuer les actions de compétence générales suivantes même si vous êtes inexpérimenté en Société. Se souvenir d'informations sur l'histoire locale, les personnalités prépondérantes, les institutions juridiques, la structure des sociétés et les cultures des humanoïdes. Le MJ peut accepter que la compétence Société s'applique à d'autres créatures jouant un rôle important dans la société de votre région, telles que la noblesse draconique dans un royaume d' humains dirigé par des dragons. Subsister dans une communauté en trouvant un abri, en quémandant ou en mendiant pour obtenir à manger.",
        "actions": [
            {
                "name"        : "Contrefaire",
                "cost"        : "",
                "traits"      : ["intermède", "secret"],
                "rank"        : "Q",
                "prerequisite": "",
                "condition"   : "Vous disposez du matériel d'écriture approprié à votre contrefaçon.",
                "description" : "Vous contrefaites un document, le plus souvent en une journée ou une semaine. Le MJ effectue un test de Société DD 20 en secret . Pour imiter la calligraphie d'une personne en particulier, vous devez posséder un document écrit de sa main. Sinon, vous devez simplement avoir déjà vu un document similaire, et vous bénéficiez d'un bonus de circonstances pouvant aller jusqu'à +4 à votre test (le MJ détermine ce bonus).",
                "results"     : [
                    { "label": "Succès", "text": "La contrefaçon est d'une qualité suffisante pour que les observateurs passifs ne la détectent pas." },
                    { "label": "Échec", "text": "Plusieurs signes évidents prouvent que le document est une contrefaçon, ce qui permet potentiellement aux observateurs passifs de la détecter." }
                ]
            }
        ],
        "general_actions": [
            { "name": "Déchiffrer un texte", "rank": "Q" },
            { "name": "Se souvenir", "rank": "I" },
            { "name": "Subsister", "rank": "I" }
        ]
    }
,
    "survie": {
        "label"       : "Survie",
        "description" : "Vous savez très bien comment vivre, trouver de la nourriture et construire des abris en pleine nature. En vous améliorant, vous découvrez les secrets du pistage et la méthode pour dissimuler vos traces. Vous pouvez toujours utiliser Survie pour Subsister même si vous êtes inexpérimenté. Subsister en pleine nature en trouvant de la nourriture et en construisant des abris.",
        "actions": [
            {
                "name"        : "S'orienter",
                "cost"        : "",
                "traits"      : ["exploration", "secret"],
                "rank"        : "I",
                "prerequisite": "",
                "condition"   : "",
                "description" : "Grâce aux étoiles, à la position du soleil, aux attributs géographiques, à la flore ou au comportement des animaux, vous savez toujours vous orienter en pleine nature. Vous effectuez généralement un test de Survie une seule fois par jour mais certains environnements ou changements peuvent nécessiter d'autres tests. Le MJ détermine le DD et le temps que vous prend cette activité (une minute environ, le plus souvent). Parfois, il vous faudra un rang de maîtrise minimum pour Vous orienter dans des régions plus inhabituelles. Sans boussole , vous subissez un malus d'objet de −2 aux tests pour Vous orienter. Exemples de tâches :",
                "tasks"       : [
                    { "rank_label": "Inexpérimenté", "text": "déterminer un point cardinal en observant le soleil" },
                    { "rank_label": "Qualifié", "text": "trouver une piste envahie par la végétation dans une forêt" },
                    { "rank_label": "Expert", "text": "trouver son chemin dans un labyrinthe végétal" },
                    { "rank_label": "Maître", "text": "trouver son chemin dans un labyrinthe complexe ou dans un désert presque dénué de traits distinctifs" },
                    { "rank_label": "Légendaire", "text": "trouver son chemin dans un royaume onirique en perpétuelle mutation" }
                ],
                "results"     : [
                    { "label": "Succès critique", "text": "Vous savez avec précision où vous vous trouvez. Si vous êtes dans un environnement où existent les points cardinaux, vous savez exactement dans quelles directions ils se trouvent." },
                    { "label": "Succès", "text": "Votre sens de l'orientation vous permet de ne pas vous perdre irrémédiablement. Si vous êtes dans un environnement où existent les points cardinaux, vous avez une idée de leur direction." }
                ]
            },
            {
                "name"        : "Dissimuler des traces",
                "cost"        : "",
                "traits"      : ["concentration", "exploration", "déplacement"],
                "rank"        : "Q",
                "prerequisite": "Qualifié en Survie",
                "condition"   : "",
                "description" : "Vous dissimulez vos traces en vous déplaçant à la moitié de votre Vitesse. Il n'est pas nécessaire d'effectuer un test de Survie pour Dissimuler des traces mais quiconque vous piste doit réussir un test de Survie contre votre DD de Survie s'il est supérieur au DD normal pour Pister . Vous pouvez, dans certains cas, Dissimuler des traces au cours d'une rencontre. Le cas échéant, Dissimuler des traces est une action unique sans le trait exploration .",
                "tasks"       : [],
                "results"     : []
            },
            {
                "name"        : "Pister",
                "cost"        : "",
                "traits"      : ["concentration", "exploration", "déplacement"],
                "rank"        : "Q",
                "prerequisite": "Qualifié en Survie",
                "condition"   : "",
                "description" : "Vous suivez des traces en vous déplaçant à la moitié de votre Vitesse. Suite à un test réussi pour Pister, vous pouvez continuer à suivre des traces à la moitié de votre Vitesse sans effectuer de tests supplémentaires pendant un maximum de 1 h. Vous pouvez Pister au cours d'une rencontre — Pister est alors une action unique sans le trait exploration mais vous devez effectuer des tests plus souvent. Vous effectuez un test de Survie quand vous commencez à Pister, une fois par heure, et chaque fois qu'une chose change les traces de manière significative. Exemples de tâches :",
                "tasks"       : [
                    { "rank_label": "Inexpérimenté", "text": "les traces laissées par une grande armée sur une route" },
                    { "rank_label": "Qualifié", "text": "les traces relativement fraîches d'un ours déchaîné qui a traversé les plaines" },
                    { "rank_label": "Expert", "text": "les traces d'une panthère leste à travers la jungle ou des traces après une averse" },
                    { "rank_label": "Maître", "text": "des traces masquées par les neiges hivernales, les traces d'une souris ou d'une créature plus petite ou des traces laissées sur des surfaces sur lesquelles on ne peut normalement pas trouver d'empreintes, comme de la roche nue" },
                    { "rank_label": "Légendaire", "text": "d'anciennes traces à travers les sables d'un désert balayé par le vent, des traces après un blizzard ou un ouragan violent" }
                ],
                "results"     : [
                    { "label": "Succès", "text": "Vous trouvez les traces ou continuez à suivre celles que vous avez déjà trouvées." },
                    { "label": "Échec", "text": "Vous perdez les traces mais vous pouvez réessayer au bout de 1 h." },
                    { "label": "Échec critique", "text": "Vous perdez les traces et ne pouvez pas réessayer pendant 24 h." }
                ]
            }
        ],
        "general_actions": [
            { "name": "Subsister", "rank": "I" }
        ]
    }
};
