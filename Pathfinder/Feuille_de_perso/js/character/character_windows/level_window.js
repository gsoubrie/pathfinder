"use strict";
CHARACTER.LevelWindow           = function ( window_name, parent_name ) {
    this.initSpecific( window_name, parent_name );
};
CHARACTER.LevelWindow.prototype = {
    initSpecific: WINDOW_V2.ElementFromData.initSpecific,
    
    //********************************************  EVENT LISTENER  **************************************************//
    
    //********************************************  HTML   **************************************************//
    computeHtmlWithData: function ( character_object ) {
        this.content_dom_element_target = SERVICE.DOM.createElement( "div", { class: "level-window" } );
        
        this.computeHtml__life( character_object );
        this.computeHtml__skill( character_object );
        
        SERVICE.DOM.addElementToAfterEmpty( this.content_dom_element_target, this.dom_element_target );
    },
    computeHtml__life  : function ( character_object ) {
        const life_container = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "level-container-life" } ), this.content_dom_element_target );
        const title          = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "level-title" }, "<hr>" ), life_container );
        
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "life-total" }, "Points de vie total : " + character_object.getHealth().getMaxHP() ), life_container );
        
        const table = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "table", { class: "life-table" } ), life_container );
        
        const headerRow = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "tr" ), table );
        
        ["Niv", "Total", "Classe", "Char", "Bonus suppl."].forEach( label => {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "th", {}, label ), headerRow );
        } );
        
        character_object.getLevelHistory().contents.forEach( lvl => {
            const tr = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "tr" ), table );
            
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "td", {}, lvl.getUUID() ), tr );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "td", {}, lvl.life_class + character_object.getCharacteristics().getContentByUUID( CHARACTERISTICS.CON.name ).modifier_value.value ), tr );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "td", {}, lvl.life_class ), tr );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "td", {}, character_object.getCharacteristics().getContentByUUID( CHARACTERISTICS.CON.name ).modifier_value.value ), tr );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "td", {}, lvl.bonus || "" ), tr );
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