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
        switch ( event_name ) {
            case "event__show_information":
                let uuid = params["param__object__uuid"];
                if ( this.getSize() === 0 ){
                    uuid         = "yzNJgwzV9XqEhKc6";
                }
                let existing_popup = this.getContentByUUID( uuid );
                if ( !existing_popup ) {
                    existing_popup = this.add( new OBJECT.PopupRenderer( OBJECT.CONST[ uuid ] ) );
                    existing_popup.computeHtml();
                }
                existing_popup.doActionAfter(event_name, params);
                return;
            case "event__popup__close":
                this.getContentByUUID( params["param__popup__uuid"] ).doActionAfter(event_name, params);
                return;
        }
    }
};

SERVICE.CLASS.addPrototype( OBJECT.PopupRenderers, OBJECT.InterfaceContainer );
