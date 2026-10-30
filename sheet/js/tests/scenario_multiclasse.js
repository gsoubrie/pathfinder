"use strict";
/**
 * Scenario : MULTICLASSE
 * Pre-condition : fin du scenario CLASSE (race Elfe posee, classe Champion poseee
 * a niveau 1, champ Classe affiche "Champion 1", onglets Niveau et Passage de
 * niveau actifs).
 * 1. Popup de classe, selection Guerrier, validation : Guerrier ajoute a
 *    niveau 1 dans le conteneur classes, champ Classe = "Champion 1, Guerrier 1",
 *    niveau total = 2, entree d'historique portant Guerrier, PV totaux augmentes.
 * 2. Passage de niveau : selecteur de classe (2 options), prise de niveau sur
 *    Guerrier : Guerrier = 2, total = 3, entree d'historique portant Guerrier,
 *    PV totaux augmentes.
 * 3. Save : getDataToSave contient les 2 classes avec leur niveau ; relecture
 *    dans un nouveau personnage : classes, niveaux et niveau total restaures.
 */

TEST.RUNNER.register( "[MULTICLASSE] ajout Guerrier → classes = Champion 1, Guerrier 1", function () {
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    TEST.ASSERT.equal( _character.getClasses().getSize(), 1, "Pre-condition : une seule classe posee (Champion), obtenu : " + _character.getClasses().getSize() );
    let _max_hp_before                 = _character.getHealth().getMaxHP();
    let _history_size_before           = _character.getLevelHistory().getSize();
    TEST_openClassPopup();
    return TEST.clickTab( "body > .popup", "Guerrier" ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        let _classes                   = _character.getClasses();
        TEST.ASSERT.equal( _classes.getSize(), 2, "Le conteneur devrait contenir 2 classes apres l'ajout, obtenu : " + _classes.getSize() );
        let _champion                  = _classes.getContentByUUID( "Champion" );
        let _guerrier                  = _classes.getContentByUUID( "Guerrier" );
        TEST.ASSERT.notNull( _champion, "Champion devrait rester present dans le conteneur" );
        TEST.ASSERT.notNull( _guerrier, "Guerrier devrait etre ajoute au conteneur" );
        if ( _champion && _guerrier ) {
            TEST.ASSERT.equal( _champion.getLevel(), 1, "Champion devrait rester a niveau 1, obtenu : " + _champion.getLevel() );
            TEST.ASSERT.equal( _guerrier.getLevel(), 1, "Guerrier devrait etre ajoute a niveau 1, obtenu : " + _guerrier.getLevel() );
        }
        TEST.ASSERT.equal( _character.getLevel(), 2, "Le niveau total devrait etre la somme des niveaux de classes, obtenu : " + _character.getLevel() );
        TEST.ASSERT.equal( document.body.dataset.isClassSet, "1", "data-is-class-set devrait rester a 1" );
        let _levels_history            = _character.getLevelHistory();
        TEST.ASSERT.equal( _levels_history.getSize(), _history_size_before + 1, "Une entree d'historique devrait etre ajoutee par niveau pris" );
        let _last_level                = _levels_history.getContent( _levels_history.getSize() - 1 );
        if ( _last_level ) {
            TEST.ASSERT.equal( _last_level.getClassName(), "Guerrier", "La derniere entree d'historique devrait porter la classe Guerrier" );
        }
        let _con                       = _character.getCharacteristics().getContentByUUID( CHARACTERISTICS.CON.key );
        if ( !_con ) {
            TEST.ASSERT.notNull( _con, "La caracteristique CON devrait exister" );
            return;
        }
        let _expected_hp               = _max_hp_before + _con.modifier_value.value + CLASSES.getDataByName( "Guerrier" ).life_point_by_level;
        TEST.ASSERT.equal( _character.getHealth().getMaxHP(), _expected_hp, "Les PV totaux devraient inclure le niveau pris en Guerrier" );
        let _class_entries              = document.querySelectorAll( ".characters-sheet-content .grid-area.area-class .class-entry" );
        TEST.ASSERT.equal( _class_entries.length, 2, "Deux entrees de classe devraient etre affichees, obtenu : " + _class_entries.length );
        let _champion_entry             = document.querySelector( ".characters-sheet-content .grid-area.area-class .class-entry[data-name='Champion']" );
        let _guerrier_entry             = document.querySelector( ".characters-sheet-content .grid-area.area-class .class-entry[data-name='Guerrier']" );
        TEST.ASSERT.notNull( _champion_entry, "L'entree Champion devrait etre affichee" );
        TEST.ASSERT.notNull( _guerrier_entry, "L'entree Guerrier devrait etre affichee" );
        if ( _guerrier_entry ) {
            TEST.ASSERT.equal( _guerrier_entry.querySelector( ".class-entry-level" ).textContent, "1", "L'entree Guerrier devrait afficher son niveau (chiffre seul), obtenu : " + _guerrier_entry.querySelector( ".class-entry-level" ).textContent );
        }
    } );
} );

TEST.RUNNER.register( "[MULTICLASSE] passage niveau Guerrier → Guerrier 2, total 3", function () {
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    TEST.ASSERT.notOk( _character.getClasses().isEmpty(), "Pre-condition : au moins une classe posee" );
    let _max_hp_before                 = _character.getHealth().getMaxHP();
    let _history_size_before           = _character.getLevelHistory().getSize();
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
        let _pane                      = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Passage de niveau devrait exister (.gs-tab-pane)" );
        if ( !_pane ) {
            return;
        }
        let _selector                  = _pane.querySelector( ".level-up-class-selector" );
        TEST.ASSERT.notNull( _selector, "Le selecteur de classe devrait etre rendu (.level-up-class-selector)" );
        if ( !_selector ) {
            return;
        }
        let _options                   = _selector.querySelectorAll( ".level-up-class-option" );
        TEST.ASSERT.equal( _options.length, 2, "Le selecteur devrait proposer les 2 classes possedees, obtenu : " + _options.length );
        let _guerrier_option           = _selector.querySelector( ".level-up-class-option[data-name='Guerrier']" );
        TEST.ASSERT.notNull( _guerrier_option, "Le selecteur devrait proposer Guerrier" );
        if ( !_guerrier_option ) {
            return;
        }
        TEST.ASSERT.equal( _guerrier_option.querySelector( ".level-up-class-option-icon" ).textContent, CLASSES.ICONS[ "Guerrier" ], "L'option Guerrier devrait afficher l'icone de la classe, obtenu : " + _guerrier_option.querySelector( ".level-up-class-option-icon" ).textContent );
        TEST.ASSERT.ok( _guerrier_option.querySelector( ".level-up-class-option-name" ).textContent.indexOf( "Guerrier" ) !== -1, "L'option Guerrier devrait afficher le nom de la classe, obtenu : " + _guerrier_option.querySelector( ".level-up-class-option-name" ).textContent );
        _guerrier_option.click();
        let _guerrier_style            = getComputedStyle( _guerrier_option );
        TEST.ASSERT.ok( _guerrier_style.borderColor.indexOf( "212, 175, 55" ) !== -1, "L'option Guerrier cliquee devrait porter la bordure doree (selection visible), obtenu : " + _guerrier_style.borderColor );
        let _champion_option           = _selector.querySelector( ".level-up-class-option[data-name='Champion']" );
        if ( _champion_option ) {
            let _champion_style        = getComputedStyle( _champion_option );
            TEST.ASSERT.ok( _champion_style.borderColor.indexOf( "212, 175, 55" ) === -1, "L'option Champion non selectionnee ne devrait pas etre doree, obtenu : " + _champion_style.borderColor );
        }
        let _take_button               = _guerrier_option.querySelector( ".level-up-class-option-take" );
        TEST.ASSERT.notNull( _take_button, "Le plus de prise de niveau devrait etre rendu sur l'option Guerrier (.level-up-class-option-take)" );
        if ( !_take_button ) {
            return;
        }
        _take_button.click();
        let _champion                  = _character.getClasses().getContentByUUID( "Champion" );
        let _guerrier                  = _character.getClasses().getContentByUUID( "Guerrier" );
        TEST.ASSERT.notNull( _guerrier, "Guerrier devrait toujours exister apres la prise de niveau" );
        if ( _champion ) {
            TEST.ASSERT.equal( _champion.getLevel(), 1, "Champion devrait rester a niveau 1, obtenu : " + _champion.getLevel() );
        }
        if ( _guerrier ) {
            TEST.ASSERT.equal( _guerrier.getLevel(), 2, "Guerrier devrait passer a niveau 2, obtenu : " + _guerrier.getLevel() );
        }
        TEST.ASSERT.equal( _character.getLevel(), 3, "Le niveau total devrait passer a 3, obtenu : " + _character.getLevel() );
        TEST.ASSERT.equal( _character.getLevelHistory().getSize(), _history_size_before + 1, "Une entree d'historique devrait etre ajoutee" );
        let _last_level                = _character.getLevelHistory().getContent( _character.getLevelHistory().getSize() - 1 );
        if ( _last_level ) {
            TEST.ASSERT.equal( _last_level.getClassName(), "Guerrier", "L'entree d'historique du nouveau niveau devrait porter Guerrier" );
        }
        let _con                       = _character.getCharacteristics().getContentByUUID( CHARACTERISTICS.CON.key );
        if ( !_con ) {
            TEST.ASSERT.notNull( _con, "La caracteristique CON devrait exister" );
            return;
        }
        let _expected_hp               = _max_hp_before + _con.modifier_value.value + CLASSES.getDataByName( "Guerrier" ).life_point_by_level;
        TEST.ASSERT.equal( _character.getHealth().getMaxHP(), _expected_hp, "Les PV totaux devraient inclure le nouveau niveau pris en Guerrier" );
        let _header_level              = _pane.querySelector( ".level-up-header-level" );
        if ( _header_level ) {
            TEST.ASSERT.equal( _header_level.textContent, "Niveau 3", "L'entete du panneau devrait afficher Niveau 3, obtenu : " + _header_level.textContent );
        }
    } );
} );

TEST.RUNNER.register( "[MULTICLASSE][SAVE] save → load = classes et niveaux restaurés", function () {
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    let _saved                         = _character.getDataToSave();
    TEST.ASSERT.isArray( _saved.classes, "La sauvegarde devrait contenir un tableau de classes" );
    if ( !_saved.classes ) {
        return;
    }
    TEST.ASSERT.equal( _saved.classes.length, 2, "La sauvegarde devrait contenir 2 classes, obtenu : " + _saved.classes.length );
    let _saved_by_name                 = {};
    for ( let i = 0, _size_i = _saved.classes.length; i < _size_i; i++ ) {
        _saved_by_name[ _saved.classes[ i ].name ] = _saved.classes[ i ];
    }
    TEST.ASSERT.notNull( _saved_by_name[ "Champion" ], "Champion devrait etre sauvegardee" );
    TEST.ASSERT.notNull( _saved_by_name[ "Guerrier" ], "Guerrier devrait etre sauvegardee" );
    if ( _saved_by_name[ "Champion" ] ) {
        TEST.ASSERT.equal( _saved_by_name[ "Champion" ].level, 1, "Le niveau de Champion devrait etre sauvegarde" );
    }
    if ( _saved_by_name[ "Guerrier" ] ) {
        TEST.ASSERT.equal( _saved_by_name[ "Guerrier" ].level, 2, "Le niveau de Guerrier devrait etre sauvegarde" );
    }
    TEST.ASSERT.isArray( _saved.levels_history, "La sauvegarde devrait contenir un tableau d'historique" );
    if ( _saved.levels_history ) {
        TEST.ASSERT.equal( _saved.levels_history.length, 3, "La sauvegarde devrait contenir 3 niveaux, obtenu : " + _saved.levels_history.length );
        if ( _saved.levels_history.length === 3 ) {
            TEST.ASSERT.equal( _saved.levels_history[ 0 ].class_name, "Champion", "Le niveau 1 devrait porter la classe Champion, obtenu : " + _saved.levels_history[ 0 ].class_name );
            TEST.ASSERT.equal( _saved.levels_history[ 1 ].class_name, "Guerrier", "Le niveau 2 devrait porter la classe Guerrier, obtenu : " + _saved.levels_history[ 1 ].class_name );
            TEST.ASSERT.equal( _saved.levels_history[ 2 ].class_name, "Guerrier", "Le niveau 3 devrait porter la classe Guerrier, obtenu : " + _saved.levels_history[ 2 ].class_name );
        }
    }
    let _reloaded                      = new CHARACTER.Current();
    _reloaded.updateData( _saved );
    TEST.ASSERT.equal( _reloaded.getClasses().getSize(), 2, "Les classes devraient etre restaurees au chargement, obtenu : " + _reloaded.getClasses().getSize() );
    let _champion                      = _reloaded.getClasses().getContentByUUID( "Champion" );
    let _guerrier                      = _reloaded.getClasses().getContentByUUID( "Guerrier" );
    TEST.ASSERT.notNull( _champion, "Champion devrait etre restauree" );
    TEST.ASSERT.notNull( _guerrier, "Guerrier devrait etre restauree" );
    if ( _champion ) {
        TEST.ASSERT.equal( _champion.getLevel(), 1, "Le niveau de Champion devrait etre restaure, obtenu : " + _champion.getLevel() );
    }
    if ( _guerrier ) {
        TEST.ASSERT.equal( _guerrier.getLevel(), 2, "Le niveau de Guerrier devrait etre restaure, obtenu : " + _guerrier.getLevel() );
    }
    TEST.ASSERT.equal( _reloaded.getLevel(), 3, "Le niveau total devrait etre recalcule au chargement, obtenu : " + _reloaded.getLevel() );
} );
