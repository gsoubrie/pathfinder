"use strict";
/**
 * @class HISTORICS.Historic
 * @extends CHARACTER.ComponentInterfacePopup
 */
HISTORICS.Historic           = function () {
    this.init();
};
HISTORICS.Historic.prototype = {
    init        : function () {
        this.setKey( HISTORICS.key_element );
        this.setLabelProperty( HISTORICS.label_element );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        CHARACTER.ComponentInterfacePopup.prototype.doActionAfter.call( this, event_name, params );
    },
    //********************************************  SAVE   **************************************************//
    getSpecificDataToSave: function () {
        let to_return       = {};
        to_return[ this.key ] = this.getValue();
        return to_return;
    },
    //********************************************  HTML   **************************************************//
    // The choice lands the sheet on the Bibliothèque, subject Historiques
    // (the filter rides the current value, empty when unset) : the old
    // edition popup of 68 entries read as a downgrade of the subject
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
            onclick : "MANAGER.EventManagerV2.doActionAfter(event,'event__historic__goto_library')"
        } ), div );
        this.dom_element__input.value = this.getValue();
    }
};

SERVICE.CLASS.addPrototype( HISTORICS.Historic, CHARACTER.ComponentInterfacePopup );
