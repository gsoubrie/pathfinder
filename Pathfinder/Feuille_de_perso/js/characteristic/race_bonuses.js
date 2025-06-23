"use strict";
CHARACTERISTICS.RaceBonuses           = function () {
    this.initSpecific();
};
CHARACTERISTICS.RaceBonuses.prototype = {
    initSpecific     : function () {
        this.initCounterCommon();
        this.init();
    },
    initCounterCommon: function () {
        this.counters = {};
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS );
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
    },
    //********************************************  EVENT LISTENER  *****************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__set_object_bonuses":
                params[ "params__is_for" ] =  "race";
                this.initWithData( params[ "event__race_object" ] );
                this.doActionAfter( "event__ask_set_forced_value", params );
                this.doActionAfter( "event__ask_compute_settable_value", params );
                break;
        }
        this.doActionAfterCommon( event_name, params );
        this.computeCounters();
    },
    //********************************************  COMPUTE  *****************************************************//
    computeCounters: function () {
        console.error("GSOU", "[RaceBonuses - computeCounters]", this.getFreeBonus() );
        this.setCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS, "race_bonus", this.getFreeBonus() );
    }
};
SERVICE.CLASS.addPrototype( CHARACTERISTICS.RaceBonuses, CHARACTERISTICS.Bonuses );
SERVICE.CLASS.addPrototype( CHARACTERISTICS.RaceBonuses, GS.OBJECT.CounterInterfaceV2 );