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
        let to_return             = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "title" }, CHARACTERISTICS.label ), this.content_dom_element_target );
        this.characteristic_table = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "characteristic-table" } ), this.content_dom_element_target );
        let headers               = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "row headers" } ), this.characteristic_table );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell" } ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Valeur Final" ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Modifi" ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Valeur Initial" ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Bonus Race" ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Bonus Classe" ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Bonus Niv5" ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Bonus Niv10" ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Bonus Niv15" ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Bonus Niv20" ), headers );
        for ( let i = 0, _size_i = character_object[ CHARACTERISTICS.key ].getSize(); i < _size_i; i++ ) {
            this.computeHtml__tableCharacteristic( character_object[ CHARACTERISTICS.key ].getContent( i ) );
        }
    },
    computeHtml__tableCharacteristic : function ( object_characteristic ) {
        let to_return = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "row characteristic-line", "data-name": object_characteristic.key } ), this.characteristic_table );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-label" }, object_characteristic.label ), to_return );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-final-value" }, object_characteristic.final_value ), to_return );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-modifier-value" }, "" ), to_return );
        let initial_dom = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-initial-value" }, "<div>" + object_characteristic.initial_value + "</div>" ), to_return );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createMoreButton( object_characteristic.getParamForEvents() ), initial_dom );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createLessButton( object_characteristic.getParamForEvents() ), initial_dom );
        
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-bonus-race" }, object_characteristic.race_bonus.getLabel().outerHTML ), to_return );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-bonus-class" }, "" ), to_return );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-bonus-niv5" }, "" ), to_return );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-bonus-niv10" }, "" ), to_return );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-bonus-niv15" }, "" ), to_return );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-bonus-niv20" }, "" ), to_return );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.CharacteristicWindow, WINDOW_V2.ElementFromData );
