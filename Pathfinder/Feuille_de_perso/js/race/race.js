"use strict";
RACES.RacePopup           = function ( data ) {
    this.init( data );
};
RACES.RacePopup.prototype = {
    init: function ( data ) {
        this.updateData( data );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    getUUID: function () {
        return this.name;
    },
    //********************************************  HTML   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case "name":
            case "start_life":
            case "body_size":
            case "speed":
            case "characteristic_bonus":
            case "characteristic_malus":
            case "language":
            case "language_sup":
            case "name_example":
            case "traits":
            case "sens":
            case "physical_desc":
            case "society_desc":
            case "believe_desc":
            case "general_desc":
            case "anathema_desc":
            case "edit_desc":
            case "legacies":
            case "dons":
                this[ key ] = value;
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    },
    //********************************************  HTML   **************************************************//
    computeHTMLEdition: function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "race-edition" } ) );
        let traits_row = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "traits" } ), this.getDomElement() );
        for ( let index = 0; index < this.traits.length; index++ ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "trait" }, this.traits[ index ] ), traits_row );
            
        }
        SERVICE.DOM.addElementTo( SERVICE.DOM.createEditionPropertyHorizontal( this.start_life, "Point de vie" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createEditionPropertyHorizontal( this.body_size, "Taille moyenne" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createEditionPropertyHorizontal( this.speed + " mètres", "Vitesse" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createEditionPropertyHorizontal( this.characteristic_bonus, "Primes d'attributs" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createEditionPropertyHorizontal( this.characteristic_malus, "Pénalité d'attribut" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createEditionPropertyHorizontal( this.language, "Langues" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createEditionPropertyHorizontal( this.sens, "Vision nocturne" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "hr" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createEditionPropertyDescription( this.general_desc, "Description" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createEditionPropertyDescription( this.physical_desc, "Description physique" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createEditionPropertyDescription( this.society_desc, "Description en société" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createEditionPropertyDescription( this.believe_desc, "Croyances" ), this.getDomElement() );
        return this.getDomElement();
    }
};

SERVICE.CLASS.addPrototype( RACES.RacePopup, OBJECT.InterfaceHtml );

RACES.Race           = function ( race_name ) {
    this.init( race_name );
};
RACES.Race.prototype = {
    init: function ( race_name ) {
        this.updateData( RACES.getDataByName( race_name ) );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    getUUID    : function () {
        return this.getName();
    },
    getName    : function () {
        return this.name;
    },
    getBodySize: function () {
        return this[ RACES.PARAM.BODY_SIZE.key ];
    },
    //********************************************  HTML   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case RACES.PARAM.BODY_SIZE.key:
                this[ key ] = new RACES.RaceSize( value );
                break;
            case "name":
            case "start_life":
            case "speed":
            case "characteristic_bonus":
            case "characteristic_malus":
            case "language":
            case "language_sup":
            case "sens":
                this[ key ] = value;
                break;
        }
    }
};
SERVICE.CLASS.addPrototype( RACES.Race, OBJECT.InterfaceHtml );


RACES.RaceSize           = function ( race_size ) {
    this.init( race_size );
};
RACES.RaceSize.prototype = {
    init: function ( race_size ) {
        this.value = race_size;
        this.label = SERVICE.DOM.createElement( "div", {}, BODY_SIZE[ this.value ].label );;
    }
};