"use strict";
CLASSES.Class           = function ( data ) {
    this.init( data );
};
CLASSES.Class.prototype = {
    init: function ( data ) {
        this.updateData( data );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    getUUID: function () {
        return this.name_lower_case;
    },
    //********************************************  HTML   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case "name":
            case "name_lower_case":
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

SERVICE.CLASS.addPrototype( CLASSES.Class, OBJECT.InterfaceHtml );
