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
        this.race_bonus = new CHARACTERISTICS.RaceBonuses();
        this.race_bonus.setCountersParent( this );
        this.class_bonus = new CHARACTERISTICS.ClassBonuses();
        this.class_bonus.setCountersParent( this );
        for ( let i = 0, _size_i = CHARACTERISTICS.ENUM.length; i < _size_i; i++ ) {
            this.add( new CHARACTERISTICS.Characteristic( CHARACTERISTICS.ENUM[ i ] ) );
        }
        this.addParamForEvents( "param__characteristics__is", true );
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
            case CLASSES.key_element:
                return this.getClassBonus();
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
    getClassBonus: function () {
        return this.class_bonus;
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
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Valeur Final" ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Modifier" ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Valeur Initial" ), headers );
        
        let header_bonus_race = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Race" ), headers );
        let counter_warning   = new GS.OBJECT.CounterV2( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
        counter_warning.computeHtml();
        this.race_bonus.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ).setParent( counter_warning );
        SERVICE.DOM.addElementTo( counter_warning.dom_element, header_bonus_race );
        
        let header_bonus_class = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Classe" ), headers );
        let counter_warning_2  = new GS.OBJECT.CounterV2( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
        counter_warning_2.computeHtml();
        this.class_bonus.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ).setParent( counter_warning_2 );
        SERVICE.DOM.addElementTo( counter_warning_2.dom_element, header_bonus_class );
        
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Bonus Niv5" ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Bonus Niv10" ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Bonus Niv15" ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Bonus Niv20" ), headers );
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            this.getContent( i ).doActionAfter( "event__compute__html", { "param__window": CHARACTER.CharacteristicWindow.NAME, "param__dom_element_parent": this.characteristic_table } );
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTERISTICS.Characteristics, CHARACTER.ContainerComponentInterface );
SERVICE.CLASS.addPrototype( CHARACTERISTICS.Characteristics, GS.OBJECT.CounterInterfaceV2 );


/**
 * @class CHARACTERISTICS.CharacteristicsBonuses
 * @extends CHARACTERISTICS.Characteristics
 */
CHARACTERISTICS.CharacteristicsBonuses = function () {
    this.init();
};
CHARACTERISTICS.CharacteristicsBonuses.prototype = {
    init             : function () {
        CHARACTER.ContainerComponentInterface.prototype.init.call( this );
    },
    initCounterCommon: function () {
        this.counters = {};
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS );
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        CHARACTERISTICS.Characteristics.prototype.doActionAfter.call( this, event_name, params );
    },
    //********************************************  GETTER SETTER  **************************************************//
    setValueFromClassPopup: function ( to_set ) {
        this.setNumber( to_set.number );
        this.setChoices( to_set.choice );
    },
    setNumber             : function ( to_set ) {
        this.number = to_set;
    },
    setChoices            : function ( to_set ) {
        for ( let i = 0, _size_i = to_set.length; i < _size_i; i++ ) {
            switch ( to_set[ i ] ) {
                case "FREE":
                    this.add( new CHARACTERISTICS.Characteristic( CHARACTERISTICS.FREE ) );
                    break;
                default:
                    this.add( new CHARACTERISTICS.Characteristic( CHARACTERISTICS[ to_set[ i ] ] ) );
                    break;
            }
        }
    },
    getUUID               : function () {
        return "CHARACTERISTICS.Characteristics";
    },
    //********************************************  HTML  **************************************************//
    computePopupDomElement: function ( params ) {
        this.dom_element_popup = SERVICE.DOM.createElement( "div", { class: "gs-characteristics-bonuses" } );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "label" }, "Nombre de choix : " + this.number ), this.dom_element_popup );
        
        params[ "param__dom_element_parent" ] = this.dom_element_popup;
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            this.getContent( i ).doActionAfter( "event__compute__html", params );
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTERISTICS.CharacteristicsBonuses, CHARACTERISTICS.Characteristics );
