"use strict";
CHARACTER.Current           = function ( uuid ) {
    this.init( uuid );
};
CHARACTER.Current.prototype = {
    init: function ( uuid ) {
        this.uuid = uuid;
        let current_data = eval( uuid );
        this.updateData( current_data );
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID: function () {
        return this.uuid;
    },
    getDataToSave: function () {
        let to_return  = {};
        to_return["uuid"] = this.uuid;
        to_return["name"] = this.name;
        to_return["player"] = this.player;
        to_return[RACES.key_element] = this[RACES.key_element];
        to_return[LEGACIES.key_element] = this[LEGACIES.key_element];
        to_return["class"] = this.class;
        to_return["body_size"] = this.body_size;
        to_return["alignement"] = this.alignement;
        to_return["level"] = this.level;
        to_return["heroisme"] = this.heroisme;
        return to_return;
    },
    //********************************************  UPDATE DATA   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case RACES.key_element:
                this.setRace( value );
                break;
            case LEGACIES.key_element:
                this.setLegacy( value );
                break;
            case "name":
            case "player":
            case "historique":
            case "classe":
            case "body_size":
            case "alignement":
            case "divinite":
            case "level":
            case "heroisme":
                this[ key ] = value;
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    },
    setRace: function ( value ) {
        this[ RACES.key_element ] = value;
        this.available_legacies   = RACES.getLegacies( this[ RACES.key_element ] );
        
        this[ RACES.key_element  + "_html"] = SERVICE.DOM.createElement( "div", {}, this[ RACES.key_element ] );
    },
    setLegacy: function ( value ) {
        this[ LEGACIES.key_element ] = value;
        this[ LEGACIES.key_element  + "_html"] = SERVICE.DOM.createElement( "div", {}, this[ LEGACIES.key_element ] );
    },
    //********************************************  HTML   **************************************************//
    computePageHTML        : function () {
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
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( RACES.key_element, this[ RACES.key_element], this[ RACES.key_element  + "_html"], RACES.label_element, false ), right_zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( LEGACIES.key_element, this[ LEGACIES.key_element], this[ LEGACIES.key_element  + "_html"], LEGACIES.label_element, false ), right_zone );
        // SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( "classe", "", "Classe", false ), right_zone );
        var container_1 = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "container-property " } ), right_zone );
        // SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( "body_size", "", "Taille", false ), container_1 );
        // SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( "alignement", "", "Alignement", false ), container_1 );
        // SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( "trait", "", "Trait", true ), container_1 );
        // SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( "divinite", "", "Divinité", false ), right_zone );
    },
    computeHtml__right : function () {
        var right_zone = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "right-zone" } ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyHorizontal( "level", CONTROLLER.Main.current_character.level, "Niveau", true ), right_zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyHorizontal( "heroisme", CONTROLLER.Main.current_character.heroisme, "Point d'heroisme", true ), right_zone );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Current, OBJECT.InterfaceHtml );
