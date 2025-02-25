"use strict";
CONTROLLER.Main = (function ( self ) {
    //********************************************  INIT  **************************************************//
    self.init               = function () {
        let params        = new URLSearchParams( location.search );
        self.races = new RACES.Races();
        self.current_uuid = params.get( "id" );
        self.current_data = eval( self.current_uuid );
        self.initTitle();
        self.computeHtml();
    };
    self.initTitle          = function () {
        self.area__title = new AREA.Title();
    };
    //********************************************  EVENT LISTENER  **************************************************//
    self.openEdition        = function ( property_name ) {
        switch ( property_name ) {
            case RACES.key:
                this.edition_popup = new POPUP.PropertyEdition( RACES );
                break;
            
        }
    };
    self.changeTabPopup     = function ( tab_name ) {
        this.edition_popup.changeTabPopup( tab_name );
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


document.addEventListener( "DOMContentLoaded", function ( e ) {
    CONTROLLER.Main.init();
} );