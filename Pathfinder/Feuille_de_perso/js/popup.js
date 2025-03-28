"use strict";
POPUP.PropertyEdition           = function ( params ) {
    this.init( params );
};
POPUP.PropertyEdition.prototype = {
    init: function ( params ) {
        let property_value = "";
        console.log( params );
        switch ( params[ "property_name" ] ) {
            case RACES.key_element:
                this.current_property = RACES;
                this.windows          = new RACES.WindowGroup();
                break;
            case LEGACIES.key_element:
                this.current_property = LEGACIES;
                this.windows          = new LEGACIES.WindowGroup();
                break;
            default:
                console.log( "GSOU", "[PropertyEdition - init]", "not managed", params[ "property_name" ] );
                break;
        }

        this.windows.setActiveWindow( params[ "property_value" ] );
        this.computeHtml();
    },
    //********************************************  EVENT LISTENER  **************************************************//
    close: function () {
        SERVICE.DOM.removeElement( this.getDomElement() );
    },
    //********************************************  SAVE   **************************************************//
    
    //********************************************  HTML   **************************************************//
    computeHtml: function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "popup" } ) );
        this.container = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "edition-property-popup container" } ), this.getDomElement() );
        let title      = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "" }, this.current_property.label ), this.container );
        let actions    = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "popup-up-actions d-flex flex-row-reverse " } ), title );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: " popup-up-cancel btn btn-danger m-2", onclick: "CONTROLLER.Main.cancelPopupEdition()" }, "Quitter" ), actions );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: " popup-up-valid btn btn-success m-2", onclick: "CONTROLLER.Main.validPopupEdition()" }, "Valider" ), actions );
        this.windows.computeHtml();
        SERVICE.DOM.addElementTo( this.windows.getDomElement(), this.container );
        
        SERVICE.DOM.addElementTo( this.getDomElement(), document.querySelector( "body" ) );
        this.windows.computeHtmlTargets( this.container );
        
    }
};

SERVICE.CLASS.addPrototype( POPUP.PropertyEdition, PHASE.PhaseInterface );
SERVICE.CLASS.addPrototype( POPUP.PropertyEdition, OBJECT.InterfaceHtml );
