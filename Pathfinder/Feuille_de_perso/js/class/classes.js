"use strict";
CLASSES.Classes           = function () {
    this.init();
};
CLASSES.Classes.prototype = {
    init: function () {
        this.initContents();
        for ( let i = 0, _size_i = CLASSES.ENUM.length; i < _size_i; i++ ) {
            this.add( new CLASSES.ClassPopup( CLASSES.ENUM[ i ] ) );
        }
    }
};

SERVICE.CLASS.addPrototype( CLASSES.Classes, OBJECT.InterfaceContainerHtml );

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
            case "characteristics_bonus":
                this[ key ] = new CHARACTERISTICS.CharacteristicsBonuses();
                this[ key ].setValueFromClassPopup(value);
                if ( this.name === "Barbare" ) {
                    console.log( "GSOU", "[ClassPopup - computeHTMLEdition]", this[ key ] );
                }
                break;
            default:
                console.warn( "[IGNORED DATA]", key );
        }
    },
    //********************************************  HTML   **************************************************//
    computeHTMLEdition: function () {
        if ( this.name === "Barbare" ) {
            console.log( "GSOU", "[ClassPopup - computeHTMLEdition]", this );
        }
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "class-edition" } ) );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyHorizontal( this.general_desc, "" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyHorizontal( this.life_point_by_level, "Point de vie par level" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyHorizontal( this.characteristics_bonus, "Prime d'attribut" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyDescription( this.capacities, "Capacités" ), this.getDomElement() );
        return this.getDomElement();
    }
};

SERVICE.CLASS.addPrototype( CLASSES.ClassPopup, CLASSES.Class );