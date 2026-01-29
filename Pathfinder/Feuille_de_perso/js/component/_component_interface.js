"use strict";
/**
 * @class ComponentInterface
 * @extends OBJECT.InterfaceHtml
 */
CHARACTER.ComponentInterface = function () {
};
CHARACTER.ComponentInterface.prototype = {
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__compute__html":
                this.computeHtml( params );
                return;
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    setKey                  : function ( to_set ) {
        this.key = to_set;
    },
    setLabelProperty        : function ( to_set ) {
        this.label_property = to_set;
    },
    setValue                : function ( to_set ) {
        this.value = to_set;
        console.log( "GSOU", "[ComponentInterface - setValue]", this.dom_element_input );
        if ( this.dom_element__input ) {
            this.dom_element__input.value = this.value;
        }
    },
    getKey                  : function () {
        return this.key;
    },
    getValue                : function () {
        return this.value || "";
    },
    getDataToSave           : function () {
        let to_return         = {};
        to_return[ this.key ] = this.value;
        return to_return;
    },
    computeHtml             : function ( params ) {
        switch ( params[ "param__window" ] ) {
            case CHARACTER.GeneralWindow.NAME:
                this.computeHtmlGeneralWindow( params[ "param__dom_element_parent" ] );
                return;
        }
    },
    computeHtmlGeneralWindow: function ( dom_element_parent ) {
        if ( this.dom_element_general ) {
            return;
        }
        this.dom_element_general = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-" + this.key } ), dom_element_parent );
        let div                  = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: " property vertical", "data-name": this.key } ), this.dom_element_general );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "label" }, this.label_property ), div );
        this.dom_element__input = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
            class: "value",
            //readOnly: "",
            onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__property_popup__open',{'property_name':'" + this.key + "','param__property__value':'" + this.getValue() + "'})"
        } ), div );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.ComponentInterface, OBJECT.InterfaceHtml );
