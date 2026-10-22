---
name: pathfinder-tests
description: Load this skill before writing or modifying any test for the Pathfinder character sheet (tests.html, sheet/js/tests/). It defines the scenario-based testing method, the runner API, the naming rules and the test-first workflow with the user.
---

# Pathfinder Tests

Méthode de test de la fiche Pathfinder. Le harnais vit dans `tests.html` (racine du repo) et `sheet/js/tests/` (pas de build, pas de npm — la page de tests charge la même chaîne de scripts que `index.html`).

## Philosophie : tester l'application, pas les fonctions

- Un test = un **parcours utilisateur de bout en bout** sur la vraie application : le personnage instancié par `CONTROLLER.Character.current_character`, les vraies fenêtres, le vrai bus d'événements.
- On **agit** avec exactement les mêmes appels qu'un clic réel (`CONTROLLER.Main.doActionAfter( "event__x", {...} )`, `MANAGER.EventManagerV2.doActionAfter( ... )` avec les mêmes `param__*` que le HTML généré), puis on **vérifie**.
- Les assertions portent **toujours sur les deux plans** :
  - **objet** : `getRace().getName()`, valeur d'un bonus, phase d'une fenêtre ;
  - **DOM** : l'élément est rendu, le libellé affiché, l'attribut câblé, le style appliqué.
- **Pas de tests unitaires de fonctions** (l'utilisateur les a explicitement rejetés). Pas de test « l'objet est cohérent » abstrait : on teste ce que l'utilisateur observe et fait.
- Les tests décrivent le **comportement attendu** : un bug connu se traduit par un test rouge, qui passera vert à la correction et empêchera toute régression.

## Workflow avec l'utilisateur (règle absolue)

1. Écrire ou ajuster les tests.
2. **S'arrêter.** Ne jamais corriger le code applicatif dans la foulée.
3. L'utilisateur lance `tests.html` dans son navigateur et colle le rapport.
4. Corriger l'application **seulement après** validation du rapport par l'utilisateur.
5. Un run = une décision. Si l'utilisateur veut revoir l'état rouge, les correctifs non commités permettent un revert temporaire.

## Le harnais

- `tests.html` : charge la lib + tous les scripts applicatifs (sans les fichiers de save) puis les tests ; le lancement se fait au `window load`. Toute nouvelle suite doit y être déclarée par une balise `<script>`.
- `sheet/js/tests/test_runner.js` : `TEST.RUNNER` + `TEST.ASSERT`. Capturer `window.onerror` : chaque erreur JS de chargement devient un échec `[CHARGEMENT PAGE]` (test de fumée gratuit).
- **Un fichier par scénario** : `sheet/js/tests/scenario_<slug>.js` (ex. `scenario_page_vide.js`, `scenario_onglets.js`, `scenario_ascendance.js`). Le slug reprend le préfixe du scénario en minuscules/underscores. Chaque fichier commence par un bloc JSDoc décrivant le parcours (pré-condition → actions → assertions). L'ordre du rapport = l'ordre des balises `<script>` dans `tests.html`.

### API

```javascript
TEST.RUNNER.register( "[SCENARIO] nom court", function () {
    TEST.ASSERT.notNull( CONTROLLER.Character.current_character, "Pre-condition : personnage charge" );
    if ( !CONTROLLER.Character.current_character ) { return; }
    // actions via le bus d'evenements, puis assertions objet + DOM
} );
```

`TEST.ASSERT` : `ok`, `notOk`, `equal`, `notEqual`, `deepEqual`, `notNull`, `isNull`, `isArray`, `throws`. Chaque assertion reçoit un message d'échec détaillé (format « attendu [X], obtenu [Y] » + explication). Une assertion qui lève interrompt le test ; le runner affiche l'échec avec le message.

## Règles de nommage (l'utilisateur veut du télégraphique)

- Préfixe de scénario entre crochets : `[PAGE VIDE]`, `[ONGLETS]`, `[ASCENDANCE]`…
- Titre = sujet + valeur attendue, jamais une phrase : `[ONGLETS] actif = Général`, `[ONGLETS] nombre = 5`, `[PAGE VIDE] champs visibles = Nom, Joueur, Ascendance`.
- La verbosité (sélecteur, hook CSS, explication, attendu/obtenu) va dans les **messages d'échec**, jamais dans le titre.
- Un sujet = un seul groupe : ne jamais éclater une préoccupation sur deux préfixes, ni dupliquer des tests proches — les fusionner (ex. « actif = Général » regroupe fenêtre active objet + attribut DOM + unicité RUNNING).

## Les styles se testent par style calculé

Vérifier l'attribut déclencheur (`data-current-phase="RUNNING"`) ne suffit pas : si la règle CSS est supprimée, le test resterait vert.

```javascript
let _style = getComputedStyle( _active_tab.querySelector( ".gs-div-tab" ) );
TEST.ASSERT.ok( _style.backgroundImage.indexOf( "212, 175, 55" ) !== -1, "... degrade dore attendu, obtenu : " + _style.backgroundImage );
```

- Le test ancre la valeur du thème (ex. `#D4AF37` → `rgb(212, 175, 55)` dans le style calculé) : si le thème change volontairement, mettre à jour le test — c'est la spec.
- Comparer aussi à un élément inactif quand pertinent (distinction visuelle).

## Sélecteurs DOM stables

- Onglets : `.character-sheet-windows .gs-window-element-V2[data-name='<window_name>']`, `.gs-div-tab`, `.gs-label` ; état actif : attribut `data-current-phase='RUNNING'`.
- Contenu : `.characters-sheet-content` ; zones : `.grid-area.area-<key>` ; champs : `.property[data-name='<key>']` avec `.label` et `input.value`.
- Câblage des inputs : lire les attributs `onclick`/`onchange` et vérifier le nom d'événement (`event__property_popup__open`, `event__has_change__input`…).
- Toujours croiser avec l'objet (`_character.windows.getActiveWindow().getName()`), le DOM seul ne suffit pas.

## Écriture d'un nouveau scénario

1. Décrire les étapes en langage utilisateur (pré-condition → actions → assertions) et le faire valider si le parcours est nouveau.
2. Créer `sheet/js/tests/scenario_<slug>.js` (un scénario = un fichier, jamais de scénario ajouté à un fichier existant) et le déclarer dans `tests.html` à la position voulue dans l'ordre du rapport.
2. Fixtures : reprendre le format des fichiers de `sheet/save/` (voir un vrai save), objets indépendants, jamais de dépendance aux fichiers de save chargés.
3. Actions via le bus avec les paramètres exacts que le HTML génère (regarder le `onclick`/`onchange` du composant concerné pour copier les `param__*`).
4. Garde de pré-condition en tête de test (`notNull` + early `return`), puis assertions.
5. Syntaxe du projet : `"use strict"`, 4 espaces, espaces dans les parenthèses, alignement des `=`, boucles `for ( let i = 0, _size_i = ...`, pas de template literals, concaténation avec `+`.

## Pièges connus

- `getPhase()` n'existe pas sur les phases : utiliser `isPhase( GS.OBJECT.CONST.PHASE.X )`.
- Les fenêtres applicatives qui surchargent `doActionAfter` doivent retransmettre au parent (`WINDOW_V2.Element.prototype.doActionAfter.call( this, event_name, params );`) — si un événement commun (ex. `compute_html_done`) semble avalé, c'est la première cause à vérifier.
- `SERVICE.DOM.createElement` est une factory : jamais de `new` dessus, même dans les tests.
- Les tests tournent au `window load`, donc après l'init applicatif (`DOMContentLoaded`) : le personnage du contrôleur existe déjà, et les erreurs de chargement sont déjà dans `TEST.RUNNER.page_errors`.
