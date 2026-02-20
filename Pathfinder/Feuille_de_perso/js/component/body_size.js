"use strict";
/**
 * @class BODY_SIZE.RaceSize
 * @extends CHARACTER.ComponentInterfaceInput
 */
BODY_SIZE.RaceSize = function () {
    this.init();
};
BODY_SIZE.RaceSize.prototype = {
    init                    : function () {
        this.setKey( "body_size" );
        this.setLabelProperty( "Taille" );
    },
    computeHtmlGeneralWindow: function ( dom_element_parent ) {
        if ( this.dom_element_general ) {
            return;
        }
        this.dom_element_general = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-" + this.key } ), dom_element_parent );
        let div                  = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: " property vertical", "data-name": this.key } ), this.dom_element_general );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "label" }, this.label_property ), div );
        this.dom_element__input = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
            class   : "value",
            onchange: "MANAGER.EventManagerV2.doActionAfter(event,'event__has_change__input',{'property_name':'" + this.getKey() + "'})"
        } ), div );
        if ( this.isSet() ) {
            this.dom_element__input.value = this.getValue();
        }
    }
};
SERVICE.CLASS.addPrototype( BODY_SIZE.RaceSize, CHARACTER.ComponentInterfaceInput );