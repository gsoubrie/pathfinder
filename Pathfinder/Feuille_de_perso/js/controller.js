"use strict";
CONTROLLER.Main = (function ( self ) {
    //********************************************  INIT  **************************************************//
    self.init            = function () {
        let params = new URLSearchParams(location.search)
        self.current_data = eval(params.get("id"));
        self.initTitle();
        self.computeHtml();
    };
    self.initTitle       = function () {
        self.area__title = new AREA.Title();
    };
    //********************************************  EVENT LISTENER  **************************************************//
    self.openEdition            = function (property_name) {
        switch ( property_name ) {
            case RACES.key:
                this.edition_popup = new POPUP.PropertyEdition(property_name);
                break;
    
        }
    };
    //********************************************  SAVE  **************************************************//
    self.save            = function (event_name) {
        let to_return = {};
        to_return["area__title"] = self.area__title.getDataToSave();
        console.log("to_return", to_return)
        return to_return;
    };
    //********************************************  HTML  **************************************************//
    self.computeHtml            = function () {
        self.area__title.computeHtml();
        SERVICE.DOM.addElementTo(  self.area__title.getDomElement(), document.querySelector(".sheet-1") );
    };
    self.computeHtml__title     = function () {
        self.computeHtml__title();
    };
    return self;
})
( CONTROLLER.Main || {} );


document.addEventListener( "DOMContentLoaded", function ( e ) {
    CONTROLLER.Main.init();
} );