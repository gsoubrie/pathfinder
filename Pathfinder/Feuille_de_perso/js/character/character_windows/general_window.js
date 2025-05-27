"use strict";
CHARACTER.GeneralWindow           = function ( window_name, parent_name ) {
    this.initSpecific( window_name, parent_name );
};
CHARACTER.GeneralWindow.prototype = {
    initSpecific: WINDOW_V2.ElementFromData.initSpecific,
    
    //********************************************  EVENT LISTENER  **************************************************//
    
    //********************************************  HTML   **************************************************//
    computeHtmlWithData: function ( character_data ) {
        this.content_dom_element_target = new SERVICE.DOM.createElement( "div", { class: "title" } );
        this.computeHtml__left( character_data );
        this.computeHtml__middle( character_data );
        this.computeHtml__right( character_data );
        SERVICE.DOM.addElementToAfterEmpty( this.content_dom_element_target, this.dom_element_target );
    },
    computeHtml__left  : function ( character_data ) {
        var to_return = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "left-zone" } ),this.content_dom_element_target );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "logo-pathfinder" } ), to_return );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "page-name" }, "Feuille de<br>personnage" ), to_return );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "save-button", onclick: "CONTROLLER.Main.save()" } ), to_return );
    },
    computeHtml__middle: function ( character_data ) {
        var middle    = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "middle-zone" } ), this.content_dom_element_target );
        var left_zone = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "middle-left-zone" } ), middle );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyHorizontal( "name", character_data.name, "Nom du <br>personnage", true ), left_zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyHorizontal( "player", character_data.player, "Nom du <br>joueur", true ), left_zone );
        
        var right_zone = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "middle-right-zone" } ), middle );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( RACES.key_element, character_data.getRace().getName(), character_data.getRace().getLabel(), RACES.label_element, false ), right_zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( LEGACIES.key_element, character_data.getRace().getLegacy().getName(), character_data.getRace().getLegacy().getLabel(), LEGACIES.label_element, false ), right_zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( CLASSES.key_element, character_data.getClass().getName(), character_data.getClass().getLabel(), CLASSES.label_element, false ), right_zone );
        var container_1 = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "container-property " } ), right_zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( RACES.PARAM.BODY_SIZE.key, character_data.getRace().getBodySize().value, character_data.getRace().getBodySize().label, RACES.PARAM.BODY_SIZE.key, false ), container_1 );
        
        // SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( "alignement", "", "Alignement", false ), container_1 );
        // SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( "trait", "", "Trait", true ), container_1 );
        // SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( "divinite", "", "Divinité", false ), right_zone );
    },
    computeHtml__right : function ( character_data ) {
        var right_zone = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "right-zone" } ), this.content_dom_element_target );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyHorizontal( "level", CONTROLLER.Main.current_character.level, "Niveau", true ), right_zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyHorizontal( "point_heroism", CONTROLLER.Main.current_character.point_heroism, "Point d'heroisme", true ), right_zone );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.GeneralWindow, WINDOW_V2.ElementFromData );
