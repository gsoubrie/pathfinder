"use strict";
LEGACIES.Legacies           = function () {
};
LEGACIES.Legacies.prototype = {
    init: function ( data ) {
        this.initContents();
        for ( let i = 0, _size_i = data.length; i < _size_i; i++ ) {
            let to_add = new LEGACIES.Legacy();
            to_add.initWithName( data[ i ] );
            this.add( to_add );
        }
    }
};

SERVICE.CLASS.addPrototype( LEGACIES.Legacies, OBJECT.InterfaceContainerHtml );
