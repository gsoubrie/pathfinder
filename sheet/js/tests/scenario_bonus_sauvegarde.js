"use strict";
/**
 * [BONUS SAVE] Bonus conditionnel d'héritage sur les sauvegardes (ex. Nain
 * des roches : +2 de circonstance à Vigueur/Réflexes contre Pousser,
 * Croc-en-jambe, Repositionner, chute). La carte COMBAT.CONDITIONAL_BONUSES
 * est écrite à la main (multi-sources : legacy aujourd'hui, feat/stuff à
 * venir). AFFICHAGE SEUL : le jet affiché reste le jet brut, une astérisque
 * apparaît à côté de la valeur des sauvegardes visées et ouvre une popup
 * explicative (actions cliquables vers leur popup ACTION).
 * Départ : feuille vide (RESET), ascendance Nain, héritage « Nain des roches ».
 *  1. Onglet Combat : astérisque sur Vigueur et Réflexes, pas sur Volonté ;
 *     la valeur affichée reste le jet brut du domaine.
 *  2. Clic sur l'astérisque de Vigueur : popup BONUS CONDITIONNEL (+2
 *     circonstance, Nain des roches, label), lien « Pousser » cliquable →
 *     popup ACTION ouverte par-dessus, les deux refermées par le fond.
 *  3. Changement d'héritage (Aucun) : l'astérisque disparaît au refresh.
 */
TEST.RUNNER.register( "[BONUS SAVE] Nain des roches = astérisque sur Vigueur/Réflexes, pas Volonté, jet brut", function () {
    TEST.RESET.sheet();
    TEST_openRacePopup();
    return TEST.clickTab( "body > .popup", "Nain" ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        TEST_openLegacyPopup();
        return TEST.clickTab( "body > .popup", "Nain des roches" ).then( function () {
            CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
            return TEST.wait();
        } );
    } ).then( function () {
        let _character = CONTROLLER.Character.current_character;
        TEST.ASSERT.notNull( _character, "Pre-condition : personnage chargé" );
        if ( !_character ) {
            return;
        }
        TEST.ASSERT.equal( _character.getRace().getValue(), "Nain", "Pre-condition : ascendance Nain, obtenu : " + _character.getRace().getValue() );
        TEST.ASSERT.equal( _character.getRace().getLegacy().getValue(), "Nain des roches", "Pre-condition : héritage Nain des roches, obtenu : " + _character.getRace().getLegacy().getValue() );
        if ( _character.getRace().getValue() !== "Nain" || _character.getRace().getLegacy().getValue() !== "Nain des roches" ) {
            return;
        }
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.CombatWindow.NAME ).then( function () {
            return TEST.wait();
        } ).then( function () {
            let _pane    = document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.CombatWindow.NAME + "']" );
            TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Combat ouvert" );
            if ( !_pane ) {
                return;
            }
            let _fort_marker  = _pane.querySelector( ".combat-save-bonus[data-name='save__fortitude'] .combat-save-bonus-marker" );
            let _reflex_marker = _pane.querySelector( ".combat-save-bonus[data-name='save__reflex'] .combat-save-bonus-marker" );
            let _will_marker  = _pane.querySelector( ".combat-save-bonus[data-name='save__will'] .combat-save-bonus-marker" );
            TEST.ASSERT.notNull( _fort_marker, "Vigueur devrait porter l'astérisque du bonus (Nain des roches)" );
            TEST.ASSERT.notNull( _reflex_marker, "Réflexes devrait porter l'astérisque du bonus" );
            TEST.ASSERT.isNull( _will_marker, "Volonté ne devrait PAS porter d'astérisque (le bonus ne la vise pas)" );
            // Le jet affiché reste le jet BRUT (affichage seul, pas de calcul)
            let _fort_value   = _pane.querySelector( ".combat-save-value[data-name='save__fortitude']" );
            let _expected     = _character.getMasteries().getRollModifier( _character, { "slot": "save__fortitude", "characteristic": "CON" } );
            TEST.ASSERT.equal( _fort_value.textContent, "" + _expected, "La valeur de Vigueur devrait rester le jet brut (" + _expected + "), obtenu : [" + _fort_value.textContent + "]" );
        } );
    } );
} );

TEST.RUNNER.register( "[BONUS SAVE] clic sur l'astérisque = popup explicative, lien Pousser cliquable", function () {
    let _pane                          = document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.CombatWindow.NAME + "']" );
    let _marker                        = _pane ? _pane.querySelector( ".combat-save-bonus[data-name='save__fortitude'] .combat-save-bonus-marker" ) : null;
    TEST.ASSERT.notNull( _marker, "Pre-condition : astérisque de Vigueur rendue (test précédent)" );
    if ( !_marker ) {
        return;
    }
    _marker.click();
    let _overlay                       = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
    TEST.ASSERT.notNull( _overlay, "Le clic sur l'astérisque devrait ouvrir la popup du bonus conditionnel" );
    if ( !_overlay ) {
        return;
    }
    TEST.ASSERT.equal( _overlay.querySelector( ".popup-title" ).textContent, "Vigueur", "La popup devrait titrer Vigueur, obtenu : [" + _overlay.querySelector( ".popup-title" ).textContent + "]" );
    TEST.ASSERT.equal( _overlay.querySelector( ".popup-save-bonus-value" ).textContent, "+2 (circonstance)", "La popup devrait afficher +2 (circonstance), obtenu : [" + _overlay.querySelector( ".popup-save-bonus-value" ).textContent + "]" );
    TEST.ASSERT.equal( _overlay.querySelector( ".popup-save-bonus-source" ).textContent, "Nain des roches", "La source devrait être Nain des roches, obtenu : [" + _overlay.querySelector( ".popup-save-bonus-source" ).textContent + "]" );
    TEST.ASSERT.ok( _overlay.querySelector( ".popup-save-bonus-label" ).textContent.indexOf( "Pousser" ) !== -1, "Le label devrait citer Pousser" );
    let _action_link                   = _overlay.querySelector( ".popup-save-bonus-action[data-value='Pousser']" );
    TEST.ASSERT.notNull( _action_link, "Le lien « Pousser » devrait être rendu dans la popup" );
    if ( _action_link ) {
        _action_link.click();
        let _overlays                  = document.querySelectorAll( ".popup-overlay[data-current-phase='RUNNING']" );
        let _action_overlay            = _overlays.length ? _overlays[ _overlays.length - 1 ] : null;
        TEST.ASSERT.notNull( _action_overlay, "Le clic sur Pousser devrait ouvrir sa popup ACTION par-dessus" );
        if ( _action_overlay ) {
            TEST.ASSERT.equal( _action_overlay.querySelector( ".popup-title" ).textContent, "Pousser", "La popup action ouverte devrait titrer Pousser, obtenu : [" + _action_overlay.querySelector( ".popup-title" ).textContent + "]" );
            _action_overlay.click();
            TEST.ASSERT.equal( _action_overlay.getAttribute( "data-current-phase" ), "HIDDEN_TO_STRING", "Le clic sur le fond devrait refermer la popup action" );
        }
    }
    _overlay.click();
    TEST.ASSERT.equal( _overlay.getAttribute( "data-current-phase" ), "HIDDEN_TO_STRING", "Le clic sur le fond devrait refermer la popup du bonus" );
} );

TEST.RUNNER.register( "[BONUS SAVE] changement d'héritage (Aucun) = l'astérisque disparaît", function () {
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage chargé" );
    if ( !_character ) {
        return;
    }
    TEST_openLegacyPopup();
    return TEST.clickTab( "body > .popup", "Aucun" ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        return TEST.wait();
    } ).then( function () {
        TEST.ASSERT.equal( _character.getRace().getLegacy().getValue(), "Aucun", "L'héritage devrait être vidé, obtenu : " + _character.getRace().getLegacy().getValue() );
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.CombatWindow.NAME ).then( function () {
            return TEST.wait();
        } );
    } ).then( function () {
        let _pane    = document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.CombatWindow.NAME + "']" );
        TEST.ASSERT.equal( _pane.querySelectorAll( ".combat-save-bonus-marker" ).length, 0, "Plus aucun astérisque ne devrait être rendu sans bonus actif, obtenu : " + _pane.querySelectorAll( ".combat-save-bonus-marker" ).length );
    } );
} );
