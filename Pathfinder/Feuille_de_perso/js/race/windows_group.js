"use strict";


SERVICE.CLASS.addPrototype( RACES.WindowGroup, WINDOW_V2.ElementGroupFromData );

LEGACIES.WindowGroup           = function () {
    this.init( "race_window_group" );
};
LEGACIES.WindowGroup.prototype = {
    init        : function ( group_name ) {
        this.initCommon( group_name );
        this.initWithData();
    },
    initWithData: function ( data_windows ) {
        for ( let i = 0, _size_i = CONTROLLER.Character.current_character.getRace().available_legacies.getSize(); i < _size_i; i++ ) {
            let current = CONTROLLER.Character.current_character.getRace().available_legacies.getContent(i);
            let added   = this.addSpecific( this.getChildConstructor( current.name, this.getName() ) );
            added.setContentDomElementTarget( current.computeHTMLEdition() );
        }
    }
    //********************************************  EVENT LISTENER  **************************************************//
    
    //********************************************  HTML   **************************************************//
};

SERVICE.CLASS.addPrototype( LEGACIES.WindowGroup, WINDOW_V2.ElementGroupFromData );


CLASSES.WindowGroup           = function () {
    this.init( "class_window_group" );
};
CLASSES.WindowGroup.prototype = {
    init        : function ( group_name ) {
        this.initCommon( group_name );
        CONTROLLER.Main.classes = new CLASSES.Classes();
        this.initWithData();
    },
    initWithData: function () {
        for ( let i = 0, _size_i = CONTROLLER.Main.classes.getSize(); i < _size_i; i++ ) {
            let current = CONTROLLER.Main.classes.getContent( i );
            let added   = this.addSpecific( this.getChildConstructor( current.name, this.getName() ) );
            added.setContentDomElementTarget( current.computeHTMLEdition() );
        }
    }
    //********************************************  EVENT LISTENER  **************************************************//
    
    //********************************************  HTML   **************************************************//
};

SERVICE.CLASS.addPrototype( CLASSES.WindowGroup, WINDOW_V2.ElementGroupFromData );


HISTORICS.WindowGroup           = function () {
    this.init( "historic_window_group" );
};
HISTORICS.WindowGroup.prototype = {
    init        : function ( group_name ) {
        this.initCommon( group_name );
        CONTROLLER.Main.historics = new HISTORICS.Historics();
        this.initWithData();
    },
    initWithData: function () {
        for ( let i = 0, _size_i = CONTROLLER.Main.historics.getSize(); i < _size_i; i++ ) {
            let current = CONTROLLER.Main.historics.getContent( i );
            let added   = this.addSpecific( this.getChildConstructor( current.name, this.getName() ) );
            added.setContentDomElementTarget( current.computeHTMLEdition() );
        }
    }
    //********************************************  EVENT LISTENER  **************************************************//
    
    //********************************************  HTML   **************************************************//
};

SERVICE.CLASS.addPrototype( HISTORICS.WindowGroup, WINDOW_V2.ElementGroupFromData );