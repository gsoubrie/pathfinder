"use strict";
/**
 * @class CHARACTERISTICS.Characteristic
 * @extends OBJECT.InterfaceHtml
 */
CHARACTERISTICS.Characteristic = function ( data ) {
    this.init( data );
};
CHARACTERISTICS.Characteristic.prototype = {
    init: function ( data ) {
        this.initial_value  = new OBJECT.ConfigurableValue( CHARACTERISTICS.INITIAL_VALUE, CHARACTERISTICS.INITIAL_VALUE );
        this.final_value    = new OBJECT.CalculatedValue();
        this.modifier_value = new OBJECT.CalculatedValue();
        this.race_bonus     = new OBJECT.ConfigurableValue( 0, "FREE" );
        this.class_bonus    = new OBJECT.ConfigurableValue( 0, "FREE" );
        this.initial_value.addParamForEvents( "param__is_for", "initial_value" );
        this.race_bonus.addParamForEvents( "param__is_for", RACES.key_element );
        this.class_bonus.addParamForEvents( "param__is_for", CLASSES.key_element );
        this.updateData( data );
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
        this.doActionAfterCommon( event_name, params );
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
    setName          : function ( to_set ) {
        this.name = to_set;
        this.addParamForEvents( "characteristic_param", this.name );
    },
    setLabel         : function ( to_set ) {
        this.label = to_set;
    },
    getUUID          : function () {
        return this.getName();
    },
    addParamForEvents: function ( key, value ) {
        this.addParamForEventsCommon( key, value );
        this.initial_value.addParamForEvents( key, value );
        this.race_bonus.addParamForEvents( key, value );
        this.class_bonus.addParamForEvents( key, value );
    },
    getModifierValue: function ( key, value ) {
        return this.modifier_value.value;
    },
    //********************************************  DATA   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case "name":
                this.setName( value );
                return;
            case "label":
                this.setLabel( value );
                return;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    },
    //********************************************  HTML   **************************************************//
    computeHtml: function ( to_set ) {
        this.computeFinalValue();
        this.race_bonus.computeHtml();
        this.class_bonus.computeHtml();
        this.initial_value.computeHtml();
        this.final_value.computeHtml();
        this.modifier_value.computeHtml();
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        let to_return                = {};
        to_return[ "name" ]          = this.name;
        to_return[ "initial_value" ] = this.initial_value.getDataToSave();
        to_return[ "race_bonus" ]    = this.race_bonus.getDataToSave();
        to_return[ "class_bonus" ]   = this.class_bonus.getDataToSave();
        return to_return;
    }
};
SERVICE.CLASS.addPrototype( CHARACTERISTICS.Characteristic, OBJECT.InterfaceHtml );