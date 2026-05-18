"use strict";
/**
 * @class OBJECT.PopupRenderer
 * @extends OBJECT.InterfaceHtml
 * @extends GS.OBJECT.PhaseInterface
 */
OBJECT.PopupRenderer = function ( object_data ) {
    this.init( object_data );
};
OBJECT.PopupRenderer.prototype = {
    init: function ( object_data ) {
        console.log( "GSOU", "[Popup - init]", object_data );
        this.uuid = object_data[ "id" ];
        this.content = this.computeContent(object_data);
        console.log( "GSOU", "[Popup - init]", this );
        //        const renderer = PopupRendererFactory.create( obj );
        //const html     = renderer.computeHtml();
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID: function () {
        return this.uuid;
    },
    //********************************************  COMPUTE  **************************************************//
    computeContent: function (object_data) {
        switch ( object_data.category ) {
            case "action":
                return new OBJECT.ActionPopupRenderer(object_data);
            case "class-feature":
                return new OBJECT.ClassFeaturePopupRenderer(object_data);
            case "feat":
                return new OBJECT.FeatPopupRenderer(object_data);
            case "item":
                return new OBJECT.ItemPopupRenderer(object_data);
            
        }
    },
    //********************************************  HTML  **************************************************//
    computeHtml: function () {
        this.content.computeHtml();
        console.log("GSOU", "[PopupRenderer - computeHtml]", this.content );
        this.dom_element         = SERVICE.DOM.createElement( "div", { class: "popup-overlay" } );
        const popup              = SERVICE.DOM.createElement( "div", { class: "popup-container" } );
        const close_button       = SERVICE.DOM_HELPER.createButton( "event__popup__close", "x", { param__popup__uuid: this.uuid } );
        this.dom_element_content = SERVICE.DOM.createElement( "div", { class: "popup-content" } );
        
        
        popup.appendChild( close_button );
        popup.appendChild( this.dom_element_content );
        this.dom_element_content.appendChild( this.content.dom_element );
        this.dom_element.appendChild( popup );
        
        document.body.appendChild( this.dom_element );
        
    }
};

SERVICE.CLASS.addPrototype( OBJECT.PopupRenderer, OBJECT.InterfaceHtml );
SERVICE.CLASS.addPrototype( OBJECT.PopupRenderer, GS.OBJECT.PhaseInterface );
