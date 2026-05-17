"use strict";
/**
 * @class OBJECT.Popups
 * @extends OBJECT.InterfaceHtml
 * @extends GS.OBJECT.PhaseInterface
 */
 OBJECT.Popups = function () {
    this.init();
};
OBJECT.Popups.prototype = {
    init : function () {
        this.initContents();
    },
       //********************************************  EVENT LISTENER  **************************************************//
       self.doActionAfter      = function ( event_name, params ) {
        console.log(event_name, params )
        switch ( event_name ) {
            case "event__show_information": {
                //const uuid = params["param__object__uuid"];
                const uuid = "yzNJgwzV9XqEhKc6";
                const obj  = OBJECT.CONST[uuid];

                if (!obj) {
                    console.warn("[Main - doActionAfter] Objet introuvable :", uuid);
                    return;
                }

                const renderer = PopupRendererFactory.create(obj);
                const html     = renderer.computeHtml();
                const popup = new OBJECT.Popup();
                popup.computeHtml();
                console.log(html)
                return;
            }
        }
        CONTROLLER.Character.doActionAfter( event_name, params );
    };
}

SERVICE.CLASS.addPrototype( OBJECT.Popups, OBJECT.InterfaceContainer );
