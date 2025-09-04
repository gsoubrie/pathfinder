"use strict";
CHARACTERISTICS.Bonuses           = function () {
    this.init();
};
CHARACTERISTICS.Bonuses.prototype = {
    init        : function () {
        this.bonus = new CHARACTERISTICS.Bonus( true );
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
            case "event__ask_set_forced_value":
                this.bonus.doActionAfter( event_name, params );
                this.malus.doActionAfter( event_name, params );
                break;
            case "event__ask_compute_settable_value":
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

CHARACTERISTICS.Bonus           = function ( is_bonus ) {
    this.init( is_bonus );
};
CHARACTERISTICS.Bonus.prototype = {
    init        : function ( is_bonus ) {
        this.is_bonus    = !!is_bonus;
        this.number      = 0;
        this.number_free = 0;
        this.choices     = [];
    },
    initWithData: function ( data ) {
        if ( !data ) {
            return;
        }
        this.setNumber( data[ "number" ] );
        this.setChoices( data[ "choice" ] );
    },
    //********************************************  EVENT LISTENER  *****************************************************//
    doActionAfter      : function ( event_name, params ) {
        this.doActionAfterCommon( event_name, params );
    },
    doActionAfterCommon: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__ask_compute_settable_value":
                if ( this.number_free ) {
                    params[ "param__characteristics__object" ].doActionAfter( "event__set_free_bonus", params );
                }
                else {
                    params[ "param__choices_array" ] = this.choices;
                    params[ "param__characteristics__object" ].doActionAfter( "event__set_forbidden_bonus", params );
                }
                break;
            case "event__ask_set_forced_value":
                params[ "param__is_malus" ] = !this.is_bonus;
                if ( this.number === this.choices.length ) {
                    for ( let i = 0, _size_i = this.choices.length; i < _size_i; i++ ) {
                        if ( this.choices[ i ] !== "FREE" ) {
                            params[ "param__characteristics__object" ].getContentByUUID( this.choices[ i ] ).doActionAfter( "event__ask_set_forced_value_1", params );
                        }
                    }
                }
                else { //NORMALLY NO FREE THERE
                    params[ "param__choices_array" ] = this.choices;
                    params[ "param__characteristics__object" ].doActionAfter( "event__set_forbidden_bonus", params );
                    this.number_free = this.number;
                }
                break;
            case "event__set_free_bonus_done":
                this.setFreeNumber( this.number_free - 1 );
                if ( !this.number_free ) {
                    CONTROLLER.Character.doActionAfter( "event__free_bonus_is_zero", params );
                }
                break;
            case "event__unset_free_bonus_done":
                this.setFreeNumber( this.number_free + 1 );
                break;
        }
    },
    //********************************************  GETTER SETTER  *****************************************************//
    setFreeNumber: function ( to_set ) {
        this.number_free = to_set;
    },
    setNumber    : function ( to_set ) {
        this.number = to_set;
    },
    setChoices   : function ( to_set ) {
        this.choices     = to_set;
        this.number_free = this.choices.filter( item => item === "FREE" ).length;
    },
    //********************************************  HTML  *****************************************************//
    getHtml_forEditionPopUp: function () {
        let to_return = "";
        if ( this.number < this.choices.length ) {
            to_return += this.number + " parmi (";
            for ( let i = 0, _size_i = this.choices.length; i < _size_i; i++ ) {
                if ( i ) {
                    to_return += ", ";
                }
                to_return += this.choices[ i ];
            }
            to_return += ")";
        }
        else {
            for ( let i = 0, _size_i = this.choices.length; i < _size_i; i++ ) {
                if ( i ) {
                    to_return += ", ";
                }
                to_return += this.choices[ i ];
            }
        }
        return to_return;
    }
};