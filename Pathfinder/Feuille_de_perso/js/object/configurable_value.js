"use strict";
OBJECT.ConfigurableValue           = function ( initial_value, editable_value ) {
    this.init( initial_value, editable_value );
};
OBJECT.ConfigurableValue.prototype = {
    init: function ( initial_value, editable_value ) {
        this.initial_value  = initial_value;
        this.editable_value = editable_value;
        this.value          = this.initial_value;
        this.label          = SERVICE.DOM_HELPER.createFullyCentredDiv( this.value );
    },
    //********************************************  GETTER SETTER  **************************************************//
    isSet   : function () {
        return this.initial_value !== this.value;
    },
    setValue: function ( to_set ) {
        if ( to_set === this.editable_value && this.isSet() ) {
            return;
        }
        this.value = to_set;
        switch ( this.value ) {
            case this.editable_value:
                SERVICE.DOM.addElementToAfterEmpty( SERVICE.DOM_HELPER.createFullyCentredDiv( this.initial_value ), this.label );
                SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createMoreButton( this.getParamForEvents() ), this.label );
                break;
            default:
                SERVICE.DOM.addElementToAfterEmpty( SERVICE.DOM_HELPER.createFullyCentredDiv( this.value ), this.label );
                break;
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
        this.value = "";
        this.label = SERVICE.DOM_HELPER.createFullyCentredDiv( this.value );
    },
    //********************************************  GETTER SETTER  **************************************************//
    setValue: function ( to_set ) {
        this.value = to_set;
        SERVICE.DOM.addElementToAfterEmpty( SERVICE.DOM_HELPER.createFullyCentredDiv( this.value ), this.label );
    }
};
SERVICE.CLASS.addPrototype( OBJECT.CalculatedValue, OBJECT.InterfaceHtml );
