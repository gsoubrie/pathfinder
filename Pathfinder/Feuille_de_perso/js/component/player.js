"use strict";
/**
 * @class CHARACTER.Player
 * @extends CHARACTER.ComponentInterface
 */
CHARACTER.Player = function () {
    this.init();
};
CHARACTER.Player.prototype = {
    init: function () {
        this.setKey( "player" );
    },
    //********************************************  HTML   **************************************************//
    computeHtml: function ( params ) {
        switch ( params[ "param__window" ] ) {
            case CHARACTER.GeneralWindow.NAME:
                if ( this.dom_element_general ) {
                    return;
                }
                this.dom_element_general = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-player" } ), params[ "param__dom_element_parent" ] );
                SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createPropertyVerticalInput( this.key, this.value, SERVICE.DOM.createElement( "div", {}, this.value ), "Nom du joueur" ), this.dom_element_general );
                return;
            
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Player, CHARACTER.ComponentInterface );
