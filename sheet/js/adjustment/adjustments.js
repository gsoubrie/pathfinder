"use strict";
/**
 * @class CHARACTER.Adjustments
 * @extends OBJECT.InterfaceContainerHtml
 */
CHARACTER.Adjustments = function () {
    this.init();
};
CHARACTER.Adjustments.prototype = {
    init: function () {
        this.initContents();
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__adjustment__add":
                this.addAdjustment( params[ "param__adjustment__kind" ], params[ "param__adjustment__value" ], params[ "param__adjustment__explanation" ] );
                return;
            case "event__adjustment__remove": {
                let adjustment = this.getContentByUUID( params[ "param__adjustment__kind" ] + "__" + params[ "param__adjustment__value" ] );
                if ( adjustment ) {
                    this.removeContent( adjustment.getUUID(), null, true );
                }
                return;
            }
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID: function () {
        return "adjustments";
    },
    getEntriesByKind: function ( kind ) {
        let to_return = [];
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            if ( this.getContent( i ).getKind() === kind ) {
                to_return.push( this.getContent( i ) );
            }
        }
        return to_return;
    },
    // The display zones consume values, the tab consumes entries
    getValuesByKind: function ( kind ) {
        let to_return = [];
        let entries   = this.getEntriesByKind( kind );
        for ( let i = 0, _size_i = entries.length; i < _size_i; i++ ) {
            to_return.push( entries[ i ].value );
        }
        return to_return;
    },
    //********************************************  DATA   **************************************************//
    addAdjustment: function ( kind, value, explanation ) {
        if ( !value || this.getContentByUUID( kind + "__" + value ) ) {
            return;
        }
        this.add( new CHARACTER.Adjustment( kind, value, explanation ) );
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        let to_return              = {};
        to_return[ "adjustments" ] = [];
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            to_return[ "adjustments" ].push( this.getContent( i ).getDataToSave() );
        }
        return to_return;
    },
    //********************************************  UPDATE DATA   **************************************************//
    updateData: function ( data ) {
        if ( !data ) {
            return;
        }
        for ( let i = 0, _size_i = data.length; i < _size_i; i++ ) {
            this.addAdjustment( data[ i ][ "kind" ], data[ i ][ "value" ], data[ i ][ "explanation" ] );
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Adjustments, OBJECT.InterfaceContainerHtml );
