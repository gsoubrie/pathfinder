"use strict";
/**
 * @class LEGACIES.Legacies
 * @extends OBJECT.InterfaceContainerHtml
 */
LEGACIES.Legacies           = function () {
};
LEGACIES.Legacies.prototype = {
    init: function ( data ) {
        this.initContents();
        for ( let i = 0, _size_i = data.length; i < _size_i; i++ ) {
            let to_add = new LEGACIES.LegacyPopup(LEGACIES.getDataByName(data[ i ]));
            this.add( to_add );
        }
    }
};

SERVICE.CLASS.addPrototype( LEGACIES.Legacies, OBJECT.InterfaceContainerHtml );

/**
 * @class LEGACIES.LegacyPopup
 * @extends LEGACIES.Legacy
 */
LEGACIES.LegacyPopup           = function ( data ) {
    this.init( data );
};
LEGACIES.LegacyPopup.prototype = {
    init: function ( data ) {
        this.updateData( data );
    },
    //********************************************  HTML   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case "name":
                this.setKey( value );
                break;
            case "general_desc":
            case "name_lower_case":
                this[ key ] = value;
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    },
    //********************************************  HTML   **************************************************//
    computeHTMLEdition: function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "race-edition" } ) );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createEditionPropertyDescription( this.general_desc, "Description" ), this.getDomElement() );
        return this.getDomElement();
    }
};

SERVICE.CLASS.addPrototype( LEGACIES.LegacyPopup, LEGACIES.Legacy );
/**
 * @class LEGACIES.WindowGroup
 * @extends WINDOW_V2.ElementGroupFromData
 */
LEGACIES.WindowGroup           = function () {
    this.init( "race_window_group" );
};
LEGACIES.WindowGroup.prototype = {
    init        : function ( group_name ) {
        this.initCommon( group_name );
        this.initWithData();
    },
    initWithData: function ( data_windows ) {
        let none   = this.addSpecific( this.getChildConstructor( LEGACIES.default_value, this.getName() ) );
        let dom_none = SERVICE.DOM.createElement("div", {class: "edition-property description"});
        SERVICE.DOM.addElementTo(SERVICE.DOM.createElement("div", {class: "value"}, "Aucun Héritage"), dom_none);
        none.setContentDomElementTarget( dom_none );
        for ( let i = 0, _size_i = CONTROLLER.Character.current_character.getRace().available_legacies.getSize(); i < _size_i; i++ ) {
            let current = CONTROLLER.Character.current_character.getRace().available_legacies.getContent(i);
            let added   = this.addSpecific( this.getChildConstructor( current.getKey(), this.getName() ) );
            added.setContentDomElementTarget( current.computeHTMLEdition() );
        }

    }
    //********************************************  EVENT LISTENER  **************************************************//
    
    //********************************************  HTML   **************************************************//
};

SERVICE.CLASS.addPrototype( LEGACIES.WindowGroup, WINDOW_V2.ElementGroupFromData );