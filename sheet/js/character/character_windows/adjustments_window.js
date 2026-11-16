"use strict";

// ─────────────────────────────────────────────────────────────────────────────
// CHARACTER.AdjustmentsWindow
// Onglet "Ajustements" : le point neutre d'édition du personnage. Une
// section par catégorie (ADJUSTMENT.KINDS), chaque entrée porte sa valeur et
// son explication libre, le retrait vit ici. La valeur se choisit dans un
// SÉLECTEUR quand une liste existe (le choix, le filtre ou son Entrée ne
// font que positionner la valeur en attente — le + seul crée l'entrée),
// en champ libre sinon ; l'explication reste toujours libre et se modifie
// sur chaque entrée après création. Le reste de la feuille reste lecture :
// les zones consomment getValuesByKind.
// ─────────────────────────────────────────────────────────────────────────────
/**
 * @class CHARACTER.AdjustmentsWindow
 * @extends WINDOW_V2.ElementFromData
 */
CHARACTER.AdjustmentsWindow = function ( parent_name ) {
    this.initSpecific( CHARACTER.AdjustmentsWindow.NAME, parent_name, "Ajustements" );
};
CHARACTER.AdjustmentsWindow.prototype = {
    initSpecific: WINDOW_V2.ElementFromData.initSpecific,

    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__adjustment__add":
            case "event__adjustment__remove":
                this._refreshContent();
                break;
            case "event__adjustment__toggle_selector": {
                let component = this.selector_components[ params[ "param__adjustment__kind" ] ];
                if ( component ) {
                    component.toggleState();
                }
                return;
            }
            case "event__adjustment__pick": {
                this._pickValue( params[ "param__adjustment__kind" ], params[ "param__choice_value" ] );
                return;
            }
            case "event__adjustment__commit": {
                this._commitAddRow( params[ "param__adjustment__kind" ] );
                return;
            }
            // Enter validates the value like a pick (exact match takes the
            // canonical name, otherwise the raw filter text becomes the
            // value as if it existed) — the entry waits for the +, the
            // user writes its explanation in between
            case "event__adjustment__filter_enter": {
                let kind      = params[ "param__adjustment__kind" ];
                // Le sous-sélecteur du rang (mastery__rank) vit dans la
                // section mastery : on passe par le composant quand il existe
                let component = this.selector_components[ kind ];
                let container = component ? component.getDomElement() : this.content_dom_element_target.querySelector( ".adjustments-section[data-kind='" + kind + "']" );
                if ( !container ) {
                    return;
                }
                let value   = params[ "param__filter_value" ];
                let options = container.querySelectorAll( ".single-select-option" );
                for ( let i = 0, _size_i = options.length; i < _size_i; i++ ) {
                    if ( options[ i ].getAttribute( "data-value" ).toLowerCase() === value.toLowerCase() ) {
                        value = options[ i ].getAttribute( "data-value" );
                        break;
                    }
                }
                this._pickValue( kind, value );
                return;
            }
        }
        WINDOW_V2.Element.prototype.doActionAfter.call( this, event_name, params );
    },

    //********************************************  HTML   **************************************************//
    computeHtmlWithData: function ( character_object ) {
        this.selector_components = {};
        this.pending_values       = {};
        this.content_dom_element_target = SERVICE.DOM.createElement( "div", { class: "adjustments-window" } );
        SERVICE.DOM.addElementToAfterEmpty( this.content_dom_element_target, this.dom_element_target );
        this._buildContent();
    },

    _refreshContent: function () {
        SERVICE.DOM.empty( this.content_dom_element_target );
        this.selector_components = {};
        this._buildContent();
    },

    _buildContent: function () {
        let adjustments = CONTROLLER.Character.current_character.getAdjustments();
        for ( let k = 0, _size_k = ADJUSTMENT.KINDS.length; k < _size_k; k++ ) {
            let kind_data = ADJUSTMENT.KINDS[ k ];
            let section   = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", { class: "adjustments-section", "data-kind": kind_data.key } ),
                this.content_dom_element_target
            );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "adjustments-section-title" }, kind_data.label ), section );
            let entries = adjustments.getEntriesByKind( kind_data.key );
            for ( let e = 0, _size_e = entries.length; e < _size_e; e++ ) {
                this._buildEntry( section, entries[ e ] );
            }
            this._buildAddRow( section, kind_data );
        }
    },

    _buildEntry: function ( section, adjustment ) {
        let entry = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "adjustments-entry", "data-kind": adjustment.kind, "data-value": adjustment.value } ),
            section
        );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "adjustments-entry-value" }, adjustment.value ), entry );
        // L'explication reste modifiable sur l'entrée même, après création :
        // le changement part par le plat (kind et valeur lus sur le parent,
        // texte lu dans l'input au moment de l'événement, jamais inline)
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
            class      : "adjustments-entry-explanation",
            value      : adjustment.explanation,
            placeholder: ADJUSTMENT.EXPLANATION_PLACEHOLDER,
            onchange   : "MANAGER.EventManagerV2.doActionAfter(event,'event__adjustment__edit_explanation',{'param__adjustment__kind':this.parentNode.getAttribute('data-kind'),'param__adjustment__value':this.parentNode.getAttribute('data-value'),'param__adjustment__explanation':this.value})"
        } ), entry );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
            class  : "adjustments-entry-remove",
            title  : "Retirer",
            onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__adjustment__remove',{'param__adjustment__kind':'" + adjustment.kind + "','param__adjustment__value':this.parentNode.getAttribute('data-value')})"
        }, "×" ), entry );
    },

    // The add row follows the kind: selector when a list exists, free input
    // otherwise, the speed combines its mode selector with a meters input.
    // The + always commits : the picked selector value waits in
    // pending_values, the free values are read from the row at commit time —
    // nothing ever travels inline
    _buildAddRow: function ( section, kind_data ) {
        let add_row = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "adjustments-add-row" } ),
            section
        );
        if ( kind_data.value_picker === "selector" || kind_data.value_picker === "speed" ) {
            this._buildSelector( add_row, kind_data.key );
        }
        if ( kind_data.value_picker === "mastery" ) {
            // Trois contrôles : la compétence, le type de Artisanat/
            // Connaissance (révélé par le choix de la compétence), puis le
            // rang de qualification
            this._buildSelector( add_row, kind_data.key );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "adjustments-mastery-qualifier" } ), add_row );
            this._buildSelector( add_row, kind_data.key + "__rank" );
            this._renderMasteryQualifier();
        }
        if ( kind_data.value_picker === "speed" ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
                class      : "adjustments-add-input",
                placeholder: "Mètres",
                "data-name": "adjustment-meters"
            } ), add_row );
        }
        if ( kind_data.value_picker === "input" ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
                class      : "adjustments-add-input",
                placeholder: kind_data.value_placeholder,
                "data-name": "adjustment-value"
            } ), add_row );
        }
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", {
            class      : "adjustments-add-input",
            placeholder: ADJUSTMENT.EXPLANATION_PLACEHOLDER,
            "data-name": "adjustment-explanation"
        } ), add_row );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
            class  : "adjustments-add-button",
            title  : "Ajouter",
            onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__adjustment__commit',{'param__adjustment__kind':'" + kind_data.key + "'})"
        }, "+" ), add_row );
    },

    _buildSelector: function ( add_row, kind_key ) {
        let component = new COMPONENT.SingleSelectFromData();
        component.addParamsForEvents( { "param__adjustment__kind": kind_key } );
        component.setToggleEventName( "event__adjustment__toggle_selector" );
        component.setClickEventName( "event__adjustment__pick" );
        component.setFilterEnterEventName( "event__adjustment__filter_enter" );
        component.setOptions( this._getKindOptions( kind_key ) );
        component.setSelectedName( this.pending_values[ kind_key ] );
        component.computeHtml();
        SERVICE.DOM.addElementTo( component.getDomElement(), add_row );
        this.selector_components[ kind_key ] = component;
    },

    // The picked value waits in pending_values until the +, the header of
    // the selector follows in place
    _pickValue: function ( kind, value ) {
        this.pending_values[ kind ] = value;
        let component = this.selector_components[ kind ];
        if ( component ) {
            component.setSelectedName( value );
            component.hidePopup();
        }
        // Le type de Artisanat/Connaissance suit la compétence : une autre
        // compétence réinitialise le type en attente, le sélecteur se rebâtit
        if ( kind === "mastery" ) {
            this.pending_values[ "mastery__qualifier" ] = null;
            this._renderMasteryQualifier();
        }
    },

    // Le sélecteur de type ne vit que sur une compétence à qualifier
    // (Artisanat, Connaissance) : il apparait entre la compétence et le
    // rang, liste + libre comme les autres sélecteurs de la section
    _renderMasteryQualifier: function () {
        let container = this.content_dom_element_target.querySelector( ".adjustments-section[data-kind='mastery'] .adjustments-mastery-qualifier" );
        if ( !container ) {
            return;
        }
        SERVICE.DOM.empty( container );
        delete this.selector_components[ "mastery__qualifier" ];
        let skill = this.pending_values[ "mastery" ];
        if ( !skill ) {
            return;
        }
        let skill_data = SKILLS.isASkill( skill );
        if ( !skill_data || !skill_data.need_qualifier ) {
            return;
        }
        let component = new COMPONENT.SingleSelectFromData();
        component.addParamsForEvents( { "param__adjustment__kind": "mastery__qualifier" } );
        component.setToggleEventName( "event__adjustment__toggle_selector" );
        component.setClickEventName( "event__adjustment__pick" );
        component.setFilterEnterEventName( "event__adjustment__filter_enter" );
        component.setOptions( SKILLS.getQualifierList( skill ) );
        component.setSelectedName( this.pending_values[ "mastery__qualifier" ] );
        component.computeHtml();
        SERVICE.DOM.addElementTo( component.getDomElement(), container );
        this.selector_components[ "mastery__qualifier" ] = component;
    },

    _getKindOptions: function ( kind_key ) {
        if ( kind_key === "language" ) {
            return RACES.getKnownLanguages();
        }
        if ( kind_key === "lore" ) {
            return HISTORICS.getKnownLores();
        }
        if ( kind_key === "action" ) {
            return OBJECT.getKnownActions();
        }
        if ( kind_key === "deity" ) {
            return OBJECT.getKnownDeities();
        }
        if ( kind_key === "feat" ) {
            return DON.getKnownFeats();
        }
        if ( kind_key === "speed" ) {
            let to_return = [];
            for ( let i = 0, _size_i = ADJUSTMENT.SPEED_MODES.length; i < _size_i; i++ ) {
                to_return.push( { "name": ADJUSTMENT.SPEED_MODES[ i ] } );
            }
            return to_return;
        }
        // The boost carries its DISPLAY name : the entry reads as prose in
        // the tab, the label to key map will live with the consumption
        if ( kind_key === "characteristic_boost" ) {
            let to_return = [];
            for ( let i = 0, _size_i = CHARACTERISTICS.ENUM.length; i < _size_i; i++ ) {
                to_return.push( { "name": CHARACTERISTICS.ENUM[ i ].label } );
            }
            return to_return;
        }
        // Manual mastery: the 17 skills, then the qualification rank
        if ( kind_key === "mastery" ) {
            return CLASSES.getChoices( null, "amelioration_de_competence" ).entries;
        }
        if ( kind_key === "mastery__rank" ) {
            return ADJUSTMENT.MASTERY_RANKS;
        }
        return [];
    },

    // The window assembles the value from its own state and its row inputs,
    // then passes the plate to the character : no value ever travels inline
    // (the explanations carry apostrophes)
    _commitAddRow: function ( kind_key ) {
        let kind_data  = ADJUSTMENT.getKindData( kind_key );
        let section    = this.content_dom_element_target.querySelector( ".adjustments-section[data-kind='" + kind_key + "']" );
        if ( !kind_data || !section ) {
            return;
        }
        let value = null;
        if ( kind_data.value_picker === "selector" ) {
            value = this.pending_values[ kind_key ];
        }
        else if ( kind_data.value_picker === "speed" ) {
            let meters_input = section.querySelector( '[data-name="adjustment-meters"]' );
            if ( this.pending_values[ kind_key ] && meters_input && meters_input.value ) {
                value = this.pending_values[ kind_key ] + " : " + meters_input.value + " mètres";
            }
        }
        else if ( kind_data.value_picker === "mastery" ) {
            // "Artisanat (alchimie) — Expert (E)" : la compétence — avec son
            // type quand elle en demande un (le + ne crée rien sans lui),
            // puis le rang choisi
            let skill      = this.pending_values[ kind_key ];
            let qualifier = this.pending_values[ kind_key + "__qualifier" ];
            let rank      = this.pending_values[ kind_key + "__rank" ];
            let skill_data = skill ? SKILLS.isASkill( skill ) : false;
            let needs_type = !!( skill_data && skill_data.need_qualifier );
            if ( skill && ( !needs_type || qualifier ) ) {
                let skill_value = needs_type ? skill + " (" + qualifier + ")" : skill;
                value = rank ? skill_value + " — " + rank : skill_value;
            }
        }
        else {
            let value_input = section.querySelector( '[data-name="adjustment-value"]' );
            if ( value_input ) {
                value = value_input.value;
            }
        }
        let explanation_input = section.querySelector( '[data-name="adjustment-explanation"]' );
        if ( value ) {
            CONTROLLER.Character.current_character.doActionAfter( "event__adjustment__add", {
                "param__adjustment__kind"       : kind_key,
                "param__adjustment__value"      : value,
                "param__adjustment__explanation": explanation_input ? explanation_input.value : ""
            } );
            // The picked value is consumed, the rebuilt selector returns to
            // its empty option
            this.pending_values[ kind_key ]                  = null;
            this.pending_values[ kind_key + "__qualifier" ] = null;
            this.pending_values[ kind_key + "__rank" ]       = null;
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.AdjustmentsWindow, WINDOW_V2.ElementFromData );
CHARACTER.AdjustmentsWindow.NAME = "adjustments_sheet";
