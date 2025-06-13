"use strict";
CHARACTERISTICS.Bonuses           = function () {
    this.init();
};
CHARACTERISTICS.Bonuses.prototype = {
    init        : function () {
        this.bonus = new CHARACTERISTICS.Bonus();
        this.malus = new CHARACTERISTICS.Bonus();
    },
    initWithData: function ( data ) {
        this.bonus.initWithData( data[ "characteristics_bonus" ] );
        this.malus.initWithData( data[ "characteristics_malus" ] );
    },
    //********************************************  EVENT LISTENER  *****************************************************//
    doActionAfter      : function ( event_name, params ) {
        this.doActionAfterCommon( event_name, params );
    },
    doActionAfterCommon: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__set_free_bonus_done":
            case "event__unset_free_bonus_done":
                this.bonus.doActionAfter( event_name, params );
                break;
        }
    },
    //********************************************  GETTER SETTER  *****************************************************//
    getFreeBonus: function () {
        return this.bonus.number_free;
    }
};

CHARACTERISTICS.Bonus           = function () {
    this.init();
};
CHARACTERISTICS.Bonus.prototype = {
    init        : function () {
        this.number      = 0;
        this.number_free = 0;
        this.choices     = [];
    },
    initWithData: function ( data ) {
        this.setNumber( data[ "number" ] );
        this.setChoices( data[ "choice" ] );
    },
    //********************************************  EVENT LISTENER  *****************************************************//
    //********************************************  EVENT LISTENER  *****************************************************//
    doActionAfter      : function ( event_name, params ) {
        this.doActionAfterCommon( event_name, params );
    },
    doActionAfterCommon: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__set_free_bonus_done":
                this.number_free--;
                if ( !this.number_free ) {
                    params[ "params__controller_object" ].doActionAfter( "event__free_bonus_is_zero", params );
                }
                break;
            case "event__unset_free_bonus_done":
                this.number_free++;
                break;
        }
    },
    //********************************************  GETTER SETTER  *****************************************************//
    updateFreeBonusCounter: function ( delta ) {
        this.setBonusCounter( this.number_free + delta );
    },
    setBonusCounter       : function ( to_set ) {
        this.number = to_set;
        //this.setCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS, "race_bonus", this.number_of_races_bonuses );
    },
    setNumber             : function ( to_set ) {
        this.number = to_set;
    },
    setChoices            : function ( to_set ) {
        this.choices     = to_set;
        this.number_free = this.choices.filter( item => item === "FREE" ).length;
    }
};