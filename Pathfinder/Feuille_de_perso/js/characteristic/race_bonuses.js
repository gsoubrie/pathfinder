"use strict";
CHARACTERISTICS.RaceBonuses           = function () {
    this.init();
};
CHARACTERISTICS.RaceBonuses.prototype = {
    init: function () {
        this.initCounterCommon();
        this.number_of_races_bonuses = 0;
    },
    initCounterCommon         : function () {
        this.counters = {};
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS );
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
    },
    //********************************************  EVENT LISTENER  *****************************************************//
    doActionAfter  : function ( event_name, params ) {
        switch ( event_name ) {
            case "set_free_race_bonus_done":
                this.updateBonusCounter( -1 );
                if ( !this.number_of_races_bonuses ) {
                    params[ "characteristics_object" ].doActionAfter( "clean_all_free_race_settings" );
                }
                break;
            case "unset_free_race_bonus_done":
                this.updateBonusCounter( 1 );
                params[ "characteristics_object" ].doActionAfter( "unclean_all_free_race_settings" );
                break;
        }
    },
    updateBonusCounter: function ( delta ) {
        this.setBonusCounter(this.number_of_races_bonuses + delta);
    },
    setBonusCounter: function ( to_set ) {
        this.number_of_races_bonuses = to_set;
        this.setCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS, "race_bonus", this.number_of_races_bonuses );
    }
};
SERVICE.CLASS.addPrototype( CHARACTERISTICS.RaceBonuses, GS.OBJECT.CounterInterfaceV2 );