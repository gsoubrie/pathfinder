"use strict";
CHARACTERISTICS.Characteristics           = function () {
    this.init();
};
CHARACTERISTICS.Characteristics.prototype = {
    init: function () {
        this.initContents();
        this.initCounterCommon();
        this.race_bonus_wrapper = new CHARACTERISTICS.RaceBonuses();
        this.race_bonus_wrapper.setCountersParent( this );
        for ( let i = 0, _size_i = CHARACTERISTICS.ENUM.length; i < _size_i; i++ ) {
            let to_add = this.add( new CHARACTERISTICS.Characteristic( CHARACTERISTICS.ENUM[ i ] ) );
        }
        this.addParamForEvents( "characteristics_param", true );
        this.setCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS, this.getObjectClassName(), 2 );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "click_on_button_V3":
                if ( params[ "characteristic_param" ] ) {
                    params[ "characteristics_object" ] = this;
                    this.getContentByUUID( params[ "characteristic_param" ] ).doActionAfter( event_name, params );
                    return;
                }
                break;
            case "set_free_race_bonus_done":
            case "unset_free_race_bonus_done":
                params[ "characteristics_object" ] = this;
                this.race_bonus_wrapper.doActionAfter( event_name, params );
                break;
        }
        this.doActionAfterCommon( event_name, params );
    },
    //********************************************  GETTER SETTER  **************************************************//
    setDataFromRace: function ( race ) {
        for ( let i = 0, _size_i = race[ "characteristics_bonus" ].length; i < _size_i; i++ ) {
            switch ( race[ "characteristics_bonus" ][ i ] ) {
                case "FREE":
                    this.doActionAfter( "set_free_race_bonus" );
                    this.setFreeRaceBonus( this.free_counter + 1 );
                    break;
                default:
                    this.getContentByUUID( race[ "characteristics_bonus" ][ i ] ).doActionAfter( "set_race_bonus", { "race_bonus_value": 2 } );
            }
        }
        for ( let i = 0, _size_i = race[ "characteristics_malus" ].length; i < _size_i; i++ ) {
            this.getContentByUUID( race[ "characteristics_malus" ][ i ] ).doActionAfter( "set_race_bonus", { "race_bonus_value": -2 } );
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTERISTICS.Characteristics, OBJECT.InterfaceContainerHtml );
SERVICE.CLASS.addPrototype( CHARACTERISTICS.Characteristics, GS.OBJECT.CounterInterfaceV2 );
