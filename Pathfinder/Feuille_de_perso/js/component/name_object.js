"use strict";
/**
 * @class CHARACTER.Name
 * @extends CHARACTER.ComponentInterfaceInput
 */
CHARACTER.Name = function () {
    this.init();
};
CHARACTER.Name.prototype = {
    init: function () {
        this.setKey( "name" );
        this.setLabelProperty( "Nom du personnage" );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Name, CHARACTER.ComponentInterfaceInput );
