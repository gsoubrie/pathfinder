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
    },
    initCounterCommon         : function () {
        this.counters = {};
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS );
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
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
                params = { "characteristics_object" : this};
                this.race_bonus_wrapper.doActionAfter( event_name, params );
                break;
            case "set_race_bonuses":
                for ( let i = 0, _size_i = params["race_object"][ "characteristics_bonus" ].length; i < _size_i; i++ ) {
                    switch ( params["race_object"][ "characteristics_bonus" ][ i ] ) {
                        case "FREE":
                            this.doActionAfter( "set_free_race_bonus" );
                            this.race_bonus_wrapper.updateBonusCounter( 1 );
                            break;
                        default:
                            this.getContentByUUID( params["race_object"][ "characteristics_bonus" ][ i ] ).doActionAfter( "set_race_bonus", { "race_bonus_value": 2 } );
                    }
                }
                for ( let i = 0, _size_i = params["race_object"][ "characteristics_malus" ].length; i < _size_i; i++ ) {
                    this.getContentByUUID( params["race_object"][ "characteristics_malus" ][ i ] ).doActionAfter( "set_race_bonus", { "race_bonus_value": -2 } );
                }
                break;
            case "set_classes_bonuses":
                for ( let i = 0, _size_i = params["race_object"][ "characteristics_bonus" ].length; i < _size_i; i++ ) {
                    switch ( params["race_object"][ "characteristics_bonus" ][ i ] ) {
                        case "FREE":
                            this.doActionAfter( "set_free_race_bonus" );
                            this.race_bonus_wrapper.updateBonusCounter( 1 );
                            break;
                        default:
                            this.getContentByUUID( params["race_object"][ "characteristics_bonus" ][ i ] ).doActionAfter( "set_race_bonus", { "race_bonus_value": 2 } );
                    }
                }
                for ( let i = 0, _size_i = params["race_object"][ "characteristics_malus" ].length; i < _size_i; i++ ) {
                    this.getContentByUUID( params["race_object"][ "characteristics_malus" ][ i ] ).doActionAfter( "set_race_bonus", { "race_bonus_value": -2 } );
                }
                break;
        }
        this.doActionAfterCommon( event_name, params );
    },
    setData           : function ( key, value ) {
        switch ( key ) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
                this.getContentByUUID(value.name).updateData( value );
                if ( value.race_bonus ){
                    this.doActionAfter( "set_free_race_bonus_done" );
                }
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    },    
    //********************************************  GETTER SETTER  **************************************************//
};

SERVICE.CLASS.addPrototype( CHARACTERISTICS.Characteristics, OBJECT.InterfaceContainerHtml );
SERVICE.CLASS.addPrototype( CHARACTERISTICS.Characteristics, GS.OBJECT.CounterInterfaceV2 );
