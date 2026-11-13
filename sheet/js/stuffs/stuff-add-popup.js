"use strict";

// ─────────────────────────────────────────────────────────────────────────────
// CHARACTER.StuffAddPopup
// Popup d'ajout d'équipement (le « + » de la barre de la fenêtre
// l'ouvre) : TROIS sélecteurs vierges (« -- » partout, retour
// utilisateur : le type ne se présélectionne plus) — TYPE, MODÈLE
// (ses options suivent le type, aucune option sans type), EMPLACEMENT
// (un emplacement vide retombe au Sac à dos au Valider, PF2 : ce qui
// n'est ni équipé ni entreposé se porte) — champ LIEU quand
// l'emplacement est Entreposé (où l'objet est entreposé, texte libre
// lu au commit sur son input), champ COMMENTAIRE libre. L'Entrée sur
// le filtre du modèle pose le nom CANONIQUE d'une option qui matche
// (insensible à la casse), SINON le texte brut du filtre devient le
// modèle : une entrée peut vivre HORS du dataset scrapé (demande
// utilisateur, l'entrée n'a alors ni info de type, ni encombrement,
// ni popup "?"), un nom libre exige un type posé, tout se lit au
// commit sur son input, jamais embarqué inline : les textes portent
// des apostrophes. Valider crée l'entrée puis referme (l'événement
// d'ajout part au personnage par le plat), Quitter referme sans rien
// créer. La popup vit sur le slot CONTROLLER.Character.edition_popup
// comme les popups d'édition de la feuille (le retrait au reset la
// ferme).
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
        this.pending_kind        = null;
        this.pending_model       = null;
        this.pending_location    = null;
        this.comment_input       = null;
        this.place_input         = null;
        this.body_dom_element    = null;
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
            case "event__stuff__toggle_location_selector": {
                this.selector_components[ "location" ].toggleState();
                return;
            }
            case "event__stuff__pick_location": {
                this._pickLocation( params[ "param__choice_value" ] );
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
            // Enter sur le filtre du modèle : le nom CANONIQUE d'une
            // option qui matche se pose (insensible à la casse),
            // SINON le texte brut devient le modèle — une entrée peut
            // vivre hors du dataset scrapé (un nom libre exige un
            // type posé : sans type, rien ne se pose)
            case "event__stuff__filter_enter": {
                let model_component = this.selector_components[ "model" ];
                let filter_value    = String( params[ "param__filter_value" ] || "" );
                let options         = model_component.getDomElement().querySelectorAll( ".single-select-option" );
                for ( let i = 0, _size_i = options.length; i < _size_i; i++ ) {
                    if ( options[ i ].getAttribute( "data-value" ).toLowerCase() === filter_value.toLowerCase() ) {
                        this._pickModel( options[ i ].getAttribute( "data-value" ) );
                        return;
                    }
                }
                if ( this.pending_kind && filter_value ) {
                    this._pickModel( filter_value );
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
        let container = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "edition-property-popup stuffs-form-popup stuffs-add-popup" } ), this.getDomElement() );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "title" }, "Ajouter un équipement" ), container );

        let body     = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-form-popup-body" } ), container );
        this.body_dom_element = body;
        let type_row = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-form-popup-row stuffs-add-popup-type" } ), body );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-add-popup-label" }, "Type" ), type_row );
        let type_component = new COMPONENT.SingleSelectFromData();
        type_component.setToggleEventName( "event__stuff__toggle_type_selector" );
        type_component.setClickEventName( "event__stuff__pick_type" );
        type_component.setOptions( STUFF.KINDS.map( function ( kind_data ) { return { "name": kind_data.key, "label": kind_data.label }; } ) );
        type_component.setSelectedName( this.pending_kind );
        type_component.computeHtml();
        SERVICE.DOM.addElementTo( type_component.getDomElement(), type_row );
        this.selector_components[ "type" ] = type_component;

        let model_row = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-form-popup-row stuffs-add-popup-model" } ), body );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-add-popup-label" }, "Modèle" ), model_row );
        let model_component = new COMPONENT.SingleSelectFromData();
        model_component.setToggleEventName( "event__stuff__toggle_selector" );
        model_component.setClickEventName( "event__stuff__pick" );
        model_component.setFilterEnterEventName( "event__stuff__filter_enter" );
        // No model options without a type : the type drives them
        model_component.setOptions( this.pending_kind ? STUFFS.getKindOptions( this.pending_kind ) : [] );
        model_component.setSelectedName( this.pending_model );
        model_component.computeHtml();
        SERVICE.DOM.addElementTo( model_component.getDomElement(), model_row );
        this.selector_components[ "model" ] = model_component;

        let location_row = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-form-popup-row stuffs-form-popup-location" } ), body );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-add-popup-label" }, "Emplacement" ), location_row );
        let location_component = new COMPONENT.SingleSelectFromData();
        location_component.setToggleEventName( "event__stuff__toggle_location_selector" );
        location_component.setClickEventName( "event__stuff__pick_location" );
        location_component.setOptions( STUFF.LOCATIONS.map( function ( location_data ) { return { "name": location_data.key, "label": location_data.label }; } ) );
        location_component.setSelectedName( this.pending_location );
        location_component.computeHtml();
        SERVICE.DOM.addElementTo( location_component.getDomElement(), location_row );
        this.selector_components[ "location" ] = location_component;

        // The place only describes a stored stuff : the row shows on the
        // stored location only, the data carries the state
        let place_row = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-form-popup-row stuffs-form-popup-place" } ), body );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-add-popup-label" }, "Lieu" ), place_row );
        this.place_input = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
            "class"      : "stuffs-form-popup-place-input",
            "placeholder": "Où l'objet est entreposé"
        }, "" ), place_row );
        SERVICE.DOM.setDataSet( this.body_dom_element, "stored", this.pending_location === "stored" );

        let comment_row = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-form-popup-row stuffs-form-popup-comment" } ), body );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-add-popup-label" }, "Commentaire" ), comment_row );
        this.comment_input = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
            "class"      : "stuffs-form-popup-comment-input",
            "placeholder": "Précision libre sur cet objet"
        }, "" ), comment_row );
        // Les actions vivent EN BAS de la popup, sous le corps
        let actions   = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "popup-up-actions" } ), container );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "button popup-up-valid", onclick: "CONTROLLER.Character.doActionAfter('event__stuff__commit')" }, "Valider" ), actions );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "button popup-up-cancel", onclick: "CONTROLLER.Character.doActionAfter('event__form__reset')" }, "Quitter" ), actions );
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

    _pickLocation: function ( location_key ) {
        if ( !STUFF.getLocationData( location_key ) ) {
            return;
        }
        this.pending_location = location_key;
        this.selector_components[ "location" ].setSelectedName( location_key );
        this.selector_components[ "location" ].hidePopup();
        SERVICE.DOM.setDataSet( this.body_dom_element, "stored", location_key === "stored" );
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
        // An empty location lands in the backpack (PF2 : what is not
        // equipped nor stored is carried) — the popup shows "--" only
        // because everything starts untouched
        let committed_location = this.pending_location || STUFF.DEFAULT_LOCATION;
        CONTROLLER.Character.current_character.doActionAfter( "event__stuff__add", {
            "param__stuff__kind"    : this.pending_kind,
            "param__stuff__value"   : this.pending_model,
            "param__stuff__location": committed_location,
            "param__stuff__comment" : this.comment_input ? this.comment_input.value : null,
            "param__stuff__place"   : committed_location === "stored" && this.place_input ? this.place_input.value : null
        } );
        CONTROLLER.Character.doActionAfter( "event__form__reset" );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.StuffAddPopup, OBJECT.InterfaceHtml );
