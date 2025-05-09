"use strict";
CHARACTER.Current           = function ( uuid ) {
    this.init( uuid );
};
CHARACTER.Current.prototype = {
    init: function ( uuid ) {
        this.uuid                   = uuid;
        this[ RACES.key_element ]   = new RACES.Race();
        this[ CLASSES.key_element ] = new CLASSES.Class();
        this.updateData( SERVICE.DATA.loadDataByUUID( uuid ) );
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID      : function () {
        return this.uuid;
    },
    getDataToSave: function () {
        let to_return                    = {};
        to_return[ "uuid" ]              = this.uuid;
        to_return[ "name" ]              = this.name;
        to_return[ "player" ]            = this.player;
        to_return[ RACES.key_element ]   = this.getRace().getDataToSave();
        to_return[ CLASSES.key_element ] = this.getClass().getDataToSave();
        to_return[ "alignment" ]         = this.alignment;
        to_return[ "level" ]             = this.level;
        to_return[ "point_heroism" ]     = this.point_heroism;
        return to_return;
    },
    //********************************************  UPDATE DATA   **************************************************//
    setData : function ( key, value ) {
        console.log( "GSOU", "[Current - setData]", key, value );
        switch ( key ) {
            case RACES.key_element:
                this.getRace().setName( value );
                //TO PARSE IN UPDATE DATA
                break;
            case LEGACIES.key_element:
                this.getRace().setLegacy( value );
                //TO REMOVE
                break;
            case CLASSES.key_element:
                this.getClass().setName( value );
                //TO PARSE IN UPDATE DATA
                break;
            case "uuid":
                break;
            case "name":
            case "player":
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
    getRace : function () {
        return this[ RACES.key_element ];
    },
    getClass: function () {
        return this[ CLASSES.key_element ];
    },
    //********************************************  HTML   **************************************************//
    updateHtmlData     : function ( key, value ) {
        if ( !this[ key + "_html" ] ) {
            this[ key + "_html" ] = SERVICE.DOM.createElement( "div", {}, value );
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
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( RACES.key_element, this.getRace().getName(), this.getRace().getLabel(), RACES.label_element, false ), right_zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( LEGACIES.key_element, this.getRace().getLegacy().getName(), this.getRace().getLegacy().getLabel(), LEGACIES.label_element, false ), right_zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( CLASSES.key_element, this.getClass().getName(), this.getClass().getLabel(), CLASSES.label_element, false ), right_zone );
        var container_1 = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "container-property " } ), right_zone );
        console.log( "GSOU", "[Current - computeHtml__middle]", this.getRace().getBodySize() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( RACES.PARAM.BODY_SIZE.key, this.getRace().getBodySize().value, this.getRace().getBodySize().label, RACES.PARAM.BODY_SIZE.key, false ), container_1 );
        
        // SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( "alignement", "", "Alignement", false ), container_1 );
        // SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( "trait", "", "Trait", true ), container_1 );
        // SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyVertical( "divinite", "", "Divinité", false ), right_zone );
    },
    computeHtml__right : function () {
        var right_zone = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "right-zone" } ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyHorizontal( "level", CONTROLLER.Main.current_character.level, "Niveau", true ), right_zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createPropertyHorizontal( "point_heroism", CONTROLLER.Main.current_character.point_heroism, "Point d'heroisme", true ), right_zone );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Current, OBJECT.InterfaceHtml );
