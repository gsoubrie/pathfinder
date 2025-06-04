"use strict";
CHARACTERISTICS.Characteristics           = function () {
    this.init();
};
CHARACTERISTICS.Characteristics.prototype = {
    init: function () {
        this.initContents();
        for ( let i = 0, _size_i = CHARACTERISTICS.ENUM.length; i < _size_i; i++ ) {
            this.add( new CHARACTERISTICS.Characteristic( CHARACTERISTICS.ENUM[ i ] ) );
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    setDataFromRace: function ( race ) {
        console.log( "GSOU", "[Characteristics - setDataFromRace]", race );
        for (let carac_name in race["characteristics_bonus"]){
            this.getContentByUUid(carac_name).setRaceBonus(2);
        }
        for (let carac_name in race["characteristics_malus"]){
            this.getContentByUUid(carac_name).setRaceBonus(-2);
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTERISTICS.Characteristics, OBJECT.InterfaceContainerHtml );
