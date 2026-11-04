"use strict";
/**
 * @class CHARACTER.Adjustment
 * @extends OBJECT.InterfaceHtml
 */
CHARACTER.Adjustment = function ( kind, value, explanation ) {
    this.init( kind, value, explanation );
};
CHARACTER.Adjustment.prototype = {
    init: function ( kind, value, explanation ) {
        this.kind        = kind;
        this.value      = value;
        this.explanation = explanation || "";
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID: function () {
        return this.kind + "__" + this.value;
    },
    getKind: function () {
        return this.kind;
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        return {
            "kind"       : this.kind,
            "value"      : this.value,
            "explanation": this.explanation
        };
    },
    //********************************************  UPDATE DATA   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case "kind":
                this.kind = value;
                break;
            case "value":
                this.value = value;
                break;
            case "explanation":
                this.explanation = value;
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Adjustment, OBJECT.InterfaceHtml );
