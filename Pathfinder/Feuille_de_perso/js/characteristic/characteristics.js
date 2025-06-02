"use strict";
CHARACTERISTIC.Characteristics           = function () {
    this.init();
};
CHARACTERISTIC.Characteristics.prototype = {
    init: function () {
        this.initContents();
        for ( let i = 0, _size_i = CHARACTERISTIC.ENUM.length; i < _size_i; i++ ) {
            this.add( new CHARACTERISTIC.Characteristics ( CHARACTERISTIC.ENUM[ i ] ) );
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTERISTIC.Characteristics, OBJECT.InterfaceContainerHtml );
