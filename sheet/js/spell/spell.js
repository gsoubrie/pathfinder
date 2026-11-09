"use strict";

/**
 * @class CHARACTER.Spell
 * @extends OBJECT.InterfaceHtml
 */
CHARACTER.Spell = function ( value, comment ) {
    this.init( value, comment );
};
CHARACTER.Spell.prototype = {
    init: function ( value, comment ) {
        this.value   = value;
        this.comment = comment || null;
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID: function () {
        return "spell__" + this.value;
    },
    isInDataset: function () {
        return SPELLS.getSpellData( this.value ) !== null;
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        return {
            "value"  : this.value,
            "comment": this.comment
        };
    },
    //********************************************  UPDATE DATA   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case "comment":
                this.comment = value ? String( value ) : null;
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Spell, OBJECT.InterfaceHtml );
