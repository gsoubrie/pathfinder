"use strict";
CHARACTER.CharacteristicWindow           = function ( window_name, parent_name ) {
    this.initSpecific( window_name, parent_name );
};
CHARACTER.CharacteristicWindow.prototype = {
    initSpecific: WINDOW_V2.ElementFromData.initSpecific,
    
    //********************************************  EVENT LISTENER  **************************************************//
    
    //********************************************  HTML   **************************************************//
    /**
     * @param {CHARACTER.Current} character_object
     */
    computeHtmlWithData              : function ( character_object ) {
        this.content_dom_element_target = new SERVICE.DOM.createElement( "div", { class: "characteristic-container" } );
        this.computeHtml__tableCharacteristics( character_object );
        SERVICE.DOM.addElementToAfterEmpty( this.content_dom_element_target, this.dom_element_target );
        character_object.getCharacteristics().setCountersParent( this );
    },
    /**
     * @param {CHARACTER.Current} character_object
     */
    computeHtml__tableCharacteristics: function ( character_object ) {
        let to_return             = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "title" }, CHARACTERISTICS.label ), this.content_dom_element_target );
        this.characteristic_table = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "characteristic-table" } ), this.content_dom_element_target );
        let headers               = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "row headers" } ), this.characteristic_table );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell" } ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Valeur Final" ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Modifi" ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Valeur Initial" ), headers );
        
        let header_bonus_race = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Race" ), headers );
        let counter_warning   = new GS.OBJECT.CounterV2( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
        counter_warning.computeHtml();
        character_object.characteristics.race_bonus.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ).setParent( counter_warning );
        SERVICE.DOM.addElementTo( counter_warning.dom_element, header_bonus_race );
        
        let header_bonus_class = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Classe" ), headers );
        let counter_warning_2   = new GS.OBJECT.CounterV2( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
        counter_warning_2.computeHtml();
        character_object.characteristics.class_bonus.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ).setParent( counter_warning_2 );
        SERVICE.DOM.addElementTo( counter_warning_2.dom_element, header_bonus_class );
        
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Bonus Niv5" ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Bonus Niv10" ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Bonus Niv15" ), headers );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell header" }, "Bonus Niv20" ), headers );
        for ( let i = 0, _size_i = character_object.getCharacteristics().getSize(); i < _size_i; i++ ) {
            this.computeHtml__tableCharacteristic( character_object.getCharacteristics().getContent( i ) );
        }
    },
    computeHtml__tableCharacteristic : function ( object_characteristic ) {
        object_characteristic.computeHtml();
        let to_return = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "row characteristic-line", "data-name": object_characteristic.name } ), this.characteristic_table );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-label" }, object_characteristic.label ), to_return );
        
        var final_value = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-final-value" } ), to_return );
        SERVICE.DOM.addElementTo( object_characteristic.final_value.dom_element, final_value );
        
        var modifier_value = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-modifier-value" }, "" ), to_return );
        SERVICE.DOM.addElementTo( object_characteristic.modifier_value.dom_element, modifier_value );
        
        let initial_dom = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-initial-value" } ), to_return );
        SERVICE.DOM.addElementTo( object_characteristic.initial_value.dom_element, initial_dom );
        
        var bonus_race = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-bonus characteristic-bonus-race" } ), to_return );
        SERVICE.DOM.addElementTo( object_characteristic.race_bonus.dom_element, bonus_race );
        
        var bonus_class = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-bonus characteristic-bonus-class" } ), to_return );
        SERVICE.DOM.addElementTo( object_characteristic.class_bonus.dom_element, bonus_class );
        
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-bonus-niv5" }, "" ), to_return );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-bonus-niv10" }, "" ), to_return );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-bonus-niv15" }, "" ), to_return );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "cell characteristic-bonus-niv20" }, "" ), to_return );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.CharacteristicWindow, WINDOW_V2.ElementFromData );
