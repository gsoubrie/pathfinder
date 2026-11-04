"use strict";

// ─────────────────────────────────────────────────────────────────────────────
// CHARACTER.AdjustmentsWindow
// Onglet "Ajustements" : le point neutre d'édition du personnage. Une
// section par catégorie (ADJUSTMENT.KINDS), chaque entrée porte sa valeur et
// son explication libre, le retrait vit ici. Le reste de la feuille reste
// lecture : les zones consomment getValuesByKind.
// ─────────────────────────────────────────────────────────────────────────────
/**
 * @class CHARACTER.AdjustmentsWindow
 * @extends WINDOW_V2.ElementFromData
 */
CHARACTER.AdjustmentsWindow = function ( parent_name ) {
    this.initSpecific( CHARACTER.AdjustmentsWindow.NAME, parent_name, "Ajustements" );
};
CHARACTER.AdjustmentsWindow.prototype = {
    initSpecific: WINDOW_V2.ElementFromData.initSpecific,

    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__adjustment__add":
            case "event__adjustment__remove":
                SERVICE.DOM.empty( this.content_dom_element_target );
                this._buildContent();
                break;
        }
        WINDOW_V2.Element.prototype.doActionAfter.call( this, event_name, params );
    },

    //********************************************  HTML   **************************************************//
    computeHtmlWithData: function ( character_object ) {
        this.content_dom_element_target = SERVICE.DOM.createElement( "div", { class: "adjustments-window" } );
        SERVICE.DOM.addElementToAfterEmpty( this.content_dom_element_target, this.dom_element_target );
        this._buildContent();
    },

    _buildContent: function () {
        let adjustments = CONTROLLER.Character.current_character.getAdjustments();
        for ( let k = 0, _size_k = ADJUSTMENT.KINDS.length; k < _size_k; k++ ) {
            let kind_data = ADJUSTMENT.KINDS[ k ];
            let section   = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", { class: "adjustments-section", "data-kind": kind_data.key } ),
                this.content_dom_element_target
            );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "adjustments-section-title" }, kind_data.label ), section );
            let entries = adjustments.getEntriesByKind( kind_data.key );
            for ( let e = 0, _size_e = entries.length; e < _size_e; e++ ) {
                this._buildEntry( section, entries[ e ] );
            }
            this._buildAddRow( section, kind_data );
        }
    },

    _buildEntry: function ( section, adjustment ) {
        let entry = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "adjustments-entry", "data-value": adjustment.value } ),
            section
        );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "adjustments-entry-value" }, adjustment.value ), entry );
        if ( adjustment.explanation ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "adjustments-entry-explanation" }, adjustment.explanation ), entry );
        }
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
            class  : "adjustments-entry-remove",
            title  : "Retirer",
            onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__adjustment__remove',{'param__adjustment__kind':'" + adjustment.kind + "','param__adjustment__value':this.parentNode.getAttribute('data-value')})"
        }, "×" ), entry );
    },

    // The added value and its explanation never travel inline (entries carry
    // apostrophes): the button reads them from its row at click time
    _buildAddRow: function ( section, kind_data ) {
        let add_row = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "adjustments-add-row" } ),
            section
        );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
            class      : "adjustments-add-input",
            placeholder: kind_data.value_placeholder,
            "data-name": "adjustment-value"
        } ), add_row );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
            class      : "adjustments-add-input",
            placeholder: ADJUSTMENT.EXPLANATION_PLACEHOLDER,
            "data-name": "adjustment-explanation"
        } ), add_row );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
            class  : "adjustments-add-button",
            title  : "Ajouter",
            onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__adjustment__add',{'param__adjustment__kind':'" + kind_data.key + "','param__adjustment__value':this.parentNode.querySelector('[data-name=\"adjustment-value\"]').value,'param__adjustment__explanation':this.parentNode.querySelector('[data-name=\"adjustment-explanation\"]').value})"
        }, "+" ), add_row );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.AdjustmentsWindow, WINDOW_V2.ElementFromData );
CHARACTER.AdjustmentsWindow.NAME = "adjustments_sheet";
