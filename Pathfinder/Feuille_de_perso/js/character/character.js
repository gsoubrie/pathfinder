"use strict";
CHARACTER.Current           = function () {
};
CHARACTER.Current.prototype = {
    init: function ( uuid ) {
        this.uuid                   = uuid;
        this[ RACES.key_element ]   = new RACES.Race();
        this[ CLASSES.key_element ] = new CLASSES.Class();
        this[ RACES.key_element ]   = new RACES.Race();
        this[ CHARACTERISTICS.key ] = new CHARACTERISTICS.Characteristics();
        this.addParamForEvents( "current_character_param", this.uuid );
        this.updateData( SERVICE.DATA.loadDataByUUID( uuid ) );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__form__element_changed":
                params[ "param__current_character" ]      = this;
                params[ "param__characteristics_object" ] = this.getCharacteristics();
                this.getPropertyForDoActionAfter( params ).doActionAfter( event_name, params );
                break;
            case "click_on_button_V3":
                if ( params[ "characteristics_param" ] ) {
                    this[ CHARACTERISTICS.key ].doActionAfter( event_name, params );
                    return;
                }
                break;
            case "event__free_bonus_is_zero":
                this[ CHARACTERISTICS.key ].doActionAfter( event_name, params );
                break;
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID          : function () {
        return this.uuid;
    },
    getDataToSave    : function () {
        let to_return                    = {};
        to_return[ "uuid" ]              = this.uuid;
        to_return[ "name" ]              = this.name;
        to_return[ "player" ]            = this.player;
        to_return[ RACES.key_element ]   = this.getRace().getDataToSave();
        to_return[ CLASSES.key_element ] = this.getClass().getDataToSave();
        to_return[ CHARACTERISTICS.key ] = this.getCharacteristics().getDataToSave();
        to_return[ "alignment" ]         = this.alignment;
        to_return[ "level" ]             = this.level;
        to_return[ "point_heroism" ]     = this.point_heroism;
        return to_return;
    },
    addParamForEvents: function ( key, value ) {
        this.addParamForEventsCommon( key, value );
        this[ RACES.key_element ].addParamForEvents( key, value );
        this[ CLASSES.key_element ].addParamForEvents( key, value );
        this[ CHARACTERISTICS.key ].addParamForEvents( key, value );
    },
    //********************************************  UPDATE DATA   **************************************************//
    setData                    : function ( key, value ) {
        switch ( key ) {
            case RACES.key_element:
                this.getRace().updateData( value );
                this.getCharacteristics().doActionAfter( "event__set_object_bonuses", { "event__race_object": this.getRace(), "param__is_for": "race" } );
                break;
            case CLASSES.key_element:
                this.getClass().updateData( value );
                this.getCharacteristics().doActionAfter( "event__set_object_bonuses", { "event__class_object": this.getClass(), "param__is_for": "class" } );
                break;
            case CHARACTERISTICS.key:
                this.getCharacteristics().updateData( value );
                break;
            case "uuid":
                break;
            case "name":
            case "player":
            case "body_size":
            case "alignment":
            case "divinity":
            case "level":
            case "point_heroism":
                this[ key ] = value;
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    },
    getRace                    : function () {
        return this[ RACES.key_element ];
    },
    getLegacy                  : function () {
        return this.getRace().getLegacy();
    },
    getClass                   : function () {
        return this[ CLASSES.key_element ];
    },
    getCharacteristics         : function () {
        return this[ CHARACTERISTICS.key ];
    },
    getPropertyForDoActionAfter: function ( params ) {
        switch ( params[ "param__property" ] ) {
            case RACES.key_element:
                return this.getRace();
            case LEGACIES.key_element:
                return this.getLegacy();
            case CLASSES.key_element:
                return this.getClass();
        }
    },
    //********************************************  HTML   **************************************************//
    updateHtmlData : function ( key, value ) {
        if ( !this[ key + "_html" ] ) {
            this[ key + "_html" ] = SERVICE.DOM.createElement( "div", {}, value );
        }
        else {
            this[ key + "_html" ].innerHTML = value;
        }
    },
    computePageHTML: function () {
        this.windows = new CHARACTER.WindowGroup();
        this.windows.computeHtmlWithData( this );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Current, OBJECT.InterfaceHtml );
