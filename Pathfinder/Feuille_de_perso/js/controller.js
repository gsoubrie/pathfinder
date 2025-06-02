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
        console.log(event_name, params)
        switch ( event_name ) {
            case "open_edition_popup":
                this.edition_popup    = new POPUP.PropertyEdition( params );
                break;
            case "click_on_button_V3":
                switch ( params["button_name"] ){
                    case "initial_char_plus":
                    case "initial_char_less":
                        self.current_character.doActionAfter(params["button_name"], params );
                        break;
                }
                break;
            
        }
    };
    self.validPopupEdition  = function () {
        switch ( this.edition_popup.current_property.key_element ){
            case RACES.key_element:
                self.current_character.getRace().setName( this.edition_popup.windows.getActiveWindow().getName() );
                self.current_character.getRace().getLegacy().setName("");
                break;
            case LEGACIES.key_element:
                self.current_character.getRace().getLegacy().setName( this.edition_popup.windows.getActiveWindow().getName() );
                break;
            case CLASSES.key_element:
                self.current_character.getClass().setName( this.edition_popup.windows.getActiveWindow().getName() );
                break;
        }
        //self.current_character.setData( this.edition_popup.current_property.key_element, this.edition_popup.windows.getActiveWindow().getName() );
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