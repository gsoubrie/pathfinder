"use strict";
CLASSES.Class           = function () {
    this.init();
};
CLASSES.Class.prototype = {
    init: function ( data ) {
        this.setKey( CLASSES.key_element );
        this.setLabelProperty( CLASSES.label_element );
        this.setDefaultValue( CLASSES.default_value );
        this.label = SERVICE.DOM.createElement( "div", {} );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__form__element_changed":
                this.setName( params[ "param__edition_value" ] );
                params[ "param__characteristics__object" ].doActionAfter( "event__reset_characteristics_bonuses", { "param__is_for": CLASSES.key_element } );
                params[ "param__characteristics__object" ].doActionAfter( "event__set_object_bonuses", { "param__class_object": this, "param__is_for": CLASSES.key_element } );
                break;
        }
        CHARACTER.ComponentInterfacePopup.prototype.doActionAfter.call( this, event_name, params );
    },
    //********************************************  GETTER SETTER  **************************************************//
    setName: function ( to_set ) {
        this.name            = to_set;
        this.label.innerHTML = to_set;
        let data_from_class  = CLASSES.getDataByName( this.name );
        this.setData( "characteristics_bonus", data_from_class[ "characteristics_bonus" ] );
    },
    getUUID: function () {
        return this.name;
    },
    //********************************************  HTML   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case "name":
                this.setName( value );
                break;
            case "characteristics_bonus":
                this[ key ] = value;
                break;
            default:
                console.warn( "[IGNORED DATA]", key );
        }
    }
    //********************************************  SAVE   **************************************************//
};

SERVICE.CLASS.addPrototype( CLASSES.Class, CHARACTER.ComponentInterfacePopup );


CLASSES.ClassPopup           = function ( data ) {
    this.init( data );
};
CLASSES.ClassPopup.prototype = {
    init: function ( data ) {
        this.updateData( data );
    },
    //********************************************  HTML   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case "name":
            case "general_desc":
            case "capacities":
            case "life_point_by_level":
            case "desc_fight":
            case "desc_socially":
            case "desc_exploration":
            case "desc_interlude":
            case "desc_you_could":
            case "desc_probably_others":
            case "mastery_initial":
            case "characteristics_bonus":
            case "mastery_perception":
            case "mastery_js":
            case "mastery_skill":
            case "mastery_attack":
            case "mastery_defense":
            case "mastery_dd":
            case "capacity_by_level":
            case "mastery_spell":
            case "mastery_rarity":
                this[ key ] = value;
                break;
            default:
                console.warn( "[IGNORED DATA]", key );
        }
    },
    //********************************************  HTML   **************************************************//
    computeHTMLEdition: function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "class-edition" } ) );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyHorizontal( this.general_desc, "" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyHorizontal( this.life_point_by_level, "Point de vie par level" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyHorizontal( this.characteristics_bonus, "Prime d'attribut" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyDescription( this.capacities, "Capacités" ), this.getDomElement() );
        return this.getDomElement();
    }
};

SERVICE.CLASS.addPrototype( CLASSES.ClassPopup, CLASSES.Class );