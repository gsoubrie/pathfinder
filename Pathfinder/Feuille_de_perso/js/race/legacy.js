"use strict";
LEGACIES.Legacy           = function () {
    this.init();
};
LEGACIES.Legacy.prototype = {
    init        : function () {
        this.label = SERVICE.DOM.createElement( "div", {} );
    },
    initWithName: function ( legacy_name ) {
        this.setName(legacy_name);
        let data = LEGACIES.getDataByName( legacy_name );
        this.updateData( data );
    },
    //********************************************  GETTER SETTER  **************************************************//
    setName: function ( to_set ) {
        this.name            = to_set;
        this.name_lower_case = to_set.toLowerCase();
        this.label.innerHTML = to_set;
    },
    getUUID: function () {
        return this.name_lower_case;
    },
    //********************************************  HTML   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case "name":
                this.setName( value );
                break;
            case "general_desc":
            case "name_lower_case":
                this[ key ] = value;
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        return this.name;
    }
};

SERVICE.CLASS.addPrototype( LEGACIES.Legacy, OBJECT.InterfaceHtml );

LEGACIES.LegacyPopup           = function () {
    this.init();
};
LEGACIES.LegacyPopup.prototype = {
    init: function () {
        this.label = SERVICE.DOM.createElement( "div", {} );
    },
    //********************************************  HTML   **************************************************//
    computeHTMLEdition: function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "race-edition" } ) );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createEditionPropertyDescription( this.general_desc, "Description" ), this.getDomElement() );
        return this.getDomElement();
    }
};

SERVICE.CLASS.addPrototype( LEGACIES.LegacyPopup, LEGACIES.Legacy );
