"use strict";
CONTROLLER.Character = (function ( self ) {
    //********************************************  INIT  **************************************************//
    self.init               = function () {
        let params             = new URLSearchParams( location.search );
        self.current_uuid      = params.get( "id" );
        self.current_character = new CHARACTER.Current();
        self.current_character.init( self.current_uuid );
        self.computeHtml();
    };
    //********************************************  EVENT LISTENER  **************************************************//
    self.doActionAfter      = function ( event_name, params ) {
        switch ( event_name ) {
            case "open_edition_popup":
                this.edition_popup = new POPUP.PropertyEdition( params );
                break;
            case "click_on_button_V3":
                if ( params[ "param__current_character__uuid" ] ) {
                    self.current_character.doActionAfter( event_name, params );
                    return;
                }
                break;
            case "event__free_bonus_is_zero":
                self.current_character.doActionAfter( event_name, params );
                break;
            case "event__form__element_changed":
                self.current_character.doActionAfter( event_name, { "param__property": this.edition_popup.current_property.key_element, "param__edition_value": this.edition_popup.windows.getActiveWindow().getName() } );
                this.doActionAfter( "event__form__reset" );
                break;
            case "event__form__reset":
                this.edition_popup.close();
                this.edition_popup = null;
                break;
        }
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
( CONTROLLER.Character || {} );
