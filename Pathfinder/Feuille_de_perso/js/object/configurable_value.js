"use strict";
OBJECT.ConfigurableValue           = function ( initial_value, editable_value ) {
    this.init( initial_value, editable_value );
};
OBJECT.ConfigurableValue.prototype = {
    init: function ( initial_value, editable_value ) {
        this.initial_value  = initial_value;
        this.editable_value = editable_value;
        this.value          = this.initial_value;
        this.initPhase();
    },
    //********************************************  GETTER SETTER  **************************************************//
    isSet      : function () {
        return this.initial_value !== this.value && this.value !== this.editable_value;
    },
    setValue   : function ( to_set ) {
        this.value = to_set;
        this.updateHtml();
    },
    changeValue: function ( delta ) {
        this.value += delta;
        this.updateHtml();
    },
    //********************************************  HTML  **************************************************//
    computeHtml: function () {
        this.dom_element = SERVICE.DOM_HELPER.createDiv_SpaceAround();
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createLessButton( this.getParamForEvents() ), this.dom_element );
        this.label_dom_element = SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createDiv_FullyCentred( this.value ), this.dom_element );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createMoreButton( this.getParamForEvents() ), this.dom_element );
        this.setPhaseDomElement( this.dom_element );
    },
    updateHtml : function () {
        if ( this.label_dom_element ) {
            this.label_dom_element.innerHTML = this.value;
        }
    }
};
SERVICE.CLASS.addPrototype( OBJECT.ConfigurableValue, OBJECT.InterfaceHtml );
SERVICE.CLASS.addPrototype( OBJECT.ConfigurableValue, GS.OBJECT.PhaseInterface );


OBJECT.CalculatedValue           = function () {
    this.init();
};
OBJECT.CalculatedValue.prototype = {
    init: function () {
    },
    //********************************************  GETTER SETTER  **************************************************//
    setValue: function ( to_set ) {
        this.value = to_set;
        if ( this.label_dom_element ) {
            this.label_dom_element.innerHTML = this.value;
        }
    },
    //********************************************  HTML  **************************************************//
    computeHtml: function () {
        this.dom_element       = SERVICE.DOM_HELPER.createDiv_SpaceAround();
        this.label_dom_element = SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createDiv_FullyCentred( this.value ), this.dom_element );
    }
};
SERVICE.CLASS.addPrototype( OBJECT.CalculatedValue, OBJECT.InterfaceHtml );
