"use strict";
var LEGACIES = {
    key          : "legacies",
    label        : "Héritages",
    key_element  : "legacy",
    label_element: "Héritage",
    ENUM         : [
        
        {
            "name"        : "Aiuvarin",
            "general_desc": [
                "Vous avez des elfes ou possiblement d'autres aiuvarins dans votre arbre généalogique. Vous avez des oreilles pointues et d'autres signes qui démontrent votre héritage elfique. Vous obtenez le trait elfe, le trait aiuvarin et la capacité vision nocturne. De plus, chaque fois que vous obtenez un don ancestral, vous pouvez le choisir parmi la liste des dons des elfes, des aiuvarins et de votre autre ascendance."
            ]
        },
        {
            "name"        : "Animal coureur",
            "general_desc": [
                "Vous etes un animal conçu pour courir à de grandes vitesses sur le sol. Typiquement, vous courrez sur vos quatre pattes comme un canidé, un léopard ou un iguane, mais vous pourriez aussi utiliser deux pattes comme un kangourou, un émeu ou un pingouin.",
                "Vous possédez une vitesse au sol de 9 m et une attaque animale de votre choix (typiquement griffe, queue ou mâchoire)."
            ]
        },
        {
            "name"        : "Animal grimpeur",
            "general_desc": [
                "Vous êtes un animal dont les membres sont adaptés à saisir, escalader et utiliser ses bras. Vous pourriez être adroit et prêt à utiliser des outils comme un chimpanzé ou une loutre ou vous pourriez simplement être un grimpeur rapide comme un ours, un raton-laveur ou un parresseux.",
                "Vous possédez une vitesse de 6 mètres, une vitesse d'escalade de 6 m et une attaque animale de votre choix (typiquement une griffe, un point ou des ma^choires)."
            ]
        },
        {
            "name"        : "Animal nageur",
            "general_desc": [
                "Vous êtes un animal aquatique qui est plus à l'aise dans l'eau. Vous pouvez passer la plupart de votre temps dans l'eau comme un alligator, une otarie, une baleine ou un dauphin ou vous pouvez avoir besoin d'eau pour respirer comme un poisson ou certains crustacés.",
                "Vous possédez une attaque animale de votre choix (typiquement une griffe, des mâchoires ou une queue). Choisissez si vous êtes aquatique ou vivant dans l'eau.",
                "Aquatique Vous obtenez le trait aquatique et vous possédez une vitesse de nage de 9 mètres. Le trait aquatique signifie que vous respirez dans l'eau mais pas dans l'air et que vos Frappes à mains nues contondantes et tranchantes ne subissent pas la pénalité habituelle de -2 lorsque vous êtes sous l'eau.\nVivant dans l'eau Vous pouvez retenir votre souffle sous l'eau pendant 10 minutes avant d'avoir besoin d'air. Vous possédez une vitesse de nage de 6 m et, si vous pouvez vous déplacer sur terre, vous possédez une vitesse de base de 6 mètres."
            ]
        },
        {
            "name"        : "Animal volant",
            "general_desc": [
                "Vous êtes un animal qui peut prendre son envol pendant longtemps ou par bonds répétés, tel qu'un aigle, une chauve-souris, une abeille ou un écureuil volant.",
                "Le processus d'éveil a perturbé votre capacité à voler aussi librement que vous le faisiez auparavant. Ce qui était auparavant un processus automatique est désormais sur lequel vous devez désormais consacrer vos pensées jusqu'à ce qu'il redevienne automatique. Vous pouvez toujours ralentir votre descente, de sorte que vous ne subissez aucun dégâts de votre chute, quelle que soit la distance dont vous chutez. La plupart des animaux éveillés choisissent le don d'ascendance Prendre son envol au niveau 1 pour regagner la capacité de voler. Vous possédez une vitesse de 6 m et une attaque d'animal de votre choix (typiquement d'aile, de bec, de griffe, de mâchoire, de serre)."
            ]
        },
        {
            "name"        : "Ardande",
            "general_desc": [
                "Vous descendez des élémentaires de bois ou possédez un autre héritage influencé par le Plan élémentaire du Bois. Vous pourriez présenter une peau verte et moussue, des lianes qui poussent sur votre tête au lieu de cheveux ou de fins appendices qui ressemblent à des brindilles. Vous obtenez le trait ardande en plus des traits de votre ascendance. Vous obtenez aussi vision nocturne ou vision dans le noir si votre ascendance possède vision nocturne.",
                "Vous pouvez choisir parmi les dons d'ardande, ceux des descendants des génies et ceux de votre ascendance lorsque vous obtenez un don ancestral."
            ]
        },
        {
            "name"        : "Athamaru à piquants",
            "general_desc": [
                "Des piquants effilés sur votre tête peuvent perforer profondément vos ennemis. La plupart ds athamarus utilisent de tels piquants pour leur défense mais un bon coup de tête bien placé peut être d'une efficacité dévastatrice. Vous obtenez une attaque à mains nues de piquants qui infligent 1d6 dégâts perforants. Vos piquants sont dans le groupe pugilat et possèdent les traits à mains nues, agile et finesse."
            ]
        },
        {
            "name"        : "Athamaru coralien",
            "general_desc": [
                "Le corail couvre des parties de votre corps, ce qui vous procure une couche de défense naturelle. Les athamarus coraliens choisissent souvent Symbiotes coraliens et autres dons d'ascendance en rapport. Les plaques de corail sont une armure intermédiaire dans le groupe des plates qui accordent un bonus d'objet de +4 à la CA, un maximum de Dextérité de +1, une pénalité au test de –2, une pénalité à la Vitesse de -1,50 mètre, une valeur de Force de +3 et possèdent les traits hydrodynamique et confort. Vous ne pouvez jamais porter d'autre armure ou retirer le corail. Vous pouvez graver des runes d'armure sur le corail."
            ]
        },
        {
            "name"        : "Athamaru kaléïdoscopique",
            "general_desc": [
                "Vos écailles présentent un spectre de couleur qui brille sous la lumière. Dans les zones de lumière vive ou de lumière faible, vous obtenez un bonus de circonstances de +1 aux tests de Représentation. Vous obtenez aussi la réaction sports_martial_artsChercheur d'éblouissement ."
            ]
        },
        {
            "name"        : "Athamaru pleine d'espoir",
            "general_desc": [
                "Vous avez commencé à vous préparer à devenir une matriarche athamaru et êtes enclin à sortir de votre communauté pour mieux vous préparer à diriger. Dans le cadre de ce changement physique, vous êtes beaucoup plus grande que vous ne l'étiez auparavant. Au lieu d'être de taille Moyenne, votre taille est Grande. De plus, vous emplissez vos alliés d'un sentiment d'espoir. Vous possédez une aura de 3 m qui accorde à tout allié qui s'y trouve d'une bonus de circonstances de +1 aux jets de sauvegarde contre la peur. Il s'agit d'un effet d'émotion et mental."
            ]
        },
        {
            "name"        : "Automate chasseur",
            "general_desc": [
                "Vous avez été conçu comme un éclaireur ou un assassin et avez un corps ressemblant à celui d'un membre d'une meute comme un grand félin ou un loup. Bien que vous vous déplaciez à l'ordinaire comme un quadrupède, vous pouvez toujours vous tenir et combattre comme un bipède, vous permettant d'utiliser tout votre équipement normalement. Votre conception quadrupède vous permet de vous déplacer rapidement ; si vos deux mains sont libres, vous pouvez accroître votre Vitesse à 9 m lorsque vous courrez sur vos quatre membres."
            ]
        },
        {
            "name"        : "Automate combattant",
            "general_desc": [
                "Plus volumineux et puissant, votre corps a été conçu pour le combat. Vous avez une forme humanoïde et volumineuse. Le dé de dégâts de votre poing passe à 1d6 au lieu de 1d4. Vous ne subissez pas de pénalité lorsque vous portez une attaque létale avec votre poing ou n'importe quelle autre attaque à mains nues."
            ]
        },
        {
            "name"        : "Automate tireur de précision",
            "general_desc": [
                "Votre forme humanoïde et légère est conçue pour la vitesse et la précision en combat à distance. Vous obtenez l'action sports_martial_artsVisée de l'automate"
            ]
        },
        {
            "name"        : "Centaure allure de poney",
            "general_desc": [
                "Vous êtes plus petit que la plupart des autres centaures, bien que pas moins rapide. Au lieu d'être de taille Grande, votre taille est Moyenne. Vous obtenez un bonus de circonstances de +1 aux jets de Réflexes."
            ]
        },
        {
            "name"        : "Centaure aspirant orateur",
            "general_desc": [
                "Vous êtes né une parcelle de magie qui a pu vous placer sur la voie pour devenir un Orateur vert ou un Orateur de la foi. Choisissez divin ou primordial. Si vous avez choisi, vous êtes un orateur de la fois. Si vous avez choisi primordal, vous êtes un orateur vert. Ce choix ne peut être changé. Vous obtenez un tour de magie de la liste de sorts choisie. Vous pouvez lancer ce sort comme un sort inné à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur."
            ]
        },
        {
            "name"        : "Centaure au coeur robuste",
            "general_desc": [
                "Vous êtes un centaure robuste, à l'allure ferme et au cœur solide. Vous obtenez 10 Points de vie de votre ascendance au lieu de 8 et obtenez un bonus de circonstances de +1 aux tests d'Acrobaties pour sports_martial_artsGarder l'équilibre et à votre jet de Réflexes pour éviter les crocs-en-jambe."
            ]
        },
        {
            "name"        : "Centaure fersabot",
            "general_desc": [
                "Vos sabots sont incroyablement puissants et vous servent d'armes formidables. Vous obtenez une attaque à mains nues de sabot qui infligent 1d6 dégâts contondants. Vos sabots sont dans le groupe pugilat et possèdent les traits finesse et à mains nues."
            ]
        },
        {
            "name"        : "Centaure file au vent",
            "general_desc": [
                "Vous êtes élancé et capable d'atteindre des vitesses incroyables grâce à vos seuls sabots. Votre vitesse augmente de 1,50 mètre."
            ]
        },
        {
            "name"        : "Centaure moucheté",
            "general_desc": [
                "Votre pelage est tacheté ou rayé, ce qui vous permet de vous camoufler naturellement dans votre environnement. Choisissez un terrain parmi les suivants : arctique, désert, forêt, marais, montagne ou plaines. Sur le terrain choisi, vous obtenez un bonus de circonstances de +1 aux tests de Discrétion pour sports_martial_artsVous cacher ou sports_martial_artsÊtre furtif et aux tests de Duperie pour sports_martial_artsFeinter ."
            ]
        },
        {
            "name"        : "Changelin",
            "general_desc": [
                "Votre mère était une guenaude. Vos yeux vairons sont la plus visible des marques de cette parenté mais vous pourriez avoir aussi une carrure plus maigre, une peau plus pâle et des cheveux plus noirs que la majorité des membres de votre parentèle. Vous obtenez le trait changelin. Vous obtenez aussi vision nocturne ou vision dans le noir si votre ascendance possède déjà vision nocturne. Vous pouvez choisir vos dons ancestraux parmi les dons des changelins et parmi les dons de l'ascendance de votre autre parent chaque fois que vous obtenez un don ancestral."
            ]
        },
        {
            "name"        : "Crépusculaire",
            "general_desc": [
                "Suite à un ancien marché, votre âme a été réincarnée en tant que crépusculaire, un scion planaire avec un lien à l'égard des psychopompes et du Cimetière. Vous obtenez le trait crépusculaire. Vous obtenez aussi vision nocturne ou vous obtenez vision dans le noir si votre ascendance bénéficie déjà de la vision nocturne. Ni votre corps, ni votre esprit ne peuvent jamais devenir mort-vivant. Vous pouvez choisir vos dons ancestraux parmi les dons des crépusculaires ou ceux de votre autre ascendance lorsque vous obtenez un don ancestral."
            ]
        },
        {
            "name"        : "Dhampir",
            "general_desc": [
                "Vous êtes l'engeance d'un vampire, moitié vivant et moitié mort-vivant, doté d'un charme et d'une grâce extraordinaires, un teint blafard et des incisives allongées. Vous obtenez le trait dhampir, en plus des traits de votre ascendance. Vous avez la capacité guérison du vide, ce qui signifie que vous êtes blessé par les dégâts de vitalité et soigné par les effets de vide comme si vous étiez un mort-vivant. Vous obtenez aussi vision nocturne ou vision dans le noir si votre ascendance possède déjà vision nocturne. Vous pouvez choisir parmi les dons de dhampir et ceux de votre autre ascendance lorsque vous obtenez un don ancestral."
            ]
        },
        {
            "name"        : "Dromaar",
            "general_desc": [
                "La force des orcs renforce votre lignée. Votre peau aux nuances verdâtres et d'autres indicateurs de votre héritage orque. Vous obtenez le trait orc, le trait dromaar et la vision nocturne. Lorsque vous obtenez un don ancestral, vous pouvez le choisir parmi la liste de dons des orcs, des dromaars et celle de votre ascendance."
            ]
        },
        {
            "name"        : "Elfe ancien",
            "general_desc": [
                "Durant votre longue vie, vous avez emprunté de nombreux chemins et de nombreux styles. Un elfe ancien typique est âgé d'au moins 100 ans mais peut être plus jeune à la discrétion du MJ. Choisissez une classe autre que la vôtre. Vous obtenez le don de dévouement multiclasse de cette classe, même si vous n'en remplissez pas les conditions de niveau. Vous devez toujours remplir les autres prérequis pour obtenir le don."
            ]
        },
        {
            "name"        : "Elfe arctique",
            "general_desc": [
                "Vous vivez dans les profondeurs glacées du Nord et avez développé une incroyable endurance aux environnements froids, qui vous confère une résistance au froid égale à la moitié de votre niveau (avec un minimum de 1). Vous subissez tous les effets environnementaux liés au froid comme si leur intensité était réduite d'un rang (le froid extraordinaire devient extrême, le froid extrême devient important, etc.)."
            ]
        },
        {
            "name"        : "Elfe des bois",
            "general_desc": [
                "Vous vous êtes adapté à la vie dans la forêt, la jungle profonde ou tout autre environnement similaire et vous savez comment grimper aux arbres et utiliser le feuillage à votre avantage. Quand vous sports_martial_artsEscaladez les arbres, les lianes ou dans les frondaisons, vous vous déplacez à la moitié de votre Vitesse en cas de succès et à votre Vitesse en cas de succès critique (et vous vous déplacez à votre vitesse totale si vous possédez le don military_techEscalade rapide en cas de succès). Cela ne vous affecte pas si vous utilisez une Vitesse d'escalade.",
                "Vous pouvez toujours utiliser l'action sports_martial_artsSe mettre à l'abri quand vous vous trouvez sur un terrain forestier pour obtenir un abri, même si vous ne vous trouvez pas près d'un obstacle derrière lequel vous Mettre à l'abri."
            ]
        },
        {
            "name"        : "Elfe des cavernes",
            "general_desc": [
                "Vous êtes né ou avez passé de nombreuses années dans des tunnels souterrains ou des cavernes où la lumière est rare. Vous obtenez vision dans le noir."
            ]
        },
        {
            "name"        : "Elfe des murmures",
            "general_desc": [
                "Vous avez l'ouïe fine, capable de détecter même les plus légers chuchotements. Vous obtenez un bonus de circonstances de +2 lorsque vous utilisez votre ouïe en utilisant l'action sports_martial_artsChercher pour trouver des créatures sentiment_very_dissatisfiedCachées ou sentiment_very_dissatisfiedNon détectées qui se trouvent à moins de 9 mètres de vous.",
                "Lorsque vous ciblez un adversaire qui vous est sentiment_very_dissatisfiedMasqué ou Caché, vous réduisez le DD du test nu à 3 si la cible est Masquée et à 9 si la cible est Cachée. Cet avantage ne s'applique pas si vous ne pouvez entendre ou si la créature est incapable de produire un son (par exemple, si elle est affectée par un sort de auto_awesomeSilence )."
            ]
        },
        {
            "name"        : "Elfe visionnaire",
            "general_desc": [
                "Vous avez le pouvoir inné de détecter et comprendre les phénomènes magiques. Vous pouvez lancer le tour de magie auto_awesomeDétection de la magie comme un sort inné arcanique à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur.",
                "En outre, vous obtenez un bonus de circonstances de +1 à vos tests pour sports_martial_artsIdentifier la magie et sports_martial_artsDéchiffrer un texte de nature magique. Ces actions utilisent généralement les compétences Arcanes, Nature, Occultisme ou Religion."
            ]
        },
        {
            "name"        : "Gnome béni des fées",
            "general_desc": [
                "Le sang des fées coule dans vos veines, vous saturant de leur magie et vous transformant en l'une d'elle. Vous obtenez le trait fée, en plus des traits gnome et humanoïde. Choisissez un tour de magie dans la liste des sorts primordiaux. Vous pouvez Lancer ce tour de magie comme un sort inné primordial à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur. Une fois par jour, vous pouvez échanger ce tour de magie contre un autre choisi dans la même liste en méditant pour vous réaligner avec le Premier Monde. Il s'agit d'une activité qui dure 10 minutes qui possède le trait concentration."
            ]
        },
        {
            "name"        : "Gnome caméléon",
            "general_desc": [
                "La couleur de vos cheveux et de votre peau peut évoluer, peut-être grâce à la magie latente des influences du Premier Monde ou d'effets d'illusions persistantes. Vous pouvez lentement modifier l'éclat et la couleur exacte et cette coloration peut être différente selon les parties de votre corps, vous permettant de créer des motifs ou des dessins colorés. Il vous suffit d'une action unique pour effectuer des changements mineurs et localisés sur votre corps ou vous pouvez consacrer une heure aux changements importants qui affectent alors votre corps entier. Quand vous dormez, ces couleurs changent naturellement en fonction de vos rêves et vous vous réveillez chaque matin avec un coloris inattendu. Lorsque vous vous trouvez dans un endroit où votre coloration est proche de la couleur de votre environnement (par exemple, un vert végétal dans une forêt), vous pouvez utiliser l'action unique pour faire des modifications mineures et localisées pour mieux vous fondre dans votre environnement. Vous obtenez ainsi un bonus de circonstances de +2 à vos tests de Discrétion jusqu'à ce que votre environnement change de couleur ou de motifs."
            ]
        },
        {
            "name"        : "Gnome ombral",
            "general_desc": [
                "Que ce soit par un lien avec les fées sombres ou les fées des ombres, avec les gnomes des profondeurs (aussi appelés les drathnelar) ou d'une autre origine, vous pouvez voir dans le noir total. Vous obtenez Vision dans le noir."
            ]
        },
        {
            "name"        : "Gnome sensitif",
            "general_desc": [
                "Par rapport à vos congénères, vous voyez toutes les couleurs avec plus d'intensité, vous entendez les sons avec plus de finesse et vous pouvez identifier les innombrables nuances qui composent une odeur. Vous gagnez le sens spécial : odorat imprécis avec une portée de 9 mètres. Cela signifie que vous pouvez utiliser votre odorat pour déterminer l'emplacement exact d'une créature. Le MJ double généralement la portée de ce pouvoir si vous êtes sous le vent par rapport à cette créature, ou la divise par deux si c'est l'inverse.",
                "En outre, vous obtenez un bonus de circonstances de +2 à vos tests de Perception à chaque fois que vous tentez de localiser une créature non détectée qui se trouve à la portée de votre odorat."
            ]
        },
        {
            "name"        : "Gnome source",
            "general_desc": [
                "Une autre source de magie a pris l'ascendant sur la magie primordiale de votre ascendance féerique. Cette connexion peut provenir d'un plan occulte ou d'un ancien chant occulte, être liée à une divinité, un céleste ou un fiélon, être le fruit de la pollution laissée par une guerre entre mages ou une antique magie runique.",
                "Choisissez entre les traditions arcanique, divine ou occulte. Vous obtenez un tour de magie choisi dans la liste de sorts de cette tradition. Vous pouvez Lancer ce sort à volonté sous la forme d'un sort inné de la tradition que vous avez choisie. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur. À chaque fois que vous devriez obtenir un sort inné primordial grâce à un don ancestral gnome, remplacez la tradition primordiale qui lui est associée par celle que vous avez choisie."
            ]
        },
        {
            "name"        : "Gobelin Boyaud'fer",
            "general_desc": [
                "Vous pouvez vous nourrir d'aliments que la plupart des gens considéreraient comme avariés. Quand vous vous trouvez dans une agglomération, tant qu'il y a des ordures disponibles, vous pouvez vous nourrir convenablement avec de maigres repas, sans devoir utiliser l'activité d'intermède sports_martial_artsSubsister . Vous pouvez manger et boire même quand vous êtes sentiment_very_dissatisfiedNauséeux .",
                "Vous obtenez un bonus de circonstances de +2 à vos jets de sauvegarde contre les afflictions, contre l'état Nauséeux et pour supprimer l'état Nauséeux. Quand vous obtenez un succès sur un jet de Vigueur affecté par ce bonus, vous bénéficiez d'un succès critique. Tous ces avantages ne s'appliquent que lorsque l'affliction ou l'état résulte de quelque chose que vous avez ingéré."
            ]
        },
        {
            "name"        : "Gobelin Dent'rasoir",
            "general_desc": [
                "Dans votre famille, les dents constituent des armes formidables. Vous obtenez une attaque à mains nues de mâchoires qui inflige 1d6 dégâts perforants. Vos mâchoires font partie du groupe pugilat et possèdent les traits finesse et mains nues."
            ]
        },
        {
            "name"        : "Gobelin des neiges",
            "general_desc": [
                "Vous vous êtes acclimaté à la vie dans les terres glacées. Votre carnation se situe entre le bleu clair et le bleu marine. Vous êtes également couvert d'une fourrure bleue. Vous obtenez une résistance au froid égale à la moitié de votre niveau (avec un minimum de 1). Vous subissez tous les effets environnementaux liés au froid comme si leur intensité était réduite d'un rang (le froid extraordinaire devient extrême, le froid extrême devient important, etc.)."
            ]
        },
        {
            "name"        : "Gobelin Incassable",
            "general_desc": [
                "Votre crâne exceptionnellement épais, vos os cartilagineux et de nombreuses autres particularités physiques vous permettent de vous remettre promptement de vos blessures. Votre ascendance vous fait gagner 10 Points de vie au lieu de 6. Quand vous tombez, les dégâts que vous subissez correspondent à ceux d'une chute deux fois moins importante."
            ]
        },
        {
            "name"        : "Gobelin peaud'charbon",
            "general_desc": [
                "Vos ancêtres ont toujours eu une connexion avec le feu et une peau plus épaisse que la norme, qui vous permet de mieux résister au feu. Vous obtenez une résistance au feu égale à la moitié de votre niveau (avec un minimum de 1). Vous vous remettez également plus vite des brûlures causées par le feu. Votre test nu pour guérir des dégâts de feu persistants se fait contre un DD 10 au lieu de 15 et est réduit à un casinoTest nu, DD 5 si une autre créature utilise une action particulièrement adaptée pour vous aider."
            ]
        },
        {
            "name"        : "Grand kholo",
            "general_desc": [
                "Vous êtes un kholo grand et puissant, avec une fourrure fauve et des taches brunes sur votre peau. Vous obtenez 10 Points de vie du fait de votre ascendance au lieu de 8 et bénéficiez d'un bonus de circonstances de +1 aux tests d'Athlétisme pour sports_martial_artsRepositionner , sports_martial_artsPousser ou faire un sports_martial_artsCroc-en-jambe à vos ennemis."
            ]
        },
        {
            "name"        : "Halfelin bois-sauvage",
            "general_desc": [
                "Vous émergez des profondeurs de la jungle ou de la forêt et vous avez appris à utiliser votre petite taille pour vous faufiler à travers les sous-bois et autres obstacles. Vous ignorez les terrains difficiles provoqués par les plantes et les champignons, comme les broussailles, les lianes et les sous-bois."
            ]
        },
        {
            "name"        : "Halfelin des collines",
            "general_desc": [
                "Habitué à la vie calme dans les collines, votre peuple trouve le repos et la relaxation réconfortants, plus particulièrement quand vous profitez des joies du confort. Quand vous regagnez des Points de vie pendant la nuit, ajoutez votre niveau aux PV récupérés. Quand quelqu'un fait appel à la compétence Médecine pour sports_martial_artsSoigner vos blessures , vous pouvez manger un en-cas pour ajouter votre niveau aux Points de vie que vous récupérez de ce traitement."
            ]
        },
        {
            "name"        : "Halfelin du crépuscule",
            "general_desc": [
                "Vos ancêtres ont accompli de nombreux actes secrets sous le couvert du crépuscule, que ce soit en bien ou en mal, et avec le temps, ils ont développé une capacité à voir dans la pénombre qui dépasse même l'acuité visuelle habituelle des halfelins. Vous obtenez de vision nocturne."
            ]
        },
        {
            "name"        : "Halfelin flegmatique",
            "general_desc": [
                "Votre lignée est réputée pour garder la tête froide et résister à la panique dans les pires situations. Lorsque vous obtenez un succès sur un jet de sauvegarde contre un effet d'émotion, il devient un succès critique."
            ]
        },
        {
            "name"        : "Halfelin nomade",
            "general_desc": [
                "Vos ancêtres parcourent les routes depuis des générations, sans jamais avoir ressenti la nécessité de s'installer quelque part. Vous gagnez deux langues de votre choix parmi les langues courantes et peu courantes auxquelles vous avez accès et, à chaque fois que vous choisissez le don military_techPolyglotte , Vous obtenez une langue supplémentaire."
            ]
        },
        {
            "name"        : "Halfelin portepoisse",
            "general_desc": [
                "Vous êtez né avec une étrange bénédiction : à l'inverse de la chance halfeline typique, vous pouvez à la place manipuler le destin des autres. Vous ne pouvez jamais prendre le don military_techChance halfeline et vous obtenez l'action sports_martial_artsPorter la poisse ."
            ]
        },
        {
            "name"        : "Hobgobelin commandant d'avortons",
            "general_desc": [
                "Vous descendez d'une longue lignée de hobgobelins qui ont dirigé des gobelins. Vous êtes plus petit que les autres hobgobelins, mais les gobelins écoutent toujours chacun des ordres que vous beuglez. Vous obtenez le don de compétence military_techContraindre un groupe . Si vous obtenez un succès sur un test d'Intimidation pour sports_martial_artsContraindre un gobelin, il devient un succès critique. Si vous obtenez un échec critique, il devient un échec."
            ]
        },
        {
            "name"        : "Hobgobelin courtespattes",
            "general_desc": [
                "Vous avez un torse plus long et des épaules plus larges que la plupart des hobgobelins, de sorte que vos jambes semblent plus courtes en comparaison. Cela vous donne une ceinture abdominale forte et muclée et abaisse votre centre de gravité — traits qui vous aident sur une monture et à grimper — et vous êtes entraîné à monter en selle à un âge particulièrement jeune. Vous obtenez le don military_techChevaucher . De plus, vous n'êtes pas sentiment_very_dissatisfiedPris au dépourvu lorsque vous Escaladez."
            ]
        },
        {
            "name"        : "Hobgobelin fléau elfique",
            "general_desc": [
                "Les hobgobelins furent conçus il y a longtemps à partir des gobelins féconds mais peu fiables, pour servir d'armée contre les elfes. Bien que les elfes aient fini par libérer les hobgobelins de leur servitude, certains hobgobelins ont conservé leur résistance ancestrale à la magie, à laquelle ils se réfèrent sous le nom de \"magie elfique\". Vous obtenez la réaction sports_martial_artsRésister à la magie elfique ."
            ]
        },
        {
            "name"        : "Hobgobelin marchebataille",
            "general_desc": [
                "Vous descendez d'une lignée de mercenaires errants, constamment en marche et récupérant de la nourriture au long du chemin. Si vous obtenez un échec, mais pas un échec critique, pour sports_martial_artsSubsister dans les étendues sauvages, vous parvenez toujours à vous nourrir vous-même avec des piteux repas. Lorsque vous explorez, vous pouvez sports_martial_artsVous empresser deux fois plus longtemps avant de devoir vous arrêter."
            ]
        },
        {
            "name"        : "Hobgobelin sapeur",
            "general_desc": [
                "Votre famille comprend des alchimistes, ingénieurs et scientifiques depuis des générations, travaillant sur des projets qui apportent de la fumée et du feu sur le champ de bataille. Vous obtenez une résistance au feu égale à la moitié de votre niveau (minimum 1). Vous obtenez automatiquement un succès sur le test nu DD 5 pour cibler une créature sentiment_very_dissatisfiedMasquée si cette créature est camouflée uniquement par la fumée."
            ]
        },
        {
            "name"        : "Hobgobelin terrierné",
            "general_desc": [
                "Vos ancêtres vivaient sous terre. Vos oreilles sont plus grandes que celles des autres hobgobelins et sensibles aux échos. Lorsque vous êtes sous terre, quand vous ciblez une cible qui vous est sentiment_very_dissatisfiedMasquée ou sentiment_very_dissatisfiedCachée , réduisez le DD du test nu à 3 pour une cible masquée et à 9 pour une cible Cachée. De plus, si vous obtenez un succès sur un test d'Acrobaties pour sports_martial_artsVous faufiler , il devient un succès critique."
            ]
        },
        {
            "name"        : "Homme poisson des abysses",
            "general_desc": [
                "Vous vivez loin, loin sous la surface de l'océan. Votre queue de poisson pourrait ressembler à celle d'un poisson vipère ou d'une baudroie et vous pourriez avoir des yeux lumineux ou une peau translucide. L'homme-poisson abyssal possèdent une réputation troublante, mais ils peuvent exister même dans les royaumes les moins illuminés. Vous obtenez vision dans le noir et êtes immunisée à la pression écrasante des profondeurs océaniques."
            ]
        },
        {
            "name"        : "Homme-félin aux neuf vies",
            "general_desc": [
                "Votre famille a toujours semblé se remettre des désastres, pas tant par le biais d'une nature robuste ou d'une compétence particulière, mais davantage grâce à la chance. Les autres hommes-félins murmurent que vous possédez neuf vies. Lorsque vous êtes sentiment_very_dissatisfiedMourant vous n'ajoutez pas la valeur de l'état Mourant au DD de vos tests de récupération (ce qui signifie que le DD est habituellement de 10). De plus vous obtenez le don général military_techDur à cuire ."
            ]
        },
        {
            "name"        : "Homme-félin aux oreilles pointues",
            "general_desc": [
                "Vous êtes né avec des grandes oreilles expressives qui se meuvent en fonction de votre humeur et se redressent au moindre son inattendu. Vous obtenez un bonus de circonstances de +2 pour localiser les créatures Non détectées que vous pouvez entendre dans les 9 mètres en utilisant une action sports_martial_artsChercher . Tant que vous êtes conscient de la présence d'une créature par le son, une fois par round, vos oreilles peuvent vous aider à sports_martial_artsSignaler la créature à tous les alliés par une action gratuite."
            ]
        },
        {
            "name"        : "Homme-félin chasseur",
            "general_desc": [
                "Vous descendez d'une longue lignée de chasseurs et de pisteurs talentueux et avez développé un sens particulièrement aigu de l'odorat. Vous obtenez un odorat imprécis avec une portée de 9 mètres. Cela signifie que vous pouvez utilisez votre sens de l'odorat pour déterminer l'emplacement d'une créature. Le MJ doublera normalement la portée si vous êtes sous le vent par rapport à la créature ou la divisera par deux si vous êtes contre le vent.",
                "De plus, vous obtenez un bonus de circonstances de +2 au test pour sports_martial_artsPister une créature ou un objet si vous l'avez senti auparavant."
            ]
        },
        {
            "name"        : "Homme-félin de la jungle",
            "general_desc": [
                "Vous descendez d'arpenteurs de la jungle et pouvez vous déplacer rapidement dans les broussailles et les sous-bois. Vous ignorez le terrain difficile des sous-bois et le terrain très difficile des sous-bois n'est qu'un terrain difficile pour ce qui vous concerne."
            ]
        },
        {
            "name"        : "Homme-félin griffu",
            "general_desc": [
                "Votre famille possède des griffes particulièrement longues et aiguisées capables de délivrer des blessures sanglantes par un coup traitre. Vous obtenez une attaque à mains nues de griffe qui inflige 1d6 dégâts tranchants. Vos griffes font partie du groupe pugilat et possèdent les traits agile, finesse et à mains nues."
            ]
        },
        {
            "name"        : "Homme-félin hivernal",
            "general_desc": [
                "Vous possédez une fourrure épaisse qui vous protège du froid. Vous obtenez une résistance au froid égale à la moitié de votre niveau (minimum 1). Vous traitez les effets de froid liés à l'environnement comme s'ils étaient d'un niveau moins extrême qu'ils ne le sont (froid extraordinaire devient extrême, froid extrême devient important, etc...)."
            ]
        },
        {
            "name"        : "Homme-félin liminaire",
            "general_desc": [
                "Vous avez hérité d'une proximité avec les lointains confins du monde, là où les frontières entre les dimensions deviennent minces. Vous pouvez lancer auto_awesomeDétection de la magie comme un tour de magie occulte inné à volonté. Un tour de magie est intensifié à la moitié de votre niveau, arrondi au supérieur. Vous obtenez aussi un bonus de circonstances de +1 aux tests d'Occultisme pour sports_martial_artsVous souvenir au sujet de créatures qui ont pour origine d'autres Plans que l'Univers."
            ]
        },
        {
            "name"        : "Homme-lézard à collerette",
            "general_desc": [
                "Vous pouvez gonfler votre collerette autour du cou et tordre votre épine dorsale pour Démoraliser vos ennemis. Lorsque vous le faites, sports_martial_artsDémoraliser perd le trait audible et obtient le trait visuel et vous ne subissez pas de pénalité lorsque vous essayez de Démoraliser une créature qui ne comprend pas votre langue. Vous obtenez également l'action sports_martial_artsApproche menaçante ."
            ]
        },
        {
            "name"        : "Homme-lézard arboricole",
            "general_desc": [
                "Vous vous déplacez facilement à travers les forêts épaisses et la jungle en utilisant chaque branche ou chaque buisson. Vous pouvez toujours utiliser l'action sports_martial_artsMise à l'abri lorsque vous êtes en forêt ou dans la jungle pour obtenir un abri même si vous n'êtes pas proche d'un obstacle qui vous permettrait normalement de vous Mettre à l'abri derrière. Vous obtenez le don military_techTraqueur de terrain même si vous n'êtes pas qualifié en Discrétion et vous devez choisir sous-bois comme terrain choisi."
            ]
        },
        {
            "name"        : "Homme-lézard arpenteur des sables",
            "general_desc": [
                "Vos écailles épaisses vous aident à retenir l'eau et à combattre la brûlure du soleil. Vous obtenez une résistance au feu égale à la moitié de votre niveau (minimum 1). Les effets de chaleur de votre environnement sont d'un rang moins extrêmes pour vous et vous pouvez tenir 10 fois plus longtemps que la normale avant d'être affecté par la faim ou la soif. Quoi qu'il en soit, à moins de protéger un équipement protecteur ou de trouver refuge, les effets de froid dus à votre environnement sont un rang plus extrême pour vous."
            ]
        },
        {
            "name"        : "Homme-lézard des terres humides",
            "general_desc": [
                "Votre famille descend du plus commun des héritages des hommes-lézards et vous êtes accoutumé aux environnements aquatiques. Vous obtenez une Vitesse de nage de 4,50 mètres."
            ]
        },
        {
            "name"        : "Homme-lézard écaille de falaise",
            "general_desc": [
                "Vos orteils se sont adaptés pour agripper et escalader. Vous obtenez le don military_techCombattant-grimpeur comme don supplémentaire et aussi longtemps que vous ne portez rien aux pieds, vous pouvez utilisez les coussinets collants sur vos pieds pour escalader, en gardant vos mains libres. De plus, si vous obtenez un succès sur un test d'Athlétisme pour Escalader, il devient un succès critique."
            ]
        },
        {
            "name"        : "Homme-lézard mimétique",
            "general_desc": [
                "Vous pouvez changer la couleur de votre peau pour vous fondre dans votre environnement, effectuant des changements mineurs avec une action unique et des changements importants au bout d'une heure. Lorsque vous êtes dans une zone où votre coloration est vaguement similaire à l'environnement (par exemple, vert forêt dans une forêt), vous pouvez utilisez l'action mineure, unique de cette capacité pour opérer des changements localisés qui vous aident à vous fondre dans votre environnement, obtenant un bonus de circonstances de +2 aux tests de Discrétion jusqu'à ce que votre environnement change de coloration ou de motif."
            ]
        },
        {
            "name"        : "Homme-lézard sautenuage",
            "general_desc": [
                "Votre corps est léger avec des rabats de peau le long de vos membres qui captent l'air qui passe en dessous de vous. Tant que vous pouvez agir et que vous avez assez de place vous pouvez ouvrir ces rabats pour ralentir toute chute, juste assez pour éviter de subir des dégâts (déterminer si vous avez assez d'espace est laissé à la discrétion du MJ)."
            ]
        },
        {
            "name"        : "Homme-poisson à queue de poisson",
            "general_desc": [
                "La partie basse de votre corps ressemble à une puissante queue de poisson, qui se termine par une grande nageoire dosrale. En utilisant cette nageoire, vous pouvez vous déplacer à travers l'eau plus vite et bondir plus loin. Votre vitesse de nage passe à 9 mètres. Lorsqeu vous tentez un sports_martial_artsSaut en hauteur ou un sports_martial_artsSAut en longueur , vous obtenez un bonus de circonstances de +1 au test d'Athlétisme et vous pouvez Nager au lieu de Marcher rapidement avant de tenter le saut."
            ]
        },
        {
            "name"        : "Homme-poisson carcharodon",
            "general_desc": [
                "En tant que redoutable homme-poisson requin, le bas de votre corps est semblable à celui de l'un des plus grands prédateurs de l'océan. Comme un requin, vous pouvez sentir le sang à une certaine distance. Vous obtenez odorat comme un sens imprécis avec une portée de 9 mètres. Quoi qu'il en soit, vous pouvez sentir le sang répandu à une portée de 36 m dans l'air et à 150 m dans l'eau."
            ]
        },
        {
            "name"        : "Homme-poisson des récifs",
            "general_desc": [
                "Vous avez été élevé parmi les coraux colorés et dans les écoles de poissons tropicaux. Comparé à la plupart des hommes-poissons, votre corps est est très coloré, avec des rayures, des taches et des motifs comme le poisson-clown ou le poisson-ange. Vous êtes habitué aux habitants occasionnellement toxiques de votre foyer et n'êtes pas très ennuyé par les piqûres ou les poisons mesquins. Vous obtenez une résistance contre les poisons égal à la moitié de votre niveau (minimum 1) et chacun de vos jets de sauvegarde contre une affliction de poison réduit son stade de 2 ou de 1 pour un poison virulent. Chaque succès critique contre un poison qui vous affecte réduit son stade de 3 ou de 2 pour un poison virulent."
            ]
        },
        {
            "name"        : "Homme-poisson pélagique",
            "general_desc": [
                "Vous êtes un homme-poisson de la haute-mer. Votre queue a le même dessin que le thon argenté et le hareng qui se regroupent par millions dans vos zones de chasse. L'eau obéit à votre volonté et d'un mot rapide, vous pouvez dégainer autour de vous un fourreau liquide. Vous obtenez l'action sports_martial_artsVague protectrice ."
            ]
        },
        {
            "name"        : "Humain polyvalent",
            "general_desc": [
                "La polyvalence et l'ambition des humains leur ont permis d'accéder au statut d'ascendance majoritaire dans la plupart des nations du monde. Choisissez un don général dont vous remplissez les prérequis (comme pour votre don ancestral, vous pouvez choisir ce don général à tout moment durant la création de votre personnage)."
            ]
        },
        {
            "name"        : "Humain talentueux",
            "general_desc": [
                "Votre sagacité vous permet d'être formé à de nombreuses compétences. Vous devenez qualifié dans une compétence de votre choix. Au niveau 5, vous atteignez le degré de maîtrise expert dans cette compétence."
            ]
        },
        {
            "name"        : "Kholo à haleine douce",
            "general_desc": [
                "Vous êtes un kholo rayé, à la fourrure pâle, avec une haleine étrangement agréable que vous pouvez utiliser pour attirer vos proies. Vous êtes qualifié en Diplomatie (ou une autre compétence si vous étiez déjà qualifié en Diplomatie). Vous obtenez également un bonus de circonstances de +1 aux tests pour Faire bonne impression si la cible peut sentir votre haleine."
            ]
        },
        {
            "name"        : "Kholo cavernicole",
            "general_desc": [
                "Les conteurs racontent des récits anciens affirmant que les kholos ont vécu dans des cavernes souterraines avant que l'essentiel de leur espèce s'aventure à la lumière. Vous êtes un rappel de ces récits anciens, avec un torse large et des marques qui ressemblent à des parenthèses blanches au lieu de points. Vos yeux se sont développés pour voir de manière parfaite dans l'obscurité, un avantage considérable pour votre clan. Vous obtenez vision dans le noir."
            ]
        },
        {
            "name"        : "Kholo chien",
            "general_desc": [
                "Vous êtes un kholo au corps agile avec une constitution préhistorique, ressemblant à celle d'un chien. Bien que vous vous déplaciez typiquement comme un quadrupède, vous pouvez toujours vous tenir debout et combattre comme un bipède, vous permettant d'utiliser tout votre équipement normalement. Si vous disposez de vos deux mains libres, votre Vitesse passe à 9 mètres lorsque vous courez sur vos quatre pattes."
            ]
        },
        {
            "name"        : "Kholo fourmi",
            "general_desc": [
                "Vous êtes un kholo d'un mètre de haut, aux grandes oreilles et au visage anguleux. Beaucoup sont sceptiques sur le fait que soyez réellement un kholo. Votre taille est petite au lieu de moyenne. Vous êtes qualifié en Duperie (ou dans une autre compétence si vous êtes déjà qualifié en Duperie). Vous obtenez un bonus de circonstances de +1 aux tests de Duperie pour Mentir lorsque vous clamez spécifiquement votre innocence, aux DD de Duperie contre les tests pour sports_martial_artsDeviner les intentions pour découvrir de tels mensonges et aux tests d'initiative lorsque vous faites un test de Duperie pour déterminer l'initiative."
            ]
        },
        {
            "name"        : "Kholo hivernal",
            "general_desc": [
                "Vous êtes un kholo endurci couvert d'une épaisse fourrure duveteuse qui vous rend capable de survivre durant les rudes hivers sur les territoires les plus froids. Vous obtenez une résistance au froid égale à la moitié de votre niveau (minimum 1). Vous considérez les effets de froid environnemental comme s'ils étaient d'un cran moins extrême (le froid incroyable devient extrême, le froid extrême devient sévère, etc)."
            ]
        },
        {
            "name"        : "Kholo sorcier",
            "general_desc": [
                "Vous êtes un kholo hirsute à la fourrure sombre capable de produire des sons vraiment étranges. Vous pouvez lancer le tour de magie auto_awesomeFantasme comme un sort inné occulte à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur. De plus, vous obtenez un bonus de circonstances de +1 aux tests pour vous Déguiser et pour sports_martial_artsFaire diversion lorsque vous utilisez uniquement votre voix."
            ]
        },
        {
            "name"        : "Kobold à écailles de dragon",
            "general_desc": [
                "Du fait de l'association de votre terrier avec un dragon, vos écailles sont plus robustes que celles des autres kobolds. Vous obtenez 10 Points de vie de votre ascendance au lieu de 6. Vous obtenez un bonus de circonstances de +1 contre le souffle de dragon, les effets avec le trait sommeil et les effets qui vous rendraient sentiment_very_dissatisfiedParalysé ."
            ]
        },
        {
            "name"        : "Kobold à forte mâchoire",
            "general_desc": [
                "Votre lignée est réputée pour ses puissantes mâchoires et ses dents aiguisées, soit pour vous protéger des prédateurs naturels soit par respect pour un animal puissant. Vous obtenez une attaque à mains nues de mâchoires qui inflige 1d6 dégâts perforants. Vos mâchoires font partie du groupe pugilat et possèdent les traits finesse et à mains nues."
            ]
        },
        {
            "name"        : "Kobold à queue venimeuse",
            "general_desc": [
                "Du fait d'une créature venimeuse à proximité de votre terrier, vous êtes né avec une queue vestigiale qui sécrète un venin mortel. Vous obtenez l'action sports_martial_artsQueue à toxine ."
            ]
        },
        {
            "name"        : "Kobold cavernicole",
            "general_desc": [
                "Vous avez éclos dans un terrier comportant d'étroits tunnels qui était également l'antre d'une énergie primordiale terrestre, ce qui vous a rendu agile et souple. Lorsque vous sports_martial_artsEscaladez des murs de roche, des stalactites et d'autres caractéristiques naturelles en pierre, vous vous déplacez à la moitié de votre Vitesse en cas de succès et à votre pleine Vitesse en cas de succès critique (et vous vous déplacez à votre pleine Vitesse sur un succès si vous possédez le don military_techEscalade rapide ). Cela ne vous affecte pas si vous utilisez une Vitesse d'escalade.",
                "Si vous obtenez un succès sur un test d'Acrobaties pour sports_martial_artsVous faufiler , il devient un succès critique."
            ]
        },
        {
            "name"        : "Kobold coeur des éléments",
            "general_desc": [
                "Lorsque vous avez éclos, vous vous êtes imprégné d'une créature fortement associée avec l'un des plans élémentaires, tel qu'un élémentaire ou un génie. Choisissez votre bienfaiteur élémentaire parmi air, bois, eau, feu, métal ou terre. Vous obtenez une résistance égale à la moitié de votre niveau (minimum 1) contre les dégâts associés à votre bienfaiteur élémentaire : froid pour l'air, électricité pour la terre, feu pour le feu, son pour le métal, acide pour l'eau ou poison pour le bois."
            ]
        },
        {
            "name"        : "Kobold Cornesort",
            "general_desc": [
                "Depuis votre éclosion au voisinage d'une source de magie puissante, une trace reste et coule dans vos veines. Choisissez un tour de magie courant de la liste de sort arcanique. Vous pouvez Lancer ce sort comme un sort inné arcanique à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur. Vous êtes qualifié en modificateur d'attaque de sorts et en DD de sort et votre attribut essentiel d'incantation est le Charisme."
            ]
        },
        {
            "name"        : "Kobold Tunnelinondé",
            "general_desc": [
                "Vous avez grandi dans un terrier traversé de passages sous l'eau, qu'ils soient naturels ou aient été creusés et avez été influencé par une entité aquatique ou un être des eaux primordiales. Vous obtenez une Vitesse de Nage de 4,50 mètres."
            ]
        },
        {
            "name"        : "Léchi algue",
            "general_desc": [
                "Votre corps est constitué d'algues entremêlées et vous vous sentez aussi à l'aise sous l'eau qu'à la surface. Vous obtenez une Vitesse de nage de 6 m et vous pouvez toujours respirer sous l'eau. Quoiqu'il en soit, votre Vitesse au sol est réduite de 1,50 mètre (soit 6 m pour la plupart des léchis algues)."
            ]
        },
        {
            "name"        : "Léchi cactus",
            "general_desc": [
                "Des épines couvrent votre corps. Vous obtenez une attaque à mains nues d'épine qui inflige 1d6 dégâts perforants. Vos épines sont dans le groupe pugilat et possèdent les traits finesse et à mains nues."
            ]
        },
        {
            "name"        : "Léchi calebasse",
            "general_desc": [
                "Vous avez une grosse calebasse à la place d'un crâne et comme vous n'avez pas de cerveau physique, vous pouvez utiliser l'espace à l'intérieur de votre tête. Vous pouvez emmagasiner une collection de petits objets dans la limite d'1 Encombrement à l'intérieur de votre tête. Le DD des tests pour sports_martial_artsVoler des objets qui s'y trouvent augmente de 4. De plus, si vous ne stockez qu'un unique objet à l'intérieur de votre tête, vous pouvez le retirer sans effort dans votre main comme partie d'une autre action pour utiliser l'objet. Dégainer l'objet donne à cette autre action le trait manipulation."
            ]
        },
        {
            "name"        : "Léchi feuillu",
            "general_desc": [
                "Votre corps est principalement fait de feuillage naturel et, comme une feuille tombant d'un arbre, vous aterrissez avec une grace particulière lorsque vous chutez. Vous ne subissez pas de dégâts en cas de chute, quelle que soit la distance de cette dernière."
            ]
        },
        {
            "name"        : "Léchi fongique",
            "general_desc": [
                "Votre corps a été fait de champignon qui grandit dans l'ombre des grottes et des arbres et vous êtes chez vous dans les cavernes sombres et les terriers. Vous obtenez Vision dans le noir. Vous perdez le trait plante et obtenez le trait champignon."
            ]
        },
        {
            "name"        : "Léchi fruitier",
            "general_desc": [
                "Votre corps produit continuellement des petits fruits imprégnés de magie primordiale. À l'aube de chaque jour, un nouveau fruit mûrit. Vous ou un allié pouvez retirer ce fruit en utilisant une action Interagir. Si une créature vivante qui peut se nourrir de fruit le consomme en dépensant une action Interagir au cours de l'heure qui suit, elle regagne casino |shortLabel]{1d8 Points de vie}, plus 1d8 Points de vie supplémentaires par tranche de 2 de vos niveaux au-dessus du premier. Cet effet possède les traits guérison et vitalité."
            ]
        },
        {
            "name"        : "Léchi liane",
            "general_desc": [
                "Des lianes préhensiles vous donnent une compétence inégalée pour Escalader. Vous n'avez pas besoin d'avoir une vos mains libres pour sports_martial_artsEscaladeer . De plus, si vous obtenez un succès à un test d'Athlétisme pour Escalader, il devient un succès critique."
            ]
        },
        {
            "name"        : "Léchi lotus",
            "general_desc": [
                "Vous flottez sans effort à la surface de l'eau. Vous pouvez marcher sur la surface des étendues d'eau calmes et d'autres liquides qui ne causent pas de dégâts, en vous déplaçant à la moitié de votre Vitesse habituelle. Vous pouvez également tenter de Garder l'équilibre pour vous déplacer au dessus de l'eau courante, en utilisant le DD d'un test de nage pour nager dans l'eau. Lorsque vous le faites, vous ne pouvez vous déplacer à plus de la moitié de votre vitesse et en cas d'échec ou d'échec critique, vous tombez dans l'eau au lieu des effets normaux."
            ]
        },
        {
            "name"        : "Léchi racinaire",
            "general_desc": [
                "Votre corps est constitué de racines robustes qui vous attachent fermement au sol. Vous obtenez 10 Points de vie par votre ascendance au lieu de 8. Vous pouvez aller sans lumière du soleil pendant 2 semaines avant de commencer à mourir de faim. Vous obtenez un bonus de circonstances de +2 à vos DD de Vigueur et de Réflexes contre les tentatives pour vous sports_martial_artsPousser , vous faire un sports_martial_artsCroc-en-jambe ou vous sports_martial_artsRepositionner . Ce bonus s'applique aussi aux jets de sauvegarde contre les sorts ou les effets qui tentent de vous déplacer ou de vous mettre sentiment_very_dissatisfiedÀ terre ."
            ]
        },
        {
            "name"        : "Mage automate",
            "general_desc": [
                "La chambre abritant votre noyau a une connexion plus directe avec le reste de votre forme humanoïde, ce qui vous permet d'exploiter l'énergie magique de votre noyau. Vous obtenez un tour de magie de la liste des sorts arcaniques. Vous pouvez lancer ce sort comme un sort inné arcanique à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur."
            ]
        },
        {
            "name"        : "Minotaure blocâme",
            "general_desc": [
                "Votre lien profond avec la pierre et les murs vous permettent d'invoquer des blocs massifs qui s'effondrent sur vos ennemis. Vous obtenez l'activité sports_martial_artsÉlever des blocs ."
            ]
        },
        {
            "name"        : "Minotaure des cavernes de glace",
            "general_desc": [
                "Votre fourrure devient épaisse et chaude, bien adaptée aux montagnes gelées dans lesquelles vous résidez. Vous obtenez une résistance au froid égale à la moitié de votre niveau (avec un minimum de 1). Vous considérez les effets du froid de l'environnement comme étant d'un cran moins extrême."
            ]
        },
        {
            "name"        : "Minotaure itinérant",
            "general_desc": [
                "Vos sabots sont larges et puissants, parfaits pour déblayer des gravats au fur et à mesure de votre avancée. Vous êtes qualifié en Survie (ou dans une autre compétence si vous étiez déjà qualifié en Survie) et obtenez le don de compétence military_techExpertise du terrain . Vous ignorez le terrain difficile provoqué par un sol inégal d'origine naturel lorsque vous êtes sur le terrain que vous avez choisi avec le don Expertise du terrain."
            ]
        },
        {
            "name"        : "Minotaure petitecorne",
            "general_desc": [
                "Tout aussi puissante, votre charpente (et vos cornes) sont plus petites que celles de la plupart des autres minotaures. Au lieu d'être de taille Grande, votrer taille est Moyenne. Votre attaque à mains nues de cornes inflige 1d6 dégâts perforants au lieu de 1d8, mais elles possèdent le trait agile."
            ]
        },
        {
            "name"        : "Minotaure taureau fantôme",
            "general_desc": [
                "Votre fourrure est aussi pâle que la mort, possiblement qui vous lie ou votre famille à l'après-vie, ce qui vous laisse trouver votre chemin de manière surnaturelle. Vous pouvez lancer auto_awesomeConnaître le chemin comme un sort inné occulte à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur. De plus, vous obtenez un bonus de circonstances de +1 contre les sorts ou les effets qui provoquent l'état sentiment_very_dissatisfiedConfus ."
            ]
        },
        {
            "name"        : "Minotaure traqueur",
            "general_desc": [
                "En dépit de votre lourde corpulence, vous marchez sur des sabots recouverts de poils qui étouffent vos pas, ce qui vous permet de surprendre vos proies. Vous êtes qualifié en Discrétion (ou dans une autre compétence si vous êtes déjà qualifié en Discrétion) et obtenez le don de compétence military_techTraqueur de terrain , sauf que vous devez choisir décombres et vous pouvez sports_martial_artsÊtre furtif pas plus de 3 m au lieu de 1,50 mètre sans devoir faire un test de Discrétion."
            ]
        },
        {
            "name"        : "Nain des forges",
            "general_desc": [
                "Vous êtes remarquablement adapté aux environnements chauds. Vous bénéficiez ainsi d'une résistance au feu égale à la moitié de votre niveau (avec un minimum de 1) et vous considérez tous les effets environnementaux liés à la chaleur comme si leur intensité était d'un rang moins extrême (la chaleur extraordinaire devient extrême, la chaleur extrême devient sévère, etc.)."
            ]
        },
        {
            "name"        : "Nain des roches",
            "general_desc": [
                "Vos ancêtres ont vécu et travaillé parmi les pierres vénérables des montagnes ou des profondeurs de la terre. Cela vous a rendu aussi solide que le roc lorsque vous plantez vos pieds. Vous obtenez un bonus de circonstances de +2 à votre DD de Vigueur ou de Réflexes contre les tentatives pour vous sports_martial_artsPousser , vous faire un sports_martial_artsCroc-en-jambe ou vous sports_martial_artsRepositionner . Ce bonus s'applique également aux jets de sauvegarde contre les sorts ou les effets qui tentent de vous faire tomber sentiment_very_dissatisfiedÀ terre .",
                "De plus, lorsque vous subissez un effet qui devrait vous forcer à vous déplacer de 3 m ou plus, vous ne vous déplacez que de la moitié de cette distance."
            ]
        },
        {
            "name"        : "Nain gardemort",
            "general_desc": [
                "Vos ancêtres ont été les gardes des tombeaux et leurs pouvoirs de se protéger vous ont été transmis. Si vous obtenez un succès sur un jet de sauvegarde contre un effet qui possède le trait vide ou a été créé par une créature morte-vivante, vous considérez qu'il s'agit d'un succès critique."
            ]
        },
        {
            "name"        : "Nain sang-ancien",
            "general_desc": [
                "Les héros nains de l'ancien temps étaient capables de balayer la magie de leurs ennemis du revers de la main. Vous avez hérité d'une partie de cette résistance. Vous gagnez la réaction sports_martial_artsAppel du sang ancien ."
            ]
        },
        {
            "name"        : "Nain sang-fort",
            "general_desc": [
                "Votre sang, vigoureux et tonique, vous permet de mieux résister aux toxines. Vous obtenez une résistance au poison égale à la moitié de votre niveau (avec un minimum de 1) et, chacun de vos succès sur un jet de sauvegarde contre un poison réduit son stade de 2 ou de 1 s'il s'agit d'un poison virulent. Chaque succès critique contre un poison qui est en train de vous affecter réduit son stade de 3 ou de 2 s'il s'agit d'un poison virulent."
            ]
        },
        {
            "name"        : "Néphilim",
            "general_desc": [
                "Votre nature est influencée par les célestes, les fiélons ou les veilleurs. Cela se manifeste par une combinaison de traits qui trahissent votre héritage, comme des yeux dorés, une auréole, des cornes ou une queue. Vous obtenez le trait néphilim, en plus des traits de votre ascendance. Vous bénéficiez d'une vision nocturne ou d'une vision dans le noir si votre ascendance possède déjà une vision nocturne. Vous pouvez choisir entre les dons des néphilims ou les dons de votre ascendance chaque fois que vous obtenez un don ancestral."
            ]
        },
        {
            "name"        : "Orc batailleur",
            "general_desc": [
                "Vous descendez d'une lignée de terrifiants commandants sur le champ de bataille. Vous êtes qualifié en Intimidation et vous obtenez le don de compétence military_techRegard intimidant ."
            ]
        },
        {
            "name"        : "Orc des badlands",
            "general_desc": [
                "Vous venez des terres arides écrasées par le soleil, où vos longues jambes et une capacité à comprendre les éléments vous ont aidé à survivre. Vous pouvez sports_martial_artsVous empresser deux fois plus longtemps lorsque vous êtes en exploration avant de devoir vous arrêter et vous traitez les effets des environnements chauds comme s'ils étaient d'un degré inférieur (la chaleur extraordinaire devient extrême, la chaleur extrême devient importante, etc...)."
            ]
        },
        {
            "name"        : "Orc des profondeurs",
            "general_desc": [
                "Vos mains calleuses et vos yeux rouges évoquent une vie passée dans les ténèbres profondes des cavernes des montagnes, où vous avez appris à combattre sur les falaises rocheuses et à survivre avec un minimum de ressources. Vous obtenez le don military_techExpertise du terrain pour les souterrains et de don de compétence military_techCombattant-grimpeur ."
            ]
        },
        {
            "name"        : "Orc hivernal",
            "general_desc": [
                "Vos ancêtres ont survécu sous les climats froids. Vous êtes qualifié en Survie et vous traitez les effets environnementaux liés au froid comme s'ils étaient d'un cran moins extrêmes (un froid extraordinaire devient extrême, un froid extrême devient important, etc)."
            ]
        },
        {
            "name"        : "Orc scarifié",
            "general_desc": [
                "Vous êtes un membre d'une communauté orque qui pratique un rituel de scarification ou de tatouage. Les marques de votre peau montrent votre exceptionnelle robustesse et votre vitalité. Vous obtenez 12 Points de vie de votre héritage au lieu de 10. Vous obtenez aussi le don military_techDur à cuir ."
            ]
        },
        {
            "name"        : "Orc sépulcral",
            "general_desc": [
                "Vous avez été exposé à de puissantes énergies nécromantiques qui auraient dû vous tuer — mais vous avez survécu. Votre peau est froide, moite et grise. Vous obtenez une résistance aux dégâts de vide égale à la moitié de votre niveau (minimum 1). Vous obtenez aussi un bonus de circonstances de +1 aux jets de sauvegarde contre les effets ayant le trait mort ou vide."
            ]
        },
        {
            "name"        : "Orque des moussons",
            "general_desc": [
                "Vous êtes né dans une forêt humide avec la canopée pour seule protection contre les pluies torrentielles et les inondations brutales. Vous avez appris à vous déplacer de manière athlétique à travers la jungle et à résister aux diverses plaies communes en milieu humide. Vous obtenez un bonus de circonstances de +2 aux tests d'Athlétisme pour sports_martial_artsEscalader ou sports_martial_artsNager et un bonus de circonstances de +1 aux jets de sauvegarde contre les maladies."
            ]
        },
        {
            "name"        : "Rat à long museau",
            "general_desc": [
                "Votre long museau vous donne un sens de l'odorat plus aiguisé que la plupart des hommes-rats. Vous obtenez un sens de l'odorat imprécis avec une portée de 9 mètres. Cela signifie que vous pouvez utiliser votre sens de l'odorat pour déterminer l'emplacement d'une créature. Le MJ doublera vraisemblablement la portée de ce sens si vous êtes sous le vent par rapport à la créature ou pourra la diviser par deux lorsque vous serez contre le vent.",
                "De plus, vous obtenez un bonus de circonstances de +2 aux tests de Perception pour sports_martial_artsChercher une créature ou un objet dans la portée de votre odorat."
            ]
        },
        {
            "name"        : "Rat d'égouts",
            "general_desc": [
                "Vous descendez d'une longue lignée d'hommes-rats établie dans les égouts sous une vaste métropole. Vous êtes immunisé à la maladie de la fièvre de la fange. Vous obtenez un bonus de circonstances de +1 contre les maladies et les poisons. Si vous obtenez un succès sur un jet de sauvegarde contre une maladie ou un poison, il devient un succès critique. Si vous disposez d'une capacité différente qui devrait améliorer le jet de sauvegarde de manière identique (tel que la capacité de guerrier Endurci au combat ), si vous obtenez un échec critique sur le jet de sauvegarde, il devient un échec."
            ]
        },
        {
            "name"        : "Rat de l'ombre",
            "general_desc": [
                "Vos ancêtres ont vécu dans des endroits sombres souterrains, vous léguant votre fourrure noire et un air vaguement étrange. Vous êtes qualifié en Intimidation et pouvez utiliser Intimidation pour sports_martial_artsContraindre les animaux. Lorsque vous sports_martial_artsDémoralisez un animal, vous ne subissez pas de pénalité liée à l'absence de langue commune avec lui. Si vous devriez être qualifié en Intimidation (du fait de votre historique ou de votre classe par exemple), vous êtes qualifié dans une autre compétence de votre choix.",
                "L'attitude des animaux à votre égard est d'un degré inférieur à la normale, débutant en étant inamicale en général au lieu d'indifférente pour les animaux domestiqués et hostile plutôt qu'inamicale pour les animaux sauvages."
            ]
        },
        {
            "name"        : "Rat des profondeurs",
            "general_desc": [
                "Vos ancêtres ont vécu plus profondément que les autres hommes-rats, vous faisant bénéficier de leur capacité de voir dans le noir. Vous obtenez vision dans le noir."
            ]
        },
        {
            "name"        : "Rat des sables",
            "general_desc": [
                "Vous êtes natif des plaines arides et avez grandi en voyageant sur les routes. Si vous avez vos deux mains libres, vous pouvez augmenter votre Vitesse à 9 mètres pour courir sur vos quatre pattes. De plus les effets environnementaux liés à la chaleur sont d'un degré moins extrême pour vous et vous pouvez aller 10 fois plus loin que la normale avant d'être affecté par la faim ou la soif. Quoi qu'il en soit, à moins que vous ne portiez des vêtements adaptés ou que vous ne soyez abrité, les effets de froid liés à l'environnement sont d'un degré plus extrême pour ce qui vous concerne."
            ]
        },
        {
            "name"        : "Rat des tunnels",
            "general_desc": [
                "Vos pouvez facilement compresser votre corps et Vous faufiler à travers les trous. Vous obtenez le don de compétence military_techSe faufiler rapidement en tant que don supplémentaire même si vous n'êtes pas qualifié en Acrobaties. Les espaces étroits qui ne sont pas suffisamment étroits pour que vous ayez à utiliser l'action Se faufiler ne sont pas des terrains difficiles pour vous."
            ]
        },
        {
            "name"        : "Rat Neige",
            "general_desc": [
                "Vous avez une fourrure plus épaisse et une charpente plus encombrante pour vous défendre contre le froid, vous accordant une résistance au froid égale à la moitié de votre niveau (minimum 1). Vous traitez les effets environnementaux de froid comme s'ils étaient d'un degré moins extrême (le froid extraordinaire devient extrême, le froid extrême devient important, etc)."
            ]
        },
        {
            "name"        : "Reflet",
            "general_desc": [
                "Vous avez été créé en tant que double d'une autre créature, intentionnellement ou accidentellement, bien que vous puissiez ne pas connaître vos origines. À part une ou deux marques mineures, vous ressemblez à l'original. Vous gagnez le trait reflet, en plus des traits de votre ascendance. Vous n'avez pas besoin de tenter des tests de Duperie pour vous faire passer pour l'original, sauf si vous interagissez avec des personnes qui le connaissent personnellement ou si vous faites quelque chose qui ne lui ressemble pas. Le MJ peut vous demander d'effectuer un test de Duperie dans d'autres circonstances comme par exemple si vous êtes en reflet inversé et que vous interagissez avec quelqu'un qui a vu un portrait fidèle de votre original et qui pourrait remarquer une caractéristique distinctive du côté opposé.",
                "Chaque fois que vous obtenez un don d'ascendance, vous pouvez effectuer un choix entre les dons de reflet et ceux de votre ascendance"
            ]
        },
        {
            "name"        : "Sang-dragon",
            "general_desc": [
                "Vous descendez d'une manière ou d'une autre d'un dragon. Vos caractéristiques physiques pourraient l'afficher de manière ostentatoire, avec une paire de cornes draconiques, une peau écailleuse à certains endroits ou même une queue ou vous pourriez avoir développé une réserve interne de puissance draconique. Vous obtenez le trait sang-dragon, en plus des traits de votre ascendance. Ajoutez le draconique à la liste des langues supplémentaires de votre ascendance (vous permettant de la choisir si votre modificateur d'Intelligence est positif). Lorsque vous obtenez un succès sur un jet de sauvegarde contre un effet de terreur, il devient un succès critique. Lorsque vous obtenez un don ancestral, vous pouvez le choisir parmi ceux des sang-dragons et ceux de votre ascendance."
            ]
        },
        {
            "name"        : "Squelette compact",
            "general_desc": [
                "Pour les tâches qui nécessitent une touche plus légère, les restes de gnomes, de gobelins et de halfelins sont plus appropriés que ceux d'une créature plus grande. Ces squelettes plus petits et plus agiles s'insèrent bien dans un coffre de voyage, peuvent être forcés à passer par des espaces étroits et évitent plus facilement la détection. Votre taille est Petite au lieu de Moyenne. Vous obtenez le don military_techSe faufiler rapidement même si vous n'êtes pas qualifié en Acrobaties. Les espaces étroits qui ne sont pas assez étroits pour qu'il soit nécessaire de Se faufiler ne sont pas des terrains difficiles pour vous."
            ]
        },
        {
            "name"        : "Squelette générique",
            "general_desc": [
                "Les humains, et ceux qui leur sont physiquement proches, constituent la matière première préférée des nécromanciens. Ils sont facilement disponibles et leur physiologie a été la plus largement étudiée, de sorte que ces morts-vivants peuvent être facilement créés en masse. Malgré leur nom, les squelettes génériques font des soldats d'infanterie plutôt mobiles du fait de l'efficacité avec laquelle ils transfèrent les énergies nécromantiques au travers de leur corps. Votre Vitesse de base est de 9 m au lieu de 7,50 mètres."
            ]
        },
        {
            "name"        : "Squelette monstrueux",
            "general_desc": [
                "Les squelettes inhumains sont souvent créés à la fois pour leurs attaques physiques mortelles et pour leur apparence terrifiante. Les bêtes et les humanoïdes monstrueux avec les plus étranges squelettes se retrouvent souvent comme œuvres centrales de la collection d'un nécromancien suffisamment doué pour relever une telle créature. Vous obtenez une attaque à mains nues d'aile, de corne, de griffe, ou de queue infligeant 1d6 dégâts. Une griffe inflige des dégâts tranchants, une corne des dégâts perforants et une queue ou une aile des dégâts contondants. Cette attaque à mains nues appartient au groupe pugilat et possède les traits finesse et à mains nues."
            ]
        },
        {
            "name"        : "Squelette robuste",
            "general_desc": [
                "Certaines conditions dangereuses ne conviennent pas au squelette ordinaire, de sorte qu'un nécromancien pourra choisir de réanimer les os d'un nain, d'un orc ou d'une autre créature réputée pour sa robustesse. Vous avez 10 Points de vie au lieu de 6 et gagnez le don military_techDur à cuir ."
            ]
        },
        {
            "name"        : "Surki à capapace dure",
            "general_desc": [
                "Votre carapace est bien plus dense que celle des autres surkis, vous offrant votre propre armure. Votre carapace est une armure intermédiaire dans le groupe des plates qui vous accorde un bonus d'objet de +4, un maximum de Dextérité de +1, une pénalité au test de –2, une pénalité à la vitesse de -1,50 mètres, une valeur de Force de +3 et possède le trait confort. Vous ne pouvez jamais porter une autre armure ou retirer votre carapace. Vous pouvez graver des runes d'armure sur votre carapace.",
                "Évolution Le système circulatoire magique qui court entre vos nodules est devenu un réseau renforcé qui renforce votre carapace avec de l'énergie magique. Si vous avez été atteint par un coup critique qui inflige des dégâts physiques, vous pouvez utiliser votre réaction pour tenter un casinoTest nu, DD 17 . Si elle réussit, l'attaque devient un coup normal.\nÉvolution Vos nodules abdominaux peuvent projeter un champ autour de vous qui vous protège contre le type de magie avec lequel vous êtes le plus familier. Vous obtenez l'action sports_martial_artsAtténuation des harmoniques ."
            ]
        },
        {
            "name"        : "Surki à élytre",
            "general_desc": [
                "La couche supérieure de votre carapace est particulièrement mobile et vous pouvez la déployer pour prendre l'air avec grâce lorsque vous chutez. Vous ne subissez pas de dégâts, quelle que soit la distance de votre chute.",
                "Évolution Les nodules de vos épaules ont évolué en une paire d'épines que vous pouvez alimenter en énergie pour projeter une paire d'ailes brillantes. Vous pouvez lancer auto_awesomeVol comme un sort inné une fois par jour, en vous ciblant. Tant que vos ailes sont alimentées, vous émettez une lumière brillante dans un rayon de 6 mètres et une lumière faible dans les 6 mètres suivants.\nÉvolution Les nodules de vos épaules ont évolué en un éventail de fines membranes qui résonnent lorsque la magie est routées à travevrs vous. Vous obtenez l'action sports_martial_artsChanson stridulante ."
            ]
        },
        {
            "name"        : "Surki briseur",
            "general_desc": [
                "Vos griffes sont particulièrement dures et peuvent se frayer un passage à travers la terre et les prédateurs de la même manière. Vous obtenez une attaque à mains nues de griffe qui inflige 1d4 dégâts trachants. Vos griffes sont dans le groupe pugilat et possède les traits à mains nues, agile, finesse et polyvalent C.",
                "Évolution Les nodules de votre poignet projettent de la magie pour faire un creusement durable. Vous pouvez dépenser une action Interagir pour augmenter les dégâts de votre attaque à mains nues à 1d6, lui accorder les traits magique, démolition et polyvalent force et retire le trait agile. Vous pouvez dépenser une autre action pour désactiver cette capacité et redonner à votre griffe ses statistiques normales.\nÉvolution Vos nodules de chevilles peuvent émettre à partir de vos griffes des pointes de magie qui vous maintiennent en place. Si n'importe quel effet devrait vous forcer à vous déplacer de 3 m ou davantage, vous pouvez choisir de vous déplacer de seulement la moitié de cette distance. La traction supplémentaire de vos piques de griffe vous permettent de grimper avec une main occupée (ou avec les deux mains occupées si vous possédez le don military_techCombattant-grimpeur ). Vous obtenez la réaction sports_martial_artsCreuser une tranchée ."
            ]
        },
        {
            "name"        : "Surki lanterne",
            "general_desc": [
                "Les nodules de votre abdomen sont particulièrement lùmineux. Vous pouvez utiliser une action Interagir pour émettre de la lumière vive à partir de votre abdomen dans un rayon de 6 mètres (et de la lumière faible dans les 6 m suivants). C'est un effet de lumière magique avec un rang de contre égal à la moitié de votre niveau arrondi au supérieur. Vous pouvez changer la couleur de la lumière ou l'éteindre avec une autre action Interagir.",
                "Évolution Vos nodules au niveau de l'abdomen ont évolué en une paire de seconds membres qui projettent un faisceau magique concentré. Vous obtenez l'action sports_martial_artsFaisceau de lanterne .\nÉvolution Des émetteurs secondaires de lumière émergent des nodules de vos épaule qui flashent en même temps que votre lanterne. Vous obtenez l'action sports_martial_artsLanterne stroboscopique ."
            ]
        },
        {
            "name"        : "Talos",
            "general_desc": [
                "Vos caractéristiques physiques reflètent l'influence d'un zuhra ou d'un autre élémentaire métallique sur votre lignée. Votre peau a probablement un éclat métallique, allant du lustre terne du minerai brut au poli étincelant d'une lame neuve, l'usure de l'âge ou des épreuves prenant la forme de ternissures, de rouille ou d'éraflures. Vos cheveux peuvent ressembler à de l'or filé, de l'acier enroulé, des fils de cuivre ou des chaînes tressées. Vous gagnez le trait talos, en plus des traits de votre ascendance. Vous obtenez une résistance à l'électricité égale à la moitié de votre niveau (minimum 1). Vous pouvez lancer le tour de magie auto_awesomeDétection du métal comme un sort divin arcanique à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur.",
                "Vous pouvez choisir parmi les dons de talos, de descendants des génies et ceux de votre ascendance lorsque vous obtenez un don ancestral."
            ]
        },
        {
            "name"        : "Tengu à serres",
            "general_desc": [
                "Vos serres sont aussi dures et robustes que votre bec. Vous obtenez une attaque à mains nues de serre qui inflige 1d4 dégâts tranchants. Vos serres font partie du groupe pugilat et possèdent les traits agile, finesse, à mains nues et polyvalent P."
            ]
        },
        {
            "name"        : "Tengu battu par les vents",
            "general_desc": [
                "Que ce soit grâce à une bénédiction de Hei Feng ou à l'éclosion de votre œuf durant un grain, vous êtes résistant aux tempêtes. Vous obtenez une résistance à l'électricité égale à la moitié de votre niveau (minimum 1). Vous réussissez automatiquement le test nu pour cibler une créature sentiment_very_dissatisfiedMasquée si cette créature est masquée seulement par la pluie ou le brouillard."
            ]
        },
        {
            "name"        : "Tengu dent de chien",
            "general_desc": [
                "En plus d'un bec, votre bouche comporte aussi un nombre de dents vicieuses et pointues. Certaines légendes clament que vos puissantes mâchoires peuvent même percer l'acier. Bien que vous ne soyez pas encore assez fort pour ça, vos crocs peuvent toujours infliger de terribles blessures. Votre attaque à mains nues de bec obtient le trait mortel d8."
            ]
        },
        {
            "name"        : "Tengu enfant du ciel",
            "general_desc": [
                "Vos os pourraient être particulièrement légers, vous pourriez être un rare tengu possédant des ailes ou votre lien avec les esprits du vent et du ciel pourrait être plus fort que la plupart, ralentissant votre chute au travers des airs. Vous ne subissez aucun dégât lors d'une chute, quelle que soit la distance de laquelle vous chûtez."
            ]
        },
        {
            "name"        : "Tengu gardemontagne",
            "general_desc": [
                "Vous descendez d'une lignée d'ascètes tengus, vous ayant transmis un lien avec les esprits du monde et du Grand au-delà. Vous pouvez lancer le tour de magie auto_awesomeDéchaînement de vitalité comme un sort primordial inné à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur. Chaque fois que vous lancez un sort provenant d'un héritage ou d'un don ancestral tengu, vous pouvez décider s'il s'agit d'un sort divin ou primordial."
            ]
        },
        {
            "name"        : "Tengu maudit",
            "general_desc": [
                "Votre lignage a été exposé à malédiction sur malédiction et maintenant elles glissent sur vos plumes comme la pluie. Si vous obtenez un succès sur un jet de sauvegarde contre un effet de malédiction ou de malchance, il devient un succès critique. Lorsque vous devriez obtenir l'état sentiment_very_dissatisfiedCondamné , faites un casinoTest nu, DD 17 . En cas de succès, réduisez la valeur de l'état Condamné que vous devriez obtenir de 1."
            ]
        },
        {
            "name"        : "Tengu plonge vague",
            "general_desc": [
                "Vous êtes l'un des rares tengus qui peut fendre les vagues comme un oiseau fend les airs et vous rôdez souvent dans les rivières ou les océans où peu vous attendent. Vous obtenez une Vitesse de nage de 4,50 mètres."
            ]
        },
        {
            "name"        : "Tripkee à longue langue",
            "general_desc": [
                "Votre langue est particulièrement longue et vous pouvez la projeter avec une portée et une précision extraordinaires. Vous pouvez utiliser votre langue pour délivrer des sorts de contact et effectuer des actions Interagir extrêmement simples, comme ouvrir certains types de portes non verrouillées. Votre langue ne peut pas accomplir d'actions qui nécessitent des doigts ou une importante dextérité manuelle, incluant toute action qui nécessiterait un test pour être accomplie et vous ne pouvez pas l'utiliser pour porter des objets."
            ]
        },
        {
            "name"        : "Tripkee à palmes",
            "general_desc": [
                "Des palmes résistantes le long de vos mains et de vos orteils peuvent ralentir toute chute. Tant que vous disposez d'une main libre, vous ne subissez aucun dégât de chute, quelle que soit la distance de laquelle vous tombez."
            ]
        },
        {
            "name"        : "Tripkee à peau empoisonnée",
            "general_desc": [
                "Bien que vous soyez petit, les glandes empoisonnées camouflées partout sur votre corps cachent une défense mortelle. Vous obtenez la réaction sports_martial_artsPeau toxique ."
            ]
        },
        {
            "name"        : "Tripkee à peau épaisse",
            "general_desc": [
                "Votre peau semblable à du cuir ressemble à celle d'un crapaud. Vous obtenez 8 Points de vie de votre ascendance au lieu de 6. Vous obtenez un bonus de circonstances de +1 aux jets de sauvegarde contre maladies et poisons."
            ]
        },
        {
            "name"        : "Tripkee aux orteils collants",
            "general_desc": [
                "Vos mains et vos pieds exsudent un film qui les aide à adhérer sur les surfaces. Vous obtenez un bonus de circonstances de +2 à vos DD de Vigueur et de Réflexes contre les tentatives pour vous sports_martial_artsDésarmer , vous sports_martial_artsPousser , vous sports_martial_artsRepositionner ou vous faire un sports_martial_artsCroc-en-jambe . Lorsque vous grimpez aux arbres, aux lianes ou d'autres feuillages, si vous obtenez un succès au test d'Athlétisme pour Escalader, il devient un succès critique."
            ]
        },
        {
            "name"        : "Tripkee des rivières",
            "general_desc": [
                "Vos ancêtres vivent autant dans que sur l'eau. Vous obtenez une vitesse de nage de 4,50 mètres."
            ]
        }
    
    ]
};