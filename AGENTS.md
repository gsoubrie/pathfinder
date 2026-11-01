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
  rounds de relecture (référence : `3-level-up-skill-class.js`) : un seul
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
- Le renommage des clés françaises déjà en place (`save__vigueur`,
  `save__reflexes`, `save__volonte`, `skill__acrobaties`,
  `maitrises_initiales`, `capacity_by_level`...) est un chantier à part : à
  faire d'une traite, clé par clé, données + code + tests, jamais au fil de
  l'eau.

## Chantier en cours : passage de niveau, maîtrises, zone jets/compétences (non commité)

### Domaine levelup (`sheet/js/levelup/`)

Le domaine porte TOUT le passage de niveau (fusions Rounds 5-7) : la source
de vérité (`1-levels-history.js` + `2-level-history.js` : `LevelsHistory` + `LevelHistory`, l'entrée
possède `enabled` ET ses lignes de capacités — la validation vit sur la
phase de la ligne, Round 10), le vieux
mécanisme de choix par origine (`4-level-history-skills.js`, à unifier avec les
lignes un jour), et le warning global de la fenêtre.

- `CHARACTER.LevelUpSkillClass` (`3-level-up-skill-class.js`) — un objet par
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
  toggle : le DOM suit la phase en place. Construction par `updateData` +\n  `setData` par clé (`\"is_active\"` → `setIsActive`, consommé à la volée).
  API : `getUUID`, `setUUID`, `getSlotKey`, `setIsActive`, `isActive`,
  `getValidatedValue` (ce que l'entrée sauvegarde : la phase pour une ligne
  simple), `getMasteriesUpgrades`, `getSourceLabel`.
- `CHARACTER.LevelUpSkillChoice` (`3-level-up-skill-choice.js`) — la ligne
  des capacités ouvrant un choix (Round 11) : hérite de `LevelUpSkillClass`,
  même uuid, même phase, mais la valeur choisie dans le sélecteur EST la
  validation — `setSelectedValue( to_set )` dérive la phase (`SELECTED`
  quand une valeur est posée, retour à `RUNNING` sur l'option vide), le
  sélecteur `.level-up-row-select` (option vide + entrées de
  `CLASSES.CHOICES`, valeur = nom de l'entrée) remplace l'interrupteur via
  `_computeHtmlValidation`, et `getValidatedValue()` retourne l'entrée
  choisie (le save `validated_skills` vaut donc le nom du choix pour ces
  lignes). Routage : `event__level_up__select_choice`
  (`param__level_up_skill__uuid` + `param__choice_value`), même plat que
  `toggle_skill` (fenêtre → personnage → historique → entrée → ligne).
  Construction : l'entrée choisit la classe par ligne dans `buildSkills`
  (`CLASSES.getChoices( class_name, ability_key )`), la valeur sauvegardée
  arrive par `"selected_value"` (staging du load).
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
  CHAQUE ligne AVANT que le personnage retire l'entrée (pas de clé fantôme).
- `CHARACTER.LevelsHistory` (`1-levels-history.js`, conteneur) — diffuse les
  événements aux entrées (le parent `OBJECT.InterfaceContainer` broadcast,
  son `doActionAfter` ne les avalait pas avant le Round 6) et porte
  `buildSkills()` : construit les lignes de toute entrée qui en manque —
  le chargement (`case levels_history` du personnage, juste après
  `updateData`), la prise de niveau et l'ajout de classe par popup
  (`event__form__element_changed` → `addClassFromEdition`) partagent le
  MÊME chemin idempotent. Plus de `buildLevel` ni de `removeLevel`.
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
  `setLinesCountersParent( window )` sur chaque entrée dans `_buildContent`
  de la fenêtre, rebranchée à chaque rendu pour couvrir les lignes
  construites depuis. Plus aucun `setCounterValue` manuel côté fenêtre.
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
  `CHARACTER.Masteries.getSaveModifier( { slot, characteristic } )`.
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
  (`save__vigueur`, `attack__armes_simples`, `spell_attack`, `skill__<nom>`...).
- `MASTERY.SAVES` — les 4 lignes de la zone jets : `perception` (libellé
  "Perception / Initiative", SAG) puis les 3 sauvegardes, chacune avec sa
  caractéristique. `MASTERY.getSkillSlot( label )` → `"skill__" + getAbilityKey`.
- `CHARACTER.Masteries` (`masteries.js`) — sur le personnage, **état dérivé non
  sauvegardé**, calculé à la demande. `getSourcesData()` = contributions du
  bloc `mastery` initial de chaque classe posée (source `"<classe> — maîtrises
  initiales"`) + upgrades des capacités **validées** du passage de niveau
  (source `"<capacité> (niveau N)"`). `getDataBySlot()` garde par slot les
  sources qui portent le rang final : la popup maîtrises les affiche sous
  chaque ligne (`.class-mastery-sources`).
- `getSaveModifier( { slot, characteristic } )` — jet complet PF2 utilisé par
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

- `SERVICE.CLASS.addPrototype` ne copie que les méthodes PROPRES du prototype
  parent, et seulement si l'enfant ne les a pas déjà. En pratique : **tout enfant
  de conteneur doit définir son propre `getUUID`** (cf. `Characteristics`,
  `LevelsHistory`, `LevelsUpSkills`, `LevelUpSkills`, `LevelUpSkillsClass`,
  `LevelUpSkillClass`).
- Les compteurs poussent vers les parents sous leur uuid : un enfant disparu
  laisse une clé fantôme dans le mapping du parent → reset du parent quand les
  enfants sont reconstruits.
- `detectType` renvoie des `*_skill` / `general_skill` etc., JAMAIS de
  `*_feat` : `LEVELUP.CHOICE_TYPES` (general_feat, class_feat...) ne matche
  donc rien aujourd'hui — le sélecteur générique de dons n'est PAS actif
  (voir "À faire").
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

### État au moment de la pause

- Tout le chantier est dans le working tree, **non commis** : domaines `levelup`
  + `mastery`, zone jets/compétences du Général (grille 7 colonnes + CSS
  `sheet_general.css`), `constant_skill_actions.js` (scrap grimoire-vf),
  popups (`SkillActionsPopupRenderer`, fermeture au clic hors zone),
  `character.js`, `popups.js`, `popup.js`, `main-controller.js`, fenêtres.
- Modèle : chaque capacité du passage de niveau porte un interrupteur on/off
  sans texte ; seules les capacités validées alimentent les calculs. Le Général
  affiche Perception/Initiative + 3 sauvegardes + 17 compétences avec jets
  complets, actions de compétence au clic (utilisables/verrouillées selon le
  rang).
- Valeurs SANS "+" (le moins seul au besoin), pas de gras ni majuscules dans
  la zone (règles ci-dessus).
- Syntaxe validée par Node sur tous les fichiers touchés ; le run complet
  `tests.html` (5 scénarios de la chaîne) **attend le rapport de
  l'utilisateur** — dernier run partiel : levelup OK, sauvegardes/compétences
  corrigés côté scénario (libellés, initiales), actions et fermeture jamais
  encore runnés.
- `constant_class.js` est un fichier de données scrapées : ne pas l'éditer pour
  corriger des incohérences — passer par les cartes écrites à la main
  (`ABILITY_ALIASES`, `MASTERY_UPGRADES`) qui survivent au re-scrap. Idem
  `constant_skill_actions.js` : re-scrap, jamais d'édition manuelle.

## À faire (dans l'ordre logique)

1. Valider le rapport `tests.html` complet (chaîne de 5 scénarios ci-dessus),
   corriger si rouge.
2. Aligner `LEVELUP.CHOICE_TYPES` (et donc les slot keys des lignes `*_feat`)
   sur ce que `detectType` renvoie réellement — les lignes simples se valident
   par interrupteur, les capacités ouvrant un choix ont leur sélecteur
   (`LevelUpSkillChoice`, Round 11) ; restent à écrire les entrées de
   `CLASSES.CHOICES` pour les autres capacités à choix.
3. Choix de compétences (INT + choix par divinité/lignage/style) : les lignes
   "compétences supplémentaires" des blocs mastery + dons/améliorations de
   compétence. Cela débloquera aussi Moine "voie vers la perfection", Guerrier
   "maîtrise martiale", Prêtre doctrines (choix → upgrade de maîtrise).
4. Sources maîtrises supplémentaires : race/héritage, dons, objets magiques —
   chaque source porte ses contributions (`getMasteriesData()`), le conteneur
   personnage agrège.
5. Écriture des fichiers de save : `CONTROLLER.Character.save()` est un stub
   (seul `console.log` reste) et les vrais fichiers `sheet/save/` prédatent
   `validated_skills`. La graine save→load (`case levels_history` →
   `LevelsHistory.buildSkills()`, cf. Rounds 5-6) est couverte par
   `[LEVELUP MAGICIEN][SAVE]` ; reste à restaurer l'écriture du fichier puis
   à re-générer un save réel.
6. Renommage anglais des identifiants français (règle ci-dessus) :
   `save__vigueur` → `save__fortitude`, `save__reflexes` → `save__reflex`,
   `save__volonte` → `save__will`, `skill__acrobaties` → `skill__acrobatics`,
   `maitrises_initiales` → `initial_masteries`, etc. — d'une traite, clé par
   clé, données (`SLOT_KEYWORDS`, `MASTERY_UPGRADES`) + code + tests.
7. `CHARACTER.Masteries` stocke encore `this.character` depuis son
   constructeur (`new CHARACTER.Masteries( this )`) : contraire à la règle
   Review code "pas de référence au parent stockée dans l'enfant". À régler
   quand on relit le domaine mastery — la dépendance passera par
   `param__current_character__object` dans les appels des popups et de la
   zone jets.
8. Pass de nettoyage gras/majuscules existants (levelup, popups) selon la
   règle d'affichage ci-dessus.
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
ouvrant un choix rend `CHARACTER.LevelUpSkillChoice`, la valeur choisie
dans le sélecteur EST la validation (elle dérive la phase), le save en
garde le nom au lieu d'un booléen — le contrôle de validation de la ligne
s'appelle `_computeHtmlValidation` (interrupteur pour la ligne simple,
sélecteur pour la ligne à choix).

### Style, commentaires, nommage

- Pas de prose descriptive dans le bloc JSDoc d'une classe : seul
  `@class` / `@extends` reste.
- Pas de commentaire qui répète ce que le code montre déjà.
- Aucun identifiant français dans le code, même dérivé du scraping : les
  corrections passent par des cartes écrites à la main qui survivent au
  re-scrap (ex. `CLASSES.ABILITY_KEY_OVERRIDES` : `maitrises_initiales`
  devient `initial_masteries`, lu via `LEVELUP.INITIAL_MASTERIES_KEY`).
- Fichiers JS en kebab-case : `3-level-up-skill-class.js`,
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
  phase, `getDataToSave` dérive `validated_skills` des lignes
  ( `{ slot_key: line.isActive() }`, chaque ligne rendue y figure, validée
  ou non), et les valeurs chargées ne font que staging vers `buildSkills`,
  consommé au build. Conséquences : le save de l'état reste porté par la clé
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
