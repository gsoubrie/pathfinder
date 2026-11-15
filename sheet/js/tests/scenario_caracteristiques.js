"use strict";
/**
 * Scenario : CARACTERISTIQUES
 * Depart : feuille vide (TEST.RESET.sheet()). Ajout de la race Elfe via le
 * popup, puis travail dans la grille des caracteristiques, en tete de
 * l'onglet Progression (l'ancien onglet Caracteristiques a fusionne dedans :
 * le badge de l'onglet vaut la SOMME des compteurs du contenu, bonus libres
 * + lignes de progression en attente).
 * Elfe : bonus forces DEX et INT, malus force CON, 1 bonus libre (choice FREE).
 * PF2 : la creation accorde en outre 4 boosts de +2 (colonne Niv1 de la
 * grille) — a repartir sur 4 caracteristiques differentes, ils restent en
 * attente dans les compteurs tant qu'ils ne sont pas poses.
 * 1. Page vide : le pool de creation attend deja ses 4 boosts ; ajout de la
 *    race Elfe → onglet actif + compteur warning (4 creation + 1 libre race).
 * 2. Ouverture de l'onglet : conteneur + 6 lignes rendues, bonus forces de la
 *    race appliques (DEX et INT a 12, malus CON a 8) ; les 4 boosts de
 *    creation se posent en +2 sur la colonne Niv1, une prime par
 *    caracteristique (le + d'une cellule posee s'attenue).
 * 3. Prise du bonus libre sur FOR via le + de la colonne Race : bonus pose
 *    (final 12), compteur d'onglet masque.
 * 4. Retrait du bonus FOR via le - : compteur de retour a "1" ; nouveau choix
 *    sur CHA : bonus pose sur CHA, compteur masque.
 * 5. Bonus forces de la race (DEX, INT, malus CON) : phase SETTINGS_FORCED,
 *    boutons + et - masques (non modifiables) ; contraste : le bouton - du
 *    bonus libre pose sur CHA reste visible.
 * 6. Changement de race pour Humain (2 libres, aucun force) : compteur "2",
 *    bonus et malus forces de l'Elfe retires, toutes les cellules en
 *    SETTINGS_TO_EDIT avec le + visible.
 * 7. Pose des 2 libres sur FOR puis DEX : compteur 1 puis masque ; contraste :
 *    le - du bonus pose reste actif, le + est attenue.
 */

function TEST_caracteristiquesBadge() {
    return ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .gs-counter.gs-warnings-counter";
}

// Le badge vaut la SOMME des compteurs du contenu de la Progression : les
// bonus de caracteristiques en attente + les lignes de progression non
// validees (don d'ascendance, langues)
function TEST_caracteristiquesBadgeExpected( character_object ) {
    let _expected            = character_object.getCharacteristics().getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
    let _ancestry_history    = character_object.getAncestryHistory();
    for ( let i = 0, _size_i = _ancestry_history.getSize(); i < _size_i; i++ ) {
        let _entry           = _ancestry_history.getContent( i );
        for ( let l = 0, _size_l = _entry.getSize(); l < _size_l; l++ ) {
            if ( !_entry.getContent( l ).isActive() ) {
                _expected++;
            }
        }
    }
    let _levels_history      = character_object.getLevelHistory();
    for ( let i = 0, _size_i = _levels_history.getSize(); i < _size_i; i++ ) {
        let _entry           = _levels_history.getContent( i );
        for ( let l = 0, _size_l = _entry.getSize(); l < _size_l; l++ ) {
            if ( !_entry.getContent( l ).isActive() ) {
                _expected++;
            }
        }
    }
    return _expected;
}

function TEST_caracteristiquesBadgeNumber( character_object ) {
    let _expected = TEST_caracteristiquesBadgeExpected( character_object );
    return _expected === 0 ? "" : "" + _expected;
}

// PF2 : la creation accorde 4 boosts, a repartir sur des caracteristiques
// differentes — ils restent en attente tant que le joueur ne les pose pas
// (colonnes Niv1 de la grille)
function TEST_caracteristiquesCreationPending() {
    return CONTROLLER.Character.current_character.getCharacteristics().getLevel1Bonus().bonus.getFreeNumber();
}

TEST.RUNNER.register( "[CARACTERISTIQUES] page vide → race Elfe → compteur = 4 boosts de création + libre de race", function () {
    TEST.RESET.sheet();
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Un nouveau personnage devrait etre instancie apres le reset" );
    if ( !_character ) {
        return;
    }
    TEST.ASSERT.notOk( _character.getRace().isSet(), "Pre-condition : race vide apres le reset" );
    TEST.ASSERT.ok( _character.getClasses().isEmpty(), "Pre-condition : aucune classe apres le reset" );
    // PF2 : les boosts de creation appartiennent a TOUT personnage — le
    // pool se distribue des la naissance de la feuille, le badge les
    // attend deja sur la page vierge
    TEST.ASSERT.equal( TEST_caracteristiquesCreationPending(), 4, "Le pool de creation devrait porter ses 4 boosts, obtenu : " + TEST_caracteristiquesCreationPending() );
    TEST_openRacePopup();
    return TEST.clickTab( "body > .popup", "Elfe" ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        TEST.ASSERT.ok( _character.getRace().isSet(), "La race Elfe devrait etre posee apres validation" );
        let _tab                       = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _tab, "L'onglet Caracteristiques devrait exister" );
        if ( !_tab ) {
            return;
        }
        TEST.ASSERT.notEqual( _tab.getAttribute( "data-visibility-state" ), "disabled", "L'onglet Caracteristiques devrait etre actif apres le choix de l'ascendance" );
        TEST.ASSERT.equal( _character.getCharacteristics().getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ), TEST_caracteristiquesCreationPending() + 1, "Le compteur warning devrait valoir les boosts de creation + 1 : un choix de bonus de race en attente" );
        return TEST.waitCounterValue( document.querySelector( TEST_caracteristiquesBadge() ), TEST_caracteristiquesBadgeNumber( _character ) );
    } ).then( function () {
        let _counter                   = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
        if ( !_counter ) {
            TEST.ASSERT.notNull( _counter, "Le compteur warning devrait exister sur l'onglet (.gs-warnings-counter)" );
            return;
        }
        TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), TEST_caracteristiquesBadgeNumber( _character ), "Le badge devrait valoir la somme des compteurs de la Progression, obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );
    } );
} );

TEST.RUNNER.register( "[CARACTERISTIQUES] affichage = 6 lignes", function () {
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
        let _pane                      = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Caracteristiques devrait exister" );
        if ( !_pane ) {
            return;
        }
        TEST.ASSERT.notNull( _pane.querySelector( ".characteristic-container" ), "Le conteneur des caracteristiques devrait etre rendu (.characteristic-container)" );
        let _lines                      = _pane.querySelectorAll( ".characteristic-line" );
        TEST.ASSERT.equal( _lines.length, 6, "Les 6 lignes de caracteristiques devraient etre rendues, obtenu : " + _lines.length );
        let _keys                       = ["FOR", "DEX", "CON", "INT", "SAG", "CHA"];
        for ( let i = 0, _size_i = _keys.length; i < _size_i; i++ ) {
            TEST.ASSERT.notNull( _pane.querySelector( ".characteristic-line[data-name='" + _keys[ i ] + "']" ), "La ligne " + _keys[ i ] + " devrait exister" );
        }
        let _con_final                  = _pane.querySelector( ".characteristic-line[data-name='CON'] .characteristic-final-value" );
        if ( _con_final ) {
            TEST.ASSERT.ok( _con_final.textContent.indexOf( "8" ) !== -1, "CON devrait afficher 8 (malus force de la race Elfe), obtenu : " + _con_final.textContent );
        }
        let _dex_final                  = _pane.querySelector( ".characteristic-line[data-name='DEX'] .characteristic-final-value" );
        if ( _dex_final ) {
            TEST.ASSERT.ok( _dex_final.textContent.indexOf( "12" ) !== -1, "DEX devrait afficher 12 (bonus force de la race Elfe), obtenu : " + _dex_final.textContent );
        }
        let _int_final                  = _pane.querySelector( ".characteristic-line[data-name='INT'] .characteristic-final-value" );
        if ( _int_final ) {
            TEST.ASSERT.ok( _int_final.textContent.indexOf( "12" ) !== -1, "INT devrait afficher 12 (bonus force de la race Elfe), obtenu : " + _int_final.textContent );
        }
        let _for_final                  = _pane.querySelector( ".characteristic-line[data-name='FOR'] .characteristic-final-value" );
        if ( _for_final ) {
            TEST.ASSERT.ok( _for_final.textContent.indexOf( "10" ) !== -1, "FOR devrait afficher 10 (aucun bonus pose), obtenu : " + _for_final.textContent );
        }
    } );
} );

// PF2 : la creation accorde 4 boosts de +2, un par caracteristique — la
// colonne Niv1 consomme le pool de creation du conteneur, la valeur se
// pose PLEINE (2) et le + d'une cellule posee s'attenue : pas deux primes
// sur la meme caracteristique
TEST.RUNNER.register( "[CARACTERISTIQUES] Niv1 : les 4 boosts de création se posent en +2", function () {
    let _pane                          = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Caracteristiques ouvert" );
    if ( !_pane ) {
        return;
    }
    let _character                     = CONTROLLER.Character.current_character;
    let _characteristics               = _character.getCharacteristics();
    TEST.ASSERT.equal( TEST_caracteristiquesCreationPending(), 4, "Le pool de creation devrait attendre ses 4 boosts, obtenu : " + TEST_caracteristiquesCreationPending() );
    let _for_line                      = _pane.querySelector( ".characteristic-line[data-name='FOR']" );
    TEST.ASSERT.notNull( _for_line, "La ligne FOR devrait exister" );
    if ( !_for_line ) {
        return;
    }
    let _level1_cell                   = _for_line.querySelector( ".characteristic-bonus-level1 [data-current-phase]" );
    TEST.ASSERT.notNull( _level1_cell, "La cellule Niv1 de FOR devrait exister" );
    if ( !_level1_cell ) {
        return;
    }
    TEST.ASSERT.equal( _level1_cell.getAttribute( "data-current-phase" ), GS.OBJECT.CONST.PHASE.SETTINGS_TO_EDIT, "La cellule Niv1 de FOR devrait etre editable (phase au pool), obtenu : " + _level1_cell.getAttribute( "data-current-phase" ) );
    let _more_button                   = _for_line.querySelector( ".characteristic-bonus-level1 [data-name='event__more_button']" );
    TEST.ASSERT.notNull( _more_button, "Le + de la cellule Niv1 de FOR devrait etre rendu" );
    if ( !_more_button ) {
        return;
    }
    let _for                           = _characteristics.getContentByUUID( "FOR" );
    let _final                         = _for_line.querySelector( ".characteristic-final-value" );
    _more_button.click();
    TEST.ASSERT.equal( _for.level1_bonus.getValue(), 2, "Le boost de creation devrait se poser en +2, obtenu : " + _for.level1_bonus.getValue() );
    TEST.ASSERT.equal( _for.getModifierValue(), 1, "Le modificateur de FOR devrait valoir +1, obtenu : " + _for.getModifierValue() );
    if ( _final ) {
        TEST.ASSERT.ok( _final.textContent.indexOf( "12" ) !== -1, "La valeur finale de FOR devrait suivre a 12, obtenu : " + _final.textContent );
    }
    TEST.ASSERT.equal( TEST_caracteristiquesCreationPending(), 3, "Le pool de creation devrait descendre a 3 apres la pose, obtenu : " + TEST_caracteristiquesCreationPending() );
    TEST.ASSERT.equal( getComputedStyle( _more_button ).pointerEvents, "none", "Le + de la cellule posee devrait s'attenue (une seule prime par caracteristique), obtenu : " + getComputedStyle( _more_button ).pointerEvents );
    let _less_button                   = _for_line.querySelector( ".characteristic-bonus-level1 [data-name='event__less_button']" );
    TEST.ASSERT.notNull( _less_button, "Le - de la cellule Niv1 de FOR devrait etre rendu" );
    if ( !_less_button ) {
        return;
    }
    _less_button.click();
    TEST.ASSERT.equal( _for.level1_bonus.getValue(), 0, "Le retrait devrait rendre la cellule Niv1 a 0, obtenu : " + _for.level1_bonus.getValue() );
    TEST.ASSERT.equal( TEST_caracteristiquesCreationPending(), 4, "Le pool de creation devrait etre restaure a 4, obtenu : " + TEST_caracteristiquesCreationPending() );
} );

TEST.RUNNER.register( "[CARACTERISTIQUES] + FOR → bonus posé, il ne reste que les boosts de création", function () {
    let _character                     = CONTROLLER.Character.current_character;
    let _pane                          = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Caracteristiques ouvert" );
    if ( !_pane ) {
        return;
    }
    let _for_line                      = _pane.querySelector( ".characteristic-line[data-name='FOR']" );
    TEST.ASSERT.notNull( _for_line, "La ligne FOR devrait exister" );
    if ( !_for_line ) {
        return;
    }
    let _more_button                   = _for_line.querySelector( ".characteristic-bonus-race [data-name='event__more_button']" );
    TEST.ASSERT.notNull( _more_button, "Le bouton + du bonus de race de FOR devrait etre rendu" );
    if ( !_more_button ) {
        return;
    }
    _more_button.click();
    let _for                           = _character.getCharacteristics().getContentByUUID( "FOR" );
    TEST.ASSERT.equal( _for.race_bonus.getValue(), 2, "Le bonus de race de FOR devrait valoir 2, obtenu : " + _for.race_bonus.getValue() );
    TEST.ASSERT.equal( _for.getModifierValue(), 1, "Le modificateur de FOR devrait valoir +1, obtenu : " + _for.getModifierValue() );
    let _for_final                     = _pane.querySelector( ".characteristic-line[data-name='FOR'] .characteristic-final-value" );
    if ( _for_final ) {
        TEST.ASSERT.ok( _for_final.textContent.indexOf( "12" ) !== -1, "La ligne FOR devrait afficher 12 apres le bonus, obtenu : " + _for_final.textContent );
    }
    TEST.ASSERT.equal( _character.getCharacteristics().getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ), TEST_caracteristiquesCreationPending(), "Le compteur warning ne devrait plus porter que les boosts de creation apres le choix, obtenu : " + _character.getCharacteristics().getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ) );
    return TEST.waitCounterValue( document.querySelector( TEST_caracteristiquesBadge() ), TEST_caracteristiquesBadgeNumber( _character ) ).then( function () {
        let _counter                   = document.querySelector( TEST_caracteristiquesBadge() );
        TEST.ASSERT.notNull( _counter, "Le compteur warning devrait exister sur l'onglet (.gs-warnings-counter)" );
        TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), TEST_caracteristiquesBadgeNumber( _character ), "Le badge devrait valoir la somme des compteurs de la Progression (les lignes en attente restent), obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );
    } );
} );

TEST.RUNNER.register( "[CARACTERISTIQUES] − FOR puis + CHA → choix déplacé", function () {
    let _character                     = CONTROLLER.Character.current_character;
    let _pane                          = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Caracteristiques ouvert" );
    if ( !_pane ) {
        return;
    }
    let _less_button                   = _pane.querySelector( ".characteristic-line[data-name='FOR'] .characteristic-bonus-race [data-name='event__less_button']" );
    TEST.ASSERT.notNull( _less_button, "Le bouton - du bonus de race de FOR devrait etre rendu" );
    if ( !_less_button ) {
        return;
    }
    _less_button.click();
    let _for                           = _character.getCharacteristics().getContentByUUID( "FOR" );
    TEST.ASSERT.equal( _for.race_bonus.getValue(), 0, "Le bonus de race de FOR devrait etre retire, obtenu : " + _for.race_bonus.getValue() );
    TEST.ASSERT.equal( _for.getModifierValue(), 0, "Le modificateur de FOR devrait revenir a 0, obtenu : " + _for.getModifierValue() );
    TEST.ASSERT.equal( _character.getCharacteristics().getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ), TEST_caracteristiquesCreationPending() + 1, "Le compteur warning devrait reafficher les boosts de creation + 1 choix de race en attente apres le retrait du bonus" );
    return TEST.waitCounterValue( document.querySelector( TEST_caracteristiquesBadge() ), TEST_caracteristiquesBadgeNumber( _character ) ).then( function () {
        let _counter                   = document.querySelector( TEST_caracteristiquesBadge() );
        if ( !_counter ) {
            TEST.ASSERT.notNull( _counter, "Le compteur warning devrait exister sur l'onglet (.gs-warnings-counter)" );
            return;
        }
        TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), TEST_caracteristiquesBadgeNumber( _character ), "Le badge devrait valoir la somme des compteurs de la Progression, obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );
        let _cha_line                  = _pane.querySelector( ".characteristic-line[data-name='CHA']" );
        TEST.ASSERT.notNull( _cha_line, "La ligne CHA devrait exister" );
        if ( !_cha_line ) {
            return;
        }
        let _cha_more                  = _cha_line.querySelector( ".characteristic-bonus-race [data-name='event__more_button']" );
        TEST.ASSERT.notNull( _cha_more, "Le bouton + du bonus de race de CHA devrait etre rendu" );
        if ( !_cha_more ) {
            return;
        }
        _cha_more.click();
        let _cha                       = _character.getCharacteristics().getContentByUUID( "CHA" );
        TEST.ASSERT.equal( _cha.race_bonus.getValue(), 2, "Le bonus de race de CHA devrait valoir 2, obtenu : " + _cha.race_bonus.getValue() );
        TEST.ASSERT.equal( _cha.getModifierValue(), 1, "Le modificateur de CHA devrait valoir +1, obtenu : " + _cha.getModifierValue() );
        TEST.ASSERT.equal( _character.getCharacteristics().getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ), TEST_caracteristiquesCreationPending(), "Le compteur warning ne devrait plus porter que les boosts de creation apres le nouveau choix" );
        return TEST.wait();
    } ).then( function () {
        return TEST.waitCounterValue( document.querySelector( TEST_caracteristiquesBadge() ), TEST_caracteristiquesBadgeNumber( _character ) );
    } ).then( function () {
        let _counter_after             = document.querySelector( TEST_caracteristiquesBadge() );
        TEST.ASSERT.notNull( _counter_after, "Le compteur warning devrait exister sur l'onglet (.gs-warnings-counter)" );
        TEST.ASSERT.equal( _counter_after.getAttribute( "data-number" ), TEST_caracteristiquesBadgeNumber( _character ), "Le badge devrait valoir la somme des compteurs de la Progression, obtenu : [" + _counter_after.getAttribute( "data-number" ) + "]" );
    } );
} );

TEST.RUNNER.register( "[CARACTERISTIQUES] bonus forcés → boutons masqués", function () {
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    TEST.ASSERT.ok( _character.getRace().isSet(), "Pre-condition : race posee (Elfe)" );
    if ( !_character.getRace().isSet() ) {
        return;
    }
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
        let _pane                      = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Caracteristiques devrait exister" );
        if ( !_pane ) {
            return;
        }
        let _forced                    = [
            { key: "DEX", value: 2 },
            { key: "INT", value: 2 },
            { key: "CON", value: -2 }
        ];
        for ( let i = 0, _size_i = _forced.length; i < _size_i; i++ ) {
            let _charac                = _character.getCharacteristics().getContentByUUID( _forced[ i ].key );
            TEST.ASSERT.equal( _charac.race_bonus.getValue(), _forced[ i ].value, "Le bonus de race force de " + _forced[ i ].key + " devrait valoir " + _forced[ i ].value + ", obtenu : " + _charac.race_bonus.getValue() );
            TEST.ASSERT.ok( _charac.race_bonus.isPhase( GS.OBJECT.CONST.PHASE.SETTINGS_FORCED ), "Le bonus de race de " + _forced[ i ].key + " devrait etre en phase SETTINGS_FORCED" );
            let _cell                 = _pane.querySelector( ".characteristic-line[data-name='" + _forced[ i ].key + "'] .characteristic-bonus-race" );
            TEST.ASSERT.notNull( _cell, "La cellule du bonus de race de " + _forced[ i ].key + " devrait exister" );
            if ( !_cell ) {
                continue;
            }
            let _phase_dom             = _cell.querySelector( "[data-current-phase]" );
            TEST.ASSERT.notNull( _phase_dom, "La cellule de " + _forced[ i ].key + " devrait porter la phase dans son DOM" );
            if ( _phase_dom ) {
                TEST.ASSERT.equal( _phase_dom.getAttribute( "data-current-phase" ), "SETTINGS_FORCED", "La cellule de " + _forced[ i ].key + " devrait porter data-current-phase SETTINGS_FORCED, obtenu : " + _phase_dom.getAttribute( "data-current-phase" ) );
            }
            let _less                 = _cell.querySelector( "[data-name='event__less_button']" );
            let _more                 = _cell.querySelector( "[data-name='event__more_button']" );
            TEST.ASSERT.notNull( _less, "Le bouton - du bonus de race de " + _forced[ i ].key + " devrait etre rendu dans le DOM" );
            TEST.ASSERT.notNull( _more, "Le bouton + du bonus de race de " + _forced[ i ].key + " devrait etre rendu dans le DOM" );
            if ( _less ) {
                TEST.ASSERT.equal( getComputedStyle( _less ).display, "none", "Le bouton - du bonus force de " + _forced[ i ].key + " devrait etre masque (display none), obtenu : " + getComputedStyle( _less ).display );
            }
            if ( _more ) {
                TEST.ASSERT.equal( getComputedStyle( _more ).display, "none", "Le bouton + du bonus force de " + _forced[ i ].key + " devrait etre masque (display none), obtenu : " + getComputedStyle( _more ).display );
            }
        }
        let _cha_less                  = _pane.querySelector( ".characteristic-line[data-name='CHA'] .characteristic-bonus-race [data-name='event__less_button']" );
        TEST.ASSERT.notNull( _cha_less, "Le bouton - du bonus libre de CHA devrait etre rendu" );
        if ( _cha_less ) {
            TEST.ASSERT.notEqual( getComputedStyle( _cha_less ).display, "none", "Le bouton - du bonus libre pose sur CHA devrait rester visible, obtenu : " + getComputedStyle( _cha_less ).display );
        }
    } );
} );

TEST.RUNNER.register( "[CARACTERISTIQUES] Humain → compteur 2, bonus forcés retirés", function () {
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    TEST.ASSERT.equal( _character.getRace().getValue(), "Elfe", "Pre-condition : race Elfe posee, obtenu : " + _character.getRace().getValue() );
    if ( _character.getRace().getValue() !== "Elfe" ) {
        return;
    }
    TEST_openRacePopup();
    return TEST.clickTab( "body > .popup", "Humain" ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        TEST.ASSERT.equal( _character.getRace().getValue(), "Humain", "La race devrait etre Humain apres validation, obtenu : " + _character.getRace().getValue() );
        TEST.ASSERT.equal( _character.getCharacteristics().getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ), TEST_caracteristiquesCreationPending() + 2, "Le compteur warning devrait valoir les boosts de creation + les 2 choix libres Humain en attente" );
        return TEST.waitCounterValue( document.querySelector( TEST_caracteristiquesBadge() ), TEST_caracteristiquesBadgeNumber( _character ) );
    } ).then( function () {
        let _counter                   = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
        if ( !_counter ) {
            TEST.ASSERT.notNull( _counter, "Le compteur warning devrait exister sur l'onglet (.gs-warnings-counter)" );
        }
        else {
            TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), TEST_caracteristiquesBadgeNumber( _character ), "Le badge devrait valoir la somme des compteurs de la Progression, obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );
        }
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME );
    } ).then( function () {
        let _pane                      = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Caracteristiques devrait exister" );
        if ( !_pane ) {
            return;
        }
        let _keys                      = ["FOR", "DEX", "CON", "INT", "SAG", "CHA"];
        for ( let i = 0, _size_i = _keys.length; i < _size_i; i++ ) {
            let _charac                = _character.getCharacteristics().getContentByUUID( _keys[ i ] );
            TEST.ASSERT.equal( _charac.race_bonus.getValue(), 0, "Le bonus de race de " + _keys[ i ] + " devrait etre remis a 0 apres le changement de race, obtenu : " + _charac.race_bonus.getValue() );
            TEST.ASSERT.ok( _charac.race_bonus.isPhase( GS.OBJECT.CONST.PHASE.SETTINGS_TO_EDIT ), "Le bonus de race de " + _keys[ i ] + " devrait etre en phase SETTINGS_TO_EDIT (choix libre Humain), obtenu : " + _charac.race_bonus.getCurrentPhase() );
        }
        let _forced_cells              = _pane.querySelectorAll( ".characteristic-bonus [data-current-phase='SETTINGS_FORCED']" );
        TEST.ASSERT.equal( _forced_cells.length, 0, "Aucune cellule ne devrait etre en phase SETTINGS_FORCED avec Humain, obtenu : " + _forced_cells.length );
        let _cleaned                   = ["DEX", "INT", "CON"];
        for ( let i = 0, _size_i = _cleaned.length; i < _size_i; i++ ) {
            let _final                 = _pane.querySelector( ".characteristic-line[data-name='" + _cleaned[ i ] + "'] .characteristic-final-value" );
            if ( _final ) {
                TEST.ASSERT.ok( _final.textContent.indexOf( "10" ) !== -1, _cleaned[ i ] + " devrait revenir a 10 (bonus et malus forces de l'Elfe retires), obtenu : " + _final.textContent );
            }
        }
        let _for_more                  = _pane.querySelector( ".characteristic-line[data-name='FOR'] .characteristic-bonus-race [data-name='event__more_button']" );
        TEST.ASSERT.notNull( _for_more, "Le bouton + du bonus de race de FOR devrait etre rendu" );
        if ( _for_more ) {
            TEST.ASSERT.notEqual( getComputedStyle( _for_more ).display, "none", "Le bouton + de FOR devrait etre visible (choix libre disponible), obtenu : " + getComputedStyle( _for_more ).display );
        }
    } );
} );

TEST.RUNNER.register( "[CARACTERISTIQUES] + FOR et + DEX → 2 libres posés", function () {
    let _character                     = CONTROLLER.Character.current_character;
    let _pane                         = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Caracteristiques ouvert" );
    if ( !_pane ) {
        return;
    }
    let _for_more                     = _pane.querySelector( ".characteristic-line[data-name='FOR'] .characteristic-bonus-race [data-name='event__more_button']" );
    TEST.ASSERT.notNull( _for_more, "Le bouton + du bonus de race de FOR devrait etre rendu" );
    if ( !_for_more ) {
        return;
    }
    _for_more.click();
    let _for                           = _character.getCharacteristics().getContentByUUID( "FOR" );
    TEST.ASSERT.equal( _for.race_bonus.getValue(), 2, "Le premier bonus libre devrait etre pose sur FOR, obtenu : " + _for.race_bonus.getValue() );
    TEST.ASSERT.equal( _for.getModifierValue(), 1, "Le modificateur de FOR devrait valoir +1, obtenu : " + _for.getModifierValue() );
    TEST.ASSERT.equal( _character.getCharacteristics().getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ), TEST_caracteristiquesCreationPending() + 1, "Le compteur warning devrait descendre aux boosts de creation + 1 apres le premier bonus" );
    return TEST.waitCounterValue( document.querySelector( TEST_caracteristiquesBadge() ), TEST_caracteristiquesBadgeNumber( _character ) ).then( function () {
        let _counter                   = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
        if ( !_counter ) {
            TEST.ASSERT.notNull( _counter, "Le compteur warning devrait exister sur l'onglet (.gs-warnings-counter)" );
            return;
        }
        TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), TEST_caracteristiquesBadgeNumber( _character ), "Le badge devrait valoir la somme des compteurs de la Progression, obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );
        let _dex_more                  = _pane.querySelector( ".characteristic-line[data-name='DEX'] .characteristic-bonus-race [data-name='event__more_button']" );
        TEST.ASSERT.notNull( _dex_more, "Le bouton + du bonus de race de DEX devrait etre rendu" );
        if ( !_dex_more ) {
            return;
        }
        _dex_more.click();
        let _dex                       = _character.getCharacteristics().getContentByUUID( "DEX" );
        TEST.ASSERT.equal( _dex.race_bonus.getValue(), 2, "Le deuxieme bonus libre devrait etre pose sur DEX, obtenu : " + _dex.race_bonus.getValue() );
        TEST.ASSERT.equal( _dex.getModifierValue(), 1, "Le modificateur de DEX devrait valoir +1, obtenu : " + _dex.getModifierValue() );
        TEST.ASSERT.equal( _character.getCharacteristics().getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ), TEST_caracteristiquesCreationPending(), "Le compteur warning ne devrait plus porter que les boosts de creation une fois les 2 choix faits" );
        return TEST.waitCounterValue( document.querySelector( TEST_caracteristiquesBadge() ), TEST_caracteristiquesBadgeNumber( _character ) );
    } ).then( function () {
        let _counter_after             = document.querySelector( TEST_caracteristiquesBadge() );
        TEST.ASSERT.notNull( _counter_after, "Le compteur warning devrait exister sur l'onglet (.gs-warnings-counter)" );
        TEST.ASSERT.equal( _counter_after.getAttribute( "data-number" ), TEST_caracteristiquesBadgeNumber( _character ), "Le badge devrait valoir la somme des compteurs de la Progression, obtenu : [" + _counter_after.getAttribute( "data-number" ) + "]" );
        let _for_less                  = _pane.querySelector( ".characteristic-line[data-name='FOR'] .characteristic-bonus-race [data-name='event__less_button']" );
        if ( _for_less ) {
            TEST.ASSERT.equal( getComputedStyle( _for_less ).pointerEvents, "auto", "Le bouton - du bonus pose sur FOR devrait rester actif (retrait possible), obtenu : " + getComputedStyle( _for_less ).pointerEvents );
        }
        TEST.ASSERT.equal( getComputedStyle( _for_more ).pointerEvents, "none", "Le bouton + du bonus pose sur FOR devrait etre attenue (pointer-events none), obtenu : " + getComputedStyle( _for_more ).pointerEvents );
    } );
} );

// Les races d'extension portent DEUX primes libres dans leur donnee
// (choice [DEX, FREE, FREE]) et une penalite LIBRE : le conteneur des
// choix dedouble par uuid, le second FREE ecrasait le premier, la prime
// forcee ne se posait jamais (retour utilisateur Fetchelin)
TEST.RUNNER.register( "[CARACTERISTIQUES] Fetchelin → DEX forcé, 2 libres, pénalité libre posable", function () {
    TEST.RESET.sheet();
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Un nouveau personnage devrait etre instancie apres le reset" );
    if ( !_character ) {
        return;
    }
    TEST_openRacePopup();
    return TEST.clickTab( "body > .popup", "Fetchelin" ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        let _characteristics            = _character.getCharacteristics();
        let _dex                        = _characteristics.getContentByUUID( "DEX" );
        TEST.ASSERT.equal( _dex.race_bonus.getCurrentPhase(), GS.OBJECT.CONST.PHASE.SETTINGS_FORCED, "La prime DEX du Fetchelin devrait etre forcee, obtenu : " + _dex.race_bonus.getCurrentPhase() );
        TEST.ASSERT.equal( _dex.getModifierValue(), 1, "La prime forcee DEX devrait porter le modificateur +1, obtenu : " + _dex.getModifierValue() );
        TEST.ASSERT.equal( _characteristics.getRaceBonus().bonus.getFreeNumber(), 2, "Le Fetchelin devrait porter 2 primes libres en attente, obtenu : " + _characteristics.getRaceBonus().bonus.getFreeNumber() );
        TEST.ASSERT.equal( _characteristics.getRaceBonus().malus.getFreeNumber(), 1, "Le Fetchelin devrait porter sa penalite libre en attente, obtenu : " + _characteristics.getRaceBonus().malus.getFreeNumber() );
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME );
    } ).then( function () {
        let _pane                       = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Progression ouvert" );
        if ( !_pane ) {
            return;
        }
        let _characteristics            = _character.getCharacteristics();
        // La pose d'une prime libre : le + de la colonne Race sur FOR
        let _for_more                   = _pane.querySelector( ".characteristic-line[data-name='FOR'] .characteristic-bonus-race [data-name='event__more_button']" );
        TEST.ASSERT.notNull( _for_more, "Le bouton + de FOR devrait etre rendu" );
        if ( !_for_more ) {
            return;
        }
        _for_more.click();
        let _for                        = _characteristics.getContentByUUID( "FOR" );
        TEST.ASSERT.equal( _for.race_bonus.getValue(), 2, "La prime libre devrait etre posee sur FOR, obtenu : " + _for.race_bonus.getValue() );
        TEST.ASSERT.equal( _characteristics.getRaceBonus().bonus.getFreeNumber(), 1, "Une prime libre devrait rester en attente, obtenu : " + _characteristics.getRaceBonus().bonus.getFreeNumber() );
        // La pose de la penalite libre : le - de la colonne Race sur CON,
        // actif seulement quand le pool du malus porte une penalite en attente
        let _con_less                   = _pane.querySelector( ".characteristic-line[data-name='CON'] .characteristic-bonus-race [data-name='event__less_button']" );
        TEST.ASSERT.notNull( _con_less, "Le bouton - de CON devrait etre rendu" );
        if ( !_con_less ) {
            return;
        }
        TEST.ASSERT.equal( getComputedStyle( _con_less ).pointerEvents, "auto", "Le - de CON devrait etre actif (la penalite libre est en attente), obtenu : " + getComputedStyle( _con_less ).pointerEvents );
        _con_less.click();
        let _con                        = _characteristics.getContentByUUID( "CON" );
        TEST.ASSERT.equal( _con.race_bonus.getValue(), -2, "La penalite libre devrait etre posee sur CON, obtenu : " + _con.race_bonus.getValue() );
        TEST.ASSERT.equal( _con.race_bonus.getCurrentPhase(), GS.OBJECT.CONST.PHASE.SETTINGS_EDITED, "La penalite posee devrait porter la phase EDITED, obtenu : " + _con.race_bonus.getCurrentPhase() );
        TEST.ASSERT.equal( _con.getModifierValue(), -1, "CON devrait porter le modificateur -1, obtenu : " + _con.getModifierValue() );
        TEST.ASSERT.equal( _characteristics.getRaceBonus().malus.getFreeNumber(), 0, "Le pool de penalites devrait etre vide, obtenu : " + _characteristics.getRaceBonus().malus.getFreeNumber() );
        // Le retrait de la penalite : le - la rend au pool
        _con_less.click();
        TEST.ASSERT.equal( _con.race_bonus.getValue(), 0, "La penalite retiree devrait rendre la valeur a 0, obtenu : " + _con.race_bonus.getValue() );
        TEST.ASSERT.equal( _characteristics.getRaceBonus().malus.getFreeNumber(), 1, "Le pool de penalites devrait etre restaure, obtenu : " + _characteristics.getRaceBonus().malus.getFreeNumber() );
        // La seconde prime libre se pose : les DEUX FREE de la donnee tiennent
        let _cha_more                   = _pane.querySelector( ".characteristic-line[data-name='CHA'] .characteristic-bonus-race [data-name='event__more_button']" );
        TEST.ASSERT.notNull( _cha_more, "Le bouton + de CHA devrait etre rendu" );
        if ( !_cha_more ) {
            return;
        }
        _cha_more.click();
        let _cha                        = _characteristics.getContentByUUID( "CHA" );
        TEST.ASSERT.equal( _cha.race_bonus.getValue(), 2, "La seconde prime libre devrait etre posee sur CHA, obtenu : " + _cha.race_bonus.getValue() );
        TEST.ASSERT.equal( _characteristics.getRaceBonus().bonus.getFreeNumber(), 0, "Les deux primes libres devraient etre posees, obtenu : " + _characteristics.getRaceBonus().bonus.getFreeNumber() );
        // La relecture verrouille l'etat : penalite placee incluse — la
        // prime FORCED derivera de la donnee, le fichier peut porter le
        // zero d'avant l'ecriture (retour utilisateur : save Fetchelin relu
        // avec DEX force a 0)
        let _saved                      = _character.getDataToSave();
        _saved[ "characteristics" ][ "DEX" ][ "race_bonus" ][ "value" ] = 0;
        let _reloaded                   = new CHARACTER.Current();
        _reloaded.updateData( _saved );
        let _con_reloaded               = _reloaded.getCharacteristics().getContentByUUID( "FOR" );
        TEST.ASSERT.equal( _con_reloaded.race_bonus.getValue(), 2, "La prime de race posee devrait survivre a la relecture" );
        let _dex_reloaded               = _reloaded.getCharacteristics().getContentByUUID( "DEX" );
        TEST.ASSERT.equal( _dex_reloaded.race_bonus.getValue(), 2, "La prime forcee DEX devrait survivre a la relecture, obtenu : " + _dex_reloaded.race_bonus.getValue() );
    } );
} );

// La grille RENOVEE (retour utilisateur) : une colonne par SOURCE, le
// totalporte ses sources — Valeur (modificateur + total), Initial (base),
// Race, Historique (le bonus de l'historique se POSE sur sa colonne, fin
// du detour Ajustements du Round 79), Classe, Niv1 (les boosts de
// creation), Niv5/10/15/20, Autre (les boosts poses dans l'onglet
// Ajustements)
TEST.RUNNER.register( "[CARACTERISTIQUES] grille : entêtes, colonne Historique, colonne Autre", function () {
    TEST.RESET.sheet();
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Un nouveau personnage devrait etre instancie apres le reset" );
    if ( !_character ) {
        return;
    }
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
        let _pane                       = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Progression ouvert" );
        if ( !_pane ) {
            return;
        }
        let _headers                    = _pane.querySelectorAll( ".characteristic-table .row.headers .cell.header" );
        let _texts                      = [];
        for ( let h = 0, _size_h = _headers.length; h < _size_h; h++ ) {
            _texts.push( _headers[ h ].textContent.trim().replace( /[0-9]+$/, "" ) );
        }
        TEST.ASSERT.equal( _texts.join( "|" ), "Valeur|Initial|Race|Historique|Classe|Niv|Niv|Niv|Niv|Niv|Autre", "Les entetes de la grille devraient suivre l'ordre demande, obtenu : " + _texts.join( "|" ) );
        // L'historique Acolyte se pose : son bonus (INT/SAG + libre) vit sur
        // sa colonne, les cellules hors choix portent FORBIDDEN
        CONTROLLER.Character.doActionAfter( "event__historic__select", { "param__historic__name": "Acolyte" } );
        let _characteristics            = _character.getCharacteristics();
        TEST.ASSERT.equal( _characteristics.getHistoricBonus().bonus.getFreeNumber(), 2, "L'Acolyte devrait porter 2 bonus d'historique a placer, obtenu : " + _characteristics.getHistoricBonus().bonus.getFreeNumber() );
        let _int                        = _characteristics.getContentByUUID( "INT" );
        let _for                        = _characteristics.getContentByUUID( "FOR" );
        TEST.ASSERT.equal( _int.historic_bonus.getCurrentPhase(), GS.OBJECT.CONST.PHASE.SETTINGS_TO_EDIT, "INT (choix de l'Acolyte) devrait etre modifiable, obtenu : " + _int.historic_bonus.getCurrentPhase() );
        // Le libre d'Acolyte (FRE des donnees) ouvre TOUTES les cellules :
        // FOR hors des choix nommes reste plaçable pour le boost libre
        TEST.ASSERT.equal( _for.historic_bonus.getCurrentPhase(), GS.OBJECT.CONST.PHASE.SETTINGS_TO_EDIT, "FOR devrait rester modifiable (le boost libre d'Acolyte s'y pose aussi), obtenu : " + _for.historic_bonus.getCurrentPhase() );
        // Pose du bonus d'historique sur INT par le + de sa colonne
        let _int_more                   = _pane.querySelector( ".characteristic-line[data-name='INT'] .characteristic-bonus-historic [data-name='event__more_button']" );
        TEST.ASSERT.notNull( _int_more, "Le + de la colonne Historique de INT devrait etre rendu" );
        if ( !_int_more ) {
            return;
        }
        _int_more.click();
        TEST.ASSERT.equal( _int.historic_bonus.getValue(), 2, "Le bonus d'historique devrait etre pose sur INT, obtenu : " + _int.historic_bonus.getValue() );
        TEST.ASSERT.equal( _int.getModifierValue(), 1, "Le modificateur de INT devrait valoir +1, obtenu : " + _int.getModifierValue() );
        TEST.ASSERT.equal( _characteristics.getHistoricBonus().bonus.getFreeNumber(), 1, "Un bonus d'historique devrait rester a placer, obtenu : " + _characteristics.getHistoricBonus().bonus.getFreeNumber() );
        // Autre : un boost pose dans l'onglet Ajustements se lit et compte
        CONTROLLER.Character.doActionAfter( "event__adjustment__add", { "param__adjustment__kind": "characteristic_boost", "param__adjustment__value": "Force", "param__adjustment__explanation": "Ceremonie d'ogre" } );
        TEST.ASSERT.equal( _for.getModifierValue(), 1, "Le boost d'ajustement devrait compter dans la valeur finale de FOR, obtenu : " + _for.getModifierValue() );
        let _for_autre                  = _pane.querySelector( ".characteristic-line[data-name='FOR'] .characteristic-adjustment-value" );
        TEST.ASSERT.notNull( _for_autre, "La cellule Autre de FOR devrait etre rendue" );
        if ( _for_autre ) {
            TEST.ASSERT.equal( _for_autre.textContent, "+2", "La cellule Autre devrait afficher le boost pose, obtenu : " + _for_autre.textContent );
        }
        // Le retrait de l'ajustement rend sa cellule et sa valeur
        CONTROLLER.Character.doActionAfter( "event__adjustment__remove", { "param__adjustment__kind": "characteristic_boost", "param__adjustment__value": "Force" } );
        TEST.ASSERT.equal( _for.getModifierValue(), 0, "Le retrait de l'ajustement devrait rendre la valeur de FOR a sa base, obtenu : " + _for.getModifierValue() );
        if ( _for_autre ) {
            TEST.ASSERT.equal( _for_autre.textContent, "—", "La cellule Autre vide devrait afficher son marqueur vide, obtenu : " + _for_autre.textContent );
        }
        // Le second clic sur Acolyte vide l'historique : les cellules
        // se reinitialisent, plus rien a placer
        CONTROLLER.Character.doActionAfter( "event__historic__select", { "param__historic__name": "Acolyte" } );
        TEST.ASSERT.equal( _int.historic_bonus.getValue(), 0, "L'historique vide devrait rendre sa cellule a zero, obtenu : " + _int.historic_bonus.getValue() );
        TEST.ASSERT.equal( _characteristics.getHistoricBonus().bonus.getFreeNumber(), 0, "L'historique vide ne devrait plus rien proposer" );
        // Save → relecture : le bonus d'historique pose survit
        CONTROLLER.Character.doActionAfter( "event__historic__select", { "param__historic__name": "Acrobate" } );
        let _dex                        = _characteristics.getContentByUUID( "DEX" );
        TEST.ASSERT.equal( _dex.historic_bonus.getCurrentPhase(), GS.OBJECT.CONST.PHASE.SETTINGS_TO_EDIT, "DEX (choix de l'Acrobate) devrait etre modifiable, obtenu : " + _dex.historic_bonus.getCurrentPhase() );
        let _dex_more                   = _pane.querySelector( ".characteristic-line[data-name='DEX'] .characteristic-bonus-historic [data-name='event__more_button']" );
        if ( _dex_more ) {
            _dex_more.click();
        }
        TEST.ASSERT.equal( _dex.historic_bonus.getValue(), 2, "Le bonus d'Acrobate devrait etre pose sur DEX, obtenu : " + _dex.historic_bonus.getValue() );
        let _saved                      = _character.getDataToSave();
        let _reloaded                   = new CHARACTER.Current();
        _reloaded.updateData( _saved );
        let _dex_reloaded               = _reloaded.getCharacteristics().getContentByUUID( "DEX" );
        TEST.ASSERT.equal( _dex_reloaded.historic_bonus.getValue(), 2, "Le bonus d'historique pose devrait survivre a la relecture, obtenu : " + _dex_reloaded.historic_bonus.getValue() );
        TEST.ASSERT.equal( _dex_reloaded.getModifierValue(), 1, "Le modificateur de DEX devrait survivre a la relecture, obtenu : " + _dex_reloaded.getModifierValue() );
        TEST.ASSERT.equal( _reloaded.getClasses().getContentByUUID( "Acrobate" ), null, "L'Acrobate reste un historique, pas une classe" );
    } );
} );
