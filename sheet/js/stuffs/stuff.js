"use strict";
/**
 * @class CHARACTER.Stuff
 * @extends OBJECT.InterfaceHtml
 */
CHARACTER.Stuff = function ( kind, value, quantity, worn, comment ) {
    this.init( kind, value, quantity, worn, comment );
};
CHARACTER.Stuff.prototype = {
    init: function ( kind, value, quantity, worn, comment ) {
        this.kind     = kind;
        this.value    = value;
        this.quantity = STUFFS.isConsumable( value ) ? ( quantity || 1 ) : 1;
        this.worn     = !!worn;
        this.comment  = comment || null;
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
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        return {
            "kind"   : this.kind,
            "value"  : this.value,
            "quantity": this.isConsumable() ? this.quantity : null,
            "worn"   : this.worn,
            "comment": this.comment
        };
    },
    //********************************************  UPDATE DATA   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case "quantity":
                // The consumables count, the rest stays alone
                if ( this.isConsumable() ) {
                    let parsed = parseInt( value, 10 );
                    this.quantity = !isNaN( parsed ) && parsed > 0 ? parsed : 1;
                }
                break;
            case "worn":
                this.worn = !!value;
                break;
            case "comment":
                this.comment = value ? String( value ) : null;
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Stuff, OBJECT.InterfaceHtml );
