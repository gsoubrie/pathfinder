"use strict";
/**
 * Scenario : NIVEAUX - plusieurs niveaux et multiclasse
 * L'onglet Niveau affiche une ligne par niveau (icone + nom de la classe
 * d'origine + numero, PV de la ligne, etat Actif/Désactivé en libelle non
 * cliquable) ; les interrupteurs Actif/Désactivé vivent dans les blocs de
 * l'onglet Passage de niveau (un bloc par niveau, y compris desactive, pour
 * permettre la re-activation).
 * Depart de chaque etape : feuille vide (TEST.RESET.sheet()) puis race Elfe.
 * 1. Classe unique poussee a 3 niveaux : 3 lignes conformes (nom, icone,
 *    etat), 3 blocs avec interrupteurs câbles, PV totaux attendus.
 * 2. Desactivation du niveau 2 : actif 2, PV recalculés, bloc 2 desactive
 *    sans lignes de deblocage, ligne grisee ; re-activation restaure tout.
 * 3. Multiclasse (Champion 1 puis Guerrier 2, total 3) : chaque ligne porte
 *    la classe d'origine de son niveau (Champion, Guerrier, Guerrier) ; PV
 *    melant les deux classes ; desactivation puis re-activation du dernier
 *    niveau Guerrier sans toucher aux niveaux de classe.
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
        TEST.ASSERT.notNull( _levelup_pane, "Le panneau Passage de niveau devrait exister" );
        if ( !_levelup_pane ) {
            return;
        }
        for ( let i = 0; i < 2; i++ ) {
            let _take_button           = _levelup_pane.querySelector( ".levelup-class-option[data-name='Champion'] .levelup-class-option-take" );
            TEST.ASSERT.notNull( _take_button, "Le plus devrait etre rendu sur le tag Champion (prise " + ( i + 1 ) + ")" );
            if ( !_take_button ) {
                return;
            }
            _take_button.click();
        }
        TEST.ASSERT.equal( _character.getLevel(), 3, "Le personnage devrait atteindre le niveau 3, obtenu : " + _character.getLevel() );
        TEST.ASSERT.equal( _character.getActiveLevel(), 3, "Les 3 niveaux devraient etre actifs, obtenu : " + _character.getActiveLevel() );
        let _blocks                     = _levelup_pane.querySelectorAll( ".levelup-block" );
        TEST.ASSERT.equal( _blocks.length, 3, "Chaque niveau devrait avoir son bloc, obtenu : " + _blocks.length );
        for ( let i = 0, _size_i = 3; i < _size_i; i++ ) {
            let _block                 = _levelup_pane.querySelector( ".levelup-block[data-level-name='" + ( i + 1 ) + "']" );
            TEST.ASSERT.notNull( _block, "Le bloc du niveau " + ( i + 1 ) + " devrait exister (data-level-name)" );
            if ( !_block ) {
                continue;
            }
            let _toggle                = _block.querySelector( ".levelup-level-toggle" );
            TEST.ASSERT.notNull( _toggle, "Le bloc du niveau " + ( i + 1 ) + " devrait porter l'interrupteur (.levelup-level-toggle)" );
            if ( _toggle ) {
                TEST.ASSERT.ok( _toggle.getAttribute( "onclick" ).indexOf( "event__level__toggle" ) !== -1, "L'interrupteur du niveau " + ( i + 1 ) + " devrait etre câble sur event__level__toggle, obtenu : [" + _toggle.getAttribute( "onclick" ) + "]" );
            }
        }
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelWindow.NAME ).then( function () {
            let _level_pane            = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelWindow.NAME + "']" );
            TEST.ASSERT.notNull( _level_pane, "Le panneau Niveau devrait exister" );
            if ( !_level_pane ) {
                return;
            }
            let _rows                  = _level_pane.querySelectorAll( ".life-table tr[data-level-name]" );
            TEST.ASSERT.equal( _rows.length, 3, "Le tableau devrait afficher 3 niveaux, obtenu : " + _rows.length );
            if ( _rows.length < 3 ) {
                return;
            }
            for ( let i = 0; i < 3; i++ ) {
                TEST.ASSERT.equal( _rows[ i ].getAttribute( "data-level-name" ), "" + ( i + 1 ), "La ligne " + ( i + 1 ) + " devrait porter data-level-name " + ( i + 1 ) + ", obtenu : " + _rows[ i ].getAttribute( "data-level-name" ) );
                let _name               = _rows[ i ].querySelector( ".level-class-name" );
                TEST.ASSERT.notNull( _name, "La ligne " + ( i + 1 ) + " devrait afficher le nom de la classe d'origine" );
                if ( _name ) {
                    TEST.ASSERT.equal( _name.textContent, "Champion", "Le nom de la ligne " + ( i + 1 ) + " devrait etre Champion, obtenu : " + _name.textContent );
                }
                let _icon               = _rows[ i ].querySelector( ".level-class-icon" );
                if ( _icon ) {
                    TEST.ASSERT.equal( _icon.textContent, CLASSES.ICONS[ "Champion" ], "L'icone de la ligne " + ( i + 1 ) + " devrait etre celle de Champion, obtenu : " + _icon.textContent );
                }
                let _state              = _rows[ i ].querySelector( ".level-toggle" );
                TEST.ASSERT.notNull( _state, "La ligne " + ( i + 1 ) + " devrait afficher l'etat Actif" );
                if ( _state ) {
                    TEST.ASSERT.equal( _state.textContent, "Activé", "L'etat de la ligne " + ( i + 1 ) + " devrait etre Activé, obtenu : " + _state.textContent );
                    TEST.ASSERT.isNull( _state.getAttribute( "onclick" ), "L'etat de la ligne " + ( i + 1 ) + " ne devrait pas etre cliquable dans l'onglet Niveau, obtenu : [" + _state.getAttribute( "onclick" ) + "]" );
                }
            }
            let _con                    = _character.getCharacteristics().getContentByUUID( CHARACTERISTICS.CON.key );
            let _expected_hp            = 3 * CLASSES.getDataByName( "Champion" ).life_point_by_level + 3 * ( _con ? _con.getModifierValue() : 0 );
            TEST.ASSERT.equal( _character.getHealth().getMaxHP(), _expected_hp, "Les PV totaux devraient valoir 3 niveaux de Champion + CON par niveau, obtenu : " + _character.getHealth().getMaxHP() );
            let _total                  = _level_pane.querySelector( ".life-total" );
            if ( _total ) {
                TEST.ASSERT.ok( _total.textContent.indexOf( "" + _expected_hp ) !== -1, "Le libelle total devrait afficher " + _expected_hp + ", obtenu : " + _total.textContent );
            }
        } );
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
        TEST.ASSERT.notNull( _levelup_pane, "Le panneau Passage de niveau devrait exister" );
        if ( !_levelup_pane ) {
            return;
        }
        let _toggle                    = _levelup_pane.querySelector( ".levelup-block[data-level-name='2'] .levelup-level-toggle" );
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
        let _disabled_block            = _levelup_pane.querySelector( ".levelup-block[data-level-name='2']" );
        TEST.ASSERT.notNull( _disabled_block, "Le bloc du niveau 2 devrait rester rendu (desactive)" );
        if ( _disabled_block ) {
            TEST.ASSERT.ok( _disabled_block.classList.contains( "disabled" ), "Le bloc desactive devrait porter la classe disabled" );
            TEST.ASSERT.equal( _disabled_block.querySelectorAll( ".levelup-row" ).length, 0, "Le bloc desactive ne devrait pas afficher de lignes de deblocage, obtenu : " + _disabled_block.querySelectorAll( ".levelup-row" ).length );
        }
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelWindow.NAME ).then( function () {
            let _level_pane            = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelWindow.NAME + "']" );
            if ( !_level_pane ) {
                return;
            }
            let _rows                  = _level_pane.querySelectorAll( ".life-table tr[data-level-name]" );
            TEST.ASSERT.equal( _rows.length, 3, "Le tableau devrait toujours afficher 3 niveaux, obtenu : " + _rows.length );
            if ( _rows.length < 3 ) {
                return;
            }
            TEST.ASSERT.equal( getComputedStyle( _rows[ 1 ] ).opacity, "0.4", "La ligne du niveau desactive devrait etre grisee, obtenu : " + getComputedStyle( _rows[ 1 ] ).opacity );
            let _state_2               = _rows[ 1 ].querySelector( ".level-toggle" );
            if ( _state_2 ) {
                TEST.ASSERT.equal( _state_2.textContent, "Désactivé", "Le libelle de la ligne 2 devrait afficher Désactivé, obtenu : " + _state_2.textContent );
            }
            let _state_3               = _rows[ 2 ].querySelector( ".level-toggle" );
            if ( _state_3 ) {
                TEST.ASSERT.equal( _state_3.textContent, "Activé", "Le libelle de la ligne 3 devrait rester Activé, obtenu : " + _state_3.textContent );
            }
            return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
                let _re_toggle         = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .levelup-block[data-level-name='2'] .levelup-level-toggle" );
                TEST.ASSERT.notNull( _re_toggle, "L'interrupteur du bloc desactive devrait rester rendu" );
                if ( !_re_toggle ) {
                    return;
                }
                _re_toggle.click();
                TEST.ASSERT.equal( _character.getActiveLevel(), 3, "Le niveau re-active devrait compter a nouveau, obtenu : " + _character.getActiveLevel() );
                TEST.ASSERT.equal( _character.getHealth().getMaxHP(), _max_hp_before, "Les PV devraient etre restaures, obtenu : " + _character.getHealth().getMaxHP() );
            } );
        } );
    } );
} );

TEST.RUNNER.register( "[NIVEAUX] multiclasse → lignes Champion, Guerrier ×2", function () {
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
        return TEST_AjouterClasse( "Guerrier" );
    } ).then( function () {
        TEST.ASSERT.equal( _character.getLevel(), 2, "Pre-condition : Champion 1 + Guerrier 1, obtenu : " + _character.getLevel() );
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME );
    } ).then( function () {
        let _levelup_pane              = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _levelup_pane, "Le panneau Passage de niveau devrait exister" );
        if ( !_levelup_pane ) {
            return;
        }
        let _take_button               = _levelup_pane.querySelector( ".levelup-class-option[data-name='Guerrier'] .levelup-class-option-take" );
        TEST.ASSERT.notNull( _take_button, "Le plus devrait etre rendu sur le tag Guerrier" );
        if ( !_take_button ) {
            return;
        }
        _take_button.click();
        TEST.ASSERT.equal( _character.getLevel(), 3, "Le personnage devrait atteindre le niveau 3, obtenu : " + _character.getLevel() );
        let _expected_rows             = [ "Champion", "Guerrier", "Guerrier" ];
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelWindow.NAME ).then( function () {
            let _level_pane            = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelWindow.NAME + "']" );
            TEST.ASSERT.notNull( _level_pane, "Le panneau Niveau devrait exister" );
            if ( !_level_pane ) {
                return;
            }
            let _rows                  = _level_pane.querySelectorAll( ".life-table tr[data-level-name]" );
            TEST.ASSERT.equal( _rows.length, 3, "Le tableau devrait afficher 3 niveaux, obtenu : " + _rows.length );
            if ( _rows.length < 3 ) {
                return;
            }
            for ( let i = 0, _size_i = _expected_rows.length; i < _size_i; i++ ) {
                let _name              = _rows[ i ].querySelector( ".level-class-name" );
                TEST.ASSERT.notNull( _name, "La ligne " + ( i + 1 ) + " devrait afficher le nom de la classe d'origine" );
                if ( !_name ) {
                    continue;
                }
                TEST.ASSERT.equal( _name.textContent, _expected_rows[ i ], "La ligne " + ( i + 1 ) + " devrait afficher " + _expected_rows[ i ] + ", obtenu : " + _name.textContent );
                let _icon              = _rows[ i ].querySelector( ".level-class-icon" );
                if ( _icon ) {
                    TEST.ASSERT.equal( _icon.textContent, CLASSES.ICONS[ _expected_rows[ i ] ], "L'icone de la ligne " + ( i + 1 ) + " devrait etre celle de " + _expected_rows[ i ] + ", obtenu : " + _icon.textContent );
                }
            }
            let _con                   = _character.getCharacteristics().getContentByUUID( CHARACTERISTICS.CON.key );
            let _expected_hp           = CLASSES.getDataByName( "Champion" ).life_point_by_level + 2 * CLASSES.getDataByName( "Guerrier" ).life_point_by_level + 3 * ( _con ? _con.getModifierValue() : 0 );
            TEST.ASSERT.equal( _character.getHealth().getMaxHP(), _expected_hp, "Les PV totaux devraient melanger les PV des deux classes, obtenu : " + _character.getHealth().getMaxHP() );
            let _max_hp_before         = _character.getHealth().getMaxHP();
            return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
                let _toggle            = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .levelup-block[data-level-name='3'] .levelup-level-toggle" );
                TEST.ASSERT.notNull( _toggle, "L'interrupteur du niveau 3 devrait etre rendu dans son bloc" );
                if ( !_toggle ) {
                    return;
                }
                _toggle.click();
                TEST.ASSERT.equal( _character.getActiveLevel(), 2, "Le niveau actif devrait descendre a 2, obtenu : " + _character.getActiveLevel() );
                if ( _con ) {
                    let _expected      = _max_hp_before - _con.getModifierValue() - CLASSES.getDataByName( "Guerrier" ).life_point_by_level;
                    TEST.ASSERT.equal( _character.getHealth().getMaxHP(), _expected, "Les PV devraient exclure le niveau Guerrier desactive, obtenu : " + _character.getHealth().getMaxHP() );
                }
                TEST.ASSERT.equal( _character.getClasses().getContentByUUID( "Guerrier" ).getLevel(), 2, "Le niveau de la classe Guerrier ne devrait pas bouger, obtenu : " + _character.getClasses().getContentByUUID( "Guerrier" ).getLevel() );
                TEST.ASSERT.equal( _character.getClasses().getContentByUUID( "Champion" ).getLevel(), 1, "Le niveau de la classe Champion ne devrait pas bouger, obtenu : " + _character.getClasses().getContentByUUID( "Champion" ).getLevel() );
                let _re_toggle         = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .levelup-block[data-level-name='3'] .levelup-level-toggle" );
                if ( _re_toggle ) {
                    _re_toggle.click();
                    TEST.ASSERT.equal( _character.getActiveLevel(), 3, "Le niveau re-active devrait compter a nouveau, obtenu : " + _character.getActiveLevel() );
                }
            } );
        } );
    } );
} );
