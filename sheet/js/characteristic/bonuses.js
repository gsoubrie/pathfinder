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
                this._broadcastMalusPending( params );
                break;
            // L'historique vide ne distribue RIEN (garder set_object_bonuses
            // deployerait SETTINGS_FORBIDDEN sur toutes les cellules) : son
            // pool se reinitialise seul, sans toucher aux cellules
            case "event__reset_object_bonuses":
                this.bonus.initWithData();
                this.malus.initWithData();
                this._broadcastMalusPending( params );
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
            case "event__ask_place_free_malus":
                this.malus.doActionAfter( event_name, params );
                this._broadcastMalusPending( params );
                break;
            case "event__ask_compute_settable_value":
                this.bonus.doActionAfter( event_name, params );
                break;
            // Le geste rend la penalite libre placee : son retour au pool
            // credite le MALUS, le geste du bonus reste sur le pool du bonus
            case "event__set_free_bonus_done":
            case "event__unset_free_bonus_done":
                if ( params[ "param__is_malus" ] ) {
                    this.malus.doActionAfter( event_name, params );
                }
                else {
                    this.bonus.doActionAfter( event_name, params );
                }
                this._broadcastMalusPending( params );
                break;
        }
        this.computeCounters();
    },
    //********************************************  GETTER SETTER  *****************************************************//
    // Les cellules affichent l'attente de penalite par marqueur : le -
    // pose une penalite LIBRE seulement quand le pool en porte une
    _broadcastMalusPending : function ( params ) {
        params[ "param__malus_pending" ] = this.malus.getFreeNumber() > 0;
        params[ "param__characteristics__object" ].doActionAfter( "event__set_malus_pending", params );
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
        this.initContents();
        this.number      = 0;
        this.number_free = 0;
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
                        if ( !this.isFreeChoice( this.getContent( i ).getUUID() ) ) {
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
            // La penalite libre se pose depuis son pool : le pool vide
            // n'accepte rien, la caracteristique appelante se pose elle-meme
            case "event__ask_place_free_malus":
                if ( !this.number_free ) {
                    return;
                }
                this.setFreeNumber( this.number_free - 1 );
                params[ "param__characteristics__object" ].getContentByUUID( params[ "param__key" ] ).doActionAfter( "event__place_free_malus_1", params );
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
        // Un choix LIBRE peut se REPTER dans les donnees (les races
        // d'extension accordent DEUX primes libres) : le conteneur dedupe
        // par uuid, chaque placeholder libre porte donc sa propre identite
        // — le PREMIER garde la cle canonique FREE (le fallback des choix
        // interdits le cherche), les repetes prennent une cle positionnelle
        let number_free  = 0;
        let free_repeats = 0;
        for ( let i = 0, _size_i = to_set.length; i < _size_i; i++ ) {
            if ( to_set[ i ] !== CHARACTERISTICS.FREE.key ) {
                this.add( new CHARACTERISTICS.Characteristic( CHARACTERISTICS[ to_set[ i ] ] ) );
                continue;
            }
            number_free++;
            this.add( new CHARACTERISTICS.Characteristic( free_repeats === 0 ? CHARACTERISTICS.FREE : {
                "key"  : CHARACTERISTICS.FREE.key + "_" + free_repeats,
                "label": CHARACTERISTICS.FREE.label
            } ) );
            free_repeats++;
        }
        this.setFreeNumber( number_free );
    },
    // Un placeholder libre se reconnait a sa cle (FREE, FREE_1, ...) : les
    // repetes ne se forcent JAMAIS
    isFreeChoice : function ( choice_key ) {
        return choice_key === CHARACTERISTICS.FREE.key || choice_key.indexOf( CHARACTERISTICS.FREE.key + "_" ) === 0;
    },
    //********************************************  HTML  *****************************************************//
    computePopupDomElement: function ( params ) {
        this.dom_element_popup = SERVICE.DOM.createElement( "div", { class: "gs-characteristics-bonuses" } );
        let _is_unique_choice = this.number === 1 && this.getSize() === 1 && this.getContent( 0 ).getUUID() !== CHARACTERISTICS.FREE.key;
        if ( !params[ "param__hide_number_when_unique" ] || !_is_unique_choice ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "label" }, "Nombre de choix : " + this.number ), this.dom_element_popup );
        }

        params[ "param__dom_element_parent" ] = this.dom_element_popup;
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            this.getContent( i ).doActionAfter( "event__compute__html", params );
        }
    }
};
SERVICE.CLASS.addPrototype( CHARACTERISTICS.Bonus, CHARACTER.ContainerComponentInterface );
