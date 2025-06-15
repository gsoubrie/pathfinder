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
            case "events__set_classes_bonuses":
                this.initWithData( params[ "class_object" ] );
                for ( let i = 0, _size_i = this.bonus.choices.length; i < _size_i; i++ ) {
                    if ( this.bonus.choices[i] !== "FREE" ){
                        params["params__characteristics_object"].getContentByUUID(this.bonus.choices[i]).doActionAfter("event__set_race_bonus_forced", {"event__race_bonus_value" : 2});
                    }
                }
                if ( this.getFreeBonus() ){
                    params["params__characteristics_object"].doActionAfter("event__set_free_race_bonus", {});
                }
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