"use strict";
CONTROLLER.Main = (function ( self ) {
    //********************************************  INIT  **************************************************//
    self.init               = function () {
        CONTROLLER.Character.init();
    };
    //********************************************  EVENT LISTENER  **************************************************//
    self.doActionAfter      = function ( event_name, params ) {
        switch ( event_name ) {
            case "event__show_information":
                SERVICE.instance_popup.open({
                    title: "dfwfcx",
                    description: "dqsdqs"
                  });
                return;
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