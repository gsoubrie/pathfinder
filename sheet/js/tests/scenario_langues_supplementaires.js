"use strict";
/**
 * [LANGUES SUPPLEMENTAIRES] parcours sur la chaîne (le personnage est laissé
 * par scenario_pv_ascendance : Elfe + Magicien niveau 5 — les bonus de race
 * Elfe et de classe Magicien sont FORCÉS, auto-posés au choix : le mod INT
 * vit à +2, l'entrée d'ascendance du niveau 1 porte donc déjà ses 2 lignes
 * "Langue supplémentaire") :
 *  1. L'entrée "Elfe 1" rend ses 2 lignes "Langue supplémentaire" (compte =
 *     mod INT, calculé du domaine), options = les langues supplémentaires
 *     d'Elfe nettoyées du scrape, sans "?" (pas de popup de données), en
 *     attente.
 *  2. Choisir "draconique" sur la première : la ligne passe SELECTED, la
 *     seconde ne propose plus "draconique" (une langue ne se prend pas deux
 *     fois).
 *  3. Changer d'ascendance (Elfe → Nain) : le bonus de race INT part, le
 *     mod retombe à +1, la section se re-titre "Nain 1", la seconde ligne
 *     repart (compteur à 0 avant retrait), la première garde son choix et
 *     ses options deviennent les langues de Nain.
 *  4. Retour à Elfe : le mod remonte à +2, une seconde ligne revient sans
 *     proposer "draconique". Save → load : le choix est sauvegardé dans
 *     level_skill de l'entrée 1 et restauré, le compte suit le mod INT
 *     rechargé.
 */
TEST.RUNNER.register( "[LANGUES SUPPLEMENTAIRES] mod INT +2 → 2 lignes Langue supplémentaire sur Elfe 1", function () {
    let _character                        = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    TEST.ASSERT.equal( _character.getRace().getValue(), "Elfe", "Pre-condition : ascendance Elfe, obtenu : " + _character.getRace().getValue() );
    if ( _character.getRace().getValue() !== "Elfe" ) {
        return;
    }
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _int_modifier                  = _character.getCharacteristics().getContentByUUID( CHARACTERISTICS.INT.key ).getModifierValue();
        TEST.ASSERT.equal( _int_modifier, 2, "Le mod INT devrait vivre a +2 (bonus de race Elfe et de classe Magicien forcés), obtenu : " + _int_modifier );
        let _expected_count                = RACES.getAdditionalLanguagesNumber( _character.getRace().getValue(), _int_modifier );
        let _entry                         = _character.getAncestryHistory().getContentByUUID( "1" );
        TEST.ASSERT.notNull( _entry, "Pre-condition : entree d'ascendance du palier 1" );
        if ( !_entry ) {
            return;
        }
        let _pane                         = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Progression devrait exister" );
        if ( !_pane ) {
            return;
        }
        let _rows                          = _pane.querySelectorAll( ".ancestry-up-block[data-ancestry-level-name='1'] .level-up-row[data-slot-key^='additional_language_']" );
        TEST.ASSERT.equal( _rows.length, _expected_count, "Le bloc Elfe 1 devrait rendre " + _expected_count + " lignes Langue supplémentaire (compte = mod INT), obtenu : " + _rows.length );
        if ( _rows.length !== _expected_count ) {
            return;
        }
        let _expected_options             = RACES.getAdditionalLanguages( "Elfe" ).length;
        TEST.ASSERT.ok( _expected_options > 0, "Les donnees d'Elfe devraient porter des langues supplémentaires, obtenu : " + _expected_options );
        for ( let _i = 0; _i < _rows.length; _i++ ) {
            let _line                      = _entry.getContentByUUID( "1__additional_language_" + _i );
            TEST.ASSERT.notNull( _line, "La ligne de langue " + _i + " devrait exister dans son entree" );
            if ( _line ) {
                TEST.ASSERT.notOk( _line.isActive(), "La ligne de langue " + _i + " devrait etre en attente, obtenu : " + _line.isActive() );
            }
            TEST.ASSERT.equal( _rows[ _i ].querySelector( ".level-up-row-label" ).textContent, "Langue supplémentaire", "La ligne " + _i + " devrait porter le libelle Langue supplémentaire, obtenu : " + _rows[ _i ].querySelector( ".level-up-row-label" ).textContent );
            TEST.ASSERT.equal( _rows[ _i ].dataset.currentPhase, "RUNNING", "La ligne " + _i + " non validée devrait etre en phase RUNNING, obtenu : " + _rows[ _i ].dataset.currentPhase );
            TEST.ASSERT.equal( _rows[ _i ].querySelectorAll( ".single-select-option" ).length, 1 + _expected_options, "Le sélecteur de la ligne " + _i + " devrait proposer l'option vide + les langues supplémentaires d'Elfe, obtenu : " + _rows[ _i ].querySelectorAll( ".single-select-option" ).length );
            TEST.ASSERT.isNull( _rows[ _i ].querySelector( ".single-select-option .level-up-row-info" ), "Les options de langue ne devraient pas porter de ? (pas de popup de donnees), ligne " + _i + ", obtenu : rendu" );
        }
    } );
} );

TEST.RUNNER.register( "[LANGUES SUPPLEMENTAIRES] choix draconique = validé, la 2e ligne ne le propose plus", function () {
    let _character                        = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    let _entry                            = _character.getAncestryHistory().getContentByUUID( "1" );
    TEST.ASSERT.notNull( _entry, "Pre-condition : entree d'ascendance du palier 1" );
    if ( !_entry ) {
        return;
    }
    let _pane                            = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Progression ouvert" );
    if ( !_pane ) {
        return;
    }
    let _row                             = _pane.querySelector( ".ancestry-up-block[data-ancestry-level-name='1'] .level-up-row[data-slot-key='additional_language_0']" );
    TEST.ASSERT.notNull( _row, "Pre-condition : première ligne de langue rendue" );
    if ( !_row ) {
        return;
    }
    let _option                          = _row.querySelector( ".single-select-option[data-value='draconique']" );
    TEST.ASSERT.notNull( _option, "La première ligne devrait proposer draconique (langue supplémentaire d'Elfe)" );
    if ( !_option ) {
        return;
    }
    let _counter                         = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
    let _counter_before                  = _counter ? parseInt( _counter.getAttribute( "data-number" ), 10 ) : 0;
    _option.click();
    // Badge décrémenté : attente de CONVERGENCE (règle Round 49 — la
    // course data-number se deboucoule sur plusieurs étages de timers,
    // une lecture a date fixe perdu sur la vraie machine où l'onglet en
    // arrière-plan throttle) — la convergence garantit AUSSI que les
    // asserts de phase/lignes du bloc qui suit lisent un état arrivé
    return TEST.waitCounterValue( _counter, _counter_before - 1 ).then( function () {
        let _line                         = _entry.getContentByUUID( "1__additional_language_0" );
        TEST.ASSERT.notNull( _line, "La première ligne de langue devrait exister" );
        if ( !_line ) {
            return;
        }
        TEST.ASSERT.ok( _line.isActive(), "Choisir une langue devrait valider la ligne, obtenu : " + _line.isActive() );
        TEST.ASSERT.equal( _line.getSelectedValue(), "draconique", "La ligne validée devrait porter la langue choisie, obtenu : " + _line.getSelectedValue() );
        let _row_after                   = _pane.querySelector( ".ancestry-up-block[data-ancestry-level-name='1'] .level-up-row[data-slot-key='additional_language_0']" );
        if ( _row_after ) {
            TEST.ASSERT.equal( _row_after.dataset.currentPhase, "SELECTED", "La ligne validée devrait etre en phase SELECTED, obtenu : " + _row_after.dataset.currentPhase );
        }
        let _row_1                       = _pane.querySelector( ".ancestry-up-block[data-ancestry-level-name='1'] .level-up-row[data-slot-key='additional_language_1']" );
        TEST.ASSERT.isNull( _row_1 ? _row_1.querySelector( ".single-select-option[data-value='draconique']" ) : null, "La seconde ligne ne devrait plus proposer draconique (déjà prise par la première), obtenu : rendue" );
        let _counter_after               = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
        TEST.ASSERT.equal( _counter_after.getAttribute( "data-number" ), "" + ( _counter_before - 1 ), "Le compteur de l'onglet devrait décrémenter d'une ligne apres la validation de la langue, obtenu : [" + _counter_after.getAttribute( "data-number" ) + "]" );
        // La zone des données de l'ascendance du Général affiche la langue
        // choisie à côté des langues de base (recalcul à l'activation)
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.GeneralWindow.NAME ).then( function () {
            return TEST.wait();
        } ).then( function () {
            let _pane                       = document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.GeneralWindow.NAME + "']" );
            TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Général ouvert" );
            if ( !_pane ) {
                return;
            }
            TEST.ASSERT.notNull( TEST_ancestryInfoEntry( _pane, "draconique" ), "La langue choisie dans Progression devrait etre affichée dans la liste Langues du Général" );
            TEST.ASSERT.notNull( TEST_ancestryInfoEntry( _pane, "Commun" ), "La langue Commun de base devrait rester affichée" );
            TEST.ASSERT.notNull( TEST_ancestryInfoEntry( _pane, "Elfique" ), "La langue Elfique de base devrait rester affichée" );
        } );
    } );
} );

TEST.RUNNER.register( "[LANGUES SUPPLEMENTAIRES] ascendance Nain → mod INT +1, 1 ligne, options Nain, choix conservé", function () {
    let _character                        = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.GeneralWindow.NAME ).then( function () {
        return TEST.wait();
    } ).then( function () {
        TEST_openRacePopup();
        return TEST.clickTab( "body > .popup", "Nain" );
    } ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        return TEST.wait();
    } ).then( function () {
        TEST.ASSERT.equal( _character.getRace().getValue(), "Nain", "L'ascendance devrait etre Nain apres validation, obtenu : " + _character.getRace().getValue() );
        TEST.ASSERT.equal( _character.getCharacteristics().getContentByUUID( CHARACTERISTICS.INT.key ).getModifierValue(), 1, "Le mod INT devrait retomber a +1 (le bonus de race Elfe part, celui de classe Magicien reste), obtenu : " + _character.getCharacteristics().getContentByUUID( CHARACTERISTICS.INT.key ).getModifierValue() );
        let _entry                        = _character.getAncestryHistory().getContentByUUID( "1" );
        TEST.ASSERT.notNull( _entry, "L'entree d'ascendance du palier 1 devrait survivre au changement d'ascendance" );
        if ( !_entry ) {
            return;
        }
        TEST.ASSERT.isNull( _entry.getContentByUUID( "1__additional_language_1" ), "La seconde ligne devrait etre retiree quand le mod INT retombe a +1" );
        let _line                         = _entry.getContentByUUID( "1__additional_language_0" );
        TEST.ASSERT.notNull( _line, "La première ligne devrait survivre au changement d'ascendance" );
        if ( !_line ) {
            return;
        }
        TEST.ASSERT.ok( _line.isActive(), "Le choix de langue devrait survivre au changement d'ascendance, obtenu : " + _line.isActive() );
        let _nain_options                 = RACES.getAdditionalLanguages( "Nain" ).length;
        TEST.ASSERT.ok( _nain_options > 0, "Les donnees de Nain devraient porter des langues supplementaires, obtenu : " + _nain_options );
        TEST.ASSERT.equal( _line.options.length, _nain_options, "Les options de la ligne devraient suivre les langues de Nain, obtenu : " + _line.options.length );
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME );
    } ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _pane                         = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Progression devrait exister" );
        if ( !_pane ) {
            return;
        }
        let _block                        = _pane.querySelector( ".ancestry-up-block[data-ancestry-level-name='1']" );
        TEST.ASSERT.notNull( _block, "La section d'ascendance du palier 1 devrait etre rendue" );
        if ( !_block ) {
            return;
        }
        TEST.ASSERT.equal( _block.querySelector( ".level-up-block-level-num" ).textContent, "Nain 1", "Le titre de la section devrait suivre l'ascendance courante, obtenu : " + _block.querySelector( ".level-up-block-level-num" ).textContent );
        TEST.ASSERT.equal( _block.querySelectorAll( ".level-up-row[data-slot-key^='additional_language_']" ).length, 1, "La section Nain 1 devrait rendre 1 seule ligne de langue (mod INT +1), obtenu : " + _block.querySelectorAll( ".level-up-row[data-slot-key^='additional_language_']" ).length );
    } );
} );

TEST.RUNNER.register( "[LANGUES SUPPLEMENTAIRES] retour Elfe → 2e ligne revenue sans doublon ; save → load", function () {
    let _character                        = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.GeneralWindow.NAME ).then( function () {
        return TEST.wait();
    } ).then( function () {
        TEST_openRacePopup();
        return TEST.clickTab( "body > .popup", "Elfe" );
    } ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        return TEST.wait();
    } ).then( function () {
        TEST.ASSERT.equal( _character.getRace().getValue(), "Elfe", "L'ascendance devrait etre Elfe de nouveau, obtenu : " + _character.getRace().getValue() );
        TEST.ASSERT.equal( _character.getCharacteristics().getContentByUUID( CHARACTERISTICS.INT.key ).getModifierValue(), 2, "Le mod INT devrait remonter a +2 (bonus de race Elfe repose), obtenu : " + _character.getCharacteristics().getContentByUUID( CHARACTERISTICS.INT.key ).getModifierValue() );
        let _saved                        = _character.getDataToSave();
        TEST.ASSERT.isArray( _saved.ancestry_history, "La sauvegarde devrait contenir ancestry_history" );
        if ( !_saved.ancestry_history ) {
            return;
        }
        let _entry_1                      = null;
        for ( let _i = 0, _size_i = _saved.ancestry_history.length; _i < _size_i; _i++ ) {
            if ( _saved.ancestry_history[ _i ][ "level_name" ] === "1" ) {
                _entry_1                  = _saved.ancestry_history[ _i ];
            }
        }
        TEST.ASSERT.notNull( _entry_1, "La sauvegarde devrait contenir l'entree 1 d'ancestry_history" );
        if ( !_entry_1 ) {
            return;
        }
        TEST.ASSERT.equal( _entry_1[ "level_skill" ][ "additional_language_0" ], "draconique", "Le choix de langue devrait etre sauvegarde, obtenu : " + JSON.stringify( _entry_1[ "level_skill" ] ) );
        TEST.ASSERT.ok( _entry_1[ "level_skill" ][ "additional_language_1" ] === false, "La seconde ligne revenue en attente devrait etre sauvegardee a false, obtenu : " + JSON.stringify( _entry_1[ "level_skill" ] ) );
        let _reloaded                     = new CHARACTER.Current();
        _reloaded.updateData( _saved );
        _reloaded.doActionAfter( "event__data_loaded__done", { "param__current_character__object": _reloaded } );
        let _reloaded_entry               = _reloaded.getAncestryHistory().getContentByUUID( "1" );
        TEST.ASSERT.notNull( _reloaded_entry, "La relecture devrait restaurer l'entree 1 d'ascendance" );
        if ( !_reloaded_entry ) {
            return;
        }
        let _reloaded_line                = _reloaded_entry.getContentByUUID( "1__additional_language_0" );
        TEST.ASSERT.notNull( _reloaded_line, "La relecture devrait restaurer la ligne de langue" );
        if ( _reloaded_line ) {
            TEST.ASSERT.ok( _reloaded_line.isActive(), "Le choix de langue devrait etre restaure apres relecture, obtenu : " + _reloaded_line.isActive() );
            TEST.ASSERT.equal( _reloaded_line.getSelectedValue(), "draconique", "La langue choisie devrait etre restauree, obtenu : " + _reloaded_line.getSelectedValue() );
        }
        let _reloaded_languages          = 0;
        for ( let _i = 0, _size_i = _reloaded_entry.getSize(); _i < _size_i; _i++ ) {
            if ( _reloaded_entry.getContent( _i ).getSlotKey().indexOf( LEVELUP.ADDITIONAL_LANGUAGE_KEY ) === 0 ) {
                _reloaded_languages++;
            }
        }
        TEST.ASSERT.equal( _reloaded_languages, RACES.getAdditionalLanguagesNumber( "Elfe", _reloaded.getCharacteristics().getContentByUUID( CHARACTERISTICS.INT.key ).getModifierValue() ), "La relecture devrait reconstruire le compte de lignes sur le mod INT recharge, obtenu : " + _reloaded_languages );
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME );
    } ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _pane                         = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Progression devrait exister" );
        if ( !_pane ) {
            return;
        }
        let _row_1                       = _pane.querySelector( ".ancestry-up-block[data-ancestry-level-name='1'] .level-up-row[data-slot-key='additional_language_1']" );
        TEST.ASSERT.notNull( _row_1, "La seconde ligne de langue devrait etre revenue (mod INT +2)" );
        if ( _row_1 ) {
            TEST.ASSERT.isNull( _row_1.querySelector( ".single-select-option[data-value='draconique']" ), "La seconde ligne revenue ne devrait pas proposer draconique (déjà prise), obtenu : rendue" );
        }
    } );
} );
