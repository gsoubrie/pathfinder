"use strict";
CHARACTERISTICS.Characteristic           = function ( data ) {
    this.init( data );
};
CHARACTERISTICS.Characteristic.prototype = {
    init: function ( data ) {
        this.initial_value = 10;
        this.final_value   = 10;
        this.updateData( data );
    },
    //********************************************  GETTER SETTER  **************************************************//
    setName    : function ( to_set ) {
        this.name = to_set;
    },
    setLabel   : function ( to_set ) {
        this.label = to_set;
    },
    getUUID    : function () {
        return this.getName();
    },
    getBodySize: function () {
        return this[ RACES.PARAM.BODY_SIZE.key ];
    },
    getLegacy  : function () {
        return this[ LEGACIES.key_element ];
    },
    //********************************************  DATA   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case "name":
                this.setName( value );
                break;
            case "label":
                this.setLabel( value );
                break;
        }
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        let to_return                          = {};
        to_return[ "name" ]                    = this.name;
        to_return[ LEGACIES.key_element ]      = this.getLegacy().getDataToSave();
        to_return[ RACES.PARAM.BODY_SIZE.key ] = this.getBodySize().getDataToSave();
        return to_return;
    }
};
SERVICE.CLASS.addPrototype( CHARACTERISTICS.Characteristic, OBJECT.InterfaceHtml );