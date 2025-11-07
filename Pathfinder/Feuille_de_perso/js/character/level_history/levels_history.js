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
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID          : function () {
        return this.uuid;
    },
    getDataToSave    : function () {
        let to_return = {};
        return to_return;
    },
    getTotalLife     : function () {
        let to_return = 0;
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            to_return += this.getContent( i ).life_class;
        }
        return to_return;
    },
    getSpecialContent: function ( key_name ) {
        switch ( key_name ) {
            case HISTORICS.key_element :
                return this.getContent( 0 ).skills.getContentByUUID( "1 - " + key_name );
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
    },
    //********************************************  HTML   **************************************************//
    updateHtmlData : function ( key, value ) {
    },
    computePageHTML: function () {
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.LevelsHistory, OBJECT.InterfaceContainerHtml );

/**
 * @class CHARACTER.LevelHistory
 * @extends OBJECT.InterfaceHtml
 */
CHARACTER.LevelHistory = function ( uuid ) {
    this.init( uuid );
};
CHARACTER.LevelHistory.prototype = {
    init: function ( uuid ) {
        this.uuid       = uuid;
        this.life_class = null;
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID      : function () {
        return this.uuid;
    },
    getDataToSave: function () {
        let to_return = {};
        return to_return;
    },
    //********************************************  UPDATE DATA   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case "level_name":
                this.uuid = value;
                break;
            case "life_class":
                this.life_class = value;
                break;
            case "skill":
                this.skills = new CHARACTER.LevelHistorySkills( this.uuid, value );
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    },
    //********************************************  HTML   **************************************************//
    updateHtmlData : function ( key, value ) {
    },
    computePageHTML: function () {
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.LevelHistory, OBJECT.InterfaceHtml );
