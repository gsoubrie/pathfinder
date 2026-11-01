---
name: pathfinder-object-model
description: Charger ce skill avant d'écrire, modifier ou relire une classe JS de la feuille Pathfinder (domaines, fenêtres, popups). Il définit le modèle d'objets obligatoire issu des rounds de relecture : un seul propriétaire d'état, des dépendants passifs (aucune référence parent stockée, aucun miroir), l'affichage réactif par phase branchée sur le DOM, computeHtml en commande, le nommage métier honnête. Le fichier de référence est sheet/js/levelup/3-level-up-skill-class.js.
---

# Pathfinder — Modèle d'objets

Toute classe nouvelle ou relue se conforme au modèle ci-dessous. Le fichier
de référence est `sheet/js/levelup/3-level-up-skill-class.js` (rounds 1 à 9) :
quand un choix d'implémentation se présente, imiter la référence.

## 1. Un seul propriétaire d'état

- La **source de vérité** porte la donnée, sa sérialisation (`getDataToSave`
  manuel ou merge des `children`) et les setters qui la font évoluer.
- Un objet **dépendant** (ligne, bloc, badge) est un enregistrement + son
  rendu. Il ne stocke AUCUNE copie d'un état qu'il ne possède pas :
  pas de référence vers son parent (`this.parent_object`, `this.character`,
  `this.history_entry` : interdits), pas de miroir de champ (`is_active`,
  `is_enabled` dupliqués : interdits), pas de contexte redondant
  (`class_name` quand le parent le porte : interdit).
- Test rapide : si un champ de l'objet peut être recalculé depuis un autre
  objet, il ne doit pas exister.

## 2. Tout coule vers le dépendant

- **Construction** : `updateData( data )` + `setData( key, value )` avec un
  case par clé, `default: console.warn( "[IGNORED DATA]", ... )`. Quand la
  clé de données égale le nom du champ, l'assignation groupée
  `this[ key ] = value` (cases en chute). Une clé consommée à la volée
  (jamais stockée) appelle le setter qui va avec dans son case dédié.
- **Contexte au moment du besoin** : paramètre de méthode —
  `computeHtml( class_name )`, `getMasteriesUpgrades( class_name )`. Le
  propriétaire a l'information en main au point d'appel, il la passe.
- **État** : le propriétaire écrit SA donnée puis pousse la nouvelle valeur
  au dépendant (`line.setIsActive( entry.isSkillValidated( slot ) )`).
  L'écriture ne part JAMAIS du dépendant vers le propriétaire.
- Une valeur dérivée des champs de l'objet a son setter dédié appelé en fin
  d'init (`setUUID()`), pas d'assignation brute dans init.

## 3. Affichage réactif, pas impératif

- L'état visible de l'objet est une **phase** : mixin
  `GS.OBJECT.PhaseInterface`, `setPhaseOrPhase`, phase branchée sur le DOM de
  l'objet par `setPhaseDomElement` → `data-current-phase`.
- Le CSS réagit à l'attribut ; le JS ne pose **jamais** de classe d'état
  (`--active`, `active`, `disabled`) et ne re-rend pas au changement d'état :
  le DOM suit la phase en place.
- Les **compteurs** se mettent à jour dans `callbackForPhase`, jamais en
  poussée manuelle au point d'appel.
- Une valeur de phase n'est pas qu'une chaîne, c'est un **contrat de
  style** : `SLEEPING` rend inert (curseur interdit + enfants en
  `pointer-events: none`), `RUNNING` peint en bleu (styles utilitaires
  globaux de `_utilities.css`). On n'emprunte une constante de la lib QUE si
  sa sémantique de style correspond ; un état interactif de domaine définit
  SES constantes dans son `constant_*.js` (ex. `LEVELUP.PHASE`), et si la
  chaîne collisionne avec un utilitaire, la règle de base de l'élément pose
  un style explicite qui la couvre par spécificité.

## 4. computeHtml est une commande

- Elle construit et stocke (`this.dom_element`), ne retourne RIEN.
- La sortie est `getDomElement()` ; l'idiome d'attache est toujours :
  `x.computeHtml(); SERVICE.DOM.addElementTo( x.getDomElement(), parent );`
  — jamais `addElementTo( x.computeHtml(), parent )`.
- Le re-render en place capture l'ancien élément AVANT de reconstruire :
  `let before = this.getDomElement(); this.computeHtml();
  SERVICE.DOM.replaceElement( before, this.getDomElement() );`

## 5. Nommage honnête

- Un champ d'identité porte son **nom métier** (`level_name`,
  `class_name`), `getUUID()` le retourne, `setUUID()` le dérive. Jamais de
  `this.uuid`/`this.key` générique quand la valeur est un nom du domaine.
- Setters conventionnels (`setIsActive( to_set )`, `setEnabled( to_set )`),
  un accesseur ne survit qu'avec un consommateur productif.
- Événements/paramètres `event__...`/`param__...`, libellés français,
  identifiants anglais, fichiers kebab-case.

## Checklist relecture d'une classe

1. Référence vers un parent ou un autre objet stockée en champ ? → la
   dépendance passe en paramètre au moment du besoin.
2. Miroir d'état (champ dupliqué d'un autre objet) ? → le propriétaire
   pousse, le dépendant consomme à la volée.
3. Classe CSS d'état posée par le JS, ou re-render au changement d'état ?
   → phase sur le DOM + CSS, compteur dans `callbackForPhase`.
4. `computeHtml` retourne-t-il quelque chose ? → commande + `getDomElement`.
5. Champ générique (`key`, `uuid`, `value`) portant un nom métier ? →
   renommer jusqu'au bout, accesseurs compris.
6. Données de construction lues en direct (`this.x = data[ "x" ]`) ? →
   `updateData` + `setData` avec `[IGNORED DATA]`.
