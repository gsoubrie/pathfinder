"use strict";
CONTROLLER.Main = (function ( self ) {
    //********************************************  INIT  **************************************************//
    self.init               = function () {
        let params        = new URLSearchParams( location.search );
        self.races        = new RACES.Races();
        self.current_uuid = params.get( "id" );
        self.current_data = eval( self.current_uuid );
        self.initTitle();
        self.computeHtml();
    };
    self.initTitle          = function () {
        self.area__title = new AREA.Title();
    };
    //********************************************  EVENT LISTENER  **************************************************//
    self.doActionAfter        = function ( event_name, params ) {
        console.log(event_name, params);
        switch ( event_name ) {
            case "open_edition_popup":
                params["data_save"] = self.area__title.getDataToSave();
                this.edition_popup = new POPUP.PropertyEdition( params);
                break;
            
        }
    };    
    self.validPopupEdition  = function () {
        self.area__title.validPopupEdition( this.edition_popup );
        this.edition_popup.close();
        this.edition_popup = null;
    };
    self.cancelPopupEdition  = function () {
        this.edition_popup.close();
        this.edition_popup = null;
    };
    //********************************************  SAVE  **************************************************//
    self.save               = function ( event_name ) {
        let to_return = self.area__title.getDataToSave();
        const link    = document.createElement( "a" );
        const file    = new Blob( ["let " + self.current_uuid + "=" + JSON.stringify( to_return )], { type: 'application/json' } );
        link.href     = URL.createObjectURL( file );
        link.download = self.current_uuid + ".js";
        link.click();
        URL.revokeObjectURL( link.href );
        return to_return;
    };
    //********************************************  HTML  **************************************************//
    self.computeHtml        = function () {
        self.area__title.computeHtml();
        SERVICE.DOM.addElementTo( self.area__title.getDomElement(), document.querySelector( ".sheet-1" ) );
    };
    self.computeHtml__title = function () {
        self.computeHtml__title();
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