"use strict";

// ─────────────────────────────────────────────────────────────────────────────
// CHARACTER.SpellAddPopup
// Popup d'ajout au répertoire de sorts (le « + » de la barre de la fenêtre
// l'ouvre) : UN sélecteur SORT sur tout le dataset scrapé (composant lib
// avec filtre + Entrée), l'Entrée pose le nom CANONIQUE d'une option qui
// matche (insensible à la casse), SINON le texte brut du filtre DEVIENT
// le sort (demande utilisateur : le répertoire vit aussi HORS dataset —
// un sort maison n'a ni coût, ni rang, ni traits, ni popup « ? », il vit
// dans la section Autres sorts). Champ COMMENTAIRE libre. Valider crée
// l'entrée puis referme, Quitter referme sans rien créer : tout se lit
// au commit sur son input, jamais embarqué inline — les noms de sorts
// portent des apostrophes. La popup vit sur le slot
// CONTROLLER.Character.edition_popup comme les popups d'édition de la
// feuille (le retrait au reset la ferme).
// ─────────────────────────────────────────────────────────────────────────────
/**
 * @class CHARACTER.SpellAddPopup
 * @extends OBJECT.InterfaceHtml
 */
CHARACTER.SpellAddPopup = function () {
    this.init();
};
CHARACTER.SpellAddPopup.prototype = {
    init: function () {
        this.selector_component = null;
        this.pending_value       = null;
        this.comment_input       = null;
        this.computeHtml();
    },
    //********************************************  EVENT LISTENER  **************************************************//
    close: function () {
        SERVICE.DOM.removeElement( this.getDomElement() );
    },
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__spell__toggle_selector": {
                this.selector_component.toggleState();
                return;
            }
            case "event__spell__pick": {
                this._pickSpell( params[ "param__choice_value" ] );
                return;
            }
            case "event__spell__filter_enter": {
                // Enter sur le filtre : le nom CANONIQUE d'une option qui
                // matche se pose (insensible à la casse), SINON le texte
                // brut devient le sort — le répertoire vit aussi hors
                // dataset
                let filter_value = String( params[ "param__filter_value" ] || "" );
                let options      = this.selector_component.getDomElement().querySelectorAll( ".single-select-option" );
                for ( let i = 0, _size_i = options.length; i < _size_i; i++ ) {
                    if ( options[ i ].getAttribute( "data-value" ).toLowerCase() === filter_value.toLowerCase() ) {
                        this._pickSpell( options[ i ].getAttribute( "data-value" ) );
                        return;
                    }
                }
                if ( filter_value ) {
                    this._pickSpell( filter_value );
                }
                return;
            }
            case "event__spell__commit": {
                this._commit();
                return;
            }
        }
    },
    //********************************************  HTML   **************************************************//
    computeHtml: function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "popup" } ) );
        let container = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "edition-property-popup spells-form-popup spells-add-popup" } ), this.getDomElement() );
        let title      = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "title" }, "Ajouter un sort au répertoire" ), container );
        let actions    = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "popup-up-actions" } ), title );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "button popup-up-valid", onclick: "CONTROLLER.Character.doActionAfter('event__spell__commit')" }, "Valider" ), actions );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "button popup-up-cancel", onclick: "CONTROLLER.Character.doActionAfter('event__form__reset')" }, "Quitter" ), actions );

        let body     = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-form-popup-body" } ), container );
        let spell_row = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-form-popup-row spells-add-popup-spell" } ), body );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-form-popup-label" }, "Sort" ), spell_row );
        let spell_component = new COMPONENT.SingleSelectFromData();
        spell_component.setToggleEventName( "event__spell__toggle_selector" );
        spell_component.setClickEventName( "event__spell__pick" );
        spell_component.setFilterEnterEventName( "event__spell__filter_enter" );
        spell_component.setOptions( SPELLS.getSpellOptions() );
        spell_component.setSelectedName( this.pending_value );
        spell_component.computeHtml();
        SERVICE.DOM.addElementTo( spell_component.getDomElement(), spell_row );
        this.selector_component = spell_component;

        let comment_row = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-form-popup-row spells-form-popup-comment" } ), body );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-form-popup-label" }, "Commentaire" ), comment_row );
        this.comment_input = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
            "class"      : "spells-form-popup-comment-input",
            "placeholder": "Précision libre sur ce sort"
        }, "" ), comment_row );
        SERVICE.DOM.addElementTo( this.getDomElement(), document.querySelector( "body" ) );
    },
    //********************************************  DATA   **************************************************//
    _pickSpell: function ( value ) {
        this.pending_value = value;
        this.selector_component.setSelectedName( value );
        this.selector_component.hidePopup();
    },

    _commit: function () {
        if ( !this.pending_value ) {
            return;
        }
        CONTROLLER.Character.current_character.doActionAfter( "event__spell__add", {
            "param__spell__value"  : this.pending_value,
            "param__spell__comment": this.comment_input ? this.comment_input.value : null
        } );
        CONTROLLER.Character.doActionAfter( "event__form__reset" );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.SpellAddPopup, OBJECT.InterfaceHtml );
