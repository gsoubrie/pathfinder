"use strict";
/**
 * @class CHARACTERISTICS.ClassBonuses
 * @extends CHARACTERISTICS.Bonuses
 * @extends GS.OBJECT.CounterInterfaceV2
 */
CHARACTERISTICS.ClassBonuses           = function () {
    this.init();
};
CHARACTERISTICS.ClassBonuses.prototype = {
    //********************************************  EVENT LISTENER  *****************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__set_object_bonuses":
                params[ "param__is_for" ] = CLASSES.key_element;
                this.initWithData( params[ "event__class_object" ] );
                this.doActionAfter( "event__ask_set_forced_value", params );
                this.doActionAfter( "event__ask_compute_settable_value", params );
                break;
        }
        this.doActionAfterCommon( event_name, params );
        this.computeCounters();
    },
    //********************************************  COMPUTE  *****************************************************//
    computeCounters: function ( to_set ) {
        this.setCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS, "race_bonus", this.getFreeBonus() );
    }
};
SERVICE.CLASS.addPrototype( CHARACTERISTICS.ClassBonuses, CHARACTERISTICS.Bonuses );
SERVICE.CLASS.addPrototype( CHARACTERISTICS.ClassBonuses, GS.OBJECT.CounterInterfaceV2 );