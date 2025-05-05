"use strict";
LEGACIES.Legacy           = function ( data ) {
    this.init( data );
};
LEGACIES.Legacy.prototype = {
    init: function ( data ) {
        this.updateData( data );
    },
    //********************************************  GETTER SETTER  **************************************************//
    setName: function ( to_set ) {
        this.name            = to_set;
        this.name_lower_case = to_set.toLowerCase();
    },
    getUUID: function () {
        return this.name_lower_case;
    },
    //********************************************  HTML   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case "name":
                this.setName(value);
                break;
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
