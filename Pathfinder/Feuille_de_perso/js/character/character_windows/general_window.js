"use strict";
CHARACTER.GeneralWindow = function ( window_name, parent_name ) {
    this.initSpecific( window_name, parent_name );
};
CHARACTER.GeneralWindow.prototype = {
    initSpecific: WINDOW_V2.ElementFromData.initSpecific,
    
    //********************************************  HTML   **************************************************//
    computeHtmlWithData: function ( character_object ) {
        this.content_dom_element_target = new SERVICE.DOM.createElement( "div", { class: "character-sheet-grid" } );
        
        this.computeArea__logo( character_object );
        this.computeArea__save( character_object );
        this.computeArea__name( character_object );
        this.computeArea__player( character_object );
        this.computeArea__health( character_object );
        this.computeArea__temp_health( character_object );
        this.computeArea__wound( character_object );
        this.computeArea__ancestry( character_object );
        this.computeArea__heritage( character_object );
        this.computeArea__class( character_object );
        this.computeArea__historic( character_object );
        this.computeArea__size( character_object );
        this.computeArea__alignment( character_object );
        this.computeArea__divinity( character_object );
        this.computeArea__level( character_object );
        this.computeArea__heroism( character_object );
        this.computeArea__ca( character_object );
        this.computeArea__surprise( character_object );
        
        SERVICE.DOM.addElementToAfterEmpty( this.content_dom_element_target, this.dom_element_target );
    },
    
    computeArea__logo: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-logo neutral" } ), this.content_dom_element_target );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "logo-pathfinder" } ), area );
    },
    
    computeArea__save: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-save neutral" } ), this.content_dom_element_target );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "save-button", onclick: "CONTROLLER.Main.save()" } ), area );
    },
    
    computeArea__name: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-name" } ), this.content_dom_element_target );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createPropertyVertical( "name", character_object.name, SERVICE.DOM.createElement("div", {}, character_object.name), "Nom du personnage", true ), area );
    },
    
    computeArea__player: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-player" } ), this.content_dom_element_target );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createPropertyVertical( "player", character_object.player, SERVICE.DOM.createElement("div", {}, character_object.player), "Nom du joueur", true ), area );
    },
    
    // Zone HEALTH (cols 2-3, row 3)
    computeArea__health: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo( 
            SERVICE.DOM.createElement( "div", { class: "grid-area area-health" } ), 
            this.content_dom_element_target 
        );
        SERVICE.DOM.addElementTo( 
            SERVICE.DOM_HELPER.createPropertyHorizontal( "point_life", CONTROLLER.Character.current_character.total_life, "Point de vie", true ), 
            area 
        );
    },
    
    // Zone TEMP HEALTH (cols 2-3, row 4)
    computeArea__temp_health: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo( 
            SERVICE.DOM.createElement( "div", { class: "grid-area area-temp-health" } ), 
            this.content_dom_element_target 
        );
        SERVICE.DOM.addElementTo( 
            SERVICE.DOM_HELPER.createPropertyHorizontal( "temp_life", "", "Temporaire", true ), 
            area 
        );
    },
    
    // Zone WOUND (cols 2-3, row 5)
    computeArea__wound: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo( 
            SERVICE.DOM.createElement( "div", { class: "grid-area area-wound" } ), 
            this.content_dom_element_target 
        );
        SERVICE.DOM.addElementTo( 
            SERVICE.DOM_HELPER.createPropertyHorizontal( "wound", "", "Blessure", true ), 
            area 
        );
    },
    
    // Zone ANCESTRY (cols 4-5, row 1)
    computeArea__ancestry: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo( 
            SERVICE.DOM.createElement( "div", { class: "grid-area area-ancestry" } ), 
            this.content_dom_element_target 
        );
        SERVICE.DOM.addElementTo(
            SERVICE.DOM_HELPER.createPropertyVertical( 
                RACES.key_element, 
                character_object.getRace().getName(), 
                character_object.getRace().getLabel(), 
                RACES.label_element, 
                false 
            ), 
            area 
        );
    },
    
    // Zone HERITAGE (cols 4-5, row 2)
    computeArea__heritage: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo( 
            SERVICE.DOM.createElement( "div", { class: "grid-area area-heritage" } ), 
            this.content_dom_element_target 
        );
        SERVICE.DOM.addElementTo( 
            SERVICE.DOM_HELPER.createPropertyVertical( 
                LEGACIES.key_element, 
                character_object.getRace().getLegacy().getName(), 
                character_object.getRace().getLegacy().getLabel(), 
                LEGACIES.label_element, 
                false 
            ), 
            area 
        );
    },
    
    // Zone CLASS (cols 4-5, row 3)
    computeArea__class: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo( 
            SERVICE.DOM.createElement( "div", { class: "grid-area area-class" } ), 
            this.content_dom_element_target 
        );
        SERVICE.DOM.addElementTo( 
            SERVICE.DOM_HELPER.createPropertyVertical( 
                CLASSES.key_element, 
                character_object.getClass().getName(), 
                character_object.getClass().getLabel(), 
                CLASSES.label_element, 
                false 
            ), 
            area 
        );
    },
    
    // Zone HISTORIC (cols 4-5, row 4)
    computeArea__historic: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo( 
            SERVICE.DOM.createElement( "div", { class: "grid-area area-historic" } ), 
            this.content_dom_element_target 
        );
        SERVICE.DOM.addElementTo( character_object.getHistoric().getLabel(), area );
    },
    
    // Zone SIZE (col 4, row 5)
    computeArea__size: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo( 
            SERVICE.DOM.createElement( "div", { class: "grid-area area-size" } ), 
            this.content_dom_element_target 
        );
        SERVICE.DOM.addElementTo( 
            SERVICE.DOM_HELPER.createPropertyVertical( 
                RACES.PARAM.BODY_SIZE.key, 
                character_object.getRace().getBodySize().value, 
                character_object.getRace().getBodySize().label, 
                "Taille", 
                false 
            ), 
            area 
        );
    },
    
    // Zone ALIGNMENT (col 5, row 5)
    computeArea__alignment: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo( 
            SERVICE.DOM.createElement( "div", { class: "grid-area area-alignment" } ), 
            this.content_dom_element_target 
        );
        SERVICE.DOM.addElementTo( 
            SERVICE.DOM_HELPER.createPropertyVertical( 
                ALIGNEMENT.key_element, 
                character_object.getAlignment(), 
                character_object.getAlignment(), 
                "Alignement", 
                false 
            ), 
            area 
        );
    },
    
    // Zone DIVINITY (cols 4-5, row 6)
    computeArea__divinity: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo( 
            SERVICE.DOM.createElement( "div", { class: "grid-area area-divinity" } ), 
            this.content_dom_element_target 
        );
        SERVICE.DOM.addElementTo( 
            SERVICE.DOM_HELPER.createPropertyVertical( "divinite", "", "", "Divinité", false ), 
            area 
        );
    },
    
    // Zone LEVEL (col 6, rows 1-2)
    computeArea__level: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo( 
            SERVICE.DOM.createElement( "div", { class: "grid-area area-level" } ), 
            this.content_dom_element_target 
        );
        SERVICE.DOM.addElementTo( 
            SERVICE.DOM_HELPER.createPropertyHorizontal( "level", CONTROLLER.Character.current_character.level, "Niveau", true ), 
            area 
        );
    },
    
    // Zone HEROISM (col 6, rows 3-4)
    computeArea__heroism: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo( 
            SERVICE.DOM.createElement( "div", { class: "grid-area area-heroism" } ), 
            this.content_dom_element_target 
        );
        SERVICE.DOM.addElementTo( 
            SERVICE.DOM_HELPER.createPropertyHorizontal( "point_heroism", CONTROLLER.Character.current_character.point_heroism, "Point d'héroisme", true ), 
            area 
        );
    },
    
    // Zone CA (col 6, row 5)
    computeArea__ca: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo( 
            SERVICE.DOM.createElement( "div", { class: "grid-area area-ca" } ), 
            this.content_dom_element_target 
        );
        SERVICE.DOM.addElementTo( 
            SERVICE.DOM_HELPER.createPropertyHorizontal( "ca", "", "CA", true ), 
            area 
        );
    },
    
    // Zone SURPRISE (col 6, row 6)
    computeArea__surprise: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo( 
            SERVICE.DOM.createElement( "div", { class: "grid-area area-surprise" } ), 
            this.content_dom_element_target 
        );
        SERVICE.DOM.addElementTo( 
            SERVICE.DOM_HELPER.createPropertyHorizontal( "surprise", "", "Surpris", true ), 
            area 
        );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.GeneralWindow, WINDOW_V2.ElementFromData );