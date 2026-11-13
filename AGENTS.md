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

Le domaine porte TOUTE la progression de l'onglet "Progression" (fusions
Rounds 5-7, Round 30) : la source
de vérité (`1-levels-history.js` + `2-level-history.js` : `LevelsHistory` + `LevelHistory`, l'entrée
possède `enabled` ET ses lignes de capacités — la validation vit sur la
phase de la ligne, Round 10), les dons d'ascendance par palier
(`6-ancestry-history.js` + `7-ancestry-level-history.js` :
`CHARACTER.AncestryHistory` + `CHARACTER.AncestryLevelHistory`, Round 30),
le vieux
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
sur son état final (Magicien niveau 10 TOTALEMENT configuré, rechargé
depuis le save JSON — `scenario_save_complet.js` court en tout dernier),
l'utilisateur reprend la feuille à cet état pour vérifier l'affichage
rechargé et tester la frontière à la main. Les suites indépendantes
(page_vide, onglets, ascendance, ajustements, caracteristiques,
caracteristiques_classe, classe_prime, classe_entree, archetype,
save_fichier, stuffs) courent avant : chacune se RESET elle-même.
PIÈGE découvert au Round 45 : classe → multiclasse → niveaux →
niveaux_multiple forment une SOUS-CHAÎNE SANS RESET — scenario_classe
hérite de l'Elfe laissé par la suite précédente (multiclasse porte
littéralement « Pre-condition : fin du scenario CLASSE, race Elfe
posée »), scenario_niveaux hérite du multiclasse : une suite qui RESET
entre ajustements et classe casse TOUTES leurs pré-conditions (entrées
de classe non rendues, onglet Progression resté désactivé — Round 39 :
Progression est gated par l'ASCENDANCE, pas par la classe). Une suite
qui se reset se place soit avant ajustements, soit après la
sous-chaîne.

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
8. `scenario_dons_ascendance.js` — sections d'ascendance intercalées :
   séquence exacte Elfe 1, Magicien 1..4, Elfe 5, Magicien 5 (titre,
   ligne "Don d'ascendance" en attente, options = dons d'Elfe du palier,
   "?" par option) ; choisir un don sur Elfe 1 valide la ligne et
   décrémente le compteur, le "?" d'une option ouvre la popup feat
   catégorie race ; save → load restaure le don et le false du palier 5.
9. `scenario_pv_ascendance.js` — le total PV vaut les PV de départ de
   l'ascendance (une fois) + la somme des niveaux.
10. `scenario_langues_supplementaires.js` — mod INT +2 (bonus forcés
   auto-posés) → 2 lignes "Langue supplémentaire" sur Elfe 1 (options =
   langues d'Elfe, sans "?") ; choix draconique validé, la 2e ligne ne le
   propose plus ; ascendance Nain → mod +1, 1 ligne, options Nain, section
   "Nain 1", choix conservé ; retour Elfe → la 2e ligne revient sans
   doublon ; save → load restaure le choix et le compte.
11. `scenario_levelup_niveau10.js` — parcours structurel (le test des choix
   jusqu'au niveau 10 appartient à l'utilisateur, règle de travail) : cinq
   prises → niveau 10, entrées 6-10 rendues, validations du niveau 3
   conservées aux rebuilds ; save → load restaure les dix entrées et le rang
   expert d'Arcanes.
12. `scenario_save_complet.js` — fin de run EN DERNIER (demande utilisateur :
   vérifier le load JSON sur un personnage complet) : toutes les lignes en
   attente se valident par les gestes réels (interrupteur, première option
   du sélecteur, re-requête à chaque itération car les options bougent via
   `sync_lines`), puis le save part au format JSON (`getSaveFileContent`,
   loggué en console pour l'utilisateur), la page est RESETee et RECHARGEE
   depuis ce JSON (injection script + `init( uuid )`) : dix entrées, zéro
   ligne en attente au DOM, école SELECTED, Réflexes experte, re-save
   deepEqual au JSON d'origine. Le run se termine sur la feuille rechargée.
13. `scenario_equipement_complet.js` — EN DERNIER après save_complet
   (Round 52, demande utilisateur) : pas de RESET, la feuille Magicien 10
   rechargée se couvre d'une dizaine d'objets par gestes réels (deux
   armes dont une équipée, deux armures dont une entreposée avec lieu,
   consommable x3 qui empile, objets autres dont un apostrophe, création
   au nom libre par le filtre), compte attendu calculé par dédup,
   encombrement porté croisé domaine, relecture mémoire, save loggué —
   le run SE TERMINE sur la feuille vivante équipée pour l'utilisateur.
   Les suites qui se resetent se placent donc AVANT cette fin de chaîne.

### État au moment de la pause

- **ÉQUIPEMENT livré et validé** (run utilisateur OK, Rounds 45-49) :
  onglet avec barre «+» en tête ouvrant la POPUP d'ajout
  (CHARACTER.StuffAddPopup : type, modèle, commentaire, Valider ;
  le filtre + Entrée des Rounds 40-41 conservés), sections par type avec
  info inline (Dégâts / CA bonus), encombrement par entrée + total dans
  la barre, popup objet enrichie des champs scrapés du type,
  commentaire au domaine + infobulle. Les Rounds 46-49 documentent le
  détail et les pièges (fallthrough partagé du contrôleur, close() du
  slot edition_popup, constructeur à nouveau paramètre, apostrophes
  dans les sélecteurs par valeur, popup.css charge après les feuilles
  de fenêtre, badges de compteur débouncés vs throttling d'onglet en
  arrière-plan).
- **Le rapport complet passe chez l'utilisateur Y COMPRIS les badges
  de compteur** (Round 49) : TEST.waitCounterValue remplace les
  lectures à date fixe (règle : TOUTE lecture de badge perdue à date
  fixe se convertit ; un wait fixe ne garantit rien, un onglet en
  arrière-plan throttle les timers, le headless à budget virtuel ne
  voit jamais la course).
- Modèle : TOUTES les lignes à choix du passage de niveau rendent le
  composant SingleSelectFromData (école, thèse, compétences
  supplémentaires, améliorations, dons — le «?» par option réservé aux
  dons) ; les lignes simples restent des interrupteurs sans texte ;
  seules les capacités validées alimentent les calculs (collecte par
  événement, boîtes noires).
- Les dons se choisissent : DON.getAvailableSkillFeats (niveau +
  prérequis parsés) / DON.getAvailableClassFeats (trait de classe) ;
  le «?» ouvre la popup feat par nom (DON.getFeatInformation) ; le
  choix d'un don sur plusieurs lignes peut encore dupliquer le même
  don (à trancher — voir Round 23).
- La chaîne de tests court EN DERNIER dans tests.html : le run se
  termine sur le Magicien niveau 10 TOTALEMENT configuré rechargé
  depuis le save JSON (scenario_save_complet.js en dernier),
  l'utilisateur reprend la feuille à cet état pour vérifier
  l'affichage rechargé.
- Décisions équipement EN ATTENTE : le total d'encombrement ne compte
  que le PORTÉ (équipé + sac à dos) depuis le Round 50, l'entreposé porte
  son total dans sa section ; le commentaire s'édite par la ROUE
  CRANTÉE depuis le Round 52 ; le «nom spécifique» d'un type sans
  dataset reste à trancher (aujourd'hui le nom libre du filtre crée
  l'entrée hors dataset, sans info de type).
- Syntaxe validée par Node sur tous les fichiers touchés ; dernier
  run headless : TOUT OK (Round 50, 110 OK / 0 ECHEC — run utilisateur
  à confirmer).
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
5. ~~Écriture des fichiers de save~~ — restaure (Rounds 18, 43) :
   `CONTROLLER.Character.getSaveFileContent()` est le propriétaire UNIQUE du
   format (`let <uuid> = <json>;`), `save()` logge à la console pour le
   moment (téléchargement Blob commenté, à rebrancher sur
   `getSaveFileContent`), et le round-trip complet est verrouillé par
   `scenario_save_fichier.js`. Reste à re-générer un
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
Round 30 = onglet "Progression" (demande utilisateur) : l'onglet
"Passage de niveau" devient "Progression", l'entête récap
(`.level-up-header`, "Niveau X (Y actifs)") est SUPPRIMÉ, et le passage
de niveau accueille les dons d'ascendance : un conteneur
`CHARACTER.AncestryHistory` (`6-ancestry-history.js`, enfant du
personnage, save clé `ancestry_history`, uuid "ancestry_history")
maintient une entrée `CHARACTER.AncestryLevelHistory`
(`7-ancestry-level-history.js`, uuid = level_name) par palier
`LEVELUP.ANCESTRY_FEAT_LEVELS` (1, 5, 9, 13, 17) atteint ET ascendance
posée — la sync (`event__level_up__sync_lines`, même plat que les
lignes de classe) ajoute les manquantes, retire les surplus (compteur à
0 AVANT retrait) et rafraîchit les options par
`DON.getAvailableAncestryFeats( race_name, level )` (trait = nom de
l'ascendance, prérequis non parsés — prose variée, tout est proposé).
L'entrée rend SA section (`.level-up-block.ancestry-up-block` +
`data-ancestry-level-name`, titre "<race> <palier>" donc "Elfe 1")
INTERCALÉE au niveau de son palier, AVANT la section de classe du même
niveau (retour utilisateur Round 30 : Elfe 1, Magicien 1..4, Elfe 5,
Magicien 5 — le rendu de la fenêtre fusionne les deux conteneurs par
numéro de niveau, tout palier d'ascendance vit <= au niveau du
personnage donc la dernière section de classe consomme les restantes),
avec SA ligne `LevelUpSkillWithSelect` unique
(slot key `ancestry_feat`, label "Don d'ascendance", "?" par option via
`LEVELUP.FEAT_CATEGORIES[ type ]` → catégorie "race" de
`DON.getFeatInformation`). La valeur chargée s'applique EN PLACE si la
ligne vit déjà (un sync peut précéder le load du save dans l'ordre des
clés : staging perdu sinon). Piège de test : les compteurs warnings
absorbent les lignes d'ascendance en attente (scénario magicien passe à
6/5/6, le warning vert exige le choix du don) et les sélecteurs de
blocs de classe se scindent par `[data-level-name]` (les blocs
d'ascendance portent `data-ancestry-level-name`).
Round 31 = retour UI : la liste du sélecteur (`single-select-list`) dépassait
de son conteneur vers la droite. Cause : ancre `left/right: 0` + `min-width:
260px` — la liste était forcée à 260px depuis le bord GAUCHE d'un conteneur
plus étroit (190-260px selon le libellé du header), et le bloc ne clippe plus
ses enfants depuis le Round 28. Correctif : le `min-width` de la liste est
RETIRÉ — la liste épouse la largeur de son conteneur (bornée par le
min-width/max-width du header), les libellés d'option ellipsent comme ceux
du header. Le `min-width` d'une liste ancrée des deux côtés est une
contradiction : elle ne peut pas être fluide ET garantie plus large que
son ancre.
Round 32 = retour utilisateur : le "?" des dons n'existait que sur les
options de la liste ouverte — impossible de rouvrir la popup du don DÉJÀ
choisi (l'option sélectionnée porte `pointer-events: none`, et le header
n'a pas de lien d'info). Correctif : la ligne de don
(`LevelUpSkillWithSelect`, types `LEVELUP.FEAT_TYPES`) rend un "?" À CÔTÉ
du sélecteur, porté par `info_dom_element` — le nom du don part par
`data-value` lu au clic (`this.getAttribute('data-value')`, jamais embarqué
en dur : les apostrophes), rafraîchi dans `updateHtml`, et le CSS le masque
sans sélection (`[data-value=''] { display: none }` : la data porte l'état,
pas une classe). L'événement est le même `event__show_information__feat`
avec la catégorie de `LEVELUP.FEAT_CATEGORIES[ type ]`. Scénario
dons_ascendance : le "?" masqué sans choix (test 1), affiché + popup du
don sélectionné après le choix (test 2). Frontière : les lignes à choix NON
don (école, thèse, compétences supplémentaires, améliorations) ne portent
pas ce "?" (aucune popup de données derrière). PIÈGE trouvé au run : le
span posé AVANT le `addElementTo` du composant (dernière instruction de
`_computeHtmlValidation`) se retrouvait AVANT le sélecteur dans le DOM —
la pose vit APRÈS l'attache du composant, l'ordre d'appel EST l'ordre du
DOM.

Round 33 = retour utilisateur (inventaire de l'ascendance) : les PV de
départ de l'ascendance (`start_life`) n'étaient affichés que dans le popup
de race, JAMAIS intégrés au total — `computeTotalLife` ne sommait que mod
CON + PV de classe par niveau. Correctif : `start_life` compte UNE fois
quand au moins un niveau est actif (PF2 : niveau 1 = ascendance + classe +
CON). `scenario_niveaux_multiple` recalculé (ses deux totaux absolus
prennent le `start_life` d'Elfe), nouveau scénario chaîne
`scenario_pv_ascendance.js` ([PV ASCENDANCE] : le total = start_life +
somme des niveaux, ni sans start_life ni start_life par niveau).
Round 34 = les langues supplémentaires de l'ascendance (inventaire : le
dernier choix que l'ascendance demande). Compte = mod INT si positif
(+1 pour Humain, `RACES.ADDITIONAL_LANGUAGE_BONUS` écrit à la main — la
phrase scrapée n'est pas parsée), options =
`RACES.getAdditionalLanguages( race_name )` : la liste `language_sup`
scrapée porte la phrase de don collée à la première langue
("... Choisissez parmi Draconique") et des virgules traînantes, le
nettoyage vit dans l'accès (survit au re-scrap) ; Humain n'a PAS de liste
fixe ("toutes les langues courantes") → pool commun =
`RACES.getCommonLanguages` (union des langues de base des ascensions
scrapées) moins les langues de base de l'ascendance. Les lignes vivent sur
l'ENTRÉE D'ASCENDANCE DU NIVEAU 1 ("Elfe 1", mêmes sections que le don) :
`syncLines( race_name, int_modifier )` orchestre (ligne de don + langues au
niveau 1 + staging nullé), `syncAdditionalLanguages` ajoute/retire (compteur
à 0 AVANT retrait) et applique le staging EN PLACE si les lignes vivent déjà
(piège du Round 30), une langue ne se prend pas deux fois (`_getTakenValues` /
`_updateAdditionalSelectOptions`, mêmes filtres que les compétences
supplémentaires), slot key positionnel `additional_language_<i>`, save clé
par slot dans `level_skill` de l'entrée. PIÈGE : le mod INT bouge aux
boutons +/− des caractéristiques — le personnage dispatche
`event__level_up__sync_lines` à `ancestry_history` dans le case
`event__more_button`/`less_button` (il ne le faisait pas au Round 30 : les
dons n'en dépendaient pas). La fenêtre ne se re-rend pas au +/− : le compte
suit à l'activation de l'onglet (même comportement que les compétences
supplémentaires). Nouveau scénario chaîne
`scenario_langues_supplementaires.js` ([LANGUES SUPPLEMENTAIRES] : bonus de
race INT → 1 ligne, choix draconique, bonus de classe INT → 2e ligne sans
doublon, retrait du bonus → la 2e ligne repart et le choix survit,
save → load). PIÈGES du premier run : (a) les bonus de caractéristiques
FORCÉS s'auto-posent au choix de la race/classe (bonus quand `number` égale
le compte de choix sans FREE, cf. `event__ask_set_forced_value`) — dans la
chaîne, le mod INT vit DÉJÀ à +2 (Elfe INT + Magicien INT) dès le niveau 1 :
le scénario magicien calcule donc le compte de lignes d'ascendance en
attente dynamiquement (`_ancestry_pending_count` = 1 don + langues par
`RACES.getAdditionalLanguagesNumber`), et son warning vert exige le choix
des langues ; (b) les boutons +/− des bonus n'existent pas pour un bonus
forcé — le levier utilisateur sur le mod INT dans la chaîne est le
CHANGEMENT d'ascendance (Elfe → Nain : le bonus de race INT part, mod +1,
une langue repart, les options suivent Nain, la section se re-titre
"Nain 1" ; retour Elfe : la ligne revient sans proposer la langue prise) —
le scénario langues suit ce parcours.
Round 35 = affichage des données fixes de l'ascendance dans le GÉNÉRAL
(demande utilisateur, dernier reliquat de l'inventaire) : nouvelle zone
`computeArea__ancestryInfo` (`general_window.js`) sous le champ ascendance
(nouvelle grid area `ancestry-info` de la colonne 4, lignes 3-11 de la
grille) : traits en badges, Taille (label de `BODY_SIZE`), Vitesse ("N
mètres"), Sens (3 ascensions n'en ont pas → ligne absente), Langues = base
(`race.language`) + langues CHOISIES (`AncestryHistory.getSelectedLanguages()`,
nouvel accès du conteneur — la fenêtre demande au domaine, elle ne fouille
pas les lignes). La zone se vide et se reconstruit à chaque appel :
`computeHtmlWithData` (changement d'ascendance) ET l'activation de l'onglet
(les choix de langues se font dans Progression, comme les jets). Styles
`.ancestry-info-*` dans `sheet_general.css` aux variables `--*`, ni gras ni
majuscules (règles d'affichage). Scénarios : nouveau groupe
`[ASCENDANCE] infos ascendance dans le Général` (traits d'Elfe, Moyen,
9 mètres, Vision nocturne, Commun Elfique — helper `TEST_ancestryInfoValue`)
et le test 2 des langues vérifie la langue choisie dans la ligne Langues du
Général après activation.
Round 36 = retours UI sur la zone (demande utilisateur) : (a) PAS de ligne
Taille dans la zone — le champ Taille EXISTE déjà (le `body_size`, enfant de
la race, se rend par le broadcast des enfants dans sa grid area `size`) ;
(b) vitesse/sens/langues passent au STYLE PROPRIÉTÉ (`div.property.vertical`,
label + valeur, transparent comme les autres zones du Général) ; (c) la
Vitesse regroupe les modes de déplacement — "Marche : N mètres" aujourd'hui
(les autres modes : vol, nage, escalade — viendront des sources futures) ;
(d) Sens et Langues deviennent des LISTES ÉVOLUTIVES À ÉDITION MANUELLE
(décision utilisateur) : nouveau composant `CHARACTER.ManualEntries`
(`component/manual_entries.js`, enfant du personnage, clés `extra_senses` /
`extra_languages`, save par tableau) — la liste affichée = entrées GÉRÉES
(base de race + choix de Progression, non retirables ici) + entrées
MANUELLES (retirables par leur "×"). Événements
`event__extra_entries__add` (la valeur ajoutée ne s'embarque JAMAIS en dur :
le composant la lit depuis la cible de l'événement, comme
`event__has_change__input`) / `event__extra_entries__remove` (valeur lue du
`data-value` de l'entrée, pattern des "?"). Routage : contrôleur Character
(les deux événements → personnage) → le composant applique → le personnage
re-broadcast aux fenêtres → la fenêtre Générale recalcule la zone (le
formulaire d'ajout se vide au re-render). Scénario ascendance étendu :
champ Taille existant, entrées gérées sans bouton de retrait, ajout manuel
d'un sens + save + retrait + survie de la base, ajout manuel d'une langue.
Round 37 = onglet « Ajustements » (conception utilisateur : le point NEUTRE
d'édition du personnage — « la feuille doit être utilisable en lecture 90 %
du temps », les cas particuliers ne se gèrent pas aux endroits d'affichage).
Nouveau domaine `sheet/js/adjustment/` (namespace `ADJUSTMENT`, ajouté au
`.jshintrc`) : `CHARACTER.Adjustment` (entrée générique : `kind`, `value`,
`explanation` — uuid `kind__value`, dédupliqué par kind+value, hérite
`OBJECT.InterfaceHtml`) et `CHARACTER.Adjustments` (conteneur, enfant du
personnage, save clé `adjustments`, accès `getEntriesByKind` /
`getValuesByKind`). Les catégories = `ADJUSTMENT.KINDS` écrit à la main :
`language`, `sense`, `speed`, `feat`, `mastery`, `note` (la liste grandit
sans toucher au modèle ; `characteristic_boost` attend la décision). Pas
d'interrupteur (décision utilisateur) : sections par catégorie + retrait
par « × ». Fenêtre `CHARACTER.AdjustmentsWindow`
(`adjustments_window.js`, NAME `adjustments_sheet`, entre Dons et
Progression) : une section par catégorie, entrées = valeur + explication
libre, ligne d'ajout = deux inputs + bouton (les valeurs ne s'embarquent
JAMAIS en dur : le bouton les lit de sa ligne au clic — les explications
portent des apostrophes). Événements `event__adjustment__add`/`remove`
(param__adjustment__kind/value/explanation, la valeur du retrait lue du
`data-value`). Le `ManualEntries` du Round 36 est SUPPLANTÉ et supprimé
(aucun save réel ne porte extra_*) : la zone du Général devient LECTURE
SEULE et CONSOMME `getValuesByKind` (langues, sens, modes de vitesse — la
marche de la race en tête). Scénarios : `scenario_ajustements.js` (RESET +
Elfe : 6 sections, ajout langue avec explication + save + affichage
Général en lecture + retrait, save → load), `scenario_onglets`/`reset`
(6 fenêtres + libellé Ajustements), la zone d'ascendance asserte
l'absence de contrôles d'édition. PIÈGE trouvé au run : la liste d'onglets
de `scenario_reset` n'est PAS une liste de libellés — ce sont les onglets
attendus DÉSACTIVÉS sur page vide ; Ajustements n'y figure pas (l'onglet
reste actif sans pré-condition, comme Dons — verrouillé par
`[ONGLETS] Ajustements = actif sur page vide`).
Round 38 = retour utilisateur sur l'onglet Ajustements : le choix passe en
SÉLECTEUR quand une liste existe, champ libre sinon. `value_picker` par
catégorie dans `ADJUSTMENT.KINDS` : `selector` (langues →
`RACES.getKnownLanguages` = union des langues de base + supplémentaires des
ascensions scrapées, dédupliquée à la casse près ; dons →
`DON.getKnownFeats` = union des dons de compétence/classe/ascendance triée ;
vitesse → `ADJUSTMENT.SPEED_MODES` écrit à la main + champ mètres), `input`
(sens, maîtrises — leurs listes viendront avec la consommation phase 2 —,
notes). Le geste reste « + » : le pick (`event__adjustment__pick`, param
`param__choice_value` du composant) POSE le choix en attente dans
`pending_values` de la fenêtre (header du sélecteur à jour), le
`event__adjustment__commit` ASSEMBLE la valeur (pending pour les
sélecteurs, lecture des inputs de la ligne pour le libre, mode + " : " +
mètres + " mètres" pour la vitesse) et repasse le plat
`event__adjustment__add` au personnage — la fenêtre assemble, aucune valeur
ne voyage inline. Événements d'UI dans la liste FENÊTRES du contrôleur
(`toggle_selector`, `pick`, `commit`). Le stylage du composant est copié
scopé `.adjustments-window` (les styles levelup sont scopés à leur
fenêtre). Le pending se vide au commit (le sélecteur reconstruit revient à
son option vide).
Round 39 = retour utilisateur : le choix de l'ascendance ALLUME l'onglet
Progression. Le gating de `LevelUpWindow` passe de la classe à la RACE
(character.js, case form__element_changed + remove_level ;
`character_windows.js` état initial) : les sections d'ascendance vivent dès
l'ascendance. Corollaire : le palier 1 d'ascendance existe dès l'ascendance
posée, SANS classe (`AncestryHistory.sync` : `Math.max( 1, getLevel() )` —
PF2 : le don d'ascendance et les langues se choisissent à la création,
avant la classe ; les paliers 5+ suivent toujours les niveaux de classe).
L'onglet Niveau reste gated classe, Caractéristiques gated race. La
fenêtre Progression sans classe rend le warning global + les sections
d'ascendance, pas de sections de classe ni de sélecteur de classe
(`getHighestClassName` retourne null sur conteneur vide, sans garde).
Scénarios : nouveau groupe `[ASCENDANCE] onglet Progression allumé +
section Elfe 1 sans classe` (don en attente, langues au compte dynamique,
zéro section de classe) ; `[NIVEAUX] suppression dernière classe` verrouille
l'inverse (Niveau désactivé, Progression ALLUMÉ sans classe). PIÈGE trouvé
au run : les sections d'ascendance étaient rendues DANS la boucle des
niveaux de classe (fusion par niveau, Round 30) — sans section de classe,
la boucle ne court jamais et les sections d'ascendance n'apparaissaient
pas alors que leurs entrées existent ; la boucle de vidage (les sections
restantes se rendent seules après la boucle de classe) couvre le cas.
Second piège : un scénario ne doit jamais nommer une valeur absente des
données — « Céleste » ne figure dans AUCUNE langue scraped ; le test pique
dynamiquement la première langue de `RACES.getKnownLanguages()` hors base
de l'ascendance.
Round 40 = retour utilisateur : chaque sélecteur porte une LIGNE DE FILTRE
(pattern shinken-list STRING_INPUT — la liste shinken-solutions n'est PAS
portée : son Set/Lines/Line/Filter dépend des composants web du framework
Shinken — COMPONENT.Input/Select, DOM.Service, validators, dictionnaires —
absents de la lib GS ; porter la liste entière = porter la moitié du
framework). Le filtre vit dans le composant lib
(`SingleSelectFromData._computeOptionsHtml` : input `.single-select-filter`
en tête de liste ouverte + fonction statique `filterOptions` —
présentation pure : l'input lit SA valeur au fil de la frappe et masque
les options non correspondantes (data-value en minuscules), l'option vide
reste TOUJOURS visible, état dans le DOM, rien ne voyage, aucun événement
bus). Stylage scopé par fenêtre (`.level-up-window` /
`.adjustments-window`). Verrouillé par le scénario ajustements : filtre
« dracon » ne laisse visibles que l'option vide + les langues matchant
(compte attendu calculé du domaine), vider réaffiche tout.
Round 41 = retour utilisateur : ENTRÉE sur le filtre. Composant lib :
`setFilterEnterEventName` — quand un consommateur configure l'événement,
TOUTE Entrée le dispatche avec `'param__filter_value':this.value` (le texte
brut du filtre lu dans l'input, jamais inline) ; sans configuration
(cas levelup), la Entrée générique `filterKeydown` clique l'option dont le
data-value matche exactement le filtre (insensible à la casse), sinon la
seule option visible restante, sinon rien — le flux standard suit
(option.click → select_choice / pick). Dans l'onglet Ajustements
(`event__adjustment__filter_enter`, déclaré dans la liste FENÊTRES du
contrôleur) : la valeur = le nom CANONIQUE de l'option si une matche
(insensible à la casse), SINON le texte brut du filtre comme si le nom
existait (demande utilisateur : créer une valeur hors liste) — puis le
commit suit directement (`pending_values` + `_commitAddRow`, explication
incluse). Scénarios : [AJUSTEMENTS] Entrée sur nom exact (validation sans
le +, explication portée) et Entrée sur nom inconnu (« Quenya » devient la
valeur) ; [DONS ASCENDANCE] Entrée sur nom exact d'un don de palier 5 le
valide, re-vidage par l'option vide pour le test SAVE.
PIÈGE de course (trouvé après un ECHEC dons) : le `data-number` du badge
de compteur s'écrit EN DERBAUCHEE (`_askUpdateHTML` 50 ms) au bout de la
chaîne clic → phase (callback au tick suivant) → compteur ligne →
compteur fenêtre → badge. Un test qui lit le badge juste après un clic
attend `TEST.wait( 300 )` comme le test école de scenario_levelup_magicien —
60 ms perdaient la course de quelques millisecondes (scenario_dons
aligné : le décrément du don d'ascendance EST réel, seule la lecture
était trop précoce).
Round 42 = retour utilisateur sur l'Entrée de l'onglet Ajustements :
l'ENTRÉE NE CRÉE RIEN — elle positionne la valeur en attente sur le
sélecteur, exactement comme un PICK (`_pickValue` partagé par
`event__adjustment__pick` et `event__adjustment__filter_enter` : valeur
canonique si le filtre matche, texte brut sinon). Le bouton + seul crée
l'entrée, l'utilisateur écrit l'explication entre les deux (au moment du
Round 41, l'Entrée commitait directement — l'explication ne pouvait pas
être saisie). L'EXPLICATION DEVIENT MODIFIABLE SUR CHAQUE ENTRÉE après
création : chaque entrée rend un input discret
(`input.adjustments-entry-explanation`, fond transparent et bord
invisible en lecture, bord visible au focus) dont le `change` part par le
plat `event__adjustment__edit_explanation`
(`param__adjustment__kind` + `param__adjustment__value` lus sur le
parent `data-kind`/`data-value`, texte lu dans l'input — jamais inline) :
déclaré dans la liste PERSONNAGE du contrôleur (il va au caractère, pas
à la fenêtre), le personnage le route au domaine `adjustments` SANS
recharger les fenêtres (l'input garde sa valeur et son focus, rien
d'affiché ne change). PIÈGE : l'input d'entrée ne porte PAS de
`data-name` — le champ `data-name="adjustment-explanation"` identifie le
champ d'EXPICATION DE LIGNE D'AJOUT, lu par `_commitAddRow` en
`section.querySelector` (les entrées viennent avant la ligne d'ajout
dans la section, un data-name sur les deux casserait le commit). Le
save porte l'explication modifiée telle quelle. Scénario ajustements
réaligné : Entrée = en-tête du sélecteur affiche la valeur, AUCUNE
entrée créée ; + = entrée avec explication ; ÉDITION de l'explication
sur l'entrée (change → domaine → save).
PIÈGE lib (trouvé au run) : `computeTitle` du composant n'affichait que
le libellé d'une OPTION existante — une valeur hors liste (le texte
brut du filtre par Entrée) retombait sur `--`, la validation paraissait
perdue. Le header affiche maintenant le nom sélectionné lui-même quand
aucune option ne le porte
(`let label = this.selected_name || this.default_label`) — les
consommateurs à valeur dans la liste ne changent pas, l'option vide
affiche toujours `--`.
Suite Round 42 (demande utilisateur) : l'OUVERTURE du sélecteur pose le
FOCUS sur la ligne de filtre (`toggleState` du composant, focus posé
quand `stateSelector` passe à 1) — le clavier pilote la liste dès le
clic sur le header. La fermeture au clic dehors passe par askHidePopup
(chaîne de clics), un focus programmatique ne referme jamais la liste.
Verrouillé par [AJUSTEMENTS] test 1 : clic header → liste ouverte
(data-state-selector 1) + activeElement = input du filtre.
Round 43 = test du save PAR FICHIER (demande utilisateur, suite indépendante
`scenario_save_fichier.js` avant la chaîne levelup) : les scénarios
existants ne testaient que la relecture EN MÉMOIRE
(`new CHARACTER.Current()` + `updateData( saved )`), jamais le vrai chemin
de fichier. `CONTROLLER.Character.init( uuid )` accepte un uuid explicite
(fallback sur `?id=` — c'est le boot réel de `index.html?id=<uuid>`), et
`TEST.RESET.sheet( character_uuid )` le traverse : RESET + `init( uuid )` =
boot sur un save sans recharger la page. `CONTROLLER.Character.getSaveFileContent()`
est le propriétaire unique du texte de fichier `let <uuid> = <json>;`
(`JSON.stringify` compact) — le futur téléchargement le consomme, `save()`
reste sur `console.log` pour le moment. [SAVE FICHIER] test 1 : état riche
(RESET, Elfe, Magicien 5, École du mentalisme, expertise en réflexes
validée, ajustement langue "Épreuve du pont") → le contenu de fichier
asserte son format (préfixe `let <uuid> = `, point-virgule final, JSON
parse et deepEqual au `getDataToSave`). Test 2 : le contenu est INJECTÉ
COMME BALISE SCRIPT dans la page — mécanique identique à un fichier de
`sheet/save/` chargé par index.html (le `let` d'un script est visible du
`eval` de `SERVICE.DATA.loadDataByUUID`) — puis rechargement par la voie
réelle et assertions uuid/niveau/historique/école (phase SELECTED au
DOM)/Réflexes experte/explication libre, plus la feuille VIVANTE (bascule
expertise off puis on → Réflexes Q puis E). PIÈGE : un `let` ne se rejoue
pas — le script n'est injecté QU'UNE FOIS par uuid (rejouer = SyntaxError,
les scénarios n'invoquent jamais la globale directement, tout passe par
`init( uuid )`). PIÈGE : `event__data_loaded__done` part de
`CHARACTER.Current.init` (character.js) — la voie réelle l'émet seule,
seuls les scénarios en mémoire qui contournaient `init` l'ajoutaient à
la main.
Round 44 = vérification UTILISATEUR du load JSON sur un personnage COMPLET
(demande utilisateur : « fais moi un personnage totalement configuré,
garde la sauvegarde au format JSON, reset la page et envoie le JSON pour
voir l'affichage ») : nouveau scénario `scenario_save_complet.js`, EN
DERNIER dans tests.html (fin de chaîne, il charge l'état laissé par
scenario_levelup_niveau10). Test 1 : toutes les lignes en attente de
l'onglet Progression se valident par les gestes réels — helper
`TEST_saveCompletValidateOne` : première ligne en phase RUNNING trouvée,
interrupteur `.level-up-row-toggle` pour la ligne simple, PREMIÈRE OPTION
`data-value` non vide du composant pour la ligne à choix, une ligne par
itération avec `TEST.wait()` (les options des lignes de don bougent à
chaque choix via `event__level_up__sync_lines`, on RE-REQUÊTE tout à
chaque itération, garde à 300) — PREMIER RUN : la boucle s'arrêtait sur
la première ligne à choix sans option (19 restées en attente), elle court
maintenant en POINT FIXE : une ligne sans option est SAUTÉE et rediscutée
au tour suivant (ses options peuvent s'ouvrir quand les validations
montent les rangs des dons), arrêt quand plus rien n'est actionnable, et
les lignes restées bloquées sont LISTÉES par slot key + label dans le
message d'échec et la console GSOU ; le scoped `.level-up-row` évite le toggle de bloc
(`.level-up-level-toggle`, une autre classe). Le scénario délègue le
CHOIX à la première option dispo (pas de valeur canonique) : le don dupliqué
sur deux lignes reste possible (point ouvert Round 23, visible dans
l'affichage final). Test 2 : le save part au format JSON
(`getSaveFileContent`, loggué en console GSOU pour l'utilisateur), la page
est RESETee puis RECHARGEE depuis ce JSON (injection balise script +
`TEST.RESET.sheet( uuid )`) — assertions uuid/niveau 10/dix
entrées/Réflexes experte/zéro ligne en attente au DOM/école SELECTED avec
sa valeur/RE-SAVE deepEqual au JSON d'origine (round-trip stable) — le run
se termine sur la feuille rechargée, l'utilisateur vérifie l'affichage à
la main.
SECOND RUN (le point fixe isole la cause) : il restait exactement deux
lignes `[ancestry_feat_1 = don ancestral]` vides — ce sont des lignes DE
BLOC DE CLASSE (slot positionnel `type + "_" + p`, Round 16), pas les
sections d'ascendance (`ancestry_feat` sans index) : les tableaux de
classe scrapés rappellent « don ancestral » aux niveaux 5 et 9,
`detectType` en fait des lignes `ancestry_feat` de classe... jamais
remplies — `_syncFeatLinesOptions` de l'entrée de classe ne connaît que
`skill_feat` et `class_feat` : ligne jamais validable, warning permanent,
et une éventuelle option poserait un DOUBLE choix du don (la section
d'ascendance du même palier le porte déjà). CORRECTIF (PF2 : les dons
ancestraux aux niveaux 5/9/13/17 sont des gains de NIVEAU DE PERSONNAGE,
propriété des sections palier de l'AncestryHistory, Round 30) : le
`buildSkills` de l'entrée de classe SAUTE les parts de type
`ancestry_feat` — la ligne de rappel du tableau de classe ne se construit
pas. Aucun scénario ne comptait ces lignes (les compteurs aux niveaux 5+
s'assertent en deltas, le magicien n'asserte un total qu'au niveau 1).
Règle qui en découle : ne JAMAIS remplir une ligne de classe
`ancestry_feat` — le type existe pour `detectType` et les sections
d'ascendance, le bloc de classe l'ignore.
TROISIÈME RUN : le seul rouge restant était l'école attendue (« École du
mentalisme ») alors que la chaîne valide l'école génériquement (test 5 du
magicien : première option → « École de forme protéenne », son choix
explicite est annulé par son test 4 de retour à l'option vide) ; le
scénario lit maintenant la valeur sélectionnée AVANT le reset
(`getSelectedValue()` de la ligne école) et la compare à l'affichage
rechargé — règle : une assertion de scénario ne FIGE JAMAIS une valeur
que la chaîne construit par « première option dispo », l'assert suit
l'état, pas une supposition.
Round 45 = onglet ÉQUIPEMENT (demande utilisateur, après validation du
save complet). Décisions actées : place APRÈS Général dans la navigation
(Général, Équipement, Caractéristiques, Niveau, Dons, Ajustements,
Progression), PÉRIMÈTRE 1 = inventaire + sections posées manuellement
avec coche « Porté » SANS calcul (la phase 2 — CA, jets d'attaque,
croisement des maîtrises attack/defense — attend un chantier de calcul ;
le scrap porte DÉJÀ les champs : les armes « Dégâts »/« Mains »/
« Catégorie », les armures « CA bonus »/« Mod. de dex. max. »/« Force
requise »), la QUANTITÉ ne vit QUE sur les consommables (décision
utilisateur : potion de soins oui, épée longue non) — le trait
« Consommable » décide (données, survit au re-scrap), le + EMPILE un
consommable possédé et NE FAIT RIEN sur un objet déjà là. Domaine
`sheet/js/stuffs/` : `constant_stuffs.js` est le dataset scrapé
(3309 entrées) AMORCÉ du wrapper `var STUFFS = [ ... ];` (l'amorce est
le câblage, le prochain re-scrap doit l'émettre), `constant-stuff.js`
(namespace `STUFF`, KINDS weapon/armor/other + accessors
`STUFFS.getKindOptions` — les sections se remplissent PAR LE DOMAINE :
armes = entrées avec « Dégâts », armures = entrées avec « CA bonus »,
autres = le reste —, `isConsumable` par trait, `getItemInformation`
pour la popup item), `stuff.js` (entrée : kind, value, quantity, worn —
uuid `kind__value`, la quantité des non-consommables reste 1), `stuffs.js`
(conteneur enfant du personnage, save clé `stuffs`, `addStuff` empile les
consommables). Fenêtre `StuffsWindow` (NAME `stuffs_sheet`, label
« Équipement », actif sur page vide sans pré-condition) : une section
par kind avec sélecteur + filtre + Entrée (pattern Ajustements), MAIS
l'Entrée ne valide qu'un nom EXISTANT du dataset — PAS de création hors
liste (l'équipement vient du scrap, jamais de la saisie). Chaque entrée :
nom, « ? » → popup `event__show_information__item` (renderer item
existant, cache par uuid `stuff__<nom>`), quantité modifiable en place
si consommable (change → domaine, AUCUN re-render : rebuild des options
des 3 sections trop coûteux par frappe), coche « Porté » mise à jour en
place par data attribute (`data-worn` sur l'entrée, jamais une classe),
retrait « × ». Routage : les événements de sélecteur + porté + quantité
vivent dans la liste FENÊTRES du contrôleur (le + assemblé par la
fenêtre pose `event__stuff__add` blanc au personnage par le plat), le
popup item dans la liste POPUPS de Main. `sheet/css/sheet/sheet_stuffs.css`
scopé `.stuffs-window` (stylage sélecteur copié des Ajustements).
Scénarios : `scenario_stuffs.js` (suite indépendante : 3 sections + page
vide, épée longue par Entrée sans quantité + popup + porté en style
calculé, consommable empiré au + + quantité modifiée + save → load +
retrait), scenario_onglets passe à 7 fenêtres + un test d'ORDRE de
navigation. PREMIER RUN (rouge, deux leçons) : (1) la suite était placée
entre ajustements et classe — elle RESET et laisse la race VIDE, cassant
toutes les pré-conditions de la sous-chaîne classe/multiclasse/niveaux
(iterée ci-dessus, la suite se place désormais APRÈS scenario_archetype)
; (2) les dispatches directs `CONTROLLER.Main.doActionAfter` du scénario
divergeaient du geste réel — le scénario passe maintenant par le clavier
du filtre (frappe + Entrée sur l'input du sélecteur ouvert, même parcours
que l'onglet Ajustements), et les messages d'échec embarquent le
diagnostic des trois sections (libellés courants des sélecteurs).
DEUXIÈME RUN : le filtre du test tapait « epée longue » SANS ACCENT — la
comparaison du filtre est insensible à la casse mais PAS aux
diacritiques, aucune option ne matchait (corrigé : la frappe de test
porte les accents, comme un utilisateur qui recopie le nom). TROISIÈME
RUN : une popup laissée RUNNING pollue TOUTES les suites suivantes —
l'assertion d'ouverture d'une popup est `.popup-overlay[data-current-
phase='RUNNING']` (la popup refermée RESTE au DOM, masquée — `body >
.popup` est le popup D'ÉDITION, un autre animal), et un scénario qui
meurt avant sa fermeture empoisonne chaque assert popup du run (les
obtenus affichaient « Épée longue » dans les popups maîtrises, actions,
dons). DOUBLE correctif : le scénario stuffs asserte la popup par
l'overlay RUNNING (puis la referme par son uuid), et
`TEST.RESET.sheet` REFERME toutes les popups d'information par l'API
avant de vider (une suite qui meurt ouverte ne contamine plus les
suivantes) — règle : toute popup ouverte par un test SE REFERME, on
asserte par l'overlay RUNNING, jamais par `body > .popup`.
Round 46 = QUATRIÈME RUN stuffs (l'ECHEC résiduel du test consommable,
diagnostic mené en headless Edge depuis l'agent — le run complet se
reproduit en `msedge --headless=new --virtual-time-budget=180000
--dump-dom file:///...tests.html`, le rapport vit dans le `#test-report`
du DOM dumpé) : crash `reading 'length'` au save → load en MÉMOIRE du test
consommable. RACINE : c'est le PREMIER scénario qui relit le save d'un
personnage SANS ascendance — le save porte `"race": { "value": "" }`,
`RACES.Race.setValue` faisait `Object.assign( {}, RACES.getDataByName( "" )`
= `{}` puis `available_legacies.init( data_from_race[ "legacies" ] )` avec
`undefined` → `LEGACIES.Legacies.init` crashe sur `data.length`. Toutes
les autres relectures de la chaîne (save fichier, save complet,
compétences) chargent un Elfe, le cas "feuille vide relue" n'avait jamais
couru. CORRECTIF : `RACES.Race.setValue` garde sur `getDataByName` (émetteur
réel : un save légitime à valeur vide) — rien à distribuer sans race
posée, la relecture d'une feuille vide reste vide, `document.body.dataset.
isRaceSet` se pose sur les deux branches. AU PASSAGE : `cleanMessage` du
runner splitait `"\\n"` (backslash littéral, jamais un saut de ligne) —
la stack « après le @ » du rapport était TOUJOURS vide depuis le début,
le rapport porte enfin fichier + ligne du crash (split sur `"\n"`), verrou
de la prochaine session de diagnostic.
Round 47 = ÉQUIPEMENT v2 (demande utilisateur : notion
d'ENCOMBREMENT + un ENDROIT UNIQUE d'ajout, armes et armures d'abord
pour valider le principe). Barre d'ajout en tête de fenêtre
(`.stuffs-add-bar`) : sélecteur de TYPE (STUFF.KINDS, défaut = Armes,
le type posé SURVIT aux ajouts en `pending_values`) → sélecteur de
MODÈLE qui suit le type (`STUFFS.getKindOptions`, options du dataset)
→ le + SEUL crée ; les trois sections (Armes, Armures, Autres objets)
ne portent PLUS leur ligne d'ajout, elles affichent leurs entrées.
Événements `event__stuff__toggle_type_selector` / `event__stuff__pick_type`
(composant type, liste FENÊTRES du contrôleur), le pick de type
réinitialise le modèle en attente (un modèle du type précédent ne
peut pas atterrir dans le nouveau). Les entrées portent leur INFO
INLINE DE TYPE (KINDS `info_field`, clé scrapée : « Dégâts » pour une
arme, « CA bonus » pour une armure, `.stuffs-entry-stat`), leur bulk
(`.stuffs-entry-bulk`, texte brut du scrap, « — » si absent), le
« ? » (popup item ENRICHIE : les champs de type scrapés
`KINDS.detail_fields` rendus en lignes de stats — Dégâts/Mains/
Catégorie/Groupe pour une arme, CA bonus/Mod dex/Pénalités/Force
requise pour une armure), la quantité des consommables, « Porté » et
« × » comme avant. ENCOMBREMENT : `STUFFS.parseBulk` (PF2 : « L » =
0,1, les 4 entrées scrapées sans bulk pèsent 0), `getEntryBulk`
(consommables à l'unité), le TOTAL vit à côté de la barre
(`.stuffs-bulk-total`, décimale française, arrondi au dixième) ;
le re-render complet des options coûte trop cher par frappe : le
total se met à jour EN PLACE aux changements de quantité
(`event__stuff__edit_quantity`), le retrait passe par le refresh
ordinaire. DÉCISIONS EN ATTENTE (flaguées à l'utilisateur) : le total
compte TOUT l'inventaire aujourd'hui (porte/worn à trancher avec le
chantier CA), et le « nom spécifique » d'un type sans dataset
(l'utilisateur : « suivant le type je peux avoir le choix ou mettre
un nom spécifique ») reste à décendre — les autres objets restent
dataset-driven sans saisie libre (règle Round 45). PIÈGE (trouvé au
run) : les noms d'objets portent des APOSTROPHES (« Armure
d'écailles ») — un sélecteur par valeur en quotes simples est INVALIDE
et crashe silencieusement le handler inline (« Script error » au
window.onerror) : le sélecteur par valeur s'emballe TOUJOURS en
guillemets doubles via `JSON.stringify( value )` — corrigé dans le
handler « Porté » de la fenêtre ET dans les requêtes du scénario.
Scénario stuffs réaligné : 4 tests (page = barre unique + 3 sections
vides + encombrement 0 ; épée longue par Entrée = entrée armes +
dégâts inline + popup + porté ; armure par CHANGEMENT DE TYPE =
entrée armures + CA bonus inline + porté + options du modèle qui
suivent le type ; consommable par type autres objets = empilement +
quantité + encombrement croisé domaine + retrait + save → load, les
totaux attendus se CALCULENT depuis `STUFFS.parseBulk`, jamais de
constante figée). Validé par run headless complet : 110 OK / 0 ECHEC.
Round 48 = ÉQUIPEMENT v3, retours utilisateur : le « + » passe EN TÊTE
de la barre (premier enfant) et l'ajout vit dans une POPUP (le « + »
l'ouvre) : choix du TYPE, choix du MODÈLE suivant le type (composants
lib avec filtre + Entrée), champ COMMENTAIRE libre, Valider crée puis
referme, Quitter referme sans créer. La POPUP `CHARACTER.StuffAddPopup`
(`stuffs/stuff-add-popup.js`, déclaré dans index.html + tests.html)
vit sur le slot `CONTROLLER.Character.edition_popup` comme les popups
d'édition de la feuille (mêmes classes .popup/.edition-property-popup/
title/popup-up-actions : le RESET du test-runner la ferme avec les
autres) ; Valider émet `event__stuff__commit` → le contrôleur route à
`this.edition_popup.doActionAfter` (les événements type/modèle/filtre
quittent la liste FENÊTRES du contrôleur : leurs émetteurs vivent dans
la popup), le commit lit SON état (le commentaire sur son input, valeur
lue au clic — jamais embarqué inline) et repasse le plat
`event__stuff__add` avec `param__stuff__comment`, puis
`event__form__reset` se referme. Le TYPE en attente re-vierge à chaque
réouverture (l'attente d'une popup fermée ne survit pas). Commentaire :
champ du domaine (`CHARACTER.Stuff` : constructeur + init + save +
updateData + infobulle `title` de l'entrée). PIÈGES du run : (a) un
fallthrough PARTAGÉ ne se découpe qu'en recopiant la queue par groupe —
le premier montage absorbait les cases levelup/ajustements qui
partageaient la chute `windows.doActionAfterContentChildren` (84
ECHECS d'un coup) ; (b) la popup DOIT définir `close()` (contrat du
slot edition_popup, `event__form__reset` l'appelle) : sans lui elle ne
se referme jamais et chaque suite suivante casse ; (c) l'édition
d'un constructeur à nouveau paramètre se fait AUSSI dans le
constructeur (init seul jetait le 5e argument — commentaire perdu
avec le commit qui le lisait juste). CSS : les styles sélecteur
(scopés `.stuffs-window` jusqu'ici) vivent désormais scopés à
`.stuffs-add-popup` ; le conteneur de la popup double sa classe
(`.edition-property-popup.stuffs-add-popup`) pour passer devant
popup.css qui CHARGE APRÈS les feuilles de fenêtre. Barre : `.stuffs-
add-bar` = + en tête + total encombrement à droite. Scénario stuffs
réaligné (gestes popup : ouverture par +, Entrée sur filtre, pick,
commentaire posé sur l'input, Valider, Quitter, popup réouverte =
vierge). Validé par run headless complet : 110 OK / 0 ECHEC.
Round 49 = retour utilisateur (3 ECHECS counter sur SA machine, tous
verts en run headless virtuel) : `TEST.waitCounterValue` (runner) —
attente de CONVERGENCE du badge de compteur par polling borné (50 ms,
3 s), au lieu d'une lecture à date fixe. La chaîne d'écriture du
`data-number` (clic → phase au tick suivant → compteur ligne → compteur
fenêtre → badge `_askUpdateHTML` 50 ms) est debouncée à CHAQUE étage et
un onglet laissé en arrière-plan fait throttyler ses timers par le
navigateur (≥ 1 s) : `wait( 300 )` ne garantit RIEN sur la vraie
machine (Round 41 croyait le contraire) — le run headless à budget
temps virtuel exécute les timers aussitôt, donc il ne voit JAMAIS la
course. Règle qui en découle : TOUTE lecture de badge data-number après
un geste passe par `TEST.waitCounterValue( badge, attendu )` (l'assert
d'après porte le diagnostic si la convergence n'arrive pas) — posé sur
le badge de ligne + badge d'onglet du test école, le badge d'onglet du
test « tout validé » et le badge d'onglet du delta dons
(dons_ascendance réaligné, le commentaire de course du Round 41
remplacé). Les autres lectures de badges qui passent encore à date
fixe gardent wait : seules celles qui ONT PERDU la course se
convertisent (une décision par run).
Round 50 = ÉQUIPEMENT v4, trois catégories (demande utilisateur, arbitrages :
lieu libre sur l'entreposage, défaut sac à dos, sélecteur = FILTRE) : la
coche « Porté » devient un EMPLACEMENT (`CHARACTER.Stuff.location` +
`place`, plus de champ `worn`) — `STUFF.LOCATIONS` (equipped/backpack/
stored, l'ordre du tableau est l'ordre d'affichage, des puces et des
sections), `STUFF.DEFAULT_LOCATION = "backpack"`,
`STUFF.CARRIED_LOCATIONS = ["equipped","backpack"]` : l'encombrement
de la barre ne compte que le PORTÉ (PF2 : l'entreposé ne pèse pas,
décision Round 47 tranchée), la section Entreposé porte son propre
total en titre. Le save écrit `location` + `place`, `updateData`
relit les vieux fichiers `worn` (true → équipé, false → sac à dos).
La barre porte des PUCES DE FILTRE (Tous + une par emplacement avec
compte d'entrées, `event__stuff__filter_location`) : état de VUE sur
la fenêtre (`current_filter`), rien ne voyage au personnage ; les
sections deviennent des sections PAR EMPLACEMENT (`data-location`, la
section par type disparaît de la fenêtre — l'info de type reste inline).
Le contrôle d'emplacement PAR ENTRÉE n'est PAS le composant lib : les
noms d'objets portent des apostrophes et `addParamsForEvents` embarque
les valeurs INLINE — chaque entrée porte des PUCES (`stuffs-entry-
location`, une par emplacement) qui lisent kind/value/location du DOM
au clic (`event__stuff__set_location`), l'état vit dans
`data-location` + CSS, jamais une classe. Le déplacement est un geste
ponctuel : full re-render (la frappe de quantité/lieu reste en place,
elle serait trop chère par frappe). Le LIEU : input libre sur l'entrée
entreposée (`event__stuff__edit_place`, titre = « Lieu : … —
commentaire ») + ligne dans la popup d'ajout (révélée par
`data-stored` sur le body du popup via `SERVICE.DOM.setDataSet`),
il SURVIT aux allers-retours d'emplacement (gardé dans le domaine,
seul l'affichage est conditionnel). La popup d'ajout porte sa ligne
EMPLACEMENT : le dernier choisi SURVIT à la fermeture (statique
`CHARACTER.StuffAddPopup.last_location`, décision utilisateur — le
TYPE, lui, re-vierge à chaque réouverture) ; empiler un consommable ne
le DÉPLACE PAS. Pièges : `.single-select-filter` masqué en CSS sur le
sélecteur à 3 options (`.stuffs-add-popup-location`) ;
`SERVICE.DOM.setDataSet` écrit dans `dataset` (booléen → string).
Scénario stuffs réaligné : filtre + compte des puces, déplacement par
puces, lieu hors/entreposé, hors-encombrement de l'entreposé, survie
du dernier emplacement, migration `worn`, save → load (`location`/`place`).
Validé par run headless complet : 110 OK / 0 ECHEC.
Round 51 = ÉQUIPEMENT v5, retours utilisateur (quatre) : (a) la popup
d'ajout démarre VIERGE — TOUT sélecteur « -- » (le type ne se
présélectionne plus, l'emplacement non plus : la statique
`last_location` du Round 50 est SUPPRIMÉE, décision révélée trop
astucieuse — l'emplacement vide retombe au Sac à dos au Valider, PF2 :
ce qui n'est ni équipé ni entreposé se porte), le sélecteur de modèle
ne porte QUE l'option vide tant qu'aucun type n'est posé ; (b) un nom
INCONNU au filtre du modèle DEVIENT le modèle (demande utilisateur,
RENVERSE la décision Round 45 « dataset-only » : une entrée vit hors
du scrap — l'Entrée dans la popup matche d'abord le nom canonique
d'une option, sinon le TEXTE BRUT, un nom libre exige un type posé ;
l'entrée hors dataset n'a ni info inline, ni «?», encombrement «—»,
non-consommable) ; (c) les colonnes des entrées sont TITRÉES : une
ligne d'entête vit en tête de CHAQUE section (Objet/Détail/Encomb./
Qté/Lieu/Emplacement, abréviations du même esprit que «Niv» de la zone
jets), elle partage la GRILLE fractionnaire des lignes (colonnes
conditionnelles Qté/Lieu réservées, vides sur les lignes qui ne les
portent pas), et la cellule Objet héberge le «?» (l'entrée en grille
remplace le flex) — les éléments d'entrée lisent leur identité par
`this.closest('.stuffs-entry')` (les cellules ne sont plus des enfants
directs de l'entrée, parentNode ne suffit plus) ; (d) les puces de
FILTRE de la barre se voient comme des boutons : bord apparent,
padding 3px 12px, la puce active peinte + grasse (l'actif porte le
gras, règle des onglets) — la bascule ne se découvrait pas.
Scénario stuffs réaligné : entête titré, popup vierge, nom libre
(création, zéro info), Valider sans rien, emplacements posés au geste,
stack sans déplacement. Validé par run headless complet :
110 OK / 0 ECHEC (run utilisateur à confirmer).
Round 52 = ÉQUIPEMENT v6, trois retours utilisateur : (a) BUG FERMETURE
des popups d'information — l'uuid embarquait INLINE dans les handlers
de fermeture (l'onclick de l'overlay MAIS AUSSI le bouton « x » via
`SERVICE.DOM_HELPER.createButton` → `addParamsForEvents`) : le uuid
des sujets à apostrophe (« Ampoule d'effroi inférieure ») cassait le
JS inline, la popup restait OUVERTE (les scénarios fermaient par appel
programmatique, le bug ne se voyait qu'en geste réel). Correctif :
l'overlay porte `data-popup-uuid`, overlay et « x » le LISENT au clic
(`this.getAttribute` / `this.closest('.popup-overlay')`) — le « x »
quitte createButton (bouton posé main aux classes gs-button-V4, label
en div.gs-label). REGLÉE PAR ÉCRIT dans les scénarios : l'armure
apostrophe fermée par le « x » RÉEL puis par le clic de fond de
l'overlay. Règle qui en découle : rien des popups ne s'embarque en dur,
l'uuid vit en data-attribute de l'overlay. (b) LA CROIX DEVIENT LA
ROUE CRANTÉE : chaque ligne ne garde que ses colonnes de LECTURE (nom +
«?», info de type, encombrement, quantité des consommables — grille 5
colonnes), la roue ⚙ ouvre `CHARACTER.StuffEditPopup`
(`stuffs/stuff-edit-popup.js`, même slot edition_popup, stylage partagé
`.stuffs-form-popup`) : nom en LECTURE (l'objet ne se renomme pas),
EMPLACEMENT par sélecteur, LIEU révélé sur Entreposé, COMMENTAIRE (le
repli « ne s'édite qu'à la création » est RÉSOLU), et les actions
Valider / Retirer / Quitter — le RETRAIT vit dans la popup, plus de
croix dans la liste. Le commit repasse par le PLAT au CONTRÔLEUR
(`event__stuff__set_location` / `edit_place` / `edit_comment` par
windows broadcast → la fenêtre route au domaine et RAFRAÎCHIT : le
déplacement change de section), le lieu ne s'édite QUE sur entreposage
(il SURVIT aux allers-retours, l'infobulle ne le montre qu'entreposé),
le retrait part sur `event__stuff__remove` existant. Nouveaux
événements popup dans la liste edition_popup du contrôleur :
`open_edit_popup` (le contrôleur crée `new CHARACTER.StuffEditPopup(
kind, value )` — les params du plat portent l'identité, JAMAIS inline),
`toggle_edit_location_selector`, `pick_edit_location`,
`commit_edit`, `commit_remove`. RENOMMAGE partagé add/édition
d'une traite (classe par classe) : `stuffs-form-popup*` (body, row,
label, location, place, comment + racine partagée `stuffs-form-popup`),
la popup d'ajout garde sa marque `stuffs-add-popup`, l'édition porte
`stuffs-edit-popup`. Piège : les cellules de la ligne ne sont plus des
enfants directs de l'entrée (la cellule Objet héberge le «?») — les
handlers inline lisent `this.closest('.stuffs-entry')`. (c) NOUVEAU
SCÉNARIO DE FIN `scenario_equipement_complet.js` (EN DERNIER, APRES
scenario_save_complet — demande utilisateur : « me laisser une dizaine
d'objets configurés pour tester ») : ~10 ajouts par GESTES RÉELS
(picker de modèle, emplacements posés, lieu, nom libre par le filtre)
sur la feuille Magicien 10 rechargée SANS RESET, répartition sur les
trois emplacements + consommable x3 qui empile + objet apostrophe + nom
libre, compte attendu CALCULÉ (dédup), encombrement porté croisé
domaine, relecture mémoire, save loggué GSOU — LE RUN SE TERMINE SUR
LA FEUILLE VIVANTE ÉQUIPÉE, l'utilisateur teste à la main.
Validé par run headless complet : 111 OK / 0 ECHEC (run utilisateur a
confirmer).
Round 53 = ÉQUIPEMENT v7, harmonisation des colonnes (retour
utilisateur) : l'entête et les lignes passent à CINQ colonnes fixes —
Objet + «?» en TAILLE FIXE (240px, ellipsis sur le nom), puis
CARACTÉRISTIQUES LABORÉES du type (`STUFF.KINDS[*].inline_fields`
remplace `info_field` : arme = Dégâts/Mains, armure = CA bonus/
Mod. de dex. max., autres = rien — clés scrapées, elles survivent au
re-scrap ; le libellé voyage AVEC la valeur car les kinds se mélangent
dans un emplacement), puis Qté, puis Encomb. (l'ordre demandé place
l'encombrement APRÈS la quantité), puis la roue crantée. Une entrée
hors dataset ne pose PAS de cellule vide : la cellule caractéristiques
n'existe que si un champ du type existe (piège du premier run — la
cellule était construite puis remplie conditionnellement, le test du
nom libre la voyait vide au lieu d'absente). Scénarios réalignés :
entête (Objet + Caractéristiques), Dégâts/Mains libellés de l'épée,
CA bonus de l'armure, absence de cellule sur le nom libre. Colonne
«prix» du scrap NON posée (candidat si l'inventaire gère
l'achat/vente). Validé par run headless complet : 111 OK / 0 ECHEC
(run utilisateur à confirmer).
Round 54 = retour utilisateur : UN POINT PAR LIGNE dans la cellule des
caractéristiques — `.stuffs-col-chars` passe en `flex-direction:
column` (Dégâts puis Mains se lisent empilés, la cellule grandit en
hauteur, la grille centre les autres colonnes). AU PASSAGE, le SKILL
`.vibe/skills/pathfinder-style/SKILL.md` porte maintenant le chantier
CONCEPTION : toute proposition d'affichage part d'une MAQUETTE ASCII
VALIDÉE PAR L'UTILISATEUR avant le code — maquette alignée caractère
par caractère (les pipes tombent à la même colonne sur chaque ligne,
les accents comptent pour un, les glyphes larges genre ⚙ se réservent
à la dernière colonne), lignes réalistes (vrais noms du dataset, cas
équipé/entreposé, quantité, hors dataset), un point par ligne quand
une cellule porte plusieurs valeurs, décisions ouvertes numérotées à
la suite. La maquette préfigure la GRILLE CSS (colonne alignée =
`grid-template-columns` partagé, retour a la ligne = direction de la
cellule). Validé par run headless complet : 111 OK / 0 ECHEC.

Round 55 = décalage résiduel des lignes (HTML de l'utilisateur en
main) : la roue crantée ne portait PAS sa classe de COLONNE
(`stuffs-col-actions`) — sans grid-column explicite, la grille
AUTO-PLACE la cellule dans la première case libre, la colonne
Caractéristiques vide des entrées sans stats : la roue d'un
consommable/autre atterrissait au milieu de la ligne. RÈGLE qui en
découle : dans une grille à colonnes explicites, CHAQUE cellule d'une
ligne porte sa classe de colonne — aucune ne vit au placement
automatique, et le scénario verrouille le cas (l'entrée sans
caractéristiques porte sa roue sur la colonne actions). Validé par run
headless complet : 111 OK / 0 ECHEC.
Round 56 = décalages résiduels (retour utilisateur) : (a) l'entête de
colonnes portait `padding: 2px 0 3px` quand les lignes portent
`3px 2px` — 2 px de décalage horizontal entre TITRES et CELLULES :
l'entête et les lignes partagent la même grille, leurs paddings
horizontaux doivent être IDENTIQUES (l'entête suit `padding: 2px 2px
3px`) ; (b) `.popup-item-stats` (popup objet) passe en
`flex-direction: column` — les stats de l'objet (encombrement, prix,
champs du type) se lisent empilées, une par ligne, comme les
caractéristiques de la fenêtre. Validé par run headless complet :
111 OK / 0 ECHEC.
Round 58 = ÉQUIPEMENT v8, tout est éditable (retour utilisateur) : la
POPUP D'ÉDITION porte la QUANTITÉ et les CARACTÉRISTIQUES en plus de
l'emplacement/lieu/commentaire — (a) la quantité devient une donnée de
TOUTE entrée (`CHARACTER.Stuff.quantity` prend parseInt quel que soit
le trait ; la LIGNE rend son input de quantité sur chaque entrée, le
trait Consommable ne régît plus que l'EMPILAGE au + ; l'encombrement
compte les unités de chaque entrée : `getEntryBulk` multiplie par
quantity, plus de garde consommable) ; (b) les caractéristiques se
SURCHARGENT par entrée : `CHARACTER.Stuff.characteristics` (carte
champ→valeur), `getCharacteristicValue( field )` répond la surcharge
puis la valeur SCRAPÉE — la ligne et la popup d'édition lisent par
l'entrée ; l'édition rend une rangée par `inline_fields` du type
(marké `data-field`), l'input vide RETOMBE sur le scrapé (la carte
REPLACE les surcharges à chaque commit : les clés vides ne vivent
pas), un objet hors dataset gagne ainsi SES stats. Le commit du
`event__stuff__commit_edit` ORDONNE : quantité D'ABORD (domaine seul,
pas de rebuild), puis caractéristiques et emplacement (les DEUX
rafraîchissent la fenêtre depuis l'état frais), puis lieu sur
entreposage et commentaire (titre en place). (c) le CHEVAUCHEMENT des
boutons : `.popup-up-actions` est en absolue à droite du titre
(stylage commun des popups d'édition), trois boutons ne tiennent pas
— les actions de `.stuffs-edit-popup` passent SOUS le titre (`.title`
en flex column). Save : `quantity` et `characteristics` sur chaque
entrée, les vieux fichiers relus sans garde. Scénario stuffs étendu :
quantité sur toute ligne, édition quantité + surcharge Dégâts +
retour au scrapé + round-trip save. PIÈGE du run : l'insertion d'un
bloc .then imbriqué dans la promesse du test 2 a fermé les couches en
désordre → SyntaxError SILENCIEUX du fichier ENTIÈR (aucune fonction
du script n'existe plus, "TEST_stuffsOpenAddPopup is not defined", et
la page charge à moitié) — la réparation compte les couches ouvertes
AVANT d'écrire le bloc. Validé par run headless complet :
111 OK / 0 ECHEC.
Round 59 = retour utilisateur : PLUS D'INPUT DANS LA LISTE — la
quantité s'affiche en LECTURE sur la ligne (`span.stuffs-entry-
quantity` centrée, même stylage que l'encombrement), son édition ne
vit QUE dans la popup de la roue crantée (le champ Quantité du
Round 58). Corollaire : la ligne ne porte AUCUN contrôle d'édition,
seule la roue modifie — la liste reste une vue de lecture, la
configuration vit dans la popup. Scénarios réalignés : la quantité de
la ligne se lit par textContent (jamais un input), l'édition du test 4
passe par la popup (gestes synchrones par le bus, pas de restructure
de promesse — la structure .then compte les couches AVANT, piège du
Round 58). Validé par run headless complet : 111 OK / 0 ECHEC.
Round 60 = run UTILISATEUR (1 ECHEC langues sur sa machine, vert en
headless) : le badge d'onglet du test « choix draconique » se lisait à
DATE FIXE apres le clic de choix — la course data-number (clic →
phase au tick → compteur ligne → compteur fenêtre → badge deboucoule
50 ms par étage) perd sur une vraie machine, l'onglet en arrière-plan
throttling ses timers. CONVERSION par `TEST.waitCounterValue` (règle
Round 49, une décision par run) : le wait du bloc devient
`waitCounterValue( badge, attendu )` — la convergence garantit AUSSI
que les asserts de phase du bloc lisent un état arrivé, SANS
restructurer la promesse (le piège des couches .then du Round 58 se
paie aussi ici : on REMPLACE le wait, on n'imbrique pas). Le headless
a budget temps virtuel ne voit JAMAIS cette course (timers instantanés)
— seul le run utilisateur la révèle. Validé par run headless complet :
111 OK / 0 ECHEC (run utilisateur à reconfirmer).
Round 61 = run utilisateur : quantité et roue crantée RENDUES SUR LA
RANGÉE 2 de leur ligne. RACINE : le placement automatique SPARSE de
la grille marche AU CURSEUR suivant l'ordre du DOM — les cellules
portent `grid-column` explicites mais PAS de `grid-row`, et
l'encombrement (colonne 4) se construisait AVANT la quantité
(colonne 3) : le curseur déjà en colonne 4 ne peut pas revenir en
arrière dans la rangée, la quantité bascule rangée 2 et la roue avec.
RÈGLE qui en découle : dans une grille à colonnes, le DOM suit l'ORDRE
DES COLONNES (une cellule construite en désordre rejette les suivantes
à la ligne suivante) — la quantité se construit AVANT l'encombrement,
la roue reste la dernière cellule. Verrou scénario : l'ordre des
enfants de la ligne asserté (quantité < encombrement < roue en
dernier). Validé par run headless complet : 111 OK / 0 ECHEC.
Round 62 = colonne COMMENTAIRE dans la liste (retour utilisateur) : la
grille passe a SIX pistes (240px / caractéristiques / commentaire /
Qté / Encomb. / roue), la cellule contrôle DOM suit l'ORDRE des
colonnes (la règle Round 61 : commentaire avant quantité, roue en
dernier). Le commentaire quitte le TITRE de l'entrée (plus de signal
redondant — le lieu reste SEUL en infobulle, il n'a pas de colonne) ;
l'événement `event__stuff__edit_comment` met a jour SA cellule en
place (texte + infobulle du texte entier, ellipsé en largeur) — le
refresh du commit de la popup d'édition court AVANT l'arrivée du
commentaire dans le domaine, la cellule suit donc APRÈS l'événement.
Verrous scénario : entête titré (Objet, Caractéristiques, Commentaire),
commentaire lu en COLONNE dans le test armure. Validé par run
headless complet : 111 OK / 0 ECHEC.
Round 63 = le chevauchement boutons/titre de la popup d'édition
SURVIVAIT au correctif du Round 58 (run utilisateur) : l'override
`.stuffs-edit-popup .title .popup-up-actions` (3 classes) PERD contre
la règle de base `.popup .edition-property-popup .title
.popup-up-actions` (4 classes) — et popup.css CHARGE APRÈS les
feuilles de fenêtre (double purge : spécificité ET ordre). Le
`position: static` ne s'appliquait JAMAIS, les boutons restaient en
absolue sur le titre. RÈGLE qui en découle : un override d'une règle de
popup.css porte PLUS de classes que la base (`.popup
.edition-property-popup.stuffs-edit-popup .title .popup-up-actions`
= 5) — l'ordre de chargement ne sauve jamais un sélecteur plus faible.
Validé par run headless complet : 111 OK / 0 ECHEC (contrôle visuel a
l'utilisateur).
Round 64 = catégories d'équipement (demande utilisateur : potion,
parchemin — et les autres vues ensemble). `STUFF.KINDS` passe a SEPT :
Armes, Armures, Boucliers, Potions, Parchemins, Baguettes, Autres
objets. La classification vit dans `STUFFS.getKindKeyOfData` — carte
écrite a la main qui survit au re-scrap : le CHAMP SCRAPÉ gagne (les
fioles portent Dégâts = armes ✓, les boucliers portent Solidité et
QUITTENT les armures via `excluded_fields`), puis les PRÉFIXES de nom
désignent les familles (Potions = Potion/Élixir/Poison/Huile,
`excluded_names` sort l'huile de lampe « Huile (1/2 l) » — une
commodité, pas une potion ; Parchemins ; Baguettes), le reste vit dans
Autres. `getKindOptions` et `getItemInformation` passent par LE
classifieur (plus de logique durcie dans l'un et l'autre). Champ
inline «Niveau» pour les familles sans stats scrapées : la clé se lit
`STUFF.DATA_KEYS[ "Niveau" ] = "level"` (résolue dans
`STUFFS.getFieldValue` — le libellé d'affichage reste Niveau). Les
parchemins COUVRENT TOUS LES SORTS (retour utilisateur : le dataset
n'en scrape que 15) : le NOM LIBRE du filtre pose «Parchemin de boule
de feu» dans la catégorie Parchemins, et la roue crantée lui règle sa
caractéristique Niveau (le rang du sort). Les anneaux/amulettes/
talismans restent dans Autres_objets (arbitrage utilisateur), les
sauvegardes existantes gardent leur ancien kind (pas de migration).
Comptages du dataset : 569 armes, 113 armures, 73 boucliers,
188 potions, 15 parchemins, 72 baguettes, 2279 autres (714
consommables y restent — les scénarios en piquent par le
classifieur). PIÈGE évité : les scénarios cherchaient le consommable
par champ Dégâts/CA — ils passent par `getKindKeyOfData` maintenant.
Nouveau scénario : bouclier (Solidité libell), potion (Niveau
libellé), parchemin au nom libre + rang édité. Validé par run headless
complet : 112 OK / 0 ECHEC.
Round 65 = retours utilisateur : (a) le sélecteur de TYPE de la popup
d'ajout se lit ALPHABÉTIQUEMENT (Armes, Armures, Autres objets,
Baguettes, Boucliers, Parchemins, Potions) — l'ordre vient du TABLEAU
KINDS lui-même et le classifieur TOLÈRE tout ordre grâce a ses cartes
d'exclusion (les armures excluent Solidité) ; (b) l'inventaire porte
une colonne TYPE par GLYPHE : `STUFF.ICONS` (⚔ armes, 🦺 armures, 📦
autres, 🪄 baguettes, 🛡 boucliers, 📜 parchemins, 🧪 potions — glyphes
choisis a la main, même veine que LEVELUP.ICONS), piste 1 de la grille
(huit pistes), l'infobulle du glyphe porte le NOM du type, l'entête ne
porte AUCUNE cellule pour la piste (les classes de colonnes suffisent
a l'alignement). Verrous scénario : options du sélecteur triées,
glyphe en première cellule avec son infobulle. La MAQUETTE du skill
pathfinder-style suit la référence livrée (huit colonnes, glyphe en
première), la règle des glyphes larges s'étend aux colonnes
d'extrémité. Validé par run headless complet : 112 OK / 0 ECHEC.
Round 66 = retour utilisateur : LES BOUCLIERS VIVENT AVEC LES ARMURES.
Le kind `shield` part du tableau KINDS (six catégories : Armes,
Armures, Autres objets, Baguettes, Parchemins, Potions), les armures
reprennent le CA bonus SANS exclusion et gagnent le champ
`Solidité` en inline — il ne rend QUE sur les boucliers (présent-si-
existant), les armures n'en portent pas ; les detail_fields des popup
unissent les deux (Base, CA, Mod dex, Solidité, pénalités, Force,
Catégorie, Groupe). MÉCANISME RETRAIT : `STUFF.OBSOLETE_KINDS = {
"shield": "armor" }` remapped au CONSTRUCTEUR de CHARACTER.Stuff —
les saves du Round 64 qui portent kind "shield" re-lisent en armures
(une carte écrite a la main par kind retiré, elle survit aux
re-scrap et aux futurs remaniements — le glyphe 🛡 part des ICONS).
Scénario réaligné : le bouclier se pique des OPTIONS DES ARMURES (le
premier porteur de Solidité), posé par le type Armures, sa ligne
porte CA bonus et Solidité. Validé par run headless complet :
112 OK / 0 ECHEC.
Round 67 = retour utilisateur : la catégorie des armures se lit
« Armures/Boucliers » et son glyphe est le BOUCLIER 🛡 (le gilet 🦺
ne se reconnaissait pas — la catégorie fusionnée parle par son
bouclier, son icône suit). Validé par run headless complet :
112 OK / 0 ECHEC.
Round 57 = alignement titres/cellules + fin du sous-total entreposé
(retour utilisateur) : (a) les colonnes ÉTROITES (Qté, Encomb.)
partagent le CENTRAGE entre l'entête et les cellules (`.stuffs-col-*`
porte le `text-align: center`, l'input de quantité et la valeur
d'encombrement suivent) — titre et valeur tombent au même axe dans la
même piste, plus de décalage perçu ; (b) la section Entreposé
n'affiche PLUS sa somme d'encombrement (demande utilisateur : le
sous-total du Round 50 partait, seul le total PORTÉ de la barre reste,
`.stuffs-section-title-bulk` supprimé avec son rendu et ses asserts).
Validé par run headless complet : 111 OK / 0 ECHEC.
Round 68 = onglet BIBLIOTHÈQUE (demande utilisateur : regrouper toutes les
informations de consultation des ascendances/classes/dons/sorts/équipement
dans l'ancien onglet Dons, en gardant l'affichage existant). Décisions
actées après maquettes validées : (1) nom « Bibliothèque » ; (2) la CASE
À COCHER des dons DISPARAÎT (consultation pure — la sélection des dons
vit déjà dans Progression, `event__gift__toggle` et son case du
personnage partent, le domaine `CHARACTER.Gifts` RESTE tel quel : la clé de
save `gifts` ne bouge pas) ; (3) sujets v1 = Dons, Sorts, Équipement
(l'onglet Sorts — répertoire du personnage + emplacements — reste un
onglet séparé, ce n'est pas la même chose ; les archétypes = phase 2 ;
ascendances/héritages/historiques à suivre) ; (4) sujet par défaut à
l'ouverture = Dons. Design : une RANGÉE DE PUCE DE SUJET en tête (même
langage visuel que les chips de type existantes, sujet actif peint +
gras, un point par ligne dans les maquettes), les chips de type et la
recherche suivent DESSOUS (par sujet), la même anatomie de carte pour
tous les sujets (nom, « ? », tags, ligne clé si le dataset la porte,
prérequis pour les dons, description clampée à 4 lignes — le scraped
porte du HTML, la carte affiche du texte plein, la popup garde le
balisage). Domaine : `sheet/js/library/constant-library.js` (namespace
`LIBRARY`, ajouté au `.jshintrc`) — `SUBJECTS` (ordre des puces +
placeholder de recherche), `FEAT_TYPES` (les chips de l'ancien Dons),
`FEAT_POPUP_CATEGORIES` (catégorie de popup par type de don — les dons
GÉNÉRAUX n'en ont pas : pas de « ? » sur leurs cartes, verrouillé par
scénario). `CHARACTER.LibraryWindow` (`library_window.js`, git mv depuis
`gifts_window.js`, NAME `library_sheet`, label « Bibliothèque ») : état
de vue sur la fenêtre (`current_subject` / `filter_type` /
`search_text`), `computeContent` vide et reconstruit sujets + filtres +
liste au clic d'onglet ET au changement de sujet (le changement RESET
chip et recherche — vue vierge par sujet, verrouillé par scénario) ;
sujet Dons = les mêmes sources qu'avant (généraux, classe/ascendance
gated par possession, compétences, archétype du personnage), sections
Niveau ; sujet Sorts = `SPELLS.getSpellListData()` (770 sorts), sections
par nature (Tours de magie, Rang N, Focalisés, Rituels), popup spell
existante par « ? » ; sujet Équipement = `STUFFS` (3309 entrées) à
plat, chips Tous + `STUFF.KINDS`, ligne clé Niveau/Encomb./Prix
présent-si-existant, popup item existante (cache `stuff__<nom>`). Les
paramètres de popup ne s'embarquent JAMAIS inline (apostrophes) : le
« ? » de chaque carte lit `data-value`/`data-category` de lui-même. CSS
renommé D'UNE TRAITE : `sheet_gifts.css` → `sheet_library.css`, classes
`gifts-*`/`gift-*` → `library-*` (la palette brute du fichier Dons est
conservée : c'est l'affichage que l'utilisateur aime, le futur pass
variables viendra avec le renommage kebab-case du reste) ; ajout
`.library-subjects`/`.library-subject-btn` (+active),
`.library-card-key-line`, `.library-card-info`, tags `--spell`/`--stuff`,
suppression `.gift-checkbox`/`.gift-row--selected`. Scénario
`scenario_bibliotheque.js` (5 tests, suite indépendante de
consultation, position : après `scenario_emplacements`, avant
`scenario_save_fichier`) : sujets rendus + défaut Dons + AUCUNE case à
cocher, dons chips + recherche + don général sans « ? », sorts sections
par nature + popup par « ? » refermée PAR LE FOND de l'overlay
(règle Round 45), équipement chips + recherche aux accents réels +
ligne clé + popup item, changement de sujet = vue réinitialisée.
`scenario_onglets` réaligné (libellé « Bibliothèque », ordre, classes
`.library-*`). PIÈGE de l'agent : le process manager du run headless
attache un PTY — Edge détecte un terminal sur stdout, entre en mode
terminal et ne dump JAMAIS avec `--dump-dom` (le budget de temps
virtuel s'écoule sans fin) ; le run passe par un `Start-Process`
PowerShell SANS PTY avec redirections fichier, et les redirections
s'écrivent en chemins Windows complets (`C:\...`), pas en chemin
git-bash (`/c/...` devenait un nom de fichier cabossé). Validé par run
headless complet : 124 OK / 0 ECHEC (run utilisateur à confirmer).
Round 69 = bibliothèque, deux retours utilisateur : (a) FILTRE PAR
TRAIT — la rangée de filtres de chaque sujet porte UN SECOND CHAMP DE
RECHERCHE (`.library-search-trait`, même gabarit visuel que la
recherche par nom, placeholder `LIBRARY.TRAIT_SEARCH_PLACEHOLDER`)
qui matche les TRAITS portés par les cartes du sujet actif (n'importe
lequel des traits contient le texte, insensible à la casse, COMBINÉ en
ET avec le nom et la chip de type) ; l'état vit sur la fenêtre
(`trait_search_text`, réinitialisé au changement de sujet comme le
nom — vue vierge par sujet, verrouillé par scénario) ; PIÈGE perf : les
traits d'un sort viennent de l'accesseur par nom (balayage complet de
la carte du dataset) — le filtre sort ne les requiert QUE quand le
champ trait est posé, jamais à vide. (b) SUPPRESSION DU « ? » — comme
toute la carte vit INLINE (description clampée à 4 lignes), le « ? »
de popup doublonnait l'information : il part de TOUTES les cartes
(`_buildCard` ne rend plus d'info, `LIBRARY.FEAT_POPUP_CATEGORIES`
supprimé faute de consommateur, `.library-card-info` part du CSS) — les
popups d'information restent accessibles depuis leurs fenêtres
d'origine (Progression pour les dons, répertoire Sorts, Équipement,
zones de jets). Scénario réaligné : le « ? » s'asserte ABSENT, la
recherche de trait se teste sur les trois sujets (dons chip Généraux +
« général », sort par le premier trait du premier sort du dataset —
comptes CALCULÉS du dataset, jamais figés, équipement par le trait
`STUFF.CONSUMABLE_TRAIT`), le test 5 vérifie les DEUX champs vides
après un changement de sujet. Validé par run headless complet :
124 OK / 0 ECHEC (run utilisateur à confirmer).
Round 70 = bibliothèque, FILTRES CUMULATIFS (demande utilisateur :
« je filtre sur le trait homme-rat, j'appuie sur Entrée, le filtre
s'affiche en haut en tag, j'en rajoute un autre qui sera un ET, pareil
pour le nom du don »). Les deux zones (nom, trait) COMMITENT PAR
ENTRÉE UNIQUEMENT (fin du filtrage à la frappe — un geste = un tag) :
la valeur brute (trimmée, dédupliquée) devient UN TAG dans la RANGÉE
DES FILTRES POSÉS (`.library-active-filters`, entre la barre de
filtres et la liste, `.library-active-filters:empty { display: none }`
— la rangée n'existe dans le flux que si elle porte des tags ; label
« Filtres : » discret, tags nom `--name` / traits `--trait` en couleurs
deux tons de la palette, chaque tag porte son « × » qui retire LUI
SEUL le filtre). Les tags se combinent en ET CROISÉ AVEC LA CHIP de
type : les filtres nom s'appliquent TOUS (le nom doit contenir chaque
texte — un multi-mots), les filtres trait s'appliquent TOUS (chacun
doit être porté par AU MOINS UN trait de la carte) ;
`name_filters` / `trait_filters` vivent sur la fenêtre (tableaux,
réinitialisés au changement de sujet, vue vierge par sujet — verrouillé
par scénario). PIÈGE perf reconduit du Round 69 : les traits d'un sort
ne se lisent du dataset QUE quand des filtres de trait sont posés
(l'accesseur balaye toute la carte). Scénario réaligné : le commit se
geste par `dispatchEvent( new KeyboardEvent( "keydown",
{ "key": "Enter" } ) )` (même events que le clavier réel), les comptes
attendus restent CALCULÉS du dataset, le × restaure le compte d'avant
(dons : trait général + nom animal + nom zzzzz qui vide la liste +
retrait), le changement de sujet asserte la rangée VIDE. Validé par
run headless complet : 124 OK / 0 ECHEC (run utilisateur à confirmer).
Round 71 = bibliothèque, deux retours utilisateur : (a) l'ENTRÉE ne
marche pas sur MOBILE/TABLETTE (les claviers virtuels n'émettent pas
toujours le keydown Enter) — un BOUTON « + » vit à côté de la zone de
filtre (`.library-search-commit`, title « Poser le filtre », même
stylage que les chips) et commite AUSSI la valeur de la zone ; les deux
gestes (Entrée, +) partagent la méthode privée `_addSearchFilter` —
toujours pas de filtrage à la frappe, un geste = un tag.
(b) UNE SEULE ZONE DE FILTRE (retour utilisateur : le filtre ne
cherchait pas le CONTENU du texte, et « ne faire qu'un filtre (titre,
trait, contenu) serait cool ») : les deux zones (nom, trait) et
`LIBRARY.TRAIT_SEARCH_PLACEHOLDER` DISPARAISSENT (supprimés faute de
consommateur), un tag posé matche le NOM, un TRAIT OU le TEXTE de la
carte (sémantique OU par filtre, ET entre tags, chips de type toujours
croisées) ; le texte cherché des dons = la description COMPLÈTE aplatie
(les tableaux scrapés mélangent chaînes et tableaux,
`_formatFeatSearchText`), celle des sorts et objets = le scraped
strippé par `_formatScrapedDescription` — la carte n'AFFICHE que le
premier paragraphe clampé, mais un mot des paragraphes cachés fait
toujours passer la carte (recherche de contenu, pas recherche de
l'affiché). `search_filters` remplace les deux tableaux par sujet,
tags en TON UNIQUE (`--name`/`--trait` partent du CSS). Piège perf
reconduit : les traits d'un sort ne se lisent du dataset QUE si des
tags sont posés. Scénario réaligné : une seule zone (compte
d'inputs), le bouton « + » testé par le GESTE RÉEL du tactile, un tag
posé par TRAIT (Entrée), par NOM (+) et par CONTENU (Entrée, « rongeur
» cité par la seule description de Animal de compagnie — comptes
CALCULÉS par le matcher reconstruit côté test). Validé par run headless
complet : 124 OK / 0 ECHEC (run utilisateur à confirmer).
Suite Round 71 (retour utilisateur : « dans le don Abajoues j'ai le
trait “ Ascendance ” et je ne peux pas le filtrer ») : le « Ascendance
» de la carte est le TAG DE TYPE (la source du don), PAS un trait
scrapé — les traits d'Abajoues ne portent que « Homme-rat », et la zone
de filtre ne cherchait que nom/traits/contenu. CORRECTIF : le TAG DE
TYPE devient cherchable — le matcher gagne un 4e champ `type_text`
(libellés de `LIBRARY.FEAT_TYPE_LABELS` écrite à la main — les chips
parlent au pluriel « Généraux », la carte au singulier « Général » ;
le nom d'archétype du don d'archétype voyage avec, le type d'un sort =
`SPELLS.getFullTypeLabel`, le type d'un objet = le label du kind du
classifieur via `_getStuffTypeText`). Le test verrouille le parcours
réel de l'utilisateur : chip Ascendance + tag « ascendance » = TOUS
les dons d'ascendance gated par la race posée (compte CALCULÉ du
dataset + race courante, la suite court après scenario_emplacements qui
laisse un Elfe), le tag `--race` visible sur la carte — RÈGLE : un tag
AFFICHÉ sur une carte doit être cherchable par le filtre texte, un
affichage qui ne se filtre pas est un bug. Validé par run headless
complet : 125 OK / 0 ECHEC (run utilisateur à confirmer).
Round 72 = même règle, la LIGNE CLÉ (retour utilisateur : « le filtre par
le prix n'a pas l'air de marcher pour les équipements ») : le prix vit
sur la ligne clé « Niveau X — Encomb. Y — Prix Z » qui n'était PAS dans
les champs cherchés — la carte affichait une donnée infiltrable, encore
le bug de la règle du Round 71. CORRECTIF : le matcher gagne un 5e champ
`key_line_text` ; le FORMAT de la ligne clé des objets quitte la
fenêtre pour le DOMAINE — `STUFFS.getKeyLineText( entry )`
(`constant-stuff.js`, l'accesseur garde le format « Niveau/Encomb./Prix
» joints par « — », chaîne vide sinon) — la carte, le matcher et les
TESTS lisent le MÊME format (le formateur local
`_formatStuffKeyLine` de la fenêtre part) ; la ligne clé des sorts (le
« Coût ◆◆ » de la carte) passe au matcher dans le même mouvement, les
dons n'en portent pas (chaîne vide). Le test verrouille le parcours
utilisateur : tag « PRICE de Épée longue » (compte CALCULÉ du dataset
par le matcher reconstruit à 5 champs, tag visible puis compte
exact) ; par ricochet « encomb » et « niveau » filtrent aussi (même
ligne clé). Validé par run headless complet : 125 OK / 0 ECHEC (run
utilisateur à confirmer).

Round 73 = bibliothèque, LE BOUTON « + » des cartes (demande utilisateur :
« rajouter un bouton plus pour le rajouter aux sorts et aux équipements.
Pour les dons je ne sais pas comment faire, une idée ?? »). Les cartes de
sort et d'équipement portent un bouton `library-card-add` en fin de
top-line qui AJOUTE la carte AU DOMAINE du personnage par LE PLAT DES
POPUPS D'AJOUT existant — `event__spell__add` /
`event__stuff__add` (déjà routés contrôleur → personnage → domaine →
broadcast aux fenêtres, scénarios sorts/equipement compris) : ZÉRO
nouveau événement, la fenêtre Bibliothèque n'écrit RIEN elle-même, les
règles de possession restent au domaine (`addSpell` no-op sur un sort
possédé — un répertoire est un ensemble ; `addStuff` empile les
consommables, no-op sur le reste). Les params voyagent en DATA
ATTRIBUTES du bouton, jamais inline (les noms portent des
apostrophes) : `data-value` le nom, `data-kind` le type DU
CLASSIFIEUR, `data-location` le `STUFF.DEFAULT_LOCATION` ; les deux
fenêtres de destination (Sorts, Équipement) se rafraîchissent par le
broadcast du personnage SEUL — la fenêtre Bibliothèque ne re-rend
pas ses cartes au clic. Les dons restent en consultation pure : la
proposition de possession (domaine `CHARACTER.Gifts` existant,
marqueur doré, puce « Mes dons ») attend la décision utilisateur
(règle maquette-avant-code), `card_data["add"]` absent = pas de
bouton. PIÈGE de scénario : les suites sorts et emplacements courent
AVANT la bibliothèque — le test pique la PREMIÈRE carte NON POSSÉÉE
(`TEST_libraryFirstUnownedAddButton` : la carte possédée masquerait le
geste d'ajout, son no-op est le comportement asserté par ailleurs) ;
pour l'équipement le pick saute AUSSI les consommables (le second clic
doit rester un no-op, pas un empilage). Verrous : bouton ABSENT des
cartes de dons (test 1), ajout au répertoire + rendu de la fenêtre
Sorts + non-duplication (test 4), ajout à l'inventaire + type du
classifieur + emplacement par défaut + rendu de la fenêtre Équipement
+ non-duplication (test 5) ; le save_fichier suivant RESETe — les
ajouts du test ne polluent pas la suite.

Round 74 = bibliothèque, deux retours utilisateur sur le « + » des
cartes : (a) LE STYLE — le bouton `library-card-add` ne portait pas la
recette des « + » des fenêtres Sorts/Équipement (dégradé hex hors
palette) : il prend LEUR recette exacte (`--g-gold`, bord
`--c-gold-light`, `--r-sm`, texte `--c-text-dark`, hover
`--c-gold-light`), mêmes proportions (`min-height: 22px`, `padding:
0 10px`), plus `margin-left: auto` pour le pousser en fin de
top-line ; (b) LA BASCULE — le « + » ne laisse PAS l'utilisateur sur
la Bibliothèque : l'onglet de destination prend la main après
l'ajout (`CHARACTER.LibraryWindow.goToSheet( window_name )`,
statique : le MÊME tour qu'un clic d'onglet réel — recherche de
l'onglet `.gs-window-element-V2[data-name=...]`, `window_name` +
`window_group_name` en params, `MANAGER.EventManagerV2.
clickOnWindowNavigation` — donc le plat
`click_on__window_navigation__done` part AUSSI, la fenêtre activée
recalcule son contenu par la voie ordinaire). Le `goToSheet` vit en
chaîne dans le onclick inline APRÈS le plat d'ajout : l'ajout
traverse le bus, la bascule est un geste UI pur (le nom de fenêtre
embarqué est une CONSTANTE de code, pas une donnée — la règle
« jamais de valeur inline » vise les valeurs à apostrophes). PIÈGE
évité : `setActiveWindow` est synchrone dans le lib — les asserts du
scénario lisent `windows.getActiveWindow().getName()` immédiatement
après le clic, la visibilité des panneaux (phase au tick suivant)
n'y change rien.

Round 75 = LES BOUTONS DES POPUPS D'ÉDITION PASSENT EN BAS (retour
utilisateur sur la popup « Modifier un sort » dont les trois boutons
chevauchaient le titre — décision utilisateur : « pour TOUTES ces
popups, les boutons en bas de la popup »). La structure DOM CHANGE :
la rangée `.popup-up-actions` quitte le `.title` et devient le
DERNIER ENFANT du conteneur `.edition-property-popup` (l'ordre
d'appel des `SERVICE.DOM.addElementTo` EST l'ordre du DOM — les
actions se construisent APRÈS le corps), dans les CINQ générateurs :
`popup.js` (`POPUP.PropertyEdition` — les popups d'édition de
champs : ascendance, classe, archétype, emplacements...), `spell-add-
popup.js`, `spell-edit-popup.js`, `stuff-add-popup.js`,
`stuff-edit-popup.js`. La règle de base VIT DANS popup.css (le
conteneur `.edition-property-popup` est déjà une colonne flex) :
`.popup .edition-property-popup .popup-up-actions { display: flex;
justify-content: center; margin-top: var(--s-lg) }` — les sélecteurs
des boutons (.button, .popup-up-valid, .popup-up-cancel, :hover)
perdent `.title ` au passage. L'override du Round 63 (stuffs edit :
`.title` en flex column + actions static SOUS le titre) est
SUPPRIMÉ avec son commentaire — la base résout toutes les popups,
plus de guerre de spécificité (popup.css charge après les feuilles de
fenêtre, mais la base n'a plus de `position: absolute` à battre).
Les boutons « Retirer » gardent leurs stylages scopés
(`.spells-edit-popup-remove-button`, `.stuffs-edit-popup-remove-
button` — ils héritent du socle .button par `.popup-up-actions
.button`). Verrous scénario : la rangée DERNIER ENFANT du conteneur,
plus rien dans `.title` (scenario_sorts + scenario_stuffs, tests
roue crantée) ; les requêtes de boutons par classe des autres
scénarios survivaient déjà (ascendance, classe, archétype,
emplacements).

Round 76 = INCIDENT RUN HEADLESS (retour utilisateur : « a chaque
fois que tu modifie le code, le navigateur entier se ferme ») : le
run de validation headless tuait TOUS les processus Edge de la
machine par `taskkill /IM msedge.exe /F` après le dump — la session
de navigation de l'utilisateur (localhost:63342) était une victime
collatérale, fermeture complète du navigateur a chaque run. La
procédure devient UN OUTIL DURABLE : `sheet/tools/
run_headless_tests.ps1` — (a) Edge lance avec un PROFIL DÉDIÉ
`--user-data-dir=.tests_edge_profile` (le run ne délègue JAMAIS à
la session de l'utilisateur, ni ne la touche) ; (b) le kill vise
UNIQUEMENT les processus dont la ligne de commande porte CE profil
(le nom d'image est INTERDIT : le filtre matche les `msedge.exe`/
`cmd.exe` porteurs du chemin du profil — une requête de diagnostic
contenant le chemin se matche ELLE-MÊME, d'où le filtre de nom en
plus) ; (c) trois pièges PS découverts au montage : `Start-Process
-RedirectStandardOutput` BLOQUE jusqu'a la sortie du fils (et Edge
headless ne sort JAMAIS seul après son `--dump-dom` — le lancement
passe par `cmd /c start "" /b ... > dump 2> err` : cmd rend la main
immédiatement, les poignées du dump appartiennent a l'arbre Edge) ;
la lecture du dump PENDANT l'écriture exige un `FileStream` en
partage ReadWrite (un `OpenRead` exclusif crashe sur le verrou du
rédacteur) ; le `taskkill` des enfants déjà morts (le `/T` du
parent les a pris) écrit sur stderr et `$ErrorActionPreference =
"Stop"` avorte le script sur NativeCommandError — le kill passe
par `cmd /c "taskkill ... > nul 2>&1"`. Le kill d'une arbre
RÉSIDUELLE d'un run précédent court EN TÊTE du script (elle tient
le dump ouvert, le `Remove-Item` cracherait). Usage :
`powershell -NoProfile -ExecutionPolicy Bypass -File
sheet/tools/run_headless_tests.ps1` → lance, attend la fin du dump
(`</html>` en queue de fichier), tue SON arbre, imprime
`REPORT: <titre>` (dernier run : 125 OK / 0 ECHECS). Artefacts
ignorés par le nouveau `.gitignore` : `.tests_dom_dump.html`,
`.tests_dom_err.txt`, `.tests_edge_profile/` (le profil survit
entre les runs, démarrage plus rapide).

Round 77 = FIN DE L'ONGLET NIVEAU, LE CALCUL PV DEMENAGE (demande
utilisateur : « je pense que l'onglet niveau ne sert plus à rien. Par
contre j'aimerai ne pas perdre le calcul des points de vie. À mettre
dans l'onglet Progression », décision 1 de la maquette : « ne mettre
QUE LA POPUP quand on clique sur le total de pv », décision 2 :
niveaux désactivés ABSENTS du détail, décision 4 : la table
« Compéténce » du vieux mécanisme d'origine part avec l'onglet — les
DONNÉES restent dans le save du domaine). La FENÊTRE
`CHARACTER.LevelWindow` (`level_window.js` + `sheet_level.css`,
supprimés) et son GATING classe disparaissent (les appels
`setVisibilityWindowState(..., LevelWindow.NAME)` de character.js et
character_windows.js partent — Progression reste gated RACE, Round 39)
; la navigation passe à 7 fenêtres (Général, Équipement,
Caractéristiques, Bibliothèque, Sorts, Ajustements, Progression). Le
CALCUL ne bouge pas : `computeTotalLife` vit sur le personnage
(domaine), il alimente `CHARACTER.Health` (max PV du Général). La
PIÈCE RÉCUPÉRÉE : le total PV s'affiche OÙ l'utilisateur le clique —
(1) une ligne `Points de vie : N` en tête de la Progression
(`level-up-life-total`, ne se rend que si l'historique de niveaux est
non vide) qui SUIVRA les rebuilds, (2) la zone PV du Général
(`hp-display`, cursor pointer) ; « cf 1) » de l'utilisateur : les DEUX
clics ouvrent la MÊME POPUP `event__show_information__health` (liste
POPUPS du contrôleur Main), catégorie `health` reconstruite à chaque
ouverture (le patron des spell_slots : total + une ligne par source,
données par `CHARACTER.Health.getInformationData( character_object )`
— le mod CON par niveau actif côté classe « Niveau N — Classe », les
PV de départ de l'ascendance UNE fois, niveaux désactivés absents ;
uuid `character__health`). Colonnes mortes de l'ancienne table non
migrées : « Total » (répétait Classe + Char), « Bonus suppl. »
(`lvl.bonus` n'existe pas sur l'entrée — toujours vide), « Actif »
(l'interrupteur vit sur les blocs Progression). Domaines INTACTS :
`level/level.js` (Level + detectType + LEVELS.KEYWORDS) et
`levelup/4-level-history-skills.js` restent (le save `skills` des
vieux fichiers survit). SCÉNARIOS réalignés : onglets 7 + ordre sans
Niveau + test « Niveau = disabled » supprimé ; classe : le test
« onglet Niveau re-active » devient la ligne PV + popup ( RUNNING +
fermeture par uuid) ; niveaux/niveaux_multiple : les relectures de
la life-table remplacées par la POPUP (sources actives seulement,
classe d'origine citée, total croisé au domaine, popup refermée par
l'uuid à chaque test — règle Round 45) et la désactivation verrouille
l'ABSENCE du niveau désactivé du détail ; reset : l'entrée Niveau de
la liste part ; multiclasse : docstring. PIÈGE d'édition (Round 77) :
un edit sur character.js a AVALÉ le label
`case "event__level_up__remove_level":` en supprimant la ligne de
visibilité — le body du case devenait du code mort après le `break`
précédent : après un edit de suppression SANS relecture locale, on
vérifie les `case` voisins. PIÈGE de scénario (trouvé au premier
run : 22 ECHECS) : refermer une popup par `MANAGER.EventManagerV2
.doActionAfter( { stopPropagation... }, 'event__popup__close', ... )`
avec un événement FABRIQUÉ ne route PAS — le close ne s'applique
jamais, la popup reste RUNNING et TOUTES les suites suivantes qui
lisent le premier `.popup-overlay[data-current-phase='RUNNING']`
tombent dessus (« obtenu : Points de vie » partout) ; le patron
établi est `CONTROLLER.Main.doActionAfter( "event__popup__close",
{ "param__popup__uuid": ... } )`. COROLLAIRE : les popups
RECONSTRUITES (pattern spell_slots — removeContent + re-open)
laissent leurs CLONES DOM cachés derrière elles, tous porteurs du
même uuid — une requête par uuid attrape le PLUS ANCIEN, il faut la
scoper `[data-current-phase='RUNNING']`. Validé par run headless via
l'outil du Round 76 : 124 OK / 0 ECHEC (124).

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

- Jamais de commit ni de push par l'agent : la gestion des commits et des
  pushes (`git commit`, `git push`, remotes) appartient à l'utilisateur —
  l'agent livre du code modifié dans la copie de travail, rien d'autre.
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
