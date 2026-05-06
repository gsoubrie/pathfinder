"use strict";
CONTROLLER.Main = (function ( self ) {
    //********************************************  INIT  **************************************************//
    self.init               = function () {
        CONTROLLER.Character.init();
    };
    //********************************************  EVENT LISTENER  **************************************************//
    self.doActionAfter      = function ( event_name, params ) {
        switch ( event_name ) {
            case "event__show_information": {
                //const uuid = params["param__object__uuid"];
                const uuid = "yzNJgwzV9XqEhKc6";
                const obj  = OBJECT.CONST[uuid];

                if (!obj) {
                    console.warn("[Main - doActionAfter] Objet introuvable :", uuid);
                    return;
                }

                // Le factory choisit le bon renderer selon obj.category
                const renderer = PopupRendererFactory.create(obj);
                const html     = renderer.computeHtml();

                SERVICE.instance_popup.openHtml(html);
                return;
            }
        }
        CONTROLLER.Character.doActionAfter( event_name, params );
    };
    return self;
})
( CONTROLLER.Main || {} );

CONTROLLER.DistributorControllerManager.getController = function () {
    return CONTROLLER.Main;
};

document.addEventListener( "DOMContentLoaded", function ( e ) {
    CONTROLLER.Main.init();
} );