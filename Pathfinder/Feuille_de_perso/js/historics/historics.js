"use strict";
HISTORICS.Historic           = function () {
    this.init();
};
HISTORICS.Historic.prototype = {
    init: function ( data ) {
        this.label = SERVICE.DOM.createElement( "div", {} );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__form__element_changed":
                this.setName( params[ "param__edition_value" ] );
                //params[ "param__characteristics__object" ].doActionAfter( "event__reset_characteristics_bonuses", { "param__is_for": CLASSES.key_element } );
                //params[ "param__characteristics__object" ].doActionAfter( "event__set_object_bonuses", { "event__class_object": this, "param__is_for": CLASSES.key_element } );
                break;
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    setName: function ( to_set ) {
        this.name            = to_set;
        this.label.innerHTML = to_set;
        //let data_from_class  = CLASSES.getDataByName( this.name );
        //this.setData( "characteristics_bonus", data_from_class[ "characteristics_bonus" ] );
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

SERVICE.CLASS.addPrototype( HISTORICS.Historic, OBJECT.InterfaceHtml );


HISTORICS.Historics           = function () {
    this.init();
};
HISTORICS.Historics.prototype = {
    init: function () {
        this.initContents();
        for ( let i = 0, _size_i = HISTORICS.ENUM.length; i < _size_i; i++ ) {
            this.add( new HISTORICS.HistoricsPopup( HISTORICS.ENUM[ i ] ) );
        }
    }
};

SERVICE.CLASS.addPrototype( HISTORICS.Historics, OBJECT.InterfaceContainerHtml );


HISTORICS.HistoricsPopup           = function ( data ) {
    this.init( data );
};
HISTORICS.HistoricsPopup.prototype = {
    init: function ( data ) {
        this.updateData( data );
    },
    //********************************************  HTML   **************************************************//

    setData: function ( key, value ) {
        switch ( key ) {
            case "name":
            case "requirement":
            case "description":
            case "gift_skill":
            case "characteristics_bonus":
            case "skills":
                this[ key ] = value;
                break;
            default:
                console.warn( "[IGNORED DATA]", key );
        }
    },
    //********************************************  HTML   **************************************************//
    computeHTMLEdition: function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "historic-edition" } ) );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyHorizontal( this.requirement, "Prérequis" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyHorizontal( this.description, "Descriptions" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyHorizontal( this.gift_skill, "Prime d'attribut" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyDescription( this.characteristics_bonus, "Bonus" ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyDescription( this.skills, "Dons" ), this.getDomElement() );
        return this.getDomElement();
    }
};

SERVICE.CLASS.addPrototype( HISTORICS.HistoricsPopup, HISTORICS.Historic );
