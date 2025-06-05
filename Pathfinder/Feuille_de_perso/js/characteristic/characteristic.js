"use strict";
CHARACTERISTICS.Characteristic           = function ( data ) {
    this.init( data );
};
CHARACTERISTICS.Characteristic.prototype = {
    init: function ( data ) {
        this.initial_value    = 10;
        this.final_value      = 10;
        this.race_bonus_value = 0;
        this.race_bonus_label = SERVICE.DOM.createElement( "div", {}, this.race_bonus_value );
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
    },
    setLabel    : function ( to_set ) {
        this.label = to_set;
    },
    getUUID     : function () {
        return this.getName();
    },
    setRaceBonus: function ( to_set ) {
        if ( to_set === "FREE" && this.race_bonus_value !== 0 ) {
            return;
        }
        this.race_bonus_value = to_set;
        switch ( this.race_bonus_value ) {
            case "FREE":
                this.race_bonus_label.innerHTML = "";
                SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createMoreButton( this.getParamForEvents() ), this.race_bonus_label );
                break;
            case 2:
                this.race_bonus_label.innerHTML = "+2";
                break;
            case -2:
                this.race_bonus_label.innerHTML = "-2";
                break;
            
        }
        
        
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