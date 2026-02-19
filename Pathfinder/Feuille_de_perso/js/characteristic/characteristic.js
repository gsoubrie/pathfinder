"use strict";
/**
 * @class CHARACTERISTICS.Characteristic
 * @extends CHARACTER.ComponentInterface
 */
CHARACTERISTICS.Characteristic = function ( data ) {
    this.init( data );
};
CHARACTERISTICS.Characteristic.prototype = {
    init: function ( data ) {
        this.final_value    = new OBJECT.FinalValue();
        this.modifier_value = new OBJECT.ModifierValue();
        this.race_bonus     = new OBJECT.ConfigurableValue( "race_bonus", 0, "FREE" );
        this.class_bonus    = new OBJECT.ConfigurableValue( "class_bonus", 0, "FREE" );
        this.initial_value  = new OBJECT.ConfigurableValue( "initial_value", CHARACTERISTICS.INITIAL_VALUE, CHARACTERISTICS.INITIAL_VALUE );
        this.setKey( data[ "key" ] );
        this.setLabelProperty( data[ "label" ] );
        
        this.initial_value.addParamForEvents( "param__is_for", "initial_value" );
        this.race_bonus.addParamForEvents( "param__is_for", RACES.key_element );
        this.class_bonus.addParamForEvents( "param__is_for", CLASSES.key_element );
        this.computeFinalValue();
        
        this.children = new OBJECT.InterfaceContainer();
        this.children.add( this.final_value );
        this.children.add( this.modifier_value );
        this.children.add( this.race_bonus );
        this.children.add( this.class_bonus );
        this.children.add( this.initial_value );
    },
    //********************************************  EVENT LISTENER  *****************************************************//
    doActionAfter            : function ( event_name, params ) {
        switch ( event_name ) {
            case "event__ask_set_data":
                this.initial_value.updateData( params[ "param__set_data_value" ][ "initial_value" ] );
                this.race_bonus.updateData( params[ "param__set_data_value" ][ "race_bonus" ] );
                if ( this.race_bonus.isPhase( GS.OBJECT.CONST.PHASE.SETTINGS_EDITED ) ) {
                    params[ "param__is_for" ] = RACES.key_element;
                    params[ "param__characteristics__object" ].doActionAfter( "event__set_free_bonus_done", params );
                }
                this.class_bonus.updateData( params[ "param__set_data_value" ][ "class_bonus" ] );
                if ( this.class_bonus.isPhase( GS.OBJECT.CONST.PHASE.SETTINGS_EDITED ) ) {
                    params[ "param__is_for" ] = CLASSES.key_element;
                    params[ "param__characteristics__object" ].doActionAfter( "event__set_free_bonus_done", params );
                }
                this.computeFinalValue();
                return;
            case "event__ask_set_forced_value_1":
                this.getObjectForDoActionAfter( params ).doActionAfter( event_name, params );
                this.getObjectForDoActionAfter( params ).setValue( this.computeBonusDelta( params ) );
                this.getObjectForDoActionAfter( params ).setPhase( GS.OBJECT.CONST.PHASE.SETTINGS_FORCED );
                this.computeFinalValue();
                return;
            case "event__free_bonus_is_zero":
                this.getObjectForDoActionAfter( params ).setPhaseIfPhase( GS.OBJECT.CONST.PHASE.SETTINGS_EDITION_FULL, GS.OBJECT.CONST.PHASE.SETTINGS_TO_EDIT );
                return;
            case "event__set_forbidden_bonus":
                let object = this.getObjectForDoActionAfter( params );
                if ( !object.isPhase( GS.OBJECT.CONST.PHASE.SETTINGS_FORCED ) ) {
                    object.setPhaseOrPhase( GS.TOOLS.ARRAY.contains( params[ "param__choices_array" ], this.getUUID() ),
                        GS.OBJECT.CONST.PHASE.SETTINGS_TO_EDIT, GS.OBJECT.CONST.PHASE.SETTINGS_FORBIDDEN );
                }
                return;
            case "event__set_free_bonus":
                if ( this.getObjectForDoActionAfter( params ).isInPhase( [GS.OBJECT.CONST.PHASE.SETTINGS_FORCED, GS.OBJECT.CONST.PHASE.SETTINGS_FORBIDDEN, GS.OBJECT.CONST.PHASE.SETTINGS_EDITED] ) ) {
                    return;
                }
                this.getObjectForDoActionAfter( params ).setValue( 0 );
                this.getObjectForDoActionAfter( params ).setPhase( GS.OBJECT.CONST.PHASE.SETTINGS_TO_EDIT );
                this.computeFinalValue();
                return;
            case "event__reset_characteristics_bonuses":
                this.getObjectForDoActionAfter( params ).doActionAfter( "event__reset_bonuses" );
                return;
            case "unclean_all_free_race_settings":
                this.race_bonus.setPhaseIfPhase( GS.OBJECT.CONST.PHASE.SETTINGS_TO_EDIT, GS.OBJECT.CONST.PHASE.SETTINGS_EDITION_FULL );
                return;
            case "event__more_button":
                this.moreBonus( params );
                return;
            case "event__less_button":
                this.lessBonus( params );
                return;
        }
        CHARACTER.ComponentInterface.prototype.doActionAfter.call( this, event_name, params );
    },
    getObjectForDoActionAfter: function ( params ) {
        switch ( params[ "param__is_for" ] ) {
            case RACES.key_element:
                return this.race_bonus;
            case CLASSES.key_element:
                return this.class_bonus;
            case "initial_value":
                return this.initial_value;
        }
    },
    moreBonus                : function ( params ) {
        if ( params[ "param__is_for" ] === "initial_value" ) {
            this.initial_value.changeValue( 1 );
        }
        else {
            this.getObjectForDoActionAfter( params ).setValue( this.computeBonusDelta( params ) );
            this.getObjectForDoActionAfter( params ).setPhase( GS.OBJECT.CONST.PHASE.SETTINGS_EDITED );
            params[ "param__characteristics__object" ].doActionAfter( "event__set_free_bonus_done", params );
        }
        this.computeFinalValue();
    },
    lessBonus                : function ( params ) {
        if ( params[ "param__is_for" ] === "initial_value" ) {
            this.initial_value.changeValue( -1 );
        }
        else {
            this.getObjectForDoActionAfter( params ).setValue( 0 );
            this.getObjectForDoActionAfter( params ).setPhase( GS.OBJECT.CONST.PHASE.SETTINGS_TO_EDIT );
            params[ "param__characteristics__object" ].doActionAfter( "event__unset_object_bonuses", params );
        }
        this.computeFinalValue();
    },
    //********************************************  COMPUTE  **************************************************//
    computeFinalValue: function () {
        let computed_value = this.initial_value.value;
        if ( this.race_bonus.isSet() ) {
            computed_value += this.race_bonus.value;
        }
        if ( this.class_bonus.isSet() ) {
            computed_value += this.class_bonus.value;
        }
        this.final_value.setValue( computed_value );
        this.computeModifier();
    },
    computeModifier  : function () {
        let computed_value = Math.floor( (this.final_value.value - 10) / 2 );
        this.modifier_value.setValue( computed_value );
    },
    computeBonusDelta: function ( params ) {
        this.computeFinalValue();
        let to_return = this.final_value.value > 18 ? 1 : 2;
        if ( params[ "param__is_malus" ] ) {
            to_return = to_return * (-1);
        }
        return to_return;
    },
    //********************************************  GETTER SETTER  **************************************************//
    addParamForEvents: function ( key, value ) {
        this.addParamForEventsCommon( key, value );
        this.initial_value.addParamForEvents( key, value );
        this.race_bonus.addParamForEvents( key, value );
        this.class_bonus.addParamForEvents( key, value );
    },
    getModifierValue : function ( key, value ) {
        return this.modifier_value.value;
    },
    //********************************************  HTML   **************************************************//
    computeHtmlGeneralWindow   : function ( dom_element_parent ) {
        if ( this.dom_element_general ) {
            return;
        }
        this.dom_element_general = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-" + this.key } ), dom_element_parent );
        let div                  = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "characteristic", "data-name": this.key } ), this.dom_element_general );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "characteristic-label" }, this.label_property ), div );
        let div_2 = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "characteristic-values" } ), div );
        SERVICE.DOM.addElementTo( this.modifier_value.dom_element_general, div_2 );
        SERVICE.DOM.addElementTo( this.final_value.dom_element_general, div_2 );
    },
    computeCharacteristicWindow: function ( dom_element_parent ) {
        
        this.dom_element_characteristics = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "row characteristic-line", "data-name": this.getKey() } ), dom_element_parent );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-label" }, this.label_property ), this.dom_element_characteristics );
        var final_value = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-final-value" } ), this.dom_element_characteristics );
        SERVICE.DOM.addElementTo( this.final_value.dom_element_characteristics, final_value );
        
        var modifier_value = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-modifier-value" }, "" ), this.dom_element_characteristics );
        SERVICE.DOM.addElementTo( this.modifier_value.dom_element_characteristics, modifier_value );
        
        let initial_dom = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-initial-value" } ), this.dom_element_characteristics );
        SERVICE.DOM.addElementTo( this.initial_value.dom_element_characteristics, initial_dom );
        
        var bonus_race = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-bonus characteristic-bonus-race" } ), this.dom_element_characteristics );
        SERVICE.DOM.addElementTo( this.race_bonus.dom_element_characteristics, bonus_race );
        
        var bonus_class = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-bonus characteristic-bonus-class" } ), this.dom_element_characteristics );
        SERVICE.DOM.addElementTo( this.class_bonus.dom_element_characteristics, bonus_class );
        
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-bonus-niv5" }, "" ), this.dom_element_characteristics );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-bonus-niv10" }, "" ), this.dom_element_characteristics );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-bonus-niv15" }, "" ), this.dom_element_characteristics );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-bonus-niv20" }, "" ), this.dom_element_characteristics );
    }
};
SERVICE.CLASS.addPrototype( CHARACTERISTICS.Characteristic, CHARACTER.ComponentInterface );