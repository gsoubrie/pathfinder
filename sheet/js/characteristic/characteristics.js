"use strict";
/**
 * @class CHARACTERISTICS.Characteristics
 * @extends CHARACTER.ContainerComponentInterface
 * @extends GS.OBJECT.CounterInterfaceV2
 */
CHARACTERISTICS.Characteristics = function () {
    this.init();
};
CHARACTERISTICS.Characteristics.prototype = {
    init             : function () {
        this.key = CHARACTERISTICS.key;
        CHARACTER.ContainerComponentInterface.prototype.init.call( this );
        this.initCounterCommon();
        this.race_bonus     = new CHARACTERISTICS.Bonuses( "race_bonus", this );
        this.historic_bonus = new CHARACTERISTICS.Bonuses( "historic_bonus", this );
        this.class_bonus    = new CHARACTERISTICS.Bonuses( "class_bonus", this );
        this.level1_bonus   = new CHARACTERISTICS.Bonuses( "level1_bonus", this );
        for ( let i = 0, _size_i = CHARACTERISTICS.ENUM.length; i < _size_i; i++ ) {
            this.add( new CHARACTERISTICS.Characteristic( CHARACTERISTICS.ENUM[ i ] ) );
        }
        this.addParamForEvents( "param__characteristics__is", true );
        // PF2 : les boosts de creation appartiennent a TOUT personnage,
        // aucune condition — le pool se distribue des la construction
        this.doActionAfter( "event__set_object_bonuses", {
            "param__current__object": CHARACTERISTICS.CREATION_BONUS_DATA,
            "param__is_for"         : CHARACTERISTICS.creation_key
        } );
    },
    initCounterCommon: function () {
        this.counters = {};
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS );
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter            : function ( event_name, params ) {
        switch ( event_name ) {
            case "event__more_button":
            case "event__less_button":
                params[ "param__characteristics__object" ] = this;
                this.getContentByUUID( params[ "param__key" ] ).doActionAfter( event_name, params );
                return;
            case "event__set_object_bonuses":
                params[ "param__characteristics__object" ] = this;
                this.getObjectForDoActionAfter( event_name, params ).doActionAfter( event_name, params );
                return;
            case "event__reset_object_bonuses":
                params[ "param__characteristics__object" ] = this;
                this.getObjectForDoActionAfter( event_name, params ).doActionAfter( event_name, params );
                return;
            case "event__ask_place_free_malus":
                params[ "param__characteristics__object" ] = this;
                this.getObjectForDoActionAfter( event_name, params ).doActionAfter( event_name, params );
                return;
            // Les ajustements de bonus de caractéristique se consomment ici :
            // le compte par clé redescend a chaque ligne, sa cellule Autre
            // affiche le delta et la valeur finale suit
            case "event__adjustments__changed": {
                let _boost_by_key = {};
                let _entries      = params[ "param__current_character__object" ].getAdjustments().getEntriesByKind( "characteristic_boost" );
                for ( let e = 0, _size_e = _entries.length; e < _size_e; e++ ) {
                    let _key = CHARACTERISTICS.getKeyByLabel( _entries[ e ].value );
                    if ( _key ) {
                        _boost_by_key[ _key ] = ( _boost_by_key[ _key ] || 0 ) + 1;
                    }
                }
                for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
                    this.getContent( i ).doActionAfter( "event__set_adjustment_boost", {
                        "param__adjustment_boost": _boost_by_key[ this.getContent( i ).getKey() ] || 0
                    } );
                }
                return;
            }
            case "event__unset_object_bonuses":
                params[ "param__characteristics__object" ] = this;
                this.getObjectForDoActionAfter( event_name, params ).doActionAfter( "event__unset_free_bonus_done", params );
                this.doActionAfter( "event__set_free_bonus", params );
                break;
            case "event__set_free_bonus_done":
                this.getObjectForDoActionAfter( event_name, params ).doActionAfter( "event__set_free_bonus_done", params );
                break;
        }
        CHARACTER.ContainerComponentInterface.prototype.doActionAfter.call( this, event_name, params );
    },
    getObjectForDoActionAfter: function ( event_name, params ) {
        switch ( params[ "param__is_for" ] ) {
            case RACES.key_element:
                return this.getRaceBonus();
            case HISTORICS.key_element:
                return this.getHistoricBonus();
            case CLASSES.key_element:
                return this.getClassBonus();
            case CHARACTERISTICS.creation_key:
                return this.getLevel1Bonus();
        }
    },
    setData                  : function ( key, value ) {
        if ( this.getMappingIndex( key ) !== undefined ) {
            this.getContentByUUID( key ).doActionAfter( "event__ask_set_data", { "param__characteristics__object": this, "param__set_data_value": value } );
            return;
        }
        switch ( key ) {
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    getRaceBonus : function () {
        return this.race_bonus;
    },
    getHistoricBonus : function () {
        return this.historic_bonus;
    },
    getClassBonus: function () {
        return this.class_bonus;
    },
    getLevel1Bonus: function () {
        return this.level1_bonus;
    },
    getUUID      : function () {
        return "CHARACTERISTICS.Characteristics";
    },
    //********************************************  HTML  **************************************************//
    computeCharacteristicWindow: function ( dom_element_parent ) {
        this.dom_element_characteristic_window = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "window-container" } ), dom_element_parent );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "title-page" }, CHARACTERISTICS.label ), this.dom_element_characteristic_window );
        this.characteristic_table = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "characteristic-table" } ), this.dom_element_characteristic_window );
        let headers               = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "row headers" } ), this.characteristic_table );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell" } ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Valeur" ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Initial" ), headers );

        let header_bonus_race = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Race" ), headers );
        let counter_warning   = new GS.OBJECT.CounterV2( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
        counter_warning.computeHtml();
        this.race_bonus.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ).setParent( counter_warning );
        SERVICE.DOM.addElementTo( counter_warning.dom_element, header_bonus_race );

        let header_bonus_historic = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Historique" ), headers );
        let counter_warning_h     = new GS.OBJECT.CounterV2( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
        counter_warning_h.computeHtml();
        this.historic_bonus.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ).setParent( counter_warning_h );
        SERVICE.DOM.addElementTo( counter_warning_h.dom_element, header_bonus_historic );

        let header_bonus_class = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Classe" ), headers );
        let counter_warning_2  = new GS.OBJECT.CounterV2( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
        counter_warning_2.computeHtml();
        this.class_bonus.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ).setParent( counter_warning_2 );
        SERVICE.DOM.addElementTo( counter_warning_2.dom_element, header_bonus_class );

        let header_level1      = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Niv1" ), headers );
        let counter_warning_l1 = new GS.OBJECT.CounterV2( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
        counter_warning_l1.computeHtml();
        this.level1_bonus.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ).setParent( counter_warning_l1 );
        SERVICE.DOM.addElementTo( counter_warning_l1.dom_element, header_level1 );

        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Niv5" ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Niv10" ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Niv15" ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Niv20" ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Autre" ), headers );

        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            this.getContent( i ).doActionAfter( "event__compute__html", { "param__window": CHARACTERISTICS.WINDOW_KEY, "param__dom_element_parent": this.characteristic_table } );
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTERISTICS.Characteristics, CHARACTER.ContainerComponentInterface );
SERVICE.CLASS.addPrototype( CHARACTERISTICS.Characteristics, GS.OBJECT.CounterInterfaceV2 );


///**
// * @class CHARACTERISTICS.CharacteristicsBonuses
// * @extends CHARACTERISTICS.Characteristics
// */
//CHARACTERISTICS.CharacteristicsBonuses = function ( data ) {
//    this.init();
//    if ( data ) {
//        this.updateData( data );
//    }
//};
//CHARACTERISTICS.CharacteristicsBonuses.prototype = {
//    init             : function () {
//        CHARACTER.ContainerComponentInterface.prototype.init.call( this );
//    },
//    initCounterCommon: function () {
//        this.counters = {};
//        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS );
//        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
//    },
//    //********************************************  EVENT LISTENER  **************************************************//
//    doActionAfter: function ( event_name, params ) {
//        CHARACTERISTICS.Characteristics.prototype.doActionAfter.call( this, event_name, params );
//    },
//    //********************************************  GETTER SETTER  **************************************************//
//    updateData: function ( data ) {
//        this.setNumber( data.number );
//        this.setChoices( data.choice );
//    },
//    setNumber : function ( to_set ) {
//        this.number = to_set;
//    },
//    setChoices: function ( to_set ) {
//        for ( let i = 0, _size_i = to_set.length; i < _size_i; i++ ) {
//            switch ( to_set[ i ] ) {
//                case "FREE":
//                    this.add( new CHARACTERISTICS.Characteristic( CHARACTERISTICS.FREE ) );
//                    break;
//                default:
//                    this.add( new CHARACTERISTICS.Characteristic( CHARACTERISTICS[ to_set[ i ] ] ) );
//                    break;
//            }
//        }
//    },
//    getUUID   : function () {
//        return "CHARACTERISTICS.Characteristics";
//    },
//    //********************************************  HTML  **************************************************//
//    computePopupDomElement: function ( params ) {
//        this.dom_element_popup = SERVICE.DOM.createElement( "div", { class: "gs-characteristics-bonuses" } );
//        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "label" }, "Nombre de choix : " + this.number ), this.dom_element_popup );
//
//        params[ "param__dom_element_parent" ] = this.dom_element_popup;
//        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
//            this.getContent( i ).doActionAfter( "event__compute__html", params );
//        }
//    }
//};
//
//SERVICE.CLASS.addPrototype( CHARACTERISTICS.CharacteristicsBonuses, CHARACTERISTICS.Characteristics );
