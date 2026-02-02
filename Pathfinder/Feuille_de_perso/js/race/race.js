"use strict";
/**
 * @class RACES.Race
 * @extends CHARACTER.ComponentInterface
 */
RACES.Race = function () {
    this.init();
};
RACES.Race.prototype = {
    init: function () {
        this.setKey( RACES.key_element );
        this.setLabelProperty( RACES.label_element );
        this.setDefaultValue( RACES.default_value );
        this.legacy             = new LEGACIES.Legacy();
        this.body_size          = new BODY_SIZE.RaceSize();
        this.available_legacies = new LEGACIES.Legacies();
        this.label              = SERVICE.DOM.createElement( "div", {} );
        this.children           = [ this.body_size];
        //this.children           = [this.legacy, this.body_size];
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__form__element_changed":
                this.setValue( params[ "param__edition_value" ] );
                this.getLegacy().setName( "" );
                params[ "param__characteristics__object" ].doActionAfter( "event__reset_characteristics_bonuses", { "param__is_for": RACES.key_element } );
                params[ "param__characteristics__object" ].doActionAfter( "event__set_object_bonuses", { "event__race_object": this, "param__is_for": RACES.key_element } );
                return;
        }
        CHARACTER.ComponentInterfacePopup.prototype.doActionAfter.call( this, event_name, params );
    },
    //********************************************  GETTER SETTER  **************************************************//
    setValue   : function ( to_set ) {
        CHARACTER.ComponentInterface.prototype.setValue.call( this, to_set );
        let data_from_race = Object.assign( {}, RACES.getDataByName( this.getValue() ) );
        delete data_from_race[ "name" ];
        var _keys = Object.keys( data_from_race );
        var _current_key;
        for ( let i = 0, _size = _keys.length; i < _size; i++ ) {
            _current_key = _keys[ i ];
            this.setData( _current_key, data_from_race[ _current_key ] );
        }
        this.available_legacies.init( data_from_race[ "legacies" ] );
    },
    setLegacy  : function ( to_set ) {
        this.getLegacy().setName( to_set );
    },
    getUUID    : function () {
        return this.getName();
    },
    getBodySize: function () {
        return this.body_size;
    },
    getLegacy  : function () {
        return this.legacy;
    },
    //********************************************  DATA   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case RACES.PARAM.BODY_SIZE.key:
                this.getBodySize().setValue( value );
                break;
            case LEGACIES.key_element:
                //this.getLegacy().setValue( value );
                break;
            case "name":
                this.setValue( value );
                break;
            case "start_life":
            case "speed":
            case "characteristics_bonus":
            case "characteristics_malus":
            case "language":
            case "language_sup":
            case "sens":
                this[ key ] = value;
                break;
            case "general_desc":
            case "physical_desc":
            case "believe_desc":
            case "traits":
            case "legacies":
                this[ key ] = value;
                break;
            default:
                console.warn( "GSOU", "[Race - setData]", key, value );
        }
    }
};
SERVICE.CLASS.addPrototype( RACES.Race, CHARACTER.ComponentInterfacePopup );
