"use strict";
/**
 * @class CHARACTER.LevelHistorySkills
 * @extends OBJECT.InterfaceContainerHtml
 */
CHARACTER.LevelHistorySkills = function ( level_value, data ) {
    console.log( "GSOU", "[LevelHistorySkills - LevelHistorySkills]", level_value, data );
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
    getDataToSave: function () {
        let to_return = {};
        return to_return;
    },
    //********************************************  UPDATE DATA   **************************************************//
    updateData: function ( data ) {
        console.log( "GSOU", "[LevelHistorySkills - updateData]", data );
        if ( !data ) {
            return;
        }
        for ( let i = 0, _size_i = data.length; i < _size_i; i++ ) {
            let current  = new CHARACTER.LevelHistorySkill( this.level_value, data[ i ] );
            let existing = this.getContentByUUID( current.getUUID() );
            if ( !existing ) {
                existing = this.add( current );
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

SERVICE.CLASS.addPrototype( CHARACTER.LevelHistorySkills, OBJECT.InterfaceContainerHtml );

/**
 * @class CHARACTER.LevelHistorySkill
 * @extends OBJECT.InterfaceHtml
 */
CHARACTER.LevelHistorySkill = function ( level_value, data ) {
    this.init( level_value, data );
};
CHARACTER.LevelHistorySkill.prototype = {
    init: function ( level_value, data ) {
        this.level_value = level_value;
        var _keys        = Object.keys( data );
        for ( let i = 0, _size = _keys.length; i < _size; i++ ) {
            this.setData( _keys[ i ], _keys[ i ] );
        }
        this.computeUUID();
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    computeUUID  : function () {
        this.uuid = this.level_value + " - " + this.name;
    },
    getUUID      : function () {
        return this.uuid;
    },
    getDataToSave: function () {
        let to_return = {};
        return to_return;
    },
    //********************************************  UPDATE DATA   **************************************************//
    setData    : function ( key, value ) {
        switch ( key ) {
            case "origin":
                this.origin = value;
                break;
            case "divinity":
            case "doctrine":
            case "doctrine-1":
            case "spell":
            case "mastering":
            case "bonus":
            case "others":
                this.name  = key;
                this.value = value;
                break;
            case HISTORICS.key_element:
                this.name = key;
                this.setHistoric( value );
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    },
    setHistoric: function ( value ) {
        this.value = value;
        this.label = SERVICE.DOM_HELPER.createPropertyVertical( this.value, this.value, SERVICE.DOM.createElement( "div", {}, this.value ), HISTORICS.label_element, false );
    },
    //********************************************  HTML   **************************************************//
    computeHtml    : function ( key, value ) {
        this.dom_element = SERVICE.DOM.createElement( "tr" );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "td", {}, this.level_value ), this.dom_element );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "td", {}, this.origin ), this.dom_element );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "td", {}, this.name ), this.dom_element );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "td", {}, this.value ), this.dom_element );
    },
    updateHtmlData : function ( key, value ) {
    },
    computePageHTML: function () {
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.LevelHistorySkill, OBJECT.InterfaceHtml );
