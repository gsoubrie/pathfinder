"use strict";
CHARACTER.WindowGroup           = function () {
    this.init( "character_group" );
};
CHARACTER.WindowGroup.prototype = {
    init               : function ( group_name ) {
        this.initCommon( group_name );
    },
    computeHtmlWithData: function ( character_object ) {
        this.addSpecific( new CHARACTER.GeneralWindow( "general_sheet", this.getName() ), character_object );
        this.addSpecific( new CHARACTER.CharacteristicWindow( "characteristic_sheet", this.getName() ), character_object );
        this.addSpecific( new CHARACTER.LevelWindow( "level_sheet", this.getName() ), character_object );
        this.setActiveWindow( "general_sheet" );
        // this.setActiveWindow( "characteristic_sheet" );
        this.computeHtml();
        SERVICE.DOM.addElementTo( this.getDomElement(), document.querySelector( ".character-sheet-windows" ) );
        this.computeHtmlTargets( document.querySelector( ".characters-sheet-content" ) );
    },
    addSpecific        : function ( to_add, character_object ) {
        this.add( to_add );
        to_add.setCountersParent( this );
        to_add.computeHtmlWithData( character_object );
        return to_add;
    }
    //********************************************  EVENT LISTENER  **************************************************//
    
    //********************************************  HTML   **************************************************//
};

SERVICE.CLASS.addPrototype( CHARACTER.WindowGroup, WINDOW_V2.ElementGroupFromData );
