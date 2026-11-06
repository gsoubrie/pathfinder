"use strict";

// ─────────────────────────────────────────────────────────────────────────────
// CHARACTER.StuffsWindow
// Onglet "Équipement" : l'inventaire du personnage. Le « + » en TÊTE de
// la barre ouvre la POPUP D'AJOUT (CHARACTER.StuffAddPopup : type,
// modèle, emplacement, lieu si entreposé, commentaire), les CATÉGORIES
// (Équipé / Sac à dos / Entreposé) filtrent les sections affichées —
// l'état du filtre vit sur la fenêtre, rien ne change dans le
// domaine — et l'encombrement total de la barre ne compte que le
// PORTÉ (équipé + sac à dos, PF2 : l'entreposé ne pèse pas et n'affiche
// AUCUN total — demande utilisateur). Une section par
// emplacement (STUFF.LOCATIONS, l'ordre du tableau est l'ordre
// d'affichage), chacune titrée avec sa LIGNE D'ENTÊTE (colonnes
// partagées par grille, le nom en TAILLE FIXE) : chaque ligne porte
// ses colonnes harmonisées — nom + "?" de popup, CARACTÉRISTIQUES
// LABORÉES du type (Dégâts/Mains pour une arme, CA bonus/mod dex pour
// une armure — KINDS inline_fields, clés scrapées), la quantité EN
// LECTURE (l'input d'édition vit dans la popup de la roue crantée,
// jamais dans la liste), l'encombrement — et la ROUE CRANTÉE d'édition
// (CHARACTER.StuffEditPopup : emplacement, lieu,
// commentaire, retrait — les puces et la croix partent de la liste,
// retour utilisateur). Le lieu et le commentaire vivent dans le titre
// en infobulle. Les valeurs ne s'embarquent JAMAIS en dur dans les
// handlers inline : les noms d'objets portent des apostrophes, elles
// se lisent du DOM au clic.
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
            // The location move and the characteristics overrides
            // change the rendering : the whole content rebuilds (a
            // discrete gesture — the quantity typing stays in place, it
            // would cost too much per keystroke)
            case "event__stuff__set_location":
            case "event__stuff__edit_characteristics": {
                CONTROLLER.Character.current_character.doActionAfter( event_name, params );
                this._refreshContent();
                return;
            }
            // The place free text, the comment and the quantity live on
            // their entry state : the domain owns the truth, the display
            // follows in place (nothing recalculates, the rebuild would
            // cost too much)
            case "event__stuff__edit_place":
            case "event__stuff__edit_comment": {
                CONTROLLER.Character.current_character.doActionAfter( event_name, params );
                let entry_dom           = this._getEntryDomElement( params[ "param__stuff__kind" ], params[ "param__stuff__value" ] );
                let stuff_edited        = CONTROLLER.Character.current_character.getStuffs().getContentByUUID( params[ "param__stuff__kind" ] + "__" + params[ "param__stuff__value" ] );
                if ( entry_dom && stuff_edited ) {
                    if ( event_name === "event__stuff__edit_place" ) {
                        entry_dom.setAttribute( "title", this._computeEntryTitle( stuff_edited ) );
                    }
                    else {
                        // The comment reads in its own column : the cell
                        // follows in place (the refreshes of the commit ran
                        // BEFORE the comment landed in the domain)
                        let comment_cell = entry_dom.querySelector( ".stuffs-entry-comment" );
                        if ( comment_cell ) {
                            comment_cell.textContent = stuff_edited.comment || "";
                            comment_cell.setAttribute( "title", stuff_edited.comment || "" );
                        }
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
            // The categories only filter the rendering, the window keeps
            // its state alone : nothing travels to the character
            case "event__stuff__filter_location": {
                this.current_filter = params[ "param__stuff__location" ];
                this._refreshContent();
                return;
            }
        }
        WINDOW_V2.Element.prototype.doActionAfter.call( this, event_name, params );
    },

    //********************************************  HTML   **************************************************//
    computeHtmlWithData: function ( character_object ) {
        this.current_filter             = this.current_filter || STUFF.FILTER_ALL;
        this.content_dom_element_target = SERVICE.DOM.createElement( "div", { class: "stuffs-window" } );
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
        for ( let l = 0, _size_l = STUFF.LOCATIONS.length; l < _size_l; l++ ) {
            let location_data = STUFF.LOCATIONS[ l ];
            if ( this.current_filter !== STUFF.FILTER_ALL && this.current_filter !== location_data.key ) {
                continue;
            }
            let section = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", { class: "stuffs-section", "data-location": location_data.key } ),
                this.content_dom_element_target
            );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-section-title" }, location_data.label ), section );
            // The columns carry their titles (the entry fields alone say
            // nothing) : the header shares the grid template of the rows
            this._buildEntriesHeader( section );
            let entries = stuffs.getStuffsByLocation( location_data.key );
            for ( let e = 0, _size_e = entries.length; e < _size_e; e++ ) {
                this._buildEntry( section, entries[ e ] );
            }
        }
    },

    // The bar of the window : the « + » FIRST opens the add popup, the
    // location categories filter the sections, the carried bulk sits
    // at the right
    _buildAddBar: function ( parent, stuffs ) {
        let add_bar = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-add-bar" } ), parent );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
            class  : "stuffs-add-button",
            title  : "Ajouter un équipement",
            onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__stuff__open_add_popup',{})"
        }, "+" ), add_bar );
        let location_filters = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-location-filters" } ), add_bar );
        this._buildLocationFilter( location_filters, STUFF.FILTER_ALL, "Tous", stuffs.getSize() );
        for ( let l = 0, _size_l = STUFF.LOCATIONS.length; l < _size_l; l++ ) {
            let location_data = STUFF.LOCATIONS[ l ];
            this._buildLocationFilter( location_filters, location_data.key, location_data.label, stuffs.getStuffsByLocation( location_data.key ).length );
        }
        this.bulk_dom_element = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "stuffs-bulk-total" }, this._computeBulkText( STUFF.CARRIED_LOCATIONS ) ),
            add_bar
        );
    },

    _buildLocationFilter: function ( parent, location_key, location_label, stuffs_count ) {
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
            class          : "stuffs-location-filter",
            "data-location": location_key,
            "data-selected": this.current_filter === location_key ? "true" : "false",
            onclick        : "MANAGER.EventManagerV2.doActionAfter(event,'event__stuff__filter_location',{'param__stuff__location':this.getAttribute('data-location')})"
        }, location_label + " (" + stuffs_count + ")" ), parent );
    },

    // The column titles of the entries : a shared grid template with
    // the rows, the cells align by fractional widths (never auto —
    // each cell would size on its own content, jets zone rule). The
    // name column stays FIXED (every line aligns the same, whatever
    // the type of the object), the characteristics follow the kind
    // and ride LABELED so the mixed kinds of a location stay readable
    _buildEntriesHeader: function ( section ) {
        let header = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-entries-header" } ), section );
        let titles  = [
            { "column": "object",    "label": "Objet" },
            { "column": "chars",     "label": "Caractéristiques" },
            { "column": "comment",   "label": "Commentaire" },
            { "column": "quantity",  "label": "Qté" },
            { "column": "bulk",      "label": "Encomb." },
            { "column": "actions",   "label": "" }
        ];
        for ( let t = 0, _size_t = titles.length; t < _size_t; t++ ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-entries-header-title" + ( titles[ t ].column ? " stuffs-col-" + titles[ t ].column : "" ) }, titles[ t ].label ), header );
        }
    },

    _buildEntry: function ( section, stuff ) {
        let entry = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", {
                class        : "stuffs-entry",
                "data-kind"  : stuff.kind,
                "data-value" : stuff.value,
                "title"      : this._computeEntryTitle( stuff )
            } ),
            section
        );
        // The kind glyph opens the line (retour utilisateur : le type
        // se lit d'un coup d'oeil, l'infobulle porte son nom)
        let kind_data_for_icon = STUFF.getKindData( stuff.kind );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
            class  : "stuffs-entry-kind stuffs-col-kind",
            "title": kind_data_for_icon ? kind_data_for_icon.label : ""
        }, STUFF.ICONS[ stuff.kind ] || STUFF.ICONS.other ), entry );
        // The object cell carries its name and its "?" — the popup of
        // information only exists for a scraped entry (a free-named
        // model owns no data)
        let object_cell = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-entry-object stuffs-col-object" } ), entry );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-entry-value" }, stuff.value ), object_cell );
        if ( STUFFS.getEntryData( stuff.value ) ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
                class  : "stuffs-entry-info gs-link-information",
                title  : "Information",
                onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__item',{'param__stuff__value':this.closest('.stuffs-entry').getAttribute('data-value')})"
            }, "?" ), object_cell );
        }
        // The characteristics of the entry kind, LABELED (KINDS inline
        // fields, scraped keys) : a weapon carries Dégâts/Mains, an
        // armor its CA bonus and dex cap — only the fields the entry
        // owns, a free-named model carries none (no scraped data
        // behind, no empty cell)
        let kind_data = STUFF.getKindData( stuff.kind );
        if ( kind_data && kind_data.inline_fields ) {
            let chars_values = [];
            for ( let f = 0, _size_f = kind_data.inline_fields.length; f < _size_f; f++ ) {
                let char_value = stuff.getCharacteristicValue( kind_data.inline_fields[ f ] );
                if ( char_value ) {
                    chars_values.push( { "label": kind_data.inline_fields[ f ], "value": char_value } );
                }
            }
            if ( chars_values.length ) {
                let chars_cell = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-entry-chars stuffs-col-chars" } ), entry );
                for ( let f = 0, _size_f = chars_values.length; f < _size_f; f++ ) {
                    let char_part = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-entry-char" } ), chars_cell );
                    SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-entry-char-label" }, chars_values[ f ].label ), char_part );
                    SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-entry-char-value" }, chars_values[ f ].value ), char_part );
                }
            }
        }
        // The cells land column by column (retour utilisateur : la
        // colonne Commentaire vit AVEC les autres) — the sparse
        // auto-placement of the grid walks the DOM, a cell built out of
        // order pushes the next ones to the ROW below (règle Round 61)
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
            class  : "stuffs-entry-comment stuffs-col-comment",
            "title": stuff.comment || ""
        }, stuff.comment || "" ), entry );
        // The quantity stays READ on the line (retour utilisateur : plus
        // d'input dans la liste, l'édition vit dans la popup de la roue
        // crantée)
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-entry-quantity stuffs-col-quantity", "title": "Quantité" }, "" + stuff.quantity ), entry );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-entry-bulk stuffs-col-bulk", "title": "Encombrement" }, STUFFS.getFieldValue( stuff.value, "bulk" ) || "—" ), entry );
        // The gear opens the edit popup (emplacement, lieu, commentaire,
        // retrait — retour utilisateur : la ligne ne garde que ses
        // colonnes de lecture, les puces et la croix partent) : the entry
        // identity is read from the DOM at click time (stuff names carry
        // apostrophes)
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
            class  : "stuffs-entry-edit stuffs-col-actions",
            title  : "Modifier",
            onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__stuff__open_edit_popup',{'param__stuff__kind':this.closest('.stuffs-entry').getAttribute('data-kind'),'param__stuff__value':this.closest('.stuffs-entry').getAttribute('data-value')})"
        }, "⚙" ), entry );
    },

    //********************************************  DATA   **************************************************//
    _getEntryDomElement: function ( kind, value ) {
        // The stuff names carry apostrophes : the selector by value
        // embeds double quotes (JSON.stringify), never single ones
        return this.content_dom_element_target.querySelector( ".stuffs-entry[data-kind='" + kind + "'][data-value=" + JSON.stringify( value ) + "]" );
    },

    _computeEntryTitle: function ( stuff ) {
        // The comment reads in ITS column, only the place stays here (the
        // place owns no column, the entry title is its only display)
        if ( stuff.location === "stored" && stuff.place ) {
            return "Lieu : " + stuff.place;
        }
        return "";
    },

    _computeBulkText: function ( location_keys ) {
        let bulk_total = CONTROLLER.Character.current_character.getStuffs().getBulkTotal( location_keys );
        // One decimal at most, French style (0,1 light bulk steps)
        return "Encombrement : " + String( bulk_total ).replace( ".", "," );
    },

    _updateBulkTotal: function () {
        if ( !this.bulk_dom_element ) {
            return;
        }
        this.bulk_dom_element.textContent = this._computeBulkText( STUFF.CARRIED_LOCATIONS );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.StuffsWindow, WINDOW_V2.ElementFromData );
CHARACTER.StuffsWindow.NAME = "stuffs_sheet";
