"use strict";
POPUP.PropertyEdition           = function ( property ) {
    this.current_property = property;
    this.init();
};
POPUP.PropertyEdition.prototype = {
    init: function () {
        console.log("GSOU", "[PropertyEdition - init]", this.current_property );
    },
    //********************************************  SAVE   **************************************************//
    
    //********************************************  HTML   **************************************************//
    computeHtml: function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "popup edition_property" } ) );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "title" }, this.current_property.label ) );
        
    }
};

SERVICE.CLASS.addPrototype( POPUP.PropertyEdition, PHASE.PhaseInterface  );
