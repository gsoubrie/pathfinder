"use strict";
/**
 * @class CHARACTER.WindowGroup
 * @extends WINDOW_V2.ElementGroupFromData
 */
CHARACTER.WindowGroup           = function () {
    this.init( "character_group" );
};
CHARACTER.WindowGroup.prototype = {
    init               : function ( group_name ) {
        this.initCommon( group_name );
    },
    computeHtmlWithData: function ( character_object ) {
        this.addSpecific( new CHARACTER.GeneralWindow( this.getName() ), character_object );
        this.addSpecific( new CHARACTER.CharacteristicWindow( this.getName() ), character_object );
        this.addSpecific( new CHARACTER.LevelWindow( this.getName() ), character_object );
        this.addSpecific( new CHARACTER.GiftsWindow( this.getName() ), character_object );
        this.addSpecific( new CHARACTER.LevelUpWindow( this.getName() ), character_object );
        if ( !character_object.getRace().isSet() ) {
            this.setVisibilityWindowState( GS.CONST.VISIBILITY_STATE.DISABLED, CHARACTER.CharacteristicWindow.NAME );
        }
        if ( !character_object.getClass().isSet() ) {
            this.setVisibilityWindowState( GS.CONST.VISIBILITY_STATE.DISABLED, CHARACTER.LevelWindow.NAME );
            this.setVisibilityWindowState( GS.CONST.VISIBILITY_STATE.DISABLED, CHARACTER.LevelUpWindow.NAME );
        }
        this.setActiveWindow( CHARACTER.GeneralWindow.NAME );
        // this.setActiveWindow( "characteristic_sheet" );
        this.computeHtml();
        let _windows_container = document.querySelector( ".character-sheet-windows" );
        SERVICE.DOM.addElementTo( this.computeHtmlLogo(), _windows_container );
        SERVICE.DOM.addElementTo( this.getDomElement(), _windows_container );
        this.computeHtmlTargets( document.querySelector( ".characters-sheet-content" ) );
    },
    addSpecific        : function ( to_add, character_object ) {
        this.add( to_add );
        to_add.setCountersParent( this );
        to_add.computeHtmlWithData( character_object );
        return to_add;
    },
    //********************************************  HTML   **************************************************//
    computeHtmlLogo: function () {
        if ( this.logo_dom_element ) {
            return this.logo_dom_element;
        }
        this.logo_dom_element = SERVICE.DOM.createElement( "div", { class: "area-logo" } );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "logo-pathfinder" } ), this.logo_dom_element );
        return this.logo_dom_element;
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.WindowGroup, WINDOW_V2.ElementGroupFromData );