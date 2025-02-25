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
    computeHtml: function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "tabs-container" } ) );
        
        let tabs = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "tabs" } ), this.getDomElement() );
        
        for ( let index = 0; index < this.data_array.length; index++ ) {
            const current   = this.data_array[ index ];
            let tab         = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "button", { class: "tab", onclick: "CONTROLLER.Main.changeTabPopup('" + current.key + "')" }, current.key ), tabs );
            let tab_content = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "tab-content" }, current.key ), this.getDomElement() );
            if ( index == 0 ) {
                tab.classList.add( "active" );
            }
            else {
                tab_content.classList.add( "hidden" );
            }
        }
        
        SERVICE.DOM.addElementTo( this.getDomElement(), document.querySelector( "body" ) );
    }
};

SERVICE.CLASS.addPrototype( RACES.Race, OBJECT.InterfaceHtml );
