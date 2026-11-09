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
        }
        WINDOW_V2.Element.prototype.doActionAfter.call( this, event_name, params );
    },

    //********************************************  HTML   **************************************************//

    computeHtmlWithData: function ( character_object ) {
        this.content_dom_element_target = SERVICE.DOM.createElement( "div", { class: "spells-window" } );
        SERVICE.DOM.addElementToAfterEmpty( this.content_dom_element_target, this.dom_element_target );
        this._buildContent();
    },

    _refreshContent: function () {
        SERVICE.DOM.empty( this.content_dom_element_target );
        this._buildContent();
    },

    _buildContent: function () {
        let spells = CONTROLLER.Character.current_character.getSpells();
        this._buildAddBar( this.content_dom_element_target, spells );
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
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.SpellsWindow, WINDOW_V2.ElementFromData );
CHARACTER.SpellsWindow.NAME = "spells_sheet";
