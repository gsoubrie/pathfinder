"use strict";
/**
 * Scenario : NIVEAUX
 * Pre-condition : fin du scenario MULTICLASSE (race Elfe, Champion 1, Guerrier 2,
 * total 3, 3 entrees d'historique, onglets actifs).
 * 1. Moins sur le tag Guerrier (onglet Progression) : Guerrier redescend a 1,
 *    total 2, entree d'historique supprimee, PV diminues.
 * 2. Moins a nouveau : la classe Guerrier est supprimee completement du conteneur,
 *    il ne reste que Champion 1.
 * 3. Moins sur la derniere classe : conteneur vide, total 0 — Progression reste
 *    allume (l'ascendance reste posee, ses sections vivent sans classe), zone
 *    classe vide avec le bouton d'ajout. La ligne Points de vie de la
 *    Progression ne se rend plus (historique vide — l'ancienne fenêtre
 *    Niveau a disparu, sa donnée vit ici).
 * 4. Re-ajout de Champion (popup) puis prise d'un 2e niveau : desactivation du
 *    niveau 2 par l'interrupteur du bloc de niveau dans la Progression :
 *    niveau actif 1, PV recalculés. La ligne Points de vie suit le total, sa
 *    POPUP de detail ne porte que les niveaux ACTIFS (decision utilisateur :
 *    un niveau desactive ne compte pas, il ne figure pas dans le detail) et
 *    cite la classe d'origine de chaque niveau. Le bloc du niveau desactive
 *    reste rendu (classe disabled, sans lignes de deblocage) pour porter son
 *    interrupteur.
 * 5. Re-activation depuis le bloc desactive : totaux et PV restaures, la
 *    popup re-ouverte recite les 2 niveaux (reconstruite a chaque ouverture).
 * 6. Save → load : l'historique et le drapeau enabled du niveau desactive
 *    survives a la relecture.
 */

function TEST_AjouterClasse( class_name ) {
    // le onclick reel du bouton d'ajout de classe (cf CharacterClasses)
    MANAGER.EventManagerV2.doActionAfter(
        { target: document.querySelector( ".grid-area.area-class .class-add-button" ), button: 0, stopPropagation: function () {} },
        "event__property_popup__open",
        { "property_name": "class" }
    );
    return TEST.clickTab( "body > .popup", class_name ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
    } );
}

TEST.RUNNER.register( "[NIVEAUX] moins Guerrier → Guerrier 1, total 2", function () {
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    TEST.ASSERT.notNull( _character.getClasses().getContentByUUID( "Guerrier" ), "Pre-condition : Guerrier possedee" );
    if ( !_character.getClasses().getContentByUUID( "Guerrier" ) ) {
        return;
    }
    TEST.ASSERT.equal( _character.getClasses().getContentByUUID( "Guerrier" ).getLevel(), 2, "Pre-condition : Guerrier a niveau 2, obtenu : " + _character.getClasses().getContentByUUID( "Guerrier" ).getLevel() );
    TEST.ASSERT.equal( _character.getLevel(), 3, "Pre-condition : niveau total 3" );
    let _con                           = _character.getCharacteristics().getContentByUUID( CHARACTERISTICS.CON.key );
    let _max_hp_before                 = _character.getHealth().getMaxHP();
    let _history_size_before           = _character.getLevelHistory().getSize();
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
        let _pane                      = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Progression devrait exister" );
        if ( !_pane ) {
            return;
        }
        let _guerrier_option           = _pane.querySelector( ".level-up-class-option[data-name='Guerrier']" );
        TEST.ASSERT.notNull( _guerrier_option, "Le tag Guerrier devrait etre rendu" );
        if ( !_guerrier_option ) {
            return;
        }
        let _remove_button             = _guerrier_option.querySelector( ".level-up-class-option-remove" );
        TEST.ASSERT.notNull( _remove_button, "Le moins devrait etre rendu sur le tag Guerrier (.level-up-class-option-remove)" );
        if ( !_remove_button ) {
            return;
        }
        _remove_button.click();
        let _guerrier                   = _character.getClasses().getContentByUUID( "Guerrier" );
        TEST.ASSERT.notNull( _guerrier, "Guerrier devrait exister apres la baisse a niveau 1" );
        if ( _guerrier ) {
            TEST.ASSERT.equal( _guerrier.getLevel(), 1, "Guerrier devrait redescendre a niveau 1, obtenu : " + _guerrier.getLevel() );
        }
        TEST.ASSERT.equal( _character.getLevel(), 2, "Le niveau total devrait redescendre a 2, obtenu : " + _character.getLevel() );
        TEST.ASSERT.equal( _character.getLevelHistory().getSize(), _history_size_before - 1, "L'entree d'historique du dernier niveau Guerrier devrait etre supprimee" );
        if ( _con ) {
            let _expected_hp           = _max_hp_before - _con.modifier_value.value - CLASSES.getDataByName( "Guerrier" ).life_point_by_level;
            TEST.ASSERT.equal( _character.getHealth().getMaxHP(), _expected_hp, "Les PV totaux devraient etre diminues d'un niveau de Guerrier" );
        }
        let _guerrier_name             = _pane.querySelector( ".level-up-class-option[data-name='Guerrier'] .level-up-class-option-name" );
        if ( _guerrier_name ) {
            TEST.ASSERT.ok( _guerrier_name.textContent.indexOf( "Guerrier 1" ) !== -1, "Le tag Guerrier devrait reafficher Guerrier 1 apres reconstruction, obtenu : " + _guerrier_name.textContent );
        }
    } );
} );

TEST.RUNNER.register( "[NIVEAUX] suppression Guerrier → classes = Champion 1", function () {
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    let _con                           = _character.getCharacteristics().getContentByUUID( CHARACTERISTICS.CON.key );
    let _max_hp_before                 = _character.getHealth().getMaxHP();
    let _history_size_before           = _character.getLevelHistory().getSize();
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
        let _pane                      = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Progression devrait exister" );
        if ( !_pane ) {
            return;
        }
        let _guerrier_option           = _pane.querySelector( ".level-up-class-option[data-name='Guerrier']" );
        TEST.ASSERT.notNull( _guerrier_option, "Le tag Guerrier devrait etre rendu" );
        if ( !_guerrier_option ) {
            return;
        }
        let _remove_button             = _guerrier_option.querySelector( ".level-up-class-option-remove" );
        TEST.ASSERT.notNull( _remove_button, "Le moins devrait etre rendu sur le tag Guerrier" );
        if ( !_remove_button ) {
            return;
        }
        _remove_button.click();
        TEST.ASSERT.equal( _character.getClasses().getSize(), 1, "Le conteneur devrait contenir 1 classe apres la suppression de Guerrier, obtenu : " + _character.getClasses().getSize() );
        TEST.ASSERT.isNull( _character.getClasses().getContentByUUID( "Guerrier" ), "Guerrier devrait etre supprimee completement du conteneur" );
        TEST.ASSERT.equal( _character.getLevel(), 1, "Le niveau total devrait redescendre a 1, obtenu : " + _character.getLevel() );
        TEST.ASSERT.equal( _character.getLevelHistory().getSize(), _history_size_before - 1, "L'entree d'historique du dernier niveau Guerrier devrait etre supprimee" );
        let _last_level                = _character.getLevelHistory().getContent( _character.getLevelHistory().getSize() - 1 );
        if ( _last_level ) {
            TEST.ASSERT.equal( _last_level.getClassName(), "Champion", "La derniere entree d'historique devrait porter Champion" );
        }
        TEST.ASSERT.equal( document.body.dataset.isClassSet, "1", "data-is-class-set devrait rester a 1 (Champion possedee)" );
        if ( _con ) {
            let _expected_hp           = _max_hp_before - _con.modifier_value.value - CLASSES.getDataByName( "Guerrier" ).life_point_by_level;
            TEST.ASSERT.equal( _character.getHealth().getMaxHP(), _expected_hp, "Les PV totaux devraient etre diminues d'un niveau de Guerrier" );
        }
        let _entries                   = document.querySelectorAll( ".characters-sheet-content .grid-area.area-class .class-entry" );
        TEST.ASSERT.equal( _entries.length, 1, "Une seule entree de classe devrait rester affichee, obtenu : " + _entries.length );
    } );
} );

TEST.RUNNER.register( "[NIVEAUX] suppression dernière classe → Progression allumé sans classe", function () {
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
        let _pane                      = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Progression devrait exister" );
        if ( !_pane ) {
            return;
        }
        let _champion_option           = _pane.querySelector( ".level-up-class-option[data-name='Champion']" );
        TEST.ASSERT.notNull( _champion_option, "Le tag Champion devrait etre rendu" );
        if ( !_champion_option ) {
            return;
        }
        let _remove_button             = _champion_option.querySelector( ".level-up-class-option-remove" );
        TEST.ASSERT.notNull( _remove_button, "Le moins devrait etre rendu sur le tag Champion" );
        if ( !_remove_button ) {
            return;
        }
        _remove_button.click();
        TEST.ASSERT.ok( _character.getClasses().isEmpty(), "Le conteneur de classes devrait etre vide" );
        TEST.ASSERT.equal( _character.getLevel(), 0, "Le niveau total devrait etre 0, obtenu : " + _character.getLevel() );
        TEST.ASSERT.equal( _character.getLevelHistory().getSize(), 0, "L'historique des niveaux devrait etre vide" );
        TEST.ASSERT.equal( document.body.dataset.isClassSet, "0", "data-is-class-set devrait repasser a 0" );
        // L'ancienne fenêtre Niveau a disparu : sa ligne PV vit dans la
        // Progression, elle ne se rend PAS quand l'historique est vide
        TEST.ASSERT.isNull( _pane.querySelector( ".level-up-life-total" ), "La ligne Points de vie ne devrait plus se rendre sans historique de niveau" );
        // L'ascendance reste posee : Progression reste allume, ses sections
        // d'ascendance vivent sans classe
        let _progression_tab            = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _progression_tab, "L'onglet Progression devrait exister" );
        if ( _progression_tab ) {
            TEST.ASSERT.notEqual( _progression_tab.getAttribute( "data-visibility-state" ), "disabled", "L'onglet Progression devrait rester allume sans classe (ascendance posee)" );
            TEST.ASSERT.notEqual( getComputedStyle( _progression_tab ).opacity, "0.4", "L'onglet Progression ne devrait pas etre grise, obtenu : " + getComputedStyle( _progression_tab ).opacity );
        }
        let _entries                   = document.querySelectorAll( ".characters-sheet-content .grid-area.area-class .class-entry" );
        TEST.ASSERT.equal( _entries.length, 0, "Aucune entree de classe ne devrait rester affichee, obtenu : " + _entries.length );
        TEST.ASSERT.notNull( document.querySelector( ".characters-sheet-content .grid-area.area-class .class-add-button" ), "Le bouton d'ajout de classe devrait rester rendu" );
    } );
} );

TEST.RUNNER.register( "[NIVEAUX] désactivation niveau 2 → actif 1, PV recalculés", function () {
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    let _con                           = _character.getCharacteristics().getContentByUUID( CHARACTERISTICS.CON.key );
    return TEST_AjouterClasse( "Champion" ).then( function () {
        TEST.ASSERT.equal( _character.getLevel(), 1, "Champion devrait etre re-ajoutee a niveau 1, obtenu : " + _character.getLevel() );
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME );
    } ).then( function () {
        let _pane                      = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Progression devrait exister" );
        if ( !_pane ) {
            return;
        }
        let _take_button               = _pane.querySelector( ".level-up-class-option[data-name='Champion'] .level-up-class-option-take" );
        TEST.ASSERT.notNull( _take_button, "Le plus devrait etre rendu sur le tag Champion" );
        if ( !_take_button ) {
            return;
        }
        _take_button.click();
        TEST.ASSERT.equal( _character.getLevel(), 2, "Le niveau total devrait passer a 2, obtenu : " + _character.getLevel() );
        TEST.ASSERT.equal( _character.getLevelHistory().getSize(), 2, "L'historique devrait contenir 2 niveaux" );
        let _max_hp_before             = _character.getHealth().getMaxHP();
        let _block_toggle              = _pane.querySelector( ".level-up-block[data-level-name='2'] .level-up-level-toggle" );
        TEST.ASSERT.notNull( _block_toggle, "Le bloc du niveau 2 devrait porter l'interrupteur (.level-up-level-toggle)" );
        if ( !_block_toggle ) {
            return;
        }
        _block_toggle.click();
        TEST.ASSERT.equal( _character.getActiveLevel(), 1, "Le niveau desactive ne devrait plus compter dans le niveau actif, obtenu : " + _character.getActiveLevel() );
        TEST.ASSERT.equal( _character.getLevel(), 2, "Le niveau de classe ne devrait pas bouger, obtenu : " + _character.getLevel() );
        if ( _con ) {
            let _expected_hp           = _max_hp_before - _con.modifier_value.value - CLASSES.getDataByName( "Champion" ).life_point_by_level;
            TEST.ASSERT.equal( _character.getHealth().getMaxHP(), _expected_hp, "Les PV totaux devraient exclure le niveau desactive" );
        }
        // L'ancienne fenêtre Niveau a disparu : la ligne PV vit dans la
        // Progression et le DETAIL par niveau vit dans sa popup — les
        // niveaux desactives ne figurent pas dans le detail (decision
        // utilisateur : absents, ils ne comptent pas dans le total)
        let _life_line                  = _pane.querySelector( ".level-up-life-total" );
        TEST.ASSERT.notNull( _life_line, "La ligne Points de vie devrait etre rendue dans la Progression" );
        if ( !_life_line ) {
            return;
        }
        TEST.ASSERT.equal( _life_line.textContent, "Points de vie : " + _character.getHealth().getMaxHP(), "La ligne devrait suivre le total PV du domaine, obtenu : " + _life_line.textContent );
        _life_line.click();
        let _health_overlay             = document.querySelector( ".popup-overlay[data-popup-uuid='character__health'][data-current-phase='RUNNING']" );
        TEST.ASSERT.notNull( _health_overlay, "Le clic sur la ligne devrait ouvrir la popup du detail des PV" );
        if ( !_health_overlay ) {
            return;
        }
        TEST.ASSERT.equal( _health_overlay.getAttribute( "data-current-phase" ), "RUNNING", "La popup PV devrait etre RUNNING" );
        let _sources                    = _health_overlay.querySelectorAll( ".popup-health-source" );
        TEST.ASSERT.equal( _sources.length, 2, "La popup devrait porter 2 sources (depart Elfe + le niveau 1 actif), obtenu : " + _sources.length );
        if ( _sources.length >= 2 ) {
            TEST.ASSERT.ok( _sources[ 0 ].textContent.indexOf( "Elfe" ) !== -1, "La premiere source devrait etre le depart de l'ascendance, obtenu : " + _sources[ 0 ].textContent );
            TEST.ASSERT.ok( _sources[ 1 ].textContent.indexOf( "Niveau 1 — Champion" ) !== -1, "La source du niveau 1 devrait citer la classe d'origine du niveau, obtenu : " + _sources[ 1 ].textContent );
        }
        let _disabled_in_detail         = false;
        for ( let _s = 0, _size_s = _sources.length; _s < _size_s; _s++ ) {
            if ( _sources[ _s ].textContent.indexOf( "Niveau 2" ) !== -1 ) {
                _disabled_in_detail = true;
            }
        }
        TEST.ASSERT.notOk( _disabled_in_detail, "Le niveau desactive ne devrait pas figurer dans le detail du total" );
        CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": "character__health" } );
        let _blocks                      = _pane.querySelectorAll( ".level-up-block[data-level-name]" );
        TEST.ASSERT.equal( _blocks.length, 2, "Chaque niveau devrait garder son bloc (meme desactive, pour son interrupteur), obtenu : " + _blocks.length );
        let _disabled_block              = _pane.querySelector( ".level-up-block[data-level-name='2']" );
        TEST.ASSERT.notNull( _disabled_block, "Le bloc du niveau 2 devrait exister" );
        if ( _disabled_block ) {
            TEST.ASSERT.ok( _disabled_block.classList.contains( "disabled" ), "Le bloc du niveau desactive devrait porter la classe disabled" );
            TEST.ASSERT.equal( _disabled_block.querySelectorAll( ".level-up-row" ).length, 0, "Le bloc du niveau desactive ne devrait pas afficher de lignes de deblocage" );
            let _block_state             = _disabled_block.querySelector( ".level-up-level-toggle" );
            if ( _block_state ) {
                TEST.ASSERT.equal( _block_state.textContent, "Désactivé", "L'interrupteur du bloc desactive devrait afficher Désactivé, obtenu : " + _block_state.textContent );
            }
        }
    } );
} );

TEST.RUNNER.register( "[NIVEAUX] ré-activation → totaux restaurés", function () {
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    let _con                           = _character.getCharacteristics().getContentByUUID( CHARACTERISTICS.CON.key );
    let _max_hp_before                 = _character.getHealth().getMaxHP();
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
        let _levelup_pane              = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _levelup_pane, "Le panneau Progression devrait exister" );
        if ( !_levelup_pane ) {
            return;
        }
        let _toggle                    = _levelup_pane.querySelector( ".level-up-block[data-level-name='2'] .level-up-level-toggle" );
        TEST.ASSERT.notNull( _toggle, "L'interrupteur du niveau desactive devrait etre trouve dans son bloc" );
        if ( !_toggle ) {
            return;
        }
        _toggle.click();
        TEST.ASSERT.equal( _character.getActiveLevel(), 2, "Le niveau re-active devrait compter a nouveau, obtenu : " + _character.getActiveLevel() );
        if ( _con ) {
            let _expected_hp           = _max_hp_before + _con.modifier_value.value + CLASSES.getDataByName( "Champion" ).life_point_by_level;
            TEST.ASSERT.equal( _character.getHealth().getMaxHP(), _expected_hp, "Les PV totaux devraient etre restaures" );
        }
        // Le niveau re-active REVIENT dans le detail de la popup : la
        // popup est reconstruite a chaque ouverture (etat dynamique)
        let _life_line                   = _levelup_pane.querySelector( ".level-up-life-total" );
        TEST.ASSERT.notNull( _life_line, "La ligne Points de vie devrait etre rendue dans la Progression" );
        if ( !_life_line ) {
            return;
        }
        TEST.ASSERT.equal( _life_line.textContent, "Points de vie : " + _character.getHealth().getMaxHP(), "La ligne devrait suivre le total restaure, obtenu : " + _life_line.textContent );
        _life_line.click();
        let _health_overlay              = document.querySelector( ".popup-overlay[data-popup-uuid='character__health'][data-current-phase='RUNNING']" );
        TEST.ASSERT.notNull( _health_overlay, "La popup du detail PV devrait s'ouvrir" );
        if ( !_health_overlay ) {
            return;
        }
        let _sources                     = _health_overlay.querySelectorAll( ".popup-health-source" );
        TEST.ASSERT.equal( _sources.length, 3, "La popup devrait porter 3 sources (depart Elfe + les 2 niveaux actifs), obtenu : " + _sources.length );
        CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": "character__health" } );
    } );
} );

TEST.RUNNER.register( "[NIVEAUX][SAVE] save → load = enabled restauré", function () {
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    let _levelup_pane                  = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
    TEST.ASSERT.notNull( _levelup_pane, "Pre-condition : panneau Progression ouvert" );
    if ( !_levelup_pane ) {
        return;
    }
    let _level_name                    = "2";
    let _toggle                        = _levelup_pane.querySelector( ".level-up-block[data-level-name='" + _level_name + "'] .level-up-level-toggle" );
    TEST.ASSERT.notNull( _toggle, "L'interrupteur du niveau 2 devrait etre rendu dans son bloc" );
    if ( !_toggle ) {
        return;
    }
    _toggle.click();
    TEST.ASSERT.equal( _character.getActiveLevel(), 1, "Le niveau 2 devrait etre desactive" );
    let _saved                         = _character.getDataToSave();
    TEST.ASSERT.isArray( _saved.levels_history, "La sauvegarde devrait contenir l'historique des niveaux" );
    if ( !_saved.levels_history ) {
        return;
    }
    TEST.ASSERT.equal( _saved.levels_history.length, 2, "La sauvegarde devrait contenir 2 niveaux, obtenu : " + _saved.levels_history.length );
    TEST.ASSERT.equal( _saved.levels_history[ 1 ].enabled, false, "Le drapeau enabled du niveau desactive devrait etre sauvegarde" );
    let _reloaded                      = new CHARACTER.Current();
    _reloaded.updateData( _saved );
    TEST.ASSERT.equal( _reloaded.getLevelHistory().getSize(), 2, "L'historique devrait etre restaure au chargement" );
    let _disabled                      = _reloaded.getLevelHistory().getContentByUUID( _level_name );
    TEST.ASSERT.notNull( _disabled, "Le niveau " + _level_name + " devrait etre restaure" );
    if ( _disabled ) {
        TEST.ASSERT.notOk( _disabled.isEnabled(), "Le niveau desactive devrait rester desactive apres relecture" );
    }
    TEST.ASSERT.equal( _reloaded.getActiveLevel(), 1, "Le niveau actif devrait etre restaure au chargement, obtenu : " + _reloaded.getActiveLevel() );
    TEST.ASSERT.equal( _reloaded.getLevel(), 2, "Le niveau total devrait etre restaure au chargement" );
    TEST.ASSERT.notNull( _reloaded.getClasses().getContentByUUID( "Champion" ), "Champion devrait etre restauree" );
    if ( _reloaded.getClasses().getContentByUUID( "Champion" ) ) {
        TEST.ASSERT.equal( _reloaded.getClasses().getContentByUUID( "Champion" ).getLevel(), 2, "Le niveau de Champion devrait etre restaure" );
    }
} );
