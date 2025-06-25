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
    doActionAfter            : function ( event_name, params ) {
        switch ( event_name ) {
            case "click_on_button_V3":
                if ( params[ "characteristic_param" ] ) {
                    params[ "param__characteristics_object" ] = this;
                    this.getContentByUUID( params[ "characteristic_param" ] ).doActionAfter( event_name, params );
                    return;
                }
                break;
            case "event__set_object_bonuses":
                params[ "param__characteristics_object" ] = this;
                this.getObjectForDoActionAfter( event_name, params ).doActionAfter( event_name, params );
                return;
            case "event__unset_object_bonuses":
                params[ "param__characteristics_object" ] = this;
                this.getObjectForDoActionAfter( event_name, params ).doActionAfter( "event__unset_free_bonus_done", params );
                this.doActionAfter( "event__set_free_bonus", params );
                break;
            case "event__set_free_bonus_done":
                this.getObjectForDoActionAfter( event_name, params ).doActionAfter( "event__set_free_bonus_done", params );
                break;
        }
        this.doActionAfterCommon( event_name, params );
    },
    getObjectForDoActionAfter: function ( event_name, params ) {
        switch ( params[ "param__is_for" ] ) {
            case "race":
                return this.getRaceBonus();
            case "class":
                return this.getClassBonus();
        }
    },
    setData                  : function ( key, value ) {
        switch ( key ) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
                this.getContentByUUID( value.name ).doActionAfter( "event__ask_set_data", { "param__characteristics_object": this, "param__set_data_value": value } );
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    getRaceBonus : function ( key, value ) {
        if ( !this.race_bonus ) {
            this.race_bonus = new CHARACTERISTICS.RaceBonuses();
            this.race_bonus.setCountersParent( this );
        }
        return this.race_bonus;
    },
    getClassBonus: function ( key, value ) {
        if ( !this.class_bonus ) {
            this.class_bonus = new CHARACTERISTICS.ClassBonuses();
            this.class_bonus.setCountersParent( this );
        }
        return this.class_bonus;
    }
};

SERVICE.CLASS.addPrototype( CHARACTERISTICS.Characteristics, OBJECT.InterfaceContainerHtml );
SERVICE.CLASS.addPrototype( CHARACTERISTICS.Characteristics, GS.OBJECT.CounterInterfaceV2 );
