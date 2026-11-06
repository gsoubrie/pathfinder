"use strict";
/**
 * @class CHARACTER.Stuff
 * @extends OBJECT.InterfaceHtml
 */
CHARACTER.Stuff = function ( kind, value, quantity, location, comment, place, characteristics ) {
    this.init( kind, value, quantity, location, comment, place, characteristics );
};
CHARACTER.Stuff.prototype = {
    init: function ( kind, value, quantity, location, comment, place, characteristics ) {
        this.kind            = STUFF.OBSOLETE_KINDS[ kind ] || kind;
        this.value           = value;
        let parsed_quantity  = parseInt( quantity, 10 );
        // The quantity belongs to EVERY entry (retour utilisateur : tout
        // est éditable) — the consumable trait only drives the stacking
        this.quantity        = !isNaN( parsed_quantity ) && parsed_quantity > 0 ? parsed_quantity : 1;
        this.location        = STUFF.getLocationData( location ) ? location : STUFF.DEFAULT_LOCATION;
        this.place           = place || null;
        this.comment         = comment || null;
        this.characteristics = {};
        let characteristics_to_read = characteristics || {};
        let _chars_keys      = Object.keys( characteristics_to_read );
        for ( let i = 0, _size_i = _chars_keys.length; i < _size_i; i++ ) {
            if ( characteristics_to_read[ _chars_keys[ i ] ] ) {
                this.characteristics[ _chars_keys[ i ] ] = String( characteristics_to_read[ _chars_keys[ i ] ] );
            }
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID: function () {
        return this.kind + "__" + this.value;
    },
    getKind: function () {
        return this.kind;
    },
    isConsumable: function () {
        return STUFFS.isConsumable( this.value );
    },
    // The effective value of a kind inline field for THIS entry : the
    // override first (edit popup), the scraped value otherwise, nothing
    // on a free-named model without override
    getCharacteristicValue: function ( field ) {
        if ( this.characteristics[ field ] ) {
            return this.characteristics[ field ];
        }
        return STUFFS.getFieldValue( this.value, field );
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        return {
            "kind"           : this.kind,
            "value"          : this.value,
            "quantity"       : this.quantity,
            "location"       : this.location,
            "place"          : this.place,
            "comment"        : this.comment,
            "characteristics": this.characteristics
        };
    },
    //********************************************  UPDATE DATA   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case "quantity": {
                let parsed = parseInt( value, 10 );
                this.quantity = !isNaN( parsed ) && parsed > 0 ? parsed : 1;
                break;
            }
            case "location":
                this.location = STUFF.getLocationData( value ) ? value : STUFF.DEFAULT_LOCATION;
                break;
            case "place":
                this.place = value ? String( value ) : null;
                break;
            case "comment":
                this.comment = value ? String( value ) : null;
                break;
            // The map REPLACES the overrides : an emptied input drops
            // its key and the scraped value comes back
            case "characteristics": {
                this.characteristics = {};
                let characteristics_to_set = value || {};
                let _chars_keys      = Object.keys( characteristics_to_set );
                for ( let i = 0, _size_i = _chars_keys.length; i < _size_i; i++ ) {
                    if ( characteristics_to_set[ _chars_keys[ i ] ] ) {
                        this.characteristics[ _chars_keys[ i ] ] = String( characteristics_to_set[ _chars_keys[ i ] ] );
                    }
                }
                break;
            }
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Stuff, OBJECT.InterfaceHtml );
