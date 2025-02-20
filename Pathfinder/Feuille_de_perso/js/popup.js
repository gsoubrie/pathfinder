"use strict";
POPUP.PropertyEdition           = function (property_name) {
    this.current_property = property_name;
    this.init();
};
POPUP.PropertyEdition.prototype = {
    init: function () {
        switch ( this.current_property ){
            case RACES.key:
                this.data = RACES;
                break;
        }
    },
    //********************************************  SAVE   **************************************************//
    
    //********************************************  HTML   **************************************************//
    computeHtml        : function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "popup edition_property" } ) );
        SERVICE.DOM.addElementTo(SERVICE.DOM.createElement("div", {class : "title", this.data.label}));
        
    }
};

SERVICE.CLASS.addPrototype( POPUP.PropertyEdition, OBJECT.InterfaceHtml );