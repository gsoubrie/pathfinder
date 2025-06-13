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
    doActionAfter     : function ( event_name, params ) {
        switch ( event_name ) {
            case "events__set_race_bonuses":
                this.initWithData( params[ "race_object" ] );
                for ( let i = 0, _size_i = this.bonus.choices.length; i < _size_i; i++ ) {
                    if ( this.bonus.choices[i] !== "FREE" ){
                        params["params__characteristics_object"].getContentByUUID(this.bonus.choices[i]).doActionAfter("event__set_race_bonus_forced", {"event__race_bonus_value" : 2});
                    }
                }
                for ( let i = 0, _size_i = this.malus.choices.length; i < _size_i; i++ ) {
                    params["params__characteristics_object"].getContentByUUID(this.malus.choices[i]).doActionAfter("event__set_race_bonus_forced", {"event__race_bonus_value" : -2});
                }
                if ( this.getFreeBonus() ){
                    params["params__characteristics_object"].doActionAfter("event__set_free_race_bonus", {});
                }
                break;
            //case "events__unset_free_race_bonus_done":
            //    this.updateBonusCounter( 1 );
            //    params[ "params__characteristics_object" ].doActionAfter( "unclean_all_free_race_settings" );
            //    break;
        }
        this.doActionAfterCommon(event_name, params);
    }
};
SERVICE.CLASS.addPrototype( CHARACTERISTICS.RaceBonuses, CHARACTERISTICS.Bonuses );
SERVICE.CLASS.addPrototype( CHARACTERISTICS.RaceBonuses, GS.OBJECT.CounterInterfaceV2 );