"use strict";

// ─────────────────────────────────────────────────────────────────────────────
// CHARACTER.LevelUpWindow
// Onglet "Passage de niveau" : récapitulatif par niveau de l'historique, les
// blocs sont rendus par les CHARACTER.LevelUpSkills (un par niveau) du
// conteneur du personnage (getLevelUpSkills), qui alimentent le compteur
// warnings de la fenêtre par la chaîne ligne → classe → niveau → conteneur
// → fenêtre.
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
            case "event__level_up__toggle_skill":
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
        // Global warning label: consumer of the window warnings counter
        if ( !this._global_warning ) {
            let window_counter = this.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
            this._global_warning = new CHARACTER.LevelUpGlobalWarning();
            window_counter.setParent( this._global_warning );
            this._global_warning.update( window_counter.uuid, window_counter.getValue() );
        }
        this.content_dom_element_target = SERVICE.DOM.createElement( "div", { class: "level-up-window" } );
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
            SERVICE.DOM.createElement( "div", { class: "level-up-header" } ),
            this.content_dom_element_target
        );
        SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "span", { class: "level-up-header-level" }, level_text ),
            header
        );

        // Nombre de choix manquants : label piloté par le compteur warnings de la fenêtre
        SERVICE.DOM.addElementTo( this._global_warning.computeHtml(), this.content_dom_element_target );

        // Sélecteur de classe + prise de niveau
        this._buildClassSelector( character_object );

        // Un bloc par niveau de l'historique, y compris desactive :
        // le bloc desactive porte l'interrupteur de re-activation
        for ( var h = 0, _size_h = skills.getSize(); h < _size_h; h++ ) {
            SERVICE.DOM.addElementTo( skills.getContent( h ).computeHtml(), this.content_dom_element_target );
        }
    },

    _buildClassSelector: function ( character_object ) {
        var classes = character_object.getClasses();
        if ( classes.isEmpty() ) {
            return;
        }
        var selector = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "level-up-class-selector" } ),
            this.content_dom_element_target
        );
        for ( var c = 0; c < classes.getSize(); c++ ) {
            var current = classes.getContent( c );
            var option  = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", {
                    class         : "level-up-class-option" + ( current.getName() === this._selected_class ? " selected" : "" ),
                    "data-name"   : current.getName(),
                    onclick       : "MANAGER.EventManagerV2.doActionAfter(event,'event__level_up__select_class',{'param__class_name':'" + current.getName() + "'})"
                } ), selector
            );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "level-up-class-option-icon" }, CLASSES.ICONS[ current.getName() ] || "⚔" ), option );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "level-up-class-option-name" }, current.getName() + " " + current.getLevel() ), option );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
                class  : "level-up-class-option-take",
                onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__level_up__take_level',{'param__class_name':'" + current.getName() + "'})"
            }, "+" ), option );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
                class  : "level-up-class-option-remove",
                onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__level_up__remove_level',{'param__class_name':'" + current.getName() + "'})"
            }, "-" ), option );
        }
    },

    _refreshSelectorState: function () {
        var options = this.content_dom_element_target.querySelectorAll( ".level-up-class-option" );
        for ( var i = 0; i < options.length; i++ ) {
            if ( options[ i ].getAttribute( "data-name" ) === this._selected_class ) {
                options[ i ].classList.add( "selected" );
            }
            else {
                options[ i ].classList.remove( "selected" );
            }
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.LevelUpWindow, WINDOW_V2.ElementFromData );
CHARACTER.LevelUpWindow.NAME = "levelup_sheet";
