"use strict";
/**
 * @class CHARACTER.Stuffs
 * @extends OBJECT.InterfaceContainerHtml
 */
CHARACTER.Stuffs = function () {
    this.init();
};
CHARACTER.Stuffs.prototype = {
    init: function () {
        this.initContents();
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__stuff__add": {
                this.addStuff( params[ "param__stuff__kind" ], params[ "param__stuff__value" ], params[ "param__stuff__comment" ] );
                return;
            }
            case "event__stuff__remove": {
                let stuff = this.getContentByUUID( params[ "param__stuff__kind" ] + "__" + params[ "param__stuff__value" ] );
                if ( stuff ) {
                    this.removeContent( stuff.getUUID(), null, true );
                }
                return;
            }
            case "event__stuff__toggle_worn":
            case "event__stuff__edit_quantity": {
                let entry = this.getContentByUUID( params[ "param__stuff__kind" ] + "__" + params[ "param__stuff__value" ] );
                if ( entry ) {
                    if ( event_name === "event__stuff__toggle_worn" ) {
                        entry.setData( "worn", !entry.worn );
                    }
                    else {
                        entry.setData( "quantity", params[ "param__stuff__quantity" ] );
                    }
                }
                return;
            }
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID: function () {
        return "stuffs";
    },
    getStuffsByKind: function ( kind ) {
        let to_return = [];
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            if ( this.getContent( i ).getKind() === kind ) {
                to_return.push( this.getContent( i ) );
            }
        }
        return to_return;
    },
    //********************************************  DATA   **************************************************//
    addStuff: function ( kind, value, comment ) {
        if ( !value ) {
            return;
        }
        let existing = this.getContentByUUID( kind + "__" + value );
        if ( existing ) {
            // The consumables stack, the rest stays alone : picking the +
            // on an owned sword does nothing, on a potion it counts one
            if ( existing.isConsumable() ) {
                existing.setData( "quantity", existing.quantity + 1 );
            }
            return;
        }
        this.add( new CHARACTER.Stuff( kind, value, 1, false, comment ) );
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        let to_return          = {};
        to_return[ "stuffs" ] = [];
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            to_return[ "stuffs" ].push( this.getContent( i ).getDataToSave() );
        }
        return to_return;
    },
    //********************************************  UPDATE DATA   **************************************************//
    updateData: function ( data ) {
        if ( !data ) {
            return;
        }
        for ( let i = 0, _size_i = data.length; i < _size_i; i++ ) {
            let current = this.getContentByUUID( data[ i ][ "kind" ] + "__" + data[ i ][ "value" ] );
            if ( !current ) {
                current = this.add( new CHARACTER.Stuff( data[ i ][ "kind" ], data[ i ][ "value" ], data[ i ][ "quantity" ], data[ i ][ "worn" ], data[ i ][ "comment" ] ) );
            }
            current.setData( "quantity", data[ i ][ "quantity" ] );
            current.setData( "worn", data[ i ][ "worn" ] );
            if ( data[ i ][ "comment" ] !== undefined ) {
                current.setData( "comment", data[ i ][ "comment" ] );
            }
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Stuffs, OBJECT.InterfaceContainerHtml );
