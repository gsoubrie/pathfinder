---
name: pathfinder-style
description: Load this skill before writing, modifying, or adding any code (JS, CSS, HTML) to the Pathfinder character sheet project. It defines the mandatory architecture (global namespaces, prototype classes, event bus, services), the DOM and data conventions, and the exact formatting rules of this codebase.
---

# Pathfinder - Conventions de code du projet

Ce projet est une feuille de personnage Pathfinder 2 en **JavaScript vanilla (ES2020/ES11)**, **sans build system, sans bundler, sans npm, sans modules ES**. Tous les fichiers sont chargés par des balises `<script>` ordonnées dans `index.html`. Ne jamais introduire d'import/export, de framework, de package.json ou de toolchain.

## Règles d'or

1. **Pas de modules.** Tout communique par des namespaces globaux (`var SERVICE = {}`, `var RACES = {}`, ...).
2. **Pas de `class` ES6.** Les classes sont des constructeurs + `prototype` avec héritage par `SERVICE.CLASS.addPrototype( Enfant, Parent )`.
3. **Jamais de `document.createElement` / `document.querySelector` direct** dans le code métier. Toujours passer par `SERVICE.DOM` (bas niveau) ou `SERVICE.DOM_HELPER` (haut niveau).
4. **Pas de gestionnaires d'événements `addEventListener` dans le code métier.** Les événements passent par le bus `MANAGER.EventManagerV2` et la méthode `doActionAfter`.
5. **Respecter strictement le formatage** (alignement des `=`, espaces dans les parenthèses, bannières de sections) — voir "Formatage" plus bas.

## Ordre de chargement et organisation

Chaque nouveau fichier `.js` DOIT être déclaré dans `index.html` au bon endroit de la chaîne de chargement :

```
libs/gs_lib_common.js          -> bibliothèque GS (classes de base, MANAGER, SERVICE.CLASS)
libs/gs_lib_common_V02_01.js   -> bibliothèque GS V2 (fenêtres, EventManagerV2, boutons)
js/constant.js                 -> déclaration des namespaces racine (SERVICE, OBJECT, CONTROLLER, ...)
js/constant_divers.js          -> constantes globales (BODY_SIZE, LANGUAGE, TRAIT, DAMAGE_TYPE, ...)
js/service/*.js                 -> services singleton (SERVICE.STRING, SERVICE.DOM, SERVICE.DOM_HELPER, ...)
js/object/*.js                  -> interfaces et objets transverses (OBJECT.InterfaceHtml, OBJECT.InterfaceContainer, popups, données)
js/component/_component_interface.js puis composants
js/<domaine>/constant_<domaine>.js, <domaine>_enum.js, <domaine>.js, <domaine>s.js
js/character/**                -> personnage, historique de niveaux, fenêtres (character_windows)
js/phase.js                    -> machine à états PHASE
js/controller/*.js             -> contrôleurs (CONTROLLER.Main, CONTROLLER.Character)
js/popup.js
js/save/*.js                   -> données sauvegardées (fichiers générés `let <uuid> = {...}`)
```

Ne jamais modifier `sheet/js/libs/*` ni `sheet/css/libs/*` (bibliothèque partagée).

## Namespaces

- Un namespace = une variable globale en `SCREAMING_CASE`, déclarée en haut de son propre fichier avec `"use strict";`.
- Les namespaces racines sont déclarés dans `constant.js` : `var SERVICE = {}; var OBJECT = {}; var CONTROLLER = CONTROLLER || {}; ...`
- Les namespaces de domaine (`RACES`, `LEGACIES`, `ARCHETYPES`, `CLASSES`, `HISTORICS`, `SPELL`, ...) sont des `var` globaux dans leurs fichiers respectifs et listés dans le `globals` de `.jshintrc`.
- Tout nouveau namespace doit être ajouté au `globals` de `sheet/.jshintrc`.

## Classes (pattern prototype)

Toute classe suit exactement ce schéma :

```javascript
"use strict";
/**
 * @class RACES.Race
 * @extends CHARACTER.ComponentInterface
 */
RACES.Race = function () {
    this.init();
};
RACES.Race.prototype = {
    init: function () {
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
        }
        CHARACTER.ComponentInterfacePopup.prototype.doActionAfter.call( this, event_name, params );
    }
};

SERVICE.CLASS.addPrototype( RACES.Race, CHARACTER.ComponentInterface );
```

Points clés :

- Constructeur minimal : appelle `this.init()`.
- Le bloc JSDoc `@class` / `@extends` est obligatoire au-dessus de chaque classe.
- Héritage : `SERVICE.CLASS.addPrototype( Enfant, Parent )` à la fin du fichier. Jamais de `Object.create`, jamais de `extends` ES6.
- Appel de méthode parent : `ParentClass.prototype.methode.call( this, ... )`.
- Les fichiers d'interface commencent par `_` (ex. `_component_interface.js`, `object-interface.js`).
- Un domaine = 4 fichiers : `constant_*.js` (constantes du domaine : `key`, `label`, `key_element`, `default_value`, `PARAM`), `*_enum.js` (énumération des instances), `*.js` (classe), `*s.js` (collection qui hérite de `OBJECT.InterfaceContainerHtml` et instancie chaque élément de l'ENUM).

## Services (singletons IIFE)

```javascript
"use strict";
/**
 * @typedef {Object} SERVICE.DOM
 */
SERVICE.DOM = (function ( /** @type {SERVICE.DOM} */ self ) {
    self.maMethode = function ( param ) {
    };
    return self;
})( SERVICE.DOM || {} );
```

- Toujours `( SERVICE.X || {} )` à la fin pour tolérer les rechargements.
- Un service ne contient que des fonctions pures d'assistance, jamais d'état métier.

## Événements (bus doActionAfter)

- Chaque objet qui participe au cycle d'événements expose `doActionAfter( event_name, params )` : un `switch` sur `event_name` avec `return;` en fin de case.
- Nommage : événements `"event__<nom>"`, paramètres `"param__<nom>"` (double underscore). Ex. `params[ "param__dom_element_parent" ]`.
- Déclenchement depuis le HTML : attribut inline `onclick="MANAGER.EventManagerV2.doActionAfter(event,'event__nom',{'param__key':'valeur'})"`.
- Les contrôleurs (`CONTROLLER.Main.doActionAfter`) routent vers `CONTROLLER.Character` puis vers le personnage courant ; c'est l'entrée unique des événements. Les événements d'interface d'une fenêtre (boutons d'un panneau) peuvent être routés par le contrôleur directement vers `current_character.windows.doActionAfterContentChildren(...)` — la fenêtre concernée traite ensuite l'événement.
- Machine à états : `PHASE.Phase` / `initPhase()`, valeurs de phase en `SCREAMING_CASE` (`PHASE.INIT`), l'état est reflété dans `element.dataset.currentPhase` / `previousPhase` si un élément DOM est attaché via `setPhaseDomElement`.

### Passer le plat (règle imposée par l'utilisateur)

- **Jamais d'appel de méthode métier direct depuis une fenêtre** (`character.takeLevel(...)`, `character.xxx()` interdits). La fenêtre re-dispatche l'événement au domaine : `CONTROLLER.Character.current_character.doActionAfter( event_name, params );` puis reconstruit son rendu. Chaque objet traite sa part (la classe porte son niveau, `Current` orchestre historique/PV), personne n'écrit ni ne teste au mauvais endroit.
- **La logique courte reste inline dans le case du switch** : pas de méthode dédiée tant que ça ne dépasse pas 5-6 lignes. Une méthode ne s'extraite que si le case devient long.
- **Pas de garde `if ( params[ ... ] )` superflue** : si l'émetteur garantit le paramètre (bouton rendu pour une classe possédée), le case l'utilise directement.
- **Les requêtes métier vivent sur l'objet qui porte la donnée** : `CLASSES.CharacterClasses.getHighestClassName()`, pas de `_getHighestClassName` dans une fenêtre. Une fenêtre ne calcule pas sur les données du personnage, elle les demande au domaine.
- **Pas de cas particulier `if ( key === ... )` dans le routage** : l'objet doit être atteignable par `getObjectByKey` — la propriété du personnage porte le **nom de la clé** (`this.race` ↔ `"race"`, `this.class` ↔ `"class"` même pour un conteneur multivalué). Si un `if` de routage apparaît, c'est la propriété qui est mal nommée.
- Le plat peut circuler : contrôleur → fenêtre (événement d'interface) → personnage (`doActionAfter`) — mais **jamais en boucle** : l'objet qui exécute la logique ne re-dispatche pas le même événement.

## DOM

- Création : `SERVICE.DOM.createElement( "div", { class: "...", "data-name": "..." }, innerHTML )` puis `SERVICE.DOM.addElementTo( element, parent )` (retourne l'élément ajouté).
- Recherche de parents : `SERVICE.DOM.findParentElementWithClass( element, class, deepLimit, data_name, data_value )` — toujours passer une limite de profondeur.
- Briques de haut niveau via `SERVICE.DOM_HELPER` : `createPropertyHorizontal`, `createPropertyVertical`, `createButton`, `createMoreButton` / `createLessButton`.
- Structure récurrente d'une propriété : `div.property.vertical` contenant `div.label` + (`input.value` ou `div.value`), avec `data-name` portant la clé.
- Style inline uniquement via `SERVICE.DOM.STYLE.<PROPRIETE>` (énumération des propriétés CSS autorisées).

## Données et constantes

- Constantes de référence : objets globaux `SCREAMING_CASE` avec paires `{ value, label }` (ex. `BODY_SIZE.M.label = "Moyen"`).
- Données métier : cartes indexées par UUID du site source (pathfinder-fr), de la forme `OBJECT.FEATS = { "<uuid>": { id, name, category, href, ... } }` — dans les fichiers `js/object/*_contant.js`.
- Accès par UUID : `SERVICE.DATA.loadDataByUUID( uuid )` (implémentation par `eval` — ne pas remplacer, c'est le mécanisme de chargement des fichiers `sheet/save/`).
- Sauvegarde : le personnage exporte via `getDataToSave()` un objet plat ; le fichier généré est `sheet/save/<uuid>.js` contenant `let <uuid> = {...};` et est chargé par une balise `<script>` dans `index.html`.
- Tout objet sérialisable du personnage est un **child** de `CHARACTER.Current` : le merge de `ComponentInterface.getDataToSave` sur les `children` fait le reste — jamais de sérialisation à la main dans `getSpecificDataToSave`.
- Un conteneur child retourne un **objet clé** (`{ "levels_history": [...] }`, `{ "classes": [...] }`), jamais le tableau brut de la lib : le merge passe par `Object.assign`, qui aplatirait un tableau en `{0: ...}`. Attention : deux clés identiques dans un même littéral d'objet, la dernière gagne.
- Sérialisation : chaque classe métier définit `getSpecificDataToSave()` / `getDataToSave()` et `updateData( data )` + `setData( key, value )` (switch sur la clé) pour la relance.

## Formatage (obligatoire, à reproduire à l'identique)

- `"use strict";` en première ligne de chaque fichier JS.
- Indentation : 4 espaces. Pas de tabs.
- **Espaces à l'intérieur des parenthèses** : `function ( param )`, `if ( !element )`, `getElementById( "id" )`. Les fonctions sans argument s'écrivent `function ()`.
- **Alignement des `=`** au sein d'un bloc d'affectations consécutives (colonnes) :

```javascript
this.previous_phase             = null;
this.current_phase              = PHASE.INIT;
this.timeout_set_phase_callback = null;
```

- Boucles canoniques :

```javascript
for ( let i = 0, _size_i = array.length; i < _size_i; i++ ) {
    // array[ i ]
}
```

- Nommage :
  - Namespaces et constantes : `SCREAMING_CASE`.
  - Classes : `PascalCase`, propriétés et méthodes : `camelCase`.
  - Méthodes "privées" préfixées `_` (ex. `_setPhaseInDomElement`).
  - Paramètres d'entrée : `to_set`, `to_remove`, `to_test`, `to_add` ; retours : `to_return`.
  - Locales de boucle : `_keys`, `_size_i`, `_current_key`.
  - Les autres locales portent un nom **explicite orienté métier**, pas une abréviation : `life_point_from_cons` (jamais `_con`), `data_from_class`, `level_name` ; le nom décrit la valeur portée, pas son type.
  - Éléments DOM : `dom_element`, `dom_element__input`, `dom_element_popup`, `dom_element_general` (double underscore pour les variantes).
- Bannières de sections, à copier tel quel :

```javascript
//********************************************  EVENT LISTENER  **************************************************//
//********************************************  GETTER SETTER  **************************************************//
//********************************************  HTML   **************************************************//
//********************************************  SAVE   **************************************************//
//********************************************  DATA   **************************************************//
//********************************************  INIT  **************************************************//
```

Ordre des sections dans une classe : `init`, `EVENT LISTENER`, `GETTER SETTER`, `HTML`, `SAVE`/`DATA`.
- `var` et `let` coexistent (pas de règle stricte ; `let` dans le nouveau code, `var` accepté mais a éviter). Pas de template literals : concaténation avec `+`. Les arrow functions sont réservées aux callbacks inline (`setTimeout`, `addEventListener`).
- Comparaisons strictes `===` / `!==`, retour anticipé (`if ( !element ) { return; }`), pas de `else` après `return`.
- Commentaires de classe en JSDoc (`@class`, `@extends`, `@typedef`, `@returns`) ; commentaires métier en anglais, jamais de méta-commentaires sur le processus.

## CSS

- Fichiers découpés : `css/_variables.css` (custom properties), `css/_utilities.css` (classes utilitaires), `css/style.css` (styles globaux), `css/sheet/<fenetre>.css` et `css/popup/popup_<objet>.css` par fenêtre/popup. Tout nouveau fichier est déclaré dans `index.html` après `_variables.css` et `_utilities.css`.
- Variables custom obligatoires : couleurs `--c-*`, gradients `--g-*`, tailles/espacements `--s-*`, bordures `--b-*`, rayons `--r-*`, ombres `--sh-*`, transitions `--t-*`. Aucune valeur de couleur brute dans un fichier de fenêtre.
- Classes utilitaires flexbox disponibles (`flex`, `items-center`, `justify-between`, `gap-sm`, ...) — les utiliser plutôt que du CSS ad hoc.
- Nommage des classes : `kebab-case` décrivant la structure (`.character-content`, `.gs-window-element-V2`, `.property.vertical`). 

## Checklist pour ajouter une fonctionnalité

1. Constantes du domaine (`constant_*.js`) puis ENUM (`*_enum.js`), classe (`*.js`), collection (`*s.js`) dans `js/<domaine>/`.
2. Ajouter les `<script>` dans `index.html` à la position correcte (avant `js/character/**`).
3. Ajouter le namespace à `.jshintrc` (`globals`).
4. Hériter du bon parent : `OBJECT.InterfaceContainerHtml` pour une collection, `CHARACTER.ComponentInterface` pour un composant du personnage.
5. Câbler les événements via `doActionAfter` (noms `event__...` / `param__...`), le rendu via `computeHtml*` (idempotent : retourner si `this.dom_element_x` existe déjà), la sauvegarde via `getDataToSave`.
6. CSS dans le fichier de la fenêtre concernée avec les variables `--*`, pas de style inline.
7. Vérifier dans la console navigateur (aucun test automatisé dans ce projet : la validation est `index.html` ouvert dans Chrome, F12, pas d'erreur et flux d'événements visibles dans les `console.log` du contrôleur).

## Périmètre à ne pas modifier

- `sheet/js/libs/` et `sheet/css/libs/` : bibliothèque GS partagée, hors périmètre.
- `sheet/extension chrome/` : extensions de scraping autonomes (elles ont leur propre `manifest.json` et n'utilisent pas les namespaces de la feuille).
- `sheet/save/` : fichiers générés automatiquement.
