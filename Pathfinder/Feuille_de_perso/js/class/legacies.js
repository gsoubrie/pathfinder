"use strict";
LEGACIES.Legacies           = function () {
    this.init();
};
LEGACIES.Legacies.prototype = {
    init: function () {
        this.initContents();
        for ( let i = 0, _size_i = LEGACIES.ENUM.length; i < _size_i; i++ ) {
            this.add( new LEGACIES.Legacy( LEGACIES.ENUM[ i ] ) );
        }
    }
};

SERVICE.CLASS.addPrototype( LEGACIES.Legacies, OBJECT.InterfaceContainerHtml );
