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
                    "Alors que d'autres gravent leurs armures pour servir d'exutoire à leur imagination, votre esprit vif et votre personnalité audacieuse vous permettent de projeter votre personnalité sur une armure manquant de lustre. Vous changez la forme et l'apparence de votre armure pour qu'elle apparaisse comme étant des habits ordinaires ou comme de beaux atours issus de votre imagination. Les statistiques de l'armure ne changent pas. Cet effet dure tant que vous restez conscient et que vous portez l'armure. Une créature peut percer l'illusion en Cherchant ou en touchant votre armure. Le DD est égal à votre Volonté ."
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
                    "Effet : Accroche-sangsue"
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
                    "Vous obtenez le don général Ascendance adoptive , ainsi qu'un don ancestral de niveau 1 tiré de la liste de dons de l'ascendance que vous avez choisi avec Ascendance adoptive."
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
                    "Vous obtenez Invisibilité et Lumière révélatrice comme sorts innés primordiaux de rang 2. Vous pouvez lancer chacun de ces sorts innés primordiaux une fois par jour."
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
                    "Vous avez un sens de l'équilibre quasi-surnaturel qui vous permet de vous déplacer rapidement à travers les surfaces les plus instables. Vous obtenez le don de compétence Équilibre stable . Vous pouvez Faire un pas sur un terrain difficile provoqué par un sol instable, tel qu'un terrain rocailleux ou une déclivité accidentée."
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
                    "Votre éducation a mis l'accent sur le travail en équipe et aider vos alliés vous vient naturellement. Lorsque vous avez Aidé un allié pour un test de compétence qui n'a pas le trait attaque, vous pouvez aussi aider tout autre allié qui essaie le même test de compétence dans le même but durant ce round. Vous le faites par une action gratuite plutôt que par une réaction.",
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
                    "Vous disposez d'une paire d'ailes draconiques suffisamment puissantes pour battre vos ennemis et les repousser. Choisissez jusqu'à deux créatures qui vous sont adjacentes. Faites un test d' Athlétisme et comparez-le au DD de Vigueur de chaque cible. Ceci compte comme deux attaques dans le calcul de votre pénalité d'attaques multiples, mais l'augmentation de la pénalité ne s'applique qu'après les deux attaques.",
                    "Succès critique La cible subit des dégâts contondants égaux au double de votre niveau ( 2*@actor.level contondant ) et elle est repoussée jusqu'à 3 mètres de vous.",
                    "Succès La cible subit des dégâts contondants égaux à votre niveau ( casino@actor.level contondant ) et elle est repoussée jusqu'à 1,50 mètre de vous.",
                    "Échec La cible subit des dégâts contondants égaux à la moitié de votre niveau ( (floor(@actor.level/2)) contondant ).",
                    "Échec critique Vous tombez À terre à la fin de votre action."
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
                    "Vos ailes sont désormais une partie permanente de votre corps. Vous obtenez les effets d' Ailes divines à tout moment, plutôt que juste une fois par jour pendant 10 minutes."
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
                    "Du fait de l'influence latente du protecteur de votre terrier, une paire de petites ailes a poussé dans votre dos. Quoique insuffisante pour voler réellement, ces ailettes peuvent vous aider à sauter plus loin grâce à leurs petits battements. Lorsque vous Sautez horizontalement, vous vous déplacez de 1,50 mètre supplémentaire. Cette distance supplémentaire n'est pas cumulable avec la distance de Bond augmentée liée au don Bond puissant . De plus, lorsque vous tentez un Saut en longueur , vous pouvez sauter à une distance qui va jusqu'à 3 mètres de plus que la distance que vous pourriez normalement franchir au regard du résultat de votre test d'Athlétisme, bien que vous ne puissiez toujours pas sauter plus loin que votre Vitesse. Vous n'obtenez pas automatiquement un échec à vos tests de Saut en hauteur ou de Saut en longueur si vous ne Marchez pas rapidement d'au moins 3 mètres."
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
                    "Vous avez développé un lien profond avec vos camarades et pouvez ainsi encore mieux coopérer avec eux. Si vous êtes au moins expert dans la compétence à laquelle vous apportez votre Aide , lorsque vous obtenez un échec ou un échec critique à vos tests pour Aider, il devient un succès."
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
                    "Contrairement à la plupart des vôtres, qui considèrent les gobelins comme de l'embarras ou des inconvénients facilement remplaçables, vous avez étudié la méthodologie derrière leurs actions irresponsables et incompréhensibles. Vous obtenez le don général Ascendance adoptive et devez choisir l'ascendance gobelin. Vous obtenez aussi un don ancestral gobelin de niveau 1."
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
                    "Vous invoquez les esprits de la nature proches de vous pour améliorer votre corps. Une fois par jour, vous pouvez lancer Forme de plante comme un sort inné primordial de rang 5. Lorsque vous atteignez le niveau 17, vous pouvez intensifier au rang 6 lorsque vous le lancez."
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
                    "Vous émettez un sifflement strident et pointez du doigt et une énorme nuée de rats jaillit du terrain environnant pour remplir une explosion de 9 mètres dans les 36 mètres. Les rats courent sur le sol et grimpent sur les murs et les surfaces, mordant et griffant tout en infligeant 6d8 dégâts perforants à tous les ennemis dans la zone. Les rats continuent de grouiller dans la zone pendant la minute suivante, infligeant 3d8 dégâts perforants à tout ennemi qui termine son tour dans la zone et transformant la zone en terrain difficile (bien que les rats vous permettent, à vous ainsi qu'à vos alliés, de passer normalement). Vous pouvez Révoquer l'effet."
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
                    "Vous disposez d'un lien puissant avec le Cimetière et ses cours, vous faisant bénéficier de la capacité de voyager jusqu'au Cimetière et d'en revenir. Vous pouvez lancer Téléportation interplanaire comme sort divin inné deux fois par semaine.",
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
                    "Vous avez entendu l'Appel et, en lui résistant, vous avez développé un rempart mental contre les effets qui cibleraient votre esprit. Vous obtenez un bonus de circonstances de +1 aux jets de Volonté contre les effets mentaux. Si vous obtenez un succès sur votre jet de sauvegarde contre un effet mental qui devrait vous rendre Contrôlé , il devient un succès critique."
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
                    "Vous êtes habile à esquiver les racines, le feuillage et autres obstacles de la jungle. Vous ignorez le terrain difficile dans les forêts et les jungles. De plus, lorsque vous utilisez la compétence Acrobaties pour garder l'Équilibre sur des surfaces étroites ou un sol inégal fait de végétaux, vous n'êtes pas Pris au dépourvu et lorsque vous obtenez un succès à l'un de ces tests d'Acrobaties, il devient un succès critique."
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
                    "Votre connexion innée avec la pierre vous permet de vous déplacer plus facilement sur des surfaces accidentées. Vous pouvez ignorer le terrain difficile causé par la pierre (comme des débris ou des gravats). De plus, quand vous utilisez la compétence Acrobaties pour Garder l'équilibre sur des surfaces étroites ou sur un sol inégal de pierre ou de terre, vous n'êtes pas Pris au dépourvu et, quand vous obtenez un succès sur un tel test d'Acrobaties, il devient un succès critique."
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
                    "Vous pouvez démontrer comment vous écarter rapidement du passage de dangereux effets. Vous pouvez utiliser la réaction Aider pour accorder à un allié un bonus au jet de Réflexes. Comme à l'ordinaire avec Aider, vous avez besoin de vous préparer en utilisant une action lors de votre tour pour encourager l'allié."
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
                    "Les pouvoirs de domination employés par vos géniteurs se sont également manifestés en vous. Vous pouvez Lancer Charme comme un sort inné divin une fois par jour. Son rang de sort est égal à la moitié de votre niveau arrondi au supérieur, mais il n'augmente pas sa durée ni le nombre de ses cibles aux rangs 4 et 8."
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
                    "Déclencheur Vous devenez Agrippé .",
                    "Conditions Vous avez une queue complètement repoussée.",
                    "Vous pouvez abandonner une portion de votre queue pour vous échapper. Vous cessez d'être agrippé, puis vous Marchez rapidement sans déclencher la moindre réaction de la part de la créature qui vous a agrippé. Il faut 1 semaine pour que votre queue repousse complètement. Jusqu'à ce que ce soit le cas, vous ne pouvez plus faire d'attaques à mains nues avec votre queue et vous subissez une pénalité de circonstances de -2 sur les tests pour Garder l'équilibre ."
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
                    "Les créatures qui ne sont pas des hommes-lézard situées sur un terrain difficile sont Prises au dépourvu par rapport à vous.",
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
                    "Votre peau humide est particulièrement résistante aux dégâts provoqués par les effets liés aux changements de température. Tentez un Test nu, DD 10 . En cas de succès, vous mettez fin à tous les dégâts de feu persistants et de froid en cours. De plus, vous obtenez une résistance au feu et au froid égale à la moitié de votre niveau pendant 1 minute."
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
                    "Depuis des temps immémoriaux, les plus puissants dresseurs de bêtes orques tiraient de leurs compagnons bestiaux un véritable esprit guerrier en les nourrissant avec un mélange incorporant un peu de leur propre sang orque. Tous vos compagnons animaux, animaux de compagnie, familiers ou animaux liés qui vous sont liés possèdent le don Férocité orque et obtiennent une réaction par round qu'ils ne peuvent utiliser que pour Férocité orque. Si vous possédez le don ancestral Férocité immortelle , tous les compagnons animaux, familiers, animaux de compagnie ou animaux liés obtiennent aussi les avantages de ce don lorsqu'ils utilisent la réaction Férocité orque."
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
                    "Tant que vous restez sur le sol et êtes adjacent à un mur en pierre vertical dont la hauteur atteint au moins votre taille, vous n'êtes pas Pris au dépourvu contre les attaques qui résultent d'une prise en tenaille. Cela fonctionne même si vous êtes au coin extérieur d'un mur."
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
                    "Vos prouesses en saut sont inégalées. Vous pouvez Bondir jusqu'à 9 mètres dans n'importe quelle direction sans toucher le sol et sans avoir besoin d'effectuer de test d'Athlétisme. Lorsque vous le faites, vous devez atterrir sur un espace de terre ferme dans un rayon de 9 mètres, sinon vous tombez après avoir utilisé votre action suivante. Vous pouvez dépasser votre Vitesse normale lorsque vous Bondissez.",
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
                    "En adoptant une posture particulière, vous faites un petit bond sur chaque orteil. Vous effectuez un Bond vertical sans déclencher les réactions qui peuvent être déclenchées par les actions de déplacement ou par le fait de quitter ou de pénétrer dans une case."
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
                    "Vos bonds semblent défier la gravité lorsque vous élancez dans les airs d'un unique bond. Lorsque vous Bondissez, augmentez la distance maximale que vous pouvez Sauter horizontalement de 3 mètres et la distance maximale que vous pouvez Sauter verticalement de 1,50 mètre."
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
                    "L'auditeur que vous visez peut tenter un test de perception, DD 20 pour comprendre le message. Ce DD est réduit de 5 si l'interlocuteur est un halfelin ou réduit de 10 si l'interlocuteur est un halfelin et qu'il possède le don Boniment campagnard ( perception, DD 15 , perception, DD 10 ). Ceux qui écoutent peuvent aussi tenter un test de perception contre votre DD de Duperie pour en discerner la signification. Tous les bonus et les pénalités applicables à la Perception pour les tests pour Deviner les intentions s'appliquent aux tests pour comprendre Boniment campagnard."
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
                    "Vous êtes naturellement calme et recueilli face au danger imminent. À la fin de votre tour, réduisez votre état Effrayé de 2 au lieu de 1."
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
                    "Vous pouvez confectionner des outils utilisables à partir de morceaux de métal tordus ou rouillés. Si vous utilisez la compétence Artisanat pour Fabriquer quelque chose, vous pouvez créer des objets de niveau 0, y compris des armes et des armures, à partir de déchets. Cela réduit le prix à un quart du montant normal, mais l'objet obtenu est toujours de mauvaise qualité. Les objets de mauvaise qualité donnent normalement une pénalité, mais vous ne subissez pas cette pénalité lorsque vous utilisez les objets de mauvaise qualité que vous avez fabriqués (de même, vous ne subissez pas la pénalité appliquée aux armures de mauvaise qualité).",
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
                    "En outre, lorsque vous rencontrez une créature fée dans un cadre social, vous pouvez immédiatement faire un test de Diplomatie pour Faire bonne impression à cette créature, sans avoir besoin de converser avec elle pendant 1 minute. Vous faites ce test avec une pénalité de -5. Si vous échouez, vous pouvez passer 1 minute à converser avec la créature et tenter une nouvelle fois de réussir votre test plutôt que d'accepter le résultat d'un échec ou d'un échec critique."
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
                    "Vous sécrétez une cape de poison concentrée qui blesse quiconque ose vous attaquer. Pendant 1 minute, toute créature qui vous touche ou vous blesse avec une attaque à mains nues ou une attaque d'arme au corps-à-corps sans le trait allonge subit 3d6 dégâts de poison ."
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
                    "Vous êtes particulièrement bon cavalier sur les montures traditionnelles des gobelins. Vous obtenez le don Chevaucher même si vous n'en possédez pas les prérequis. Vous obtenez un bonus de circonstances de +1 à vos tests de Nature pour utiliser Diriger un animal sur une monture chien gobelin ou loup.",
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
                    "Lorsque vous utilisez Chance féline pour relancer un jet, toutes les créatures que vous choisissez dans les 3 mètres qui ont obtenu un échec à leur jet contre le même effet (comme un unique sort) peuvent aussi relancer leurs jets de sauvegarde et utiliser le meilleur résultat."
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
                    "Vous êtes plus chanceux que la plupart des hommes-félins. Vous pouvez déclencher votre Chance féline lorsque vous obtenez un échec ou un échec critique sur un jet de Vigueur ou de Volonté en plus du jet de Réflexes. Vous ne pouvez cependant utiliser Chance féline qu'une seule fois par jour."
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
                    "Vous survivez aux dangers avec une surprenante régularité. Vous pouvez utiliser Chance féline une fois par heure plutôt qu'une fois par jour."
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
                    "Vous entonnez d'agaçants chants gobelins qui distraient vos adversaires avec des paroles stupides et répétitives. Faites un test de Représentation contre le DD de Volonté d'un unique ennemi dans un rayon de 9 mètres. Ce test possède tous les traits et restrictions normalement associés à un test de Représentation pour chanter. Vous pouvez affecter jusqu'à deux cibles à portée si vous êtes expert en Représentation, quatre si vous êtes maître et huit si vous êtes légendaire.",
                    "Succès critique La cible subit une pénalité de -1 à ses tests de Perception et à ses jets de Volonté pendant 1 minute.",
                    "Effet : Chant Gobelin (Succès critique)",
                    "Succès La cible subit une pénalité de -1 à ses tests de Perception et à ses jets de Volonté pendant 1 round.",
                    "Effet : Chant Gobelin (Succès)",
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
                    "La magie elfique qui coule dans vos veines se manifeste comme une force que vous pouvez utiliser pour devenir plus séduisant ou intéressant. Vous pouvez lancer le sort Charme au rang 1 comme un sort inné arcanique une fois par jour."
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
                    "Vous savez que les plus grands trésors ressemblent souvent à des déchets. Vous obtenez un bonus de circonstances de +1 à vos tests pour Subsister et vous pouvez utiliser les compétences Société ou Survie quand vous tentez de Subsister dans une agglomération.",
                    "Quand vous tentez de Subsister dans une ville, vous récupérez également des déchets de valeur que ces idiots de grandes guibolles ont jetés. Vous pouvez Gagner de l'argent grâce aux compétences Société ou Survie en même temps que vous Subsistez, sans avoir à y consacrer des jours d'intermède supplémentaires. Vous obtenez également un bonus de circonstances de +1 à ce test.",
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
                    "Vous évitez l'attention de créatures concentrées sur vos alliés. Vous pouvez utiliser l'abri fourni par vos alliés pour Vous cacher ."
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
                    "Vous êtes toujours à la recherche de l'opportunité idéale pour tendre une embuscade à vos ennemis. Vous pouvez effectuer l'activité d'exploration Reconnaître en même temps que l'activité d'exploration Échapper aux regards ."
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
                    "Vous avez entraîné votre compagnon animal à devenir un juggernaut terrifiant sur le champ de bataille. Votre compagnon animal est qualifié en Intimidation. Si votre compagnon animal utilise Soutien lorsqu'il vous sert de monture, il vous accorde les effets de la réaction Aider sur votre premier test d'Intimidation pour Démoraliser lors du même tour, même s'il ne peut entreprendre une réaction."
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
                    "Utilisant les os de vos ancêtres, vous manifestez leurs esprits autour de vous sous une forme fossilisée. Vous pouvez lancer Masque de terreur sur vous-même comme un sort inné primordial une fois par jour. Lorsque vous le faites, vous apparaissez comme un ancêtre squelettique homme-lézard, modifié d'une façon qui puisse inspirer la terreur la plus profonde de ceux qui vous regardent."
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
                    "Votre peuple a utilisé une puissante magie pour voyager entre des mondes distants dans un lointain passé et les résidus de cette magie vous facilitent un tel moyen de transport. Lorsque vous êtes la cible d'un sort de téléportation qui transporte plus d'une personne, il peut affecter une personne supplémentaire au-delà de sa limite normale choisie par le lanceur. De plus, lorsque vous êtes la cible d'un sort de Téléportation , vous et les autres cibles parvenez à une distance d'au plus 1,5 kilomètre de la destination, quelle que soit la distance parcourue."
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
                    "Vous avez grandi en montant les poneys hirsutes et les chiens de monte de votre clan. Vous êtes qualifié en Nature. Si vous deviez déjà être qualifié en Nature (par votre historique ou votre classe par exemple), vous êtes qualifié dans une autre compétence de votre choix. Vous obtenez également un bonus de circonstances de +1 pour Diriger un animal si la cible est une monture halfeline traditionnelle, comme un poney ou un chien de monte."
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
                    "Vous émettez un coassement obsédant qui rappelle à ceux qui vous entourent leurs peurs. Faites un test d'Intimidation pour Démoraliser une créature dans les 9 mètres. Vous ne subissez pas de pénalité pour ce test du fait de ne pas partager une langue. Si le test est un succès, la cible ne peut réduire son état Effrayé en dessous de 1 pendant 1 round."
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
                    "Lorsque vous êtes sur un terrain difficile du fait d'une caractéristique environnementale, vous pouvez vous Mettre à l'abri , même si la caractéristique du terrain ne devrait pas normalement être suffisamment grande pour que vous puissiez vous Mettre à l'abri."
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
                    "Vos pouvoirs célestes vous permettent de supprimer les afflictions mineures avec facilité. Vous pouvez lancer Affliction purifiée deux fois par jour comme un sort inné divin de rang 4."
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
                    "Votre lien avec le Premier Monde s'est renforcée et les énergies de vitalité qui en proviennent affluent en vous rapidement. Si vous vous reposez pendant 10 minutes, vous obtenez une quantité de Points de vie égale à votre modificateur de Constitution multiplié par la moitié de votre niveau . C'est un effet de guérison de vitalité et il se cumule avec toute forme de soins reçus par Soigner les blessures ."
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
                    "Vous obtenez également le don Connaissance supplémentaire pour Connaissance des guenaudes."
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
                    "Vous obtenez également le don général Connaissance supplémentaire pour la Connaissance du Cimetière."
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
                    "Vous obtenez aussi le don général Connaissance supplémentaire en Connaissance du dragon."
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
                    "Vous obtenez également le don général Connaissance supplémentaire en Connaissance des elfes."
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
                    "Vous obtenez également le don général Connaissance supplémentaire en Connaissance des gobelins."
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
                    "Vous obtenez également le don général Connaissance supplémentaire en Connaissance des halfelins."
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
                    "Vous obtenez également le don général Connaissance supplémentaire en Connaissance des hobgobelins."
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
                    "Vous obtenez également le don général Connaissance supplémentaire en Connaissance des hommes-félins."
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
                    "Vous obtenez également le don général Connaissance supplémentaire en Connaissance des hommes-lézards."
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
                    "Vous obtenez également le don général Connaissance supplémentaire pour la Connaissance des Hommes-rats."
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
                    "Vous obtenez également le don général Connaissance supplémentaire en Connaissance des kholos."
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
                    "Vous obtenez également le don général Connaissance supplémentaire pour la Connaissance des kobolds."
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
                    "Vous obtenez également le don général Connaissance supplémentaire en Connaissance des léchis"
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
                    "Vous obtenez également le don général Connaissance supplémentaire en Connaissance des nains."
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
                    "Vous obtenez également le don Connaissance supplémentaire dans un sous-catégorie d'un plan dont votre lignée est originaire."
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
                    "Vous obtenez également le don général Connaissance supplémentaire pour la Connaissance des tengus."
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
                    "Vous obtenez également le don général Connaissance supplémentaire pour connaissance des tripkees."
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
                    "Vous obtenez également le don général Connaissance supplémentaire pour la Connaissance des vampires."
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
                    "Vous obtenez également le don général Connaissance supplémentaire en Connaissance des orques."
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
                    "Vous avez une un lien profond avec les Plans extérieurs, vous permettant de convoquer un allié divin. Une fois par jour, vous pouvez Lancer Convocation de céleste , Convocation de fiélon ou un autre sort divin de rang 5 capable de convoquer un être extraplanaire approprié à votre lignage,. Une fois par jour, vous pouvez lancer le sort choisi comme un sort divin inné de rang 5 mais la créature doit appartenir à la même catégorie que votre propre lignée, comme par exemple une créature ayant le trait ange si vous êtes de type angélique."
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
                    "Effet : Cosse"
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
                    "Vos attaques à mains nues létales laissent des entailles sanglantes ou provoquent des hémorragies internes sévères. Lorsque vous infligez un coup critique avec une Frappe en utilisant une attaque à mains nues qui n'a pas le trait non-létal, la cible subit 1d4 dégâts de saignement. Cela peut être lié au fait que vous avez accepté de subir la pénalité pour pouvoir utiliser votre poing pour porter une attaque létale ou que vous possédez plutôt une attaque à mains nues qui ne possède pas le trait non-létal à cause de Poings de fer , de Défenses ou d'une capacité similaire."
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
                    "Vous êtes adepte des déplacements à travers les terrains marécageux. Lorsque vous utilisez l'action Faire un pas, vous pouvez ignorer le terrain difficile causé par les inondations, les marais ou les sables mouvants. En outre, lorsque vous utilisez la compétence Acrobaties pour Garder l'équilibre sur des surfaces étroites ou sur un terrain marécageux instable, vous n'êtes pas Pris au dépourvu et si vous obtenez un succès sur le test d'Acrobaties, il devient un succès critique."
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
                    "Vous vous accrochez à un ennemi pour le harceler et obtenir sa soumission. Si votre cible se déplace alors que vous vous cramponnez à elle, vous pouvez choisir de vous déplacer avec la cible. La cible est relâchée si vous choisissez de ne pas vous déplacer avec elle, au début de votre prochain tour ou si la cible S'Échappe . Les tentatives pour s'échapper de Cramponné suivent les règles de S'échapper mais utilisent votre DD d'Acrobaties et mettent un terme à Cramponné au lieu de mettre un terme aux états qui s'achèvent habituellement grâce à l'action S'échapper.",
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
                    "Vous poussez un cri perçant. Chaque créature dans une émanation de 3 mètres subit 5d6 dégâts de son , avec un jet de Vigueur contre le plus élevé entre votre DD de classe ou votre DD de sort. Puis, vous Marchez rapidement et ce déplacement ne déclenche pas de réactions de la part des créatures qui ont obtenu un échec ou un échec critique sur leur jet de sauvegarde.",
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
                    "Tous les alliés dans les 9 mètres qui peuvent vous entendre un nombre de Points de vie temporaires égal à votre niveau. De plus, ces alliés sont Accélérés pendant 1 minute mais peuvent utiliser l'action supplémentaire seulement pour Faire un pas, Marcher rapidement ou Frapper."
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
                    "Vous avez appris quelques techniques magiques pour à la fois vous attirer et vous sortir des ennuis sans vous faire remarquer. Vous obtenez Magie déguisée et Silence comme des sorts innés arcaniques ou occultes de niveau 2. La tradition de ces sorts doit correspondre à la tradition que vous utilisez pour vos options d'ascendance gnome. Vous pouvez Lancer chaque sort une fois par jour et vous seul pouvez en être la cible."
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
                    "Ces avantages ne s'appliquent qu'aux effets dommageables entièrement subis durant le tour au cours duquel vous activez Dangereux abandon, comme courir à travers un Mur de feu . Les dégâts persistants et les états qui s'appliquaient antérieurement à votre tour produisent leurs effets normalement et, dès que votre tour se termine, vous êtes de nouveau sujet aux entières conséquences de tous les dangers qui vous menacent encore."
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
                    "Vous avez l'habitude de toujours être dans le passage des autres créatures qui tentent de se déplacer. Faites un test d' Acrobaties contre le DD de Réflexes d'une créature adjacente.",
                    "Effet : Danse homme-félin",
                    "Succès critique La créature cible obtient une pénalité de circonstances de -2 aux jets de Réflexes et est Prise au dépourvu jusqu'au début de votre prochain tour.",
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
                    "Lorsque vous partagez l'espace d'une créature en utilisant Danse sous les pieds, vos armes et vos attaques à mains nues au corps-à-corps obtiennent le trait croc-en-jambe, mais seulement à l'encontre de la créature dont vous partagez la case. Vous pouvez être dans le même espace qu'une créature de taille Grande ou supérieure qui est À terre , même si elle n'est pas votre alliée."
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
                    "Vous passez dans les pieds de vos ennemis en combat. Vous pouvez terminer une action réussie de Déplacement acrobatique dans l'espace d'un ennemi de taille Grande ou supérieure. De plus, lorsque vous faites usage de Pas vif, vous pouvez Faire un pas dans l'espace de l'ennemi déclencheur. L'ennemi doit avoir des membres ou vous permettre de disposer d'assez d'espace pour effectuer cette manœuvre, à la discrétion du MJ. Par exemple, vous pourriez partager une case avec un géant ou un dragon, mais pas avec une vase."
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
                    "Vous invoquez une parole sainte ou impie des royaumes de l'au-delà pour punir vos ennemis. Une fois par jour, vous pouvez Lancer Décret divin comme un sort divin inné au rang 7."
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
                    "Votre compréhension avisée des créatures naturelles et primordiales vous aide à prévoir et à esquiver leurs attaques. Le jet d'attaque déclencheur cible votre DD de Nature au lieu de votre CA. Bien que cela vous permette d'éviter de subir des pénalités à votre CA, cela ne supprime pas les états ou autres effets provoquant de telles pénalités. Par exemple, un ennemi doté d'une attaque sournoise vous infligera tout de même des dégâts supplémentaires parce que vous êtes Pris au dépourvu , même si vous ne subissez pas la pénalité de circonstances de -2 contre l'attaque."
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
                    "En utilisant d'antiques méthodes naines développées pour combattre des ennemis maniant l'obscurité magique, vous avez affiné votre vision dans le noir et avez juré de ne pas vous-même utiliser une telle magie. Vous obtenez vision dans le noir supérieure, vous permettant de voir au travers les ténèbres magiques même si elles empêchent normalement la vision dans le noir (comme les ténèbres créées par un sort de Ténèbres au rang 4). Vous ne pouvez pas lancer de sorts avec le trait ténèbres, utiliser des objets avec le trait ténèbres ou toute autre capacité possédant le trait ténèbres."
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
                    "Vous êtes exceptionnellement difficile à tuer. Le DD de vos tests de récupération est égal à 9 + votre valeur Mourante ou 8 + votre valeur Mourante si vous avez le don général Robustesse . De plus, lorsque quelqu'un vous ramène à la vie en utilisant la magie qui devrait normalement vous laisser diminué pendant une semaine (comme avec Rappel à la vie ou le rituel de Résurrection), vous ne subissez pas cet état."
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
                    "Si un non elfe obtient un échec pour vous Contraindre en utilisant Intimidation, il devient un échec critique (et ainsi ne peut plus tenter de vous contraindre de nouveau pendant 1 semaine).",
                    "Lorsqu'un non elfe tente de vous Démoraliser , vous êtes temporairement immunisé pendant 1 journée, au lieu de 10 minutes."
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
                    "La discrétion est un outil important dans votre arsenal. Vous pouvez vous déplacer de 1,50 mètre de plus lorsque vous utilisez l'action Être furtif , jusqu'à votre Vitesse maximale.",
                    "De plus, tant que vous continuez à utiliser les actions Être furtif et obtenez un succès à votre test de Discrétion, vous n'êtes pas Observé si vous n'avez pas d'abri standard ou d'abri important et n'êtes pas Masqué à la fin de l'action Être furtif, tant que vous disposez d'un abri ou d'un abri important ou que vous êtes Masqué à la fin de votre tour."
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
                    "Tentez un Déplacement acrobatique à travers l'espace d'un adversaire. Si vous obtenez un succès ou un succès critique et ne terminez pas votre mouvement adjacent à cet adversaire, vous pouvez tenter de Créer une diversion pour distraire cet adversaire. Vous obtenez un bonus de circonstances de +1 au test de Duperie (ou un bonus de circonstances de +2 si vous avez obtenu un succès critique au test d'Acrobaties sur votre Déplacement acrobatique) pour Créer une diversion. Si vous obtenez un succès ou un succès critique pour Créer une diversion, vous devenez Caché uniquement pour la créature dont vous avez traversé l'espace lors du Déplacement acrobatique."
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
                    "Lorsque votre personnage devrait mourir, vous pouvez tenter un Test nu, DD 17 . En cas de succès, vous êtes à la place réduit à 0 PV et avec une valeur mourante de 1 de moins de celle qui devrait normalement vous tuer (typiquement Mourant 3). Cela ne change pas le résultat pour toute autre créature affectée."
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
                    "Vous êtes qualifié en Artisanat. Si vous êtes déjà qualifié en Artisanat du fait d'une autre source (par votre historique ou votre classe par exemple), vous êtes qualifié à la place en une compétence de votre choix. Vous pouvez Réparer un objet sans utiliser de trousse de réparation sans subir la pénalité de circonstances de -2, en improvisant des outils avec ce qui vous tombe sous la main. Vous obtenez un bonus de circonstances de +1 à vos tests d'Artisanat pour Réparer un objet quand vous disposez d'une trousse de réparation."
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
                    "Votre pouvoir arcanique inné se manifeste sous la forme des sorts les plus couramment utilisés par votre modèle draconique. Choisissez un sort de rang 1 et un sort de rang 2 tirés de la liste d'un dragon incantateur du type de votre modèle draconique présentés dans le Bestiaire (tels qu' Alarme , Coup assuré , Flou ou Invisibilité pour un modèle dragon noir).",
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
                    "Votre magie rivalise avec celle des dragons inférieurs. Choisissez un sort de rang 3 et un sort de rang 4 parmi ceux listés pour un type de dragon incantateur du type de votre modèle draconique tels qu'ils figurent dans le bestiaire (comme Paralysie et Nuage puant pour un modèle dragon noir). Vous pouvez Lancer chacun de ces sorts une fois par jour comme un sort arcanique inné."
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
                    "Vous avez une capacité inné impressionnante pour apprivoiser et donner des ordres aux bêtes féroces. Vous êtes qualifié en Nature et obtenez le don général Animal de compagnie ou le don de compétence Dressage animalier ."
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
                    "Étendez la durée de l'état Aveuglé ou Ébloui que vous donnez à la cible de 1 round."
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
                    "Comme beaucoup de fiélons, vous avez la capacité surnaturelle de vous téléporter vous-même en sécurité. Une fois par jour, vous pouvez Lancer Translocation comme un sort inné divin de rang 5."
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
                    "Vous pouvez éluder le désastre surnaturel. Lorsque vous obtenez l'état Condamné , vous pouvez faire Test nu, DD 17 . En cas de succès, vous n'obtenez pas l'état Condamné."
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
                    "Vous maniez la magie primordiale. Vous pouvez lancer Flore enchevêtrante et Résilience du chêne comme des sorts innés primordiaux de rang 2 une fois par jour chacun."
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
                    "Vous vous fondez dans le décor avec une subtilité surnaturelle. Lorsque vous êtes Masqué ou Caché , augmentez le DD du test nu pour vous cibler à 6 si vous êtes Masqué et à 12 si vous êtes Caché."
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
                    "Vous avez appris à tirer parti des ouvertures dans les défenses de vos ennemis. Lorsque vous Frappez une créature Prise au dépourvu en utilisant une arme au corps-à-corps ou une attaque à mains nues qui possède les traits agile et finesse, elle obtient le trait traître."
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
                    "Vous obtenez le don Artisanat alchimique . Si vous devriez déjà avoir obtenu ce don automatiquement (par votre historique ou la classe d'alchimiste par exemple), vous obtenez à la place un don de compétence d'Artisanat de niveau 1 différent. Ajoutez une formule alchimique courante de niveau 1 à votre livre de formules quand vous prenez ce don. Chaque fois que vous gagnez un niveau au delà du niveau 1, ajoutez une formule alchimique courante de ce niveau à votre livre de formules."
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
                    "Votre Éventail à plumes tengu contient un sort de Gust of Wind de rang 1. D'autres dons peuvent vous accorder des sorts et des activations supplémentaires de votre Éventail à plumes tengu, mais vous n'avez droit qu'à trois activations maximum par jour, quel que soit le nombre de dons vous possédez.",
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
                    "Votre éventail lâche la furie de la tempête. Vous pouvez utiliser l'activation Agiter l'éventail une fois supplémentaire par jour. Ajoutez le sort Éclair au rang 5 aux sorts contenus dans votre éventail."
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
                    "Votre éventail peut même susciter des vents plus puissants. Vous pouvez utiliser l'activation Agiter l'éventail une fois supplémentaire par jour. Ajoutez le sort Mur de vent de rang 3 à la liste des sorts contenus dans votre éventail."
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
                    "Vos actions inspirent vos alliés et les poussent à se dépasser. À chaque fois que vous obtenez un succès critique à un test de compétence, vous pouvez automatiquement utiliser la réaction Aider pour apporter votre aide à un allié qui utilise la même compétence, sans avoir besoin d'utiliser une action pour vous s'apprêter à le faire."
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
                    "À chaque fois que vous obtenez une capacité de classe qui vous confère une maîtrise experte ou supérieure avec certaines armes, vous obtenez également cette maîtrise avec l'arme que vous avez choisie avec le don Armement non conventionnel ."
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
                    "Si vous obtenez un succès pour Vous faufiler , il devient un succès critique. Lorsque vous Vous faufilez, vous obtenez un bonus de circonstances de +4 au DD de vos jets de Vigueur et de Réflexes contre les tentatives de vous Pousser ou vous faire bouger de l'espace que vous occupez."
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
                    "Vos congénères vous ont donné le goût des armes qui frappent dur et vous les préférez à d'autres plus élégantes. Vous obtenez l'accès à toutes les armes peu courantes qui possèdent le trait nain. Vous êtes qualifié avec les armes possédant le trait nain et obtenez la maîtrise de la Hache d'armes , du Pic de guerre et du Marteau de guerre . Lorsqu'il s'agit de déterminer votre maîtrise, les armes de guerre naines sont des armes simples et les armes naines évoluées sont des armes de guerre.",
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
                    "Au combat, vous préférez les armes brutales qui sont traditionnelles pour vos ancêtres orcs. Vous avez accès à toutes les armes peu courantes qui possèdent le trait orc. Vous êtes familiarisé avec les armes qui possèdent le trait orc ainsi qu'au Cimeterre à deux mains et à la grande hache . Pour ce qui concerne la maîtrise, vous considérez celles de ces armes qui sont des armes de guerre orques comme des armes simples et n'importe laquelle de ces armes qui est évoluée comme une arme de guerre.",
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
                    "Effet : Pratique de l'épée"
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
                    "Vous avez une prédilection pour les arcs et les autres armes élégantes. Vous avez accès à toutes les armes peu courantes qui possèdent le trait elfe plus les Arcs longs , les Arcs longs composites , les Épées longues , les Rapières , les Arcs courts et les Arcs courts composites . Lorsque vous déterminez votre maîtrise, vous considérez chacune de ces armes qui est une arme de guerre comme une arme simple et chacune de ces armes qui est une arme évoluée comme une arme de guerre.",
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
                    "Vous avez une prédilection pour les armes halfelines et avez ainsi appris à les utiliser plus efficacement. Vous obtenez l'accès à toutes les armes peu courantes possédant le trait halfelin. Vous avez une familiarité avec les armes ayant le trait halfelin ainsi que la Fronde et l' Épée courte . En ce qui vous concerne votre maîtrise, vous considérez chacune de ces armes qui est une arme de guerre comme une arme simple et n'importe quelle de ces armes qui est évoluée comme une arme de guerre.",
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
                    "De plus, à chaque fois que vous subissez une pénalité de vitesse pour une autre raison (tel que celle découlant de l'état Surchargé ou provenant d'un sort), vous réduisez cette pénalité de 1,50 mètre. Par exemple, l'état surchargé vous inflige normalement une pénalité de Vitesse de -3 mètres, mais ce don la réduira à une pénalité de -1,50 mètre. Si votre Vitesse est affectée de plusieurs pénalités, seule celle que vous choisissez sera réduite."
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
                    "Déclencheur Vous utilisez Férocité orque",
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
                    "Vous résistez à l'étreinte de la mort avec une vigueur surnaturelle, défiant la mort d'oser vous réclamer et promettant qu'une telle tentative aboutira à un échec. Lorsque vous utilisez Férocité orque , vous obtenez des Points de vie temporaires égaux à votre niveau.",
                    "Effet : Férocité immortelle"
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
                    "La férocité au combat coule dans votre sang et vous refusez de succomber à vos blessures, aussi terribles soient-elles. Vous évitez d'être assommé et restez à 1 Point de vie et votre état Blessé augmente de 1."
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
                    "Vous conjurez des orbes étranges de flamme spirituelle qui flottent au-dessus ou eu-dessous de la surface de l'eau. Vous pouvez lancer le tour de magie Allumage comme un sort inné primordial à volonté, intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur. Votre sort Allumage prend la forme d'orbes de feu et vous pouvez le lancer sous l'eau."
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
                    "Vous lancez un miaulement d'avertissement, rappelant votre compagnon du bord de l'inconscience. Votre allié ne tombe pas et reste à 1 Point de vie. L'état Blessé de votre allié augmente néanmoins de 1 comme s'il avait été Mourant et avait récupéré."
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
                    "Effet : Fierté militaire"
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
                    "Échapper à vos filets n'est pas chose aisée. Le DD d'Athlétisme pour Ouvrir de force ou S'Échapper de vos filets passe de 16 à 18. Lorsqu'une créature que vous avez Agrippée avec un filet s'est échappée ou a ouvert de force le filet, les mailles du filet s'accrochent à la créature, la laissant Prise au dépourvu jusqu'au début de son prochain tour."
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
                    "Chaque fois qu'un ennemi débute son tour en vous étant adjacent, il doit tenter un jet de Volonté contre le plus élevé entre votre DD de classe ou DD de sort. En cas d'échec, l'ennemi subit une pénalité de statut de -1 aux jets d'attaque et aux tests de compétence tant qu'il vous reste adjacent. Quel que soit le résultat de son jet de sauvegarde, la créature est temporairement immunisée contre Fléau du gardien des os pendant 24 heures."
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
                    "Vous obtenez Mouvement sans entrave et Résilience du rocher en tant que sorts innés primordiaux de rang 4 que vous pouvez lancer une fois par jour. Avec une activité à 3 actions, vous pouvez Lancer un sort deux fois pour lancer à la fois les deux de ces sorts innés, tant qu'ils sont tous les deux toujours disponibles pour la journée."
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
                    "Vous pouvez vous transformer en une chauve-souris inoffensive. Vous obtenez les effets du sort Forme de nuisible au rang 4, sauf que vous vous transformez toujours en une chauve-souris."
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
                    "Vous pouvez brièvement vous transformer en un parangon de votre ascendance draconique. Vous pouvez lancer Forme de dragon en tant que sort inné de rang 8 une fois par jour. Ce sort possède la même tradition que votre modèle draconique. Lorsque vous lancez ce sort inné, vous devez vous transformer en votre modèle draconique. Cependant, si vous avez le don de lignée Sang-dragon arcanique , Sang-dragon divin , Sang-dragon occulte ou Sang-dragon primordial , vous pouvez choisir n'importe quel dragon de cette tradition à la place."
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
                    "Vous pouvez vous transformer en un rat apparemment inoffensif. Vous obtenez les effets du sort Forme de nuisible au rang 1 mais vous devez prendre la forme de combat d'un Très petit rat."
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
                    "Vous prenez la forme d'un imposant esprit ailé de taille Grande. Une fois par jour, dans le cadre de l'utilisation de Forme au long nez , vous obtenez aussi les avantages du sort Agrandissement au rang 4 et de Vol . Cela dure pendant 5 minutes ou jusqu'à ce que vous sortiez de votre forme à long nez, selon ce qui se produit en premier.",
                    "Effet : Forme du grand tengu"
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
                    "Le vent et les éclairs ont toujours été vos amis. Vous pouvez lancer le tour de magie Arc électrique comme un sort inné primordial à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur."
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
                    "Vous êtes compétent lorsqu'il s'agit de battre un ennemi lorsque son moral flanche. Lorsque vous obtenez un succès lors d'une Frappe avec une arme de corps-à-corps contre un ennemi Effrayé , cet ennemi ne peut réduire sa condition Effrayé en dessous de 1 jusqu'au début de votre prochain tour."
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
                    "Vous êtes toujours à l'affût de fournitures ou de choses de valeur. Vous obtenez un bonus de circonstances de +2 pour localiser les objets (incluant portes secrètes et pièges) que vous cherchez dans les 9 mètres avec l'action Chercher ."
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
                    "Si un adversaire d'une taille supérieure à la vôtre obtient un coup critique et vous fait subir des dégâts, cet adversaire est Pris au dépourvu par rapport à vous pendant 1 round."
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
                    "Lorsqu'une créature obtient un échec critique à son jet de sauvegarde et subit des dégâts de l'effet initial du piège artisanal, elle est Prise au dépourvu jusqu'à la fin de son prochain tour."
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
                    "Vous pouvez vous déplacer de votre Vitesse lorsque vous Êtes furtif ."
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
                    "Vous obtenez le don Représentation impressionnante . Lorsque vous faites un test de Représentation pour Faire bonne impression sur un elfe, lorsque vous obtenez un échec critique, il devient un échec."
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
                    "Vous pouvez Avaler la chance une fois par heure, plutôt qu'une fois par jour."
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
                    "Vos griffes portent la magie de votre mère guenaude. Lorsque vous obtenez un coup critique avec une Frappe de griffe, la cible subit 1d4 dégâts mentaux persistants supplémentaires."
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
                    "Vous avez un fétiche qui vous apporte la chance. Vous obtenez un bonus de circonstances de +1 aux jets de sauvegarde contre les sorts et effets magiques tout le temps, pas juste lorsque vous utilisez Superstition léchie . Si vous perdez votre porte bonheur, vous perdez le bonus jusqu'à ce que vous en désignez un nouveau, ce qui vous prend typiquement une semaine."
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
                    "Déclencheur Vous obtenez un succès en Cherchant une créature cachée ou non détectée .",
                    "Vous poussez un grognement sourd pour Démoraliser une créature que vous venez juste de débusquer. Vous ne subissez pas la pénalité de -4 liée au fait de ne pas partager de langue avec cette créature."
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
                    "Vous sentez le miel et les choses savoureuses. Si votre cible peut sentir votre haleine, vous avez un bonus de circonstances de +2 aux tests pour Faire bonne impression . De plus, vous pouvez lancer Discours captivant comme un sort inné occulte au rang 3 une fois par jour, sauf que le sort a une portée de 9 mètres et le trait olfactif au lieu du trait audible. Les cibles n'obtiennent aucun bonus de circonstances du fait de ne pas être d'accord avec vous."
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
                    "Vous avez été contraint à la servitude ou enchaîné dans une prison, mais vous vous êtes évadé et vous vous êtes entraîné pour vous assurer de ne plus jamais être pris. Quand vous obtenez un succès sur un test pour Vous échapper ou un jet de sauvegarde contre un effet qui vous mettrait dans l'état Agrippé , Immobilisé ou Entravé , il devient un succès critique.",
                    "Quand une créature obtient un échec au test pour vous Saisir , elle obtient un échec critique."
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
                    "Vous prêtez une grande attention aux gens qui vous entourent, vous permettant plus facilement de remarquer lorsqu'ils agissent de manière inhabituelle. Vous obtenez un bonus de circonstances de +2 à vos tests de Perception lorsque vous utilisez l'action basique Deviner les intentions afin de remarquer les personnages charmés ou possédés. Si vous n'êtes pas activement en train de tenter de Deviner les intentions d'un personnage charmé ou possédé, le MJ fait un test secret sans votre bonus habituel de circonstances, afin de déterminer si vous remarquez que cette créature est charmée ou possédée.",
                    "En plus de l'utiliser pour les tests de compétence, vous pouvez utiliser l'action basique Aider pour accorder un bonus à une autre créature qui fait un jet de sauvegarde ou un autre test afin de surmonter un enchantement ou une possession. Comme c'est le cas avec l'action Aider, vous devez être préparé à utiliser une action lors de votre tour pour encourager la créature à lutter contre l'effet."
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
                    "Vous êtes entouré d'un halo de lumière et de bonté qui émet de la lumière avec les effets d'un tour de magie divin de Lumière . Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au niveau supérieur. Vous pouvez Maintenir pour supprimer ou rétablir le halo."
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
                    "Vous obtenez le don général Improvisation inexpérimentée .",
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
                    "Votre taille et votre comportement font qu'il vous est aisé de convaincre les autres que vous ne leur voulez pas de mal. Vous obtenez le don de compétence Sollicitation éhontée . De plus, vous obtenez un bonus de circonstances de +1 aux tests d'initiative lorsque vous utilisez Duperie pour la déterminer."
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
                    "Vous vous recouvrez d'os spirituels de dinosaure pour devenir un dinosaure Très grand. Vous pouvez lancer Forme de dinosaure au rang 5 sur vous-même comme un sort inné une fois par jour."
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
                    "Vous obtenez les dons Consommable prescient et Planificateur prescient , sauf que vous retirez les objets de vos abajoues. Cela signifie que l'objet que vous récupérez doit tenir dans vos abajoues ; c'est généralement un objet d'Encombrement négligeable à moins que vous ne possédiez le don Abajoues ."
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
                    "Votre ricanement sinistre est un son d'avertissement et de menace. Vous obtenez le don de compétence Cri de guerre . Vous ne subissez pas de pénalité lorsque vous tentez de Démoraliser une créature qui ne comprend pas votre langue."
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
                    "Votre langue peut s'accrocher momentanément aussi facilement que vos mains. Tant que vous pouvez ouvrir librement la bouche, vous n'avez pas besoin d'avoir les mains libres pour Désarmer , Vous raccrocher in extremis , Repositionner ou faire un Croc-en-jambe .",
                    "Si vous possédez le don Longue langue , vous pouvez Désarmer, vous raccrocher in extremis, Repositionner ou faire un Croc-en-jambe avec votre langue à une distance supérieure de 1,50 mètre à votre allonge normale."
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
                    "Vous avez continué d'affiner les connaissances et compétences acquises au cours de votre vie. Quand vous choisissez une compétence dans laquelle devenir qualifié grâce à votre Longévité ancestrale , vous pouvez également choisir de devenir expert dans une compétence dans laquelle vous êtes déjà qualifié. Ceci dure jusqu'à ce que l'effet de Longévité ancestrale prenne fin.",
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
                    "Vous avez perfectionné votre capacité à entretenir toutes les compétences que vous avez apprises au cours de votre longue vie de sorte que vous n'êtes jamais véritablement inexpérimenté dans une compétence. Vous réfléchissez à vos expériences de vie, en modifiant la compétence que vous avez sélectionnée avec le cadre des dons Longévité ancestrale (et la compétence que vous avez sélectionnée avec Longévité experte si vous avez ce don)."
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
                        "Clarté d'esprit",
                        "Flamme continuelle",
                        "Forme humanoïde",
                        "Lumière révélatrice",
                        "Partage de vie ou",
                        "Remise sur pied"
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
                    "Vous pouvez puiser dans la magie qui court dans votre sang. Vous obtenez Forme animale (loup seulement, en utilisant les statistiques d'un canidé) et Brume comme des Sorts innés divins au rang 2. Vous pouvez lancer chacun de ces sorts une fois par jour."
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
                    "Votre relation avec les psychopompes vous donne le pouvoir de jeter un œil dans le futur proche et celui de protéger les corps des ravages de la mort-vivance. Vous pouvez Lancer Augure et Reposer en paix une fois par jour chacun comme des Sorts innés divins de rang 2."
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
                        "Discerner l'invisible",
                        "Fracassement",
                        "Magie déguisée",
                        "Paranoïa",
                        "Simulacre de vitalité",
                        "Invisibilité"
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
                    "Les sorts accessibles à tous les cercles sont Augure , Charme , Clairaudience , Clairvoyance , Déguisement illusoire et Message onirique .",
                    "Les sorts éligibles accordés par les plus prééminents types de guenaude sont :",
                    [
                        "Guenaude coucou Cauchemar , Ravages magiques",
                        "Guenaude de fer Cloué à terre , Ravages magiques",
                        "Guenaude doucereuse Charme , Malédiction du paria , Paroles mielleuses",
                        "Guenaude marine Forme humanoïde , Malédiction du marin , Marche sur l'eau"
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
                    "Vous pouvez lancer Messager animal une fois par jour comme un sort primordial inné. Lorsque vous le faites, l'animal qui répond est toujours un rat. S'il n'y a pas de rats à portée, le sort est perdu."
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
                    "Vous puisez dans la grandeur du bienfaiteur de votre terrier. Vous obtenez un nombre de Points de vie temporaires égal à votre niveau, pendant une durée de 1 minute. De plus, vous pouvez immédiatement tenter un test nu pour retirer chaque type de dégâts persistants qui vous affecte. Enfin, jusqu'au début de votre prochain tour, toute créature vous ciblant avec une attaque, un sort ou une capacité dommageable doit d'abord réussir un Test nu, DD 11 ou l'action est interrompue car la créature évite de poser les yeux sur votre majesté."
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
                    "Vous faites preuve d'un profond respect pour la pierre, avec laquelle vous vous sentez étroitement lié. Vous gagnez Uni à la pierre comme sort inné divin au rang 3 et vous pouvez le lancer une fois par jour.",
                    "Si vous possédez également le don ancestral Oeil du bâtisseur , vous pouvez tenter de repérer des irrégularités et des pièges dans les constructions de pierre qui demandent normalement un degré de maîtrise légendaire en Perception. Si vous possédez à la fois le don ancestral Oeil du bâtisseur et une maîtrise légendaire en Perception, lorsque vous n'êtes pas en train de Chercher et que le MJ fait un test secret afin de déterminer si vous remarquez des irrégularités dans les constructions en pierre, vous conservez le bonus acquis grâce à Oeil du bâtisseur et ne subissez pas la pénalité de circonstances de -2."
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
                    "Votre double nature humaine et orque vous donne une perspective unique qui vous permet de faire le lien entre les humains et de nombreuses créatures intelligentes que les humains considèrent comme des monstres. Vous obtenez un bonus de circonstances de +1 à vos tests de Diplomatie contre des créatures intelligentes non humanoïdes et contre les humanoïdes marginalisés par les sociétés humaines (à la discrétion du MJ, mais ceux-ci incluent généralement les géants, les gobelins, les kobolds et les orcs). Vous bénéficiez également de ce bonus à vos tests de Perception pour Deviner les intentions de ces créatures."
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
                    "La force de la pierre vous envahit si fortement qu'elle remplace votre robuste corps. Vous êtes Pétrifié jusqu'à la fin du tour en cours. Vous ne subissez aucun dégât de l'effet déclencheur ni aucun autre effet néfaste qui ne pourrait pas affecter la pierre."
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
                    "Vous pouvez vous transformer vous-même ou transformer les corps des autres pour exprimer votre déplaisir. Une fois par jour, vous pouvez Lancer soit Forme aérienne , soit Métamorphose maudite comme un sort inné primordial de rang 7. Vous devez prendre la forme d'un oiseau lorsque vous lancez cette Forme aérienne."
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
                    "Vous êtes qualifié en Survie. Si vous devriez déjà être qualifié en Survie (du fait de votre historique ou de votre classe par exemple ), vous êtes qualifié dans une autre compétence de votre choix. Lorsque vous Vous orientez ou tentez un jet de sauvegarde contre le sort Dilemme , vous considérez que le résultat est d'un degré supérieur à celui que vous avez obtenu. Vous ne subissez aucune pénalité lorsque vous Vous orientez sans utiliser de Boussole ."
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
                    "La magie en vous se manifeste sous la forme d'une réaction naturelle aux menaces. Un double illusoire apparaît dans votre espace pendant un court moment. L'adversaire déclencheur doit faire un Test nu, DD 10 . S'il obtient un succès, l'adversaire vous cible comme à l'ordinaire. S'il obtient un échec, l'adversaire cible votre double illusoire et le détruit. La tradition de cette action correspond à la tradition des options de votre ascendance gnome."
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
                    "Vous pourriez avoir un caractère fantasque mais quand un sujet capte votre attention, vous vous y plongez la tête la première. Vous obtenez le don Connaissance supplémentaire et le don Assurance pour la Connaissance choisie. Comme l'obsession gnome peut s'éteindre aussi vite qu'elle est apparue, vous pouvez réapprendre Obsession gnome pour une sous-catégorie différente en y consacrant 1 journée d'intermède."
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
                    "Votre puissant ego rend plus difficile aux autres de vous donner des ordres. Si vous obtenez un succès sur un jet de sauvegarde contre un effet mental qui vise à contrôler directement vos actions, il devient un succès critique. Si une créature obtient un échec sur un test pour vous Contraindre en utilisant Intimidation, il devient un échec critique (elle ne peut donc pas tenter de vous Contraindre de nouveau pendant 1 semaine)."
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
                    "Vous êtes qualifié en Artisanat et obtenez un bonus de circonstances de +1 à tous les tests d'Artisanat faits pour vous Souvenir . Si vous devriez automatiquement être qualifié en Artisanat (par le biais de votre historique ou de votre classe, par exemple), vous êtes qualifié dans une autre compétence de votre choix à la place.",
                    "De plus, vous obtenez le don de compétence Évaluation artisanale , vous permettant d'identifier les objets magiques en utilisant la compétence Artisanat."
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
                    "Vous avez le don de remarquer les plus petites irrégularités et d'identifier les techniques artisanales dans les constructions de pierre. Vous devenez qualifié en Artisanat. Si vous êtes déjà qualifié en Artisanat, vous gagnez Artisanat spécialisé en maçonnerie.",
                    "Vous obtenez également un bonus de circonstances de +2 à vos tests de Perception pour remarquer les irrégularités dans les constructions en pierre. Ce bonus s'applique à vos tests pour découvrir des pièges mécaniques de pierre ou Cachés par de la pierre.",
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
                    "Déclencheur Vous réussissez à utiliser Discrétion pour Vous cacher et devenir Caché de tous vos adversaires actuels ou vous utilisez Discrétion pour Être furtif et devenir Non détecté de tous vos adversaires actuels.",
                    "Vous échappez à l'attention de vos adversaires et semblez être ailleurs. Vous devenez Invisible pendant 1 minute ou jusqu'à ce que vous entrepreniez une action hostile, en fonction de ce qui se produit en premier. Choisissez un lieu dans les 3 mètres de vous. Jusqu'à ce que votre invisibilité cesse, vous semblez vous être caché à cet endroit pour quiconque essaie de vous trouver. Si celui qui vous cherche obtient la démonstration irréfutable que vous n'êtes pas caché à cet endroit, il ne pense plus que vous y êtes caché mais il ne découvre pas votre position actuelle."
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
                    "Il est difficile de remarquer votre passage à travers les zones sauvages. Tant que vous n'êtes pas dans un environnement urbain, vous êtes toujours considéré comme étant en train de Dissimuler des traces , même si vous choisissez une activité différente en mode exploration."
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
                    "Vous avez appris à rester caché en utilisant les personnes plus grandes comme distraction pour éviter d'attirer l'attention. Vous pouvez utiliser les créatures qui sont au moins d'une catégorie de taille supérieure à la vôtre (généralement Moyenne ou supérieure) comme abri pour Vous cacher et Être furtif , mais vous ne pouvez pas utiliser ces créatures comme abri pour d'autres raisons, comme pour vous Mettre à l'abri ."
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
                    "Vous excellez à ne pas vous faire remarquer, spécialement au milieu d'une foule. Vous n'avez plus besoin d'abri ou d'être Masqué pour Vous cacher ou Être furtif . Si vous bénéficiez d'un abri partiel conféré par une créature, vous le considérez comme un abri standard à la place et vous pouvez vous Mettre à l'abri . Si vous obtenez un abri standard grâce à une créature, vous bénéficiez d'un abri important à la place."
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
                    "Vous entendez les sons des animaux comme des conversations et non comme des bruits inintelligibles et vous pouvez y répondre en retour. Vous pouvez poser des questions aux animaux, recevoir des réponses de leur part et utiliser la compétence Diplomatie avec les animaux. Dans la plupart des cas, les animaux sauvages vous laisseront le temps d'exposer votre point de vue. Vous bénéficiez d'un bonus de circonstances de +1 pour leur Faire bonne impression ."
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
                    "Faites un Test nu, DD 17 . Si vous obtenez un succès, l'attaque devient un coup normal."
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
                    "Une fois par jour, vous pouvez lancer Pique empaleuse comme sort occulte inné de rang 7, sauf que la pique est constitué d'os plutôt que de fer froid. Cet os possède les effets de la rune de propriété spectrale et peut Immobiliser les créature intangibles comme si elles étaient tangibles."
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
                    "Vous êtes en harmonie avec les moindres sons et sensations des esprits qui n'ont pas trouvé le repos. Même si vous n'êtes pas en train de Fouiller , vous pouvez essayer de tenter de trouver les hantises qui nécessitent normalement que vous les Cherchiez activement. Vous avez toujours besoin de remplir les autres conditions pour trouver la hantise. Vous obtenez un bonus de circonstances de +1 à vos tests pour désactiver les hantises."
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
                    "Vous Faites un pas, puis vous Vous cachez ou Êtes furtif . Vous avez toujours besoin de remplir les conditions pour Vous cacher ou Être furtif, comme à l'ordinaire."
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
                    "Vous êtes un expert pour éviter les pas pesants des créatures plus grandes. Vous Faites un pas vers une autre case adjacente à l'ennemi."
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
                    "Vous n'autorisez pas les autres à vous entraver. Vous pouvez Lancer Mouvement sans entrave sur vous-même comme un sort primordial inné une fois par jour."
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
                    "Les obstacles en terre ne peuvent plus empêcher votre progression. Vous obtenez Passage magique comme un sort divin inné au rang 7 que vous pouvez lancer une fois par jour. Contrairement au sort, quoi qu'il en soit, cette capacité ne peut être utilisée que pour ouvrir des passages à travers des barrières de terre ou de pierre."
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
                    "Vous travaillez à un rythme issu de votre longévité qui améliore votre minutie. Vous pouvez ainsi volontairement passer deux fois plus de temps que la normale à faire un test de Perception ou de compétence qui prend au moins 1 action. Si vous le faites, vous bénéficiez d'un bonus de circonstances de +2 à ce test et ne réduisez pas nécessairement d'un cran le résultat d'un 1 naturel (vous n'obtenez un échec critique que si votre résultat est inférieur de 10 points au DD). Par exemple, vous pouvez profiter de ces avantages en utilisant 2 actions pour Chercher , ce qui nécessite normalement 1 action. Vous pouvez obtenir ces avantages en mode exploration en passant deux fois plus de temps que la normale à explorer ou lors d'un intermède en passant deux fois plus de temps d'intermède.",
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
                    "Vous avez plus de chance que la plupart des hommes-félins. Vous pouvez déclencher Chance féline lorsque vous obtenez un échec ou un échec critique à jet de Vigueur ou de volonté, un test avec les compétences Athlétisme ou Acrobaties, en plus des jets de sauvegarde de Réflexe. Vous ne pouvez toujours utiliser la Chance féline qu'une fois par jour."
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
                    "Les cicatrices glorieuses et chargées d'histoires couvrent et protègent une grande partie de votre corps, vous ceignant d'une armure de chair qui résiste à toute blessure plus faible que celles auxquelles vous avez déjà survécu. Votre DD pour les tests nus mettant un terme aux dégâts de saignement passe de 15 à 10 ou de 10 à Test nu, DD 5 si vous avez reçu une assistance particulièrement appropriée."
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
                    "Vous êtes né avec une couche d'écailles sur votre corps entier qui ressemble à celui de votre géniteur draconique. Lorsque vous ne portez pas d'armure, les écailles vous donnent un bonus d'objet de +1 à la CA avec un Maximum de dextérité de +3. Le bonus d'objet passe à +2 au niveau 5. Le bonus d'objet à la CA de ces écailles est cumulable avec les runes de puissance d'armure de vos vêtements d'explorateur, le sort Armure mystique ou des Bandes de force .",
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
                    "Comme nombre d'humains élevés dans des communautés soudées, vous avez toujours été étroitement accoutumé à la présence des autres. Les alliés consentants dont vous êtes conscient dans les 18 m qui devraient autrement être Non détectés par vos soins, vous sont à la place simplement Cachés . Le test nu pour que vous puissiez cibler les alliés le souhaitant dans les 18 m est qui vous sont cachés est de Test nu, DD 5 au lieu de 11."
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
                    "L'être humain est réputé pour sa capacité à persévérer dans les épreuves les plus éprouvantes, que d'autres seraient prêts à abandonner. Lorsque vous devriez devenir Fatigué , faites un Test nu, DD 17 . En cas de succès, vous n'êtes pas fatigué.",
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
                    "Qu'il s'agisse de conserver l'équilibre ou d'escalade, vos pieds montrent aisément leur utilité. Si vous obtenez un succès sur un test d'Acrobaties pour Garder l'équilibre ou sur un test d'Athlétisme pour Escalader , il devient un succès critique. Vous n'êtes pas Pris au dépourvu quand vous tentez de Garder l'équilibre ou d'Escalader."
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
                    "Vous êtes adepte de l'art ancestral kobold honoré depuis des lustres de fabrication des pièges. Vous êtes qualifié en Artisanat. Si vous devriez l'être par un autre biais, vous devenez qualifié en une autre compétence de votre choix à la place. Vous avez accès à tous les pièges peu courants des kobolds. Vous obtenez le don Fabrication de pièges artisanaux , mais pour les formules obtenues par ce don, vous pouvez aussi choisir parmi les pièges artisanaux peu courants des kobolds en plus des pièges artisanaux courants."
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
                    "Vous profitez du déplacement de votre allié pour ajuster votre position. Vous Faites un pas ."
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
                    "Chaque fois que vous réussissez à Frapper une créature qui n'a pas agi au premier round de combat, cette créature est Prise au dépourvu jusqu'à la fin de votre prochain tour. Si cette créature est réduite à 0 Point de vie avant la fin de votre prochain tour, vous et tous vos alliés dans un rayon de 9 mètres de la créature êtes Accéléré jusqu'à la fin de votre prochain tour. Vous ne pouvez utiliser l'action supplémentaire que pour Faire un pas, Marcher rapidement ou Frapper."
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
                    "De plus, lorsque vous tentez de Démoraliser un ennemi de votre niveau ou inférieur, vous obtenez un bonus de circonstances de +1 au test d'Intimidation."
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
                    "Le sang des héros court dans vos veines et vous inspirez vos alliés à puiser en profondeur et y trouver un nouveau niveau de résolution. Vous accordez à 10 créatures consentantes au maximum situées dans les 9 mètres les effets d'un sort de Conviction zélée au rang 6, bien que l'effet se termine automatiquement sur une cible à laquelle vous donnez un ordre qu'elle trouverait normalement répugnant. Cette action possède les traits audible ou visuel, en fonction de la manière dont vous inspirez vos alliés."
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
                    "En adoptant une posture impressionnante, toute la force de votre personnalité frappe les êtres inférieurs. Chaque créature dans une émanation de 6 mètres doit tenter un jet de Volonté contre le plus élevé entre votre DD de classe ou DD de sort. Quel que soit le résultat du jet de sauvegarde, la créature est temporairement immunisée contre votre Présence majestueuse pendant 24 heures.",
                    "Succès critique La créature n'est pas affectée.",
                    "Succès La créature est Effrayée 1 .",
                    "Échec La créature est Effrayée 2 .",
                    "Échec critique La créature est Effrayée 4 ."
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
                    "Vous vous agrippez aux murs avec une poigne surnaturelle. Vous obtenez le don Combattant grimpeur comme don bonus, et si vous obtenez un succès sur un jet d'Athlétisme pour grimper, il devient un succès critique.",
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
                    "Vous faites appel à l'essence vitale de votre esprit pour redonner de la vie à vos alliés et invoquez des lianes pour piéger et frapper vos ennemis. Vous pouvez lancer Champ de vie et Entraves végétales comme un sort primordial inné de rang 6 une fois par jour chacun."
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
                    "Survivre en terrain hostile vous a donné un grand talent pour vous déplacer. Lorsque vous obtenez un succès sur un test d'Athlétisme pour Escalader ou Nager , il devient un succès critique."
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
                    "De petites racines sortent de vos pieds, vous rendant plus stable lorsque vous vous déplacez. Vous obtenez le don de compétence Équilibre stable , même si vous n'êtes pas qualifié en Acrobaties et vous pouvez utiliser l'action S'ancrer ."
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
                    "Vous vous transformez en une énorme hyène d'un autre monde. Vous pouvez lancer Forme Animale (forme canine uniquement) une fois par jour comme un sort inné occulte au rang 5."
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
                    "L'énergie revitalisante qui coule dans vos veines vous revitalise. Vous récupérez ternary(gte(@actor.level,15),6,4)d6 soins et obtenez 10 Points de vie temporaires qui durent 1 minute. Au niveau 15, vous récupérez à la place 6d6 Points de vie et obtenez 15 Points de vie temporaires."
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
                    "Ghoran La chaleur et la lumière du soleil vous donnent la vie. Si vous vous reposez à l'extérieur pendant 10 minutes au cours de la journée, vous regagnez un nombre de Points de vie égal à votre modificateur de Constitution multiplié par la moitié de votre niveau . Vous obtenez cet avantage en plus des soins apportés par Soigner les blessures .",
                    "Léchi Si vous vous reposez en extérieur pendant 10 minutes durant la journée, vous regagnez des Points de vie égaux à votre modificateur de Constitution multiplié par la moitié de votre niveau . Vous obtenez ce bénéfice en plus des soins apportés par Soigner les blessures . Les léchis issus de plantes dont l'alimentation ne dépend pas de la photosynthèse nécessitent un environnement adapté. Par exemple les léchis fongiques ont besoin d'obscurité, d'environnements humides et d'une pile de matière organique en décomposition."
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
                    "Déclencheur Vous perdez l'état Mourant .",
                    "Vous récupérez des expériences de mort imminente grâce à une résilience époustouflante. N'augmentez pas la valeur de votre état Blessé liée à la perte de l'état Mourant."
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
                    "L'énergie qui coule dans votre sang peut préserver une vie dans les temps les plus difficiles. Vous empêchez la créature de mourir et lui restaurez 6d8 + votre modificateur de Constitution Points de vie. Vous ne pouvez pas utiliser la Récupération cantorienne si l'effet déclencheur est un effet de mort ou un effet qui ne laisse aucun reste, tel que la Désintégration ."
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
                    "Votre lignage descend des diables, des comploteurs des Enfers. Vous êtes aussi compétent pour remarquer des mensonges et trouver des tournures alambiquées que vous l'êtes pour les construire. Vous êtes qualifié en Duperie et en Connaissance des Lois. Si vous étiez déjà qualifié en Duperie (par votre historique ou votre classe, par exemple), vous devenez qualifié dans une compétence de votre choix. Vous obtenez également le don de compétence Ose me mentir ."
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
                    "Votre lignée remonte à un daemon, une des manifestations des horribles formes de la mort qui dévorent les âmes au sein du royaume dément d'Abaddon. Il en résulte que vous vous cramponnez avec ténacité aux derniers lambeaux de votre force vitale. Vous obtenez le don Dur à cuir ."
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
                    "La relation entre vous et le Premier monde résonne dans votre corps plus fort qu'il ne le fait pour la plupart des gnomes, vous permettant de franchir la frontière entre l'Univers et le Premier Monde. Vous obtenez Téléportation interplanaire comme un sort inné primordial. Vous pouvez le lancer deux fois par semaine. Il ne peut être utilisé que pour aller dans le Premier Monde et pour revenir dans l'Univers. Compte tenu de la résonance naturelle de votre corps, vous pouvez agir comme un locus pour le sort et vous n'avez pas besoin d'un diapason."
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
                    "Votre contrôle sur votre essence vitale vous permet ou permet à un allié de récupérer de graves blessures. Vous pouvez lancer Régénération au rang 7 comme un sort inné primordial une fois par jour."
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
                    "Lorsque vous terrorisez vos ennemis, vous leur causez une détresse morale douloureuse. Lorsque vous réussissez à Démoraliser un ennemi, ce dernier subit 1d4 dégâts mentaux au début de chacun de ses tours tant qu'il reste Effrayé et continue à engager le combat avec vous. Cet effet se termine si la créature perd l'état Effrayé, si elle se trouve à plus de 9 mètres de vous ou qu'une minute ne s'écoule, selon ce qui se produit en premier. Si vous êtes maître en Intimidation, les dégâts passent à 2d4 et si vous êtes légendaire, les dégâts passent à 3d4."
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
                    "Le type de dégâts correspond typiquement à l'entité extraplanaire associée à votre lignée. Par exemple, un personnage de type Angélique pourrait choisir une résistance contre le froid alors qu'un Rejeton infernal pourrait choisir une résistance contre le feu."
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
                    "Votre héritage crépusculaire vous permet d'étendre la protection contre l'énergie du vide. Vous obtenez une résistance 5 contre le vide et, une fois par jour, vous pouvez Lancer False Vitality au rang 5 comme un sort divin inné."
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
                    "Il faut être très courageux pour pénétrer dans la forêt hantée par le rire où vous habitez. Vous pouvez lancer Ventriloquie une fois par jour comme un sort inné occulte au rang 1."
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
                    "Votre rire fit écho dans les esprits de vos ennemis. Vous pouvez Démoraliser les créatures jusqu'à 18 mètres de distance. De plus, chaque fois que vous réussissez à Démoraliser une créature, elle subit 3d8 dégâts mentaux (ou 6d8 dégâts mentaux sur un succès critique)."
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
                    "Vous pouvez temporairement revenir à une forme moins voyante sans amoindrir vos sens. Vous prenez la forme d'un spécimen ordinaire du type de plante ou de champignon qui vous ressemble le plus, retrouvant l'apparence de votre corps juste avant que votre esprit ne se soit joint à lui. Les autres effets sont ceux du sort Uni avec les plantes , sauf que votre taille reste Petite."
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
                    "Votre robustesse vous permet d'endurer plus de dégâts avant de vous avouer vaincu. Ajoutez votre niveau à votre maximum de Points de vie. Lorsque vous avez l'état Mourant 1 , le DD de vos tests de récupération est de 9 + l'intensité de votre état Mourant (au lieu de 10 + la valeur de l'état Mourant).",
                    "Si vous possédez aussi le don Robustesse , les Points de vie obtenus grâce à ces dons sont cumulatifs et le DD de vos tests de récupération est égal à 6 + l'intensité de votre état Mourant."
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
                    "Vous pouvez utiliser l'activité d'exploration Reconnaissance en même temps que l'activité d'exploration Échapper aux regards ."
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
                    "Effet : Rotule"
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
                    "Votre vous mettez en boule et vous déplacez jusqu'à quatre fois votre Vitesse en ligne droite dans le sens d'une pente. Si vous atteignez le bas de la pente ou touchez un obstacle durant le premier tour du déplacement, vous arrêtez de rouler sans vous faire mal. Autrement, vous continuez automatiquement à rouler à cette Vitesse durant les tours suivants jusqu'à ce que vous atteignez le bas de la pente ou qu'un obstacle mette fin à ce déplacement (ce qui peut se produire au milieu de votre tour). Vous êtes Ralenti 2 à chaque tour après le premier qui vous a vu rouler et si vous touchez un obstacle lors d'un tour consécutif au premier, vous et l'obstacle subissez 4d6 dégâts contondants et vous arrêtez de rouler."
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
                    "Votre carrure de nain vous permet de repousser vos adversaires alentour à la manière d'un puissant rocher fonçant à travers une caverne souterraine. Faites un pas dans la case d'un adversaire dont la taille est inférieure ou égale à la vôtre et l'ennemi doit se déplacer dans l'espace vide se trouvant directement derrière lui. L'adversaire peut tenter un jet de Vigueur contre votre DD d'Athlétisme afin de vous empêcher de Faire un pas. S'il tente ce jet de sauvegarde, il subit une quantité de dégâts contondants égale à votre niveau plus votre modificateur de Force, à moins qu'il n'obtienne un succès critique.",
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
                    "Vous transportez avec vous les os de vos ancêtres et vous pouvez leur demander conseil. Vous pouvez lancer Augure deux fois par jour comme des sorts occultes innés au rang 2."
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
                    "Votre sang fraîchement répandu est sanctifié avec des effets similaires à ceux de l' Eau bénite . Lorsqu'un fiélon, un mort-vivant ou une créature ayant une faiblesse contre les boissons saintes boit votre sang ou vous inflige des dégâts perforants ou tranchants avec des mâchoires, des crocs ou une attaque similaire, cette créature subit 1d6 dégâts spirituels saints . Vous obtenez un bonus de circonstances de +4 aux tests d'Artisanat pour Fabriquer de l'eau bénite en utilisant votre propre sang comme ingrédient."
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
                    "On dit que la chair du côté droit d'une hyène peut guérir les maladies, mais que celle du côté gauche est mortelle et toxique. Vous pouvez subir 1 point de dégât tranchant pour nourrir quelqu'un du sang de votre côté droit et Prodiguer les premiers soins ou subir 2d8 dégâts pour Soigner les maladies ou Soigner les blessures ; dans les deux cas, vous n'avez pas besoin de trousse du guérisseur et obtenez un bonus d'objet de +1 à votre test. Le sang provenant de votre côté gauche entraîne un échec critique automatique du test."
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
                    "On dit que la chair du côté droit d'une hyène peut guérir les maladies, mais que la chair du côté gauche est mortelle et empoisonnée. Vous vous infligez 1 dégât tranchant pour empoisonner une arme que vous tenez. Si vous touchez avec l'arme et infligez des dégâts, la cible subit également 1d4 dégâts de poison persistants . Le poison sur votre arme devient inerte après que vous ayez touché ou à la fin de votre prochain tour, selon ce qui se produit en premier.",
                    "Effet : Sang de la main gauche"
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
                    "Vous descendez d'un dragon qui maîtrisait réellement des capacités magiques, tel qu'un dragon fortuné ou un dragon mirage. Comme tel, vous pouvez instinctivement appréhender les complexités de la magie. Vous êtes qualifié en Arcanes. Si vous devriez déjà être qualifié en Arcanes (par votre historique ou votre classe, par exemple), vous êtes qualifié à la place dans une compétence de votre choix. Vous obtenez le don de compétence Sens arcanique . Si vous choisissez un modèle draconique, vous devez choisir un dragon arcanique."
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
                    "Votre sang contient un minuscule fragment d'une puissance inhabituelle ou inexplicable d'un mystérieux dragon, tel qu'un dragon conspirateur ou dragon des présages. Vous êtes attiré par les parties les plus étranges du monde et pouvez généralement les remarquer au premier regard. Vous êtes qualifié en Occultisme. Si vous étiez déjà automatiquement qualifié en Occultisme (par votre historique ou votre classe, par exemple), vous êtes à la place qualifié en une compétence de votre choix. Vous obtenez le don de compétence Identification de bizarreries . Si vous choisissez un modèle draconique, vous devez choisir un dragon occulte."
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
                    "Vous pouvez résister à une perte de sang étonnamment bien. Lorsque vous devriez obtenir l'état Drainé , vous pouvez tenter un Test nu, DD 17 . Sur un succès, vous n'obtenez pas l'état Drainé."
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
                    "Vous utilisez rapidement votre élan pour faire basculer et rebondir sur vos ennemis. Vous pouvez utiliser Saut de mur pour faire des sauts supplémentaires sur des créatures plus grandes que vous comme s'il s'agissait de murs. Une fois par tour, lorsque vous faites un saut supplémentaire pour rebondir sur une créature de cette manière, vous pouvez également tenter de la Pousser ou de lui faire un Croc-en-jambe par une action gratuite."
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
                    "Vous pouvez Bondir en utilisant 2 actions pour doubler la distance que vous pouvez franchir verticalement ou Sauter en utilisant 3 actions pour tripler la distance que vous pouvez franchir verticalement.",
                    "Vous n'échouez pas automatiquement lorsque vous effectuez un Saut en longueur dans une direction différente de celle de votre Marche rapide."
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
                    "Lorsque vous êtes en exploration, lorsque vous dirigez et que vos alliés sont en train de Suivre l'expert , plutôt que d'accorder un bonus de circonstances de +2 à la compétence concernée, vous accordez un bonus de circonstances de +3 si vous êtes expert et de +4 si vous êtes maître."
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
                    "Vous essayez de Feinter une créature. Contrairement à une Feinte normale, la créature doit être à 9 m au lieu d'être dans votre allonge et vous faites votre test contre son DD de Volonté au lieu de son DD de Perception."
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
                    "Effet : Sieste féline"
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
                    "En puisant dans la physiologie de votre ancêtre draconique, vous pouvez exhaler un torrent d'énergie dans un cône de 4,50 mètres ou sur une ligne de 9 mètres , infligeant 1d4 dégâts. Chaque créature dans la zone doit tenter un jet de sauvegarde basique contre le plus élevé entre votre DD de classe ou votre DD de sort. Vous ne pouvez pas utiliser de nouveau cette capacité pendant 1d4 rounds .",
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
                    "Vous canalisez la puissance de votre modèle draconique en une projection d'énergie qui se manifeste sur une ligne de 9 mètres ou un cône de 4,50 mètres , infligeant 1d4 dégâts . Chaque créature dans la zone doit faire un jet de sauvegarde basique contre le plus élevé entre votre DD de classe et votre DD de sort. Vous ne pouvez plus utiliser cette capacité de nouveau pendant 1d4 rounds .",
                    "Au niveau 3 puis tous les 2 niveaux par la suite, les dégâts augmentent de 1d4. La forme du souffle, le type de dégâts et le jet de sauvegarde correspondent à ceux de votre Modèle draconique . Cette capacité possède le trait associé avec le type de dégâts qu'il inflige.",
                    "Vigueur Réflexes"
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
                    "Effet : Stratégie de la montagne (Touché par un coup critique)"
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
                    "Les vestiges des pouvoirs de domination de votre parent vous ont laissé avec une compréhension de la façon dont les intentions d'une créature changent son comportement. Vous obtenez un bonus de circonstances de +1 aux tests de Perception pour Deviner les intentions et les DD de Perception contre les tentatives pour vous Mentir ."
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
                    "Vous faites appel aux liens familiaux que vous partagez avec vos alliés et les autres hommes-rats pour devenir une force écrasante au combat. Vous pouvez lancer Agrandissement comme un sort inné primordial au rang 6 une fois par jour."
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
                    "La manière dont vous vous êtes entraîné à vous tasser ou à faire les yeux de chien battu provoque une réponse empathique de la part de votre agresseur. Faites un test de Diplomatie contre le DD de Volonté de l'agresseur.",
                    "Succès critique La créature retient son attaque, gâchant cette action et ne peut utiliser d'action hostile à votre encontre jusqu'au début de son prochain tour.",
                    "Succès La créature subit une pénalité de circonstances de -2 aux dégâts de la Frappe déclencheuse et à toutes les Frappes contre vous jusqu'au début de son prochain tour. La pénalité est de –4 si vous êtes un expert en Diplomatie, de -6 si vous êtes un maître et de -8 si vous êtes légendaire.",
                    "Effet : Supplique empathique",
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
                    "Vous invoquez la puissance divine pour accorder une bénédiction sur vos alliés ou une malédiction sur vos ennemis. Choisissez soit Bénédiction offensive , soit Imprécation . Vous pouvez choisir ce sort une fois par jour comme un sort divin inné de rang 1."
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
                    "Déclencheur Vous perdez l'état Inconscient .",
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
                    "La longue vie des elfes leur a permis de voir des civilisations émerger et s\"écrouler, souvent entre les mains de forces extérieures. Il en résulte qu'ils ont développé une prudence à l'encontre de ceux qui pourraient chercher à les influencer ou à les contrôler. Vous avez été entraîné à résister à de telles manipulations, obtenant un bonus de circonstances de +2 aux jets de sauvegarde contre les effets qui permettraient de vous contrôler, comme Domination et au tests de Perception pour Deviner les intentions lorsque vous essayez de déterminer si une créature est sous l'influence d'un tel effet. Lorsque vous obtenez un succès sur un jet de sauvegarde contre un tel effet, il devient un succès critique."
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
                    "Vous êtes issu d'un moroi, le plus commun des vampires et vous partagez leur vigueur surnaturelle et leur pouvoir de persuasion. Lorsque vous avez l'état Drainé , calculez la pénalité à vos jets de Vigueur et la réduction de vos Points de vie comme si la valeur de l'état était inférieure de 1. Vous êtes qualifié en Diplomatie. Si vous devriez déjà être automatiquement qualifié, vous êtes qualifié dans une compétence de votre choix."
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
                    "Vous puisez dans le sang de vos ennemis pour qu'il vous accorde de la vigueur. Une fois par jour, vous pouvez Lancer Saignée du vampire comme un sort divin inné au rang 7."
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
                    "Vous êtes adepte du travail avec vos alliés pour entourer un ennemi. Si un ennemi est dans votre allonge et dans celle d'au moins deux de vos alliés, cet ennemi est Pris au dépourvu pour vous."
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
                    "Lorsque vous subissez des dégâts persistants ou que votre valeur Blessé est de 1 ou supérieure, vous obtenez un bonus de circonstances de +2 aux jets de Vigueur."
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
                    "Vous obtenez Rapidité comme un sort arcanique inné au rang 3 que vous ne pouvez lancer que sur vous-même. Vous pouvez Lancer ce sort une fois par jour."
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
                    "Votre sang résonne du pouvoir libérateur des azatas, incarnations vivantes de la liberté du royaume sauvage de l'Élysée. Vous obtenez un bonus de circonstances de +1 pour Vous échapper . Lorsque vous obtenez un échec critique sur un test pour Vous échapper, il devient un échec et lorsque vous obtenez un succès, il devient un succès critique."
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
                    "Vous entrez en hibernation pendant 24 heures et accomplissez un rituel dédié à vos ancêtres, entreprenant une métamorphose unique. Vous obtenez de manière permanente les effets du sort Agrandissement et vos Points de vie maximum augmentent de votre niveau. Le rituel transforme la plupart de votre équipement à la taille appropriée à votre nouveau corps (bien que des objets puissants comme des artefacts ou des objets fortement liés à leur taille originelle puissent ne pas se transformer à la discrétion du MJ)."
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
                    "Les embuscades sont une tradition kholo honorée. Vous gagnez la prouesse Traqueur de terrain et pouvez étendre ses effets à un seul allié tant qu'il reste dans un rayon de 6 mètres de vous. Si vous avez êtes maître en Discrétion, vous pouvez étendre l'effet à deux alliés. Si vous êtes légendaire en Discrétion, vous pouvez étendre l'effet à quatre alliés."
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
                    "En outre, tant que vous continuez d'enchaîner les actions Être furtif et que vous réussissez votre test de Discrétion, vous ne pouvez pas être Observé même si vous ne bénéficiez pas d'un abri ou d'un abri important et n'êtes pas Masqué à la fin de l'action Être furtif, du moment que vous bénéficiez d'un abri, d'un abri important ou êtes Masqué à la fin de votre tour."
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
                    "Quand vous utilisez l'action Être furtif , vous pouvez vous déplacer de votre Vitesse et vous n'avez plus besoin de bénéficier d'un abri, d'un abri important ou d'être Masqué pour vous Cacher ou Être furtif."
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
                    "Votre allié ne devient pas Inconscient et reste à 1 Point de vie. L'allié obtient aussi un nombre de Points de vie temporaires égal à votre niveau qui dure pendant 1 minute. Continuer à se battre avec une telle blessure n'est pas sans conséquence ; l'état Blessé de votre allié augmente de 1.",
                    "Effet : Tu ne peux tomber ici"
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
                    "Vous descendez d'un ange, un messager ailé du Nirvana ou de l'un des autres royaumes célestes. Vous êtes qualifié en Société. Si vous devriez déjà être qualifié en Société (du fait de votre historique ou de votre classe, par exemple), vous êtes qualifié dans une compétence de votre choix. Vous connaissez l'empyréen et vous obtenez le don de compétence Polyglotte ."
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
                    "Conditions Vous êtes dans les 9 mètres d'un allié avec l'état Mourant .",
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
                    "Votre mère est une guenaude marine, vous accordant un œil vert océan ou bleu. Vous êtes à l'aise dans la mer comme sur la grève. Lorsque vous obtenez un succès sur un test d'Athlétisme pour Nager , il devient un succès critique. Si vous terminez votre tour dans l'eau sans avoir réussi un test de Natation lors de ce round, vous ne coulez pas (mais vous pouvez néanmoins subir les effets du courant pour votre déplacement)."
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
                    "Vous obtenez le don de compétence Menteur charismatique . Si vous lancez un test de Duperie pour déterminer l'initiative, les adversaires dans cette rencontre qui n'ont pas encore agi avant vous sont Pris au dépourvu à votre égard."
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
                    "De plus, le sommeil vous permet de mieux récupérer. Vous regagnez des PV égaux à votre modificateur de Constitution multiplié par le double de votre niveau, au lieu de simplement votre niveau et vous réduisez les états Drainé et Condamné de 2 au lieu de 1."
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
                    "Vous avez maîtrisé l'art de garder votre composition, même face à la terreur. Vous obtenez un bonus de circonstances de +1 aux jets de sauvegarde contre les effets avec le trait terreur et un bonus de circonstances de +2 à votre DD de Volonté contre les actions de la compétence Intimidation, telle que celle de Démoraliser ."
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
                    "Comme certains dragons, votre ancêtre avait la capacité surnaturelle de changer de forme pour se fondre parmi les humanoïdes. Vous avez appris à imiter cette capacité. Vous pouvez lancer Forme humanoïde comme un sort inné de rang 5 une fois par jour, sauf que la durée est augmentée à 1 heure. La tradition du sort correspond à celle de votre modèle draconique."
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
                    "Vous entendez et comprenez les mots des créatures avec lesquelles vous partagez l'obscurité. Vous pouvez poser des questions, recevoir des réponses et utiliser la compétence Diplomatie avec les chauves-souris, les loups et les rats. Vous obtenez aussi un bonus de circonstances de +1 pour Faire bonne impression sur de tels animaux."
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
                    "Vous avez toujours besoin de sommeil naturel, mais vous considérez vos jets de sauvegarde contre les effets qui devraient vous faire tomber dans le sommeil d'un degré de succès supérieur à ce qu'ils sont. Cela vous protège seulement contre les effets de sommeil, mais pas des autres effets qui vous rendent Inconscient ."
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
                    "Déclencheur Vous obtenez l'état Nauséeux ou un échec sur un jet de sauvegarde contre un poison ingéré.",
                    "Fréquence Une fois par jour",
                    "Dans les circonstances les plus graves, vous pouvez vomir votre estomac pour expulser les toxines. Réduisez votre état Nauséeux de 2 et tentez immédiatement un jet de sauvegarde avec un bonus de circonstances de +2 contre tout poison ingéré auquel vous avez été exposé au cours de la dernière minute. Vous devenez Pris au dépourvu pendant 1 round car votre estomac exposé vous rend particulièrement vulnérable aux attaques."
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
                    "De plus, vous obtenez le don de compétence Animal social ."
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
            },
            {
                "name"       : "Connaissance des anadis",
                "level"      : "1",
                "traits"     : [
                    "Anadi"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez appris à subvenir aux besoins de votre communauté, que ce soit par le biais de nourriture durement obtenue ou d'objets artisanaux utiles. Vous êtes qualifié en Artisanat et en Survie. Si vous êtes automatiquement qualifié dans l'une de ces compétences (grâce à votre historique ou à votre classe, par exemple), vous devenez qualifié dans une compétence de votre choix. Vous devenez également qualifié en Connaissance des anadis."
                ]
            },
            {
                "name"       : "Venin désorientant",
                "level"      : "9",
                "traits"     : [
                    "Anadi"
                ],
                "required"   : [
                    "Venomous Anadi"
                ],
                "description": [
                    "Le venin injecté par vos crocs désoriente vos ennemis. Une créature blessée par votre Venin anadi doit faire un jet de @Check[fortitude|against:class-spell|traits:poison] contre le plus élevé entre votre DD de classe ou votre DD de sort ou être Prise au dépourvu pendant 1 round."
                ]
            },
            {
                "name"       : "Forme amicale",
                "level"      : "5",
                "traits"     : [
                    "Anadi"
                ],
                "required"   : [
                ],
                "description": [
                    "Le lien partagé entre vous et vos alliés vous permet d'agir en leur nom. Au cours de vos préparatifs quotidiens, vous pouvez accomplir un rituel simple avec un maximum de cinq humanoïdes de taille petite ou moyenne consentants. Au cours de celui-ci les participants échangent des objets mineurs ayant une signification personnelle. Tant que vous conservez le jeton d'un participant, vous pouvez prendre sa forme avec votre capacité Changer de forme, en obtenant un bonus de statut de +4 aux tests de Duperie pour vous faire passer pour cette personne et en ajoutant votre niveau au test, même si vous n'êtes pas qualifié. Vous perdez l'accès à la forme d'un participant s'il ne porte pas votre jeton ou si vous utilisez à nouveau le rituel."
                ]
            },
            {
                "name"       : "Crocs du chasseur",
                "level"      : "5",
                "traits"     : [
                    "Anadi"
                ],
                "required"   : [
                ],
                "description": [
                    "Vos crocs sont exceptionnellement douloureux. Chaque fois que vous obtenez un coup critique avec votre attaque à mains nues de crocs, vous appliquez l'effet critique spécialisé de l'attaque à mains nues."
                ]
            },
            {
                "name"       : "Forme hybride",
                "level"      : "5",
                "traits"     : [
                    "Anadi"
                ],
                "required"   : [
                ],
                "description": [
                    "La maîtrise de votre métamorphose vous permet de combiner les meilleures caractéristiques de vos formes humanoïde et arachnéenne. Lorsque vous utilisez votre capacité de Changement de forme, vous pouvez adopter une forme hybride bipède. Cette forme gagne tous les avantages de votre forme araignée ainsi que la capacité d'utiliser des objets et d'effectuer des actions de manipulation aussi facilement que sous votre forme humaine."
                ]
            },
            {
                "name"       : "Présence rassurante",
                "level"      : "1",
                "traits"     : [
                    "Anadi",
                    "Audible",
                    "Visuel"
                ],
                "required"   : [
                ],
                "description": [
                    "Déclencheur Un allié dans les 9 mètres obtient l'état Effrayé.",
                    "Vous servez d'ancre à vos proches compagnons, les calmant dans les moments de stress. Diminuez de 1 la valeur de l'état Effrayé de l'allié déclencheur. L'allié est alors temporairement immunisé contre votre Présence rassurante pendant 1 heure."
                ]
            },
            {
                "name"       : "Parler avec les araignées",
                "level"      : "1",
                "traits"     : [
                    "Anadi"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez poser des questions et recevoir des réponse et utiliser la compétence Diplomatie avec les araignées et les autres arachnides. Le MJ détermine quelles sont les créatures qui comptent dans cette faculté."
                ]
            },
            {
                "name"       : "Arpenteur de toiles",
                "level"      : "9",
                "traits"     : [
                    "Anadi"
                ],
                "required"   : [
                ],
                "description": [
                    "Vos huit pattes vous sont utiles pour escalader les murs et les toiles. Vous obtenez une Vitesse d'escalade de 7,50 mètres sous votre forme d'araignée."
                ]
            },
            {
                "name"       : "Adepte studieux",
                "level"      : "9",
                "traits"     : [
                    "Anadi"
                ],
                "required"   : [
                    "Magie studieuse"
                ],
                "description": [
                    "Vous réalisez une percée dans votre exploration de la magie. Vous obtenez Forme Humanoïde et Image Miroir comme sorts innés arcaniques de niveau 2. Vous pouvez lancer chacun de ces sorts innés arcaniques une fois par jour."
                ]
            },
            {
                "name"       : "Magie studieuse",
                "level"      : "1",
                "traits"     : [
                    "Anadi"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez trouvé de l'intérêt dans les traditions arcaniques des anadis. Choisissez un tour de magie issu de la liste arcanique. Vous pouvez lancer ce sort comme un tour de magie arcanique inné à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur."
                ]
            },
            {
                "name"       : "Chasseur de toile",
                "level"      : "9",
                "traits"     : [
                    "Anadi"
                ],
                "required"   : [
                ],
                "description": [
                    "En cultivant soigneusement des poils hyper sensibles, vous avez développé la capacité de sentir les créatures sans les voir. Vous obtenez Perception des vibrations 4,50 mètres (imprécis). Lorsque vous et une créature touchez tous deux le même objet filiforme tendu (comme une corde, une sangle ou un fil), votre Perception des vibrations imprécis peut percevoir cette créature à une distance de 18 mètres."
                ]
            },
            {
                "name"       : "Baladeur de toile",
                "level"      : "1",
                "traits"     : [
                    "Anadi"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez une grande pratique pour naviguer dans les toiles. Vous bénéficiez d'un bonus de circonstances de +2 aux jets de sauvegarde et à la CA contre le sort Toile, les toiles naturelles et les effets qui vous piègent dans les toiles, ainsi qu'un bonus de circonstances de +1 contre les autres effets qui vous piègent et vous empêtrent, comme le sort Flore enchevêtrante. Chaque fois que vous obtenez un succès sur un jet de sauvegarde contre un effet impliquant une toile, il devient un succès critique."
                ]
            },
            {
                "name"       : "Tisseur de toiles",
                "level"      : "1",
                "traits"     : [
                    "Anadi"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez produire une soie douce à tisser pour en faire des objets utiles. Vous obtenez le don Artisanat spécialisé (tissage).",
                    "Vous pouvez utiliser vos fils de soie pour Fabriquer des objets tissés simples, non consommables, tels que des vêtements et des cordes, à un coût nul tant que leur prix de base est inférieur ou égal à 1 pa. Ces objets n'ont aucune valeur à la revente et se dégradent naturellement après 24 heures, sans un entretien régulier (même mineur). Vous pouvez entretenir jusqu'à 10 de ces objets à la fois ; si vous en créez un nouveau, votre création la plus ancienne se dégrade du fait de votre négligence.",
                    "La Fabrication de ces objets temporaires ne vous prend qu'un jour au lieu de 4. Si vous êtes un expert en artisanat, vous pouvez Fabriquer ces objets en 1 heure ; si vous êtes un maître, vous pouvez les fabriquer en 10 minutes ; si vous êtes légendaire, vous pouvez les fabriquer en 1 minute."
                ]
            },
            {
                "name"       : "Lanceur de toile",
                "level"      : "13",
                "traits"     : [
                    "Anadi"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois toutes les 10 minutes",
                    "Votre capacité naturelle à créer des toiles de soie se mêle à vos pouvoirs magiques, ce qui vous permet de créer des toiles d'une taille impressionnante avec une grande fréquence. Ceci a les effets du sort Toile d'araignée au rang 2 en utilisant le plus élevé entre votre DD de classe ou votre DD de sort."
                ]
            },
            {
                "name"       : "Système de ciblage avancé",
                "level"      : "5",
                "traits"     : [
                    "Androïde"
                ],
                "required"   : [
                ],
                "description": [
                    "Vos processeurs oculaires sont améliorés par un système de ciblage avancé qui vous permet de plus facilement identifier votre ennemi et de prédire ses déplacements. Vous pouvez lancer Coup assuré une fois par jour comme un sort inné arcanique au rang 1."
                ]
            },
            {
                "name"       : "Connaissance des androïdes",
                "level"      : "1",
                "traits"     : [
                    "Androïde"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez un intérêt aiguisé pour les origines de votre peuple.",
                    "Vous êtes qualifié en Artisanat et en Vol. Si vous êtes automatiquement qualifié dans l'une de ces compétences (du fait de votre historique ou de votre classe, par exemple), vous devenez qualifié à la place dans une compétence de votre choix.",
                    "Vous devenez qualifié en Connaissance des androïdes."
                ]
            },
            {
                "name"       : "Sous-routine de nettoyage",
                "level"      : "1",
                "traits"     : [
                    "Androïde"
                ],
                "required"   : [
                ],
                "description": [
                    "Vos nanites aident à purger votre corps des substances chimiques et des toxines. Chaque fois que vous obtenez un succès sur un jet de Vigueur contre un poison qui vous affecte, vous réduisez son stade de 2 ou de 1 contre un poison virulent. Chaque succès critique que vous obtenez contre un poison qui vous affecte réduit son stade de 3 ou de 2 contre un poison virulent."
                ]
            },
            {
                "name"       : "Poussée consistante",
                "level"      : "13",
                "traits"     : [
                    "Androïde"
                ],
                "required"   : [
                    "Poussée nanite"
                ],
                "description": [
                    "Vos nanites sont incroyablement efficaces, capable d'améliorer l'efficacité de votre corps régulièrement. Vous pouvez utiliser Poussée nanite avec une fréquence de une fois toutes les 10 minutes, au lieu d'une fois par heure."
                ]
            },
            {
                "name"       : "Sans émotion",
                "level"      : "1",
                "traits"     : [
                    "Androïde"
                ],
                "required"   : [
                ],
                "description": [
                    "Le mauvais fonctionnement de vos processeurs émotionnels vous empêche de ressentir des émotions fortes. Vous obtenez un bonus de circonstances de +1 aux jets de sauvegarde contre les effets d'émotion et de terreur. Si vous obtenez un succès sur un jet de sauvegarde contre un effet de terreur ou d'émotion, il devient un succès critique."
                ]
            },
            {
                "name"       : "Sous-routine d'inoculation",
                "level"      : "5",
                "traits"     : [
                    "Androïde"
                ],
                "required"   : [
                ],
                "description": [
                    "Vos nanites rejettent les maladies avec facilité.",
                    "Chaque fois que vous obtenez un succès sur un jet de Vigueur contre une maladie qui vous affecte, vous réduisez son stade de 2 ou de 1 si c'est une maladie virulente. Chaque succès critique que vous obtenez contre une maladie qui vous affecte réduit son stade de 3 ou de 2 si c'est une maladie virulente."
                ]
            },
            {
                "name"       : "Compartiment interne",
                "level"      : "1",
                "traits"     : [
                    "Androïde"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez cacher un petit objet d'un Encombrement léger à l'intérieur d'une cavité creuse dans l'un de vos avant-bras. Il faut 3 actions Interagir pour ranger un objet de cette manière. Vous obtenez un bonus de circonstances de +4 au DD des tests de ceux qui Cherchent ou Volent des objets rangés à l'intérieur de votre bras.",
                    "Si vous rangez une arme dans votre bras, vous pouvez utiliser une action unique Interagir pour dégainer l'arme dans la main du bras qui correspond à votre cavité interne, puis Frapper avec l'arme."
                ]
            },
            {
                "name"       : "Respirateur interne",
                "level"      : "9",
                "traits"     : [
                    "Androïde"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre corps peut synthétiser l'oxygène pendant des périodes limitées de temps.",
                    "Lorsque vous retenez votre souffle, vous pouvez le faire pendant une heure supplémentaire grâce à vos réservoirs d'air intérieur. Au terme de cette heure, vos réservoirs d'air sont épuisés. Remplir vos réservoirs d'air prend 10 minutes d'exposition à l'air respirable."
                ]
            },
            {
                "name"       : "Voile de nanites",
                "level"      : "5",
                "traits"     : [
                    "Androïde",
                    "Concentration"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vos nanites s'envolent de votre corps, dans un nuage formant un voile autour de vous. Vous êtes Masqué pendant un nombre de rounds égal à la moitié de votre niveau. Vous ne pouvez utiliser ce camouflage pour Se cacher ou Être furtif, comme à l'ordinaire pour un camouflage qui rend votre position évidente.",
                    "Tant que Voile de nanites est actif, vous ne pouvez utiliser d'autres capacités qui nécessitent l'utilisation de vos nanites."
                ]
            },
            {
                "name"       : "Poussée nanite",
                "level"      : "1",
                "traits"     : [
                    "Androïde",
                    "Concentration"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par heure",
                    "Déclencheur Vous tentez un test de compétences nécessitant trois actions ou moins.",
                    "Vous stimulez vos nanites, forçant votre corps à accroître temporairement son efficacité. Vous obtenez un bonus de statut de +2 au test de compétence déclencheur. De plus, votre circuiterie brille, produisant une lumière faible dans une @Template[emanation|distance:10]{émanation de 3 mètres} pendant 1 round."
                ]
            },
            {
                "name"       : "Adaptation à la vision de nuit",
                "level"      : "1",
                "traits"     : [
                    "Androïde"
                ],
                "required"   : [
                ],
                "description": [
                    "Les nanites de vos processeurs oculaires se sont adaptés à l'obscurité, améliorant votre capacité de voir dans l'obscurité. Vous obtenez vision dans le noir."
                ]
            },
            {
                "name"       : "Sous-routine offensive",
                "level"      : "9",
                "traits"     : [
                    "Androïde"
                ],
                "required"   : [
                    "Poussée nanite"
                ],
                "description": [
                    "Les nanites augmentent vos attaques. Vous pouvez choisir d'activer Poussée nanite lorsque vous tentez un jet d'attaque, au lieu de le faire lorsque vous tentez un test de compétence. Si vous le faites, vous obtenez un bonus de statut de +1 au jet d'attaque déclencheur."
                ]
            },
            {
                "name"       : "Sous-routine protectrice",
                "level"      : "5",
                "traits"     : [
                    "Androïde"
                ],
                "required"   : [
                    "Poussée nanite"
                ],
                "description": [
                    "Vos nanites peuvent améliorer vos défenses. Vous pouvez choisir d'activer Poussée nanite lorsque vous faites un jet de sauvegarde, au lieu de le faire lorsque vous faites un test de compétence. Si vous le faites, vous obtenez un bonus de statut de +2 au jet de sauvegarde déclencheur."
                ]
            },
            {
                "name"       : "Alerte de proximité",
                "level"      : "1",
                "traits"     : [
                    "Androïde"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous êtes naturellement harmonisé avec votre environnement et réagissez instinctivement au danger. Vous obtenez un bonus de circonstances de +2 aux tests de Perception faits pour lancer l'initiative."
                ]
            },
            {
                "name"       : "Circuiterie rayonnante",
                "level"      : "1",
                "traits"     : [
                    "Androïde",
                    "Concentration",
                    "Lumière"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre circuiterie biologique émet de la lumière comme le ferait une torche, émettant une lumière vive dans un rayon de 6 mètres (et une lumière faible dans les 6 mètres suivants). La lumière s'éteint lorsque vous entreprenez de nouveau cette action ou lorsque vous sombrez dans l'Inconscience."
                ]
            },
            {
                "name"       : "Module de réparation",
                "level"      : "9",
                "traits"     : [
                    "Androïde",
                    "Concentration"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vous déclenchez le programme de réparation de votre corps, permettant à vos nanites de soigner vos blessures. Vous obtenez Guérison accélérée égale à la moitié de votre niveau pendant 1 minute. Tant que le module de réparation est actif, vous ne pouvez pas utiliser d'autres capacités qui nécessitent l'utilisation de vos nanites."
                ]
            },
            {
                "name"       : "Protocole de revivification",
                "level"      : "13",
                "traits"     : [
                    "Androïde"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Vous avez l'état mourant et êtes sur le point de tenter un test de récupération.",
                    "Vos nanites sont programmés pour automatiquement vous faire revivre.",
                    "Vous êtes ramené à 1 Point de vie, perdez les états mourant et inconscient et pouvez agir normalement lors de ce tour. Vous obtenez ou augmentez l'état Blessé comme à l'ordinaire lorsque vous perdez l'état mourant de cette manière."
                ]
            },
            {
                "name"       : "Connaissance des athamarus",
                "level"      : "1",
                "traits"     : [
                    "Athamaru"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous vous êtes immergé vous-même dans les apprentissages de votre communauté, particulièrement à naviguer dans les eaux et à vous occuper des animaux. Vous êtes qualifié en Athlétisme et en Nature. Si vous êtes automatiquement qualifié en une de ces compétences (par votre historique ou votre classe par exemple), vous êtes qualifié en une compétence de votre choix.",
                    "Vous obtenez aussi le don général Connaissance supplémentaire en Connaissance des athamarus."
                ]
            },
            {
                "name"       : "Familiarité avec les armes des athamarus",
                "level"      : "1",
                "traits"     : [
                    "Athamaru"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous maniez des armes conçues pour être utilisées sous l'eau avec facilité. Vous avez une familiarité avec les armes possédant le trait athamaru et avec les arbalètes, les arbalètes lourdes, les lances, les piques et les tridents. Pour les besoins de la maîtrise, vous considérez n'importe laquelle de ces armes de guerre comme une arme simple.",
                    "Au niveau 5, lorsque vous obtenez un coup critique avec une de ces armes, vous bénéficiez de son effet critique spécialisé."
                ]
            },
            {
                "name"       : "Électro-récepteurs harmonisés",
                "level"      : "13",
                "traits"     : [
                    "Athamaru"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous développez des organes spécialisés qui vous permettent de détecter les moindres battements de cœur. Vous pouvez percevoir les créatures vivantes et toute créature ayant le trait électricité en tant que sens imprécis avec une portée de 6 mètres. Cette portée double lorsque vous êtes sous l'eau, mais uniquement au sein de la même étendue d'eau que celle dans laquelle vous vous trouvez."
                ]
            },
            {
                "name"       : "Esprit communautaire",
                "level"      : "1",
                "traits"     : [
                    "Athamaru"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous êtes familier avec tous les membres de votre communauté et connaissez leurs mouvements habituels et vous avez appris comment appliquer ces schémas en dehors de ces cercles. Vous obtenez un bonus de circonstances de +1 à votre DD de Perception contre quelqu'un tentant de vous Mentir et aux tests de Perception pour Deviner les intentions ou pour détecter une créature essayant de se Se faire passer pour quelqu'un qu'elle n'est pas."
                ]
            },
            {
                "name"       : "Détoxification coralienne",
                "level"      : "9",
                "traits"     : [
                    "Athamaru"
                ],
                "required"   : [
                    "Symbiotes coraliens"
                ],
                "description": [
                    "Fréquence Une fois par heure",
                    "La colonie coralienne dont vous vous êtes occupé a fusionné avec vos reins pour ajouter une couche supplémentaire de filtration. Faites un jet de sauvegarde contre un unique poison vous affectant avec un bonus de circonstances de +2."
                ]
            },
            {
                "name"       : "Croissance coralienne",
                "level"      : "5",
                "traits"     : [
                    "Athamaru"
                ],
                "required"   : [
                    "Symbiotes coraliens"
                ],
                "description": [
                    "La différence entre vous-mêmes et vos symbiotes coraliens est presque impossible à déterminer tellement vos corps sont entremêlés. Lorsque vous êtes sous l'eau, vous n'avez plus besoin de manger ou de boire, puisque vos symbiotes coraliens vous procurent suffisamment de nourriture. Tant que vous êtes sur terre, votre corps fournit à vos symbiotes coraliens suffisamment d'hydratation. Vous n'avez plus besoin de vous immerger dans l'eau toutes les 24 heures."
                ]
            },
            {
                "name"       : "Ligne de vie coralienne",
                "level"      : "17",
                "traits"     : [
                    "Athamaru",
                    "Guérison"
                ],
                "required"   : [
                    "Symbiotes coraliens"
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vos symbiotes coraliens se sont développés dans votre système sanguin et sont maintenant enroulés autour de votre cœur. Lorsque vous devriez mourir, le corail dans votre corps libère une explosion d'énergie de guérison. Cela vous empêche de mourir et vous redonne @Damage[4d8[healing]]{4d8 Points de vie}. Une fois que cette capacité est utilisée, le coral prend une coloration gris terne et ne vous procure plus d'avantages jusqu'à ce que vous terminiez vos prochains préparatifs quotidiens."
                ]
            },
            {
                "name"       : "Réserve coralienne",
                "level"      : "13",
                "traits"     : [
                    "Athamaru"
                ],
                "required"   : [
                    "Symbiotes coraliens"
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Conditions Vous êtes Affaibli ou Fatigué.",
                    "Vos symbiotes coralliens constituent une réserve d'énergie à laquelle vous pouvez faire appel en cas de besoin. Vous suspendez votre état Affaibli ou Fatigué (Si vous étiez affecté par les deux, choisissez celui à suspendre). Après 1 minute, l'état revient avec la durée restant lorsque vous l'avez suspendu."
                ]
            },
            {
                "name"       : "Symbiotes coraliens",
                "level"      : "1",
                "traits"     : [
                    "Athamaru"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez si bien entretenu vos bijoux en corail que vous avez formé une relation symbiotique avec eux. Les propriétés de filtration puissantes de ce corail vous protège des impuretés. Vous obtenez un bonus de statut de +1 aux jets de sauvegarde contre les poisons et votre tet nu pour retirer les dégâts de poison persistants se fait contre un DD 10 au lieu d'un DD 15, qui est réduit à un DD 5 si une autre créature fait une action particulièrement appropriée pour vous aider. Vous devez vous submerger dans l'eau une fois toutes les 24 heures pour hydrater votre corail sous peine de perdre les bonus accordés par les symbiotes."
                ]
            },
            {
                "name"       : "Anguille de compagnie",
                "level"      : "1",
                "traits"     : [
                    "Athamaru"
                ],
                "required"   : [
                ],
                "description": [
                    "Les athamarus sont liés avec les anguilles plus étroitement qu'avec tout autre poisson. Vous avez formé un lien étroit avec une jeune anguille qui vous sert d'animal de compagnie. Typiquement, ces anguilles sont élevées jusqu'à ce qu'elles soient suffisamment grandes pour servir de monture. Vous obtenez le don général Animal de compagnie. Au lieu du choix normal des pouvoirs d'animal de compagnie, votre anguille possède les pouvoirs de familier aquatique, Déplacement rapide et Évitement des dégâts pour les jets de Réflexes. La capacité aquatique signifie que l'anguille possède le trait aquatique, respire de l'eau plutôt que de l'air et possède une vitesse de nage au lieu d'une vitesse terrestre.",
                    "Lorsque vous n'êtes pas dans un environnement aquatique, vous pouvez facilement transporter votre animal de compagnie anguille dans un petit globe rempli d'eau qui possède un Encombrement léger."
                ]
            },
            {
                "name"       : "Assistance de l'émissaire",
                "level"      : "9",
                "traits"     : [
                    "Athamaru"
                ],
                "required"   : [
                ],
                "description": [
                    "En tant qu'émissaire, vous avez aidé des créatures terrestres à se rendre sous l'eau pour visiter vos colonies. Vous obtenez Pieds en nageoires et Respiration aquatique comme des sorts innés primordiaux de rang 3. Vous pouvez lancer chacun de ces sorts une fois par jour."
                ]
            },
            {
                "name"       : "Émettre une odeur défensive",
                "level"      : "1",
                "traits"     : [
                    "Athamaru",
                    "Inhalé",
                    "Poison"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Bien que les phéromones des athamarus soient habituellement utilisées pour la communication, vous avez développé les vôtres dans un mécanisme de défense pour vous protéger de vos ennemis. Vous émettez un jet épais de phéromones défensives sur une créature adjacente, qui subit @Damage[(floor((@actor.level +1)/2)+1)d6[poison]]{1d6 dégâts de poison} avec un jet de @Check[fortitude|against:class|basic] contre votre DD de classe.",
                    "Au niveau 3 et tous les 2 niveaux par la suite, les dégâts augmentent de 1d6."
                ]
            },
            {
                "name"       : "Ami de l'anguille grandissante",
                "level"      : "5",
                "traits"     : [
                    "Athamaru"
                ],
                "required"   : [
                    "Anguille de compagnie"
                ],
                "description": [
                    "Votre animal de compagnie anguille grandit en taille et en force. La taille de votre animal de compagnie anguille passe à Petite et l'anguille obtient les pouvoirs d'animal de compagnie Odorat et Robuste. Quoi qu'il en soit, elle devient trop grande pour être transportée dans un globe rempli d'eau."
                ]
            },
            {
                "name"       : "Embuscade de la murène",
                "level"      : "17",
                "traits"     : [
                    "Athamaru"
                ],
                "required"   : [
                ],
                "description": [
                    "Déclencheur Vous êtes Caché et une créature qui ne vous a pas détecté passe à 6 mètres de vous.",
                    "Comme la murène que les communautés d'athamarus élèvent et dressent, vous savez comment frapper rapidement de votre cachette. Marchez rapidement ou Nagez vers la créature déclencheuse et faites une Frappe au corps-à-corps contre elle. La créature cible est Prise au dépourvu par cette attaque.",
                    "Spécial Si vous êtes monté sur une anguille, l'anguille peut se déplacer à votre place."
                ]
            },
            {
                "name"       : "Monture murène",
                "level"      : "9",
                "traits"     : [
                    "Athamaru"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez dressé une murène géante depuis son éclosion ou vous en avez apprivoisé une dans la nature. Vous obtenez le don de compétence Animal lié, même si vous n'en remplissez pas les prérequis, pour vous lier à une murène géante. Lorsque vous Dirigez cet animal alors que vous êtes monté dessus pour faire une action de déplacement, vous réussissez automatiquement au lieu d'avoir besoin de faire un test.",
                    "Spécial Si vous avez les dons d'ascendance Anguille de compagnie ou Ami de l'anguille grandissante, vous pouvez choisir de faire de cet animal de compagnie votre animal lié. Vous n'avez pas besoin de passer 7 jours d'intermède pour vous lier avec l'animal et vous réussissez automatiquement au test de Nature. Vous pouvez alors réapprendre ces dons."
                ]
            },
            {
                "name"       : "Odeur nocive",
                "level"      : "5",
                "traits"     : [
                    "Athamaru",
                    "Poison"
                ],
                "required"   : [
                    "Émettre une odeur défensive"
                ],
                "description": [
                    "Vous avez développé vos compétences en matière de phéromones défensives et les avez concentrées sous une forme nocive. Une créature qui obtient un échec sur son jet de sauvegarde contre votre Émettre une odeur défensive devient Nauséeuse 1 (ou Nauséeuse 2 sur un échec critique)."
                ]
            },
            {
                "name"       : "Prudence de l'océan",
                "level"      : "1",
                "traits"     : [
                    "Athamaru"
                ],
                "required"   : [
                ],
                "description": [
                    "Les histoires à propos de ceux qui ont maltraité votre peuple dans le passé (particulièrement les histoires à propos du contrôle mental des alghollthus) vous ont laissé méfiants de ceux venant de l'extérieur de votre communauté. Vous obtenez un bonus de circonstances de +1 à vos défenses contre les tests de Diplomatie, de Duperie, d'Intimidation et de Représentation."
                ]
            },
            {
                "name"       : "Odeur offensive",
                "level"      : "17",
                "traits"     : [
                    "Athamaru"
                ],
                "required"   : [
                    "Émettre une odeur défensive"
                ],
                "description": [
                    "Vous avez maîtrisé vos phéromones défensives et avez presqu'un contrôle parfait sur elles. Lorsque vous Émettez une odeur défensive, vous pouvez choisir soit d'augmenter les dégâts infligés à une unique cible en changeant les dés de dégâts pour des d8 (@Damage[(floor((@actor.level +1)/2)+1)d8[poison]|options:area-damage]) ou de laisser les dégâts inchangés mais en répandant vos phéromones dans un @Template[cone|distance:15]{cône de 4,50 mètres}."
                ]
            },
            {
                "name"       : "Odeur persistante",
                "level"      : "9",
                "traits"     : [
                    "Athamaru"
                ],
                "required"   : [
                    "Émettre une odeur défensive"
                ],
                "description": [
                    "Vos phéromones persistent désormais sur les créatures. Lorsqu'une cible obtient un échec sur un jet de sauvegarde contre votre capacité Émettre une odeur défensive, ils subissent aussi @Damage[(floor((@actor.level -1)/4) - 1)d6[persistent,poison]]{1d6 dégâts}. Les dégâts passent à 2d6 au niveau 13 et à 3d6 au niveau 17."
                ]
            },
            {
                "name"       : "Message phéromonal",
                "level"      : "1",
                "traits"     : [
                    "Athamaru",
                    "Olfactif"
                ],
                "required"   : [
                ],
                "description": [
                    "Vos phéromones de communication sont particulièrement bien développées pendant les années passées avec les autres athamarus. Vous envoyez un bref message à un allié dans les 18 mètres ou à 36 mètres dans l'eau. Aucune autre créature ne peut comprendre le message. Le message doit être court et simple et ne peut transmettre des idées qui nécessiteraient une formulation complexe ou nouvelle pour être énoncés, tel que le nom d'une créature ou des noms propres."
                ]
            },
            {
                "name"       : "Récupération rapide de phéromones",
                "level"      : "13",
                "traits"     : [
                    "Athamaru"
                ],
                "required"   : [
                    "Émettre une odeur défensive"
                ],
                "description": [
                    "Votre réserve de phéromones se reconstitue très rapidement. Vous pouvez Émettre une odeur défensive une fois par heure, au lieu d'une fois par jour."
                ]
            },
            {
                "name"       : "Monture de la marée",
                "level"      : "5",
                "traits"     : [
                    "Athamaru"
                ],
                "required"   : [
                ],
                "description": [
                    "Conditions Vous êtes sous l'eau et adjacent à une créature qui est d'au moins une taille supérieure à la vôtre, possède une vitesse de nage et consent à être votre monture.",
                    "Après avoir travaillé avec les bêtes de somme aquatiques pendant des années, vous avez appris comment les monter facilement et démonter. Vous Chevauchez la créature et Dirigez un animal pour lui donner l'ordre de votre choix."
                ]
            },
            {
                "name"       : "Nageur habile",
                "level"      : "5",
                "traits"     : [
                    "Athamaru"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous vous déplacez dans l'eau avec facilité, maîtrisant vos mouvements par des années de pratique. Lorsque vous êtes dans un environnement aquatique, vous ignorez le terrain difficile. De plus, pour vous, nager vers le haut ou vers le bas n'est pas du terrain difficile."
                ]
            },
            {
                "name"       : "Monture anguille rapide",
                "level"      : "13",
                "traits"     : [
                    "Athamaru"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre relation avec votre anguille vous permet de la guider pour qu'elle évite les dangers pendant qu'elle nage. Tant que vous êtes monté sur une anguille, celle-ci ignore les terrains difficiles lorsqu'elle nage et bénéficie d'un bonus de circonstances de +2 à toutes les défenses contre les réactions déclenchées par son déplacement."
                ]
            },
            {
                "name"       : "Camouflage arcanique",
                "level"      : "9",
                "traits"     : [
                    "Automate"
                ],
                "required"   : [
                    "Hunter automaton"
                ],
                "description": [
                    "Vous avez développé des techniques magiques pour vous aider à traquer votre proie. Vous pouvez lancer Flou et Invisibilité chacun une fois par jour comme des sorts innés arcaniques au rang 2.",
                    "Amélioration Votre camouflage est plus puissant. Votre sort de Flou dure désormais 10 minutes et lorsque vous lancez Invisibilité , vous pouvez choisir d'obtenir les effets de la version du sort de rang 4. De plus, vous pouvez lancer Flou et Invisibilité chacun deux fois par jour."
                ]
            },
            {
                "name"       : "Communication arcanique",
                "level"      : "1",
                "traits"     : [
                    "Automate"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez délivrer des messages silencieusement. Vous gagnez Télépathie de contact, ce qui vous permet de communiquer silencieusement et mentalement avec n'importe quelle créature que vous touchez, à condition que vous partagiez une même langue.",
                    "Amélioration Vous pouvez envoyer vos messages encore plus loin. Votre télépathie gagne une portée de 3 mètres, mais vous devez toujours partager une langue avec votre cible."
                ]
            },
            {
                "name"       : "Oeil arcanique",
                "level"      : "1",
                "traits"     : [
                    "Automate"
                ],
                "required"   : [
                    "low-light vision"
                ],
                "description": [
                    "Votre œil a été amélioré magiquement pour percer les ténèbres. Vous obtenez Vision dans le noir.",
                    "Amélioration Votre œil peut voir des créatures Invisibles par brèves poussées. Vous pouvez lancer Discerner l'invisible comme un sort inné arcanique une fois par heure."
                ]
            },
            {
                "name"       : "Locomotion arcanique",
                "level"      : "13",
                "traits"     : [
                    "Automate"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez modifié votre corps pour vous permettre d'améliorer votre capacité de déplacement. Vous obtenez soit une Vitesse d'escalade de 6 mètres, soit une Vitesse de nage de 6 mètres à votre choix.",
                    "Amélioration Votre corps vous permet d'obtenir d'autres formes de déplacement. Vous pouvez soit choisir l'option de ce don que vous n'aviez pas prise, (Vitesse d'escalade ou de nage) soit augmenter votre Vitesse de base de 1,50 mètre et augmenter la Vitesse que vous aviez choisie avec ce don pour qu'elle soit égale à votre Vitesse au sol ainsi ajustée."
                ]
            },
            {
                "name"       : "Propulsion arcanique",
                "level"      : "9",
                "traits"     : [
                    "Arcanique",
                    "Automate"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vous redirigez l'énergie de votre noyau vers des évents situés dans votre dos ou sous vos pieds, vous permettant de voler un court instant. Vous pouvez continuer à rediriger cette énergie pendant 5 minutes. Vous obtenez une Vitesse de vol égale à votre Vitesse lorsque tant que vous redirigez l'énergie.",
                    "Amélioration Vous pouvez maintenir votre vol pendant plus longtemps.Vous pouvez rediriger votre énergie à tout moment, vous permettant de voler lorsque vous le désirez, plutôt que simplement une fois par jour pendant 5 minutes."
                ]
            },
            {
                "name"       : "Protections arcaniques",
                "level"      : "5",
                "traits"     : [
                    "Automate"
                ],
                "required"   : [
                ],
                "description": [
                    "La magie qui vous alimente empêche la magie extérieure de vous affecter. Vous obtenez la réaction Résister à la magie.",
                    "Amélioration Vos protections s'améliorent. Lorsque vous Résistez à la magie, vous obtenez un nombre de Points de vie temporaires égaux au rang du sort de l'effet déclencheur."
                ]
            },
            {
                "name"       : "Plaquage arcanique",
                "level"      : "9",
                "traits"     : [
                    "Automate"
                ],
                "required"   : [
                    "warrior automaton"
                ],
                "description": [
                    "Conditions Vous avez Agrippé ou Entravé une créature.",
                    "Vous canalisez la puissance magique de votre noyau dans votre bras, renforçant votre attaque lorsque vous tentez de plaquer votre adversaire au sol. Faites un test @UUID[Compendium.pf2e.action-macros.Macro.ZS5z1TqckWPIMGDN]{d'Athlétisme} contre le DD de Vigueur de l'ennemi. Vous subissez une pénalité de circonstances de -2 à votre test si la cible est d'une taille supérieure à la vôtre et une pénalité de circonstances de -4 si elle est encore plus grande. Vous obtenez un bonus de circonstances de +2 à votre test si la cible est d'une taille inférieure à la vôtre et un bonus de circonstances de +4 si elle est encore plus petite.",
                    "Succès critique Vous plaquez l'adversaire et l'énergie magique le submerge. La créature est mise À terre, devient Éblouie pendant 1 round et subit des dégâts égaux à 2d6 plus votre modificateur de Force. L'adversaire n'est plus Agrippé ou Entravé par vos soins.",
                    "Succès Vous plaquez votre adversaire. La créature est mise À terre et subit des dégâts égaux à votre Modificateur de Force. L'adversaire n'est plus Agrippé ou Entravé par vos soins.",
                    "Échec Vous êtes incapable de plaquer la créature mais votre prise sur la créature persiste.",
                    "Échec critique La créature se libère et n'est plus Agrippée ou Entravée par vos soins.",
                    "Amélioration Vos bras canalisent mieux la puissance de votre noyau. Vous ne subissez plus de pénalité lorsque vous tentez de frapper des ennemis de taille plus grande. Votre adversaire subit des dégâts égaux à 2d6 plus votre modificateur de Force en cas de succès (ou le double de ce montant en cas de succès critique)."
                ]
            },
            {
                "name"       : "Oscillation astrale",
                "level"      : "13",
                "traits"     : [
                    "Automate"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez harmonisé votre noyau pour vous permettre d'entrer en phase avec le Plan astral et en revenir, vous permettant de vous téléporter de manière périodique. Vous pouvez lancer Translocation une fois par heure comme un sort inné arcanique de rang 4.",
                    "Amélioration Votre harmonisation vous permet de vous téléporter par une série de petits bonds au lieu d'un grand bond. Vous pouvez dépenser votre utilisation horaire de Translocation par une action gratuite lorsque vous commencez votre tour. Si vous le faites, vos actions Marcher rapidement sont améliorées jusqu'à la fin de votre tour, vous permettant de vous téléporter instantanément en n'importe quel point que vous pourriez atteindre avec votre Vitesse au lieu de traverser la zone pour vous y rendre. Ainsi améliorées, vos actions pour Marcher rapidement obtiennent le trait téléportation. Vos Marches rapides améliorées ne déclenchent pas les réactions qui peuvent être déclenchées par des actions de déplacement ou en quittant ou en pénétrant dans une case, à moins que ces réactions ne se déclenchent à l'occasion d'une téléportation."
                ]
            },
            {
                "name"       : "Arsenal de l'automate",
                "level"      : "1",
                "traits"     : [
                    "Automate"
                ],
                "required"   : [
                ],
                "description": [
                    "Il vous a été ajouté une partie de corps conçue pour le combat. Vous obtenez une attaque à mains nues de griffe ou de pince. La griffe inflige 1d4 dégâts tranchants se trouve dans le groupe pugilat et possède les traits agile, finesse et à mains nues. La pince inflige 1d6 dégâts perforants, est dans le groupe pugilat et possède les traits saisir et à mains nues. Votre corps peut être reconfiguré. Vous pouvez choisir ce don à tout niveau et vous pouvez utiliser le réapprentissage de ce don pour le perdre ou le gagner ou pour changer le type d'attaque que vous obtenez.",
                    "Amélioration La partie qui permet l'attaque est renforcée. Augmentez le dé de dégâts de l'attaque à mains nues obtenue par ce don d'un cran (de 1d4 à 1d6 ou de 1d6 à 1d8)."
                ]
            },
            {
                "name"       : "Connaissance des automates",
                "level"      : "1",
                "traits"     : [
                    "Automate"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez appris à mieux comprendre le processus qui a créé votre corps et la magie qui le fait fonctionner. Vous êtes qualifié en Arcanes et en Artisanat. Si vous devriez être automatiquement qualifié dans l'une de ces compétences (grâce à votre historique ou votre classe, par exemple), vous êtes qualifié à la place dans une compétence de votre choix. Vous obtenez également le don Connaissance supplémentaire en Connaissance des automates.",
                    "Amélioration Votre compréhension est plus approfondie. Vous devenez, au choix, soit expert en Arcanes, soit en Artisanat. Si vous étiez déjà expert dans la compétence que vous avez choisie, vous devenez maître à la place."
                ]
            },
            {
                "name"       : "Rappel d'Axis",
                "level"      : "17",
                "traits"     : [
                    "Peu courant",
                    "Automate"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez reconfiguré la résonance magique de votre noyau pour vous accorder aux énergies planaires d'Axis, permettant un voyage instantané vers ce plan. Vous pouvez lancer Téléportation interplanaire deux fois par semaine comme un sort inné arcanique qui ne peut cibler que vous-même. Vous ne pouvez voyager que vers Axis ou vers l'Univers et votre corps sert de focalisateur."
                ]
            },
            {
                "name"       : "Harmonisation du noyau",
                "level"      : "9",
                "traits"     : [
                    "Automate"
                ],
                "required"   : [
                    "mage automaton"
                ],
                "description": [
                    "Votre noyau vous permet de tirer plus de puissance de celui-ci. Sélectionnez un sort arcanique de rang 1 et un sort arcanique de rang inférieur ou égal à 2, auxquels vous avez accès. Vous pouvez lancer les sorts choisis comme des sorts innés arcaniques une fois par jour.",
                    "Amélioration Votre harmonisation devient plus forte. Choisissez un sort arcanique de rang inférieur ou égal à 5 et un sort arcanique de rang inférieur ou égal à 6, auquel vous avez accès. Vous pouvez les lancer comme des sorts innés arcaniques chacun une fois par jour, en plus des sorts originaux."
                ]
            },
            {
                "name"       : "Noyau canon",
                "level"      : "17",
                "traits"     : [
                    "Arcanique",
                    "Automate",
                    "Concentration"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Votre corps se transforme en un puissant canon magique. Lorsque vous êtes immobile sous la forme de canon, vous pouvez tirer une décharge d'énergie directement depuis votre noyau qui dévaste vos adversaires. Vous êtes Immobilisé jusqu'à ce que vous utilisiez une action Interagir pour revenir à votre forme ordinaire. Sous votre forme de canon, les seules actions que vous pouvez entreprendre sont de Frapper avec une attaque à mains nues de décharge d'énergie ou d'Interagir pour reprendre votre forme ordinaire. Vous pouvez rester sous votre forme de canon pendant une minute au maximum ou jusqu'à ce que vous accomplissiez l'action vous permettant de reprendre votre forme ordinaire, selon ce qui se produit en premier.",
                    "Les décharges d'énergie sont une attaque à mains nues à distance spéciale. Vous pouvez seulement faire des Frappes de décharge d'énergie lorsque vous êtes sous votre forme de canon. Vos décharges d'énergie infligent 3d8 dégâts de feu et 3d6 dégâts de force, qui passent à 4d8 dégâts de feu et 3d6 dégâts de force au niveau 20. Vous obtenez le bonus d'objet à l'attaque avec vos décharges d'énergie de la rune de puissance la plus élevée sur toute Bandelette de coups puissants que vous portez ou sur toute arme que vous maniez mais les runes de Frappe et de propriété n'ont pas d'effet sur vos décharges d'énergie. Les décharges d'énergie ont un facteur de portée de 36 mètres.",
                    "Sur un coup critique avec une décharge d'énergie, la cible subit 10 dégâts de feu persistants. Votre décharge d'énergie n'ajoute pas d'effet critique spécialisé. Si cela importe pour un effet dépendant du nombre de dés de l'arme, le nombre de dés de dégâts d'arme de la décharge d'énergie est de trois ou de quatre au niveau 20."
                ]
            },
            {
                "name"       : "Reconstruction par le noyau",
                "level"      : "13",
                "traits"     : [
                    "Automate"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Vous avez l'état Mourant et vous êtes sur le point de faire un test de récupération.",
                    "Votre âme puise dans la puissance de votre noyau pour repousser l'emprise de la mort et vous permettre de reprendre conscience. Vous revenez à 1 Point de vie, perdez les états Mourant et Inconscient et pouvez agir normalement au cours de ce tour. Vous obtenez ou augmentez l'état Blessé comme à l'ordinaire lorsque vous perdez l'état Mourant de cette manière.",
                    "Amélioration Votre âme peut tirer encore plus de puissance de votre noyau, vous accordant des avantages supplémentaires. Lorsque vous utilisez Reconstruction par le noyau, vous obtenez également un montant de Points de vie temporaires égal à trois fois votre niveau. Ces Points de vie sont conservés pendant 1 minute."
                ]
            },
            {
                "name"       : "Rayon d'énergie",
                "level"      : "1",
                "traits"     : [
                    "Automate"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez canaliser la puissance de votre noyau à travers la gemme magique qui vous sert d'œil. Vous obtenez une attaque à distance à mains nues de rayon qui inflige 1d4 dégâts de feu. Le rayon d'énergie possède un facteur de portée de 6 mètres. En cas de coup critique, la cible subit des dégâts de feu persistants égaux au nombre de dés de dégâts de l'arme. Votre rayon d'énergie ne possède pas d'effet critique spécialisé.",
                    "Amélioration Vous canalisez une plus grande puissance. Augmentez le dé de dégât de votre rayon d'énergie d'un cran, de 1d4 à 1d6."
                ]
            },
            {
                "name"       : "Châssis aggrandi",
                "level"      : "13",
                "traits"     : [
                    "Automate"
                ],
                "required"   : [
                    "Medium or Small size"
                ],
                "description": [
                    "Vous avez donné à votre noyau le pouvoir de supporter un corps plus grand, vous accordant une taille et une allonge supplémentaire. Vous bénéficiez des effets du sort Agrandissement constamment.",
                    "Amélioration Le gain de puissance de votre noyau s'est stabilisé, vous permettant un meilleur soutien. Vous n'êtes plus Maladroit en raison des effets d' Agrandissement ."
                ]
            },
            {
                "name"       : "Amélioration supérieure",
                "level"      : "17",
                "traits"     : [
                    "Automate"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez grandement amélioré vos capacités et votre noyau peut supporter davantage d'améliorations. Vous obtenez les avantages d'amélioration d'un de vos dons ancestraux d'automate de niveau 1, 5, 9 ou 13. Vous êtes aussi capable de reconfigurer vos améliorations pour répondre à vos besoins. Vous pouvez passer une semaine d'Intermède pour changer les améliorations que vous obtenez avec ce don."
                ]
            },
            {
                "name"       : "Arsenal intégré",
                "level"      : "5",
                "traits"     : [
                    "Automate"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre corps mécanique abrite une arme ou un bouclier que vous pouvez rapidement dégainer ou ranger, vous permettant d'être prêt au combat à tout moment.",
                    "Vous pouvez utiliser une activité qui dure une minute, qui possède le trait manipulation, pour intégrer une arme ou un bouclier à une main dans l'un de vos bras. Vous pouvez dégainer ou ranger cet objet avec une unique action Interagir. Les créatures ne voient pas automatiquement cet objet intégré lorsqu'il est rangé et doivent Chercher activement pour le trouver. Elles subissent une pénalité de circonstances de -2 à tous les tests pour le faire. Tant que vous maniez l'objet, vous ne pouvez pas être Désarmé et vous ne pouvez pas le laisser tomber ou le relâcher. Vous devez interagir pour ranger l'arme et libérer cette main. Une créature déterminée à récupérer l'objet peut le faire, mais il faut soit 1 minute pour l'enlever, soit une violence extrême à votre bras - comme l'ablation physique de portions du membre. Vous ne pouvez avoir qu'un seul armement intégré à la fois, bien que vous puissiez utiliser l'activité d'une minute pour remplacer l'objet ou changer le bras dans lequel il est rangé.",
                    "Amélioration Votre corps dispose de plus d'espace pour réaliser cette intégration. Vous pouvez désormais intégrer soit deux armes à une main, soit une arme à une main et un bouclier, soit une seule arme à deux mains qui est répartie sur les deux bras. Vous pouvez utiliser une seule action Interagir pour tirer ou ranger les deux éléments intégrés. Lorsque vous dégainez une unique arme, vous pouvez choisir de la tenir soit à une main, soit à deux mains."
                ]
            },
            {
                "name"       : "Augmentation inférieure",
                "level"      : "9",
                "traits"     : [
                    "Automate"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous savez comment tirer le meilleur parti de votre corps unique et de vos capacités distinctes. Vous obtenez les avantages d'amélioration de l'un de vos dons ancestraux d'automate de niveau 1 ou de niveau 5. Vous êtes également capable de reconfigurer vos améliorations pour répondre à vos besoins. Vous pouvez passer une semaine d'Intermède pour changer l'amélioration que vous obtenez par ce don.",
                    "Amélioration Vous obtenez les avantages de l'amélioration d'un autre don ancestral d'automate de niveau 1 ou 5. De plus, votre reconfiguration vous prend moins de temps. Vous n'avez besoin de passer qu'un jour d'Intermède pour modifier l'une de vos améliorations. Si vous disposez de plusieurs améliorations, le changement de chacune d'entre elles nécessite une journée distincte."
                ]
            },
            {
                "name"       : "Résistance magique",
                "level"      : "5",
                "traits"     : [
                    "Automate"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre magie d'animation vous procure de la défense. Choisissez un des types de dégâts d'énergie : électricité, froid ou son. Vous obtenez une résistance 5 contre ce type de dégâts.",
                    "Amélioration Vous puisez plus profondément dans votre magie d'animation et vos résistances s'améliorent. Choisissez l'un des avantages suivants : vous obtenez une résistance 5 contre deux autres types de dégâts de la liste ci-dessus ou votre résistance choisie passe à une valeur égale à 1 + la moitié de votre niveau."
                ]
            },
            {
                "name"       : "Pluie de carreaux",
                "level"      : "9",
                "traits"     : [
                    "Automate"
                ],
                "required"   : [
                    "Sharpshooter automaton"
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Durant la journée, votre corps produit de puissants projectiles dans votre châssis. Vous les lancez tous d'un seul coup soit dans un @Template[type:cone|distance:30]{cône de 9 mètres}, soit dans une @Template[type:emanation|distance:10]{émanation de 3 mètres}. Les adversaires dans la zone subissent @Damage[(3 + floor(@actor.level/3))d6[piercing]|options:area-damage]{6d6 dégâts perforants} @Check[reflex|against:class-spell|basic] contre le plus élevé entre votre DD de classe ou de sort. Les dégâts passent à 7d6 au niveau 12, 8d6 au niveau 15 et 9d6 au niveau 18.",
                    "Amélioration Les projectiles se régénèrent plus rapidement, ils sont beaucoup plus puissants et vous pouvez raffiner le contenu métallique pour blesser certaines créatures. Vous pouvez utiliser Pluie de carreaux une fois par heure au lieu d'une fois par jour. Les dégâts passent à 12d6 dégâts perforants et chaque fois que vous utilisez l'action, vous pouvez choisir entre l'adamantium, le fer froid ou l'argent. Les dégâts de Pluie de carreaux sont considérés comme étant faits du métal que vous avez choisi. Au niveau 20, les dégâts passent à 13d6 dégâts perforants."
                ]
            },
            {
                "name"       : "Châssis renforcé",
                "level"      : "1",
                "traits"     : [
                    "Automate"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre corps est conçu pour être particulièrement résistant. Votre châssis est fabriqué à partir de plaques d'armure renforcée qui confère un bonus d'objet de +3 à la CA avec un maximum de Dextérité de +1. Si vous êtes au moins de niveau 5, le bonus d'objet passe à +4 et au niveau 10, il passe à +5. Vous ne pouvez jamais porter une autre armure ou retirer votre châssis. Quoi qu'il en soit, vous n'êtes jamais Fatigué lorsque vous dormez. Votre châssis est une armure intermédiaire dans le groupe des plates pour ce qui concerne les capacités et lorsqu'il s'agit de graver des runes.",
                    "Amélioration Votre châssis devient difficile à surpasser. Vous obtenez la réaction Déflexion du châssis."
                ]
            },
            {
                "name"       : "Conjurateur animal",
                "level"      : "9",
                "traits"     : [
                    "Animal éveillé"
                ],
                "required"   : [
                    "Magie éveillée"
                ],
                "description": [
                    "Le lien entre vous et votre magie primordiale s'approfondit. Vous pouvez lancer Convocation d'animal en tant que sort inné primordial une fois par jour, intensifié à la moitié de votre niveau arrondi au supérieur."
                ]
            },
            {
                "name"       : "Éveiller les autres",
                "level"      : "13",
                "traits"     : [
                    "Peu courant",
                    "Animal éveillé"
                ],
                "required"   : [
                    "master in Nature"
                ],
                "description": [
                    "Vous pouvez éveiller les autres simplement par le biais du contact et de la communication. Vous apprenez le rituel Éveil d'animal. Vous utilisez votre propre nature pour compléter le rituel, de sorte que cela ne vous coûte qu'un dixième de la valeur indiquée sur la table des rituels de création de créature au lieu d'un cinquième. Si vous aviez obtenu un échec critique sur le test, vous bénéficiez d'un simple échec."
                ]
            },
            {
                "name"       : "Connaissance de l'animal éveillé",
                "level"      : "1",
                "traits"     : [
                    "Animal éveillé"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez pris le temps d'en apprendre sur les processus d'éveil et les expériences de vos compagnons animaux éveillés. Vous êtes qualifié en Arcanes et en Nature. Si vous étiez déjà qualifié dans l'une de ces compétences, vous devenez qualifié à la place dans une compétence de votre choix.",
                    "Vous obtenez aussi le don général Connaissance supplémentaire en Connaissance des animaux éveillés."
                ]
            },
            {
                "name"       : "Magie éveillée",
                "level"      : "1",
                "traits"     : [
                    "Animal éveillé"
                ],
                "required"   : [
                ],
                "description": [
                    "Lorsque vous avez été éveillé, de la magie primordiale a été libérée en vous. Choisissez un tour de magie de la liste primordiale. Vous pouvez lancer ce sort comme un sort primordial inné à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur."
                ]
            },
            {
                "name"       : "Marche éveillée",
                "level"      : "17",
                "traits"     : [
                    "Animal éveillé"
                ],
                "required"   : [
                    "Marche très rapide"
                ],
                "description": [
                    "Vous mélangez votre instinct et votre intelligence pour vous déplacer si rapidement que vous semblez être un flou. Lorsque vous utilisez Marche très rapide, vous pouvez Marcher rapidement trois fois et vous êtes Masqué au cours de ce déplacement."
                ]
            },
            {
                "name"       : "Fouisseur",
                "level"      : "13",
                "traits"     : [
                    "Animal éveillé"
                ],
                "required"   : [
                    "running animal or climbing animal heritage"
                ],
                "description": [
                    "Vous êtes habitué à construire des maisons et des défenses souterraines. Vous obtenez une Vitesse de creusement de 4,50 mètres."
                ]
            },
            {
                "name"       : "Fasciné par la société",
                "level"      : "1",
                "traits"     : [
                    "Animal éveillé"
                ],
                "required"   : [
                ],
                "description": [
                    "Tout comme certains humanoïdes se sentent poussés à étudier la nature, vous êtes obsédés par les institutions artificielles de la société et vous ne pouvez jamais en avoir assez. Vous êtes qualifié en Société. Si vous êtes déjà automatiquement qualifié en Société, vous êtes qualifié dans une autre compétence de votre choix.",
                    "En tant que nouveau venu, votre compréhension est quelques fois un peu hors sujet. Lorsque vous obtenez un échec, mais pas un échec critique, sur un test de Société pour Vous souvenir ou Déchiffre un texte, vous apprenez l'information correcte (comme vous le feriez sur un succès) et aussi une information erronée (comme vous le feriez sur un échec critique). Vous n'avez aucun moyen de savoir laquelle est laquelle."
                ]
            },
            {
                "name"       : "Forme terrifiante",
                "level"      : "17",
                "traits"     : [
                    "Audible",
                    "Animal éveillé"
                ],
                "required"   : [
                ],
                "description": [
                    "Une illusion terrifiante vous recouvre, évoquant la terreur des plus dangereux animaux. Vous pouvez lancer Masque de terreur comme un sort inné primordial une fois par jour. Vous ne pouvez cibler que vous-même et votre apparence est toujours celle d'une version monstrueuse de vous-même."
                ]
            },
            {
                "name"       : "Prise ferme",
                "level"      : "5",
                "traits"     : [
                    "Animal éveillé"
                ],
                "required"   : [
                    "climbing animal heritage"
                ],
                "description": [
                    "Conditions Vous avez Saisi ou Entravé un adversaire.",
                    "Une fois que vous avez mis la main sur quelqu'un, il est difficile pour lui de s'échapper. Votre adversaire subit une pénalité de circonstances de -2 à sa prochaine tentative pour S'Échapper de votre Saisie ou de votre Entrave et vous obtenez un bonus de circonstances de +1 à votre CA contre toute attaque qu'elle ferait contre vous tant que vous continuez de vous y agripper."
                ]
            },
            {
                "name"       : "Envol total",
                "level"      : "9",
                "traits"     : [
                    "Animal éveillé"
                ],
                "required"   : [
                    "Force des ailes"
                ],
                "description": [
                    "Votre envol est débloqué, aussi naturel qu'il l'était avant que vous ne soyez éveillé. Vous disposez d'une vitesse de vol de 7,50 mètres à tout moment."
                ]
            },
            {
                "name"       : "Jambes terrestres",
                "level"      : "1",
                "traits"     : [
                    "Animal éveillé"
                ],
                "required"   : [
                    "swimming animal heritage, aquatic"
                ],
                "description": [
                    "Vous êtes à l'aise sur la terre ferme pendant une courte période. Vous obtenez une vitesse au sol de 6 mètres et pouvez respirer de l'air pendant 10 minutes."
                ]
            },
            {
                "name"       : "Éveil tardif",
                "level"      : "5",
                "traits"     : [
                    "Animal éveillé"
                ],
                "required"   : [
                    "You have a versatile heritage."
                ],
                "description": [
                    "Que ce soit en raison d'un processus plus graduel ou parce que vos côtés animal et conscient étaient particulièrement en conflit, votre éveil a été un peu plus lent que celui de la plupart des autres animaux éveillés, mais vos yeux sont désormais complètement ouverts et vos capacités sont revenues. Vous obtenez tous les avantages mécaniques de l'héritage d'animal éveillé que vous avez choisi au niveau 1, vous permettant de prendre des dons et d'obtenir tous les avantages qui nécessitent un héritage d'animal éveillé spécifique."
                ]
            },
            {
                "name"       : "Apprendre en regardant",
                "level"      : "1",
                "traits"     : [
                    "Animal éveillé"
                ],
                "required"   : [
                ],
                "description": [
                    "Avant votre éveil, vous avez observé des humanoïdes accomplir certaines tâches à proximité fréquemment. Vous ne le saviez pas à ce moment, mais votre curiosité vous a conduit à adopter la compétence. Vous êtes qualifié à votre choix en Artisanat, Médecine ou Représentation. De plus, lorsque vous Suivez l'expert en mode exploration, vous ajoutez 2 + votre niveau comme bonus de maîtrise si vous êtes inexpérimenté au lieu d'ajouter votre seul niveau."
                ]
            },
            {
                "name"       : "Ambassadeur naturel",
                "level"      : "5",
                "traits"     : [
                    "Animal éveillé"
                ],
                "required"   : [
                    "awakened mind"
                ],
                "description": [
                    "Vous vous souvenez de ce que c'était que de parler facilement avec d'autres animaux, d'utiliser des moyens de communication anciens et familiers pour apprendre ce qu'ils veulent et demander des faveurs en retour. Vous pouvez poser des questions, recevoir des réponses et utiliser Diplomatie avec tous les animaux, pas juste ceux de votre espèce. Vous obtenez un bonus de circonstances de +1 à la Diplomatie lorsque vous le faites, ou un bonus de circonstances de +2 avec les animaux de votre espèce."
                ]
            },
            {
                "name"       : "Sens naturels",
                "level"      : "1",
                "traits"     : [
                    "Animal éveillé"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez conservé vos sens animaux aiguisés même après l'éveil. Choisissez un des sens suivants approprié à votre espèce d'animal : vision dans le noir, écholocalisation 3 mètres, vision nocturne, odorat 9 mètres (imprécis) ou perception des vibrations 9 mètres (imprécis) (L'écholocalisation vous permet d'utiliser votre ouïe en tant que sens précis dans la portée indiquée). Si votre espèce d'animal ne possède pas un type particulier de sens , vous ne pouvez obtenir ce sens avec ce don.",
                    "Spécial Vous pouvez prendre ce don à plusieurs reprises, en choisissant un sens différent à chaque fois."
                ]
            },
            {
                "name"       : "Échappée !",
                "level"      : "5",
                "traits"     : [
                    "Animal éveillé"
                ],
                "required"   : [
                    "Tiny size"
                ],
                "description": [
                    "Déclencheur Vous déterminez l'initiative.",
                    "Votre instinct vous pousse à vous mettre à l'abri. Vous Marchez rapidement. Vous devez terminer votre déplacement dans un endroit où vous disposez d'un abri contre au moins un ennemi que vous pouvez voir et vous ne pouvez pas accomplir cette action s'il vous est impossible de le faire. Vous pouvez Escalader, Nager ou Voler au lieu de Marcher rapidement si vous avez le type de déplacement correspondant."
                ]
            },
            {
                "name"       : "Pied marin",
                "level"      : "1",
                "traits"     : [
                    "Animal éveillé"
                ],
                "required"   : [
                    "You don't have a swim Speed."
                ],
                "description": [
                    "Vous êtes à l'aise sur l'eau pendant de courtes périodes. Vous obtenez une vitesse de nage de 3 mètres et pouvez respirer sous l'eau pendant 5 minutes."
                ]
            },
            {
                "name"       : "Sens aiguisés",
                "level"      : "13",
                "traits"     : [
                    "Animal éveillé"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par round",
                    "Vos sens deviennent si aiguisés que vous remarquez les changements inconsciemment. Vous Cherchez. Si vous utilisez un de vos sens de Sens naturel, vous obtenez un bonus de circonstances de +2 au test."
                ]
            },
            {
                "name"       : "Force des ailes",
                "level"      : "5",
                "traits"     : [
                    "Animal éveillé"
                ],
                "required"   : [
                    "Prendre son envol"
                ],
                "description": [
                    "Vous pouvez voler sur une plus grande distance. La vitesse de vol obtenue avec Prendre son envol passe à 7,50 mètres."
                ]
            },
            {
                "name"       : "Prendre son envol",
                "level"      : "1",
                "traits"     : [
                    "Animal éveillé"
                ],
                "required"   : [
                    "flying animal heritage"
                ],
                "description": [
                    "Fréquence Une fois par round",
                    "Bien qu'elle ne soit pas pleinement effective, l'essentiel de votre capacité de vol est restée avec vous. Vous Volez. Si vous ne possédez pas une vitesse de vol, vous obtenez une vitesse de vol de 4,50 mètres pour ce déplacement. Si vous n'êtes pas sur un sol solide à la fin de ce déplacement, vous chutez."
                ]
            },
            {
                "name"       : "Dents et griffes",
                "level"      : "1",
                "traits"     : [
                    "Animal éveillé"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous êtes adepte des armes avec lesquelles vous êtes né. Choisissez une seconde attaque animale appropriée à votre type d'animal et à votre héritage."
                ]
            },
            {
                "name"       : "Sens absolus",
                "level"      : "17",
                "traits"     : [
                    "Animal éveillé"
                ],
                "required"   : [
                    "Sens naturels"
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vos sens sont si aiguisés qu'ils percent toutes les illusions. Vous pouvez intensifier vos sens pour obtenir sans magie les effets d'un sort de Vision véritable au rang 6 pendant 10 minutes. La capacité de \"percer\" les illusions et les effets de métamorphose s'applique à tout sens précis que vous possédez."
                ]
            },
            {
                "name"       : "Jungle urbaine",
                "level"      : "5",
                "traits"     : [
                    "Animal éveillé"
                ],
                "required"   : [
                    "Fasciné par la société",
                    "expert in Society or Survival"
                ],
                "description": [
                    "Les cités sont juste une nouvelle forme d'étendue sauvage. Vous êtes adapté à cette étendue sauvage et pouvez désormais naviguer aussi facilement là d'où vous venez. Lorsque vous êtes dans une zone urbaine, vous pouvez vous déplacer à votre Vitesse entière lorsque vous Pistez et vous pouvez utiliser à votre choix Survie ou Société pour Pister."
                ]
            },
            {
                "name"       : "Marche très rapide",
                "level"      : "5",
                "traits"     : [
                    "Animal éveillé"
                ],
                "required"   : [
                ],
                "description": [
                    "Conditions Vous disposez d'une main libre.",
                    "Vous pouvez vous mouvoir rapidement lorsque vous utilisez vos modes de déplacement préférés. Marches rapidement deux fois. Vous obtenez un bonus de circonstances de +1,50 mètre à votre Vitesse pour ces Marches rapides, ou un bonus de circonstances de +3 mètres si vous disposez de deux mains libres."
                ]
            },
            {
                "name"       : "Tu es si mignon !",
                "level"      : "1",
                "traits"     : [
                    "Animal éveillé"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous savez jouer de votre charme et faire des tours de passe-passe pour vous attirer les faveurs de vos interlocuteurs. Vous êtes qualifié en Représentation et obtenez le don de compétence Représentation impressionnante. Lorsque vous assurez une représentation pour des humanoïdes, vous obtenez un bonus de circonstances de +1 pour Faire bonne impression avec Représentation."
                ]
            },
            {
                "name"       : "Transmutation de l'aboleth",
                "level"      : "9",
                "traits"     : [
                    "Azarketi"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez puisé dans l'antique magie utilisé par les maîtres alghollthus (aussi connus sous le nom d'aboleths) pour mouler la forme de vos ancêtres. Vous pouvez utiliser cette magie pour transfigurer les autres êtres. Vous obtenez Pieds en nageoires au rang 3 et Respiration aquatique au rang 2 comme des sorts innés arcaniques. Vous pouvez lancer chacun de ces sorts comme des sorts arcaniques innés une fois par jour."
                ]
            },
            {
                "name"       : "Lié aux alghollthus",
                "level"      : "1",
                "traits"     : [
                    "Azarketi"
                ],
                "required"   : [
                ],
                "description": [
                    "Bien que vous puissiez même ne pas en être conscient, les alghollthus que vos ancêtres ont autrefois servi, maintiennent une emprise dans les couches les plus profondes de votre esprit.",
                    "Vous recevez un bonus de circonstances de +2 aux jets de Volonté contre les effets mentaux qui devraient vous contrôler et, si vous obtenez un succès contre un tel effet, il devient un succès critique.",
                    "Quoi qu'il en soit, vous n'obtenez aucun de ces avantages contre les effets provenant des alghollthus et subissez à la place une pénalité de circonstances de -2 contre les effets mentaux des alghollthus."
                ]
            },
            {
                "name"       : "Intuition ancestrale",
                "level"      : "1",
                "traits"     : [
                    "Azarketi"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous possédez une connaissance extensive des origines antiques de vos ancêtres. vous êtes qualifié en Connaissance des alghollthus et Connaissance de l'Azlant. Si vous obtenez un échec critique sur un test de Connaissance des alghollthus ou de l'Azlant pour vous Souvenir, il devient un échec."
                ]
            },
            {
                "name"       : "Adaptation aquatique",
                "level"      : "13",
                "traits"     : [
                    "Azarketi",
                    "Concentration",
                    "Primordial",
                    "Eau"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Si vous et jusqu'à quatre autres créatures êtes en contact avec une étendue d'eau assez profonde pour vous immerger totalement, vous pouvez passer 10 minutes à adapter les créatures à cette étendue d'eau spécifique.",
                    "Cela leur permet de respirer normalement dans cette étendue d'eau et les protège de la pression de l'océan profond. Ces effets durent jusqu'à ce que les créatures ne soient plus longtemps en contact avec cette étendue d'eau ou jusqu'à ce que vous utilisiez de nouveau cette aptitude, ce qui se produit en premier pour chaque créature."
                ]
            },
            {
                "name"       : "Camouflage aquatique",
                "level"      : "13",
                "traits"     : [
                    "Azarketi"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous vous fondez dans les vagues.",
                    "Lorsque vous êtes immergé dans l'eau, tant qu'un observateur est à au moins 6 mètres de vous, vous n'avez pas besoin d'abri vis-à-vis de cet observateur pour Vous cacher ou Être furtif."
                ]
            },
            {
                "name"       : "Conversant aquatique",
                "level"      : "5",
                "traits"     : [
                    "Azarketi"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez poser des questions, recevoir des réponses et utiliser la compétence Diplomatie avec des animaux possédant les traits amphibies ou aquatiques. Vous obtenez un bonus de circonstances de +1 pour Faire bonne impression sur de tels animaux."
                ]
            },
            {
                "name"       : "Connaissance des azarketis",
                "level"      : "1",
                "traits"     : [
                    "Azarketi"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez appris l'histoire et les origines de votre peuple et comment vous êtes relié à la fois à votre héritage terrestre et maritime. Vous êtes qualifié en Athlétisme et en Nature. Si vous devriez être automatiquement qualifié en une des ces compétences (par votre historique ou votre classe, par exemple), vous devenez qualifié dans une compétence de votre choix. Vous devenez qualifié en Connaissance des Azarketis."
                ]
            },
            {
                "name"       : "Purification azarketie",
                "level"      : "9",
                "traits"     : [
                    "Azarketi"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez Lancer Cuisine purifiée comme un sort primordial inné, mais seulement sur les liquides. Vous pouvez lancer ce sort une fois toutes les 10 minutes.",
                    "Vous pouvez aussi utiliser votre sort Cuisine purifiée sur une créature touchée à la place d'un liquide pour purifier son sang, donnant à cette créature un bonus de statut de +2 pendant 1 minute à son jet de sauvegarde contre les poisons déjà présents dans son organisme au moment où vous lancez le sort.",
                    "Effet : Purification azarketie"
                ]
            },
            {
                "name"       : "Aptitude avec les armes Azarketies",
                "level"      : "5",
                "traits"     : [
                    "Azarketi"
                ],
                "required"   : [
                    "Familiarité avec les armes des azarketis"
                ],
                "description": [
                    "Vous vous familiarisez avec l'utilisation de votre arme à la fois sur et sous l'eau. Lorsque vous obtenez un coup critique en utilisant une arme azarketie ou une des armes énumérées dans le don Familiarité avec les armes Azarketies, vous appliquez l'effet critique spécialisé de l'arme."
                ]
            },
            {
                "name"       : "Expertise avec les armes des azarketis",
                "level"      : "13",
                "traits"     : [
                    "Azarketi"
                ],
                "required"   : [
                    "Familiarité avec les armes des azarketis"
                ],
                "description": [
                    "Votre maîtrise avec les armes à la fois au-dessus et sous l'eau est inégalée. Lorsque vous obtenez une capacité de classe qui vous accorde une maîtrise experte ou supérieure avec certaines armes, vous obtenez aussi cette maîtrise avec les Arbalètes, les Arbalètes à main, les Piques, les Lances, les Tridents et toutes les armes azarketies dans lesquelles vous êtes qualifié."
                ]
            },
            {
                "name"       : "Familiarité avec les armes des azarketis",
                "level"      : "1",
                "traits"     : [
                    "Azarketi"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous êtes familier avec les armes qui excellent sous l'eau. Vous êtes qualifié avec les Arbalètes, l'Arbalète de poing, les Piques, les Lances et les Tridents.",
                    "De plus, vous obtenez un accès à toutes les armes azarketies peu courantes. Pour les besoins de déterminer votre maîtrise, les armes de guerre azarketies sont des armes simples et les armes azarketies avancées sont des armes de guerre."
                ]
            },
            {
                "name"       : "Cynique",
                "level"      : "1",
                "traits"     : [
                    "Azarketi"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez été approché avec suspicion et méfiance tout au long de votre vie et renvoyez désormais ces sentiments aux étrangers que vous rencontrez. Il en résulte que vous êtes difficile à duper. Vous obtenez un bonus de circonstances de +1 à votre DD de Perception contre les Mensonges et ceux qui Se font passer pour quelqu'un d'autre."
                ]
            },
            {
                "name"       : "Tirer vers le fond",
                "level"      : "5",
                "traits"     : [
                    "Azarketi"
                ],
                "required"   : [
                ],
                "description": [
                    "Lorsque vous nagez dans de l'eau d'au moins de 3 mètres de profondeur, vous agrippez une créature adjacente (sur la terre proche ou dans l'eau) et la tirez sous la surface. Faites un test d'Athlétisme pour Saisir la créature. En cas de succès, si la créature est sur terre, en plus des effets normaux d'Agripper, vous tirez la créature dans l'eau dans une case adjacente à la vôtre. Si la créature est déjà dans l'eau, en cas de succès, en plus des effets normaux d'Agripper, vous la tirez à 3 mètres de profondeur dans l'eau, vous déplaçant de 3 mètres avec la créature.",
                    "Déplacer une créature dans l'eau ou en profondeur en utilisant Tirer vers le bas est un déplacement forcé pour la créature mais pas pour vous."
                ]
            },
            {
                "name"       : "Déflection hydraulique",
                "level"      : "1",
                "traits"     : [
                    "Azarketi",
                    "Concentration",
                    "Primordial",
                    "Eau"
                ],
                "required"   : [
                ],
                "description": [
                    "En puisant l'humidité de l'atmosphère, vous créez un disque d'eau flottant qui dévie les attaques. Vous obtenez un bonus de circonstances de +1 à la CA jusqu'au début de votre prochain tour."
                ]
            },
            {
                "name"       : "Manoeuvres hydrauliques",
                "level"      : "13",
                "traits"     : [
                    "Azarketi",
                    "Concentration",
                    "Manipulation",
                    "Primordial",
                    "Eau"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous malmenez vos ennemis avec un torrent d'eau siphonné de votre environnement.",
                    "Si la prochaine action que vous entreprenez est un test d'Athlétisme pour Désarmer, Pousser ou faire un Croc-en-jambe, cette action a une portée de 4,50 mètres. Vous ne recevez aucun bonus d'objet à ce test ni aucun bonus de circonstances lié à votre corps physique, mais si vous obtenez un échec critique à ce test d'Athlétisme, il devient un échec."
                ]
            },
            {
                "name"       : "Allié marin",
                "level"      : "5",
                "traits"     : [
                    "Azarketi"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous vous êtes lié d'amitié avec une créature de la mer, qui se lie magiquement à vous. Vous obtenez un familier. Le type de créature vous appartient, mais une de ses capacités doit toujours être une Vitesse de nage ou le pouvoir de familier amphibie."
                ]
            },
            {
                "name"       : "Fouleur de brume",
                "level"      : "13",
                "traits"     : [
                    "Azarketi"
                ],
                "required"   : [
                    "Fouleur d'eau"
                ],
                "description": [
                    "Vous condensez l'humidité de l'air, la solidifiant de manière à ce qu'elle puisse supporter votre poids.",
                    "Lorsque vous utilisez Fouleur d'eau, vous pouvez marcher dans les airs. Vous pouvez monter ou descendre à un angle maximum de 45 degrés. Vous chutez toujours à la fin de votre déplacement si vous ne terminez pas sur une surface qui peut vous supporter, comme à l'ordinaire en utilisant Fouleur d'eau."
                ]
            },
            {
                "name"       : "Aptitude pélagique",
                "level"      : "1",
                "traits"     : [
                    "Azarketi"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez appris des astuces spéciales pour survivre sous l'eau. Vous êtes qualifié en Survie. Lorsque vous êtes dans un environnement aquatique, si vous obtenez un échec critique sur un test de compétence de Survie pour S'orienter ou Subsister, il devient un échec."
                ]
            },
            {
                "name"       : "Plongeon parfait",
                "level"      : "1",
                "traits"     : [
                    "Azarketi"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous plongez dans l'eau avec une compétence exceptionnelle et possédez un lien avec les vagues, poussant l'eau elle-même à amortir votre chute. Vous Bondissez intentionnellement ou tombez autrement dans l'eau sans subir le moindre dégât de chute, quelle que soit la distance."
                ]
            },
            {
                "name"       : "Réhydratation",
                "level"      : "13",
                "traits"     : [
                    "Azarketi",
                    "Primordial",
                    "Eau"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vous entourez votre corps avec une fine couche d'eau tirée de l'humidité de l'air. Vous pouvez passer une heure à vous reposer pour réhydrater vos branchies et votre peau, ce qui est considéré comme submerger votre corps dans l'eau. À la discrétion du MJ, les zones incroyablement sèches, tels que les déserts, pourraient ne pas avoir assez d'humidité dans l'air pour que votre Réhydratation fonctionne."
                ]
            },
            {
                "name"       : "Hydratation complète",
                "level"      : "9",
                "traits"     : [
                    "Azarketi"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous vous régénérez en puisant la vie de l'eau qui vous entoure. Si vous vous immergez dans l'eau et vous reposez pendant 10 minutes, vous regagnez des Points de vie égaux à votre @Damage[((floor(@actor.level/2))*(@actor.abilities.con.mod))[healing]]{modificateur de Constitution multiplié par la moitié de votre niveau}."
                ]
            },
            {
                "name"       : "Contre-courant",
                "level"      : "9",
                "traits"     : [
                    "Azarketi"
                ],
                "required"   : [
                    "Tirer vers le fond",
                    "expert in Athletics"
                ],
                "description": [
                    "Conditions Vous êtes à 3 mètres d'une eau d'au moins 3 mètres de profondeur et votre Vitesse est suffisante pour atteindre l'eau en Marchant rapidement.",
                    "Déclencheur Vous réussissez à Saisir une créature de la même taille que vous ou plus petite.",
                    "Vous Marchez rapidement de 3 mètres pour rentrer dans l'eau, emportant la créature Agrippée avec vous dans l'eau."
                ]
            },
            {
                "name"       : "Rétribution frappante",
                "level"      : "1",
                "traits"     : [
                    "Azarketi"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous éprouvez une haine intense justifiée contre les alghollthus. Vous obtenez un bonus de circonstances de +2 aux dégâts avec les attaques d'armes et les attaques à mains nues contre les créatures de la famille des alghollthus et de ceux qui servent les alghollthus (le MJ détermine quelles créatures servent un alghollthu). De plus, si un alghollthu vous affecte ou un de vos alliés dans les 18 mètres avec succès avec un enchantement, votre bonus de circonstances aux dégâts contre cet alghollthu passe à +4 pendant 1 minute.",
                    "Effet : Rétribution frappante"
                ]
            },
            {
                "name"       : "Écumeur aquatique",
                "level"      : "1",
                "traits"     : [
                    "Azarketi"
                ],
                "required"   : [
                ],
                "description": [
                    "En sombrant gentiment sous les vagues, vous cachez votre présence et utilisez l'eau comme une barrière entre vous et les combattants terrestres. Tant que vous êtes immergé juste sous la surface de l'eau, vous disposez d'un abri contre les attaques provenant de créatures hors de l'eau."
                ]
            },
            {
                "name"       : "Volcan sous-marin",
                "level"      : "17",
                "traits"     : [
                    "Azarketi"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez lancer Éruption volcanique comme un sort primordial inné au rang 7 une fois par jour, sauf que vous ne pouvez invoquer le volcan que sur le fond d'une étendue d'eau et que les effets qui s'appliquent normalement aux créatures volantes s'appliquent aux créatures qui nagent à la place."
                ]
            },
            {
                "name"       : "Conjuration d'eau",
                "level"      : "5",
                "traits"     : [
                    "Azarketi"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous emportez l'océan avec vous où que vous alliez.",
                    "Vous pouvez lancer Création d'eau comme un sort inné primordial une fois par jour. Chaque fois que vous créez de l'eau, vous choisissez si vous créez de l'eau douce ou de l'eau salée."
                ]
            },
            {
                "name"       : "Danseur aquatique",
                "level"      : "9",
                "traits"     : [
                    "Azarketi"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous glissez sur l'eau avec une aisance gracieuse.",
                    "Lorsque vous êtes dans un environnement aquatique ou marécageux, vous ignorez les effets des terrains difficiles non magiques. De plus, nager vers le haut ou vers le bas n'est pas un terrain difficile pour vous."
                ]
            },
            {
                "name"       : "Fouleur d'eau",
                "level"      : "9",
                "traits"     : [
                    "Azarketi",
                    "Primordial",
                    "Eau"
                ],
                "required"   : [
                ],
                "description": [
                    "L'eau supporte chacun de vos pas vous permettant de marcher à sa surface.",
                    "Marchez rapidement jusqu'à votre Vitesse. Durant votre déplacement, vous pouvez traverser des liquides qui ne supportent pas votre poids. Si vous terminez votre déplacement sur une surface qui ne peut vous supporter, vous tombez dans le liquide à la fin de votre déplacement. Vous pouvez augmenter le nombre d'actions à 3 pour Marcher rapidement jusqu'à trois fois votre Vitesse."
                ]
            },
            {
                "name"       : "Malédiction du chat noir",
                "level"      : "13",
                "traits"     : [
                    "Homme-félin (félide)",
                    "Infortune",
                    "Occulte"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Une créature dans les 9 mètres que vous pouvez voir devrait réussir son jet de sauvegarde.",
                    "Vous feulez une malédiction malveillante. La cible relance le jet déclencheur et utiliser le pire résultat."
                ]
            },
            {
                "name"       : "Chance féline",
                "level"      : "1",
                "traits"     : [
                    "Homme-félin (félide)",
                    "Fortune"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Vous manquez un jet de Réflexes.",
                    "Vous évitez de manière instinctive le danger. Vous pouvez relancer le jet déclencheur et utiliser le meilleur résultat."
                ]
            },
            {
                "name"       : "Feuler",
                "level"      : "13",
                "traits"     : [
                    "Audible",
                    "Homme-félin (félide)",
                    "Concentration",
                    "Émotion",
                    "Mental"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Un allié dans les 9 mètres devrait être réduit à 0 PV mais pas immédiatement tué.",
                    "Vous lancez un miaulement d'avertissement, rappelant votre compagnon du bord de l'inconscience. Votre allié ne tombe pas et reste à 1 Point de vie. L'état Blessé de votre allié augmente néanmoins de 1 comme s'il avait été Mourant et avait récupéré."
                ]
            },
            {
                "name"       : "Danse homme-félin",
                "level"      : "1",
                "traits"     : [
                    "Homme-félin (félide)"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez l'habitude de toujours être dans le passage des autres créatures qui tentent de se déplacer. Faites un test d'@Check[acrobatics|defense:reflex] contre le DD de Réflexes d'une créature adjacente.",
                    "Effet : Danse homme-félin",
                    "Succès critique La créature cible obtient une pénalité de circonstances de -2 aux jets de Réflexes et est Prise au dépourvu jusqu'au début de votre prochain tour.",
                    "Succès La créature cible obtient une pénalité de circonstances de -2 aux jets de Réflexes jusqu'au début de votre prochain tour."
                ]
            },
            {
                "name"       : "Éluder les ennuis",
                "level"      : "17",
                "traits"     : [
                    "Homme-félin (félide)"
                ],
                "required"   : [
                ],
                "description": [
                    "Déclencheur Une créature vous manque avec une attaque au corps-à-corps.",
                    "Marchez rapidement de votre Vitesse. Ce déplacement ne déclenche pas de réaction provenant de la créature qui vous a manqué."
                ]
            },
            {
                "name"       : "Sieste féline focalisée",
                "level"      : "5",
                "traits"     : [
                    "Homme-félin (félide)"
                ],
                "required"   : [
                    "Sieste féline",
                    "Focus Pool"
                ],
                "description": [
                    "Lorsque vous faites une Sieste féline, vous pouvez aussi Refocaliser en rêvant d'une activité qui vous le permet."
                ]
            },
            {
                "name"       : "Danger stimulé",
                "level"      : "13",
                "traits"     : [
                    "Homme-félin (félide)",
                    "Concentration",
                    "Occulte"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Vous Désamorcez un dispositif.",
                    "Conditions Le danger n'est pas brisé.",
                    "Vous éveillez un esprit de la création à l'intérieur du danger.",
                    "Vous apprenez les effets du danger. Une fois au cours des 10 minutes suivantes, lorsque vous observez une créature entreprendre une action qui devrait déclencher une des réactions ou une des actions gratuites du danger si vous ne l'aviez pas Désamorcé, vous pouvez utiliser une réaction pour réarmer le danger, de sorte que la créature observée le déclenche immédiatement."
                ]
            },
            {
                "name"       : "Pattes légères",
                "level"      : "5",
                "traits"     : [
                    "Homme-félin (félide)"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez vous tenir en équilibre sur vos orteils pour éviter précautionneusement les obstacles. Vous Marchez rapidement puis Faites un pas, ou vous Faites un pas puis Marchez rapidement, en ignorant le terrain difficile durant ce déplacement."
                ]
            },
            {
                "name"       : "Coup de chance",
                "level"      : "5",
                "traits"     : [
                    "Homme-félin (félide)"
                ],
                "required"   : [
                    "Chance féline"
                ],
                "description": [
                    "Vous avez plus de chance que la plupart des hommes-félins. Vous pouvez déclencher Chance féline lorsque vous obtenez un échec ou un échec critique à un jet de Vigueur ou de Volonté, sur un test d'Acrobaties ou d'Athlétisme, en plus des jets de Réflexes. Vous ne pouvez toujours utiliser Chance féline qu'une fois par jour."
                ]
            },
            {
                "name"       : "Pas de preuve",
                "level"      : "9",
                "traits"     : [
                    "Homme-félin (félide)"
                ],
                "required"   : [
                    "expert in Survival"
                ],
                "description": [
                    "Vous laissez peu de signes lorsque vous tentez de passer inaperçu. Lorsque vous Échappez aux regards, vous obtenez aussi l'avantage de Dissimuler des traces à moins que vous choisissiez de ne pas le faire."
                ]
            },
            {
                "name"       : "Grognement du prédateur",
                "level"      : "9",
                "traits"     : [
                    "Homme-félin (félide)"
                ],
                "required"   : [
                    "expert in Intimidation"
                ],
                "description": [
                    "Déclencheur Vous obtenez un succès en Cherchant une créature cachée ou non détectée.",
                    "Vous poussez un grognement sourd pour Démoraliser une créature que vous venez juste de débusquer. Vous ne subissez pas la pénalité de -4 liée au fait de ne pas partager de langue avec cette créature."
                ]
            },
            {
                "name"       : "Perception des problèmes",
                "level"      : "9",
                "traits"     : [
                    "Homme-félin (félide)"
                ],
                "required"   : [
                    "Chance féline"
                ],
                "description": [
                    "Vous pouvez dire lorsque quelque chose est anormal.",
                    "Vous pouvez déclencher Chance féline après avoir lancé l'initiative, en plus de son déclencheur normal, pour relancer votre initiative et prendre le plus élevé des deux résultats. Cela est toujours décompté du nombre d'utilisation de Chance féline, comme à l'ordinaire."
                ]
            },
            {
                "name"       : "Pas silencieux",
                "level"      : "9",
                "traits"     : [
                    "Homme-félin (félide)",
                    "Sophistication"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous Faites un pas, puis vous Vous cachez ou Êtes furtif. Vous avez toujours besoin de remplir les conditions pour Vous cacher ou Être furtif, comme à l'ordinaire."
                ]
            },
            {
                "name"       : "Perception du chat hivernal",
                "level"      : "1",
                "traits"     : [
                    "Homme-félin (félide)"
                ],
                "required"   : [
                    "Winter Catfolk Heritage"
                ],
                "description": [
                    "Vos yeux sont vifs et accoutumés aux conditions hivernales. Vous ignorez les camouflages fournis par la glace et la neige."
                ]
            },
            {
                "name"       : "Monture accomodante",
                "level"      : "5",
                "traits"     : [
                    "Centaure"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous vous êtes entraîné pour servir de monture, même si c'est uniquement pour vos alliés de confiance. Lorsqu'un autre PJ se sert de vous comme d'une monture, votre coordination experte leur permet de disposer de trois actions au début de leur tour, au lieu des deux dont ils devraient normalement disposer en chevauchant un autre PJ. Vous n'obtenez toujours que deux actions au début de votre tour, au lieu de trois, lorsque vous dépensez une action à les garder en équilibre sur votre dos et s'assurer qu'ils sont solidement en selle."
                ]
            },
            {
                "name"       : "Pelage de camouflage",
                "level"      : "13",
                "traits"     : [
                    "Centaure"
                ],
                "required"   : [
                    "mottle-coat centaur heritage"
                ],
                "description": [
                    "Vous avez appris à utiliser votre camouflage naturel à votre avantage, améliorant votre capacité à vous fondre dans votre environnement à l'aide de déplacements soigneux et des marques ou un accoutrement supplémentaire. Sur le terrain que vous avez choisi, vous pouvez Vous cacher ou Être furtif sans disposer d'un abri ou d'avoir besoin d'être Masqué."
                ]
            },
            {
                "name"       : "Connaissance des centaures",
                "level"      : "1",
                "traits"     : [
                    "Centaure"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez appris comment prendre soin de votre environnement et à prendre soin de votre peuple. Vous êtes qualifié en Médecine et en Nature. Si vous êtes déjà automatiquement qualifié dans une de ces compétences (par votre historique ou votre classe, par exemple), vous êtes qualifié dans une compétence de votre choix.",
                    "Vous obtenez également le don général Connaissance supplémentaire en Connaissance des centaures."
                ]
            },
            {
                "name"       : "Familiarité avec les armes de centaure",
                "level"      : "1",
                "traits"     : [
                    "Centaure"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous vous êtes entraîné dans les armes de prédilection de votre peuple, devenant un archer habile et un jouteur. Vous avez une familiarité avec l'arc court, l'arc long, la lance, la lance d'arçon et la pique. Pour les besoins de la maîtrise, vous considérez n'importe laquelle de ces armes de guerre comme une arme simple.",
                    "Au niveau 5, lorsque vous obtenez un coup critique avec l'une de ces armes, vous bénéficiez de son effet critique spécialisé."
                ]
            },
            {
                "name"       : "Archer distant",
                "level"      : "5",
                "traits"     : [
                    "Centaure"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous vous êtes entraîné à harceler vos ennemis à grande distance, en utilisant votre rapidité pour maintenir la distance et votre vue perçante pour rester sur la cible. Vous réduisez la pénalité pour attaquer au delà de votre premier facteur de portée de 1, jusqu'à un minimum de 0, lorsque vous utilisez des armes du groupe d'armes des arcs."
                ]
            },
            {
                "name"       : "Compétiteur féroce",
                "level"      : "9",
                "traits"     : [
                    "Centaure",
                    "Mental"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vous défiez un unique allié pour une compétition physique. Cette compétition doit impliquer de réaliser un but spécifique pour une utilisation spécifique de la compétence Acrobaties ou Athlétisme, tel que Escalader au sommet d'un mur, Faire un Croc-en-jambe à un adversaire spécifique ou Sauter en longueur au dessus d'un gouffre. Vous et votre allié choisi obtenez un bonus de circonstances de +2 au test de compétence associé pendant 1 minute ou jusqu'à ce que l'un de vous gagne le défi, selon ce qui se produit en premier. Si vous gagnez cette compétition, vous obtenez un bonus de statut de +2 aux tests d'Intimidation pendant 1 heure."
                ]
            },
            {
                "name"       : "Glaneur d'herbes",
                "level"      : "9",
                "traits"     : [
                    "Centaure"
                ],
                "required"   : [
                    "Herboriste compétent"
                ],
                "description": [
                    "Votre compétence avec les herbes s'est améliorée. Chaque jour, au cours de vos préparatifs quotidiens, vous pouvez récolter des ingrédients dans votre environnement pour fabriquer un objet alchimique temporaire dont vous connaissez la formule. Cet objet alchimique doit avoir le trait guérison. S'il n'est pas consommé avant vos prochains préparatifs quotidiens, l'objet redevient inerte."
                ]
            },
            {
                "name"       : "Sprint incroyable",
                "level"      : "13",
                "traits"     : [
                    "Centaure"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous vous dépassez, libérant une poussée de vitesse soudaine. Vous marchez rapidement trois fois."
                ]
            },
            {
                "name"       : "Mentor des légendes",
                "level"      : "9",
                "traits"     : [
                    "Centaure"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous êtes un enseignant extraordinaire, capable d'inspirer à vos élèves des exploits sportifs et des prouesses d'ingéniosité. Une fois par jour, vous pouvez lancer Héroïsme comme un sort divin inné. En plus de ses effets ordinaires, le sort accorde également des Points de vie temporaires égaux à la moitié de votre niveau. Vous ne pouvez lancer ce sort sur vous-même.",
                    "Effet : Mentor des légendes"
                ]
            },
            {
                "name"       : "Fusionner avec la source",
                "level"      : "17",
                "traits"     : [
                    "Centaure"
                ],
                "required"   : [
                    "budding speaker centaur heritage or Speaker in Training"
                ],
                "description": [
                    "Vous êtes l'un des plus puissants des Orateurs et pouvez adopter la forme des esprits que vous invoquez. Choisissez un des sorts suivants que que vous pouvez lancer une fois par jour comme un sort inné de rang 7. Si vous êtes un Orateur de la foi, choisissez entre Forme d'ange, Forme de daémon, Forme de démon ou Forme de diable, que vous lancez comme un sort divin ; si vous êtes un Orateur de la Nature, Choisissez entre Forme élémentaire ou Forme de plante, que vous lancez comme un sort primordial."
                ]
            },
            {
                "name"       : "Médecin miraculeux",
                "level"      : "13",
                "traits"     : [
                    "Centaure"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre capacité à guérir les autres est suffisamment miraculeuse pour ramener les gens à la vie après avoir frôlé la mort. Une fois par jour, vous pouvez lancer Souffle de vie en tant que sort inné primordial."
                ]
            },
            {
                "name"       : "Force musculaire entraînée",
                "level"      : "1",
                "traits"     : [
                    "Centaure"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous êtes accoutumé aux longues journées de labeur physique intense. Vous obtenez un bonus de circonstances de +1 aux tests d'Athlétisme pour Ouvrir de force et Pousser et aux jets de Vigueur pour résister à l'état Fatigué. Lorsque vous obtenez un succès sur un test d'Athlétisme pour Pousser, il devient un succès critique."
                ]
            },
            {
                "name"       : "Fier mentor",
                "level"      : "5",
                "traits"     : [
                    "Centaure"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous aimez encadrer les autres et êtes fier des réussites de vos élèves. Si vous obtenez un échec critique sur une tentative d'aide, il devient un échec. Lorsque vous réussissez à Aider un allié qui a obtenu un succès critique sur le test pour les Aider, vous ressentez un sursaut de fierté, obtenant des Points de vie temporaires égaux à votre niveau, qui dure pendant 1 minute.",
                    "Effet : Fier mentor"
                ]
            },
            {
                "name"       : "Continue",
                "level"      : "9",
                "traits"     : [
                    "Centaure"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par heure",
                    "Déclencheur Vous devriez obtenir l'état Fatigué.",
                    "Même lorsque vous êtes épuisé, vous refusez d'abandonner, vous poussant à des prouesses d'endurance. Vous retardez l'état Fatigué pendant 3 rounds. Si l'état Fatigué possède une durée, la durée ne commence à s'écouler qu'après ce délai. Vous ne pouvez retarder ou empêcher l'état Fatigué après la fin de cette capacité."
                ]
            },
            {
                "name"       : "Herboriste compétent",
                "level"      : "1",
                "traits"     : [
                    "Centaure"
                ],
                "required"   : [
                ],
                "description": [
                    "On vous a appris à élaborer des remèdes curatifs à partir d'une variété d'herbes et de plantes. Vous obtenez le don Artisanat alchimique, sauf que vous devez choisir les objets suivants pour les ajouter à votre recueil de formules : Antidote inférieur, Antimaladie inférieur et Élixir de vie mineur, ainsi que quatre formules alchimiques de niveau 1 de votre choix. Vous pouvez utiliser Nature pour Fabriquer un objet alchimique qui possède le trait guérison à la place d'Artisanat"
                ]
            },
            {
                "name"       : "Orateur à l'entraînement",
                "level"      : "5",
                "traits"     : [
                    "Centaure"
                ],
                "required"   : [
                    "budding speaker centaur heritage or the ability to cast a divine or primal spell"
                ],
                "description": [
                    "Vous avez commencé à vous entraîné pour être un Orateur. Choisissez divin ou primordial. Si vous avez choisi divin, Vous êtes un Orateur de la foi. Si vous avez choisi primordial, vous êtes un Orateur de la nature. Si vous avez déjà pris cette décision (comme avoir pris l'héritage orateur naissant), vous devez choisir le même Orateur que celui précédemment choisi. Ce choix ne peut être changé. Si vous êtes un Orateur de la foi, vous pouvez lancer Bénédiction offensive une fois par jour comme un sort divin inné. Si vous êtes un Orateur de la nature, vous pouvez lancer Pas rapide une fois par jour comme un sort primordial inné."
                ]
            },
            {
                "name"       : "Défense de l'orateur",
                "level"      : "9",
                "traits"     : [
                    "Centaure"
                ],
                "required"   : [
                    "budding speaker centaur heritage or Speaker in Training"
                ],
                "description": [
                    "En tant qu'Orateur, vous avez forgé un lien profond avec les esprits puissants que vous pouvez pousser à se dresser pour vous défendre, vous et votre peuple. Si vous êtes un Orateur de la Foi, vous pouvez en appeler aux dieux ou à de puissants êtres planaires pour lancer Partager la vie et Rapport, chacun une fois par jour comme un sort divin inné. Si vous êtes un Orateur de la nature, vous pouvez en appeler aux forces de la nature pour lancer Flore enchevêtrante et Endurance environnementale, chacun une fois par jour comme des sorts innés primordiaux."
                ]
            },
            {
                "name"       : "Flèche tirétoilé",
                "level"      : "17",
                "traits"     : [
                    "Attaque",
                    "Centaure"
                ],
                "required"   : [
                ],
                "description": [
                    "Les plus grands des centaures n'ont pas besoin d'attendre la fin de leur histoire pour toucher les étoiles du ciel. Vous puisez une flèche (ou une autre munition), murmurez une brève invocation au dessus et puis Frappez avec une arme à distance. La flèche devient une décharge de lumière étoilé, changeant ses dégâts en dégâts de force ou spirituels lui accordant les effets de la rune spectrale . Lorsque la flèche Frappe sa cible, elle libère constellation de lumière des étoiles qui s'enroule autour des membres de la cible, imposant une pénalité de circonstances de -3 mètres à ses Vitesses pendant [[/r 2d4 #rounds]]{2d4 rounds} ou l'Immobilisant si la Frappe a été un coup critique. La cible peut se désenchevêtrer toute seule en passant une action Interagir à se libérer."
                ]
            },
            {
                "name"       : "Aciersabot",
                "level"      : "1",
                "traits"     : [
                    "Centaure"
                ],
                "required"   : [
                    "ironhoof centaur heritage"
                ],
                "description": [
                    "Vous avez cerclé vos sabots d'acier ou d'autres renforts visant à infliger un maximum de dégâts. Votre attaque de sabot inflige 1d8 dégâts contondants au lieu de 1d6."
                ]
            },
            {
                "name"       : "Défiance obstinée",
                "level"      : "9",
                "traits"     : [
                    "Centaure"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous êtes brave et obstiné et refusez de tourner le dos ou de vous plier aux souhaits d'un autre. Vous obtenez un bonus de statut de +1 aux jets de sauvegarde contre les effets mentaux. De plus, Vous obtenez la réaction Je vous défie !."
                ]
            },
            {
                "name"       : "Piétinement (centaure)",
                "level"      : "13",
                "traits"     : [
                    "Centaure"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous vous êtes entraîné à vous ruer par-dessus d'ennemis plus petits sans vous blesser. Marchez rapidement jusqu'à deux fois votre Vitesse. Vous pouvez vous déplacer à travers les espaces de créatures qui sont d'au moins une taille inférieure à la vôtre, Piétinant chaque créature dont vous pénétrez l'espace. Vous ne pouvez tenter de Piétiner la même créature qu'une seule fois au cours d'un même Piétinement. Vous infligez des dégâts contondants égaux à votre attaque de sabots (ou de votre frappe à mains nues si vous ne disposez pas d'une attaque de sabots) contre ces créatures, qui peuvent tenter un jet de @Check[reflex|against:class|basic] contre votre DD de classe."
                ]
            },
            {
                "name"       : "Cérémonie de l'assistance de l'aéon",
                "level"      : "9",
                "traits"     : [
                    "Conrasu"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre patron aéon vous a permis de faire appel à ses dons pour servir ses fins. Vous pouvez lancer Apaisement et Augure chacun une fois par jour comme des Sorts innés divins au rang 2."
                ]
            },
            {
                "name"       : "Cérémonie du bouclier de l'aéon",
                "level"      : "9",
                "traits"     : [
                    "Conrasu"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre patron aéon vous a gratifié de pouvoirs de protection. Vous pouvez lancer Partage de vie et Résistance à l'énergie chacun une fois par jour comme des Sorts innés divins de rang 2."
                ]
            },
            {
                "name"       : "Cérémonie de fortification",
                "level"      : "9",
                "traits"     : [
                    "Conrasu"
                ],
                "required"   : [
                    "Cérémonie de protection"
                ],
                "description": [
                    "Votre exosquelette se dispose en une forme défensive optimale. Lorsque vous utilisez votre Cérémonie de protection, vous obtenez également une résistance soit contre les dégâts contondants, les dégâts perforants ou les dégâts tranchants égale à la moitié de votre niveau contre la prochaine Frappe qui vous touche et inflige l'un de ces types de dégâts jusqu'au début de votre prochain tour."
                ]
            },
            {
                "name"       : "Cérémonie de croissance",
                "level"      : "13",
                "traits"     : [
                    "Conrasu"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez altérer la taille de contre exosquelette. Vous obtenez constamment les effets d'Agrandissement. Vous pouvez révoquer ou reprendre ces effets par une action, qui possède le trait concentration."
                ]
            },
            {
                "name"       : "Cérémonie de connaissance",
                "level"      : "5",
                "traits"     : [
                    "Conrasu"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous puisez dans la connaissance des aéons. Vous obtenez le don général Improvisation inexpérimentée. De plus, vous pouvez tenter des actions de compétence qui nécessitent normalement d'être qualifié, même si vous n'êtes pas qualifié."
                ]
            },
            {
                "name"       : "Cérémonie de protection",
                "level"      : "1",
                "traits"     : [
                    "Conrasu",
                    "Manipulation"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous manipulez votre exosquelette pour qu'il se superpose sur lui-même. Vous obtenez un bonus de circonstances de +1 à la CA jusqu'au début de votre prochain tour.",
                    "Effet : Cérémonie de protection"
                ]
            },
            {
                "name"       : "Cérémonie de la main fortifiée",
                "level"      : "9",
                "traits"     : [
                    "Conrasu"
                ],
                "required"   : [
                    "Cérémonie de la main tendue"
                ],
                "description": [
                    "Les armes de votre exosquelette sont encore plus puissantes. Si vous avez une attaque de Griffes à mains nues, elle obtient le trait mortel d8. Si vous possédez une attaque à mains nues de Branche, elle obtient les traits Pousser et Croc-en-jambe."
                ]
            },
            {
                "name"       : "Cérémonie du don du soleil",
                "level"      : "17",
                "traits"     : [
                    "Conrasu"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre lien avec le soleil est devenu un lien indéfectible. Vous n'êtes plus temporairement immunisé contre les effets de votre Guérison par le soleil et au lieu de faire un jet pour récupérer des Points de vie, vous gagnez le nombre maximum possible de Points de vie (par exemple, 64 pv au lieu de 8d8)."
                ]
            },
            {
                "name"       : "Cérémonie de la lumière solaire",
                "level"      : "5",
                "traits"     : [
                    "Conrasu"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez appris à maîtriser le pouvoir contenu dans la lumière du soleil, tout comme les arbres qui composent votre corps. Votre Guérison solaire vous permet de récupérer 1d8 Points de vie par niveau."
                ]
            },
            {
                "name"       : "Cérémonie de la main tendue",
                "level"      : "1",
                "traits"     : [
                    "Conrasu"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez arrangé la forme de votre exosquelette pour le combat rapproché, en utilisant des nœuds, des verticilles et des branches renforcées. Lorsque vous sélectionnez ce don, Vous obtenez une attaque à mains nues de griffes qui inflige 1d4 dégâts tranchants et qui possède les traits agile et finesse ou une attaque à mains nues de branche qui inflige 1d6 dégâts contondants et possède le trait prise d'élan. Chacune de ces attaques à mains nues fait partie du groupe des armes de pugilat et utilise une de vos mains.",
                    "Spécial Vous pouvez prendre ce don deux fois, en choisissant l'autre attaque à mains nues la seconde fois que vous prenez ce don."
                ]
            },
            {
                "name"       : "Connaissance des conrasus",
                "level"      : "1",
                "traits"     : [
                    "Conrasu"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez appris votre histoire et celle du peuple des façonneurs. Vous êtes qualifié en Artisanat et en Occultisme. Si vous devriez déjà être automatiquement qualifié dans une de ces compétences (du fait de votre historique ou de votre classe, par exemple), vous devenez à la place qualifié dans une compétence de votre choix. Vous êtes aussi qualifié en Connaissance des Conrasus."
                ]
            },
            {
                "name"       : "Expertise avec les armes des conrasus",
                "level"      : "13",
                "traits"     : [
                    "Conrasu"
                ],
                "required"   : [
                ],
                "description": [
                    "Lorsque vous obtenez une capacité de classe qui accorde la maîtrise experte ou supérieure avec certaines armes, vous obtenez la même maîtrise avec l'Arc court, l'Arc court composite, la Coutille, l'Épée longue, la Lance et la Pique ou toute arme conrasu (le Buugeng) dans laquelle vous êtes qualifié."
                ]
            },
            {
                "name"       : "Familiarité avec les armes des conrasus",
                "level"      : "1",
                "traits"     : [
                    "Conrasu"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez pris sur vous-même pour apprendre les façons de combattre pour vous aider dans vos tâches, peut-être en prenant le rôle de correcteur. Vous êtes qualifié avec l'Arc court, l'Arc court composite, la Coutille, l'Épée longue, la Lance et la Pique.",
                    "Vous obtenez l'accès à toutes les armes conrasus peu courantes (le Buugeng). Pour les besoins de déterminer votre maîtrise, les armes de guerre conrasus sont des armes simples et les armes conrasus avancées sont des armes de guerre."
                ]
            },
            {
                "name"       : "Compréhension des armes des conrasus",
                "level"      : "5",
                "traits"     : [
                    "Conrasu"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez appris à connaître les armes Conrasu comme vous vous connaissez vous-même. Chaque fois que vous réussissez un coup critique en utilisant l'Arc court, l'Arc court composite, la Coutille, l'Épée longue, la Lance et la Pique ou une arme conrasu (le Buugeng), vous appliquez l'effet critique spécialisé de l'arme."
                ]
            },
            {
                "name"       : "Accession à l'héritage de dragonnet",
                "level"      : "5",
                "traits"     : [
                    "Dragonnet"
                ],
                "required"   : [
                    "You have a versatile heritage"
                ],
                "description": [
                    "Vous avez éveillé le pouvoir de votre héritage draconique. Vous obtenez tous les avantages mécaniques de l'héritage de dragonnet que vous avez choisi au premier niveau, vous permettant de prendre des dons et d'obtenir les avantages qui nécessitent un héritage de dragonnet spécifique."
                ]
            },
            {
                "name"       : "Compagnon lié",
                "level"      : "9",
                "traits"     : [
                    "Dragonnet"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous formez un lien de proximité avec un compagnon, proche de celui d'un maître avec son familier, qui vous permet de lui accorder une touche de votre magie intrinsèque. Vous pouvez passer du temps avec un autre personnage joueur au cours de vos préparatifs quotidiens pour en faire votre compagnon désigné pour cette journée. Ce joueur doit posséder une réserve de focalisation. Vous obtenez l'activité Fortifier la focalisation."
                ]
            },
            {
                "name"       : "Convoiter le butin",
                "level"      : "1",
                "traits"     : [
                    "Dragonnet"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous possédez un désir de dragon pour le trésor. Vous obtenez le don de compétence Portefaix, même si vous n'en remplissez pas les prérequis. vous obtenez aussi un bonus de circonstances de +2 à votre DD de Perception contre lestentatives pour vous voler et à tout jet de sauvegarde contre un effet qui cible un objet que vous tenez ou transportez.",
                    "Au niveau 11, vous obtenez le don général Investiture extraordinaire, même si vous n'en remplissez pas les prérequis."
                ]
            },
            {
                "name"       : "Disparition éblouissante du dragonnet",
                "level"      : "17",
                "traits"     : [
                    "Dragonnet"
                ],
                "required"   : [
                ],
                "description": [
                    "Déclencheur Un ennemi adjacent vous touche avec une attaque.",
                    "Un éclat brillant se reflète sur vos écailles lorsque vous êtes touché, puis il est alors impossible de vous trouver. L'ennemi déclencheur devient Ébloui pendant 1 round et vous êtes affecté par un sort d'Invisibilité au rang 4."
                ]
            },
            {
                "name"       : "Souffle de dragonnet",
                "level"      : "1",
                "traits"     : [
                    "Dragonnet"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez développé votre souffle magique. Vous soufflez le souffle de dragonnet associé à votre héritage. Souffle de dragonnet obtient les traits indiqués entre parenthèses et le DD est le plus élevé entre votre DD de classe ou votre DD de sort. Après avoir utilisé Souffle de dragonnet, vous ne pouvez plus l'utiliser avant [[/r 1d4 #Recharger Souffle de dragonnet]]{1d4 rounds}."
                ]
            },
            {
                "name"       : "Immunités de dragonnet",
                "level"      : "17",
                "traits"     : [
                    "Dragonnet"
                ],
                "required"   : [
                    "Résistances de dragonnet"
                ],
                "description": [
                    "Vous ne vous endormirez pas si vous n'avez pas choisi de le permettre, ni ne resterez tranquille. Vos résistances contre le sommeil et la paralysie s'accroissent, vous permettant de complètement ignorer de tels effets, comme le ferait un dragon. Vous obtenez une immunité contre les effets de sommeil et les effets qui vous rendraient Paralysé."
                ]
            },
            {
                "name"       : "Résistances de dragonnet",
                "level"      : "1",
                "traits"     : [
                    "Dragonnet"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez beau être un petit dragon, vous êtes bien toujours un dragon, ce qui signifie qu'il est difficile de vous contraindre. Vous obtenez un bonus de circonstances de +2 aux jets de sauvegarde contre les effets de sommeil et les effets qui vous rendraient Paralysé."
                ]
            },
            {
                "name"       : "Volonté féroce",
                "level"      : "9",
                "traits"     : [
                    "Dragonnet"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par heure",
                    "Déclencheur Vous réussissez un jet de sauvegarde contre un effet magique mental.",
                    "Vous envoyez une explosion magique en retour à la source de l'effet, lui infligeant @Damage[ceil(@actor.level/2)d6[mental]]{2d6 dégâts mentaux} avec un jet de @Check[will|against:class-spell|basic|options:inflicts:slowed] contre le plus élevé entre votre DD de classe ou votre DD de sort. Si la cible obtient un échec critique, elle est également Ralentie 1 pendant 1 round. Au niveau 11 et tous les 2 niveaux par la suite, les dégâts augmentent de 1d6."
                ]
            },
            {
                "name"       : "Former une volée",
                "level"      : "13",
                "traits"     : [
                    "Aura",
                    "Dragonnet"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous invoquez des dragonnets sauvages proches pour former une volée à vos côtés. La volée vous accorde 25 Points de vie temporaires qui durent pendant 1 minute. La volée se disperse et l'effet se termine lorsque les Points de vie temporaires sont perdus, quand la minute s'est écoulée ou lorsque vous Révoquez Former une volée. Tant que vous êtes entouré par votre volée, vous obtenez une faiblesse 5 contre les dégâts de zone et d'éclaboussure et possédez une aura de volée couvrant une @Template[type:emanation|distance:10]{émanation de 3 mètres}. Les ennemis dans cette aura sont Éblouis.",
                    "Lorsque vous utilisez Former une volée et tant qu'elle persiste, vous pouvez entreprendre l'action Barrage aigre."
                ]
            },
            {
                "name"       : "Inspirez ! Expirez !",
                "level"      : "5",
                "traits"     : [
                    "Concentration",
                    "Dragonnet"
                ],
                "required"   : [
                    "Souffle de dragonnet"
                ],
                "description": [
                    "Vous inspirez profondément en guise de prélude avant d'utiliser votre Souffle de dragonnet sur vos ennemis. Si votre prochaine action consiste à utiliser votre Souffle de dragonnet, ajoutez 1,50 mètre à la longueur du cône ou de la ligne. Si votre souffle inflige des dégâts, vous infligez également un dé de dégâts supplémentaires."
                ]
            },
            {
                "name"       : "Dans le ciel",
                "level"      : "9",
                "traits"     : [
                    "Dragonnet"
                ],
                "required"   : [
                    "Et hop !"
                ],
                "description": [
                    "Vous volez aussi naturellement que tout dragonnet. Vous possédez une vitesse de vol de 7,50 mètres en permanence."
                ]
            },
            {
                "name"       : "Prise jalouse",
                "level"      : "5",
                "traits"     : [
                    "Dragonnet"
                ],
                "required"   : [
                ],
                "description": [
                    "Déclencheur Une créature dans votre allonge dont vous êtes conscient de la présente tente de vous Désarmer, d'endommager ou de Voler un objet en votre possession.",
                    "Vous êtes protecteur de votre trésor et avez juré malheur à celui qui tente de s'emparer de ce qui vous appartient. Faites une Frappe au corps-à-corps contre la créature déclencheuse. Si votre attaque est un coup critique et que l'action déclencheuse était une action de manipulation, vous interrompez cette action. Cette frappe n'applique pas pénalité d'attaques multiples et votre pénalité d'attaques ne s'applique pas à cette Frappe."
                ]
            },
            {
                "name"       : "Attirer la morsure",
                "level"      : "13",
                "traits"     : [
                    "Dragonnet",
                    "Mental",
                    "Visuel"
                ],
                "required"   : [
                ],
                "description": [
                    "Grâce à votre ruse, votre charme ou un peu de magie, vous attirez un ennemi pour l'observer de plus près... et lui infliger une petite morsure ! Choisissez une créature située à moins de 9 mètres. Elle doit tenter un jet de @Check[will|against:class-spell|options:forced-movement] contre le plus élevé entre votre DD de classe ou DD de sort.",
                    "Si la cible obtient un échec sur son jet de sauvegarde, vous l'attirez de 9 mètres au maximum. Si la cible termine son déplacement dans l'allonge de vos mâchoires, vous pouvez tenter une Frappe de morsure contre elle. Quel que soit le résultat de son jet de sauvegarde, la cible est temporairement immunisée pendant 24 heures."
                ]
            },
            {
                "name"       : "Dragonnet puissant",
                "level"      : "1",
                "traits"     : [
                    "Dragonnet"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous êtes devenu spécialement grand et surplombez désormais vos camarades dragonnets. Au lieu d'être Très petite, votre taille est Petite.",
                    "Spécial Bien que vous puissiez à un niveau supérieur au 1er, vous ne pouvez réapprendre ce don."
                ]
            },
            {
                "name"       : "Mes griffes sont des dagues",
                "level"      : "1",
                "traits"     : [
                    "Dragonnet"
                ],
                "required"   : [
                ],
                "description": [
                    "Vos griffes sont aussi acérées que vos dents. Vous obtenez une attaque à mains nues de griffe qui inflige 1d6 dégâts tranchants. Vos griffes sont dans le groupe des couteaux et possèdent les traits agile, finesse et mains nues. Au niveau 5, lorsque vous obtenez un coup critique avec vos griffes ou vos mâchoires, vous obtenez son effet critique spécialisé.",
                    "Spécial Si votre héritage de dragonnet est drake domestique, vos griffes sont considérées comme en argent."
                ]
            },
            {
                "name"       : "Écailles d'acier",
                "level"      : "1",
                "traits"     : [
                    "Dragonnet"
                ],
                "required"   : [
                ],
                "description": [
                    "Vos écailles sont aussi dures qu'une armure, vous assurant toujours de disposer d'une sorte de protection dans le monde dangereux. Lorsque vous ne portez pas d'armure, vos écailles vous accordent un bonus d'objet de +1 à la CA et une Dextérité maximale de +3. Le bonus d'objet passe à +2 au niveau 5. Le bonus d'objet de ces écailles est cumulable avec les runes de puissance d'armure sur vos Vêtements d'explorateur, le sort Armure mystique ou les Bandes de force."
                ]
            },
            {
                "name"       : "Et hop !",
                "level"      : "5",
                "traits"     : [
                    "Dragonnet"
                ],
                "required"   : [
                    "Prendre son envol"
                ],
                "description": [
                    "Vous pouvez voler sur de plus longues distances avant d'avoir besoin d'atterrir. La vitesse de vol que vous avez obtenue de Prendre son envol passe à 7,50 mètres."
                ]
            },
            {
                "name"       : "Ombre Intelligente",
                "level"      : "5",
                "traits"     : [
                    "Fetchelin",
                    "Occulte",
                    "Ombre"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez accomplir des actions d'Interunique actions avec votre ombre, tel qu'ouvrir une porte non fermée. Tout ce avec quoi votre ombre Interagit doit être à votre portée. Votre ombre ne peut accomplir d'actions qui nécessitent une dextérité manuelle significative incluant toute action qui nécessiterait un test pour être accomplie et vous ne pouvez l'utiliser pour porter des objets."
                ]
            },
            {
                "name"       : "Éteindre la lumière",
                "level"      : "5",
                "traits"     : [
                    "Ténèbres",
                    "Fetchelin",
                    "Occulte"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois toutes les 10 minutes",
                    "Vous enroulez d'ombre une unique source de lumière non tenue dans les 36 mètres qui n'est pas plus large qu'une torche. Toute source de lumière non magique que vous ciblez est automatiquement éteinte. Pour les sources magiques, faites un test de contre en utilisant votre modificateur de Vigueur ou de Vol contre le DD de la cible. Votre rang de contre est égal à la moitié de votre niveau arrondi au supérieur. Réussir à contrer la source de lumière supprime sa capacité à produire de la lumière pendant 1 minute, mais pas ses autres effets. Si vous êtes dans une lumière faible ou dans l'obscurité lorsque vous Éteignez la lumière, la portée passe à 72 mètres."
                ]
            },
            {
                "name"       : "Connaissance des fetchelins",
                "level"      : "1",
                "traits"     : [
                    "Fetchelin"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez appris des leçons obscures à propos de vos camarades fetchelins. Vous êtes qualifié en Occultisme et en Discrétion. Si vous devriez automatiquement être qualifié dans une de ces compétences (par votre historique ou classe par exemple), vous devenez à la place qualifié dans une compétence de votre choix. Vous êtes aussi qualifié en Connaissance du Nébulmonde."
                ]
            },
            {
                "name"       : "Difficile à tromper",
                "level"      : "1",
                "traits"     : [
                    "Fetchelin"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous êtes accoutumé à voir à travers l'obscurité changeante et la magie déroutante. Vous obtenez un bonus de circonstances de +1 aux tests de Perception contre les illusions ainsi qu'aux jets de Volonté contre les effets d'illusion et d'ombre."
                ]
            },
            {
                "name"       : "Ombre contenante",
                "level"      : "9",
                "traits"     : [
                    "Fetchelin",
                    "Occulte",
                    "Ombre"
                ],
                "required"   : [
                    "Ombre Intelligente"
                ],
                "description": [
                    "Votre ombre peut contenir des objets.",
                    "Vous pouvez interagir avec votre ombre pour ranger ou retirer des objets, juste comme vous le feriez avec un contenant ordinaire (ce qui signifie que vous utilisez un total de deux actions Interagir pour ranger puis retirer l'objet, par exemple). Votre ombre peut contenir l'équivalent d'un Encombrement de 2, qui ne sont pas décomptés de l'encombrement que vous transportez. Les objets restent solides mais subissent une patine ombrale lorsqu'ils sont rangés de cette manière. Bien que les objets soient dans votre ombre et puissent être détectés normalement, vous obtenez un bonus de circonstances de +2 aux tests de Discrétion pour Cacher les objets à moins que l'observateur ne sache qu'il faut vérifier votre ombre pour trouver les objets."
                ]
            },
            {
                "name"       : "Souplesse sombre",
                "level"      : "5",
                "traits"     : [
                    "Fetchelin"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre corps est presque aussi souple que votre ombre.",
                    "Lorsque vous obtenez un échec critique à Vous faufiler, il devient un échec.",
                    "De plus, lorsque vous obtenez un succès sur un test pour vous Échapper, il devient un succès ; si vous obtenez un succès critique, vous pouvez Faire un pas de 1,50 mètre au lieu de Marcher rapidement."
                ]
            },
            {
                "name"       : "Percer la lumière",
                "level"      : "17",
                "traits"     : [
                    "Peu courant",
                    "Fetchelin"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous déchirez le voile entre l'Univers et son ombre. Vous pouvez lancer Téléportation interplanaire deux fois par semaine comme un sort inné occulte seulement qui ne peut cibler que vous-même. Vous ne pouvez voyager que vers l'Univers ou le Nébulmonde et votre corps sert de focalisateur."
                ]
            },
            {
                "name"       : "Ombres sculptées",
                "level"      : "9",
                "traits"     : [
                    "Fetchelin",
                    "Occulte",
                    "Ombre"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous amadouez les ombres proches pour qu'elles prennent la forme d'une arme simple, d'un outil ou d'un objet simple, utilisant une Très petite partie de votre ombre pour la rendre solide ; en procédant ainsi, vous perdez 1 Point de vie.",
                    "Vous pouvez seulement créer des armes courantes de niveau 0, non consommables ou de l'équipement d'aventurier sans parties imbriquées, un texte écrit ou d'autres composantes compliquées. L'objet dure jusqu'à ce qu'il soit utilisé pour une activité unique, jusqu'à ce vous sculptiez de nouveau des ombres ou pendant 1 minute, selon ce qui se produit en premier. Une fois que la durée expire, l'objet se dissipe et vous récupérez le Point de vie perdu à moins que l'objet ne soit Brisé ou Détruit. Comme l'objet détient une petite parcelle de votre ombre, vous ne pouvez récupérer le Point de vie perdu jusqu'à ce que l'objet se dissipe."
                ]
            },
            {
                "name"       : "Fondre dans l'ombre",
                "level"      : "1",
                "traits"     : [
                    "Fetchelin",
                    "Illusion",
                    "Occulte",
                    "Ombre"
                ],
                "required"   : [
                ],
                "description": [
                    "Déclencheur Une créature tente un test nu pour vous cibler alors que vous êtes Masqué ou Caché à cause d'une lumière faible ou des ténèbres.",
                    "Vous attirez les ombres pour créer un voile. Augmentez le DD du test nu de 2."
                ]
            },
            {
                "name"       : "Vision d'ombre",
                "level"      : "9",
                "traits"     : [
                    "Fetchelin",
                    "Occulte"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par heure",
                    "Vous tirez sur votre lien avec le Nébulmonde pour voir à travers tout sauf l'obscurité la plus profonde. Vous obtenez Vision dans le noir supérieure pendant 1 minute."
                ]
            },
            {
                "name"       : "Assaut de l'ombre",
                "level"      : "13",
                "traits"     : [
                    "Fetchelin"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre ombre assaille vos adversaires. Vous pouvez lancer Explosion d'ombre comme un sort inné occulte de rang 5 une fois par jour. Au niveau 17, votre Explosion d'ombre est intensifiée au rang 6."
                ]
            },
            {
                "name"       : "Déguisement ombreux",
                "level"      : "5",
                "traits"     : [
                    "Fetchelin"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous vous enroulez vous-même d'ombre pour changer votre apparence. Vous pouvez lancer Déguisement illusoire comme un sort inné occulte au rang 1 une fois par jour. Ce sort obtient le trait ombre."
                ]
            },
            {
                "name"       : "Magie voilée",
                "level"      : "1",
                "traits"     : [
                    "Fetchelin"
                ],
                "required"   : [
                ],
                "description": [
                    "Choisissez un tour de magie dans la liste des sorts occultes. Vous pouvez lancer ce tour de magie comme un sort occulte inné à volonté, intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur."
                ]
            },
            {
                "name"       : "Mine voilée",
                "level"      : "1",
                "traits"     : [
                    "Fetchelin"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous êtes habitué à vous confronter à de dangereuses situations et des créatures sinistres. Vous êtes qualifié en Duperie (ou une autre compétence de votre choix, si vous êtes déjà qualifié en Duperie) et vous obtenez le don de compétence Diversion interminable comme don supplémentaire."
                ]
            },
            {
                "name"       : "Longer la lumière",
                "level"      : "13",
                "traits"     : [
                    "Peu courant",
                    "Fetchelin"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez voyager sur la bordure entre l'Univers et le Nébulmonde et même emmener d'autres personnes avec vous. Vous pouvez lancer Voyage ombral comme un sort inné occulte une fois par jour."
                ]
            },
            {
                "name"       : "Déplacement furtif",
                "level"      : "1",
                "traits"     : [
                    "Fetchelin"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez traverser la pénombre grâce à la vitesse de l'obscurité. Vous pouvez avancer de 1,50 mètre plus loin quand vous utilisez l'action Être furtif sans toutefois dépasser votre Vitesse. De plus, aussi longtemps que vous continuez d'utiliser des actions Être furtif et réussissez vos tests de Discrétion, vous ne devenez pas Observé si vous finissez votre action Être furtif dans une zone de lumière faible ou dans les ténèbres et ce, tant que vous bénéficiez d'un abri partiel ou standard ou que vous êtes Masqué à la fin de votre tour."
                ]
            },
            {
                "name"       : "Parenté aberrante",
                "level"      : "1",
                "traits"     : [
                    "Distordu"
                ],
                "required"   : [
                ],
                "description": [
                    "Les processus de pensée insondable que les aberrations inhumaines utilisent pour communiquer résonnent dans votre esprit. Vous pouvez lancer Lien mental comme un sort inné occulte une fois par jour, mais vous ne pouvez cibler que des aberrations."
                ]
            },
            {
                "name"       : "Sens augmentés",
                "level"      : "13",
                "traits"     : [
                    "Distordu"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous ouvrez des yeux vestigiaux, déroulez les rabats de peau couvrant vos tympans ou améliorez autrement vos sens.",
                    "Jusqu'au début de votre prochain tour, vous obtenez les avantages suivants : vous ne pouvez être pris en tenaille. Lorsque vous Cherchez des créatures, vous pouvez passer en revue @Template[cone|distance:60]{un cône de 18 mètres} ou une @Template[burst|distance:30]{explosion de 9 mètres} au lieu de la zone habituelle. Lorsque vous Cherchez des objets cachés, vous pouvez Chercher dans un carré de 4,50 mètres de côté au lieu de la zone habituelle.",
                    "Effet : Sens augmentés"
                ]
            },
            {
                "name"       : "Curiosité captivante",
                "level"      : "9",
                "traits"     : [
                    "Distordu"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez attirer l'attention des spectateurs par votre apparence unique. Vous pouvez lancer Discours captivant comme un sort inné occulte au rang 3 une fois par jour."
                ]
            },
            {
                "name"       : "Couche gluante",
                "level"      : "9",
                "traits"     : [
                    "Distordu"
                ],
                "required"   : [
                ],
                "description": [
                    "Une couche gluante caustique recouvre vos membres. Vos attaques à mains nues infligent 1d4 dégâts d'acide persistants supplémentaires en cas de coup critique."
                ]
            },
            {
                "name"       : "Vision des profondeurs",
                "level"      : "1",
                "traits"     : [
                    "Distordu"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre vision est adaptée à la nuit ou aux souterrains. Vous obtenez vision dans le noir."
                ]
            },
            {
                "name"       : "Compression inquiétante",
                "level"      : "9",
                "traits"     : [
                    "Distordu"
                ],
                "required"   : [
                    "Medium Size"
                ],
                "description": [
                    "Vos membres et même votre torse peuvent se replier sur eux-mêmes, vous permettant de passer par de petits espaces comme si vous étiez une créature de taille Petite. Vous pouvez vous déplacer à votre pleine Vitesse alors que vous Vous faufilez."
                ]
            },
            {
                "name"       : "Subjectivité incarnée du Dragoon",
                "level"      : "9",
                "traits"     : [
                    "Distordu"
                ],
                "required"   : [
                ],
                "description": [
                    "Lorsque vos alliés demandent des renforts rapides ou des raids éclairs, vous êtes prêt à répondre. Votre forme titanesque englobe à la fois la cavalerie et le cavalier, ce qui vous permet de parcourir de vastes distances et d'exploiter les opportunités sur le théâtre de la guerre. Vos pores se distendent et laissent échapper d'importantes quantités de sang, de graisse sous-cutanée et de liquide lymphatique que vous durcissez et transformez en ailes planantes ou en monture rapide. Vous pouvez lancer Atterrissage en douceur et Monture merveilleuse chacun une fois par jour comme des sorts occultes innés. Lorsque vous lancez Atterrissage en douceur de cette manière, des ailes de planeur ralentissent votre chute et lorsque vous Lancez Monture merveilleuse de cette manière, la monture dépasse physiquement du bas de votre propre corps. Aucun de ces changements cosmétiques n'altère les effets des sorts. Par exemple, les ennemis peuvent toujours attaquer la Monture merveilleuse comme à l'ordinaire."
                ]
            },
            {
                "name"       : "Subjectivité cuirassée incarnée",
                "level"      : "5",
                "traits"     : [
                    "Peu courant",
                    "Distordu"
                ],
                "required"   : [
                    "cataphract fleshwarp heritage"
                ],
                "description": [
                    "Accès Vous êtes originaire du Nex.",
                    "Votre puissance colossale fait de vous un béhémoth, la fierté des Forges de chair du Nex et les munitions les plus lourdes ne sont qu'un jouet d'enfant dans votre poigne monumentale. Vous êtes un cuirassé, une arme de siège vivante, bien que vous puissiez manier d'autres armes de siège au combat à mesure que votre endosquelette et votre chair s'endurcissent. Vous obtenez le don de compétence Portefaix et votre limite maximale d'encombrement augmente encore de 3, pour un total de 2 à votre limite d'encombrement et de 5 à votre limite maximale."
                ]
            },
            {
                "name"       : "Subjectivité du légionnaire incarné",
                "level"      : "1",
                "traits"     : [
                    "Peu courant",
                    "Distordu"
                ],
                "required"   : [
                    "cataphract fleshwarp heritage"
                ],
                "description": [
                    "Accès Vous êtes originaire du Nex.",
                    "Les Forges de chair du Nex vous ont formé non pas pour atteindre la supériorité individuelle aux armes mais plutôt pour devenir un membre d'une légion, une pièce modulaire faisant partie intégrante des stratagèmes d'armes combinées des mages de guerre nexiens. Vous êtes qualifié en Arcanes et en Athlétisme. Si vous devriez automatiquement être qualifié dans l'une de ces compétences, vous êtes qualifié dans une autre compétence de votre choix. Vous devenez également qualifié en Connaissance de la guerre."
                ]
            },
            {
                "name"       : "Crête aileron",
                "level"      : "5",
                "traits"     : [
                    "Distordu"
                ],
                "required"   : [
                ],
                "description": [
                    "Des nageoires et des rabats de votre peau vous font avancer dans l'eau. Vous obtenez une Vitesse de nage de 4,50 mètres."
                ]
            },
            {
                "name"       : "Chair béante",
                "level"      : "5",
                "traits"     : [
                    "Distordu"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Une créature dont vous êtes conscient vous fait subir des dégâts avec une Frappe au corps-à-corps.",
                    "Votre blessure s'ouvre béante, révulsant votre agresseur. L'agresseur doit réussir un jet de @Check[fortitude|against:class-spell] contre le plus élevé entre votre DD de classe ou votre DD de sort ou devient Nauséeux 1 (Nauséeux 2 sur un échec critique). Il ne peut récupérer de l'état Nauséeux tant qu'il vous reste adjacent."
                ]
            },
            {
                "name"       : "Membres préhensiles",
                "level"      : "9",
                "traits"     : [
                    "Distordu"
                ],
                "required"   : [
                ],
                "description": [
                    "Des nodules, des crochets ou des griffes sur vos membres vous permettent de vous accrocher aux surfaces avec facilité. Vous obtenez une Vitesse d'escalade de 4,50 mètres."
                ]
            },
            {
                "name"       : "Arme vivante",
                "level"      : "1",
                "traits"     : [
                    "Distordu"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez appris à utiliser une partie de votre forme comme d'une arme. Lorsque vous choisissez ce don, vous obtenez une attaque à mains nues de griffe qui inflige 1d4 dégâts tranchants et possède les traits agile et finesse, une attaque de corne, de mâchoires ou de défense qui inflige 1d6 dégâts perforants et possède le trait polyvalent T ou encore une attaque à mains nues de queue qui inflige 1d6 dégâts contondants et possède le trait prise d'élan. Chacune de ces attaques à mains nues est dans le groupe d'arme pugilat.",
                    "Ces éléments sont modifiables. Vous pouvez choisir ce don à n'importe quel niveau et vous pouvez le réapprendre ou changer le type d'attaque que vous obtenez.",
                    "Spécial Vous pouvez prendre ce don plusieurs fois. Chaque fois que vous le faites, choisissez une autre forme d'attaque à mains nues parmi les options ci-dessus."
                ]
            },
            {
                "name"       : "Arme mutante",
                "level"      : "5",
                "traits"     : [
                    "Distordu"
                ],
                "required"   : [
                    "Arme vivante"
                ],
                "description": [
                    "Choisissez une attaque à mains nues que vous avez obtenue avec Arme vivante. Le dé de dégâts pour cette attaque s'accroît d'un cran jusqu'à la fin de votre tour. De plus, vous pouvez soit obtenir le trait allonge 3 mètres avec cette attaque jusqu'à la fin de votre tour soit un bonus de statut de +1 aux jets d'attaque avec cette attaque à mains nues jusqu'à la fin de votre tour."
                ]
            },
            {
                "name"       : "Entrailles résistantes",
                "level"      : "5",
                "traits"     : [
                    "Distordu"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre estomac est particulièrement résistant. Lorsque vous obtenez un succès sur un jet de Vigueur pour réduire la valeur de votre état Nauséeux, vous le réduisez de 2 (ou de 3 sur un succès critique)."
                ]
            },
            {
                "name"       : "Échapper à la prise",
                "level"      : "9",
                "traits"     : [
                    "Distordu",
                    "Sophistication"
                ],
                "required"   : [
                ],
                "description": [
                    "Conditions Vous êtes Agrippé, Immobilisé ou Entravé.",
                    "Vous avez la capacité de rapidement vous échapper des effets qui vous entravent. Faites un test pour vous Échapper. En cas de succès, vous pouvez Marcher rapidement, Faire un pas ou porter une Frappe avec une attaque à mains nues qui cible la créature à laquelle vous avez échappé. En cas d'échec, vous tentez de vous Échapper une seconde fois.",
                    "Vous augmentez votre pénalité d'attaques multiples en fonction des actions que vous avez entreprises, mais seulement après avoir terminé les deux actions."
                ]
            },
            {
                "name"       : "Cracher des tentacules",
                "level"      : "13",
                "traits"     : [
                    "Distordu"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez ouvrir en grand votre bouche jusqu'à une taille immense et cracher une gerbe de tentacules sur une grande surface. Vous pouvez lancer Tentacules noirs une fois par jour comme un sort inné occulte. Lorsque vous le faites, vous les crachez littéralement jusqu'à la portée appropriée où ils prennent racine et commencent à Saisir les créatures comme à l'ordinaire. Les tentacules vous reconnaissent comme une partie d'eux-mêmes et n'essaient pas de vous Saisir, même si vous vous trouvez dans la zone."
                ]
            },
            {
                "name"       : "Apparition étonnante",
                "level"      : "1",
                "traits"     : [
                    "Distordu"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous êtes qualifié en Intimidation (ou une autre compétence de votre choix, si vous étiez déjà qualifié en Intimidation) et obtenez le don de compétence Regard Intimidant en tant que don supplémentaire."
                ]
            },
            {
                "name"       : "Conformité trasnposable",
                "level"      : "5",
                "traits"     : [
                    "Distordu"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre vitalité protéiforme est féconde et multiple : vos veines sont parcourues d'un ichor vivifiant qui s'adapte au sang et à la physiologie de n'importe quel corps et votre peau mue sur commande, créant des pansements de tissus pour vous et pour les autres. Vous êtes qualifié en Médecine. Si vous étiez déjà qualifié en Médecine, vous êtes qualifié dans une compétence de votre choix. Vous pouvez Prodiguer les premiers soins sans Trousse du guérisseur en utilisant votre physiologie à la place, mais vous devez subir 1 dégât pour tenter de le faire. De même, vous pouvez Soigner les blessures sans Trousse du guérisseur mais vous devez subir [[/r 2d8 #dégâts]]{2d8 dégâts}. Vous obtenez un bonus de circonstances de +1 sur tous vos tests de Médecine pour Prodiguer les premiers soins et Soigner les blessures en utilisant votre propre physiologie."
                ]
            },
            {
                "name"       : "Sensibilité instinctive",
                "level"      : "5",
                "traits"     : [
                    "Distordu"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez un sens aigu du mouvement autour de vous.",
                    "Vous obtenez Perception du déplacement en tant que sens imprécis dans les 9 m. Cela vous permet de détecter les déplacements proches à travers les vibrations et le mouvement de l'air."
                ]
            },
            {
                "name"       : "Conscience des embuscades",
                "level"      : "5",
                "traits"     : [
                    "Goloma"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous obtenez un bonus de circonstances de +2 aux tests de Perception lorsqu'ils sont utilisés pour déterminer l'initiative. De plus, si votre test d'initiative est égal à celui d'un adversaire, vous commencez le premier, peu important que vous ayez utilisez Perception ou non."
                ]
            },
            {
                "name"       : "Vision arcanique",
                "level"      : "13",
                "traits"     : [
                    "Goloma"
                ],
                "required"   : [
                    "ability to cast the detect magic cantrip"
                ],
                "description": [
                    "Vous vous êtes entraîné à constamment être à la recherche d'effets magiques, même lorsque vous vous concentrez pour d'autres choses. Lorsque vous Cherchez, vous obtenez aussi les avantages de Détection de la magie à moins que vous choisissiez de ne pas le faire."
                ]
            },
            {
                "name"       : "Capter les détails",
                "level"      : "1",
                "traits"     : [
                    "Goloma"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous êtes vif à reconnaître les détails à propos des gens et des objets qui vous entourent. Vous êtes qualifié en Société et obtenez le don de compétence Œil pour les nombres. Si vous êtes déjà qualifié en Société (du fait de votre historique ou de votre classe, par exemple), vous êtes qualifié à la place dans une autre compétence de votre choix."
                ]
            },
            {
                "name"       : "Regard constant",
                "level"      : "9",
                "traits"     : [
                    "Goloma"
                ],
                "required"   : [
                    "Regard vigilant"
                ],
                "description": [
                    "Vos yeux surveillent continuellement les dangers de tous les côtés. Vous ne pouvez pas être pris en tenaille par des créatures de votre niveau ou inférieur, même si vous n'avez pas utilisé Regard vigilant."
                ]
            },
            {
                "name"       : "Instinct défensif",
                "level"      : "9",
                "traits"     : [
                    "Goloma"
                ],
                "required"   : [
                ],
                "description": [
                    "Conditions Vous êtes adjacent à au moins deux ennemis",
                    "Votre corps se crispe lorsqu'il est encerclé, vous mettant juste assez sur les nerfs pour anticiper une attaque. Vous obtenez un bonus de circonstances de +1 à la CA jusqu'au début de votre prochain tour et Faites un pas."
                ]
            },
            {
                "name"       : "Courage goloma",
                "level"      : "1",
                "traits"     : [
                    "Goloma"
                ],
                "required"   : [
                ],
                "description": [
                    "La chose la plus importante que vous avez apprise en vivant avec la peur, c'est comment la surmonter.",
                    "Lorsque vous obtenez un succès sur un jet de sauvegarde contre un effet de terreur, il devient un succès critique. De plus, vous obtenez un bonus de circonstances de +1 aux jets de Volonté contre les effets de terreur et un bonus de circonstances de +2 à votre DD de Volonté contre les tentatives de vous Démoraliser."
                ]
            },
            {
                "name"       : "Connaissance des golomas",
                "level"      : "1",
                "traits"     : [
                    "Goloma"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez vécu une vie isolée, consacrée à éviter le danger. Vous êtes qualifié en Discrétion et en Survie. Si vous êtes déjà automatiquement qualifié dans l'une de ces compétences (grâce à votre historique ou à votre classe, par exemple), vous devenez à la place qualifié dans une compétence de votre choix. Vous êtes également qualifié en Connaissance des golomas."
                ]
            },
            {
                "name"       : "Percer l'obscurité",
                "level"      : "1",
                "traits"     : [
                    "Goloma"
                ],
                "required"   : [
                    "low-light vision"
                ],
                "description": [
                    "Vos yeux se sont adaptés pour voir en toutes circonstances, même sans l'aide de la lumière. Vous obtenez vision dans le noir, qui vous permet de voir dans l'obscurité et la lumière faible aussi bien que dans la lumière vive. Cependant, dans l'obscurité, vous ne voyez qu'en noir et blanc.",
                    "Spécial Vous ne pouvez prendre ce don qu'au niveau 1 et vous ne pouvez pas utilise le réapprentissage pour le perdre."
                ]
            },
            {
                "name"       : "Griffes protectrices",
                "level"      : "5",
                "traits"     : [
                    "Goloma"
                ],
                "required"   : [
                    "vicious goloma heritage"
                ],
                "description": [
                    "La chitine de vos griffes est si dure que vous pouvez vous défendre contre les attaques avec celles-ci. Votre attaque sans arme des griffes de l'héritage de goloma vicieux obtient le trait d'arme parade."
                ]
            },
            {
                "name"       : "Discerner l'invisible",
                "level"      : "13",
                "traits"     : [
                    "Goloma"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous remarquez des choses que d'autres ne peuvent pas voir du tout. Lorsque vous êtes adjacent à une créature Non détectée de votre niveau ou inférieur, elle est seulement Cachée pour ce qui vous concerne. Vous n'avez besoin que d'un @Check[flat|dc:5|showDC:all] pour cibler une créature Cachée."
                ]
            },
            {
                "name"       : "Regard lucide",
                "level"      : "17",
                "traits"     : [
                    "Arcanique",
                    "Concentration",
                    "Goloma"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par heure",
                    "Lorsque vous accoutumez finement vos yeux, votre regard peut percer tous les artifices, même ceux qui sont magiques. Lorsque vous utilisez Regard lucide, vous obtenez les effets du sort Vision véritable au rang 6, en utilisant votre modificateur de @Check[perception] pour le test de contre."
                ]
            },
            {
                "name"       : "Regard vigilant",
                "level"      : "1",
                "traits"     : [
                    "Concentration",
                    "Goloma"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous utilisez vos nombreux yeux pour regarder dans toutes les directions à la fois, ce qui vous rend extrêmement observateur pendant une courte période de temps. Vous obtenez Vision panoramique jusqu'au début de votre prochain tour. Cela vous permet de voir dans toutes les directions et vous empêche d'être pris en tenaille."
                ]
            },
            {
                "name"       : "Construire les premiers murs",
                "level"      : "9",
                "traits"     : [
                    "Concentration",
                    "Terre",
                    "Jotunborn",
                    "Manipulation",
                    "Occulte"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Les pouvoirs de la création qui circulent à travers vous pour conjurer un mur temporaire. Vous crez un mur de poussière avec les effets de Mur de pierre avec les exceptions suivantes. Le mur peut atteindre de 18 mètres de long et de 3 mètres de haut et doit se tenir verticalement, vous empêchant de construire d'autres structures avec. Chaque portion de mur de 3 mètres sur 3 mètres du mur possède une CA 10, une Solidité 10 et 20 Points de vie. Le mur reste pendant 1 heure ou jusqu'à être Révoqué."
                ]
            },
            {
                "name"       : "Invoquer les premiers outils",
                "level"      : "5",
                "traits"     : [
                    "Concentration",
                    "Jotunborn",
                    "Manipulation",
                    "Occulte"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vous faites appel aux anciens pouvoirs qui ont été accordés par les dieux pour créer n'importe quel outil dont vous pourriez avoir besoin à tout moment. Vous conjurez un outil simple, tel qu'une pioche ou un marteau qui apparaît dans vos mains. Cet outil reste conjuré jusqu'à vos prochains préparatifs quotidiens tant qu'il reste sur votre personne. S'i l'outil quitte vos possessions pendant plus d'1 minute, il se transforme en un monceau de soie qui se dissout dans le néant sans laisser de trace.",
                    "Au niveau 9, vous pouvez utiliser cette capacité une fois par heure au lieu d'une fois par jour. Lorsque vous l'utilisez de cette manière, vous ne pouvez maintenir qu'un outil à la fois. Tout outil précédent que vous avez conjuré se dissout dans le néant."
                ]
            },
            {
                "name"       : "Intuition du régisseur",
                "level"      : "1",
                "traits"     : [
                    "Jotunborn"
                ],
                "required"   : [
                ],
                "description": [
                    "Vos ancêtres avaient une compréhension profonde du monde naturel qui les entourait et vous avez acquis certaines de leurs connaissances et techniques. Vous êtes qualifié en Nature. Si vous devriez être déjaà automatiquement qualifié en Athlétisme (du fait de votre historique ou de votre classe, par exemple), vous devenez qualifié à la place dans une compétence de votre choix.",
                    "de plus, lorsque vous êtes à l'extérieur, vous pouvez passer 10 minutes à lire les cieux et déterminer le temps à venir. Vous obtenez une impression générale du temps qu'il fera jusqu'à 8 heures à l'avance. Vous pouvez utiliser ceci pour déterminer que le ciel sera clair ou qu'une tempête orageuse arrive, mais vous ne pouvez pas en déterminer les caractéristiques spécifiques comme la force ou la direction du vent ou qu'une tornade se formera plus tard."
                ]
            },
            {
                "name"       : "Restoration du régisseur",
                "level"      : "1",
                "traits"     : [
                    "Jotunborn"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Un objet que vous tenez, portez ou maniez devient Brisé mais pas détruit.",
                    "Les talents de vos ancêtres pour prendre soin des choses vous permettent de réparer les objets qui vous sont chers. L'objet déclencheur est réparé jusqu'à un nombre de Points de vie égal à 1 de plus que son Seuil de rupture. Par exemple, un bouclier d'acier avec un Seuil de Rupture de 10 sera ramené à 11 Points de vie."
                ]
            },
            {
                "name"       : "Briser la frontière de l'iivlar",
                "level"      : "13",
                "traits"     : [
                    "Jotunborn"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez tordre la frontière entre les plans avec la compétence naturelle d'un iivlar. Vous pouvez lancer Oscillation comme un sort inné au rang 4 une fois par jour. Lorsque vous Maintenez le sort, augmentez la distance à laquelle vous vous téléportez de 4,50 mètres."
                ]
            },
            {
                "name"       : "Déviation de l'iivlar",
                "level"      : "9",
                "traits"     : [
                    "Jotunborn"
                ],
                "required"   : [
                    "keeper jotunborn heritage"
                ],
                "description": [
                    "Déclencheur Vous êtes atteint par un coup critique qui inflige des dégâts physiques.",
                    "Vous êtes capable d'utiliser la soie tissée dans votre peau pour dévier les attaques, en réduisant la létalité des coups les plus graves. Faites un @Check[flat|dc:17|showDC:all]. Si vous réussissez, l'attaque devient un coup normal."
                ]
            },
            {
                "name"       : "Posture de bataille du jotun",
                "level"      : "5",
                "traits"     : [
                    "Jotunborn",
                    "Posture"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous émulez la posture de bataille de vos ancêtres, vous permettant d'utiliser de puissantes armes pour attaquer des ennemis éloignés. Lorsque vous êtes dans cette posture, lorsque vous maniez une arme au corps-à-corps qui nécessite deux mains et qui ne possèdent pas d'allonge, l'arme obtient une allonge de 3 mètres."
                ]
            },
            {
                "name"       : "Projection du jotun",
                "level"      : "9",
                "traits"     : [
                    "Jotunborn",
                    "Manipulation"
                ],
                "required"   : [
                ],
                "description": [
                    "Conditions Vous avez au moins une main disponible et êtes adjacent à un allié.",
                    "Votre force colossale vous permet de soulever vos alliés et de les projeter à travers le champ de bataille. Ramassez un allié adjacent consentant d'une taille inférieure à la vôtre et projetez-le vers un espace inoccupé que vous pouvez voir dans un rayon de 7,50 mètres. Si vous disposez de deux mains libres, vous pouvez à la place le projeter dans un espace dans les 9 mètres. Le déplacement de votre allié ne déclenchent pas de réaction. Votre allié termine ce déplacement sur ses pieds et ne subit pas de dégâts de chute. Si votre allié termine son déplacement avec au moins un ennemi dans son allonge au corps-à-corps, il peut porter une Frappe au corps-à-corps contre un ennemi dans son allonge par une réaction."
                ]
            },
            {
                "name"       : "Yeux du jotun",
                "level"      : "1",
                "traits"     : [
                    "Jotunborn"
                ],
                "required"   : [
                    "low-light vision"
                ],
                "description": [
                    "Votre vision s'est adaptée à l'obscurité entre les plans. Vous obtenez vision dans le noir."
                ]
            },
            {
                "name"       : "Poigne du jotun",
                "level"      : "5",
                "traits"     : [
                    "Jotunborn"
                ],
                "required"   : [
                    "expert in Athletics"
                ],
                "description": [
                    "Vous maîtrisez désormais une technique qui vous permet de réduire la distance qui vous sépare de vos adversaires et de les contraindre à se soumettre. Vous Faites un pas et un test d'Athlétisme pour Saisir une créature."
                ]
            },
            {
                "name"       : "Coeur de jotun",
                "level"      : "17",
                "traits"     : [
                    "Jotunborn"
                ],
                "required"   : [
                    "Posture de bataille du jotun"
                ],
                "description": [
                    "Vous avez débloqué le pouvoir d'un véritable géant en votre sein. Votre taille devient Très grande. Vous avez une allonge de 3 mètres. Le maximum de vos Points de vie augmente de votre niveau.",
                    "Spécial Lorsque vous adoptez la Posture de bataille du jotun, au lieu de ses précédents effets, il augmente désormais l'allonge de n'importe quelle arme que vous maniez ou de votre attaque à mains nues de poing de 1,50 mètre."
                ]
            },
            {
                "name"       : "Restauration du jotun",
                "level"      : "13",
                "traits"     : [
                    "Jotunborn"
                ],
                "required"   : [
                    "Restoration du régisseur"
                ],
                "description": [
                    "Vous avez maîtrisé la manière de puiser dans vos pouvoirs restaurateur à une fréquence plusélevée. Vous pouvez utiliser Restauration du régisseur une fois par heure au lieu d'une fois par jour."
                ]
            },
            {
                "name"       : "Transposition du jotun",
                "level"      : "17",
                "traits"     : [
                    "Peu courant",
                    "Jotunborn"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez appris à pleinement vous déplacer à travers les plans, en débutant par le Plan éthéré. Vous pouvez lancer Téléportation interplanaire deux fois par semaine comme un sort inné occulte qui ne peut cibler que vous-même. Votre sort sert de locus pour le sort et vous permet de voyager entre le Plan éthéré, l'Univers ou l'espace entre les plans connu sous le nom de Franges sans avoir besoin de clé planaire. Vous pouvez utiliser ces incantations pour voyager vers d'autres plans si vous avez les clés planaires appropriées, comme à l'ordinaire."
                ]
            },
            {
                "name"       : "Jotunborn bagarreur",
                "level"      : "1",
                "traits"     : [
                    "Jotunborn"
                ],
                "required"   : [
                ],
                "description": [
                    "La lutte est un passe-temps courant parmi les jotunborns et vous vous y êtes régulièrement adonné. Vous êtes qualifié en Athlétisme. Si vous devriez être déjà automatiquement qualifié en Athlétisme (du fait de votre historique ou de votre classe, par exemple), vous devenez qualifié à la place dans une compétence de votre choix. Vous obtenez aussi le don de compétence Lutteur contre les titans."
                ]
            },
            {
                "name"       : "Connaissance des jotunborns",
                "level"      : "1",
                "traits"     : [
                    "Jotunborn"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez été instruit de l'histoire des voyages planaires de votre peuple ainsi que des compétences nécessaires pour prospérer dans les environnements sous-planaires. Vous êtes qualifié en Occultisme et en Survie. Si vous devriez être automatiquement qualifié dans l'une de ces compétences (du fait de votre historique ou de votre classe, par exemple), vous devenez qualifié à la place dans une compétence de votre choix. Vous obtenez aussi le don général Connaissance supplémentaire en Connaissance des jotunborns.",
                    "Spécial Si vous possédez l'héritage Sage jotunborn, vous obtenez le don Connissance supplémentaire une seconde fois dans une connaissance de votre choix."
                ]
            },
            {
                "name"       : "Familiarité avec les armes des jotunborns",
                "level"      : "1",
                "traits"     : [
                    "Jotunborn"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous obtenez l'accès à toutes les armes peu courantes avec le trait jotunborn. Vous avez une familiarité avec les armes disposant du trait jotunborn ainsi qu'avec les bolas, le fléau de guerre, la grande hache, la hallebarde, le maillet et la pique. En ce qui concerne votre maîtrise, vous considérez n'importe laquelle de ces armes qui est une arme de guerre comme une arme simple et n'importe laquelle de ces armes qui est évoluée comme une arme de guerre."
                ]
            },
            {
                "name"       : "Résilience planaire",
                "level"      : "5",
                "traits"     : [
                    "Jotunborn"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre corps s'est adapatée à la diversité des climats rigoureux que vous rencontrez lors de vos voyages. Vous considérez les effets environnementaux basés sur la température comme s'ils étaient d'un degré inférieur (le froid ou la chaleur incroyable devient extrème, le froid ou la chaleur extrème devien important, etc.).",
                    "De plus, les énergies planaires qui circulent à travers vous vous permettent d'adapter encore davantage votre corps avec de la concentration et un effort. Au cours de vos préparatifs quotidiens, choisissez entre le feu ou le froid. Vous obtenez une résistance contre ces dégâts égale à la moitié de votre niveau."
                ]
            },
            {
                "name"       : "Voyageur planaire",
                "level"      : "17",
                "traits"     : [
                    "Jotunborn"
                ],
                "required"   : [
                    "Saut de puce planaire"
                ],
                "description": [
                    "Fréquence Une fois par heure",
                    "Déclencheur Votre tour commence.",
                    "Vous vous concentrez sur les espaces entre les plans, vous permettant d'améliorer votre déplacement pendant une courte période. Votre Marche rapide est améliorée jusqu'à la fin de votre tour, vous permettant de vous téléporter instantanément à n'importe quel endroit que vous pourriez atteindre avec votre Vitesse au lieu de traverser normalement jusqu'à cet endroit. Bien qu'augmentée, vos Marches rapides obtiennent le trait téléportation. Vos Marches rapides augmentées ne déclenche pas les réactions qui peuvent être déclenchée par des actions de déplacement ou en quittant ou en pénétrant dans une case, à moins que ces réactions ne soient spécifiquement déclenchées par la téléportation."
                ]
            },
            {
                "name"       : "Saut de puce planaire",
                "level"      : "13",
                "traits"     : [
                    "Jotunborn",
                    "Téléportation"
                ],
                "required"   : [
                    "Pas planaire précipité"
                ],
                "description": [
                    "Fréquence Une fois toutes les 10 minutes",
                    "Les espaces entre les plans vous sont évidents et vous pouvez les utiliser pour vous déplacer de manière inattendue. Vous vous téléportez instantanément à n'importe quel endroit que vous pourriez atteindre avec votre Vitesse."
                ]
            },
            {
                "name"       : "Pas planaire",
                "level"      : "9",
                "traits"     : [
                    "Concentration",
                    "Jotunborn",
                    "Déplacement",
                    "Occulte",
                    "Téléportation"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous vous déplacez temporairement juste au-delà du seuil du plan actuel, vous accordant l'état Masqué jusqu'à la fin de votre prochain tour. Vous restez clairement visible en faisant un pas à l'extérieur d'un plan de cette manière et vous ne pouvez pas utilisé cet état masqué pour vous Cacher ou Être furtif."
                ]
            },
            {
                "name"       : "Pas planaire précipité",
                "level"      : "1",
                "traits"     : [
                    "Jotunborn",
                    "Occulte",
                    "Téléportation"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vous vous déplacez avec une célérité magique, vous faufilant entre les frontières planaires pour raccourcir votre voyage. Marchez rapidement une fois. Cette Marche rapide ne déclenche pas de réaction déclenchée par le déplacement.",
                    "Une fois que cette Marche rapide est achevée, vous obtenez un bonus de statut de +1,50 mètre à votre Vitesse jusqu'au début de votre prochain tour.",
                    "Effet : Pas planaire précipité"
                ]
            },
            {
                "name"       : "Bond percutant",
                "level"      : "5",
                "traits"     : [
                    "Jotunborn"
                ],
                "required"   : [
                    "warrior jotunborn heritage"
                ],
                "description": [
                    "Vous utilisez l'élan fourni par vos poings massifs pour vous élancer à travers les aris. Frappez avec votre attaque à mains nues de poings et puis tentez un Saut en hauteur ou un Saut en longueur. Vous considérez que vous avez pris de l'élan et n'avez pas besoin de Marcher rapidement avant d'entreprendre cette activité pour éviter l'échec. Vous pouvez tenter cette Frappe contre un objet non tenu ou une surface plate inoccupée et vous obtenez un bonus de circonstances de +2 à votre test d'Athlétisme pour Sauter en hauteur ou Sauter en longueur lorsque vous faites ainsi.",
                    "Note PFS : Pour les besoins de ce don, la CA d'une surface inoccupée est de 10."
                ]
            },
            {
                "name"       : "Piétinement lissant",
                "level"      : "13",
                "traits"     : [
                    "Jotunborn",
                    "Manipulation",
                    "Occulte"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous piétinez et libérez une vague de la magie de la création dans une @Template[type:emanation|distance:30]{émanation de 9 mètres} qui transforme le terrai difficile et le terrain très difficile non magique en un terrain normal. Cette trasnformation du terrain reste en place pendant 1 minute, après quoi le terrain reprend son état original.",
                    "Votre piétinement peut aussi contrer le terrain difficile magique et le terrain très difficile magique. Le rang de contre de votre piétinement est égal à la moitié de votre niveau (arrondi au supérieur) et pour le jet, utilise soit votre DD de classe -10csoit votre modifcateur d'attribut d'incantation plus votre bonus de maîtrise d'incantation. Si vous parvenez à contrer l'effet déclencheur, vous neutraliser son effet pendant 1 minute, après quoi l'effet reprend si sa durée n'est pas expirée."
                ]
            },
            {
                "name"       : "Espace courbé",
                "level"      : "17",
                "traits"     : [
                    "Peu courant",
                    "Kashrishi"
                ],
                "required"   : [
                    "Réalisation transcendante"
                ],
                "description": [
                    "Même l'espace n'est pas à la hauteur de la puissance déchaînée de votre esprit. Vous pouvez lancer Téléportation comme un sort occulte inné. Vous n'avez pas besoin de toucher les créatures pour les cibler avec ce sort inné, tant qu'elles sont dans la portée de votre Sens empathique."
                ]
            },
            {
                "name"       : "Lumière purifiante",
                "level"      : "17",
                "traits"     : [
                    "Concentration",
                    "Kashrishi",
                    "Lumière",
                    "Occulte"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Un éclat de lumière émanant de votre corne nettoie vos alliés de leurs maux et fait vaciller vos ennemis. Vous et tous les alliés dans une @Template[emanation|distance:20]{émanation de 6 mètres} bénéficiez d'un sort de Restauration au rang 4. Tous les ennemis dans l'émanation sont Éblouis jusqu'à la fin de votre prochain tour."
                ]
            },
            {
                "name"       : "Savoir communautaire",
                "level"      : "1",
                "traits"     : [
                    "Concentration",
                    "Kashrishi",
                    "Occulte"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par heure",
                    "Déclencheur Vous tentez un test de compétence qui nécessite 3 actions au plus.",
                    "Vous communiez avec les échos psychiques de vos ancêtres et avec votre communauté, canalisant leurs expériences par votre intermédiaire. Vous obtenez un bonus de statut de +2 que le test de compétence déclencheur."
                ]
            },
            {
                "name"       : "Luminescence du cristal",
                "level"      : "1",
                "traits"     : [
                    "Concentration",
                    "Kashrishi",
                    "Lumière"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre corne brille d'une couleur bioluminescente, émettant de la lumière vive dans une @Template[emanation|distance:20]{émanation de 6 mètres} (et de la lumière faible dans les 6 mètres suivants). Cette lumière peut être de n'importe quelle couleur. Les couleurs les plus courantes sont le bleu et le pourpre, sauf pour les trogloshis qui émettent habituellement une lumière blanche. La lumière cesse de briller lorsque vous faites de nouveau cette action ou que vous êtes Inconscient.",
                    "Si un sort ou une capacité devait activer votre corne lumineuse alors que Luminescence du cristal est active, le rayon de la lumière vive et de la lumière faible augmentent de 3 mètres chacun à la place et ce jusqu'au début de votre prochain tour. Ceci n'est pas cumulatif, de sorte que l'utilisation d'une autre capacité de ce type n'augmente plus le rayon.",
                    "Effet : Luminescence du cristal",
                    "Spécial Si vous avez l'héritage trogloshi, vous pouvez sélectionner ce don une seconde fois (c'est-à-dire en plus de l'obtenir automatiquement avec votre héritage). Si vous le faites, la zone passe à une @Template[emanation|distance:40]{émanation de 12 mètres} (et une lumière faible dans les 12 mètres suivants). De plus, vous pouvez utiliser Luminescence cristalline par une action gratuite la première fois que vous l'utilisez à chacun de vos tours."
                ]
            },
            {
                "name"       : "Partition émotionnelles",
                "level"      : "1",
                "traits"     : [
                    "Kashrishi"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez créé de solides cloisons mentales dans votre esprit pour filtrer les influences émotionnelles négatives. Vous obtenez un bonus de circonstances de +1 aux jets de sauvegarde contre les effets d'émotion. Si vous obtenez un succès sur un jet de sauvegarde contre un effet d'émotion, il devient un succès critique."
                ]
            },
            {
                "name"       : "Calme empathique",
                "level"      : "5",
                "traits"     : [
                    "Kashrishi"
                ],
                "required"   : [
                ],
                "description": [
                    "Une fois par jour, vous pouvez lancer soit Apaisement, soit Sanctuaire comme un sort inné occulte, intensifié à la moitié de votre niveau arrondi au supérieur."
                ]
            },
            {
                "name"       : "Corne de guerrier",
                "level"      : "5",
                "traits"     : [
                    "Kashrishi"
                ],
                "required"   : [
                    "Puncturing Horn or xyloshi"
                ],
                "description": [
                    "Vous pouvez modifier la taille et la forme de votre corne au fil du temps en utilisant vos pouvoirs mentaux. Choisissez deux des traits d'arme suivants : croc-en-jambe, désarmer, pousser et saisir. Votre corne gagne les caractéristiques choisies.",
                    "Spécial Vous pouvez prendre ce don une seconde fois, en ajoutant les traits que vous n'avez pas choisi la première fois que vous l'avez pris."
                ]
            },
            {
                "name"       : "Esprit fortifié",
                "level"      : "9",
                "traits"     : [
                    "Kashrishi"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre esprit est inhabituellement résistant et imperméable à toute influence. Lorsque vous devriez obtenir l'état Fasciné ou Stupéfié, vous pouvez faire un @Check[flat|dc:17]. En cas de succès, vous n'obtenez pas l'état Fasciné ou Stupéfié."
                ]
            },
            {
                "name"       : "Revitalisation kashrishie",
                "level"      : "13",
                "traits"     : [
                    "Kashrishi"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Vous avez l'état mourant et êtes sur le point de faire un test de récupération. Vous pouvez utiliser Revitalisation kashrishie même si vous êtes autrement incapable d'agir",
                    "Le puits d'énergie psychique contenu dans votre esprit peut dépasser les limites de votre corps physique. Vous repassez à 1 Point de vie, perdez les états Mourant et Inconscient et pouvez agir normalement à ce tour. Vous gagnez ou augmentez l'état Blessé comme à l'ordinaire en perdant l'état Mourant."
                ]
            },
            {
                "name"       : "Subsistance mentale",
                "level"      : "1",
                "traits"     : [
                    "Kashrishi"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez subvenir à vos besoins grâce à la puissance de votre esprit. Vous n'avez besoin que d'une seule portion de nourriture et d'eau par semaine pour éviter la famine ou la déshydratation. Vous pouvez retenir votre souffle pendant 5 rounds supplémentaires avant de manquer d'air."
                ]
            },
            {
                "name"       : "Esprit ouvert",
                "level"      : "1",
                "traits"     : [
                    "Kashrishi"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez des capacités psychiques innées qui vous permettent de puiser dans la puissance de votre esprit. Choisissez un tour de magie dans la liste des sorts occultes. Vous pouvez lancer ce sort comme un sort occulte inné à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur."
                ]
            },
            {
                "name"       : "Corne perforante",
                "level"      : "1",
                "traits"     : [
                    "Kashrishi"
                ],
                "required"   : [
                ],
                "description": [
                    "Alors que de nombreux kashrishis n'utilisent leurs cornes que pour ouvrir des fruits à coque dure ou amplifier leurs pouvoirs psychiques, vous vous êtes entraîné à utiliser les vôtres de manière offensive. Vous obtenez une attaque à mains nues de corne qui inflige 1d6 dégâts perforants. Votre corne fait partie du groupe pugilat et possède les traits finesse et à mains nues.",
                    "Spécial Si vous avez l'héritage xyloshi, votre corne inflige à la place 1d8 dégâts perforants."
                ]
            },
            {
                "name"       : "Réimaginer",
                "level"      : "13",
                "traits"     : [
                    "Kashrishi"
                ],
                "required"   : [
                    "Réalisation transcendante"
                ],
                "description": [
                    "Vous pouvez lancer Potentiel onirique comme un sort inné occulte. Vous pouvez lancer ce sort en vous ciblant en utilisant votre dernière activité avant de vous endormir pour qu'elle bénéficie de ses avantages et de ses effets normaux."
                ]
            },
            {
                "name"       : "Détaler vers le haut",
                "level"      : "1",
                "traits"     : [
                    "Kashrishi"
                ],
                "required"   : [
                    "athamasi or xyloshi"
                ],
                "description": [
                    "Votre environnement nécessite que vous grimpiez aux murs des grottes ou des troncs d'arbre avec une grande habitude. Vous obtenez une Vitesse d'escalade de 3 mètres."
                ]
            },
            {
                "name"       : "Grimpeur expérimenté",
                "level"      : "5",
                "traits"     : [
                    "Kashrishi"
                ],
                "required"   : [
                    "athamasi or xyloshi"
                ],
                "description": [
                    "Vous pouvez naviguer sur des surfaces verticales avec facilité. Vous obtenez une Vitesse d'escalade de 3 mètres. Si vous possédez également le don d'ascendance Détaler vers le haut, votre Vitesse d'escalade est égale à votre Vitesse terrestre lorsque vous montez aux arbres ou escaladez les parois des cavernes."
                ]
            },
            {
                "name"       : "Dégagement télékinétique",
                "level"      : "9",
                "traits"     : [
                    "Kashrishi",
                    "Occulte"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Votre tour commence et vous êtes Agrippé ou Entravé.",
                    "Une fine enveloppe d'énergie télékinétique jaillit de votre peau, élargissant suffisamment l'emprise de votre ennemi pour que vous puissiez vous dégager. Vous obtenez un bonus de statut de +2 aux tests pour S'Échapper de tout ca qui a pu vous Agripper ou Entraver. Ce bonus dure jusqu'à ce que vous ne soyez plus Agrippé ou Entravé ou que vous sombriez dans l'Inconscience."
                ]
            },
            {
                "name"       : "Peau robuste",
                "level"      : "1",
                "traits"     : [
                    "Kashrishi"
                ],
                "required"   : [
                    "lethoci heritage or xyloshi heritage"
                ],
                "description": [
                    "Votre peau est une armure intermédiaire du groupe des armures de plates qui accorde un bonus d'objet de +4 à la CA, un maximum de Dextérité de +1, une pénalité aux tests de -2, une pénalité de Vitesse de -1,50 mètre, une valeur de Force de +3 et le trait confort. Vous ne pouvez jamais porter une autre armure ou enlever votre peau. Vous pouvez graver des runes d'armure sur votre peau.",
                    "Si vous êtes un kashrishi lethoci et prenez ce don, vos modifications vous permettent de mieux flotter, vous permettant de nager à la surface de cours d'eau turbulents sans avoir besoin de faire un tests d'Athlétisme.",
                    "Spécial Vous ne pouvez prendre ce don qu'au niveau 1 et vous ne pouvez utiliser le réapprentissage pour le perdre ou le gagner."
                ]
            },
            {
                "name"       : "Réalisation transcendante",
                "level"      : "9",
                "traits"     : [
                    "Kashrishi"
                ],
                "required"   : [
                    "Découvrir le secret"
                ],
                "description": [
                    "Vous avez libéré encore davantage le potentiel illimité de votre esprit. Choisissez un sort occulte de rang 3, qu'il s'agisse d'un sort courant ou d'un autre auquel vous avez accès, y compris un sort de rang inférieur intensifié au rang 3, si vous le désirez. Vous pouvez lancer ce sort une fois par jour comme un sort occulte inné."
                ]
            },
            {
                "name"       : "Découvrir le secret",
                "level"      : "5",
                "traits"     : [
                    "Kashrishi"
                ],
                "required"   : [
                    "Esprit ouvert"
                ],
                "description": [
                    "Vous plongez plus profondément dans votre potentiel psychique. Choisissez un sort occulte de rang 1, soit un sort courant, soit un autre auquel vous avez accès. Vous pouvez lancer ce sort une fois par jour comme un sort occulte inné."
                ]
            },
            {
                "name"       : "Puits de potentiel",
                "level"      : "5",
                "traits"     : [
                    "Kashrishi"
                ],
                "required"   : [
                    "focus pool",
                    "at least one innate spell from a kashrishi heritage or ancestry feat that shares a tradition with at least one of your focus spells"
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Votre esprit est un puits profond de potentiel psychique. Vous regagnez 1 point de Focalisation jusqu'à votre maximum habituel."
                ]
            },
            {
                "name"       : "Incendie de renard",
                "level"      : "9",
                "traits"     : [
                    "Feu",
                    "Kitsune"
                ],
                "required"   : [
                    "Flamboiement vulpin"
                ],
                "description": [
                    "Lorsque vous obtenez un coup critique avec une Frappe de Feu de renard, la cible subit 1d4 dégâts persistants supplémentaires du même type que le feu de renard. Vous obtenez un bonus d'objet à ses dégâts persistants égaux au bonus d'objet du feu de renard aux jets d'attaque. Lorsque la cible qui subit des dégâts persistants arrive en contact physique avec une autre créature (par exemple, si l'un de ces alliés la touche alors que vous Prodiguez les premiers soins), vous pouvez utiliser une réaction pour diriger la flamme pour qu'elle bondisse vers une seconde cible, mettant un terme aux dégâts persistants sur la première créature et les déplaçant vers la seconde."
                ]
            },
            {
                "name"       : "Possession vulpine",
                "level"      : "17",
                "traits"     : [
                    "Peu courant",
                    "Kitsune"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez projeter un forme spirituelle pour en posséder une autre. Vous pouvez lancer Possession en tant que sort inné divin une fois par jour. La cible de votre Possession présente une ou plusieurs particularités inhabituelles, telles que des traits plus anguleux ou des préférences alimentaires étranges, donnant à la cible une pénalité de circonstances de -1 à son DD de Duperie lorsque quelqu'un utilise Devine les intentions pour déterminer si elle est possédée."
                ]
            },
            {
                "name"       : "Astuce du renard",
                "level"      : "9",
                "traits"     : [
                    "Kitsune"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par heure",
                    "Vous avez toujours le temps pour une farce ou un canular. Vous Faire diversion, Dissimuler un objet ou vous Vous cachez. Toutes les créatures qui ont été témoin de votre astuce de renard en sont averties, devenant temporairement immunisées à votre Astuce de renard pendant 24 heures."
                ]
            },
            {
                "name"       : "Flamboiement vulpin",
                "level"      : "1",
                "traits"     : [
                    "Kitsune"
                ],
                "required"   : [
                ],
                "description": [
                    "D'un claquement de votre queue, vous créez des volutes d'énergie bleue. Vous obtenez une attaque à mains nues à distance de flamboiement vulpin avec une portée maximale de 6 mètres. L'attaque inflige [[/r 1d4]{1d4 dégâts} du type choisi (aucun modificateur d'attribut n'est ajouté au jet de dégâts). Votre attaque de flamboiement vulpin est dans le groupe d'arme des frondes et possède le trait magique. Comme les autres attaques à mains nues, vous pouvez améliorer cette attaque avec des Bandelettes de coups puissants.",
                    "Spécial Si vous êtes un kitsune vent gelé, votre flamboiement vulpin inflige des dégâts de froid à la place de dégâts d'électricité ou de feu."
                ]
            },
            {
                "name"       : "Forme hybride (Kitsune)",
                "level"      : "5",
                "traits"     : [
                    "Kitsune"
                ],
                "required"   : [
                ],
                "description": [
                    "Lorsque vous Changez de forme (Kitsune), vous conservez certains éléments de votre forme kitsune, vous permettant de parler sous la forme d'un renard, d'utiliser les attaques à mains nues kitsune dans une forme sans queue ou de gagner une queue sous votre forme sans queue pour pouvoir utiliser des capacités qui en imposent une.",
                    "Vous pouvez changer de forme pour altérer les détails de votre forme hybride sans vous transformer en votre forme réelle ou en une forme alternative. Tant que vous êtes sous forme hybride, vos traits vulpins rendent évidents que vous n'êtes pas un humanoïde normal."
                ]
            },
            {
                "name"       : "Pierre tueuse",
                "level"      : "13",
                "traits"     : [
                    "Kitsune"
                ],
                "required"   : [
                    "Orbe étoilé"
                ],
                "description": [
                    "Votre orbe étoilé cache un miasme mortel. Vous pouvez lancer Nuage toxique au rang 5 comme un sort divin inné une fois par jour. Vous devez faire une action de manipulation pour viser avec l'orbe vers le lieu d'effet du sort."
                ]
            },
            {
                "name"       : "Connaissance des kitsunes",
                "level"      : "1",
                "traits"     : [
                    "Kitsune"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous excellez lorsqu'il s'agit de faire face aux situations sociales et pour garder les secrets. Vous êtes qualifié en Diplomatie et en Duperie. Si vous devriez automatiquement qualifié dans une de ces compétences (par votre historique ou votre classe, par exemple), vous êtes à la place qualifié dans une compétence de votre choix. Vous êtes aussi qualifié en Connaissance des kitsunes."
                ]
            },
            {
                "name"       : "Expertise des sorts des kitsunes",
                "level"      : "13",
                "traits"     : [
                    "Kitsune"
                ],
                "required"   : [
                    "Mystères des sorts des kitsunes"
                ],
                "description": [
                    "Vos queues démontrent votre maîtrise magique. Au cours de vos préparatifs quotidiens, choisissez Confusion, Protection contre la mort ou Scène illusoire. Vous pouvez Lancer ce sort comme un sort inné divin au niveau 5 une fois durant cette journée. Vous devenez expert en DD de sorts et en jets d'attaque de sorts."
                ]
            },
            {
                "name"       : "Familiarité avec les sorts des kitsunes",
                "level"      : "1",
                "traits"     : [
                    "Kitsune"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez appris quelques astuces magiques. Au cours de vos préparatifs quotidiens, choisissez Hébétement, Sceau d'interdiction ou Son imaginaire. Jusqu'à vos prochains préparatifs quotidiens, vous pouvez lancer ce tour de magie comme un sort divin inné à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur."
                ]
            },
            {
                "name"       : "Mystères des sorts des kitsunes",
                "level"      : "5",
                "traits"     : [
                    "Kitsune"
                ],
                "required"   : [
                    "at least one innate spell from a kitsune heritage or ancestry feat"
                ],
                "description": [
                    "Vous connaissez davantage de magie kitsune. Au cours de vos préparatifs quotidiens, choisissez Imprécation, Objet illusoire ou Sanctuaire. Vous pouvez lancer ce sort comme un sort inné divin au rang 1 une fois par jour au cours de cette journée."
                ]
            },
            {
                "name"       : "Plus grand que nature",
                "level"      : "13",
                "traits"     : [
                    "Kitsune"
                ],
                "required"   : [
                    "Visages changeants"
                ],
                "description": [
                    "Lorsque vous Changez de forme, vous pouvez prendre la forme d'une créature de taille Grande ou Très grande. En plus de l'espace occupé augmenté, vous obtenez un bonus de circonstances de +1 aux tests d'Intimidation."
                ]
            },
            {
                "name"       : "Aspects nombreux (Kitsune)",
                "level"      : "9",
                "traits"     : [
                    "Kitsune"
                ],
                "required"   : [
                    "Visages changeants"
                ],
                "description": [
                    "Vous pouvez utiliser Visages changeants trois fois par jour au lieu d'une fois par jour."
                ]
            },
            {
                "name"       : "Myriades de formes",
                "level"      : "5",
                "traits"     : [
                    "Kitsune"
                ],
                "required"   : [
                ],
                "description": [
                    "En explorant votre propre personnalité, vous découvrez une nouvelle forme. Vous obtenez une forme alternative d'un héritage kitsune différente de la vôtre, l'ajoutant aux options de votre Changement de forme."
                ]
            },
            {
                "name"       : "Forme destructrice",
                "level"      : "17",
                "traits"     : [
                    "Kitsune"
                ],
                "required"   : [
                    "Change Shape with a fox alternate form"
                ],
                "description": [
                    "Une fois par jour, lorsque vous Changez de forme pour adopter celle d'un renard, vous pouvez à la place obtenir les effets à la fois de la forme canine de Forme animale au rang 5 et de Corps enflammé au rang 7 pendant 1 minute ou jusqu'à ce que vous reveniez à votre forme normale, selon ce qui se produit en premier. Vous pouvez lancer Allumage de l'effet de Corps enflammé même si vous êtes sous une forme de combat.",
                    "Effet : Forme destructrice",
                    "Spécial Si vous êtes un kitsune vent gelé, votre forme est de glace plutôt que de feu. Cela change l'immunité et les dégâts des effets de Corps enflammé en froid, vous procure une faiblesse contre le feu et change Allumage en Rayon de givre."
                ]
            },
            {
                "name"       : "Lumière ravivée",
                "level"      : "5",
                "traits"     : [
                    "Guérison",
                    "Kitsune",
                    "Vitalité"
                ],
                "required"   : [
                    "Orbe étoilé"
                ],
                "description": [
                    "Déclencheur Vous ou un allié situé dans les 9 mètres de votre familier Orbe étoilé devrait être réduit à 0 Point de vie mais pas immédiatement tué.",
                    "Vous drainer temporairement l'énergie de votre orbe étoilé pour sauver un allié. La cible évite d'être assommée et reste à 1 Point de vie et son état Blessé augmente de 1. Puis la cible regagne@Damage[@actor.level[healing,vitality]]{un nombre de Points de vie} égal à votre niveau. Lorsque l'énergie du familier est ainsi drainée, il se met en veille jusqu'à vos prochains préparatifs quotidiens."
                ]
            },
            {
                "name"       : "Griffes rétractiles",
                "level"      : "1",
                "traits"     : [
                    "Kitsune"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous obtenez une attaque à mains nues de griffe qui inflige 1d4 dégâts tranchants. Vos griffes appartiennent au groupe pugilat et possèdent les traits agile, finesse et mains nues."
                ]
            },
            {
                "name"       : "Représentation des sept changements",
                "level"      : "1",
                "traits"     : [
                    "Kitsune"
                ],
                "required"   : [
                    "trained in Performance"
                ],
                "description": [
                    "Les kitsunes sont connus pour leurs pouvoirs d'illusion magique, mais vous êtes doué pour la magie sur scène, en particulier pour les costumes et les changements rapides. Vous obtenez le don Déguisement rapide. Vous pouvez utiliser [[/act impersonate skill=performance]]{Représentation} au lieu de Duperie pour Vous faire passer pour quelqu'un."
                ]
            },
            {
                "name"       : "Intuition du changeur de forme",
                "level"      : "1",
                "traits"     : [
                    "Kitsune"
                ],
                "required"   : [
                ],
                "description": [
                    "Une vie entière d'expérience vous aide à percer les déguisements. Lorsque vous êtes à 3 mètres d'une créature qui est transformée en une autre forme ou qui Se fait passer pour une créature spécifique, le MJ lance un test secret de Perception pour savoir si vous réalisez que la créature est transformée, même si vous n'avez pas dépensé une action pour Chercher contre cette créature."
                ]
            },
            {
                "name"       : "Visages changeants",
                "level"      : "5",
                "traits"     : [
                    "Kitsune"
                ],
                "required"   : [
                    "tailless alternate form"
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vous arborez de nombreux visages, même ceux qui ne vous appartiennent pas. Lorsque vous Changez de forme pour passer à votre forme sans queue, vous obtenez les effets d'un Déguisement illusoire au rang 3 pendant 1 heure ou jusqu'à ce que vous vous changiez de nouveau, sauf qu'il s'agit d'un effet de transmutation et non une illusion."
                ]
            },
            {
                "name"       : "Orbe étoilé",
                "level"      : "1",
                "traits"     : [
                    "Kitsune"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre magie s'est cristallisée en une pierre sphérique. Vous obtenez un familier, sauf qu'il s'agit d'un orbe étoilé : une Très petite pierre d'Encombrement léger. Le familier n'a pas de Vitesse et doit choisir une capacité de Vitesse de familier avant de pouvoir se déplacer, l'animant d'une manière appropriée à la Vitesse choisie et utilisant les statistiques d'un familier normal durant cette journée. Lorsque c'est une pierre immobile, elle ne peut choisir de capacité de familier ou de maître qui nécessite qu'elle se déplace. Elle possède toujours le pouvoir de maître Poussée innée, qui est décomptée de votre limite de pouvoirs de familier et de maître."
                ]
            },
            {
                "name"       : "Coureur vulpin",
                "level"      : "5",
                "traits"     : [
                    "Kitsune"
                ],
                "required"   : [
                    "fox alternate form"
                ],
                "description": [
                    "Vous êtes particulièrement agile lorsque vous êtes sous votre forme de renard complète. Tant que vous êtes transformé en un renard, vous obtenez les avantages suivants."
                ]
            },
            {
                "name"       : "Apprenti sorcier marin",
                "level"      : "5",
                "traits"     : [
                    "Homme-poisson"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous êtes familier avec les sorts basiques connus par les hommes-poissons les mieux éduqués. Une fois par jour, vous pouvez lancer soit Création d'eau ou Poussée hydraulique comme un sort inné primordial de rang 1. Chaque fois que vous lancez Création d'eau , vous choisissez si vous créer de l'eau douce ou de l'eau salée."
                ]
            },
            {
                "name"       : "Malheur des marins",
                "level"      : "17",
                "traits"     : [
                    "Audible",
                    "Concentration",
                    "Émotion",
                    "Terreur",
                    "Mental",
                    "Homme-poisson",
                    "Primordial"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Les marins savent que la vision d'un homme-poisson en colère pourrait bien signifier qu'ils ne reverront plus jamais la rive. Vous chantez une chanson qui raconte le destin d'une créature que vous pouvez voir dans les 18 m. La peur qui agrippe l'âme de la cible provoque @Damage[10d10[mental]]{10d10 dégâts mentaux}, en fonction d'un jet de @Check[will|against:class-spell] de la cible contre le plus élevé entre votre DD de classe ou votre DD de sort. Une créature qui est dans l'eau ou à bord d'un vaisseau d'un vaisseau de haute mer subit une pénalité de circonstances de -4 sur son jet de sauvegarde.",
                    "Succès critique La cible n'est pas affectée.",
                    "Succès La cible subit la moitié des dégâts et est Effrayée 1 lorsqu'elle entrevoit sa fin.",
                    "Échec La cible subit la totalité des dégâts et est Effrayée 1. De plus, elle lance deux fois les jets pour tous les tests de compétence et les jets de sauvegarde qu'elle tente jusqu'à la fin de son prochain tour et subit le pire résultat. C'est un effet d'infortune.",
                    "Échec critique Comme en cas d'échec, sauf qu'elle subit le double des dégâts et est Effrayée 2."
                ]
            },
            {
                "name"       : "Sang de poisson",
                "level"      : "5",
                "traits"     : [
                    "Homme-poisson"
                ],
                "required"   : [
                ],
                "description": [
                    "Il n'y a rien sous les vagues qui puisse vous ralentir. Lorsque vous êtes dans un environnement aquatique, vous ignorez le terrain difficile. De plus, nager vers le haut ou vers le bas n'est pas pour vous un terrain difficile."
                ]
            },
            {
                "name"       : "Chair guérisseuse",
                "level"      : "5",
                "traits"     : [
                    "Homme-poisson"
                ],
                "required"   : [
                ],
                "description": [
                    "Certaines légendes prétendent que la chair d'un homme-poisson, si elle est consommée, peut accorder la santé, la longévité et même l'immortalité. Pour des raisons évidentes, les hommes-poissons préfèrent décourager de telles rumeurs (avec violence, si nécessaire), mais vous êtes la preuve vivantes qu'il y a au moins une fraction de vérité à de telles prétentions. Lorsque vous Prodiguez les premiers soins, Soignez une maladie ou Soignez les blessures, vous pouvez subir 1 dégât pour donner à quelqu'une goutte de votre sang. Lorsque vous faites ainsi, vous n'avez pas besoin de Trousse du guérisseur et vous obtenez un bonus d'objet de +1 à votre test de Médecine.",
                    "Si quelqu'un mange votre cœur et votre foie dans l'heure qui suit votre mort, il sera guéri de toutes ses blessures physiques (il regagnera des Points de vie jusqu'à leur maximum) et cessera de vieillir pendant 8 ans."
                ]
            },
            {
                "name"       : "Mauvaise marée",
                "level"      : "9",
                "traits"     : [
                    "Concentration",
                    "Homme-poisson",
                    "Infortune",
                    "Primordial"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Une créature à moins de 9 mètres de vous obtient un échec critique sur un jet d'attaque, un test de compétence ou un jet de sauvegarde",
                    "Certains habitants des terres affirment que les hommes-poissons portent malheur. Vous ne pouvez pas provoquer la malchance, mais vous pouvez certainement l'entretenir. La prochaine fois que la créature déclencheuse tente un jet d'attaque, un test de compétence ou un jet de sauvegarde, elle doit lancer deux fois les dés et utiliser le résultat le plus défavorable."
                ]
            },
            {
                "name"       : "Appel du Kraken",
                "level"      : "17",
                "traits"     : [
                    "Concentration",
                    "Manipulation",
                    "Homme-poisson",
                    "Primordial"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vous invoquez les krakens des profondeurs assoupis pour écraser vos ennemis. Vous ouvrez une douzaine de petits portails vers les abysses aquatiques sans lumière dans une @Template[burst|distance:30]{explosion de 9 mètres} dans les 36 mètres. Les tentacules puissants d'un kraken passent à travers pour agripper chaque créature dans la zone. Chaque créature affectée subit @Damage[8d6[untyped]|options:area-damage]{8d6 dégâts non typés} en fonction de son jet de @Check[fortitude|against:class-spell|options:area-effect,damaging-effect] contre le plus élevé entre votre DD de classe ou votre DD de sort. Vous pouvez Maintenir l'appel pendant 1 minute. La première fois que vous le Maintenez lors des rounds suivants, chaque créature dans la zone qui n'est pas déjà Agrippée par les tentacules doit tenter le jet.",
                    "Succès La créature n'est pas affectée.",
                    "Échec La créature subit la totalité des dégâts et est agrippée par un tentacule. Une créature qui est toujours agrippée par un tentacule à la fin de son tour subit @Damage[3d6[bludgeoning]]{3d6 dégâts contondants}. Le DD pour S'Échapper d'un tentacule et sa CA sont tous deux égaux au plus élevé entre votre DD de classe ou votre DD de sort. Une créature peut attaque un tentacule pour tenter de libérer la créature piégée à l'intérieur. Un tentacule est détruit s'il subit au moins 30 dégâts au cours d'un unique round.",
                    "Échec critique Comme en cas d'échec, mais avec le double des dégâts."
                ]
            },
            {
                "name"       : "Connaissance des hommes-poissons",
                "level"      : "1",
                "traits"     : [
                    "Homme-poisson"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez accordé une attention particulière à vos leçons à l'école. Vous êtes qualifié en Arcanes et en Société. si vous êtes automatiquement qualifié dans une de ces compétences (par votre historique ou votre classe, par exemple), vous êtes qualifié à la place dans une compétence de votre choix.",
                    "Vous obtenez aussi le don de compétence Connaissance supplémentaire en Connaissance des hommes-poissons."
                ]
            },
            {
                "name"       : "Familiarité avec les armes des hommes-poissons",
                "level"      : "1",
                "traits"     : [
                    "Homme-poisson"
                ],
                "required"   : [
                ],
                "description": [
                    "On vous a enseigné les armes de la mer les plus efficaces. Vous obtenez l'accès à toutes les armes peu courantes avec le trait homme poisson. Vous avez une familiarité avec les arbalètes, les arbalètes lourdes, les lances, les piques et les tridents. Pour les besoins de déterminer votre maîtrise, vous considérez que n'importe laquelle de ces armes de guerre est une arme simple et que n'importe laquelle de ces armes évoluées est une arme de guerre.",
                    "Au niveau 5, lorsque vous obtenez un coup critique avec une de ces armes, vous bénéficiez de son effet critique spécialisé."
                ]
            },
            {
                "name"       : "Morsure de l'océan",
                "level"      : "1",
                "traits"     : [
                    "Homme-poisson"
                ],
                "required"   : [
                    "abyssal or carcharodon merfolk heritage"
                ],
                "description": [
                    "Vous mâchoires s'ouvrent plus largement qu'une bouche humanoïde le devrait, présentant plusieurs rangées de dents de requins ou des dents en forme d'aiguille semblables à ceux d'un poisson vipère. Vous obtenez une attaque à mains nues de mâchoire qui inflige 1d8 dégâts perforants. Vos mâchoires sont dans le groupe pugilat."
                ]
            },
            {
                "name"       : "Tourbillon percutant",
                "level"      : "13",
                "traits"     : [
                    "Concentration",
                    "Manipulation",
                    "Homme-poisson",
                    "Primordial",
                    "Eau"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vous exploitez l'eau des environs, la faisant tourbillonner en un torrent tumultueux autour de vous pour punir vos ennemis. Chaque créature dans une @Template[emanation|distance:10]{émanation de 3 mètres} (ou de @Template[emanation|distance:15]{4,50 m} si vous êtes dans une étendue d'eau) subit @Damage[8d6[bludgeoning]|options:area-damage]{8d6 dégâts contondants} avec un jet de @Check[reflex|against:class-spell|basic|options:area-effect] contre le plus élevé entre votre DD de classe ou votre DD de sort. Une créature qui obtient un échec sur son jet de sauvegarde est mise À terre. Au niveau 17, Les dégâts passent à 11d6."
                ]
            },
            {
                "name"       : "Sorcier marin",
                "level"      : "13",
                "traits"     : [
                    "Homme-poisson"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez étudié les vagues et elles vous obéissent comme des extensions de votre propre nageoire. Vous pouvez lancer Orbe aqueux et Contrôle de l'eau comme des sorts innés primordiaux de rang 5, chacun une fois par jour."
                ]
            },
            {
                "name"       : "Chant de la mer",
                "level"      : "1",
                "traits"     : [
                    "Homme-poisson"
                ],
                "required"   : [
                ],
                "description": [
                    "Le son se propage loin sous les vagues et votre peuple possède des voix fortes enchanteresses. Vous êtes qualifié en Représentation. Si vous êtes déjà qualifié en Représentation (par votre historique ou votre classe, par exemple), vous êtes qualifié dans une compétence de votre choix. En plus, vous obtenez le don de compétence Artiste virtuose pour le chant et votre voix porte aussi bien au-dessus que sous l'eau."
                ]
            },
            {
                "name"       : "Cadeau du rivage",
                "level"      : "9",
                "traits"     : [
                    "Concentration",
                    "Homme-poisson",
                    "Métamorphose",
                    "Primordial"
                ],
                "required"   : [
                ],
                "description": [
                    "Grâce à une magie ancienne, vous vous débarrassez de votre queue comme d'un vêtement et marchez sur deux pieds, ressemblant à un humanoïde, le plus souvent humain, mais aussi elfe, aiuvarin ou quelque chose d'étrange. Vous êtes toujours reconnaissable, car Cadeau du rivage ne modifie pas le haut de votre corps. Lorsque vous êtes transformé, vous perdez la vitesse de nage de votre ascendance (bien que vous puissiez toujours disposer d'une vitesse de nage provenant d'autres sources), mais vous obtenez une vitesse terrestre de 7,50 mètres.",
                    "Utiliser Cadeau du rivage est aussi comptabilisé comme créer un déguisement lorsque vous utilisez Duperie pour Vous faire passer pour l'autre ascendance, votre transformation défait automatiquement les DD de Perception pour déterminer si vous êtes un membre normal de n'importe laquelle des ascendances à laquelle vous semblez appartenir. Seules les créatures qui cherchent activement en utilisant Perception pour vous examiner pourrait remarquer le déguisement. Vous pouvez rester sous votre forme alternative indéfiniment et pouvez vous retransformer en votre forme d'homme-poisson en utilisant de nouveau cette action."
                ]
            },
            {
                "name"       : "Chant de la sirène",
                "level"      : "9",
                "traits"     : [
                    "Audible",
                    "Mental",
                    "Homme-poisson",
                    "Primordial"
                ],
                "required"   : [
                    "expert in Performance"
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vous pouvez séduire et envoûter avec votre chant. Toutes les créatures dans une @Template[emanation|distance:60]{émanation de 18 mètres} doivent tenter un jet de @Check[will|against:performance] contre votre DD de Représentation. Lors des rounds subséquents, vous pouvez Maintenir le chant, obligeant chaque créature dans la zone actuellement affectée à tenter un autre jet de Volonté. Typiquement, les créatures qui ont voyagé avec vous pendant un temps significatif, comme les camarades de votre groupe, sont immunisées à votre Chant de la sirène.",
                    "Succès critique La cible n'est pas affectée et devient immunisée à votre Chant de la sirène pendant 24 heures.",
                    "Succès La cible est Fascinée par vous jusqu'à la fin de votre prochain tour.",
                    "Échec Comme en cas de succès et la cible est Stupéfiée 1 tant qu'elle est Fascinée.",
                    "Échec critique Comme en cas de succès et la cible est Stupéfiée 2 tant qu'elle est Fascinée."
                ]
            },
            {
                "name"       : "Queue puissante",
                "level"      : "5",
                "traits"     : [
                    "Homme-poisson"
                ],
                "required"   : [
                ],
                "description": [
                    "Par pure nécessité, vous êtes devenu étonnamment doué pour vous déplacer sur la terre ferme. Votre queue est exceptionnellement musclée et vous permet de sautiller ou de vous glisser sur la terre ferme à une vitesse modeste. Votre Vitesse au sol passe à 4,50 mètres."
                ]
            },
            {
                "name"       : "Conseil du nageur",
                "level"      : "1",
                "traits"     : [
                    "Homme-poisson"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous êtes toujours prêt à aider ceux qui flottent dans l'eau. Tout allié qui débute son tour dans les 9 mètres de vous et qui se trouve dans la même étendue d'eau obtient une vitesse de nage de 3 mètres jusqu'à la fin de son tour. Si tout allié affecté par Conseil du nageur obtient un échec critique sur un test d'Athlétisme pour nager, il devient un échec."
                ]
            },
            {
                "name"       : "Larmes de perle",
                "level"      : "9",
                "traits"     : [
                    "Émotion",
                    "Manipulation",
                    "Mental",
                    "Homme-poisson",
                    "Primordial",
                    "Visuel"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vous pleurez et vos larmes deviennent des perles brillantes lorsqu'elles tombent sur le sol, si belles que les autres ne peuvent s'empêcher de les saisir. Toutes les créatures qui vous sont adjacentes tentent un jet de @Check[will|against:class-spell] contre le plus élevé entre votre DD de classe et votre DD de sort. Les perles se dissolvent au début de votre prochain tour, se transformant en eau salée.",
                    "Succès critique La cible n'est pas affectée.",
                    "Succès La cible est Ralentie 1 jusqu'au début de votre prochain tour en convoitant ou en se saisissant des perles.",
                    "Échec La cible est Ralentie 1 jusqu'au début de votre prochain tour lorsqu'elle attrape les perles et si elle ne dispose pas d'une main libre (ou d'un appendice similaire), elle doit utiliser sa première action lors de son prochain tour à Relâcher un objet qu'elle tient.",
                    "Échec critique Comme en cas d'échec, mais la cible est Ralentie 2 au lieu de Ralentie 1."
                ]
            },
            {
                "name"       : "Orateur des vagues",
                "level"      : "1",
                "traits"     : [
                    "Homme-poisson"
                ],
                "required"   : [
                ],
                "description": [
                    "Étant partiellement poisson, vous pouvez parler la langue de la mer. Vous pouvez poser des questions, recevoir des réponses et utiliser la compétence Diplomatie avec les animaux qui possèdent les traits amphibie, aquatique ou une vitesse de nage comme les poissons, les crabes et certains oiseaux de mer (comme les pingouins). Le MJ détermine quels animaux sont comptés pour cette capacité."
                ]
            },
            {
                "name"       : "Disparition alarmante",
                "level"      : "5",
                "traits"     : [
                    "Minotaure"
                ],
                "required"   : [
                    "expert in Stealth"
                ],
                "description": [
                    "Votre capacité à vous déplacer sans être vu est surprenant pour quelqu'un de votre taille, provoquant la panique chez vos ennemis. Lorsque vous parvenez à réussir à Vous cacher lorsque vous étiez précédemment observé, Les créatures dont vous êtes Cachées sont Effrayées 1. Elles sont alors temporairement immunisées à Disparition alarmante pendant 1 heure. Typiquement, les créatures qui ont voyagé avec vous pendant un temps significatif, comme les membres de votre groupe, sont immunisés à votre Disparition alarmante."
                ]
            },
            {
                "name"       : "Fabricant artisanal",
                "level"      : "1",
                "traits"     : [
                    "Minotaure"
                ],
                "required"   : [
                ],
                "description": [
                    "Comme nombre de minotaures, vous tirez fierté de la création d'objet faits de pierre ou de métal. Vous êtes qualifié en Artisanat (ou dans une autre compétence si vous étiez déjà qualifié en Artisanat) et obtenez le don de compétence Artisanat spécialisé à votre choix en forge, en maroquinerie ou en taille de pierre."
                ]
            },
            {
                "name"       : "Bête de somme",
                "level"      : "5",
                "traits"     : [
                    "Minotaure"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre large charpente peut vous permettre de porter des poids qui immobiliseraient des créatures plus petites. Augmentez les limites maximales et Encombré de 4. Vous pouvez vous reposer normalement lorsque vous portez une armure intermédiaire."
                ]
            },
            {
                "name"       : "Entamer le piétinement",
                "level"      : "17",
                "traits"     : [
                    "Minotaure",
                    "Visuel"
                ],
                "required"   : [
                ],
                "description": [
                    "Le fait de vous voir foncer dans la bataille enhardit vos alliés à prendre votre suite. Vous Marchez rapidement jusqu'à deux fois votre Vitesse et portez une attaque au corps-à-corps de cornes. Si votre Frappe touche et inflige des dégâts à un ennemi, chaque allié dans les 18 mètres qui vous a vu toucher peut utiliser une réaction pour Marcher rapidement jusqu' à deux fois leur vitesse, mais chacun doit terminer leur Marche rapide en étant plus proche de vous que lorsqu'ils ont démarré. Chacun de ces alliés qui Marche rapidement obtient un bonus de statut de +1 à sa première Frappe lors de son prochain tour."
                ]
            },
            {
                "name"       : "Parole de bétail",
                "level"      : "1",
                "traits"     : [
                    "Minotaure"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez comprendre le babil du bétail et des animaux similaires comme étant une langue propre. Vous pouvez poser des questions, recevoir des réponses et utiliser Diplomatie avec le bétail, les bisons, les antilopes et autres mammifères qui paissent qui voyagent en hordes. Le MJ détermine dont les autres animaux sont considérées pour cette capacité."
                ]
            },
            {
                "name"       : "Oeil du maçon",
                "level"      : "1",
                "traits"     : [
                    "Minotaure"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre familiarité avec l'architecture vous permet de déceler aisément les ouvrages subtils. Vous obtenez un bonus de circonstances de +2 aux tests de Perception pour remarquer des ouvrages maçonnés inhabituels. Ce bonus s'applique aux tests pour découvrir des pièges mécaniques faits de pierre ou cachés dans la pierre, ainsi que les portes secrètes dans la pierre.",
                    "Lorsque vous utilisez Athlétisme pour Ouvrir de force une porte de pierre ou Vol pour Désamorcer un dispositif principalement composé de pierre, vous obtenez un bonus de circonstances de +1 à ce test."
                ]
            },
            {
                "name"       : "Lancer amical",
                "level"      : "9",
                "traits"     : [
                    "Manipulation",
                    "Minotaure"
                ],
                "required"   : [
                ],
                "description": [
                    "Conditions Vous êtes adjacent à un allié.",
                    "Vous pouvez attraper vos amis avec vos cornes pour les projeter sur le champ de bataille. Choisissez un allié adjacent consentant qui est plus petit que vous et lancez le dans un espace inoccupé que vous pouvez voir dans les 6 m. Comme vous utilisez vos cornes, vous n'avez pas besoin de disposer d'une main libre pour le faire. Les déplacements de votre allié ne déclenchent pas de réactions. Votre allié termine son déplacement sur ses pieds et ne subit pas de dégâts de la chute mais subit @Damage[1d6[piercing]]{1d6 dégâts perforants} de vos cornes. Si votre allié termine ce déplacement dans l'allonge au corps-à-corps d'au moins un ennemi, il peut porter une Frappe contre un ennemi dans son allonge par une réaction."
                ]
            },
            {
                "name"       : "Coup de pouce amical",
                "level"      : "1",
                "traits"     : [
                    "Minotaure"
                ],
                "required"   : [
                    "trained in Athletics"
                ],
                "description": [
                    "Vous n'avez pas toujours le temps d'attendre pour que vos alliés vous fassent de la place, de sorte qu'il est mieux de poliment les déplacer par vous-même. Faites un test d'Athlétisme pour Pousser un allié. Vous n'avez pas besoin de disposer d'une main libre pour tenter ce test. Si votre allié est consentant, considérez le résultat comme étant d'un degré supérieur."
                ]
            },
            {
                "name"       : "Charge sanglante",
                "level"      : "9",
                "traits"     : [
                    "Minotaure"
                ],
                "required"   : [
                ],
                "description": [
                    "Poussé par l'élan de vos pas tonitruants et votre masse puissante, vos cornes peuvent transpercer vos ennemis. Marchez rapidement deux fois, puis faites une Frappe de cornes. Si vous vous êtes déplacé d'au moins 6 mètres depuis votre position de départ, votre Frappe de cornes infligent aussi 1d6 dégâts de saignement."
                ]
            },
            {
                "name"       : "Dans le labyrinthe",
                "level"      : "17",
                "traits"     : [
                    "Minotaure"
                ],
                "required"   : [
                ],
                "description": [
                    "En faisant appel à votre lien avec les minotaures du mythe, vous poussez un ennemi dans un labyrinthe complexe rempli d'énigmes que vous avez vous-même conçues. Une fois par jour, vous pouvez lancer Dilemme comme un sort inné occulte de rang 8, qui prend la forme d'un labyrinthe au lieu d'une pièce puzzle. Les cibles ne peuvent tenter d'utiliser Occultisme pour Échapper au sort (comme à l'ordinaire avec Dilemme ), mais il peut utiliser Survie pour se frayer un passage à travers les corridors du labyrinthe."
                ]
            },
            {
                "name"       : "Nez fin",
                "level"      : "1",
                "traits"     : [
                    "Minotaure"
                ],
                "required"   : [
                ],
                "description": [
                    "Habitué à l'air vicié des tunnels souterrains, votre odorat est aiguisé et les odeurs nauséabondes sont moins dérangeantes. Vous obtenez odorat en tant que sens imprécis avec une portée de 9 mètres. Vous obtenez aussi un bonus de circonstances de +1 aux jets de Vigueur contre les effets olfactifs qui provoquent l'état Nauséeux."
                ]
            },
            {
                "name"       : "Échos labyrinthiques",
                "level"      : "5",
                "traits"     : [
                    "Minotaure"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez faire résonner votre voix sur n'importe quelle surface. Une fois par jour, vous pouvez lancer Ventriloquie comme un sort occulte inné. Au niveau 7, ce sort est intensifié au rang 2."
                ]
            },
            {
                "name"       : "Connaissance du minotaure",
                "level"      : "1",
                "traits"     : [
                    "Minotaure"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez été élevé dans une enclave minotaure ou avez passé un long moment à étudier votre culture et votre ascendance. Vous êtes qualifié en Société et en Discrétion. Si vous étiez qualifié dans une de ces compétences (de votre historique ou de votre classe, par exemple), vous devenez qualifié dans une compétence de votre choix.",
                    "Vous obtenez aussi le don général Connaissance supplémentaire en Connaissance des minotaures."
                ]
            },
            {
                "name"       : "Familiarité avec les armes des minotaures",
                "level"      : "1",
                "traits"     : [
                    "Minotaure"
                ],
                "required"   : [
                ],
                "description": [
                    "Vos anciens vous ont enseigné à manier des armes qui peuvent fendre les cranes et franchir les boucliers. Vous avez une familiarité avec le cimeterre à deux mains, la coutille, la grande hache et la hache de bataille. Pour les besoins de déterminer votre maîtrise, vous considérez n'importe laquelle de ces armes de guerre comme une arme simple.",
                    "Au niveau 5, lorsque vous obtenez un coup critique avec une de ces armes, vous bénéficiez de son effet critique spécialisé."
                ]
            },
            {
                "name"       : "Orientation naturelle",
                "level"      : "5",
                "traits"     : [
                    "Minotaure"
                ],
                "required"   : [
                ],
                "description": [
                    "Peu de chemins tortueux peuvent vous désorienter. Lorsque vous obtenez un succès sur un test de Survie pour S'orienter ou Pister, il devient un succès critique."
                ]
            },
            {
                "name"       : "Magie du panthéon",
                "level"      : "1",
                "traits"     : [
                    "Minotaure"
                ],
                "required"   : [
                ],
                "description": [
                    "Le contact d'une ingérence divine vous traverse encore, que vous le vouliez ou non. Choisissez un tour de magie de la liste de sort divine. Vous pouvez lancer ce tour de magie comme un sort divin inné à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur."
                ]
            },
            {
                "name"       : "Charme ectoplasmique",
                "level"      : "13",
                "traits"     : [
                    "Divin",
                    "Fortune",
                    "Minotaure"
                ],
                "required"   : [
                    "ghost bull minotaur heritage"
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Vous tentez un test qui devrait être sujet à un effet d'infortune.",
                    "Vous pouvez exploiter la connexion spirituelle de votre sang, vous permettant de déplacer les fils négatifs du destin. Vous annulez l'effet d'infortune et obtenez un bonus de circonstances de +2 au test déclencheur."
                ]
            },
            {
                "name"       : "Résolveur d'énigmes",
                "level"      : "5",
                "traits"     : [
                    "Minotaure"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par heure",
                    "Vous possédez une affinité naturelle pour résoudre les problèmes et faire face à l'inconnu. Lorsque vous tentez de Vous souvenir sur un sujet ou une créature, vous obtenez un bonus de circonstances de +1 à votre prochain test de compétence à l'égard de cette créature ou de ce sujet (même si vous n'avez pas obtenu un succès sur le test). Ce bonus passe à +2 si vous êtes maître dans la compétence utilisée pour Vous souvenir."
                ]
            },
            {
                "name"       : "Transférer les petits",
                "level"      : "13",
                "traits"     : [
                    "Minotaure"
                ],
                "required"   : [
                    "expert in Athletics",
                    "Coup de pouce amical"
                ],
                "description": [
                    "Avec votre grande taille, vous devez être prudent avec vos amis plus petits. Vous avez appris à vous déplacer de manière à laisser aux autres la possibilité de vous faire de la place. Marchez rapidement de votre Vitesse. Si vous terminez votre déplacement dans une position où l'un ou plus de vos espaces sont occupés par un allié, chacun de ces alliés peut immédiatement Faire un pas par une action gratuite de manière à ce qu'elle n'occupe plus le même espace que vous. Si ce n'est pas possible, vous devez terminer votre déplacement de sorte que vous partagiez un espace avec un allié, comme à l'ordinaire."
                ]
            },
            {
                "name"       : "Tourment siphonné",
                "level"      : "9",
                "traits"     : [
                    "Minotaure"
                ],
                "required"   : [
                ],
                "description": [
                    "Vos ancêtres ont beaucoup souffert d'une malédiction, un destin auquel vous préférez consentir plutôt que de le laisser s'abattre sur les autres. Une fois par jour, vous pouvez lancer Réclamer la malédiction comme un sort divin inné. Lorsque vous le faites, la créature cible obtient des Points de vie temporaires égaux à votre niveau.",
                    "Effet : Tourment siphonné"
                ]
            },
            {
                "name"       : "Passage de pierre",
                "level"      : "9",
                "traits"     : [
                    "Divin",
                    "Minotaure"
                ],
                "required"   : [
                    "slabsoul minotaur heritage"
                ],
                "description": [
                    "Fréquence Une fois par heure",
                    "En faisant appel à votre connaissance de la maçonnerie et de sa magie intrinsèque, vous rendez momentanément une section de pierre intangible, ce qui vous permet de passer à travers. Marchez rapidement de votre Vitesse. Vous pouvez vous déplacer à travers des objets de pierre ou de roche, tels que des murs, comme s'il s'agissait d'espaces inoccupés. Si vous terminez votre déplacement à l'intérieur d'une case que vous ne devriez normalement pas pouvoir traverser, vous êtes projeté sur la dernière case inoccupée dans laquelle vous vous êtes déplacé."
                ]
            },
            {
                "name"       : "Extension de l'allonge",
                "level"      : "5",
                "traits"     : [
                    "Minotaure",
                    "Posture"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez tirer parti de votre taille et de vos muscles pour augmenter votre allonge et attaquer des ennemis plus éloignés. Dans cette posture, lorsque vous maniez une arme au corps-à-corps qui nécessite deux mains et ne possède pas d'allonge, l'arme obtient une allonge de 3 mètres."
                ]
            },
            {
                "name"       : "Poursuite menaçante",
                "level"      : "13",
                "traits"     : [
                    "Audible",
                    "Minotaure"
                ],
                "required"   : [
                    "expert in Intimidation and Stealth"
                ],
                "description": [
                    "Conditions Vous n'êtes pas observé par n'importe quels ennemis dans les 18 m.",
                    "Vous émettez un grognement et un grondement terrifiants, en frappant de vos sabots pour que tout ce qui vous entendent comprennent que vous les chassez. Faites un test d'Intimidation pour Démoraliser tous les ennemis dans les 9 mètres et vous ne subissez pas de pénalité en ne partageant pas une langue. Si les cibles sont dans un labyrinthe ou un lieu dans lequel il est difficile de s'orienter, vous obtenez un bonus de circonstances de +2 à ce test et la portée passe à 18 mètres. Chaque cible est temporairement immunisé pendant 1 heure."
                ]
            },
            {
                "name"       : "Souffle de la calamité",
                "level"      : "17",
                "traits"     : [
                    "Nagaji"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre rugissement secoue la terre et fend les cieux. Une fois par jour, vous pouvez lancer Éclairs multiples comme un sort inné occulte au rang 7. Toute créature qui obtient un échec critique à son jet de sauvegarde contre le sort est Aveuglée et Sourde pendant 1 round."
                ]
            },
            {
                "name"       : "Esprit froid",
                "level"      : "1",
                "traits"     : [
                    "Nagaji"
                ],
                "required"   : [
                ],
                "description": [
                    "Les brins subtils de la magie enchanteresse font peu d'impression sur votre esprit. Vous obtenez un bonus de circonstances de +1 aux jets de sauvegarde contre les effets d'émotion et, chaque fois que vous obtenez un succès sur un jet de sauvegarde contre un effet d'émotion, il devient un succès critique."
                ]
            },
            {
                "name"       : "Regard perturbateur",
                "level"      : "13",
                "traits"     : [
                    "Mental",
                    "Nagaji",
                    "Visuel"
                ],
                "required"   : [
                ],
                "description": [
                    "Déclencheur Une créature à moins de 9 mètres tente de Lancer un sort avec le trait concentration.",
                    "Votre regard froid peut transformer en glace le sang d'un ennemi. La créature déclencheuse doit tenter un jet de @Check[will|against:class-spell] contre le plus élevé entre votre DD de classe ou votre DD de sort. Elle devient alors immunisée temporairement pendant 24 heures.",
                    "Échec Le sort déclencheur subit une pénalité de statut de -2 à ses jets d'attaque et à ses DD.",
                    "Échec critique Le sort déclencheur est interrompu.",
                    "Effet : Regard perturbateur"
                ]
            },
            {
                "name"       : "Frappes envenimées",
                "level"      : "9",
                "traits"     : [
                    "Nagaji"
                ],
                "required"   : [
                    "you possess a Strike from a nagaji heritage or ancestry feat that deals poison damage"
                ],
                "description": [
                    "Vous crachez du venin sur une arme que vous tenez ou sur une arme tenue par une créature consentante dans un rayon de 9 mètres. Vous pouvez également utiliser cette capacité pour envenimer votre attaque à mains nues de crocs de nagaji. Si la prochaine Frappe avec l'arme choisie avant le début de votre prochain tour touche et inflige des dégâts, la frappe inflige 2d6 dégâts de poison supplémentaires."
                ]
            },
            {
                "name"       : "Forme de la Mère bien-aimée",
                "level"      : "17",
                "traits"     : [
                    "Peu courant",
                    "Nagaji"
                ],
                "required"   : [
                ],
                "description": [
                    "Accès Originaire du Tian Xia ou fidèle de Nalinivati",
                    "Vous canalisez les bénédictions de Nalinivati pour vous transformer en une manifestation de sa volonté. Vous pouvez Lancer Forme animal comme un sort inné occulte au rang 5 une fois par jour, mais vous ne pouvez adopter que la forme du serpent avec le sort. Vous pouvez passer une action supplémentaire pour Lancer Forme animale pour lancer aussi Nid de serpent au rang 5 centré sur votre emplacement. La volonté de Nalinivati s'assure que les serpents ombre créés par le sort ne puissent vous faire de mal, de sorte que vous n'êtes pas affecté par le sort. Si vous Révoquez Forme animale , les effets de Nid de serpent se terminent également."
                ]
            },
            {
                "name"       : "Pensées protégées",
                "level"      : "9",
                "traits"     : [
                    "Nagaji"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre esprit, comme celui d'un naga noir, déjoue les tentatives pour lire vos pensées. Tout effet qui tente spécifiquement de lire votre esprit pour glaner des informations doit réussir un test de contre contre le plus élevé entre votre DD de classe ou votre DD de sort pour y parvenir. Sinon, il n'obtient aucune information. Le rang de contre est égal à la moitié de votre niveau arrondi au supérieur."
                ]
            },
            {
                "name"       : "Regard hypnotique",
                "level"      : "9",
                "traits"     : [
                    "Nagaji"
                ],
                "required"   : [
                    "Leurre hypnotique"
                ],
                "description": [
                    "Vous pouvez élargir votre champ de vision, vous permettant d'affecter davantage de créatures avec votre Leurre hypnotique. Une fois par jour, Lorsque vous utilisez Leurre hypnotique, vous pouvez affecter toutes les créatures dans un @Template[cone|distance:30]{cône de 9 mètres} plutôt qu'une unique créature dans les 9 mètres."
                ]
            },
            {
                "name"       : "Leurre hypnotique",
                "level"      : "5",
                "traits"     : [
                    "Concentration",
                    "Mental",
                    "Nagaji",
                    "Occulte",
                    "Visuel"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par heure",
                    "Votre regard fixe est si intense qu'il peut troubler l'esprit des autres, attirant vos victimes vers vous-même en dépit de leur jugement. Vous fixez une créature dans un rayon de 9 mètres. La cible doit tenter un jet de @Check[will|against:class-spell] contre le plus élevé entre votre DD de classe ou DD de sort.",
                    "Succès La cible n'est pas affectée.",
                    "Échec À son tour, la cible doit dépenser sa première action pour vous approcher. Il ne peut Retarder ou accomplir de réaction jusqu'à ce qu'il l'ait fait.",
                    "Échec critique La cible doit utiliser toutes ses actions lors de son prochain tour pour vous approcher. Il ne peut Retarder ou accomplir de réaction jusqu'à ce qu'il ait atteint un espace qui vous est adjacent (ou aussi proche de vous qu'il est possible s'il atteint une barrière indépassable)."
                ]
            },
            {
                "name"       : "Il faut un village",
                "level"      : "1",
                "traits"     : [
                    "Nagaji"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre lien communautaire crée une meilleure dynamique lorsque vous travaillez ensemble.Vous obtenez un bonus de circonstances de +4 aux tests pour Aider."
                ]
            },
            {
                "name"       : "Contrôle métabolique",
                "level"      : "5",
                "traits"     : [
                    "Nagaji"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous êtes capable d'améliorer le contrôle du métabolisme de votre corps pour préserver l'énergie. Après avoir mangé un repas correct, vous pouvez ne pas avoir de nourriture et d'eau pendant 1 semaine avant de subir des dégâts de la faim et de la soif. Vous n'êtes pas Fatigué au cours de cette semaine."
                ]
            },
            {
                "name"       : "Connaissance des nagajis",
                "level"      : "1",
                "traits"     : [
                    "Nagaji"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous êtes le vassal ou l'apprenti d'un naga érudit et vous avez étudié les secrets de la magie naga et de la concoction de poisons complexes. Vous êtes qualifié en Artisanat et en Occultisme. Si vous devriez être automatiquement qualifié dans l'une de ces compétences (grâce à votre historique ou à votre classe, par exemple), vous êtes qualifié dans une compétence de votre choix. Vous devenez également qualifié en Connaissance des nagajis ou en Connaissance des nagas."
                ]
            },
            {
                "name"       : "Expertise des sorts des nagajis",
                "level"      : "13",
                "traits"     : [
                    "Nagaji"
                ],
                "required"   : [
                    "Mystères des sorts des nagajis"
                ],
                "description": [
                    "Vos compétences magiques rivalisent avec celles des nagas, lanceurs de sorts accomplis. Au cours de vos préparatifs quotidiens, choisissez entre Contrôle de l'eau, Osciller ou Suggestion subconsciente. Vous pouvez Lancer ce sort comme un sort occulte inné de rang 5 une fois durant cette journée. Vous êtes expert en DD et en jets d'attaque de sorts."
                ]
            },
            {
                "name"       : "Familiarité avec les sorts nagajis",
                "level"      : "1",
                "traits"     : [
                    "Nagaji"
                ],
                "required"   : [
                ],
                "description": [
                    "Que ce soit par l'étude, l'exposition ou la dévotion familiale, la magie des nagas bouillonne dans votre sang. Au cours de vos préparatifs quotidiens, choisissez entre Détection de la magie, Hébêtement ou Manipulation télékinésique. Jusqu'à vos prochains préparatifs quotidiens, vous pouvez lancer le sort choisi comme un tour de magie occulte inné. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur."
                ]
            },
            {
                "name"       : "Mystères des sorts des nagajis",
                "level"      : "5",
                "traits"     : [
                    "Nagaji"
                ],
                "required"   : [
                    "at least one innate spell from a nagaji heritage or ancestry feat"
                ],
                "description": [
                    "Vous avez appris davantage de magie des nagas. Au cours de vos préparatifs quotidiens, choisissez entre Charme, Guérison ou Pas rapide. Vous pouvez lancer le sort choisi comme un sort occulte inné au rang 1 une fois au cours de cette journée."
                ]
            },
            {
                "name"       : "Lumière de Nalinivati",
                "level"      : "1",
                "traits"     : [
                    "Nagaji"
                ],
                "required"   : [
                ],
                "description": [
                    "Vos yeux fendus s'agrandissent pour absorber la lumière et peuvent voir dans les endroits les plus sombres. Vous obtenez Vision dans le noir.",
                    "Spécial Vous ne pouvez choisir ce don qu'au niveau 1 et vous ne pouvez utiliser le réapprentissage."
                ]
            },
            {
                "name"       : "Fosse de serpents",
                "level"      : "13",
                "traits"     : [
                    "Concentration",
                    "Manipulation",
                    "Nagaji",
                    "Occulte"
                ],
                "required"   : [
                ],
                "description": [
                    "Les serpents ordinaires obéissent à votre invocation. Vous appelez une masse de serpents qui se tordent, levez vos mains pour que les serpents émergent du sol dans une @Template[burst|distance:20]{explosion de 6 mètres}. Les serpents apparaissent sur toutes les cases au sol dans la zone et restent pendant 1 minute. Lorsque vous utilisez Fosse de serpents, toutes les créatures de la zone doivent tenter un jet de @Check[fortitude|against:class-spell|options:area-effect,damaging-effect] contre le plus élevé entre votre DD de classe et votre DD de sort. Toute créature qui échoue est Agrippée par un serpent et subit @Damage[3d6[bludgeoning]]{3d6 dégâts contondants}. Chaque fois qu'une créature termine son tour dans la zone, les serpents tentent d'attraper cette créature s'ils ne l'ont pas déjà fait. Toute créature déjà agrippée subit à la place @Damage[2d6[bludgeoning]|options:area-damage]{2d6 dégâts contondants}.",
                    "Le DD pour S'Échapper des serpents est égal au plus élevé entre votre DD de classe ou votre DD de sort. Une créature peut attaquer un serpent pour tenter de mettre un terme à son emprise. La CA du serpent est égale au plus élevé entre votre DD de classe ou votre DD de sort et il est détruit s'il subit au moins 12 dégâts. Même si un serpent spécifique est détruit, d'autres serpents supplémentaires continuent de se tortiller dans la zone jusqu'à l'expiration de la durée du sort. Vous pouvez Révoquer l'effet."
                ]
            },
            {
                "name"       : "Écailles prismatiques",
                "level"      : "17",
                "traits"     : [
                    "Nagaji"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez faire en sorte que vos écailles brillent avec des couleurs de nombreuses couleurs scintillantes, vous protégeant de l'énergie tout en éblouissant vos ennemis. Une fois par jour, vous pouvez lancer Armure prismatique comme un sort inné occulte, sauf que le sort modifie la coloration de vos écailles au lieu de vous faire revêtir une armure. Cette différence est cosmétique et le sort a tous les effets du sort ordinaire."
                ]
            },
            {
                "name"       : "Langue de serpent",
                "level"      : "1",
                "traits"     : [
                    "Nagaji"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous faites inconsciemment glisser votre langue dans l'air pour goûter le monde qui vous entoure. Vous obtenez odorat 9 mètres (imprécis)."
                ]
            },
            {
                "name"       : "Anneaux de serpent abattant",
                "level"      : "9",
                "traits"     : [
                    "Nagaji"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par minute",
                    "La rivalité ancienne et légendaire de votre peuple avec les garudas vous a conduit à développer des techniques spéciales contre les ennemis volants. Effectuez une frappe au corps-à-corps contre une créature volante jusqu'à une taille de plus que vous. Si vous touchez, vous utilisez votre cou ou vos anneaux pour écraser la créature au sol. En plus des effets normaux de votre Frappe, la créature se déplace vers un espace inoccupé au sol le plus proche de vous et ne peut pas Voler, Léviter ou quitter le sol pendant 1 round. En cas de coup critique, elle ne peut plus Voler, Léviter ou quitter le sol pendant 1 minute."
                ]
            },
            {
                "name"       : "Nageur serpentin",
                "level"      : "9",
                "traits"     : [
                    "Nagaji"
                ],
                "required"   : [
                    "Nagaji aquatique"
                ],
                "description": [
                    "Vous faites onduler votre corps par une série de mouvements sinueux et serpentins pendant que vous nagez, ce qui améliore considérablement la vitesse à laquelle vous vous déplacez dans l'eau. Votre Vitesse de nage passe de 3 mètres à 7,50 mètres."
                ]
            },
            {
                "name"       : "Fragmentation de la peau",
                "level"      : "5",
                "traits"     : [
                    "Nagaji"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vous ouvrez à coups de griffes la couche superficielle de vos écailles et pelez la pellicule prématurée afin d'éliminer les substances nocives de votre peau. Vous mettez immédiatement un terme à tous les dégâts persistants des effets qui recouvrent votre peau (comme le feu et la plupart des dégâts acides persistants). Si vous souffrez d'un effet autre qu'un dommage persistant qui dépend d'un contact continu avec votre peau et si cet effet permet un jet de sauvegarde, vous tentez immédiatement un nouveau jet de sauvegarde contre cet effet."
                ]
            },
            {
                "name"       : "Glissement synchronisé",
                "level"      : "13",
                "traits"     : [
                    "Nagaji"
                ],
                "required"   : [
                ],
                "description": [
                    "Déclencheur Un allié dans votre allonge quitte une case lors d'une action de déplacement qu'il utilise et termine son déplacement adjacent à un ennemi.",
                    "Vous avez appris à voyager au rythme de votre allié et à utiliser ses déplacements pour ajuster votre propre position. Vous Marchez rapidement à la moitié de votre vitesse. Ce déplacement ne provoque pas de réactions de l'ennemi de la part de l'ennemi adjacent à votre allié vers lequel il s'est déplacé."
                ]
            },
            {
                "name"       : "Poche de gorge",
                "level"      : "1",
                "traits"     : [
                    "Nagaji"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous vous êtes entraîné à utiliser les habitudes alimentaires uniques des nagaji à votre avantage. En manipulant les muscles de votre gorge, vous pouvez créer une poche d'air pour stocker jusqu'à quatre objets d'Encombrement léger ou inférieur sans risque de les dissoudre. Aucun de ces objets ne peut avoir excéder 30 centimètres dans une de ses dimensions.",
                    "Tant que vous disposez qu'au moins un objet dans votre poche de gorge, votre prononciation est notablement difficile à comprendre et vous avez un bourrelet visible au niveau du cou.",
                    "Placer un objet dans votre poche de gorge ou l'y récupérer nécessite une action Interagir. Vous pouvez vider votre poche de gorge en une action unique, ce qui provoque tout ce que vous y avez emmagasiné de tomber sur le sol dans votre case. Tout objet qui était couvert de poussière ou de saleté en ressort propre."
                ]
            },
            {
                "name"       : "Gorgée de venin",
                "level"      : "5",
                "traits"     : [
                    "Nagaji"
                ],
                "required"   : [
                    "nagaji venomous spit unarmed attack"
                ],
                "description": [
                    "Vous pouvez emmagasiner un venin préparé dans votre gorge et le cracher sur vos ennemis en plus de votre propre aspersion toxique Vous pouvez Interagir pour emmagasiner une dose de poison de blessure ou de contact dans votre gorge. Lorsque vous utilisez cette action, vous ne risquez pas de vous empoisonner vous-même tant que le poison est de votre niveau ou de niveau inférieur. La prochaine fois que vous attaquez une cible avec votre attaque à main nues de Crachat venimeux, le poison est dépensé.",
                    "Si vous réussissez à toucher la cible, elle est exposée au poison en plus des autres effets de votre crachat. Tant que vous conservez du venin dans votre gorge, votre prononciation est notablement difficile à comprendre. Vous ne pouvez retenir qu'un dose de poison de la sorte en même temps."
                ]
            },
            {
                "name"       : "Crachat de venin",
                "level"      : "5",
                "traits"     : [
                    "Nagaji"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez appris l'art de lancer des crachats toxiques sur les points vulnérables de vos ennemis, notamment les yeux. Vous obtenez une Frappe à distance à mains nues de crachat venimeux avec un facteur de portée de 3 mètres qui inflige 1d4 dégâts de poison. En cas de coup critique, la cible subit des dégâts de poison persistants égaux au nombre de dés de dégâts de l'arme. Votre crachat ne possède pas de groupe d'armes, ni d'effet critique spécialisé.",
                    "Spécial Si vous avez l'héritage nagaji coiffé, en plus de l'effet critique spécialisé de votre crachat animal, la cible est aussi Éblouie jusqu'au début de votre prochain tour."
                ]
            },
            {
                "name"       : "Nagaji aquatique",
                "level"      : "1",
                "traits"     : [
                    "Nagaji"
                ],
                "required"   : [
                ],
                "description": [
                    "Tout comme un naga aquatique, vous avez établi un lien avec une étendue d'eau sacrée ou vierge qui est soit votre foyer, soit un lieu à protéger. Vous obtenez le don général Contrôle de la respiration en tant que don supplémentaire et une Vitesse de nage de 3 mètres."
                ]
            },
            {
                "name"       : "Frénésie du sang de démon",
                "level"      : "5",
                "traits"     : [
                    "Peu courant",
                    "Orc"
                ],
                "required"   : [
                    "tusks unarmed attack"
                ],
                "description": [
                    "Accès Ethnie Matanji",
                    "Fréquence Une fois par minute",
                    "Déclencheur Vous réussissez à Frapper une créature vivante qui possède le trait fiélon avec votre frappe à mains nues avec vos Défenses.",
                    "Le simple goût du sang fiélon suffit pour que vous rentriez dans une fureur surnaturelle. Vous devenez Accéléré jusqu'à la fin de votre prochain tour et vous pouvez utiliser l'action supplémentaire pour faire une Frappe de défenses, Marcher rapidement ou Faire un pas."
                ]
            },
            {
                "name"       : "Emprise du dragon",
                "level"      : "9",
                "traits"     : [
                    "Peu courant",
                    "Orc"
                ],
                "required"   : [
                    "Dresseur de bête"
                ],
                "description": [
                    "Votre forteresse possède un lien draconique unique. Vous obtenez un bonus de circonstances de +2 lorsque vous tentez de Faire bonne impression sur une créature avec le trait dragon. Vous obtenez l'accès au compagnon animal Drake de monte."
                ]
            },
            {
                "name"       : "Appel du sang de la vie",
                "level"      : "13",
                "traits"     : [
                    "Orc"
                ],
                "required"   : [
                ],
                "description": [
                    "L'impulsion pour survivre et continuer à vous battre résonne fort en vous.",
                    "Vous obtenez un bonus de circonstances aux jets de dégâts à vos frappes au corps-à-corps égal à deux fois la somme de vos conditions Blessé et Condamné (jusqu'à un bonus de circonstances maximum de +8 aux dégâts) lorsque vous avez l'une ou les deux conditions."
                ]
            },
            {
                "name"       : "Masque de terreur",
                "level"      : "13",
                "traits"     : [
                    "Orc"
                ],
                "required"   : [
                    "Masque de guerre orc"
                ],
                "description": [
                    "Déclencheur Vous débutez votre tour avec l'état Effrayé.",
                    "Conditions Vous portez votre masque de guerre.",
                    "Votre masque de guerre brûle sur votre visage, consumant votre appréhension. Vous ôtez l'état Effrayé. Votre masque de guerre est détruit et vous ne pouvez le réappliquer jusqu'à votre prochains préparatifs quotidiens.",
                    "Spécial Vous pouvez utiliser cette réaction même si vous avez un état liée à l'état Effrayé qui devrait normalement empêcher d'utiliser une réaction, telle que \"En fuite tant que vous êtes Effrayé\" ou \"Paralysé tant que vous êtes Effrayé\"."
                ]
            },
            {
                "name"       : "Masque de douleur",
                "level"      : "9",
                "traits"     : [
                    "Orc"
                ],
                "required"   : [
                    "expert in Intimidation",
                    "Masque de guerre orc"
                ],
                "description": [
                    "Déclencheur Vous réussissez un test pour Démoraliser.",
                    "Conditions Vous portez votre Masque de guerre .",
                    "Votre masque a évolué en une manifestation de votre douleur, que vous pouvez déchaîner. La créature que vous réussissez à démoraliser subit @Damage[2d6[mental]]{2d6 dégâts mentaux} ou @Damage[4d6[mental]]{4d6 dégâts mentaux} si vous êtes légendaire en Intimidation. La cible est alors temporairement immunisée contre les dégâts supplémentaires issus de Masque de douleur pendant 24 heures."
                ]
            },
            {
                "name"       : "Masque de pouvoir",
                "level"      : "5",
                "traits"     : [
                    "Orc"
                ],
                "required"   : [
                    "Masque de guerre orc"
                ],
                "description": [
                    "Votre Masque de guerre affûte votre lien avec la source de la puissance de votre masque. Au cours de vos préparatifs quotidiens, choisissez Coup assuré, Douleur fantôme ou Terreur.",
                    "Jusqu'à vos prochains préparatifs quotidiens, vous pouvez lancer ce sort comme un sort inné de rang 1 une fois par jour. La tradition du sort est déterminée par celle liée à votre masque de guerre . Vous devez porter votre masque de guerre pour Lancer le sort."
                ]
            },
            {
                "name"       : "Masque de rejet",
                "level"      : "5",
                "traits"     : [
                    "Fortune",
                    "Orc"
                ],
                "required"   : [
                    "Masque de guerre orc"
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Vous obtenez un échec sur un jet de sauvegarde contre un effet de la tradition magique de votre masque de guerre .",
                    "Conditions Vous portez votre masque de guerre.",
                    "Votre masque de guerre projette une colère furieuse chauffée à blanc qui tente de vaporiser la magie incriminée.",
                    "Vous relancez le test déclencheur avec un bonus de circonstances de +2, mais vous devez utiliser le nouveau résultat même s'il est pire que votre premier."
                ]
            },
            {
                "name"       : "Férocité orque",
                "level"      : "1",
                "traits"     : [
                    "Orc"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Vous êtes réduit à 0 Point de vie, mais ne mourez pas sur-le-champ.",
                    "La férocité au combat coule dans votre sang et vous refusez de succomber à vos blessures, aussi terribles soient-elles. Vous évitez d'être assommé et restez à 1 Point de vie et votre état Blessé augmente de 1."
                ]
            },
            {
                "name"       : "Superstition orque",
                "level"      : "1",
                "traits"     : [
                    "Concentration",
                    "Orc"
                ],
                "required"   : [
                ],
                "description": [
                    "Déclencheur Vous tentez un jet de sauvegarde contre un sort ou un effet magique et n'avez pas encore lancé les dés.",
                    "Vous vous défendez vous-même de la magie en comptant sur des techniques dérivées des superstitions culturelles orques. Vous obtenez un bonus de circonstances de +1 à votre jet de sauvegarde contre le sort ou l'effet magique déclencheur."
                ]
            },
            {
                "name"       : "Masque de guerre orc",
                "level"      : "1",
                "traits"     : [
                    "Orc"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous peignez votre visage pour créer un Masque de guerre , un objet magique investi d'Encombrement négligeable avec un niveau d'objet égal à votre niveau et un usage de porté (masque). Il possède le trait divination et le trait d'une tradition magique qui dépend de son type. Revêtir ou ôter votre Masque de guerre nécessite 1 minute de travail, bien que vous n'avez pas besoin d'Investir le masque à chaque fois. Le Masque de guerre vous est unique et pourrait représenter votre forteresse, vos exploits ou votre foi. Lorsque vous créez votre masque, vous devez choisir la source du pouvoir de votre masque de guerre parmi les options ci-dessous. Cette source détermine la compétence associée et la tradition magique. Une fois que vous sélectionnez cette source, elle ne peut être changée.",
                    "Vous êtes qualifié dans la compétence associée et vous obtenez le don de compétence Savoir douteux comme don supplémentaire. Vous pouvez passer 1 heure à accomplir une cérémonie qui coûte 50 po pour vous harmoniser vous-même plus profondément avec votre Masque de guerre . Si vous le faites, vous obtenez un bonus d'objet de +1 à la compétence associée lorsque vous portez le masque de guerre ."
                ]
            },
            {
                "name"       : "Férocité dévastatrice",
                "level"      : "17",
                "traits"     : [
                    "Orc"
                ],
                "required"   : [
                    "Férocité orque"
                ],
                "description": [
                    "Déclencheur Vous utilisez Férocité orque",
                    "Vous vous déchaînez vicieusement même lorsque vous repoussez la mort. Faites une unique Frappe au corps-à-corps. Si cette Frappe amène un ennemi à 0 Point de vie, cette activation de Férocité orque n'est pas décomptée de sa fréquence d'utilisation."
                ]
            },
            {
                "name"       : "Survivant de sort",
                "level"      : "5",
                "traits"     : [
                    "Peu courant",
                    "Orc"
                ],
                "required"   : [
                ],
                "description": [
                    "Une fois que vous avez résisté à la magie d'un adversaire, tout autre qu'il place sur votre chemin devient moins efficace. Lorsque vous tentez un jet de sauvegarde contre un sort en utilisant Superstition orque ou Superstition omniprésente et obtenez un succès critique, vous obtenez une résistance 1 contre tous les dégâts infligés par cet incantateur jusq'à la fin de son prochain tour. Au niveau 9 puis tous les 4 niveaux par la suite, la résistance augmente de 1."
                ]
            },
            {
                "name"       : "Vigueur dans la victoire",
                "level"      : "5",
                "traits"     : [
                    "Orc"
                ],
                "required"   : [
                ],
                "description": [
                    "Déclencheur Vous réduisez un adversaire à 0 Point de vie.",
                    "Vos victoires au combat vous remplissent de fierté et vous insufflent l'énergie nécessaire pour combattre un peu plus longtemps malgré vos blessures. Jusqu'à la fin de votre prochain tour, Vous obtenez une quantité de Points de vie temporaires égale à votre modificateur de Constitution."
                ]
            },
            {
                "name"       : "Éveiller l'obake",
                "level"      : "13",
                "traits"     : [
                    "Poupée"
                ],
                "required"   : [
                    "tsukumogami poppet heritage"
                ],
                "description": [
                    "Tous les outils ne sont pas bien entretenus et ceux qui sont mal traités peuvent se réveiller sous la forme d'esprits malveillants. Vous pouvez temporairement évoquer l'esprit au sein d'un outil maltraité proche pour lancer Terreur comme un sort inné arcanique au rang 5 une fois par jour. Lorsque vous le faites, la magie terrifiante du sort prend pour point d'origine un unique objet non tenu dans un rayon de 9 mètres au lieu de vous et vous mesurez la portée du sort à partir de cet objet. Si le résultat du sort met En fuite une cible, elle fuit cet objet au lieu de vous fuir car son esprit se remplit de la certitude absolue que l'objet va revenir à la vie et l'attaquer avec une joie malsaine."
                ]
            },
            {
                "name"       : "Bricoleur habile",
                "level"      : "5",
                "traits"     : [
                    "Poupée"
                ],
                "required"   : [
                ],
                "description": [
                    "Le temps passé à vous occuper de votre propre forme a débloqué votre capacité à réparer d'autres choses. Vous pouvez lancer Réparation au rang 1 une fois par jour comme un sort arcanique inné. Au niveau 7, le sort est intensifié au rang 2, puis d'un rang supplémentaire tous les 3 niveaux par la suite. Même si vous êtes vivant et pas un objet et que vous ne pouvez normalement pas récupérer de Points de vie par le biais des effets qui réparent les objets (comme avec l'action Réparer), vous pouvez vous cibler vous-même avec ce sort inné et l'utiliser pour récupérer des Points de vie."
                ]
            },
            {
                "name"       : "Poupée inoffensive",
                "level"      : "1",
                "traits"     : [
                    "Poupée"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous ne ressemblez à rien de plus qu'un jouet, une poupée ou une statuette ordinaire et vous pouvez tromper les autres avec votre apparence inoffensive. Vous êtes qualifié en Duperie (ou une autre compétence si vous êtes déjà qualifié en Duperie) et vous pouvez Vous faire passer pour un jouet inanimé ou une simple marionnette. Vous pouvez Vous cacher sans aucun abri ou camouflage des créatures qui ne savent pas que vous êtes vivant, tant que vous êtes dans un endroit où un jouet de votre forme ne serait pas déplacé, comme un stand de carnaval, une rue de la ville ou un magasin de jouets (à la discrétion du MJ). Si vous réussissez, ceux qui vous regardent vous voient toujours, mais ils vous confondent avec un jouet inanimé. Après avoir été trompés une fois, ils se rendent compte que vous êtes vivant, et vous ne pouvez plus vous cacher d'eux de cette manière."
                ]
            },
            {
                "name"       : "Poupée serviable",
                "level"      : "1",
                "traits"     : [
                    "Poupée"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous êtes particulièrement doué pour aider les autres à accomplir une tâche. Vous obtenez un bonus de circonstances de +2 aux tests pour Aider et vous n'infligez pas à votre allié une pénalité de circonstances de -1 à son test si vous obtenez un échec critique à votre tentative pour l'Aider."
                ]
            },
            {
                "name"       : "Blessure histrionique",
                "level"      : "5",
                "traits"     : [
                    "Mental",
                    "Poupée"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par heure",
                    "Déclencheur Une créature que vous pouvez voir vous blesse avec une Frappe au corps-à-corps.",
                    "Vous répondez avec un regard effaré, une chute spectaculaire ou un mouvement de bras théâtral qui désarçonne votre agresseur. L'attaquant doit réussir un jet de @Check[will|against:class-spell] contre le plus élevé entre votre DD de classe ou votre DD de sort ou être Stupéfié 1 pendant 1 round (Stupéfié 2 sur un échec critique)."
                ]
            },
            {
                "name"       : "Ragot impossible",
                "level"      : "13",
                "traits"     : [
                    "Peu courant",
                    "Poupée"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez parler aux objets inanimés, en trouvant une étincelle magique à l'intérieur similaire à celle qui vous a animée. Vous pouvez lancer Discuter avec les pierres une fois par jour comme un sort inné arcanique mais, au lieu de parler à de la pierre, vous parlez avec les jouets, les statues ou les autres objets inanimés en trois dimensions qui imitent l'apparence d'une créature, quelle que soit leur composition. Le MJ décide avec quels objets vous pouvez discuter et ce qu'ils savent bien que des objets aient généralement une bonne opinion de ceux qui les ont entretenus et une opinion médiocre de ceux qui les ont négligé ou ignoré."
                ]
            },
            {
                "name"       : "Poupée isolée",
                "level"      : "5",
                "traits"     : [
                    "Poupée"
                ],
                "required"   : [
                    "tsukumogami poppet heritage",
                    "you have a metal or ceramic body"
                ],
                "description": [
                    "Vous avez utilisé des enveloppements isolants ou des émaux spéciaux pour réduire votre faiblesse au courant et aux températures. Vous n'avez plus désormais la faiblesse à l'électricité ou au froid provoqué par votre héritage tsukumogami."
                ]
            },
            {
                "name"       : "Fait pour le combat",
                "level"      : "1",
                "traits"     : [
                    "Poupée"
                ],
                "required"   : [
                    "tsukumogami poppet heritage"
                ],
                "description": [
                    "Vous pouvez utiliser votre corps comme une arme mortelle. Vous obtenez une des attaques à mains nues au corps-à-corps suivants, qui doit correspondre à votre corps (par exemple, enveloppement tsukumogami pour un tsukumogami qui est une pelote de coton).",
                    "Spécial Vous pouvez prendre ce don une seule fois au niveau 1 et vous ne pouvez utiliser le réapprentissage pour abandonner ou prendre ce don."
                ]
            },
            {
                "name"       : "Mentoré minuscule",
                "level"      : "1",
                "traits"     : [
                    "Poupée"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez trouvé un camarade poupée sur le point de s'éveiller et avez décidé de l'aider. Vous obtenez un familier poupée."
                ]
            },
            {
                "name"       : "Pas de mains, pas de problème",
                "level"      : "5",
                "traits"     : [
                    "Poupée"
                ],
                "required"   : [
                    "tsukumogami poppet heritage"
                ],
                "description": [
                    "Après une vie passée à utiliser des membres temporaires et fantomatiques pour manipuler des objets, vous n'avez plus besoin de véritables mains. Vous pouvez étendre vos membres pour accomplir de simples actions Interagir à une portée de 1,50 mètre au-delà de votre portée normale, après quoi vos membres retournent à leur longueur normale. Vous pouvez aussi lancer le tour de magie Manipulation télékinétique comme un sort inné arcanique ou occulte à volonté, qui prend toujours la forme fantomatique d'une main télékinétique et est reliée à votre corps par le biais d'un bras serpentin illusoire. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur."
                ]
            },
            {
                "name"       : "Rien que du vent",
                "level"      : "5",
                "traits"     : [
                    "Poupée"
                ],
                "required"   : [
                    "Stuffed poppet heritage"
                ],
                "description": [
                    "Votre intérieur rembourré est dépourvu d'organes ou de structure spécifique avec peu de points faibles. Vous obtenez une résistance contre les dégâts de précision égale à la moitié de votre niveau."
                ]
            },
            {
                "name"       : "Quadrupède",
                "level"      : "1",
                "traits"     : [
                    "Poupée"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez été construit dans une forme qui possède quatre jambes plutôt que deux. Votre vitesse est de 9 mètres.",
                    "Spécial Vous ne pouvez prendre ce don qu'au niveau 1 et vous ne pouvez pas utiliser le réapprentissage pour obtenir ou perdre ce don."
                ]
            },
            {
                "name"       : "Étincelle de réanimation",
                "level"      : "13",
                "traits"     : [
                    "Poupée"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Vous avez l'état Mourant et allez tenter un test de récupération.",
                    "La magie qui vous anime lutte pour vous conserver vivant. Vous remontez à 1 Point de vie, perdez les conditions Mourant et Inconscient et pouvez agir normalement lors de ce tour. Vous augmentez ou obtenez l'état Blessé comme à l'ordinaire lorsque vous perdez l'état Mourant de cette manière."
                ]
            },
            {
                "name"       : "Recousu",
                "level"      : "17",
                "traits"     : [
                    "Poupée"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez appris à recoudre ensemble les déchirures et les blessures les plus terribles. Vous pouvez lancer Régénération comme un sort inné arcanique au rang 7 une fois par jour."
                ]
            },
            {
                "name"       : "Poupée escaladeuse",
                "level"      : "9",
                "traits"     : [
                    "Poupée"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre constitution intègre des cordes, des crochets ou d'autres outils pour vous aider à vous déplacer sur des surfaces escarpées. Vous obtenez une Vitesse d'escalade de 4,50 mètres."
                ]
            },
            {
                "name"       : "Poupée ignifugée",
                "level"      : "5",
                "traits"     : [
                    "Poupée"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez renforcé vos parties intérieures avec des matériaux ignifuges ou retardateurs de feu, vous protégeant ainsi du feu. Vous n'avez plus la faiblesse contre le feu de la capacité inflammable.",
                    "Spécial Vous ne pouvez pas prendre ce don si vous êtes une Poupée rembourrée."
                ]
            },
            {
                "name"       : "Yeux en bouton brillant",
                "level"      : "1",
                "traits"     : [
                    "Poupée"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez poli vos yeux pour refléter les plus petits détails dans la lumière la plus faible. Vous gagnez la compétence Perspicacité astucieuse comme don supplémentaire mais vous devez choisir Perception. De plus, vous obtenez un bonus de circonstances de +1 aux tests de Perception contre les illusions visuelles."
                ]
            },
            {
                "name"       : "Poupée volante",
                "level"      : "17",
                "traits"     : [
                    "Poupée"
                ],
                "required"   : [
                ],
                "description": [
                ]
            },
            {
                "name"       : "Solidarité",
                "level"      : "9",
                "traits"     : [
                    "Poupée"
                ],
                "required"   : [
                    "tsukumogami poppet heritage"
                ],
                "description": [
                    "Fréquence Une fois toutes les 10 minutes",
                    "Vous accordez une partie de vos propres énergies vitales pour réparer les dégâts. Vous touchez un objet non magique de 2 Encombrements ou moins ou un objet magique de 1 Encombrement ou moins et vous redonnez @Damage[(2*@actor.level)[healing]]{des Points de vie} à la cible égal à deux fois votre niveau. Vous perdez autant de Points de vie que la cible en récupère. Ce transfert de vitalité direct signifie qu'aucun effet appliqué qui devrait augmenter les Points de vie que la cible regagne ou diminuer les Points de vie que vous perdez ne s'applique. Ce transfert ignore aussi tout Point de vie temporaire que vous ou la cible possédez. Vous ne pouvez réduire vos Points de vie en dessous de 1 en utilisant Solidarité. Vous ne pouvez remplacer des parties perdues ou réparer un objet qui a été complètement détruit.",
                    "Spécial Si vous possédez le don Mentoré minuscule, vous pouvez utiliser Solidarité pour guérir votre familier."
                ]
            },
            {
                "name"       : "Étincelle d'indépendance",
                "level"      : "5",
                "traits"     : [
                    "Poupée"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous touchez une créature avec le trait sbire eet partagez le sens aigu de l'autonomie que vous avez découvert. Le sbire est Accéléré pendant 1 round et est ensuite temporairement immunisé pendant 10 minutes. Il peut utiliser cette action supplémentaire pour Faire un pas, Marcher rapidement ou Frapper."
                ]
            },
            {
                "name"       : "Se tortiller",
                "level"      : "13",
                "traits"     : [
                    "Poupée"
                ],
                "required"   : [
                ],
                "description": [
                    "Déclencheur Une créature vous a Saisi, vous Immobilise ou vous Entrave.",
                    "Vous êtes habitué à échapper à la prise de créatures plus grandes ou à échapper aux câlins un peu trop enthousiastes des enfants. Vous tentez de Vous échapper."
                ]
            },
            {
                "name"       : "Terreur soudaine",
                "level"      : "1",
                "traits"     : [
                    "Poupée"
                ],
                "required"   : [
                    "tsukumogami poppet heritage"
                ],
                "description": [
                    "Vous tirez parti de la nature amorphe de votre corps pour effrayer les autres. Tentez de [[/act demoralize options=sudden-terror]]{Démoraliser} une créature dans les 9 mètres. Démoraliser perd le trait audible et obtient le trait visuel et vous ne subissez pas de pénalité si la créature ne comprend pas votre langue. Si vous étiez Caché de la créature, vous obtenez un bonus de circonstances de +2 à votre test et si vous réussissez, la créature est Effrayée 2 au lieu d'Effrayée 1. Toutes les créatures qui ont été témoins de votre utilisation de Terreur soudaine sont alors temporairement immunisées contre votre Terreur soudaine pendant 24 heures."
                ]
            },
            {
                "name"       : "Poupée nageuse",
                "level"      : "5",
                "traits"     : [
                    "Poupée"
                ],
                "required"   : [
                ],
                "description": [
                    "Des palmes, nageoires ou d'autres accessoires vous aident à vous diriger dans l'eau. Vous obtenez une Vitesse de nage de 4,50 mètres."
                ]
            },
            {
                "name"       : "Purge rapide",
                "level"      : "1",
                "traits"     : [
                    "Poupée"
                ],
                "required"   : [
                ],
                "description": [
                    "Les toxines s'infiltrent rapidement dans votre corps artificiel. Chaque fois que vous réussissez un jet de Vigueur contre un poison qui vous affecte déjà, vous réduisez son stade de 2 ou de 1 si c'est un poison virulent. Chaque succès critique que vous obtenez contre un poison en cours réduit son stade de 3 ou de 2 si c'est un poison virulent."
                ]
            },
            {
                "name"       : "Roue et gigue",
                "level"      : "9",
                "traits"     : [
                    "Poupée"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous faites des mouvements chaotiques et des sons idiots pour captiver les spectateurs. Vous pouvez lancer Discours captivant comme un sort inné arcanique au rang 3 une fois par jour."
                ]
            },
            {
                "name"       : "Tout ceci s'est produit auparavant",
                "level"      : "5",
                "traits"     : [
                    "Samsaran"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Vous êtes sur le point de lancer l'initiative.",
                    "Vous vous remémorez instantanément un souvenir de vos innombrables vies passés qui intensifie votre vigilance sur votre environnement et accélère votre réponse. Vous obtenez un bonus de circonstances de +4 au jet déclencheur. Vous êtes Accéléré pendant 1 round et pouvez utiliser votre action supplémentaire uniquement pour Vous souvenir ou Faire un pas."
                ]
            },
            {
                "name"       : "Tout cela se reproduira à nouveau",
                "level"      : "1",
                "traits"     : [
                    "Fortune",
                    "Mental",
                    "Samsaran"
                ],
                "required"   : [
                ],
                "description": [
                    "Déclencheur Vous obtenez un échec ou un échec critique contre un jet de sauvegarde contre un effet d'émotion.",
                    "Même face à une épreuve écrasante, vous trouvez du réconfort dans l'idée que ce sentiment est éphémère. Toutes les choses font simplement partie d'un cycle qui ne s'arrête jamais. Relancez le jet de sauvegarde déclencheur avec un bonus de statut de +1. Vous devez utiliser le second résultat, même s'il est pire."
                ]
            },
            {
                "name"       : "Et sera ainsi une fois de plus",
                "level"      : "5",
                "traits"     : [
                    "Samsaran"
                ],
                "required"   : [
                    "Tout cela se reproduira à nouveau"
                ],
                "description": [
                    "Vous avez appris à laisser filer la plupart des soucis et à les contourner. Le déclencheur pour Tout cela se reproduira à nouveau devient désormais, \"Vous obtenez un échec ou un échec critique sur un jet de Vigueur, de Réflexes ou de Volonté.\" Vous ne pouvez toujours utiliser Tout cela se reproduira à nouveau qu'une fois par jour."
                ]
            },
            {
                "name"       : "Sang comme l'eau",
                "level"      : "5",
                "traits"     : [
                    "Samsaran"
                ],
                "required"   : [
                ],
                "description": [
                    "Le fluide aqueux dans vos veines ne s'écoulent pas de la même manière que le sang ordinaire. Le DD de vos tests nus pour mettre un terme aux dégâts de saignement est réduit de 15 à 10 ou de 10 à 5 après avoir reçu une assistance appropriée."
                ]
            },
            {
                "name"       : "Vision élucidatrice",
                "level"      : "1",
                "traits"     : [
                    "Samsaran"
                ],
                "required"   : [
                ],
                "description": [
                    "Vos yeux ont vu de nombreuses choses au cours de vos vies passées et votre vision semble avoir gagné en puissance au cours de vos différentes vies. Vous obtenez vision dans le noir."
                ]
            },
            {
                "name"       : "Je reviendrai",
                "level"      : "9",
                "traits"     : [
                    "Samsaran"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre relation spéciale avec la mort et la renaissance vous permet de percevoir lorsqu'est venu le temps de pénétrer dans le Grand Au-delà et ce moment est venu. Vous obtenez un bonus de statut de +2 aux jets de sauvegarde contre les effets de mort. Vous obtenez le don Dur à cuire. La première fois lors de chaque jour au cours duquel vous perdez l'état Mourant, vous n'augmentez pas votre état Blessé."
                ]
            },
            {
                "name"       : "Compréhension innée",
                "level"      : "1",
                "traits"     : [
                    "Samsaran"
                ],
                "required"   : [
                ],
                "description": [
                    "De vagues liens avec les connaissances et les talents de votre passé vous guident dans l'accomplissement des tâches que cette vie-ci pourrait ne pas comprendre. Vous pouvez tenter des actions de compétence qui exigent normalement qu'un personnage soit qualifié même si vous êtes inexpérimenté et vous obtenez un bonus de circonstances de +2 au test lorsque c'est le cas."
                ]
            },
            {
                "name"       : "Sang de la vie",
                "level"      : "9",
                "traits"     : [
                    "Guérison",
                    "Samsaran",
                    "Vitalité"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre chemin vers l'illumination a permis à votre sang de posséder des propriétés presqu'immortelles, vous permettant de guérir autrui. Vous sacrifiez une partie de votre vitalité pour soigner une autre créature consentante vivante qui vous est adjacente, en couvrant ses blessures avec votre sang. Vous perdez @Damage[(max(3,floor((@actor.level -4)/2))d6)[untyped]]{1d6} Points de vie plus 1d6 Points de vie supplémentaires tous les 2 niveaux que vous possédez au-delà du 10e. Il n'est pas possible de résister, d'empêcher ou d'annuler ces dégâts d'une manière ou d'une autre. La créature cible regagne un nombre de Points de vie égal aux dégâts que vous avez subis. Les créatures que vous soignez de cette manière sont alors temporairement immunisées à votre Sang de la vie pendant 24 heures."
                ]
            },
            {
                "name"       : "Souvenir de maîtrise",
                "level"      : "13",
                "traits"     : [
                    "Samsaran"
                ],
                "required"   : [
                    "Souvenir de compétence"
                ],
                "description": [
                    "Des souvenirs fugaces de vos vies passées font surface en un instant, en particulier lorsque vous êtes sous contrainte. Vous pouvez utiliser Souvenir de compétence une fois par heure au lieu d'une fois par jour."
                ]
            },
            {
                "name"       : "Souvenir de compétence",
                "level"      : "9",
                "traits"     : [
                    "Samsaran"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vos années d'entraînement dans une vie précédente n'ont pas été gâchées par votre mort et vous pouvez faire appel à cet entraînement lorsque vous en avez le plus besoin. Choisissez une compétence. Vous augmentez temporairement votre degré de maîtrise avec cette compétence d'un degré pendant 1 minute (d'inexpérimenté à qualifié, de qualifié à expert et d'expert à maître). Cette amélioration temporaire ajuste votre bonus de maîtrise et vous permet d'utiliser des actions de compétence basées sur cette maîtrise améliorée comme à l'ordinaire. Souvenir de compétence ne peut améliorer un degré de maîtrise de compétence au-delà de maître."
                ]
            },
            {
                "name"       : "Survivances du passé",
                "level"      : "1",
                "traits"     : [
                    "Samsaran"
                ],
                "required"   : [
                ],
                "description": [
                    "Les souvenirs de votre première vie sont forts et reviennent continuellement en vous, même après plusieurs incarnations. Vous obtenez le don Ascendance adoptée et pouvez choisir n'importe quel ascendance humanoïde courante ou peu courante avec le don. Vous obtenez aussi le don général Connaissance supplémentaire pour la Connaissance de votre ascendance choisie comme Connaissance des nains ou Connaissance des hommes-rats."
                ]
            },
            {
                "name"       : "Connaissance des samsarans",
                "level"      : "1",
                "traits"     : [
                    "Samsaran"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez à votre actif d'innombrables années de connaissances, concentrées sur la voie de l'illumination. Vous êtes qualifié en Religion et Société. Si vous devriez être automatiquement qualifié dans l'une de ces compétences (grâce à votre background ou à votre classe, par exemple), vous êtes qualifié dans une des compétences de votre choix.",
                    "Vous obtenez également le don général Connaissance supplémentaire en Connaissance des samsarans."
                ]
            },
            {
                "name"       : "Mémoire des armes des samsarans",
                "level"      : "1",
                "traits"     : [
                    "Samsaran"
                ],
                "required"   : [
                ],
                "description": [
                    "L'entraînement au cours de vos vies antérieures et même de celles des samsarans qui vous ont précédé est profondément ancré et guide vos mouvements durant le combat. Choisissez deux armes avec un trait ancestral de deux ascendances humanoïdes courantes différentes ou d'autres ascendances auxquelles vous avez accès. Vous obtenez l'accès aux armes que vous avez choisies. Vous obtenez une familiarité avec ces armes. Pour les besoins de déterminer votre maîtrise, vous considérez ces armes, si elles sont de guerre comme des armes simples et, si elles sont évoluées comme des armes de guerre.",
                    "Au niveau 5, lorsque vous obtenez un coup critique avec l'une de ces armes, vous bénéficiez de son effet critique spécialisé."
                ]
            },
            {
                "name"       : "Secrets du passé",
                "level"      : "9",
                "traits"     : [
                    "Samsaran"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez établi une connection plus forte avec vos précédentes personnalités et pouvez faire revivre les souvenirs de vos existences passées en un instant, vous permettant de puiser dans les connaissances qui sommeillent au plus profond de votre esprit. Vous pouvez lancer Hypercognition comme un sort inné occulte inné une fois par jour."
                ]
            },
            {
                "name"       : "Le cycle continue",
                "level"      : "17",
                "traits"     : [
                    "Samsaran"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Vous êtes réduit à 0 Point de vie et devrait obtenir l'état Mourant ou devriez autrement mourir.",
                    "La mort vous est aussi naturelle que de respirer et vous pouvez la franchir aussi aisément que les autres ennuis dans votre vie. Vous vous empêchez de mourir et regagnez un nombre de Points de vie égal à @Damage[((6d8+floor(@actor.level/2)))[healing]]{6d8 plus la moitié de votre niveau}. Si la cause de votre mort était un état ou un effet qui devrait vous causer la mort après avoir regagné de Points de vie, comme une valeur élevée de l'état Condamné, vous suspendez cet effet pendant 1 minute."
                ]
            },
            {
                "name"       : "Ceci aussi doit passer",
                "level"      : "17",
                "traits"     : [
                    "Samsaran"
                ],
                "required"   : [
                    "Et sera ainsi une fois de plus"
                ],
                "description": [
                    "Les inquiétudes des mortels sont des sujets qui vous semblent tellement basiques que vous les oubliez aussi rapidement que vous en faites l'expérience. Vous pouvez utiliser Et sera ainsi une fois de plus une fois par heure, au lieu d'une fois par jour."
                ]
            },
            {
                "name"       : "Rancune de mille ans",
                "level"      : "5",
                "traits"     : [
                    "Occulte",
                    "Samsaran"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Vous réussissez un test pour Démoraliser.",
                    "Vous pouvez faire appel à vos vies antérieures et projeter toute la frustration, l'échec et le désespoir que vous avez accumulés à travers vos yeux sur une cible, en submergeant ses sens. Une créature que vous êtes parvenu à Démoraliser devient Nauséeuse au lieu d'être Effrayée, avec la même valeur d'état. Le DD pour récupérer de l'état Nauséeux est votre DD d'Intimidation."
                ]
            },
            {
                "name"       : "Eau en eau",
                "level"      : "13",
                "traits"     : [
                    "Samsaran"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous permettez à votre corps de devenir de l'eau, puis à reconstituer votre forme tangible autre part. Vous pouvez lancer Translocation entant que sort occulte inné deux fois par jour. Le sort obtient également le trait eau. Si vous Lancez ce sort alors que vous vous trouvez dans une étendue d'eau avec au moins de l'eau jusqu'aux chevilles, vous n'avez pas besoin d'accomplir une incantation ou des gestes pour Lancer le sort (ce qui vous permet de ne pas provoquer de réactions comme Frappe réactive) et le sort obtient le trait subtil puisque vous tombez dans l'eau sans même une éclaboussure."
                ]
            },
            {
                "name"       : "Guérisseur anccestral",
                "level"      : "9",
                "traits"     : [
                    "Sarangay"
                ],
                "required"   : [
                    "Guérisseur populaire"
                ],
                "description": [
                    "Suivant les traditions de ceux qui étaient là avant vous, vous avez appris comment bannir les effets qui embrument l'esprit, le corps et l'âme. Vous pouvez lancer Clarté d'esprit ou Corps assaini au rang 4 en tant que sort inné occulte une fois par jour."
                ]
            },
            {
                "name"       : "Joyau éveillé",
                "level"      : "1",
                "traits"     : [
                    "Occulte",
                    "Sarangay"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez un jour détenu la pierre de tête d'un ancêtre ou d'un être cher décédé et elle a éveillé un pouvoir mystérieux en vous. Vous obtenez un tour de magie de la liste des sorts occultes. Tant que vous possédez votre tête de gemme, vous pouvez Lancer ce sort comme un sort inné à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur."
                ]
            },
            {
                "name"       : "Convocation de la Terre et de la Lune",
                "level"      : "17",
                "traits"     : [
                    "Concentration",
                    "Occulte",
                    "Métamorphose",
                    "Sarangay"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vous invoquez Mère terre et Père lune pour vous remplir de lumière. Un cocon de lumière lunaire vous enveloppe momentanément et vous en émergez sous une forme impressionnante faite d'énergie tourbillonnante, tatouée de poussière stellaire et vêtue d'une tenue d'apparat en argent et en nacre. Lorsque vous utilisez cette capacité, vous obtenez les avantages des sorts Agrandissement au rang 4 et également de Vol. Cette forme dure pendant 5 minutes ou jusqu'à ce que vous utilisiez de nouveau cette action pour reprendre votre forme ordinaire.",
                    "Si vous avez votre gemme de tête, elle irradie une aura de lumière lunaire, qui Ébloui les créatures qui débutent leur tour en vous étant adjacentes jusqu'au début de leur tour à moins qu'elles ne réussissent un jet de @Check[will|against:class-spell] contre le plus élevé entre votre DD de classe ou votre DD de sort."
                ]
            },
            {
                "name"       : "Couronne d'os",
                "level"      : "1",
                "traits"     : [
                    "Sarangay"
                ],
                "required"   : [
                ],
                "description": [
                    "Lorsque vous avez atteint l'âge adulte, la Terre mère vous a béni en vous donnant un crâne plus épais, ce qui a été célébré comme un signe de bon augure au sein de votre communauté. Les cornes se rejoignent pour former une plaque osseuse qui protège la tête des chocs violents. Le dé de dégâts pour votre attaque de cornes à mains nues à 1d8 et il obtient le trait déflagration."
                ]
            },
            {
                "name"       : "Joyau de déviation",
                "level"      : "5",
                "traits"     : [
                    "Occulte",
                    "Sarangay"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par heure",
                    "Déclencheur Vous êtes la cible d'une attaque alors que vous possédez votre gemme de tête.",
                    "Conditions Vous êtes conscient de l'attaque déclencheuse.",
                    "Vous marchez sur la ligne entre deux côtés de quelque chose, comme si vous apparteniez à deux clans, en ayant un allégeance ou une foi partagée ou en étant pris entre deux destins possibles. Votre nature duale s'est harmonisée avec votre gemme de tête à la demi-lune et elle a manifesté son pouvoir en vous protégeant des attaques en traçant une ligne entre elles et vous. Vous obtenez un bonus de circonstances de +2 à la CA contre l'attaque déclencheuse."
                ]
            },
            {
                "name"       : "Guérisseur populaire",
                "level"      : "1",
                "traits"     : [
                    "Sarangay"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre communauté vous reconnaît comme un chaman ou un autre animiste, un statut que vous avez obtenu à travers le lignage, l'apprentissage ou un évènement surnaturel. Vous êtes qualifié en Médecine et en Occultisme. Si vous devriez être automatiquement qualifié dans une de ces compétences (par votre historique ou votre classe, par exemple), Vous êtes qualifié dans une compétence de votre choix à la place. Vous obtenez un bonus de circonstances de +1 aux tests de Médecine pour Soigner les blessures et Soigner la maladie."
                ]
            },
            {
                "name"       : "Joyau diffracteur",
                "level"      : "13",
                "traits"     : [
                    "Sarangay"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre capacité à passer sans vous faire voir à travers le monde vous a accordé la bénédiction de la nouvelle lune. Une fois par jour, lorsque vous êtes en possession de votre gemme de tête, vous pouvez lancer soit Invisibilité ou Translocation comme un sort inné occulte au rang 4."
                ]
            },
            {
                "name"       : "Joyau paralysant",
                "level"      : "9",
                "traits"     : [
                    "Mise hors de combat",
                    "Occulte",
                    "Sarangay"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Votre dévouement aux idéaux de l'art et de la beauté permet à votre gemme de tête d'accéder au pouvoir de la lune décroissante. Lorsque vous êtes en possession de votre gemme de tête, vous pouvez encahir les ennemis avec un sens d'émerveillement respectueux. Les ennemis dans une @Template[emanation|distance:15]{émanation de 4,50 mètres} doivent tenter un jet de @Check[will|against:class-spell] contre le plus élevé entre votre DD de classe ou votre DD de sort.",
                    "Succès critique L'ennemi n'est pas affecté.",
                    "Succès L'ennemi est Fasciné pendant 1 round.",
                    "Échec L'ennemi est Étoudi 1.",
                    "Échec critique L'ennemi est Paralysé pendant 1 round."
                ]
            },
            {
                "name"       : "Étreinte régénératrice",
                "level"      : "13",
                "traits"     : [
                    "Sarangay"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous régénérez votre esprit en prenant votre repos là où Mère Terre et Père Lune s'étreignent. Lorsque vous vous reposez à l'extérieur, vous pouvez choisir l'un des avantages suivants, qui dure jusqu'à votre prochain cycle de sommeil et ne peut être modifié."
                ]
            },
            {
                "name"       : "Connaissance des sarangays",
                "level"      : "1",
                "traits"     : [
                    "Sarangay"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez soigneusement écouté les contes transmis au sein de votre communauté. Vous êtes qualifié en Nature et en Survie. Si vous devriez automatiquement être qualifié dans une des ces compétences (par votre historique ou votre classe, par exemple), vous êtes à la place qualifié dans une compétence de votre choix.",
                    "Vous obtenez aussi le don général Connaissance supplémentaire en Connaissance des sarangays."
                ]
            },
            {
                "name"       : "Joyau abri",
                "level"      : "13",
                "traits"     : [
                    "Sarangay"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre gemme de tête a accédé à la puissance de la pleine lune à travers votre détermination à soigner et à protéger ceux qui vous sont chers. Vous pouvez lancer Fanal de vie comme un sort inné occulte de rang 5 une fois par jour, tant que vous êtes en possession de votre gemme de tête."
                ]
            },
            {
                "name"       : "Fumée à travers les bambous",
                "level"      : "5",
                "traits"     : [
                    "Sarangay"
                ],
                "required"   : [
                    "new moon sarangay"
                ],
                "description": [
                    "Vous avez passé un temps significatif à vous glisser silencieusement dans les bosquets de bambous et votre pas léger vous permet de naviguer même dans les forêts les plus épaisses et les broussailles avec aisance. Lorsque vous Faites un pas, vous pouvez vous déplacer de 3 mètres à la place d'1,50 mètre. Cela vous permet de Faire un pas sur un terrain difficile tant que vous pouvez assumer le coût de déplacement supplémentaire."
                ]
            },
            {
                "name"       : "Écho spirituel",
                "level"      : "9",
                "traits"     : [
                    "Occulte",
                    "Sarangay"
                ],
                "required"   : [
                    "Joyau éveillé"
                ],
                "description": [
                    "Vous possédez la gemme de tête d'un ancêtre décédé ou aimé, laquelle a commencé à résonner avec la vôtre. Tant que vous possédez cette gemme, vous obtenez la capacité de Lancer un sort comme un sort inné occulte de rang 4 une fois par jour. Le type de sort est déterminé par le clan de sarangay auquel la gemme de tête appartenait, que vous choisissez lorsque vous prenez ce don. De plus, choisissez une compétence de Connaissance pour représenter la connaissance que le décédé avait. Vous devenez qualifié dans cette compétence de Connaissance. Si la gemme est perdue ou détruite, elle peut repousser comme si elle était votre propre gemme de tête."
                ]
            },
            {
                "name"       : "Art du tisseur de lune",
                "level"      : "5",
                "traits"     : [
                    "Sarangay"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez appris à créer des illusions mineures en rassemblant des fils de lumière de la lune et en les tissant pour créer de petites images ou des voiles enveloppants. Vous pouvez lancer soit Objet illusoire soit Objet invisible comme un sort occulte inné une fois par jour."
                ]
            },
            {
                "name"       : "Tournoiement du râle à collier",
                "level"      : "5",
                "traits"     : [
                    "Sarangay"
                ],
                "required"   : [
                ],
                "description": [
                    "Déclencheur Vous obtenez un coup critique sur une Frappe au corps-à-corps contre un ennemi.",
                    "Vous vous entraîniez à la marche en dansant au son de la musique entre des perches de bambou qui claquent et votre mobilité accrue vous aide à chasser les bêtes dangereuses ou à combattre de multiples adversaires. Cette façon de vous déplacer et d'alterner entre le combat et la fuite désoriente vos ennemis et vous permet de choisir vos affrontements. Après avoir résolu votre attaque, vous pouvez immédiatement Faire un pas, Marcher rapidement ou Nager."
                ]
            },
            {
                "name"       : "Piétinement (Sarangay)",
                "level"      : "17",
                "traits"     : [
                    "Sarangay"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous savez tirer parti de votre taille et de votre élan lorsque vous utilisez votre attaque de cornes et vous pouvez utiliser votre vitesse de déplacement pour déborder vos adversaires. Vous Marchez rapidement jusqu'au double de votre vitesse et pouvez vous déplacer à travers les espaces des créatures qui sont d'au moins une taille de moins que la vôtre, Piétinant chaque créature dont vous pénétrez l'espace. Vous pouvez tenter de Piétiner la même créature seulement une fois au cours d'un unique Piétinement. Vous infligez des dégâts perforants égaux aux dégâts de votre attaque à mains nues de cornes contre ces créatures, qui peuvent tenter un jet de @Check[reflex|against:class-spell|basic] contre le plus élevé entre votre DD de classe ou votre DD de sort."
                ]
            },
            {
                "name"       : "Conseil du voyageur",
                "level"      : "1",
                "traits"     : [
                    "Sarangay"
                ],
                "required"   : [
                    "half moon sarangay"
                ],
                "description": [
                    "Au fil de vos voyages, vous avez résolu un nombre incalculable de disputes et conseillé ceux qui en avaient besoin. Vous êtes qualifié en Diplomatie. Si vous devriez automatiquement être qualifié en Diplomatie (par votre historique ou votre classe, par exemple), vous êtes qualifié à la place dans une autre compétence de votre choix.",
                    "Chaque jour, la première fois que vous devriez obtenir un échec critique lorsque vous Recueillez des informations ou Faites bonne impression, il devient un échec."
                ]
            },
            {
                "name"       : "Joyau de protection",
                "level"      : "5",
                "traits"     : [
                    "Occulte",
                    "Sarangay"
                ],
                "required"   : [
                ],
                "description": [
                    "Une vie à chasser et à combattre a amené votre gemme de tête à s'harmoniser à la lune croissante, ce qui s'est manifesté dans le pouvoir de vous protéger du mal. Votre gemme de tête vous protège en rendant votre peau difficile à percer. Tant que vous possédez votre tête de gemme, vous obtenez une résistance 2 contre les dégâts perforants et une résistance 1 contre les dégâts tranchants. La résistance à chaque type de dégâts s'accroît de 1 au niveau 9 et tous les 4 niveaux par la suite."
                ]
            },
            {
                "name"       : "Hirsute",
                "level"      : "5",
                "traits"     : [
                    "Shisk"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous vous recroquevillez dans une posture qui fait se déployer vos piquants osseux. Vous obtenez un bonus de circonstances de +1 à la CA jusqu'au début de votre prochain tour.",
                    "Effet : Hirsute",
                    "Spécial Si vous avez la réaction Piquants barbelés ou une attaque à mains nues de piquants, chacune obtient un bonus de circonstances de +1 aux jets de dégâts jusqu'au début de votre prochain tour."
                ]
            },
            {
                "name"       : "Plongeur",
                "level"      : "13",
                "traits"     : [
                    "Shisk"
                ],
                "required"   : [
                ],
                "description": [
                    "La vie souterraine vous a enseigné à nager à travers le sol comme à travers l'eau. Vous obtenez une Vitesse de creusement de 3 mètres à travers le sol meuble ou la terre."
                ]
            },
            {
                "name"       : "Déterrer les secrets",
                "level"      : "9",
                "traits"     : [
                    "Shisk"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous êtes un puits sans fond de connaissances et pouvez vous souvenir de plusieurs morceaux d'informations d'un coup. Vous pouvez lancer Hypercognition comme un sort occulte inné une fois par jour."
                ]
            },
            {
                "name"       : "Oreille éidétique",
                "level"      : "1",
                "traits"     : [
                    "Shisk"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous disposez d'une incroyable mémoire des sons. Vous obtenez le don Assurance (Représentation). Su un @Check[flat|dc:8] réussi, vous pouvez vous rappeler avec exactitude d'un son ou d'une bribe de conversation que vous avez entendue au cours de la semaine précédente. Vous mémorisez par cœur plutôt que par contenu et vous ne pouvez pas l'utiliser pour mémoriser des faits, de sorte que cela ne vous donne aucune capacité supplémentaire pour vous Souvenir."
                ]
            },
            {
                "name"       : "Fontaine de secrets",
                "level"      : "17",
                "traits"     : [
                    "Shisk"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par round",
                    "Vous vous souvenez constamment de détails sur le monde. Vous tentez un test de rappel de connaissances. En cas de succès, vous obtenez des informations ou des éléments de contexte supplémentaires. Si vous obtenez un succès critique, vous pouvez, à la discrétion du MJ, obtenir encore plus d'informations ou d'éléments de contexte supplémentaires qu'à l'ordinaire."
                ]
            },
            {
                "name"       : "Habitué à la chaleur",
                "level"      : "5",
                "traits"     : [
                    "Shisk"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous adorez la chaleur extrême. Vous obtenez une résistance au feu 4. Vous traitez les effets environnementaux de chaleur comme s'ils étaient d'un cran moins sévère (la chaleur extraordinaire devient extrême, la chaleur extrême devient importante, etc)."
                ]
            },
            {
                "name"       : "Personne ne doit savoir",
                "level"      : "13",
                "traits"     : [
                    "Shisk"
                ],
                "required"   : [
                ],
                "description": [
                    "Même les moyens magiques ont du mal à vous soutirer des informations. Vous gagnez Voile de confidentialité comme sort occulte inné une fois par jour, qui ne peut être lancé que sur vous-même et qui est automatiquement intensifié à la moitié de votre niveau arrondi au supérieur."
                ]
            },
            {
                "name"       : "Piquants perforants",
                "level"      : "9",
                "traits"     : [
                    "Shisk"
                ],
                "required"   : [
                    "Piquant poignard"
                ],
                "description": [
                    "Vos piquants peuvent s'enfoncer particulièrement profondément dans la chair de vos adversaires. Votre attaque à mains nues de piquants inflige @Damage[1d4[bleed]]{1d4 dégâts de saignement} en cas de coup critique."
                ]
            },
            {
                "name"       : "Projection de piquant",
                "level"      : "9",
                "traits"     : [
                    "Shisk"
                ],
                "required"   : [
                    "quillcoat shisk or quill unarmed attack"
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vous pouvez lancer une salve de piquants sur vos adversaires. Vous projetez des piquants dans un cône de 9 mètres, infligeant @Damage[(ceil(@actor.level/2))d8[piercing]|options:area-damage]{5d8 dégâts perforants}. Chaque créature dans la zone doit faire un jet de @Check[reflex|against:class-spell|basic|options:area-effect] contre le plus élevé entre votre DD de classe ou votre DD de sort. En cas d'échec critique, la créature subit également @Damage[(ceil(@actor.level/2))[bleed]]{5 dégâts de saignement}. Au niveau 11 et à chaque niveau pair suivant, les dégâts perforants augmentent de 1d8 et les dégâts de saignement augmentent de 1.",
                    "Note Le don ne précise par le type de jet de sauvegarde requis. Un jet de Réflexes a été ajouté, comme pour Piquants barbelés."
                ]
            },
            {
                "name"       : "Piquants renouvelés",
                "level"      : "5",
                "traits"     : [
                    "Shisk"
                ],
                "required"   : [
                    "quillcoat shisk heritage"
                ],
                "description": [
                    "Vos piquants repoussent beaucoup plus vite que ceux des autres shisks. Vous pouvez utiliser la réaction Piquants barbelés une fois toutes les 10 minutes."
                ]
            },
            {
                "name"       : "Yeux secrets",
                "level"      : "13",
                "traits"     : [
                    "Shisk"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez invoquer un œil invisible pour vous permettre d'épier les secrets. Une fois par jour, vous pouvez lancer Œil éclaireur comme un sort occulte inné."
                ]
            },
            {
                "name"       : "Connaissance des shisks",
                "level"      : "1",
                "traits"     : [
                    "Shisk"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous amassez les connaissances comme un dragon amasse de l'or. Vous êtes qualifié avec trois compétences de Connaissances de votre choix et vous êtes aussi qualifié en connaissance des shisks."
                ]
            },
            {
                "name"       : "Spéléologue",
                "level"      : "1",
                "traits"     : [
                    "Shisk"
                ],
                "required"   : [
                ],
                "description": [
                    "En vivant sous terre, vous avez appris à trouver votre chemin sans repères ni même terre ferme. Si vous obtenez un succès sur un test de Survie pour vous Orienter ou un test d'Athlétisme pour Escalader, il devient un succès critique. Vous n'êtes pas Pris au dépourvu lorsque vous tentez d'Escalader."
                ]
            },
            {
                "name"       : "Piquant poignard",
                "level"      : "1",
                "traits"     : [
                    "Shisk"
                ],
                "required"   : [
                ],
                "description": [
                    "Les piquants sur vos bras sont particulièrement pointus et robustes. Vous obtenez une attaque à mains nues de piquants qui inflige @Damage[1d6[piercing]]{1d6 dégâts perforants}. Vos piquants font partie du groupe des couteaux et possèdent les traits finesse et à mains nues."
                ]
            },
            {
                "name"       : "Creuser rapidement",
                "level"      : "1",
                "traits"     : [
                    "Manipulation",
                    "Shouni"
                ],
                "required"   : [
                ],
                "description": [
                    "Conditions Vous vous trouvez sur de la terre meuble, du sable, de la neige ou sur des matériaux avec des particules du même ordre.",
                    "Vos mains travaillent aussi efficacement que des pelles lorsque vous creusez un trou rapidement. Vous excavez un puits peu profond dans l'espace que vous occupez actuellement, faisant de cette case un terrain difficile (même pour vous). En outre, vous répandez dans les airs un panache de débris dans une direction de votre choix. Ce panache éteint les petits feux non magiques et non tenus et aide à étouffer les flammes sur les créatures enflammées situées dans le cône. Les créatures dans ce cône qui subissent des dégâts de feu persistants peuvent immédiatement faire un @Check[flat|dc:15] supplémentaire pour mettre un terme aux dégâts persistants."
                ]
            },
            {
                "name"       : "Visiteur estimé",
                "level"      : "1",
                "traits"     : [
                    "Shouni"
                ],
                "required"   : [
                ],
                "description": [
                    "Vos manières policées et votre capacité naturelle à mettre à l'aise les autres vous rendent plus simple de faire tomber les barrières culturelles et gagner la confiance des étrangers. Lorsque vous êtes dans une communauté, lorsque vous obtenez un échec critique sur un test de Diplomatie pour Recueillir des informations ou Faire bonne impression, il devient un échec."
                ]
            },
            {
                "name"       : "Adroit de vos pattes",
                "level"      : "1",
                "traits"     : [
                    "Shouni"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous obtenez un bonus de circonstances de +1 vos tests d'Artisanat pour Réparer les objets non magiques et vous n'avez pas besoin d'avoir à votre disposition un Trousse de réparation pour de telles réparations tant que avez un montant suffisant de morceaux, de pièces ou de débris à votre disposition."
                ]
            },
            {
                "name"       : "Défenseur improvisé",
                "level"      : "1",
                "traits"     : [
                    "Shouni"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous êtes toujours prêt à livrer des combats qui commencent fréquemment au cours de périodes apparemment paisibles.",
                    "Lorsque vous utilisez une arme improvisée ou une arme de mauvaise qualité, vous ne subissez pas la pénalité d'objet de -2 aux jets d'attaque."
                ]
            },
            {
                "name"       : "Combattant improvisé",
                "level"      : "9",
                "traits"     : [
                    "Shouni"
                ],
                "required"   : [
                    "Défenseur improvisé"
                ],
                "description": [
                    "Lorsque vous utilisez une arme improvisée, vous lui appliquez l'effet critique spécialisé du groupe pugilat.",
                    "En fonction de la forme et de la nature de l'arme improvisée, votre MJ pourrait décider qu'un effet critique spécialisé d'un autre groupe est plus approprié."
                ]
            },
            {
                "name"       : "Empathe loyal",
                "level"      : "5",
                "traits"     : [
                    "Shouni"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez une empathie incroyable pour vos amis et votre famille et vous possédez un don inné pour aider ceux qui sont en détresse.",
                    "Vous pouvez utiliser la réaction Aider pour accorder à une autre créature un bonus à un jet de Volonté. Comme d'habitude pour Aider, vous avez besoin de vous préparer en utilisant une action à votre tour pour encourager la créature à bravement surmonter l'effet."
                ]
            },
            {
                "name"       : "Pagayeur accompli",
                "level"      : "5",
                "traits"     : [
                    "Shouni"
                ],
                "required"   : [
                    "paddler shoony"
                ],
                "description": [
                    "Vous êtes particulièrement compétent pour circuler dans les marais et les tourbières, même pour un shouni pagayeur. Vous obtenez une Vitesse de nage de 4,50 mètres."
                ]
            },
            {
                "name"       : "Détaler par dessous",
                "level"      : "1",
                "traits"     : [
                    "Shouni"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous êtes habitué à plonger sous les pieds de vos adversaires et à vous faufiler à votre aise sur le champ de bataille.",
                    "Vous obtenez un bonus de circonstances de +1 aux tests d'Acrobaties pour effectuer un Déplacement acrobatique à travers l'espace occupé par des ennemis de taille Moyenne ou plus grands et la présence d'un ennemi dans une case ne la transforme pas en terrain difficile."
                ]
            },
            {
                "name"       : "Connaissance des shounis",
                "level"      : "1",
                "traits"     : [
                    "Shouni"
                ],
                "required"   : [
                ],
                "description": [
                    "En grandissant dans la société shounie, vous avez appris la valeur de l'honnêteté, de l'amitié et du labeur même durant les temps difficiles. Vous êtes qualifié en Diplomatie et en Survie. Si vous deviez être automatiquement qualifié dans une de ces deux compétences (par votre classe ou votre historique, par exemple), vous devenez qualifié dans une compétence de votre choix. Vous devenez également qualifié en Connaissance des Shounis."
                ]
            },
            {
                "name"       : "Briseur de motte",
                "level"      : "9",
                "traits"     : [
                    "Shouni"
                ],
                "required"   : [
                    "Creuser rapidement"
                ],
                "description": [
                    "Les années passées à creuser le sol ont fait de vous un creuseur expert.",
                    "Vous obtenez une Vitesse de creusement de 3 mètres au travers de la terre meuble ou des sols de même nature."
                ]
            },
            {
                "name"       : "Allié inébranlable",
                "level"      : "13",
                "traits"     : [
                    "Shouni"
                ],
                "required"   : [
                    "Empathe loyal"
                ],
                "description": [
                    "Votre seule présence est suffisante pour fournir à vos alliés un support émotionnel.",
                    "Vous pouvez utiliser la réaction Aider pour accorder un bonus aux tests de Volonté d'une autre créature même si vous ne vous étiez pas préparé à le faire."
                ]
            },
            {
                "name"       : "Cascadeur coriace",
                "level"      : "5",
                "traits"     : [
                    "Shouni"
                ],
                "required"   : [
                    "Détaler par dessous"
                ],
                "description": [
                    "Vous avez subi votre lot de petits coups lorsque vous vous faufiliez sur le champ de bataille et savez comment vous défendre contre les attaquants opportunistes.",
                    "Votre mouvement se termine seulement lorsque vous obtenez un échec critique sur un test d'Acrobaties pour effectuer un test de Déplacement acrobatique au travers de l'espace occupé par un ennemi (ou lorsque votre Vitesse n'est pas suffisante pour passer au travers de son espace).",
                    "Vous déclenchez toujours des réactions sur un échec pour votre Déplacement acrobatique mais vous obtenez un bonus de circonstances de +1 à la CA contre les attaques que vous déclenchez de cette manière."
                ]
            },
            {
                "name"       : "Constructeur sans rival",
                "level"      : "13",
                "traits"     : [
                    "Shouni"
                ],
                "required"   : [
                    "Adroit de vos pattes"
                ],
                "description": [
                    "Construire des choses est comme résoudre un puzzle et vous savez pour cela utiliser tout ce dont vous pouvez disposer pour parvenir au résultat escompté. Vous obtenez Création comme un sort inné primordial au rang 5. Vous devez posséder un Encombrement équivalent pour créer un objet, comme du bois ou des morceaux de métal pour faire une brouette. Vous pouvez lancer ce sort une fois par jour."
                ]
            },
            {
                "name"       : "Dans la vie comme dans la mort",
                "level"      : "1",
                "traits"     : [
                    "Squelette"
                ],
                "required"   : [
                ],
                "description": [
                    "Il vous est difficile de vous raccrocher à des souvenirs précis de votre ancienne vie, mais vous savez des choses sans vous rappeler pourquoi. Vous obtenez le don Ascendance adoptive. Vous pouvez choisir n'importe quelle ascendance, mais il s'agit d'une ascendance qui correspond à la fois à votre héritage de squelette et à qui vous étiez au cours de votre vie. Tant que votre corps est entièrement recouvert d'une armure ou de vêtements, vous n'avez pas besoin de tenter des tests de Duperie contre le DD de Perception d'une créature pour réussir à Vous faire passer pour un membre de cette ascendance. Il s'agit d'un déguisement non-magique qui ne protège pas contre la divination. Ce déguisement n'offre aucun avantage contre une créature qui tente activement un test de Perception contre vous."
                ]
            },
            {
                "name"       : "Projectile d'os",
                "level"      : "9",
                "traits"     : [
                    "Squelette"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez retirer vos côtes pour les utiliser comme des flèches ou des carreaux. Lorsque vous ôtez une côte, vous perdez @Damage[(ternary(gte(@actor.level,19),4,ternary(gte(@actor.level,12),3,2)))[untyped]]{2 Points de vie et le projectile inflige 2 dégâts de vide supplémentaires si vous Frappez avec avant la fin de votre prochain tour. La perte de Points de vie et les dégâts supplémentaires passent tous deux à 3 au niveau 12 et à 4 au niveau 19. Votre cage thoracique se reconstitue magiquement et toute côte que vous tirez tombe en poussière après avoir été utilisée pour une Frappe ou à la fin de votre prochain tour, selon ce qui se produit en premier."
                ]
            },
            {
                "name"       : "Nuée d'os",
                "level"      : "17",
                "traits"     : [
                    "Concentration",
                    "Métamorphose",
                    "Squelette"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vous éparpillez votre corps et vous vous transformez en une tempête tourbillonnante d'ossements pendant 1 minute au maximum ou jusqu'à ce que vous dépensiez une unique action pour retrouver votre forme habituelle. Vous devenez Très grand, obtenez le trait nuée et une Vitesse de vol de 12 m. En tant que nuée, vous avez les statistiques suivantes."
                ]
            },
            {
                "name"       : "Effondrement",
                "level"      : "1",
                "traits"     : [
                    "Squelette"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois toutes les 10 minutes",
                    "Déclencheur La Frappe qu'un ennemi vous porte est un coup critique.",
                    "Vous vous effondrez en un tas d'os, ce qui atténue le pire des dégâts que vous auriez subis et l'attaque déclencheuse n'inflige que le montant qu'elle infligerait en cas de coup critique (généralement la totalité des dégâts au lieu de dégâts doubles). Tous les autres effets causés par un coup critique se produisent quand même. Tant que vous êtes effondré, vous êtes Pris au dépourvu et ne pouvez agir sauf pour vous Relever, ce qui reforme votre squelette en position debout."
                ]
            },
            {
                "name"       : "Héritier nécromantique",
                "level"      : "17",
                "traits"     : [
                    "Squelette"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre affinité pour l'énergie du vide se répand et vous dote d'un puits se remplissant d'essence nécromantique. Une fois par heure, vous pouvez Lancer Mise à mal comme un sort divin inné au rang 6."
                ]
            },
            {
                "name"       : "Vie passée",
                "level"      : "5",
                "traits"     : [
                    "Squelette"
                ],
                "required"   : [
                ],
                "description": [
                    "Des flash de votre vie deviennent plus claires et plus fréquents vous permettant d'appliquer des compétences que vous aviez développées lorsque vous étiez vivant. Vous êtes qualifié en une compétence de votre choix et obtenez le don Connaissance supplémentaire pour une sous-catégorie de connaissance liée à votre vie."
                ]
            },
            {
                "name"       : "Faire le mort",
                "level"      : "1",
                "traits"     : [
                    "Squelette"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous êtes À terre et prétendez être un squelette ordinaire. Tant que vous ne bougez pas et que vous ne faites aucune action nécessitant autre chose que votre esprit, vous semblez mort. Pour découvrir votre ruse, une autre créature doit réussir un test contre votre DD de Duperie, soit en Cherchant, soit en Se souvenant (généralement en utilisant Religion ou une compétence de Connaissance appropriée). Cette capacité ne fonctionne pas contre les créatures qui savent déjà que vous êtes un mort-vivant animé, sauf si vous avez changé d'apparence."
                ]
            },
            {
                "name"       : "Jeton de récupération",
                "level"      : "9",
                "traits"     : [
                    "Peu courant",
                    "Squelette"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous vous liez vous-même à l'Univers en implantant un bout de votre conscience dans une arme, un morceau d'armure ou un autre objet qui vous est précieux. Tant que cet objet est intact, même si votre corps est détruit, vous pouvez être restauré dans l'état exact où vous étiez la dernière fois que vous avez effectué des préparatifs quotidiens avec cet objet en votre possession. L'objet lié à l'âme peut être utilisé comme réceptacle spécial pour Rappel à la vie, Résurrection ou toute autre magie similaire. Cela déforme le sort pour vous ramener dans votre état de mort-vivant squelettique au lieu de vous ramener à la vie. Pharasma ne peut pas vous empêcher de revenir lorsque le sort est modifié de cette façon.",
                    "Lorsque vous revenez, vous perdez définitivement un souvenir qui vous était précieux, en plus de tout autre effet secondaire du sort qui vous a ramené. Votre objet lié à l'âme devient inerte jusqu'à ce que vous passiez une semaine d'intermède pour vous y ancrer à nouveau, fragmentant davantage votre esprit."
                ]
            },
            {
                "name"       : "Résistance du squelette",
                "level"      : "9",
                "traits"     : [
                    "Squelette"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre corps devient résistant, vos os durcis déviant les armes et d'autres sources de dégâts. Vous obtenez une résistance 2 contre les dégâts de froid, d'électricité, de feu, perforant et tranchants. Cette résistance passe à 3 au niveau 13 et à 4 au niveau 17."
                ]
            },
            {
                "name"       : "Transformation du squelette",
                "level"      : "13",
                "traits"     : [
                    "Squelette"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous réarrangez vos os pour adopter une forme bestiale. Une fois par jour, vous pouvez lancer Forme animale comme un sort divin inné. Lorsque vous le lancez, vous choisissez le rang du sort : 3, 4 ou 5. Votre forme de combat ressemble à la version squelettique de l'animal. Sous cette forme, vous conservez les avantages de tous les dons de squelette qui ne nécessitent pas l'utilisation des mains ou la capacité de communiquer."
                ]
            },
            {
                "name"       : "Commandant squelette",
                "level"      : "13",
                "traits"     : [
                    "Peu courant",
                    "Squelette"
                ],
                "required"   : [
                    "expert in Religion"
                ],
                "description": [
                    "Vous obtenez la capacité de conjurer vos propres serviteurs squelettiques. Vous apprenez les rituels de Création de morts-vivants pour créer trois types de morts-vivants pour lesquels vous remplissez les prérequis. Ces morts-vivants doivent avoir le trait squelette ou être d'autres morts-vivants squelettiques que le MJ accepte. Vous ne pouvez pas enseigner ces rituels à quelqu'un d'autre et vous ne pouvez pas participer à l'un ou l'autre des rituels tout en permettant à quelqu'un d'autre de servir de lanceur de sorts principal, à moins qu'il ne connaisse également le rituel.",
                    "Vous obtenez un bonus de circonstances de +2 aux tests de Religion pour les rituels de Création de morts-vivants . Vous pouvez également effectuer le rituel sans l'aide d'un lanceur de sorts secondaire ; dans ce cas, vous effectuez le test secondaire normalement effectué par ce lanceur de sorts."
                ]
            },
            {
                "name"       : "Empathie morte-vivante",
                "level"      : "1",
                "traits"     : [
                    "Squelette"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre relation avec la mort-vivance vous donne un lien plus fort avec les autres morts-vivants. Vous pouvez utiliser Diplomatie pour Faire bonne impression aux morts-vivants dénués d'intelligence ou leur présenter de simples sollicitations. Tant qu'il n'y a pas de créatures vivantes à proximité, ils vous laissent habituellement parler. Si la créature morte-vivante est déjà sous l'emprise d'une créature dont le niveau est supérieur au vôtre, vous devez généralement obtenir un succès critique à votre test de Diplomatie."
                ]
            },
            {
                "name"       : "Bras long",
                "level"      : "5",
                "traits"     : [
                    "Squelette"
                ],
                "required"   : [
                ],
                "description": [
                    "Vos membres détachables vous offrent de la flexibilité. Vous Interagissez pour retirer votre bras pour le manier avec l'autre, augmentant votre allonge de 1,50 mètre pour toute arme à une main tenue avec ce bras. Si votre prochaine action est une Frappe avec cette arme, les créatures qui étaient hors de votre allonge et que vous pouvez maintenant toucher sont Prises au dépourvu contre votre première attaque. vous ne disposez pas d'une main libre lorsque vous tenez votre bras. Vous pouvez Interagir pour rattacher le bras tant que vous le tenez."
                ]
            },
            {
                "name"       : "Le long du fleuve profond",
                "level"      : "17",
                "traits"     : [
                    "Peu courant",
                    "Sprite"
                ],
                "required"   : [
                ],
                "description": [
                    "Accès Originaire du Tian Xia ou vous êtes un fidèle du Sangpotshi.",
                    "Une fois par an, lorsque vous mourrez, vous vous transformez en un boule de lumière immatérielle. Après une semaine, vous revenez à la vie avec les effets d'un succès sur un rituel de Réincarnation de rang 9 (mais pas avec un succès critique). Vous vous réincarnez toujours en un sprite, mais vous vous réincarnez avec un héritage de sprite choisi aléatoirement."
                ]
            },
            {
                "name"       : "Orateur animal",
                "level"      : "5",
                "traits"     : [
                    "Sprite"
                ],
                "required"   : [
                    "ability to communicate with some type of animals (such as bats or arthropods)"
                ],
                "description": [
                    "Vous pouvez parler à tous les animaux, et pas juste à une particulière sous-espèce. Vous obtenez un bonus de circonstances de +1 pour Faire bonne impression sur les animaux (ce qui utilise habituellement la compétence Diplomatie)."
                ]
            },
            {
                "name"       : "Mélodie entraînante",
                "level"      : "5",
                "traits"     : [
                    "Audible",
                    "Concentration",
                    "Émotion",
                    "Mental",
                    "Sprite"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous créez une mélodie si entraînante que vos ennemis ne peuvent s'empêcher de danser tout du long. Faites un test de @Check[performance] contre le DD de Volonté de tous les ennemis dans @Template[emanation|distance:30]{une émanation de 9 mètres}.",
                    "Succès critique La cible subit une pénalité de statut de -3 mètres à sa Vitesse et est Prise au dépourvu, les deux pendant 1 round.",
                    "Succès La cible subit une pénalité de statut de -1,50 mètre à sa Vitesse pendant 1 round.",
                    "Échec critique La cible est temporairement immunisée pendant 1 heure."
                ]
            },
            {
                "name"       : "Sommeil de charme",
                "level"      : "1",
                "traits"     : [
                    "Sprite"
                ],
                "required"   : [
                ],
                "description": [
                    "Lorsque vous dormez, vous vous transformez en un objet inanimé un peu plus petit que le pouce d'un humain. Le sommeil de charme est considéré comme un déguisement pour l'utilisation de Duperie pour Se faire passer pour (sauf que vous Vous faites passer pour un objet au lieu d'une créature), vous donne un bonus de statut de +4 aux tests de Duperie pour empêcher les autres de percer votre déguisement et vous permet d'ajouter votre niveau même si vous êtes inexpérimenté. Durant votre Sommeil de charme, vous pouvez être pris et porté aussi facilement que n'importe quel petit objet. Cet effet prend fin dès que vous vous réveillez."
                ]
            },
            {
                "name"       : "Monture corgi",
                "level"      : "1",
                "traits"     : [
                    "Sprite"
                ],
                "required"   : [
                ],
                "description": [
                    "Les plus petites des fées ont utilisé des corgis comme montures depuis des temps immémoriaux, ce qui a donné lieu à un motif sur le dos des corgis appelé une \"selle de fée\". Vous avez formé un lien magique avec un corgi qui peut vous servir de monture. Votre familier corgi est petit plutôt que Très petit et il est approprié pour que vous l'utilisiez comme monture, contrairement à la plupart des familiers. Il possède la capacité odorat, qui compte dans votre limite du nombre de capacités de familier et de maître comme à l'ordinaire. De plus, il ne peut jamais obtenir une capacité de familier qui vous accorde une Vitesse autre qu'une Vitesse au sol. Si vous êtes un pixie, vous ne pouvez monter un corgi à cause de votre Taille, mais vous pouvez prendre ce don pour avoir un familier corgi."
                ]
            },
            {
                "name"       : "Étincelle élémentaire",
                "level"      : "5",
                "traits"     : [
                    "Peu courant",
                    "Sprite"
                ],
                "required"   : [
                    "Étincelle du sprite"
                ],
                "description": [
                    "Accès Originaire du Tian Xia (mais voir Spécial )",
                    "Vous avez appris à altérer la magie de votre Étincelle du sprite, en lui injectant des énergies élémentaires. La portée de la Frappe à mains nues de votre Étincelle du sprite passe à 9 mètres. Choisissez un des éléments ci-dessous. Votre Étincelle du sprite obtient le trait polyvalent, vous permettant de choisir un type de dégâts différent lorsque vous attaquez avec. Lorsque vous infligez ce type différent de dégât, votre Étincelle du sprite obtient le trait de l'élément.",
                    "Bois Polyvalent vitalité",
                    "Eau Polyvalent C",
                    "Feu Polyvalent feu",
                    "Métal Polyvalent T",
                    "Terre Polyvalent P",
                    "Spécial Si vous êtes un kinétiste, un ensorceleur élémentaire ou avez un héritage descendant de génie autre que suli, vous avez également accès à Étincelle élémentaire, bien que vous deviez prendre l'élément correspondant. Par exemple, un hydrokinétiste devrait avoir accès à l'eau ou un descendant de génie ardande devrait avoir accès au bois."
                ]
            },
            {
                "name"       : "Énergiser les ailes",
                "level"      : "5",
                "traits"     : [
                    "Concentration",
                    "Transformation",
                    "Primordial",
                    "Sprite"
                ],
                "required"   : [
                    "Ailes évanescentes"
                ],
                "description": [
                    "Fréquence Une fois par heure",
                    "Vous ravivez votre magie pour énergiser vos ailes, les transformant temporairement en des formes majestueuses et scintillantes. Pendant 1 minute, vous obtenez une Vitesse de vol de 9 mètres."
                ]
            },
            {
                "name"       : "Ailes évanescentes",
                "level"      : "1",
                "traits"     : [
                    "Sprite"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez fait apparaître des ailes qui peuvent battre pendant un bref instant. Vous Volez. Si vous ne possédez pas normalement une vitesse de vol, vous obtenez une vitesse de vol de 4,50 mètres pour ce déplacement. Si vous n'êtes par sur un sol solide à la fin de ce déplacement, vous chutez."
                ]
            },
            {
                "name"       : "Tours de magie féériques",
                "level"      : "1",
                "traits"     : [
                    "Sprite"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez appris les tours de magie que les sprites ont utilisé depuis des temps immémoriaux. Vous obtenez Lumière et Son imaginaire comme tours de magie innés primordiaux. Si vous avez l'héritage grig, vous obtenez aussi Détection de la magie et si vous avez l'héritage draxie, vous obtenez Prestidigitation."
                ]
            },
            {
                "name"       : "Déguisement de fée",
                "level"      : "5",
                "traits"     : [
                    "Sprite"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez vous déguiser grâce à vos illusions magiques. Vous pouvez lancer Déguisement illusoire une fois par jour comme un sort inné primordial au rang 1. Au niveau 7, le sort est intensifié au rang 2 et tous les 2 niveaux par la suite, le sort est intensifié d'un rang supplémentaire."
                ]
            },
            {
                "name"       : "Magie des fées",
                "level"      : "9",
                "traits"     : [
                    "Sprite"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez utiliser magie féerique pour vous cacher et exposer les ennemis cachés.",
                    "Vous pouvez lancer Lueurs féeriques et Invisibilité une fois par jour chacun comme des sorts innés primordiaux."
                ]
            },
            {
                "name"       : "Peau de fée",
                "level"      : "13",
                "traits"     : [
                    "Sprite"
                ],
                "required"   : [
                ],
                "description": [
                    "Alors que vous êtes plus susceptible au fer froid que la plupart des Sans ailes, vous avez aussi une incroyable résilience et un plus profond lien avec les énergies guérisseuses du Premier monde. Augmentez votre maximum de Points de vie d'un montant égal à votre niveau.",
                    "Si vous vous reposez pendant 10 minutes, une lumière brillante du Premier monde s'écoule dans votre forme à partir de vos ailes (ou de l'endroit où vos ailes devraient se situer), vous permettant de regagner @Damage[(@actor.level)[healing]]{un nombre de Points de vie égal à votre niveau} ; cela est cumulable avec tout Point de vie que vous regagnez grâce à l'aide de la capacité Soigner les blessures.",
                    "Quoi qu'il en soit, vous obtenez une faiblesse 5 au fer froid."
                ]
            },
            {
                "name"       : "Ailes du héros",
                "level"      : "9",
                "traits"     : [
                    "Sprite"
                ],
                "required"   : [
                    "Énergiser les ailes"
                ],
                "description": [
                    "Vos ailes ont atteint leur forme majestueuse totale, vous accordant le pouvoir illimité de voler. Vous obtenez une Vitesse de vol de 7,50 mètres. De plus, les sprites vous reconnaissent comme un puissant héros (ou méchant) par vos ailes uniques et sont impressionnés de manière appropriée. Vous obtenez un bonus de circonstances de +2 à tous les tests de Diplomatie et d'Intimidation contre les sprites et obtenez les avantages du don de compétence de Cordialité forcée contre les autres sprites, sans subir la pénalité de -5 au test de Diplomatie."
                ]
            },
            {
                "name"       : "Mystificateur invisible",
                "level"      : "13",
                "traits"     : [
                    "Sprite"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez appris comment devenir invisible et à le rester. Vous pouvez lancer Invisibilité au rang 4 comme un sort inné primordial une fois par heure."
                ]
            },
            {
                "name"       : "Parler avec les chauves-souris",
                "level"      : "1",
                "traits"     : [
                    "Sprite"
                ],
                "required"   : [
                    "nyktera heritage"
                ],
                "description": [
                    "Vous pouvez poser des questions, recevoir des réponses et utiliser la compétence Diplomatie avec les chauves-souris. Vous obtenez un bonus de circonstances de +2 à tous les tests de Diplomatie pour Faire bonne impression sur les chauves-souris ou Solliciter les chauves-souris."
                ]
            },
            {
                "name"       : "Parler avec les dormants",
                "level"      : "5",
                "traits"     : [
                    "Peu courant",
                    "Sprite"
                ],
                "required"   : [
                ],
                "description": [
                    "Accès originaire du Tian Xia",
                    "Vous pouvez parler à tous les objets inanimés et aux esprits qui sommeillent en eux. Une fois par jour, vous pouvez parler à un objet et lui poser une question pour obtenir les effets de Lecture d'objet, bien que l'objet vous donne sa réponse 1 minute plus tard (dans la mesure où il faut du temps pour que l'esprit dans l'objet se réveille). La capacité d'un objet à répondre est limitée par sa nature particulière. Une paire de chaussures pourrait savoir où son propriétaire a marché alors qu'une maison connaît l'histoire des habitants à l'intérieur, mais pas ce qu'ils font ailleurs."
                ]
            },
            {
                "name"       : "Étincelle du sprite",
                "level"      : "1",
                "traits"     : [
                    "Sprite"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez lancer une parcelle de votre magie sur vos ennemis. Vous obtenez une attaque à mains nues à distance dans le groupe d'arme des frondes avec une portée maximale de 6 mètres qui inflige 1d4 dégâts (aucun modificateur d'attribut n'est ajouté aux dégâts). Le nom et le type de dégâts de l'attaque à mains nues dépend de votre héritage, indiqué ci-dessous. La plupart des héritages de sprites qui ne sont pas décrits dans cette liste utilisent également étincelle lumineuse. Comme les autres attaques à mains nues, vous pouvez améliorer cette attaque avec des Bandelettes de coups puissants.",
                    "Dijiang impulsion primordiale (spirituel)",
                    "Draxie étincelle euphorique (mental)",
                    "Luciole étincelle lumineuse (feu)",
                    "Gandharva chanson céleste (son)",
                    "Grig note discordante (son)",
                    "Kanchil trait déroutant (mental)",
                    "Leungli éclaboussure soudaine (contondant)",
                    "Mélixie tir de dard (poison)",
                    "Nyctère pulsion ultrasonique (son)",
                    "Pixie poussière de pixie (mental)"
                ]
            },
            {
                "name"       : "Transformation ancestrale",
                "level"      : "13",
                "traits"     : [
                    "Strix"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez communier avec les esprits ancestraux pour prendre la forme d'un énorme strix primitif. Vous pouvez lancer Forme aérienne au rang 5 comme un sort inné primordial une fois par jour mais vous prenez la forme d'un strix primitif, en utilisant les statistiques de la forme de l'oiseau."
                ]
            },
            {
                "name"       : "Cape emplumée",
                "level"      : "5",
                "traits"     : [
                    "Strix"
                ],
                "required"   : [
                ],
                "description": [
                    "Pour vous fondre avec les habitants du sol et les sans aile, vous pliez vos ailes dans votre dos, créant l'illusion d'une cape emplumée.",
                    "Vous recevez un bonus de circonstances de +2 aux tests de Duperie pour Vous Vous faire passer pour une version de vous-même qui n'est pas un strix.",
                    "De plus, vos ailes pliées vous aident à cacher les objets sur votre personne, fournissant un bonus de circonstances de +2 aux tests de Discrétion pour Dissimuler un objet."
                ]
            },
            {
                "name"       : "Bourrasque féroce",
                "level"      : "9",
                "traits"     : [
                    "Air",
                    "Concentration",
                    "Manipulation",
                    "Strix"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois toutes les 10 minutes",
                    "Avec de lourds battements d'ailes, vous soulevez une bourrasque furieuse directement sur vos adversaires. Cette explosion d'air possède les effets de Bourrasque de vent avec un jet de @Check[fortitude|against:class-spell|traits:air]{DD de vigueur} égal au plus élevé entre votre DD de classe ou votre DD de sort."
                ]
            },
            {
                "name"       : "Vol de l'oiselet",
                "level"      : "1",
                "traits"     : [
                    "Strix"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par round",
                    "Vous pouvez voler à travers les airs par petits sauts de la moitié de votre Vitesse au sol. Si vous ne terminez pas votre déplacement sur un sol solide, vous chutez à la fin de votre tour."
                ]
            },
            {
                "name"       : "Volant pleinement",
                "level"      : "9",
                "traits"     : [
                    "Strix"
                ],
                "required"   : [
                    "Vol juvénile"
                ],
                "description": [
                    "Vous pouvez prendre votre envol à tout moment. Vous obtenez une vitesse de vol de 7,50 mètres."
                ]
            },
            {
                "name"       : "Vol juvénile",
                "level"      : "5",
                "traits"     : [
                    "Strix"
                ],
                "required"   : [
                    "Vol de l'oiselet"
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vous déployez vos ailes pour le voyage et pouvez les garder dépliées pendant 10 minutes. Vous obtenez une Vitesse de vol égale à votre Vitesse au sol tant que vos ailes sont déployées. Si vous possédez Vol de l'oiselet, vous obtenez un bonus de statut de +3 mètres à votre Vitesse de vol avec Vol juvénile. Comme à l'ordinaire, comme votre Vitesse de vol est dérivée de votre Vitesse au sol, ce bonus de statut n'est pas cumulable avec un bonus de statut à votre Vitesse au sol, si vous en avez un."
                ]
            },
            {
                "name"       : "Arts rokoans",
                "level"      : "9",
                "traits"     : [
                    "Strix"
                ],
                "required"   : [
                ],
                "description": [
                    "Les esprits ancestraux ont commencé à se lier à vous, vous accordant les pouvoirs caractéristiques d'une rokoa. Vous pouvez lancer Communication avec les animaux et Rapport comme des sorts innés primordiaux une fois par jour chacun."
                ]
            },
            {
                "name"       : "Charmeur d'histoire",
                "level"      : "1",
                "traits"     : [
                    "Strix"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous êtes un tisseur d'histoires talentueux et vous utilisez votre voix efficacement. Vous êtes qualifié en Représentation. Si vous deviez déjà être qualifié automatiquement en Représentation, vous devenez qualifié en une compétence de votre choix. Vous obtenez aussi le don de compétence Représentation Impressionnante et obtenez un bonus de circonstances de +1 lorsque vous vous Produisez pour un public de Strix."
                ]
            },
            {
                "name"       : "Défenseur strix",
                "level"      : "1",
                "traits"     : [
                    "Strix"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre ancienne querelle avec les humains vous donne l'expérience de vous battre avec des adversaires vicieux et votre vengeance ne connaît pas de limites. Vous obtenez un bonus de circonstances de +1 aux tests d'Intimidation, de Perception et de Survie contre les humains, ainsi qu'aux jets de dégâts contre les humains avec les armes et les attaques à mains nues. Quoi qu'il en soit, votre haine des humains est tout de suite évidente, vous donnant une pénalité de circonstances de -2 aux tests de Diplomatie contre eux et fait que leur attitude de départ est dégradée d'un cran à votre égard."
                ]
            },
            {
                "name"       : "Connaissance des strix",
                "level"      : "1",
                "traits"     : [
                    "Strix"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous êtes en parfaite connexion avec votre tribu et entretenez peut-être même des relations avec d'autres communautés strix, au sein desquelles vous avez pu vous familiariser avec la terre et les techniques de déplacement élégantes. Vous êtes qualifié en Acrobaties et en Nature. Si vous êtes déjà automatiquement qualifié dans l'une de ces compétences (grâce à votre historique ou à votre classe, par exemple), vous devenez alors qualifié dans une compétence de votre choix. Vous devenez également qualifié en Connaissance des Strix."
                ]
            },
            {
                "name"       : "Vengeance strix",
                "level"      : "5",
                "traits"     : [
                    "Émotion",
                    "Mental",
                    "Strix"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois toutes les 10 minutes",
                    "Déclencheur Vous ou un allié strix que vous pouvez voir subissez des dégâts sur un coup critique d'un ennemi.",
                    "Vous vous consacrez à détruire ceux qui ont blessé les vôtres. Jusqu'à la fin de votre prochain tour, vous infligez 1d6 dégâts supplémentaires sur les Frappes contre l'ennemi déclencheur. Le bonus passe à 2d6 si vous utilisez une arme ou une attaque à mains nues de frappe et à 3d6 si vous utilisez une attaque avec une arme ou une attaque à mains nues de frappe majeure ."
                ]
            },
            {
                "name"       : "Voix projetée",
                "level"      : "5",
                "traits"     : [
                    "Strix"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez appris à projeter votre voix à travers les vents, abusant les autres quant à votre emplacement. Vous pouvez lancer Ventriloquie comme un sort primordial inné une fois par jour. Si vous êtes un strix oiseau-chanteur, vous pouvez le lancer deux fois par jour à la place."
                ]
            },
            {
                "name"       : "Pas ailé",
                "level"      : "9",
                "traits"     : [
                    "Strix"
                ],
                "required"   : [
                ],
                "description": [
                    "D'un vif battement d'ailes, vous restez léger sur vos pieds lorsque vous vous déplacez. Vous Faites un pas de 1,50 mètre deux fois."
                ]
            },
            {
                "name"       : "Piste chimique",
                "level"      : "5",
                "traits"     : [
                    "Exploration",
                    "Surki"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez laisser une faible piste chimique lorsque vous vous déplacez et pouvez utiliser les pistes chimiques des autres surkis pour naviguer. Vous obtenez un bonus de circonstances de +1 à tous les tests et jets de sauvegarde pour vous Orienter ou vous réorienter."
                ]
            },
            {
                "name"       : "Consommer la magie",
                "level"      : "9",
                "traits"     : [
                    "Surki"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par heure",
                    "Déclencheur Vous tentez un jet de sauvegarde contre un effet de zone de la tradition correspondant à votre capacité magiphage.",
                    "Vous consommez la magie du sort ou de l'effet qui arrive pour protéger vos alliés, bien que cela puisse vous donner une indigestion. Tentez un test de contre contre l'effet déclencheur. Votre rang de contre est égal à la moitié de votre niveau (arrondi au supérieur) et pour le jet, utilisez soit le DD de classe - 10 ou votre modificateur d'attribut d'incantation plus votre bonus de maîtrise d'incantation. Si vous contrer l'effet déclencheur, vous mettez un terme à l'effet pour toutes les autres créatures dans la zone, mais vous êtes Nauséeux 1 lorsque votre corps lutte pour absorber l'afflux de magie."
                ]
            },
            {
                "name"       : "Fouisseur de génération",
                "level"      : "13",
                "traits"     : [
                    "Surki"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous êtes tellement doué pour creuser la terre que vous n'avez même pas besoin d'outils. En fait, vous pourriez bien être chargé de diriger le creusement de la dernière génération. Vous obtenez une vitesse de creusement de 4,50 mètres."
                ]
            },
            {
                "name"       : "Grande métamorphose",
                "level"      : "9",
                "traits"     : [
                    "Surki"
                ],
                "required"   : [
                ],
                "description": [
                    "Un de vos nodules s'est adaptée en un nouvel organe émettant de la magie. Vous obtenez une des évolutions de votre héritage surki. Si vous possédez plusieurs héritages, vous en choisissez un pour le faire évoluer.",
                    "Spécial Vous pouvez prendre ce don plusieurs fois, obtenant une nouvelle évolution à chaque fois. L'évolution peut être celle d'un héritage que vous avez déjà fait évoluer ou une différente."
                ]
            },
            {
                "name"       : "Magitaxe",
                "level"      : "13",
                "traits"     : [
                    "Surki"
                ],
                "required"   : [
                    "Perception de la magie vestigielle"
                ],
                "description": [
                    "Déclencheur Une créature que vous pourriez avoir dans votre allonge en utilisant une action Marcher rapidement Lance un sort de la tradition correspondant à votre capacité magiphage.",
                    "Vous vous déplacez par réflexe vers la source de magie que vous avez le plus consommé en tant que larve. Vous Marchez rapidement et vous devez terminer votre déplacement adjacent à la créature déclencheuse. Vous ne pouvez pas alors utiliser Magitaxe contre la créature déclencheuse pendant 24 heures le temps que vos réflexes se déshabituent, bien que vous puissiez l'utiliser contre d'autres créatures.",
                    "Vous pouvez utiliser Magitaxe lorsque vous Creusez, Grimpez, Nagez ou Volez si vous possédez le type de déplacement correspondant à la place de Marcher rapidement (en changeant le déclencheur en conséquence)."
                ]
            },
            {
                "name"       : "Guérison nodulaire",
                "level"      : "9",
                "traits"     : [
                    "Surki"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez induire la réparation de vos blessures en faisant circuler la magie à travers votre corps. Si vous vous reposez pendant 10 minutes, vous récupérez un nombre de Points de vie égal à votre @Damage[(@actor.system.abilities.con.mod * floor(@actor.level/2))[healing]]{Modificateur de Constitution × la moitié de votre niveau}. C'est un effet de guérison magique et c'est cumulable avec tout soin que vous recevez par le biais de Soigner les blessures."
                ]
            },
            {
                "name"       : "Régénération nodulaire",
                "level"      : "17",
                "traits"     : [
                    "Surki"
                ],
                "required"   : [
                    "Guérison nodulaire"
                ],
                "description": [
                    "Votre corps traite la magie de manière si efficace que vous pouvez induire une véritable régénération, en remplaçant des membres et en restaurant des organes. Vous pouvez lancer Régénération une fois par jour en tant que sort inné. Au lieu d'être désactivée par l'acide ou le feu, votre régénération du sort est désactivée par le froid qui ralentit votre métabolisme. Vous ne pouvez que vous cibler vous-même, mais vous pouvez Lancer le sort par une réaction si vous êtes réduit à 0 Point de vie par un effet qui n'est pas de froid."
                ]
            },
            {
                "name"       : "Adaptation secondaire",
                "level"      : "5",
                "traits"     : [
                    "Surki"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez continué à vous adapter aux rigueurs de votre environnement en poursuivant votre métamorphose, même en tant qu'adulte. Choisissez un héritage surki que vous ne possédez pas déjà. Vous obtenez cet héritage et ses avantages."
                ]
            },
            {
                "name"       : "Sort séquestré",
                "level"      : "1",
                "traits"     : [
                    "Surki"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez tant consommé d'un certain type de magie lorsque vous étiez une larve que vous pouvez désormais le lancer de manière purement instinctive. Choisissez un tour de magie de la liste de sort de votre capacité magiphage. Vous pouvez lancer ce tour de magie comme un sort de magie inné à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur."
                ]
            },
            {
                "name"       : "Orateur du minuscule",
                "level"      : "1",
                "traits"     : [
                    "Surki"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous comprenez les langues de la plupart des petits insectes et pouvez leur parler. Vous pouvez poser des questions, recevoir des réponse et utiliser Diplomatie avec les insectes, les arthropodes et les invertébrés terrestres. Le MJ détermine quelles sont les créatures qui comptent pour cette capacité."
                ]
            },
            {
                "name"       : "Connaissance des surkis",
                "level"      : "1",
                "traits"     : [
                    "Surki"
                ],
                "required"   : [
                ],
                "description": [
                    "Que ce soit par les récits des anciens de votre colonie ou par les messages envoyés par ceux qui ont supervisé les creusements de votre génération, vous détenez le savoir de nombreux surkis qui vous ont précédés. Vous êtes qualifié en Survie et dans la compétence associée avec la tradition magique de votre capacité magiphage (Arcanes pour arcanique, Nature pour primordiale, Occultisme pour occulte ou Religion pour divine). Si vous êtes automatiquement qualifié dans une de ces compétences (par votre historique ou votre classe, par exemple), vous êtes à la place qualifié dans une compétence de votre choix.",
                    "Vous obtenez aussi le don général Connaissance supplémentaire en Connaissance des surkis."
                ]
            },
            {
                "name"       : "Familiarité avec les armes des surkis",
                "level"      : "1",
                "traits"     : [
                    "Surki"
                ],
                "required"   : [
                ],
                "description": [
                    "Les armes des surkis favorisent les aspects utilitaires et pratiques plutôt que la grâce et la brutalité. Vous possédez une familiarité avec les faucilles, les faux, les marteaux légers, les pics de guerre et une arme courant supplémentaire de votre choix parmi le groupe des haches ou des marteaux. Pour les besoins de la maîtrise, vous considérez n'importe laquelle de ces armes de guerre comme une arme simple et n'importe laquelle de ces armes évoluées comme une arme de guerre.",
                    "Au niveau 5, lorsque vous obtenez un coup critique avec une de ces armes, vous bénéficiez de son effet critique spécialisé."
                ]
            },
            {
                "name"       : "Rouler dans le tunnel",
                "level"      : "5",
                "traits"     : [
                    "Déplacement",
                    "Surki"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez plus facilement naviguer dans les tunnels souterrains en vous roulant en boule. Vous vous roulez en boule et vous vous déplacez jusqu'à quatre fois votre Vitesse en ligne droite en descendant une pente. Si vous atteignez le bas d'une pente ou touchez un obstacle au cours de ce premier tour de déplacement, vous arrêtez de rouler. Autrement, vous continuez automatiquement à rouler à cette Vitesse au cours des tours suivants jusqu'à ce que vous touchiez le bas de la pente ou si un obstacle met un terme à ce déplacement (ce qui peut se produire au milieu de votre tour). Vous êtes Ralenti 2 chaque tour après le premier au cours duquel vous continuez à rouler. Si vous rencontrez un obstacle lors d'un tour après le premier, vous et l'obstacle subissez tous les deux @Damage[4d6[bludgeoning]]{4d6 dégâts contondants} et vous cessez de rouler."
                ]
            },
            {
                "name"       : "Pluripotentiel illimité",
                "level"      : "17",
                "traits"     : [
                    "Surki"
                ],
                "required"   : [
                ],
                "description": [
                    "Tous les surkis possèdent la capacité d'être ce qu'ils ont besoin d'être et vous pouvez puiser dans cette capacité dès maintenant. Lorsque vous dormez, vous pouvez choisir d'entrer dans un état de chrysalide. Vous dormez si profondément dans votre chrysalide que vous ne pouvez pas être éveillé par des bruits forts autour de vous et vous perdez les avantages de l'un de vos héritages surkis au cours de la nuit. Lorsque vous émergez et faites vos préparatifs quotidiens, vous pouvez choisir un héritage surki différent pour le remplacer. Si vous aviez une ou plusieurs évolutions de cet héritage, vous pouvez choisir une évolution différente pour votre nouvel héritage."
                ]
            },
            {
                "name"       : "Perception de la magie vestigielle",
                "level"      : "1",
                "traits"     : [
                    "Surki"
                ],
                "required"   : [
                ],
                "description": [
                    "Alors que la capacité de plupart des surkis de goûter la magie s'efface une fois qu'ils se métamorphosent en leur forme adulte — remplacée par une vision dans le noir plus affûtée — vous avez retenu une partie de cette perception. Vous obtenez Perception de la magie en tant que sens vague avec une portée de 9 mètres — comme tous les sens vagues, il n'est aussi précis que le sens de l'odorat d'un humain, ce qui vous permet généralement que vous ne pouvez prédire que si de la magie est présente. Quoi qu'il en soit, chaque tradition magique possède à vos yeux un goût différent, ce qui vous permet d'identifier la tradition de la magie présente."
                ]
            },
            {
                "name"       : "Forme combinée",
                "level"      : "13",
                "traits"     : [
                    "Métamorphose",
                    "Tanuki"
                ],
                "required"   : [
                ],
                "description": [
                    "Déclencheur Un allié dans les 9 mètres utilise un effet de métamorphose.",
                    "La coopération et la coordination sont les secrets de la survie au sein de la société des tanukis. Lorsque l'allié déclencheur se transforme, vous Marchez rapidement dans son espace et joignez votre forme à la sienne, vous fondant dans leur transformation. Lorsque vous êtes ainsi fondu, vous lui apportez les effets d'un sort d'Agrandissement de rang 2 ou 4 ainsi qu'un nombre de Points de vie temporaires égal à votre niveau. Si son effet de métamorphose devrait normalement lui conférer des Points de vie temporaires, vous augmentez ce nombre de votre niveau à la place. Lorsque vous êtes fondu, vous ne pouvez pas être séparément ciblé et vous ne pouvez pas agir sauf pour parler ou utiliser Changer de forme pour sortir de la Forme combinée, ce qui met un terme aux effets d' Agrandissement sur votre allié et lui retire tout point de vie temporaire restant de cette capacité à ce moment. Si l'allié déclencheur devient Inconscient ou que l'effet de métamorphose déclencheur se termine, vous sortez automatiquement de Forme combinée."
                ]
            },
            {
                "name"       : "Forme du quotidien",
                "level"      : "1",
                "traits"     : [
                    "Tanuki"
                ],
                "required"   : [
                ],
                "description": [
                    "Il n'y a rien de mieux que d'être un tanuki, mais quelques fois, vous avez besoin d'une forme moins remarquable lorsque vous vous aventurez dans la grande ville ou dans d'autres lieux bondés. Lorsque vous Changez de forme, vous pouvez adopter la forme d'un humanoïde courant de taille Petite ou Moyenne de l'ascendance prévalente où vous avez grandi, typiquement un humain. Cette forme du quotidien est une forme spécifique du même âge et avec un type de corps similaire à votre forme de tanuki véritable et possède approximativement des traits physiques analogues, comme la couleur des cheveux."
                ]
            },
            {
                "name"       : "Forme de faux prêtre",
                "level"      : "5",
                "traits"     : [
                    "Tanuki"
                ],
                "required"   : [
                    "Forme du quotidien"
                ],
                "description": [
                    "Personne ne respecte le tanuki, mais presque tout le monde révère un prêtre estimé. Suoi de mieux que de prendre cette forme si vous voulez que ce soit un peu plus facile ? Lorsque vous Changez de forme, vous pouvez prendre la forme d'un prêtre ou d'un autre officiel religieux d'une religion de votre choix. Lorsque vous êtes sous votre forme de faux prêtre, vous pouvez tenter des tests de Duperie pour [[/act recall-knowledge skill=deception]]{Vous souvenir} à propos de Religion et vous pouvez lancer Lance divine et Hymne obsédant comme des tours de magie primordiaux innés. Si vous obtenez un échec critique sur un test de Duperie sous votre forme de faux prêtre, votre transformation est brisée, vous faisant revenir à votre forme de tanuki et vous êtes si embarrassé que vous ne pouvez reprendre votre Forme de faux prêtre jusqu'à vos prochains préparatifs quotidiens, après avoir passé une nuit pour dormir là dessus."
                ]
            },
            {
                "name"       : "Célébration hâtive",
                "level"      : "5",
                "traits"     : [
                    "Émotion",
                    "Tanuki",
                    "Visuel"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par heure",
                    "Déclencheur Vous obtenez un succès critique sur un jet d'attaque contre un ennemi ou un ennemi obtient un échec critique sur un jet de sauvegarde contre l'un de vos effets.",
                    "Même après le plus petit succès, vous êtes pris par l'instant et commencez à faire la fête, encourageant vos alliés à aller de l'avant. Vous accordez à tous vos alliés dans les 18 mètres un bonus de circonstances de +2 aux jets d'attaque et de dégâts jusqu'à la fin de votre prochain tour. Malheureusement, lorsque vous chantez et dansez, vous ne prêtez pas attention à votre environnement comme vous le devriez, vous rendant Pris au dépourvu contre tous les ennemis jusqu'à la fin de votre prochain tour également.",
                    "Effet : Célébration hâtive"
                ]
            },
            {
                "name"       : "Bide en fer",
                "level"      : "1",
                "traits"     : [
                    "Tanuki"
                ],
                "required"   : [
                ],
                "description": [
                    "Un bon rire vient du ventre, et en riant tous les jours, le vôtre est devenu très fort. Vous disposez d'une Frappe à mains nues au corps-à-corps de bide, qui inflige 1d6 dégâts contondants, fait partie du groupe pugilat et possède le trait percutant.",
                    "Spécial Il n'est jamais trop tard pour apprendre à rire, de sorte que vous pouvez choisir ce don à n'importe quel niveau et utiliser le réapprentissage pour ce don."
                ]
            },
            {
                "name"       : "Forme de paysage",
                "level"      : "17",
                "traits"     : [
                    "Tanuki"
                ],
                "required"   : [
                ],
                "description": [
                    "Alors qu'on descend la route sous la lumière de la lune, on pourrait être étonné de trouver une boutique ou une colline qui n'était pas là auparavant. En réalité, c'est un tanuki au sommet de sa puissance.Lorsque vous Changez de forme, vous pouvez vous transformer en un bâtiment ou une caractéristique de terrain de 15 mètres de hauteur et de 15 mètres de côté au maximum. Des caractéristiques ordinaires de votre Forme de paysage fonctionnent de manière habituelle. Par exemple,si vous vous transformez en source chaude, la source chaude contient une eau chaude relaxante et si vous vous transformez en une auberge, l'auberge contient des chambres, des lits et une nourriture délicieuse, même si aucun aspect de votre Forme de paysage ne peut être un danger actif qui peut provoquer des dégâts ou imposer des états et tout objet créé au sein de votre Forme de paysage se transforme en feuilles s'il est emporté à l'extérieur. Vous pouvez parler lorsque vous êtes sous votre Forme de paysage, mais vous ne pouvez attaquer, lancer des sorts ou vous déplacer. Vous pouvez rester sous votre Forme de paysage jusqu'à 8 heures et lorsque vous sortez de votre Forme de paysage, elle se dissout autour de quiconque était à l'intérieur d'elle."
                ]
            },
            {
                "name"       : "Transformation foliaire",
                "level"      : "5",
                "traits"     : [
                    "Peu courant",
                    "Illusion",
                    "Tanuki"
                ],
                "required"   : [
                ],
                "description": [
                    "Certains disent que c'est grâce à votre perspicacité ou à votre jovialité, mais vous savez que c'est parce que vous pouvez réduire les coûts en transformant des feuilles en argent. Vous pouvez utiliser Duperie pour Gagner de l'argent et vous obtenez un bonus de statut de +1 à votre test si vous le faites. Mais l'illusion ne dure pas longtemps ! Le MJ lance un d20 en secret, pour déterminer le nombre d'heures qu'il faut, après avoir terminé votre test, pour que les billets ne se transforment de nouveau, entraînant probablement des conséquences en fonction de la distance qu'ils ont parcourue après leur transformation."
                ]
            },
            {
                "name"       : "Nombreux visages",
                "level"      : "9",
                "traits"     : [
                    "Tanuki"
                ],
                "required"   : [
                    "Forme du quotidien"
                ],
                "description": [
                    "Fréquence Trois fois par jour",
                    "Revêtir un nouveau visage vous permet d'avoir à peu de frais une perspective nouvelle sur la vie. Lorsque vous Changez de forme avec votre forme du quotidien, vous obtenez les effets de Déguisement illusoire au rang 3 pendant 1 heure ou jusqu'à ce que vous vous transformiez de nouveau, selon ce qui se produit en premier, sauf que c'est un effet de métamorphose au lieu d'une illusion. Quoi qu'il en soit, vos transformations peuvent être interrompus sur un choc important. Si vous obtenez l'état Effrayé ou Étourdi alors que vous êtes transformé, votre transformation s'achève, vous ramenant à votre forme de tanuki et votre confiance est tellement secouée que vous ne pouvez tenter de reprendre ce déguisement spécifique de nouveau avant vos prochains préparatifs quotidiens."
                ]
            },
            {
                "name"       : "Passage du bateau de boue",
                "level"      : "9",
                "traits"     : [
                    "Primordial",
                    "Tanuki"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous créez instinctivement des bateaux magiques qui vous permettent de garder les pieds au sec (la plupart du temps). Vous pouvez marcher à la surface de l'eau et d'autres liquides non dangereux, en vous déplaçant à la moitié de votre vitesse, le temps qu'un bateau magique se forme en dessous de vos pieds pour vous porter. Par malchance, ce bateau magique est fait de boue, de sorte que vous ne pouvez pas aller très loin. Si vous terminez votre tour sans atteindre un sol solide, le bateau se dissout et vous coulez."
                ]
            },
            {
                "name"       : "Orchestre ectoplasmique",
                "level"      : "9",
                "traits"     : [
                    "Tanuki"
                ],
                "required"   : [
                ],
                "description": [
                    "Une manière facile de tromper autrui consiste à faire émerger votre voix d'une forêt ou de buissons à proximité pour émettre d'étranges bruits. Vous pouvez lancer Ventriloquie au rang 2 comme un sort primordial inné une fois par jour. Vous pouvez aussi lancer le tour de magie Fantasme comme un sort primordial inné à volonté, intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur."
                ]
            },
            {
                "name"       : "Ponpoko",
                "level"      : "5",
                "traits"     : [
                    "Tanuki"
                ],
                "required"   : [
                ],
                "description": [
                    "Aucun véritable tanuki ne se ferait jamais prendre sans un instrument de musique pour jouer sous la pleine lune. Vous pouvez tenter des tests de Représentation et lancer des sorts en tapant sur votre ventre. Ceci nécessite que vous disposiez d'au moins une main libre et comme jouer d'un instrument, cela accorde l'action Se produire avec les traits audible et manipulation. Lorsque vous Lancez un sort, vos gestes peuvent inclure de tambouriner sur votre ventre. Si vous le faites, toute tentative pour Reconnaître un sort lancé de cette manière se fait avec une pénalité de circonstances de -2."
                ]
            },
            {
                "name"       : "Ponpoko-pon !",
                "level"      : "13",
                "traits"     : [
                    "Primordial",
                    "Son",
                    "Tanuki"
                ],
                "required"   : [
                    "Ponpoko"
                ],
                "description": [
                    "Que ce soit parce que vous jouez de façon particulièrement vigoureuse ou parce que vous jouez tout simplement faux, la musique de votre tambourinement sur le ventre peut blesser physiquement vos adversaires. Vous infligez @Damage[(ceil(@actor.level/2))d4[sonic]|options:area-damage]{7d4 dégâts de son} à toutes les créatures dans un @Template[type:cone|distance:30]{cône de 9 mètres}, avec un jet de @Check[fortitude|against:class-spell|basic] égal au plus élevé entre votre DD de classe ou votre DD de sort. Un tambourinement aussi vigoureux rend votre ventre un peu endolori, ce qui vous empêche d'utiliser cette capacité de nouveau avec [[/r 1d4 #rounds]]{1d4 rounds}.",
                    "Au niveau 15 et tous les 2 niveaux par la suite, les dégâts augmentent de 1d4."
                ]
            },
            {
                "name"       : "Forme de bouteille blanche qui roule",
                "level"      : "9",
                "traits"     : [
                    "Tanuki"
                ],
                "required"   : [
                    "Forme de bouilloire"
                ],
                "description": [
                    "Déclencheur Vous vous Jetez à terre ou êtes À terre.",
                    "Lorsque vous tombez au sol, vous vous transformez en une bouteille blanche, une gourde ou une jarre de saké, puis roulez avant que quiconque ne puisse vous ramasser. Vous Rampez jusqu'à deux fois et votre déplacement ne provoque pas de réactions. Vous semblez à chaque fois rouler juste hors de portée. Lorsque vous vous arrêtez, vous reprenez votre forme de tanuki, votre visage tourné vers le sol."
                ]
            },
            {
                "name"       : "Brûlé sur la montagne crépitante",
                "level"      : "1",
                "traits"     : [
                    "Tanuki"
                ],
                "required"   : [
                ],
                "description": [
                    "En marquant rituellement votre fourrure avec du feu, comme un tanuki de triste renommée, vous vous protégez contre les flammes à venir. Vous gagnez une bande noire le long de votre dos qui semble carbonisée. Votre test nu pour récupérer des dégâts de feu persistant est un DD 10 au lieu d'un DD 15, qui peut être réduit à un DD 5 avec une aide appropriée. Chaque jour, la première fois que vous devriez être réduit à 0 Point de vie par un effet de feu, vous évitez d'être assommée et restez à 1 Point de vie et votre état Blessé augmente de 1. Deux poils retirés de votre queue peuvent être utilisé comme de l'amorce et de l'acier pour créer un feu, en émettant un étrange son crépitant lorsqu'elle s'allume."
                ]
            },
            {
                "name"       : "Illusion splendide",
                "level"      : "13",
                "traits"     : [
                    "Tanuki"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous recouvrez votre environnement dans un imaginaire extravagant. Vous pouvez lancer Scène illusoire au rang 6 comme un sort primordial inné une fois par jour."
                ]
            },
            {
                "name"       : "Début du festival !",
                "level"      : "17",
                "traits"     : [
                    "Tanuki"
                ],
                "required"   : [
                ],
                "description": [
                    "Aucune distance ne peut empêcher un tanuki de venir participer à une bonne fête. Vous sifflez et pointes votre doigt et 808 tanukis, sous leur forme de chien viverrin, apparaissent de nulle part du terrain environnant et emplissent une @Template[type:burst|distance:30]{explosion de 9 mètres} dans un rayon de 36 mètres. Les tanukis se déplacent sur le sol, sautent dans les airs et grimpent sur les murs et les surfaces, infligeant @Damage[6d8[bludgeoning]|options:area-damage]{6d8 dégâts contondants} à tous les ennemis dans la zone comme s'ils avaient été piétinés et qu'on leur avait dansé dessus. Les tanukis continuent à faire la fête dans la zone pendant la minute suivante, infligeant @Damage[3d8[bludgeoning]|options:area-damage]{3d8 dégâts contondants} à tout ennemi qui termine son tour dans la zone et transforment la zone en un terrain difficile (bien que les tanukis vous permettent ainsi qu'à vos alliés de passer normalement). Les créatures sous forme de chien viverrin peuvent tenter de se Cacher au sein de la masse des tanukis. Après 1 minute, les tanukis applaudissent 30 fois et foncent à la prochaine fête. Vous pouvez Révoquer l'effet, bien que si vous le faites, les tanukis grommellent parce que la fête se termine prématurément."
                ]
            },
            {
                "name"       : "Forme de statue",
                "level"      : "5",
                "traits"     : [
                    "Tanuki"
                ],
                "required"   : [
                    "Forme de bouilloire"
                ],
                "description": [
                    "Une statue qui passe inaperçue en face d'une boutique est la forme parfaite pour attendre que les choses se tassent. Lorsque vous Changez de forme, vous pouvez prendre la forme d'une statue, d'une enseigne ou d'un autre objet lourd jusqu'à une taille Très grande. Utiliser Forme de statue est considéré comme revêtir un déguisement pour l'utilisation de Duperie pour Vous faire passer pour, sauf que vous vous Vous Faites passer pour un objet au lieu d'une créature, ce qui vous donne un bonus de statut de +4 aux tests de Duperie pour empêcher autrui de percer votre déguisement et vous ajoutez votre niveau même si vous n'êtes pas qualifié. Votre poids augmente pour correspondre à celui de l'objet pour lequel vous Vous faites passer pour lorsque vous êtes sous forme de statue, vous permettant d'utiliser votre DD de sort ou votre DD de classe, s'ils sont plus élevés, à la place du DD adapté pour résister à un déplacement forcé (habituellement la Vigueur). Vous pouvez parler lorsque vous êtes sous votre forme de statue, mais vous ne pouvez pas attaquer, lancer des sorts ou vous déplacer."
                ]
            },
            {
                "name"       : "Connaissance des tanukis",
                "level"      : "1",
                "traits"     : [
                    "Tanuki"
                ],
                "required"   : [
                ],
                "description": [
                    "Les tanukis aiment jouer deux choses : les farces et la musique. Vous êtes qualifié en Duperie et en Intimidation. Si vous devriez automatiquement être qualifié en l'une de ces compétences (par votre historique ou votre classe, par exemple), vous êtes qualifié dans une compétence de votre choix.",
                    "Vous obtenez aussi le don général Connaissance supplémentaire en Connaissance des tanukis."
                ]
            },
            {
                "name"       : "Forme de bouilloire",
                "level"      : "1",
                "traits"     : [
                    "Tanuki"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre capacité à changer de forme est suffisamment avancée pour prendre des formes qui ne sont pas celles de créatures, mais aussi des objets. Lorsque vous Changez de forme, vous pouvez prendre celle d'un simple outil ou d'un objet d'1 Encombrement ou moins, tels qu'une théière ou un parapluie. Lorsque vous êtes transformé en un objet, vous pouvez fonctionner comme cet objet pour que les alliés puissent l'utiliser. Par exemple, vous pouvez vous transformez en un pied de biche de manière à aider un allié à ouvrir une caisse à l'aide d'un levier. Vous pouvez parler sous forme d'objet, mais vous ne pouvez attaquer, lancer des sorts ou vous déplacer sauf pour Ramper (habituellement en bondissant ou en vous laissant tomber sur le sol d'une manière indigne)."
                ]
            },
            {
                "name"       : "Vision de la canopée",
                "level"      : "1",
                "traits"     : [
                    "Vanara"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez voir tout aussi bien même dans les jungles denses que seule une petite quantité de lumière parvient à traverser. Vous obtenez la vision nocturne."
                ]
            },
            {
                "name"       : "Queue de grimpeur",
                "level"      : "1",
                "traits"     : [
                    "Vanara"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre queue vous permet de grimper plus facilement. Vous obtenez un bonus de circonstances de +2 aux tests d'Athlétisme pour Escalader, vous obtenez le don de compétence Combattant-grimpeur et vous réduisez le nombre de mains libres nécessaires pour Escalader ou pour faire un Croc-en-jambe de une."
                ]
            },
            {
                "name"       : "Suspendre (Vanara)",
                "level"      : "9",
                "traits"     : [
                    "Déplacement",
                    "Vanara"
                ],
                "required"   : [
                    "Queue de grimpeur"
                ],
                "description": [
                    "Vous pouvez vous suspendre par la queue à n'importe quel point d'ancrage approprié, comme une branche d'arbre, un balcon ou un affleurement rocheux (à la discrétion du MJ), généralement pendant que vous escaladez. Lorsque vous êtes suspendu, vous avez l'usage libre de tous vos autres membres, ce qui vous permet d'effectuer des tâches qui nécessitent les deux mains, comme tirer à l'arc ou de balancer un bô. Vous pouvez Relâcher votre queue pour vous laisser tomber et vous cessez de vous suspendre si vous effectuez une action avec le trait de déplacement."
                ]
            },
            {
                "name"       : "Singe fuyant",
                "level"      : "5",
                "traits"     : [
                    "Vanara"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez une conscience accrue en combat et vos frappes fuyantes empêchent vos ennemis de vous distraire ou de briser votre concentration. Lorsque vous touchez une créature de votre niveau ou inférieur alors que celle-ci vous prend en tenaille, la prise en tenaille ne vous rend pas Pris au dépourvu face à cette créature. Cet avantage dure jusqu'au début de votre prochain tour ou jusqu'à ce que la créature se déplace, selon ce qui se produit en premier. La créature peut toujours aider ses autres alliés à vous prendre en tenaille."
                ]
            },
            {
                "name"       : "Coureur de la jungle",
                "level"      : "5",
                "traits"     : [
                    "Vanara"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous courez à travers la jungle aussi facilement que si c'était une plaine vide. Vous ignorez le terrain difficile créé par les sous-bois dans les forêts et les jungles. Vous pouvez toujours utiliser l'action Mise à l'abri lorsque vous êtes dans la jungle ou la forêt pour vous mettre à l'abri, même si vous n'êtes pas adjacent à un obstacle derrière lequel vous pourriez vous mettre à l'abri."
                ]
            },
            {
                "name"       : "Taille légendaire",
                "level"      : "9",
                "traits"     : [
                    "Vanara"
                ],
                "required"   : [
                ],
                "description": [
                    "Les vanaras d'autrefois étaient des filous capables de traverser de larges fleuves ou de se glisser dans des espaces incroyablement petits. Vous pouvez lancer Agrandissement et Rétrécissement une fois par jour chacun comme des Sorts innés divins au rang 2. Vous ne pouvez que vous cibler ou d'autres vanaras avec ces sorts."
                ]
            },
            {
                "name"       : "Esprits simiesques",
                "level"      : "13",
                "traits"     : [
                    "Vanara"
                ],
                "required"   : [
                ],
                "description": [
                    "Les vanaras considèrent généralement que les esprits des singes défunts sont moins instructifs ou intéressants que leurs propres ancêtres voyageant dans les cycles de l'existence mais ces esprits peuvent se révéler utiles lorsque la situation est grave. Vous pouvez lancer Singes fous une fois par jour comme un sort inné primordial au rang 5. Vous êtes un expert en DD de sorts et en jets d'attaque de sorts. Si vous choisissez cambriolage manifeste pour cette incantation de Singes fous , vous pouvez faire en sorte que les singes utilisent votre modificateur de Vol à la place de votre DD de sort -10."
                ]
            },
            {
                "name"       : "Danse de Ragdya",
                "level"      : "9",
                "traits"     : [
                    "Vanara"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par heure",
                    "Déclencheur Une créature observé adjacente réussit un jet d'attaque contre vous.",
                    "Même face à un danger mortel, vous vous battez avec le rire ravageur du Ragdya au cœur et pouvez jouer des tours impossibles. Après avoir résolu l'attaque réussie, la créature déclencheuse doit tenter un jet de @Check[will|against:class-spell] contre le plus élevé entre votre DD de classe ou votre DD de sort. En cas d'échec, vous et la créature déclencheuse échangez vos places. Vous et la créature déclencheuse devez chacun pouvoir tenir dans le nouvel espace et vos positions doivent être inoccupées."
                ]
            },
            {
                "name"       : "Rivalité de Radgya",
                "level"      : "5",
                "traits"     : [
                    "Vanara"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Une créature qui vous est adjacente et que vous pouvez voir obtient un échec sur son jet d'attaque contre vous.",
                    "Vous vous écartez de l'attaque de votre adversaire avec un rire désinvolte, profitant de l'ouverture pour commettre un méfait. Vous tentez de Voler un objet à la créature déclencheuse, ignorant la restriction habituelle selon laquelle la créature ne peut pas être en combat."
                ]
            },
            {
                "name"       : "Rakshasa ravageur",
                "level"      : "9",
                "traits"     : [
                    "Vanara"
                ],
                "required"   : [
                    "expert in Occultism"
                ],
                "description": [
                    "Votre famille et vous connaissez bien les ravages des prédations des rakshasas et vous savez comment vous défendre au mieux contre leur corruption croissante sur le monde. Vous obtenez un bonus de circonstances de +1 aux jets de sauvegarde contre les sorts occultes."
                ]
            },
            {
                "name"       : "Grimpeur compétent",
                "level"      : "5",
                "traits"     : [
                    "Vanara"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez grimper ou descendre des surfaces aussi agilement qu'un singe. Vous obtenez une Vitesse d'escalade de 3 mètres. Si vous possédez le don d'ascendance Queue de grimpeur, votre Vitesse d'escalade totale passe à votre Vitesse terrestre lorsque vous grimpez aux arbres."
                ]
            },
            {
                "name"       : "Pleine conscience soudaine",
                "level"      : "1",
                "traits"     : [
                    "Vanara"
                ],
                "required"   : [
                ],
                "description": [
                    "Déclencheur Vous obtenez un succès sur un jet de sauvegarde contre un effet qui devrait vous rendre Fasciné ou Ébloui.",
                    "Votre esprit conserve sa pleine conscience malgré toutes les tentatives des autres et votre concentration déséquilibre les autres. Vous obtenez un succès critique au jet de sauvegarde déclencheur et si l'effet déclencheur a été causé par une créature, celle-ci est Prise au dépourvu à votre encontre jusqu'à la fin de votre prochain tour."
                ]
            },
            {
                "name"       : "Arrachage avec la queue",
                "level"      : "5",
                "traits"     : [
                    "Vanara"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez donner un coup de fouet avec votre queue pour arracher des objets à l'emprise de l'imprudent. Vous tentez de Désarmer une créature, en ignorant la condition selon laquelle vous devez avoir au moins une main libre. Comme à l'ordinaire, votre queue ne peut tenir les objets qu'elle parvient à désarmer."
                ]
            },
            {
                "name"       : "Liberté sans limite",
                "level"      : "13",
                "traits"     : [
                    "Vanara"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre avenir ne dépend que de vous et les cycles de votre destinée interviennent parfois pour vous protéger lorsque ce contrôle vous est retiré. Chaque fois que vous devriez gagner l'état Contrôlé, vous pouvez tenter un @Check[flat|dc:17]. En cas de succès, vous n'obtenez pas cet état."
                ]
            },
            {
                "name"       : "Farceur affranchi",
                "level"      : "17",
                "traits"     : [
                    "Vanara"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez élever tout le monde autour de vous avec vos farces, ce qui fait que vous et vos alliés recevez une assistance divine dans tous vos déplacements pour éviter sans effort les obstacles environnementaux. Une fois par jour, vous pouvez lancer Meute sans entrave comme un sort divin inné. Lorsque vous le faites, vous Lancez le sort en accomplissant une farce divinement inspirée."
                ]
            },
            {
                "name"       : "Clarté de combat vanara",
                "level"      : "13",
                "traits"     : [
                    "Vanara"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre concentration au combat est pratiquement infaillible. Lorsque vous pouvez agir, vous n'êtes pas Pris au dépourvu contre des créatures Cachées, Non détectées ou qui vous prennent en tenaille et qui possèdent votre niveau ou un niveau inférieur ou par les créatures de votre niveau ou inférieur utilisant Attaque surprise."
                ]
            },
            {
                "name"       : "Connaissance des vanaras",
                "level"      : "1",
                "traits"     : [
                    "Vanara"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez atteint la formation culturelle d'un ba-sadhak, un chercheur de trésors et de délices rares. Vous êtes qualifié en Survie et Vol. Si vous devriez être qualifié dans l'une de ces compétences (par votre historique ou votre classe, par exemple), vous êtes qualifié en une autre compétence de votre choix à la place. Vous êtes également qualifié en Connaissance des vanaras."
                ]
            },
            {
                "name"       : "Expertise avec les armes des vanaras",
                "level"      : "13",
                "traits"     : [
                    "Vanara"
                ],
                "required"   : [
                    "Familiarité avec les armes vanaras"
                ],
                "description": [
                    "Grâce aux exercices de pratiques nombreux et joyeux, vous devenez expert dans le maniement des armes des vanaras. Lorsque vous obtenez une capacité de classe qui vous octroie expertise ou expertise améliorée dans une arme ou des rames, vous obtenez également ce degré de maîtrise avec le bô, le chakram, le katar, le panabas, l'urumi et toutes les armes vanara dans lesquelles vous êtes qualifié."
                ]
            },
            {
                "name"       : "Familiarité avec les armes vanaras",
                "level"      : "1",
                "traits"     : [
                    "Vanara"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous favorisez les armes enracinées dans la tradition vanara. Vous obtenez l'accès et êtes qualifié avec le bô, le chakram, le katar, le panabas et l'urumi. De plus, vous obtenez l'accès à toutes les armes peu courantes des vanaras. Pour déterminer votre maîtrise, les armes de guerre vanaras sont des armes simples et les armes évoluées sont considérées comme des armes de guerre."
                ]
            },
            {
                "name"       : "Ruse avec les armes des vanaras",
                "level"      : "5",
                "traits"     : [
                    "Vanara"
                ],
                "required"   : [
                    "Familiarité avec les armes vanaras"
                ],
                "description": [
                    "Vous avez appris à tromper vos ennemis en utilisant des armes vanara. Chaque fois que vous infligez un coup critique en utilisant un bô, un chakram, un katar, un panabas, un urumi ou une arme vanara, vous appliquez l'effet critique spécialisé de l'arme."
                ]
            },
            {
                "name"       : "Blanchecape",
                "level"      : "1",
                "traits"     : [
                    "Vanara"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous êtes plus petit et plus large que beaucoup de vanaras de votre héritage et les cheveux sur vos épaules et votre tête sont particulièrement épais et luxuriants, formant comme une cape majestueuse. Ces cheveux repoussent avec une rapidité surnaturelle s'ils sont tondus. Vous obtenez le don de compétence Équilibre stable, même si vous n'êtes pas qualifié en Acrobaties et vous pouvez Faire un pas sur un terrain difficile provoqué par un sol inégal.",
                    "Spécial Vous ne pouvez prendre ce don qu'au niveau 1 et vous ne pouvez pas utiliser le réapprentissage pour perdre ou gagner ce don."
                ]
            },
            {
                "name"       : "Yeux d'albâtre",
                "level"      : "1",
                "traits"     : [
                    "Vishkanya"
                ],
                "required"   : [
                ],
                "description": [
                    "À la place des yeux dorés normaux des vishkanyas, vous êtes né avec des yeux blancs comme la neige, particulièrement perspicaces. Vous obtenez vision dans le noir.",
                    "Spécial Vous ne pouvez prendre ce don qu'au niveau 1 et vous ne pouvez pas utiliser le réapprentissage pour perdre ou gagner ce don."
                ]
            },
            {
                "name"       : "Représentation séduisante",
                "level"      : "9",
                "traits"     : [
                    "Mise hors de combat",
                    "Mental",
                    "Vishkanya",
                    "Visuel"
                ],
                "required"   : [
                    "trained in Performance"
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vous attirez l'attention de ceux qui vous entourent avec une démonstration élégante. Faites un test de @Check[performance] et vous le comparez au DD de Volonté de chaque créature dans une @Template[emanation|distance:15]{émanation de 4,50 mètres}.",
                    "Succès critique La cible est Fascinée par vous tant que vous poursuivez votre Représentation (à moins qu'elle ne fasse cesser la fascination, comme à l'ordinaire pour cet état) et elle est Éblouie pendant 1 round ou tant qu'elle reste Fascinée, en fonction de ce qui dure le plus longtemps.",
                    "Succès La cible est Fascinée soit 1 round et est éblouie pendant 1 round.",
                    "Échec La cible est Éblouie pendant 1 round.",
                    "Échec critique La cible n'est pas affectée."
                ]
            },
            {
                "name"       : "Venin débilitant",
                "level"      : "5",
                "traits"     : [
                    "Vishkanya"
                ],
                "required"   : [
                    "Envenom"
                ],
                "description": [
                    "Votre venin est particulièrement puissant affectant ses cibles de différentes manières. Lorsque vous obtenez ce don, choisissez l'un des effets débilitants suivants. Lorsque vous utilisez Envenimer, vous pouvez choisir d'appliquer un effet débilitant à votre venin pour en modifier les effets. Les modifications apportées à chaque stade du venin sont listées. Vous ne pouvez appliquer qu'un seul effet débilitant à votre venin.",
                    "Stade 1 pénalité de -1,50 mètre à la Vitesse",
                    "Stade 2 pénalité de -1,50 mètre à la Vitesse",
                    "Stade 3 pénalité de -3 mètres à la Vitesse",
                    "Stade 1 aucun ajustement",
                    "Stade 2 Pris au dépourvu",
                    "Stade 3 Pris au dépourvu et pénalité de -1,50 mètre à la Vitesse",
                    "Spécial Vous pouvez choisir ce don une seconde fois pour obtenir l'autre effet débilitant."
                ]
            },
            {
                "name"       : "Amélioration du venin supérieure",
                "level"      : "17",
                "traits"     : [
                    "Vishkanya"
                ],
                "required"   : [
                    "Amélioration du venin modérée"
                ],
                "description": [
                    "Vous améliorez le venin vishkanyen que vous pouvez appliquer avec Envenimer au venin vishkanyen supérieur. La fréquence d'Envenimer devient une fois par minute.",
                    "Venin vishkanyen supérieur (niveau 17)",
                    "Fréquence Une fois par minute",
                    "Jet de sauvegarde @Check[fortitude|against:class-spell] contre le plus élevé entre votre DD de classe ou votre DD de sort",
                    "Durée maximale 6 rounds",
                    "Stade 1 @Damage[7d6[poison]]{7d6 dégâts de poison} (1 round)",
                    "Stade 2 @Damage[9d6[poison]]{9d6 dégâts de poison} (1 round)",
                    "Stade 3 @Damage[11d6[poison]]{11d6 dégâts de poison} (1 round)"
                ]
            },
            {
                "name"       : "Amélioration du venin inférieure",
                "level"      : "1",
                "traits"     : [
                    "Vishkanya"
                ],
                "required"   : [
                    "Envenom"
                ],
                "description": [
                    "Votre venin devient plus mortel et plus abondant. Vous améliorez le venin vishkanyen que vous pouvez appliquer avec Envenimer pour le transformer en venin vishkanyen inférieur. La fréquence d'Envenimer passe à une fois par heure.",
                    "Venin vishkanyen inférieur (niveau 1)",
                    "Jet de sauvegarde @Check[fortitude|against:class-spell|traits:poison] égal au plus élevé entre votre DD de classe ou de sort",
                    "Durée maximale 6 rounds",
                    "Stade 1 @Damage[1d6[poison]]{1d6 dégâts de poison} (1 round)",
                    "Stade 2 @Damage[1d6[poison]]{1d6 dégâts de poison} (1 round)",
                    "Stade 3 @Damage[1d6[poison]]{2d6 dégâts de poison} (1 round)"
                ]
            },
            {
                "name"       : "Amélioration du venin modérée",
                "level"      : "9",
                "traits"     : [
                    "Vishkanya"
                ],
                "required"   : [
                    "Amélioration du venin inférieure"
                ],
                "description": [
                    "Vous améliorez le venin vishkanyen que vous pouvez appliquer avec Envenimer au venin vishkanyen modéré. La fréquence d'Envenimer passe désormais à une fois toutes les 10 minutes.",
                    "Venin vishkanyen modéré (niveau 9)",
                    "Fréquence Une fois toutes les 10 minutes",
                    "Jet de sauvegarde @Check[fortitude|against:class-spell] contre le plus élevé entre votre DD de classe ou de sort",
                    "Durée maximale 6 rounds",
                    "Stade 1 @Damage[3d6[poison]]{3d6 dégâts de poison} (1 round)",
                    "Stade 2 @Damage[4d6[poison]]{4d6 dégâts de poison} (1 round)",
                    "Stade 3 @Damage[5d6[poison]]{5d6 dégâts de poison} (1 round)"
                ]
            },
            {
                "name"       : "Sang récupérateur",
                "level"      : "5",
                "traits"     : [
                    "Vishkanya"
                ],
                "required"   : [
                    "Envenom"
                ],
                "description": [
                    "Votre corps peut produire une alternative à votre venin qui guérit les blessures. Vous pouvez utiliser votre action Envenimer pour produire un reconstituant sanguin au lieu du venin vishkanyen. Vous pouvez fabriquer un reconstituant sanguin au maximum une fois toutes les 10 minutes, même si votre action Envenimer peut être utilisée plus fréquemment. Vous ou une créature adjacente pouvez interagir pour consommer le reconstituant afin de regagner @Damage[(ternary(gte(@actor.level,15),5,3))d6[vitality,healing]|shortLabel]{3d6 Points de vie}. Il s'agit d'un effet de guérison de vitalité. Un reconstituant se gâte au début de votre prochain tour. Lorsque vous atteignez le niveau 15, le reconstituant permet de récupérer 5d6 Points de vie à la place."
                ]
            },
            {
                "name"       : "Camouflage social",
                "level"      : "1",
                "traits"     : [
                    "Vishkanya"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez l'étrange capacité de vous fondre rapidement dans le mode de vie de la communauté dans laquelle vous vous trouvez. Après avoir résidé dans une communauté particulière pendant au moins 1 jour, vous obtenez un bonus de circonstances de +1 aux tests pour Vous faire passer pour un habitant de cette communauté. De plus, vous pouvez utiliser Duperie à la place de Diplomatie pour recueillir des informations lorsque vous êtes dans cette communauté. Le MJ peut décider que vous avez besoin de plus de temps dans les communautés particulièrement importantes pour obtenir ces avantage, ou peut décider que vous n'obtenez ces avantages que dans un quartier ou une partie spécifique de la colonie."
                ]
            },
            {
                "name"       : "Venin débilitant plus puissant",
                "level"      : "13",
                "traits"     : [
                    "Vishkanya"
                ],
                "required"   : [
                    "Venin débilitant",
                    "Amélioration du venin modérée"
                ],
                "description": [
                    "Ajoutez un des effets débilitants suivants que vous pouvez utiliser lorsque vous Envenimez. Ces effets débilitants réduisent les dégâts de tous les stades comme indiqué.",
                    "Stade 1 pas d'effet",
                    "Stade 2 Maladroit 1",
                    "Stade 3 Maladroit 2",
                    "Stade 1 pas d'effet",
                    "Stade 2 Drainé 1",
                    "Stade 3 Drainé 2",
                    "Stade 1 pas d'effet",
                    "Stade 2 Nauséeux 1",
                    "Stade 3 Nauséeux 2",
                    "Stade 1 Affaibli 1",
                    "Stade 2 Affaibli 1",
                    "Stade 3 Affaibli 2",
                    "Spécial Vous pouvez choisir de don à plusieurs reprises, en choisissant un effet débilitant à chaque fois."
                ]
            },
            {
                "name"       : "Application rapide",
                "level"      : "9",
                "traits"     : [
                    "Vishkanya"
                ],
                "required"   : [
                    "Envenom"
                ],
                "description": [
                    "Vous combinez de manière experte les mouvement consistant à attaquer et à enduire votre arme de venin. Vous Envenimer une arme ou une munition puis Frappez avec cette arme. Cela compte dans vos utilisations d'Envenimer comme à l'ordinaire et cela ne peut être utilisé si vous avez épuisé votre venin."
                ]
            },
            {
                "name"       : "Purge venin",
                "level"      : "13",
                "traits"     : [
                    "Vishkanya"
                ],
                "required"   : [
                    "trained in Medicine"
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vous produisez un venin spécialisé qui brûle les autres toxines et impuretés de votre corps. Pour chaque maladie ou poison qui vous affecte actuellement, Faites un test de Médecine pour contrer cette maladie ou ce poison. Comme à l'ordinaire, votre rang de contre est égal à la moitié de votre niveau arrondi au supérieur."
                ]
            },
            {
                "name"       : "Venin vicieux",
                "level"      : "17",
                "traits"     : [
                    "Vishkanya"
                ],
                "required"   : [
                    "Envenom"
                ],
                "description": [
                    "Le venin que vous produisez est exceptionnellement puissant et difficile à surmonter. Votre venin vishkanyen obtient le trait virulent, nécessitant deux jets de sauvegarde consécutifs pour réduire le stade du venin de 1. Un succès critique réduit le stade de votre venin de 1 au lieu de 2."
                ]
            },
            {
                "name"       : "Frappe de la vipère",
                "level"      : "9",
                "traits"     : [
                    "Vishkanya"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par minute",
                    "Vous vous déplacez et attaquez avec une rapidité que la plupart ne peuvent suivre. Vous Marchez rapidement, puis vous Frappez. Votre mouvement ne déclenche pas de réaction basées sur le déplacement."
                ]
            },
            {
                "name"       : "Connaissance des vishkanyas",
                "level"      : "1",
                "traits"     : [
                    "Vishkanya"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous comprenez pleinement les forces des vishkanya et leurs traditions culturelles. vous êtes qualifié en Représentation et en Discrétion. Si vous devriez déjà être qualifié dans l'une de ces compétences (du fait de votre historique ou de votre classe par exemple), vous devenez qualifié dans une compétence de votre choix. Vous êtes aussi qualifié en Connaissance des vishkanyas."
                ]
            },
            {
                "name"       : "Arts des armes des vishkanyas",
                "level"      : "5",
                "traits"     : [
                    "Vishkanya"
                ],
                "required"   : [
                    "Familiarité avec les armes vishkanyas"
                ],
                "description": [
                    "Vous êtes gracieux et efficace dans l'utilisation des armes des vishkanyas. Chaque fois que vous obtenez un coup critique en utilisant une sarbacane, un éventail de combat, un kris, un kukri, un shuriken ou une arme vishkanya, vous appliquez l'effet critique spécialisé de l'arme."
                ]
            },
            {
                "name"       : "Expertise avec les armes des vishkanyas",
                "level"      : "13",
                "traits"     : [
                    "Vishkanya"
                ],
                "required"   : [
                    "Familiarité avec les armes vishkanyas"
                ],
                "description": [
                    "Un entraînement intensif vous a conféré une maîtrise élégante dans l'utilisation des armes vishkanyennes. Lorsque vous obtenez une capacité de classe qui vous confère un rang d'expert ou supérieure dans le maniement d'une ou de plusieurs armes données, vous obtenez également ce degré de maîtrise avec l'éventail de combat, le kris, le kukri, le shuriken, la sarbacane et toutes les armes vishkanyennes avec lesquelles vous êtes qualifié."
                ]
            },
            {
                "name"       : "Familiarité avec les armes vishkanyas",
                "level"      : "1",
                "traits"     : [
                    "Vishkanya"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous privilégiez les armes historiquement utilisées pour les tâches subtiles et lors des cérémonies. Vous avez accès et êtes qualifié avec la sarbacane, l'éventail de combat, le kris, le kukri et avec le shuriken. De plus, vous avez accès à toutes les armes des vishkanyas peu courantes. Pour les besoins de déterminer votre maîtrise, les armes de guerre des vishkanyas sont des armes simples et les armes évoluées des vishkanyas sont des armes de guerre."
                ]
            },
            {
                "name"       : "Égide de la dissolution",
                "level"      : "1",
                "traits"     : [
                    "Wayang"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous êtes un ami des ombres et savez comment éviter les problèmes qu'elles amènent. Vous obtenez un bonus de circonstances de +1 aux jets de sauvegarde contre les effets avec les traits ténèbres et ombre."
                ]
            },
            {
                "name"       : "Allié de dalang",
                "level"      : "13",
                "traits"     : [
                    "Occulte",
                    "Ombre",
                    "Wayang"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous déplacez votre ombre comme le ferait un maître marionnettiste, lui permettant de danser autour de votre ennemis et de vous servir au cours du combat. Jusqu'au début de votre prochain tour, votre ombre dans autour de vos ennemis, vous fournissant une tenaille contre tous les ennemis dans votre allonge. Prendre en tenaille avec votre ombre revient à prendre en tenaille avec un allié et est sujet aux effets tels que ceux de vision panoramique ou la capacité de classe Refus d'avantage."
                ]
            },
            {
                "name"       : "Danse du bouffon",
                "level"      : "13",
                "traits"     : [
                    "Wayang"
                ],
                "required"   : [
                ],
                "description": [
                    "Grâce à votre incroyable talent de danseur, vous pouvez incarner le personnage du Bouffon, capable de prendre le contrôle des ombres des autres acteurs de la pièce (pour votre plus grand amusement). Faites un test de @Check[performance|against:fortitude] contre le DD de Vigueur d'un unique ennemi dans les 9 mètres.",
                    "Succès critique Votre ombre et celle de l'adversaire se synchronisent, obligeant votre cible à entreprendre vos déplacements pas pour pas. Vous accomplissez deux des actions suivantes : vous Mettre à terre, Lâcher un objet, Vous relever, Faire un pas ou Marcher rapidement. Vous devez accomplir deux actions différentes. Votre adversaire doit également faire ces actions, en se déplaçant dans la même direction que vous (par exemple, si vous Marchez rapidement vers le nord, votre adversaire doit faire de même) ou Lâchez un objet lorsque vous le faites. La cible est temporairement immunisée à votre Danse du bouffon pendant 1 journée.",
                    "Succès Comme en cas de succès critique mais vous ne pouvez entreprendre qu'une seule action et non deux, avant que votre cible ne devienne temporairement immunisée contre votre danse et vous ne pouvez déplacer la cible au sein d'un terrain dangereux."
                ]
            },
            {
                "name"       : "Danse du chevrotain",
                "level"      : "1",
                "traits"     : [
                    "Illusion",
                    "Occulte",
                    "Ombre",
                    "Visuel",
                    "Wayang"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous bougez votre corps d'une manière qui évoque la petite et intelligente sœur chevrotain, détournant les ennemis et remplissant leur vision d'ombres derrière lesquelles se cacher. Faites un test de @Check[performance|against:perception] contre le DD de Perception d'un unique ennemi dans un rayon de 9 mètres. Ce test possède tous les traits et restrictions habituelles d'un test de Représentation. Si vous êtes expert en Représentation, vous pouvez affecter jusqu'à deux cibles à portée, quatre si vous êtes maître et huit si vous êtes légendaire.",
                    "Succès critique Des ombres imaginaires se dressent dans le champ de vision de la cible, vous cachant des regards. Vous bénéficiez d'un abri supérieur contre cet ennemi, ce qui vous donne un bonus de circonstances de +4 à la CA et aux tests de Discrétion pour Vous cacher, Être furtif ou éviter d'être repéré de toute autre manière. Comme les ombres sont illusoires, vous ne bénéficiez pas du bonus habituel aux jets de Réflexes procuré par un abri supérieur. Ces avantages durent jusqu'au début de votre prochain tour ou jusqu'à ce que vous quittiez votre espace actuel, utilisiez une action d'attaque ou deveniez Inconscient, selon ce qui se produit en premier.",
                    "Succès Comme en cas de succès critique, sauf que vous obtenez un abri standard (avec un bonus de circonstances de +2 à la place).",
                    "Échec critique L'adversaire saisit les mouvements de votre danse et devient temporairement immunisé contre Danse du chevrotain pendant 1 jour."
                ]
            },
            {
                "name"       : "Danse du tigre",
                "level"      : "9",
                "traits"     : [
                    "Émotion",
                    "Terreur",
                    "Mental",
                    "Occulte",
                    "Wayang"
                ],
                "required"   : [
                ],
                "description": [
                    "La légende raconte qu'un tigre traqua un chevrotain pendant des jours, en restant caché et en instillant l'effroi à sa proie. Votre danse incarne le rôle du personnage si bien que vous pouvez pister un adversaire à partir de sa seule ombre. Faites un test de @Check[performance|against:will] contre le DD de Volonté d'un unique ennemi adjacent.",
                    "Critical Success You step on the foe's shadow, bringing a cold dread. The opponent is Frightened 2; its shadow remains pinned underfoot, stretching and deforming to remain connected to your square, and indicates where it has gone even if you lose sight of the foe. The creature can't reduce its frightened condition below 1 as long as you remain on its shadow. Your connection to its shadow breaks if the distance between you and the target exceeds 120 feet or if you don't end your turn adjacent to the target. Once your connection to its shadow breaks, the enemy is immune to Dance of the Tiger for 1 hour.",
                    "Success As critical success, except the creature is only Frightened 1 and your connection to its shadow breaks at 60 feet instead of 120."
                ]
            },
            {
                "name"       : "Clarté de la Dissolution",
                "level"      : "5",
                "traits"     : [
                    "Wayang"
                ],
                "required"   : [
                    "focus pool"
                ],
                "description": [
                    "Conditions Vous êtes dans une zone de ténèbres.",
                    "La Dissolution enseigne que les ténèbres peuvent amener la clarté et la concentration, la sérénité et la force. De sorte que vous puisez dans les ombres à proximité pour vous remplir de magie. Vous regagnez 1 Point de focalisation, jusqu'à votre maximum habituel."
                ]
            },
            {
                "name"       : "Vision de dissolution",
                "level"      : "9",
                "traits"     : [
                    "Occulte",
                    "Wayang"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par heure",
                    "Accepter vos ténèbres intérieurs signifie qu'aucune obscurité extérieure ne peut obscurcir votre vision. Vous obtenez vision dans le noir supérieure pendant 1 minute."
                ]
            },
            {
                "name"       : "Souveraineté de la dissolution",
                "level"      : "17",
                "traits"     : [
                    "Wayang"
                ],
                "required"   : [
                ],
                "description": [
                    "Avec la discipline née d'une vie passé dans les ténèbres, vous convainquez l'ombre d'un ennemi à combattre à vos côtés. Vous pouvez lancer Dupliquer l'ennemi comme un sort inné occulte une fois par jour. Le duplicata est l'ombre de la cible, qui prend une forme tri-dimensionnelle et lui accorde le trait ombre. Pendant la durée du sort, la cible perd son ombre. Si la cible est dans une zone de ténèbres lorsque le sort est lancé, le duplicata créé possède 15 Points de vie supplémentaires."
                ]
            },
            {
                "name"       : "Hériter de l'héritage onirique",
                "level"      : "1",
                "traits"     : [
                    "Wayang"
                ],
                "required"   : [
                ],
                "description": [
                    "Que vous l'ayez toujours porté ou que vous l'ayez hérité récemment, vous avez un pusaka - un objet de famille contenant un esprit avec lequel vous communiquez dans vos rêves. Choisissez un objet d'Encombrement léger pour qu'il soit votre pusaka. Il devient un objet magique qui possède le trait occulte. TAnt que vous dormez avec cet objet dans votre allonge et passez 10 minutes au cours de vos préparatifs quotidiens pour choyer l'esprit en son sein, vous pouvez Activer le pusaka au cours de ce jour.",
                    "Activation - Mémoires ancestrales 1 (concentration)",
                    "Fréquence Une fois par jour",
                    "Effet L'esprit au sein de la pusaka vous conseille sur un sujet qu'il a connu durant sa vie. Lorsque vous obtenez ce don, choisissez une compétence de Connaissance à propos d'une profession et une autre à propos d'un type environnement, comme Connaissance de la comptabilité et Connaissance de la forêt. Lorsque vous Activez la pusaka, vous tentez de Vous souvenir en utilisant une de ces compétences (vous devenez temporairement qualifié dans ces compétences pour ce test).Une fois que vous avez fait votre choix dans ces compétences de Connaissance, elles ne peuvent plus être modifiées.",
                    "Activation - Guider mes rêves 2 (concentration)",
                    "Effet Vous demandez à l'esprit à l'intérieur de la pusaka de vous montrer le chemin. Vous Lancez Assistance surnaturelle comme un tour de magie occulte. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur."
                ]
            },
            {
                "name"       : "Silhouette feuille de palmier",
                "level"      : "13",
                "traits"     : [
                    "Exploration",
                    "Extradimensionnel",
                    "Occulte",
                    "Wayang"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez vous rendre aussi plat qu'une poupée de papier ou une ombre. Vous pouvez passer 1 minute dans une méditation immobile avant d'accomplir un étrange pas qui vous transpose partiellement en dehors de ce plan, laissant votre corps complètement aplati. Dans cet état, vous pouvez glisser sous des portes, à travers de très petites fissures ou n'importe où passerait une simple feuille de papier, mais vous ne pouvez pas incanter des sorts, activer des objets ou utiliser des actions qui possèdent les traits attaque ou manipulation. Vous restez dans cet état pendant 1 minute à moins de choisir de revenir à la normale plus tôt en utilisant une action, qui possède le trait concentration."
                ]
            },
            {
                "name"       : "Déplacement raffiné dans les ténèbres",
                "level"      : "1",
                "traits"     : [
                    "Wayang"
                ],
                "required"   : [
                ],
                "description": [
                    "La capacité à se déplacer avec élégance et sans être détecté dans l'obscurité a aidé votre peuple lorsqu'il a fui le Nébulmonde. Vous pouvez vous déplacer de 1,50 mètre de plus lorsque vous utilisez l'action Être furtif, jusqu'à votre Vitesse. De plus tant que vous continuez à utilisez des actions Être furtif et que vous réussissez votre test de Discrétion, vous n'êtes pas Observé si vous terminez une action Être furtif dans la lumière faible ou dans les ténèbres, tant que vous bénéficiez d'un abri ou d'un abri important ou êtes Masqué à la fin de votre tour."
                ]
            },
            {
                "name"       : "Réveiller la relique onirique",
                "level"      : "9",
                "traits"     : [
                    "Wayang"
                ],
                "required"   : [
                    "Hériter de l'héritage onirique"
                ],
                "description": [
                    "L'esprit au sein de votre pusaka entre en résonance avec les autres objets magiques en votre possession. Votre pusaka obtient l'activation suivante.",
                    "Activation - Remplir l'héritage f (concentration)",
                    "Fréquence Une fois par jour",
                    "Effet Votre pusaka utilise son pouvoir pour redonner vie à l'un de vos objets magiques épuisés. Vous Activez un objet que vous avez investi même après avoir utilisé le nombre maximum d'utilisations lié à sa fréquence. Vous ne pouvez le faire que si le niveau de l'objet est de la moitié de votre niveau ou inférieur, que l'activation possède une fréquence d'au moins une fois par jour et que vous n'avez pas déjà utilisé l'activation au cours de ce round."
                ]
            },
            {
                "name"       : "Trancher l'ombre onirique",
                "level"      : "17",
                "traits"     : [
                    "Wayang"
                ],
                "required"   : [
                    "Hériter de l'héritage onirique"
                ],
                "description": [
                    "Lorsque vous murmurez à votre pusaka, il essaie de trancher l'ombre d'un ennemi, la plongeant dans un sommeil éternel. Votre pusaka obtient l'activation suivante.",
                    "Activation - Trancher l'ombre 2 (concentration, manipulation, mental)",
                    "Fréquence Une fois par jour",
                    "Effet Votre pusaka devient un kris fait de ténèbres qui se rend de lui-même dans une ombre d'un ennemi adjacent. Cet ennemi subit @Damage[80[mental]]{80 dégâts mentaux} avec un jet de @Check[fortitude|against:class-spell|basic] contre le plus élevé entre votre DD de sort et votre DD de classe. Si ceci réduit la créature à 0 Point de vie, la cible ne meurt pas, mais son ombre set détachée de son corps, devenant un @UUID[Compendium.pf2e.pathfinder-monster-core.Actor.clzHAfegb9Rn6DOe]{Rejeton d'ombre} qui tente de fuir du corps de la cible. Tant que le rejeton d'ombre existe, la cible reste dans un profond sommeil sans rêve. Si le rejeton est détruit, la cible récupère son ombre et se réveille (Si son corps a été soigneusement gardé lorsqu'il était Inconscient)."
                ]
            },
            {
                "name"       : "Tempo de l'ombre",
                "level"      : "9",
                "traits"     : [
                    "Wayang"
                ],
                "required"   : [
                ],
                "description": [
                    "Déclencheur Un allié dans votre allonge utilise une action de déplacement ou quitte une case au cours d'une action de déplacement qu'il entreprend.",
                    "Lorsque votre allié vous dépasse, vous adaptez vos mouvements à son rythme et le suivez sur le champ de bataille. Vous Marchez rapidement jusqu'à votre Vitesse mais devez emprunter le même chemin que l'allié déclencheur a emprunté. Vous devez terminer votre déplacement adjacent à l'allié déclencheur (ou dans la dernière case que vous avez été capable d'atteindre si votre allié est capable de se déplacer plus loins que ne le permet votre Vitesse)."
                ]
            },
            {
                "name"       : "Jeu d'ombre",
                "level"      : "5",
                "traits"     : [
                    "Illusion",
                    "Occulte",
                    "Ombre",
                    "Wayang"
                ],
                "required"   : [
                ],
                "description": [
                    "Conditions Votre dernière action était une Frappe au corps-à-corps qui a blessé votre adversaire.",
                    "Lorsque votre coup porte, vous vous détachez de votre ombre pour prendre l'ascendant sur votre ennemi. Vous tentez un [[/act tumble-through options=shadowplay]]{Déplacement acrobatique} dans l'espace de l'adversaire, avec un bonus de circonstances de +2 au test d'Acrobaties. Si vous obtenez un succès, votre ombre se dresse du sol, prenant en tenaille votre adversaire jusqu'au début de votre prochain tour."
                ]
            },
            {
                "name"       : "Abattre les géants inaperçu",
                "level"      : "13",
                "traits"     : [
                    "Wayang"
                ],
                "required"   : [
                ],
                "description": [
                    "Dans les ténèbres, vos attaques peuvent apporter tout géant au visage rouge sur les genoux. Une fois par heure, si vous obtenez un coup critique sur un jet d'attaque contre un ennemi de taille Grande ou supérieure et que vous êtes dans une zone de ténèbres, des mains invisibles sortent des ombres et tirent la cible vers le sol, la mettant À terre."
                ]
            },
            {
                "name"       : "Connaissance des wayangs",
                "level"      : "1",
                "traits"     : [
                    "Wayang"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez utiliser votre connaissance pour améliorer vos représentations ou vous aider à vous cacher. Vous êtes qualifié en Représentation et en Discrétion. Si vous devriez automatiquement être qualifié dans une de ces compétences (du fait de votre historique ou de votre classe, par exemple), vous êtes qualifié à la place dans une compétence de votre choix.",
                    "Vous obtenez aussi le don général Connaissance supplémentaire en Connaissance des wayangs."
                ]
            },
            {
                "name"       : "Familiarité avec les armes des wayangs",
                "level"      : "1",
                "traits"     : [
                    "Wayang"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez appris à vous battre avec des armes qui vous aident à garder vos distances ou à tirer le meilleur parti des coups portés en restant dans l'ombre. Vous avez accès à l'@UUID[Compendium.pf2e.equipment-srd.Item.76 AqNZB5xuFWxgJI]{Éventail de combat}, au Kris, à la @UID[Compendium. pf2e.equipment-srd.Item.O7IZBvVoe7W2XnBa]{Machette}, à la Pique, au Saï, à la Sarbacane et au Trident. Vous avez une familiarité avec ces armes. Pour les besoins de déterminer votre maîtrise, vous considérez ces armes, si elles sont de guerre comme des armes simples et, si elles sont évoluées, comme des armes de guerre.",
                    "Au niveau 5, lorsque vous obtenez un coup critique avec l'une de ces armes, vous bénéficiez de son effet critique spécialisé."
                ]
            },
            {
                "name"       : "Abjurer le faux frère",
                "level"      : "9",
                "traits"     : [
                    "Yaksha"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre vœu vous rappelle qu'il peut y avoir du vinaigre saumâtre caché sous des mots mielleux, ce qui vous aide à détecter les tentatives pour influencer votre esprit. Si vous obtenez un succès sur un jet de sauvegarde contre un effet mental qui n'inflige pas de dégâts, il devient un succès critique à la place."
                ]
            },
            {
                "name"       : "Mantra d'adamantium",
                "level"      : "13",
                "traits"     : [
                    "Primordial",
                    "Yaksha"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous atteignez votre véritable potentiel en temps qu'esprit tutélaire. Vous pouvez lancer Bénédiction du défi en tant que sort inné primordial de rang 5 une fois par jour."
                ]
            },
            {
                "name"       : "Regard perce cendre",
                "level"      : "1",
                "traits"     : [
                    "Yaksha"
                ],
                "required"   : [
                ],
                "description": [
                    "Ni les cendres, ni les vents ne devraient vous empêcher de voir ceux qui ont besoin de votre aide. Vous réussissez le test nu pour cibler une créature Masquée si cette créature n'est Masquée que par de la fumée ou de la brume."
                ]
            },
            {
                "name"       : "Perspicacité avérée",
                "level"      : "1",
                "traits"     : [
                    "Yaksha"
                ],
                "required"   : [
                    "Yaksha heritage with an edict that requires you to confront a certain type of creature"
                ],
                "description": [
                    "Vous êtes qualifié dans la compétence de Connaissance correspondant à un type de créature mentionnée par votre vœu (par exemple, Connaissance des fées si votre héritage est Refus de la quête du Premier-né). Lorsque vous réussissez à Vous Souvenir à propos de ce type de créature, vous obtenez un bonus de circonstances de +1 à la CA et aux jets de sauvegarde contre les attaques et les capacités de cette créature pendant 1 round.",
                    "Effet : Perspicacité avérée"
                ]
            },
            {
                "name"       : "repos de bambou et de limon",
                "level"      : "1",
                "traits"     : [
                    "Yaksha"
                ],
                "required"   : [
                ],
                "description": [
                    "À l'aise dans les marécages et les taillis, vous volez de rivière en arbre avec la grâce chatoyante d'une libellule. Vous ignorez les terrains difficiles non magiques dus à des sous-bois légers, des tourbières peu profondes, de la boue ou de l'eau et vous considérez les terrains très difficiles non magiques dus à ces caractéristiques comme des terrains difficiles."
                ]
            },
            {
                "name"       : "Traversée de colugo",
                "level"      : "5",
                "traits"     : [
                    "Primordial",
                    "Yaksha"
                ],
                "required"   : [
                ],
                "description": [
                    "Les vallées interdites et les falaises abruptes ne peuvent pas freiner vos vœux de réunir les personnes perdues. Vous pouvez lancer au choix entre Atterrissage en douceur ou Saut comme un sort primordial inné une fois par jour. Au niveau 9, ces sorts sont intensifiés au rang 3."
                ]
            },
            {
                "name"       : "Stature de piétineur de fiélons",
                "level"      : "9",
                "traits"     : [
                    "Yaksha"
                ],
                "required"   : [
                ],
                "description": [
                    "Les fiélons suffisamment malchanceux pour être piétinés par vos soins ou pour se retrouver pris entre vos mains sont rapidement réduits en poudre d'os et en bouillie sanglante et la douleur de vos frappes les empêche d'agir. Lorsque vous obtenez un coup critique sur une créature qui est À terre, Saisie ou Entravée, elle ne peut pas utiliser de réaction pendant 1 round."
                ]
            },
            {
                "name"       : "Aspect à quatre bras",
                "level"      : "9",
                "traits"     : [
                    "Transformation",
                    "Primordial",
                    "Yaksha"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vous prononcez des vœux pour supporter les douleurs des autres. En réponse, votre torse se dote d'une paire de bras supplémentaires pour vous aider à porter ces fardeaux. Au cours de la minute suivante, vous pouvez transporter 3 Encombrements de plus avant de devenir surchargé et jusqu'à un maximum de 6 Encombrements supplémentaires. Vous pouvez aussi utiliser ces bras comme des mains libres pour accomplir seulement les actions ou les activités suivantes : Croc-en-jambe, Désarmer Pousser ou Saisir. Après cette minute ou lorsque vous devenez Inconscient, ce qui advient en premier, ces bras supplémentaires s'évanouissent."
                ]
            },
            {
                "name"       : "Germination de détermination",
                "level"      : "13",
                "traits"     : [
                    "Yaksha"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "La vitalité inonde votre âme entravée, lui offrant une cure de jouvence, à défaut d'un repos total. Pour chaque effet qui provoque l'état Affaibli ou Fatigué et qui vous affecte, tentez un test de @Check[nature] pour contrer cet effet. Le rang de contre de Germination de détermination est égal à la moitié de votre niveau arrondi au supérieur."
                ]
            },
            {
                "name"       : "Incantation corne et os",
                "level"      : "9",
                "traits"     : [
                    "Primordial",
                    "Yaksha"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous invoquez des mantras de renaissance tellurique. Vous obtenez la capacité à lancer Forme animale et Forme humanoïde comme des Sorts innés primordiaux de rang 2, chacun une fois par jour."
                ]
            },
            {
                "name"       : "Aspect hurlant",
                "level"      : "1",
                "traits"     : [
                    "Transformation",
                    "Primordial",
                    "Yaksha"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois toutes les 10 minutes",
                    "Tirant sur vos cheveux pour les enflammer et grinçant des dents, vous hurlez un vœu de colère et votre forme s'élance pour répondre aux exigences de votre promesse mortelle. Pendant la minute suivante, vous obtenez deux attaques à mains nues. Vous obtenez une attaque à mains nues de défenses qui inflige 1d6 dégâts perforants, se trouve dans le groupe pugilat et possède les traits finesse et à mains nues. Vous obtenez également une attaque à mains nues au corps-à-corps de cheveux enflammés qui inflige 1d4 dégâts de feu, fait partie du groupe pugilat et possède les traits agile, finesse et à mains nues."
                ]
            },
            {
                "name"       : "Rastaurateur méticuleux",
                "level"      : "1",
                "traits"     : [
                    "Yaksha"
                ],
                "required"   : [
                ],
                "description": [
                    "Si vous ne gaspillez pas, vous ne manquerez pas. Votre œil exercé vous permet de restaurer rapidement des objets artisanaux tout en conservant des matériaux précieux. Vous obtenez le don Réparation rapide. De plus, lorsque vous obtenez un échec critique en tentant de Réparer un objet, il devient un échec."
                ]
            },
            {
                "name"       : "Symbiose nourricière",
                "level"      : "5",
                "traits"     : [
                    "Yaksha"
                ],
                "required"   : [
                ],
                "description": [
                    "Lorsque vous récupérez de vos blessures, l'énergie vitale s'écoule de vous jusqu'à la terre puis de nouveau vers vous de nouveau. Au cours du mode intermède, lorsque vous utilisez l'activité Repos long, vous regagnez @Damage[24[healing]]{24 Points de vie supplémentaires} après les 24 premières heures de repos. Vous pouvez utiliser l'activité Subsister au cours d'un repos long et n'avez as besoin de passer de temps supplémentaire pour le faire. Lorsque vous le faites, des fruits, des noix et des légumes en nombre suffisant pour nourrir 5 personnes apparaissent autour de vous, prêts à être récoltés."
                ]
            },
            {
                "name"       : "Sage des feuilles éparpillées",
                "level"      : "1",
                "traits"     : [
                    "Yaksha"
                ],
                "required"   : [
                ],
                "description": [
                    "Les épopées de l'histoire tragique et fière de votre peuple flambent comme des feuilles enflammées dans les forêts de la mémoire ancestrale. Vous êtes qualifié en Nature et en Religion. Si vous devriez automatiquement être qualifié dans une de ces compétences (par votre historique ou votre classe, par exemple), vous êtes qualifié à la place dans une compétence de votre choix.",
                    "Vous obtenez aussi le don Connaissance supplémentaire pour la connaissance des yakshas."
                ]
            },
            {
                "name"       : "Endiguer la marée",
                "level"      : "5",
                "traits"     : [
                    "Primordial",
                    "Yaksha"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez lancer Arbre protecteur comme un sort primordial inné de rang 1 une fois par jour. Au niveau 7, le sort est intensifié au rang 2 et tous les 2 niveaux par la suite, le sort est intensifié d'un rang de sort supplémentaire."
                ]
            },
            {
                "name"       : "Force de huit légions",
                "level"      : "17",
                "traits"     : [
                    "Métamorphose",
                    "Primordial",
                    "Yaksha"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous méditez pendant 24 heures en une cérémonie unique au sein d'une forêt ou d'une grotte. Après votre réclusion, votre gabarit et vos membres se gonflent de force guerrière pour accomplir vos vœux. Vous obtenez de manière permanente les effets d'Agrandissement et votre maximum de Points de vie augmentent de votre niveau. La cérémonie transforme la plupart de votre équipement à la taille appropriée pour votre nouveau corps (bien que de puissants objets comme des artefacts ou des objets fortement liés à leur taille originelle ne peuvent se transformer, à la discrétion du MJ)."
                ]
            },
            {
                "name"       : "enchevêtrement de langue",
                "level"      : "1",
                "traits"     : [
                    "Yaksha"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre talent pour les langues est une bénédiction provenant des anciens créateurs des yakshas. Vous apprenez deux nouvelles langues, choisies parmi celles auxquelles vous avez accès. Vous obtenez également un bonus de circonstances de +2 à vos jets de sauvegarde contre les effets linguistiques."
                ]
            },
            {
                "name"       : "Transcender l'azimut",
                "level"      : "17",
                "traits"     : [
                    "Primordial",
                    "Yaksha"
                ],
                "required"   : [
                ],
                "description": [
                    "Comme la terre s'abreuve de la lumière de la lune et du soleil, votre vœu régulier s'imprègne des forces supralunaires, prêtes à être libérées par un simple mantra. Vous pouvez lancer Forme cosmique sur vous-même comme un sort inné primordial de rang 7 une fois par jour, votre ombre s'allongeant et devenant un mandala d'énergies fondamentales. En plus des effets normaux du sort, vous pouvez Maintenir le sort pour passer de la forme de combat du soleil à celle de la lune une fois par tour."
                ]
            },
            {
                "name"       : "Guide inébranlable",
                "level"      : "1",
                "traits"     : [
                    "Yaksha"
                ],
                "required"   : [
                ],
                "description": [
                    "Grâce à votre œil vif et à votre pied sûr, votre présence est un atout pour les personnes que vous guidez. Lorsque vous êtes en Reconnaissance, vous accordez à votre groupe un bonus de circonstances de +2 aux jets d'initiative au lieu du +1 ordinaire. Lorsque votre groupe utilise l'activité S'empresser, il peut utiliser votre modificateur de Constitution pour déterminer à quelle vitesse le groupe peut S'empresser ensemble, même s'il n'est pas le plus faible dans le groupe."
                ]
            },
            {
                "name"       : "Furie aux cheveux désordonnés",
                "level"      : "13",
                "traits"     : [
                    "Yaksha"
                ],
                "required"   : [
                ],
                "description": [
                    "Vos os brisés forment des angles bizarres, mais cette douleur ne fait qu'ajouter à votre colère et augmente vos prouesses. Vous ajoutez les valeurs combinées de vos états Condamné et Blessé en tant que bonus de circonstances aux jets de dégâts avec vos attaques au corps-à-corps (par exemple, si vous étes Condamné 1 et Blessé 2, vous obtenez un bonus de circonstances de +3 à vos jets d'attaque au corps-à-corps)."
                ]
            },
            {
                "name"       : "Supporter la tempête",
                "level"      : "5",
                "traits"     : [
                    "Yaksha"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Vous devriez subir des dégâts d'électricité, de feu, de froid, de poison ou de son.",
                    "Votre peau durcit comme de l'écorce et obtient le lustre de l'argile émaillé, amoindrissant la piqûre ruineuse de la nature sur votre corps. Vous obtenez une résistance égale à votre niveau contre le type de dégâts déclencheur."
                ]
            },
            {
                "name"       : "Témoin de la terre",
                "level"      : "9",
                "traits"     : [
                    "Peu courant",
                    "Primordial",
                    "Yaksha"
                ],
                "required"   : [
                ],
                "description": [
                    "La magie primordiale dans votre âme offre au patient les conseils éternels de la terre. Vous apprenez le rituel Pénitence. Lorsque vous utilisez le rituel Pénitence sur des yakshas et que vous obtenez un échec critique, il devient un échec à la place et si vous obtenez un succès, il devient un succès, il devient un succès critique à la place."
                ]
            },
            {
                "name"       : "Hospitalité du protecteur du monde",
                "level"      : "9",
                "traits"     : [
                    "Primordial",
                    "Yaksha"
                ],
                "required"   : [
                    "Rastaurateur méticuleux"
                ],
                "description": [
                    "Grâce à votre pouvoir spirituel, vous empêchez la famine et remplissez les réserves. Vous pouvez lancer Création de nourriture et Cuisine purifiée comme des Sorts innés primordiaux de rang 2, chacun une fois par jour. De plus, lorsque vous lancez ces sorts, vous récupérez instantanément des Points de vie aux contenants qui emmagasinent ces denrées comestibles magiques comme si vous aviez obtenu un succès à l'action Réparer en utilisant votre maîtrise en DD se sort à la place de votre maîtrise en Artisanat."
                ]
            },
            {
                "name"       : "Parmi l'humanité",
                "level"      : "5",
                "traits"     : [
                    "Occulte",
                    "Métamorphose",
                    "Yaoguai"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vos talents pour changer de formes vous permet de passer inaperçu. Lorsque vous Changez de forme vers votre forme humanoïde, vous obtenez les effets de Déguisement illusoire de rang 3 pendant 1 heure ou jusqu'à ce que vous vous changiez, sauf qu'il s'agit d'un effet de métamorphose plutôt que d'illusion."
                ]
            },
            {
                "name"       : "Héritage yaoguai éveillé",
                "level"      : "5",
                "traits"     : [
                    "Yaoguai"
                ],
                "required"   : [
                    "You have a versatile heritage"
                ],
                "description": [
                    "Vous avez plongé dans la puissance de votre héritage. Vous obtenez tous les avantages mécaniques de l'héritage yaoguai que vous avez choisi au niveau 1, vous permettant de prendre des dons et obtenez tous les avantages qui nécessitent un héritage yaoguai spécifique."
                ]
            },
            {
                "name"       : "Défi audacieux",
                "level"      : "5",
                "traits"     : [
                    "Yaoguai"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois toutes les 10 minutes",
                    "Déclencheur Vous Changez de forme.",
                    "Votre forme s'endurcit lorsque vous naviguez entre les formes. Vous obtenez des Points de vie temporaires égaux à votre niveau qui persistent pendant 1 minute."
                ]
            },
            {
                "name"       : "Vision brillante",
                "level"      : "9",
                "traits"     : [
                    "Yaoguai"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous ignorez l'état Masqué provenant des nuages, de la poussière, du brouillard, de la brume, de la fumée et de matières de même nature. Vous pouvez aussi lancer Discerner l'invisible comme un sort occulte inné une fois par jour."
                ]
            },
            {
                "name"       : "Forme rampante",
                "level"      : "1",
                "traits"     : [
                    "Yaoguai"
                ],
                "required"   : [
                    "born of animal or born of celestial heritage"
                ],
                "description": [
                    "Vous pouvez vous transformer en petit animal ou en créature céleste pour vous déplacer et espionner. Vous pouvez Changer de forme pour prendre une forme rampante. Sous Forme rampante, vous obtenez l'effet du sort Forme de vermine au rang 1, sauf que vous ne pouvez adopter une forme qui correspond à votre héritage. Par exemple, si vous étiez autrefois un loup, vous ne pouvez être qu'un louveteau."
                ]
            },
            {
                "name"       : "Élucidation",
                "level"      : "13",
                "traits"     : [
                    "Yaoguai"
                ],
                "required"   : [
                    "Vision brillante"
                ],
                "description": [
                    "Déclencheur Vous réussissez un jet de sauvegarde pour percer une illusion.",
                    "Vous pouvez coupez court aux illusions avec une telle précision que tous ceux qui se trouvent aux alentours voient également leurs sens aiguisés. Lorsque vous percez une illusion, tous les alliés dans les 4,50 mètres peuvent utiliser une action gratuite pour tenter un jet de sauvegarde pour percer l'illusion également."
                ]
            },
            {
                "name"       : "À jamais parmi l'humanité",
                "level"      : "9",
                "traits"     : [
                    "Yaoguai"
                ],
                "required"   : [
                    "Parmi l'humanité"
                ],
                "description": [
                    "Passer inaperçue au sein de la société vous est désormais une seconde nature. Vous pouvez utiliser Parmi l'humanité trois fois par jour au lieu d'une fois par jour."
                ]
            },
            {
                "name"       : "Mort paisible et renaissance",
                "level"      : "17",
                "traits"     : [
                    "Occulte",
                    "Yaoguai"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous êtes une fois né des énergies de la terre et de la nature et, par leur pouvoir, vous pouvez revenir à la vie de nouveau. Une fois par an, lorsque vous mourrez, vos restes sont protégés comme s'ils étaient sous l'effet d'un sort Reposer en paix au rang 5. Si vous restes sont ramenés et enterrés à moins de 1,5 km de l'endroit où vous êtes né, après une semaine, vous revenez à la vie avec les effets d'un succès sur un rituel de Résurrection de rang 9 (mais pas d'un succès critique)."
                ]
            },
            {
                "name"       : "Forme immobile",
                "level"      : "5",
                "traits"     : [
                    "Yaoguai"
                ],
                "required"   : [
                    "born of item, born of elements, or born of vegetation heritage"
                ],
                "description": [
                    "Vous prenez la forme que vous aviez avant de vous éveiller pour vous cacher en plein jour. Lorsque vous Changez de forme, vous pouvez adopter la forme d'une plante immobile, d'un objet ou d'un élément naturel de taille Très petite, Petite ou Moyenne, qui convient à votre héritage. Utiliser votre forme immobile est considéré comme revêtir un déguisement dans le cadre de l'utilisation de Duperie pour Vous faire passer pour, sauf que vous pouvez Vous faire passer pour un objet au lieu d'une créature, vous obtenez un bonus de statut de +4 aux tests de Duperie pour empêcher les autres de percer votre déguisement et vous ajoutez votre niveau même si vous n'êtes pas qualifié. Vous pouvez parler sous votre forme immobile mais vous ne pouvez pas attaquer, lancer de sorts ou vous déplacer."
                ]
            },
            {
                "name"       : "Arme emblématique améliorée",
                "level"      : "13",
                "traits"     : [
                    "Yaoguai"
                ],
                "required"   : [
                    "Arme emblématique"
                ],
                "description": [
                    "Votre arme emblématique emprunte aux propriétés des matériaux mystiques réputés vaincre les morts-vivants, les esprits et d'autres créatures de même type. Votre arme emblématique est considérée comme en aubargent, en bois crépusculaire et en pêcher céleste lorsqu'il s'agit de franchir la résistance."
                ]
            },
            {
                "name"       : "Chasseur des siens",
                "level"      : "5",
                "traits"     : [
                    "Yaoguai"
                ],
                "required"   : [
                    "Historien yaoguai"
                ],
                "description": [
                    "Vous êtes doué pour combattre les autres créatures surnaturelles. Lorsque vous réussissez un test de Connaissances pour Vous souvenir en utilisant Occultisme ou Connaissance des yaoguais, vous obtenez un bonus de circonstances de +1 aux dégâts avec les armes et les attaques à mains nues contre cette créature et toutes les créatures qui sont exactement du même type au cours de la minute suivante. Si votre attaque inflige plus d'un dé de dégâts d'arme (ce qui est habituel aux niveaux supérieurs), le bonus est égal au nombre de dés de dégâts d'arme ou de dés de dégâts des attaques à mains nues. De plus, vous bénéficiez d'un bonus de circonstances de +1 aux jets de sauvegarde contre leurs capacités pendant la minute qui suit. Par exemple, si vous affrontez trois jiang-shi, vous bénéficierez de ces bonus contre chacun d'entre eux."
                ]
            },
            {
                "name"       : "Monstre légendaire",
                "level"      : "17",
                "traits"     : [
                    "Yaoguai"
                ],
                "required"   : [
                    "Libérer la puissance yaoguai"
                ],
                "description": [
                    "Votre forme de yaoguai a atteint son pinnacle, vous permettant d'assumer (ou peut-être de revenir à) la forme d'un monstre de légende. Vous pouvez Libérer la puissance yaoguai autant que vous voulez.",
                    "Une fois par jour, lorsque vous Libérez la puissance yaoguai, vous pouvez obtenir un des avantages supplémentaires suivants, qui persiste pendant 1 minute ou jusqu'à ce que vous Changiez de forme de nouveau.",
                    "Effet : Monstre légendaire"
                ]
            },
            {
                "name"       : "Frappe morphique",
                "level"      : "1",
                "traits"     : [
                    "Yaoguai"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez vous battre avec une partie de votre ancien corps. Vous gagnez une attaque à mains nues au corps-à-corps en fonction de votre héritage, décrite ci-dessous. Vous pouvez utiliser cette attaque à mains nues sous votre forme humanoïde ou sous votre forme yaoguai. Ces Frappes font partie du groupe pugilat. Comme les autres attaques à mains nues, vous pouvez améliorer cette attaque avec des Bandelettes de coups puissants."
                ]
            },
            {
                "name"       : "Mutagène naturel",
                "level"      : "1",
                "traits"     : [
                    "Yaoguai"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous pouvez distiller votre capacité à changer de forme naturelle en un élixir qui accorde une capacité inférieure à se métamorphoser. Lorsque vous obtenez ce don, choisissez un mutagène courant de niveau 1. Chaque jour, au cours de vos préparatifs quotidiens, vous pouvez faire une fiole temporaire du mutagène choisi. Il se dissipe au cours de vos prochains préparatifs quotidiens s'il n'est pas consommé. Si le mutagène possède plusieurs versions (comme une version supérieure), votre mutagène devient automatiquement d'une version supérieure lorsque votre niveau est égal au niveau du mutagène."
                ]
            },
            {
                "name"       : "Évasion métamorphique",
                "level"      : "1",
                "traits"     : [
                    "Yaoguai"
                ],
                "required"   : [
                ],
                "description": [
                    "Déclencheur Vous devriez être Agrippé, Immobilisé, À terre ou Entravé.",
                    "Vous vous métamorphosez en une vermine très petite, un nuage de feuilles ou une autre forme qui permet de vous échapper. Tentez un @Check[flat|dc:16]. En cas de succès, vous ignorez l'effet déclencheur et pouvez Faire un pas. Puis vous revenez à votre forme humanoïde."
                ]
            },
            {
                "name"       : "Récupération rapide",
                "level"      : "9",
                "traits"     : [
                    "Yaoguai"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Déclencheur Votre tour commence et vous avez l'état Blessé.",
                    "Vous utilisez votre maîtrise de votre forme pour réparer les blessures qui menacent votre vie. Réduisez votre état Blessé de 1."
                ]
            },
            {
                "name"       : "Arme emblématique",
                "level"      : "5",
                "traits"     : [
                    "Yaoguai"
                ],
                "required"   : [
                ],
                "description": [
                    "Votre énergie sature une de vos armes. Elle pourrait être héritée ou reliée à votre histoire. Choisissez une arme et donnez lui un nom. Cette arme obtient le trait unique. Vous obtenez un accès à son effet critique spécialisé. Vous pouvez passer une action à prononcer le nom de votre arme, l'invoquant dans votre main vide si l'arme n'est pas tenue et qu'elle se trouve dans un rayon de 1,5 km. C'est un effet de téléportation occulte.",
                    "Si votre arme emblématique est détruite, vous pouvez passer trois jours et trois nuits à saturer une nouvelle arme de votre énergie, créant ainsi une nouvelle arme emblématique."
                ]
            },
            {
                "name"       : "Habitant du crépuscule",
                "level"      : "1",
                "traits"     : [
                    "Yaoguai"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous avez l'habitude des forêts ombragées et des grottes. Vous obtenez vision nocturne. Si vous disposez déjà de vision nocturne, vous obtenez vision dans le noir.",
                    "Spécial Vous pouvez choisir ce don deux fois."
                ]
            },
            {
                "name"       : "Libérer la puissance yaoguai",
                "level"      : "9",
                "traits"     : [
                    "Yaoguai"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Lorsque vous prenez votre forme yaoguai, vous puisez dans votre magie interne pour prendre une forme encore supérieure. Lorsque vous Changez de forme pour prendre votre forme yaoguai, vous pouvez dépenser une action supplémentaire pour obtenir les effets d'Agrandissement et un effet supplémentaire en fonction de votre héritage. Cet effet persiste pendant 1 minute ou jusqu'à ce que vous Changiez de forme à nouveau.",
                    "Effet : Libérer la puissance yaoguai"
                ]
            },
            {
                "name"       : "Terreur perturbatrice",
                "level"      : "13",
                "traits"     : [
                    "Audible",
                    "Émotion",
                    "Terreur",
                    "Mental",
                    "Yaoguai"
                ],
                "required"   : [
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Conditions Vous êtes sous forme de yaoguai.",
                    "Vous libérez un puissant hurlement, un chant de mort ou parlez en formant d'étranges répétitions qui implantent la peur chez autrui. Tous les ennemis dans les 9 mètres tentent un jet de @Check[will|against:class-spell] contre le plus élevé contre votre DD de classe ou votre DD de sort.",
                    "Succès critique La cible n'est pas affectée.",
                    "Succès La cible est Effrayée 1.",
                    "Échec La cible est Effrayée 1 et Prise au dépourvu.",
                    "Échec critique La cible est Effrayée 2 et Prise au dépourvu."
                ]
            },
            {
                "name"       : "Historien yaoguai",
                "level"      : "1",
                "traits"     : [
                    "Yaoguai"
                ],
                "required"   : [
                ],
                "description": [
                    "Vous connaissez parfaitement votre propre espèce. Vous êtes qualifié en Occultisme. Si vous devriez automatiquement être qualifié dans cette compétence (par votre historique ou votre classe, par exemple), vous êtes à la place qualifié dans une compétence de votre choix. Vous obtenez aussi le don général Connaissance supplémentaire en Connaissance des yaoguais.",
                    "Une fois par jour, vous obtenez les avantages du don Assurance soit en Occultisme soit en Connaissance des yaoguais. Vous choisissez de l'utiliser par une action gratuite lorsque vous tentez le test de compétence affecté."
                ]
            }
        ]
    ]
};

/**
 * Ancestry feats open to the character: the ancestry carries its name in
 * its feats traits, the level must be low enough. The prerequisites stay
 * unparsed (varied prose, not only skill ranks): every feat of the
 * ancestry at an allowed level is offered.
 * A versatile heritage opens its own feat pool: its feats join the
 * ancestry ones (PF2 : « parmi ceux des sang-dragons et ceux de votre
 * ascendance »), its name carries in the feats traits the same way.
 * The lineage feats (trait « Lignée ») carry character level 1 : the
 * higher lines don't offer them (the scrape doesn't carry the
 * restriction, it lives here).
 *
 * @param {string} race_name   Ancestry name, ex: "Elfe"
 * @param {number} max_level   Level of the line choosing the feat
 * @param {string} legacy_name Versatile heritage name, ex: "Sang-dragon" (null: none)
 * @returns {Array}            [ { name } ] of the available feats
 */
DON.LINEAGE_TRAIT          = "Lignée";

DON.getAvailableAncestryFeats = function ( race_name, max_level, legacy_name ) {
    let to_return = [];
    let feats     = DON.RACE.ENUM[ 0 ];
    for ( let i = 0, _size_i = feats.length; i < _size_i; i++ ) {
        let race_trait_carries     = feats[ i ].traits.indexOf( race_name ) !== -1;
        let legacy_trait_carries   = !!legacy_name && feats[ i ].traits.indexOf( legacy_name ) !== -1;
        if ( !race_trait_carries && !legacy_trait_carries ) {
            continue;
        }
        if ( max_level > 1 && feats[ i ].traits.indexOf( DON.LINEAGE_TRAIT ) !== -1 ) {
            continue;
        }
        if ( parseInt( feats[ i ].level, 10 ) > max_level ) {
            continue;
        }
        to_return.push( { "name": feats[ i ].name } );
    }
    return to_return;
};
