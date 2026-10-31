# AGENTS.md — Pathfinder character sheet

Feuille de personnage Pathfinder 2 en JavaScript vanilla (ES2020), sans build,
sans bundler, sans npm : tout est chargé par des balises `<script>` ordonnées
dans `index.html`. Les tests vivent dans `tests.html` + `sheet/js/tests/`.

## Règles à lire avant de toucher au code

Deux skills Vibe décrivent les conventions obligatoires du projet :

- `.vibe/skills/pathfinder-style/SKILL.md` — architecture (namespaces globaux,
  classes prototype + `SERVICE.CLASS.addPrototype`, bus `doActionAfter`,
  SERVICE.DOM, formatage exact, règle du "passer le plat").
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

- `CHARACTER.LevelUpSkillClass` (`level-up-skill-class.js`) — un objet par
  capacité débloquée : porte son état **validé** (`is_active`, booléen,
  uuid `"<niveau>__<slot>"`), rend sa propre ligne (`computeHtml()`) avec un
  interrupteur on/off **sans texte** (`.level-up-row-toggle`, pas de sélecteur
  de choix), possède SON compteur WARNINGS enfant du compteur de sa classe.
  Sur `event__level_up__toggle_skill` il bascule l'état + compteur et re-rend
  sa ligne en place (`SERVICE.DOM.replaceElement`) — pas de rebuild complet
  de la fenêtre. API : `getUUID`, `isActive`, `getMasteriesUpgrades`,
  `getSourceLabel`.
- `CHARACTER.LevelUpSkillsClass` (`level-up-skills-class.js`) — un par classe
  du niveau (uuid = nom de classe) : conteneur des lignes de la classe, SON
  compteur WARNINGS. Routage du toggle : chaque conteneur de classe reçoit
  l'événement, seul le porteur de l'uuid route à la ligne (garde null
  justifiée).
- `CHARACTER.LevelUpSkills` (`level-up-skills.js`) — un objet par niveau de
  l'historique (uuid/clé = numéro), conteneur des classes du niveau : rend
  son propre bloc (`computeHtml()` : titre, numéro, interrupteur
  Actif/Désactivé depuis l'entrée d'historique captée au build, lignes de
  toutes ses classes), possède SON compteur WARNINGS, diffuse le toggle vers
  ses classes.
- `CHARACTER.LevelsUpSkills` (`levels-up-skills.js`) — conteneur sur le
  personnage (`this.level_up_skills`, enfant de `children`, clé de save
  `level_up_skills`), ses enfants sont les **niveaux**.
  `buildSkills( character )` re-dérive niveaux → classes → lignes de
  l'historique (parsing de `capacity_by_level`), en préservant l'état validé
  (le save imbriqué `{ "1": { "Magicien": { "1__slot": true } } }` est
  aplati récursivement par `_flattenValues`, les anciens formats restent
  lus). Rebuild déclenché par le personnage sur : `event__data_loaded__done`,
  `event__form__element_changed`, `event__level_up__take_level`,
  `event__level_up__remove_level`, `event__level__toggle`.
- `CHARACTER.LevelUpWindow` — ne calcule plus rien : elle ajoute l'en-tête,
  le warning global, le sélecteur de classe, puis un bloc par niveau du
  conteneur (`level.computeHtml()`). Le bloc porte `data-level-number`
  (ancre des scénarios) : sur `event__level_up__toggle_skill` la fenêtre
  re-dispatch au personnage, le warning global se met à jour tout seul par
  la chaîne de compteurs.
- `CHARACTER.LevelUpGlobalWarning` (`level-up-global-warning.js`) — label
  "N capacités non validées" de la fenêtre : objet compteur dédié,
  consommateur du compteur warnings de la fenêtre (`setParent` + contrat
  `update( name, nb )`), rend et re-rend son div tout seul ; plus aucun
  `_buildGlobalWarning` / `_updateGlobalWarning` ni `getMissingCount()`.
- Chaîne de compteurs : ligne → classe → niveau → conteneur du personnage →
  fenêtre (badge d'onglet), branchée
  par `setCountersParent` dans `computeHtmlWithData` de la fenêtre. Plus aucun
  `setCounterValue` manuel côté fenêtre. Les uuids enfants morts sont purgés par
  `resetCounterByType(WARNINGS)` au début de `buildSkills`.
- Plat des événements : fenêtre → `CONTROLLER.Character.current_character.doActionAfter(...)`
  → personnage → conteneur → skill. Jamais d'appel métier direct fenêtre → domaine.
- **Seules les capacités validées** (`skill.isActive()`) alimentent les calculs
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
   gated par validation, persistance au rebuild (reset la feuille lui-même).
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
   sur ce que `detectType` renvoie réellement — les capacités se valident par
   interrupteur, plus de sélecteur de dons prévu sur la ligne.
3. Choix de compétences (INT + choix par divinité/lignage/style) : les lignes
   "compétences supplémentaires" des blocs mastery + dons/améliorations de
   compétence. Cela débloquera aussi Moine "voie vers la perfection", Guerrier
   "maîtrise martiale", Prêtre doctrines (choix → upgrade de maîtrise).
4. Sources maîtrises supplémentaires : race/héritage, dons, objets magiques —
   chaque source porte ses contributions (`getMasteriesData()`), le conteneur
   personnage agrège.
5. Sauvegarde : vérifier `level_up_skills` dans un vrai fichier `sheet/save/`
   (les choix étaient perdus avant le refactor — le conteneur est maintenant
   dans `children`).
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
   domaine par domaine au fil du nettoyage : levelup est fait, restent
   mastery, character (fenêtres, historique), class, level, characteristic,
   race, gift, historics, legacy, archetype, spell, stuffs, object, service,
   component, controller + `<script>` de index.html et tests.html.

## Review code

Décisions prises lors des allers-retours de relecture fichier par fichier.
Chaque retour de l'utilisateur devient une règle ci-dessous, en plus des
conventions des skills. Elles s'appliquent à tout le code, y compris les
fichiers déjà relus. Historique : Round 1 = `level-up-skill.js` + domaine
levelup, Round 2 = compteurs et label global de la fenêtre.

### Style, commentaires, nommage

- Pas de prose descriptive dans le bloc JSDoc d'une classe : seul
  `@class` / `@extends` reste.
- Pas de commentaire qui répète ce que le code montre déjà.
- Aucun identifiant français dans le code, même dérivé du scraping : les
  corrections passent par des cartes écrites à la main qui survivent au
  re-scrap (ex. `CLASSES.ABILITY_KEY_OVERRIDES` : `maitrises_initiales`
  devient `initial_masteries`, lu via `LEVELUP.INITIAL_MASTERIES_KEY`).
- Fichiers JS en kebab-case : `level-up-skill-class.js`,
  `level-up-global-warning.js`, `constant-level-up.js` (le dossier du domaine
  reste en un mot : `sheet/js/levelup/`). Renommage par `git mv` + balises
  `<script>` de index.html et tests.html mises à jour en même temps. Les
  autres domaines suivront au fil du nettoyage (voir À faire).
- Classes CSS avec trait d'union : `level-up-row-label`, `level-up-block`,
  `level-up-window` — jamais `levelup-*` (idem data attributes).

### Identité, événements, accesseurs

- Un objet s'identifie par son uuid : un événement ciblant un objet porte
  uniquement son uuid (`param__level_up_skill__uuid`), jamais un couple de
  paramètres redondants. Routage par `getContentByUUID`, pas de garde null
  quand l'émetteur (le rendu vivant de l'objet dans son conteneur) garantit
  l'uuid. Les clés dérivées de l'identité se construisent avec
  `getUUID()` (cf. `_getPreservedValues`).
- Les requêtes d'un conteneur sur ses enfants passent par des événements de
  collecte quand le regroupement est calculé, mais un regroupement
  **structurel** devient un objet : `LevelUpSkills` (un objet par niveau, son
  compteur, son bloc rendu par lui-même) a remplacé
  `event__get__level_up__with_level` — le routage par niveau est structurel,
  plus rien n'est filtré. Le broadcast d'un événement ciblé (`toggle_skill`)
  se fait par `doActionAfterContentChildren` (params en 2e position), le
  porteur de l'uuid route, les autres ignorent (garde null justifiée).
- L'événement déclencheur circule le plus longtemps possible : quand un objet
  re-dispatche le plat, il repasse l'événement D'ORIGINE
  (`this.level_up_skills.doActionAfter( event_name, params )`), jamais un
  événement synthétique de conséquence (`event__level_up__build_skills` a été
  supprimé pour ça). Chaque consommateur écoute les événements déclencheurs qui
  le concernent (`LevelsUpSkills` rebuild sur `data_loaded__done`,
  `form__element_changed`, `take_level`, `remove_level`, `level__toggle`) et
  garde la main pour faire du spécifique par événement si besoin.
- Pas de référence au parent stockée dans un objet enfant : la dépendance
  passe en paramètre de l'événement au moment où l'objet en a besoin
  (`param__current_character__object`, clé existante posée par le personnage
  avant son re-dispatch), jamais en champ construit au départ
  (`new CHARACTER.LevelsUpSkills( this )` a été refusé pour ça).
- Minimiser le code : un accesseur ne survit que s'il a un consommateur
  productif (un message d'assertion de test ne compte pas), et un objet
  expose des intentions métier, pas ses champs bruts — masteries demande
  `getMasteriesUpgrades()` et `getSourceLabel()` au skill validé, jamais la
  classe ni la clé de capacité. Un seul accesseur d'état par donnée
  (`isActive()` ; l'inversion se fait aux points d'appel). Le re-render en
  place s'appelle `updateHtml()`.
- Pas de signal visuel redondant : `has-pending` (barre sur le titre du bloc
  de niveau) a été supprimé avec son événement de collecte — quand les
  badges de ligne et le warning global portent déjà l'information, un
  signal de zone n'ajoute rien.

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
