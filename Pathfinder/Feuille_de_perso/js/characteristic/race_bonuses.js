"use strict";
CHARACTERISTICS.RaceBonuses           = function () {
    this.init();
};
CHARACTERISTICS.RaceBonuses.prototype = {
    init: function () {
        this.initCounterCommon();
        this.number_of_races_bonuses = 0;
    },
    //********************************************  EVENT LISTENER  *****************************************************//
    doActionAfter  : function ( event_name, params ) {
        switch ( event_name ) {
            case "set_free_race_bonus_done":
                this.setBonusCounter( this.number_of_races_bonuses - 1 );
                if ( !this.number_of_races_bonuses ) {
                    params[ "characteristics_object" ].doActionAfter( "clean_all_free_race_settings" );
                }
                break;
            case "unset_free_race_bonus_done":
                this.setBonusCounter( this.number_of_races_bonuses + 1 );
                params[ "characteristics_object" ].doActionAfter( "unclean_all_free_race_settings" );
                break;
        }
    },
    setBonusCounter: function ( to_set ) {
        this.number_of_races_bonuses = to_set;
        this.setCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS, "race_bonus", this.number_of_races_bonuses );
    }
};
SERVICE.CLASS.addPrototype( CHARACTERISTICS.RaceBonuses, GS.OBJECT.CounterInterfaceV2 );