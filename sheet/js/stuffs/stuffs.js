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
                this.addStuff( params[ "param__stuff__kind" ], params[ "param__stuff__value" ], params[ "param__stuff__location" ], params[ "param__stuff__comment" ], params[ "param__stuff__place" ] );
                return;
            }
            case "event__stuff__remove": {
                let removed_stuff = this.getContentByUUID( params[ "param__stuff__kind" ] + "__" + params[ "param__stuff__value" ] );
                if ( removed_stuff ) {
                    this.removeContent( removed_stuff.getUUID(), null, true );
                }
                return;
            }
            // The location of an entry moves it between the sections, the
            // place free text describes where a stored stuff sits, the
            // comment is edited in place, the quantity and the
            // characteristics overrides land by the edit popup (tout est
            // éditable — retour utilisateur)
            case "event__stuff__set_location":
            case "event__stuff__edit_place":
            case "event__stuff__edit_comment":
            case "event__stuff__edit_characteristics":
            case "event__stuff__edit_quantity": {
                let entry = this.getContentByUUID( params[ "param__stuff__kind" ] + "__" + params[ "param__stuff__value" ] );
                if ( entry ) {
                    if ( event_name === "event__stuff__set_location" ) {
                        entry.setData( "location", params[ "param__stuff__location" ] );
                    }
                    else if ( event_name === "event__stuff__edit_place" ) {
                        entry.setData( "place", params[ "param__stuff__place" ] );
                    }
                    else if ( event_name === "event__stuff__edit_comment" ) {
                        entry.setData( "comment", params[ "param__stuff__comment" ] );
                    }
                    else if ( event_name === "event__stuff__edit_characteristics" ) {
                        entry.setData( "characteristics", params[ "param__stuff__characteristics" ] );
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
    getStuffsByLocation: function ( location_key ) {
        let to_return = [];
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            if ( this.getContent( i ).location === location_key ) {
                to_return.push( this.getContent( i ) );
            }
        }
        return to_return;
    },
    //********************************************  DATA   **************************************************//
    addStuff: function ( kind, value, location, comment, place ) {
        if ( !value ) {
            return;
        }
        let existing = this.getContentByUUID( kind + "__" + value );
        if ( existing ) {
            // The consumables stack, the rest stays alone : picking the +
            // on an owned sword does nothing, on a potion it counts one
            // — the entry keeps its location, stacking does not move it
            if ( existing.isConsumable() ) {
                existing.setData( "quantity", existing.quantity + 1 );
            }
            return;
        }
        this.add( new CHARACTER.Stuff( kind, value, 1, location || STUFF.DEFAULT_LOCATION, comment, place ) );
    },
    // The bulk of the asked locations only : the bar counts the carried
    // stuff (STUFF.CARRIED_LOCATIONS), the stored section carries its own
    getBulkTotal: function ( location_keys ) {
        let bulk_total = 0;
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            if ( location_keys.indexOf( this.getContent( i ).location ) !== -1 ) {
                bulk_total += STUFFS.getEntryBulk( this.getContent( i ) );
            }
        }
        return Math.round( bulk_total * 10 ) / 10;
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
            // The saves of the worn era carry no location : worn reads
            // back equipped, the rest lands in the backpack
            let location = data[ i ][ "location" ] !== undefined ? data[ i ][ "location" ] : ( data[ i ][ "worn" ] ? "equipped" : STUFF.DEFAULT_LOCATION );
            let current  = this.getContentByUUID( data[ i ][ "kind" ] + "__" + data[ i ][ "value" ] );
            if ( !current ) {
                current = this.add( new CHARACTER.Stuff( data[ i ][ "kind" ], data[ i ][ "value" ], data[ i ][ "quantity" ], location, data[ i ][ "comment" ], data[ i ][ "place" ], data[ i ][ "characteristics" ] ) );
            }
            current.setData( "quantity", data[ i ][ "quantity" ] );
            current.setData( "location", location );
            current.setData( "characteristics", data[ i ][ "characteristics" ] );
            current.setData( "place", data[ i ][ "place" ] );
            if ( data[ i ][ "comment" ] !== undefined ) {
                current.setData( "comment", data[ i ][ "comment" ] );
            }
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Stuffs, OBJECT.InterfaceContainerHtml );
