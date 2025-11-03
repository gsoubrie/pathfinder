"use strict";
var DON = {};
DON.GENERAL = {
    ENUM: [
    {
        "name": "Animal de compagnie",
        "level": "1",
        "traits": [
            "Général"
        ],
        "required": [],
        "description": [
            "Vous obtenez un animal de compagnie de taille Très Petite, d'un type que vous choisissez, comme par exemple un chat, un oiseau ou un rongeur. Il possède le trait sbire, ce qui signifie qu'il obtient 2 actions lors de votre tour si vous utilisez l'action Diriger un animal pour lui donner un ordre. Ceci remplace les effets habituels de sports_martial_artsDiriger un animal et vous n'avez pas à tenter un test de Nature. Un animal de compagnie ne peut effectuer de Frappe.",
            "Niveau Le niveau de votre animal de compagnie est égal au vôtre.",
            "Modificateurs et CA Les modificateurs aux jets de sauvegarde et à la CA de votre animal de compagnie sont les mêmes que les vôtres avant d'appliquer les bonus et les pénalités de circonstances. Il utilise 3 + votre niveau pour déterminer ses modificateurs de Perception, d'Acrobaties et de Discrétion, et juste votre niveau comme modificateur pour ses autres tests de compétence. Il n'a pas ou n'utilise pas ses propres modificateurs d'attribut et ne peut jamais bénéficier de bonus d'objet.",
            "Points de vie Votre animal de compagnie possède 5 Points de vie par niveau.",
            "Sens Votre animal de compagnie possède vision nocturne et peut obtenir des sens supplémentaires grâce à des capacités d'animal de compagnie.",
            "Vitesse Votre animal de compagnie se déplace à une Vitesse de 7,50 mètres. Vous pouvez choisir d'avoir un animal de compagnie aquatique à la place, qui respire dans l'eau au lieu de respirer de l'air, qui possède le trait aquatique, aucune vitesse terrestre mais une vitesse de nage de 7,50 mètres.",
            "Capacités d'animal de compagnie Lorsque vous obtenez votre animal de compagnie, choisissez deux des capacités parmi les suivantes. Si votre animal de compagnie est un animal qui possède naturellement une de ces capacités (par exemple un hibou qui possède une vitesse de vol), vous devez sélectionner cette capacité. Votre animal ne peut être un animal de compagnie qui possède plus de capacités à l'état naturel que le maximum permis. Dans certains cas, le MJ pourrait ajouter des pouvoirs de familier aux capacités d'animal de compagnie que vous choisissez.",
            [
                "Amphibie Il obtient le trait amphibie, lui permettant de respirer aussi bien dans l'eau qu'à l'air libre et d'avoir une vitesse de nage et une vitesse terrestre qui est égale à la vitesse la plus élevée entre la vitesse de nage ou la vitesse terrestre.",
                "Dextérité manuelle Il peut utiliser jusqu'à deux de ses membres comme s'il s'agissait de mains pour accomplir des actions de manipulation.",
                "Écholocalisation Votre animal de compagnie peut utiliser son ouïe comme un sens précis dans un rayon de 6 mètres.",
                "Endurant Le montant maximum de Points de vie de votre animal de compagnie augmente de 2 par niveau.",
                "Fouisseur Il obtient une vitesse de creusement de 1,50 mètre, lui permettant de creuser de très petits trous.",
                "Grimpeur Il obtient une vitesse d'escalade de 7,50 mètres.",
                "Odorat Votre animal de compagnie peut utiliser son odorat comme un sens imprécis dans un rayon de 9 mètres.",
                "Rapide Augmentation d'une de ses vitesses de 7,50 mètres à 12 mètres.",
                "Vision dans le noir Il obtient vision dans le noir.",
                "Volant Il obtient une vitesse de vol de 7,50 mètres."
            ],
            "Spécial Vous pouvez obtenir un nouvel animal de compagnie en opérant le réapprentissage de ce don, libérant tout animal de compagnie que vous possédiez auparavant. Si vous obtenez plus tard un familier ou un autre compagnon qui utilise le don Animal de compagnie, vous pouvez immédiatement opérer le réapprentissage de ce don."
        ]
    },
    {
        "name": "Ascendance adoptive",
        "level": "1",
        "traits": [
            "Général"
        ],
        "required": [],
        "description": [
            "Vous êtes entièrement immergé dans la culture et les traditions d'une autre ascendance, que vous soyez né en son sein, obtenue lors d'un rite de passage ou liée à une profonde amitié ou une idylle. Choisissez une ascendance courante à laquelle vous avez accès. Vous pouvez sélectionner des dons ancestraux de l'ascendance choisie, en plus de l'ascendance de votre personnage, tant que les dons ancestraux ne requièrent pas de particularités physiologiques que vous ne possédez pas, comme déterminé par le MJ."
        ]
    },
    {
        "name": "Blocage au bouclier r",
        "level": "1",
        "traits": [
            "Général"
        ],
        "required": [],
        "description": [
            "Déclencheur Alors que votre bouclier est levé, vous devriez subir des dégâts physiques (contondants, perforants ou tranchants) d'une attaque",
            "Vous interposez votre bouclier pour vous protéger du coup. Votre bouclier vous empêche de subir un nombre de dégâts égal à la Solidité du bouclier. Vous et le bouclier subissez chacun les dégâts restants, brisant ou détruisant éventuellement le bouclier."
        ]
    },
    {
        "name": "Chef de caravane",
        "level": "11",
        "traits": [
            "Général"
        ],
        "required": [
            "Gardez la cadence"
        ],
        "description": [
            "Vous savez comment tirer le plus gros effort de vos alliés sur la route. Votre groupe peut S'empresser pour 20 minutes de plus au delà du temps que le membre du groupe qui pourrait S'empresser le plus longtemps s'il était seul."
        ]
    },
    {
        "name": "Chef des employés",
        "level": "3",
        "traits": [
            "Général"
        ],
        "required": [
            "Charisme +2"
        ],
        "description": [
            "Vous êtes capable de trouver et de conserver de meilleurs employés que la plupart. Lorsque vous vous assurez des services d'un employé, cet employé obtient un bonus de circonstances de +2 à tous ses tests de compétences. Ce bonus de circonstances s'applique aux employés qualifiés ou inexpérimentés et il n'a pas d'effet sur le coût du service ou du travail fourni."
        ]
    },
    {
        "name": "Chevaucher",
        "level": "1",
        "traits": [
            "Général"
        ],
        "required": [],
        "description": [
            "Lorsque vous sports_martial_artsDirigez un animal sur lequel vous êtes monté pour effectuer une action de déplacement (comme Marcher rapidement), vous obtenez automatiquement un succès au lieu de devoir tenter un test. Tout animal sur lequel vous êtes monté agit à votre tour, comme un sbire. Si vous sports_martial_artsMontez un animal au milieu d'une rencontre, il passe son prochain tour puis agit ensuite à votre prochain tour."
        ]
    },
    {
        "name": "Consommable prescient",
        "level": "7",
        "traits": [
            "Général"
        ],
        "required": [
            "Planificateur prescient"
        ],
        "description": [
            "Vous pouvez prédire quels sont les consommables dont vous pourriez avoir besoin à l'avance. Lorsque vous utilisez military_techPlanificateur prescient , vous pouvez tirer un objet consommable de votre sac à dos, au lieu d'un élément d'équipement d'aventurier. L'objet consommable doit toujours être courant et d'un niveau qui n'est pas supérieur à la moitié de votre niveau et son Encombrement doit être suffisamment faible pour que le porter ne vous ait pas rendu Surchargé."
        ]
    },
    {
        "name": "Contrôle de la respiration",
        "level": "1",
        "traits": [
            "Général"
        ],
        "required": [],
        "description": [
            "Vous pouvez respirer même dans un air dangereux ou raréfié. Vous pouvez retenir votre respiration 25 fois plus longtemps que d'habitude avant de suffoquer. Vous obtenez un bonus de circonstances de +1 aux jets de sauvegarde contre les menaces inhalées, telles que les poisons inhalés, et si vous obtenez un succès à un tel jet de sauvegarde, il devient un succès critique."
        ]
    },
    {
        "name": "Donner la cadence",
        "level": "3",
        "traits": [
            "Général"
        ],
        "required": [
            "Constitution +2"
        ],
        "description": [
            "Vous menez par l'exemple et pouvez aider les autres à dépasser leurs limites habituelles. Lorsque vous vous trouvez dans un groupe qui S'empresse durant le mode d'exploration, votre groupe peut S'empresser aussi longtemps que le membre du groupe qui peut S'empresser le plus longtemps par lui-même."
        ]
    },
    {
        "name": "Dur à cuire",
        "level": "1",
        "traits": [
            "Général"
        ],
        "required": [],
        "description": [
            "Il en faut plus pour vous tuer que la plupart des gens. Vous mourez de l'état sentiment_very_dissatisfiedmourant à mourant 5 plutôt qu'à mourant 4."
        ]
    },
    {
        "name": "Éclaireur incroyable",
        "level": "11",
        "traits": [
            "Exploration",
            "Général"
        ],
        "required": [
            "maître en Perception"
        ],
        "description": [
            "Lorsque vous partez en reconnaissance, vous êtes particulièrement attentif au danger, offrant à vos alliés de précieux instants pour se préparer au combat. Lorsque vous utilisez l'activité d'exploration sports_martial_artsReconnaître , vous accordez à vos alliés un bonus de circonstances de +2 à leurs jets d'initiative au lieu d'un bonus de circonstances de +1.",
            "Effet : Reconnaître (Éclaireur incroyable)"
        ]
    },
    {
        "name": "Fouille accélérée",
        "level": "7",
        "traits": [
            "Général"
        ],
        "required": [
            "maître en Perception"
        ],
        "description": [
            "Vous disposez d'un système qui vous permet d'effectuer des recherches très rapidement, en trouvant les détails et les secrets deux fois plus vite que les autres. Quand vous Cherchez, vous mettez la moitié de la durée habituelle pour sports_martial_artsChercher dans une zone donnée. Cela signifie que pendant que vous explorez, vous doublez la Vitesse à laquelle vous pouvez vous déplacer, tout en ayant l'assurance que vous avez bien Fouillé une zone avant d'y pénétrer (jusqu'à la moitié de votre Vitesse). Si vous êtes légendaire en Perception, vous Fouillez des zones quatre fois plus rapidement."
        ]
    },
    {
        "name": "Fouille minutieuse",
        "level": "3",
        "traits": [
            "Général"
        ],
        "required": [
            "expert en Perception"
        ],
        "description": [
            "Vous prenez votre temps pour chercher de façon à vous assurer de tout trouver. Lorsque vous Fouillez, vous pouvez passer deux fois plus de temps à chercher. Normalement cela signifie que vous sports_martial_artsFouillez à un quart de votre Vitesse, jusqu'à un maximum de 45 m par minute pour tout vérifier ou 22,50 mètres par minute pour tout vérifier avant de vous avancer dans une zone. Si vous le faites et que le MJ lance votre test secret de l'action sports_martial_artsChercher pour remarquer quelque chose, vous obtenez un bonus de circonstances de +2 à ce test de Perception et si c'est un succès, il devient un succès critique."
        ]
    },
    {
        "name": "Glisseur",
        "level": "3",
        "traits": [
            "Général"
        ],
        "required": [
            "Dextérité +3, Vélocité"
        ],
        "description": [
            "Vous pouvez filer rapidement sur le sol. Vous pouvez sports_martial_artsRamper à la moitié de votre Vitesse."
        ]
    },
    {
        "name": "Improvisation inexpérimentée",
        "level": "3",
        "traits": [
            "Général"
        ],
        "required": [],
        "description": [
            "Vous avez appris comment gérer les situations où vous n'êtes pas à votre place. Votre degré de maîtrise avec les tests de compétences inexpérimentées est égal à votre niveau -2. Cela passe à votre niveau -1 au niveau 5 et à votre niveau au niveau 7. Cela ne vous permet pas d'utiliser les compétences d'actions qui nécessitent que vous soyez qualifié."
        ]
    },
    {
        "name": "Initiative extraordinaire",
        "level": "1",
        "traits": [
            "Général"
        ],
        "required": [],
        "description": [
            "Vous réagissez plus rapidement que les autres. Vous obtenez un bonus de circonstances de +2 aux jets d'initiative."
        ]
    },
    {
        "name": "Insensible à la mort",
        "level": "7",
        "traits": [
            "Général"
        ],
        "required": [
            "Dur à cuir, vous êtes mort au moins une fois"
        ],
        "description": [
            "Fréquence Une fois par jour",
            "Votre passé vous a laissé insensible à l'appel de la mort. La première fois au cours de chaque journée que vous récupérez des Points de vie alors que vous êtes mourant, vous obtenez un bonus de circonstances au nombre de Points de vie que vous récupérez égal à votre niveau, et vous ne gagnez ni l'état Blessé ni n'augmentez la valeur de cet état."
        ]
    },
    {
        "name": "Investiture extraordinaire",
        "level": "11",
        "traits": [
            "Général"
        ],
        "required": [
            "Charisme +3"
        ],
        "description": [
            "Vous avez une incroyable capacité à investir plus d'objets magiques. Augmentez la limite d'objets investis de 10 à 12."
        ]
    },
    {
        "name": "Maîtrise d'arme",
        "level": "1",
        "traits": [
            "Général"
        ],
        "required": [],
        "description": [
            "Vous devenez qualifié dans toutes les armes de guerre. Si vous étiez déjà qualifié dans toutes les armes de guerre, vous devenez qualifié avec l'arme évoluée de votre choix. Si vous êtes au moins de niveau 11, vous devenez également expert avec ces armes.",
            "Spécial Vous pouvez sélectionner ce don plus d'une fois. À chaque fois, vous devenez qualifié avec une arme évolué."
        ]
    },
    {
        "name": "Maîtrise d'armure",
        "level": "1",
        "traits": [
            "Général"
        ],
        "required": [],
        "description": [
            "Vous devenez qualifié en armures légères. Si vous êtes déjà qualifié en armures légères, vous êtes qualifié avec les armures intermédiaires. Si vous êtes qualifié avec les deux, vous devenez qualifié en armures lourdes. Si vous êtes au moins de niveau 13, vous devenez expert dans ce type d'armure.",
            "Spécial Vous pouvez sélectionner ce don plus d'une fois. Chaque fois, vous devenez qualifié dans le type d'armure supérieur, comme indiqué ci-dessus."
        ]
    },
    {
        "name": "Parangon ancestral",
        "level": "3",
        "traits": [
            "Général"
        ],
        "required": [],
        "description": [
            "Que ce soit par instinct, apprentissage ou magie, vous ressentez une connexion plus profonde avec votre ascendance. Vous gagnez un don ancestral de niveau 1."
        ]
    },
    {
        "name": "Pas de plume",
        "level": "1",
        "traits": [
            "Général"
        ],
        "required": [
            "Dextérité +2"
        ],
        "description": [
            "Vous faites un pas prudent et rapide. Vous pouvez Faire un pas sur un terrain difficile."
        ]
    },
    {
        "name": "Perception véritable",
        "level": "19",
        "traits": [
            "Général",
            "Révélation"
        ],
        "required": [
            "légendaire en Perception"
        ],
        "description": [
            "Vos facultés de perception et votre capacité à interpréter les informations sensorielles sont tellement au-delà des limites que vous remarquez les moindres divergences dans toutes sortes d'illusions et de transformations physiques. Vous êtes constamment sous l'effet d'un sort de auto_awesomeVision véritable au rang 6, en utilisant votre modificateur de Perception pour le test de contre."
        ]
    },
    {
        "name": "Perspicacité astucieuse",
        "level": "1",
        "traits": [
            "Général"
        ],
        "required": [],
        "description": [
            "Les précautions que vous prenez ou votre sens de l'observation sont hors de portée de la plupart des membres de votre profession. Choisissez les jets de Vigueur, de Réflexes, de Volonté ou les tests de Perception. Vous devenez expert dans ce que vous avez choisi. Au niveau 17, vous devenez maître dans ce même choix."
        ]
    },
    {
        "name": "Planificateur prescient",
        "level": "3",
        "traits": [
            "Général"
        ],
        "required": [],
        "description": [
            "Coût le Prix de l'objet choisi",
            "Conditions Vous n'avez pas utilisé cette capacité depuis la dernière fois que vous avez été capable d'acheter des biens.",
            "Vous créez régulièrement des plans alambiqués et des alternatives, en utilisant vos ressources pour les accomplir. Vous passez 1 minute pour ôter votre sac à dos puis pour soigneusement en retirer un objet que vous n'aviez pas auparavant déclaré avoir mais que vous aviez acheté — vous avez eu l'intuition que vous alliez avoir besoin de cet objet et l'aviez acheté la dernière fois que vous en avez eu l'opportunité. L'objet doit être un élément d'équipement d'aventure et ne peut être ni une arme, ni une armure, ni un objet alchimique ou magique ni tout autre trésor. Il doit être courant et d'un niveau qui ne soit pas supérieur à la moitié de votre niveau et son Encombrement doit être suffisamment faible pour que le transporter ne vous ait pas rendu Surchargé."
        ]
    },
    {
        "name": "Puiser dans votre résolution 1",
        "level": "3",
        "traits": [
            "Général",
            "Endurance"
        ],
        "required": [],
        "description": [
            "Coût 1 Point de Persévérance",
            "Vous regagnez des Points d'Endurance égaux à la moitié de votre maximum.",
            "Puiser dans votre résolution"
        ]
    },
    {
        "name": "Récupération rapide",
        "level": "1",
        "traits": [
            "Général"
        ],
        "required": [
            "Constitution +2"
        ],
        "description": [
            "Votre corps se remet rapidement des afflictions. Vous récupérez deux fois plus de Points de vie en vous reposant. Chaque fois que vous réussissez un jet de Vigueur contre une maladie ou un poison qui est en train de vous infecter, vous réduisez son stade de 2 ou de 1 contre une maladie ou un poison virulent. Chaque succès critique contre une maladie ou un poison qui est en train de vous affecter réduit son stade de 3 ou de 2 s'il s'agit d'une maladie ou d'un poison virulent. De plus, vous réduisez de 2 la valeur de votre état Drainé quand vous vous reposez pendant une nuit au lieu de 1."
        ]
    },
    {
        "name": "Réparation improvisée 3",
        "level": "3",
        "traits": [
            "Général"
        ],
        "required": [],
        "description": [
            "Vous pouvez rapiécer à la hâte une pièce d'équipement endommagé, mais la réparation temporaire n'est pas aussi soignée qu'il le faudrait pour une réparation durable. Vous rafistolez un objet cassé que vous possédez ou que possède une créature adjacente consentante. Jusqu'à ce que l'objet subisse à nouveau des dégâts, il fonctionne toujours comme un objet défectueux de son type. S'il s'agit d'un objet magique ou d'un autre objet avec des activations, il ne peut pas être activé pendant qu'il est réparé, mais peut être utilisé pour des fonctions normales (comme Frapper avec une arme ou utiliser Blocage au bouclier avec un bouclier). Cette activité ne restaure aucun Point de vie, l'objet est donc facile à détruire. Une fois que l'objet est Réparé normalement de sorte qu'il n'est plus brisé, il n'est plus davantage considéré comme de mauvaise qualité."
        ]
    },
    {
        "name": "Robustesse",
        "level": "1",
        "traits": [
            "Général"
        ],
        "required": [],
        "description": [
            "Votre corps peut supporter plus de châtiments que la plupart avant de succomber. Augmentez votre maximum de Points de vie de votre niveau. Vous réduisez le DD des tests de récupération de 1."
        ]
    },
    {
        "name": "Santé robuste",
        "level": "3",
        "traits": [
            "Général"
        ],
        "required": [],
        "description": [
            "Votre physiologie répond particulièrement bien aux premiers soins. Vous obtenez un bonus de circonstances au nombre de Points de vie que vous regagnez égal à votre niveau lors d'une tentative réussie pour sports_martial_artsSoigner vos blessures ou d'utilisation military_techMédecine militaire sur vous. Après une utilisation de Médecine militaire sur vous par vous-même ou un allié, vous êtes temporairement immunisé à cette Médecine militaire pendant seulement 1 heure, au lieu d'un jour."
        ]
    },
    {
        "name": "Suivant appliqué",
        "level": "3",
        "traits": [
            "Général"
        ],
        "required": [],
        "description": [
            "L'observation assidue de vos alliés vous a rendu meilleur lorsqu'il s'agit de suivre leurs traces. Lorsque vous utilisez l'activité Suivre l'expert en mode exploration, vous obtenez un bonus de circonstances de +3 si l'allié que vous suivez est expert et de +4 si votre allié est un maître.",
            "Vous pouvez partager vos observations avec les autres pour aider à mieux coordonner le groupe. Si l'allié que vous suivez dispose de Alliés silencieux ou d'une autre compétence qui permet au groupe de faire un seul test de compétence pour une activité d'exploration et d'utiliser le modificateur le plus bas, il peut utiliser votre modificateur, même s'il n'est pas le plus bas."
        ]
    },
    {
        "name": "Supergoûteur",
        "level": "7",
        "traits": [
            "Général"
        ],
        "required": [
            "maître en Perception"
        ],
        "description": [
            "Vous avez raffiné votre palais et possédez un sens de discernement du goût qui peut détecter la moindre anomalie dans la saveur et la texture de la nourriture et de la boisson. Lorsque vous mangez de la nourriture ou buvez un breuvage, vous tentez automatiquement d'identifier les ingrédients, ce qui pourrait vous alerter sur la présence d'altérations ou d'ajouts, comme les poisons. Le MJ lance un test secret de Perception contre un DD déterminé par le niveau du poison. Si la nourriture ou la boisson sont empoisonnés, en cas de succès, vous apprenez qu'ils ont été empoisonnées mais pas quel poison a été utilisé. Si vous réussissez à détecter que la nourriture ou la boisson a été empoisonnée, vous pouvez le recracher à temps pour ne pas être exposé à cette dose de poison (à moins que vous ne continuiez à manger ou à boire la nourriture ou la boisson empoisonnée).",
            "Si vous léchez ou goûtez quelque chose alors que vous Enquêtez ou essayez de Vous souvenir pour identifier quelque chose, et si le goût pourrait vous fournir des informations supplémentaires (à la discrétion du MJ), vous obtenez un bonus de circonstances de +2 à votre test."
        ]
    },
    {
        "name": "Une maison dans chaque port",
        "level": "11",
        "traits": [
            "Intermède",
            "Général"
        ],
        "required": [
            "Charisme +3"
        ],
        "description": [
            "Vous possédez une réputation dans les villes et villages que vous avez visité et leurs résidents sont toujours prêts à vous ouvrir leur porte.",
            "Lorsque vous êtes dans une ville ou un village, pendant les intermèdes, vous pouvez passer 8 heures à trouver un résident souhaitant vous fournir de quoi vous loger ainsi que jusqu'à six alliés pendant 24 heures sans frais. Le mode de vie dans le logement fourni est confortable et des repas corrects vous sont fournis sans frais.",
            "Après 24 heures, vous devez payer les prix normaux pour le logement et les repas ou utiliser ce don de nouveau pour trouver un nouveau résident désirant être votre hôte."
        ]
    },
    {
        "name": "Vélocité",
        "level": "1",
        "traits": [
            "Général"
        ],
        "required": [],
        "description": [
            "Vous vous déplacez beaucoup plus rapidement à pied. Votre Vitesse augmente de 1,50 mètre."
        ]
    }
]
};
