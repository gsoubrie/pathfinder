"use strict";
/**
 * Scenario : CARACTERISTIQUES
 * Depart : feuille vide (TEST.RESET.sheet()). Ajout de la race Elfe via le
 * popup, puis travail dans l'onglet Caracteristiques.
 * Elfe : bonus forces DEX et INT, malus force CON, 1 bonus libre (choice FREE).
 * 1. Page vide : pas de badge ; ajout de la race Elfe → onglet actif + badge
 *    warning "1" (un choix de bonus de race en attente).
 * 2. Ouverture de l'onglet : conteneur + 6 lignes rendues, bonus forces de la
 *    race appliques (DEX et INT a 12, malus CON a 8).
 * 3. Prise du bonus libre sur FOR via le + de la colonne Race : bonus pose
 *    (final 12), badge absent.
 * 4. Retrait du bonus FOR via le - : badge de retour a "1" ; nouveau choix sur
 *    CHA : bonus pose sur CHA, badge absent.
 */

TEST.RUNNER.register( "[CARACTERISTIQUES] page vide → race Elfe → badge warning = 1", function () {
    TEST.RESET.sheet();
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Un nouveau personnage devrait etre instancie apres le reset" );
    if ( !_character ) {
        return;
    }
    TEST.ASSERT.notOk( _character.getRace().isSet(), "Pre-condition : race vide apres le reset" );
    TEST.ASSERT.ok( _character.getClasses().isEmpty(), "Pre-condition : aucune classe apres le reset" );
    let _badge_vide                    = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.CharacteristicWindow.NAME + "'] .characteristic-warning-badge" );
    TEST.ASSERT.isNull( _badge_vide, "Aucun badge ne devrait etre present sur une page vide" );
    TEST_openRacePopup();
    return TEST.clickTab( "body > .popup", "Elfe" ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        TEST.ASSERT.ok( _character.getRace().isSet(), "La race Elfe devrait etre posee apres validation" );
        let _tab                       = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.CharacteristicWindow.NAME + "']" );
        TEST.ASSERT.notNull( _tab, "L'onglet Caracteristiques devrait exister" );
        if ( !_tab ) {
            return;
        }
        TEST.ASSERT.notEqual( _tab.getAttribute( "data-visibility-state" ), "disabled", "L'onglet Caracteristiques devrait etre actif apres le choix de l'ascendance" );
        let _badge                     = _tab.querySelector( ".characteristic-warning-badge" );
        TEST.ASSERT.notNull( _badge, "L'onglet devrait porter un badge de choix en attente (.characteristic-warning-badge)" );
        if ( _badge ) {
            TEST.ASSERT.equal( _badge.textContent, "1", "Le badge devrait afficher 1 choix de bonus de race en attente, obtenu : " + _badge.textContent );
        }
    } );
} );

TEST.RUNNER.register( "[CARACTERISTIQUES] affichage = 6 lignes", function () {
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.CharacteristicWindow.NAME ).then( function () {
        let _pane                      = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.CharacteristicWindow.NAME + "']" );
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

TEST.RUNNER.register( "[CARACTERISTIQUES] + FOR → bonus posé, badge absent", function () {
    let _character                     = CONTROLLER.Character.current_character;
    let _pane                          = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.CharacteristicWindow.NAME + "']" );
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
    let _badge                         = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.CharacteristicWindow.NAME + "'] .characteristic-warning-badge" );
    TEST.ASSERT.isNull( _badge, "Le badge devrait disparaitre une fois le choix fait" );
} );

TEST.RUNNER.register( "[CARACTERISTIQUES] − FOR puis + CHA → choix déplacé", function () {
    let _character                     = CONTROLLER.Character.current_character;
    let _pane                          = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.CharacteristicWindow.NAME + "']" );
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
    let _badge                         = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.CharacteristicWindow.NAME + "'] .characteristic-warning-badge" );
    TEST.ASSERT.notNull( _badge, "Le badge devrait reapparaitre apres le retrait du bonus" );
    if ( _badge ) {
        TEST.ASSERT.equal( _badge.textContent, "1", "Le badge devrait reafficher 1 choix en attente, obtenu : " + _badge.textContent );
    }
    let _cha_line                      = _pane.querySelector( ".characteristic-line[data-name='CHA']" );
    TEST.ASSERT.notNull( _cha_line, "La ligne CHA devrait exister" );
    if ( !_cha_line ) {
        return;
    }
    let _cha_more                      = _cha_line.querySelector( ".characteristic-bonus-race [data-name='event__more_button']" );
    TEST.ASSERT.notNull( _cha_more, "Le bouton + du bonus de race de CHA devrait etre rendu" );
    if ( !_cha_more ) {
        return;
    }
    _cha_more.click();
    let _cha                           = _character.getCharacteristics().getContentByUUID( "CHA" );
    TEST.ASSERT.equal( _cha.race_bonus.getValue(), 2, "Le bonus de race de CHA devrait valoir 2, obtenu : " + _cha.race_bonus.getValue() );
    TEST.ASSERT.equal( _cha.getModifierValue(), 1, "Le modificateur de CHA devrait valoir +1, obtenu : " + _cha.getModifierValue() );
    let _badge_after                   = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.CharacteristicWindow.NAME + "'] .characteristic-warning-badge" );
    TEST.ASSERT.isNull( _badge_after, "Le badge devrait disparaitre apres le nouveau choix" );
} );
