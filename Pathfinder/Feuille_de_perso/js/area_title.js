"use strict";
AREA.Title           = function () {
    this.init();
};
AREA.Title.prototype = {
    init: function () {
    },
    //********************************************  EVENTS MANAGER   **************************************************//
    validPopupEdition: function ( edition_popup ) {
        this.getDomElement().querySelector( ".property[data-name='" + edition_popup.current_property.key_element + "'] .value" ).innerText = edition_popup.windows.getActiveWindow().getName();
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        let to_return  = {};
        let properties = this.getDomElement().querySelectorAll( ".property" );
        for ( var i = 0; i < properties.length; i++ ) {
            to_return[ properties[ i ].dataset.name ] = properties[ i ].querySelector( ".value" ).innerText;
        }
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
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "save-button", onclick: "CONTROLLER.Main.save()" } ), to_return );
    },
    computeHtml__middle: function () {
        var middle    = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "middle-zone" } ), this.getDomElement() );
        var left_zone = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "middle-left-zone" } ), middle );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyHorizontal( "name", CONTROLLER.Main.current_character.name, "Nom du <br>personnage", true ), left_zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyHorizontal( "player", CONTROLLER.Main.current_character.player, "Nom du <br>joueur", true ), left_zone );
        
        var right_zone = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "middle-right-zone" } ), middle );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( RACES.key_element, CONTROLLER.Main.current_character[ RACES.key_element ], RACES.label_element, false ), right_zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( LEGACIES.key_element, "", "Historique", false ), right_zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( "classe", "", "Classe", false ), right_zone );
        var container_1 = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "container-property " } ), right_zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( "body_size", "", "Taille", false ), container_1 );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( "alignement", "", "Alignement", false ), container_1 );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( "trait", "", "Trait", true ), container_1 );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( "divinite", "", "Divinité", false ), right_zone );
    },
    computeHtml__right : function () {
        var right_zone = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "right-zone" } ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyHorizontal( "level", CONTROLLER.Main.current_character.level, "Niveau", true ), right_zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyHorizontal( "heroisme", CONTROLLER.Main.current_character.heroisme, "Point d'heroisme", true ), right_zone );
    }
};

SERVICE.CLASS.addPrototype( AREA.Title, OBJECT.InterfaceHtml );