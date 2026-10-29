"use strict";

// ─────────────────────────────────────────────────────────────────────────────
// CHARACTER.LevelUpWindow
// Onglet "Passage de niveau" : récapitulatif par niveau de l'historique, les
// lignes sont rendues par les CHARACTER.LevelUpSkill du conteneur du
// personnage (getLevelUpSkills), qui alimentent le compteur warnings de la
// fenêtre par la chaîne skill → conteneur → fenêtre.
// ─────────────────────────────────────────────────────────────────────────────
/**
 * @class CHARACTER.LevelUpWindow
 * @extends WINDOW_V2.ElementFromData
 */
CHARACTER.LevelUpWindow = function ( parent_name ) {
    this.initSpecific( CHARACTER.LevelUpWindow.NAME, parent_name, "Passage de niveau" );
};
CHARACTER.LevelUpWindow.prototype = {
    initSpecific: WINDOW_V2.ElementFromData.initSpecific,

    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "click_on__window_navigation__done":
                if ( this.name === params[ "window_name" ] ) {
                    SERVICE.DOM.empty( this.content_dom_element_target );
                    this._buildContent( params[ "param__current_character__object" ] );
                }
                break;
            case "event__levelup__select":
                CONTROLLER.Character.current_character.doActionAfter( event_name, params );
                this._updateGlobalWarning( CONTROLLER.Character.current_character );
                break;
            case "event__inline_selector__open":
            case "event__inline_selector__search":
            case "event__inline_selector__entry":
                CONTROLLER.Character.current_character.doActionAfter( event_name, params );
                break;
            case "event__form__element_changed":
                if ( params[ "param__property" ] === CLASSES.key_element ) {
                    SERVICE.DOM.empty( this.content_dom_element_target );
                    this._buildContent( CONTROLLER.Character.current_character );
                }
                break;
            case "event__level_up__select_class":
                this._selected_class = params[ "param__class_name" ];
                this._refreshSelectorState();
                break;
            case "event__level_up__take_level":
            case "event__level_up__remove_level":
                CONTROLLER.Character.current_character.doActionAfter( event_name, params );
                SERVICE.DOM.empty( this.content_dom_element_target );
                this._buildContent( CONTROLLER.Character.current_character );
                break;
            case "event__level__toggle":
                SERVICE.DOM.empty( this.content_dom_element_target );
                this._buildContent( CONTROLLER.Character.current_character );
                break;
        }
        WINDOW_V2.Element.prototype.doActionAfter.call( this, event_name, params );
    },

    //********************************************  HTML   **************************************************//
    computeHtmlWithData: function ( character_object ) {
        // Chaîne de compteurs : conteneur des skills → fenêtre (badge de l'onglet)
        character_object.getLevelUpSkills().setCountersParent( this );
        this.content_dom_element_target = SERVICE.DOM.createElement( "div", { class: "levelup-window" } );
        SERVICE.DOM.addElementToAfterEmpty( this.content_dom_element_target, this.dom_element_target );
    },

    _buildContent: function ( character_object ) {
        var skills       = character_object.getLevelUpSkills();
        var char_level   = character_object.getLevel();
        this._selected_class = this._selected_class || character_object.getClasses().getHighestClassName();

        // En-tête récap
        var active     = character_object.getActiveLevel();
        var level_text = "Niveau " + char_level + ( active < char_level ? " (" + active + ( active > 1 ? " actifs" : " actif" ) + ")" : "" );
        var header = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "levelup-header" } ),
            this.content_dom_element_target
        );
        SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "span", { class: "levelup-header-level" }, level_text ),
            header
        );

        // Nombre de choix manquants : compteur du conteneur, alimenté par les compteurs des skills
        this._buildGlobalWarning( character_object );

        // Sélecteur de classe + prise de niveau
        this._buildClassSelector( character_object );

        // Un bloc par niveau de l'historique, y compris desactive :
        // le bloc desactive porte l'interrupteur de re-activation
        var history = character_object.getLevelHistory();
        for ( var h = 0; h < history.getSize(); h++ ) {
            var entry       = history.getContent( h );
            var block_skills = entry.isEnabled() ? skills.getSkillsForLevel( h + 1 ) : [];
            this._buildLevelBlock( h + 1, block_skills, skills, character_object, entry );
        }
    },

    _buildGlobalWarning: function ( character_object ) {
        var missing      = character_object.getLevelUpSkills().getMissingCount();
        this._warningDiv = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "levelup-global-warning" + ( missing > 0 ? " visible" : "" ) },
                missing > 0 ? "⚠ " + missing + " choix en attente" : "✓ Tous les choix sont faits"
            ),
            this.content_dom_element_target
        );
    },

    _updateGlobalWarning: function ( character_object ) {
        if ( !this._warningDiv ) {
            return;
        }
        var missing = character_object.getLevelUpSkills().getMissingCount();
        this._warningDiv.className = "levelup-global-warning" + ( missing > 0 ? " visible" : "" );
        this._warningDiv.innerHTML = missing > 0 ? "⚠ " + missing + " choix en attente" : "✓ Tous les choix sont faits";
    },

    _buildClassSelector: function ( character_object ) {
        var classes = character_object.getClasses();
        if ( classes.isEmpty() ) {
            return;
        }
        var selector = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "levelup-class-selector" } ),
            this.content_dom_element_target
        );
        for ( var c = 0; c < classes.getSize(); c++ ) {
            var current = classes.getContent( c );
            var option  = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", {
                    class         : "levelup-class-option" + ( current.getName() === this._selected_class ? " selected" : "" ),
                    "data-name"   : current.getName(),
                    onclick       : "MANAGER.EventManagerV2.doActionAfter(event,'event__level_up__select_class',{'param__class_name':'" + current.getName() + "'})"
                } ), selector
            );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "levelup-class-option-icon" }, CLASSES.ICONS[ current.getName() ] || "⚔" ), option );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "levelup-class-option-name" }, current.getName() + " " + current.getLevel() ), option );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
                class  : "levelup-class-option-take",
                onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__level_up__take_level',{'param__class_name':'" + current.getName() + "'})"
            }, "+" ), option );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
                class  : "levelup-class-option-remove",
                onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__level_up__remove_level',{'param__class_name':'" + current.getName() + "'})"
            }, "-" ), option );
        }
    },

    _refreshSelectorState: function () {
        var options = this.content_dom_element_target.querySelectorAll( ".levelup-class-option" );
        for ( var i = 0; i < options.length; i++ ) {
            if ( options[ i ].getAttribute( "data-name" ) === this._selected_class ) {
                options[ i ].classList.add( "selected" );
            }
            else {
                options[ i ].classList.remove( "selected" );
            }
        }
    },

    _buildLevelBlock: function ( level_number, block_skills, skills, character_object, history_entry ) {
        var is_enabled = history_entry ? history_entry.isEnabled() : true;
        var level_name = history_entry ? history_entry.getUUID() : ( "" + level_number );
        var block = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", {
                class           : "levelup-block" + ( is_enabled ? "" : " disabled" ),
                "data-level-name": level_name
            } ),
            this.content_dom_element_target
        );

        // Titre du niveau
        var title = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "levelup-block-title" + ( skills.isLevelPending( level_number ) ? " has-pending" : "" ) } ),
            block
        );
        SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "span", { class: "levelup-block-level-num" }, "Niveau " + level_number ),
            title
        );
        // Interrupteur Actif / Désactivé (vivant ici, l'onglet Niveau n'affiche qu'un libelle)
        SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", {
                class  : "levelup-level-toggle",
                onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__level__toggle',{'param__level_name':'" + level_name + "'})"
            }, is_enabled ? "Activé" : "Désactivé" ),
            title
        );

        // Lignes d'unlock : rendues par les skills eux-mêmes
        for ( var i = 0; i < block_skills.length; i++ ) {
            SERVICE.DOM.addElementTo( block_skills[ i ].computeHtml(), block );
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.LevelUpWindow, WINDOW_V2.ElementFromData );
CHARACTER.LevelUpWindow.NAME = "levelup_sheet";
