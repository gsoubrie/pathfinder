"use strict";
/**
 * @class CHARACTER.Stuff
 * @extends OBJECT.InterfaceHtml
 */
CHARACTER.Stuff = function ( kind, value, quantity, location, comment, place, characteristics, slot, current_hp ) {
    this.init( kind, value, quantity, location, comment, place, characteristics, slot, current_hp );
};
CHARACTER.Stuff.prototype = {
    init: function ( kind, value, quantity, location, comment, place, characteristics, slot, current_hp ) {
        this.kind            = STUFF.OBSOLETE_KINDS[ kind ] || kind;
        this.value           = value;
        let parsed_quantity  = parseInt( quantity, 10 );
        // The quantity belongs to EVERY entry (retour utilisateur : tout
        // est éditable) — the consumable trait only drives the stacking
        this.quantity        = !isNaN( parsed_quantity ) && parsed_quantity > 0 ? parsed_quantity : 1;
        this.location        = STUFF.getLocationData( location ) ? location : STUFF.DEFAULT_LOCATION;
        this.place           = place || null;
        this.comment         = comment || null;
        this.slot            = STUFF.getSlotData( slot ) ? slot : null;
        this.current_hp      = current_hp !== null && current_hp !== undefined && !isNaN( parseInt( current_hp, 10 ) ) ? parseInt( current_hp, 10 ) : null;
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
    // The body slot of the equipped entry : the chosen slot first, then
    // the scraped "Emplacement" of the model, then the kind default
    getSlot: function () {
        if ( this.slot ) {
            return this.slot;
        }
        let entry = STUFFS.getByName( this.value );
        let scraped_slot = entry ? STUFFS.getSlotKeyOfData( entry ) : null;
        if ( scraped_slot && STUFF.getSlotData( scraped_slot ) ) {
            return scraped_slot;
        }
        return STUFF.KIND_DEFAULT_SLOTS[ this.kind ] || "invested";
    },
    setSlot: function ( slot_key ) {
        this.slot = STUFF.getSlotData( slot_key ) ? slot_key : null;
    },
    // The durability of the piece (remaster : the shields carry their
    // own hardness/HP/BT, the other pieces have none)
    hasDurability: function () {
        return this.getMaxHp() > 0;
    },
    getMaxHp: function () {
        let parsed = parseInt( this.getCharacteristicValue( "PV" ), 10 );
        return isNaN( parsed ) ? 0 : parsed;
    },
    getHardness: function () {
        return this.getCharacteristicValue( "Solidité" );
    },
    getBreakThreshold: function () {
        return this.getCharacteristicValue( "SR" );
    },
    // The current HP of the piece : the saved value clamped to
    // [0, max], the max when never touched
    getCurrentHp: function () {
        let max_hp = this.getMaxHp();
        if ( this.current_hp === null || isNaN( this.current_hp ) ) {
            return max_hp;
        }
        return Math.max( 0, Math.min( max_hp, this.current_hp ) );
    },
    setCurrentHp: function ( to_set ) {
        let max_hp = this.getMaxHp();
        let parsed = parseInt( to_set, 10 );
        if ( isNaN( parsed ) ) {
            return;
        }
        this.current_hp = Math.max( 0, Math.min( max_hp, parsed ) );
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
            "characteristics": this.characteristics,
            "slot"           : this.slot,
            "current_hp"     : this.current_hp
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
            case "slot":
                this.slot = STUFF.getSlotData( value ) ? value : null;
                break;
            case "current_hp": {
                let parsed_hp = parseInt( value, 10 );
                this.current_hp = isNaN( parsed_hp ) ? null : parsed_hp;
                break;
            }
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
