"use strict";
/**
 * @class BODY_SIZE.RaceSize
 * @extends CHARACTER.CHARACTER.ComponentInterfaceInput
 */
BODY_SIZE.RaceSize = function () {
    this.init();
};
BODY_SIZE.RaceSize.prototype = {
    init: function () {
        this.setKey( "body_size" );
                this.setLabelProperty("Taille" );
    }
};
SERVICE.CLASS.addPrototype( BODY_SIZE.RaceSize, CHARACTER.ComponentInterfaceInput );