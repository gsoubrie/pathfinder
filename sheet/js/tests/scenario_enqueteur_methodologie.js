"use strict";
/**
 * [METHODOLOGIE] Les options d'une ligne à choix possédant une entree
 * compendium ouvrent leur information (demande utilisateur : "une fois
 * choisi, ou dans le sélecteur, je n'ai pas le ? pour m'expliquer de quoi
 * ca retourne").
 * Depart : feuille vide (TEST.RESET.sheet()). Race Elfe posée, classe
 * Enquêteur posée à niveau 1 — la capacité "méthodologie" du niveau 1
 * ouvre un choix (CLASSES.CHOICES, chaque entree porte l'uuid de sa
 * METHODOLOGIE dans OBJECT.COMPENDIUM).
 *  1. La ligne "méthodologie" du niveau 1 rend son sélecteur (option vide
 *     + les 4 méthodologies), chaque option porte son "?", la ligne
 *     porte le "?" de sa description de capacité.
 *  2. Le "?" d'une option ouvre la popup compendium de la méthodologie
 *     (titre "Méthodologie : ...", description scrapée), refermée par son
 *     uuid.
 *  3. Choisir une méthodologie : la ligne passe SELECTED, le "?" a côte du
 *     sélecteur porte la valeur choisie et ouvre la même popup.
 *  4. Save → relecture en mémoire : le choix est sauvegardé dans
 *     level_skill de l'entree 1 et restauré.
 */
TEST.RUNNER.register( "[METHODOLOGIE] sélecteur Enquêteur 1 = 4 options avec «?», popup compendium par option", function () {
    TEST.RESET.sheet();
    TEST_openRacePopup();
    return TEST.clickTab( "body > .popup", "Elfe" ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        return TEST_AjouterClasse( "Enquêteur" );
    } ).then( function () {
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME );
    } ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _character                     = CONTROLLER.Character.current_character;
        TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
        if ( !_character ) {
            return;
        }
        let _pane                          = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Progression ouvert" );
        if ( !_pane ) {
            return;
        }
        let _choices                       = CLASSES.getChoices( "Enquêteur", "methodologie" );
        TEST.ASSERT.notNull( _choices, "Pre-condition : la classe Enquêteur devrait ouvrir le choix methodologie" );
        if ( !_choices ) {
            return;
        }
        let _row                           = _pane.querySelector( ".level-up-block[data-level-number='1'] .level-up-row[data-slot-key='methodologie']" );
        TEST.ASSERT.notNull( _row, "La ligne methodologie du niveau 1 devrait etre rendue dans la Progression" );
        if ( !_row ) {
            return;
        }
        // La prime d'attribut du niveau 1 vit sur la colonne Niv1 de la grille
        // des caractéristiques : la ligne de rappel du tableau de classe ne
        // se construit pas
        TEST.ASSERT.isNull( _pane.querySelector( ".level-up-block[data-level-number='1'] .level-up-row[data-slot-key='primes_d_attribut']" ), "La ligne primes d'attribut ne devrait pas se construire au niveau 1" );
        // Le libellé "frappe stratégique 1d6" porte les DÉS du tableau de
        // classe : la capacité vit sous la clé sans dés, son ? ouvre la
        // popup de capacité
        let _strategic_row              = _pane.querySelector( ".level-up-block[data-level-number='1'] .level-up-row[data-slot-key='frappe_strategique_1d6']" );
        TEST.ASSERT.notNull( _strategic_row, "La ligne frappe stratégique 1d6 devrait etre rendue dans la Progression" );
        let _strategic_info             = _strategic_row ? _strategic_row.querySelector( ".level-up-row-label-group .level-up-row-info" ) : null;
        TEST.ASSERT.notNull( _strategic_info, "La ligne frappe stratégique 1d6 devrait porter son ? (la capacité vit sous la clé sans dés)" );
        if ( _strategic_info ) {
            _strategic_info.click();
            let _strategic_overlay      = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
            TEST.ASSERT.notNull( _strategic_overlay, "La popup de Frappe stratégique devrait s'ouvrir au clic sur son ?" );
            let _strategic_title       = _strategic_overlay ? _strategic_overlay.querySelector( ".popup-title" ) : null;
            TEST.ASSERT.notNull( _strategic_title, "La popup de Frappe stratégique devrait afficher un titre" );
            if ( _strategic_title ) {
                TEST.ASSERT.equal( _strategic_title.textContent, "Frappe stratégique", "Le titre de la popup devrait etre la capacité sans les dés du tableau, obtenu : " + _strategic_title.textContent );
            }
            CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": "Enquêteur__frappe_strategique" } );
        }
        let _options                       = _row.querySelectorAll( ".single-select-option" );
        TEST.ASSERT.equal( _options.length, 1 + _choices.entries.length, "Le sélecteur devrait proposer l'option vide + les " + _choices.entries.length + " méthodologies, obtenu : " + _options.length );
        for ( let _i = 0; _i < _options.length; _i++ ) {
            if ( !_options[ _i ].getAttribute( "data-value" ) ) {
                continue;
            }
            TEST.ASSERT.notNull( _options[ _i ].querySelector( ".level-up-row-info" ), "L'option " + _options[ _i ].getAttribute( "data-value" ) + " devrait porter son ? (popup compendium)" );
        }
        // Le ? de l'option Empirisme ouvre la popup de la méthodologie
        let _empirisme_option             = _row.querySelector( ".single-select-option[data-value='Empirisme']" );
        TEST.ASSERT.notNull( _empirisme_option, "Le sélecteur devrait proposer Empirisme" );
        if ( !_empirisme_option ) {
            return;
        }
        let _empirisme_info               = _empirisme_option.querySelector( ".level-up-row-info" );
        TEST.ASSERT.notNull( _empirisme_info, "L'option Empirisme devrait porter son ?" );
        if ( !_empirisme_info ) {
            return;
        }
        _empirisme_info.click();
        let _overlay                       = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
        TEST.ASSERT.notNull( _overlay, "La popup de la méthodologie devrait s'ouvrir au clic sur le ? de l'option" );
        if ( !_overlay ) {
            return;
        }
        let _title                         = _overlay.querySelector( ".popup-title" );
        TEST.ASSERT.notNull( _title, "La popup de la méthodologie devrait afficher un titre" );
        if ( _title ) {
            TEST.ASSERT.equal( _title.textContent, OBJECT.COMPENDIUM[ "g3mNzNphtVxyR9Xr" ][ "text" ], "Le titre de la popup devrait etre l'entree compendium de la méthodologie, obtenu : " + _title.textContent );
        }
        TEST.ASSERT.ok( _overlay.textContent.indexOf( "Tout repose sur les données" ) !== -1, "La popup devrait afficher la description de Empirisme" );
        CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": "g3mNzNphtVxyR9Xr" } );
        // Choisir Empirisme : la ligne passe SELECTED, le ? a côté du
        // sélecteur rouvre la popup de la valeur choisie (hors liste)
        let _counter                      = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
        let _counter_before               = _counter ? parseInt( _counter.getAttribute( "data-number" ), 10 ) : 0;
        _empirisme_option.click();
        return TEST.waitCounterValue( _counter, _counter_before - 1 ).then( function () {
            let _entry                    = _character.getLevelHistory().getContentByUUID( "1" );
            TEST.ASSERT.notNull( _entry, "Pre-condition : entree 1 de l'historique" );
            if ( !_entry ) {
                return;
            }
            let _line                     = _entry.getContentByUUID( "1__methodologie" );
            TEST.ASSERT.notNull( _line, "La ligne methodologie devrait exister dans son entree" );
            if ( !_line ) {
                return;
            }
            TEST.ASSERT.ok( _line.isActive(), "Choisir une méthodologie devrait valider la ligne, obtenu : " + _line.isActive() );
            TEST.ASSERT.equal( _line.getSelectedValue(), "Empirisme", "La ligne validée devrait porter la méthodologie choisie, obtenu : " + _line.getSelectedValue() );
            let _row_after                = _pane.querySelector( ".level-up-block[data-level-number='1'] .level-up-row[data-slot-key='methodologie']" );
            TEST.ASSERT.notNull( _row_after, "La ligne methodologie devrait rester rendue apres le choix" );
            if ( !_row_after ) {
                return;
            }
            TEST.ASSERT.equal( _row_after.dataset.currentPhase, "SELECTED", "La ligne validée devrait etre en phase SELECTED, obtenu : " + _row_after.dataset.currentPhase );
            let _selected_info            = _row_after.querySelector( ".single-select-container ~ .level-up-row-info" );
            TEST.ASSERT.notNull( _selected_info, "La ligne validée devrait porter le ? de sa valeur choisie" );
            if ( _selected_info ) {
                TEST.ASSERT.equal( _selected_info.getAttribute( "data-value" ), "Empirisme", "Le ? de la valeur choisie devrait porter la méthodologie sélectionnée, obtenu : [" + _selected_info.getAttribute( "data-value" ) + "]" );
                TEST.ASSERT.notEqual( getComputedStyle( _selected_info ).display, "none", "Le ? de la valeur choisie devrait etre affiché apres le choix, obtenu : " + getComputedStyle( _selected_info ).display );
                _selected_info.click();
                let _selected_overlay     = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
                TEST.ASSERT.notNull( _selected_overlay, "La popup de la méthodologie sélectionnée devrait s'ouvrir au clic sur le ? de la valeur choisie" );
                if ( _selected_overlay ) {
                    let _selected_title   = _selected_overlay.querySelector( ".popup-title" );
                    TEST.ASSERT.notNull( _selected_title, "La popup de la méthodologie sélectionnée devrait afficher un titre" );
                    if ( _selected_title ) {
                        TEST.ASSERT.equal( _selected_title.textContent, OBJECT.COMPENDIUM[ "g3mNzNphtVxyR9Xr" ][ "text" ], "Le titre de la popup devrait etre la méthodologie sélectionnée, obtenu : " + _selected_title.textContent );
                    }
                    CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": "g3mNzNphtVxyR9Xr" } );
                }
            }
            // Save → relecture en mémoire
            let _saved                    = _character.getDataToSave();
            TEST.ASSERT.ok( _saved.levels_history && _saved.levels_history.length > 0, "La sauvegarde devrait contenir l'historique des niveaux" );
            let _saved_entry              = _saved.levels_history ? _saved.levels_history[ 0 ] : null;
            if ( !_saved_entry ) {
                return;
            }
            TEST.ASSERT.ok( _saved_entry[ "level_skill" ] && _saved_entry[ "level_skill" ][ "methodologie" ] === "Empirisme", "Le choix de méthodologie devrait etre sauvegardé dans level_skill de l'entree 1, obtenu : " + JSON.stringify( _saved_entry[ "level_skill" ] ) );
            let _reloaded                 = new CHARACTER.Current();
            _reloaded.updateData( _saved );
            _reloaded.doActionAfter( "event__data_loaded__done", { "param__current_character__object": _reloaded } );
            let _reloaded_line            = _reloaded.getLevelHistory().getContentByUUID( "1" ).getContentByUUID( "1__methodologie" );
            TEST.ASSERT.notNull( _reloaded_line, "La ligne methodologie devrait exister apres relecture" );
            if ( _reloaded_line ) {
                TEST.ASSERT.ok( _reloaded_line.isActive(), "La validation de la méthodologie devrait etre restauree apres relecture, obtenu : " + _reloaded_line.isActive() );
                TEST.ASSERT.equal( _reloaded_line.getSelectedValue(), "Empirisme", "La méthodologie choisie devrait etre restauree apres relecture, obtenu : " + _reloaded_line.getSelectedValue() );
            }
        } );
    } );
} );
