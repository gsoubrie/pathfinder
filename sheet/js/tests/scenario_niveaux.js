"use strict";
/**
 * Scenario : NIVEAUX
 * Pre-condition : fin du scenario MULTICLASSE (race Elfe, Champion 1, Guerrier 2,
 * total 3, 3 entrees d'historique, onglets actifs).
 * 1. Moins sur le tag Guerrier (onglet Passage de niveau) : Guerrier redescend a 1,
 *    total 2, entree d'historique supprimee, PV diminues.
 * 2. Moins a nouveau : la classe Guerrier est supprimee completement du conteneur,
 *    il ne reste que Champion 1.
 * 3. Moins sur la derniere classe : conteneur vide, total 0, onglets Niveau et
 *    Passage de niveau re-desactives, zone classe vide avec le bouton d'ajout.
 * 4. Re-ajout de Champion (popup) puis prise d'un 2e niveau : desactivation du
 *    niveau 2 par l'interrupteur du bloc de niveau dans l'onglet Passage de
 *    niveau : niveau actif 1, PV recalculés. L'onglet Niveau affiche l'etat
 *    Actif/Désactivé en libelle non cliquable (ligne grisee) ; chaque ligne
 *    affiche l'icone de la classe d'origine accompagnee de son nom
 *    (.level-class-name). Le bloc du niveau desactive reste rendu (classe
 *    disabled, sans lignes de deblocage) pour porter son interrupteur.
 * 5. Re-activation depuis le bloc desactive : totaux et PV restaures.
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
        TEST.ASSERT.notNull( _pane, "Le panneau Passage de niveau devrait exister" );
        if ( !_pane ) {
            return;
        }
        let _guerrier_option           = _pane.querySelector( ".levelup-class-option[data-name='Guerrier']" );
        TEST.ASSERT.notNull( _guerrier_option, "Le tag Guerrier devrait etre rendu" );
        if ( !_guerrier_option ) {
            return;
        }
        let _remove_button             = _guerrier_option.querySelector( ".levelup-class-option-remove" );
        TEST.ASSERT.notNull( _remove_button, "Le moins devrait etre rendu sur le tag Guerrier (.levelup-class-option-remove)" );
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
        let _guerrier_name             = _pane.querySelector( ".levelup-class-option[data-name='Guerrier'] .levelup-class-option-name" );
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
        TEST.ASSERT.notNull( _pane, "Le panneau Passage de niveau devrait exister" );
        if ( !_pane ) {
            return;
        }
        let _guerrier_option           = _pane.querySelector( ".levelup-class-option[data-name='Guerrier']" );
        TEST.ASSERT.notNull( _guerrier_option, "Le tag Guerrier devrait etre rendu" );
        if ( !_guerrier_option ) {
            return;
        }
        let _remove_button             = _guerrier_option.querySelector( ".levelup-class-option-remove" );
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

TEST.RUNNER.register( "[NIVEAUX] suppression dernière classe → onglets désactivés", function () {
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
        let _pane                      = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Passage de niveau devrait exister" );
        if ( !_pane ) {
            return;
        }
        let _champion_option           = _pane.querySelector( ".levelup-class-option[data-name='Champion']" );
        TEST.ASSERT.notNull( _champion_option, "Le tag Champion devrait etre rendu" );
        if ( !_champion_option ) {
            return;
        }
        let _remove_button             = _champion_option.querySelector( ".levelup-class-option-remove" );
        TEST.ASSERT.notNull( _remove_button, "Le moins devrait etre rendu sur le tag Champion" );
        if ( !_remove_button ) {
            return;
        }
        _remove_button.click();
        TEST.ASSERT.ok( _character.getClasses().isEmpty(), "Le conteneur de classes devrait etre vide" );
        TEST.ASSERT.equal( _character.getLevel(), 0, "Le niveau total devrait etre 0, obtenu : " + _character.getLevel() );
        TEST.ASSERT.equal( _character.getLevelHistory().getSize(), 0, "L'historique des niveaux devrait etre vide" );
        TEST.ASSERT.equal( document.body.dataset.isClassSet, "0", "data-is-class-set devrait repasser a 0" );
        let _tabs                      = [
            { name: CHARACTER.LevelWindow.NAME, label: "Niveau" },
            { name: CHARACTER.LevelUpWindow.NAME, label: "Passage de niveau" }
        ];
        for ( let i = 0, _size_i = _tabs.length; i < _size_i; i++ ) {
            let _tab                   = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + _tabs[ i ].name + "']" );
            TEST.ASSERT.notNull( _tab, "L'onglet " + _tabs[ i ].label + " devrait exister" );
            if ( !_tab ) {
                continue;
            }
            TEST.ASSERT.equal( _tab.getAttribute( "data-visibility-state" ), "disabled", "L'onglet " + _tabs[ i ].label + " devrait porter l'etat disabled" );
            TEST.ASSERT.equal( getComputedStyle( _tab ).opacity, "0.4", "L'onglet " + _tabs[ i ].label + " devrait etre grise, obtenu : " + getComputedStyle( _tab ).opacity );
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
        TEST.ASSERT.notNull( _pane, "Le panneau Passage de niveau devrait exister" );
        if ( !_pane ) {
            return;
        }
        let _take_button               = _pane.querySelector( ".levelup-class-option[data-name='Champion'] .levelup-class-option-take" );
        TEST.ASSERT.notNull( _take_button, "Le plus devrait etre rendu sur le tag Champion" );
        if ( !_take_button ) {
            return;
        }
        _take_button.click();
        TEST.ASSERT.equal( _character.getLevel(), 2, "Le niveau total devrait passer a 2, obtenu : " + _character.getLevel() );
        TEST.ASSERT.equal( _character.getLevelHistory().getSize(), 2, "L'historique devrait contenir 2 niveaux" );
        let _max_hp_before             = _character.getHealth().getMaxHP();
        let _block_toggle              = _pane.querySelector( ".levelup-block[data-level-name='2'] .levelup-level-toggle" );
        TEST.ASSERT.notNull( _block_toggle, "Le bloc du niveau 2 devrait porter l'interrupteur (.levelup-level-toggle)" );
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
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelWindow.NAME ).then( function () {
            let _level_pane             = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelWindow.NAME + "']" );
            TEST.ASSERT.notNull( _level_pane, "Le panneau Niveau devrait exister" );
            if ( !_level_pane ) {
                return;
            }
            let _rows                  = _level_pane.querySelectorAll( ".life-table tr[data-level-name]" );
            TEST.ASSERT.equal( _rows.length, 2, "Le tableau devrait afficher 2 niveaux, obtenu : " + _rows.length );
            if ( _rows.length < 2 ) {
                return;
            }
            let _row_icon              = _rows[ 1 ].querySelector( ".level-class-icon" );
            TEST.ASSERT.notNull( _row_icon, "Chaque ligne devrait afficher l'icone de la classe d'origine du niveau (.level-class-icon)" );
            if ( _row_icon ) {
                TEST.ASSERT.equal( _row_icon.textContent, CLASSES.ICONS[ "Champion" ], "L'icone de la ligne devrait etre celle de Champion, obtenu : " + _row_icon.textContent );
            }
            let _row_class_name        = _rows[ 1 ].querySelector( ".level-class-name" );
            TEST.ASSERT.notNull( _row_class_name, "Chaque ligne devrait afficher le nom de la classe d'origine du niveau a cote de l'icone (.level-class-name)" );
            if ( _row_class_name ) {
                TEST.ASSERT.equal( _row_class_name.textContent, "Champion", "Le nom affiche a cote de l'icone devrait etre la classe d'origine du niveau, obtenu : " + _row_class_name.textContent );
            }
            let _state_label           = _rows[ 1 ].querySelector( ".level-toggle" );
            TEST.ASSERT.notNull( _state_label, "Chaque ligne devrait afficher l'etat Actif/Désactivé en libelle (.level-toggle)" );
            if ( !_state_label ) {
                return;
            }
            TEST.ASSERT.isNull( _state_label.getAttribute( "onclick" ), "Le libelle Actif/Désactivé ne devrait pas etre cliquable dans l'onglet Niveau (l'interrupteur vit dans Passage de niveau), obtenu : [" + _state_label.getAttribute( "onclick" ) + "]" );
            TEST.ASSERT.equal( _state_label.textContent, "Désactivé", "Le libelle devrait afficher Désactivé, obtenu : " + _state_label.textContent );
            TEST.ASSERT.notEqual( getComputedStyle( _state_label ).cursor, "pointer", "Le libelle ne devrait pas avoir le curseur d'un bouton, obtenu : " + getComputedStyle( _state_label ).cursor );
            TEST.ASSERT.equal( getComputedStyle( _rows[ 1 ] ).opacity, "0.4", "La ligne du niveau desactive devrait etre grisee, obtenu : " + getComputedStyle( _rows[ 1 ] ).opacity );
            return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
                let _levelup_pane      = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
                TEST.ASSERT.notNull( _levelup_pane, "Le panneau Passage de niveau devrait exister" );
                if ( !_levelup_pane ) {
                    return;
                }
                let _header_level      = _levelup_pane.querySelector( ".levelup-header-level" );
                if ( _header_level ) {
                    TEST.ASSERT.equal( _header_level.textContent, "Niveau 2 (1 actif)", "L'entete devrait afficher le total et les niveaux actifs, obtenu : " + _header_level.textContent );
                }
                let _blocks            = _levelup_pane.querySelectorAll( ".levelup-block" );
                TEST.ASSERT.equal( _blocks.length, 2, "Chaque niveau devrait garder son bloc (meme desactive, pour son interrupteur), obtenu : " + _blocks.length );
                let _disabled_block    = _levelup_pane.querySelector( ".levelup-block[data-level-name='2']" );
                TEST.ASSERT.notNull( _disabled_block, "Le bloc du niveau 2 devrait exister" );
                if ( _disabled_block ) {
                    TEST.ASSERT.ok( _disabled_block.classList.contains( "disabled" ), "Le bloc du niveau desactive devrait porter la classe disabled" );
                    TEST.ASSERT.equal( _disabled_block.querySelectorAll( ".levelup-row" ).length, 0, "Le bloc du niveau desactive ne devrait pas afficher de lignes de deblocage" );
                    let _block_state   = _disabled_block.querySelector( ".levelup-level-toggle" );
                    if ( _block_state ) {
                        TEST.ASSERT.equal( _block_state.textContent, "Désactivé", "L'interrupteur du bloc desactive devrait afficher Désactivé, obtenu : " + _block_state.textContent );
                    }
                }
            } );
        } );
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
        TEST.ASSERT.notNull( _levelup_pane, "Le panneau Passage de niveau devrait exister" );
        if ( !_levelup_pane ) {
            return;
        }
        let _toggle                    = _levelup_pane.querySelector( ".levelup-block[data-level-name='2'] .levelup-level-toggle" );
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
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelWindow.NAME ).then( function () {
            let _level_pane            = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelWindow.NAME + "']" );
            TEST.ASSERT.notNull( _level_pane, "Le panneau Niveau devrait exister" );
            if ( !_level_pane ) {
                return;
            }
            let _row                   = _level_pane.querySelector( ".life-table tr[data-level-name='2']" );
            if ( _row ) {
                TEST.ASSERT.equal( getComputedStyle( _row ).opacity, "1", "La ligne re-activee ne devrait plus etre grisee, obtenu : " + getComputedStyle( _row ).opacity );
                let _state_label       = _row.querySelector( ".level-toggle" );
                if ( _state_label ) {
                    TEST.ASSERT.equal( _state_label.textContent, "Activé", "Le libelle devrait reafficher Activé, obtenu : " + _state_label.textContent );
                }
            }
            return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
                let _levelup_pane      = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
                if ( !_levelup_pane ) {
                    return;
                }
                let _header_level      = _levelup_pane.querySelector( ".levelup-header-level" );
                if ( _header_level ) {
                    TEST.ASSERT.equal( _header_level.textContent, "Niveau 2", "L'entete devrait reafficher le total sans mention d'actifs, obtenu : " + _header_level.textContent );
                }
            } );
        } );
    } );
} );

TEST.RUNNER.register( "[NIVEAUX][SAVE] save → load = enabled restauré", function () {
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    let _levelup_pane                  = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
    TEST.ASSERT.notNull( _levelup_pane, "Pre-condition : panneau Passage de niveau ouvert" );
    if ( !_levelup_pane ) {
        return;
    }
    let _level_name                    = "2";
    let _toggle                        = _levelup_pane.querySelector( ".levelup-block[data-level-name='" + _level_name + "'] .levelup-level-toggle" );
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
