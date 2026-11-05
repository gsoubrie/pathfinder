"use strict";

// ─────────────────────────────────────────────────────────────────────────────
// CHARACTER.StuffsWindow
// Onglet "Équipement" : l'inventaire du personnage. Le « + » en TÊTE de
// la barre ouvre la POPUP D'AJOUT (CHARACTER.StuffAddPopup : type,
// modèle, commentaire), l'encombrement total vit dans la barre à côté
// (PF2 : 10 légers = 1 bulk, les consommables comptent à l'unité) et se
// rafraîchit en place aux changements de quantité — le re-rendu complet
// coûte trop cher par frappe. Une section par type (STUFF.KINDS) :
// chaque entrée porte son info inline de type (Dégâts pour une arme,
// CA bonus pour une armure), son encombrement, son "?" de popup (données
// scrapées : niveau, prix, champs de type, description), sa quantité
// quand l'objet est consommable (le trait "Consommable" décide, jamais
// le nom), son commentaire en infobulle, sa coche "Porté" (mise à jour
// en place, aucune donnée affichée ne se recalcule aujourd'hui) et son
// retrait. Le + de la popup empile les consommables déjà possédés, il
// ne fait rien sur un objet déjà là.
// ─────────────────────────────────────────────────────────────────────────────
/**
 * @class CHARACTER.StuffsWindow
 * @extends WINDOW_V2.ElementFromData
 */
CHARACTER.StuffsWindow = function ( parent_name ) {
    this.initSpecific( CHARACTER.StuffsWindow.NAME, parent_name, "Équipement" );
};
CHARACTER.StuffsWindow.prototype = {
    initSpecific: WINDOW_V2.ElementFromData.initSpecific,

    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__stuff__add":
            case "event__stuff__remove":
                this._refreshContent();
                return;
            // The worn toggle and the quantity live on their entry state :
            // the domain owns the truth, the display follows in place
            // (nothing recalculates, the rebuild would cost too much)
            case "event__stuff__toggle_worn": {
                CONTROLLER.Character.current_character.doActionAfter( event_name, params );
                let stuffs = CONTROLLER.Character.current_character.getStuffs();
                let entry  = stuffs.getContentByUUID( params[ "param__stuff__kind" ] + "__" + params[ "param__stuff__value" ] );
                if ( entry ) {
                    // The stuff names carry apostrophes : the selector by
                    // value embeds double quotes (JSON.stringify), never
                    // single ones
                    let entry_dom_element = this.content_dom_element_target.querySelector( ".stuffs-entry[data-kind='" + entry.getKind() + "'][data-value=" + JSON.stringify( entry.value ) + "]" );
                    if ( entry_dom_element ) {
                        entry_dom_element.setAttribute( "data-worn", entry.worn ? "true" : "false" );
                    }
                }
                return;
            }
            case "event__stuff__edit_quantity": {
                CONTROLLER.Character.current_character.doActionAfter( event_name, params );
                // The bulk total counts the consumables by unit : it
                // follows the quantity change in place
                this._updateBulkTotal();
                return;
            }
        }
        WINDOW_V2.Element.prototype.doActionAfter.call( this, event_name, params );
    },

    //********************************************  HTML   **************************************************//
    computeHtmlWithData: function ( character_object ) {
        this.content_dom_element_target      = SERVICE.DOM.createElement( "div", { class: "stuffs-window" } );
        SERVICE.DOM.addElementToAfterEmpty( this.content_dom_element_target, this.dom_element_target );
        this._buildContent();
    },

    _refreshContent: function () {
        SERVICE.DOM.empty( this.content_dom_element_target );
        this._buildContent();
    },

    _buildContent: function () {
        let stuffs = CONTROLLER.Character.current_character.getStuffs();
        this._buildAddBar( this.content_dom_element_target, stuffs );
        for ( let k = 0, _size_k = STUFF.KINDS.length; k < _size_k; k++ ) {
            let kind_data = STUFF.KINDS[ k ];
            let section   = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", { class: "stuffs-section", "data-kind": kind_data.key } ),
                this.content_dom_element_target
            );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-section-title" }, kind_data.label ), section );
            let entries = stuffs.getStuffsByKind( kind_data.key );
            for ( let e = 0, _size_e = entries.length; e < _size_e; e++ ) {
                this._buildEntry( section, entries[ e ] );
            }
        }
    },

    // The bar of the window : the « + » FIRST opens the add popup, the
    // bulk total sits at its right
    _buildAddBar: function ( parent, stuffs ) {
        let add_bar = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-add-bar" } ), parent );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
            class  : "stuffs-add-button",
            title  : "Ajouter un équipement",
            onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__stuff__open_add_popup',{})"
        }, "+" ), add_bar );
        this.bulk_dom_element = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "stuffs-bulk-total" }, this._computeBulkText( stuffs ) ),
            add_bar
        );
    },

    _buildEntry: function ( section, stuff ) {
        let entry = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", {
                class        : "stuffs-entry",
                "data-kind"  : stuff.kind,
                "data-value" : stuff.value,
                "data-worn"  : stuff.worn ? "true" : "false",
                "title"      : stuff.comment || ""
            } ),
            section
        );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-entry-value" }, stuff.value ), entry );
        // The inline info of the entry kind : Dégâts for a weapon, CA
        // bonus for an armor (KINDS, scraped keys)
        let kind_data = STUFF.getKindData( stuff.kind );
        let info_value = kind_data && kind_data.info_field ? STUFFS.getFieldValue( stuff.value, kind_data.info_field ) : null;
        if ( info_value ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-entry-stat" }, info_value ), entry );
        }
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-entry-bulk", "title": "Encombrement" }, STUFFS.getFieldValue( stuff.value, "bulk" ) || "—" ), entry );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
            class  : "stuffs-entry-info gs-link-information",
            title  : "Information",
            onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__item',{'param__stuff__value':this.parentNode.getAttribute('data-value')})"
        }, "?" ), entry );
        if ( stuff.isConsumable() ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
                class    : "stuffs-entry-quantity",
                value    : "" + stuff.quantity,
                title    : "Quantité",
                onchange: "MANAGER.EventManagerV2.doActionAfter(event,'event__stuff__edit_quantity',{'param__stuff__kind':this.parentNode.getAttribute('data-kind'),'param__stuff__value':this.parentNode.getAttribute('data-value'),'param__stuff__quantity':this.value})"
            } ), entry );
        }
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
            class  : "stuffs-entry-worn",
            title  : "Porté",
            onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__stuff__toggle_worn',{'param__stuff__kind':this.parentNode.getAttribute('data-kind'),'param__stuff__value':this.parentNode.getAttribute('data-value')})"
        }, "Porté" ), entry );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
            class  : "stuffs-entry-remove",
            title  : "Retirer",
            onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__stuff__remove',{'param__stuff__kind':this.parentNode.getAttribute('data-kind'),'param__stuff__value':this.parentNode.getAttribute('data-value')})"
        }, "×" ), entry );
    },

    //********************************************  DATA   **************************************************//
    _computeBulkText: function ( stuffs ) {
        let total_bulk = 0;
        for ( let i = 0, _size_i = stuffs.getSize(); i < _size_i; i++ ) {
            total_bulk += STUFFS.getEntryBulk( stuffs.getContent( i ) );
        }
        // One decimal at most, French style (0,1 light bulk steps)
        let rounded = Math.round( total_bulk * 10 ) / 10;
        return "Encombrement : " + String( rounded ).replace( ".", "," );
    },

    _updateBulkTotal: function () {
        if ( !this.bulk_dom_element ) {
            return;
        }
        this.bulk_dom_element.textContent = this._computeBulkText( CONTROLLER.Character.current_character.getStuffs() );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.StuffsWindow, WINDOW_V2.ElementFromData );
CHARACTER.StuffsWindow.NAME = "stuffs_sheet";
