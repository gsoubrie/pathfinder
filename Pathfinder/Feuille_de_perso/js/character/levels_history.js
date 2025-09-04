"use strict";
/**
 * @class CHARACTER.LevelsHistory
 * @extends OBJECT.InterfaceContainerHtml
 */
CHARACTER.LevelsHistory = function () {
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
    getUUID      : function () {
        return this.uuid;
    },
    getDataToSave: function () {
        let to_return = {};
        return to_return;
    },
    //********************************************  UPDATE DATA   **************************************************//
    updateData: function ( data ) {
        if ( !data ) {
            return;
        }
        for ( let i = 0, _size_i = data.length; i < _size_i; i++ ) {
            let current = this.getContentByUUID( data[ i ][ "level_name" ] );
            if ( !current ) {
                current.add( new CHARACTER.LevelHistory( data[ i ][ "level_name" ] ) );
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

"use strict";
/**
 * @class CHARACTER.LevelHistory
 * @extends OBJECT.InterfaceHtml
 */
CHARACTER.LevelHistory = function ( uuid ) {
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
