"use strict";
/**
 * [DONS ASCENDANCE] parcours sur la chaîne (le personnage est laissé par
 * scenario_competences_supplementaires : Elfe + Magicien niveau 5, Diplomatie
 * qualifiée par une compétence supplémentaire, les dons d'ascendance jamais
 * touchés) :
 *  1. L'onglet Progression rend une section d'ascendance par palier atteint,
 *     intercalée au niveau de son palier et AVANT la section de classe du
 *     même niveau : Elfe 1, Magicien 1..4, Elfe 5, Magicien 5. Chaque
 *     section porte sa ligne "Don d'ascendance" en attente, son sélecteur
 *     propose l'option vide + les dons d'Elfe du niveau du palier, chaque
 *     option porte son "?" de popup.
 *  2. Choisir un don sur "Elfe 1" : la ligne passe SELECTED, le sélecteur
 *     affiche le don, le compteur warnings de l'onglet décrémente. Le "?"
 *     de la valeur choisie (à côté du sélecteur, masqué sans sélection)
 *     ouvre la popup du don sélectionné. Le "?" d'une option de "Elfe 5"
 *     ouvre la popup du don (catégorie race).
 *  3. Save → load : ancestry_history contient les deux entrées, le don
 *     choisi de l'entrée 1 et le false de l'entrée 5, la relecture restaure
 *     la validation.
 */
TEST.RUNNER.register( "[DONS ASCENDANCE] sections = Elfe 1, Elfe 5, lignes en attente", function () {
    let _character                        = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    TEST.ASSERT.equal( _character.getLevel(), 5, "Pre-condition : Magicien niveau 5, obtenu : " + _character.getLevel() );
    if ( _character.getLevel() !== 5 ) {
        return;
    }
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _ancestry_history              = _character.getAncestryHistory();
        TEST.ASSERT.equal( _ancestry_history.getSize(), 2, "L'historique d'ascendance devrait porter les paliers 1 et 5, obtenu : " + _ancestry_history.getSize() );
        TEST.ASSERT.notNull( _ancestry_history.getContentByUUID( "1" ), "L'entree d'ascendance du palier 1 devrait exister" );
        TEST.ASSERT.notNull( _ancestry_history.getContentByUUID( "5" ), "L'entree d'ascendance du palier 5 devrait exister" );
        let _pane                         = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Progression devrait exister" );
        if ( !_pane ) {
            return;
        }
        let _blocks                       = _pane.querySelectorAll( ".level-up-block" );
        TEST.ASSERT.equal( _blocks.length, 7, "La fenetre devrait rendre 5 blocs de classe + 2 blocs d'ascendance, obtenu : " + _blocks.length );
        TEST.ASSERT.equal( _pane.querySelectorAll( ".level-up-block[data-level-name]" ).length, 5, "Les sections de classe restent identifiees par data-level-name, obtenu : " + _pane.querySelectorAll( ".level-up-block[data-level-name]" ).length );
        // Ordre attendu : les sections d'ascendance s'intercalent au niveau de leur palier, avant la section de classe du meme niveau
        let _expected_sequence            = [
            { ancestry: "1" },
            { class: "1" },
            { class: "2" },
            { class: "3" },
            { class: "4" },
            { ancestry: "5" },
            { class: "5" }
        ];
        TEST.ASSERT.equal( _blocks.length, _expected_sequence.length, "La fenetre devrait rendre une section par palier d'ascendance et par niveau de classe, obtenu : " + _blocks.length );
        for ( let _i = 0, _size_i = _expected_sequence.length; _i < _size_i; _i++ ) {
            let _expected                 = _expected_sequence[ _i ];
            let _expected_ancestry        = _expected.ancestry !== undefined;
            TEST.ASSERT.equal( _blocks[ _i ].getAttribute( "data-ancestry-level-name" ), _expected_ancestry ? _expected.ancestry : null, "La section " + _i + " devrait etre " + ( _expected_ancestry ? "la section d'ascendance du palier " + _expected.ancestry : "une section de classe (pas d'ascendance)" ) + ", obtenu : " + _blocks[ _i ].getAttribute( "data-ancestry-level-name" ) );
            if ( !_expected_ancestry ) {
                TEST.ASSERT.equal( _blocks[ _i ].getAttribute( "data-level-name" ), _expected.class, "La section " + _i + " devrait etre la section de classe du niveau " + _expected.class + ", obtenu : " + _blocks[ _i ].getAttribute( "data-level-name" ) );
            }
        }
        let _levels                       = [ "1", "5" ];
        for ( let _i = 0, _size_i = _levels.length; _i < _size_i; _i++ ) {
            let _level                     = _levels[ _i ];
            let _block                     = _pane.querySelector( ".ancestry-up-block[data-ancestry-level-name='" + _level + "']" );
            TEST.ASSERT.notNull( _block, "La section Elfe " + _level + " devrait etre rendue" );
            if ( !_block ) {
                continue;
            }
            TEST.ASSERT.equal( _block.querySelector( ".level-up-block-level-num" ).textContent, "Elfe " + _level, "Le titre de la section d'ascendance devrait afficher Elfe " + _level + ", obtenu : " + _block.querySelector( ".level-up-block-level-num" ).textContent );
            let _row                       = _block.querySelector( ".level-up-row[data-slot-key='ancestry_feat']" );
            TEST.ASSERT.notNull( _row, "La section Elfe " + _level + " devrait porter sa ligne Don d'ascendance" );
            if ( !_row ) {
                continue;
            }
            TEST.ASSERT.equal( _row.querySelector( ".level-up-row-label" ).textContent, "Don d'ascendance", "La ligne devrait porter le libelle Don d'ascendance, obtenu : " + _row.querySelector( ".level-up-row-label" ).textContent );
            TEST.ASSERT.equal( _row.dataset.currentPhase, "RUNNING", "La ligne Don d'ascendance non validée devrait etre en phase RUNNING, obtenu : " + _row.dataset.currentPhase );
            let _expected_options          = DON.getAvailableAncestryFeats( "Elfe", parseInt( _level, 10 ) ).length;
            TEST.ASSERT.equal( _row.querySelectorAll( ".single-select-option" ).length, 1 + _expected_options, "Le sélecteur de Elfe " + _level + " devrait proposer l'option vide + les dons d'Elfe du palier, obtenu : " + _row.querySelectorAll( ".single-select-option" ).length );
            TEST.ASSERT.equal( _row.querySelectorAll( ".single-select-option .level-up-row-info" ).length, _expected_options, "Chaque option de don de Elfe " + _level + " devrait porter son ? de popup (l'option vide n'en porte pas), obtenu : " + _row.querySelectorAll( ".single-select-option .level-up-row-info" ).length );
            let _onclick                  = _row.querySelector( ".single-select-option" ).getAttribute( "onclick" ) || "";
            TEST.ASSERT.ok( _onclick.indexOf( "event__level_up__select_choice" ) !== -1 && _onclick.indexOf( _level + "__ancestry_feat" ) !== -1, "Les options devraient emettre event__level_up__select_choice avec l'uuid de la ligne (" + _level + "__ancestry_feat), obtenu : " + _onclick );
            // Le ? de la valeur choisie vit a cote du selecteur : masque sans selection
            let _selected_info            = _row.querySelector( ".single-select-container + .level-up-row-info" );
            TEST.ASSERT.notNull( _selected_info, "La ligne Don d'ascendance devrait porter le ? de la valeur choisie" );
            if ( _selected_info ) {
                TEST.ASSERT.equal( _selected_info.getAttribute( "data-value" ), "", "Le ? de la valeur choisie devrait etre vide sans selection, obtenu : [" + _selected_info.getAttribute( "data-value" ) + "]" );
                TEST.ASSERT.equal( getComputedStyle( _selected_info ).display, "none", "Le ? de la valeur choisie devrait etre masque sans selection, obtenu : " + getComputedStyle( _selected_info ).display );
            }
        }
    } );
} );

TEST.RUNNER.register( "[DONS ASCENDANCE] choix Elfe 1 = validé, ? option = popup don", function () {
    let _character                        = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    let _pane                             = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Progression ouvert" );
    if ( !_pane ) {
        return;
    }
    let _row                              = _pane.querySelector( ".ancestry-up-block[data-ancestry-level-name='1'] .level-up-row[data-slot-key='ancestry_feat']" );
    TEST.ASSERT.notNull( _row, "Pre-condition : ligne Don d'ascendance de Elfe 1 rendue" );
    if ( !_row ) {
        return;
    }
    let _option                           = _row.querySelector( ".single-select-option:not([data-value=''])" );
    TEST.ASSERT.notNull( _option, "Pre-condition : le sélecteur de Elfe 1 propose au moins un don d'Elfe" );
    if ( !_option ) {
        return;
    }
    let _feat_name                        = _option.getAttribute( "data-value" );
    let _counter                          = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
    let _counter_before                   = _counter ? parseInt( _counter.getAttribute( "data-number" ), 10 ) : 0;
    _option.click();
    return TEST.wait().then( function () {
        let _line                         = _character.getAncestryHistory().getContentByUUID( "1" ).getContentByUUID( "1__ancestry_feat" );
        TEST.ASSERT.notNull( _line, "La ligne Don d'ascendance du palier 1 devrait exister dans son entree" );
        if ( !_line ) {
            return;
        }
        TEST.ASSERT.ok( _line.isActive(), "Choisir un don devrait valider la ligne, obtenu : " + _line.isActive() );
        TEST.ASSERT.equal( _line.getSelectedValue(), _feat_name, "La ligne validée devrait porter le don choisi, obtenu : " + _line.getSelectedValue() );
        let _row_after                    = _pane.querySelector( ".ancestry-up-block[data-ancestry-level-name='1'] .level-up-row[data-slot-key='ancestry_feat']" );
        TEST.ASSERT.notNull( _row_after, "La ligne Don d'ascendance devrait rester rendue apres le choix" );
        if ( !_row_after ) {
            return;
        }
        TEST.ASSERT.equal( _row_after.dataset.currentPhase, "SELECTED", "La ligne validée devrait etre en phase SELECTED, obtenu : " + _row_after.dataset.currentPhase );
        TEST.ASSERT.equal( _row_after.querySelector( ".single-select-selector-label" ).textContent, _feat_name, "Le sélecteur devrait afficher le don choisi, obtenu : [" + _row_after.querySelector( ".single-select-selector-label" ).textContent + "]" );
        let _counter_after                = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
        TEST.ASSERT.equal( _counter_after.getAttribute( "data-number" ), "" + ( _counter_before - 1 ), "Le compteur de l'onglet devrait décrémenter d'une ligne apres la validation du don, obtenu : [" + _counter_after.getAttribute( "data-number" ) + "]" );
        // Le ? de la valeur choisie ouvre la popup du don sélectionné
        let _selected_info               = _row_after.querySelector( ".single-select-container + .level-up-row-info" );
        TEST.ASSERT.notNull( _selected_info, "La ligne validée devrait porter le ? de sa valeur choisie" );
        if ( _selected_info ) {
            TEST.ASSERT.equal( _selected_info.getAttribute( "data-value" ), _feat_name, "Le ? de la valeur choisie devrait porter le don sélectionné, obtenu : [" + _selected_info.getAttribute( "data-value" ) + "]" );
            TEST.ASSERT.notEqual( getComputedStyle( _selected_info ).display, "none", "Le ? de la valeur choisie devrait etre affiché apres le choix, obtenu : " + getComputedStyle( _selected_info ).display );
            _selected_info.click();
            let _selected_overlay        = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
            TEST.ASSERT.notNull( _selected_overlay, "La popup du don sélectionné devrait s'ouvrir au clic sur le ? de la valeur choisie" );
            if ( _selected_overlay ) {
                let _selected_title      = _selected_overlay.querySelector( ".popup-title" );
                TEST.ASSERT.notNull( _selected_title, "La popup du don sélectionné devrait afficher un titre" );
                if ( _selected_title ) {
                    TEST.ASSERT.equal( _selected_title.textContent, _feat_name, "Le titre de la popup devrait etre le don sélectionné, obtenu : " + _selected_title.textContent );
                }
                CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": "feat__race__" + _feat_name } );
            }
        }
        // Le ? d'une option de Elfe 5 ouvre la popup du don (catégorie race)
        let _row_5                        = _pane.querySelector( ".ancestry-up-block[data-ancestry-level-name='5'] .level-up-row[data-slot-key='ancestry_feat']" );
        TEST.ASSERT.notNull( _row_5, "Pre-condition : ligne Don d'ascendance de Elfe 5 rendue" );
        if ( !_row_5 ) {
            return;
        }
        let _info                         = _row_5.querySelector( ".single-select-option .level-up-row-info" );
        TEST.ASSERT.notNull( _info, "Une option de don d'Elfe 5 devrait porter son ?" );
        if ( !_info ) {
            return;
        }
        let _info_feat_name               = _info.closest( ".single-select-option" ).getAttribute( "data-value" );
        _info.click();
        let _overlay                      = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
        TEST.ASSERT.notNull( _overlay, "La popup du don d'ascendance devrait etre ouverte" );
        if ( !_overlay ) {
            return;
        }
        let _title                        = _overlay.querySelector( ".popup-title" );
        TEST.ASSERT.notNull( _title, "La popup du don devrait afficher un titre" );
        if ( _title ) {
            TEST.ASSERT.equal( _title.textContent, _info_feat_name, "Le titre de la popup devrait etre le nom du don de l'option, obtenu : " + _title.textContent );
        }
        CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": "feat__race__" + _info_feat_name } );
        TEST.ASSERT.equal( _overlay.getAttribute( "data-current-phase" ), "HIDDEN_TO_STRING", "La popup du don devrait etre masquee apres fermeture" );
    } );
} );

TEST.RUNNER.register( "[DONS ASCENDANCE][SAVE] save → load = don du palier 1 restauré", function () {
    let _character                        = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    let _saved                            = _character.getDataToSave();
    TEST.ASSERT.isArray( _saved.ancestry_history, "La sauvegarde devrait contenir ancestry_history" );
    if ( !_saved.ancestry_history ) {
        return;
    }
    TEST.ASSERT.equal( _saved.ancestry_history.length, 2, "La sauvegarde devrait contenir les deux paliers d'ascendance, obtenu : " + _saved.ancestry_history.length );
    let _entry_1                          = null;
    let _entry_5                          = null;
    for ( let _i = 0, _size_i = _saved.ancestry_history.length; _i < _size_i; _i++ ) {
        if ( _saved.ancestry_history[ _i ][ "level_name" ] === "1" ) {
            _entry_1                      = _saved.ancestry_history[ _i ];
        }
        if ( _saved.ancestry_history[ _i ][ "level_name" ] === "5" ) {
            _entry_5                      = _saved.ancestry_history[ _i ];
        }
    }
    TEST.ASSERT.notNull( _entry_1, "La sauvegarde devrait contenir l'entree 1 d'ancestry_history" );
    TEST.ASSERT.notNull( _entry_5, "La sauvegarde devrait contenir l'entree 5 d'ancestry_history" );
    if ( !_entry_1 || !_entry_5 ) {
        return;
    }
    let _feat_name                        = _character.getAncestryHistory().getContentByUUID( "1" ).getContentByUUID( "1__ancestry_feat" ).getSelectedValue();
    TEST.ASSERT.ok( _entry_1[ "level_skill" ] && _entry_1[ "level_skill" ][ "ancestry_feat" ] === _feat_name, "Le don choisi du palier 1 devrait etre sauvegarde, obtenu : " + JSON.stringify( _entry_1[ "level_skill" ] ) );
    TEST.ASSERT.ok( _entry_5[ "level_skill" ] && _entry_5[ "level_skill" ][ "ancestry_feat" ] === false, "Le palier 5 non validé devrait etre sauvegarde a false, obtenu : " + JSON.stringify( _entry_5[ "level_skill" ] ) );
    let _reloaded                         = new CHARACTER.Current();
    _reloaded.updateData( _saved );
    _reloaded.doActionAfter( "event__data_loaded__done", { "param__current_character__object": _reloaded } );
    TEST.ASSERT.equal( _reloaded.getAncestryHistory().getSize(), 2, "La relecture devrait restaurer les deux paliers d'ascendance, obtenu : " + _reloaded.getAncestryHistory().getSize() );
    let _reloaded_line                    = _reloaded.getAncestryHistory().getContentByUUID( "1" ).getContentByUUID( "1__ancestry_feat" );
    TEST.ASSERT.notNull( _reloaded_line, "La ligne Don d'ascendance du palier 1 devrait exister apres relecture" );
    if ( _reloaded_line ) {
        TEST.ASSERT.ok( _reloaded_line.isActive(), "La validation du don d'ascendance devrait etre restauree apres relecture, obtenu : " + _reloaded_line.isActive() );
        TEST.ASSERT.equal( _reloaded_line.getSelectedValue(), _feat_name, "Le don choisi devrait etre restaure apres relecture, obtenu : " + _reloaded_line.getSelectedValue() );
    }
    let _reloaded_line_5                  = _reloaded.getAncestryHistory().getContentByUUID( "5" ).getContentByUUID( "5__ancestry_feat" );
    TEST.ASSERT.notNull( _reloaded_line_5, "La ligne Don d'ascendance du palier 5 devrait exister apres relecture" );
    if ( _reloaded_line_5 ) {
        TEST.ASSERT.notOk( _reloaded_line_5.isActive(), "Le palier 5 devrait rester en attente apres relecture, obtenu : " + _reloaded_line_5.isActive() );
    }
} );
