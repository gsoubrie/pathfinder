"use strict";
/**
 * Scenario : HISTORIQUE A JETONS (bug « Manoeuvre »)
 * L'historique Manoeuvre porte characteristics_bonus { number: 2,
 * choice: [FOR, CON, FRE] } : semantique PF2 = on choisit 2 jetons parmi
 * les 3 — chaque carac listée (FOR, CON) est posable UNE fois, le FRE est
 * un jeton sur n'importe quelle carac. FOR+CON est donc valide ; CHA+INT
 * ne l'est pas (un seul jeton libre). Avant le fix, on pouvait poser deux
 * libres n'importe ou (CHA+INT).
 * Depart : feuille vide (TEST.RESET.sheet()), race Elfe posee (l'onglet
 * Progression n'est actif qu'avec une ascendance), historique pose par
 * l'evenement reel event__historic__select.
 * 1. Manoeuvre pose → 2 poses restantes, 1 jeton libre ; cellules FOR/CON
 *    marquees data-listedchoice=true et editables, les autres false.
 * 2. FOR posable PUIS CON posable (FOR+CON valide) → 0 pose restante,
 *    jeton libre intact, compteur 0, CHA grisee et son + bloque.
 * 3. Retrait de CON → 1 pose restante, CHA redevient editable ; pose du
 *    libre sur CHA → le + sur INT est bloque (CHA+INT plus posable).
 * 4. Save → relecture en memoire : FOR (jeton liste) et CHA (jeton libre)
 *    consommes sur le bon jeton (restant 0, libre 0), valeurs conservees.
 * 5. Second choix Manoeuvre → historique vide, jetons remis a zero.
 */

function TEST_histoPane() {
    return document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
}

function TEST_histoCell( pane, key ) {
    return pane.querySelector( ".characteristic-line[data-name='" + key + "'] .characteristic-bonus-historic [data-current-phase]" );
}

function TEST_histoMore( pane, key ) {
    return pane.querySelector( ".characteristic-line[data-name='" + key + "'] .characteristic-bonus-historic [data-name='event__more_button']" );
}

function TEST_histoLess( pane, key ) {
    return pane.querySelector( ".characteristic-line[data-name='" + key + "'] .characteristic-bonus-historic [data-name='event__less_button']" );
}

TEST.RUNNER.register( "[HISTOIRE BONUS] Manoeuvre pose → 2 poses restantes + 1 jeton libre, marqueurs de cellules", function () {
    TEST.RESET.sheet();
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Un nouveau personnage devrait etre instancie apres le reset" );
    if ( !_character ) {
        return;
    }
    TEST_openRacePopup();
    return TEST.clickTab( "body > .popup", "Elfe" ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME );
    } ).then( function () {
        let _pane                      = TEST_histoPane();
        TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Progression ouvert" );
        if ( !_pane ) {
            return;
        }
        CONTROLLER.Character.doActionAfter( "event__historic__select", { "param__historic__name": "Manoeuvre" } );
        TEST.ASSERT.equal( _character.getHistoric().getValue(), "Manoeuvre", "L'historique Manoeuvre devrait etre pose, obtenu : [" + _character.getHistoric().getValue() + "]" );
        let _bonus                     = _character.getCharacteristics().getHistoricBonus().bonus;
        TEST.ASSERT.equal( _bonus.getRemaining(), 2, "Manoeuvre devrait porter 2 poses au total (number=2), obtenu : " + _bonus.getRemaining() );
        TEST.ASSERT.equal( _bonus.getFreeNumber(), 1, "Manoeuvre devrait porter 1 jeton libre (le FRE des donnees), obtenu : " + _bonus.getFreeNumber() );
        let _for_cell                  = TEST_histoCell( _pane, "FOR" );
        let _con_cell                  = TEST_histoCell( _pane, "CON" );
        let _cha_cell                  = TEST_histoCell( _pane, "CHA" );
        TEST.ASSERT.notNull( _for_cell, "La cellule Historique de FOR devrait etre rendue" );
        if ( !_for_cell || !_con_cell || !_cha_cell ) {
            return;
        }
        TEST.ASSERT.equal( _for_cell.getAttribute( "data-current-phase" ), GS.OBJECT.CONST.PHASE.SETTINGS_TO_EDIT, "FOR (choix liste) devrait etre editable, obtenu : " + _for_cell.getAttribute( "data-current-phase" ) );
        TEST.ASSERT.equal( _for_cell.dataset.listedchoice, "true", "FOR devrait porter le marqueur listedchoice=true, obtenu : [" + _for_cell.dataset.listedchoice + "]" );
        TEST.ASSERT.equal( _con_cell.dataset.listedchoice, "true", "CON devrait porter le marqueur listedchoice=true, obtenu : [" + _con_cell.dataset.listedchoice + "]" );
        TEST.ASSERT.equal( _cha_cell.getAttribute( "data-current-phase" ), GS.OBJECT.CONST.PHASE.SETTINGS_TO_EDIT, "CHA (jeton libre) devrait etre editable, obtenu : " + _cha_cell.getAttribute( "data-current-phase" ) );
        TEST.ASSERT.equal( _cha_cell.dataset.listedchoice, "false", "CHA devrait porter le marqueur listedchoice=false, obtenu : [" + _cha_cell.dataset.listedchoice + "]" );
    } );
} );

TEST.RUNNER.register( "[HISTOIRE BONUS] FOR puis CON posables (FOR+CON valide) → plus rien à placer, CHA grisée et bloquée", function () {
    let _character                     = CONTROLLER.Character.current_character;
    let _pane                          = TEST_histoPane();
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Progression ouvert" );
    if ( !_pane ) {
        return;
    }
    let _characteristics               = _character.getCharacteristics();
    let _bonus                         = _characteristics.getHistoricBonus().bonus;
    let _for                           = _characteristics.getContentByUUID( "FOR" );
    let _con                           = _characteristics.getContentByUUID( "CON" );
    let _cha                           = _characteristics.getContentByUUID( "CHA" );
    let _for_more                      = TEST_histoMore( _pane, "FOR" );
    TEST.ASSERT.notNull( _for_more, "Pre-condition : le + de la colonne Historique de FOR devrait etre rendu" );
    if ( !_for_more ) {
        return;
    }
    _for_more.click();
    TEST.ASSERT.equal( _for.historic_bonus.getValue(), 2, "Le boost devrait etre pose sur FOR (+2), obtenu : " + _for.historic_bonus.getValue() );
    TEST.ASSERT.equal( _bonus.getRemaining(), 1, "Une pose devrait rester, obtenu : " + _bonus.getRemaining() );
    TEST.ASSERT.equal( _con.historic_bonus.getCurrentPhase(), GS.OBJECT.CONST.PHASE.SETTINGS_TO_EDIT, "CON devrait rester editable apres la pose sur FOR (jeton propre), obtenu : " + _con.historic_bonus.getCurrentPhase() );
    // FOR+CON : le deuxieme jeton listé se pose aussi
    let _con_more                      = TEST_histoMore( _pane, "CON" );
    TEST.ASSERT.notNull( _con_more, "Le + de la colonne Historique de CON devrait etre rendu" );
    if ( _con_more ) {
        _con_more.click();
    }
    TEST.ASSERT.equal( _con.historic_bonus.getValue(), 2, "Le boost devrait etre pose sur CON (+2) : FOR+CON est valide, obtenu : " + _con.historic_bonus.getValue() );
    TEST.ASSERT.equal( _bonus.getRemaining(), 0, "Les 2 poses devraient etre consommees, obtenu : " + _bonus.getRemaining() );
    TEST.ASSERT.equal( _bonus.getFreeNumber(), 1, "Le jeton libre devrait etre intact (FOR et CON ont leur propre jeton), obtenu : " + _bonus.getFreeNumber() );
    TEST.ASSERT.equal( _characteristics.getHistoricBonus().getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ), 0, "Le compteur warning de l'historique devrait etre a 0 (plus rien a placer), obtenu : " + _characteristics.getHistoricBonus().getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ) );
    TEST.ASSERT.equal( _cha.historic_bonus.getCurrentPhase(), GS.OBJECT.CONST.PHASE.SETTINGS_EDITION_FULL, "CHA (0 pose restante) devrait passer EDITION_FULL (grisee), obtenu : " + _cha.historic_bonus.getCurrentPhase() );
    let _cha_more                      = TEST_histoMore( _pane, "CHA" );
    if ( _cha_more ) {
        _cha_more.click();
    }
    TEST.ASSERT.equal( _cha.historic_bonus.getValue(), 0, "Le + bloque ne devrait rien poser sur CHA, obtenu : " + _cha.historic_bonus.getValue() );
} );

TEST.RUNNER.register( "[HISTOIRE BONUS] retrait de CON → CHA redevient éditable ; pose du libre sur CHA, le + sur INT est bloqué", function () {
    let _character                     = CONTROLLER.Character.current_character;
    let _pane                          = TEST_histoPane();
    if ( !_pane ) {
        return;
    }
    let _characteristics               = _character.getCharacteristics();
    let _bonus                         = _characteristics.getHistoricBonus().bonus;
    let _con                           = _characteristics.getContentByUUID( "CON" );
    let _cha                           = _characteristics.getContentByUUID( "CHA" );
    let _int                           = _characteristics.getContentByUUID( "INT" );
    let _con_less                      = TEST_histoLess( _pane, "CON" );
    TEST.ASSERT.notNull( _con_less, "Pre-condition : le - de la colonne Historique de CON devrait etre rendu" );
    if ( !_con_less ) {
        return;
    }
    _con_less.click();
    TEST.ASSERT.equal( _con.historic_bonus.getValue(), 0, "Le retrait devrait rendre la cellule CON a 0, obtenu : " + _con.historic_bonus.getValue() );
    TEST.ASSERT.equal( _bonus.getRemaining(), 1, "Une pose devrait etre rendue, obtenu : " + _bonus.getRemaining() );
    TEST.ASSERT.equal( _cha.historic_bonus.getCurrentPhase(), GS.OBJECT.CONST.PHASE.SETTINGS_TO_EDIT, "CHA devrait redevenir TO_EDIT (pose restante + jeton libre), obtenu : " + _cha.historic_bonus.getCurrentPhase() );
    let _cha_more                      = TEST_histoMore( _pane, "CHA" );
    if ( _cha_more ) {
        _cha_more.click();
    }
    TEST.ASSERT.equal( _cha.historic_bonus.getValue(), 2, "Le jeton libre devrait se poser sur CHA (+2), obtenu : " + _cha.historic_bonus.getValue() );
    TEST.ASSERT.equal( _bonus.getRemaining(), 0, "Les 2 poses devraient etre consommees (FOR + CHA), obtenu : " + _bonus.getRemaining() );
    TEST.ASSERT.equal( _bonus.getFreeNumber(), 0, "Le jeton libre devrait etre consomme, obtenu : " + _bonus.getFreeNumber() );
    // Regression : avec le seul jeton libre pose, INT n'est plus posable
    let _int_more                      = TEST_histoMore( _pane, "INT" );
    TEST.ASSERT.notNull( _int_more, "Le + de la colonne Historique de INT devrait exister (grise par CSS, le clic JS passe quand meme)" );
    if ( _int_more ) {
        _int_more.click();
    }
    TEST.ASSERT.equal( _int.historic_bonus.getValue(), 0, "Le + bloque ne devrait poser aucun boost sur INT (un seul jeton libre), obtenu : " + _int.historic_bonus.getValue() );
    TEST.ASSERT.equal( _int.historic_bonus.getCurrentPhase(), GS.OBJECT.CONST.PHASE.SETTINGS_EDITION_FULL, "INT devrait rester EDITION_FULL, obtenu : " + _int.historic_bonus.getCurrentPhase() );
} );

TEST.RUNNER.register( "[HISTOIRE BONUS][SAVE] relecture : FOR (jeton liste) et CHA (jeton libre) consommes sur le bon jeton", function () {
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.equal( _character.getHistoric().getValue(), "Manoeuvre", "Pre-condition : Manoeuvre pose" );
    let _saved                         = _character.getDataToSave();
    let _reloaded                      = new CHARACTER.Current();
    _reloaded.updateData( _saved );
    TEST.ASSERT.equal( _reloaded.getHistoric().getValue(), "Manoeuvre", "L'historique devrait survivre a la relecture, obtenu : [" + _reloaded.getHistoric().getValue() + "]" );
    let _bonus                         = _reloaded.getCharacteristics().getHistoricBonus().bonus;
    TEST.ASSERT.equal( _bonus.getRemaining(), 0, "A la relecture, les 2 poses devraient etre consommees (FOR liste + CHA libre), obtenu : " + _bonus.getRemaining() );
    TEST.ASSERT.equal( _bonus.getFreeNumber(), 0, "A la relecture, le jeton libre devrait etre consomme par CHA, obtenu : " + _bonus.getFreeNumber() );
    TEST.ASSERT.equal( _reloaded.getCharacteristics().getContentByUUID( "FOR" ).historic_bonus.getValue(), 2, "Le boost de FOR devrait survivre a la relecture, obtenu : " + _reloaded.getCharacteristics().getContentByUUID( "FOR" ).historic_bonus.getValue() );
    TEST.ASSERT.equal( _reloaded.getCharacteristics().getContentByUUID( "CHA" ).historic_bonus.getValue(), 2, "Le boost de CHA devrait survivre a la relecture, obtenu : " + _reloaded.getCharacteristics().getContentByUUID( "CHA" ).historic_bonus.getValue() );
    TEST.ASSERT.equal( _reloaded.getCharacteristics().getContentByUUID( "CON" ).historic_bonus.getValue(), 0, "CON devrait rester a 0 apres la relecture, obtenu : " + _reloaded.getCharacteristics().getContentByUUID( "CON" ).historic_bonus.getValue() );
} );

TEST.RUNNER.register( "[HISTOIRE BONUS] second choix Manoeuvre → historique vidé, jetons remis à zéro", function () {
    let _character                     = CONTROLLER.Character.current_character;
    CONTROLLER.Character.doActionAfter( "event__historic__select", { "param__historic__name": "Manoeuvre" } );
    TEST.ASSERT.equal( _character.getHistoric().getValue(), "", "Le second choix devrait vider l'historique, obtenu : [" + _character.getHistoric().getValue() + "]" );
    let _bonus                         = _character.getCharacteristics().getHistoricBonus().bonus;
    TEST.ASSERT.equal( _bonus.getRemaining(), 0, "Les poses restantes devraient etre remises a 0, obtenu : " + _bonus.getRemaining() );
    TEST.ASSERT.equal( _bonus.getFreeNumber(), 0, "Le jeton libre devrait etre remis a 0, obtenu : " + _bonus.getFreeNumber() );
    TEST.ASSERT.equal( _character.getCharacteristics().getContentByUUID( "FOR" ).historic_bonus.getValue(), 0, "La cellule FOR devrait etre remise a 0, obtenu : " + _character.getCharacteristics().getContentByUUID( "FOR" ).historic_bonus.getValue() );
} );
