"use strict";
RACES.Race           = function ( data ) {
    this.init( data );
};
RACES.Race.prototype = {
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
            case "traits":
            case "night_vision":
            case "physical_desc":
            case "heritage":
            case "info":
            case "dons":
                this[key] = value;
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    },
    //********************************************  HTML   **************************************************//
    computeHTMLEdition: function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "race-edition" } ) );
        let traits_row = SERVICE.DOM.addElementTo(SERVICE.DOM.createElement( "div", { class: "traits" }), this.getDomElement());
        for (let index = 0; index < this.traits.length; index++) {
            SERVICE.DOM.addElementTo(SERVICE.DOM.createElement( "div", { class: "trait" },this.traits[index]),traits_row);
            
        }
        SERVICE.DOM.addElementTo( SERVICE.DOM.createEditionPropertyHorizontal( this.start_life, "Point de vie" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createEditionPropertyHorizontal( this.body_size, "Taille moyenne" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createEditionPropertyHorizontal( this.speed + " mètres", "Vitesse" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createEditionPropertyHorizontal( this.characteristic_bonus, "Primes d'attributs" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createEditionPropertyHorizontal( this.characteristic_malus, "Pénalité d'attribut" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createEditionPropertyHorizontal( this.language, "Langues" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createEditionPropertyHorizontal( this.night_vision, "Vision nocturne" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createEditionPropertyDescription( this.physical_desc, "Description physique" ), this.getDomElement() );
        return this.getDomElement();
    }
};

SERVICE.CLASS.addPrototype( RACES.Race, OBJECT.InterfaceHtml );
