"use strict";
/**
 * Scenario : EMPLACEMENTS (suite independante, RESET — placee apres
 * scenario_sorts, avant scenario_save_fichier qui se re-set lui-meme).
 * Les emplacements de sorts quotidiens du Magicien :
 * 1. La grille COMPLETE "Sorts par jour" vit dans le PANNEAU Magicien du
 *    popup de classe (20 niveaux, tours de magie + rangs 1..10, "—" sur
 *    les rangs non ouverts, le rang 10 = 1 des le niveau 19) — et sur
 *    AUCUNE autre classe (Guerrier, le popup se referme par Quitter).
 * 2. Magicien niveau 1, ecole non choisie : l'onglet Sorts porte sa zone
 *    "Emplacements" calculee — Tours de magie 5, Rang 1 = 2, pas de
 *    Rang 2 ; le clic sur la tuile Rang 1 ouvre le DETAIL en popup (total
 *    "2 emplacements", une source "Magicien (niveau 1)"), refermee par son uuid.
 * 3. L'ecole du mentalisme validee par le geste reel (Progression) : le
 *    cursus ajoute +1 par rang accessible et +1 tour de magie — la
 *    re-activation de l'onglet recalcule (Tours 6, Rang 1 = 3), le detail
 *    du rang 1 porte les DEUX sources, celle du cursus lue en "+1", le
 *    detail des tours porte "6 tours de magie".
 * 4. Quatre prises de niveau (gestes reels) : niveau 5 — Rang 1 et 2 = 4,
 *    Rang 3 = 3 (2 + cursus), pas de Rang 4 ; le passage a l'ecole de la
 *    theorie magique unifiee (sans cursus) ramene la grille NUE :
 *    Tours 5, Rangs 1|2|3 = 3|3|2, le detail du rang 3 ne porte que sa
 *    source de classe.
 */

function TEST_emploCloseSlotsPopup( rank ) {
    CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": "character__spell_slots__" + rank } );
}

function TEST_emploTile( rank ) {
    return document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.SpellsWindow.NAME + "'] .spells-slot-tile[data-rank='" + rank + "']" );
}

function TEST_emploSlotHelp( dom_element ) {
    if ( !dom_element ) {
        return "element absent";
    }
    return "[label " + dom_element.querySelector( ".spells-slot-tile-label" ).textContent + " = " + dom_element.querySelector( ".spells-slot-tile-value" ).textContent + "]";
}

function TEST_emploSchoolOption( school_name ) {
    return document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-row[data-slot-key='ecole_arcanique'] .single-select-option[data-value=\"" + school_name + "\"]" );
}

TEST.RUNNER.register( "[EMPLACEMENTS] popup classe Magicien = grille Sorts par jour complete", function () {
    TEST.RESET.sheet();
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Un nouveau personnage devrait etre instancie apres le reset" );
    if ( !_character ) {
        return;
    }
    TEST_openRacePopup();
    return TEST.clickTab( "body > .popup", "Elfe" ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        TEST_openClassPopup();
        return TEST.clickTab( "body > .popup", "Magicien" );
    } ).then( function () {
        let _pane = document.querySelector( "body > .popup .gs-tab-pane[data-name='Magicien']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Magicien devrait exister dans le popup de classe" );
        if ( !_pane ) {
            return null;
        }
        let _section = _pane.querySelector( ".class-spell-slots" );
        TEST.ASSERT.notNull( _section, "La section Sorts par jour devrait etre rendue pour Magicien" );
        if ( !_section ) {
            return null;
        }
        TEST.ASSERT.equal( _section.querySelector( ".class-section-title" ).textContent, "Sorts par jour", "Le titre de la section devrait se lire, obtenu : [" + _section.querySelector( ".class-section-title" ).textContent + "]" );
        let _grid = _section.querySelector( ".class-spell-slots-grid" );
        TEST.ASSERT.notNull( _grid, "La grille devrait etre rendue dans sa section, rien qu'elle" );
        if ( !_grid ) {
            return null;
        }
        // Entete + 20 niveaux, 12 cellules par ligne, colonnes auto-placees
        // dans l'ordre du DOM : la rangee du niveau 5 part a l'index 12 * 6
        TEST.ASSERT.equal( _grid.children.length, 12 * 21, "La grille devrait porter entete + 20 lignes de 12 cellules, obtenu : " + _grid.children.length );
        let _level_cells = _grid.querySelectorAll( ".class-spell-slots-level" );
        TEST.ASSERT.equal( _level_cells.length, 20, "Chaque niveau devrait poser sa cellule de colonne, obtenu : " + _level_cells.length );
        let _row_start = 12 * ( 4 + 1 );
        let _row_cells = [];
        for ( let _i = _row_start; _i < _row_start + 12; _i++ ) {
            _row_cells.push( _grid.children[ _i ].textContent );
        }
        TEST.ASSERT.equal( _row_cells.join( "|" ), "5|5|3|3|2|—|—|—|—|—|—|—", "La rangee du niveau 5 devrait croiser la carte ecrite a la main, obtenu : " + _row_cells.join( "|" ) );
        let _rank_10_cell = _grid.children[ 12 * ( 18 + 1 ) + 11 ];
        TEST.ASSERT.equal( _rank_10_cell.textContent, "1", "Le rang 10 du niveau 19 devrait valoir 1 seul emplacement, obtenu : [" + _rank_10_cell.textContent + "]" );
        TEST.ASSERT.equal( _grid.children[ 12 * ( 9 + 1 ) + 11 ].textContent, "—", "Le rang 10 devrait rester ferme au niveau 10, obtenu : [" + _grid.children[ 12 * ( 9 + 1 ) + 11 ].textContent + "]" );
        TEST.ASSERT.notNull( _section.querySelector( ".class-spell-slots-note" ), "La note du rang 10 devrait se lire sous la grille" );
        return TEST.clickTab( "body > .popup", "Guerrier" ).then( function () {
            let _guerrier_pane = document.querySelector( "body > .popup .gs-tab-pane[data-name='Guerrier']" );
            TEST.ASSERT.notNull( _guerrier_pane, "Le panneau Guerrier devrait exister dans le popup" );
            if ( !_guerrier_pane ) {
                return;
            }
            TEST.ASSERT.isNull( _guerrier_pane.querySelector( ".class-spell-slots" ), "Aucune section Sorts par jour ne devrait vivre sur une classe sans incantation" );
            let _cancel = document.querySelector( "body > .popup .popup-up-cancel" );
            if ( _cancel ) {
                _cancel.click();
            }
        } );
    } );
} );

TEST.RUNNER.register( "[EMPLACEMENTS] Magicien 1 sans école = tours 5, rang 1 = 2, détail en popup", function () {
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    TEST.ASSERT.equal( _character.getClasses().getLevel(), 0, "Pre-condition : aucune classe posee, obtenu : " + _character.getClasses().getLevel() );
    TEST_openClassPopup();
    return TEST.clickTab( "body > .popup", "Magicien" ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        TEST.ASSERT.equal( _character.getClasses().getLevel(), 1, "Magicien niveau 1 devrait etre pose par la validation du popup, obtenu : " + _character.getClasses().getLevel() );
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.SpellsWindow.NAME );
    } ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _pane = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.SpellsWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Sorts devrait exister" );
        if ( !_pane ) {
            return null;
        }
        let _area = _pane.querySelector( ".spells-slots-area" );
        TEST.ASSERT.notNull( _area, "La zone Emplacements devrait etre rendue pour un Magicien pose" );
        if ( !_area ) {
            return null;
        }
        TEST.ASSERT.equal( _area.querySelector( ".spells-slots-title" ).textContent, "Emplacements", "La zone devrait porter son titre, obtenu : [" + _area.querySelector( ".spells-slots-title" ).textContent + "]" );
        let _tours_tile = TEST_emploTile( 0 );
        TEST.ASSERT.notNull( _tours_tile, "La tuile Tours de magie devrait etre rendue" );
        TEST.ASSERT.equal( _tours_tile ? _tours_tile.querySelector( ".spells-slot-tile-value" ).textContent : null, "5", "Les tours de magie du Magicien niveau 1 devraient valoir 5, obtenu : " + TEST_emploSlotHelp( _tours_tile ) );
        let _rank_1_tile = TEST_emploTile( 1 );
        TEST.ASSERT.notNull( _rank_1_tile, "La tuile Rang 1 devrait etre rendue" );
        TEST.ASSERT.equal( _rank_1_tile ? _rank_1_tile.querySelector( ".spells-slot-tile-value" ).textContent : null, "2", "Le rang 1 du Magicien niveau 1 devrait valoir 2, obtenu : " + TEST_emploSlotHelp( _rank_1_tile ) );
        TEST.ASSERT.isNull( TEST_emploTile( 2 ), "Aucune tuile Rang 2 ne devrait vivre au niveau 1" );
        TEST.ASSERT.equal( _area.querySelectorAll( ".spells-slot-tile" ).length, 2, "La zone devrait porter exactement 2 tuiles, obtenu : " + _area.querySelectorAll( ".spells-slot-tile" ).length );
        // Le clic sur la tuile ouvre le detail : total + une source de classe
        _rank_1_tile.click();
        let _overlay = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
        TEST.ASSERT.notNull( _overlay, "La popup d'emplacements devrait etre ouverte (overlay RUNNING)" );
        if ( _overlay ) {
            TEST.ASSERT.equal( _overlay.querySelector( ".popup-title" ).textContent, "Rang 1", "La popup devrait porter le rang cliqu\u00e9, obtenu : [" + _overlay.querySelector( ".popup-title" ).textContent + "]" );
            TEST.ASSERT.equal( _overlay.querySelector( ".popup-slots-count" ).textContent, "2 emplacements", "Le total du rang 1 devrait se lire, obtenu : [" + _overlay.querySelector( ".popup-slots-count" ).textContent + "]" );
            let _sources = _overlay.querySelectorAll( ".popup-slots-source" );
            TEST.ASSERT.equal( _sources.length, 1, "Le rang 1 sans ecole devrait porter SA source de classe, obtenu : " + _sources.length );
            if ( _sources.length === 1 ) {
                TEST.ASSERT.ok( _sources[ 0 ].textContent.indexOf( "Magicien (niveau 1)" ) !== -1, "La source devrait citer la classe et son niveau, obtenu : [" + _sources[ 0 ].textContent + "]" );
                TEST.ASSERT.ok( _sources[ 0 ].querySelector( ".popup-slots-source-value" ) && _sources[ 0 ].querySelector( ".popup-slots-source-value" ).textContent === "2", "La valeur de la source devrait se lire en colonne, obtenu : [" + _sources[ 0 ].textContent + "]" );
            }
            TEST_emploCloseSlotsPopup( 1 );
            TEST.ASSERT.equal( _overlay.getAttribute( "data-current-phase" ), "HIDDEN_TO_STRING", "La popup devrait passer en phase masquee apres fermeture" );
        }
    } );
} );

TEST.RUNNER.register( "[EMPLACEMENTS] école mentalisme = cursus +1 partout, détail deux sources", function () {
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    TEST.ASSERT.equal( _character.getClasses().getLevel(), 1, "Pre-condition : Magicien niveau 1, obtenu : " + _character.getClasses().getLevel() );
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _school_row = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-row[data-slot-key='ecole_arcanique']" );
        TEST.ASSERT.notNull( _school_row, "La ligne ecole arcanique devrait etre rendue dans Progression" );
        if ( !_school_row ) {
            return null;
        }
        let _option = TEST_emploSchoolOption( "École du mentalisme" );
        TEST.ASSERT.notNull( _option, "L'option École du mentalisme devrait exister dans le sélecteur" );
        if ( !_option ) {
            return null;
        }
        _option.click();
        return TEST.wait();
    } ).then( function () {
        let _entry = _character.getLevelHistory().getContentByUUID( "1" );
        let _school_line = _entry ? _entry.getContentByUUID( "1__ecole_arcanique" ) : null;
        TEST.ASSERT.ok( _school_line && _school_line.isActive(), "Choisir l'ecole devrait valider la ligne, obtenu : " + ( _school_line ? _school_line.isActive() : "ligne absente" ) );
        // Le retour a l'onglet Sorts declenche le recalcul sur l'etat frais
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.SpellsWindow.NAME );
    } ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _tours_tile = TEST_emploTile( 0 );
        TEST.ASSERT.equal( _tours_tile ? _tours_tile.querySelector( ".spells-slot-tile-value" ).textContent : null, "6", "Le cursus ajoute un tour de magie (6), obtenu : " + TEST_emploSlotHelp( _tours_tile ) );
        let _rank_1_tile = TEST_emploTile( 1 );
        TEST.ASSERT.equal( _rank_1_tile ? _rank_1_tile.querySelector( ".spells-slot-tile-value" ).textContent : null, "3", "Le cursus ajoute un emplacement de rang 1 (3), obtenu : " + TEST_emploSlotHelp( _rank_1_tile ) );
        if ( !_rank_1_tile ) {
            return null;
        }
        _rank_1_tile.click();
        let _overlay = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
        TEST.ASSERT.notNull( _overlay, "La popup d'emplacements du rang 1 devrait etre ouverte" );
        if ( !_overlay ) {
            return null;
        }
        TEST.ASSERT.equal( _overlay.querySelector( ".popup-slots-count" ).textContent, "3 emplacements", "Le total du rang 1 devrait valoir 3, obtenu : [" + _overlay.querySelector( ".popup-slots-count" ).textContent + "]" );
        let _sources = _overlay.querySelectorAll( ".popup-slots-source" );
        TEST.ASSERT.equal( _sources.length, 2, "Le detail devrait porter la classe ET le cursus, obtenu : " + _sources.length );
        let _curriculum_source_text = "";
        for ( let _i = 0, _size_i = _sources.length; _i < _size_i; _i++ ) {
            if ( _sources[ _i ].textContent.indexOf( "École du mentalisme (cursus)" ) !== -1 ) {
                _curriculum_source_text = _sources[ _i ].querySelector( ".popup-slots-source-value" ).textContent;
            }
        }
        TEST.ASSERT.equal( _curriculum_source_text, "+1", "La source du cursus devrait porter sa valeur en +1, obtenu : [" + _curriculum_source_text + "]" );
        TEST_emploCloseSlotsPopup( 1 );
        // Le detail des tours de magie suit le meme contrat, unite comprise
        let _tours_tile_reopen = TEST_emploTile( 0 );
        if ( !_tours_tile_reopen ) {
            return null;
        }
        _tours_tile_reopen.click();
        let _tours_overlay = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
        TEST.ASSERT.notNull( _tours_overlay, "La popup des tours de magie devrait etre ouverte" );
        if ( _tours_overlay ) {
            TEST.ASSERT.equal( _tours_overlay.querySelector( ".popup-slots-count" ).textContent, "6 tours de magie", "Le total des tours devrait se lire avec son unite, obtenu : [" + _tours_overlay.querySelector( ".popup-slots-count" ).textContent + "]" );
            TEST_emploCloseSlotsPopup( 0 );
        }
    } );
} );

TEST.RUNNER.register( "[EMPLACEMENTS] niveau 5 = rangs ouverts + cursus, école unifiée = grille nue", function () {
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    TEST.ASSERT.equal( _character.getClasses().getLevel(), 1, "Pre-condition : Magicien niveau 1, obtenu : " + _character.getClasses().getLevel() );
    let _takes_promise                 = Promise.resolve();
    for ( let _take = 0; _take < 4; _take++ ) {
        _takes_promise = _takes_promise.then( function () {
            let _take_button = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-class-option[data-name='Magicien'] .level-up-class-option-take" );
            if ( !_take_button ) {
                return null;
            }
            _take_button.click();
            return TEST.wait();
        } );
    }
    return _takes_promise.then( function () {
        TEST.ASSERT.equal( _character.getClasses().getLevel(), 5, "Les quatre prises devraient mener Magicien au niveau 5, obtenu : " + _character.getClasses().getLevel() );
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.SpellsWindow.NAME );
    } ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _pane = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.SpellsWindow.NAME + "']" );
        TEST.ASSERT.equal( TEST_emploTile( 0 ) ? TEST_emploTile( 0 ).querySelector( ".spells-slot-tile-value" ).textContent : null, "6", "Au niveau 5, les tours de magie devraient valoir 6 (5 + cursus), obtenu : " + TEST_emploSlotHelp( TEST_emploTile( 0 ) ) );
        TEST.ASSERT.equal( TEST_emploTile( 1 ) ? TEST_emploTile( 1 ).querySelector( ".spells-slot-tile-value" ).textContent : null, "4", "Au niveau 5, le rang 1 devrait valoir 4 (3 + cursus), obtenu : " + TEST_emploSlotHelp( TEST_emploTile( 1 ) ) );
        TEST.ASSERT.equal( TEST_emploTile( 2 ) ? TEST_emploTile( 2 ).querySelector( ".spells-slot-tile-value" ).textContent : null, "4", "Au niveau 5, le rang 2 devrait valoir 4 (3 + cursus), obtenu : " + TEST_emploSlotHelp( TEST_emploTile( 2 ) ) );
        TEST.ASSERT.equal( TEST_emploTile( 3 ) ? TEST_emploTile( 3 ).querySelector( ".spells-slot-tile-value" ).textContent : null, "3", "Au niveau 5, le rang 3 devrait valoir 3 (2 + cursus), obtenu : " + TEST_emploSlotHelp( TEST_emploTile( 3 ) ) );
        TEST.ASSERT.isNull( TEST_emploTile( 4 ), "Aucune tuile Rang 4 ne devrait vivre au niveau 5" );
        TEST.ASSERT.equal( _pane ? _pane.querySelectorAll( ".spells-slot-tile" ).length : -1, 4, "La zone devrait porter tours + rangs 1 a 3, obtenu : " + ( _pane ? _pane.querySelectorAll( ".spells-slot-tile" ).length : -1 ) );
        // L'ecole de la theorie magique unifiee n'a pas de cursus : la grille
        // redevient NUE apres le vrai geste de choix
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME );
    } ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _option = TEST_emploSchoolOption( "École de la théorie magique unifiée" );
        TEST.ASSERT.notNull( _option, "L'option École de la théorie magique unifiée devrait exister dans le sélecteur" );
        if ( !_option ) {
            return null;
        }
        _option.click();
        return TEST.wait();
    } ).then( function () {
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.SpellsWindow.NAME );
    } ).then( function () {
        return TEST.wait();
    } ).then( function () {
        TEST.ASSERT.equal( TEST_emploTile( 0 ) ? TEST_emploTile( 0 ).querySelector( ".spells-slot-tile-value" ).textContent : null, "5", "Sans cursus, les tours de magie retombent a 5, obtenu : " + TEST_emploSlotHelp( TEST_emploTile( 0 ) ) );
        TEST.ASSERT.equal( TEST_emploTile( 1 ) ? TEST_emploTile( 1 ).querySelector( ".spells-slot-tile-value" ).textContent : null, "3", "Sans cursus, le rang 1 retombe a 3, obtenu : " + TEST_emploSlotHelp( TEST_emploTile( 1 ) ) );
        TEST.ASSERT.equal( TEST_emploTile( 2 ) ? TEST_emploTile( 2 ).querySelector( ".spells-slot-tile-value" ).textContent : null, "3", "Sans cursus, le rang 2 retombe a 3, obtenu : " + TEST_emploSlotHelp( TEST_emploTile( 2 ) ) );
        TEST.ASSERT.equal( TEST_emploTile( 3 ) ? TEST_emploTile( 3 ).querySelector( ".spells-slot-tile-value" ).textContent : null, "2", "Sans cursus, le rang 3 retombe a 2, obtenu : " + TEST_emploSlotHelp( TEST_emploTile( 3 ) ) );
        let _rank_3_tile = TEST_emploTile( 3 );
        if ( !_rank_3_tile ) {
            return null;
        }
        _rank_3_tile.click();
        let _overlay = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
        TEST.ASSERT.notNull( _overlay, "La popup d'emplacements du rang 3 devrait etre ouverte" );
        if ( _overlay ) {
            TEST.ASSERT.equal( _overlay.querySelector( ".popup-slots-count" ).textContent, "2 emplacements", "Le total du rang 3 devrait valoir 2, obtenu : [" + _overlay.querySelector( ".popup-slots-count" ).textContent + "]" );
            TEST.ASSERT.equal( _overlay.querySelectorAll( ".popup-slots-source" ).length, 1, "Sans cursus, le detail devrait ne porter que la classe, obtenu : " + _overlay.querySelectorAll( ".popup-slots-source" ).length );
            TEST_emploCloseSlotsPopup( 3 );
        }
    } );
} );
