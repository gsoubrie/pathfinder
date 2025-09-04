"use strict";
CHARACTER.LevelWindow           = function ( window_name, parent_name ) {
    this.initSpecific( window_name, parent_name );
};
CHARACTER.LevelWindow.prototype = {
    initSpecific: WINDOW_V2.ElementFromData.initSpecific,
    
    //********************************************  EVENT LISTENER  **************************************************//
    
    //********************************************  HTML   **************************************************//
    computeHtmlWithData: function ( character_object ) {
        this.content_dom_element_target = new SERVICE.DOM.createElement( "div", { class: "title" } );
        console.log("GSOU", "[LevelWindow - computeHtmlWithData]", character_object );
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
