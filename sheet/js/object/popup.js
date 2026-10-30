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
        this.initPhase();
        this.uuid    = object_data[ "id" ];
        this.content = this.computeContent( object_data );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__show_information":
                this.setPhase( GS.OBJECT.CONST.PHASE.RUNNING_TO_STRING );
                return;
            case "event__popup__close":
                this.setPhase( GS.OBJECT.CONST.PHASE.HIDDEN_TO_STRING );
                return;
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID: function () {
        return this.uuid;
    },
    //********************************************  COMPUTE  **************************************************//
    computeContent: function ( object_data ) {
        switch ( object_data.category ) {
            case "action":
                return new OBJECT.ActionPopupRenderer( object_data );
            case "class-feature":
                return new OBJECT.ClassFeaturePopupRenderer( object_data );
            case "masteries":
                return new OBJECT.MasteriesPopupRenderer( object_data );
            case "skill-actions":
                return new OBJECT.SkillActionsPopupRenderer( object_data );
            case "feat":
                return new OBJECT.FeatPopupRenderer( object_data );
            case "item":
                return new OBJECT.ItemPopupRenderer( object_data );
            default:
                return new OBJECT.DefaultPopupRenderer( object_data );
        }
    },
    //********************************************  HTML  **************************************************//
    computeHtml: function () {
        this.content.computeHtml();
        // Le clic sur le fond de l'overlay referme la popup : le handler ne
        // se declenche que quand la cible est l'overlay lui-meme, jamais quand
        // le clic remonte d'un enfant de la zone de contenu
        this.dom_element         = SERVICE.DOM.createElement( "div", {
            class  : "popup-overlay",
            onclick: "if ( event.target === this ) { MANAGER.EventManagerV2.doActionAfter(event,'event__popup__close',{'param__popup__uuid':'" + this.uuid + "'}) }"
        } );
        const popup              = SERVICE.DOM.createElement( "div", { class: "popup-container" } );
        const close_button       = SERVICE.DOM_HELPER.createButton( "event__popup__close", "x", { param__popup__uuid: this.uuid } );
        this.dom_element_content = SERVICE.DOM.createElement( "div", { class: "popup-content" } );
        
        
        popup.appendChild( close_button );
        popup.appendChild( this.dom_element_content );
        this.dom_element_content.appendChild( this.content.dom_element );
        this.dom_element.appendChild( popup );
        
        document.body.appendChild( this.dom_element );
        this.setPhaseDomElement( this.dom_element );
    }
};

SERVICE.CLASS.addPrototype( OBJECT.PopupRenderer, OBJECT.InterfaceHtml );
SERVICE.CLASS.addPrototype( OBJECT.PopupRenderer, GS.OBJECT.PhaseInterface );
