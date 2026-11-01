"use strict";
/**
 * @class CHARACTER.LevelsHistory
 * @extends OBJECT.InterfaceContainerHtml
 */
CHARACTER.LevelsHistory = function () {
    this.init();
};
CHARACTER.LevelsHistory.prototype = {
    init: function () {
        this.initContents();
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
        }
        OBJECT.InterfaceContainer.prototype.doActionAfter.call( this, event_name, params );
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID          : function () {
        return "levels_history";
    },
    getActiveSize    : function () {
        let to_return = 0;
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            if ( this.getContent( i ).isEnabled() ) {
                to_return++;
            }
        }
        return to_return;
    },
    getNextLevelName: function () {
        let to_return = 1;
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            let _current = parseInt( this.getContent( i ).getUUID() );
            if ( !isNaN( _current ) && _current >= to_return ) {
                to_return = _current + 1;
            }
        }
        return "" + to_return;
    },
    getSpecialContent: function ( key_name ) {
        switch ( key_name ) {
            case HISTORICS.key_element :
                return this.getContent( 0 ).skills.getContentByUUID( "1 - " + key_name );
        }
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        let to_return                 = {};
        to_return[ "levels_history" ] = [];
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            to_return[ "levels_history" ].push( this.getContent( i ).getDataToSave() );
        }
        return to_return;
    },
    //********************************************  DATA   **************************************************//
    // Builds the level-up block of every entry missing one: initial load and
    // incremental adds (take level, class from the popup) share the same
    // idempotent path
    buildSkills: function () {
        let class_level_counts = {};
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            let history_entry      = this.getContent( i );
            let class_name         = history_entry.getClassName();
            let class_level_number = 0;
            if ( class_name ) {
                class_level_counts[ class_name ] = ( class_level_counts[ class_name ] || 0 ) + 1;
                class_level_number               = class_level_counts[ class_name ];
            }
            history_entry.buildSkills( class_level_number );
        }
    },
    //********************************************  UPDATE DATA   **************************************************//
    updateData: function ( data ) {
        if ( !data ) {
            return;
        }
        for ( let i = 0, _size_i = data.length; i < _size_i; i++ ) {
            let current = this.getContentByUUID( data[ i ][ "level_name" ] );
            if ( !current ) {
                current = this.add( new CHARACTER.LevelHistory( data[ i ][ "level_name" ] ) );
            }
            current.updateData( data[ i ] );
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.LevelsHistory, OBJECT.InterfaceContainerHtml );
