"use strict";
CHARACTERISTICS.Characteristic           = function ( data ) {
    this.init( data );
};
CHARACTERISTICS.Characteristic.prototype = {
    init: function ( data ) {
        this.initial_value    = 10;
        this.final_value      = 10;
        this.race_bonus = new OBJECT.ConfigurableValue(0, "FREE");
        this.updateData( data );
    },
    //********************************************  EVENT LISTENER  *****************************************************//
    doActionAfter: function ( event_name, param ) {
        switch ( event_name ) {
            case "set_free_race_bonus":
                this.setRaceBonus( "FREE" );
                break;
        }
        this.doActionAfterCommon( event_name, param );
    },
    //********************************************  GETTER SETTER  **************************************************//
    setName     : function ( to_set ) {
        this.name = to_set;
        this.addParamForEvents( CHARACTERISTICS.key_element, this.name );
    },
    setLabel    : function ( to_set ) {
        this.label = to_set;
    },
    getUUID     : function () {
        return this.getName();
    },
    setRaceBonus: function ( to_set ) {
        this.race_bonus.setValue(to_set);
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
        let to_return       = {};
        to_return[ "name" ] = this.name;
        return to_return;
    }
};
SERVICE.CLASS.addPrototype( CHARACTERISTICS.Characteristic, OBJECT.InterfaceHtml );