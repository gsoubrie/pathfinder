"use strict";
POPUP.PropertyEdition           = function ( property ) {
    this.current_property = property;
    this.init();
};
POPUP.PropertyEdition.prototype = {
    init: function () {
        this.windows = new RACES.WindowGroup();
        
        this.windows.setActiveWindow( "elfe" );
        
        console.log( "GSOU", "[PropertyEdition - init]", this.windows );
        this.computeHtml();
    },
    //********************************************  EVENT LISTENER  **************************************************//
    
    //********************************************  SAVE   **************************************************//
    
    //********************************************  HTML   **************************************************//
    computeHtml: function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "popup" } ) );
        this.container = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "edition-property-popup" } ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "title" }, this.current_property.label ), this.container );
        this.windows.computeHtml();
        SERVICE.DOM.addElementTo( this.windows.getDomElement(), this.container );
        
        SERVICE.DOM.addElementTo( this.getDomElement(), document.querySelector( "body" ) );
        
        for ( var i = 0, _size_i = this.windows.getSize(); i < _size_i; i++ ) {
            this.windows.getContent(i).setContentDomElementTarget();
        }
        for ( let i = 0, _size_i = _list.length; i < _size_i; i++ ) {
        
        }
        this.windows.computeHtmlTargets( this.container );
    }
};

SERVICE.CLASS.addPrototype( POPUP.PropertyEdition, PHASE.PhaseInterface );
SERVICE.CLASS.addPrototype( POPUP.PropertyEdition, OBJECT.InterfaceHtml );
