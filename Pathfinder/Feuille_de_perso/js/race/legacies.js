"use strict";
LEGACIES.Legacies           = function () {
    this.init();
};
LEGACIES.Legacies.prototype = {
    init: function () {
        this.initContents();
        for ( let i = 0, _size_i = LEGACIES.ENUM.length; i < _size_i; i++ ) {
            let to_add = this.add( new LEGACIES.LegacyPopup() );
            to_add.updateData( LEGACIES.ENUM[ i ] );
        }
    }
};

SERVICE.CLASS.addPrototype( LEGACIES.Legacies, OBJECT.InterfaceContainerHtml );
