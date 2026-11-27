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
            case "event__stuff__equip":
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
            case "event__coins__operation":
                this._refreshContent();
                return;
            // The Valider of the operation row : the window assembles the
            // operation (from, to, unsigned amounts, optional label — read
            // from the row, never inline) and re-dispatches to the character ;
            // the refresh follows with the operation broadcast
            case "event__coins__commit_operation": {
                let add_row = this.content_dom_element_target.querySelector( ".stuffs-coins-add" );
                if ( !add_row ) {
                    return;
                }
                let commit_params = {
                    "param__coins__from" : add_row.querySelector( ".stuffs-coins-add-from" ).value,
                    "param__coins__to"   : add_row.querySelector( ".stuffs-coins-add-to" ).value,
                    "param__coins__label": add_row.querySelector( ".stuffs-coins-add-label" ).value
                };
                let has_amount = false;
                let add_inputs = add_row.querySelectorAll( ".stuffs-coins-add-amount" );
                for ( let i = 0, _size_i = add_inputs.length; i < _size_i; i++ ) {
                    let coin_key = add_inputs[ i ].getAttribute( "data-coin" );
                    let amount   = parseInt( add_inputs[ i ].value, 10 ) || 0;
                    commit_params[ "param__coins__" + coin_key ] = amount;
                    if ( amount > 0 ) {
                        has_amount = true;
                    }
                }
                if ( has_amount && commit_params[ "param__coins__from" ] !== commit_params[ "param__coins__to" ] ) {
                    CONTROLLER.Character.current_character.doActionAfter( "event__coins__operation", commit_params );
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
            // Refonte cartes : les entrées vivent dans une grille de cartes
            // (plus d'entête de colonnes titrées) ; une section vide
            // n'affiche qu'une ligne pointillée compacte
            if ( location_data.key === "equipped" ) {
                this._buildSchemaSection( section, stuffs );
            }
            else if ( location_data.key === "backpack" ) {
                this._buildBackpackSection( section, stuffs );
            }
            else {
                let entries = stuffs.getStuffsByLocation( location_data.key );

                if ( !entries.length ) {
                    this._buildEmptySection( section, location_data );
                }
                else {
                    let entries_box = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-entries" } ), section );

                    for ( let e = 0, _size_e = entries.length; e < _size_e; e++ ) {
                        this._buildEntry( entries_box, entries[ e ] );
                    }
                }
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

    // Une ligne de solde en LECTURE SEULE : label de l'emplacement + une
    // puce par monnaie (icône de la pièce + montant + unité collée « 25pp ») ;
    // l'argent ne se modifie QUE par une opération (la ligne du journal)
    _buildCoinsLocationRow: function ( parent, coins, location_data ) {
        let row     = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-coins-location", "data-location": location_data.key } ), parent );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-coins-location-label" }, location_data.label ), row );
        let amounts = coins.getAmountsByLocation( location_data.key );
        for ( let c = 0, _size_c = STUFF.COINS.length; c < _size_c; c++ ) {
            let coin     = STUFF.COINS[ c ];
            let coin_box = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-coins-coin", "data-coin": coin.key } ), row );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-coins-coin-icon stuffs-coin-" + coin.key } ), coin_box );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-coins-coin-value" }, "" + amounts[ coin.key ] ), coin_box );
            // L'unité collée au montant : « 25pp », pas « 25 pp »
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-coins-coin-unit" }, coin.key ), coin_box );
        }
    },

    // Le journal : la ligne d'opération (deux sélecteurs — de / vers — avec
    // un 4e choix « Extérieur » pour un gain ou une dépense, 4 montants
    // positifs dont l'unité est collée au champ, un libellé optionnel et
    // « Valider » ; les valeurs se lisent de la ligne au clic, jamais
    // inline) puis les entrées du plus récent au plus ancien dans un
    // <details> replié, filtrées par la puce active comme les blocs
    _buildCoinsJournal: function ( parent, coins ) {

        let journal = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-coins-journal" } ), parent );

        let add_row = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-coins-add" } ), journal );

        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-coins-add-operation" }, "Opération :" ), add_row );

        let from_select  = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "select", { class: "stuffs-coins-add-from" } ), add_row );
        let to_select    = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "select", { class: "stuffs-coins-add-to" } ), add_row );
        let op_locations = STUFF.LOCATIONS.concat( [ STUFF.COIN_OPERATION_OUTSIDE ] );
        for ( let l = 0, _size_l = op_locations.length; l < _size_l; l++ ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "option", { "value": op_locations[ l ].key }, op_locations[ l ].label ), from_select );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "option", { "value": op_locations[ l ].key }, op_locations[ l ].label ), to_select );
        }
        from_select.value = STUFF.LOCATIONS[ 0 ].key;
        if ( STUFF.LOCATIONS[ 1 ] ) {
            to_select.value = STUFF.LOCATIONS[ 1 ].key;
        }

        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-coins-add-arrow" }, "→" ), add_row );

        for ( let c = 0, _size_c = STUFF.COINS.length; c < _size_c; c++ ) {
            let coin     = STUFF.COINS[ c ];
            let coin_box = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-coins-add-coin" } ), add_row );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-coins-coin-icon stuffs-coin-" + coin.key } ), coin_box );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
                "class"      : "stuffs-coins-add-amount",
                "type"       : "number",
                "min"        : "0",
                "step"       : "1",
                "data-coin"  : coin.key,
                "placeholder": "0"
            } ), coin_box );
            // L'unité collée au champ : « 25pp », pas « 25 pp »
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-coins-add-unit" }, coin.key ), coin_box );
        }

        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
            class      : "stuffs-coins-add-label",
            type       : "text",
            placeholder: "Libellé (optionnel)"
        } ), add_row );

        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "button", {
            class  : "stuffs-coins-add-button",
            title  : "Valider l'opération (applique les montants aux soldes)",
            onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__coins__commit_operation',{})"
        }, "Valider" ), add_row );

        let details = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "details", { class: "stuffs-coins-journal-details" } ), journal );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "summary", { class: "stuffs-coins-journal-title" }, "Journal" ), details );

        let entries = coins.getJournalEntries();

        let list    = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-coins-journal-list" } ), details );

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
        let bulk_label          = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-bulk-label" } ), bulk_box );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-bulk-label-text" }, "Encombrement" ), bulk_label );
        this.bulk_dom_element   = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "stuffs-bulk-total" } ),
            bulk_label
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

    // Une section vide n'occupe pas la place d'une section pleine : une
    // seule ligne pointillée « Rien ici » + « + Ajouter » (qui bascule sur
    // la Bibliothèque comme le + de la barre)
    _buildEmptySection: function ( section, location_data ) {

        let empty = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-empty", "data-location": location_data.key } ), section );

        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-empty-text" }, "Rien ici pour le moment." ), empty );

        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "button", {
            class  : "stuffs-empty-add",
            title  : "Ajouter un équipement (Bibliothèque)",
            onclick: "CHARACTER.LibraryWindow.goToStuffsSubject()"
        }, "+ Ajouter" ), empty );
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
        this._addObjectCell( entry, stuff );
        this._addCharsCell( entry, stuff );
        this._addCommentCell( entry, stuff );
        this._addQuantityCell( entry, stuff );
        this._addBulkCell( entry, stuff );
        this._addEditCell( entry, stuff );
    },

    // The equipped section is a BODY SCHEMA : one case per slot
    // (STUFF.SCHEMA_AREAS), only the occupied ones render (an empty case
    // appears when a piece lands on it), the card of the piece sits in its
    // case, the affixed pieces list under their host
    _buildSchemaSection: function ( section, stuffs ) {
        let equipped = stuffs.getStuffsByLocation( "equipped" );
        if ( !equipped.length ) {
            this._buildEmptySection( section, STUFF.getLocationData( "equipped" ) );
            return;
        }
        let by_case = {};
        for ( let e = 0, _size_e = equipped.length; e < _size_e; e++ ) {
            let stuff     = equipped[ e ];
            let host_slot = STUFF.getHostBodySlot( stuff.getSlot() );
            let case_key  = STUFF.getSlotCase( host_slot || stuff.getSlot() );
            if ( !by_case[ case_key ] ) {
                by_case[ case_key ] = { "main": null, "hosts": [] };
            }
            if ( host_slot ) {
                by_case[ case_key ].hosts.push( stuff );
            }
            else {
                by_case[ case_key ].main = stuff;
            }
        }
        let schema = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-schema" } ), section );
        for ( let r = 0, _size_r = STUFF.SCHEMA_AREAS.length; r < _size_r; r++ ) {
            let row = STUFF.SCHEMA_AREAS[ r ];
            for ( let c = 0, _size_c = row.length; c < _size_c; c++ ) {
                let slot_key = row[ c ];
                let content  = by_case[ slot_key ];
                if ( !content || ( !content.main && !content.hosts.length ) ) {
                    continue;
                }
                let slot_box  = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-slot", "data-slot": slot_key } ), schema );
                let slot_data = STUFF.getSlotData( slot_key );
                SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-slot-label" }, slot_data ? slot_data.label : slot_key ), slot_box );
                if ( content.main ) {
                    this._buildCard( slot_box, content.main, "equipped" );
                }
                if ( content.hosts.length ) {
                    let hosts_box = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-slot-hosts" } ), slot_box );
                    for ( let h = 0, _size_h = content.hosts.length; h < _size_h; h++ ) {
                        let host_line = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-slot-host" } ), hosts_box );
                        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-entry-kind" }, STUFF.ICONS[ content.hosts[ h ].kind ] || STUFF.ICONS.other ), host_line );
                        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-slot-host-name" }, content.hosts[ h ].value ), host_line );
                    }
                }
            }
        }
    },

    // The backpack renders as CLICKABLE CARDS : the hint carries the
    // gesture, a click on a card equips the piece (event__stuff__equip)
    _buildBackpackSection: function ( section, stuffs ) {
        let entries = stuffs.getStuffsByLocation( "backpack" );
        if ( !entries.length ) {
            this._buildEmptySection( section, STUFF.getLocationData( "backpack" ) );
            return;
        }
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-section-hint" }, "Cliquer sur une vignette pour équiper (" + entries.length + " disponibles)" ), section );
        let entries_box = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-entries" } ), section );
        for ( let e = 0, _size_e = entries.length; e < _size_e; e++ ) {
            this._buildCard( entries_box, entries[ e ], "backpack" );
        }
    },

    // A card (vignette) : the top row carries the slot label (or the hand
    // picker of a one-handed weapon) on the left and the actions on the
    // right (gear + unequip cross on an equipped piece), then the same
    // cells as a list entry
    _buildCard: function ( parent, stuff, mode ) {
        let card = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
            class        : "stuffs-entry stuffs-card" + ( mode === "backpack" ? " stuffs-card--clickable" : "" ),
            "data-kind"  : stuff.kind,
            "data-value" : stuff.value,
            "title"      : mode === "backpack" ? this._computeEquipTitle( stuff ) : this._computeEntryTitle( stuff )
        } ), parent );
        if ( mode === "backpack" ) {
            card.setAttribute( "onclick", "MANAGER.EventManagerV2.doActionAfter(event,'event__stuff__equip',{'param__stuff__kind':this.getAttribute('data-kind'),'param__stuff__value':this.getAttribute('data-value')})" );
        }
        let top      = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-card-top" } ), card );
        let slot_key = stuff.getSlot();
        let case_key = STUFF.getSlotCase( slot_key );
        if ( mode === "equipped" && STUFFS.getFieldValue( stuff.value, "Mains" ) === "1" && ( case_key === "main" || case_key === "off_hand" ) ) {
            let pick       = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-slot-pick" } ), top );
            let hand_slots = [ "main", "off_hand" ];
            for ( let h = 0, _size_h = hand_slots.length; h < _size_h; h++ ) {
                let hand_slot = hand_slots[ h ];
                let hand_data = STUFF.getSlotData( hand_slot );
                SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
                    class         : "stuffs-slot-choice",
                    "data-slot"   : hand_slot,
                    "data-active" : slot_key === hand_slot ? "true" : "false",
                    "title"       : "Équiper en " + ( hand_data ? hand_data.label.toLowerCase() : hand_slot ),
                    onclick       : "MANAGER.EventManagerV2.doActionAfter(event,'event__stuff__set_slot',{'param__stuff__kind':this.closest('.stuffs-entry').getAttribute('data-kind'),'param__stuff__value':this.closest('.stuffs-entry').getAttribute('data-value'),'param__stuff__slot':this.getAttribute('data-slot')})"
                }, hand_data ? hand_data.label : hand_slot ), pick );
            }
        }
        else {
            let slot_data = STUFF.getSlotData( slot_key );
            let top_label = slot_data ? slot_data.label : slot_key;
            if ( STUFFS.isTwoHanded( stuff.value ) ) {
                top_label = STUFF.TWO_HANDS_LABEL;
            }
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-card-slot" }, top_label ), top );
        }
        let actions = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-card-actions" } ), top );
        this._addEditCell( actions, stuff );
        if ( mode === "equipped" ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
                class  : "stuffs-entry-unequip",
                title  : "Déquiper (retour au sac à dos)",
                onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__stuff__set_location',{'param__stuff__kind':this.closest('.stuffs-entry').getAttribute('data-kind'),'param__stuff__value':this.closest('.stuffs-entry').getAttribute('data-value'),'param__stuff__location':'backpack'})"
            }, "✕" ), actions );
        }
        this._addObjectCell( card, stuff );
        this._addCharsCell( card, stuff );
        this._addCommentCell( card, stuff );
        this._addQuantityCell( card, stuff );
        this._addBulkCell( card, stuff );
    },

    _addObjectCell: function ( entry, stuff ) {
        let object_cell        = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "stuffs-entry-object stuffs-col-object" } ), entry );
        let kind_data_for_icon = STUFF.getKindData( stuff.kind );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
            class  : "stuffs-entry-kind",
            "title": kind_data_for_icon ? kind_data_for_icon.label : ""
        }, STUFF.ICONS[ stuff.kind ] || STUFF.ICONS.other ), object_cell );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-entry-value" }, stuff.value ), object_cell );
        if ( STUFFS.getEntryData( stuff.value ) ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
                class  : "stuffs-entry-info gs-link-information",
                title  : "Information",
                onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__item',{'param__stuff__value':this.closest('.stuffs-entry').getAttribute('data-value')})"
            }, "?" ), object_cell );
        }
    },

    _addCharsCell: function ( entry, stuff ) {
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
    },

    _addCommentCell: function ( entry, stuff ) {
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
            class  : "stuffs-entry-comment stuffs-col-comment",
            "title": stuff.comment || ""
        }, stuff.comment || "" ), entry );
    },

    // The quantity stays READ on the card, never displayed on an equipped
    // piece (the editing lives in the gear popup)
    _addQuantityCell: function ( entry, stuff ) {
        if ( stuff.location !== "equipped" ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-entry-quantity stuffs-col-quantity", "title": "Quantité" }, "" + stuff.quantity ), entry );
        }
    },

    _addBulkCell: function ( entry, stuff ) {
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stuffs-entry-bulk stuffs-col-bulk", "title": "Encombrement" }, STUFFS.getFieldValue( stuff.value, "bulk" ) || "—" ), entry );
    },

    _addEditCell: function ( entry, stuff ) {
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
            class  : "stuffs-entry-edit stuffs-col-actions",
            title  : "Modifier",
            onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__stuff__open_edit_popup',{'param__stuff__kind':this.closest('.stuffs-entry').getAttribute('data-kind'),'param__stuff__value':this.closest('.stuffs-entry').getAttribute('data-value')})"
        }, "⚙" ), entry );
    },

    _computeEquipTitle: function ( stuff ) {
        if ( STUFFS.isTwoHanded( stuff.value ) ) {
            return "Équiper « " + stuff.value + " » à deux mains (occupe Main + Main secondaire, le bouclier repart au sac)";
        }
        let slot_data = STUFF.getSlotData( stuff.getSlot() );
        return "Équiper « " + stuff.value + " » sur « " + ( slot_data ? slot_data.label : stuff.getSlot() ) + " »";
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
        this.bulk_dom_element.textContent = String( bulk_total ).replace( ".", "," ) + " / " + bulk_max;
        SERVICE.DOM.setDataSet( this.bulk_dom_element, "bulkState", bulk_state );
        SERVICE.DOM.setDataSet( this.bulk_dom_element.closest( ".stuffs-bulk" ), "bulkState", bulk_state );
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


