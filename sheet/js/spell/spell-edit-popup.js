"use strict";

// ─────────────────────────────────────────────────────────────────────────────
// CHARACTER.SpellEditPopup
// Popup d'ÉDITION d'un sort du répertoire (la ROUE CRANTÉE de la ligne
// l'ouvre) : le nom en LECTURE (le nom est l'identité de l'entrée, le
// dataset scrape les siens) et le COMMENTAIRE libre (sa seule donnée
// de v1 — le répertoire est un ensemble : présence + commentaire).
// Valider applique et referme, Retirer supprime l'entrée du répertoire
// (l'événement existant event__spell__remove part au personnage, la
// fenêtre se rafraîchit) puis referme, Quitter referme sans rien
// changer. Elle vit sur le slot CONTROLLER.Character.edition_popup
// comme la popup d'ajout (mêmes classes, stylage partagé
// .spells-form-popup).
// ─────────────────────────────────────────────────────────────────────────────
/**
 * @class CHARACTER.SpellEditPopup
 * @extends OBJECT.InterfaceHtml
 */
CHARACTER.SpellEditPopup = function ( value ) {
    this.init( value );
};
CHARACTER.SpellEditPopup.prototype = {
    init: function ( value ) {
        this.value         = value;
        this.comment_input = null;
        this.computeHtml();
    },
    //********************************************  EVENT LISTENER  **************************************************//
    close: function () {
        SERVICE.DOM.removeElement( this.getDomElement() );
    },
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__spell__commit_edit": {
                this._commit();
                return;
            }
            case "event__spell__commit_remove": {
                // The removal keeps its own event : the character routes it
                // to the domain and refreshes the windows, this popup
                // only closes
                CONTROLLER.Character.current_character.doActionAfter( "event__spell__remove", {
                    "param__spell__value": this.value
                } );
                CONTROLLER.Character.doActionAfter( "event__form__reset" );
                return;
            }
        }
    },
    //********************************************  HTML   **************************************************//
    computeHtml: function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "popup" } ) );
        let container = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "edition-property-popup spells-form-popup spells-edit-popup" } ), this.getDomElement() );
        let title      = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "title" }, "Modifier un sort" ), container );
        let actions    = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "popup-up-actions" } ), title );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "button popup-up-valid", onclick: "CONTROLLER.Character.doActionAfter('event__spell__commit_edit')" }, "Valider" ), actions );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "button spells-edit-popup-remove-button", onclick: "CONTROLLER.Character.doActionAfter('event__spell__commit_remove')" }, "Retirer" ), actions );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "button popup-up-cancel", onclick: "CONTROLLER.Character.doActionAfter('event__form__reset')" }, "Quitter" ), actions );

        let body  = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-form-popup-body" } ), container );
        let entry = CONTROLLER.Character.current_character.getSpells().getContentByUUID( "spell__" + this.value );

        // The name stays read-only : it is the identity of the entry, the
        // dataset scrapes its own — a homebrew name lives read-only too
        let name_row = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-form-popup-row" } ), body );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-form-popup-label" }, "Sort" ), name_row );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-edit-popup-name" }, this.value ), name_row );

        let comment_row = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-form-popup-row spells-form-popup-comment" } ), body );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-form-popup-label" }, "Commentaire" ), comment_row );
        this.comment_input = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
            "class"      : "spells-form-popup-comment-input",
            "placeholder": "Précision libre sur ce sort"
        }, "" ), comment_row );
        if ( this.comment_input && entry ) {
            this.comment_input.value = entry.comment || "";
        }
        SERVICE.DOM.addElementTo( this.getDomElement(), document.querySelector( "body" ) );
    },
    //********************************************  DATA   **************************************************//
    _commit: function () {
        CONTROLLER.Character.doActionAfter( "event__spell__edit_comment", {
            "param__spell__value"  : this.value,
            "param__spell__comment": this.comment_input ? this.comment_input.value : null
        } );
        CONTROLLER.Character.doActionAfter( "event__form__reset" );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.SpellEditPopup, OBJECT.InterfaceHtml );
