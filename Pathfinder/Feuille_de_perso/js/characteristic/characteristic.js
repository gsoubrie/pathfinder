"use strict";
CHARACTERISTICS.Characteristic           = function ( data ) {
    this.init( data );
};
CHARACTERISTICS.Characteristic.prototype = {
    init: function ( data ) {
        this.initial_value  = new OBJECT.ConfigurableValue( 10, 10 );
        this.final_value    = new OBJECT.CalculatedValue();
        this.modifier_value = new OBJECT.CalculatedValue();
        this.race_bonus     = new OBJECT.ConfigurableValue( 0, "FREE" );
        this.class_bonus     = new OBJECT.ConfigurableValue( 0, "FREE" );
        this.initial_value.addParamForEvents( "initial_value_params", true );
        this.race_bonus.addParamForEvents( "race_bonus_params", true );
        this.updateData( data );
    },
    //********************************************  EVENT LISTENER  *****************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__set_race_bonus_forced":
                this.race_bonus.setValue( params[ "event__race_bonus_value" ] );
                this.race_bonus.setPhase( GS.OBJECT.CONST.PHASE.SETTINGS_FORCED );
                break;
            case "event__free_bonus_is_zero":
                switch ( params[ "params__original_event_name" ] ) {
                    case "events__set_free_race_bonus_done":
                        this.race_bonus.setPhaseIfPhase( GS.OBJECT.CONST.PHASE.SETTINGS_EDITION_FULL, GS.OBJECT.CONST.PHASE.SETTINGS_TO_EDIT );
                        break;
                }
                break;
            case "event__set_free_race_bonus":
                if ( this.race_bonus.isPhase( GS.OBJECT.CONST.PHASE.SETTINGS_FORCED ) ) {
                    return;
                }
                this.race_bonus.setValue( 0 );
                this.race_bonus.setPhase( GS.OBJECT.CONST.PHASE.SETTINGS_TO_EDIT );
                break;
            case "unclean_all_free_race_settings":
                this.race_bonus.setPhaseIfPhase( GS.OBJECT.CONST.PHASE.SETTINGS_TO_EDIT, GS.OBJECT.CONST.PHASE.SETTINGS_EDITION_FULL );
                break;
            case "click_on_button_V3":
                if ( params[ "race_bonus_params" ] ) {
                    switch ( params[ "button_name" ] ) {
                        case "more_button":
                            this.race_bonus.setValue( 2 );
                            this.race_bonus.setPhase( GS.OBJECT.CONST.PHASE.SETTINGS_EDITED );
                            params[ "params__characteristics_object" ].doActionAfter( "events__set_free_race_bonus_done", {"params__controller_object": CONTROLLER.Main, "params__original_event_name": "events__set_free_race_bonus_done"} );
                            break;
                        case "less_button":
                            this.race_bonus.setValue( 0 );
                            this.race_bonus.setPhase( GS.OBJECT.CONST.PHASE.SETTINGS_TO_EDIT );
                            params[ "params__characteristics_object" ].doActionAfter( "events__unset_free_race_bonus_done", {"params__original_event_name": "events__unset_free_race_bonus_done"} );
                            break;
                    }
                    this.computeFinalValue();
                    return;
                }
                if ( params[ "initial_value_params" ] ) {
                    switch ( params[ "button_name" ] ) {
                        case "more_button":
                            this.initial_value.changeValue( 1 );
                            break;
                        case "less_button":
                            this.initial_value.changeValue( -1 );
                            break;
                    }
                    this.computeFinalValue();
                    return;
                }
                break;
        }
        this.doActionAfterCommon( event_name, params );
    },
    //********************************************  COMPUTE  **************************************************//
    computeFinalValue: function () {
        let computed_value = this.initial_value.value;
        if ( this.race_bonus.isSet() ) {
            computed_value += this.race_bonus.value;
        }
        this.final_value.setValue( computed_value );
        this.computeModifier();
    },
    computeModifier  : function () {
        let computed_value = Math.floor( (this.final_value.value - 10) / 2 );
        this.modifier_value.setValue( computed_value );
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
    },
    //********************************************  DATA   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case "name":
                this.setName( value );
                break;
            case "label":
                this.setLabel( value );
                break;
            case "initial_value":
                this.initial_value.setValue( value );
                break;
            case "race_bonus":
                this.race_bonus.setValue( 2 );
                this.race_bonus.setPhase( GS.OBJECT.CONST.PHASE.SETTINGS_EDITED );
                break;
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
        let to_return       = {};
        to_return[ "name" ] = this.name;
        to_return[ "initial_value" ] = this.initial_value.value;
        if ( this.race_bonus.isPhase( GS.OBJECT.CONST.PHASE.SETTINGS_EDITED ) ){
            to_return[ "race_bonus" ] = GS.OBJECT.CONST.PHASE.SETTINGS_EDITED;    
        }        
        return to_return;
    }
};
SERVICE.CLASS.addPrototype( CHARACTERISTICS.Characteristic, OBJECT.InterfaceHtml );