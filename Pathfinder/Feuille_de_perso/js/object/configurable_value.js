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
    isSet        : function () {
        return this.initial_value !== this.value && this.value !== this.editable_value;
    },
    setValue     : function ( to_set ) {
        this.value = to_set;
        this.updateHtml();
    },
    getValue     : function () {
        return this.value;
    },
    changeValue  : function ( delta ) {
        this.value += delta;
        this.updateHtml();
    },
    getDataToSave: function () {
        let to_return            = {};
        to_return.phase          = this.getCurrentPhase();
        to_return.value          = this.value;
        to_return.initial_value  = this.initial_value;
        to_return.editable_value = this.editable_value;
        return to_return;
    },
    setData: function ( key, value ) {
        switch ( key ) {
            case "phase":
                this.setPhase( value );
                break;
            case "value":
                this.value = value;
                break;
            case "initial_value":
                this.initial_value =  value;
                break;
            case "editable_value":
                this.editable_value =  value;
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
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
