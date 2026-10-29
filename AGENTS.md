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

## Chantier en cours : passage de niveau + maîtrises (non commité)

### Domaine levelup (`sheet/js/levelup/`)

- `CHARACTER.LevelUpSkill` (`levelup_skill.js`) — un objet par capacité débloquée
  par l'historique de niveaux : porte sa `value`, sait `requiresChoice()` /
  `isPending()`, rend sa propre ligne (`computeHtml()`), possède SON compteur
  WARNINGS enfant du compteur du conteneur. Sur `event__levelup__select` il met
  à jour valeur + compteur et re-rend sa ligne en place
  (`SERVICE.DOM.replaceElement`) — pas de rebuild complet de la fenêtre.
- `CHARACTER.LevelUpSkills` (`levelup_skills.js`) — conteneur sur le personnage
  (`this.level_up_skills`, enfant de `children`, clé de save `level_up_skills`).
  `buildSkills( character )` re-dérive les skills de l'historique (parsing de
  `capacity_by_level`), en préservant les valeurs. Rebuild déclenché par le
  personnage sur : `event__data_loaded__done`, `event__form__element_changed`,
  `event__level_up__take_level`, `event__level_up__remove_level`,
  `event__level__toggle`.
- `CHARACTER.LevelUpWindow` — ne calcule plus rien : assemble des blocs,
  demande `getSkillsForLevel()` / `isLevelPending()` / `getMissingCount()`.
- Chaîne de compteurs : skill → conteneur → fenêtre (badge d'onglet), branchée
  par `setCountersParent` dans `computeHtmlWithData` de la fenêtre. Plus aucun
  `setCounterValue` manuel côté fenêtre. Les uuids enfants morts sont purgés par
  `resetCounterByType(WARNINGS)` au début de `buildSkills`.
- Plat des événements : fenêtre → `CONTROLLER.Character.current_character.doActionAfter(...)`
  → personnage → conteneur → skill. Jamais d'appel métier direct fenêtre → domaine.

### Domaine mastery (`sheet/js/mastery/`)

- `MASTERY.ORDER` + `getHigherRank` — l'agrégation prend le MEILLEUR rang
  (I < Q < E < M < L), jamais de cumul. `MASTERY.SLOT_KEYWORDS` mappe les
  descriptions du bloc `mastery` des classes vers des slots normalisés
  (`save__vigueur`, `attack__armes_simples`, `spell_attack`, `skill__<nom>`...).
- `CHARACTER.Masteries` (`masteries.js`) — sur le personnage, **état dérivé non
  sauvegardé**, calculé à la demande. `getSourcesData()` = contributions du
  bloc `mastery` initial de chaque classe posée + upgrades des capacités des
  niveaux **actifs** (lus depuis les `LevelUpSkill`).
- `CLASSES.MASTERY_UPGRADES` (`constant_class_choices.js`) — carte écrite à la
  main (validée par l'utilisateur) : capacité → `[{ slot, rank }]`, pour les
  16 classes. Accesseur `CLASSES.getMasteriesUpgrade`.
- `CLASSES.getAbilityKey` / `resolveAbilityKey` / `getSingularAbilityKey` /
  `ABILITY_ALIASES` — résolution libellé de `capacity_by_level` → clé `abilities`
  (pluriels français, "-aux"→"-al", renommages scrapés : "incantation arcanique"
  → `incantation_de_magicien`, etc.).
- Le "?" de la ligne "maîtrises initiales" émet `event__show_information__masteries`
  → popup catégorie `masteries` (`MasteriesPopupRenderer`) montrant les rangs
  **courants agrégés du personnage**. Cette popup est reconstruite à chaque
  ouverture (pas de cache `_openPopup`, c'est un état dynamique).

### Pièges découverts (ne pas réapprendre)

- `SERVICE.CLASS.addPrototype` ne copie que les méthodes PROPRES du prototype
  parent, et seulement si l'enfant ne les a pas déjà. En pratique : **tout enfant
  de conteneur doit définir son propre `getUUID`** (cf. `Characteristics`,
  `LevelsHistory`, `LevelUpSkills`, `LevelUpSkill`).
- Les compteurs poussent vers les parents sous leur uuid : un enfant disparu
  laisse une clé fantôme dans le mapping du parent → reset du parent quand les
  enfants sont reconstruits.
- `detectType` renvoie des `*_skill` / `general_skill` etc., JAMAIS de
  `*_feat` : `LEVELUP.CHOICE_TYPES` (general_feat, class_feat...) ne matche
  donc rien aujourd'hui — le sélecteur générique de dons n'est PAS actif
  (voir "À faire").
- Les libellés de `capacity_by_level` et les clés `abilities` divergent parfois
  (scraping) : passer par `CLASSES.resolveAbilityKey`, jamais par accès direct.

### État au moment de la pause

- Tout le chantier est dans le working tree, **non commis** (domaines `levelup`
  + `mastery` nouveaux, `constant_class_choices.js`, `character.js`, fenêtre,
  popups, scenario_levelup_magicien.js étendu à 7 tests).
- Syntaxe validée par Node sur tous les fichiers ; les tests navigateur du
  dernier câblage (MASTERY_UPGRADES + test "niveau 5 → Réflexes experte")
  **attendent le rapport `tests.html` de l'utilisateur**.
- `constant_class.js` est un fichier de données scrapées : ne pas l'éditer pour
  corriger des incohérences — passer par les cartes écrites à la main
  (`ABILITY_ALIASES`, `MASTERY_UPGRADES`) qui survivent au re-scrap.

## À faire (dans l'ordre logique)

1. Valider le rapport `tests.html` du câblage MASTERY_UPGRADES, corriger si rouge.
2. Activer les choix de dons sur les lignes `*_feat` du passage de niveau :
   reconstruire le sélecteur de pool (dons généraux / de classe / de compétence /
   ancestraux depuis `DON.*`) sur `OBJECT.InlineSelector` — question restée
   en suspens ("question 3"). Au passage aligner `LEVELUP.CHOICE_TYPES` sur ce
   que `detectType` renvoie réellement.
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
