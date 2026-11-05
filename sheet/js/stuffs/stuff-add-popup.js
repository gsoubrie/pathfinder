"use strict";

// ─────────────────────────────────────────────────────────────────────────────
// CHARACTER.StuffAddPopup
// Popup d'ajout d'équipement (le « + » de la barre de la fenêtre
// l'ouvre) : choix du TYPE, choix du MODÈLE qui suit le type (les deux
// composants lib avec filtre + Entrée), champ COMMENTAIRE libre (lu au
// commit sur son input, jamais embarqué inline — les textes portent des
// apostrophes), Valider crée l'entrée puis referme (l'événement
// d'ajout part au personnage par le plat), Quitter referme sans rien
// créer. La popup vit sur le slot CONTROLLER.Character.edition_popup
// comme les popups d'édition de la feuille (le retrait au reset la
// ferme) — la fenêtre Équipement n'héberge plus les sélecteurs.
// ─────────────────────────────────────────────────────────────────────────────
/**
 * @class CHARACTER.StuffAddPopup
 * @extends OBJECT.InterfaceHtml
 */
CHARACTER.StuffAddPopup = function () {
    this.init();
};
CHARACTER.StuffAddPopup.prototype = {
    init: function () {
        this.selector_components = {};
        this.pending_kind         = STUFF.KINDS[ 0 ].key;
        this.pending_model        = null;
        this.comment_input        = null;
        this.computeHtml();
    },
    //********************************************  EVENT LISTENER  **************************************************//
    close: function () {
        SERVICE.DOM.removeElement( this.getDomElement() );
    },
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__stuff__toggle_type_selector": {
                this.selector_components[ "type" ].toggleState();
                return;
            }
            case "event__stuff__pick_type": {
                this._pickType( params[ "param__choice_value" ] );
                return;
            }
            case "event__stuff__toggle_selector": {
                this.selector_components[ "model" ].toggleState();
                return;
            }
            case "event__stuff__pick": {
                this._pickModel( params[ "param__choice_value" ] );
                return;
            }
            // Enter sur le filtre du modèle : l'équipement vient du scrap,
            // seul un nom EXISTANT du type courant se pose (insensible à
            // la casse), un nom inconnu ne pick rien
            case "event__stuff__filter_enter": {
                let model_component = this.selector_components[ "model" ];
                let filter_value     = params[ "param__filter_value" ];
                let options          = model_component.getDomElement().querySelectorAll( ".single-select-option" );
                for ( let i = 0, _size_i = options.length; i < _size_i; i++ ) {
                    if ( options[ i ].getAttribute( "data-value" ).toLowerCase() === String( filter_value ).toLowerCase() ) {
                        this._pickModel( options[ i ].getAttribute( "data-value" ) );
                        return;
                    }
                }
                return;
            }
            case "event__stuff__commit": {
                this._commit();
                return;
            }
        }
    },
    //********************************************  HTML   **************************************************//
    computeHtml: function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "popup" } ) );
        let container = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "edition-property-popup stuffs-add-popup" } ), this.getDomElement() );
        let title      = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "title" }, "Ajouter un équipement" ), container );
        let actions    = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "popup-up-actions" } ), title );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "button popup-up-valid", onclick: "CONTROLLER.Character.doActionAfter('event__stuff__commit')" }, "Valider" ), actions );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "button popup-up-cancel", onclick: "CONTROLLER.Character.doActionAfter('event__form__reset')" }, "Quitter" ), actions );

        let body     = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-add-popup-body" } ), container );
        let type_row = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-add-popup-row stuffs-add-popup-type" } ), body );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-add-popup-label" }, "Type" ), type_row );
        let type_component = new COMPONENT.SingleSelectFromData();
        type_component.setToggleEventName( "event__stuff__toggle_type_selector" );
        type_component.setClickEventName( "event__stuff__pick_type" );
        type_component.setOptions( STUFF.KINDS.map( function ( kind_data ) { return { "name": kind_data.key, "label": kind_data.label }; } ) );
        type_component.setSelectedName( this.pending_kind );
        type_component.computeHtml();
        SERVICE.DOM.addElementTo( type_component.getDomElement(), type_row );
        this.selector_components[ "type" ] = type_component;

        let model_row = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-add-popup-row stuffs-add-popup-model" } ), body );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-add-popup-label" }, "Modèle" ), model_row );
        let model_component = new COMPONENT.SingleSelectFromData();
        model_component.setToggleEventName( "event__stuff__toggle_selector" );
        model_component.setClickEventName( "event__stuff__pick" );
        model_component.setFilterEnterEventName( "event__stuff__filter_enter" );
        model_component.setOptions( STUFFS.getKindOptions( this.pending_kind ) );
        model_component.setSelectedName( this.pending_model );
        model_component.computeHtml();
        SERVICE.DOM.addElementTo( model_component.getDomElement(), model_row );
        this.selector_components[ "model" ] = model_component;

        let comment_row = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-add-popup-row stuffs-add-popup-comment" } ), body );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-add-popup-label" }, "Commentaire" ), comment_row );
        this.comment_input = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
            "class"    : "stuffs-add-popup-comment-input",
            "placeholder": "Précision libre sur cet objet"
        } ), comment_row );
        SERVICE.DOM.addElementTo( this.getDomElement(), document.querySelector( "body" ) );
    },
    //********************************************  DATA   **************************************************//
    // The type drives the model options : picking a type resets the
    // pending model (a model of the previous type cannot land in the new
    // one)
    _pickType: function ( type_key ) {
        if ( !STUFF.getKindData( type_key ) ) {
            return;
        }
        this.pending_kind  = type_key;
        this.pending_model = null;
        this.selector_components[ "type" ].setSelectedName( type_key );
        let model_component = this.selector_components[ "model" ];
        model_component.setOptions( STUFFS.getKindOptions( type_key ) );
        model_component.setSelectedName( "" );
        this.selector_components[ "type" ].hidePopup();
    },

    _pickModel: function ( value ) {
        this.pending_model = value;
        let model_component = this.selector_components[ "model" ];
        if ( model_component ) {
            model_component.setSelectedName( value );
            model_component.hidePopup();
        }
    },

    _commit: function () {
        if ( !this.pending_kind || !this.pending_model ) {
            return;
        }
        CONTROLLER.Character.current_character.doActionAfter( "event__stuff__add", {
            "param__stuff__kind"    : this.pending_kind,
            "param__stuff__value"   : this.pending_model,
            "param__stuff__comment" : this.comment_input ? this.comment_input.value : null
        } );
        CONTROLLER.Character.doActionAfter( "event__form__reset" );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.StuffAddPopup, OBJECT.InterfaceHtml );
