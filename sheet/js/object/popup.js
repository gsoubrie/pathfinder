"use strict";
/**
 * @class OBJECT.Popup
 * @extends OBJECT.InterfaceHtml
 * @extends GS.OBJECT.PhaseInterface
 */
 OBJECT.Popup = function () {
    this.init();
};
OBJECT.Popup.prototype = {
    init : function () {
        this.uuid                = SERVICE.STRING.buildUUID();
    },
    //********************************************  HTML  **************************************************//
    computeHtml                 : function () {
        this.dom_element = SERVICE.DOM.createElement( "div", { class: "popup-overlay" } );
        const popup  = SERVICE.DOM.createElement( "div", { class: "popup-container" } );
        const close_button  = SERVICE.DOM_HELPER.createButton("event__popup__close", "x", {param__popup__uuid: this.uuid} );
        this.dom_element_content = SERVICE.DOM.createElement( "div", { class: "popup-content" } );


        popup.appendChild(close_button);
        popup.appendChild(this.dom_element_content);
        this.dom_element.appendChild(popup);

        document.body.appendChild(this.dom_element);

    }    
}

SERVICE.CLASS.addPrototype( OBJECT.Popup, OBJECT.InterfaceHtml );
SERVICE.CLASS.addPrototype( OBJECT.Popup, GS.OBJECT.PhaseInterface );
