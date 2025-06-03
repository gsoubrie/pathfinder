"use strict";
CHARACTERISTICS.Characteristics           = function () {
    this.init();
};
CHARACTERISTICS.Characteristics.prototype = {
    init: function () {
        this.initContents();
        for ( let i = 0, _size_i = CHARACTERISTICS.ENUM.length; i < _size_i; i++ ) {
            this.add( new CHARACTERISTICS.Characteristics( CHARACTERISTICS.ENUM[ i ] ) );
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTERISTICS.Characteristics, OBJECT.InterfaceContainerHtml );
