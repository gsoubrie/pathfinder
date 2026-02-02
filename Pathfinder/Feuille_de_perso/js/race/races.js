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

RACES.RacePopup           = function ( data ) {
    this.init( data );
};
RACES.RacePopup.prototype = {
    init: function ( data ) {
        this.updateData( data );
    },
    //********************************************  HTML   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case "key":
            case "name":
                this[ "name" ] = value;
                this[ "key" ] = value;
                break;
            case "start_life":
            case "body_size":
            case "speed":
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
            case "characteristics_bonus":
            case "characteristics_malus":
                this[ key ] = new CHARACTERISTICS.Bonus( key === "characteristics_bonus" );
                this[ key ].initWithData( value );
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
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyHorizontal( this.start_life, "Point de vie" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyHorizontal( this.body_size, "Taille moyenne" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyHorizontal( this.speed + " mètres", "Vitesse" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyHorizontal( this.characteristics_bonus.getHtml_forEditionPopUp(), "Primes d'attributs" ), this.getDomElement() );
        if ( this.characteristics_malus ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyHorizontal( this.characteristics_malus.getHtml_forEditionPopUp(), "Pénalité d'attribut" ), this.getDomElement() );
        }
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyHorizontal( this.language, "Langues" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyHorizontal( this.sens, "Vision nocturne" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "hr" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyDescription( this.general_desc, "Description" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyDescription( this.physical_desc, "Description physique" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyDescription( this.society_desc, "Description en société" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyDescription( this.believe_desc, "Croyances" ), this.getDomElement() );
        return this.getDomElement();
    }
};

SERVICE.CLASS.addPrototype( RACES.RacePopup, RACES.Race );


RACES.WindowGroup           = function () {
    this.init( "race_window_group" );
};
RACES.WindowGroup.prototype = {
    init        : function ( group_name ) {
        this.initCommon( group_name );
        CONTROLLER.Main.races = new RACES.Races();
        this.initWithData();
    },
    initWithData: function () {
        for ( let i = 0, _size_i = CONTROLLER.Main.races.getSize(); i < _size_i; i++ ) {
            let current = CONTROLLER.Main.races.getContent( i );
            console.log("GSOU", "[WindowGroup - initWithData]", current.name );
            let added   = this.addSpecific( this.getChildConstructor( current.name, this.getName() ) );
            added.setContentDomElementTarget( current.computeHTMLEdition() );
        }
    }
};

RACES.getDataByName = function ( race_name ) {
    for ( let i = 0, _size_i = RACES.ENUM.length; i < _size_i; i++ ) {
        if ( RACES.ENUM[ i ].name === race_name ) {
            return RACES.ENUM[ i ];
        }
    }
    return null;
};