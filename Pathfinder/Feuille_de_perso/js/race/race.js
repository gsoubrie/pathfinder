"use strict";
RACES.Race           = function () {
    this.init();
};
RACES.Race.prototype = {
    init: function () {
        this.setKey( "race" );
        this[ LEGACIES.key_element ]      = new LEGACIES.Legacy();
        this[ RACES.PARAM.BODY_SIZE.key ] = new RACES.RaceSize();
        this.available_legacies           = new LEGACIES.Legacies();
        this.label                        = SERVICE.DOM.createElement( "div", {} );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__form__element_changed":
                this.setValue( params[ "param__edition_value" ] );
                this.getLegacy().setName( "" );
                params[ "param__characteristics__object" ].doActionAfter( "event__reset_characteristics_bonuses", { "param__is_for": RACES.key_element } );
                params[ "param__characteristics__object" ].doActionAfter( "event__set_object_bonuses", { "event__race_object": this, "param__is_for": RACES.key_element } );
                return;
        }
        CHARACTER.ComponentInterface.prototype.doActionAfter.call( this, event_name, params );
    },
    //********************************************  GETTER SETTER  **************************************************//
    setValue   : function ( to_set ) {
        CHARACTER.ComponentInterface.prototype.setValue.call( this, to_set );
        console.log( "GSOU", "[Race - setValue]", this );
        //this.label.innerHTML = to_set;
        let data_from_race = RACES.getDataByName( this.getValue() );
        this.setData( "start_life", data_from_race[ "start_life" ] );
        this.setData( "speed", data_from_race[ "speed" ] );
        this.setData( "language", data_from_race[ "language" ] );
        this.setData( "sens", data_from_race[ "sens" ] );
        this.setData( "characteristics_bonus", data_from_race[ "characteristics_bonus" ] );
        this.setData( "characteristics_malus", data_from_race[ "characteristics_malus" ] );
        this.available_legacies.init( RACES.getLegacies( this.getName() ) );
    },
    setLegacy  : function ( to_set ) {
        this.getLegacy().setName( to_set );
    },
    getUUID    : function () {
        return this.getName();
    },
    getBodySize: function () {
        return this[ RACES.PARAM.BODY_SIZE.key ];
    },
    getLegacy  : function () {
        return this[ LEGACIES.key_element ];
    },
    //********************************************  DATA   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case RACES.PARAM.BODY_SIZE.key:
                this.getBodySize().setValue( value );
                break;
            case LEGACIES.key_element:
                this.getLegacy().setName( value );
                break;
            case "name":
                this.setValue( value );
                break;
            case "start_life":
            case "speed":
            case "characteristics_bonus":
            case "characteristics_malus":
            case "language":
            case "language_sup":
            case "sens":
                this[ key ] = value;
                break;
            default:
                console.warn( "GSOU", "[Race - setData]", key, value );
        }
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        let to_return                          = {};
        to_return[ this.getKey() ]             = this.getValue();
        //to_return[ LEGACIES.key_element ]      = this.getLegacy().getDataToSave();
        //to_return[ RACES.PARAM.BODY_SIZE.key ] = this.getBodySize().getDataToSave();
        return to_return;
    },
    //********************************************  SAVE   **************************************************//
    computeHtml: function ( params ) {
        switch ( params[ "param__window" ] ) {
            case CHARACTER.GeneralWindow.NAME:
                if ( this.dom_element_general ) {
                    return;
                }
                this.dom_element_general = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-ancestry" } ), params[ "param__dom_element_parent" ] );
                SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createPropertyVerticalInput( this.key, this.value, SERVICE.DOM.createElement( "div", {}, this.value ), RACES.label_element ), this.dom_element_general );
                return;
            //SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createPropertyVertical( RACES.key_element, character_object.getRace().getName(), character_object.getRace().getLabel(), RACES.label_element, false ), this.area_ancestry );
        }
    }
};
SERVICE.CLASS.addPrototype( RACES.Race, CHARACTER.ComponentInterface );

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
            case "name":
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

RACES.RaceSize           = function () {
    this.init();
};
RACES.RaceSize.prototype = {
    init    : function () {
        this.label = SERVICE.DOM.createElement( "div", {} );
    },
    setValue: function ( to_set ) {
        this.value           = to_set;
        this.label.innerHTML = BODY_SIZE[ this.value ].label;
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        return this.value;
    }
};