"use strict";
/**
 * @class CHARACTER.LevelsHistory
 * @extends OBJECT.InterfaceContainerHtml
 */
CHARACTER.LevelsHistory = function () {
};
CHARACTER.LevelsHistory.prototype = {
    init: function () {
        console.log("GSOU", "[LevelsHistory - init]", this );
        this.initContents();
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID          : function () {
        return this.uuid;
    },
    getDataToSave    : function () {
        let to_return                    = {};
        return to_return;
    },
    //********************************************  UPDATE DATA   **************************************************//
    setData                    : function ( key, value ) {
        switch ( key ) {
            case RACES.key_element:
                this.getRace().updateData( value );
                this.getCharacteristics().doActionAfter( "event__set_object_bonuses", { "event__race_object": this.getRace(), "param__is_for": RACES.key_element } );
                break;
            case CLASSES.key_element:
                this.getClass().updateData( value );
                this.getCharacteristics().doActionAfter( "event__set_object_bonuses", { "event__class_object": this.getClass(), "param__is_for": CLASSES.key_element } );
                break;
            case CHARACTERISTICS.key:
                this.getCharacteristics().updateData( value );
                break;
            case "uuid":
                break;
            case "levels_history":
                
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
    //********************************************  HTML   **************************************************//
    updateHtmlData : function ( key, value ) {
    },
    computePageHTML: function () {
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.LevelsHistory, OBJECT.InterfaceContainerHtml );
