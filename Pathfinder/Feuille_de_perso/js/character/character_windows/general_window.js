"use strict";
CHARACTER.GeneralWindow = function ( window_name, parent_name ) {
    this.initSpecific( window_name, parent_name );
    this.tempHpEffects = [];  // Liste des PV temporaires
    this.damageEffects = [];  // Liste des dégâts avec détails
};

CHARACTER.GeneralWindow.prototype = {
    initSpecific: WINDOW_V2.ElementFromData.initSpecific,
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__heal_modal__confirm":
            case "event__temp_hp_modal__confirm":
            case "event__damage_modal__confirm":  
                this.updateHealthDisplay();
                break;
        }
    },
    //********************************************  HTML   **************************************************//
    computeHtmlWithData: function ( character_object ) {
        this.content_dom_element_target = new SERVICE.DOM.createElement( "div", { class: "character-sheet-grid" } );
        
        this.computeArea__logo( character_object );
        this.computeArea__save( character_object );
        this.computeArea__name( character_object );
        this.computeArea__player( character_object );
        this.computeArea__health( character_object );
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
    
    computeArea__health: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-health" } ), this.content_dom_element_target );
        
        var header = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "hp-header" } ), area );
        
        var hpDisplay = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "hp-display" } ), header );
        
        this.hpCurrentElement = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "hp-current" }, character_object.getHealth().getEffectiveHP() ), hpDisplay );
        
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {}, " / " ), hpDisplay );
        
        this.hpMaxElement = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "hp-max" }, character_object.getHealth().getMaxHP() ), hpDisplay );
        
        this.hpPercent = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "hp-percent between-parentheses" }, character_object.getHealth().getHealthPercentage() + "%" ), hpDisplay );
        
        var actions = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "hp-actions" } ), header );
        
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "button", { class: "hp-button heal", onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__open_modal__hp_heal')" }, "Soigner" ), actions );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "button", { class: "hp-button", onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__open_modal__hp_temp')" }, "+ PV Temp" ), actions );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "button", { class: "hp-button damage", onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__open_modal__hp_damage')" }, "Dégâts" ), actions );
        
        this.hpEffectsContainer = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { id: "health-history-container" } ), area );
    },
    updateHealthDisplay: function() {
        var character = CONTROLLER.Character.current_character;
        
        this.hpCurrentElement.textContent = character.getHealth().getEffectiveHP();
        this.hpMaxElement.textContent = character.getHealth().getMaxHP();
        this.hpPercent.textContent = character.getHealth().getHealthPercentage()+"%";
        
    },
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
    
    computeArea__historic: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "grid-area area-historic" } ),
            this.content_dom_element_target
        );
        SERVICE.DOM.addElementTo( character_object.getHistoric().getLabel(), area );
    },
    
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