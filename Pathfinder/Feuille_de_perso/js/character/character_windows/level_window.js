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
        
        const title = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "level-title" }, "<hr>" ), this.content_dom_element_target );
        
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "life-total" }, "Points de Vie : " + character_object.getLevelHistory().getTotalLife() ), this.content_dom_element_target );
        
        const table = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "table", { class: "life-table" } ), this.content_dom_element_target );
        
        const headerRow = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "tr" ), table );
        
        ["Niv", "Total", "Classe", "Char", "Bonus suppl."].forEach( label => {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "th", {}, label ), headerRow );
        } );
        
        character_object.getLevelHistory().contents.forEach( lvl => {
            const tr = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "tr" ), table );
            
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "td", {}, lvl.getUUID() ), tr );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "td", {}, lvl.life_class  + character_object.getCharacteristics().getContentByUUID(CHARACTERISTICS.CON.name).modifier_value.value), tr );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "td", {}, lvl.life_class ), tr );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "td", {}, character_object.getCharacteristics().getContentByUUID(CHARACTERISTICS.CON.name).modifier_value.value), tr );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "td", {}, lvl.bonus || "" ), tr );
        } );
        
        // ---- Bonus hors niveau ----
        //const outsideBonus = character_object.getLevelHistory().getOutsideBonus
        //                     ? character_object.getLevelHistory().getOutsideBonus()
        //                     : [];
        //
        //if ( outsideBonus.length > 0 ) {
        //    const bonusContainer = SERVICE.DOM.addElementTo(
        //        SERVICE.DOM.createElement( "div", { class: "bonus-outside" } ),
        //        this.content_dom_element_target
        //    );
        //
        //    outsideBonus.forEach( b => {
        //        SERVICE.DOM.addElementTo(
        //            SERVICE.DOM.createElement(
        //                "div",
        //                { class: "bonus-line" },
        //                (b.value ? ("+" + b.value) : "") + " " + (b.label || "")
        //            ),
        //            bonusContainer
        //        );
        //    } );
        //}
        
        // ---- Ajout final dans la fenêtre ----
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
