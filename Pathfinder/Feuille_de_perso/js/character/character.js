"use strict";
CHARACTER.Current           = function ( uuid ) {
    this.init( uuid );
};
CHARACTER.Current.prototype = {
    init: function ( uuid ) {
        this.uuid                   = uuid;
        this[ RACES.key_element ]   = new RACES.Race();
        this[ CLASSES.key_element ] = new CLASSES.Class();
        this[ RACES.key_element ]   = new RACES.Race();
        this.updateData( SERVICE.DATA.loadDataByUUID( uuid ) );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter      : function ( event_name, params ) {
        console.log(event_name, params)
        switch ( event_name ) {
            case "initial_char_plus":
            case "initial_char_less":                
                break;            
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID      : function () {
        return this.uuid;
    },
    getDataToSave: function () {
        let to_return                    = {};
        to_return[ "uuid" ]              = this.uuid;
        to_return[ "name" ]              = this.name;
        to_return[ "player" ]            = this.player;
        to_return[ RACES.key_element ]   = this.getRace().getDataToSave();
        to_return[ CLASSES.key_element ] = this.getClass().getDataToSave();
        to_return[ "alignment" ]         = this.alignment;
        to_return[ "level" ]             = this.level;
        to_return[ "point_heroism" ]     = this.point_heroism;
        return to_return;
    },
    //********************************************  UPDATE DATA   **************************************************//
    setData : function ( key, value ) {
        switch ( key ) {
            case RACES.key_element:
                this.getRace().updateData( value );
                break;
            case CLASSES.key_element:
                this.getClass().updateData( value );
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
    getRace : function () {
        return this[ RACES.key_element ];
    },
    getClass: function () {
        return this[ CLASSES.key_element ];
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
