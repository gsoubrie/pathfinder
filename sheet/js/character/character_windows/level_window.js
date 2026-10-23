"use strict";
/**
 * @class CHARACTER.LevelWindow
 * @extends WINDOW_V2.ElementFromData
 */
CHARACTER.LevelWindow           = function ( parent_name ) {
    this.initSpecific( CHARACTER.LevelWindow.NAME, parent_name, "Niveau" );
};
CHARACTER.LevelWindow.prototype = {
    initSpecific: WINDOW_V2.ElementFromData.initSpecific,

    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "click_on__window_navigation__done":
                if ( this.name === params[ "window_name" ] ) {
                    this._rebuildContent();
                }
                break;
            case "event__level__toggle":
                this._updateAfterToggle( params[ "param__level_name" ] );
                break;
        }
        WINDOW_V2.Element.prototype.doActionAfter.call( this, event_name, params );
    },

    //********************************************  HTML   **************************************************//
    computeHtmlWithData: function ( character_object ) {
        this.content_dom_element_target = SERVICE.DOM.createElement( "div", { class: "level-window" } );
        
        this.computeHtml__life( character_object );
        this.computeHtml__skill( character_object );
        
        SERVICE.DOM.addElementToAfterEmpty( this.content_dom_element_target, this.dom_element_target );
    },
    _rebuildContent    : function () {
        let _character = CONTROLLER.Character.current_character;
        SERVICE.DOM.empty( this.content_dom_element_target );
        this.computeHtml__life( _character );
        this.computeHtml__skill( _character );
        SERVICE.DOM.addElementToAfterEmpty( this.content_dom_element_target, this.dom_element_target );
    },
    _updateAfterToggle: function ( level_name ) {
        let _character = CONTROLLER.Character.current_character;
        let _entry     = _character.getLevelHistory().getContentByUUID( level_name );
        if ( !_entry ) {
            return;
        }
        let _row       = this.content_dom_element_target.querySelector( ".life-table tr[data-level-name='" + level_name + "']" );
        if ( _row ) {
            if ( _entry.isEnabled() ) {
                _row.classList.remove( "disabled" );
            }
            else {
                _row.classList.add( "disabled" );
            }
            let _toggle = _row.querySelector( ".level-toggle" );
            if ( _toggle ) {
                _toggle.textContent = _entry.isEnabled() ? "Activé" : "Désactivé";
            }
        }
        let _total = this.content_dom_element_target.querySelector( ".life-total" );
        if ( _total ) {
            _total.textContent = "Points de vie total : " + _character.getHealth().getMaxHP();
        }
    },
    computeHtml__life  : function ( character_object ) {
        const life_container = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "level-container-life" } ), this.content_dom_element_target );
        const title          = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "level-title" }, "<hr>" ), life_container );

        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "life-total" }, "Points de vie total : " + character_object.getHealth().getMaxHP() ), life_container );

        const table = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "table", { class: "life-table" } ), life_container );

        const headerRow = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "tr" ), table );

        ["Niv", "Total", "Classe", "Char", "Bonus suppl.", "Actif"].forEach( label => {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "th", {}, label ), headerRow );
        } );

        character_object.getLevelHistory().contents.forEach( lvl => {
            const tr = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "tr", {
                class           : lvl.isEnabled() ? "" : "disabled",
                "data-level-name": lvl.getUUID()
            } ), table );

            let _level_cell = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "td" ), tr );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "level-class-icon" }, CLASSES.ICONS[ lvl.getClassName() ] || "⚔" ), _level_cell );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {}, lvl.getUUID() ), _level_cell );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "td", {}, lvl.life_class + character_object.getCharacteristics().getContentByUUID( CHARACTERISTICS.CON.key ).modifier_value.value ), tr );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "td", {}, lvl.life_class ), tr );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "td", {}, character_object.getCharacteristics().getContentByUUID( CHARACTERISTICS.CON.key ).modifier_value.value ), tr );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "td", {}, lvl.bonus || "" ), tr );
            let _toggle_cell = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "td" ), tr );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
                class  : "level-toggle",
                onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__level__toggle',{'param__level_name':'" + lvl.getUUID() + "'})"
            }, lvl.isEnabled() ? "Activé" : "Désactivé" ), _toggle_cell );
        } );

        SERVICE.DOM.addElementToAfterEmpty( this.content_dom_element_target, this.dom_element_target );
    },
    computeHtml__skill : function ( character_object ) {
        const container = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "level-container-skill" } ), this.content_dom_element_target );
        const title     = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "skill-title" }, "<hr>" ), container );
        
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "" }, "Compéténce : " ), container );
        
        const table = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "table", { class: "skill-table" } ), container );
        
        const headerRow = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "tr" ), table );
        
        ["Niv", "Origine", "type","Value"].forEach( label => {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "th", {}, label ), headerRow );
        } );
        for ( let i = 0, _size_i = character_object.getLevelHistory().getSize(); i < _size_i; i++ ) {
            let current = character_object.getLevelHistory().getContent( i );
            if ( !current.skills ){
                continue;
            }
            for ( let j = 0, _size_j = current.skills.getSize(); j < _size_j; j++ ) {
                /** @type {CHARACTER.LevelHistorySkill} */
                let current_skill = current.skills.getContent( j );
                current_skill.computeHtml();
                SERVICE.DOM.addElementTo( current_skill.dom_element, table );
            }
        }
        SERVICE.DOM.addElementToAfterEmpty( this.content_dom_element_target, this.dom_element_target );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.LevelWindow, WINDOW_V2.ElementFromData );
CHARACTER.LevelWindow.NAME = "level_sheet";
//┌─────────────────────────────── Points de Vie ───────────────────────────────┐
//│ Points de Vie :      94                                                     │
//├──────┬────────┬────────┬────────┬───────────────────────────────────────────┬
//│ Nv   │ Total  │ Classe │ CON    │ Bonus supplémentaires                     │
//├──────┼────────┼────────┼────────┼───────────────────────────────────────────┼
//│  1   │  15    │  10    │  +3    │ +2 (Toughness)            [−][+]          │
//│  2   │  13    │  10    │  +3    │                            [+]            │
//│  3   │  13    │  10    │  +3    │                            [+]            │
//│  4   │  14    │  10    │  +3    │ +1 (Bénédiction divine)   [−][+]          │
//│  5   │  13    │  10    │  +3    │                            [+]            │
//│  6   │  13    │  10    │  +3    │                            [+]            │
//│  7   │  13    │  10    │  +3    │                            [+]            │
//├──────┴────────┴────────┴────────┴───────────────────────────────────────────┤
//│ Bonus hors niveau : +1 (Anneau de vitalité)                  [−]            │
//│                                                              [+]            │
// ──────────────────────────────────────────────────────────────────────────────