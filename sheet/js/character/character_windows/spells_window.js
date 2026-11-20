"use strict";

// ─────────────────────────────────────────────────────────────────────────────
// CHARACTER.SpellsWindow
// Onglet "Sorts" : le répertoire de sorts du personnage, disponible pour
// tout le monde (actif sur page vide, aucune pré-condition — un non
// lanceur garde sa zone de consultation). Le « + » en tête de barre
// ouvre la POPUP D'AJOUT (CHARACTER.SpellAddPopup : sélecteur du
// dataset + filtre + Entrée, un nom inconnu DEVIENT le sort — entréée
// hors dataset, demande utilisateur — commentaire), le compte du
// répertoire vit à droite de la barre. Une section par NATURE
// (SPELL.NATURES, l'ordre du tableau) : Tours de magie, Rang 1..10
// (la nature "sort" e section par rang, seuls les rangs
// habités se rendent), Sorts focalisés, Rituels, Autres sorts (les
// entrées hors dataset) — une section ne vit que si elle porte des
// entrées, une page vide n'affiche que la barre et l'invitation.
// Chaque section porte sa LIGNE D'ENTÊTE (colonnes partagées par
// grille) et chaque ligne ses colonnes harmonisées : COÛT d'action
// (glyphes de la popup d'action : ◆/◆◆/◆◆◆/⟳/⟲, « — » sans coût),
// nom + « ? » de popup (catégorie spell : rang, traits, description —
// pas de « ? » sur un sort hors dataset), RANG, TRAITS en badges,
// COMMENTAIRE, et la ROUE CRANTÉE d'édition
// (CHARACTER.SpellEditPopup : commentaire, Retirer). Les valeurs ne
// s'embarquent JAMAIS en dur dans les handlers inline : les noms de
// sorts portent des apostrophes, elles se lisent du DOM au clic.
// ─────────────────────────────────────────────────────────────────────────────
/**
 * @class CHARACTER.SpellsWindow
 * @extends WINDOW_V2.ElementFromData
 */
CHARACTER.SpellsWindow = function ( parent_name ) {
    this.initSpecific( CHARACTER.SpellsWindow.NAME, parent_name, "Sorts" );
};
CHARACTER.SpellsWindow.prototype = {
    initSpecific: WINDOW_V2.ElementFromData.initSpecific,

    //********************************************  EVENT LISTENER  **************************************************//

    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__spell__add":
            case "event__spell__remove":
                this._refreshContent();
                return;
            // L'ouverture du sélecteur d'un emplacement est un geste d'interface :
            // la fenêtre retrouve SON composant par rang + index et l'ouvre
            case "event__daily_spell__toggle_selector": {
                let component = this._preparation_components[ params[ "param__daily_spell__rank" ] + "__" + params[ "param__daily_spell__index" ] ];
                if ( component ) {
                    component.toggleState();
                }
                return;
            }
            // Le domaine a déjà traité (le personnage route puis broadcast) : la
            // fenêtre se reconstruit sur l'état frais (zone + badges du répertoire)
            case "event__daily_spell__select_choice":
            case "event__daily_spell__toggle_spent":
            case "event__daily_spell__long_rest":
            case "event__daily_spell__new_day":
                this._refreshContent();
                return;
            // The comment lives on its entry state : the domain owns the
            // truth, the display follows in place (nothing recalculates,
            // the rebuild would cost too much per keystroke)
            case "event__spell__edit_comment": {
                CONTROLLER.Character.current_character.doActionAfter( event_name, params );
                let entry_dom  = this._getEntryDomElement( params[ "param__spell__value" ] );
                let spell_edited = CONTROLLER.Character.current_character.getSpells().getContentByUUID( "spell__" + params[ "param__spell__value" ] );
                if ( entry_dom && spell_edited ) {
                    let comment_cell = entry_dom.querySelector( ".spells-entry-comment" );
                    if ( comment_cell ) {
                        comment_cell.textContent   = spell_edited.comment || "";
                        comment_cell.setAttribute( "title", spell_edited.comment || "" );
                    }
                }
                return;
            }
            // Les niveaux et validations vivent dans l'onglet Progression :
            // recalcul des emplacements a l'activation de l'onglet, toujours
            // sur l'etat frais du personnage
            case "click_on__window_navigation__done":
                if ( this.name === params[ "window_name" ] ) {
                    this._refreshContent();
                }
                break;
        }
        WINDOW_V2.Element.prototype.doActionAfter.call( this, event_name, params );
    },

    //********************************************  HTML   **************************************************//

    computeHtmlWithData: function ( character_object ) {
        this._preparation_components      = {};
        this.content_dom_element_target = SERVICE.DOM.createElement( "div", { class: "spells-window" } );
        SERVICE.DOM.addElementToAfterEmpty( this.content_dom_element_target, this.dom_element_target );
        this._buildContent();
    },

    _refreshContent: function () {
        SERVICE.DOM.empty( this.content_dom_element_target );
        this._buildContent();
    },

    _buildContent: function () {
        let character_object  = CONTROLLER.Character.current_character;
        let spells            = character_object.getSpells();
        this._prepared_counts = character_object.getDailyPreparation().getPreparedCounts();
        this._buildAddBar( this.content_dom_element_target, spells );
        this._buildSlotsArea();
        this._buildPreparationArea();
        // Une section par nature, les rangs de la nature "sort" entre les
        // tours de magie et les focalisés : seules les sections HABITÉES
        // se rendent (une page vide n'affiche aucune coquille vide)
        for ( let n = 0, _size_n = SPELL.NATURES.length; n < _size_n; n++ ) {
            let nature_data = SPELL.NATURES[ n ];
            if ( nature_data.key === "spell" ) {
                for ( let rank = 1; rank <= 10; rank++ ) {
                    let ranked_spells = spells.getSpellsByNatureAndRank( "spell", rank );
                    if ( ranked_spells.length ) {
                        this._buildSection( this.content_dom_element_target, nature_data, ranked_spells, "Rang " + rank, String( rank ) );
                    }
                }
                continue;
            }
            let nature_spells = spells.getSpellsByNature( nature_data.key );
            if ( nature_spells.length ) {
                this._buildSection( this.content_dom_element_target, nature_data, nature_spells, nature_data.label, null );
            }
        }
        if ( spells.getSize() === 0 ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-empty-hint" }, "Ajoutez des sorts au répertoire par le « + »." ), this.content_dom_element_target );
        }
    },

    // The bar of the window : the « + » opens the add popup, the
    // repertoire count sits at the right
    _buildAddBar: function ( parent, spells ) {
        let add_bar = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-add-bar" } ), parent );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
            class  : "spells-add-button",
            title  : "Ajouter un sort au répertoire",
            onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__spell__open_add_popup',{})"
        }, "+" ), add_bar );
        SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "spells-count" }, this._computeCountText( spells ) ),
            add_bar
        );
    },

    _buildSection: function ( parent, nature_data, section_spells, section_label, rank_value ) {
        let section = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "spells-section", "data-nature": nature_data.key, "data-rank": rank_value || "" } ),
            parent
        );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-section-title" }, section_label ), section );
        // The columns carry their titles : the header shares the grid
        // template of the rows
        this._buildEntriesHeader( section );
        for ( let e = 0, _size_e = section_spells.length; e < _size_e; e++ ) {
            this._buildEntry( section, section_spells[ e ] );
        }
    },

    _buildEntriesHeader: function ( section ) {
        let header = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-entries-header" } ), section );
        let titles = [
            { "column": "cost",    "label": "Coût" },
            { "column": "name",    "label": "Sort" },
            { "column": "rank",    "label": "Rang" },
            { "column": "traits",  "label": "Traits" },
            { "column": "description", "label": "Description" },
            { "column": "comment", "label": "Commentaire" },
            { "column": "actions", "label": "" }
        ];
        for ( let t = 0, _size_t = titles.length; t < _size_t; t++ ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-entries-header-title" + ( titles[ t ].column ? " spells-col-" + titles[ t ].column : "" ) }, titles[ t ].label ), header );
        }
    },

    _buildEntry: function ( section, spell ) {
        let entry = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", {
                class       : "spells-entry",
                "data-value": spell.value,
                "title"     : SPELLS.getFullTypeLabel( spell.value )
            } ),
            section
        );
        // The cells land column by column (règle Round 61) and each one
        // carries its column class (règle Round 55 : jamais de placement
        // automatique, le curseur ne revient pas en arrière dans la rangée)
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "spells-entry-cost spells-col-cost", "title": "Coût d'action" }, SPELLS.getActionCostLabel( spell.value ) ), entry );
        let name_cell = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-entry-name spells-col-name" } ), entry );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "spells-entry-value" }, spell.value ), name_cell );
        // The "?" of information only exists for a scraped spell (a
        // free-named one owns no data) : the identity is read from the DOM
        // at click time, never inline (apostrophes)
        if ( spell.isInDataset() ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
                class  : "spells-entry-info gs-link-information",
                title  : "Information",
                onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__spell',{'param__spell__value':this.closest('.spells-entry').getAttribute('data-value')})"
            }, "?" ), name_cell );
        }
        // Le badge de préparation compte les emplacements du jour (pas les dépenses)
        let prepared_count = this._prepared_counts[ spell.value ] || 0;
        if ( prepared_count ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
                class: "spells-entry-prepared",
                title: "Préparé dans " + prepared_count + " emplacement" + ( prepared_count > 1 ? "s" : "" )
            }, "Préparé ×" + prepared_count ), name_cell );
        }
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
            class: "spells-entry-rank spells-col-rank",
            "title": "Rang"
        }, spell.isInDataset() ? String( SPELLS.getRankOfName( spell.value ) ) : SPELL.NO_RANK_LABEL ), entry );
        let traits_cell = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-entry-traits spells-col-traits" } ), entry );
        let spell_data = SPELLS.getSpellData( spell.value );
        if ( spell_data && spell_data[ "traits" ] ) {
            for ( let t = 0, _size_t = spell_data[ "traits" ].length; t < _size_t; t++ ) {
                SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "spells-entry-trait" }, spell_data[ "traits" ][ t ] ), traits_cell );
            }
        }
        // The scraped description reads as PLAIN text cut at four lines
        // (line-clamp) : the text travels by textContent, never by
        // innerHTML — the " ?" renders the whole description with its
        // clickable links
        let description_dom = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
            class  : "spells-entry-description spells-col-description"
        } ), entry );
        if ( spell_data && spell_data[ "description" ] ) {
            description_dom.textContent = spell_data[ "description" ].replace( /<[^>]*>/g, " " ).replace( /\s+/g, " " ).trim();
        }
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
            class  : "spells-entry-comment spells-col-comment",
            "title": spell.comment || ""
        }, spell.comment || "" ), entry );
        // The gear opens the edit popup (commentaire, retrait) : the entry
        // identity is read from the DOM at click time
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
            class  : "spells-entry-edit spells-col-actions",
            title  : "Modifier",
            onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__spell__open_edit_popup',{'param__spell__value':this.closest('.spells-entry').getAttribute('data-value')})"
        }, "⚙" ), entry );
    },

    //********************************************  DATA   **************************************************//

    _getEntryDomElement: function ( value ) {
        // The spell names carry apostrophes : the selector by value embeds
        // double quotes (JSON.stringify), never single ones
        return this.content_dom_element_target.querySelector( ".spells-entry[data-value=" + JSON.stringify( value ) + "]" );
    },

    _computeCountText: function ( spells ) {
        return spells.getSize() + ( spells.getSize() > 1 ? " sorts" : " sort" );
    },

    //********************************************  SLOTS AREA   **************************************************//

    // Les emplacements quotidiens du personnage : une grille de deux lignes,
    // une colonne par rang ouvert (0 = tours de magie, les comptes a 0
    // inclus), le calcul croise l'environnement (classe, ecole, ...). Le
    // clic sur une colonne ouvre le detail du calcul en popup
    _buildSlotsArea: function () {
        let slots_data = this._computeSlotsData();
        if ( !slots_data ) {
            this.slots_dom_element = null;
            return;
        }
        this.slots_dom_element = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-slots-grid" } ), this.content_dom_element_target );
        this._fillSlotsArea( slots_data );
    },

    _refreshSlotsArea: function () {
        // L'activation peut precede le premier rendu du panneau (la phase
        // construit au tick suivant) : sans contenu, rien a rafraichir
        if ( !this.content_dom_element_target ) {
            return;
        }
        let slots_data = this._computeSlotsData();
        if ( !slots_data ) {
            if ( this.slots_dom_element ) {
                SERVICE.DOM.removeElement( this.slots_dom_element );
                this.slots_dom_element = null;
            }
            return;
        }
        if ( !this.slots_dom_element ) {
            this._buildSlotsArea();
            return;
        }
        SERVICE.DOM.empty( this.slots_dom_element );
        this._fillSlotsArea( slots_data );
    },

    // Le rang de la colonne se lit du DOM au clic : les popups se ferment par
    // uuid, rien de l'etat ne s'embarque en dur dans un handler inline
    _fillSlotsArea: function ( slots_data ) {
        let grid = this.slots_dom_element;
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-slots-row-label" }, "Emplacements" ), grid );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-slots-row-label" }, "Nombre" ), grid );
        this._buildSlotColumn( grid, 0, "Tours de magie", slots_data.cantrips.count );
        let _ranks = Object.keys( slots_data.ranks ).sort( function ( rank_a, rank_b ) {
            return parseInt( rank_a, 10 ) - parseInt( rank_b, 10 );
        } );
        for ( let r = 0, _size_r = _ranks.length; r < _size_r; r++ ) {
            this._buildSlotColumn( grid, parseInt( _ranks[ r ], 10 ), "Rang " + _ranks[ r ], slots_data.ranks[ _ranks[ r ] ].count );
        }
    },

    // Une colonne = cellule d'entete rang puis cellule de compte : le DOM suit
    // l'ordre des colonnes (regle Round 61), l'entete et le compte partagent
    // la meme piste de la grille commune aux deux lignes
    _buildSlotColumn: function ( parent, rank, rank_title, count ) {
        let onclick = "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__spell_slots',{'param__spell__rank':this.getAttribute('data-rank')})";
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
            class      : "spells-slots-rank",
            "data-rank": "" + rank,
            "title"    : rank_title,
            onclick    : onclick
        }, "" + rank ), parent );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
            class      : "spells-slots-count",
            "data-rank": "" + rank,
            "title"    : "Détail des emplacements",
            onclick    : onclick
        }, "" + count ), parent );
    },

    _computeSlotsData: function () {
        let character_object = CONTROLLER.Character.current_character;
        return character_object && character_object.getSpellSlots() ? character_object.getSpellSlots().getSlotsData( character_object ) : null;
    },
    //********************************************  PREPARATION AREA   **************************************************//

    // La zone "Préparation du jour" : une partie par rang d'emplacement ouvert,
    // une ligne par emplacement (coche de dépense + sélecteur du sort + "?").
    // Le domaine synchronise sa structure aux rangs ouverts à chaque rendu.
    _buildPreparationArea: function () {
        this._preparation_components = {};
        let character_object         = CONTROLLER.Character.current_character;
        let slots_data               = this._computeSlotsData();
        let empty_count              = 0;
        if ( slots_data && Object.keys( slots_data.ranks ).length ) {
            let spells = character_object.getSpells();
            let daily  = character_object.getDailyPreparation();
            daily.syncWithSlots( slots_data, spells );
            empty_count = daily.getEmptySlotsCount( slots_data );
            let area   = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-preparation" } ), this.content_dom_element_target );
            let header = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-preparation-header" } ), area );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-preparation-title" }, "Préparation du jour" ), header );
            let actions = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-preparation-actions" } ), header );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
                class  : "spells-preparation-button",
                title  : "Repos long : réallume tous les emplacements dépensés (la préparation reste)",
                onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__daily_spell__long_rest',{})"
            }, "Repos long" ), actions );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
                class  : "spells-preparation-button",
                title  : "Nouveau jour : vide la préparation et les dépenses",
                onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__daily_spell__new_day',{})"
            }, "Nouveau jour" ), actions );
            let _ranks = Object.keys( slots_data.ranks ).sort( function ( rank_a, rank_b ) {
                return parseInt( rank_a, 10 ) - parseInt( rank_b, 10 );
            } );
            for ( let r = 0, _size_r = _ranks.length; r < _size_r; r++ ) {
                let rank        = _ranks[ r ];
                let count       = slots_data.ranks[ rank ].count;
                let spent_count = daily.getSpentCountOfRank( rank );
                let section     = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-preparation-rank", "data-rank": rank } ), area );
                SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "spells-preparation-rank-title" },
                    "Rang " + rank + " — " + count + ( count > 1 ? " emplacements" : " emplacement" ) + ( spent_count ? ", " + spent_count + " dépensé" + ( spent_count > 1 ? "s" : "" ) : "" ) ), section );
                for ( let i = 0; i < count; i++ ) {
                    this._buildPreparationSlot( section, rank, i, daily, spells );
                }
            }
        }
        // Le badge de l'onglet porte les emplacements de préparation laissés vides
        this.setCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS, "daily_preparation", empty_count );
    },

    _buildPreparationSlot: function ( parent, rank, index, daily, spells ) {
        let slot_value = daily.getSlotValue( rank, index );
        let slot_spent = daily.isSpent( rank, index );
        let slot       = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
            class      : "spells-preparation-slot",
            "data-rank" : "" + rank,
            "data-index": "" + index,
            "data-spent": slot_spent ? "1" : "0"
        } ), parent );
        // La coche de dépense : l'état vit dans le data-spent (jamais une
        // classe), un emplacement sans sort ne se coche pas côté domaine. Les
        // rang/index partent du DOM au clic, jamais inline
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
            class  : "spells-preparation-spent",
            title  : !slot_value ? "Choisissez un sort d'abord" : ( slot_spent ? "Emplacement dépensé — clic pour réallumer" : "Marquer l'emplacement comme dépensé" ),
            onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__daily_spell__toggle_spent',{'param__daily_spell__rank':this.closest('.spells-preparation-slot').getAttribute('data-rank'),'param__daily_spell__index':this.closest('.spells-preparation-slot').getAttribute('data-index')})"
        } ), slot );
        // Le sélecteur du sort préparé dans cet emplacement (composant lib)
        let component = new COMPONENT.SingleSelectFromData();
        component.addParamsForEvents( { "param__daily_spell__rank": "" + rank, "param__daily_spell__index": "" + index } );
        component.setToggleEventName( "event__daily_spell__toggle_selector" );
        component.setClickEventName( "event__daily_spell__select_choice" );
        component.setInfoEvent( "event__show_information__spell", {}, "param__spell__value" );
        component.setOptions( this._getPreparationOptions( rank, spells ) );
        component.setSelectedName( slot_value );
        component.computeHtml();
        SERVICE.DOM.addElementTo( component.getDomElement(), slot );
        this._preparation_components[ rank + "__" + index ] = component;
        // Le "?" de la valeur choisie, posé APRÈS le composant (l'ordre d'appel
        // est l'ordre du DOM) : masqué sans sélection par son data-value, la
        // valeur se lit au clic (les noms portent des apostrophes)
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
            class      : "spells-preparation-info gs-link-information",
            "data-value": slot_value,
            title      : "Information du sort",
            onclick    : "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__spell',{'param__spell__value':this.getAttribute('data-value')})"
        }, "?" ), slot );
    },

    // Les options d'un emplacement de rang N : les sorts de rang du répertoire
    // dont le rang vaut au plus N (sort surclassé autorisé) — ni tours de
    // magie, ni focalisés, ni rituels, ni entrées hors dataset. Le libellé
    // porte le rang du sort quand il est surclassé
    _getPreparationOptions: function ( rank, spells ) {
        let to_return = [];
        for ( let i = 0, _size_i = spells.getSize(); i < _size_i; i++ ) {
            let spell = spells.getContent( i );
            if ( SPELLS.getNatureKeyOfName( spell.value ) !== "spell" ) {
                continue;
            }
            let spell_rank = SPELLS.getRankOfName( spell.value );
            if ( !spell_rank || spell_rank > rank ) {
                continue;
            }
            to_return.push( {
                "name" : spell.value,
                "label": spell_rank < rank ? spell.value + " (rang " + spell_rank + ")" : spell.value,
                "rank" : spell_rank
            } );
        }
        to_return.sort( function ( option_a, option_b ) {
            if ( option_a.rank !== option_b.rank ) {
                return option_a.rank - option_b.rank;
            }
            return option_a.name.localeCompare( option_b.name, "fr" );
        } );
        return to_return;
    }
};


SERVICE.CLASS.addPrototype( CHARACTER.SpellsWindow, WINDOW_V2.ElementFromData );
CHARACTER.SpellsWindow.NAME = "spells_sheet";
