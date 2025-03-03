"use strict";
RACES.WindowGroup           = function () {
    this.init( "race_window_group" );
};
RACES.WindowGroup.prototype = {
    init      : function ( group_name ) {
        this.initCommon( group_name );
        this.initWithData();
    },
    initWithData: function ( data_windows ) {
        for ( let i = 0, _size_i = CONTROLLER.Main.races.getSize(); i < _size_i; i++ ) {
            let current = CONTROLLER.Main.races.getContent(i);
            let added = this.addSpecific( this.getChildConstructor( current.name, this.getName() ) );
            added.setContentDomElementTarget( current.computeHTMLEdition() );
        }
    },
    //********************************************  EVENT LISTENER  **************************************************//
    
    //********************************************  HTML   **************************************************//
};

SERVICE.CLASS.addPrototype( RACES.WindowGroup, WINDOW_V2.ElementGroupFromData );
