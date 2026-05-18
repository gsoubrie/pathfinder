"use strict";
/**
 * @class OBJECT.PopupRenderers
 * @extends OBJECT.InterfaceHtml
 * @extends GS.OBJECT.PhaseInterface
 */
OBJECT.PopupRenderers = function () {
    this.init();
};
OBJECT.PopupRenderers.prototype = {
    init: function () {
        this.initContents();
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        console.log( event_name, params );
        switch ( event_name ) {
            case "event__show_information": {
                //const uuid = params["param__object__uuid"];
                const uuid         = "yzNJgwzV9XqEhKc6";
                let existing_popup = this.getContentByUUID( uuid );
                if ( !existing_popup ) {
                    existing_popup = this.add( new OBJECT.PopupRenderer( OBJECT.CONST[ uuid ] ) );
                    existing_popup.computeHtml();
                }
                return;
            }
        }
        CONTROLLER.Character.doActionAfter( event_name, params );
    }
};

SERVICE.CLASS.addPrototype( OBJECT.PopupRenderers, OBJECT.InterfaceContainer );
