"use strict";
CHARACTER.GeneralWindow = function ( window_name, parent_name ) {
    this.initSpecific( window_name, parent_name );
};

CHARACTER.GeneralWindow.prototype = {
    initSpecific: WINDOW_V2.ElementFromData.initSpecific,
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__heal_modal__confirm":
            case "event__temp_hp_modal__confirm":
            case "event__damage_modal__confirm":
            case "event__health_history__load":
                this.updateHealthDisplay();
                break;
            case "event__form__element_changed":
                this.computeHtmlWithData( params[ "param__current_character__object" ] );
                break;
        }
    },
    //********************************************  HTML   **************************************************//
    computeHtmlWithData: function ( character_object ) {
        if ( !this.content_dom_element_target ) {
            this.content_dom_element_target = new SERVICE.DOM.createElement( "div", { class: "character-sheet-grid" } );
            SERVICE.DOM.addElementToAfterEmpty( this.content_dom_element_target, this.dom_element_target );
        }
        
        this.computeArea__logo();
        this.computeArea__save();
        this.computeComponent(character_object.getNameObject());
        this.computeComponent(character_object.getPlayer());
        this.computeComponent(character_object.getRace());
        if ( character_object.getRace().isSet() ) {
            this.computeComponent( character_object.getRace().getBodySize() );
            this.computeComponent( character_object.getRace().getLegacy() );
        }
        //this.computeArea__ancestry( character_object );
        //this.computeArea__health( character_object );
        //this.computeArea__heritage( character_object );
        //this.computeArea__class( character_object );
        //this.computeArea__historic( character_object );
        //this.computeArea__size( character_object );
        //this.computeArea__alignment( character_object );
        //this.computeArea__divinity( character_object );
        //this.computeArea__level( character_object );
        //this.computeArea__heroism( character_object );
        //this.computeArea__ca( character_object );
        //this.computeArea__surprise( character_object );
        
        
    },
    
    computeComponent: function (object) {
        object.doActionAfter("event__compute__html", {"param__window" : CHARACTER.GeneralWindow.NAME, "param__dom_element_parent" : this.content_dom_element_target });
    },
    computeArea__logo: function () {
        if ( this.area_logo ) {
            return;
        }
        this.area_logo = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-logo neutral" } ), this.content_dom_element_target );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "logo-pathfinder" } ), this.area_logo );
    },
    
    computeArea__save: function () {
        if ( this.area_save ) {
            return;
        }
        this.area_save = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-save neutral" } ), this.content_dom_element_target );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "save-button", onclick: "CONTROLLER.Character.doActionAfter('event__current_character__save')" } ), this.area_save );
    },
    
    //computeArea__ancestry: function ( character_object ) {
    //    if ( this.area_ancestry ) {
    //        return;
    //    }
    //    this.area_ancestry = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-race" } ), this.content_dom_element_target );
    //    SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createPropertyVertical( RACES.key_element, character_object.getRace().getName(), character_object.getRace().getLabel(), RACES.label_element, false ), this.area_ancestry );
    //},
    
    computeArea__heritage: function ( character_object ) {
        if ( this.area_heritage || !character_object.getRace().getName() ) {
            return;
        }
        this.area_heritage = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-heritage" } ), this.content_dom_element_target );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createPropertyVertical( LEGACIES.key_element, character_object.getRace().getLegacy().getName(), character_object.getRace().getLegacy()
                                                                                                                                                                     .getLabel(), LEGACIES.label_element, false ), this.area_heritage );
    },
    computeArea__health  : function ( character_object ) {
        if ( this.area_health || !character_object.getClass().getName() ) {
            return;
        }
        this.area_health = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-health" } ), this.content_dom_element_target );
        
        var header = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "hp-header" } ), this.area_health );
        
        var hpDisplay = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "hp-display" } ), header );
        
        SERVICE.DOM.addElementTo( character_object.getHealth().getDomCurrentHP(), hpDisplay );
        
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {}, " / " ), hpDisplay );
        
        this.hpMaxElement = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "hp-max" }, character_object.getHealth().getMaxHP() ), hpDisplay );
        
        this.hpPercent = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "hp-percent between-parentheses" }, character_object.getHealth().getHealthPercentage() + "%" ), hpDisplay );
        
        var actions = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "hp-actions" } ), header );
        
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "button", { class: "hp-button heal", onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__open_modal__hp_heal')" }, "Soigner" ), actions );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "button", { class: "hp-button", onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__open_modal__hp_temp')" }, "+ PV Temp" ), actions );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "button", { class: "hp-button damage", onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__open_modal__hp_damage')" }, "Dégâts" ), actions );
        
        this.hpEffectsContainer = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { id: "health-history-container" } ), this.area_health );
    },
    updateHealthDisplay  : function () {
        var character = CONTROLLER.Character.current_character;
        
        this.hpMaxElement.textContent = character.getHealth().getMaxHP();
        this.hpPercent.textContent    = character.getHealth().getHealthPercentage() + "%";
        
    },
    
    
    computeArea__class: function ( character_object ) {
        if ( this.area_class || !character_object.getRace().getName() ) {
            return;
        }
        this.area_class = SERVICE.DOM.addElementTo(
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
            this.area_class
        );
    },
    
    computeArea__historic: function ( character_object ) {
        if ( this.area_historic ) {
            return;
        }
        this.area_historic = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "grid-area area-historic" } ),
            this.content_dom_element_target
        );
        SERVICE.DOM.addElementTo( character_object.getHistoric().getLabel(), this.area_historic );
    },
    
    
    computeArea__alignment: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-alignment" } ), this.content_dom_element_target );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createPropertyVertical( ALIGNEMENT.key_element, character_object.getAlignment(), character_object.alignment_html, "Alignement", false ), area );
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

CHARACTER.GeneralWindow.NAME = "general";