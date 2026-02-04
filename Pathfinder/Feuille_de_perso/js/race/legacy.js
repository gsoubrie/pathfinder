"use strict";
/**
 * @class LEGACIES.Legacy
 * @extends CHARACTER.ComponentInterfaceInput
 */
LEGACIES.Legacy           = function () {
    this.init();
};
LEGACIES.Legacy.prototype = {
    init        : function () {
        this.setKey( LEGACIES.key_element );
        this.setLabelProperty( LEGACIES.label_element );
        this.setDefaultValue( RACES.default_value );
    },
    initWithName: function ( legacy_name ) {
        this.setValue( legacy_name );
        let data = LEGACIES.getDataByName( legacy_name );
        this.updateData( data );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    //doActionAfter: function ( event_name, params ) {
    //    switch ( event_name ) {
    //        case "event__form__element_changed":
    //            this.setName( params[ "param__edition_value" ] );
    //            break;
    //    }
    //},
    //********************************************  GETTER SETTER  **************************************************//
    //setValue: function ( to_set ) {
    //    CHARACTER.ComponentInterface.prototype.setValue.call( this, to_set );
    //    this.name            = to_set;
    //    this.name_lower_case = to_set.toLowerCase();
    //    this.label.innerHTML = to_set;
    //},
    //getUUID: function () {
    //    return this.name_lower_case;
    //},
    //********************************************  DATA   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case "name":
                this.setValue( value );
                break;
            case "general_desc":
            case "name_lower_case":
                this[ key ] = value;
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    },
};

SERVICE.CLASS.addPrototype( LEGACIES.Legacy, CHARACTER.ComponentInterfacePopup );

