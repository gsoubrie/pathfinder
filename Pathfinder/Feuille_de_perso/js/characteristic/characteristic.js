"use strict";
CHARACTERISTICS.Characteristic           = function ( data ) {
    this.init( data );
};
CHARACTERISTICS.Characteristic.prototype = {
    init: function ( data ) {
        this.initial_value = new OBJECT.ConfigurableValue( 10, "ROLL_DICE" );
        this.final_value   = new OBJECT.CalculatedValue();
        this.race_bonus    = new OBJECT.ConfigurableValue( 0, "FREE" );
        this.race_bonus.addParamForEvents( "race_bonus_params", true );
        this.updateData( data );
    },
    //********************************************  EVENT LISTENER  *****************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "set_free_race_bonus":
                this.setRaceBonus( "FREE" );
                break;
            case "click_on_button_V3":
                if ( params[ "race_bonus_params" ] ) {
                    this.setRaceBonus( "2" );
                    return;
                }
                break;
        }
        this.doActionAfterCommon( event_name, params );
    },
    //********************************************  COMPUTE  **************************************************//
    computeFinalValue: function () {
        this.final_value.setValue( this.initial_value.value + this.race_bonus.value );
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
    setRaceBonus     : function ( to_set ) {
        this.race_bonus.setValue( to_set );
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
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        let to_return       = {};
        to_return[ "name" ] = this.name;
        return to_return;
    }
};
SERVICE.CLASS.addPrototype( CHARACTERISTICS.Characteristic, OBJECT.InterfaceHtml );