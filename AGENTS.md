# AGENTS.md — Pathfinder character sheet

Feuille de personnage Pathfinder 2 en JavaScript vanilla (ES2020), sans build,
sans bundler, sans npm : tout est chargé par des balises `<script>` ordonnées
dans `index.html`. Les tests vivent dans `tests.html` + `sheet/js/tests/`.

## Règles à lire avant de toucher au code

Trois skills Vibe décrivent les conventions obligatoires du projet :

- `.vibe/skills/pathfinder-style/SKILL.md` — architecture (namespaces globaux,
  classes prototype + `SERVICE.CLASS.addPrototype`, bus `doActionAfter`,
  SERVICE.DOM, formatage exact, règle du "passer le plat").
- `.vibe/skills/pathfinder-object-model/SKILL.md` — modèle d'objets issu des
  rounds de relecture (référence : `3-level-up-skill-basic.js`) : un seul
  propriétaire d'état, dépendants passifs sans référence ni miroir, tout
  coule par paramètre ou par poussée, affichage réactif par phase branchée
  sur le DOM (`data-current-phase` + CSS, compteurs dans
  `callbackForPhase`), `computeHtml` en commande, nommage métier honnête.
- `.vibe/skills/pathfinder-tests/SKILL.md` — méthode de test : scénarios de
  parcours utilisateur de bout en bout, workflow test → rapport utilisateur →
  correctif, jamais de test unitaire de fonction.

Le workflow de validation est toujours le même : on code + on adapte le
scenario, **l'utilisateur lance `tests.html` dans son navigateur et colle le
rapport**, on corrige d'après le rapport. Une décision par run.

## Règles d'affichage et de nommage (décisions utilisateur, non négociables)

- Pas de gras ni de majuscules à tout va dans l'interface : `font-weight: bold`
  et `text-transform: uppercase` ne se posent QUE sur l'élément qui le mérite
  (la valeur clé d'une ligne, l'onglet actif), jamais par défaut sur les
  titres, séparateurs, badges ou libellés. Le rendu par défaut de la fonte
  suffit. Même discipline dans les réponses de l'agent : pas de gras
  systématique.
- Les variables, événements et clés de données sont en anglais, mots collés
  sans underscore superflu : `event__level_up__toggle_skill` (pas
  `event__level_up__toggle_skill`), `save__fortitude` (pas `save__vigueur`),
  `skill__acrobatics` (pas `skill__acrobaties`). Le français est la langue des
  libellés affichés (`label`), jamais des identifiants.
- Le renommage des clés françaises déjà en place est un chantier à part : à
  faire d'une traite, clé par clé, données + code + tests, jamais au fil de
  l'eau. Les slots de maîtrise sont passés en anglais (Round 17) ; les
  ability keys des capacités restent françaises (dérivées des libellés
  scrapés, cf. `getAbilityKey`).

## Chantier en cours : passage de niveau, maîtrises, zone jets/compétences (non commité)

### Domaine levelup (`sheet/js/levelup/`)

Le domaine porte TOUT le passage de niveau (fusions Rounds 5-7) : la source
de vérité (`1-levels-history.js` + `2-level-history.js` : `LevelsHistory` + `LevelHistory`, l'entrée
possède `enabled` ET ses lignes de capacités — la validation vit sur la
phase de la ligne, Round 10), le vieux
mécanisme de choix par origine (`4-level-history-skills.js`, à unifier avec les
lignes un jour), et le warning global de la fenêtre.

- `CHARACTER.LevelUpSkillBasic` (`3-level-up-skill-basic.js`) — un objet par
  capacité débloquée (uuid `"<niveau>__<slot>"`) : rend sa propre ligne
  avec un interrupteur on/off **sans texte** (`.level-up-row-toggle`) — le
  contrôle de validation s'appelle `_computeHtmlValidation`, la classe de
  choix le remplace par son sélecteur —, possède SON compteur WARNINGS, branché sur la fenêtre
  au rendu. **La ligne est sans état ni référence** (Round 8) : elle ne
  stocke ni `is_active`, ni son entrée, **ni `class_name`** (l'entrée
  porte la classe) — la dépendance passe en paramètre au moment du besoin :
  `computeHtml( class_name )` au rendu (l'entrée passe SA classe),
  `getMasteriesUpgrades( class_name )` à masteries. La PHASE porte l'état
  validé
  (Round 9 : phases de domaine `LEVELUP.PHASE.SELECTED/RUNNING`, mixin
  `GS.OBJECT.PhaseInterface` de la lib — pas les constantes
  `GS.OBJECT.CONST.PHASE` : SLEEPING porte `cursor: not-allowed` + enfants
  en `pointer-events: none`, RUNNING un fond bleu, styles utilitaires
  globaux (`_utilities.css`) qui contredisent une ligne cliquable en
  attente ; une valeur de phase est un contrat de style
  de la lib — le fork applicatif `phase.js` a été supprimé au Round 9, la
  machine vit dans la lib et son callback part au tick suivant,
  `CALLBACK_PHASE_TIMEOUT = 0`)
  : `setIsActive( to_set )` → `setPhaseOrPhase`, la phase est branchée sur
  le DOM de la ligne (`setPhaseDomElement` → `data-current-phase`, le CSS
  key dessus : fond de ligne doré, interrupteur doré + bouton coulissant,
  plus de classes `--active/--pending`), et `callbackForPhase` met à jour
  le compteur warnings. Plus de re-render au
  toggle : le DOM suit la phase en place. Construction par `updateData` +\n  `setData` par clé (`\"level_skill\"` (la carte entière du load) → `setIsActive` sur SON slot, consommé à la volée).
  API : `getUUID`, `setUUID`, `getSlotKey`, `setIsActive`, `isActive`,
  `getDataToSave` (ce que l'entrée sauvegarde : la phase pour une ligne
  simple), `getMasteriesUpgrades`, `getSourceLabel`.
- `CHARACTER.LevelUpSkillWithSelect` (`3-level-up-skill-with-select.js`) — la ligne
  des capacités ouvrant un choix (Round 11) : hérite de `LevelUpSkillBasic`,
  même uuid, même phase, mais la valeur choisie dans le sélecteur EST la
  validation — `setSelectedValue( to_set )` dérive la phase (`SELECTED`
  quand une valeur est posée, retour à `RUNNING` sur l'option vide), le
  sélecteur `.level-up-row-select` (option vide + entrées de
  `CLASSES.CHOICES`, valeur = nom de l'entrée) remplace l'interrupteur via
  `_computeHtmlValidation`, et `getDataToSave()` retourne l'entrée
  choisie (le save `level_skill` vaut donc le nom du choix pour ces
  lignes). Routage : `event__level_up__select_choice`
  (`param__level_up_skill__uuid` + `param__choice_value`), même plat que
  `toggle_skill` (fenêtre → personnage → historique → entrée → ligne).
  Construction : l'entrée choisit la classe par ligne dans `buildSkills`
  (`CLASSES.getChoices( class_name, ability_key )`), la valeur sauvegardée
  arrive par `"level_skill"` (la carte entière, la ligne pique son slot :
  valeur choisie ou rien).
- `CHARACTER.LevelHistory` (`2-level-history.js`, entrée) — la source de
  vérité DU niveau ET de sa vue (Round 7 : les blocs et conteneurs de classe
  ont disparu, l'entrée EST le conteneur de ses lignes, `OBJECT.InterfaceContainerHtml`)
  : identité `level_name` (`getUUID()` dérivé : le champ porte son nom
  métier, jamais un `uuid` générique), `enabled`, `buildSkills(
  class_level_number )` idempotent construit ses
  lignes (une par capacité du niveau de classe), `computeHtml()` rend SA
  section (`.level-up-block` avec `data-level-name`/`data-level-number`,
  titre, interrupteur Actif/Désactivé — ancre des scénarios ; la couche
  désactivation cache les lignes, elles restent vivantes), et
  `setLinesCountersParent( window )` branche les compteurs de ses lignes.
  Routage d'entrée : `toggle_skill` — le porteur de l'uuid inverse SA phase
  (`setIsActive( !isActive() )`, Round 10 : la phase de la ligne est la
  donnée), `select_choice` — le porteur stocke la valeur choisie
  (`setSelectedValue`, Round 11), `remove_level` pousse 0 au compteur de
  CHAQUE ligne AVANT que le personnage retire l'entrée (pas de clé fantôme),
  `get__rank_contributions` — l'entrée active pose `param__class_name` et
  re-broadcast à ses lignes, la ligne validée pousse ses upgrades dans le
  plat (Round 15), `sync__additional_skills` — l'entrée aligne ses lignes
  "Compétence supplémentaire" sur N + mod INT (Round 19 : ajout des
  manquantes en consommant le staging `level_skill`, retrait des surplus
  avec compteur à 0 avant retrait — le staging n'est plus consommé par
  `buildSkills`). Piège : `class_level_number` n'était posé sur l'entrée que
  par le chargement (`setData` du conteneur) — les entrées créées au fil du
  jeu ne l'avaient jamais en champ, donc `buildSkills` de l'entrée stocke
  l'ordinal qu'elle reçoit, toutes les voies de création l'alignent.
- `CHARACTER.LevelsHistory` (`1-levels-history.js`, conteneur) — diffuse les
  événements aux entrées (le parent `OBJECT.InterfaceContainer` broadcast,
  son `doActionAfter` ne les avalait pas avant le Round 6) et porte
  `buildSkills()` : construit les lignes de toute entrée qui en manque pour
  la prise de niveau et l'ajout de classe par popup
  (`event__form__element_changed` → `addClassFromEdition`) — le chargement
  construit dans le case `level_skill` de chaque entrée. Son `updateData`
  pose le `class_level_number` (ordinal de la classe, connaissance du
  conteneur) sur chaque entrée AVANT son `updateData` : l'entrée en a
  besoin pour reconstruire ses lignes en chargeant son `level_skill`.
  Plus de `buildLevel` ni de `removeLevel`.
- `CHARACTER.LevelUpWindow` — ne calcule plus rien : elle ajoute l'en-tête,
  le warning global, le sélecteur de classe, puis une section par entrée
  de l'historique (`entry.setLinesCountersParent( this )` puis
  `entry.computeHtml()`). Sur `event__level_up__toggle_skill` la fenêtre
  re-dispatch au personnage, le warning global se met à jour tout seul par
  la chaîne de compteurs.
- `CHARACTER.LevelUpGlobalWarning` (`level-up-global-warning.js`) — label
  "N capacités non validées" de la fenêtre : objet compteur dédié,
  consommateur du compteur warnings de la fenêtre (`setParent` + contrat
  `update( name, nb )`), rend et re-rend son div tout seul ; plus aucun
  `_buildGlobalWarning` / `_updateGlobalWarning` ni `getMissingCount()`.
- Chaîne de compteurs : ligne → fenêtre (badge d'onglet), branchée par
  `setLinesCountersParent( window )` sur chaque entrée au rendu de la
  fenêtre. Le branchement ne PEUT pas se faire au `add` des lignes :
  elles se posent toujours avant que leur entrée ne connaisse la fenêtre
  (load, prise de niveau, ajout de classe — l'entrée est vierge à chaque
  fois), un `add` redéfini ne se déclencherait jamais. Plus aucun
  `setCounterValue` manuel côté fenêtre.
  Les lignes meurent avec leur entrée : `remove_level` route à l'entrée
  qui pousse 0 à CHAQUE ligne AVANT le retrait, pas de clé fantôme, et plus
  aucun `resetCounterByType` de purge (les lignes ne sont jamais reconstruites).
- Plat des événements : fenêtre → `CONTROLLER.Character.current_character.doActionAfter(...)`
  → personnage → historique → entrée → ligne. Jamais d'appel métier
  direct fenêtre → domaine.
- **Seules les capacités validées** (`line.isActive()` — la phase de la
  ligne, lue par masteries) alimentent les calculs
  finaux du personnage (maîtrises aujourd'hui, dons/compétences ensuite).

### Zone jets + compétences de l'onglet Général (`general_window.js`)

- Une seule zone de grille `jets` (7 colonnes, la zone couvre 3.25fr : col 2
  2fr + division fine 1.25fr), class partagée `jets-grid`, `align-self: start`.
  Contenu : UN en-tête `Jet | Rang | Mod | Niv` en haut, ligne
  `Perception / Initiative`, séparateur titré `Jets de sauvegarde`, les 3
  sauvegardes, séparateur `Compétences`, les 17 compétences (SKILLS.LIST,
  triées par libellé, nom seul). Pas de titre de zone, pas de gras ni
  majuscules, valeurs SANS "+" (le moins s'affiche seul au besoin).
- Chaque ligne : valeur du jet en premier, badge de rang à l'initiale
  (rang I + bonus 0 si non maîtrisée), modificateur, niveau. Jet complet
  PF2 = niveau + modificateur de caractéristique + bonus de rang
  (`MASTERY.LIST[*].bonus`), calcul domaine dans
  `CHARACTER.Masteries.getRollModifier( { slot, characteristic } )`.
- Clic : ligne de jet → popup maîtrises (`event__show_information__masteries`),
  ligne de compétence → popup des actions
  (`event__show_information__skill_actions` + `param__skill`).
- Rafraîchissement : `computeHtmlWithData` au chargement, puis recalcul à
  l'activation de l'onglet (`click_on__window_navigation__done` avec le nom de
  la fenêtre) — PAS sur les événements de prise de niveau : la fenêtre Générale
  est traitée AVANT le LevelUpWindow dans le groupe, elle lirait un personnage
  pas encore mis à jour.

### Actions de compétences (`sheet/js/object/constant_skill_actions.js`)

- `OBJECT.SKILL_ACTIONS` — données scrapées de grimoire-vf.fr (une entrée par
  compétence, clé = `CLASSES.getAbilityKey` du libellé `SKILLS.LIST`) :
  description, actions propres (rang requis I/Q/E/M/L, coût, traits,
  prérequis, conditions, résultats, exemples de tâches) et actions générales
  utilisables avec la compétence. **Fichier généré : ne pas éditer à la main,
  re-scrap au besoin.** Le `_contant.js` (typo) des autres data n'est PAS
  chargé : la convention vivante est `constant_*.js` déclaré dans index.html
  et tests.html.
- Clic sur une ligne de compétence du Général → `event__show_information__skill_actions`
  avec `param__skill` → `PopupRenderers` reconstruit la popup (état dynamique)
  via `CHARACTER.Masteries.getSkillActionsInformationData()` : chaque action
  porte son rang requis et `usable` (rang du personnage ≥ rang requis).
- `OBJECT.SkillActionsPopupRenderer` (catégorie `skill-actions`) : une action
  utilisable est pleine, une verrouillée porte la classe `locked` (opacité
  0.55) et le hint "Rang X requis".

### Domaine mastery (`sheet/js/mastery/`)

- `MASTERY.ORDER` + `getHigherRank` — l'agrégation prend le MEILLEUR rang
  (I < Q < E < M < L), jamais de cumul. `MASTERY.SLOT_KEYWORDS` mappe les
  descriptions du bloc `mastery` des classes vers des slots normalisés
  anglais (`save__fortitude`, `attack__simple_weapons`, `spell_attack`,
  `skill__<clé anglaise>`...). `MASTERY.getSkillKey( label )` résout la clé
  anglaise via `SKILLS.LIST` (singulier contre les divergences de scrape,
  "Représentations" → `performance`), fallback `getAbilityKey`.
- `MASTERY.SAVES` — les 4 lignes de la zone jets : `perception` (libellé
  "Perception / Initiative", SAG) puis les 3 sauvegardes, chacune avec sa
  caractéristique. `MASTERY.getSkillSlot( label )` → `"skill__" + getSkillKey`.
- `CHARACTER.Masteries` (`masteries.js`) — sur le personnage, **état dérivé non
  sauvegardé**, calculé à la demande, **sans héritage d'interface** (il ne rend
  jamais de HTML). `getRankContributions()` collecte par événement
  (`event__get__rank_contributions`, plat `param__rank_contributions`) : le
  plat part au personnage, qui route à ses domaines — les objets restent des
  boîtes noires. Chaque
  classe posée pousse son bloc `mastery` initial (source `"<classe> — maîtrises
  initiales"`), chaque ligne validée du passage de niveau pousse ses upgrades
  (source `"<capacité> (niveau N)"` — l'entrée pose `param__class_name` et
  broadcast à ses lignes, une entrée désactivée ne participe pas).
  `getDataBySlot()` garde par slot les
  sources qui portent le rang final : la popup maîtrises les affiche sous
  chaque ligne (`.class-mastery-sources`).
- `getRollModifier( { slot, characteristic } )` — jet complet PF2 utilisé par
  la zone jets ET les compétences (rang inconnu → bonus 0).
- `CLASSES.MASTERY_UPGRADES` (`constant_class_choices.js`) — carte écrite à la
  main (validée par l'utilisateur) : capacité → `[{ slot, rank }]`, pour les
  16 classes. Accesseur `CLASSES.getMasteriesUpgrade`.
- `CLASSES.getAbilityKey` / `resolveAbilityKey` / `getSingularAbilityKey` /
  `ABILITY_ALIASES` — résolution libellé de `capacity_by_level` → clé `abilities`
  (pluriels français, "-aux"→"-al", renommages scrapés : "incantation arcanique"
  → `incantation_de_magicien`, etc.).
- Le "?" de la ligne "maîtrises initiales" émet `event__show_information__masteries`
  → popup catégorie `masteries` (`MasteriesPopupRenderer`) montrant les rangs
  **courants agrégés du personnage** avec leurs sources. Cette popup est
  reconstruite à chaque ouverture (pas de cache `_openPopup`, c'est un état
  dynamique).

### Popups (`sheet/js/object/popup.js` + `popup_renders.js`)

- Tout popup d'information passe par `OBJECT.PopupRenderer` : l'overlay
  referme la popup au clic sur son fond uniquement (`event.target === this`),
  un clic dans la zone de contenu ne remonte pas (le bus stoppe la propagation
  des handlers enfants).
- Catégories : `masteries`, `skill-actions`, `class-feature`, `feat`, `item`,
  `action`, défaut. `PopupRenderers` (`popups.js`) construit les données et
  reconstruit à chaque ouverture les popups à état dynamique (maîtrises,
  actions de compétence).

### Pièges découverts (ne pas réapprendre)

- Les compteurs des lignes levelup ne peuvent PAS être branchés à leur
  `add` : les lignes ne se posent que dans `buildSkills`, qui ne tourne
  que pour une entrée vierge — donc toujours avant que la fenêtre ne se soit
  présentée à l'entrée. Le branchement vit au rendu de la fenêtre
  (`setLinesCountersParent`), point final (tentative retirée après
  vérification des flux).
- `SERVICE.CLASS.addPrototype` ne copie que les méthodes PROPRES du prototype
  parent, et seulement si l'enfant ne les a pas déjà. En pratique : **tout enfant
  de conteneur doit définir son propre `getUUID`** (cf. `Characteristics`,
  `LevelsHistory`, `LevelsUpSkills`, `LevelUpSkills`, `LevelUpSkillsClass`,
  `LevelUpSkillBasic`).
- Les compteurs poussent vers les parents sous leur uuid : un enfant disparu
  laisse une clé fantôme dans le mapping du parent → reset du parent quand les
  enfants sont reconstruits.
- Les libellés de `capacity_by_level` et les clés `abilities` divergent parfois
  (scraping) : passer par `CLASSES.resolveAbilityKey`, jamais par accès direct.
- `SKILLS.LIST[*].characteristic` pointait `CHARACTERISTICS.X.name` (propriété
  inexistante → `undefined`) : corrigé en `.key`. Toujours vérifier qu'une clé
  de données morte n'est pas déjà consommée ailleurs avant d'y toucher.
- Les fichiers `object/*_contant.js` (typo) ne sont PAS chargés par index.html :
  la convention vivante est `constant_*.js` + balise `<script>` dans index.html
  ET tests.html.
- grimoire-vf.fr bloque le connecteur web : le scrap passe par curl en local
  (UA navigateur). Les données générées ne s'éditent jamais à la main.
- Fenêtre Générale traitée AVANT le LevelUpWindow dans le groupe : tout
  rafraîchissement déclenché par les événements du passage de niveau y lirait
  un personnage périmé — recalcul à l'activation de l'onglet à la place.
- Les cellules des lignes jets/compétences s'alignent par largeurs fractionnaires
  partagées (`grid-template-columns` identique header + lignes), jamais `auto`
  (chaque ligne se dimensionnerait sur son propre contenu).

### Scénarios de test (chaîne séquentielle, ordre = ordre des balises)

La chaîne du levelup court EN DERNIER dans tests.html : le run se termine
sur son état final (Magicien niveau 10), l'utilisateur reprend la feuille à
cet état pour tester la frontière à la main. Les suites indépendantes
(page_vide, onglets, ascendance, classe, multiclasse, niveaux,
niveaux_multiple, reset, caracteristiques, caracteristiques_classe,
classe_prime, classe_entree, archetype) courent avant : chacune se RESET
elle-même, aucune ne dépend d'une autre.

Les scénarios s'enchaînent sur le même personnage, chacun repart de l'état
laissé par le précédent (fin de `scenario_levelup_magicien` : Elfe + Magicien
niveau 5, "expertise en réflexes" validée) :

1. `scenario_levelup_magicien.js` — interrupteurs, counters, maîtrise Réflexes
   gated par validation, persistance au take, puis save → load : la graine du
   save restaure les validations (reset la feuille lui-même).
2. `scenario_sauvegardes.js` — zone jets niveau 1 : colonnes, ordre
   Jet|Rang|Mod|Niv, initiales, alignement, infobulles desktop, clic →
   popup maîtrises ; puis niveau 5 : recalculs.
3. `scenario_competences.js` — bloc compétences : 17 lignes triées, rangs
   (Arcanes Q, autres I), jets croisés domaine, clic → popup actions.
4. `scenario_actions_competences.js` — popup actions : rang I utilisable vs
   rang Q verrouillé (classe `locked`, opacité 0.55, hint), résultats,
   exemples de tâches, actions générales.
5. `scenario_fermeture_popup.js` — clic dans la zone → ouverte, clic sur le
   fond de l'overlay → refermée (maîtrises + actions).
6. `scenario_ameliorations_competence.js` — la ligne "Amélioration de
   compétence" de l'entrée 3 rend son sélecteur (vide + 17 compétences) ;
   choisir "Arcanes" valide la ligne, Arcanes passe Q → E, la zone jets du
   Général affiche badge E + jet complet croisé avec le domaine, la source
   de l'augmentation apparaît dans les sources du slot ; save → load
   restaure le choix et le rang E.
7. `scenario_competences_supplementaires.js` — le bloc du niveau 1 rend ses
   lignes "Compétence supplémentaire" (2 + mod INT), en attente (le
   personnage est reconstruit par scenario_sauvegardes : RESET, Elfe,
   Magicien) ; choisir "Diplomatie" la valide (rang Q, source citée), la
   vider la dévalide (rang perdu), la re-choisir la re-valide ; jets Général
   badge Q ; save → load restaure le choix et le compte de lignes.
8. `scenario_levelup_niveau10.js` — parcours structurel (le test des choix
   jusqu'au niveau 10 appartient à l'utilisateur, règle de travail) : cinq
   prises → niveau 10, entrées 6-10 rendues, validations du niveau 3
   conservées aux rebuilds ; save → load restaure les dix entrées et le rang
   expert d'Arcanes.

### État au moment de la pause

- **Non commis** (depuis le commit `53fb278 review code 4`, qui porte les
  Rounds 12-23) : le working tree contient les Rounds 24-29 — le nettoyage
  des textes scrapés (outil `sheet/tools/clean_scraped_text.js`), le "?"
  par option de don, le composant `COMPONENT.SingleSelectFromData` en lib,
  l'uniformisation de TOUS les sélecteurs sur ce composant, le "?" de
  popup branché dans les DEUX listes de contrôleurs, les correctifs CSS
  (hauteurs bornées de la fenêtre levelup, `overflow` du bloc retiré,
  popup overlay centrée en flex, animation vivante), et les scénarios
  passés aux clics d'options du composant.
- Modèle : TOUTES les lignes à choix du passage de niveau rendent le
  composant `COMPONENT.SingleSelectFromData` (école, thèse, compétences
  supplémentaires, améliorations, dons — le "?" par option réservé aux
  dons) ; les lignes simples restent des interrupteurs sans texte ;
  seules les capacités validées alimentent les calculs (collecte par
  événement, boîtes noires).
- Les dons se choisissent : `DON.getAvailableSkillFeats` (niveau +
  prérequis parsés) / `DON.getAvailableClassFeats` (trait de classe) ;
  le "?" ouvre la popup "feat" par nom (`DON.getFeatInformation`) ; le
  choix d'un don sur plusieurs lignes peut encore dupliquer le même don
  (à trancher — voir Round 23).
- La chaîne de tests court EN DERNIER dans tests.html : le run se termine
  sur le Magicien niveau 10, l'utilisateur reprend la feuille à cet état.
- Syntaxe validée par Node sur tous les fichiers touchés ; le dernier run
  complet `tests.html` a passé avant les Rounds 24-29 — **le run des
  Rounds 24-29 reste à lancer** : ouverture du sélecteur (header clic),
  "?" de don dans la liste ouverte, uniformisation de toutes les lignes à
  choix, popup feat centrée.
- `constant_class.js`, `constant_gift_*.js` et
  `constant_skill_actions.js` sont des données scrapées : jamais
  d'édition manuelle — les corrections passent par
  `sheet/tools/clean_scraped_text.js` (icônes collées) et les cartes
  écrites à la main (`ABILITY_ALIASES`, `MASTERY_UPGRADES`,
  `CHOICE_MASTERIES`).

## À faire (dans l'ordre logique)

1. ~~Valider le rapport `tests.html` complet (chaîne de 5 scénarios
   ci-dessus)~~ — fait, run complet validé par l'utilisateur (Rounds 10-11).
2. ~~Aligner `LEVELUP.CHOICE_TYPES` (et donc les slot keys des lignes `*_feat`)
   sur ce que `detectType` renvoie réellement~~ — fait (Round 16 :
   `detectType` renvoie les `*_feat`, les lignes de don portent leur slot key
   positionnel). ~~Restent à écrire les entrées de
   `CLASSES.CHOICES` pour les autres capacités à choix~~ — fait (Round 18 :
   14 classes, entrées extraites des descriptions scrapées — à valider par
   l'utilisateur ; `divinité` du Champion/Prêtre laissée de côté, trop
   grande). Les dons de classe/compétence/général/ancestral restent des
   interrupteurs : leurs choix exigent le navigateur de dons (données à
   venir).
3. Choix de compétences : ~~les améliorations de compétence~~ — fait
   (Round 18 : sélecteur des 17 compétences via `CLASSES.COMMON_CHOICES`, la
   compétence choisie EST la validation, le rang octroyé dérive du rang
   courant + portes de niveau dans `MASTERY.getIncreasedRank`, enchaînement
   dans `Masteries._resolveRankIncreases` ; les upgrades dérivées d'un
   choix passent par `CLASSES.CHOICE_MASTERIES` — seul le style de bretteur
   est écrit, données présentes dans les descriptions). ~~Les
   "compétences supplémentaires" (N + mod INT)~~ — fait (Round 19, décision
   utilisateur : lignes du niveau 1). Restent : les cartes
   choix → compétence des autres classes (lignage, mystère, patron, ordre,
   méthodologie, trafic, divinité) — les compétences ne sont pas dans nos
   données scrapées, à écrire à la main ou re-scrap.
4. Sources maîtrises supplémentaires : race/héritage, dons, objets magiques —
   bloqué sur la donnée : les données race/héritage ne portent que de la
   prose ("qualifié en Diplomatie" dans les descriptions), aucun bloc
   maîtrise structuré. Cartes écrites à la main à prévoir, ou re-scrap
   structuré. Le mécanisme est prêt : le personnage route
   `event__get__rank_contributions` à ses domaines, ajouter race/dons au
   case suffit.
5. ~~Écriture des fichiers de save~~ — restaure (Round 18) :
   `CONTROLLER.Character.save()` télécharge `let <uuid> = <getDataToSave>;`
   en `.js` (via `SERVICE.DOM`, plus de `console.log`). Reste à re-générer un
   save réel : action du joueur dans son navigateur, fichier à poser dans
   `sheet/save/` + balise `<script>` dans index.html.
6. ~~Renommage anglais des identifiants français (règle ci-dessus)~~ — fait
   pour les slots de maîtrise (Round 17) : `save__fortitude`, `save__reflex`,
   `save__will`, `skill__<clé anglaise>`, `attack__unarmed`,
   `attack__simple_weapons`, `attack__martial_weapons`,
   `attack__advanced_weapons`, `attack__alchemical_bombs`,
   `attack__favored_weapon`, `defense__unarmored`, `defense__light_armor`,
   `defense__medium_armor`, `defense__heavy_armor`, `defense__all_armor`,
   dans `SLOT_KEYWORDS`, `SAVES`, `MASTERY_UPGRADES` + tests. Les ability
   keys des capacités (libellés scrapés) restent françaises tant que le
   fichier généré `constant_skill_actions.js` n'est pas re-scrapé avec des
   clés anglaises.
7. ~~`CHARACTER.Masteries` stocke encore `this.character` depuis son
   constructeur~~ — résolu : toutes les méthodes de `Masteries` prennent le
   personnage en premier paramètre (`getFinalRank( character_object, ... )`),
   le constructeur est `new CHARACTER.Masteries()` sans dépendance, et la
   classe vit hors des `children` du personnage (état dérivé non sauvegardé).
8. ~~Pass de nettoyage gras/majuscules existants (levelup, popups)~~ — fait
   (Round 18 : levelup était déjà propre, 41 lignes retirées des popups ;
   le gras ne survit que sur les valeurs clés — rang, valeur de ligne,
   PV — et le `strong` du contenu scrapé reste du balisage auteur).
9. Renommage des fichiers JS en kebab-case (règle Review code ci-dessous),
   domaine par domaine au fil du nettoyage : levelup est fait (Round 5 y a
   intégré l'historique : `1-levels-history.js`, `2-level-history.js`, `4-level-history-skills.js`),
   restent mastery, character (fenêtres), class, level, characteristic,
   race, gift, historics, legacy, archetype, spell, stuffs, object, service,
   component, controller + `<script>` de index.html et tests.html.

## Review code

Décisions prises lors des allers-retours de relecture fichier par fichier.
Chaque retour de l'utilisateur devient une règle ci-dessous, en plus des
conventions des skills. Elles s'appliquent à tout le code, y compris les
fichiers déjà relus. Historique : Round 1 = `level-up-skill.js` + domaine
levelup, Round 2 = compteurs et label global de la fenêtre, Round 3 =
`levels-up-skills.js` : modèle incrémental, identité par entrée
d'historique, fin du preserve, Round 4 = domaine mastery (fin du parent
stocké dans `Masteries`) puis graine de save : `updateData` construit
directement, chaque ligne sauvegardée avec son état true/false, Round 5 =
fusion du save : l'entrée d'historique possède `validated_skills`
(comme `enabled`), le conteneur levelup ne sauvegarde plus rien, les
dossiers `character/level_history/` et `levelup/` fusionnent dans
`sheet/js/levelup/` (fichiers en kebab-case), Round 6 = fusion des objets :
le bloc de capacités vit SUR son entrée (`getLevelUpBlock`), le conteneur
`LevelsUpSkills` disparaît, la fenêtre et masteries itèrent l'historique,
Round 7 = fusion complète : bloc et conteneur de classe disparaissent,
l'entrée EST le conteneur de ses lignes et rend sa section (`computeHtml`),
la chaîne de compteurs devient ligne → fenêtre, Round 8 = fin de TOUTE
référence parent : la ligne est sans état ni référence, l'entrée (seul
propriétaire) lui pousse l'état à la construction, au rendu et au toggle,
Round 9 = la ligne porte une PHASE (`LEVELUP.PHASE.SELECTED/RUNNING`, valeurs
de domaine — les constantes de la lib traînent des styles utilitaires
globaux : SLEEPING rend inert, RUNNING peint en bleu)
branchée sur son DOM
(`data-current-phase` + CSS), le compteur warnings vit dans
`callbackForPhase` (plus de re-render ni de classes d'état), fin du fork :
`sheet/js/phase.js` supprimé, la machine de phases est celle de la lib
(`GS.OBJECT.PhaseInterface`), comme `configurable_value` et les popups.
Round 10 = **la phase de la ligne EST la donnée** : `isActive()` lit la
phase SELECTED, le toggle l'inverse (`setIsActive( !isActive() )`), la
carte `validated_skills` de l'entrée disparaît — les valeurs du save ne
font que staging vers `buildSkills` (consommées au build), et
`getDataToSave` dérive `validated_skills` des phases des lignes.
Round 11 = retour du sélecteur de choix, en classe dérivée : la capacité
ouvrant un choix rend `CHARACTER.LevelUpSkillWithSelect`, la valeur choisie
dans le sélecteur EST la validation (elle dérive la phase), le save en
garde le nom au lieu d'un booléen — le contrôle de validation de la ligne
s'appelle `_computeHtmlValidation` (interrupteur pour la ligne simple,
sélecteur pour la ligne à choix).
Round 12 = la clé de save `validated_skills` devient `level_skill`
(format du save, staging du load, scénarios) — la carte dérivée porte
l'état de validation par slot, booléen ou valeur choisie.
Round 13 = la reconstruction des lignes vit DANS le case `level_skill`
de l'entrée : le chargement construit ses lignes immédiatement (`setData`
→ `buildSkills`), plus de staging différéré ni d'appel `buildSkills` du
conteneur au chargement — le conteneur pose le `class_level_number`
(ordinal de la classe, calcul multiclasse) sur l'entrée avant son
`updateData`, `buildSkills()` du conteneur ne sert plus que la prise de
niveau et l'ajout de classe.
Round 14 = relecture du domaine mastery : `CHARACTER.Masteries` ne descend
plus de `OBJECT.InterfaceHtml` (objet de calcul sans rendu), les closures
de `getSkillActionsInformationData` deviennent la méthode privée
`_getSkillActionData`, les commentaires qui répètent le code partent, et
`getSaveModifier` devient `getRollModifier` (le nom ne doit pas évoquer
la sauvegarde du personnage, et la méthode sert aussi bien les
compétences que les sauvegardes).
Round 15 = la collecte des rangs passe par événement : `getSourcesData`
devient `getRankContributions` et ne fouille plus les conteneurs — elle
pose le plat et le passe au PERSONNAGE seul (`doActionAfter`), qui route
à ses domaines : les objets restent des boîtes noires, seule la structure
du personnage connaît ses parties. Chaque objet pousse ses contributions
dans le plat (`param__rank_contributions`) : la classe pousse ses
maîtrises initiales, l'entrée d'historique (active) pose
`param__class_name` et re-broadcast à ses lignes, la ligne validée pousse
ses upgrades.
Round 16 = `detectType` dit la vérité : les types de don deviennent
`general_feat` / `class_feat` / `skill_feat` / `ancestry_feat` (les clés de
`LEVELS.KEYWORDS` suivent, `skill_increase` / `attribute_boost` / `spell` /
`class_feature` ne bougent pas) — `LEVELUP.CHOICE_TYPES` matche enfin : les
lignes de don portent leur slot key positionnel (`<type>_<index>`) et
leurs icônes s'affichent (l'ancien `*_skill` ne matchait jamais `ICONS`).
Les listes mortes `GENERAL_SKILL_LEVELS` / `ATTRIBUTE_BOOST_LEVELS` partent.
Round 17 = slots de maîtrise en anglais, d'une traite : `save__fortitude` /
`save__reflex` / `save__will`, `skill__<clé anglaise>` (résolus par
`MASTERY.getSkillKey` via `SKILLS.LIST`, singulier contre les pluriels
scrapés), `attack__unarmed` / `simple_weapons` / `martial_weapons` /
`advanced_weapons` / `alchemical_bombs` / `favored_weapon`,
`defense__unarmored` / `light_armor` / `medium_armor` / `heavy_armor` /
`all_armor` — dans `SLOT_KEYWORDS`, `SAVES`, `MASTERY_UPGRADES` + scénarios.
Les mots-clés morts `armes_martiales` / `armes_avancees` partent (aucune
description scrapée ne les contient ; "armes de guerre" et "armes évoluées"
sont les termes réels des données). Les ability keys des capacités restent
françaises : le fichier généré `constant_skill_actions.js` y est indexé.
Round 18 = fin des TODOs d'une traite : (a) `CLASSES.CHOICES` écrit pour
14 classes (entrées extraites des descriptions scrapées, à valider par
l'utilisateur) + `CLASSES.COMMON_CHOICES` (`amelioration_de_competence` :
les 17 compétences, dérivées de `SKILLS.LIST`) avec fallback dans
`getChoices` ; (b) l'amélioration de compétence se valide en choisissant SA
compétence — la ligne pousse une contribution d'augmentation
(`getRankIncreaseContribution` : slot + niveau, SANS rang), `Masteries`
enchaîne après la collecte (`_resolveRankIncreases` : rang de base par
slot, puis chaque augmentation trie par niveau et monte d'un pas, portes
E < 7, M < 15, L au-delà) ; (c) `CLASSES.CHOICE_MASTERIES` : les upgrades
d'un choix validé (carte classe → capacité → valeur → slots, seul le style
de bretteur est écrit, données des descriptions) fusionnent dans
`getMasteriesUpgrades` du sélecteur, `MASTERY.getSlotLabel` résout les
labels des slots skills via `SKILLS.LIST` ; (d) save restauré (téléchargement
du fichier `let <uuid> = ...;`) ; (e) pass gras/majuscules des popups ;
(f) nouveau scénario `scenario_ameliorations_competence.js` (chaîne, 6e).
Round 19 = compétences supplémentaires en lignes du niveau 1 (décision
utilisateur) : `CLASSES.getAdditionalSkillsNumber` lit le N de la ligne
"compétences supplémentaires" des blocs mastery ("égal à N plus votre
modificateur d'Intelligence"), l'entrée de niveau 1 de la classe porte une
ligne-sélecteur par choix (`LEVELUP.ADDITIONAL_SKILL_KEY + index`, slot key
positionnel, options = les 17 compétences), le compte = N + mod INT arrive
par le plat : le personnage broadcast `event__level_up__sync_additional_skills`
(avec `param__current_character__object`) au chargement (les
caractéristiques se chargent avant l'historique), à la prise/fin de niveau,
à l'ajout de classe et aux boutons +/− de caractéristique ; l'entrée ajoute
les lignes manquantes (consommant le staging `level_skill`, devenu sa
consommation à lui) et retire les surplus (compteur poussé à 0 AVANT le
retrait, pas de clé fantôme). La ligne validée qualifie sa compétence
choisie (rank Q) via `getMasteriesUpgrades` du sélecteur. Piège découvert
au premier run : `class_level_number` n'était posé qu'au chargement —
`buildSkills` de l'entrée stocke maintenant l'ordinal reçu. Nouveau scénario
`scenario_competences_supplementaires.js` (chaîne, 7e) ; piège de chaîne :
scenario_sauvegardes fait `TEST.RESET.sheet()` et RECONSTRUIT le personnage —
l'état du scénario levelup ne survit pas au reset, scenario_competences
garde "Arcanes seule Qualifiée", les lignes supplémentaires y sont en
attente.
Round 20 = retours UI de l'utilisateur : (a) un dégradé (`--g-*`) ne se
pose JAMAIS sur un `select`/`option` natif — les options ne rendent pas
les gradients (blanc système + texte clair = illisible) : couleurs solides
(`--c-bg-card`, `--c-text`) pour `.level-up-row-select` et ses options ;
(b) une qualification ne se prend pas deux fois : l'entrée connaît ses
lignes supplémentaires, elle leur passe les valeurs prises par leurs
sœurs (2e paramètre de `computeHtml`, `taken_values`), la ligne filtre ses
options (`_buildSelectOptions`) et se rafraîchit en place au choix d'une
sœur (`updateSelectOptions`, appelé par l'entrée depuis le case
`select_choice`) ; les améliorations de compétence, elles, PEUVENT
s'empiler sur la même compétence (rang + rang) : pas de filtre pour elles.
Round 21 = retour UI : le niveau 10 dépassait la feuille (papier fixe
1240×1754, `overflow: hidden`), la 4e compétence supplémentaire restait
cachée — le `overflow-y: auto` de la fenêtre levelup ne pouvait pas agir,
aucune hauteur n'était bornée dans sa chaîne d'ancêtres. Le papier devient
une colonne flex (`.character-content`), la zone de contenu prend la
hauteur restante (`flex: 1; min-height: 0; overflow: hidden`), le panneau
levelup est borné (`height: 100%`) : la fenêtre scrolle enfin sa propre
zone. Maillon manquant du premier essai : les panneaux ne sont pas des
enfants directs de la zone de contenu — ils vivent dans le conteneur de
cibles `.gs-window-targets-V2`, qui doit être borné aussi
(`.characters-sheet-content .gs-window-targets-V2 { height: 100% }`).
DEUXIÈME maillon, trouvé par l'utilisateur : la fenêtre bornée est un flex
column et ses enfants RÉTRÉCISSENT par défaut (`flex-shrink: 1`) — les
blocs se compressaient pour tenir et le `overflow: hidden` du bloc (coupure
des coins arrondis, son rôle légitime) tranchait leurs dernières lignes :
"présentes dans le HTML, pas affichées". Correctif :
`.level-up-window > * { flex-shrink: 0 }` — les blocs gardent leur
hauteur, c'est la fenêtre qui scrolle.
Le scénario niveau 10 asserte la VISIBILITÉ, pas le débordement : le
contenu peut légitimement tenir dans la fenêtre (`scrollHeight ===
`clientHeight` à la fixture — le contenu de niveau 10 tient dans la zone) ;
ce qui est asserté : la dernière ligne du bloc 1 et celle du dernier bloc
occupent une hauteur et tombent dans les bornes de la fenêtre après
`scrollIntoView`. Au passage : `scrollbar-color` passe aux variables.
Round 22 = retour UI : `popup-action-cost` affichait la lettre brute des
données scrapées ("f", "r") — la carte de `_actionCostLabel` parlait
anglais ("free"/"reaction", entrées mortes). Une carte de mappage parle la
langue RÉELLE des données : `"f"` → ⟳ (gratuite), `"r"` → ⟲ (réaction),
`"1"/"2"/"3"` → ◆. Les coûts des actions de compétence restent en mots
français lisibles ("1 action"), pas de mappage.
Round 23 = les dons se choisissent (demande utilisateur) : les lignes de
don (`skill_feat`, `class_feat` — `LEVELUP.FEAT_TYPES`) portent un
sélecteur dès le build (options vides), rempli par le sync — l'événement
`sync_additional_skills` devient `event__level_up__sync_lines` (il porte le
compte des compétences supplémentaires ET les options de dons), re-broadcast
après chaque toggle/select_choice (les rangs bougent). Options par
`DON.getAvailableSkillFeats( ranks_by_label, max_level )` — prérequis
"<rang> en <compétence> ou en <compétence>" parsés
(`DON.isSkillRequirementMet`), les extras non-compétence sont permissifs,
les "Connaissance de X" (Lore) ne matchent pas nos compétences (donc
exclus, honnête) — et `DON.getAvailableClassFeats( class_name, max_level )`
(trait = classe). Les rangs par libellé viennent de
`Masteries.getSkillRanksByLabel`. Verrou structurel dans le parcours
niveau 10 : le bloc 2 porte 2 sélecteurs remplis ; le choix et les
prérequis appartiennent à la vérification manuelle de l'utilisateur.
Le même don peut encore être pris sur deux lignes différentes
(entries 2 et 4 donnent toutes deux un don de compétence) — à trancher.
Round 24 = contamination des textes scrapés (retour utilisateur) : les
classes d'icônes Material du site se sont collées aux mots suivants
("casinoDiplomatie", "crop_freeémanation", "auto_awesomeÀ trois temps",
"casino(floor(@actor.level/2))d6"). Outil durable
`sheet/tools/clean_scraped_text.js` (dry run avec `--dry`), à RELANCER
après chaque re-scrap : retrait des icônes snake_case partout
(`sports_martial_arts`, `sentiment_very_dissatisfied`, `auto_awesome`,
`military_tech`, `crop_free`), des icônes mono-mot uniquement collées au
mot ou à une parenthèse suivante (`casino`, `flare`, `work`, avec frontière
de mot), et du cas collé après un `\n` échappé (le "n" casse la frontière).
Les `<div class="gs-link-information">` des descriptions de classes sont
des liens d'info INTENTIONNELS (stylés par la popup), pas une
contamination. Les formules Foundry (`@actor.level`) restent : elles
portent le sens des dés.
Round 25 = le "?" des dons (demande utilisateur, rectifié au Round 26) :
routage `event__show_information__feat` (params `param__feat_category`
"skill"|"class" + `param__feat_name`) → `DON.getFeatInformation` (accès
par nom dans la liste de la catégorie) → catégorie popup "feat"
(renderer existant : titre, badge de niveau, traits, prérequis,
description).
Round 26 = le "?" vit DANS le sélecteur (rectification utilisateur) :
un `select` natif ne peut pas héberger un bouton par option — les lignes
de don rendent une liste déroulante MAISON (`.level-up-row-dropdown`) :
header (tabindex, `:focus-within` ouvre la liste, ZÉRO état JS — le
choix referme en blurant le header inline), options
(`.level-up-row-dropdown-option`, `data-value`) portant chacune leur "?"
de popup. Les valeurs ne s'embarquent JAMAIS en dur dans le handler
inline : les noms de dons portent des apostrophes — elles passent par
`this.getAttribute('data-value')` (et `this.parentNode` pour le "?").
Le choix émet le même `event__level_up__select_choice` que le sélecteur
natif ; `setSelectedValue` met le DOM à jour en place (`updateHtml` :
texte du header + classe selected des options) ; `setOptions` reconstruit
la liste ou le select selon le type. Les autres lignes à choix (école,
thèse, compétences, améliorations) restent en select natif.
Round 27 = le sélecteur des dons devient un COMPOSANT DE LA LIB (demande
utilisateur — EXCEPTION au périmètre : `COMPONENT.SingleSelectFromData`
vit dans `sheet/js/libs/gs_lib_common_V02_01.js`, déclaré
`var COMPONENT = COMPONENT || {}` + `GS.TOOLS.CLASS.addPrototype`,
hérite `GS.OBJECT.GsObjectHtml` — addParamsForEvents,
getDoActionAfterEvent, la chaîne askHidePopup de la lib). Le composant
possède : header + liste d'options, état ouvert dans le dataset
`data-state-selector` (`toggleState`, `hidePopup` branché au contrat
askHidePopup), `setOptions`/`setSelectedName` (titre + classe selected),
et deux événements configurables : `setToggleEventName` (ouverture du
header) et `setClickEventName` (choix d'une option) + `setInfoEvent`
(le "?" par option). Les valeurs ne s'embarquent JAMAIS en dur dans les
handlers inline — `parseToHTMLParam` de la lib n'échappe pas les
apostrophes et les noms de dons en portent : elles se lisent du
`data-value` de l'option au clic. L'ouverture route par le plat :
`event__level_up__toggle_selector` (fenêtre → personnage → historique →
entrée par uuid → ligne → `select_component.toggleState()`), le choix
reste `event__level_up__select_choice`. Les autres lignes à choix
restent en select natif (à généraliser si l'utilisateur le demande).
Le CSS emprunte au `select-comp.css` de la lib Shinken (demande
utilisateur) : liste fluide (`left/right: 0` + `min-width`), caret en
triangle CSS (span vide peinte par le CSS, plus de caractère), option
sélectionnée teintée + `pointer-events: none` (on ne re-choisit pas
l'option courante), `overflow-x: hidden`, `max-height` 250, z-index 100 —
couleurs via les variables `--*` du thème Pathfinder.
PIÈGE du plat (trouvé au run) : un NOUVEL événement de fenêtre doit etre
ajouté à la liste du CONTRÔLEUR Character
(`character-controller.js` : `windows.doActionAfterContentChildren`) —
fenêtre → personnage → historique → entrée — sinon il tombe dans le vide
du switch du contrôleur. Le scénario couvre maintenant l'ouverture : clic
header → `data-state-selector` à 1 + liste affichée, second clic →
refermée.
Round 28 = retours UI du sélecteur (demande utilisateur) : (a) le header
a une taille minimale conséquente (`min-width: 190px`) et une borne
(`max-width: 260px`), le libellé ellipsé ; (b) le `overflow: hidden` du
`.level-up-block` est RETIRÉ — la liste ouverte du sélecteur y vivait
clippée (position absolue coupée au bord du bloc, liste minuscule) : un
conteneur qui doit laisser sortir un menu ne peut pas clipper ses
enfants. Les coins arrondis du bloc restent (les lignes sont
transparentes, rien ne perce).
Round 29 = uniformisation (demande utilisateur) : TOUTES les lignes à
choix rendent le composant `COMPONENT.SingleSelectFromData` (école
arcanique, thèse, compétences supplémentaires, améliorations, dons) — le
select natif disparaît de la feuille (le "?" par option reste réservé
aux dons, via `setInfoEvent`). Le filtre des valeurs prises vit dans la
ligne (`_getAvailableOptions` : options moins `taken_values`), alimenté
par `computeHtml( class_name, taken_values )` et
`updateSelectOptions( taken_values )`. PIÈGE (encore le plat) : le "?"
des options n'ouvrait rien — `event__show_information__feat` manquait à
la liste popup du CONTRÔLEUR Main : un événement popup se déclare dans
Main (popups), un événement de fenêtre dans Character
(windows.doActionAfterContentChildren) — DEUX listes à penser. Les
scénarios cliquent les options du composant (`.single-select-option
[data-value=...]`, `.click()` — le clic JS fonctionne même liste fermée)
au lieu de `select.value` + dispatch change ; le CSS mort du select
natif est retiré.

### Style, commentaires, nommage

- Pas de prose descriptive dans le bloc JSDoc d'une classe : seul
  `@class` / `@extends` reste.
- Un commentaire ne se pose PAS par défaut : il ne survit que s'il porte une
  connaissance que le code ne peut pas montrer (règle PF2 non lisible dans
  l'opération, piège de la lib, format de données scrapées). Tout commentaire
  qui explique ce que la ligne d'à côté montre (un `if` de garde, un nom de
  méthode, une valeur de retour) se supprime. En cas de doute : on le supprime.
- L'héritage suit le rôle, pas l'habitude : un objet qui ne rend jamais
  de HTML n'hérite pas d'une interface de rendu (`CHARACTER.Masteries`
  ne descend plus de `OBJECT.InterfaceHtml` — aucun consommateur n'en
  attend le contrat).
- Pas de fonction dans une fonction : une closure locale devient une
  méthode privée de la classe (préfixe `_`) ou s'inline dans la boucle.
- Le nom décrit la chose calculée, sans collision avec un autre concept
  du projet : `save` prête à confusion avec la sauvegarde du
  personnage — un jet s'appelle roll (`getRollModifier`), "save" ne
  survit que dans le vocabulaire des jets de sauvegarde PF2
  (`save__fortitude` et ses frères, passés en anglais au Round 17).
- Aucun identifiant français dans le code, même dérivé du scraping : les
  corrections passent par des cartes écrites à la main qui survivent au
  re-scrap (ex. `CLASSES.ABILITY_KEY_OVERRIDES` : `maitrises_initiales`
  devient `initial_masteries`, lu via `LEVELUP.INITIAL_MASTERIES_KEY`).
- Fichiers JS en kebab-case : `3-level-up-skill-basic.js`,
  `level-up-global-warning.js`, `constant-level-up.js` (le dossier du domaine
  reste en un mot : `sheet/js/levelup/`). Préfixe numérique = ordre
  d'utilisation des classes du domaine (`1-` = le conteneur d'entrée), les
  fichiers `constant_*.js` se chargent avant les classes numérotées.
  Renommage par `git mv` + balises
  `<script>` de index.html et tests.html mises à jour en même temps. Les
  autres domaines suivront au fil du nettoyage (voir À faire).
- `computeHtml()` est une **commande** : elle construit et stocke son DOM
  (`this.dom_element`), ne retourne RIEN — l'élément se récupère par
  `getDomElement()` (jamais de `addElementTo( x.computeHtml(), ... )`,
  l'idiome est `x.computeHtml(); addElementTo( x.getDomElement(), ... )`).
- Un champ d'identité porte son **nom métier**, l'uuid s'en dérive :
  `LevelHistory.level_name`, la ligne reçoit `level_name` par données —
  jamais de `this.uuid`/`this.key` générique
  quand la valeur est un nom du domaine (le renommage va jusqu'au bout,
  `getUUID()` retourne le champ métier).
- Classes CSS avec trait d'union : `level-up-row-label`, `level-up-block`,
  `level-up-window` — jamais `levelup-*` (idem data attributes).

### Identité, événements, accesseurs

- Un objet s'identifie par son uuid : un événement ciblant un objet porte
  uniquement son uuid (`param__level_up_skill__uuid`), jamais un couple de
  paramètres redondants. Routage par `getContentByUUID`, pas de garde null
  quand l'émetteur (le rendu vivant de l'objet dans son conteneur) garantit
  l'uuid. Exception systématique : dans un broadcast
  (`doActionAfterContentChildren`), TOUS les conteneurs frères reçoivent
  l'événement — celui qui route par uuid DOIT garder le null, sinon le
  premier non-porteur crashe et le porteur ne reçoit jamais rien (bug du
  Round 3). Les clés dérivées de l'identité se construisent avec
  `getUUID()` (cf. `_getPreservedValues`).
- Les requêtes d'un conteneur sur ses enfants passent par des événements de
  collecte quand le regroupement est calculé, mais un regroupement
  **structurel** devient un objet : `LevelUpSkills` (un objet par niveau, son
  compteur, son bloc rendu par lui-même) a remplacé
  `event__get__level_up__with_level` — le routage par niveau est structurel,
  plus rien n'est filtré. Le broadcast d'un événement ciblé (`toggle_skill`)
  se fait par `doActionAfterContentChildren` (params en 2e position), le
  porteur de l'uuid route, les autres ignorent (garde null justifiée).
- Pas de garde défensive sur les données de save : les fichiers `sheet/save/`
  sont **générés par `getDataToSave`, jamais écrits ni édités à la main**
  (décision Round 4). Une clé absente ne déclenche jamais le case, une clé
  présente est un objet bien formé. Une garde ne survit que si un émetteur
  réel ne garantit pas le paramètre (broadcast uuid, re-render vivant).
- L'événement déclencheur circule le plus longtemps possible : quand un objet
  re-dispatche le plat, il repasse l'événement D'ORIGINE
  (`this.level_up_skills.doActionAfter( event_name, params )`), jamais un
  événement synthétique de conséquence (`event__level_up__build_skills` a été
  supprimé pour ça). Chaque consommateur écoute les événements déclencheurs qui
  le concernent (`LevelsUpSkills` maintenance sur `form__element_changed`,
  `take_level`, `remove_level`, `level__toggle` — le build initial vit dans
  `updateData`, plus dans un événement) et
  garde la main pour faire du spécifique par événement si besoin.
- Pas de référence au parent **structurel** stockée dans un objet enfant :
  la dépendance passe en paramètre de l'événement au moment où l'objet en a
  besoin (`param__current_character__object`, clé existante posée par le
  personnage avant son re-dispatch), jamais en champ construit au départ
  (`new CHARACTER.LevelsUpSkills( this )` a été refusé pour ça ; le bloc
  levelup a fini par disparaître, Round 7). Round 8 : plus AUCUNE exception —
  la ligne elle-même ne stocke plus son entrée : la valeur lui arrive en
  paramètre (construction, rendu), jamais l'objet parent — et depuis le
  Round 10 la phase de la ligne EST l'état de validation : l'entrée ne lui
  pousse plus rien au toggle, elle inverse sa propre phase.
- Minimiser le code : un accesseur ne survit que s'il a un consommateur
  productif (un message d'assertion de test ne compte pas), et un objet
  expose des intentions métier, pas ses champs bruts — masteries demande
  `getMasteriesUpgrades()` et `getSourceLabel()` au skill validé, jamais la
  classe ni la clé de capacité. Un seul accesseur d'état par donnée
  (`isActive` / `isEnabled` ; l'inversion se fait aux points
  d'appel). Le re-render en place s'appelle `updateHtml()` (la ligne levelup
  reçoit l'état en paramètre, Round 8).
- Pas de signal visuel redondant : `has-pending` (barre sur le titre du bloc
  de niveau) a été supprimé avec son événement de collecte — quand les
  badges de ligne et le warning global portent déjà l'information, un
  signal de zone n'ajoute rien.

### Conteneurs dérivés d'une source de vérité (modèle incrémental)

- Un conteneur qui dérive d'une source (historique, classes, ...) se
  construit **une fois** au chargement (le personnage appelle
  `levels_history.buildSkills()` dans son case `levels_history`, juste
  après `updateData` — la structure ET les états arrivent ensemble), puis
  se **maintient** : un objet par entrée ajoutée (le MÊME appel idempotent
  couvre chargement, prise de niveau et ajout de classe), retrait de
  l'objet avec son entrée, synchronisation d'état en place pour le reste.
  La re-dérivation complète à chaque événement est un anti-pattern, et le
  "preserve" (récolter l'état vivant avant de tout casser) n'existe que
  parce qu'on a détruit ce qu'il ne fallait pas détruire.
- L'uuid d'un objet dérivé vient de l'**identité stable de sa source** (le
  nom de l'entrée, jamais réutilisé), jamais de sa position : remove et
  toggle deviennent du routage `getContentByUUID` pur, aucune renumérotation
  à maintenir. Les clés de save et les ancres de scénarios suivent.
- Graine de save (Rounds 5-6, Round 10) : **la structure dérivée vit sur sa
  source de vérité** (l'entrée construit ses lignes une fois) et **la phase
  de la ligne EST la donnée de validation** (Round 10) — `isActive()` lit la
  phase, `getDataToSave` dérive `level_skill` des lignes
  ( `{ slot_key: line.getDataToSave() }`, booléen pour une ligne simple,
  valeur choisie pour une ligne à sélecteur, chaque ligne rendue y figure,
  validée ou non), et les valeurs chargées reconstruisent les lignes dans
  le case `level_skill` de l'entrée (Round 13).
  Conséquences : le save de l'état reste porté par la clé
  unique `levels_history` (plus de clé `level_up_skills` séparée), le
  contrat d'ordre des clés du save disparaît (structure et états arrivent
  ensemble), et la ligne ne sauvegarde rien (l'entrée dérive).
- Un état actif/désactivé est une **couche** posée sur un environnement qui
  reste vivant : les objets gardent leurs états, la couche s'exprime au
  rendu (l'objet ne rend pas ses enfants) et dans les calculs (le
  consommateur saute l'objet via son accesseur d'état), jamais par
  destruction/reconstruction.
- Vider un conteneur : `removeAllContentFromIndex( 0 )`, jamais
  `resetContents()` — elle appelle `remove()` sur chaque enfant, méthode
  qu'aucun enfant de conteneur ne définit (seul `DoActionAfter` en fournit
  un, no-op).
- Renommer la propriété d'identité d'un enfant de conteneur oblige à
  compenser le contrat de save du parent : le `getDataToSave` hérité groupe
  les enfants sous `getKey()`, donc l'enfant définit son propre `getKey`
  (cf. `LevelUpSkillsClass.class_name`).

### Les compteurs dans toutes leurs forces

- Un compteur GS n'est pas forcément un composant graphique. Mécanique lib :
  `setCountersParent( parent )` branche chaque compteur sur le compteur du
  même type du parent (`parent.getCounter( type )`), la chaîne est donc
  compteur → compteur ; `counter.setParent( obj )` fait pousser le total à
  chaque changement via le contrat `obj.update( name, nb )` ;
  `addTargetsDomElement( dom, data_name )` pousse la valeur en data
  attribute sur n'importe quel DOM (`updateTargetsDomElement`), et le CSS
  réagit à cette data. Un même compteur peut alimenter plusieurs DOM
  (badge d'onglet + div de zone).
- Un label peut être un objet compteur dédié : `CHARACTER.LevelUpGlobalWarning`
  (`level-up-global-warning.js`) consomme le compteur warnings de la fenêtre
  et rend/re-rend son div tout seul ; `_buildGlobalWarning`,
  `_updateGlobalWarning` et `getMissingCount()` sont supprimés. À la
  souscription, synchroniser la valeur courante (le compteur ne repousse
  qu'au changement) : `label.update( counter.uuid, counter.getValue() )`.
- Généralisation : si la valeur d'un compteur doit influencer une zone
  (style, présence), l'objet qui gère la zone porte le compteur et le style
  se déduit de la data poussée ; jamais de recalcul manuel de classe dans la
  fenêtre.
- Retirer un objet d'un conteneur : son compteur pousse 0 au parent AVANT
  le retrait (`counter.showForParent( false )` → `updateParents` pousse 0 →
  le `update( name, 0 )` du parent **supprime** la clé du mapping, pas de
  clé fantôme, pas de reset du conteneur). Le mapping du parent est clé par
  l'uuid du compteur enfant, pas par l'uuid de l'objet.

### Méthode de travail

- Le test de la partie la plus avancée appartient à l'UTILISATEUR : les
  scénarios verrouillent le comportement déjà vérifié, l'utilisateur explore
  la frontière lui-même dans la vraie feuille (ses retours manuels — fond du
  sélecteur, doublons de compétence — trouvent ce que les scénarios ne
  voient pas). On n'automatise pas au-delà du dernier état vérifié ; quand
  l'utilisateur a vérifié un comportement de frontière, il entre dans le
  scénario au run suivant.
- Nettoyage fichier par fichier avec arrêt et relecture utilisateur à
  chaque fichier ; une décision par run de tests, le run `tests.html`
  appartient à l'utilisateur (le code et le scénario s'adaptent ensemble).
- Les renommages mécaniques (classes CSS, clés, uuid) se propagent aux
  scénarios dans la foulée ; les scénarios identifient les objets par uuid
  (`getContentByUUID( "5__expertise_en_reflexes" )`), pas par comparaison
  de clés.
- Le CSS mort se supprime au passage : bloc `body[data-levelup-missing]` de
  `sheet_levelup.css` enlevé (aucun JS ne posait l'attribut, et couleurs
  brutes interdites par la règle des variables `--*`).
