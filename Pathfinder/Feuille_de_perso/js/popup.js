"use strict";
POPUP.PropertyEdition           = function ( property ) {
    this.current_property = property;
    this.init();
};
POPUP.PropertyEdition.prototype = {
    init: function () {
        this.tabs = new TABS.Edition(this.current_property.ENUM)
        console.log("GSOU", "[PropertyEdition - init]", this.current_property );
        this.computeHtml();
    },
    //********************************************  EVENT LISTENER  **************************************************//
    changeTabPopup        : function ( tab_name ) {
        this.tabs.changeTabPopup(tab_name);
    },    
    //********************************************  SAVE   **************************************************//
    
    //********************************************  HTML   **************************************************//
    computeHtml: function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "popup" } ) );
        let container = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "edition-property-popup" } ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "title" }, this.current_property.label ), container);
        this.tabs.computeHtml();
        SERVICE.DOM.addElementTo( this.tabs.getDomElement(), container);

        SERVICE.DOM.addElementTo( this.getDomElement(), document.querySelector("body"));
    }
};

SERVICE.CLASS.addPrototype( POPUP.PropertyEdition, PHASE.PhaseInterface  );
SERVICE.CLASS.addPrototype( POPUP.PropertyEdition, OBJECT.InterfaceHtml  );
