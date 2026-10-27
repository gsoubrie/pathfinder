"use strict";
/**
 * Scenario : CARACTERISTIQUES - bonus de classe de niveau 1
 * Le passage de niveau 1 d'une classe ajoute des bonus dans la colonne Classe
 * de l'onglet Caracteristiques. Deux formes de donnees :
 * - bonus force (Magicien : INT) : valeur +2 posee d'office, cellule
 *   SETTINGS_FORCED, boutons masques ;
 * - choix parmi candidates (Champion : FOR ou DEX) : cellules SETTINGS_TO_EDIT
 *   avec le + visible, les autres caracteristiques SETTINGS_FORBIDDEN.
 * Depart de chaque etape : feuille vide (TEST.RESET.sheet()) puis race Elfe
 * (necessaire pour activer l'onglet Caracteristiques ; elle laisse 1 bonus
 * libre de race en attente, visible dans le compteur d'onglet).
 * 1. Magicien : INT force a +2 (final 14 avec le bonus de race Elfe), FOR
 *    interdit, compteur d'onglet = 1 (le libre de race).
 * 2. Champion : FOR et DEX editables (+ visible), CON interdit, compteur = 2
 *    (1 race + 1 classe).
 * 3. Prise du bonus de classe sur FOR via le + : bonus pose (final 12), phase
 *    SETTINGS_EDITED, compteur = 1.
 * 4. Retrait via le - : bonus de classe revenu a 0, cellule SETTINGS_TO_EDIT,
 *    compteur = 2.
 */

TEST.RUNNER.register( "[CARACTERISTIQUES] Magicien niv1 → bonus INT forcé", function () {
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
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        TEST.ASSERT.equal( _character.getRace().getValue(), "Elfe", "Pre-condition : race Elfe posee, obtenu : " + _character.getRace().getValue() );
        TEST.ASSERT.equal( _character.getClasses().getLevel(), 1, "Le niveau 1 de Magicien devrait etre pris en compte, obtenu : " + _character.getClasses().getLevel() );
        let _int                         = _character.getCharacteristics().getContentByUUID( "INT" );
        TEST.ASSERT.equal( _int.class_bonus.getValue(), 2, "Le bonus de classe de INT devrait valoir 2 (force par Magicien), obtenu : " + _int.class_bonus.getValue() );
        TEST.ASSERT.ok( _int.class_bonus.isPhase( GS.OBJECT.CONST.PHASE.SETTINGS_FORCED ), "Le bonus de classe de INT devrait etre en phase SETTINGS_FORCED" );
        TEST.ASSERT.equal( _int.getModifierValue(), 2, "Le modificateur de INT devrait valoir +2 (10 + 2 race + 2 classe), obtenu : " + _int.getModifierValue() );
        let _for                         = _character.getCharacteristics().getContentByUUID( "FOR" );
        TEST.ASSERT.ok( _for.class_bonus.isPhase( GS.OBJECT.CONST.PHASE.SETTINGS_FORBIDDEN ), "Le bonus de classe de FOR devrait etre interdit (hors choix Magicien)" );
        TEST.ASSERT.equal( _character.getCharacteristics().getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ), 1, "Le compteur warning devrait valoir 1 : le bonus libre de la race seulement" );
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.CharacteristicWindow.NAME );
    } ).then( function () {
        let _pane                       = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.CharacteristicWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Caracteristiques devrait exister" );
        if ( !_pane ) {
            return;
        }
        let _int_final                  = _pane.querySelector( ".characteristic-line[data-name='INT'] .characteristic-final-value" );
        if ( _int_final ) {
            TEST.ASSERT.ok( _int_final.textContent.indexOf( "14" ) !== -1, "INT devrait afficher 14 (10 + 2 race + 2 classe), obtenu : " + _int_final.textContent );
        }
        let _int_cell                   = _pane.querySelector( ".characteristic-line[data-name='INT'] .characteristic-bonus-class" );
        TEST.ASSERT.notNull( _int_cell, "La cellule de classe de INT devrait exister" );
        if ( _int_cell ) {
            let _int_phase              = _int_cell.querySelector( "[data-current-phase]" );
            if ( _int_phase ) {
                TEST.ASSERT.equal( _int_phase.getAttribute( "data-current-phase" ), "SETTINGS_FORCED", "La cellule de classe de INT devrait porter data-current-phase SETTINGS_FORCED, obtenu : " + _int_phase.getAttribute( "data-current-phase" ) );
            }
            let _int_more               = _int_cell.querySelector( ".gs-button-V4[data-name='event__more_button']" );
            if ( _int_more ) {
                TEST.ASSERT.equal( getComputedStyle( _int_more ).display, "none", "Le bouton + du bonus de classe force de INT devrait etre masque, obtenu : " + getComputedStyle( _int_more ).display );
            }
        }
        let _for_cell                   = _pane.querySelector( ".characteristic-line[data-name='FOR'] .characteristic-bonus-class" );
        TEST.ASSERT.notNull( _for_cell, "La cellule de classe de FOR devrait exister" );
        if ( _for_cell ) {
            let _for_phase              = _for_cell.querySelector( "[data-current-phase]" );
            if ( _for_phase ) {
                TEST.ASSERT.equal( _for_phase.getAttribute( "data-current-phase" ), "SETTINGS_FORBIDDEN", "La cellule de classe de FOR devrait porter data-current-phase SETTINGS_FORBIDDEN, obtenu : " + _for_phase.getAttribute( "data-current-phase" ) );
            }
            let _for_more               = _for_cell.querySelector( ".gs-button-V4[data-name='event__more_button']" );
            if ( _for_more ) {
                TEST.ASSERT.equal( getComputedStyle( _for_more ).display, "none", "Le bouton + du bonus de classe de FOR devrait etre masque (interdit), obtenu : " + getComputedStyle( _for_more ).display );
            }
        }
        let _counter                    = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.CharacteristicWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
        if ( !_counter ) {
            TEST.ASSERT.notNull( _counter, "Le compteur warning devrait exister sur l'onglet (.gs-warnings-counter)" );
            return;
        }
        TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), "1", "Le compteur d'onglet devrait afficher 1 : le bonus libre de la race en attente, obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );
    } );
} );

TEST.RUNNER.register( "[CARACTERISTIQUES] Champion niv1 → choix FOR/DEX", function () {
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
        return TEST.clickTab( "body > .popup", "Champion" );
    } ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        TEST.ASSERT.equal( _character.getRace().getValue(), "Elfe", "Pre-condition : race Elfe posee, obtenu : " + _character.getRace().getValue() );
        TEST.ASSERT.equal( _character.getClasses().getLevel(), 1, "Le niveau 1 de Champion devrait etre pris en compte, obtenu : " + _character.getClasses().getLevel() );
        let _characteristics            = _character.getCharacteristics();
        TEST.ASSERT.ok( _characteristics.getContentByUUID( "FOR" ).class_bonus.isPhase( GS.OBJECT.CONST.PHASE.SETTINGS_TO_EDIT ), "Le bonus de classe de FOR devrait etre editable (candidat Champion)" );
        TEST.ASSERT.ok( _characteristics.getContentByUUID( "DEX" ).class_bonus.isPhase( GS.OBJECT.CONST.PHASE.SETTINGS_TO_EDIT ), "Le bonus de classe de DEX devrait etre editable (candidat Champion)" );
        TEST.ASSERT.ok( _characteristics.getContentByUUID( "CON" ).class_bonus.isPhase( GS.OBJECT.CONST.PHASE.SETTINGS_FORBIDDEN ), "Le bonus de classe de CON devrait etre interdit (hors choix Champion)" );
        TEST.ASSERT.equal( _characteristics.getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ), 2, "Le compteur warning devrait valoir 2 : 1 libre de race + 1 libre de classe" );
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.CharacteristicWindow.NAME );
    } ).then( function () {
        let _pane                       = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.CharacteristicWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Caracteristiques devrait exister" );
        if ( !_pane ) {
            return;
        }
        let _candidates                = [ "FOR", "DEX" ];
        for ( let i = 0, _size_i = _candidates.length; i < _size_i; i++ ) {
            let _cell                  = _pane.querySelector( ".characteristic-line[data-name='" + _candidates[ i ] + "'] .characteristic-bonus-class" );
            TEST.ASSERT.notNull( _cell, "La cellule de classe de " + _candidates[ i ] + " devrait exister" );
            if ( !_cell ) {
                continue;
            }
            let _phase                  = _cell.querySelector( "[data-current-phase]" );
            if ( _phase ) {
                TEST.ASSERT.equal( _phase.getAttribute( "data-current-phase" ), "SETTINGS_TO_EDIT", "La cellule de classe de " + _candidates[ i ] + " devrait porter data-current-phase SETTINGS_TO_EDIT, obtenu : " + _phase.getAttribute( "data-current-phase" ) );
            }
            let _more                   = _cell.querySelector( ".gs-button-V4[data-name='event__more_button']" );
            if ( _more ) {
                TEST.ASSERT.notEqual( getComputedStyle( _more ).display, "none", "Le bouton + du candidat " + _candidates[ i ] + " devrait etre visible, obtenu : " + getComputedStyle( _more ).display );
            }
            let _less                   = _cell.querySelector( ".gs-button-V4[data-name='event__less_button']" );
            if ( _less ) {
                TEST.ASSERT.notEqual( getComputedStyle( _less ).display, "none", "Le bouton - du candidat " + _candidates[ i ] + " devrait rester affiche (rien a retirer), obtenu : " + getComputedStyle( _less ).display );
                TEST.ASSERT.equal( getComputedStyle( _less ).pointerEvents, "none", "Le bouton - du candidat " + _candidates[ i ] + " devrait etre desactive (pointer-events none), obtenu : " + getComputedStyle( _less ).pointerEvents );
            }
        }
        let _con_cell                   = _pane.querySelector( ".characteristic-line[data-name='CON'] .characteristic-bonus-class" );
        TEST.ASSERT.notNull( _con_cell, "La cellule de classe de CON devrait exister" );
        if ( _con_cell ) {
            let _con_more               = _con_cell.querySelector( ".gs-button-V4[data-name='event__more_button']" );
            if ( _con_more ) {
                TEST.ASSERT.equal( getComputedStyle( _con_more ).display, "none", "Le bouton + du bonus de classe de CON devrait etre masque (interdit), obtenu : " + getComputedStyle( _con_more ).display );
            }
        }
        let _counter                    = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.CharacteristicWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
        if ( !_counter ) {
            TEST.ASSERT.notNull( _counter, "Le compteur warning devrait exister sur l'onglet (.gs-warnings-counter)" );
            return;
        }
        TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), "2", "Le compteur d'onglet devrait afficher 2 : 1 libre de race + 1 libre de classe, obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );
    } );
} );

TEST.RUNNER.register( "[CARACTERISTIQUES] + FOR classe → bonus posé, compteur 1", function () {
    let _character                     = CONTROLLER.Character.current_character;
    let _pane                          = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.CharacteristicWindow.NAME + "']" );
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Caracteristiques ouvert" );
    if ( !_pane ) {
        return;
    }
    let _for_cell                      = _pane.querySelector( ".characteristic-line[data-name='FOR'] .characteristic-bonus-class" );
    TEST.ASSERT.notNull( _for_cell, "La cellule de classe de FOR devrait exister" );
    if ( !_for_cell ) {
        return;
    }
    let _for_more                      = _for_cell.querySelector( ".gs-button-V4[data-name='event__more_button']" );
    TEST.ASSERT.notNull( _for_more, "Le bouton + du bonus de classe de FOR devrait etre rendu" );
    if ( !_for_more ) {
        return;
    }
    _for_more.click();
    let _for                           = _character.getCharacteristics().getContentByUUID( "FOR" );
    TEST.ASSERT.equal( _for.class_bonus.getValue(), 2, "Le bonus de classe de FOR devrait valoir 2, obtenu : " + _for.class_bonus.getValue() );
    TEST.ASSERT.ok( _for.class_bonus.isPhase( GS.OBJECT.CONST.PHASE.SETTINGS_EDITED ), "Le bonus de classe de FOR devrait etre en phase SETTINGS_EDITED" );
    TEST.ASSERT.equal( _for.getModifierValue(), 1, "Le modificateur de FOR devrait valoir +1, obtenu : " + _for.getModifierValue() );
    TEST.ASSERT.equal( _character.getCharacteristics().getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ), 1, "Le compteur warning devrait redescendre a 1 : le libre de race" );
    return TEST.wait().then( function () {
        let _for_final                 = _pane.querySelector( ".characteristic-line[data-name='FOR'] .characteristic-final-value" );
        if ( _for_final ) {
            TEST.ASSERT.ok( _for_final.textContent.indexOf( "12" ) !== -1, "FOR devrait afficher 12 apres le bonus de classe, obtenu : " + _for_final.textContent );
        }
        let _phase                     = _for_cell.querySelector( "[data-current-phase]" );
        if ( _phase ) {
            TEST.ASSERT.equal( _phase.getAttribute( "data-current-phase" ), "SETTINGS_EDITED", "La cellule de classe de FOR devrait porter data-current-phase SETTINGS_EDITED, obtenu : " + _phase.getAttribute( "data-current-phase" ) );
        }
        let _more                      = _for_cell.querySelector( ".gs-button-V4[data-name='event__more_button']" );
        if ( _more ) {
            TEST.ASSERT.notEqual( getComputedStyle( _more ).display, "none", "Le bouton + du bonus pose sur FOR devrait rester affiche, obtenu : " + getComputedStyle( _more ).display );
            TEST.ASSERT.equal( getComputedStyle( _more ).pointerEvents, "none", "Le bouton + du bonus pose sur FOR devrait etre desactive (pointer-events none), obtenu : " + getComputedStyle( _more ).pointerEvents );
        }
        let _less                      = _for_cell.querySelector( ".gs-button-V4[data-name='event__less_button']" );
        if ( _less ) {
            TEST.ASSERT.notEqual( getComputedStyle( _less ).display, "none", "Le bouton - du bonus pose sur FOR devrait rester visible (retrait possible), obtenu : " + getComputedStyle( _less ).display );
        }
        let _counter                   = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.CharacteristicWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
        if ( !_counter ) {
            TEST.ASSERT.notNull( _counter, "Le compteur warning devrait exister sur l'onglet (.gs-warnings-counter)" );
            return;
        }
        TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), "1", "Le compteur d'onglet devrait afficher 1 : le libre de race restant, obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );
    } );
} );

TEST.RUNNER.register( "[CARACTERISTIQUES] − FOR classe → compteur 2", function () {
    let _character                     = CONTROLLER.Character.current_character;
    let _pane                          = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.CharacteristicWindow.NAME + "']" );
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Caracteristiques ouvert" );
    if ( !_pane ) {
        return;
    }
    let _for_cell                      = _pane.querySelector( ".characteristic-line[data-name='FOR'] .characteristic-bonus-class" );
    TEST.ASSERT.notNull( _for_cell, "La cellule de classe de FOR devrait exister" );
    if ( !_for_cell ) {
        return;
    }
    let _for_less                      = _for_cell.querySelector( ".gs-button-V4[data-name='event__less_button']" );
    TEST.ASSERT.notNull( _for_less, "Le bouton - du bonus de classe de FOR devrait etre rendu" );
    if ( !_for_less ) {
        return;
    }
    _for_less.click();
    let _for                           = _character.getCharacteristics().getContentByUUID( "FOR" );
    TEST.ASSERT.equal( _for.class_bonus.getValue(), 0, "Le bonus de classe de FOR devrait etre retire, obtenu : " + _for.class_bonus.getValue() );
    TEST.ASSERT.ok( _for.class_bonus.isPhase( GS.OBJECT.CONST.PHASE.SETTINGS_TO_EDIT ), "Le bonus de classe de FOR devrait revenir en phase SETTINGS_TO_EDIT" );
    TEST.ASSERT.equal( _character.getCharacteristics().getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ), 2, "Le compteur warning devrait remonter a 2 apres le retrait" );
    return TEST.wait().then( function () {
        let _counter                   = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.CharacteristicWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
        if ( !_counter ) {
            TEST.ASSERT.notNull( _counter, "Le compteur warning devrait exister sur l'onglet (.gs-warnings-counter)" );
            return;
        }
        TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), "2", "Le compteur d'onglet devrait reafficher 2 apres le retrait, obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );
    } );
} );
