"use strict";
/**
 * [CAUSE] Suite indépendante (RESET en tête) : Elfe + Champion niveau 1,
 * la ligne "cause" de l'entrée 1 rend son sélecteur avec un "?" par option
 * (les entrées de CLASSES.CHOICES["Champion"]["cause"] portent l'uuid
 * compendium de leur cause, class-feature) et le "?" de la valeur choisie
 * à côté du sélecteur ; le clic sur un "?" ouvre la popup class-feature
 * de la cause.
 *  1. La ligne "cause" du niveau 1 rend son sélecteur (option vide + les 7
 *     causes), chaque option porte son "?", le "?" d'une option ouvre la
 *     popup compendium de la cause, refermée par son uuid.
 *  2. Choisir une cause : la ligne passe SELECTED, le "?" à côté du
 *     sélecteur porte la valeur choisie et ouvre la même popup.
 *  3. Save → relecture en mémoire : le choix est sauvegardé dans
 *     level_skill de l'entrée 1 et restauré.
 */
TEST.RUNNER.register( "[CAUSE] sélecteur Champion 1 = options avec «?», popup compendium par option", function () {
    TEST.RESET.sheet();
    TEST_openRacePopup();
    return TEST.clickTab( "body > .popup", "Elfe" ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        return TEST_AjouterClasse( "Champion" );
    } ).then( function () {
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME );
    } ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _character = CONTROLLER.Character.current_character;
        TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
        if ( !_character ) {
            return;
        }
        let _choices   = CLASSES.getChoices( "Champion", "cause" );
        TEST.ASSERT.notNull( _choices, "Pre-condition : la classe Champion devrait ouvrir le choix cause" );
        if ( !_choices ) {
            return;
        }
        // Toutes les entrées portent leur uuid compendium (sinon pas de « ? »)
        let _with_uuid = 0;
        for ( let i = 0, _size_i = _choices.entries.length; i < _size_i; i++ ) {
            if ( _choices.entries[ i ].uuid && OBJECT.COMPENDIUM[ _choices.entries[ i ].uuid ] ) {
                _with_uuid++;
            }
        }
        TEST.ASSERT.equal( _with_uuid, _choices.entries.length, "Chaque cause devrait porter un uuid compendium valide, obtenu : " + _with_uuid + "/" + _choices.entries.length );
        let _pane      = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Progression ouvert" );
        if ( !_pane ) {
            return;
        }
        let _row       = _pane.querySelector( ".level-up-block[data-level-number='1'] .level-up-row[data-slot-key='cause']" );
        TEST.ASSERT.notNull( _row, "La ligne cause du niveau 1 devrait etre rendue dans la Progression" );
        if ( !_row ) {
            return;
        }
        let _options   = _row.querySelectorAll( ".single-select-option" );
        TEST.ASSERT.equal( _options.length, 1 + _choices.entries.length, "Le sélecteur devrait proposer l'option vide + les " + _choices.entries.length + " causes, obtenu : " + _options.length );
        let _infos     = _row.querySelectorAll( ".single-select-option:not([data-value='']) .level-up-row-info" );
        TEST.ASSERT.equal( _infos.length, _choices.entries.length, "Chaque option de cause devrait porter son ?, obtenu : " + _infos.length );
        // Le ? de la première cause ouvre la popup compendium de la cause
        let _target    = null;
        for ( let i = 0, _size_i = _choices.entries.length; i < _size_i; i++ ) {
            if ( _choices.entries[ i ].uuid && OBJECT.COMPENDIUM[ _choices.entries[ i ].uuid ] ) {
                _target = _choices.entries[ i ];
                break;
            }
        }
        TEST.ASSERT.notNull( _target, "Pre-condition : une cause avec uuid compendium" );
        if ( !_target ) {
            return;
        }
        let _option    = _row.querySelector( ".single-select-option[data-value=" + JSON.stringify( _target.name ) + "]" );
        TEST.ASSERT.notNull( _option, "Le sélecteur devrait proposer la cause " + _target.name );
        if ( !_option ) {
            return;
        }
        let _info      = _option.querySelector( ".level-up-row-info" );
        TEST.ASSERT.notNull( _info, "L'option " + _target.name + " devrait porter son ?" );
        if ( !_info ) {
            return;
        }
        _info.click();
        let _overlay   = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
        TEST.ASSERT.notNull( _overlay, "La popup de la cause devrait s'ouvrir au clic sur le ? de l'option" );
        if ( !_overlay ) {
            return;
        }
        let _title     = _overlay.querySelector( ".popup-title" );
        TEST.ASSERT.notNull( _title, "La popup de la cause devrait afficher un titre" );
        if ( _title ) {
            TEST.ASSERT.equal( _title.textContent, OBJECT.COMPENDIUM[ _target.uuid ][ "text" ], "Le titre de la popup devrait etre l'entrée compendium de la cause, obtenu : " + _title.textContent );
        }
        CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": _target.uuid } );
        TEST.ASSERT.equal( _overlay.getAttribute( "data-current-phase" ), "HIDDEN_TO_STRING", "La popup de la cause devrait etre masquee apres fermeture" );
    } );
} );

TEST.RUNNER.register( "[CAUSE] choix d'une cause → SELECTED, «?» de la valeur choisie, save → relecture", function () {
    let _character = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    TEST.ASSERT.equal( _character.getClasses().getContentByUUID( "Champion" ) ? 1 : 0, 1, "Pre-condition : Champion posé" );
    let _choices   = CLASSES.getChoices( "Champion", "cause" );
    TEST.ASSERT.notNull( _choices, "Pre-condition : choix cause" );
    if ( !_choices ) {
        return;
    }
    let _target    = null;
    for ( let i = 0, _size_i = _choices.entries.length; i < _size_i; i++ ) {
        if ( _choices.entries[ i ].uuid && OBJECT.COMPENDIUM[ _choices.entries[ i ].uuid ] ) {
            _target = _choices.entries[ i ];
            break;
        }
    }
    if ( !_target ) {
        return;
    }
    let _pane      = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
    let _row       = _pane ? _pane.querySelector( ".level-up-block[data-level-number='1'] .level-up-row[data-slot-key='cause']" ) : null;
    TEST.ASSERT.notNull( _row, "Pre-condition : ligne cause rendue" );
    if ( !_row ) {
        return;
    }
    let _option    = _row.querySelector( ".single-select-option[data-value=" + JSON.stringify( _target.name ) + "]" );
    TEST.ASSERT.notNull( _option, "Pre-condition : option " + _target.name );
    if ( !_option ) {
        return;
    }
    let _counter        = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
    let _counter_before = _counter ? parseInt( _counter.getAttribute( "data-number" ), 10 ) : 0;
    _option.click();
    return TEST.waitCounterValue( _counter, _counter_before - 1 ).then( function () {
        let _entry = _character.getLevelHistory().getContentByUUID( "1" );
        TEST.ASSERT.notNull( _entry, "Pre-condition : entrée 1 de l'historique" );
        if ( !_entry ) {
            return;
        }
        let _line  = _entry.getContentByUUID( "1__cause" );
        TEST.ASSERT.notNull( _line, "La ligne cause devrait exister dans son entrée" );
        if ( !_line ) {
            return;
        }
        TEST.ASSERT.ok( _line.isActive(), "Choisir une cause devrait valider la ligne, obtenu : " + _line.isActive() );
        TEST.ASSERT.equal( _line.getSelectedValue(), _target.name, "La ligne validée devrait porter la cause choisie, obtenu : " + _line.getSelectedValue() );
        let _row_after = _pane.querySelector( ".level-up-block[data-level-number='1'] .level-up-row[data-slot-key='cause']" );
        TEST.ASSERT.equal( _row_after ? _row_after.dataset.currentPhase : null, "SELECTED", "La ligne validée devrait etre en phase SELECTED, obtenu : " + ( _row_after ? _row_after.dataset.currentPhase : "ligne perdue" ) );
        let _selected_info = _row_after ? _row_after.querySelector( ".single-select-container ~ .level-up-row-info" ) : null;
        TEST.ASSERT.notNull( _selected_info, "La ligne validée devrait porter le ? de sa valeur choisie" );
        if ( _selected_info ) {
            TEST.ASSERT.equal( _selected_info.getAttribute( "data-value" ), _target.name, "Le ? de la valeur choisie devrait porter la cause sélectionnée, obtenu : [" + _selected_info.getAttribute( "data-value" ) + "]" );
            _selected_info.click();
            let _selected_overlay = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
            TEST.ASSERT.notNull( _selected_overlay, "La popup de la cause sélectionnée devrait s'ouvrir au clic sur le ? de la valeur choisie" );
            if ( _selected_overlay ) {
                let _selected_title = _selected_overlay.querySelector( ".popup-title" );
                TEST.ASSERT.ok( _selected_title && _selected_title.textContent === OBJECT.COMPENDIUM[ _target.uuid ][ "text" ], "Le titre de la popup devrait etre la cause sélectionnée, obtenu : " + ( _selected_title ? _selected_title.textContent : null ) );
                CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": _target.uuid } );
            }
        }
        // Save → relecture en mémoire
        let _saved       = _character.getDataToSave();
        TEST.ASSERT.ok( _saved.levels_history && _saved.levels_history.length > 0, "La sauvegarde devrait contenir l'historique des niveaux" );
        let _saved_entry = _saved.levels_history ? _saved.levels_history[ 0 ] : null;
        if ( !_saved_entry ) {
            return;
        }
        TEST.ASSERT.ok( _saved_entry[ "level_skill" ] && _saved_entry[ "level_skill" ][ "cause" ] === _target.name, "Le choix de cause devrait etre sauvegardé dans level_skill de l'entrée 1, obtenu : " + JSON.stringify( _saved_entry[ "level_skill" ] ) );
        let _reloaded      = new CHARACTER.Current();
        _reloaded.updateData( _saved );
        _reloaded.doActionAfter( "event__data_loaded__done", { "param__current_character__object": _reloaded } );
        let _reloaded_line = _reloaded.getLevelHistory().getContentByUUID( "1" ).getContentByUUID( "1__cause" );
        TEST.ASSERT.notNull( _reloaded_line, "La ligne cause devrait exister apres relecture" );
        if ( _reloaded_line ) {
            TEST.ASSERT.ok( _reloaded_line.isActive(), "La validation de la cause devrait etre restaurée apres relecture, obtenu : " + _reloaded_line.isActive() );
            TEST.ASSERT.equal( _reloaded_line.getSelectedValue(), _target.name, "La cause choisie devrait etre restaurée apres relecture, obtenu : " + _reloaded_line.getSelectedValue() );
        }
    } );
} );
