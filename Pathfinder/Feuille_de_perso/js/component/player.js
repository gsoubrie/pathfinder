"use strict";
/**
 * @class Player
 * @extends OBJECT.InterfaceHtml
 */
CHARACTER.Player = function () {
    this.init();
};
CHARACTER.Player.prototype = {
    init: function () {
        this.key = "player";
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__compute__html":
                this.computeHtml(params);
                return;
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    setName      : function ( to_set ) {
        this.name = to_set;
    },
    getDataToSave: function () {
        let to_return         = {};
        to_return[ "uuid" ]   = this.uuid;
        to_return[ "name" ]   = this.name;
        to_return[ "player" ] = this.player;
        if ( this.getRace().getUUID() ) {
            to_return[ RACES.key_element ]   = this.getRace().getDataToSave();
            to_return[ CLASSES.key_element ] = this.getClass().getDataToSave();
            to_return[ CHARACTERISTICS.key ] = this.getCharacteristics().getDataToSave();
            to_return[ "levels_history" ]    = this.levels_history.getDataToSave();
            to_return[ "alignment" ]         = this.alignment;
            to_return[ "level" ]             = this.level + "";
            to_return[ "health" ]            = this.health.getDataToSave();
            to_return[ "point_heroism" ]     = this.point_heroism;
        }
        return to_return;
    },
    //********************************************  HTML   **************************************************//
    updateHtmlData: function ( key, value ) {
    },
    computeHtml   : function ( params ) {
        switch ( params[ "param__window" ] ) {
            case CHARACTER.GeneralWindow.NAME:
                if ( this.dom_element_general ) {
                    return;
                }
                this.dom_element_general = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-player" } ), params["param__dom_element_parent"] );
                SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createPropertyVerticalInput( this.key, this.name, SERVICE.DOM.createElement( "div", {}, this.name ), "Nom du joueur" ), this.dom_element_general );
                return;
            
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Player, OBJECT.InterfaceHtml );
