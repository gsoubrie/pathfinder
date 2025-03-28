"use strict";
CONTROLLER.Main = (function ( self ) {
    //********************************************  INIT  **************************************************//
    self.init               = function () {
        let params             = new URLSearchParams( location.search );
        self.current_uuid      = params.get( "id" );
        self.current_character = new CHARACTER.Current( self.current_uuid );
        self.computeHtml();
    };
    //********************************************  EVENT LISTENER  **************************************************//
    self.doActionAfter      = function ( event_name, params ) {
        console.log( event_name, params );
        switch ( event_name ) {
            case "open_edition_popup":
                this.edition_popup    = new POPUP.PropertyEdition( params );
                break;
            
        }
    };
    self.validPopupEdition  = function () {
        self.current_character.setData( this.edition_popup.current_property.key_element, this.edition_popup.windows.getActiveWindow().getName() );
        this.edition_popup.close();
        this.edition_popup = null;
    };
    self.cancelPopupEdition = function () {
        this.edition_popup.close();
        this.edition_popup = null;
    };
    //********************************************  SAVE  **************************************************//
    self.save               = function ( event_name ) {
        let to_return = self.current_character.getDataToSave();
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
        self.current_character.computePageHTML();
        SERVICE.DOM.addElementTo( self.current_character.getDomElement(), document.querySelector( ".sheet-1" ) );
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