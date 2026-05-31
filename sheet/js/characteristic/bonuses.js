"use strict";
/**
 * @class CHARACTERISTICS.Bonuses
 * @extends GS.OBJECT.CounterInterfaceV2
 */
CHARACTERISTICS.Bonuses = function ( key_name, parent_object ) {
    this.init( key_name, parent_object );
};
CHARACTERISTICS.Bonuses.prototype = {
    init             : function ( key_name, parent_object ) {
        this.initCounterCommon();
        this.key_name = key_name;
        this.bonus    = new CHARACTERISTICS.Bonus( true );
        this.malus    = new CHARACTERISTICS.Bonus();
        this.setCountersParent( parent_object );
    },
    initCounterCommon: function () {
        this.counters = {};
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS );
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
    },
    initWithData     : function ( data ) {
        if ( !data ) {
            return;
        }
        this.bonus.initWithData( data[ "characteristics_bonus" ] );
        this.malus.initWithData( data[ "characteristics_malus" ] );
    },
    //********************************************  EVENT LISTENER  *****************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__set_object_bonuses":
                this.initWithData( params[ "param__current__object" ] );
                this.doActionAfter( "event__ask_set_forced_value", params );
                this.doActionAfter( "event__ask_compute_settable_value", params );
                break;
            case "event__compute__html":
                switch ( params[ "param__window" ] ) {
                    case "param__popup__select":
                        this.computePopupDomElement( params[ "param__dom_element_parent" ] );
                        return;
                }
                break;
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
        this.computeCounters();
    },
    //********************************************  GETTER SETTER  *****************************************************//
    computeCounters: function () {
        this.setCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS, this.key_name, this.bonus.getFreeNumber() );
    }
};
SERVICE.CLASS.addPrototype( CHARACTERISTICS.Bonuses, GS.OBJECT.CounterInterfaceV2 );

/**
 * @class CHARACTERISTICS.Bonus
 */
CHARACTERISTICS.Bonus = function ( is_bonus ) {
    this.init( is_bonus );
};
CHARACTERISTICS.Bonus.prototype = {
    init        : function ( is_bonus ) {
        this.initContents();
        this.is_bonus    = !!is_bonus;
        this.number      = 0;
        this.number_free = 0;
    },
    initWithData: function ( data ) {
        if ( !data ) {
            return;
        }
        this.setNumber( data[ "number" ] );
        this.setChoices( data[ "choice" ] );
    },
    //********************************************  EVENT LISTENER  *****************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__ask_compute_settable_value":
                if ( this.number_free ) {
                    params[ "param__characteristics__object" ].doActionAfter( "event__set_free_bonus", params );
                }
                else {
                    params[ "param__bonuses__object" ] = this;
                    params[ "param__characteristics__object" ].doActionAfter( "event__set_forbidden_bonus", params );
                }
                return;
            case "event__ask_set_forced_value":
                params[ "param__is_malus" ] = !this.is_bonus;
                if ( this.number === this.getSize() ) {
                    for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
                        if ( this.getContent( i ).getUUID() !== CHARACTERISTICS.FREE.key ) {
                            params[ "param__characteristics__object" ].getContentByUUID( this.getContent( i ).getUUID() ).doActionAfter( "event__ask_set_forced_value_1", params );
                        }
                    }
                }
                else {
                    params[ "param__bonuses__object" ] = this;
                    params[ "param__characteristics__object" ].doActionAfter( "event__set_forbidden_bonus", params );
                    this.setFreeNumber( this.number );
                }
                return;
            case "event__set_free_bonus_done":
                this.setFreeNumber( this.number_free - 1 );
                if ( !this.number_free ) {
                    CONTROLLER.Character.doActionAfter( "event__free_bonus_is_zero", params );
                }
                return;
            case "event__unset_free_bonus_done":
                this.setFreeNumber( this.number_free + 1 );
                return;
        }
        CHARACTER.ContainerComponentInterface.prototype.doActionAfter.call( this, event_name, params );
    },
    //********************************************  GETTER SETTER  *****************************************************//
    isSet        : function () {
        return true;
    },
    getFreeNumber: function ( to_set ) {
        return this.number_free;
    },
    setFreeNumber: function ( to_set ) {
        this.number_free = to_set;
    },
    setNumber    : function ( to_set ) {
        this.number = to_set;
    },
    setChoices   : function ( to_set ) {
        let number_free = 0;
        for ( let i = 0, _size_i = to_set.length; i < _size_i; i++ ) {
            this.add( new CHARACTERISTICS.Characteristic( CHARACTERISTICS[ to_set[ i ] ] ) );
            if ( to_set[ i ] === CHARACTERISTICS.FREE.key ) {
                number_free++;
            }
        }
        this.setFreeNumber(number_free);
    },
    //********************************************  HTML  *****************************************************//
    computePopupDomElement: function ( params ) {
        this.dom_element_popup = SERVICE.DOM.createElement( "div", { class: "gs-characteristics-bonuses" } );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "label" }, "Nombre de choix : " + this.number ), this.dom_element_popup );
        
        params[ "param__dom_element_parent" ] = this.dom_element_popup;
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            this.getContent( i ).doActionAfter( "event__compute__html", params );
        }
    }
};
SERVICE.CLASS.addPrototype( CHARACTERISTICS.Bonus, CHARACTER.ContainerComponentInterface );
