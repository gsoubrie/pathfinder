"use strict";

// ─────────────────────────────────────────────────────────────────────────────
// CHARACTER.StuffEditPopup
// Popup d'ÉDITION d'une entrée d'équipement (la ROUE CRANTÉE de la ligne
// l'ouvre — retour utilisateur : TOUT est éditable ici, la ligne ne
// garde que ses colonnes de lecture). Elle vit sur le slot
// CONTROLLER.Character.edition_popup comme la popup d'ajout (mêmes
// classes, stylage partagé .stuffs-form-popup) : le nom en tête
// (l'objet ne se RENOMME pas — c'est son identité, le dataset scrape
// les siens), l'EMPLACEMENT par sélecteur (le déplacement reste un
// plat : la popup re-dispatche par le contrôleur vers les FENÊTRES,
// la fenêtre Équipement route au domaine et rafraîchit — l'entrée
// change de section), le LIEU quand l'emplacement est Entreposé
// (saisie au commit sur l'input, jamais inline : les textes portent
// des apostrophes), la QUANTITÉ (toute entrée compte des unités —
// PF2 : l'encombrement suit), les CARACTÉRISTIQUES DU TYPE (une
// SURCHARGE par entrée : la valeur saisie prévaut sur le scrapé, un
// input vidé RETOMBE sur la valeur scrapée ; un objet hors dataset
// gagne ainsi SES propres stats), le COMMENTAIRE libre. Valider
// applique et referme, Retirer supprime l'entrée (l'événement
// existant event__stuff__remove part au personnage, la fenêtre se
// rafraîchit) puis referme, Quitter referme sans rien changer. Le
// commit pose les événements DOMAINE D'ABORD (quantité, puis
// caractéristiques et emplacement qui rafraîchissent), le lieu ne
// s'édite QUE sur entreposage (l'entrée qui voyage ne perd pas son
// lieu, il se révèle au retour sur la section Entreposé).
// ─────────────────────────────────────────────────────────────────────────────
/**
 * @class CHARACTER.StuffEditPopup
 * @extends OBJECT.InterfaceHtml
 */
CHARACTER.StuffEditPopup = function ( kind, value ) {
    this.init( kind, value );
};
CHARACTER.StuffEditPopup.prototype = {
    init: function ( kind, value ) {
        this.kind                    = kind;
        this.value                   = value;
        this.selector_components     = {};
        this.pending_location        = null;
        this.body_dom_element        = null;
        this.place_input             = null;
        this.comment_input           = null;
        this.quantity_input          = null;
        this.characteristic_inputs   = {};
        let entry                    = CONTROLLER.Character.current_character.getStuffs().getContentByUUID( kind + "__" + value );
        if ( entry ) {
            this.pending_location = entry.location;
        }
        this.computeHtml();
    },
    //********************************************  EVENT LISTENER  **************************************************//
    close: function () {
        SERVICE.DOM.removeElement( this.getDomElement() );
    },
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__stuff__toggle_edit_location_selector": {
                this.selector_components[ "location" ].toggleState();
                return;
            }
            case "event__stuff__pick_edit_location": {
                this._pickLocation( params[ "param__choice_value" ] );
                return;
            }
            case "event__stuff__commit_edit": {
                this._commit();
                return;
            }
            case "event__stuff__commit_remove": {
                // The removal keeps its own event : the character routes
                // it to the domain and refreshes the windows, this popup
                // only closes
                CONTROLLER.Character.current_character.doActionAfter( "event__stuff__remove", {
                    "param__stuff__kind" : this.kind,
                    "param__stuff__value": this.value
                } );
                CONTROLLER.Character.doActionAfter( "event__form__reset" );
                return;
            }
        }
    },
    //********************************************  HTML   **************************************************//
    computeHtml: function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "popup" } ) );
        let container = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "edition-property-popup stuffs-form-popup stuffs-edit-popup" } ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "title" }, "Modifier un équipement" ), container );

        let body     = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-form-popup-body" } ), container );
        this.body_dom_element = body;
        let entry    = CONTROLLER.Character.current_character.getStuffs().getContentByUUID( this.kind + "__" + this.value );

        // The name stays read-only : it is the identity of the entry, the
        // dataset scrapes its own
        let name_row = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-form-popup-row" } ), body );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-form-popup-label" }, "Objet" ), name_row );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-edit-popup-name" }, this.value ), name_row );

        let location_row = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-form-popup-row stuffs-form-popup-location" } ), body );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-form-popup-label" }, "Emplacement" ), location_row );
        let location_component = new COMPONENT.SingleSelectFromData();
        location_component.setToggleEventName( "event__stuff__toggle_edit_location_selector" );
        location_component.setClickEventName( "event__stuff__pick_edit_location" );
        location_component.setOptions( STUFF.LOCATIONS.map( function ( location_data ) { return { "name": location_data.key, "label": location_data.label }; } ) );
        location_component.setSelectedName( this.pending_location );
        location_component.computeHtml();
        SERVICE.DOM.addElementTo( location_component.getDomElement(), location_row );
        this.selector_components[ "location" ] = location_component;

        // The quantity of every entry : the inline one of the line and
        // this one read and write the same entry state
        let quantity_row = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-form-popup-row" } ), body );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-form-popup-label" }, "Quantité" ), quantity_row );
        this.quantity_input = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
            "class"     : "stuffs-form-popup-input stuffs-edit-popup-quantity-input",
            "type"      : "number",
            "min"       : "1",
            "title"     : "Nombre d'unités de cet objet, l'encombrement suit"
        }, "" ), quantity_row );
        if ( this.quantity_input ) {
            this.quantity_input.value = entry ? String( entry.quantity ) : "1";
        }

        // The place only describes a stored stuff : the row shows on the
        // stored location only, the data carries the state
        let place_row = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-form-popup-row stuffs-form-popup-place" } ), body );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-form-popup-label" }, "Lieu" ), place_row );
        this.place_input = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
            "class"      : "stuffs-form-popup-place-input",
            "placeholder": "Où l'objet est entreposé"
        }, "" ), place_row );

        // The characteristics of the kind, one row per inline field : the
        // input starts from the EFFECTIVE value (override or scraped) —
        // emptied, the override drops and the scraped value comes back
        let kind_data = STUFF.getKindData( this.kind );
        if ( kind_data && kind_data.inline_fields ) {
            for ( let f = 0, _size_f = kind_data.inline_fields.length; f < _size_f; f++ ) {
                let char_field  = kind_data.inline_fields[ f ];
                let char_row    = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-form-popup-row stuffs-edit-popup-char-row", "data-field": char_field } ), body );
                SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-form-popup-label" }, char_field ), char_row );
                let char_input  = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
                    "class"      : "stuffs-form-popup-input",
                    "placeholder": "Laissé vide : la valeur du dataset"
                }, "" ), char_row );
                if ( char_input && entry ) {
                    char_input.value = entry.getCharacteristicValue( char_field ) || "";
                }
                this.characteristic_inputs[ char_field ] = char_input;
            }
        }

        let comment_row = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-form-popup-row stuffs-form-popup-comment" } ), body );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-form-popup-label" }, "Commentaire" ), comment_row );
        this.comment_input = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
            "class"      : "stuffs-form-popup-comment-input",
            "placeholder": "Précision libre sur cet objet"
        }, "" ), comment_row );

        // The edit popup carries its entry states : the place and the
        // comment live on the domain, the inputs start from them
        if ( entry ) {
            if ( this.place_input ) {
                this.place_input.value = entry.place || "";
            }
            if ( this.comment_input ) {
                this.comment_input.value = entry.comment || "";
            }
        }
        SERVICE.DOM.setDataSet( this.body_dom_element, "stored", this.pending_location === "stored" );
        // Les actions vivent EN BAS de la popup, sous le corps
        let actions = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "popup-up-actions" } ), container );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "button popup-up-valid", onclick: "CONTROLLER.Character.doActionAfter('event__stuff__commit_edit')" }, "Valider" ), actions );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "button stuffs-edit-popup-remove-button", onclick: "CONTROLLER.Character.doActionAfter('event__stuff__commit_remove')" }, "Retirer" ), actions );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "button popup-up-cancel", onclick: "CONTROLLER.Character.doActionAfter('event__form__reset')" }, "Quitter" ), actions );
        SERVICE.DOM.addElementTo( this.getDomElement(), document.querySelector( "body" ) );
    },
    //********************************************  DATA   **************************************************//
    _pickLocation: function ( location_key ) {
        if ( !STUFF.getLocationData( location_key ) ) {
            // The empty option leaves the current location : the edit
            // starts from an existing state, it does not fall back
            return;
        }
        this.pending_location = location_key;
        this.selector_components[ "location" ].setSelectedName( location_key );
        this.selector_components[ "location" ].hidePopup();
        SERVICE.DOM.setDataSet( this.body_dom_element, "stored", location_key === "stored" );
    },

    _commit: function () {
        if ( !STUFF.getLocationData( this.pending_location ) ) {
            return;
        }
        let stuffs_params = {
            "param__stuff__kind" : this.kind,
            "param__stuff__value": this.value
        };
        // The quantity lands FIRST (domain only, no rebuild) : the
        // refreshes that follow rebuild from the fresh state
        if ( this.quantity_input ) {
            CONTROLLER.Character.doActionAfter( "event__stuff__edit_quantity", Object.assign( {}, stuffs_params, { "param__stuff__quantity": this.quantity_input.value } ) );
        }
        // Each change keeps its own event — the characteristics and the
        // location part go through the windows broadcast (the equipment
        // window routes to the domain and refreshes : the entry changes
        // of section, its line shows the overrides), the titles follow
        // in place
        let characteristics_to_commit = {};
        let _char_keys    = Object.keys( this.characteristic_inputs );
        for ( let i = 0, _size_i = _char_keys.length; i < _size_i; i++ ) {
            if ( this.characteristic_inputs[ _char_keys[ i ] ] && this.characteristic_inputs[ _char_keys[ i ] ].value ) {
                characteristics_to_commit[ _char_keys[ i ] ] = this.characteristic_inputs[ _char_keys[ i ] ].value;
            }
        }
        CONTROLLER.Character.doActionAfter( "event__stuff__edit_characteristics", Object.assign( {}, stuffs_params, { "param__stuff__characteristics": characteristics_to_commit } ) );
        CONTROLLER.Character.doActionAfter( "event__stuff__set_location", Object.assign( {}, stuffs_params, { "param__stuff__location": this.pending_location } ) );
        if ( this.pending_location === "stored" ) {
            CONTROLLER.Character.doActionAfter( "event__stuff__edit_place", Object.assign( {}, stuffs_params, { "param__stuff__place": this.place_input ? this.place_input.value : null } ) );
        }
        CONTROLLER.Character.doActionAfter( "event__stuff__edit_comment", Object.assign( {}, stuffs_params, { "param__stuff__comment": this.comment_input ? this.comment_input.value : null } ) );
        CONTROLLER.Character.doActionAfter( "event__form__reset" );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.StuffEditPopup, OBJECT.InterfaceHtml );
