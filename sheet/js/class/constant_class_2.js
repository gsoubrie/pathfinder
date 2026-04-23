"use strict";
var DATA_CLASS = [
    {
        "name"                 : "Champion",
        "key"                  : "champion",
        "general_desc"         : "Vous êtes un émissaire d'une divinité, un serviteur dévoué qui a endossé de lourdes responsabilités et vous poursuivez avec ferveur une cause qui vous sépare de ceux qui vous entourent. Vous disposez de puissantes défenses que vous partagez avec vos alliés et les spectateurs innocents, ainsi que des pouvoirs divins que vous utilisez pour mettre un terme aux menaces auxquelles votre divinité s'oppose.",
        "characteristics_bonus": {
            "number": 1,
            "choice": [
                "FOR",
                "DEX"
            ]
        },
        "life_point_by_level"  : 10,
        "desc_fight"           : null,
        "desc_socially"        : null,
        "desc_exploration"     : null,
        "desc_interlude"       : null,
        "desc_you_could"       : [],
        "desc_probably_others" : [],
        "mastery"              : {
            "initial"   : null,
            "perception": null,
            "saves"     : null,
            "skills"    : null,
            "attacks"   : null,
            "defenses"  : null,
            "spells"    : null,
            "class_dc"  : null,
            "rarity"    : null
        },
        "capacity_by_level"    : [
            "Ascendance et historique, blocage au bouclier, cause, divinité, don de champion, maîtrises initiales, primes d'attributs, sorts de dévotion",
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
        "abilities"            : {
            "ascendance_et_historique"          : {
                "name"       : "Ascendance et historique",
                "description": [
                    "En plus des capacités que votre classe vous accorde au niveau 1, vous bénéficiez des avantages de votre ascendance et de votre historique."
                ]
            },
            "blocage_au_bouclier"               : {
                "name"       : "Blocage au bouclier",
                "description": [
                    "Vous obtenez le don général military_techBlocage au bouclier , une réaction qui vous permet de réduire les dégâts avec votre bouclier."
                ]
            },
            "cause"                             : {
                "name"       : "Cause",
                "description": [
                    "Vous vous dévouez à une cause spécifique au nom de votre divinité. Certaines sont limitées au regard de la sanctification, comme précisé entre parenthèses. Votre cause ajoute à vos édits et anathèmes et vous accorde une réaction spéciale appelée votre réaction de champion, qui apparaît après le séparateur, en même temps que ses améliorations si vous obtenez les capacités Réaction implacable et Réaction exaltée aux niveaux supérieurs.",
                    "Grandeur (Saint) : Vous illustrez la gloire et la splendeur des royaumes célestes.",
                    "Iniquité (Impie) : Vous détruisez, tirez parti et agissez avec déshonneur.",
                    "Justice : Vous respectez les lois et infligez un juste châtiment.",
                    "Libération : Vous vous opposez à la tyrannie et combattent pour la liberté.",
                    "Obéissance : Vous respectez la hiérarchie et l'ordre.",
                    "Profanation (Impie) : Vous corrompez égoïstement et détruisez.",
                    "Rédemption (Saint) : Vous tentez de racheter ceux qui commettent de mauvaises actions."
                ]
            },
            "divinite"                          : {
                "name"       : "Divinité",
                "description": [
                    "En tant que champion, vous êtes un combattant au service d'une divinité que vous vénérez au-dessus de toutes les autres. Choisissez une divinité apparaissant dans la liste des divinités ainsi que ses édits, ses domaines de prédilection et les avantages que vous obtenez en étant un fidèle de cette divinité."
                ]
            },
            "competence"                        : {
                "name"       : "Compétence",
                "description": [
                    "Vous êtes qualifié dans la compétence divine indiquée pour votre divinité. Comme à l'ordinaire, si vous devriez déjà être qualifié dans cette compétence, vous êtes qualifié dans une autre compétence de votre choix."
                ]
            },
            "anatheme"                          : {
                "name"       : "Anathème",
                "description": [
                    "Les champions se soucient profondément des édits et des anathèmes de leur divinité, de leur sanctification et de leur cause. Comme avec toute autre implémentation des édits et des anathèmes dans les règles, il s'agit d'outils pour incarner le personnage entre vous, le MJ et les autres joueurs autour de la table : vous jouez toujours un personnage nuancé et ne suivez par machinalement et strictement un script.",
                    "Agir de manière fondamentalement opposée aux principes des idéaux de votre divinité est anathème pour votre foi. Apprendre ou Lancer des sorts, commettre des actes et utiliser des objets qui sont anathèmes à votre divinité vous retire des bonnes grâces de cette dernière.",
                    "De la même manière, utiliser des objets, des sorts ou des actions qui sont anathèmes aux principes ou aux buts de votre foi interfèrent avec votre lien à l'égard de votre divinité. Par exemple, assister à un rituel qui crée des morts-vivants serait un acte anathème pour Pharasma, la déesse de la mort. Nombre d'actions qui sont anathèmes n'apparaissent pas dans la liste formelle de votre divinité. Pour les cas douteux, vous et votre MJ déterminez quels actes sont anathèmes.",
                    "Si vous accomplissez suffisamment d'actes qui sont anathèmes pour votre divinité, vous perdez les capacités magiques qui proviennent de votre lien à votre divinité. Les capacités de classe que vous perdez sont déterminées par le MJ, mais elles risquent d'inclure votre trait saint ou impie, votre réserve de focalisation et votre Bénédiction du dévot. Cas capacités peuvent être récupérées uniquement si vous vous repentez en conduisant un rituel de auto_awesomePénitence . Si votre divinité ne nécessite par la sanctification que vous aviez, votre MJ pourrait vous laisser utiliser le réapprentissage de votre sanctification et de votre cause alors que vous êtes toujours fidèle de la même divinité."
                ]
            },
            "sanctification"                    : {
                "name"       : "Sanctification",
                "description": [
                    "En fonction de votre divinité, sa sanctification peut vous rendre saint ou impie. Ceci vous place d'un côté d'une lutte sur les âmes. Que vous soyez saint, impie ou ni l'un, ni l'autre va limiter votre choix des causes, des sorts de dévotion et vos dons.",
                    "Si vous \"pouvez être\" saint ou impie en fonction de l'entrée sanctification de votre divinité, vous faites ce choix. Et si vous \"devez être\" saint ou impie, vous obtenez automatiquement le trait. Si la divinité indique \"aucune\", vous ne pouvez choisir que des options qui ne nécessitent ni le trait saint, ni le trait impie. Si vous êtes saint ou impie et obtenez le trait opposé d'une manière ou d'une autre, vous perdez l'ancien trait jusqu'à ce que vous fassiez Pénitence.",
                    "La sanctification impie pour un champion peut être extrêmement perturbante dans une partie typique et ne devrait être une option de personnage joueur que dans des aventures ou campagnes appropriées où le groupe décide collectivement de partir sur cette base. La sanctification et les causes impie sont des options peu courantes.",
                    "Saint Vous obtenez le trait saint et ajoutez ce trait à toutes les Frappes que vous portez. Vous obtenez l'édit : \"Ne commet pas intentionnellement du tort aux innocents et ne manque pas d'éviter qu'un tort soit commis contre un innocent si ton intervention directe peut le sauver\" et l'anathème \"Ne commet pas de meurtre\". Même si votre partie inclut des comportements en dehors du cadre de Pathfinder, les actes indiqués ici vous sont anathèmes.",
                    "Impie Vous obtenez la trait impie et ajoutez ce trait à toutes les Frappes que vous portez. Vous obtenez l'édit \"Ne placez pas les besoins des autres avant les vôtres ou ceux de votre divinité\" et l'anathème \"faire un geste entièrement altruiste, tel que donner quelque chose par pure charité\" et \"Mettre les besoins de quelqu'un avant ceux de votre divinité\". Aucun de ces actes ne vous empêche d'accomplir des actes que d'autres pourraient considérer comme amicaux, mais ces actes doivent être entrepris en vue d'atteindre en définitive vos propres buts ou ceux de votre divinité."
                ]
            },
            "arme_deifique"                     : {
                "name"       : "Arme déifique",
                "description": [
                    "Vous brandissez avec zèle l'arme de prédilection de votre divinité. Si c'est une attaque à mains nues avec un d4 comme dé de dégât ou une arme simple, augmenter le dé de dégâts d'un cran (de d4 à d6, de d6 à d8, de d8 à d10, de d10 à d12). Si l'arme est peu courante, vous y avez aussi accès et s'il s'agit d'une arme évoluée, vous la considérez comme une arme de guerre pour ce qui est de sa maîtrise."
                ]
            },
            "aura_de_champion"                  : {
                "name"       : "Aura de champion",
                "description": [
                    "Vous êtes entouré d'une aura dans une émanation de 4,50 mètres. Elle possède les traits aura et divin. Tout fidèle de votre divinité au sein de l'aura sait immédiatement que vous êtes un champion de votre divinité. Cette aura est utilisée comme portée de votre réaction de champion et pour d'autres effets variés. Vous pouvez réprimer ou réactiver l'aura par une action unique qui possède le trait concentration et elle s'achève si vous êtes sentiment_very_dissatisfiedInconscient ."
                ]
            },
            "dons_de_champion"                  : {
                "name"       : "Dons de champion",
                "description": [
                    "Au niveau 1 et à chaque niveau pair par la suite, vous obtenez un don de classe de champion."
                ]
            },
            "maitrises_initiales"               : {
                "name"       : "Maîtrises initiales",
                "description": [
                    "Au niveau 1, vous obtenez un nombre de maîtrises qui représentent votre entraînement de base. Elles sont indiquées au début de cette classe."
                ]
            },
            "sorts_de_devotion"                 : {
                "name"       : "Sorts de dévotion",
                "description": [
                    "La puissance de votre divinité vous confère des sorts divins spéciaux appelés sorts de dévotion qui sont un type de sorts focalisés. Choisissez soit auto_awesomeBoucliers de l'esprit , soit un sort basé sur la source divine de votre divinité ( auto_awesomeImposition des mains si votre divinité autorise Guérison, soit auto_awesomeToucher du vide si votre divinité autorise Mise à mal).",
                    "Il faut 1 point de focalisation pour lancer un sort de focalisation. Lorsque vous obtenez votre premier sort de dévotion, vous obtenez également une réserve de focalisation de 1 point de focalisation. Vous rechargez votre réserve de focalisation au cours de vos préparatifs quotidiens et vous regagnez 1 point de focalisation en passant 10 minutes à utiliser l'activité Refocaliser pour prier votre divinité ou servir ses causes.",
                    "Vos sorts de dévotion sont des sorts divins. Le Charisme est votre attribut d'incantation",
                    "Les sorts focalisés sont automatiquement intensifiés à la moitié de votre niveau arrondi au supérieur. Certains dons vous accordent d'autres sorts focalisés. Le nombre maximal de points de focalisation de votre réserve est égal au nombre de sorts focalisés que vous avez, mais ne peut jamais être supérieur à 3 points."
                ]
            },
            "dons_de_competence"                : {
                "name"       : "Dons de compétence",
                "description": [
                    "Au niveau 2, puis tous les niveaux pairs, vous obtenez un don de compétence. vous devez être au moins qualifié dans la compétence correspondante pour choisir un don de compétence."
                ],
                "level"      : 2
            },
            "ameliorations_de_competence"       : {
                "name"       : "Améliorations de compétence",
                "description": [
                    "Au niveau 3, puis tous les 2 niveaux, vous obtenez une amélioration de compétence. Vous pouvez utiliser cette amélioration pour augmenter votre degré de maîtrise et devenir qualifié dans une compétence dans laquelle vous étiez inexpérimenté ou pour améliorer votre rang dans une compétence dans laquelle vous êtes déjà qualifié pour devenir expert.",
                    "À partir du niveau 7, vous pouvez utiliser l'amélioration de compétence pour devenir maître dans une compétence dans laquelle vous êtes déjà expert et à partir du niveau 15, vous pouvez l'utiliser pour devenir légendaire dans une compétence dans laquelle vous êtes déjà maître."
                ],
                "level"      : 3
            },
            "benediction_du_devot"              : {
                "name"       : "Bénédiction du dévôt",
                "description": [
                    "Votre divinité bénit vos actions en vous accordant un bienfait. Cela peut prendre la forme d'un esprit qui vous rend visite et se loge dans vos objets ou votre corps, d'un mystérieux tatouage divin sur votre corps ou de quelque chose de ce genre. Choisissez l'une des bénédictions suivantes ou toute autre à laquelle vous avez accès.",
                    "Arme bénie Choisissez une arme ou des workBandelettes de coups puissants . Vous obtenez l'effet critique spécialisé de cette arme et vous lui allouez une rune de propriété de votre choix dans la liste suivante : workBoomerang , workEffrayante , workSpectrale , workChangeante ou workVitalisante . Au cours de vos préparatifs quotidiens, vous pouvez changer l'esprit pour qu'il vienne habiter un armement différent, qu'il accorde une rune différente ou les deux.",
                    "Bouclier béni Entre vos mains, un bouclier obtient la rune workRenforcement mineure. Au fur et à mesure que vous gagnez des niveaux, le bouclier obtient la rune Renforcement de votre niveau (inférieur au niveau 7, modéré au niveau 10, supérieur au niveau 13, majeur au niveau 16 et ultime au niveau 19). Si votre bouclier possède la rune de Renforcement de votre niveau ou s'il s'agit d'un workBouclier renforcé du même niveau que la rune de Renforcement appropriée, la Solidité du bouclier augmente de 1 à la place.",
                    "Célérité bénie Vous obtenez un bonus de statut de +1,50 mètre à la Vitesse. Si vous êtes monté, votre monture obtient le bonus à la place. En plus, lorsque le déplacement d'un de vos alliés déclenche une réaction d'un ennemi alors que l'allié est dans votre aura de champion, l'allié obtient un bonus de statut de +2 à toutes les défenses contre cette réaction."
                ],
                "level"      : 3
            },
            "dons_generaux"                     : {
                "name"       : "Dons généraux",
                "description": [
                    "Au niveau 3, puis tous les 4 niveaux, vous obtenez un don général."
                ],
                "level"      : 3
            },
            "dons_ancestraux"                   : {
                "name"       : "Dons ancestraux",
                "description": [
                    "En plus de celui avec lequel vous avez commencé, vous obtenez un don ancestral au niveau 5 puis tous les 4 niveaux."
                ],
                "level"      : 5
            },
            "expertise_avec_les_armes"          : {
                "name"       : "Expertise avec les armes",
                "description": [
                    "Vous vous consacrez à l'apprentissage approfondi des subtilités de vos armes. Vous devenez expert avec les armes simples, les armes de guerre et les attaques à mains nues."
                ],
                "level"      : 5
            },
            "primes_d_attributs"                : {
                "name"       : "Primes d'attributs",
                "description": [
                    "Au niveau 5, puis tous les 5 niveaux, vous améliorez quatre scores d'attributs différents. Vous pouvez utiliser ces primes d'attributs pour faire passer la valeur d'un score d'attribut au-dessus de +4. La prime augmente la valeur du score d'attribut de +1/2 s'il est supérieur ou égal à +4 ou de +1 s'il est inférieur à +3."
                ],
                "level"      : 5
            },
            "expertise_en_armure"               : {
                "name"       : "Expertise en armure",
                "description": [
                    "Vous avez passé tellement de temps en armure que vous savez comment tirer le meilleur de sa protection. Vous devenez expert avec les armures légères, intermédiaires et lourdes, ainsi qu'en défense sans armure. Vous obtenez les effets spécialisés des armures intermédiaires et lourdes."
                ],
                "level"      : 7
            },
            "specialisation_martiale"           : {
                "name"       : "Spécialisation martiale",
                "description": [
                    "Vous avez appris à infliger des blessures plus importantes avec les armes que vous connaissez le mieux. Vous infligez 2 dégâts supplémentaires avec les armes et les attaques à mains nues avec lesquelles vous êtes expert. Ces dégâts passent à 3 si vous êtes maître et à 4 si vous êtes légendaire."
                ],
                "level"      : 7
            },
            "corps_sacre"                       : {
                "name"       : "Corps sacré",
                "description": [
                    "Le pouvoir de votre divinité protège votre corps de toute atteinte, comme un véritable édifice de la foi, au même titre qu'un grand temple. Vous devenez maître en jets de Vigueur. Lorsque vous obtenez un succès sur un jet de Vigueur, il devient un succès critique."
                ],
                "level"      : 9
            },
            "expertise_du_champion"             : {
                "name"       : "Expertise du champion",
                "description": [
                    "Les prières renforcent votre puissance divine. Votre degré de maîtrise dans le DD de classe de champion, les jets d'attaque des sorts divins et les DD de vos sorts divins passent à expert."
                ],
                "level"      : 9
            },
            "expertise_en_reflexes"             : {
                "name"       : "Expertise en réflexes",
                "description": [
                    "Vous avez développé un talent pour esquiver le danger. Vous devenez expert en jets de Réflexes.",
                    "Gardien Même dans la plus encombrante des armures, vous pouvez vous prémunir contre les effets répandus. Vous devenez expert en jets de Réflexes."
                ],
                "level"      : 9
            },
            "reaction_implacable"               : {
                "name"       : "Réaction implacable",
                "description": [
                    "Votre Réaction de champion s'améliore, typiquement pour punir l'attaquant avec un contrecoup spirituel. Elle obtient l'avantage de la réaction implacable indiquée dans votre cause, sous votre réaction de champion."
                ],
                "level"      : 9
            },
            "expertise_en_perception"           : {
                "name"       : "Expertise en perception",
                "description": [
                    "Vous restez à l'affût des menaces qui vous entourent. Vous devenez expert en Perception."
                ],
                "level"      : 11
            },
            "reaction_exaltee"                  : {
                "name"       : "Réaction exaltée",
                "description": [
                    "Votre réaction de champion exalte les alliés proches, leur permettant également d'en tirer avantage. Lorsque vous utilisez votre réaction de champion, vous obtenez aussi l'effet indiqué de sa réaction exaltée."
                ],
                "level"      : 11
            },
            "volonte_divine"                    : {
                "name"       : "Volonté divine",
                "description": [
                    "Votre foi vous permet de parfaitement contrôler votre volonté. Vous êtes maître en jets de Volonté. Quand vous obtenez un succès sur un jet de Volonté, celui-ci est transformé en succès critique."
                ],
                "level"      : 11
            },
            "maitrise_des_armes"                : {
                "name"       : "Maîtrise des armes",
                "description": [
                    "Vous comprenez pleinement vos armes. Vous êtes maître avec les armes simples, les armes de guerre et les attaques à mains nues."
                ],
                "level"      : 13
            },
            "maitrise_des_armures"              : {
                "name"       : "Maîtrise des armures",
                "description": [
                    "Votre compétence avec les armures s'améliore encore. Vous devenez maître avec les armures légères, intermédiaires et lourdes ainsi qu'en défense sans armure."
                ],
                "level"      : 13
            },
            "specialisation_martiale_superieure": {
                "name"       : "Spécialisation martiale supérieure",
                "description": [
                    "Les dégâts de spécialisation martiale passent à 4 avec les armes et les attaques à mains nues avec lesquelles vous êtes expert, à 6 si vous êtes maître et à 8 si vous êtes légendaire."
                ],
                "level"      : 15
            },
            "armure_legendaire"                 : {
                "name"       : "Armure légendaire",
                "description": [
                    "Votre foi vous protège tout aussi efficacement que l'acier. Votre degré de maîtrise avec les armures légères, intermédiaires et lourdes, ainsi qu'avec la défense sans armure, passe à légendaire."
                ],
                "level"      : 17
            },
            "maitrise_du_champion"              : {
                "name"       : "Maîtrise du champion",
                "description": [
                    "Vous utilisez à présent parfaitement l'arsenal des techniques et des sorts divins du champion. Votre degré de maîtrise dans le DD de classe de champion, les jets d'attaque des sorts divins et les DD de vos sorts divins, passe à maître."
                ],
                "level"      : 17
            },
            "defi_du_heros"                     : {
                "name"       : "Défi du héros",
                "description": [
                    "Vous pouvez continuer à combattre tant qu'il vous reste de l'énergie divine. Vous obtenez le sort de dévotion auto_awesomeDéfi du héros ."
                ],
                "level"      : 19
            }
        }
    }
];