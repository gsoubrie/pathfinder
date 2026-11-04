"use strict";
/**
 * [COMPETENCES SUPPLEMENTAIRES] parcours sur la chaîne (le personnage est
 * reconstruit par scenario_sauvegardes : RESET, Elfe, Magicien niveau 5,
 * expertise en réflexes et l'amélioration Arcanes validées — les lignes
 * "Compétence supplémentaire" du niveau 1 n'ont jamais été touchées) :
 *  1. Le bloc du niveau 1 rend ses lignes "Compétence supplémentaire"
 *     (2 + mod INT du personnage), chacune porte son sélecteur (option vide +
 *     17 compétences), en attente, non validées.
 *  2. Choisir "Diplomatie" sur la première : la ligne passe SELECTED,
 *     Diplomatie devient Qualifiée, sa source cite la compétence
 *     supplémentaire du niveau 1. Vider le sélecteur : la ligne repasse en
 *     attente, Diplomatie perd son rang (aucune autre ligne ne la porte).
 *     Re-choisir "Diplomatie" : Qualifiée de nouveau.
 *  3. Zone jets du Général (vraie navigation) : badge Q sur Diplomatie, jet
 *     complet croisé avec le domaine (niveau + mod CHA + 2).
 *  4. Save → load : le choix est sauvegardé dans level_skill de l'entrée 1
 *     et restauré (Diplomatie Qualifiée, compte de lignes conservé).
 */
TEST.RUNNER.register( "[COMPETENCES SUPPLEMENTAIRES] lignes niveau 1 = 2 + mod INT, sélecteurs 17 compétences", function () {
    let _character                        = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    let _block                            = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-block[data-level-number='1']" );
    TEST.ASSERT.notNull( _block, "Pre-condition : bloc du niveau 1 rendu" );
    if ( !_block ) {
        return;
    }
    let _additional_count                 = CLASSES.getAdditionalSkillsNumber( "Magicien" ) + _character.getCharacteristics().getContentByUUID( "INT" ).getModifierValue();
    let _rows                             = _block.querySelectorAll( ".level-up-row[data-slot-key^='" + LEVELUP.ADDITIONAL_SKILL_KEY + "']" );
    TEST.ASSERT.equal( _rows.length, _additional_count, "Le bloc du niveau 1 devrait rendre " + _additional_count + " compétences supplémentaires (2 + mod INT), obtenu : " + _rows.length );
    if ( _rows.length !== _additional_count ) {
        return;
    }
    for ( let _i = 0; _i < _rows.length; _i++ ) {
        let _selector                     = _rows[ _i ].querySelector( ".single-select-selector" );
        TEST.ASSERT.notNull( _selector, "Chaque compétence supplémentaire devrait porter son sélecteur, ligne " + _i );
        if ( !_selector ) {
            return;
        }
        TEST.ASSERT.equal( _rows[ _i ].querySelectorAll( ".single-select-option" ).length, 18, "Le sélecteur devrait proposer l'option vide + les 17 compétences, ligne " + _i + ", obtenu : " + _rows[ _i ].querySelectorAll( ".single-select-option" ).length );
        TEST.ASSERT.equal( _rows[ _i ].querySelector( ".single-select-selector-label" ).textContent, "--", "La compétence supplémentaire non validée devrait porter l'option vide, ligne " + _i + ", obtenu : [" + _rows[ _i ].querySelector( ".single-select-selector-label" ).textContent + "]" );
        TEST.ASSERT.equal( _rows[ _i ].dataset.currentPhase, "RUNNING", "Toute ligne en attente devrait porter la phase RUNNING, ligne " + _i + ", obtenu : " + _rows[ _i ].dataset.currentPhase );
    }
} );

TEST.RUNNER.register( "[COMPETENCES SUPPLEMENTAIRES] choix Diplomatie = rang Q, vidage = dévalidation, re-choix = Q", function () {
    let _character                        = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    let _entry                            = _character.getLevelHistory().getContentByUUID( "1" );
    TEST.ASSERT.notNull( _entry, "Pre-condition : entree 1 de l'historique rendue" );
    if ( !_entry ) {
        return;
    }
    let _first_line                       = _entry.getContentByUUID( "1__additional_skill_0" );
    TEST.ASSERT.notNull( _first_line, "Pre-condition : première compétence supplémentaire rendue" );
    if ( !_first_line ) {
        return;
    }
    let _row                              = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-row[data-slot-key='additional_skill_0']" );
    TEST.ASSERT.notNull( _row, "La première compétence supplémentaire devrait etre rendue dans le Progression" );
    if ( !_row ) {
        return;
    }
    let _diplomacy_option                 = _row.querySelector( ".single-select-option[data-value='Diplomatie']" );
    TEST.ASSERT.notNull( _diplomacy_option, "La première compétence supplémentaire devrait proposer Diplomatie" );
    if ( !_diplomacy_option ) {
        return;
    }
    _diplomacy_option.click();
    let _other_row                        = null;
    return TEST.wait().then( function () {
        TEST.ASSERT.ok( _first_line.isActive(), "Choisir une compétence devrait valider la ligne, obtenu : " + _first_line.isActive() );
        TEST.ASSERT.equal( _character.getMasteries().getFinalRank( _character, "skill__diplomacy" ), "Q", "Diplomatie devrait etre Qualifiée après le choix, obtenu : " + _character.getMasteries().getFinalRank( _character, "skill__diplomacy" ) );
        let _slot_data                    = _character.getMasteries().getDataBySlot( _character )[ "skill__diplomacy" ];
        TEST.ASSERT.notNull( _slot_data, "Le slot Diplomatie devrait exister dans les maîtrises" );
        if ( !_slot_data ) {
            return;
        }
        let _has_additional_source        = false;
        for ( let _i = 0, _size_i = _slot_data.sources.length; _i < _size_i; _i++ ) {
            if ( _slot_data.sources[ _i ].indexOf( "Compétence supplémentaire (niveau 1)" ) !== -1 ) {
                _has_additional_source    = true;
            }
        }
        TEST.ASSERT.ok( _has_additional_source, "Les sources de Diplomatie devraient citer la compétence supplémentaire du niveau 1, obtenu : " + JSON.stringify( _slot_data.sources ) );
        _other_row                        = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-row[data-slot-key='additional_skill_1']" );
        TEST.ASSERT.notNull( _other_row, "Pre-condition : seconde compétence supplémentaire rendue" );
        if ( _other_row ) {
            TEST.ASSERT.isNull( _other_row.querySelector( ".single-select-option[data-value='Diplomatie']" ), "Le sélecteur de la seconde ligne ne devrait plus proposer Diplomatie (déjà qualifiée par la première), obtenu : rendue" );
        }
        let _empty_option                 = _row.querySelector( ".single-select-option[data-value='']" );
        TEST.ASSERT.notNull( _empty_option, "Pre-condition : option vide rendue" );
        _empty_option.click();
        return TEST.wait();
    } ).then( function () {
        TEST.ASSERT.ok( !_first_line.isActive(), "Vider le sélecteur devrait dévalider la ligne, obtenu : " + !_first_line.isActive() );
        TEST.ASSERT.isNull( _character.getMasteries().getFinalRank( _character, "skill__diplomacy" ), "Diplomatie devrait perdre son rang quand aucune ligne ne la porte, obtenu : " + _character.getMasteries().getFinalRank( _character, "skill__diplomacy" ) );
        if ( _other_row ) {
            TEST.ASSERT.notNull( _other_row.querySelector( ".single-select-option[data-value='Diplomatie']" ), "Le sélecteur de la seconde ligne devrait proposer Diplomatie de nouveau après le vidage de la première, obtenu : absente" );
        }
        _diplomacy_option                  = _row.querySelector( ".single-select-option[data-value='Diplomatie']" );
        if ( !_diplomacy_option ) {
            return;
        }
        _diplomacy_option.click();
        return TEST.wait();
    } ).then( function () {
        TEST.ASSERT.ok( _first_line.isActive(), "Re-choisir une compétence devrait valider la ligne de nouveau, obtenu : " + _first_line.isActive() );
        TEST.ASSERT.equal( _character.getMasteries().getFinalRank( _character, "skill__diplomacy" ), "Q", "Diplomatie devrait etre Qualifiée après le re-choix, obtenu : " + _character.getMasteries().getFinalRank( _character, "skill__diplomacy" ) );
    } );
} );

TEST.RUNNER.register( "[COMPETENCES SUPPLEMENTAIRES] jets Général = badge Q sur Diplomatie", function () {
    let _character                        = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.GeneralWindow.NAME );
    } ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _pane                         = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.GeneralWindow.NAME + "']" );
        let _diplomacy_row                = _pane.querySelector( ".jets-skills-block .saves-row[data-slot='skill__diplomacy']" );
        TEST.ASSERT.notNull( _diplomacy_row, "La ligne Diplomatie devrait etre rendue dans la zone compétences" );
        if ( !_diplomacy_row ) {
            return;
        }
        TEST.ASSERT.equal( _diplomacy_row.querySelector( ".saves-rank" ).textContent, "Q", "Le badge Diplomatie devrait etre Q (Qualifiée) après le choix, obtenu : " + _diplomacy_row.querySelector( ".saves-rank" ).textContent );
        let _expected                     = _character.getMasteries().getRollModifier( _character, { "slot": "skill__diplomacy", "characteristic": CHARACTERISTICS.CHA.key } );
        TEST.ASSERT.equal( _diplomacy_row.querySelector( ".saves-value" ).textContent, "" + _expected, "Le jet Diplomatie devrait valoir le jet complet du domaine (niveau + mod CHA + 2 = " + _expected + "), obtenu : " + _diplomacy_row.querySelector( ".saves-value" ).textContent );
    } );
} );

TEST.RUNNER.register( "[COMPETENCES SUPPLEMENTAIRES] save → load = choix restauré, compte conservé", function () {
    let _character                        = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    let _saved                            = _character.getDataToSave();
    let _entry_1                          = null;
    for ( let _i = 0, _size_i = _saved.levels_history.length; _i < _size_i; _i++ ) {
        if ( _saved.levels_history[ _i ][ "level_name" ] === "1" ) {
            _entry_1                      = _saved.levels_history[ _i ];
        }
    }
    TEST.ASSERT.notNull( _entry_1, "La sauvegarde devrait contenir l'entree 1 de levels_history" );
    if ( !_entry_1 ) {
        return;
    }
    TEST.ASSERT.equal( _entry_1[ "level_skill" ][ "additional_skill_0" ], "Diplomatie", "Le choix de la première compétence supplémentaire devrait etre sauvegarde, obtenu : " + JSON.stringify( _entry_1[ "level_skill" ] ) );
    TEST.ASSERT.equal( _entry_1[ "level_skill" ][ "additional_skill_1" ], false, "Une compétence supplémentaire non validée devrait etre sauvegardee a false, obtenu : " + JSON.stringify( _entry_1[ "level_skill" ] ) );
    let _reloaded                         = new CHARACTER.Current();
    _reloaded.updateData( _saved );
    _reloaded.doActionAfter( "event__data_loaded__done", { "param__current_character__object": _reloaded } );
    let _reloaded_entry                   = _reloaded.getLevelHistory().getContentByUUID( "1" );
    TEST.ASSERT.equal( _reloaded_entry.getContentByUUID( "1__additional_skill_0" ).getDataToSave(), "Diplomatie", "Le choix de Diplomatie devrait etre restaure apres relecture, obtenu : " + JSON.stringify( _reloaded_entry.getContentByUUID( "1__additional_skill_0" ).getDataToSave() ) );
    TEST.ASSERT.equal( _reloaded.getMasteries().getFinalRank( _reloaded, "skill__diplomacy" ), "Q", "Diplomatie devrait rester Qualifiée apres relecture, obtenu : " + _reloaded.getMasteries().getFinalRank( _reloaded, "skill__diplomacy" ) );
    let _reloaded_count                   = 0;
    for ( let _i = 0, _size_i = _reloaded_entry.getSize(); _i < _size_i; _i++ ) {
        if ( _reloaded_entry.getContent( _i ).getSlotKey().indexOf( LEVELUP.ADDITIONAL_SKILL_KEY ) === 0 ) {
            _reloaded_count++;
        }
    }
    let _expected_count                   = CLASSES.getAdditionalSkillsNumber( "Magicien" ) + _reloaded.getCharacteristics().getContentByUUID( "INT" ).getModifierValue();
    TEST.ASSERT.equal( _reloaded_count, _expected_count, "Le compte de compétences supplémentaires devrait etre conserve apres relecture (" + _expected_count + "), obtenu : " + _reloaded_count );
} );
