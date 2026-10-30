"use strict";

/**
 * @class CHARACTER.LevelUpGlobalWarning
 * @extends GS.OBJECT.CounterV2
 */
CHARACTER.LevelUpGlobalWarning = function () {
    this.init( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
};
CHARACTER.LevelUpGlobalWarning.prototype = {
    //********************************************  HTML   **************************************************//
    computeHtml: function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", {
            class: "level-up-global-warning" + ( this.getValue() > 0 ? " visible" : "" )
        }, this._computeText() ) );
        return this.getDomElement();
    },
    updateHtml: function () {
        if ( !this.getDomElement() || !this.getDomElement().parentNode ) {
            return;
        }
        SERVICE.DOM.replaceElement( this.getDomElement(), this.computeHtml() );
    },
    _computeText: function () {
        let missing = this.getValue();
        if ( missing > 0 ) {
            return "⚠ " + missing + ( missing > 1 ? " capacités non validées" : " capacité non validée" );
        }
        return "✓ Toutes les capacités sont validées";
    },
    //********************************************  COUNTER   ************************************************//
    // Parent contract: the window warnings counter pushes its total here on every change
    update: function ( name, nb_counter ) {
        this._counter_final = nb_counter || 0;
        this.updateHtml();
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.LevelUpGlobalWarning, GS.OBJECT.CounterV2 );
