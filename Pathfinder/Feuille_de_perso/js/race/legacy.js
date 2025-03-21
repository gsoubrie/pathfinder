"use strict";
LEGACIES.Legacy           = function ( data ) {
    this.init( data );
};
LEGACIES.Legacy.prototype = {
    init: function ( data ) {
        this.updateData( data );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    getUUID: function () {
        return this.name;
    },
    //********************************************  HTML   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case "name":
            case "general_desc":
                this[ key ] = value;
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    },
    //********************************************  HTML   **************************************************//
    computeHTMLEdition: function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "race-edition" } ) );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createEditionPropertyDescription( this.general_desc, "Description" ), this.getDomElement() );
        return this.getDomElement();
    }
};

SERVICE.CLASS.addPrototype( LEGACIES.Legacy, OBJECT.InterfaceHtml );
