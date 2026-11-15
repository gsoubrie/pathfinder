"use strict";
/**
 * @class HISTORICS.Historic
 * @extends CHARACTER.ComponentInterfacePopup
 */
HISTORICS.Historic           = function () {
    this.init();
};
HISTORICS.Historic.prototype = {
    init        : function () {
        this.setKey( HISTORICS.key_element );
        this.setLabelProperty( HISTORICS.label_element );
    },
    //********************************************  GETTER SETTER  **************************************************//
    setValue    : function ( to_set ) {
        CHARACTER.ComponentInterfacePopup.prototype.setValue.call( this, to_set );
        // Les donnees de l'historique suivent son champ : son bonus de
        // caractéristique se distribue dans la grille des caractéristiques
        let historic_data = HISTORICS.getDataByName( this.getValue() );
        this.characteristics_bonus = null;
        if ( historic_data && historic_data.characteristics_bonus ) {
            this.characteristics_bonus = {
                "number": historic_data.characteristics_bonus.number,
                "choice" : this._normalizeFreeKeys( historic_data.characteristics_bonus.choice )
            };
        }
        if ( this.dom_element__input ) {
            this.dom_element__input.value = this.getValue();
        }
    },
    // Les donnees scrapees nomment le choix libre FRE : le vocabulaire du
    // code lit FREE (la carte Bibliothèque affiche déjà « libre »)
    _normalizeFreeKeys: function ( choices ) {
        let to_return = [];
        for ( let i = 0, _size_i = choices.length; i < _size_i; i++ ) {
            to_return.push( choices[ i ] === "FRE" ? "FREE" : choices[ i ] );
        }
        return to_return;
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        CHARACTER.ComponentInterfacePopup.prototype.doActionAfter.call( this, event_name, params );
    },
    //********************************************  SAVE   **************************************************//
    getSpecificDataToSave: function () {
        let to_return       = {};
        to_return[ this.key ] = this.getValue();
        return to_return;
    },
    //********************************************  HTML   **************************************************//
    // The choice lands the sheet on the Bibliothèque, subject Historiques
    // (the filter rides the current value, empty when unset) : the old
    // edition popup of 68 entries read as a downgrade of the subject
    computeHtmlGeneralWindow: function ( dom_element_parent ) {
        if ( this.dom_element_general ) {
            return;
        }
        this.dom_element_general = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-" + this.key } ), dom_element_parent );
        let div                  = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: " property vertical", "data-name": this.key } ), this.dom_element_general );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "label" }, this.label_property ), div );
        this.dom_element__input       = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
            class   : "value",
            readOnly: "",
            onclick : "MANAGER.EventManagerV2.doActionAfter(event,'event__historic__goto_library')"
        } ), div );
        this.dom_element__input.value = this.getValue();
    }
};

SERVICE.CLASS.addPrototype( HISTORICS.Historic, CHARACTER.ComponentInterfacePopup );

/**
 * @param {string} historic_name  Historic name, ex: "Acolyte"
 * @returns {Object|null}         The scraped entry of the historic
 */
HISTORICS.getDataByName = function ( historic_name ) {
    if ( !historic_name ) {
        return null;
    }
    for ( let i = 0, _size_i = HISTORICS.ENUM.length; i < _size_i; i++ ) {
        if ( HISTORICS.ENUM[ i ].name === historic_name ) {
            return HISTORICS.ENUM[ i ];
        }
    }
    return null;
};
