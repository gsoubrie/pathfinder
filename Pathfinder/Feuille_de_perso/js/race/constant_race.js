"use strict";
var RACES = {
    key  : "ancestries",
    label: "Ascendance",
    ENUM : [
        {
            name                : "elfe",
            start_life          : 6,
            body_size           : SIZE.M,
            speed               : 9,
            characteristic_bonus: [CARAC.DEX, CARAC.INT, CARAC.FREE],
            characteristic_malus: [CARAC.CON],
            language            : [LANGUAGE.COMMON, LANGUAGE.COMMON],
            language_sup        : [],
            traits              : [TRAIT.ELFE, TRAIT.HUMANOIDE],
            night_vision        : VM._1,
            heritage            : {
                arctique   : {},
                bois       : {},
                caverne    : {},
                murmure    : {},
                visionnaire: {}
            },
            dons                : {},
            general_desc        : [
                "En tant que membres d'un peuple ancien, les elfes ont connu de grands changements et ont la perspective qui ne peut provenir que de l'observation d'un arc de l'histoire. Après avoir quitté le monde durant les temps anciens, ils sont revenus sur des terres changées et ils luttent toujours pour récupérer leurs terres ancestrales. Les elfes attachent de l'importance à la gentillesse, à l'intelligence et à la beauté et nombre d'entre eux s'efforce en permanence d'améliorer leur comportement, leur apparence et leur culture. Leurs études vont jusqu'à un niveau de détail que la plupart des peuples de courte durée de vie trouvent excessif ou inefficace. Les elfes sont souvent des personnes plutôt discrètes, plongées dans les secrets de leurs bosquets et de leurs groupes de parenté. Ils sont lents à nouer des amitiés en dehors de leur parenté, car les elfes qui passent leur vie parmi des peuples à la longévité réduite deviennent souvent moroses après avoir vu des générations de compagnons vieillir et mourir. Ces elfes sont connus sous le nom de Délaissés parmi leurs congénères.",
                "Vous : <ul><li>Faites preuve de prudence dans vos relations avec les individus à l'espérance de vie plus courte.</li><li>Développez des centres d'intérêt spécialisés ou obscurs, dans l'objectif de les maîtriser.</li></ul>",
                "Les autres : <ul><li>Se concentrent généralement sur votre apparence et admirent votre grâce ou vous traitent comme si vous étiez physiquement fragile.</li><li>Craignent que vous les méprisiez dans votre for intérieur ou ont le sentiment que vous êtes condescendant ou réservé.</li></ul>"
            ],
            physical_desc       : [
                "Bien que généralement plus grands que les humains, les elfes possèdent une grâce fragile accentuée par leurs traits fins et leurs oreilles pointues. Leurs yeux sont en amande, leurs pupilles larges et vivement colorées occupent toute la partie visible de leur oeil. Ces pupilles, qui leur donnent un aspect étrange, leur confèrent une vision précise, même dans de mauvaises conditions lumineuses.",
                "Les elfes s'adaptent graduellement à leur environnement et à leurs compagnons et adoptent souvent des traits physiques qui reflètent leur environnement. Un elfe qui a habité dans des forêts primitives depuis des siècles pourrait présenter des cheveux verdoyants et des doigts noueux, tandis que ceux qui ont vécu dans un désert pourraient avoir des pupilles et une peau dorées. Les elfes atteignent l'âge adulte à environ 20 ans, bien qu'ils ne soient pas considérés émotionnellement mûrs par leurs congénères avant de se rapprocher de leur premier siècle. Un elfe ordinaire peut vivre environ 600 ans."
            ],
            society_desc        : [
                "La patience atavique et la curiosité intellectuelle font des elfes d'excellents sages, philosophes et magiciens et leurs sociétés s'articulent autour de leur capacité intrinsèque d'émerveillement et de leur soif de connaissance.",
                "Les elfes ont des idéaux profondément enfouis d'individualisme, ce qui permet à chaque elfe d'explorer de multiples occupations avant de se vouer à un but singulier ou une passion que leur convient le mieux. Les elfes sont également réputés pour leurs querelles contre leurs rivaux, appelées des 'ilduliel', mais ces relations antagonistes peuvent parfois se trannsformer en amitiés au fil du temps. Un elfe garde secret son nom au sein de sa famille, ne fournissant que son surnom aux personnes qu'il rencontre. Ce surnom peut changer au fil du temps, suite à des événements ayant marqué sa vie ou sur un simple caprice. Un même elfe pourrait avoir été connu sous de nombreux noms par ses associés d'âges et de régions différents. Les noms elfiques sont formés d'un ensemble de syllabes qui sont censées couler de manière lyrique... au moins en elfique."
            ],
            believe_desc        : [
                "Les elfes sont souvent émotifs et capricieux mais ils défendent de grands idéaux qui leur tiennent à cœur. Ils préfèrent les divinités qui partagent leur amour pour tout ce qui est mystique et artistique. Desna et Shélyn sont leurs divinités favorites, la première pour son sens de l'émerveillement et la seconde pour son appréciation de l'art. Calistria est la plus célèbre des divinités elfiques, car elle représente de nombreux idéaux elfiques poussés à l'extrême."
            ],
            edit_desc           : [
                "trouver la beauté dans la nature et l'art, explorer des choses que d'autres garderaient cachées, démontrer sa supériorité par rapport à son rival"
            ],
            anathema_desc       : [
                "abandonner sa voie, forcer une autre créature à faire quelque chose"
            ],
            name_example        : ["Aerel, Amrunelara, Caladrel, Dardlara, Faunra, Heldalel, Jathal, Lanliss, Oparal, Seldlon, Soumral, Talathel, Tessara, Variel, Yalandlara, Zordlon"]
        },
        {
            name                : "gobelin",
            start_life          : 6,
            body_size           : SIZE.P,
            speed               : 7.5,
            characteristic_bonus: [CARAC.DEX, CARAC.CHA, CARAC.FREE],
            characteristic_malus: [CARAC.SAG],
            language            : [LANGUAGE.COMMON, LANGUAGE.GOBELIN],
            traits              : [TRAIT.GOBELIN, TRAIT.HUMANOIDE],
            night_vision        : VM._1,
            heritage            : {
                boyaud_fer  : {},
                dent_rasoir : {},
                neige       : {},
                incassable  : {},
                peau_charbon: {}
            },
            dons                : {},
            general_desc        : [
                "Les histoires alambiquées auxquelles les autres s'accrochent n'intéressent pas les gobelins. Ce petit peuple vit dans l'instant présent et préfère les histoires à dormir debout aux récits factuels. Les vertus des gobelins sont d'être dans le présent, la créativité et l'honnêteté. Ils s'efforcent de mener une vie épanouie, plutôt que de s'inquiéter de la manière dont se terminera leur voyage. Ils racontent des histoires et ne s'attardent pas sur les faits. Être petit, mais rêver grand. De nombreux gobelins aiment les plaisirs simples comme les chansons, le feu et la nourriture, et détestent la lecture, les chiens et les chevaux. D'autres gobelins s'adonnent à des activités plus complexes, comme bricoler des objets de récupération ou concocter des en-cas et des explosifs à partir de n'importe quoi.",
                "Vous : <ul><li>Vous efforcez de prouver aux autres, et peut-être à vous-même, que vous avez votre place parmi les autres peuples civilisés.</li><li>Savez alléger la charge mentale que les autres ressentent (et vous amuser) avec vos farces et vos bouffonneries.</li></ul>",
                "Les autres : <ul><li>Font attention à ce que vous ne mettiez pas accidentellement (ou intentionnellement) le feu à trop de choses.</li><li>Se demandent comment vous avez pu survivre étant donné l'alimentation, l'imprudence et la passion pour le feu qui sont caractéristiques de votre ascendance.</li></ul>"
            ],
            physical_desc       : [
                "Les gobelins sont des humanoïdes courts sur pattes, au corps large, aux membres maigres et à la tête surdimensionnée dotée de grandes oreilles et de petits yeux rouges en forme de bille. Leur couleur varie du vert, au gris en passant par le bleu, et ils arborent souvent des cicatrices, des furoncles et de plaques rouges. Les gobelins mesurent environ 90 cm. La plupart est chauve et n'a peu ou pas de poils. Leurs dents en bataille tombent et repoussent régulièrement et leur métabolisme rapide les pousse à manger constamment et à faire de fréquentes siestes. Les mutations sont également plus courantes parmi les gobelins que chez les autres peuples et ils considèrent généralement qu'une mutation importante est un signe de pouvoir ou de bonne fortune.",
                "Les gobelins atteignent l'adolescence à 3 ans et l'âge adulte 4 ou 5 ans plus tard. Ils peuvent vivre jusqu'à 50 ans ou plus, mais sans personne pour les protéger de leurs congénères et d'eux-mêmes, ils dépassent rarement les 20 ans"
            ],
            society_desc        : [
                "Les gobelins ont tendance à se regrouper autour de chefs forts, formant de petites tribus. Ces tribus comptent rarement plus d'une centaine d'individus, mais plus une tribu est nombreuse, plus le chef doit faire dépenser de l'énergie à maintenir l'ordre, une tâche notoirement difficile. Le jeu et la créativité comptent plus pour les gobelins que la productivité ou l'étude et leurs campements débordent de chants et de rires.",
                "Les gobelins forment des liens étroits avec leurs alliés et protègent férocement leurs compagnons qui les ont déjà protégés ou leur ont offert une oreille attentive. Pour leur propre sécurité, les gobelins partent généralement du principe que les membres des grands peuples, qu'ils surnomment les « grandes guibolles », vont mal les traiter. Ils ont du mal à faire confiance aux grandes guibolles, d'autant que ce n'est que dans un passé récent que des relations de confiance entre ces peuples sont devenues envisageables. Les gobelins choisissent des noms simples. Un bon nom doit pouvoir se prononcer facilement, être assez court pour qu'on le crie sans s'essouffler et être plaisant à prononcer. Celui qui choisit le nom décide souvent de donner un nom qui rime avec quelque chose qu'il aime, ce qui facilitera la composition des chants."
            ],
            believe_desc        : [
                "Même les gobelins les mieux intentionnés ont du mal à respecter les règles, ce qui signifie que les aventuriers gobelins ne savent pas toujours s'ils sont du bon côté de la loi. La plupart d'entre eux préfèrent choisir leurs propres divinités, en optant pour des monstres puissants, des merveilles de la nature ou toute autre chose qu'ils trouvent fascinante, allant parfois jusqu'à attribuer le statut de divinité à des gobelins connus. Les gobelins qui côtoient des personnes d'autres origines peuvent cependant adopter certaines de leurs croyances et de nombreux aventuriers gobelins adoptent le culte de Cayden Cailéan."
            ],
            edit_desc           : [
                "inventer des chants pour chaque occasion, transformer les rebuts en trésors, résoudre les problèmes par le feu"
            ],
            anathema_desc       : [
                "faire confiance à un chien ou un cheval, apprendre à écrire"
            ],
            name_example        : ["Ak, Bokker, Frum, Guzmuk, Krobby, Loohi, Mazmord, Neeka, Omgot, Ranzak, Rickle, Tup, Wakla, Yonk, Zibini"]
        },
        {
            name                : "humain",
            start_life          : 8,
            body_size           : SIZE.M,
            speed               : 7.5,
            characteristic_bonus: [CARAC.FREE, CARAC.FREE],
            characteristic_malus: [],
            language            : [LANGUAGE.COMMON],
            traits              : [TRAIT.HUMAIN, TRAIT.HUMANOIDE],
            night_vision        : VM._1,
            heritage            : {
                boyaud_fer  : {},
                dent_rasoir : {},
                neige       : {},
                incassable  : {},
                peau_charbon: {}
            },
            dons                : {},
            general_desc        : [
                "Plus imprévisibles et disparates que n'importe quel autre peuple habitant sur Golarion, les humains font preuve d'une volonté exceptionnelle et de la capacité à endurer et à s'étendre. Si de nombreuses civilisations ont prospéré avant l'ascension de l'humanité, celle-ci est à l'origine des plus grandes et des plus terribles sociétés au cours de l'histoire et elle constitue aujourd'hui la majorité de la population des royaumes du pourtour de la Mer Intérieure.",
                "L'ambition, la diversité et le potentiel exceptionnel des humains leur ont permis de devenir l'ascendance dominante de ce monde. Leurs empires et leurs nations sont vastes et étendus et leurs citoyens se forgent un nom grâce à la force de leurs épées et par la puissance de leurs sorts. L'humanité est diverse et tumultueuse, allant du nomade à l'impérial, du sinistre au saint. Nombre d'entre eux s'aventurent pour explorer, cartographier l'étendue du multivers, rechercher des trésors perdus depuis longtemps ou mener de puissantes armées à la conquête de leurs voisins, sans autre raison que celle de pouvoir le faire.",
                "Vous : <ul><li>Vous efforcez d'atteindre l'excellence, soit pour vous-même, soit pour défendre une cause.</li><li>Chérissez les relations entretenues avec votre famille et vos amis.</li></ul>",
                "Les autres : <ul><li>Respectent votre flexibilité, votre adaptabilité et, dans la plupart des cas, votre ouverture d'esprit.</li><li>Doutent de vos intentions, craignant que vous ne puissiez chercher qu'à accumuler du pouvoir ou la fortune.</li><li>Ne savent pas quoi penser de vous et hésitent à présumer vos intentions.</li></ul>"
            ],
            physical_desc       : [
                "Physiquement, les caractéristiques des humains sont aussi différentes que le nombre de climats dans le monde. Les humains présentent une grande variété de couleur de peau et de cheveux, de types de corpulence et de traits faciaux. Généralement parlant, leur peau a une teinte plus sombre lorsqu'ils vivent ou leurs ancêtres ont vécu près de l'équateur.",
                "Les humains atteignent l'âge adulte autour de 15 ans, bien qu'ils n'atteignent une maturité mentale que quelques après. Un humain typique peut vivre environ 90 ans. Les humains présentent des caractéristiques physiques exceptionnellement variables par rapport à d'autres ascendances, avec une plus grande variabilité en taille, en poids et d'autres paramètres physiques."
            ],
            society_desc        : [
                "Une grande variété de groupes ethniques humains peuplent les continents de la région de la Mer Intérieure de Golarion et les terres situées au-delà. Les personnages humains peuvent appartenir à n'importe quelle ethnie, quelle que soit leur terre d'origine. Quelques exemples parmi les ethnies présentes sur Golarion sont présentés ci-dessous.",
                "Les personnages des ethnies humaines de la Mer Intérieure parlent le commun (également connu sous le nom de taldorien) et certaines autres vous permettent d'avoir accès à une langue régionale peu courante.",
                "<ul>\n" +
                "<li>Les garundais couvrent les nations situées sur les rives méridionales de la Mer Intérieure.</li>\n" +
                "<li>Les kéléshites sont originaires de l'empire kéléshite, dans les déserts de l'est.</li>\n" +
                "<li>Les kellides vivent au sein des montagnes et des steppes du nord de l'Avistan.</li>\n" +
                "<li>Les mwangis sont répartis sur le vaste continent du Garund.</li>\n" +
                "<li>Les shoantis ont établi leur foyer dans les terres inhospitalières du Plateau de Storval.</li>\n" +
                "<li>Les taldoriens occupent l'essentiel de l'Avistan du fait d'un Empire déchu.</li>\n" +
                "<li>Les tianais viennent à l'origine du lointain continent du Tian Xia.</li>\n" +
                "<li>Les ulfes résident dans les villes côtières de l'Avistant del'ouest.</li>\n" +
                "<li>Les varisiens ont privilégié historiquement une vie nomade de caravane itinérantes.</li>\n" +
                "</ul>"
            ],
            believe_desc        : [
                "La diversité humaine se manifeste également au niveau de leurs gouvernements, de leur attitude et des normes sociales. Bien que les cultures humaines les plus anciennes puissent faire remonter leur histoire partager sur des milliers d'années, comparées aux sociétés des elfes ou des nains, les civilisations humaines semblent dans un état de constante évolution, leurs empires se fragmentant et de nouveaux royaumes supplantant les anciens."
            ],
            edit_desc           : [
                "explorer le monde, aspirer à la grandeur, se consacrer à la morale"
            ],
            anathema_desc       : [
                "gâcher le peu de temps dont vous disposez"
            ],
            name_example        : ["Contrairement à de nombreuses cultures ancestrales, qui s'attachent généralement à des traditions spécifiques et à des histoires partagées, la diversité de l'humanité a donné naissance à un ensemble quasi infini de noms. Les humains des tribus du Nord portent des noms différents de ceux qui vivent dans les États-nations du Sud. Dans la majeure partie du monde, les humains parlent le commun (bien que certains continents de Golarion possèdent leurs propres langues régionales communes), mais leurs noms sont aussi variés que leurs croyances et leurs apparences."]
        }
    ]
};

