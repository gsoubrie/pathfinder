"use strict";
/**
 * @class CHARACTER.Name
 * @extends CHARACTER.ComponentInterface
 */
CHARACTER.Name = function () {
    this.init();
};
CHARACTER.Name.prototype = {
    init: function () {
        this.setKey( "name" );
    },
    //********************************************  HTML   **************************************************//
    computeHtml: function ( params ) {
        switch ( params[ "param__window" ] ) {
            case CHARACTER.GeneralWindow.NAME:
                if ( this.dom_element_general ) {
                    return;
                }
                this.dom_element_general = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-name" } ), params[ "param__dom_element_parent" ] );
                SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createPropertyVerticalInput( this.key, this.value, SERVICE.DOM.createElement( "div", {}, this.value ), "Nom du personnage" ), this.dom_element_general );
                return;
            
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Name, CHARACTER.ComponentInterface );
