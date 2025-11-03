"use strict";
DON.SKILL = {
    ENUM: [
        [
            {
                "name"       : "Accroche rapide",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Athlétisme"
                ],
                "description": [
                    "Vous parvenez facilement à vous hisser sur les corniches. Lorsque vous sports_martial_artsVous raccrochez in extremis , vous pouvez utiliser Athlétisme au lieu d'un jet de Réflexes pour vous raccrocher in extremis. Si vous Escaladez ou sports_martial_artsBondissez à moins de 1,50 mètre du bas d'un bord, vous pouvez vous hisser sur la surface et vous Relever au cours de la même action."
                ]
            },
            {
                "name"       : "Acrobaties en équipe",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Acrobaties"
                ],
                "description": [
                    "Vos cascades distraient suffisamment un ennemi pour donner un avantage à l'un de vos alliés. Lorsque vous parvenez à réaliser un sports_martial_artsDéplacement acrobatique dans l'espace d'un ennemi, un allié qui est adjacent à cet ennemi peut Faire un pas en utilisant une réaction, mais il doit rester adjacent à cet ennemi."
                ]
            },
            {
                "name"       : "Affabulateur",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Duperie"
                ],
                "description": [
                    "Même quand vous êtes pris à mentir, vous empilez mensonge sur mensonge. Réduisez le bonus de circonstances qu'une cible gagne pour votre tentative précédente de sports_martial_artsFaire diversion ou de lui Mentir de +4 à +2. Si vous êtes maître en Duperie, réduisez le bonus à +1 et si vous êtes légendaire, vos cibles ne reçoivent pas de bonus du tout."
                ]
            },
            {
                "name"       : "Aide armure",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Athlétisme ou en Connaissance de la guerre"
                ],
                "description": [
                    "Après avoir servi en tant qu'aide aux combattants en armure, vous avez l'habitude d'aider les autres et vous-même à enfiler des équipements lourds.",
                    "Vous pouvez faire un test d'Athlétisme ou de Connaissance de la Guerre avec un DD déterminé par le MJ (mais habituellement un DD 15 pour les armures courantes, un DD 20 pour les armures peu courantes et un DD 25 pour les armures rares) pour réduire de moitié le temps passé pour enfiler une armure.",
                    "Vous pouvez réduire de moitié le temps nécessaire pour permettre à un allié d'endosser une armure en collaborant avec lui et en réussissant un test d'Athlétisme ou de Connaissance de la guerre avec le même résultat."
                ]
            },
            {
                "name"       : "Alliés silencieux",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Discrétion"
                ],
                "description": [
                    "Vous êtes habile à vous déplacer avec un groupe. Quand vous sports_martial_artsÉchappez aux regards et que vos alliés sports_martial_artsSuivent l'expert , vous et ces alliés pouvez effectuer un test de Discrétion unique, en utilisant le modificateur le plus bas, au lieu d'effectuer vos tests séparément. Cela ne s'applique pas aux jets d'initiative."
                ]
            },
            {
                "name"       : "Amulette du pèlerin",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Religion, fidèle d'une religion particulière"
                ],
                "description": [
                    "Vous transportez une petite amulette de protection provenant d'un site sacré pour votre foi. Vous obtenez un symbole religieux en bois de votre divinité gratuitement. Tant que symbole religieux reste en votre possession, lorsque vous êtes à égalité sur un test d'initiative avec un adversaire, vous agissez le premier.",
                    "Si vous perdez ce symbole religieux, vous devez en acheter ou en Fabriquer un autre et l'harmoniser. Une telle amulette coûte généralement au moins 1 pa, et l'harmonisation prend 10 minutes de prière. Vous pouvez également harmoniser un autre symbole religieux dans le même laps de temps, mais vous perdez le bénéfice du symbole religieux précédent."
                ]
            },
            {
                "name"       : "Animal lié",
                "level"      : "2",
                "traits"     : [
                    "Intermède",
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Nature"
                ],
                "description": [
                    "Vous forgez des liens étroits avec les animaux. Vous pouvez passer 7 jours d'intermède à Interagir régulièrement avec un animal normal (pas un compagnon ou autre animal spécial) qui est amical ou serviable. À l'expiration de cette durée, faites un test de casinoNature . Si c'est un succès, vous êtes lié avec l'animal. L'animal est en permanence serviable envers vous, à moins que vous ne fassiez quelque chose de grave pour briser votre lien.",
                    "Un animal serviable est plus facile à diriger. Si votre animal lié est au niveau -1, il obtient le trait sbire, vous permettant de le diriger plus efficacement. Le niveau maximal de créature qui peut être votre sbire passe à 3 si vous êtes maître en Nature et à 11 si vous êtes légendaire."
                ]
            },
            {
                "name"       : "Animal social",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Diplomatie"
                ],
                "description": [
                    "Vous êtes doué pour apprendre des informations par la conversation. L'activité d'exploration sports_martial_artsRecueillir des informations vous prend deux fois moins de temps que la normale (réduisant généralement le temps d'une heure). Si vous êtes maître en Diplomatie et que vous obtenez un échec critique en Recueillant des informations, il devient un échec. Il n'y a toujours aucune garantie qu'une rumeur que vous apprenez avec Recueillir des informations soit exacte."
                ]
            },
            {
                "name"       : "Artisanat alchimique",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Artisanat"
                ],
                "description": [
                    "Vous pouvez utiliser l'activité Artisanat pour créer des objets alchimiques. Quand vous choisissez ce don, vous ajoutez immédiatement les formules de quatre objets alchimiques courants de niveau 1 à votre recueil."
                ]
            },
            {
                "name"       : "Artisanat communautaire",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Artisanat"
                ],
                "description": [
                    "Vous pouvez obtenir l'aide des autres PJ pour sports_martial_artsFabriquer un objet, sous votre supervision. Un PJ qui vous aide tente un test avec une compétence dans laquelle il est qualifié. La compétence doit être Artisanat ou toute autre compétence qui est adapté à la fabrication de l'objet, choisie par le MJ. Par exemple, un PJ pourrait utiliser la compétence Religion pour vous aider à Fabriquer un objet qui possède le trait divin ou Connaissance de la guerre pour vous aider à Fabriquer une arme. Votre test sera toujours déterminant pour déterminer si la création de l'objet est un succès. Tout test d'une personne qui vous aide contribue à réduire le coût des matières premières en utilisant la table sports_martial_artsGagner de l'argent . Vous utilisez le degré de maîtrise dans la compétence du PJ allié et son niveau -1 comme niveau. Les PJ qui vous aident doivent vous accompagner jusqu'à la fin de l'activité Fabriquer un objet (ce qui les empêche d'accomplir leur propre activité d'intermède) ou l'avantage est perdu. Le MJ pourrait déterminer qu'un nombre restreint de PJ peuvent aider en fonction des circonstances. Artisanat communautaire vous permet également de prendre le rôle d'aidant lorsque quelqu'un d'autre Fabrique un objet, pourvu qu'il accepte votre aide."
                ]
            },
            {
                "name"       : "Artisanat emblématique",
                "level"      : "7",
                "traits"     : [
                    "Peu courant",
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "maître en Artisanat, Artisanat magique"
                ],
                "description": [
                    "Les objets magiques que vous créez portent un cachet propre à votre travail. Lorsque vous réussissez à fabriquer un objet magique permanent, lancez un casinoTest nu, DD 9 lorsque l'objet est entièrement terminé.",
                    "Succès critique Choisissez une bizarrerie sur la table et ses spécificités.",
                    "Succès L'objet obtient une bizarrerie avec n'importe quel spécificité choisie par le MJ.",
                    "Tout avantage qu'une créature tire d'une bizarrerie de l'objet ne s'applique que tant que la créature porte l'objet (pour un objet porté) ou le tient (pour un objet tenu). Le MJ peut autoriser des bizarreries personnalisées similaires à celles mentionnées ci-dessus."
                ]
            },
            {
                "name"       : "Artisanat impeccable",
                "level"      : "7",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "maître en Artisanat, Artisanat spécialisé"
                ],
                "description": [
                    "Vous fabriquez des créations sans défaut avec une grande efficacité. Lorsque vous obtenez un succès sur un test d'Artisanat pour Fabriquer un objet du type que vous avez choisi avec military_techArtisanat spécialisé , il devient un succès critique."
                ]
            },
            {
                "name"       : "Artisanat magique",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Artisanat"
                ],
                "description": [
                    "Vous pouvez sports_martial_artsFabriquer des objets magiques, bien que certains aient d'autres conditions. Quand vous sélectionnez ce don, vous obtenez les formules de quatre objets magiques courants de niveau 2 ou inférieur."
                ]
            },
            {
                "name"       : "Artisanat monstrueux",
                "level"      : "7",
                "traits"     : [
                    "Compétence"
                ],
                "required"   : [
                    "maître en Survie"
                ],
                "description": [
                    "Vous pouvez utilisez les morceaux des monstres pour vous aider en artisanat. Vous pouvez utiliser le corps d'un monstre pour vous aider à sports_martial_artsFabriquer un objet, en utilisant Survie à la place d'Artisanat pour le Fabriquer. Si les morceaux du corps du monstres ont une valeur, vous pouvez également les intégrer dans le coût des matières premières brutes (Le MJ détermine à partir des entrées du monstre si son corps contient des matériaux de valeur).",
                    "Si vous dépensez des jours supplémentaires pour travailler sur l'objet, vous réduisez le Prix en utilisant le niveau du monstre au lieu du vôtre. Certains objets pourrait demander d'utiliser une créature spécifique parmi ses Conditions de fabrication."
                ]
            },
            {
                "name"       : "Artisanat spécialisé",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Artisanat"
                ],
                "description": [
                    "Votre formation s'est concentrée sur l'Artisanat d'un type d'objet en particulier. Sélectionnez une des spécialités listées ci-dessous. Vous obtenez un bonus de circonstances de +1 aux tests d'Artisanat pour Fabriquer des objets de ce type. Si vous êtes un maître en Artisanat, Ce bonus passe à +2. S'il n'est pas évident de déterminer si la spécialité s'applique, c'est le MJ qui décide. Certaines spécialités peuvent ne s'appliquer que partiellement. Par exemple, si vous réalisiez un morgenstern en possédant la spécialité ébénisterie, le MJ pourrait ne vous accorder que la moitié de votre bonus parce que l'objet nécessite à la fois forge et ébénisterie.",
                    "* Vous devez avoir le don de compétence Artisanat alchimique pour Fabriquer des objets alchimiques."
                ]
            },
            {
                "name"       : "Artiste légendaire",
                "level"      : "15",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "légendaire en Représentation, Artiste virtuose"
                ],
                "description": [
                    "Votre renommée s'est répandue à travers les territoires. Les PNJ qui ont n'importe quelle compétence indiquée en Société ont généralement une attitude envers vous d'un échelon meilleure que la normale, en fonction de votre réputation et de la disposition de la créature. Par exemple, si vous êtes réputé pour votre comportement cruel et exigeant, les créatures pourraient être intimidées par vous plutôt qu'amicales envers vous. Quand vous sports_martial_artsGagnez de l'argent avec Représentation, vous attirez des spectateurs de niveau supérieur à ce que votre situation géographique pourrait permettre, tandis que les spectateurs se pressent pour vous voir. Par exemple, les dirigeants et les anges pourraient voyager jusqu'à votre petite tour dans les bois pour vous entendre vous produire. Généralement, cela augmente les spectateurs disponibles à votre niveau ou de 2 niveaux, si c'est plus élevé."
                ]
            },
            {
                "name"       : "Artiste virtuose",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Représentation"
                ],
                "description": [
                    "Vous possédez un talent exceptionnel dans un type de Représentation. Vous obtenez un bonus de circonstances de +1 quand vous effectuez un certain type de représentation. Si vous êtes maître en Représentation, Ce bonus passe à +2. Sélectionnez l'une des spécialités suivantes et appliquez le bonus quand vous tentez des tests de Représentation de ce type. S'il n'est pas évident de déterminer si la spécialité s'applique, c'est le MJ qui décide."
                ]
            },
            {
                "name"       : "Assistance divine",
                "level"      : "15",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "légendaire en Religion"
                ],
                "description": [
                    "Vous êtes tellement immergé dans les écritures divines que vous trouvez signification et conseil dans vos textes pour chaque situation. Passez 10 minutes à sports_martial_artsDéchiffrer un texte d'écritures religieuses de votre divinité ou philosophie pendant que vous pensez à un problème particulier ou à une énigme que vous rencontrez, puis tentez un test de casinoReligion (dont le DD est déterminé par le MJ). Si vous réussissez, vous déterrez un passage pertinent, une parabole ou un aphorisme qui peut vous aider à aller de l'avant ou à changer votre façon de penser pour vous aider à résoudre votre énigme."
                ]
            },
            {
                "name"       : "Assurance",
                "level"      : "1",
                "traits"     : [
                    "Fortune",
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié dans au moins une compétence"
                ],
                "description": [
                    "Même dans les pires circonstances, vous pouvez effectuer des tâches de base. Choisissez une compétence dans laquelle vous êtes qualifié. Vous pouvez vous abstenir d'effectuer un test de compétence pour cette compétence pour à la place recevoir un résultat de 10 + votre bonus de maîtrise (aucun autre bonus, pénalité ou modificateur ne s'applique).",
                    "Spécial Vous pouvez sélectionner ce don plusieurs fois. À chaque fois, choisissez une compétence différente et gagnez les avantages pour cette compétence."
                ]
            },
            {
                "name"       : "Atterrissage en roulade",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "Chute féline"
                ],
                "description": [
                    "Vous vous réceptionnez en faisant des roulades rapides qui vous aident à conserver votre élan. Si vous tombez de plus de 1,50 mètre et ne subissez pas de dégâts (habituellement parce que vous considérez la chute comme étant plus courte), vous pouvez utiliser votre réaction pour faire immédiatement une courte roulade lorsque vous vous réceptionnez pour Faire un pas. Si vous êtes expert en Acrobaties, vous pouvez utiliser votre réaction pour Faire un pas ou Marcher rapidement jusqu'à la moitié de votre Vitesse. Si vous êtes un maître en Acrobaties, vous pouvez utiliser votre réaction pour Faire un pas ou Marcher rapidement jusqu'à votre Vitesse. Si vous êtes légendaire en Acrobaties, vous ne déclenchez pas de réactions à cause du déplacement lorsque vous Marchez rapidement de la sorte."
                ]
            },
            {
                "name"       : "Bisou magique",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Manipulation",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Duperie"
                ],
                "description": [
                    "Conditions Vous disposez d'une main libre et vous êtes adjacent à un allié qui n'a pas le maximum de ses Points de vie",
                    "Vous effectuez un effort médical symbolique pour convaincre un allié qu'il s'est remis d'une blessure. Faites un test de Duperie avec le même DD que pour sports_martial_artsSoigner les blessures . En cas de succès, la cible obtient la moitié du montant des Points de vie en tant que Points de vie temporaires. Ces Points de vie temporaires durent 1 round. Bisou magique ne retire pas l'état Blessé. Augmentez le DD de 2 si vous ne tenez pas ou ne maniez pas un médikit. La cible est temporairement immunisé à Bisou magique pendant 24 heures."
                ]
            },
            {
                "name"       : "Bon mot 1",
                "level"      : "1",
                "traits"     : [
                    "Audible",
                    "Concentration",
                    "Émotion",
                    "Général",
                    "Linguistique",
                    "Mental",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Diplomatie"
                ],
                "description": [
                    "Vous lancez une pique bien sentie à un ennemi pour le distraire. Choisissez un ennemi situé à 9 mètres ou moins de vous et lancez un test de Diplomatie contre son DD de Volonté.",
                    "Succès critique La cible est distraite et subit une pénalité de statut de -3 aux tests de Perception et de Volonté pendant 1 minute.",
                    "Succès Comme en cas de succès critique, mais la pénalité est de -2.",
                    "Échec critique Votre trait d'esprit est atroce. Vous subissez la même pénalité que celle que l'ennemi aurait subi si vous aviez obtenu un succès. Cette pénalité prend fin après 1 minute ou dès que vous réussissez à placer un autre Bon mot.",
                    "flareEffet : Bon Mot"
                ]
            },
            {
                "name"       : "Bond puissant",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Athlétisme"
                ],
                "description": [
                    "Vous pouvez sauter de 1,50 mètre avec un sports_martial_artsBond vertical sans Faire un sports_martial_artsSaut en hauteur . Vous augmentez aussi la distance horizontale lorsque vous Bondissez, incluant ce qui fait partie d'un Saut en hauteur ou de sports_martial_artsSaut en longueur de 1,50 mètre."
                ]
            },
            {
                "name"       : "Bonne impression de groupe",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Diplomatie"
                ],
                "description": [
                    "Quand vous sports_martial_artsFaites bonne impression , vous pouvez comparer votre test de Diplomatie aux DD de Volonté de dix cibles avec lesquelles vous avez conversé, sans pénalité. Le nombre de cibles passe à 20 si vous êtes expert, 50 si vous êtes maître et 100 si vous êtes légendaire."
                ]
            },
            {
                "name"       : "Briser la malédiction",
                "level"      : "7",
                "traits"     : [
                    "Concentration",
                    "Exploration",
                    "Guérison",
                    "Compétence"
                ],
                "required"   : [
                    "maître en Occultisme ou en Religion"
                ],
                "description": [
                    "Vous dépensez 8 heures à prier ou à accomplir des rites occultes sur la cible, affaiblissant la puissance d'une malédiction qui l'affecte. Vous tentez de contrer la malédiction, en utilisant casinoOccultisme ou casinoReligion pour votre test de contre et la moitié de votre niveau arrondi au supérieur pour le rang de contre. Briser la malédiction ne prend que 10 minutes de prières et de rites si vous êtes légendaire en Occultisme ou en Religion."
                ]
            },
            {
                "name"       : "Chasseur de bonnes affaires",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Diplomatie"
                ],
                "description": [
                    "Vous pouvez sports_martial_artsGagner de l'argent en utilisant Diplomatie, en passant vos journées à rechercher des bonnes affaires et à revendre à profit. Vous pouvez aussi passer du temps à dénicher une bonne affaire sur un objet. Cela fonctionne comme si vous utilisiez Gagner de l'argent avec Diplomatie, sauf qu'au lieu de gagner de l'argent, vous achetez l'objet avec un rabais égal à l'argent que vous auriez gagné et vous l'obtenez gratuitement si l'argent gagné excède ou atteint son coût. Enfin, si vous sélectionnez Chasseur de bonnes affaires au cours de la création de personnage au niveau 1, vous commencez la partie avec 2 po supplémentaires."
                ]
            },
            {
                "name"       : "Chef",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Connaissance des alcools, Connaissance de la Cuisine ou Artisanat"
                ],
                "description": [
                    "Vous avez maîtrisé la préparation de plusieurs types de nourriture et de boisson. Vous obtenez un bonus de circonstances de +1 aux tests d'Artisanat pour préparer de la nourriture et des boissons, y compris les élixirs si vous avez military_techArtisanat alchimique ou les potions si vous avez military_techArtisanat magique . Si vous êtes maître dans l'une des compétences prérequises, ce bonus passe à +2."
                ]
            },
            {
                "name"       : "Chevaucheur rapide",
                "level"      : "1",
                "traits"     : [
                    "Exploration",
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Nature"
                ],
                "description": [
                    "Vous pouvez encourager votre monture à parcourir des distances rapidement. Lorsque vous calculez votre Vitesse de voyage pendant la journée alors que vous êtes sur une monture, vous pouvez tenter un test de Nature pour Diriger un animal pour augmenter la Vitesse de déplacement de votre monture. Le DD est déterminé par le MJ mais il correspond typiquement égale à la plus élevée des difficultés entre le niveau de la monture ou celui de l'environnement. Sur un succès, augmentez la Vitesse de déplacement de votre monture de moitié. Cela n'a pas d'effet sur la Vitesse de votre monture lors des rencontres. Cet avantage s'étend à un maximum de six autres alliés voyageant avec vous, à condition que tous ces alliés soient également montés ou soient des quadrupèdes ayant une vitesse d'au moins 9 mètres."
                ]
            },
            {
                "name"       : "Chirurgie risquée",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Médecine"
                ],
                "description": [
                    "Votre chirurgie peut ramener un patient des portes de la mort mais peut aussi le pousser au travers. Lorsque vous sports_martial_artsSoignez les blessures , vous pouvez infliger casino1d8 dégâts tranchants à votre patient juste avant d'appliquer les effets de soigner les blessures. Si vous procédez de la sorte, vous obtenez un bonus de circonstances de +2 à votre test de Médecine pour Soigner les blessures et, si vous obtenez un succès, il devient un succès critique."
                ]
            },
            {
                "name"       : "Chute féline",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Acrobaties"
                ],
                "description": [
                    "Vos acrobaties aériennes félines vous permettent d'amortir vos chutes. Traitez les chutes comme étant de 3 mètres plus courtes. Si vous êtes expert en Acrobaties, traitez les chutes comme étant de 7,50 mètres plus courtes. Si vous êtes maître en Acrobaties, traitez-les comme étant de 15 mètres plus courtes. Si vous êtes légendaire en Acrobaties, vous retombez toujours sur vos pieds et ne subissez pas de dégâts, quelle que soit la distance de la chute."
                ]
            },
            {
                "name"       : "Combattant-grimpeur",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Athlétisme"
                ],
                "description": [
                    "Vos techniques vous permettent de combattre quand vous escaladez. Vous n'êtes pas sentiment_very_dissatisfiedPris au dépourvu pendant que vous Escaladez et vous pouvez Escalader avec une main occupée. Vous devez toujours utiliser l'autre main et vos deux jambes pour Escalader."
                ]
            },
            {
                "name"       : "Compétence qualifiante",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "Intelligence +1"
                ],
                "description": [
                    "Vous devenez qualifié dans la compétence de votre choix.",
                    "Spécial Vous pouvez sélectionner ce don plusieurs fois en choisissant une nouvelle compétence à chaque fois."
                ]
            },
            {
                "name"       : "Connaissance supplémentaire",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [],
                "description": [
                    "Vos connaissances se sont étendues pour englober un nouveau domaine. Choisissez une sous-catégorie supplémentaire de la compétence Connaissance. Vous devenez qualifié dans cette dernière. Aux niveaux 3, 7 et 15, vous obtenez une amélioration de compétence supplémentaire que vous pouvez appliquer uniquement à la sous-catégorie de Connaissance choisie.",
                    "Spécial Vous pouvez sélectionner ce don plus d'une fois. Vous devez à chaque fois sélectionner une nouvelle sous-catégorie de Connaissance et vous gagnez les améliorations de compétence supplémentaires pour cette sous-catégorie aux niveaux indiqués."
                ]
            },
            {
                "name"       : "Connaissances incontestables",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Connaissance"
                ],
                "description": [
                    "Vous ne recevez jamais d'informations erronées au sujet de votre domaine d'expertise. Lorsque vous Vous souvenez en utilisant n'importe quelle sous-catégorie de Connaissance dans laquelle vous êtes qualifié, si vous obtenez un échec critique, il devient un échec. Si vous êtes un maître dans une sous-catégorie de Connaissance, sur un succès critique, vous obtenez même plus d'informations ou de contexte que d'habitude."
                ]
            },
            {
                "name"       : "Connaissances perturbantes 2",
                "level"      : "7",
                "traits"     : [
                    "Émotion",
                    "Terreur",
                    "Général",
                    "Mental",
                    "Compétence"
                ],
                "required"   : [
                    "maître en Occultisme"
                ],
                "description": [
                    "Vous murmurez une litanie de noms épouvantables, de prophéties et des descriptions de royaumes au-delà de la compréhension mortelle, tirés de l'étude de livres et de parchemins interdits. Même ceux qui ne comprennent pas votre langue sont désarçonnés par ces terribles secrets.",
                    "Faites un test d' casinoOccultisme et comparez le résultat au DD de Volonté d'un ennemi à 9 mètres ou au DD de Volonté de n'importe quel nombre d'ennemis dans les 9 mètres si vous êtes légendaire en Occultisme. Ces créatures sont ensuite temporairement immunisées pendant 24 heures.",
                    "Succès critique La cible devient sentiment_very_dissatisfiedConfuse pendant 1 round et sentiment_very_dissatisfiedEffrayée 1 .",
                    "Succès La cible devient Effrayée 1.",
                    "Échec La cible n'est pas affectée.",
                    "Échec critique Vous prenez trop à cœur vos propres mots et devenez sentiment_very_dissatisfiedEffrayé 1 ."
                ]
            },
            {
                "name"       : "Consulter les esprits",
                "level"      : "7",
                "traits"     : [
                    "Général",
                    "Secret",
                    "Compétence"
                ],
                "required"   : [
                    "maître en Nature, Occultisme ou Religion"
                ],
                "description": [
                    "Fréquence Une fois par jour",
                    "Vous avez appris des rites ou des méditations qui vous permettent de percevoir des esprits mineurs invisibles au sein d'un lieu. Choisissez entre Nature, Occultisme ou Religion lorsque vous choisissez ce don. Nature vous permet de contacter les esprits de la nature qui forment les léchis, qui sont nés de l'essence vitale pure plutôt que d'énergie spirituelle et peuvent répondre à des questions à propos des caractéristiques naturelles comme l'endroit où se trouve de l'eau ou une plante. Religion révèle la présence d'esprits angéliques, démoniaques ou d'autres esprits au service d'êtres divins qui fournissent des informations à propos de sources d'énergie de vie ou d'énergie du vide, les influences sacrées ou profanes ou la présence de morts-vivants. Occultisme vous permet de contacter les esprits résiduels, les échos psychiques des morts et les esprits de l'au-delà qui vous entretiennent de choses comme des auras étranges, des effets ou de la présence d'êtres occultes et non naturels. Passez 10 minutes et faites un test pour Vous souvenir avec la compétence choisie. Le DD est déterminé par le MJ (habituellement un DD très difficile pour le niveau de la créature de plus haut niveau que vous pourriez rencontrer dans la zone). Si vous êtes légendaire dans la compétence choisie, vous pouvez utiliser ce don une fois par heure, au lieu d'une fois par jour mais vous ne pouvez plus l'utiliser dans une zone qui chevauche une zone précédente.",
                    "Succès critique Les esprits se révèlent à vous d'eux-mêmes et leur attitude est amicale à votre endroit. Seul vous pouvez percevoir ces esprits. Ils répondent à trois questions simples à propos de l'environnement dans les 30 mètres, en fonction de la compétence que vous avez choisie et le type d'esprit que vous avez contacté. Leurs réponses sont presque toujours un unique mot et leurs connaissances sont limitées à leur sphère d'intérêt.",
                    "Succès Comme en cas de succès critique, sauf que les esprits vous sont indifférents et ne répondent qu'à une question.",
                    "Échec Vous êtes incapable de contacter les esprits du lieu.",
                    "Échec critique Vous contactez un ou plusieurs esprits malveillants. Ils vous sont hostiles, bien qu'ils ne puissent pas immédiatement apparaître. Ils répondent à trois questions mais vous donnent les informations qui vous sont nuisibles d'une certaine manière, à la discrétion du MJ.",
                    "Spécial Vous pouvez prendre ce don plusieurs fois, en prenant à chaque fois une compétence différente dans laquelle vous êtes au moins maître. Vous pouvez utiliser ce don avec chaque compétence une fois par jour (ou une fois par heure, si vous êtes légendaire)."
                ]
            },
            {
                "name"       : "Contacts rapides",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Société, Relations ou Réseau souterrain"
                ],
                "description": [
                    "Vous savez où aller, à qui parler et comment vous faire de nouveaux contacts, rapidement. En entrant dans une nouvelle communauté, en dépensant 1 jour d'intermède, il vous est permis de construire assez de relations pour pouvoir faire usage des dons military_techRelations ou military_techRéseau souterrain . Si vous êtes légendaire en Société, vous pouvez trouver les relations nécessaires en 1 heure après être entré dans une nouvelle communauté."
                ]
            },
            {
                "name"       : "Contraindre un groupe",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Intimidation"
                ],
                "description": [
                    "Vous pouvez forcer la main des gens de manière efficace, même lorsque vous ne les isolez pas. Quand vous sports_martial_artsContraignez , vous pouvez comparer votre test d'Intimidation aux DD de Volonté de cinq cibles au lieu d'une.",
                    "Il est possible d'obtenir un degré de succès différent pour chaque cible. Le nombre de cibles que vous pouvez Contraindre en une unique action passe à 10 si vous êtes expert, 25 si vous êtes maître et 50 si vous êtes légendaire."
                ]
            },
            {
                "name"       : "Contrainte durable",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Intimidation"
                ],
                "description": [
                    "Quand vous réussissez à sports_martial_artsContraindre quelqu'un, le temps maximum pendant lequel il se soumet passe à une semaine, toujours déterminé par le MJ. Si vous êtes légendaire, la durée maximale passe à un mois."
                ]
            },
            {
                "name"       : "Contrainte rapide",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Intimidation"
                ],
                "description": [
                    "Vous pouvez intimider les autres simplement par le choix de quelques effets. Vous pouvez sports_martial_artsContraindre une créature après 1 round de conversation au lieu de 1 minute. Vous ne pouvez toujours pas Contraindre une créature au milieu d'un combat, ni sans engager la conversation."
                ]
            },
            {
                "name"       : "Contrebandier expérimenté",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Discrétion"
                ],
                "description": [
                    "Vous faites souvent passer des choses en contrebande sous le nez des autorités. Quand le MJ effectue votre test de Discrétion pour voir si un observateur passif remarque un petit objet que vous avez dissimulé, le MJ utilise le plus élevé entre le résultat obtenu ou 10, en y ajoutant votre modificateur de Discrétion pour déterminer le résultat de votre test de Discrétion. Si vous êtes maître en Discrétion, le MJ utilise le nombre obtenu ou 15 et, si vous êtes légendaire, vous réussissez automatiquement à masquer un petit objet aux yeux des observateurs passifs. Cela ne procure aucun avantage face à une créature qui tente un test de Perception en recherchant activement des objets cachés.",
                    "Note PFS : Ce don vous permet de Gagner de l'argent avec Connaissance de la pègre pour des tâches de votre niveau -1 (au lieu de niveau -2 habituellement)."
                ]
            },
            {
                "name"       : "Cordialité forcée",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Diplomatie"
                ],
                "description": [
                    "Les premières impressions sont votre point fort. Quand vous rencontrez quelqu'un dans une situation occasionnelle ou sociale, vous pouvez immédiatement tenter un test de Diplomatie pour sports_martial_artsFaire bonne impression sur cette créature plutôt que d'avoir à converser pendant 1 minute. Vous faites ce test avec une pénalité de -5. Si vous obtenez un échec ou un échec critique, vous pouvez passer 1 minute à converser avec la créature et tenter un nouveau test à la fin de ce délai plutôt que d'accepter votre échec normal ou critique."
                ]
            },
            {
                "name"       : "Courir sur l'eau",
                "level"      : "7",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "maître en Athlétisme"
                ],
                "description": [
                    "L'expérience et l'entraînement vous ont enseigné que l'eau possède une tension de surface juste suffisante pour qu'un maître puisse courir sans en traverser la surface.",
                    "Lorsque vous Marchez rapidement en ligne droite, si vous vous déplacez à au moins la moitié de votre Vitesse sur le sol, vous pouvez vous déplacer sur la distance restante au-dessus du niveau de l'eau. Si vous ne terminez pas votre Marche rapide sur un sol solide, vous tombez dans l'eau.",
                    "Si vous êtes légendaire en Athlétisme, tant que vous démarrez sur un sol solide, toute partie de votre Marche rapide peut marcher à la surface de l'eau, même si ce n'est pas en ligne droite, bien que vous tombiez toujours dans l'eau si vous ne terminez pas votre déplacement sur un sol solide."
                ]
            },
            {
                "name"       : "Cri de guerre",
                "level"      : "7",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "maître en Intimidation"
                ],
                "description": [
                    "Quand vous effectuez un jet d'initiative, vous pouvez pousser un puissant cri de guerre et Démoraliser un ennemi observé par une action gratuite. Si vous êtes légendaire en Intimidation, vous pouvez utiliser une réaction pour Démoraliser votre ennemi quand vous obtenez un succès critique sur un jet d'attaque."
                ]
            },
            {
                "name"       : "Cryptanalyste légendaire",
                "level"      : "15",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "légendaire en Société"
                ],
                "description": [
                    "Votre capacité avec les langues et les codes est telle que vous pouvez déchiffrer une information en ne faisant que survoler un texte. Vous pouvez sports_martial_artsDéchiffrer un texte en utilisant Société pendant que vous lisez à vitesse normale. Si vous ralentissez votre lecture et que vous y consacrez le temps normalement nécessaire et obtenez un succès, il devient un succès critique. Si vous obtenez un succès critique tout en y passant le temps normal nécessaire, vous bénéficiez presque d'une compréhension mot à mot du document."
                ]
            },
            {
                "name"       : "Culte trompeur",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Occultisme"
                ],
                "description": [
                    "Les membres de votre culte se font fréquemment passer pour des adorateurs d'une autre religion. Vous pouvez utiliser Occultisme au lieu de Duperie pour sports_martial_artsVous faire passer pour un adorateur typique d'un autre culte ou pour sports_martial_artsMentir de manière spécifique lorsque vous prétendez que vous êtes un membre du culte pour lequel vous Vous faites passer. Vous avez toujours besoin de la compétence de Duperie pour Vous faire passer pour un adorateur particulier ou pour accomplir des actions trompeuses, tel que Mentir à propos de toute autre matière."
                ]
            },
            {
                "name"       : "Déguisement de secours",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Duperie"
                ],
                "description": [
                    "Vous disposez d'un déguisement spécifique que vous conservez prêt à être employé, sous vos vêtement extérieurs. Vous pouvez revêtir ce déguisement pour Vous faire passer pour en dépensant une activité à 3 actions. Si vous êtes maître en Duperie, seules 2 actions sont nécessaires et si vous êtes légendaire c'est une seule action. Vous pouvez créer un nouveau déguisement de secours en dépensant le temps habituel que cela vous prend pour Vous faire passer pour, mais vous ne pouvez porter qu'un seul déguisement de secours à la fois. Disposer d'un déguisement de secours ne vous permet pas de retirer votre armure ou tout autre partie de vêtement compliqué plus rapidement, mais une fois ôtés, le déguisement est aussitôt disponible. Comme vous portez le déguisement de secours prêt, il est possible qu'une fouille puisse révéler certains éléments du déguisement (voir Dissimuler un objet dans la compétence Discrétion)."
                ]
            },
            {
                "name"       : "Déguisement rapide",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Duperie"
                ],
                "description": [
                    "Vous pouvez revêtir un déguisement en un dixième du temps normal (généralement 1 minute). Si vous êtes maître en Duperie, vous pouvez créer un déguisement complet et sports_martial_artsVous faire passer pour quelqu'un d'autre en une activité à 3 actions. Si vous êtes légendaire, cela ne vous prend qu'une seule action."
                ]
            },
            {
                "name"       : "Déjouer les sens",
                "level"      : "7",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "maître en Discrétion"
                ],
                "description": [
                    "Vous êtes capable de déjouer les sens spéciaux des créatures et êtes assez prudent pour vous protéger d'elles à tout moment. À chaque fois que vous utilisez les actions sports_martial_artsÉchapper aux regards , sports_martial_artsSe cacher ou sports_martial_artsÊtre furtif , vous êtes toujours considéré comme prenant des précautions contre les sens spéciaux."
                ]
            },
            {
                "name"       : "Dérobade Bousculade",
                "level"      : "7",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Acrobaties et en Vol"
                ],
                "description": [
                    "Vous parvenez à atteindre un objet de l'adversaire lorsque vous le dépassez. Si vous obtenez un succès critique sur un test de sports_martial_artsDéplacement acrobatique dans l'espace d'un ennemi, vous pouvez tenter de sports_martial_artsVoler quelque chose appartenant à l'ennemi en réaction. Vous obtenez un bonus de circonstances de +1 à votre test de Vol pour voler dans la mesure où votre acrobatie lui rend plus difficile de garder trace de votre déplacement. Vous pouvez Voler tout objet immédiatement accessible d'Encombrement léger ou négligeable, tel qu'une potion ou une bourse pendant d'une ceinture, mais rien qui soit à l'intérieur d'un contenant ou que l'ennemi tient. Le MJ a le dernier mot sur ce que vous pouvez Voler."
                ]
            },
            {
                "name"       : "Désarmement prudent",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Vol"
                ],
                "description": [
                    "Si vous déclenchez un dispositif ou un piège pendant que vous le désarmez, vous obtenez un bonus de circonstances de +2 à votre CA ou à votre jet de sauvegarde contre l'appareil ou le piège. Cela s'applique seulement à l'attaque ou aux effets déclenchés par votre tentative ratée, et non aux suivants, telles les attaques supplémentaires d'un piège complexe."
                ]
            },
            {
                "name"       : "Déverrouillage rapide",
                "level"      : "7",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "maître en Vol"
                ],
                "description": [
                    "Vous pouvez sports_martial_artsCrocheter une serrure en utilisant 1 action au lieu de 2."
                ]
            },
            {
                "name"       : "Discrétion en armure",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Discrétion"
                ],
                "description": [
                    "Vous avez appris des techniques pour ajuster et modifier votre armure et vos déplacements pour réduire le bruit que vous faites.",
                    "Lorsque vous portez une armure non bruyante avec laquelle vous êtes qualifié, votre pénalité aux tests de Discrétion est réduite de 1 (avec une pénalité minimum de 0). Si vous êtes maître en Discrétion, elle est réduite de 2 et si vous êtes légendaire, elle est réduite de 3.",
                    "Si votre armure possède le trait bruyante, au lieu de réduire la pénalité aux tests de Discrétion, vous ignorez les effets du trait bruyante, vous permettant de retirer la pénalité avec un score de Force suffisant comme à l'ordinaire."
                ]
            },
            {
                "name"       : "Diversion interminable",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Duperie"
                ],
                "description": [
                    "Quand vous obtenez un succès critique pour sports_martial_artsFaire diversion , vous continuez à rester sentiment_very_dissatisfiedCaché après la fin de votre tour. Cet effet persiste pendant une durée qui dépend de la diversion et de la situation, déterminée par le MJ (minimum 1 round supplémentaire)."
                ]
            },
            {
                "name"       : "Double langage",
                "level"      : "7",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "maître en Duperie"
                ],
                "description": [
                    "Vous êtes habitué à dire une chose qui en signifie une autre très différente. Vous déguisez votre véritable intention derrière d'autres mots et phrases, comptant sur une emphase subtile et une expérience partagée pour permettre une compréhension que seuls vos alliés comprennent.",
                    "Tous les alliés qui ont voyagé avec vous pendant au moins une semaine complète discernent automatiquement la signification. Les autres observateurs doivent réussir un test de Perception contre votre DD de Duperie pour réaliser que vous êtes en train de passer un message secret et ils doivent obtenir un succès critique pour comprendre le message lui-même."
                ]
            },
            {
                "name"       : "Dressage animalier",
                "level"      : "1",
                "traits"     : [
                    "Intermède",
                    "Général",
                    "Manipulation",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Nature"
                ],
                "description": [
                    "Vous passez du temps à apprendre à un animal à accomplir une certaine action. Vous pouvez soit sélectionner une action basique que l'animal connaît déjà (généralement celles listées dans l'action sports_martial_artsDiriger un animal ) ou tenter d'apprendre à l'animal une nouvelle action basique. Le MJ détermine le DD de tout test requis et le temps nécessaire à l'entraînement (généralement au moins une semaine). Il est normalement impossible d'apprendre à un animal un tour qui utilise la pensée critique. Si vous êtes expert, maître ou légendaire en Nature, vous pourriez être capable d'entraîner des créatures beaucoup plus inhabituelles, à la discrétion du MJ.",
                    "Succès L'animal apprend l'action. Si c'était une action que l'animal connaissait déjà, vous pouvez Diriger l'animal pour effectuer une action sans faire de test de Nature. S'il s'agissait d'une nouvelle action basique, ajoutez cette action aux actions que l'animal peut effectuer avec Diriger un animal, mais vous devez toujours effectuer le jet.",
                    "Échec L'animal n'apprend pas le tour."
                ]
            },
            {
                "name"       : "Éduqué dans les secrets",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Occultisme"
                ],
                "description": [
                    "Vous remarquez les signes et les symboles que les membres de cultes mystérieux et d'autres sociétés secrètes utilisent pour déclarer leur affiliation à des camarades membres. Vous pouvez utiliser Occultisme au lieu de Diplomatie pour sports_martial_artsRecueillir des informations sur de tels groupes et à la place de Duperie pour sports_martial_artsVous faire passer pour un membre de ces groupes.",
                    "Si vous appartenez à un culte secret, à une loge, une secte ou à une organisation similaire, vous reconnaissez automatiquement les membres de votre groupe à moins qu'ils n'essaient spécifiquement de vous dissimuler leur présence. Ils reconnaissent également votre appartenant à moins que vous ne la leur dissimuliez."
                ]
            },
            {
                "name"       : "Enquête discrète",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Duperie ou en Diplomatie"
                ],
                "description": [
                    "Vos efforts pour apprendre les choses que vous avez besoin de savoir sont subtils.",
                    "Lorsque vous sports_martial_artsRecueillez des informations , vous pouvez dissimuler le véritable sujet de votre enquête parmi d'autres sujets de moindre intérêt à vos yeux sans augmenter la difficulté du test ou prendre plus de temps pour Recueillir des informations.",
                    "Quiconque essaie de Recueillir des informations sur quelqu'un d'autre pour déterminer si quelqu'un a posé des questions sur le sujet en question doit dépasser le plus élevé entre votre DD de Duperie ou le DD normal pour Recueillir les informations à propos de votre enquête. En cas d'échec, ils n'apprennent rien de vos efforts."
                ]
            },
            {
                "name"       : "Équilibre stable",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Acrobaties"
                ],
                "description": [
                    "Vous pouvez conserver votre équilibre facilement, même dans des situations défavorables. Quand vous obtenez un succès en utilisant l'action sports_martial_artsGarder l'équilibre , il devient un succès critique. Vous n'êtes pas sentiment_very_dissatisfiedPris au dépourvu pendant que vous tentez de Garder l'équilibre sur des surfaces étroites et des terrains accidentés."
                ]
            },
            {
                "name"       : "Escalade rapide",
                "level"      : "7",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "maître en Athlétisme"
                ],
                "description": [
                    "Lorsque vous Escaladez, vous vous déplacez de 1,50 mètre supplémentaire sur un succès et de 3 mètres supplémentaires sur un succès critique, jusqu'à atteindre votre Vitesse maximale. Si vous êtes légendaire en Athlétisme, vous obtenez une Vitesse d'escalade égale à votre Vitesse."
                ]
            },
            {
                "name"       : "Étudiant du droit canon",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Religion"
                ],
                "description": [
                    "Vous avez étudié suffisamment de religions pour reconnaître des notions improbables à leur sujet. Si vous obtenez un échec critique à un test de Religion pour Déchiffrer un texte de nature religieuse ou pour Vous souvenir des préceptes d'une foi, il devient un échec. Quand vous tentez de Vous souvenir des préceptes de votre propre foi, si vous obtenez un échec, il devient un succès et si vous obtenez un succès, il devient un succès critique."
                ]
            },
            {
                "name"       : "Évaluation de l'artisan",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Artisanat"
                ],
                "description": [
                    "Votre connaissance de la conception des objets vous permet de discerner également leurs effets magiques. Vous pouvez utiliser Artisanat au lieu d'une compétence associée à une tradition magique pour sports_martial_artsIdentifier la magie sur les objets magiques, mais pas l'utiliser sur toute autre sorte de magie."
                ]
            },
            {
                "name"       : "Évangélisation 1",
                "level"      : "7",
                "traits"     : [
                    "Audible",
                    "Général",
                    "Linguistique",
                    "Mental",
                    "Compétence"
                ],
                "required"   : [
                    "maître en Diplomatie, fidèle d'une religion spécifique ou d'une philosophie"
                ],
                "description": [
                    "Vous mettez le doigt sur un détail qui donne incontestablement raison à votre culte, faisant tourner la tête de votre auditoire. Faites un test de casinoDiplomatie et comparez le résultat au DD de Volonté d'une unique cible qui peut vous entendre et comprendre votre langue. Cette cible est alors temporairement immunisée à Évangélisation et montre du respect à l'égard de votre divinité ou de votre philosophie pendant 1 journée. Une créature qui est déjà d'accord avec vous n'est pas affectée et, à la discrétion du MJ, une cible qui change sincèrement son point de vue pour adhérer à votre culte comme fruit de votre discussion n'est pas autrement affectée.",
                    "Succès critique La cible est sentiment_very_dissatisfiedStupéfiée 2 pendant 1 round.",
                    "Succès La cible est Stupéfiée 1 pendant 1 round.",
                    "Échec La cible n'est pas affectée."
                ]
            },
            {
                "name"       : "Exhorter les croyants",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Religion, suivant d'une religion particulière"
                ],
                "description": [
                    "Votre connaissance des canons de votre foi vous donne l'intuition pour déterminer la meilleure manière d'obtenir de ceux qui partagent votre religion qu'ils vous aident ou suivent vos directives.",
                    "Lorsque vous sports_martial_artsSollicitez quelque chose ou sports_martial_artsContraignez des membres de votre propre croyance, vous pouvez tenter un test de Religion au lieu de Diplomatie ou d'Intimidation et vous obtenez un bonus de circonstances de +2 au test. En cas d'Échec critique en tenant de Solliciter, l'attitude de la cible à votre endroit n'empire pas."
                ]
            },
            {
                "name"       : "Expertise du terrain",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Survie"
                ],
                "description": [
                    "Votre expérience de l'orientation sur un certain type de terrain vous rend extrêmement confiant pour ce faire. Vous obtenez un bonus de circonstances de +1 aux tests de Survie dans l'un des types de terrain suivants, choisi quand vous sélectionnez ce don : aquatique, arctique, désert, forêt, montagne, plaine, ciel, marais ou souterrain.",
                    "Spécial Vous pouvez sélectionner ce don plus d'une fois en choisissant un type de terrain différent à chaque fois."
                ]
            },
            {
                "name"       : "Fabrication de pièges artisanaux",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Artisanat"
                ],
                "description": [
                    "Vous pouvez utiliser l'activité Artisanat pour créer des pièges. Quand vous sélectionnez ce don, vous ajoutez immédiatement les formules de quatre pièges courants de niveau 1 à votre recueil."
                ]
            },
            {
                "name"       : "Fabrication facilitée",
                "level"      : "15",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "légendaire en Artisanat"
                ],
                "description": [
                    "Vous pouvez trouver des manières de fabriquer à peu près tout, en dépit des restrictions. Tant que vous possédez le don de compétence d'Artisanat approprié (comme military_techArtisanat magique pour les objets magiques) et remplissez les conditions de prérequis et de niveau de l'objet, vous ignorez à peu près toutes les autres conditions, comme celle d'appartenir à une ascendance spécifique ou fournir des sorts. Si une condition consiste à ajouter un coût à l'objet, vous devez toujours le payer (y compris les incantations de sorts qui ont eux-mêmes un coût). Vous ne pouvez ignorer les conditions des objets spéciaux qui ont dés moyens exclusifs d'accès et de Fabrication, comme les artefacts. Le MJ décide si vous pouvez ignorer une condition."
                ]
            },
            {
                "name"       : "Fixation rapide",
                "level"      : "7",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "maître en Artisanat"
                ],
                "description": [
                    "Vous ne prenez qu'une minute pour sports_martial_artsFixez un talisman . Si vous êtes légendaire en Artisanat, vous pouvez fixer un talisman en une activité à 3 actions."
                ]
            },
            {
                "name"       : "Furtivité légendaire",
                "level"      : "15",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "légendaire en Discrétion, Furtivité rapide"
                ],
                "description": [
                    "Vous Êtes furtif en toute circonstance à moins que vous ne décidiez d'être vu, même quand vous n'avez nulle part où vous cacher. Vous pouvez sports_martial_artsVous cacher ou sports_martial_artsÊtre furtif même en l'absence d'abri ou sans être sentiment_very_dissatisfiedMasqué . Quand vous employez une tactique d'exploration autre qu' sports_martial_artsÉchapper aux regards , vous obtenez aussi les avantages d'Échapper aux regards, à moins que vous ne le souhaitiez pas."
                ]
            },
            {
                "name"       : "Furtivité rapide",
                "level"      : "7",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "maître en Discrétion"
                ],
                "description": [
                    "Vous pouvez vous déplacer à votre pleine Vitesse quand vous sports_martial_artsÊtes furtif . Vous pouvez utiliser Furtivité rapide pendant que vous Creusez, Escaladez, Volez ou Nagez au lieu de Marcher rapidement si vous avez le type de déplacement correspondant."
                ]
            },
            {
                "name"       : "Glaner des informations",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Société"
                ],
                "description": [
                    "Vous êtes adepte à lire rapidement les papiers laissés sans surveillance et à discerner soigneusement le contenu des plis scellés sans endommager le sceau. Vous pouvez tenter des tests de Société pour Déchiffrer un texte sur un message qui est seulement partiellement entrevu, à l'envers ou inversé de votre perspective, et vous bénéficiez d'un bonus de circonstances de +1 quand vous le faites. Vous pouvez aussi utiliser ce don pour déchiffrer une lettre scellée, ajoutant le trait Manipulation à votre tentative de Déchiffrer un texte. Cela n'empêche pas des témoins de remarquer vos efforts, et vous pouvez avoir besoin de tenter un test de Duperie ou de Discrétion pour éviter de vous faire remarquer. Dans tous les cas d'usage de ce don, le propriétaire est informé de votre effort en cas d'échec critique (par exemple, vous êtes surpris dans votre indiscrétion ou vous perturbez les papiers consultés d'une quelconque manière)."
                ]
            },
            {
                "name"       : "Glaneur",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Survie"
                ],
                "description": [
                    "Lorsque vous utilisez Survie pour Subsister, si vous obtenez n'importe quel résultat pire qu'un succès, vous bénéficiez d'un succès. Sur un succès, vous pouvez fournir des moyens de subsistance pour vous et quatre créatures supplémentaires et pour deux fois plus sur un succès critique. Vous pouvez choisir de prendre soin de la moitié du nombre de créatures et fournir un moyen d'existence confortable.",
                    "Augmentez le nombre de créatures supplémentaires vous parvenez nourrir sur un succès à 8 si vous êtes expert, 16 si vous êtes maître et 32 si vous êtes légendaire."
                ]
            },
            {
                "name"       : "Guide environnemental",
                "level"      : "7",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "maître en Survie"
                ],
                "description": [
                    "Vous pouvez vous adapter rapidement aux climats et aider les autres à faire de même. Après une heure passée dans un environnement, vous et jusqu'à cinq alliés pouvez traiter les effets naturels de la température d'un environnement comme un degré de gravité en moins (traiter le froid extrême comme un froid important ou la chaleur extrême comme une chaleur importante, par exemple). Cette réduction de la gravité est cumulable avec tout équipement (comme l'équipement de froid) ou sort (comme auto_awesomeEndurance environnementale ). Si vous êtes légendaire en Survie, vous pouvez vous protéger et protéger jusqu'à cinq alliés et vous considérez que les effets de la température sont de deux crans moins importants."
                ]
            },
            {
                "name"       : "Guide légendaire",
                "level"      : "15",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "légendaire en Survie"
                ],
                "description": [
                    "Vous connaissez les étendues sauvages tellement bien que vous pouvez aider votre groupe à voyager à travers avec facilité.",
                    "Lorsque vous déterminez le chemin pour votre groupe à travers un terrain naturel, votre groupe obtient un bonus de circonstances de +3 mètres à sa Vitesse pour les besoins de calculer la Vitesse de voyage du groupe, la Vitesse de voyage du groupe ne baisse pas en terrain difficile et le terrain très difficile réduit de moitié la Vitesse de voyage au lieu de la réduire au tiers.",
                    "Cela n'augmente par la Vitesse de votre groupe lors d'une rencontre et ne permet pas davantage d'ignorer un terrain difficile durant une rencontre."
                ]
            },
            {
                "name"       : "Identification assurée",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Arcanes, Nature, Occultisme ou Religion"
                ],
                "description": [
                    "Vous vous trompez rarement lorsque vous identifiez un objet. Lorsque vous faites un test d'Arcanes, de Nature, d'Occultisme ou de Religion pour sports_martial_artsIdentifier la magie , si vous obtenez un échec critique, il devient un échec. Si vous devriez ne pas pouvoir déterminer qu'un objet est maudit en obtenant un succès, vous ne pouvez tout simplement pas l'identifier."
                ]
            },
            {
                "name"       : "Identification de bizarreries",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Occultisme"
                ],
                "description": [
                    "Lorsque vous prenez conscience d'un effet magique ou que vous assistez à l'incantation d'un sort, vous pouvez immédiatement déterminer s'il fait tourner les esprits (avec le trait mental), s'il combat la chance (avec le trait fortune ou infortune) ou s'il révèle des secrets (avec les traits détection, prédiction, révélation ou scrutation). À la discrétion du MJ, des effets similaires peuvent également entrer dans ces catégories. Lorsque vous sports_martial_artsIdentifiez la magie ou que vous sports_martial_artsVous souvenez pour en apprendre plus sur ces effets, vous pouvez toujours utiliser Occultisme sans pénalité et obtenir un bonus de circonstances de +2."
                ]
            },
            {
                "name"       : "Identification rapide",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Arcanes, Nature, Occultisme ou Religion"
                ],
                "description": [
                    "Vous pouvez Identifier la magie rapidement. Quand vous utilisez Identifier la magie, vous ne mettez que 1 minute pour déterminer les propriétés d'un objet, d'un effet en cours ou d'un lieu, au lieu de 10 minutes. Si vous êtes un maître, cela prend une activité de 3 actions, et si vous êtes légendaire, cela prend 1 action."
                ]
            },
            {
                "name"       : "Infirmier",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Médecine"
                ],
                "description": [
                    "Vous avez étudié dans de grands services médicaux, traitant plusieurs patients à la fois et répondant à tous leurs besoins. Quand vous utilisez sports_martial_artsSoigner une maladie ou sports_martial_artsSoigner les blessures , vous pouvez traiter jusqu'à deux cibles. Si vous êtes maître en Médecine, vous pouvez traiter jusqu'à quatre cibles et jusqu'à huit si vous êtes légendaire."
                ]
            },
            {
                "name"       : "Infirmier légendaire",
                "level"      : "15",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "légendaire en Médecine"
                ],
                "description": [
                    "Vous avez découvert des avancées ou techniques médicales qui produisent des résultats miraculeux. Une fois par jour pour chaque cible, vous pouvez passer 1 heure à soigner cette cible et tenter un test de Médecine pour délivrer d'une maladie ou de l'état sentiment_very_dissatisfiedAveuglé , sentiment_very_dissatisfiedSourd , sentiment_very_dissatisfiedCondamné ou sentiment_very_dissatisfiedDrainé . Utilisez le DD de la maladie, du sort ou de l'effet à l'origine de l'état. Si la source de l'effet est un artefact, est au-delà du niveau 20 ou d'une puissance similaire, augmentez le DD de 10."
                ]
            },
            {
                "name"       : "Influencer la nature",
                "level"      : "7",
                "traits"     : [
                    "Intermède",
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "maître en Nature"
                ],
                "description": [
                    "Avec de la patience et du temps, vous pouvez faire chanter les oiseaux, laisser des traces de gibier et en définitive influencer le comportement d'un certain type d'animaux de la région pour vous favoriser et même vous aider dans les jours à venir.",
                    "Le MJ détermine le DD de tout test nécessaire et la durée que ce travail nécessite (habituellement au moins un jour ou deux d'intermède). Même si vous ne pouvez pas directement contrôler comment vous avez influencé la nature, vous pouvez espérer en tirer certains effets, comme une chasse plus facile ou des oiseaux qui font silence lorsque le danger approche.",
                    "Si vous êtes légendaire en Nature, vous pouvez susciter ces mêmes ajustements au comportement animal dans la zone en y consacrant seulement 10 minutes."
                ]
            },
            {
                "name"       : "Inventeur de génie",
                "level"      : "2",
                "traits"     : [
                    "Intermède",
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Artisanat"
                ],
                "description": [
                    "Vous êtes un génie en Artisanat, facilement capable de déterminer comment les choses sont faites et de créer de nouvelles inventions. Vous pouvez utiliser les périodes d'Intermède pour inventer une formule courante que vous ne connaissez pas encore. Ceci fonctionne comme l'activité Artisanat : vous dépensez la moitié du prix de la formule à l'avance, tentez un test d'Artisanat et, sur un succès, soit vous finissez la formule en payant le reste du prix, soit vous continuez à y travailler plus longtemps pour en réduire les coûts. La différence réside dans le fait que vous passez le temps supplémentaire en recherche, conception et développement, plutôt que dans la création d'un objet. Une fois que c'est terminé, vous rajoutez la nouvelle formule que vous avez inventée à votre recueil de formules.",
                    "Le MJ peut vous autoriser à inventer des formules peu courantes ou rares, habituellement avec un DD augmenté. Vous aurez besoin du don Artisanat alchimique pour inventer des formules alchimiques et Artisanat magique pour inventer des formules magiques."
                ]
            },
            {
                "name"       : "Langue des signes",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Société"
                ],
                "description": [
                    "Vous apprenez les langues des signes associées aux langues que vous connaissez, vous permettant de les pratiquer et de les comprendre. Les langues des signes nécessitent généralement les deux mains pour exprimer des concepts plus complexes, et elles sont visuelles au lieu d'audibles.",
                    "Les langues des signes sont difficiles à comprendre pendant les combats à cause du niveau d'attention requis, contrairement aux gestes élémentaires tels que signaler un ennemi pour suggérer une cible. Les langues des signes sont difficiles à utiliser dans des zones de faible visibilité, de la même façon que parler est difficile dans un environnement bruyant."
                ]
            },
            {
                "name"       : "Linguiste légendaire",
                "level"      : "15",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "légendaire en Société, Polyglotte"
                ],
                "description": [
                    "Vous êtes tellement doué avec les langues que vous pouvez créer instantanément un pidgin. Vous pouvez toujours parler à n'importe quelle créature qui parle une langue - même une langue que vous ne connaissez pas – en créant une nouvelle langue pidgin qui utilise des termes simplifiés et transmet des concepts de base. Pour ce faire, vous devez d'abord au moins comprendre quel moyen de communication la créature utilise (parole, langue des signes, etc.)."
                ]
            },
            {
                "name"       : "Lire sur les lèvres",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Société"
                ],
                "description": [
                    "Vous pouvez lire sur les lèvres des gens proches de vous que vous pouvez clairement voir. Quand vous êtes à votre aise, vous pouvez le faire automatiquement. En mode rencontre ou quand vous tentez de lire sur les lèvres dans des conditions plus difficiles, vous êtes sentiment_very_dissatisfiedFasciné et sentiment_very_dissatisfiedPris au dépourvu à chaque round durant lequel vous vous concentrez sur les mouvements des lèvres et vous devez réussir un test de Société (DD déterminé par le MJ) pour réussir à lire sur les lèvres de quelqu'un."
                ]
            },
            {
                "name"       : "Lutteur contre les titans",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Athlétisme"
                ],
                "description": [
                    "Vous pouvez tenter de sports_martial_artsDésarmer , sports_martial_artsRepositionner , sports_martial_artsSaisir , sports_martial_artsPousser ou faire un sports_martial_artsCroc-en-jambe aux créatures de deux tailles plus grandes que la vôtre ou de trois tailles plus grandes que la vôtre si vous êtes légendaire en Athlétisme."
                ]
            },
            {
                "name"       : "Magie bizarre",
                "level"      : "7",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "maître en Occultisme"
                ],
                "description": [
                    "Vous pouvez faire appel à des variations étranges dans vos incantations, que vous lanciez ou non des sorts occultes. Les DD pour Reconnaître des sorts que vous incantez et Identifier la magie que vous utilisez sont augmentés de 5."
                ]
            },
            {
                "name"       : "Magie des racines",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Occultisme"
                ],
                "description": [
                    "Vos talismans protègent contre la magie immonde. Au cours de vos préparatifs quotidiens, vous pouvez assembler une petite bourse avec des morceaux d'herbes, de cheveux, d'huiles sacrées et d'autres ingrédients rituels, que vous pouvez donner à un allié (qui ne peut être vous-même). La première fois dans la journée que l'allié tente un jet de sauvegarde contre un sort ou une hantise, il obtient un bonus de circonstances de +1 au test. Ce bonus passe à +2 si vous êtes expert en Occultisme ou à +3 si vous êtes légendaire.",
                    "flareEffet : Magie des racines"
                ]
            },
            {
                "name"       : "Maître trapéziste",
                "level"      : "7",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "maître en Acrobaties"
                ],
                "description": [
                    "Vous vous mouvez avec grâce en vol et pouvez accomplir des cascades aériennes incroyables. Vous obtenez un bonus de circonstances de +2 aux tests d'Acrobaties pour sports_martial_artsManœuvrer en vol et pouvez combiner deux manœuvres en une unique action, telles que changer de direction tout en faisant une ascension ou une descente rapide ou planer dans les vents violents. Le DD du test d'Acrobaties est égal au DD de la plus difficile manœuvre +5.",
                    "Si vous êtes légendaire en Acrobaties, vous pouvez combiner jusqu'à trois de ces manœuvres en une unique action ; le DD du test d'Acrobaties est égal au DD de la plus difficile des manœuvres +10. Quelle que soit la combinaison, ces manœuvres vous permettent rarement de vous déplacer plus loin que votre Vitesse de sports_martial_artsVol ."
                ]
            },
            {
                "name"       : "Manières courtoises",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Société"
                ],
                "description": [
                    "Vous avez été élevé parmi la noblesse ou avez appris l'étiquette et l'attitude adaptés, vous permettant de vous présenter comme un noble et de jouer à des jeux d'influence et de politique. À moins que vous ne vous présentiez intentionnellement vous-même différemment, quiconque vous parle part du principe que vous êtes un noble ou associé de près à la noblesse, comme le serait un serviteur important. Vous pouvez utiliser Société pour sports_martial_artsFaire bonne impression sur un noble, ainsi que Vous faire passer pour un noble ou un individu noble spécifique. Si vous utilisez les compétences ordinaires dans ces situations, vous obtenez un bonus de circonstances de +1 au test à la place."
                ]
            },
            {
                "name"       : "Maraudeur aquatique",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Athlétisme"
                ],
                "description": [
                    "Vous avez appris à combattre sous l'eau. Vous n'êtes pas sentiment_very_dissatisfiedPris au dépourvu lorsque vous êtes dans l'eau et vous ne subissez pas les pénalités habituelles lorsque vous utilisez une arme de corps-à-corps contondante ou tranchante dans l'eau."
                ]
            },
            {
                "name"       : "Marque d'ombre",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Discrétion"
                ],
                "description": [
                    "Vous avez appris des astuces spéciales qui vous aident à filer des individus sans vous faire remarquer.",
                    "Lorsque vous faites un test de Discrétion pour sports_martial_artsÉchapper aux regards en filant une cible spécifique, la cible subit une pénalité de circonstances de -2 à son DD de Perception. Si vous êtes maître en Discrétion, la pénalité est de -3 et de -4 si vous êtes légendaire.",
                    "Si vous débutez la rencontre avec la cible en étant resté dans son ombre, la cible subit cette même pénalité à son jet d'initiative et à son DD de Perception pour déterminer si elle vous a remarqué, comme cela est habituel lorsque vous sports_martial_artsÊtes furtif ."
                ]
            },
            {
                "name"       : "Médecine militaire 1",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Guérison",
                    "Manipulation",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Médecine"
                ],
                "description": [
                    "Conditions Vous portez ou transportez du Matériel de guérisseur.",
                    "Vous pouvez vous rafistoler ou rafistoler un allié adjacent, même en combat. Faites un test de Médecine avec le même DD que pour sports_martial_artsSoigner les blessures et restaurez un montant de Points de vie correspondant. Cela ne retire pas l'état sentiment_very_dissatisfiedBlessé . Comme avec Soigner les blessures, vous pouvez tenter des tests contre des DD plus élevés si vous avez le degré de maîtrise minimum. La cible est alors temporairement flareimmunisée à votre Médecine militaire pendant 1 journée. Cela ne la rend pas immunisée, ni ne compte, comme Soigner les blessures."
                ]
            },
            {
                "name"       : "Médecine naturelle",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Nature"
                ],
                "description": [
                    "Vous pouvez appliquer des remèdes naturels pour soigner vos alliés. Vous pouvez utiliser Nature au lieu de Médecine pour sports_martial_artsSoigner les blessures , y compris lorsqu'un degré de maîtrise plus élevé vous permet de tenter des tests plus difficiles. Cela ne remplace pas Médecine pour les utilisations de cette compétence autres que Soigner les blessures ou pour des prérequis de dons.",
                    "Si vous êtes en pleine nature, vous pourriez avoir plus facilement accès à des ingrédients frais, vous permettant d'obtenir un bonus de circonstances de +2 à votre test pour Soigner les blessures en utilisant Nature, à la discrétion du MJ."
                ]
            },
            {
                "name"       : "Menteur charismatique",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Duperie"
                ],
                "description": [
                    "Votre charme vous permet de convaincre ceux à qui vous mentez. Quand vous obtenez un succès critique en utilisant l'action sports_martial_artsMentir , l'attitude de la cible envers vous augmente d'un échelon, comme si vous aviez obtenu un succès en utilisant Diplomatie pour sports_martial_artsFaire bonne impression . Cela ne fonctionne qu'une fois par conversation et, si vous obtenez un succès critique contre plusieurs cibles en utilisant le même résultat, vous choisissez l'attitude à améliorer d'une créature. Vous devez mentir en transmettant des informations apparemment importantes, en rehaussant votre statut ou vous faire valoir, ce que des mensonges triviaux ou insignifiants ne vous permettraient pas de faire."
                ]
            },
            {
                "name"       : "Mort de peur 1",
                "level"      : "15",
                "traits"     : [
                    "Émotion",
                    "Terreur",
                    "Général",
                    "Mise hors de combat",
                    "Compétence"
                ],
                "required"   : [
                    "légendaire en Intimidation"
                ],
                "description": [
                    "Vous pouvez tellement effrayer des ennemis qu'ils pourraient en mourir. Faites un test d' casinoIntimidation contre le DD de Volonté d'une créature vivante située à 9 mètres de vous que vous pouvez percevoir ou observer et qui peut vous percevoir ou vous observer. Si la cible ne peut pas vous entendre ou ne peut pas comprendre la langue que vous parlez, vous subissez une pénalité de circonstances de -4. Ensuite, la créature est temporairement immunisée pendant 1 minute.",
                    "Succès critique La cible doit réussir un jet de casinoVigueur contre votre DD d'Intimidation. En cas d'échec critique, elle meurt. En cas d'échec ou de succès, elle devient sentiment_very_dissatisfiedEffrayée 2 et est sentiment_very_dissatisfiedEn fuite pendant 1 round. L'effet d'échec critique possède le trait mort.",
                    "Succès La cible devient sentiment_very_dissatisfiedEffrayée 2 .",
                    "Échec La cible devient sentiment_very_dissatisfiedEffrayée 1 .",
                    "Échec critique La cible n'est pas affectée."
                ]
            },
            {
                "name"       : "Nage rapide",
                "level"      : "7",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "maître en Athlétisme"
                ],
                "description": [
                    "Vous Nagez 1,50 mètre plus loin sur un succès et 3 mètres plus loin sur un succès critique, jusqu'à votre Vitesse maximale. Si vous êtes légendaire en Athlétisme, vous obtenez une Vitesse de nage égale à votre Vitesse."
                ]
            },
            {
                "name"       : "Négociation légendaire 3",
                "level"      : "15",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "légendaire en Diplomatie"
                ],
                "description": [
                    "Vous pouvez négocier incroyablement rapidement dans des situations défavorables. Vous tentez de sports_martial_artsFaire bonne impression puis de sports_martial_artsSolliciter votre adversaire pour qu'il cesse son activité actuelle et engage des négociations. Vous subissez une pénalité de -5 à votre test de Diplomatie. Généralement, le DD de ce test est le DD de Volonté de la créature, bien que le MJ puisse les modifier en fonction de la situation. Certaines créatures pourraient être incapables de cesser quels que soient leurs désirs personnels et même celles qui acceptent de parlementer pourraient finalement trouver vos arguments faibles et retourner à la violence."
                ]
            },
            {
                "name"       : "Observation de la nature",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Survie"
                ],
                "description": [
                    "Vous pouvez étudier les détails des régions sauvages pour déterminer la présence de créatures proches. Vous pouvez passer 10 minutes à évaluer la zone autour de vous pour découvrir quelles créatures se trouvent à proximité, en vous basant sur les nids, les excréments et les marques sur la végétation. Faites un test de Survie contre un DD déterminé par le MJ en fonction de l'évidence des signes. Sur un succès, vous pouvez tenter un test pour Vous souvenir avec une pénalité de -2 pour en apprendre plus au sujet des créatures juste à partir de ces signes. Si vous êtes maître en Survie, vous ne subissez pas la pénalité."
                ]
            },
            {
                "name"       : "Oeil biographique",
                "level"      : "7",
                "traits"     : [
                    "Général",
                    "Secret",
                    "Compétence"
                ],
                "required"   : [
                    "maître en Société"
                ],
                "description": [
                    "Même après une brève conversation ou interaction sociale, vous relevez des indices sociaux et visuels subtils pour apprendre nombre de choses sur l'origine et l'histoire d'une personne. Vous pourriez remarquer des traces vertes sous ses ongles et déterminer qu'il s'agit d'un herboriste, remarquer un symbole indiquant qu'elle est membre d'une société secrète ou n'importe quoi de similaire. Vous ne pouvez déterminer que des détails qui sont en lien avec son rôle social, de sorte que vous pourriez apprendre le quartier de la ville dans lequel un vampire réside, mais rien apprendre sur ses faiblesses ni même nécessairement qu'il s'agit d'un vampire. Passez 1 minute en présence de quelqu'un que vous n'avez jamais rencontré ou n'avez pas rencontré depuis que vous avez obtenu le don Œil biographique, puis faites un test de casinoSociété, DD 30 . Vous obtenez un bonus de circonstances de +1 au test si vous avez engagé la conversation avec la personne au cours de cette période. Si la personne essaie délibérément de cacher sa nature ou présente une fausse identité, vous apprenez des informations à propos de sa fausse biographie plutôt que de la vraie à moins que le résultat de votre test de Société n'excède son DD de Volonté.",
                    "Succès critique Vous apprenez la profession de la créature, sa spécialité dans cette profession et un de ses exploits majeurs ou un fait controversé qui s'est produit au cours de sa carrière. Vous apprenez aussi la nation et la communauté où elle vit, ainsi que son quartier dans les villes assez grandes pour posséder des districts. De plus, vous apprenez la nation ou la communauté où elle a passé ses années de formation.",
                    "Succès Vous apprenez la profession de la créature et sa spécialité au sein de sa profession. Vous apprenez la nation ou la communauté où elle vit habituellement.",
                    "Échec Vous apprenez la profession de la créature et la région du monde dont elle est originaire mais pas davantage.",
                    "Échec critique Vous obtenez un renseignement erroné à propos de la créature."
                ]
            },
            {
                "name"       : "Oeil pour les nombres 1",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Société"
                ],
                "description": [
                    "Vous avez appris à estimer rapidement le nombre d'objets dans un groupe avec une précision relative en un coup d'œil. Vous apprenez immédiatement le nombre d'objets visuellement semblables dans un groupe que vous pouvez voir, arrondi au premier chiffre du nombre total. Par exemple, vous pourriez regarder une valise de flacons de potions et apprendre qu'il contient environ 30 fioles, mais vous ne pourriez savoir qu'il en contient exactement 33, combien de types différents de potions il y avait, ou combien de quel type. De la même manière vous pourriez regarder une pile de 2.805 pièces et savoir qu'il y avait environ 3.000 pièces en tout.",
                    "Si vous comptez un nombre spécifique d'objets en possession d'un ennemi, tels que le nombre de pièces ou d'éléments d'équipement qu'il porte, vous pouvez utiliser cette information la prochaine fois que vous sports_martial_artsFeintez ou sports_martial_artsCréez une diversion contre cette cible, pendant 1 minute. Si vous le faites, vous bénéficiez d'un bonus de circonstances de +1 à votre test et pouvez utiliser Société au lieu de Duperie pour le faire.",
                    "Vous pouvez utiliser cette action lorsque vous essayez de Déchiffrer un texte qui est essentiellement numérique ou mathématique, pour obtenir un bonus de circonstances de +2 à votre test."
                ]
            },
            {
                "name"       : "Ose me mentir",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Duperie"
                ],
                "description": [
                    "Vous pouvez utiliser Duperie pour semer des embûches pour découvrir que quelqu'un essaie de vous tromper. Si vous pouvez engager la conversation avec quelqu'un qui essaie de vous sports_martial_artsMentir , utilisez votre DD de Duperie s'il est supérieur à votre DD de Perception pour déterminer s'il y parvient. Cela ne s'applique pas si vous ne dialoguez pas l'un avec l'autre, comme lorsque quelqu'un tente de Mentir pendant un long discours."
                ]
            },
            {
                "name"       : "Outil improvisé",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Artisanat"
                ],
                "description": [
                    "Vous pouvez bricoler des solutions lorsque vous ne disposez pas des outils appropriés. Vous pouvez tenter de sports_martial_artsRéparer les objets endommagés sans disposer d'une trousse de réparation.",
                    "Si vous disposez de matériaux bruts accessibles, vous pouvez sports_martial_artsFabriquer des workChausses trappes basiques, des workBougies , une workBoussole , un workpied-de-biche , des workArticles de pêche , un worksilex et amorce , un workMarteau , une workÉchelle , un workPiton , de la workCorde , une workPerche de 3 m , des workCrochets de remplacement pour la trousse du voleur , un workoutil long ou un workOutil court ou encore une workTorche comme si vous disposiez de leurs formules."
                ]
            },
            {
                "name"       : "Paroles encourageantes 1",
                "level"      : "2",
                "traits"     : [
                    "Audible",
                    "Général",
                    "Linguistique",
                    "Mental",
                    "Compétence",
                    "Endurance"
                ],
                "required"   : [
                    "qualifié en Diplomatie"
                ],
                "description": [
                    "Conditions La cible alliée a perdu des points d'Endurance au cours du dernier round.",
                    "Vous tenez à un allié dans les 9 mètres un bref discours d'encouragement, l'aidant à récupérer. Faites un test de Diplomatie. Le DD est habituellement de 15, bien que le MJ puisse l'ajuster en fonction des circonstances. Si vous êtes expert en Diplomatie, vous pouvez faire un test contre un DD 20 pour augmenter le nombre de points d'Endurance récupérés de 5 ; si vous êtes maître, vous pouvez tenter un test contre un DD 30 pour augmenter le nombre de points d'Endurance de 15 ; si vous êtes légendaire, vous pouvez faire un test contre un DD 40 pour augmenter les points d'Endurance de 25. Quel que soit le résultat, l'allié est temporairement immunisé aux Paroles d'encouragement jusqu'à ce qu'il ait soit sports_martial_artsRepris son souffle ou qu'il se soit reposé au cours de la journée.",
                    "Succès critique L'allié récupère 2d8 points d'Endurance",
                    "Succès L'allié récupère 1d8 Points d'Endurance.",
                    "Échec critique L'allié subit 1d8 dégâts mentaux, mais cela ne peut que réduire les Points d'Endurance, jamais les Points de vie."
                ]
            },
            {
                "name"       : "Pas besoin de s'alarmer 3",
                "level"      : "1",
                "traits"     : [
                    "Audible",
                    "Concentration",
                    "Émotion",
                    "Général",
                    "Linguistique",
                    "Mental",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Diplomatie"
                ],
                "description": [
                    "Vous tentez de réduire la panique. Faites un test de casinoDiplomatie et comparez le au DD de Volonté des créatures dans une crop_freeémanation de 3 mètres autour de vous qui sont sentiment_very_dissatisfiedEffrayées . Chacune d'entre elle est ensuite temporairement immunisée pendant 1 heure à l'utilisation de ce don.",
                    "Succès critique Réduisez l'état Effrayé de la créature de 2.",
                    "Succès Réduisez l'état Effrayé de la créature de 1."
                ]
            },
            {
                "name"       : "Perspicacité forensique",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Médecine"
                ],
                "description": [
                    "Vous comprenez les principes de la médecine forensique, ce qui vous rend plus à même d'examiner un corps à la recherche des causes de la mort ou d'une blessure.",
                    "Vous pouvez réaliser un examen forensique sur un corps, comme indiqué sous sports_martial_artsSe souvenir de connaissances dans la compétence de Médecine en la moitié du temps normal (avec un minimum de 5 minutes). Si vous réussissez ce test, vous pouvez effectuer immédiatement un test de Se souvenir de connaissances pour Suivre une piste que vous venez de trouver et ce, avec un bonus de circonstances de +2.",
                    "Ce test correspond généralement à la cause de la mort ou de la blessure, comme un test d'Artisanat pour identifier le poison ou l'arme utilisée ou un second test de Médecine pour identifier une maladie précise. Si vous préférez, au lieu de cela, vous pouvez tenter de Vous souvenir de connaissances au sujet du type de créature dont vous venez d'examiner le corps, en utilisant la compétence correspondante et en profitant du même bonus de circonstances.",
                    "Le bonus de circonstances passe à +3 si vous êtes maître en Médecine et à +4 si vous êtes légendaire."
                ]
            },
            {
                "name"       : "Pisteur expérimenté",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Survie"
                ],
                "description": [
                    "Pister est une seconde nature pour vous et, quand cela est nécessaire, vous pouvez suivre une piste sans relâche. Vous pouvez sports_martial_artsPister en vous déplaçant à votre pleine Vitesse en subissant une pénalité de -5 à votre test de Survie. Si vous êtes maître en Survie, vous ne subissez pas la pénalité de -5. Si vous êtes légendaire, vous n'avez plus besoin d'effectuer de nouveau test de Survie toutes les heures quand vous pistez, bien que vous deviez toujours en effectuer un chaque fois que des changements importants se produisent sur le parcours."
                ]
            },
            {
                "name"       : "Planificateur de bataille",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Connaissance de la guerre"
                ],
                "description": [
                    "Vous êtes constamment en train de faire des plans et des scénarios de bataille, déterminant des stratégies et recueillant des renseignement pour les utiliser par la suite. Lorsque vous reconnaissez une position ennemie ou recevez un rapport détaillé d'un allié qui a recueilli du renseignement sur la position ennemie, si vous obtenez des indications claires de leur nombre, de leur position et de l'identité des potentiels adversaires, vous pouvez passer 1 minute à établir un plan de bataille qui prend en compte les facteurs potentiels et réduit le rôle de la chance dans l'équation.",
                    "Faites un test de Connaissance de la guerre. Tant que l'information a été précise et le reste, lorsque vous déterminez l'initiative contre ces ennemis,vous pouvez utiliser le résultat du test de Connaissance de la guerre que vous avez précédemment obtenu pour votre test d'initiative ; si vous faites ainsi, c'est un effet de fortune."
                ]
            },
            {
                "name"       : "Polyglotte",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Société"
                ],
                "description": [
                    "Vous assimilez rapidement de nouvelles langues. Vous apprenez deux nouvelles langues parmi les langues courantes et peu courantes et parmi toutes celles auxquelles vous avez accès. Vous apprenez une langue supplémentaire si vous êtes ou devenez maître en Société et encore une de plus si vous êtes ou devenez légendaire.",
                    "Spécial Vous pouvez sélectionner ce don plusieurs fois. À chaque fois, vous apprenez des langues supplémentaires."
                ]
            },
            {
                "name"       : "Portefaix",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Athlétisme"
                ],
                "description": [
                    "Vous pouvez transporter plus que ne le suggère votre carrure. Augmentez vos limites d'Encombrement et Surchargé de 2."
                ]
            },
            {
                "name"       : "Premier de cordée",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Athlétisme"
                ],
                "description": [
                    "Lorsque vous grimpez, vous pouvez préparer la route pour que les autres vous suivent et vous pouvez assurer vos alliés pour éviter un désastre. Lorsque vos alliés tentent d'Escalader en suivant la route que vous avez tracée en utilisant l'activité d'exploration Suivre l'expert, en cas d'échec critique pour Escalader, vous pouvez tenter un test d'Athlétisme contre le même DD. Si vous réussissez, votre allié subit qu'un échec au lieu d'un échec critique. Si vous obtenez aussi un échec critique, vous faites tous les deux l'expérience des conséquences de l'échec critique."
                ]
            },
            {
                "name"       : "Premiers soins avancés",
                "level"      : "7",
                "traits"     : [
                    "Général",
                    "Guérison",
                    "Manipulation",
                    "Compétence"
                ],
                "required"   : [
                    "maître en Médecine"
                ],
                "description": [
                    "Vous utilisez vos qualifications médicales pour améliorer l'état des malades et pour dissiper les peurs. Lorsque vous utilisez Médecine pour sports_martial_artsProdiguer les premiers soins , au lieu de Stabiliser un personnage ou d'Arrêter un saignement, vous pouvez réduire l'état d'un allié sentiment_very_dissatisfiedEffrayé ou sentiment_very_dissatisfiedNauséeux de 2 ou de dissiper un de ces états entièrement en cas de succès critique. Vous ne pouvez mettre un terme qu'à un état à la fois. Le DD pour le test de Médecine est habituellement le DD de l'effet à l'origine de l'état."
                ]
            },
            {
                "name"       : "Professionnel expérimenté",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Connaissance"
                ],
                "description": [
                    "Vous protégez soigneusement vos activités professionnelles pour éviter les catastrophes. Quand vous utilisez Connaissances pour sports_martial_artsGagner de l'argent , si vous obtenez un échec critique, il devient un échec. Si vous êtes expert en Connaissance, vous gagnez deux fois plus de revenus suite à un test raté pour Gagner de l'argent, à moins qu'il ne s'agisse au départ d'un échec critique."
                ]
            },
            {
                "name"       : "Professionnel légendaire",
                "level"      : "15",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "légendaire en Connaissance"
                ],
                "description": [
                    "Votre renommée s'est répandue à travers les territoires (par exemple, si vous avez Connaissance de la guerre, vous pourriez être un général ou un tacticien légendaire).",
                    "Votre renommée s'est répandue à travers les territoires. Les PNJ qui ont n'importe quelle compétence indiquée en Société ont généralement une attitude envers vous d'un échelon meilleure que la normale, en fonction de votre réputation et de la disposition de la créature. Par exemple, si vous êtes réputé pour votre comportement cruel et exigeant, les créatures pourraient être intimidées par vous plutôt qu'amicales envers vous. Quand vous sports_martial_artsGagnez de l'argent avec Connaissance, vous obtenez des métiers égaux à votre niveau ou augmenté de 2 niveaux, si c'est plus élevé."
                ]
            },
            {
                "name"       : "Proie fuyante",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Acrobaties ou en Athlétisme"
                ],
                "description": [
                    "Vous êtes capable de vous défaire des liens plus facilement que les autres. Lorsque vous faites un test pour sports_martial_artsVous échapper en utilisant Acrobaties ou Athlétisme, vous réduisez la pénalité d'attaques multiples lors des tentatives répétées à -4 et -8 si vous êtes qualifié dans la compétence. Les pénalités passent à -3 et -6 si vous êtes maître dans la compétence appropriée. Si vous êtes légendaire dans la compétence, vous ne subissez pas de pénalité pour les tentatives multiples au cours du même tour. quelle que soit votre maîtrise, vos tentatives pour Vous échapper ont toujours le trait attaque et continuent de compter pour calculer la pénalité d'attaques multiples pour les autres actions."
                ]
            },
            {
                "name"       : "Prouesse intimidante",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "Force +3, expert en Intimidation"
                ],
                "description": [
                    "Dans les situations où vous pouvez physiquement menacer la cible quand vous sports_martial_artsContraignez ou sports_martial_artsDémoralisez , vous obtenez un bonus de circonstances de +1 à votre test d'Intimidation et vous ignorez la pénalité induite par le fait de ne pas partager une langue. Si votre score de Force est de +5 ou supérieur et que vous êtes maître en Intimidation, ce bonus passe à +2."
                ]
            },
            {
                "name"       : "Ramper agilement",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Acrobaties"
                ],
                "description": [
                    "Vous pouvez sports_martial_artsRamper incroyablement rapidement - jusqu'à la moitié de votre Vitesse au lieu de 1,50 mètre. Si vous êtes maître en Acrobaties, vous pouvez Ramper à votre pleine Vitesse et si vous êtes légendaire, vous n'êtes pas sentiment_very_dissatisfiedPris au dépourvu en étant sentiment_very_dissatisfiedÀ terre ."
                ]
            },
            {
                "name"       : "Reconnaissance rapide f",
                "level"      : "7",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "maître en Arcanes, Nature, Occultisme ou Religion, Reconnaître des sorts"
                ],
                "description": [
                    "Vous Reconnaissez les sorts rapidement. Une fois par round, vous pouvez military_techReconnaître un sort en utilisant une compétence dans laquelle vous êtes maître par une action gratuite."
                ]
            },
            {
                "name"       : "Reconnaître des sorts r",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Secret",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Arcanes, Nature, Occultisme ou Religion"
                ],
                "description": [
                    "Déclencheur Une créature dans votre ligne de mire Lance un sort que vous n'avez pas préparé ou qui ne figure pas dans votre répertoire ou un piège ou un objet similaire lance un tel sort. Vous devez être conscient de l'incantation.",
                    "Si vous êtes qualifié dans la compétence appropriée pour la tradition du sort et qu'il s'agit d'un sort courant de rang inférieur ou égal à 2, vous l'identifiez automatiquement (vous devez toujours effectuer un jet pour tenter d'obtenir un succès critique mais vous ne pouvez obtenir un résultat moins bon qu'un succès). Le plus haut rang du sort que vous identifiez automatiquement passe à 4 si vous êtes expert, à 6 si vous êtes un maître et à 10 si vous êtes légendaire. Le MJ fait un test secret d'Arcanes, de Nature, d'Occultisme ou de Religion, en fonction de ce qui correspond à la tradition du sort incanté. Si vous n'êtes pas qualifié dans la compétence, vous ne pouvez pas obtenir de résultat meilleur qu'un échec.",
                    "Succès critique Vous reconnaissez correctement le sort et gagnez un bonus de circonstances de +1 à votre jet de sauvegarde ou à votre CA contre le sort.",
                    "Succès Vous reconnaissez correctement le sort.",
                    "Échec Vous ne parvenez pas à reconnaître le sort.",
                    "Échec critique Vous identifiez le sort de travers et le prenez pour un autre sort, au choix du MJ."
                ]
            },
            {
                "name"       : "Récupération continue",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Médecine"
                ],
                "description": [
                    "Vous surveillez avec zèle l'évolution du patient pour administrer plus vite son traitement. Quand vous sports_martial_artsSoignez les blessures , votre patient devient immunisé uniquement pendant 10 minutes au lieu de 1 heure. Cela ne s'applique qu'à vos seules activités visant à Soigner les blessures, pas aux autres que le patient reçoit."
                ]
            },
            {
                "name"       : "Récupération robuste",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Médecine"
                ],
                "description": [
                    "Vos connaissances en médecine populaire vous aident à vous remettre des maladies et des poisons et la pratiquer avec régularité vous a rendu particulièrement résistant. Lorsque vous Soignez une maladie ou Soignez un empoisonnement ou que quelqu'un d'autre utilise l'une de ces actions sur vous, augmentez le bonus de circonstances accordé en cas de succès à +4 et si le résultat du jet de sauvegarde du patient est un succès, il obtient un succès critique."
                ]
            },
            {
                "name"       : "Récupération vigoureuse",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Médecine"
                ],
                "description": [
                    "Vous avez appris la médecine traditionnelle pour vous aider à récupérer des maladies et du poison et son utilisation assidue vous a rendu particulièrement résistant. Quand vous Soignez une maladie ou un poison, ou si quelqu'un d'autre utilise une de ces actions sur vous, augmentez à +4 le bonus de circonstances accordé sur un succès et si le résultat du jet de sauvegarde du patient est un succès, il obtient un succès critique."
                ]
            },
            {
                "name"       : "Regard intimidant",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Intimidation"
                ],
                "description": [
                    "Vous pouvez sports_martial_artsDémoraliser d'un simple regard. Quand vous le faites, Démoraliser perd le trait audible et obtient le trait visuel et vous ne subissez pas de pénalité si la créature ne comprend pas votre langue."
                ]
            },
            {
                "name"       : "Réparation rapide",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Artisanat"
                ],
                "description": [
                    "Pour vous, l'activité sports_martial_artsRéparer un objet perd le trait exploration et prend 1 minute au lieu de 10. Si vous êtes maître en Artisanat, cela vous prend 3 actions. Si vous êtes légendaire, cela prend 1 action."
                ]
            },
            {
                "name"       : "Représentation acrobatique",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Acrobaties"
                ],
                "description": [
                    "Vous êtes un acrobate incroyable, une merveille d'évocation et vous êtes capable de capter l'attention du public avec vos prouesses. Vous pouvez utiliser un test d' sports_martial_artsAcrobaties au lieu d'un test de Représentation lorsque vous utilisez l'action sports_martial_artsSe produire . Si vous êtes qualifié à la fois en Acrobaties et en Représentation, vous bénéficiez d'un bonus de circonstances de +1 au test d'Acrobaties pour Vous produire."
                ]
            },
            {
                "name"       : "Représentation de diversion 1",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Représentation"
                ],
                "description": [
                    "Vos représentations sont plus particulièrement divertissantes, permettant à vos alliés de se faufiler plus facilement. Vous sports_martial_artsCréez une diversion , à la différence que vous lancez un test de Représentation au lieu de Duperie et que les avantages du succès s'applique à l'allié de votre choix plutôt qu'à vous. Les effets d'une réussite durent jusqu'à la fin du tour de cet allié et peuvent se terminer plus tôt en fonction des actions de l'allié. Vous n'avez pas besoin d'observer votre allié ou de savoir où il se trouve, mais vous devez savoir qu'il est présent pour le choisir."
                ]
            },
            {
                "name"       : "Représentation fascinante",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Représentation"
                ],
                "description": [
                    "Quand vous sports_martial_artsVous produisez , comparez votre résultat au DD de Volonté d'un observateur. Si vous obtenez un succès, la cible est sentiment_very_dissatisfiedFascinée pendant 1 round. Si l'observateur est dans une situation qui nécessite une attention immédiate, telle qu'un combat, vous devez obtenir un succès critique pour le fasciner et l'action Représentation obtient le trait mise hors de combat. Vous devez choisir quelle créature vous tentez de fasciner avant d'effectuer votre test et la cible est ensuite temporairement immunisée pendant 1 heure.",
                    "Si vous êtes expert en Représentation, vous pouvez fasciner jusqu'à quatre observateurs. Si vous êtes maître, vous pouvez fasciner jusqu'à dix observateurs et si vous êtes légendaire, vous pouvez fasciner n'importe quel nombre d'observateurs en même temps."
                ]
            },
            {
                "name"       : "Représentation impressionnante",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Représentation"
                ],
                "description": [
                    "Votre représentation inspire l'admiration et vous fait gagner des fans. Vous pouvez sports_martial_artsFaire bonne impression en utilisant Représentation au lieu de Diplomatie. Si vous passez au moins 10 minutes à vous produire devant un public, vous pouvez faire une Représentation en ciblant jusqu'à 10 membres du public qui étaient présents pendant toute la durée de la représentation, sans subir la pénalité normale. Le nombre de cibles passe à 20 lors d'une représentation d'une heure et à 50 lors d'une représentation de deux heures."
                ]
            },
            {
                "name"       : "Requête sans vergogne",
                "level"      : "7",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "maître en Diplomatie"
                ],
                "description": [
                    "Vous pouvez minimiser les conséquences ou le caractère outrageant de vos requêtes en utilisant l'effronterie pure et le charme.",
                    "Lorsque vous sports_martial_artsSollicitez quelque chose, vous réduisez l'augmentation de tout DD liée au fait de faire des demandes outrageantes de 2 et si vous subissez un échec critique à votre sollicitation, il devient un échec. Bien que cela signifie que vous ne pouvez jamais provoquer la dégradation de l'attitude de votre cible à votre égard en présentant des Sollicitations, elles finissent par être lassées de ces dernières, même si elles conservent toujours une attitude positive à votre endroit."
                ]
            },
            {
                "name"       : "Réseau criminel",
                "level"      : "2",
                "traits"     : [
                    "Peu courant",
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Société, Savoir urbain"
                ],
                "description": [
                    "Vous avez eu des relations avec des personnages peu recommandables que vous pouvez utiliser comme leviers pour échanger des faveurs ou pour rencontrer des gens puissants. Lorsque vous êtes dans une zone ou vous avez des relations (typiquement un endroit ou vous avez pu passer du temps d'intermède à établir des relations ou possiblement un autre endroit dans la même nation), vous pouvez faire un test de Société pour arranger une rencontre avec un criminel important, comme le chef d'une guilde de voleur ou pour demander une faveur en échange d'une autre plus tard, du choix de votre contact. Le MJ décide du DD sur lequel est basé la difficulté de la faveur et l'importance de la personnalité."
                ]
            },
            {
                "name"       : "Réseau souterrain",
                "level"      : "2",
                "traits"     : [
                    "Peu courant",
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Société, Savoir urbain"
                ],
                "description": [
                    "Vous êtes lié à des groupes qui savent ce qui se passe dans les rues et vous pouvez en tirer rapidement des informations. Lorsque vous utilisez Société pour sports_martial_artsRecueillir des informations dans une zone où vous disposez d'un réseau (typiquement dans un endroit où vous avez passé au moins une semaine ou passé une journée d'intermède pour construire plus vite un réseau), vous pouvez contacter un membre de ces groupes pour obtenir des informations directement de leur part. Cela vous prend habituellement une heure et n'attire pas autant l'attention que Recueillir des informations en public le pourrait. Le test et l'information que vous obtenez de la sorte suivent les règles habituelles pour Recueillir des informations.",
                    "De plus, si vous avez réussi à consulter ce réseau souterrain, vous obtenez un bonus de circonstances de +1 au prochain test pour sports_martial_artsVous souvenir que vous ferez à propos du sujet sur lequel vous avez recueilli des informations ou un bonus de circonstances de +2 si vous utilisez Connaissance de la pègre pour le test. Le MJ pourrait changer la connaissance liée au réseau en fonction du lieu ou des spécificités du réseau auquel vous faites appel."
                ]
            },
            {
                "name"       : "Résistance terrifiante",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Intimidation"
                ],
                "description": [
                    "Les sorts de ceux que vous avez sports_martial_artsDémoralisés sont moins efficaces contre vous. Si vous réussissez à Démoraliser une créature, durant les 24 heures suivantes, vous obtenez un bonus de circonstances de +1 aux jets de sauvegarde contre les sorts de cette créature."
                ]
            },
            {
                "name"       : "Retraite terrifiée",
                "level"      : "7",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "maître en Intimidation"
                ],
                "description": [
                    "Quand vous obtenez un succès critique lors d'une action pour sports_martial_artsDémoraliser , si le niveau de la cible est inférieur au vôtre, la cible est sentiment_very_dissatisfiedEn fuite pendant 1 round."
                ]
            },
            {
                "name"       : "Sale coup 1",
                "level"      : "1",
                "traits"     : [
                    "Attaque",
                    "Général",
                    "Manipulation",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Vol"
                ],
                "description": [
                    "Conditions Vous disposez d'une main libre et avez un adversaire dans votre allonge au corps-à-corps.",
                    "Vous accrochez les lacets des chaussures d'un ennemi, vous tirez son chapeau sur ses yeux, vous desserrez sa ceinture ou vous perturbez sa mobilité par une tactique déloyale. Faites un test de casinoVol contre le DD de Réflexes de la cible.",
                    "Succès critique La cible est sentiment_very_dissatisfiedMaladroite 1 jusqu'à ce qu'elle utilise une action Interagir pour mettre un terme à l'empêchement.",
                    "Succès Comme en cas de succès critique mais l'état cesse automatiquement après 1 round.",
                    "Échec critique Vous vous retrouvez sentiment_very_dissatisfiedÀ terre lorsque votre tentative se retourne contre vous."
                ]
            },
            {
                "name"       : "Sanctifier l'eau 1",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Religion, devez être fidèle qui indique \"saint\" ou \"impie\" dans sa sanctification"
                ],
                "description": [
                    "Vous imprégnez l'eau de la bénédiction de votre divinité. Choisissez un contenant d'eau d'Encombrement léger dont vous ou un allié dans votre allonge êtes en possession. Jusqu'à la fin de votre prochain tour, cela devient de l'eau sainte ou de l' workEau impie . Vous pouvez choisir entre eau sainte si votre divinité permet la sanctification sainte ou eau impie si votre divinité permet la sanctification impie un soit l'un soit l'autre si vote divinité admet les deux sanctifications. C'est un effet temporaire et ne donne aucune valeur monétaire ou ne permet pas d'utiliser l'eau pour servir de coût pour les rituels ou autres. Si vous êtes maître en Religion, vous pouvez sanctifier deux contenants lorsque vous faites cette action et trois si vous êtes légendaire."
                ]
            },
            {
                "name"       : "Saut carpé f",
                "level"      : "7",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "maître en Acrobaties"
                ],
                "description": [
                    "Vous vous relevez. Ce mouvement ne déclenche pas de réaction."
                ]
            },
            {
                "name"       : "Saut de mur",
                "level"      : "7",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "maître en Athlétisme"
                ],
                "description": [
                    "Vous pouvez utiliser l'impulsion conférée par un saut pour vous propulser d'un mur. Si vous êtes adjacent à un mur à la fin d'un saut (que vous sports_martial_artsSautiez en hauteur , sports_martial_artsen longueur ou que vous sports_martial_artsBondissiez ), vous ne tombez pas tant que votre prochaine action est un autre saut. De plus, comme votre saut précédent vous donne de l'élan, vous pouvez utiliser Sauter en hauteur ou en longueur comme une action unique, mais vous ne pouvez pas Marcher rapidement pendant l'activité.",
                    "Vous pouvez utiliser Saut de mur une seule fois par tour, à moins que vous ne soyez légendaire en Athlétisme, auquel cas vous pouvez utiliser Saut de mur autant de fois que vous pouvez utiliser des actions de saut consécutives durant ce tour."
                ]
            },
            {
                "name"       : "Saut plané",
                "level"      : "15",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "légendaire en Athlétisme"
                ],
                "description": [
                    "Votre habilité athlétique sans pareille vous permet de sauter sur des distances impossibles. Triplez la distance de votre saut sur un sports_martial_artsSaut en longueur réussi (vous pourriez donc sauter sur une distance de 18 mètres avec un test d'Athlétisme de 30). Quand vous réussissez un sports_martial_artsSaut en hauteur , vous utilisez le mode de calcul pour un Saut en longueur pour la distance de saut et la limite de saut, mais vous ne triplez pas la distance.",
                    "Vous pouvez aussi sauter à une distance supérieure en dépensant des actions supplémentaires. Pour chaque action supplémentaire, ajoutez votre Vitesse à la limite de distance."
                ]
            },
            {
                "name"       : "Saut rapide",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Athlétisme"
                ],
                "description": [
                    "Vous pouvez sports_martial_artsSauter en hauteur ou sports_martial_artsSauter en longueur par une action unique au lieu de 2 actions. Si vous le faites, vous n'avez pas besoin de Marcher rapidement (ni n'échouez si vous ne Marchez pas rapidement sur 3 m)."
                ]
            },
            {
                "name"       : "Savoir automatique",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert dans une compétence avec l'action Se souvenir, Assurance dans cette compétence"
                ],
                "description": [
                    "Vous connaissez des faits de base par coeur. Choisissez une compétence dans laquelle vous êtes expert, qui possède l'action Se souvenir et pour laquelle vous possédez le don Assurance. Vous pouvez utiliser l'action Se souvenir avec cette compétence comme un action gratuite une fois par round. Si vous le faites, vous devez utiliser Assurance au test de compétence.",
                    "Spécial Vous pouvez sélectionner ce don plusieurs fois en choisissant une nouvelle compétence à chaque fois. Vous pouvez utiliser Savoir automatique avec toutes les compétences que vous avez choisies, mais vous ne pouvez toujours utiliser Savoir automatique qu'une seule fois par round."
                ]
            },
            {
                "name"       : "Savoir douteux",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié dans une compétence avec l'action Se souvenir"
                ],
                "description": [
                    "Vous êtes une mine d'informations, mais toutes ne proviennent pas de sources fiables. Quand vous obtenez un échec (mais pas un échec critique) sur un test pour Vous souvenir en utilisant n'importe quelle compétence, vous apprenez la réponse correcte et une fausse information, mais n'avez aucun moyen de les différencier entre elles. Cela peut vous amener à apprendre quelque chose d'important, mais sans savoir si c'est pour le meilleur ou le pire."
                ]
            },
            {
                "name"       : "Savoir urbain",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Société"
                ],
                "description": [
                    "Vousen savez long sur la vie dans les rues et savez prendre le pouls des lieux avoisinants. Vous pouvez utiliser votre modificateur de Société à la place de votre modificateur de Diplomatie pour sports_martial_artsRecueillir des informations . Dans toute communauté que vous fréquentez régulièrement, vous pouvez utiliser l'action Se souvenir en utilisant Société pour obtenir le même genre d'informations que vous pourriez découvrir en utilisant Diplomatie pour Recueillir des informations. Le DD est généralement significativement supéerieur, mais vous obtenez les informations sans devoir passer de temps à les recueillir. Si vous obtenez un échec pour recueillir des informations de la sorte, vous pouvez toujours tenter par la suite de Recueillir des informations normalement."
                ]
            },
            {
                "name"       : "Se faufiler rapidement",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Acrobaties"
                ],
                "description": [
                    "Vous vous sports_martial_artsFaufilez de 1,50 mètre par round (3 mètres en cas de succès critique). Si vous êtes légendaire en Acrobaties, vous vous Faufilez à votre pleine Vitesse."
                ]
            },
            {
                "name"       : "Secrets insaisissables",
                "level"      : "7",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "maître en Duperie"
                ],
                "description": [
                    "Vous esquivez ou déjouez les tentatives pour découvrir votre vraie nature ou vos véritables intentions. Quand un sort ou un effet magique essaient de lire vos pensées, détecter si vous mentez ou révéler votre identité, vous pouvez tenter un test de Duperie contre le DD du sort ou de l'effet. Si vous réussissez, l'effet ne révèle rien."
                ]
            },
            {
                "name"       : "Semer des rumeurs",
                "level"      : "2",
                "traits"     : [
                    "Peu courant",
                    "Général",
                    "Secret",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Duperie"
                ],
                "description": [
                    "Vous répandez des rumeurs qui peuvent ou non être vraies sur un sujet spécifique. Si le sujet de votre rumeur n'est pas actuellement le sujet de rumeurs contradictoires, cela prend aussi longtemps qu'il vous en faudrait normalement pour Recueillir des informations (typiquement 2 heures) au terme desquelles le MJ fait un test secret de Duperie contre un DD qu'il détermine pour voir comment se répand la rumeur. Si votre rumeur correspond à n'importe quelle rumeur actuelle sur le sujet, il faut moins de temps pour la répandre alors que si vous tentez de surpasser une rumeur particulièrement populaire contradictoire, il vous faut beaucoup plus longtemps et cela pourrait être impossible. Le DD augmente ou décroît de la même manière selon le caractère plus ou moins plausible de votre rumeur. Par exemple, il pourrait s'avérer plus difficile de répandre la rumeur que le maire, généreux et aimé de tous, est à la tête d'un culte de démonistes meurtriers.",
                    "Succès critique Votre rumeur se répand comme un feu de paille. Quiconque réussit un test pour Recueillir des informations sur le sujet spécifique apprend votre rumeur de préférence aux autres rumeurs sur le sujet. Votre rumeur persiste pendant 1 mois. vous obtenez un bonus de circonstances de +2 aux tests de Duperie, de Diplomatie et d'Intimidation dans une situation appropriée lorsque vous invoquez votre rumeur.",
                    "Succès Vous répandez avec succès la rumeur. Quiconque réussit un test pour Recueillir des informations sur le sujet spécifique ajoute votre rumeur à la liste des rumeurs qu'il pourrait apprendre sur le sujet. Votre rumeur persiste pendant 1 semaine. vous obtenez un bonus de circonstances de +1 aux tests de Duperie, de Diplomatie et d'Intimidation dans une situation appropriée lorsque vous invoquez votre rumeur.",
                    "Échec Votre rumeur s'éteint, ne devenant pas assez populaire pour que d'autres gens l'apprennent en Recueillant des informations.",
                    "Échec critique Vous êtes incapable de répandre cette rumeur et subissez une pénalité de circonstances de –4 aux tests de Duperie pour Semer des rumeurs sur le même sujet dans la même région pendant 1 semaine. De plus, une rumeur se répand à propos de quelqu'un essayant de répandre de fausses rumeurs sur le sujet."
                ]
            },
            {
                "name"       : "Sens arcanique",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Arcanes"
                ],
                "description": [
                    "Votre apprentissage de la magie vous permet de sentir instinctivement sa présence. Vous pouvez Lancer auto_awesomeDétection de la magie au rang 1 à volonté comme si c'était un sort inné arcanique. Si vous êtes maître en Arcanes, le sort est intensifié au rang 3. Si vous êtes légendaire, il est intensifié au rang 4."
                ]
            },
            {
                "name"       : "Sténographie magique",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Arcanes, Nature, Occultisme ou Religion"
                ],
                "description": [
                    "Apprendre des sorts vous vient aisément. Lorsque vous obtenez un succès pour Apprendre un sort, vous mettez 10 minutes quel que soit le rang du sort. Si vous obtenez un succès sur le test, il devient un succès critique. Si vous obtenez un échec, vous pouvez essayer de nouveau après 1 semaine ou après avoir gagné un niveau selon ce qui se produit en premier.",
                    "Vous pouvez utiliser l'intermède pour apprendre et inscrire de nouveaux sorts. Cela fonctionne comme si vous aviez utilisé sports_martial_artsGagner de l'argent avec la compétence associée à la tradition, mais au lieu de gagner de l'argent, vous choisissez un sort disponible que vous pouvez apprendre et obtenez une remise pour l'apprendre, en l'apprenant gratuitement si vous gagnez un revenu supérieur ou égal à son coût."
                ]
            },
            {
                "name"       : "Survie planaire",
                "level"      : "7",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "maître en Survie"
                ],
                "description": [
                    "Vous pouvez Subsister en utilisant la Survie sur différents plans, même ceux sans ressources ou phénomènes naturels dont vous avez normalement besoin. Par exemple, vous pouvez trouver de la nourriture même si le plan ne dispose d'aucune nourriture qui pourrait normalement vous convenir. Un succès sur votre test pour Subsister empêche les dégâts infligés par le plan et à quiconque vous aidez à Subsister. Cela ne s'applique qu'aux conditions générales du Plan, pas aux plus petits dangers."
                ]
            },
            {
                "name"       : "Survivaliste légendaire",
                "level"      : "15",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "légendaire en Survie"
                ],
                "description": [
                    "Vous pouvez survivre indéfiniment sans nourriture ni eau et pouvez endurer des froids et des chaleurs grands, extrêmes et extraordinaires sans subir de dégâts."
                ]
            },
            {
                "name"       : "Théorie unifiée",
                "level"      : "15",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "légendaire en Arcanes"
                ],
                "description": [
                    "Vous comprenez les fondements communs des quatre traditions de magie et des essences magiques, ce qui vous permet de les comprendre à travers un prisme arcanique. Lorsque vous utilisez une action de compétence ou un don de compétence qui nécessite un test de Nature, d'Occultisme ou de Religion, en fonction de la tradition magique, vous pouvez utiliser Arcanes à la place. Si vous devriez normalement subir une pénalité ou battre un DD plus élevé en utilisant Arcanes à la place d'une autre magie (comme quand vous utilisez Identifier la magie), ce n'est plus désormais le cas."
                ]
            },
            {
                "name"       : "Tour de passe-passe",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Vol"
                ],
                "description": [
                    "Plutôt que de cacher un objet quelque part ou un observateur ne le cherchera pas, vous avez appris à conserver l'objet en mouvement de manière à ce qu'il ne soit jamais où il regarde.",
                    "Lorsque vous sports_martial_artsDissimulez un objet d'Encombrement léger ou inférieur, vous pouvez utiliser Vol au lieu de Discrétion pour vos tests et pour le DD d'un test de Perception d'un observateur actif. Vous lancez le test seulement une fois, mais vous devez continuez d'utilisez les actions pour Dissimuler un objet tout au long du processus."
                ]
            },
            {
                "name"       : "Traitement inhabituel",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Médecine"
                ],
                "description": [
                    "Votre qualification médicale s'étend aux états moins évidents à soigner. Lorsque vous obtenez un succès sur un DD 20 pour sports_martial_artsSoigner les blessures , vous pouvez également réduire la valeur de l'état sentiment_very_dissatisfiedMaladroit , sentiment_very_dissatisfiedAffaibli ou sentiment_very_dissatisfiedStupéfié de votre patient de 1. Si vous êtes capable de soigner plus d'une créature à la fois, vous choisissez celui qui pourra bénéficier de cette capacité. Une créature peut bénéficier de Traitement inhabituel seulement une fois par jour. Si l'état est le résultat d'une affliction, cette affliction n'est pas guérie, bien que l'état soit réduit tant que l'affliction reste à ce stade. Si vous êtes maître en Médecine, ajoutez l'état sentiment_very_dissatisfiedDrainé à la liste des états que vous pouvez réduire si vous obtenez un succès contre un DD 30. Si vous êtes légendaire en Médecine, vous réduisez l'état choisi de 2 au lieu de 1."
                ]
            },
            {
                "name"       : "Traqueur de terrain",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Discrétion"
                ],
                "description": [
                    "Choisissez un type de terrain difficile dans la liste suivante : décombres, neige ou sous-bois. Tant que vous êtes sentiment_very_dissatisfiednon détecté par tous les non-alliés sur ce type de terrain, vous pouvez sports_martial_artsÊtre furtif sans faire de test de Discrétion tant que vous ne vous déplacez pas de plus de 1,50 mètre et que vous ne vous rapprochez pas à moins de 3 mètres d'un ennemi au cours de votre déplacement.",
                    "Durant l'exploration, cela vous permet aussi d'approcher automatiquement des créatures à moins de 4,50 mètres tout en sports_martial_artsÉchappant à leurs regards , tant qu'elles ne sont pas activement en train de sports_martial_artsChercher ou sur leurs gardes.",
                    "Spécial Vous pouvez choisir ce don à plusieurs reprises. À chaque fois, choisissez un type de terrain différent"
                ]
            },
            {
                "name"       : "Usurpation d'objet magique 1",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Manipulation",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Arcanes, Nature, Occultisme ou Religion"
                ],
                "description": [
                    "Vous examinez un objet magique que vous ne devriez normalement ne pas pouvoir utiliser en vue de le leurrer et de l'activer temporairement. Par exemple, cela pourrait permettre à un guerrier d'incanter le sort d'une baguette ou à un magicien d'incanter un sort ne figurant pas sur la liste arcanique en utilisant un parchemin. Vous devez connaître ce qu'activer l'objet produit, à moins de ne pas pouvoir tenter de le duper.",
                    "Faites un test en utilisant la compétence correspondant à la tradition magique de l'objet ou qui correspond à une tradition qui dispose du sort sur sa liste si vous essayez d'incanter un sort à partir de l'objet. Les compétences appropriées sont casinoArcanes pour arcanique, casinoNature pour primordiale, casinoOccultisme pour occulte, casinoReligion pour divine ou n'importe laquelle des quatre pour un objet qui possède le trait magique mais n'a pas le trait d'une tradition. Le MJ détermine le DD en fonction du niveau de l'objet (éventuellement ajusté en fonction de l'objet ou de la situation).",
                    "Si vous activez un objet magique qui nécessite un modificateur d'attaque de sort ou un DD de sort et que vous n'avez pas la maîtrise de la statistique appropriée, utilisez votre niveau comme bonus de maîtrise et le plus élevé entre vos modificateurs d'Intelligence, de Sagesse ou de Charisme. Si vous êtes maître dans la compétence appropriée à la tradition de l'objet, vous utilisez le bonus de maîtrise qualifié et, si vous êtes légendaire, vous utilisez le bonus de maîtrise expert à la place.",
                    "Succès Pour le reste de votre tour actuel, vous pouvez dépenser des actions pour activer l'objet comme si vous pouviez normalement l'utiliser.",
                    "Échec Vous ne pouvez ni utiliser l'objet ni tenter de nouveau de le duper au cours de ce tour, mais vous pouvez retenter lors des tours suivants.",
                    "Échec critique Vous ne pouvez pas utiliser l'objet et vous ne pouvez pas réessayer de le duper avant vos prochains préparatifs quotidiens."
                ]
            },
            {
                "name"       : "Utiliser ses relations",
                "level"      : "2",
                "traits"     : [
                    "Peu courant",
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "expert en Société, Manières courtoises ou Savoir urbain"
                ],
                "description": [
                    "Vous connaissez les gens idéaux pour obtenir que des choses soient faites au sein de certains cercles. Une fois par semaine, Lorsque vous êtes dans une zone au sein de laquelle existe des nobles influents, des élites marchandes ou autre groupe équivalent (si vous avez Manières courtoises) ou un réseau de personnages plus louches comme une guilde de voleur (si vous avez Savoir urbain), vous pouvez utiliser Société pour Solliciter une faveur ou l'aider de ces gens comme s'ils étaient amicaux à votre égard. Votre demande doit faire sens par rapport au type de gens que vous contactez. Par exemple, un membre de la cour royale pourrait vous garantir une invitation valable pour un bal sophistiqué ball, alors qu'un cambrioleur local pourrait vous indiquer une manière d'infiltrer discrètement la même fête. Si vous obtenez un succès critique à ce test, votre relation vous donne un conseil utile ou vous fait part d'un petit secret, vous accordant ou à un membre de votre groupe un bonus de circonstances de +2 au premier test de compétence que vous tentez lorsque vous mettez à profit la faveur. Si vous obtenez un échec critique à ce test, vous pourriez avoir à rendre un certain service pour votre relation pour rentrer de nouveau dans se bonnes grâces, comme indiqué par le MJ."
                ]
            },
            {
                "name"       : "Vaccination",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Guérison",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Médecine"
                ],
                "description": [
                    "Vous êtes aguerri à combattre les épidémies et vos patients sont moins à même de succomber à la même maladie par la suite pendant un temps.",
                    "Lorsque vous réussissez à sports_martial_artsSoigner une maladie sur quelqu'un et qu'il récupère complètement de la maladie, il obtient par la suite un bonus de circonstances de +2 aux jets de sauvegarde contre cette même maladie qui dure 1 semaine."
                ]
            },
            {
                "name"       : "Vol à la tire",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Vol"
                ],
                "description": [
                    "Vous pouvez sports_martial_artsVoler ou sports_martial_artsEscamoter un objet étroitement gardé, tel que dans une poche, sans subir la pénalité de -5. Vous ne pouvez pas voler des objets qui seraient extrêmement visibles ou qui prendraient du temps à retirer (tels que des chaussures ou une armure portées ou des objets activement utilisés). Si vous êtes maître en Vol, vous pouvez tenter de Voler une créature en combat ou sur ses gardes. Quand vous le faites, Voler nécessite 2 actions au lieu de 1 et vous subissez une pénalité de -5."
                ]
            },
            {
                "name"       : "Vol subtil",
                "level"      : "1",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Vol"
                ],
                "description": [
                    "Quand vous réussissez à sports_martial_artsVoler quelque chose, les observateurs (les créatures autres que la créature que vous avez volée) subissent une pénalité de circonstances de -2 à leurs DD de Perception pour détecter votre larcin. De plus, si vous commencez par sports_martial_artsFaire diversion en utilisant Duperie, effectuer une seule action pour sports_martial_artsEscamoter un objet ou Voler ne met pas fin à votre état sentiment_very_dissatisfiedNon détecté ."
                ]
            },
            {
                "name"       : "Voleur légendaire",
                "level"      : "15",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "légendaire en Vol, Vol à la tire"
                ],
                "description": [
                    "Votre capacité à Voler dépasse l'entendement. Vous pouvez tenter de Voler quelque chose qui est activement manié ou qui serait extrêmement visible ou prendrait beaucoup de temps à retirer (comme des chaussures ou une armure portées). Vous devez le faire lentement et avec précaution, en y passant au moins 1 minute (et beaucoup plus pour des objets qui prennent normalement du temps à retirer, tels qu'une armure). Tout au long de cette durée, vous devez posséder un moyen de rester sentiment_very_dissatisfiedCaché en utilisant par exemple le couvert des ténèbres ou en utilisant une foule animée. Vous subissez une pénalité de -5 à votre test de Vol. Même si vous réussissez, si l'objet est extrêmement proéminent - comme un harnois, les observateurs remarqueront rapidement sa disparition après le vol."
                ]
            },
            {
                "name"       : "Yeux de la cité",
                "level"      : "2",
                "traits"     : [
                    "Général",
                    "Compétence"
                ],
                "required"   : [
                    "qualifié en Diplomatie ou en Société"
                ],
                "description": [
                    "Vous pouvez pister des cibles avec l'aide des habitants. Vous pouvez utiliser Diplomatie ou Société, dès lors que vous êtes qualifié, pour sports_martial_artsPister les créatures au sein des communautés. Vous discutez avec les habitants pour vous aider à suivre la trace des créatures que vous Pistez. À la discrétion du MJ, il pourrait ne pas y avoir suffisamment de gens à qui parler pour continuer à suivre la piste."
                ]
            }
        ]
    ]
};
