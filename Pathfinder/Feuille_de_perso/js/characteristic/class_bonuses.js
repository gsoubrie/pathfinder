"use strict";
CHARACTERISTICS.ClassBonuses           = function () {
    this.initSpecific();
};
CHARACTERISTICS.ClassBonuses.prototype = {
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
    doActionAfter     : function ( event_name, params ) {
        console.log(event_name,params);
        switch ( event_name ) {
            case "event__set_classes_bonuses":
                this.initWithData( params[ "class_object" ] );
                break;
        }
        this.doActionAfterCommon(event_name, params);
        this.computeCounters();
    },
      //********************************************  COMPUTE  *****************************************************//
    computeCounters       : function ( to_set ) {
            this.setCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS, "race_bonus", this.getFreeBonus() );
    },
};
SERVICE.CLASS.addPrototype( CHARACTERISTICS.ClassBonuses, CHARACTERISTICS.Bonuses );
SERVICE.CLASS.addPrototype( CHARACTERISTICS.ClassBonuses, GS.OBJECT.CounterInterfaceV2 );