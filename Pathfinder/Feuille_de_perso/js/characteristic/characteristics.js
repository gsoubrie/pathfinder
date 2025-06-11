"use strict";
CHARACTERISTICS.Characteristics           = function () {
    this.init();
};
CHARACTERISTICS.Characteristics.prototype = {
    init: function () {
        this.initContents();
        this.free_counter = 0;
        for ( let i = 0, _size_i = CHARACTERISTICS.ENUM.length; i < _size_i; i++ ) {
            let to_add = this.add( new CHARACTERISTICS.Characteristic( CHARACTERISTICS.ENUM[ i ] ) );
        }
        this.addParamForEvents( "characteristics_param", true );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "click_on_button_V3":
                if ( params[ "characteristic_param" ] ) {
                    params[ "characteristics_object" ] = this;
                    this.getContentByUUID( params[ "characteristic_param" ] ).doActionAfter( event_name, params );
                    return;
                }
                break;
            case "set_free_race_bonus_done":
                this.free_counter--;
                if ( !this.free_counter ) {
                    this.doActionAfter( "clean_all_free_race_settings" );
                }
                break;
            case "unset_free_race_bonus_done":
                this.free_counter++;
                this.doActionAfter( "unclean_all_free_race_settings" );
                break;
        }
        this.doActionAfterCommon( event_name, params );
    },
    //********************************************  GETTER SETTER  **************************************************//
    setDataFromRace: function ( race ) {
        for ( let i = 0, _size_i = race[ "characteristics_bonus" ].length; i < _size_i; i++ ) {
            switch ( race[ "characteristics_bonus" ][ i ] ) {
                case "FREE":
                    this.doActionAfter( "set_free_race_bonus" );
                    this.free_counter++;
                    break;
                default:
                    this.getContentByUUID( race[ "characteristics_bonus" ][ i ] ).doActionAfter( "set_race_bonus", { "race_bonus_value": 2 } );
            }
        }
        for ( let i = 0, _size_i = race[ "characteristics_malus" ].length; i < _size_i; i++ ) {
            this.getContentByUUID( race[ "characteristics_malus" ][ i ] ).doActionAfter( "set_race_bonus", { "race_bonus_value": -2 } );
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTERISTICS.Characteristics, OBJECT.InterfaceContainerHtml );
