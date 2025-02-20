"use strict";
AREA.Title           = function () {
    this.init();
};
AREA.Title.prototype = {
    init: function () {
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        let to_return = {};
        
        return to_return;
    },
    //********************************************  HTML   **************************************************//
    computeHtml        : function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "title" } ) );
        this.computeHtml__left();
        this.computeHtml__middle();
        this.computeHtml__right();
    },
    computeHtml__left  : function () {
        var to_return = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "left-zone" } ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "logo-pathfinder" } ), to_return );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "page-name" }, "Feuille de<br>personnage" ), to_return );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "save-button", onclick: "CONTROLLER.Main.doActionAfter('save')" } ), to_return );
    },
    computeHtml__middle: function () {
        var middle    = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "middle-zone" } ), this.getDomElement() );
        var left_zone = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "middle-left-zone" } ), middle );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyHorizontal( "name", CONTROLLER.Main.current_data.name, "Nom du <br>personnage" ), left_zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyHorizontal( "player", CONTROLLER.Main.current_data.player, "Nom du <br>joueur" ), left_zone );
        
        var right_zone = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "middle-right-zone" } ), middle );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( "ascendance", "", "Ascendance" ), right_zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( "historique", "", "Historique" ), right_zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( "classe", "", "Classe" ), right_zone );
        var container_1 = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "container-property " } ), right_zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( "size", "", "Taille" ), container_1 );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( "alignement", "", "Alignement" ), container_1 );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( "trait", "", "Trait" ), container_1 );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( "divinite", "", "Divinité" ), right_zone );
    },
    computeHtml__right : function () {
        var right_zone = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "right-zone" } ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyHorizontal( "level", CONTROLLER.Main.current_data.level, "Niveau" ), right_zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyHorizontal( "heroisme", CONTROLLER.Main.current_data.heroisme, "Point d'heroisme" ), right_zone );
    }
};

SERVICE.CLASS.addPrototype( AREA.Title, OBJECT.InterfaceHtml );