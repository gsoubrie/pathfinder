"use strict";
/**
 * [AMELIORATIONS COMPETENCE] parcours sur la chaine (Magicien niveau 5) :
 *  1. La ligne "Amélioration de compétence" de l'entrée 3 rend un sélecteur
 *     (option vide + les 17 compétences du jeu), non validée ; Arcanes est Q
 *     par les maîtrises initiales du Magicien.
 *  2. Choisir "Arcanes" (mêmes paramètres que le onchange du sélecteur) : la
 *     ligne passe SELECTED, Arcanes monte à E (augmentation d'un rang au
 *     niveau 3), la zone jets du Général affiche le badge E et le jet complet
 *     croisé avec le domaine (5 + mod INT + 4), la source de l'augmentation
 *     apparaît dans les sources du slot.
 *  3. Save → load : le choix "Arcanes" est sauvegardé dans level_skill de
 *     l'entrée 3 et restauré après relecture (rang Arcanes E conservé).
 */
TEST.RUNNER.register( "[AMELIORATIONS COMPETENCE] sélecteur = option vide + 17 compétences", function () {
    let _character                        = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    let _entry                            = _character.getLevelHistory().getContentByUUID( "3" );
    TEST.ASSERT.notNull( _entry, "Pre-condition : entree 3 de l'historique rendue" );
    if ( !_entry ) {
        return;
    }
    let _increase                         = _entry.getContentByUUID( "3__amelioration_de_competence" );
    TEST.ASSERT.notNull( _increase, "Pre-condition : ligne Amélioration de compétence de l'entree 3 rendue" );
    if ( !_increase ) {
        return;
    }
    TEST.ASSERT.ok( !_increase.isActive(), "Pre-condition : la ligne Amélioration de compétence ne devrait pas etre validee" );
    TEST.ASSERT.equal( _character.getMasteries().getFinalRank( _character, "skill__arcana" ), "Q", "Arcanes devrait etre qualifiee par les maîtrises initiales avant augmentation, obtenu : " + _character.getMasteries().getFinalRank( _character, "skill__arcana" ) );
    let _row                              = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-row[data-slot-key='amelioration_de_competence']" );
    TEST.ASSERT.notNull( _row, "La ligne Amélioration de compétence devrait etre rendue dans la fenêtre Passage de niveau" );
    if ( !_row ) {
        return;
    }
    let _selector                         = _row.querySelector( ".single-select-selector" );
    TEST.ASSERT.notNull( _selector, "La ligne Amélioration de compétence devrait porter son sélecteur (.single-select-selector)" );
    if ( !_selector ) {
        return;
    }
    TEST.ASSERT.equal( _row.querySelector( ".single-select-selector-label" ).textContent, "--", "Le sélecteur devrait etre sur l'option vide par défaut, obtenu : [" + _row.querySelector( ".single-select-selector-label" ).textContent + "]" );
    TEST.ASSERT.equal( _row.querySelectorAll( ".single-select-option" ).length, 18, "Le sélecteur devrait proposer l'option vide + les 17 compétences, obtenu : " + _row.querySelectorAll( ".single-select-option" ).length );
    let _option                          = _row.querySelector( ".single-select-option[data-value='Arcanes']" );
    TEST.ASSERT.notNull( _option, "Pre-condition : option Arcanes rendue" );
    if ( !_option ) {
        return;
    }
    _option.click();
    return TEST.wait().then( function () {
        TEST.ASSERT.ok( _increase.isActive(), "Choisir une compétence devrait valider la ligne, obtenu : " + _increase.isActive() );
        TEST.ASSERT.equal( _row.dataset.currentPhase, "SELECTED", "La ligne validée devrait porter la phase SELECTED, obtenu : " + _row.dataset.currentPhase );
        TEST.ASSERT.equal( _character.getMasteries().getFinalRank( _character, "skill__arcana" ), "E", "Arcanes devrait monter à experte après l'amélioration, obtenu : " + _character.getMasteries().getFinalRank( _character, "skill__arcana" ) );
    } );
} );

TEST.RUNNER.register( "[AMELIORATIONS COMPETENCE] jets Général = badge E et jet 5 + mod INT + 4", function () {
    let _character                        = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    let _slot_data                        = _character.getMasteries().getDataBySlot( _character )[ "skill__arcana" ];
    TEST.ASSERT.notNull( _slot_data, "Pre-condition : slot Arcanes présent dans les maîtrises" );
    if ( !_slot_data ) {
        return;
    }
    let _has_increase_source              = false;
    for ( let _i = 0, _size_i = _slot_data.sources.length; _i < _size_i; _i++ ) {
        if ( _slot_data.sources[ _i ].indexOf( "Amélioration de compétence (niveau 3)" ) !== -1 ) {
            _has_increase_source          = true;
        }
    }
    TEST.ASSERT.ok( _has_increase_source, "Les sources d'Arcanes devraient citer l'amélioration de compétence du niveau 3, obtenu : " + JSON.stringify( _slot_data.sources ) );
    // Le Général est l'onglet actif de la chaîne : passer par le Passage de
    // niveau force une vraie navigation, et le retour au Général déclenche le
    // recalcul des jets sur l'état frais du personnage
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.GeneralWindow.NAME );
    } ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _pane                         = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.GeneralWindow.NAME + "']" );
        let _arcana_row                   = _pane.querySelector( ".jets-skills-block .saves-row[data-slot='skill__arcana']" );
        TEST.ASSERT.notNull( _arcana_row, "La ligne Arcanes devrait etre rendue dans la zone compétences" );
        if ( !_arcana_row ) {
            return;
        }
        TEST.ASSERT.equal( _arcana_row.querySelector( ".saves-rank" ).textContent, "E", "Le badge Arcanes devrait etre E (experte) après l'amélioration, obtenu : " + _arcana_row.querySelector( ".saves-rank" ).textContent );
        let _expected                     = _character.getMasteries().getRollModifier( _character, { "slot": "skill__arcana", "characteristic": CHARACTERISTICS.INT.key } );
        TEST.ASSERT.equal( _arcana_row.querySelector( ".saves-value" ).textContent, "" + _expected, "Le jet Arcanes devrait valoir le jet complet du domaine (niveau + mod INT + 4 = " + _expected + "), obtenu : " + _arcana_row.querySelector( ".saves-value" ).textContent );
    } );
} );

TEST.RUNNER.register( "[AMELIORATIONS COMPETENCE] save → load = choix Arcanes restauré, rang E conservé", function () {
    let _character                        = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    let _saved                            = _character.getDataToSave();
    let _entry_3                          = null;
    for ( let _i = 0, _size_i = _saved.levels_history.length; _i < _size_i; _i++ ) {
        if ( _saved.levels_history[ _i ][ "level_name" ] === "3" ) {
            _entry_3                      = _saved.levels_history[ _i ];
        }
    }
    TEST.ASSERT.notNull( _entry_3, "La sauvegarde devrait contenir l'entree 3 de levels_history" );
    if ( !_entry_3 ) {
        return;
    }
    TEST.ASSERT.equal( _entry_3[ "level_skill" ][ "amelioration_de_competence" ], "Arcanes", "Le choix d'Amélioration de compétence devrait etre sauvegarde dans level_skill de l'entree 3, obtenu : " + JSON.stringify( _entry_3[ "level_skill" ] ) );
    let _reloaded                         = new CHARACTER.Current();
    _reloaded.updateData( _saved );
    _reloaded.doActionAfter( "event__data_loaded__done", { "param__current_character__object": _reloaded } );
    let _increase                         = _reloaded.getLevelHistory().getContentByUUID( "3" ).getContentByUUID( "3__amelioration_de_competence" );
    TEST.ASSERT.notNull( _increase, "La ligne Amélioration de compétence devrait exister apres relecture" );
    if ( !_increase ) {
        return;
    }
    TEST.ASSERT.equal( _increase.getDataToSave(), "Arcanes", "Le choix d'Amélioration de compétence devrait etre restaure apres relecture, obtenu : " + JSON.stringify( _increase.getDataToSave() ) );
    TEST.ASSERT.equal( _reloaded.getMasteries().getFinalRank( _reloaded, "skill__arcana" ), "E", "Arcanes devrait rester experte apres relecture, obtenu : " + _reloaded.getMasteries().getFinalRank( _reloaded, "skill__arcana" ) );
} );
