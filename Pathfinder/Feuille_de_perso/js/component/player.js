"use strict";
/**
 * @class Player
 * @extends OBJECT.InterfaceHtml
 */
CHARACTER.Player = function () {
    this.init();
};
CHARACTER.Player.prototype = {
    init: function () {
        this.key = "player";
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__compute__html":
                this.computeHtml( params );
                return;
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    setName      : function ( to_set ) {
        this.name = to_set;
    },
    getDataToSave: function () {
        let to_return         = {};
        to_return[ this.key ] = this.name;
        return to_return;
    },
    //********************************************  HTML   **************************************************//
    computeHtml: function ( params ) {
        switch ( params[ "param__window" ] ) {
            case CHARACTER.GeneralWindow.NAME:
                if ( this.dom_element_general ) {
                    return;
                }
                this.dom_element_general = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-player" } ), params[ "param__dom_element_parent" ] );
                SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createPropertyVerticalInput( this.key, this.name, SERVICE.DOM.createElement( "div", {}, this.name ), "Nom du joueur" ), this.dom_element_general );
                return;
            
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Player, OBJECT.InterfaceHtml );
