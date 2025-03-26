"use strict";
var CLASSES = {
    key          : "classes",
    label        : "Classes",
    key_element  : "class",
    label_element: "Classe",
    ENUM         : [
        {
            "name"           : "Aiuvarin",
            "name_lower_case": "aiuvarin",
            "general_desc"   : [
                "Vous avez des elfes ou possiblement d'autres aiuvarins dans votre arbre généalogique. Vous avez des oreilles pointues et d'autres signes qui démontrent votre héritage elfique. Vous obtenez le trait elfe, le trait aiuvarin et la capacité vision nocturne. De plus, chaque fois que vous obtenez un don ancestral, vous pouvez le choisir parmi la liste des dons des elfes, des aiuvarins et de votre autre ascendance."
            ]
        },
        {
            "name"           : "Anadi adaptée",
            "name_lower_case": "anadi adaptée",
            "general_desc"   : [
                "Vous descendez d'une lignée d'anadis qui ont travaillé à perfectionner leur magie de transformation, leur permettant de s'intégrer à une plus grande variété de cultures. Choisissez une ascendance humanoïde courante de taille moyenne. Votre forme humaine est remplacée par une forme qui correspond à ce choix. Vous gagnez également le don military_techAscendance adoptive pour l'ascendance humanoïde choisie."
            ]
        },
        {
            "name"           : "Anadi piégeur",
            "name_lower_case": "anadi piégeur",
            "general_desc"   : [
                "Vous avez éclos avec des crocs crochus qui vous donnent un avantage lorsque vous chassez sous votre vraie forme. Votre attaque de crocs obtient les traits saisir et croc-en-jambe."
            ]
        },
        {
            "name"           : "Anadi polychromatique",
            "name_lower_case": "anadi polychromatique",
            "general_desc"   : [
                "Votre corps est couvert de poils exceptionnellement colorés qui créent des motifs vibrants et accrocheurs, dont certains pourraient même apparaître sous votre forme humaine. Vous devenez qualifié en Représentation (ou dans une autre compétence si vous étiez déjà qualifié en Représentation) et vous obtenez le don military_techReprésentation impressionnante .",
                "Note : Si vous êtes déjà qualifié avec la compétence liée à ce don, vous devez sélectionner manuellement une compétence alternative."
            ]
        },
        {
            "name"           : "Anadi sautillant",
            "name_lower_case": "anadi sautillant",
            "general_desc"   : [
                "Vos membres sont exceptionnellement longs sous vos deux formes, ce qui vous permet de sautiller avec une agilité surprenante. Votre vitesse passe de 7,50 mètres à 9 mètres."
            ]
        },
        {
            "name"           : "Anadi venimeux",
            "name_lower_case": "anadi venimeux",
            "general_desc"   : [
                "Les crocs de votre forme naturelle sont capables d'injecter du venin à vos ennemis. Vous gagnez la capacité sports_martial_artsVenin anadi ."
            ]
        },
        {
            "name"           : "Androïde combattant",
            "name_lower_case": "androïde combattant",
            "general_desc"   : [
                "Votre corps a été à l'origine créé en vue d'être un officier de sécurité ou un soldat. Vous êtes naturellement un combattant doué pré-programmé pour combattre. Vous êtes qualifié avec toutes les armes simples et de guerre."
            ]
        },
        {
            "name"           : "Androïde imposteur",
            "name_lower_case": "androïde imposteur",
            "general_desc"   : [
                "L'apparence et les processus de votre corps ont été améliorés dans le but de vous fondre avec les humains plus facilement.",
                "Vous devenez qualifié en Duperie (ou une autre compétence si vous étiez déjà qualifié en Duperie). Vous n'avez pas besoin d'un kit de déguisement lorsque vous faites un test de Duperie pour sports_martial_artsVous déguiser en un humain.",
                "De plus, vous obtenez un bonus de circonstances de +4 pour les tests de Se déguiser pour prétendre que vous êtes une version humaine de vous-même et non un androïde. Ce bonus ne s'applique pas aux autres tests pour Vous déguiser en d'autres humains."
            ]
        },
        {
            "name"           : "Androïde manoeuvre",
            "name_lower_case": "androïde manoeuvre",
            "general_desc"   : [
                "Votre corps est adapté pour endurer des épreuves physiques ou accomplir des travaux difficiles sur des longues périodes de temps. Vous êtes qualifié en Athlétisme (ou en une autre compétence si vous étiez déjà qualifié en Athlétisme) et vous obtenez le don de compétence military_techPortefaix ."
            ]
        },
        {
            "name"           : "Androïde polyglotte",
            "name_lower_case": "androïde polyglotte",
            "general_desc"   : [
                "Vous avez été préprogrammé avec une multitude de compétences linguistiques, probablement pour agir comme un traducteur. Vous apprenez deux nouvelles langues, choisies parmi les langages courants et dans toutes les langues peu courantes auxquels vous avez accès. Ces langues prennent la même forme (signée ou parlée) que vos autres langues. Si vous choisissez le don military_techPolyglotte , vous apprenez trois nouvelles langues au lieu de deux."
            ]
        },
        {
            "name"           : "Animal coureur",
            "name_lower_case": "animal coureur",
            "general_desc"   : [
                "Vous etes un animal conçu pour courir à de grandes vitesses sur le sol. Typiquement, vous courrez sur vos quatre pattes comme un canidé, un léopard ou un iguane, mais vous pourriez aussi utiliser deux pattes comme un kangourou, un émeu ou un pingouin.",
                "Vous possédez une vitesse au sol de 9 m et une attaque animale de votre choix (typiquement griffe, queue ou mâchoire)."
            ]
        },
        {
            "name"           : "Animal grimpeur",
            "name_lower_case": "animal grimpeur",
            "general_desc"   : [
                "Vous êtes un animal dont les membres sont adaptés à saisir, escalader et utiliser ses bras. Vous pourriez être adroit et prêt à utiliser des outils comme un chimpanzé ou une loutre ou vous pourriez simplement être un grimpeur rapide comme un ours, un raton-laveur ou un parresseux.",
                "Vous possédez une vitesse de 6 mètres, une vitesse d'escalade de 6 m et une attaque animale de votre choix (typiquement une griffe, un point ou des ma^choires)."
            ]
        },
        {
            "name"           : "Animal nageur",
            "name_lower_case": "animal nageur",
            "general_desc"   : [
                "Vous êtes un animal aquatique qui est plus à l'aise dans l'eau. Vous pouvez passer la plupart de votre temps dans l'eau comme un alligator, une otarie, une baleine ou un dauphin ou vous pouvez avoir besoin d'eau pour respirer comme un poisson ou certains crustacés.",
                "Vous possédez une attaque animale de votre choix (typiquement une griffe, des mâchoires ou une queue). Choisissez si vous êtes aquatique ou vivant dans l'eau.",
                "Aquatique Vous obtenez le trait aquatique et vous possédez une vitesse de nage de 9 mètres. Le trait aquatique signifie que vous respirez dans l'eau mais pas dans l'air et que vos Frappes à mains nues contondantes et tranchantes ne subissent pas la pénalité habituelle de -2 lorsque vous êtes sous l'eau.\nVivant dans l'eau Vous pouvez retenir votre souffle sous l'eau pendant 10 minutes avant d'avoir besoin d'air. Vous possédez une vitesse de nage de 6 m et, si vous pouvez vous déplacer sur terre, vous possédez une vitesse de base de 6 mètres."
            ]
        },
        {
            "name"           : "Animal volant",
            "name_lower_case": "animal volant",
            "general_desc"   : [
                "Vous êtes un animal qui peut prendre son envol pendant longtemps ou par bonds répétés, tel qu'un aigle, une chauve-souris, une abeille ou un écureuil volant.",
                "Le processus d'éveil a perturbé votre capacité à voler aussi librement que vous le faisiez auparavant. Ce qui était auparavant un processus automatique est désormais sur lequel vous devez désormais consacrer vos pensées jusqu'à ce qu'il redevienne automatique. Vous pouvez toujours ralentir votre descente, de sorte que vous ne subissez aucun dégâts de votre chute, quelle que soit la distance dont vous chutez. La plupart des animaux éveillés choisissent le don d'ascendance Prendre son envol au niveau 1 pour regagner la capacité de voler. Vous possédez une vitesse de 6 m et une attaque d'animal de votre choix (typiquement d'aile, de bec, de griffe, de mâchoire, de serre)."
            ]
        },
        {
            "name"           : "Animanthrope",
            "name_lower_case": "animanthrope",
            "general_desc"   : [
                "Le sang d'une bête court dans vos veines vous accordant la férocité et le puissance des animaux. Seules les créatures possédant le trait humanoïde peuvent prendre l'héritage alternatif animanthrope. Choisissez un type d'animal comme aigle, araignée, chauve-souris, guêpe, loup, requin ou tyrannosaure. C'est le type d'animal lié à votre héritage et connu sous le nom de votre animal intérieur. Vous obtenez les traits bête et animanthrope, en plus des traits de votre ascendance.",
                "Vous obtenez la capacité sports_martial_artsChangement de forme . Vous pouvez choisir parmi les dons d'animanthrope et les dons de votre ascendance lorsque vous obtenez un don ancestral."
            ]
        },
        {
            "name"           : "Ardande",
            "name_lower_case": "ardande",
            "general_desc"   : [
                "Vous descendez des élémentaires de bois ou possédez un autre héritage influencé par le Plan élémentaire du Bois. Vous pourriez présenter une peau verte et moussue, des lianes qui poussent sur votre tête au lieu de cheveux ou de fins appendices qui ressemblent à des brindilles. Vous obtenez le trait ardande en plus des traits de votre ascendance. Vous obtenez aussi vision nocturne ou vision dans le noir si votre ascendance possède vision nocturne.",
                "Vous pouvez choisir parmi les dons d'ardande, ceux des descendants des génies et ceux de votre ascendance lorsque vous obtenez un don ancestral."
            ]
        },
        {
            "name"           : "Artisan androïde",
            "name_lower_case": "artisan androïde",
            "general_desc"   : [
                "Votre corps a été conçu pour pouvoir créer des œuvres d'art, des outils complexes ou pour assurer l'entretien des machineries avancées. Vous devenez qualifié en Artisanat (ou une autre compétence si vous êtes déjà qualifié en Artisanat) et vous obtenez le don de compétence military_techArtisanat spécialisé dans une spécialité de votre choix."
            ]
        },
        {
            "name"           : "Athamaru à piquants",
            "name_lower_case": "athamaru à piquants",
            "general_desc"   : [
                "Des piquants effilés sur votre tête peuvent perforer profondément vos ennemis. La plupart ds athamarus utilisent de tels piquants pour leur défense mais un bon coup de tête bien placé peut être d'une efficacité dévastatrice. Vous obtenez une attaque à mains nues de piquants qui infligent 1d6 dégâts perforants. Vos piquants sont dans le groupe pugilat et possèdent les traits à mains nues, agile et finesse."
            ]
        },
        {
            "name"           : "Athamaru coralien",
            "name_lower_case": "athamaru coralien",
            "general_desc"   : [
                "Le corail couvre des parties de votre corps, ce qui vous procure une couche de défense naturelle. Les athamarus coraliens choisissent souvent Symbiotes coraliens et autres dons d'ascendance en rapport. Les plaques de corail sont une armure intermédiaire dans le groupe des plates qui accordent un bonus d'objet de +4 à la CA, un maximum de Dextérité de +1, une pénalité au test de –2, une pénalité à la Vitesse de -1,50 mètre, une valeur de Force de +3 et possèdent les traits hydrodynamique et confort. Vous ne pouvez jamais porter d'autre armure ou retirer le corail. Vous pouvez graver des runes d'armure sur le corail."
            ]
        },
        {
            "name"           : "Athamaru kaléïdoscopique",
            "name_lower_case": "athamaru kaléïdoscopique",
            "general_desc"   : [
                "Vos écailles présentent un spectre de couleur qui brille sous la lumière. Dans les zones de lumière vive ou de lumière faible, vous obtenez un bonus de circonstances de +1 aux tests de Représentation. Vous obtenez aussi la réaction sports_martial_artsChercheur d'éblouissement ."
            ]
        },
        {
            "name"           : "Athamaru pleine d'espoir",
            "name_lower_case": "athamaru pleine d'espoir",
            "general_desc"   : [
                "Vous avez commencé à vous préparer à devenir une matriarche athamaru et êtes enclin à sortir de votre communauté pour mieux vous préparer à diriger. Dans le cadre de ce changement physique, vous êtes beaucoup plus grande que vous ne l'étiez auparavant. Au lieu d'être de taille Moyenne, votre taille est Grande. De plus, vous emplissez vos alliés d'un sentiment d'espoir. Vous possédez une aura de 3 m qui accorde à tout allié qui s'y trouve d'une bonus de circonstances de +1 aux jets de sauvegarde contre la peur. Il s'agit d'un effet d'émotion et mental."
            ]
        },
        {
            "name"           : "Athamasi",
            "name_lower_case": "athamasi",
            "general_desc"   : [
                "Vous disposez d'un ensemble de petits bras secondaires adaptés pour grimper et pour se suspendre aux arbres. Vous ne pouvez pas tenir ou récupérer des objets avec ces membres, mais vous pouvez Escalader ou sports_martial_artsVous raccrocher in extremis même si une ou vos deux mains primaires sont prises. Vous n'êtes pas sentiment_very_dissatisfiedPris au dépourvu lorsque vous Escaladez."
            ]
        },
        {
            "name"           : "Automate chasseur",
            "name_lower_case": "automate chasseur",
            "general_desc"   : [
                "Vous avez été conçu comme un éclaireur ou un assassin et avez un corps ressemblant à celui d'un membre d'une meute comme un grand félin ou un loup. Bien que vous vous déplaciez à l'ordinaire comme un quadrupède, vous pouvez toujours vous tenir et combattre comme un bipède, vous permettant d'utiliser tout votre équipement normalement. Votre conception quadrupède vous permet de vous déplacer rapidement ; si vos deux mains sont libres, vous pouvez accroître votre Vitesse à 9 m lorsque vous courrez sur vos quatre membres."
            ]
        },
        {
            "name"           : "Automate combattant",
            "name_lower_case": "automate combattant",
            "general_desc"   : [
                "Plus volumineux et puissant, votre corps a été conçu pour le combat. Vous avez une forme humanoïde et volumineuse. Le dé de dégâts de votre poing passe à 1d6 au lieu de 1d4. Vous ne subissez pas de pénalité lorsque vous portez une attaque létale avec votre poing ou n'importe quelle autre attaque à mains nues."
            ]
        },
        {
            "name"           : "Automate tireur de précision",
            "name_lower_case": "automate tireur de précision",
            "general_desc"   : [
                "Votre forme humanoïde et légère est conçue pour la vitesse et la précision en combat à distance. Vous obtenez l'action sports_martial_artsVisée de l'automate"
            ]
        },
        {
            "name"           : "Azarketi des profondeurs",
            "name_lower_case": "azarketi des profondeurs",
            "general_desc"   : [
                "Votre héritage remonte aux azarketis vivant dans les profondeurs de l'océan et vous pouvez supporter les profondeurs glaciales plus aisément que la plupart. Vous obtenez une résistance au froid égale à la moitié de votre niveau et vous ne traitez pas les environnements froids comme d'un degré plus sévère lorsque vous êtes mouillé. Vous vous adaptez aux changements de pression en étant sous l'eau de manière automatique sans subir aucun effet néfaste."
            ]
        },
        {
            "name"           : "Azarketi écaille antique",
            "name_lower_case": "azarketi écaille antique",
            "general_desc"   : [
                "Votre lignée remonte aux azarketis qui sont restés accrochés à leurs racines de l'océan profond. Divorcé de la société terrienne, vous êtes étranger à tous les mondes qui se trouvent au-dessus d'un millier de brasses de profondeur. Vous obtenez vision dans le noir.",
                "Votre corps est parsemé de points phosphorescents qui émettent une lumière qui vous guide et vous aide à communiquer. Les points lumineux — localisés principalement sur votre visage, vos bras et vos mains — émettent de la lumière faible dans un rayon de 3 mètres autour de vous. Vous pouvez activer, désactiver ou modifier l'arrangement des lumières par une action qui possède le trait concentration."
            ]
        },
        {
            "name"           : "Azarketi endurci",
            "name_lower_case": "azarketi endurci",
            "general_desc"   : [
                "Vos ancêtres ont dû survivre dans de l'eau polluée qui a rendu chaque inspiration toxique. Vous obtenez une résistance au poison égale à la moitié de votre niveau (minimum 1). De plus, vous pouvez survivre en dehors de l'eau pendant 72 heures avant de commencer à suffoquer."
            ]
        },
        {
            "name"           : "Azarketi épineux",
            "name_lower_case": "azarketi épineux",
            "general_desc"   : [
                "Vos nageoires masquent des épines toxiques que vous pouvez jeter. Vous avez une attaque à mains nues à distance d'épine avec le trait à mains nues qui inflige casino1d4 dégâts de poison , possède un facteur de portée de 3 m et est dans le groupe d'armes des fléchettes."
            ]
        },
        {
            "name"           : "Azarketi fluvial",
            "name_lower_case": "azarketi fluvial",
            "general_desc"   : [
                "Vous descendez des azarketis qui ont abandonné les océans pour l'eau douce et la vie à l'intérieur des terres. La géographie variée des rivières rend nécessaire que vous développiez des compétences physiques avancées pour nager contre les rapides, bondir dans les eaux des cascades et naviguer avec expertise dans les canaux peu profonds et étroits.",
                "Lorsque vous obtenez un succès sur un test d'Athlétisme pour Nager, il devient un succès critique."
            ]
        },
        {
            "name"           : "Azarketi Soufflebrume",
            "name_lower_case": "azarketi soufflebrume",
            "general_desc"   : [
                "Vous descendez des Azarketis qui ont migré vers les environnements terrestres qui peuvent supporter leurs besoins d'eau. Au fil du temps, votre peuple s'est adapté à la vie sur la terre ferme culturellement et physiquement, ce qui a donné même des azarketis nés avec des cheveux humains comme leurs ancêtres azlants. Vous n'avez plus besoin de vous immerger dans l'eau toutes les 24 heures pour entretenir votre peau et vous pouvez à la place brumatiser ou humidifier votre peau avec de l'eau pour vivre de manière confortable. Votre Vitesse est de 7,50 mètres, mais votre Vitesse de nage est de seulement 4,50 m."
            ]
        },
        {
            "name"           : "Azarketi tactile",
            "name_lower_case": "azarketi tactile",
            "general_desc"   : [
                "Votre peau peut détecter les moindres changements dans les courants océaniques. Vous obtenez un sens imprécis d'une portée de 9 m vous permettant de percevoir les déplacements dans l'eau qui vous entoure. Vous obtenez aussi un bonus de circonstances de +1 aux tests de Survie pour sports_martial_artsVous orienter dans les environnements aquatiques."
            ]
        },
        {
            "name"           : "Azarketi thalassique",
            "name_lower_case": "azarketi thalassique",
            "general_desc"   : [
                "Vous retracez votre lignage des azarketis qui ont vécu leurs vies parmi les grands océans et les mers du monde. Vous savez comment utiliser les courants et la magie primordiale de l'eau pour guider vos attaques. Vous obtenez le don de compétence military_techMaraudeur aquatique et les facteurs de portée de vos attaques à distance perforantes ne sont pas divisés par deux lorsque vous combattez des cibles sous l'eau."
            ]
        },
        {
            "name"           : "Azarketi Yeuxobscurs",
            "name_lower_case": "azarketi yeuxobscurs",
            "general_desc"   : [
                "Vous vivez dans les eaux sombres et vous êtes accoutumé à la vie dans un environnement à faible visibilité. Vous avez besoin seulement de réussir un casinoTest nu, DD 3 lorsque vous ciblez une créature Masquée et un casinoTest nu, DD 9 lorsque vous ciblez une créature Cachée."
            ]
        },
        {
            "name"           : "Centaure allure de poney",
            "name_lower_case": "centaure allure de poney",
            "general_desc"   : [
                "Vous êtes plus petit que la plupart des autres centaures, bien que pas moins rapide. Au lieu d'être de taille Grande, votre taille est Moyenne. Vous obtenez un bonus de circonstances de +1 aux jets de Réflexes."
            ]
        },
        {
            "name"           : "Centaure aspirant orateur",
            "name_lower_case": "centaure aspirant orateur",
            "general_desc"   : [
                "Vous êtes né une parcelle de magie qui a pu vous placer sur la voie pour devenir un Orateur vert ou un Orateur de la foi. Choisissez divin ou primordial. Si vous avez choisi, vous êtes un orateur de la fois. Si vous avez choisi primordal, vous êtes un orateur vert. Ce choix ne peut être changé. Vous obtenez un tour de magie de la liste de sorts choisie. Vous pouvez lancer ce sort comme un sort inné à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur."
            ]
        },
        {
            "name"           : "Centaure au coeur robuste",
            "name_lower_case": "centaure au coeur robuste",
            "general_desc"   : [
                "Vous êtes un centaure robuste, à l'allure ferme et au cœur solide. Vous obtenez 10 Points de vie de votre ascendance au lieu de 8 et obtenez un bonus de circonstances de +1 aux tests d'Acrobaties pour sports_martial_artsGarder l'équilibre et à votre jet de Réflexes pour éviter les crocs-en-jambe."
            ]
        },
        {
            "name"           : "Centaure fersabot",
            "name_lower_case": "centaure fersabot",
            "general_desc"   : [
                "Vos sabots sont incroyablement puissants et vous servent d'armes formidables. Vous obtenez une attaque à mains nues de sabot qui infligent 1d6 dégâts contondants. Vos sabots sont dans le groupe pugilat et possèdent les traits finesse et à mains nues."
            ]
        },
        {
            "name"           : "Centaure file au vent",
            "name_lower_case": "centaure file au vent",
            "general_desc"   : [
                "Vous êtes élancé et capable d'atteindre des vitesses incroyables grâce à vos seuls sabots. Votre vitesse augmente de 1,50 mètre."
            ]
        },
        {
            "name"           : "Centaure moucheté",
            "name_lower_case": "centaure moucheté",
            "general_desc"   : [
                "Votre pelage est tacheté ou rayé, ce qui vous permet de vous camoufler naturellement dans votre environnement. Choisissez un terrain parmi les suivants : arctique, désert, forêt, marais, montagne ou plaines. Sur le terrain choisi, vous obtenez un bonus de circonstances de +1 aux tests de Discrétion pour sports_martial_artsVous cacher ou sports_martial_artsÊtre furtif et aux tests de Duperie pour sports_martial_artsFeinter ."
            ]
        },
        {
            "name"           : "Changelin",
            "name_lower_case": "changelin",
            "general_desc"   : [
                "Votre mère était une guenaude. Vos yeux vairons sont la plus visible des marques de cette parenté mais vous pourriez avoir aussi une carrure plus maigre, une peau plus pâle et des cheveux plus noirs que la majorité des membres de votre parentèle. Vous obtenez le trait changelin. Vous obtenez aussi vision nocturne ou vision dans le noir si votre ascendance possède déjà vision nocturne. Vous pouvez choisir vos dons ancestraux parmi les dons des changelins et parmi les dons de l'ascendance de votre autre parent chaque fois que vous obtenez un don ancestral."
            ]
        },
        {
            "name"           : "Chêne dur",
            "name_lower_case": "chêne dur",
            "general_desc"   : [
                "La plupart des ghorans ont des corps faits de lianes souples et de tiges coriaces mais vous êtes couvert d'une solide écorce rugueuse et vos jambre sont stables comme les racines. Vous obtenez un bonus de circonstances de +2 à vos DD de Vigueur ou de Réflexes contre les tentatives faites pour vous sports_martial_artsSaisir ou vous faire un sports_martial_artsCroc-en-jambe . Ce bonus s'applique aussi aux jets de sauvegarde contre les effets qui devraient vous sentiment_very_dissatisfiedAgripper , vous sentiment_very_dissatisfiedEntraver ou vous mettre sentiment_very_dissatisfiedÀ terre . Vous obtenez aussi un bonus de circonstances de +2 sur les tests d'Acrobaties pour sports_martial_artsGarder l'équilibre ."
            ]
        },
        {
            "name"           : "Crépusculaire",
            "name_lower_case": "crépusculaire",
            "general_desc"   : [
                "Suite à un ancien marché, votre âme a été réincarnée en tant que crépusculaire, un scion planaire avec un lien à l'égard des psychopompes et du Cimetière. Vous obtenez le trait crépusculaire. Vous obtenez aussi vision nocturne ou vous obtenez vision dans le noir si votre ascendance bénéficie déjà de la vision nocturne. Ni votre corps, ni votre esprit ne peuvent jamais devenir mort-vivant. Vous pouvez choisir vos dons ancestraux parmi les dons des crépusculaires ou ceux de votre autre ascendance lorsque vous obtenez un don ancestral."
            ]
        },
        {
            "name"           : "Dhampir",
            "name_lower_case": "dhampir",
            "general_desc"   : [
                "Vous êtes l'engeance d'un vampire, moitié vivant et moitié mort-vivant, doté d'un charme et d'une grâce extraordinaires, un teint blafard et des incisives allongées. Vous obtenez le trait dhampir, en plus des traits de votre ascendance. Vous avez la capacité guérison du vide, ce qui signifie que vous êtes blessé par les dégâts de vitalité et soigné par les effets de vide comme si vous étiez un mort-vivant. Vous obtenez aussi vision nocturne ou vision dans le noir si votre ascendance possède déjà vision nocturne. Vous pouvez choisir parmi les dons de dhampir et ceux de votre autre ascendance lorsque vous obtenez un don ancestral."
            ]
        },
        {
            "name"           : "Dijiang",
            "name_lower_case": "dijiang",
            "general_desc"   : [
                "Vous avez la forme d'une boule de cuir recouverte d'une courte fourrure, dépourvue de visage, dotée de six pattes et un lien avec le chaos primordial. Bien que vous n'ayez ni visage, ni tête, ni bouche, ni yeux, ni oreilles, vous pouvez entendre, parler, voir, manger et respirer sans problème (bien que l'on ne sache pas exactement comment). Votre nature erratique signifie que vous réagissez souvent aux stimuli de manière imprévisible.",
                "Lorsque vous obtenez un échec (mais pas une échec critique) sur un jet de sauvegarde contre un effet d'émotion, il devient un succès."
            ]
        },
        {
            "name"           : "Distordu cataphracte",
            "name_lower_case": "distordu cataphracte",
            "general_desc"   : [
                "Votre squelette endurci par le combat est doté de cartilages et de muscles supplémentaires pour vous aider à porter l'armure sur de vastes zones d'opération et votre peau est parée de minuscules éperons de kératine souple et résistante pour optimiser l'adhérence et la répartition du poids de votre armure. Vous obtenez le don général military_techMaîtrise d'armure .",
                "Si votre classe vous permet d'être qualifié avec tous les types d'armure, vous devenez à la place qualifié en Athlétisme (ou dans une compétence de votre choix si vous êtes déjà qualifié en l'Athlétisme) et obtenez le don de compétence military_techAide armure ."
            ]
        },
        {
            "name"           : "Distordu créé",
            "name_lower_case": "distordu créé",
            "general_desc"   : [
                "Vous avez été créé par le biais de processus chimiques ou occultes, tel qu'une cuve d'élevage ou cousu à partir de parties de corps d'autres créatures par un scientifique en Ustalav. Votre corps fabriqué est solide. Vous n'avez pas besoin de manger et ne mourrez pas de faim. Vous obtenez un bonus de circonstances de +2 aux jets de sauvegarde contre les maladies."
            ]
        },
        {
            "name"           : "Distordu forméforgé",
            "name_lower_case": "distordu forméforgé",
            "general_desc"   : [
                "En tant que victime de distorsion de la chair, vous êtes plus à même d'avoir de la chair flasque, des éperons osseux ou des traits de créatures non humaines qui sortent de votre peau. Vous avez quoi qu'il en soit réussi à surmonter le processus psychique de votre transformation pour en faire une force. Vous obtenez une résistance aux dégâts mentaux égale à la moitié de votre niveau (minimum 1)."
            ]
        },
        {
            "name"           : "Distordu hypersensible",
            "name_lower_case": "distordu hypersensible",
            "general_desc"   : [
                "Les ondulations des cils de votre corps sont hyper-accordées aux sources de la magie. Ils frémissent et vibrent au contact des énergies occultes et leurs vibrations vous alertent sur la présence de secrets. Vous êtes qualifié en Occultisme. Si vous êtes déjà qualifié en Occultisme, vous êtes qualifié dans une autre compétence de votre choix. Vous gagnez également le don de compétence military_techIdentification de bizarreries ."
            ]
        },
        {
            "name"           : "Distordu mutant",
            "name_lower_case": "distordu mutant",
            "general_desc"   : [
                "Transformé par une magie incontrôlée, vous provenez de la Désolation de Mana ou d'une autre région dévastée de la même manière par la magie incontrôlée.",
                "Du fait de vos organes renforcés ou redondants, les tests pour récupérer des dégâts de saignement se fait contre un DD 10 au lieu de 15 et il est réduit à casinoTest nu, DD 5 au lieu de 10 si vous bénéficiez d'une assistance particulièrement efficace pour récupérer des dégâts persistants."
            ]
        },
        {
            "name"           : "Distordu rebuté",
            "name_lower_case": "distordu rebuté",
            "general_desc"   : [
                "Les biomanciens et les mutagénistes qui ont distordu votre forme vous ont étiqueté comme un \"rebut non conforme\" - un euphémisme signifiant la destruction à vue. Anomalie parmi les anomalies, votre corps rejette obstinément les efforts des distordeurs de chair qui cherchent à vous modeler pour correspondre à leurs visions grandioses et vos réponses immunitaires atténuent les pires effets des tentatives des distorsions de la chair non souhaitées. Si vous obtenez un succès sur un jet de sauvegarde contre un effet de transmutation, il devient un succès critique."
            ]
        },
        {
            "name"           : "Distordu technologique",
            "name_lower_case": "distordu technologique",
            "general_desc"   : [
                "Votre transformation est due à une manipulation par une technologie avancée, comme celles trouvées en Numérie. Vos émotions sont ternes et difficiles à influencer. Lorsque vous obtenez un succès sur un jet de sauvegarde contre un effet d'émotion, il devient un succès critique."
            ]
        },
        {
            "name"           : "Draxie",
            "name_lower_case": "draxie",
            "general_desc"   : [
                "Vous êtes affilié aux dragons féeriques et pouvez faire remonter votre héritage à la mort du plus puissant dragon féerique du Premier Monde. Vous obtenez une télépathie de contact, vous permettant de communiquer silencieusement et seulement mentalement avec toute créature que vous touchez, tant que vous partagez une langue commune."
            ]
        },
        {
            "name"           : "Dromaar",
            "name_lower_case": "dromaar",
            "general_desc"   : [
                "La force des orcs renforce votre lignée. Votre peau aux nuances verdâtres et d'autres indicateurs de votre héritage orque. Vous obtenez le trait orc, le trait dromaar et la vision nocturne. Lorsque vous obtenez un don ancestral, vous pouvez le choisir parmi la liste de dons des orcs, des dromaars et celle de votre ascendance."
            ]
        },
        {
            "name"           : "Elfe ancien",
            "name_lower_case": "elfe ancien",
            "general_desc"   : [
                "Durant votre longue vie, vous avez emprunté de nombreux chemins et de nombreux styles. Un elfe ancien typique est âgé d'au moins 100 ans mais peut être plus jeune à la discrétion du MJ. Choisissez une classe autre que la vôtre. Vous obtenez le don de dévouement multiclasse de cette classe, même si vous n'en remplissez pas les conditions de niveau. Vous devez toujours remplir les autres prérequis pour obtenir le don."
            ]
        },
        {
            "name"           : "Elfe arctique",
            "name_lower_case": "elfe arctique",
            "general_desc"   : [
                "Vous vivez dans les profondeurs glacées du Nord et avez développé une incroyable endurance aux environnements froids, qui vous confère une résistance au froid égale à la moitié de votre niveau (avec un minimum de 1). Vous subissez tous les effets environnementaux liés au froid comme si leur intensité était réduite d'un rang (le froid extraordinaire devient extrême, le froid extrême devient important, etc.)."
            ]
        },
        {
            "name"           : "Elfe des bois",
            "name_lower_case": "elfe des bois",
            "general_desc"   : [
                "Vous vous êtes adapté à la vie dans la forêt, la jungle profonde ou tout autre environnement similaire et vous savez comment grimper aux arbres et utiliser le feuillage à votre avantage. Quand vous sports_martial_artsEscaladez les arbres, les lianes ou dans les frondaisons, vous vous déplacez à la moitié de votre Vitesse en cas de succès et à votre Vitesse en cas de succès critique (et vous vous déplacez à votre vitesse totale si vous possédez le don military_techEscalade rapide en cas de succès). Cela ne vous affecte pas si vous utilisez une Vitesse d'escalade.",
                "Vous pouvez toujours utiliser l'action sports_martial_artsSe mettre à l'abri quand vous vous trouvez sur un terrain forestier pour obtenir un abri, même si vous ne vous trouvez pas près d'un obstacle derrière lequel vous Mettre à l'abri."
            ]
        },
        {
            "name"           : "Elfe des cavernes",
            "name_lower_case": "elfe des cavernes",
            "general_desc"   : [
                "Vous êtes né ou avez passé de nombreuses années dans des tunnels souterrains ou des cavernes où la lumière est rare. Vous obtenez vision dans le noir."
            ]
        },
        {
            "name"           : "Elfe des murmures",
            "name_lower_case": "elfe des murmures",
            "general_desc"   : [
                "Vous avez l'ouïe fine, capable de détecter même les plus légers chuchotements. Vous obtenez un bonus de circonstances de +2 lorsque vous utilisez votre ouïe en utilisant l'action sports_martial_artsChercher pour trouver des créatures sentiment_very_dissatisfiedCachées ou sentiment_very_dissatisfiedNon détectées qui se trouvent à moins de 9 mètres de vous.",
                "Lorsque vous ciblez un adversaire qui vous est sentiment_very_dissatisfiedMasqué ou Caché, vous réduisez le DD du test nu à 3 si la cible est Masquée et à 9 si la cible est Cachée. Cet avantage ne s'applique pas si vous ne pouvez entendre ou si la créature est incapable de produire un son (par exemple, si elle est affectée par un sort de auto_awesomeSilence )."
            ]
        },
        {
            "name"           : "Elfe du désert",
            "name_lower_case": "elfe du désert",
            "general_desc"   : [
                "Vous vivez sous la chaleur brûlante du désert, ce qui vous confère une résistance incroyable aux environnements chauds.",
                "Vous obtenez une résistance au feu égale à la moitié de votre niveau (minimum 1), et les effets liés à la chaleur de l'environnement sont d'un rang moins extrême pour ce qui vous concerne (une chaleur extraordinaire devient extrême, une chaleur extrême devient importante, etc)."
            ]
        },
        {
            "name"           : "Elfe visionnaire",
            "name_lower_case": "elfe visionnaire",
            "general_desc"   : [
                "Vous avez le pouvoir inné de détecter et comprendre les phénomènes magiques. Vous pouvez lancer le tour de magie auto_awesomeDétection de la magie comme un sort inné arcanique à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur.",
                "En outre, vous obtenez un bonus de circonstances de +1 à vos tests pour sports_martial_artsIdentifier la magie et sports_martial_artsDéchiffrer un texte de nature magique. Ces actions utilisent généralement les compétences Arcanes, Nature, Occultisme ou Religion."
            ]
        },
        {
            "name"           : "Fetchelin des profondeurs",
            "name_lower_case": "fetchelin des profondeurs",
            "general_desc"   : [
                "Vos prédécesseurs se sont enfoncés au plus profond du Nébulmonde, dans les régions les plus dangereuses. Vous pouvez projeter une ombre plus dense, avoir un pouls plus lent ou vous trouver à l'aise dans l'étreinte de l'obscurité. Vous obtenez une résistance aux dégâts de froid ou aux dégâts de vide égale à la moitié de votre niveau (minimum 1), en fonction du type choisi lorsque vous choisissez cet héritage."
            ]
        },
        {
            "name"           : "Fetchelin déterminé",
            "name_lower_case": "fetchelin déterminé",
            "general_desc"   : [
                "Vos ancêtres ont longtemps fait affaire avec l'horreur — Sur le Nébulmonde ou ailleurs — et vous portez leur résistance mentale. Lorsque vous obtenez un succès sur un jet de sauvegarde contre un effet d'émotion, il devient un succès critique."
            ]
        },
        {
            "name"           : "Fetchelin liminal",
            "name_lower_case": "fetchelin liminal",
            "general_desc"   : [
                "Vous provenez d'une lignée de fetchelins disposant d'un lien plus proche avec les plans Éthéré et le Nébulmonde et vous partagez l'affinité de ces royaumes avec l'entre-deux et l'invisible. Vous obtenez un bonus de circonstances de +1 pour localiser les créatures sentiment_very_dissatisfiedNon détectées dans les 18 m lorsque vous utilisez l'action Chercher. Votre test nu pour cibler les créatures sentiment_very_dissatisfiedMasquées se fait contre un casinoTest nu, DD 3 au lieu d'un DD 5 et le DD de votre test nu pour cibler de créatures Non détectées est de casinoTest nu, DD 9 au lieu de 11."
            ]
        },
        {
            "name"           : "Fetchelin lumineux",
            "name_lower_case": "fetchelin lumineux",
            "general_desc"   : [
                "Votre corps est la preuve que l'ombre ne peut exister sans lumière. Peut-être que vos yeux brillent plus fort ou que vos veines émettent parfois de la lumière. Vous émettez une lumière faible à 1,50 mètre autour de vous. Vous pouvez activer ou supprimer cette capacité par une action qui possède le trait concentration. De plus, vous pouvez forcer des fragments de votre ombre à briller et à lancer auto_awesomeLumière comme un tour de magie occulte inné. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur."
            ]
        },
        {
            "name"           : "Fetchelin menu",
            "name_lower_case": "fetchelin menu",
            "general_desc"   : [
                "L'exposition au Nébulmonde de vos ancêtres a entraîné d'importants changements. Vos cheveux ou votre peau apparaît parfois sans substance et vous êtes plus maigre et plus agile que les autres fetchelins. Vous êtes de taille Petite au lieu de Moyenne. Vous êtes qualifié en Acrobaties, obtenez le don de compétence military_techSe faufiler rapidement et un bonus de circonstances de +1 aux tests d'Acrobaties pour réaliser un sports_martial_artsDéplacement acrobatique . Si vous êtes automatiquement qualifié en Acrobaties (du fait de votre historique ou de votre classe par exemple), vous devenez à la place qualifié dans une compétence de votre choix."
            ]
        },
        {
            "name"           : "Frêne ancien",
            "name_lower_case": "frêne ancien",
            "general_desc"   : [
                "Votre mémoire est vive et précise et vous vous souvenez de tant de choses. Vous vous rappelez le calme avant la tempête, de la terre après la pluie, du goût âcre de la magie et du murmure d'une chanson. Vous vous souvenez de tout. Vous êtes qualifié dans une compétence de votre choix. Au niveau 5, vous devenez expert dans cette compétence."
            ]
        },
        {
            "name"           : "Gandharva",
            "name_lower_case": "gandharva",
            "general_desc"   : [
                "Vous descendez des musiciens, des poètes et des danseurs auto-proclamés des dieux, avec un corps qui est en partie humanoïde et en partie cheval ou oiseau. Si vous obtenez des ailes, ils viennent sous formes de couleurs brillantes différentes. Du fait de votre lien céleste, la tradition de tous les sorts ou des capacités magiques que vous obtenez d'un héritage de sprite ou d'un don ancestral est divine au lieu de sa tradition normale.",
                "Vous êtes qualifié en Représentation (ou une autre compétence de votre choix si vous êtes qualifié en Représentation) et vous pouvez lancer auto_awesomeConvocation d'instrument comme un tour de magie inné divin."
            ]
        },
        {
            "name"           : "Gnome béni des fées",
            "name_lower_case": "gnome béni des fées",
            "general_desc"   : [
                "Le sang des fées coule dans vos veines, vous saturant de leur magie et vous transformant en l'une d'elle. Vous obtenez le trait fée, en plus des traits gnome et humanoïde. Choisissez un tour de magie dans la liste des sorts primordiaux. Vous pouvez Lancer ce tour de magie comme un sort inné primordial à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur. Une fois par jour, vous pouvez échanger ce tour de magie contre un autre choisi dans la même liste en méditant pour vous réaligner avec le Premier Monde. Il s'agit d'une activité qui dure 10 minutes qui possède le trait concentration."
            ]
        },
        {
            "name"           : "Gnome caméléon",
            "name_lower_case": "gnome caméléon",
            "general_desc"   : [
                "La couleur de vos cheveux et de votre peau peut évoluer, peut-être grâce à la magie latente des influences du Premier Monde ou d'effets d'illusions persistantes. Vous pouvez lentement modifier l'éclat et la couleur exacte et cette coloration peut être différente selon les parties de votre corps, vous permettant de créer des motifs ou des dessins colorés. Il vous suffit d'une action unique pour effectuer des changements mineurs et localisés sur votre corps ou vous pouvez consacrer une heure aux changements importants qui affectent alors votre corps entier. Quand vous dormez, ces couleurs changent naturellement en fonction de vos rêves et vous vous réveillez chaque matin avec un coloris inattendu. Lorsque vous vous trouvez dans un endroit où votre coloration est proche de la couleur de votre environnement (par exemple, un vert végétal dans une forêt), vous pouvez utiliser l'action unique pour faire des modifications mineures et localisées pour mieux vous fondre dans votre environnement. Vous obtenez ainsi un bonus de circonstances de +2 à vos tests de Discrétion jusqu'à ce que votre environnement change de couleur ou de motifs."
            ]
        },
        {
            "name"           : "Gnome kijimuna",
            "name_lower_case": "gnome kijimuna",
            "general_desc"   : [
                "Vos ancêtres ont vécu dans les arbres et pêché dans toutes les eaux du Tian Xia. Vous obtenez au choix un des avantages suivants. Une fois qu'il est fait, ce choix ne peut plus être modifié.",
                "Vous pouvez excalader tout banyan. Vous obtenez le don military_techCombattant grimpeur et si vous obtenez un succès sur un test d'Athlétisme pour Escalader, il devient un succès critique.\nVous pouvez attraper n'importe quel poisson. Vous obtenez une vitesse de nage de 4,50 mètres."
            ]
        },
        {
            "name"           : "Gnome ombral",
            "name_lower_case": "gnome ombral",
            "general_desc"   : [
                "Que ce soit par un lien avec les fées sombres ou les fées des ombres, avec les gnomes des profondeurs (aussi appelés les drathnelar) ou d'une autre origine, vous pouvez voir dans le noir total. Vous obtenez Vision dans le noir."
            ]
        },
        {
            "name"           : "Gnome sensitif",
            "name_lower_case": "gnome sensitif",
            "general_desc"   : [
                "Par rapport à vos congénères, vous voyez toutes les couleurs avec plus d'intensité, vous entendez les sons avec plus de finesse et vous pouvez identifier les innombrables nuances qui composent une odeur. Vous gagnez le sens spécial : odorat imprécis avec une portée de 9 mètres. Cela signifie que vous pouvez utiliser votre odorat pour déterminer l'emplacement exact d'une créature. Le MJ double généralement la portée de ce pouvoir si vous êtes sous le vent par rapport à cette créature, ou la divise par deux si c'est l'inverse.",
                "En outre, vous obtenez un bonus de circonstances de +2 à vos tests de Perception à chaque fois que vous tentez de localiser une créature non détectée qui se trouve à la portée de votre odorat."
            ]
        },
        {
            "name"           : "Gnome source",
            "name_lower_case": "gnome source",
            "general_desc"   : [
                "Une autre source de magie a pris l'ascendant sur la magie primordiale de votre ascendance féerique. Cette connexion peut provenir d'un plan occulte ou d'un ancien chant occulte, être liée à une divinité, un céleste ou un fiélon, être le fruit de la pollution laissée par une guerre entre mages ou une antique magie runique.",
                "Choisissez entre les traditions arcanique, divine ou occulte. Vous obtenez un tour de magie choisi dans la liste de sorts de cette tradition. Vous pouvez Lancer ce sort à volonté sous la forme d'un sort inné de la tradition que vous avez choisie. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur. À chaque fois que vous devriez obtenir un sort inné primordial grâce à un don ancestral gnome, remplacez la tradition primordiale qui lui est associée par celle que vous avez choisie."
            ]
        },
        {
            "name"           : "Gnome vivace",
            "name_lower_case": "gnome vivace",
            "general_desc"   : [
                "Vous possédez un lien incroyablement fort avec l'énergie de vitalité qui coule à travers le Premier Monde, ce qui rend plus difficile de s'en prendre à votre force vitale avec de l'énergie de vide. Vous obtenez une résistance à l'énergie de vide égale à la moitié de votre niveau (minimum 1). Lorsque vous avez l'état sentiment_very_dissatisfiedCondamné , cet état vous affecte comme si sa valeur était inférieure de 1 à ce qu'elle est actuellement (Condamné 1 n'a pas d'effet, Condamné 2 provoque votre mort lorsque vous êtes sentiment_very_dissatisfiedMourant 3 , etc)."
            ]
        },
        {
            "name"           : "Gobelin à queue",
            "name_lower_case": "gobelin à queue",
            "general_desc"   : [
                "Vous disposez d'une queue puissante, sans doute parce que vous descendez d'une communauté de singes gobelins. Vous bénéficiez d'un bonus de circonstances de +2 aux tests d'Athlétisme pour sports_martial_artsEscalader , vous obtenez military_techCombattant-grimpeur comme don supplémentaire et vous réduisez de une le nombre de mains libres qui sont nécessaires pour Escalader ou faire un sports_martial_artsCroc-en-jambe ."
            ]
        },
        {
            "name"           : "Gobelin arboricole",
            "name_lower_case": "gobelin arboricole",
            "general_desc"   : [
                "Vous vous êtes adapté particulièrement bien en vivant dans les environnements forestiers. Tant que vous vous trouvez dans une forêt ou une jungle, vous obtenez un bonus de circonstances de +2 aux tests de Discrétion pour sports_martial_artsVous cacher et sports_martial_artsÊtre furtif , aux tests de Survie pour sports_martial_artsSubsister et à votre DD de Survie pour sports_martial_artsDissimuler des traces ."
            ]
        },
        {
            "name"           : "Gobelin Boyaud'fer",
            "name_lower_case": "gobelin boyaud'fer",
            "general_desc"   : [
                "Vous pouvez vous nourrir d'aliments que la plupart des gens considéreraient comme avariés. Quand vous vous trouvez dans une agglomération, tant qu'il y a des ordures disponibles, vous pouvez vous nourrir convenablement avec de maigres repas, sans devoir utiliser l'activité d'intermède sports_martial_artsSubsister . Vous pouvez manger et boire même quand vous êtes sentiment_very_dissatisfiedNauséeux .",
                "Vous obtenez un bonus de circonstances de +2 à vos jets de sauvegarde contre les afflictions, contre l'état Nauséeux et pour supprimer l'état Nauséeux. Quand vous obtenez un succès sur un jet de Vigueur affecté par ce bonus, vous bénéficiez d'un succès critique. Tous ces avantages ne s'appliquent que lorsque l'affliction ou l'état résulte de quelque chose que vous avez ingéré."
            ]
        },
        {
            "name"           : "Gobelin Dent'rasoir",
            "name_lower_case": "gobelin dent'rasoir",
            "general_desc"   : [
                "Dans votre famille, les dents constituent des armes formidables. Vous obtenez une attaque à mains nues de mâchoires qui inflige 1d6 dégâts perforants. Vos mâchoires font partie du groupe pugilat et possèdent les traits finesse et mains nues."
            ]
        },
        {
            "name"           : "Gobelin des neiges",
            "name_lower_case": "gobelin des neiges",
            "general_desc"   : [
                "Vous vous êtes acclimaté à la vie dans les terres glacées. Votre carnation se situe entre le bleu clair et le bleu marine. Vous êtes également couvert d'une fourrure bleue. Vous obtenez une résistance au froid égale à la moitié de votre niveau (avec un minimum de 1). Vous subissez tous les effets environnementaux liés au froid comme si leur intensité était réduite d'un rang (le froid extraordinaire devient extrême, le froid extrême devient important, etc.)."
            ]
        },
        {
            "name"           : "Gobelin dokkaebi",
            "name_lower_case": "gobelin dokkaebi",
            "general_desc"   : [
                "Vos ancêtres ont maîtrisé la magie basé sur l'illusion, vous en léguant une compréhension innée. Vous pouvez lancer auto_awesomeChimère en tant que tour de magie occulte inné à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur. Vous obtenez aussi un bonus de circonstances de +1 à vos jets de Volonté contre les illusions."
            ]
        },
        {
            "name"           : "Gobelin Incassable",
            "name_lower_case": "gobelin incassable",
            "general_desc"   : [
                "Votre crâne exceptionnellement épais, vos os cartilagineux et de nombreuses autres particularités physiques vous permettent de vous remettre promptement de vos blessures. Votre ascendance vous fait gagner 10 Points de vie au lieu de 6. Quand vous tombez, les dégâts que vous subissez correspondent à ceux d'une chute deux fois moins importante."
            ]
        },
        {
            "name"           : "Gobelin peaud'charbon",
            "name_lower_case": "gobelin peaud'charbon",
            "general_desc"   : [
                "Vos ancêtres ont toujours eu une connexion avec le feu et une peau plus épaisse que la norme, qui vous permet de mieux résister au feu. Vous obtenez une résistance au feu égale à la moitié de votre niveau (avec un minimum de 1). Vous vous remettez également plus vite des brûlures causées par le feu. Votre test nu pour guérir des dégâts de feu persistants se fait contre un DD 10 au lieu de 15 et est réduit à un casinoTest nu, DD 5 si une autre créature utilise une action particulièrement adaptée pour vous aider."
            ]
        },
        {
            "name"           : "Goloma à vision de loin",
            "name_lower_case": "goloma à vision de loin",
            "general_desc"   : [
                "Vos yeux se sont adaptés pour mieux voir dans des conditions moins favorables. Vous obtenez vision nocturne."
            ]
        },
        {
            "name"           : "Goloma effrayant",
            "name_lower_case": "goloma effrayant",
            "general_desc"   : [
                "Votre visage a une apparence particulièrement rebutante. Vous êtes qualifié en Intimidation (ou dans une compétence de votre choix si vous êtes déjà qualifié en Intimidation) et vous obtenez le don de compétence military_techRegard intimidant comme don supplémentaire.",
                "Note : Si vous êtes déjà qualifié dans la compétence fournie par ce don, vous devez sélectionner manuellement une compétence alternative."
            ]
        },
        {
            "name"           : "Goloma perspicace",
            "name_lower_case": "goloma perspicace",
            "general_desc"   : [
                "Vous avez appris à repérer les signes révélateurs de sentiments dangereux pour vous aider à éviter les ennuis. Vous obtenez un bonus de circonstances de +1 à votre DD de Perception contre les tentatives de vous Mentir et à vos tests de Perception pour Deviner les intentions."
            ]
        },
        {
            "name"           : "Goloma vicieux",
            "name_lower_case": "goloma vicieux",
            "general_desc"   : [
                "La chitine sur vos mains forme des griffes puissantes qui vous permettent de vous défendre. Vous obtenez une attaque à mains nues de griffe qui inflige 1d6 dégâts tranchants. Vos griffes font partie du groupe pugilat et possèdent les traits agile, finesse et à mains nues."
            ]
        },
        {
            "name"           : "Goloma vigilant",
            "name_lower_case": "goloma vigilant",
            "general_desc"   : [
                "Vous avez appris à être conscient non seulement des dangers physiques évidents, mais aussi des menaces magiques perceptibles. Vous pouvez lancer le tour de magie auto_awesomeDétection de la magie comme un sort inné arcanique à volonté. Un tour de magie est intensifié à un rang égal à la moitié de votre niveau arrondi au supérieur. De plus, votre conscience vous permet de remarquer les pièges magiques plus facilement que les autres. Votre maîtrise en Perception est considéré comme d'un cran supérieur lorsque vous tentez de détecter des pièges magiques. (qualifié est considéré comme expert, expert comme maître et maître comme légendaire)."
            ]
        },
        {
            "name"           : "Graine affamée",
            "name_lower_case": "graine affamée",
            "general_desc"   : [
                "Un de vos parents était un oni ou une graine affamée. vous possédez une paire de cornes, d'une taille variant d'une pointe conique à de longues protubérances. Vous pourriez avoir d'autres signes de votre parentèle, comme une peau colorée, des crocs et des griffes ou un troisème œil au milieu de votre front. Vous obtenez le trait oni. Vous obtenez une attaque à mains nues de cornes qui inflige 1d6 dégâts perforants et appartient au groupe pugilat. Lorsque vous obtenez un don ancestral, vous pouvez choisir parmi les dons de graine affamée et les dons de l'ascendance de votre autre parent."
            ]
        },
        {
            "name"           : "Grand kholo",
            "name_lower_case": "grand kholo",
            "general_desc"   : [
                "Vous êtes un kholo grand et puissant, avec une fourrure fauve et des taches brunes sur votre peau. Vous obtenez 10 Points de vie du fait de votre ascendance au lieu de 8 et bénéficiez d'un bonus de circonstances de +1 aux tests d'Athlétisme pour sports_martial_artsRepositionner , sports_martial_artsPousser ou faire un sports_martial_artsCroc-en-jambe à vos ennemis."
            ]
        },
        {
            "name"           : "Grig",
            "name_lower_case": "grig",
            "general_desc"   : [
                "Vous avez l'arrière train d'un criquet et adorez l'art et la musique. Vos pattes de criquet vous accordent un bonus de circonstances de +2 aux tests d'Athlétisme pour Sauter en hauteur ou Sauter en longueur et vous obtenez le tour de magie primordial inné auto_awesomeSon imaginaire ."
            ]
        },
        {
            "name"           : "Halfelin bois-sauvage",
            "name_lower_case": "halfelin bois-sauvage",
            "general_desc"   : [
                "Vous émergez des profondeurs de la jungle ou de la forêt et vous avez appris à utiliser votre petite taille pour vous faufiler à travers les sous-bois et autres obstacles. Vous ignorez les terrains difficiles provoqués par les plantes et les champignons, comme les broussailles, les lianes et les sous-bois."
            ]
        },
        {
            "name"           : "Halfelin des collines",
            "name_lower_case": "halfelin des collines",
            "general_desc"   : [
                "Habitué à la vie calme dans les collines, votre peuple trouve le repos et la relaxation réconfortants, plus particulièrement quand vous profitez des joies du confort. Quand vous regagnez des Points de vie pendant la nuit, ajoutez votre niveau aux PV récupérés. Quand quelqu'un fait appel à la compétence Médecine pour sports_martial_artsSoigner vos blessures , vous pouvez manger un en-cas pour ajouter votre niveau aux Points de vie que vous récupérez de ce traitement."
            ]
        },
        {
            "name"           : "Halfelin du crépuscule",
            "name_lower_case": "halfelin du crépuscule",
            "general_desc"   : [
                "Vos ancêtres ont accompli de nombreux actes secrets sous le couvert du crépuscule, que ce soit en bien ou en mal, et avec le temps, ils ont développé une capacité à voir dans la pénombre qui dépasse même l'acuité visuelle habituelle des halfelins. Vous obtenez de vision nocturne."
            ]
        },
        {
            "name"           : "Halfelin flegmatique",
            "name_lower_case": "halfelin flegmatique",
            "general_desc"   : [
                "Votre lignée est réputée pour garder la tête froide et résister à la panique dans les pires situations. Lorsque vous obtenez un succès sur un jet de sauvegarde contre un effet d'émotion, il devient un succès critique."
            ]
        },
        {
            "name"           : "Halfelin nomade",
            "name_lower_case": "halfelin nomade",
            "general_desc"   : [
                "Vos ancêtres parcourent les routes depuis des générations, sans jamais avoir ressenti la nécessité de s'installer quelque part. Vous gagnez deux langues de votre choix parmi les langues courantes et peu courantes auxquelles vous avez accès et, à chaque fois que vous choisissez le don military_techPolyglotte , Vous obtenez une langue supplémentaire."
            ]
        },
        {
            "name"           : "Halfelin observateur",
            "name_lower_case": "halfelin observateur",
            "general_desc"   : [
                "Vos sens particulièrement aiguisés vous donnent des indices en cas de danger ou de tromperie. Vous obtenez un bonus de circonstances de +1 à votre DD de Perception, mais pas à vos tests de Perception."
            ]
        },
        {
            "name"           : "Halfelin portepoisse",
            "name_lower_case": "halfelin portepoisse",
            "general_desc"   : [
                "Vous êtez né avec une étrange bénédiction : à l'inverse de la chance halfeline typique, vous pouvez à la place manipuler le destin des autres. Vous ne pouvez jamais prendre le don military_techChance halfeline et vous obtenez l'action sports_martial_artsPorter la poisse ."
            ]
        },
        {
            "name"           : "Hobgobelin commandant d'avortons",
            "name_lower_case": "hobgobelin commandant d'avortons",
            "general_desc"   : [
                "Vous descendez d'une longue lignée de hobgobelins qui ont dirigé des gobelins. Vous êtes plus petit que les autres hobgobelins, mais les gobelins écoutent toujours chacun des ordres que vous beuglez. Vous obtenez le don de compétence military_techContraindre un groupe . Si vous obtenez un succès sur un test d'Intimidation pour sports_martial_artsContraindre un gobelin, il devient un succès critique. Si vous obtenez un échec critique, il devient un échec."
            ]
        },
        {
            "name"           : "Hobgobelin courtespattes",
            "name_lower_case": "hobgobelin courtespattes",
            "general_desc"   : [
                "Vous avez un torse plus long et des épaules plus larges que la plupart des hobgobelins, de sorte que vos jambes semblent plus courtes en comparaison. Cela vous donne une ceinture abdominale forte et muclée et abaisse votre centre de gravité — traits qui vous aident sur une monture et à grimper — et vous êtes entraîné à monter en selle à un âge particulièrement jeune. Vous obtenez le don military_techChevaucher . De plus, vous n'êtes pas sentiment_very_dissatisfiedPris au dépourvu lorsque vous Escaladez."
            ]
        },
        {
            "name"           : "Hobgobelin fléau elfique",
            "name_lower_case": "hobgobelin fléau elfique",
            "general_desc"   : [
                "Les hobgobelins furent conçus il y a longtemps à partir des gobelins féconds mais peu fiables, pour servir d'armée contre les elfes. Bien que les elfes aient fini par libérer les hobgobelins de leur servitude, certains hobgobelins ont conservé leur résistance ancestrale à la magie, à laquelle ils se réfèrent sous le nom de \"magie elfique\". Vous obtenez la réaction sports_martial_artsRésister à la magie elfique ."
            ]
        },
        {
            "name"           : "Hobgobelin marchebataille",
            "name_lower_case": "hobgobelin marchebataille",
            "general_desc"   : [
                "Vous descendez d'une lignée de mercenaires errants, constamment en marche et récupérant de la nourriture au long du chemin. Si vous obtenez un échec, mais pas un échec critique, pour sports_martial_artsSubsister dans les étendues sauvages, vous parvenez toujours à vous nourrir vous-même avec des piteux repas. Lorsque vous explorez, vous pouvez sports_martial_artsVous empresser deux fois plus longtemps avant de devoir vous arrêter."
            ]
        },
        {
            "name"           : "Hobgobelin peaud'acier",
            "name_lower_case": "hobgobelin peaud'acier",
            "general_desc"   : [
                "Lorsque vous êtes coupé ou brûlé, votre corps répond en formant des cals robustes et souples à l'endroit de la blessure. Au fil du temps, cela rend les sections les plus vulnérables de votre corps plus dures et plus résistantes aux dégâts. Nombre d'hobgobelins Peaud'acier utilisent volontairement des lames et des flammes pour se scarifier eux-mêmes selon des schémas alambiqués, bien que ce ne soit pas le cas de tous. Votre test nu pour récupérer des dégâts physiques persistants (incluant le saignement), d'énergie persistants ou des dégâts de poison persistants se fait contre un DD 13 (au lieu d'un DD 15) ou contre un casinoTest nu, DD 8 quand l'assistance fournie est particulièrement efficace."
            ]
        },
        {
            "name"           : "Hobgobelin sapeur",
            "name_lower_case": "hobgobelin sapeur",
            "general_desc"   : [
                "Votre famille comprend des alchimistes, ingénieurs et scientifiques depuis des générations, travaillant sur des projets qui apportent de la fumée et du feu sur le champ de bataille. Vous obtenez une résistance au feu égale à la moitié de votre niveau (minimum 1). Vous obtenez automatiquement un succès sur le test nu DD 5 pour cibler une créature sentiment_very_dissatisfiedMasquée si cette créature est camouflée uniquement par la fumée."
            ]
        },
        {
            "name"           : "Hobgobelin terrierné",
            "name_lower_case": "hobgobelin terrierné",
            "general_desc"   : [
                "Vos ancêtres vivaient sous terre. Vos oreilles sont plus grandes que celles des autres hobgobelins et sensibles aux échos. Lorsque vous êtes sous terre, quand vous ciblez une cible qui vous est sentiment_very_dissatisfiedMasquée ou sentiment_very_dissatisfiedCachée , réduisez le DD du test nu à 3 pour une cible masquée et à 9 pour une cible Cachée. De plus, si vous obtenez un succès sur un test d'Acrobaties pour sports_martial_artsVous faufiler , il devient un succès critique."
            ]
        },
        {
            "name"           : "Homme poisson des abysses",
            "name_lower_case": "homme poisson des abysses",
            "general_desc"   : [
                "Vous vivez loin, loin sous la surface de l'océan. Votre queue de poisson pourrait ressembler à celle d'un poisson vipère ou d'une baudroie et vous pourriez avoir des yeux lumineux ou une peau translucide. L'homme-poisson abyssal possèdent une réputation troublante, mais ils peuvent exister même dans les royaumes les moins illuminés. Vous obtenez vision dans le noir et êtes immunisée à la pression écrasante des profondeurs océaniques."
            ]
        },
        {
            "name"           : "Homme-félin aux neuf vies",
            "name_lower_case": "homme-félin aux neuf vies",
            "general_desc"   : [
                "Votre famille a toujours semblé se remettre des désastres, pas tant par le biais d'une nature robuste ou d'une compétence particulière, mais davantage grâce à la chance. Les autres hommes-félins murmurent que vous possédez neuf vies. Lorsque vous êtes sentiment_very_dissatisfiedMourant vous n'ajoutez pas la valeur de l'état Mourant au DD de vos tests de récupération (ce qui signifie que le DD est habituellement de 10). De plus vous obtenez le don général military_techDur à cuire ."
            ]
        },
        {
            "name"           : "Homme-félin aux oreilles pointues",
            "name_lower_case": "homme-félin aux oreilles pointues",
            "general_desc"   : [
                "Vous êtes né avec des grandes oreilles expressives qui se meuvent en fonction de votre humeur et se redressent au moindre son inattendu. Vous obtenez un bonus de circonstances de +2 pour localiser les créatures Non détectées que vous pouvez entendre dans les 9 mètres en utilisant une action sports_martial_artsChercher . Tant que vous êtes conscient de la présence d'une créature par le son, une fois par round, vos oreilles peuvent vous aider à sports_martial_artsSignaler la créature à tous les alliés par une action gratuite."
            ]
        },
        {
            "name"           : "Homme-félin chasseur",
            "name_lower_case": "homme-félin chasseur",
            "general_desc"   : [
                "Vous descendez d'une longue lignée de chasseurs et de pisteurs talentueux et avez développé un sens particulièrement aigu de l'odorat. Vous obtenez un odorat imprécis avec une portée de 9 mètres. Cela signifie que vous pouvez utilisez votre sens de l'odorat pour déterminer l'emplacement d'une créature. Le MJ doublera normalement la portée si vous êtes sous le vent par rapport à la créature ou la divisera par deux si vous êtes contre le vent.",
                "De plus, vous obtenez un bonus de circonstances de +2 au test pour sports_martial_artsPister une créature ou un objet si vous l'avez senti auparavant."
            ]
        },
        {
            "name"           : "Homme-félin de la jungle",
            "name_lower_case": "homme-félin de la jungle",
            "general_desc"   : [
                "Vous descendez d'arpenteurs de la jungle et pouvez vous déplacer rapidement dans les broussailles et les sous-bois. Vous ignorez le terrain difficile des sous-bois et le terrain très difficile des sous-bois n'est qu'un terrain difficile pour ce qui vous concerne."
            ]
        },
        {
            "name"           : "Homme-félin flexible",
            "name_lower_case": "homme-félin flexible",
            "general_desc"   : [
                "Vous avez hérité d'une souplesse au-delà de celle de la plupart des humanoïdes. Vous ne considérez pas les espaces étroits qui ne nécessitent pas que vous Vous faufiliez comme un terrain difficile. De plus, vous obtenez un bonus de circonstances de +1 aux tests lorsque vous tentez de Vous échapper."
            ]
        },
        {
            "name"           : "Homme-félin griffu",
            "name_lower_case": "homme-félin griffu",
            "general_desc"   : [
                "Votre famille possède des griffes particulièrement longues et aiguisées capables de délivrer des blessures sanglantes par un coup traitre. Vous obtenez une attaque à mains nues de griffe qui inflige 1d6 dégâts tranchants. Vos griffes font partie du groupe pugilat et possèdent les traits agile, finesse et à mains nues."
            ]
        },
        {
            "name"           : "Homme-félin hivernal",
            "name_lower_case": "homme-félin hivernal",
            "general_desc"   : [
                "Vous possédez une fourrure épaisse qui vous protège du froid. Vous obtenez une résistance au froid égale à la moitié de votre niveau (minimum 1). Vous traitez les effets de froid liés à l'environnement comme s'ils étaient d'un niveau moins extrême qu'ils ne le sont (froid extraordinaire devient extrême, froid extrême devient important, etc...)."
            ]
        },
        {
            "name"           : "Homme-félin liminaire",
            "name_lower_case": "homme-félin liminaire",
            "general_desc"   : [
                "Vous avez hérité d'une proximité avec les lointains confins du monde, là où les frontières entre les dimensions deviennent minces. Vous pouvez lancer auto_awesomeDétection de la magie comme un tour de magie occulte inné à volonté. Un tour de magie est intensifié à la moitié de votre niveau, arrondi au supérieur. Vous obtenez aussi un bonus de circonstances de +1 aux tests d'Occultisme pour sports_martial_artsVous souvenir au sujet de créatures qui ont pour origine d'autres Plans que l'Univers."
            ]
        },
        {
            "name"           : "Homme-lézard à collerette",
            "name_lower_case": "homme-lézard à collerette",
            "general_desc"   : [
                "Vous pouvez gonfler votre collerette autour du cou et tordre votre épine dorsale pour Démoraliser vos ennemis. Lorsque vous le faites, sports_martial_artsDémoraliser perd le trait audible et obtient le trait visuel et vous ne subissez pas de pénalité lorsque vous essayez de Démoraliser une créature qui ne comprend pas votre langue. Vous obtenez également l'action sports_martial_artsApproche menaçante ."
            ]
        },
        {
            "name"           : "Homme-lézard arboricole",
            "name_lower_case": "homme-lézard arboricole",
            "general_desc"   : [
                "Vous vous déplacez facilement à travers les forêts épaisses et la jungle en utilisant chaque branche ou chaque buisson. Vous pouvez toujours utiliser l'action sports_martial_artsMise à l'abri lorsque vous êtes en forêt ou dans la jungle pour obtenir un abri même si vous n'êtes pas proche d'un obstacle qui vous permettrait normalement de vous Mettre à l'abri derrière. Vous obtenez le don military_techTraqueur de terrain même si vous n'êtes pas qualifié en Discrétion et vous devez choisir sous-bois comme terrain choisi."
            ]
        },
        {
            "name"           : "Homme-lézard arpenteur des sables",
            "name_lower_case": "homme-lézard arpenteur des sables",
            "general_desc"   : [
                "Vos écailles épaisses vous aident à retenir l'eau et à combattre la brûlure du soleil. Vous obtenez une résistance au feu égale à la moitié de votre niveau (minimum 1). Les effets de chaleur de votre environnement sont d'un rang moins extrêmes pour vous et vous pouvez tenir 10 fois plus longtemps que la normale avant d'être affecté par la faim ou la soif. Quoi qu'il en soit, à moins de protéger un équipement protecteur ou de trouver refuge, les effets de froid dus à votre environnement sont un rang plus extrême pour vous."
            ]
        },
        {
            "name"           : "Homme-lézard bakuwa",
            "name_lower_case": "homme-lézard bakuwa",
            "general_desc"   : [
                "Votre corps est couvert de plaques osseuses. Vos plaques sont une armure intermédiaire du groupes des plaques qui accordent un bonus d'objet de +4 à la CA, un modificateur de Dextérité de +1, une pénalité au test de -2, une pénalité à la Vitesse de -1,50 mètre, une valeur de Force de +3 et possède les traits hydrodynamique et confort. Vous ne pouvez jamais porter d'autres armures ni retirer vos plaques. Vous pouvez graver des runes d'armure sur vos plaques."
            ]
        },
        {
            "name"           : "Homme-lézard des terres humides",
            "name_lower_case": "homme-lézard des terres humides",
            "general_desc"   : [
                "Votre famille descend du plus commun des héritages des hommes-lézards et vous êtes accoutumé aux environnements aquatiques. Vous obtenez une Vitesse de nage de 4,50 mètres."
            ]
        },
        {
            "name"           : "Homme-lézard écaille de falaise",
            "name_lower_case": "homme-lézard écaille de falaise",
            "general_desc"   : [
                "Vos orteils se sont adaptés pour agripper et escalader. Vous obtenez le don military_techCombattant-grimpeur comme don supplémentaire et aussi longtemps que vous ne portez rien aux pieds, vous pouvez utilisez les coussinets collants sur vos pieds pour escalader, en gardant vos mains libres. De plus, si vous obtenez un succès sur un test d'Athlétisme pour Escalader, il devient un succès critique."
            ]
        },
        {
            "name"           : "Homme-lézard makari",
            "name_lower_case": "homme-lézard makari",
            "general_desc"   : [
                "Vous avez un long museau en forme de trompe et un lien avec le divin. La tradition des sorts ou des capacités magiques que vous obtenez grâce à un héritage d'homme-lézard ou un don ancestral est divine au lieu de sa tradition normale (généralement primordiale).",
                "À votre choix, vous obtenez soit le tour de magie auto_awesomeLance divine soit auto_awesomeSceau d'interdiction , que vous pouvez lancer comme un tour de magie divin à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur. Lorsque vous lancez ce tour de magie, il perd le trait manipulation, car vous le lancez simplement en rugissant et en ouvrant grand votre museau."
            ]
        },
        {
            "name"           : "Homme-lézard mimétique",
            "name_lower_case": "homme-lézard mimétique",
            "general_desc"   : [
                "Vous pouvez changer la couleur de votre peau pour vous fondre dans votre environnement, effectuant des changements mineurs avec une action unique et des changements importants au bout d'une heure. Lorsque vous êtes dans une zone où votre coloration est vaguement similaire à l'environnement (par exemple, vert forêt dans une forêt), vous pouvez utilisez l'action mineure, unique de cette capacité pour opérer des changements localisés qui vous aident à vous fondre dans votre environnement, obtenant un bonus de circonstances de +2 aux tests de Discrétion jusqu'à ce que votre environnement change de coloration ou de motif."
            ]
        },
        {
            "name"           : "Homme-lézard sautenuage",
            "name_lower_case": "homme-lézard sautenuage",
            "general_desc"   : [
                "Votre corps est léger avec des rabats de peau le long de vos membres qui captent l'air qui passe en dessous de vous. Tant que vous pouvez agir et que vous avez assez de place vous pouvez ouvrir ces rabats pour ralentir toute chute, juste assez pour éviter de subir des dégâts (déterminer si vous avez assez d'espace est laissé à la discrétion du MJ)."
            ]
        },
        {
            "name"           : "Homme-poisson à queue de poisson",
            "name_lower_case": "homme-poisson à queue de poisson",
            "general_desc"   : [
                "La partie basse de votre corps ressemble à une puissante queue de poisson, qui se termine par une grande nageoire dosrale. En utilisant cette nageoire, vous pouvez vous déplacer à travers l'eau plus vite et bondir plus loin. Votre vitesse de nage passe à 9 mètres. Lorsqeu vous tentez un sports_martial_artsSaut en hauteur ou un sports_martial_artsSAut en longueur , vous obtenez un bonus de circonstances de +1 au test d'Athlétisme et vous pouvez Nager au lieu de Marcher rapidement avant de tenter le saut."
            ]
        },
        {
            "name"           : "Homme-poisson carcharodon",
            "name_lower_case": "homme-poisson carcharodon",
            "general_desc"   : [
                "En tant que redoutable homme-poisson requin, le bas de votre corps est semblable à celui de l'un des plus grands prédateurs de l'océan. Comme un requin, vous pouvez sentir le sang à une certaine distance. Vous obtenez odorat comme un sens imprécis avec une portée de 9 mètres. Quoi qu'il en soit, vous pouvez sentir le sang répandu à une portée de 36 m dans l'air et à 150 m dans l'eau."
            ]
        },
        {
            "name"           : "Homme-poisson des récifs",
            "name_lower_case": "homme-poisson des récifs",
            "general_desc"   : [
                "Vous avez été élevé parmi les coraux colorés et dans les écoles de poissons tropicaux. Comparé à la plupart des hommes-poissons, votre corps est est très coloré, avec des rayures, des taches et des motifs comme le poisson-clown ou le poisson-ange. Vous êtes habitué aux habitants occasionnellement toxiques de votre foyer et n'êtes pas très ennuyé par les piqûres ou les poisons mesquins. Vous obtenez une résistance contre les poisons égal à la moitié de votre niveau (minimum 1) et chacun de vos jets de sauvegarde contre une affliction de poison réduit son stade de 2 ou de 1 pour un poison virulent. Chaque succès critique contre un poison qui vous affecte réduit son stade de 3 ou de 2 pour un poison virulent."
            ]
        },
        {
            "name"           : "Homme-poisson pélagique",
            "name_lower_case": "homme-poisson pélagique",
            "general_desc"   : [
                "Vous êtes un homme-poisson de la haute-mer. Votre queue a le même dessin que le thon argenté et le hareng qui se regroupent par millions dans vos zones de chasse. L'eau obéit à votre volonté et d'un mot rapide, vous pouvez dégainer autour de vous un fourreau liquide. Vous obtenez l'action sports_martial_artsVague protectrice ."
            ]
        },
        {
            "name"           : "Humain polyvalent",
            "name_lower_case": "humain polyvalent",
            "general_desc"   : [
                "La polyvalence et l'ambition des humains leur ont permis d'accéder au statut d'ascendance majoritaire dans la plupart des nations du monde. Choisissez un don général dont vous remplissez les prérequis (comme pour votre don ancestral, vous pouvez choisir ce don général à tout moment durant la création de votre personnage)."
            ]
        },
        {
            "name"           : "Humain talentueux",
            "name_lower_case": "humain talentueux",
            "general_desc"   : [
                "Votre sagacité vous permet d'être formé à de nombreuses compétences. Vous devenez qualifié dans une compétence de votre choix. Au niveau 5, vous atteignez le degré de maîtrise expert dans cette compétence."
            ]
        },
        {
            "name"           : "Humain touché par l'hiver",
            "name_lower_case": "humain touché par l'hiver",
            "general_desc"   : [
                "Le pouvoir de l'hiver coule à travers vous. Cette ascendance est plus commune parmi les Jadwiga d'Irrisen, car ils descendent de Baba Yaga et de certains Erutaki touchés par les esprits.",
                "Vous obtenez une résistance au froid égale à la moitié de votre niveau (minimum 1) et vous traitez les effets liés à un environnement froid comme si celui-ci était d'un niveau moins extrême (le froid extraordinaire devient extrême, le froid extrême devient important, etc)."
            ]
        },
        {
            "name"           : "Kanchil",
            "name_lower_case": "kanchil",
            "general_desc"   : [
                "Vous avez la tête d'un chevrotain et des sabots à la place des pieds, avec une réputation d'être intelligent et persuasif — capable de vous sortir des délicates avec des jeux de mots et un peu de chance. Vous êtes qualifié en Duperie (ou une autre compétence si vous étie déjà qualifié en Duperie). Vous obtenez un bonus de circonstances de +1 aux tests de Duperie pour Mentirlorsque vous tentez spécifiquement d'éviter le danger ou une punition (comme essayer de convaincre un dragon de ne pas vous manger), aux DD de Duperie contre les tests pour sports_martial_artsDeviner les intentions pour découvrir de tels mensonges et aux jets d'initiative lorsque vous la déterminez en utilisant la Duperie."
            ]
        },
        {
            "name"           : "Kholo à haleine douce",
            "name_lower_case": "kholo à haleine douce",
            "general_desc"   : [
                "Vous êtes un kholo rayé, à la fourrure pâle, avec une haleine étrangement agréable que vous pouvez utiliser pour attirer vos proies. Vous êtes qualifié en Diplomatie (ou une autre compétence si vous étiez déjà qualifié en Diplomatie). Vous obtenez également un bonus de circonstances de +1 aux tests pour Faire bonne impression si la cible peut sentir votre haleine."
            ]
        },
        {
            "name"           : "Kholo cavernicole",
            "name_lower_case": "kholo cavernicole",
            "general_desc"   : [
                "Les conteurs racontent des récits anciens affirmant que les kholos ont vécu dans des cavernes souterraines avant que l'essentiel de leur espèce s'aventure à la lumière. Vous êtes un rappel de ces récits anciens, avec un torse large et des marques qui ressemblent à des parenthèses blanches au lieu de points. Vos yeux se sont développés pour voir de manière parfaite dans l'obscurité, un avantage considérable pour votre clan. Vous obtenez vision dans le noir."
            ]
        },
        {
            "name"           : "Kholo chien",
            "name_lower_case": "kholo chien",
            "general_desc"   : [
                "Vous êtes un kholo au corps agile avec une constitution préhistorique, ressemblant à celle d'un chien. Bien que vous vous déplaciez typiquement comme un quadrupède, vous pouvez toujours vous tenir debout et combattre comme un bipède, vous permettant d'utiliser tout votre équipement normalement. Si vous disposez de vos deux mains libres, votre Vitesse passe à 9 mètres lorsque vous courez sur vos quatre pattes."
            ]
        },
        {
            "name"           : "Kholo fourmi",
            "name_lower_case": "kholo fourmi",
            "general_desc"   : [
                "Vous êtes un kholo d'un mètre de haut, aux grandes oreilles et au visage anguleux. Beaucoup sont sceptiques sur le fait que soyez réellement un kholo. Votre taille est petite au lieu de moyenne. Vous êtes qualifié en Duperie (ou dans une autre compétence si vous êtes déjà qualifié en Duperie). Vous obtenez un bonus de circonstances de +1 aux tests de Duperie pour Mentir lorsque vous clamez spécifiquement votre innocence, aux DD de Duperie contre les tests pour sports_martial_artsDeviner les intentions pour découvrir de tels mensonges et aux tests d'initiative lorsque vous faites un test de Duperie pour déterminer l'initiative."
            ]
        },
        {
            "name"           : "Kholo hivernal",
            "name_lower_case": "kholo hivernal",
            "general_desc"   : [
                "Vous êtes un kholo endurci couvert d'une épaisse fourrure duveteuse qui vous rend capable de survivre durant les rudes hivers sur les territoires les plus froids. Vous obtenez une résistance au froid égale à la moitié de votre niveau (minimum 1). Vous considérez les effets de froid environnemental comme s'ils étaient d'un cran moins extrême (le froid incroyable devient extrême, le froid extrême devient sévère, etc)."
            ]
        },
        {
            "name"           : "Kholo sorcier",
            "name_lower_case": "kholo sorcier",
            "general_desc"   : [
                "Vous êtes un kholo hirsute à la fourrure sombre capable de produire des sons vraiment étranges. Vous pouvez lancer le tour de magie auto_awesomeFantasme comme un sort inné occulte à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur. De plus, vous obtenez un bonus de circonstances de +1 aux tests pour vous Déguiser et pour sports_martial_artsFaire diversion lorsque vous utilisez uniquement votre voix."
            ]
        },
        {
            "name"           : "Kitsune des champs sombres",
            "name_lower_case": "kitsune des champs sombres",
            "general_desc"   : [
                "Vous pouvez employer votre présence perturbante pour Démoraliser subtilement autrui. Lorsque vous le faites, Démoraliser perd le trait audible et obtient le trait visuel et vous ne subissez pas de pénalité lorsque vous tentez de Démoraliser une créature qui ne comprend pas votre langue. Vous obtenez aussi la réaction sports_martial_artsPeur revigorante . Votre forme alternative est un renard qui possède les statistiques de auto_awesomeForme de nuisible au rang 1."
            ]
        },
        {
            "name"           : "Kitsune des terres sauvages",
            "name_lower_case": "kitsune des terres sauvages",
            "general_desc"   : [
                "Vous êtes une créature du monde matériel, avec une affinité plus grande pour les étendues sauvages que pour la société urbaine. Vous obtenez une attaque de mâchoires à mains nues qui inflige 1d6 dégâts perforants. Vos mâchoires sont dans le groupe pugilat et possèdent le trait finesse et à mains nues. Votre forme alternative est celle d'un renard qui possède les statistiques d'un sort de auto_awesomeForme de nuisible au rang 1."
            ]
        },
        {
            "name"           : "Kitsune du ciel vide",
            "name_lower_case": "kitsune du ciel vide",
            "general_desc"   : [
                "Votre esprit s'est ouvert aux secrets de l'au-delà, vous accordant un plus grand accès à la magie kitsune. Vous obtenez le don ancestral military_techFamiliarité avec les sorts des kitsunes . Votre forme alternative est celle d'un humanoïde de taille moyenne d'une ascendance courante prévalente là où vous avez grandi (typiquement un humain), appelée une forme sans queue."
            ]
        },
        {
            "name"           : "Kitsune du vent gelé",
            "name_lower_case": "kitsune du vent gelé",
            "general_desc"   : [
                "Vos ancêtres ont traversé la Couronne du monde ou ont résidé dans les cols enneigés. Vous obtenez une résistance au froid égale à la moitié de votre niveau (minimum 1). Vous traitez les effets environnementaux de froid comme s'ils étaient d'un cran moins extrême (un froid extraordinaire devient extrême, un froid extrême devient important, etc). Votre forme alternative est celle d'un humanoïde de taille moyenne d'une ascendance courante prévalente là où vous avez grandi (typiquement un humain), appelée une forme sans queue."
            ]
        },
        {
            "name"           : "Kitsune échos du palais",
            "name_lower_case": "kitsune échos du palais",
            "general_desc"   : [
                "Vous descendez de kitsunes qui possédaient un tel pouvoir de persuasion qu'ils pouvaient entrer dans un palais au lever du soleil et se retrouver derrière le trône à la tombée de la nuit. Vous obtenez l'action sports_martial_artsEncouragement murmuré .",
                "Votre forme alternative est celle d'une ascendance humanoïde courante de taille Moyenne qui prévalent où vous avez grandi (typiquement humain) appelé une forme sans queue."
            ]
        },
        {
            "name"           : "Kitsune émissaire céleste",
            "name_lower_case": "kitsune émissaire céleste",
            "general_desc"   : [
                "Que ce soit par la grâce de Daikitsu ou d'ancêtres croyants, vous avez un lien fort avec le divin, vous accordant certaines protections. Vous obtenez la réaction sports_martial_artsInvoquer le privilège céleste . Votre forme alternative est celle d'un humanoïde de taille moyenne d'une ascendance courante prévalente là où vous avez grandi (typiquement un humain), appelée une forme sans queue."
            ]
        },
        {
            "name"           : "Kobold à écailles de dragon",
            "name_lower_case": "kobold à écailles de dragon",
            "general_desc"   : [
                "Du fait de l'association de votre terrier avec un dragon, vos écailles sont plus robustes que celles des autres kobolds. Vous obtenez 10 Points de vie de votre ascendance au lieu de 6. Vous obtenez un bonus de circonstances de +1 contre le souffle de dragon, les effets avec le trait sommeil et les effets qui vous rendraient sentiment_very_dissatisfiedParalysé ."
            ]
        },
        {
            "name"           : "Kobold à forte mâchoire",
            "name_lower_case": "kobold à forte mâchoire",
            "general_desc"   : [
                "Votre lignée est réputée pour ses puissantes mâchoires et ses dents aiguisées, soit pour vous protéger des prédateurs naturels soit par respect pour un animal puissant. Vous obtenez une attaque à mains nues de mâchoires qui inflige 1d6 dégâts perforants. Vos mâchoires font partie du groupe pugilat et possèdent les traits finesse et à mains nues."
            ]
        },
        {
            "name"           : "Kobold à queue venimeuse",
            "name_lower_case": "kobold à queue venimeuse",
            "general_desc"   : [
                "Du fait d'une créature venimeuse à proximité de votre terrier, vous êtes né avec une queue vestigiale qui sécrète un venin mortel. Vous obtenez l'action sports_martial_artsQueue à toxine ."
            ]
        },
        {
            "name"           : "Kobold cavernicole",
            "name_lower_case": "kobold cavernicole",
            "general_desc"   : [
                "Vous avez éclos dans un terrier comportant d'étroits tunnels qui était également l'antre d'une énergie primordiale terrestre, ce qui vous a rendu agile et souple. Lorsque vous sports_martial_artsEscaladez des murs de roche, des stalactites et d'autres caractéristiques naturelles en pierre, vous vous déplacez à la moitié de votre Vitesse en cas de succès et à votre pleine Vitesse en cas de succès critique (et vous vous déplacez à votre pleine Vitesse sur un succès si vous possédez le don military_techEscalade rapide ). Cela ne vous affecte pas si vous utilisez une Vitesse d'escalade.",
                "Si vous obtenez un succès sur un test d'Acrobaties pour sports_martial_artsVous faufiler , il devient un succès critique."
            ]
        },
        {
            "name"           : "Kobold chutevertigineuse",
            "name_lower_case": "kobold chutevertigineuse",
            "general_desc"   : [
                "Votre proximité avec un puissant kaiju vous a rendu fort et résistant. Vous obtenez 10 Points de vie de votre ascendance au lieu de 6. À la place des primes et faiblesse d'attributs normaux, vous pouvez choisir d'obtenir une prime de Force, une prime au Charisme et une faiblesse à l'Intelligence."
            ]
        },
        {
            "name"           : "Kobold coeur des éléments",
            "name_lower_case": "kobold coeur des éléments",
            "general_desc"   : [
                "Lorsque vous avez éclos, vous vous êtes imprégné d'une créature fortement associée avec l'un des plans élémentaires, tel qu'un élémentaire ou un génie. Choisissez votre bienfaiteur élémentaire parmi air, bois, eau, feu, métal ou terre. Vous obtenez une résistance égale à la moitié de votre niveau (minimum 1) contre les dégâts associés à votre bienfaiteur élémentaire : froid pour l'air, électricité pour la terre, feu pour le feu, son pour le métal, acide pour l'eau ou poison pour le bois."
            ]
        },
        {
            "name"           : "Kobold Cornesort",
            "name_lower_case": "kobold cornesort",
            "general_desc"   : [
                "Depuis votre éclosion au voisinage d'une source de magie puissante, une trace reste et coule dans vos veines. Choisissez un tour de magie courant de la liste de sort arcanique. Vous pouvez Lancer ce sort comme un sort inné arcanique à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur. Vous êtes qualifié en modificateur d'attaque de sorts et en DD de sort et votre attribut essentiel d'incantation est le Charisme."
            ]
        },
        {
            "name"           : "Kobold grimpegrotte",
            "name_lower_case": "kobold grimpegrotte",
            "general_desc"   : [
                "Vous vivez dans une maison orientée verticalement et vous êtes un grimpeur consommé. Vous obtenez le don de compétence military_techCombattant-grimpeur , même si vous n'en remplissez pas les prérequis. Vous pouvez utiliser vos pieds griffus et votre queue pour Escalader, laissant vos mains libres. De plus, si vous obtenez un succès à un test d'Athlétisme pour Escalader, il devient un succès critique."
            ]
        },
        {
            "name"           : "Kobold scribeparadis",
            "name_lower_case": "kobold scribeparadis",
            "general_desc"   : [
                "Votre lien avec les dragons impériaux célestes et sages a conduit les autres dragons à solliciter vos conseils. Vous pouvez parler draconique. Lorsque vous obtenez un échec critique à un test de Diplomatie pour sports_martial_artsFaire bonne impression ou sports_martial_artsSolliciter , il devient un échec."
            ]
        },
        {
            "name"           : "Kobold Tunnelinondé",
            "name_lower_case": "kobold tunnelinondé",
            "general_desc"   : [
                "Vous avez grandi dans un terrier traversé de passages sous l'eau, qu'ils soient naturels ou aient été creusés et avez été influencé par une entité aquatique ou un être des eaux primordiales. Vous obtenez une Vitesse de Nage de 4,50 mètres."
            ]
        },
        {
            "name"           : "Léchi algue",
            "name_lower_case": "léchi algue",
            "general_desc"   : [
                "Votre corps est constitué d'algues entremêlées et vous vous sentez aussi à l'aise sous l'eau qu'à la surface. Vous obtenez une Vitesse de nage de 6 m et vous pouvez toujours respirer sous l'eau. Quoiqu'il en soit, votre Vitesse au sol est réduite de 1,50 mètre (soit 6 m pour la plupart des léchis algues)."
            ]
        },
        {
            "name"           : "Léchi cactus",
            "name_lower_case": "léchi cactus",
            "general_desc"   : [
                "Des épines couvrent votre corps. Vous obtenez une attaque à mains nues d'épine qui inflige 1d6 dégâts perforants. Vos épines sont dans le groupe pugilat et possèdent les traits finesse et à mains nues."
            ]
        },
        {
            "name"           : "Léchi calebasse",
            "name_lower_case": "léchi calebasse",
            "general_desc"   : [
                "Vous avez une grosse calebasse à la place d'un crâne et comme vous n'avez pas de cerveau physique, vous pouvez utiliser l'espace à l'intérieur de votre tête. Vous pouvez emmagasiner une collection de petits objets dans la limite d'1 Encombrement à l'intérieur de votre tête. Le DD des tests pour sports_martial_artsVoler des objets qui s'y trouvent augmente de 4. De plus, si vous ne stockez qu'un unique objet à l'intérieur de votre tête, vous pouvez le retirer sans effort dans votre main comme partie d'une autre action pour utiliser l'objet. Dégainer l'objet donne à cette autre action le trait manipulation."
            ]
        },
        {
            "name"           : "Léchi chrysanthème",
            "name_lower_case": "léchi chrysanthème",
            "general_desc"   : [
                "Vous ressemblez à un enfant humain, bien qu'une grande couronne de chrysanthème pousse sur votre tête, ornée comme le serait celle d'un empereur. Ces pétales possèdent des propriétés médicinales, vous accordant un bonus de circonstances de +1 aux jets de sauvegarde contre le poison.",
                "De plus, au cours de vos préparatifs quotidiens, vous pouvez cueillir de manière inoffensive quelques pétales sur votre tête et les tremper dans de l'eau fraîche pour créer un unique workAntidote inférieur , qui prend la forme d'un thé. Au niveau 6, vous créez à la place un workAntidote modéré , au niveau 10, un workAntidote supérieur et au niveau 14, un workAntidote majeur . Le thé perd ses propriétés s'il n'est pas consommé avant vos prochains préparatifs quotidiens."
            ]
        },
        {
            "name"           : "Léchi enfant de pêche",
            "name_lower_case": "léchi enfant de pêche",
            "general_desc"   : [
                "Votre esprit léchi s'est installé dans une énorme pêche avant que votre corps ne s'en détache, peut-être à l'image d'un ancien héros né de la même manière. Vous ressemblez à un enfant humain, mais votre teint est perpétuellement rosé et quelques feuilles de pêcher poussent sur votre corps. L'esprit de la nature qui vous habite inspire confiance à certains animaux.",
                "Vous pouvez poser des questions et recevoir des réponses de la part des animaux domestiques et du bétail, tels que les chiens ou les perdrix, ainsi qu'utiliser Diplomatie pour Faire bonne impression sur eux et les Solliciter. La plupart des animaux domestiques ont une attitude initiale indifférente ou amicale à votre égard et vous laissent le temps d'exposer votre point de vue, mais les autres animaux réagissent comme devant n'importe quel autre aventurier."
            ]
        },
        {
            "name"           : "Léchi feuillu",
            "name_lower_case": "léchi feuillu",
            "general_desc"   : [
                "Votre corps est principalement fait de feuillage naturel et, comme une feuille tombant d'un arbre, vous aterrissez avec une grace particulière lorsque vous chutez. Vous ne subissez pas de dégâts en cas de chute, quelle que soit la distance de cette dernière."
            ]
        },
        {
            "name"           : "Léchi fongique",
            "name_lower_case": "léchi fongique",
            "general_desc"   : [
                "Votre corps a été fait de champignon qui grandit dans l'ombre des grottes et des arbres et vous êtes chez vous dans les cavernes sombres et les terriers. Vous obtenez Vision dans le noir. Vous perdez le trait plante et obtenez le trait champignon."
            ]
        },
        {
            "name"           : "Léchi fruitier",
            "name_lower_case": "léchi fruitier",
            "general_desc"   : [
                "Votre corps produit continuellement des petits fruits imprégnés de magie primordiale. À l'aube de chaque jour, un nouveau fruit mûrit. Vous ou un allié pouvez retirer ce fruit en utilisant une action Interagir. Si une créature vivante qui peut se nourrir de fruit le consomme en dépensant une action Interagir au cours de l'heure qui suit, elle regagne casino |shortLabel]{1d8 Points de vie}, plus 1d8 Points de vie supplémentaires par tranche de 2 de vos niveaux au-dessus du premier. Cet effet possède les traits guérison et vitalité."
            ]
        },
        {
            "name"           : "Léchi liane",
            "name_lower_case": "léchi liane",
            "general_desc"   : [
                "Des lianes préhensiles vous donnent une compétence inégalée pour Escalader. Vous n'avez pas besoin d'avoir une vos mains libres pour sports_martial_artsEscaladeer . De plus, si vous obtenez un succès à un test d'Athlétisme pour Escalader, il devient un succès critique."
            ]
        },
        {
            "name"           : "Léchi lotus",
            "name_lower_case": "léchi lotus",
            "general_desc"   : [
                "Vous flottez sans effort à la surface de l'eau. Vous pouvez marcher sur la surface des étendues d'eau calmes et d'autres liquides qui ne causent pas de dégâts, en vous déplaçant à la moitié de votre Vitesse habituelle. Vous pouvez également tenter de Garder l'équilibre pour vous déplacer au dessus de l'eau courante, en utilisant le DD d'un test de nage pour nager dans l'eau. Lorsque vous le faites, vous ne pouvez vous déplacer à plus de la moitié de votre vitesse et en cas d'échec ou d'échec critique, vous tombez dans l'eau au lieu des effets normaux."
            ]
        },
        {
            "name"           : "Léchi racinaire",
            "name_lower_case": "léchi racinaire",
            "general_desc"   : [
                "Votre corps est constitué de racines robustes qui vous attachent fermement au sol. Vous obtenez 10 Points de vie par votre ascendance au lieu de 8. Vous pouvez aller sans lumière du soleil pendant 2 semaines avant de commencer à mourir de faim. Vous obtenez un bonus de circonstances de +2 à vos DD de Vigueur et de Réflexes contre les tentatives pour vous sports_martial_artsPousser , vous faire un sports_martial_artsCroc-en-jambe ou vous sports_martial_artsRepositionner . Ce bonus s'applique aussi aux jets de sauvegarde contre les sorts ou les effets qui tentent de vous déplacer ou de vous mettre sentiment_very_dissatisfiedÀ terre ."
            ]
        },
        {
            "name"           : "Lethoci",
            "name_lower_case": "lethoci",
            "general_desc"   : [
                "Vous êtes issu d'une famille de kashrishi qui s'est adaptée aux rivages côtiers ou aux étangs et lacs intérieurs. Vous obtenez un bonus de circonstances de +2 aux tests d'athlétisme pour nager. Si vous obtenez un échec critique à un test d'Athlétisme pour nager, il devient un échec."
            ]
        },
        {
            "name"           : "Leungli",
            "name_lower_case": "leungli",
            "general_desc"   : [
                "Vous avez la tête d'un poisson rouge ou d'une carpe et des écailles d'une combinaison de blanc éclatant, de noir, d'orange, de rouge et d'or de bon augure. Si vous obtenez des ailes, elles ressemblent aux poils ondulants d'un dragon. Vous obtenez une vitesse de nage de 3 mètres et du trait amphibie. Comme toutes les créatures dotées du trait amphibie, vous pouvez respirer à la fois dans l'eau et dans l'air."
            ]
        },
        {
            "name"           : "Lys enchanté",
            "name_lower_case": "lys enchanté",
            "general_desc"   : [
                "Vous sentez si bon - un parfum délicat et floral comme le parfum enivrant des lys et la douce odeur des lilas. Vous êtes qualifié en Diplomatie (ou une autre compétence si vous êtes déjà qualifié en Diplomatie). Vous obtenez également un bonus de circonstances de +1 aux tests pour sports_martial_artsFaire bonne impression lorsque la cible peut sentir votre parfum."
            ]
        },
        {
            "name"           : "Mage automate",
            "name_lower_case": "mage automate",
            "general_desc"   : [
                "La chambre abritant votre noyau a une connexion plus directe avec le reste de votre forme humanoïde, ce qui vous permet d'exploiter l'énergie magique de votre noyau. Vous obtenez un tour de magie de la liste des sorts arcaniques. Vous pouvez lancer ce sort comme un sort inné arcanique à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur."
            ]
        },
        {
            "name"           : "Mélixie",
            "name_lower_case": "mélixie",
            "general_desc"   : [
                "Vous avez les traits d'une abeille, d'un papillon ou d'un autre insecte qui adore le sucré. Vous pouvez poser des questions et recevoir des réponses des arthropodes (insectes, araignées, scorpions, crabes et autres animaux invertébrés similaires) et pouvez utiliser Diplomatie pour leur Faire bonne impression et les Solliciter. La plupart des abeilles, des papillons, des phalènes et des coléoptères ont une attitude de départ sentiment_very_dissatisfiedIndifférente ou sentiment_very_dissatisfiedAmicale envers vous et vous donnent le temps de faire valoir votre demande, alors que d'autres arthropodes réagissent à votre endroit de la même manière qu'envers tout autre aventurier."
            ]
        },
        {
            "name"           : "Minotaure blocâme",
            "name_lower_case": "minotaure blocâme",
            "general_desc"   : [
                "Votre lien profond avec la pierre et les murs vous permettent d'invoquer des blocs massifs qui s'effondrent sur vos ennemis. Vous obtenez l'activité sports_martial_artsÉlever des blocs ."
            ]
        },
        {
            "name"           : "Minotaure des cavernes de glace",
            "name_lower_case": "minotaure des cavernes de glace",
            "general_desc"   : [
                "Votre fourrure devient épaisse et chaude, bien adaptée aux montagnes gelées dans lesquelles vous résidez. Vous obtenez une résistance au froid égale à la moitié de votre niveau (avec un minimum de 1). Vous considérez les effets du froid de l'environnement comme étant d'un cran moins extrême."
            ]
        },
        {
            "name"           : "Minotaure itinérant",
            "name_lower_case": "minotaure itinérant",
            "general_desc"   : [
                "Vos sabots sont larges et puissants, parfaits pour déblayer des gravats au fur et à mesure de votre avancée. Vous êtes qualifié en Survie (ou dans une autre compétence si vous étiez déjà qualifié en Survie) et obtenez le don de compétence military_techExpertise du terrain . Vous ignorez le terrain difficile provoqué par un sol inégal d'origine naturel lorsque vous êtes sur le terrain que vous avez choisi avec le don Expertise du terrain."
            ]
        },
        {
            "name"           : "Minotaure petitecorne",
            "name_lower_case": "minotaure petitecorne",
            "general_desc"   : [
                "Tout aussi puissante, votre charpente (et vos cornes) sont plus petites que celles de la plupart des autres minotaures. Au lieu d'être de taille Grande, votrer taille est Moyenne. Votre attaque à mains nues de cornes inflige 1d6 dégâts perforants au lieu de 1d8, mais elles possèdent le trait agile."
            ]
        },
        {
            "name"           : "Minotaure taureau fantôme",
            "name_lower_case": "minotaure taureau fantôme",
            "general_desc"   : [
                "Votre fourrure est aussi pâle que la mort, possiblement qui vous lie ou votre famille à l'après-vie, ce qui vous laisse trouver votre chemin de manière surnaturelle. Vous pouvez lancer auto_awesomeConnaître le chemin comme un sort inné occulte à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur. De plus, vous obtenez un bonus de circonstances de +1 contre les sorts ou les effets qui provoquent l'état sentiment_very_dissatisfiedConfus ."
            ]
        },
        {
            "name"           : "Minotaure traqueur",
            "name_lower_case": "minotaure traqueur",
            "general_desc"   : [
                "En dépit de votre lourde corpulence, vous marchez sur des sabots recouverts de poils qui étouffent vos pas, ce qui vous permet de surprendre vos proies. Vous êtes qualifié en Discrétion (ou dans une autre compétence si vous êtes déjà qualifié en Discrétion) et obtenez le don de compétence military_techTraqueur de terrain , sauf que vous devez choisir décombres et vous pouvez sports_martial_artsÊtre furtif pas plus de 3 m au lieu de 1,50 mètre sans devoir faire un test de Discrétion."
            ]
        },
        {
            "name"           : "Naari",
            "name_lower_case": "naari",
            "general_desc"   : [
                "Vous descendez des élémentaires de feu ou portez la marque des Sphères intérieures et vos traits illustrent l'influence que le feu élémentaire a sur vous. Vous obtenez le trait naari, en plus des traits de votre ascendance. Vous obtenez une résistance au feu égale à la moitié de votre niveau (minimum 1) et vous traitez les effets environnementaux de chaleur comme s'ils étaient d'un cran moins sévère (la chaleur extraordinaire devient extrême, la chaleur extrême devient importante, etc). Vous pouvez choisir parmi les dons de naari et les dons de votre ascendance lorsque vous obtenez un don ancestral.",
                "Dons ancestraux des descendants de génies",
                "Au niveau 1, vous obtenez un don ancestral et vous obtenez un don ancestral supplémentaire tous les 4 niveaux par la suite (aux niveaux 5, 9, 13 et 17). En tant que descendant de génie, vous pouvez choisir parmi les dons ancestraux des descendants de génie, ceux de votre héritage naari et ceux de votre ascendance."
            ]
        },
        {
            "name"           : "Nagaji boucliervenin",
            "name_lower_case": "nagaji boucliervenin",
            "general_desc"   : [
                "Votre lien intrinsèque avec les nagas et les serpents ordinaires vous confère une résistance innée aux toxines de toutes sortes. Vous obtenez une résistance au poison égale à la moitié de votre niveau (1 au minimum) et vous bénéficiez d'un bonus de circonstances de +1 à tous les jets de sauvegarde contre le poison."
            ]
        },
        {
            "name"           : "Nagaji coiffé",
            "name_lower_case": "nagaji coiffé",
            "general_desc"   : [
                "Vous arborez la tête à coiffe d'un cobra cracheur et, comme ces cobras, vous pouvez cracher des jets de venin par la bouche. Vous obtenez une attaque à distance à mains nues de crachat venimeux avec un facteur de portée de 3 m qui inflige 1d4 dégâts de poison. En cas de coup critique, la cible subit des dégâts de poison persistants égaux au nombre de dés de dégâts de l'arme. Votre crachat n'appartient à aucun groupe d'armes et n'a pas d'effet critique spécialisé."
            ]
        },
        {
            "name"           : "Nagaji fouetcrochets",
            "name_lower_case": "nagaji fouetcrochets",
            "general_desc"   : [
                "Vous possédez un cou long et flexible qui peut s'enrouler dans une pose saisissante comme celle d'un serpent. Vos muscles puissants vous permettent de mordre à une distance et une vitesse surprenantes. Vous obtenez l'action sports_martial_artsDresser le cou ."
            ]
        },
        {
            "name"           : "Nagaji languechatoyante",
            "name_lower_case": "nagaji languechatoyante",
            "general_desc"   : [
                "Vous êtes né avec un sens de la magie acerbé, capable de gôuter ses effets uniques dans l'air. Vous obtenez Perception de la magie comme un sens vague qui possède une portée de 9 mètres. Comme tous les sens vagues, ce n'est seulement aussi précis que le sens de l'odorat d'un humain moyen, ce qui signifie généralement que vous ne pouvez prédire que de la magie est présente ou pas. Quoi qu'il en soit, chaque tradition de magie possède un goût unique à l'égard de vos sens, vous permettant d'identifier la tradition de la magie présente."
            ]
        },
        {
            "name"           : "Nagaji sacré",
            "name_lower_case": "nagaji sacré",
            "general_desc"   : [
                "Vous vous distinguez de la plupart des nagaji, en présentant le haut du corps d'un bel humain et le bas du corps d'un serpent vert ou blanc. Les légendes prétendent que vos ancêtres étaient des serpents fidèles élevés par Nalinivati plutôt que des nagaji créés par la déesse. Au lieu d'une attaque à mains nues de crocs, vous disposez d'une attaque de queue qui inflige 1d6 dégâts contondants et qui fait partie du groupe pugilat et possède les traits finesse et désarmement. Vous obtenez un bonus de circonstances de +2 à votre DD de Vigueur ou de Réflexes contre les tentatives pour vous sports_martial_artsSaisir ou vous faire un sports_martial_artsCroc-en-jambe . Ce bonus s'applique également aux jets de sauvegarde contre les effets qui devraient vous sentiment_very_dissatisfiedAgripper , vous sentiment_very_dissatisfiedEntraver ou vous mettre sentiment_very_dissatisfiedÀ terre ."
            ]
        },
        {
            "name"           : "Nagaji titan",
            "name_lower_case": "nagaji titan",
            "general_desc"   : [
                "Vous avez été élevé pour être un guerrier ou un garde du corps et votre régime alimentaire particulier et vos muscles saillants ont rendu vos écailles aussi solides que des plaques d'armure. Vos écailles forment une armure intermédiaire qui fait partie du groupe des armures de plaques et vous confère un bonus d'objet de +4 à la CA, un maximum de Dextérité de +1, une pénalité aux tests de -2, une pénalité à la Vitesse de -1,50 mètres, un modificateur de Force de +3 et elle possède le trait confort. Vous ne pouvez jamais porter une autre armure ou retirer vos écailles. Vous pouvez graver des runes d'armure sur vos écailles."
            ]
        },
        {
            "name"           : "Nain béni-de-la-forge",
            "name_lower_case": "nain béni-de-la-forge",
            "general_desc"   : [
                "Vous êtes issu d'une famille de Heaume qui vénère plus spécifiquement une divinité naine au-dessus de toutes les autres. Votre naissance a été bénie par le patron de votre famille, vous accordant une fraction de son pouvoir. Choisissez une divinité du panthéon nain. Vous pouvez lancer le sort de rang 1 qu'elle accorde à ses prêtres (tel que auto_awesomeApaiser si la divinité tutélaire de votre famille est Bolka) comme un sort divin inné une fois par semaine."
            ]
        },
        {
            "name"           : "Nain coeurélémentaire",
            "name_lower_case": "nain coeurélémentaire",
            "general_desc"   : [
                "Que ce soit au travers d'un lien avec la forge de Torag , des azers du plan du Feu ou d'une autre source, vous pouvez exsuder une émanation d'énergie. Les nains Mbe'ke et Taralu du Mwangi pensent que cette ascendance est un don des dragons ou des esprits élémentaires.",
                "Choisissez un des types de dégâts suivants : acide, électricité, feu ou froid. Une fois choisi, il ne peut être modifié. Vous obtenez l'activité Émanation énergétique correspondante."
            ]
        },
        {
            "name"           : "Nain de l'enclume",
            "name_lower_case": "nain de l'enclume",
            "general_desc"   : [
                "Vous êtes le descendant d'un artisan réputé et possédez votre propre incroyable talent. Les autres nains pourraient considérer que c'est la bénédiction de vos ancêtres ou du Père de la forge lui-même, en fonction de l'endroit où vous avez été élevé. Vous êtes qualifié en Artisanat (ou une autre compétence si vous étiez déjà qualifié en Artisanat) et vous obtenez le don de compétence military_techArtisanat spécialisé , sauf que vous pouvez choisir deux spécialités à la place d'une seule."
            ]
        },
        {
            "name"           : "Nain des forges",
            "name_lower_case": "nain des forges",
            "general_desc"   : [
                "Vous êtes remarquablement adapté aux environnements chauds. Vous bénéficiez ainsi d'une résistance au feu égale à la moitié de votre niveau (avec un minimum de 1) et vous considérez tous les effets environnementaux liés à la chaleur comme si leur intensité était d'un rang moins extrême (la chaleur extraordinaire devient extrême, la chaleur extrême devient sévère, etc.)."
            ]
        },
        {
            "name"           : "Nain des roches",
            "name_lower_case": "nain des roches",
            "general_desc"   : [
                "Vos ancêtres ont vécu et travaillé parmi les pierres vénérables des montagnes ou des profondeurs de la terre. Cela vous a rendu aussi solide que le roc lorsque vous plantez vos pieds. Vous obtenez un bonus de circonstances de +2 à votre DD de Vigueur ou de Réflexes contre les tentatives pour vous sports_martial_artsPousser , vous faire un sports_martial_artsCroc-en-jambe ou vous sports_martial_artsRepositionner . Ce bonus s'applique également aux jets de sauvegarde contre les sorts ou les effets qui tentent de vous faire tomber sentiment_very_dissatisfiedÀ terre .",
                "De plus, lorsque vous subissez un effet qui devrait vous forcer à vous déplacer de 3 m ou plus, vous ne vous déplacez que de la moitié de cette distance."
            ]
        },
        {
            "name"           : "Nain gardemort",
            "name_lower_case": "nain gardemort",
            "general_desc"   : [
                "Vos ancêtres ont été les gardes des tombeaux et leurs pouvoirs de se protéger vous ont été transmis. Si vous obtenez un succès sur un jet de sauvegarde contre un effet qui possède le trait vide ou a été créé par une créature morte-vivante, vous considérez qu'il s'agit d'un succès critique."
            ]
        },
        {
            "name"           : "Nain gardeserment",
            "name_lower_case": "nain gardeserment",
            "general_desc"   : [
                "En grandissant, vous n'avez jamais cherché à mentir pour obtenir ce que vous désiriez et même lorsque cela a été nécessaire, mentir vous a mis mal à l'aise. Les membres particulièrement croyants ont même pu penser que vous avez été béni par le dieu nain du devoir, Kols .",
                "Vous obtenez un bonus de circonstances de +1 aux tests de Perception pour sports_martial_artsDeviner les intentions et au DD de Perception contre les tentatives de vous sports_martial_artsMentir . De plus, vous obtenez un bonus de circonstances de +2 aux tests de Diplomatie pour convaincre les autres que vous dites la vérité lorsque vous la dites et vous subissez une pénalité de circonstances de –4 pour Mentir et a votre test de Duperie contre une tentative pour sports_martial_artsDeviner les intentions ."
            ]
        },
        {
            "name"           : "Nain sang-ancien",
            "name_lower_case": "nain sang-ancien",
            "general_desc"   : [
                "Les héros nains de l'ancien temps étaient capables de balayer la magie de leurs ennemis du revers de la main. Vous avez hérité d'une partie de cette résistance. Vous gagnez la réaction sports_martial_artsAppel du sang ancien ."
            ]
        },
        {
            "name"           : "Nain sang-fort",
            "name_lower_case": "nain sang-fort",
            "general_desc"   : [
                "Votre sang, vigoureux et tonique, vous permet de mieux résister aux toxines. Vous obtenez une résistance au poison égale à la moitié de votre niveau (avec un minimum de 1) et, chacun de vos succès sur un jet de sauvegarde contre un poison réduit son stade de 2 ou de 1 s'il s'agit d'un poison virulent. Chaque succès critique contre un poison qui est en train de vous affecter réduit son stade de 3 ou de 2 s'il s'agit d'un poison virulent."
            ]
        },
        {
            "name"           : "Naissant",
            "name_lower_case": "naissant",
            "general_desc"   : [
                "Si la plupart des kashrishis sont parfaitement adaptés à leur environnement lorsqu'ils atteignent l'âge adulte, certains conservent un potentiel inexploité jusqu'à l'âge adulte avant de le libérer. Vous obtenez un don d'ascendance kashrishie de niveau 1 pour lequel vous remplissez les prérequis, s'il en existe."
            ]
        },
        {
            "name"           : "Né d'un animal",
            "name_lower_case": "né d'un animal",
            "general_desc"   : [
                "Vous étiez un animal simple jusqu'à ce que le soleil vous apporte l'illumination.",
                "Forme humanoïde Les animaux peuvent percevoir la puissance de votre présence. Vous obtenez un bonus de circonstances de +1 aux tests d'Intimidation contre les animaux et les bêtes et ne subissez pas la pénalité lorsque vous tenter d'Intimider les animaux ou les bêtes dont vous ne partagez pas la langue.\nForme yaoguai Vous pouvez vous élancer comme un animal. Si vous avez les deux mains libres, vous pouvez augmenter votre vitesse jusqu'à 9 mètres en courant sur quatre pattes."
            ]
        },
        {
            "name"           : "Né d'un céleste",
            "name_lower_case": "né d'un céleste",
            "general_desc"   : [
                "Vous avez été un puissant céleste avant une évasion ou une punition qui vous a laissé piégé dans une coquille mortelle, avec seulement de vagues souvenirs et un pouvoir limité. Du fait de votre puissance divine résiduelle, la tradition de tous les sorts ou des capacités magiques que vous obtenez grâce à un héritage yaoguai ou son don ancestral est divine au lieu de sa tradition normale (habituellement occulte).",
                "Forme humanoïde Les frangments de souvenir divins jonchent toujours votre esprit. Vous obtenez un bonus de circonstances de +1 aux tests de Religion.\nForme yaoguai La puissance céleste court à travers vous. Choisissez un tour de magie de la liste de sorts divins. Vous pouvez le lancer comme un sort divin inné à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur."
            ]
        },
        {
            "name"           : "Né d'un objet",
            "name_lower_case": "né d'un objet",
            "general_desc"   : [
                "Vous étiez un objet jusqu'à ce que la lune vous ait instillé la vie. Choisissez une compétence de Connaissance en lien avec ce type d'outil que vous étiez. Par exemple, Connaissance de la cuisine pour un tranchoir ou Connaissance de l'agriculture pour un râteau. Vous êtes qualifié dans cette compétence.",
                "Forme humanoïde Vous conservez les souvenirs des tâches que vous avez accompli sous forme d'objet. Vous obtenez un bonus de circonstances de +1 à la compétence de Connaissance que vous avez obtenu à travers cet héritage.\nForme yaoguai Le temps passé sous forme d'objet dépourvu d'intelligence rend plus difficile de vous affecter mentalement. Si vous obtenez un succès sur un effet mental, il devient un succès critique."
            ]
        },
        {
            "name"           : "Né de la végétation",
            "name_lower_case": "né de la végétation",
            "general_desc"   : [
                "Vous étiez une plante ou un champignon jusqu'à ce que la pluie vous donne un esprit. À votre choix, vous obtenez le trait plante ou champignon.",
                "Forme humanoïde Avec de la végétation fraîche, vous pouvez mieux aider ceux qui sont dans le besoin. Vous obtenez un bonus de circonstances de +1 aux tests de Médecine pour sports_martial_artsProdiguer les premiers soins .\nForme yaoguai Lorsque que quelqu'un utilise la compétence Médecine pour sports_martial_artsSoigner vos blessures , vous ajoutez votre niveau à vos Points de vie que vous regagnez grâce à ce traitement. De plus, la créature qui tente le test obtient un bonus de circonstances de +1 si vous disposez du trait plante et vous trouvez dans le lumière vive ou le trait champignon et êtes dans l'obscurité."
            ]
        },
        {
            "name"           : "Né des éléments",
            "name_lower_case": "né des éléments",
            "general_desc"   : [
                "Vous avez été un des aspects de la nature - la pluie, le vent, un rayon de lumière - jusqu'à ce que les essences naturelles vous ait donné une âme. À cause de votre lien naturel, la tradition de tous les sorts ou capacités magiques que vous obtenez d'un héritage yaoguai un d'un don ancestral est primordiale au lieu de sa tradition ordinaire (habituellement occulte).",
                "Forme humanoïde Vous restez harmonisé au monde naturel. Vous obtenez un bonus de circonstances de +1 aux tests de Survie pour sports_martial_artsVous orienter et vous ne subissez pas de pénalité lorsque vous ne possédez pas de boussole.\nForme yaoguai La puissance de la nature est dans vos veines, prête à s'extéroriser. Choisissez entre auto_awesomeAllumage , auto_awesomeArc électrique , auto_awesomeBourrasque tranchante , auto_awesomeFléchettes aiguilles , auto_awesomeJaillissement , auto_awesomeMorsure du froid , auto_awesomeProjection d'éboulis ou auto_awesomeTronc . Vous pouvez lancer ce sort comme un tour de magie inné primordial à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur."
            ]
        },
        {
            "name"           : "Néphilim",
            "name_lower_case": "néphilim",
            "general_desc"   : [
                "Votre nature est influencée par les célestes, les fiélons ou les veilleurs. Cela se manifeste par une combinaison de traits qui trahissent votre héritage, comme des yeux dorés, une auréole, des cornes ou une queue. Vous obtenez le trait néphilim, en plus des traits de votre ascendance. Vous bénéficiez d'une vision nocturne ou d'une vision dans le noir si votre ascendance possède déjà une vision nocturne. Vous pouvez choisir entre les dons des néphilims ou les dons de votre ascendance chaque fois que vous obtenez un don ancestral."
            ]
        },
        {
            "name"           : "Nyctère",
            "name_lower_case": "nyctère",
            "general_desc"   : [
                "Vous avez des traits de chauve-souris, une affinité avec l'espèce des chauves-souris et une ouïe inégalée. Tant que vous pouvez entendre normalement, vous pouvez utiliser l'action Chercher pour percevoir les créatures sentiment_very_dissatisfiedNon détectées dans un cône de 18 mètres au lieu d'un cône de 9 mètres. Vous obtenez aussi un bonus de circonstances de +2 pour localiser les personnes non détectées que vous pourriez entendre dans les 9 mètres avec une action Chercher."
            ]
        },
        {
            "name"           : "Ombre de l'artisan",
            "name_lower_case": "ombre de l'artisan",
            "general_desc"   : [
                "Votre ombre est épaisse et liquide, comme si elle pouvait tremper le minerai le plus noble. Vous obtenez l'action sports_martial_artsIncruster l'ombre ."
            ]
        },
        {
            "name"           : "Ombre de l'ermite",
            "name_lower_case": "ombre de l'ermite",
            "general_desc"   : [
                "Votre ombre semble en quelque sorte pleine de secrets et de mystères - des secrets qu'elle partage avec vous. Choisissez un tour de magie de la liste des sorts occultes. Vous pouvez lancer ce sort comme un sort inné occulte à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur."
            ]
        },
        {
            "name"           : "Ombre du courtisan",
            "name_lower_case": "ombre du courtisan",
            "general_desc"   : [
                "Votre ombre danse à vos côtés. Vous obtenez le don de compétence military_techReprésentation impressionnante , vous permettant d'utiliser Représentation pour sports_martial_artsFaire bonne impression au lieu de Diplomatie.",
                "Une fois par jour, si vous obtenez un échec, mais pas un échec critique, lors d'un test pour Faire bonne impression, vous pouvez le jouer comme si c'était une partie de la représentation, vous permettant de relancer le test. C'est un effet de fortune."
            ]
        },
        {
            "name"           : "Ombre du marin",
            "name_lower_case": "ombre du marin",
            "general_desc"   : [
                "Votre ombre vole à la surface de l'eau, tout comme vous. Vous pouvez marcher sur la surface de l'eau calme et les autres liquides non dangereux, en vous déplaçant à la moitié de votre vitesse normale. Vous pouvez également tenter de marcher sur la surface de l'eau en vous déplaçant toujours à la moitié de votre vitesse mais, pour cela, vous devez réussir un test d'Acrobaties pour sports_martial_artsGarder l'équilibre en utilisant le DD d'un test de Natation pour vous déplacer au-dessus de l'eau. En cas d'échec, vous tombez dans l'eau. Ce test d'Acrobaties n'utilise pas d'action."
            ]
        },
        {
            "name"           : "Ombre du vagabond",
            "name_lower_case": "ombre du vagabond",
            "general_desc"   : []
        },
        {
            "name"           : "Ondin",
            "name_lower_case": "ondin",
            "general_desc"   : [
                "Un ancêtre élémentaire d'eau influence votre lignée. Vous obtenez le trait ondin en plus des traits de votre ascendance. Vous obtenez une Vitesse de nage de 3 mètres et le trait amphibie. Comme toutes les créatures avec le trait amphibie, vous pouvez respirer l'air et l'eau.",
                "Dons ancestraux des descendants de génies",
                "Au niveau 1, vous obtenez un don ancestral et vous obtenez un don ancestral supplémentaire tous les 4 niveaux par la suite (aux niveaux 5, 9, 13 et 17). En tant que descendant de génie, vous pouvez choisir parmi les dons ancestraux des descendants de génie, ceux de votre héritage ondin et ceux de votre ascendance."
            ]
        },
        {
            "name"           : "Orc batailleur",
            "name_lower_case": "orc batailleur",
            "general_desc"   : [
                "Vous descendez d'une lignée de terrifiants commandants sur le champ de bataille. Vous êtes qualifié en Intimidation et vous obtenez le don de compétence military_techRegard intimidant ."
            ]
        },
        {
            "name"           : "Orc des badlands",
            "name_lower_case": "orc des badlands",
            "general_desc"   : [
                "Vous venez des terres arides écrasées par le soleil, où vos longues jambes et une capacité à comprendre les éléments vous ont aidé à survivre. Vous pouvez sports_martial_artsVous empresser deux fois plus longtemps lorsque vous êtes en exploration avant de devoir vous arrêter et vous traitez les effets des environnements chauds comme s'ils étaient d'un degré inférieur (la chaleur extraordinaire devient extrême, la chaleur extrême devient importante, etc...)."
            ]
        },
        {
            "name"           : "Orc des profondeurs",
            "name_lower_case": "orc des profondeurs",
            "general_desc"   : [
                "Vos mains calleuses et vos yeux rouges évoquent une vie passée dans les ténèbres profondes des cavernes des montagnes, où vous avez appris à combattre sur les falaises rocheuses et à survivre avec un minimum de ressources. Vous obtenez le don military_techExpertise du terrain pour les souterrains et de don de compétence military_techCombattant-grimpeur ."
            ]
        },
        {
            "name"           : "Orc hivernal",
            "name_lower_case": "orc hivernal",
            "general_desc"   : [
                "Vos ancêtres ont survécu sous les climats froids. Vous êtes qualifié en Survie et vous traitez les effets environnementaux liés au froid comme s'ils étaient d'un cran moins extrêmes (un froid extraordinaire devient extrême, un froid extrême devient important, etc)."
            ]
        },
        {
            "name"           : "Orc scarifié",
            "name_lower_case": "orc scarifié",
            "general_desc"   : [
                "Vous êtes un membre d'une communauté orque qui pratique un rituel de scarification ou de tatouage. Les marques de votre peau montrent votre exceptionnelle robustesse et votre vitalité. Vous obtenez 12 Points de vie de votre héritage au lieu de 10. Vous obtenez aussi le don military_techDur à cuir ."
            ]
        },
        {
            "name"           : "Orc sépulcral",
            "name_lower_case": "orc sépulcral",
            "general_desc"   : [
                "Vous avez été exposé à de puissantes énergies nécromantiques qui auraient dû vous tuer — mais vous avez survécu. Votre peau est froide, moite et grise. Vous obtenez une résistance aux dégâts de vide égale à la moitié de votre niveau (minimum 1). Vous obtenez aussi un bonus de circonstances de +1 aux jets de sauvegarde contre les effets ayant le trait mort ou vide."
            ]
        },
        {
            "name"           : "Oréade",
            "name_lower_case": "oréade",
            "general_desc"   : [
                "Un ancêtre élémentaire d'air a influencé votre lignée et vos traits soulignent cette connection planaire élémentaire. Vous pourriez avoir une peau ou des cheveux d'une teinte cristalline ou métallique, une chair rugueuse et pierreuse ou des yeux scintillants comme des pierres précieuses. Vous obtenez le trait oréade, en plus des traits de votre asccendance. Vous obtenez aussi vision nocturne ou vous obtenez vision dans le noir si votre ascendance possède déjà vision nocturne. Vous pouvez choisir parmi les dons des oréades et les dons de votre ascendance lorsque vous obtenez un don ancestral.",
                "Dons ancestraux des descendants de génies",
                "Au niveau 1, vous obtenez un don ancestral et vous obtenez un don ancestral supplémentaire tous les 4 niveaux par la suite (aux niveaux 5, 9, 13 et 17). En tant que descendant de génie, vous pouvez choisir parmi les dons ancestraux des descendants de génie, ceux de votre héritage oréade et ceux de votre ascendance."
            ]
        },
        {
            "name"           : "Orque des moussons",
            "name_lower_case": "orque des moussons",
            "general_desc"   : [
                "Vous êtes né dans une forêt humide avec la canopée pour seule protection contre les pluies torrentielles et les inondations brutales. Vous avez appris à vous déplacer de manière athlétique à travers la jungle et à résister aux diverses plaies communes en milieu humide. Vous obtenez un bonus de circonstances de +2 aux tests d'Athlétisme pour sports_martial_artsEscalader ou sports_martial_artsNager et un bonus de circonstances de +1 aux jets de sauvegarde contre les maladies."
            ]
        },
        {
            "name"           : "Pixie",
            "name_lower_case": "pixie",
            "general_desc"   : [
                "Vous êtes plus grand que les autres sprites. Au lieu de Très petite, votre taille est Petite."
            ]
        },
        {
            "name"           : "Poupée fantôme",
            "name_lower_case": "poupée fantôme",
            "general_desc"   : [
                "Vous vous êtes éveillé avec un peu de la force vitale d'une autre personne et un fragment de son âme - possiblement mais pas toujours, au moment de sa mort - ont trouvé leur chemin dans votre corps artificiel. Vous ne vous souvenez de rien de plus que de vagues réminiscences de votre \"avant vie\" mais cette essence vitale vous protège toujours. Vous obtenez une résistance aux dégâts de vide égaux à la moitié de votre niveau (minimum 1)."
            ]
        },
        {
            "name"           : "Poupée jouet",
            "name_lower_case": "poupée jouet",
            "general_desc"   : [
                "Vous avez la forme d'un jouet ou d'une poupée d'enfant très petite, mais vous ne laissez pas votre petite taille gâcher votre joie de vivre. Au lieu de petite, votre taille est Très petite. Comme les autres créatures de Très petite taille, vous ne recevez pas automatiquement un abri partiel lorsque vous êtes dans la case d'une créature plus large, mais les circonstances pourraient vous permettre de vous Mettre à l'abri. Vous pouvez acheter des armes, des armures et d'autres objets de votre taille avec les mêmes statistiques que l'équipement normal, à l'exception des armes de corps-à-corps qui ont une allonge de 0 pour ce qui vous concerne (ou une allonge de 1,50 mètre plus courte que la normale si elles possèdent le trait allonge). Vous pouvez entrer dans la case d'une autre créature, ce qui est important puisque vous devez habituellement entrer dans la case de la créature pour l'attaquer avec des Frappes au corps-à-corps ! Souvenez vous d'ajuster l'Encombrement des objets et votre limite d'Encombrement pour les Très petites tailles."
            ]
        },
        {
            "name"           : "Poupée rembourrée",
            "name_lower_case": "poupée rembourrée",
            "general_desc"   : [
                "Vous possédez très peu de choses à l'intérieur, à l'exception du coton, de la sciure ou des feuilles sèches. Vous ne subissez pas de dégâts de chute, quel que soit la distance de votre chute."
            ]
        },
        {
            "name"           : "Poupée remontée",
            "name_lower_case": "poupée remontée",
            "general_desc"   : [
                "Vous êtes principalement composé de métaux mous, comme l'étain ou l'argent et votre force vitale repose au sein d'un réseau de mécanismes exceptionnels au plus profond de votre corps. Pourvu que vous remontiez les mécanismes de votre corps quelques fois par jour, vous n'avez pas besoin d'eau ou de nourriture pour survivre. Vous devez toujours respirer pour ventiler vos mécanismes internes et dormir pour permettre à vos mécanismes de se reposer de la même manière que les autres poupées."
            ]
        },
        {
            "name"           : "Poupée souhaitée",
            "name_lower_case": "poupée souhaitée",
            "general_desc"   : [
                "Vous avez été éveillée par un souhait, soit du fait d'un puissant lanceur de sort soit par le désir sincère d'une personne innocente qui vous a beaucoup aimé. Vous êtes une preuve vivante qu'un esprit plein d'espoir peut franchir tout obstacle. Si vous obtenez un succès sur un jet de sauvegarde contre un effet d'émotion ou de terreur, il devient un succès critique."
            ]
        },
        {
            "name"           : "Poupée tsukumogami",
            "name_lower_case": "poupée tsukumogami",
            "general_desc"   : [
                "Vous avez la forme et les souvenirs d'un outil ordinaire. Choisissez une compétence de Connaissance en lien avec le type d'outil que vous étiez comme par exemple, Connaissance de la cuisine pour un couteau de cuisine ou une cuillère. Vous êtes qualifié dans cette compétence et vous obtenez un bonus de circonstances de +2 aux tests pour Aider avec cette compétence. Si vous prenez le don ancestral military_techPoupée serviable , le bonus passe à +3.",
                "Alors que la plupart des poupées sont constituées de bourre, de tissu ou de métaux légers, certains tsukumogamis sont constitués d'autres matériaux, ce qui modifie la faiblesse de la poupée au feu. Si votre corps est principalement composé de bois ou de tissu, vous avez la faiblesse normale des poupées face au feu. Si votre corps est principalement constitué de métal, vous avez une faiblesse contre l'électricité et, s'il est principalement constitué de céramique, contre le froid."
            ]
        },
        {
            "name"           : "Rat à long museau",
            "name_lower_case": "rat à long museau",
            "general_desc"   : [
                "Votre long museau vous donne un sens de l'odorat plus aiguisé que la plupart des hommes-rats. Vous obtenez un sens de l'odorat imprécis avec une portée de 9 mètres. Cela signifie que vous pouvez utiliser votre sens de l'odorat pour déterminer l'emplacement d'une créature. Le MJ doublera vraisemblablement la portée de ce sens si vous êtes sous le vent par rapport à la créature ou pourra la diviser par deux lorsque vous serez contre le vent.",
                "De plus, vous obtenez un bonus de circonstances de +2 aux tests de Perception pour sports_martial_artsChercher une créature ou un objet dans la portée de votre odorat."
            ]
        },
        {
            "name"           : "Rat d'égouts",
            "name_lower_case": "rat d'égouts",
            "general_desc"   : [
                "Vous descendez d'une longue lignée d'hommes-rats établie dans les égouts sous une vaste métropole. Vous êtes immunisé à la maladie de la fièvre de la fange. Vous obtenez un bonus de circonstances de +1 contre les maladies et les poisons. Si vous obtenez un succès sur un jet de sauvegarde contre une maladie ou un poison, il devient un succès critique. Si vous disposez d'une capacité différente qui devrait améliorer le jet de sauvegarde de manière identique (tel que la capacité de guerrier Endurci au combat ), si vous obtenez un échec critique sur le jet de sauvegarde, il devient un échec."
            ]
        },
        {
            "name"           : "Rat de l'ombre",
            "name_lower_case": "rat de l'ombre",
            "general_desc"   : [
                "Vos ancêtres ont vécu dans des endroits sombres souterrains, vous léguant votre fourrure noire et un air vaguement étrange. Vous êtes qualifié en Intimidation et pouvez utiliser Intimidation pour sports_martial_artsContraindre les animaux. Lorsque vous sports_martial_artsDémoralisez un animal, vous ne subissez pas de pénalité liée à l'absence de langue commune avec lui. Si vous devriez être qualifié en Intimidation (du fait de votre historique ou de votre classe par exemple), vous êtes qualifié dans une autre compétence de votre choix.",
                "L'attitude des animaux à votre égard est d'un degré inférieur à la normale, débutant en étant inamicale en général au lieu d'indifférente pour les animaux domestiqués et hostile plutôt qu'inamicale pour les animaux sauvages."
            ]
        },
        {
            "name"           : "Rat des profondeurs",
            "name_lower_case": "rat des profondeurs",
            "general_desc"   : [
                "Vos ancêtres ont vécu plus profondément que les autres hommes-rats, vous faisant bénéficier de leur capacité de voir dans le noir. Vous obtenez vision dans le noir."
            ]
        },
        {
            "name"           : "Rat des sables",
            "name_lower_case": "rat des sables",
            "general_desc"   : [
                "Vous êtes natif des plaines arides et avez grandi en voyageant sur les routes. Si vous avez vos deux mains libres, vous pouvez augmenter votre Vitesse à 9 mètres pour courir sur vos quatre pattes. De plus les effets environnementaux liés à la chaleur sont d'un degré moins extrême pour vous et vous pouvez aller 10 fois plus loin que la normale avant d'être affecté par la faim ou la soif. Quoi qu'il en soit, à moins que vous ne portiez des vêtements adaptés ou que vous ne soyez abrité, les effets de froid liés à l'environnement sont d'un degré plus extrême pour ce qui vous concerne."
            ]
        },
        {
            "name"           : "Rat des tunnels",
            "name_lower_case": "rat des tunnels",
            "general_desc"   : [
                "Vos pouvez facilement compresser votre corps et Vous faufiler à travers les trous. Vous obtenez le don de compétence military_techSe faufiler rapidement en tant que don supplémentaire même si vous n'êtes pas qualifié en Acrobaties. Les espaces étroits qui ne sont pas suffisamment étroits pour que vous ayez à utiliser l'action Se faufiler ne sont pas des terrains difficiles pour vous."
            ]
        },
        {
            "name"           : "Rat Neige",
            "name_lower_case": "rat neige",
            "general_desc"   : [
                "Vous avez une fourrure plus épaisse et une charpente plus encombrante pour vous défendre contre le froid, vous accordant une résistance au froid égale à la moitié de votre niveau (minimum 1). Vous traitez les effets environnementaux de froid comme s'ils étaient d'un degré moins extrême (le froid extraordinaire devient extrême, le froid extrême devient important, etc)."
            ]
        },
        {
            "name"           : "Reflet",
            "name_lower_case": "reflet",
            "general_desc"   : [
                "Vous avez été créé en tant que double d'une autre créature, intentionnellement ou accidentellement, bien que vous puissiez ne pas connaître vos origines. À part une ou deux marques mineures, vous ressemblez à l'original. Vous gagnez le trait reflet, en plus des traits de votre ascendance. Vous n'avez pas besoin de tenter des tests de Duperie pour vous faire passer pour l'original, sauf si vous interagissez avec des personnes qui le connaissent personnellement ou si vous faites quelque chose qui ne lui ressemble pas. Le MJ peut vous demander d'effectuer un test de Duperie dans d'autres circonstances comme par exemple si vous êtes en reflet inversé et que vous interagissez avec quelqu'un qui a vu un portrait fidèle de votre original et qui pourrait remarquer une caractéristique distinctive du côté opposé.",
                "Chaque fois que vous obtenez un don d'ascendance, vous pouvez effectuer un choix entre les dons de reflet et ceux de votre ascendance"
            ]
        },
        {
            "name"           : "Refus de la charité de Dame Nanbyo",
            "name_lower_case": "refus de la charité de dame nanbyo",
            "general_desc"   : [
                "Vous avez fait le vœu de libérer les autres des calamités naturelles. Votre vœu vous donne la force de porter 1 encombrement de plus que la normale avant d'être surchargé et un maximum d'Encombrement de 2 de plus ainsi qu'un bonus de circonstances de +1 aux tests d'Athlétisme pour sports_martial_artsOuvrir de force et sports_martial_artsVous échapper .",
                "Édit supplémentaire faire tout votre possible pour aider ou secourir les personnes piégées ou touchées par des catastrophes naturelles"
            ]
        },
        {
            "name"           : "Refus de la quête du Premier-né",
            "name_lower_case": "refus de la quête du premier-né",
            "general_desc"   : [
                "Vous avez fait le vœu de protéger les autres des cruautés du Premier Monde. Serein face aux capacités affectant l'esprit provenant des fées, votre vœu accorde une résistance aux dégâts mentaux égale à la moitié de votre niveau (minimum 1) et un bonus de circonstances de +2 aux tests de Nature pour Vous souvenir au sujet des fées.",
                "Édit supplémentaire affronter les fées cruelles que vous rencontrez (tant que vous avez une chance raisonnable de succès)"
            ]
        },
        {
            "name"           : "Refus de la renaissance du traître",
            "name_lower_case": "refus de la renaissance du traître",
            "general_desc"   : [
                "Vous avez fait le vœu de délivrer les autres des rakshasas et des asuras, que les légendes des yakshas ont condamné comme une engeance corrompue. Pour contrer leurs plans obscurs, votre vœu vous accorde la vision dans le noir et un bonus de circonstances de +1 aux tests de Perception pour sports_martial_artsChercher ou Deviner les intentions des rakshasas et des asuras.",
                "Édit supplémentaire affronter les rakshasas et les asuras que vous rencontrez (tant que vous avez une chance raisonnable de succès). Dans le cas improbable où vous trouvez un rakshasa ou un asura bienveillant, vous n'avez pas à l'affronter"
            ]
        },
        {
            "name"           : "Répit des mille toits",
            "name_lower_case": "répit des mille toits",
            "general_desc"   : [
                "Vous avez fait le vœu d'abriter et de nourrir les pauvres. Votre vœu vous confère de l'habileté en menuiserie, en cuisine et avec le tissu. Vous êtes qualifié en Artisanat et en Connaissance de la cuisine et vous gagnez le don de compétence military_techOutil improvisé .",
                "Édit supplémentaire aider les personnes démunies dans la mesure de vos possibilités en réparant leur logement et leurs vêtements ou en les nourrissant."
            ]
        },
        {
            "name"           : "Répit des sentiers sans nuage",
            "name_lower_case": "répit des sentiers sans nuage",
            "general_desc"   : [
                "Vous avez fait le serment de protéger les égarés et les perdus. Les effets de chaleur et de froid ambiants sont moins extrêmes pour vous (la chaleur incroyable devient extrême, le froid extrême devient important, etc), et vous bénéficiez d'un bonus de circonstances de + 1 aux jets de sauvegarde contre les éléments ou dangers liés à l'environnement, tels que les inondations, les éboulements de rochers et les tempêtes de sable.",
                "Édit supplémentaire aider les voyageurs égarés ou dans la difficulté"
            ]
        },
        {
            "name"           : "Répit du terreau et de la feuille",
            "name_lower_case": "répit du terreau et de la feuille",
            "general_desc"   : [
                "Vous avez fait le vœu de préserver le fondement même du sanctuaire : la vaste terre et tout ce qui pousse dessus. Votre vœu vous accorde le pouvoir spirituel de la terre. Vous obtenez un tour de magie de la liste des sorts primordiaux. Vous pouvez lancer ce sort comme un sort primordial inné à volonté. Ce tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur. Vos racines dans le monde vous confèrent le trait plante.",
                "Édit supplémentaire guérir ou éliminer les fléaux et la pollution des plantes et du sol que vous rencontrez"
            ]
        },
        {
            "name"           : "Rite d'invocation",
            "name_lower_case": "rite d'invocation",
            "general_desc"   : [
                "Vous avez augmenté votre exosquelette avec de la magie. Vous obtenez un tour de magie de la liste des sorts arcaniques ou occultes. Vous pouvez lancer ce sort comme un sort inné à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur."
            ]
        },
        {
            "name"           : "Rite de lumière",
            "name_lower_case": "rite de lumière",
            "general_desc"   : [
                "Votre exosquelette porte de petites pousses qui peuvent partager la vie. Lorsque vous utilisez Guérison par le soleil , vous pouvez restaurer les Points de vie d'un allié adjacent au lieu de vous-même. Cet allié devient temporairement immunisé contre toutes les utilisations de Guérison du soleil pendant 1 jour."
            ]
        },
        {
            "name"           : "Rite de passage",
            "name_lower_case": "rite de passage",
            "general_desc"   : [
                "Votre exosquelette reste connecté aux plantes qui l'ont créé. Vous pouvez ignorer les terrains difficiles et le sol instable provoqués par les sous-bois. De plus, lorsque vous utilisez la compétence Acrobaties pour Garder l'équilibrer sur des surfaces étroites ou un sol irrégulier au sein des forêts, vous n'êtes pas Pris au dépourvu. Lorsque vous obtenez un succès en tentant l'un de ces tests d'Acrobaties, il devient un succès critique."
            ]
        },
        {
            "name"           : "Rite de renforcement",
            "name_lower_case": "rite de renforcement",
            "general_desc"   : [
                "Votre exosquelette tissé rivalise avec les armures les plus dures que l'on puisse trouver. Votre exosquelette est une armure intermédiaire du groupe des armures de plaques qui confère un bonus d'objet de +4 à la CA, un maximum de Dextérité de +1, une pénalité d'échec aux tests de -2, une pénalité de Vitesse de -1,50 mètre, une valeur de Force de +3 et elle possède le trait confortable. Vous ne pouvez jamais porter une autre armure ou retirer votre exosquelette. Vous pouvez graver des runes d'armure sur votre exosquelette comme à l'ordinaire.",
                "workRite de renforcement de l'exosquelette"
            ]
        },
        {
            "name"           : "Rite du savoir",
            "name_lower_case": "rite du savoir",
            "general_desc"   : [
                "Vous avez amélioré votre exosquelette avec une connexion à Axis, ce qui vous permet de puiser dans les connaissances infinies de ce plan. Vous gagnez l'action sports_martial_artsAppel à Axis ."
            ]
        },
        {
            "name"           : "Rose piquante",
            "name_lower_case": "rose piquante",
            "general_desc"   : [
                "Vos magnifiques pétales et votre peau apparemment lisse cachent des épines invisibles qui transpercent les imprudents. Votre corps est couvert d'épines terriblement pointues pour décourager ceux qui pourraient s'en prendre à vous. Vous obtenez la réaction sports_martial_artsTerribles épines ."
            ]
        },
        {
            "name"           : "Samasaran oraculaire",
            "name_lower_case": "samasaran oraculaire",
            "general_desc"   : [
                "Vos précédentes vies ont permis de mieux comprendre le monde spirituel et les événements actuels et futurs, car l'histoire tend à se répéter. Choisissez arcanique, divin ou occulte. Vous obtenez un tour de magie de la liste de sorts de cette tradition magique. Vous pouvez Lancer ce sort comme un sort inné à volonté, comme un sort de la tradition choisie. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur."
            ]
        },
        {
            "name"           : "Samsaran guérisseur",
            "name_lower_case": "samsaran guérisseur",
            "general_desc"   : [
                "En recherchant l'illumination, vos incarnations passées ont vagabondé loin du foyer ancestral du Zi Ha, explorant les différentes nations du Tian Xia et d'ailleurs sur Golarion. Vos incarnations passées ont fait de dangereuses rencontres au cours de leurs voyages et vous avez fréquemment des flashbacks d'avoir dû soigner les blessures. Vous êtes qualifié en Médecine. Si vous devriez automatiquement être qualifié en Médecine (par votre historique ou votre classe par exemple), vous êtes qualifié dans une autre compétencce de votre Choix.",
                "Lorsque vous utilisez Médecine pour sports_martial_artsSoigner les blessures sur vous même, vous pouvez utiliser vos techniques spéciales pour ajouter votre niveau aux Points de vie que vous récupérez par le traitement."
            ]
        },
        {
            "name"           : "Samsaran montagnard",
            "name_lower_case": "samsaran montagnard",
            "general_desc"   : [
                "Vos incarnations passées se sont installées dans les grottes des montagnes couvertes de neige du Tian Xia, de sorte que votre corps est devenu adepte en survivant des tempêtes glacées. Vous obtenez une résistance au froid égale à la moitié de votre niveau (minimum 1). Vous considérez les effets environnementaux comme s'ils étaient d'un cran moins extrême (le froid extraordinaire devient extrême, le froid extrême devient important, etc)."
            ]
        },
        {
            "name"           : "Samsaran reclus",
            "name_lower_case": "samsaran reclus",
            "general_desc"   : [
                "Vos incarnations passées sont renées dans des sanctuaires du Zi Ha septentrional et vous avez des souvenirs d'avoir été entraîné à vous concentrer et à vous focaliser sur de longues périodes de temps. Vos flashbacks brumeux révèlent aussi des passages des écritures utiles dans les livres que vos vies passées ont consommés avec passion. Vous obtenez l'action sports_martial_artsExploiter le passé ."
            ]
        },
        {
            "name"           : "Samsaran sauvage",
            "name_lower_case": "samsaran sauvage",
            "general_desc"   : [
                "Vos vies antérieures vous ont amené à renaître dans des environnements reculés, loin des grandes villes du Tian Xia et au-delà. Vos manifestations passées ont dû apprendre à survivre par elles-mêmes et vous vous souvenez de cette volonté de survivre alors que vous ne possédiez que très peu de ressources. Vous êtes qualifié en Survie. Si vous êtes déjà qualifié en Survie (du fait de votre background ou de votre classe, par exemple), vous êtes qualifié dans une compétence de votre choix. Vous pouvez ignorer le terrain difficile provoqué par les arbres, le feuillage et les sous-bois."
            ]
        },
        {
            "name"           : "Sang-dragon",
            "name_lower_case": "sang-dragon",
            "general_desc"   : [
                "Vous descendez d'une manière ou d'une autre d'un dragon. Vos caractéristiques physiques pourraient l'afficher de manière ostentatoire, avec une paire de cornes draconiques, une peau écailleuse à certains endroits ou même une queue ou vous pourriez avoir développé une réserve interne de puissance draconique. Vous obtenez le trait sang-dragon, en plus des traits de votre ascendance. Ajoutez le draconique à la liste des langues supplémentaires de votre ascendance (vous permettant de la choisir si votre modificateur d'Intelligence est positif). Lorsque vous obtenez un succès sur un jet de sauvegarde contre un effet de terreur, il devient un succès critique. Lorsque vous obtenez un don ancestral, vous pouvez le choisir parmi ceux des sang-dragons et ceux de votre ascendance."
            ]
        },
        {
            "name"           : "Sarangay de la demi-lune",
            "name_lower_case": "sarangay de la demi-lune",
            "general_desc"   : [
                "Vous venez de l'une des communautés voyageuses qui migrent de manière saisonnière le long de vastes fleuves et des montagnes du Tian Xia, amenant les nouvelles et des nouvelles aux villages le long de leur chemin. Votre peuple relie les communautés des sarangays l'une à l'autre à travers de vastes distances et sont symbolisées par la demi-lune, qui réunit la lumière et l'obscurité. De la même manière, vous réunissez l'obscurité et la clarté, le rouge et le bleu, le vent et la mer. Vos ancêtres étaient grands et corpulent avec une fourrure noire brillante, des tâches ou des marques claires et des cornes courtes et étroitement incurvées. Vous êtes qualifié dans les deux compétences de Connaissance de votre choix et vous obtenez un bonus de circonstances de +1 aux tests pour Vous souvenir utilisant ces compétences."
            ]
        },
        {
            "name"           : "Sarangay de la lune croissante",
            "name_lower_case": "sarangay de la lune croissante",
            "general_desc"   : [
                "Vos ancêtres vivaient dans les marécages, les marais et les forêts inondées, où ils affrontaient de féroces prédateurs et formaient des groupes de pillards pour s'approprier les rares ressources. Béni par la lune croissante, vous êtes l'un des éviscérateurs et vous pouvez vaincre les menaces qui se cachent dans les eaux troubles ainsi que celles qui chassent sur la terre ferme. Vous êtes un puissant nageur à la fourrure brune ou grise et aux cornes recourbées vers l'arrière ou vers le bas. Vous obtenez un bonus de circonstances de +2 aux tests d'Athlétisme pour sports_martial_artsSauter en longueur ou sports_martial_artsNager ."
            ]
        },
        {
            "name"           : "Sarangay de la lune décroissante",
            "name_lower_case": "sarangay de la lune décroissante",
            "general_desc"   : [
                "Vos ancêtres ont été nommés d'après la lune en transition, toujours changeante et éphémère. Ils sont les gardiens des arts secrets, tout comme la lune décroissante cache sa face, et leurs communautés ont été hautement considérées par leurs conteurs, leurs acteurs et leurs artistes. Vous avez vécu parmi votre communauté dans la périphérie des forêts ou des rivières où nombre de réponses viennent sous forment d'énigmes et vous avez appris à voir le monde selon des perspectives différentes. Votre peuple est souvent de couleur rouge ou fauve, avec des yeux proéminents et des cornes plates et compactes. Vous êtes qualifié à votre choix en Acrobaties, Artisanat ou en Représentation.",
                "Une fois par jour, Lorsque vous obtenez un échec critique dans la compétence choisie, vous pouvez relancer le test, en appliquant le nouveau résultat, même s'il est pire. Relancer de cette manière est un effet de fortune."
            ]
        },
        {
            "name"           : "Sarangay de la nouvelle lune",
            "name_lower_case": "sarangay de la nouvelle lune",
            "general_desc"   : [
                "Certains vous appellent les nains sarangays et votre espèce \"les cachés\". D'autres murmurent que vous sortez avec la lune lorsque celle-ci \"part à la chasse\" - un dicton populaire qui désigne le moment où la nouvelle lune disparaît du ciel. Vos ancêtres insaisissables construisaient leurs habitations à l'ombre des fourrés de bambous et vos communautés ancestrales valorisaient la prudence et l'indépendance, transmettant leur connaissance permettant de marcher avec légèreté et de vous déplacer comme de la fumée à travers les bambous. Vos ancêtres avaient une fourrure brun foncé ou grise avec des marques blanches et une paire de cornes plates et triangulaires en forme de V. Votre taille est Petite à la place de moyenne. Vous obtenez 10 Points de vie de votre ascendance à la place de 8 et obtenez un bonus de circonstances de +2 aux tests d'Athlétisme pour sports_martial_artsPousser ."
            ]
        },
        {
            "name"           : "Sarangay de la pleine lune",
            "name_lower_case": "sarangay de la pleine lune",
            "general_desc"   : [
                "Vous avez été élevé dans une tradition chamanique transcendant une unique communauté ou héritage sarangay. Vous avez passé votre jeunesse sous la direction d'un ancien chaman, qui vous a enseigné à communier avec les esprits dans l'espoir que vous aurez un jour à utiliser cette connaissance pour conseiller et guider votre peuple. Ceux de votre tradition sont des prêtres ou des chamans qui canalisent les esprits et voient des choses que d'autres ne peuvent. Vous obtenez une prime d'attribut ancestral à la Sagesse au lieu de la Force et vous obtenez une faiblesse d'attribut à la Constitution au lieu de la Sagesse. Vous obtenez le don ancestral military_techGuérisseur populaire ."
            ]
        },
        {
            "name"           : "Shisk à piquants",
            "name_lower_case": "shisk à piquants",
            "general_desc"   : [
                "Votre corps a adapté un mécanisme défensif pour briser vos piquants en cas d'attaque, ce qui vous permet de vous défendre contre les prédateurs agressifs, bien qu'il faille un certain temps pour que les piquants repoussent. Vous gagnez la réaction sports_martial_artsPiquants barbelés ."
            ]
        },
        {
            "name"           : "Shisk aux intestins solides",
            "name_lower_case": "shisk aux intestins solides",
            "general_desc"   : [
                "Votre métabolisme est lent, ce qui vous permet de passer des jours sans nourriture et de freiner le rythme des afflictions. Vous pouvez rester 1 semaine sans nourriture avant de commencer à mourir de faim. De plus, les délais d'incubation et la durée des stades de toutes les maladies et de tous les poisons qui vous affectent sont augmentés de 50%. Si le délai d'incubation ou le stade sont instantanés ou ne durent qu'un round, cette capacité n'a aucun effet."
            ]
        },
        {
            "name"           : "Shisk conservateur de savoir",
            "name_lower_case": "shisk conservateur de savoir",
            "general_desc"   : [
                "Vous avez grandi entouré de connaissances et de secrets. Vous devenez qualifié dans une compétence de Connaissances et dans une autre compétence de votre choix basée sur l'Intelligence ou la Sagesse. Au niveau 5, vous devenez expert dans les compétences choisies."
            ]
        },
        {
            "name"           : "Shisk démarchepierre",
            "name_lower_case": "shisk démarchepierre",
            "general_desc"   : [
                "Arpenter les terrains rocheux et montagneux est, pour vous, une seconde nature. Vous pouvez ignorer le terrain difficile non magique causé par les débris et le sol inégal fait de pierre et de terre."
            ]
        },
        {
            "name"           : "Shisk garde sort",
            "name_lower_case": "shisk garde sort",
            "general_desc"   : [
                "Vos connaissances magiques vous permettent de lancer des sorts simples. Choisissez occulte ou primordiale. Vous obtenez un tour de magie issu de la liste des sorts de cette tradition magique. Vous pouvez lancer ce sort comme un sort inné à volonté, comme un sort de la tradition choisie. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur."
            ]
        },
        {
            "name"           : "Sprite lumineux",
            "name_lower_case": "sprite lumineux",
            "general_desc"   : [
                "Vous brillez avec une luminosité magique. Vous diffusez naturellement de la lumière comme une workTorche ; cette lumière possède les traits évocation, lumière et primordial. Vous pouvez éteindre, rallumer ou changer la couleur de cette lumière en utilisant une unique action qui possède le trait concentration."
            ]
        },
        {
            "name"           : "Squelette compact",
            "name_lower_case": "squelette compact",
            "general_desc"   : [
                "Pour les tâches qui nécessitent une touche plus légère, les restes de gnomes, de gobelins et de halfelins sont plus appropriés que ceux d'une créature plus grande. Ces squelettes plus petits et plus agiles s'insèrent bien dans un coffre de voyage, peuvent être forcés à passer par des espaces étroits et évitent plus facilement la détection. Votre taille est Petite au lieu de Moyenne. Vous obtenez le don military_techSe faufiler rapidement même si vous n'êtes pas qualifié en Acrobaties. Les espaces étroits qui ne sont pas assez étroits pour qu'il soit nécessaire de Se faufiler ne sont pas des terrains difficiles pour vous."
            ]
        },
        {
            "name"           : "Squelette générique",
            "name_lower_case": "squelette générique",
            "general_desc"   : [
                "Les humains, et ceux qui leur sont physiquement proches, constituent la matière première préférée des nécromanciens. Ils sont facilement disponibles et leur physiologie a été la plus largement étudiée, de sorte que ces morts-vivants peuvent être facilement créés en masse. Malgré leur nom, les squelettes génériques font des soldats d'infanterie plutôt mobiles du fait de l'efficacité avec laquelle ils transfèrent les énergies nécromantiques au travers de leur corps. Votre Vitesse de base est de 9 m au lieu de 7,50 mètres."
            ]
        },
        {
            "name"           : "Squelette monstrueux",
            "name_lower_case": "squelette monstrueux",
            "general_desc"   : [
                "Les squelettes inhumains sont souvent créés à la fois pour leurs attaques physiques mortelles et pour leur apparence terrifiante. Les bêtes et les humanoïdes monstrueux avec les plus étranges squelettes se retrouvent souvent comme œuvres centrales de la collection d'un nécromancien suffisamment doué pour relever une telle créature. Vous obtenez une attaque à mains nues d'aile, de corne, de griffe, ou de queue infligeant 1d6 dégâts. Une griffe inflige des dégâts tranchants, une corne des dégâts perforants et une queue ou une aile des dégâts contondants. Cette attaque à mains nues appartient au groupe pugilat et possède les traits finesse et à mains nues."
            ]
        },
        {
            "name"           : "Squelette robuste",
            "name_lower_case": "squelette robuste",
            "general_desc"   : [
                "Certaines conditions dangereuses ne conviennent pas au squelette ordinaire, de sorte qu'un nécromancien pourra choisir de réanimer les os d'un nain, d'un orc ou d'une autre créature réputée pour sa robustesse. Vous avez 10 Points de vie au lieu de 6 et gagnez le don military_techDur à cuir ."
            ]
        },
        {
            "name"           : "Strix des littoraux",
            "name_lower_case": "strix des littoraux",
            "general_desc"   : [
                "Vous êtes le descendant de strix qui ont voyagé vers les côtes. Vos plumes sont spécialement imperméables et élégamment inclinées pour plonger, vous permettant d'attraper du poisson et d'autres proies dans les eaux peu profondes. Vous êtes qualifié en Athlétisme et vous obtenez le don de compétence military_techMaraudeur aquatique comme don supplémentaire."
            ]
        },
        {
            "name"           : "Strix grapilleur",
            "name_lower_case": "strix grapilleur",
            "general_desc"   : [
                "Vos ancêtres sont originaires d'une terre où la nourriture était rare et les menaces trop nombreuses. Vous êtes qualifié en Survie. Vous obtenez le don de compétence military_techGlaneur comme un don supplémentaire. Votre méticulosité lorsque vous ramasser de la nourriture vous donne un bonus de circonstances de +1 aux tests de Survie pour Subsister."
            ]
        },
        {
            "name"           : "Strix oiseau chanteur",
            "name_lower_case": "strix oiseau chanteur",
            "general_desc"   : [
                "Vous descendez d'une lignée de conteurs strix talentueux. Des plus hautes montagnes et des étendues sauvages les plus vierges où vos poumons ont pu se remplir de l'air pur et glorieux, vous émettez des trilles, sifflez et fredonnez des chansons mélodieuses. Alors que des sons naturels vous prédisposent à chanter, les voix vous ont prédisposé à l'imitation. Vous recevez un bonus de circonstances de +1 sur les tests de Duperie pour Déguiser une voix imitée, lorsque le son de la voix est l'unique facteur pris en compte. Si vous êtes un maître en Duperie, vous obtenez un bonus de circonstances de +2 à la place. Vous obtenez aussi un bonus de circonstances de +1 aux tests de Représentation pour chanter ; si vous êtes un maître en Représentation, vous obtenez un bonus de circonstances de +2 à la place."
            ]
        },
        {
            "name"           : "Strix planeur nocturne",
            "name_lower_case": "strix planeur nocturne",
            "general_desc"   : [
                "Vous êtes un oiseau nocturne, conservant la veille et chassant dans les environnements les plus dépourvus de lumière. Vous obtenez vision dans le noir."
            ]
        },
        {
            "name"           : "Strix prédateur",
            "name_lower_case": "strix prédateur",
            "general_desc"   : [
                "Vous provenez d'une lignée de strix avec des ailes exceptionnellement grandes et de longs ergots. Vous obtenez une attaque à mains nues d'ergots qui inflige casino1d4 dégâts tranchants . Vos attaques de serres font partie du groupe pugilat et possèdent les traits agile, finesse et à mains nues."
            ]
        },
        {
            "name"           : "Suli",
            "name_lower_case": "suli",
            "general_desc"   : [
                "Vous descendez d'un jann ou incarnez autrement une dichotomie des forces élémentaires planaires opposées. Vous obtenez le trait suli en plus des traits de votre ascendance. Vous obtenez aussi vision nocturne ou vous obtenez vision dans le noir si votre ascendance avait déjà la vision nocturne. Vous pouvez choisir parmi les dons des sulis et les dons de votre ascendance lorsque vous obtenez un don ancestral.",
                "Dons ancestraux des descendants de génies",
                "Au niveau 1, vous obtenez un don ancestral et vous obtenez un don ancestral supplémentaire tous les 4 niveaux par la suite (aux niveaux 5, 9, 13 et 17). En tant que descendant de génie, vous pouvez choisir parmi les dons ancestraux des descendants de génie, ceux de votre héritage suli et ceux de votre ascendance."
            ]
        },
        {
            "name"           : "Surki à capapace dure",
            "name_lower_case": "surki à capapace dure",
            "general_desc"   : [
                "Votre carapace est bien plus dense que celle des autres surkis, vous offrant votre propre armure. Votre carapace est une armure intermédiaire dans le groupe des plates qui vous accorde un bonus d'objet de +4, un maximum de Dextérité de +1, une pénalité au test de –2, une pénalité à la vitesse de -1,50 mètres, une valeur de Force de +3 et possède le trait confort. Vous ne pouvez jamais porter une autre armure ou retirer votre carapace. Vous pouvez graver des runes d'armure sur votre carapace.",
                "Évolution Le système circulatoire magique qui court entre vos nodules est devenu un réseau renforcé qui renforce votre carapace avec de l'énergie magique. Si vous avez été atteint par un coup critique qui inflige des dégâts physiques, vous pouvez utiliser votre réaction pour tenter un casinoTest nu, DD 17 . Si elle réussit, l'attaque devient un coup normal.\nÉvolution Vos nodules abdominaux peuvent projeter un champ autour de vous qui vous protège contre le type de magie avec lequel vous êtes le plus familier. Vous obtenez l'action sports_martial_artsAtténuation des harmoniques ."
            ]
        },
        {
            "name"           : "Surki à élytre",
            "name_lower_case": "surki à élytre",
            "general_desc"   : [
                "La couche supérieure de votre carapace est particulièrement mobile et vous pouvez la déployer pour prendre l'air avec grâce lorsque vous chutez. Vous ne subissez pas de dégâts, quelle que soit la distance de votre chute.",
                "Évolution Les nodules de vos épaules ont évolué en une paire d'épines que vous pouvez alimenter en énergie pour projeter une paire d'ailes brillantes. Vous pouvez lancer auto_awesomeVol comme un sort inné une fois par jour, en vous ciblant. Tant que vos ailes sont alimentées, vous émettez une lumière brillante dans un rayon de 6 mètres et une lumière faible dans les 6 mètres suivants.\nÉvolution Les nodules de vos épaules ont évolué en un éventail de fines membranes qui résonnent lorsque la magie est routées à travevrs vous. Vous obtenez l'action sports_martial_artsChanson stridulante ."
            ]
        },
        {
            "name"           : "Surki briseur",
            "name_lower_case": "surki briseur",
            "general_desc"   : [
                "Vos griffes sont particulièrement dures et peuvent se frayer un passage à travers la terre et les prédateurs de la même manière. Vous obtenez une attaque à mains nues de griffe qui inflige 1d4 dégâts trachants. Vos griffes sont dans le groupe pugilat et possède les traits à mains nues, agile, finesse et polyvalent C.",
                "Évolution Les nodules de votre poignet projettent de la magie pour faire un creusement durable. Vous pouvez dépenser une action Interagir pour augmenter les dégâts de votre attaque à mains nues à 1d6, lui accorder les traits magique, démolition et polyvalent force et retire le trait agile. Vous pouvez dépenser une autre action pour désactiver cette capacité et redonner à votre griffe ses statistiques normales.\nÉvolution Vos nodules de chevilles peuvent émettre à partir de vos griffes des pointes de magie qui vous maintiennent en place. Si n'importe quel effet devrait vous forcer à vous déplacer d'au moins 3 mètres, vous pouvez choisir de vous déplacer de seulement la moitié de cette distance. La traction supplémentaire de vos piques de griffe vous permettent de grimper avec une main occupée (ou avec les deux mains occupées si vous possédez le don military_techCombattant-grimpeur ). Vous obtenez la réaction sports_martial_artsCreuser une tranchée ."
            ]
        },
        {
            "name"           : "Surki lanterne",
            "name_lower_case": "surki lanterne",
            "general_desc"   : [
                "Les nodules de votre abdomen sont particulièrement lùmineux. Vous pouvez utiliser une action Interagir pour émettre de la lumière vive à partir de votre abdomen dans un rayon de 6 mètres (et de la lumière faible dans les 6 m suivants). C'est un effet de lumière magique avec un rang de contre égal à la moitié de votre niveau arrondi au supérieur. Vous pouvez changer la couleur de la lumière ou l'éteindre avec une autre action Interagir.",
                "Évolution Vos nodules au niveau de l'abdomen ont évolué en une paire de seconds membres qui projettent un faisceau magique concentré. Vous obtenez l'action sports_martial_artsFaisceau de lanterne .\nÉvolution Des émetteurs secondaires de lumière émergent des nodules de vos épaule qui flashent en même temps que votre lanterne. Vous obtenez l'action sports_martial_artsLanterne stroboscopique ."
            ]
        },
        {
            "name"           : "Sylphe",
            "name_lower_case": "sylphe",
            "general_desc"   : [
                "Vous descendez des élémentaires d'air ou êtes né sous l'influence de cet élément. Vous obtenez le trait sylphe en plus des traits de votre ascendance. Vous obtenez aussi vision nocturne ou vision dans le noir si votre ascendance avait déjà vision nocturne.",
                "Dons ancestraux des descendants de génies",
                "Au niveau 1, vous obtenez un don ancestral et vous obtenez un don ancestral supplémentaire tous les 4 niveaux par la suite (aux niveaux 5, 9, 13 et 17). En tant que descendant de génie, vous pouvez choisir parmi les dons ancestraux des descendants de génie, ceux de votre héritage sylphe et ceux de votre ascendance."
            ]
        },
        {
            "name"           : "Talos",
            "name_lower_case": "talos",
            "general_desc"   : [
                "Vos caractéristiques physiques reflètent l'influence d'un zuhra ou d'un autre élémentaire métallique sur votre lignée. Votre peau a probablement un éclat métallique, allant du lustre terne du minerai brut au poli étincelant d'une lame neuve, l'usure de l'âge ou des épreuves prenant la forme de ternissures, de rouille ou d'éraflures. Vos cheveux peuvent ressembler à de l'or filé, de l'acier enroulé, des fils de cuivre ou des chaînes tressées. Vous gagnez le trait talos, en plus des traits de votre ascendance. Vous obtenez une résistance à l'électricité égale à la moitié de votre niveau (minimum 1). Vous pouvez lancer le tour de magie auto_awesomeDétection du métal comme un sort divin arcanique à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur.",
                "Vous pouvez choisir parmi les dons de talos, de descendants des génies et ceux de votre ascendance lorsque vous obtenez un don ancestral."
            ]
        },
        {
            "name"           : "Tanuki ascétique",
            "name_lower_case": "tanuki ascétique",
            "general_desc"   : [
                "Il est dit que votre forme arrondie est le résultat du calme et de la retenue et pas de la complaisance. Vous obtenez odorat comme un sens imprécis avec une portée de 9 mètres. Le MJ va habituellement doubler la portée si vous êtes sous le vent de quelque chose que vous tentez de sentir ou divisez par deux si vous êtes contre le vent. De plus, vous obtenez un bonus de circonstances de +2 pour les tests de Perception lorsque vous tentez de localiser de la nourriture, de la boisson ou un objet consommable qui est ingéré (tels qu'une potion ou un élixir) en utilisant votre odorat."
            ]
        },
        {
            "name"           : "Tanuki courageux",
            "name_lower_case": "tanuki courageux",
            "general_desc"   : [
                "Votre cœur bat avec le courage de ceux qui vous ont précédé, vous donnant le genre de bravoure dont seul un tanuki peut faire preuve. Chaque fois que vous obtenez l'état sentiment_very_dissatisfiedEn fuite , vous obtenez également un bonus de circonstances de +3 mètres à vos Vitesses tant que vous êtes en fuite. Lorsque vous subissez l'état En fuite, au lieu de devoir passer toutes vos actions à essayer de fuir, vous pouvez agir normalement pendant une action mais devez quand même dépenser le reste de vos actions pour fuir. Vous obtenez aussi la capacité sports_martial_artsRetraite tactique ."
            ]
        },
        {
            "name"           : "Tanuki placide",
            "name_lower_case": "tanuki placide",
            "general_desc"   : [
                "Vous possédez une sérénité peu commune chez les autres tanukis, qui semblent toujours s'emballer. Vous obtenez un bonus de circonstances de +1 aux jets de sauvegarde contre les effets d'émotion. Si vous obtenez un succès sur un jet de sauvegarde contre un effet d'émotion, il devient un succès critique mais lorsque vous obtenez un échec contre un jet de sauvegarde contre un effet d'émotion, il devient un échec critique."
            ]
        },
        {
            "name"           : "Tanuki placide",
            "name_lower_case": "tanuki placide",
            "general_desc"   : [
                "Votre fierté sous votre forme tanuki véritable ne connait aucune limite. Vous obtenez à votre choix entre military_techForme du quotidien ou military_techForme de bouilloire comme un don ancestral supplémentaire."
            ]
        },
        {
            "name"           : "Tanuki vertueux",
            "name_lower_case": "tanuki vertueux",
            "general_desc"   : [
                "Nombre de tanukis transportent une gourde d'alcool pour se souvenir d'agir avec vertu et, au regard de ces standards, vous êtes plutôt vertueux. Vous obtenez une résistance contre le poison égal à la moitié de votre niveau (minimum 1). Vous pouvez manger et boire lorsque vous êtes sentiment_very_dissatisfiedNauséeux . Vous ne pouvez être incapacité par de l'alcool conventionnel si vous ne souhaitez pas l'être."
            ]
        },
        {
            "name"           : "Tengu à serres",
            "name_lower_case": "tengu à serres",
            "general_desc"   : [
                "Vos serres sont aussi dures et robustes que votre bec. Vous obtenez une attaque à mains nues de serre qui inflige 1d4 dégâts tranchants. Vos serres font partie du groupe pugilat et possèdent les traits agile, finesse, à mains nues et polyvalent P."
            ]
        },
        {
            "name"           : "Tengu battu par les vents",
            "name_lower_case": "tengu battu par les vents",
            "general_desc"   : [
                "Que ce soit grâce à une bénédiction de Hei Feng ou à l'éclosion de votre œuf durant un grain, vous êtes résistant aux tempêtes. Vous obtenez une résistance à l'électricité égale à la moitié de votre niveau (minimum 1). Vous réussissez automatiquement le test nu pour cibler une créature sentiment_very_dissatisfiedMasquée si cette créature est masquée seulement par la pluie ou le brouillard."
            ]
        },
        {
            "name"           : "Tengu dent de chien",
            "name_lower_case": "tengu dent de chien",
            "general_desc"   : [
                "En plus d'un bec, votre bouche comporte aussi un nombre de dents vicieuses et pointues. Certaines légendes clament que vos puissantes mâchoires peuvent même percer l'acier. Bien que vous ne soyez pas encore assez fort pour ça, vos crocs peuvent toujours infliger de terribles blessures. Votre attaque à mains nues de bec obtient le trait mortel d8."
            ]
        },
        {
            "name"           : "Tengu enfant du ciel",
            "name_lower_case": "tengu enfant du ciel",
            "general_desc"   : [
                "Vos os pourraient être particulièrement légers, vous pourriez être un rare tengu possédant des ailes ou votre lien avec les esprits du vent et du ciel pourrait être plus fort que la plupart, ralentissant votre chute au travers des airs. Vous ne subissez aucun dégât lors d'une chute, quelle que soit la distance de laquelle vous chûtez."
            ]
        },
        {
            "name"           : "Tengu gardemontagne",
            "name_lower_case": "tengu gardemontagne",
            "general_desc"   : [
                "Vous descendez d'une lignée d'ascètes tengus, vous ayant transmis un lien avec les esprits du monde et du Grand au-delà. Vous pouvez lancer le tour de magie auto_awesomeDéchaînement de vitalité comme un sort primordial inné à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur. Chaque fois que vous lancez un sort provenant d'un héritage ou d'un don ancestral tengu, vous pouvez décider s'il s'agit d'un sort divin ou primordial."
            ]
        },
        {
            "name"           : "Tengu maudit",
            "name_lower_case": "tengu maudit",
            "general_desc"   : [
                "Votre lignage a été exposé à malédiction sur malédiction et maintenant elles glissent sur vos plumes comme la pluie. Si vous obtenez un succès sur un jet de sauvegarde contre un effet de malédiction ou de malchance, il devient un succès critique. Lorsque vous devriez obtenir l'état sentiment_very_dissatisfiedCondamné , faites un casinoTest nu, DD 17 . En cas de succès, réduisez la valeur de l'état Condamné que vous devriez obtenir de 1."
            ]
        },
        {
            "name"           : "Tengu plonge vague",
            "name_lower_case": "tengu plonge vague",
            "general_desc"   : [
                "Vous êtes l'un des rares tengus qui peut fendre les vagues comme un oiseau fend les airs et vous rôdez souvent dans les rivières ou les océans où peu vous attendent. Vous obtenez une Vitesse de nage de 4,50 mètres."
            ]
        },
        {
            "name"           : "Tripkee à longue langue",
            "name_lower_case": "tripkee à longue langue",
            "general_desc"   : [
                "Votre langue est particulièrement longue et vous pouvez la projeter avec une portée et une précision extraordinaires. Vous pouvez utiliser votre langue pour délivrer des sorts de contact et effectuer des actions Interagir extrêmement simples, comme ouvrir certains types de portes non verrouillées. Votre langue ne peut pas accomplir d'actions qui nécessitent des doigts ou une importante dextérité manuelle, incluant toute action qui nécessiterait un test pour être accomplie et vous ne pouvez pas l'utiliser pour porter des objets."
            ]
        },
        {
            "name"           : "Tripkee à palmes",
            "name_lower_case": "tripkee à palmes",
            "general_desc"   : [
                "Des palmes résistantes le long de vos mains et de vos orteils peuvent ralentir toute chute. Tant que vous disposez d'une main libre, vous ne subissez aucun dégât de chute, quelle que soit la distance de laquelle vous tombez."
            ]
        },
        {
            "name"           : "Tripkee à peau empoisonnée",
            "name_lower_case": "tripkee à peau empoisonnée",
            "general_desc"   : [
                "Bien que vous soyez petit, les glandes empoisonnées camouflées partout sur votre corps cachent une défense mortelle. Vous obtenez la réaction sports_martial_artsPeau toxique ."
            ]
        },
        {
            "name"           : "Tripkee à peau épaisse",
            "name_lower_case": "tripkee à peau épaisse",
            "general_desc"   : [
                "Votre peau semblable à du cuir ressemble à celle d'un crapaud. Vous obtenez 8 Points de vie de votre ascendance au lieu de 6. Vous obtenez un bonus de circonstances de +1 aux jets de sauvegarde contre maladies et poisons."
            ]
        },
        {
            "name"           : "Tripkee aux orteils collants",
            "name_lower_case": "tripkee aux orteils collants",
            "general_desc"   : [
                "Vos mains et vos pieds exsudent un film qui les aide à adhérer sur les surfaces. Vous obtenez un bonus de circonstances de +2 à vos DD de Vigueur et de Réflexes contre les tentatives pour vous sports_martial_artsDésarmer , vous sports_martial_artsPousser , vous sports_martial_artsRepositionner ou vous faire un sports_martial_artsCroc-en-jambe . Lorsque vous grimpez aux arbres, aux lianes ou d'autres feuillages, si vous obtenez un succès au test d'Athlétisme pour Escalader, il devient un succès critique."
            ]
        },
        {
            "name"           : "Tripkee des rivières",
            "name_lower_case": "tripkee des rivières",
            "general_desc"   : [
                "Vos ancêtres vivent autant dans que sur l'eau. Vous obtenez une vitesse de nage de 4,50 mètres."
            ]
        },
        {
            "name"           : "Trogloshi",
            "name_lower_case": "trogloshi",
            "general_desc"   : [
                "Vous êtes adapté aux régions dépourvues d'ensoleillement des zones de jungles profondes et des grottes sombres avec une chair souple dépourvue de pigments et des cornes cristallines d'une clarté inhabituelle. Vous obtenez le don d'ascendance military_techLuminescence du cristal ."
            ]
        },
        {
            "name"           : "Vanara Bandaagee",
            "name_lower_case": "vanara bandaagee",
            "general_desc"   : [
                "Votre famille est l'une des nombreuses familles qui prétendent descendre de la famille royale vanara vouée au maintien de la paix, appelée les bandaagee. Les bandaagee sont les vanaras les plus courants. Vous êtes très familier avec les pièges de la civilisation et vous vous déplacez facilement dans les communautés les plus bondées. Vous ignorez le terrain difficile lié à la foule."
            ]
        },
        {
            "name"           : "Vanara Lahkgyan",
            "name_lower_case": "vanara lahkgyan",
            "general_desc"   : [
                "Vos ancêtres vanaras sont peut-être nés à l'image de Ragdya mais ne doivent leur survie qu'en servant son ennemi : Lahkgya au visage rouge. Vous avez des dents acérées, faites pour grincer et déchirer la chair. Vous pouvez subsister en mangeant uniquement de la viande crue. Vous disposez d'une attaque à mains nues de mâchoires qui inflige 1d6 dégâts perforants. Vos mâchoires font partie du groupe pugilat et possèdent les traits finesse et à mains nues."
            ]
        },
        {
            "name"           : "Vanara Radgyen",
            "name_lower_case": "vanara radgyen",
            "general_desc"   : [
                "Gardiens des traditions et conteurs d'histoires anciennes, votre famille trace sa lignée jusqu'à ceux qui sont nés directement des caprices de Ragdya. Lorsque vous parlez, les autres sont enclins à vous écouter, peut-être en raison de l'étincelle divine de votre lien avec Ragdya. Vous obtenez un tour de magie issu de la liste des sorts divins. Ce tour de magie ne peut pas infliger de dégâts ou causer d'autres dommages directs. Vous pouvez lancer ce sort comme un sort divin inné à volonté. Un tour de magie est intensifié à un rang de sort égal à la moitié de votre niveau arrondi au supérieur."
            ]
        },
        {
            "name"           : "Vanara Wajaghand",
            "name_lower_case": "vanara wajaghand",
            "general_desc"   : [
                "Vos ancêtres ont été contraints au travail forcé par l'immortel rakshasa Ravana, le Premier et le Dernier. Bien que leur intelligence pendant leur captivité ait permis de sauver d'innombrables vies et qu'ils ne soient désormais plus asservis, cette époque a marqué votre famille, laissant des séquelles sur l'esprit qui ne guériront jamais vraiment, même à travers les générations. Vous obtenez un bonus de circonstances de +1 aux jets de sauvegarde contre les effets d'émotion et, chaque fois, que vous obtenez un succès sur un jet de sauvegarde contre un effet d'émotion, il devient un succès critique."
            ]
        },
        {
            "name"           : "Vihskanya au venin vif",
            "name_lower_case": "vihskanya au venin vif",
            "general_desc"   : [
                "Vous avez l'habitude d'utiliser votre venin en combat, vous permettant d'employer votre venin au pied levé. Votre action sports_martial_artsEnvenimer ne déclenche pas les réactions qui devraient normalement être déclenchées lors d'une action de manipulation. De plus vous obtenez l'action sports_martial_artsTirer du venin ."
            ]
        },
        {
            "name"           : "Vishkanya Conservécaille",
            "name_lower_case": "vishkanya conservécaille",
            "general_desc"   : [
                "Vous faites partie de la famille des vishkanyas de votre communauté qui a été chargée de conserver les archives de l'histoire et des expériences de votre peuple. Votre compétence d'érudit vous confère un esprit vif. Une fois par jour, vous pouvez tenter de Vous souvenir par une action gratuite."
            ]
        },
        {
            "name"           : "Vishkanya insaisissable",
            "name_lower_case": "vishkanya insaisissable",
            "general_desc"   : [
                "Votre corps flexible semble anormalement fluide pour certains, bien qu'ils puissent rarement mettre le doigt sur ce qui semble étrange chez vous. Vous pouvez échapper à vos ennemis avec facilité. Vous obtenez un bonus de circonstances de +1 aux tests pour sports_martial_artsVous échapper . De plus, vous vous déplacez deux fois plus vite lorsque vous Vous faufilez."
            ]
        },
        {
            "name"           : "Vishkanya prismatique",
            "name_lower_case": "vishkanya prismatique",
            "general_desc"   : [
                "Vos écailles scintillent et accrochent la lumière dans un étalage de couleurs enivrantes. Vous êtes qualifié en Représentation (ou dans une autre compétence de votre choix si vous êtes déjà qualifié en Représentation) et obtenez le don de compétence military_techReprésentation fascinante ."
            ]
        },
        {
            "name"           : "Vishkanya sang-ancien",
            "name_lower_case": "vishkanya sang-ancien",
            "general_desc"   : [
                "Vous avez une lignée matrilinéaire directe avec le groupe original de vishkanyas présents sur les navires vudranais venus réclamer Jalmeray. Depuis lors, votre famille s'est bien adaptée à sa nouvelle vie dans la Mer Intérieure. Vous êtes qualifié en Société (ou une autre compétence de votre choix si vous êtes déjà qualifié en Société) et vous obtenez le dons de compétence military_techManières courtoises ou military_techSavoir urbain à votre choix."
            ]
        },
        {
            "name"           : "Viskanya antivenin",
            "name_lower_case": "viskanya antivenin",
            "general_desc"   : [
                "Votre corps contient non seulement du venin mais aussi de nombreux antivenins. Vous obtenez une résistance au poison égale à la moitié de votre niveau (minimum 1) et chacun de vos jets de sauvegarde réussis contre une affliction de poison réduit son stade de 2 ou de 1 pour un poison virulent. Chaque succès critique contre un poison en cours réduit son stade de 3 ou de 2 pour un poison virulent."
            ]
        },
        {
            "name"           : "Xyloshi",
            "name_lower_case": "xyloshi",
            "general_desc"   : [
                "Les muscles de votre cou sont proéminents et vous permettent d'utiliser votre corne faciale comme un outil ou une arme. Vous obtenez une attaque à mains nues de corne qui inflige 1d6 dégâts perforants. Votre corne fait partie du groupe pugilat et possède les traits finesse et à main nues."
            ]
        }
    ]
};