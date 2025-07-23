"use strict";
CHARACTER.LevelWindow           = function ( window_name, parent_name ) {
    this.initSpecific( window_name, parent_name );
};
CHARACTER.LevelWindow.prototype = {
    initSpecific: WINDOW_V2.ElementFromData.initSpecific,
    
    //********************************************  EVENT LISTENER  **************************************************//
    
    //********************************************  HTML   **************************************************//
    computeHtmlWithData: function ( character_object ) {
        this.content_dom_element_target = new SERVICE.DOM.createElement( "div", { class: "title" } );
        this.computeHtml__left( character_object );
        this.computeHtml__middle( character_object );
        this.computeHtml__right( character_object );
        SERVICE.DOM.addElementToAfterEmpty( this.content_dom_element_target, this.dom_element_target );
    },
    computeHtml__left  : function ( character_object ) {
        var to_return = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "left-zone" } ), this.content_dom_element_target );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "logo-pathfinder" } ), to_return );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "page-name" }, "Feuille de<br>personnage" ), to_return );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "save-button", onclick: "CONTROLLER.Main.save()" } ), to_return );
    },
    computeHtml__middle: function ( character_object ) {
        var middle    = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "middle-zone" } ), this.content_dom_element_target );
        var left_zone = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "middle-left-zone" } ), middle );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createPropertyHorizontal( "name", character_object.name, "Nom du <br>personnage", true ), left_zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createPropertyHorizontal( "player", character_object.player, "Nom du <br>joueur", true ), left_zone );
        
        var right_zone = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "middle-right-zone" } ), middle );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createPropertyVertical( RACES.key_element, character_object.getRace().getName(), character_object.getRace().getLabel(), RACES.label_element, false ), right_zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createPropertyVertical( LEGACIES.key_element, character_object.getRace().getLegacy().getName(), character_object.getRace().getLegacy().getLabel(), LEGACIES.label_element, false ), right_zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createPropertyVertical( CLASSES.key_element, character_object.getClass().getName(), character_object.getClass().getLabel(), CLASSES.label_element, false ), right_zone );
        var container_1 = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "container-property " } ), right_zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createPropertyVertical( RACES.PARAM.BODY_SIZE.key, character_object.getRace().getBodySize().value, character_object.getRace().getBodySize().label, RACES.PARAM.BODY_SIZE.key, false ), container_1 );
        
        // SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createPropertyVertical( "alignement", "", "Alignement", false ), container_1 );
        // SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createPropertyVertical( "trait", "", "Trait", true ), container_1 );
        // SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createPropertyVertical( "divinite", "", "Divinité", false ), right_zone );
    },
    computeHtml__right : function ( character_object ) {
        var right_zone = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "right-zone" } ), this.content_dom_element_target );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createPropertyHorizontal( "level", CONTROLLER.Character.current_character.level, "Niveau", true ), right_zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createPropertyHorizontal( "point_heroism", CONTROLLER.Character.current_character.point_heroism, "Point d'heroisme", true ), right_zone );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.LevelWindow, WINDOW_V2.ElementFromData );


//┌─────────────────────────────── Points de Vie ───────────────────────────────┐
//│ Points de Vie :      94                                                     │
//├──────┬────────┬────────┬────────┬───────────────────────────────────────────┬
//│ Nv   │ Total  │ Classe │ CON    │ Bonus supplémentaires                     │
//├──────┼────────┼────────┼────────┼───────────────────────────────────────────┼
//│  1   │  15    │  10    │  +3    │ +2 (Toughness)            [−][+]          │
//│  2   │  13    │  10    │  +3    │                            [+]            │
//│  3   │  13    │  10    │  +3    │                            [+]            │
//│  4   │  14    │  10    │  +3    │ +1 (Bénédiction divine)   [−][+]          │
//│  5   │  13    │  10    │  +3    │                            [+]            │
//│  6   │  13    │  10    │  +3    │                            [+]            │
//│  7   │  13    │  10    │  +3    │                            [+]            │
//├──────┴────────┴────────┴────────┴───────────────────────────────────────────┤
//│ Bonus hors niveau : +1 (Anneau de vitalité)                  [−]            │
//│                                                              [+]            │
// ──────────────────────────────────────────────────────────────────────────────
