"use strict";

// ─────────────────────────────────────────────────────────────────────────────
// CHARACTER.StuffsWindow
// Onglet "Équipement" : l'inventaire du personnage. Le « + » en TÊTE de
// la barre bascule sur la BIBLIOTHÈQUE (sujet Équipement : le « + » d'une
// carte pose l'objet au sac à dos et revient ici), les CATÉGORIES
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
    initSpecific: function ( name, parent_name, label ) {
        WINDOW_V2.ElementFromData.prototype.initSpecific.call( this, name, parent_name, label );
        // The domain bulk counter lands on the window's own bulk counter
        // (the max rides on its own counter, so a Force change refreshes
        // the display even when the carried total does not move)
        this.initCounter( "bulk" );
        this.initCounter( "bulk_max" );
    },

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
            // The body slot and the current HP are routed to the domain by
            // the character BEFORE the windows broadcast (like add/remove)
            // : this window only refreshes, a re-dispatch would apply an HP
            // delta twice. The current HP is not displayed here (the Combat
            // schema owns it), so it falls through to the default handler
            case "event__stuff__set_slot":
                this._refreshContent();
                return;
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
            // The wallet refreshes on its own events (the domain already
            // landed, the character broadcast them here)
            case "event__coins__set_amount":
            case "event__coins__add_journal":
                this._refreshContent();
                return;
            // The + of the journal add row : the window assembles the line
            // (location, signed amounts, label — read from the row, never
            // inline) and re-dispatches to the character ; the refresh
            // follows with the add_journal broadcast
            case "event__coins__commit_journal": {
                let add_row = this.content_dom_element_target.querySelector( ".stuffs-coins-add" );
                if ( !add_row ) {
                    return;
                }
                let commit_params = {
                    "param__coins__location": add_row.querySelector( ".stuffs-coins-add-location" ).value,
                    "param__coins__label"   : add_row.querySelector( ".stuffs-coins-add-label" ).value
                };
                let has_delta  = false;
                let add_inputs = add_row.querySelectorAll( ".stuffs-coins-add-amount" );
                for ( let i = 0, _size_i = add_inputs.length; i < _size_i; i++ ) {
                    let coin_key = add_inputs[ i ].getAttribute( "data-coin" );
                    let amount   = parseInt( add_inputs[ i ].value, 10 ) || 0;
                    commit_params[ "param__coins__" + coin_key ] = amount;
                    if ( amount ) {
                        has_delta = true;
                    }
                }
                if ( has_delta || commit_params[ "param__coins__label" ] ) {
                    CONTROLLER.Character.current_character.doActionAfter( "event__coins__add_journal", commit_params );
                }
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
        this._buildCoinsZone( this.content_dom_element_target );
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

    // The bar of the window : the « + » FIRST lands the sheet on the
    // LIBRARY (stuffs subject), the location categories filter the
    // sections, the carried bulk sits at the right
    //********************************************  COINS ZONE   **************************************************//
    // La partie Argent en tete de l'onglet : le total converti dans le
    // titre, un bloc de solde par emplacement (les puces de filtre actif
    // s'appliquent comme aux sections), puis le journal append-only (chaque
    // ligne applique son delta au solde de son emplacement a sa creation)
    _buildCoinsZone: function ( parent ) {
        let coins = CONTROLLER.Character.current_character.getCoins();
        let zone  = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-coins-zone" } ), parent );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-coins-title" }, "Argent — total : " + STUFF.formatCoinsTotal( coins.getTotalCoinsMap() ) ), zone );
        for ( let l = 0, _size_l = STUFF.LOCATIONS.length; l < _size_l; l++ ) {
            let location_data = STUFF.LOCATIONS[ l ];
            if ( this.current_filter !== STUFF.FILTER_ALL && this.current_filter !== location_data.key ) {
                continue;
            }
            this._buildCoinsLocationRow( zone, coins, location_data );
        }
        this._buildCoinsJournal( zone, coins );
    },

    // Une ligne de solde : label de l'emplacement + les 4 monnaies en inputs
    // editables (l'argent s'edite en permanence — la regle « pas d'input
    // dans la liste » concernait les objets) ; le change part par le plat,
    // l'identite (emplacement, monnaie) se lit du DOM, la valeur est un nombre
    _buildCoinsLocationRow: function ( parent, coins, location_data ) {
        let row     = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-coins-location", "data-location": location_data.key } ), parent );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-coins-location-label" }, location_data.label ), row );
        let amounts = coins.getAmountsByLocation( location_data.key );
        for ( let c = 0, _size_c = STUFF.COINS.length; c < _size_c; c++ ) {
            let coin = STUFF.COINS[ c ];
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-coins-coin-label" }, coin.label ), row );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
                "class"        : "stuffs-coins-input",
                "type"         : "number",
                "min"          : "0",
                "step"         : "1",
                "data-location": location_data.key,
                "data-coin"    : coin.key,
                "value"        : "" + amounts[ coin.key ],
                onchange       : "MANAGER.EventManagerV2.doActionAfter(event,'event__coins__set_amount',{'param__coins__location':this.getAttribute('data-location'),'param__coins__coin':this.getAttribute('data-coin'),'param__coins__value':this.value})"
            } ), row );
        }
    },

    // Le journal : la ligne d'ajout (selecteur d'emplacement + 4 montants
    // signes + libelle + « + » — les valeurs se lisent de la ligne au clic,
    // jamais inline) puis les entrees du plus recent au plus ancien,
    // filtrees par la puce active comme les blocs
    _buildCoinsJournal: function ( parent, coins ) {
        let journal         = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-coins-journal" } ), parent );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-coins-journal-title" }, "Journal" ), journal );
        let add_row         = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-coins-add" } ), journal );
        let location_select = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "select", { class: "stuffs-coins-add-location" } ), add_row );
        for ( let l = 0, _size_l = STUFF.LOCATIONS.length; l < _size_l; l++ ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "option", { "value": STUFF.LOCATIONS[ l ].key }, STUFF.LOCATIONS[ l ].label ), location_select );
        }
        for ( let c = 0, _size_c = STUFF.COINS.length; c < _size_c; c++ ) {
            let coin = STUFF.COINS[ c ];
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-coins-coin-label" }, coin.label ), add_row );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
                "class"      : "stuffs-coins-add-amount",
                "type"       : "number",
                "step"       : "1",
                "data-coin"  : coin.key,
                "placeholder": "+/−"
            } ), add_row );
        }
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
            class      : "stuffs-coins-add-label",
            type       : "text",
            placeholder: "Libellé (butin, achat…)"
        } ), add_row );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "button", {
            class  : "stuffs-coins-add-button",
            title  : "Ajouter au journal (applique le montant au solde de l'emplacement)",
            onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__coins__commit_journal',{})"
        }, "+" ), add_row );
        let entries = coins.getJournalEntries();
        let list    = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-coins-journal-list" } ), journal );
        for ( let i = entries.length - 1; i >= 0; i-- ) {
            let entry = entries[ i ];
            if ( this.current_filter !== STUFF.FILTER_ALL && entry.location !== this.current_filter ) {
                continue;
            }
            this._buildCoinsJournalEntry( list, entry );
        }
    },

    _buildCoinsJournalEntry: function ( parent, entry ) {
        let row           = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-coins-entry", "data-location": entry.location } ), parent );
        let location_data = STUFF.getLocationData( entry.location );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-coins-entry-date" }, this._formatCoinsDate( entry.timestamp ) ), row );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-coins-entry-location" }, location_data ? location_data.label : entry.location ), row );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-coins-entry-amount" }, STUFF.formatCoinsDelta( entry.coins ) ), row );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-coins-entry-label" }, entry.label ), row );
    },

    // JJ/MM HH:MM
    _formatCoinsDate: function ( timestamp ) {
        let date = new Date( timestamp );
        let pad  = function ( nb ) { return ( nb < 10 ? "0" : "" ) + nb; };
        return pad( date.getDate() ) + "/" + pad( date.getMonth() + 1 ) + " " + pad( date.getHours() ) + ":" + pad( date.getMinutes() );
    },

    _buildAddBar: function ( parent, stuffs ) {
        let add_bar = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-add-bar" } ), parent );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
            class  : "stuffs-add-button",
            title  : "Ajouter un équipement (Bibliothèque)",
            onclick: "CHARACTER.LibraryWindow.goToStuffsSubject()"
        }, "+" ), add_bar );
        let location_filters = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-location-filters" } ), add_bar );
        this._buildLocationFilter( location_filters, STUFF.FILTER_ALL, "Tous", stuffs.getSize() );
        for ( let l = 0, _size_l = STUFF.LOCATIONS.length; l < _size_l; l++ ) {
            let location_data = STUFF.LOCATIONS[ l ];
            this._buildLocationFilter( location_filters, location_data.key, location_data.label, stuffs.getStuffsByLocation( location_data.key ).length );
        }
        // La jauge visuelle de l'encombrement vit à droite de la barre :
        // un range en lecture seule (pointer-events none en CSS), borné à
        // 2× le max — la moitié de la piste est donc exactement le max. Ses
        // graduations (0 / max / 2×max) surplombent les seuils de couleur
        let bulk_box            = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-bulk" } ), add_bar );
        let bulk_gauge          = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-bulk-gauge" } ), bulk_box );
        this.bulk_ticks_element = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-bulk-ticks" } ), bulk_gauge );
        this.bulk_tick_start    = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-bulk-tick stuffs-bulk-tick-start" } ), this.bulk_ticks_element );
        this.bulk_tick_mid      = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-bulk-tick stuffs-bulk-tick-mid" } ), this.bulk_ticks_element );
        this.bulk_tick_end      = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-bulk-tick stuffs-bulk-tick-end" } ), this.bulk_ticks_element );
        this.bulk_range_element = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
            "class"   : "stuffs-bulk-range",
            "type"    : "range",
            "min"     : "0",
            "step"    : "0.1",
            "tabindex": "-1"
        } ), bulk_gauge );
        this.bulk_dom_element   = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "stuffs-bulk-total" } ),
            bulk_box
        );
        // The bulk counter of the domain feeds the window : every counter
        // lands on the window's own counters (warnings/errors ride to the
        // tab badge), the bulk value itself calls back update() which
        // rewrites this div — addElement dedups, re-branching at each
        // render is safe
        stuffs.setCountersParent( this );
        stuffs.getCounter( "bulk" ).setParent( this );
        stuffs.getCounter( "bulk_max" ).setParent( this );
        this._updateBulkTotal();
    },

    // Counter contract : the domain bulk counter pushes its value here
    update: function ( name, nb_counter ) {
        this._updateBulkTotal();
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

    // The bar total reads "porté / max" and carries its state in a data
    // attribute (the CSS colors on it) : over the max = warning, over
    // twice the max = error (PF2 : no more move)
    _updateBulkTotal: function () {
        if ( !this.bulk_dom_element ) {
            return;
        }
        let character  = CONTROLLER.Character.current_character;
        let stuffs     = character.getStuffs();
        let bulk_total = stuffs.getBulkTotal( STUFF.CARRIED_LOCATIONS );
        let bulk_max   = stuffs.getBulkMax( character );
        let bulk_state = "ok";
        if ( bulk_total > 2 * bulk_max ) {
            bulk_state = "critical";
        }
        else if ( bulk_total > bulk_max ) {
            bulk_state = "over";
        }
        // One decimal at most, French style (0,1 light bulk steps)
        this.bulk_dom_element.textContent = "Encombrement : " + String( bulk_total ).replace( ".", "," ) + " / " + bulk_max;
        SERVICE.DOM.setDataSet( this.bulk_dom_element, "bulkState", bulk_state );
        SERVICE.DOM.setDataSet( this.bulk_dom_element.parentElement, "bulkState", bulk_state );
        // La jauge suit : piste 0 → 2×max (le max tombe à mi-piste), le
        // curseur est clampé en bout de piste au-delà du double
        this.bulk_range_element.setAttribute( "max", "" + ( 2 * bulk_max ) );
        this.bulk_range_element.value = "" + Math.min( bulk_total, 2 * bulk_max );
        this.bulk_range_element.setAttribute( "aria-label", "Encombrement porté : " + String( bulk_total ).replace( ".", "," ) + " sur " + bulk_max );
        // Les graduations suivent le max : 0, max à mi-piste, 2×max en bout
        // de piste ; l'état se pose aussi sur le parent du range (la jauge)
        this.bulk_tick_start.textContent = "0";
        this.bulk_tick_mid.textContent   = "" + bulk_max;
        this.bulk_tick_end.textContent   = "" + ( 2 * bulk_max );
        SERVICE.DOM.setDataSet( this.bulk_range_element.parentElement, "bulkState", bulk_state );
        let for_modifier = character.getCharacteristics().getContentByUUID( CHARACTERISTICS.FOR.key ).getModifierValue();
        let title        = "Encombrement max : " + bulk_max + " (10 + modificateur de Force " + ( for_modifier >= 0 ? "+" : "" ) + for_modifier + ")";
        if ( bulk_state === "over" ) {
            title = "Surchargé : " + String( bulk_total ).replace( ".", "," ) + " portés pour " + bulk_max + " autorisés";
        }
        else if ( bulk_state === "critical" ) {
            title = "Au-delà du double de l'encombrement max (" + bulk_max + ") : plus de déplacement";
        }
        this.bulk_dom_element.setAttribute( "title", title );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.StuffsWindow, WINDOW_V2.ElementFromData );
CHARACTER.StuffsWindow.NAME = "stuffs_sheet";
