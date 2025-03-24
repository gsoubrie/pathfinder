"use strict";
var RACES = {
    key          : "ancestries",
    label        : "Ascendances",
    key_element  : "race",
    label_element: "Ascendance",
    ENUM         : [
        {
            "name"                : "Animal éveillé",
            "traits"              : [
                "Rare",
                "Animal éveillé",
                "Bête"
            ],
            "general_desc"        : [
                "Autrefois, vous profitiez des plaisirs simples et illimités de la nature avec un esprit innocent et dégagé. Vous viviez d'instant en instant, sans jamais vous poser de questions sur ce qui allait suivre ou réfléchir aux ramifications de ce qui s'était passé auparavant. Vous ne faisiez qu'un avec la nature. Puis vint l'événement qui changea tout. Vous avez bu l'eau d'un lac incandescent, quelqu'un vous a fait une farce magique, un druide a cherché à élever votre esprit. Vous avez été arraché à l'instant présent de la nature pour entrer dans le monde de la pensée. Pour la première fois, vous avez réalisé que vous aviez un passé.",
                "Pour la première fois, vous avez commencé à penser à votre avenir. Vous découvrez maintenant le monde d'une toute nouvelle manière. Vous prenez conscience de dangers auxquels vous n'auriez jamais pensé auparavant, mais ce nouveau monde vous réserve aussi des plaisirs et des merveilles. C'est une bonne chose car il n'existe pas de retour en arrière possible.",
                "Les animaux éveillés sont des animaux normaux qui ont vécu une expérience qui a éveillé leur esprit, leur donnant une pleine intelligence et la capacité de percevoir le monde à travers une lentille de pensée. Il existe de nombreuses façons mystérieuses pour les animaux de s'éveiller, mais la plus connue est le rituel auto_awesomeÉveil d'animal .",
                "Chaque animal vit le processus d'éveil différemment. Pour certains, l'ouverture de leur esprit est électrique, leur permettant de percevoir et de réfléchir au monde comme jamais auparavant. D'autres sont submergés par des émotions et des pensées qu'ils n'ont pas demandées et qu'ils n'étaient pas prêts à accueillir. La plupart des personnes qui éveillent un animal supposent que celui-ci sera plein d'émerveillement et de gratitude et ne sont pas préparées à la grande diversité de réactions qu'elles reçoivent : le choc, la tristesse, l'euphorie, la curiosité et la colère sont courants (mais ce ne sont pas les seuls).",
                "Quelle que soit la réaction d'un animal éveillé, il doit toujours trouver sa voie dans le monde. Certains animaux éveillés tentent de reprendre leur vie, mais se retrouvent presque toujours déconnectés de leurs congénères non éveillés. D'autres adoptent complètement le monde civilisé, faisant de leur mieux pour naviguer dans un monde conçu pour les humanoïdes. Au fil du temps, les animaux éveillés se retrouvent à osciller entre le monde civilisé et le monde sauvage car chacun d'eux ne contient qu'une part de ce dont ils ont besoin dans la vie.",
                "Si vous voulez jouer un personnage qui est extrêmement en dehors de la norme et qui se situe entre le monde civilisé et le monde naturel, vous devriez jouer un animal éveillé.",
                "Vous pourriez... : <ul><li>Négocier entre les sociétés humanoïdes et les créatures du monde naturel.</li><li>Osciller entre la rumination et agir avec une agressivité sauvage.</li></ul>",
                "Les autres : <ul>    <li>Pensent que vous êtes une bête qui est provoquée facilement.</li>    <li>Veulent vous étudier comme une curiosité sans respect pour vos souhaits ou votre confort.</li></ul>"
            ],
            "physical_desc"       : [
                "Les animaux éveillés ressemblent beaucoup aux animaux qu'ils étaient autrefois. Au premier coup d'œil, il est difficile pour les humanoïdes de distinguer un animal éveillé des autres animaux de son espèce. En y regardant de plus près, la plupart des humanoïdes remarquent quelque chose de différent dans les yeux et les mouvements d'un animal éveillé. L'animal éveillé se comporte d'une manière qui marque qu'il a consciente de soi et même ceux qui ne savent pas que l'animal est éveillé ressentent cette différence. Souvent, les animaux éveillés prennent l'habitude de porter des vêtements et d'autres ornements et d'utiliser des outils qui rendent leur nature éveillée évidente.",
                "Les animaux reconnaissent instantanément les animaux éveillés et réagissent d'abord avec inquiétude. S'il est bien accueilli, l'animal finira par s'apaiser et s'approcher de l'animal éveillé. Il faut beaucoup de temps pour qu'un animal se sente vraiment à l'aise avec ses congénères éveillés mais, avec le temps, cela peut arriver.",
                "Les réveils traumatiques entraînent parfois des différences visuelles étonnantes chez l'animal réveillé. On raconte que des ours se sont réveillés avec un pelage rouge flamme et des oiseaux avec des plumes fantomatiques.",
                "Forme éveillée L'éveil a altéré votre forme, vous permettant de parler et de vous tenir sur deux jambes. Vous pouvez manier, porter, tenir et utiliser les objets. La nature et le nombre de membres que vous utilisez pour manipuler les objets sont déterminés avec votre MJ, mais vis-à-vis des règles, vous fonctionnez comme un humanoïde avec deux mains.",
                "Esprit éveillé L'éveil a altéré votre esprit. Vous n'êtes plus un animal, mais vous pouvez toujours poser des questions, recevoir des réponses et utiliser Diplomatie avec les animaux de votre espèce. En vous remémorant vos instincts, vous pouvez vous permettre d'être affecté par des sorts et d'autres effets comme si vous étiez un animal."
            ],
            "society_desc"        : [
                "Les animaux éveillés sont suffisamment rares et isolés pour que peu d'entre eux se retrouvent pour voyager ensemble et encore moins pour fonder leur propre société. Les animaux éveillés s'installent souvent dans les sociétés voisines, s'intégrant sous le déguisement d'un animal « typique » ou ouvertement en tant qu'artisans et ouvriers. Si un animal éveillé peut décider que la société humanoïde n'est pas faite pour lui, ceux qui restent n'ont pas trop de mal à s'adapter. La plupart des endroits de Golarion en ont vu suffisamment pour que les gens surmontent rapidement leur choc initial à la vue d'un chat domestique ou d'un oiseau chanteur qui parle.",
                "Les animaux éveillés qui ont tourné le dos à la vie « civilisée » ont tendance à créer des sociétés animales dont ils sont les dirigeants naturels. Ils utilisent leur intelligence pour créer un ordre et une structure dont les animaux de leur type ne seraient pas capables autrement. En Ustalav, on raconte que de grandes meutes de loups, composées de plusieurs meutes combinées, sont dirigées par un loup éveillé. La meute parcourt la campagne, protégeant les villages des incursions de morts-vivants. En Isger, les marchands racontent que des ours attaquent les caravanes, mais ne font que suffisamment de dégâts pour voler les marchandises avant de repartir.",
                "Il y a aussi des rumeurs sur une ville remplie d'animaux éveillés en Iobarie, nommée Roam. La plupart des animaux éveillés en entendent parler à un moment ou à un autre de leur vie. Certains pensent qu'il s'agit d'un rêve fantaisiste, mais beaucoup tentent de la trouver. On dit que Roam est le véritable foyer de tous les animaux éveillés, un endroit où leur intelligence et leurs esprits sauvages sont également les bienvenus.",
                "Les animaux utilisent leurs sens pour identifier les autres plutôt que des noms, et leur relation avec la manière dont ils sont identifiés tend donc à refléter cela. Ils peuvent donner à leurs amis des surnoms qui correspondent à des sentiments vifs et à des informations sensorielles. Ils font souvent de même pour eux-mêmes, ne s'écartant de ces conventions que s'ils utilisent un nom qui leur a été donné en tant qu'animal de compagnie ou compagnon ou s'ils essaient de suivre les conventions de la société qui les entoure. Parfois, ils combinent leur approche instinctive avec un nom plus conventionnel pour créer quelque chose de pompeux et d'orgueilleux.",
                "<h3>Exemples de noms</h3>",
                "Bec jaune, Bouche à bijoux, Fourrure rouge, Grosse griffe, Mâchoire grimaçante, Oeil narquois, Renfrogné, Reine écaille, Roi demi-corne, Truffenoire"
            ],
            "believe_desc"        : [
                "Les animaux éveillés ont tendance à voir le monde à travers le prisme de l'ordre naturel. Ceux qui sont déstabilisés par les humains ou qui ont été traumatisés par eux vivent généralement dans la nature, tandis que ceux qui sont poussés par la curiosité ou la notion de structure cherchent à trouver une place dans la nature plus ordonnée et plus réglementée de la société humanoïde.",
                "Il n'existe pas de religion uniforme parmi les animaux éveillés, mais il n'est pas surprenant que les dieux ayant le monde naturel parmi leurs domaines, comme Gozreh, soient populaires. Il existe de petits groupes d'animaux éveillés qui vénèrent des dieux destructeurs tels que Lamashtu et Rovagug. Ceux qui ont été éveillés par un compagnon peuvent adopter le point de vue de ce dernier et éventuellement sa religion.",
                "<p><strong>Édits populaires</strong></p>",
                "explore your newfound sentience, enjoy the creature comforts of humanoid civilization; often other edicts related to your animal side, such as \"keep the pack together\" for a canine or \"always wash your food\" for a raccoon",
                "Anathème populaire",
                "revert to purely animalistic behaviors"
            ],
            "characteristic_bonus": [
                "Constitution", "Sagesse", "Libre"
            ],
            "characteristic_malus": [
                "Intelligence"
            ],
            "start_life"          : "?",
            "language"            : [
                "commun"
            ],
            "language_sup"        : [],
            "legacies"            : [
                "Animal coureur",
                "Animal grimpeur",
                "Animal nageur",
                "Animal volant"
            ]
        },
        {
            "name"                : "Athamaru",
            "traits"              : [
                "Peu courant",
                "Amphibie",
                "Athamaru",
                "Humanoïde"
            ],
            "general_desc"        : [
                "Les athamarus sont des humanoïdes ressemblant à des poissons qui forment des communautés sous-marines très unies. Dans de petites colonies, ils pratiquent la culture de subsistance des algues, dressent des anguilles pour servir de montures et créent des œuvres d'art coralliennes élaborées. Leurs relations avec les autres races aquatiques sont tendues, car les athamarus ont subi des mauvais traitements de leur part. Cependant, ils restent curieux des liens potentiels et des nouvelles possibilités qui s'offrent à eux.",
                "Les athamarus se définissent par leurs liens avec le monde qui les entoure. Ils vivent en communauté, au milieu des récifs coralliens et des créatures aquatiques qui les accompagnent, ce qui favorise les familles nombreuses et les groupes d'amis. Les colonies des athamarus sont établies près des routes commerciales fluviales ou maritimes et entretiennent généralement des relations étroites avec les marins qui passent régulièrement, échangeant des bijoux en corail ou des informations sur les routes maritimes proches contre des produits de surface, en particulier des aliments à base de racines comme les tubercules, les ignames et d'autres légumes, qu'ils considèrent comme des mets délicats.",
                "Si vous voulez jouer un personnage qui valorise la communauté et survit en mer grâce à ses seuls efforts, vous devriez jouer un athamaru.",
                "Vous pourriez... : <ul>    <li>Accorder une importance primordiale à votre communauté.</li>    <li>Approcher les étrangers avec une curiosité chaleureuse.</li></ul>",
                "Les autres : <ul>    <li>Partent du principe que vous êtes bien servi dans la Survie sous-marine.</li>    <li>Croient qu'il faut vous blamer pour les odeurs fétides.</li></ul>"
            ],
            "physical_desc"       : [
                "Les athamarus possèdent une apparence distinctive qui ressemble à celle d'un poisson. Leur peau brillament colorée correspond souvent à celle des récifs où ils ont bâti leurs communautés. Des volants, des barbillons et des nageoires crêtées ajoutent à leur apparence flamboyante. La grande variété de formes de crêtes, d'écailles et de styles de nageoires permet de distinguer les individus, même si les communautés partagent des traits communs. Ces similitudes sont souvent avantageuses au regard de leur environnement, comme des écailles qui leur permettent de se fondre dans les algues ou des orteils plus longs dans les zones où les fonds marins sont rocailleux.",
                "Les étrangers notent souvent que les athamarus possèdent une odeur distinctive, qui provient de leurs phéromones, utilisé à la fois pour la communication et la défense. Alors que le niveau de contrôle varie, tous les athamarus peuvent communiquer les émotions basiques chimiquement et chaque communauté possèden des variations uniques à leurs phéromones qui servent comme l'empreinte d'une communauté. Les maîtres de l'expression phéromonale peuvent communiquer des concepts philosophiques complexes purement chimiques, occupant un rôle similaire aux maîtres de chants des autres communautés.",
                "Les athamarus apprécient les parures naturelles qui brouillent les frontières entre les modifications corporelles et les bijoux. Dans les régions où pousse le corail, l'entretien des récifs et de leurs espèces symbiotiques est une tâche très appréciée. Certains façonnent des spécimens encore vivants pour en faire des boucles d'oreilles ou des manchettes, puis guident délicatement le corail au fur et à mesure de sa croissance. Ces pièces restent souvent en circulation pendant des générations et sont considérées comme l'histoire vivante de la communauté. D'autres utilisations du corail consistent à intégrer les pièces dans le corps du porteur de manière symbiotique, le corail fournissant des nutriments et l'athamaru assurant l'accès à la lumière du soleil et à de l'eau de qualité."
            ],
            "society_desc"        : [
                "La plus grande population d'athamarus vit dans la nation sous-marine de Xidao au Tian-Xia. Là, de plus petites cités états suivent leur propre gouvernement et leurs chefs, bien qu'ils se soient voués à protéger une autre des terreurs des profondeurs si le besoin se fait jour. La plus grande cité-état, Yashabaru, n'a pas de contrôle direct sur les autres agglomérations, mais son chef sert de figure de proue pour la région. À l'extérieur de Xidao, les communautés sont plus isolées et indépendantes, bien que des centres de population incluent les Entraves, une communauté recluse près de Sedeq et les grands golfes d'Arcadie.",
                "Les plus petites des communautés des athamarus pourraient n'avoir qu'une douzaine de membres, alors que les plus importantes des maisons puissent en compter des centaines. Les communautés des athamarus se lient avec les autres habitants aquatiques pour bâtir des liens puissants qui améliorent la qualité de vie pour toute personne impliquée. Animals are integrated into their communities as partners, particularly the domesticated eels that athamarus use as steeds. The eels generally roam freely, and athamarus train mounts from newly hatched elvers they raise.",
                "Chaque communauté comprend des athamarus reliés génétiquement, typiquement tous ceux nés d'un unique parent. Dans la plupart des communautés, le parent est connu comme la matriarche et sert de chef. Lorsque ce parent est proche de la fin de sa vie ou stoppe la ponte de ses œufs, plusieurs athamarus de la communauté choisisse de conduire certains changements physiques, incluant un accroissement de taille, pour annoncer leur intention de devenir la prochaine matriarche. La décision d'être considéré comme une matriarche n'est pas à prendre à la légère, car le rôle de leader est en définitive responsable de la survie et de la pérennité de la communauté. Chaque communauté choisit sa prochaine matriarche de ces \"espérants\" à leur propre manière. De telles traditions incluent des élections démocratiques, des tests de connaissances et des concours de capacités physiques impliquant une plongée profonde ou de monte de faune sauvage indomptée. À Xidao, les candidats matriarches de la cité-état doivent se présenter à la Haute Matriarche et son conseil pour être jugé digne de terminer la transformation.",
                "Parfois, les jeunes adultes se séparent pour créer de nouvelles communautés, surtout si les ressources se raréfient ou si les conflits internes s'aggravent. Si un groupe éprouve des difficultés à établir une communauté, son ancienne colonie accepte souvent de le reprendre s'il accepte de respecter les dirigeants en place.",
                "D'autres groupes ont maltraité les athamarus par le passé, c'est pourquoi leurs communautés maintiennent des liens internes puissants. Les athamarus considèrent qu'il est moins risqué de traiter d'abord entre eux. Bien que les activités les plus courantes soient le commerce, les communautés échangent également des informations. Les avertissements concernant les dangers circulent rapidement. Les opportunités sûres sont également partagées, comme les habitants des terres dignes de confiance et les marchés ouverts. Cette confiance envers les étrangers est toutefois facile à perdre et difficile à regagner. La plupart des athamarus préfèrent s'enfuir - parfois même en déracinant une communauté entière - plutôt que de risquer des hostilités ouvertes.",
                "Les noms des athamaru consistent typiquement en trois syllables. La première syllable est partagée par tous les membres d'une génération et les deux dernières syllables identifient un individual. Lorsqu'ils voyagent à l'extérieure de leurs communautés, ils se présentent eux-mêmes par le nom de la communauté en premier. Certaines communautés, particulièrement celles de Xidao, brisent cette convention, mais certaines conservent toujours le flux et identifient les athamarus pondus lors de la même année.",
                "<h3>Exemples de noms</h3>",
                "Aussandor, Cayiel, Corlena, Mithae, Onteac, Paquotal"
            ],
            "believe_desc"        : [
                "En raison de leur esprit communautaire, les athamarus ont tendance à privilégier les croyances et les philosophies qui mettent l'accent sur les liens et l'aide aux autres. Conscients qu'ils ont parfois besoin d'être protégés des dangers de la mer, certains athamarus endossent le rôle de gardiens inflexibles ou de figures religieuses qui implorent l'intercession de dieux compatissants. Au sein d'une même communauté, le culte tend à ne privilégier qu'une seule divinité, les temples multiples étant rares. Dans la mer Intérieure, les colonies des athamarus vénèrent généralement le dieu de la nature Gozreh pour renforcer leurs liens avec leur environnement ou Érastil pour les guider dans la formation de communautés saines. À Tian Xia, les athamarus recherchent les faveurs du duc du Tonnerre Hei Feng pour naviguer entre les saisons et la politique, tandis que ceux qui protègent les mers contre les horreurs des profondeurs prient les dieux de la guerre Srikalis, Sritaming et Sribaril pour une force inébranlable.",
                "<p><strong>Édits populaires</strong></p>",
                "Rechercher de nouvelles expériences en dehors de votre lieu de naissance, conduire votre communauté vers un avenir meilleur",
                "Anathème populaire",
                "trahir votre communauté ou lui faire sciemment du tort"
            ],
            "sens"                : "Vision nocturne",
            "start_life"          : 8,
            "body_size"           : "M",
            "speed"               : 6,
            "characteristic_bonus": [
                "Force", "Sagesse", "Libre"
            ],
            "characteristic_malus": [
                "Intelligence"
            ],
            "language"            : [
                "Commun",
                "thalassique"
            ],
            "language_sup"        : [
                "l'azlante",
                "le féérique"
            ],
            "legacies"            : [
                "Athamaru à piquants",
                "Athamaru coralien",
                "Athamaru kaléïdoscopique",
                "Athamaru pleine d'espoir"
            ]
        },
        {
            "name"                : "Automate",
            "traits"              : [
                "Rare",
                "Automate",
                "Créature artificielle"
            ],
            "general_desc"        : [
                "Ces créatures artificielles intelligentes abritent de véritables âmes et représentent ce qui reste de la dernière tentative de grandeur d'un empire mourant. Les automates combinent l'ingéniosité technologique et la puissance magique, créant ainsi un être mixte totalement unique sur Golarion.",
                "L'empire du Jistka a été la première grande civilisation humaine à émerger après la chute de la Pierre étoile, apparaissant autour de la région qui deviendrait par la suite le Rahadoum et perdurant pendant sept siècles grâce à de grandes avancées dans le domaine civique et scientifique. Cependant, les dirigeants du Jistka ont souvent privilégié une utilisation agressive de la technologie et les premières avancées ont ouvert la voie à l'arrogance, aux luttes intestines et à la corruption. Les tendances expansionnistes de l'Empire du Jistka et son manque de diplomatie lui ont valu de nombreux ennemis au cours de son existence. Le plus notable de ces ennemis était l'empire de l'ancien Osirion. L'inimitié avec l'Osirion a finalement scellé le destin de l'Empire car son voisin utilisait une magie intelligente et dépravée qui s'est avérée plus que suffisante pour la légendaire armée de golems du Jistka, même lorsque les Jistkans ont commencé à faire des économies et à lier des démons à leurs golems. Dans une tentative désespérée de lutter contre la corruption interne et les pressions extérieures, une cabale de Jistkans inquiets forma le Conclave des Artificiers afin de développer de nouvelles technologies pour éviter l'effondrement de l'Empire et rendre à Jistka sa gloire passée. Le plus grand succès de ces développements fut les automates, que le Conclave considérait comme l'apogée des constructions du Jitska ou du moins comme le dernier espoir de salut du Jistka. Les créateurs du Conclave ont transplanté l'esprit, la force vitale et l'âme d'individus du Jistka dans ces créatures, créant ainsi des merveilles magiques et technologiques alimentées par l'énergie vitale des plus grands guerriers et savants que l'organisation pouvait recruter. Malheureusement, malgré tous les efforts du Conclave, l'arrivée des automates arriva trop tard pour sauver l'Empire déjà condamné. L'Empire s'est effondré, laissant les automates se débrouiller seuls.",
                "La construction exceptionnelle et avant-gardiste des automates fait que bon nombre d'entre eux restent aujourd'hui, des millénaires plus tard, éparpillés aux quatre vents. Cependant, le passage du temps a révélé l'une des plus grandes faiblesses des automates : leur psychisme de mortel. Seuls les plus déterminés ont réussi à conserver leurs souvenirs, leur identité et leur lucidité après tout ce temps. Chaque automate reste aussi unique que n'importe quelle personne vivante sur Golarion. Un automate donné possède sa propre personnalité, façonnée par d'innombrables expériences. La plupart des automates se comportent de manière recluse, préférant éviter les autres, par peur de l'attachement ou de l'incompréhension. Même les automates qui sont les plus disposés à vivre au grand jour comprennent que leur nature unique fait d'eux une cible de choix pour les chasseurs, les érudits ou pire encore. Rare est l'automate qui vit sans être régulièrement confronté à la méfiance ou à l'inquiétude.",
                "Vous : <ul><li>Avez vécu pendant plusieurs siècles et traversé de nombreux événements importants.</li><li>hésitez à faire confiance aux autres jusqu'à ce qu'ils l'aient mérité.</li><li>Vous souvenez peu de votre vie avant de devenir un automate.</li></ul>",
                "Les autres : <ul><li>vous prennent pour une créature artificielle dépourvue d'âme lorsqu'ils vous rencontrent pour la première fois.</li><li>Supposent que vous disposez de connaissances secrètes sur la magie et la technologie.</li><li>Vous regardent avec crainte.</li></ul>"
            ],
            "physical_desc"       : [
                "Les automates partagent une construction commune - un mélange de métaux et de pierres traité par la magie. Cette conception permet aux automates de résister aux rigueurs du combat direct et les rend particulièrement robustes. Leurs corps lourds peuvent se déplacer aussi rapidement que les autres combattants, ce qui fait des automates des ennemis intimidants. La conception d'un automate varie en fonction des besoins nécessaires à son rôle. La plupart des automates possèdent une forme humanoïde de base, bien que certains aient des formes qui ressemblent davantage à celles d'animaux. La majorité des automates n'ont qu'un seul œil qui brille d'une faible lumière magique. Chacun d'entre eux contient également un puissant artefact qui abrite son âme individuelle et utilise une combinaison d'énergie vitale et planaire pour fonctionner. Ces noyaux d'automates sont des merveilles d'ingénierie magique dont la méthode de création s'est perdue dans la nuit des temps.",
                "En tant que créatures artificielles, les automates n'ont généralement pas besoin de respirer, de manger ou de dormir. Cependant, le corps d'un automate doit laisser échapper la magie de manière imperceptible à un rythme constant. Ce processus d'évacuation nécessite de l'air respirable afin d'éviter une accumulation de gaz d'échappement susceptible d'obstruer les systèmes de l'automate avec parfois un effet fatal. Ainsi, les automates peuvent toujours suffoquer comme les créatures vivantes. Bien qu'ils ne dorment pas, les automates ont besoin d'une période de recalibrage et de récupération magique qui stabilise les énergies au sein de leur noyau. Sans ce processus, le noyau d'un automate est incapable d'alimenter pleinement l'automate et il entre dans un état d'inefficacité (similaire à celui d'un humanoïde qui n'aurait pas bénéficié de 8 heures de sommeil).",
                "Les automates ne vieillissent pas et la conception de leurs noyaux leur confère une source d'énergie apparemment inépuisable. De nombreux automates qui existent aujourd'hui ont des milliers d'années, leur corps est aussi efficace que le jour de leur création, même si leur esprit a pu se détériorer sous la pression des années. Les automates perdus au fil du temps ont généralement connu une fin violente. Le corps d'un automate est tout aussi vulnérable à la destruction que n'importe quelle autre créature artficielle, bien que la destruction d'un noyau d'automate soit plus difficile. Ainsi, l'âme d'un automate peut rester piégée dans son noyau pendant des années après la destruction de son corps. C'était l'intention de ses créateurs originaux qui espéraient fournir une immortalité fonctionnelle. Cependant, en réalité, la destruction du corps entraîne plus souvent un dysfonctionnement, nécessitant une intervention magique telle que la magie de résurrection pour restaurer complètement l'automate. En cas de destruction du noyau ou si son dysfonctionnement est suffisamment grave pour qu'il ne puisse plus contenir l'âme, le noyau libère l'esprit dans la Rivière des âmes.",
                "Dans certains cas, un automate peut apprendre à influencer consciemment ou inconsciemment son noyau. Ces automates finissent par apprendre à libérer leur âme de leur noyau, ce qui leur permet de le quitter lorsqu'ils estiment avoir eu une vie satisfaisante. Cet acte laisse l'automate à l'état de créature artificielle dénuée d'intelligence, généralement encore actif mais incapable de faire autre chose que d'errer sans but et d'accomplir des actes d'autodéfense occasionnels.",
                "Noyau automate Votre corps contient un noyau d'automate imprégné de quintessence planaire qui vous donne le pouvoir d'effectuer diverses tâches et abrite votre âme et votre énergie vitale. Cette énergie vitale circule en vous comme le sang des humanoïdes. Par conséquent, vous êtes une créature vivante. Vous n'avez pas les immunités typiques des créatures artificielles. Vous pouvez être affecté par des effets qui ciblent une créature vivante et vous pouvez récupérer des Points de vie normalement grâce à l'énergie positive. De plus, vous n'êtes pas détruit lorsque vous êtes réduit à 0 Point de vie. Au lieu de cela, votre énergie vitale tente de vous maintenir actif, même dans des conditions difficiles ; vous êtes mis hors d'usage et commencez à mourir lorsque vous êtes réduit à 0 Point de vie.",
                "Corps artificiel Vos besoins physiologiques sont différents de ceux des créatures vivantes. Vous n'avez pas besoin de manger ou de boire. Vous n'avez pas besoin de dormir mais vous avez quand même besoin d'une période de repos quotidien. Durant cette période de repos, vous devez entrer dans un état de veille pour récupérer pendant 2 heures, ce qui est similaire au sommeil sauf que vous restez conscient de votre environnement et que vous ne subissez aucune pénalité du fait d'être Inconscient. Un peu comme avec le sommeil, si vous restez trop longtemps sans entrer dans votre état de veille, vous devenez Fatigué et ne pouvez récupérer jusqu'à ce que vous entriez en veille pendant 2 heures."
            ],
            "society_desc"        : [
                "En raison des destins disparates des automates, beaucoup d'entre eux mènent une vie solitaire. Il existe quelques cas d'automates conçus à l'origine pour travailler ensemble, comme les groupes de guerriers, qui restent en équipe et vivent ensemble dans des cachettes ou voyagent ensemble comme des vagabonds. Ces groupes sont cependant rares et les colonies d'automates le sont encore davantage. Les seules poches d'automates qui ressemblent à des colonies se cachent généralement dans les ruines du Jistka. Ces groupes peuvent contenir des dizaines d'automates mais toute tentative pour les contacter ou leur rendre visite est généralement infructueuse. Ces rassemblements sont particulièrement secrets et les automates qui y résident protègent leurs maisons à tout prix.",
                "Les automates sont beaucoup plus susceptibles de rencontrer d'autres ascendances. Selon la personnalité de l'automate, cette rencontre peut prendre plusieurs formes, allant de l'extrême discrétion à la visite ouverte. L'apparence unique d'un automate le fait remarquer, quel que soit l'endroit où il se trouve mais la plupart des gens le regardent avec crainte ou curiosité plutôt qu'avec peur. Les créatures artificielles magiques ne sont pas un concept étranger à Golarion mais beaucoup d'entre elles sont dénuées d'intelligence. Une fois passé le choc initial d'une créature artificielle pensante, il n'est pas difficile pour la plupart des gens de comprendre comment se comporter avec un automate. Cependant, les automates ont plus de chances de trouver un semblant de vie quotidienne dans les grandes villes comme Absalom, Azir ou Quantium. Où qu'il aille, un automate doit rester à l'affût de ceux qui tenteraient de s'emparer de son corps pour l'étudier ou accéder à son noyau."
            ],
            "start_life"          : 8,
            "speed"               : 7,
            "characteristic_bonus": [
                "Force",
                "Libre"
            ],
            "language"            : [
                "Commun",
                "Utopien"
            ],
            "language_sup"        : [
                "chthonien",
                "empyréen",
                "elfique,infernal",
                "nanique",
                "pierreux",
                "pyrique",
                "sussuran",
                "thalassique À la discrétion du MJ"
            ],
            "sens"                : "Vision nocturne",
            "legacies"            : [
                "Automate chasseur",
                "Automate combattant",
                "Automate tireur de précision",
                "Mage automate"
            ]
        },
        {
            "name"                : "Centaure",
            "traits"              : [
                "Peu courant",
                "Bête",
                "Centaure",
                "Humanoïde"
            ],
            "general_desc"        : [
                "Les centaures sont de fiers nomades qui parcourent leurs territoires ancestraux de long en large, protégeant leurs terres de l'exploitation et de l'intrusion. Ce sont des survivalistes qui tissent des liens étroits avec leur famille et leur communauté et qui restent fermes face au danger. Nombre d'entre eux sont des chasseurs, des pisteurs et des guerriers habiles qui se battent avec un arc, de l'acier et leurs sabots. Courageux et têtus, ils sont prêts à défier les ennemis les plus féroces et les forces les plus importantes pour protéger leurs foyers, leurs proches et les terres de leur domaine.",
                "En tant que chasseurs-cueilleurs, les centaures dépendent de la générosité du monde naturel pour leur subsistance. Dès leur plus jeune âge, ils apprennent à entretenir et à respecter les écosystèmes qui les entourent afin que la terre reste saine et généreuse tout au long de leur vie et qu'elle soit préservée pour les générations futures. Les centaures savent qu'une terre exploitée ou spoliée est une terre impropre à la survie, tout comme un troupeau trop chassé meurt. Dans un passé lointain, cette négligence et cette avidité ont entraîné la malnutrition, la famine et la perte de territoires et la plupart des centaures veillent à ne pas répéter les erreurs de leurs lointains aïeux. Les centaures préfèrent donc s'adapter à leur environnement plutôt que d'en abuser pour leur propre confort. Ils sont les gardiens de la nature et leurs croyances les amènent à s'opposer aux citadins négligents et aux expansionnistes au sujet de pratiques d'exploitation dangereuses, comme la chasse excessive, la déforestation, la pollution et le développement des villes.",
                "Les centaures sont plus heureux lorsqu'ils sont en déplacement et beaucoup deviennent agités ou tombent malades s'ils restent trop longtemps enfermés ou sédentaires. Ils aiment les courses et l'athlétisme et sont très compétitifs, s'efforçant toujours d'améliorer leurs performances précédentes et de surpasser leurs semblables. C'est pourquoi les centaures sont souvent jugés par les étrangers comme des êtres contestataires et rustres. La plupart des centaures apprécient les compétitions physiques, en particulier les sports d'équipe et décernent des récompenses modestes mais précieuses aux vainqueurs, même si, pour beaucoup d'entre eux, le droit de se vanter est le prix le plus élevé. Tous les centaures ne sont pas des athlètes, mais la plupart d'entre eux aiment l'effort et s'adonnent naturellement à des activités qui font battre leur sang et leur cœur.",
                "Si vous voulez jouer un personnage qui court libre et fier,se préoccupant toujours de ses compagnons, vous devriez jouer un centaure.",
                "Vous pourriez... : <ul>    <li>Vous donner beaucoup de mal pour protéger votre foyer et les personnes que vous aimez.</li>    <li>Apprécier la compétition, particulièrement pour les sports organisés et les tests de force ou d'endurance.</li>    <li>Respecter et donner de la valeur au monde naturel.</li></ul>",
                "Les autres : <ul>    <li>Partent du principe que vous êtes un archer expert ou un féroce combattant.</li>    <li>Pensent que vous comprenez les chevaux.</li>    <li>Vous trouvent agressifs et trop compétitif.</li></ul>"
            ],
            "physical_desc"       : [
                "Les centaures ont la forme d'humains musclés avec un corps de cheval à partir de la taille. Ils sont robustes et stables, capables de porter de lourds fardeaux et des charges encombrantes pendant de longues périodes. La taille, les cheveux et la coloration des centaures varient considérablement. La plupart d'entre eux mesurent en moyenne 2,10 m et pèsent plus de 1 tonne. Si leur coloration est souvent héréditaire, les marques du pelage d'un centaure sont imprévisibles et beaucoup sont fiers des motifs, des emplacements et des changements chromatiques distincts de leur pelage. Ces marques sont présentes à la naissance et ne changent pas au cours de la vie du centaure. Autrefois, les marques d'un centaure étaient utilisées pour prédire son avenir. Bien que cette tradition soit tombée en désuétude depuis la fin des prophéties, certaines marques particulièrement rares sont encore aujourd'hui considérées comme chanceuses ou de mauvais augure.",
                "Robuste Vous augmentez les limites maximum d'Encombrement et de surcharge de 2."
            ],
            "society_desc"        : [
                "Les centaures sont originaires du continent du Casmaron et la plupart y résident encore aujourd'hui, en particulier à Iblydos et en Iobarie. À Iblydos, de nombreux centaures sont des cultivateurs qui s'occupent avec soin et de manière durable des terres agricoles et des jardins, en particulier des fleurs sauvages, des olives, des figues et des raisins, à partir desquels ils vinifient un vin local apprécié (et puissant). Grâce aux contes populaires concernant les centaures quasi-mythiques Elthavus et Ventriadi, célèbres mentors de nombreux anciens héros-dieux iblydiens, on croit traditionnellement que les centaures excellent dans la formation des héros. Les centaures n'ont rien fait pour contredire cette idée. La plupart des centaures apprécient le mentorat et les chefs militaires, guérisseurs, astronomes, ingénieurs et autres experts vieillissants sont souvent ravis de transmettre leur savoir aux jeunes générations. Grâce à leur nature compétitive, certains enseignants centaures rivalisent entre eux pour former les étudiants, les soldats et les intellectuels les plus prometteurs.",
                "Au fil du temps, les centaures se sont répandus dans une grande partie de la mer Intérieure via la Iobarie, notamment sur l'île de Kortos, où les rancunes envers les citoyens d'Absalom durent depuis longtemps. Là, les centaures mènent une guérilla contre les intrusions constantes sur leur territoire et se heurtent aux harpies et aux minotaures des environs. Ils vivent dans les plaines et les forêts, dans les alpages et dans toute la forêt d'Immenwood.",
                "Les centaures entretiennent de vastes territoires qu'ils parcourent selon un mode de vie nomade, vivant comme des communautés mobiles de chasseurs-cueilleurs. Ces zones sont bien définies et ont été préservées au fil des générations. Au cœur de chaque territoire se trouve un lieu central important. Il s'agit souvent d'un site religieux, d'un lieu de rencontre ou d'un camp pour les centaures malades ou âgés qui ne peuvent plus voyager avec le reste de leur bande. Parfois, ce camp est un établissement permanent, construit en bois, en pierre calcaire, en briques d'argile ou en marbre, selon la région et l'environnement et entouré de champs cultivés soigneusement entretenus ou de troupeaux de poulets, de chèvres ou de moutons. Les centaures ont une tendresse passagère pour les animaux, mais ils possèdent rarement des animaux domestiques et trouvent les chevaux rébarbatifs.",
                "Une bande de centaures est une communauté soudée, dirigée par un membre respecté du groupe qui s'est montré capable, sage et calme malgré la pression. En général, ces chefs sont d'âge moyen ou plus âgés car les centaures considèrent que l'expérience de la vie est une qualité nécessaire chez un chef. Il est rare qu'un centaure ou une bande choisisse de devenir sédentaire ou de s'intégrer à une nation plus importante. Il s'agit souvent de petites bandes dont les territoires ont été détruits ou volés, d'émissaires représentant leurs bandes, d'aventuriers, de solitaires, de parias ou même de bandes qui ne peuvent tout simplement pas survivre face à un ennemi militaire supérieur. Quoi qu'il en soit, ce choix n'est pas fait à la légère car la plupart des centaures se sentent à l'étroit dans les environnements urbains, en particulier dans les colonies construites pour des gens plus petits qu'eux.",
                "Lorsqu'elles sont baties, les constructions des centaures sont vastes et aérées afin de permettre une grande liberté de mouvement. Leurs bâtiments sont communautaires, toujours au-dessus du sol et ouverts aux éléments par endroits - de larges portes maintenues ouvertes ou des trappes dans le toit et les murs pour laisser pénétrer la lumière. La plupart sont construites en bois, en chaume et en briques de terre, tandis qu'à Iblydos, les matériaux plus durs comme le marbre et la pierre sont plus fréquents. En Iobarie, ils réaménagent souvent de vieilles ruines cyclopéennes qui offrent beaucoup d'espace.",
                "En Iobarie, l'herboristerie, la médecine et la purification magique sont des compétences plus communément appréciées, en raison des pestes et des maladies incessantes qui sévissent dans la région. Une bande de centaures n'ose pas voyager sans quelques guérisseurs compétents et même les groupes de chasseurs et d'éclaireurs ne se séparent rarement pour longtemps. Les guérisseurs et les herboristes centaures mettent souvent de côté leurs différences et leurs affiliations pour échanger leurs connaissances lors de réunions annuelles connues sous le nom d'Apaisements. Les représentants des bandes de tout le pays y échangent des découvertes médicales et d'autres connaissances. Le plus grand de ces Apaisements a lieu deux fois par an à Vurnirn, la plus grande communauté de centaures d'Iobarie.",
                "À Kaer Maga, au Chéliax, au Molthune et en Oprak, les centaures se sont assimilés au sein des plus grandes nations, vivant parfois comme des citoyens et des marchands mais plus souvent servant comme marchands et mercenaires. Au Garund, les centaures parcourent les plaines et les savanes. Ils s'entendent bien avec d'autres cultures soucieuses de la nature, s'associant aux hommes-félins, aux tripkees, aux elfes et aux orcs pour combattre les démons près du lac Ocota, les morts-vivants près des frontières du Geb et de Mzali et les autres dangereuses menaces. Les centaures restent des ennemis déclarés du Taldor et de l'Andoran, se souvenant trop des anciennes guerres avec l'empire expansionniste du Taldor qui les a repoussés dans la forêt de Verduran. Nombreux sont ceux qui, dans ces régions, rêvent de reprendre leurs territoires ancestraux au Taldor et au sein de l'Andoran, une dangereuse chimère qui entraînera certainement la mort d'innombrables centaures.",
                "Les centaures croient en la possibilité de s'amender et s'appuient souvent sur la pression de la communauté pour décourager les comportements nuisibles. Les impénitents et les plus grands transgresseurs risquent l'exil au-delà des frontières de la bande. Les centaures évitent de mettre fin à la vie des leurs, sauf en temps de guerre et en plein combat. Si certaines bandes de centaures, au service de démons et d'autres dieux immondes, peuvent attaquer d'autres centaures, même elles préfèrent harceler d'autres ennemis.",
                "Les centaures considèrent que les selles et les brides sont à la fois contraignantes et honteusement insultantes, comme s'ils étaient enchaînés et mis en cage. Ils méprisent le fait d'être montés et refusent de servir de monture, sauf dans les circonstances les plus graves ou en cas d'urgence ou uniquement pour leurs compagnons les plus fidèles.",
                "Les centaures portent un nom unique et obtiennent parfois une appellation à la suite de leurs actes, du fait de leur apparence ou de leurs traits de caractère, comme Sabot tonitruant ou Coureur de vent. En dehors de leurs frontières territoriales, les centaures utilisent le nom de leur groupe comme identifiant supplémentaire. Les centaures qui s'installent dans d'autres nations adoptent le nom de leur groupe comme nom de famille ou se créent un nom de famille unique, fondant ainsi une lignée qui se transmet aux générations futures.",
                "<h3>Exemples de noms</h3>",
                "Aecora, Déméléon, Ertris, Hycanthe, Irdan, Jalvayne, Karala, Malion, Oridius, Tolron, Vorag"
            ],
            "believe_desc"        : [
                "Les croyances d'un centaure dépendent souvent de l'endroit et de la manière dont il a été levé. Nombre de centaures suivent la Foi verte ou vénèrent des divinités qui partagent leur respect de la nature, tels que Cernunnos, Érastil, ou Gozreh. D'autres sentent un lien étroit avec Desna, déesse du Voyage. Les guérisseurs et herboristes préfèrent Immonhiel ou Pharasma. Dans les zones urbaines, Kurgess et Gorum leur sont préférés, en fonction du tempérament et de la profession du centaure.",
                "Les centaures possèdent deux figures religieuses prédominantes : Les orateurs de la nature et les Orateurs de la foi. Les orateurs de la nature ne font qu'un avec la nature, fidèles de la Foi verte, hrboristes exceptionnels et autrement instruits le fonctionnement du monde naturel. Les orateurs de la foi sont des fidèles pieux des dieux, des démons, des célestes et autres êtres. Les deux se voient accorder un respect égal, étant considérés comme les deux faces d'une même pièce. À travers leurs Orateurs, les centaures interagissent avec le monde situé au-delà de ce qu'ils peuvent voir et percevoir et conduisent les cérémonies, les célébrations et les prières. Les célébrations sont habituellement divisées en deux catégories : les débuts et les fins, avec les débuts que sont les mariages, les naissances et le printemps célébré à l'aube, et les fins que sont les récoltes, les funérailles et les séparations célébrées au coucher du soleil. Les rites mortuaires varient selon les régions et les cultures, mais les bandes sédentaires et celles qui cultivent des champs, des jardins ou des récoltes brûlent souvent leurs morts sur des bûchers, libérant ainsi leurs esprits de leurs corps matériels, puis utilisent les cendres qui en résultent pour fertiliser les champs ou les jardins afin que les morts puissent continuer à servir leur communauté. Dans les régions au sol rocailleux ou au climat glacial, les centaures enterrent leurs morts sous des cairns et des monticules de pierre.",
                "<p><strong>Édits populaires</strong></p>",
                "assurer la transmission des connaissances, vivre en harmonie avec le monde naturel, jouer à la régulière dans une compétition honnête",
                "Anathème populaire",
                "ne pas pouvoir circuler, contribuer à la destruction gratuite d'un paysage naturel"
            ],
            "characteristic_bonus": [
                "Force",
                "Sagesse",
                "Libre"
            ],
            "characteristic_malus": [
                "Charisme"
            ],
            "start_life"          : 8,
            "body_size"           : "TG",
            "speed"               : 9,
            "language"            : [
                "Commun",
                "Féerique"
            ],
            "language_sup"        : [
                "cyclope",
                "nanique",
                "elfique",
                "gnomien",
                "halfelin",
                "jotun"
            ],
            "sens"                : "Vision dans le noir",
            "legacies"            : [
                "Centaure allure de poney",
                "Centaure aspirant orateur",
                "Centaure au coeur robuste",
                "Centaure fersabot",
                "Centaure file au vent",
                "Centaure moucheté"
            ]
        },
        {
            "name"                : "Elfe",
            "traits"              : [
                "Elfe",
                "Humanoïde"
            ],
            "general_desc"        : [
                "En tant que membres d'un peuple ancien, les elfes ont connu de grands changements et ont la perspective qui ne peut provenir que de l'observation d'un arc de l'histoire. Après avoir quitté le monde durant les temps anciens, ils sont revenus sur des terres changées et ils luttent toujours pour récupérer leurs terres ancestrales. Les elfes attachent de l'importance à la gentillesse, à l'intelligence et à la beauté et nombre d'entre eux s'efforce en permanence d'améliorer leur comportement, leur apparence et leur culture. Leurs études vont jusqu'à un niveau de détail que la plupart des peuples de courte durée de vie trouvent excessif ou inefficace. Les elfes sont souvent des personnes plutôt discrètes, plongées dans les secrets de leurs bosquets et de leurs groupes de parenté. Ils sont lents à nouer des amitiés en dehors de leur parenté, car les elfes qui passent leur vie parmi des peuples à la longévité réduite deviennent souvent moroses après avoir vu des générations de compagnons vieillir et mourir. Ces elfes sont connus sous le nom de Délaissés parmi leurs congénères.",
                "Si vous voulez incarner un personnage magique, mystique et mystérieux, vous devriez jouer un elfe.",
                "Vous : <ul><li>Faites preuve de prudence dans vos relations avec les individus à l'espérance de vie plus courte.</li><li>Développez des centres d'intérêt spécialisés ou obscurs, dans l'objectif de les maîtriser.</li></ul>",
                "Les autres : <ul><li>Se concentrent généralement sur votre apparence et admirent votre grâce ou vous traitent comme si vous étiez physiquement fragile.</li><li>Craignent que vous les méprisiez dans votre for intérieur ou ont le sentiment que vous êtes condescendant ou réservé.</li></ul>"
            ],
            "physical_desc"       : [
                "Bien que généralement plus grands que les humains, les elfes possèdent une grâce fragile accentuée par leurs traits fins et leurs oreilles pointues. Leurs yeux sont en amande, leurs pupilles larges et vivement colorées occupent toute la partie visible de leur oeil. Ces pupilles, qui leur donnent un aspect étrange, leur confèrent une vision précise, même dans de mauvaises conditions lumineuses.",
                "Les elfes s'adaptent graduellement à leur environnement et à leurs compagnons et adoptent souvent des traits physiques qui reflètent leur environnement. Un elfe qui a habité dans des forêts primitives depuis des siècles pourrait présenter des cheveux verdoyants et des doigts noueux, tandis que ceux qui ont vécu dans un désert pourraient avoir des pupilles et une peau dorées. Les elfes atteignent l'âge adulte à environ 20 ans, bien qu'ils ne soient pas considérés émotionnellement mûrs par leurs congénères avant de se rapprocher de leur premier siècle. Un elfe ordinaire peut vivre environ 600 ans."
            ],
            "society_desc"        : [
                "La patience atavique et la curiosité intellectuelle font des elfes d'excellents sages, philosophes et magiciens et leurs sociétés s'articulent autour de leur capacité intrinsèque d'émerveillement et de leur soif de connaissance.",
                "Les elfes ont des idéaux profondément enfouis d'individualisme, ce qui permet à chaque elfe d'explorer de multiples occupations avant de se vouer à un but singulier ou une passion que leur convient le mieux. Les elfes sont également réputés pour leurs querelles contre leurs rivaux, appelées des 'ilduliel', mais ces relations antagonistes peuvent parfois se trannsformer en amitiés au fil du temps. Un elfe garde secret son nom au sein de sa famille, ne fournissant que son surnom aux personnes qu'il rencontre. Ce surnom peut changer au fil du temps, suite à des événements ayant marqué sa vie ou sur un simple caprice. Un même elfe pourrait avoir été connu sous de nombreux noms par ses associés d'âges et de régions différents. Les noms elfiques sont formés d'un ensemble de syllabes qui sont censées couler de manière lyrique... au moins en elfique.",
                "<h3>Exemples de noms</h3>",
                "Aerel, Amrunelara, Caladrel, Dardlara, Faunra, Heldalel, Jathal, Lanliss, Oparal, Seldlon, Soumral, Talathel, Tessara, Variel, Yalandlara, Zordlon"
            ],
            "believe_desc"        : [
                "Les elfes sont souvent émotifs et capricieux mais ils défendent de grands idéaux qui leur tiennent à cœur. Ils préfèrent les divinités qui partagent leur amour pour tout ce qui est mystique et artistique. Desna et Shélyn sont leurs divinités favorites, la première pour son sens de l'émerveillement et la seconde pour son appréciation de l'art. Calistria est la plus célèbre des divinités elfiques, car elle représente de nombreux idéaux elfiques poussés à l'extrême.",
                "<h4><strong>Édits populaires</strong></h4>",
                "trouver la beauté dans la nature et l'art, explorer des choses que d'autres garderaient cachées, démontrer sa supériorité par rapport à son rival",
                "<h4><strong>Anathèmes populaires</strong></h4>",
                "abandonner sa voie, forcer une autre créature à faire quelque chose"
            ],
            "start_life"          : 6,
            "body_size"           : "M",
            "speed"               : 9,
            "characteristic_bonus": [
                "Dextérité",
                "Intelligence",
                "Libre"
            ],
            "characteristic_malus": [
                "Constitution"
            ],
            "language"            : [
                "Commun",
                "Elfique"
            ],
            "language_sup"        : [
                "draconique",
                "empyréen",
                "gnomien",
                "gobelin",
                "kholo",
                "orquien",
                "fée"
            ],
            "sens"                : "Vision nocturne",
            "legacies"            : [
                "Elfe ancien",
                "Elfe arctique",
                "Elfe des bois",
                "Elfe des cavernes",
                "Elfe des murmures",
                "Elfe du désert",
                "Elfe visionnaire"
            ]
        },
        {
            "name"                : "Gnome",
            "traits"              : [
                "Gnome",
                "Humanoïde"
            ],
            "general_desc"        : [
                "Il y a bien longtemps, les premiers ancêtres des gnomes ont émigré du Premier Monde, le royaume des fées. Bien que l'on ne sache pas exactement pourquoi les premiers gnomes ont erré jusqu'à Golarion, ce lignage se manifeste chez les gnomes modernes par des raisonnements bizarres, de l'excentricité, des tendances obsessionnelles et ce que certains considèrent comme de la naïveté. Toujours avides de nouvelles expériences, les gnomes ne cessent d'errer, tant mentalement que physiquement, pour tenter de conjurer une terrible maladie qui menace l'ensemble de leur peuple. Cette maladie, connue sous le nom d'Affadissement, frappe les gnomes qui ne rêvent pas, n'innovent pas et ne prennent pas part à de nouvelles expériences. L'Affadissement draine lentement les gnomes de leurs couleurs, au sens propre du terme, et plonge ceux qui en sont atteints dans des états de profonde dépression qui finissent par leur coûter la vie. Très peu de gnomes survivent à ce fléau, devenant des survivants profondément moroses et sages, connus sous le nom de Fades.",
                "Si vous voulez incarner un personnage à l'enthousiasme débordant et doté d'une perspective étrange et féerique sur le monde et la vie, vous devriez jouer un gnome.",
                "Vous : <ul><li>Adorez apprendre et sautez d'un centre d'intérêt à l'autre sans le moindre avertissement.</li><li>Parlez, pensez et vous déplacez rapidement et vous faites preuve de peu de patience pour ceux qui ne suivent pas le rythme.</li></ul>",
                "Les autres : <ul><li>Apprécient votre enthousiasme et l'énergie dont vous faites preuve face aux nouvelles situations.</li><li>Luttent pour comprendre vos motivations ou s'adapter à vos brusques changements de direction.</li></ul>"
            ],
            "physical_desc"       : [
                "Les gnomes font généralement à peine plus de 90 cm de hauteur et ne pèsent pas plus qu'un enfant humain. Ils présentent une large variété de couleur de peau, de cheveux et d'yeux. Pour les gnomes qui n'ont pas subi l'Affadissement, pratiquement toute couleur de cheveux ou d'yeux autre que blanc est possible, avec le plus fréquemment des couleurs vives alors que leur carnation présente généralement un spectre plus réduit et tend vers les tons de terre avec des nuances de rose, bien qu'occasionnellement verte, noire ou bleu pâle.",
                "Les gnomes atteignent leur maturité physique à l'âge de 18 ans, bien que nombre de gnomes continuent généralement de faire preuve d'une curiosité enfantine envers le monde à l'âge adulte. Un gnome peut théoriquement vivre indéfiniment s'il parvient à échapper à l'Affadissement mais en pratique, il est rare qu'ils vivent plus de 400 ans."
            ],
            "society_desc"        : [
                "Bien que la plupart des gnomes adoptent certaines des pratiques culturelles de la région dans laquelle ils vivent, ils ont tendance à choisir et à adapter leurs communautés à leur propre logique de fée. Cela conduit souvent à ce que les communautés gnomes majoritaires finissent par ne plus compter que des gnomes, car d'autres personnes, déconcertées par les décisions politiques gnomes, choisissent d'aller vivre ailleurs. Les gnomes ont peu de culture qu'ils considèrent comme étant la leur. Il existe exceptionnellement peu de royaumes ou de nations gnomes à la surface de Golarion et la plupart des gnomes ne sauraient pas quoi faire d'un tel état s'ils en avaient un.",
                "Par nécessité, peu de gnomes se marient pour la vie, permettant plutôt à leurs relations de suivre leur cours avant de passer à autre chose et de se séparer à l'amiable, pour mieux repousser l'Affadissement grâce à de nouvelles expériences. Bien que les familles gnomes aient tendance à être petites, de nombreuses communautés gnomes élèvent leurs enfants en commun, avec des frontières familiales floues. Les noms gnomes peuvent être complexes et polysyllabiques. Les gnomes se soucient rarement de la facilité de prononciation de leur nom et utilisent souvent des surnoms plus courts. Chez les gnomes, plus le nom est court, plus il est considéré comme féminin.",
                "<h3>Exemples de noms</h3>",
                "Abroshtor, Bastargre, Besh, Fijit, Halungalom, Krolmnite, Neji, Majet, Paï, Poshment, Queck, Trig, Zarzuket, Zatqualmie"
            ],
            "believe_desc"        : [
                "Bien que les gnomes soient des farceurs impulsifs aux motivations impénétrables et aux méthodes déroutantes, nombre d'entre eux tentent au moins de rendre le monde meilleur. Ils sont sujets à des crises d'émotions fortes et n'hésitent pas à aider ceux qu'ils pensent méritants. Les gnomes vénèrent le plus souvent des divinités qui valorisent l'individualité et la nature, comme Cayden Cailéan, Desna, Gozreh et Shélyn.",
                "<h4><strong>Édits populaires</strong></h4>",
                "Chercher de nouvelles expériences, suivre votre inspiration, passer d'une obsession à une autre",
                "Anathème populaire",
                "Ralentir pour s'expliquer, priver quelqu'un de toute stimulation"
            ],
            "start_life"          : 8,
            "body_size"           : "P",
            "speed"               : 7,
            "characteristic_bonus": [
                "Constitution",
                "Charisme",
                "Libre"
            ],
            "characteristic_malus": [
                "Force"
            ],
            "language"            : [
                "Commun",
                "Gnomien",
                "fée"
            ],
            "language_sup"        : [
                "Draconique",
                "Nain",
                "Elfique",
                "Gobelin",
                "Jotun",
                "Orquien,"
            ],
            "sens"                : "Vision nocturne",
            "legacies"            : [
                "Gnome béni des fées",
                "Gnome caméléon",
                "Gnome kijimuna",
                "Gnome ombral",
                "Gnome sensitif",
                "Gnome source",
                "Gnome vivace"
            ]
        },
        {
            "name"                : "Gobelin",
            "traits"              : [
                "Gobelin",
                "Humanoïde"
            ],
            "general_desc"        : [
                "Les histoires alambiquées auxquelles les autres s'accrochent n'intéressent pas les gobelins. Ce petit peuple vit dans l'instant présent et préfère les histoires à dormir debout aux récits factuels. Les vertus des gobelins sont d'être dans le présent, la créativité et l'honnêteté. Ils s'efforcent de mener une vie épanouie, plutôt que de s'inquiéter de la manière dont se terminera leur voyage. Ils racontent des histoires et ne s'attardent pas sur les faits. Être petit, mais rêver grand. De nombreux gobelins aiment les plaisirs simples comme les chansons, le feu et la nourriture, et détestent la lecture, les chiens et les chevaux. D'autres gobelins s'adonnent à des activités plus complexes, comme bricoler des objets de récupération ou concocter des en-cas et des explosifs à partir de n'importe quoi.",
                "Si vous voulez incarner un personnage excentrique, enthousiaste et qui aime s'amuser, vous devriez jouer un gobelin.",
                "Vous : <ul><li>Vous efforcez de prouver aux autres, et peut-être à vous-même, que vous avez votre place parmi les autres peuples civilisés.</li><li>Savez alléger la charge mentale que les autres ressentent (et vous amuser) avec vos farces et vos bouffonneries.</li></ul>",
                "Les autres : <ul><li>Font attention à ce que vous ne mettiez pas accidentellement (ou intentionnellement) le feu à trop de choses.</li><li>Se demandent comment vous avez pu survivre étant donné l'alimentation, l'imprudence et la passion pour le feu qui sont caractéristiques de votre ascendance.</li></ul>"
            ],
            "physical_desc"       : [
                "Les gobelins sont des humanoïdes courts sur pattes, au corps large, aux membres maigres et à la tête surdimensionnée dotée de grandes oreilles et de petits yeux rouges en forme de bille. Leur couleur varie du vert, au gris en passant par le bleu, et ils arborent souvent des cicatrices, des furoncles et de plaques rouges. Les gobelins mesurent environ 90 cm. La plupart est chauve et n'a peu ou pas de poils. Leurs dents en bataille tombent et repoussent régulièrement et leur métabolisme rapide les pousse à manger constamment et à faire de fréquentes siestes. Les mutations sont également plus courantes parmi les gobelins que chez les autres peuples et ils considèrent généralement qu'une mutation importante est un signe de pouvoir ou de bonne fortune.",
                "Les gobelins atteignent l'adolescence à 3 ans et l'âge adulte 4 ou 5 ans plus tard. Ils peuvent vivre jusqu'à 50 ans ou plus, mais sans personne pour les protéger de leurs congénères et d'eux-mêmes, ils dépassent rarement les 20 ans."
            ],
            "society_desc"        : [
                "Les gobelins ont tendance à se regrouper autour de chefs forts, formant de petites tribus. Ces tribus comptent rarement plus d'une centaine d'individus, mais plus une tribu est nombreuse, plus le chef doit faire dépenser de l'énergie à maintenir l'ordre, une tâche notoirement difficile. Le jeu et la créativité comptent plus pour les gobelins que la productivité ou l'étude et leurs campements débordent de chants et de rires.",
                "Les gobelins forment des liens étroits avec leurs alliés et protègent férocement leurs compagnons qui les ont déjà protégés ou leur ont offert une oreille attentive. Pour leur propre sécurité, les gobelins partent généralement du principe que les membres des grands peuples, qu'ils surnomment les « grandes guibolles », vont mal les traiter. Ils ont du mal à faire confiance aux grandes guibolles, d'autant que ce n'est que dans un passé récent que des relations de confiance entre ces peuples sont devenues envisageables. Les gobelins choisissent des noms simples. Un bon nom doit pouvoir se prononcer facilement, être assez court pour qu'on le crie sans s'essouffler et être plaisant à prononcer. Celui qui choisit le nom décide souvent de donner un nom qui rime avec quelque chose qu'il aime, ce qui facilitera la composition des chants.",
                "Simples noms",
                "Ak, Bokker, Frum, Guzmuk, Krobby, Loohi, Mazmord, Neeka, Omgot, Ranzak, Rickle, Tup, Wakla, Yonk, Zibini"
            ],
            "believe_desc"        : [
                "Même les gobelins les mieux intentionnés ont du mal à respecter les règles, ce qui signifie que les aventuriers gobelins ne savent pas toujours s'ils sont du bon côté de la loi. La plupart d'entre eux préfèrent choisir leurs propres divinités, en optant pour des monstres puissants, des merveilles de la nature ou toute autre chose qu'ils trouvent fascinante, allant parfois jusqu'à attribuer le statut de divinité à des gobelins connus. Les gobelins qui côtoient des personnes d'autres origines peuvent cependant adopter certaines de leurs croyances et de nombreux aventuriers gobelins adoptent le culte de Cayden Cailéan.",
                "<h4>Édits populaires</h4>",
                "inventer des chants pour chaque occasion, transformer les rebuts en trésors, résoudre les problèmes par le feu",
                "Anathème populaire",
                "faire confiance à un chien ou un cheval, apprendre à écrire"
            ],
            "start_life"          : 6,
            "body_size"           : "P",
            "speed"               : 7,
            "characteristic_bonus": [
                "Dextérité",
                "Charisme",
                "Libre"
            ],
            "characteristic_malus": [
                "Sagesse"
            ],
            "language"            : [
                "Commun",
                "Gobelin"
            ],
            "language_sup"        : [
                "draconique",
                "halfelin",
                "gnomien",
                "kholo",
                "nanique",
                "orquien"
            ],
            "sens"                : "Vision dans le noir",
            "legacies"            : [
                "Gobelin à queue",
                "Gobelin arboricole",
                "Gobelin boyaud'fer",
                "Gobelin dent'rasoir",
                "Gobelin des neiges",
                "Gobelin dokkaebi",
                "Gobelin incassable",
                "Gobelin peaud'charbon"
            ]
        },
        {
            "name"                : "Halfelin",
            "traits"              : [
                "Halfelin",
                "Humanoïde"
            ],
            "general_desc"        : [
                "Ne revendiquant aucun lieu comme leur appartenant, les halfelins contrôlent peu de communautés plus importantes que des villages. Au lieu de cela, ils vivent souvent parmi les humains dans de plus grandes villes, se taillant de petites communautés aux côtés de gens plus grands. Optimistes, enjoués et animés d'un puissant désir de voyager, les halfelins compensent leur petite taille par une abondance de bravades. À la fois excitables et faciles à vivre, les halfelins constituent des opportunistes de la meilleure sorte qui soit et leurs passions les poussent plus à la joie qu'à la violence. Bien que leur curiosité les pousse parfois à l'aventure, les halfelins sont également très attachés à leur maison et à leur foyer.",
                "Si vous voulez jouer un personnage qui doit jongler entre des aspirations opposées qui le conduisent à vouloir de l'aventure et du confort, vous devriez jouer un halfelin.",
                "Vous : <ul><li>Vous entendez bien avec une grande variété de gens et vous réjouissez de rencontrer de nouveaux amis.</li><li>Trouvez difficile de ne pas satisfaire votre curiosité, même lorsque vous savez que cela va vous conduire à des ennuis.</li></ul>",
                "Les autres : <ul><li>apprécient votre capacité à toujours trouver un côté positif ou une raison de rire, quelle que soit la gravité de la situation.</li><li>Pensent que vous attirez la chance.</li></ul>"
            ],
            "physical_desc"       : [
                "Les halfelins sont de courts humanoïdes qui ressemblent vaguement à des humains en plus petit. Ils atteignent rarement plus de 90 cm de hauteur. Les proportions des halfelins sont variables et certains ressemblent ainsi à de petits humains adultes avec une tête légèrement plus grosse et d'autres ont des proportions plus proches de celles d'un enfant humain.",
                "Les halfelins préfèrent généralement marcher pieds nus plutôt que de porter des chaussures et ceux qui le fond développent ainsi d'épaisses callosités sous leurs pieds au fil du temps. Des touffes de poils épais, souvent bouclés, réchauffent le dessus de leurs larges pieds bronzés. Le teint des halfelins tend vers des tons riches et fauves comme l'ambre ou le chêne et la couleur de leurs cheveux va du blond doré clair au noir corbeau.",
                "Les halfelins atteignent leur taille adulte vers 20 ans. Un halfelin typique peut vivre environ 150 ans.",
                "Yeux perçants Votre vue perçante vous permet de distinguer des détails concernant des créatures masquées ou invisibles que d'autres pourraient ne pas remarquer. Vous obtenez un bonus de circonstances de +2 quand vous utilisez l'action Chercher pour trouver des créatures Cachées ou Non détectées dans un rayon de 9 mètres autour de vous. Quand vous prenez pour cible un adversaire Masqué ou Caché, réduisez le DD du test nu à 3 pour une cible masquée ou à 9 pour une cible cachée."
            ],
            "society_desc"        : [
                "Malgré leur nature joviale et amicale, les halfelins n'ont pas tendance à se regrouper. Ils ont peu de centres culturels dans la région de la Mer Intérieure et ont plutôt tendance à se mélanger aux sociétés du monde entier. Les halfelins se débrouillent comme ils peuvent pour gagner leur vie, beaucoup d'entre eux se contentant d'accomplir des travaux subalternes ou d'occuper des emplois de service simples. Certains halfelins rejettent la vie urbaine, préférant prendre la route et voyager d'un endroit à l'autre à la recherche de la fortune et de la célébrité. Ces halflings nomades voyagent souvent en petits groupes, partageant les difficultés et les plaisirs simples avec leurs amis proches et leur famille. Les noms des halfelins sont généralement composés de deux ou trois syllabes, avec une sonorité douce qui évite les consonnes dures. Préférant que leurs noms soient humbles, les halfelins considèrent les noms trop longs ou trop complexes comme un signe d'arrogance de la part de leur peuple. Ils comprennent toutefois que les elfes et les humains puissent avoir des noms plus longs pour satisfaire leur propre esthétique.",
                "<h3>Exemples de noms</h3>",
                "Anafa, Antal, Bellis, Boram, Etune, Filiu, Jamir, Kaleb, Linna, Marra, Miro, Rillka, Sistra, Sumak, Yamyra"
            ],
            "believe_desc"        : [
                "Les halfelins sont loyaux envers leurs amis et leur famille, mais ils n'ont pas peur de faire ce qu'il faut pour survivre. Où qu'ils aillent, les halfelins s'intègrent parfaitement à la société dans laquelle ils se trouvent, s'adaptant à la culture et aux croyances de l'ascendance prédominante autour d'eux et y ajoutant leurs touches propres aux halfelins, créant ainsi un mélange de diffusion culturelle qui enrichit les deux cultures. Les halfelins favorisent les dieux qui accordent de la chance, comme Desna, ou qui encouragent la ruse, comme Norgorber, et beaucoup apprécient le rôle de libérateur de Cayden Cailéan ainsi que toutes les religions courantes parmi les autres ascendances autour d'eux.",
                "<h4><strong>Édits populaires</strong></h4>",
                "partager de bons repas avec des amis comme des étrangers, s'opposer à ceux qui intimident et oppriment, rester dans l'ombre des plus grands",
                "Anathème populaire",
                "tenir la chance pour acquise"
            ],
            "start_life"          : 6,
            "body_size"           : "M",
            "speed"               : 7,
            "characteristic_bonus": [
                "Dextérité",
                "Sagesse",
                "Libre"
            ],
            "characteristic_malus": [
                "Force"
            ],
            "language"            : [
                "Commun",
                "Halfelin"
            ],
            "language_sup"        : [
                "Nain",
                "Elfique",
                "Gnomien",
                "Gobelin"
            ],
            "legacies"            : [
                "Halfelin des collines",
                "Halfelin du crépuscule",
                "Halfelin flegmatique",
                "Halfelin nomade",
                "Halfelin observateur",
                "Halfelin portepoisse",
                "Halfelin bois-sauvage"
            ]
        },
        {
            "name"                : "Hobgobelin",
            "traits"              : [
                "Peu courant",
                "Hobgobelin",
                "Humanoïde"
            ],
            "general_desc"        : [
                "Plus grands et plus forts que leurs cousins gobelins, les hobgobelins égalent les humains en puissance et en stature, avec de larges épaules et de longs bras puissants. Le cycle avistanais d'un conflit impensable avec les hobgobelins a récemment trouvé un terme avec l'Oprak, la nouvelle nation hobgobeline qui s'est récemment établie dans les montages entre le Nidal et le Nirmathas. Ayant dorénavant reçu l'ordre strict de n'entrer en conflit avec aucune autre nation, ces hobgobelins ont commencé à explorer précautionneusement l'Avistan dans un esprit de coopération plutôt que de conquête. De nombreux peuples, principalement ceux qui ont été les victimes des épouvantables cruautés provoqués par les hobgobelins, craignent qu'il ne s'agisse que d'une simple pause dans leur politique d'agression, le temps que l'Oprak devienne suffisamment fort pour écraser ses rivaux. D'autres espèrent que ces courageux soldats pourront devenir de puissants alliés.",
                "Vous pourriez... : <ul><li>Chercher les solutions les plus efficaces et pragmatiques à tout problème.</li><li>Favoriser une chaîne de commandement bien définie au sein du groupe avec lequel vous voyagez, en suivant les ordres même si vous n'êtes pas d'accord avec eux.</li></ul>",
                "Les autres : <ul><li>Vous considèrent comme dangereux, à cause de votre réputation et de votre apparence intimidante.</li><li>Reconnaissent votre endurance, votre dévouement et votre rigueur incroyables.</li></ul>"
            ],
            "physical_desc"       : [
                "Les hobgobelins ont des têtes larges et chauves, des yeux globuleux et une peau grise qui devient bleu acier lorsqu'elle est bronzée. Ils sont particulièrement robustes. Les hobgobelins récupèrent facilement de la maladie et sont capables de se dépenser sans compter pendant de longues périodes sans trop de difficultés.",
                "Les hobgobelins deviennent vite adultes et la plupart sont capables de marcher, parler et tenir une arme au cours de leur première année, ils deviennent adolescents entre 8 et 12 ans et sont adultes à l'âge de 14 ans. Les hobgobelins vivent en général jusqu'à 70 ans."
            ],
            "society_desc"        : [
                "Les hobgobelins structurent leur société en suivant la hiérarchie militaire. Même les groupes civils, comme les coopératives agricoles ou les maisons de marchands, sont organisés en régiments, compagnies et divisions. Les vétérans hobgobelins tiennent une place importante dans la société, devenant le plus souvent chefs ou conseillers. La magie est très rarement pratiquée et souvent tournée en ridicule, car la plupart des hobgobelins ne lui font pas confiance et préfèrent la force de leur bras armé. Leurs arts sont tournés vers tout ce qui touche au militaire. De nombreux hobgobelins considèrent les défilés exaltants et la fabrication d'armes comme les seules pratiques artistiques dignes d'intérêt.",
                "Comme pour les gobelins, les noms des hobgobelins ont tendance à être simples, quoiqu'ils possèdent des sonorités plus gutturales et percutantes. En de rares occasions, les hobgobelins modifient leur nom, en conservant la partie principale, mais en y ajoutant certains aspects, souvent suite à un violent traumatisme ou à un événement qui aura changé leur vie. Les hobgobelins n'ont pas de nom de famille, les considérant à la fois inutiles et présomptueux. Le mérite ou le démérite d'un individu doit être acquis par ses actes et non grâce à ses liens avec une lignée particulière.",
                "<h3>Exemples de noms</h3>",
                "Aze, Druknar, Ghargam, Hathkren, Imakra, Kralaeng, Mazkol, Olzu, Rezal, Sivkrag, Volmak, Zornum"
            ],
            "believe_desc"        : [
                "La plupart des hobgobelins préfèrent vivre au sein de hiérarchies bien établies. Alors que nombre d'entre eux considèrent que le sentimentalisme est une faiblesse, ceux avec des tempéraments doux ont récemment trouvé le succès dans la diplomatie et l'ouverture internationale. La foi n'a guère de place dans la société hobgobeline, car beaucoup la jugent impraticable, bien que les hobgobelins religieux puissent être acceptés à contrecœur grâce à leur magie curative.",
                "<h4>Édits populaires</h4>",
                "Dédaigner la magie arcanique, cacher les émotions sentimentales et positives, sauter sur les chances de prouver votre valeur",
                "Anathème populaire",
                "désobéir à des ordres militaires"
            ],
            "start_life"          : 8,
            "body_size"           : "M",
            "speed"               : 7,
            "characteristic_bonus": [
                "Constitution",
                "Intelligence",
                "Libre"
            ],
            "characteristic_malus": [
                "Sagesse"
            ],
            "language"            : [
                "Commun",
                "Gobelin"
            ],
            "language_sup"        : [
                "draconique",
                "kholo",
                "halfelin",
                "jotun",
                "nanique",
                "orquien"
            ],
            "sens"                : "Vision dans le noir",
            "legacies"            : [
                "Hobgobelin commandant d'avortons",
                "Hobgobelin courtespattes",
                "Hobgobelin fléau elfique",
                "Hobgobelin marchebataille",
                "Hobgobelin peaud'acier",
                "Hobgobelin sapeur",
                "Hobgobelin terrierné"
            ]
        },
        {
            "name"                : "Homme-félin (félide)",
            "traits"              : [
                "Peu courant",
                "Félide",
                "Humanoïde"
            ],
            "general_desc"        : [
                "Vagabonds curieux et grégaires, les hommes-félins combinent les caractéristiques des félins et des humanoïdes à la fois en apparence et en tempérament. Ils apprécient apprendre de nouvelles choses, collectionner de nouvelles histoires et des colifichets et s'assurer que les êtres qui leur sont chers soient en sécurité et heureux. Les hommes-félins se voient comme des gardiens choisis des lieux naturels du monde et sont souvent imprudemment braves, même en face d'une opposition surpuissante. Ils croient que les communautés fortes, les expériences élargies et l'amélioration de soi continuelle les aidents dans ce combat.",
                "Aussi rapides que leurs réflexes, les hommes-félins ont un tempérament très vif, passant en un instant de l'effusion de joie à la fureur. Comme les félins ordinaires, les hommes-félins ronronnent involontairement lorsqu'ils sont contents et grognent lorsqu'ils sont surpris ou en colère.",
                "Si vous voulez un personnage qui est curieux, brave, amical et agile de corps et d'esprit, vous devriez jouer un homme-félin.",
                "Vous pourriez... : <ul><li>Démontrer un intérêt véritable en posant beaucoup de questions enthousiastes.</li><li>Éviter le conflit interpersonnel en snobant l'autre ou simplement en quittant la zone.</li></ul>",
                "Les autres : <ul><li>Pensent que vous monopolisez les conversations avec vos questionnements incessants ou l'expression de vos opinions.</li><li>Vous attribuent plus d'émotion que vous n'en ressentez lorsque vous feulez ou ronronnez de manière involontaire.</li></ul>"
            ],
            "physical_desc"       : [
                "Bien que tous les hommes-félins marchent debout et possèdent de douces fourrures, une queue, de grandes oreilles et des pupilles verticales, ils se présentent dans une au moins aussi grande diversité que les félins ordinaires. Les hommes-félins possèdent des doigts agiles avec des griffes courtes qui sont habituellement rétractables.",
                "Les hommes-félins grandissent rapidement et sont capables de marcher à l'âge de quelques mois mais autrement, ils débutent leur carrière approximativement au même âge que le font les humains et vivent entre 60 et 70 ans.",
                "Retomber sur vos pattes Lorsque vous chutez, vous ne subissez que la moitié des dégâts normaux et vous ne vous retrouvez pas À terre."
            ],
            "society_desc"        : [
                "Les hommes-félins s'appellent eux-mêmes les amurruns, bien que beaucoup considèrent que ce nom soit privé. Ils élèvent leurs enfants dans des familles largement étendues, où leur est donnée une latitude éprouvante lorsqu'il s'agit d'explorer et de se retrouver dans les ennuis à un particulièrement jeune âge. Les hommes-félins apprennent un métier par le biais d'un apprentissage lâche et la majorité d'entre eux apprend plusieurs métiers tout au long de leurs vies.",
                "Les sociétés d'hommes-félins sont souvent dirigées par un chef attitré qui parle au nom de la communauté et sert de médiateur aux disputes. Les hommes-félins préfèrent régler leurs sujets de plaintes en faisant une démonstration élaborée de désintérêt ou même en quittant une communauté pour un moment de manière à ce que le problème puisse disparaître de lui-même.",
                "Les hommes-félins se voient donner des noms courts durant leur jeunesse. Les hommes-félins adolescents sont libres de se donner un nom différent lorsqu'ils quittentleur foyer pour la première fois.",
                "Exemples de Noms",
                "Alyara, Crinto, Drewan, Espes, Ferrus, Gerran, Halhat, Hoya, Ruun, Sevastin, Tespa, Yonsol, Zakkar, Zathra",
                "La plupart des hommes-félins pcroient qu'ils ont été élevés d'un état de félins primitifs pour s'opposer à des abominations maléfiques souillant les lieux naturels et à travailler à défaire la réalité. Nombre d'entre eux, quoi qu'il en soit, apprécient la liberté de voyager et aiment se fixer leur propre chemin dans la vie. Les hommes-félins religieux pratiquent souvent une forme nébuleuse d'animisme, appaisant les esprits de la terre et les créatures qu'ils chassent pour préserver l'ordre naturel.",
                "Édits populaires",
                "voyager par le monde, protéger les endroits naturels, entretenir soigneusement son apparence",
                "Anathème populaire",
                "laisser des questions sans réponse"
            ],
            "start_life"          : 8,
            "body_size"           : "M",
            "speed"               : 7,
            "characteristic_bonus": [
                "Dextérité",
                "Charisme",
                "Libre"
            ],
            "characteristic_malus": [
                "Sagesse"
            ],
            "language"            : [
                "Amurrun",
                "Commun"
            ],
            "language_sup"        : [
                "Langues supplémentaires égal à votre modificateur d'Intelligence modifier (s'il est positif). Choisissez parmi draconique",
                "elfique",
                "gnomien",
                "gobelin",
                "halfelin",
                "iruxi (la langue des hommes-lézard)",
                "jotun",
                "féerique et n'importe quelle autre langue à laquelle vous avez accès (telles que les langues qui prévalent dans votre région)."
            ],
            "sens"                : "Vision nocturne",
            "legacies"            : [
                "Homme-félin aux neufs vies",
                "Homme-félin aux oreilles pointues",
                "Homme-félin chasseur",
                "Homme-félin de la jungle",
                "Homme-félin griffu",
                "Homme-félin flexible",
                "Homme-félin hivernal",
                "Homme-félin liminaire"
            ]
        },
        {
            "name"                : "Homme-lézard",
            "traits"              : [
                "Peu courant",
                "Humanoïde",
                "Homme-lézard"
            ],
            "general_desc"        : [
                "Les hommes-lézards sont des survivants accomplis, héritiers de royaumes considérés comme anciens même par les elfes.",
                "Les hommes-lézards évoluent au sein des autres sociétés humanoïdes avec la réserve inébranlable propre aux prédateurs. Ils possèdent une réputation, légitime, de rôdeurs extraordinaires et de guerriers insensibles. Même si les hommes-lézards se sont adaptés à de nombreux environnements, la plupart d'entre eux préfèrent rester à proximité d'étendues d'eau, utilisant leur capacité à retenir leur souffle à leur avantage. De ce fait, les hommes-lézards ont tendance à favoriser un équipement qui ne sera pas endommagé par l'humidité, remplaçant le cuir et le métal par de la pierre, de l'ivoire, du verre et de l'os.",
                "Vous pourriez... : <ul><li>Tenir l'histoire de votre peuple en haute estime et chercher dans le passé des solutions aux problèmes du présent.</li><li>Lutter pour vous adapter à votre environnement tout en préservant votre culture et vos coutumes.</li></ul>",
                "Les autres : <ul><li>Partent du principe que vous êtes ancré dans votre tradition et que vous détenez d'anciennes connaissances.</li><li>Vous voient comme une créature impitoyable au sang-froid du fit de vos réactions physiques discrètes.</li></ul>"
            ],
            "physical_desc"       : [
                "Les hommes-lézards diffèrent en fonction de leur environnement, même si tous possèdent un long museau denté et une puissante queue. Nombreux sont ceux qui possèdent des pointes dorsales ou des collerettes criardes autour du cou qui sont un indice de la lignée de leur clan. Les hommes-lézards atteignent l'âge adulte à 15 ans et vivent jusqu'à 120 ans. Un homme-lézard mesure en moyenne entre 1,8 mètre et 2,1 m, grandissant tout au long de sa vie et gagnant en taille et en musculature au fil des ans.",
                "Griffes Vos griffes aiguisées vous offrent une alternative aux poings que d'autres humanoïdes utilisent pour se battre. Vous disposez d'une attaque à mains nues de griffe qui inflige 1d4 dégâts tranchants et possède les traits agile et finesse.",
                "Adaptation aquatique Votre biologie reptilienne vous permet de retenir votre souffle pendant très longtemps. Vous obtenez le don général Contrôle de la respiration comme don supplémentaire."
            ],
            "society_desc"        : [
                "Les hommes-lézards, qui s'appellent entre eux les iruxis, sont élevés en communauté dès qu'ils sortent de leur coquille. Ils possèdent une tradition orale qui s'étend sur des milliers d'années, racontée à travers des poèmes épiques, des gravures évocatrices et des rites ancestraux accomplis au milieu de champs d'os fossilisés. Les hommes-lézards sont des astrologues passionnés qui ont toujours un œil sur l'avenir. S'ils peuvent sembler lent à agir, c'est parce que leur longue histoire leur a enseigné la valeur de la patience.",
                "Les véritables colonies d'hommes-lézards passent souvent inaperçues comme elles sont le plus souvent partiellement, ou presque en totalité, immergées. Les ossements d'hommes-lézards décorent souvent les murs, car nombre d'entre eux sont convaincus que ces restes pourraient être animés par des esprits ancestraux si les habitants se retrouvaient en danger.",
                "Les noms des hommes-lézards sont généralement choisis par l'astrologue du clan, en accord avec les prédictions et les signes astrologiques ascendants au moment de l'éclosion de l'œuf.",
                "Exemples de Noms",
                "Arasheg, Barashk, Essaru, Enshuk, Gishkim, Hazi, Inishish, Kutak, Nasha, Shulkuru, Tizkar, Utakish, Zelkekek"
            ],
            "believe_desc"        : [
                "La plupart des iruxis ne se sentent pas concernés par des questions de moralité et concecntrent leurs efforts au niveau local. La religion des iruxis joue un grand rôle dans leur culture mais du côté éminemment pratique, mélangeant l'animisme et le culte des ancètres avec des rites druidiques. Parmi les dieux, seul Gozreh est habituellement révéré.",
                "<h4><strong>Édits populaires</strong></h4>",
                "Conserver les souvenirs du passé vivants, attendre votre proie, adapter vos plans pour qu'ils s'intègrent à l'environnement",
                "Anathème populaire",
                "Défier la volonté des étoiles"
            ],
            "start_life"          : 8,
            "body_size"           : "M",
            "speed"               : 7,
            "characteristic_bonus": [
                "Force",
                "Sagesse",
                "Libre"
            ],
            "characteristic_malus": [
                "Intelligence"
            ],
            "language"            : [
                "Commun",
                "Iruxi"
            ],
            "language_sup"        : [
                "amurrun",
                "aquatique",
                "bourbiérin",
                "draconique",
                "elfique",
                "féerique",
                "jotun",
                "thalassique"
            ],
            "legacies"            : [
                "Homme-lézard à collerette",
                "Homme-lézard arpenteur des sables",
                "Homme-lézard des terres humides",
                "Homme-lézard arboricole",
                "Homme-lézard bakuwa",
                "Homme-lézard écaille de falaise",
                "Homme-lézard makari",
                "Homme-lézard mimétique",
                "Homme-lézard sautenuage"
            ]
        },
        {
            "name"                : "Homme-poisson",
            "traits"              : [
                "Peu courant",
                "Amphibie",
                "Humanoïde",
                "Homme-poisson"
            ],
            "general_desc"        : [
                "Les hommes-poissons vivent dans tous les océans de Golarion, infinis dans leur diversité et impressionnants dans leur majesté. Ils se considèrent, non sans raison, comme les souverains de la mer. Dans les récifs tropicaux de la mer des Fièvres, les hommes-poissons construisent des temples et des palais de coraux aux couleurs vives. Sous la banquise de la mer Étincelante, ils chassent les phoques et les baleines pour se nourrir, au sein de petits clans qui se tiennent à l'écart. Dans l'océan Embral, les habitants de la mer peuplent la grande cité marchande d'Alohmab, construite dans la coquille d'un escargot titanesque qui rampe au fond de l'océan.",
                "Bien que la vie quotidienne des hommes-poissons ne soit pas très différente de celle des habitants de la surface, ils ont une relation beaucoup plus intime avec la magie. Dans l'environnement aquatique de la haute mer, tout ce qui repose sur le feu et le métal est impossible. Au lieu de cela, les hommes-poissons façonnent le son et l'eau à l'aide de la magie, les utilisant à la fois comme des outils et comme des armes. Ces compétences sont largement répandues dans toutes les communautés d'hommes poissons, même parmi celles qui n'ont pas reçu de formation magique académique.",
                "Si vous voulez jouer un personnage qui incarne la grâce, l'aspect merveilleux et dangereux de l'océan, vous devriez jouer un homme-poisson.",
                "Vous pourriez... : <ul>    <li>Considérez comme magique un outil ordinaire, quelque chose de ourant et d'utile au lieu d'un mystère sublime.</li>    <li>avoir un sens de supériorité lorsqu'il est à l'eau, qu'il s'agisse d'un mépris arrogant pour quiconque nage ou navigue ou d'une inquiétude parentale quant à la possibilité qu'ils se blessent.</li></ul>",
                "Les autres : <ul>    <li>Sont impressionnés par vos talents musicaux et mystiques.</li>    <li>Partent du principe que cette vie sous les vagues est très différente de la vie à la surface.</li></ul>"
            ],
            "physical_desc"       : [
                "Les hommes-poissons sont parmi les ascendances les plus distinctes sur Golarion. On ne peut réellement prendre un homme-poisson pour aucune autre. À partir de la taille, les hommes-poissons présentent le corps d'un humanoïde, avec un corps puissant et des traits aquadynamiques prononcés. Leurs yeux sont un peu plus grands que ceux des humains et beaucoup ont des oreilles légèrement pointues, semblables à celles des aiuvarins. Au-dessous de la taille, les hommes-poissons possèdent le corps de grands poissons, chacun avec une longue queue écailleuse se terminant par une nageoire ou une paire de nageoires.",
                "Les hommes-poissons sont de toutes les couleurs de peau et d'écailles imaginables. Le plus souvent, leur corps ont des teintes similaires à celles d'humains ou d'elfes vivant dans la même zone, les hommes-poissons des Entraves, par exemple, arborent une certaine similarité avec les lirgenis, alors que ceux de la mer de Vapeur ressemblent davantage à leurs voisins ulfes. Les hommes-poissons qui vivent loin de la terre arborent des couleurs plus proches de celles des poissons, avec des tons bleus, gris ou même verts. Les hommes-poissons des abysses ont une peau gris foncé, bleu nuit, voire translucide.",
                "Les queues de poisson des hommes-poissons sont colorées de la même manière que les populations de poissons locales. Dans les zones tempérées où vivent la plupart des hommes-poissons, leur corps est irrisé et argenté, avec des traces de gris ou de bleu. Les hommes-poissons tropicaux peuvent arborer des motifs de couleurs brillantes, tandis que ceux qui sont nés dans les profondeurs peuvent avoir des écailles translucides ou des rayures faiblement bioluminescentes.",
                "Grace aquatique Lorsque vous obtenez un succès sur un jet de sauvegarde contre un effet d'eau, il devient un succès critique.",
                "Hydratation Votre corps nécessite que vous retourniez dans un environnement aquatique au moins une fois au cours d'une période de 24 heures. Après les 24 premières heures hors de l'eau, vous subissez une pénalité de statut de -1 aux jets de Vigueur. Après 48 heures, vous avez du mal à respirer de l'air et commencez à suffoquer jusqu'à ce que vous retourniez à l'eau."
            ],
            "society_desc"        : [
                "On peut trouver des hommes-poissons aux quatre coins de chaque océan, mais les plus grandes concentrations vivent dans des royaumes aquatiques tentaculaires sur les plateaux continentaux, généralement dans des eaux tempérées regorgeant de poissons. Les hommes-poissons considèrent les eaux profondes à peu près de la même manière que les habitants de la surface considèrent les montagnes ou les déserts : certaines personnes peuvent y vivre, mais ce n'est pas exactement le terrain idéal. Les territoires des hommes-poissons sont constitués de plusieurs villages et villes, parfois organisés en familles aristocratiques dont les politiques de cour rivalisent avec celles de n'importe quelle monarchie de la mer Intérieure. Ces entités politiques poursuivent une diplomatie active les unes avec les autres, concluant des alliances et des traités commerciaux. Nombre d'entre elles ont tendance à se montrer plus distantes à l'égard des habitants de la surface, mais certaines sont fascinées par cette dernière et cherchent activement à la connaître, que ce soit en utilisant des engins de déplacement spécialisés remplis d'eau pour se rendre sur la terre ferme ou en recourant à d'anciennes magies de transformation.",
                "Les hommes-poissons accordent une grande importance à la magie, et tout homme-poisson qui souhaite accéder à un poste de dirigeant doit maîtriser la sorcellerie du vent, des vagues et des chants. Les rois et reines hommes-poissons ne sont pas nécessairement les mages les plus puissants de leur territoire, mais ils n'en sont généralement pas loin, car ils ont accès à une multitude d'enseignements et d'artefacts transmis d'une génération à l'autre.",
                "Les schémas pour donner un nom aux hommes-poissons sont aussi nombreuses qu'il existe de cultures hommes-poissons, mais quelques tendances prédominent. Des clics semblables à ceux des dauphins et des gémissements semblables à ceux des baleines ponctuent les noms mélodieux des hommes-poissons et les variations de hauteur et de ton permettent de distinguer les noms similaires les uns des autres. Les hommes-poissons qui traitent régulièrement avec les habitants de la surface adoptent souvent des noms empruntés aux cultures locales de la surface, d'autant plus que les noms des hommes-poissons ont tendance à sonner étrangement et maladroitement à leurs propres oreilles lorsqu'ils sont prononcés dans l'air plutôt que dans l'eau.",
                "<h3>Exemples de noms</h3>",
                "Aloori, Iri'kik, Ouliette, T'konaa, Uathanak"
            ],
            "believe_desc"        : [
                "En général, les hommes-poissons suivent la morale et les coutumes de leurs parents et des communautés dans lesquels ils ont été élevés. Ceux-ci varient grandement à travers le monde. Par exemple, on attend que certains hommes-poissons vivent harmoniousement avec la nature, tandis que d'autres suivent de manière stricte les lois ordonnées par leurs ancêtres. Nombre d'hommes-poissons croient que les actes d'altruisme élèvent une communauté comme un tout, même s'ils ne produisent pas immédiatement des résultats avantageux pour celui qui a d'abord accompli l'exploit.",
                "Le culte des hommes-poissons sont, comme leurs sociétés, divers. Les divinités qui ont le contrôle sur l'eau sont les plus considérés et la plupart des communautés possèdent un autel à Gozreh ou à l'un des Seigneurs élémentaires de l'eau : Kélizandri ou Lysianassa. Abadar est un dieu populaire dans les plus vastes des communautés des hommes-poissons, et une version d'Érastil — davantage associée aux requins qu'avec les cerfs — est vénérée dans les plus petits villages.",
                "<p><strong>Édits populaires </strong></p>",
                "aider son prochain chaque fois que possible, apporter la beauté de la musique au monde, protéger les mers des menaces intérieures et extérieures",
                "Anathème populaire",
                "combattre le courant de front, utiliser la magie pour blesser des innocents ou amasser des richesses"
            ],
            "start_life"          : 8,
            "body_size"           : "M",
            "speed"               : 1,
            "characteristic_bonus": [
                "Dextérité",
                "Charisme",
                "Libre"
            ],
            "characteristic_malus": [
                "Constitution"
            ],
            "language"            : [
                "Commun",
                "thalassique",
                "supplémentaires égale à votre modificateur d'Intelligence (s'il est positif). Choisissez entre aklo",
                "azlante",
                "draconique",
                "elfique et féerique et n'importe quelle autre langue à laquelle vous avez accès (comme les langues qui prévalent dans votre région)."
            ],
            "legacies"            : [
                "Les héritages des hommes-poissons reflètent souvent les océans dans lesquels ils vivent. Choisissez un des hértiages des hommes-poissons au niveau 1.",
                "Homme-poisson abyssal",
                "Homme-poisson carcharodon",
                "Homme-poisson pélagique",
                "Homme-poisson des récifs",
                "Homme-poisson à queue de poisson"
            ]
        },
        {
            "name"                : "Homme-rat",
            "traits"              : [
                "Peu courant",
                "Humanoïde",
                "Homme-rat"
            ],
            "general_desc"        : [
                "Les ysokis sont des êtres que la plupart des humanoïdes vivant à la surface appellent les \"hommes-rats\". Il s'agit d'un peuple communautaire qui préfère vivre à l'étroit, avec jusqu'à 100 individus au sein d'un unique foyer. S'ils ne peuvent trouver de maisons en ville, les hommes-rats peuvent, à la place, choisir de vivre dans les caves ou dans des complexes de cavernes, lesquels leur permettent de stocker la multitude de biens variés qu'ils rapportent de leurs expéditions commerciales.",
                "Les hommes-rats aiment voyager et on peut souvent les croiser sur la route au sein de caravanes marchandes. Ils sont doués de leurs mains et ont un œil affûté pour repérer tout ce qui sort de l'ordinaire, qu'il s'agisse de dangers ou de trésors. Ils sont aussi d'invétérés collectionneurs. Les terriers ysokis sont bourrés du sol au plafond de tout un bazar rassemblé par les précédentes générations et accumulé en préparation d'une future urgence.",
                "Si vous voulez un personnage qui est intelligent, rapide, bourlingueur et capable de s'adapter, essayez de jouer un homme-rat !",
                "Vous pourriez... : <ul><li>Tirer fierté de votre immense famille étendue et rester en contact avec tout un chacun en son sein.</li><li>Aimer voyager ici et là à la recherche de nouvelles expériences, en adorant collectionner les babioles au long du chemin.</li></ul>",
                "Les autres : <ul><li>Sont surpris par votre toilettage soigneux et vos autres habitudes maniaques.</li><li>Pensent que vous êtes collant et que vous envahissez leur espace personnel.</li></ul>"
            ],
            "physical_desc"       : [
                "Les hommes-rats ont des museaux avec des moustaches, de grandes oreilles et des queues dépourvues de poils et ils ont habituellement les yeux rouges et une fourrure rase marron ou noire. Un homme-rat banal mesure environ 1,20 mètre et pèse approximativement 40 kilos. Les hommes-rats varient considérablement quoi qu'il en soit. Même un unique groupe familial peut présenter des variations considérables dans la couleur des poils, des yeux ou de taille.",
                "L'instinct conduit les hommes-rats à maintenir la propreté, bien que ce trait soit aussi renforcé par leur structure sociale forte. Comme leur apparence est souvent considérée comme perturbante — et que les autres gens les prennent pour des rats-garous — les hommes-rats cachent souvent leurs traits physiques avec des capuches, des gants, des chaussures, des tuniques à manches longues, des robes et d'autres couches de vêtements lorsqu'ils se déplacent dans les lieux dominés par d'autres ascendances.",
                "Dents aiguisées Vos incisives proéminentes offrent une alternative aux poings que les autres humanoïdes utilisent dans un combat. Vous disposez d'une attaque à mains nues qui inflige 1d4 points de dégâts perforants, fait partie du groupe pugilat et possède les traits agile et finesse."
            ],
            "society_desc"        : [
                "La culture ysokie met l'accent sur la coopération et la communauté. Chaque ysoki apprend — à travers des jeux communautaires, des évènements sociaux et les sports — à se forger rapidement des amitiés et des relations avec les ysokis étrangers à leurs familles. Avec une longue tradition de marchands et de bricoleurs, les ysokis voyagent fréquemment d'une ville à une autre. Leurs chariots sont habituellement regroupés en caravanes comptant jusqu'à une demi-douzaine de véhicules. Les chariots ysokis sont tirés par des rats géants exceptionnellement grands et de nombreux hommes-rats peuvent parler à de tels animaux.",
                "Chaque famille ysokie possède peut-être deux douzaines de noms qui sont transmis de génération en génération, quelques fois avec des altérations mineures ou des surnoms alternatifs. Les hommes-rats se voient souvent affublés de surnoms et de sobriquets par les humanoïdes avec lesquels ils interagissent, mais la plupart des hommes-rats trouvent ces noms détestables et ne les supportent qu'à l'extérieur de leurs communautés.",
                "Exemples de Noms",
                "Barnan, Chikis, Chonan, Deto, Jass, Jix, Knagi, Kubi, Lolo, Ninnec, Nos, Rak, Renzi, Skigim, Tali, Zess"
            ],
            "believe_desc"        : [
                "Les hommes-rats se soucient davantage de leur famille que des concepts abstraits de bien et de mal. Leurs terriers sont peut-être des antres chaotiques remplis de bibelots, mais ils obéissent aussi à des codes sociaux stricts.",
                "Bien que les hommes-rats vénèrent leurs ancêtres et aient tendance à adopter la divinité la plus répandue dans leur région, Lao Shu Po joue un rôle particulier dans la culture ysokie. Grand-mère Rat incarne de nombreuses choses qui sont par ailleurs contraires à l'esprit des hommes-rats : elle incite ses disciples à faire passer leurs propres intérêts avant ceux des autres. Pour la plupart des hommes-rats, Grand-mère Rat accomplit toutes les choses dont ils ont besoin, mais qu'ils voudraient ne pas faire.",
                "<h4><strong>Édits populaires</strong></h4>",
                "placer les intérêts de sa communauté au-dessus de la sienne, maintenir une apparence propre, être honnête dans ses affaires",
                "Anathème populaire",
                "jeter ce qui pourrait être utile"
            ],
            "start_life"          : 6,
            "body_size"           : "P",
            "speed"               : 7,
            "characteristic_bonus": [
                "Dextérité",
                "Intelligence",
                "Libre"
            ],
            "characteristic_malus": [
                "Force"
            ],
            "language"            : [
                "Commun",
                "Ysoki"
            ],
            "language_sup"        : [
                "Aklo",
                "Draconique",
                "Nain",
                "Gnoll",
                "Gnomien",
                "Gobelin",
                "Halfelin",
                "Orquien",
                "Sakvroth"
            ],
            "sens"                : "Vision nocturne",
            "legacies"            : [
                "Rat à long museau",
                "Rat d'égouts",
                "Rat de l'ombre",
                "Rat des profondeurs",
                "Rat des sables",
                "Rat des tunnels",
                "Rat Neige"
            ]
        },
        {
            "name"                : "Humain",
            "traits"              : [
                "Humain",
                "Humanoïde"
            ],
            "general_desc"        : [
                "Plus imprévisibles et disparates que n'importe quel autre peuple habitant sur Golarion, les humains font preuve d'une volonté exceptionnelle et de la capacité à endurer et à s'étendre. Si de nombreuses civilisations ont prospéré avant l'ascension de l'humanité, celle-ci est à l'origine des plus grandes et des plus terribles sociétés au cours de l'histoire et elle constitue aujourd'hui la majorité de la population des royaumes du pourtour de la Mer Intérieure.",
                "L'ambition, la diversité et le potentiel exceptionnel des humains leur ont permis de devenir l'ascendance dominante de ce monde. Leurs empires et leurs nations sont vastes et étendus et leurs citoyens se forgent un nom grâce à la force de leurs épées et par la puissance de leurs sorts. L'humanité est diverse et tumultueuse, allant du nomade à l'impérial, du sinistre au saint. Nombre d'entre eux s'aventurent pour explorer, cartographier l'étendue du multivers, rechercher des trésors perdus depuis longtemps ou mener de puissantes armées à la conquête de leurs voisins, sans autre raison que celle de pouvoir le faire.",
                "Si vous voulez un personnage qui peut juste être à peu près ce que vous désirez, vous devriez jouer un humain.",
                "Vous : <ul><li>Vous efforcez d'atteindre l'excellence, soit pour vous-même, soit pour défendre une cause.</li><li>Chérissez les relations entretenues avec votre famille et vos amis.</li></ul>",
                "Les autres : <ul><li>Respectent votre flexibilité, votre adaptabilité et, dans la plupart des cas, votre ouverture d'esprit.</li><li>Doutent de vos intentions, craignant que vous ne puissiez chercher qu'à accumuler du pouvoir ou la fortune.</li><li>Ne savent pas quoi penser de vous et hésitent à présumer vos intentions.</li></ul>"
            ],
            "physical_desc"       : [
                "Physiquement, les caractéristiques des humains sont aussi différentes que le nombre de climats dans le monde. Les humains présentent une grande variété de couleur de peau et de cheveux, de types de corpulence et de traits faciaux. Généralement parlant, leur peau a une teinte plus sombre lorsqu'ils vivent ou leurs ancêtres ont vécu près de l'équateur.",
                "Les humains atteignent l'âge adulte autour de 15 ans, bien qu'ils n'atteignent une maturité mentale que quelques après. Un humain typique peut vivre environ 90 ans. Les humains présentent des caractéristiques physiques exceptionnellement variables par rapport à d'autres ascendances, avec une plus grande variabilité en taille, en poids et d'autres paramètres physiques."
            ],
            "believe_desc"        : [
                "La diversité humaine se manifeste également au niveau de leurs gouvernements, de leur attitude et des normes sociales. Bien que les cultures humaines les plus anciennes puissent faire remonter leur histoire partager sur des milliers d'années, comparées aux sociétés des elfes ou des nains, les civilisations humaines semblent dans un état de constante évolution, leurs empires se fragmentant et de nouveaux royaumes supplantant les anciens.",
                "<h4><strong>Édits populaires</strong></h4>",
                "explorer le monde, aspirer à la grandeur, se consacrer à la morale",
                "<h4><strong>Anathèmes populaires</strong></h4>",
                "gâcher le peu de temps dont vous disposez"
            ],
            "start_life"          : 8,
            "body_size"           : "M",
            "speed"               : 7,
            "characteristic_bonus": [
                "deux primes d'attributs libres"
            ],
            "language"            : [
                "Commun"
            ],
            "language_sup"        : [],
            "legacies"            : [
                "Aiuvarin",
                "Dromaar"
            ]
        },
        {
            "name"                : "Kholo",
            "traits"              : [
                "Peu courant",
                "Kholo",
                "Humanoïde"
            ],
            "general_desc"        : [
                "Les kholos ont la mauvaise réputation de pillards brutaux et de suivants de fidèles. Nombreux croient que les kholos sont des sorciers, des cannibales et pire. La véérité est plus complexe.",
                "Les kholos sont éminemment pratiques et des chasseurs pragmatiques et des pillards. Pour eux, l'honneur n'est qu'un autre mot pour désigner un risque inutile. Toute perte d'un kholo n'affecte pas seulement l'individu, mais aussi ses compagnons de meute et ses proches. Perdre du temps pour autre chose que la victoire, que ce soit par pitié ou par cruauté, est presque considéré comme immoral. Les kholos sont des maîtres de l'embuscade, de la feinte tactique et de la guerre psychologique.",
                "Tout aussi incomprise est la pratique kholo du culte des ancêtres et de l'endocannibalisme. Les kholos consomment leurs morts en signe de respect, organisant un grand festin et ils transforment leurs os en objets d'art ou en armes. Les kholos étendent cet honneur aux ennemis respectés, dans l'espoir d'apporter la ruse ou la force de leur ennemi dans leur clan.",
                "Vous pourriez... : <ul><li>Être très démonstratif physiquement - en étreignant, en frappant ou en léchant vos amis.</li><li>Conserver un os d'un parent révéré pour lui demander conseil.</li></ul>",
                "Les autres : <ul><li>Sont intimidés par votre taille, vos dents et votre rire lugubre.</li><li>Respectent l'efficacité brutale de votre style de chasse.</li></ul>"
            ],
            "physical_desc"       : [
                "Les kholos sont de grands humanoïdes ressemblant à des hyènes, dotés d'un museau court, de dents acérées et de grandes oreilles rondes et expressives. Leur corps est recouvert d'une fourrure hirsute, plus rêche sur le dos et plus douce et claire sur le ventre et la gorge, généralement dans une nuance blanc cassé, beige ou marron - les taches et les rayures sont toutes deux courantes. Les kholos mesurent généralement entre 1,80 et 2,50 mètres. Les femmes sont généralement plus grandes d'une tête que les hommes et donc plus fortes. Les kholos sont considérés comme des adultes à quinze ans et vivent environ 60 ans en moyenne.",
                "Morsure Vos dents acérées et vos puissantes mâchoires sont des armes redoutables. Vous disposez d'une attaque à mains nues de mâchoires qui inflige 1d6 dégâts perforants. Vos mâchoires font partie du groupe pugilat."
            ],
            "society_desc"        : [
                "Les kholos vivent généralement en clans composés de 10 à 20 groupes familiaux interdépendants, contenant entre 100 et 200 kholos. Ils sont dirigés par un conseil de femmes kholos, généralement sélectionnées parmi les membres les plus âgées de chaque famille.",
                "Les gardiens des os se concentrent sur le respect des souhaits des ancêtres kholos et des dieux - ils tirent leur nom des ossements ancestraux qui ornent leurs vêtements et leurs maisons. Les conteurs servent d'enseignants et de sages et sont censés avoir une connaissance encyclopédique de l'histoire du clan, de la région et de tout ce qui concerne le clan.",
                "Les nouveaux-nés kholos se voient donner un nom racine, typiquement celle d'un os, d'une plante ou d'un animal (mais jamais d'une hyène car cela est considéré comme narcissique). Lorsqu'un kholo atteint certaines étapes de sa vie, il ajoute des descripteurs à son nom.",
                "<h3>Exemples de noms</h3>",
                "Baobab, Chacal, Onyx Éléphant des ombres, Épine rouge, Reed acier non plié, Acacia blanc, Dent souhaitable, Pivert"
            ],
            "believe_desc"        : [
                "Les kholos ont une approche dépourvue de sentiment et de réalisme de la vie et donnent la priorité aux résultats plutôt qu'aux méthodes. Ils sont généralement loyaux et généreux envers leur peuple et impitoyables envers les étrangers - la question de savoir si ce comportement est considéré comme acceptable varie en fonction de ceux qu'ils considèrent comme « leur peuple ».",
                "Nombre de kholos rendent hommage à Lamashtu, à la fois comme à l'origine de leur peuple et comme un guide dans un monde chaotique. Quoi qu'il en soit, certains kholos rendent souvent hommage à Calistria et Shélyn. Néthys est le patron des gardiens des os.",
                "<h4><strong>Édits populaires</strong></h4>",
                "renforcer vos alliés et votre meute, reconter les contes de vos ancètres, neutraliser les ennemis avec des tactiques et la ruse",
                "Anathème populaire",
                "prendre des risques pour vous ou votre meute sans raison, laisser un kholo mort ou un être aimé pourrir comme une charogne"
            ],
            "start_life"          : 8,
            "body_size"           : "M",
            "speed"               : 7,
            "characteristic_bonus": [
                "Force",
                "Intelligence",
                "Libre"
            ],
            "characteristic_malus": [
                "Sagesse"
            ],
            "language"            : [
                "Commun",
                "Gnoll"
            ],
            "language_sup"        : [
                "draconique",
                "elfique",
                "iruxi",
                "nécril",
                "orquien",
                "fée"
            ],
            "sens"                : "Vision nocturne",
            "legacies"            : [
                "Grand kholo",
                "Kholo à haleine douce",
                "Kholo cavernicole",
                "Kholo chien",
                "Kholo fourmi",
                "Kholo hivernal",
                "Kholo sorcier"
            ]
        },
        {
            "name"                : "Kobold",
            "traits"              : [
                "Peu courant",
                "Humanoïde",
                "Kobold"
            ],
            "general_desc"        : [
                "Chaque kobold comprend instinctivement l'importance du pouvoir et nombreux sont ceux qui vénèrent ceux qui le possèdent, qu'il s'agissent de puissants dragons, de fiélons maléfiques, de fées impérieuses ou même d'artefacts anciens. Les kobolds recherchent de telles alliances par sens du pragmatisme - Après tout, qui oserait s'en prendre à un kobold au service d'un dragon vénérable ? mais également parce que les oeufs de kobolds incubés à proximité de tels loci de puissance en tirent des traits physiques (et quelques fois des capacités) similaires à celles du bienfaiteur de leur terrier. Par eux-mêmes, les kobolds sont des artisans ingénieux et des alliés dévoués, mais les étrangers qui pénètrent sur leur territoire les considèrent comme des escarmoucheurs inspirés et d'astucieux piégeurs. Quoi qu'il en soit, ces opportunistes reptiliens se montrent heureux de coopérer avec d'autres humanoïdes lorsque c'est à leur avantage, combinant les précautions et les ruses pour faire fortune dans le vaste monde.",
                "Si vous voulez un personnage capable de ruse mortelle et qui porte la marque d'un puissant bienfaiteur , vous devriez jouer un kobold.",
                "Vous pourriez... : <ul><li>Analyser votre environnement, toujours à la recherche des embuscades, des terrains avantageux et de chemins pour déguerpir.</li><li>Observer, adopter et respecter naturellement les dynamiques de groupe, que ce soit comme dirigeant, subordonné ou comme égal.</li></ul>",
                "Les autres : <ul><li>Partent du principe que vous êtes couard et n'allez pas tenir votre place face au danger.</li><li>Apprécient votre ingéniosité et votre capacité à trouver des ressources, plus particulièrement lorsqu'il s'agit de concevoir des moyens de défense.</li></ul>"
            ],
            "physical_desc"       : [
                "Les kobolds sont de petits humanoïdes reptiliens (environ 1 mètre de haut) avec des corps minces, une longue queue et des cornes robustes. Leurs traits reflètent souvent la nature du biebfaiteur de leur terrier, sous la forme de vestiges d'ailes draconiques ou d'excroissances cristallines lumineuses. Ces différences permettent de distinguer les terriers, bien que tous les kobolds soient généralement facilement identifiables comme tels.",
                "Les kobolds grandissent rapidement, atteignant l'âge adulte vers 12 ans et ils vivent à peu près 60 ans. De rares kobolds vivent même plus longtemps après avoir maîtrisé le pouvoir d'un bienfaiteur magique."
            ],
            "society_desc"        : [
                "Les kobolds font preuve d'une prudence atavique qui leur permet de rester en vie. Ils sont mystérieux ou serviles à proximité de puissantes créatures pour éviter d'en devenir les victimes. Cette soumission disparaît une fois que les kobolds ont obtenu un formidable bienfaiteur (comme un dragon) ou une source puissante de pouvoir surnaturel (comme un artefact ou un dirigeant ensorceleur). Ils adoptent régulièrement les lois et les normes culturelles inspirées par la personnalité de leur modèle. Quoi qu'il en soit, les kobolds sont proverbialement réputés pour sentir que le bateau va couler et, une fois que la source de leur pouvoir manque ou semble condamnée, leur moral se brise rapidement.",
                "Le nom donné à un jeune kobold comporte rarement plus d'une ou deux syllabes. Lorsqu'ils vieillissent, que leur statut progresse ou qu'ils accomplissent des faits glorieux, ils peuvent ajouter davantage de syllabes à leurs noms. Les kobolds portent rarement des patronymes sauf lorsqu'ils font cet effort pour mieux se fondre dans une communauté, auquel cas, ils adoptent typiquement le patronyme d'une importante personnalité de ce groupe.",
                "<h3>Exemples de noms</h3>",
                "Azrnak, Draahzin, Enga, Fazgyn, Fazij, Jekkajak, Kib, Kirrok, Mirkol, Tarka, Urkak, Varshez, Vroklan, Zekstikah, Zgaz"
            ],
            "believe_desc"        : [
                "Tous les kobolds, à l'exception des plus iconoclastes, éprouvent un respect naturel pour les hiérarchies et les règles, s'appuyant sur leurs stratégies sociales ancestrales pour survivre.",
                "La religion organisée semble naturelle à la majorité des kobolds. Ils sont souvent attirés par les divinités liées à leurs bienfaiteurs, comme Asmodéus si leur bienfaiteur est un fiéon ou les divinités draconiques comme Apsu et Dahak si leur bienfaiteur est un dragon. Les kobolds sont également souvent attirés par les cultes, en particulier ceux dont les figures de proue sont de puissantes créatures magiques.",
                "<h4><strong>Édits populaires</strong></h4>",
                "trouver sa place dans n'importe quelle structure de pouvoir, être fier de la force de ses alliés, gagner grâce à son intelligence",
                "Anathème populaire",
                "faire face seul à une menace, ne pas prendre de précautions"
            ],
            "start_life"          : 6,
            "body_size"           : "P",
            "speed"               : 7,
            "characteristic_bonus": [
                "Dextérité",
                "Charisme",
                "Libre"
            ],
            "characteristic_malus": [
                "Constitution"
            ],
            "language"            : [
                "Commun",
                "sakvroth"
            ],
            "language_sup"        : [
                "aklo",
                "diabolique",
                "draconique",
                "empyréen",
                "fée",
                "gnomien",
                "nanique",
                "pierreux"
            ],
            "sens"                : "Vision dans le noir",
            "legacies"            : [
                "Kobold à écailles de dragon",
                "Kobold à forte mâchoire",
                "Kobold à queue venimeuse",
                "Kobold cavernicole",
                "Kobold chutevertigineuse",
                "Kobold coeur des éléments",
                "Kobold cornesort",
                "Kobold grimpegrotte",
                "Kobold scribeparadis",
                "Kobold tunnelinondé"
            ]
        },
        {
            "name"                : "Léchi",
            "traits"              : [
                "Léchi",
                "Plante"
            ],
            "general_desc"        : [
                "Les léchis sont des esprits immortels de la nature qui se voient temporairement accorder une forme physique. Gardiens et émissaires de l'environnement, les léchis naissent lorsqu'un druide compétent ou un autre maître de la magie primordiale procède à un rituel pour créer un réceptacle adéquat, et que l'esprit choisit ce réceptacle pour en faire sa demeure temporaire. Les léchis sont autonomes dès la fin du rituel, mais il n'est pas rare qu'ils gardent des liens avec leurs créateurs tout au long de leur vie. De nombreux léchis apprécient l'opportunité d'interagir avec le monde physique. Bien que la plupart des esprits léchis soient anciens, ils se souviennent rarement de leurs vies antérieures et considèrent leur nouvelle vie comme une chance d'expérimenter à nouveau les merveilles du monde.",
                "Si vous désirez jouer un personnage qui est curieux et relié à la nature, vous devriez jouer un léchi.",
                "Vous : <ul><li>Agissez en tant qu'agent itinérant pour les gardiens de la nature incapables de quitter leurs territoires.</li><li>Encouragez les civilisations que vous rencontrez à agir en coopération avec la nature et construire leurs villes dans le respect de l'écologie.</li></ul>",
                "Les autres : <ul><li>pensent que vous êtes une curiosité du fait de vos origines spirituelles.</li><li>Pensent que vous ne connaissez que ce qui a trait à la nature et que vous ignorez tout de la civilisation et de la société.</li></ul>"
            ],
            "physical_desc"       : [
                "Les léchis sont aussi variés que le matériau utilisé pour la construction de leur réceptacle, apparaissant souvent comme un méli-mélo bizarre de plantes ou de champignons. Leurs corps ont une forme vaguement humanoïde, empruntant de nombreuses caractéristiques à la plante ou au champignon dont ils sont composés. Un léchi mesure environ 90 cm de haut. Les léchis commencent leur vie en étant adultes et ne vieillissent pas.",
                "Alimentation des plantes Vous obtenez de quoi vous alimenter de la même manière que les plantes ou les champignons qui correspondent à votre type de corps, au travers d'une combinaison de photosynthèse, d'absorption des minéraux par vos racines ou de récupération de matière en décomposition. Vous n'avez généralement pas besoin de payer pour votre nourriture. Si vous dépendez normalement de la photosynthèse et que vous ne voyez pas la lumière du soleil pendant une semaine, vous commencez à dépérir. Vous pouvez obtenir une alimentation à partir de bouteilles spécialement formulées à base de lumière du soleil en remplacement de la lumière du soleil naturelle mais ces bouteilles coûtent 10 fois plus que des rations ordinaires (ou 40 pa)."
            ],
            "society_desc"        : [
                "Pour la plupart des léchis, le concept de famille n'a aucun lien avec la naissance, mais est plutôt déterminé par les liens de loyauté et d'amitié. Les léchis sont des alliés fidèles, mais ne sont que peu tolérants envers ceux qui dégradent la nature. Autant ils sont heureux d'accepter dans leur famille quelqu'un qui gagne leur confiance, autant ils attendent des membres de leur famille qu'ils prennent soin d'eux et de leurs protégés naturels en retour. Les léchis sont regroupés au sein de catégories semblables à des ethnies, mais ces dernières ne sont pas définies par des traits physiques. Elles regroupent davantage de grandes catégories des caractéristiques de leurs esprits. Certains esprits vont avoir tendance à s'intéresser à certains corps physiques, bien qu'une telle prédisposition ne soit pas absolue. Le genre d'un léchi est déterminé par l'esprit qui habite son corps. Certains léchis sont exclusivement mâles ou femelles, alors que la grande majorité se considère comme appartenant aux deux genres. D'autres, et en particulier les léchis fongiques, tendent vers une expression plus complexe du genre, quand ils n'y renoncent pas totalement. Les léchis choisissent et changent de noms plusieurs fois au cours de leurs vies.",
                "Exemples de Noms",
                "Écarlate en été, Tisseur de légendes verdoyant, Chasseur qui rôde, Maître buveur du soleil, Ciel de midi chanson du soir, Branche de pin enneigée, Rapides en cascade."
            ],
            "believe_desc"        : [
                "Les croyances des léchis se concentrent généralement sur le monde naturel. Ceux qui ont une inclination philosophique tendent vers la Foi verte et Gozreh est la divinité la plus populaire parmi les léchis religieux. Certains léchis vénèrent également les hommes verts, de puissants esprits de la nature.",
                "<h4><strong>Édits populaires</strong></h4>",
                "faire l'expérience du monde physique, former une famille grâce à la loyauté et la confiance, protéger les parties de la nature que vous incarnez",
                "<h4><strong>Anathèmes populaires</strong></h4>",
                "embrasser la magie ou les influences non naturelles"
            ],
            "start_life"          : 8,
            "body_size"           : "P",
            "speed"               : 7,
            "characteristic_bonus": [
                "Constitution",
                "Sagesse",
                "Libre"
            ],
            "characteristic_malus": [
                "Intelligence"
            ],
            "language"            : [
                "Commun",
                "fée"
            ],
            "language_sup"        : [
                "draconique",
                "elfique",
                "gnomien",
                "gobelin",
                "halfelin",
                "sakvroth"
            ],
            "sens"                : "Vision nocturne",
            "legacies"            : [
                "Léchi algue",
                "Léchi cactus",
                "Léchi calebasse",
                "Léchi champignon",
                "Léchi chrysanthème",
                "Léchi enfant de pêche",
                "Léchi feuillu",
                "Léchi fruitier",
                "Léchi liane",
                "Léchi lotus",
                "Léchi pin",
                "Léchi racinaire"
            ]
        },
        {
            "name"                : "Minotaure",
            "traits"              : [
                "Peu courant",
                "Bête",
                "Humanoïde",
                "Minotaure"
            ],
            "general_desc"        : [
                "Les minotaures empruntent des passages complexes, qu'ils soient naturels ou artificiels et sont des maîtres de l'architecture de pierre. Curieux et inébranlables, ces humanoïdes bovins passent leur vie à perfectionner la quête qui les appelle, ce qui peut parfois les mener loin des enclaves où ils ont été élevés. Les minotaures sont originaires de l'archipel d'Iblydos, mais ils se sont répandus loin sur Golarion, formant des communautés très unies, souvent près des montagnes ou sous la surface de la terre. Bien qu'on les prenne parfois pour de simples brutes, les minotaures sont aussi bien des érudits que des guerriers. Ceux qui parviennent à faire abstraction de leur apparence y trouveront une affinité pour la construction et la navigation, ainsi que pour la résolution créative de problèmes.",
                "Le mythe que de nombreux minotaures racontent sur leurs origines est un mythe d'artisanat, de malédiction et d'incompréhension. Il y a des millénaires, Iblydos était peuplée de divinités vivantes qui marchaient parmi les mortels et les gouvernaient. Un tailleur de pierre nommé Tavdrinos, admiré autant par les mortels que par les héros-dieux, reçut la vision d'un héros-dieu lui demandant de créer un temple glorieux, mais le mythe ne dit pas lequel. Le maçon a trouvé les images de la vision obscures : des aperçus brouillés de colonnes torsadées, de taureaux qui chargent et d'un personnage inconnu qui se dresse avec défi. Il ne s'agissait pas d'une commande détaillée, mais personne ne refuse un ordre divin. Le maçon travailla pendant 17 ans avant d'achever sa tâche. Le temple de trois étages célébrait la gloire du dieu-héros et de son animal sacré, le taureau. À l'arrivée du dieu-héros, Tavdrinos s'attendait à recevoir des louanges et des félicitations, mais la divinité entra dans une colère noire. Tavdrinos avait mal compris la vision, car le taureau était une bête détestée et non un allié célèbre. Pour le punir de cette insulte accidentelle, le dieu-héros maudit Tavdrinos en lui donnant la forme détestée du taureau. Furieux de la malédiction et de son incapacité à satisfaire la divinité, le maçon se retira dans une série de grottes sous le temple, où il poursuivit son travail en tant que premier des minotaures.",
                "Si vous voulez jouer un personnage qui possède un corps fort, qui s'exprime par l'artisanat plus que par les mots, vous devriez jouer un minotaure.",
                "Vous pourriez... : <ul>    <li>Décorer vos sabots et vos cornes avec des dessins ou des couleurs ayant une signification personnelle.</li>    <li>Être adepte de la navigation et des énigmes.</li></ul>",
                "Les autres pourraient… : <ul>    <li>Être intimidé par votre taille ou penser que vous calculez.</li>    <li>Pener que vous pouvez voir à travers la pierre.</li></ul>"
            ],
            "physical_desc"       : [
                "Les minotaures sont de grands et corpulents humanoïdes qui présentent des traits bovins tels que des cornes, des sabots et des visages allongés. Leur fourrure est souvent monochrome, d'un brun profond ou d'un noir profond, bien que le blanc ou le gris ne soient pas rares. Bien que la grande taille des minotaures puisse laisser penser qu'ils sont maladroits, la vérité est tout autre. Les sabots des minotaures reposent sur un point d'équilibre délicat, ce qui rend leurs pas silencieux et précis. Cependant, lorsqu'il faut se faire entendre, les pas d'un minotaure peuvent retentir comme un coup de tonnerre.",
                "Les cornes d'un minotaure sont une source de fierté et sont souvent rehaussées par des accessoires de mode. Ceux qui ont des cornes plus longues les entourent d'anneaux et de chaînes, coulés dans les métaux rares les plus abordables ou les teignent ou y gravent des motifs. Ceux qui n'ont pas de longues cornes se rasent la fourrure autour de la base des cornes, en ajoutant éventuellement des tatouages circulaires élégants sur la peau environnante ou en enfilant des embouts métalliques à leur extrémité. Cela permet d'attirer l'attention sur une caractéristique qui serait autrement délaissée.",
                "Cornes Vos cornes pointues sont aussi mortelles que des épieux. Vous disposez d'une attaque à mains nues de cornes qui infligent 1d8 dégâts perforants. Vos cornes appartiennent au groupe pugilat et possèdent le trait à mains nues."
            ],
            "society_desc"        : [
                "Les minotaures résident généralement dans des enclaves communautaires insulaires et souterraines. Ils sont très fiers de leurs prouesses architecturales, taillant des bâtiments aussi bien dans la pierre que dans les grottes naturelles. Une enclave possède souvent deux fois plus de bâtiments qu'il n'est nécessaire, les structures supplémentaires formant des oeuvres d'art fonctionnelles. Les jeunes minotaures s'exercent à la chasse et à la traque dans les bâtiments vides et chaque génération ajoute une petite extension ou une fresque sur les murs. Les extensions telles que les couloirs tortueux, les surplombs inattendus, les jardins partagés et toute une série d'autres artifices de ce genre créent de nombreux espaces sociaux et des zones de calme propices à la réflexion, pour autant que le voyageur soit capable de ne pas se perdre dans les flux architecturaux inhabituels.",
                "Les mythes entourant les minotaures conduisent la plupart des gens à croire qu'il s'agit de féroces carnivores, voire de cannibales dans les légendes les plus sombres. En réalité, la plupart des sociétés de minotaures sont des chasseurs-cueilleurs qui se nourrissent de lichen et d'autres plantes. Leur réputation de chasseurs féroces découle de rituels mensuels, au cours desquels les traqueurs les plus accomplis s'aventurent et ramènent des proies dangereuses. Le retour de ces chasseurs est l'une des rares occasions pour les minotaures de manger de la viande, se régalant de leurs prises en signe de gratitude et de révérence pour leurs talents.",
                "Les minotaures ont tendance à être francs et directs, s'engageant rarement dans des jeux de mots, des sarcasmes ou de l'ironie. Les narines qui s'ouvrent et les yeux qui roulent peuvent être des expressions intimidantes pour les non-minotaures, mais pour un minotaure, ils peuvent transmettre une histoire complexe avec des éléments émotionnels et même spirituels. Les minotaures qui souhaitent souligner une certaine émotion utilisent parfois des piercings et des tatouages, bien que les minotaures qui s'appuient trop sur ces ornements pour paraître féroces passent souvent pour des imbéciles aux yeux de leurs pairs. Le dicton du minotaure « un taureau en colère frappe une fois et ronge deux fois » est à la fois un avertissement contre les manifestations trop agressives et un rappel que la créature qu'il faut vraiment craindre est celle qui parle avec ses actes.",
                "Les minotaurs Iblydiens portent souvent des noms similaires à ceux des humains de cet archipel. Les noms de famille des minotaures changent constamment et reflètent généralement l'accomplissement le plus mémorable d'un individu. Jusqu'à l'âge adulte, un minotaure iblydien porte le nom de Tavdrinos (d'après le premier minotaure). Une fois qu'il a atteint la maturité, ses amis d'enfance et ses alliés lui attribuent collectivement un nom de famille approprié. Les minotaures des groupes d'aventuriers peuvent être renommés plusieurs fois par leurs alliés.",
                "<h3>Exemples de noms</h3>",
                "Actiléa, Iraiasos, Paxaidio, Rotherion, Zavmandris"
            ],
            "believe_desc"        : [
                "De longues traditions d'isolement ont permis à la plupart des minotaures d'adopter une approche impartiale des événements. Beaucoup ont tendance à adopter un point de vue impartial qui leur permet de s'adapter. Ceux qui ont de mauvaises relations avec les autres humanoïdes, en particulier ceux qui sont victimes de violence ou d'intolérance, peuvent choisir de se retirer dans un repaire, une ruine ou une fortification qu'ils gardent farouchement, ce qui perpétue tristement les histoires de minotaures brutaux.",
                "Les minotaures élevés par leur propre peuple ont tendance à éviter toute association avec les divinités, quelles qu'elles soient, ce qui n'est guère surprenant compte tenu de la légende de leur création. Les êtres divins sont considérés comme mesquins et insensibles, si ce n'est par intention, du moins par l'ampleur de leur pouvoir. De nombreux minotaures adoptent des philosophies logiques ou spirituelles comme un moyen de se réconcilier avec leur existence. Les mystères sont des énigmes qui n'ont pas encore trouvé de réponse, mais qui peuvent être expliquées par une réflexion et une étude approfondies. Lorsque les minotaures décident de vénérer des divinités, ils sont principalement attirés par celles qui s'intéressent à l'amélioration et à la maîtrise de soi, comme Irori et Néthys.",
                "<p><strong>Édits populaires</strong></p>",
                "construire des architectures à la beauté durable, chercher des énigmes toujours plus complexes, perfectionner ses propres dons",
                "Anathème populaire",
                "laisser le destin aux mains des divinités plutôt qu'à l'initiative d'un mortel, laisser passer l'occasion d'enquêter sur un mystère"
            ],
            "start_life"          : 10,
            "body_size"           : "G",
            "speed"               : 7,
            "characteristic_bonus": [
                "Force",
                "Constitution",
                "Libre"
            ],
            "characteristic_malus": [
                "Charisme"
            ],
            "language"            : [
                "commun",
                "jotun"
            ],
            "language_sup"        : [
                "nanique",
                "féerique",
                "pierreux",
                "sakvroth"
            ],
            "sens"                : "Vision dans le noir.",
            "legacies"            : [
                "Minotaure blocâme",
                "Minotaure des cavernes de glace",
                "Minotaure itinérant",
                "Minotaure petitecorne",
                "Minotaure taureau fantôme",
                "Minotaure traqueur"
            ]
        },
        {
            "name"                : "Nain",
            "traits"              : [
                "Nain",
                "Humanoïde"
            ],
            "general_desc"        : [
                "Les nains ont une réputation bien métirée de peuple sévère et stoïquemais ils ont aussi un zèle débridé et une profonde valeur pour l'artisanat. Aux yeux d'un étranger, ils peuvent sembler méfiants et claniques, mais aux yeux de leurs amis et de leur famille, ils sont chaleureux et pleins d'attentions. Bien qu'il soit difficile de gagner la confiance d'un nain, une fois obtenue, elle est aussi solide que l'acier.",
                "Si vous voulez jouer un personnage dur comme la pierre, un aventurier têtu et implacable, avec un mélange de dureté et de profonde sagesse, vous devriez jouer un nain.",
                "Vous : <ul><li>Vous efforcez de préserver votre honneur personnel et refusez de reculer.</li><li>Appréciez l'artisanat de qualité sous toutes ses formes et insistez pour que ce soit la norme pour tout votre équipement.</li></ul>",
                "Les autres : <ul><li>Vous considèrent comme têtu, bien que le fait que ce soit tantôt un atout tantôt un inconvénient varie d'un moment à l'autre.</li><li>Reconnaissent le profond lien qui vous unissent à votre famille, à votre héritage et à vos amis.</li></ul>"
            ],
            "physical_desc"       : [
                "Les nains sont petits et trapus. Ils mesurent environ 30 cm de moins que la plupart des humains. Ils ont des corps amples et compactent et une carrure imposante. Les nains de tous les genres sont fiers de leurs longs cheveux et de leurs barbes, qu'ils tressent généralement selon des schémas élaborés. Une longue barbe est un signe de maturité et d'honneur parmi les clans nains.",
                "Les nains atteignent généralement leur maturité physique vers 25 ans, bien que leur culture traditionaliste accorde plus de valeur aux cérémonies de passage à l'âge adulte uniques à chaque clan qu'atteindre un certain âge. Un nain typique peut vivre près de 350 ans."
            ],
            "society_desc"        : [
                "Bien que les antiques empires des nains soient tombés il y a bien longtemps, submergés par les assauts de des ennemis orcs et gobelinoïdes, les nains d'aujourd'hui ont conservé nombre de qualités qui les ont propulsés vers la grandeur : le courage, le bon sens et une opiniâtreté dans leurs entreprises. Les nains vivent dans des Citadelles célestes réparties à la surface. Presque tous les nains partagent la passion pour le travail de la pierre, du métal et de leur famille.",
                "Peu de nains sont aperçus sans leur dague de leur clan passée à la ceinture. Cette dague est forgée juste avant leur naissance et propre à leur clan. Les nains honorent leurs enfants en leur donnant le nom de leurs ancêtres ou des héros nains. Lorsqu'ils se présentent, les nains ont tendance à indiquer leur famille et leur clan, plus tout nombre de liens familiaux et honorifiques.",
                "<h3>Exemples de noms</h3>",
                "Agna, Bodill, Dolgrin, Edrukk, Grunyar, Ingra, Kazmuk, Kotri, Lupp, Morgrym, Rogar, Rusilka, Torra, Yangrit",
                "Dague de clan Vous obtenez gratuitement une Dague de clan car elle vous a été donnée à votre naissance par votre clan. La vente de cet objet est un tabou terrible et vous vaudrait le dédain des autres nains."
            ],
            "believe_desc"        : [
                "Les nains tendent à accorder de la valeur à l'honneur et suivent fermement les traditions de leurs clans et royaumes. Ils ont un fort sens de l'amitié et de la justice, abien qu'ils soient souvent très particuliers à propos de ceux qu'ils considèrent comme un ami. Ils travaillent dur et jouent plus dur encore — surtout lorsque de la bière forte est impliquées. Torag, dieu du peuple nain, est la divinité primaire des nains bien que vénérer les membres de la famille de Torag soit aussi courant.",
                "<h4><strong>Édits populaires</strong></h4>",
                "créer de l'art qui soit utile, protéger votre communauté contre ceux qui voudraient s'en prendre à elle, garder sa dague de clan à proximité",
                "Anathème populaire",
                "laisser une activité ou une promesse non achevée, abandonner sa famille"
            ],
            "start_life"          : 10,
            "body_size"           : "M",
            "speed"               : 6,
            "characteristic_bonus": [
                "Constitution",
                "Sagesse",
                "Libre"
            ],
            "characteristic_malus": [
                "Charisme"
            ],
            "language"            : [
                "Commun",
                "Nain"
            ],
            "language_sup"        : [
                "gnomien",
                "gobelin",
                "jotun",
                "orquien",
                "pierreux",
                "sakvroth"
            ],
            "sens"                : "Vision dans le noir",
            "legacies"            : [
                "Nain béni-de-la-forge",
                "Nain coeurélémentaire",
                "Nain de l'enclume",
                "Nain des forges",
                "Nain des roches",
                "Nain gardemort",
                "Nain gardeserment",
                "Nain sang-ancien",
                "Nain sang-fort"
            ]
        },
        {
            "name"                : "Orc",
            "traits"              : [
                "Humanoïde",
                "Orque"
            ],
            "general_desc"        : [
                "Les orcs sont forgés dans le creuset de la violence et du conflit, souvent dès le moment où ils naissent. Comme ils vivent des vies qui sont fréquemment interrompues brutalement, les orcs se révèlent en testant leurs forces contre des adversaires de valeur, en défiant souvent un membre de plus haut rang pour la domination. Nombre d'orcs luttent souvent pour pouvoir être acceptés parmi les autres communautés qui les voient fréquemment comme des brutes. Ceux qui gagnent la loyauté d'un ami orc découvrent, quoi qu'il en soit, bientôt que la fidélité d'un orc et son honnêteté n'ont pas leur pareille. La culture orque enseigne qu'ils sont façonnés par les défis auxquels ils survivent, et que les plus méritants survivent aux plus grandes épreuves. Les orcs qui atteignent à la fois la vieillesse et ont obtenu de grands triomphes inspirent un immense respect.",
                "Si vous voulez un personnage qui est robuste, sans peur et excelle dans les prouesses physiques, vous devriez jouer un orc.",
                "Vous pourriez... : <ul><li>Attendre impatiemment n'importe quelle chance de prouver votre force dans un défi physique.</li><li>Penser que mourir lors d'un combat glorieux est préférable à une mort de vieillesse ou de maladie.</li></ul>",
                "Les autres : <ul><li>Vous voient comme violent ou manquant de discipline.</li><li>Admirent votre franc-parler et votre franche honnêteté.</li></ul>"
            ],
            "physical_desc"       : [
                "Les orcs sont grands et puissamment bâtis, avec des bras longs et des jambes trapues. De nombreux orcs atteignent 2,1 m de hauteur, bien qu'ils tendent à adopter des postures avec leurs jambes largement arquées et en étant avachis au niveau des épaules. Les orcs ont une peau rugueuse, des os épais et des muscles durs comme la pierre, ce qui les rend particulièrement aptes à la guerre et à d'autres tâches physiquement exigeantes. La couleur de la peau d'un orc est habituellement verte, bien que d'autres orcs présentent d'autres couleurs de peau qui reflètent leur adaptation à leur environnement.",
                "Les orcs considèrent que des constitutions puissantes, une peau pleine de balafres, de grandes défenses et des tatouages, sont attirantes, quel que soit leur genre. Les orcs atteingent la maturité physique aux alentours de 17 ans,mais beaucoup d'entre eux parviennent à vivre jusqu'à 60 ans."
            ],
            "society_desc"        : [
                "La plupart des communautés orques - connues sous le nom de forteresse - se définissent elles-mêmes au travers de deux choses : la douleur et la gloire. Chacune leur accorde le respect dans une mesure égale, tant que la douleur est supportée avec stoïcisme. Un orc portant de nombreuses blessures qui marche sans se plaindre avec une jambe cassée mérite l'admiration au même titre que celui qui obtient une grande victoire sur le champ de bataille. De plus, la puissance définit les dynamiques parmi les familles et au sein des forteresses. Les plus faibles des orcs travaillent au service des plus forts, le pouvoir changeant constamment entre les orcs qui ont prouvé leur puissance. Les orcs ont tendance à partager les tâches familiales, à élever les enfants en communauté et à répartir les responsabilités entre tous les membres de la forteresse.",
                "<h3>Exemples de noms</h3>",
                "Arkus, Ausk, Durra, Grask, Grillgiss, Krugga, Mahja, Murdut, Ollak, Onyat, Thurk, Uirch, Unach"
            ],
            "believe_desc"        : [
                "Un dicton orc courant dit : \"Vous êtes les cicatrices qui vous façonnent\". Des vies violentes et chaotiques sur des terres violentes et chaotiques signifient que la plupart des orcs ont tendance à s'attendre à la violence et à l'accepter. Lamashtu et Rovagug sont couramment vénérés par les communautés orques les plus enclines à la guerre, tandis que les moins violentes vénèrent des dieux comme Sarenrae, dont les principes de feu, de rédemption et de gloire ont un certain attrait pour les sensibilités orques.",
                "Bien qu'il existe des divinités orques, leur culte est étonnamment peu répandu parmi les orcs. Les orcs pensent que si une créature possède un visage et un nom, elle peut être tuée et leurs propres divinités sont donc souvent des cibles plutôt que des objets de vénération. Certaines forteresses orques enseignent que les plus importants membres de la forteresse peuvent avoir la chance de défier les divinités orques pour obtenir une place au sein du panthéon.",
                "<h4>Édits populaires</h4>",
                "Devenir encore plus fort, partager la connaissance obtenue dans la douleur, détruire les morts-vivants",
                "<h4>Anathèmes populaires</h4>",
                "accepter la défaite sans épreuve de force, refaçonner ou réanimer une créature en quelque chose d'inférieur"
            ],
            "start_life"          : 10,
            "body_size"           : "M",
            "speed"               : 7,
            "characteristic_bonus": [
                "Force",
                "Libre"
            ],
            "language"            : [
                "Commun",
                "Orquien"
            ],
            "language_sup"        : [
                "gobelin",
                "jotun",
                "pierreux",
                "sakvroth"
            ],
            "sens"                : "Vision dans le noir",
            "legacies"            : [
                "Orc batailleur",
                "Orc des badlands",
                "Orc hivernal",
                "Orc des moussons",
                "Orc des profondeurs",
                "Orc scarifié",
                "Orc sépulcral"
            ]
        },
        {
            "name"                : "Squelette",
            "traits"              : [
                "Rare",
                "Squelette",
                "Mort-vivant"
            ],
            "general_desc"        : [
                "Les squelettes sont considérés parmi les plus faibles type de créatures mortes-vivantes. Ce sont typiquement des créatures dépourvues d'intelligence, manquant des nombreuses capacités qui font des autres morts-vivants une menace sérieuse. Quoi qu'il en soit, les os animés des dragons, des géants et d'autres grandes bêtes font de plus puissants adversaires. De puissantes créatures vivantes peuvent retenir une partie de leur puissance et de leur intellect en étant relevées comme squelettes. Certains nécromants font de leurs plus puissants ennemis des serviteurs morts-vivants squelettes en partant du principe qu'ils en auront le contrôle.",
                "Les aventuriers squelettes étaient généralement compétents et puissants dans leur vie antérieure. Grâce à une force de volonté inébranlable ou à des circonstances extraordinaires, leur ego et leurs idéaux persistent même après leur mort. Cependant, le fait même de se relever en tant que mort-vivant squelettique est un traumatisme. Les souvenirs de l'ancienne vie sont généralement fragmentés ou flous, si tant est que l'on puisse s'en souvenir. Pour certains, ces souvenirs reviennent avec le temps ; pour d'autres, ils ont disparu à jamais. Dans la plupart des cas, cela dépend de la façon dont le squelette se perçoit : soit comme la poursuite de la personne qu'il était auparavant, soit comme un être entièrement nouveau.",
                "Les aventuriers squelettes se distinguent souvent des autres squelettes en s'habillant de manière aussi flamboyante que leur position le leur permet. De grands bonnets à plumes, des armures décorées, des soieries et des broderies ou des bijoux tapageurs sont probablement les éléments de base de leur garde-robe. Certains gravent des \"tatouages\" complexes sur leurs os ou peignent leurs crânes pour conserver un sentiment d'identité que les squelettes simples n'ont pas et pour signaler aux vivants qu'ils ne sont pas comme les autres morts-vivants.",
                "Les aventuriers squelettes doivent s'accommoder de leur nouvelle identité. Ils ne sont pas liés par les limitations des vivants et sont souvent sous-estimés.",
                "Vous : <ul><li>travaillez plus durement que la plupart pour prouver que vous êtes un individu capable et à part.</li><li>vous lancez face au danger sans vous soucier de la sécurité de votre corps de mort-vivant.</li><li>cherchez désespérément à être accepté dans la société dans laquelle vous évoluiez autrefois avec aisance.</li></ul>",
                "Les autres : <ul><li>supposent que vous êtes le serviteur d'un nécromancien, travaillant pour faire avancer ses desseins.</li><li>ont des difficultés à avoir de l'empathie pour vous.</li><li>considèrent votre état de mort-vivant avec pitié ou envie.</li></ul>"
            ],
            "physical_desc"       : [
                "En dehors de leur absence totale de chair et d'organes, les squelettes ont une apparence très variable, reflétant la grande diversité de toutes les formes d'êtres vivants. Ils peuvent être grands, petits ou entre les deux. Les squelettes des créatures dotées de cornes, d'ailes ou de queues les conservent, bien qu'elles soient généralement inutiles à l'état de squelette. Les squelettes issus d'un cadavre frais ont tendance à avoir des os d'un blanc éclatant alors que ceux des squelettes plus anciens ont tendance à être gris ou jaunis. Les squelettes qui se sont aventurés pendant un certain temps possèdent souvent de légères lignes qui sillonnent leurs os comme des cicatrices, indiquant les endroits où ils ont été blessés lors de batailles précédentes.",
                "Mort-vivance Vous disposez des Avantages de mort-vivant basiques . Pour apaiser votre faim de mort-vivant, vous ne mangez pas de chair comme les goules et ne buvez pas de sang comme les vampires mais vous collectez des os que vous pouvez utiliser pour vous aider à vous réparer."
            ],
            "society_desc"        : [
                "Sur Golarion, les squelettes intelligents se regroupent rarement en nombre important pour constituer une forme de communauté. Même en Geb, où leur nombre est le plus élevé, ils se mélangent typiquement avec d'autres morts-vivants plutôt que de se regrouper ensemble. Nombre de squelettes préfèreront tenir compagnie à ceux qui se souviennent d'eux lors de leur vie antérieure (bien que de tels souvenirs puissent les conduire aussi facilement à de la révulsion consécutivement à l'énergie négative qui les a imprégné). Les squelettes du Geb sont habituellement considérés comme des membres de la classe des serviteurs et parviennent rarement à se hisser vers des positions sociales plus enviables.",
                "En dehors du Geb, les squelettes dont beaucoup plus souvent solitaires. Certains peuvent se cacher dans les marges de la société ou se déplacer en son sein en se déguisant, mais il leur est difficile de se faire accepter parmi les vivants. Lorsqu'ils ne sont pas craints dans les lieux comme le Nidal ou la Sékamine, ils ne sont pas non plus près d'être respectés.",
                "Si les morts-vivants sont presque toujours maléfiques, certains squelettes intelligents parviennent à ne pas succomber à la corruption de l'énergie négative qui les alimente. Mis à part la tendance à tendre vers le mal avec le temps, les squelettes penchent généralement vers les alignements de leurs créateurs ou de leurs anciennes personnalités. Les squelettes qui n'ont pas de loyauté ou d'allégeance particulière tendent vers un alignement neutre mauvais ou neutre s'ils peuvent éviter le mal.",
                "Les squelettes qui acceptent pleinement leur état de mort-vivant vénèrent souvent des dieux de la mort, comme Urgathoa, alors que ceux qui la rejettent se tournent généralement vers les dieux de la vie et de la rédemption. Les divinités libérales dépourvus d'un zèle dogmatique anti-morts-vivants, comme Shélyn, sont populaires parmi ceux qui souhaitent lutter contre leurs influences destructrices et s'élever pour devenir quelque chose de supérieur au but pour lequel ils ont pu être créés."
            ],
            "start_life"          : 6,
            "body_size"           : "M",
            "speed"               : 7,
            "characteristic_bonus": [
                "Dextérité",
                "Charisme",
                "Libre"
            ],
            "characteristic_malus": [
                "Intelligence"
            ],
            "language"            : [
                "Commun",
                "Nécril"
            ],
            "language_sup"        : [
                "aklo",
                "diabolique",
                "elfique",
                "nanique",
                "orquien",
                "sakvroth"
            ],
            "legacies"            : [
                "Squelette compact",
                "Squelette fluctuant",
                "Squelette générique",
                "Squelette monstrueux",
                "Squelette robuste"
            ]
        },
        {
            "name"                : "Surki",
            "traits"              : [
                "Rare",
                "Humanoïde",
                "Surki"
            ],
            "general_desc"        : [
                "Les surkis sont une espèce insectoïde qui se nourrit de la magie latente du monde qui les entoure. En tant qu'espèce souterraine originaire d'Ombreterre, les surkis ont rarement été vus à la surface et toujours avec de longues pauses entre deux observations historiques. Cela est dû au cycle de vie des surkis - de longues périodes de sommeil suivies de ce que l'on appelle des \"creusements de génération\", au cours desquels ils migrent sur de grandes distances en réponse aux événements souterrains. La guérison de la Plaie du Monde a donné lieu à l'une des plus grandes migrations de ce type de leur histoire, amenant les surkis à remonter dans les cavernes et les passages de la cicatrice de Sarkoris et à émerger à la surface pour la première fois depuis de nombreuses années. Depuis leur apparition, plusieurs petites colonies de surkis se sont établies dans des coins isolés du Sarkoris, cataloguant avec voracité la faune, la magie et les divers autres habitants de la région au fur et à mesure de l'exploration de l'environnement étranger de la surface.",
                "Plutôt que de se nourrir de manière conventionnelle, les surkis sont des filtreurs absorbant la magie de l'air, du sol, des plantes, de la pierre et de pratiquement tout autre matériau. Cette magie est raffinée et séquestrée dans des nodules à travers le corps du surki au cours de son cycle de vie, qui comprend trois phases distinctes : larve, adulte et évolué. À chaque étape, les surkis utilisent la magie qu'ils ont accumulée pour subir une métamorphose spectaculaire et passer au stade suivant de leur vie, en développant des adaptations qui les aideront à survivre dans n'importe quel environnement. Les surkis varient donc considérablement d'un individu à l'autre. Chaque surki raconte l'histoire de ses aventures et du rôle qu'il a choisi de jouer dans l'environnement grâce à sa combinaison unique d'adaptations.",
                "Si vous voulez jouer un personnage qui explore Golarion pour la première fois, avec une capacité d'adaptation illimitée et un lien fort avec la magie, vous devriez jouer un surki.",
                "Vous pourriez... : <ul>    <li>Ressentir un lien puissant  avec le monde qui vous entoure, percevnat la magie latente en toute chose.</li>    <li>Être poussé à voyager loin ou apprendre autant que vous pouvez à propos de votre foyer.</li>    <li>Prêter une attention particulière à la manière dont les autres vivent dans des environnements qui ne vous sont pas familiers.</li></ul>",
                "Les autres : <ul>    <li>Confonde l'enthousiasme que vous éprouvez envers vos adaptations avec de l'orgueil vantard.</li>    <li>Trouvent votre enthousiasme pour les nouveaux peuples, les nouveaux lieux et kes choses attachant et stimulant.</li>    <li>Ont confiance en vos perceptions magiques plutôt qu'à leurs propres atouts dans les situations délicates.</li></ul>"
            ],
            "physical_desc"       : [
                "Les trois stades de vie des surkis sont très différents les uns des autres. Les larves de surkis passent les 10 à 100 premières années de leur vie en sommeil à l'intérieur de leurs œufs, attendant de sortir lorsqu'elles ont accumulé suffisamment de magie latente et que les conditions environnementales sont remplies. Les larves de surkis mesurent environ 60 centimètres de long et ressemblent à des larves avec plusieurs nodules luminescents visibles à travers leur chair translucide. Leur tête est chitineuse, ronde et dépourvue d'yeux et ils se dirigent principalement grâce à leur capacité à percevoir la magie. Quatre de leurs six pattes sont petites, mais celles antérieures sont de grandes et puissantes griffes fouisseuses qu'elles utilisent pour creuser des tunnels dans la terre et pour communiquer avec les autres larves de leur génération lorsqu'elles s'éloignent de leur nid. Une fois qu'elles ont voyagé loin et accumulé suffisamment de magie, elles entrent dans un cocon pendant plusieurs jours et en ressortent sous la forme adulte que l'on voit le plus souvent à la surface.",
                "Les surkis adultes ont une forme à peu près bipède, se tenant sur deux membres à articulations multiples et ayant deux bras qui se terminent par des griffes à trois doigts utilisées à la fois pour creuser et pour produire des sons percussifs utilisés dans la langue des surkis. Ils possèdent deux antennes à plumeau et deux longs barbillons sensoriels situés de part et d'autre de leurs mandibules. Les surkis ont une forme arrondie caractéristique avec plusieurs plaques chitineuses brun rouille ou orange le long de leur dos et les vêtements et la mode surki ont tendance à incorporer des formes arrondies ou des ceintures autour et sous leurs plaques. Leurs nodules magiques sont répartis sur l'ensemble de leur corps, regroupés au niveau de l'abdomen, des épaules et de chaque membre.",
                "Ces nodules continuent à accumuler la magie au fil de leur vie, en l'utilisant pour créer de nouvelles adaptations, souvent annoncées par des schémas intriqués luminescents dans la chitine entourant le lieu du changement.",
                "La dernière étape du cycle de vie du surki est connue sous le nom de forme évoluée, une fois que le surki a entamé sa grande métamorphose. Un surki adulte forme une chrysalide et se transforme rapidement au cours d'une seule soirée. Moins spectaculaire physiquement que le passage de la larve à l'âge adulte, la forme évoluée apporte avec elle de profondes capacités magiques résultant d'une vie entière d'absorption et de raffinement de la magie. Les nodules des surkis évolués se métamorphosent en organes complexes capables de projeter une magie tangible à des fins diverses, qu'il s'agisse d'appareils de fouille faits de force pure ou d'ailes lumineuses qui défient la gravité. Cette forme finale est l'expression ultime de l'individualité et des adaptations de chaque surki, une forme parfaitement adaptée à l'environnement qu'il choisit d'habiter ou au rôle qu'il souhaite remplir.",
                "Magiphage Les nodules variés à travers votre corps aspirent la magie latente du monde qui vous entoure. Vous n'avez pas besoin de manger et de boire à moins d'être dans un environnement spécialement pauvre en magie (comme dans la Désolation de mana). Choisissez quelle est la tradition magique que vous avez le plus consommé sous votre forme larvaire. Ce type de magie est devenu si enraciné dans votre corps qu'il change la tradition de tous les sorts et les actions magiques de surki qui appartiennent à cette tradition."
            ],
            "society_desc"        : [
                "La société surkie accorde une grande importance à l'individualité et à l'expression personnelle. Chaque surki est censé trouver sa propre façon de faire les choses et l'innovation est un accomplissement très apprécié. Les surkis sont également très proches de leur environnement. Ils ne font aucune distinction entre les plantes et les animaux, reconnaissant que chaque être remplit une part importante pour l'environnement. Cette qualité a conduit les surkis à créer des communautés qui ont le moins d'impact possible sur l'environnement, en tissant des soies autour des plantes et des champignons pour les inciter à pousser et former des abris et des murs. Le bois et les autres ressources végétales sont rarement récoltés d'une manière considérée comme traditionnelle par la plupart des autres sociétés de Golarion. Ces ressources sont réparties en sections stratégiquement cultivées et récoltées avec suffisamment de précision pour ne pas tuer la plante, lorsque c'est possible.",
                "Les relations entre surkis sont axées sur la complémentarité de leurs adaptations. Les surkis sont généralement polyamoureux et peuvent entretenir des liens étroits avec de nombreuses autres personnes. Les surkis sont une espèce unisexe et, bien qu'ils comprennent les concepts de genre et d'orientation tels qu'ils sont vécus par d'autres ascendances, de nombreux surkis trouvent absurde l'idée de choisir de ne pas se lier à quelqu'un sur la base de son anatomie ou de descriptions personnelles absurdes. Ils choisissent plutôt de courtiser ceux qui ont une personnalité, des talents ou des adaptations qui augmentent les leurs de manière inattendue, comme l'utilisation de soies tissées pour renforcer un tunnel creusé dans la roche. Néanmoins, dans la société surkie, l'attirance est une notion aussi complexe que n'importe quelle autre et les surkis liés entre eux expriment souvent leurs sentiments à l'égard d'une personne aimée par une description personnelle qui exprime ce qu'ils apprécient dans la relation. Par exemple, un surki peut présenter son partenaire comme \"Celui qui parle calmement et qui enrichit mon sol\".",
                "Seuls les surkis adultes sont capables de se reproduire, ce qu'ils font par le biais de la parthénogénèse. N'importe quel adulte surki peut déposer un œuf qu'il choisit, bien que la cause du processus dépense tellement de la magie emmagasinée dans leurs nodules, peu de surkis disposent d'un œuf toutes les quelques années. Plusieurs de ces œufs sont conservés dans un zone protégée de la communauté, attendant le prochain creusement de génération. Lorsque les œufs sont prêts, ils éclosent en masse et les larves coordonnent leur départ, attirées par la magie comme un phare à travers la terre et la pierre pour trouver un nouveau lieu pour s'établir.",
                "La vie familiale diffère largement pour les surkis. Les œufs déposés en dehors d'un creusement de génération sont soignés par le \"parent\" surki jusqu'à ce que la larve émerge. Les nouvelles larves blanches du village sont généralement livrées à elles-mêmes, autorisées à s'aventurer en dehors du village ou même à quitter la communauté. Souvent, les larves du village trouvent leur première maison dans le sol des fermes communautaires, où elles se nourrissent de la magie naturelle du sol et de la vie végétale. Ces jardins servent également d'école pour ces larves, car les surkis adultes et évolués qui s'occupent des jardins conversent régulièrement avec les larves, leur racontant les histoires de leur jeunesse et les leçons qu'ils ont apprises des autres. Les surkis nés prématurément ou ceux dont les ganglions ne fonctionnent pas bien sont souvent liés à des ostillis, de petits symbiotes amorphes qui augmentent leur capacité à absorber les nutriments de la magie.",
                "Les surkis choisissent leur nom à l'adolescence. Chaque surki possède un nom appelé \"racine\" ou \"larvaire\" qui ne peut être produit que par leurs membres antérieurs. Les adultes incorporent généralement tout ou partie de leur nom racine avant le nom qu'ils ont choisi, bien que l'on ne s'attende pas à ce qu'il soit répété, en particulier par ceux d'autres ascendances qui ne possèdent pas l'exosquelette qui est nécessaire pour \"prononcer\" le nom. Le nom racine, bien qu'il soit montré avec fierté, est considéré comme la propriété personnelle du surki qui le possède et la répétition de la partie racine du nom d'un surki est considérée comme une impolitesse par la plupart des gens, équivalant à un vol. Les noms choisis par les surkis représentent généralement une qualité personnelle qu'ils admirent le plus ou une réalisation dont ils sont fiers. En vieillissant, les surkis peuvent changer le nom qu'ils ont choisi pour mieux correspondre à ce qu'ils pensent être devenus. Lorsque les surkis meurent, tous les verbes au présent utilisés dans leur nom deviennent des verbes au passé.",
                "<h3>Exemples de noms</h3>",
                "Porteur de lourds rochers, Tisseurs de toiles imbriquées, Avec la chanson la plus habile, Qui brille ardemment, Ceux dont les schémas sont larges, Ceux dont la voix est de la musique"
            ],
            "believe_desc"        : [
                "Le lien qu'entretiennent les surkis avec leur environnement les amène à vénérer des divinités naturelles. Selon leurs traditions ancestrales, chaque créature possède un esprit unique, les espèces clés occupant un rôle divin au sein de leur écosystème. Selon les traditions des surkis, les surkis et les autres cultures ne font pas partie de ce cycle spirituel mais, avec le temps, l'attention et la pratique, on peut y être admis avec la bénédiction des espèces clés de l'environnement.",
                "Parmi les communautés surkies de Sarkoris, les fidèles de Gozreh et de Sturovenen ont rapidement grandi. Les surkis qui se dévouent à une divinité sont plus enclins à choisir de réprésenter leur propre environnement ou le monde naturel comme un tout. Les divinités dont les domaines incluent le voyage ou le changement sont aussi populaires parmis les fidèles surkis.",
                "Pour les surkis, il est très important de permettre à la vie de suivre son cours naturel. La mort, la violence et la guerre ont toutes leur place et leur dessein.",
                "<p><strong>Édits populaires</strong></p>",
                "encourager les autres à découvrir leur véritable personnalité, protéger et nourrir les écosystèmes naturels, travailler avec autrui pour promouvoir les relations symbiotiques",
                "Anathème populaire",
                "forcer quelqu'un à changer avant qu'il ne soit prêt"
            ],
            "start_life"          : 8,
            "body_size"           : "M",
            "speed"               : 7.5,
            "characteristic_bonus": [
                "Constitution",
                "Libre"
            ],
            "language"            : [
                "Commun",
                "Surki"
            ],
            "language_sup"        : [
                "elfique", "Féerique", "Sakvroth"
            ],
            "sens"                : "Vision dans le noir",
            "legacies"            : [
                "Surki à carapace dure",
                "Surki à élytre",
                "Surki briseur",
                "Surki lanterne"
            ]
        },
        {
            "name"                : "Tengu",
            "traits"              : [
                "Peu courant",
                "Humanoïde",
                "Tengu"
            ],
            "general_desc"        : [
                "Les tengus sont tout à la fois des adeptes de la survie et des personnes qui aiment la conversation, qu'on peut trouver vivants dans des étendues sauvages ou faisant leur nid dans les villes denses. Ils accumulent les connaissances, les outils et les compagnons, en les ajoutant à leur collection au cour de leurs voyagent.",
                "La diaspora tengu s'est répandue au travers de Golarion à la recherche d'une meilleure vie, apportant leur savoir-faire dans la fabrication des lames vers les terres éloignées de leur foyer. Dans les régions maritimes, les tengus travaillent notablement comme pêcheurs, forgerons ou 'avaleurs de malédiction' — des membres d'équipages de navires qui sont réputés, à tort ou à raison, pour absorber la malchance. Ayant vécu dans une multiplicité de lieux et de conditions, les tengus tentent de ne pas porter de jugement préconçu sur les individus, bien que leur empressement à s'associer avec des malfrats ait souvent conduit à les considérer avec suspicion.",
                "Si vous voulez jouer un personnage ayant un riche passé en artisanat et en tradition mais qui s'approprie avec joie de nouvelles pratiques, vous devriez jouer un tengu.",
                "Vous pourriez... : <ul><li>Être grégaire et prompt à trouver une compagnie qui vous soit propre.</li><li>Absorber avec voracité les pratiques de ceux qui vous entourent, quelque fois même en oubliant d'où elles proviennent.</li></ul>",
                "Les autres : <ul><li>Sont troublés par votre respect et votre dédain simultanés des traditions.</li><li>Ont du mal à lire vos expressions ou vous regardent avec suspicion et superstition.</li></ul>"
            ],
            "physical_desc"       : [
                "Les tengus ont nombre de caractéristiques aviaires. Leurs visages sont pourvus d'un bec aiguisé, leurs poignets couvert d'écailles et le bas de leurs jambes se termine par des serres. Comme les chaussures fermées ont tendance à mal leur aller, à moins qu'elles ne soient taillées sur mesure, nombre de tengus portent des sandales ouvertes ou se déplacent pieds nus. Les tengus mesurent rarement plus de 1,80 mètre et ils sont même plus légers que leur frêle stature ne le suggère, car ils ont les os creux. Un petit nombre de tengus possèdent des vestiges d'ailes.",
                "Bec aiguisé Avec votre bec aiguisé, vous n'êtes jamais dépourvu d'une arme. Vous disposez d'une attaque à mains nues de bec qui inflige 1d6 dégâts perforants. Votre bec est dans le groupe d'arme pugilat et possède les traits finesse et à mains nues."
            ],
            "society_desc"        : [
                "La plus importante division de la société tengu est entre les tengus qui sont restés dans leur foyer ancestral et ceux qui se sont dispersés à travers le monde. Les tengus se réfèrent à ces deux groupes, respectivement, comme ceux restés 'sur le perchoir' et les 'migrateurs'. Les tengus sur le perchoir tendent à être les plus traditionalistes et conservateurs et sont concentrés sur la préservation de leur culture face à des années d'érosion liée à l'oppression. Les tengus migrateurs, à l'inverse, absorbent voracement la culture des nations variées et des implantations qu'ils considèrent désormais comme leur foyer.",
                "Les tengus sur le perchoir tendent à garder des noms plus traditionnels alors que les migrateurs sont prêts à absorber et à intégrer la culture de ceux qui les entourent",
                "<h3>Exemples de noms</h3>",
                "Arkkak, Chuko, Dolgra, Dorodara, Kakkariel, Kora, Marrak, Mossarah, Pularrka, Rarorel, Ruk, Tak-Tak, Tsukotarra"
            ],
            "believe_desc"        : [
                "Un tengu suit souvent la foi de la région au sein de laquelle il a été élevé, bien que la divinité ancestrale des tengu soit le dieu de la tempête Hei Feng. Avant leur diaspora, les tengus ont pratiqué une foi syncrétique qui a mélangé un culte polythéiste des divinités responsables de la création du monde naturel. Comme le folklore tengu veut que les tengus soient descendus du ciel nocturne à bord d'étoiles filantes pour se reposer sur les plus hauts sommets de Golarion, les rites animistes sont pratiqués sur les montagnes et autres hauts éléments naturels.",
                "<h4><strong>Édits populaires</strong></h4>",
                "protéger les traditions des tengus, adopter les leçons des autres cultures, rechercher les merveilles naturelles",
                "Anathème populaire",
                "perdre le contrôle de vos émotions"
            ],
            "start_life"          : 6,
            "body_size"           : "M",
            "speed"               : 7,
            "characteristic_bonus": [
                "Dextérité",
                "Libre"
            ],
            "language"            : [
                "Commun",
                "Tengu"
            ],
            "language_sup"        : [
                "elfe",
                "fée",
                "halfelin",
                "gnomien",
                "nanique"
            ],
            "sens"                : "Vision nocturne",
            "legacies"            : [
                "Tengu à serres",
                "Tengu battu par les vents",
                "Tengu dent de chien",
                "Tengu enfant du ciel",
                "Tengu gardemontagne",
                "Tengu maudit",
                "Tengu plonge vague"
            ]
        },
        {
            "name"                : "Tripkee",
            "traits"              : [
                "Peu courant",
                "Tripkee",
                "Humanoïde"
            ],
            "general_desc"        : [
                "Les tripkees sont un peuple timide et prudent qui cherche généralement à éviter de se laisser entraîner dans les affaires compliquées et dangereuses des autres. En dépit de leur apparence et de leur petite taille, les tripkees entreprennent souvent des actions audacieuses et nobles lorsque la situation l'exige.",
                "Les tripkees sont des survivalistes reclus de la cime des arbres qui récoltent les richesses de leur foyer, en utilisant la canopée des comme des fortifications naturelles contre les menaces que posent les prédateurs plus gros. Leur recours à la ruse et à des outils simples leur a valu d'être souvent décrits à tort comme des êtres rudimentaires, ce qui ne rend pas justice à leur habileté à cultiver des vergers cachés et des chaussées camouflées, dissimulées dans les nations de la canopée. Les tripkees sortent le plus souvent de leur forêt pour commercer, explorer et combattre les menaces qui pèsent sur le monde.",
                "Si vous voulez un personnage qui est d'une stature petite mais grand en esprit et possède des qualités d'une grenouille arboricole, vous devriez jouer un tripkee.",
                "Vous pourriez... : <ul><li>Rechercher des moyens astucieux d'exploiter votre environnement pour surmonter les difficultés.</li><li>Vous faire des amis lentement, préoccupé par les récits édifiants d'étrangers exploiteurs.</li></ul>",
                "Les autres : <ul><li>Font confiance à votre approche impartiale et mesurée pour comprendre les situations et résoudre les problèmes.</li><li>S'écartent de vous craignant que vous toucher puisse s'avérer toxique.</li></ul>"
            ],
            "physical_desc"       : [
                "Les tripkees ressemblent à des grenouilles arboricoles humanoïdes, avec des yeux surdimensionnés, une large bouche et un physique frêle. Leur frêle ossature et leurs gros orteils leur procurent une excellente adhérence lorsqu'ils grimpent, tandis que leur peau colorée constitue un camouflage fiable qui varie selon leur environnement d'origine - vert et brun pour les groupes vivants dans la jungle, bleu et orange pour les communautés lacustres et de nombreuses autres couleurs entre les deux. Un tripkee grandit rapidement, atteignant une taille adulte d'environ 70 cm de haut environ 3 ans après son éclosion, bien qu'il ne soit considéré comme adulte que vers l'âge de 12 ans. Les tripkees vivent rarement plus de 60 ans, bien que des individus exceptionnels vivent quelques fois jusqu'à un siècle.",
                "Grimpeur naturel Vous obtenez un bonus de circonstances de +2 aux tests d'Athlétisme pour Escalader."
            ],
            "society_desc"        : [
                "Les tripkees mènent un mode de vie sophistiqué de chasseur-cueilleur grâce auquel ils remodèlent le paysage en fonction de leurs besoins : construction de déversoirs pour piéger les poissons, ensemencement d'arbres fruitiers, semis d'une couverture de feuillus pour les chasses futures et d'autres techniques qui échappent souvent à l'œil de l'agriculteur. Ces stratégies reposent sur la coopération communautaire ainsi que sur la dispersion des populations, de sorte que les tripkees vivent généralement dans de petits villages, chacun faisant partie d'un réseau complexe d'alliances et de relations. L'isolement a préservé la vie et le mode de vie des tripkees pendant des millénaires mais ils se trouvent de plus en plus menacés par des maux anciens comme par de nouveaux explorateurs.",
                "<h3>Exemples de noms</h3>"
            ],
            "believe_desc"        : [
                "Ayant appris à attendre, observer et respecter les processus naturels de la vie et de la mort, nombre de tripkees adoptent des attitudes patientes. Ceux qui jouent un rôle plus actif dans la répression de la cruauté peuvent rejoindre des organisations qui mêlent religion et philosophie, comme les gardiens de fiélons tripkee qui absorbent un être impie dans leur âme pour contenir et éventuellement transformer sa méchanceté par leurs propres actes vertueux. Les divinités de la nature comme Gozreh ou Érastil obtiennent souvent le respect des tripkees, mais les communautés préfèrent généralement des divinités moins importantes et plus intimes comme les seigneurs empyréens, les huissiers psychopompes ou les aînés des fées.",
                "<h4><strong>Édits populaires</strong></h4>",
                "améliorer sa partie du monde sans nuire aux autres, pratiquer la patience lorsque c'est possible",
                "Anathème populaire",
                "créer une architecture qui supplante le monde naturel, prendre des mesures irréfléchies qui font courir des risques à votre communauté"
            ],
            "start_life"          : 6,
            "body_size"           : "P",
            "speed"               : 7,
            "characteristic_bonus": [
                "Dextérité",
                "Sagesse",
                "Libre"
            ],
            "characteristic_malus": [
                "Force"
            ],
            "language"            : [
                "Commun",
                "tripkee"
            ],
            "language_sup"        : [
                "bourbiérin",
                "chthonien",
                "draconique",
                "elfique",
                "fée",
                "iruxi",
                "thalassique"
            ],
            "sens"                : "Vision nocturne",
            "legacies"            : [
                "Tripkee à longue langue",
                "Tripkee à palmes",
                "Tripkee à peau empoisonnée",
                "Tripkee à peau épaisse",
                "Tripkee aux orteils collants",
                "Tripkee des rivières"
            ]
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