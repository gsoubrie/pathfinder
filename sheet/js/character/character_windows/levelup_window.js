"use strict";

// ─────────────────────────────────────────────────────────────────────────────
// CHARACTER.LevelUpWindow
// Onglet "Progression" : les caractéristiques (contenu de l'ancien onglet
// supprimé) en tête, puis la barre total PV + options de classe, puis le
// récapitulatif par niveau de l'historique — les entrées
// CHARACTER.LevelHistory rendent chacune leur section (computeHtml)
// et leurs lignes alimentent le compteur warnings de la fenêtre directement
// (chaîne ligne → fenêtre, branchée à chaque rendu). Les entrées
// d'ascendance (CHARACTER.AncestryLevelHistory) rendent leurs sections de
// don d'ascendance intercalées au niveau de leur palier.
// ─────────────────────────────────────────────────────────────────────────────
/**
 * @class CHARACTER.LevelUpWindow
 * @extends WINDOW_V2.ElementFromData
 */
CHARACTER.LevelUpWindow = function ( parent_name ) {
    this.initSpecific( CHARACTER.LevelUpWindow.NAME, parent_name, "Progression" );
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
            case "event__level_up__select_choice":
            case "event__level_up__toggle_selector":
                // The line phase updates in place, the counter chain refreshes
                // the tab badge and the global warning: nothing to re-render
                CONTROLLER.Character.current_character.doActionAfter( event_name, params );
                break;
            case "event__form__element_changed":
                if ( params[ "param__property" ] === CLASSES.key_element || params[ "param__property" ] === RACES.key_element ) {
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
        this.content_dom_element_target = SERVICE.DOM.createElement( "div", { class: "level-up-window" } );
        SERVICE.DOM.addElementToAfterEmpty( this.content_dom_element_target, this.dom_element_target );
        // Le contenu de l'onglet Caractéristiques (supprimé) vit en tête de la
        // Progression : ses compteurs rejoignent ceux de la fenêtre (le badge
        // vaut la somme des compteurs du contenu, règle des compteurs), le
        // bloc se construit UNE fois et survit aux re-renders — la fenêtre
        // vide sa cible à chaque activation, l'append déplace le bloc vivant
        character_object.getCharacteristics().setCountersParent( this );
        this._characteristics_dom = SERVICE.DOM.createElement( "div", { class: "characteristic-container" } );
        character_object.getCharacteristics().computeCharacteristicWindow( this._characteristics_dom );
    },

    _buildContent: function ( character_object ) {
        var history          = character_object.getLevelHistory();
        var ancestry_history = character_object.getAncestryHistory();
        var race_name        = character_object.getRace().getValue();
        this._selected_class = this._selected_class || character_object.getClasses().getHighestClassName();

        // En tête : les caractéristiques
        SERVICE.DOM.addElementTo( this._characteristics_dom, this.content_dom_element_target );

        // Barre de progression : total PV (détail en popup au clic) + options
        // de classe, un conteneur unique porte la barre
        this._buildClassBar( character_object, history.getSize() > 0 );

        // Une section par niveau de l'historique, y compris desactive :
        // la section desactivee porte l'interrupteur de re-activation. Les
        // sections d'ascendance s'intercalent AU niveau de leur palier,
        // avant la section de classe du meme niveau (l'ascendance se choisit
        // avant la classe). Sans section de classe (ascendance posee, aucune
        // classe), les sections d'ascendance se rendent seules
        var ancestry_index = 0;
        for ( var h = 0, _size_h = history.getSize(); h < _size_h; h++ ) {
            var entry = history.getContent( h );
            while ( ancestry_index < ancestry_history.getSize()
                    && parseInt( ancestry_history.getContent( ancestry_index ).getUUID(), 10 ) <= parseInt( entry.getUUID(), 10 ) ) {
                this._buildAncestrySection( ancestry_history.getContent( ancestry_index ), race_name );
                ancestry_index++;
            }
            // Chaîne de compteurs : ligne → fenêtre (badge de l'onglet),
            // branchée au rendu — les lignes se posent toujours avant que
            // l'entrée ne connaisse la fenêtre
            entry.setLinesCountersParent( this );
            entry.computeHtml();
            SERVICE.DOM.addElementTo( entry.getDomElement(), this.content_dom_element_target );
        }
        for ( ; ancestry_index < ancestry_history.getSize(); ancestry_index++ ) {
            this._buildAncestrySection( ancestry_history.getContent( ancestry_index ), race_name );
        }
    },

    _buildAncestrySection: function ( ancestry_entry, race_name ) {
        ancestry_entry.setLinesCountersParent( this );
        ancestry_entry.computeHtml( race_name );
        SERVICE.DOM.addElementTo( ancestry_entry.getDomElement(), this.content_dom_element_target );
    },

    _buildClassBar: function ( character_object, with_life ) {
        var bar = SERVICE.DOM.createElement( "div", { class: "level-up-class-bar" } );
        if ( with_life ) {
            var life_line = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", {
                    class  : "level-up-life-total health-link",
                    title  : "Détail du calcul",
                    onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__health')"
                } ),
                bar
            );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "level-up-life-total-value" }, "Points de vie : " + character_object.getHealth().getMaxHP() ), life_line );
        }
        this._buildClassSelector( character_object, bar );
        if ( bar.children.length > 0 ) {
            SERVICE.DOM.addElementTo( bar, this.content_dom_element_target );
        }
    },

    _buildClassSelector: function ( character_object, bar ) {
        var classes = character_object.getClasses();
        if ( classes.isEmpty() ) {
            return;
        }
        var selector = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "level-up-class-selector" } ),
            bar
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
