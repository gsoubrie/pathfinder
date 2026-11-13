"use strict";

// ─────────────────────────────────────────────────────────────────────────────
// CHARACTER.SpellAddPopup
// Popup d'ajout au répertoire de sorts (le « + » de la barre de la fenêtre
// l'ouvre) : la LISTE du dataset scrapé en colonnes — rang, nom, coût
// d'action, description dépouillée (coupée aux DEUX lignes par le CSS), « ? »
// par ligne ouvrant la popup spell (la description complète AVEC ses liens
// métier cliquables) —, UN FILTRE PAR COLONNE sous l'entête (la frappe
// masque les lignes non correspondantes, cellule par cellule ; l'Entrée du
// filtre NOM pose le nom CANONIQUE d'une ligne qui matche, SINON le texte
// brut DEVIENT le sort — demande utilisateur : le répertoire vit aussi hors
// dataset, sans « ? », sans coût, sans rang). La ligne cliquée se pose en
// attente, peinte ; champ COMMENTAIRE libre. Valider crée puis referme,
// Quitter referme sans rien créer : tout se lit au commit sur son input,
// jamais embarqué inline — les noms de sorts portent des apostrophes. La
// popup vit sur le slot CONTROLLER.Character.edition_popup comme les
// popups d'édition de la feuille (le retrait au reset la ferme).
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
        this.rows_dom_element    = null;
        this.pending_value       = null;
        this.pending_dom_element = null;
        this.comment_input       = null;
        this.computeHtml();
    },
    //********************************************  EVENT LISTENER  **************************************************//
    close: function () {
        SERVICE.DOM.removeElement( this.getDomElement() );
    },
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__spell__pick": {
                this._pickSpell( params[ "param__choice_value" ] );
                return;
            }
            case "event__spell__filter_enter": {
                // Enter sur le filtre NOM : le nom CANONIQUE d'une ligne
                // qui matche se pose (insensible a la casse), SINON le
                // texte brut devient le sort — le répertoire vit aussi
                // hors dataset
                let filter_value = String( params[ "param__filter_value" ] || "" );
                let rows         = this.rows_dom_element.querySelectorAll( ".spells-add-spell-row" );
                for ( let i = 0, _size_i = rows.length; i < _size_i; i++ ) {
                    if ( rows[ i ].getAttribute( "data-value" ).toLowerCase() === filter_value.toLowerCase() ) {
                        this._pickSpell( rows[ i ].getAttribute( "data-value" ) );
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
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "title" }, "Ajouter un sort au répertoire" ), container );

        let body = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-form-popup-body" } ), container );
        // L'entete puis UN FILTRE PAR COLONNE : chaque filtre masque les
        // lignes en place (presentation pure, la valeur se lit dans son
        // input), l'Entree ne vit que sur le filtre NOM (le geste
        // canonical/homebrew appartient au nom)
        let list_dom = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-add-spell-list" } ), body );
        this._buildListHeader( list_dom );
        this._buildListFilters( list_dom );
        this.rows_dom_element = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-add-spell-rows" } ), list_dom );
        let list_data = SPELLS.getSpellListData();
        for ( let i = 0, _size_i = list_data.length; i < _size_i; i++ ) {
            this._buildSpellRow( list_data[ i ] );
        }
        // La valeur en attente se lit sous la liste : une homebrew hors
        // dataset ne vit dans aucune ligne, c'est sa seule presence
        this.pending_dom_element = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-add-popup-pending" } ), body );

        let comment_row = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-form-popup-row spells-form-popup-comment" } ), body );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-form-popup-label" }, "Commentaire" ), comment_row );
        this.comment_input = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
            "class"      : "spells-form-popup-comment-input",
            "placeholder": "Précision libre sur ce sort"
        }, "" ), comment_row );
        // Les actions vivent EN BAS de la popup, sous le corps
        let actions   = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "popup-up-actions" } ), container );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "button popup-up-valid", onclick: "CONTROLLER.Character.doActionAfter('event__spell__commit')" }, "Valider" ), actions );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "button popup-up-cancel", onclick: "CONTROLLER.Character.doActionAfter('event__form__reset')" }, "Quitter" ), actions );
        SERVICE.DOM.addElementTo( this.getDomElement(), document.querySelector( "body" ) );
    },
    _buildListHeader: function ( parent ) {
        let header = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-add-spell-header" } ), parent );
        let titles = [
            { "column": "rank",        "label": "Rang" },
            { "column": "type",        "label": "Type" },
            { "column": "name",        "label": "Nom" },
            { "column": "cost",        "label": "Coût" },
            { "column": "description", "label": "Description" }
        ];
        for ( let t = 0, _size_t = titles.length; t < _size_t; t++ ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-add-spell-header-title spells-add-col-" + titles[ t ].column }, titles[ t ].label ), header );
        }
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-add-spell-header-title spells-add-col-actions" }, "" ), header );
    },
    // Un filtre par colonne, l'Entree cannonique sur le seul NOM : les
    // autres colonnes filtrent en place, aucun voyage par le bus
    _buildListFilters: function ( parent ) {
        let filters = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-add-spell-filters" } ), parent );
        let columns = [ "rank", "type", "name", "cost", "description" ];
        for ( let c = 0, _size_c = columns.length; c < _size_c; c++ ) {
            let attributes = {
                "class"      : "spells-add-spell-filter",
                "data-col"   : columns[ c ],
                "placeholder": "--",
                "onkeyup"    : "CHARACTER.SpellAddPopup.filterRows(event)"
            };
            if ( columns[ c ] === "name" ) {
                attributes[ "onkeydown" ] = "if(event.key==='Enter'){MANAGER.EventManagerV2.doActionAfter(event,'event__spell__filter_enter',{'param__filter_value':this.value})}";
            }
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", attributes, "" ), filters );
        }
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-add-spell-filter-cell spells-add-col-actions" }, "" ), filters );
    },
    // La description se lit en texte depouille de son HTML (coupée aux deux
    // lignes par le CSS) : le texte passe par textContent, jamais par
    // innerHTML — la colonne sert a parcourir, le « ? » rend la description
    // complete avec ses liens metier cliquables
    _buildSpellRow: function ( spell_data ) {
        let row = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
            class       : "spells-add-spell-row",
            "data-value": spell_data.name,
            onclick     : "MANAGER.EventManagerV2.doActionAfter(event,'event__spell__pick',{'param__choice_value':this.getAttribute('data-value')})"
        } ), this.rows_dom_element );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-add-col-rank" }, "" + spell_data.rank ), row );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-add-col-type" }, spell_data.type_label ), row );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-add-col-name" }, spell_data.name ), row );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-add-col-cost" }, spell_data.cost_label ), row );
        let description_dom = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-add-col-description" } ), row );
        description_dom.textContent = spell_data.description.replace( /<[^>]*>/g, " " ).replace( /\s+/g, " " ).trim();
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
            class  : "spells-add-spell-info spells-add-col-actions gs-link-information",
            title  : "Information",
            onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__spell',{'param__spell__value':this.closest('.spells-add-spell-row').getAttribute('data-value')})"
        }, "?" ), row );
    },
    //********************************************  DATA   **************************************************//
    _pickSpell: function ( value ) {
        this.pending_value               = value;
        this.pending_dom_element.textContent = value || "";
        let rows = this.rows_dom_element.querySelectorAll( ".spells-add-spell-row" );
        for ( let i = 0, _size_i = rows.length; i < _size_i; i++ ) {
            if ( rows[ i ].getAttribute( "data-value" ) === value ) {
                rows[ i ].classList.add( "selected" );
            }
            else {
                rows[ i ].classList.remove( "selected" );
            }
        }
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

// Presentation-only filter of the list : EVERY filter of every column
// applies at once (a row escapes only when it matches them all), the
// compared value is the text of the cell itself — nothing travels, the
// state lives in the DOM
CHARACTER.SpellAddPopup.filterRows = function ( event ) {
    let list_dom = event.target.closest( ".spells-add-spell-list" );
    let filters  = list_dom.querySelectorAll( ".spells-add-spell-filter" );
    let rows     = list_dom.querySelectorAll( ".spells-add-spell-row" );
    for ( let r = 0, _size_r = rows.length; r < _size_r; r++ ) {
        let row_display = "";
        let row_dom     = rows[ r ];
        for ( let f = 0, _size_f = filters.length; f < _size_f; f++ ) {
            let filter_value = filters[ f ].value.toLowerCase();
            if ( !filter_value ) {
                continue;
            }
            let cell_dom = row_dom.querySelector( ".spells-add-col-" + filters[ f ].getAttribute( "data-col" ) );
            if ( cell_dom && cell_dom.textContent.toLowerCase().indexOf( filter_value ) === -1 ) {
                row_display = "none";
                break;
            }
        }
        row_dom.style.display = row_display;
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.SpellAddPopup, OBJECT.InterfaceHtml );
