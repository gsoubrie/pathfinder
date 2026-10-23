"use strict";
/**
 * @class CLASSES.Class
 * @extends OBJECT.InterfaceHtml
 */
CLASSES.Class           = function ( class_name ) {
    this.init( class_name );
};
CLASSES.Class.prototype = {
    init: function ( class_name ) {
        this.name      = class_name;
        this.level     = 1;
        this.skills    = new CLASSES.Skills();
        this.archetype = new ARCHETYPES.Archetype();
        this.children  = new OBJECT.InterfaceContainer();
        this.children.add( this.archetype );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__level_up__take_level":
                this.setLevel( this.getLevel() + 1 );
                return;
            case "event__level_up__remove_level":
                this.setLevel( this.getLevel() - 1 );
                return;
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    getObjectByKey: CHARACTER.ComponentInterface.prototype.getObjectByKey,
    getUUID       : function () {
        return this.name;
    },
    getKey        : function () {
        return CLASSES.key_element;
    },
    getName       : function () {
        return this.name;
    },
    getLabel      : function () {
        return CLASSES.label_element;
    },
    isSet         : function () {
        return !!this.name;
    },
    getLevel      : function () {
        return this.level;
    },
    setLevel      : function ( to_set ) {
        this.level = to_set;
    },
    getArchetype  : function () {
        return this.archetype;
    },
    getSkills     : function () {
        return this.skills;
    },
    //********************************************  DATA   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case "name":
                this.name = value;
                break;
            case "level":
                this.setLevel( parseInt( value ) );
                break;
            case ARCHETYPES.key_element:
                this.archetype.setValue( value && value.value !== undefined ? value.value : value );
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        let to_return            = {};
        to_return[ "name" ]      = this.name;
        to_return[ "level" ]     = this.level;
        return Object.assign( to_return, this.archetype.getDataToSave() );
    }
};

SERVICE.CLASS.addPrototype( CLASSES.Class, OBJECT.InterfaceHtml );
