"use strict";
CHARACTER.CharacteristicWindow           = function ( window_name, parent_name ) {
    this.initSpecific( window_name, parent_name );
};
CHARACTER.CharacteristicWindow.prototype = {
    initSpecific: WINDOW_V2.ElementFromData.initSpecific,
    
    //********************************************  EVENT LISTENER  **************************************************//
    
    //********************************************  HTML   **************************************************//
    computeHtmlWithData              : function ( character_object ) {
        this.content_dom_element_target = new SERVICE.DOM.createElement( "div", { class: "characteristic-container" } );
        this.computeHtml__tableCharacteristics( character_object );
        SERVICE.DOM.addElementToAfterEmpty( this.content_dom_element_target, this.dom_element_target );
    },
    computeHtml__tableCharacteristics: function ( character_object ) {
        let to_return             = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "title" }, "CARACTÉRISTIQUES" ), this.content_dom_element_target );
        this.characteristic_table = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "characteristic-table" } ), this.content_dom_element_target );
        let headers               = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "row headers" } ), this.characteristic_table );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell" } ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Valeur Final" ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Modifi" ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Valeur Initial" ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Bonus Race" ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Bonus Classe" ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Bonus Niv5" ), headers );
        let _keys = Object.keys( CHARACTERISTIC );
        for ( let i = 0, _size = _keys.length; i < _size; i++ ) {
            this.computeHtml__tableCharacteristic( CHARACTERISTIC[ _keys[ i ] ], character_object );
        }
        console.log( "GSOU", "[CharacteristicWindow - computeHtml__tableCharacteristics]", character_object );
    },
    computeHtml__tableCharacteristic : function ( object_char, character_object ) {
        let to_return = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "row characteristic-line", "data-name": object_char.key } ), this.characteristic_table );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-label" }, object_char.label ), to_return );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-final-value" }, "10" ), to_return );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-modifier-value" }, "" ), to_return );
        let initial_dom  = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-initial-value" }, "<div>10</div>" ), to_return );
        this.plus_button = new COMPONENT.ButtonFromData_V3( "initial_char_plus", "+" );
        this.plus_button.addParamForEvents( "name_characteristic", object_char.key );
        this.plus_button.computeHtml();
        SERVICE.DOM.addElementTo( this.plus_button.dom_element, initial_dom );
        this.less_button = new COMPONENT.ButtonFromData_V3( "initial_char_less", "-" );
        this.less_button.addParamForEvents( "name_characteristic", object_char.key );
        this.less_button.computeHtml();
        SERVICE.DOM.addElementTo( this.less_button.dom_element, initial_dom );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-bonus-race" }, "" ), to_return );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-bonus-classe" }, "" ), to_return );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-bonus-niv5" }, "" ), to_return );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.CharacteristicWindow, WINDOW_V2.ElementFromData );
