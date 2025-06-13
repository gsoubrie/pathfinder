"use strict";
CHARACTERISTICS.Characteristics           = function () {
    this.init();
};
CHARACTERISTICS.Characteristics.prototype = {
    init             : function () {
        this.initContents();
        this.initCounterCommon();
        for ( let i = 0, _size_i = CHARACTERISTICS.ENUM.length; i < _size_i; i++ ) {
            this.add( new CHARACTERISTICS.Characteristic( CHARACTERISTICS.ENUM[ i ] ) );
        }
        this.addParamForEvents( "characteristics_param", true );
    },
    initCounterCommon: function () {
        this.counters = {};
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS );
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "click_on_button_V3":
                if ( params[ "characteristic_param" ] ) {
                    params[ "params__characteristics_object" ] = this;
                    this.getContentByUUID( params[ "characteristic_param" ] ).doActionAfter( event_name, params );
                    return;
                }
                break;
            case "events__set_race_bonuses":
                params[ "params__characteristics_object" ] = this;
                this.getRaceBonus().doActionAfter( event_name, params );
                return;
            case "events__unset_free_race_bonus_done":
                this.getRaceBonus().doActionAfter( "event__unset_free_bonus_done", params );
                this.doActionAfter("event__set_free_race_bonus", {});
                break;
            case "events__set_free_race_bonus_done":
                this.getRaceBonus().doActionAfter( "event__set_free_bonus_done", params );
                break;
            case "events__set_classes_bonuses":
                break;
        }
        this.doActionAfterCommon( event_name, params );
    },
    setData      : function ( key, value ) {
        switch ( key ) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
                this.getContentByUUID( value.name ).updateData( value );
                if ( value.race_bonus ) {
                    this.doActionAfter( "events__set_free_race_bonus_done", { "params__controller_object": CONTROLLER.Main, "params__original_event_name": "events__set_free_race_bonus_done" } );
                }
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    getRaceBonus: function ( key, value ) {
        if ( !this.race_bonus ) {
            this.race_bonus = new CHARACTERISTICS.RaceBonuses();
            this.race_bonus.setCountersParent( this );
        }
        return this.race_bonus;
    }
};

SERVICE.CLASS.addPrototype( CHARACTERISTICS.Characteristics, OBJECT.InterfaceContainerHtml );
SERVICE.CLASS.addPrototype( CHARACTERISTICS.Characteristics, GS.OBJECT.CounterInterfaceV2 );
