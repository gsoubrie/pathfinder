"use strict";
CHARACTER.Current           = function ( uuid ) {
    this.init( uuid );
};
CHARACTER.Current.prototype = {
    init: function ( uuid ) {
        this.uuid        = uuid;
        let current_data = eval( uuid );
        this.updateData( current_data );
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID      : function () {
        return this.uuid;
    },
    getDataToSave: function () {
        let to_return                     = {};
        to_return[ "uuid" ]               = this.uuid;
        to_return[ "name" ]               = this.name;
        to_return[ "player" ]             = this.player;
        to_return[ RACES.key_element ]    = this[ RACES.key_element ];
        to_return[ LEGACIES.key_element ] = this[ LEGACIES.key_element ];
        to_return[ "class" ]              = this.class;
        to_return[ "body_size" ]          = this.body_size;
        to_return[ "alignment" ]          = this.alignment;
        to_return[ "level" ]              = this.level;
        to_return[ "point_heroism" ]      = this.point_heroism;
        return to_return;
    },
    //********************************************  UPDATE DATA   **************************************************//
    setData  : function ( key, value ) {
        console.log( "GSOU", "[Current - setData]", key, value );
        switch ( key ) {
            case RACES.key_element:
                this.setRace( key, value );
                break;
            case LEGACIES.key_element:
                this.setLegacy( key, value );
                break;
            case "name":
            case "player":
            case "class":
            case "body_size":
            case "alignment":
            case "divinity":
            case "level":
            case "point_heroism":
                this[ key ] = value;
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    },
    setRace  : function ( key, value ) {
        this[ key ]             = value;
        this.available_legacies = RACES.getLegacies( this[ key ] );
        this.updateHtmlData( key, value );
    },
    setLegacy: function ( key, value ) {
        console.warn( "GSOU", "[Current - setLegacy]", key, value );
        this[ key ] = value;
        this.updateHtmlData( key, value );
    },
    //********************************************  HTML   **************************************************//
    updateHtmlData     : function ( key, value ) {
        console.log( "GSOU", "[Current - updateHtmlData]", key, value, this[ key + "_html" ] );
        if ( !this[ key + "_html" ] ) {
            this[ key + "_html" ] = SERVICE.DOM.createElement( "div", {}, this[ key ] );
        }
        else {
            this[ key + "_html" ].innerHTML = value;
        }
    },
    computePageHTML    : function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "title" } ) );
        this.computeHtml__left();
        this.computeHtml__middle();
        this.computeHtml__right();
        this.computeHtml__bottom();
    },
    computeHtml__left  : function () {
        var to_return = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "left-zone container" } ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "logo-pathfinder" } ), to_return );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "page-name" }, "Feuille de personnage" ), to_return );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "save-button", onclick: "CONTROLLER.Main.save()" } ), to_return );

    },
    computeHtml__middle: function () {
        var middle    = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "middle-zone input-group container" } ), this.getDomElement() );
        var left_zone = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "middle-left-zone" } ), middle );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyHorizontal( "name", CONTROLLER.Main.current_character.name, "Nom du <br>personnage", true ), left_zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyHorizontal( "player", CONTROLLER.Main.current_character.player, "Nom du <br>joueur", true ), left_zone );
        
        var right_zone = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "middle-right-zone input-group container" } ), middle );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( RACES.key_element, this[ RACES.key_element ], this[ RACES.key_element + "_html" ], RACES.label_element, false ), right_zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( LEGACIES.key_element, this[ LEGACIES.key_element ], this[ LEGACIES.key_element + "_html" ], LEGACIES.label_element, false ), right_zone );
         //SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( "class", this[ CLASSES.key_element ], this[ CLASSES.key_element + "_html" ], "Classe", false ), right_zone );
        var container_1 = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "container-property " } ), right_zone );
        // SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( "body_size", "", "Taille", false ), container_1 );
        // SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( "alignement", "", "Alignement", false ), container_1 );
        // SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( "trait", "", "Trait", true ), container_1 );
        // SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( "divinite", "", "Divinité", false ), right_zone );
    },
    computeHtml__right : function () {
        var right_zone = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "right-zone container d-flex" } ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyHorizontal( "level", CONTROLLER.Main.current_character.level, "Niveau", true ), right_zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyHorizontal( "point_heroism", CONTROLLER.Main.current_character.point_heroism, "Point d'heroisme", true ), right_zone );
    },
    computeHtml__bottom : function () {
        var to_return = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "bottom container" } ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "save-button-2 btn btn-success", onclick: "CONTROLLER.Main.save()" }, "Télécharger votre fiche 👌" ), to_return );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Current, OBJECT.InterfaceHtml );
