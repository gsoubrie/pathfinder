"use strict";
RACES.Races           = function () {
    this.init();
};
RACES.Races.prototype = {
    init: function () {
        this.initContents();
        for ( let i = 0, _size_i = RACES.ENUM.length; i < _size_i; i++ ) {
            this.add( new RACES.RacePopup(RACES.ENUM[i]));
        }
    },
};

SERVICE.CLASS.addPrototype( RACES.Races, OBJECT.InterfaceContainerHtml );
