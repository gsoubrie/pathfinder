"use strict";
RACES.Races           = function () {
    this.init();
};
RACES.Races.prototype = {
    init: function () {
        this.initContents();
        for ( let i = 0, _size_i = RACES.ENUM.length; i < _size_i; i++ ) {
            this.add( new RACES.Race(RACES.ENUM[i]));
        }
    },
    //********************************************  EVENT LISTENER  **************************************************//
    changeTabPopup: function ( tab_name ) {
        let dom_tabs     = this.getDomElement().querySelectorAll( ".tab" );
        let dom_contents = this.getDomElement().querySelectorAll( ".tab-content" );
        for ( let index = 0; index < this.data_array.length; index++ ) {
            if ( this.data_array[ index ].key === tab_name ) {
                dom_tabs[ index ].classList.add( "active" );
                dom_contents[ index ].classList.remove( "hidden" );
            }
            else {
                dom_tabs[ index ].classList.remove( "active" );
                dom_contents[ index ].classList.add( "hidden" );
            }
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

SERVICE.CLASS.addPrototype( RACES.Races, OBJECT.InterfaceContainerHtml );
