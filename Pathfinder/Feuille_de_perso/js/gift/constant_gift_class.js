"use strict";
DON.CLASS = {
    ENUM: [
        {
            "name"       : "À trois temps",
            "level"      : "4",
            "traits"     : [
                "Barde"
            ],
            "required"   : [],
            "description": [
                "Vous apprenez le tour de magie de composition auto_awesomeÀ trois temps qui augmente votre rapidité et celle de vos alliés pendant un round."
            ]
        },
        {
            "name"       : "Aboutissement ciblé 1",
            "level"      : "10",
            "traits"     : [
                "Aboutissement",
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Votre attaque blesse et handicape votre adversaire. Choisissez une partie particulière de votre adversaire dans la liste ci-dessous et Frappez. Si vous touchez et blessez la cible, appliquez l'effet correspondant à la partie choisie. Le handicap dure jusqu'à la fin de votre prochain tour. Sur un coup critique, vous appliquez aussi un effet moindre qui dure pendant 1 minute.",
                [
                    "Bras (ou autre membre utilisé pour les attaques, tel qu'un tentacule) La cible est sentiment_very_dissatisfiedAffaiblie 2 . En cas de coup critique, elle est aussi sentiment_very_dissatisfiedAffaiblie 1 pendant 1 minute.",
                    "Tête La cible est sentiment_very_dissatisfiedStupéfiée 2 . En cas de coup critique, elle est aussi sentiment_very_dissatisfiedStupéfiée 1 pendant 1 minute.",
                    "Jambes La cible subit une pénalité de -3 mètres à ses Vitesses. En cas de coup critique, elle subit une pénalité de -1,50 mètre à ses Vitesses pendant 1 minute."
                ],
                "flareEffet : Aboutissement ciblé"
            ]
        },
        {
            "name"       : "Aboutissement combiné",
            "level"      : "6",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Vous combinez une série d'attaques par un puissant aboutissement. Vos frappes d'aboutissement ont une plus faible pénalité d'attaques multiples : -4 (ou -3 avec une arme agile) s'il s'agit de la deuxième attaque de votre tour ou -8 (ou -6 avec une arme agile) si c'est la troisième attaque ou une attaque subséquente de votre tour au lieu de -5 et -10, respectivement."
            ]
        },
        {
            "name"       : "Aboutissement de retraite 1",
            "level"      : "2",
            "traits"     : [
                "Aboutissement",
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Vous effectuez une attaque calculée sans baisser votre garde. Effectuez une Frappe au corps-à-corps avec l'effet d'échec suivant.",
                "Échec Vous Faites un pas par une action gratuite."
            ]
        },
        {
            "name"       : "Aboutissement déséquilibrant 1",
            "level"      : "10",
            "traits"     : [
                "Aboutissement",
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Votre excellente démonstration de vos prouesses au combat font trébucher votre adversaire. Faites une Frappe. Si vous touchez, la cible est repoussée de 1,50 mètre (ou de 3 mètres en cas de coup critique)."
            ]
        },
        {
            "name"       : "Aboutissement déséquilibrant 1",
            "level"      : "2",
            "traits"     : [
                "Aboutissement",
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Vous menez un assaut démonstratif qui laisse votre cible en déséquilibre. Faites une Frappe au corps-à-corps. Si vous touchez et infligez des dégâts, la cible est sentiment_very_dissatisfiedPrise au dépourvu jusqu'à la fin de son prochain tour."
            ]
        },
        {
            "name"       : "Aboutissement désespéré r",
            "level"      : "14",
            "traits"     : [
                "Guerrier",
                "Persévérer"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Vous achevez la dernière action de votre tour mais celui-ci n'est pas encore terminé.",
                "Vous donnez tout ce que vous avez pour pouvoir enchaîner une dernière manœuvre téméraire. Faites une action unique que vous connaissez qui possède le trait Persévérer. Vous renoncez à la capacité d'effectuer des réactions jusqu'au début de votre prochain tour. Cette action Persévérer utilise votre pénalité d'attaques multiples comme à l'ordinaire."
            ]
        },
        {
            "name"       : "Aboutissement dual 1",
            "level"      : "8",
            "traits"     : [
                "Aboutissement",
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez deux armes de corps-à-corps, une dans chaque main.",
                "Vous divisez vos attaques. Faites deux sports_martial_artsFrappes de corps-à-corps, une avec chaque arme requise, chacune contre un adversaire différent. Si la seconde Frappe est portée avec une arme non-agile, elle subit une pénalité de -2.",
                "Augmentez votre pénalité d'attaques multiples seulement après avoir effectué les deux Frappes."
            ]
        },
        {
            "name"       : "Aboutissement empalant 1",
            "level"      : "4",
            "traits"     : [
                "Aboutissement",
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Vous poignardez deux adversaires dans le même mouvement ou les assommez en même temps d'un seul coup porté.",
                "Faites une Frappe contondante ou perforante au corps-à-corps et comparez le jet d'attaque à la CA de deux adversaires. Le premier doit vous être adjacent et le second doit être adjacent et directement derrière votre premier adversaire en ligne droite par rapport à votre position.",
                "Lancez les dégâts une fois et appliquez-les à chaque créature que vous avez touché. Un aboutissement empalant compte comme deux attaques lorsque vous calculez votre pénalité d'attaques multiples."
            ]
        },
        {
            "name"       : "Aboutissement étourdissant 1",
            "level"      : "8",
            "traits"     : [
                "Aboutissement",
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Vous tentez un coup qui donne le tournis. Faites une Frappe au corps-à-corps. Si vous touchez, votre adversaire doit tenter un jet de casinoVigueur contre votre DD de classe avec les résultats suivants ; le jet de sauvegarde possède le trait mise hors de combat.",
                "Succès critique La cible n'est pas affectée.",
                "Succès La cible ne peut utiliser de réactions jusqu'à son prochain tour.",
                "Échec La cible est sentiment_very_dissatisfiedÉtourdie 1 .",
                "Échec critique La cible est sentiment_very_dissatisfiedÉtourdie 3 ."
            ]
        },
        {
            "name"       : "Aboutissement hémorragique 1",
            "level"      : "8",
            "traits"     : [
                "Aboutissement",
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Votre coup provoque une abondante hémorragie. Faites une Frappe tranchante ou perforante. Si vous touchez, la cible subit aussi des dégâts de saignement égaux aux dégâts de Frappe précise de votre aboutissement."
            ]
        },
        {
            "name"       : "Aboutissement illimité",
            "level"      : "20",
            "traits"     : [
                "Aboutissement",
                "Sophistication",
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Vos frappes s'enchaînent indéfiniment. Faites un pas et tentez un aboutissement qui nécessite une unique action. Cette Frappe obtient le trait bravade, en vous redonnant possiblement du panache. Si vous regagnez du panache, vous pouvez immédiatement tenter un autre aboutissement dans le cadre de cette action, en ignorant la restriction consistant à ne pas pouvoir utiliser des actions avec le trait attaque après un aboutissement."
            ]
        },
        {
            "name"       : "Aboutissement létal 1",
            "level"      : "18",
            "traits"     : [
                "Mort",
                "Aboutissement",
                "Bretteur"
            ],
            "required"   : [
                "Frappe précise 6d6"
            ],
            "description": [
                "Vous poignardez votre adversaire dans un organe vital, le tuant possiblement sur le champ. Faites une Frappe. Sur un succès, vous renoncez aux dégâts de Frappe précise de l'aboutissement.",
                "À la place, votre cible subit des dégâts supplémentaires de précision basés sur un jet de casinoVigueur contre votre DD de classe. Si votre Frappe est un coup critique, le résultat du jet de sauvegarde de la cible est d'un degré inférieur.",
                "Succès critique Vous infligez 6 dégâts de précision.",
                "Succès Vous infligez 6d6 dégâts de précision.",
                "Échec Vous infligez 12d6 dégâts de précision.",
                "Échec critique Vous infligez 18d6 dégâts de précision."
            ]
        },
        {
            "name"       : "Aboutissement mobile 1",
            "level"      : "12",
            "traits"     : [
                "Aboutissement",
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Vous attaquez durant votre mouvement. Marchez rapidement puis Frappez.",
                "Vous pouvez utiliser Aboutissement mobile pendant que vous sports_martial_artsCreusez , sports_martial_artsEscaladez , sports_martial_artsVolez ou sports_martial_artsNagez au lieu de Marcher rapidement si vous disposez des types de déplacement correspondant."
            ]
        },
        {
            "name"       : "Aboutissement parfait 1",
            "level"      : "14",
            "traits"     : [
                "Aboutissement",
                "Fortune",
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Vous concentrez votre panache en un assaut impeccable. Faites une Frappe, en lançant deux fois le jet d'attaque et en utilisant le meilleur résultat."
            ]
        },
        {
            "name"       : "Aboutissement précis",
            "level"      : "6",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [
                "Aboutissement assuré"
            ],
            "description": [
                "Même lorsque votre adversaire évite votre sports_martial_artsAboutissement assuré , vous pouvez toujours atteindre un point vital. En cas d'échec avec Aboutissement assuré, vous appliquez tous vos dégâts de Frappe précise au lieu de la moitié."
            ]
        },
        {
            "name"       : "Aboutissement revitalisant 1",
            "level"      : "16",
            "traits"     : [
                "Aboutissement",
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Votre assurance vous donne confiance en vous et en vos alliés. Faites une Frappe. Si elle touche, vous et tous les alliés dans les 9 mètres obtenez un nombre de Points de vie temporaires égal à la moitié de votre niveau.",
                "Échec Vous obtenez un nombre de Points de vie temporaires égal à la moitié de votre niveau.",
                "flareEffet : Aboutissement revitalisant"
            ]
        },
        {
            "name"       : "Accompagnement r",
            "level"      : "8",
            "traits"     : [
                "Barde",
                "Concentration",
                "Manipulation"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Un allié dans les 9 m Lance un sort.",
                "Vous utilisez vos représentations pour compléter l'incantation des sorts d'un allié, lui fournissant l'énergie magique pour ses sorts à sa place. Faites un test de casinoReprésentation , en utilisant un DD très élevé pour le niveau de l'allié et soit vous dépensez un Point de focalisation (si le sort déclencheur est un sort focalisé) soit vous dépensez un emplacement de sort d'au moins 1 rang supérieur au sort déclencheur. Si vous réussissez le test de Représentation, le sort de votre allié ne lui coûte ni le Point de focalisation ni l'emplacement du sort que l'allié aurait normalement dû dépenser."
            ]
        },
        {
            "name"       : "Achat improbable (Enquêteur)",
            "level"      : "16",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [
                "Achat intuitif"
            ],
            "description": [
                "Cela paraît impossible, mais vous avez analysé tout les angles et êtes capable de tirer exactement l'objet dont vous avez besoin, même lorsque vous vous trouvez à l'autre bout du monde.",
                "Vous pouvez utiliser military_techPlanificateur prescient même si vous l'avez déjà utilisé après avoir acheté des biens et vous pouvez l'utiliser par une action unique au lieu d'une activité à deux actions, durant laquelle vous sports_martial_artsInteragissez pour sortir l'objet.",
                "De plus, cinq fois par jour, vous pouvez utiliser Planificateur prescient pour sortir un consommable courant dont le niveau est inférieur de 6 au vôtre."
            ]
        },
        {
            "name"       : "Achat improbable (Roublard)",
            "level"      : "18",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [
                "Achat intuitif"
            ],
            "description": [
                "Vous pouvez utiliser military_techPlanificateur prescient même si vous l'avez déjà utilisé après avoir acheté des biens et vous pouvez Interagir pour sortir l'objet par une action unique au lieu d'une activité à 2 actions. De plus, cinq fois par jour, vous pouvez utiliser Planificateur prescient pour sortir un consommable courant qui est de 6 niveaux inférieur au vôtre."
            ]
        },
        {
            "name"       : "Achat intuitif (Enquêteur)",
            "level"      : "6",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [],
            "description": [
                "Vous avez juste la chose dont vous avez besoin pour faire face à la situation. Vous obtenez les dons military_techPlanificateur prescient et military_techConsommable prescient .",
                "Lorsque vous utilisez Planificateur prescient, vous pouvez tirer de votre sac à dos (ou d'un contenant équivalent) l'objet par une activité nécessitant 2 actions, plutôt qu'en y passant 1 minute."
            ]
        },
        {
            "name"       : "Achat intuitif (Roublard)",
            "level"      : "8",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Vous vous arrangez pour disposer de la chose dont vous avez besoin pour faire face à la situation. Vous obtenez les dons military_techPlanificateur prescient et military_techConsommable prescient . Lorsque vous utilisez Planificateur prescient, vous pouvez tirer de votre sac à dos (ou d'un contenant équivalent) l'objet par une activité nécessitant 2 actions, plutôt qu'en y passant 1 minute."
            ]
        },
        {
            "name"       : "Acrobaties vexantes 1",
            "level"      : "6",
            "traits"     : [
                "Bravade",
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Vous vous déplacez autour de vos adversaires, en évitant habilement leurs réactions. Marchez rapidement jusqu'à la moitié de votre Vitesse au sol et faites un test d'Acrobaties. Comparez le résultat avec le DD de Réflexes de chaque ennemi dont l'allonge vous atteint lorsque vous avez débuté ou dans laquelle vous avez pénétré durant le déplacement, de manière séquentielle.",
                "Succès critique Ce déplacement ne déclenche pas de réaction de l'ennemi, et l'ennemi est sentiment_very_dissatisfiedPris au dépourvu par rapport à vous jusqu'à la fin de votre tour.",
                "Succès Ce déplacement ne déclenche pas de réaction de l'ennemi.",
                "Échec critique Votre déplacement s'arrête immédiatement lorsque vous entrez dans l'allonge de la créature. Si vous avez débuté dans l'allonge de la créature, vous ne vous déplacez pas."
            ]
        },
        {
            "name"       : "Adepte de la furtivité",
            "level"      : "10",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [
                "maître en Discrétion"
            ],
            "description": [
                "Il est presque impossible de vous repérer. Quand vous obtenez un échec à une action pour sports_martial_artsÊtre furtif , celui-ci se transforme en succès. Vous pouvez toujours obtenir un échec critique."
            ]
        },
        {
            "name"       : "Adepte des parchemins",
            "level"      : "10",
            "traits"     : [
                "Magicien"
            ],
            "required"   : [
                "expert en Artisanat"
            ],
            "description": [
                "Lors de vos préparatifs quotidiens, vous pouvez créer deux parchemins temporaires contenant des sorts arcaniques issus de votre grimoire. Ces parchemins suivent les règles normales des parchemins, avec quelques restrictions. Les parchemins doivent être de niveaux différents et les deux sorts d'au moins deux niveaux de moins que votre sort de plus haut niveau. Tout parchemin ainsi créé devient non magique dès vos prochains préparatifs quotidiens. Un parchemin temporaire n'a aucune valeur. Comme à l'ordinaire pour un parchemin, il s'agit d'objets consommables de faible encombrement, et une personne tenant l'objet dans une main peut lancer le sort qu'il contient s'il figure sur sa liste de sorts, en utilisant son modificateur d'attaque de sort et son DD du sort",
                "Si vous êtes maître dans la maîtrise du DD des sorts arcaniques, vous pouvez créer trois parchemins temporaires lors de vos préparatifs quotidiens et si vous êtes légendaire, vous pouvez en créer quatre."
            ]
        },
        {
            "name"       : "Adjuvant altéré",
            "level"      : "8",
            "traits"     : [
                "Alchimiste",
                "Exploration"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez ou portez du Matériel d'alchimiste.",
                "Parfois, vous devez adapter vos mélanges alchimiques à de nouvelles situations. En 10 minutes, vous transformez un objet que vous avez créé avec Alchimie avancée en un objet similaire. Vous pouvez changer une bombe alchimique en un autre type de bombe alchimique, un élixir en un autre type d'élixir ou un poison en un autre type de poison. S'il n'est pas évident que deux consommables alchimiques sont similaires, c'est le MJ qui décide. Vous devez connaître la formule du nouvel objet et le nouvel objet doit être d'un niveau d'objet identique ou inférieur à celui de l'objet d'origine. Le nouvel objet conserve toujours le trait imprégné et reste efficace aussi longtemps que l'objet d'origine."
            ]
        },
        {
            "name"       : "Adjuvant improvisé 1",
            "level"      : "2",
            "traits"     : [
                "Alchimiste",
                "Concentration",
                "Manipulation"
            ],
            "required"   : [],
            "description": [
                "Fréquence Une fois par jour",
                "Conditions Vous avez moins que votre nombre maximum de fioles polyvalentes et vous tenez ou maniez du Matériel d'alchimiste.",
                "Vous récupérez suffisamment d'ingrédients dans ce qui reste de votre Matériel d'alchimiste pour produire quelques fioles polyvalentes de plus à la volée. Tentez un test d' casinoArtisanat . Le DD est généralement un DD de difficulté standard pour votre niveau, mais le MJ peut attribuer un DD différent en fonction des circonstances. Le nombre de fioles que vous récupérez dépend du résultat de votre test (jusqu'à votre maximum).",
                "Succès critique Vous récupérez 3 fioles polyvalentes.",
                "Succès Vous récupérez 2 fioles polyvalentes.",
                "Échec Vous récupérez 1 fiole polyvalente.",
                "Échec critique Vous ne récupérez aucune fiole polyvalente."
            ]
        },
        {
            "name"       : "Afflux de sang de fer 1",
            "level"      : "14",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "Posture de sang de fer"
            ],
            "description": [
                "Conditions Vous êtes dans la military_techPosture du sang-de-fer",
                "Vous vous cuirassez en vous apprêtant à encaisser des attaques imminentes et à utiliser vos muscles pour absorber les impacts. Vous bénéficiez des avantages du trait parade de votre balayage de fer (qui vous confère un bonus de circonstances de +1 à la CA jusqu'au début de votre prochain tour) et la résistance conférée par la Posture du sang-de-fer est à présent égale à votre modificateur de Force (s'il est plus élevé) pendant la même durée."
            ]
        },
        {
            "name"       : "Agilité gracieuse",
            "level"      : "10",
            "traits"     : [
                "Guerrier"
            ],
            "required"   : [],
            "description": [
                "Vos mouvements gracieux avec les armes agiles sont au-delà de toute comparaison. Votre pénalité d'attaques multiples avec les armes agiles et les attaques à mains nues agiles sont de -3 pour votre deuxième attaque et de -6 pour les suivantes (au lieu de -4 et -8)."
            ]
        },
        {
            "name"       : "Agression jumelée 1",
            "level"      : "1",
            "traits"     : [
                "Sophistication",
                "Rôdeur"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez deux armes de corps-à-corps, chacune dans une main différente.",
                "Vous attaquez rapidement votre proie avec chacune de vos deux armes, combinant potentiellement leurs dégâts en une unique attaque dévastatrice. Faites deux Frappes contre votre proie, une avec chacune des armes requises. Si les deux touchent, combinez leurs dégâts avant de les appliquer face à ses résistances et ses faiblesses. Vous appliquez normalement votre pénalité d'attaques multiples à ces Frappes."
            ]
        },
        {
            "name"       : "Aide du gardien 1",
            "level"      : "8",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [],
            "description": [
                "Vous signalez les vulnérabilités présentes de votre proie, faisant bénéficier un allié des avantages décrits dans sports_martial_artsChasser une proie et ceux de votre Spécialité du chasseur jusqu'à la fin de son prochain tour. Selon que vous transmettez ces informations par gestes ou par la voix, cette action possède soit le trait visuel, soit le trait audible."
            ]
        },
        {
            "name"       : "Ailes de rage du dragon 1",
            "level"      : "12",
            "traits"     : [
                "Barbare",
                "Transformation",
                "Rage"
            ],
            "required"   : [
                "instinct du dragon"
            ],
            "description": [
                "Des ailes de dragon de la même couleur que le dragon que vous avez choisi surgissent soudain de votre dos. Tant que vous êtes enragé, Vous obtenez une Vitesse de vol égale à votre Vitesse au sol. Si vous êtes en train de voler au moment où votre rage prend fin, vous commencez à chuter mais la transformation ne prend fin qu'au dernier instant, ce qui vous permet de ne pas subir de dégâts de chute et d'atterrir sur vos pieds. Cette action acquiert le trait de la tradition de votre instinct de dragon."
            ]
        },
        {
            "name"       : "Aisance gracieuse 1",
            "level"      : "16",
            "traits"     : [
                "Guerrier",
                "Posture"
            ],
            "required"   : [
                "Double taille"
            ],
            "description": [
                "En adoptant la bonne position, votre main secondaire peut frapper comme le ferait le dard d'un scorpion. Tant que vous êtes dans cette posture, si vous effectuez votre deuxième Frappe grâce à military_techDouble taille avec une arme agile, Double taille compte comme une attaque pour calculer votre pénalité d'attaques multiples."
            ]
        },
        {
            "name"       : "Alchimie durable",
            "level"      : "4",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Vous avez appris à mieux utiliser votre énergie afin d'allonger légèrement l'effet de vos décoctions éphémères. Quand vous utilisez sports_martial_artsAlchimie rapide pour créer un outil ou un élixir alchimique, l'efficacité de cet outil ou élixir persiste jusqu'à la fin de votre prochain tour, au lieu du début de votre prochain tour."
            ]
        },
        {
            "name"       : "Alchimie efficiente (Alchimiste)",
            "level"      : "4",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Depuis le temps que vous avez passé à étudier et expérimenter, avez appris à doser vos formules afin d'obtenir des lots plus importants qui ne nécessitent pas davantage d'attention. Augmentez le nombre d'objets que vous pouvez créer chaque jour avec Alchimie avancée à 6 + votre modificateur d'intelligence.",
                "De plus, quand vous sports_martial_artsFabriquez des objets alchimiques au cours d'un intermède, vous pouvez en créer deux fois plus en un seul lot sans passer du temps de préparation supplémentaire. Par exemple, si vous créez des workÉlixirs de vie lors d'un intermède, vous pouvez en fabriquer jusqu'à huit en un seul lot au lieu de quatre. Cela ne change cependant pas le nombre de réactifs alchimiques ou autres ingrédients requis pour fabriquer chaque objet et ne change pas davantage votre rythme de production pour les jours passés au delà du temps d'intermède de base."
            ]
        },
        {
            "name"       : "Alchimie efficiente avancée",
            "level"      : "10",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [
                "Alchimie efficiente"
            ],
            "description": [
                "Vous fabriquez un lot encore plus important d'objets alchimiques chaque matin. Augmentez le nombre maximum d'objets que vous pouvez créer avec Alchimie avancée à 8 + votre modificateur d'Intelligence ou à 10 + votre modificateur d'Intelligence si vous êtes de niveau 16 ou supérieur."
            ]
        },
        {
            "name"       : "Allégro",
            "level"      : "14",
            "traits"     : [
                "Barde"
            ],
            "required"   : [],
            "description": []
        },
        {
            "name"       : "Alliés instruits r",
            "level"      : "6",
            "traits"     : [
                "Barde",
                "Concentration"
            ],
            "required"   : [
                "Connaisseur"
            ],
            "description": [
                "Déclencheur Un allié bénéficiant d'un de vos sorts de composition est sujet d'un effet avec les traits audible, illusion, linguistique, de son ou visuel.",
                "Vous ajustez les propriétés de votre sort de composition pour convoyer une parcelle de votre connaissance défensive. Tous les alliés qui sont affectés par votre sort de composition obtiennent votre bonus de circonstances de +1 issu de military_techConnaisseur jusqu'au début de votre prochain tour. Enseigner à vos alliés renforce aussi vos propres compétences ; votre bonus de circonstances personnel issu de Connaisseur passe à +2 jusqu'au début de votre prochain tour.",
                "flareEffet : Alliés instruits"
            ]
        },
        {
            "name"       : "Âme de diamant",
            "level"      : "12",
            "traits"     : [
                "Moine"
            ],
            "required"   : [],
            "description": [
                "Vous avez fortifié votre corps et votre esprit pour qu'ils résistent aux effets surnaturels. Vous bénéficiez d'un bonus de statut de +1 aux jets de sauvegarde contre la magie."
            ]
        },
        {
            "name"       : "Analyse de faiblesse 1",
            "level"      : "6",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [
                "Attaque sournoise 2d6"
            ],
            "description": [
                "Conditions Vous devez avoir identifié une créature avec sports_martial_artsSe souvenir .",
                "Votre connaissance de la physiologie d'une créature vous aide à attaquer avec précision. Vous étudiez soigneusement une créature que vous avez identifiée pour trouver les points particulièrement faibles de son positionnement ou de sa forme physique. La prochaine fois que vous infligez des dégâts d'attaque sournoise à la créature choisie avec une Frappe avant la fin de votre tour, ajoutez 2d6 dégâts de précision supplémentaires.",
                "Aux niveaux 11, les dégâts supplémentaires passent à 3d6 et à 4d6 au niveau 17."
            ]
        },
        {
            "name"       : "Antimagie blasonnée",
            "level"      : "12",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [
                "Arsenal Blasonné"
            ],
            "description": [
                "Le symbole de votre divinité vous protège contre la magie offensive. Quand vous blasonnez votre arsenal, vous pouvez choisir l'un des effets suivants au lieu de ceux qui sont indiqués dans ce don. Ces effets imposent les mêmes restrictions que les options de base.",
                [
                    "Bouclier Quand l'utilisateur a Levé son bouclier, il ajoute le bonus de circonstances du bouclier aux jets de sauvegarde contre la magie et il peut utiliser Blocage au bouclier contre les dégâts des sorts ennemis.",
                    "Arme Quand celui qui manie l'arme obtient un coup critique avec l'arme, il peut tenter de contrer un sort sur sa cible, en utilisant la moitié de son niveau comme rang de contre. S'il tente de le faire, le symbole blasonné disparaît immédiatement."
                ],
                "flareEffet : Antimagie blasonnée"
            ]
        },
        {
            "name"       : "Apogée divine",
            "level"      : "18",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez déverser de la puissance divine dans un objet, permettant à son porteur de dépasser ses limites. Lorsque vous terminez vos préparatifs quotidiens, vous pouvez toucher un objet magique porté qui n'a pas le trait apogée. Il obtient le trait apogée jusqu'à vos prochains préparatifs quotidiens et vous choisissez l'un des attributs divins de votre divinité. L'objet augmente le modificateur d'attribut de 1 ou le passe à +4, selon ce qui est le plus avantageux. Un personnage ne peut bénéficier que d'un seul objet d'apogée à la fois, comme à l'ordinaire."
            ]
        },
        {
            "name"       : "Appel au compagnon",
            "level"      : "4",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "un compagnon animal"
            ],
            "description": [
                "Vous pouvez pousser votre compagnon à faire le maximum.",
                "Vous dépensez 2 actions au lieu de 1 pour sports_martial_artsDiriger un animal quand vous donnez un ordre à votre compagnon animal. Le cas échéant, celui-ci peut faire une action supplémentaire."
            ]
        },
        {
            "name"       : "Appel de la nature",
            "level"      : "2",
            "traits"     : [
                "Druide"
            ],
            "required"   : [],
            "description": [
                "Vous convoquez des créatures sauvages pour qu'elles viennent à votre aide. Vous pouvez passer 10 minutes en symbiose avec la nature pour remplacer l'un des sorts que vous avez préparés dans l'un de vos emplacements de sort de druide par un sort de auto_awesomeConvocation d'animal ou de auto_awesomeConvocation de plantes et de champignons du même rang."
            ]
        },
        {
            "name"       : "Appel des outils mystiques 1",
            "level"      : "4",
            "traits"     : [
                "Concentration",
                "Téléportation",
                "Magicien"
            ],
            "required"   : [
                "lien arcanique"
            ],
            "description": [
                "Vous êtes lié de manière mystique à votre objet lié et pouvez toujours le retrouver, même si vous l'avez perdu. Vous téléportez votre objet lié ou votre livre de sorts à vous. L'objet apparaît dans votre main si vous disposez d'une main libre ou à vos pieds si vos mains sont occupées. L'objet doit être dans un rayon d'1,5 km de vous et de 1 Encombrement ou moins."
            ]
        },
        {
            "name"       : "Appel et réponse 1",
            "level"      : "8",
            "traits"     : [
                "Audible",
                "Barde",
                "Concentration",
                "Mutamagie"
            ],
            "required"   : [],
            "description": [
                "Votre composition prend la forme d'un chant appel et réponse, qui permet à vos alliés de continuer l'effet sans vous. Si votre prochaine action consiste à Lancer un tour de magie de composition avec une durée d'un round, il devient un appel.",
                "Tant que le sort est actif, un allié de votre choix affecté par le sort peut apporter la réponse à votre appel au prix d'une action unique qui possède les traits audible et concentration pour étendre la durée du sort d'un round. Un seul allié peut répondre à un appel donné et répondre à la réponse de l'allié n'a pas d'effet supplémentaire."
            ]
        },
        {
            "name"       : "Appelle-fée",
            "level"      : "8",
            "traits"     : [
                "Druide"
            ],
            "required"   : [],
            "description": [
                "Vous avez appris certains des subterfuges que les fées utilisent pour plier la magie primordiale pour créer des illusions et des supercheries avec la magie primordiale.",
                "Ajoutez auto_awesomeDéguisement illusoire , auto_awesomeObjet illusoire et auto_awesomeScène illusoire à votre liste de sorts que vous pouvez utiliser comme des sorts primordiaux."
            ]
        },
        {
            "name"       : "Après vous f",
            "level"      : "2",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Vous allez lancer l'initiative.",
                "Vous autorisez vos adversaires à faire le premier mouvement dans une démonstration incroyable de confiance en vos talents. Vous ne tirez pas l'initiative, au lieu de quoi vous consentez à être le dernier. Vous obtenez du flarePanache . Si plus d'un personnage utilise cette capacité ou une autre capacité pour être le dernier, utilisez les règles normales pour résoudre une égalité : PNJ et monstres agissent avant les PJ et, au sein de ces groupes, les créatures peuvent choisir dans quel ordre elles agissent."
            ]
        },
        {
            "name"       : "Arbalétrier émérite 1",
            "level"      : "1",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez une arbalète ayant rechargement 1 ou plus.",
                "Vous savez parfaitement comment fonctionne une arbalète qui vous permet de la recharger pendant que vous vous déplacez hors de la ligne de mire des ennemis. Vous pouvez soit sports_martial_artsFaire Diversion ou vous sports_martial_artsMettre à l'abri , puis Interagir pour recharger. Comme à l'ordinaire, vous devez remplir les conditions pour vous Mettre à l'abri : Vous bénéficiez d'un abri, vous vous trouvez près d'une caractéristique de votre environnement derrière laquelle vous abriter ou êtes sentiment_very_dissatisfiedÀ terre ."
            ]
        },
        {
            "name"       : "Aria fatale",
            "level"      : "20",
            "traits"     : [
                "Barde"
            ],
            "required"   : [],
            "description": [
                "Vos chansons submergent la cible d'une émotion insoutenable, pouvant la frapper mortellement sur place. Vous apprenez le sort de composition auto_awesomeAria fatale ."
            ]
        },
        {
            "name"       : "Arme au clair 1",
            "level"      : "2",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Vous dégainez et attaquez dans le même mouvement. Vous interagissez pour dégainer une arme, puis soit vous frappez, soit vous utilisez un aboutissement en une action. Vous devez toujours remplir les autres conditions pour utiliser un aboutissement et toute Frappe que vous portez doit être faite avec l'arme que vous avez dégainée."
            ]
        },
        {
            "name"       : "Arme divine f",
            "level"      : "6",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [],
            "description": [
                "Fréquence Une fois par tour",
                "Déclencheur Vous finissez de Lancer un sort en utilisant l'un de vos emplacements de sort divin lors de votre tour",
                "Vous siphonnez l'énergie résiduelle du sort dans une arme que vous maniez. Jusqu'à la fin de votre tour, l'arme inflige 1d4 dégâts spirituels supplémentaires. Si vous êtes saint ou impie, les Frappes avec l'arme obtiennent aussi ce trait et les dégâts supplémentaires passent à 2d4 contre les créatures de l'alignement opposé."
            ]
        },
        {
            "name"       : "Arme empoisonnée 1",
            "level"      : "4",
            "traits"     : [
                "Manipulation",
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez une arme.",
                "Vous appliquez un poison de contact ou un poison de blessure sur l'arme requise. Si vous disposez d'une main disponible, vous pouvez Interagir pour prendre un poison au cours de cette action. Ce poison peut être un des poisons de blessure simples que vous pouvez créer grâce à ce don ou tout autre poison de contact ou de blessure que vous avez acquis.",
                "Spécial Au cours de vos préparatifs quotidiens, vous pouvez préparer un nombre de poisons de blessure simples égal à votre niveau. Cela suit les règles des poisons de blessure, sauf qu'ils infligent casino1d4 dégâts de poison sans jet de sauvegarde. Vous seul pouvez appliquer ces poisons proprement et ils expirent au cours de vos prochains préparatifs quotidiens."
            ]
        },
        {
            "name"       : "Arme empoisonnée améliorée",
            "level"      : "8",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [
                "Arme empoisonnée"
            ],
            "description": [
                "Vous administrez des poisons de manière à en optimiser les effets nocifs. Quand vous enduisez votre arme d'un poison simple avec military_techArme empoisonnée , le poison inflige casino2d4 dégâts de poison au lieu d'1d4 dégâts de poison. Vous ne gâchez pas le poison enduit avec Arme empoisonnée si vous obtenez un échec critique sur votre jet d'attaque."
            ]
        },
        {
            "name"       : "Arme en main 1",
            "level"      : "2",
            "traits"     : [
                "Franc-tireur",
                "Rôdeur",
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Vous dégainez votre arme et attaquez d'un même geste. Vous Interagissez pour dégainer votre arme, puis Frappez avec celle-ci."
            ]
        },
        {
            "name"       : "Arme immaculée",
            "level"      : "10",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "Arme verdoyante"
            ],
            "description": [
                "Votre arme verdoyante peut franchir les résistances des créatures magiques. L'arme est considérée comme en fer froid et en argent. Si vous obtenez un succès critique pour toucher une créature qui possède une faiblesse contre le fer froid ou l'argent, la cible subit casino1d6 dégâts de saignement parce que les énergies primordiales contenues dans votre arme ralentissent sa guérison naturelle."
            ]
        },
        {
            "name"       : "Arme punitive",
            "level"      : "10",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [
                "Punition divine"
            ],
            "description": [
                "La force de punition de votre divinité renforce votre corps pour que vous puissiez abattre l'ennemi et ses alliés. Après avoir infligé des dégâts spirituels avec votre Punition divine, vos Frappes d'arme ou à mains nues obtiennent votre trait saint ou impie et infligent jusqu'à la fin de votre tour, un montant de dégâts spirituels supplémentaires. Les dégâts spirituels supplémentaires sont égaux au rang du sort Guérison ou Mise à mal avec lequel vous avez infligé des dégâts spirituels et se cumulent avec les éventuels dégâts spirituels que l'arme inflige déjà (du fait d'une rune sainte, par exemple)."
            ]
        },
        {
            "name"       : "Arme verdoyante",
            "level"      : "1",
            "traits"     : [
                "Druide",
                "Exploration"
            ],
            "required"   : [],
            "description": [
                "Vous cultivez une graine qui peut éclore sous la forme d'un bâton, d'une liane fouet ou d'une autre arme. Vous passez 10 minutes à concentrer de l'énergie primordiale dans une graine, lui imprimant le potentiel de devenir une unique arme de niveau 0 dans le maniement de laquelle vous êtes qualifié et qui n'a aucune partie mécanique ou métallique. Lorsque vous portez la graine imprimée, vous pouvez dépenser une unique action sports_martial_artsInteragir pour provoquer sa croissance immédiate en cette arme. Une seconde action Interagir la ramène à sa forme de graine. Votre arme verdoyante fonctionne comme l'arme imprimée et peut être gravée avec des runes ou peut se voir fixer un talisman comme les autres, lesquels sont réprimés lorsque l'arme est sous sa forme de graine.",
                "Vous ne pouvez avoir qu'une unique graine verdoyante au même moment. Si vous en préparez une seconde, votre première graine verdoyante devient immédiatement un spécimen banal. N'importe quelle rune sur la graine précédente qui est valide pour la nouvelle graine se transfère entre les deux, sans aucun coût, mais les runes inapplicables sont réprimées."
            ]
        },
        {
            "name"       : "Armement ancestral",
            "level"      : "2",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "Armes monacales, un don vous permettant d'accéder aux armes qui ont un trait d'ascendance (tel qu'elfe ou orque)"
            ],
            "description": [
                "Vous mélangez les techniques monastiques avec les styles de combat ancestraux de votre peuple.",
                "Choisissez une ascendance dans laquelle vous avez accès à toutes les armes qui possèdent le trait correspondant. Pour vous, les armes de corps-à-corps avec ce trait d'ascendance et soit le trait agile ou finesse obtiennent le trait moine."
            ]
        },
        {
            "name"       : "Armes monacales",
            "level"      : "1",
            "traits"     : [
                "Moine"
            ],
            "required"   : [],
            "description": [
                "Vous êtes formé au maniement des armes de votre monastère ou de votre école. Vous avez accès aux armes peu courantes ayant le trait moine et vous êtes qualifié au maniement des armes de moine simples et de guerre. Quand votre degré de maîtrise avec les attaques à mains nues passe à expert ou maître, votre degré de maîtrise avec ces armes fait de même. Si vous avez une familiarité avec les armes agiles ou de finesse (comme par le biais du don de Familiarité avec les armes d'hommes-félins), ces armes acquièrent aussi le trait moine pour vous. Vous pouvez utiliser les armes de moine de corps-à-corps avec n'importe quels dons ou capacités de moine nécessitant normalement des attaques à mains nues, mais ce n'est pas le cas si le don ou la capacité nécessite l'utilisation d'un seul type d'attaque particulier, telle que Posture de la grue. Si vous obtenez le bénéfice des effets critiques spécialisés pour les armes à mains nues (avec la capacité de classe de frappe experte, par exemple), vous gagnez cette capacité également pour les armes monacales."
            ]
        },
        {
            "name"       : "Armure du prêtre combattant",
            "level"      : "2",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [
                "Doctrine de prêtre combattant"
            ],
            "description": [
                "Votre entraînement vous a aidé à vous adapter à des armures toujours plus lourdes. Vous êtes qualifié avec les armures lourdes. Chaque fois que vous obtenez une capacité de classe qui vous confère une maîtrise experte ou supérieure avec les armures intermédiaires, vous obtenez également cette maîtrise avec les armures lourdes. Vous traitez les armures que vous portez d'au moins 2 Encombrements comme si elles étaient d'1 Encombrement de moins (avec un minimum de 1 Encombrement)."
            ]
        },
        {
            "name"       : "Armure sacrifiée r",
            "level"      : "8",
            "traits"     : [
                "Champion"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Vous êtes touché par une Frappe qui inflige des dégâts physiques.",
                "Grâce à une prémonition divine, vous déplacez votre corps pour amoindrir l'impact d'une attaque. Réduisez les dégâts que vous subissez d'un montant égal à deux fois le niveau de votre armure. Votre armure devient sentiment_very_dissatisfiedBrisée , réduisant ses Points de vie au niveau de son Seuil de rupture. Si votre armure était déjà endommagée, elle est détruite à la place."
            ]
        },
        {
            "name"       : "Arracher avec violence 2",
            "level"      : "4",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Vous portez une attaque rapide et dérobez votre adversaire durant le processus. Faites une Frappe au corps-à-corps contre un ennemi adjacent. Si vous le touchez et lui infligez des dégâts d'attaque sournoise, vous pouvez aussi tenter de sports_martial_artsVoler la cible, même si elle est en train de se battre."
            ]
        },
        {
            "name"       : "Arrivée explosive f",
            "level"      : "6",
            "traits"     : [
                "Concentration",
                "Manipulation",
                "Mutamagie",
                "Magicien"
            ],
            "required"   : [],
            "description": [
                "La créature que vous avez invoquée apparaît avec une détonation de runes arcaniques. Si votre prochaine action consiste à Lancer un sort avec le trait convocation, toutes les créatures dans une crop_freeémanation de 3 mètres autour de la créature convoquée subissent 1d4 dégâts de feu par rang de sort. Si la créature convoquée possède le trait acide, froid, électricité, son ou spirituel, vous pouvez infliger des dégâts de ce type à la place."
            ]
        },
        {
            "name"       : "Arrogance draconique",
            "level"      : "1",
            "traits"     : [
                "Barbare",
                "Rage"
            ],
            "required"   : [
                "instinct du dragon"
            ],
            "description": [
                "Peu peuvent vous faire changer d'objectifs lorsque la fureur du combat vous submerge. Lorsque vous êtes en rage, vous obtenez un bonus de statut de +2 aux jets de sauvegarde contre les effets d'émotion."
            ]
        },
        {
            "name"       : "Arsenal blasonné",
            "level"      : "2",
            "traits"     : [
                "Prêtre",
                "Exploration"
            ],
            "required"   : [],
            "description": [
                "En gravant minutieusement une image sacrée sur un objet physique, vous vous cuirassez pour la bataille. Vous pouvez passer 10 minutes à blasonner le symbole de votre divinité sur une arme ou un bouclier. Le symbole ne disparaît qu'au bout d'un an mais si vous utilisez Arsenal blasonné, tout symbole que vous avez précédemment gravé et tout symbole déjà gravé sur cet objet disparaît instantanément.",
                "L'objet emblasoné devient un symbole religieux de votre divinité en plus de sa destination première et il bénéficie d'un autre avantage déterminé par le type d'objet. Les avantages s'appliquent pour les seuls fidèles de la divinité représentée par le symbole, mais les autres peuvent toujours utiliser l'objet normalement.",
                [
                    "Bouclier Le bouclier bénéficie d'un bonus de statut de +1 à sa Solidité (il réduit ainsi plus de dégâts avec la réaction Blocage au bouclier).",
                    "Arme L'utilisateur de l'arme bénéficie d'un bonus de statut de +1 aux jets de dégâts."
                ],
                "flareEffet : Arsenal blasonné"
            ]
        },
        {
            "name"       : "Arsenal du sorcier",
            "level"      : "1",
            "traits"     : [
                "Sorcier"
            ],
            "required"   : [],
            "description": [
                "Le pouvoir de votre patron change votre corps pour s'assurer que vous ne soyez jamais sans défenses. Vous obtenez une des attaques à mains nues suivantes :",
                [
                    "Dents d'acier D'un clic de vos mâchoires, vos dents se transforment en longues pointes métalliques. Vous obtenez une attaque à main nues de mâchoire qui inflige 1d8 dégâts perforants et qui possède le trait pugilat",
                    "Ongles surnaturels Vos ongles sont de manière surnaturelle longs et acérés. Vous obtenez une attaque à mains nues d'ongles qui inflige 1d6 dégâts tranchants et qui possède les trait pugilat, finesse et mains nues",
                    "Pilosité vivante Vous pouvez faire grandir ou raccourcir instantanément vos cheveux, vos sourcils, votre barbe ou vos moustaches jusqu'à une longueur de plusieurs dizaines de centimètres et utiliser votre pilosité comme une arme, bien que votre contrôle ne soit pas suffisant pour vous permettre des tâches qui nécessitent davantage de dextérité. Vous obtenez une attaque à main nues de cheveux qui inflige 1d4 dégâts contondants, qui est dans le groupe pugilat et qui possède les traits finesse, désarmement, croc-en-jambe et mains nues."
                ],
                "Spécial Vous pouvez prendre ce don plus d'une fois, en obtenant une attaque à mains nues différente à chaque fois."
            ]
        },
        {
            "name"       : "Arsenal modèle",
            "level"      : "20",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "allié divin (lame), Esprit lame radieux"
            ],
            "description": [
                "Ajoutez les runes de propriété suivantes à la liste que vous avez choisie pour votre arsenal béni : workAnimée , workEffrayante supérieure , workDouloureuse , workAcérée et workVitalisante supérieure .",
                "Si vous possédez le don military_techArsenal radieux , ajoutez workAstrale supérieure and workBrillante supérieure également à la liste.",
                "De plus, vous pouvez changer la rune que vous avez choisie pendant la journée pour une rune différente de votre liste par une unique action qui possède les traits concentration et divin. Changer la rune ne permet par de récupérer les capacités qui ne peuvent être utilisées qu'un nombre limité de fois.",
                "flareEffet : Arsenal béni"
            ]
        },
        {
            "name"       : "Arsenal radieux",
            "level"      : "10",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "Arsenal béni"
            ],
            "description": [
                "Votre arsenal béni irradie de puissance, améliorant encore l'arme que vous avez choisie. Lorsque vous choisissez l'arme pour votre arsenal béni au cours de vos préparatifs quotidiens, ajoutez les runes de propriété workAstrale et workBrillante à la liste des effets parmi laquelle vous pouvez choisir. Si vous êtes saint, ajoutez également la rune workSainte et si vous êtes impie, ajoutez aussi la rune workImpie .",
                "De plus, vous pouvez changer la rune que vous avez choisie pour la journée pour une rune différente de votre liste en y consacrant une activité de 10 minutes qui possède les traits concentration, divin et exploration. Changer la rune ne permet pas de récupérer des capacités qui ne peuvent être utilisées qu'un nombre limité de fois, tel que Guérison sainte de la rune sainte.",
                "flareEffet : Arsenal béni"
            ]
        },
        {
            "name"       : "Arsenal sanctifié 1",
            "level"      : "8",
            "traits"     : [
                "Prêtre",
                "Divin"
            ],
            "required"   : [
                "Trait saint ou impie"
            ],
            "description": [
                "Fréquence Une fois par round",
                "Vous touchez une arme pour l'accorder aux préceptes de votre divinité. Pendant un round cette arme obtient votre trait saint ou impie. Cette arme inflige 2d6 dégâts supplémentaires aux créatures au trait opposé. Par exemple, si vous avez le trait saint, l'arme inflige 2d6 dégâts spirituels supplémentaires aux créatures avec le trait impie. Si vous utilisez de nouveau Arsenal sanctifié, toute précédente utilisation expire."
            ]
        },
        {
            "name"       : "Arsenal sanctifié durable",
            "level"      : "14",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [
                "Arsenal sanctifié"
            ],
            "description": [
                "Lorsque vous sanctifiez votre arme, elle obtiendra le trait sanctifié pour une plus longue période. La durée de votre military_techArsenal sanctifié passe à une minute."
            ]
        },
        {
            "name"       : "Artificier rapide 1",
            "level"      : "1",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Vous conservez vos bombes et les réactifs liés à vos bombes à portée de main dans des poches d'où vous pouvez les sortir sans avoir à réfléchir. Vous Interagissez pour sortir une bombe, une fiole polyvalente ou utiliser sports_martial_artsAlchimie rapide pour créer une bombe, puis vous effectuez une sports_martial_artsFrappe avec la bombe. Si vous disposez de la capacité qui vous permet de créer plus d'une bombe à la fois avec Alchimie rapide (comme avec la capacité de classe Double préparation), vous ne pouvez effectuer de Frappe qu'avec une seule des bombes que vous créez avec cette action."
            ]
        },
        {
            "name"       : "Ascendance du sang",
            "level"      : "14",
            "traits"     : [
                "Ensorceleur"
            ],
            "required"   : [
                "Montée de sang"
            ],
            "description": [
                "Lorsque vous souhaitez bénéficier d'un effet de magie du sang par le biais de military_techMontée de sang , vous pouvez choisir de bénéficier de deux effets de magie du sang différents que vous connaissez. Les effets suivent les mêmes règles que celles données dans Montée de sang et chaque effet peut avoir une cible différente."
            ]
        },
        {
            "name"       : "Assaut à deux mains 1",
            "level"      : "4",
            "traits"     : [
                "Guerrier",
                "Sophistication"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez une arme de corps-à-corps à une main et disposez d'une main libre.",
                "Vous utilisez brièvement votre main libre pour améliorer la prise de votre arme et lui ajoutez juste assez de force pour délivrer un coup plus puissant sur votre adversaire. Effectuez une Frappe avec l'arme requise. Vous changez brièvement votre prise lors de la Frappe afin d'effectuer une attaque à deux mains. Si l'arme n'a normalement pas le trait deux mains, augmentez d'un échelon la taille de son dé de dégâts d'arme pour cette attaque. Si l'arme possède le trait deux mains, vous bénéficiez de l'avantage de ce trait et d'un bonus de circonstances aux dégâts égal au nombre de dés de dégâts de l'arme. Une fois la Frappe accomplie, votre deuxième main redevient libre et vous continuez de manier votre arme avec une main seulement. Cette action ne met pas fin à votre éventuelle posture ou aux effets des dons de guerrier dont les conditions nécessitent de disposer d'une main libre."
            ]
        },
        {
            "name"       : "Assaut avantageux 1",
            "level"      : "6",
            "traits"     : [
                "Guerrier",
                "Persévérer"
            ],
            "required"   : [],
            "description": [
                "Après avoir compromis le déplacement d'un ennemi, vous lui assénez un coup encore plus mortel. Faites une Frappe contre une créature sentiment_very_dissatisfiedÀ terre , sentiment_very_dissatisfiedAgrippée ou sentiment_very_dissatisfiedEntravée . Vous bénéficiez d'un bonus de circonstances aux dégâts sur cette Frappe égal au nombre de dés de dégâts de l'arme ou à ce nombre + 2 si vous maniez l'arme à deux mains. Cette Frappe obtient l'effet d'échec suivant.",
                "Échec Vous infligez à la créature un montant de dégâts égal au nombre de dés de dégâts d'arme ou à ce nombre + 2 si vous maniez l'arme à deux mains. Ces dégâts possèdent le même type de dégâts que l'arme."
            ]
        },
        {
            "name"       : "Assaut complémentaire 1",
            "level"      : "8",
            "traits"     : [
                "Barbare",
                "Rage"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous avez utilisé votre précédente action pour faire une Frappe au corps-à-corps qui a échoué.",
                "Même en face d'un échec, vous recommencez l'attaque, déterminé à réussir. Faites une Frappe avec la même arme, en ajoutant les traits prise d'élan et percutant à cette Frappe."
            ]
        },
        {
            "name"       : "Assaut courageux 1",
            "level"      : "10",
            "traits"     : [
                "Audible",
                "Barde",
                "Concentration",
                "Mutamagie"
            ],
            "required"   : [
                "Combattant (Muse de barde)"
            ],
            "description": [
                "D'un cri puissant, vous pouvez inciter un allié à attaquer. Si votre prochaine action consiste à lancer le tour de magie de composition auto_awesomeHymne de courage , un allié qui obtient le bonus de statut du sort peut immédiatement utiliser une réaction pour porter une Frappe au corps-à-corps."
            ]
        },
        {
            "name"       : "Assaut de positionnement 2",
            "level"      : "8",
            "traits"     : [
                "Guerrier",
                "Sophistication"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez une arme de corps-à-corps à deux mains et votre cible est dans votre allonge.",
                "À l'aide de coups contraignants, vous forcez votre adversaire à se déplacer vers l'endroit voulu. Faites une Frappe avec l'arme requise. Si vous touchez, vous sports_martial_artsRepositionnez la cible de 1,50 mètre."
            ]
        },
        {
            "name"       : "Assaut désarmant 1",
            "level"      : "8",
            "traits"     : [
                "Barbare",
                "Sophistication",
                "Rage"
            ],
            "required"   : [
                "qualifié en Athlétisme"
            ],
            "description": [
                "Vous attaquez avec suffisamment de force pour arracher l'arme des mains de votre adversaire. Faites une Frappe au corps-à-corps ; si vous touchez, vous pouvez effectuer un test d'Athlétisme pour sports_martial_artsDésarmer cet ennemi."
            ]
        },
        {
            "name"       : "Assaut fourbe 2",
            "level"      : "2",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [
                "qualifié en Discrétion"
            ],
            "description": [
                "Vous capitalisez sur la diversion que vous procure un allié. Vous sports_martial_artsÊtes furtif jusqu'à un adversaire adjacent à l'un de vos alliés. Vous pouvez lancer le test contre l'adversaire face auquel vous Êtes furtif, même s'il vous observe, comme si vous étiez Caché. Vous subissez une pénalité de -2 à votre test de Discrétion. Si votre test de Discrétion contre l'adversaire choisi est un succès, vous pouvez faire une Frappe au corps-à-corps contre cet adversaire à la fin de votre déplacement Furtif."
            ]
        },
        {
            "name"       : "Assaut partagé",
            "level"      : "12",
            "traits"     : [
                "Barde"
            ],
            "required"   : [
                "Assaut courageux"
            ],
            "description": [
                "Dans le feu de la bataille, vous pouvez partager la gloire avec un autre allié. Lorsque l'allié que vous avez choisi pour military_techOffensive courageuse obtient un coup critique sur la Frappe accordée par cette action, un autre allié affecté par votre sort de composition auto_awesomeHymne de courage peut immédiatement utiliser une réaction pour faire une Frappe au corps-à-corps. Cet effet ne se poursuit pas vers un troisième allié, même si le deuxième allié obtient un coup critique sur sa Frappe."
            ]
        },
        {
            "name"       : "Astuces de terraformation",
            "level"      : "12",
            "traits"     : [
                "Concentration",
                "Terre",
                "Ensorceleur"
            ],
            "required"   : [],
            "description": [
                "Vous savez comment canaliser les aspects transformateurs de votre magie du sang pour modifier votre environnement. Vous connaissez l'effet suivant de la magie du sang.",
                "Magie du sang - Astuces de terraformation Soit chaque espace adjacent à vous devient un terrain difficile, soit les espaces qui vous sont adjacents ne sont plus un terrain difficile. Cela n'a aucun effet sur le terrain très difficile et ne supprime pas les effets dommageables des terrains dangereux."
            ]
        },
        {
            "name"       : "Athlète enragé",
            "level"      : "4",
            "traits"     : [
                "Barbare"
            ],
            "required"   : [
                "expert en Athlétisme"
            ],
            "description": [
                "Les obstacles physiques ne suffisent pas à arrêter votre furie. Quand vous êtes enragé, vous obtenez une Vitesse d'escalade et une Vitesse de nage égales à votre Vitesse au sol, le DD de vos sports_martial_artsSauts en hauteur et de vos sports_martial_artsSauts en longueur est abaissé de 10. La distance pour un sports_martial_artsBond vertical passe à 1,50 mètre verticalement et votre distance pour un Bond horizontal passe à 4,50 mètres si votre Vitesse est d'au moins 4,50 mètres et à 6 mètres si votre Vitesse est d'au moins 9 mètres."
            ]
        },
        {
            "name"       : "Athlète flamboyant",
            "level"      : "4",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [
                "expert en Athlétisme"
            ],
            "description": [
                "Votre Panache vous permet d'accomplir d'incroyables faits : sports_martial_artsEscalader , sports_martial_artsNager et sports_martial_artsBondir bien au-delà de votre capacité normale. Lorsque vous avez du Panache, vous obtenez les avantages suivants.",
                [
                    "Vous obtenez une Vitesse d'escalade et de Natation égale à la moitié de votre Vitesse au sol.",
                    "Les DD de sports_martial_artsSauter en hauteur et de sports_martial_artsSauter en longueur sont diminués de 10. Cela ne peut se combiner avec d'autres capacités qui réduisent ces DD.",
                    "La distance que vous pouvez parcourir avec un sports_martial_artsBond vertical augmente de 1,50 mètre. La distance pour un Bond horizontal passe à 1,50 mètre si votre Vitesse au sol est d'au moins 4,50 mètres ou à 3 mètres si votre Vitesse est d'au moins 9 mètres."
                ]
            ]
        },
        {
            "name"       : "Atout du mystificateur r",
            "level"      : "18",
            "traits"     : [
                "Concentration",
                "Enquêteur",
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Vous spécifiez le déclencheur lorsque vous faites vos préparatifs quotidiens (voir Conditions ci-dessous).",
                "Conditions Quand vous effectuez vos préparatifs quotidiens, vous devez préciser pour cette réaction un déclencheur soumis aux mêmes restrictions que ceux de l'action Préparer. Vous choisissez également un unique sort dans les listes de sorts arcaniques, divins, occultes ou primordiaux de niveau 4 ou inférieur. Ce sort ne peut pas avoir de coût et son temps d'incantation ne peut pas dépasser 10 minutes. Le sort doit être capable de cibler une unique créature et vous devez être une cible valide.",
                "Que vous utilisiez des objets magiques trafiqués, vos déductions de l'étude des interactions magiques ou d'autres moyens, vous avez toujours un plan secondaire dans votre poche arrière pour les situations désespérées. Quand le déclencheur se produit, le sort prend effet. Le sort ne cible que vous, peu importe le nombre de créatures qu'il pourrait affecter normalement. Si vous avez défini des conditions de déclenchement particulièrement complexes, le MJ peut décider que le déclencheur ne fonctionne pas. Une fois que ce plan secondaire est déclenché, le sort est dépensé jusqu'à vos prochains préparatifs quotidiens."
            ]
        },
        {
            "name"       : "Attaque groupée",
            "level"      : "6",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Vous et vos alliés harassez un ennemi de concert. Vous pouvez prendre en tenaille un ennemi s'il est à la fois dans votre allonge et celle d'un allié. Vous et votre allié n'avez pas besoin d'être sur des côtés opposés. Cela profite à vos alliés ainsi qu'à vous mais seulement s'ils sont en tenaille avec vous et non les uns avec les autres. Les autres conditions pour prendre en tenaille doivent toujours être remplies."
            ]
        },
        {
            "name"       : "Atterrissage impressionnant r",
            "level"      : "10",
            "traits"     : [
                "Barbare"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Vous tombez d'au moins 3 mètres et atterrissez sur une surface solide",
                "Vous frappez le sol, le brisant autour de vous. Traitez la chute comme si elle était plus courte de 3 mètres. Vous atterrissez sur vos pieds. Le sol dans une crop_freeémanation de 1,50 mètre devient du terrain difficile. Toute créature dans l'émanation lorsque vous atterrissez subit casino5 dégâts contondants lorsque les débris les touchent et se trouve sentiment_very_dissatisfiedPrise au dépourvu jusqu'au début de son prochain tour."
            ]
        },
        {
            "name"       : "Audience de l'avatar",
            "level"      : "20",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [],
            "description": [
                "Vos services dévoués vous octroient certains privilèges divins. Premièrement, toute créature que vous rencontrez sait instinctivement que vous parlez au nom de votre divinité. Deuxièmement, si vous accomplissez un rituel de auto_awesomeCommunion pour contacter votre divinité, vous n'avez à payer aucun coût et vous obtenez automatiquement un succès critique. Troisièmement, une fois par jour, vous pouvez lancer auto_awesomeTéléportation interplanaire comme un sort divin inné, mais uniquement pour voyager vers le royaume de votre divinité. Quand vous le lancez de cette façon, son temps d'incantation est de une minute, votre symbole religieux est une clé planaire appropriée pour ce sort et vous apparaissez à l'endroit précis où vous souhaitez vous rendre. Si vous vous trouvez dans le royaume de votre divinité grâce à ce sort, vous pouvez retourner à l'endroit d'où vous êtes parti quand vous l'avez lancé, en effectuant une action unique qui possède les traits divin et concentration."
            ]
        },
        {
            "name"       : "Aura d'ancrage",
            "level"      : "14",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "Serment de fléau des fiélons"
            ],
            "description": [
                "Votre aura perturbe la téléportation des fiélons. Votre aura tente de contrer les sorts de téléportation lancés par des fiélons dans un rayon de 4,50 mètres, en utilisant le rang du sort et le DD de vos sorts de dévotion."
            ]
        },
        {
            "name"       : "Aura de courage",
            "level"      : "4",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "aura de champion, saint"
            ],
            "description": [
                "Vous tenez bon face au danger et inspirez vos alliés pour qu'ils fassent de même. À chaque fois que vous devenez Effrayé, réduisez de 1 la valeur de l'état (jusqu'à un minimum de 0). À la fin de votre tour, chaque allié se trouvant dans votre aura de champion réduit de 1 la valeur de son état Effrayé."
            ]
        },
        {
            "name"       : "Aura de désespoir",
            "level"      : "4",
            "traits"     : [
                "Peu courant",
                "Champion"
            ],
            "required"   : [
                "Aura de champion, Impie"
            ],
            "description": [
                "Votre présence telle une incarnation maléfique rend vos adversaires plus susceptibles à la peur et il leur est presque impossible de récupérer de leur peur lorsque vous êtes à proximité. Les adversaires dans votre aura de champion subissent une pénalité de circonstances de -1 à leurs jets de sauvegarde contre la terreur. De plus, un ennemi qui termine son tour dans votre aura de champion ne peut réduire la valeur de sa condition Effrayé en dessous de 1.",
                "flareEffet : Aura de Désespoir"
            ]
        },
        {
            "name"       : "Aura de détermination",
            "level"      : "14",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "Aura du champion"
            ],
            "description": [
                "Votre aura protège contre les pouvoirs qui voudraient déformer votre corps ou votre esprit. Vous et tous vos alliés dans votre aura de champion obtenez un bonus de statut de +1 aux jets de sauvegarde contre les effets mentaux, de métamorphose et de transformation."
            ]
        },
        {
            "name"       : "Aura de foi",
            "level"      : "12",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "Saint ou impie"
            ],
            "description": [
                "Vous irradiez une aura de pure croyance qui imprègne vos attaques et celles de vos alliés proches de puissance sainte. Chaque allié consentant dans votre aura de champion ajoute le trait Saint à ses Frappes si vous êtes saint ou le trait Impie si vous êtes Impie."
            ]
        },
        {
            "name"       : "Aura de vengeance",
            "level"      : "14",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "exaltation, Serment de vengeance"
            ],
            "description": [
                "Quand vous demandez aux autres d'appliquer des représailles, vous améliorez également la précision de leurs coups. Quand vous utilisez Frappe punitive, vos alliés qui Frappent subissent une pénalité de -2 seulement, au lieu de -5."
            ]
        },
        {
            "name"       : "Aura de vertu",
            "level"      : "14",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "Aura de champion, Saint"
            ],
            "description": [
                "VVotre aura vertueuse atténue la puissance du mal et empêche l'impie de vous échapper. Vous et tous les alliés dans votre aura de champion gagnez une résistance de 5 aux sorts impies, aux frappes impies et aux autres effets impies. Si un sort ou un effet de téléportation téléporterait une créature impie hors de l'aura de votre champion, votre aura tente de le contrer, en utilisant le rang et le DD de vos sorts de dévotion"
            ]
        },
        {
            "name"       : "Aura de vie",
            "level"      : "14",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "Aura de champion"
            ],
            "description": [
                "Votre aura vous protège contre la puissance du Vide. Vous et tous les alliés dans votre aura de champion gagnez une résistance de 5 aux dégâts de vide et un bonus de statut de +1 aux jets de sauvegarde contre les effets de vide."
            ]
        },
        {
            "name"       : "Avance défensive 2",
            "level"      : "1",
            "traits"     : [
                "Champion",
                "Sophistication",
                "Gardien"
            ],
            "required"   : [],
            "description": [
                "Sous la protection de votre bouclier, vous plongez dans la bataille ! Vous Levez votre bouclier et Marchez rapidement. Si vous terminez votre déplacement avec au moins un ennemi dans votre allonge au corps-à-corps, vous pouvez effectuer une Frappe au corps-à-corps contre cet ennemi.",
                "Vous pouvez utiliser Avance défensive en Creusant, Grimpant, Volant ou Nageant au lieu de Marcher rapidement si vous disposez du type de déplacement correspondant."
            ]
        },
        {
            "name"       : "Avance spectrale",
            "level"      : "10",
            "traits"     : [
                "Champion",
                "Concentration",
                "Divin",
                "Téléportation"
            ],
            "required"   : [
                "Célérité bénie"
            ],
            "description": [
                "Vous obtenez le sort de dévotion auto_awesomeAvancée spectrale qui vous permet de vous déplacer vers un ennemi en contournant les obstacles."
            ]
        },
        {
            "name"       : "Avancée courageuse 1",
            "level"      : "4",
            "traits"     : [
                "Audible",
                "Barde",
                "Concentration",
                "Mutamagie"
            ],
            "required"   : [
                "Combattant (Muse de barde)"
            ],
            "description": [
                "Par un appel énergique, vous exhortez un allié à avancer. Si votre prochaine action consiste à lancer le tour de magie de composition auto_awesomeHymne de courage , un allié de votre choix qui obtient un bonus de statut du sort peut immédiatement utiliser une réaction pour Marcher rapidement."
            ]
        },
        {
            "name"       : "Avantage émotionnel r",
            "level"      : "2",
            "traits"     : [
                "Barde",
                "Concentration"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Un ennemi dont vous avez conscience rate son jet de sauvegarde contre un sort d'émotion.",
                "Vous vous préparez à tirer avantage du changement soudain des émotions de votre ennemi. La cible est sentiment_very_dissatisfiedPrise au dépourvu à l'encontre de votre prochaine attaque avant la fin de votre prochain tour."
            ]
        },
        {
            "name"       : "Avertissement de l'éclaireur f",
            "level"      : "4",
            "traits"     : [
                "Rôdeur",
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Vous êtes sur le point de faire un test de Perception, de Discrétion ou de Survie pour déterminer votre initiative.",
                "Vous avertissez vos alliés du danger, visuellement ou verbalement, accordant à chacun un bonus de circonstances de +1 à son jet d'initiative ou de +2 si vous utilisiez l'activité d'exploration sports_martial_artsReconnaître . Selon que vous avez averti vos alliés par geste ou verbalement, cette action possède respectivement soit le trait visuel soit le trait audible.",
                "flareEffet : Avertissement de l'éclaireur"
            ]
        },
        {
            "name"       : "Avertissement oraculaire f",
            "level"      : "1",
            "traits"     : [
                "Audible",
                "Lié à une malédiction",
                "Divin",
                "Émotion",
                "Mental",
                "Oracle"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Vous êtes sur le poind de lancer l'initiative.",
                "Vous avez la prémonition d'un danger imminent que vous utilisez pour avertir vos alliés. Chaque allié dans un rayon de 6 mètres obtient un bonus de statut de +2 à son jet d'initiative et obtient des Points de vie temporaires égaux à la moitié de votre niveau, qui durent 1 minute. Si vous êtes sentiment_very_dissatisfiedLié à la malédiction 2 lorsque vous utilisez Avertissement Oraculaire, le bonus passe à +3 et à +4 si vous êtes Lié à la malédiction 3.",
                "flareEffet : Avertissement oraculaire"
            ]
        },
        {
            "name"       : "Balai de sorcier",
            "level"      : "12",
            "traits"     : [
                "Sorcier"
            ],
            "required"   : [],
            "description": [
                "Un balai est la seule monture dont vous avez besoin pour voler dans le ciel nocturne. Pendant vos préparatifs quotidiens, vous appliquez une huile de vol composée de plantes et huiles spéciales sur un simple balai, un bâton, une arme d'hast ou tout objet similaire. Jusqu'à vos prochains préparatifs quotidiens, l'objet obtient le trait magique et vous pouvez le monter si vous avez au moins une main libre. Il se déplace à une Vitesse de 6 mètres. Le balai subit une pénalité de 3 mètres à sa Vitesse s'il est chargé avec plus de 20 Encombrements et s'écrase au sol si c'est plus de 30 Encombrement. Le balai ne peut être contrôlé que par vous. Si vous appliquez l'huile sur une arme ou tout autre objet tenu, vous ne pouvez pas chevaucher le balai et le manier en même temps.",
                "Vous pouvez Fabriquer votre manche à balai pour en faire un workBalai aérien comme si vous aviez la formule pour cet objet. Si vous appliquez une huile sur un balai qui est déjà un balai aérien, le balai obtient un bonus de statut de +3 mètres à sa Vitesse et vous pouvez choisir que chacun puisse le faire fonctionner ou vous seulement."
            ]
        },
        {
            "name"       : "Balayage déséquilibrant 3",
            "level"      : "12",
            "traits"     : [
                "Barbare",
                "Sophistication"
            ],
            "required"   : [],
            "description": [
                "Vous faites un grand balayage autour de vous, faisant trébucher les créatures et les repoussez au loin. Choisissez jusqu'à trois ennemis adjacents et choisissez soit de tous les sports_martial_artsPousser ou de tous les sports_martial_artsCroc-en-jambe . Quelle que soit l'option choisie, lancer un test d'Athlétisme séparé contre chaque ennemi, en accomplissant la même action contre chacun. Chaque tentative s'ajoute à votre pénalité d'attaques multiples, mais ne l'augmente pas tant que vous n'avez pas fait toutes les tentatives."
            ]
        },
        {
            "name"       : "Ballade apaisante",
            "level"      : "14",
            "traits"     : [
                "Barde"
            ],
            "required"   : [],
            "description": [
                "Vous apaisez les blessures de vos alliés grâce à la puissance de votre représentation. Vous apprenez le sort de composition auto_awesomeBallade apaisante ."
            ]
        },
        {
            "name"       : "Bannissement rapide r",
            "level"      : "14",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Vous infligez un coup critique à une créature qui n'est pas sur son plan d'origine.",
                "Conditions Vous avez préparé un sort de auto_awesomeBannissement",
                "La puissance de vos coups renvoie votre adversaire vers son plan d'origine. Vous dépensez un sort auto_awesomeBannissement que vous avez préparé et qui affecte la créature à laquelle vous avez infligé un coup critique sans avoir à lancer le sort. La créature peut tenter de résister au sort comme à l'ordinaire."
            ]
        },
        {
            "name"       : "Bannissement rapide amélioré",
            "level"      : "18",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [
                "Bannissement rapide"
            ],
            "description": [
                "Vous bannissez aisément les créatures avec votre arme. Vous pouvez utiliser military_techBannissement rapide tant qu'il vous reste un emplacement de sort de rang 5 ou plus, même si vous n'avez pas préparé auto_awesomeBannissement . Vous devez sacrifier un sort préparé de niveau 5 ou supérieur et l'effet de Bannissement que vous créez est intensifié au rang de ce sort. La cible subit une pénalité de circonstances de -2 à son jet de sauvegarde comme si vous aviez payé le coût supplémentaire de Bannissement."
            ]
        },
        {
            "name"       : "Barrière de détonation secondaire 1",
            "level"      : "14",
            "traits"     : [
                "Manipulation",
                "Mutamagie",
                "Magicien"
            ],
            "required"   : [],
            "description": [
                "Vous détournez une partie de l'énergie de votre sort vers une barrière runique instable. Si votre prochaine action consiste à Lancer un sort qui inflige des dégâts, ne possède pas de durée et affecte une zone, un cercle magique brillant apparaît dans une crop_freeexplosion de 1,50 mètre dans cette zone, infligeant casino1d6 dégâts de force par rang de sort à toutes les créatures au sein du cercle runique, avec un jet de casinoRéflexes contre votre DD de sort. Si le sort a infligé des dégâts d'un type différent, le cercle runique utilisera les dégâts du sort à la place (ou un type de votre choix si le sort peut infliger plusieurs types de dégâts)."
            ]
        },
        {
            "name"       : "Barrière de protection contre les sorts 1",
            "level"      : "4",
            "traits"     : [
                "Arcanique",
                "Manipulation",
                "Magicien"
            ],
            "required"   : [],
            "description": [
                "Vous inscrivez un cercle de runes arcaniques qui atténue la magie ennemie. Vous créez un cercle magique brillant dans une crop_freeexplosion de 1,50 mètre située dans les 9 mètres. Les créatures dans le cercle obtiennent un bonus de statut de +1 à leur jets de sauvegarde contre la magie. Le cercle dure jusqu'à la fin de votre prochain tour et vous pouvez le Maintenir, jusqu'à 1 minute maximum.",
                "flareEffet : Barrière de protection contre les sorts"
            ]
        },
        {
            "name"       : "Bastion de la montagne 1",
            "level"      : "6",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "Posture de la montagne"
            ],
            "description": [
                "Conditions Vous êtes dans la military_techPosture de la montagne",
                "Vous vous concentrez sur votre lien avec la terre et invoquez la montagne pour qu'elle bloque les attaques qui vous sont destinées. Vous bénéficiez d'un bonus de circonstances de +2 à la CA jusqu'au début de votre prochain tour.",
                "flareEffet : Bastion de la montagne",
                "Spécial Si vous avez ce don, le modificateur de Dextérité maximal à la CA lorsque vous êtes dans la military_techPosture de la montagne passe de +0 à +1."
            ]
        },
        {
            "name"       : "Battement d'aile de la grue r",
            "level"      : "6",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "Posture de la grue"
            ],
            "description": [
                "Déclencheur Vous êtes ciblé par une attaque par une créature observée.",
                "Conditions Vous êtes dans la military_techPosture de la grue .",
                "Vous placez votre bras entre vous et votre adversaire. Votre bonus de circonstances à la CA conféré par la Posture de la grue passe à +3 contre l'attaque déclencheuse. Si l'attaque vous rate et que l'attaquant est dans votre allonge, vous pouvez immédiatement effectuer une Frappe d'aile de grue contre l'attaquant avec une pénalité de -2."
            ]
        },
        {
            "name"       : "Bénédiction éternelle",
            "level"      : "16",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [
                "saint"
            ],
            "description": [
                "Vos exploits vous ont mis dans les grâces de votre divinité pour l'éternité. Vous êtes continuellement entouré par un sort de auto_awesomeBénédiction offensive dont le rang est égal à la moitié de votre niveau (arrondi au supérieur). Le rayon est de 4,50 mètres et vous ne pouvez pas l'augmenter. Vous pouvez Révoquer le sort. Si vous le faites, il réapparaît automatiquement au bout d'une minute."
            ]
        },
        {
            "name"       : "Blocage agressif f",
            "level"      : "2",
            "traits"     : [
                "Guerrier",
                "Gardien"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Vous utilisez la réaction Blocage au bouclier et l'adversaire qui l'a déclenchée vous est adjacent et de votre taille ou inférieure.",
                "Vous bloquez l'attaque en repoussant votre adversaire ou en le déséquilibrant. Vous utilisez votre bouclier pour repousser la créature à l'origine du déclenchement, soit en la sports_martial_artsPoussant automatiquement de 1,50 mètre, soit en la rendant sentiment_very_dissatisfiedPrise au dépourvu jusqu'au début de votre prochain tour. La créature déclencheuse choisit si elle est déplacée ou Prise au dépourvu. Si elle choisit d'être déplacée, vous en déterminez la direction. Si la créature Poussée devrait cogner un objet solide, pénétrer dans une case de terrain difficile ou dans l'espace d'une autre créature à cause de ce déplacement, elle est forcément Prise au dépourvu au lieu d'être déplacée."
            ]
        },
        {
            "name"       : "Blocage au bouclier éclair",
            "level"      : "8",
            "traits"     : [
                "Champion",
                "Guerrier"
            ],
            "required"   : [
                "blocage au bouclier"
            ],
            "description": [
                "Vous maniez votre bouclier sans même y penser. Au début de chacun de vos tours, Vous obtenez une réaction supplémentaire que vous pouvez utiliser uniquement pour faire un military_techBlocage au bouclier ."
            ]
        },
        {
            "name"       : "Blocage canalisé",
            "level"      : "14",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [
                "Blocage au bouclier"
            ],
            "description": [
                "Vous déversez de l'énergie divine pour effectuer un blocage désespéré. Lorsque vous effectuez un Blocage au bouclier, vous pouvez dépenser un sort de auto_awesomeMise à mal ou de auto_awesomeGuérison . Lancez 1d8 pour chaque rang du sort et augmentez la Solidité du bouclier du total obtenu pour ce blocage."
            ]
        },
        {
            "name"       : "Bombe collante",
            "level"      : "8",
            "traits"     : [
                "Additif",
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez ajouter un additif collant à votre bombe de façon à ce que son contenu adhère et continuer à infliger des dégâts. Une créature touchée par l'une de vos bombes collantes reçoit également une quantité de dégâts persistants égale aux dégâts d'éclaboussure de la bombe et du même type que ceux-ci. Si la bombe inflige déjà des dégâts persistants, combinez les deux montants."
            ]
        },
        {
            "name"       : "Bombe d'érosion",
            "level"      : "16",
            "traits"     : [
                "Additif",
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez mélanger une substance réfractaire à une bombe alchimique pour déjouer les résistances. Choisissez un type de dégâts que la bombe peut infliger. Tous les dégâts infligés par la bombe (y compris les dégâts initiaux, les éclaboussures et les dégâts persistants) ignorent un montant de résistance égal à votre niveau."
            ]
        },
        {
            "name"       : "Bombe de guérison",
            "level"      : "4",
            "traits"     : [
                "Additif",
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez ajouter un catalyseur mousseux à un Élixir de vie pour le transformer en projectile spécialisé. Vous pouvez jeter l'élixir comme s'il s'agissait d'une bombe alchimique, avec les résultats suivants :",
                "Succès La cible est affectée comme si elle avait bu l'élixir et chaque créature vivante adjacente récupère un nombre de Points de vie égal au nombre de dés de l'élixir (3 PV pour un élixir de vie inférieur par exemple).",
                "Échec La cible récupère des Points de vie égaux au nombre de dés de l'élixir.",
                "Échec critique La bombe de guérison n'a aucun effet."
            ]
        },
        {
            "name"       : "Bombe fumigène",
            "level"      : "2",
            "traits"     : [
                "Additif",
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez ajouter un additif goudronneux à une bombe alchimique pour qu'elle produise de la fumée. Quand vous lancez la bombe, en plus de son effet normal, elle crée un nuage de fumée dans un crop_freeexplosion de 3 mètres . Vous choisissez à partir de quel coin de l'espace de la cible (ou de l'espace dans lequel atterrit la bombe) le nuage est centré. Les créatures au sein de cette zone se trouvent dans l'état sentiment_very_dissatisfiedMasqué et toutes les autres créatures sont Masquées à leurs yeux. La fumée persiste 1 minute ou jusqu'à ce qu'elle soit dissipée par un vent fort."
            ]
        },
        {
            "name"       : "Bombe incapacitante",
            "level"      : "6",
            "traits"     : [
                "Additif",
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez ajouter un additif cristallin à une bombe alchimique pour qu'elle ébranle votre ennemi. Choisissez entre les états sentiment_very_dissatisfiedÉbloui , sentiment_very_dissatisfiedPris au dépourvu , sentiment_very_dissatisfiedSourd ou une pénalité de statut de -1,50 mètre à toutes les Vitesses. Si l'attaque avec cette bombe touche, la cible doit réussir un jet de casinoVigueur ou subir l'effet choisi jusqu'au début de votre prochain tour. Utilisez votre DD de classe pour ce jet de sauvegarde, même si quelqu'un d'autre lance la bombe."
            ]
        },
        {
            "name"       : "Bombe incapacitante supérieure",
            "level"      : "10",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [
                "Bombe incapacitante"
            ],
            "description": [
                "Vous avez appris des techniques avancées et des secrets alchimiques qui vous permettent d'étendre la liste d'effets que vous pouvez causer avec vos bombes. Quand vous utilisez military_techBombe incapacitante , ajoutez les effets suivants à la liste de ceux que vous pouvez causer : sentiment_very_dissatisfiedAffaibli 1 , sentiment_very_dissatisfiedMaladroit 1 , sentiment_very_dissatisfiedStupéfié 1 ou une pénalité à toutes les Vitesses de -3 mètres."
            ]
        },
        {
            "name"       : "Bombe incapacitante ultime",
            "level"      : "14",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [
                "Bombe incapacitante supérieure"
            ],
            "description": [
                "Vous avez découvert de nouvelles façons de gêner vos adversaires grâce à vos bombes. Quand vous utilisez military_techBombe incapacitante , ajoutez les effets suivants à la liste d'effets que vous pouvez causer : sentiment_very_dissatisfiedAffaibli 2 , sentiment_very_dissatisfiedStupéfié 2 ou une pénalité de -4,50 mètres à ses Vitesses."
            ]
        },
        {
            "name"       : "Bombes directionnelles",
            "level"      : "6",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez balancer vos bombes avec une telle force et sur une trajectoire si précise que l'angle de l'éclaboussure arrose un cône partant dans une seule direction, permettant potentiellement d'éviter vos alliés et d'éclabousser dans la profondeur les lignes ennemies. Quand vous jetez une bombe alchimique qui possède le trait éclaboussure, au lieu d'éclabousser toutes les cases adjacentes à la cible, vous pouvez créer une zone d'éclaboussure dans un crop_freecône de 4,50 mètres . Vous choisissez la direction du cône, mais sa première case doit être dans l'espace de la cible.",
                "Spécial Si vous avez le don military_techÉclaboussure élargie ou une autre capacité qui accroît le rayon de la zone d'éclaboussure, vous pouvez appliquer les dégâts d'éclaboussure dans un crop_freecône de 6 mètres ."
            ]
        },
        {
            "name"       : "Bombes incroyables",
            "level"      : "12",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [
                "Lanceur à grande distance"
            ],
            "description": [
                "Vous lancez vos bombes de manière remarquable, en dépit des obstacles ou de la distance. Lorsque vous lancez un objet alchimique avec le trait bombe, son facteur de portée passe à 18 mètres, vous réduisez toute pénalité de circonstances de CA de la cible liée à un abri de 1 et vous réussissez automatiquement le test nu lorsque vous ciblez une créature sentiment_very_dissatisfiedMasquée ."
            ]
        },
        {
            "name"       : "Bond de prédateur 1",
            "level"      : "12",
            "traits"     : [
                "Barbare",
                "Sophistication",
                "Rage"
            ],
            "required"   : [
                "Instinct animal"
            ],
            "description": [
                "Conditions Vous ne portez pas d'armure ou seulement une armure légère",
                "Vous vous rapprochez de votre proie à toute vitesse et lui bondissez dessus avant qu'elle puisse réagir. Vous Marchez rapidement en pouvant utiliser la totalité de votre Vitesse et Frappez à la fin de votre déplacement."
            ]
        },
        {
            "name"       : "Bond fantastique 2",
            "level"      : "12",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Vous vous élancez dans les airs en direction d'un adversaire. Vous tentez de faire un Saut en hauteur ou un Saut en longueur . Si vous tentez de Sauter en hauteur, déterminez la distance de votre saut comme si vous Sautiez en longueur. À la fin de votre saut, vous pouvez faire une Frappe au corps-à-corps.",
                "Après votre Frappe, vous chutez au sol si vous êtes en l'air. Si la distance de votre chute n'est pas supérieure à la hauteur de votre saut, vous ne subissez pas de dégâts et retombez sur vos pieds."
            ]
        },
        {
            "name"       : "Bond flamboyant 2",
            "level"      : "14",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [
                "maître en Athlétisme, Athlète flamboyant"
            ],
            "description": [
                "Conditions Vous êtes capable d'utiliser un aboutissement.",
                "Vous bondissez avec style et portez un puissant aboutissement.",
                "Faites un sports_martial_artsBond , un sports_martial_artsSaut en hauteur ou un sports_martial_artsSaut en longueur et effectuez un aboutissement à une action n'importe quand au cours de votre saut ; l'aboutissement ne peut pas être un de ceux qui inclut un autre déplacement, comme military_techAboutissement mobile . Immédiatement après l'aboutissement, vous retombez sur le sol si vous étiez en l'air, même si vous n'avez pas atteint la distance maximale de votre saut. Si la distance de chute n'est pas supérieure à la hauteur de votre saut, vous ne subissez pas de dégâts et atterrissez sur vos pieds.",
                "Lorsque vous tentez un saut en hauteur ou un Saut en longueur durant un Bond flamboyant, déterminez le DD en utilisant le DD du Saut en longueur et augmentez la distance maximale au double de votre Vitesse, plutôt qu'à votre Vitesse."
            ]
        },
        {
            "name"       : "Bond soudain 2",
            "level"      : "8",
            "traits"     : [
                "Barbare",
                "Guerrier"
            ],
            "required"   : [],
            "description": [
                "Barbare Vous frappez un ennemi alors que vous êtes en plein saut.",
                "Guerrier Vous faites un bond impressionnant et frappez alors que vous êtes en l'air.",
                "Faites un sports_martial_artsBond , un sports_martial_artsSaut en hauteur ou un sports_martial_artsSaut en longueur et tentez de faire une Frappe au corps-à-corps à n'importe quel moment pendant votre saut. Immédiatement après la frappe, si vous étiez encore en l'air, vous tombez au sol, même si vous n'avez pas atteint la distance maximale de votre saut. Si vous chutez d'une distance inférieure ou égale à la hauteur de votre saut, vous ne subissez aucun dégât et retombez sur vos pieds.",
                "Quand vous faites un Saut en hauteur ou en longueur dans le cadre de l'action Bond soudain, le DD est déterminé en utilisant le DD du Saut en longueur et augmentez votre distance maximale au double de votre Vitesse.",
                "Spécial Si vous avez military_techFrappe renversante , vous pouvez utiliser Frappe renversante au lieu d'une Frappe normale. Cela ne change pas le nombre d'actions nécessaires pour Bond soudain."
            ]
        },
        {
            "name"       : "Bondir depuis les ombres 1",
            "level"      : "12",
            "traits"     : [
                "Sophistication",
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Vous bondissez de votre cachette et attaquez votre cible. Vous Marchez rapidement jusqu'à votre Vitesse, mais vous devez terminer votre mouvement à côté d'un ennemi vis-à-vis duquel vous êtes sentiment_very_dissatisfiedCaché ou sentiment_very_dissatisfiedNon détecté . Vous sports_martial_artsFrappez cet ennemi, mais restez Caché ou Non détecté aux yeux de cette créature jusqu'à la fin de votre Frappe.",
                "Vous pouvez utiliser Bondir depuis les ombres en sports_martial_artsCreusant , sports_martial_artsEscaladant , sports_martial_artsVolant ou sports_martial_artsNageant au lieu de Marcher rapidement si vous possédez le type de déplacement correspondant."
            ]
        },
        {
            "name"       : "Bouclier de grâce",
            "level"      : "16",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "Gardien au bouclier"
            ],
            "description": [
                "Vous protégez un allié en interposant votre bouclier mais aussi votre corps. À chaque fois que vous effectuez la réaction Blocage au bouclier pour empêcher qu'un allié subisse des dégâts, vous pouvez répartir équitablement les dégâts restants après le Blocage au bouclier entre l'allié et vous."
            ]
        },
        {
            "name"       : "Bouclier de la foi",
            "level"      : "10",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [
                "Initié du domaine"
            ],
            "description": [
                "L'énergie résiduelle de vos sorts de domaine renforce vos défenses. Lorsque vous dépensez un Point de Focalisation pour lancer un sort de domaine, vous obtenez un bonus de statut de +1 à votre CA jusqu'au début de votre prochain tour.",
                "flareEffet : Bouclier de la foi"
            ]
        },
        {
            "name"       : "Bouclier du jugement r",
            "level"      : "10",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "bouclier béni, réaction de champion, Gardien au bouclier"
            ],
            "description": [
                "Fréquence Une fois par round",
                "Déclencheur L'attaque d'un ennemi contre un allié déclenche à la fois votre réaction Blocage au bouclier et votre réaction de champion.",
                "Quand vous protégez votre allié avec votre bouclier contre une attaque, vous invoquez votre puissance pour améliorer la protection. Vous effectuez la réaction Blocage au bouclier pour bloquer les dégâts que devrait subir un allié et vous effectuez également votre réaction de champion contre l'ennemi qui l'a attaqué.",
                ""
            ]
        },
        {
            "name"       : "Bouclier instinctif",
            "level"      : "6",
            "traits"     : [
                "Guerrier",
                "Gardien"
            ],
            "required"   : [],
            "description": [
                "Vous utilisez votre bouclier pour encaisser les explosions et autres. Quand vous sports_martial_artsLevez votre bouclier , vous obtenez son bonus de circonstances à vos jets de Réflexes.",
                "Spécial Si vous avez la réaction military_techBlocage au bouclier , les dégâts que vous prenez comme résultat de votre jet de Réflexes peuvent déclencher cette réaction, même si les dégâts ne sont pas physiques."
            ]
        },
        {
            "name"       : "Bouclier miroir r",
            "level"      : "10",
            "traits"     : [
                "Guerrier"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Un adversaire lance un sort qui vous prend pour cible et obtient un échec critique sur son jet d'attaque de sort contre votre CA.",
                "Conditions Votre bouclier est levé",
                "Vous renvoyez le sort à celui qui l'a lancé. Faites une attaque à distance contre l'attaquant en utilisant votre degré de maîtrise le plus élevé avec une arme à distance. Si vous pouvez lancer des sorts, vous pouvez choisir de faire un jet d'attaque de sort à la place. Si vous obtenez un succès, votre adversaire subit les effets d'un succès sur son jet d'attaque pour le sort qu'il a lancé (ou les effets d'un succès critique si votre jet d'attaque était un coup critique)."
            ]
        },
        {
            "name"       : "Bouclier réactif r",
            "level"      : "1",
            "traits"     : [
                "Guerrier",
                "Gardien"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Un ennemi vous touche avec une Frappe au corps-à-corps",
                "Conditions Vous maniez un bouclier",
                "Vous pouvez mettre votre bouclier en place juste au moment où vous devriez recevoir un coup, en évitant d'être touché à la dernière seconde. Vous utilisez immédiatement l'action sports_martial_artsLever un bouclier et obtenez le bonus de votre bouclier à la CA. Le bonus de circonstances du bouclier s'applique à votre CA lorsque vous déterminez le résultat de l'attaque déclencheuse."
            ]
        },
        {
            "name"       : "Bourrasque des vents violents 2",
            "level"      : "14",
            "traits"     : [
                "Air",
                "Concentration",
                "Manipulation",
                "Moine"
            ],
            "required"   : [
                "Initié des vents violents"
            ],
            "description": [
                "Conditions Vous êtes dans la auto_awesomePosture des vents violents .",
                "Vous augmentez la pression de l'air par des mouvements répétés, avant de relâcher un énorme croissant de vent impétueux. Faites une Frappe de coup de vent contre chaque créature dans un crop_freecône de 9 mètres ou sur une crop_freeligne de 18 mètres . Ces attaques comptent toutes dans le calcul de votre pénalité d'attaques multiples mais la pénalité n'augmente qu'après les avoir toutes effectuées."
            ]
        },
        {
            "name"       : "Bouteille du sorcier",
            "level"      : "8",
            "traits"     : [
                "Sorcier"
            ],
            "required"   : [
                "Chaudron"
            ],
            "description": [
                "Vous passez 10 minutes et dépensez 1 Point de focalisation pour brasser une potion spéciale contenant la puissance d'un de vos maléfices qui cible une créature. Une créature qui consomme cette potion est ciblée par le maléfice. Si le maléfice a une durée maintenue et que vous possédez auto_awesomeGloussement , vous pouvez lancer Gloussement dans la bouteille juste avant de la sceller. Si vous le faites, la durée du maléfice est étendue comme si vous aviez lancé Gloussement le round qui suit le lancement du sort (typiquement, cela étend la durée d'un round). Votre gloussement se fait entendre lorsque la bouteille est débouchée.",
                "Toute potion que vous créez de cette manière perd son pouvoir lors de vos prochains préparatifs quotidiens. Tant que la potion est en votre possession, vous pouvez la rendre inerte en utilisant une unique action qui possède le trait concentration. Vous ne pouvez récupérer le Point de focalisation que vous avez dépensé en créant la potion (ou le Point de focalisation que vous avez dépensé pour lancer Gloussement) jusqu'à ce que la potion soit consommée ou ait perdu sa magie."
            ]
        },
        {
            "name"       : "Bras puissant",
            "level"      : "2",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Lorsque vous Frappez avec une arme de jet, le facteur de portée augmente de 3 mètres."
            ]
        },
        {
            "name"       : "Brasier de révélation f",
            "level"      : "18",
            "traits"     : [
                "Oracle"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous êtes sentiment_very_dissatisfiedLié à la malédiction 4 .",
                "Votre esprit et votre corps peuvent, pour un court moment et à grand péril, surpasser les limites finales de votre malédiction. Pendant 1 minute, vous répandez des flammes torrentielles, vous êtes entouré d'esprits ou vous débordez de puissance divine d'une manière qui convient à votre mystère. À chacun de vos tours pendant cette période, vous pouvez lancer un sort de révélation sans dépenser de points de focalisation.",
                "Au bout de cette minute, les durées de tout sort de révélation que vous avez lancé pendant ce moment prennent fin et vous devez tenter un jet de casinoVigueur, DD 40 .",
                "Succès critique Vous ne subissez pas d'autres effets.",
                "Succès Vous êtes sentiment_very_dissatisfiedDrainé 2 et ne pouvez réduire ou retirer cet état jusqu'à vos prochains préparatifs quotidiens.",
                "Échec Vous êtes sentiment_very_dissatisfiedDrainé 4 et ne pouvez réduire ou retirer cet état jusqu'à vos prochains préparatifs quotidiens.",
                "Échec critique Vous mourrez."
            ]
        },
        {
            "name"       : "Bravade vivifiante 1",
            "level"      : "8",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous avez obtenu du flarePanache durant ce tour.",
                "Votre ego enfle, accordant un répit temporaire à votre douleur. Vous obtenez des Points de vie temporaires égaux à votre niveau plus votre modificateur de Charisme qui dure jusqu'au début de votre prochain tour."
            ]
        },
        {
            "name"       : "Bravoure",
            "level"      : "10",
            "traits"     : [
                "Fortune",
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Lorsque vous combinez Panache avec encore davantage de bravoure, cela tend à mieux fonctionner. Lorsque vous avez déjà du Panache , vous pouvez lancer deux fois les dés et utiliser le plus haut résultat sur les tests pour lesquels le bonus de circonstances de Combattant stylé s'applique ( sports_martial_artsDéplacement acrobatique et toutes les actions de compétences qui possèdent le trait bravade)."
            ]
        },
        {
            "name"       : "Bravoure retentissante",
            "level"      : "8",
            "traits"     : [
                "Guerrier"
            ],
            "required"   : [
                "Bravoure"
            ],
            "description": [
                "Même vos peurs servent de combustible à votre esprit guerrier. Lorsque vous obtenez un succès critique sur un jet de Volonté contre une capacité d'un adversaire, vous obtenez un bonus de statut de +1 à vos jets de sauvegarde et un nombre de Points de vie temporaires égal à la moitié de votre niveau pendant 1 minute. Ces avantages sont doublés si vous obtenez un succès critique contre un effet de terreur.",
                "flareEffet : Bravoure retentissante"
            ]
        },
        {
            "name"       : "Bricoleur de sort 2",
            "level"      : "16",
            "traits"     : [
                "Concentration",
                "Magicien"
            ],
            "required"   : [],
            "description": [
                "Vous avez appris à altérer les choix que vous avez faits en lançant un sort sur vous-même. Après avoir lancé un sort seulement sur vous-même qui offre plusieurs choix d'effets (comme Résistance à l'énergie ou un sort de métamorphose qui offre plusieurs formes potentielles), vous pouvez altérer le choix effectué lorsque vous avez Lancé le sort (par exemple en choisissant un autre type de dégâts pour Résistance à l'énergie).",
                "Vous ne pouvez pas utiliser ce don si les avantages du sort ont déjà été utilisés ou si les effets de votre premier choix devraient persister après la modification (par exemple si l'un des choix a consisté à créer un consommable que vous avez déjà utilisé ou pour vous soigner) ou encore si le don devrait créer un effet plus puissant que celui offert par le sort de base. Le MJ est le juge final de ce à quoi Bricoleur de sort peut être appliqué."
            ]
        },
        {
            "name"       : "Brisedieu 3",
            "level"      : "20",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "Poigne écrasante, Projection en rotation"
            ],
            "description": [
                "Conditions Vous avez sentiment_very_dissatisfiedAgrippé ou sentiment_very_dissatisfiedEntravé une créature.",
                "Vous avez maîtrisé une technique d'agrippement ultime capable de briser même les ennemis les plus puissants. Vous projetez la créature à 6 mètres dans les airs, en la suivant d'un saut puissant, puis vous portez une Frappe à mains nues. Si la Frappe est un succès, vous pouvez répéter ce processus jusqu'à deux fois de plus, en déplaçant la créature de 6 mètres supplémentaires dans les airs à chaque Frappe. La créature reste Agrippée ou Entravée tout au long de la séquence. Si vous ratez l'une des Frappes, Brisedieu et l'état Agrippé ou Entravé prennent fin immédiatement et vous et l'adversaire tombez, subissant les dégâts de chute normaux en fonction de la hauteur totale de votre saut.",
                "Si les trois Frappes sont réussies, vous saisissez immédiatement la créature et vous l'amenez au sol pour qu'elle s'y écrase, lui infligeant vos dégâts de Frappe à mains nues plus les dégâts de chute. Vous atterrissez sur vos pieds, à côté de la créature, sans subit de dégât de la chute et la créature reste Agrippée ou Entravé par vos soins."
            ]
        },
        {
            "name"       : "Briser les défenses 1",
            "level"      : "6",
            "traits"     : [
                "Guerrier",
                "Persévérer"
            ],
            "required"   : [],
            "description": [
                "Conditions Une créature sentiment_very_dissatisfiedEffrayée est dans votre allonge au corps-à-corps.",
                "Votre agressivité entretient la terreur de votre ennemi. Faites une Frappe au corps-à-corps contre une créature sentiment_very_dissatisfiedEffrayée . Si vous touchez et infligez des dégâts, la cible est sentiment_very_dissatisfiedPrise au dépourvu tant qu'elle conserve son état Effrayé. Si la cible était déjà Prise au dépourvu par rapport à vous quand vous lui infligez des dégâts avec cette Frappe, elle ne peut pas réduire la valeur de son état Effrayé en dessous de 1 jusqu'au début de votre prochain tour."
            ]
        },
        {
            "name"       : "Brutalité animale 1",
            "level"      : "8",
            "traits"     : [
                "Barbare",
                "Concentration",
                "Transformation",
                "Primordial",
                "Rage"
            ],
            "required"   : [
                "Instinct animal"
            ],
            "description": [
                "Vous approfondissez votre connexion à vos instincts animaux. Votre attaque à mains nues issue de rage bestiale obtient l'un des traits suivants jusqu'à ce que vous cessiez d'être en rage : balayage, démolition, parade, percutant, prise d'élan. Vous ne pouvez pas utiliser cette capacité jusqu'à ce que vous entriez de nouveau en sports_martial_artsRage . Vous pouvez choisir un trait différent à chaque fois que vous utilisez Brutalité Animale."
            ]
        },
        {
            "name"       : "Brute effrayante",
            "level"      : "10",
            "traits"     : [
                "Guerrier"
            ],
            "required"   : [],
            "description": [
                "La peur affaiblit vos ennemis et les rend plus vulnérables à vos attaques. Vous obtenez un bonus de circonstances aux jets de dégâts sur vos Frappes contre les créatures sentiment_very_dissatisfiedEffrayées . Le bonus est égal au double de la valeur de l'état Effrayé de la cible.",
                "Si vous êtes maître en Intimidation, le bonus s'élève au triple de la valeur de l'état Effrayé de la cible."
            ]
        },
        {
            "name"       : "C'est étrange",
            "level"      : "1",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [],
            "description": [
                "Quand vous pénétrez dans un nouvel endroit, comme une salle ou un corridor, vous remarquez immédiatement une chose qui sort de l'ordinaire. Le MJ détermine de quoi il s'agit ou s'il n'y a raisonnablement rien à remarquer, en ignorant les indices évidents qui peuvent être facilement repérés sans avoir besoin de faire un test ou qui apparaissent évident au premier coup d'œil. Vous apprenez seulement qu'une zone ou qu'un objet est suspect, mais pas pourquoi. Par exemple, si vous êtes entré dans un bureau avec une large flaque de sang sur le sol, le sang est si trivialement suspect que ça vous a déjà sauté aux yeux ; le MJ pourrait faire remarquer qu'il y a quelque chose de suspect à propos du tiroir du bureau par contre. Vous auriez ensuite à examiner le tiroir de plus près pour découvrir en quoi il sort de l'ordinaire exactement. C'est étrange ne révèle pas si des créatures sont suspectes. Si vous le souhaitez, vous pouvez Suivre une piste concernant ce détail même si vous avez suivi une piste il y a moins de 10 minutes.",
                "En règle générale, vous n'obtenez aucun avantage de ce don quand vous quittez un endroit puis y revenez, mais si un changement majeur s'est produit à cet endroit et qu'un certain temps est passé, le MJ pourrait vous permettre d'utiliser ce don."
            ]
        },
        {
            "name"       : "C'est ton imagination r",
            "level"      : "18",
            "traits"     : [
                "Barde",
                "Illusion",
                "Mental"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Vous devriez subir des dégâts d'une Frappe ou d'un sort qui ne possède pas le trait mort ou qui ne cause pas autrement une mort instantanée (tel que auto_awesomeDésintégration ).",
                "En utilisant vos liens occultes et vos immenses pouvoirs de persuasion, vous parvenez à vous convaincre vous-même que les dégâts déclencheurs sont le fruit de votre imagination. Les dégâts changent de forme pour devenir des dégâts mentaux et les effets des dégâts obtiennent le trait non-létal. Vous ne pouvez pas utiliser cette réaction si vous êtes immunisé aux effets mentaux ou aux dégâts mentaux."
            ]
        },
        {
            "name"       : "Camouflage",
            "level"      : "10",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "maître en Discrétion"
            ],
            "description": [
                "Vous modifiez votre apparence pour vous fondre dans la nature. Dans un environnement naturel, vous pouvez sports_martial_artsVous cacher ou sports_martial_artsÊtre furtif même sans avoir d'abri ou être sentiment_very_dissatisfiedMasqué ."
            ]
        },
        {
            "name"       : "Canalisation dirigée",
            "level"      : "4",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez diriger avec précision dans une direction l'énergie que vous canalisez, ce qui vous permet de prendre pour cibles des créatures plus éloignées de manière plus directe. Quand vous lancez une version de auto_awesomeMise à mal ou de auto_awesomeGuérison qui affecte une zone, vous pouvez choisir un crop_freecône de 18 mètres à la place d'une crop_freezone d'émanation de 9 mètres ."
            ]
        },
        {
            "name"       : "Canalisation mutamagique f",
            "level"      : "20",
            "traits"     : [
                "Prêtre",
                "Concentration"
            ],
            "required"   : [],
            "description": [
                "Votre profonde compréhension des révélations divines sur la nature de l'essence vitale vous permet de manipuler sans contrainte l'énergie de la vie et de la mort. Utilisez gratuitement une action de mutamagie que vous savez accomplir, qui demande normalement 1 action et que vous pouvez appliquer au sort auto_awesomeMise à mal ou auto_awesomeGuérison . Si vous l'utilisez de cette façon, ses effets s'appliquent uniquement à un sort de Mise à mal ou à un sort de Guérison."
            ]
        },
        {
            "name"       : "Canalisation rapide",
            "level"      : "14",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [
                "Source de mise à mal ou de guérison"
            ],
            "description": [
                "La puissance divine est toujours à portée de main, répondant rapidement à votre appel. Quand vous Lancez auto_awesomeMise à mal ou auto_awesomeGuérison en dépensant 2 actions, vous pouvez produire les effets de la version à 3 actions au lieu de celle à 2 actions.",
                "Vous pouvez faire ceci avec Mise à mal si vous avez la source de mise à mal ou avec Guérison si vous avez la source de guérison (ou avec les deux si vous avez Source polyvalente)."
            ]
        },
        {
            "name"       : "Canalisation répétée 1",
            "level"      : "18",
            "traits"     : [
                "Animiste",
                "Prêtre",
                "Concentration",
                "Mutamagie"
            ],
            "required"   : [
                "Incarnation de l'équilibre ou Prêtre"
            ],
            "description": [
                "Animist Lorsque vous canalisez les pouvoirs de la vie et de la mort, votre apparition absorbe et améliore l'énergie spirituelle, le transportant jusqu'à un allié proche.",
                "Prêtre Lorsque vous extrayez de l'énergie de vitalité ou du vide, vous créez également une plus petite poche de cette énergie. Si la prochaine action que vous effectuez consiste à lancer la version à 2 actions de auto_awesomeMise à mal ou de auto_awesomeGuérison pour soigner ou blesser une unique créature dans la portée. Ciblez cette créature avec la version à 1 action du même sort. Ce sort a le même rang que la Mise à mal ou la Guérison à 2 actions que vous lancez et ne coûte pas d'autre emplacement de sort."
            ]
        },
        {
            "name"       : "Canalisation restauratrice",
            "level"      : "8",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [
                "Source de guérison"
            ],
            "description": [
                "La grâce divine vous permet de supprimer des états nuisibles.",
                "Vous pouvez sacrifier un sort de auto_awesomeGuérison préparé dans vos emplacements de sort supplémentaires conférés par la source de guérison pour lancer l'un des sorts suivants à la place : auto_awesomeAffliction purifiée , auto_awesomeClarté d'esprit , auto_awesomeCorps assaini , or auto_awesomeRemise sur pied . Le sort est intensifié jusqu'au même niveau que celui de la Guérison que vous avez sacrifiée."
            ]
        },
        {
            "name"       : "Capture de projectile",
            "level"      : "8",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "Parade de projectile"
            ],
            "description": [
                "Vous attrapez les projectiles en plein vol et les renvoyez vers leur source. Quand vous réussissez à parer une attaque avec Parade de projectile, dans le cadre de cette réaction, vous pouvez immédiatement faire une Frappe à distance contre l'attaquant en utilisant le projectile que vous venez de détourner. C'est une arme de jet avec le même facteur de portée et le même effet En cas de succès que l'attaque déclencheuse."
            ]
        },
        {
            "name"       : "Celui qui appelle le vent",
            "level"      : "8",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "Ordre de la tempête"
            ],
            "description": [
                "Vous ordonnez aux vents de vous aider et de vous transporter dans les airs et à vous autorisez le passage au sein des vents les plus forts. Vous obtenez le sort d'ordre auto_awesomeVol de l'ouragan ."
            ]
        },
        {
            "name"       : "Centre du Qi f",
            "level"      : "18",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "maître de nombreux styles, Sorts Qi"
            ],
            "description": [
                "Fréquence Une fois par minute",
                "Vous vous centrez vous-même avec l'univers et puisez dans sa vaste puissance. Vous Lancez un sort Qi à unique action qui possède le trait posture sans avoir à dépenser de point de focalisation."
            ]
        },
        {
            "name"       : "Chacun est un suspect",
            "level"      : "20",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [],
            "description": [
                "Vous êtes si suspicieux à l'égard de qui vous rencontrez que vous conservez des notes mentales sur la manière de les défaire — même vos propres alliés.",
                "Après avoir interagi avec une créature pendant au moins 1 minute, vous sports_martial_artsSuivez une piste automatiquement avec cette créature comme sujet. Vous pouvez avoir n'importe quel nombre de pistes au même moment et lorsque vous Suivez une piste de nouveau, vous n'abandonnez aucun de ces sujets automatiques."
            ]
        },
        {
            "name"       : "Chance incroyable (Bretteur)",
            "level"      : "18",
            "traits"     : [
                "Fortune",
                "Bretteur"
            ],
            "required"   : [
                "Vie chanceuse"
            ],
            "description": [
                "Vous semblez toujours pouvoir vous sortir du pire. Lorsque vous utilisez military_techVie chanceuse , lancez le dé deux fois (en incluant le bonus de circonstances de +2 de Vie chanceuse) et utilisez le meilleur résultat."
            ]
        },
        {
            "name"       : "Changement éclair 1",
            "level"      : "2",
            "traits"     : [
                "Exalté",
                "Guerrier",
                "Sophistication"
            ],
            "required"   : [],
            "description": [
                "Exalté Vous vous êtes entraîné à passer rapidement d'un style de combat à l'autre et à l'équipement nécessaire, plus particulièrement si vous maniez plus d'une ikône d'arme. Vous interagissez pour ranger un nombre quelconque d'objets de vos mains, puis dégainez jusqu'à deux armes ou un bouclier et une arme.",
                "Guerrier Vous vous êtes entraîné à passer rapidement d'un style de combat à l'autre et à l'équipement nécessaire. Vous interagissez pour ranger un nombre quelconque d'objets de vos mains, puis dégainez jusqu'à deux armes ou un bouclier et une arme."
            ]
        },
        {
            "name"       : "Changement inattendu r",
            "level"      : "10",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Vous êtes ciblé par une attaque à distance.",
                "Conditions Vous êtes adjacent à un ennemi et avez du panache.",
                "Vous tentez de changer adroitement de place avec un ennemi adjacent pour éviter l'attaque. Choisissez un ennemi adjacent et tentez de le sports_martial_artsRepositionner . Au lieu des résultats ordinaires de Repositionner, utiliser les suivants.",
                "Succès critique Vous échangez vos places avec l'ennemi ciblé etl'ennemi devient la cible de l'attaque déclencheuse.",
                "Succès Comme en cas de succès critique sauf que la cible obtient un abri partiel contre l'attaque déclencheuse et vous perdez votre panache.",
                "Échec Vous perdez votre panache.",
                "Échec critique Vous êtes sentiment_very_dissatisfiedPris au dépourvu contre l'attaque déclencheuse et vous perdez votre panache."
            ]
        },
        {
            "name"       : "Chanson de force",
            "level"      : "2",
            "traits"     : [
                "Barde"
            ],
            "required"   : [
                "Combattant (muse de barde)"
            ],
            "description": [
                "Vos représentations donnent à vos alliés de la force pour les aider à accomplir des tâches physiques. Vous apprenez le tour de magie de composition auto_awesomeChanson de force ."
            ]
        },
        {
            "name"       : "Chanson de marche",
            "level"      : "6",
            "traits"     : [
                "Barde"
            ],
            "required"   : [],
            "description": [
                "Vous apprenez le tour de magie de composition auto_awesomeChanson de marche , qui vous permet ainsi qu'à vos alliés de parcourir de longues distances sans effort."
            ]
        },
        {
            "name"       : "Chant funeste",
            "level"      : "6",
            "traits"     : [
                "Barde"
            ],
            "required"   : [],
            "description": [
                "Vous apprenez le tour de magie de composition auto_awesomeChant funeste qui terrorise vos ennemis et les empêche de pleinement se remettre de leur terreur."
            ]
        },
        {
            "name"       : "Charge destructrice 2",
            "level"      : "2",
            "traits"     : [
                "Barbare",
                "Sophistication"
            ],
            "required"   : [
                "qualifié en Athlétisme"
            ],
            "description": [
                "Vous frappez, cassez et chargez sans hésiter à travers des obstacles solides. Marchez rapidement deux fois.",
                "Une seule fois au cours de ce mouvement, si votre déplacement passe à travers ou se termine à côté d'une porte, d'une fenêtre, d'une palissade, d'un mur ou d'un obstacle similaire, vous pouvez exécuter un test d'Athlétisme pour sports_martial_artsOuvrir de force l'ouverture dans l'obstacle avec un bonus de circonstances de +1 ; en cas d'échec, votre mouvement est interrompu au niveau de cet obstacle."
            ]
        },
        {
            "name"       : "Charge irrépressible 2",
            "level"      : "4",
            "traits"     : [
                "Barbare",
                "Guerrier",
                "Sophistication"
            ],
            "required"   : [
                "qualifié en Athlétisme"
            ],
            "description": [
                "Vous vous précipitez en avant, déplaçant les ennemis sur le côté pour atteindre votre adversaire. Vous Marchez rapidement, en tentant de vous déplacer dans l'espace occupé par vos ennemis. Faites un test d' casinoAthlétisme et comparez le résultat au DD de Vigueur de chaque créature dont vous tentez de traverser l'espace au cours de votre déplacement, passant à travers celui-ci en cas de succès mais interrompant votre déplacement avant de pénétrer son espace en cas d'échec. Vous pouvez alors Frapper, quelle que soit la manière dont s'est terminée votre Marche rapide. Vous pouvez utiliser Charge irrépressible en Creusant, en Grimpant, en Volant ou en Nageant plutôt qu'en Marchant rapidement si vous disposez du type de déplacement correspondant."
            ]
        },
        {
            "name"       : "Charge lancée 2",
            "level"      : "10",
            "traits"     : [
                "Guerrier",
                "Sophistication"
            ],
            "required"   : [],
            "description": [
                "Vous lancez une arme pour distraire votre adversaire pendant que vous vous rapprochez de lui pour commencer votre assaut. Vous Marchez rapidement deux fois. À n'importe quel point durant ce déplacement, vous pouvez effectuer une attaque à distance avec une arme de jet. Si la frappe touche, la cible est sentiment_very_dissatisfiedPrise au dépourvu contre la prochaine attaque au corps-à-corps que vous tentez contre elle avant la fin de votre tour actuel."
            ]
        },
        {
            "name"       : "Charge soudaine 2",
            "level"      : "1",
            "traits"     : [
                "Barbare",
                "Guerrier",
                "Sophistication"
            ],
            "required"   : [],
            "description": [
                "Après un bref sprint, vous vous précipitez sur un adversaire en le frappant. Vous Marchez rapidement deux fois. Si vous terminez votre déplacement avec au moins un ennemi dans votre allonge au corps-à-corps, vous pouvez faire une Frappe au corps-à-corps. Vous pouvez utiliser la military_techCharge soudaine pour Creuser, Escalader, Nager ou Voler au lieu de Marcher rapidement si vous possédez le type de déplacement correspondant."
            ]
        },
        {
            "name"       : "Charge surpuissante",
            "level"      : "10",
            "traits"     : [
                "Barbare",
                "Guerrier"
            ],
            "required"   : [
                "Charge irrépressible"
            ],
            "description": [
                "Vous piétinez vos ennemis lorsque votre charge passe sur eux. Lorsque vous utilisez military_techCharge irrépressible et parvenez à traverser l'espace d'une créature, celle-ci subit des casinodégâts contondants égaux à votre modificateur de Force. Si vous obtenez un succès critique, la créature subit le double de ce montant de dégâts et devient sentiment_very_dissatisfiedPrise au dépourvu jusqu'à la fin de votre prochain tour."
            ]
        },
        {
            "name"       : "Chasseur de l'ombre",
            "level"      : "18",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "Camouflage"
            ],
            "description": [
                "Vous vous fondez si parfaitement dans votre environnement qu'il est impossible de vous repérer. Dans un environnement naturel, vous êtes toujours sentiment_very_dissatisfiedMasqué vis-à-vis de tous les adversaires si tel est votre souhait, sauf de votre proie."
            ]
        },
        {
            "name"       : "Chasseur de mage 2",
            "level"      : "6",
            "traits"     : [
                "Barbare",
                "Rage"
            ],
            "required"   : [
                "Instinct superstitieux"
            ],
            "description": [
                "Conditions Vous avez vu la cible Lancer un sort",
                "Vous utilisez votre haine de la magie pour vous déchaîner contre un lanceur de sort reconnu comme tel. Faites une Frappe au corps-à-corps contre la créature requise. Si vous touchez et infligez des dégâts, la cible devient sentiment_very_dissatisfiedStupéfiée 1 ou sentiment_very_dissatisfiedStupéfiée 2 en cas de coup critique, jusqu'au début de votre prochain tour."
            ]
        },
        {
            "name"       : "Chasseur de monstres",
            "level"      : "1",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [],
            "description": [
                "Vous évaluez rapidement votre proie et mettez en pratique ce que vous savez à son propos. Dans le cadre de l'action utilisée pour Chasser votre proie, vous pouvez tenter un test pour Vous souvenir d'une information sur votre proie. Quand vous obtenez un succès critique lors de l'identification de votre proie avec sports_martial_artsSe Souvenir , vous relevez une faiblesse dans ses défenses en plus de ses autres avantages. Vous obtenez un bonus de circonstances de +1 à votre prochain jet d'attaque contre cette proie et tout allié à qui vous le dites obtient le même avantage. Vous ne pouvez octroyer les bonus de Chasseur de monstres qu'une fois par jour contre une créature en particulier.",
                "flareEffet : Chasseur de monstres"
            ]
        },
        {
            "name"       : "Chasseur de monstres légendaires",
            "level"      : "16",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "légendaire en Nature, Maître chasseur de monstres"
            ],
            "description": [
                "Votre connaissance des monstres est tellement incroyable qu'elle vous révèle les faiblesses flagrantes de votre proie. Le bonus issu de military_techChasseur de monstres (et celui de military_techGarde-monstres si vous le possédez) passe de +1 à +2 pour vous et tout allié qui en bénéficie."
            ]
        },
        {
            "name"       : "Châtiment 1",
            "level"      : "6",
            "traits"     : [
                "Champion",
                "Concentration"
            ],
            "required"   : [],
            "description": [
                "Vous désignez un ennemi pour le détruire au nom de votre divinité. Désignez un ennemi que vous pouvez voir. Jusqu'au début de votre prochain tour, vos Frappes contre cet ennemi bénéficient d'un bonus de statut de +3 aux dégâts, qui passe à +4 si vous êtes maître avec l'arme ou l'attaque à mains nues que vous utilisez pour la Frappe. Si vous êtes saint ou impie et que la cible possède le trait opposé, le bonus est de +4 (ou de +6 si vous êtes maître).",
                "Si la cible effectue une action hostile envers vous ou l'un de vos alliés avant le début de votre prochain tour, la durée se prolonge jusqu'à la fin du prochain tour de l'ennemi. Si l'adversaire continue d'effectuer des actions hostiles chaque tour, la durée se prolonge à chaque fois."
            ]
        },
        {
            "name"       : "Châtiment canalisé 2",
            "level"      : "4",
            "traits"     : [
                "Prêtre",
                "Divin"
            ],
            "required"   : [],
            "description": [
                "Coût Dépensez un sort de auto_awesomeMise à mal ou auto_awesomeGuérison .",
                "Vous siphonnez la puissance destructrice de l'énergie de vie et de mort à travers une attaque au corps-à-corps dans votre ennemi. Faites une Frappe au corps-à-corps. Si vous touchez, vous lancez la version à 1 action du sort dépensé pour blesser la cible, en plus des dégâts normaux de votre Frappe. La cible obtient automatiquement un échec à son jet de sauvegarde (ou un échec critique si votre Frappe était un coup critique). Le sort n'a pas de trait manipulation lorsqu'il est lancé de cette manière. Le sort est dépensé sans produire d'effet si votre Frappe échoue ou touche une créature qui ne peut pas être blessée par ce type d'énergie (si vous réussissez à frapper une créature autre qu'un mort-vivant avec le sort Guérison, par exemple)."
            ]
        },
        {
            "name"       : "Châtiment de la tempête r",
            "level"      : "6",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "Ordre de la tempête, Sort d'ordre Onde de tempête"
            ],
            "description": [
                "Déclencheur Un adversaire adjacent vous inflige un coup critique avec une arme de corps-à-corps ou une attaque à mains nues au corps-à-corps.",
                "Conditions Vous avez au moins 1 point de focalisation disponible.",
                "Vous vous défendez en déclenchant une explosion de fureur tempétueuse sur une créature qui vous a blessé. Vous lancez auto_awesomeOnde de tempête sur l'adversaire déclencheur et vous le repoussez de 1,50 mètre s'il rate son jet de Réflexes ou de 3 mètres s'il obtient un échec critique. Ceci est un déplacement forcé."
            ]
        },
        {
            "name"       : "Châtiment rebondissant r",
            "level"      : "16",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [
                "Châtiment canalisé"
            ],
            "description": [
                "Déclencheur Vous avez raté votre Frappe d'un military_techChâtiment canalisé .",
                "L'énergie de votre châtiment persiste pendant un instant, vous donnant l'opportunité de la transférer à une nouvelle cible. Lancez la version de auto_awesomeMise à mal ou de auto_awesomeGuérison à 1 action, ciblant une créature autre que la cible de votre Frappe."
            ]
        },
        {
            "name"       : "Chaudron",
            "level"      : "1",
            "traits"     : [
                "Sorcier"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez utilisez l'activité sports_martial_artsFabriquer pour créer huiles et potions.",
                "Vous obtenez immédiatement les formules de quatre huiles ou potions courantes de niveau 1. Au niveau 4 et tous les 2 niveaux par la suite, vous obtenez la formule d'une huile ou d'une potion courante de ce niveau ou inférieur (une potion de niveau 4 si vous êtes de niveau 4, une potion de niveau 6 si vous êtes de niveau 6,...).",
                "Si vous possédez un familier, vous pouvez faire en sorte que votre familier apprenne ces formules plutôt que de les conserver dans un recueil. Votre familier peut apprendre de nouvelles formules de la même manière qu'il apprend de nouveaux sorts et ces formules sont transférées d'un familier tué à un nouveau familier de la même manière que le sont les sorts.",
                "Au cours de vos préparatifs quotidiens, vous pouvez créer une huile ou une potion temporaire en utilisant une formule que vous connaissez. Si vous êtes Maître dans la maîtrise du DD des sorts de votre tradition, vous pouvez créer un lot de deux huiles ou potions temporaires pendant vos préparatifs quotidiens, et si vous êtes légendaire, vous pouvez en créer un lot de trois. Tous les objets ainsi créés deviennent des bouteilles de liquide inertes lors de vos prochains préparatifs quotidiens, et les effets restants des objets temporaires prennent fin. Une huile ou une potion temporaire n'a aucune valeur."
            ]
        },
        {
            "name"       : "Chercheur de rituels",
            "level"      : "4",
            "traits"     : [
                "Peu courant",
                "Barde"
            ],
            "required"   : [
                "Énigmatique (Muse de barde), expert en Occultisme"
            ],
            "description": [
                "Une recherche soigneuse dans l'art des rituels vous a rendu plus performant lorsqu'il s'agit de les accomplir. Vous obtenez un bonus de circonstances de +2 à tous les tests primaires et secondaires que vous tentez qui sont des parties du lancement d'un rituel."
            ]
        },
        {
            "name"       : "Cheval de bataille loyal",
            "level"      : "6",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "Fidèle destrier"
            ],
            "description": [
                "La loyauté qui vous lie à votre monture est indéfectible. La monture que vous obtenez grâce à Fidèle destrier est à présent un compagnon animal adulte. De plus, votre monture ne vous attaque jamais, même si on l'oblige par magie à le faire."
            ]
        },
        {
            "name"       : "Choc chirurgical 1",
            "level"      : "12",
            "traits"     : [
                "Attaque",
                "Enquêteur"
            ],
            "required"   : [
                "Méthodologie : Médecine forensique"
            ],
            "description": [
                "Avec quelques coups de poing ou d'arme bien placés, vous rendez votre adversaire désorienté ou gauche. Tentez un test de casinoMédecine contre le DD de Vigueur d'une cible dans votre allonge. Le résultat de votre test détermine la gravité de l'état que vous infligez.",
                "Succès critique La cible est soit sentiment_very_dissatisfiedMaladroite 3 soit sentiment_very_dissatisfiedStupéfiée 3 jusqu'à la fin de votre prochain tour. La cible est alors immunisée contre Choc chirurgical pendant 1 heure.",
                "Succès Comme en cas de succès, mais la cible est soit sentiment_very_dissatisfiedMaladroite 2 soit sentiment_very_dissatisfiedStupéfiée 2 .",
                "Échec La cible est légèrement incommodée. Vous obtenez un bonus de circonstances de +1 à la prochaine action d'attaque que vous tenterez contre elle avant la fin de votre tour.",
                "flareEffet : Choc chirurgical (échec)",
                "Échec critique La cible n'est pas affectée et vous vous fendez trop loin, déclenchant des réactions identiques à celles provoquées par une action de manipulation."
            ]
        },
        {
            "name"       : "Cicatrices d'acier r",
            "level"      : "4",
            "traits"     : [
                "Barbare",
                "Rage"
            ],
            "required"   : [
                "Instinct de furie"
            ],
            "description": [
                "Fréquence Une fois par jour",
                "Déclencheur Un adversaire vous porte un coup critique avec une attaque qui inflige des dégâts physiques.",
                "Lorsque vous êtes frappé par les coups les plus puissants, vous pouvez fléchir vos muscles pour dévier une partie des dégâts. Vous obtenez une résistance à l'attaque déclencheuse égale à votre modificateur de Constitution plus la moitié de votre niveau."
            ]
        },
        {
            "name"       : "Clarté partagée",
            "level"      : "18",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [
                "Clarté prémonitoire"
            ],
            "description": [
                "Vous pouvez projeter votre clarté prémonitoire sur vos alliés. Lorsque vous utilisez military_techClarté prémonitoire , vos alliés à 4,50 mètres de vous qui ont obtenu un échec au même jet de sauvegarde contre le même effet mental peuvent aussi utiliser leurs réactions pour relancer le jet de sauvegarde avec un bonus de circonstances de +2.",
                "flareEffet : Clarté partagée"
            ]
        },
        {
            "name"       : "Clarté prémonitoire r",
            "level"      : "14",
            "traits"     : [
                "Prêtre",
                "Fortune"
            ],
            "required"   : [],
            "description": [
                "Fréquence Une fois par heure",
                "Déclencheur Vous obtenez un échec sur un jet de sauvegarde contre un effet mental.",
                "Votre divinité vous envoie une vision de foi pour vous blinder contre les attaques mentales. Relancez le jet de sauvegarde déclencheur avec un bonus de circonstances de +2. Vous devez utiliser ce second résultat, même s'il est pire."
            ]
        },
        {
            "name"       : "Cogneur brutal",
            "level"      : "6",
            "traits"     : [
                "Barbare"
            ],
            "required"   : [
                "expert en Athlétisme"
            ],
            "description": [
                "Vous bousculez vos adversaires et leur laissez des bleus. Quand vous êtes enragé et que vous réussissez à sports_martial_artsDésarmer , sports_martial_artsSaisir , sports_martial_artsRepositionner , sports_martial_artsPousser , or sports_martial_artsFaire un Croc-en-jambe à un ennemi, vous lui infligez une quantité de casinodégâts contondants égale à votre modificateur de Force. Vous ajoutez ces dégâts à ceux que vous infligez en cas de succès critique sur un Croc-en-jambe."
            ]
        },
        {
            "name"       : "Cogneur furieux",
            "level"      : "8",
            "traits"     : [
                "Barbare"
            ],
            "required"   : [
                "maître en Athlétisme"
            ],
            "description": [
                "Vous brutalisez vos adversaires sur le champ de bataille. Tant que vous êtes en rage, vous obtenez un bonus de circonstances de +2 aux tests d'Athlétisme pour les actions d'attaque."
            ]
        },
        {
            "name"       : "Colère de l'esprit 1",
            "level"      : "12",
            "traits"     : [
                "Attaque",
                "Barbare",
                "Concentration",
                "Rage"
            ],
            "required"   : [
                "Instinct spirituel"
            ],
            "description": [
                "Vous invoquez un esprit éphémère, généralement l'apparition d'un ancêtre ou un esprit de la nature qui prend la forme d'un feu follet. Ce feu follet spirituel se précipite pour faire une attaque de corps-à-corps à mains nues contre un ennemi qui se trouve dans un rayon de 36 mètres de vous. Le modificateur d'attaque du feu follet est égal à votre bonus de Maîtrise des armes de guerre plus votre modificateur de Force plus un bonus d'objet de +2, et il est soumis aux mêmes bonus et pénalité de circonstances et de statut que vous. S'il réussit à toucher sa cible, le feu follet inflige des casinodégâts spirituels égaux à 4d8 plus votre modificateur de Constitution. Vous ne leur ajoutez pas vos dégâts de rage ou de spécialisation martiale, mais les bonus et pénalités de circonstances et de statut qui affectent les dégâts du feu follet s'appliquent. Sur un coup critique, le feu follet inflige le double des dégâts et la cible devient sentiment_very_dissatisfiedEffrayée 1 . Cette attaque est soumise à votre pénalité d'attaques multiples et s'ajoute à celui-ci, comme si vous étiez celui qui attaque."
            ]
        },
        {
            "name"       : "Combat en aveugle",
            "level"      : "8",
            "traits"     : [
                "Guerrier",
                "Enquêteur",
                "Rôdeur",
                "Roublard"
            ],
            "required"   : [
                "maître en Perception"
            ],
            "description": [
                "Guerrier, Roublard, Enquêteur Vos instincts de combat vous rendent plus conscients des adversaires sentiment_very_dissatisfiedMasqués et sentiment_very_dissatisfiedInvisibles .",
                "Rôdeur Vos sens intensifiés vous permettent instinctivement de détecter des opposants non visibles.",
                "Vous n'avez pas besoin de réussir de test nu pour cibler les créatures Masquées.",
                "Vous n'êtes pas sentiment_very_dissatisfiedPris au dépourvu face aux créatures qui vous sont sentiment_very_dissatisfiedCachées (à moins que vous ne soyez Pris au dépourvu pour d'autres raisons que celle liée à l'état Caché) et vous avez uniquement besoin d'un casinoTest nu, DD 5 pour cibler une créature Cachée.",
                "Lorsque vous êtes adjacent à une créature sentiment_very_dissatisfiedNon détectée de votre niveau ou de niveau inférieur, vous considérez qu'elle vous est seulement Cachée."
            ]
        },
        {
            "name"       : "Combinaison de sorts",
            "level"      : "20",
            "traits"     : [
                "Magicien"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez fusionner des sorts, produisant de nombreux effets avec une seule incantation. Un emplacement de chaque rang que vous pouvez lancer (sauf les rangs 1 et 2) devient un emplacement de sort combiné (cela ne s'applique pas aux tours de magie). Lorsque vous préparez vos sorts, vous pouvez remplir un emplacement de combinaison avec une combinaison de deux sorts. Chaque sort de la combinaison doit être d'au minimum deux rangs de moins que l'emplacement de sort et tous deux doivent viser une seule créature ou un seul objet ou pouvoir viser une seule créature ou un seul objet. Les sorts de la combinaison doivent avoir le même moyen de déterminer s'ils font effet ou non, par exemple, exiger un jet d'attaque de sort à distance ou autoriser le même jet de sauvegarde ou affecter automatiquement leur cible.",
                "Quand vous lancez un sort combiné, il affecte une seule cible, même si les sorts qui le composent en affectent normalement plusieurs. Si un sort de la combinaison possède d'autres restrictions (cibler uniquement les créatures vivantes par exemple), vous devez aussi les respecter. Le sort combiné utilise la portée la plus courte des sorts qui le composent. Le sort combiné fonctionne comme un sort unique, mais applique les effets de tous les sorts qui le composent. Par exemple, si la cible du sort remporte un succès sur le jet de sauvegarde contre le sort combiné, elle applique les effets du succès de chaque sort qui le compose, tandis que si elle essuie un échec critique, elle applique les effets d'échec critique de chacun."
            ]
        },
        {
            "name"       : "Combiner des élixirs",
            "level"      : "6",
            "traits"     : [
                "Additif",
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez ajouter les ingrédients d'un second élixir à un élixir que vous fabriquez pour créer une concoction hybride. Vous devez utiliser une fiole polyvalente supplémentaire pour faire cet élixir combiné et les ingrédients doivent être ceux d'un élixir que vous pourriez créer avec Alchimie rapide . Quand cet élixir combiné est consommé, les deux élixirs qui le constituent font effet. Par exemple vous pouvez combiner deux workÉlixirs de vie inférieurs pour créer un élixir combiné qui soignera deux fois le montant normal ou vous pouvez combiner un workÉlixir de vision dans le noir inférieur avec un workÉlixir d'œil de faucon inférieur pour à la fois gagner une vision dans le noir et trouver des portes dérobées plus facilement."
            ]
        },
        {
            "name"       : "Communion du sorcier",
            "level"      : "10",
            "traits"     : [
                "Sorcier"
            ],
            "required"   : [
                "Protégé du sorcier"
            ],
            "description": [
                "Vous pouvez veiller sur de multiples protégés. Chaque jour, au cours de vos préparatifs quotidiens, vous pouvez désigner un nombre de protégés égal à votre modificateur d'Intelligence au lieu d'un seul."
            ]
        },
        {
            "name"       : "Compagnon agrandi",
            "level"      : "8",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "Un compagnon animal, Sorts de gardien"
            ],
            "description": [
                "Vous rendez votre compagnon énorme. Vous obtenez le sort de gardien auto_awesomeCompagnon agrandi . Augmentez le nombre de points de focalisation de votre réserve de focalisation de 1."
            ]
        },
        {
            "name"       : "Compagnon animal",
            "level"      : "1",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "ordre animal"
            ],
            "description": [
                "Vous obtenez les services d'un jeune compagnon animal qui voyage avec vous lors de vos aventures et obéit aux ordres simples que vous lui donnez au mieux de ses capacités."
            ]
        },
        {
            "name"       : "Compagnon animal (rôdeur)",
            "level"      : "1",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [],
            "description": [
                "Vous obtenez les services d'un jeune compagnon animal qui voyage avec vous et obéit aux ordres simples. Lorsque vous sports_martial_artsChassez une proie , votre compagnon animal obtient les avantages de l'action et les avantages de votre Spécialité du chasseur si vous en avez une."
            ]
        },
        {
            "name"       : "Compagnon animal adulte (druide)",
            "level"      : "4",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "Compagnon animal"
            ],
            "description": [
                "Votre compagnon animal a grandi au fil de vos aventures, devenant un compagnon animal adulte et obtenant des capacités supplémentaires.",
                "Votre compagnon animal est plus indépendant. Au cours d'une rencontre, même si vous n'utilisez pas l'action Diriger un animal, votre compagnon animal peut toujours effectuer 1 action lors de ce tour agissant à votre tour pour Marcher rapidement ou Frapper. Il peut le faire à n'importe quel moment au cours de votre tour, tant que vous n'êtes pas en train de faire une action. S'il le fait, c'est la seule action qu'il obtient lors de ce tour. Vous ne pouvez plus le Diriger par la suite."
            ]
        },
        {
            "name"       : "Compagnon animal adulte (rôdeur)",
            "level"      : "6",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "Compagnon animal"
            ],
            "description": [
                "Votre compagnon animal devient un compagnon animal adulte et obtient des capacités supplémentaires.",
                "Votre compagnon animal possède une plus grande indépendance. Lors d'une rencontre, même si vous n'utilisez pas l'action sports_martial_artsDiriger un animal , votre compagnon animal peut toujours utiliser une action à votre tour pour Marcher rapidement ou pour Frapper. Il peut le faire à n'importe quel moment de votre tour, tant que vous n'êtes pas en train d'effectuer une action. Si elle le fait, c'est la seule action qu'elle obtient durant ce round - vous ne pouvez pas le Diriger plus tard."
            ]
        },
        {
            "name"       : "Compagnon furtif",
            "level"      : "14",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "Compagnon animal, Camouflage"
            ],
            "description": [
                "Vous avez dressé votre compagnon animal pour qu'il se fonde dans son environnement. Votre compagnon animal bénéficie des avantages du don military_techCamouflage . Si votre compagnon est un embusqueur spécialisé, son degré de maîtrise en Discrétion passe à maître (ou légendaire s'il était déjà maître)."
            ]
        },
        {
            "name"       : "Compagnon magistral",
            "level"      : "18",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "Maître chasseur, compagnon animal"
            ],
            "description": [
                "Votre compagnon animal maîtrise à présent toutes vos incroyables compétences de chasse, ce qui lui permet d'abattre avec facilité la proie que vous pourchassez. Quand vous sports_martial_artsChassez une proie , votre compagnon animal bénéficie de l'avantage de Maître chasseur associé à votre spécialité du chasseur, au lieu du simple avantage de votre spécialité du chasseur."
            ]
        },
        {
            "name"       : "Compagnon spécialisé (druide)",
            "level"      : "14",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "Formidable compagnon"
            ],
            "description": [
                "Votre compagnon animal continue de développer sa puissance et ses capacités. Il obtient une spécialisation de votre choix.",
                "Spécial Vous pouvez sélectionner ce don jusqu'à trois fois. Chaque fois, ajoutez une spécialisation différente à votre compagnon."
            ]
        },
        {
            "name"       : "Compagnon spécialisé (rôdeur)",
            "level"      : "16",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "Formidable compagnon"
            ],
            "description": [
                "Votre compagnon animal continue à grandir en puissance et en capacité et il est désormais assez malin pour devenir spécialisé. Votre compagnon animal obtient une spécialisation de votre choix.",
                "Spécial Vous pouvez choisir ce don jusqu'à trois fois. Chaque fois, ajoutez une spécialisation différente à votre compagnon."
            ]
        },
        {
            "name"       : "Compétence éclectique",
            "level"      : "8",
            "traits"     : [
                "Barde"
            ],
            "required"   : [
                "Touche-à-tout (muse de barde), maître en Occultisme"
            ],
            "description": [
                "Votre vaste expérience se traduit par une grande diversité de compétences. Votre bonus de compétence dans les compétences pour lesquelles vous êtes inexpérimenté est égal à votre niveau. Vous pouvez faire des tests de compétences qui vous demandent normalement d'être qualifié, même si vous êtes inexpérimenté. Si vous êtes légendaire en Occultisme, vous pouvez faire n'importe quel test de compétence qui demande normalement que vous soyez expert, même si vous êtes inexpérimenté ou qualifié."
            ]
        },
        {
            "name"       : "Composition annotée",
            "level"      : "10",
            "traits"     : [
                "Barde",
                "Exploration",
                "Linguistique"
            ],
            "required"   : [],
            "description": [
                "En transcrivant la composition sur le papier, vous pouvez créer une source de mots émouvants ou une chanson que d'autres peuvent lire et comprendre. Vous passez 10 minutes et dépensez un Point de composition pour transposer un sort de composition sur un parchemin spécial que vous ou une autre créature pouvez activer par la suite. Ce sort doit prendre une unique action pour être lancé. Si le sort de composition choisi nécessite un test de Représentation comme faisant partie de son incantation, le MJ effectue un test secret lorsque vous annotez votre enregistrement.",
                "Si vous possédez auto_awesomeComposition fortissimo ou auto_awesomeComposition prolongée , vous pouvez utiliser aussi un de ces sorts pour modifier la composition annotée, tant que la composition annotée peut bénéficier de cette composition. Le MJ lance en secret le test de Représentation. Si vous le faites, vous dépensez un Point de focalisation supplémentaire, même si le test secret est un échec.",
                "Toute créature qui peut lire le langage que vous avez utilisé lorsque vous avez annoté votre composition peut Activer l'objet en dépensant une unique action, qui possède le trait concentration. Cela produit les effets de la composition comme si la créature l'activant avait Lancé le sort.",
                "Une composition que vous créez de cette manière perd son pouvoir lors de vos prochains préparatifs quotidiens. Tant que la composition est en votre possession, vous pouvez la rendre inerte en utilisant une unique action qui possède le trait concentration. Vous ne pouvez pas regagner les Points de focalisation que vous avez dépensés pour créer la composition annotée jusqu'à ce qu'elle soit activée ou perde sa magie."
            ]
        },
        {
            "name"       : "Composition fortissimo",
            "level"      : "8",
            "traits"     : [
                "Barde"
            ],
            "required"   : [
                "Virtuose (muse de barde), Réserve de focalisation"
            ],
            "description": [
                "Vos représentations inspirent vos alliés pour les pousser à accomplir des exploits toujours plus grands. Vous apprenez le sort focalisé de mutamagie military_techComposition fortissimo . Augmentez de 1 le nombre de points de focalisation de votre réserve."
            ]
        },
        {
            "name"       : "Composition insolite 1",
            "level"      : "10",
            "traits"     : [
                "Barde",
                "Concentration",
                "Manipulation",
                "Mutamagie"
            ],
            "required"   : [
                "Touche-à-tout (muse de barde)"
            ],
            "description": [
                "Vous pouvez traduire l'émotion et la puissance d'une composition par d'autres moyens. Si votre prochaine action consiste à lancer un sort de composition qui possède les traits visuel ou audible, vous pouvez utiliser lui faire affecter des créatures qui en sont les témoins par n'importe quel sens, pas juste celui que le trait détermine, même à travers des sens spéciaux comme Perception des vibrations. Vous pouvez choisir d'exclure des sens de votre choix."
            ]
        },
        {
            "name"       : "Composition perpétuelle",
            "level"      : "18",
            "traits"     : [
                "Barde"
            ],
            "required"   : [
                "Virtuose (muse de barde)"
            ],
            "description": [
                "Le monde est une scène sur laquelle vous vous produisez sans cesse. Vous êtes constamment sentiment_very_dissatisfiedAccéléré . Vous pouvez utiliser votre action supplémentaire uniquement pour Lancer un tour de magie de composition nécessitant 1 action pour le lancer. En mode exploration, vous pouvez déclarer que vous produisez un tour de magie de composition éligible pendant que vous utilisez n'importe quelle tactique d'exploration. Même avant votre premier tour lors d'une rencontre de combat, ce tour de magie est actif comme si vous l'aviez lancé lors du tour précédent."
            ]
        },
        {
            "name"       : "Composition prolongée",
            "level"      : "1",
            "traits"     : [
                "Barde"
            ],
            "required"   : [
                "Virtuose (muse de barde)"
            ],
            "description": [
                "En ajoutant des fioritures, vous rendez vos compositions plus durables. Vous apprenez le sort focalisé auto_awesomeComposition prolongée ."
            ]
        },
        {
            "name"       : "Concentration aisée f",
            "level"      : "16",
            "traits"     : [
                "Barde",
                "Druide",
                "Ensorceleur",
                "Conjurateur",
                "Sorcier",
                "Magicien"
            ],
            "required"   : [],
            "description": [
                "Conditions Votre tour commence.",
                "Vous maintenez vos sorts actifs avec à peine une pensée. Vous obtenez immédiatement les effets de l'action sports_martial_artsMaintenir pour l'un de vos sorts de classe actif."
            ]
        },
        {
            "name"       : "Concoction instable",
            "level"      : "10",
            "traits"     : [
                "Additif",
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez mélanger un liquide merveilleux mais volatile à un consommable alchimique si son effet initial utilise des dés. Vous augmentez la taille des dés de l'effet initial de l'objet d'un degré. Par exemple, vous pouvez augmenter les dégâts d'un workFeu grégeois modéré à 2d10 ou les soins d'un workÉlixir de vie modéré à 5d8+12. Comme cela n'affecte que les dés initiaux, cela n'augmenterait pas les dégâts d'attaque à mains nues d'un mutagène bestial, les dégâts persistants d'une fiole d'acide, et ce genre de choses. Lorsque cet objet est activé, la créature qui l'active doit réussir un casinoTest nu, DD 10 ou subir des dégâts d'acide égaux au niveau de l'objet."
            ]
        },
        {
            "name"       : "Conduit de vide et de vitalité 2",
            "level"      : "16",
            "traits"     : [
                "Lié à une malédiction",
                "Divin",
                "Oracle"
            ],
            "required"   : [
                "tout mystère d'oracle"
            ],
            "description": [
                "Conditions auto_awesomeGuérison ou auto_awesomeMise à mal est un sort emblématique et vous disposez d'une emplacement disponible pour le lancer.",
                "Vous utilisez l'énergie instable de votre malédiction pour manipuler la plus basique des énergies divines. Vous lancez le sort Guérison ou Mise à mal à 3 actions, en dépensant l'emplacement du sort comme à l'ordinaire. Si le sort fait récupérer des Points de vie à une ou plusieurs créatures, alors une des créatures soignées par ce sort regagne un nombre supplémentaire de Points de vie égal à 1d8 x la valeur de votre état sentiment_very_dissatisfiedLié à la malédiction . Si le sort inflige des dégâts à une ou plusieurs créatures, alors une des créatures blessées par ce sort subit un nombre de dégâts supplémentaires égal à 1d8 x la valeur de votre état Lié à la malédiction."
            ]
        },
        {
            "name"       : "Conduit du lignage 1",
            "level"      : "20",
            "traits"     : [
                "Ensorceleur",
                "Mutamagie"
            ],
            "required"   : [],
            "description": [
                "Fréquence Une fois par minute",
                "Votre nature magique innée vous permet de rediriger les énergies ambiantes pour alimenter vos sorts. Si votre prochaine action consiste à Lancer un sort sans durée de rang 5 ou moins, vous ne dépensez pas d'emplacement lorsque vous le lancez."
            ]
        },
        {
            "name"       : "Conduit mystérieux f",
            "level"      : "20",
            "traits"     : [
                "Lié à une malédiction",
                "Oracle",
                "Mutamagie"
            ],
            "required"   : [],
            "description": [
                "Le pouvoir de votre mystère vous permet d'accéder à une myriade de magies. si votre prochaine action consiste à Lancer un sort de rang 5 ou moins qui n'a pas de durée, vous ne dépensez pas d'emplacement de sort."
            ]
        },
        {
            "name"       : "Conduit tellurique 1",
            "level"      : "20",
            "traits"     : [
                "Concentration",
                "Druide",
                "Manipulation",
                "Mutamagie"
            ],
            "required"   : [],
            "description": [
                "Fréquence Une fois par minute",
                "Vous pouvez puiser de la magie des lignes telluriques du monde. Si votre prochaine action consiste à Lancer un sort de rang inférieur ou égal à 5 sans durée, vous ne dépensez pas le sort préparé lorsque vous le lancez."
            ]
        },
        {
            "name"       : "Connaissance assurée",
            "level"      : "6",
            "traits"     : [
                "Barde"
            ],
            "required"   : [
                "Énigmatique (Muse de barde)"
            ],
            "description": [
                "Vous pouvez fournir des informations en toute confiance. Lorsque vous sports_martial_artsVous souvenez en utilisant n'importe quelle compétence (incluant Connaissance bardique), vous pouvez ne pas effectuer de test pour obtenir à la place un résultat de 10 + votre bonus de maîtrise (n'appliquer aucun autre bonus, aucune pénalité ou aucun autre modificateur).",
                "Tant que vous avez le rang expert dans une compétence, vous remplissez les conditions du don de compétence military_techConnaissance automatique dans cette compétence, même si vous n'avez pas le don military_techAssurance dans cette compétence."
            ]
        },
        {
            "name"       : "Connaissance bardique",
            "level"      : "1",
            "traits"     : [
                "Barde"
            ],
            "required"   : [
                "Énigmatique (muse de barde)"
            ],
            "description": [
                "Vos recherches vous permettent de rester informé dans pratiquement tous les domaines. Vous êtes qualifié en Connaissance bardique, une compétence de Connaissance spéciale que vous pouvez utiliser pour sports_martial_artsVous souvenir à propos de tout sujet. Si vous êtes légendaire en Occultisme, vous devenez expert en Connaissance bardique mais vous ne pouvez améliorer votre degré de maîtrise dans cette compétence par aucun autre moyen."
            ]
        },
        {
            "name"       : "Connaissance de l'énigme",
            "level"      : "12",
            "traits"     : [
                "Barde"
            ],
            "required"   : [
                "Connaissance assurée"
            ],
            "description": [
                "Votre muse vous murmure son savoir à tous les moments utiles. Vous obtenez les avantages du don de compétence military_techSavoir automatique avec toute compétence que vous pouvez utiliser pour sports_martial_artsVous souvenir . Comme avec la clause spéciale du don Savoir automatique, vous ne pouvez utiliser Savoir automatique qu'une seule fois par round."
            ]
        },
        {
            "name"       : "Connaissance des formes f",
            "level"      : "4",
            "traits"     : [
                "Lié à une malédiction",
                "Oracle",
                "Mutamagie"
            ],
            "required"   : [
                "Sort éloigné ou Sort élargi"
            ],
            "description": [
                "L'inspiration vous permet de dépasser vos idées préconçues sur les limites de vos sorts. Vous utilisez military_techSort éloigné ou military_techSort élargi par une action gratuite."
            ]
        },
        {
            "name"       : "Connaisseur",
            "level"      : "1",
            "traits"     : [
                "Barde"
            ],
            "required"   : [],
            "description": [
                "Vous êtes résistant aux influences des représentations qui ne sont pas les vôtres. Vous obtenez un bonus de circonstances de +1 aux jets de sauvegarde contre les effets ayant les traits audible, illusion, linguistique, sonique ou visuel."
            ]
        },
        {
            "name"       : "Conservation de forme",
            "level"      : "8",
            "traits"     : [
                "Magicien"
            ],
            "required"   : [],
            "description": [
                "Vous avez entraîné votre corps et votre esprit à tolérer la magie de métamorphose pendant de plus longues périodes de temps, tant que vous pouvez vous préparer pour le changement de manière appropriée. Lorsque vous préparez un sort de métamorphose qui dure 1 minute et accorde une forme de combat, vous pouvez préparer le sort dans un emplacement de 2 rangs supérieurs à la normale. Cela ne vous donne pas les avantages normaux de l'intensification d'un sort mais vous permet de faire durer le sort jusqu'à 10 minutes. Par exemple, si vous avez préparé auto_awesomeForme animale dans un emplacement de sort de rang 4 avec Conservation de forme, vous pourriez lancer Forme animale au rang 2 qui dure jusqu'à 10 minutes. Si le sort peut être Révoqué, cela ne change pas."
            ]
        },
        {
            "name"       : "Conservation du lien 1",
            "level"      : "8",
            "traits"     : [
                "Manipulation",
                "Mutamagie",
                "Magicien"
            ],
            "required"   : [
                "lien arcanique"
            ],
            "description": [
                "Conditions La dernière action que vous avez utilisée a été de Lancer un sort par le biais de sports_martial_artsDrain d'objet lié .",
                "En manipulant soigneusement les énergies magiques libérées par votre objet lié, vous pouvez conserver juste assez de puissance pour lancer un autre sort, bien que ce second sort soit légèrement plus faible. Vous obtenez une utilisation supplémentaire de Drain d'objet lié. Vous pouvez l'utiliser pour lancer un sort d'au minimum deux rangs de moins que le précédent sort lancé et devez l'utiliser avant la fin de votre prochain tour ou le perdre."
            ]
        },
        {
            "name"       : "Consommer un sort",
            "level"      : "14",
            "traits"     : [
                "Ensorceleur"
            ],
            "required"   : [
                "Contresort"
            ],
            "description": [
                "Lorsque vous réussissez à military_techContrer un sort de la tradition qui correspond à votre lignage, vous le consommez, en vous réapprovisionnant en énergie. Vous êtes alors nourri comme si vous aviez mangé un repas et vous regagnez des Points de vie correspondant au double du rang du sort contré."
            ]
        },
        {
            "name"       : "Contact accélérant",
            "level"      : "4",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "sort de dévotion (Imposition des mains)"
            ],
            "description": [
                "Vos énergies qui permettent de soigner sont également imprégnées d'énergie motrice. Une créature qui récupère des Points de vie grâce à votre auto_awesomeImposition des mains obtient un bonus de statut de +3 mètres à sa Vitesse jusqu'à la fin de son prochain tour.",
                "flareEffet : Contact accélérant"
            ]
        },
        {
            "name"       : "Contournement stratégique",
            "level"      : "14",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [],
            "description": [
                "Vos plans tiennent compte des résistances de vos ennemis, vous permettant d'infliger des coups terribles. Lorsque vous touchez avec une Frappe à laquelle vous avez substitué le jet d'attaque en utilisant sports_martial_artsConcevoir un stratagème , vous ignorez un montant de résistance égal à votre modificateur d'Intelligence pour chaque résistance qui s'applique contre votre attaque."
            ]
        },
        {
            "name"       : "Contrarier",
            "level"      : "2",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Vos moqueries et menaces vous valent la colère de vos ennemis. Lorsque vous réussissez à sports_martial_artsDémoraliser une créature, son état sentiment_very_dissatisfiedEffrayé ne peut décroître à moins de 1 à la fin de son tour tant qu'elle n'a pas soit utilisé une action hostile contre vous soit ne puisse plus vous observer ou vous sentir pendant au moins 1 round."
            ]
        },
        {
            "name"       : "Contre-frappe bénie 1",
            "level"      : "12",
            "traits"     : [
                "Champion",
                "Sophistication"
            ],
            "required"   : [
                "réaction de champion qui accorde une résistance à un allié contre des dégâts ennemis (incluant les causes de grandeur, justice, libération et rédemption)"
            ],
            "description": [
                "Conditions Un ennemi a déclenché votre réaction de champion depuis la fin de votre dernier tour.",
                "Vous faites appel à la puissance divine et portez une Frappe avec une arme ou à mains nues contre l'ennemi qui a déclenché votre réaction de champion. La Frappe inflige un dé de dégâts d'arme supplémentaire. Si cette Frappe touche, jusqu'au début de votre prochain tour, la cible obtient une faiblesse égale à la moitié de votre niveau à toutes les Frappes que vous et vos alliés lui portez.",
                "flareEffet : Contre-frappe bénie"
            ]
        },
        {
            "name"       : "Contremesures infatigables",
            "level"      : "20",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez réagir lorsque un ennemi laisse un trou dans sa défense. Au début du tour de chaque ennemi, vous obtenez une réaction supplémentaire que vous pouvez utiliser seulement durant ce tour pour accomplir une Riposte opportune ou une Frappe réactive si vous avez cette réaction."
            ]
        },
        {
            "name"       : "Contresort astucieux",
            "level"      : "12",
            "traits"     : [
                "Magicien"
            ],
            "required"   : [
                "Contresort, Reconnaissance rapide"
            ],
            "description": [
                "Vous appliquez de façon créative vos sorts préparés pour contrer une plus grande variété de magie ennemie. Au lieu de ne pouvoir contrer qu'un sort ennemi avec military_techContresort que si vous avez préparé ce même sort, vous pouvez utiliser Contresort tant que le sort que lance l'ennemi figure dans votre grimoire. Quand vous utilisez Contresort de cette manière, le sort préparé dépensé doit partager un trait autre que concentration ou manipulation ou le trait de sa tradition avec celui qu'il contre. Le MJ pourrait vous autoriser à utiliser à la place utiliser un sort doté d'un trait opposé ou qui contre logiquement le sort adverse (en vous servant par exemple d'un sort de froid ou d'eau pour contrer Boule de feu ou Clarté d'esprit pour contrer un sort de Terreur)."
            ]
        },
        {
            "name"       : "Contresort préparé r",
            "level"      : "1",
            "traits"     : [
                "Sorcier",
                "Magicien"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Une créature Lance un sort que vous avez préparé.",
                "Quand un ennemi Lance un sort et que vous pouvez voir ses manifestations, vous pouvez utiliser votre propre magie pour l'interrompre. Vous dépensez un sort préparé pour contrer l'incantation déclencheuse du même sort lancé par la créature. Vous perdez votre emplacement de sort comme si vous aviez lancé le sort déclencheur. Puis, vous tentez alors de contrer le sort déclencheur.",
                "Spécial Ce don possède le trait correspondant à la tradition des sorts que vous lancez (arcanique, divin, primordial ou occulte)."
            ]
        },
        {
            "name"       : "Contresort spontané r",
            "level"      : "1",
            "traits"     : [
                "Ensorceleur"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Une créature Lance un sort que vous avez dans votre répertoire.",
                "Conditions Il vous reste un emplacement de sort utilisable pour lancer le sort déclencheur.",
                "Quand un ennemi Lance un sort et que vous pouvez voir sa manifestation, vous pouvez recourir à votre propre magie pour le contrer. Quand une créature lance un sort qui se trouve également dans votre répertoire, vous pouvez dépenser l'un de vos emplacements de sorts pour le contrer. Vous perdez votre emplacement de sort comme si vous aviez lancé le sort déclencheur. Vous tentez ensuite de contrer ce sort.",
                "Spécial Ce don possède le trait correspondant à votre tradition magique (arcanique, divine, primordiale ou occulte)."
            ]
        },
        {
            "name"       : "Contrôle de la forme 1",
            "level"      : "4",
            "traits"     : [
                "Druide",
                "Manipulation",
                "Mutamagie"
            ],
            "required"   : [
                "Forme indomptée"
            ],
            "description": [
                "Avec des efforts et des précautions supplémentaires, vous pouvez prendre une forme alternative pour une plus grande période de temps. Si votre prochaine action consiste à lancer auto_awesomeForme indomptée , le rang du sort est de 2 inférieur à la normale (rang 1 au minimum), mais vous pouvez rester transformé pendant 1 heure ou pendant toute la durée indiquée (si cette durée est plus longue). Vous pouvez toujours Révoquer Forme indomptée comme à l'ordinaire."
            ]
        },
        {
            "name"       : "Contrôle des morts-vivants 1",
            "level"      : "4",
            "traits"     : [
                "Prêtre",
                "Concentration",
                "Mutamagie"
            ],
            "required"   : [
                "Source de mise à mal, Alignement mauvais"
            ],
            "description": [
                "Vous saisissez la force qui circule dans le corps d'un mort-vivant et qui permet de l'animer afin de le plier à votre volonté. Si la prochaine action que vous effectuez consiste à lancer auto_awesomeMise à mal en prenant pour cible un mort-vivant, vous transformez les effets de ce sort. Au lieu des effets normaux de Mise à mal, vous contrôlez la cible si son niveau est égal ou inférieur au vôtre -3. Elle peut faire un jet de Volonté pour ne pas être contrôlée. Si elle est déjà sous le contrôle de quelqu'un d'autre, celui-ci fait aussi un jet de sauvegarde et le mort-vivant utilise le meilleur résultat.",
                "Succès critique La cible ne subit aucun effet et elle est temporairement immunisée pendant 24 h.",
                "Succès La cible n'est pas affectée.",
                "Échec Le mort-vivant devient un sbire sous votre contrôle. Le sort a une durée d'une minute, mais il est révoqué si vous ou un allié attaquez le sbire mort-vivant.",
                "Échec critique Comme en cas d'échec, mais la durée est d'une heure."
            ]
        },
        {
            "name"       : "Contrôle des morts-vivants amélioré",
            "level"      : "10",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [
                "alignement mauvais, Contrôle des morts-vivants, source de mise à mal"
            ],
            "description": [
                "Les morts-vivants se retrouvent dans l'impossibilité presque totale de résister à vos ordres. Quand vous utilisez military_techContrôle des morts-vivants , si le mort-vivant réussit son jet de sauvegarde mais n'obtient pas un succès critique, il devient votre sbire pendant un round. Si le mort-vivant rate son jet de sauvegarde, il devient votre sbire pendant dix minutes. S'il obtient un échec critique, il devient votre sbire pendant 24 h."
            ]
        },
        {
            "name"       : "Contrôle parfait de la forme",
            "level"      : "18",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "Contrôle de la forme, Force +4"
            ],
            "description": [
                "Grâce à la magie et à votre mémoire musculaire, vous pouvez rester indéfiniment dans vos formes alternatives. Quand vous utilisez military_techContrôle de la forme , au lieu de durer 1 heure, la durée de auto_awesomeForme indomptée est illimitée (Vous pouvez toujours le Révoquer)."
            ]
        },
        {
            "name"       : "Convocations élémentaires",
            "level"      : "4",
            "traits"     : [
                "Druide"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez faire appel aux éléments Vous pouvez passer 10 minutes en symbiose avec la nature pour remplacer un des sorts que vous avez préparé dans un des emplacements de sort de druide avec un sort de auto_awesomeConvocation d'élémentaire de même rang."
            ]
        },
        {
            "name"       : "Convocations primordiales",
            "level"      : "12",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "Appel de la nature"
            ],
            "description": [
                "Chaque fois que vous invoquez un allié, vous pouvez le renforcer avec la puissance élémentaire de l'air, de la terre, du feu ou de l'eau. Vous obtenez le sort d'ordre auto_awesomeConvocations primordiales ."
            ]
        },
        {
            "name"       : "Coordination défensive 1",
            "level"      : "6",
            "traits"     : [
                "Audible",
                "Barde",
                "Concentration",
                "Mutamagie"
            ],
            "required"   : [
                "Combattant (Muse de barde), Hymne de ralliement"
            ],
            "description": [
                "Comme les héros des contes qui persistent face à des auspices écrasants, vous et vos alliés tenez la ligne. Si votre prochaine action consiste à lancer le tour de magie de composition auto_awesomeHymne de ralliement , vous pouvez Lever un bouclier et un allié qui obtient un bonus de statut à l'aide de ce sort peut immédiatement utiliser sa réaction pour Lever un bouclier."
            ]
        },
        {
            "name"       : "Côte à côte (Druide)",
            "level"      : "10",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "Compagnon animal"
            ],
            "description": [
                "Vous et votre compagnon animal combattez en tandem, en détournant l'attention de vos adversaires et en les maintenant dans une position désavantageuse. À chaque fois que vous et votre compagnon animal êtes adjacents au même adversaire, on considère que vous le prenez tous deux en tenaille, quelles que soient vos positions."
            ]
        },
        {
            "name"       : "Côte à côte (Rôdeur)",
            "level"      : "12",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "un compagnon animal"
            ],
            "description": [
                "Vous et votre compagnon animal combattez en tandem. Lorsque vous et votre compagnon animal êtes adjacents au même adversaire, on considère que vous le prenez tous deux en tenaille, quelles que soient vos positions relatives."
            ]
        },
        {
            "name"       : "Coup à distance courte 2",
            "level"      : "6",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "Frappes expertes"
            ],
            "description": [
                "Vous placez toute votre force en un unique et puissant coup soigneusement contrôlé. Faites une sports_martial_artsFrappe à mains nues. Si vous dépensez deux actions et que cette Frappe touche, vous infligez un dé supplémentaire de dégâts d'arme. Vous pouvez à la place dépenser 3 actions pour accomplir un coup encore plus puissant, infligeant un second dé de dégâts d'arme supplémentaire si vous touchez.",
                "Si vous êtes au moins au niveau 10, le nombre de dés supplémentaires que vous ajoutez du fait de ce don double, pour un total de 2 dés supplémentaires si vous dépensez 2 actions ou 4 dés supplémentaires si vous dépensez 3 actions. Si vous êtes au moins au niveau 18, le nombre de dés supplémentaires que vous ajoutez du fait de ce don est triplé, pour un total de 3 dés supplémentaires si vous dépensez 2 actions ou 6 dés supplémentaires si vous dépensez 3 actions."
            ]
        },
        {
            "name"       : "Coup à infime distance",
            "level"      : "16",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "Coup à courte distance"
            ],
            "description": [
                "Vos coups de poings ont une force et un contrôle incroyable. Lorsque vous infligez des dégâts à une cible en utilisant Coup à courte distance, vous pouvez concentrer votre Qi pour l'envoyer voler. Si vous le faites, la cible doit tenter un jet de casinoVigueur contre votre DD de classe.",
                "Succès critique La cible n'est pas affectée.",
                "Succès La cible est repoussée d'1,50 m.",
                "Échec La cible est repoussée de 3 mètres.",
                "Échec critique La cible est repoussée de 3 mètres pour chaque action que vous avez dépensée pour le Coup à courte distance."
            ]
        },
        {
            "name"       : "Coup annihilateur 2",
            "level"      : "20",
            "traits"     : [
                "Barbare"
            ],
            "required"   : [],
            "description": [
                "Vous avez adopté une puissance brute destructrice. Vous faites une Frappe au corps-à-corps qui ignore toute résistance que la cible possède. Si vous ciblez un objet solide non tenu ou une surface avec votre Frappe, vous pouvez automatiquement les détruire sans jet d'attaque. Si vous ciblez un objet ou une surface avec une Solidité de 20 ou inférieure qui n'est pas un objet magique ou l'effet d'un sort, vous les détruisez. Si l'objet ou la surface ciblées sont un objet magique ou l'effet d'un sort, vous tentez de la contrer en utilisant votre bonus d'attaque avec la Frappe comme test de Contre. Votre rang de contre est de 10. En cas de succès au test de contre, vous détruisez l'objet ou la surface à moins qu'ils ne possèdent une Solidité supérieure à 20, qu'il ne s'agisse d'un artefact ou d'un objet similaire difficile à détruire. Vous détruisez l'équivalent d'un cube de 1,5 d'un objet ou d'une surface si sa taille est supérieure à Moyenne."
            ]
        },
        {
            "name"       : "Coup catapultant 2",
            "level"      : "16",
            "traits"     : [
                "Moine"
            ],
            "required"   : [],
            "description": [
                "Vous prenez un moment pour vous recentrer vous-même, puis relâchez un coup puissant qui envoie valdinguer au loin votre cible.",
                "Faites une Frappe à mains nues. Si vous touchez, la cible doit réussir un jet de casinoVigueur contre votre DD de classe ou être Poussée à 3 mètres directement face à vous (ou à 6 mètres en cas de coup critique) et se retrouver sentiment_very_dissatisfiedÀ terre .",
                "Si une autre créature ou objet physique vient faire obstacle à ce déplacement, votre cible comme l'objet ou la créature qui la bloquent subissent casino1d6 dégâts contondants par tranche de 1,50 mètre de déplacement qui a été ainsi empêché."
            ]
        },
        {
            "name"       : "Coup de pied sauté 2",
            "level"      : "4",
            "traits"     : [
                "Moine"
            ],
            "required"   : [],
            "description": [
                "Vous bondissez sur un ennemi. Faites un sports_martial_artsBond ou tentez un sports_martial_artsSaut en hauteur ou un sports_martial_artsSaut en longueur . À la fin du saut, si vous êtes adjacent à un adversaire, vous pouvez immédiatement le Frapper à mains nues, même s'il est dans les airs. Vous retombez au sol après la Frappe. Si vous chutez d'une distance inférieure ou égale à la hauteur de votre saut, vous ne subissez aucun dégât et retombez sur vos pieds."
            ]
        },
        {
            "name"       : "Coup de poignard opportuniste r",
            "level"      : "8",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Une créature qui se trouve dans votre zone d'allonge au corps-à-corps est touchée par une attaque de corps-à-corps de l'un de vos alliés.",
                "Quand votre ennemi est touché par votre allié, vous profitez de cette distraction. Faites une Frappe contre la créature déclencheuse."
            ]
        },
        {
            "name"       : "Coup déséquilibrant",
            "level"      : "2",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [
                "Trafic de voleur"
            ],
            "description": [
                "Vous enchaînez vos attaques les plus puissantes avec grâce et désarçonnez temporairement vos adversaires. À chaque fois que votre Frappe est un coup critique qui inflige des dégâts, la cible se trouve sentiment_very_dissatisfiedPrise au dépourvu face à vos attaques jusqu'à la fin de votre prochain tour."
            ]
        },
        {
            "name"       : "Coup étourdissant 1",
            "level"      : "6",
            "traits"     : [
                "Guerrier",
                "Persévérer"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous sentiment_very_dissatisfiedAgrippez une créature.",
                "Vous donnez un coup de poing à votre adversaire agrippé, en espérant le faire chanceler. Faites une Frappe au corps-à-corps contre une créature que vous avez agrippée. Les dégâts de l'arme de cette Frappe sont des dégâts contondants. Si la Frappe touche, la créature doit effectuer un jet de casinoVigueur contre votre DD de classe ; c'est un effet de mise hors de combat.",
                "Succès critique La créature n'est pas affectée.",
                "Succès La créature est sentiment_very_dissatisfiedÉtourdie 1 .",
                "Échec La créature est sentiment_very_dissatisfiedÉtourdie 2 .",
                "Échec critique La créature est sentiment_very_dissatisfiedÉtourdie 3 ."
            ]
        },
        {
            "name"       : "Coup fabuleux",
            "level"      : "14",
            "traits"     : [
                "Barbare",
                "Concentration",
                "Rage"
            ],
            "required"   : [
                "Repousser"
            ],
            "description": [
                "Vos attaques sont si puissantes qu'elles peuvent écraser vos adversaires. Quand vous utilisez military_techRepousser , vous pouvez faire un test d' casinoAthlétisme contre le DD de Vigueur de votre cible.",
                "Succès critique Vous obtenez l'effet d'un succès critique pour sports_martial_artsPousser puis la cible subit l'effet de succès critique d'un sports_martial_artsCroc-en-jambe .",
                "Succès Vous obtenez l'effet d'un succès pour Pousser, puis la cible subit l'effet d'un succès avec Croc-en-jambe.",
                "Échec Vous appliquez les effets normaux de Repousser."
            ]
        },
        {
            "name"       : "Coup retentissant 2",
            "level"      : "10",
            "traits"     : [
                "Barbare",
                "Rage"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez une arme au corps-à-corps qui inflige des dégâts contondants",
                "Vous frappez votre ennemi à la tête avec une telle force que ses oreilles bourdonnent. Faites une Frappe au corps-à-corps. Si cette Frappe touche et inflige des dégâts, la cible est sentiment_very_dissatisfiedSourde jusqu'au début de votre prochain tour (ou pendant 1 minute en cas de coup critique)."
            ]
        },
        {
            "name"       : "Coup surpuissant 3",
            "level"      : "16",
            "traits"     : [
                "Guerrier"
            ],
            "required"   : [],
            "description": [
                "Vous mettez votre poids dans votre attaque puissante mais cela vous laisse vulnérable. Faites une Frappe au corps-à-corps. Cela compte comme trois attaques lorsque vous calculez votre pénalité d'attaques multiples. Si cette Frappe touche, vous obtenez un coup critique. Si vous obtenez un coup critique, votre attaque obtient aussi le trait mortel d12 (Cela remplace tout trait mortel qu'elle aurait déjà). Que vous touchiez ou non, vous êtes sentiment_very_dissatisfiedÉtourdi 1 et êtes sentiment_very_dissatisfiedPris au dépourvu jusqu'au début de votre prochain tour."
            ]
        },
        {
            "name"       : "Coup tranchant r",
            "level"      : "6",
            "traits"     : [
                "Barbare",
                "Rage"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Vous portez une Frappe au corps-à-corps qui réduit à 0 les Points de vie d'un ennemi et un autre ennemi se trouve dans un espace adjacent à cette créature.",
                "Votre coup traverse un adversaire et en frappe un autre. Faites une Frappe au corps-à-corps contre le second ennemi."
            ]
        },
        {
            "name"       : "Coup vicieux 2",
            "level"      : "1",
            "traits"     : [
                "Guerrier",
                "Sophistication"
            ],
            "required"   : [],
            "description": [
                "Vous portez une attaque particulièrement puissante qui assène un coup violent mais vous déséquilibre légèrement. Effectuez une Frappe au corps-à-corps. Elle compte comme deux attaques pour le calcul de votre pénalité d'attaques multiples. Si elle touche, vous infligez un dé de dégâts d'arme supplémentaire. Si vous êtes au moins de niveau 10, vous infligez deux dés supplémentaires et trois dés supplémentaires si vous êtes au moins de niveau 18."
            ]
        },
        {
            "name"       : "Coupe dissipante 2",
            "level"      : "16",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Votre attaque sournoise tranche les fils qui lient la magie à une cible. Faites une Frappe contre une créature sentiment_very_dissatisfiedPrise au dépourvu . Si votre Frappe inflige des dégâts d'attaque sournoise, vous tentez de casinoclass un unique sort qui affecte cette cible (à votre choix). Votre rang de contre est égal à la moitié de votre niveau (arrondi au supérieur) et votre modificateur de test est égal à votre DD de classe -10."
            ]
        },
        {
            "name"       : "Coups étourdissants",
            "level"      : "2",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "Déluge de coups"
            ],
            "description": [
                "La puissance focalisée de votre déluge peut venir à bout de votre adversaire. Quand vous prenez pour cible la même créature avec deux Frappes de votre sports_martial_artsDéluge de coups , vous pouvez tenter de l'étourdir. Si l'une de ces deux Frappes touche et inflige des dégâts, la cible doit réussir un jet de casinoVigueur contre votre DD de classe ou être sentiment_very_dissatisfiedÉtourdie 1 (ou sentiment_very_dissatisfiedÉtourdie 3 en cas d'échec critique). Il s'agit d'un effet de mise hors de combat."
            ]
        },
        {
            "name"       : "Coups fracassants",
            "level"      : "16",
            "traits"     : [
                "Barbare",
                "Rage"
            ],
            "required"   : [],
            "description": [
                "Vos coups emplis de force brisent les objets facilement. Lorsque vous êtes enragé, les dégâts de vos Frappes au corps-à-corps ignorent les 5 premiers points de Solidité d'un objet. Si vous possédez la capacité de classe Dévastateur , les dégâts ignorent à la place les 10 premiers points de solidité d'un objet."
            ]
        },
        {
            "name"       : "Courage machinal r",
            "level"      : "8",
            "traits"     : [
                "Audible",
                "Barde",
                "Concentration"
            ],
            "required"   : [
                "Combattant (Muse de barde)"
            ],
            "description": [
                "Déclencheur Une créature dans votre allonge utilise un effet audible, une action de manipulation ou une action de déplacement ; fait une attaque à distance ; ou quitte une case durant son action de déplacement.",
                "Conditions Vous êtes affecté par auto_awesomeHymne de courage .",
                "Vous beuglez un féroce appel aux armes, vous donnant l'inspiration pour vous défouler contre un adversaire. Faites une Frappe au corps-à-corps contre la créature déclencheuse. Si l'attaque est un coup critique et que le déclencheur était une action de manipulation, l'action est interrompue."
            ]
        },
        {
            "name"       : "Courant de sort 1",
            "level"      : "6",
            "traits"     : [
                "Concentration",
                "Druide",
                "Mutamagie"
            ],
            "required"   : [],
            "description": [
                "Lorsque vous utilisez la magie pour manipuler l'air ou l'eau, vous détournez une partie de ses courants pour former une barrière autour de vous. Si votre prochaine action consiste à Lancer un sort avec le trait air ou eau, jusqu'au début de votre prochain tour, vous obtenez un bonus de circonstances de +1 à la CA ou un bonus de circonstances de +2 à la CA contre les attaques à distance. Cet effet possède le trait air ou eau, voire les deux, en fonction des traits du sort que vous lancez. Vous obtenez aussi un bonus de circonstances de +1 à tous les jets de sauvegarde contre les effets avec le trait air, le trait eau ou les deux jusqu'au début de votre prochain tour, en fonction des traits du sort.",
                "flareEffet : Courant de sort"
            ]
        },
        {
            "name"       : "Courroux désespéré f",
            "level"      : "16",
            "traits"     : [
                "Barbare",
                "Rage"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Votre tour commence et vos Points de vie sont à la moitié de votre total ou moins.",
                "Votre sang bout lorsque vous prenez une raclée et vous abandonnez alors toute précaution pour finir le combat. Vous obtenez un bonus de circonstances de +2 à vos jets d'attaque, une pénalité de -1 à la CA et une pénalité de -1 aux jets de sauvegarde. Ces bonus et pénalités durent jusqu'à la fin de votre Rage ou jusqu'à ce que vous soyez revenu au-dessus de la moitié de vos Points de vie, selon ce qui se produit en premier."
            ]
        },
        {
            "name"       : "Course à la verticale 1",
            "level"      : "8",
            "traits"     : [
                "Moine"
            ],
            "required"   : [],
            "description": [
                "Vous défiez la gravité en franchissant avec aisance des surfaces verticales. Vous Marchez rapidement d'une distance égale à votre Vitesse. Vous devez commencer votre déplacement sur une surface horizontale.",
                "Pendant ce déplacement, vous pouvez marcher sur des surfaces verticales, comme des murs, à votre Vitesse normale. Si vous terminez votre déplacement ailleurs que sur le sol, vous chutez après votre prochaine action ou quand votre tour se termine, selon ce qui se produit en premier (mais vous pouvez toujours sports_martial_artsVous raccrocher in extremis , si la situation le permet).",
                "Si vous possédez military_techFoulée sur l'eau ou un pouvoir similaire, la Course à la verticale vous permet de fouler des surfaces verticales fragiles, ainsi que des surfaces liquides verticales, comme une chute d'eau."
            ]
        },
        {
            "name"       : "Course furieuse 2",
            "level"      : "10",
            "traits"     : [
                "Barbare",
                "Rage"
            ],
            "required"   : [],
            "description": [
                "Vous vous précipitez en avant. Vous Marchez rapidement 5 fois ou jusqu'à 8 fois si vous avez utilisé 3 actions. L'entièreté de ce déplacement doit se faire en ligne droite (bien que le MJ puisse autoriser des ajustements raisonnables). Vous pouvez remplacer n'importe laquelle de ces Marches rapides par une action de sports_martial_artsGarder l'équilibre si cela s'avère nécessaire, pour lequel vous tentez d'utiliser un test d' sports_martial_artsAthlétisme au lieu d'utiliser Acrobaties, en utilisant le même DD."
            ]
        },
        {
            "name"       : "Couteau cérémoniel",
            "level"      : "6",
            "traits"     : [
                "Sorcier"
            ],
            "required"   : [],
            "description": [
                "Vous avez préparé un couteau spécial pour diriger les énergies lors de vos incantations. Au cours de vos préparatifs quotidiens, vous et votre familier pouvez accomplir un petit rituel sur une arme qui appartient au groupe couteau, typiquement une dague. Ce rituel donnera à la dague les fonctions d'une baguette magique, contenant n'importe quel sort de rang 1 que votre familier connaît. Vous et seulement vous pouvez Activer ce couteau pour Lancer le sort contenu, comme vous le faites habituellement avec une baguette. Vous pouvez tenter de surcharger le couteau et ceci pourrait le briser ou le détruire comme à l'ordinaire. Vous ne pouvez avoir qu'un seul couteau cérémoniel à la fois.",
                "Au niveau 8, puis tous les 2 niveaux par la suite, le rang maximum de sort que votre couteau peut contenir augmente de 1."
            ]
        },
        {
            "name"       : "Critique brutal",
            "level"      : "18",
            "traits"     : [
                "Barbare"
            ],
            "required"   : [],
            "description": [
                "Vos coups critiques sont particulièrement dévastateurs. Sur un coup critique avec une Frappe au corps-à-corps, ajoutez un dé de dégâts de plus. Il s'ajoute aux autres dés supplémentaires que vous gagnez si votre arme possède les traits mortel ou fatal. La cible subit également une quantité de dégâts de saignement égale à deux dés de dégâts."
            ]
        },
        {
            "name"       : "Critique violent",
            "level"      : "18",
            "traits"     : [
                "Guerrier"
            ],
            "required"   : [],
            "description": [
                "Les blessures que vous infligez sont particulièrement graves. Quand vous Frappez avec une arme ou une attaque à mains nues pour laquelle vous êtes légendaire, vous obtenez un coup critique sur un résultat de 19 au dé tant que ce résultat serait au moins un succès. Cela n'a aucun effet sur un 19 si le résultat devrait être un échec."
            ]
        },
        {
            "name"       : "Cruauté",
            "level"      : "4",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "Toucher du vide"
            ],
            "description": [
                "Le mal que vous infligez par votre toucher corrupteur sape les forces du corps de votre ennemi. Vous pouvez lancer Toucher du vide sur une créature vivante en 2 actions au lieu de 1. Ce faisant, la cible est également sentiment_very_dissatisfiedAffaiblie 1 pendant 1 minute si elle obtient un échec à son jet de sauvegarde ( sentiment_very_dissatisfiedAffaiblie 2 si elle obtient un échec critique)."
            ]
        },
        {
            "name"       : "Cruauté supérieure",
            "level"      : "8",
            "traits"     : [
                "Peu courant",
                "Champion"
            ],
            "required"   : [
                "Cruauté"
            ],
            "description": [
                "L'étendue de votre corruption dévaste l'esprit et les réflexes de vos adversaires. Lorsque vous utilisez military_techCruauté , vous pouvez choisir si vous rendez la créature sentiment_very_dissatisfiedMaladroite ou sentiment_very_dissatisfiedStupéfiée à la place, avec la même valeur d'état. Faites ce choix quand vous lancez le sort (avant de connaître le résultat du jet de sauvegarde de la cible)."
            ]
        },
        {
            "name"       : "Cuir animal",
            "level"      : "6",
            "traits"     : [
                "Barbare",
                "Transformation",
                "Primordial"
            ],
            "required"   : [
                "Instinct animal"
            ],
            "description": [
                "Votre degré de maîtrise pour la défense sans armure passe à expert. Quand vous êtes enragé et ne portez pas d'armure, votre peau s'épaissit jusqu'à ressembler à l'épais cuir de votre animal. Vous obtenez un bonus d'objet de +2 à votre CA (+3 si vous possédez la capacité de classe Juggernaut supérieur ). L'épaisseur de votre cuir vous confère un Bonus de Dextérité maximal de +3 à votre CA. Ce bonus d'objet est cumulatif avec les runes de workpuissance d'armure sur vos vêtements d'explorateur, auto_awesomeArmure mystique et les workBandes de force ."
            ]
        },
        {
            "name"       : "Danger anticipé r",
            "level"      : "12",
            "traits"     : [
                "Concentration",
                "Enquêteur"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Une créature vous cible avec une attaque et vous pouvez voir l'attaquant.",
                "Vous percevez toutes les façons possibles dont les attaques de votre adversaire pourraient porter et tentez de les éviter toutes.",
                "Le jet de l'attaque déclencheuse se fait contre votre DD de Perception au lieu de votre CA. Bien que cela vous permette d'éviter de subir les pénalités à votre CA, cela n'a pas pour effet de retirer toute condition ou effet qui causent de telles pénalités.",
                "Par exemple, un ennemi avec Attaque sournoise vous infligera toujours des dégâts supplémentaires lorsque vous êtes sentiment_very_dissatisfiedPris au dépourvu , même si vous ne subissez pas la pénalité de circonstances de -2 lorsque vous vous défendez contre l'attaque."
            ]
        },
        {
            "name"       : "Dans le mille 1",
            "level"      : "8",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Vous visez soigneusement afin d'éviter la dissimulation et l'abri dont bénéficie votre adversaire. Lors de votre prochaine Frappe avec une arme de jet avant la fin de votre tour, vous obtenez un bonus de circonstances de +1 à votre jet d'attaque et vous ignorez l'état sentiment_very_dissatisfiedMasqué de votre cible ainsi que les abris partiel et standard. Si la cible bénéficie d'un abri important, elle n'a qu'un abri standard contre cette Frappe."
            ]
        },
        {
            "name"       : "Danse de la targe 1",
            "level"      : "10",
            "traits"     : [
                "Posture",
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez une workTarge .",
                "Vous faites tourner votre targe de manière défensive contre chaque attaque. Vous avez constamment votre targe levée comme si vous aviez utilisé sports_martial_artsLever un bouclier , tant que vous remplissez les conditions de cette action."
            ]
        },
        {
            "name"       : "Danse en duel (Bretteur) 1",
            "level"      : "10",
            "traits"     : [
                "Posture",
                "Bretteur"
            ],
            "required"   : [
                "Parade extravagante"
            ],
            "description": [
                "Conditions Vous maniez une unique arme de corps-à-corps à une main et votre autre main ou vos autres mains sont libres.",
                "En utilisant votre main libre comme balancier pour vous équilibrer, vous attaquez et défendez avec votre arme. Tant que vous êtes dans cette posture, vous bénéficiez constamment de military_techParade extravagante ."
            ]
        },
        {
            "name"       : "Danse en duel (Guerrier) 1",
            "level"      : "12",
            "traits"     : [
                "Guerrier",
                "Posture"
            ],
            "required"   : [
                "Parade en duel"
            ],
            "description": [
                "Conditions Vous maniez une unique arme de corps-à-corps à une main et ne tenez rien d'autre dans vos mains.",
                "En utilisant une main libre pour vous équilibrer et faire balancier, vous parvenez à la fois à attaquer et à vous défendre avec votre arme. Tant que vous êtes dans cette posture, vous bénéficiez constamment de military_techParade en duel ."
            ]
        },
        {
            "name"       : "Découpé en l'air r",
            "level"      : "10",
            "traits"     : [
                "Guerrier"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Vous êtes la cible d'une Frappe à distance physique.",
                "Conditions Vous êtes conscient de l'attaque, pas sentiment_very_dissatisfiedPris au dépourvu à son encontre et vous avez soit une main libre, soit vous maniez une arme au corps-à-corps.",
                "Vous pouvez écarter les attaques à distance. Vous obtenez un bonus de circonstances de +4 à la CA contre l'attaque déclencheuse. Si l'attaque est un échec, vous l'avez écartée ou l'avez découpée dans les airs."
            ]
        },
        {
            "name"       : "Découvertes alchimiques",
            "level"      : "4",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [
                "Méthodologie : Sciences alchimiques"
            ],
            "description": [
                "Vous avez consacré du temps supplémentaire dans un laboratoire pour améliorer votre connaissance de l'alchimie. Vous apprenez les formules de deux objets alchimiques à chaque fois que vous obtenez un niveau au lieu d'un seul ; Cela doit toujours être des outils ou des élixirs. Le nombre de fioles polyvalentes chaque jour augmente de 1 si vous êtes un expert en Artisanat, de 2 si vous êtes un maître ou de 3 si vous êtes légendaire."
            ]
        },
        {
            "name"       : "Déduction rapide 1",
            "level"      : "12",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [],
            "description": [
                "Votre esprit travaille sur les indices à une vitesse incroyable. Vous utilisez instantanément jusqu'à cinq actions sports_martial_artsSe souvenir . Si vous avez des capacités spéciales ou des actions gratuites qui devraient normalement être déclenchées lorsque vous Vous souvenez, vous ne pouvez pas les utiliser pour ces actions."
            ]
        },
        {
            "name"       : "Défense jumelée (Bretteur) 1",
            "level"      : "14",
            "traits"     : [
                "Posture",
                "Bretteur"
            ],
            "required"   : [
                "Parade jumelée"
            ],
            "description": [
                "Conditions Vous maniez deux armes de corps-à-corps, une dans chaque main.",
                "Vous êtes toujours prêt à utiliser l'arme dans votre main secondaire pour bloquer les attaques qui vous sont destinées. Tant que vous restez dans cette posture, vous bénéficiez en permanence des avantages de l'action military_techParade jumelée ."
            ]
        },
        {
            "name"       : "Défense jumelée (Guerrier) 1",
            "level"      : "16",
            "traits"     : [
                "Guerrier",
                "Posture"
            ],
            "required"   : [
                "Parade jumelée"
            ],
            "description": [
                "Conditions Vous maniez deux armes de corps-à-corps, chacune dans une main",
                "Vous êtes toujours prêt à utiliser l'arme dans votre main secondaire pour bloquer les attaques qui vous sont destinées. Tant que vous restez dans cette posture, vous bénéficiez en permanence des avantages de l'action military_techParade jumelée ."
            ]
        },
        {
            "name"       : "Défenseur sacré",
            "level"      : "20",
            "traits"     : [
                "Champion"
            ],
            "required"   : [],
            "description": [
                "Vous êtes un grand guerrier qui peut rester fort contre les plus féroces adversaires de votre cause. Vous obtenez une résistance 5 contre les dégâts contondants, perforants et tranchants.",
                "Si vous êtes saint, cette résistance passe à 10 contre les créatures impies, et si vous êtes impie elle passe à 10 contre les créatures saintes.",
                "De plus, les créatures et effets qui obtiennent un 20 naturel sur un jet d'attaque contre vous n'améliorent pas leur résultat d'un degré de succès."
            ]
        },
        {
            "name"       : "Déluge à deux armes 1",
            "level"      : "14",
            "traits"     : [
                "Guerrier",
                "Sophistication",
                "Persévérer"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez deux armes, chacune dans une main différente.",
                "Profitant de l'élan de votre attaque précédente, vous vous déchaînez avec vos deux armes dans une frénésie soudaine. Frappez deux fois, une fois avec chaque arme."
            ]
        },
        {
            "name"       : "Déluge invraisemblable 3",
            "level"      : "18",
            "traits"     : [
                "Sophistication",
                "Rôdeur"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez deux armes de corps-à-corps, chacune dans une main différente.",
                "Vous renoncez à la précision pour attaquer à une vitesse incroyable. Faites trois Frappes au corps-à-corps avec chacune des armes requises. Votre première attaque avec chaque arme subit la pénalité d'attaques multiples comme si vous aviez déjà fait une attaque durant ce tour. Toutes les Frappes restantes subissent la pénalité d'attaques multiples maximale."
            ]
        },
        {
            "name"       : "Déluge précis",
            "level"      : "20",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "Déluge invraisemblable"
            ],
            "description": [
                "Conditions Vous maniez deux armes de corps-à-corps, chacune dans une main différente.",
                "Vous raffinez la précision de votre incroyable déluge de coups. Lorsque vous accomplissez un military_techDéluge invraisemblable , votre première attaque avec chaque arme subit la pénalité d'attaques multiples comme si vous aviez déjà porté une attaque durant ce tour. Toutes les attaques subséquentes subissent la pénalité d'attaque maximale comme si vous aviez déjà fait deux ou plus attaques durant ce tour."
            ]
        },
        {
            "name"       : "Déluges de manoeuvres",
            "level"      : "4",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "expert en Athlétisme"
            ],
            "description": [
                "Votre déluge est une combinaison de manœuvres. Vous pouvez remplacer l'une de vos attaques, ou les deux, lors d'un déluge de coups par des sports_martial_artsSaisies , des sports_martial_artsRepositionnements , des sports_martial_artsPoussées ou des sports_martial_artsCrocs-en-jambe ."
            ]
        },
        {
            "name"       : "Demeure aux murs imaginaires",
            "level"      : "10",
            "traits"     : [
                "Barde"
            ],
            "required"   : [],
            "description": [
                "Vous dressez une barrière imaginaire que les autres croient réelle. Vous apprenez le tour de magie de composition auto_awesomeDemeure aux murs imaginaires ."
            ]
        },
        {
            "name"       : "Dénicheur de dangers",
            "level"      : "8",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [],
            "description": [
                "Vous percevez instinctivement le danger. Vous obtenez un bonus de circonstances de +1 à vos tests de Perception pour trouver des pièges et des dangers, à votre CA contre leurs attaques et aux jets de sauvegarde contre leurs effets. Vous pouvez trouver des dangers qui nécessitent normalement une sports_martial_artsFouille de votre part, même si vous ne Fouillez pas."
            ]
        },
        {
            "name"       : "Dénicheur de pièges",
            "level"      : "1",
            "traits"     : [
                "Enquêteur",
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Vous avez un sens inné qui vous avertit des dangers et de la présence de pièges. Vous obtenez un bonus de circonstances de +1 à vos tests de Perception pour trouver des pièges, à votre CA contre les attaques des pièges et aux jets de sauvegarde contre les pièges. Même si vous n'êtes pas en train de Chercher, vous faites un test pour trouver des pièges qui nécessiteraient normalement que vous Cherchiez. Vous devez cependant remplir toutes autres conditions nécessaires à la découverte du piège. Vous pouvez désactiver des pièges qui nécessitent que vous soyez maître en Vol. Si vous êtes déjà maître en Vol, vous pouvez alors désactiver des pièges qui nécessitent que vous soyez légendaire en Vol et le bonus de circonstances contre les pièges passe à +2."
            ]
        },
        {
            "name"       : "Déplacement circonspect",
            "level"      : "4",
            "traits"     : [
                "Moine"
            ],
            "required"   : [],
            "description": [
                "Vous êtes toujours sur vos gardes, même lorsque vous vous déplacez. Vous bénéficiez d'un bonus de circonstances de +4 à la CA contre les réactions déclenchées par vos déplacements."
            ]
        },
        {
            "name"       : "Dérobade r",
            "level"      : "12",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "maître en Acrobaties"
            ],
            "description": [
                "Déclencheur Vous subissez des dégâts d'un effet de zone qui permet un jet de Réflexes.",
                "Vous esquivez un coup au dernier moment possible.",
                "Vous sports_martial_artsFaites un pas et obtenez une résistance à tous les dégâts égale à votre niveau contre l'effet déclencheur. Si votre Pas vous place en dehors de la zone de l'effet, alors cette résistance est égale à votre niveau auquel s'ajoute votre modificateur de Dextérité."
            ]
        },
        {
            "name"       : "Désarmement sournois",
            "level"      : "6",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez sports_martial_artsDésarmer une créature avec un tour de passe-passe plutôt que d'utiliser la force brute. Vous pouvez utiliser sports_martial_artsVol au lieu d'Athlétisme pour tenter de désarmer. Lorsque vous utilisez Vol pour tenter de Désarmer et que vous obtenez un succès, la cible est sentiment_very_dissatisfiedPrise au dépourvu contre la prochaine attaque que vous effectuez avant la fin de votre tour."
            ]
        },
        {
            "name"       : "Destrier imposant",
            "level"      : "10",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "Cheval de bataille fidèle"
            ],
            "description": [
                "La monture dont vous prenez soin peut à présent exploiter son plein potentiel. La monture que vous obtenez grâce à la capacité de classe Fidèle destrier est à présent un compagnon animal sauvage ou agile.",
                "Votre compagnon animal acquiert une plus grande indépendance. Lors d'une rencontre, même si vous n'effectuez pas l'action Diriger un animal, votre compagnon animal peut toujours effectuer une action à votre tour pour Marcher rapidement ou Frapper. Il peut le faire à tout moment pendant votre tour, du moment ou vous n'êtes pas en train de faire une action. S'il utilise cette action, c'est la seule action dont il disposera pendant ce tour - vous ne pouvez lui donner d'ordre ensuite."
            ]
        },
        {
            "name"       : "Destruction d'enchantement",
            "level"      : "14",
            "traits"     : [
                "Barbare"
            ],
            "required"   : [
                "Destruction de sort"
            ],
            "description": [
                "Vous pouvez concentrer votre superstition pour briser la magie d'un objet, en plus de détruire les sorts autonomes et ceux actifs sur les créatures. Lorsque vous military_techDétruisez un sort , vous pouvez à la place tenter de contrer soit un objet magique non tenu ou un des objets magiques de votre cible. Si votre tentative de contre est réussie, l'objet devient un objet ordinaire de son type pendant 10 minutes. Si vous ciblez un artefact, un objet intelligent ou un objet particulièrement puissant de ce type, votre tentative de contre échoue automatiquement."
            ]
        },
        {
            "name"       : "Destruction de sort 2",
            "level"      : "12",
            "traits"     : [
                "Attaque",
                "Barbare",
                "Concentration",
                "Rage"
            ],
            "required"   : [
                "Instinct superstitieux"
            ],
            "description": [
                "Vous tirez de votre propre rage superstitieuse de quoi détruire un sort. Faites une Frappe au corps-à-corps avec une arme ou une attaque à mains nues contre une créature, un objet ou la manifestation d'un sort (comme un mur créé par auto_awesomeMur de feu ou le gardien de auto_awesomeGardien spirituel ).",
                "Si vous ciblez quelque chose qui n'a pas de CA, cette CA contre cette Frappe est habituellement de 10 pour les cibles qui sont faciles à toucher, comme un mur ou ont une CA différente qui est déterminée par le MJ.",
                "Si votre Frappe touche, vous pouvez essayer de contrer un unique sort ou effet magique sur la cible. Votre rang de contre pour cette tentative est égal à la moitié de votre niveau arrondi au supérieur et vous utilisez le résultat de votre jet d'attaque pour le test de contresort.",
                "Que vous réussissiez ou non la Frappe, la cible devient temporairement immunisée à votre Destruction de sort pendant 24 heures."
            ]
        },
        {
            "name"       : "Détecteur de mensonge",
            "level"      : "4",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [
                "Méthodologie : Empirisme ou Méthodologie : Interrogatoire"
            ],
            "description": [
                "Vous êtes habitué à remarquer les racontars d'un menteur — sueur, rougissement, voix tremblante, pouls qui s'accélère. Vous obtenez un bonus de circonstances de +1 aux tests de pour sports_martial_artsDeviner les intentions et aux DD de Perception contre les tentatives pour Mentir. Lorsque vous déterminez que quelqu'un vous ment, vous pouvez utiliser sa duperie à votre avantage pour gagner un bonus de circonstances de +1 au prochain test de Duperie, de Diplomatie, d'Intimidation ou de Représentation que vous tentez contre cette créature durant la minute suivante.",
                "Si vous bénéficiez d'un bonus d'investigation de Suivre une piste pour quelconque de ces tests, ce bonus est augmenté de 1 plutôt que de gagner le bonus de +1 spécifié."
            ]
        },
        {
            "name"       : "Détection magique affûtée",
            "level"      : "12",
            "traits"     : [
                "Fortune",
                "Magicien"
            ],
            "required"   : [],
            "description": [
                "Vous ressentez les dangers magiques. Lorsque vous utilisez l'activité d'exploration sports_martial_artsDétection de la magie , vous pouvez lancer l'initiative deux fois et utiliser le meilleur résultat tant qu'au moins un des adversaires possède un effet magique ou un objet magique et qu'il est dans la portée de votre Détection de la magie."
            ]
        },
        {
            "name"       : "Détermination 1",
            "level"      : "14",
            "traits"     : [
                "Concentration",
                "Guerrier"
            ],
            "required"   : [],
            "description": [
                "Fréquence Une fois par jour",
                "Votre entraînement vous permet d'ignorer les sorts de vos ennemis et les états lorsque la situation est désespérée. Choisissez un état non permanent, un sort ou un effet magique qui vous affecte. Si vous choisissez un état, l'effet qu'il produit sur vous disparaît. Si vous choisissez un sort ou un effet magique, tentez de le contrer (votre rang de contre est égal à votre niveau et vous tentez un jet de Volonté en guise de test de contre).",
                "Cela ne retire en rien les Points de vie que vous avez déjà subis du sort ou de l'état et cela retire l'effet que sur vous, pas sur les autres créatures et l'environnement autour de vous. Cela ne permet pas non plus d'éliminer une affliction aux effets continus ou d'empêcher une telle affliction de vous infliger des états par la suite. Cela ne permet pas d'éliminer des états provoqués par la situation (tel que À terre ou pris en tenaille)."
            ]
        },
        {
            "name"       : "Deux proies",
            "level"      : "12",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez vous concentrer sur deux adversaires à la fois, les traquant tous les deux. Quand vous utilisez l'action sports_martial_artsChasser une proie , vous pouvez désigner deux créatures comme étant vos proies."
            ]
        },
        {
            "name"       : "Deuxième bénédiction",
            "level"      : "8",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "Bénédiction du dévôt"
            ],
            "description": [
                "Votre service assidu vous accorde un autre bienfait. Choisissez une seconde Bénédiction du dévôt (différente de la première) et obtenez ses avantages."
            ]
        },
        {
            "name"       : "Déviation du gardien (Bretteur) r",
            "level"      : "4",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Un allié dans votre allonge au corps-à-corps est touché par une attaque, vous pouvez voir l'attaquant et un bonus de circonstances de +2 à la CA pourrait transformer le succès critique en succès ou le succès en échec.",
                "Conditions Vous maniez une seule arme de corps-à-corps à une main et votre autre main (ou mains) est libre.",
                "Vous utilisez votre arme pour dévier l'attaque contre votre allié, ce qui lui confère un bonus de circonstances de +2 à sa CA contre l'attaque déclencheuse. Ceci transforme le coup critique déclencheur en un coup normal ou le coup déclencheur normal en un échec. Vous gagnez du flarePanache jusqu'à la fin de votre prochain tour.",
                "flareEffet : Déviation du gardien"
            ]
        },
        {
            "name"       : "Déviation du gardien (Guerrier) r",
            "level"      : "6",
            "traits"     : [
                "Guerrier"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Un allié dans votre allonge au corps-à-corps est touché par une attaque, vous pouvez voir l'attaquant et l'allié qui bénéficie alors d'un bonus de circonstances de +2 à la CA pourra transformer le succès critique en succès ou le succès en échec.",
                "Conditions Vous maniez une seule arme de corps-à-corps à une main et ne tenez rien d'autre dans vos mains.",
                "Vous utilisez votre arme vous dévier l'attaque contre votre allié, lui conférant un bonus de circonstances de +2 à sa CA contre l'attaque déclencheuse. Ceci transforme le coup critique déclencheur en un coup normal ou le coup déclencheur normal en un échec."
            ]
        },
        {
            "name"       : "Dichotomie débilitante 2",
            "level"      : "8",
            "traits"     : [
                "Concentration",
                "Lié à une malédiction",
                "Divin",
                "Mental",
                "Oracle"
            ],
            "required"   : [],
            "description": [
                "Vous donnez un aperçu des conflits impossibles entre les anathèmes divins à l'origine de votre malédiction, ce qui vous oblige à prendre en compte les conflits d'autrui. Vous et une créature dans les 9 mètres subissez chacun avec un jet de casinoVolonté , et la cible est sentiment_very_dissatisfiedEtourdie 1 si elle obtient un échec critique à son jet de sauvegarde. Vous augmentez d'un degré le résultat de votre jet de sauvegarde. Au niveau 10, puis chaque 2 niveaux, les dégâts augmentent de 3d6."
            ]
        },
        {
            "name"       : "Directive du gardien",
            "level"      : "14",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [],
            "description": [
                "Vous communiquez l'emplacement de votre proie à vos alliés par une série de mots ou de gestes prudents. Tant que vous observez votre proie, tous les échecs et les échecs critiques obtenus par vos alliés en la sports_martial_artsCherchant sont remplacés par des succès. Vos alliés doivent pouvoir vous voir ou vous entendre pour bénéficier de cet avantage et vous devez pouvoir parler ou faire des gestes pour qu'ils en bénéficient."
            ]
        },
        {
            "name"       : "Dissipation entremêlée 1",
            "level"      : "14",
            "traits"     : [
                "Ensorceleur",
                "Mutamagie"
            ],
            "required"   : [
                "Dissipation de la magie dans votre répertoire de sorts"
            ],
            "description": [
                "Vous tissez de l'énergie dissipatrice dans un sort. Si votre prochaine action consiste à Lancer un sort à cible unique contre un ennemi et que vous le touchez avec un jet d'attaque de sort ou qu'il rate son jet de sauvegarde, vous pouvez lancer auto_awesomeDissipation de la magie sur l'ennemi par une action gratuite, en dépensant un emplacement de sort comme à l'accoutumée et en ciblant un effet de sort qui l'affecte."
            ]
        },
        {
            "name"       : "Distraction jumelée",
            "level"      : "4",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [
                "Feinte jumelée"
            ],
            "description": [
                "Conditions Vous maniez deux armes au corps-à-corps, chacune dans une main différente.",
                "Vos mouvements avec deux armes sont si rapides et désorientants qu'ils désarçonnent votre adversaire. Lorsque vous utilisez military_techFeinte jumelée , si deux de vos Frappes infligent des dégâts à la créature ciblée, la cible doit réussir un jet de casinoVolonté contre votre DD de classe ou être sentiment_very_dissatisfiedStupéfiée 1 jusqu'à la fin de votre prochain tour."
            ]
        },
        {
            "name"       : "Diversion parfaite 1",
            "level"      : "16",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [
                "légendaire en Duperie"
            ],
            "description": [
                "Vous utilisez la ruse pour duper vos adversaires pendant que vous vous esquivez discrètement. Vous sports_martial_artsÊtes furtif en laissant un leurre derrière vous.",
                "Le leurre se comporte comme le sort auto_awesomeDouble illusoire , mais vous n'êtes pas sentiment_very_dissatisfiedInvisible , seulement sentiment_very_dissatisfiedNon détecté . Comme avec le sort, vous pouvez continuer de vous concentrer pour diriger votre leurre, que vous restiez ou non sentiment_very_dissatisfiedCaché pendant la durée. Une fois que vous avez utilisé Diversion parfaite, vous devez passer 10 minutes à composer un nouveau leurre avant de pouvoir l'utiliser de nouveau."
            ]
        },
        {
            "name"       : "Diversion réactive r",
            "level"      : "20",
            "traits"     : [
                "Concentration",
                "Manipulation",
                "Roublard"
            ],
            "required"   : [
                "légendaire en Duperie, Diversion parfaite"
            ],
            "description": [
                "Déclencheur Vous devriez être touché par une attaque, ciblé par un effet ou vous trouvez dans une zone d'effet.",
                "Conditions Vous êtes prêt à employer military_techDiversion parfaite .",
                "Vous remplacez votre leurre de façon réactive pour tromper votre ennemi. Vous utilisez Diversion parfaite, même si vous êtes Observé, tant que vous terminez votre déplacement Furtif en étant sentiment_very_dissatisfiedMasqué ou à un endroit ayant un abri ou un abri important.",
                "Votre leurre est ciblé par l'attaque ou l'effet à votre place. Dans le cas d'une zone d'effet, si votre déplacement Furtif ne vous permet pas de quitter la zone, vous et votre leurre êtes tous les deux ciblés par l'effet."
            ]
        },
        {
            "name"       : "Domaine avancé",
            "level"      : "8",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [
                "Initié du domaine"
            ],
            "description": [
                "Vos prières ont débloqué les secrets plus profonds du domaine de votre divinité. Vous obtenez un sort de domaine avancé de l'un de vos domaines pour lequel vous avez un sort de domaine initial.",
                "Spécial Vous pouvez sélectionner ce don plusieurs fois. Chaque fois, vous devez choisir un sort de domaine avancé différent."
            ]
        },
        {
            "name"       : "Domaine avancé de la divinité",
            "level"      : "8",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "Domaine de la divinité"
            ],
            "description": [
                "Votre croyance vous permet d'entrevoir les secrets plus intimes du domaine de votre divinité. Vous obtenez un sort de domaine avancé du domaine choisi avec le Domaine de la divinité, comme sort de dévotion."
            ]
        },
        {
            "name"       : "Domaine de la divinité",
            "level"      : "1",
            "traits"     : [
                "Champion"
            ],
            "required"   : [],
            "description": [
                "Vous incarnez l'un des aspects de votre divinité. Choisissez l'un des domaines de votre divinité. Vous gagnez le sort de domaine initial du domaine choisi en guise de sort de dévotion."
            ]
        },
        {
            "name"       : "Don de pouvoir",
            "level"      : "6",
            "traits"     : [
                "Oracle"
            ],
            "required"   : [],
            "description": [
                "Votre mystère vous accorde une magie supplémentaire. Vous disposez d'un emplacement de sort supplémentaire de votre rang le plus élevé que vous ne pouvez utiliser que pour lancer l'un des sorts accordés par votre mystère, intensifié à ce rang.",
                "Spécial Si vous avez la capacité de classe Accès divin ou le don Répertoire mystérieux, vous pouvez lancer les sorts que vous avez appris grâce à ces capacités en utilisant l'emplacement de sort supplémentaire du Don de pouvoir."
            ]
        },
        {
            "name"       : "Double doublé",
            "level"      : "10",
            "traits"     : [
                "Sorcier"
            ],
            "required"   : [
                "Chaudron"
            ],
            "description": [
                "Pour chaque potion ou élixir que vous concoctez au cours de vos préparatifs quotidiens, vous en concoctez deux copies. Ceci vous permet de préparer deux potions ou élixirs temporaires chaque jour, quatre si vous êtes maître en DD de sort ou six si vous êtes légendaire."
            ]
        },
        {
            "name"       : "Double taille 2",
            "level"      : "1",
            "traits"     : [
                "Guerrier"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez deux armes de corps-à-corps, chacune dans une main différente",
                "Vous frappez votre ennemi avec vos deux armes. Effectuez deux Frappes, une avec chacune de vos deux armes de corps-à-corps, chacune utilisant votre pénalité d'attaques multiples actuelle. Les deux Frappes doivent avoir la même cible. Si la deuxième Frappe est effectuée avec une arme qui n'a pas le trait agile, elle subit une pénalité de -2.",
                "Si les deux attaques touchent, combinez leurs dégâts, puis ajoutez tous les éventuels autres effets provenant des deux armes. Vous n'ajoutez les éventuels dégâts de précision qu'une seule fois, à l'attaque de votre choix. Combinez les dégâts des deux Frappes et appliquez les résistances et les faiblesses une seule fois. Cela compte comme deux attaques lorsque vous calculez votre pénalité d'attaques multiples."
            ]
        },
        {
            "name"       : "Double tir 2",
            "level"      : "4",
            "traits"     : [
                "Guerrier",
                "Sophistication"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez une arme à distance avec rechargement 0.",
                "Vous tirez deux fois à une vitesse aveuglante. Faites deux Frappes, chacune contre une cible distincte et avec une pénalité de -2. Les deux attaques comptent dans le calcul de votre pénalité d'attaques multiples mais la pénalité n'augmente qu'après avoir effectué ces deux attaques."
            ]
        },
        {
            "name"       : "Doute Tenace",
            "level"      : "12",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "cause du rédempteur"
            ],
            "description": [
                "Quand vous semez le doute dans l'esprit de vos ennemis, l'effet dure plus longtemps que d'habitude. Après avoir été Affaibli 2 à cause de votre sports_martial_artsLueur de rédemption , l'adversaire est Affaibli 1 pendant une minute. Si vous avez military_techPoids de la culpabilité , après avoir été sentiment_very_dissatisfiedStupéfié 2 à cause de votre Lueur de rédemption, l'adversaire est Stupéfié 1 pendant une minute ou jusqu'à ce que le test nu de l'état Stupéfié lui fasse perdre un sort, selon ce qui se produit en premier."
            ]
        },
        {
            "name"       : "Eaux de la création 2",
            "level"      : "10",
            "traits"     : [
                "Lié à une malédiction",
                "Divin",
                "Guérison",
                "Oracle",
                "Vitalité",
                "Eau"
            ],
            "required"   : [
                "Mystère de la vie ou de la tempête"
            ],
            "description": [
                "L'eau est la source de la vie et vous puisez dans cette force primordiale pour soigner les blessures de vos alliés. Un doux anneau s'échappe de vous dans une crop_freeémanation de 4,50 mètres , restaurant casino(floor(@actor.level/2))d6 soins, vitalité Points de vie aux créatures dans la zone. Au niveau 12 et tous les deux niveaux suivants, le montant restauré augmente de 1d6. Si vous êtes sentiment_very_dissatisfiedLié à la malédiction 3 lorsque vous utilisez Eaux de la création, le montant des soins passe à casino(floor(@actor.level/2))d8 soins, vitalité Points de vie."
            ]
        },
        {
            "name"       : "Échappatoire cognitive r",
            "level"      : "16",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Trigger Votre tour se termine.",
                "Conditions Vous êtes actuellement par un effet mental.",
                "Vous pouvez trouver une issue à l'effet mental afin d'y échapper temporairement. Jusqu'à la fin de votre prochain tour, vous ignorez un effet mental. Vous ne pouvez échapper à un effet donné grâce à l'Échappatoire cognitive seulement une seule fois. Vous ne pouvez utiliser Échappatoire cognitive pour suspendre un effet dont vous avez choisi qu'il vous affecte.",
                "Spécial Vous pouvez utiliser cette réaction même si l'effet mental vous empêche d'utiliser des réactions."
            ]
        },
        {
            "name"       : "Échappatoire rapide r",
            "level"      : "16",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [
                "légendaire en Acrobaties"
            ],
            "description": [
                "Déclencheur Un ennemi termine son déplacement adjacent à vous.",
                "Faites un test d' casinoAcrobaties contre le DD de Réflexes de votre ennemi. Si vous réussissez, soit vous Marchez rapidement vers une case différente adjacente à l'adversaire, soit vous déplacez l'ennemi vers une case différente adjacente à la vôtre."
            ]
        },
        {
            "name"       : "Éclaboussure calculée",
            "level"      : "4",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Vous avez fait tous les calculs nécessaires pour optimiser l'éclaboussure de votre bombe. Quand vous lancez une bombe alchimique qui possède le trait éclaboussure, vous pouvez faire en sorte qu'elle inflige une quantité de dégâts égale à votre modificateur d'Intelligence (avec un minimum de 0) au lieu de la quantité normale de dégâts."
            ]
        },
        {
            "name"       : "Éclaboussure élargie",
            "level"      : "10",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez lancer des bombes en suivant exactement la bonne trajectoire pour créer des explosions particulièrement importantes et puissantes. Quand vous lancez une bombe alchimique et que celle-ci possède le trait éclaboussure, vous pouvez faire en sorte que les éclaboussures affectent toutes les créatures dans les 3 mètres de la cible au lieu de 1,50 mètre. Si vous le faites, vous obtenez un bonus de statut aux dégâts d'éclaboussure de la bombe égal à votre modificateur d'Intelligence. Si vous avez la Découverte de champ de recherche de l'artificier du niveau 5, ces dégâts supplémentaires s'appliquent même si vous avez fait que votre bombe inflige des dégâts d'éclaboussure égaux à votre modificateur d'Intelligence plutôt que les dégâts normaux, ce qui permet donc à vos bombes d'infliger des dégâts d'éclaboussure égaux au double de votre modificateur d'Intelligence."
            ]
        },
        {
            "name"       : "Éclair brillant",
            "level"      : "1",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "Cause : grandeur"
            ],
            "description": [
                "Votre lumière purifie les âmes de la peur. Quand vous utilisez sports_martial_artsÉclair de grandeur , l'attaquant est aussi sentiment_very_dissatisfiedPris au dépourvu pendant 1 round."
            ]
        },
        {
            "name"       : "Écorce de chêne",
            "level"      : "6",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "ordre de la Feuille"
            ],
            "description": [
                "Vous octroyez à votre peau et celle de votre familier l'endurance d'écorce d'un chêne ancien. Vous pouvez lancer le sort auto_awesomeRésilience du chêne à volonté comme un sort inné primordial avec un rang de sort inférieur de un au plus haut rang de sort que vous pouvez lancer. Ce sort vous cible ainsi que votre familier léchi, s'il se trouve dans les 9 mètres de vous."
            ]
        },
        {
            "name"       : "Effusion divine",
            "level"      : "18",
            "traits"     : [
                "Oracle"
            ],
            "required"   : [],
            "description": [
                "Le pouvoir de votre mystère jaillit de vous comme une source d'énergie divine, même lorsque votre propre magie s'épuise.",
                "Deux fois par jour, vous pouvez lancer un sort après avoir été à court d'emplacement de sorts du rang approprié. Les deux sorts que vous lancez avec ce don doivent être de rangs de sort différents."
            ]
        },
        {
            "name"       : "Égaliser les chances f",
            "level"      : "4",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Fréquence Une fois toutes les 10 minutes",
                "Déclencheur Votre tour commence.",
                "Conditions Vous être pris en tenaille.",
                "Vous brillez de mille feux dans les moments désespérés. Vous affichez un sourire ou une pose confiante et vous obtenez du flarePanache jusqu'à la fin de votre tour."
            ]
        },
        {
            "name"       : "Égide divine r",
            "level"      : "2",
            "traits"     : [
                "Divin",
                "Oracle"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Vous tentez un jet de sauvegarde contre un effet magique, mais vous n'avez pas encore lancé le dé.",
                "Une barrière offre une protection contre les autres magies mais vous laisse exposé à l'énergie divine. Jusqu'au début de votre prochain tour, vous obtenez un bonus de circonstances de +1 aux jets de sauvegarde contre les effets magiques non divins, mais subissez aussi une pénalité de circonstances de -1 aux jets de sauvegarde contre les effets divins."
            ]
        },
        {
            "name"       : "Égide primordiale",
            "level"      : "18",
            "traits"     : [
                "Druide"
            ],
            "required"   : [],
            "description": [
                "Vous vous entourez d'un épais champ d'énergie protectrice primordiale. Vous et vos alliés dans les 9 m obtenez une résistance égale à votre modificateur de Sagesse aux dégâts d'acide, d'électricité, de feu, de froid, de vide et de vitalité."
            ]
        },
        {
            "name"       : "Égoïsme continu",
            "level"      : "1",
            "traits"     : [
                "Peu courant",
                "Champion"
            ],
            "required"   : [
                "Cause : profanation"
            ],
            "description": [
                "Votre puissante personnalité et votre égo incroyable exige que vous vous protégiez vous-même par dessus tout autre. Après avoir utilisé sports_martial_artsBouclier égoïste , vous obtenez une résistance contre tous les dégâts infligés par l'ennemi déclencheur jusqu'à la fin du tour au cours duquel vous avez utilisé la réaction. Cette résistance est égale à la moitié de la résistance de votre Bouclier égoïste."
            ]
        },
        {
            "name"       : "Élan déterminé 2",
            "level"      : "10",
            "traits"     : [
                "Barbare",
                "Rage"
            ],
            "required"   : [],
            "description": [
                "Rien ne peut vous empêcher d'atteindre votre ennemi. Marchez rapidement deux fois. Durant ce déplacement, vous ignorez les terrains difficiles, les terrains très difficiles et tout effet qui imposerait une pénalité à votre Vitesse.",
                "Vous pouvez effectuer un test d' sports_martial_artsAthlétisme au lieu d'Acrobaties pour sports_martial_artsGarder l'équilibre lorsque vous vous déplacez le long de surfaces étroites ou un sol inégal, en utilisant le même DD. Cela ne vous empêche pas d'être blessé par des terrains dangereux.",
                "Vous pouvez augmenter le nombre d'actions de cette activité à 3 pour Marcher rapidement trois fois à la place."
            ]
        },
        {
            "name"       : "Élargissement perpétuel",
            "level"      : "8",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [
                "Infusions perpétuelles"
            ],
            "description": [
                "Vous avez étendu votre approvisionnement d'objets quasiment à l'infini.",
                "Choisissez un Champ de recherche. Ajoutez un objet de la liste des options disponibles pour ce champ de recherche issu d'infusions perpétuelles ou deux objets si vous choisissez votre propre domaine.",
                "Si vous possédez Puissance perpétuelle ou Perfection perpétuelle , vous obtenez un objet supplémentaire (ou objets si vous choisissez votre propre domaine) approprié pour le domaine que vous avez choisi, par exemple une version de plus haut niveau de la bombe que vous avez choisi ou un nouveau poison."
            ]
        },
        {
            "name"       : "Élégance désarmante",
            "level"      : "1",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Vous faites tomber les armes des mains de vos ennemis avec style. Quand vous sports_martial_artsDésarmez , l'action obtient le trait bravade."
            ]
        },
        {
            "name"       : "Éliminer les fausses pistes",
            "level"      : "1",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [],
            "description": [
                "Vous avez un sens aiguisé pour éviter les fausses pistes d'enquête. Lorsque vous obtenez un échec critique sur un test de compétence pour sports_martial_artsVous souvenir en lien avec une question à propos d'une de vos enquêtes actives, il devient un échec."
            ]
        },
        {
            "name"       : "Élixir étendu",
            "level"      : "12",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "La part de votre énergie que vous intégrez dans vos élixirs étend la durée de leurs effets quand vous les buvez. Quand vous consommez l'un de vos objets alchimiques qui possède les traits élixir et imprégné et a une durée supérieure ou égale à 1 minute, vous doublez la durée de cet élixir. Si vous avez crée cet objet avec sports_martial_artsAlchimie rapide , cela ne peut pas entraîner un dépassement de la durée limite de 10 minutes."
            ]
        },
        {
            "name"       : "Élixir éternel",
            "level"      : "16",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [
                "Élixir étendu"
            ],
            "description": [
                "Votre corps accepte et conserve bien volontiers les modifications mineures. Quand vous consommez l'un de vos objets alchimiques qui possède les traits élixir et imprégné et a une durée supérieure ou égale à 1 minute, vous pouvez rendre la durée de cet élixir indéfinie. Vous ne pouvez appliquer ce pouvoir qu'à un élixir dont le niveau est inférieur ou égal à la moitié de votre niveau. Si vous consommez ultérieurement un élixir différent et rendez sa durée indéfinie, l'effet du précédent élixir indéfini prend fin."
            ]
        },
        {
            "name"       : "Élixir miséricordieux f",
            "level"      : "10",
            "traits"     : [
                "Additif 2",
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Fréquence Une fois par round",
                "Déclencheur Vous fabriquez un workÉlixir de vie à l'aide d' Alchimie rapide , qui est inférieur d'au moins 2 niveaux à votre niveau d'alchimie avancée",
                "Vous ajoutez une substance spéciale dans votre élixir qui calme le corps et l'esprit de celui qui le consomme. L'élixir de vie tente de contrer un effet de auto_awesomeTerreur ou un effet causant l'état auto_awesomeParalysé ."
            ]
        },
        {
            "name"       : "Élixir miséricordieux supérieur",
            "level"      : "14",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [
                "Élixir miséricordieux"
            ],
            "description": [
                "Vos additifs contiennent des panacées qui peuvent soigner une pléthore de maladies. Quand vous utilisez military_techÉlixir miséricordieux , votre élixir peut à la place tenter de contrer les effets des états sentiment_very_dissatisfiedAveugle , sentiment_very_dissatisfiedSourd , sentiment_very_dissatisfiedNauséeux ou sentiment_very_dissatisfiedRalenti ."
            ]
        },
        {
            "name"       : "Élixir revigorant",
            "level"      : "4",
            "traits"     : [
                "Additif",
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez mélanger une pommade aromatique dans un élixir avec le trait guérison pour soulager les maladies physiques. En plus de ses effets normaux, l'élixir peut être ingéré par une créature qui en est empêchée (comme une créature sentiment_very_dissatisfiedNauséeuse ).",
                "En plus de ses autres effets, l'élixir tente de contrer un effet imposant l'une des états suivants, au choix de celui qui le boit : sentiment_very_dissatisfiedAffaibli , sentiment_very_dissatisfiedMaladroit , sentiment_very_dissatisfiedNauséeux ou sentiment_very_dissatisfiedStupéfié . Utilisez la moitié de votre niveau arrondi à l'entier supérieur comme rang de contre et votre DD de classe - 10 comme modificateur de contre. Le buveur est alors temporairement immunisé contre les effets de cet additif pendant 10 minutes. L'additif ne peut pas contrer les malédictions, les maladies ou les états qui font partie de l'état normal de la créature."
            ]
        },
        {
            "name"       : "Élixir revigorant amélioré",
            "level"      : "8",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [
                "Élixir revigorant"
            ],
            "description": [
                "Choisissez la revigoration physique ou la revigoration mentale et ajoutez les états indiqués à ceux que vous pouvez choisir de contrer avec un élixir revigorant :",
                [
                    "Revigoration physique sentiment_very_dissatisfiedAveugle , sentiment_very_dissatisfiedDrainé , sentiment_very_dissatisfiedParalysé , sentiment_very_dissatisfiedRalenti , sentiment_very_dissatisfiedSourd"
                ],
                "Spécial Vous pouvez sélectionner ce don une seconde fois pour choisir un autre type de revigoration et ajouter ses options à celles que vous pouvez choisir."
            ]
        },
        {
            "name"       : "Élixir revigorant ultime",
            "level"      : "12",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [
                "Élixir revigorant"
            ],
            "description": [
                "Lorsqu'il est nécessaire de contrer des effets avec des élixirs revigorants, vous considérez votre niveau comme s'il était supérieur de 2. Ajoutez aux états indiqués que vous pouvez contrer avec un élixir revigorant que vous créez, les états suivants : sentiment_very_dissatisfiedÉtourdi , sentiment_very_dissatisfiedPétrifié . Vous pouvez également choisir une maladie sans tenir compte des états qu'elle impose, le cas échéant."
            ]
        },
        {
            "name"       : "Élixirs de coagulation",
            "level"      : "2",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Vos concoctions réparatrices ont un effet coagulant sur le sang du buveur. Lorsqu'une créature vivante boit un élixir imprégné avec le trait guérison que vous avez créé, elle peut immédiatement tenter un casinoTest nu, DD 10 pour supprimer tout dégât de saignement."
            ]
        },
        {
            "name"       : "Élixirs fortifiants",
            "level"      : "6",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Vos traitements contre les maladies et les poisons peuvent être très efficaces, bien qu'ils aient tendance à durer moins longtemps. Une créature sous l'effet d'un workAntidote ou d'un workAntimaladie imprégné que vous avez créé peut choisir de relancer jet de Vigueur manqué contre une affliction appropriée (poison pour l'antidote et maladie pour l'antimaladie). La créature ne bénéficie pas du bonus d'objet habituel de l'élixir sur ce nouveau jet et après l'avoir relancé, la durée de l'élixir s'achève immédiatement. Il s'agit d'un effet de fortune."
            ]
        },
        {
            "name"       : "Élixirs improbables",
            "level"      : "18",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Votre maîtrise des secrets alchimiques vous permet de reproduire des effets que la plupart des gens pensent pouvoir n'être atteints que par la seule magie. Choisissez un nombre de potions égal à votre modificateur d'Intelligence (1 au minimum). Ces potions doivent être d'un niveau inférieur ou égal à 9. Vous obtenez les formules pour créer ces potions sous forme de consommables alchimiques avec le trait élixir.",
                "Lorsque vous fabriquez ces élixirs alchimiques, vous pouvez substituer une valeur égale de réactifs alchimiques aux composants magiques et utiliser du Matériel d'alchimiste (pour l' sports_martial_artsAlchimie rapide ) ou un Laboratoire d'alchimie (pour l'activité Fabriquer) au lieu de tout autre matériel requis. À part ça, la formule ne change pas. Une fois que vous avez choisi les formules des potions, elles ne peuvent plus être changées."
            ]
        },
        {
            "name"       : "Embuscade anticipée",
            "level"      : "6",
            "traits"     : [
                "Exploration",
                "Roublard"
            ],
            "required"   : [
                "expert en Discrétion"
            ],
            "description": [
                "Vous gardez un œil pour toute créature sentiment_very_dissatisfiedCachée ou site dangereux, en vous déplaçant à la moitié de votre Vitesse de voyage. Si vous Anticipez une embuscade au début d'une rencontre, vous lancez un test de Perception pour votre initiative et tous les ennemis lancent un test de Discrétion pour l'initiative et subissent une pénalité de circonstances de -2 à leurs tests de Discrétion."
            ]
        },
        {
            "name"       : "Empathie animale (Rôdeur)",
            "level"      : "2",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [],
            "description": [
                "Vous entretenez une relation spéciale avec les créatures du monde naturel qui vous permet de communiquer avec elles à un niveau rudimentaire. Vous pouvez utiliser Diplomatie pour sports_martial_artsFaire bonne impression sur des animaux et pour les sports_martial_artsSolliciter en leur demandant des choses très simples. Dans la plupart des cas, les animaux sauvages vous laisseront le temps d'exposer votre cas."
            ]
        },
        {
            "name"       : "Empathie avec les animaux",
            "level"      : "1",
            "traits"     : [
                "Druide"
            ],
            "required"   : [],
            "description": [
                "Vous avez un lien spécial avec les créatures du monde naturel qui vous permet de communiquer avec elles à un niveau rudimentaire. Vous pouvez poser des questions, recevoir des réponses et utiliser la compétence Diplomatie avec les animaux. Dans la plupart des cas, les animaux sauvages vous laisseront le temps d'exposer votre cas."
            ]
        },
        {
            "name"       : "Empathie avec les plantes",
            "level"      : "1",
            "traits"     : [
                "Druide"
            ],
            "required"   : [],
            "description": [
                "Vous disposez d'un lien avec la flore qui vous permet de communiquer avec elle à un niveau rudimentaire. Vous pouvez poser des questions et recevoir des réponses, et utiliser la compétence Diplomatie avec les plantes et les champignons."
            ]
        },
        {
            "name"       : "Empathie végétale",
            "level"      : "6",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "ordre de la feuille"
            ],
            "description": [
                "Vous savez communiquer de manière rudimentaire avec les plantes et les champignons et vous pouvez utiliser la Diplomatie pour leur Faire bonne impression et les sports_martial_artsSolliciter en leur demandant des choses très simples. Les plantes qui ne sont pas des créatures, ne peuvent généralement pas répondre à vos sollicitations, à moins que vous ayez accès à une autre magie comme communication avec les plantes.",
                "Du fait de votre affiliation avec l'ordre de la feuille, les plantes sentent que vous les soutenez, ce qui vous confère un bonus de circonstances de +2 à votre test pour Solliciter une plante en utilisant Empathie végétale."
            ]
        },
        {
            "name"       : "Emplacement divisé",
            "level"      : "6",
            "traits"     : [
                "Magicien"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez préparer deux sorts dans un emplacement, vous donnant la liberté de choisir le sort lorsque vous le lancez. Lorsque vous préparez vos sorts de la journée, vous pouvez choisir un emplacement de sort d'au moins un rang inférieur au sort du rang le plus élevé que vous pouvez lancer et préparer deux sorts dans cet emplacement. Lorsque vous Lancez un sort à partir de cet emplacement, choisissez quel sort vous lancez. Une fois choisi, le sort inutilisé se dissipe comme si vous ne l'aviez jamais préparé du tout — par exemple, il n'est plus disponible pour être utilisé avec sports_martial_artsDrain d'objet lié ."
            ]
        },
        {
            "name"       : "Empoignade en combat 1",
            "level"      : "2",
            "traits"     : [
                "Guerrier",
                "Persévérer"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous disposez d'une main libre et votre cible est dans l'allonge de cette main.",
                "Utilisant votre attaque précédente pour déplacer la garde de votre adversaire, vous portez un autre coup et l'attrapez. Faites une Frappe au corps-à-corps tout en gardant une main libre. Si la Frappe touche, vous agrippez la cible en utilisant votre main libre. La créature reste sentiment_very_dissatisfiedAgrippée jusqu'à la fin de votre prochain tour ou jusqu'à ce qu'elle sports_martial_artsS'Échappe , selon ce qui se produit en premier."
            ]
        },
        {
            "name"       : "Empoignade furieuse 1",
            "level"      : "12",
            "traits"     : [
                "Barbare",
                "Rage"
            ],
            "required"   : [],
            "description": [
                "Conditions Votre dernière action était une Frappe réussie et vous disposez d'une main libre ou vous avez Frappé à l'aide d'une arme dotée du trait saisir.",
                "Vous profitez que votre adversaire est distrait par votre attaque pour l'agripper. L'adversaire que vous avez Frappé devient sentiment_very_dissatisfiedAgrippé , comme si vous aviez réussi un test d'Athlétisme pour le sports_martial_artsSaisir ."
            ]
        },
        {
            "name"       : "Empoisonneur à la sarbacane",
            "level"      : "1",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Vous êtes capable de libérer des toxines avec une workSarbacane . Vos Frappes de sarbacane peuvent appliquer des poisons de blessure même si elles n'infligent pas de dégâts à cause d'une résistance de la créature. Si vous obtenez un succès critique sur votre Frappe de sarbacane en utilisant une fléchette empoisonnée, le jet de sauvegarde initial de la cible contre le poison sera d'un degré inférieur à celui obtenu sur le jet. C'est un effet d'infortune.",
                "De plus, si vous effectuez une Frappe de sarbacane alors que vous êtes sentiment_very_dissatisfiedCaché ou sentiment_very_dissatisfiedNon détecté , vous ne devenez pas immédiatement sentiment_very_dissatisfiedObservé . À la place, faites immédiatement un test de casinoDiscrétion contre le DD de perception de la cible. Sur un succès, vous ne devenez pas observé et êtes Caché (Si vous étiez non détecté, vous êtes Caché au lieu de rester Non détecté)."
            ]
        },
        {
            "name"       : "Empoisonneur opportun",
            "level"      : "8",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Les cibles sans méfiance sont particulièrement vulnérables à vos poisons. Lorsque vous réussissez une Frappe contre une créature sentiment_very_dissatisfiedPrise au dépourvu avec une arme empoisonnée ou à exposer une créature Prise au dépourvu à un poison inhalé, cette créature subit une pénalité de circonstances de -2 à son jet de sauvegarde initial contre ce poison.",
                "flareEffet : Empoisonneur opportun"
            ]
        },
        {
            "name"       : "Empoisonneur puissant",
            "level"      : "10",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [
                "Alchimie puissante"
            ],
            "description": [
                "En concentrant les composants toxiques de vos poisons, vous rendez plus difficiles pour vos victimes de leur résister. Lorsque vous Fabriquez un objet alchimique avec le trait poison quel que soit la manière, son DD est augmenté d'un maximum de 4, jusqu'au maximum correspondant à votre DD de classe."
            ]
        },
        {
            "name"       : "Emprunt énergétique 1",
            "level"      : "2",
            "traits"     : [
                "Mutamagie",
                "Magicien"
            ],
            "required"   : [],
            "description": [
                "Lorsque vous dirigez de l'énergie destructrice sur vos ennemis, vous pouvez conserver une part de sa puissance pour former une barrière protectrice qui vous fait un rempart contre les blessures. Si votre prochaine action consiste à sports_martial_artsLancer un sort qui inflige des dégâts d'au moins un type d'énergie (acide, électricité, feu, froid, force, vide ou vitalité), vous obtenez une résistance contre un type de dégâts d'énergie de votre choix égale au rang du sort (minimum 1) jusqu'à la fin de votre prochain tour. Vous obtenez cette résistance que le sort ait ou non infligé des dégâts."
            ]
        },
        {
            "name"       : "En cadence 1",
            "level"      : "4",
            "traits"     : [
                "Barde",
                "Concentration",
                "Mutamagie"
            ],
            "required"   : [
                "muse maestro"
            ],
            "description": [
                "Vous accordez votre grand talent d'interprète à un autre, lui accordant une petite partie de votre maîtrise comme si n'importe qui pourrait le faire. Si votre prochaine action consiste à lancer un sort de composition dont la zone est une émanation, celle-ci s'étend à partir d'un allié consentant de votre choix, situé dans un rayon de 18 mètres, au lieu de vous",
                "Si vous possédez le don military_techPublic choisi , vous pouvez faire en sorte que le cône prenne pour origine cet allié à la place."
            ]
        },
        {
            "name"       : "Enchevêtrement de la bataille r",
            "level"      : "10",
            "traits"     : [
                "Barbare",
                "Rage"
            ],
            "required"   : [],
            "description": [
                "Déclencheur vous obtenez un coup critique sur un ennemi adjacent.",
                "Votre frappe vicieuse attire votre ennemi à proximité, vous donnant l'opportunité de l'attraper. Essayez de sports_martial_artsSaisir l'ennemi déclencheur."
            ]
        },
        {
            "name"       : "Encore une chose 1",
            "level"      : "10",
            "traits"     : [
                "Fortune",
                "Enquêteur"
            ],
            "required"   : [],
            "description": [
                "Conditions Votre plus récente action était de sports_martial_artsFeinter , sports_martial_artsSolliciter ou de sports_martial_artsDémoraliser et vous avez obtenu un échec mais pas un échec critique.",
                "Après votre tentative d'influencer quelqu'un sans y parvenir vous ajoutez une autre information ou vous posez une question pertinente, en rattrapant potentiellement votre précédente tentative. Relancez le test échoué et utilisez le nouveau résultat. Si la cible du test manqué est impliquée dans l'une de vos enquêtes actives, doublez votre bonus d'investigation provenant de sports_martial_artsSuivre une piste sur le test relancé. Cette créature est temporairement immunisée à Encore une chose pendant une journée.",
                "Vous pouvez aussi utiliser cette action si vous avez obtenu un échec mais pas un échec critique sur un test pour sports_martial_artsMentir , sports_martial_artsRecueillir des informations , sports_martial_artsFaire bonne impression ou pour sports_martial_artsContraindre . Dans ce cas, plutôt que de dépenser une action en ajoutant Encore rune chose, cela vous prend la moitié du temps initialement dépensé pour le test échoué, avec un minimum de un round supplémentaire."
            ]
        },
        {
            "name"       : "Énergie blasonnée",
            "level"      : "8",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [
                "Arsenal blasonné"
            ],
            "description": [
                "Grâce aux forces élémentaires, vous rendez les symboles que vous blasonnez avec plus puissant. Quand vous utilisez Arsenal blasonné, vous pouvez choisir l'un des effets suivants au lieu de ceux de ce don. Ces effets imposent les mêmes restrictions que les options de base.",
                [
                    "Arme Choisissez acide, électricité, feu, froid ou son. L'arme inflige 1d4 dégâts supplémentaires de ce type. Ces dégâts passent à 1d6 si vous avez un sort de domaine avec un trait correspondant à ce type (Rayon de feu, par exemple).",
                    "Bouclier Choisissez l'acide, l'électricité, le feu, le froid ou le son. Le porteur bénéficie du bonus de circonstances du bouclier à ses jets de sauvegarde contre ce type de dégâts et peut effectuer un Blocage au bouclier contre les dégâts de ce type. Le bouclier obtient également une résistance contre ce type de dégâts égale à la moitié de votre niveau si vous avez un sort de domaine avec un trait correspondant à ce type ( auto_awesomeRayon de feu , par exemple)."
                ],
                "flareEffet : Énergie blasonnée"
            ]
        },
        {
            "name"       : "Énergie écrasante 1",
            "level"      : "10",
            "traits"     : [
                "Druide",
                "Manipulation",
                "Ensorceleur",
                "Mutamagie",
                "Magicien"
            ],
            "required"   : [],
            "description": [
                "Druide D'un geste complexe, vous invoquez la puissance primordiale de votre sort pour franchir les résistances de vos ennemis.",
                "Ensorceleur Vous modifiez vos sorts pour percer les défenses de l'ennemi.",
                "Magicien De multiples cercles de runes tournent autour de votre main lorsque vous surchargez votre sort pour passer à travers les défenses ennemies.",
                "Si votre prochaine action consiste à Lancer un sort, le sort ignore un nombre de points de résistance de la cible contre l'acide, au froid, à l'électricité, au feu ou au son égal à votre niveau. Cela s'applique à tous les dégâts qu'inflige le sort, y compris les dégâts persistants et ceux causés par un effet continu du sort, comme ceux d'un auto_awesomeMur de feu . Les immunités d'une créature ne sont pas affectées."
            ]
        },
        {
            "name"       : "Énergie sélective",
            "level"      : "6",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [],
            "description": [
                "Lorsque vous invoquez la puissance divine, vous pouvez empêcher certains ennemis d'en bénéficier ou certains alliés d'être blessés. Quand vous lancez une version de auto_awesomeMise à mal ou de auto_awesomeGuérison qui affecte une zone, vous pouvez désigner jusqu'à 5 créatures dans la zone. Elles ne sont ciblées par le sort."
            ]
        },
        {
            "name"       : "Énergie vigoureuse 1",
            "level"      : "12",
            "traits"     : [
                "Manipulation",
                "Mutamagie",
                "Magicien"
            ],
            "required"   : [],
            "description": [
                "Vous accomplissez des manipulations complexes pour rendre l'énergie de vos sorts si puissante que vos ennemis y sont par la suite plus sensibles. Si votre prochaine action consiste à Lancer un sort qui inflige des dégâts d'acide, d'électricité, de feu, de froid ou de son, vous pouvez choisir une cible qui a été blessée pour qu'elle souffre d'une faiblesse de 5 à ce type de dégâts jusqu'à la fin de votre prochain tour. Si un sort inflige des dégâts de différents types d'énergies, choisissez celui contre lequel la cible souffre d'une faiblesse. Cela n'a pas d'effet sur les créatures avec une résistance ou une immunité contre le type d'énergie choisi.",
                "flareEffet : Énergie vigoureuse"
            ]
        },
        {
            "name"       : "Enfant de la tempête",
            "level"      : "1",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "ordre de la tempête"
            ],
            "description": [
                "Vous êtes chez vous au milieu des éléments, à savourer la puissance débridée de la nature. Vous ne subissez aucune pénalité de circonstances aux attaques de sort à distance ou aux tests de Perception provoqués par le climat et vos sorts ciblés ne nécessitent aucun test nu pour toucher une cible sentiment_very_dissatisfiedMasquée par les conditions climatiques (comme le brouillard)."
            ]
        },
        {
            "name"       : "Enquêteur de la pègre",
            "level"      : "1",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [],
            "description": [
                "Votre travail en tant qu'enquêteur vous a rendu familier avec la gent criminelle. Vous pourriez être vous-même un criminel ou avoir gagné une compréhension de la manière dont les criminels opèrent sans en faire partie. Vous devenez qualifié en Connaissance de la pègre et vous obtenez votre bonus de circonstances d'enquête avec sports_martial_artsSuivre une piste aux tests de Vol pour Enquêter au sujet d'une piste (tels que des tests de sports_martial_artsVol d'un indice à un suspect ou pour sports_martial_artsCrocheter une serrure pour ouvrir un coffre contenant des documents compromettants)."
            ]
        },
        {
            "name"       : "Enquêteur principal",
            "level"      : "18",
            "traits"     : [
                "Exploration",
                "Enquêteur"
            ],
            "required"   : [
                "Mise en commun des indices"
            ],
            "description": [
                "Vous passez 1 minute à exposer à un maximum de quatre alliés les indices concernant une de vos enquêtes en cours. Ces alliés obtiennent le même bonus de circonstances que vous, issus de sports_martial_artsSuivre une piste , aux tests pour enquêter sur cette piste. Ce bonus dure jusqu'à ce que vous cessiez de Suivre cette piste ou pendant 1 jour, selon ce qui se produit en premier. Cela ne confère pas d'autre avantage lié à la poursuite d'une piste, comme l'ajout d'un bonus de circonstances à vos jets de sauvegarde avec military_techVivacité du détective ."
            ]
        },
        {
            "name"       : "Entrée tactique f",
            "level"      : "8",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [
                "maître en Discrétion"
            ],
            "description": [
                "Conditions Vous avez lancé Discrétion pour déterminer l'initiative pour cette rencontre et ni vous, ni vos ennemis n'avez encore agi.",
                "Vous Marchez rapidement. Ce déplacement ne déclenche aucune réaction."
            ]
        },
        {
            "name"       : "Entrer en résonance r",
            "level"      : "12",
            "traits"     : [
                "Barde"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Une créature ou un danger devrait vous infliger des dégâts de son",
                "Vous pouvez manipuler l'acoustique autour de vous pour dévier les dégâts de son et les renvoyer à leur source. Faites un test de Représentation contre le casinoReprésentation de la créature ou le casinoReprésentation d'un danger. Si les dégâts proviennent d'un sort, utilisez le DD de sort de la créature s'il est inférieur",
                "Succès critique Vous réduisez les dégâts déclencheurs d'un montant égal à quatre fois votre niveau. Le lanceur subit des dégâts de son égaux au montant des dégâts réduits de cette manière.",
                "Succès Comme avec un succès critique, mais vous réduisez les dégâts déclencheurs par un montant égal à deux fois votre niveau."
            ]
        },
        {
            "name"       : "Environnement de prédilection",
            "level"      : "2",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [],
            "description": [
                "Vous avez étudié un type d'environnement particulier pour mieux surmonter ses défis. Choisissez votre environnement de prédilection parmi les suivants : aquatique, arctique, désertique, forestier, montagnard, plaine, ciel, marécageux ou souterrain. Dans cet environnement, vous ignorez les effets des terrains difficiles non magiques. Si vous avez la capacité de classe Parcours sans obstacle, vous obtenez un second avantage, déterminé par votre choix, lorsque vous évoluez dans votre environnement de prédilection.",
                [
                    "Aquatique Vous obtenez une Vitesse de nage égale à votre Vitesse. Si vous avez déjà une Vitesse de nage, vous obtenez à la place un bonus de statut de +3 mètres à votre Vitesse de nage.",
                    "Arctique Vous n'avez besoin de manger et de boire qu'un dixième de la normale, vous n'êtes pas affecté par le froid important ou extrême et vous pouvez traverser la glace et la neige à votre pleine vitesse sans avoir besoin de sports_martial_artsGarder l'équilibre .",
                    "Ciel Vous obtenez un bonus de statut de +3 mètres à votre Vitesse de vol, si vous en avez une.",
                    "Désert Vous n'avez besoin de manger et de boire qu'un dixième de la normale, vous n'êtes pas affecté par la chaleur importante ou extrême et vous pouvez marcher dans le sable à votre pleine vitesse sans avoir besoin de Garder l'équilibre.",
                    "Forêt, Montagne ou Souterrain Vous obtenez une Vitesse d'escalade égale à votre Vitesse. Si vous avez déjà une Vitesse d'escalade, vous obtenez un bonus de statut de +3 mètres à votre Vitesse d'escalade à la place.",
                    "Marais Vous pouvez vous déplacer à travers les tourbières à pleine vitesse, même si elles sont suffisamment profondes pour constituer un terrain très difficile ou pour nécessiter normalement que vous nagiez.",
                    "Plaines Vous obtenez un bonus de statut de +3 mètres à votre Vitesse."
                ],
                "flareEffet : Environnement de prédilection (Obtenir une Vitesse d'escalade)",
                "flareEffet : Environnement de prédilection (Vitesse d'escalade augmentée)",
                "flareEffet : Environnement de prédilection (Obtenir une Vitesse de nage)",
                "flareEffet : Environnement de prédilection (Vitesse de nage augmentée)"
            ]
        },
        {
            "name"       : "Envoyer au tapis f",
            "level"      : "6",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [
                "qualifié en Athlétisme"
            ],
            "description": [
                "Conditions Votre dernière action était une sports_martial_artsPoussée réussie.",
                "Vous utilisez votre poids pour faire trébucher les ennemis que vous déplacez. Vous tentez de faire un sports_martial_artsCroc-en-jambe à la cible, même si la cible n'est plus dans votre allonge."
            ]
        },
        {
            "name"       : "Épiphanie à la croisée des chemins f",
            "level"      : "12",
            "traits"     : [
                "Divin",
                "Oracle"
            ],
            "required"   : [],
            "description": [
                "Fréquence Une fois par jour",
                "Déclencheur Votre tour commence.",
                "Conditions Vous êtes sentiment_very_dissatisfiedInconscient et avez l'état sentiment_very_dissatisfiedMourant .",
                "La croisée des chemins entre la vie et la mort est un lieu qui peut révéler bien des secrets. Vous obtenez les effets d'un sort auto_awesomeAugure au cours de cette étrange expérience de mort imminente. Conscient de cette issue, vous perdez alors l'état Mourant (devenant sentiment_very_dissatisfiedBlessé 1 ou augmentant la valeur de votre état Blessé de 1, comme à l'ordinaire), regagnez casino2*@actor.level soins Points de vie égaux à deux fois votre niveau et pouvez Vous relever."
            ]
        },
        {
            "name"       : "Épouser la douleur r",
            "level"      : "12",
            "traits"     : [
                "Barbare",
                "Rage"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Une créature dans votre allonge vous inflige des dégâts avec une attaque au corps-à-corps.",
                "Ignorant votre douleur, vous tendez le bras et saisissez la créature ou l'arme qui vous a causé des dégâts. Tentez un test d'Athlétisme pour sports_martial_artsSaisir la créature déclencheuse ou pour sports_martial_artsDésarmer la créature de l'arme avec laquelle elle vous a infligé des dégâts."
            ]
        },
        {
            "name"       : "Épreuve du feu céleste 1",
            "level"      : "10",
            "traits"     : [
                "Lié à une malédiction",
                "Divin",
                "Feu",
                "Oracle"
            ],
            "required"   : [
                "Mystère du cosmos ou des flammes"
            ],
            "description": [
                "Vos lèvres murmurent en prédisant un grand désastre, un auquel vous espérez survivre. Une pluie d'éclairs flamboyants commence à tomber des cieux dans une crop_freeémanation de 3 mètres , centrée sur vous, qui inflige casino2d6 dégâts de feu à toutes les créatures dans l'émanation à la fin de chacun de vos tours ( casinoRéflexes ). Vous ne pouvez pas vous exclure de l'émanation. Le feu céleste persiste pendant 1 minute. Vous ne pouvez pas le Révoquer, mais vous pouvez en supprimer l'effet pendant 1 round en utilisant une action pour Maintenir. La pluie de feu est supprimée si vous tombez sentiment_very_dissatisfiedInconscient . Si vous devenez sentiment_very_dissatisfiedLié à la malédiction 3 ou sentiment_very_dissatisfied4 à n'importe quel moment de la durée de l'Épreuve du feu céleste, l'émanation passe à crop_free4,50 mètres et les dégâts passent à casino4d6 dégâts de feu ."
            ]
        },
        {
            "name"       : "Ériger un menhir 2",
            "level"      : "8",
            "traits"     : [
                "Druide"
            ],
            "required"   : [],
            "description": [
                "Fréquence Une fois par heure",
                "Vous érigez un monument druidique, tel qu'une pierre dressée ou un arbre protecteur, à partir du sol, créant une puissante protection primordiale qui bloque tous les autres types de magie. Ce monument apparaît dans une case inoccupée sur le sol dans les 9 mètres, cette case devenant un terrain difficile. Choisissez le trait arcanique, divin ou occulte : toutes les créatures dans une crop_freeémanation de 4,50 mètres du monument obtiennent un bonus de statut de +2 à tous leurs jets de sauvegarde contre les effets ayant ce trait. Le monument reste en place pendant 1 round avant de s'écrouler et retourner dans la terre ou de se flétrir et disparaître mais vous pouvez Maintenir le monument jusqu'à 1 minute.",
                "flareEffet : Ériger un menhir"
            ]
        },
        {
            "name"       : "Escarmoucheur suprême",
            "level"      : "20",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "Parcours sans obstacle"
            ],
            "description": [
                "Votre talent pour évoluer en pleine nature est tel que le terrain n'affecte plus du tout vos capacités de déplacement. Vous ignorez les effets de tous les terrains difficiles, très difficiles ou dangereux et vous ne déclenchez pas les pièges et les dangers qui se déclenchent lorsqu'on se déplace dans une zone définie (avec des fils de détente ou des plaques de pression, par exemple), sauf si vous le souhaitez."
            ]
        },
        {
            "name"       : "Esquive agile r",
            "level"      : "1",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Une créature vous cible avec une attaque et vous pouvez voir l'attaquant.",
                "Conditions Vous n'êtes pas surchargé",
                "Vous esquivez agilement la trajectoire et obtenez un bonus de circonstances de +2 à la CA contre l'attaque déclencheuse."
            ]
        },
        {
            "name"       : "Esquive spectaculaire r",
            "level"      : "1",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Une créature que vous pouvez voir vous cible avec une attaque.",
                "Conditions Vous n'êtes pas surchargé.",
                "Vous esquivez habilement, obtenant un bonus de circonstances de +2 à la CA contre l'attaque déclencheuse. Si la Frappe est un échec, vous obtenez du panache jusqu'à la fin de votre prochain tour."
            ]
        },
        {
            "name"       : "Étendre l'aura 1",
            "level"      : "6",
            "traits"     : [
                "Champion",
                "Concentration"
            ],
            "required"   : [
                "aura de champion"
            ],
            "description": [
                "Vous concentrez votre puissance divine pour étendre votre influence et votre protection. Vous étendez le rayon de votre aura de champion à 9 mètres jusqu'au début de votre prochain tour. Au niveau 10, l'extension dure 1 minute et, au niveau 16, elle dure jusqu'à ce que vous la Révoquiez."
            ]
        },
        {
            "name"       : "Éternelle jeunesse",
            "level"      : "14",
            "traits"     : [
                "Moine"
            ],
            "required"   : [],
            "description": [
                "Vous ne vieillissez plus. De plus, vous bénéficiez d'un bonus de statut de +2 aux jets de sauvegarde contre les poisons et les maladies et vous bénéficiez d'une résistance au poison égale à la moitié de votre niveau."
            ]
        },
        {
            "name"       : "Étude du maître savant",
            "level"      : "2",
            "traits"     : [
                "Barde",
                "Fortune"
            ],
            "required"   : [
                "Énigmatique (muse de barde)"
            ],
            "description": [
                "Vous débloquez par magie vos souvenirs, les rendant plus faciles à se remémorer. Vous apprenez le sort de composition auto_awesomeÉtude du maître savant ."
            ]
        },
        {
            "name"       : "Études diversifiées",
            "level"      : "1",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [],
            "description": [
                "Vous avez collecté des parcelles d'informations sur des disciplines variées auxquelles vous pouvez vous référer lorsque vous vous préparez à accomplir des tâches variées. Au cours de vos préparatifs quotidiens, vous pouvez potasser un certain sujet pour devenir temporairement qualifié dans une compétence de votre choix. Cette maîtrise dure jusqu'à ce que vous fassiez de nouveau vos préparatifs.",
                "Comme cette maîtrise est temporaire, vous ne pouvez l'utiliser comme prérequis pour une amélioration de compétence ou pour bénéficier d'une option de personnage permanente comme une augmentation de compétence ou un don."
            ]
        },
        {
            "name"       : "Évaluation alchimique",
            "level"      : "1",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [
                "qualifié en Artisanat"
            ],
            "description": [
                "Vous pouvez rapidement identifier des objets alchimiques. Quand vous utilisez la compétence Artisanat pour sports_martial_artsIdentifier l'alchimie sur un objet alchimique que vous tenez, vous pouvez le faire par une action unique, plutôt que d'y passer 10 minutes."
            ]
        },
        {
            "name"       : "Évaluation du combat 1",
            "level"      : "1",
            "traits"     : [
                "Commandant",
                "Guerrier"
            ],
            "required"   : [],
            "description": [
                "Vous faites une attaque télégraphiée pour en apprendre davantage sur votre cible. Faites une Frappe au corps-à-corps. Si vous touchez, vous pouvez immédiatement tenter un test pour sports_martial_artsVous souvenir à propos de votre cible. Sur un coup critique, vous obtenez un bonus de circonstances de +2 au test pour Vous souvenir.",
                "La cible est immunisée temporairement à Évaluation du combat pendant 1 journée."
            ]
        },
        {
            "name"       : "Évaluation martiale 1",
            "level"      : "4",
            "traits"     : [
                "Roublard",
                "Secret"
            ],
            "required"   : [],
            "description": [
                "Pendant le combat, votre sens de l'observation vous permet d'identifier les forces et les faiblesses d'un ennemi. Le MJ fait un test secret de Perception à votre place contre le DD de Duperie ou de Discrétion (celui des deux qui a la valeur la plus élevée) d'un ennemi de votre choix qui n'est pas Masqué, Caché ou Non détecté à vos yeux et qui est en train de se battre. Le MJ peut appliquer une pénalité représentant la distance vous séparant de l'ennemi ciblé. Cet ennemi est ensuite temporairement immunisé à votre Évaluation martiale pendant 1 jour.",
                "Succès critique Le MJ choisit deux informations à vous communiquer sur l'ennemi : sa faiblesse la plus élevée ; son jet de sauvegarde au modificateur le moins élevé ; l'une de ses immunités ; ou sa résistance la plus élevée. En cas d'égalité parmi ces statistiques, le MJ en choisit une au hasard.",
                "Succès Le MJ choisit dans la liste précédente l'une des informations à vous communiquer sur l'ennemi.",
                "Échec critique Le MJ vous donne une fausse information (il invente l'information)."
            ]
        },
        {
            "name"       : "Évaluation stratégique",
            "level"      : "4",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [],
            "description": [
                "Vous apprenez les forces et les faiblesses de vos ennemis en les regardant se déplacer. Lorsque vous obtenez un succès pour toucher une créature avec une Frappe à laquelle vous avez substitué votre jet d'attaque grace à Concevoir un stratagème, le MJ choisit laquelle des informations suivantes il vous donne à propos de l'ennemi.",
                [
                    "Quelle est la plus importante des faiblesses de l'ennemi",
                    "Quelle est la plus importante des résistances de l'ennemi",
                    "Quel jet de sauvegarde de votre ennemi est le plus faible",
                    "Une immunité possédée par l'ennemi"
                ],
                "Le MJ peut choisir délibérément ou de manière aléatoire, mais ne peut choisir une information qui ne s'applique pas (comme choisir une immunité si la cible n'en a aucune). Cela ne s'applique que la première fois que vous réussissez à toucher une créature donnée."
            ]
        },
        {
            "name"       : "Éviscération vicieuse 2",
            "level"      : "18",
            "traits"     : [
                "Barbare",
                "Rage"
            ],
            "required"   : [],
            "description": [
                "Vous portez une frappe vicieuse qui mutile votre ennemi.",
                "Faites une Frappe au corps-à-corps. Si la Frappe touche et inflige des dégâts, la cible est sentiment_very_dissatisfiedDrainée 1 ou sentiment_very_dissatisfiedDrainée 2 en cas de coup critique."
            ]
        },
        {
            "name"       : "Évitement partagé",
            "level"      : "10",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [
                "Évitement prémonitoire"
            ],
            "description": [
                "Vous pouvez projeter vos prémonitions du danger à vos alliés. Lorsque vous utilisez military_techÉvitement prémonitoire , vos alliés dans les 6 mètres de vous qui lancent le même jet de sauvegarde contre le même danger obtiennent aussi le bonus de circonstances de +2 à leur jet de sauvegarde.",
                "flareEffet : Évitement partagé"
            ]
        },
        {
            "name"       : "Évitement prémonitoire r",
            "level"      : "1",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Vous êtes sur le point de tenter un jet de sauvegarde contre un danger.",
                "Votre divinité vous accorde un instant de prescience. Vous obtenez un bonus de circonstances de +2 au jet de sauvegarde déclencheur."
            ]
        },
        {
            "name"       : "Évolution arcanique",
            "level"      : "4",
            "traits"     : [
                "Arcanique",
                "Ensorceleur"
            ],
            "required"   : [
                "Lignage qui accorde des sorts arcaniques"
            ],
            "description": [
                "Votre héritage arcanique vous permet de percevoir comment la magie affecte tout. Vous devenez qualifié dans une compétence de votre choix.",
                "De plus, vous pouvez utiliser les arts arcaniques pour bricoler votre sélection de sorts. Lors de vos préparatifs quotidiens, choisissez l'un des sorts de votre livre de sorts arcaniques pour qu'il devienne un sort emblématique pour la journée.",
                "Vous pouvez utiliser l'activité sports_martial_artsApprendre un sort pour ajouter davantage de sorts arcaniques à la liste dans laquelle vous pouvez choisir, mais si vous préparez un sort qui ne figure pas dans votre répertoire, ajoutez-le temporairement à votre répertoire au rang de sort de votre choix plutôt que d'en faire un sort emblématique."
            ]
        },
        {
            "name"       : "Évolution divine",
            "level"      : "4",
            "traits"     : [
                "Divin",
                "Ensorceleur"
            ],
            "required"   : [
                "Lignage qui accorde des sorts divins"
            ],
            "description": [
                "La puissance divine accordée par votre lignage s'écoule à travers vous. Vous gagnez un emplacement de sort supplémentaire du rang le plus élevé que vous pouvez lancer. Vous pouvez l'utiliser uniquement pour lancer auto_awesomeMise à mal ou auto_awesomeGuérison . Vous pouvez lancer l'un ou l'autre de ces sorts en utilisant cet emplacement de sort même si ces sorts ne font pas partie de votre répertoire."
            ]
        },
        {
            "name"       : "Évolution mentale supérieure",
            "level"      : "16",
            "traits"     : [
                "Ensorceleur"
            ],
            "required"   : [
                "Évolution arcanique ou Évolution occulte"
            ],
            "description": [
                "Le lien étroit entretenu entre votre lignage et l'essence psychique diversifie grandement votre répertoire de sorts. Ajoutez un sort dans votre répertoire de chaque rang que vous pouvez lancer."
            ]
        },
        {
            "name"       : "Évolution métisée",
            "level"      : "8",
            "traits"     : [
                "Ensorceleur"
            ],
            "required"   : [],
            "description": [
                "D'étranges interactions avec votre lignage vous octroient des sorts inattendus. Choisissez un autre Lignage . Vous connaissez l'effet de la magie de sang de ce lignage. Si cet effet de magie de sang a un effet variable qui dépend d'un choix à faire au premier niveau (comme l'influence élémentaire du Lignage élémentaire), vous pouvez prendre cette décision quand vous prenez ce don."
            ]
        },
        {
            "name"       : "Évolution métissée supérieure",
            "level"      : "18",
            "traits"     : [
                "Ensorceleur"
            ],
            "required"   : [
                "Évolution métissée"
            ],
            "description": [
                "Votre lignage est extraordinairement complexe. Choisissez jusqu'à trois des sorts de don sorcier accordés par votre lignée secondaire. Vous ajoutez ces sorts à votre répertoire de sorts, augmentés au rang le plus élevé des sorts que vous pouvez lancer ou au rang le plus élevé auquel ils peuvent être augmentés mais qui est inférieur au rang le plus élevé des sorts que vous pouvez lancer. Vous lancez ces sorts comme de la tradition de votre lignage principale."
            ]
        },
        {
            "name"       : "Évolution occulte",
            "level"      : "4",
            "traits"     : [
                "Occulte",
                "Ensorceleur"
            ],
            "required"   : [
                "lignage qui accorde des sorts occultes"
            ],
            "description": [
                "Vos pouvoirs sont dus à la révélation de fragments de secrets obscurs sur l'univers. Vous devenez qualifié dans une compétence de votre choix. De plus, une fois par jour, vous pouvez passer une minute à choisir un sort mental occulte que vous ne connaissez pas et que vous ajoutez à votre répertoire. Vous perdez ce sort temporaire lors de vos prochains préparatifs quotidiens (mais vous pouvez utiliser ce pouvoir ultérieurement pour l'ajouter de nouveau à votre répertoire)."
            ]
        },
        {
            "name"       : "Évolution physique supérieure",
            "level"      : "12",
            "traits"     : [
                "Ensorceleur"
            ],
            "required"   : [
                "Évolution arcanique ou Évolution primordiale"
            ],
            "description": [
                "Vous changez facilement de forme. Une fois par jour, vous pouvez utiliser un emplacement de sort d'ensorceleur pour lancer n'importe quel sort courant de métamorphose ayant une forme de combat du rang de l'emplacement du sort comme s'il s'agissait d'un sort emblématique de votre répertoire. Vous pouvez utiliser l'emplacement de sort supplémentaire pour une military_techÉvolution Arcanique ou une military_techÉvolution Primordiale au lieu d'un emplacement de sort d'ensorceleur."
            ]
        },
        {
            "name"       : "Évolution primordiale",
            "level"      : "4",
            "traits"     : [
                "Primordial",
                "Ensorceleur"
            ],
            "required"   : [
                "Lignage qui accorde des sorts primordiaux"
            ],
            "description": [
                "Vous pouvez invoquer des créatures de la nature sauvage pour bénéficier de leur aide. Vous gagnez un emplacement de sort supplémentaire du rang le plus élevé que vous pouvez lancer. Vous pouvez l'utiliser uniquement pour lancer auto_awesomeConvocation d'animal ou auto_awesomeConvocation de plantes et de champignons . Vous pouvez lancer l'un ou l'autre de ces sorts en utilisant cet emplacement de sort, même si ces sorts ne font pas partie de votre répertoire."
            ]
        },
        {
            "name"       : "Évolution spirituelle supérieure",
            "level"      : "12",
            "traits"     : [
                "Ensorceleur"
            ],
            "required"   : [
                "Évolution divine ou Évolution occulte"
            ],
            "description": [
                "Votre sang magique permet à vos sorts d'être pleinement efficaces contre les créatures incorporelles. Vos sorts ont les effets d'une rune de propriété workspectrale . Ils peuvent cibler ou affecter une créature projetant sa conscience (comme par le biais de workProjection d'image ) ou possédant une autre créature, même si son corps se trouve ailleurs, bien que vous deviez être au courant de la possession ou de la projection et choisir de procéder de la sorte. Vos sorts peuvent affecter les créatures du Plan éthéré, mais cela ne vous donne aucune capacité particulière pour les localiser."
            ]
        },
        {
            "name"       : "Évolution vitale supérieure",
            "level"      : "16",
            "traits"     : [
                "Ensorceleur"
            ],
            "required"   : [
                "Évolution divine ou Évolution primordiale"
            ],
            "description": [
                "La puissance de la vie déferle en vous comme une source d'énergie. Deux fois par jour, vous pouvez lancer un sort lorsque vous n'avez plus d'emplacements de sort du rang correspondant. Les deux sorts que vous lancez grâce à ce don doivent être d'un rang de sort différent."
            ]
        },
        {
            "name"       : "Exactement comme prévu f",
            "level"      : "12",
            "traits"     : [
                "Fortune",
                "Enquêteur"
            ],
            "required"   : [],
            "description": [
                "Fréquence Une fois par heure",
                "En un clin d'œil, vous calculez les mouvements de votre ennemi et savez exactement où porter votre prochain coup. Si votre prochaine action consiste à sports_martial_artsConcevoir un stratagème , vous pouvez lancer deux fois le d20 et conserver le résultat le plus élevé."
            ]
        },
        {
            "name"       : "Expansion de tour de magie",
            "level"      : "2",
            "traits"     : [
                "Barde",
                "Prêtre",
                "Magus",
                "Oracle",
                "Psychiste",
                "Ensorceleur",
                "Sorcier",
                "Magicien"
            ],
            "required"   : [],
            "description": [
                "Barde, Oracle, Ensorceleur Vos recherches permettent de diversifier votre gamme de sorts simples.",
                "Prêtre Vous étudiez une gamme plus large de sorts simples.",
                "Magus, Magicien Une étude attentive vous permet de préparer une gamme de sorts plus amples pour chaque situation.",
                "Psychiste Vous étendez ce que votre esprit peut accomplir.",
                "Sorcier Votre patron reconnaît vos besoins pour de la diversité et vous accorde le pouvoir de préparer une gamme plus large de sorts simples.",
                "Préparé Vous pouvez préparer deux tours de magie supplémentaires chaque jour.",
                "Spontané Ajoutez deux tours de magie supplémentaires de votre liste de sorts à votre répertoire."
            ]
        },
        {
            "name"       : "Expansion des sorts emblématiques",
            "level"      : "10",
            "traits"     : [
                "Ensorceleur"
            ],
            "required"   : [],
            "description": [
                "Votre lien inné à la magie vous permet de lancer plus de sorts avec une plus grande liberté. Vous ajoutez deux sorts emblématiques supplémentaires dont chacun doit être d'un rang de base de 3 ou inférieur."
            ]
        },
        {
            "name"       : "Expert de la mise au tapis",
            "level"      : "1",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [],
            "description": [
                "Vous avez maîtrisé les pratiques de combat qui vous laisse vous rapprocher des malfaiteurs et les garder vivants. Vous pouvez utiliser votre modificateur d'Intelligence sur les jets d'attaque lorsque vous Concevez un stratagème si vous utilisez une arme du groupe des gourdins à une main (comme un gourdin ou un bâton) en plus des armes habituelles et ces Frappes peuvent donner lieu à une Frappe stratégique. De plus, vous pouvez rendre n'importe laquelle de vos Frappes non-létales sans subir la pénalité normalement applicable de -2."
            ]
        },
        {
            "name"       : "Exploitation de bévue r",
            "level"      : "2",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Une créature contre laquelle vous avez sports_martial_artsConçu un stratagème lors de votre tour le plus récent obtient un échec ou un échec critique sur une Frappe contre vous.",
                "En observant vos ennemis attentivement, vous pouvez tirer le meilleur parti de leurs erreurs. Vous Faites un pas."
            ]
        },
        {
            "name"       : "Explorateur des ordres",
            "level"      : "2",
            "traits"     : [
                "Druide"
            ],
            "required"   : [],
            "description": [
                "Vous avez appris les secrets d'un autre ordre druidique après avoir passé avec succès ses rites initiatiques. Choisissez un ordre différent du vôtre. Vous gagnez un don de niveau 1 dont les prérequis nécessitent l'appartenance à cet ordre et vous êtes à présent un de ses membres en ce qui concerne la satisfaction des prérequis des dons. Si vous commettez des actes anathèmes à votre nouvel ordre, vous perdez tous les dons et pouvoirs nécessitant l'appartenance à cet ordre, mais vous gardez vos autres capacités et dons de druide. Vous ne bénéficiez pas des autres avantages de l'ordre choisi.",
                "Spécial Vous pouvez sélectionner ce don plusieurs fois. Le cas échéant, vous devez choisir à chaque fois un ordre différent de ceux que vous avez déjà choisis."
            ]
        },
        {
            "name"       : "Explosion de démolition",
            "level"      : "2",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez installer vos bombes sur des objets inanimés afin de détruire la zone environnante.",
                "Cette activité qui vous prend une minute, consiste à attacher entre une et quatre bombes à un objet inanimé à votre portée, tel qu'un coffre, une porte, un mur ou une colonne.",
                "Cela crée un piège sur une case occupée ou adjacente à l'objet inanimé. Le DD de Discrétion du piège pour le détecter et le DD de Vol pour le désactiver sont égaux à votre DD de classe.",
                "Le piège possède la réaction sports_martial_artsMise à feu ! que vous pouvez également déclencher à l'aide d'une action unique tant que vous êtes à moins de 9 mètres du piège. Le piège conserve son potentiel jusqu'à ce qu'il soit déclenché, que l'objet inanimé quitte son espace ou que vous fassiez vos prochains préparatifs quotidiens selon ce qui se produit en premier.",
                "sports_martial_artsMise à feu ! R",
                "Déclencheur Une créature se déplace dans la case du piège.",
                "Effet Le piège explose, infligeant les dégâts des bombes et les dégâts d'éclaboussures à l'objet inanimé. Combinez ces dégâts pour les besoins de calculer les résistances et les faiblesses et ces dégâts ignorent un montant de la Solidité de l'objet égal à votre niveau. Toute créature adjacente au piège subit les dégâts d'éclaboussures des bombes, combinés de la même façon, pour les besoins de calculer les résistances et les faiblesses. Souvenez vous que comme vous ne lancez pas les bombes, military_techÉclaboussure calculée et les effets similaires ne s'appliquent pas."
            ]
        },
        {
            "name"       : "Explosion de puissance",
            "level"      : "8",
            "traits"     : [
                "Ensorceleur"
            ],
            "required"   : [],
            "description": [
                "Votre magie explose. Vous connaissez l'effet de magie du sang suivant :",
                "Magie du sang - Explosion de puissance Une puissance brute explose à partir de vous. Chaque créature située dans une crop_freeémanation de 1,50 mètre subit 1d6 dégâts par rang du sort que vous venez de lancer ( casinoRéflexes ). Le type de dégâts dépend de la tradition de votre lignage. Si vous lancez des sorts arcaniques, vous infligez des dégâts de force. Si vous lancez des sorts divins, vous infligez des dégâts spirituels. Si vous lancez des sorts occultes, vous infligez des dégâts mentaux. Si vous lancez des sorts primordiaux, vous infligez des dégâts de feu."
            ]
        },
        {
            "name"       : "Fabricateur de miracles",
            "level"      : "18",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Fréquence Une fois toutes les 10 minutes",
                "Votre maîtrise de l'alchimie vous permet de ressusciter des morts récents. Vous pouvez administrer un Élixir de vie majeur ou ultime à une créature qui n'est pas morte depuis plus de 2 rounds. Quand vous effectuez cela, la créature revient immédiatement à la vie avec 1 Point de vie et se trouve dans l'état sentiment_very_dissatisfiedBlessé 1 ."
            ]
        },
        {
            "name"       : "Fabrication de la pierre philosophale",
            "level"      : "20",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Vos recherches ont porté leurs fruits et vous avez découvert la légendaire pierre philosophale. Vous apprenez la formule de la workPierre philosophale et vous pouvez l'ajouter à votre recueil."
            ]
        },
        {
            "name"       : "Faiblesses connues",
            "level"      : "1",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [],
            "description": [
                "Lorsque vous sports_martial_artsConcevez un stratagème , vous pouvez aussi tenter un test pour sports_martial_artsVous souvenir faisant partie de cette action avant de lancer le d20. Si vous obtenez un succès critique au test pour Vous souvenir, vous remarquez une faiblesse et pouvez communiquer l'information à vos alliés pour leur donner un bonus de circonstances de +1 à leur prochaine attaque contre le sujet, tant que cette attaque est portée avant le début de votre prochain tour. Si vous choisissez un stratagème d'attaque, ce bonus s'applique également à ce jet d'attaque.",
                "flareEffet : Faiblesses connues"
            ]
        },
        {
            "name"       : "Faire pencher la balance 1",
            "level"      : "1",
            "traits"     : [
                "Lié à une malédiction",
                "Divin",
                "Guérison",
                "Oracle",
                "Spirituel"
            ],
            "required"   : [],
            "description": [
                "Vous posez un doigt sur la balance de la vie et de la mort pour soigner une créature, qu'elle soit vivante ou morte-vivante. Vous rendez casino2 + le double de votre niveau de Points de vie à une créature dans les 9 mètres.",
                "En outre, vous pouvez servir de médiateur au cours de vos préparatifs quotidiens et vous placer d'un des deux côtés de la balance. Choisissez la vie ou la mort. Si vous vous alignez sur la vie, vous êtes soigné par les effets de guérison de vitalité, comme c'est le cas pour la plupart des créatures vivantes. Si vous vous alignez sur la mort, vous obtenez la capacité guérison du vide, qui vous permet d'être soigné par les effets du vide qui restaurent des Points de vie et tous les autres effets qui redonnent des Points de vie aux créatures mortes-vivantes."
            ]
        },
        {
            "name"       : "Fais attention 1",
            "level"      : "6",
            "traits"     : [
                "Émotion",
                "Terreur",
                "Mental",
                "Roublard"
            ],
            "required"   : [
                "qualifié en Intimidation"
            ],
            "description": [
                "Vous menacez la cible, utilisant ses craintes et attirant son attention. Faites un test d' casinoIntimidation contre le DD de Volonté d'une cible dans les 9 mètres. Si vous réussissez, pendant 1 minute, cette cible obtient un bonus de statut de +2 aux tests de Perception contre vous, mais elle subit une pénalité de statut de -2 aux jets de Volonté contre les effets de terreur.",
                "flareEffet : Fais attention"
            ]
        },
        {
            "name"       : "Faiseur de miracles",
            "level"      : "20",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [
                "Sort miraculeux"
            ],
            "description": [
                "Vous êtes le vecteur d'un pouvoir véritablement divin. Vous obtenez un emplacement de sort de rang 10 supplémentaire."
            ]
        },
        {
            "name"       : "Faites-les suer",
            "level"      : "12",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [
                "Méthodologie : Interrogatoire"
            ],
            "description": [
                "Votre méthode d'interrogation permet à un suspect de savoir que vous voyez clair dans son jeu, l'ébranlant au plus profond de lui-même. Lorsque vous réussissez à utiliser sports_martial_artsQuestion imparable , la cible est également sentiment_very_dissatisfiedEffrayée 1 (ou sentiment_very_dissatisfiedEffrayée 2 en cas de succès critique). Cet effet supplémentaire est un effet d'émotion et de terreur, mais les autres effets de Question imparable s'appliquent toujours, même si la cible est immunisée contre la terreur."
            ]
        },
        {
            "name"       : "Familier",
            "level"      : "1",
            "traits"     : [
                "Magus",
                "Ensorceleur",
                "Thaumaturge",
                "Magicien"
            ],
            "required"   : [],
            "description": [
                "Ensorceleur, Magus Un animal se met à votre service et vous assiste lors de vos incantations.",
                "Magicien Vous faites un pacte avec une créature qui vous sert et vous assiste lors de vos incantations.",
                "Thaumaturge Que ce soit en suivant des rituels occultes, en mettant bout à bout des parcelles de théorie arcanique ou par une autre méthode, vous avez invoqué une créature qui vous sert désormais de compagnon constant dans vos recherches sur le surnaturel.",
                "Vous obtenez un familier."
            ]
        },
        {
            "name"       : "Familier alchimique",
            "level"      : "1",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez utiliser l'alchimie pour donner vie à une créature simple formée d'ingrédients alchimiques, de réactifs et d'un peu de votre sang. Vous obtenez un familier, qui a la capacité de familier Construct ; cette capacité est permanente, ne nécessite pas que le familier aie la capacité Robuste , et ne compte pas dans le total habituel des capacités de familier (en général 2). Le familier utilise votre modificateur d'Intelligence afin de déterminer ses modificateurs de Perception, d'Acrobaties et de Discrétion."
            ]
        },
        {
            "name"       : "Familier amélioré",
            "level"      : "2",
            "traits"     : [
                "Animiste",
                "Druide",
                "Magus",
                "Ensorceleur",
                "Thaumaturge",
                "Sorcier",
                "Magicien"
            ],
            "required"   : [
                "Un familier"
            ],
            "description": [
                "Animiste Vous êtes capable de matérialiser davantage d'essence de l'apparition à laquelle vous êtes harmonisé, créant un réceptacle plus puissant pour qu'elle puisse l'habiter et vous aider.",
                "Druide Vous imprégnez votre familier avec de l'énergie primordiale supplémentaire, augmentant ses pouvoirs.",
                "Ensorceleur, Magicien, Sorcier Vous imprégnez votre familier avec davantage de magie.",
                "Magus Vous imprégnez votre familier de l'énergie magique supplémentaire.",
                "Thaumaturge En appliquant le meilleur de multiples traditions magiques, vous avez découvert une manière plus efficace pour que votre familier emmagasine de l'énergie.",
                "Vous pouvez choisir quatre pouvoirs de familier ou de maître au lieu de deux.",
                "Spécial Ajouter les pouvoirs de familier supplémentaires que vous obtenez en étant un sorcier à ce montant. Si votre thèse arcanique est Harmonisation avec le familier améliorée , le nombre de base de pouvoirs de votre familier, avant d'ajouter tout pouvoir de votre thèse arcanique est de quatre."
            ]
        },
        {
            "name"       : "Familier amélioré (Sorcier)",
            "level"      : "4",
            "traits"     : [
                "Sorcier"
            ],
            "required"   : [],
            "description": [
                "Vous trouvez facile d'attirer un familier puissant et inhabituel.",
                "Le nombre de capacités nécessaires pour faire de votre familier un familier spécifique est de deux inférieure à la normale."
            ]
        },
        {
            "name"       : "Familier effiloché",
            "level"      : "8",
            "traits"     : [
                "Sorcier"
            ],
            "required"   : [
                "patron arcanique ou primordial"
            ],
            "description": [
                "Votre familier peut se débarrasser de sa forme matérielle et devenir une masse de magie animée. Votre familier obtient l'activité sports_martial_artsFrappe effilochée"
            ]
        },
        {
            "name"       : "Familier léchi",
            "level"      : "1",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "Ordre de la feuille"
            ],
            "description": [
                "Vous invoquez un esprit mineur de la nature dans le corps d'une plante, créant ainsi un compagnon léchi pour vous aider dans vos incantations. Vous obtenez un familier, qui possède au choix le pouvoir de familier végétal ou champignon ; ce pouvoir n'est pas pris en compte dans votre limite habituelle de pouvoirs de familier (généralement 2). L'esprit que vous invoquez a un lien plus ténu avec son corps végétal que les léchis totalement indépendants, de sorte qu'il est de taille Très petite comme les autres familiers."
            ]
        },
        {
            "name"       : "Familier spirituel (Sorcier)",
            "level"      : "8",
            "traits"     : [
                "Sorcier"
            ],
            "required"   : [
                "patron divin ou occulte"
            ],
            "description": [
                "Votre familier peut subsumer son corps pour devenir un pur esprit. Votre familier obtient l'activité sports_martial_artsDépouiller ."
            ]
        },
        {
            "name"       : "Fascination concentrée",
            "level"      : "1",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [
                "Représentation fascinante"
            ],
            "description": [
                "Lorsque vous utilisez military_techReprésentation fascinante lors d'une rencontre de combat, vous n'avez besoin que d'un succès à la place d'un succès critique pour sentiment_very_dissatisfiedFasciner votre cible. Cela ne fonctionne que si vous tentez de fasciner une cible. Par exemple, si vous êtes un expert en Représentation, vous pouvez choisir de cibler plusieurs créatures normalement ou de n'en cibler qu'une seule pour parvenir à la fasciner sur un succès."
            ]
        },
        {
            "name"       : "Feinte chancelante",
            "level"      : "6",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "expert en Duperie, Posture chancelante"
            ],
            "description": [
                "Conditions vous avez adopté la military_techPosture chancelante .",
                "Vous déchaînez de manière déroutante ce qui ressemble à un mouvement faible mais à la place, vous permet de déchaîner un déluge de coups dangereux sur votre ennemi qui ne se doute de rien.",
                "Lorsque vous utilisez sports_martial_artsDéluge de coups , vous pouvez tenter un test pour sports_martial_artsFeinter par une action gratuite, juste avant la première sports_martial_artsFrappe . En cas de succès, au lieu de rendre la cible sentiment_very_dissatisfiedPrise au dépourvu contre votre prochaine attaque, elle le devient contre les deux attaques du Déluge de coups."
            ]
        },
        {
            "name"       : "Feinte de diversion",
            "level"      : "2",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [
                "Trafic de scélérat"
            ],
            "description": [
                "Vos sports_martial_artsFeintes sont bien plus distrayantes que la normale. Lorsqu'une créature est sentiment_very_dissatisfiedprise au dépourvu suite à votre Feinte, elle subit également une pénalité de circonstances de -2 à ses tests de Perception et à ses jets de Réflexes.",
                "flareEffet : Feinte de diversion"
            ]
        },
        {
            "name"       : "Feinte de lancer 2",
            "level"      : "8",
            "traits"     : [
                "Bravade",
                "Sophistication",
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Vous lancez une arme en l'air en guise de distraction pendant que vous en lancez une autre. Choisissez une créature dans les 9 mètres et faites une sports_martial_artsFeinte contre elle. Vous pouvez tenter cette feinte même si la cible n'est pas dans votre allonge au corps-à-corps et, si la cible devient sentiment_very_dissatisfiedPrise au dépourvu à la suite de la feinte, cet état s'applique pour vos attaques avec les armes de jet pendant sa durée.",
                "Quel que soit le résultat, vous pouvez alors Interagir pour dégainer une arme de jet et faire une Frappe d'arme de jet contre la cible. Si vous disposez d'une main libre, vous rattrapez l'arme que vous avez lancé en l'air à l'origine à moins que vous n'ayez obtenu un échec critique à votre tentative pour Feinter, auquel cas, elle atterrit sur le sol à à vos pieds."
            ]
        },
        {
            "name"       : "Feinte de ricochet",
            "level"      : "12",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [
                "Posture du ricochet"
            ],
            "description": [
                "Lorsque vous adoptez la military_techPosture du ricochet , vous pouvez faire rebondir une arme de jet sur un ennemi pour le distraire. Vous pouvez tenter une sports_martial_artsFeinte contre une créature dans le premier facteur de portée d'une arme de jet que vous maniez et pas seulement contre les créatures qui sont dans votre allonge au corps-à-corps."
            ]
        },
        {
            "name"       : "Feinte jumelée 2",
            "level"      : "1",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez deux armes de corps-à-corps, chacune dans une main différente",
                "Vous utilisez une attaque avec l'une de vos armes pour distraire votre adversaire d'une seconde attaque provenant d'un angle différent. Faites une Frappe avec chacune de vos deux armes de corps-à-corps, les deux contre la même cible. La cible est automatiquement sentiment_very_dissatisfiedPrise au dépourvu contre la seconde attaque. Appliquez normalement votre pénalité d'attaques multiples à ces Frappes."
            ]
        },
        {
            "name"       : "Feinte précautionneuse",
            "level"      : "1",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [
                "qualifié en Duperie"
            ],
            "description": [
                "Vous poussez votre adversaire à prendre trop de risques. Sur une sports_martial_artsFeinte réussie, vous pouvez utiliser l'effet de succès et de succès critique suivant au lieu de tout autre effet qui devrait se produire lorsque vous Feintez.",
                "Succès critique La cible subit une pénalité de circonstances de -2 à tous ses jets d'attaque contre vous jusqu'à la fin de son prochain tour.",
                "Succès La cible subit une pénalité de circonstances de -2 à sa prochaine attaque contre vous avant la fin de son prochain tour."
            ]
        },
        {
            "name"       : "Feinte provocante",
            "level"      : "1",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [
                "qualifié en Duperie"
            ],
            "description": [
                "Vos ruse poussent vos adversaires à porter trop loin leurs attaques. Sur une sports_martial_artsFeinte , vous pouvez utiliser les effets de succès et de succès critique ci-dessous au lieu de tout autre effet que vous pourriez obtenir lorsque vous Feintez ; si vous le faites, les autres capacités qui ajustent les effets normaux de Feinte ne s'appliquent plus. Vous pouvez choisir soit d'utiliser les avantages de Feinte provocante ou les effets normaux à chaque fois que vous Feintez un ennemi donné.",
                "Succès critique La cible subit une pénalité de circonstances de -2 à tous les jets d'attaque contre vous avant la fin de son prochain tour.",
                "Succès La cible subit une pénalité de circonstances de -2 à son prochain jet d'attaque contre vous avant la fin de son prochain tour.",
                "flareEffet : Feinte provocante"
            ]
        },
        {
            "name"       : "Fente 1",
            "level"      : "2",
            "traits"     : [
                "Guerrier"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez une arme de corps-à-corps.",
                "Vous attaquez un ennemi qui se trouve juste au bord de votre allonge. Faites une Frappe avec une arme de corps-à-corps, en augmentant votre allonge de 1,50 mètre pour cette Frappe. Si l'arme possède le trait désarmer, pousser ou croc-en-jambe, vous pouvez utiliser l'action correspondante au lieu de porter une Frappe."
            ]
        },
        {
            "name"       : "Fente de géant 1",
            "level"      : "14",
            "traits"     : [
                "Barbare",
                "Concentration",
                "Rage"
            ],
            "required"   : [
                "Instinct de géant"
            ],
            "description": [
                "Vous étendez votre corps et vous préparez à attaquer des ennemis qui se trouvent au-delà de votre allonge habituelle. Jusqu'à ce que votre rage se termine, toutes vos armes de corps-à-corps et attaques à mains nues obtiennent une allonge de 3 mètres. Cette capacité n'affecte pas l'allonge des armes et attaques à mains nues qui possèdent déjà le trait allonge, mais elle se combine avec les autres capacités qui augmentent votre allonge en augmentant votre taille, comme Stature de géant."
            ]
        },
        {
            "name"       : "Feuille dansante",
            "level"      : "2",
            "traits"     : [
                "Moine"
            ],
            "required"   : [],
            "description": [
                "Vous êtes aussi léger qu'une feuille qui virevolte dans la brise. Quand vous sports_martial_artsBondissez ou obtenez un succès pour sports_martial_artsSauter en hauteur ou sports_martial_artssauter longueur , augmentez la distance de votre saut de 1,50 mètre. Quand vous calculez les dégâts que vous subissez lors d'une chute, ne comptez pas la distance de chute parcourue en restant adjacent à un mur ou une paroi."
            ]
        },
        {
            "name"       : "Fidèle destrier",
            "level"      : "1",
            "traits"     : [
                "Champion"
            ],
            "required"   : [],
            "description": [
                "Vous obtenez les services d'un jeune compagnon animal qui vous sert de monture. Si vous avez le trait saint ou impie, votre monture l'obtient également, de même que ses Frappes. Généralement, le destrier est un compagnon animal doté de la capacité monture (tel qu'un cheval). Le MJ pourrait autoriser une autre option de compagnon animal ou permettre à la créature d'avoir une apparence différente qui correspond au thème de votre divinité."
            ]
        },
        {
            "name"       : "Final brutal 1",
            "level"      : "12",
            "traits"     : [
                "Guerrier",
                "Persévérer"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez une arme de corps-à-corps à deux mains.",
                "Votre dernier coup peut créer un impact, même s'il est dévié par les défenses de votre adversaire. Effectuez une Frappe avec une arme que vous maniez à deux mains. Après la Frappe, votre tour se termine. La Frappe inflige un dé de dégâts d'arme supplémentaire ou deux dés supplémentaires si vous êtes au moins de niveau 18. La Frappe a également l'effet d'échec suivant.",
                "Échec Vous infligez un montant de dégâts égal à un dé de dégâts de l'arme requise. Passez ces dégâts à deux dés si vous êtes au moins de niveau 18."
            ]
        },
        {
            "name"       : "Final directif 1",
            "level"      : "14",
            "traits"     : [
                "Guerrier",
                "Persévérer"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez une unique arme de corps-à-corps à une main et ne tenez rien d'autre dans vos mains.",
                "En utilisant votre arme comme un levier, vous forcez votre adversaire à se déplacer exactement là où vous le désirez. Effectuez une Frappe avec une arme au corps-à-corps à une main. Si cette Frappe touche, vous pouvez sports_martial_artsRepositionner la cible de 3 mètres. Vous ne pouvez pas la faire traverser votre espace pendant ce déplacement. Votre Frappe obtient l'effet d'échec suivant.",
                "Échec Vous pouvez forcer la créature à se déplacer comme en cas de succès, mais vous ne déplacez la cible que de 1,50 mètre."
            ]
        },
        {
            "name"       : "Final furieux 1",
            "level"      : "2",
            "traits"     : [
                "Barbare",
                "Rage"
            ],
            "required"   : [],
            "description": [
                "Quand vous avez désespérément besoin de mettre un terme à un combat, vous concentrez toute votre rage dans un dernier coup. Effectuez une Frappe. Si elle réussit, vous obtenez un bonus de circonstances aux dégâts égal au nombre de rounds de Rage que vous avez encore (avec un maximum de 10). Après cette Frappe, votre Rage prend immédiatement fin et vous êtes dans l'état sentiment_very_dissatisfiedFatigué jusqu'à ce que vous vous reposiez au moins 10 minutes."
            ]
        },
        {
            "name"       : "Final retentissant r",
            "level"      : "16",
            "traits"     : [
                "Barde",
                "Concentration"
            ],
            "required"   : [
                "Maestro (Muse de barde)"
            ],
            "description": [
                "Déclencheur Vous ou un allié qui bénéficie de votre sort de composition devrait subir des dégâts de son.",
                "Vous interrompez votre représentation sur un final brutal et dramatique noyant les autres sons. Votre sort de composition s'achève immédiatement et tous vos alliés qui ont bénéficié des effets du sort obtiennent une résistance au son contre les dégâts déclencheurs égale à deux fois le rang du sort de composition.",
                "flareEffet : Final retentissant"
            ]
        },
        {
            "name"       : "Fioles apaisantes",
            "level"      : "1",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Les produits chimiques curatifs contenus dans vos fioles polyvalentes aident également à calmer l'esprit du patient. Lorsqu'une créature vivante affectée par un effet mental regagne des Points de vie grâce à l'une de vos fioles polyvalentes, elle peut immédiatement tenter un nouveau jet de Volonté pour mettre fin à un effet mental de son choix. Elle bénéficie d'un bonus d'objet de +1 sur ce jet de sauvegarde.",
                "flareEffet : Fioles apaisantes"
            ]
        },
        {
            "name"       : "Fioriture élaborée 1",
            "level"      : "4",
            "traits"     : [
                "Concentration",
                "Manipulation",
                "Ensorceleur",
                "Mutamagie"
            ],
            "required"   : [],
            "description": [
                "Vous embellissez vos sorts avec des fioritures envoûtantes et de grandes déclamations, ce qui les rend plus difficiles à identifier ou à contrer.",
                "Si la prochaine action que vous utilisez consiste à sports_martial_artsLancer un sort , les créatures disposant de la capacité de lancer ce sort ne savent pas automatiquement quel est le sort.",
                "De plus, les créatures qui sont témoins du lancement de votre sort subissent une pénalité de circonstances de -2 pour les tests pour sports_martial_artsSe souvenir et aux test pour contrer le sort lors de son incantation (comme avec military_techContresort )."
            ]
        },
        {
            "name"       : "Flexibilité ultime",
            "level"      : "20",
            "traits"     : [
                "Guerrier"
            ],
            "required"   : [
                "Flexibilité améliorée"
            ],
            "description": [
                "Votre expérience vous permet de rester vigilant, d'adopter à la volée des stratégies complexes et de relever les défis les plus périlleux. Lorsque vous obtenez un don de guerrier en utilisant flexibilité martiale , vous obtenez trois dons de guerrier au lieu de deux. Bien que le premier doit toujours être de niveau 8 ou inférieur, le deuxième don doit être de niveau 14 au maximum et le troisième peut être de niveau 18.",
                "Vous pouvez utiliser le premier don pour remplir les prérequis du deuxième ou du troisième don et le deuxième pour remplir les prérequis du troisième don. Vous devez remplir tous les prérequis des trois dons comme à l'ordinaire.",
                "De plus, vous pouvez vous adapter aux défis du champ de bataille en passant 1 heure à vous entraîner. Si vous le faites, vous pouvez re-sélectionner les dons choisis avec flexibilité martiale comme si vous aviez effectué vos préparatifs quotidiens. Vous ne pouvez pas échanger de la sorte les capacités à usage limité que vous avez déjà utilisées, comme avec military_techDétermination ."
            ]
        },
        {
            "name"       : "Fluidité détournée 1",
            "level"      : "10",
            "traits"     : [
                "Moine"
            ],
            "required"   : [],
            "description": [
                "Fréquence Une fois par round",
                "La destination est souvent moins importante que le trajet pour y parvenir. Vous effectuez deux des actions suivantes dans l'ordre de votre choix : Se relever, Faire un pas et Marcher rapidement. Vous ne pouvez pas faire deux fois la même action."
            ]
        },
        {
            "name"       : "Flûte de Hamelin",
            "level"      : "20",
            "traits"     : [
                "Barde"
            ],
            "required"   : [],
            "description": [
                "Vous apprenez le sort de composition auto_awesomeFlûte de Hamelin , qui vous permet de contrôler les actions des individus faibles d'esprit."
            ]
        },
        {
            "name"       : "Flux et reflux 1",
            "level"      : "14",
            "traits"     : [
                "Prêtre",
                "Concentration",
                "Mutamagie"
            ],
            "required"   : [
                "Source polyvalente"
            ],
            "description": [
                "Vous pouvez tirer de l'énergie de la vitalité et du vide simultanément pour blesser vos ennemis et soigner vos alliés. Si votre prochaine action consiste à Lancer un sort de auto_awesomeGuérison ou de auto_awesomeMise à mal à 1 action ou 2 actions, choisissez une créature à portée qui devrait être blessée par le sort et choisissez une créature à portée qui devrait être soignée par le sort. Votre Guérison ou Mise à mal cible les deux créatures."
            ]
        },
        {
            "name"       : "Focalisation de révélation",
            "level"      : "14",
            "traits"     : [
                "Oracle"
            ],
            "required"   : [],
            "description": [
                "L'étendue de votre mystère vous procure une source inépuisable de magie. Lorsque vous Refocalisez, vous récupérez tous vos points de focalisation au lieu de 1."
            ]
        },
        {
            "name"       : "Focalisation déferlante f",
            "level"      : "8",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [],
            "description": [
                "Fréquence Une fois par jour",
                "Déclencheur Un allié que vous pouvez voir passe à 0 Point de vie.",
                "Lorsqu'un allié que vous pouvez voir tombe au combat, votre élan d'indignation vertueuse vous permet de puiser dans des réserves inexploitées de puissance divine. Vous regagnez instantanément 1 Point de focalisation."
            ]
        },
        {
            "name"       : "Focalisation dévouée",
            "level"      : "10",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "sorts de dévotion"
            ],
            "description": [
                "Votre dévotion est suffisante pour porter votre focalisation à une incroyable hauteur. Quand vous Refocalisez, remplissez complètement votre réserve de focalisation."
            ]
        },
        {
            "name"       : "Focalisation du domaine",
            "level"      : "12",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [
                "au moins un sort de domaine"
            ],
            "description": [
                "Votre dévotion envers les domaines de votre divinité grandit davantage ainsi que le pouvoir qui vous a été accordé. Lorsque vous Refocalisez, vous remplissez complètement votre réserve de focalisation."
            ]
        },
        {
            "name"       : "Focalisation du gardien",
            "level"      : "12",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "sorts de gardien"
            ],
            "description": [
                "Votre lien avec votre environnement s'approfondit et s'étend vous permettant de tirer davantage de la nature primordiale lorsque vous Refocalisez. Quand vous Refocalisez, vous récupérez tous vos points de focalisation au lieu de 1."
            ]
        },
        {
            "name"       : "Focalisation du lignage",
            "level"      : "12",
            "traits"     : [
                "Ensorceleur"
            ],
            "required"   : [
                "sort de lignage"
            ],
            "description": [
                "En écoutant les battements de votre cœur, vous récupérez plus rapidement votre focalisation. Quand vous Refocalisez, remplissez complètement votre réserve de focalisation."
            ]
        },
        {
            "name"       : "Focalisation du lutteur",
            "level"      : "2",
            "traits"     : [
                "Moine"
            ],
            "required"   : [],
            "description": [
                "Vous savez comment optimiser vos attaques en combat rapproché. Vous avez accès aux effets critiques spécialisés des frappes à mains nues du groupe pugilat et des armes du groupe pugilat. Si vous avez military_techArmes monacales , vous avez également accès aux effets critiques spécialisés de toutes les armes de moines avec lesquelles vous êtes qualifié."
            ]
        },
        {
            "name"       : "Focalisation furieuse",
            "level"      : "6",
            "traits"     : [
                "Guerrier"
            ],
            "required"   : [
                "Attaque en puissance"
            ],
            "description": [
                "Vous avez appris à garder votre équilibre, même quand vous frappez avec acharnement. Quand vous faites une military_techCoup vicieux avec une arme de corps-à-corps que vous maniez à deux mains, elle compte comme une attaque au lieu de deux dans le calcul de votre pénalité d'attaques multiples."
            ]
        },
        {
            "name"       : "Focalisation inspirante",
            "level"      : "12",
            "traits"     : [
                "Barde"
            ],
            "required"   : [],
            "description": [
                "Le lien avec votre muse vous a accordé une focalisation inhabituelle. Lorsque vous Refocalisez, remplissez complètement votre réserve de focalisation."
            ]
        },
        {
            "name"       : "Focalisation liée",
            "level"      : "4",
            "traits"     : [
                "Magicien"
            ],
            "required"   : [
                "Lien arcanique, Sorts de cursus"
            ],
            "description": [
                "Vous avez associé votre objet lié au puits d'énergie qui alimente vos sorts d'école. Une fois par jour, lorsque vous sports_martial_artsDrainez votre objet lié pour lancer un sort de cursus de votre école, vous récupérez aussi 1 point de focalisation."
            ]
        },
        {
            "name"       : "Focalisation méditative",
            "level"      : "12",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "Sorts Qi"
            ],
            "description": [
                "Votre méditation est si efficace qu'elle vous permet une focalisation profonde avec le monde autour de vous. Quand vous Refocalisez, vous regagnez tous vos points de focus au lieu d'un seul."
            ]
        },
        {
            "name"       : "Focalisation primordiale",
            "level"      : "12",
            "traits"     : [
                "Druide"
            ],
            "required"   : [],
            "description": [
                "Votre rapport avec la nature est particulièrement fort et les esprits de la nature s'attroupent autour de vous, vous aidant à récupérer votre focalisation. Lorsque vous Refocalisez, vous remplissez complètement votre réserve de focalisation."
            ]
        },
        {
            "name"       : "Focaliseur lié",
            "level"      : "14",
            "traits"     : [
                "Magicien"
            ],
            "required"   : [
                "lien arcanique"
            ],
            "description": [
                "Votre lien avec votre objet lié augmente votre réserve de focalisation. Lorsque vous Refocalisez et que votre objet lié est en votre possession, vous remplissez complètement votre réserve de focalisation."
            ]
        },
        {
            "name"       : "Force intérieure 1",
            "level"      : "6",
            "traits"     : [
                "Barbare",
                "Concentration",
                "Rage"
            ],
            "required"   : [
                "Instinct spirituel"
            ],
            "description": [
                "Votre force est une part de votre rage. Tant que votre colère persiste, vous pouvez rassembler votre force et votre rage pour franchir toute sorte d'affaiblissement.",
                "Vous réduisez la valeur de votre état sentiment_very_dissatisfiedAffaibli de 1."
            ]
        },
        {
            "name"       : "Formation au maniement d'armes évoluées",
            "level"      : "6",
            "traits"     : [
                "Guerrier"
            ],
            "required"   : [],
            "description": [
                "Vous avez étudié la science du maniement d'un groupe d'armes évoluées. Choisissez un groupe d'armes. Vous obtenez la maîtrise de toutes les armes évoluées de ce groupe comme s'il était composé d'armes de guerre."
            ]
        },
        {
            "name"       : "Forme anthropomorphique",
            "level"      : "4",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "Forme indomptée"
            ],
            "description": [
                "La prétendue place des humanoïdes séparée de celle des animaux est une absurdité : prendre leurs formes demande juste un peu plus d'entraînement. Ajoutez les formes du sort auto_awesomeForme humanoïde à la liste de celles de votre auto_awesomeForme indomptée ."
            ]
        },
        {
            "name"       : "Forme indomptée",
            "level"      : "1",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "ordre indompté"
            ],
            "description": [
                "Vous ne faites qu'un avec la nature sauvage, toujours changeante et s'adaptant sans arrêt pour relever n'importe quel défi. Vous obtenez le sort d'ordre auto_awesomeForme indomptée qui vous permet de vous transformer de diverses manières que vous pouvez encore améliorer avec des dons de druide."
            ]
        },
        {
            "name"       : "Forme sans pareille",
            "level"      : "14",
            "traits"     : [
                "Moine"
            ],
            "required"   : [],
            "description": [
                "La maîtrise de votre corps est suffisamment parfaite pour freiner les ravages du temps. Vous cessez de vieillir, bien que vous finirez par mourir à la fin de votre vie. De plus, vous obtenez un bonus de statut de +2 aux jets de Vigueur et de Volonté."
            ]
        },
        {
            "name"       : "Formidable compagnon (Druide)",
            "level"      : "8",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "Compagnon animal adulte"
            ],
            "description": [
                "Votre compagnon animal continue de grandir et de se développer. Il devient un compagnon animal soit sauvage, soit agile obtenant des capacités supplémentaires déterminées par son type."
            ]
        },
        {
            "name"       : "Formidable compagnon (Rôdeur)",
            "level"      : "10",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "Compagnon animal adulte"
            ],
            "description": [
                "Votre compagnon animal continue de grandir et de se développer. Il devient un compagnon animal sauvage ou agile (vous choisissez), ce qui lui confère des capacités supplémentaires déterminées par le type de compagnon."
            ]
        },
        {
            "name"       : "Formidable familier",
            "level"      : "8",
            "traits"     : [
                "Thaumaturge",
                "Sorcier"
            ],
            "required"   : [
                "Familier amélioré"
            ],
            "description": [
                "Sorcier Votre familier est imprégné de plus de magie que d'autres familiers.",
                "Vous pouvez choisir une base de six pouvoirs de familiers ou de maître chaque jour, au lieu de quatre.",
                "Spécial Ajoutez les pouvoirs de familier que vous obtenez du fait d'être un sorcier à ce nombre.",
                "ThaumaturgeEn prenant les meilleures parts de chaque tradition magique, vous avez trouvé une manière d'accorder à votre familier encore plus de pouvoirs qu'aux autres familiers. Vous pouvez choisir une base de six pouvoirs de familier ou de maître par jour au lieu de quatre."
            ]
        },
        {
            "name"       : "Foulée du gardien",
            "level"      : "10",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "maître en Discrétion"
            ],
            "description": [
                "Vous aidez vos alliés à se déplacer discrètement en pleine nature. Quand vous sports_martial_artsÊtes furtif en mode exploration dans un environnement naturel, vous pouvez désigner n'importe quel nombre d'alliés pour qu'ils bénéficient des mêmes avantages, comme s'ils effectuaient eux aussi cette activité en mode exploration. Ceci ne nécessite aucune action de leur part."
            ]
        },
        {
            "name"       : "Foulée libératrice",
            "level"      : "12",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "cause du libérateur"
            ],
            "description": [
                "Au lieu de Faire un pas à la fin de votre sports_martial_artsPas libérateur , l'allié ayant déclenché ce pouvoir peut Marcher rapidement à la moitié de sa Vitesse.",
                "Même si vous avez Exaltation , seul l'allié ayant déclenché ce pouvoir bénéficie de cet avantage."
            ]
        },
        {
            "name"       : "Foulée sur l'eau",
            "level"      : "6",
            "traits"     : [
                "Moine"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez Marcher rapidement sur des liquides ou des surfaces qui ne peuvent pas soutenir votre poids. Vous ne bénéficiez de cet avantage que pendant votre déplacement. Si vous terminez votre déplacement sur une surface qui ne peut pas vous soutenir, vous chutez dedans ou la surface s'effondre comme à l'ordinaire."
            ]
        },
        {
            "name"       : "Fracasser en l'air",
            "level"      : "18",
            "traits"     : [
                "Guerrier"
            ],
            "required"   : [
                "Découper en l'air"
            ],
            "description": [
                "Votre expertise vous permet de repousser les sorts. Vous pouvez utiliser military_techDécouper en l'air contre les attaques de sort à distance."
            ]
        },
        {
            "name"       : "Frappe agile",
            "level"      : "10",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Vous êtes assez rusé pour trouvez une ouverture dans l'attaque de votre adversaire. Lorsque vous utilisez votre réaction military_techEsquive agile , vous pouvez effectuer une Frappe au corps-à-corps contre la créature déclencheuse. Cette Frappe n'est pas prise en compte dans le calcul de votre pénalité d'attaques multiples et votre pénalité d'attaques multiples ne s'applique pas à cette Frappe. Si vous utilisez le don military_techRoulade agile , vous pouvez faire cette Frappe à n'importe quel moment lorsque vous effectuez votre roulade."
            ]
        },
        {
            "name"       : "Frappe certaine 1",
            "level"      : "10",
            "traits"     : [
                "Guerrier",
                "Persévérer"
            ],
            "required"   : [],
            "description": [
                "Même si vous ne touchez pas directement, vous pouvez toujours porter un coup indirect. Effectuez une Frappe au corps-à-corps. Elle bénéficie de l'effet d'échec suivant.",
                "Échec Votre attaque inflige les dégâts qu'elle aurait normalement dû infliger en cas de succès, en enlevant tous les dés de dégâts (Cela supprime tous les dés de dégâts conférés par les runes d'arme, les sorts et les capacités spéciales en plus des dés de dégâts d'arme)."
            ]
        },
        {
            "name"       : "Frappe d'escarmouche 1",
            "level"      : "6",
            "traits"     : [
                "Sophistication",
                "Rôdeur",
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Vos pieds et vos armes bougent de concert. Vous avez le choix entre Faire un pas puis Frapper, ou Frapper puis Faire un pas."
            ]
        },
        {
            "name"       : "Frappe déconcertante 1",
            "level"      : "1",
            "traits"     : [
                "Guerrier"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous disposez d'une main libre et votre cible est dans l'allonge de cette main.",
                "Vous combinez une attaque avec de rapides prises avec la main pour déséquilibrer un ennemi tant qu'il reste dans votre allonge. Portez une Frappe en gardant une main libre. Si cette Frappe touche, la cible est sentiment_very_dissatisfiedPrise au dépourvu jusqu'au début de votre prochain tour ou jusqu'à ce qu'elle ne soit plus dans l'allonge de votre main, selon ce qui advient en premier."
            ]
        },
        {
            "name"       : "Frappe didactique",
            "level"      : "16",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [
                "Stratagème partagé"
            ],
            "description": [
                "Lorsque vous trouvez une faiblesse flagrante, vous pouvez organiser vos alliés afin qu'ils anéantissent votre ennemi.",
                "Lorsque vous utilisez military_techStratagème partagé , vous pouvez désigner jusqu'à 10 alliés au lieu d'un seul. L'ennemi est sentiment_very_dissatisfiedPris au dépourvu contre la première des attaques de chaque allié désigné infligée avant votre prochain tour et la première attaque de chaque allié inflige 2d6 dégâts de précision supplémentaires à la cible si elle la touche.",
                "flareEffet : Frappe didactique"
            ]
        },
        {
            "name"       : "Frappe éclair 1",
            "level"      : "12",
            "traits"     : [
                "Guerrier",
                "Persévérer"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous êtes adjacent à un ennemi",
                "Vous vous écartez brusquement d'un ennemi pour en Frapper un autre. Marchez rapidement d'une distance maximale égale à votre Vitesse, mais vous devez terminer ce déplacement dans l'allonge au corps-à-corps d'un ennemi différent. À la fin de votre déplacement, effectuez une Frappe au corps-à-corps contre un ennemi à présent dans votre allonge. Vous pouvez utiliser Frappe éclair lorsque vous Creusez, Escaladez, Volez ou Nagez au lieu de Marcher rapidement si vous possédez le type de déplacement correspondant."
            ]
        },
        {
            "name"       : "Frappe entraînante 1",
            "level"      : "2",
            "traits"     : [
                "Guerrier",
                "Persévérer"
            ],
            "required"   : [],
            "description": [
                "Vous faites en sorte de viser avec votre arme de manière à accrocher l'armure, les vêtements ou la chair d'un ennemi avant de le rapprocher.",
                "Faites une Frappe au corps-à-corps. Si vous touchez une cible de votre taille ou plus petite, cette créature est sentiment_very_dissatisfiedPrise au dépourvu jusqu'à la fin de votre tour actuel et vous pouvez la rapprocher de vous de 1,50 mètre. Lorsque vous déplacez la créature, vous pouvez vous déplacer de la même distance dans la même direction qu'elle, même si vous êtes adjacent à la cible. Ce mouvement ne déclenche pas de réactions.",
                "Cette frappe a l'effet d'échec suivant.",
                "Échec La cible devient prise au dépourvu jusqu'à la fin de votre tour actuel."
            ]
        },
        {
            "name"       : "Frappe exacte 1",
            "level"      : "1",
            "traits"     : [
                "Guerrier",
                "Persévérer"
            ],
            "required"   : [],
            "description": [
                "Vous effectuez une attaque de suivi contrôlée, en tenant pleinement compte de votre élan. Faites une Frappe. La frappe obtient l'effet d'échec suivant.",
                "Échec Cette attaque n'est pas comptée dans le calcul de votre pénalité d'attaques multiples."
            ]
        },
        {
            "name"       : "Frappe fracassante (Moine) 2",
            "level"      : "16",
            "traits"     : [
                "Moine"
            ],
            "required"   : [],
            "description": [
                "La force considérable de vos coups brise tout aussi bien les objets que les défenses. Faites une Frappe à mains nues. Elle franchit les résistances de la cible. Si la cible possède une Solidité, on considère que sa valeur est réduite de moitié en ce qui concerne cette Frappe."
            ]
        },
        {
            "name"       : "Frappe horrible 1",
            "level"      : "12",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "réaction de champion qui accorde des dégâts supplémentaires avec vos Frappes (incluant les causes de désacration, inéquité et obéissance)"
            ],
            "description": [
                "Conditions Vos frappes infligent actuellement des dégâts supplémentaires du fait de votre réaction de champion.",
                "Portez une Frappe contre la créature qui a déclenché votre réaction de champion. Si vous touchez, doublez des dégâts supplémentaire que la cible subit de votre réaction et la cible doit réussir un jet de casinoVigueur contre votre DD de classe ou être sentiment_very_dissatisfiedDrainée 1. Quel que soit le résultat, la créature est temporairement immunisée à votre Frappe horrible pendant 24 heures."
            ]
        },
        {
            "name"       : "Frappe instinctive",
            "level"      : "8",
            "traits"     : [
                "Barbare"
            ],
            "required"   : [
                "Odorat aiguisé ou odorat"
            ],
            "description": [
                "Vous faites confiance à vos instincts et votre sens de l'odorat, utilisant tous vos sens pour déterminer l'emplacement exact de votre adversaire. Quand vous effectuez une Frappe au corps-à-corps contre un adversaire que vous détectez à l'odorat, ignorez tout Test nu nécessaire qui serait lié au fait que la cible est sentiment_very_dissatisfiedMasquée ou sentiment_very_dissatisfiedCachée ."
            ]
        },
        {
            "name"       : "Frappe intimidante 2",
            "level"      : "2",
            "traits"     : [
                "Barbare",
                "Émotion",
                "Terreur",
                "Guerrier",
                "Mental"
            ],
            "required"   : [],
            "description": [
                "Votre coup ne fait pas que blesser les créatures mais elle ébranle également leur confiance. Faites une Frappe au corps-à-corps. Si vous touchez et infligez des dégâts, la cible est sentiment_very_dissatisfiedEffrayée 1 ou sentiment_very_dissatisfiedEffrayée 2 en cas de coup critique."
            ]
        },
        {
            "name"       : "Frappe muselante 1",
            "level"      : "10",
            "traits"     : [
                "Barbare",
                "Mise hors de combat",
                "Rage"
            ],
            "required"   : [],
            "description": [
                "Une frappe rapide au visage ou à la bouche réduit au silence votre adversaire. Faites une Frappe au corps-à-corps contre un ennemi. Si elle touche, l'ennemi doit réussir un jet de casinoVigueur contre votre DD de classe.",
                "Succès La cible n'est pas affectée.",
                "Échec La cible est étourdie et peut à peine parler. Elle est sentiment_very_dissatisfiedÉtourdie 1 , sa voix est rauque et son discours difficile à comprendre. Elle doit réussir un casinoTest nu, DD 11 pour utiliser des actions linguistiques ou Lancer un sort, sauf si le sort possède le trait subtil.",
                "Échec critique Comme en cas d'échec, mais la créature est sentiment_very_dissatisfiedÉtourdie 3 au lieu d'Étourdie 1."
            ]
        },
        {
            "name"       : "Frappe réactive r",
            "level"      : "6",
            "traits"     : [
                "Barbare",
                "Champion",
                "Commandant",
                "Exalté",
                "Gardien",
                "Magus",
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Une créature qui se trouve dans votre allonge utilise une action de manipulation ou de déplacement, fait une attaque à distance ou quitte une case lors d'une action de déplacement qu'elle entreprend.",
                "Vous frappez un adversaire qui vous laisse une ouverture. Vous faites une Frappe au corps-à-corps contre la créature qui a déclenché cette réaction. Si vous obtenez un coup critique et que le déclencheur était une action de manipulation, vous interrompez cette action. Cette Frappe n'est pas prise en compte pour déterminer votre pénalité d'attaques multiples et votre pénalité d'attaques multiples ne s'applique pas à cette Frappe."
            ]
        },
        {
            "name"       : "Frappe renversante 2",
            "level"      : "8",
            "traits"     : [
                "Guerrier"
            ],
            "required"   : [],
            "description": [
                "Votre attaque peut provoquer la chute d'une créature en vol. Faites une Frappe. Si elle touche et inflige des dégâts à une créature volante, celle-ci fait une chute de 36 mètres. La chute est suffisamment lente pour que la cible ne subisse aucun dégât si elle percute le sol. Si l'attaque est un coup critique, la cible ne peut pas Voler, sports_martial_artsBondir , léviter ou décoller du sol d'une façon ou d'une autre jusqu'à la fin de votre prochain tour."
            ]
        },
        {
            "name"       : "Frappe repoussante 2",
            "level"      : "10",
            "traits"     : [
                "Concentration",
                "Moine"
            ],
            "required"   : [],
            "description": [
                "Vous concentrez votre force pour porter un coup suffisamment puissant pour repousser un ennemi. Faites une Frappe à mains nues. Si vous touchez, effectuez un test d'Athlétisme pour sports_martial_artsPousser la cible. Cette attaque applique la même pénalité d'attaques multiples que votre Frappe et ne compte pas dans le calcul de votre pénalité d'attaques multiples."
            ]
        },
        {
            "name"       : "Frappe restauratrice 2",
            "level"      : "4",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous disposez d'un sort auto_awesomeMise à mal ou auto_awesomeGuérison que vous pouvez lancer.",
                "Vous contrebalancez deux aspects, vous guérir alors que vous Frappez un ennemi. Lancez le sort de Guérison ou de Mise à mal à 1 action pour vous soigner vous-même, dépensant le sort comme à l'ordinaire. Le sort perd le trait manipulation lorsqu'il est lancé de cette manière. Puis, faites une Frappe au corps-à-corps. Si vous faites cette frappe avec l'arme de prédilection de votre divinité, vous obtenez un bonus de statut de +1 au jet d'attaque.",
                "Si la Frappe touche, vous pouvez cibler une seconde créature consentante pour la soigner du même montant de Points de vie que le sort lancé. Cette créature peut être hors de la portée du sort, pourvu qu'elle soit adjacente à l'ennemi que vous avez touché."
            ]
        },
        {
            "name"       : "Frappe sympathique 1",
            "level"      : "4",
            "traits"     : [
                "Sorcier"
            ],
            "required"   : [
                "Arsenal de sorcier"
            ],
            "description": [
                "Fréquence Une fois par round",
                "Vous recueillez la magie de votre patron dans une des armes de votre Arsenal de sorcier, l'illuminant de runes, de lumière ou de tout autre symbole de votre patron.",
                "Faites une Frappe à mains nues avec l'une des armes de votre Arsenal de sorcier. Si vous touchez, vous établissez un lien sympathique avec la cible, ce qui permet à votre patron de l'affecter plus facilement. Jusqu'au début de votre prochain tour, la cible subit une pénalité de circonstances de -1 à ses jets de sauvegarde contre vos maléfices ou une pénalité de -2 si la Frappe déclencheuse était un coup critique.",
                "flareEffet : Frappe sympathique"
            ]
        },
        {
            "name"       : "Frappe tourbillonnante 3",
            "level"      : "14",
            "traits"     : [
                "Barbare",
                "Guerrier",
                "Sophistication"
            ],
            "required"   : [],
            "description": [
                "Vous attaquez tous les adversaires qui se trouvent à proximité. Faites une Frappe au corps-à-corps contre chaque ennemi dans votre allonge. Chacune de ces attaques compte dans le calcul de votre pénalité d'attaques multiples mais n'augmente pas tant que vous n'avez pas porté toutes vos attaques."
            ]
        },
        {
            "name"       : "Frappe transversale 2",
            "level"      : "4",
            "traits"     : [
                "Barbare",
                "Guerrier",
                "Sophistication"
            ],
            "required"   : [],
            "description": [
                "Vous portez un coup ample en arc de cercle. Faites une seule Frappe au corps-à-corps et comparez le résultat de votre jet d'attaque à la CA de deux ennemis (au maximum), qui doivent se trouver tous les deux dans l'allonge de votre attaque au corps-à-corps et être adjacents l'un à l'autre. Vous ne lancez les dégâts qu'une seule fois et vous les appliquez à chaque créature que vous avez touché. Une Frappe transversale compte comme deux attaques pour calculer votre pénalité d'attaques multiples.",
                "Si vous utilisez une arme qui possède le trait balayage, son modificateur s'applique à toutes vos attaques de Frappe transversale."
            ]
        },
        {
            "name"       : "Frappe vindicative r",
            "level"      : "14",
            "traits"     : [
                "Barbare",
                "Rage"
            ],
            "required"   : [
                "Je t'attends"
            ],
            "description": [
                "Déclencheur Une créature dans votre allonge réussit à vous porter une attaque.",
                "Conditions Vous êtes sous l'effet de military_techJe t'attends",
                "Quand vous êtes frappé par un ennemi, vous lui répondez en retour. Vous faites une Frappe au corps-à-corps contre la créature déclencheuse. Si l'attaque déclencheuse était un succès critique, vous pouvez utiliser Frappe vindicative par une action gratuite à la place d'une réaction."
            ]
        },
        {
            "name"       : "Frappes enchantées f",
            "level"      : "4",
            "traits"     : [
                "Oracle",
                "Ensorceleur",
                "Magicien"
            ],
            "required"   : [],
            "description": [
                "Fréquence Une fois par tour",
                "Conditions Votre action la plus récente a consisté à Lancer un sort autre qu'un tour de magie.",
                "Oracle Vous siphonnez l'énergie du sort dans une arme que vous maniez ou dans une de vos attaques à mains nues, tel qu'un poing. Jusqu'à la fin de votre tour, cette arme inflige ou cette attaque à mains nues inflige 1d6 dégâts de force supplémentaires et obtient le trait divin si elle ne l'avait pas déjà. Si le sort a infligé un autre type de dégâts, la Frappe inflige ce type de dégâts à la place (ou un type de votre choix si le sort peut infliger plusieurs types de dégâts).",
                "Ensorceleur Vous siphonnez l'énergie du sort dans une arme que vous maniez ou dans une de vos attaques à mains nues, tel qu'un poing. Jusqu'à la fin de votre tour, cette arme inflige ou cette attaque à mains nues inflige 1d6 dégâts de force supplémentaires et obtient le trait de la tradition magique de votre lignage, si elle ne l'avait pas déjà. Si le sort a infligé un autre type de dégâts, la Frappe inflige ce type de dégâts à la place (ou un type de votre choix si le sort pouvait infliger plusieurs types de dégâts).",
                "Magicien Vous siphonnez l'énergie du sort dans une arme que vous maniez ou dans une de vos attaques à mains nues, tel qu'un poing. Jusqu'à la fin de votre tour, cette arme inflige ou cette attaque à mains nues inflige 1d6 dégâts de force supplémentaires et obtient le trait arcanique, si elle ne l'avait pas déjà. Si le sort a infligé un autre type de dégâts, la Frappe inflige ce type de dégâts à la place (ou un type de votre choix si le sort pouvait infliger plusieurs types de dégâts)."
            ]
        },
        {
            "name"       : "Frappes mortelles",
            "level"      : "20",
            "traits"     : [
                "Moine"
            ],
            "required"   : [],
            "description": [
                "Vous avez affûté votre corps pour attaquer avec une concentration létale. Vos attaques à mains nues obtiennent le trait mortel d10 ou vous augmentez leur trait mortel au d10 si l'attaque à mains nues est déjà mortelle mais utilise un dé inférieur."
            ]
        },
        {
            "name"       : "Frappeur d'effroi",
            "level"      : "4",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Vous utilisez la terreur de vos ennemis pour passer outre leurs défenses. Toute créature qui se trouve dans l'état sentiment_very_dissatisfiedEffrayé est également sentiment_very_dissatisfiedPrise au dépourvu face à vos attaques."
            ]
        },
        {
            "name"       : "Frappeur impossible",
            "level"      : "20",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [
                "Frappeur perfide"
            ],
            "description": [
                "Rien ne peut vous empêcher de porter une attaque sournoise même si votre adversaire peut voir venir chacun de vos coups. Au lieu d'infliger les dégâts de military_techFrappeur perfide , vous pouvez infliger la totalité de vos dégâts d'attaque sournoise à une cible, même si celle-ci n'est pas sentiment_very_dissatisfiedPrise au dépourvu ."
            ]
        },
        {
            "name"       : "Frappeur perfide",
            "level"      : "8",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [
                "Attaque sournoise"
            ],
            "description": [
                "Vos attaques infligent plus de dégâts, même contre les créatures qui ne sont pas sentiment_very_dissatisfiedPrises au dépourvu . Quand vous obtenez un succès ou un succès critique en Frappant une créature qui n'est pas Prise au dépourvu, vous lui infligez également 1d6 dégâts de précision. Cela ne s'applique pas seulement si vous utilisez une arme ou une attaque à mains nues avec laquelle vous pourriez infliger des dégâts d' Attaque sournoise .",
                "À partir du niveau 14, si vous infligez normalement 3d6 dégâts d'attaque sournoise ou plus aux créatures prises au dépourvu, vous infligez alors 2d6 dégâts de précision aux créatures qui ne sont pas prises au dépourvu."
            ]
        },
        {
            "name"       : "Fusion d'énergies 1",
            "level"      : "10",
            "traits"     : [
                "Concentration",
                "Ensorceleur",
                "Mutamagie"
            ],
            "required"   : [],
            "description": [
                "Vous fusionnez deux sorts ensemble, en combinant leurs types d'énergie. Si la prochaine action que vous utilisez consiste à Lancer un sort qui inflige des dégâts d'énergie, sélectionnez dans votre répertoire de sorts un sort qui n'est pas un tour de magie et qui inflige un type de dégâts d'énergie différent et dépensez un emplacement supplémentaire du même rang que ce sort secondaire.",
                "Le sort que vous lancez inflige des dégâts supplémentaires égaux au rang de l'emplacement du second sort utilisé. Le total des dégâts du sort est divisé de manière égale entre le type d'énergie du sort que vous lancez et le type d'énergie du sort secondaire."
            ]
        },
        {
            "name"       : "Fusion des postures",
            "level"      : "16",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "au moins deux postures"
            ],
            "description": [
                "Vous avec combinée deux postures en une seule de votre propre chef. Lorsque vous prenez ce don, choisissez deux postures que vous connaissez et combinez les une une unique posture fusionnée. Donnez à votre nouvelle posture fusionnée un nom unique. Lorsque vous adoptez cotre posture fusionnée, vous obtenez tous les effets des deux postures, y compris les conditions et restrictions.",
                "Si les postures accordent des attaques spéciales, vous obtenez toutes ces attaques. Si une posture vous restreint à une attaque particulière (comme military_techPosture de la grue ), vous devez vous conformer à cette restriction. Si les postures combinées présentent des restrictions incompatibles, le MJ décide laquelle appliquer ou détermine s'il vous est impossible de fusionner ces deux postures."
            ]
        },
        {
            "name"       : "Garde-monstres",
            "level"      : "2",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "Chasseur de monstres"
            ],
            "description": [
                "Vous comprenez comment vous défendre contre votre proie. Quand vous accordez les bonus de military_techChasseur de monstres , chaque créature qui en bénéficie obtient un bonus de circonstances de +2 soit à sa CA la prochaine fois que la créature l'attaque, soit à son prochain jet de sauvegarde contre un effet provenant de cette créature en particulier, en fonction de ce qui se produit en premier.",
                "flareEffet : Garde-monstres"
            ]
        },
        {
            "name"       : "Gardien au bouclier",
            "level"      : "6",
            "traits"     : [
                "Champion",
                "Commandant",
                "Guerrier"
            ],
            "required"   : [
                "Blocage au bouclier"
            ],
            "description": [
                "Lorsque vous avez un bouclier Levé, vous pouvez utiliser votre réaction military_techBlocage au bouclier lorsqu'une attaque est portée sur un allié qui vous est adjacent. Dans ce cas, le bouclier bloque les dégâts que devrait subir cet allié au lieu de bloquer ceux que vous devriez subir, en appliquant les règles normales du Blocage au bouclier."
            ]
        },
        {
            "name"       : "Gardien avancé",
            "level"      : "4",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "Gardien initié"
            ],
            "description": [
                "Vous débloquez des sorts primordiaux plus puissants. Vous obtenez le choix d'un sort de gardien de la liste des gardiens avancés.",
                "auto_awesomeTrait animal",
                "auto_awesomeCompagnon agrandi",
                "auto_awesomeChance du chasseur",
                "auto_awesomeBrume apaisante",
                "Special"
            ]
        },
        {
            "name"       : "Gardien initié",
            "level"      : "1",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [],
            "description": [
                "Vous vous êtes entraîné avec l'une des faction de rôdeurs connues sous le nom de Gardiens, qui pratiquent un type spécialisé de magie primordiale. Vous obtenez un sort de gardien au choix parmi ces sorts de gardien initiaux (ou un autre auquel vous avez accès).",
                "auto_awesomeArme pesante",
                "auto_awesomeGuérison de compagnon",
                "auto_awesomePeau magique",
                "Spécial Vous pouvez prendre ce don plusieurs fois, choisissant un sort de gardien initié différent à chaque fois.",
                "Votre relation avec le monde qui vous entoure s'étend du physique au magique. Certains donc vous accordent des sorts de gardien qui sont un type de sorts focalisés. Il faut dépenser 1 Point de focalisation pour Lancer un sort focalisé. Lorsque vous obtenez votre premier sort de gardien, vous obtenez aussi une réserve de focalisation contenant 1 point de focalisation. Vous remplissez votre réserve de focalisation au cours de vos préparatifs quotidiens et vous regagnez 1 Point de focalisation en passant 10 minutes à utiliser l'activité Refocaliser en communiant avec la nature.",
                "Vos sorts de gardien sont des sorts primordiaux. Lorsque vous obtenez votre premier sort de gardien, vous devenez qualifié en attaques de sort et en DD des sorts primordiaux. Votre attribut d'incantation est la Sagesse.",
                "Les sorts focalisés sont automatiquement intensifiés à la moitié de votre niveau arrondi au supérieur. Certains dons peuvent vous procurer davantage de sorts focalisés. Le maximum de points de focalisation que peut contenir votre réserve de focalisation est égal au nombre de sorts focalisés que vous possédez mais ne peut jamais être supérieur à 3 points."
            ]
        },
        {
            "name"       : "Gardien sans égal",
            "level"      : "10",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "Gardien initié"
            ],
            "description": [
                "Votre maîtrise en magie primordiale vous a octroyé un accès aux plus grands secrets de magie protectrice. Vous obtenez le choix d'un sort de gardien de la liste du gardien sans égal.",
                "auto_awesomeVision du chasseur",
                "auto_awesomeTransposition de terrain",
                "Spécial Vous pouvez prendre ce don plusieurs fois, choisissant à chaque fois un sort différent de la liste du gardien sans égal."
            ]
        },
        {
            "name"       : "Glaner le savoir 1",
            "level"      : "1",
            "traits"     : [
                "Divin",
                "Oracle",
                "Secret"
            ],
            "required"   : [],
            "description": [
                "Vous puisez dans le savoir collecté du divin, accédant à une multiplicité d'information potentiellement utile.",
                "Faites un test de Religion pour comprendre l'information que vous obtenez. Le MJ fixe le DD (similaire au DD de sports_martial_artsSe souvenir ), en ajustant potentiellement le DD pour des sujets fort éloignés de votre mystère.",
                "Succès critique Vous comprenez le savoir précisément ou obtenez un indice utile du divin au sujet de votre situation.",
                "Succès Vous apprenez deux parties d'information sur le sujet, une véridique et l'autre erronée mais vous ne pouvez déterminer laquelle est la bonne.",
                "Échec Vous obtenez une information incorrecte ou obtenez un indice erroné ou menant à une fausse piste.",
                "Échec critique Vous vous souvenez de deux parties d'information incorrecte ou obtenez deux indices erronés ou menant à une fausse piste."
            ]
        },
        {
            "name"       : "Gloussement",
            "level"      : "1",
            "traits"     : [
                "Sorcier"
            ],
            "required"   : [],
            "description": [
                "Le pouvoir de votre patron vous rend confiant, vous permettant de maintenir un effet magique alors même qu'un petit éclat de rire s'échappe de vos lèvres. Vous apprenez le maléfice auto_awesomeGloussement ."
            ]
        },
        {
            "name"       : "Grâce divine r",
            "level"      : "2",
            "traits"     : [
                "Champion"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Vous tentez un jet de sauvegarde contre un sort mais n'avez pas encore lancé le dé.",
                "Vous implorez la grâce de votre divinité, obtenant un bonus de circonstances de +2 au jet de sauvegarde."
            ]
        },
        {
            "name"       : "Grace mortelle",
            "level"      : "16",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Vos attaques gracieuses sont spécialement puissantes. Lorsque vous obtenez un coup critique avec une arme au corps-à-corps possédant le trait agile ou finesse qui possède le trait mortel, vous doublez le nombre de dés issus de ce trait. Lorsque vous maniez une arme au corps-à-corps possédant le trait agile ou finesse qui ne possède pas le trait mortel, elle obtient le trait mortel d8 à la place."
            ]
        },
        {
            "name"       : "Grand coup tranchant",
            "level"      : "10",
            "traits"     : [
                "Barbare",
                "Rage"
            ],
            "required"   : [
                "Coup tranchant"
            ],
            "description": [
                "Votre furie propulse votre arme à travers plusieurs adversaires. Quand vous portez un military_techCoup tranchant , si votre Frappe réduit aussi à zéro les PV de la cible, vous pouvez continuez de porter des Frappes au corps-à-corps jusqu'à ce que l'une d'elles ne réduise pas à zéro les PV d'une créature ou jusqu'à ce qu'il n'y ait plus de créature adjacente à la dernière créature que vous avez attaqué durant le Coup tranchant."
            ]
        },
        {
            "name"       : "Grande capacité d'étude",
            "level"      : "16",
            "traits"     : [
                "Barde"
            ],
            "required"   : [
                "Touche-à-tout (muse de barde), légendaire en Occultisme"
            ],
            "description": [
                "Vos études soutenues de la magie occulte ont augmenté vos capacités magiques, vous permettant de lancer des sorts, même quand cela semble impossible. Vous pouvez lancer un sort chaque jour, même lorsque vous n'avez plus aucun emplacement de sort du rang approprié, mais vous ne pouvez pas utiliser cette capacité pour lancer un sort de votre rang de sort le plus élevé."
            ]
        },
        {
            "name"       : "Guérison collective",
            "level"      : "2",
            "traits"     : [
                "Prêtre",
                "Guérison",
                "Vitalité"
            ],
            "required"   : [],
            "description": [
                "Vous êtes un conduit de vitalité exceptionnel et, lorsque vous la canalisez à travers vous, vous pouvez en détourner une partie pour vous soigner ou soigner une autre créature. Quand vous lancez le sort auto_awesomeGuérison pour soigner une unique créature, choisissez une autre créature vivante consentante à portée de votre Guérison pour regagner des Points de vie égaux au rang du sort de Guérison."
            ]
        },
        {
            "name"       : "Guérison de monture",
            "level"      : "8",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "Fidèle destrier, Imposition des mains"
            ],
            "description": [
                "Votre dévotion envers votre monture se manifeste par un déferlement d'énergie de vitalité.",
                "Quand vous lancez auto_awesomeImposition des mains sur votre monture, au lieu du montant normal, le sort lui redonne 10 Points de vie, plus 10 pour chaque rang d'intensification."
            ]
        },
        {
            "name"       : "Guérison du compagnon",
            "level"      : "1",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "Un compagnon animal"
            ],
            "description": [
                "Vous avez un profond dévouement pour votre compagnon animal qui vous permet de guérir magiquement ses blessures.",
                "Vous obtenez le sort de gardien auto_awesomeGuérison du compagnon et une réserve de focalisation de 1 point de focalisation."
            ]
        },
        {
            "name"       : "Guérison florale 1",
            "level"      : "8",
            "traits"     : [
                "Druide",
                "Guérison",
                "Vitalité"
            ],
            "required"   : [
                "ordre de la feuille"
            ],
            "description": [
                "Fréquence Une fois par jour",
                "Vous demandez aux plantes de partager leur vitalité avec vous pour restaurer votre corps et votre magie. Vous regagnez 1 Point de focalisation et casino4d8 Points de vie .",
                "Vous devez être dans un endroit disposant d'au moins 4,50 mètres sur 4,50 mètres de flore saine, qu'il s'agisse d'herbe, de lichen, d'algues marines ou de toute autre forme de flore naturelle propre à l'endroit. Utiliser Guérison florale sur une portion de la nature ne lui nuit nullement, mais cela a pour conséquence d'empêcher la même portion de nature de donner sa vitalité pour une autre utilisation de Guérison florale pendant 24 heures.",
                "Au niveau 9 et tous les deux niveaux par la suite, augmentez la guérison de 1d8."
            ]
        },
        {
            "name"       : "Guides spirituels r",
            "level"      : "4",
            "traits"     : [
                "Barbare",
                "Concentration",
                "Fortune"
            ],
            "required"   : [
                "Instinct spirituel"
            ],
            "description": [
                "Fréquence Une fois par jour",
                "Déclencheur vous échouez, mais pas de manière critique à un test de Perception ou de compétence.",
                "Bien que personne ne les voie et que personne d'autre que vous ne puisse les entendre, les esprits qui vous entourent bavardent constamment, sauf lorsque vous êtes en rage. Quelques fois, ils sont même utiles, et leurs conseils peuvent même traverser la brume de votre rage. Relancez le test déclencheur, en utilisant le second résultat même s'il est pire."
            ]
        },
        {
            "name"       : "Handicap critique",
            "level"      : "12",
            "traits"     : [
                "Mise hors de combat",
                "Roublard"
            ],
            "required"   : [
                "Frappe incapacitante"
            ],
            "description": [
                "Les handicaps que vous infligez sont particulièrement efficaces quand ils sont associés à vos attaques les plus puissantes. Quand vous obtenez un succès critique à un jet d'attaque contre un ennemi en utilisant sports_martial_artsFrappe incapacitante , vous ajoutez le handicap suivant à la liste parmi laquelle vous pouvez choisir.",
                [
                    "Handicap La cible tente un jet de casinoVigueur contre votre DD de classe avec les effets suivants.\n\nSuccès critique La cible n'est pas affectée.\n\nSuccès La cible est sentiment_very_dissatisfiedRalentie 1 jusqu'à la fin de votre prochain tour.\n\nÉchec La cible est sentiment_very_dissatisfiedRalentie 2 jusqu'à la fin de votre prochain tour.\n\nÉchec critique La cible est sentiment_very_dissatisfiedParalysée jusqu'à la fin de votre prochain tour"
                ]
            ]
        },
        {
            "name"       : "Handicap sanglant",
            "level"      : "12",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [
                "qualifié en Médecine, Frappe incapacitante"
            ],
            "description": [
                "Vos attaques tranchent artères et veines. Ajoutez le handicap suivant à la liste dans laquelle vous pouvez choisir lorsque vous utilisez sports_martial_artsFrappe incapacitante .",
                [
                    "Handicap La cible subit casino3d6 dégâts de saignement ."
                ]
            ]
        },
        {
            "name"       : "Handicaps cruels",
            "level"      : "10",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [
                "Trafic de voyou, Frappe incapacitante"
            ],
            "description": [
                "Les handicaps que vous administrez gênent véritablement vos adversaires. Ajoutez les handicaps suivants à la liste de handicaps que vous pouvez choisir lorsque vous utilisez sports_martial_artsFrappe incapacitante .",
                [
                    "Handicap La cible obtient une faiblesse 5 contre les dégâts de votre choix : contondants, perforants ou tranchants. flareEffet : Handicaps cruels",
                    "Handicap La cible devient sentiment_very_dissatisfiedMaladroite 1 ."
                ]
            ]
        },
        {
            "name"       : "Handicaps méthodiques",
            "level"      : "10",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [
                "Trafic de cerveau, Frappe incapacitante"
            ],
            "description": [
                "Vous construisez stratégiquement les handicaps pour amoindrir ou annuler les avantages tactiques d'un adversaire. Ajoutez les handicaps suivants à la liste dans laquelle vous pouvez choisir lorsque vous utilisez sports_martial_artsFrappe incapacitante .",
                [
                    "Handicap La cible ne peut prendre en tenaille ni contribuer à prendre en tenaille. flareEffet : Handicaps méthodiques (tenaille)",
                    "Handicap La cible ne peut obtenir de bonus de circonstances à la CA lorsqu'elle sports_martial_artsLève un bouclier , utilise un abri partiel ou un abri standard. Elle n'obtient qu'un bonus de circonstances de +2 à la CA d'un abri important ou en se sports_martial_artsMettant à l'abri . flareEffet : Handicaps méthodiques (abri)"
                ]
            ]
        },
        {
            "name"       : "Handicaps mystiques",
            "level"      : "10",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [
                "Trafic de roublard : Mystificateur, Frappe incapacitante"
            ],
            "description": [
                "Vous savez comment infliger des handicaps particulièrement difficiles à surmonter pour les lanceurs de sorts. Ajoutez les handicaps suivants à la liste de ceux que vous pouvez choisir lorsque vous utilisez sports_martial_artsFrappe incapacitante .",
                [
                    "Handicap La cible est sentiment_very_dissatisfiedStupéfiée 1 .",
                    "Handicap La cible ne peut sports_martial_artsFaire un pas ."
                ]
            ]
        },
        {
            "name"       : "Handicaps précis",
            "level"      : "10",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [
                "Trafic de voleur, Frappe incapacitante"
            ],
            "description": [
                "Vous visez avec soin avant de distribuer gracieusement vos handicaps. Ajoutez les handicaps suivants à la liste de handicaps que vous utilisez avec sports_martial_artsFrappe incapacitante .",
                [
                    "Handicap Vos attaques infligent 2d6 dégâts de précision supplémentaires à la cible. flareEffet : Handicaps précis",
                    "Handicap La cible est sentiment_very_dissatisfiedPrise au dépourvu ."
                ]
            ]
        },
        {
            "name"       : "Handicaps tactiques",
            "level"      : "10",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [
                "Trafic de scélérat, Frappe incapacitante"
            ],
            "description": [
                "Vous apprenez de nouveaux handicaps qui vous confèrent des avantages tactiques contre vos ennemis. Ajoutez les handicaps suivants à la liste de handicaps que vous pouvez choisir avec sports_martial_artsFrappe incapacitante .",
                [
                    "Handicap La cible ne peut pas utiliser de réaction.",
                    "Handicap La cible ne peut pas prendre en tenaille ou contribuer à la prise en tenaille de ses alliés. flareEffet : Handicaps tactiques (Pas de tenaille)"
                ]
            ]
        },
        {
            "name"       : "Harmonisation interne",
            "level"      : "4",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "Sorts Qi"
            ],
            "description": [
                "Vous pouvez récupérer votre santé en puisant dans votre Qi. Vous obtenez le sort Qi auto_awesomeHarmonisation interne ."
            ]
        },
        {
            "name"       : "Harmoniser 1",
            "level"      : "6",
            "traits"     : [
                "Barde",
                "Concentration",
                "Manipulation",
                "Mutamagie"
            ],
            "required"   : [
                "Virtuose (muse de barde)"
            ],
            "description": [
                "Vous pouvez jouer plusieurs compositions simultanément, typiquement en vous produisant de différentes manières, en utilisant des techniques vocales pour dédoubler votre voix ou en créant une magie occulte pour répliquer votre chant ou votre discours. Si votre prochaine action consiste à lancer une composition, elle devient une composition harmonisée. Contrairement à une composition normale, une composition harmonisée ne se termine pas si vous lancez une autre composition et vous pouvez lancer une autre composition au cours du même tour qu'une composition harmonisée. Lancer une nouvelle composition harmonisée met fin à toute composition harmonisée qui est déjà en effet."
            ]
        },
        {
            "name"       : "Hurlement primordial",
            "level"      : "10",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "Formidable compagnon"
            ],
            "description": [
                "Votre compagnon peut pousser un hurlement teinté de votre magie primordiale. Il obtient la Manoeuvre avancée sports_martial_artsHurlement primordial en plus de toute autre manoeuvre avancée qu'il connaît déjà."
            ]
        },
        {
            "name"       : "Hurlement terrifiant 1",
            "level"      : "10",
            "traits"     : [
                "Audible",
                "Barbare",
                "Rage"
            ],
            "required"   : [],
            "description": [
                "Vous poussez un hurlement terrifiant. Faites des tests d'Intimidation pour sports_martial_artsDémoraliser chaque ennemi qui se trouve dans un rayon de 9 mètres : vous ne subissez pas de pénalité si la créature ne parle pas votre langue. Quel que soit le résultat de vos tests, chaque cible est alors temporairement immunisée au Hurlement terrifiant pendant 1 minute."
            ]
        },
        {
            "name"       : "Hutte du sorcier",
            "level"      : "20",
            "traits"     : [
                "Sorcier"
            ],
            "required"   : [],
            "description": [
                "Votre foyer est une structure animée qui obéit à vos ordres. En accomplissant un rite qui dure 1 jour, vous créez un objet animé à partir d'une hutte, d'une petite maison, d'un chariot bâché, d'une tente ou d'une construction similaire de taille Très grande au maximum.",
                "La hutte utilise votre CA, les modificateurs de vos jets de sauvegarde et votre modificateur de Perception. Elle possède 150 pv et une Solidité de 10. Elle a la capacité Armure construite, signifiant qu'une fois qu'elle est réduite à moins de la moitié de ses Points de vie ou immédiatement si elle est endommagée par un coup critique, sa CA est réduite de 4 jusqu'à ce qu'elle soit réparée.",
                "La hutte ne peut attaquer ou faire de test de compétence. Vous pouvez donner à la hutte un ordre par une action unique, qui possède les traits audible et concentration. Après 1 round passé à sa propre reconfiguration, la hutte suit alors cet ordre jusqu'à ce que vous lui donniez un ordre différent.",
                [
                    "Bondit La cabane tourne sur elle-même ou saute en l'air, puis Lance auto_awesomeTéléportation au rang 10, se transportant ainsi que toutes les créatures à l'intérieur.",
                    "Garde La hutte surveille les maraudeurs dans les 36 mètres en utilisant votre modificateur de Perception et pousse un cri si elle en aperçoit.",
                    "Fermeture Chaque entrée de la hutte est scellée avec un sort de auto_awesomeVerrouillage .",
                    "Déplacement La hutte obtient une Vitesse de 18 mètres, faisant grandir des pattes d'oiseau ou des os de jambes au besoin, et suit les ordres de déplacement basiques que vous lui donnez, comme “suis moi” ou “va dans cette direction.” Bien que parfaitement adaptée au voyage sur de longues distances, les mouvements brusques de la hutte et le temps de réponse de 1 round sont trop imprécis pour la diriger de manière prévisible dans une rencontre de combat ou une autre situation au cours de laquelle les secondes et les emplacements précis importent.",
                    "Cache-toi La hutte apparaît être un objet normal et courant de son type. C'est un effet d'illusion de rang 10."
                ],
                "Vous ne pouvez avoir qu'une unique hutte de sorcier au même moment. Si vous en animez une autre, la précédente hutte revient immédiatement à sa forme courante originelle. Si vous mourrez, la hutte continue à suivre le dernier ordre que vous lui avez donné indéfiniment."
            ]
        },
        {
            "name"       : "Hymne de guérison",
            "level"      : "1",
            "traits"     : [
                "Barde"
            ],
            "required"   : [],
            "description": [
                "Vous apprenez le sort de composition auto_awesomeHymne de guérison qui imprègne votre magie de riches mélodies qui aident vos alliés à récupérer de leurs blessures."
            ]
        },
        {
            "name"       : "Hymne de ralliement",
            "level"      : "4",
            "traits"     : [
                "Barde"
            ],
            "required"   : [],
            "description": [
                "Vous apprenez le tour de magie de composition auto_awesomeHymne de ralliement qui vous protège, ainsi que vos alliés."
            ]
        },
        {
            "name"       : "Hymne vigoureux 1",
            "level"      : "14",
            "traits"     : [
                "Audible",
                "Barde",
                "Concentration",
                "Mutamagie"
            ],
            "required"   : [],
            "description": [
                "Vous instillez une vigueur magique à vos alliés lorsque vous les incitez à attaquer. Si votre prochaine action consiste à Lancer le tour de magie de composition auto_awesomeHymne de courage , vous et tous les alliés affectés obtenez des Points de vie temporaires égaux à 3 + votre modificateur de Charisme qui durent pendant 1 minute.",
                "flareEffet : Hymne vigoureux"
            ]
        },
        {
            "name"       : "Hypercognition véritable",
            "level"      : "14",
            "traits"     : [
                "Barde"
            ],
            "required"   : [
                "Énigmatique (muse de barde)"
            ],
            "description": [
                "Votre esprit fonctionne à un rythme incroyable. Vous pouvez effectuer instantanément jusqu'à cinq actions Se souvenir. Si vous avez des capacités spéciales ou des actions gratuites qui sont habituellement déclenchées lorsque vous sports_martial_artsVous souvenez , vous ne pouvez pas les utiliser pour ces actions."
            ]
        },
        {
            "name"       : "Illusion convaincante r",
            "level"      : "6",
            "traits"     : [
                "Magicien"
            ],
            "required"   : [
                "expert en Duperie"
            ],
            "description": [
                "Déclencheur Une créature réussit, mais pas de manière critique son test de Perception ou son jet de sauvegarde pour percer une illusion d'un sort que vous avez lancé.",
                "Conditions Vous êtes à 9 mètres de l'observateur et de l'illusion.",
                "Vous utilisez vos talents de tromperie pour rendre vos illusions plus réelles. Faites un test de casinoDuperie contre le DD de Perception de la cible. En cas de succès, la cible ne parvient pas à percer l'illusion."
            ]
        },
        {
            "name"       : "Implorer les ancêtres",
            "level"      : "2",
            "traits"     : [
                "Ensorceleur"
            ],
            "required"   : [
                "un lignage qui correspond à un trait de créature"
            ],
            "description": [
                "Quelque chose en vous fait que les créatures de votre lignage, consciemment ou non, vous reconnaissent comme l'un des leurs et vous êtes immunisé à leurs ruses.",
                "Vous obtenez un bonus de circonstances de +1 aux tests de Diplomatie, de Duperie et d'Intimidation lorsque vous interagissez avec des créatures qui possèdent le trait correspondant à votre lignage et Vous obtenez un bonus de circonstances de +1 aux tests de Perception et aux jets de sauvegarde contre ces créatures.",
                "Par exemple, un sorcier du lignage Aberrant obtiendrait ce bonus contre les créatures ayant le trait Aberration. Le MJ détermine quelles créatures correspondent à votre lignage."
            ]
        },
        {
            "name"       : "Imprécation éternelle",
            "level"      : "16",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [
                "impie"
            ],
            "description": [
                "Votre vie a fait de vous l'un des nœuds de l'abominable puissance de votre divinité. Vous êtes perpétuellement entouré d'un sort auto_awesomeImprécation dont le rang est égal à la moitié de votre niveau (arrondi au supérieur). Le rayon est de 4,50 mètres et vous ne pouvez pas l'augmenter. Vous pouvez Révoquer le sort. Si vous le faites, il réapparaît automatiquement au bout d'une minute."
            ]
        },
        {
            "name"       : "Imprégnation divine 1",
            "level"      : "4",
            "traits"     : [
                "Prêtre",
                "Concentration",
                "Mutamagie"
            ],
            "required"   : [],
            "description": [
                "Vous remplissez d'énergie revigorante le sujet de vos soins pour donner de la puissance à ses attaques. Si la prochaine action que vous utilisez consiste à lancer auto_awesomeGuérison ou auto_awesomeMise à mal pour redonner des Points de vie à une unique créature, la cible inflige alors 1d6 dégâts supplémentaires avec ses armes au corps-à-corps et ses attaques à mains nues jusqu'à la fin de son prochain tour. Les dégâts sont de type vitalité si vous lancez Guérison et de vide si vous lancez Mise à mal.",
                "Si le sort est au moins de rang 5, ces dégâts passent à 2d6 et à 3d6 si le sort est au moins de rang 8."
            ]
        },
        {
            "name"       : "Incantation accélérée f",
            "level"      : "10",
            "traits"     : [
                "Barde",
                "Concentration",
                "Oracle",
                "Ensorceleur",
                "Mutamagie",
                "Sorcier",
                "Magicien"
            ],
            "required"   : [],
            "description": [
                "Fréquence Une fois par jour",
                "Barde Si votre prochaine action consiste à lancer un tour de magie de barde ou un sort de barde d'au moins 2 rangs inférieurs au plus élevé des emplacements de sort de barde dont vous disposez, réduisez le nombre d'actions pour le lancer de 1 (1 action au minimum).",
                "Magicien En vous creusant la tête, vous réduisez au maximum les formules de votre sort, ce qui donne une incantation plus courte mais beaucoup plus complexe. Si votre prochaine action consiste à lancer un tour de magie de magicien ou un sort de magicien d'au moins 2 rangs inférieur aux emplacements de sort de rang le plus élevé de magicien dont vous disposez, réduisez le nombre d'actions pour le lancer de 1 (1 action au minimum).",
                "Sorcier Vous accélérez votre incantation. Si votre prochaine action consiste à lancer un tour de magie de sorcier ou un sort de sorcier d'au moins 2 rangs inférieurs au plus élevé des emplacements de sort de sorcier dont vous disposez, réduisez le nombre d'actions pour le lancer de 1 (1 action au minimum).",
                "Autres Si votre prochaine action consiste à lancer un tour de magie ou un sort de classe d'au minimum deux rangs de moins que l'emplacement de sort de classe de rang le plus élevé dont vous disposez, réduisez le nombre d'actions pour le lancer de 1 (1 action au minimum)."
            ]
        },
        {
            "name"       : "Incantation fiable",
            "level"      : "6",
            "traits"     : [
                "Barde",
                "Prêtre",
                "Druide",
                "Oracle",
                "Psychiste",
                "Ensorceleur",
                "Sorcier",
                "Magicien"
            ],
            "required"   : [],
            "description": [
                "Confiant en votre technique, vous ne perdez pas aisément vos sorts. Si une réaction devrait interrompre votre action d'incantation, faites un casinoTest nu . Sur un succès, votre action n'est pas interrompue."
            ]
        },
        {
            "name"       : "Incantation renversante 1",
            "level"      : "6",
            "traits"     : [
                "Prêtre",
                "Concentration",
                "Mutamagie"
            ],
            "required"   : [
                "Source de mise à mal ou source de guérison"
            ],
            "description": [
                "La force brute de votre foi peut forcer un adversaire à tomber. Si votre prochaine action consiste à lancer auto_awesomeMise à mal ou auto_awesomeGuérison pour blesser une créature, la cible est sentiment_very_dissatisfiedÀ terre si elle subit des dégâts du sort. Si la cible obtient un échec critique à son jet de sauvegarde contre le sort, elle subit également une pénalité de statut de -3 mètres à sa Vitesse pendant 1 minute.",
                "flareEffet : Incantation renversante"
            ]
        },
        {
            "name"       : "Incinération de mort-vivant",
            "level"      : "8",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [],
            "description": [
                "Votre écrasante vitalité embrase les morts-vivants. Quand vous utilisez le sort auto_awesomeGuérison pour blesser des morts-vivants, chaque mort-vivant qui subit des dégâts subit également un montant de dégâts de feu persistants égal au rang du sort."
            ]
        },
        {
            "name"       : "Infiltration invraisemblable 2",
            "level"      : "18",
            "traits"     : [
                "Magique",
                "Déplacement",
                "Roublard"
            ],
            "required"   : [
                "légendaire en Acrobaties, Se faufiler rapidement"
            ],
            "description": [
                "Conditions Vous êtes adjacent à un plancher ou à un mur vertical",
                "Vous repérez minuscules imperfections et réussissez à vous glisser au travers, vous permet même de traverser directement le mur ou le plancher. Votre tentative de déplacement échoue si le mur ou le sol est fait d'une autre matière que de bois, de plâtre ou de pierre, s'il fait plus de 3 mètres d'épaisseur ou s'il contient même une fine couche de métal. Si vous possédez une Vitesse d'escalade, vous pouvez utiliser cette capacité pour tenter de traverser un plafond."
            ]
        },
        {
            "name"       : "Ingérence d'avenir f",
            "level"      : "2",
            "traits"     : [
                "Lié à une malédiction",
                "Divin",
                "Oracle"
            ],
            "required"   : [],
            "description": [
                "Vous vous ouvrez aux conseils des esprits ou des puissances qui daignent vous aider. Lancez 1d4 pour voir quel type d'esprit est attiré par vous. Votre prochaine action doit être le type d'action que l'esprit préfère, mais vous obtenez également l'avantage indiqué pour l'action pendant que l'esprit vous guide. Si vous tentez d'utiliser une action différente, vous devez réussir un casinoTest nu, DD 6 , sinon l'action est perdue."
            ]
        },
        {
            "name"       : "Initiative arrogante f",
            "level"      : "4",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Vous allez déterminer l'initiative.",
                "Votre arrogance vous rend prêt à tout combat — même pour une embuscade. Vous obtenez un bonus de circonstances de +2 au résultat de votre initiative et pouvez Interagir pour dégainer une arme. Si vous êtes le premier à agir en combat, vous obtenez du flarePanache ."
            ]
        },
        {
            "name"       : "Initié des ombres tenaces",
            "level"      : "8",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "Sorts Qi"
            ],
            "description": [
                "Vous apprenez une posture mystique qui transforme votre Qi en fumée collante qui enveloppe vos membres. Vous obtenez le sort Qi auto_awesomePosture des ombres tenaces . Même si adopter cette posture utilise un sort Qi, les attaques d'ombre qu'il accorde ne le sont pas, de sorte que vous pouvez les utiliser aussi souvent que vous le souhaitez tant que vous restez dans cette posture."
            ]
        },
        {
            "name"       : "Initié des vents violents",
            "level"      : "8",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "Sorts Qi"
            ],
            "description": [
                "Vous apprenez une posture mystique qui vous permet d'attaquer à distance. Vous obtenez le sort Qi auto_awesomePosture des vents violents .",
                "Cette posture est un sort ki, ce qui n'est pas le cas des Frappes de coup de vent qu'elle confère ; vous pouvez donc les utiliser aussi souvent que vous le souhaitez tant que vous gardez cette posture."
            ]
        },
        {
            "name"       : "Initié du domaine",
            "level"      : "1",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [],
            "description": [
                "Votre divinité vous octroie un sort spécial en rapport avec ses pouvoirs. Choisissez un domaine - un sujet qui vous intéresse plus particulièrement au sein de votre religion - issu de la liste de votre divinité. Vous obtenez le sort initial de ce domaine, un sort particulier au domaine que les autres prêtres ne peuvent obtenir.",
                "Les sorts de domaine forment un type particulier de sorts focalisés. Il faut dépenser 1 point de focalisation pour lancer un sort focalisé et vous commencez avec une réserve de focalisation de 1 point. Vous remplissez votre réserve de focalisation lors de vos préparatifs quotidiens et vous pouvez récupérer 1 point de focalisation en utilisant passant 10 minutes à réaliser l'activité Refocaliser pour prier votre divinité ou en office religieux en l'honneur de sa cause.",
                "Un sort focalisé est automatiquement intensifié à la moitié de votre niveau arrondi au supérieur, comme un tour de magie. Un sort focalisé ne nécessite pas d'emplacement de sort et vous ne pouvez pas le lancer en utilisant un emplacement de sort. Votre réserve de focalisation peut contenir un Point de focalisation par sort focalisé, sans jamais dépasser 3 points.",
                "Spécial Vous pouvez choisir ce don plusieurs fois, en sélectionnant à chaque fois un domaine différent en obtenant son sort de domaine."
            ]
        },
        {
            "name"       : "Innervation mutante",
            "level"      : "14",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Les mutagènes de base qui affectent votre esprit et vos pensées peuvent vous permettre de communiquer par télépathie, de vous protéger contre la détection ou de communiquer avec n'importe qui. Lorsque vous êtes affecté par l'un des mutagènes indiqués, vous bénéficiez d'un avantage supplémentaire.",
                [
                    "workMutagène cognitif Vous bénéficiez également du bonus d'objet du mutagène aux tests de Duperie, de Diplomatie, d'Intimidation, de Médecine, de Nature, de Représentation, de Religion et de Survie. De plus, vous pouvez communiquer par télépathie avec les créatures situées dans les 18 mètres avec lesquelles vous partagez une langue. La communication se fait dans les deux sens une fois que vous l'avez établie, de sorte qu'une créature que vous contactez peut également communiquer avec vous.",
                    "workMutagène de sérénité Les effets de détection, de révélation et de scrutation de rang 9 (ou de niveau 17) ou inférieurs ne détectent rien de vous, de vos possessions et de vos auras. Par exemple, auto_awesomeDétecter la magie pourra toujours détecter les autres magies dans la zone, mais aucune magie sur vous.",
                    "workMutagène de langue dorée Ignorez les pénalités de circonstances que vous devriez subir sur les tests de Duperie, de Diplomatie, d'Intimidation et de Représentation. De plus, vos paroles transcendent les barrières linguistiques. Tous ceux qui vous écoutent entendent vos paroles comme si vous parliez dans leur propre langue (bien que vous ne parliez pas réellement cette langue et que cette capacité ne vous permette pas de comprendre d'autres langues)."
                ],
                "Spécial Si vous pouvez être soumis aux effets de plusieurs mutagènes (avec le Découverte de champ de recherche supérieure (mutagèniste) , par exemple), vous bénéficiez de tous les avantages pertinents."
            ]
        },
        {
            "name"       : "Inspiration triomphante f",
            "level"      : "14",
            "traits"     : [
                "Barde"
            ],
            "required"   : [
                "Combattant (Muse de barde)"
            ],
            "description": [
                "Déclencheur Vous réussissez un coup critique sur un adversaire avec une Frappe au corps-à-corps portée avec une arme ou une attaque à mains nues.",
                "En poussant un cri de triomphe, vous inspirez vos alliés. Vous lancez un tour de magie de composition que vous connaissez qui devrait vous prendre normalement une action unique pour pouvoir le lancer."
            ]
        },
        {
            "name"       : "Instrument de massacre",
            "level"      : "16",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "réaction de champion qui accorde des dégâts additionnels à votre Frappe (incluant les causes de profanation, iniquité et obéissance)"
            ],
            "description": [
                "Votre armement béni a soif du sang de vos ennemis. Lorsque vous infligez un coup critique à un ennemi avec uen Frappe qui a les dégâts additionnels de votre réaction de champion, la cible subit des dégâts de saignement égaux à deux des dés de dégâts de l'arme."
            ]
        },
        {
            "name"       : "Instrument de zèle",
            "level"      : "16",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "Don Contre-frappe bénie ou réaction Frappe punitive, une réaction de champion qui accorde une résistance à un allié contre les dégâts d'un ennemi (y compris les causes grandeur, justice, libération et rédemption)"
            ],
            "description": [
                "L'énergie divine remplit votre arme. Lorsque vous obtenez un coup critique contre un adversaire avec Contre-frappe bénie ou Frappe punitive, votre attaque inflige un dé de dégât d'arme supplémentaire et la cible est sentiment_very_dissatisfiedRalentie 1 lors de son prochain tour."
            ]
        },
        {
            "name"       : "Interférence réactive r",
            "level"      : "12",
            "traits"     : [
                "Commandant",
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Un ennemi adjacent commence à utiliser une réaction.",
                "Commandant Votre propre expertise tactique vous permet d'identifier rapidement les réponses ennemies et de les empêcher .",
                "Roublard Par réflexe, vous attrapez la manche de l'ennemi, le frappez avec votre arme ou créez une autre distraction qui l'empêche de réagir.",
                "Si le niveau de la créature est inférieur ou égal au vôtre, vous interrompez la réaction déclencheuse. Si le niveau de la créature déclencheuse est supérieur au vôtre, vous devez faire un jet d'attaque contre sa CA. En cas de succès, vous interrompez la réaction."
            ]
        },
        {
            "name"       : "Interférence spirituelle 1",
            "level"      : "6",
            "traits"     : [
                "Barbare",
                "Divin",
                "Rage"
            ],
            "required"   : [
                "Instinct spirituel"
            ],
            "description": [
                "Vous invoquez des esprits protecteurs pour vous garder des attaques à distance. Jusqu'à la fin de votre Rage, quiconque fait une attaque à distance contre vous doit réussir un casinoTest nu, DD 5 ou l'attaque échoue et n'a aucun effet."
            ]
        },
        {
            "name"       : "Interposition supérieure",
            "level"      : "14",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "Armure sacrifiée"
            ],
            "description": [
                "Votre grâce divine vous permet d'éviter les coups lorsque vous ne le pourriez pas autrement.",
                "Vous pouvez utiliser Armure sacrifiée pour réduire tout type de dégâts d'une attaque ou d'un effet nécessitant un jet de Réflexes. Lorsque vous utilisez Armure sacrifiée contre un coup critique ou lors d'un échec critique sur un jet de Réflexes qui provoquerait autrement de doubler les dégâts, vous subissez à la place seulement le montant normal de dégâts."
            ]
        },
        {
            "name"       : "Interruption de la proie r",
            "level"      : "4",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Votre proie est dans votre zone d'allonge et elle effectue une action de manipulation, une action de déplacement ou quitte une case en effectuant une action de déplacement.",
                "Faites une Frappe au corps-à-corps contre votre proie. Si l'attaque aboutit à un coup critique, vous interrompez l'action à l'origine du déclenchement."
            ]
        },
        {
            "name"       : "Intimidation déimatique 1",
            "level"      : "8",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "qualifié en Intimidation"
            ],
            "description": [
                "En imitant le comportement menaçant d'un animal, vous donnez l'impression d'être plus large et plus imposant. Faites un test d'Intimidation pour sports_martial_artsDémoraliser chaque ennemi dans les 9 mètres. Cette tentative possède le trait visuel, perd le trait audible et vous ne subissez par de pénalité si une créature ne comprend pas votre langue. Comparez le résultat de votre test au DD de Volonté de chaque cible. Vous obtenez un bonus de circonstances de +2 au test contre les créatures animale, champignon et subissez une pénalité de circonstances de -2 contre les autres créatures. Chaque cible est ensuite immunisée temporairement pendant 1 minute."
            ]
        },
        {
            "name"       : "Intimidation enragée",
            "level"      : "1",
            "traits"     : [
                "Barbare"
            ],
            "required"   : [],
            "description": [
                "Votre fureur emplit vos ennemis de terreur. Tant que vous êtes enragé, vos actions sports_martial_artsDémoraliser et military_techMort de peur (provenant respectivement de la compétence Intimidation et d'un don de compétence d'Intimidation) obtiennent le trait rage et vous pouvez donc les utiliser même si vous êtes enragé.",
                "Dès que vous obtenez les prérequis nécessaires, vous obtenez les dons de compétence military_techRegard Intimidant et military_techMort de peur ."
            ]
        },
        {
            "name"       : "Investigation continue",
            "level"      : "4",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [],
            "description": [
                "Vous enquêtez continuellement sur ce qui vous entoure, même lorsque vous vous livrez à d'autres activités. Vous pouvez vous déplacer à votre pleine vitesse lorsque vous utilisez l'activité d'exploration sports_martial_artsEnquêter et vous pouvez utiliser une autre activité d'exploration lorsque vous Enquêtez."
            ]
        },
        {
            "name"       : "Inviolable",
            "level"      : "18",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [],
            "description": [
                "Votre divinité punit les créatures qui vous blessent. Les créatures qui vous touchent avec une attaque subissent casino3d6 dégâts spirituels à chaque fois qu'elles y parviennent. Si vous possédez le trait saint ou impie, vous pouvez l'appliquer à ces dégâts."
            ]
        },
        {
            "name"       : "Invocation de désastre",
            "level"      : "18",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "Celui qui appelle le vent"
            ],
            "description": [
                "Vous pouvez invoquer la fureur de la nature sur vos ennemis. Vous obtenez le sort d'ordre auto_awesomeSeigneur des tempêtes"
            ]
        },
        {
            "name"       : "Je t'attends 1",
            "level"      : "10",
            "traits"     : [
                "Barbare",
                "Concentration",
                "Rage"
            ],
            "required"   : [],
            "description": [
                "Vous laissez une ouverture contre les attaques, de manière à pouvoir y répondre à votre tour. Jusqu'à la fin de votre rage, vous êtes sentiment_very_dissatisfiedPris au dépourvu et les jets de dégâts contre vous bénéficient d'un bonus de circonstances de +2. Si une créature vous frappe, cette créature est Prise au dépourvu à votre égard jusqu'à la fin de votre prochain tour. Si vous la touchez avant la fin de votre prochain tour, vous obtenez un nombre de Points de vie temporaires égal à votre modificateur de Constitution ou le double sur un coup critique. Ces Points de vie temporaires durent jusqu'à la fin de votre rage."
            ]
        },
        {
            "name"       : "Je-sais-tout",
            "level"      : "8",
            "traits"     : [
                "Barde",
                "Thaumaturge"
            ],
            "required"   : [
                "Énigmatique (muse de barde)"
            ],
            "description": [
                "Barde Quand vous obtenez un succès sur un test pour Vous souvenir, vous bénéficiez d'une information ou d'un élément de contexte supplémentaire. Quand vous obtenez un succès critique à un test pour Vous souvenir, vous obtenez plus d'information ou d'élément de contexte ou pouvez poser une question complémentaire, à l'appréciation du MJ.",
                "Thaumaturge Ayant entendu toutes les rumeurs et toutes les histoires, vous savez que si vous avez entendu parler de quelque chose, vous en avez probablement entendu parler en long et en large. Lorsque vous obtenez un succès sur un test pour Vous souvenir, vous obtenez des informations ou des éléments de contexte supplémentaires sur le sujet en question. Lorsque vous obtenez un succès critique sur un test pour Vous souvenir, vous pourriez, à la discrétion du MJ, obtenir encore plus d'informations ou de contexte que d'ordinaire."
            ]
        },
        {
            "name"       : "Juggernaut inarrêtable",
            "level"      : "20",
            "traits"     : [
                "Barbare"
            ],
            "required"   : [],
            "description": [
                "Vous êtes devenu une force de la nature brutale et inarrêtable, capable de surmonter des blessures mortelles facilement. Vous obtenez une résistance égale à 3 + votre modificateur de Constitution à tous les dégâts et votre résistance de résistance enragée passe à 8 + votre modificateur de Constitution.",
                "De plus, si vous êtes réduit à 0 Point de vie, vous pouvez mettre un terme à la rage par une réaction pour rester à 1 Point de vie. Si vous le faites, vous devenez sentiment_very_dissatisfiedBlessé 2 (ou augmentez votre état blessé de 2 si vous étiez déjà blessé)."
            ]
        },
        {
            "name"       : "Jusqu'aux confins de la terre",
            "level"      : "20",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "légendaire en Survie"
            ],
            "description": [
                "Votre capacité à pister votre proie a dépassé toute explication, vous permettant suivre les déplacements de sa proie et de prévoir avec facilité où elle se trouve. Quand vous utilisez sports_martial_artsChasser votre proie sur une créature dans les 30 mètres, vous pouvez suivre les déplacements de cette créature, ce qui vous permet de savoir précisément où elle se trouve, quelle que soit la distance qui vous sépare, tant qu'elle reste votre proie. Vous devez être légendaire en Nature pour connaître l'endroit où se trouve votre proie après s'être téléportée ou un voyage planaire. Ce don obtient les traits détection et primordial si vous êtes légendaire en Nature."
            ]
        },
        {
            "name"       : "Juste les faits",
            "level"      : "20",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [
                "Recherche minutieuse"
            ],
            "description": [
                "Votre compréhension fondamentale de toute chose est telle que votre recherche ne peut plus vous donner de fausses informations. Vous êtes sentiment_very_dissatisfiedAccéléré de manière permanente et pouvez utiliser l'action supplémentaire pour sports_martial_artsVous souvenir . De plus, vous obtenez les avantages suivants :",
                [
                    "Lorsque vous Vous souvenez, vous utilisez le résultat d'un degré supérieur à celui qui résulte de votre test.",
                    "Si un effet (tel que military_techSavoir douteux ) devrait vous donner des informations inexactes à votre test pour Vous souvenir, vous savez quelle information est inexacte.",
                    "Lorsque l'un de vos alliés Se souvient et obtient une fausse information, vous savez aussi que l'information est inexacte s'il la partage avec vous."
                ]
            ]
        },
        {
            "name"       : "La mort en marche 2",
            "level"      : "10",
            "traits"     : [
                "Lié à une malédiction",
                "Divin",
                "Oracle"
            ],
            "required"   : [
                "Mystère des ancêtres ou de la bataille"
            ],
            "description": [
                "Vous suppliez les esprits guerriers de venir vous aider. Deux guerriers fantomatiques se manifestent dans une crop_freeémanation de 9 mètres de vous et tentent chacun une Frappe contre un ennemi adjacent, en utilisant votre modificateur d'attaque de sort. Les Frappes des guerriers infligent chacune casino4d6 dégâts spirituels et les guerriers peuvent prendre en tenaille, soit ensemble soit avec vous ou vos alliés. Si vous êtes sentiment_very_dissatisfiedLié à la malédiction 2 lorsque vous utilisez La mort marche, vous invoquez trois guerriers à la place et, si vous êtes Lié à la malédiction 3, vous invoquez quatre guerriers à la place. Les guerriers disparaissent au début de votre prochain tour."
            ]
        },
        {
            "name"       : "Laisser une ouverture",
            "level"      : "14",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Quand vous assénez un coup assez puissant, vous créez une ouverture dans laquelle s'engouffre un allié. À chaque fois que vous portez un coup critique à un adversaire sentiment_very_dissatisfiedPris au dépourvu avec une attaque au corps-à-corps et lui infligez des dégâts, la cible déclenche en réaction une Frappe réactive dont bénéficie un allié de votre choix qui possède cette réaction, comme si l'ennemi avait utilisé une action de manipulation."
            ]
        },
        {
            "name"       : "Lame ancrée r",
            "level"      : "2",
            "traits"     : [
                "Guerrier",
                "Manipulation"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Vous êtes sur le point d'être l'objet d'un effet de déplacement forcé.",
                "Conditions Vous maniez une arme de corps-à-corps et vous avez une surface solide dans votre allonge.",
                "Vous plongez votre arme dans le sol, un mur ou une autre surface solide pour vous ancrer fermement sur place. Si vous devriez être déplacé d'au moins 6 mètres, vous n'êtes déplacé que de 1,50 mètre. Sinon vous ne bougez pas d'un pouce."
            ]
        },
        {
            "name"       : "Lame volante",
            "level"      : "1",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [
                "Frappe précise"
            ],
            "description": [
                "Vous appliquez vos techniques démonstratives aux armes de jet aussi facilement qu'avec vos attaques au corps-à-corps. Vous appliquez vos dégâts de Frappe précise sur les Frappes à distance que vous réalisez avec une arme de jet dans leur premier facteur de portée. L'arme de jet doit posséder les traits agile ou finesse. Cela vous permet aussi de faire une Frappe de jet à distance pour sports_martial_artsAboutissement assuré et tout autre aboutissement qui inclut une Frappe qui peut bénéficier de votre Frappe précise."
            ]
        },
        {
            "name"       : "Lancer amical 2",
            "level"      : "8",
            "traits"     : [
                "Barbare",
                "Manipulation",
                "Rage"
            ],
            "required"   : [],
            "description": [
                "Conditions vous êtes adjacent à un allié et avez au moins une main libre.",
                "Vous lancez vos amis sur le champ de bataille. Attrapez un allié adjacent de votre taille ou de taille inférieure et lancez le dans une case inoccupée que vous pouvez voir dans les 9 mètres. Son déplacement ne provoque pas de réactions. Votre allié termine ce déplacement sur ses pieds et ne subit pas de dégâts de chute. Si votre allié termine son mouvement avec au moins un ennemi dans son allonge, il peut utiliser sa réaction pour faire une Frappe au corps-à-corps contre un tel ennemi."
            ]
        },
        {
            "name"       : "Lancer les osselets du destin 1",
            "level"      : "10",
            "traits"     : [
                "Lié à une malédiction",
                "Divin",
                "Oracle",
                "Prédiction"
            ],
            "required"   : [
                "Mystère des os ou de la connaissance"
            ],
            "description": [
                "Fréquence Une fois toutes les 10 minutes",
                "Vous lancez une poignée d'osselets pour connaître (ou peut-être influencer) le cours des événements futurs. Lancez 1d4 et utilisez les résultats ci-dessous. Quand vous lancez les osselets tout effet d'un usage précédent prend fin immédiatement."
            ]
        },
        {
            "name"       : "Lancer lointain",
            "level"      : "6",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Lorsque vous Frappez avec une arme de jet, vous ne subissez qu'une pénalité de -1 pour chaque facteur de portée supplémentaire entre vous et la cible au lieu d'une pénalité de -2."
            ]
        },
        {
            "name"       : "Lancer rebondissant 2",
            "level"      : "2",
            "traits"     : [
                "Guerrier",
                "Sophistication"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez une arme de jet.",
                "Vous faites rebondir votre arme sur un ennemi pour en frapper un autre. Faites une Frappe à distance avec une arme de jet. Si ce coup est réussi, l'arme rebondit vers un ennemi situé à moins de 3 mètres de la cible initiale. Effectuez une autre Frappe contre cette deuxième cible. Les deux attaques comptent pour votre pénalité d'attaques multiples, mais la pénalité n'augmente qu'après avoir effectué ces deux attaques."
            ]
        },
        {
            "name"       : "Lancer surdimensionné 2",
            "level"      : "4",
            "traits"     : [
                "Barbare",
                "Rage"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous d'isposez d'au moins une main libre.",
                "Avec un grand effort, vous saisissez une partie de votre environnement, comme un rocher, un rondin, une table, un chariot ou des morceaux de terre et la lancez sur vos adversaires. L'objet doit être de votre taille ou d'une taille inférieure et son Encombrement ne doit pas être trop important pour que vous puissiez le soulever de son emplacement initial. Faites une Frappe à distance avec l'objet. Quel que soit le résultat, l'objet subit un montant de dégâts égal à celui qu'il infligerait en cas de succès.",
                "L'objet est une arme à distance simple qui inflige 1d10 dégâts contondants, possède un facteur de portée de 6 mètres et possède le trait arme de jet. Les dégâts passent à 2d10 dégâts contondants si vous avez Spécialisation martiale avec les armes simples ou 3d10 dégâts contondants si vous possédez Spécialisation martiale supérieure ."
            ]
        },
        {
            "name"       : "Lancer tournoyant 1",
            "level"      : "4",
            "traits"     : [
                "Aboutissement",
                "Bretteur"
            ],
            "required"   : [
                "Lame volante"
            ],
            "description": [
                "Vos armes de jet semblent défier la physique en s'envolant dans les airs et en revenant vers vous après une frappe. Effectuez une Frappe avec une arme de jet, en ignorant la pénalité pour les attaques à distance dans les deuxième et troisième facteurs de portée. L'arme revient dans votre main après l'attaque, à moins que vous n'ayez obtenu un échec critique sur le jet d'attaque."
            ]
        },
        {
            "name"       : "Lanceur à grande distance",
            "level"      : "1",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Vous avez appris à lancer à plus grande distance. Quand vous lancez une bombe alchimique, celle-ci a un facteur de portée de 9 m au lieu des 6 mètres habituels."
            ]
        },
        {
            "name"       : "Lanceur enragé",
            "level"      : "1",
            "traits"     : [
                "Barbare"
            ],
            "required"   : [],
            "description": [
                "Quand vous êtes en furie, vos armes de jet deviennent particulièrement dangereuses. Vous appliquez les dégâts supplémentaires de sports_martial_artsRage à vos attaques d'armes de jet. Si vous possédez le don military_techCritique brutal ou la capacité de classe Dévastateur , ces pouvoirs affectent vos attaques d'armes de jet."
            ]
        },
        {
            "name"       : "Langue du familier",
            "level"      : "2",
            "traits"     : [
                "Sorcier"
            ],
            "required"   : [
                "Un familier"
            ],
            "description": [
                "Vous avez appris à parler avec votre familier et les créatures semblables. Vous pouvez poser des questions, recevoir des réponses et utiliser Diplomatie avec les créatures de la même famille d'animaux que votre familier. Par exemple, si votre familier était un chat, vous pourriez obtenir les effets de auto_awesomeCommunication avec les animaux pour tout félin (incluant les léopards, les lions et les tigres, parmi d'autres). Cette capacité ne les rend pas plus amicaux que la normale. Si votre familier change pour devenir une autre créature, vous ne pouvez plus utiliser cette capacité pendant une semaine le temps d'absorber la nouvelle langue de votre familier.",
                "Spécial Ce don possède le trait correspondant à la tradition de sorts que vous lancez (arcanique, divine, occulte ou primordiale)."
            ]
        },
        {
            "name"       : "Langue du soleil et de la lune",
            "level"      : "14",
            "traits"     : [
                "Moine"
            ],
            "required"   : [],
            "description": [
                "Vous avez transcendé la frontière entre les mots et leur signification. Vous savez parler et comprendre toutes les langues orales."
            ]
        },
        {
            "name"       : "Langue végétale",
            "level"      : "12",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "Empathie végétale"
            ],
            "description": [
                "Vous avez une affinité spéciale avec toutes les choses végétales et vivantes. Vous (et votre familier léchi, si vous en avez un) êtes sous les effets constants de auto_awesomeCommunication avec les plantes . La plupart des plantes qui ne sont pas des créatures reconnaissent votre statut de druide de l'ordre de la feuille et vous sont amicales."
            ]
        },
        {
            "name"       : "Le pouvoir de la connaissance (Magicien)",
            "level"      : "8",
            "traits"     : [
                "Magicien"
            ],
            "required"   : [],
            "description": [
                "Votre connaissance académique sur une créature vous permet d'altérer subtilement votre magie afin de la vaincre. Lorsque vous obtenez un succès critique sur un test pour sports_martial_artsSe souvenir à propos d'une créature, vous pouvez utiliser cette connaissance pour lui faire subir une pénalité de circonstances de -1 soit à sa CA et à ses jets de sauvegarde contre la prochaine attaque que vous lui portez ou contre le prochain sort que vous lui lancez et qui lui demandera de se défendre. La créature subit la même pénalité à ses attaques ou son DD la prochaine fois qu'elle vous attaquera ou vous obligera à lancer un jet de sauvegarde contre un de ses effets.",
                "Si vous partagez cette informations avec vos alliés, ils obtiennent également ces avantages. S'ils ne sont pas utilisés, ces bonus prennent fin après 1 minute."
            ]
        },
        {
            "name"       : "Leçon basique",
            "level"      : "2",
            "traits"     : [
                "Sorcier"
            ],
            "required"   : [],
            "description": [
                "Votre protecteur vous accorde une leçon spéciale, vous révélant une facette cachée de sa nature. Choisissez une Leçon basique. Vous obtenez son maléfice associé et votre familier apprend le sort associé."
            ]
        },
        {
            "name"       : "Leçon majeure",
            "level"      : "10",
            "traits"     : [
                "Sorcier"
            ],
            "required"   : [],
            "description": [
                "Votre patron vous confie des secrets plus importants encore. Choisissez une leçon basique, supérieure ou majeure. Vous obtenez son maléfice associé et votre familier apprend le sort associé.",
                "Spécial Vous pouvez choisir ce don une deuxième fois à partir du niveau 14 et une troisième fois à partir du niveau 18. Choisissez une leçon différente à chaque fois."
            ]
        },
        {
            "name"       : "Leçon supérieure",
            "level"      : "6",
            "traits"     : [
                "Sorcier"
            ],
            "required"   : [],
            "description": [
                "Votre patron vous accorde une connaissance supérieure. Choisissez une leçon basique ou supérieure. Vous obtenez le maléfice associé et votre familier apprend le sort associé."
            ]
        },
        {
            "name"       : "Lecture du combat 1",
            "level"      : "4",
            "traits"     : [
                "Barde",
                "Secret"
            ],
            "required"   : [],
            "description": [
                "Vous utilisez les techniques de lecture à froid de l'artiste, la lecture des auras et autres astuces pour découvrir les faiblesses et les forces de vos ennemis. Le MJ lance un test secret d' casinoOccultisme pour vous contre le plus élevé entre le DD de Duperie ou de Discrétion d'un ennemi de votre choix qui n'est pas sentiment_very_dissatisfiedMasqué , sentiment_very_dissatisfiedCaché ou sentiment_very_dissatisfiedNon-détecté . Le MJ pourrait appliquer des pénalités en fonction de la distance entre vous et l'ennemi. L'ennemi est alors temporairement immunisé à votre Lecture du combat pendant 1 journée.",
                "Succès critique Le MJ choisit et vous donne deux des informations suivantes à propos de votre ennemi : quelle est sa plus grande faiblesse, quel est son modificateur de jet de sauvegarde le plus bas, une immunité que l'ennemi possède ou quelle résistance de votre ennemi est la plus élevée. En cas d'égalité, le MJ en choisit une de manière aléatoire.",
                "Succès Le MJ donne une unique information tirée de la liste ci-dessus à propos de l'ennemi.",
                "Échec critique Le MJ vous donne une fausse information (le MJ maquille l'information)."
            ]
        },
        {
            "name"       : "Lever le symbole 1",
            "level"      : "4",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez un symbole religieux.",
                "Vous présentez votre symbole religieux avec conviction. Vous obtenez un bonus de circonstances de +2 aux jets de sauvegarde jusqu'à la fin de votre prochain tour. Tant que votre symbole est levé, si vous obtenez un succès sur un jet de sauvegarde contre un effet de vitalité ou de vide, il devient un succès critique. Si le symbole religieux que vous levez est un bouclier, tel que celui issu d' military_techArsenal blasonné , vous obtenez les effets de Lever un bouclier lorsque vous utilisez cette action et vous obtenez également les effets de cette action lorsque vous Levez un bouclier."
            ]
        },
        {
            "name"       : "Libre comme l'eau f",
            "level"      : "18",
            "traits"     : [
                "Moine"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Votre tour se termine et vous subissez une pénalité de statut à votre Vitesse ou vous êtes sentiment_very_dissatisfiedImmobilisé ou sentiment_very_dissatisfiedRalenti .",
                "Vous êtes libre comme l'eau et évitez toutes contraintes. Éliminez une pénalité de statut à votre Vitesse, l'état Immobilisé ou l'état Ralenti qui vous affecte."
            ]
        },
        {
            "name"       : "Lien supérieur",
            "level"      : "14",
            "traits"     : [
                "Magicien"
            ],
            "required"   : [
                "lien arcanique"
            ],
            "description": [
                "Lorsque vous Drainez votre objet lié, vous pouvez y laisser un peu d'énergie à utiliser plus tard. Vous pouvez utiliser sports_martial_artsDrain d'objet lié une fois de plus par jour, mais seulement pour lancer un sort d'au minimum deux rangs de moins que votre emplacement de sort de magicien de plus haut rang."
            ]
        },
        {
            "name"       : "Lignage avancé",
            "level"      : "6",
            "traits"     : [
                "Ensorceleur"
            ],
            "required"   : [
                "sort de lignage"
            ],
            "description": [
                "Vous tirez plus de puissance de votre lignage. Vous gagnez le sort de lignage avancé associé à votre lignage."
            ]
        },
        {
            "name"       : "Lignage supérieur",
            "level"      : "10",
            "traits"     : [
                "Ensorceleur"
            ],
            "required"   : [
                "sort de lignage"
            ],
            "description": [
                "Vous découvrez les secrets supérieurs de votre lignage. Vous gagnez le sort de lignage supérieur associé à votre lignage."
            ]
        },
        {
            "name"       : "Lire le désastre",
            "level"      : "8",
            "traits"     : [
                "Exploration",
                "Oracle",
                "Prédiction"
            ],
            "required"   : [],
            "description": [
                "Il vous faut 10 minutes pour vous ouvrir aux mystères divins du monde, en plongeant dans les plus sinistres présages du futur.",
                "Vous obtenez les effets du sort auto_awesomeAugure , sauf que cela ne concerne que les dangers devant vous ; tout résultat \"bon\" est remplacé par \"rien\" et tout résultat \"mitigé\" est remplacé par \"mauvais\". Si vous êtes légendaire en Religion, il ne vous faut qu'une minute pour Lire le désastre."
            ]
        },
        {
            "name"       : "Lucidité parfaite r",
            "level"      : "18",
            "traits"     : [
                "Barbare",
                "Concentration",
                "Fortune",
                "Rage"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Vous obtenez un échec ou un échec critique à un jet d'attaque ou un jet de Volonté.",
                "Vous consumez ce qui vous reste de rage pour vous assurer que votre attaque porte ou que votre esprit reste libre. Relancez le jet d'attaque ou de Volonté déclencheur avec un bonus de circonstances de +2, et utilisez le meilleur des deux résultats. Votre Rage prend alors immédiatement fin."
            ]
        },
        {
            "name"       : "Mage ancestral",
            "level"      : "10",
            "traits"     : [
                "Ensorceleur"
            ],
            "required"   : [
                "Magie du sang ancestral"
            ],
            "description": [
                "La magie de vos ancêtres et de votre lignage ne font qu'une. Ajoutez tous les sorts innés issus de votre ascendance ou d'un don ancestral à votre répertoire de sorts, ce qui vous permet de les lancer en utilisant vos emplacements de sort."
            ]
        },
        {
            "name"       : "Magie des ordres",
            "level"      : "4",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "Explorateur des ordres"
            ],
            "description": [
                "Vous vous êtes plongé dans l'étude approfondie des enseignements d'un nouvel ordre obtenant un accès à un sort d'ordre convoité. Choisissez un ordre que vous avez sélectionné avec military_techExplorateur des ordres . Vous obtenez le sort initial de cet ordre.",
                "Spécial Vous pouvez sélectionner ce don plusieurs fois. À chaque fois, vous devez choisir un ordre différent parmi ceux que vous avez choisis avec Explorateur des ordres."
            ]
        },
        {
            "name"       : "Magie imparable",
            "level"      : "6",
            "traits"     : [
                "Magicien"
            ],
            "required"   : [],
            "description": [
                "Vous avez étudié comment surmonter la résistance à la magie innée des dragons, des êtres venus d'ailleurs et d'autres puissantes créatures. Toute créature dotée d'un bonus de statut aux jets de sauvegarde contre la magie réduit ce bonus de 1 contre vos sorts."
            ]
        },
        {
            "name"       : "Magie mineure",
            "level"      : "2",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Vous êtes doté de capacités magiques mineures. Choisissez la magie arcanique, divine, occulte ou primordiale et obtenez deux tours de magie courants qui sont disponibles de cette tradition. Vous obtenez l'activité sports_martial_artsLancer un sort et votre attribut essentiel d'incantation est le Charisme et vous êtes qualifié avec les DD et les jets d'attaque de sorts."
            ]
        },
        {
            "name"       : "Mains blessantes",
            "level"      : "1",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [
                "Source de mise à mal"
            ],
            "description": [
                "La puissante morsure de votre énergie du vide augmente. Quand vous lancez auto_awesomeMise à mal , vous lancez des d10 au lieu de d8."
            ]
        },
        {
            "name"       : "Mains guérisseuses",
            "level"      : "1",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [
                "Source de guérison"
            ],
            "description": [
                "Votre vitalité est encore plus éclatante et revigorante. Lorsque vous lancez auto_awesomeGuérison , vous lancez des d10 à la place des d8."
            ]
        },
        {
            "name"       : "Mains magiques",
            "level"      : "6",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [
                "Mains guérisseuses"
            ],
            "description": [
                "La bénédiction de votre divinité intensifie votre capacité à soigner, intégrant des soins magiques avec les soins ordinaires. Lorsque vous obtenez un succès sur un test de Médecine pour sports_martial_artsSoigner les blessures , vous pouvez lancer des d10 au lieu de d8 pour les soins et ajouter un bonus de statut aux soins égal à votre niveau."
            ]
        },
        {
            "name"       : "Maître chasseur de monstres",
            "level"      : "10",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "maître en Nature, Chasseur de monstres"
            ],
            "description": [
                "Vous avez une connaissance presque parfaite de toutes les créatures existantes. Vous pouvez utiliser sports_martial_artsNature pour identifier n'importe quelle créature avec sports_martial_artsSe souvenir . De plus, vous bénéficiez des avantages de military_techChasseur de monstres (et de military_techGarde-monstres , si vous le possédez) en cas de succès ou de succès critique."
            ]
        },
        {
            "name"       : "Maître de l'environnement",
            "level"      : "8",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "maître en Survie, Environnement de prédilection"
            ],
            "description": [
                "Vous êtes capable de vous adapter à l'environnement de tout terrain naturel. Vous pouvez passer une heure à vous entraîner dans l'environnement où vous vous trouvez pour qu'il devienne votre military_techEnvironnement de prédilection , ce qui remplace temporairement votre environnement de prédilection actuel. Si vous passez une journée entière hors de ce nouvel environnement de prédilection, vous récupérez l'environnement que vous avez initialement choisi quand vous avez pris le don Environnement de prédilection."
            ]
        },
        {
            "name"       : "Maître de nombreux styles f",
            "level"      : "16",
            "traits"     : [
                "Guerrier",
                "Moine"
            ],
            "required"   : [
                "maître des postures (Guerrier), Posture Réflexe (Moine)"
            ],
            "description": [
                "Conditions Votre tour commence.",
                "Vous passez d'une posture à l'autre de manière fluide, en utilisant votre maîtrise du combat pour toujours adopter les meilleures tactiques. Vous utilisez une action avec le trait posture."
            ]
        },
        {
            "name"       : "Maître des maléfices",
            "level"      : "20",
            "traits"     : [
                "Sorcier"
            ],
            "required"   : [],
            "description": [
                "Vous incarnez le lien vers votre patron si complètement que vous pouvez lancer vos maléfices en rapide succession. Vous n'êtes plus désormais limité à lancer seulement un unique maléfice à chaque tour. De plus, lorsque vous lancez auto_awesomeGloussement pour prolonger un maléfice, vous obtenez les effets de Maintenir pour tous vos maléfices actifs qui ont une durée de maintenu."
            ]
        },
        {
            "name"       : "Maître gardien",
            "level"      : "6",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "Gardien initié"
            ],
            "description": [
                "Votre maîtrise de gardien s'accroît. Vous obtenez le choix d'un sort de gardien entre auto_awesomePistage éphémère et auto_awesomeRoncier du rôdeur .",
                "Spécial Vous pouvez prendre ce don plusieurs fois, choisissant un sort de maître gardien à chaque fois."
            ]
        },
        {
            "name"       : "Maîtrise de la mutamagie",
            "level"      : "20",
            "traits"     : [
                "Ensorceleur",
                "Magicien"
            ],
            "required"   : [],
            "description": [
                "Altérer vos sort ne prend pas plus de temps qu'en les lançant normalement. Vous utilisez les actions uniques de mutamagie comme actions gratuites."
            ]
        },
        {
            "name"       : "Maîtrise des sorts",
            "level"      : "20",
            "traits"     : [
                "Magicien"
            ],
            "required"   : [],
            "description": [
                "Vous avez maîtrisé une poignée de sorts à un degré tel que vous pouvez les lancer même si vous ne les avez pas préparés à l'avance. Choisissez quatre sorts de rang inférieur ou égal à 9 qui se trouvent dans votre grimoire. Chaque sort que vous sélectionnez doit être d'un rang différent. Ces sorts sont automatiquement préparés lorsque vous faites vos préparatifs quotidiens et vous disposez d'un emplacement de sort supplémentaire pour chaque sort. Vous pouvez choisir une autre combinaison de sorts en passant une semaine d'intermède à étudier votre grimoire pour opérer le réapprentissage de vos sorts maîtrisés."
            ]
        },
        {
            "name"       : "Maîtrise du domaine",
            "level"      : "12",
            "traits"     : [
                "Oracle"
            ],
            "required"   : [
                "Sagacité du domaine"
            ],
            "description": [
                "Vous avez une profonde compréhension des domaines en rapport avec votre mystère. Choisissez un des domaines associés à votre mystère pour lequel vous avez un sort de domaine initial. Vous obtenez un sort de domaine avancé pour ce domaine, que vous lancez comme un sort de révélation."
            ]
        },
        {
            "name"       : "Malédiction contrecarrée 1",
            "level"      : "14",
            "traits"     : [
                "Concentration",
                "Oracle"
            ],
            "required"   : [],
            "description": [
                "Fréquence Une fois par jour",
                "Vous avez appris à retenir votre malédiction. Si votre prochaine action consiste à utiliser un capacité liée à la malédiction, la valeur de votre sentiment_very_dissatisfiedMalédiction n'augmente pas."
            ]
        },
        {
            "name"       : "Maléfice divisé 1",
            "level"      : "18",
            "traits"     : [
                "Concentration",
                "Mutamagie",
                "Sorcier"
            ],
            "required"   : [],
            "description": [
                "Vous siphonnez une partie de la puissance d'un maléfice offensif que vous avez lancé pour le diriger également contre une autre cible. Si votre prochaine action consiste à sports_martial_artsLancer un sort pour lancer un maléfice nuisible sur une cible unique, vous pouvez réduire son rang de 2 (le rendant de 2 rangs inférieurs au rang maximum des sorts que vous pouvez lancer). Si vous le faites, vous pouvez sélectionner une seconde cible avec ce maléfice pour que ce maléfice l'affecte."
            ]
        },
        {
            "name"       : "Maltraitance collatérale",
            "level"      : "16",
            "traits"     : [
                "Barbare",
                "Rage"
            ],
            "required"   : [
                "Maltraitance"
            ],
            "description": [
                "Vous frappez l'ennemi que vous êtes en train de maltraiter contre quelqu'un d'autre. Quand vous Maltraitez un adversaire, choisissez un ennemi adjacent à celui qui est sentiment_very_dissatisfiedAgrippé . Cet ennemi subit lui aussi vos dégâts de Maltraitance avec un jet de casinoRéflexes contre votre DD de classe."
            ]
        },
        {
            "name"       : "Manoeuvre intelligente r",
            "level"      : "2",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [
                "Trafic de cerveau"
            ],
            "description": [
                "Déclencheur Votre Frappe touche de manière critique et inflige des dégâts à une créature que vous avez identifié avec sports_martial_artsSe souvenir .",
                "Vos tactiques de combat sont avantagées par l'évaluation des capacités de votre ennemi et sa portée. Vous Faites un pas ou Marchez rapidement. Ce déplacement ne déclenche pas de réaction de la créature déclencheuse."
            ]
        },
        {
            "name"       : "Manoeuvre mixte 2",
            "level"      : "8",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "maître en Athlétisme"
            ],
            "description": [
                "Vous tirez partie de votre connaissance des arts martiaux pour combiner deux manœuvres différentes en une seule combinaison fluide. Choisissez deux actions parmi sports_martial_artsSaisir , sports_martial_artsRepositionner , sports_martial_artsPousser ou sports_martial_artsCroc-en-jambe . Faites les deux attaques choisies contre la même créature ou des créatures différentes, mais n'appliquez la pénalité d'attaques multiples qu'après les avoir résolues."
            ]
        },
        {
            "name"       : "Manoeuvres agiles",
            "level"      : "6",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [
                "expert en Athlétisme"
            ],
            "description": [
                "Vous manœuvrez aisément contre vos adversaires. Vos actions pour sports_martial_artsDésarmer , sports_martial_artsSaisir , sports_martial_artsRepositionner , sports_martial_artsPousser et faire un sports_martial_artsCroc-en-jambe possèdent une plus faible pénalité d'attaques multiples. Même si votre attaque d'arme ou à mains nues n'a pas le trait agile, la pénalité est de -4 si l'action est la deuxième attaque du round, ou -8 si c'est votre troisième attaque et suivantes. Si votre attaque d'arme ou à mains nues est agile et que vous avez du panache, la pénalité se reduit encore plus, à -3 pour la deuxième attaque dans le round, et -6 pour la troisième et les suivantes."
            ]
        },
        {
            "name"       : "Marche au bouclier",
            "level"      : "4",
            "traits"     : [
                "Guerrier"
            ],
            "required"   : [],
            "description": [
                "Quand votre bouclier est levé, les coups de vos ennemis ne peuvent pas vous toucher. Lorsque votre bouclier est levé, vous pouvez Marcher rapidement à la moitié de votre Vitesse sans déclencher les réactions qui devraient l'être par votre déplacement (comme les Frappes réactives). Vous pouvez utiliser Marche au bouclier si vous Volez ou si vous Nagez au lieu de Marcher rapidement si vous possédez le type de déplacement correspondant."
            ]
        },
        {
            "name"       : "Marcheur sur l'eau",
            "level"      : "8",
            "traits"     : [
                "Oracle"
            ],
            "required"   : [],
            "description": [
                "Lorsque vous êtes sous l'emprise de votre malédiction, vos pas acquièrent une flottabilité surnaturelle. Lorsque vous êtes sentiment_very_dissatisfiedLié à la malédiction 1 , vous pouvez Marcher rapidement sur des liquides qui ne supportent pas votre poids, mais vous devez terminer votre mouvement sur une surface qui peut vous supporter ou vous tombez dans le liquide comme à l'ordinaire. Lorsque vous êtes Lié à la malédiction 2 ou pire, vous obtenez les effets de auto_awesomeMarche sur l'eau ."
            ]
        },
        {
            "name"       : "Martèlement du gorille 1",
            "level"      : "6",
            "traits"     : [
                "Émotion",
                "Sophistication",
                "Mental",
                "Moine"
            ],
            "required"   : [
                "expert en Intimidation, Posture du gorille"
            ],
            "description": [
                "Conditions Vous avez adopté la military_techPosture du gorille .",
                "Vous martelez votre poitrine avec vos poings avant de porter des coups à vos ennemis.",
                "Effectuez un test d'Intimidation pour sports_martial_artsDémoraliser , puis portez une Frappe de coup du gorille contre la même cible. Si votre Frappe touche, vous obtenez un bonus de circonstances aux jet de dégâts égal au triple de la valeur de l'état sentiment_very_dissatisfiedEffrayé de la cible.",
                "Spécial Si vous possédez ce don, lorsque vous êtes dans la Posture du gorille, vous obtenez une Vitesse d'escalade de 4,50 mètres."
            ]
        },
        {
            "name"       : "Martyr 1",
            "level"      : "8",
            "traits"     : [
                "Prêtre",
                "Mutamagie"
            ],
            "required"   : [
                "Source divine"
            ],
            "description": [
                "Vous recourez à des moyens extrêmes pour soutenir vos alliés, même si cela signifie vous mettre à mal vous-même. Si votre prochaine action consiste à lancer auto_awesomeMise à mal ou auto_awesomeGuérison pour redonner des Points de vie à un unique allié, vous pouvez canaliser votre propre vitalité en même temps que le sort. Vous perdez 1d8 Points de vie par rang du sort, qui ne peuvent en aucun cas être réduits ou mitigés de la moindre façon et votre allié regagne un nombre équivalent de Points de vie."
            ]
        },
        {
            "name"       : "Mégabombe",
            "level"      : "20",
            "traits"     : [
                "Additif",
                "Alchimiste",
                "Manipulation"
            ],
            "required"   : [],
            "description": [
                "Vous ajoutez une substance hautement puissante à votre bombe alchimique pour la transformer en mégabombe. Lancer cette bombe prend deux actions au lieu d'une Frappe. Ce n'est pas une Frappe, et vous ne faites pas de jet d'attaque. La mégabombe explose dans une crop_freeexplosion de 9 mètres dans les 18 mètres. Elle inflige des dégâts aux créatures comme si chacune était la cible principale, avec un jet casinoRéflexes . En cas d'échec, une créature subit également tous les effets supplémentaires qui toucheraient une cible principale (comme l'état sentiment_very_dissatisfiedPris au dépourvu résultant d'une foudre en bouteille). Cependant toutes les créatures qui se trouvent dans la zone subissent les dégâts d'éclaboussure comme si elles étaient la cible principale, il n'y a pas d'éclaboussures au-delà de cette zone."
            ]
        },
        {
            "name"       : "Mener la danse 1",
            "level"      : "4",
            "traits"     : [
                "Bravade",
                "Déplacement",
                "Bretteur"
            ],
            "required"   : [
                "qualifié en Représentation"
            ],
            "description": [
                "Conditions vous êtes adjacent à un ennemi.",
                "Vous entraînez votre ennemi dans votre danse. Faites un test de casinoReprésentation contre le DD de Volonté de votre ennemi adjacent.",
                "Succès critique Votre adversaire est entraîné par votre danse. Tous deux vous déplacez d'un maximum de 3 mètres dans la même direction, restant adjacents l'un à l'autre. Votre déplacement ne déclenche pas de réactions provenant de la cible (et le déplacement de la cible ne déclenche pas de réactions car il s'agit d'un déplacement forcé).",
                "Succès Comme en cas de succès critique, mais vous ne vous déplacez tous deux que de 1,50 mètre.",
                "Échec L'adversaire ne suit pas vos pas. Vous pouvez vous déplacer de 1,50 mètre, mais ce mouvement déclenche les réactions normalement.",
                "Échec critique Vous trébuchez et tombez sentiment_very_dissatisfiedÀ terre dans votre case."
            ]
        },
        {
            "name"       : "Métamorphe ultime 2",
            "level"      : "20",
            "traits"     : [
                "Concentration",
                "Druide"
            ],
            "required"   : [
                "Morphologie draconique, Forme indomptée"
            ],
            "description": [
                "Vous transcendez les limites morphologiques. Une fois par jour, vous pouvez Lancer auto_awesomeIncarnation de la nature , même si vous ne l'avez pas préparé, pour vous transformez en un kaiju. Si vous possédez military_techMorphologie végétale , vous pouvez vous transformer à la place en Homme vert. Vous obtenez enfin l'activité sports_martial_artsMétamorphose ultime ."
            ]
        },
        {
            "name"       : "Métamorphose verdoyante",
            "level"      : "14",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "ordre de la feuille"
            ],
            "description": [
                "Vous vous transformez en une version végétale de vous-même, en obtenant le trait plante et en perdant les traits inappropriés à votre nouvelle forme (typiquement humanoïde). Vous obtenez aussi l'action sports_martial_artsRepos verdoyant ."
            ]
        },
        {
            "name"       : "Millier de visions f",
            "level"      : "4",
            "traits"     : [
                "Lié à une malédiction",
                "Oracle",
                "Prédiction"
            ],
            "required"   : [],
            "description": [
                "Vous ouvrez vos sens à de nombreuses visions du futur immédiat. Ces visions vous donnent des détails subtils sur votre environnement immédiat dans les 9 mètres. Dans ce rayon, vous n'avez pas besoin de réussir de test nu pour cibler une créature sentiment_very_dissatisfiedMasquée , n'êtes pas sentiment_very_dissatisfiedPris au dépourvu pour les créatures qui sont sentiment_very_dissatisfiedCachées de vous (à moins que vous ne soyez Pris au dépourvu pour des raisons autres que l'état caché) et il vous suffit de ne réussir qu'un casinoTest nu, DD 5 pour cibler une créature Cachée. Au-delà de 9 mètres, les visions sont submergées par un trop grand nombre de futurs possibles, ce qui rend tous vos sens imprécis au-delà de cette limite. Les visions persistent pendant 1 minute."
            ]
        },
        {
            "name"       : "Mise en commun des indices",
            "level"      : "8",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez mettre en commun avec tous vos alliés en même temps les indices.",
                "Lorsque vous utilisez la réaction Partager les indices, n'importe lequel de vos alliés qui tente le même test pour enquêter sur une de vos investigations en cours bénéficie du bonus de circonstances de Partager les indices. Si vous utilisez cette capacité au cours d'une rencontre, ils doivent effectuer leur test durant le round à la suite duquel vous avez Partagé les indices."
            ]
        },
        {
            "name"       : "Mobilité",
            "level"      : "2",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Vous vous déplacez sans laisser d'ouverture. Lorsque vous Marchez rapidement et que vous vous déplacez de la moitié de votre Vitesse ou moins, ce déplacement ne déclenche pas de réaction. Vous pouvez utiliser Mobilité quand vous Escaladez, Volez ou Nagez au lieu de Marcher rapidement si vous avez le type de déplacement correspondant."
            ]
        },
        {
            "name"       : "Modèle de célérité",
            "level"      : "20",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "Célérité bénie"
            ],
            "description": [
                "Vos mouvements et ceux de vos alliés sont aussi rapides et décisifs que le jugement de votre divinité. Si un allié débute une action de déplacement dans votre aura de champion, son déplacement pendant cette action ne déclenche pas de réactions.",
                "De plus, vous êtes en permanence sentiment_very_dissatisfiedAccéléré . Vous ne pouvez utiliser votre action supplémentaire que pour Faire un pas ou Marcher rapidement. Si vous disposez d'une Vitesse de vol, ajoutez Voler à cette liste. Si vous avez un compagnon animal et que vous êtes monté sur lui au début de votre tour, vous pouvez faire en sorte que ce soit votre monture qui soit Accélérée à votre place au cours de ce tour."
            ]
        },
        {
            "name"       : "Moment de lucidité 1",
            "level"      : "1",
            "traits"     : [
                "Barbare",
                "Concentration",
                "Rage"
            ],
            "required"   : [],
            "description": [
                "Vous contenez votre rage un moment afin de pouvoir penser avec lucidité. Jusqu'à la fin de ce tour, vous pouvez utiliser des actions avec le trait concentration, même si ces actions n'ont pas le trait rage."
            ]
        },
        {
            "name"       : "Montée de sang r",
            "level"      : "1",
            "traits"     : [
                "Ensorceleur"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Une créature vous cible avec un sort de la même tradition magique que votre lignage.",
                "La magie dans votre sang afflue en réponse au sort de votre ennemi. Vous générez un effet de magie du sang que vous connaissez, même si vous êtes déjà sous les effets de magie du sang. La cible doit être soit vous, soit la créature qui a déclenché la Montée de sang. Si l'effet de magie du sang vous accorde un bonus à la CA ou au jet de sauvegarde approprié, ce bonus s'applique contre le sort déclencheur. Si l'effet possède une durée, il dure jusqu'au début de votre prochain tour.",
                "Spécial Ce don possède le trait correspondant à la tradition de votre lignage."
            ]
        },
        {
            "name"       : "Monture de bon augure",
            "level"      : "16",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "Destrier imposant"
            ],
            "description": [
                "Grâce à vos soins permanents, votre destrier a développé des compétences et une intelligence incroyables. La monture que vous avez obtenue grâce à Fidèle destrier est à présent un compagnon animal spécialisé. Vous pouvez choisir l'une des spécialisations habituelles ou la spécialisation de bon augure. Les fidèles destriers avec une spécialisation de bon augure bénéficient des avantages suivants :",
                [
                    "Il acquiert le trait céleste, diabolique ou moniteur - celui qui correspond le mieux aux serviteurs de votre divinité, et son apparence change pour ressembler davantage à ces serviteurs. Il gagne également le trait saint s'il s'agit d'un céleste ou le trait impie s'il s'agit d'un démon.",
                    "Son modificateur d'Intelligence augmente de 2 et son modificateur de Sagesse de 1.",
                    "Son degré de maîtrise en Religion passe à expert.",
                    "Elle sait parler la langue associée aux serviteurs de votre divinité (comme l'empyréen pour les célestes, le chthonien pour les démons ou le réquien pour les psychopompes).",
                    "Ses Points de vie maximums augmentent de 20, passant à 25 au niveau 18 et à 30 au niveau 20. Si la monture possède le trait céleste, les PV supplémentaires augmentent de 5, et la monture obtient une faiblesse 5 contre l'impie. Si elle possède le trait fiélon, les PV supplémentaires augmentent de 5 et la monture obtient une faiblesse 5 contre le saint.",
                    "Il gagne des ailes qui lui confèrent une vitesse de vol égale à sa vitesse terrestre."
                ]
            ]
        },
        {
            "name"       : "Morphologie d'insecte",
            "level"      : "6",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "Forme indomptée"
            ],
            "description": [
                "Votre compréhension de la vie s'étend, vous permettant d'imiter un plus large éventail de créatures. Ajoutez les formes du sort auto_awesomeForme d'insecte à celles de la liste de auto_awesomeForme indomptée . Lorsque que vous utilisez Forme indomptée pour vous métamorphoser en un insecte non volant indiqué dans les formes d'insecte listées dans auto_awesomeForme de nuisible , la durée est de 24 heures au lieu de 10 minutes."
            ]
        },
        {
            "name"       : "Morphologie draconique",
            "level"      : "12",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "Morphologie volante"
            ],
            "description": [
                "Vous pouvez prendre la forme de certaines des créatures les plus redoutables au monde. Ajoutez les formes indiquées dans le sort auto_awesomeForme de dragon à la liste de Forme indomptée.",
                "Chaque fois que vous vous métamorphosez en une autre forme en utilisant Forme indomptée, vous obtenez une résistance 5 contre les dégâts de type contondant ou de poison, à votre choix."
            ]
        },
        {
            "name"       : "Morphologie élémentaire",
            "level"      : "10",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "Forme indomptée"
            ],
            "description": [
                "Vous comprenez les éléments fondamentaux de la nature au point de pouvoir en imprégner votre corps et devenir une incarnation vivante de ces éléments. Ajoutez les formes du sort auto_awesomeForme élémentaire à la liste de auto_awesomeForme indomptée . Lorsque vous êtes métamorphosé en une autre forme en utilisant Forme indomptée, vous bénéficiez d'une résistance 5 contre le feu"
            ]
        },
        {
            "name"       : "Morphologie féroce",
            "level"      : "8",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "Forme indomptée"
            ],
            "description": [
                "Vous avez maîtrisé la forme des dinosaures. Ajoutez les formes du sort auto_awesomeForme de dinosaure à la liste de celles de votre Forme indomptée. Chaque fois que vous utilisez Forme indomptée pour prendre une forme qui vous confère un modificateur d'Athlétisme particulier, vous bénéficiez d'un bonus de statut de +1 à vos tests d'Athlétisme."
            ]
        },
        {
            "name"       : "Morphologie monstrueuse",
            "level"      : "16",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "Forme indomptée"
            ],
            "description": [
                "Vous pouvez vous transformer en une redoutable créature magique. Ajoutez les formes de ver des cavernes et de serpent de mer aux formes listées dans auto_awesomeForme monstrueuse à celles de votre Forme indomptée. Si vous avez military_techMorphologie volante , vous ajoutez aussi la forme de phénix à la liste de votre Forme indomptée."
            ]
        },
        {
            "name"       : "Morphologie végétale",
            "level"      : "10",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "Ordre de la feuille ou Forme indomptée"
            ],
            "description": [
                "Vous pouvez adopter la forme d'une créature végétale.",
                "Si vous ne possédez pas Forme indomptée, vous pouvez lancer le sort auto_awesomeForme de plante une fois par jour, intensifié au même rang que le plus élevé des rangs de vos emplacements de sorts de druide.",
                "Si vous possédez le don military_techForme indomptée , ajoutez les formes indiquées dans auto_awesomeForme de plante à la liste de celles que vous pouvez prendre avec Forme indomptée et chaque fois que vous adoptez une forme en utilisant Forme indomptée, vous bénéficiez d'une résistance 5 contre le poison."
            ]
        },
        {
            "name"       : "Morphologie volante",
            "level"      : "8",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "Forme indomptée"
            ],
            "description": [
                "Les ailes vous débarrassent des entraves qui vous clouent au sol. Ajoutez les formes oiseau et chauve-souris du sort auto_awesomeForme aérienne à celles de votre auto_awesomeForme indomptée . Si vous avez military_techMorphologie d'insecte , vous ajoutez aussi la forme de guêpe à celles de votre Forme indomptée. Si vous avez military_techMorphologie féroce , vous ajoutez également la forme de ptérosaure à celles de votre Forme indomptée. Chaque fois que vous utilisez Forme indomptée pour prendre une forme qui vous confère un modificateur d'Acrobaties particulier, vous bénéficiez d'un bonus de statut de +1 à vos tests d'Acrobaties."
            ]
        },
        {
            "name"       : "Mur divin",
            "level"      : "12",
            "traits"     : [
                "Champion"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez un bouclier.",
                "Vous utilisez votre bouclier pour harceler vos ennemis, en les empêchant de s'éloigner ou de vous contourner. Tous les espaces adjacents à vous sont du terrain difficile pour vos ennemis."
            ]
        },
        {
            "name"       : "Murmures de faiblesse 1",
            "level"      : "1",
            "traits"     : [
                "Lié à une malédiction",
                "Divin",
                "Oracle"
            ],
            "required"   : [],
            "description": [
                "Des voix vous chuchotent la meilleure façon d'affaiblir une créature. Vous ciblez une créature dans un rayon de 18 mètres. Si elle possède des faiblesses, vous les apprenez ainsi que son modificateur de jet de sauvegarde le plus faible. Vous venez également à comprendre ses déplacements et obtenez un bonus de statut de +2 à votre prochain jet d'attaque (ou test de compétence effectué dans le cadre d'une action d'attaque) contre cet ennemi avant la fin de votre tour. La cible est alors temporairement immunisée pendant 1 jour."
            ]
        },
        {
            "name"       : "Muse polyvalente",
            "level"      : "2",
            "traits"     : [
                "Barde"
            ],
            "required"   : [],
            "description": [
                "Il est impossible de catégoriser votre muse. Choisissez un type de muse autre que celui que vous avez déjà. Vous obtenez un don de niveau 1 nécessitant cette muse et votre muse est désormais aussi une muse du type choisi, ce qui vous permet de prendre des dons avec aussi ce type de muse en prérequis. Vous ne bénéficiez pas des autres effets du type de muse choisi.",
                "Spécial Vous pouvez sélectionner ce don plusieurs fois. Le cas échéant, vous devez choisir à chaque fois un type différent de ceux que votre muse a déjà."
            ]
        },
        {
            "name"       : "Mutagène parfait",
            "level"      : "20",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Vous avez amélioré les formules de vos mutagènes qui sont maintenant parfaitement harmonisés avec votre physiologie. Quand vous êtes sous l'effet d'un mutagène que vous avez fabriqué, vous ne subissez aucun de ses inconvénients."
            ]
        },
        {
            "name"       : "Mutagène persistant",
            "level"      : "16",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [
                "Élixir étendu"
            ],
            "description": [
                "Vous vous êtes entraîné à stabiliser votre forme physique. Une fois par jour, quand vous consommez un objet alchimique et qui possède les traits imprégné et mutagène, vous pouvez étendre sa durée jusqu'à vos préparatifs quotidiens suivants au lieu du terme de sa durée normale. Contrairement à l'extension normale accordée par l' military_techÉlixir étendu , ceci peut dépasser la durée limite d'un objet crée avec sports_martial_artsAlchimie rapide au delà de sa limite de 10 minutes normale."
            ]
        },
        {
            "name"       : "Mutagène revivifiant 1",
            "level"      : "2",
            "traits"     : [
                "Alchimiste",
                "Concentration"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous êtes sous l'effet d'un mutagène.",
                "Vous métabolisez un mutagène pour vous soigner. Vous regagnez 1d6 Points de vie par tranche de deux niveaux d'objet du mutagène (avec un minimum de 1d6), mais la durée du mutagène se termine immédiatement."
            ]
        },
        {
            "name"       : "Mutation du lignage",
            "level"      : "20",
            "traits"     : [
                "Ensorceleur"
            ],
            "required"   : [
                "un lignage basé sur un type de créature spécifique"
            ],
            "description": [
                "Vous mutez de façon permanente pour ressembler davantage aux créatures de votre lignage. Vous obtenez le ou les traits appropriés pour ce type de créatures (aberration pour aberrant, ange et céleste pour angélique, démon et fiélon pour démonique et ainsi de suite).",
                "Vous obtenez vision nocturne ou vision dans le noir, si cela est approprié pour les créatures possédant ces traits.",
                "Choisissez l'une des options suivantes :",
                [
                    "Si les créatures associées à votre lignage ont la capacité de voler, vous obtenez une Vitesse de vol égale à votre Vitesse au sol.",
                    "Si les créatures associées à votre lignage sont aquatiques ou amphibiennes, vous devenez amphibien, capable de respirer aussi bien sous l'eau qu'à l'air libre et vous obtenez une Vitesse de nage égale à votre Vitesse au sol.",
                    "Si les créatures associées à votre lignage possèdent une résistance ou une immunité à l'acide, au froid, à l'électricité, au feu, au vide ou au son, choisissez un type d'énergie contre lequel votre lignage est immunisé ou résistant. Vous obtenez une résistance 20 contre ce type d'énergie."
                ]
            ]
        },
        {
            "name"       : "Mystère diversifié",
            "level"      : "16",
            "traits"     : [
                "Oracle"
            ],
            "required"   : [
                "Révélation avancée"
            ],
            "description": [
                "Vous avez élargi votre compréhension du divin et pouvez puiser dans les merveilles d'un mystère différent. Choisissez un sort de révélation d'un mystère différent du vôtre. Vous ne pouvez choisir qu'un sort de révélation initial ou un sort de révélation avancé.",
                "Ce sort acquiert le trait malédiction pour vous, et quand vous le lancez, vous gagnez l'effet sentiment_very_dissatisfiedLié à la malédiction 1 de ce mystère en plus de vos effets normaux de malédiction. Toute capacité qui vous permettrait de d'utiliser une capacité de malédiction sans augmenter la sévérité de votre malédiction vous empêche également d'obtenir cet effet de malédiction supplémentaire.",
                "Vous ne pouvez pas lancer le sort de révélation choisi si une des conditions suivantes est remplie :",
                [
                    "ses effets de malédiction de mystère rentrent en conflit direct avec ou annule les effets de votre propre malédiction de mystère,",
                    "la malédiction n'aurait aucun effet sur vous (par exemple, supprimer une capacité de votre mystère originel que vous ne possédez pas)",
                    "ou que l'un de ces critères serait rempli une fois que vous aurez achevé de Lancer le sort."
                ]
            ]
        },
        {
            "name"       : "Mystère paradoxal",
            "level"      : "20",
            "traits"     : [
                "Oracle"
            ],
            "required"   : [
                "Révélation supérieure"
            ],
            "description": [
                "Les véritables profondeurs de votre mystère divin sont insondables et contradictoires, vous permettant de changer de pouvoirs que même vous ne pouvez qu'entrevoir.",
                "Chaque jour, au cours de vos préparatifs quotidiens, choisissez un sort de domaine basique ou avancé de tout domaine du livre de base, une des domaines accordés par votre mystère, de tout autre domaine auquel vous avez accès ou tout sort de révélation initial ou avancé d'un autre mystère. Vous obtenez ce sort comme sort de révélation jusqu'à vos prochains préparatifs quotidiens."
            ]
        },
        {
            "name"       : "Nature intemporelle",
            "level"      : "14",
            "traits"     : [
                "Druide"
            ],
            "required"   : [],
            "description": [
                "Vous ne vieillissez plus, grâce à la magie primordiale qui vous soutient. Le flot continu d'énergie primordiale vous confère un bonus de statut de +2 aux jets de sauvegarde contre les maladies et la magie primordiale."
            ]
        },
        {
            "name"       : "Ne bouge plus r",
            "level"      : "4",
            "traits"     : [
                "Moine"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Une créature à portée utilise une action de déplacement ou quitte une case lors d'une action de déplacement qu'elle entreprend.",
                "Vous attaquez quand l'adversaire tente de fuir. Vous faites une Frappe au corps-à-corps contre la créature qui a déclenché ce pouvoir. Si vous obtenez un coup critique et que le déclencheur était une action de déplacement, vous interrompez cette action."
            ]
        },
        {
            "name"       : "Neutralisation parfaite",
            "level"      : "18",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Vous avez perfectionné vos formules de bombes qui handicapent vos ennemis. Quand vous utilisez military_techBombe incapacitante , votre cible ne peut éviter l'état causé par la bombe que si elle obtient un succès critique à son jet de sauvegarde."
            ]
        },
        {
            "name"       : "Oasis itinérante",
            "level"      : "12",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "maître en Survie"
            ],
            "description": [
                "Vous êtes entouré d'énergie apaisante. Vous et vos alliés dans les 18 m êtes protégés de la chaleur et du froid importants liés à l'environnement. Si vous êtes légendaire en Survie, vous et ces alliés êtes aussi protégés du chaud et du froid extrêmes liés à l'environnement."
            ]
        },
        {
            "name"       : "Ode à Ouroboros",
            "level"      : "10",
            "traits"     : [
                "Barde"
            ],
            "required"   : [],
            "description": [
                "Vous apprenez le sort de composition auto_awesomeOde à Ouroboros , qui vous permet d'éviter à vos alliés de manière temporaire de mourir."
            ]
        },
        {
            "name"       : "Odorat aiguisé",
            "level"      : "2",
            "traits"     : [
                "Barbare"
            ],
            "required"   : [],
            "description": [
                "Quand votre colère est intense, votre odorat s'affine. Lorsque vous êtes en Rage, vous obtenez odorat imprécis avec une portée de 9 mètres."
            ]
        },
        {
            "name"       : "Oeil de l'empiriste",
            "level"      : "12",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [
                "Méthodologie : empirisme"
            ],
            "description": [
                "Acérés et perçants, vos yeux voient tout et en disent encore plus. Vos actions pour sports_martial_artsSignaler perdent le trait audible et vous n'avez pas besoin d'être entendu pour transmettre l'information à vos alliés. De plus, une créature que vous Signalez est sentiment_very_dissatisfiedPrise au dépourvu contre vos alliés jusqu'au début de votre prochain tour.",
                "Spécial Si vous possédez le don military_techCombat aveugle , vos alliés obtiennent les avantages de ce don contre toute créature qui est Prise au dépourvu du fait d'Oeil de l'empiriste."
            ]
        },
        {
            "name"       : "Offensive courageuse 1",
            "level"      : "16",
            "traits"     : [
                "Audible",
                "Barde",
                "Concentration",
                "Mutamagie"
            ],
            "required"   : [
                "Avancée courageuse, Assaut courageux"
            ],
            "description": [
                "Vous utilisez votre représentation pour orchestrer une offensive contre vos ennemis. Si votre prochaine action consiste à lancer le tour de magie de composition auto_awesomeHymne de courage , un allié qui obtient un bonus de statut de ce sort peut immédiatement utiliser une réaction pour sports_martial_artsMarcher rapidement puis faire une Frappe au corps-à-corps."
            ]
        },
        {
            "name"       : "Oindre un allié 1",
            "level"      : "2",
            "traits"     : [
                "Manipulation",
                "Ensorceleur"
            ],
            "required"   : [],
            "description": [
                "Vous forgez une connexion mystique avec un allié en utilisant votre corps comme focalisateur, lui permettant de bénéficier de votre magie.",
                "Vous placez une rune de sang sur un allié adjacent qui dure 1 minute. Lorsque vous devriez obtenir un effet de magie du sang, vous pouvez y renoncer et l'accorder à votre allié à la place.",
                "Vous ne pouvez oindre qu'un seul allié à la fois. Si vous placez une autre rune, votre rune précédente prend fin."
            ]
        },
        {
            "name"       : "Ouverture déroutante",
            "level"      : "8",
            "traits"     : [
                "Guerrier"
            ],
            "required"   : [
                "Frappe réactive"
            ],
            "description": [
                "Vous utilisez les ouvertures laissées par votre ennemi pour mettre à jour des faiblesses encore plus importantes. Lorsque vous touchez une créature lors d'une Frappe réactive, cette créature devient sentiment_very_dissatisfiedPrise au dépourvu jusqu'au début de votre prochain tour."
            ]
        },
        {
            "name"       : "Ouverture instantanée 1",
            "level"      : "14",
            "traits"     : [
                "Concentration",
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Vous distrayez votre adversaire à l'aide de quelques mots bien choisis ou à l'aide d'un geste vulgaire. Choisissez une cible qui se trouve dans un rayon de 9 mètres. Elle se trouve sentiment_very_dissatisfiedPrise au dépourvu contre vos attaques jusqu'à la fin de votre prochain tour. En fonction de la manière dont décrivez votre distraction, cette action obtient le trait audible ou visuel."
            ]
        },
        {
            "name"       : "Page blanche",
            "level"      : "16",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [
                "légendaire en Duperie"
            ],
            "description": [
                "Vos tromperies parviennent à confondre même la plus puissante magie qui pourrait vous espionner. Les effets de détection, de révélation et de scrutation passent sur vous, vos possessions et vos auras, ne détectant rien, sauf si l'effet utilisé dans ce but possède un rang de contre supérieur ou égal à 10. Par exemple : auto_awesomeDétection de la magie permettra toujours de détecter la présence d'une autre magie dans la zone, mais d'aucune magie sur vous, auto_awesomeVision véritable ne vous percera pas à jour, auto_awesomeLocalisation ou auto_awesomeScrutation ne permettront pas de vous trouver et ainsi de suite."
            ]
        },
        {
            "name"       : "Parade de projectile r",
            "level"      : "4",
            "traits"     : [
                "Moine"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Vous êtes la cible d'une attaque à distance physique.",
                "Conditions Vous êtes conscient de l'attaque, n'êtes pas pris au dépourvu contre elle et vous disposez d'une main libre.",
                "Vous bénéficiez d'un bonus de circonstances de +4 à la CA contre l'attaque déclencheuse. Si l'attaque rate, c'est que vous l'avez déviée. Vous ne pouvez pas utiliser ce don pour dévier des projectiles particulièrement massifs (tels que des rochers ou les carreaux de baliste)."
            ]
        },
        {
            "name"       : "Parade en duel 1",
            "level"      : "2",
            "traits"     : [
                "Guerrier"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez une seule arme de corps-à-corps à une main et vous ne tenez rien d'autre dans vos mains.",
                "Vous pouvez parer les attaques qui vous visent avec votre arme à une main. Vous obtenez un bonus de circonstances de +2 à la CA jusqu'au début de votre prochain tour tant que vous continuez à remplir les conditions."
            ]
        },
        {
            "name"       : "Parade et riposte",
            "level"      : "18",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [
                "Riposte opportune"
            ],
            "description": [
                "Vos parades et vos aboutissements vous permettent de riposter à la moindre provocation. Vous pouvez utiliser sports_martial_artsRiposte opportune contre un ennemi qui obtient un échec lors d'une Frappe contre vous (pas juste en cas d'échec critique) dès lors que vous avez fait des dégâts à cette créature avec un aboutissement lors de votre tour précédent et que vous disposez d'un bonus de circonstances à la CA du fait du trait d'arme parade, military_techParade extravagante ."
            ]
        },
        {
            "name"       : "Parade extravagante 1",
            "level"      : "1",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez une ou plusieurs armes à une main.",
                "Vous utilisez les armes à une main pour parer avec style. Vous obtenez un bonus de circonstances de +1 à la CA jusqu'au début de votre prochain tour ou un bonus de circonstances de +2 si vous disposez d'une main libre ou maniez une arme avec le trait parade. Vous perdez ce bonus de circonstances si vous ne remplissez plus les conditions de ce don. Si une créature vous manque avec une Frappe alors que vous disposez de ce bonus, vous obtenez du panache jusqu'à la fin de votre prochain tour."
            ]
        },
        {
            "name"       : "Parade jumelée 1",
            "level"      : "4",
            "traits"     : [
                "Guerrier",
                "Rôdeur"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez deux armes de corps-à-corps, une dans chaque main.",
                "Vous utilisez vos deux armes pour parer les attaques. Vous obtenez un bonus de circonstances de +1 à la CA jusqu'au début de votre prochain tour ou de +2 si une de vos armes possède le trait parade. Vous perdez ce bonus de circonstances de +1 si vous ne remplissez plus la condition du don."
            ]
        },
        {
            "name"       : "Paragon du bouclier",
            "level"      : "20",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "Bouclier béni"
            ],
            "description": [
                "Votre bouclier est un réceptacle de protection divine. Quand vous maniez votre bouclier désigné, on considère qu'il est toujours levé, même si vous n'utilisez pas l'action Lever un bouclier.",
                "Si votre bouclier venait à être détruit, il s'évanouirait dans le royaume de votre divinité à la place, ou les serviteurs de votre dieu le répareront. Lors de vos prochains préparatifs quotidiens, le bouclier revient vers vous complètement réparé. Pendant que ce bouclier est ainsi indisponible, vous pouvez passer 1 minute à accorder à un bouclier différent les avantages de votre bouclier béni jusqu'à ce que votre véritable bouclier revienne."
            ]
        },
        {
            "name"       : "Parangon de discrétion r",
            "level"      : "20",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [
                "légendaire en Discrétion"
            ],
            "description": [
                "Fréquence Une fois par heure",
                "Déclencheur Vous réussissez à utiliser Discrétion pour sports_martial_artsVous cacher et devenez sentiment_very_dissatisfiedCaché aux yeux de tous vos adversaires actuels ou à utiliser Discrétion pour sports_martial_artsÊtre furtif et devenez sentiment_very_dissatisfiedNon détecté aux yeux de tous vos adversaires actuels.",
                "Quand vous décidez de rester hors de vue, vous disparaissez complètement. Vous devenez sentiment_very_dissatisfiedInvisible pendant 1 minute, même si vous accomplissez une action hostile. Pas même auto_awesomeDiscerner l'invisible , auto_awesomeLumière révélatrice ou des effets similaires ne peuvent révéler votre présence, bien que des créatures puissent toujours utiliser l'action sports_martial_artsChercher pour vous localiser comme à l'ordinaire."
            ]
        },
        {
            "name"       : "Parangon de panache",
            "level"      : "20",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Vous trouvez des opportunités pour accomplir de hauts faits entre deux battements de coeur ou de cils des autres. Vous êtes sentiment_very_dissatisfiedAccéléré en permanence. Vous pouvez utiliser l'action supplémentaire uniquement pour effectuer une action de bravade."
            ]
        },
        {
            "name"       : "Partage de préparation 1",
            "level"      : "12",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [
                "Méthodologie : Sciences alchimiques"
            ],
            "description": [
                "Vous utilisez sports_martial_artsPréparation rapide et l'objet que vous créez reste efficace jusqu'au début de votre prochain tour. Puis, vous pouvez alors Interagir pour passer l'objet à une autre créature. Si vous le transmettez en le lançant, votre jet d'attaque à distance réussit automatiquement. Vous devez avoir une fiole polyvalente pour utiliser Préparation Rapide, comme à l'ordinaire."
            ]
        },
        {
            "name"       : "Pas d'échappatoire r",
            "level"      : "2",
            "traits"     : [
                "Barbare",
                "Rage"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Un ennemi dans votre allonge tente de s'éloigner de vous.",
                "Vous suivez l'ennemi lorsqu'il fait retraite. Vous Marchez rapidement d'une distance maximum égale à votre Vitesse en suivant l'ennemi et en le gardant dans votre allonge tout au long de son déplacement et jusqu'à ce qu'il s'arrête ou que vous vous soyez déplacé de toute votre Vitesse. Vous pouvez utiliser Pas d'échappatoire pour Creuser, Escalader, Nager ou Voler au lieu de Marcher rapidement si vous possédez le type de déplacement correspondant."
            ]
        },
        {
            "name"       : "Pas de côté r",
            "level"      : "8",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Le jet d'attaque d'une Frappe qui vous cible est un échec ou un échec critique.",
                "Vous faites un pas de côté adroitement et redirigez gentiment une attaque. Vous redirigez l'attaque déclencheuse sur une créature de votre choix qui vous est adjacente et dans l'allonge ou la portée maximale de l'attaque déclencheuse. L'attaquant relance le jet d'attaque de la Frappe en prenant pour cible la nouvelle créature."
            ]
        },
        {
            "name"       : "Pas léger",
            "level"      : "6",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Vous n'avez aucun mal à vous déplacer sur un sol inégal. Quand vous Marchez rapidement ou Faites un pas, vous pouvez ignorer le terrain difficile."
            ]
        },
        {
            "name"       : "Pas nuageux",
            "level"      : "16",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [
                "légendaire en Acrobaties"
            ],
            "description": [
                "Vos fantastiques talents d'acrobate vous permettent de parcourir de courtes distances sur des surfaces qui ne sont pas solides. Quand vous Marchez rapidement, vous pouvez ainsi vous déplacer sur l'eau, sur l'air et sur des surfaces solides qui ne peuvent supporter qu'un poids réduit comme s'il s'agissait d'un sol normal. Si vous Marchez rapidement sur un piège sensible à la pression, vous ne le déclenchez pas. À la fin de votre tour, vous coulez, chutez, traversez les surfaces fragiles ou déclenchez les pièges normalement en fonction de l'endroit où vous vous trouvez."
            ]
        },
        {
            "name"       : "Pas sans entrave",
            "level"      : "1",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "cause : libération"
            ],
            "description": [
                "Avec une explosion d'énergie divine libératrice, le déplacement de votre allié conféré par votre sports_martial_artsPas libérateur n'est pas affecté par les terrains difficiles ou très difficiles, les surfaces étroites et les terrains accidentés. Si vous disposez de la réaction exaltée, ceci s'applique a tous ceux qui Font un Pas."
            ]
        },
        {
            "name"       : "Passage forestier",
            "level"      : "4",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "ordre de la feuille"
            ],
            "description": [
                "Vous trouvez toujours un chemin, comme si le feuillage s'écartait devant vous. Vous ignorez tout terrain difficile dû aux plantes et aux champignons, tels les fourrés, les lianes et les sous-bois."
            ]
        },
        {
            "name"       : "Passer derrière (Bretteur)",
            "level"      : "2",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Votre acrobatie met votre ennemi en porte à faux. Lorsque vous réussissez un sports_martial_artsDéplacement acrobatique , l'ennemi que vous avez franchi est sentiment_very_dissatisfiedPris au dépourvu contre la prochaine attaque que vous lui portez avant la fin de votre tour."
            ]
        },
        {
            "name"       : "Passer derrière (Roublard)",
            "level"      : "1",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Vous passez sous puis derrière votre ennemi, votre mouvement rapide vous permettant de le prendre au dépourvu. Lorsque vous réussissez un sports_martial_artsDéplacement acrobatique , l'ennemi dont vous avez franchi l'espace est sentiment_very_dissatisfiedPris au dépourvu contre la prochaine attaque que vous lui portez avant la fin de votre tour."
            ]
        },
        {
            "name"       : "Pavane du paon 1",
            "level"      : "10",
            "traits"     : [
                "Sophistication",
                "Moine"
            ],
            "required"   : [
                "Posture du paon"
            ],
            "description": [
                "Conditions Vous êtes dans la Posture du paon.",
                "Vous vous déplacez lentement à travers le champ de bataille avec une grace dangereuse. sports_martial_artsFaites un pas deux fois et sports_martial_artsFrappez . La Frappe doit être faite avec l'épée requise par la Posture du paon."
            ]
        },
        {
            "name"       : "Peau magique",
            "level"      : "2",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "Un compagnon animal, Sorts de gardien"
            ],
            "description": [
                "Vous pouvez défendre votre compagnon au combat.",
                "Vous obtenez le sort de gardien auto_awesomePeau magique . Augmentez le nombre Points de focalisation de votre réserve de focalisation de 1."
            ]
        },
        {
            "name"       : "Perception de la magie",
            "level"      : "12",
            "traits"     : [
                "Détection",
                "Oracle",
                "Ensorceleur",
                "Magicien"
            ],
            "required"   : [],
            "description": [
                "Vous possédez littéralement un sixième sens pour la magie ambiante qui se trouve à proximité. Vous pouvez sentir la présence des auras magiques comme si vous utilisiez constamment un sort auto_awesomeDétection de la magie au rang 1. Cela détecte la magie présente uniquement dans votre champ de vision. Lorsque vous sports_martial_artsCherchez , vous obtenez les avantages de Détection de la magie au rang 3 sur les choses que vous voyez (en plus des avantages normaux de Chercher). Vous pouvez activer ou désactiver ce sens par une action gratuite au début ou à la fin de votre tour.",
                "Spécial Ce don correspond à la tradition d'incantation des sorts que vous lancez (arcanique, divine, occulte ou primordiale)."
            ]
        },
        {
            "name"       : "Percevoir l'imperceptible r",
            "level"      : "14",
            "traits"     : [
                "Enquêteur",
                "Rôdeur",
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Déclencheur vous obtenez un échec sur un test pour sports_martial_artsChercher",
                "Quand vous cherchez des ennemis, vous pouvez capter le plus infime des signes, tels que leur moindre mouvement ou le changement des courants d'air sur votre peau. Même si vous avez échoué au test déclencheur, vous percevez automatiquement toute créature sentiment_very_dissatisfiedNon détectée dans la zone où vous Cherchez, ce qui la rend simplement sentiment_very_dissatisfiedCachée à vos yeux."
            ]
        },
        {
            "name"       : "Perfection du lignage",
            "level"      : "20",
            "traits"     : [
                "Ensorceleur"
            ],
            "required"   : [
                "Parangon du lignage"
            ],
            "description": [
                "Vous maîtrisez les ultimes pouvoirs de votre lignage et de votre tradition. Vous gagnez un emplacement de sort de rang 10 de plus."
            ]
        },
        {
            "name"       : "Perforation révélatrice 2",
            "level"      : "6",
            "traits"     : [
                "Guerrier"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez une arme de corps-à-corps qui peut infliger des dégâts perforants.",
                "Vous enfoncez votre arme perforante dans un adversaire imperceptible, ce qui révèle sa position à vos alliés. Faites une Frappe avec l'arme de corps-à-corps perforante requise. Si la cible est Masquée, vous n'avez pas à faire un test nu pour toucher la créature et si elle est Cachée, vous devez simplement réussir un test nu DD 5. Si vous touchez et infligez des dégâts, vous pouvez enfoncer l'arme requise dans une cible tangible, révélant sa position actuelle. Vous sports_martial_artsRelâchez l'arme et elle reste logée dans la cible. Si la cible est masquée, aucun test nu n'est nécessaire pour la toucher et si la cible est Cachée, le DD du test nu est de 5 et la créature ne peut être non détectée. Ces avantages s'appliquent seulement aux observateurs qui peuvent voir votre arme logée dans la cible. Si la cible est sentiment_very_dissatisfiedInvisible , l'arme reste visible tant qu'elle est logée en elle.",
                "Cet avantage dure jusqu'à ce que l'arme soit retirée de la créature. Une créature adjacente ou la cible peut la retirer avec 2 actions Interagir"
            ]
        },
        {
            "name"       : "Perturbation du Qi 2",
            "level"      : "12",
            "traits"     : [
                "Moine",
                "Vide"
            ],
            "required"   : [],
            "description": [
                "Vous ciblez soigneusement les points de pression d'une créature pour bloquer sa force vitale intérieure. Faites une Frappe à mains nues. Si elle inflige des dégâts à une créature vivante, cette créature subit casino2d6 dégâts de vide persistants et elle est sentiment_very_dissatisfiedAffaiblie 1 jusqu'à ce que les dégâts persistants se terminent. Si vous êtes de niveau 18 ou supérieur, les dégâts de vide persistants passent à 3d6."
            ]
        },
        {
            "name"       : "Physique mutant",
            "level"      : "8",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Les mutagènes de base qui affectent votre forme physique peuvent faire ressortir la bête qui est en vous, vous rendre presque invincible ou rendre votre corps plus élastique. Lorsque vous êtes affecté par l'un des mutagènes ci-dessous, vous bénéficiez d'un avantage supplémentaire.",
                [
                    "workMutagène bestial Vous bénéficiez du bonus d'objet du mutagène à vos tests d'Intimidation. De plus, vous augmentez la taille des dés de dégâts de vos mâchoires et vos griffes d'un cran et ils obtiennent le trait mortel d10.",
                    "workMutagène de juggernaut Vous obtenez une résistance à tous les dégâts physiques égale à la moitié de votre niveau.",
                    "workMutagène de vif-argent Vous pouvez allonger vos os et Faire un pas de 3 mètres et vous pouvez écraser et comprimer votre corps, vous permettant de passer dans des passages étroits comme si vous étiez d'une taille inférieure, en plus de tout effet lié à Se faufiler."
                ],
                "Spécial Si vous pouvez être sous les effets de plusieurs mutagènes à la fois (avec Découverte de champ de recherche supérieure (mutagèniste) , par exemple), vous obtenez tous les bénéfices appropriés."
            ]
        },
        {
            "name"       : "Piège artisanal bondissant",
            "level"      : "2",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "Fabrication de pièges artisanaux, Sorts de gardien"
            ],
            "description": [
                "Vous pouvez magiquement déplacer vos pièges autour de vous.",
                "Vous obtenez le sort de gardien auto_awesomePiège artisanal bondissant . Augmentez le nombre de Points de focalisation de votre réserve de focalisation de 1."
            ]
        },
        {
            "name"       : "Pièges artisanaux invraisemblables",
            "level"      : "20",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "Profusion de pièges artisanaux"
            ],
            "description": [
                "Vous pouvez créer sans fin des pièges artisanaux à courte durée de vie, protégeant votre antre ou les utilisant contre des adversaires.",
                "Une fois par minute, vous pouvez sports_martial_artsFabriquer un des pièges artisanaux que vous avez préparé pour le déployer rapidement sans dépenser le piège artisanal préparé. Une fois déployé, un tel piège artisanal dure pendant 10 minutes avant de perdre son efficacité."
            ]
        },
        {
            "name"       : "Piétinement sismique 1",
            "level"      : "20",
            "traits"     : [
                "Barbare",
                "Manipulation",
                "Rage"
            ],
            "required"   : [],
            "description": [
                "Fréquence Une fois toutes les 10 minutes",
                "Vous tapez du pied avec une telle force que vous créez un petit tremblement de terre avec les effets du sort auto_awesomeTremblement de terre ."
            ]
        },
        {
            "name"       : "Piétiner la tête 1",
            "level"      : "4",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Portez une attaque de corps-à-corps à mains nues contre une cible sentiment_very_dissatisfiedÀ terre . Si elle touche, la cible est sentiment_very_dissatisfiedStupéfiée 1 (ou sentiment_very_dissatisfiedStupéfiée 2 sur un coup critique) et sentiment_very_dissatisfiedPrise au dépourvu jusqu'à la fin de votre prochain tour."
            ]
        },
        {
            "name"       : "Pistage accéléré",
            "level"      : "6",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "expert en Survie, Pisteur expérimenté"
            ],
            "description": [
                "Votre vue perçante vous permet de repérer des traces de passage, même quand vous êtes en mouvement. Vous pouvez vous déplacer à votre Vitesse normale quand vous sports_martial_artsPistez . Si vous êtes un maître en Survie, vous n'avez pas besoin de faire un nouveau test de Survie toutes les heures pour continuer à Pister. Si vous êtes légendaire en Survie, vous pouvez effectuer une autre activité d'exploration pendant que vous Pistez.",
                "Si vous faites un test de Survie pour déterminer votre initiative pendant que vous pistez votre proie, quand vous commencez votre premier tour de la rencontre, vous pouvez Marcher rapidement vers elle par une action gratuite."
            ]
        },
        {
            "name"       : "Piste solide",
            "level"      : "2",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [],
            "description": [
                "Quelques fois, vos dossiers se scindent en plus petits mystères mais vous ne perdez jamais de vue l'ensemble. Une fois par jour, lorsque vous abandonnez le sujet d'une piste pour utiliser sports_martial_artsSuivre une piste de nouveau, vous pouvez désigner la piste que vous avez arrêté de poursuivre comme piste solide pour la journée. Même si vous avez cessé de suivre la piste solide, vous pouvez revenir à la piste solide tant que vous le souhaitez en utilisant une action unique, qui possède le trait concentration. Le faire met un terme à l'une de vos pistes actuelles, comme à l'ordinaire.",
                "Au cours de vos prochains préparatifs quotidiens, vous pouvez conserver votre piste solide ou pouvez y mettre un terme. Y mettre un terme vous permet de choisir une nouvelle piste solide plus tard au cours de cette journée."
            ]
        },
        {
            "name"       : "Placer une preuve 1",
            "level"      : "1",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [
                "Vol à la tire"
            ],
            "description": [
                "Vous pouvez placer un unique objet que vous tenez d'encombrement léger ou négligeable sur une personne sans qu'elle le remarque en réussissant un test de casinoVol contre son DD de Perception.",
                "Si vous avez le trafic de roublard de voyou, vous pouvez le faire par une action gratuite quand vous réussissez à sports_martial_artsPousser une cible."
            ]
        },
        {
            "name"       : "Planifier l'avenir",
            "level"      : "14",
            "traits"     : [
                "Peu courant",
                "Concentration",
                "Enquêteur",
                "Prédiction"
            ],
            "required"   : [],
            "description": [
                "Vous passez 10 minutes en contemplation pour prédire étrangement comment les évènements vont se produire. Choisissez un objectif particulier ou une activité que vous planifiez d'engager durant la semaine ou un évènement dont vous attendez à ce qu'il puisse se produire dans la semaine. Vous analysez les probabilités qu'il se produise, en apprenant si c'est hautement probable, plus ou moins probable ou hautement improbable. Vous obtenez aussi un conseil pour vous suggérer une conduite à tenir que vous ou vos alliés pourriez entreprendre et qui permettrait de faire en sorte d'augmenter ou de diminuer les chances que l'évènement se produise, en fonction de vos préférences.",
                "Le MJ apprécie la probabilité de l'évènement et le conseil que vous apprenez."
            ]
        },
        {
            "name"       : "Plaquer au sol 2",
            "level"      : "4",
            "traits"     : [
                "Guerrier",
                "Sophistication"
            ],
            "required"   : [
                "qualifié en Athlétisme"
            ],
            "description": [
                "Vous portez une attaque pour déséquilibrer un ennemi, puis vous enchaînez immédiatement avec un balayage pour le faire basculer.",
                "Effectuez une Frappe au corps-à-corps. Si elle touche et inflige des dégâts, vous pouvez tenter un test d'Athlétisme pour faire trébucher la créature que vous avez touchée avec un sports_martial_artsCroc-en-jambe . Si vous maniez une arme de corps-à-corps à deux mains, vous pouvez ignorer la condition selon laquelle vous devez disposer d'une main libre pour faire un croc-en-jambe.",
                "Les deux attaques comptent dans le calcul de votre pénalité d'attaques multiples mais la pénalité n'augmente qu'après avoir effectué ces deux attaques."
            ]
        },
        {
            "name"       : "Plaquer au sol amélioré",
            "level"      : "10",
            "traits"     : [
                "Guerrier"
            ],
            "required"   : [
                "Plaquer au sol"
            ],
            "description": [
                "Vous pouvez vous jeter contre votre adversaire et le renverser d'un seul coup.",
                "Quand vous utilisez military_techPlaquer au sol , au lieu de faire une Frappe suivie d'un sports_martial_artsCroc-en-jambe , vous pouvez effectuer une seule et unique Frappe. Si vous le faites et que votre Frappe touche, vous appliquez également automatiquement l'effet de succès critique d'un Croc-en-jambe.",
                "Si vous avez utilisé une arme de corps-à-corps à deux mains pour Frapper, vous pouvez utiliser la taille du dé de dégâts de l'arme au lieu de celle du dé normalement utilisé pour déterminer les dégâts d'un succès critique d'un Croc-en-jambe."
            ]
        },
        {
            "name"       : "Plus dure est la chute",
            "level"      : "4",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Vous faites chuter douloureusement vos adversaires lorsque vous les mettez à terre. Lorsque vous réussissez un sports_martial_artsCroc-en-jambe contre un adversaire sentiment_very_dissatisfiedPris au dépourvu , votre cible subit 1d6 dégâts contondants. En cas de succès critique, la cible subit 1d6 dégâts contondants plus les dégâts de votre attaque sournoise."
            ]
        },
        {
            "name"       : "Plus ils sont grands 1",
            "level"      : "12",
            "traits"     : [
                "Bravade",
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Avec une vitesse irréfléchie, vous vous élancez, sautez et pivotez autour d'une créature pour trouver un endroit plus vulnérable. Tentez un sports_martial_artsDéplacement acrobatique sur une créature plus grande que vous d'au moins une taille, en utilisant les effets suivants.",
                "Succès critique Vous vous déplacez dans l'espace de l'ennemi, en considérant les cases de son espace comme un terrain difficile (tous les 1,50 mètre comptent comme 3 mètres de déplacement). Si votre vitesse n'est pas suffisante pour traverser l'espace de l'ennemi, vous subissez le même effet qu'un échec. Si vous réussissez à traverser la case de la cible, celle-ci obtient une faiblesse contre les dégâts de précision égale à la moitié de votre niveau, qui dure jusqu'à la fin de votre tour.",
                "Succès Comme en cas de succès, mais la faiblesse ne s'applique qu'à la prochaine attaque que vous portez sur la cible.",
                "Échec Votre déplacement s'interrompt et vous déclenchez les mêmes réactions que si vous aviez quitté la case d'où vous êtes parti.",
                "Échec critique Comme en cas d'échec et vous tombez sentiment_very_dissatisfiedÀ terre .",
                "flareEffet : Plus ils sont grands"
            ]
        },
        {
            "name"       : "Plus léger que l'air",
            "level"      : "14",
            "traits"     : [
                "Divin",
                "Oracle"
            ],
            "required"   : [
                "Marcheur sur l'eau"
            ],
            "description": [
                "Vos pas mystérieux deviennent encore plus légers, transcendant complètement le monde des mortels. Lorsque vous subissez l'état sentiment_very_dissatisfiedLié à la malédiction , vous obtenez les effets de auto_awesomeVol . Si vous êtes au moins Lié à la malédiction 3, vous obtenez un bonus de statut de +3 mètres à votre Vitesse de vol."
            ]
        },
        {
            "name"       : "Poids de la culpabilité",
            "level"      : "1",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "cause : rédemption"
            ],
            "description": [
                "La culpabilité trouble l'esprit de ceux qui ignorent votre sports_martial_artsLueur de rédemption . Au lieu de rendre la créature déclencheuse Affaiblie 2, vous pouvez faire en sorte qu'elle soit sentiment_very_dissatisfiedStupéfiée 2 pendant la même durée."
            ]
        },
        {
            "name"       : "Poigne écrasante",
            "level"      : "2",
            "traits"     : [
                "Moine"
            ],
            "required"   : [],
            "description": [
                "Tel un puissant boa constricteur, vous écrasez vos cibles dans votre poigne incroyable. Quand vous réussissez à sports_martial_artsSaisir une créature, vous pouvez lui infliger un montant de casinodégâts contondants égal à votre modificateur de Force. Vous pouvez rendre cette attaque non-létale sans pénalité."
            ]
        },
        {
            "name"       : "Poing élémentaire",
            "level"      : "2",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "Bouleversement intérieur"
            ],
            "description": [
                "Vous pouvez colorer votre qi de lumière élémentaire brillante. Lorsque vous lancez auto_awesomeBouleversement intérieur , en plus des divers types de dégâts normalement disponibles, vous pouvez infliger des dégâts supplémentaires avec de la magie élémentaire, en ajoutant le trait élémentaire et en changeant le type de dégâts en celui indiqué : air électricité (bourrasque crépitante), terre contondant (morceau de roche), feu feu (flamme vacillante), métal tranchant (échardes de métal volantes), eau froid (vague d'eau glacée), bois contondant (tabassage de pommes de pin)."
            ]
        },
        {
            "name"       : "Poings de diamant",
            "level"      : "18",
            "traits"     : [
                "Moine"
            ],
            "required"   : [],
            "description": [
                "Vous corps se solidifie au fur et à mesure de vos attaques et vos derniers coups infligent ainsi plus de dégâts.",
                "Vos attaques à mains nues obtiennent les traits percutant et mortel 10. Celles qui possèdent déjà un de ces traits augmentent à la place d'un échelon leurs dés de dégâts d'arme."
            ]
        },
        {
            "name"       : "Pointe du scalpel",
            "level"      : "4",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [
                "Méthodologie : Médecine Forensique"
            ],
            "description": [
                "Vos stratagèmes tirent parti de votre connaissance précise de l'anatomie. Lorsque vous obtenez un coup critique pour toucher avec une attaque pour laquelle vous avez substitué à votre jet d'attaque sports_martial_artsConcevoir un stratagème , si votre attaque inflige des dégâts perforants ou tranchants, vous infligez aussi casino1d6 dégâts de saignement à votre cible."
            ]
        },
        {
            "name"       : "Poison collant",
            "level"      : "6",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "La combinaison d'une viscosité supplémentaire et d'une application soigneuse permet de garder vos armes empoisonnées même en cas d'usure naturelle.",
                "Si votre Frappe avec une arme empoisonnée devrait dépenser son poison sans que votre cible ne tente un jet initial (à cause de la résistance ou si votre Frappe est un échec critique, par exemple), tentez un casinoTest nu, DD 5 . Sur un succès, votre arme reste empoisonnée.",
                "Si votre Frappe avec une arme empoisonnée réussit, Faites un casinoTest nu, DD 17 . Sur un succès, votre arme reste empoisonnée jusqu'à la fin de votre prochain tour."
            ]
        },
        {
            "name"       : "Poison double",
            "level"      : "14",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez appliquer deux poisons de blessure imprégnés différents sur la même arme, mais pas sur une munition. Le niveau de chaque poison doit être inférieur d'au moins 2 niveaux à votre niveau. Vous devez appliquer les deux poisons individuellement. Une fois appliqués, les poisons fusionnent en un double poison qui utilise le plus faible des deux DD et du nombre de stades des deux poisons. Ce double poison n'est virulent que si les deux poisons étaient virulents. Combinez les effets de chaque stade du poison sur toute créature affectée par celui-ci. Pour chaque stade du poison, utilisez les effets des deux poisons et l'intervalle le plus long pour ce stade parmi les deux poisons."
            ]
        },
        {
            "name"       : "Poison pernicieux",
            "level"      : "2",
            "traits"     : [
                "Additif",
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez ajouter un additif toxique à un poison alchimique pour qu'il éclabousse sa cible de poison. Un poison avec cet additif inflige un montant de dégâts de poison égal au niveau du poison si la cible obtient un succès à son jet de sauvegarde initial contre ce poison. Une cible qui obtient un succès critique à son jet de sauvegarde contre ce poison ne subit aucun dégât."
            ]
        },
        {
            "name"       : "Polyvalence artistique",
            "level"      : "1",
            "traits"     : [
                "Barde"
            ],
            "required"   : [
                "Touche-à-tout (muse de barde)"
            ],
            "description": [
                "Vous vous fiez à la grandeur de vos représentations au lieu des compétences sociales ordinaires. Vous pouvez utiliser Représentation au lieu de Diplomatie pour sports_martial_artsFaire bonne impression et au lieu d'Intimidation pour sports_martial_artsDémoraliser . Vous pouvez également utiliser une Représentation d'interprétation théâtrale au lieu de Duperie pour sports_martial_artsVous faire passer pour . Vous pouvez utiliser votre degré de maîtrise en Représentation pour remplir les conditions des dons de compétence nécessitant un degré de qualification particulier en Duperie, Diplomatie ou Intimidation."
            ]
        },
        {
            "name"       : "Polyvalence emblématique",
            "level"      : "4",
            "traits"     : [
                "Barde"
            ],
            "required"   : [
                "Touche-à-tout (muse de barde)"
            ],
            "description": [
                "Alors que la plupart des bardes se forgent une réputation grâce à certaines représentations et sorts emblématiques, vous êtes toujours en train de modifier votre répertoire disponible. Au cours de vos préparatifs quotidiens, vous pouvez remplacer l'un de vos sorts emblématiques par un sort différent de ce rang de votre répertoire."
            ]
        },
        {
            "name"       : "Pose rapide de pièges artisanaux",
            "level"      : "6",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "expert en Artisanat, Spécialiste des pièges artisanaux"
            ],
            "description": [
                "Vous savez comment poser un piège artisanal en un minimum de temps. En effectuant 3 actions sports_martial_artsInteragir , vous pouvez sports_martial_artsFabriquer des pièges artisanaux que l'on Fabrique normalement en une minute, même si vous ne les avez pas préparés au préalable"
            ]
        },
        {
            "name"       : "Position prédominante r",
            "level"      : "10",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "Au moins un don de Posture"
            ],
            "description": [
                "Déclencheur Vous êtes ciblé par une attaque ou effectuez un jet de Réflexes contre un effet infligeant des dégâts et vous êtes dans une posture.",
                "La flexibilité en terme de posture vous a appris à sacrifier leurs avantages pour mieux vous protéger vous-même. Vous quittez la posture dans laquelle vous vous trouviez, en obtenant un bonus de circonstances de +4 au jet de sauvegarde déclencheur ou à votre CA contre l'attaque déclencheuse."
            ]
        },
        {
            "name"       : "Possibilité miraculeuse",
            "level"      : "18",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [],
            "description": [
                "Votre divinité vous donne la puissance d'accomplir des miracles mineurs, vous permettant de vous adapter rapidement aux besoins fluctuants de vos devoirs. Une fois au cours de vos préparatifs quotidiens, vous pouvez utiliser un emplacement de sort pour renfermer du pouvoir divin à l'état brut, plutôt que de l'utiliser pour préparer un sort. Vous pouvez utiliser cet emplacement de sort pour lancer n'importe quel sort que vous connaissez issu de la liste des sorts divins qui sont au moins de 2 rangs inférieurs à l'emplacement de sort que vous avez choisi. Le sort agi de la même manière qu'un sort de 2 rangs inférieurs. Vous n'avez pas de sort particulier préparé dans cet emplacement jusqu'à ce que vous le Lanciez."
            ]
        },
        {
            "name"       : "Possibilités infinies",
            "level"      : "18",
            "traits"     : [
                "Magicien"
            ],
            "required"   : [],
            "description": [
                "Vous avez trouvé comment préparer un emplacement de sort qui existe dans votre esprit sous forme de différentes possibilités simultanées. Une fois au cours de vos préparatifs quotidiens, vous pouvez utiliser un emplacement de sort pour qu'il contienne cette infinité de possibilités au lieu de l'utiliser pour y préparer un sort. Vous pouvez utiliser cet emplacement de sort pour lancer n'importe quel sort issu de votre grimoire qui est d'au moins 2 rangs inférieur au rang de l'emplacement de sort que vous désignez. Vous ne disposez pas de sort préparé particulier dans cet emplacement tant que vous ne le lancez pas."
            ]
        },
        {
            "name"       : "Posture chancelante 1",
            "level"      : "1",
            "traits"     : [
                "Moine",
                "Posture"
            ],
            "required"   : [
                "qualifié en Duperie"
            ],
            "description": [
                "Vous adoptez une posture apparemment décontractée qui imite les mouvements de l'ivrogne, mouvante, laissant de fausses ouvertures et distrayant vos ennemis de vos mouvements véritables. Dans cette posture, vous obtenez un bonus de circonstances de +1 à vos tests de Duperie pour sports_martial_artsFeinter . Les seules Frappes que vous pouvez porter sont des attaques à mains nues de coups chancelants. Elles infligent 1d8 dégâts contondants, appartiennent au groupe pugilat et possèdent les traits à mains nues, agile, finesse, non-létal et traître.",
                "Si un ennemi vous touche avec une Frappe au corps-à-corps alors que vous êtes dans cette posture, il devient sentiment_very_dissatisfiedPris au dépourvu contre le prochain coup chancelant que vous lui portez avant la fin de votre prochain tour."
            ]
        },
        {
            "name"       : "Posture de fente 1",
            "level"      : "12",
            "traits"     : [
                "Guerrier",
                "Posture"
            ],
            "required"   : [
                "Fente, Frappe réactive"
            ],
            "description": [
                "Conditions Vous maniez une arme de corps-à-corps",
                "Le corps tendu pour frapper, vous pouvez vous attaquer à des ennemis éloignés. Lorsque vous êtes dans cette posture, vous pouvez utiliser sports_martial_artsFrappe réactive contre une créature hors de votre allonge mais à l'intérieur de celle dont vous bénéficieriez si vous faisiez une military_techFente . Si vous adoptez cette posture, vous augmentez la portée de la Frappe de 1,50 mètre."
            ]
        },
        {
            "name"       : "Posture de gorille 1",
            "level"      : "1",
            "traits"     : [
                "Moine",
                "Posture"
            ],
            "required"   : [],
            "description": [
                "Vous vous baissez jusqu'à toucher le sol et prenez une posture imposante en marchant sur vos poignets.",
                "Lorsque vous êtes dans cette posture, Les seules Frappes que vous pouvez porter sont des attaques à mains nues de coups du gorille. Elles infligent 1d8 dégâts contondants. Elles appartiennent au groupe pugilat et possèdent les traits à mains nues, prise d'élan, percutant, saisir et non-létal.",
                "Lorsque vous êtes dans la Posture du gorille, vous obtenez un bonus de circonstances de +2 aux tests d'Athlétisme pour sports_martial_artsEscalader et si vous obtenez un succès sur un test d'Athlétisme pour Escalader, il devient un succès critique."
            ]
        },
        {
            "name"       : "Posture de l'archer monastique 1",
            "level"      : "1",
            "traits"     : [
                "Moine",
                "Posture"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous ne portez pas d'armure et maniez un workArc long , un workArc court ou un arc avec le trait moine.",
                "Vous entrez dans une posture particulière à un art martial unique centré sur l'utilisation d'un arc.",
                "Lorsque vous adoptez cette posture, les seules Frappes que vous pouvez faire sont celles qui utilisent les arcs longs, les arcs courts ou les arcs avec le trait moine.",
                "Vous pouvez utiliser sports_martial_artsDéluge de coups avec ces arcs. Vous pouvez utiliser vos autres dons de moine ou capacités de moine qui nécessitent en principe des attaques à mains nues avec ces arcs lorsque vous attaquez à une portée correspondant à la moitié du premier facteur de portée (en principe 15 mètres pour un arc long et 9 mètres pour un arc court), tant que le don ou la capacité ne nécessite par une Frappe unique spécifique.",
                "flarePosture : Posture de l'archer monastique",
                "Spécial Lorsque vous choisissez ce don, vous devenez qualifié avec l'arc long, l'arc court et tout arc simple ou de guerre avec le trait moine. Si vous obtenez la capacité de classe Frappes expertes, votre degré de maîtrise avec ces armes passe à expert et si vous obtenez la capacité de classe Frappes de maître, votre maîtrise avec ces armes passe à maître."
            ]
        },
        {
            "name"       : "Posture de la forêt enchevêtrée 1",
            "level"      : "8",
            "traits"     : [
                "Moine",
                "Posture"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Vous ne portez aucune armure.",
                "Vous tendez vos bras, telles des branches noueuses, pour gêner les déplacements de vos adversaires. Vous pouvez faire des attaques à mains nues de branche cinglante. Ces attaques infligent 1d8 dégâts tranchants. Elles appartiennent au groupe pugilat et possèdent les traits agile, finesse, mains nues et non-létal. Tant que vous gardez cette posture et que vous pouvez agir, chaque ennemi dans votre allonge qui tente de s'éloigner doit réussir un jet de Réflexes, un test d'Acrobaties ou un test d'Athlétisme contre votre DD de classe ou être sentiment_very_dissatisfiedImmobilisé à cause de cette action. Vous pouvez également laisser l'ennemi se déplacer si vous préférez."
            ]
        },
        {
            "name"       : "Posture de la grue 1",
            "level"      : "1",
            "traits"     : [
                "Moine",
                "Posture"
            ],
            "required"   : [
                "Vous ne portez aucune armure"
            ],
            "description": [
                "Conditions Vous ne portez aucune armure",
                "Vos bras flottent comme les ailes d'une grue.",
                "Vous bénéficiez d'un bonus de circonstances de +1 à la CA mais les seules Frappes que vous pouvez faire sont des attaques d'aile de grue. Ces attaques infligent 1d6 dégâts contondants. Elles font partie du groupe pugilat et possèdent les traits agile, finesse, mains nues et non-létal. Tant que vous conservez cette posture, réduisez de 5 le DD pour vos Sauts en hauteur et en longueur et, quand vous Bondissez, vous pouvez ajouter 1,50 mètre horizontalement ou 60 centimètres verticalement."
            ]
        },
        {
            "name"       : "Posture de la lame tournoyante 1",
            "level"      : "14",
            "traits"     : [
                "Moine",
                "Posture"
            ],
            "required"   : [
                "Armes monacales"
            ],
            "description": [
                "Vous adoptez une posture attentive qui crée un lien puissant entre vous et vos armes de moine, vous permettant de les manipuler avec votre Qi même à distance. Toutes les armes de moine au corps-à-corps que vous maniez possédant le trait finesse obtiennent le trait lancer 3 mètres (sauf si elles bénéficient déjà du trait lancer avec une portée supérieure).",
                "Une fois que vous avez porté une Frappe de jet avec une telle arme, vous pouvez utiliser la précision de votre jet pour porter des frappes supplémentaires avec elle, même à distance. Partez de la case de la cible précédente de votre Frappe pour déterminer le facteur de portée et si la nouvelle cible bénéficie d'un abri. À la fin de votre tour, l'arme jetée vole directement vers vous en ligne droite. Si une barrière solide bloque son chemin, elle retombe au sol après avoir touché la barrière."
            ]
        },
        {
            "name"       : "Posture de la montagne 1",
            "level"      : "1",
            "traits"     : [
                "Moine",
                "Posture"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous ne portez aucune armure et vous êtes en contact avec le sol",
                "Vous prenez la posture implacable d'une montagne, une technique créée par des moines nains, vous permettant de frapper aussi violemment qu'une avalanche et de bloquer des coups avec vos habits. Les seules Frappes que vous pouvez porter sont des attaques à mains nues de chute de pierre. Ces attaques infligent casino1d8 dégâts contondants . Elles font partie du groupe pugilat et possèdent les traits mains nues, non-létal et percutant.",
                "Dans cette posture, vous bénéficiez d'un bonus d'objet de +4 à la CA et d'un bonus de circonstances de +2 à vos défenses si l'on tente de vous sports_martial_artsRepositionner , vous sports_martial_artsPousser , vous sports_martial_artsfaire un Croc-en-jambe ou autres effets de déplacement forcé. Vous avez toutefois un bonus de Dextérité maximal à votre CA de +0, ce qui signifie que vous n'ajoutez pas votre modificateur de Dextérité à votre CA et vos Vitesses sont toutes réduites de 1,50 mètre. Le bonus d'objet à la CA de Posture de la montagne se cumule avec les runes de puissance d'armure de vos Vêtements d'explorateur, l'Armure mystique et les bracelets d'armure."
            ]
        },
        {
            "name"       : "Posture de tir à bout portant 1",
            "level"      : "1",
            "traits"     : [
                "Guerrier",
                "Posture"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez une arme à distance",
                "Vous visez pour éliminer rapidement les ennemis à proximité. Quand vous utilisez une arme à distance ayant le trait volée dans cette posture, vous ne subissez pas la pénalité à vos jets d'attaque provenant du trait volée. Lorsque vous utilisez une arme à distance qui n'a pas le trait volée, vous obtenez un bonus de circonstances de +2 aux jets de dégâts sur les attaques contre des cibles situées dans le premier facteur de portée de l'arme."
            ]
        },
        {
            "name"       : "Posture de tir mobile 1",
            "level"      : "8",
            "traits"     : [
                "Guerrier",
                "Posture"
            ],
            "required"   : [],
            "description": [
                "Vos tirs sont meurtriers lorsque vous vous déplacez. Tant que vous gardez cette posture, vos Frappes à distance ne déclenchent pas de Frappes réactives ou d'autres réactions normalement déclenchées par une attaque à distance.",
                "Si vous avez sports_martial_artsFrappe réactive , vous pouvez l'utiliser avec une arme à distance chargée que vous maniez. Pour le faire, la créature à l'origine du déclenchement doit être à 1,50 mètre ou moins de vous."
            ]
        },
        {
            "name"       : "Posture de tirs multiples 1",
            "level"      : "16",
            "traits"     : [
                "Guerrier",
                "Posture"
            ],
            "required"   : [
                "Triple tir"
            ],
            "description": [
                "Conditions Vous maniez une arme à distance avec Rechargement 0.",
                "Vous prenez une position stable pour pouvoir tirer rapidement et précisément. Tant que vous gardez cette posture, votre pénalité de military_techDouble tir est réduit à -1. Si vous quittez votre position, cette posture se termine.",
                "Spécial Si vous possédez Triple tir, lorsque vous utilisez Double tir pour porter trois Frappes, la pénalité est de -2."
            ]
        },
        {
            "name"       : "Posture des étoiles lancées 1",
            "level"      : "2",
            "traits"     : [
                "Moine",
                "Posture"
            ],
            "required"   : [
                "Armes monacales"
            ],
            "description": [
                "Vous prenez une posture qui vous permet de lancer des workShuriken avec la rapidité de l'éclair.",
                "Dans cette posture, vous pouvez utiliser vos dons de moine ou capacités de moine qui nécessitent normalement des attaques à mains nues avec les shuriken à la place."
            ]
        },
        {
            "name"       : "Posture désarmante 1",
            "level"      : "6",
            "traits"     : [
                "Guerrier",
                "Posture"
            ],
            "required"   : [
                "qualifié en Athlétisme"
            ],
            "description": [
                "Conditions Vous maniez une seule arme de corps-à-corps à une main et ne tenez rien d'autre dans vos mains.",
                "Vous adoptez une posture d'escrime qui améliore votre contrôle sur votre arme. Lorsque vous êtes dans cette posture, vous bénéficiez d'un bonus de circonstances de +1 aux tests d'Athlétisme pour sports_martial_artsDésarmer et d'un bonus de circonstances de +2 à vos jets de Réflexes quand vous vous défendez contre les tests pour vous Désarmer. De plus, vous pouvez tenter de Désarmer les créatures de deux catégories de taille supérieures à la vôtre."
            ]
        },
        {
            "name"       : "Posture du cobra 1",
            "level"      : "4",
            "traits"     : [
                "Moine",
                "Posture"
            ],
            "required"   : [],
            "description": [
                "Vous adoptez une posture tendue enroulée comme celle du cobra dressé avec vos mains prêtes comme des crochets venimeux.",
                "Dans cette posture, les seules Frappes que vous pouvez faire sont des attaques à mains nues de crochets du cobra. Elles infligent 1d4 dégâts perforants. Elles appartiennent au groupe pugilat. Elles possèdent les traits à mains nues, agile, finesse, mortel d10 et venimeux.",
                "Dans la posture du cobra, vous obtenez un bonus de circonstances de +1 aux jets de Vigueur, au DD de Vigueur et vous obtenez une résistance au poison égale à la moitié de votre niveau."
            ]
        },
        {
            "name"       : "Posture du dragon 1",
            "level"      : "1",
            "traits"     : [
                "Moine",
                "Posture"
            ],
            "required"   : [
                "You are unarmored"
            ],
            "description": [
                "Conditions Vous ne portez aucune armure",
                "Vous prenez la posture d'un dragon et faites de redoutables balayages avec vos jambes, tel le fouettement de la queue d'un dragon. Vous pouvez faire des attaques de queue de dragon qui infligent 1d10 dégâts contondants. Ces attaques font partie du groupe pugilat et possèdent les traits mains nues, non-létal et prise d'élan. Tant que vous gardez cette posture, vous ignorez la première case de terrain difficile lorsque vous Marchez rapidement."
            ]
        },
        {
            "name"       : "Posture du loup 1",
            "level"      : "1",
            "traits"     : [
                "Moine",
                "Posture"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous ne portez aucune armure",
                "Vous prenez la posture d'un loup, le corps près du sol et les doigts courbés tels des crocs. Vous pouvez faire des attaques à mains nues de mâchoire de loup. Ces attaques infligent casino1d8 dégâts perforants , elles font partie du groupe pugilat et possèdent les traits agile, mains nues, non-létal et traître. Si vous prenez en tenaille une cible en étant dans cette posture, vos attaques à mains nues de mâchoire de loup obtiennent également le trait croc-en-jambe."
            ]
        },
        {
            "name"       : "Posture du paon 1",
            "level"      : "4",
            "traits"     : [
                "Moine",
                "Posture"
            ],
            "required"   : [
                "Armes monacales"
            ],
            "description": [
                "Conditions Vous maniez une épée qui possède le trait moine dans une main.",
                "Vous adoptez une posture fière en vous dressant tout en restant mobile avec toute la grâce et le sang froid d'un paon.",
                "Dans cette posture, les seules frappes que vous pouvez porter sont des frappes au corps-à-corps avec l'épée requise. Une fois par round, après avoir touché avec une Frappe d'épée ayant le trait moine, vous pouvez sports_martial_artsFaire un pas comme prochaine action en utilisant une action gratuite."
            ]
        },
        {
            "name"       : "Posture du ricochet (Guerrier) 1",
            "level"      : "6",
            "traits"     : [
                "Guerrier",
                "Posture"
            ],
            "required"   : [],
            "description": [
                "Vous adoptez une posture conçue pour faire rebondir vers vous vos armes de jet. Tant que vous êtes dans cette posture, toutes les armes de jet que vous utilisez dans le cadre d'une Frappe à distance pour infliger des dégâts contondants ou tranchants reviennent immédiatement dans votre main, vous permettant de les utiliser pour effectuer des Frappes supplémentaires. Vous devez vous trouver dans le facteur de portée de l'arme indiqué et disposer d'une main libre pour rattraper l'arme. Si vous effectuez une Frappe à distance avec une arme lancée en dehors de la portée indiquée, elle revient vers vous d'un nombre de cases égal à la portée indiquée de l'arme, puis tombe au sol."
            ]
        },
        {
            "name"       : "Posture du ricochet (Roublard) 1",
            "level"      : "8",
            "traits"     : [
                "Roublard",
                "Posture"
            ],
            "required"   : [],
            "description": [
                "Vous adoptez une posture conçue pour faire rebondir vos armes de jet. Tant que vous êtes dans cette position, toutes les armes de jet que vous utilisez dans le cadre d'une Frappe à distance pour infliger des dégâts contondants ou tranchants reviennent immédiatement dans votre main, vous permettant de les utiliser pour effectuer des Frappes supplémentaires. Vous devez vous trouver dans le facteur de portée indiqué de l'arme et disposer d'une main libre pour attraper l'arme. Si vous effectuez une Frappe à distance avec une arme de jet lancée en dehors son facteur de portée indiqué, elle revient vers vous d'un nombre de cases égale à la portée indiquée de l'arme, puis tombe au sol."
            ]
        },
        {
            "name"       : "Posture du sang-de-fer 1",
            "level"      : "8",
            "traits"     : [
                "Moine",
                "Posture"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous ne portez aucune armure",
                "Vous prenez la posture du fer impénétrable, en refusant de céder sous les coups. Vous pouvez faire des attaques à mains nues de balayage de fer. Ces attaques infligent 1d8 dégâts contondants, elles font partie du groupe pugilat et possèdent les traits balayage, mains nues, non-létal et parade. Tant que vous gardez la Posture du sang-de-fer, vous bénéficiez d'une résistance 2 contre tous les dégâts. La résistance passe à 3 au niveau 12, 4 au niveau 16 et 5 au niveau 20.",
                "flarePosture : Posture du sang-de-fer"
            ]
        },
        {
            "name"       : "Posture du tigre 1",
            "level"      : "1",
            "traits"     : [
                "Moine",
                "Posture"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous ne portez aucune armure",
                "Vous prenez la posture d'un tigre et pouvez faire des attaques de griffe de tigre. Ces attaques infligent 1d8 dégâts tranchants. Elles font partie du groupe pugilat et possèdent les traits agile, finesse, mains nues et non-létal.",
                "Sur un coup critique avec vos griffes de tigre, si vous infligez des dégâts, la cible subit 1d4 dégâts de saignement.",
                "Tant que votre Vitesse s'élève à 6 mètres au moins en gardant cette posture, vous pouvez Faire un pas de 3 mètres."
            ]
        },
        {
            "name"       : "Posture initiale f",
            "level"      : "14",
            "traits"     : [
                "Guerrier",
                "Gardien"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Vous faites votre jet d'initiative",
                "Vous prenez immédiatement et instinctivement une posture en cas de danger imminent, bien souvent avant d'en avoir vraiment conscience. Effectuez une action qui possède le trait posture."
            ]
        },
        {
            "name"       : "Posture perturbatrice 1",
            "level"      : "10",
            "traits"     : [
                "Guerrier",
                "Posture"
            ],
            "required"   : [],
            "description": [
                "La moindre distraction vous met en rage et vous êtes toujours prêt à contrecarrer les actions de vos ennemis.",
                "Tant que vous gardez cette posture, vous pouvez faire une sports_martial_artsFrappe réactive contre une créature à portée qui utilise une action de concentration, en plus des actions de manipulation ou de déplacement.",
                "De plus, vous interrompez l'action de concentration ou de manipulation à l'origine du déclenchement si votre Frappe est un succès (et pas seulement en cas de coup critique)."
            ]
        },
        {
            "name"       : "Posture réflexe f",
            "level"      : "12",
            "traits"     : [
                "Moine"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Vous déterminez l'initiative",
                "Vous prenez une posture sans avoir besoin d'y penser. Utilisez une action qui possède le trait posture."
            ]
        },
        {
            "name"       : "Poursuite réactive r",
            "level"      : "4",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Un adversaire adjacent s'éloigne de vous et vous pouvez atteindre au moins un espace adjacent à lui avec une action Marcher rapidement.",
                "Vous suivez l'adversaire pendant qu'il bat en retraite. Vous Marchez rapidement, mais vous devez terminer votre déplacement sur un emplacement adjacent à l'ennemi déclencheur. Votre déplacement ne déclenche pas de réaction de la part de l'ennemi déclencheur. Vous pouvez utiliser Poursuite réactive en Creusant, Escaladant, Volant ou en Nageant et non en Marchant rapidement si vous possédez le type de déplacement correspondant."
            ]
        },
        {
            "name"       : "Poussée brutale 1",
            "level"      : "2",
            "traits"     : [
                "Guerrier",
                "Persévérer"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez une arme de corps-à-corps à deux mains",
                "En utilisant l'élan de votre dernière attaque pour mettre votre poids dans une autre, vous faites tituber votre adversaire vers l'arrière. Faites une Frappe avec une arme de corps-à-corps à deux mains. Si vous touchez une cible d'une taille inférieure ou égale à la vôtre, celle-ci est sentiment_very_dissatisfiedPrise au dépourvu jusqu'à la fin de votre tour actuel et vous pouvez automatiquement la sports_martial_artsPousser en produisant les mêmes effets que l'action Pousser (y compris celui du succès critique si votre Frappe était un coup critique). Si vous vous déplacez pour suivre la cible, votre déplacement ne déclenche aucune réaction.",
                "Cette Frappe a l'effet d'échec suivant.",
                "Échec La cible est Prise au dépourvu jusqu'à la fin de votre tour actuel."
            ]
        },
        {
            "name"       : "Poussée catapulteuse",
            "level"      : "12",
            "traits"     : [
                "Guerrier"
            ],
            "required"   : [
                "Blocage agressif ou Poussée brutale"
            ],
            "description": [
                "Qu'il s'agisse de pousser vos adversaire avec un bouclier ou une arme de grande taille, vous avez appris à les repousser encore plus loin. Vous faites passer la distance à laquelle vous sports_martial_artsPoussez votre adversaire avec military_techBlocage agressif ou military_techPoussée brutale à 3 mètres en cas de succès ou à 6 mètres en cas de succès critique. Quand vous utilisez Blocage agressif, vous pouvez choisir si la cible est sentiment_very_dissatisfiedPrise au dépourvu ou Poussée. Quand vous réalisez une Poussée brutale, vous Poussez également la cible de 1,50 mètre en cas d'échec."
            ]
        },
        {
            "name"       : "Poussée d'adrénaline",
            "level"      : "1",
            "traits"     : [
                "Barbare",
                "Rage"
            ],
            "required"   : [],
            "description": [
                "Au cœur de la bataille, vous êtes capable d'incroyables démonstrations de force.",
                "Lorsque vous êtes en sports_martial_artsRage , augmentez vos limites maximales d'encombrement de 2 ; Vous obtenez aussi un bonus de statut de +1 aux tests d'Athlétisme pour porter de lourds objets, pour sports_martial_artsVous échapper et sports_martial_artsOuvrir de force ."
            ]
        },
        {
            "name"       : "Poussée empalante 2",
            "level"      : "14",
            "traits"     : [
                "Barbare",
                "Rage"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez une arme de corps-à-corps qui inflige des dégâts perforants.",
                "Vous empalez votre ennemi et le maintenez en place avec votre arme, et le faites saigner quand il se libère. Faites une Frappe avec une arme de corps-à-corps qui inflige des dégâts perforants. Si la Frappe touche et inflige des dégâts, votre cible est sentiment_very_dissatisfiedAgrippée jusqu'à ce qu'elle parvienne à S'échapper, que vous attaquiez avec l'arme à nouveau ou que vous Relâchiez l'arme requise, selon ce qui se produit en premier. Lorsque la cible n'est plus Agrippée, elle subit des dégâts de saignement égaux au nombre de dés de dégât de l'arme."
            ]
        },
        {
            "name"       : "Poussée en puissance",
            "level"      : "4",
            "traits"     : [
                "Guerrier"
            ],
            "required"   : [
                "Blocage agressif ou Poussée brutale"
            ],
            "description": [
                "Vous pouvez repousser des adversaires plus grands avec vos attaques. Vous pouvez utiliser military_techBlocage agressif ou military_techPoussée brutale contre une créature ayant jusqu'à deux catégories de taille de plus que vous.",
                "Quand une créature que vous Poussez ou repoussez avec un bouclier, une arme d'hast ou l'effet de critique spécialisé du gourdin doit arrêter son déplacement parce qu'elle bute contre un objet, elle subit un montant de casinodégâts égal à votre modificateur de Force (1 au minimum)."
            ]
        },
        {
            "name"       : "Pouvoir siphonné f",
            "level"      : "16",
            "traits"     : [
                "Sorcier"
            ],
            "required"   : [],
            "description": [
                "Fréquence Une fois par jour",
                "Conditions Vous n'avez pas encore agi à votre tour",
                "Vous tirez dans la réserve de magie de votre patron qui se trouve dans votre familier. Au cours de votre tour, vous pouvez Lancer un sort que votre familier connaît qui lui a été accordé par votre patron ou des leçons sans dépenser un emplacement de sort pour le faire (ou même l'avoir préparé). Le sort doit être d'au moins un rang inférieur que le plus haut rang du sort que vous pouvez lancer.",
                "Spécial Ce don possède le trait correspondant à la tradition des sorts que vous pouvez lancer (arcanique, divin, occulte ou primordial)."
            ]
        },
        {
            "name"       : "Prédire le mal f",
            "level"      : "1",
            "traits"     : [
                "Lié à une malédiction",
                "Divin",
                "Oracle"
            ],
            "required"   : [],
            "description": [
                "Fréquence Une fois par round",
                "Conditions Votre action précédente etait de Lancer un sort qui n'est pas un tour de magie et qui a infligé des dégâts.",
                "Votre magie résonne de manière inquiétante alors que vous entrevoyez une blessure dans l'avenir de la cible. Au début de votre prochain tour, la cible subit des dégâts égaux à deux fois le rang du sort déclencheur au moment où un malheur mineur et apparemment aléatoire lui arrive. Les dégâts et le type de malheur sont d'un type correspondant au sort. Par exemple, si vous avez infligé des dégâts de feu, une flamme peut s'allumer spontanément sur elle ou elle peut se brûler une main sur sa torche. La cible est alors temporairement immunisée contre Prédire le mal pendant 24 heures."
            ]
        },
        {
            "name"       : "Prélude inspirant",
            "level"      : "2",
            "traits"     : [
                "Barde"
            ],
            "required"   : [
                "Virtuose (muse de barde)"
            ],
            "description": [
                "Vous apprenez le tour de magie de composition auto_awesomePrélude inspirant qui aident vos alliés dans l'utilisation de leurs compétences par la nature inspirante de votre représentation."
            ]
        },
        {
            "name"       : "Préparation 1",
            "level"      : "12",
            "traits"     : [
                "Sophistication",
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Vous surveillez le champ de bataille, en calculant les possibilités. Vous obtenez une réaction supplémentaire, que vous pouvez utiliser avant le début de votre prochain tour pour toute réaction de roublard."
            ]
        },
        {
            "name"       : "Présence du patron",
            "level"      : "14",
            "traits"     : [
                "Sorcier"
            ],
            "required"   : [],
            "description": [
                "Votre patron peut diriger son attention à travers votre familier et sa simple présence devient un poids menaçant sur les esprits des autres êtres pour les distraire et occulter leur magie. Votre familier obtient l'activité sports_martial_artsPrésence du patron ."
            ]
        },
        {
            "name"       : "Présence éclairée",
            "level"      : "16",
            "traits"     : [
                "Aura",
                "Émotion",
                "Mental",
                "Moine"
            ],
            "required"   : [],
            "description": [
                "Vous diffusez une aura de résolution. Vous et vos alliés à 4,50 mètres ou moins bénéficiez d'un bonus de statut de +2 aux jets de Volonté contre les effets mentaux.",
                "flareEffet : Présence éclairée"
            ]
        },
        {
            "name"       : "Prévisible ! 1",
            "level"      : "4",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "En observant un adversaire, vous pouvez anticiper son prochain déplacement et vous préparer à le contrer ou à lui résister. Choisissez une cible et effectuez un test de Perception pour sports_martial_artsDeviner les intentions contre le DD de Duperie de votre adversaire ou un DD difficile pour le niveau de l'ennemi, s'il est plus élevé.",
                "Succès critique Vous discernez précisément la stratégie de la cible, obtenant un bonus de circonstances de +2 à la CA jusqu'au début de votre prochain tour et un bonus de circonstances de +2 à votre prochain jet de sauvegarde contre la cible avant la fin de votre prochain tour.",
                "Succès Vous déduisez l'idée générale de la stratégie de la cible ; Comme en cas de succès critique mais le bonus de circonstances est seulement de +1.",
                "Échec Vous ne parvenez pas à discerner la stratégie de la cible et n'obtenez aucun avantage.",
                "Échec critique Vous vous méprenez sur la stratégie de la cible et subissez une pénalité de circonstances de -1 à la CA contre la créature jusqu'au début de votre prochain tour et une pénalité de circonstances de -1 à votre prochain jet de sauvegarde contre la créature avant le début de votre prochain tour.",
                "flareEffet : Prévisible !"
            ]
        },
        {
            "name"       : "Prière désespérée f",
            "level"      : "1",
            "traits"     : [
                "Champion"
            ],
            "required"   : [],
            "description": [
                "Fréquence Une fois par jour",
                "Déclencheur Vous commencez votre tour et n'avez plus de points de focalisation.",
                "Vous faites appel à votre divinité pour requérir son aide. Vous gagnez un point de focus, qui ne peut être dépensé que pour lancer un sort de dévotion. Si vous ne dépensez pas ce point avant la fin de votre tour, il est perdu."
            ]
        },
        {
            "name"       : "Prise du sommeil 1",
            "level"      : "10",
            "traits"     : [
                "Mise hors de combat",
                "Moine"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous sentiment_very_dissatisfiedAgrippez ou sentiment_very_dissatisfiedEntravez une créature.",
                "Vous pincez les points cruciaux du système nerveux de votre cible pour bloquer ses capacités fonctionnelles. Faites un test d'Athlétisme pour sports_martial_artsSaisir la créature, avec les effets de succès et de succès critique suivants au lieu des effets habituels.",
                "Succès critique La cible tombe sentiment_very_dissatisfiedInconsciente pendant une minute, mais elle reste debout et ne lâche pas ce qu'elle tient en mains.",
                "Succès La cible est sentiment_very_dissatisfiedMaladroite 1 jusqu'à la fin de son prochain tour"
            ]
        },
        {
            "name"       : "Prodige du grimoire",
            "level"      : "1",
            "traits"     : [
                "Magicien"
            ],
            "required"   : [
                "qualifié en Arcanes"
            ],
            "description": [
                "Vous êtes particulièrement adepte de l'apprentissage des sorts à ajouter à votre grimoire. Vous obtenez le don de compétence military_techSténographie magique sans avoir besoin de remplir ses prérequis. De plus, lorsque vous obtenez un échec critique sur votre test pour Apprendre un sort, il devient un échec."
            ]
        },
        {
            "name"       : "Profitez du spectacle",
            "level"      : "2",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Vous vous adressez à un allié ou à tout observateur de votre combat, montrant à vos ennemis le peu d'attention qu'ils requièrent. Lorsque vous casinoReprésentation , vous pouvez choisir une unique créature dans les 9 mètres et utiliser les effets de succès, de succès critique et d'échec critique suivants au lieu des résultats normaux. Si vous le faites, Se produire obtient le trait bravade, ainsi que les traits auditifs et linguistiques normaux des représentations oratoires.",
                "Succès critique La cible subit une pénalité de circonstances de -2 aux jets d'attaque contre les créatures autres que vous jusqu'à la fin de son prochain tour.",
                "Succès La cible subit une pénalité de circonstances de -1 aux jets d'attaque contre les créatures autres que vous jusqu'à la fin de son prochain tour.",
                "Échec critique La cible bénéficie d'un bonus de circonstances de +1 aux jets d'attaque vous ciblant jusqu'à la fin de son prochain tour.",
                "flareEffet : Profitez du spectacle"
            ]
        },
        {
            "name"       : "Profusion de pièges artisanaux",
            "level"      : "16",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "Spécialiste des pièges artisanaux"
            ],
            "description": [
                "Vous pouvez préparer à l'avance un nombre apparemment illimité de pièges artisanaux et vous êtes toujours prêt à les déployer à l'approche d'ennemis peu méfiants. Doublez le nombre de pièges artisanaux que vous pouvez préparer grâce à military_techSpécialiste des pièges artisanaux ."
            ]
        },
        {
            "name"       : "Proie commune",
            "level"      : "14",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "Aide du gardien, Deux proies"
            ],
            "description": [
                "Lorsque vous chassez en duo, vous et votre allié pouvez tous deux pourchasser la même proie. Quand vous utilisez sports_martial_artsChasser une proie et désignez une unique proie, vous pouvez conférer les avantages de Chasser une proie et de votre spécialité du chasseur à un allié, en plus d'en bénéficier vous-même. L'allié bénéficie de ces avantages jusqu'à ce que vous utilisiez Chasser une proie de nouveau."
            ]
        },
        {
            "name"       : "Proie favorite",
            "level"      : "4",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [],
            "description": [
                "Vous avez analysé un type particulier de créature sauvage et parvenez à présent à la chasser plus facilement.",
                "Quand vous prenez ce don, choisissez la catégorie de proie favorite parmi la liste suivante : animaux, bêtes, dragons ou champignons et plantes. Quand vous faites votre jet d'initiative et que vous voyez un ennemi de la catégorie choisie, vous pouvez sports_martial_artsChasser une proie par une action gratuite, en désignant cet ennemi.",
                "Vous pouvez effectuer cette action gratuite même si vous n'avez pas encore identifié la créature grâce à l'action Se souvenir. L'avantage ne s'applique pas contre des ennemis jurés déguisés en d'autres créatures et le MJ détermine s'il s'applique contre une créature déguisée en une proie favorite."
            ]
        },
        {
            "name"       : "Projectile pénétrant 2",
            "level"      : "16",
            "traits"     : [
                "Barbare",
                "Sophistication",
                "Rage"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez une arme à distance ou de jet qui inflige des dégâts perforants.",
                "Vos projectiles ne sont pas ralentis par la chair ni les os. Faites une Frappe à distance ou avec une arme de jet qui inflige des dégâts perforants contre chaque créature sur crop_freeune ligne de 9 mètres (ceci n'utilise qu'un seul projectile malgré le nombre de Frappes). Ces attaques ignorent tout abris accordés aux créatures. Lancez les dégâts une seule fois et appliquez-les à chaque créature que vous avez touché. Chaque attaque est décomptée de votre pénalité d'attaques multiples mais n'augmente pas la pénalité tant que vous n'avez pas effectué toutes vos attaques."
            ]
        },
        {
            "name"       : "Projection en rotation 1",
            "level"      : "6",
            "traits"     : [
                "Attaque",
                "Moine"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous sentiment_very_dissatisfiedAgrippez ou sentiment_very_dissatisfiedEntravez une créature.",
                "Vous projetez votre adversaire au loin. Faites un test d' Athlétisme contre le DD de Vigueur de l'adversaire. Vous subissez une pénalité de circonstances de -2 si votre cible est d'une taille plus grande que vous, et une pénalité de circonstances de -4 si elle est plus grande que cela. Vous obtenez un bonus de circonstances de +2 si la cible est d'une taille plus petite que vous, et un bonus de circonstances de +4 si elle est plus petite que cela.",
                "Succès critique Vous projetez la créature à une distance de votre choix jusqu'à 3 mètres plus 1,50 mètre multiplié par votre modificateur de Force ( casino3+(1*@actor.abilities.str.mod) mètres). Elle subit des dégâts contondants égaux à votre modificateur de Force plus 1d6 par tranche de 3 mètres à laquelle vous la lancez ( casino((floor((10+(5*@actor.abilities.str.mod))/10))d6 + @actor.abilities.str.mod) contondant dégâts). Si vous lancez la cible d'au moins 3 mètres sur un obstacle solide, utilisez la distance maximale à laquelle vous auriez pu la lancer pour calculer les dégâts. La créature tombe sentiment_very_dissatisfiedÀ terre .",
                "Succès Comme pour un succès critique, mais la créature ne tombe pas À terre.",
                "Échec Vous ne projetez pas la créature.",
                "Échec critique Vous ne projetez pas la créature et elle n'est plus ni sentiment_very_dissatisfiedSaisie ni sentiment_very_dissatisfiedEntravée par vous."
            ]
        },
        {
            "name"       : "Projection tourbillonnante 1",
            "level"      : "18",
            "traits"     : [
                "Barbare",
                "Rage"
            ],
            "required"   : [
                "Maltraitance collatérale"
            ],
            "description": [
                "Vous faites tournoyer un ennemi pour le cogner sur toutes les créatures à proximité avant de le projeter au loin. Vous le military_techMaltraitez . Pendant cette Maltraitance, votre don military_techMaltraitance collatérale s'applique à tous les autres ennemis adjacents à vous. Vous pouvez alors lancer la créature sentiment_very_dissatisfiedAgrippée à 3 mètres où elle tombe sentiment_very_dissatisfiedÀ terre .",
                "Si l'ennemi que vous choisissez pour Maltraitance collatérale vous est aussi adjacent, il ne tente qu'un seul jet de sauvegarde et ne subit les dégâts qu'une fois."
            ]
        },
        {
            "name"       : "Protection de l'avatar r",
            "level"      : "20",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Votre ennemi vous porte un coup critique.",
                "Conditions Vous avez préparé le sort auto_awesomeAvatar .",
                "Dans les moments de danger, vous pouvez appeler la forme de votre divinité instantanément. Vous lancez le sort Avatar. Le coup critique déclencheur est réduit à une frappe ordinaire et ses dégâts sont appliqués après avoir obtenu les Points de vie temporaires accordés par le sort Avatar."
            ]
        },
        {
            "name"       : "Protection de la divinité",
            "level"      : "14",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [
                "Domaine avancé"
            ],
            "description": [
                "Lorsque vous faites appel au pouvoir de votre divinité pour remplir la promesse de son domaine, vous bénéficiez de la protection divine. Après avoir lancé un sort de domaine, vous obtenez une résistance contre tous les dégâts jusqu'au début de votre prochain tour. Le montant de cette résistance est égal au rang du sort de domaine que vous avez lancé."
            ]
        },
        {
            "name"       : "Protection du parangon 1",
            "level"      : "12",
            "traits"     : [
                "Guerrier",
                "Gardien",
                "Posture"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez un bouclier.",
                "Après avoir pris quelques instants pour adopter cette posture, votre bouclier est toujours en position sans même y penser. Tant que vous conservez cette posture, votre bouclier est constamment levé, comme si vous aviez utilisé l'action sports_martial_artsLever un bouclier , tant que vous remplissez les conditions de cette action."
            ]
        },
        {
            "name"       : "Protection énergétique f",
            "level"      : "6",
            "traits"     : [
                "Ensorceleur"
            ],
            "required"   : [],
            "description": [
                "Fréquence Une fois par tour",
                "Conditions Votre plus récente action a consisté à Lancer un sort qui n'est pas un tour de magie et qui a infligé des dégâts d'énergie.",
                "Vous convertissez l'énergie du dernier sort que vous avez lancé en une protection. Jusqu'au début de votre prochain tour, vous obtenez une résistance à un type d'énergie (acide, électricité, feu, froid, force, son, vitalité ou vide) égale à 4 + le rang du sort."
            ]
        },
        {
            "name"       : "Protégé du sorcier",
            "level"      : "6",
            "traits"     : [
                "Détection",
                "Sorcier"
            ],
            "required"   : [],
            "description": [
                "Vous forgez un lien magique avec une autre créature, vous permettant d'être alerté de l'état de la créature et de créer un conduit pour l'incantation de vos sorts. Au cours de vos préparatifs quotidiens, vous pouvez désigner une créature consentante qui devient votre protégé. Vous êtes toujours conscient de la direction dans laquelle elle se trouve par rapport à vous, de sa distance et de tout état qui l'affecte. De plus, vous pouvez lancer des sorts qui ont une portée contact sur votre protégé à une portée de 9 mètres. Ces effets persistent jusqu'à vos prochains préparatifs quotidiens.",
                "Spécial Ce don possède le trait correspondant à la tradition des sorts que vous lancez (arcanique, divin, occulte ou primordial.)"
            ]
        },
        {
            "name"       : "Providence oraculaire",
            "level"      : "20",
            "traits"     : [
                "Oracle"
            ],
            "required"   : [
                "Clarté oraculaire"
            ],
            "description": [
                "Votre mystère vous accorde un accès à de profondes réserves de pouvoir divin réellement miraculeux. Vous obtenez un emplacement de sort de rang 10 supplémentaire."
            ]
        },
        {
            "name"       : "Public choisi",
            "level"      : "2",
            "traits"     : [
                "Barde"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez façonner la zone de vos sorts de composition. Lorsque vous Lancez un sort de composition dont la zone est une émanation, vous pouvez en modifier la forme pour être un cône de 3 mètres plus large avec un maximum de deux fois la zone originelle. Par exemple, vous pourriez modifier un sort de composition qui affecte une crop_freeémanation de 9 mètres pour affecter crop_freeun cône de 12 mètres , mais une crop_freeémanation de 1,50 mètre ne pourrait devenir qu'un crop_freecône de 3 mètres ."
            ]
        },
        {
            "name"       : "Puiser dans le sang 1",
            "level"      : "1",
            "traits"     : [
                "Concentration",
                "Ensorceleur"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous bénéficiez d'un effet de magie du sang.",
                "La puissance dans votre sang vous permet d'accomplir des exploits magiques mineurs. Vous pouvez accomplir l'une des actions suivantes, en fonction de la tradition de votre lignage.",
                [
                    "Arcanique Votre esprit s'ouvre temporairement aux secrets du monde. Tentez de sports_martial_artsVous souvenir . Vous pouvez utiliser Arcanes à la place de la compétence normalement requise pour ce sujet. Si vous obtenez un échec critique sur ce test, il devient un échec.",
                    "Divine Quelle que soit la provenance divine de votre lignage, elle vous guide pour vous écarter instinctivement hors du danger, vous ou les autres. Vous Faites un pas ou vous sports_martial_artsRepositionnez une cible dans votre allonge en utilisant Religion pour ce test.",
                    "Occulte Des brumes étranges ou des couleurs tourbillonnantes cachent vos mouvements. Vous Faites un pas de 3 mètres.",
                    "Primordiale L'immense pouvoir de la nature résonne dans votre voix. Vous pouvez tenter un test de Nature pour sports_martial_artsDémoraliser une cible."
                ]
            ]
        },
        {
            "name"       : "Puissance de l'archimage",
            "level"      : "20",
            "traits"     : [
                "Magicien"
            ],
            "required"   : [
                "Art magique de l'archimage"
            ],
            "description": [
                "Vous avez maîtrisé les plus grands secrets de la magie arcanique. Vous obtenez un emplacement de sort de rang 10 supplémentaire."
            ]
        },
        {
            "name"       : "Puissance déferlante 1",
            "level"      : "8",
            "traits"     : [
                "Manipulation",
                "Oracle",
                "Mutamagie"
            ],
            "required"   : [],
            "description": [
                "Vous concentrez la puissance de votre sort pour outrepasser les résistances de vos ennemis. Si votre prochaine action consiste à Lancer un sort, le sort ignore un montant de résistance de la cible égale à votre niveau contre les types de dégâts suivants : spirituel, vitalité et vide.",
                "Cela s'applique à tous les dégâts infligés par le sort, y compris les dégâts persistants et les dégâts causés par un effet persistant du sort. Le sort n'ignore pas les immunités, mais uniquement les résistances."
            ]
        },
        {
            "name"       : "Puissance du hiérophante",
            "level"      : "20",
            "traits"     : [
                "Druide"
            ],
            "required"   : [],
            "description": [
                "Vous êtes intimement lié au monde naturel et sa pleine puissance s'écoule à travers vous. Vous obtenez un emplacement de sort de rang 10 supplémentaire."
            ]
        },
        {
            "name"       : "Puissante furtivité",
            "level"      : "18",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Vous avez appris à exploiter les ouvertures de vos ennemis. Vos dégâts d'attaque sournoise ignore toute immunité ou résistance aux dégâts de précision de la cible. De plus, quand vous sports_martial_artsÊtes furtif , vous pouvez désigner une créature à l'égard de laquelle vous êtes Non détecté à la fin de cette action. Sur la prochaine attaque que vous faites contre cette créature avant la fin de votre prochain tour, tout résultat sur un dé d'attaque sournoise que vous lancez contre cette créature qui est inférieur à 3 devient un 3 à la place. Cela n'a aucun effet si votre prochaine attaque contre la cible n'inflige pas de dégâts d'attaque sournoise. Si vous désignez une nouvelle créature, vous perdez cet avantage contre la précédente."
            ]
        },
        {
            "name"       : "Punition divine",
            "level"      : "1",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [
                "trait saint ou impie"
            ],
            "description": [
                "La bénédiction de votre divinité ne s'étend pas à vos ennemis jurés. Lorsque vous lancez auto_awesomeGuérison ou auto_awesomeMise à mal vous pouvez y ajouter votre trait saint ou impie. Si vous le faites, le sort blesse les créatures qui possèdent le trait opposé, même si normalement cela ne devrait pas les blesser. Le sort inflige des dégâts spirituels lorsqu'il est utilisé de cette façon. Par exemple, si vous avez le trait saint, vous pourriez ajouter le trait à votre sort de Guérison qui infligerait des dégâts spirituels à un fiélon qui possède le trait impie."
            ]
        },
        {
            "name"       : "Qi aligné r",
            "level"      : "6",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "Sorts Qi"
            ],
            "description": [
                "Fréquence Une fois par heure",
                "Déclencheur Vous Lancez un sort qui possède le trait moine.",
                "La puissance de votre Qi apaise vos blessures et vous donne de l'énergie pour la bataille. Vous casinoregagnez des Points de vie égaux à votre niveau plus votre modificateur de Sagesse."
            ]
        },
        {
            "name"       : "Qi foudroyant f",
            "level"      : "20",
            "traits"     : [
                "Moine"
            ],
            "required"   : [],
            "description": [
                "Fréquence Une fois toutes les 10 minutes",
                "Le Qi coule librement en vous. si votre prochaine action consiste à Lancer un sort Qi qui nécessite au moins deux actions, réduisez le nombre d'actions pour le lancer de 1 (1 action au minimum)."
            ]
        },
        {
            "name"       : "Quiafaitça ?",
            "level"      : "8",
            "traits"     : [
                "Peu courant",
                "Enquêteur"
            ],
            "required"   : [],
            "description": [
                "Fréquence Une fois par jour",
                "Vous considérez avec soin votre affaire et éliminez certains des détails. Lorsque vous sports_martial_artsSuivez une piste et apprenez qu'il y a un mystère plus grand, vous pouvez poser deux questions en rapport avec votre enquête quand vous l'ouvrez. Le MJ doit y répondre honnêtement par \"oui ou par \"non\", cependant si la réponse serait trompeuse ou si elle n'a pas d'application pratique pour votre enquête, le MJ peut répondre \"sans importance\". Vous ne pouvez pas utiliser Quiafaitça ? plus d'une fois pour la même piste, même au cours de plusieurs jours différents. Vos questions doivent provenir de la liste suivante, en l'appliquant au détail qui a motivé votre enquête :",
                [
                    "L'indice a-t-il été laissé par un [trait de créature] ? (Choisissez un trait de créature tel que humanoïde, mort-vivant ou nain ; ce trait doit être exact au moment où l'indice a été laissé.)",
                    "Cet indice a-t-il été laissé au cours de la dernière heure ?",
                    "Cet indice a-t-il été laissé au cours de la dernière journée ?",
                    "La créature qui a laissé cet indice était-elle dans un état émotionnel intense lorsque l'indice a été laissé ?",
                    "Est-ce que quelqu'un a tenté de cacher cet indice ?"
                ]
            ]
        },
        {
            "name"       : "Raclée brutale",
            "level"      : "2",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [
                "Trafic de voyou"
            ],
            "description": [
                "Vos coups critiques ébranlent la confiance de vos ennemis. Lorsque votre Frappe est un coup critique et inflige des dégâts, la cible est sentiment_very_dissatisfiedEffrayée 1"
            ]
        },
        {
            "name"       : "Rage animale 1",
            "level"      : "8",
            "traits"     : [
                "Barbare",
                "Concentration",
                "Métamorphose",
                "Primordial",
                "Rage"
            ],
            "required"   : [
                "Instinct animal"
            ],
            "description": [
                "Vous vous transformez en votre animal. Vous obtenez les effets du sort auto_awesomeForme animale au rang 3, mais vous utilisez vos propres statistiques, Points de vie temporaires et attaques à mains nues au lieu des statistiques conférées par Forme animale. Vous conservez également les pouvoirs constants de votre équipement. Si votre animal est une grenouille, l'allonge de votre langue atteint 4,50 mètres. Révoquer la transformation obtient le trait rage."
            ]
        },
        {
            "name"       : "Rage blessée r",
            "level"      : "4",
            "traits"     : [
                "Barbare"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Vous subissez des dégâts et êtes capable d'entrer en rage",
                "Vous hurlez de douleur, éveillant la rage qui sommeille en vous. Vous entrez en Rage."
            ]
        },
        {
            "name"       : "Rage contagieuse",
            "level"      : "20",
            "traits"     : [
                "Audible",
                "Barbare",
                "Rage",
                "Visuel"
            ],
            "required"   : [
                "Rage partagée"
            ],
            "description": [
                "Vous pouvez déclencher un état de frénésie chez vos alliés et leur faire bénéficier d'incroyables avantages. Vous pouvez ignorer les conditions d'utilisation de Rage partagée et l'utiliser plusieurs fois au cours d'une même Rage. Les alliés affectés par la military_techRage partagée peuvent choisir de bénéficier de la capacité de votre instinct et le pouvoir de spécialisation associé lié à la spécialisation martiale, mais pas à la spécialisation martiale supérieure. Ils doivent se conformer à toute restriction de votre instinct s'ils le font (comme le respect de l'anathème de l'instinct de superstition)"
            ]
        },
        {
            "name"       : "Rage débordante f",
            "level"      : "6",
            "traits"     : [
                "Barbare"
            ],
            "required"   : [
                "un instinct qui vous autorise à changer vos dégâts supplémentaires de la rage en un type de dégât différent"
            ],
            "description": [
                "Déclencheur Vous entrez en sports_martial_artsRage .",
                "Vous émettez une puissante décharge d'énergie instinctive lorsque vous libérez votre colère. Chaque créature dans les 6 mètres subit des casinodégâts égaux à votre niveau ( casinoVigueur contre votre DD de classe) du même type que celui de vos dégâts supplémentaires durant cette Rage."
            ]
        },
        {
            "name"       : "Rage invulnérable",
            "level"      : "8",
            "traits"     : [
                "Barbare"
            ],
            "required"   : [],
            "description": [
                "Même les armures les plus lourdes ne servent qu'à améliorer votre fureur débridée. Vous êtes qualifié en armures lourdes. Chaque fois que vous obtenez une capacité de classe de barbare qui vous confère une maîtrise experte ou supérieure avec les armures intermédiaires, vous obtenez également ce degré de maîtrise en armure lourde. Si vous avez l'action sports_martial_artsImpulsif , vous pouvez l'utiliser en portant une armure lourde."
            ]
        },
        {
            "name"       : "Rage partagée 1",
            "level"      : "8",
            "traits"     : [
                "Audible",
                "Barbare",
                "Rage",
                "Visuel"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous n'avez pas utilisé ce pouvoir depuis votre dernière Rage.",
                "Vous attisez la furie d'un allié. Tant que vous êtes enragé, une créature consentante qui se trouve dans un rayon de 9 mètres gagne les effets de l'action Rage, à la différence qu'elle peut toujours utiliser les actions qui possèdent le trait concentration. Elle n'obtient pas d'avantage supplémentaire venant de votre instinct, de vos dons, ou ce genre de chose.",
                "flareEffet : Rage partagée"
            ]
        },
        {
            "name"       : "Rapidité persistante",
            "level"      : "20",
            "traits"     : [
                "Moine"
            ],
            "required"   : [],
            "description": [
                "Vous vous déplacez aussi vite et aussi haut que le vent. Vous êtes accéléré en permanence.",
                "Vous pouvez effectuer votre action supplémentaire pour Marcher rapidement ou sports_martial_artsBondir ou pour fournir l'une des actions nécessaires pour sports_martial_artsSauter en hauteur ou sports_martial_artsen longueur ."
            ]
        },
        {
            "name"       : "Rappel parfait",
            "level"      : "20",
            "traits"     : [
                "Barde"
            ],
            "required"   : [
                "magnum opus"
            ],
            "description": [
                "Prérequis",
                "Vous produisez une autre création incroyable. Vous obtenez un emplacement de sort de rang 10 supplémentaire."
            ]
        },
        {
            "name"       : "Ratissage de la forêt enchevêtrée 1",
            "level"      : "14",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "Posture de la forêt enchevêtrée"
            ],
            "description": [
                "Conditions Vous êtes dans la Posture de la forêt enchevêtrée",
                "Vous repositionnez des ennemis avec des attaques de ratissage. Faites une Frappe de branche cinglante. Si vous touchez et infligez des dégâts, vous sports_martial_artsRepositionnez la cible de 3 mètres au maximum. Vous pouvez déplacer la cible à travers votre espace au cours de ce déplacement."
            ]
        },
        {
            "name"       : "Rechargement du gardien",
            "level"      : "16",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [],
            "description": [
                "Fréquence Une fois par round",
                "Conditions Votre dernière action a consisté à Lancer un sort de gardien.",
                "Votre maîtrise de la magie et des armes telle que l'arbalète, vous permet de combiner le maniement des deux avec aisance. Interagissez pour recharger l'arme que vous êtes en train de manier."
            ]
        },
        {
            "name"       : "Recherche minutieuse",
            "level"      : "6",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [],
            "description": [
                "Vous avez une connaissance approfondie dans vos domaines d'intérêt. Lorsque vous obtenez un succès sur un test pour Vous souvenir, vous obtenez une information supplémentaire ou contextuelle. Lorsque vous obtenez un succès critique sur un test pour Vous souvenir, vous obtenez une information supplémentaire ou un contextuelle ou pouvez une question complémentaire (le MJ choisit laquelle)."
            ]
        },
        {
            "name"       : "Réclamation du patron",
            "level"      : "18",
            "traits"     : [
                "Sorcier"
            ],
            "required"   : [],
            "description": [
                "Votre patron se manifeste partiellement au travers de votre familier pour réclamer le pouvoir d'un ennemi pour son propre compte. Votre familier obtient l'activité sports_martial_artsRéclamation du patron ."
            ]
        },
        {
            "name"       : "Reconstituer la scène",
            "level"      : "16",
            "traits"     : [
                "Concentration",
                "Enquêteur",
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Vous passez une minute à inspecter un endroit petit (tel qu'une unique pièce) pour vous faire une idée des évènements qui se sont produits au cours du dernier jour. Cela implique que vous puissiez vous déplacer dans la zone et étudier les empreintes de pieds, l'emplacement des objets, les boissons ou les traces de sang répandus, etc. Vous obtenez une impression mentale indistincte des évènements significatifs qui se sont produits ici. Cela vous donne des indices et des détails du passé, incluant l'ensemble des évènements et leur déroulement dans le temps, mais ce n'est pas un enregistrement parfait. Cela n'est pas suffisant pour identifier qui a été impliqué dans ces évènements si vous n'avez pas déjà conscience que la personne était là. En fonction de ce que décide le MJ, vous pouvez aussi percevoir différents petits détails qui pourraient servir d'indices importants comme une arme mémorable que quelqu'un a utilisé pour un meurtre ou le type de cape que quelqu'un portait en passant par là."
            ]
        },
        {
            "name"       : "Récupération défensive 1",
            "level"      : "12",
            "traits"     : [
                "Prêtre",
                "Concentration",
                "Mutamagie"
            ],
            "required"   : [
                "Source de Mise à mal ou de Guérison"
            ],
            "description": [
                "Votre foi vous offre une protection temporaire en plus des soins. Si la prochaine action que vous effectuez consiste à lancer auto_awesomeMise à mal ou auto_awesomeGuérison sur une unique cible et que celle-ci récupère des Points de vie grâce au sort, elle bénéficie également d'un bonus de statut de +2 à la CA et aux jets de sauvegarde pendant un round.",
                "flareEffet : Récupération défensive"
            ]
        },
        {
            "name"       : "Récupération héroïque 1",
            "level"      : "10",
            "traits"     : [
                "Prêtre",
                "Concentration",
                "Mutamagie"
            ],
            "required"   : [
                "Source de guérison"
            ],
            "description": [
                "Le pouvoir vivifiant de votre guérison revigore le bénéficiaire. Si la prochaine action que vous effectuez consiste à lancer auto_awesomeGuérison en ciblant une unique créature vivante et que celle-ci récupère des Points de vie grâce au sort, la cible bénéficie également de trois bonus jusqu'à la fin de son prochain tour : un bonus de statut de +1,50 mètre à sa Vitesse, un bonus de statut de +1 aux jets d'attaque et un bonus de statut de +1 aux jets de dégâts. De plus, si la cible est sentiment_very_dissatisfiedÀ terre , elle peut immédiatement se Relever par une action gratuite qui ne déclenche pas de réaction.",
                "flareEffet : Récupération héroïque"
            ]
        },
        {
            "name"       : "Récupération martiale",
            "level"      : "10",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [
                "expert avec l'arme de prédilection de votre divinité"
            ],
            "description": [
                "Frapper vos ennemis vous permet de bénéficier des louanges et de la protection de votre divinité. Quand vous infligez des dégâts à une créature en la Frappant avec l'arme de prédilection de votre divinité, vous obtenez un nombre de Points de vie temporaires égal à la moitié de votre niveau ou égal à votre niveau si la Frappe est un coup critique. Ces Points de vie temporaires persistent jusqu'à la fin de votre prochain tour.",
                "flareEffet : Récupération martiale"
            ]
        },
        {
            "name"       : "Récupération partagée",
            "level"      : "12",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [
                "Récupération martiale"
            ],
            "description": [
                "Quand votre divinité bénit vos actes martiaux, vous pouvez étendre cette faveur à vos alliés. Vous pouvez conférer les Points de vie temporaires obtenus grâce à military_techRécupération martiale à un allié dans les 3 mètres au lieu de vous les appliquer à vous-même. Vous pouvez conférer ces Points de vie temporaires à un allié différent à chaque fois, ce qui signifie que vous pourriez les conférer à plusieurs créatures au cours d'un même round."
            ]
        },
        {
            "name"       : "Recyclage de sort",
            "level"      : "18",
            "traits"     : [
                "Magicien"
            ],
            "required"   : [],
            "description": [
                "Vous avez découvert comment réutiliser une partie de vos emplacements de sort encore et encore. Vous pouvez passer 10 minutes à préparer un sort que vous avez déjà lancé dans la journée, vous redonnant accès à son emplacement. Le sort doit être de rang inférieur ou égal à 4 et ne pas avoir de durée. Vous pouvez le préparer de nouveau de la même façon, même si vous l'avez déjà fait au cours de la journée.",
                "Si vous disposez de la thèse arcanique Substitution de sort , vous pouvez préparer à la place un sort différent dans un emplacement dépensé, tant que le nouveau sort n'a pas de durée. Vous pouvez utiliser Substitution de sort sur cet emplacement de nouveau, mais vous restez restreint à ne préparer que des sorts sans durée dans cet emplacement jusqu'à ce que vous fassiez vos prochains préparatifs quotidiens."
            ]
        },
        {
            "name"       : "Redoutables pièges artisanaux",
            "level"      : "8",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "maître en Artisanat, Spécialiste des pièges artisanaux"
            ],
            "description": [
                "Les ennemis éprouvent plus de difficultés à éviter vos pièges artisanaux. Quand vous posez un piège, le DD du jet de sauvegarde de ce piège est égal à la valeur la plus élevée entre son DD normal ou votre DD de classe."
            ]
        },
        {
            "name"       : "Rééquilibrer f",
            "level"      : "16",
            "traits"     : [
                "Prêtre",
                "Concentration",
                "Mutamagie"
            ],
            "required"   : [],
            "description": [
                "Fréquence Une fois par heure",
                "Si votre prochaine action consiste à utiliser votre source divine pour lancer auto_awesomeGuérison ou auto_awesomeMise à mal à 3 actions, vous pouvez récupérer l'énergie résiduelle pour contrebalancer les forces opposées. En plus de ses effets normaux, vous utilisez Guérison ou Mise à mal pour tenter de contrer un effet divin dans la zone du sort."
            ]
        },
        {
            "name"       : "Réfléchir les dégâts",
            "level"      : "14",
            "traits"     : [
                "Ensorceleur"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez enrouler votre magie autour de vous comme une cape qui provoque chez ceux qui osent vous cibler avec des sorts de subir le même destin. Vous connaissez les effets de magie du sang suivants :",
                "Magie du sang - réfléchir les dégâts Votre sang vous garantit que ceux qui vous blessent avec la magie seront blessés en retour. La première fois que vous subissez des dégâts d'un sort avant le début de votre prochain tour, faites un jet d'attaque contre la créature qui a lancé le sort déclencheur. Si vous touchez, la créature subit la même quantité et le même type de dégâts que ceux que vous venez de subir. En cas de coup critique, la créature subit deux fois plus de dégâts."
            ]
        },
        {
            "name"       : "Réflexes divins",
            "level"      : "14",
            "traits"     : [
                "Champion"
            ],
            "required"   : [],
            "description": [
                "Au début de chacun de vos tours, Vous obtenez une réaction supplémentaire que vous pouvez utiliser uniquement pour effectuer votre réaction de champion"
            ]
        },
        {
            "name"       : "Réflexes tactiques",
            "level"      : "10",
            "traits"     : [
                "Guerrier"
            ],
            "required"   : [],
            "description": [
                "Vous êtes particulièrement prompt à punir les adversaires dès qu'ils baissent leurs gardes. Au début de chacun de vos tours quand vous récupérez vos actions, vous disposez d'une réaction supplémentaire que vous pouvez utiliser uniquement pour faire une sports_martial_artsFrappe réactive ."
            ]
        },
        {
            "name"       : "Réflexion faite r",
            "level"      : "18",
            "traits"     : [
                "Concentration",
                "Mental",
                "Magicien"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Vous lancez un sort mental qui cible une créature et la cible obtient un succès critique sur son jet de sauvegarde.",
                "Lorsque votre cible s'avère résistante à vos duperies magiques, vous pouvez les réessayer encore sur quelqu'un d'autre. Vous pouvez relancer le sort de nouveau avant la fin de votre prochain tour sur une créature différente sans dépenser d'emplacement de sort supplémentaire. Vous ne pouvez le faire que jusqu'à la fin de votre prochain tour, et vous ne pouvez pas utiliser Réflexion faite sur lui après le deuxième lancement du sort."
            ]
        },
        {
            "name"       : "Refocalisation de maléfice",
            "level"      : "12",
            "traits"     : [
                "Sorcier"
            ],
            "required"   : [],
            "description": [
                "Les enseignements de votre patron vous ont permis d'atteindre une meilleure capacité de concentration. Lorsque vous Refocalisez, vous remplissez votre réserve de focalisation."
            ]
        },
        {
            "name"       : "Réfutation divine r",
            "level"      : "6",
            "traits"     : [
                "Prêtre",
                "Divin"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Votre allié s'apprête à lancer un jet de sauvegarde contre une capacité magique d'une créature qui vous est adjacente.",
                "Conditions Vous maniez l'arme de prédilection de votre divinité.",
                "Vous vous battez contre les menaces magiques physiquement et spirituellement. Vous pouvez Frapper la créature adjacente avec l'arme de prédilection de votre divinité. Si vous êtes saint ou impie, la Frappe obtient ce trait. Si votre Frappe touche, tous vos alliés obtiennent un bonus de circonstances de +2 au jet de sauvegarde déclencheur (ou un bonus de circonstances de +3 en cas de coup critique).",
                "flareEffet : Réfutation divine"
            ]
        },
        {
            "name"       : "Regain de vigueur 1",
            "level"      : "8",
            "traits"     : [
                "Barbare",
                "Concentration",
                "Rage"
            ],
            "required"   : [],
            "description": [
                "Dans le brouillard de la bataille, vous récupérez rapidement votre vigueur rageuse. Vous obtenez une quantité de Points de vie temporaires égale à la moitié de votre niveau plus votre modificateur de Constitution. Si vous avez effectué une action d'attaque ce tour-ci, augmentez le nombre de Points de vie temporaires à votre niveau plus votre modificateur de Constitution. Ces Points de vie temporaires durent jusqu'à la fin de votre rage."
            ]
        },
        {
            "name"       : "Régurgitation de mutagène 1",
            "level"      : "4",
            "traits"     : [
                "Alchimiste",
                "Manipulation"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous êtes sous les effets d'un mutagène.",
                "Vous redirigez un mutagène dans votre corps pour cracher un jet d'acide gastrique sur un ennemi. Une créature à moins de 9 mètres subit 1d6 dégâts d'acide par tranche de 2 niveaux que vous possédez ( casino(floor(@actor.level/2))d6 acide ) avec un jet de casinoRéflexes contre votre DD de classe. En cas d'échec, la créature est également sentiment_very_dissatisfiedNauséeuse 1 (ou sentiment_very_dissatisfiedNauséeuse 2 en cas d'échec critique). La durée du mutagène prend fin immédiatement."
            ]
        },
        {
            "name"       : "Relais de sort r",
            "level"      : "6",
            "traits"     : [
                "Concentration",
                "Ensorceleur"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Un allié sports_martial_artsLance un sort et vous êtes dans la portée de ce sort",
                "Vous ouvrez le pouvoir de votre sang aux sorts de vos alliés en utilisant votre magie pour augmenter leur portée. Votre allié peut vous utiliser comme point d'origine pour son sort, en calculant la portée et la zone en partant de votre case au lieu de la sienne."
            ]
        },
        {
            "name"       : "Relier les points 2",
            "level"      : "6",
            "traits"     : [
                "Audible",
                "Concentration",
                "Enquêteur",
                "Linguistique"
            ],
            "required"   : [],
            "description": [
                "Les liens éphémères entre les gens, les lieux et les concepts sont invisibles pour la plupart des gens mais les déceler fait partie de votre fonds de commerce. Choisissez une créature alliée et une qui ne l'est pas. Vous devez être capable de les voir toutes les deux. Vous étudiez brièvement la façon qu'elles ont de bouger et tentez un test de casinoperception contre le plus élevé entre le DD de Duperie ou de Volonté de la créature non alliée. Les deux créatures sont ensuite temporairement immunisées à Relier les points pendant 10 minutes.",
                "Succès critique Vous décelez un moyen pour que votre allié tire avantage d'une faiblesse de l'autre cible et le lui faites savoir. Votre allié obtient le bonus d'investigation de sports_martial_artsSuivre une piste comme bonus de circonstances à toutes ses Frappes ou tests de compétence contre la créature jusqu'au début de votre prochain tour.",
                "Succès Comme en cas de succès critique, mais votre allié n'obtient le bonus que pour sa prochaine Frappe ou test de compétence contre la créature.",
                "flareEffet : Relier les points",
                "Échec Vous n'arrivez pas a trouver une connexion.",
                "Échec critique Vous n'interprétez pas correctement l'information, ce qui vous déconcerte temporairement. Vous êtes sentiment_very_dissatisfiedStupéfait 1 jusqu'à la fin de votre prochain tour."
            ]
        },
        {
            "name"       : "Remuer le couteau 1",
            "level"      : "6",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Conditions Votre dernière action était une Frappe au corps-à-corps qui a infligé des dégâts d'attaque sournoise à une cible sentiment_very_dissatisfiedPrise au dépourvu .",
                "Après avoir planté votre lame dans un point faible, vous élargissez la blessure. Vous infligez une quantité de casinodégâts de saignement à la cible égale à votre nombre de dés de dégâts d'attaque sournoise."
            ]
        },
        {
            "name"       : "Rengaine",
            "level"      : "14",
            "traits"     : [
                "Barde",
                "Exploration"
            ],
            "required"   : [],
            "description": [
                "En répétant inlassablement un motif, vous implantez une rengaine qui se répète sans cesse dans la tête de vos alliés sans cesse, les préparant à y réagir par la suite. Choisissez un tour de magie de composition et passez 10 minutes à répéter une mélodie, un chant, un discours, des séries de mouvements ou une représentation du même ordre qui incarne ce tour de magie. Cette activité obtient les traits appropriés au type de représentation. Vous implantez la rengaine chez les alliés qui peuvent vous voir ou vous entendre (en fonction de la représentation que vous avez utilisée) pendant l'entière activité.",
                "Une fois que vous avez créé la rengaine, vous pouvez effectuer un test de Représentation par une action gratuite pour l'activer. Ce test utilise le DD très difficile d'un niveau égal à celui du plus haut niveau des cibles présentes au moment de l'activation de la rengaine. En cas de succès, vous lancez le tour de magie sur tous les alliés qui ont appris la rengaine et qui peuvent percevoir votre Représentation ; en cas d'échec, la rengaine est perdue et gâchée. Comme c'est basé sur de précédentes répétitions, vous ne pouvez pas utiliser davantage d'actions gratuites comme auto_awesomeComposition prolongée ou auto_awesomeComposition fortissimo pour modifier la rengaine activée. Les alliés oublient la rengaine après son activation, si vous passez 10 minutes pour en implanter une autre ou au cours de vos prochains préparatifs quotidiens, selon l'évènement qui ce se produit en premier."
            ]
        },
        {
            "name"       : "Répercussions de fer",
            "level"      : "1",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "Cause : obéissance"
            ],
            "description": [
                "Désobéir à votre sports_martial_artsOrdre de fer se traduit par des conséquences durables. Si un ennemi refuse de s'agenouiller devant vous, vous pouvez lui infliger casinodégâts mentaux persistants au lieu des dégâts mentaux normaux. vous devez décider si les dégâts mentaux seront persistants avant que votre ennemi choisisse de s'agenouiller ou non. Le montant des dégâts est inchangé."
            ]
        },
        {
            "name"       : "Répertoire mystérieux",
            "level"      : "14",
            "traits"     : [
                "Oracle"
            ],
            "required"   : [],
            "description": [
                "Votre mystère contient des profondeurs inconnues de magie pas toujours associées avec le divin. Vous pouvez posséder dans votre répertoire de sort un sort qui n'est pas sur la liste des sorts divins, en plus des sorts que vous avez ajouté à votre liste de sorts du fait de capacités comme Accès divin.",
                "Vous lancez ce sort comme un sort divin. Vous pouvez décider quel sort vous ajoutez et de quelle tradition il est issu comme vous pourriez le faire avec tout sort d'oracle, mais vous ne pouvez utiliser ce don pour obtenir plus d'un sort d'une autre tradition dans votre répertoire de sort au même moment."
            ]
        },
        {
            "name"       : "Réponse rapide r",
            "level"      : "2",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Un allié est réduit à 0 Point de vie.",
                "Vous travaillez rapidement et efficacement en période de danger pour fournir l'assistance nécessaire. Vous sports_martial_artsMarchez rapidement vers l'allié déclencheur. Vous obtenez un bonus de circonstances de + 3 mètres à votre Vitesse durant ce déplacement."
            ]
        },
        {
            "name"       : "Repositionnement élégant 1",
            "level"      : "2",
            "traits"     : [
                "Guerrier",
                "Persévérer"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez une arme qui possède le trait finesse ou une arme d'hast.",
                "Alors que votre adversaire peine à se remettre de votre précédente attaque, vous accrochez son armure, ses vêtements ou sa chair pour le déplacer comme il vous plaît. Faites une Frappe au corps-à-corps avec une arme qui possède le trait finesse ou avec votre arme d'hast. Si vous touchez la cible et qu'elle est de taille inférieure ou égale à la vôtre, vous pouvez la sports_martial_artsRepositionner automatiquement avec les mêmes avantages que l'action Repositionner (y compris l'effet d'un coup critique si votre Frappe était un coup critique). Si vous maniez une arme d'hast, utilisez l'allonge de l'arme pour ce Repositionnement. Si vous maniez une arme d'hast, vous pouvez ignorer la condition de Repositionnement qui exige une main libre.",
                "Cette Frappe possède l'effet d'échec suivant.",
                "Échec La cible est sentiment_very_dissatisfiedPrise au dépourvu jusqu'à la fin de votre tour actuel."
            ]
        },
        {
            "name"       : "Repoussement amélioré",
            "level"      : "12",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "Frappe repoussante"
            ],
            "description": [
                "Quand vous réussissez à sports_martial_artsPousser une créature, augmentez la distance franchie par la créature et celle de votre déplacement pour la suivre de 1,50 mètre en cas de succès ou de 3 mètres en cas de succès critique. Si vous repoussez cible dans une autre créature un obstacle, les deux subissent casino1d6 dégâts contondants par tranche de 1,50 mètre de déplacement qui a été bloqué."
            ]
        },
        {
            "name"       : "Repousser 1",
            "level"      : "10",
            "traits"     : [
                "Barbare",
                "Rage"
            ],
            "required"   : [],
            "description": [
                "Conditions Votre dernière action est une Frappe réussie",
                "La puissance de votre coup fait reculer votre ennemi. Vous repoussez votre ennemi de 1,50 mètre, avec les mêmes effets que si vous l'aviez sports_martial_artsPoussé . Vous pouvez alors suivre l'ennemi, comme si vous aviez réussi à le Pousser."
            ]
        },
        {
            "name"       : "Reprends-toi 1",
            "level"      : "2",
            "traits"     : [
                "Barbare",
                "Concentration",
                "Rage"
            ],
            "required"   : [],
            "description": [
                "Vous vous concentrez sur votre rage afin de surmonter vos peurs et les effets des maladies. Vous réduisez la valeur de l'état sentiment_very_dissatisfiedEffrayé de 1 et faites un jet de casinoVigueur pour tenter de vous remettre de l'état Nauséeux, comme si vous aviez utilisé une action pour vomir. Vous réduisez la valeur de votre état Nauséeux de 1 sur un échec (mais pas sur un échec critique), de 2 sur un succès et de 3 sur un succès critique."
            ]
        },
        {
            "name"       : "Représailles habiles",
            "level"      : "1",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "cause : justice"
            ],
            "description": [
                "Vous pouvez utiliser sports_martial_artsFrappe punitive à une distance supérieure. Vous pouvez utiliser une arme à distance pour faire une Frappe à distance au lieu d'une Frappe au corps-à-corps pour Frappe punitive. L'ennemi doit se trouver à portée, mais pas dans votre allonge et il doit se trouver dans votre aura de champion.",
                "Vous pouvez aussi effectuer une Frappe au corps-à-corps contre des ennemis qui se trouvent un peu plus loin. Si l'ennemi qui a déclenché votre réaction n'est pas dans votre allonge mais est à moins de 1,50 mètre de votre allonge, vous pouvez Faire un pas au cours de votre réaction pour placer l'ennemi dans votre allonge avant d'effectuer une Frappe punitive au corps-à-corps."
            ]
        },
        {
            "name"       : "Représailles illimitées",
            "level"      : "20",
            "traits"     : [
                "Guerrier",
                "Gardien"
            ],
            "required"   : [],
            "description": [
                "Grâce à votre sixième sens en combat, vous pouvez réagir rapidement et de manière appropriée à toutes les situations.",
                "Au début du tour de chaque ennemi, vous disposez d'une réaction que vous pouvez utiliser uniquement durant ce tour pour n'importe quelle réaction issue d'un don ou d'une capacité de votre classe."
            ]
        },
        {
            "name"       : "Représentation martiale",
            "level"      : "1",
            "traits"     : [
                "Barde"
            ],
            "required"   : [
                "Combattant (muse de barde)"
            ],
            "description": [
                "Votre muse vous a appris à manier une plus grande variété d'armes que la plupart des bardes, ce qui vous permet d'intégrer sans effort vos représentations aux outils de combat.",
                "Lorsque le tour de magie auto_awesomeHymne de courage est actif et que vous blessez un ennemi avec une Frappe, la durée du sort est étendue de 1 round. Vous pouvez étendre une incantation particulière qu'une seule fois de la sorte.",
                "Si vous obtenez les tours de magie de composition auto_awesomeHymne de ralliement ou auto_awesomeChanson de force , vous pouvez appliquer cet avantage à ces tours de magie également."
            ]
        },
        {
            "name"       : "Résistance au poison",
            "level"      : "2",
            "traits"     : [
                "Alchimiste",
                "Druide"
            ],
            "required"   : [],
            "description": [
                "Alchimiste L'exposition répétée à des réactifs toxiques a fortifié votre corps contre les poisons de toutes sortes.",
                "Druide Votre affinité au monde naturel vous offre une protection contre certains de ses dangers.",
                "Vous obtenez une résistance au poison égale à la moitié de votre niveau et un bonus de statut de +1 à vos jets de sauvegarde contre les poisons."
            ]
        },
        {
            "name"       : "Résistance du lignage",
            "level"      : "8",
            "traits"     : [
                "Ensorceleur"
            ],
            "required"   : [],
            "description": [
                "Votre sang magique vous permet de mieux résister à la magie. Vous bénéficiez d'un bonus de statut de +1 à vos jets de sauvegarde contre les sorts et les effets magiques."
            ]
        },
        {
            "name"       : "Résonance énergétique r",
            "level"      : "6",
            "traits"     : [
                "Ensorceleur"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Vous devriez subir des dégâts d'acide, d'électricité, de froid, de feu ou de son d'un sort",
                "Conditions Vous disposez d'un emplacement de sort non utilisé d'un rang supérieur ou égal à celui du sort déclencheur",
                "Votre sang résonne d'une énergie magique, atténuant les effets des sorts nuisibles.",
                "Dépensez l'un de vos emplacements de sort d'un rang supérieur ou égal à celui du sort déclencheur. Vous obtenez une résistance contre l'un des types de dégâts de l'effet déclencheur égale à deux fois le rang de l'emplacement de sort dépensé."
            ]
        },
        {
            "name"       : "Reste à terre ! r",
            "level"      : "14",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [
                "maître en Athlétisme"
            ],
            "description": [
                "Déclencheur Un adversaire sentiment_very_dissatisfiedÀ terre dans votre allonge sports_martial_artsSe relève .",
                "Vous avez des techniques pour garder vos adversaires au sol. Faites un test d' casinoAthlétisme contre le DD de Vigueur de l'adversaire déclencheur. En cas de succès, l'action est interrompue, obligeant la créature à rester À terre. En cas de succès critique, il ne peut Se relever jusqu'à son prochain tour."
            ]
        },
        {
            "name"       : "Résurrecteur",
            "level"      : "16",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez faire en sorte qu'une créature que vous avez ramenée du bord de la mort prospère et continue de guérir. Quand vous restaurez les Points de vie d'une créature mourante ou que vous ramenez une créature morte à la vie et que vous lui permettez de récupérer des Points de vie, vous accordez à cette dernière Guérison accélérée 5 pendant 1 minute. Cette guérison accélérée prend fin si la créature tombe sentiment_very_dissatisfiedinconsciente .",
                "flareEffet : Résurrecteur"
            ]
        },
        {
            "name"       : "Retardement de piège r",
            "level"      : "8",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Un piège qui se trouve à votre portée est déclenché.",
                "Vous essayez de gripper le fonctionnement d'un piège pour en retarder les effets. Tentez un test de Vol pour sports_martial_artsDésamorcer un dispositif en ciblant le piège avec les résultats suivants au lieu des résultats normaux de l'action.",
                "Succès critique Soit vous empêchez que le piège se déclenche, soit vous retardez son activation jusqu'au début ou à la fin de votre prochain tour.",
                "Succès Comme ci-dessus mais le MJ choisit ce qui est le pire pour vous.",
                "Échec Aucun effet.",
                "Échec critique Vous êtes sentiment_very_dissatisfiedPris au dépourvu jusqu'au début de votre prochain tour."
            ]
        },
        {
            "name"       : "Révélation avancée",
            "level"      : "6",
            "traits"     : [
                "Oracle"
            ],
            "required"   : [
                "Sort de révélation initial"
            ],
            "description": [
                "La puissance divine vous révèle de plus grands mystères. Vous apprenez un sort de révélation avancé associé à votre mystère."
            ]
        },
        {
            "name"       : "Révélation supérieure",
            "level"      : "12",
            "traits"     : [
                "Oracle"
            ],
            "required"   : [
                "sort de révélation initial"
            ],
            "description": [
                "Vous débloquez des révélations plus profondes cachées dans votre mystère. Vous gagnez le sort de révélation supérieure de votre mystère."
            ]
        },
        {
            "name"       : "Revers rapide 1",
            "level"      : "4",
            "traits"     : [
                "Guerrier",
                "Sophistication",
                "Persévérer"
            ],
            "required"   : [],
            "description": [
                "Conditions Deux ennemis au moins vous prennent en tenaille.",
                "Vous retournez la prise en tenaille de vos ennemis contre eux d'un rapide revers. Faites une Frappe au corps-à-corps contre l'un des ennemis qui vous prend en tenaille et faites une deuxième Frappe avec la même arme ou avec une attaque à mains nues contre un ennemi différent qui vous prend en tenaille. Cette seconde Frappe est portée en utilisant la même pénalité d'attaques multiples que l'attaque initiale et n'est pas prise en compte dans le calcul de votre pénalité d'attaques multiples."
            ]
        },
        {
            "name"       : "Revivification alchimique",
            "level"      : "20",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Si vous mourez alors que vous êtes sous l'effet d'au moins un élixir, les composés alchimiques présents dans votre sang vous ramènent à la vie au début de votre prochain tour. Vous bénéficiez des effets d'un workÉlixir de rajeunissement , puis d'un workÉlixir de vie ultime , puis encore soit un workMutagène bestial majeur , un workMutagène de juggernaut majeur ou d'un workMutagène de vif-argent majeur comme si vous veniez de l'absorber. Ces réactions automatiques ne bénéficient pas des avantages spéciaux que vous ajoutez lorsque vous créez ou utilisez ces objets. Comme vous êtes mort, tous les autres composés alchimiques présents dans votre sang sont inertes. Après avoir été ranimé, vous devenez temporairement immunisé contre Revivification alchimique pendant casino1d4 heures ."
            ]
        },
        {
            "name"       : "Ricochet extraordinaire 1",
            "level"      : "12",
            "traits"     : [
                "Concentration",
                "Guerrier",
                "Persévérer"
            ],
            "required"   : [
                "Visée extraordinaire"
            ],
            "description": [
                "Après que votre premier tir vous ait permis de repérer la position de votre ennemi, vous effectuez un deuxième tir qui ricoche autour des obstacles pour finalement frapper précisément votre cible. Faites une Frappe d'arme à distance contre une créature que vous avez déjà attaquée lors de ce tour. Vous ignorez l'état sentiment_very_dissatisfiedMasqué et tous les abris dont elle bénéficie."
            ]
        },
        {
            "name"       : "Riposte directive",
            "level"      : "14",
            "traits"     : [
                "Guerrier"
            ],
            "required"   : [
                "Riposte en duel"
            ],
            "description": [
                "En déplaçant votre poids et en inclinant votre arme, vous guidez votre adversaire vers une position plus favorable. Quand vous utilisez military_techRiposte en duel pour Frapper et que vous touchez, vous pouvez la sports_martial_artsRepositionnez jusqu'à 3 mètres."
            ]
        },
        {
            "name"       : "Riposte en duel r",
            "level"      : "8",
            "traits"     : [
                "Guerrier"
            ],
            "required"   : [
                "Parade en duel"
            ],
            "description": [
                "Déclencheur Une créature dans votre allonge obtient un échec critique lors d'une Frappe contre vous.",
                "Conditions Vous bénéficiez des avantages de military_techParade en duel .",
                "Vous ripostez élégamment contre votre ennemi qui gesticule. Faites une Frappe au corps-à-corps ou tentez de sports_martial_artsDésarmer la créature déclencheuse."
            ]
        },
        {
            "name"       : "Riposte en duel améliorée",
            "level"      : "12",
            "traits"     : [
                "Guerrier"
            ],
            "required"   : [
                "Riposte en duel"
            ],
            "description": [
                "Vous faites virevolter et tournoyer votre arme en frappant vos adversaires dès que la moindre ouverture ou qu'un moment de faiblesse se présente. Vous pouvez utiliser military_techRiposte en duel même si vous ne bénéficiez pas des avantages de military_techParade en duel . Au début de chacun de vos tours, vous obtenez une réaction supplémentaire que vous ne pouvez utiliser que pour porter une Riposte en duel."
            ]
        },
        {
            "name"       : "Riposte heureuse",
            "level"      : "16",
            "traits"     : [
                "Fortune",
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Vous tirez avantage des ouvertures de votre adversaire avec des probabilités extraordinaires.",
                "Lorsque vous faites une Riposte opportune , lancez deux fois le jet d'attaque et conservez le meilleur résultat."
            ]
        },
        {
            "name"       : "Riposte invraisemblable",
            "level"      : "14",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [
                "Riposte opportune"
            ],
            "description": [
                "Votre riposte peut dévier les attaques pour les ramener jusqu'à leur source. Vous pouvez utiliser Riposte opportune avec le déclencheur “Un ennemi en dehors de votre allonge obtient un échec critique à un jet d'attaque contre vous” en plus de son déclencheur habituel.",
                "Lorsque vous utilisez Riposte opportune avec ce nouveau déclencheur contre une attaque à distance, votre Frappe dévie une partie de l'effet déclencheur en retour vers sa cible. Comparez le résultat de votre jet d'attaque à la CA de l'ennemi déclencheur. Si vous touchez, vous infligez le montant normal de dégâts pour votre Frappe, mais le type de dégât change pour prendre celui de l'attaque déclencheuse.",
                "Par exemple, si vous avez utilisé Riposte opportune pour dévier un auto_awesomeTrait flamboyant , votre Frappe infligera des dégâts de feu au lieu de son type de dégât normal."
            ]
        },
        {
            "name"       : "Riposte jumelée r",
            "level"      : "10",
            "traits"     : [
                "Guerrier",
                "Rôdeur"
            ],
            "required"   : [],
            "description": [
                "Déclencheur La Frappe que vous porte une créature dans votre allonge est un échec critique.",
                "Conditions Vous bénéficiez des avantages de military_techParade jumelée .",
                "Une parade astucieuse avec une arme laisse une ouverture dans la défense de votre adversaire pour l'autre arme. Effectuez une Frappe au corps-à-corps ou une action pour sports_martial_artsDésarmer l'adversaire déclencheur."
            ]
        },
        {
            "name"       : "Riposte jumelée améliorée (Guerrier)",
            "level"      : "14",
            "traits"     : [
                "Guerrier"
            ],
            "required"   : [
                "Riposte jumelée"
            ],
            "description": [
                "Vos armes forment une sorte de flou, bloquant et cinglant vos ennemis. Vous pouvez utiliser military_techRiposte jumelée , même si vous ne bénéficiez pas de military_techParade jumelée . Au début de chacun de vos tours, vous obtenez une réaction supplémentaire que vous ne pouvez utiliser que pour faire une Riposte jumelée."
            ]
        },
        {
            "name"       : "Riposte jumelée améliorée (Rôdeur)",
            "level"      : "16",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "Riposte jumelée"
            ],
            "description": [
                "Au début de chacun de vos tours, vous obtenez une réaction supplémentaire que vous ne pouvez utiliser que pour porter une military_techRiposte jumelée . Vous pouvez utiliser cette réaction supplémentaire, même si vous ne bénéficiez pas des avantages de military_techParade jumelée ."
            ]
        },
        {
            "name"       : "Riposte machinale",
            "level"      : "10",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [
                "Riposte opportune"
            ],
            "description": [
                "Vous pouvez riposter presque sans y penser. Au début de chacun de vos tours, lorsque vous regagnez vos actions, vous obtenez une réaction supplémentaire qui ne peut être utilisée que pour accomplir une sports_martial_artsRiposte opportune ."
            ]
        },
        {
            "name"       : "Riposte rapide",
            "level"      : "18",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "réaction de champion"
            ],
            "description": [
                "Les transgressions de vos ennemis vous poussent à riposter avec une rapidité divine. Lorsqu'un ennemi déclenche la réaction de votre champion, vous êtes sentiment_very_dissatisfiedAccéléré lors de votre prochain tour. Vous pouvez utiliser l'action supplémentaire pour vous rapprocher ou Frapper cet ennemi."
            ]
        },
        {
            "name"       : "Rites de convocation",
            "level"      : "4",
            "traits"     : [
                "Sorcier"
            ],
            "required"   : [],
            "description": [
                "Votre patron vous accorde le pouvoir de convoquer d'autres créatures pour vous aider. Choisissez un sort de Convocation (tel que auto_awesomeConvocation d'animal , auto_awesomeConvocation de créature artificielle ,...) qui apparaît sur la liste de sort de votre tradition de lanceur de sort. Vous pouvez passer 10 minutes en communion avec votre familier pour remplacer un sort que vous avez préparé dans un des emplacements de sort de sorcier par le sort choisi intensifié au même rang. Le sort que vous remplacez doit être au moins du rang minimum du sort de Convocation."
            ]
        },
        {
            "name"       : "Rites de transfiguration",
            "level"      : "14",
            "traits"     : [
                "Sorcier"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez adapter le pouvoir de votre patron de transformer d'autres créatures en des formes correspondant davantage à ses désirs. Votre familier apprend auto_awesomeMétamorphose maudite , même si Métamorphose maudite n'est pas sur la liste des sorts de votre tradition. En passant 10 minutes en communion avec votre familier, vous pouvez remplacer un sort de rang supérieur ou égal à 6 que vous avez préparé dans un de vos emplacements de sorts de sorcier par un sort de Métamorphose maudite du même rang."
            ]
        },
        {
            "name"       : "Ronces empaleuses",
            "level"      : "16",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "ordre de la feuille"
            ],
            "description": [
                "Vous pouvez remplir une zone de ronces dévastatrices. Vous obtenez le sort d'ordre military_techRonces empaleuses ."
            ]
        },
        {
            "name"       : "Roncier du rôdeur",
            "level"      : "6",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "Sorts de gardien"
            ],
            "description": [
                "Vous pouvez utiliser les plantes pour emprisonner vos adversaires dans leurs épines. Vous obtenez le sort de gardien auto_awesomeRoncier du rôdeur . Augmentez le nombre de Points de focalisation de votre réserve de focalisation de 1."
            ]
        },
        {
            "name"       : "Rosser 1",
            "level"      : "8",
            "traits"     : [
                "Barbare",
                "Rage"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous avez sentiment_very_dissatisfiedAgrippé ou sentiment_very_dissatisfiedEntravé un ennemi",
                "Vous rossez votre ennemi. Un ennemi que vous avez Agrippé ou Entravé subit une quantité de dégâts contondants égale à votre modificateur de Force plus vos dégâts de Spécialisation martiale plus vos dégâts de sports_martial_artsRage , avec un jet de casinoVigueur contre votre DD de classe."
            ]
        },
        {
            "name"       : "Roulade agile",
            "level"      : "8",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [
                "Esquive agile"
            ],
            "description": [
                "Vous faites une roulade pour échapper à un danger imminent. Vous pouvez utiliser military_techEsquive agile avant de tenter un jet de Réflexes en plus de son déclencheur original. Si vous le faites, le bonus de circonstances s'applique à votre jet de Réflexes contre l'effet déclencheur.",
                "Lorsque vous utilisez Esquive agile et que l'attaque déclencheuse est un échec ou un échec critique ou lorsque vous obtenez un succès ou un succès critique contre le jet de sauvegarde, vous pouvez aussi Marcher rapidement jusqu'à 3 mètres comme faisant partie de la réaction. Si vous le faites, la réaction obtient le trait déplacement. Vous pouvez utiliser Roulade agile lorsque vous sports_martial_artsVolez ou sports_martial_artsNagez au lieu de Marcher rapidement si vous disposez des types de déplacements correspondant."
            ]
        },
        {
            "name"       : "Roulade défensive f",
            "level"      : "14",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Fréquence Une fois toutes les 10 minutes",
                "Déclencheur Une attaque physique devrait vous réduire à 0 Point de vie.",
                "En effectuant une roulade pour disperser la force du coup, vous pouvez échapper partiellement à une attaque mortelle et rester conscient. Vous subissez la moitié des dégâts de l'attaque déclencheuse."
            ]
        },
        {
            "name"       : "Roulade en chute libre",
            "level"      : "1",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [
                "qualifié en Acrobaties"
            ],
            "description": [
                "Grâce à des mouvements agiles, un atterrissage gracieux et un peu de chance, vous pouvez vous arranger pour tomber de hauteurs spectaculaires sans une égratignure. Vous obtenez le don de compétence military_techChute féline et la réaction military_techRoulade en chute libre ."
            ]
        },
        {
            "name"       : "Roulade spectaculaire",
            "level"      : "8",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [
                "Esquive spectaculaire"
            ],
            "description": [
                "Vous pouvez utiliser military_techEsquive spectaculaire avant de tenter un jet de Réflexes, en plus de son déclencheur originel. Si vous le faites, le bonus de circonstances s'applique à votre jet de Réflexes contre l'effet déclencheur.",
                "Lorsque vous utilisez Esquive spectaculaire et que l'attaque déclencheuse est un échec ou un échec critique ou lorsque vous obtenez un succès ou un succès critique sur le jet de sauvegarde, vous pouvez aussi Marcher rapidement jusqu'à 3 mètres au cours de la réaction. Si vous le faites, la réaction obtient le trait déplacement. Vous pouvez utiliser Roulade spectaculaire en Volant ou en Nageant au lieu de Marcher rapidement, si vous possédez le type de déplacement correspondant."
            ]
        },
        {
            "name"       : "Ruée zélée r",
            "level"      : "8",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Vous lancez un sort divin qui prend 1 action ou plus à lancer et qui n'affecte que vous ou votre équipement.",
                "Vous vous bénissez alors que vous vous déplacez. Marchez rapidement de 3 mètres. Si le sort vous a coûté au moins 2 actions, vous pouvez Marcher rapidement à votre vitesse."
            ]
        },
        {
            "name"       : "Rugissement du dragon 1",
            "level"      : "6",
            "traits"     : [
                "Audible",
                "Émotion",
                "Terreur",
                "Mental",
                "Moine"
            ],
            "required"   : [
                "Posture du dragon"
            ],
            "description": [
                "Conditions Vous êtes dans la military_techPosture du dragon",
                "Vous poussez un rugissement qui terrorise vos ennemis. Les ennemis dans une crop_freeémanation de 4,50 mètres doivent chacun réussir un jet de casinoVolonté contre votre DD d'Intimidation ou être sentiment_very_dissatisfiedEffrayés 1 (ou Effrayés 2 en cas d'échec critique). Quand une créature effrayée par le rugissement commence son tour adjacent à vous, elle ne peut réduire la valeur de son état effrayé en dessous de 1 lors de ce tour.",
                "Votre première attaque qui touche une créature Effrayée après votre rugissement et avant la fin de votre prochain tour bénéficie d'un bonus de circonstances de +4 aux dégâts.",
                "Après avoir utilisé Rugissement du dragon, vous ne pouvez plus le faire pendant casino1d4 rounds . Ses effets prennent immédiatement fin si vous quittez la Posture du dragon. Les créatures dans la zone sont ensuite temporairement immunisées aux effets de ce don pendant 1 minute."
            ]
        },
        {
            "name"       : "S'habituer à la déception f",
            "level"      : "12",
            "traits"     : [
                "Bravade",
                "Bretteur"
            ],
            "required"   : [
                "expert en Intimidation"
            ],
            "description": [
                "Conditions Votre tour commence et une cible dans les 9 mètres a obtenu un échec sur une attaque ou un test de compétence a votre encontre lors de son tour précédent.",
                "Vous capitalisez sur l'échec de votre adversaire en adoptant une attitude hautaine et en lui rappelant l'écart de compétences qui vous sépare de lui. Vous tentez de sports_martial_artsDémoraliser l'adversaire. Quel que soit le résultat, la cible devient temporairement immunisée pendant 1 minute."
            ]
        },
        {
            "name"       : "Sabotage",
            "level"      : "4",
            "traits"     : [
                "Mise hors de combat",
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous disposez d'une main libre",
                "Vous endommagez subtilement l'équipement des autres. Choisissez un objet qu'une créature dans votre allonge manie ou porte. L'objet doit posséder des éléments mobiles que vous pourriez saboter (un arc court pourrait être saboté, mais une épée longue ne le pourrait pas). Vous faites un test de casinoVol contre le DD de Réflexes de la créature. Les dégâts infligés par Sabotage ne peuvent pas amener l'objet sous son Seuil de rupture.",
                "Succès critique Vous infligez une quantité de dégâts égale à quatre fois votre bonus de maîtrise en Vol.",
                "Succès Vous infligez une quantité de dégâts égale au double de votre bonus de maîtrise de Vol.",
                "Échec critique La cible est temporairement immunisée contre votre Sabotage pendant 1 jour."
            ]
        },
        {
            "name"       : "Sacrifice du champion",
            "level"      : "12",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "Vous n'êtes pas impie"
            ],
            "description": [
                "Vous endurez les souffrances d'autrui pour qu'ils puissent vivre. Vous pouvez lancer le sort de dévotion auto_awesomeSacrifice du champion ."
            ]
        },
        {
            "name"       : "Sagacité du domaine",
            "level"      : "2",
            "traits"     : [
                "Oracle"
            ],
            "required"   : [],
            "description": [
                "Chaque mystère d'oracle touche à un domaine divin des divinités qui l'alimentent. Vous avez accès à ce pouvoir. Choisissez un des domaines associés à votre mystère pour lequel vous n'avez pas déjà un sort de domaine initial. Vous obtenez un sort de domaine initial de ce domaine, que vous pouvez lancer comme un sort de révélation.",
                "Spécial Vous pouvez sélectionner ce don plusieurs fois et choisir, à chaque fois, un domaine différent en gagnant ainsi son sort de domaine comme un sort de révélation."
            ]
        },
        {
            "name"       : "Saignée 1",
            "level"      : "2",
            "traits"     : [
                "Attaque",
                "Ensorceleur"
            ],
            "required"   : [],
            "description": [
                "Conditions Votre plus récente action a consisté à Lancer un sort qui n'était pas un tour de magie et qui vous a accordé un effet de magie du sang.",
                "Vous canalisez l'énergie résiduelle du dernier sort que vous avez lancé dans une saignée à distance. Faites un jet d'attaque de sort à distance contre la CA d'une cible située dans les 18 mètres. Cette attaque inflige des dégâts de saignement égaux au rang du sort que vous venez de lancer."
            ]
        },
        {
            "name"       : "Sang magique ancestral",
            "level"      : "1",
            "traits"     : [
                "Ensorceleur"
            ],
            "required"   : [],
            "description": [
                "La magie de votre lignage se mélange à celle de vos ancêtres. Vous obtenez l'effet de Magie du sang de votre lignage lorsque vous lancez un sort autre qu'un tour de magie que vous avez obtenu grâce à un héritage ou un don ancestral, en plus des circonstances qui déclenchent habituellement votre Magie du sang."
            ]
        },
        {
            "name"       : "Santé divine",
            "level"      : "2",
            "traits"     : [
                "Champion"
            ],
            "required"   : [],
            "description": [
                "Votre foi vous rend résistant à la maladie, vous protégeant lorsque vous apportez votre soutien aux malades. Vous bénéficiez d'un bonus de statut de +2 aux jets de sauvegarde contre les maladies et les poisons et aux tests nus de récupération pour vous remettre des dégâts de poison persistants. Les alliés qui se trouvent dans votre aura de champion bénéficient de cet avantage, mais leur bonus est de +1.",
                "De plus, si vous obtenez un succès sur un jet de sauvegarde contre une maladie ou un poison, il devient un succès critique (Vos alliés ne partagent pas cet avantage). Si vous disposez de la capacité de classe Corps sacré, lorsque vous obtenez un échec critique sur un jet de sauvegarde contre une maladie ou un poison, il devient un échec."
            ]
        },
        {
            "name"       : "Saper la vie",
            "level"      : "2",
            "traits"     : [
                "Prêtre",
                "Guérison"
            ],
            "required"   : [],
            "description": [
                "Vous aspirez la force vitale de vos ennemis. Quand vous lancez un sort de auto_awesomeMise à mal et blessez au moins une créature vivante avec ce sort, vous récupérez un nombre de Points de vie égal au rang du sort Mise à mal. Si vous n'êtes pas une créature vivante, vous ne pouvez pas profiter des avantages de ce don."
            ]
        },
        {
            "name"       : "Saut du vent",
            "level"      : "10",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "Sorts Qi"
            ],
            "description": [
                "Vous invoquez le vent pour qu'il vous soulève et que vous puissiez prendre votre envol en sautant. Vous obtenez le sort Qi auto_awesomeSaut du vent ."
            ]
        },
        {
            "name"       : "Savoir approfondi",
            "level"      : "18",
            "traits"     : [
                "Barde"
            ],
            "required"   : [
                "Touche-à-tout (muse de barde), légendaire en Occultisme"
            ],
            "description": [
                "Votre répertoire est vaste, contenant bien plus de sorts que la normale. Ajoutez un sort à votre répertoire de chaque rang que vous pouvez lancer."
            ]
        },
        {
            "name"       : "Second dard 1",
            "level"      : "12",
            "traits"     : [
                "Persévérer",
                "Rôdeur"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez deux armes de corps-à-corps, chacune dans une main différente",
                "Vous lisez les mouvements de votre proie et les transformez en ouvertures, de sorte que les échecs avec une arme donnent lieu à des coups cinglants avec l'autre. Faites une Frappe au corps-à-corps avec l'une des armes requises contre votre proie. Cette Frappe obtient l'effet d'échec suivant.",
                "Échec Votre attaque inflige les dégâts que l'autre arme requise devrait normalement infliger si elle avait touché, en enlevant tous les dés de dégâts (vous retirez ainsi les dés de dégâts conférés par les runes d'arme, les sorts, les pouvoirs spéciaux, pas uniquement les dégâts de l'arme)."
            ]
        },
        {
            "name"       : "Second souffle",
            "level"      : "2",
            "traits"     : [
                "Barbare"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez entrer en rage une deuxième fois, mais vous devrez ensuite prendre le temps de souffler. Quand vous entrez en sports_martial_artsRage , vous pouvez choisir de gagner des Points de vie temporaires de rage même si 1 minute ne s'est pas écoulée (ou 1 round entier si vous avez la capacité de classe Rage revitalisante). Si vous le faites, quand cette Rage prend fin, vous êtes dans l'état sentiment_very_dissatisfiedFatigué jusqu'à ce que vous vous reposiez pendant au moins 10 minutes."
            ]
        },
        {
            "name"       : "Secrets du familier léchi",
            "level"      : "4",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "Ordre de la Feuille"
            ],
            "description": [
                "Les secrets de l'Ordre de la feuille permettent à votre familier de tirer parti de sa forme de léchi. Vous pouvez choisir une capacité de familier supplémentaire chaque jour, qui doit être une des capacités de familier léchi suivantes. Vous ne pouvez choisir qu'un seul pouvoir de familier à la fois.",
                [
                    "Explosion verdoyante Lorsque votre familier meurt, il libère son énergie primordiale pour lancer la version de Compendium[pf2e.spells-srd.rfZpqmj0AIIdkVIs]{Guérison} à trois actions, intensifié à un rang inférieur de 1 à votre rang de sort le plus élevé. Le sort Guérison obtient également un bonus de statut égal à deux fois le rang du sort au nombre de Points de vie qu'il redonne aux plantes. Vous devez être capable de lancer les sorts de rang 2 en utilisant des emplacements de sort pour choisir ce pouvoir de familier.",
                    "Purificateur d'air Votre familier recycle l'air, fournissant assez d'oxygène à une créature de taille Moyenne dans les zones avec de l'air vicié, tel qu'une chambre scellée ou un espace extradimensionnel. Si le léchi est dans la zone d'un effet de poison inhalé ou d'un effet qui compte sur l'odorat, les créatures dans une crop_freeémanation de 4,50 mètres du léchi obtiennent un bonus de circonstances de +2 à leur jet de sauvegarde contre l'effet.",
                    "Vrilles agrippantes Votre familier peut faire pousser des lianes ou des vrilles similaires, augmentant son allonge à 4,50 mètres."
                ]
            ]
        },
        {
            "name"       : "Sécurité",
            "level"      : "4",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "Boucliers de l'esprit"
            ],
            "description": [
                "Ceux que vous protégez peuvent bénéficier de votre protection durable. Vous pouvez lancer auto_awesomeBoucliers de l'esprit en utilisant 2 actions au lieu de 1. Si vous le faites, vous pouvez choisir un allié dans votre aura de champion pour qu'il obtienne un bouclier de l'esprit qui l'accompagne. Pendant 1 minute, cet allié bénéficie des avantages de Boucliers de l'esprit, même s'il n'est pas dans l'aura de votre champion et même si votre bouclier n'est pas levé. Si vous créez un autre bouclier compagnon, le précédent prend fin."
            ]
        },
        {
            "name"       : "Sécurité du sort 1",
            "level"      : "6",
            "traits"     : [
                "Concentration",
                "Ensorceleur",
                "Mutamagie"
            ],
            "required"   : [],
            "description": [
                "Vous n'êtes pas blessé par les effets de vos propres sorts. Si votre prochaine action consiste à Lancer un sort avec une zone, vous n'êtes pas affecté par le sort même si vous êtes au sein de la zone."
            ]
        },
        {
            "name"       : "Sécurité supérieure",
            "level"      : "8",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "Sécurité"
            ],
            "description": [
                "Bouclier en main, vous offrez à votre allié toute la protection dont vous bénéficiez vous-même. Tant que le bouclier compagnon est en vigueur, si votre bouclier est levé, l'allié avec le bouclier compagnon obtient le même bonus à la CA que votre bouclier et vous pouvez déclencher military_techBlocage au bouclier si cet allié remplit les conditions de déclenchement. Cela utilise les statistiques de votre bouclier et applique les dégâts à votre bouclier."
            ]
        },
        {
            "name"       : "Sens nocturnes",
            "level"      : "6",
            "traits"     : [
                "Barbare",
                "Rage"
            ],
            "required"   : [
                "vision nocturne ou odorat"
            ],
            "description": [
                "Vos sens gagnent encore en clarté. Lorsque vous êtes enragé, si vous avez vision nocturne, vous obtenez vision dans le noir et si vous avez odorat, la portée de votre odorat imprécis passe à 18 mètres."
            ]
        },
        {
            "name"       : "Sens spirituel",
            "level"      : "6",
            "traits"     : [
                "Divin",
                "Oracle"
            ],
            "required"   : [],
            "description": [
                "Vous possédez une vague relation avec le Plan éthéré qui vous permet de remarquer les esprits. Lorsque vous êtes en train d'explorer mais pas de Fouiller, le MJ lance secrètement à votre place pour trouver des hantises qui nécessitent habituellement d'être cherchées, ainsi que les esprits, les créatures sur le Plan éthéré et les êtres constitués entièrement d'essence spirituelle comme les célestes, les fiélons et les veilleurs.",
                "Vous pouvez aussi potentiellement remarquer les créatures éthérées et les esprits dans les objets solides, pourvu qu'ils soient à moins de 9 mètres de vous. Cela s'applique lorsque vous Fouillez, lorsque vous Cherchez et lors du test automatique secret que vous obtenez en explorant même si vous n'êtes pas en train de Fouiller. Vous ne pouvez toujours remarquer les esprits que sur un test réussi et vous ne pouvez pas les voir s'ils sont à plus de 1,50 mètre à l'intérieur d'un objet. Lorsque vous remarquez une créature avec ce sens, vous apprenez aussi sa localisation, la rendant sentiment_very_dissatisfiedCachée à votre égard si elle était auparavant sentiment_very_dissatisfiedNon détectée ."
            ]
        },
        {
            "name"       : "Sens surnaturels",
            "level"      : "4",
            "traits"     : [
                "Barbare",
                "Rage"
            ],
            "required"   : [
                "Odorat aiguisé ou odorat"
            ],
            "description": [
                "Votre odorat est incroyablement aiguisé et vous pouvez toujours compter sur votre sens de l'odorat pour vous guider lorsque votre vision est compromise.",
                "Lorsque vous ciblez un opposant sentiment_very_dissatisfiedMasqué ou sentiment_very_dissatisfiedCaché lorsque vous êtes enragé, vous réduisez le DD du test nu à 3 pour une cible Masquée et 9 si elle est Cachée."
            ]
        },
        {
            "name"       : "Serment de vengeance",
            "level"      : "2",
            "traits"     : [
                "Champion",
                "Serment"
            ],
            "required"   : [
                "Cause du paladin"
            ],
            "description": [
                "Vous avez fait le serment de pourchasser les scélérats cruels et de les exécuter en guise de jugement. Vous obtenez l'édit suivant : \"Vous devez pourchasser et exterminer les créatures d'alignement qui ont commis d'atroces méfaits\". Vous pouvez utiliser auto_awesomeImposition des mains pour infliger des dégâts à une créature que vous avez vue brutaliser un innocent ou un allié, comme s'il était un mort-vivant. Dans ce cas, imposition des mains inflige des dégâts spirituels au lieu de dégâts de vitalité et obtient le trait saint. Ceci ne vous empêche pas de soigner une telle créature avec Imposition des mains. Vous devez choisir entre soigner ou blesser."
            ]
        },
        {
            "name"       : "Simplicité mortelle",
            "level"      : "1",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [
                "divinité dont l'arme de prédilection est une arme simple ou une attaque à mains nues, qualifié avec l'arme de prédilection de votre divinité"
            ],
            "description": [
                "Quand vous maniez l'arme de prédilection de votre divinité, augmentez la taille du dé de dégâts de cette arme d'un cran.",
                "Si l'arme de prédilection de votre divinité est une attaque à mains nues (comme le poing, si vous vénérez Irori) et que son dé de dégâts est inférieur au d6, augmentez à la place la taille de son dé de dégâts au d6."
            ]
        },
        {
            "name"       : "Siphon de vide",
            "level"      : "8",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [],
            "description": [
                "L'énergie brute du vide sape l'essence des vivants. Toute créature vivante qui obtient un échec critique à son jet de sauvegarde contre un sort de auto_awesomeMise à mal que vous lancez est sentiment_very_dissatisfiedDrainée 1 ."
            ]
        },
        {
            "name"       : "Sorcellerie propulsive",
            "level"      : "2",
            "traits"     : [
                "Ensorceleur"
            ],
            "required"   : [],
            "description": [
                "La force de votre magie peut être utilisée pour vous propulser ou propulser quelqu'un d'autre. Vous connaissez l'effet de magie du sang suivant.",
                "Magie du sang - Sorcellerie propulsive Vous canalisez votre magie vers l'extérieur pour impulser un déplacement. Soit vous Faites un pas, soit vous déplacez la cible de 1,50 mètre dans la direction de votre choix."
            ]
        },
        {
            "name"       : "Sorcier herbacé",
            "level"      : "1",
            "traits"     : [
                "Sorcier"
            ],
            "required"   : [],
            "description": [
                "Vous avez une affinité particulière pour les plantes feuillues.",
                "Votre patron vous accorde un familier léchi. Si vous avez déjà un familier, ce léchi remplace votre précédent familier, comme s'il avait été tué.",
                "De plus, vous obtenez la capacité de voir à travers les feuilles, les lianes et les autres feuillages. Vous ne subissez pas les pénalités de circonstances aux attaques à distance de sort ou aux tests de Perception provoqués par le feuillage et votre attaque ciblée ne nécessite pas un test nu pour réussir contre une cible qui n'est sentiment_very_dissatisfiedMasquée que par une telle végétation."
            ]
        },
        {
            "name"       : "Sort caché 1",
            "level"      : "2",
            "traits"     : [
                "Animiste",
                "Concentration",
                "Mutamagie",
                "Sorcier",
                "Magicien"
            ],
            "required"   : [],
            "description": [
                "Animiste Vous parlez avec la voix inaudible des esprits.",
                "Magicien En formant mentalement des énergie magiques et en paramétrant vos sorts par concentration pure, vous pouvez simplifier les incantations et les gestes nécessaires au lancement de votre sort, les rendant à peine visible.",
                "Sorcier Par un effort mental puissant, vous pouvez simplifier l'incantation et les gestes nécessaire pour lancer votre sort, le rendant à peine visible.",
                "Si votre prochaine action consiste à Lancer un sort, le sort obtient le trait subtil, cachant les runes lumineuses, les étincelles de magie et autres manifestations qui pourraient normalement trahir votre incantation. Ce trait cache uniquement les actions et les manifestations du sort et non ses effets. De la sorte, un observateur verra tout de même un rayon qui venir de votre direction ou vous verra disparaître."
            ]
        },
        {
            "name"       : "Sort congère 1",
            "level"      : "4",
            "traits"     : [
                "Froid",
                "Druide",
                "Manipulation",
                "Mutamagie"
            ],
            "required"   : [
                "ordre de la tempête"
            ],
            "description": [
                "Le vent hurlant et les précipitations de votre magie se transforment en neige épaisse. Si votre prochaine action consiste à Lancer un sort qui possède le trait air, eau ou froid, et qui n'a pas le trait feu, choisissez une créature affectée par le sort qui se trouve au sol. Chaque case du sol qui se trouve sous la créature ou qui lui est adjacente se remplit de neige jusqu'aux chevilles. Ces cases constituent un terrain difficile jusqu'au début de votre prochain tour. Une créature peut Interagir pour dégager un carré de neige et la neige dans une case fond si cette case est exposée à un effet de feu."
            ]
        },
        {
            "name"       : "Sort coup de tonnerre 1",
            "level"      : "8",
            "traits"     : [
                "Druide",
                "Son",
                "Mutamagie"
            ],
            "required"   : [
                "ordre de la tempête"
            ],
            "description": [
                "Votre éclair déchire le ciel, générant une onde de choc assourdissante. Si votre prochaine action consiste à Lancer un sort qui possède le trait électricité ou inflige des dégâts d'électricité, n'a pas de durée et demande un jet de sauvegarde de la part des créatures visées, la force du de la foudre crée un coup de tonnerre, en plus de ses autres effets. Chaque créature qui a obtenu un échec sur son jet de Réflexes contre le sort est sentiment_very_dissatisfiedSourde pendant 1 round et celles qui obtiennent un échec critique sont aussi mises sentiment_very_dissatisfiedÀ terre ."
            ]
        },
        {
            "name"       : "Sort couronne de fleurs 1",
            "level"      : "12",
            "traits"     : [
                "Druide",
                "Manipulation",
                "Mutamagie"
            ],
            "required"   : [
                "ordre de la feuille"
            ],
            "description": [
                "Si votre prochaine action consiste à Lancer un sort avec le trait champignon ou plante, une couronne de plantes apparaît dans une crop_freeexplosion de 3 mètres . Les plantes forment un terrain difficile et dangereux, couvert selon votre choix de lianes épineuses ou empoisonnées. Toute créature qui se déplace ou termine son tour dans une de ces cases, subit 2d6 dégâts ( casino2d6 dégâts perforants pour les épines ou casino2d6 dégâts de poison pour les lianes empoisonnées). Une créature ne peut subir ces dégâts qu'une fois par tour. Vous et votre familier êtes immunisés à ces dégâts.",
                "Les plantes restent en place pendant 1 minute ou jusqu'à ce que vous lanciez un autre Sort couronne de fleurs, selon ce qui se produit en premier.",
                "Les dégâts passent à 3d6 au niveau 16 et à 4d6 au niveau 20."
            ]
        },
        {
            "name"       : "Sort d'école avancé",
            "level"      : "8",
            "traits"     : [
                "Magicien"
            ],
            "required"   : [
                "École arcanique"
            ],
            "description": [
                "Vous accédez aux enseignements avancés de votre institution arcanique et apprenez un nouveau sort puissant. Vous obtenez le sort d'école avancé de votre école arcanique."
            ]
        },
        {
            "name"       : "Sort d'emprunt",
            "level"      : "8",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [
                "qualifié en Arcanes, Nature, Occultisme ou Religion"
            ],
            "description": [
                "Au cours de vos préparatifs quotidiens, vous pouvez demander à un incantateur préparé allié de vous aider à préparer un sort pour la journée. Le sort peut être de rang 3 au maximum. Votre allié doit être capable de le préparer et de le lancer et le sort doit avoir une entrée cible ou une zone. Votre allié perd un emplacement de sort du rang correspondant et vous obtenez la capacité de lancer le sort préparé une fois au cours de cette journée.",
                "Lorsque vous sports_martial_artsLancez le sort , utilisez votre DD de classe pour tout jet de sauvegarde nécessité par le sort et votre DD de classe – 10 comme modificateur d'attaque de sort."
            ]
        },
        {
            "name"       : "Sort de cercle r",
            "level"      : "12",
            "traits"     : [
                "Mutamagie",
                "Sorcier"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Un allié dans les 9 mètres Lance un sort.",
                "Vous accompagnez les incantations de votre allié ou faites écho à ses mouvements, en associant votre magie pour renforcer son sort de l'une des deux façons suivantes :",
                [
                    "Si son sort inflige des dégâts et ne possède pas de durée, vous accordez au sort un bonus de statut aux dégâts égal à son rang.\n\nflareEffet : Sort de cercle",
                    "Si son sort ne possède pas un effet de mutamagie, vous appliquez les effets de tout don mutamagique que vous connaissez au sort lancé. Le don de mutamagie doit pouvoir être appliqué au sort déclencheur et vous devez être en mesure de l'appliquer (par exemple si le don de mutamagie n'est utilisable qu'un nombre restreint de fois par jour)."
                ]
            ]
        },
        {
            "name"       : "Sort de mauvais augure 1",
            "level"      : "16",
            "traits"     : [
                "Manipulation",
                "Mental",
                "Oracle",
                "Mutamagie",
                "Visuel"
            ],
            "required"   : [],
            "description": [
                "Votre incantation est emplie de lumières étranges, de légères fumées et d'autres effets captivants qui déconcertent vos ennemis. Si votre prochaine action consiste à Lancer un sort, chaque créature qui tente d'utiliser une réaction déclenchée par votre activité Lancer un sort subit une pénalité de circonstances de -2 aux jets d'attaque et aux tests de compétence qui sont lancés en réaction.",
                "De plus, si le sort inclut une attaque de sort ou nécessite un jet de sauvegarde, les créatures que vous touchez ou qui obtiennent un échec sont sentiment_very_dissatisfiedFascinées par vous jusqu'à la fin de votre prochain tour.",
                "flareEffet : Sort de mauvais augure"
            ]
        },
        {
            "name"       : "Sort élargi 1",
            "level"      : "1",
            "traits"     : [
                "Druide",
                "Manipulation",
                "Oracle",
                "Ensorceleur",
                "Mutamagie",
                "Sorcier",
                "Magicien"
            ],
            "required"   : [],
            "description": [
                "Vous manipulez l'énergie de votre sort afin qu'il se répande et affecte une zone plus étendue. Si la prochaine action que vous utilisez consiste à Lancer un sort qui possède une zone comprenant une explosion, un cône ou une ligne et qu'il n'a pas de durée, vous augmentez la zone de ce sort. Ajoutez 1,50 mètre au rayon d'une explosion qui possède normalement un rayon d'au moins 3 mètres (une explosion avec un rayon inférieur n'est pas affectée). Ajoutez 1,50 mètre à la longueur d'un cône ou d'une ligne qui possèdent normalement une longueur de 4,50 mètres ou moins et de 3 mètres à celle d'une ligne ou d'un cône supérieur ou égal à 6 mètres."
            ]
        },
        {
            "name"       : "Sort éloigné 1",
            "level"      : "1",
            "traits"     : [
                "Barde",
                "Prêtre",
                "Concentration",
                "Druide",
                "Oracle",
                "Ensorceleur",
                "Mutamagie",
                "Sorcier",
                "Magicien"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez augmenter la portée de vos sorts. Si la prochaine action que vous utilisez consiste à Lancer un sort qui possède une portée, augmentez cette portée de 9 mètres. Comme c'est la règle pour toute augmentation de portée d'un sort, si le sort avait une portée de \"contact\", vous étendez sa portée à 9 mètres."
            ]
        },
        {
            "name"       : "Sort en écho 1",
            "level"      : "18",
            "traits"     : [
                "Concentration",
                "Ensorceleur",
                "Mutamagie"
            ],
            "required"   : [],
            "description": [
                "Vous chronométrez les composantes de votre sort avec une précision extrême, en créant une résonance qui reproduit les effets du sort. Si votre prochaine action consiste à Lancer un sort de rang inférieur ou égal à 4 qui ne possède pas de durée, l'énergie du sort se répercute et crée un écho. Vous pouvez Lancer le sort une seconde fois avant la fin de votre prochain tour sans avoir à dépenser un emplacement de sort."
            ]
        },
        {
            "name"       : "Sort mélodieux 1",
            "level"      : "4",
            "traits"     : [
                "Barde",
                "Concentration",
                "Manipulation",
                "Mutamagie"
            ],
            "required"   : [],
            "description": [
                "Vous mêlez subtilement vos incantations à vos représentations artistiques. Si votre prochaine action consiste à Lancer un sort, le sort obtient le trait subtil, cachant les runes brillantes, les étincelles de magie et les autres manifestations qui devraient dévoiler votre incantation. Le trait cache seulement les actions d'incantation et la manifestation du sort, pas ses effets, de sorte qu'un observateur pourrait toujours voir tout de même le rayon partant de vous ou vous voir disparaître.",
                "Dans le cadre de l'utilisation de Sort mélodieux, vous pouvez choisir de sports_martial_artsFaire diversion , sports_martial_artsDémoraliser , sports_martial_artsSe produire ou sports_martial_artsSolliciter . Si vous le faites, le sort que vous lancez doit avoir le trait audible, émotion, son ou visuel pour obtenir le trait subtil."
            ]
        },
        {
            "name"       : "Sort non-létal 1",
            "level"      : "2",
            "traits"     : [
                "Manipulation",
                "Mutamagie",
                "Magicien"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez altérer les sorts offensifs pour qu'ils soient moins mortels. Si votre prochaine action consiste à Lancer un sort qui inflige des dégâts et ne possède par le trait vide ou mort, ce sort obtient le trait non-létal."
            ]
        },
        {
            "name"       : "Sort réfléchi",
            "level"      : "14",
            "traits"     : [
                "Ensorceleur",
                "Sorcier",
                "Magicien"
            ],
            "required"   : [
                "Contresort"
            ],
            "description": [
                "Lorsque vous réussissez à utiliser military_techContresort pour contrer un sort qui affecte des créatures ciblées ou une zone, vous pouvez renvoyer l'effet de ce sort sur son lanceur. Lorsqu'il est réfléchi, le sort n'affecte que le lanceur originel, même si c'est un sort de zone ou s'il devrait normalement affecter plus d'une créature. Le lanceur originel dispose d'un jet de sauvegarde et utilise d'autres défenses contre le sort réfléchi comme à l'ordinaire."
            ]
        },
        {
            "name"       : "Sort scintillant 1",
            "level"      : "16",
            "traits"     : [
                "Concentration",
                "Lumière",
                "Ensorceleur",
                "Mutamagie",
                "Magicien"
            ],
            "required"   : [],
            "description": [
                "Vos sorts se transforment en éclats de lumière et de couleur. Si votre prochaine action consiste à Lancer un sort qui n'a pas le trait ténèbres, n'a pas de durée et qui oblige les créatures à tenter un jet de Réflexes, le sort explose en un jet de lumières scintillantes, en plus de ses autres effets.",
                "Chaque créature qui a obtenu un échec sur son jet de Réflexes contre le sort est sentiment_very_dissatisfiedÉblouie pendant un tour et celles qui ont échoué de manière critique sont sentiment_very_dissatisfiedAveuglées pendant un tour."
            ]
        },
        {
            "name"       : "Sort semé 1",
            "level"      : "14",
            "traits"     : [
                "Concentration",
                "Druide",
                "Mutamagie"
            ],
            "required"   : [],
            "description": [
                "Vous pliez votre sort dans une graine. Si votre prochaine action consiste à Lancer un sort qui utilise 1 ou 2 actions, le sort se plante de lui-même dans une case adjacente. Vous devez prendre toutes les décisions concernant le sort au moment où vous le lancez. Au cours des 10 prochaines minutes, vous pouvez ordonner à votre Sort semé d'éclore et de produire ses effets par une réaction, laquelle se déclenche lorsqu'une créature pénètre dans la case du Sort semé ou une case qui lui est adjacente. Vous ne pouvez avoir qu'un unique Sort semé au même moment et si vous ne déclenchez pas le sort dans les 10 minutes suivantes, il se dissipe et le sort est perdu. Une créature peut remarquer le Sort semé avec un test de casinoperception réussi contre votre DD de sort."
            ]
        },
        {
            "name"       : "Sort traversant 1",
            "level"      : "10",
            "traits"     : [
                "Prêtre",
                "Concentration",
                "Mutamagie"
            ],
            "required"   : [],
            "description": [
                "Les sort que vous lancez se transforment brièvement en essence vitale, voyageant sans leur faire de mal à travers les créatures vivantes et mort-vivantes entre vous et votre cible, bloqués seulement par des objets solides.",
                "Si lors de votre prochaine action, vous Lancez un sort qui nécessite un jet d'attaque de sort, vos cibles ne bénéficient pas d'un abri procuré par des créatures vivantes ou mort-vivantes."
            ]
        },
        {
            "name"       : "Sort volé",
            "level"      : "16",
            "traits"     : [
                "Magique",
                "Roublard"
            ],
            "required"   : [
                "Voleur légendaire, Sort d'emprunt"
            ],
            "description": [
                "Lorsque vous utilisez military_techVoleur légendaire pour voler l'impossible, vous pouvez voler un sort préparé ou un sort spontané d'un adversaire. Le sort est aléatoirement choisi parmi les sorts du plus haut rang du sort que l'adversaire connaît qui a une cible ou une zone, jusqu'à un sort de rang 8 maximum ; la cible perd l'emplacement du sort approprié comme si elle l'avait lancé elle-même. Vous pouvez Lancer le sort dans les casino1d4 rounds suivants, après quoi la magie fugace s'évanouit. Autrement, cela fonctionne de la même manière que quand vous lancez un sort avec military_techSort d'emprunt ."
            ]
        },
        {
            "name"       : "Sorts Qi",
            "level"      : "1",
            "traits"     : [
                "Moine"
            ],
            "required"   : [],
            "description": [
                "Vous avez cultivé votre Qi pour produire des effets magiques. Vous obtenez auto_awesomeBouleversement Qi , auto_awesomeRuée Qi ou un autre sort Qi de moine de rang 1 auquel vous avez accès.",
                "En puisant dans une réserve personnelle d'énergie appelée Qi, vous pouvez lancer des sorts spéciaux appelés sorts de Qi qui forment un type de sorts focalisés. Vous devez dépenser 1 point de focalisation pour lancer un sort focalisé. Quand vous obtenez votre premier sort Qi, vous décidez si vos sorts Qi seront des sorts divins ou occultes et vous devenez qualifié en modificateur d'attaque de sort et en DD des sorts. Votre attribut essentiel d'incantation est la Sagesse.",
                "Vous obtenez également une réserve de focalisation de 1 point de focalisation. Vous remplissez votre réserve de focalisation au cours de vos préparatifs quotidiens et vous récupérez 1 point de focalisation en passant 10 minutes en utilisant l'action Refocaliser en rééquilibrant votre esprit et votre souffle pour puiser davantage de Qi à partir du monde qui vous entoure."
            ]
        },
        {
            "name"       : "Sorts Qi avancés",
            "level"      : "6",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "Sorts Qi"
            ],
            "description": [
                "Votre talent pour contrôler votre qi a atteint de nouveaux sommets. Vous obtenez auto_awesomeExplosion qi , auto_awesomeRétrécir l'intervalle ou un autre sort qi de rang 3 auquel vous avez accès."
            ]
        },
        {
            "name"       : "Sorts Qi de grand maître",
            "level"      : "18",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "Sorts Qi"
            ],
            "description": [
                "Vous avez débloqué une technique Qi qui n'est accessible qu'à ceux qui atteignent à la fois la maîtrise de leur corps et de leur esprit. Vous obtenez auto_awesome , @UUID[Compendium.pf2e.spells-srd.Item.YDMOqndvYFu3OjA6]{Forme Qi , or another 9th-rank qi spell you have access to."
            ]
        },
        {
            "name"       : "Sorts Qi de maître",
            "level"      : "16",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "Sorts Qi"
            ],
            "description": [
                "Vous avez pratiquement atteint la maîtrise totale de votre Qi. Vous obtenez le sort Qi auto_awesomeCourroux de la méduse , auto_awesomeToucher de mort ou un autre sort Qi de rang 8 auquel vous avez accès."
            ]
        },
        {
            "name"       : "Souffle de rage du dragon 2",
            "level"      : "6",
            "traits"     : [
                "Barbare",
                "Concentration",
                "Rage"
            ],
            "required"   : [
                "Instinct du dragon"
            ],
            "description": [
                "Conditions Une fois toutes les 10 minutes",
                "Vous prenez une grande inspiration et soufflez une puissante vague d'énergie dans un crop_freecône de 9 mètres , qui inflige casino1d6 dégâts par niveau à chaque créature se trouvant dans la zone avec un jet de casinoRéflexes contre votre DD de classe. Le type de dégâts correspond à celui du souffle de dragon de votre instinct, et cette action acquiert le trait de la tradition de votre instinct draconique."
            ]
        },
        {
            "name"       : "Souffle surpuissant 1",
            "level"      : "12",
            "traits"     : [
                "Concentration",
                "Moine",
                "Mutamagie"
            ],
            "required"   : [
                "Sorts Qi"
            ],
            "description": [
                "Vous contrôlez votre souffle et l'alignez sur votre qi, expirant avec une force contrôlée pour surmonter les résistances de vos adversaires. Si vous utilisez votre prochaine action pour Lancer un sort qui possède le trait moine et n'a pas de durée, le sort et toute Frappe que vous portez qui résulte de son incantation ignore un montant de la résistance de la cible aux dégâts physiques égal à votre niveau."
            ]
        },
        {
            "name"       : "Soulagement",
            "level"      : "4",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "Imposition des mains"
            ],
            "description": [
                "Votre contact apaise le corps et l'esprit. Vous pouvez lancer une Imposition des mains sur une créature vivante en utilisant 2 actions au lieu de 1. Ce faisant, vous pouvez tenter de contrer un effet de votre choix, parmi ceux qui affectent votre cible. Quand vous choisissez ce don, choisissez une des options suivantes, ce qui déterminera les effets que vous pouvez contrer :",
                [
                    "Soulagement du corps sentiment_very_dissatisfiedAveuglé , sentiment_very_dissatisfiedÉbloui , sentiment_very_dissatisfiedSourd , sentiment_very_dissatisfiedAffaibli , sentiment_very_dissatisfiedNauséeux ;",
                    "Soulagement de la grâce sentiment_very_dissatisfiedMaladroit , sentiment_very_dissatisfiedAgrippé , sentiment_very_dissatisfiedParalysé ;",
                    "Soulagement de l'esprit sentiment_very_dissatisfiedEn fuite , sentiment_very_dissatisfiedEffrayé , sentiment_very_dissatisfiedStupéfait ;"
                ],
                "Spécial Vous pouvez sélectionner ce don jusqu'à trois fois. Chaque fois, choisissez un type différent de soulagement et ajoutez ces options à celles que vous pouvez choisir quand vous lancer l'imposition des mains en 2 actions."
            ]
        },
        {
            "name"       : "Soulagement chanceux",
            "level"      : "12",
            "traits"     : [
                "Prêtre",
                "Fortune"
            ],
            "required"   : [],
            "description": [
                "Votre dieu favorise vos tentatives pour retirer les afflictions et les états. Lorsque vous lancez un sort de soin qui tente de contrer un effet, vous pouvez effectuer deux fois le test de contre et prendre la valeur la plus élevée."
            ]
        },
        {
            "name"       : "Soulagement d'affliction",
            "level"      : "12",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "Soulagement"
            ],
            "description": [
                "La grâce divine qui vous traverse vous permet de soulager quelqu'un d'une affliction. Ajoutez le soulagement de récupération aux types de military_techSoulagements que vous pouvez prodiguer, vous permettant de contrer une affliction plutôt qu'un effet causant un état (généralement une affliction est une malédiction, une maladie ou un poison)."
            ]
        },
        {
            "name"       : "Soulagement supérieur",
            "level"      : "8",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "Soulagement"
            ],
            "description": [
                "Votre foi améliore votre capacité à supprimer des états. Ajoutez les options suivantes à la liste des états que vous pouvez contrer pour tout type de soulagement que vous pouvez prodiguer.",
                [
                    "Soulagement du corps sentiment_very_dissatisfiedDrainé , sentiment_very_dissatisfiedRalenti ; Si vous êtes niveau 16, ajoutez sentiment_very_dissatisfiedÉtourdi",
                    "Soulagement de la grâce sentiment_very_dissatisfiedImmobilisé , sentiment_very_dissatisfiedEntravé , sentiment_very_dissatisfiedRalenti ; si vous êtes niveau 12, ajoutez sentiment_very_dissatisfiedPétrifié ; si vous êtes niveau 16, ajoutez sentiment_very_dissatisfiedÉtourdi",
                    "Soulagement de l'esprit sentiment_very_dissatisfiedConfus , sentiment_very_dissatisfiedContrôlé , sentiment_very_dissatisfiedRalenti ; Si vous êtes niveau 16, ajoutez sentiment_very_dissatisfiedCondamné et sentiment_very_dissatisfiedÉtourdi ."
                ]
            ]
        },
        {
            "name"       : "Soulagement suprême",
            "level"      : "18",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "Soulagement"
            ],
            "description": [
                "Votre pouvoir de soulagement outrepasse les limites de la vie et de la mort. Ajoutez le soulagement suprême aux types de soulagement que vous pouvez prodiguer. Quand vous utilisez military_techSoulagement , vous pouvez cibler une créature qui est mort depuis votre dernier tour pour le ramener à la vie. La cible revient à la vie avec 1 Point de vie et devient sentiment_very_dissatisfiedBlessée 1. Vous ne pouvez pas ramener la cible à la vie si elle est morte suite à une auto_awesomeDésintégration ou un effet de mort. La créature acquiert les autres bénéfices de auto_awesomeImposition des mains après être revenu à la vie."
            ]
        },
        {
            "name"       : "Source polyvalente",
            "level"      : "2",
            "traits"     : [
                "Prêtre"
            ],
            "required"   : [
                "Source de mise à mal ou de guérison, Divinité qui autorise ses prêtres à avoir les deux types de source"
            ],
            "description": [
                "Lors de l'exploration des aspects de votre divinité, vous dépassez les limites de la guérison ou de la mise à mal. Vous pouvez préparer auto_awesomeMise à mal ou auto_awesomeGuérison dans les emplacements de sort obtenus grâce à la source de guérison ou de mise à mal."
            ]
        },
        {
            "name"       : "Soutien instinctif f",
            "level"      : "6",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "Compagnon animal"
            ],
            "description": [
                "Déclencheur Vous lancez un sort qui n'est pas un tour de magie qui ne cible que votre compagnon animal.",
                "Lorsque vous soutenez votre compagnon animal, ce dernier vous soutient en retour. Après que votre sort ait produit son effet, votre compagnon obtient ses actions pour le tour, comme si vous l'aviez Dirigé et une de ces actions doit être Soutenir. Si votre compagnon a déjà utilisé n'importe quelle autre action, il ne peut plus vous Soutenir comme à l'ordinaire."
            ]
        },
        {
            "name"       : "Souvenirs supplémentaires f",
            "level"      : "6",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Vous obtenez un succès ou un succès critique à un test pour sports_martial_artsVous souvenir de votre proie.",
                "Vous examinez le champ de bataille en un clin d'œil, vous souvenant de détails à propos de multiples adversaires auxquels vous avez fait face. Vous tentez immédiatement un test pour Vous souvenir à propos d'une créature différente que vous pouvez percevoir."
            ]
        },
        {
            "name"       : "Souveraineté du sang",
            "level"      : "12",
            "traits"     : [
                "Ensorceleur"
            ],
            "required"   : [],
            "description": [
                "Vous maniez la magie du sang de main de maître. Lorsque vous bénéficiez d'un effet de magie du sang, vous pouvez choisir de perdre un nombre de Points de vie égal à deux fois le rang du sort lorsque l'énergie de votre sang est aspirée. Cela ne nécessite aucune action supplémentaire et vous bénéficiez de deux effets différents de magie du sang que vous connaissez. Les deux effets peuvent avoir des cibles différentes."
            ]
        },
        {
            "name"       : "Spécialiste des pièges artisanaux",
            "level"      : "4",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "expert en Artisanat, Fabrication de pièges artisanaux"
            ],
            "description": [
                "Vous vous êtes spécialisé dans la création rapide de pièges pour gêner vos ennemis sur le champ de bataille.",
                "Si vous êtes expert en Artisanat, vous obtenez les formules de trois pièges artisanaux courants ou peu courants. Si vous êtes un maître, vous en obtenez six. Si vous êtes légendaire, vous en obtenez neuf.",
                "Chaque jour lors de vos préparatifs quotidiens, vous pouvez préparer quatre pièges artisanaux de votre recueil que vous pourrez poser rapidement au cours de la journée ; s'il faut normalement une minute pour sports_martial_artsFabriquer chacun d'eux, vous parvenez à les Fabriquer en effectuant 3 actions Interagir. Le nombre de pièges artisanaux passe à six si vous êtes un maître en Artisanat et à huit si vous êtes légendaire. Les pièges artisanaux préparés de cette façon ne vous coûtent aucune ressource lorsque vous les Fabriquez."
            ]
        },
        {
            "name"       : "Spécialités multiples",
            "level"      : "18",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "maître chasseur, spécialité du chasseur"
            ],
            "description": [
                "Vous avez appris à tirer partie de chaque spécialité possible. Lorsque vous utilisez sports_martial_artsChasser une proie , vous pouvez obtenir une spécialité du chasseur différente à la place de celle que vous avez choisi au niveau 1. Si vous le faites vous n'obtenez pas l'avantage supplémentaire de Maître chasseur ."
            ]
        },
        {
            "name"       : "Sprint vicieux 1",
            "level"      : "4",
            "traits"     : [
                "Sophistication",
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Vous passez en trombe devant un adversaire, le déconcertant par des tactiques fourbes. Marchez rapidement jusqu'à la moitié de votre vitesse. Vous pouvez tenter un sports_martial_artsCroc-en-jambe ou un military_techSale coup (si vous disposez de cette action) contre un adversaire dans votre allonge à n'importe quel moment au cours de votre déplacement."
            ]
        },
        {
            "name"       : "Stature de géant 1",
            "level"      : "6",
            "traits"     : [
                "Barbare",
                "Métamorphose",
                "Primordial",
                "Rage"
            ],
            "required"   : [
                "Instinct de géant"
            ],
            "description": [
                "Conditions Vous êtes de taille Moyenne ou inférieure.",
                "Vous grandissez de façon incroyable. Vous devenez Grand, augmentez votre allonge de 1,50 mètre et obtenez l'état sentiment_very_dissatisfiedMaladroit 1 jusqu'à ce que votre Rage prenne fin. Votre équipement grandit avec vous."
            ]
        },
        {
            "name"       : "Stature de titan",
            "level"      : "12",
            "traits"     : [
                "Barbare"
            ],
            "required"   : [
                "Stature de géant"
            ],
            "description": [
                "Vous atteignez une taille encore plus grande. Quand vous utilisez votre Stature de géant, vous pouvez désormais devenir Très Grand (votre allonge augmente de 3 mètres si vous étiez de taille Moyenne ou inférieure)."
            ]
        },
        {
            "name"       : "Stratagème défensif",
            "level"      : "8",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [],
            "description": [
                "En examinant minutieusement un ennemi, vous apprenez à mieux éviter ses attaques. Lorsque vous utilisez Concevoir un stratagème, vous pouvez choisir un stratagème défensif au lieu d'un stratagème d'attaque ou de compétence après avoir lancé le d20.",
                "Stratagème défensif Vous ne pouvez pas tenter de Frapper la cible jusqu'au début de votre prochain tour. Vous obtenez un bonus de circonstances de +1 à toutes vos défenses contre les effets causés par la cible jusqu'au début de votre prochain tour."
            ]
        },
        {
            "name"       : "Stratagème inspiré",
            "level"      : "8",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Au cours de vos préparatifs quotidiens, vous passez en revue des stratagèmes pour la journée avec un maximum de 5 alliés. Plus tard, vous pouvez les conseiller sur vos stratégies en utilisant la réaction sports_martial_artsStratagème inspiré ."
            ]
        },
        {
            "name"       : "Stratagème partagé",
            "level"      : "2",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [],
            "description": [
                "Les plans que vous préparez incluent vos alliés en plus de vous-mêmes. Lorsque vous touchez une créature avec une attaque pour laquelle vous avez substitué à votre jet d'attaque le résultat de sports_martial_artsConcevoir un stratagème , désignez un allié. La créature que vous touchez est sentiment_very_dissatisfiedPrise au dépourvu contre cet allié lors de la prochaine attaque que cet allié lui portera avant le début de votre prochain tour."
            ]
        },
        {
            "name"       : "Stratagème sûr",
            "level"      : "2",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [],
            "description": [
                "Vous savez exactement où frapper un ennemi pour cibler ses points faibles. Lorsque vous portez une Frappe à laquelle vous ajoutez votre modificateur d'Intelligence grâce à sports_martial_artsConcevoir un stratagème et que vous ratez, vous infligez la moitié des dégâts de votre Frappe stratégique à la cible. Ce type de dégâts est celui de l'arme ou de l'attaque à mains nues que vous avez utilisée pour la Frappe."
            ]
        },
        {
            "name"       : "Stratège athlétique",
            "level"      : "2",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [
                "qualifié en Athlétisme"
            ],
            "description": [
                "Vous savez comment manipuler de manière calculée les articulations et le poids du corps. En plus de substituter au jet de l'attaque celui du stratagème pour une Frappe, vous pouvez l'utiliser pour modifier une tentative pour sports_martial_artsDésarmer , sports_martial_artsPousser , sports_martial_artsRepositionner , sports_martial_artsSaisir ou faire un sports_martial_artsCroc-en-jambe en substituant le résultat obtenu en sports_martial_artsConcevant un stratagème aux tests d'Athlétisme. Vous devez appliquer cette substitution à la première attaque éligible que vous portez, qu'il s'agisse d'une Frappe ou d'une des actions d'Athlétisme.",
                "Vous pouvez aussi utiliser votre modificateur d'Intelligence au lieu de celui de Force pour le test d'Athlétisme lorsque vous substituez le résultat de Concevoir un stratagème, à moins que vous n'utilisiez une arme pour effectuer la manœuvre et qu'elle ne remplisse pas les restrictions permettant d'utiliser l'Intelligence avec un stratagème."
            ]
        },
        {
            "name"       : "Stratégie continue",
            "level"      : "10",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [
                "Frappe stratégique"
            ],
            "description": [
                "Vous étudiez constamment les aspects les plus faibles des mouvements de chacun, même si vous n'avez pas encore mis en place un stratagème.",
                "Sur n'importe quelle sports_martial_artsFrappe pour laquelle vous n'avez pas sports_martial_artsConçu un Stratagème , vous infligez toujours des dégâts de précision égaux à votre nombre de dés de dégâts de Frappe stratégique tant que l'arme ou l'attaque à mains nues que vous utilisez est une de celle qui vous permet d'utiliser votre modificateur d'Intelligence pour Concevoir un Stratagème."
            ]
        },
        {
            "name"       : "Suaire de sort 1",
            "level"      : "14",
            "traits"     : [
                "Concentration",
                "Ensorceleur",
                "Mutamagie"
            ],
            "required"   : [],
            "description": [
                "Votre sort vous enveloppe d'un nuage mouvant. Si votre prochaine action consiste à Lancer un sort qui vous cible, vous vous entourez d'une épaisse brume magique dans une crop_freeémanation de 4,50 mètres qui dure jusqu'au début de votre prochain tour. Toutes les créatures à l'intérieur du nuage sont sentiment_very_dissatisfiedMasquées et toutes les créatures à l'extérieur du nuage sont Masquées des créatures qui se trouvent à l'intérieur."
            ]
        },
        {
            "name"       : "Substitution d'une composante sanguine",
            "level"      : "12",
            "traits"     : [
                "Ensorceleur"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez contourner la nécessité de faire des gestes et d'incanter en puisant de l'énergie directement dans votre sang, ce qui vous fait briller de la couleur de votre sang et crépiter d'énergie magique. Lorsque vous Lancez un sort, vous pouvez remplacer tous les composants verbaux, matériels ou somatiques du sort par un élément sanguin.",
                "Pour utiliser un composant sanguin, vous perdez un nombre de Points de vie égal au double du rang du sort car l'énergie épuise votre sang et vous ne pouvez pas diminuer les Points de vie perdus de quelque manière que ce soit.",
                "Comme à l'ordinaire lorsqu'il s'agit de modifier des composants, cela n'a aucun effet sur le nombre d'actions qui sont nécessaires pour lancer le sort et votre activité Lancer un sort obtient le trait concentration mais pas le trait manipulation. Vous ne pouvez pas utiliser de composantes sanguines pour remplacer une partie du coût d'un sort."
            ]
        },
        {
            "name"       : "Subtiliser un souvenir 2",
            "level"      : "8",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous êtes sentiment_very_dissatisfiedAgrippé ou sentiment_very_dissatisfiedEntravé par une créature.",
                "Lorsque vous essayez d'échapper à l'étreinte de votre ennemi, vous subtilisez quelque chose qui lui appartient. Vous tentez d'abord l'action sports_martial_artsS'Échapper pour cesser d'être Agrippé ou Entravé par la créature. Si vous réussissez, vous pouvez aussi tenter de sports_martial_artsVoler quelque chose de la créature, même si celle-ci est en combat."
            ]
        },
        {
            "name"       : "Suivi de l'aboutissement",
            "level"      : "2",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Achever un ennemi vous permet de conserver une posture arrogante. Vous obtenez du flarePanache quand votre aboutissement amène une cible à 0 PV."
            ]
        },
        {
            "name"       : "Suprématie martiale",
            "level"      : "20",
            "traits"     : [
                "Guerrier"
            ],
            "required"   : [],
            "description": [
                "Votre expertise avec les armes vous permet de plier les lois de la réalité, vous permettant d'attaquer continuellement à une vitesse qui requiert normalement une assistance magique. Vous êtes sentiment_very_dissatisfiedAccéléré en permanence. Vous pouvez utiliser votre action supplémentaire uniquement pour Frapper."
            ]
        },
        {
            "name"       : "Surprise de scélérat 1",
            "level"      : "4",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Vous dévoilez votre déguisement au bon moment et surprenez votre cible. Après avoir utilisé l'action sports_martial_artsVous faire passer pour quelqu'un d'autre en utilisant votre kit de déguisement, vous pouvez dévoiler votre déguisement dans un geste dramatique. Toute créature qui n'a pas percé votre déguisement est sentiment_very_dissatisfiedPrise au dépourvu contre la prochaine attaque que vous effectuez avant la fin de votre tour."
            ]
        },
        {
            "name"       : "Suspect opportun r",
            "level"      : "10",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [
                "Suspect potentiel"
            ],
            "description": [
                "Déclencheur Une créature qui, à votre connaissance, n'est liée à aucune de vos enquêtes actives effectue une action hostile contre vous en combat.",
                "Parfois quelque chose s'immisce dans votre affaire de manière inattendue, comme une embuscade envoyée pour pouvoir mettre un terme à votre enquête. Vous utilisez military_techSuspect potentiel contre la créature déclencheuse. Ceci ne vous permet pas d'utiliser Suspect potentiel plus fréquemment que la normale."
            ]
        },
        {
            "name"       : "Suspect potentiel 1",
            "level"      : "2",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [],
            "description": [
                "Fréquence Une fois toutes les 10 minutes",
                "Parfois, vous devez suivre les pistes au fur et à mesure qu'elles se présentent au cours d'une enquête. Choisissez une créature que vous pouvez voir et qui, à votre connaissance, n'est liée à aucune de vos enquêtes en cours. Pendant la minute qui suit, vous pouvez sports_martial_artsConcevoir un stratagème contre cette créature par une action gratuite."
            ]
        },
        {
            "name"       : "Symbole affaiblissant r",
            "level"      : "12",
            "traits"     : [
                "Prêtre",
                "Divin"
            ],
            "required"   : [
                "Lever un symbole"
            ],
            "description": [
                "Déclencheur Alors que vous avez Levé votre symbole, vous êtes sur le point de subir des dégâts d'une attaque au corps-à-corps.",
                "Votre symbole religieux s'illumine avec une énergie sacrée, transformant la force de l'attaque en faiblesse. Tentez un test de casinoReligion contre le DD Volonté de la créature déclencheuse. Indépendamment du résultat, la créature est temporairement immunisée pendant 1 minute.",
                "Succès critique La créature est sentiment_very_dissatisfiedAffaiblie 2 jusqu'à ce qu'elle utilise au moins une action pour s'éloigner de vous.",
                "Succès Comme en cas de succès critique, mais la créature est sentiment_very_dissatisfiedAffaiblie 1 ."
            ]
        },
        {
            "name"       : "Symphonie de la muse",
            "level"      : "20",
            "traits"     : [
                "Barde"
            ],
            "required"   : [
                "Harmoniser"
            ],
            "description": [
                "Vous savez comment entremêler d'innombrables représentations pour former une seule et même symphonie. La limite d'une seule composition par tour ou d'une seule composition à la fois n'est plus en vigueur dans votre cas ; quand vous utilisez une nouvelle composition, tous les effets des compositions précédentes continuent jusqu'à la fin de leur durée."
            ]
        },
        {
            "name"       : "Symphonie du coeur affranchi",
            "level"      : "10",
            "traits"     : [
                "Barde"
            ],
            "required"   : [],
            "description": [
                "Vous apprenez le sort de composition auto_awesomeSymphonie du cœur affranchi qui vous permet de protéger un allié contre les états incapacitants."
            ]
        },
        {
            "name"       : "Taillade du tigre 2",
            "level"      : "6",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "Posture du tigre"
            ],
            "description": [
                "Conditions Vous êtes dans la military_techPosture du tigre",
                "Vous lacérez violemment avec vos deux mains. Faites une Frappe de griffe de tigre. Elle inflige deux dés de dégâts d'arme supplémentaires (trois si vous êtes de niveau 14 ou supérieur) et vous pouvez repousser la cible de 1,50 mètre comme si vous aviez réussi à la sports_martial_artsPousser . Si l'attaque est un coup critique et inflige des dégâts, ajoutez votre modificateur de Force aux dégâts de saignement de votre griffe de tigre."
            ]
        },
        {
            "name"       : "Targe élégante",
            "level"      : "1",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Vous avez appris à positionner votre worktarge de manière souple pour en tirer davantage de protection. Lorsque vous sports_martial_artsLevez un bouclier pour gagner un bonus de circonstances à la CA d'une targe, augmentez le bonus de +1 à +2.",
                "Tant que vous avez une targe levée, si une créature obtient un échec critique sur vous avec une Frappe, vous obtenez du panache jusqu'à la fin de votre prochain tour."
            ]
        },
        {
            "name"       : "Technique invraisemblable r",
            "level"      : "20",
            "traits"     : [
                "Fortune",
                "Moine"
            ],
            "required"   : [],
            "description": [
                "Déclencheur L'attaque d'un ennemi vous touche ou vous obtenez un échec sur un jet de sauvegarde contre une capacité d'un ennemi.",
                "Conditions Vous ne portez aucune armure et vous n'êtes pas Fatigué",
                "Vous exécutez une manœuvre qui défie le champ du possible. Si l'effet déclencheur était une attaque d'un ennemi qui vous touche, celui-ci relance son jet d'attaque et utilise le moins bon résultat. Si l'effet déclencheur était un échec sur votre jet de sauvegarde, vous relancez le jet de sauvegarde et utilisez le meilleur résultat."
            ]
        },
        {
            "name"       : "Techniques immortelles",
            "level"      : "20",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "maître de plusieurs styles"
            ],
            "description": [
                "Vous passez d'une technique à l'autre, vous renouvelant au fur et à mesure que vous embrassez chaque style que vous maîtrisez. La première fois chaque round que vous utilisez une action qui possède à la fois les traits moine et posture, vous obtenez 20 Points de vie temporaires qui durent jusqu'au début de votre prochain tour."
            ]
        },
        {
            "name"       : "Terre sacrée",
            "level"      : "4",
            "traits"     : [
                "Prêtre",
                "Consécration",
                "Divin",
                "Exploration"
            ],
            "required"   : [
                "source de guérison ou source de mise à mal"
            ],
            "description": [
                "Fréquence Une fois toute les 10 minutes",
                "Vous priez continuellement pendant 1 minute pour appeler une ombre subtile provenant du royaume de votre divinité sur une crop_freeexplosion de 9 mètres centrée sur vous. Elle dure pendant 10 minutes et une créature qui reste dans la zone pendant la totalité de ces 10 minutes regagne un nombre de Points de vie égal à votre niveau. Si vous possédez une source de guérison, cette activité possède les traits guérison et vitalité et soigne les créatures vivantes. Si vous disposez d'une source de mise à mal, cette activité possède les traits guérison et vide et soigne les créatures mortes-vivantes (ou d'autres créatures avec Guérison du vide). Les prêtres dotés d'une source polyvalente peuvent choisir l'une ou l'autre ou les deux. Dans tous les cas, cette activité ne peut pas infliger de dégâts aux créatures."
            ]
        },
        {
            "name"       : "Terroriser les morts-vivants",
            "level"      : "2",
            "traits"     : [
                "Prêtre",
                "Émotion",
                "Terreur",
                "Mental"
            ],
            "required"   : [],
            "description": [
                "L'énergie de vitalité terrorise les morts-vivants. Lorsque vous utilisez un sort de auto_awesomeGuérison pour blesser les morts-vivants, tout mort-vivant qui rate son jet de sauvegarde est également sentiment_very_dissatisfiedEffrayé 1 . En cas d'échec critique à son jet de sauvegarde, il est également sentiment_very_dissatisfiedEn fuite jusqu'au début de votre prochain tour. Les morts-vivants dénués d'intelligence ne sont pas immunisés à cet effet en dépit du fait qu'ils sont dénués d'intelligence."
            ]
        },
        {
            "name"       : "Tir concentré 1",
            "level"      : "12",
            "traits"     : [
                "Concentration",
                "Moine"
            ],
            "required"   : [
                "Posture de l'archer monastique"
            ],
            "description": [
                "Conditions Vous êtes dans la Posture de l'archer monastique.",
                "Vous atteignez un état de calme parfait avant de déclencher votre attaque, ouvrant votre esprit aux mouvements infimes du monde qui vous entoure pour accroître votre précision.",
                "Faites une Frappe à distance avec une arme contre une cible dans le premier facteur de portée de votre arme. Cette Frappe ignore l'état sentiment_very_dissatisfiedMasqué et tout abri de votre cible."
            ]
        },
        {
            "name"       : "Tir de ciblage 1",
            "level"      : "14",
            "traits"     : [
                "Concentration",
                "Persévérer",
                "Rôdeur"
            ],
            "required"   : [
                "Visée du chasseur"
            ],
            "description": [
                "Vous observez attentivement la position et les défenses de votre proie, ce qui vous permet de tirer sur elle, quels que soient les obstacles entre vous et elle. Faites une Frappe avec une arme à distance contre votre proie. Vous ignorez l'état sentiment_very_dissatisfiedMasqué et tous les abris dont elle bénéficie."
            ]
        },
        {
            "name"       : "Tir de loin",
            "level"      : "4",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [],
            "description": [
                "Votre expérience sur le terrain vous a appris à vous concentrer sur votre visée pour améliorer votre précision lorsque vous tirez à longue distance. Doublez les facteurs de portée de votre arme."
            ]
        },
        {
            "name"       : "Tir de soutien 1",
            "level"      : "2",
            "traits"     : [
                "Guerrier",
                "Persévérer"
            ],
            "required"   : [
                "Vous maniez une arme à distance"
            ],
            "description": [
                "Conditions Vous maniez une arme à distance.",
                "En utilisant votre dernière munition pour jauger de votre précision, vous pouvez faire un rapide tir pour interférer avec un ennemi en combat. Faites une Frappe avec une arme à distance. Si la Frappe touche, la prochaine créature autre que vous qui attaque la même cible avant le début de votre prochain tour, obtient un bonus de circonstances de +1 à son jet ou un bonus de circonstances de +2 si votre Frappe était un coup critique.",
                "flareEffet : Tir de soutien"
            ]
        },
        {
            "name"       : "Tir déroutant",
            "level"      : "12",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [],
            "description": [
                "La puissance brute de vos attaques ou leur accablante profusion, déconcerte votre ennemi. Si vous obtenez un coup critique contre votre proie avec une arme à distance ou si vous la touchez deux fois lors du même tour avec une arme à distance, elle est sentiment_very_dissatisfiedPrise au dépourvu jusqu'au début de votre prochain tour."
            ]
        },
        {
            "name"       : "Tir déroutant supérieur",
            "level"      : "16",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "Tir déroutant"
            ],
            "description": [
                "Même un seul de vos projectiles peut déséquilibrer votre adversaire et de plus puissantes attaques le laissent dérouté plus longtemps. Si vous touchez votre proie avec une arme à distance, elle est sentiment_very_dissatisfiedPrise au dépourvu jusqu'au début de votre prochain tour. Si vous obtenez un coup critique ou si vous touchez deux fois votre proie au cours du même tour avec une arme à distance, elle est Prise au dépourvu jusqu'à la fin de votre prochain tour à la place."
            ]
        },
        {
            "name"       : "Tir divisé 1",
            "level"      : "4",
            "traits"     : [
                "Concentration",
                "Ensorceleur",
                "Mutamagie"
            ],
            "required"   : [],
            "description": [
                "Vous fragmentez un sort à distance. Si votre prochaine action consiste à Lancer un sort sans durée qui nécessite un jet d'attaque contre une seule cible, vous pouvez choisir une seconde cible qui se trouve à portée. Vous lancez un seul jet d'attaque et vous comparez le résultat aux CA des deux cibles.",
                "Cela compte comme une seule attaque pour votre pénalité d'attaques multiples. Sur la seconde cible, le sort n'inflige que la moitié des dégâts normaux et n'a pas d'effet au delà des dégâts initiaux du sort (tel que l'application d'état ou de pénalité)."
            ]
        },
        {
            "name"       : "Tir du chasseur 1",
            "level"      : "1",
            "traits"     : [
                "Sophistication",
                "Rôdeur"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez une arme à distance avec un rechargement 0.",
                "Vous faites deux tirs rapides contre celui que vous chassez. Faites deux Frappes contre votre proie avec l'arme requise. Si les deux touchent la même créature, combinez leurs dégâts avant d'appliquer les résistances et les faiblesses. Vous appliquez à chaque Frappe votre pénalité d'attaques multiples normalement."
            ]
        },
        {
            "name"       : "Tir en partant 2",
            "level"      : "4",
            "traits"     : [
                "Guerrier"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez une arme à distance chargée ou une arme à distance avec un rechargement 0",
                "Vous faites un saut en arrière et effectuez un tir rapidement qui prend votre adversaire par surprise. Vous sports_martial_artsFaites un pas puis effectuez une sports_martial_artsFrappe à distance avec l'arme requise. Votre cible est sentiment_very_dissatisfiedPrise au dépourvu contre l'attaque."
            ]
        },
        {
            "name"       : "Tir fichant r",
            "level"      : "8",
            "traits"     : [
                "Moine"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Vous utilisez sports_martial_artsDéluge de coups pour effectuer deux sports_martial_artsFrappes à distance avec des armes perforantes contre la même cible.",
                "Vous ciblez les vêtements de votre adversaire, son équipement ou de la chair accessible avec des projectiles perforants pour la clouer au sol ou à une surface à proximité.",
                "Si vos deux attaques touchent, la cible doit réussir un jet de casinoRéflexes contre votre DD de classe ou devenir sentiment_very_dissatisfiedImmobilisée jusqu'à ce qu'elle ou une créature adjacente réussisse un test d'Athlétisme contre un DD 10 pour retirer les projectiles fichés.",
                "La créature ne devient pas immobilisée si elle est intangible, constituée de liquide (comme le serait un élémentaire d'eau ou certaines vases) ou si elle peut autrement s'échapper sans effort."
            ]
        },
        {
            "name"       : "Tir incapacitant 2",
            "level"      : "10",
            "traits"     : [
                "Guerrier",
                "Sophistication"
            ],
            "required"   : [],
            "description": [
                "En visant un point faible, vous ralentissez votre adversaire avec un tir précis. Faites une Frappe avec une arme à distance. Si elle touche et inflige des dégâts, la cible est sentiment_very_dissatisfiedRalentie 1 jusqu'à la fin de son prochain tour."
            ]
        },
        {
            "name"       : "Tir légendaire",
            "level"      : "20",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "légendaire en Perception, Maître chasseur, Tir de loin"
            ],
            "description": [
                "Vous vous focalisez sur votre proie, en analysant les angles de tir, la résistance de l'air et toutes les variables susceptibles d'affecter votre attaque à distance. Si vous êtes un maître dans le maniement de votre arme à distance, quand vous attaquez votre proie, vous ignorez la pénalité de distance si celle-ci est inférieure ou égale à cinq fois le facteur de portée de votre arme."
            ]
        },
        {
            "name"       : "Tir parfait 3",
            "level"      : "18",
            "traits"     : [
                "Sophistication",
                "Rôdeur"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez une arme à distance chargée avec rechargement 1 ou supérieur et vous n'avez pas rechargé votre arme depuis votre dernier tour.",
                "Après avoir observé les mouvements du combat avec intensité et précision, vous tirez sur votre proie au moment idéal pour lui infliger la douleur maximale. Faites une Frappe à distance contre votre proie avec l'arme requise. Si vous touchez, la Frappe inflige le montant maximum de dégâts. Votre tour se termine après la Frappe."
            ]
        },
        {
            "name"       : "Tir pénétrant 2",
            "level"      : "10",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez une arme à distance",
                "Vous tirez à travers une créature intermédiaire pour atteindre votre proie. Choisissez une cible qui offre un abri partiel à votre proie. Faites une unique Frappe à distance avec l'arme requise contre la cible désignée et votre proie. Cette attaque ignore l'abri partiel que la cible désignée offre à votre proie. Faites un unique jet de dégâts et appliquez le à chaque créature touchée. Une Frappe pénétrante compte comme deux attaques pour le calcul de votre pénalité d'attaques multiples."
            ]
        },
        {
            "name"       : "Tir renversant 2",
            "level"      : "12",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Vos attaques à distance peuvent faire chuter un adversaire s'il ne s'y attend pas. Faites une Frappe à distance contre une créature sentiment_very_dissatisfiedPrise au dépourvu . Si la Frappe est un succès et inflige des dégâts, la cible doit tenter un jet de casinoRéflexes contre votre DD de classe.",
                "Succès La cible n'est pas affectée.",
                "Échec La cible tombe d'une distance maximale de 36 mètres. Si elle tombe au sol, elle ne subit pas de dégâts de chute.",
                "Échec critique Comme en cas d'échec, mais la cible ne peut plus léviter, sauter, voler ni quitter le sol d'une autre façon jusqu'à la fin de votre prochain tour."
            ]
        },
        {
            "name"       : "Tir retourné",
            "level"      : "6",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "Parade de projectile, Posture de l'archer Monastique"
            ],
            "description": [
                "Conditions Vous êtes dans la military_techPosture de l'archer monastique , en train de manier un arc et disposez d'une main libre.",
                "Interceptant une flèche en l'air, vous la placez instantanément sur votre arc et retournez le tir. Lorsque vous réussissez votre military_techParade de projectile avec une flèche, faisant partie de cette réaction, vous pouvez faire immédiatement une Frappe à distance à l'arc en tirant la flèche que vous avez attrapée à partir de votre propre arc."
            ]
        },
        {
            "name"       : "Tir soudain",
            "level"      : "6",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [],
            "description": [
                "Vous pouvez réagir avec les armes à distance lorsqu'une créature est en combat rapproché. Vous pouvez utiliser une réaction qui vous permet normalement de porter une Frappe au corps-à-corps pour porter à la place Une Frappe à distance. Vous devez Frapper une cible adjacente. Si c'est nécessaire pour le déclencheur de la réaction, vous considérez que votre arme à distance a une allonge de 1,50 mètre. Si la réaction impose d'autres conditions, telles que de manier un type d'arme spécifique, Tir soudain ne vous permet pas de les ignorer ; il vous permet seulement de remplacer une Frappe avec une arme au corps-à-corps par une Frappe avec une arme à distance."
            ]
        },
        {
            "name"       : "Tir triangulé 2",
            "level"      : "18",
            "traits"     : [
                "Concentration",
                "Fortune",
                "Moine"
            ],
            "required"   : [
                "Posture de l'archer monastique, Coups étourdissants"
            ],
            "description": [
                "Conditions Vous êtes dans la military_techposture de l'Archer monastique et maniez un arc utilisable avec cette posture.",
                "Vous encochez trois flèches sur la corde de votre arc et les tirez toutes en même temps. Faites trois Frappes à distance contre une unique cible avec l'arme requise, chacune utilisant votre pénalité d'attaques multiples actuelle avec une pénalité supplémentaire de -2. Cela compte comme deux attaques lorsque vous calculez votre pénalité d'attaques multiples et vous combinez les dégâts des attaques pour les besoins de déterminer les résistances et les faiblesses. Le bénéfice de vos Coups étourdissants s'applique à votre Tir triangulé, même si ce n'est pas un Déluge de coups. Si les trois Frappes touchent, la cible subit casino3d6 dégâts de saignement ."
            ]
        },
        {
            "name"       : "Toile de l'ombre",
            "level"      : "14",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "Initié des ombres tenaces"
            ],
            "description": [
                "Vous pouvez lancer une vague de Qi fait d'ombre à partir de votre corps, infligeant des dégâts à vos adversaires et les figeant potentiellement sur place. Vous obtenez le Sort Qi auto_awesomeToile d'ombre ."
            ]
        },
        {
            "name"       : "Torsion libre 1",
            "level"      : "10",
            "traits"     : [
                "Guerrier",
                "Persévérer"
            ],
            "required"   : [
                "qualifié en Athlétisme"
            ],
            "description": [
                "Conditions Vous maniez une seule arme de corps-à-corps à une main et vous ne tenez rien d'autre dans vos mains.",
                "Après que votre attaque initiale a redirigé les défenses de votre ennemi, celle qui suit lui arrache son arme. Effectuez une attaque au corps-à-corps avec une arme au corps-à-corps à une main. Effectuez une Frappe au corps-à-corps avec l'arme requise. En plus de ses autres effets, cette Frappe obtient les effets de succès et de succès critique de l'action sports_martial_artsDésarmer . La Frappe a également l'effet d'échec suivant.",
                "Échec La cible est Prise au dépourvu jusqu'à la fin de votre tour actuel.",
                "Spécial Si vous êtes en military_techPosture désarmante , vous obtenez un bonus de circonstances de +1 au jet d'attaque."
            ]
        },
        {
            "name"       : "Touche-à-tout éclectique",
            "level"      : "12",
            "traits"     : [
                "Barde"
            ],
            "required"   : [
                "Touche-à-tout ésotérique"
            ],
            "description": [
                "Votre esprit flexible peut rapidement échanger un sort contre un autre. Si vous ajoutez un sort à votre répertoire pendant vos préparatifs quotidiens en utilisant military_techTouche-à-tout ésotérique , quand vous le préparez à nouveau, vous pouvez choisir de garder ce nouveau sort provenant de Touche-à-tout ésotérique dans votre répertoire et de perdre à la place l'accès à un autre sort de même rang de votre répertoire."
            ]
        },
        {
            "name"       : "Touche-à-tout ésotérique",
            "level"      : "2",
            "traits"     : [
                "Barde"
            ],
            "required"   : [
                "Touche-à-tout (muse de barde)"
            ],
            "description": [
                "Vous possédez un livre de sorts occultes, semblable à un grimoire de magicien, et vous pouvez utiliser ses sorts qu'il contient en plus de ceux de votre répertoire. Inscrivez gratuitement tous les sorts de votre répertoire dans ce livre. Vous pouvez utiliser la compétence Occultisme pour Apprendre des sorts et les ajouter à votre grimoire en payant les coûts appropriés.",
                "Au cours de vos préparatifs quotidiens, choisissez l'un des sorts de votre livre de sorts occultes. Si ce sort est déjà dans votre répertoire, vous pouvez le considérer comme un sort emblématique supplémentaire pour la journée. S'il n'est pas dans votre répertoire, considérez qu'il l'est jusqu'à vos prochains préparatifs quotidiens."
            ]
        },
        {
            "name"       : "Touche-à-tout invraisemblable",
            "level"      : "18",
            "traits"     : [
                "Barde"
            ],
            "required"   : [
                "qualifié en Arcanes, Nature, Occultisme ou Religion, Touche-à-tout ésotérique"
            ],
            "description": [
                "Vos formules ésotériques sont si inhabituelles qu'elles vous permettent de vous essayer à la magie d'autres traditions que les autres bardes ne comprennent pas. Tant que vous êtes qualifié en Arcanes, vous pouvez ajouter des sorts arcaniques dans votre livre issu de military_techTouche-à-tout ésotérique . Tant que vous êtes qualifié en Nature, vous pouvez y ajouter des sorts primordiaux. Tant que vous êtes qualifié en Religion, vous pouvez y ajouter des sorts divins.",
                "Comme les autres sorts dans votre livre, vous pouvez ajouter un des sorts dd'une autre tradition à votre répertoire en tant que sort occulte chaque jour en utilisant Touche-à-tout ésotérique mais vous ne pouvez pas conserver les sorts d'une autre tradition lorsque pour faites de nouveau vos préparatifs, même si vous avez military_techTouche-à-tout éclectique ."
            ]
        },
        {
            "name"       : "Touche-à-tout ultime",
            "level"      : "20",
            "traits"     : [
                "Barde"
            ],
            "required"   : [
                "Touche-à-tout (muse de barde)"
            ],
            "description": [
                "Vous pouvez lancer tout vos sorts avec flexibilité, vous accordant un nombre époustouflant d'options possibles. Tous les sorts de votre répertoire sont pour vous des sorts emblématiques."
            ]
        },
        {
            "name"       : "Toucher amplificateur",
            "level"      : "12",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "Sort de dévotion (imposition des mains)"
            ],
            "description": [
                "Votre énergie de guérison renforce les attaques. Un allié qui récupère des Points de vie du fait de votre auto_awesomeImposition des mains obtient un bonus de statut de +1 à ses jets d'attaque et inflige 1 dégât spirituel supplémentaire sur toutes ses Frappes jusqu'à la fin de son prochain tour. De plus, toutes ses Frappes sont saintes jusqu'à la fin de son prochain tour.",
                "flareEffet : Toucher amplificateur"
            ]
        },
        {
            "name"       : "Toucher de résilience",
            "level"      : "10",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "sort de dévotion (Imposition des mains)"
            ],
            "description": [
                "Vos énergies curatives créent une aura de protection qui protège vos alliés contre bien plus que des lames et des flèches.",
                "Un allié qui récupère des Points de vie grâce à votre auto_awesomeImposition des mains obtient un bonus de statut de +1 à ses jets de sauvegarde jusqu'à la fin de son prochain tour."
            ]
        },
        {
            "name"       : "Toucher rajeunissant",
            "level"      : "18",
            "traits"     : [
                "Champion"
            ],
            "required"   : [
                "Imposition des mains"
            ],
            "description": [
                "Vos énergies curatrices persistent après vos incantations, procurant un bénéfice continue. Un allié qui récupère des Points de vie par votre Imposition des mains obtient 10 Points de vie temporaires immédiatement et au début de son tour durant chacun des 10 prochains rounds. Ces Points de vie temporaires durent jusqu'au début du tour de la créature. Cet effet s'interrompt si l'allié est rendu sentiment_very_dissatisfiedInconscient .",
                "flareEffet : Toucher rajeunissant"
            ]
        },
        {
            "name"       : "Toxines tenaces",
            "level"      : "4",
            "traits"     : [
                "Alchimiste"
            ],
            "required"   : [],
            "description": [
                "Vos victimes ont tendance à expirer bien avant vos poisons, puisque ces derniers ont été spécifiquement formulés pour durer plus longtemps. La durée maximale de tout poison que vous créez augmente d'une durée égale à l'intervalle du stade 1 du poison, jusqu'à un maximum de deux fois la durée maximale du poison."
            ]
        },
        {
            "name"       : "Traction du loup 2",
            "level"      : "6",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "Posture du loup"
            ],
            "description": [
                "Conditions Vous êtes dans la military_techPosture du loup",
                "Vous fauchez les jambes de votre ennemi. Faites une Frappe de mâchoire de loup. Votre Frappe de mâchoire de loup bénéficie du trait fatal d12 et si l'attaque est réussie, la cible se retrouve sentiment_very_dissatisfiedÀ terre ."
            ]
        },
        {
            "name"       : "Transformation curative 1",
            "level"      : "10",
            "traits"     : [
                "Druide",
                "Mutamagie"
            ],
            "required"   : [],
            "description": [
                "Vous tirez avantage de votre magie de métamorphose pour refermer les blessures et soigner les plaies. Si votre prochaine action consiste à lancer un sort de métamorphose qui n'est pas un tour de magie et qui cible une seule créature, ce sort de métamorphose permet également à la créature ciblée de récupérer 1d6 Points de vie par rang du sort. C'est un effet de guérison."
            ]
        },
        {
            "name"       : "Transformation en dragon 1",
            "level"      : "16",
            "traits"     : [
                "Barbare",
                "Concentration",
                "Métamorphose",
                "Primordial",
                "Rage"
            ],
            "required"   : [
                "Ailes de rage du dragon"
            ],
            "description": [
                "Vous vous métamorphosez en un féroce dragon de taille Grande et bénéficiez des effets du sort auto_awesomeForme de dragon au rang 6, mais vous continuez d'utiliser votre CA et votre modificateur d'attaque. Vous appliquez également vos dégâts supplémentaires de sports_martial_artsRage et l'action de Souffle de dragon utilise votre DD de classe. Ajoutez les Points de vie temporaires de la forme de dragon à ceux que vous avez déjà en entrant en rage (ou toute autre action avec le trait rage). L'action permettant de Révoquer la transformation obtient le trait rage.",
                "Au niveau 18, vous obtenez un bonus de statut de +6 mètres à votre Vitesse de vol, votre bonus aux dégâts avec vos Frappes de dragon passe à +12 et vous obtenez un bonus de statut de +14 aux dégâts de votre souffle de dragon."
            ]
        },
        {
            "name"       : "Transformation réactive r",
            "level"      : "14",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "Forme indomptée, Forme draconique, Forme élémentaire, Forme de plante ou Morphologie volante"
            ],
            "description": [
                "Déclencheur variable",
                "Vous vous transformez instinctivement face au danger. Vous lancez auto_awesomeForme indomptée pour vous transformer en une des formes accordées par un des dons prérequis que vous possédez, en fonction du déclencheur. Les résistances et les faiblesses de cette forme s'appliquent aux dégâts déclencheurs.",
                "Déclencheur Vous chutez de 3 mètres ou plus",
                "Effet Choisissez une des formes de auto_awesomeForme volante .",
                "Déclencheur Vous subissez des dégâts contondants ou de poison",
                "Effet Choisissez une des formes de auto_awesomeForme draconique qui résiste aux dégâts déclencheurs.",
                "Déclencheur Vous subissez des dégâts de feu",
                "Effet Choisissez une des formes d'élémentaire de feu de auto_awesomeForme élémentaire .",
                "Déclencheur Vous subissez des dégâts de poison",
                "Effet Choisissez une des formes de auto_awesomeForme de plante ."
            ]
        },
        {
            "name"       : "Tremblement de la montagne 1",
            "level"      : "14",
            "traits"     : [
                "Moine"
            ],
            "required"   : [
                "Bastion de la montagne"
            ],
            "description": [
                "Conditions Vous êtes dans la military_techPosture de la montagne",
                "Vous piétinez pour faire trembler la terre sous vos pieds. Les créatures sur le sol dans une crop_freeémanation de 6 mètres subissent un montant de dégâts égal à votre modificateur de Force (0 au minimum), avec un jet de casinoVigueur contre votre DD de classe. Elles tombent également sentiment_very_dissatisfiedÀ terre en cas d'échec. Après avoir effectué cette action, vous ne pouvez plus la réutiliser avant casino1d4 rounds .",
                "Spécial Si vous avez ce don, le bonus de Dextérité maximal à votre CA lorsque vous prenez la Posture de la montagne passe de +1 à +2."
            ]
        },
        {
            "name"       : "Triple menace",
            "level"      : "20",
            "traits"     : [
                "Rôdeur"
            ],
            "required"   : [
                "Proie commune"
            ],
            "description": [
                "Vous pouvez partager votre attention entre trois créatures distinctes lorsque vous chassez. Quand vous utilisez sports_martial_artsChasser une proie , vous pouvez désigner trois créatures en guise de proies ou deux créatures et partager l'effet avec un allié (comme avec Proie commune) ou une créature et partager l'effet avec deux alliés."
            ]
        },
        {
            "name"       : "Triple tir",
            "level"      : "6",
            "traits"     : [
                "Guerrier"
            ],
            "required"   : [
                "Double tir"
            ],
            "description": [
                "Vous pouvez tirer rapidement plusieurs tirs avec un grand contrôle. Quand vous utilisez military_techDouble tir , vous pouvez porter les attaques contre la même cible. Vous pouvez ajouter une action au Double tir afin de faire trois Frappes à distance au lieu de deux. Si vous le faites, la pénalité s'élève à -4. Toutes les attaques comptent dans le calcul de votre pénalité d'attaques multiples mais la pénalité n'augmente qu'après les avoir toutes effectuées."
            ]
        },
        {
            "name"       : "Trompe la mort r",
            "level"      : "12",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [],
            "description": [
                "Déclencheur Vous subissez des dégâts qui devraient vous faire passer à 0 Point de vie.",
                "Vous vous êtes arrangé pour échapper à la faucheuse à un cheveu près. Vous évitez de sombrer dans l'inconscience ou d'être tué, restez à 1 Point de vie et gagnez du flarePanache , mais vous devenez sentiment_very_dissatisfiedCondamné 1 (ou augmentez la valeur de Condamné de 1 si vous étiez déjà Condamné).",
                "Vous ne pouvez réduire ou ignorer l'état Condamné de Trompe la mort. L'état Condamné de Trompe la mort dure pendant 10 minutes bien que cela n'affecte pas la durée de toute autre état Condamné que vous possédez."
            ]
        },
        {
            "name"       : "Trompeur magique",
            "level"      : "4",
            "traits"     : [
                "Roublard"
            ],
            "required"   : [],
            "description": [
                "Que ce soit en utilisant des objets magiques, en maniant de la magie innée ou en bricolant l'incantation de sorts, vous pouvez glisser vos sorts à travers les défenses de vos ennemis aussi facilement que vous le feriez d'une lame. Quand vous obtenez un succès sur un jet d'attaque de sort contre la CA d'un adversaire Pris au dépourvu et que ce sort inflige des dégâts, vous pouvez ajouter vos dégâts d'attaque sournoise au jet de dégâts. Si votre unique sort conduit à effectuer plusieurs jets de dégâts séparés, vous n'appliquez vos dégâts d'attaque sournoise qu'une seule fois par cible."
            ]
        },
        {
            "name"       : "Tu es le suivant r",
            "level"      : "1",
            "traits"     : [
                "Émotion",
                "Terreur",
                "Mental",
                "Roublard",
                "Bretteur"
            ],
            "required"   : [
                "qualifié en Intimidation"
            ],
            "description": [
                "Déclencheur Vous réduisez un ennemi à 0 Point de vie",
                "Roublard Après avoir abattu un adversaire, vous en menacez un autre. Tentez de sports_martial_artsDémoraliser une créature qui se trouve dans les 18 mètres. Si vous êtes légendaire en Intimidation, vous pouvez utiliser ceci comme une action gratuite ayant le même déclencheur.",
                "Bretteur Après avoir abattu un adversaire, vous promettez à un autre de venir le chercher ensuite. Faites un test d'Intimidation avec un bonus de circonstances de +2 pour sports_martial_artsDémoraliser une unique créature que vous pouvez voir et qui peut vous voir. Si vous êtes légendaire en Intimidation, vous pouvez utiliser ce pouvoir par une action gratuite ayant le même déclencheur."
            ]
        },
        {
            "name"       : "Un pour tous 1",
            "level"      : "1",
            "traits"     : [
                "Audible",
                "Concentration",
                "Émotion",
                "Linguistique",
                "Mental",
                "Bretteur"
            ],
            "required"   : [
                "qualifié en Diplomatie"
            ],
            "description": [
                "Avec précisément les bons mots d'encouragement, vous soutenez les efforts d'un allié. Désignez un allié dans les 9 mètres. Cette action compte comme une préparation suffisante pour sports_martial_artsAider cet allié. Lorsque vous utilisez la réaction Aider pour aider cet allié, vous pouvez lancer un test de casinoDiplomatie au lieu du test habituel et l'action acquiert le trait bravade."
            ]
        },
        {
            "name"       : "Vengeance furieuse r",
            "level"      : "16",
            "traits"     : [
                "Barbare",
                "Rage"
            ],
            "required"   : [
                "Instinct de la furie"
            ],
            "description": [
                "Déclencheur Un ennemi au corps-à-corps dans votre allonge réussit contre vous un coup critique avec une Frappe au corps-à-corps.",
                "Le coup de votre ennemi alimente votre rage et provoque une riposte immédiate. Faites une Frappe au corps-à-corps contre l'ennemi déclencheur."
            ]
        },
        {
            "name"       : "Vengeance vicieuse",
            "level"      : "1",
            "traits"     : [
                "Peu courant",
                "Champion"
            ],
            "required"   : [
                "Cause : iniquité"
            ],
            "description": [
                "Alors que votre vengeance est douloureuse à la fois pour vous et votre adversaire, personne ne peut douter que vos ennemis souffrent davantage.",
                "Vous obtenez un bonus de circonstances aux dégâts que vous infligez avec sports_martial_artsVengeance destructrice égal au nombre de dés de dégâts de la réaction. Cela ne s'applique qu'aux dégâts subis par l'adversaire, pas à ceux que vous subissez ou aux dégâts supplémentaires que vous infligez après avoir utilisé la réaction."
            ]
        },
        {
            "name"       : "Venin du cobra 1",
            "level"      : "10",
            "traits"     : [
                "Moine",
                "Poison"
            ],
            "required"   : [
                "Posture du cobra, expert en attaques à mains nues"
            ],
            "description": [
                "Fréquence Une fois par minute",
                "Conditions Vous êtes dans la military_techPosture du cobra .",
                "Vous vous disloquez légèrement les articulations pour vous élancer avec une intention sournoise et le pouvoir d'empoisonner votre ennemi. Faites une Frappe de crochets du cobra. Votre allonge avec cette frappe est de 1,50 mètre de plus que la normale. Si cette Frappe touche, les dégâts persistants de poison du trait venimeux augmentent à casino1d4 dégâts de poison persistants par dé de dégâts de l'arme.",
                "Spécial Si vous avez ce don, le bonus de circonstances aux jets de Vigueur et le DD des jets de Vigueur de Posture du cobra passe de +1 à +2."
            ]
        },
        {
            "name"       : "Vents ascendants",
            "level"      : "12",
            "traits"     : [
                "Druide"
            ],
            "required"   : [
                "ordre de la tempête"
            ],
            "description": [
                "Les vents sont impatients de vous maintenir en altitude. Lorsque vous volez et que vous lancez un sort ayant le trait air ou électricité, vous obtenez un bonus de statut de +3 mètres à votre Vitesse de vol et vous pouvez immédiatement Voler jusqu'à la moitié de votre Vitesse."
            ]
        },
        {
            "name"       : "Vérité du patron",
            "level"      : "20",
            "traits"     : [
                "Sorcier"
            ],
            "required"   : [
                "Don du patron"
            ],
            "description": [
                "Vous avez maîtrisé les plus grands secrets de la magie de votre patron et appris une vérité fondamentale à propos de votre patron, même si son identité reste toujours un mystère. Vous obtenez un emplacement de sort de rang 10 supplémentaire."
            ]
        },
        {
            "name"       : "Vie chanceuse r",
            "level"      : "2",
            "traits"     : [
                "Bretteur"
            ],
            "required"   : [
                "Charisme +2"
            ],
            "description": [
                "Déclencheur Vous tentez un jet de sauvegarde, mais n'avez pas encore lancé les dés.",
                "Lorsque le danger vous guette, vous avez une étrange manière de toujours vous en sortir au mieux. Vous obtenez un bonus de circonstances de +2 sur le jet déclencheur. Si vous obtenez un succès au jet de sauvegarde déclencheur, vous obtenez du flarePanache jusqu'à la fin de votre prochain tour."
            ]
        },
        {
            "name"       : "Visée du chasseur 2",
            "level"      : "2",
            "traits"     : [
                "Concentration",
                "Rôdeur"
            ],
            "required"   : [],
            "description": [
                "Lorsque vous vous concentrez pour viser, votre attaque devient particulièrement précise. Faites une Frappe d'arme à distance contre votre proie. Pour cette Frappe, vous bénéficiez d'un bonus de circonstances de +2 sur le jet d'attaque et ignorez l'état sentiment_very_dissatisfiedMasqué de votre proie et tout abri inférieur."
            ]
        },
        {
            "name"       : "Visée extraordinaire 2",
            "level"      : "8",
            "traits"     : [
                "Concentration",
                "Guerrier"
            ],
            "required"   : [],
            "description": [
                "En passant un instant à vous concentrer, vous veillez à ce que votre attaque fasse mouche. Faites une Frappe avec une arme à distance. Pour cette Frappe, vous bénéficiez d'un bonus de circonstances de +2 au jet d'attaque et vous ignorez l'état sentiment_very_dissatisfiedMasqué de la cible."
            ]
        },
        {
            "name"       : "Visée mortelle 1",
            "level"      : "8",
            "traits"     : [
                "Sophistication",
                "Rôdeur"
            ],
            "required"   : [
                "spécialisation martiale"
            ],
            "description": [
                "Vous visez les points faibles de votre proie, rendant votre tir plus difficile mais permettant d'infliger plus de dégâts si vous touchez. Faites une Frappe à distance contre votre proie avec une pénalité de -2. Vous bénéficiez d'un bonus de circonstances de +4 aux dégâts de cette Frappe. Ce bonus passe à +6 au niveau 11 et à +8 au niveau 15."
            ]
        },
        {
            "name"       : "Vision dans la brume",
            "level"      : "8",
            "traits"     : [
                "Sorcier"
            ],
            "required"   : [],
            "description": [
                "Votre vision perce les brumes, le brouillard, la pluie et la neige non magiques. Vos attaques à distance et vos tests de Perception ne subissent pas de pénalité de circonstances à cause de précipitations non magiques et vos attaques contre une cible sentiment_very_dissatisfiedMasquée par un tel effet ne nécessitent pas de test nu non plus pour réussir."
            ]
        },
        {
            "name"       : "Vision de l'âme (Barde)",
            "level"      : "8",
            "traits"     : [
                "Barde"
            ],
            "required"   : [],
            "description": [
                "Votre muse a ouvert votre perception au monde de l'au-delà. Vous obtenez Sens spirituel comme un sens imprécis avec une portée de 18 mètres. Sens spirituel vous permet de sentir les esprits des créatures, incluant les créatures vivantes, la plupart des morts-vivants intelligents et les hantises dans la portée indiquée. Comme avec votre ouïe et les autres sens imprécis, vous avez toujours besoin de sports_martial_artsChercher pour localiser une créature Non détectée.",
                "Comme Sens spirituel détecte l'essence spirituelle et non les corps physiques, elle peut détecter les esprits projetés par des sorts tels que auto_awesomeProjection d'image ou les objets sans âmes possédés. Il ne peut détecter les corps sans âme, les créatures artificielles ou les objets et comme la plupart des sens, il ne peut pénétrer à travers les objets solides."
            ]
        },
        {
            "name"       : "Vision de l'âme (Ensorceleur)",
            "level"      : "8",
            "traits"     : [
                "Ensorceleur"
            ],
            "required"   : [
                "Lignage qui accorde des sorts occultes ou divins"
            ],
            "description": [
                "L'essence spirituelle dans votre sang a ouvert vos sens au monde de l'au-delà. Vous obtenez Sens spirituel comme un sens imprécis avec une portée de 18 mètres.",
                "Sens spirituel vous permet de sentir les esprits des créatures, incluant les créatures vivantes, la plupart des morts-vivants intelligents et les hantises dans la portée indiquée. Comme avec votre ouïe et les autres sens imprécis, vous avez toujours besoin de sports_martial_artsChercher pour localiser une créature Non détectée.",
                "Comme Sens spirituel détecte l'essence spirituelle et pas les corps physiques, il peut détecter les esprits projetés par des sorts tels que auto_awesomeProjection d'image ou les objets sans âmes possédés. Il ne peut détecter les corps sans âme, les créatures artificielles ou les objets et comme la plupart des sens, il ne peut passer à travers les objets solides."
            ]
        },
        {
            "name"       : "Vision perçante",
            "level"      : "1",
            "traits"     : [
                "Barbare"
            ],
            "required"   : [],
            "description": [
                "Quand vous êtes enragé, votre vision s'améliore et vous gagnez vision dans le noir."
            ]
        },
        {
            "name"       : "Vivacité du détective",
            "level"      : "4",
            "traits"     : [
                "Enquêteur"
            ],
            "required"   : [],
            "description": [
                "Lorsque vous êtes sur une affaire, vous restez vigilant et déterminé à éviter les ficelles que votre suspect pourrait tirer. Vous obtenez votre bonus d'enquête issu de sports_martial_artsSuivre une piste sur vos jets de sauvegarde (et leurs DD, comme à l'ordinaire) contre les créatures ou les effets qui sont en rapport avec la question au cœur d'une enquête ouverte et vous pouvez utiliser sports_martial_artsPartager les indices pour aider un de vos alliés lors d'un jet de sauvegarde contre cette créature ou cet effet."
            ]
        },
        {
            "name"       : "Voix discordante",
            "level"      : "18",
            "traits"     : [
                "Barde",
                "Son"
            ],
            "required"   : [
                "Hymne de courage"
            ],
            "description": [
                "Votre auto_awesomeHymne de courage relâche un son discordant qui imprègne les attaques de vos alliés avec de puissantes réverbérations sonores. Tant que vos alliés sont affectés par votre Hymne de courage, leurs Frappes avec des armes et leurs attaques à mains nues infligent 1d6 dégâts de son supplémentaires."
            ]
        },
        {
            "name"       : "Volée invraisemblable 3",
            "level"      : "18",
            "traits"     : [
                "Guerrier",
                "Sophistication",
                "Rôdeur"
            ],
            "required"   : [],
            "description": [
                "Conditions Vous maniez une arme à distance avec le trait volée et rechargement 0",
                "Vous tirez une volée de projectiles sur tous les adversaires dans une zone. Faites une Frappe avec une pénalité de -2 contre chaque ennemi dans une crop_freeexplosion de 3 mètres centrée sur un point situé à une distance supérieure ou égale à la portée de volée de votre arme. Lancez les dégâts seulement une fois pour toutes les cibles.",
                "Chaque attaque est prise en compte dans le calcul de votre pénalité d'attaques multiples, mais celle-ci n'augmente qu'après avoir effectué toutes vos attaques."
            ]
        },
        {
            "name"       : "Vortex déroutant 1",
            "level"      : "6",
            "traits"     : [
                "Ensorceleur"
            ],
            "required"   : [],
            "description": [
                "Conditions Votre plus récente action était de Lancer un sort qui n'est pas un tour de magie.",
                "Vous transférez des vestiges d'énergie magique dans l'air qui vous entoure, créant ainsi un vortex qui dévie les attaques à distance. Jusqu'au début de votre prochain tour, vous obtenez un bonus de statut de +1 à votre CA contre les attaques à distance par arme et les attaques physiques à mains nues à distance."
            ]
        },
        {
            "name"       : "Yeux du familier 1",
            "level"      : "12",
            "traits"     : [
                "Concentration",
                "Sorcier"
            ],
            "required"   : [
                "un familier"
            ],
            "description": [
                "Vous utilisez les sens de votre familier aussi facilement que les vôtres.",
                "Vous projetez vos sens dans votre familier. Lorsque vous le faites, vous perdez toutes les informations sensorielles de votre propre corps mais vous pouvez ressentir à travers le corps de votre familier jusqu'à ce que vous sports_martial_artsRévoquiez l'effet.",
                "En projetant vos sens de cette manière, vous pouvez converser télépathiquement avec votre familier s'il comprend une langue.",
                "Spécial Ce don possède le trait correspondant à la tradition des sorts que vous lancez (arcanique, divin, occulte ou primordial)."
            ]
        }
    ]
};
