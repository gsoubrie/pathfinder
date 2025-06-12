"use strict";
CLASSES.Class           = function () {
    this.init();
};
CLASSES.Class.prototype = {
    init: function ( data ) {
        this.label = SERVICE.DOM.createElement( "div", {} );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    setName: function ( to_set ) {
        this.name            = to_set;
        this.label.innerHTML = to_set;
        let data_from_class   = CLASSES.getDataByName( this.name );
        this.setData( "prime_attribute", data_from_class[ "prime_attribute" ] );
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
            case "prime_attribute":
                this[key] = value;
                break;
            default:
                console.warn( "[IGNORED DATA]", key );
        }
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        let to_return       = {};
        to_return[ "name" ] = this.name;
        return to_return;
    }
};

SERVICE.CLASS.addPrototype( CLASSES.Class, OBJECT.InterfaceHtml );


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
            case "prime_attributes":
            case "life_point_by_level":
            case "desc_fight":
            case "desc_socially":
            case "desc_exploration":
            case "desc_interlude":
            case "desc_you_could":
            case "desc_probably_others":
            case "mastery_initial":
            case "prime_attribute":
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
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyHorizontal( this.prime_attribute, "Prime d'attribut" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyDescription( this.capacities, "Capacités" ), this.getDomElement() );
        return this.getDomElement();
    }
};

SERVICE.CLASS.addPrototype( CLASSES.ClassPopup, CLASSES.Class );