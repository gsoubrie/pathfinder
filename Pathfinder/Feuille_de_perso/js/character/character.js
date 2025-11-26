"use strict";
/**
 * @class CHARACTER.Current
 * @extends OBJECT.InterfaceHtml
 */
CHARACTER.Current = function () {
    this.uuid            = null;
    this.name            = null;
    this.player          = null;
    this.alignment       = null;
    this.level           = null;
    this.point_heroism   = null;
    this.race            = new RACES.Race();
    this.health          = new CHARACTER.Health();
    this.class           = new CLASSES.Class();
    this.characteristics = new CHARACTERISTICS.Characteristics();
    this.levels_history  = new CHARACTER.LevelsHistory();
};
CHARACTER.Current.prototype = {
    init: function ( uuid ) {
        this.uuid = uuid;
        this.addParamForEvents( "param__current_character__uuid", this.uuid );
        this.updateData( SERVICE.DATA.loadDataByUUID( uuid ) );
        this.doActionAfter( "event__data_loaded__done" );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        console.log( "GSOU", "[Current - doActionAfter]", event_name );
        switch ( event_name ) {
            case "event__form__element_changed":
                params[ "param__current_character__object" ] = this;
                params[ "param__characteristics__object" ]   = this.getCharacteristics();
                this.getPropertyForDoActionAfter( params ).doActionAfter( event_name, params );
                break;
            case "event__more_button":
                if ( params[ "param__characteristics__is" ] ) {
                    this.characteristics.doActionAfter( event_name, params );
                    return;
                }
                break;
            case "event__free_bonus_is_zero":
                this.characteristics.doActionAfter( event_name, params );
                break;
            case "event__data_loaded__done":
                this.computeTotalLife();
                break;
            case "event__open_modal__hp_heal":
                this.health.doActionAfter(event_name, params);
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
        to_return[ "levels_history" ]    = this.levels_history.getDataToSave();
        to_return[ "alignment" ]         = this.alignment;
        to_return[ "level" ]             = this.level + "";
        to_return[ "health" ]            = this.health.getDataToSave();
        to_return[ "point_heroism" ]     = this.point_heroism;
        return to_return;
    },
    addParamForEvents: function ( key, value ) {
        this.addParamForEventsCommon( key, value );
        this.race.addParamForEvents( key, value );
        this.class.addParamForEvents( key, value );
        this.characteristics.addParamForEvents( key, value );
        this.levels_history.addParamForEvents( key, value );
    },
    //********************************************  COMPUTE   **************************************************//
    computeTotalLife: function () {
        this.total_life = 0;
        for ( let i = 0, _size_i = this.level; i < _size_i; i++ ) {
            this.total_life += this.getCharacteristics().getContentByUUID( CHARACTERISTICS.CON.name ).getModifierValue();
            this.total_life += this.getLevelHistory().getContent( i ).life_class;
        }
        this.health.setMaxHP(this.total_life);
    },
    //********************************************  UPDATE DATA   **************************************************//
    setData                    : function ( key, value ) {
        switch ( key ) {
            case RACES.key_element:
                this.race.updateData( value );
                this.characteristics.doActionAfter( "event__set_object_bonuses", { "event__race_object": this.getRace(), "param__is_for": RACES.key_element } );
                break;
            case CLASSES.key_element:
                this.class.updateData( value );
                this.characteristics.doActionAfter( "event__set_object_bonuses", { "event__class_object": this.getClass(), "param__is_for": CLASSES.key_element } );
                break;
            case CHARACTERISTICS.key:
                this.characteristics.updateData( value );
                break;
            case "uuid":
                break;
            case "levels_history":
                this.levels_history.updateData( value );
                break;
            case "name":
            case "player":
            case "body_size":
            case "alignment":
            case "divinity":
            case "point_heroism":
                this[ key ] = value;
                break;
            case "level":
                this[ key ] = parseInt( value );
                break;
            case "health":
                this.health.updateData( value );
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    },
    getRace                    : function () {
        return this.race;
    },
    getAlignment               : function () {
        return this.alignment;
    },
    getLegacy                  : function () {
        return this.getRace().getLegacy();
    },
    getClass                   : function () {
        return this.class;
    },
    getHistoric                : function () {
        return this.getLevelHistory().getSpecialContent( HISTORICS.key_element );
    },
    getCharacteristics         : function () {
        return this.characteristics;
    },
    getLevelHistory            : function () {
        return this.levels_history;
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
