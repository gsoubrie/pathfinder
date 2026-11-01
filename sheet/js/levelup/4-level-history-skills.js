"use strict";
/**
 * @class CHARACTER.LevelHistorySkills
 * @extends OBJECT.InterfaceContainerHtml
 */
CHARACTER.LevelHistorySkills = function ( level_value, data ) {
    this.init( level_value, data );
};
CHARACTER.LevelHistorySkills.prototype = {
    init: function ( level_value, data ) {
        this.level_value = level_value;
        this.initContents();
        this.updateData( data );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    getDataToSave    : function () {
        let to_return = [];
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            to_return.push( this.getContent( i ).getDataToSave() );
        }
        return to_return;
    },
    //********************************************  UPDATE DATA   **************************************************//
    updateData: function ( data ) {
        if ( !data ) {
            return;
        }
        for ( let i = 0, _size_i = data.length; i < _size_i; i++ ) {
            let current  = new CHARACTER.LevelHistorySkill( this.level_value, data[ i ] );
            let existing = this.getContentByUUID( current.getUUID() );
            if ( !existing ) {
                existing = this.add( current );
            }
        }
    },
    //********************************************  HTML   **************************************************//
    updateHtmlData : function ( key, value ) {
    },
    computePageHTML: function () {
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.LevelHistorySkills, OBJECT.InterfaceContainerHtml );