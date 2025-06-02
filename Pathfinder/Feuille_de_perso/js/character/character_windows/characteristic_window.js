"use strict";
CHARACTER.CharacteristicWindow           = function ( window_name, parent_name ) {
    this.initSpecific( window_name, parent_name );
};
CHARACTER.CharacteristicWindow.prototype = {
    initSpecific: WINDOW_V2.ElementFromData.initSpecific,
    
    //********************************************  EVENT LISTENER  **************************************************//
    
    //********************************************  HTML   **************************************************//
    computeHtmlWithData: function ( character_object ) {
        this.content_dom_element_target = new SERVICE.DOM.createElement( "div", { class: "characteristic-container" } );
        this.computeHtml__tableCharacteristics( character_object );
        SERVICE.DOM.addElementToAfterEmpty( this.content_dom_element_target, this.dom_element_target );
    },
    computeHtml__tableCharacteristics  : function ( character_object ) {
        let to_return = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "title" }, "CARACTÉRISTIQUES" ),this.content_dom_element_target );
        this.characteristic_table = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "characteristic-table" } ),this.content_dom_element_target );
        let headers = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "row headers" } ),this.characteristic_table );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" } ),headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Modificateur" ),headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Valeur Final" ),headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Valeur Initial" ),headers );
        let _keys = Object.keys( CHARACTERISTIC );
        for( let i = 0, _size = _keys.length ; i < _size; i++ ) {
            this.computeHtml__tableCharacteristic(CHARACTERISTIC[_keys[i]], character_object);
        }
        console.log("GSOU", "[CharacteristicWindow - computeHtml__tableCharacteristics]", character_object );
    },
    computeHtml__tableCharacteristic  : function ( object_char, character_object ) {
        let to_return = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "row characteristic-line", "data-name" : object_char.key } ),this.characteristic_table);
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-label" }, object_char.label ),to_return );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-modifier-value" }, "+3" ),to_return );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-final-value" } , "16"),to_return );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-initial-value" } , "14"),to_return );
    },
};

SERVICE.CLASS.addPrototype( CHARACTER.CharacteristicWindow, WINDOW_V2.ElementFromData );
