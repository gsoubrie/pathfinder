"use strict";
/**
 * @class CHARACTER.Current
 * @extends OBJECT.InterfaceHtml
 */
CHARACTER.Current = function () {
    this.uuid            = null;
    this.name_object     = new CHARACTER.Name();
    this.player          = new CHARACTER.Player();
    this.alignment       = null;
    this.level           = null;
    this.point_heroism   = null;
    this.race            = new RACES.Race();
    this.health          = new CHARACTER.Health();
    this.class           = new CLASSES.Class();
    this.characteristics = new CHARACTERISTICS.Characteristics();
    this.levels_history  = new CHARACTER.LevelsHistory();
    this.children        = [this.player, this.name_object, this.race];
};
CHARACTER.Current.prototype = {
    init: function ( uuid ) {
        this.uuid = uuid || SERVICE.STRING.buildUUID();
        this.addParamForEvents( "param__current_character__uuid", this.uuid );
        this.updateData( SERVICE.DATA.loadDataByUUID( uuid ) );
        this.doActionAfter( "event__data_loaded__done" );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__has_change__input":
                this.setData( params[ "property_name" ], params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ].target.value );
                break;
            case "event__form__element_changed":
                params[ "param__current_character__object" ] = this;
                params[ "param__characteristics__object" ]   = this.getCharacteristics();
                this.getPropertyForDoActionAfter( params ).doActionAfter( event_name, params );
                this.windows.doActionAfterContentChildren( event_name, params );
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
            case "event__compute_html__done":
                this.health.doActionAfter( event_name, params );
                break;
            case "event__open_modal__hp_heal":
            case "event__open_modal__hp_temp":
            case "event__open_modal__hp_damage":
                this.health.doActionAfter( event_name, params );
                break;
            case "event__heal_modal__confirm":
            case "event__temp_hp_modal__confirm":
            case "event__damage_modal__confirm":
                this.health.doActionAfter( event_name, params );
                this.windows.doActionAfterContentChildren( event_name, params );
                break;
            case "event__health_history__load":
                this.windows.doActionAfterContentChildren( event_name, params );
                break;
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID          : function () {
        return this.uuid;
    },
    getDataToSave    : function () {
        let to_return       = {};
        to_return[ "uuid" ] = this.uuid;
        for ( let i = 0, _size_i = this.children.length; i < _size_i; i++ ) {
            to_return = Object.assign( to_return, this.children[ i ].getDataToSave() );
        }
        //if ( this.getRace().getUUID() ) {
        //    to_return = Object.assign(to_return, this.getRace().getDataToSave());
        //    to_return[ CLASSES.key_element ] = this.getClass().getDataToSave();
        //    to_return[ CHARACTERISTICS.key ] = this.getCharacteristics().getDataToSave();
        //    to_return[ "levels_history" ]    = this.levels_history.getDataToSave();
        //    to_return[ "alignment" ]         = this.alignment;
        //    to_return[ "level" ]             = this.level + "";
        //    to_return[ "health" ]            = this.health.getDataToSave();
        //    to_return[ "point_heroism" ]     = this.point_heroism;
        //}
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
        let total_life = 0;
        for ( let i = 0, _size_i = this.level; i < _size_i; i++ ) {
            total_life += this.getCharacteristics().getContentByUUID( CHARACTERISTICS.CON.name ).getModifierValue();
            total_life += this.getLevelHistory().getContent( i ).life_class;
        }
        this.health.setMaxHP( total_life );
    },
    //********************************************  UPDATE DATA   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case this.race.getKey():
                this.race.setValue( value );
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
            case this.player.getKey():
                this.player.setValue( value );
                break;
            case this.name_object.getKey():
                this.name_object.setValue( value );
                break;
            case "body_size":
            case "alignment":
            case "divinity":
            case "point_heroism":
                this[ key ] = value;
                this.updateHtmlData( key, value );
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
    /**
     * @returns {CHARACTER.Name}
     */
    getNameObject: function () {
        return this.name_object;
    },
    /**
     * @returns {CHARACTER.Player}
     */
    getPlayer: function () {
        return this.player;
    },
    /**
     * @returns {RACES.Race}
     */
    getRace: function () {
        return this.race;
    },
    /**
     * @returns {string}
     */
    getAlignment: function () {
        return this.alignment;
    },
    /**
     * @returns {Legacy}
     */
    getLegacy: function () {
        return this.getRace().getLegacy();
    },
    /**
     * @returns {CLASSES.Class}
     */
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
    getHealth                  : function () {
        return this.health;
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
    updateHtmlData: function ( key, value ) {
        if ( !this[ key + "_html" ] ) {
            this[ key + "_html" ] = SERVICE.DOM.createElement( "div", {}, value );
        }
        else {
            this[ key + "_html" ].innerHTML = value;
        }
    },
    computeHTML   : function () {
        this.windows = new CHARACTER.WindowGroup();
        this.windows.computeHtmlWithData( this );
        this.doActionAfter( "event__compute_html__done", {} );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Current, OBJECT.InterfaceHtml );
