"use strict";
/**
 * @class CHARACTER.GeneralWindow
 * @extends WINDOW_V2.ElementFromData
 */
CHARACTER.GeneralWindow = function ( parent_name ) {
    this.initSpecific( CHARACTER.GeneralWindow.NAME, parent_name, "Général" );
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
                this.computeHtmlWithData();
                break;
            case "click_on__window_navigation__done":
                // Les prises de niveau et validations vivent dans l'onglet Passage de
                // niveau, apres cette fenetre dans le groupe : recalcul des jets a
                // l'activation de l'onglet, toujours sur l'etat frais du personnage
                if ( this.name === params[ "window_name" ] ) {
                    this.computeArea__saves( CONTROLLER.Character.current_character );
                    this.computeArea__skills( CONTROLLER.Character.current_character );
                }
                break;
        }
        WINDOW_V2.Element.prototype.doActionAfter.call( this, event_name, params );
    },
    //********************************************  HTML   **************************************************//
    computeHtmlWithData: function () {
        let character_object = CONTROLLER.Character.current_character;
        if ( !this.content_dom_element_target ) {
            this.content_dom_element_target = new SERVICE.DOM.createElement( "div", { class: "character-sheet-grid" } );
            SERVICE.DOM.addElementToAfterEmpty( this.content_dom_element_target, this.dom_element_target );
        }
        
        this.computeComponent(character_object.getNameObject());
        this.computeComponent(character_object.getPlayer());
        this.computeComponent(character_object.getRace());
        if ( !character_object.getRace().isSet() ) {
            return;
        }
        //this.computeComponent( character_object.getRace().getBodySize() );
        this.computeComponent( character_object.getRace().getLegacy() );
        this.computeComponent(character_object.getCharacteristics());
        this.computeComponent(character_object.getClasses());
        if ( character_object.getClasses().isEmpty() ) {
            return;
        }
        for ( let i = 0, _size_i = character_object.getClasses().getSize(); i < _size_i; i++ ) {
            this.computeComponent( character_object.getClasses().getContent( i ).getArchetype() );
        }
        this.computeArea__saves( character_object );
        this.computeArea__skills( character_object );
        //this.computeArea__class( character_object );
        //this.computeArea__health( character_object );
        //this.computeArea__heritage( character_object );
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

    // Zone dédiée des jets et compétences (une seule colonne de grille
    // élargie) : le bloc des jets puis le bloc des compétences, à la suite.
    computeArea__saves: function ( character_object ) {
        if ( !this.content_dom_element_target || !character_object || character_object.getClasses().isEmpty() ) {
            return;
        }
        if ( !this.block_saves ) {
            this.block_saves = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "jets-block jets-saves-block" } ), this._computeJetsArea() );
        }
        SERVICE.DOM.empty( this.block_saves );
        this._computeJetsHeader( this.block_saves );
        var masteries = character_object.getMasteries();
        for ( var i = 0; i < MASTERY.SAVES.length; i++ ) {
            var save           = MASTERY.SAVES[ i ];
            var rank           = masteries.getFinalRank( save.slot );
            var rank_data      = rank ? MASTERY.getByShort( rank ) : MASTERY.LIST.UNKNOWN;
            var save_value     = masteries.getSaveModifier( save );
            var characteristic = character_object.getCharacteristics().getContentByUUID( save.characteristic );
            var modifier       = characteristic ? characteristic.getModifierValue() : 0;
            var row            = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", {
                    class  : "saves-row",
                    "data-slot": save.slot,
                    onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__masteries',{})"
                } ),
                this.block_saves
            );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "saves-label" }, save.label ), row );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "saves-value" }, save_value ), row );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
                class: "saves-rank class-mastery-badge " + rank_data.css,
                title: rank ? rank_data.label : "?"
            }, rank ? rank_data.short : "?" ), row );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
                class      : "saves-cell",
                "data-name": "modifier",
                title      : "Modificateur de " + this._getCharacteristicLabel( save.characteristic )
            }, modifier ), row );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "saves-cell", "data-name": "level" }, character_object.getLevel() ), row );
            if ( save.slot === "perception" ) {
                SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "saves-separator" }, "Jets de sauvegarde" ), this.block_saves );
            }
        }
    },

    // Bloc des compétences, à la suite des jets dans la même zone : une ligne
    // par compétence du jeu (SKILLS.LIST), charac associée au libellé, jet au
    // même format que les jets, rang I (bonus 0) quand le personnage ne l'a
    // pas maîtrisée
    computeArea__skills: function ( character_object ) {
        if ( !this.content_dom_element_target || !character_object || character_object.getClasses().isEmpty() ) {
            return;
        }
        if ( !this.block_skills ) {
            this.block_skills = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "jets-block jets-skills-block" } ), this._computeJetsArea() );
        }
        SERVICE.DOM.empty( this.block_skills );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "saves-separator" }, "Compétences" ), this.block_skills );
        var masteries = character_object.getMasteries();
        var skill_keys = Object.keys( SKILLS.LIST ).sort( function ( key_a, key_b ) {
            return SKILLS.LIST[ key_a ].label.localeCompare( SKILLS.LIST[ key_b ].label );
        } );
        for ( var i = 0; i < skill_keys.length; i++ ) {
            var skill_data    = SKILLS.LIST[ skill_keys[ i ] ];
            var skill_key     = CLASSES.getAbilityKey( skill_data.label );
            var slot          = MASTERY.getSkillSlot( skill_data.label );
            var rank          = masteries.getFinalRank( slot ) || "I";
            var rank_data     = MASTERY.getByShort( rank );
            var skill_value   = masteries.getSaveModifier( { "slot": slot, "characteristic": skill_data.characteristic } );
            var characteristic = character_object.getCharacteristics().getContentByUUID( skill_data.characteristic );
            var modifier      = characteristic ? characteristic.getModifierValue() : 0;
            var row           = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", {
                    class  : "saves-row",
                    "data-slot": slot,
                    onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__skill_actions',{'param__skill':'" + skill_key + "'})"
                } ),
                this.block_skills
            );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "saves-label" }, skill_data.label ), row );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "saves-value" }, skill_value ), row );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "saves-rank class-mastery-badge " + rank_data.css, title: rank_data.label }, rank_data.short ), row );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
                class      : "saves-cell",
                "data-name": "modifier",
                title      : "Modificateur de " + this._getCharacteristicLabel( skill_data.characteristic )
            }, modifier ), row );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "saves-cell", "data-name": "level" }, character_object.getLevel() ), row );
        }
    },

    _computeJetsArea: function () {
        if ( !this.area_jets ) {
            this.area_jets = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-jets jets-grid" } ), this.content_dom_element_target );
        }
        return this.area_jets;
    },

    _computeJetsHeader: function ( dom_element_parent ) {
        var header = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "saves-row saves-header-row" } ), dom_element_parent );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "saves-label" } ), header );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "saves-cell" }, "Jet" ), header );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "saves-cell" }, "Rang" ), header );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "saves-cell" }, "Mod" ), header );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "saves-cell" }, "Niv" ), header );
    },

    _getCharacteristicLabel: function ( characteristic_key ) {
        for ( var i = 0; i < CHARACTERISTICS.ENUM.length; i++ ) {
            if ( CHARACTERISTICS.ENUM[ i ].key === characteristic_key ) {
                return CHARACTERISTICS.ENUM[ i ].label;
            }
        }
        return characteristic_key;
    },
    
    
    computeArea__heritage: function ( character_object ) {
        if ( this.area_heritage || !character_object.getRace().getName() ) {
            return;
        }
        this.area_heritage = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-heritage" } ), this.content_dom_element_target );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createPropertyVertical( LEGACIES.key_element, character_object.getRace().getLegacy().getName(), character_object.getRace().getLegacy()
                                                                                                                                                                     .getLabel(), LEGACIES.label_element, false ), this.area_heritage );
    },
    computeArea__health  : function ( character_object ) {
        if ( this.area_health || character_object.getClasses().isEmpty() ) {
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
                character_object.getClasses().getDisplayValue(),
                CLASSES.label_element,
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
            SERVICE.DOM_HELPER.createPropertyHorizontal( "level", CONTROLLER.Character.current_character.getLevel(), "Niveau", true ),
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

CHARACTER.GeneralWindow.NAME = "general_sheet";