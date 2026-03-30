"use strict";
/**
 * @class ARCHETYPES.Archetype
 * @extends CHARACTER.ComponentInterfacePopup
 */
ARCHETYPES.Archetype           = function () {
    this.init();
};
ARCHETYPES.Archetype.prototype = {
    init        : function () {
        this.setKey( ARCHETYPES.key_element );
        this.setLabelProperty( ARCHETYPES.label_element );
        this.setDefaultValue( ARCHETYPES.default_value );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__form__element_changed":
                this.setValue( params[ "param__edition_value" ] );
                break;
        }
        CHARACTER.ComponentInterfacePopup.prototype.doActionAfter.call( this, event_name, params );
    },
    //********************************************  DATA   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case "name":
                this.setValue( value );
                break;
            case "name_en":
            case "level":
            case "traits":
            case "description":
            case "feats":
                this[ key ] = value;
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    },
    //********************************************  SAVE   **************************************************//
    getSpecificDataToSave: function () {
        let to_return            = {};
        to_return[ this.key ] = this.getValue();
        return to_return;
    }
};

SERVICE.CLASS.addPrototype( ARCHETYPES.Archetype, CHARACTER.ComponentInterfacePopup );