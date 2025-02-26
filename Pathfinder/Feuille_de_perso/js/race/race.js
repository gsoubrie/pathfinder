"use strict";
RACES.Race           = function ( data ) {
    this.init( data );
};
RACES.Race.prototype = {
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
            case "start_life":
            case "body_size":
            case "speed":
            case "characteristic_bonus":
            case "characteristic_malus":
            case "language":
            case "trait":
            case "night_vision":
            case "heritage":
            case "info":
            case "dons":
                this[key] = value;
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    },
    //********************************************  HTML   **************************************************//
    computeHTMLEdition: function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "race-edition" } ) );
        SERVICE.DOM.addElementTo(SERVICE.DOM.createElement( "div", { class: "race-name" }, this.name ), this.getDomElement());
        return this.getDomElement();
    }
};

SERVICE.CLASS.addPrototype( RACES.Race, OBJECT.InterfaceHtml );
