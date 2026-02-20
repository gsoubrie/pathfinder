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
        character_object.getCharacteristics().setCountersParent( this );
        this.content_dom_element_target = new SERVICE.DOM.createElement( "div", { class: "characteristic-container" } );
        this.computeComponent(character_object.getCharacteristics());
        //character_object.getCharacteristics().computeHtml__tableCharacteristics();
        //this.computeHtml__tableCharacteristics( character_object );
        //SERVICE.DOM.addElementToAfterEmpty( this.content_dom_element_target, this.dom_element_target );
        //character_object.getCharacteristics().setCountersParent( this );
    },
    computeComponent: function (object) {
        object.doActionAfter("event__compute__html", {"param__window" : CHARACTER.CharacteristicWindow.NAME, "param__dom_element_parent" : this.content_dom_element_target });
    },
};

SERVICE.CLASS.addPrototype( CHARACTER.CharacteristicWindow, WINDOW_V2.ElementFromData );

CHARACTER.CharacteristicWindow.NAME = "characteristics";