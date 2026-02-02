"use strict";
/**
 * @class CHARACTER.Player
 * @extends CHARACTER.ComponentInterfaceInput
 */
CHARACTER.Player = function () {
    this.init();
};
CHARACTER.Player.prototype = {
    init: function () {
        this.setKey( "player" );
        this.setLabelProperty( "Nom du joueur" );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Player, CHARACTER.ComponentInterfaceInput );
