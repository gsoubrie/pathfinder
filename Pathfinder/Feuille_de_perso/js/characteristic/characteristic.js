"use strict";
CHARACTERISTICS.Characteristic           = function ( data ) {
    this.init( data );
};
CHARACTERISTICS.Characteristic.prototype = {
    init: function ( data ) {
        this.initial_value = new OBJECT.ConfigurableValue( 10, 10 );
        this.final_value   = new OBJECT.CalculatedValue();
        this.race_bonus    = new OBJECT.ConfigurableValue( 0, "FREE" );
        this.race_bonus.addParamForEvents( "race_bonus_params", true );
        this.updateData( data );
    },
    //********************************************  EVENT LISTENER  *****************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "set_race_bonus":
                this.race_bonus.setValue( params[ "race_bonus_value" ] );
                this.race_bonus.setPhase( GS.OBJECT.CONST.PHASE.SETTINGS_FORCED );
                break;
            case "set_free_race_bonus":
                if ( this.race_bonus.isPhase( GS.OBJECT.CONST.PHASE.SETTINGS_FORCED ) ) {
                    return;
                }
                this.race_bonus.setValue( 0 );
                this.race_bonus.setPhase( GS.OBJECT.CONST.PHASE.SETTINGS_TO_EDIT );
                break;
            case "clean_all_free_race_settings":
                this.race_bonus.setPhaseIfPhase( GS.OBJECT.CONST.PHASE.SETTINGS_EDITION_FULL, GS.OBJECT.CONST.PHASE.SETTINGS_TO_EDIT );
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
                            this.computeFinalValue();
                            params[ "characteristics_object" ].doActionAfter( "set_free_race_bonus_done" );
                            break;
                        case "less_button":
                            this.race_bonus.setValue( 0 );
                            this.race_bonus.setPhase( GS.OBJECT.CONST.PHASE.SETTINGS_TO_EDIT );
                            this.computeFinalValue();
                            params[ "characteristics_object" ].doActionAfter( "unset_free_race_bonus_done" );
                            break;
                    }
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
        }
    },
    //********************************************  HTML   **************************************************//
    computeHtml: function ( to_set ) {
        this.computeFinalValue();
        this.race_bonus.computeHtml();
        this.initial_value.computeHtml();
        this.final_value.computeHtml();
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        let to_return       = {};
        to_return[ "name" ] = this.name;
        return to_return;
    }
};
SERVICE.CLASS.addPrototype( CHARACTERISTICS.Characteristic, OBJECT.InterfaceHtml );