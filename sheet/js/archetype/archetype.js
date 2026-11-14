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
            case "skills":
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
    },
    //********************************************  HTML   **************************************************//
    // The edition popup of the 246 archetypes is GONE : the click lands the
    // sheet on the Bibliothèque, subject Archétypes (the filter rides the
    // current value, empty when unset, user decision)
    computeHtmlGeneralWindow: function ( dom_element_parent ) {
        if ( this.dom_element_general ) {
            return;
        }
        this.dom_element_general = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-" + this.key } ), dom_element_parent );
        let div                  = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: " property vertical", "data-name": this.key } ), this.dom_element_general );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "label" }, this.label_property ), div );
        this.dom_element__input       = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
            class   : "value",
            readOnly: "",
            onclick : "MANAGER.EventManagerV2.doActionAfter(event,'event__archetype__goto_library')"
        } ), div );
        this.dom_element__input.value = this.getValue();
    }
};

SERVICE.CLASS.addPrototype( ARCHETYPES.Archetype, CHARACTER.ComponentInterfacePopup );
