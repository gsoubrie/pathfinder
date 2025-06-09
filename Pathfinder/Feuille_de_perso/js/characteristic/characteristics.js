"use strict";
CHARACTERISTICS.Characteristics           = function () {
    this.init();
};
CHARACTERISTICS.Characteristics.prototype = {
    init: function () {
        this.initContents();
        for ( let i = 0, _size_i = CHARACTERISTICS.ENUM.length; i < _size_i; i++ ) {
            let to_add = this.add( new CHARACTERISTICS.Characteristic( CHARACTERISTICS.ENUM[ i ] ) );
        }
        this.addParamForEvents( CHARACTERISTICS.key, true );
    },
    //********************************************  GETTER SETTER  **************************************************//
    setDataFromRace: function ( race ) {
        for ( let i = 0, _size_i = race[ "characteristics_bonus" ].length; i < _size_i; i++ ) {
            switch ( race[ "characteristics_bonus" ][ i ] ) {
                case "FREE":
                    this.doActionAfter( "set_free_race_bonus" );
                    break;
                default:
                    this.getContentByUUID( race[ "characteristics_bonus" ][ i ] ).setRaceBonus( 2 );
            }
        }
        for ( let i = 0, _size_i = race[ "characteristics_malus" ].length; i < _size_i; i++ ) {
            this.getContentByUUID( race[ "characteristics_malus" ][ i ] ).setRaceBonus( -2 );
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTERISTICS.Characteristics, OBJECT.InterfaceContainerHtml );
