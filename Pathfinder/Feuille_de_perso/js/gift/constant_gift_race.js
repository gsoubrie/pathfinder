"use strict";
DON.RACE = {
    ENUM: [
        [
            {
                "name"       : "Abajoues",
                "level"      : "1",
                "traits"     : [
                    "Homme-rat"
                ],
                "required"   : [],
                "description": [
                    "Vos joues sont extensibles et vous pouvez ranger jusqu'à quatre objets d'Encombrement léger ou inférieur dans vos abajoues. Aucun de ces objets ne peut avoir une dimension plus longue que 30 cm. Tant que vous avez au moins un objet dans vos abajoues, vos propos sont significativement difficiles à comprendre. Placer un objet dans vos abajoues ou le retirer est une action Interagir. Vous pouvez vider votre bouche en une seule action, provoquant la chute au sol dans votre case de tout ce que vous aviez emmagasiné dans vos abajoues."
                ]
            },
            {
                "name"       : "Abri de l'allié r",
                "level"      : "5",
                "traits"     : [
                    "Fortune",
                    "Kobold"
                ],
                "required"   : [],
                "description": [
                    "Frequency once per day",
                    "Trigger You attempt a saving throw while adjacent to one or more allies, but you haven't rolled yet.",
                    "You follow your allies' example. Roll the save using an adjacent ally's modifier for that type of saving throw instead of your own."
                ]
            },
            {
                "name"       : "Absorber la force 1",
                "level"      : "5",
                "traits"     : [
                    "Peu courant",
                    "Kholo"
                ],
                "required"   : [],
                "description": [
                    "Fréquence Une fois par heure",
                    "Conditions Vous êtes adjacent au cadavre d'un ennemi mort depuis moins de 1 minute.",
                    "Vous consommez un morceau de votre ennemi, absorbant sa force. Vous gagnez un nombre de Points de vie temporaires égal au niveau de l'ennemi qui durent pendant 1 minute."
                ]
            },
            {
                "name"       : "Absorber la toxine r",
                "level"      : "9",
                "traits"     : [
                    "Tripkee"
                ],
                "required"   : [
                    "Vous n'êtes pas immunisé aux maladies ou aux poisons"
                ],
                "description": [
                    "Déclencheur Vous faites un jet de sauvegarde contre un effet de maladie ou de poison qui affecte une zone.",
                    "Votre peau absorbe facilement le poison et vous pouvez consciemment aspirer les toxines dans votre corps pour épargner les autres. Faites un test de contre contre l'effet déclencheur. Votre rang de contre est égal à la moitié de votre niveau (arrondi au supérieur), et pour le test, vous utilisez soit votre DD de classe - 10, soit votre modificateur d'attribut d'incantation plus votre bonus de maîtrise de lanceur de sorts. Si vous contrez l'effet déclencheur, vous mettez fin à l'effet pour toutes les autres créatures dans la zone. Cependant, vous devez toujours faire un jet de sauvegarde contre l'effet, avec une pénalité de -2 au jet de sauvegarde initial."
                ]
            },
            {
                "name"       : "Accoutrement imaginaire 1",
                "level"      : "5",
                "traits"     : [
                    "Concentration",
                    "Gnome",
                    "Illusion",
                    "Primordial",
                    "Visuel"
                ],
                "required"   : [],
                "description": [
                    "Alors que d'autres gravent leurs armures pour servir d'exutoire à leur imagination, votre esprit vif et votre personnalité audacieuse vous permettent de projeter votre personnalité sur une armure manquant de lustre. Vous changez la forme et l'apparence de votre armure pour qu'elle apparaisse comme étant des habits ordinaires ou comme de beaux atours issus de votre imagination. Les statistiques de l'armure ne changent pas. Cet effet dure tant que vous restez conscient et que vous portez l'armure. Une créature peut percer l'illusion en Cherchant ou en touchant votre armure. Le DD est égal à votre casinoVolonté ."
                ]
            },
            {
                "name"       : "Accroche-sangsue 2",
                "level"      : "1",
                "traits"     : [
                    "Hobgobelin"
                ],
                "required"   : [],
                "description": [
                    "Vous êtes rompu à la capture de déserteurs ou \"sangsues\". Faites une Frappe au corps-à-corps avec une arme du groupe des fléaux. Si elle touche, la cible subit une pénalité de -3 mètres à sa Vitesse (ou de -4,50 mètres sur un coup critique). Cette pénalité dure pendant 1 round. Elle ne s'applique que si la cible a une Vitesse au sol et dépend de ses jambes ou autres appendices discernables lui permettant d'utiliser cette Vitesse au sol et cela ne peut pas réduire la vitesse de la créature en dessous de 1,50 mètre.",
                    "flareEffet : Accroche-sangsue"
                ]
            },
            {
                "name"       : "Adaptabilité culturelle",
                "level"      : "5",
                "traits"     : [
                    "Halfelin"
                ],
                "required"   : [],
                "description": [
                    "Au cours de vos aventures, vous avez affiné votre capacité à vous adapter à la culture de l'ascendance qui prédomine dans votre entourage.",
                    "Vous obtenez le don général military_techAscendance adoptive , ainsi qu'un don ancestral de niveau 1 tiré de la liste de dons de l'ascendance que vous avez choisi avec Ascendance adoptive."
                ]
            },
            {
                "name"       : "Adepte de l'adaptation",
                "level"      : "5",
                "traits"     : [
                    "Humain"
                ],
                "required"   : [
                    "Tour de magie adapté, capacité de lancer des sorts de rang 3"
                ],
                "description": [
                    "Vous avez continué d'adapter votre magie pour mélanger la tradition de votre classe avec votre tradition adaptée. Choisissez un tour de magie ou un sort de rang 1 tiré de la même tradition que le tour de magie que vous avez obtenu avec Tour de magie adapté. Vous obtenez ce sort et l'ajoutez de la même manière que le tour de magie du don Tour de magie adapté. Vous pouvez lancer ce sort comme un sort de la tradition magique de votre classe. Si vous avez choisi un sort de rang 1, vous n'avez pas accès aux versions intensifiées de ce sort, ce qui signifie que vous ne pouvez pas le préparer si vous préparez vos sorts et que vous ne pouvez pas l'apprendre ou choisir ce sort pour en faire un sort emblématique si vous avez un répertoire de sorts."
                ]
            },
            {
                "name"       : "Adepte du Premier monde",
                "level"      : "9",
                "traits"     : [
                    "Gnome"
                ],
                "required"   : [
                    "au moins un sort inné primordial"
                ],
                "description": [
                    "Votre magie féerique s'est renforcée avec le temps.",
                    "Vous obtenez auto_awesomeInvisibilité et auto_awesomeLumière révélatrice comme sorts innés primordiaux de rang 2. Vous pouvez lancer chacun de ces sorts innés primordiaux une fois par jour."
                ]
            },
            {
                "name"       : "Agilité instinctive",
                "level"      : "1",
                "traits"     : [
                    "Tengu"
                ],
                "required"   : [],
                "description": [
                    "Vous avez un sens de l'équilibre quasi-surnaturel qui vous permet de vous déplacer rapidement à travers les surfaces les plus instables. Vous obtenez le don de compétence military_techÉquilibre stable . Vous pouvez Faire un pas sur un terrain difficile provoqué par un sol instable, tel qu'un terrain rocailleux ou une déclivité accidentée."
                ]
            },
            {
                "name"       : "Aide de groupe",
                "level"      : "9",
                "traits"     : [
                    "Humain"
                ],
                "required"   : [],
                "description": [
                    "Votre éducation a mis l'accent sur le travail en équipe et aider vos alliés vous vient naturellement. Lorsque vous avez sports_martial_artsAidé un allié pour un test de compétence qui n'a pas le trait attaque, vous pouvez aussi aider tout autre allié qui essaie le même test de compétence dans le même but durant ce round. Vous le faites par une action gratuite plutôt que par une réaction.",
                    "La préparation que vous avez réalisée doit toujours s'appliquer aux autres alliés et vous pouvez Aider chaque allié seulement une fois. Par exemple, si vous faites la courte échelle à un allié pour l'Aider sur un test d'Athlétisme pour escalader un mur, vous pourriez conserver la même posture pour donner un appui aux tentatives de vos autres alliés qui tentent d'escalader le mur lors du même round."
                ]
            },
            {
                "name"       : "Ailes à volonté 2",
                "level"      : "9",
                "traits"     : [
                    "Attaque",
                    "Sang-dragon"
                ],
                "required"   : [
                    "expert en Athlétisme"
                ],
                "description": [
                    "Vous disposez d'une paire d'ailes draconiques suffisamment puissantes pour battre vos ennemis et les repousser. Choisissez jusqu'à deux créatures qui vous sont adjacentes. Faites un test d' casinoAthlétisme et comparez-le au DD de Vigueur de chaque cible. Ceci compte comme deux attaques dans le calcul de votre pénalité d'attaques multiples, mais l'augmentation de la pénalité ne s'applique qu'après les deux attaques.",
                    "Succès critique La cible subit des dégâts contondants égaux au double de votre niveau ( casino2*@actor.level contondant ) et elle est repoussée jusqu'à 3 mètres de vous.",
                    "Succès La cible subit des dégâts contondants égaux à votre niveau ( casino@actor.level contondant ) et elle est repoussée jusqu'à 1,50 mètre de vous.",
                    "Échec La cible subit des dégâts contondants égaux à la moitié de votre niveau ( casino(floor(@actor.level/2)) contondant ).",
                    "Échec critique Vous tombez sentiment_very_dissatisfiedÀ terre à la fin de votre action."
                ]
            },
            {
                "name"       : "Ailes divines 2",
                "level"      : "9",
                "traits"     : [
                    "Divin",
                    "Transformation",
                    "Néphilim"
                ],
                "required"   : [],
                "description": [
                    "Fréquence Une fois par jour",
                    "Avec un petit effort, vous pouvez invoquer dans votre dos des ailes magiques, similaires en apparence à celles de vos ancêtres extraplanaires, qu'ils s'agissent d'élégantes ailes emplumées ou d'horribles ailes de chauve-souris. Ces ailes persistent pendant 10 minutes. Vous obtenez une Vitesse de vol égale à votre Vitesse au sol tant que vos ailes sont ainsi manifestées."
                ]
            },
            {
                "name"       : "Ailes éternelles (Néphilim)",
                "level"      : "17",
                "traits"     : [
                    "Néphilim"
                ],
                "required"   : [
                    "Ailes divines"
                ],
                "description": [
                    "Vos ailes sont désormais une partie permanente de votre corps. Vous obtenez les effets d' military_techAiles divines à tout moment, plutôt que juste une fois par jour pendant 10 minutes."
                ]
            },
            {
                "name"       : "Ailettes",
                "level"      : "5",
                "traits"     : [
                    "Kobold"
                ],
                "required"   : [],
                "description": [
                    "Du fait de l'influence latente du protecteur de votre terrier, une paire de petites ailes a poussé dans votre dos. Quoique insuffisante pour voler réellement, ces ailettes peuvent vous aider à sauter plus loin grâce à leurs petits battements. Lorsque vous Sautez horizontalement, vous vous déplacez de 1,50 mètre supplémentaire. Cette distance supplémentaire n'est pas cumulable avec la distance de sports_martial_artsBond augmentée liée au don military_techBond puissant . De plus, lorsque vous tentez un sports_martial_artsSaut en longueur , vous pouvez sauter à une distance qui va jusqu'à 3 mètres de plus que la distance que vous pourriez normalement franchir au regard du résultat de votre test d'Athlétisme, bien que vous ne puissiez toujours pas sauter plus loin que votre Vitesse. Vous n'obtenez pas automatiquement un échec à vos tests de sports_martial_artsSaut en hauteur ou de Saut en longueur si vous ne Marchez pas rapidement d'au moins 3 mètres."
                ]
            },
            {
                "name"       : "Allonge agrippante 1",
                "level"      : "1",
                "traits"     : [
                    "Léchi"
                ],
                "required"   : [],
                "description": [
                    "Vous pouvez étendre une vrille de plante grimpante pour aider vos bras à augmenter votre allonge. Lorsque vous maniez une arme de corps-à-corps qui nécessite deux mains, ne possède pas d'allonge et inflige au moins 1d6 dégâts, vous pouvez passer d'une prise normale à deux mains à une prise étendue à deux mains en utilisant une action Interagir. Les armes maniées dans votre prise étendue obtiennent une allonge de 3m. Cette prise est moins stable et moins puissante, réduisant le dé de dégât de l'arme d'un cran."
                ]
            },
            {
                "name"       : "Ambition naturelle",
                "level"      : "1",
                "traits"     : [
                    "Humain"
                ],
                "required"   : [],
                "description": [
                    "On vous a appris à être ambitieux et à toujours vous dépasser, ce qui vous permet de progresser rapidement dans votre domaine de prédilection. vous obtenez un don de classe de niveau 1 dans votre classe. Vous devez posséder les prérequis de ce don, mais vous pouvez le sélectionner plus tard dans le processus de création de votre personnage afin de vérifier si vous possédez tous les prérequis"
                ]
            },
            {
                "name"       : "Âme coopérative",
                "level"      : "9",
                "traits"     : [
                    "Humain"
                ],
                "required"   : [],
                "description": [
                    "Vous avez développé un lien profond avec vos camarades et pouvez ainsi encore mieux coopérer avec eux. Si vous êtes au moins expert dans la compétence à laquelle vous apportez votre sports_martial_artsAide , lorsque vous obtenez un échec ou un échec critique à vos tests pour Aider, il devient un succès."
                ]
            },
            {
                "name"       : "Ami des avortons",
                "level"      : "5",
                "traits"     : [
                    "Hobgobelin"
                ],
                "required"   : [],
                "description": [
                    "Contrairement à la plupart des vôtres, qui considèrent les gobelins comme de l'embarras ou des inconvénients facilement remplaçables, vous avez étudié la méthodologie derrière leurs actions irresponsables et incompréhensibles. Vous obtenez le don général military_techAscendance adoptive et devez choisir l'ascendance gobelin. Vous obtenez aussi un don ancestral gobelin de niveau 1."
                ]
            },
            {
                "name"       : "Appel de l'homme vert",
                "level"      : "13",
                "traits"     : [
                    "Léchi"
                ],
                "required"   : [],
                "description": [
                    "Vous invoquez les esprits de la nature proches de vous pour améliorer votre corps. Une fois par jour, vous pouvez lancer auto_awesomeForme de plante comme un sort inné primordial de rang 5. Lorsque vous atteignez le niveau 17, vous pouvez intensifier au rang 6 lorsque vous le lancez."
                ]
            },
            {
                "name"       : "Appel de nuée 3",
                "level"      : "17",
                "traits"     : [
                    "Homme-rat"
                ],
                "required"   : [
                    "Langage des rats"
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vous émettez un sifflement strident et pointez du doigt et une énorme nuée de rats jaillit du terrain environnant pour remplir une crop_freeexplosion de 9 mètres dans les 36 mètres. Les rats courent sur le sol et grimpent sur les murs et les surfaces, mordant et griffant tout en infligeant casino6d8 dégâts perforants à tous les ennemis dans la zone. Les rats continuent de grouiller dans la zone pendant la minute suivante, infligeant casino3d8 dégâts perforants à tout ennemi qui termine son tour dans la zone et transformant la zone en terrain difficile (bien que les rats vous permettent, à vous ainsi qu'à vos alliés, de passer normalement). Vous pouvez Révoquer l'effet."
                ]
            },
            {
                "name"       : "Appel du Cimetière",
                "level"      : "17",
                "traits"     : [
                    "Peu courant",
                    "Crépusculaire"
                ],
                "required"   : [],
                "description": [
                    "Vous disposez d'un lien puissant avec le Cimetière et ses cours, vous faisant bénéficier de la capacité de voyager jusqu'au Cimetière et d'en revenir. Vous pouvez lancer auto_awesomeTéléportation interplanaire comme sort divin inné deux fois par semaine.",
                    "Ce sort peut seulement être utilisé pour voyager vers le Cimetière ou du Cimetière vers l'Univers. Compte tenu de votre lien unique avec le Cimetière, votre corps sert de locus pour le sort et vous n'avez pas besoin d'une clé planaire."
                ]
            },
            {
                "name"       : "Appelé",
                "level"      : "5",
                "traits"     : [
                    "Changelin"
                ],
                "required"   : [],
                "description": [
                    "Vous avez entendu l'Appel et, en lui résistant, vous avez développé un rempart mental contre les effets qui cibleraient votre esprit. Vous obtenez un bonus de circonstances de +1 aux jets de Volonté contre les effets mentaux. Si vous obtenez un succès sur votre jet de sauvegarde contre un effet mental qui devrait vous rendre sentiment_very_dissatisfiedContrôlé , il devient un succès critique."
                ]
            },
            {
                "name"       : "Armement non conventionnel",
                "level"      : "1",
                "traits"     : [
                    "Humain"
                ],
                "required"   : [],
                "description": [
                    "Vous vous êtes familiarisé avec une arme particulière, issue potentiellement d'une autre ascendance ou culture. Choisissez une arme simple ou de guerre peu courante avec le trait correspondant à une ascendance (comme nain, gobelin ou orc) ou qui est courante dans une autre culture. Vous avez accès à cette arme et, afin de déterminer votre maîtrise, vous la considérez comme une arme simple.",
                    "Si vous êtes qualifié avec toutes les armes de guerre, vous pouvez choisir à la place une arme évoluée peu courante qui possède un trait d'ascendance ou qui est courante dans une autre culture. Vous avez accès à cette arme et êtes familier avec cette dernière. Pour déterminer votre maîtrise, vous la considérez comme une arme de guerre."
                ]
            },
            {
                "name"       : "Arpenteur de la jungle",
                "level"      : "1",
                "traits"     : [
                    "Tripkee"
                ],
                "required"   : [],
                "description": [
                    "Vous êtes habile à esquiver les racines, le feuillage et autres obstacles de la jungle. Vous ignorez le terrain difficile dans les forêts et les jungles. De plus, lorsque vous utilisez la compétence Acrobaties pour sports_martial_artsgarder l'Équilibre sur des surfaces étroites ou un sol inégal fait de végétaux, vous n'êtes pas sentiment_very_dissatisfiedPris au dépourvu et lorsque vous obtenez un succès à l'un de ces tests d'Acrobaties, il devient un succès critique."
                ]
            },
            {
                "name"       : "Arpenteur des roches",
                "level"      : "1",
                "traits"     : [
                    "Nain"
                ],
                "required"   : [],
                "description": [
                    "Votre connexion innée avec la pierre vous permet de vous déplacer plus facilement sur des surfaces accidentées. Vous pouvez ignorer le terrain difficile causé par la pierre (comme des débris ou des gravats). De plus, quand vous utilisez la compétence Acrobaties pour sports_martial_artsGarder l'équilibre sur des surfaces étroites ou sur un sol inégal de pierre ou de terre, vous n'êtes pas sentiment_very_dissatisfiedPris au dépourvu et, quand vous obtenez un succès sur un tel test d'Acrobaties, il devient un succès critique."
                ]
            },
            {
                "name"       : "Arsenal Iruxi",
                "level"      : "1",
                "traits"     : [
                    "Homme-lézard"
                ],
                "required"   : [],
                "description": [
                    "Vos armes sont celles avec lesquelles vous êtes né. Choisissez l'une des options suivantes :",
                    [
                        "Griffes Vos attaques de griffe infligent 1d6 dégâts tranchants au lieu de 1d4 et obtiennent le trait Polyvalent P.",
                        "Crocs Vous obtenez une attaque à main nues de crocs qui inflige 1d8 dégâts perforants et appartient au groupe pugilat.",
                        "Queue Vous obtenez une attaque à mains nues de queue qui inflige 1d6 dégâts contondants, appartient au groupe pugilat et possède le trait Balayage."
                    ],
                    "Au niveau 5, lorsque vous obtenez un coup critique avec l'une des attaques à mains nues que vous avez obtenues avec ce don, vous bénéficiez de son effet critique spécialisé.",
                    "Spécial Vous pouvez prendre ce don plusieurs fois et choisir une attaque à main nues différente à chaque fois."
                ]
            },
            {
                "name"       : "Aspect draconique",
                "level"      : "1",
                "traits"     : [
                    "Sang-dragon"
                ],
                "required"   : [],
                "description": [
                    "Vous possédez des traits draconiques évidents, tels que des griffes acérées, un museau plein de dents pointues ou une puissante queue reptilienne, que vous pouvez utiliser de manière offensive. Vous obtenez à votre choix une des attaques à mains nues suivantes. L'attaque est dans le groupe pugilat et possède les traits et les dégâts indiqués.",
                    [
                        "Griffe 1d4 tranchants (à mains nues, agile, finesse)",
                        "Mâchoires 1d6 perforants (à mains nues, percutant)",
                        "Queue 1d6 contondants (à mains nues, balayage, croc-en-jambe)"
                    ],
                    "Spécial Vous ne pouvez choisir ce don qu'au niveau 1 et vous ne pouvez utiliser le réapprentissage pour le perdre ou le gagner par la suite, pas plus que vous ne pouvez changer le type d'attaque que vous avez obtenu."
                ]
            },
            {
                "name"       : "Aspect mortel",
                "level"      : "5",
                "traits"     : [
                    "Sang-dragon"
                ],
                "required"   : [
                    "Aspect draconique"
                ],
                "description": [
                    "Vous avez aiguisé l'attaque à mains nues que votre héritage draconique vous a accordé à un degré létal. L'attaque à mains nues que vous avez obtenu par Aspect draconique obtient le trait mortel d8."
                ]
            },
            {
                "name"       : "Assistance gracieuse",
                "level"      : "5",
                "traits"     : [
                    "Félide"
                ],
                "required"   : [],
                "description": [
                    "Vous pouvez démontrer comment vous écarter rapidement du passage de dangereux effets. Vous pouvez utiliser la réaction sports_martial_artsAider pour accorder à un allié un bonus au jet de Réflexes. Comme à l'ordinaire avec Aider, vous avez besoin de vous préparer en utilisant une action lors de votre tour pour encourager l'allié."
                ]
            },
            {
                "name"       : "Atavisme elfique",
                "level"      : "1",
                "traits"     : [
                    "Aiuvarin"
                ],
                "required"   : [],
                "description": [
                    "Votre sang elfique est particulièrement fort, ce qui vous confère des traits bien plus elfiques que ceux d'un aiuvarin typique. Vous avez peut-être été élevé parmi les elfes avez baigné dans l'héritage de vos ancêtres elfes. Vous bénéficiez alors des avantages de l'héritage elfique de vos parents ou ancêtres elfes. En règle générale, vous ne pouvez pas choisir un héritage qui dépend d'une caractéristique elfique que vous ne possédez pas ou qui l'améliore. Par exemple, vous ne pouvez pas choisir l'héritage Elfe ancien à moins que votre ascendance non-elfe n'ait aussi une durée de vie mesurée en siècles. Dans ce cas, à la discrétion du MJ, vous pouvez bénéficier d'un avantage différent.",
                    "Spécial Vous pouvez seulement choisir ce don au niveau 1 et vous ne pouvez pas utiliser le réapprentissage pour perdre ou obtenir ce don."
                ]
            },
            {
                "name"       : "Attrait fascinant",
                "level"      : "5",
                "traits"     : [
                    "Dhampir"
                ],
                "required"   : [],
                "description": [
                    "Les pouvoirs de domination employés par vos géniteurs se sont également manifestés en vous. Vous pouvez Lancer auto_awesomeCharme comme un sort inné divin une fois par jour. Son rang de sort est égal à la moitié de votre niveau arrondi au supérieur, mais il n'augmente pas sa durée ni le nombre de ses cibles aux rangs 4 et 8."
                ]
            },
            {
                "name"       : "Autotomie caudale r",
                "level"      : "5",
                "traits"     : [
                    "Homme-lézard"
                ],
                "required"   : [
                    "Arsenal iruxi (queue)"
                ],
                "description": [
                    "Déclencheur Vous devenez sentiment_very_dissatisfiedAgrippé .",
                    "Conditions Vous avez une queue complètement repoussée.",
                    "Vous pouvez abandonner une portion de votre queue pour vous échapper. Vous cessez d'être agrippé, puis vous Marchez rapidement sans déclencher la moindre réaction de la part de la créature qui vous a agrippé. Il faut 1 semaine pour que votre queue repousse complètement. Jusqu'à ce que ce soit le cas, vous ne pouvez plus faire d'attaques à mains nues avec votre queue et vous subissez une pénalité de circonstances de -2 sur les tests pour sports_martial_artsGarder l'équilibre ."
                ]
            },
            {
                "name"       : "Avaler la chance r",
                "level"      : "5",
                "traits"     : [
                    "Concentration",
                    "Divin",
                    "Tengu"
                ],
                "required"   : [],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Une créature dans les 18 mètres utilise un effet de fortune ou d'infortune.",
                    "Lorsque quelqu'un essaie de modifier le destin, vous ruinez son interférence. L'effet déclencheur est interrompu. Si c'est un effet d'infortune, Avaler la chance obtient le trait fortune ; si c'est un effet de fortune, Avaler la chance obtient le trait infortune. Cet effet de fortune ou d'infortune s'applique au même jet que le ferait l'effet déclencheur, de sorte que vous ne pourriez annuler un effet de fortune avec Avaler la chance puis appliquer un effet d'infortune au même jet."
                ]
            },
            {
                "name"       : "Avantage du terrain",
                "level"      : "9",
                "traits"     : [
                    "Homme-lézard"
                ],
                "required"   : [],
                "description": [
                    "Les créatures qui ne sont pas des hommes-lézard situées sur un terrain difficile sont sentiment_very_dissatisfiedPrises au dépourvu par rapport à vous.",
                    "Si vous disposez d'une Vitesse de nage, les créatures qui ne sont pas des hommes-lézard, qui se trouvent dans l'eau et ne possèdent pas de Vitesse de nage sont aussi Prises au dépourvu à votre égard."
                ]
            },
            {
                "name"       : "Avantage empoisonné",
                "level"      : "13",
                "traits"     : [
                    "Tripkee"
                ],
                "required"   : [],
                "description": [
                    "Grâce à une combinaison de vos glandes à poison et de concoctions à base de plantes, vous pouvez délivrer des attaques venimeuses de manière constante lorsque vous touchez les points faibles d'un ennemi. Lorsque vous obtenez un coup critique avec une arme ou une attaque à mains nues et que vous infligez des dégâts tranchants ou perforants avec ce coup, vous infligez à votre cible 1d4 dégâts de poison persistants supplémentaires."
                ]
            },
            {
                "name"       : "Bain hydratant 1",
                "level"      : "9",
                "traits"     : [
                    "Tripkee",
                    "Manipulation"
                ],
                "required"   : [],
                "description": [
                    "Fréquence Une fois par jour",
                    "Votre peau humide est particulièrement résistante aux dégâts provoqués par les effets liés aux changements de température. Tentez un casinoTest nu, DD 10 . En cas de succès, vous mettez fin à tous les dégâts de feu persistants et de froid en cours. De plus, vous obtenez une résistance au feu et au froid égale à la moitié de votre niveau pendant 1 minute."
                ]
            },
            {
                "name"       : "Bêtes féroces",
                "level"      : "13",
                "traits"     : [
                    "Orque"
                ],
                "required"   : [
                    "Dresseur de bêtes, animal de compagnie ou compagnon animal, Férocité orque"
                ],
                "description": [
                    "Depuis des temps immémoriaux, les plus puissants dresseurs de bêtes orques tiraient de leurs compagnons bestiaux un véritable esprit guerrier en les nourrissant avec un mélange incorporant un peu de leur propre sang orque. Tous vos compagnons animaux, animaux de compagnie, familiers ou animaux liés qui vous sont liés possèdent le don military_techFérocité orque et obtiennent une réaction par round qu'ils ne peuvent utiliser que pour Férocité orque. Si vous possédez le don ancestral military_techFérocité immortelle , tous les compagnons animaux, familiers, animaux de compagnie ou animaux liés obtiennent aussi les avantages de ce don lorsqu'ils utilisent la réaction Férocité orque."
                ]
            },
            {
                "name"       : "Bien soigné",
                "level"      : "5",
                "traits"     : [
                    "Félide"
                ],
                "required"   : [],
                "description": [
                    "Vous êtes méticuleux sur la propreté. Vous obtenez un bonus de circonstances de +2 aux jets de sauvegarde contre les maladies. Si vous obtenez un succès sur un jet de sauvegarde contre une maladie, il devient un succès critique. Si vous avez une capacité différente qui devrait améliorer le jet de sauvegarde de cette manière (comme avec la capacité de guerrier Endurci au combat ), si vous obtenez un échec critique sur le jet de sauvegarde, il devient un échec."
                ]
            },
            {
                "name"       : "Bloc protecteur",
                "level"      : "5",
                "traits"     : [
                    "Nain"
                ],
                "required"   : [],
                "description": [
                    "Le roc qui vous entoure est votre allié et vous avez appris à l'utiliser pour compenser vos faiblesses.",
                    "Tant que vous restez sur le sol et êtes adjacent à un mur en pierre vertical dont la hauteur atteint au moins votre taille, vous n'êtes pas sentiment_very_dissatisfiedPris au dépourvu contre les attaques qui résultent d'une prise en tenaille. Cela fonctionne même si vous êtes au coin extérieur d'un mur."
                ]
            },
            {
                "name"       : "Bond débridé",
                "level"      : "17",
                "traits"     : [
                    "Tripkee"
                ],
                "required"   : [],
                "description": [
                    "Vos prouesses en saut sont inégalées. Vous pouvez sports_martial_artsBondir jusqu'à 9 mètres dans n'importe quelle direction sans toucher le sol et sans avoir besoin d'effectuer de test d'Athlétisme. Lorsque vous le faites, vous devez atterrir sur un espace de terre ferme dans un rayon de 9 mètres, sinon vous tombez après avoir utilisé votre action suivante. Vous pouvez dépasser votre Vitesse normale lorsque vous Bondissez.",
                    "Spécial Si vous avez le don Bonds fantastiques, la distance totale que vous parcourez avec un Bond horizontal est de 12 mètres et de 10,50 mètres pour un Bond vertical."
                ]
            },
            {
                "name"       : "Bond sur un orteil 1",
                "level"      : "1",
                "traits"     : [
                    "Tengu"
                ],
                "required"   : [],
                "description": [
                    "En adoptant une posture particulière, vous faites un petit bond sur chaque orteil. Vous effectuez un sports_martial_artsBond vertical sans déclencher les réactions qui peuvent être déclenchées par les actions de déplacement ou par le fait de quitter ou de pénétrer dans une case."
                ]
            },
            {
                "name"       : "Bond vital 1",
                "level"      : "9",
                "traits"     : [
                    "Gnome",
                    "Déplacement",
                    "Téléportation"
                ],
                "required"   : [],
                "description": [
                    "Conditions Vous devez être adjacent à une créature vivante.",
                    "Vous passez à travers l'espace qu'une créature vivante occupe en un instant, apparaissant spontanément du côté opposé accompagné dans une vive explosion de lumière colorée. Vous vous déplacez de votre lieu actuel vers un autre lieu qui reste toujours adjacent à la même créature vivante, mais du côté opposé ou dans le coin opposé par rapport à l'espace de la créature. Pour déterminer si une position est valide, vous utilisez les mêmes règles que pour la prise en tenaille : une ligne à travers le centre des deux cases doit passer par les côtés opposés ou les coins de l'espace de la créature.",
                    "Vous passez au travers de la force vitale de la créature, en apparaissant dans le lieu choisi ; Cela ne déclenche aucune réaction basée sur le déplacement. Vous devez être capable de voir votre destination et vous ne pouvez pas vous déplacer plus loin que ce que votre Vitesse permettrait."
                ]
            },
            {
                "name"       : "Bondé",
                "level"      : "9",
                "traits"     : [
                    "Homme-rat"
                ],
                "required"   : [],
                "description": [
                    "Tant que vous êtes Petit, vous pouvez terminer votre déplacement dans la même case qu'un allié Petit. Seules deux créatures peuvent partager le même espace en utilisant cette faculté ou toute autre faculté similaire."
                ]
            },
            {
                "name"       : "Bonds fantastiques",
                "level"      : "5",
                "traits"     : [
                    "Tripkee"
                ],
                "required"   : [],
                "description": [
                    "Vos bonds semblent défier la gravité lorsque vous élancez dans les airs d'un unique bond. Lorsque vous Bondissez, augmentez la distance maximale que vous pouvez sports_martial_artsSauter horizontalement de 3 mètres et la distance maximale que vous pouvez Sauter verticalement de 1,50 mètre."
                ]
            },
            {
                "name"       : "Boniment campagnard",
                "level"      : "1",
                "traits"     : [
                    "Halfelin"
                ],
                "required"   : [],
                "description": [
                    "Vous avez l'habitude de déguiser des messages codés sous la forme d'idiomes rustiques. Utilisant le slang, les blagues, les emprunts à la langue halfeline et autres procédés du même acabit et vous faites passer un message simple consistant en trois mots de base (tels que “Danger assassin fuyez” ou “rencontre moi lune”).",
                    "L'auditeur que vous visez peut tenter un test de casinoperception, DD 20 pour comprendre le message. Ce DD est réduit de 5 si l'interlocuteur est un halfelin ou réduit de 10 si l'interlocuteur est un halfelin et qu'il possède le don Boniment campagnard ( casinoperception, DD 15 , casinoperception, DD 10 ). Ceux qui écoutent peuvent aussi tenter un test de casinoperception contre votre DD de Duperie pour en discerner la signification. Tous les bonus et les pénalités applicables à la Perception pour les tests pour sports_martial_artsDeviner les intentions s'appliquent aux tests pour comprendre Boniment campagnard."
                ]
            },
            {
                "name"       : "Bravoure naine",
                "level"      : "1",
                "traits"     : [
                    "Nain"
                ],
                "required"   : [],
                "description": [
                    "Vous êtes naturellement calme et recueilli face au danger imminent. À la fin de votre tour, réduisez votre état sentiment_very_dissatisfiedEffrayé de 2 au lieu de 1."
                ]
            },
            {
                "name"       : "Bricoleur de rebuts",
                "level"      : "1",
                "traits"     : [
                    "Gobelin"
                ],
                "required"   : [],
                "description": [
                    "Vous pouvez confectionner des outils utilisables à partir de morceaux de métal tordus ou rouillés. Si vous utilisez la compétence Artisanat pour sports_martial_artsFabriquer quelque chose, vous pouvez créer des objets de niveau 0, y compris des armes et des armures, à partir de déchets. Cela réduit le prix à un quart du montant normal, mais l'objet obtenu est toujours de mauvaise qualité. Les objets de mauvaise qualité donnent normalement une pénalité, mais vous ne subissez pas cette pénalité lorsque vous utilisez les objets de mauvaise qualité que vous avez fabriqués (de même, vous ne subissez pas la pénalité appliquée aux armures de mauvaise qualité).",
                    "Vous pouvez aussi incorporer des rebuts pour ne pas dépenser d'argent lorsque vous Fabriquez n'importe quel objet. Cela vous permet d'obtenir un rabais sur l'objet, comme si vous aviez passé 1 jour supplémentaire à sa fabrication pour en réduire le coût mais l'objet est visiblement fait avec des rebuts. À la discrétion du MJ, cela pourrait avoir une influence sur le prix de revente de l'objet en fonction des goûts de l'acheteur."
                ]
            },
            {
                "name"       : "Brûle !",
                "level"      : "1",
                "traits"     : [
                    "Gobelin"
                ],
                "required"   : [],
                "description": [
                    "Le feu vous fascine. Vos sorts et objets alchimiques qui infligent des dégâts de feu obtiennent un bonus de statut aux dégâts égal à la moitié du rang du sort ou à un quart du niveau de l'objet (avec un minimum de +1). Vous obtenez également un bonus de statut de +1 à tous les dégâts de feu persistants que vous infligez."
                ]
            },
            {
                "name"       : "Camaraderie féérique",
                "level"      : "1",
                "traits"     : [
                    "Gnome"
                ],
                "required"   : [],
                "description": [
                    "Votre lien féerique améliorée (que ce soit à travers votre sang ou à cause d'un contact prolongé avec leur peuple) vous permet de bénéficier d'une réception plus chaleureuse de la part des créatures du Premier Monde ainsi que des outils pour déjouer leurs ruses ou faire face à leur magie. Vous obtenez un bonus de circonstances de +2 à la fois à vos tests de Perception et à vos jets de sauvegarde contre les fées.",
                    "En outre, lorsque vous rencontrez une créature fée dans un cadre social, vous pouvez immédiatement faire un test de Diplomatie pour sports_martial_artsFaire bonne impression à cette créature, sans avoir besoin de converser avec elle pendant 1 minute. Vous faites ce test avec une pénalité de -5. Si vous échouez, vous pouvez passer 1 minute à converser avec la créature et tenter une nouvelle fois de réussir votre test plutôt que d'accepter le résultat d'un échec ou d'un échec critique."
                ]
            },
            {
                "name"       : "Cape de poison 2",
                "level"      : "13",
                "traits"     : [
                    "Léchi",
                    "Poison"
                ],
                "required"   : [],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vous sécrétez une cape de poison concentrée qui blesse quiconque ose vous attaquer. Pendant 1 minute, toute créature qui vous touche ou vous blesse avec une attaque à mains nues ou une attaque d'arme au corps-à-corps sans le trait allonge subit casino3d6 dégâts de poison ."
                ]
            },
            {
                "name"       : "Cavalier farouche",
                "level"      : "1",
                "traits"     : [
                    "Gobelin"
                ],
                "required"   : [],
                "description": [
                    "Vous êtes particulièrement bon cavalier sur les montures traditionnelles des gobelins. Vous obtenez le don military_techChevaucher même si vous n'en possédez pas les prérequis. Vous obtenez un bonus de circonstances de +1 à vos tests de Nature pour utiliser sports_martial_artsDiriger un animal sur une monture chien gobelin ou loup.",
                    "Si vous obtenez un loup comme compagnon animal, il possède le pouvoir spécial monture (et si vous obtenez une capacité qui vous octroie un compagnon animal avec le pouvoir spécial monture, vous pouvez choisir un loup)."
                ]
            },
            {
                "name"       : "Chance de la troupe",
                "level"      : "9",
                "traits"     : [
                    "Félide"
                ],
                "required"   : [
                    "Chance féline"
                ],
                "description": [
                    "Lorsque vous utilisez military_techChance féline pour relancer un jet, toutes les créatures que vous choisissez dans les 3 mètres qui ont obtenu un échec à leur jet contre le même effet (comme un unique sort) peuvent aussi relancer leurs jets de sauvegarde et utiliser le meilleur résultat."
                ]
            },
            {
                "name"       : "Chance directrice",
                "level"      : "9",
                "traits"     : [
                    "Halfelin"
                ],
                "required"   : [
                    "Chance halfeline"
                ],
                "description": [
                    "Votre chance vous guide et vous permet de regarder dans la bonne direction et de porter vos coups de manière infaillible.",
                    "Vous pouvez utiliser Chance halfeline deux fois par jour : une fois en réaction avec son déclencheur normal et une fois après avoir obtenu un échec sur un test de Perception ou un jet d'attaque au lieu du déclencheur normal."
                ]
            },
            {
                "name"       : "Chance étendue",
                "level"      : "5",
                "traits"     : [
                    "Félide"
                ],
                "required"   : [
                    "Chance féline"
                ],
                "description": [
                    "Vous êtes plus chanceux que la plupart des hommes-félins. Vous pouvez déclencher votre military_techChance féline lorsque vous obtenez un échec ou un échec critique sur un jet de Vigueur ou de Volonté en plus du jet de Réflexes. Vous ne pouvez cependant utiliser Chance féline qu'une seule fois par jour."
                ]
            },
            {
                "name"       : "Chance féline f",
                "level"      : "1",
                "traits"     : [
                    "Félide",
                    "Fortune"
                ],
                "required"   : [],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Vous manquez un jet de Réflexes.",
                    "Vous évitez de manière instinctive le danger. Vous pouvez relancer le jet déclencheur et utiliser le meilleur résultat."
                ]
            },
            {
                "name"       : "Chance fiable",
                "level"      : "17",
                "traits"     : [
                    "Félide"
                ],
                "required"   : [
                    "Chance féline"
                ],
                "description": [
                    "Vous survivez aux dangers avec une surprenante régularité. Vous pouvez utiliser military_techChance féline une fois par heure plutôt qu'une fois par jour."
                ]
            },
            {
                "name"       : "Chance halfeline f",
                "level"      : "1",
                "traits"     : [
                    "Fortune",
                    "Halfelin"
                ],
                "required"   : [],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Vous obtenez un échec sur un test de compétence ou sur un jet de sauvegarde.",
                    "Votre nature insouciante donne l'impression que la malchance vous évite et, jusqu'à un certain point, cela pourrait bien être vrai. Vous pouvez relancer le test déclencheur, mais vous devez alors utiliser le nouveau résultat, même s'il est pire."
                ]
            },
            {
                "name"       : "Chant gobelin 1",
                "level"      : "1",
                "traits"     : [
                    "Gobelin"
                ],
                "required"   : [],
                "description": [
                    "Vous entonnez d'agaçants chants gobelins qui distraient vos adversaires avec des paroles stupides et répétitives. Faites un test de casinoReprésentation contre le DD de Volonté d'un unique ennemi dans un rayon de 9 mètres. Ce test possède tous les traits et restrictions normalement associés à un test de Représentation pour chanter. Vous pouvez affecter jusqu'à deux cibles à portée si vous êtes expert en Représentation, quatre si vous êtes maître et huit si vous êtes légendaire.",
                    "Succès critique La cible subit une pénalité de -1 à ses tests de Perception et à ses jets de Volonté pendant 1 minute.",
                    "flareEffet : Chant Gobelin (Succès critique)",
                    "Succès La cible subit une pénalité de -1 à ses tests de Perception et à ses jets de Volonté pendant 1 round.",
                    "flareEffet : Chant Gobelin (Succès)",
                    "Échec critique La cible est temporairement immunisée à vos tentatives d'utiliser Chant gobelin pendant 1 heure."
                ]
            },
            {
                "name"       : "Chanteur puissant",
                "level"      : "5",
                "traits"     : [
                    "Gobelin"
                ],
                "required"   : [
                    "Chant gobelin"
                ],
                "description": [
                    "Rester juste, obtenir le bon contrôle de son souffle ou faire l'effort de se souvenir des paroles sont bien moins importants que la véritable mesure d'un bon chanteur : le volume !",
                    "La portée de votre Chant gobelin passe à 18 m et vous pouvez cibler un ennemi supplémentaire lorsque vous l'utilisez."
                ]
            },
            {
                "name"       : "Charme surnaturel",
                "level"      : "5",
                "traits"     : [
                    "Aiuvarin"
                ],
                "required"   : [],
                "description": [
                    "La magie elfique qui coule dans vos veines se manifeste comme une force que vous pouvez utiliser pour devenir plus séduisant ou intéressant. Vous pouvez lancer le sort auto_awesomeCharme au rang 1 comme un sort inné arcanique une fois par jour."
                ]
            },
            {
                "name"       : "Charognard urbain",
                "level"      : "1",
                "traits"     : [
                    "Gobelin"
                ],
                "required"   : [],
                "description": [
                    "Vous savez que les plus grands trésors ressemblent souvent à des déchets. Vous obtenez un bonus de circonstances de +1 à vos tests pour Subsister et vous pouvez utiliser les compétences Société ou Survie quand vous tentez de sports_martial_artsSubsister dans une agglomération.",
                    "Quand vous tentez de Subsister dans une ville, vous récupérez également des déchets de valeur que ces idiots de grandes guibolles ont jetés. Vous pouvez sports_martial_artsGagner de l'argent grâce aux compétences Société ou Survie en même temps que vous Subsistez, sans avoir à y consacrer des jours d'intermède supplémentaires. Vous obtenez également un bonus de circonstances de +1 à ce test.",
                    "Spécial Si vous possédez l'héritage gobelin Boyaud'fer, augmentez ce bonus à +2."
                ]
            },
            {
                "name"       : "Chasseur de fantômes",
                "level"      : "1",
                "traits"     : [
                    "Crépusculaire"
                ],
                "required"   : [],
                "description": [
                    "Votre lien avec le Cimetière assure à vos coups de pouvoir frapper les êtres spectraux. Vos Frappes d'arme et à mains nues contre les créatures intangibles deviennent magiques. Si elles sont déjà magiques, elles obtiennent alors les effets d'une rune de propriété spectrale."
                ]
            },
            {
                "name"       : "Chasseur de la meute",
                "level"      : "5",
                "traits"     : [
                    "Félide"
                ],
                "required"   : [],
                "description": [
                    "Vous évitez l'attention de créatures concentrées sur vos alliés. Vous pouvez utiliser l'abri fourni par vos alliés pour sports_martial_artsVous cacher ."
                ]
            },
            {
                "name"       : "Chasseur embusqué",
                "level"      : "9",
                "traits"     : [
                    "Kholo"
                ],
                "required"   : [],
                "description": [
                    "Vous êtes toujours à la recherche de l'opportunité idéale pour tendre une embuscade à vos ennemis. Vous pouvez effectuer l'activité d'exploration sports_martial_artsReconnaître en même temps que l'activité d'exploration sports_martial_artsÉchapper aux regards ."
                ]
            },
            {
                "name"       : "Chasseur en meute",
                "level"      : "1",
                "traits"     : [
                    "Kholo"
                ],
                "required"   : [],
                "description": [
                    "Vous avez appris à chasser au sein d'une meute. Vous obtenez un bonus de circonstances de +2 aux tests pour Aider et vos alliés obtiennent un bonus de circonstances de +2 aux tests pour vous Aider."
                ]
            },
            {
                "name"       : "Chevaucheur cruel",
                "level"      : "9",
                "traits"     : [
                    "Hobgobelin"
                ],
                "required"   : [
                    "Compagnon animal"
                ],
                "description": [
                    "Vous avez entraîné votre compagnon animal à devenir un juggernaut terrifiant sur le champ de bataille. Votre compagnon animal est qualifié en Intimidation. Si votre compagnon animal utilise Soutien lorsqu'il vous sert de monture, il vous accorde les effets de la réaction sports_martial_artsAider sur votre premier test d'Intimidation pour sports_martial_artsDémoraliser lors du même tour, même s'il ne peut entreprendre une réaction."
                ]
            },
            {
                "name"       : "Chevaucheur de fossile",
                "level"      : "17",
                "traits"     : [
                    "Homme-lézard"
                ],
                "required"   : [
                    "Magie osseuse"
                ],
                "description": [
                    "Utilisant les os de vos ancêtres, vous manifestez leurs esprits autour de vous sous une forme fossilisée. Vous pouvez lancer auto_awesomeMasque de terreur sur vous-même comme un sort inné primordial une fois par jour. Lorsque vous le faites, vous apparaissez comme un ancêtre squelettique homme-lézard, modifié d'une façon qui puisse inspirer la terreur la plus profonde de ceux qui vous regardent."
                ]
            },
            {
                "name"       : "Chevaucheur de magie",
                "level"      : "17",
                "traits"     : [
                    "Elfe"
                ],
                "required"   : [],
                "description": [
                    "Votre peuple a utilisé une puissante magie pour voyager entre des mondes distants dans un lointain passé et les résidus de cette magie vous facilitent un tel moyen de transport. Lorsque vous êtes la cible d'un sort de téléportation qui transporte plus d'une personne, il peut affecter une personne supplémentaire au-delà de sa limite normale choisie par le lanceur. De plus, lorsque vous êtes la cible d'un sort de auto_awesomeTéléportation , vous et les autres cibles parvenez à une distance d'au plus 1,5 kilomètre de la destination, quelle que soit la distance parcourue."
                ]
            },
            {
                "name"       : "Chevaucheur des prairies",
                "level"      : "1",
                "traits"     : [
                    "Halfelin"
                ],
                "required"   : [],
                "description": [
                    "Vous avez grandi en montant les poneys hirsutes et les chiens de monte de votre clan. Vous êtes qualifié en Nature. Si vous deviez déjà être qualifié en Nature (par votre historique ou votre classe par exemple), vous êtes qualifié dans une autre compétence de votre choix. Vous obtenez également un bonus de circonstances de +1 pour sports_martial_artsDiriger un animal si la cible est une monture halfeline traditionnelle, comme un poney ou un chien de monte."
                ]
            },
            {
                "name"       : "Coassement terrifiant 1",
                "level"      : "1",
                "traits"     : [
                    "Tripkee"
                ],
                "required"   : [
                    "qualifié en Intimidation"
                ],
                "description": [
                    "Vous émettez un coassement obsédant qui rappelle à ceux qui vous entourent leurs peurs. Faites un test d'Intimidation pour sports_martial_artsDémoraliser une créature dans les 9 mètres. Vous ne subissez pas de pénalité pour ce test du fait de ne pas partager une langue. Si le test est un succès, la cible ne peut réduire son état Effrayé en dessous de 1 pendant 1 round."
                ]
            },
            {
                "name"       : "Combattant des ronciers",
                "level"      : "9",
                "traits"     : [
                    "Kobold"
                ],
                "required"   : [],
                "description": [
                    "Lorsque vous êtes sur un terrain difficile du fait d'une caractéristique environnementale, vous pouvez vous sports_martial_artsMettre à l'abri , même si la caractéristique du terrain ne devrait pas normalement être suffisamment grande pour que vous puissiez vous Mettre à l'abri."
                ]
            },
            {
                "name"       : "Compassion céleste",
                "level"      : "13",
                "traits"     : [
                    "Néphilim"
                ],
                "required"   : [
                    "Type angélique, Porteur de loi, Touché par la muse ou tout lignage associé avec les célestes"
                ],
                "description": [
                    "Vos pouvoirs célestes vous permettent de supprimer les afflictions mineures avec facilité. Vous pouvez lancer auto_awesomeAffliction purifiée deux fois par jour comme un sort inné divin de rang 4."
                ]
            },
            {
                "name"       : "Complice animal",
                "level"      : "1",
                "traits"     : [
                    "Gnome"
                ],
                "required"   : [],
                "description": [
                    "Vous développez une relation avec un animal avec lequel vous vous liez magiquement. Vous gagnez alors un familier qui utilise les règles des familiers. Vous êtes libre de décider de quel type d'animal il s'agit, mais les gnomes choisissent généralement des animaux avec une Vitesse de creusement."
                ]
            },
            {
                "name"       : "Conditionnement à la guerre",
                "level"      : "13",
                "traits"     : [
                    "Hobgobelin"
                ],
                "required"   : [],
                "description": [
                    "Vous avez un entraînement approfondi dans les environnements reculés, vous permettant de vous déplacer dans ces zones facilement.",
                    "Lorsque vous obtenez ce don, vous pouvez choisir entre une Vitesse d'escalade de 6 mètres et une Vitesse de nage de 6 mètres."
                ]
            },
            {
                "name"       : "Conduit vivace",
                "level"      : "9",
                "traits"     : [
                    "Gnome"
                ],
                "required"   : [],
                "description": [
                    "Votre lien avec le Premier Monde s'est renforcée et les énergies de vitalité qui en proviennent affluent en vous rapidement. Si vous vous reposez pendant 10 minutes, vous obtenez une quantité de Points de vie égale à casinovotre modificateur de Constitution multiplié par la moitié de votre niveau . C'est un effet de guérison de vitalité et il se cumule avec toute forme de soins reçus par sports_martial_artsSoigner les blessures ."
                ]
            },
            {
                "name"       : "Connaissance des changelins",
                "level"      : "1",
                "traits"     : [
                    "Changelin"
                ],
                "required"   : [],
                "description": [
                    "Bien trop conscient de votre vraie nature, vous avez étudié les guenaudes et leurs pouvoirs. Vous êtes qualifié en Duperie et en Occultisme. Si vous devriez automatiquement être qualifié dans l'une des ses compétences (de par votre historique ou votre classe, par exemple), vous devenez qualifié dans une compétence de votre choix à la place.",
                    "Vous obtenez également le don military_techConnaissance supplémentaire pour Connaissance des guenaudes."
                ]
            },
            {
                "name"       : "Connaissance des crépusculaires",
                "level"      : "1",
                "traits"     : [
                    "Crépusculaire"
                ],
                "required"   : [],
                "description": [
                    "Soit vous avez trouvé un autre crépusculaire qui vous a appris les secrets de vos semblables, soit vous avez entrepris de faire des recherches sur votre héritage inhabituel. Vous êtes qualifié en Médecine et en Religion. Si vous deviez être automatiquement qualifié dans un des ces compétences (par votre historique ou votre classe, par exemple), vous devenez qualifié dans une compétence de votre choix à la place.",
                    "Vous obtenez également le don général military_techConnaissance supplémentaire pour la Connaissance du Cimetière."
                ]
            },
            {
                "name"       : "Connaissance des dragons",
                "level"      : "1",
                "traits"     : [
                    "Sang-dragon"
                ],
                "required"   : [],
                "description": [
                    "Vous avez décidé d'en apprendre davantage sur vos ancêtres et leur espèce et peut-être même avez-vous été élevé par un parent dragon. Vous en êtes venu à comprendre comment les dragons peuvent susciter la peur, mais aussi comment ils ont contribué à la société dans son ensemble. Vous êtes qualifié en Diplomatie et en Intimidation. Si vous devriez être déjà automatiquement qualifié dans l'une de ces compétences (par votre historique ou votre classe, par exemple), vous êtes qualifié dans une compétence de votre choix.",
                    "Vous obtenez aussi le don général military_techConnaissance supplémentaire en Connaissance du dragon."
                ]
            },
            {
                "name"       : "Connaissance des elfes",
                "level"      : "1",
                "traits"     : [
                    "Elfe"
                ],
                "required"   : [],
                "description": [
                    "Vous avez étudié les arts elfiques traditionnels, apprenant des choses à propos de la magie arcanique et du monde qui vous entoure. Vous êtes qualifié en Arcanes et en Nature. Si vous devriez déjà être automatiquement qualifié dans l'une de ces compétences (grâce à votre historique ou à votre classe, par exemple), vous êtes qualifié dans une compétence de votre choix à la place.",
                    "Vous obtenez également le don général military_techConnaissance supplémentaire en Connaissance des elfes."
                ]
            },
            {
                "name"       : "Connaissance des gobelins",
                "level"      : "1",
                "traits"     : [
                    "Gobelin"
                ],
                "required"   : [],
                "description": [
                    "Vous avez appris des compétences et entendu des contes dans votre communauté gobeline. Vous êtes qualifié en Nature et en Discrétion. Si vous devriez déjà être automatiquement qualifié dans l'une de ces compétences (grâce à votre historique ou à votre classe, par exemple), vous devenez qualifié dans une compétence de votre choix.",
                    "Vous obtenez également le don général military_techConnaissance supplémentaire en Connaissance des gobelins."
                ]
            },
            {
                "name"       : "Connaissance des halfelins",
                "level"      : "1",
                "traits"     : [
                    "Halfelin"
                ],
                "required"   : [],
                "description": [
                    "Vous avez consciencieusement appris à conserver votre équilibre et à rester en sûreté dans les ombres, des compétences importantes transmises de génération en génération de halfelins. Vous êtes qualifié en Acrobaties et en Discrétion. Si vous devriez déjà automatiquement être qualifié dans l'une de ces compétences (grâce à votre historique ou à votre classe, par exemple), vous êtes alors qualifié dans une compétence de votre choix.",
                    "Vous obtenez également le don général military_techConnaissance supplémentaire en Connaissance des halfelins."
                ]
            },
            {
                "name"       : "Connaissance des hobgobelins",
                "level"      : "1",
                "traits"     : [
                    "Hobgobelin"
                ],
                "required"   : [],
                "description": [
                    "Vous avez étudié les exercices et techniques hobgobelins traditionnels qui revêtent tous un aspect militaire. Vous êtes qualifié en Athlétisme et en Artisanat. Si vous devriez déjà être automatiquement qualifié dans l'une de ces compétences (du fait de votre historique ou de votre classe, par exemple), vous devenez qualifié à la place dans une compétence de votre choix.",
                    "Vous obtenez également le don général military_techConnaissance supplémentaire en Connaissance des hobgobelins."
                ]
            },
            {
                "name"       : "Connaissance des hommes-félins",
                "level"      : "1",
                "traits"     : [
                    "Félide"
                ],
                "required"   : [],
                "description": [
                    "Être élevé parmi les hommes-félins vous a appris les valeurs traditionnelles de liberté, l'intendance et à réagir rapidement aux problèmes. Vous êtes qualifié en Acrobaties et en Survie. Si vous devriez déjà être qualifié dans l'une de ces compétences (par le biais de votre historique ou de votre classe, par exemple), vous êtes qualifié dans une compétence de votre choix à la place.",
                    "Vous obtenez également le don général military_techConnaissance supplémentaire en Connaissance des hommes-félins."
                ]
            },
            {
                "name"       : "Connaissance des hommes-lézards",
                "level"      : "1",
                "traits"     : [
                    "Homme-lézard"
                ],
                "required"   : [],
                "description": [
                    "Vous avez écouté soigneusement les légendes transmises au sein de votre communauté. Vous êtes qualifié en Survie, ainsi qu'en Nature ou en Occultisme. Si vous devriez être automatiquement qualifié dans une de ces compétences (du fait de votre historique ou de votre classe, par exemple), vous devenez qualifié dans une compétence de votre choix.",
                    "Vous obtenez également le don général military_techConnaissance supplémentaire en Connaissance des hommes-lézards."
                ]
            },
            {
                "name"       : "Connaissance des hommes-rats",
                "level"      : "1",
                "traits"     : [
                    "Homme-rat"
                ],
                "required"   : [],
                "description": [
                    "Des années d'expérience parmi les communautés d'hommes-rats vous ont rendu agile et vous avez appris à courir et vous cacher lorsque les ennemis menacent. Vous êtes qualifié en Acrobaties et en Discrétion. Si vous devriez être automatiquement dans une de ces compétences (par le biais de votre historique ou de votre classe, par exemple), vous êtes qualifié dans une autre compétence de votre choix à la place.",
                    "Vous obtenez également le don général military_techConnaissance supplémentaire pour la Connaissance des Hommes-rats."
                ]
            },
            {
                "name"       : "Connaissance des kholos",
                "level"      : "1",
                "traits"     : [
                    "Kholo"
                ],
                "required"   : [],
                "description": [
                    "Vous avez prêté attention aux aînés chasseurs de votre clan pour apprendre leurs astuces. Vous êtes qualifié en Discrétion et en Survie. Si vous devriez être automatiquement qualifié dans l'une de ces compétences (du fait de votre historique ou de votre classe, par exemple), vous êtes qualifié à la place dans une compétence de votre choix.",
                    "Vous obtenez également le don général military_techConnaissance supplémentaire en Connaissance des kholos."
                ]
            },
            {
                "name"       : "Connaissance des kobolds",
                "level"      : "1",
                "traits"     : [
                    "Kobold"
                ],
                "required"   : [],
                "description": [
                    "Vous avez appris attentivement les principales stratégies kobold auprès de vos anciens. Vous êtes qualifié en Discrétion et Vol. Si vous deviez automatiquement être qualifié dans une de ces deux compétences (par le biais de votre historique ou de votre classe, par exemple), vous êtes qualifié dans une compétence de votre choix à la place.",
                    "Vous obtenez également le don général military_techConnaissance supplémentaire pour la Connaissance des kobolds."
                ]
            },
            {
                "name"       : "Connaissance des léchis",
                "level"      : "1",
                "traits"     : [
                    "Léchi"
                ],
                "required"   : [],
                "description": [
                    "Vous comprenez profondément les traditions culturelle et les forces intrinsèques de votre peuple. Vous êtes qualifié en Discrétion et en Nature. Si vous devriez déjà être automatiquement qualifié en une de ces compétences (par votre historique ou votre classe, par exemple), vous êtes qualifié dans une autre compétence de votre choix.",
                    "Vous obtenez également le don général military_techConnaissance supplémentaire en Connaissance des léchis"
                ]
            },
            {
                "name"       : "Connaissance des nains",
                "level"      : "1",
                "traits"     : [
                    "Nain"
                ],
                "required"   : [],
                "description": [
                    "Vous avez absorbé avec avidité les vieilles histoires et les traditions de vos ancêtres, de vos dieux et de votre peuple, étudiant les sujets et les techniques transmis de génération en génération. Vous êtes qualifié en Artisanat et en Religion. Si vous devriez être automatiquement qualifié dans l'une de ces compétences (grâce à votre historique ou à votre classe, par exemple), vous êtes qualifié dans une compétence de votre choix.",
                    "Vous obtenez également le don général military_techConnaissance supplémentaire en Connaissance des nains."
                ]
            },
            {
                "name"       : "Connaissance des néphilims",
                "level"      : "1",
                "traits"     : [
                    "Néphilim"
                ],
                "required"   : [],
                "description": [
                    "Vous connaissez les secrets du Multivers.",
                    "Vous êtes qualifié en Diplomatie ou en Intimidation et en Religion. Si vous devriez automatiquement devenir qualifié dans l'une de ces deux compétences (du fait de votre historique ou de votre classe, par exemple), vous devenez qualifié à la place dans une autre compétence de votre choix.",
                    "Vous obtenez également le don military_techConnaissance supplémentaire dans un sous-catégorie d'un plan dont votre lignée est originaire."
                ]
            },
            {
                "name"       : "Connaissance des tengus",
                "level"      : "1",
                "traits"     : [
                    "Tengu"
                ],
                "required"   : [],
                "description": [
                    "Vous avez appris les compétences qui vous permettent de survivre dans les lieux où votre peuple fût dispersé. Vous êtes qualifié en Société et en Survie. Si vous devriez être qualifié en l'une de ces compétences (de par votre historique ou votre classe, par exemple), vous êtes qualifié en une autre compétence de votre choix à la place.",
                    "Vous obtenez également le don général military_techConnaissance supplémentaire pour la Connaissance des tengus."
                ]
            },
            {
                "name"       : "Connaissance des tripkees",
                "level"      : "1",
                "traits"     : [
                    "Tripkee"
                ],
                "required"   : [],
                "description": [
                    "Vous connaissez la culture et les tactiques des Tripkees. Vous êtes qualifié en Nature et en Discrétion. Si vous devriez être qualifié automatiquement dans l'une de ces compétences, vous êtes qualifié à la place dans une compétence de votre choix.",
                    "Vous obtenez également le don général military_techConnaissance supplémentaire pour connaissance des tripkees."
                ]
            },
            {
                "name"       : "Connaissance des vampires",
                "level"      : "1",
                "traits"     : [
                    "Dhampir"
                ],
                "required"   : [],
                "description": [
                    "Vous avez été élevé par votre parent vampirique ou vous avez investi un temps et une énergie considérable à chercher les secrets de votre géniteur mort-vivant. Vous êtes qualifié en Religion et Société. Si vous devriez automatiquement être qualifié dans une de ces compétences (par le biais de votre historique ou de votre classe, par exemple), vous êtes qualifié dans une compétence différente de votre choix.",
                    "Vous obtenez également le don général military_techConnaissance supplémentaire pour la Connaissance des vampires."
                ]
            },
            {
                "name"       : "Connaissance orque",
                "level"      : "1",
                "traits"     : [
                    "Orque"
                ],
                "required"   : [],
                "description": [
                    "Les anciens de la forteresse vous ont enseigné les histoires de votre peuple, les vieilles histoires de grand exploits athlétiques et partagé avec vous les difficultés que vos ancêtres ont surmontées de manière à ce que vous puissiez transmettre cette sagesse aux générations futures. Vous devenez qualifié en Athlétisme et en Survie. Si vous devriez être automatiquement qualifié dans l'une de ces compétences (par votre historique ou votre classe, par exemple), vous devenez qualifié dans une autre compétence de votre choix.",
                    "Vous obtenez également le don général military_techConnaissance supplémentaire en Connaissance des orques."
                ]
            },
            {
                "name"       : "Connaître vos semblables",
                "level"      : "1",
                "traits"     : [
                    "Elfe"
                ],
                "required"   : [],
                "description": [
                    "Vous avez passé des heures innombrables à étudier l'histoire des elfes de votre monde et même au-delà et êtes un savant expert des manières de votre peuple.",
                    "Si vous obtenez un échec critique pour vous Souvenir à propos des elfes, de la société elfique ou de l'histoire elfique, il devient un échec."
                ]
            },
            {
                "name"       : "Contre mesures divines",
                "level"      : "9",
                "traits"     : [
                    "Néphilim"
                ],
                "required"   : [],
                "description": [
                    "Vous avez étudié votre héritage extraplanaire dans l'intention de mieux vous défendre, que ce soit contre des créatures alignées ou opposées à votre lignée extraplanaire, et vous avez découvert que vos techniques sont tout aussi puissantes contre les célestes, les fiélons et les autre entités divines. Vous obtenez un bonus de circonstances de +1 à tous les jets de sauvegarde contre les effets divins."
                ]
            },
            {
                "name"       : "Convocation de néphilim apparenté",
                "level"      : "13",
                "traits"     : [
                    "Néphilim"
                ],
                "required"   : [
                    "Tout don de lignage néphilim"
                ],
                "description": [
                    "Vous avez une un lien profond avec les Plans extérieurs, vous permettant de convoquer un allié divin. Une fois par jour, vous pouvez Lancer auto_awesomeConvocation de céleste , auto_awesomeConvocation de fiélon ou un autre sort divin de rang 5 capable de convoquer un être extraplanaire approprié à votre lignage,. Une fois par jour, vous pouvez lancer le sort choisi comme un sort divin inné de rang 5 mais la créature doit appartenir à la même catégorie que votre propre lignée, comme par exemple une créature ayant le trait ange si vous êtes de type angélique."
                ]
            },
            {
                "name"       : "Cornesort évolué",
                "level"      : "9",
                "traits"     : [
                    "Kobold"
                ],
                "required"   : [],
                "description": [
                    "Votre puissance arcanique innée augmente. Choisissez un sort arcanique courant de rang 1 et un sort arcanique courant de rang 2. Vous pouvez lancer chacun de ces sorts une fois par jour comme des sorts innés arcaniques."
                ]
            },
            {
                "name"       : "Cornesort resplendissante",
                "level"      : "13",
                "traits"     : [
                    "Kobold"
                ],
                "required"   : [
                    "Cornesort évoluée"
                ],
                "description": [
                    "Votre magie continue de s'épanouir. Choisissez un sort arcanique courant de rang 3 et un sort arcanique courant de rang 4. Vous pouvez lancer chacun de ces sorts une fois par jour comme des sorts innés arcaniques."
                ]
            },
            {
                "name"       : "Cosse",
                "level"      : "1",
                "traits"     : [
                    "Léchi"
                ],
                "required"   : [],
                "description": [
                    "Votre corps produit une profusion quasi illimitée de cosses dures. Vous obtenez une attaque à mains nues à distance de cosse avec un facteur de portée de 9 mètres qui inflige 1d4 dégâts contondants. En cas de coup critique, une cosse explose produisant des vrilles de végétation qui imposent une pénalité de circonstances de -3 mètres à la Vitesse de la cible durant 1 round. Les cosses n'ajoutent pas d'effets critiques spécialisés.",
                    "flareEffet : Cosse"
                ]
            },
            {
                "name"       : "Cosse épineuse",
                "level"      : "9",
                "traits"     : [
                    "Léchi"
                ],
                "required"   : [
                    "Cosse"
                ],
                "description": [
                    "Lorsque votre cosse inflige un terrible coup, elle explose sous forme de lianes sacrément pointues. Lorsque vous obtenez un coup critique avec une frappe de cosse, les lianes se tordent et poignardent votre adversaire, infligeant 1d4 dégâts perforants persistants."
                ]
            },
            {
                "name"       : "Coups sanglants",
                "level"      : "5",
                "traits"     : [
                    "Orque"
                ],
                "required"   : [],
                "description": [
                    "Vos attaques à mains nues létales laissent des entailles sanglantes ou provoquent des hémorragies internes sévères. Lorsque vous infligez un coup critique avec une Frappe en utilisant une attaque à mains nues qui n'a pas le trait non-létal, la cible subit 1d4 dégâts de saignement. Cela peut être lié au fait que vous avez accepté de subir la pénalité pour pouvoir utiliser votre poing pour porter une attaque létale ou que vous possédez plutôt une attaque à mains nues qui ne possède pas le trait non-létal à cause de military_techPoings de fer , de military_techDéfenses ou d'une capacité similaire."
                ]
            },
            {
                "name"       : "Coureur des marais",
                "level"      : "1",
                "traits"     : [
                    "Homme-lézard"
                ],
                "required"   : [
                    "Vous avez une Vitesse de nage"
                ],
                "description": [
                    "Vous êtes adepte des déplacements à travers les terrains marécageux. Lorsque vous utilisez l'action Faire un pas, vous pouvez ignorer le terrain difficile causé par les inondations, les marais ou les sables mouvants. En outre, lorsque vous utilisez la compétence Acrobaties pour sports_martial_artsGarder l'équilibre sur des surfaces étroites ou sur un terrain marécageux instable, vous n'êtes pas sentiment_very_dissatisfiedPris au dépourvu et si vous obtenez un succès sur le test d'Acrobaties, il devient un succès critique."
                ]
            },
            {
                "name"       : "Couvée parthénogène",
                "level"      : "1",
                "traits"     : [
                    "Homme-lézard"
                ],
                "required"   : [],
                "description": [
                    "Vous êtes né d'un œuf non fertilisé durant des temps difficiles pour votre peuple et vous êtes une copie biologique de votre mère. Vous obtenez un bonus de circonstances de +1 aux jets de sauvegarde contre les maladies. Si vous obtenez un succès sur un jet de sauvegarde contre une maladie, il devient un succès critique. Si vous avez une capacité différente qui améliorerait le jet de sauvegarde de la même façon (tel que la capacité de classe des guerriers Endurci au combat ), si vous obtenez un échec critique sur le jet de sauvegarde, il devient un échec.",
                    "Vous ne subissez les dégâts liés à la soif que toutes les 2 heures et de la faim tous les 2 jours plutôt qu'à chaque heure et chaque jour.",
                    "Spécial Vous ne pouvez prendre ce don qu'au niveau 1."
                ]
            },
            {
                "name"       : "Cramponné 1",
                "level"      : "9",
                "traits"     : [
                    "Gobelin"
                ],
                "required"   : [],
                "description": [
                    "Conditions Votre dernière action était une Frappe réussie et vous disposez d'une main libre.",
                    "Vous vous accrochez à un ennemi pour le harceler et obtenir sa soumission. Si votre cible se déplace alors que vous vous cramponnez à elle, vous pouvez choisir de vous déplacer avec la cible. La cible est relâchée si vous choisissez de ne pas vous déplacer avec elle, au début de votre prochain tour ou si la cible sports_martial_artsS'Échappe . Les tentatives pour s'échapper de Cramponné suivent les règles de S'échapper mais utilisent votre DD d'Acrobaties et mettent un terme à Cramponné au lieu de mettre un terme aux états qui s'achèvent habituellement grâce à l'action S'échapper.",
                    "Spécial Vous pouvez utiliser cette action sans avoir de main libre si votre Frappe précédente a été portée avec vos mâchoires ou une attaque à mains nues similaire que vous pourriez utiliser pour vous cramponner. Le MJ détermine laquelle des attaques à mains nues s'applique. Se cramponner de la sorte vous empêche d'utiliser cette attaque à mains nues."
                ]
            },
            {
                "name"       : "Creuseur de terrier",
                "level"      : "13",
                "traits"     : [
                    "Homme-rat"
                ],
                "required"   : [],
                "description": [
                    "Vous avez appris à utiliser vos robustes griffes pour Creuser dans la terre. Vous obtenez une Vitesse de creusement de 4,50 mètres."
                ]
            },
            {
                "name"       : "Cri de fuite 2",
                "level"      : "9",
                "traits"     : [
                    "Audible",
                    "Kobold",
                    "Son"
                ],
                "required"   : [],
                "description": [
                    "Fréquence Une fois par heure",
                    "Vous poussez un cri perçant. Chaque créature dans une crop_freeémanation de 3 mètres subit casino5d6 dégâts de son , avec un jet de casinoVigueur contre le plus élevé entre votre DD de classe ou votre DD de sort. Puis, vous Marchez rapidement et ce déplacement ne déclenche pas de réactions de la part des créatures qui ont obtenu un échec ou un échec critique sur leur jet de sauvegarde.",
                    "Au niveau 11 et tous les 2 niveaux par la suite, les dégâts augmentent de 1d6."
                ]
            },
            {
                "name"       : "Cri de ralliement 2",
                "level"      : "17",
                "traits"     : [
                    "Audible",
                    "Hobgobelin"
                ],
                "required"   : [],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vous faites appel à vos alliés et les poussez à donner tout au combat.",
                    "Tous les alliés dans les crop_free9 mètres qui peuvent vous entendre un nombre de Points de vie temporaires égal à votre niveau. De plus, ces alliés sont sentiment_very_dissatisfiedAccélérés pendant 1 minute mais peuvent utiliser l'action supplémentaire seulement pour Faire un pas, Marcher rapidement ou Frapper."
                ]
            },
            {
                "name"       : "Croa ! r",
                "level"      : "1",
                "traits"     : [
                    "Tengu"
                ],
                "required"   : [],
                "description": [
                    "Déclencheur Vous obtenez un échec critique à un test de Duperie, de Diplomatie ou d'Intimidation contre une créature qui ne possède par le trait tengu.",
                    "Vous vous laissez aller à pousser un horrible croassement, à faire gonfler vos plumes ou à simuler une autre attitude d'oiseau pour couvrir un faux pas social. Vous obtenez un échec au test déclencheur au lieu d'un échec critique. Toutes les créatures qui ont été les témoins de votre cri sont temporairement immunisées pendant 24 heures."
                ]
            },
            {
                "name"       : "Croassement de mauvais augure r",
                "level"      : "13",
                "traits"     : [
                    "Audible",
                    "Divin",
                    "Infortune",
                    "Tengu"
                ],
                "required"   : [],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Une créature dans les 18 mètres va faire un jet d'attaque ou un test de compétence.",
                    "Vous croassez de façon inquiétante, maudissant la créature avec de la malchance. La créature ciblée doit lancer deux fois le test déclencheur et conserver le plus mauvais résultat."
                ]
            },
            {
                "name"       : "Crocs",
                "level"      : "1",
                "traits"     : [
                    "Dhampir"
                ],
                "required"   : [],
                "description": [
                    "Vos incisives ont grandi en formant de véritables crocs : longs, pointus et idéaux pour drainer le sang. Vous obtenez une attaque à mains nues de crocs qui inflige 1d6 dégâts perforants. Vos crocs sont dans le groupe pugilat et possèdent les traits à mains nues et saisir."
                ]
            },
            {
                "name"       : "Crocs empoisonnés 1",
                "level"      : "5",
                "traits"     : [
                    "Homme-lézard"
                ],
                "required"   : [
                    "Arsenal Iruxi (Crocs)"
                ],
                "description": [
                    "Fréquence Une fois par heure",
                    "Vous empoisonnez vos crocs. Si la prochaine Frappe avec vos crocs que vous portez avant la fin de votre prochain tour touche et inflige des dégâts, la Frappe inflige 1d6 dégâts de poison persistants supplémentaires. Le poison devient inerte après avoir touché, ou à la fin de votre prochain tour, selon ce qui advient en premier."
                ]
            },
            {
                "name"       : "Croquer",
                "level"      : "1",
                "traits"     : [
                    "Kholo"
                ],
                "required"   : [],
                "description": [
                    "Vos mâchoires peuvent broyer les os et mordre à travers l'armure. Votre attaque à mains nues de mâchoires inflige 1d8 dégâts perforants au lieu de 1d6 et obtient le trait Saisir."
                ]
            },
            {
                "name"       : "Curiosité précautionneuse",
                "level"      : "9",
                "traits"     : [
                    "Gnome"
                ],
                "required"   : [
                    "Au moins un sort inné arcanique ou occulte obtenu par un héritage gnome ou un don ancestral gnome"
                ],
                "description": [
                    "Vous avez appris quelques techniques magiques pour à la fois vous attirer et vous sortir des ennuis sans vous faire remarquer. Vous obtenez auto_awesomeMagie déguisée et auto_awesomeSilence comme des sorts innés arcaniques ou occultes de niveau 2. La tradition de ces sorts doit correspondre à la tradition que vous utilisez pour vos options d'ascendance gnome. Vous pouvez Lancer chaque sort une fois par jour et vous seul pouvez en être la cible."
                ]
            },
            {
                "name"       : "Dangereux abandon f",
                "level"      : "17",
                "traits"     : [
                    "Fortune",
                    "Gobelin"
                ],
                "required"   : [],
                "description": [
                    "Fréquence Une fois par jour",
                    "En dépit d'une vie emplie de décisions douteuses, vous avez réussi à survivre, comme si une chance insolente vous permettait d'éviter les conséquences de vos propres actes. Pour le restant de votre tour, si vous obtenez un échec ou un échec critique sur un jet de sauvegarde contre un effet dommageable, il devient un succès. Plus encore, si vous devriez subir des dégâts d'un ennemi ou d'un danger durant ce tour, vous subissez le minimum de dégâts possible.",
                    "Ces avantages ne s'appliquent qu'aux effets dommageables entièrement subis durant le tour au cours duquel vous activez Dangereux abandon, comme courir à travers un auto_awesomeMur de feu . Les dégâts persistants et les états qui s'appliquaient antérieurement à votre tour produisent leurs effets normalement et, dès que votre tour se termine, vous êtes de nouveau sujet aux entières conséquences de tous les dangers qui vous menacent encore."
                ]
            },
            {
                "name"       : "Danse homme-félin 1",
                "level"      : "1",
                "traits"     : [
                    "Félide"
                ],
                "required"   : [],
                "description": [
                    "Vous avez l'habitude de toujours être dans le passage des autres créatures qui tentent de se déplacer. Faites un test d' casinoAcrobaties contre le DD de Réflexes d'une créature adjacente.",
                    "flareEffet : Danse homme-félin",
                    "Succès critique La créature cible obtient une pénalité de circonstances de -2 aux jets de Réflexes et est sentiment_very_dissatisfiedPrise au dépourvu jusqu'au début de votre prochain tour.",
                    "Succès La créature cible obtient une pénalité de circonstances de -2 aux jets de Réflexes jusqu'au début de votre prochain tour."
                ]
            },
            {
                "name"       : "Danse renversante",
                "level"      : "13",
                "traits"     : [
                    "Halfelin"
                ],
                "required"   : [
                    "Danse sous les pieds"
                ],
                "description": [
                    "Lorsque vous partagez l'espace d'une créature en utilisant Danse sous les pieds, vos armes et vos attaques à mains nues au corps-à-corps obtiennent le trait croc-en-jambe, mais seulement à l'encontre de la créature dont vous partagez la case. Vous pouvez être dans le même espace qu'une créature de taille Grande ou supérieure qui est sentiment_very_dissatisfiedÀ terre , même si elle n'est pas votre alliée."
                ]
            },
            {
                "name"       : "Danse sous les pieds",
                "level"      : "9",
                "traits"     : [
                    "Halfelin"
                ],
                "required"   : [
                    "Pas vif"
                ],
                "description": [
                    "Vous passez dans les pieds de vos ennemis en combat. Vous pouvez terminer une action réussie de sports_martial_artsDéplacement acrobatique dans l'espace d'un ennemi de taille Grande ou supérieure. De plus, lorsque vous faites usage de Pas vif, vous pouvez sports_martial_artsFaire un pas dans l'espace de l'ennemi déclencheur. L'ennemi doit avoir des membres ou vous permettre de disposer d'assez d'espace pour effectuer cette manœuvre, à la discrétion du MJ. Par exemple, vous pourriez partager une case avec un géant ou un dragon, mais pas avec une vase."
                ]
            },
            {
                "name"       : "Déclaration du divin",
                "level"      : "17",
                "traits"     : [
                    "Néphilim"
                ],
                "required"   : [],
                "description": [
                    "Vous invoquez une parole sainte ou impie des royaumes de l'au-delà pour punir vos ennemis. Une fois par jour, vous pouvez Lancer auto_awesomeDécret divin comme un sort divin inné au rang 7."
                ]
            },
            {
                "name"       : "Défense du chasseur r",
                "level"      : "1",
                "traits"     : [
                    "Tripkee"
                ],
                "required"   : [
                    "qualifié en Nature"
                ],
                "description": [
                    "Fréquence Une fois par heure",
                    "Déclencheur Une créature ayant le trait animal, bête, élémentaire, féerique, champignon ou plante vous attaque et vous pouvez voir l'attaquant.",
                    "Votre compréhension avisée des créatures naturelles et primordiales vous aide à prévoir et à esquiver leurs attaques. Le jet d'attaque déclencheur cible votre DD de Nature au lieu de votre CA. Bien que cela vous permette d'éviter de subir des pénalités à votre CA, cela ne supprime pas les états ou autres effets provoquant de telles pénalités. Par exemple, un ennemi doté d'une attaque sournoise vous infligera tout de même des dégâts supplémentaires parce que vous êtes sentiment_very_dissatisfiedPris au dépourvu , même si vous ne subissez pas la pénalité de circonstances de -2 contre l'attaque."
                ]
            },
            {
                "name"       : "Défenses (orc)",
                "level"      : "1",
                "traits"     : [
                    "Orque"
                ],
                "required"   : [],
                "description": [
                    "Vous possédez de particulièrement longues défenses dentelées parfaites pour arracher la viande de l'os. Vous obtenez une attaque à mains nues de défenses qui inflige 1d6 dégâts perforants. Vos défenses font partie du groupe pugilat et possèdent les traits à mains nues et finesse.",
                    "Spécial Vous ne pouvez choisir ce don qu'au premier niveau et vous ne pouvez pas utiliser le réapprentissage pour obtenir ce don. Vous ne pouvez perdre ce don qu'en utilisant des mesures drastiques comme perdre ou limer vos défenses."
                ]
            },
            {
                "name"       : "Défier l'obscurité",
                "level"      : "5",
                "traits"     : [
                    "Nain"
                ],
                "required"   : [
                    "Vision dans le noir"
                ],
                "description": [
                    "En utilisant d'antiques méthodes naines développées pour combattre des ennemis maniant l'obscurité magique, vous avez affiné votre vision dans le noir et avez juré de ne pas vous-même utiliser une telle magie. Vous obtenez vision dans le noir supérieure, vous permettant de voir au travers les ténèbres magiques même si elles empêchent normalement la vision dans le noir (comme les ténèbres créées par un sort de auto_awesomeTénèbres au rang 4). Vous ne pouvez pas lancer de sorts avec le trait ténèbres, utiliser des objets avec le trait ténèbres ou toute autre capacité possédant le trait ténèbres."
                ]
            },
            {
                "name"       : "Défier la mort",
                "level"      : "5",
                "traits"     : [
                    "Orque"
                ],
                "required"   : [
                    "Férocité orque"
                ],
                "description": [
                    "Vous êtes exceptionnellement difficile à tuer. Le DD de vos tests de récupération est égal à 9 + votre valeur Mourante ou 8 + votre valeur Mourante si vous avez le don général military_techRobustesse . De plus, lorsque quelqu'un vous ramène à la vie en utilisant la magie qui devrait normalement vous laisser diminué pendant une semaine (comme avec auto_awesomeRappel à la vie ou le rituel de Résurrection), vous ne subissez pas cet état."
                ]
            },
            {
                "name"       : "Délaissé",
                "level"      : "1",
                "traits"     : [
                    "Elfe"
                ],
                "required"   : [],
                "description": [
                    "Vous avez été témoin de la sénescence et de la mort de vos amis, ce qui vous a empli d'une morosité qui vous protège des émotions douloureuses. Vous obtenez un bonus de circonstances de +1 à vos jets de sauvegarde contre les effets des émotions. Si vous obtenez un succès sur un jet de sauvegarde contre un effet d'émotion, vous bénéficiez d'un succès critique."
                ]
            },
            {
                "name"       : "Demander aux os f",
                "level"      : "1",
                "traits"     : [
                    "Kholo"
                ],
                "required"   : [],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vous conservez les os d'un ancêtre ou d'un ami pour pouvoir leur demander conseil. Tentez de Vous souvenir. Si les os ont appartenu à une personne ayant des connaissances particulières du sujet, vous obtenez un bonus de circonstances de +1 à votre test."
                ]
            },
            {
                "name"       : "Dents de sabre",
                "level"      : "1",
                "traits"     : [
                    "Félide"
                ],
                "required"   : [],
                "description": [
                    "Vous possédez de longs crocs, naturels ou améliorés. Vous obtenez une attaque à mains nues de mâchoires qui inflige 1d6 dégâts perforants. Vos mâchoires font partie du groupe pugilat et possèdent le trait à mains nues."
                ]
            },
            {
                "name"       : "Détachement elfique",
                "level"      : "1",
                "traits"     : [
                    "Elfe"
                ],
                "required"   : [],
                "description": [
                    "Quel que soit le soin que vous puissiez prendre d'eux, vous êtes venu à accepter la nature éphémère des non elfes et cela rend leurs menaces moins problématiques.",
                    "Si un non elfe obtient un échec pour vous sports_martial_artsContraindre en utilisant Intimidation, il devient un échec critique (et ainsi ne peut plus tenter de vous contraindre de nouveau pendant 1 semaine).",
                    "Lorsqu'un non elfe tente de vous sports_martial_artsDémoraliser , vous êtes temporairement immunisé pendant 1 journée, au lieu de 10 minutes."
                ]
            },
            {
                "name"       : "Détaler 1",
                "level"      : "1",
                "traits"     : [
                    "Kobold"
                ],
                "required"   : [],
                "description": [
                    "Conditions Vous êtes adjacent à au moins un ennemi.",
                    "Vous Marchez rapidement jusqu'à votre Vitesse, avec un bonus de statut de +1,50 mètre à votre Vitesse et vous obtenez un bonus de circonstances de +2 à la CA contre les réactions déclenchées par ce déplacement. Vous devez terminer ce déplacement dans une case qui n'est pas adjacente à un ennemi."
                ]
            },
            {
                "name"       : "Dévoreur de sort",
                "level"      : "13",
                "traits"     : [
                    "Orque"
                ],
                "required"   : [
                    "Superstition omniprésente"
                ],
                "description": [
                    "Vous ne faites pas que résister à la magie : vous la dévorez. Lorsque vous obtenez un succès sur un jet de sauvegarde contre un sort ou un effet magique, vous obtenez des Points de vie temporaires supplémentaires en nombre égal au double du rang du sort ou égal au niveau de l'effet si l'effet magique n'est pas un sort. Ces Points de vie temporaires durent jusqu'à la fin de votre prochain tour."
                ]
            },
            {
                "name"       : "Discret",
                "level"      : "1",
                "traits"     : [
                    "Hobgobelin"
                ],
                "required"   : [],
                "description": [
                    "La discrétion est un outil important dans votre arsenal. Vous pouvez vous déplacer de 1,50 mètre de plus lorsque vous utilisez l'action sports_martial_artsÊtre furtif , jusqu'à votre Vitesse maximale.",
                    "De plus, tant que vous continuez à utiliser les actions Être furtif et obtenez un succès à votre test de Discrétion, vous n'êtes pas Observé si vous n'avez pas d'abri standard ou d'abri important et n'êtes pas sentiment_very_dissatisfiedMasqué à la fin de l'action Être furtif, tant que vous disposez d'un abri ou d'un abri important ou que vous êtes Masqué à la fin de votre tour."
                ]
            },
            {
                "name"       : "Diversion acrobatique 1",
                "level"      : "13",
                "traits"     : [
                    "Kobold"
                ],
                "required"   : [
                    "expert en Acrobaties et en Duperie"
                ],
                "description": [
                    "Tentez un sports_martial_artsDéplacement acrobatique à travers l'espace d'un adversaire. Si vous obtenez un succès ou un succès critique et ne terminez pas votre mouvement adjacent à cet adversaire, vous pouvez tenter de sports_martial_artsCréer une diversion pour distraire cet adversaire. Vous obtenez un bonus de circonstances de +1 au test de Duperie (ou un bonus de circonstances de +2 si vous avez obtenu un succès critique au test d'Acrobaties sur votre Déplacement acrobatique) pour Créer une diversion. Si vous obtenez un succès ou un succès critique pour Créer une diversion, vous devenez sentiment_very_dissatisfiedCaché uniquement pour la créature dont vous avez traversé l'espace lors du Déplacement acrobatique."
                ]
            },
            {
                "name"       : "Dix vies",
                "level"      : "17",
                "traits"     : [
                    "Félide"
                ],
                "required"   : [
                    "Échapper au destin"
                ],
                "description": [
                    "Lorsque votre personnage devrait mourir, vous pouvez tenter un casinoTest nu, DD 17 . En cas de succès, vous êtes à la place réduit à 0 PV et avec une valeur mourante de 1 de moins de celle qui devrait normalement vous tuer (typiquement Mourant 3). Cela ne change pas le résultat pour toute autre créature affectée."
                ]
            },
            {
                "name"       : "Doigts bricoleurs",
                "level"      : "1",
                "traits"     : [
                    "Homme-rat"
                ],
                "required"   : [],
                "description": [
                    "Vous êtes qualifié en Artisanat. Si vous êtes déjà qualifié en Artisanat du fait d'une autre source (par votre historique ou votre classe par exemple), vous êtes qualifié à la place en une compétence de votre choix. Vous pouvez sports_martial_artsRéparer un objet sans utiliser de trousse de réparation sans subir la pénalité de circonstances de -2, en improvisant des outils avec ce qui vous tombe sous la main. Vous obtenez un bonus de circonstances de +1 à vos tests d'Artisanat pour Réparer un objet quand vous disposez d'une trousse de réparation."
                ]
            },
            {
                "name"       : "Dracomancien",
                "level"      : "9",
                "traits"     : [
                    "Kobold"
                ],
                "required"   : [],
                "description": [
                    "Votre pouvoir arcanique inné se manifeste sous la forme des sorts les plus couramment utilisés par votre modèle draconique. Choisissez un sort de rang 1 et un sort de rang 2 tirés de la liste d'un dragon incantateur du type de votre modèle draconique présentés dans le Bestiaire (tels qu' auto_awesomeAlarme , auto_awesomeCoup assuré , auto_awesomeFlou ou auto_awesomeInvisibilité pour un modèle dragon noir).",
                    "Vous pouvez Lancer chacun de ces sorts une fois par jour comme des sorts arcaniques innés. Vous devenez qualifié en jets d'attaque de sort et en DD des sorts et votre attribut essentiel d'incantation est le Charisme."
                ]
            },
            {
                "name"       : "Dracomancien d'élite",
                "level"      : "13",
                "traits"     : [
                    "Kobold"
                ],
                "required"   : [
                    "Dracomancien"
                ],
                "description": [
                    "Votre magie rivalise avec celle des dragons inférieurs. Choisissez un sort de rang 3 et un sort de rang 4 parmi ceux listés pour un type de dragon incantateur du type de votre modèle draconique tels qu'ils figurent dans le bestiaire (comme auto_awesomeParalysie et auto_awesomeNuage puant pour un modèle dragon noir). Vous pouvez Lancer chacun de ces sorts une fois par jour comme un sort arcanique inné."
                ]
            },
            {
                "name"       : "Dresseur de bête",
                "level"      : "1",
                "traits"     : [
                    "Orque"
                ],
                "required"   : [],
                "description": [
                    "Vous avez une capacité inné impressionnante pour apprivoiser et donner des ordres aux bêtes féroces. Vous êtes qualifié en Nature et obtenez le don général military_techAnimal de compagnie ou le don de compétence military_techDressage animalier ."
                ]
            },
            {
                "name"       : "Éblouissement f",
                "level"      : "1",
                "traits"     : [
                    "Gnome"
                ],
                "required"   : [],
                "description": [
                    "Fréquence Une fois par heure",
                    "Déclencheur Vous aveuglez ou éblouissez une créature.",
                    "Vous avez passé un temps considérable à pratiquer la manipulation de la lumière, en utilisant le reflet de la lumière sur la lame de votre arme ou augmentant la luminosité des représentations magiques à des hauteurs non conventionnelles.",
                    "Étendez la durée de l'état sentiment_very_dissatisfiedAveuglé ou sentiment_very_dissatisfiedÉbloui que vous donnez à la cible de 1 round."
                ]
            },
            {
                "name"       : "Échappée subite",
                "level"      : "13",
                "traits"     : [
                    "Néphilim"
                ],
                "required"   : [
                    "Rejeton sombre, Né de la fosse, Rejeton infernal ou un autre don de lignage associé avec les fiélons ou le Maelström"
                ],
                "description": [
                    "Comme beaucoup de fiélons, vous avez la capacité surnaturelle de vous téléporter vous-même en sécurité. Une fois par jour, vous pouvez Lancer auto_awesomeTranslocation comme un sort inné divin de rang 5."
                ]
            },
            {
                "name"       : "Échapper au destin",
                "level"      : "9",
                "traits"     : [
                    "Félide"
                ],
                "required"   : [],
                "description": [
                    "Vous pouvez éluder le désastre surnaturel. Lorsque vous obtenez l'état sentiment_very_dissatisfiedCondamné , vous pouvez faire casinoTest nu, DD 17 . En cas de succès, vous n'obtenez pas l'état Condamné."
                ]
            },
            {
                "name"       : "Échos dans la roche 1",
                "level"      : "9",
                "traits"     : [
                    "Concentration",
                    "Nain"
                ],
                "required"   : [],
                "description": [
                    "Conditions Vous vous tenez sur une surface rocheuse ou en terre.",
                    "Vous faites une pause pour harmoniser vos sens à la roche qui vous entoure. Jusqu'au début de votre prochain tour, vous obtenez Perception des vibrations 6 mètres (imprécis)."
                ]
            },
            {
                "name"       : "Écorce et liane",
                "level"      : "9",
                "traits"     : [
                    "Léchi"
                ],
                "required"   : [],
                "description": [
                    "Vous maniez la magie primordiale. Vous pouvez lancer auto_awesomeFlore enchevêtrante et auto_awesomeRésilience du chêne comme des sorts innés primordiaux de rang 2 une fois par jour chacun."
                ]
            },
            {
                "name"       : "Elfe preste",
                "level"      : "1",
                "traits"     : [
                    "Elfe"
                ],
                "required"   : [],
                "description": [
                    "Vos muscles sont bien entraînés. Votre Vitesse augmente de 1,50 mètre."
                ]
            },
            {
                "name"       : "Éluder les ennuis r",
                "level"      : "17",
                "traits"     : [
                    "Félide"
                ],
                "required"   : [],
                "description": [
                    "Déclencheur Une créature vous manque avec une attaque au corps-à-corps.",
                    "Marchez rapidement de votre Vitesse. Ce déplacement ne déclenche pas de réaction provenant de la créature qui vous a manqué."
                ]
            },
            {
                "name"       : "Enfant brumeux",
                "level"      : "5",
                "traits"     : [
                    "Changelin"
                ],
                "required"   : [],
                "description": [
                    "Vous vous fondez dans le décor avec une subtilité surnaturelle. Lorsque vous êtes sentiment_very_dissatisfiedMasqué ou sentiment_very_dissatisfiedCaché , augmentez le DD du test nu pour vous cibler à 6 si vous êtes Masqué et à 12 si vous êtes Caché."
                ]
            },
            {
                "name"       : "Enfant de multiples plans",
                "level"      : "5",
                "traits"     : [
                    "Néphilim"
                ],
                "required"   : [],
                "description": [
                    "L'histoire longue et compliquée de votre lignée se manifeste dans votre capacité à tirer votre pouvoir de davantage de sources planaires que la plupart des autres néphilims. Choisissez un don de lignée néphilim que vous ne possédez pas déjà. Vous obtenez ce don et tous ses avantages, même si vous avez déjà pris un don de lignée au niveau 1."
                ]
            },
            {
                "name"       : "Entraînement général avancé",
                "level"      : "13",
                "traits"     : [
                    "Humain"
                ],
                "required"   : [],
                "description": [
                    "Au fil de votre vie d'aventure, votre adaptabilité vous a permis de choisir de nombreuses et utiles capacités. Vous obtenez un don général de niveau 7 ou inférieur. Vous devez remplir les prérequis du don.",
                    "Spécial Vous pouvez choisir ce don à plusieurs reprises en choisissant un don différent à chaque fois."
                ]
            },
            {
                "name"       : "Entre les écailles",
                "level"      : "9",
                "traits"     : [
                    "Kobold"
                ],
                "required"   : [],
                "description": [
                    "Vous avez appris à tirer parti des ouvertures dans les défenses de vos ennemis. Lorsque vous Frappez une créature sentiment_very_dissatisfiedPrise au dépourvu en utilisant une arme au corps-à-corps ou une attaque à mains nues qui possède les traits agile et finesse, elle obtient le trait traître."
                ]
            },
            {
                "name"       : "Étudiant alchimique",
                "level"      : "1",
                "traits"     : [
                    "Hobgobelin"
                ],
                "required"   : [],
                "description": [
                    "Vous obtenez le don military_techArtisanat alchimique . Si vous devriez déjà avoir obtenu ce don automatiquement (par votre historique ou la classe d'alchimiste par exemple), vous obtenez à la place un don de compétence d'Artisanat de niveau 1 différent. Ajoutez une formule alchimique courante de niveau 1 à votre livre de formules quand vous prenez ce don. Chaque fois que vous gagnez un niveau au delà du niveau 1, ajoutez une formule alchimique courante de ce niveau à votre livre de formules."
                ]
            },
            {
                "name"       : "Éventail à plumes tengu",
                "level"      : "5",
                "traits"     : [
                    "Tengu"
                ],
                "required"   : [],
                "description": [
                    "Vous avez appris à lier certaines de vos plumes ensemble pour former un éventail pour concentrer votre magie ancestrale. Vous obtenez alors un Éventail à plumes tengu. Il s'agit d'un objet magique d'Encombrement léger avec un niveau égal au vôtre et le trait primordial. Vous (et seulement vous) pouvez lancer la magie tengue avec l'activation d'Agiter l'éventail. Si votre éventail est perdu ou détruit, vous pouvez créer un remplaçant au cours de vos préparatifs quotidiens. Si vous le faites, votre précédent éventail redevient fait de plumes banales.",
                    "Votre Éventail à plumes tengu contient un sort de auto_awesomeGust of Wind de rang 1. D'autres dons peuvent vous accorder des sorts et des activations supplémentaires de votre Éventail à plumes tengu, mais vous n'avez droit qu'à trois activations maximum par jour, quel que soit le nombre de dons vous possédez.",
                    "Activation - Agiter l'éventail (manipulation)",
                    "Fréquence Une fois par jour",
                    "Effet Vous lancez un des sorts contenu dans votre Éventail à plumes tengu. Vous pouvez aussi Activer l'éventail pour lancer un tour de magie que vous avez obtenu par votre héritage ou un don ancestral, et ce type d'activation ne compte pas dans les activations quotidiennes de l'éventail. Activer l'éventail prend le nombre d'actions normal du sort. Le DD du sort est votre DD de classe ou votre DD de sort s'il est meilleur."
                ]
            },
            {
                "name"       : "Éventail du dieu du tonnerre",
                "level"      : "13",
                "traits"     : [
                    "Tengu"
                ],
                "required"   : [
                    "Éventail de plume tengu"
                ],
                "description": [
                    "Votre éventail lâche la furie de la tempête. Vous pouvez utiliser l'activation Agiter l'éventail une fois supplémentaire par jour. Ajoutez le sort auto_awesomeÉclair au rang 5 aux sorts contenus dans votre éventail."
                ]
            },
            {
                "name"       : "Éventail du dieu du vent",
                "level"      : "9",
                "traits"     : [
                    "Tengu"
                ],
                "required"   : [
                    "Éventail à plume tengu"
                ],
                "description": [
                    "Votre éventail peut même susciter des vents plus puissants. Vous pouvez utiliser l'activation Agiter l'éventail une fois supplémentaire par jour. Ajoutez le sort auto_awesomeMur de vent de rang 3 à la liste des sorts contenus dans votre éventail."
                ]
            },
            {
                "name"       : "Exemplarité",
                "level"      : "5",
                "traits"     : [
                    "Aiuvarin"
                ],
                "required"   : [],
                "description": [
                    "Vos actions inspirent vos alliés et les poussent à se dépasser. À chaque fois que vous obtenez un succès critique à un test de compétence, vous pouvez automatiquement utiliser la réaction sports_martial_artsAider pour apporter votre aide à un allié qui utilise la même compétence, sans avoir besoin d'utiliser une action pour vous s'apprêter à le faire."
                ]
            },
            {
                "name"       : "Exiguïté",
                "level"      : "9",
                "traits"     : [
                    "Kobold"
                ],
                "required"   : [],
                "description": [
                    "Si vous êtes de taille Petite ou inférieure, vous pouvez terminer votre déplacement dans la même case qu'un allié Petit ou de taille inférieure. Pas plus de deux créatures ne peuvent partager la même case lorsque vous utilisez cette capacité ou une autre similaire."
                ]
            },
            {
                "name"       : "Expérience martiale",
                "level"      : "5",
                "traits"     : [
                    "Elfe"
                ],
                "required"   : [],
                "description": [
                    "Vous avez croisé le fer avec une large variété d'ennemis brandissant une grande variété d'armes et vous avez appris les bases du combat avec presque toutes. Lorsque vous maniez une arme dont vous n'avez pas la maîtrise, considérez que votre niveau est votre bonus de maîtrise. Au niveau 11, vous devenez qualifié avec toutes les armes."
                ]
            },
            {
                "name"       : "Expertise non conventionnelle",
                "level"      : "13",
                "traits"     : [
                    "Humain"
                ],
                "required"   : [
                    "Armement non conventionnel, qualifié avec une arme choisie avec le don Armement non conventionnel"
                ],
                "description": [
                    "Vous savez mieux manier votre arme non conventionnelle.",
                    "À chaque fois que vous obtenez une capacité de classe qui vous confère une maîtrise experte ou supérieure avec certaines armes, vous obtenez également cette maîtrise avec l'arme que vous avez choisie avec le don military_techArmement non conventionnel ."
                ]
            },
            {
                "name"       : "Extra spongieux",
                "level"      : "1",
                "traits"     : [
                    "Gobelin"
                ],
                "required"   : [
                    "Gobelin incassable"
                ],
                "description": [
                    "Votre physique rebondissant rend plus facile pour vous de vous enfoncer dans des espaces étroites et plus difficile pour vos ennemis de vous en déloger.",
                    "Vous devenez qualifié en Acrobaties. Si vous devriez automatiquement être qualifié en Acrobaties (du fait de votre historique ou de votre classe, par exemple), vous devenez qualifié dans une compétence de votre choix à la place.",
                    "Si vous obtenez un succès pour sports_martial_artsVous faufiler , il devient un succès critique. Lorsque vous Vous faufilez, vous obtenez un bonus de circonstances de +4 au DD de vos jets de Vigueur et de Réflexes contre les tentatives de vous sports_martial_artsPousser ou vous faire bouger de l'espace que vous occupez."
                ]
            },
            {
                "name"       : "Familiarité avec les armes de crépusculaire",
                "level"      : "1",
                "traits"     : [
                    "Crépusculaire"
                ],
                "required"   : [],
                "description": [
                    "Vous avez une familiarité avec le bô, l'arc long, l'arc long composite, la faux et le bâton. Pour les besoins de déterminer votre maîtrise, vous considérez les armes de cette liste qui sont de guerre comme des armes simples et celles qui sont évoluées comme des armes de guerre.",
                    "Au niveau 5, lorsque vous obtenez un coup critique avec l'une de ces armes, vous bénéficiez de son effet critique spécialisé."
                ]
            },
            {
                "name"       : "Familiarité avec les armes des hobgobelins",
                "level"      : "1",
                "traits"     : [
                    "Hobgobelin"
                ],
                "required"   : [],
                "description": [
                    "Vous avez accès à toutes les armes peu courantes avec le trait hobgobelin. Vous avez également une familiarité avec les armes avec le trait hobgobelin plus l'arc court composite, l'arc long composite, la coutille, l'arc court, l'arc long et l'épée longue. Pour déterminer votre maîtrise, vous considérez celles de ces armes qui sont des armes de guerre comme des armes simples et celles qui sont avancées comme des armes de guerre.",
                    "Au niveau 5, lorsque vous obtenez un coup critique avec l'une de ces armes, vous bénéficiez de son effet critique spécialisé."
                ]
            },
            {
                "name"       : "Familiarité avec les armes des hommes-félins",
                "level"      : "1",
                "traits"     : [
                    "Félide"
                ],
                "required"   : [],
                "description": [
                    "Vous avez accès à toutes les armes peu courantes possédant le trait homme-félin. Vous avez une familiarité avec ces armes plus le kama, le kukri, le cimeterre et la serpe. Pour les besoins de déterminer votre maîtrise, vous considérez ces armes, si elles sont de guerre comme des armes simples et, si elles sont évoluées comme des armes de guerre.",
                    "Au niveau 5, lorsque vous obtenez un coup critique avec l'une de ces armes, vous bénéficiez de son effet critique spécialisé."
                ]
            },
            {
                "name"       : "Familiarité avec les armes des kholos",
                "level"      : "1",
                "traits"     : [
                    "Kholo"
                ],
                "required"   : [],
                "description": [
                    "Vous avez accès à toutes les armes peu courantes ayant le trait kholo. Vous avez une familiarité avec les armes ayant le trait kholo plus le fléau, le kopesh, le mambele et le fléau de guerre. Pour déterminer votre maîtrise, vous considérez celles de ces armes qui sont de guerre comme des armes simples et celles qui sont évoluées comme des armes de guerre.",
                    "Au niveau 5, lorsque vous obtenez un coup critique avec l'une de ces armes, vous bénéficiez de son effet critique spécialisé."
                ]
            },
            {
                "name"       : "Familiarité avec les armes des kobolds",
                "level"      : "1",
                "traits"     : [
                    "Kobold"
                ],
                "required"   : [],
                "description": [
                    "Vous avez accès à toutes les armes peu courantes ayant le trait kobold. Vous avez une familiarité avec les armes avec le trait kobold plus le grand pic de guerre, le pic de guerre léger et le pic de guerre. Pour déterminer votre maîtrise, vous considérez n'importe laquelle de ces armes qui est de guerre comme une arme simple et n'importe laquelle de ces armes qui est évoluée comme une arme de guerre.",
                    "Au niveau 5, lorsque vous obtenez un coup critique avec l'une de ces armes, vous bénéficiez de son effet critique spécialisé."
                ]
            },
            {
                "name"       : "Familiarité avec les armes des nains",
                "level"      : "1",
                "traits"     : [
                    "Nain"
                ],
                "required"   : [],
                "description": [
                    "Vos congénères vous ont donné le goût des armes qui frappent dur et vous les préférez à d'autres plus élégantes. Vous obtenez l'accès à toutes les armes peu courantes qui possèdent le trait nain. Vous êtes qualifié avec les armes possédant le trait nain et obtenez la maîtrise de la workHache d'armes , du workPic de guerre et du workMarteau de guerre . Lorsqu'il s'agit de déterminer votre maîtrise, les armes de guerre naines sont des armes simples et les armes naines évoluées sont des armes de guerre.",
                    "Au niveau 5, chaque fois que vous obtenez un succès critique avec une de ces armes, vous appliquez les effets de critique spécialisé."
                ]
            },
            {
                "name"       : "Familiarité avec les armes des orcs",
                "level"      : "1",
                "traits"     : [
                    "Orque"
                ],
                "required"   : [],
                "description": [
                    "Au combat, vous préférez les armes brutales qui sont traditionnelles pour vos ancêtres orcs. Vous avez accès à toutes les armes peu courantes qui possèdent le trait orc. Vous êtes familiarisé avec les armes qui possèdent le trait orc ainsi qu'au workCimeterre à deux mains et à la workgrande hache . Pour ce qui concerne la maîtrise, vous considérez celles de ces armes qui sont des armes de guerre orques comme des armes simples et n'importe laquelle de ces armes qui est évoluée comme une arme de guerre.",
                    "Au niveau 5, lorsque vous obtenez un succès critique avec une de ces armes, vous appliquez son effet critique spécialisé."
                ]
            },
            {
                "name"       : "Familiarité avec les armes des tengus",
                "level"      : "1",
                "traits"     : [
                    "Tengu"
                ],
                "required"   : [],
                "description": [
                    "Vous avez accès à toutes les armes peu courantes possédant le trait tengu plus le katana, le khakkara, l'épée du temple et le wakizashi. Vous avez une familiarité avec ces armes. Pour les besoins de déterminer votre maîtrise, vous considérez ces armes, si elles sont de guerre, comme des armes simples, et si elles sont évoluées, comme des armes de guerre.",
                    "Au cours de vos préparatifs quotidiens, vous pouvez pratiquer l'usage d'une arme du groupe des épées qui est en votre possession. Vous obtenez une familiarité avec cette arme également. Ceci durera jusqu'à ce que vous pratiquiez avec une épée différente de la même manière.",
                    "Au niveau 5, lorsque vous obtenez un coup critique avec l'une de ces armes, vous bénéficiez de son effet critique spécialisé.",
                    "flareEffet : Pratique de l'épée"
                ]
            },
            {
                "name"       : "Familiarité avec les armes des tripkees",
                "level"      : "1",
                "traits"     : [
                    "Tripkee"
                ],
                "required"   : [],
                "description": [
                    "Vous avez accès à toutes les armes peu courantes ayant le trait tripkee. Vous avez une familiarité avec les armes possédant le trait tripkee plus la sarbacane, les fléchettes, la hachette, la faux et l'arc court. Pour les besoins de déterminer votre maîtrise, vous considérez ces armes, si elles sont de guerre comme des armes simples, et, si elles sont évoluées, comme des armes de guerre.",
                    "Au niveau 5, lorsque vous obtenez un coup critique avec l'une de ces armes, vous bénéficiez de son effet critique spécialisé."
                ]
            },
            {
                "name"       : "Familiarité avec les armes elfiques",
                "level"      : "1",
                "traits"     : [
                    "Elfe"
                ],
                "required"   : [],
                "description": [
                    "Vous avez une prédilection pour les arcs et les autres armes élégantes. Vous avez accès à toutes les armes peu courantes qui possèdent le trait elfe plus les workArcs longs , les workArcs longs composites , les workÉpées longues , les workRapières , les workArcs courts et les workArcs courts composites . Lorsque vous déterminez votre maîtrise, vous considérez chacune de ces armes qui est une arme de guerre comme une arme simple et chacune de ces armes qui est une arme évoluée comme une arme de guerre.",
                    "Au niveau 5, lorsque vous obtenez un succès critique avec une de ces armes, vous bénéficiez de son effet critique spécialisé."
                ]
            },
            {
                "name"       : "Familiarité avec les armes gnomes",
                "level"      : "1",
                "traits"     : [
                    "Gnome"
                ],
                "required"   : [],
                "description": [
                    "Vous appréciez tout particulièrement les armes étranges liées à votre peuple, comme les lames incurvées de forme singulière. Vous avez accès aux kukris et à toutes les armes ayant le trait gnome. Vous possédez une familiarité avec les armes ayant le trait gnome ainsi que le kukri et la coutille. En ce qui concerne votre maîtrise, vous considérez n'importe laquelle de ces armes qui est une arme de guerre comme une arme simple et n'importe laquelle de ces armes qui est évoluée comme une arme de guerre.",
                    "Au niveau 5, lorsque vous obtenez un coup critique avec une de ces armes, vous bénéficiez de son effet critique spécialisé."
                ]
            },
            {
                "name"       : "Familiarité avec les armes gobelines",
                "level"      : "1",
                "traits"     : [
                    "Gobelin"
                ],
                "required"   : [],
                "description": [
                    "Les autres pourraient vous regarder avec un certain dédain, vous savez que les armes de votre peuple sont aussi efficaces qu'elles sont tranchantes. Vous avez accès à toutes les armes peu courantes avec le trait gobelin. Vous êtes familiarisé avec les armes avec le trait gobelin. Pour ce qui concerne votre maîtrise, vous considérez n'importe laquelle de ces armes qui sont des armes de guerre comme s'il s'agissait d'une arme simple et n'importe laquelle de ces armes qui est une arme évoluée comme s'il s'agissait d'une arme de guerre.",
                    "Au niveau 5, lorsque vous obtenez un coup critique avec une de ces armes, vous obtenez son effect critique spécialisé."
                ]
            },
            {
                "name"       : "Familiarité avec les armes halfelines",
                "level"      : "1",
                "traits"     : [
                    "Halfelin"
                ],
                "required"   : [],
                "description": [
                    "Vous avez une prédilection pour les armes halfelines et avez ainsi appris à les utiliser plus efficacement. Vous obtenez l'accès à toutes les armes peu courantes possédant le trait halfelin. Vous avez une familiarité avec les armes ayant le trait halfelin ainsi que la workFronde et l' workÉpée courte . En ce qui vous concerne votre maîtrise, vous considérez chacune de ces armes qui est une arme de guerre comme une arme simple et n'importe quelle de ces armes qui est évoluée comme une arme de guerre.",
                    "Au niveau 5, lorsque vous obtenez un coup critique avec une de ces armes, vous bénéficiez de son effet critique spécialisé."
                ]
            },
            {
                "name"       : "Familier hyène",
                "level"      : "1",
                "traits"     : [
                    "Kholo"
                ],
                "required"   : [],
                "description": [
                    "Les hyènes servent d'animaux de compagnie et de pisteurs aux kholos. Certains kholos, tels que vous-même, attirent l'attention de hyènes plus petites qui sont les conduits pour les esprits magiques. Vous obtenez une hyène très petite comme familier."
                ]
            },
            {
                "name"       : "Familier rat",
                "level"      : "1",
                "traits"     : [
                    "Homme-rat"
                ],
                "required"   : [],
                "description": [
                    "Vous possédez un rat comme animal de compagnie qui s'est magiquement lié à vous.",
                    "Vous obtenez un familier qui doit être un rat. Il obtient les bénéfices des capacités de familier, mais sa forme de base reste celle d'un rat."
                ]
            },
            {
                "name"       : "Fer allégé",
                "level"      : "1",
                "traits"     : [
                    "Nain"
                ],
                "required"   : [],
                "description": [
                    "Vous avez appris des techniques découvertes par vos ancêtres au cours de leurs anciennes guerres, qui vous permettent de porter plus facilement de lourdes armures. Vous ignorez la réduction de Vitesse de l'armure que vous portez.",
                    "De plus, à chaque fois que vous subissez une pénalité de vitesse pour une autre raison (tel que celle découlant de l'état sentiment_very_dissatisfiedSurchargé ou provenant d'un sort), vous réduisez cette pénalité de 1,50 mètre. Par exemple, l'état surchargé vous inflige normalement une pénalité de Vitesse de -3 mètres, mais ce don la réduira à une pénalité de -1,50 mètre. Si votre Vitesse est affectée de plusieurs pénalités, seule celle que vous choisissez sera réduite."
                ]
            },
            {
                "name"       : "Férocité dévastatrice f",
                "level"      : "17",
                "traits"     : [
                    "Orque"
                ],
                "required"   : [
                    "Férocité orque"
                ],
                "description": [
                    "Déclencheur Vous utilisez military_techFérocité orque",
                    "Vous vous déchaînez vicieusement même lorsque vous repoussez la mort. Faites une unique Frappe au corps-à-corps. Si cette Frappe amène un ennemi à 0 Point de vie, cette activation de Férocité orque n'est pas décomptée de sa fréquence d'utilisation."
                ]
            },
            {
                "name"       : "Férocité extraordinaire",
                "level"      : "13",
                "traits"     : [
                    "Orque"
                ],
                "required"   : [
                    "Férocité orque"
                ],
                "description": [
                    "Pour peu que vous ayez eu un peu le temps de respirer après un combat au cours duquel vous avez frôlé la mort, vous pouvez ranimer votre férocité pour résister à de nouveaux coups de grâce. Vous pouvez utiliser votre Férocité orque une fois par heure plutôt qu'une fois par jour."
                ]
            },
            {
                "name"       : "Férocité immortelle",
                "level"      : "9",
                "traits"     : [
                    "Orque"
                ],
                "required"   : [
                    "Férocité orque"
                ],
                "description": [
                    "Vous résistez à l'étreinte de la mort avec une vigueur surnaturelle, défiant la mort d'oser vous réclamer et promettant qu'une telle tentative aboutira à un échec. Lorsque vous utilisez military_techFérocité orque , vous obtenez des Points de vie temporaires égaux à votre niveau.",
                    "flareEffet : Férocité immortelle"
                ]
            },
            {
                "name"       : "Férocité orque r",
                "level"      : "1",
                "traits"     : [
                    "Orque"
                ],
                "required"   : [],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Vous êtes réduit à 0 Point de vie, mais ne mourez pas sur-le-champ.",
                    "La férocité au combat coule dans votre sang et vous refusez de succomber à vos blessures, aussi terribles soient-elles. Vous évitez d'être assommé et restez à 1 Point de vie et votre état sentiment_very_dissatisfiedBlessé augmente de 1."
                ]
            },
            {
                "name"       : "Feu du marin",
                "level"      : "1",
                "traits"     : [
                    "Tengu"
                ],
                "required"   : [],
                "description": [
                    "Vous conjurez des orbes étranges de flamme spirituelle qui flottent au-dessus ou eu-dessous de la surface de l'eau. Vous pouvez lancer le tour de magie auto_awesomeAllumage comme un sort inné primordial à volonté, intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur. Votre sort Allumage prend la forme d'orbes de feu et vous pouvez le lancer sous l'eau."
                ]
            },
            {
                "name"       : "Feuler r",
                "level"      : "13",
                "traits"     : [
                    "Audible",
                    "Félide",
                    "Concentration",
                    "Émotion",
                    "Mental"
                ],
                "required"   : [],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Un allié dans les 9 mètres devrait être réduit à 0 PV mais pas immédiatement tué.",
                    "Vous lancez un miaulement d'avertissement, rappelant votre compagnon du bord de l'inconscience. Votre allié ne tombe pas et reste à 1 Point de vie. L'état sentiment_very_dissatisfiedBlessé de votre allié augmente néanmoins de 1 comme s'il avait été sentiment_very_dissatisfiedMourant et avait récupéré."
                ]
            },
            {
                "name"       : "Fierté militaire r",
                "level"      : "9",
                "traits"     : [
                    "Audible",
                    "Hobgobelin"
                ],
                "required"   : [],
                "description": [
                    "Déclencheur Un allié dans les 9 mètres amène un ennemi à 0 Point de vie.",
                    "En poussant un cri de triomphe, vous accordez l'inspiration à l'allié qui poursuit le combat. L'allié déclencheur obtient des Points de vie temporaires égaux à son modificateur de Constitution jusqu'à la fin de son prochain tour.",
                    "flareEffet : Fierté militaire"
                ]
            },
            {
                "name"       : "Filet tenace",
                "level"      : "5",
                "traits"     : [
                    "Tripkee"
                ],
                "required"   : [],
                "description": [
                    "Échapper à vos filets n'est pas chose aisée. Le DD d'Athlétisme pour sports_martial_artsOuvrir de force ou sports_martial_artsS'Échapper de vos filets passe de 16 à 18. Lorsqu'une créature que vous avez sentiment_very_dissatisfiedAgrippée avec un filet s'est échappée ou a ouvert de force le filet, les mailles du filet s'accrochent à la créature, la laissant sentiment_very_dissatisfiedPrise au dépourvu jusqu'au début de son prochain tour."
                ]
            },
            {
                "name"       : "Fléau du gardien des os",
                "level"      : "13",
                "traits"     : [
                    "Kholo"
                ],
                "required"   : [],
                "description": [
                    "Chaque fois qu'un ennemi débute son tour en vous étant adjacent, il doit tenter un jet de casinoVolonté contre le plus élevé entre votre DD de classe ou DD de sort. En cas d'échec, l'ennemi subit une pénalité de statut de -1 aux jets d'attaque et aux tests de compétence tant qu'il vous reste adjacent. Quel que soit le résultat de son jet de sauvegarde, la créature est temporairement immunisée contre Fléau du gardien des os pendant 24 heures."
                ]
            },
            {
                "name"       : "Fléau primordial",
                "level"      : "13",
                "traits"     : [
                    "Homme-lézard"
                ],
                "required"   : [],
                "description": [
                    "Vous obtenez auto_awesomeMouvement sans entrave et auto_awesomeRésilience du rocher en tant que sorts innés primordiaux de rang 4 que vous pouvez lancer une fois par jour. Avec une activité à 3 actions, vous pouvez Lancer un sort deux fois pour lancer à la fois les deux de ces sorts innés, tant qu'ils sont tous les deux toujours disponibles pour la journée."
                ]
            },
            {
                "name"       : "Formation généraliste",
                "level"      : "1",
                "traits"     : [
                    "Humain"
                ],
                "required"   : [],
                "description": [
                    "Votre capacité d'adaptation se traduit par la maîtrise d'un éventail de compétences utiles. Vous obtenez un don général de niveau 1. Vous devez remplir les prérequis du don, mais si vous choisissez ce don au cours de la création de votre personnage, vous pouvez choisir le don plus tard dans le processus afin de déterminer si vous en remplissez les prérequis.",
                    "Spécial Vous pouvez sélectionner ce don ancestral plusieurs fois en choisissant un don général différent à chaque fois."
                ]
            },
            {
                "name"       : "Forme au long nez 1",
                "level"      : "5",
                "traits"     : [
                    "Concentration",
                    "Métamorphose",
                    "Primordial",
                    "Tengu"
                ],
                "required"   : [],
                "description": [
                    "Vous pouvez vous transformer et adopter une forme humaine spécifique à l'aspect curieux. Cette forme humaine a le même âge et le même type de corps que lorsque vous êtes sous votre forme tengu et approximativement les mêmes traits physiques, comme la taille, bien que votre nez soit aussi long que votre bec et que la couleur de votre peau ait une teinte rougeâtre, quelle que soit la couleur de peau de votre forme humaine. Utiliser Forme à long nez compte comme la création d'un déguisement lorsqu'il s'agit d'utiliser la Duperie pour Vous faire passer pour un humain. Compte tenu de votre transformation imparfaite, votre transformation ne trompe pas automatiquement le DD de Perception lorsqu'il s'agit de déterminer si vous êtes humain, bien que vous puissiez être capable d'expliquer ou de cacher vos traits tengu.",
                    "Vous perdez votre attaque à mains nues de bec sous votre forme humaine ainsi que toute autre Frappe à mains nues que vous avez obtenu du fait de votre héritage tengu ou d'un don ancestral. Vous restez sous la forme humaine indéfiniment, jusqu'à ce que vous Annuliez cet effet."
                ]
            },
            {
                "name"       : "Forme de chauve-souris 1",
                "level"      : "13",
                "traits"     : [
                    "Concentration",
                    "Dhampir",
                    "Divin",
                    "Métamorphose"
                ],
                "required"   : [],
                "description": [
                    "Fréquence Une fois par heure",
                    "Vous pouvez vous transformer en une chauve-souris inoffensive. Vous obtenez les effets du sort auto_awesomeForme de nuisible au rang 4, sauf que vous vous transformez toujours en une chauve-souris."
                ]
            },
            {
                "name"       : "Forme de dragon",
                "level"      : "17",
                "traits"     : [
                    "Sang-dragon"
                ],
                "required"   : [],
                "description": [
                    "Vous pouvez brièvement vous transformer en un parangon de votre ascendance draconique. Vous pouvez lancer auto_awesomeForme de dragon en tant que sort inné de rang 8 une fois par jour. Ce sort possède la même tradition que votre modèle draconique. Lorsque vous lancez ce sort inné, vous devez vous transformer en votre modèle draconique. Cependant, si vous avez le don de lignée military_techSang-dragon arcanique , military_techSang-dragon divin , military_techSang-dragon occulte ou military_techSang-dragon primordial , vous pouvez choisir n'importe quel dragon de cette tradition à la place."
                ]
            },
            {
                "name"       : "Forme de rat 1",
                "level"      : "9",
                "traits"     : [
                    "Concentration",
                    "Métamorphose",
                    "Primordial",
                    "Homme-rat"
                ],
                "required"   : [],
                "description": [
                    "Vous pouvez vous transformer en un rat apparemment inoffensif. Vous obtenez les effets du sort auto_awesomeForme de nuisible au rang 1 mais vous devez prendre la forme de combat d'un Très petit rat."
                ]
            },
            {
                "name"       : "Forme du grand tengu",
                "level"      : "17",
                "traits"     : [
                    "Tengu"
                ],
                "required"   : [
                    "Forme au long nez"
                ],
                "description": [
                    "Vous prenez la forme d'un imposant esprit ailé de taille Grande. Une fois par jour, dans le cadre de l'utilisation de military_techForme au long nez , vous obtenez aussi les avantages du sort auto_awesomeAgrandissement au rang 4 et de auto_awesomeVol . Cela dure pendant 5 minutes ou jusqu'à ce que vous sortiez de votre forme à long nez, selon ce qui se produit en premier.",
                    "flareEffet : Forme du grand tengu"
                ]
            },
            {
                "name"       : "Forme volante",
                "level"      : "9",
                "traits"     : [
                    "Tengu"
                ],
                "required"   : [
                    "Voler haut"
                ],
                "description": [
                    "Vous disposez en permanence d'une Vitesse de vol de 6 mètres."
                ]
            },
            {
                "name"       : "Fouet de la tempête",
                "level"      : "1",
                "traits"     : [
                    "Tengu"
                ],
                "required"   : [],
                "description": [
                    "Le vent et les éclairs ont toujours été vos amis. Vous pouvez lancer le tour de magie auto_awesomeArc électrique comme un sort inné primordial à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur."
                ]
            },
            {
                "name"       : "Fouetter sans remord",
                "level"      : "1",
                "traits"     : [
                    "Hobgobelin"
                ],
                "required"   : [],
                "description": [
                    "Vous êtes compétent lorsqu'il s'agit de battre un ennemi lorsque son moral flanche. Lorsque vous obtenez un succès lors d'une Frappe avec une arme de corps-à-corps contre un ennemi sentiment_very_dissatisfiedEffrayé , cet ennemi ne peut réduire sa condition Effrayé en dessous de 1 jusqu'au début de votre prochain tour."
                ]
            },
            {
                "name"       : "Fouille du récupérateur",
                "level"      : "1",
                "traits"     : [
                    "Tengu"
                ],
                "required"   : [],
                "description": [
                    "Vous êtes toujours à l'affût de fournitures ou de choses de valeur. Vous obtenez un bonus de circonstances de +2 pour localiser les objets (incluant portes secrètes et pièges) que vous cherchez dans les 9 mètres avec l'action sports_martial_artsChercher ."
                ]
            },
            {
                "name"       : "Frappe spirituelle iruxie",
                "level"      : "13",
                "traits"     : [
                    "Homme-lézard"
                ],
                "required"   : [],
                "description": [
                    "Vos attaques à mains nues Iruxies canalisent l'énergie spirituelle de vos ancêtres. Toute les attaques à mains nues que vous obtenez de votre héritage ou de dons ancestraux, héritage ou dons d'ascendance d'homme-lézard, possèdent les effets de la rune de propriété Spectrale."
                ]
            },
            {
                "name"       : "Frappes célestes",
                "level"      : "13",
                "traits"     : [
                    "Néphilim"
                ],
                "required"   : [],
                "description": [
                    "Votre lien avec le bien arme toutes vos attaques contre les forces du mal. Toutes vos Frappes avec des armes ou à mains nues obtiennent les trait saint et magique."
                ]
            },
            {
                "name"       : "Frappes de quiétude",
                "level"      : "9",
                "traits"     : [
                    "Crépusculaire"
                ],
                "required"   : [],
                "description": [
                    "Votre lien avec le Cimetière vous permet d'apporter la mort à toutes les formes de vie et de non vie, en exploitant leurs faiblesses. Toutes vos Frappes avec des armes et des attaques à mains nues sont magiques et infligent 1 dégât de vide supplémentaire aux créatures vivantes et 1 dégât de vitalité supplémentaire aux morts-vivants. Les dégâts supplémentaires passent à 2 si la Frappe se fait avec une rune de puissance +3"
                ]
            },
            {
                "name"       : "Frappes fiélonnes",
                "level"      : "13",
                "traits"     : [
                    "Néphilim"
                ],
                "required"   : [],
                "description": [
                    "Votre lien purulent avec les forces du mal imprègne vos armes d'une malveillance débilitante, faisant davantage souffrir les créatures du bien à chacune de vos attaques. Toutes vos Frappes avec des armes ou des attaques à mains nues possèdent les traits impie et magique."
                ]
            },
            {
                "name"       : "Frondeur de titans",
                "level"      : "1",
                "traits"     : [
                    "Halfelin"
                ],
                "required"   : [],
                "description": [
                    "Vous avez appris à utiliser votre fronde pour abattre des créatures énormes. Quand vous réussissez une attaque avec une arme du groupe des frondes contre une créature de taille Grande ou supérieure, vous augmentez la taille du dé de dégâts d'un cran."
                ]
            },
            {
                "name"       : "Furie acculée",
                "level"      : "5",
                "traits"     : [
                    "Homme-rat"
                ],
                "required"   : [],
                "description": [
                    "Si un adversaire d'une taille supérieure à la vôtre obtient un coup critique et vous fait subir des dégâts, cet adversaire est sentiment_very_dissatisfiedPris au dépourvu par rapport à vous pendant 1 round."
                ]
            },
            {
                "name"       : "Génie des pièges artisanaux",
                "level"      : "5",
                "traits"     : [
                    "Kobold"
                ],
                "required"   : [
                    "expert en Artisanat, Fabrication de pièges artisanaux"
                ],
                "description": [
                    "S'il faut habituellement 1 minute pour Fabriquer un piège artisanal, vous pouvez le Fabriquer en 3 actions Interagir. Chaque jour durant vos préparatifs quotidiens, vous pouvez préparez trois pièges artisanaux de votre recueil pour un déploiement rapide (augmenté à 4 si vous êtes maître en Artisanat et à 5 si vous êtes légendaire). Les pièges artisanaux préparés de cette façon ne vous coûtent pas de ressources.",
                    "Lorsqu'une créature obtient un échec critique à son jet de sauvegarde et subit des dégâts de l'effet initial du piège artisanal, elle est sentiment_very_dissatisfiedPrise au dépourvu jusqu'à la fin de son prochain tour."
                ]
            },
            {
                "name"       : "Glissement sournois",
                "level"      : "13",
                "traits"     : [
                    "Homme-rat"
                ],
                "required"   : [],
                "description": [
                    "Vous vous serrez, vous déplacez furtivement et glissez d'abri en abri rapidement avec une grande discrétion.",
                    "Vous pouvez vous déplacer de votre Vitesse lorsque vous sports_martial_artsÊtes furtif ."
                ]
            },
            {
                "name"       : "Gloire méritée",
                "level"      : "1",
                "traits"     : [
                    "Aiuvarin"
                ],
                "required"   : [],
                "description": [
                    "Les elfes ont souvent du mal à ne pas sous-estimer les aiuvarins et vous avez de l'expérience lorsqu'il s'agit de raconter ce que vous avez accompli pour obtenir leur respect. Vous êtes qualifié en Représentation. Si vous êtes qualifié en Représentation (du fait de votre historique ou de votre classe, par exemple), vous êtes qualifié dans une autre compétence de votre choix à la place.",
                    "Vous obtenez le don military_techReprésentation impressionnante . Lorsque vous faites un test de Représentation pour sports_martial_artsFaire bonne impression sur un elfe, lorsque vous obtenez un échec critique, il devient un échec."
                ]
            },
            {
                "name"       : "Glouton maudit",
                "level"      : "13",
                "traits"     : [
                    "Tengu"
                ],
                "required"   : [
                    "Avaler la chance"
                ],
                "description": [
                    "Vous pouvez military_techAvaler la chance une fois par heure, plutôt qu'une fois par jour."
                ]
            },
            {
                "name"       : "Grattement aggravant",
                "level"      : "9",
                "traits"     : [
                    "Félide",
                    "Maladie"
                ],
                "required"   : [
                    "Attaque à mains nues de griffe"
                ],
                "description": [
                    "Vos griffes charrient une substance irritante qui est inoffensive pour vous mais qui est dommageable pour les autres. Vos Frappes de griffe infligent 1d4 dégâts de poison persistants supplémentaires sur un coup critique."
                ]
            },
            {
                "name"       : "Griffes aiguisées 1",
                "level"      : "9",
                "traits"     : [
                    "Homme-lézard"
                ],
                "required"   : [
                    "Arsenal iruxi (griffes)"
                ],
                "description": [
                    "Fréquence Une fois par heure",
                    "Vous pouvez limer ou ronger vos griffes pour leur donner un tranchant particulier. La prochaine Frappe de griffes, avec laquelle vous touchez et infligez des dégâts, inflige 1d6 dégâts de saignement supplémentaires. Vous ne pouvez pas avoir plus d'une occurrence de Aiguiser ses griffes active à la fois."
                ]
            },
            {
                "name"       : "Griffes de guenaude",
                "level"      : "1",
                "traits"     : [
                    "Changelin"
                ],
                "required"   : [],
                "description": [
                    "Lorsque vous êtes parvenu à l'âge adulte, vos ongles sont devenus longs et coupants.Vous obtenez une attaque à mains nues de griffes qui inflige 1d4 dégâts tranchants et sont dans le groupe pugilat et possèdent les traits à mains nues, agile et finesse.",
                    "Spécial Les griffes de guenaude peuvent se développer à tout moment de la vie d'un changelin. Vous pouvez choisir ce don à tout moment au cours duquel vous pourriez obtenir un don ancestral, mais vous ne pouvez plus utiliser le réapprentissage pour le perdre."
                ]
            },
            {
                "name"       : "Griffes du grimpeur",
                "level"      : "5",
                "traits"     : [
                    "Félide"
                ],
                "required"   : [],
                "description": [
                    "Vous pouvez étendre vos griffes pour vous aider à Escalader.",
                    "Vous obtenez une Vitesse d'escalade de 3 mètres."
                ]
            },
            {
                "name"       : "Griffes maudites",
                "level"      : "9",
                "traits"     : [
                    "Changelin"
                ],
                "required"   : [
                    "Attaque à mains nues de Griffe"
                ],
                "description": [
                    "Vos griffes portent la magie de votre mère guenaude. Lorsque vous obtenez un coup critique avec une Frappe de griffe, la cible subit casino1d4 dégâts mentaux persistants supplémentaires."
                ]
            },
            {
                "name"       : "Grigri porte-bonheur",
                "level"      : "9",
                "traits"     : [
                    "Léchi"
                ],
                "required"   : [
                    "Superstition léchie"
                ],
                "description": [
                    "Vous avez un fétiche qui vous apporte la chance. Vous obtenez un bonus de circonstances de +1 aux jets de sauvegarde contre les sorts et effets magiques tout le temps, pas juste lorsque vous utilisez military_techSuperstition léchie . Si vous perdez votre porte bonheur, vous perdez le bonus jusqu'à ce que vous en désignez un nouveau, ce qui vous prend typiquement une semaine."
                ]
            },
            {
                "name"       : "Grimpeur aux arbres (Elfe)",
                "level"      : "9",
                "traits"     : [
                    "Elfe"
                ],
                "required"   : [],
                "description": [
                    "Vous avez passé une grande par de votre vie dans la cime des arbres et êtes devenu un expert lorsqu'il s'agit de grimper aux arbres rapidement et en toute sécurité.",
                    "Vous obtenez une Vitesse d'escalade de 3 mètres."
                ]
            },
            {
                "name"       : "Grimpeur des cavernes",
                "level"      : "9",
                "traits"     : [
                    "Gobelin"
                ],
                "required"   : [],
                "description": [
                    "Après avoir passé des années à crapahuter dans les cavernes, vous n'avez aucun mal à escalader les obstacles qui se dressent sur votre chemin. Vous obtenez une Vitesse d'escalade de 3 mètres."
                ]
            },
            {
                "name"       : "Grimpeur prodigieux",
                "level"      : "5",
                "traits"     : [
                    "Tripkee"
                ],
                "required"   : [],
                "description": [
                    "Votre capacité d'escalade naturelle et votre technique ont fait de vous un grimpeur puissant. Vous obtenez une vitesse d'escalade de 3 mètres.",
                    "Spécial Si vous avez l'héritage Tripkee aux orteils collants , vous obtenez à la place une vitesse d'escalade de 6 mètres."
                ]
            },
            {
                "name"       : "Grognement du prédateur r",
                "level"      : "9",
                "traits"     : [
                    "Félide"
                ],
                "required"   : [
                    "expert en Intimidation"
                ],
                "description": [
                    "Déclencheur Vous obtenez un succès en sports_martial_artsCherchant une créature sentiment_very_dissatisfiedcachée ou sentiment_very_dissatisfiednon détectée .",
                    "Vous poussez un grognement sourd pour sports_martial_artsDémoraliser une créature que vous venez juste de débusquer. Vous ne subissez pas la pénalité de -4 liée au fait de ne pas partager de langue avec cette créature."
                ]
            },
            {
                "name"       : "Haleine de miel",
                "level"      : "9",
                "traits"     : [
                    "Kholo"
                ],
                "required"   : [
                    "Héritage kholo à haleine douce"
                ],
                "description": [
                    "Vous sentez le miel et les choses savoureuses. Si votre cible peut sentir votre haleine, vous avez un bonus de circonstances de +2 aux tests pour sports_martial_artsFaire bonne impression . De plus, vous pouvez lancer auto_awesomeDiscours captivant comme un sort inné occulte au rang 3 une fois par jour, sauf que le sort a une portée de 9 mètres et le trait olfactif au lieu du trait audible. Les cibles n'obtiennent aucun bonus de circonstances du fait de ne pas être d'accord avec vous."
                ]
            },
            {
                "name"       : "Halfelin affranchi",
                "level"      : "1",
                "traits"     : [
                    "Halfelin"
                ],
                "required"   : [],
                "description": [
                    "Vous avez été contraint à la servitude ou enchaîné dans une prison, mais vous vous êtes évadé et vous vous êtes entraîné pour vous assurer de ne plus jamais être pris. Quand vous obtenez un succès sur un test pour sports_martial_artsVous échapper ou un jet de sauvegarde contre un effet qui vous mettrait dans l'état sentiment_very_dissatisfiedAgrippé , sentiment_very_dissatisfiedImmobilisé ou sentiment_very_dissatisfiedEntravé , il devient un succès critique.",
                    "Quand une créature obtient un échec au test pour vous sports_martial_artsSaisir , elle obtient un échec critique."
                ]
            },
            {
                "name"       : "Halfelin vigilant",
                "level"      : "1",
                "traits"     : [
                    "Halfelin"
                ],
                "required"   : [],
                "description": [
                    "Vous prêtez une grande attention aux gens qui vous entourent, vous permettant plus facilement de remarquer lorsqu'ils agissent de manière inhabituelle. Vous obtenez un bonus de circonstances de +2 à vos tests de Perception lorsque vous utilisez l'action basique sports_martial_artsDeviner les intentions afin de remarquer les personnages charmés ou possédés. Si vous n'êtes pas activement en train de tenter de Deviner les intentions d'un personnage charmé ou possédé, le MJ fait un test secret sans votre bonus habituel de circonstances, afin de déterminer si vous remarquez que cette créature est charmée ou possédée.",
                    "En plus de l'utiliser pour les tests de compétence, vous pouvez utiliser l'action basique sports_martial_artsAider pour accorder un bonus à une autre créature qui fait un jet de sauvegarde ou un autre test afin de surmonter un enchantement ou une possession. Comme c'est le cas avec l'action Aider, vous devez être préparé à utiliser une action lors de votre tour pour encourager la créature à lutter contre l'effet."
                ]
            },
            {
                "name"       : "Halo",
                "level"      : "1",
                "traits"     : [
                    "Néphilim"
                ],
                "required"   : [],
                "description": [
                    "Vous êtes entouré d'un halo de lumière et de bonté qui émet de la lumière avec les effets d'un tour de magie divin de auto_awesomeLumière . Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au niveau supérieur. Vous pouvez Maintenir pour supprimer ou rétablir le halo."
                ]
            },
            {
                "name"       : "Improvisateur astucieux",
                "level"      : "5",
                "traits"     : [
                    "Humain"
                ],
                "required"   : [],
                "description": [
                    "Vous avez appris à gérer les situations qui vous dépassent.",
                    "Vous obtenez le don général military_techImprovisation inexpérimentée .",
                    "En outre, vous pouvez entreprendre des actions de compétences qui vous demandent normalement de posséder le degré de maîtrise qualifié, même si vous êtes inexpérimenté."
                ]
            },
            {
                "name"       : "Improvisation extraordinaire f",
                "level"      : "9",
                "traits"     : [
                    "Humain"
                ],
                "required"   : [
                    "Improvisateur astucieux"
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Vous tentez un test en utilisant une compétence dans laquelle vous êtes inexpérimenté",
                    "Un éclair de génie vous confère un avantage majeur avec une compétence malgré votre inexpérience. Obtenez un bonus de circonstances de +4 au test de compétence déclencheur."
                ]
            },
            {
                "name"       : "Incisives vicieuses",
                "level"      : "1",
                "traits"     : [
                    "Homme-rat"
                ],
                "required"   : [],
                "description": [
                    "Votre attaque à mains nues de mâchoire inflige 1d6 dégâts perforants au lieu de 1d4, et obtient le trait traître. Vous pouvez limer vos dents et les laisser repousser plus tard, vous permettant de choisir ce don à tout niveau ou faire l'objet d'un réapprentissage dans l'un ou l'autre sens."
                ]
            },
            {
                "name"       : "Inoffensivement mignon",
                "level"      : "1",
                "traits"     : [
                    "Léchi"
                ],
                "required"   : [],
                "description": [
                    "Votre taille et votre comportement font qu'il vous est aisé de convaincre les autres que vous ne leur voulez pas de mal. Vous obtenez le don de compétence military_techSollicitation éhontée . De plus, vous obtenez un bonus de circonstances de +1 aux tests d'initiative lorsque vous utilisez Duperie pour la déterminer."
                ]
            },
            {
                "name"       : "Investiture osseuse",
                "level"      : "13",
                "traits"     : [
                    "Homme-lézard"
                ],
                "required"   : [
                    "Magie osseuse"
                ],
                "description": [
                    "Vous vous recouvrez d'os spirituels de dinosaure pour devenir un dinosaure Très grand. Vous pouvez lancer auto_awesomeForme de dinosaure au rang 5 sur vous-même comme un sort inné une fois par jour."
                ]
            },
            {
                "name"       : "Irrépressible (Halfelin)",
                "level"      : "9",
                "traits"     : [
                    "Halfelin"
                ],
                "required"   : [],
                "description": [
                    "Vous pouvez facilement faire fi des tentatives de jouer sur vos peurs et vos émotions.",
                    "Si vous obtenez un succès sur un jet de sauvegarde contre un effet d'émotion, vous obtenez à la place un succès critique. En outre, si votre héritage est Halfelin flegmatique, quand vous obtenez un échec critique sur un jet de sauvegarde contre un effet d'émotion, vous obtenez à la place un échec simple."
                ]
            },
            {
                "name"       : "Joues remarquables",
                "level"      : "9",
                "traits"     : [
                    "Homme-rat"
                ],
                "required"   : [],
                "description": [
                    "Vous obtenez les dons military_techConsommable prescient et military_techPlanificateur prescient , sauf que vous retirez les objets de vos abajoues. Cela signifie que l'objet que vous récupérez doit tenir dans vos abajoues ; c'est généralement un objet d'Encombrement négligeable à moins que vous ne possédiez le don military_techAbajoues ."
                ]
            },
            {
                "name"       : "Kholo ricanant",
                "level"      : "9",
                "traits"     : [
                    "Kholo"
                ],
                "required"   : [
                    "maître en Intimidation"
                ],
                "description": [
                    "Votre ricanement sinistre est un son d'avertissement et de menace. Vous obtenez le don de compétence military_techCri de guerre . Vous ne subissez pas de pénalité lorsque vous tentez de sports_martial_artsDémoraliser une créature qui ne comprend pas votre langue."
                ]
            },
            {
                "name"       : "Lancer retourné 2",
                "level"      : "9",
                "traits"     : [
                    "Nain"
                ],
                "required"   : [],
                "description": [
                    "Vous avez maîtrisé la technique permettant d'utiliser un projectile de manière à ce qu'il revienne dans vos mains après avoir été lancé, bien que cela nécessite un moment pour précisément calculer la trajectoire et les ricochets possibles.",
                    "Faites une Frappe à distance avec une arme de jet. Une fois que la Frappe est terminée, la trajectoire de l'arme ou ses ricochets la ramènent dans votre main. Si vos mains sont pleines lorsque l'arme revient, elle tombe sur le sol dans votre case."
                ]
            },
            {
                "name"       : "Langage des rats",
                "level"      : "1",
                "traits"     : [
                    "Homme-rat"
                ],
                "required"   : [],
                "description": [
                    "Vous pouvez poser des questions, recevoir des réponses et utiliser la compétence Diplomatie avec les rongeurs, incluant les blaireaux, les souris, les porcs-épics, les rats et les écureuils, mais pas avec d'autres mammifères comme les chiens ou les chauves-souris. Le MJ détermine quels sont les animaux qu'il considère comme des rongeurs."
                ]
            },
            {
                "name"       : "Langue longue",
                "level"      : "5",
                "traits"     : [
                    "Tripkee"
                ],
                "required"   : [
                    "Héritage tripkee à longue langue"
                ],
                "description": [
                    "Vous avez appris à étirer votre langue exceptionnellement longue au-delà de ses limites initiales. Lorsque vous utilisez votre langue pour lancer des sorts de contact ou effectuer des actions d'Interaction très simples, vous pouvez le faire à une distance de 1,50 mètre au-delà de la portée habituelle."
                ]
            },
            {
                "name"       : "Langue reliée",
                "level"      : "9",
                "traits"     : [
                    "Tripkee"
                ],
                "required"   : [
                    "tripkee à longue langue"
                ],
                "description": [
                    "Votre langue peut s'accrocher momentanément aussi facilement que vos mains. Tant que vous pouvez ouvrir librement la bouche, vous n'avez pas besoin d'avoir les mains libres pour sports_martial_artsDésarmer , sports_martial_artsVous raccrocher in extremis , sports_martial_artsRepositionner ou faire un sports_martial_artsCroc-en-jambe .",
                    "Si vous possédez le don military_techLongue langue , vous pouvez Désarmer, vous raccrocher in extremis, Repositionner ou faire un Croc-en-jambe avec votre langue à une distance supérieure de 1,50 mètre à votre allonge normale."
                ]
            },
            {
                "name"       : "Large bouche",
                "level"      : "9",
                "traits"     : [
                    "Homme-rat"
                ],
                "required"   : [
                    "Abajoues"
                ],
                "description": [
                    "Au lieu d'y emmagasiner jusqu'à quatre objet d'Encombrement léger, vous pouvez y placer des objets atteignant 1 Encombrement. La taille maximale de chaque objet donné reste inchangée."
                ]
            },
            {
                "name"       : "Linguistique ancestrale",
                "level"      : "1",
                "traits"     : [
                    "Elfe"
                ],
                "required"   : [
                    "âgé d'au moins 100 ans"
                ],
                "description": [
                    "Du fait de votre durée de vie étendue, vous avez étudié bien des langues. Durant vos préparatifs quotidiens, vous pouvez plonger dans vos anciens souvenirs pour devenir capable de parler dans une langue courante ou une autre à laquelle vous avez accès. Vous connaissez cette langue jusqu'à vos prochains préparatifs. Comme cette connaissance n'est que temporaire, vous ne pouvez l'utiliser comme un prérequis pour obtenir une option permanente pour votre personnage."
                ]
            },
            {
                "name"       : "Locuteur reptilien",
                "level"      : "1",
                "traits"     : [
                    "Homme-lézard"
                ],
                "required"   : [],
                "description": [
                    "Vous comprenez les sons produits par les reptiles comme s'il s'agissait d'une langue.",
                    "Vous pouvez leur poser des questions, recevoir des réponses et utiliser la compétence Diplomatie avec les animaux qui sont des reptiles (Le MJ détermine quels animaux comptent parmi les reptiles)."
                ]
            },
            {
                "name"       : "Longévité ancestrale",
                "level"      : "1",
                "traits"     : [
                    "Elfe"
                ],
                "required"   : [
                    "Avoir au moins 100 ans"
                ],
                "description": [
                    "Vous avez accumulé de nombreuses connaissances au fil des années.",
                    "Lors de vos préparatifs quotidiens, vous pouvez méditer sur vos expériences passées afin de bénéficier du degré de maîtrise qualifié dans une compétence de votre choix. Vous bénéficiez de cette maîtrise jusqu'à vos prochains préparatifs. Dans la mesure où cette maîtrise est temporaire, vous ne pouvez pas l'utiliser comme prérequis pour bénéficier d'une amélioration de compétence ou d'une option permanente de personnage, comme un don."
                ]
            },
            {
                "name"       : "Longévité experte",
                "level"      : "9",
                "traits"     : [
                    "Elfe"
                ],
                "required"   : [
                    "Longévité ancestrale"
                ],
                "description": [
                    "Vous avez continué d'affiner les connaissances et compétences acquises au cours de votre vie. Quand vous choisissez une compétence dans laquelle devenir qualifié grâce à votre military_techLongévité ancestrale , vous pouvez également choisir de devenir expert dans une compétence dans laquelle vous êtes déjà qualifié. Ceci dure jusqu'à ce que l'effet de Longévité ancestrale prenne fin.",
                    "Quand les effets des dons Longévité ancestrale et Longévité experte prennent fin, vous pouvez réapprendre une de vos améliorations de compétence. L'amélioration de compétence dont vous bénéficiez grâce à ce réapprentissage doit soit vous permettre de devenir qualifié dans la compétence choisie avec le don Longévité ancestrale, soit vous permettre de devenir expert dans la compétence choisie avec le don Longévité experte."
                ]
            },
            {
                "name"       : "Longévité universelle",
                "level"      : "13",
                "traits"     : [
                    "Elfe"
                ],
                "required"   : [
                    "Longévité ancestrale"
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vous avez perfectionné votre capacité à entretenir toutes les compétences que vous avez apprises au cours de votre longue vie de sorte que vous n'êtes jamais véritablement inexpérimenté dans une compétence. Vous réfléchissez à vos expériences de vie, en modifiant la compétence que vous avez sélectionnée avec le cadre des dons military_techLongévité ancestrale (et la compétence que vous avez sélectionnée avec military_techLongévité experte si vous avez ce don)."
                ]
            },
            {
                "name"       : "Magie céleste",
                "level"      : "9",
                "traits"     : [
                    "Néphilim"
                ],
                "required"   : [
                    "Angélique, Porteur de loi, Touché par la muse ou un autre don de lignée associé avec les célestes"
                ],
                "description": [
                    "Vous possédez la magie céleste. Choisissez deux des sorts suivants :",
                    [
                        "auto_awesomeClarté d'esprit",
                        "auto_awesomeFlamme continuelle",
                        "auto_awesomeForme humanoïde",
                        "auto_awesomeLumière révélatrice",
                        "auto_awesomePartage de vie ou",
                        "auto_awesomeRemise sur pied"
                    ],
                    "Vous pouvez Lancer chaque sort une fois par jour chacun comme des Sorts innés divins de rang 2.",
                    "Habituellement, ceux qui ont le type angélique choisissent Clarté d'esprit et Forme humanoïde, les Porteurs de loi préfèrent Flamme éternelle et Partage de vie et ceux Touchés par la muse prendront Lumière révélatrice et Marche raffermie."
                ]
            },
            {
                "name"       : "Magie de la nuit",
                "level"      : "9",
                "traits"     : [
                    "Dhampir"
                ],
                "required"   : [],
                "description": [
                    "Vous pouvez puiser dans la magie qui court dans votre sang. Vous obtenez auto_awesomeForme animale (loup seulement, en utilisant les statistiques d'un canidé) et auto_awesomeBrume comme des Sorts innés divins au rang 2. Vous pouvez lancer chacun de ces sorts une fois par jour."
                ]
            },
            {
                "name"       : "Magie des crépusculaires",
                "level"      : "9",
                "traits"     : [
                    "Crépusculaire"
                ],
                "required"   : [],
                "description": [
                    "Votre relation avec les psychopompes vous donne le pouvoir de jeter un œil dans le futur proche et celui de protéger les corps des ravages de la mort-vivance. Vous pouvez Lancer auto_awesomeAugure et auto_awesomeReposer en paix une fois par jour chacun comme des Sorts innés divins de rang 2."
                ]
            },
            {
                "name"       : "Magie des fiélons",
                "level"      : "9",
                "traits"     : [
                    "Néphilim"
                ],
                "required"   : [
                    "Rejeton sombre, Rejeton infernal, Né de la fosse ou un autre don de lignée associé aux fiélons"
                ],
                "description": [
                    "La magie fiélonne coule dans vos veines. Choisissez deux des sorts suivants :",
                    [
                        "auto_awesomeDiscerner l'invisible",
                        "auto_awesomeFracassement",
                        "auto_awesomeMagie déguisée",
                        "auto_awesomeParanoïa",
                        "auto_awesomeSimulacre de vitalité",
                        "auto_awesomeInvisibilité"
                    ],
                    "Vous pouvez lancer chacun des sorts choisis une fois par jour comme des Sorts innés divins de niveau 2.",
                    "Les rejetons sombre privilégient habituellement Simulacre de vitalité et Discerner l'invisible, ceux Nés de la fosse choisiront plutôt Paranoïa et Fracassement et les Rejetons de la fosse s'orienteront davantage vers Invisibilité et Magie déguisée."
                ]
            },
            {
                "name"       : "Magie des guenaudes",
                "level"      : "13",
                "traits"     : [
                    "Changelin"
                ],
                "required"   : [],
                "description": [
                    "Par votre héritage, vous pouvez dupliquer la magie des guenaudes. Choisissez un sort courant de rang inférieur ou égal à 4 parmi ceux accessibles à un cercle de guenaudes, en incluant les sorts que contribue à apporter à un cercle une guenaude du type de votre mère. Vous pouvez Lancer ce sort une fois par jour comme un sort occulte inné de rang 4.",
                    "Les sorts accessibles à tous les cercles sont auto_awesomeAugure , auto_awesomeCharme , auto_awesomeClairaudience , auto_awesomeClairvoyance , auto_awesomeDéguisement illusoire et auto_awesomeMessage onirique .",
                    "Les sorts éligibles accordés par les plus prééminents types de guenaude sont :",
                    [
                        "Guenaude coucou auto_awesomeCauchemar , auto_awesomeRavages magiques",
                        "Guenaude de fer auto_awesomeCloué à terre , auto_awesomeRavages magiques",
                        "Guenaude doucereuse auto_awesomeCharme , auto_awesomeMalédiction du paria , auto_awesomeParoles mielleuses",
                        "Guenaude marine auto_awesomeForme humanoïde , auto_awesomeMalédiction du marin , auto_awesomeMarche sur l'eau"
                    ]
                ]
            },
            {
                "name"       : "Magie du Premier monde",
                "level"      : "1",
                "traits"     : [
                    "Gnome"
                ],
                "required"   : [],
                "description": [
                    "Votre lien avec le Premier monde vous accorde le bénéfice d'un tour de magie primordial inné, ressemblant beaucoup à ceux des fées. Choisissez un tour de magie issu de la liste des sorts primordiaux. Vous pouvez Lancer ce sort comme un sort primordial inné à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au niveau supérieur."
                ]
            },
            {
                "name"       : "Magie du rat",
                "level"      : "5",
                "traits"     : [
                    "Homme-rat"
                ],
                "required"   : [],
                "description": [
                    "Il semble toujours y avoir un rat aux alentours pour transmettre vos messages.",
                    "Vous pouvez lancer auto_awesomeMessager animal une fois par jour comme un sort primordial inné. Lorsque vous le faites, l'animal qui répond est toujours un rat. S'il n'y a pas de rats à portée, le sort est perdu."
                ]
            },
            {
                "name"       : "Magie osseuse",
                "level"      : "1",
                "traits"     : [
                    "Homme-lézard"
                ],
                "required"   : [],
                "description": [
                    "Votre lien avec vos ancêtres iruxis se manifeste sous la forme d'un simple sort primordial que vous lancez en utilisant un fragment des os d'un ancêtre. Choisissez un tour de magie de la liste des sorts occultes ou primordiaux. Vous pouvez lancer ce tour de magie à volonté et il est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur.",
                    "Spécial Choisissez, quand vous obtenez ce don, si vos sorts innés sont primordiaux ou occultes. Ce choix s'appliquera à tous les sorts innés que vous obtiendrez avec les dons ancestraux homme-lézard qui ont Magie osseuse en tant que prérequis."
                ]
            },
            {
                "name"       : "Magie surnaturelle",
                "level"      : "1",
                "traits"     : [
                    "Elfe"
                ],
                "required"   : [],
                "description": [
                    "Votre magie elfique se manifeste sous la forme d'un sort arcanique simple, même si vous n'avez pas été formé à la magie. Choisissez un tour de magie dans la liste des sorts arcaniques. Vous pouvez lancer ce tour de magie comme un sort inné arcanique à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur."
                ]
            },
            {
                "name"       : "Majesté du bienfaiteur 1",
                "level"      : "17",
                "traits"     : [
                    "Guérison",
                    "Kobold",
                    "Visuel"
                ],
                "required"   : [],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vous puisez dans la grandeur du bienfaiteur de votre terrier. Vous obtenez un nombre de Points de vie temporaires égal à votre niveau, pendant une durée de 1 minute. De plus, vous pouvez immédiatement tenter un test nu pour retirer chaque type de dégâts persistants qui vous affecte. Enfin, jusqu'au début de votre prochain tour, toute créature vous ciblant avec une attaque, un sort ou une capacité dommageable doit d'abord réussir un casinoTest nu, DD 11 ou l'action est interrompue car la créature évite de poser les yeux sur votre majesté."
                ]
            },
            {
                "name"       : "Malédiction du chat noir r",
                "level"      : "13",
                "traits"     : [
                    "Félide",
                    "Infortune",
                    "Occulte"
                ],
                "required"   : [],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Une créature dans les 9 m que vous pouvez voir devrait réussir son jet de sauvegarde.",
                    "Vous feulez une malédiction malveillante. La cible relance le jet déclencheur et utiliser le pire résultat."
                ]
            },
            {
                "name"       : "Manifestation bestiale",
                "level"      : "1",
                "traits"     : [
                    "Néphilim"
                ],
                "required"   : [],
                "description": [
                    "Une partie de votre corps possède une influence animale d'une créature planaire. Vos mains se terminent en griffes, vous possédez des sabots à la place des pieds, des dents effilées emplissent votre bouche ou une queue s'étend à partir de votre colonne vertébrale. Vous obtenez une attaque à mains nues de votre choix parmi les suivantes qui fait partie du groupe pugilat et possède le dé de dégâts et les traits indiqués.",
                    [
                        "Griffe 1d4 dégâts tranchants (agile, finesse, à mains nues, polyvalent P)",
                        "Mâchoires 1d6 dégâts perforants (finesse, à mains nues)",
                        "Queue 1d4 dégâts contondants (agile, finesse, à mains nues)",
                        "Sabot 1d6 dégâts contondants (finesse, à mains nues)"
                    ],
                    "Spécial Vous ne pouvez choisir ce don qu'au niveau 1 et il ne peut faire l'objet d'un réapprentissage et vous ne pouvez pas changer le type d'attaque que vous avez obtenu."
                ]
            },
            {
                "name"       : "Marche des mines 2",
                "level"      : "13",
                "traits"     : [
                    "Nain"
                ],
                "required"   : [],
                "description": [
                    "Vous marchez à travers la terre et pouvez conduire un allié tout du long. Vous obtenez une vitesse de creusement de 4,50 mètres lorsque vous utilisez cette activité (si vous n'en avez pas une supérieure), et vous pouvez soit Marcher rapidement deux fois, soit Creuser deux fois. Vous pouvez choisir un allié consentant qui se trouve à côté de vous au début de votre déplacement afin qu'il se déplace avec vous. L'allié finit son déplacement à une case derrière vous."
                ]
            },
            {
                "name"       : "Marchepierre",
                "level"      : "9",
                "traits"     : [
                    "Nain"
                ],
                "required"   : [],
                "description": [
                    "Vous faites preuve d'un profond respect pour la pierre, avec laquelle vous vous sentez étroitement lié. Vous gagnez auto_awesomeUni à la pierre comme sort inné divin au rang 3 et vous pouvez le lancer une fois par jour.",
                    "Si vous possédez également le don ancestral military_techOeil du bâtisseur , vous pouvez tenter de repérer des irrégularités et des pièges dans les constructions de pierre qui demandent normalement un degré de maîtrise légendaire en Perception. Si vous possédez à la fois le don ancestral Oeil du bâtisseur et une maîtrise légendaire en Perception, lorsque vous n'êtes pas en train de Chercher et que le MJ fait un test secret afin de déterminer si vous remarquez des irrégularités dans les constructions en pierre, vous conservez le bonus acquis grâce à Oeil du bâtisseur et ne subissez pas la pénalité de circonstances de -2."
                ]
            },
            {
                "name"       : "Médiateur monstrueux",
                "level"      : "1",
                "traits"     : [
                    "Dromaar"
                ],
                "required"   : [],
                "description": [
                    "Votre double nature humaine et orque vous donne une perspective unique qui vous permet de faire le lien entre les humains et de nombreuses créatures intelligentes que les humains considèrent comme des monstres. Vous obtenez un bonus de circonstances de +1 à vos tests de Diplomatie contre des créatures intelligentes non humanoïdes et contre les humanoïdes marginalisés par les sociétés humaines (à la discrétion du MJ, mais ceux-ci incluent généralement les géants, les gobelins, les kobolds et les orcs). Vous bénéficiez également de ce bonus à vos tests de Perception pour sports_martial_artsDeviner les intentions de ces créatures."
                ]
            },
            {
                "name"       : "Mort accidentelle r",
                "level"      : "1",
                "traits"     : [
                    "Crépusculaire",
                    "Fortune"
                ],
                "required"   : [],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur vous devriez mourir à cause d'un échec à un test de récupération ou à un jet de sauvegarde.",
                    "Votre précédente vie s'est terminée à cause d'un strict manque de chance, en étant frappé par la foudre ou en étouffant à cause d'une arête de poisson. Vous pouvez relancer le test de récupération ou le jet de sauvegarde déclencheur, mais vous devez utiliser le nouveau résultat, même s'il est pire.",
                    "Spécial Vous ne pouvez prendre ce don qu'au niveau 1 et vous ne pouvez pas utiliser le réapprentissage pour le perdre ou l'obtenir."
                ]
            },
            {
                "name"       : "Mort délibérée r",
                "level"      : "1",
                "traits"     : [
                    "Crépusculaire"
                ],
                "required"   : [],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Vous êtes sur le point d'obtenir l'état Mourant suite au résultat d'une attaque ou d'une capacité d'une autre créature et cette créature est dans votre allonge au corps-à-corps.",
                    "Une fois, vous êtes mort à cause de quelqu'un (meurtrier, monstre ou soldat) qui a choisi de vous abattre. Juste avant de perdre conscience, faites une Frappe au corps-à-corps contre la créature déclencheuse.",
                    "Spécial Vous pouvez choisir ce don seulement au niveau 1 et vous ne pouvez utiliser le réapprentissage pour le perdre ou l'acquérir."
                ]
            },
            {
                "name"       : "Multiples talents",
                "level"      : "9",
                "traits"     : [
                    "Humain"
                ],
                "required"   : [],
                "description": [
                    "Vous avez appris à partager votre attention entre plusieurs classes avec facilité. Vous obtenez un don de dévouement multiclasse de niveau 2, même si vous ne pouvez pas en principe obtenir d'autre don de dévouement avant de choisir davantage de dons de votre archétype actuel. Si vous possédez l'héritage aiuvarin, vous n'avez pas besoin de posséder les modificateurs d'attribut nécessaires indiqués dans les prérequis de ce don."
                ]
            },
            {
                "name"       : "Mur de pierre r",
                "level"      : "17",
                "traits"     : [
                    "Nain",
                    "Terre",
                    "Métamorphose"
                ],
                "required"   : [],
                "description": [
                    "Déclencheur Un ennemi ou l'effet d'un danger vous touche ou vous obtenez un échec sur un jet de sauvegarde à leur encontre.",
                    "La force de la pierre vous envahit si fortement qu'elle remplace votre robuste corps. Vous êtes sentiment_very_dissatisfiedPétrifié jusqu'à la fin du tour en cours. Vous ne subissez aucun dégât de l'effet déclencheur ni aucun autre effet néfaste qui ne pourrait pas affecter la pierre."
                ]
            },
            {
                "name"       : "Mystificateur tengu",
                "level"      : "17",
                "traits"     : [
                    "Tengu"
                ],
                "required"   : [],
                "description": [
                    "Vous pouvez vous transformer vous-même ou transformer les corps des autres pour exprimer votre déplaisir. Une fois par jour, vous pouvez Lancer soit auto_awesomeForme aérienne , soit auto_awesomeMétamorphose maudite comme un sort inné primordial de rang 7. Vous devez prendre la forme d'un oiseau lorsque vous lancez cette Forme aérienne."
                ]
            },
            {
                "name"       : "Nageur rapide",
                "level"      : "5",
                "traits"     : [
                    "Homme-lézard"
                ],
                "required"   : [],
                "description": [
                    "Vous obtenez une Vitesse de nage de 4,50 mètres.",
                    "Spécial Si vous avez l'héritage homme-lézard des terres humides, votre Vitesse de nage passe à 7,50 mètres."
                ]
            },
            {
                "name"       : "Nature coopérative",
                "level"      : "1",
                "traits"     : [
                    "Humain"
                ],
                "required"   : [],
                "description": [
                    "La courte espérance de vie des humains leur confère une perspective particulière sur le monde. Vous avez ainsi appris très tôt à mettre vos différences de côté et coopérer avec d'autres pour atteindre vos buts. Vous obtenez un bonus de circonstances de +4 à vos tests pour Aider."
                ]
            },
            {
                "name"       : "Navigateur de terrier",
                "level"      : "1",
                "traits"     : [
                    "Homme-rat"
                ],
                "required"   : [],
                "description": [
                    "Vous êtes qualifié en Survie. Si vous devriez déjà être qualifié en Survie (du fait de votre historique ou de votre classe par exemple ), vous êtes qualifié dans une autre compétence de votre choix. Lorsque vous sports_martial_artsVous orientez ou tentez un jet de sauvegarde contre le sort auto_awesomeDilemme , vous considérez que le résultat est d'un degré supérieur à celui que vous avez obtenu. Vous ne subissez aucune pénalité lorsque vous Vous orientez sans utiliser de workBoussole ."
                ]
            },
            {
                "name"       : "Né de la fosse",
                "level"      : "1",
                "traits"     : [
                    "Lignée",
                    "Néphilim"
                ],
                "required"   : [],
                "description": [
                    "Votre sang porte la marque d'un démon, une incarnation vivante du péché des profondeurs fétides des Failles extérieures. Le pouvoir démoniaque pulse à travers vos veines et se manifeste de différente manière pour chaque né de la fosse, que vous présentiez des doigts palmés pour vous propulser dans l'eau, de larges mains capables de lutter contre des ennemis de taille supérieure ou d'une autre manifestation. Vous êtes qualifié en Athlétisme. Si vous l'étiez déjà (par votre historique ou votre classe, par exemple), vous êtes qualifié dans une autre compétence de votre choix à la place.",
                    "Vous gagnez aussi un don de compétence de niveau 1 dont le prérequis est d'être qualifié en Athlétisme qui reflète la manifestation de votre sang fiélon."
                ]
            },
            {
                "name"       : "Nerveux",
                "level"      : "1",
                "traits"     : [
                    "Gobelin"
                ],
                "required"   : [],
                "description": [
                    "Vous êtes naturellement suspicieux et à l'affût du danger, plus spécialement lorsque quelqu'un pourrait vous mener dans une embuscade. Vous obtenez un bonus de circonstances de +1 à la CA et aux jets de sauvegarde contre les dangers et à tous les jets d'initiative.",
                    "Si au moins un de vos adversaires utilise la Duperie ou la Diplomatie pour déterminer son initiative, votre bonus à l'initiative venant de ce don passe à +4."
                ]
            },
            {
                "name"       : "Nez sensible",
                "level"      : "1",
                "traits"     : [
                    "Kholo"
                ],
                "required"   : [],
                "description": [
                    "Votre grand nez noir n'est pas seulement là pour la galerie. Vous pouvez détecter les odeurs les plus ténues autour de vous et les suivre à la trace. Vous gagnez odorat (imprécis) avec une portée de 9 mètres.",
                    "Spécial Vous ne pouvez prendre ce don qu'au niveau 1 et vous ne pouvez pas utiliser le réapprentissage pour perdre ce don."
                ]
            },
            {
                "name"       : "Obscurcissement instinctif r",
                "level"      : "13",
                "traits"     : [
                    "Gnome",
                    "Illusion",
                    "Visuel"
                ],
                "required"   : [
                    "Au moins un sort inné arcanique ou occulte obtenu du fait d'un héritage ou d'un don ancestral gnome"
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur vous êtes attaqué par un adversaire, mais il n'a pas encore fait son attaque.",
                    "La magie en vous se manifeste sous la forme d'une réaction naturelle aux menaces. Un double illusoire apparaît dans votre espace pendant un court moment. L'adversaire déclencheur doit faire un casinoTest nu, DD 10 . S'il obtient un succès, l'adversaire vous cible comme à l'ordinaire. S'il obtient un échec, l'adversaire cible votre double illusoire et le détruit. La tradition de cette action correspond à la tradition des options de votre ascendance gnome."
                ]
            },
            {
                "name"       : "Obsession Gnome",
                "level"      : "1",
                "traits"     : [
                    "Gnome"
                ],
                "required"   : [],
                "description": [
                    "Vous pourriez avoir un caractère fantasque mais quand un sujet capte votre attention, vous vous y plongez la tête la première. Vous obtenez le don military_techConnaissance supplémentaire et le don military_techAssurance pour la Connaissance choisie. Comme l'obsession gnome peut s'éteindre aussi vite qu'elle est apparue, vous pouvez réapprendre Obsession gnome pour une sous-catégorie différente en y consacrant 1 journée d'intermède."
                ]
            },
            {
                "name"       : "Obstination arrogante",
                "level"      : "1",
                "traits"     : [
                    "Humain"
                ],
                "required"   : [],
                "description": [
                    "Votre puissant ego rend plus difficile aux autres de vous donner des ordres. Si vous obtenez un succès sur un jet de sauvegarde contre un effet mental qui vise à contrôler directement vos actions, il devient un succès critique. Si une créature obtient un échec sur un test pour vous sports_martial_artsContraindre en utilisant Intimidation, il devient un échec critique (elle ne peut donc pas tenter de vous Contraindre de nouveau pendant 1 semaine)."
                ]
            },
            {
                "name"       : "Odorat draconique",
                "level"      : "5",
                "traits"     : [
                    "Sang-dragon"
                ],
                "required"   : [],
                "description": [
                    "Votre sens de l'odorat s'est amélioré pour devenir aussi acéré que celui d'un dragon. Vous obtenez un odorat imprécis avec une portée de 9 mètres. À sa discrétion, le MJ pourrait doubler cette portée si vous êtes sous le vent de la créature ou diviser cette portée si vous êtes contre le vent."
                ]
            },
            {
                "name"       : "Oeil appréciateur",
                "level"      : "1",
                "traits"     : [
                    "Nain"
                ],
                "required"   : [],
                "description": [
                    "Vous savez reconnaître le bon artisanat lorsque vous le voyez et pouvez partir dans des envolées poétiques à propos des techniques artisanales et des formes.",
                    "Vous êtes qualifié en Artisanat et obtenez un bonus de circonstances de +1 à tous les tests d'Artisanat faits pour sports_martial_artsvous Souvenir . Si vous devriez automatiquement être qualifié en Artisanat (par le biais de votre historique ou de votre classe, par exemple), vous êtes qualifié dans une autre compétence de votre choix à la place.",
                    "De plus, vous obtenez le don de compétence military_techÉvaluation artisanale , vous permettant d'identifier les objets magiques en utilisant la compétence Artisanat."
                ]
            },
            {
                "name"       : "Oeil du bâtisseur",
                "level"      : "1",
                "traits"     : [
                    "Nain"
                ],
                "required"   : [],
                "description": [
                    "Vous avez le don de remarquer les plus petites irrégularités et d'identifier les techniques artisanales dans les constructions de pierre. Vous devenez qualifié en Artisanat. Si vous êtes déjà qualifié en Artisanat, vous gagnez military_techArtisanat spécialisé en maçonnerie.",
                    "Vous obtenez également un bonus de circonstances de +2 à vos tests de Perception pour remarquer les irrégularités dans les constructions en pierre. Ce bonus s'applique à vos tests pour découvrir des pièges mécaniques de pierre ou sentiment_very_dissatisfiedCachés par de la pierre.",
                    "Même si vous n'utilisez pas l'action Chercher ou que vous n'êtes pas en train d'étudier les alentours, le MJ fait automatiquement un test secret pour déterminer si vous notez des irrégularités dans les constructions de pierre. Ce test ne bénéficie par contre pas de votre bonus de circonstances."
                ]
            },
            {
                "name"       : "Ombre de soi-même",
                "level"      : "17",
                "traits"     : [
                    "Halfelin"
                ],
                "required"   : [
                    "légendaire en Discrétion"
                ],
                "description": [
                    "Fréquence Une fois par heure",
                    "Déclencheur Vous réussissez à utiliser Discrétion pour sports_martial_artsVous cacher et devenir sentiment_very_dissatisfiedCaché de tous vos adversaires actuels ou vous utilisez Discrétion pour sports_martial_artsÊtre furtif et devenir sentiment_very_dissatisfiedNon détecté de tous vos adversaires actuels.",
                    "Vous échappez à l'attention de vos adversaires et semblez être ailleurs. Vous devenez sentiment_very_dissatisfiedInvisible pendant 1 minute ou jusqu'à ce que vous entrepreniez une action hostile, en fonction de ce qui se produit en premier. Choisissez un lieu dans les 3 mètres de vous. Jusqu'à ce que votre invisibilité cesse, vous semblez vous être caché à cet endroit pour quiconque essaie de vous trouver. Si celui qui vous cherche obtient la démonstration irréfutable que vous n'êtes pas caché à cet endroit, il ne pense plus que vous y êtes caché mais il ne découvre pas votre position actuelle."
                ]
            },
            {
                "name"       : "Ombre des étendues sauvages",
                "level"      : "1",
                "traits"     : [
                    "Léchi"
                ],
                "required"   : [],
                "description": [
                    "Il est difficile de remarquer votre passage à travers les zones sauvages. Tant que vous n'êtes pas dans un environnement urbain, vous êtes toujours considéré comme étant en train de sports_martial_artsDissimuler des traces , même si vous choisissez une activité différente en mode exploration."
                ]
            },
            {
                "name"       : "Ombres distrayantes",
                "level"      : "1",
                "traits"     : [
                    "Halfelin"
                ],
                "required"   : [],
                "description": [
                    "Vous avez appris à rester caché en utilisant les personnes plus grandes comme distraction pour éviter d'attirer l'attention. Vous pouvez utiliser les créatures qui sont au moins d'une catégorie de taille supérieure à la vôtre (généralement Moyenne ou supérieure) comme abri pour sports_martial_artsVous cacher et sports_martial_artsÊtre furtif , mais vous ne pouvez pas utiliser ces créatures comme abri pour d'autres raisons, comme pour vous sports_martial_artsMettre à l'abri ."
                ]
            },
            {
                "name"       : "Ombres incessantes",
                "level"      : "13",
                "traits"     : [
                    "Halfelin"
                ],
                "required"   : [
                    "Ombres distrayantes"
                ],
                "description": [
                    "Vous excellez à ne pas vous faire remarquer, spécialement au milieu d'une foule. Vous n'avez plus besoin d'abri ou d'être sentiment_very_dissatisfiedMasqué pour sports_martial_artsVous cacher ou sports_martial_artsÊtre furtif . Si vous bénéficiez d'un abri partiel conféré par une créature, vous le considérez comme un abri standard à la place et vous pouvez vous sports_martial_artsMettre à l'abri . Si vous obtenez un abri standard grâce à une créature, vous bénéficiez d'un abri important à la place."
                ]
            },
            {
                "name"       : "Orateur animalier",
                "level"      : "1",
                "traits"     : [
                    "Gnome"
                ],
                "required"   : [],
                "description": [
                    "Vous entendez les sons des animaux comme des conversations et non comme des bruits inintelligibles et vous pouvez y répondre en retour. Vous pouvez poser des questions aux animaux, recevoir des réponses de leur part et utiliser la compétence Diplomatie avec les animaux. Dans la plupart des cas, les animaux sauvages vous laisseront le temps d'exposer votre point de vue. Vous bénéficiez d'un bonus de circonstances de +1 pour leur sports_martial_artsFaire bonne impression ."
                ]
            },
            {
                "name"       : "Orateur coassant",
                "level"      : "1",
                "traits"     : [
                    "Tripkee"
                ],
                "required"   : [],
                "description": [
                    "Vous pouvez communiquer avec les plus simples des grenouilles et autres créatures similaires utilisant de longs coassements. Vous pouvez poser des questions, recevoir des réponse et utiliser la compétence Diplomatie avec les animaux amphibiens (la plupart des amphibiens possèdent le trait amphibie)."
                ]
            },
            {
                "name"       : "Os de pierre r",
                "level"      : "9",
                "traits"     : [
                    "Nain"
                ],
                "required"   : [],
                "description": [
                    "Déclencheur Vous êtes atteint par un coup critique qui inflige des dégâts physiques.",
                    "Votre nature intraitable peut vous aider à surmonter même les plus graves des blessures.",
                    "Faites un casinoTest nu, DD 17 . Si vous obtenez un succès, l'attaque devient un coup normal."
                ]
            },
            {
                "name"       : "Os empaleur",
                "level"      : "17",
                "traits"     : [
                    "Kholo"
                ],
                "required"   : [],
                "description": [
                    "Une fois par jour, vous pouvez lancer auto_awesomePique empaleuse comme sort occulte inné de rang 7, sauf que la pique est constitué d'os plutôt que de fer froid. Cet os possède les effets de la rune de propriété spectrale et peut sentiment_very_dissatisfiedImmobiliser les créature intangibles comme si elles étaient tangibles."
                ]
            },
            {
                "name"       : "Pacificateur d'esprit",
                "level"      : "5",
                "traits"     : [
                    "Crépusculaire"
                ],
                "required"   : [],
                "description": [
                    "Vous êtes en harmonie avec les moindres sons et sensations des esprits qui n'ont pas trouvé le repos. Même si vous n'êtes pas en train de sports_martial_artsFouiller , vous pouvez essayer de tenter de trouver les hantises qui nécessitent normalement que vous les Cherchiez activement. Vous avez toujours besoin de remplir les autres conditions pour trouver la hantise. Vous obtenez un bonus de circonstances de +1 à vos tests pour désactiver les hantises."
                ]
            },
            {
                "name"       : "Parler avec ses semblables",
                "level"      : "5",
                "traits"     : [
                    "Léchi"
                ],
                "required"   : [],
                "description": [
                    "Vous possédez un lien avec les créatures dont vous partagez la physiologie. Vous pouvez leur poser des questions, recevoir des réponses et utiliser la compétence Diplomatie avec les plantes et les champignons. Vous obtenez un bonus de circonstances de +2 aux tests de Diplomatie avec les plantes et les champignons de votre famille. Généralement les léchis fongiques peuvent parler avec les champignons et les moisissures ; les léchis calebasses peuvent parler aux calebasses, aux melons et aux plantes à fruit similaires ; les léchis feuillus peuvent parler aux arbres à feuilles caduques et les léchis à lianes peuvent parler avec les lianes et les plantes grimpantes."
                ]
            },
            {
                "name"       : "Pas elfique 1",
                "level"      : "9",
                "traits"     : [
                    "Elfe"
                ],
                "required"   : [],
                "description": [
                    "Vous vous déplacez avec une grâce de danseur et même vos pas sont amples.",
                    "Vous Faites un pas de 1,50 mètre deux fois."
                ]
            },
            {
                "name"       : "Pas silencieux 1",
                "level"      : "9",
                "traits"     : [
                    "Félide",
                    "Sophistication"
                ],
                "required"   : [],
                "description": [
                    "Vous Faites un pas, puis vous sports_martial_artsVous cachez ou sports_martial_artsÊtes furtif . Vous avez toujours besoin de remplir les conditions pour Vous cacher ou Être furtif, comme à l'ordinaire."
                ]
            },
            {
                "name"       : "Pas vif r",
                "level"      : "5",
                "traits"     : [
                    "Halfelin"
                ],
                "required"   : [],
                "description": [
                    "Déclencheur Un ennemi de taille Grande ou supérieure termine une action de déplacement dans une case adjacente à la vôtre.",
                    "Vous êtes un expert pour éviter les pas pesants des créatures plus grandes. Vous sports_martial_artsFaites un pas vers une autre case adjacente à l'ennemi."
                ]
            },
            {
                "name"       : "Passage libre",
                "level"      : "9",
                "traits"     : [
                    "Halfelin"
                ],
                "required"   : [],
                "description": [
                    "Vous n'autorisez pas les autres à vous entraver. Vous pouvez Lancer auto_awesomeMouvement sans entrave sur vous-même comme un sort primordial inné une fois par jour."
                ]
            },
            {
                "name"       : "Passepierre",
                "level"      : "17",
                "traits"     : [
                    "Peu courant",
                    "Nain"
                ],
                "required"   : [
                    "Marchepierre"
                ],
                "description": [
                    "Les obstacles en terre ne peuvent plus empêcher votre progression. Vous obtenez auto_awesomePassage magique comme un sort divin inné au rang 7 que vous pouvez lancer une fois par jour. Contrairement au sort, quoi qu'il en soit, cette capacité ne peut être utilisée que pour ouvrir des passages à travers des barrières de terre ou de pierre."
                ]
            },
            {
                "name"       : "Patience infinie",
                "level"      : "5",
                "traits"     : [
                    "Elfe"
                ],
                "required"   : [],
                "description": [
                    "Vous travaillez à un rythme issu de votre longévité qui améliore votre minutie. Vous pouvez ainsi volontairement passer deux fois plus de temps que la normale à faire un test de Perception ou de compétence qui prend au moins 1 action. Si vous le faites, vous bénéficiez d'un bonus de circonstances de +2 à ce test et ne réduisez pas nécessairement d'un cran le résultat d'un 1 naturel (vous n'obtenez un échec critique que si votre résultat est inférieur de 10 points au DD). Par exemple, vous pouvez profiter de ces avantages en utilisant 2 actions pour sports_martial_artsChercher , ce qui nécessite normalement 1 action. Vous pouvez obtenir ces avantages en mode exploration en passant deux fois plus de temps que la normale à explorer ou lors d'un intermède en passant deux fois plus de temps d'intermède.",
                    "Le MJ peut déterminer qu'une situation ne vous permet pas de profiter d'un tel avantage si un délai serait directement contre productif au succès de votre entreprise, comme par exemple mener une négociation tendue avec une créature impatiente."
                ]
            },
            {
                "name"       : "Pattes légères 2",
                "level"      : "5",
                "traits"     : [
                    "Félide"
                ],
                "required"   : [],
                "description": [
                    "Vous pouvez vous tenir en équilibre sur vos orteils pour éviter précautionneusement les obstacles. Vous Marchez rapidement puis Faites un pas, ou vous Faites un pas puis Marchez rapidement, en ignorant le terrain difficile durant ce déplacement."
                ]
            },
            {
                "name"       : "Pause chanceuse",
                "level"      : "5",
                "traits"     : [
                    "Félide"
                ],
                "required"   : [
                    "Chance féline"
                ],
                "description": [
                    "Vous avez plus de chance que la plupart des hommes-félins. Vous pouvez déclencher military_techChance féline lorsque vous obtenez un échec ou un échec critique à jet de Vigueur ou de volonté, un test avec les compétences Athlétisme ou Acrobaties, en plus des jets de sauvegarde de Réflexe. Vous ne pouvez toujours utiliser la Chance féline qu'une fois par jour."
                ]
            },
            {
                "name"       : "Peau couturée de cicatrices",
                "level"      : "5",
                "traits"     : [
                    "Orque"
                ],
                "required"   : [],
                "description": [
                    "Les cicatrices glorieuses et chargées d'histoires couvrent et protègent une grande partie de votre corps, vous ceignant d'une armure de chair qui résiste à toute blessure plus faible que celles auxquelles vous avez déjà survécu. Votre DD pour les tests nus mettant un terme aux dégâts de saignement passe de 15 à 10 ou de 10 à casinoTest nu, DD 5 si vous avez reçu une assistance particulièrement appropriée."
                ]
            },
            {
                "name"       : "Peau écailleuse",
                "level"      : "1",
                "traits"     : [
                    "Sang-dragon"
                ],
                "required"   : [],
                "description": [
                    "Vous êtes né avec une couche d'écailles sur votre corps entier qui ressemble à celui de votre géniteur draconique. Lorsque vous ne portez pas d'armure, les écailles vous donnent un bonus d'objet de +1 à la CA avec un Maximum de dextérité de +3. Le bonus d'objet passe à +2 au niveau 5. Le bonus d'objet à la CA de ces écailles est cumulable avec les runes de puissance d'armure de vos vêtements d'explorateur, le sort auto_awesomeArmure mystique ou des workBandes de force .",
                    "Spécial Vous pouvez choisir ce don seulement au niveau 1 et vous ne pouvez pas utiliser le réapprentissage pour perdre ou gagner ce don."
                ]
            },
            {
                "name"       : "Perception de la vie",
                "level"      : "5",
                "traits"     : [
                    "Divin",
                    "Crépusculaire"
                ],
                "required"   : [],
                "description": [
                    "Comme vos ancêtres psychopompes, vous possédez une capacité limitée pour sentir la force vitale. Vous obtenez Perception de la vie comme un sens imprécis avec une portée de 3 mètres. Cela vous permet de sentir la force vitale des créatures vivantes ou mort-vivantes. Ce sens permet de distinguer l'énergie vitale qui anime les créatures vivantes de l'énergie de vide qui anime les créatures mortes-vivantes, de la même façon que la vue distingue les couleurs."
                ]
            },
            {
                "name"       : "Perception des alliés",
                "level"      : "5",
                "traits"     : [
                    "Humain"
                ],
                "required"   : [],
                "description": [
                    "Comme nombre d'humains élevés dans des communautés soudées, vous avez toujours été étroitement accoutumé à la présence des autres. Les alliés consentants dont vous êtes conscient dans les 18 m qui devraient autrement être sentiment_very_dissatisfiedNon détectés par vos soins, vous sont à la place simplement sentiment_very_dissatisfiedCachés . Le test nu pour que vous puissiez cibler les alliés le souhaitant dans les 18 m est qui vous sont cachés est de casinoTest nu, DD 5 au lieu de 11."
                ]
            },
            {
                "name"       : "Perception des illusions",
                "level"      : "1",
                "traits"     : [
                    "Gnome"
                ],
                "required"   : [],
                "description": [
                    "Vos ancêtres passaient leurs journées enveloppés et bercés par des illusions de sorte que percevoir la magie de l'illusion est pour vous une seconde nature. Vous obtenez un bonus de circonstances de +1 à vos tests de Perception et à vos jets de Volonté contre les illusions.",
                    "Quand vous vous approchez à 3 mètres d'une illusion qui peut être percée, le MJ fait un test secret afin de déterminer si vous la percez, même si vous n'avez accompli aucune action pour Interagir avec cette illusion."
                ]
            },
            {
                "name"       : "Persévérance obstinée",
                "level"      : "13",
                "traits"     : [
                    "Humain"
                ],
                "required"   : [],
                "description": [
                    "L'être humain est réputé pour sa capacité à persévérer dans les épreuves les plus éprouvantes, que d'autres seraient prêts à abandonner. Lorsque vous devriez devenir sentiment_very_dissatisfiedFatigué , faites un casinoTest nu, DD 17 . En cas de succès, vous n'êtes pas fatigué.",
                    "Si l'état Fatigué est liée à une cause sous-jacente à laquelle vous ne remédiez pas, tel qu'un manque de repos, vous devez refaire le test à un intervalle déterminé par le MJ jusqu'à ce que vous obteniez un échec au test nu ou que vous remédiez à la cause sous-jacente."
                ]
            },
            {
                "name"       : "Perspicacité surnaturelle",
                "level"      : "9",
                "traits"     : [
                    "Elfe"
                ],
                "required"   : [
                    "au moins un sort inné obtenu d'un don ancestral elfique"
                ],
                "description": [
                    "La magie arcanique que vous possédez grandit en pouvoir et en complexité. Choisissez un sort courant de rang 2 de la même tradition que celle d'un sort inné que vous avez précédemment obtenu par le biais d'un autre don ancestral elfique (de la liste arcanique si vous avez Magie surnaturelle, par exemple). Vous pouvez Lancer ce sort comme un sort inné une fois par jour, en utilisant la même tradition que celle de la liste dont vous avez tiré le sort choisi.",
                    "Votre magie est adaptable. En passant 1 jour d'intermède, vous pouvez changer le sort pour choisir un autre sort courant différent de rang 2 de la même tradition."
                ]
            },
            {
                "name"       : "Physiologie nécromantique",
                "level"      : "5",
                "traits"     : [
                    "Dhampir"
                ],
                "required"   : [],
                "description": [
                    "Votre physiologie inhabituelle s'est développée de manière à rendre plus difficile pour des parasites et d'autres infestations de vous prendre pour cible. Vous obtenez un bonus de circonstances de +2 aux jets de sauvegarde contre les maladies. Si vous obtenez un succès sur un jet de sauvegarde contre une maladie, il devient un succès critique. Si vous avez une capacité différente qui aurait amélioré le résultat du jet de sauvegarde de la même manière (tel que la capacité de classe des guerriers Endurci au combat ), si vous obtenez un échec critique sur le jet de sauvegarde, alors il devient un échec."
                ]
            },
            {
                "name"       : "Pie voleuse 2",
                "level"      : "5",
                "traits"     : [
                    "Tengu"
                ],
                "required"   : [],
                "description": [
                    "Vous vous déplacez rapidement puis fauchez un objet brillant qui a attiré votre attention. Marchez rapidement deux fois. Vous pouvez Interagir pour ramasser un objet non tenu à n'importe quel moment au cours de votre déplacement."
                ]
            },
            {
                "name"       : "Pied assuré",
                "level"      : "1",
                "traits"     : [
                    "Halfelin"
                ],
                "required"   : [],
                "description": [
                    "Qu'il s'agisse de conserver l'équilibre ou d'escalade, vos pieds montrent aisément leur utilité. Si vous obtenez un succès sur un test d'Acrobaties pour sports_martial_artsGarder l'équilibre ou sur un test d'Athlétisme pour sports_martial_artsEscalader , il devient un succès critique. Vous n'êtes pas sentiment_very_dissatisfiedPris au dépourvu quand vous tentez de Garder l'équilibre ou d'Escalader."
                ]
            },
            {
                "name"       : "Pièges artisanaux vicieux",
                "level"      : "13",
                "traits"     : [
                    "Kobold"
                ],
                "required"   : [
                    "expert en Artisanat, Fabrication de pièges artisanaux"
                ],
                "description": [
                    "Vous infligez 1d6 dégâts de précision supplémentaires avec les pièges artisanaux que vous fabriquez qui causent des dégâts. Cela passe à 2d6 dégâts de précision supplémentaires si vous êtes légendaire en Artisanat."
                ]
            },
            {
                "name"       : "Planeur tripkee 1",
                "level"      : "5",
                "traits"     : [
                    "Tripkee"
                ],
                "required"   : [
                    "Héritage tripkee à palmes"
                ],
                "description": [
                    "Conditions Vous devez disposer d'au moins une main libre.",
                    "Vous pouvez utiliser vos pieds palmés pour guider votre chute. Vous planez lentement vers le sol, de 1,50 mètre vers le bas (3 mètres si vous ne disposez pas de vos deux mains libres) et jusqu'à 7,50 mètres en avant à travers les airs. Du moment que vous dépensez minimum une action pour planer et que vous n'avez pas encore atteint le sol, vous restez en l'air jusqu'à la fin de votre tour."
                ]
            },
            {
                "name"       : "Poings de fer",
                "level"      : "1",
                "traits"     : [
                    "Orque"
                ],
                "required"   : [],
                "description": [
                    "Vos poings ont été forgés par la bataille, votre peau naturellement robuste et vos os denses ont été endurcis par le conflit. Votre attaque à mains nues de poings perd le trait non-létal et obtient le trait d'arme Pousser."
                ]
            },
            {
                "name"       : "Porteur de loi",
                "level"      : "1",
                "traits"     : [
                    "Lignée",
                    "Néphilim"
                ],
                "required"   : [],
                "description": [
                    "Votre lignée remonte aux archons, gardiens des sept niveaux de la montagne du Paradis et promoteurs de la loi et de la vertu parmi les mortels. Vous obtenez un bonus de circonstances de +1 aux jets de sauvegarde contre les effets d'émotion et si vous obtenez un succès sur un jet de sauvegarde contre un effet d'émotion, il devient un succès critique."
                ]
            },
            {
                "name"       : "Porteur de marque",
                "level"      : "1",
                "traits"     : [
                    "Orque"
                ],
                "required"   : [],
                "description": [
                    "Vous portez des cicatrices ou des tatouages enrichis par la marque des exploits de votre communauté. Lorsque vous sélectionnez ce don, choisissez l'une des options de la table ci-dessous. Vous êtes qualifié dans la compétence listée et bénéficiez d'un bonus de statut de +1 aux jets de sauvegarde contre les sorts de la tradition listée. Vous obtenez une grande marque ou un tatouage de la forme de l'emblème choisi ou d'un concept similaire (par exemple, le Soleil ardent peut être une torche, un soleil, un volcan ou un autre symbole de feu, tandis que la Main vide peut être un poing ou une griffe)."
                ]
            },
            {
                "name"       : "Poseur de pièges artisanaux",
                "level"      : "1",
                "traits"     : [
                    "Kobold"
                ],
                "required"   : [
                    "qualifié en Artisanat"
                ],
                "description": [
                    "Vous êtes adepte de l'art ancestral kobold honoré depuis des lustres de fabrication des pièges. Vous êtes qualifié en Artisanat. Si vous devriez l'être par un autre biais, vous devenez qualifié en une autre compétence de votre choix à la place. Vous avez accès à tous les pièges peu courants des kobolds. Vous obtenez le don military_techFabrication de pièges artisanaux , mais pour les formules obtenues par ce don, vous pouvez aussi choisir parmi les pièges artisanaux peu courants des kobolds en plus des pièges artisanaux courants."
                ]
            },
            {
                "name"       : "Précipitation gobeline r",
                "level"      : "1",
                "traits"     : [
                    "Gobelin"
                ],
                "required"   : [],
                "description": [
                    "Déclencheur Un allié termine une action de déplacement sur une case adjacente à la vôtre.",
                    "Vous profitez du déplacement de votre allié pour ajuster votre position. Vous sports_martial_artsFaites un pas ."
                ]
            },
            {
                "name"       : "Précipitation hâtive",
                "level"      : "9",
                "traits"     : [
                    "Gobelin"
                ],
                "required"   : [
                    "Précipitation gobeline"
                ],
                "description": [
                    "Quand vous vous trouvez aux côtés de vos alliés, vous pouvez vous précipiter plus loin et plus vite.",
                    "Quand vous utilisez Précipitation gobeline, vous pouvez Marcher rapidement jusqu'à la moitié de votre Vitesse au lieu de Faire un pas."
                ]
            },
            {
                "name"       : "Premier à frapper, premier à tomber",
                "level"      : "17",
                "traits"     : [
                    "Kholo"
                ],
                "required"   : [],
                "description": [
                    "Chaque fois que vous réussissez à Frapper une créature qui n'a pas agi au premier round de combat, cette créature est sentiment_very_dissatisfiedPrise au dépourvu jusqu'à la fin de votre prochain tour. Si cette créature est réduite à 0 Point de vie avant la fin de votre prochain tour, vous et tous vos alliés dans un rayon de 9 mètres de la créature êtes sentiment_very_dissatisfiedAccéléré jusqu'à la fin de votre prochain tour. Vous ne pouvez utiliser l'action supplémentaire que pour Faire un pas, Marcher rapidement ou Frapper."
                ]
            },
            {
                "name"       : "Présence draconique",
                "level"      : "1",
                "traits"     : [
                    "Kobold"
                ],
                "required"   : [
                    "héritage de kobold à écailles de dragon"
                ],
                "description": [
                    "En tant que membre de la gent draconique, vous faites montre d'une confiance imperturbable (qui s'effondre de manière catastrophique contre les ennemis les plus mortels). Lorsque vous obtenez un succès sur un jet de sauvegarde contre un effet de terreur, il devient un succès critique. Lorsque vous obtenez un échec contre un effet de terreur, il devient un échec critique.",
                    "De plus, lorsque vous tentez de sports_martial_artsDémoraliser un ennemi de votre niveau ou inférieur, vous obtenez un bonus de circonstances de +1 au test d'Intimidation."
                ]
            },
            {
                "name"       : "Présence héroïque 1",
                "level"      : "17",
                "traits"     : [
                    "Émotion",
                    "Humain",
                    "Mental"
                ],
                "required"   : [],
                "description": [
                    "Fréquence Une fois par jour",
                    "Le sang des héros court dans vos veines et vous inspirez vos alliés à puiser en profondeur et y trouver un nouveau niveau de résolution. Vous accordez à 10 créatures consentantes au maximum situées dans les 9 mètres les effets d'un sort de auto_awesomeConviction zélée au rang 6, bien que l'effet se termine automatiquement sur une cible à laquelle vous donnez un ordre qu'elle trouverait normalement répugnant. Cette action possède les traits audible ou visuel, en fonction de la manière dont vous inspirez vos alliés."
                ]
            },
            {
                "name"       : "Présence majestueuse 1",
                "level"      : "13",
                "traits"     : [
                    "Sang-dragon",
                    "Émotion",
                    "Terreur",
                    "Mental",
                    "Visuel"
                ],
                "required"   : [],
                "description": [
                    "En adoptant une posture impressionnante, toute la force de votre personnalité frappe les êtres inférieurs. Chaque créature dans une crop_freeémanation de 6 mètres doit tenter un jet de casinoVolonté contre le plus élevé entre votre DD de classe ou DD de sort. Quel que soit le résultat du jet de sauvegarde, la créature est temporairement immunisée contre votre Présence majestueuse pendant 24 heures.",
                    "Succès critique La créature n'est pas affectée.",
                    "Succès La créature est sentiment_very_dissatisfiedEffrayée 1 .",
                    "Échec La créature est sentiment_very_dissatisfiedEffrayée 2 .",
                    "Échec critique La créature est sentiment_very_dissatisfiedEffrayée 4 ."
                ]
            },
            {
                "name"       : "Prise du gecko",
                "level"      : "5",
                "traits"     : [
                    "Homme-lézard"
                ],
                "required"   : [
                    "Homme-lézard écaille de falaise"
                ],
                "description": [
                    "Vous vous agrippez aux murs avec une poigne surnaturelle. Vous obtenez le don military_techCombattant grimpeur comme don bonus, et si vous obtenez un succès sur un jet d'Athlétisme pour grimper, il devient un succès critique.",
                    "Spécial Si vous avez l'héritage des hommes-lézards écaille de falaise, vous obtenez une Vitesse d'escalade de 4,50 mètres."
                ]
            },
            {
                "name"       : "Prospérer et ruiner",
                "level"      : "17",
                "traits"     : [
                    "Léchi"
                ],
                "required"   : [],
                "description": [
                    "Vous faites appel à l'essence vitale de votre esprit pour redonner de la vie à vos alliés et invoquez des lianes pour piéger et frapper vos ennemis. Vous pouvez lancer auto_awesomeChamp de vie et auto_awesomeEntraves végétales comme un sort primordial inné de rang 6 une fois par jour chacun."
                ]
            },
            {
                "name"       : "Protection contre la corruption",
                "level"      : "5",
                "traits"     : [
                    "Crépusculaire"
                ],
                "required"   : [],
                "description": [
                    "Votre âme est protégée contre le pouvoir des morts-vivants et de la pestilence, ainsi que des anciens psychopompes mauvais connus sous le nom de sahkils.",
                    "Vous obtenez un bonus de circonstances de +1 aux jets de sauvegarde contre les effets de mort, la maladie et tous les effets des morts-vivants ou des sahkils. Ce bonus passe à +2 contre un effet de mort ou une maladie provenant d'un mort-vivant ou d'un sahkil."
                ]
            },
            {
                "name"       : "Puissance athlétique",
                "level"      : "5",
                "traits"     : [
                    "Orque"
                ],
                "required"   : [],
                "description": [
                    "Survivre en terrain hostile vous a donné un grand talent pour vous déplacer. Lorsque vous obtenez un succès sur un test d'Athlétisme pour sports_martial_artsEscalader ou sports_martial_artsNager , il devient un succès critique."
                ]
            },
            {
                "name"       : "Puissance tellurique",
                "level"      : "13",
                "traits"     : [
                    "Nain"
                ],
                "required"   : [],
                "description": [
                    "Vous canalisez la force de la terre sous vos pieds pour rouer de coups vos ennemis.",
                    "Lorsque vous faites une Frappe au corps-à-corps contre une cible qui se tient sur la même surface en terre ou en pierre que vous, vous obtenez un bonus de circonstances aux dégâts égal au nombre de dés de dégâts de l'arme."
                ]
            },
            {
                "name"       : "Queue habile (Néphilim)",
                "level"      : "5",
                "traits"     : [
                    "Néphilim"
                ],
                "required"   : [],
                "description": [
                    "Vous avez toujours eu une queue, mais avec la pratique, vous avez appris à l'utiliser pour autre chose de plus que de signaler votre humeur. Vous pouvez accomplir des actions Interagir simples avec comme ouvrir une porte non fermée à clé. Votre queue ne peut accomplir des actions qui nécessitent des doigts ou une dextérité manuelle significative, incluant toute action qui nécessiterait un test pour être accomplie et vous ne pouvez pas l'utiliser pour tenir des objets."
                ]
            },
            {
                "name"       : "Queue souple",
                "level"      : "5",
                "traits"     : [
                    "Homme-lézard"
                ],
                "required"   : [],
                "description": [
                    "Vous pouvez accomplir les actions de simples Interactions avec votre queue, tel qu'ouvrir une porte déverrouillée.",
                    "Votre queue ne peut accomplir d'actions qui nécessitent des doigts ou une dextérité manuelle significative, incluant toute action qui devrait nécessiter un test pour l'accomplir et vous ne pouvez l'utiliser pour tenir des objets."
                ]
            },
            {
                "name"       : "Racines ancrées",
                "level"      : "5",
                "traits"     : [
                    "Léchi"
                ],
                "required"   : [],
                "description": [
                    "De petites racines sortent de vos pieds, vous rendant plus stable lorsque vous vous déplacez. Vous obtenez le don de compétence military_techÉquilibre stable , même si vous n'êtes pas qualifié en Acrobaties et vous pouvez utiliser l'action sports_martial_artsS'ancrer ."
                ]
            },
            {
                "name"       : "Rage ancestrale",
                "level"      : "13",
                "traits"     : [
                    "Kholo"
                ],
                "required"   : [],
                "description": [
                    "Vous vous transformez en une énorme hyène d'un autre monde. Vous pouvez lancer auto_awesomeForme Animale (forme canine uniquement) une fois par jour comme un sort inné occulte au rang 5."
                ]
            },
            {
                "name"       : "Rajeunissement cantorien 2",
                "level"      : "9",
                "traits"     : [
                    "Guérison",
                    "Hobgobelin",
                    "Vitalité"
                ],
                "required"   : [],
                "description": [
                    "Fréquence Une fois par jour",
                    "L'énergie revitalisante qui coule dans vos veines vous revitalise. Vous récupérez casinoternary(gte(@actor.level,15),6,4)d6 soins et obtenez 10 Points de vie temporaires qui durent 1 minute. Au niveau 15, vous récupérez à la place 6d6 Points de vie et obtenez 15 Points de vie temporaires."
                ]
            },
            {
                "name"       : "Rajeunissement solaire",
                "level"      : "9",
                "traits"     : [
                    "Ghoran",
                    "Léchi"
                ],
                "required"   : [],
                "description": [
                    "Ghoran La chaleur et la lumière du soleil vous donnent la vie. Si vous vous reposez à l'extérieur pendant 10 minutes au cours de la journée, vous regagnez un nombre de Points de vie égal à votre casinomodificateur de Constitution multiplié par la moitié de votre niveau . Vous obtenez cet avantage en plus des soins apportés par sports_martial_artsSoigner les blessures .",
                    "Léchi Si vous vous reposez en extérieur pendant 10 minutes durant la journée, vous regagnez des Points de vie égaux à votre casinomodificateur de Constitution multiplié par la moitié de votre niveau . Vous obtenez ce bénéfice en plus des soins apportés par sports_martial_artsSoigner les blessures . Les léchis issus de plantes dont l'alimentation ne dépend pas de la photosynthèse nécessitent un environnement adapté. Par exemple les léchis fongiques ont besoin d'obscurité, d'environnements humides et d'une pile de matière organique en décomposition."
                ]
            },
            {
                "name"       : "Rangement rapide (Homme-rat) f",
                "level"      : "5",
                "traits"     : [
                    "Homme-rat"
                ],
                "required"   : [
                    "Abajoues"
                ],
                "description": [
                    "Fréquence Une fois par round",
                    "Vous Interagissez pour ranger un objet tenu dans vos abajoues (pourvu qu'il rentre)."
                ]
            },
            {
                "name"       : "Rat de laboratoire",
                "level"      : "5",
                "traits"     : [
                    "Homme-rat"
                ],
                "required"   : [],
                "description": [
                    "Vous avez passé plus que votre part de temps dans un laboratoire d'alchimie. Vous avez été exposé à une large diversité de poisons et d'élixirs alchimiques, et de substances nocives, vous permettant une tolérance accrue à leurs effets. Vous obtenez un bonus de circonstances de +1 aux jets de sauvegarde contre le poison et les maladies. Si vous obtenez un succès à votre jet de sauvegarde contre un poison ou une maladie, vous considérez à la place qu'il s'agit d'un succès critique."
                ]
            },
            {
                "name"       : "Rat empaqueteur",
                "level"      : "1",
                "traits"     : [
                    "Homme-rat"
                ],
                "required"   : [],
                "description": [
                    "Vous avez appris comment placer de vastes quantités d'objets dans des espaces réduits. Vous pouvez fourrer 50% d'Encombrement supplémentaire dans des contenants ou des véhicules. Par exemple, vous pouvez placer 6 Encombrements dans un sac à dos ou 12 Encombrement dans un coffre. Cela n'altère en rien l'Encombrement des objets ni ne change combien vous pouvez en mettre dans un contenant magique ou dans un espace extradimensionnel, comme un Sac spacieux."
                ]
            },
            {
                "name"       : "Rebondir f",
                "level"      : "13",
                "traits"     : [
                    "Humain"
                ],
                "required"   : [],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Vous perdez l'état sentiment_very_dissatisfiedMourant .",
                    "Vous récupérez des expériences de mort imminente grâce à une résilience époustouflante. N'augmentez pas la valeur de votre état sentiment_very_dissatisfiedBlessé liée à la perte de l'état Mourant."
                ]
            },
            {
                "name"       : "Reconnaître une embuscade f",
                "level"      : "5",
                "traits"     : [
                    "Hobgobelin"
                ],
                "required"   : [],
                "description": [
                    "Déclencheur Vous déterminez l'initiative.",
                    "Votre entraînement au combat vous a affûté pour être prêt pour une attaque à tout moment. Vous Interagissez pour dégainer une arme."
                ]
            },
            {
                "name"       : "Recroquevillé r",
                "level"      : "1",
                "traits"     : [
                    "Émotion",
                    "Kobold",
                    "Mental",
                    "Visuel"
                ],
                "required"   : [],
                "description": [
                    "Déclencheur Une créature dont vous êtes conscient obtient un coup critique sur une Frappe contre vous et devrait vous infliger des dégâts.",
                    "En adoptant une posture qui fait pitié, vous obligez votre ennemi à retenir une attaque mortelle. La créature qui vous attaque subit une pénalité de circonstances aux dégâts de la Frappe déclencheuse égale à votre niveau + 2. Cette pénalité s'applique après avoir doublé les dégâts du coup critique. L'attaquant est alors immunisé à votre Recroquevillé pendant 24 heures."
                ]
            },
            {
                "name"       : "Récupération cantorienne r",
                "level"      : "17",
                "traits"     : [
                    "Guérison",
                    "Hobgobelin",
                    "Vitalité"
                ],
                "required"   : [],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Une créature vivante dans les 18 mètres devrait mourir.",
                    "L'énergie qui coule dans votre sang peut préserver une vie dans les temps les plus difficiles. Vous empêchez la créature de mourir et lui restaurez casino6d8 + votre modificateur de Constitution Points de vie. Vous ne pouvez pas utiliser la Récupération cantorienne si l'effet déclencheur est un effet de mort ou un effet qui ne laisse aucun reste, tel que la auto_awesomeDésintégration ."
                ]
            },
            {
                "name"       : "Rejeton infernal",
                "level"      : "1",
                "traits"     : [
                    "Lignée",
                    "Néphilim"
                ],
                "required"   : [],
                "description": [
                    "Votre lignage descend des diables, des comploteurs des Enfers. Vous êtes aussi compétent pour remarquer des mensonges et trouver des tournures alambiquées que vous l'êtes pour les construire. Vous êtes qualifié en Duperie et en Connaissance des Lois. Si vous étiez déjà qualifié en Duperie (par votre historique ou votre classe, par exemple), vous devenez qualifié dans une compétence de votre choix. Vous obtenez également le don de compétence military_techOse me mentir ."
                ]
            },
            {
                "name"       : "Rejeton sombre",
                "level"      : "1",
                "traits"     : [
                    "Lignée",
                    "Néphilim"
                ],
                "required"   : [],
                "description": [
                    "Votre lignée remonte à un daemon, une des manifestations des horribles formes de la mort qui dévorent les âmes au sein du royaume dément d'Abaddon. Il en résulte que vous vous cramponnez avec ténacité aux derniers lambeaux de votre force vitale. Vous obtenez le don military_techDur à cuir ."
                ]
            },
            {
                "name"       : "Renforcement nain",
                "level"      : "5",
                "traits"     : [
                    "Nain"
                ],
                "required"   : [
                    "expert en Artisanat"
                ],
                "description": [
                    "Vous pouvez utiliser vos connaissances en ingénierie et en métallurgie pour renforcer temporairement des objets épais ou des structures. En passant une heure à travailler sur un objet, vous pouvez lui donner un bonus de circonstances de +1 à sa Solidité pendant 24 heures. Si vous êtes maître en Artisanat, le bonus est de +2 et si vous êtes légendaire, le bonus est de +3. Vous pouvez renforcer une partie d'une structure, bien qu'une heure vous permette habituellement de ne renforcer qu'une porte, quelques fenêtres ou une autre section qui rentre dans un cube de 3 mètres de côté."
                ]
            },
            {
                "name"       : "Renfort cantorien",
                "level"      : "1",
                "traits"     : [
                    "Hobgobelin"
                ],
                "required"   : [],
                "description": [
                    "L'énergie vitale qui a aidé à créer les premiers hobgobelins est particulièrement puissante chez vous, vous protégeant des maladies alentour. Si vous obtenez un succès sur un jet de sauvegarde contre une maladie ou un poison, il devient un succès critique. Si vous avez une capacité différente qui aurait amélioré le résultat du jet de sauvegarde de la même manière (tel que la capacité de guerrier Endurci au combat ), si vous obtenez un échec critique sur le jet de sauvegarde, il devient un échec."
                ]
            },
            {
                "name"       : "Rentrer à la maison",
                "level"      : "17",
                "traits"     : [
                    "Peu courant",
                    "Gnome"
                ],
                "required"   : [],
                "description": [
                    "Fréquence deux fois par semaine",
                    "La relation entre vous et le Premier monde résonne dans votre corps plus fort qu'il ne le fait pour la plupart des gnomes, vous permettant de franchir la frontière entre l'Univers et le Premier Monde. Vous obtenez auto_awesomeTéléportation interplanaire comme un sort inné primordial. Vous pouvez le lancer deux fois par semaine. Il ne peut être utilisé que pour aller dans le Premier Monde et pour revenir dans l'Univers. Compte tenu de la résonance naturelle de votre corps, vous pouvez agir comme un locus pour le sort et vous n'avez pas besoin d'un diapason."
                ]
            },
            {
                "name"       : "Repousse",
                "level"      : "17",
                "traits"     : [
                    "Léchi"
                ],
                "required"   : [],
                "description": [
                    "Votre contrôle sur votre essence vitale vous permet ou permet à un allié de récupérer de graves blessures. Vous pouvez lancer auto_awesomeRégénération au rang 7 comme un sort inné primordial une fois par jour."
                ]
            },
            {
                "name"       : "Réprimande douloureuse",
                "level"      : "5",
                "traits"     : [
                    "Hobgobelin"
                ],
                "required"   : [],
                "description": [
                    "Lorsque vous terrorisez vos ennemis, vous leur causez une détresse morale douloureuse. Lorsque vous réussissez à sports_martial_artsDémoraliser un ennemi, ce dernier subit casino1d4 dégâts mentaux au début de chacun de ses tours tant qu'il reste sentiment_very_dissatisfiedEffrayé et continue à engager le combat avec vous. Cet effet se termine si la créature perd l'état Effrayé, si elle se trouve à plus de 9 mètres de vous ou qu'une minute ne s'écoule, selon ce qui se produit en premier. Si vous êtes maître en Intimidation, les dégâts passent à 2d4 et si vous êtes légendaire, les dégâts passent à 3d4."
                ]
            },
            {
                "name"       : "Résistance à l'affliction",
                "level"      : "5",
                "traits"     : [
                    "Kholo"
                ],
                "required"   : [],
                "description": [
                    "Votre régime vous a renforcé contre les maladies et les poisons. Vous obtenez un bonus de circonstances de +1 aux jets de sauvegarde contre les maladies et les poisons. Si vous obtenez un succès sur un jet de sauvegarde contre une maladie ou un poison, il devient un succès critique. Si vous disposez d'une capacité différente qui devrait améliorer le jet de sauvegarde de cette manière (comme la capacité de classe Endurci par le combat ), si vous obtenez un échec critique sur le jet de sauvegarde il devient un échec."
                ]
            },
            {
                "name"       : "Résistance draconique",
                "level"      : "1",
                "traits"     : [
                    "Sang-dragon"
                ],
                "required"   : [],
                "description": [
                    "La magie draconique vous protège contre ce qui blesse. Vous obtenez une résistance égale à la moitié de votre niveau (minimum 1) au type de dégâts associé à votre modèle draconique. Cette résistance est doublée contre les dégâts de ce type infligés par les dragons.",
                    "Si votre modèle draconique est associé aux dégâts contondants, perforants ou tranchants, au lieu d'obtenir une résistance contre ce type, vous pouvez choisir acide, électricité, feu, froid ou son."
                ]
            },
            {
                "name"       : "Résistance du néphilim",
                "level"      : "5",
                "traits"     : [
                    "Néphilim"
                ],
                "required"   : [],
                "description": [
                    "Vous résistez aux énergies comme c'est le cas de vos prédécesseurs extraplanaires. Choisissez un des types de dégâts d'énergie suivants : acide, électricité, feu, froid ou son. Vous obtenez une résistance 5 contre ce type de dégâts.",
                    "Le type de dégâts correspond typiquement à l'entité extraplanaire associée à votre lignée. Par exemple, un personnage de type military_techAngélique pourrait choisir une résistance contre le froid alors qu'un military_techRejeton infernal pourrait choisir une résistance contre le feu."
                ]
            },
            {
                "name"       : "Résistance occulte",
                "level"      : "9",
                "traits"     : [
                    "Changelin"
                ],
                "required"   : [
                    "expert en Occultisme"
                ],
                "description": [
                    "Votre étude des pratiques occultes vous a montré comment mieux vous défendre contre elles.",
                    "Vous obtenez un bonus de circonstances de +1 aux jets de sauvegarde contre les effets occultes."
                ]
            },
            {
                "name"       : "Résistances traditionnelles",
                "level"      : "5",
                "traits"     : [
                    "Sang-dragon"
                ],
                "required"   : [
                    "Sang-dragon arcanique, Sang-dragon divin, Sang-dragon occulte ou Sang-dragon primordial"
                ],
                "description": [
                    "Du fait de votre sang, vous possédez une certaine résistance contre certains types de magie. Vous obtenez un bonus de statut de +1 à la CA et aux jets de sauvegarde contre les sorts et les autres effets magiques de la même tradition que votre lignage. Ce bonus passe à +2 contre les effets de sommeil et de paralysie."
                ]
            },
            {
                "name"       : "Résister à la ruine",
                "level"      : "13",
                "traits"     : [
                    "Crépusculaire"
                ],
                "required"   : [],
                "description": [
                    "Votre héritage crépusculaire vous permet d'étendre la protection contre l'énergie du vide. Vous obtenez une résistance 5 contre le vide et, une fois par jour, vous pouvez Lancer auto_awesomeFalse Vitality au rang 5 comme un sort divin inné."
                ]
            },
            {
                "name"       : "Ricanement distant",
                "level"      : "5",
                "traits"     : [
                    "Kholo"
                ],
                "required"   : [
                    "Héritage kholo sorcier"
                ],
                "description": [
                    "Il faut être très courageux pour pénétrer dans la forêt hantée par le rire où vous habitez. Vous pouvez lancer auto_awesomeVentriloquie une fois par jour comme un sort inné occulte au rang 1."
                ]
            },
            {
                "name"       : "Rire légendaire",
                "level"      : "17",
                "traits"     : [
                    "Kholo"
                ],
                "required"   : [],
                "description": [
                    "Votre rire fit écho dans les esprits de vos ennemis. Vous pouvez sports_martial_artsDémoraliser les créatures jusqu'à 18 mètres de distance. De plus, chaque fois que vous réussissez à Démoraliser une créature, elle subit casino3d8 dégâts mentaux (ou casino6d8 dégâts mentaux sur un succès critique)."
                ]
            },
            {
                "name"       : "Rituel de réversibilité",
                "level"      : "5",
                "traits"     : [
                    "Léchi",
                    "Métamorphose",
                    "Primordial"
                ],
                "required"   : [],
                "description": [
                    "Vous pouvez temporairement revenir à une forme moins voyante sans amoindrir vos sens. Vous prenez la forme d'un spécimen ordinaire du type de plante ou de champignon qui vous ressemble le plus, retrouvant l'apparence de votre corps juste avant que votre esprit ne se soit joint à lui. Les autres effets sont ceux du sort auto_awesomeUni avec les plantes , sauf que votre taille reste Petite."
                ]
            },
            {
                "name"       : "Robustesse de la montagne",
                "level"      : "9",
                "traits"     : [
                    "Nain"
                ],
                "required"   : [],
                "description": [
                    "Votre robustesse vous permet d'endurer plus de dégâts avant de vous avouer vaincu. Ajoutez votre niveau à votre maximum de Points de vie. Lorsque vous avez l'état sentiment_very_dissatisfiedMourant 1 , le DD de vos tests de récupération est de 9 + l'intensité de votre état Mourant (au lieu de 10 + la valeur de l'état Mourant).",
                    "Si vous possédez aussi le don military_techRobustesse , les Points de vie obtenus grâce à ces dons sont cumulatifs et le DD de vos tests de récupération est égal à 6 + l'intensité de votre état Mourant."
                ]
            },
            {
                "name"       : "Rôdeur prudent",
                "level"      : "9",
                "traits"     : [
                    "Félide"
                ],
                "required"   : [],
                "description": [
                    "Vous pouvez utiliser l'activité d'exploration sports_martial_artsReconnaissance en même temps que l'activité d'exploration sports_martial_artsÉchapper aux regards ."
                ]
            },
            {
                "name"       : "Rotule 1",
                "level"      : "5",
                "traits"     : [
                    "Gobelin"
                ],
                "required"   : [],
                "description": [
                    "Vous délivrez un coup punitif dans le genou, le tibia ou une autre partie de l'anatomie vulnérable à votre portée d'un ennemi. Faites une Frappe avec une arme au corps-à-corps ou une attaque à mains nues au corps-à-corps. Cette attaque n'inflige pas de dégâts. Si elle touche, la cible subit une pénalité de statut de -3 mètres à sa Vitesse ou de -4,50 mètres en cas de coup critique pendant 1 round. Cette pénalité s'applique seulement si la cible possède une Vitesse au sol qui dépend de ses jambes ou d'autres appendices qui lui servent à se déplacer au sol et qui peuvent être ciblés. Comme avec toutes les autres pénalités à la Vitesse, cela ne peut réduire la Vitesse de la créature en dessous de 1,50 mètre.",
                    "flareEffet : Rotule"
                ]
            },
            {
                "name"       : "Roulade de l'homme-rat 2",
                "level"      : "5",
                "traits"     : [
                    "Déplacement",
                    "Homme-rat"
                ],
                "required"   : [],
                "description": [
                    "Votre vous mettez en boule et vous déplacez jusqu'à quatre fois votre Vitesse en ligne droite dans le sens d'une pente. Si vous atteignez le bas de la pente ou touchez un obstacle durant le premier tour du déplacement, vous arrêtez de rouler sans vous faire mal. Autrement, vous continuez automatiquement à rouler à cette Vitesse durant les tours suivants jusqu'à ce que vous atteignez le bas de la pente ou qu'un obstacle mette fin à ce déplacement (ce qui peut se produire au milieu de votre tour). Vous êtes sentiment_very_dissatisfiedRalenti 2 à chaque tour après le premier qui vous a vu rouler et si vous touchez un obstacle lors d'un tour consécutif au premier, vous et l'obstacle subissez casino4d6 dégâts contondants et vous arrêtez de rouler."
                ]
            },
            {
                "name"       : "Roulade du rocher 2",
                "level"      : "5",
                "traits"     : [
                    "Nain"
                ],
                "required"   : [
                    "Arpenteur des roches"
                ],
                "description": [
                    "Votre carrure de nain vous permet de repousser vos adversaires alentour à la manière d'un puissant rocher fonçant à travers une caverne souterraine. Faites un pas dans la case d'un adversaire dont la taille est inférieure ou égale à la vôtre et l'ennemi doit se déplacer dans l'espace vide se trouvant directement derrière lui. L'adversaire peut tenter un jet de casinoVigueur contre votre DD d'Athlétisme afin de vous empêcher de Faire un pas. S'il tente ce jet de sauvegarde, il subit une quantité de casinodégâts contondants égale à votre niveau plus votre modificateur de Force, à moins qu'il n'obtienne un succès critique.",
                    "Si l'ennemi ne peut pas se déplacer dans un espace vide (s'il est entouré d'objets solides ou d'autres créatures, par exemple), votre Roulade du rocher n'a aucun effet."
                ]
            },
            {
                "name"       : "Sabots agiles",
                "level"      : "1",
                "traits"     : [
                    "Néphilim"
                ],
                "required"   : [],
                "description": [
                    "Vous avez des sabots, des chevilles ailées ou toute autre caractéristique morphologique qui vous permet d'augmenter votre Vitesse. Votre vitesse augmente de 1,50 mètre.",
                    "Spécial L'augmentation de Vitesse de ce don n'est pas cumulable avec une autre augmentation de Vitesse issue d'un autre don ancestral."
                ]
            },
            {
                "name"       : "Sagesse de grand-mère",
                "level"      : "9",
                "traits"     : [
                    "Kholo"
                ],
                "required"   : [],
                "description": [
                    "Vous transportez avec vous les os de vos ancêtres et vous pouvez leur demander conseil. Vous pouvez lancer auto_awesomeAugure deux fois par jour comme des sorts occultes innés au rang 2."
                ]
            },
            {
                "name"       : "Saignée de Crocs",
                "level"      : "9",
                "traits"     : [
                    "Dhampir"
                ],
                "required"   : [
                    "attaque à mains nues de crocs"
                ],
                "description": [
                    "Vous émulez les techniques de vos parents pour saigner une victime.",
                    "Vos Frappes de crocs infligent 1d4 dégâts de saignement supplémentaires sur un coup critique."
                ]
            },
            {
                "name"       : "Sang béni (Néphilim)",
                "level"      : "5",
                "traits"     : [
                    "Néphilim"
                ],
                "required"   : [],
                "description": [
                    "Votre sang fraîchement répandu est sanctifié avec des effets similaires à ceux de l' workEau bénite . Lorsqu'un fiélon, un mort-vivant ou une créature ayant une faiblesse contre les boissons saintes boit votre sang ou vous inflige des dégâts perforants ou tranchants avec des mâchoires, des crocs ou une attaque similaire, cette créature subit casino1d6 dégâts spirituels saints . Vous obtenez un bonus de circonstances de +4 aux tests d'Artisanat pour sports_martial_artsFabriquer de l'eau bénite en utilisant votre propre sang comme ingrédient."
                ]
            },
            {
                "name"       : "Sang de la main droite",
                "level"      : "5",
                "traits"     : [
                    "Kholo"
                ],
                "required"   : [],
                "description": [
                    "On dit que la chair du côté droit d'une hyène peut guérir les maladies, mais que celle du côté gauche est mortelle et toxique. Vous pouvez subir casino1 point de dégât tranchant pour nourrir quelqu'un du sang de votre côté droit et Prodiguer les premiers soins ou subir casino2d8 dégâts pour sports_martial_artsSoigner les maladies ou sports_martial_artsSoigner les blessures ; dans les deux cas, vous n'avez pas besoin de trousse du guérisseur et obtenez un bonus d'objet de +1 à votre test. Le sang provenant de votre côté gauche entraîne un échec critique automatique du test."
                ]
            },
            {
                "name"       : "Sang de la main gauche 1",
                "level"      : "5",
                "traits"     : [
                    "Kholo"
                ],
                "required"   : [],
                "description": [
                    "Fréquence Une fois par heure",
                    "On dit que la chair du côté droit d'une hyène peut guérir les maladies, mais que la chair du côté gauche est mortelle et empoisonnée. Vous vous infligez casino1 dégât tranchant pour empoisonner une arme que vous tenez. Si vous touchez avec l'arme et infligez des dégâts, la cible subit également casino1d4 dégâts de poison persistants . Le poison sur votre arme devient inerte après que vous ayez touché ou à la fin de votre prochain tour, selon ce qui se produit en premier.",
                    "flareEffet : Sang de la main gauche"
                ]
            },
            {
                "name"       : "Sang-dragon arcanique",
                "level"      : "1",
                "traits"     : [
                    "Sang-dragon",
                    "Lignée"
                ],
                "required"   : [],
                "description": [
                    "Vous descendez d'un dragon qui maîtrisait réellement des capacités magiques, tel qu'un dragon fortuné ou un dragon mirage. Comme tel, vous pouvez instinctivement appréhender les complexités de la magie. Vous êtes qualifié en Arcanes. Si vous devriez déjà être qualifié en Arcanes (par votre historique ou votre classe, par exemple), vous êtes qualifié à la place dans une compétence de votre choix. Vous obtenez le don de compétence military_techSens arcanique . Si vous choisissez un modèle draconique, vous devez choisir un dragon arcanique."
                ]
            },
            {
                "name"       : "Sang-dragon divin",
                "level"      : "1",
                "traits"     : [
                    "Sang-dragon",
                    "Lignée"
                ],
                "required"   : [],
                "description": [
                    "Vous pouvez retracer voter lignage jusqu'à un dragon avec des pouvoirs quasiment divins, tel qu'un dragon diabolique ou empyréen. Vous êtes béni d'une fraction de protection divine. Vous êtes qualifié en Religion. Si vous devriez déjà être automatiquement qualifié en Religion (par votre historique ou votre classe, par exemple), vous êtes qualifié à la place dans une compétence de votre choix. De plus, vous êtes doté de réactions rapides. Vous obtenez un bonus de circonstances de +1 aux jets d'initiative. Si vous choisissez un modèle draconique, vous devez choisir un dragon divin."
                ]
            },
            {
                "name"       : "Sang-dragon occulte",
                "level"      : "1",
                "traits"     : [
                    "Sang-dragon",
                    "Lignée"
                ],
                "required"   : [],
                "description": [
                    "Votre sang contient un minuscule fragment d'une puissance inhabituelle ou inexplicable d'un mystérieux dragon, tel qu'un dragon conspirateur ou dragon des présages. Vous êtes attiré par les parties les plus étranges du monde et pouvez généralement les remarquer au premier regard. Vous êtes qualifié en Occultisme. Si vous étiez déjà automatiquement qualifié en Occultisme (par votre historique ou votre classe, par exemple), vous êtes à la place qualifié en une compétence de votre choix. Vous obtenez le don de compétence military_techIdentification de bizarreries . Si vous choisissez un modèle draconique, vous devez choisir un dragon occulte."
                ]
            },
            {
                "name"       : "Sang-dragon primordial",
                "level"      : "1",
                "traits"     : [
                    "Sang-dragon",
                    "Lignée"
                ],
                "required"   : [],
                "description": [
                    "Un dragon ayant un lien profond avec le monde naturel, comme un dragon d'adamantium ou un dragon cornu se trouve quelque part sur votre arbre généalogique. Vous avez tendance à vous fier à votre instinct et pourriez jouer le rôle de protecteur de la nature. Vous êtes qualifié en Nature. Si vous devriez déjà être automatiquement qualifié en Nature (par votre historique ou votre classe, par exemple), vous êtes qualifié à la place dans une compétence de votre choix. Vous pouvez utiliser Nature pour Vous orienter et Subsister dans les étendues sauvages. Si vous choisissez un modèle draconique, vous devez choisir un dragon primordial."
                ]
            },
            {
                "name"       : "Santé vigoureuse",
                "level"      : "1",
                "traits"     : [
                    "Hobgobelin"
                ],
                "required"   : [],
                "description": [
                    "Vous pouvez résister à une perte de sang étonnamment bien. Lorsque vous devriez obtenir l'état sentiment_very_dissatisfiedDrainé , vous pouvez tenter un casinoTest nu, DD 17 . Sur un succès, vous n'obtenez pas l'état Drainé."
                ]
            },
            {
                "name"       : "Saut ricochant",
                "level"      : "9",
                "traits"     : [
                    "Tripkee"
                ],
                "required"   : [
                    "Saut de mur"
                ],
                "description": [
                    "Vous utilisez rapidement votre élan pour faire basculer et rebondir sur vos ennemis. Vous pouvez utiliser Saut de mur pour faire des sauts supplémentaires sur des créatures plus grandes que vous comme s'il s'agissait de murs. Une fois par tour, lorsque vous faites un saut supplémentaire pour rebondir sur une créature de cette manière, vous pouvez également tenter de la sports_martial_artsPousser ou de lui faire un sports_martial_artsCroc-en-jambe par une action gratuite."
                ]
            },
            {
                "name"       : "Sauteur bondissant",
                "level"      : "5",
                "traits"     : [
                    "Félide"
                ],
                "required"   : [
                    "expert en Athlétisme"
                ],
                "description": [
                    "Vos jambes puissantes vous permettent de faire des sauts aussi soudains que spectaculaires.",
                    "Vous pouvez sports_martial_artsBondir en utilisant 2 actions pour doubler la distance que vous pouvez franchir verticalement ou Sauter en utilisant 3 actions pour tripler la distance que vous pouvez franchir verticalement.",
                    "Vous n'échouez pas automatiquement lorsque vous effectuez un sports_martial_artsSaut en longueur dans une direction différente de celle de votre Marche rapide."
                ]
            },
            {
                "name"       : "Se glisser dans les pattes",
                "level"      : "13",
                "traits"     : [
                    "Homme-rat"
                ],
                "required"   : [
                    "Bondé"
                ],
                "description": [
                    "Tant que vous êtes de tailler Petite ou inférieure, vous pouvez terminer votre déplacement dans la même case qu'un allié quelle que soit sa taille. Seul un total de deux créatures peuvent partager la même case en utilisant cette capacité ou une autre similaire."
                ]
            },
            {
                "name"       : "Sergent instructeur expert",
                "level"      : "5",
                "traits"     : [
                    "Hobgobelin"
                ],
                "required"   : [],
                "description": [
                    "Lorsque vous êtes en exploration, lorsque vous dirigez et que vos alliés sont en train de sports_martial_artsSuivre l'expert , plutôt que d'accorder un bonus de circonstances de +2 à la compétence concernée, vous accordez un bonus de circonstances de +3 si vous êtes expert et de +4 si vous êtes maître."
                ]
            },
            {
                "name"       : "Servilité 1",
                "level"      : "5",
                "traits"     : [
                    "Audible",
                    "Concentration",
                    "Émotion",
                    "Kobold",
                    "Mental"
                ],
                "required"   : [
                    "qualifié en Duperie"
                ],
                "description": [
                    "Vous essayez de sports_martial_artsFeinter une créature. Contrairement à une Feinte normale, la créature doit être à 9 m au lieu d'être dans votre allonge et vous faites votre test contre son DD de Volonté au lieu de son DD de Perception."
                ]
            },
            {
                "name"       : "Sieste féline",
                "level"      : "1",
                "traits"     : [
                    "Félide",
                    "Concentration",
                    "Exploration"
                ],
                "required"   : [],
                "description": [
                    "Fréquence Une fois par heure",
                    "Vous pouvez regagner votre énergie rapidement avec une courte sieste. Vous dormez pendant 10 minutes, après quoi vous obtenez des Points de vie temporaires égaux à votre niveau qui durent pendant 1 heure.",
                    "flareEffet : Sieste féline"
                ]
            },
            {
                "name"       : "Souffle de dragon (Sang-dragon) 2",
                "level"      : "1",
                "traits"     : [
                    "Sang-dragon",
                    "Magique"
                ],
                "required"   : [],
                "description": [
                    "En puisant dans la physiologie de votre ancêtre draconique, vous pouvez exhaler un torrent d'énergie dans un crop_freecône de 4,50 mètres ou sur une crop_freeligne de 9 mètres , infligeant 1d4 dégâts. Chaque créature dans la zone doit tenter un jet de sauvegarde basique contre le plus élevé entre votre DD de classe ou votre DD de sort. Vous ne pouvez pas utiliser de nouveau cette capacité pendant casino1d4 rounds .",
                    "Au niveau 3, puis tous les 2 niveaux par la suite, les dégâts augmentent de 1d4. La forme du souffle, le type de dégâts et le jet de sauvegarde correspondent à ceux de votre modèle draconique. Cette capacité possède le trait associé avec le type dégâts qu'elle inflige."
                ]
            },
            {
                "name"       : "Souffle de kobold 2",
                "level"      : "1",
                "traits"     : [
                    "Arcanique",
                    "Kobold"
                ],
                "required"   : [],
                "description": [
                    "Vous canalisez la puissance de votre modèle draconique en une projection d'énergie qui se manifeste sur une crop_freeligne de 9 mètres ou un crop_freecône de 4,50 mètres , infligeant casino1d4 dégâts . Chaque créature dans la zone doit faire un jet de sauvegarde basique contre le plus élevé entre votre DD de classe et votre DD de sort. Vous ne pouvez plus utiliser cette capacité de nouveau pendant casino1d4 rounds .",
                    "Au niveau 3 puis tous les 2 niveaux par la suite, les dégâts augmentent de 1d4. La forme du souffle, le type de dégâts et le jet de sauvegarde correspondent à ceux de votre Modèle draconique . Cette capacité possède le trait associé avec le type de dégâts qu'il inflige.",
                    "casinoVigueur casinoRéflexes"
                ]
            },
            {
                "name"       : "Souffle du dragon",
                "level"      : "9",
                "traits"     : [
                    "Kobold"
                ],
                "required"   : [
                    "Souffle de kobold"
                ],
                "description": [
                    "Vous pouvez placer plus d'énergie dans votre Souffle de kobold pour canaliser davantage de pouvoir draconique mais cela vous demande davantage d'efforts. Lorsque vous utilisez Souffle de kobold, vous pouvez faire passer les dés de dégâts à des d8 et vous pouvez augmenter la zone pour qu'il s'agisse d'une ligne de 18 m si votre souffle est une ligne ou d'un cône de 9 m si votre souffle est un cône. Lorsque vous choisissez de le faire, vous ne pouvez plus utiliser Souffle du kobold pendant 1 heure."
                ]
            },
            {
                "name"       : "Souffle formidable",
                "level"      : "9",
                "traits"     : [
                    "Sang-dragon"
                ],
                "required"   : [
                    "Souffle de dragon"
                ],
                "description": [
                    "Grâce à des exercices de respiration rigoureux et à un régime alimentaire proche de celui de votre lignée, votre souffle magique est plus puissant. La zone de votre Souffle du Dragon passe à 9 mètres pour un cône ou à 18 mètres pour une ligne et les dés de dégâts sont des d6 au lieu de d4."
                ]
            },
            {
                "name"       : "Souffle prolongé",
                "level"      : "17",
                "traits"     : [
                    "Sang-dragon"
                ],
                "required"   : [
                    "Souffle de dragon"
                ],
                "description": [
                    "Votre souffle draconique détruit l'environnement et plonge vos ennemis dans la douleur. Lorsque vous utilisez Souffle de dragon, la zone de votre souffle devient un terrain difficile pendant 1 minute. De plus, une créature qui obtient un échec ou un échec critique à son jet de sauvegarde subit 2d6 dégâts persistants du même type."
                ]
            },
            {
                "name"       : "Source d'énergie 1",
                "level"      : "5",
                "traits"     : [
                    "Gnome"
                ],
                "required"   : [
                    "réserve de focalisation, au moins un sort inné obtenu par un héritage ou un don ancestral gnome et qui partage une tradition avec l'un de vos sorts focalisés"
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vous pouvez focaliser votre esprit plus rapidement grace à la magie qui coule dans vos veines. Vous regagnez 1 point de focalisation, sans pouvoir dépasser votre maximum."
                ]
            },
            {
                "name"       : "Sprint endiablé 2",
                "level"      : "5",
                "traits"     : [
                    "Sophistication",
                    "Kholo"
                ],
                "required"   : [
                    "héritage kholo chien"
                ],
                "description": [
                    "Conditions Vous disposez de vos deux mains libres.",
                    "Vous courez sur vos quatre membres aussi vite que vous le pouvez. Marchez rapidement trois fois."
                ]
            },
            {
                "name"       : "Stratégie de la montagne",
                "level"      : "1",
                "traits"     : [
                    "Nain"
                ],
                "required"   : [],
                "description": [
                    "Les nains ont une longue histoire de lutte contre des ennemis communs et vous avez maîtrisé les anciennes tactiques pour mieux les affronter. Vous bénéficiez d'un bonus de circonstances de +1 aux dégâts infligés par les armes et les attaques à mains nues contre les créatures ayant le trait géant, gobelin, hryngar ou orc. Si votre attaque inflige plus d'un dé de dégât d'arme (comme c'est souvent le cas après le niveau 1), le bonus est égal au nombre de dés de l'arme ou de dés de l'attaque à mains nues.",
                    "De plus, si une créature obtient un coup critique à une attaque portée contre vous et vous inflige des dégâts, vous obtenez votre bonus aux dégâts contre cette créature pendant 1 minute, qu'elle ait ou non l'un des traits indiqués.",
                    "flareEffet : Stratégie de la montagne (Touché par un coup critique)"
                ]
            },
            {
                "name"       : "Straveika",
                "level"      : "1",
                "traits"     : [
                    "Dhampir",
                    "Lignée"
                ],
                "required"   : [],
                "description": [
                    "Vous descendez d'un des véritables vampires antiques, un nosferatu maudit pour l'éternité mais ne bénéficiant pas de la jeunesse éternelle. Les gens vous appellent straveika ou né âgé.",
                    "Les vestiges des pouvoirs de domination de votre parent vous ont laissé avec une compréhension de la façon dont les intentions d'une créature changent son comportement. Vous obtenez un bonus de circonstances de +1 aux tests de Perception pour sports_martial_artsDeviner les intentions et les DD de Perception contre les tentatives pour vous sports_martial_artsMentir ."
                ]
            },
            {
                "name"       : "Supérieur à la somme",
                "level"      : "17",
                "traits"     : [
                    "Homme-rat"
                ],
                "required"   : [],
                "description": [
                    "Vous faites appel aux liens familiaux que vous partagez avec vos alliés et les autres hommes-rats pour devenir une force écrasante au combat. Vous pouvez lancer auto_awesomeAgrandissement comme un sort inné primordial au rang 6 une fois par jour."
                ]
            },
            {
                "name"       : "Superstition léchie r",
                "level"      : "1",
                "traits"     : [
                    "Léchi"
                ],
                "required"   : [],
                "description": [
                    "Déclencheur Vous tentez un jet de sauvegarde contre un sort ou un effet magique, mais n'avez pas encore lancé le dé.",
                    "Vous remarquez les esprits qui habitent les objets, apprenant à distinguer entre ceux qui apportent la chance ou la malchance. Vous vous focalisez sur le pouvoir d'un objet porteur de chance, ce qui vous fait bénéficier d'un bonus de circonstances de +1 à votre jet de sauvegarde contre l'effet déclencheur."
                ]
            },
            {
                "name"       : "Superstition omniprésente",
                "level"      : "9",
                "traits"     : [
                    "Orque"
                ],
                "required"   : [
                    "Superstition orque"
                ],
                "description": [
                    "Vous avez tellement baigné dans les superstitions orques que votre pratique des exercices mentaux de vos ancêtres vous aide à ignorer les effets de la magie.",
                    "Vous bénéficiez d'un bonus de circonstances de +1 à vos jets de sauvegarde contre les sorts et les effets magiques constamment."
                ]
            },
            {
                "name"       : "Superstition orque r",
                "level"      : "1",
                "traits"     : [
                    "Concentration",
                    "Orque"
                ],
                "required"   : [],
                "description": [
                    "Déclencheur Vous tentez un jet de sauvegarde contre un sort ou un effet magique et n'avez pas encore lancé les dés.",
                    "Vous vous défendez vous-même de la magie en comptant sur des techniques dérivées des superstitions culturelles orques. Vous obtenez un bonus de circonstances de +1 à votre jet de sauvegarde contre le sort ou l'effet magique déclencheur."
                ]
            },
            {
                "name"       : "Supplique empathique r",
                "level"      : "1",
                "traits"     : [
                    "Audible",
                    "Émotion",
                    "Gnome",
                    "Mental",
                    "Visuel"
                ],
                "required"   : [
                    "qualifié en Diplomatie"
                ],
                "description": [
                    "Déclencheur Vous êtes attaqué par une créature contre laquelle vous ne vous êtes pas encore montré hostile. Vous devez utiliser cette réaction avant que la créature ne fasse son attaque.",
                    "La manière dont vous vous êtes entraîné à vous tasser ou à faire les yeux de chien battu provoque une réponse empathique de la part de votre agresseur. Faites un test de casinoDiplomatie contre le DD de Volonté de l'agresseur.",
                    "Succès critique La créature retient son attaque, gâchant cette action et ne peut utiliser d'action hostile à votre encontre jusqu'au début de son prochain tour.",
                    "Succès La créature subit une pénalité de circonstances de -2 aux dégâts de la Frappe déclencheuse et à toutes les Frappes contre vous jusqu'au début de son prochain tour. La pénalité est de –4 si vous êtes un expert en Diplomatie, de -6 si vous êtes un maître et de -8 si vous êtes légendaire.",
                    "flareEffet : Supplique empathique",
                    "Échec L'attaque de la créature n'est pas affectée et la créature est temporairement immunisée à votre Supplique empathique pendant 24 heures."
                ]
            },
            {
                "name"       : "Supplique extraplanaire",
                "level"      : "5",
                "traits"     : [
                    "Néphilim"
                ],
                "required"   : [],
                "description": [
                    "Vous invoquez la puissance divine pour accorder une bénédiction sur vos alliés ou une malédiction sur vos ennemis. Choisissez soit auto_awesomeBénédiction offensive , soit auto_awesomeImprécation . Vous pouvez choisir ce sort une fois par jour comme un sort divin inné de rang 1."
                ]
            },
            {
                "name"       : "Sur pieds f",
                "level"      : "13",
                "traits"     : [
                    "Tripkee"
                ],
                "required"   : [],
                "description": [
                    "Déclencheur Vous perdez l'état sentiment_very_dissatisfiedInconscient .",
                    "Votre agilité de grenouille se réveille aussitôt. Vous vous Relevez. Ce mouvement ne déclenche pas de réactions."
                ]
            },
            {
                "name"       : "Suspendre",
                "level"      : "9",
                "traits"     : [
                    "Homme-lézard"
                ],
                "required"   : [],
                "description": [
                    "Vous pouvez vous suspendre par la queue à partir de n'importe quel point d'ancrage, tels qu'une branche d'arbre, un balcon ou une saillie rocheuse (à la discrétion du MJ), typiquement au cours de l'escalade. En vous suspendant, vous avez le libre usage de tous vos autres membres, de sorte que vous pouvez accomplir des tâches qui requièrent les deux mains, telles que tirer à l'arc ou balancer un coup avec une épée à deux mains."
                ]
            },
            {
                "name"       : "Suspicion ancestrale",
                "level"      : "5",
                "traits"     : [
                    "Elfe"
                ],
                "required"   : [],
                "description": [
                    "La longue vie des elfes leur a permis de voir des civilisations émerger et s\"écrouler, souvent entre les mains de forces extérieures. Il en résulte qu'ils ont développé une prudence à l'encontre de ceux qui pourraient chercher à les influencer ou à les contrôler. Vous avez été entraîné à résister à de telles manipulations, obtenant un bonus de circonstances de +2 aux jets de sauvegarde contre les effets qui permettraient de vous contrôler, comme auto_awesomeDomination et au tests de Perception pour sports_martial_artsDeviner les intentions lorsque vous essayez de déterminer si une créature est sous l'influence d'un tel effet. Lorsque vous obtenez un succès sur un jet de sauvegarde contre un tel effet, il devient un succès critique."
                ]
            },
            {
                "name"       : "Svetocher",
                "level"      : "1",
                "traits"     : [
                    "Dhampir",
                    "Lignée"
                ],
                "required"   : [],
                "description": [
                    "Vous êtes issu d'un moroi, le plus commun des vampires et vous partagez leur vigueur surnaturelle et leur pouvoir de persuasion. Lorsque vous avez l'état sentiment_very_dissatisfiedDrainé , calculez la pénalité à vos jets de Vigueur et la réduction de vos Points de vie comme si la valeur de l'état était inférieure de 1. Vous êtes qualifié en Diplomatie. Si vous devriez déjà être automatiquement qualifié, vous êtes qualifié dans une compétence de votre choix."
                ]
            },
            {
                "name"       : "Symphonie de sang",
                "level"      : "17",
                "traits"     : [
                    "Dhampir"
                ],
                "required"   : [],
                "description": [
                    "Vous puisez dans le sang de vos ennemis pour qu'il vous accorde de la vigueur. Une fois par jour, vous pouvez Lancer auto_awesomeSaignée du vampire comme un sort divin inné au rang 7."
                ]
            },
            {
                "name"       : "Tactiques d'escouade",
                "level"      : "9",
                "traits"     : [
                    "Hobgobelin"
                ],
                "required"   : [],
                "description": [
                    "Vous êtes adepte du travail avec vos alliés pour entourer un ennemi. Si un ennemi est dans votre allonge et dans celle d'au moins deux de vos alliés, cet ennemi est sentiment_very_dissatisfiedPris au dépourvu pour vous."
                ]
            },
            {
                "name"       : "Talent naturel",
                "level"      : "1",
                "traits"     : [
                    "Humain"
                ],
                "required"   : [],
                "description": [
                    "Votre sagacité vous permet d'apprendre de nombreuses compétences. Vous gagnez le degré de maîtrise qualifié dans deux compétences de votre choix."
                ]
            },
            {
                "name"       : "Tambours de la mort",
                "level"      : "9",
                "traits"     : [
                    "Orque"
                ],
                "required"   : [],
                "description": [
                    "Votre vie a été consacrée à défier la mort elle-même et la proximité de cet implacable ennemi fait que votre cœur bat plus fort.",
                    "Lorsque vous subissez des dégâts persistants ou que votre valeur sentiment_very_dissatisfiedBlessé est de 1 ou supérieure, vous obtenez un bonus de circonstances de +2 aux jets de Vigueur."
                ]
            },
            {
                "name"       : "Téméraire",
                "level"      : "1",
                "traits"     : [
                    "Léchi"
                ],
                "required"   : [],
                "description": [
                    "Votre esprit a surmonté beaucoup d'épreuves au cours de sa longue existence. Vous obtenez un bonus de circonstances de +1 aux jets de sauvegarde contre les effets d'émotion. Si vous obtenez un succès à votre jet de sauvegarde contre un effet d'émotion, il devient un succès critique."
                ]
            },
            {
                "name"       : "Temps contracté",
                "level"      : "9",
                "traits"     : [
                    "Aiuvarin"
                ],
                "required"   : [],
                "description": [
                    "Un de vos parents possède l'espérance de vie d'un humain et l'autre celle d'un elfe, la vôtre se trouvant quelque part entre les deux. De ce fait, vous avez une perspective inhabituelle à propos du temps et vous avez appris à le manifester pour vous aider dans des moments de stress.",
                    "Vous obtenez auto_awesomeRapidité comme un sort arcanique inné au rang 3 que vous ne pouvez lancer que sur vous-même. Vous pouvez Lancer ce sort une fois par jour."
                ]
            },
            {
                "name"       : "Touché par la muse",
                "level"      : "1",
                "traits"     : [
                    "Lignée",
                    "Néphilim"
                ],
                "required"   : [],
                "description": [
                    "Votre sang résonne du pouvoir libérateur des azatas, incarnations vivantes de la liberté du royaume sauvage de l'Élysée. Vous obtenez un bonus de circonstances de +1 pour sports_martial_artsVous échapper . Lorsque vous obtenez un échec critique sur un test pour Vous échapper, il devient un échec et lorsque vous obtenez un succès, il devient un succès critique."
                ]
            },
            {
                "name"       : "Tour de magie adapté",
                "level"      : "1",
                "traits"     : [
                    "Humain"
                ],
                "required"   : [
                    "capacité de classe d'incantation"
                ],
                "description": [
                    "Grâce à l'étude de plusieurs traditions magiques, vous avez altéré un sort pour qu'il corresponde à votre style d'incantation. Choisissez un tour de magie d'une tradition magique autre que la vôtre. Si vous préparez des sorts, vous pouvez choisir ce sort lorsque vous préparez vos tours de magie en plus de vos autres options. Si vous avez un répertoire de sorts, remplacez l'un des tours de magie que vous connaissez par le sort choisi. Vous pouvez lancer ce tour de magie comme un sort de la tradition choisie pour votre classe.",
                    "Si vous échangez ce tour de magie par un autre ou le réapprenez ultérieurement, vous pouvez choisir le tour de magie qui le remplace dans la liste de la même tradition ou celle d'une liste différente."
                ]
            },
            {
                "name"       : "Transformation du rejeton",
                "level"      : "17",
                "traits"     : [
                    "Homme-lézard",
                    "Primordial"
                ],
                "required"   : [],
                "description": [
                    "Vous entrez en hibernation pendant 24 heures et accomplissez un rituel dédié à vos ancêtres, entreprenant une métamorphose unique. Vous obtenez de manière permanente les effets du sort auto_awesomeAgrandissement et vos Points de vie maximum augmentent de votre niveau. Le rituel transforme la plupart de votre équipement à la taille appropriée à votre nouveau corps (bien que des objets puissants comme des artefacts ou des objets fortement liés à leur taille originelle puissent ne pas se transformer à la discrétion du MJ)."
                ]
            },
            {
                "name"       : "Traqueur en meute",
                "level"      : "5",
                "traits"     : [
                    "Kholo"
                ],
                "required"   : [
                    "expert en Discrétion"
                ],
                "description": [
                    "Les embuscades sont une tradition kholo honorée. Vous gagnez la prouesse military_techTraqueur de terrain et pouvez étendre ses effets à un seul allié tant qu'il reste dans un rayon de 6 mètres de vous. Si vous avez êtes maître en Discrétion, vous pouvez étendre l'effet à deux alliés. Si vous êtes légendaire en Discrétion, vous pouvez étendre l'effet à quatre alliés."
                ]
            },
            {
                "name"       : "Très furtif",
                "level"      : "1",
                "traits"     : [
                    "Gobelin"
                ],
                "required"   : [],
                "description": [
                    "Les personnes de grande taille font rarement attention aux ombres à leurs pieds et vous tirez profit de cette négligence. Vous pouvez vous déplacer de 1,50 mètre supplémentaire quand vous Êtes furtif , jusqu'à votre Vitesse.",
                    "En outre, tant que vous continuez d'enchaîner les actions Être furtif et que vous réussissez votre test de Discrétion, vous ne pouvez pas être Observé même si vous ne bénéficiez pas d'un abri ou d'un abri important et n'êtes pas sentiment_very_dissatisfiedMasqué à la fin de l'action Être furtif, du moment que vous bénéficiez d'un abri, d'un abri important ou êtes Masqué à la fin de votre tour."
                ]
            },
            {
                "name"       : "Très très furtif",
                "level"      : "13",
                "traits"     : [
                    "Gobelin"
                ],
                "required"   : [
                    "Très furtif"
                ],
                "description": [
                    "Quand vous utilisez l'action sports_martial_artsÊtre furtif , vous pouvez vous déplacer de votre Vitesse et vous n'avez plus besoin de bénéficier d'un abri, d'un abri important ou d'être sentiment_very_dissatisfiedMasqué pour vous Cacher ou Être furtif."
                ]
            },
            {
                "name"       : "Tripkee nocturne",
                "level"      : "1",
                "traits"     : [
                    "Tripkee"
                ],
                "required"   : [],
                "description": [
                    "Vous avez tendance à chasser et à effectuer la plupart de vos travaux la nuit et vous vous êtes adapté aux exigences de la vie nocturne. Vous obtenez vision dans le noir qui vous permet de voir dans les ténèbres et la lumière faible aussi bien que dans la lumière vive. Cependant, dans les ténèbres, vous ne voyez qu'en noir et blanc.",
                    "Spécial Vous ne pouvez prendre ce don qu'au niveau 1 et vous ne pouvez utiliser le réapprentissage pour l'obtenir ou le perdre."
                ]
            },
            {
                "name"       : "Tu ne peux tomber ici r",
                "level"      : "13",
                "traits"     : [
                    "Audible",
                    "Hobgobelin",
                    "Manipulation"
                ],
                "required"   : [],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Un allié adjacent et volontaire devrait être réduit à 0 PV mais pas tué.",
                    "Vous aidez physiquement un allié à rester debout et l'encouragez à surmonter sa douleur contre vents et marées.",
                    "Votre allié ne devient pas sentiment_very_dissatisfiedInconscient et reste à 1 Point de vie. L'allié obtient aussi un nombre de Points de vie temporaires égal à votre niveau qui dure pendant 1 minute. Continuer à se battre avec une telle blessure n'est pas sans conséquence ; l'état sentiment_very_dissatisfiedBlessé de votre allié augmente de 1.",
                    "flareEffet : Tu ne peux tomber ici"
                ]
            },
            {
                "name"       : "Tueur de mort-vivant",
                "level"      : "5",
                "traits"     : [
                    "Dhampir"
                ],
                "required"   : [],
                "description": [
                    "Votre connaissance de votre propre anatomie pas tout à fait vivante combinée à votre expérience du combat vous aide à abattre les adversaires morts-vivants avec facilité. Contre les créatures mortes-vivantes, vous obtenez un bonus de circonstances aux dégâts pour les Frappes avec arme et à mains nues égal au nombre de dés de dégâts de l'arme pour la Frappe. Ce bonus est du double des dés de dégâts de l'arme si votre cible possède le trait vampire."
                ]
            },
            {
                "name"       : "Type angélique",
                "level"      : "1",
                "traits"     : [
                    "Lignée",
                    "Néphilim"
                ],
                "required"   : [],
                "description": [
                    "Vous descendez d'un ange, un messager ailé du Nirvana ou de l'un des autres royaumes célestes. Vous êtes qualifié en Société. Si vous devriez déjà être qualifié en Société (du fait de votre historique ou de votre classe, par exemple), vous êtes qualifié dans une compétence de votre choix. Vous connaissez l'empyréen et vous obtenez le don de compétence military_techPolyglotte ."
                ]
            },
            {
                "name"       : "Vandale",
                "level"      : "5",
                "traits"     : [
                    "Gobelin"
                ],
                "required"   : [],
                "description": [
                    "Vous avez le chic pour briser et démanteler les choses. Les recoller ensemble est la partie ennuyeuse, de sorte que vous ne vous encombrez pas généralement de ça. Vous êtes qualifié en Vol. Si vous devriez déjà être automatiquement qualifié en Vol (par votre historique ou votre classe, par exemple), vous êtes qualifié dans une compétence de votre choix.",
                    "De plus, lorsque vous touchez avec une Frappe un piège ou un objet non tenu, vous ignorez les 5 premiers points de Solidité de l'objet."
                ]
            },
            {
                "name"       : "Venger un allié 1",
                "level"      : "13",
                "traits"     : [
                    "Elfe",
                    "Fortune"
                ],
                "required"   : [],
                "description": [
                    "Fréquence Une fois toutes les 10 minutes",
                    "Conditions Vous êtes dans les 9 mètres d'un allié avec l'état sentiment_very_dissatisfiedMourant .",
                    "Bien que vous sachiez que vous allez finalement survivre à vos compagnons, les voir aux portes de la mort apporte de la clarté à vos attaques. Faites une Frappe. Lancez deux fois le jet d'attaque et utilisez le meilleur résultat."
                ]
            },
            {
                "name"       : "Véritable vol draconique",
                "level"      : "9",
                "traits"     : [
                    "Sang-dragon"
                ],
                "required"   : [
                    "Vol draconique"
                ],
                "description": [
                    "Vos ailes sont devenues plus puissantes, capables de vous maintenir en l'air plus longtemps. Vous disposez d'une Vitesse de vol de 6 mètres en permanence."
                ]
            },
            {
                "name"       : "Vierge de saumure",
                "level"      : "1",
                "traits"     : [
                    "Changelin",
                    "Lignée"
                ],
                "required"   : [],
                "description": [
                    "Votre mère est une guenaude marine, vous accordant un œil vert océan ou bleu. Vous êtes à l'aise dans la mer comme sur la grève. Lorsque vous obtenez un succès sur un test d'Athlétisme pour sports_martial_artsNager , il devient un succès critique. Si vous terminez votre tour dans l'eau sans avoir réussi un test de Natation lors de ce round, vous ne coulez pas (mais vous pouvez néanmoins subir les effets du courant pour votre déplacement)."
                ]
            },
            {
                "name"       : "Vierge de scorie",
                "level"      : "1",
                "traits"     : [
                    "Changelin",
                    "Lignée"
                ],
                "required"   : [],
                "description": [
                    "Votre mère était une guenaude de fer, réputée pour ses prouesses physiques et vous possédez un œil violet ou gris-acier. Vous obtenez d'épaisses et robustes griffes faites de fer froid qui poussent naturellement à partir de votre corps. Vous obtenez une attaque de griffe qui inflige 1d6 dégâts tranchants. Vos griffes sont dans le groupe pugilat, possèdent les traits mains nues et saisir et sont en fer froid."
                ]
            },
            {
                "name"       : "Vierge novice",
                "level"      : "1",
                "traits"     : [
                    "Changelin",
                    "Lignée"
                ],
                "required"   : [],
                "description": [
                    "Vous faites partie des plus courants des changelins - ceux nés des guenaudes doucereuses - et un œil vert vif marque cette parenté. La nature manipulatrice de votre mère naturelle et sa voix changeante vous donne un avantage pour duper les autres.",
                    "Vous obtenez le don de compétence military_techMenteur charismatique . Si vous lancez un test de Duperie pour déterminer l'initiative, les adversaires dans cette rencontre qui n'ont pas encore agi avant vous sont sentiment_very_dissatisfiedPris au dépourvu à votre égard."
                ]
            },
            {
                "name"       : "Vierge onirique",
                "level"      : "1",
                "traits"     : [
                    "Changelin",
                    "Lignée"
                ],
                "required"   : [],
                "description": [
                    "Vous êtes l'enfant d'une guenaude coucou, de sorte qu'un de vos yeux est violet ou même noir. Les pouvoirs de votre mère sur le sommeil et les rêves vous ont accordé un niveau de résistance à ces effets, vous faisant bénéficier d'un bonus de circonstances de +2 à tous les jets de sauvegarde contre les effets de sommeil et les effets qui provoquent ou altèrent les rêves.",
                    "De plus, le sommeil vous permet de mieux récupérer. Vous regagnez des PV égaux à votre modificateur de Constitution multiplié par le double de votre niveau, au lieu de simplement votre niveau et vous réduisez les états sentiment_very_dissatisfiedDrainé et sentiment_very_dissatisfiedCondamné de 2 au lieu de 1."
                ]
            },
            {
                "name"       : "Vigueur dans la victoire r",
                "level"      : "5",
                "traits"     : [
                    "Orque"
                ],
                "required"   : [],
                "description": [
                    "Déclencheur Vous réduisez un adversaire à 0 Point de vie.",
                    "Vos victoires au combat vous remplissent de fierté et vous insufflent l'énergie nécessaire pour combattre un peu plus longtemps malgré vos blessures. Jusqu'à la fin de votre prochain tour, Vous obtenez une quantité de Points de vie temporaires égale à votre modificateur de Constitution."
                ]
            },
            {
                "name"       : "Visage de pierre",
                "level"      : "1",
                "traits"     : [
                    "Hobgobelin"
                ],
                "required"   : [],
                "description": [
                    "Vous avez maîtrisé l'art de garder votre composition, même face à la terreur. Vous obtenez un bonus de circonstances de +1 aux jets de sauvegarde contre les effets avec le trait terreur et un bonus de circonstances de +2 à votre DD de Volonté contre les actions de la compétence Intimidation, telle que celle de sports_martial_artsDémoraliser ."
                ]
            },
            {
                "name"       : "Vision de la guenaude",
                "level"      : "1",
                "traits"     : [
                    "Changelin"
                ],
                "required"   : [],
                "description": [
                    "Vous avez fait grandir les capacités surnaturelles données par votre mère guenaude, plus particulièrement votre vision. Vous obtenez Vision dans le noir."
                ]
            },
            {
                "name"       : "Vision draconique",
                "level"      : "1",
                "traits"     : [
                    "Sang-dragon"
                ],
                "required"   : [],
                "description": [
                    "Vous possédez une fraction des sens de votre prédécesseur draconique. Vous obtenez vision nocturne ou vision dans le noir si votre ascendance vous accorde déjà vision nocturne."
                ]
            },
            {
                "name"       : "Vision du tombeau",
                "level"      : "1",
                "traits"     : [
                    "Crépusculaire"
                ],
                "required"   : [
                    "Vision nocturne"
                ],
                "description": [
                    "Vous pouvez voir dans l'obscurité aussi facilement qu'un psychopompe. Vous obtenez vision dans le noir.",
                    "Spécial Vous pouvez choisir ce don seulement au niveau 1 et vous ne pouvez pas utiliser le réapprentissage pour obtenir ou perdre ce don."
                ]
            },
            {
                "name"       : "Vision orque",
                "level"      : "1",
                "traits"     : [
                    "Dromaar"
                ],
                "required"   : [
                    "vision nocturne"
                ],
                "description": [
                    "Votre sang orc vous accorde la vision perçante de vos prédécesseurs. Vous obtenez vision dans le noir pour voir dans les ténèbres et la lumière faible aussi bien que sous la lumière vive. Cependant, dans les ténèbres, vous ne voyez qu'en noir et blanc.",
                    "Spécial Vous ne pouvez choisir ce don qu'au niveau 1 et vous ne pouvez pas utiliser le réapprentissage pour le perdre."
                ]
            },
            {
                "name"       : "Voile draconique",
                "level"      : "13",
                "traits"     : [
                    "Sang-dragon"
                ],
                "required"   : [],
                "description": [
                    "Comme certains dragons, votre ancêtre avait la capacité surnaturelle de changer de forme pour se fondre parmi les humanoïdes. Vous avez appris à imiter cette capacité. Vous pouvez lancer auto_awesomeForme humanoïde comme un sort inné de rang 5 une fois par jour, sauf que la durée est augmentée à 1 heure. La tradition du sort correspond à celle de votre modèle draconique."
                ]
            },
            {
                "name"       : "Voix de la nuit",
                "level"      : "1",
                "traits"     : [
                    "Dhampir"
                ],
                "required"   : [],
                "description": [
                    "Vous entendez et comprenez les mots des créatures avec lesquelles vous partagez l'obscurité. Vous pouvez poser des questions, recevoir des réponses et utiliser la compétence Diplomatie avec les chauves-souris, les loups et les rats. Vous obtenez aussi un bonus de circonstances de +1 pour sports_martial_artsFaire bonne impression sur de tels animaux."
                ]
            },
            {
                "name"       : "Vol des ailettes 1",
                "level"      : "9",
                "traits"     : [
                    "Kobold"
                ],
                "required"   : [
                    "Ailettes"
                ],
                "description": [
                    "Fréquence Une fois par round",
                    "Une utilisation intensive et l'exercice ont rendu vos ailettes plus puissantes. Vous Volez. Si vous ne possédez normalement pas déjà d'une Vitesse de Vol, vous obtenez une Vitesse de vol de 6 mètre pour ce déplacement. Si vous n'êtes pas sur un sol solide à la fin de ce déplacement, vous chutez."
                ]
            },
            {
                "name"       : "Vol draconique 1",
                "level"      : "5",
                "traits"     : [
                    "Sang-dragon"
                ],
                "required"   : [],
                "description": [
                    "Fréquence Une fois par round",
                    "Une petite paire d'ailes draconiques vous a poussé ou bien vous avez perfectionné l'utilisation des ailes que vous avez depuis votre naissance. Vous Volez. Si vous n'avez normalement pas de Vitesse de vol, vous obtenez une vitesse de vol de 6 mètres pour ce déplacement. Si vous n'êtes pas sur la terre ferme à la fin de ce déplacement, vous tombez."
                ]
            },
            {
                "name"       : "Vol-plané léchi",
                "level"      : "5",
                "traits"     : [
                    "Léchi"
                ],
                "required"   : [
                    "héritage léchi feuillu ou don de compétence Chute féline"
                ],
                "description": [
                    "En utilisant vos propres feuilles, vous pouvez contrôler votre descente.",
                    "Vous planez lentement vers le sol, 1,50 mètre vers le bas et 7,50 mètres devant vous à travers les airs. Tant que vous dépensez au moins 1 action pour planer chaque round et que vous n'avez pas touché le sol, vous restez dans les airs à la fin de votre tour."
                ]
            },
            {
                "name"       : "Voler haut 1",
                "level"      : "5",
                "traits"     : [
                    "Tengu"
                ],
                "required"   : [
                    "Tengu enfant du ciel"
                ],
                "description": [
                    "Fréquence Une fois par round",
                    "Vous Volez. Si vous n'avez normalement pas de vitesse de vol, vous obtenez une Vitesse de vol de 6 mètres pour ce déplacement. Si vous n'êtes pas sur la terre ferme à la fin de ce déplacement, vous tombez."
                ]
            },
            {
                "name"       : "Volonté inébranlable",
                "level"      : "1",
                "traits"     : [
                    "Elfe"
                ],
                "required"   : [],
                "description": [
                    "Votre contrôle et vos méditations mystiques vous permettent de résister aux influences externes qui tentent d'affecter votre conscience. Lorsque vous êtes affecté par un effet mental qui dure au moins 2 rounds, vous pouvez en réduire la durée de 1 round.",
                    "Vous avez toujours besoin de sommeil naturel, mais vous considérez vos jets de sauvegarde contre les effets qui devraient vous faire tomber dans le sommeil d'un degré de succès supérieur à ce qu'ils sont. Cela vous protège seulement contre les effets de sommeil, mais pas des autres effets qui vous rendent sentiment_very_dissatisfiedInconscient ."
                ]
            },
            {
                "name"       : "Vomir l'estomac r",
                "level"      : "5",
                "traits"     : [
                    "Tripkee"
                ],
                "required"   : [],
                "description": [
                    "Déclencheur Vous obtenez l'état sentiment_very_dissatisfiedNauséeux ou un échec sur un jet de sauvegarde contre un poison ingéré.",
                    "Fréquence Une fois par jour",
                    "Dans les circonstances les plus graves, vous pouvez vomir votre estomac pour expulser les toxines. Réduisez votre état Nauséeux de 2 et tentez immédiatement un jet de sauvegarde avec un bonus de circonstances de +2 contre tout poison ingéré auquel vous avez été exposé au cours de la dernière minute. Vous devenez sentiment_very_dissatisfiedPris au dépourvu pendant 1 round car votre estomac exposé vous rend particulièrement vulnérable aux attaques."
                ]
            },
            {
                "name"       : "Voyageur affable",
                "level"      : "1",
                "traits"     : [
                    "Félide"
                ],
                "required"   : [],
                "description": [
                    "Vous adoptez naturellement une manière affable et plaisante lorsque vous faites des rencontres. Vous êtes qualifié en Diplomatie. Si vous devriez l'être automatiquement (par votre historique ou votre classe, par exemple), vous êtes qualifié dans une autre compétence de votre choix.",
                    "De plus, vous obtenez le don de compétence military_techAnimal social ."
                ]
            },
            {
                "name"       : "Voyageur robuste",
                "level"      : "9",
                "traits"     : [
                    "Humain"
                ],
                "required"   : [],
                "description": [
                    "Il n'y a pas de destination trop éloignée ou de fardeau assez lourd lorsque vous avez des amis sont à vos côtés ou que vous gardiez l'espoir dans votre coeur. Augmentez votre limite d'Encombrement et votre Encombrement maximal de 1. De plus, vous obtenez un bonus de circonstances de +3 mètres à votre Vitesse de voyage."
                ]
            },
            {
                "name"       : "Yeux de la nuit",
                "level"      : "1",
                "traits"     : [
                    "Dhampir"
                ],
                "required"   : [
                    "Vision nocturne"
                ],
                "description": [
                    "Vous pouvez voir dans l'obscurité aussi facilement qu'un véritable vampire. Vous obtenez Vision dans le noir."
                ]
            },
            {
                "name"       : "Yeux du néphilim",
                "level"      : "1",
                "traits"     : [
                    "Néphilim"
                ],
                "required"   : [
                    "Vision nocturne"
                ],
                "description": [
                    "Vos yeux peuvent voir à travers les ténèbres avec l'acuité visuelle que possèdent la plupart des êtres extraplanaires. Vous obtenez vision dans le noir."
                ]
            }
        ]
    ]
};
