"use strict";
/**
 * Scenario : NIVEAUX - plusieurs niveaux et multiclasse
 * L'ancienne fenêtre Niveau a disparu : le total PV vit dans la Progression
 * (une ligne cliquable), son DETAIL par niveau vit dans la POPUP du calcul
 * (une source par niveau ACTIF — la classe d'ORIGINE du niveau citée — plus
 * le départ de l'ascendance ; les niveaux désactivés ne figurent pas).
 * Les interrupteurs Actif/Désactivé vivent dans les blocs de l'onglet
 * Progression (un bloc par niveau, y compris desactive, pour permettre la
 * re-activation).
 * Depart de chaque etape : feuille vide (TEST.RESET.sheet()) puis race Elfe.
 * 1. Classe unique poussee a 3 niveaux : popup a 4 sources conformes
 *    (départ + Niveau 1-3 — Champion), total attendu croise au domaine.
 * 2. Desactivation du niveau 2 : actif 2, PV recalculés, bloc 2 desactive
 *    sans lignes de deblocage, source Niveau 2 ABSENTE de la popup ;
 *    re-activation restaure tout.
 * 3. Changement de classe d'une feuille a UNE classe (le multiclasse est
 *    retire, demande utilisateur) : Champion pousse a 2 niveaux, le detail
 *    cite la classe d'origine de chaque niveau, retrait COMPLET des niveaux
 *    (le conteneur se vide, la classe part a 0), nouveau choix Guerrier —
 *    une seule classe a la fois, jamais deux ensemble.
 */

TEST.RUNNER.register( "[NIVEAUX] 3 niveaux Champion → lignes et blocs complets", function () {
    TEST.RESET.sheet();
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Un nouveau personnage devrait etre instancie apres le reset" );
    if ( !_character ) {
        return;
    }
    TEST_openRacePopup();
    return TEST.clickTab( "body > .popup", "Elfe" ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        return TEST_AjouterClasse( "Champion" );
    } ).then( function () {
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME );
    } ).then( function () {
        let _levelup_pane              = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _levelup_pane, "Le panneau Progression devrait exister" );
        if ( !_levelup_pane ) {
            return;
        }
        for ( let i = 0; i < 2; i++ ) {
            let _take_button           = _levelup_pane.querySelector( ".level-up-class-option[data-name='Champion'] .level-up-class-option-take" );
            TEST.ASSERT.notNull( _take_button, "Le plus devrait etre rendu sur le tag Champion (prise " + ( i + 1 ) + ")" );
            if ( !_take_button ) {
                return;
            }
            _take_button.click();
        }
        TEST.ASSERT.equal( _character.getLevel(), 3, "Le personnage devrait atteindre le niveau 3, obtenu : " + _character.getLevel() );
        TEST.ASSERT.equal( _character.getActiveLevel(), 3, "Les 3 niveaux devraient etre actifs, obtenu : " + _character.getActiveLevel() );
        let _blocks                     = _levelup_pane.querySelectorAll( ".level-up-block[data-level-name]" );
        TEST.ASSERT.equal( _blocks.length, 3, "Chaque niveau devrait avoir son bloc, obtenu : " + _blocks.length );
        for ( let i = 0, _size_i = 3; i < _size_i; i++ ) {
            let _block                 = _levelup_pane.querySelector( ".level-up-block[data-level-name='" + ( i + 1 ) + "']" );
            TEST.ASSERT.notNull( _block, "Le bloc du niveau " + ( i + 1 ) + " devrait exister (data-level-name)" );
            if ( !_block ) {
                continue;
            }
            let _toggle                = _block.querySelector( ".level-up-level-toggle" );
            TEST.ASSERT.notNull( _toggle, "Le bloc du niveau " + ( i + 1 ) + " devrait porter l'interrupteur (.level-up-level-toggle)" );
            if ( _toggle ) {
                TEST.ASSERT.ok( _toggle.getAttribute( "onclick" ).indexOf( "event__level__toggle" ) !== -1, "L'interrupteur du niveau " + ( i + 1 ) + " devrait etre câble sur event__level__toggle, obtenu : [" + _toggle.getAttribute( "onclick" ) + "]" );
            }
        }
        // L'ancienne fenêtre Niveau a disparu : le DETAIL par niveau vit
        // dans la popup du total PV (une source par niveau actif + depart
        // de l'ascendance), la ligne vit elle-meme dans la Progression
        let _life_line                  = _levelup_pane.querySelector( ".level-up-life-total" );
        TEST.ASSERT.notNull( _life_line, "La ligne Points de vie devrait etre rendue dans la Progression" );
        if ( !_life_line ) {
            return;
        }
        _life_line.click();
        let _health_overlay             = document.querySelector( ".popup-overlay[data-popup-uuid='character__health'][data-current-phase='RUNNING']" );
        TEST.ASSERT.notNull( _health_overlay, "La popup du detail PV devrait etre ouverte" );
        if ( !_health_overlay ) {
            return;
        }
        let _sources                    = _health_overlay.querySelectorAll( ".popup-health-source" );
        TEST.ASSERT.equal( _sources.length, 4, "La popup devrait porter 4 sources (depart Elfe + 3 niveaux), obtenu : " + _sources.length );
        if ( _sources.length === 4 ) {
            TEST.ASSERT.ok( _sources[ 0 ].textContent.indexOf( "Elfe" ) !== -1, "La premiere source devrait etre le depart de l'ascendance, obtenu : " + _sources[ 0 ].textContent );
            for ( let i = 1; i < 4; i++ ) {
                TEST.ASSERT.ok( _sources[ i ].textContent.indexOf( "Niveau " + i + " — Champion" ) !== -1, "La source " + i + " devrait citer la classe d'origine du niveau, obtenu : " + _sources[ i ].textContent );
            }
        }
        let _con                        = _character.getCharacteristics().getContentByUUID( CHARACTERISTICS.CON.key );
        let _expected_hp                = RACES.getDataByName( "Elfe" ).start_life + 3 * CLASSES.getDataByName( "Champion" ).life_point_by_level + 3 * ( _con ? _con.getModifierValue() : 0 );
        TEST.ASSERT.equal( _character.getHealth().getMaxHP(), _expected_hp, "Les PV totaux devraient valoir les PV de depart d'Elfe + 3 niveaux de Champion + CON par niveau, obtenu : " + _character.getHealth().getMaxHP() );
        TEST.ASSERT.equal( _health_overlay.querySelector( ".popup-health-total" ).textContent, _expected_hp + " PV", "Le total de la popup devrait afficher " + _expected_hp + ", obtenu : " + _health_overlay.querySelector( ".popup-health-total" ).textContent );
        CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": "character__health" } );
    } );
} );

TEST.RUNNER.register( "[NIVEAUX] 3 niveaux → désactivation 2 = actif 2, restauré", function () {
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
        TEST.ASSERT.notNull( _toggle, "L'interrupteur du niveau 2 devrait etre rendu dans son bloc" );
        if ( !_toggle ) {
            return;
        }
        _toggle.click();
        TEST.ASSERT.equal( _character.getActiveLevel(), 2, "Le niveau actif devrait descendre a 2, obtenu : " + _character.getActiveLevel() );
        TEST.ASSERT.equal( _character.getLevel(), 3, "Le niveau total ne devrait pas bouger, obtenu : " + _character.getLevel() );
        if ( _con ) {
            let _expected_hp           = _max_hp_before - _con.getModifierValue() - CLASSES.getDataByName( "Champion" ).life_point_by_level;
            TEST.ASSERT.equal( _character.getHealth().getMaxHP(), _expected_hp, "Les PV devraient exclure le niveau desactive, obtenu : " + _character.getHealth().getMaxHP() );
        }
        let _disabled_block            = _levelup_pane.querySelector( ".level-up-block[data-level-name='2']" );
        TEST.ASSERT.notNull( _disabled_block, "Le bloc du niveau 2 devrait rester rendu (desactive)" );
        if ( _disabled_block ) {
            TEST.ASSERT.ok( _disabled_block.classList.contains( "disabled" ), "Le bloc desactive devrait porter la classe disabled" );
            TEST.ASSERT.equal( _disabled_block.querySelectorAll( ".level-up-row" ).length, 0, "Le bloc desactive ne devrait pas afficher de lignes de deblocage, obtenu : " + _disabled_block.querySelectorAll( ".level-up-row" ).length );
        }
        // Le niveau desactive reste ABSENT du detail de la popup (decision
        // utilisateur) : la popup recite les sources restantes a chaque
        // ouverture (reconstruite, etat dynamique)
        let _life_line                  = _levelup_pane.querySelector( ".level-up-life-total" );
        TEST.ASSERT.notNull( _life_line, "La ligne Points de vie devrait etre rendue dans la Progression" );
        if ( !_life_line ) {
            return;
        }
        _life_line.click();
        let _health_overlay             = document.querySelector( ".popup-overlay[data-popup-uuid='character__health'][data-current-phase='RUNNING']" );
        TEST.ASSERT.notNull( _health_overlay, "La popup du detail PV devrait etre ouverte" );
        if ( !_health_overlay ) {
            return;
        }
        let _sources                    = _health_overlay.querySelectorAll( ".popup-health-source" );
        TEST.ASSERT.equal( _sources.length, 3, "La popup devrait porter 3 sources (depart Elfe + les niveaux 1 et 3 actifs), obtenu : " + _sources.length );
        let _disabled_in_detail         = false;
        for ( let i = 0, _size_i = _sources.length; i < _size_i; i++ ) {
            if ( _sources[ i ].textContent.indexOf( "Niveau 2" ) !== -1 ) {
                _disabled_in_detail = true;
            }
        }
        TEST.ASSERT.notOk( _disabled_in_detail, "Le niveau 2 desactive ne devrait pas figurer dans le detail du total" );
        CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": "character__health" } );
        // Re-activation depuis le bloc desactive : totaux et PV restaures
        let _re_toggle                  = _levelup_pane.querySelector( ".level-up-block[data-level-name='2'] .level-up-level-toggle" );
        TEST.ASSERT.notNull( _re_toggle, "L'interrupteur du bloc desactive devrait rester rendu" );
        if ( !_re_toggle ) {
            return;
        }
        _re_toggle.click();
        TEST.ASSERT.equal( _character.getActiveLevel(), 3, "Le niveau re-active devrait compter a nouveau, obtenu : " + _character.getActiveLevel() );
        TEST.ASSERT.equal( _character.getHealth().getMaxHP(), _max_hp_before, "Les PV devraient etre restaures, obtenu : " + _character.getHealth().getMaxHP() );
    } );
} );

// Le changement de classe d'une feuille A UNE classe : retrait complet des
// niveaux de la classe possedee (le - supprime la classe a 0) puis choix de
// la nouvelle — jamais deux classes ensemble (demande utilisateur)
TEST.RUNNER.register( "[NIVEAUX] changement de classe → retrait complet puis nouveau choix", function () {
    TEST.RESET.sheet();
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Un nouveau personnage devrait etre instancie apres le reset" );
    if ( !_character ) {
        return;
    }
    let _con                           = _character.getCharacteristics().getContentByUUID( CHARACTERISTICS.CON.key );
    TEST_openRacePopup();
    return TEST.clickTab( "body > .popup", "Elfe" ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        return TEST_AjouterClasse( "Champion" );
    } ).then( function () {
        TEST.ASSERT.equal( _character.getLevel(), 1, "Champion devrait etre posee a niveau 1, obtenu : " + _character.getLevel() );
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME );
    } ).then( function () {
        let _levelup_pane              = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _levelup_pane, "Le panneau Progression devrait exister" );
        if ( !_levelup_pane ) {
            return;
        }
        let _take_button               = _levelup_pane.querySelector( ".level-up-class-option[data-name='Champion'] .level-up-class-option-take" );
        TEST.ASSERT.notNull( _take_button, "Le plus devrait etre rendu sur le tag Champion" );
        if ( !_take_button ) {
            return;
        }
        _take_button.click();
        TEST.ASSERT.equal( _character.getLevel(), 2, "Le personnage devrait atteindre le niveau 2, obtenu : " + _character.getLevel() );
        // Le detail du total recite la classe d'ORIGINE de chaque niveau
        let _life_line                  = _levelup_pane.querySelector( ".level-up-life-total" );
        TEST.ASSERT.notNull( _life_line, "La ligne Points de vie devrait etre rendue dans la Progression" );
        if ( !_life_line ) {
            return;
        }
        _life_line.click();
        let _health_overlay             = document.querySelector( ".popup-overlay[data-popup-uuid='character__health'][data-current-phase='RUNNING']" );
        TEST.ASSERT.notNull( _health_overlay, "La popup du detail PV devrait etre ouverte" );
        if ( !_health_overlay ) {
            return;
        }
        let _sources                    = _health_overlay.querySelectorAll( ".popup-health-source" );
        TEST.ASSERT.equal( _sources.length, 3, "La popup devrait porter 3 sources (depart Elfe + 2 niveaux), obtenu : " + _sources.length );
        if ( _sources.length === 3 ) {
            TEST.ASSERT.ok( _sources[ 1 ].textContent.indexOf( "Niveau 1 — Champion" ) !== -1, "La source du niveau 1 devrait citer Champion, obtenu : " + _sources[ 1 ].textContent );
            TEST.ASSERT.ok( _sources[ 2 ].textContent.indexOf( "Niveau 2 — Champion" ) !== -1, "La source du niveau 2 devrait citer Champion, obtenu : " + _sources[ 2 ].textContent );
        }
        CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": "character__health" } );
        // Retrait complet : deux - sur la seule classe, puis le conteneur se
        // vide (la classe part a 0 niveaux, le changement devient possible)
        let _remove_button              = _levelup_pane.querySelector( ".level-up-class-option[data-name='Champion'] .level-up-class-option-remove" );
        TEST.ASSERT.notNull( _remove_button, "Le moins devrait etre rendu sur le tag Champion" );
        if ( !_remove_button ) {
            return;
        }
        _remove_button.click();
        TEST.ASSERT.equal( _character.getLevel(), 1, "Le retrait du dernier niveau devrait redescendre a 1, obtenu : " + _character.getLevel() );
        let _remove_button_after        = _levelup_pane.querySelector( ".level-up-class-option[data-name='Champion'] .level-up-class-option-remove" );
        if ( _remove_button_after ) {
            _remove_button_after.click();
        }
        TEST.ASSERT.ok( _character.getClasses().isEmpty(), "Le conteneur de classes devrait etre vide apres le retrait complet, obtenu : " + _character.getClasses().getSize() );
        TEST.ASSERT.equal( _character.getLevel(), 0, "Le niveau total devrait repasser a 0, obtenu : " + _character.getLevel() );
        // Nouveau choix : le popup de selection revient (sans classe posee)
        return TEST_AjouterClasse( "Guerrier" ).then( function () {
            TEST.ASSERT.equal( _character.getClasses().getSize(), 1, "Une seule classe devrait vivre apres le nouveau choix, obtenu : " + _character.getClasses().getSize() );
            TEST.ASSERT.notNull( _character.getClasses().getContentByUUID( "Guerrier" ), "Guerrier devrait etre la nouvelle classe possedee" );
            TEST.ASSERT.equal( _character.getLevel(), 1, "Le nouveau choix part a niveau 1, obtenu : " + _character.getLevel() );
            let _expected_hp            = RACES.getDataByName( "Elfe" ).start_life + CLASSES.getDataByName( "Guerrier" ).life_point_by_level + ( _con ? _con.getModifierValue() : 0 );
            TEST.ASSERT.equal( _character.getHealth().getMaxHP(), _expected_hp, "Les PV totaux devraient melanger le depart d'Elfe et le niveau de Guerrier, obtenu : " + _character.getHealth().getMaxHP() );
        } );
    } );
} );
