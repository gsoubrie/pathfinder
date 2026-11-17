"use strict";
/**
 * [PV CARAC] Le modificateur de Constitution pilote les PV : au +/− d'une
 * cellule de caractéristique (et via un boost posé en ajustement), le total
 * PV est recalculé AVANT le broadcast aux fenêtres — le champ PV du Général,
 * la bande PV de l'onglet Combat et la ligne PV de la Progression suivent
 * SANS activation d'onglet (les champs des panneaux cachés sont lus
 * directement dans le DOM).
 * Départ : feuille vide (TEST.RESET.sheet()), Elfe + Magicien niveau 1.
 *  1. PV de départ = domaine, affichés aux trois endroits.
 *  2. Geste réel du + sur la cellule Niv1 de CON (dans la Progression) :
 *     le mod CON monte d'un pas, le max PV monte de (niveaux actifs),
 *     les trois affichages suivent sans quitter l'onglet.
 *  3. Geste réel du − : retour au total d'avant, idem.
 *  4. Boost « Constitution » posé en ajustement : même suivi, puis retrait.
 */
var TEST_pvMaxExpectedAfterConBoost = function ( character_object, max_before ) {
    return max_before + character_object.getLevel();
};

TEST.RUNNER.register( "[PV CARAC] PV de départ = domaine, affichés Général + Combat + Progression", function () {
    TEST.RESET.sheet();
    TEST_openRacePopup();
    return TEST.clickTab( "body > .popup", "Elfe" ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        return TEST_AjouterClasse( "Magicien" );
    } ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _character = CONTROLLER.Character.current_character;
        TEST.ASSERT.notNull( _character, "Pre-condition : personnage chargé" );
        if ( !_character ) {
            return;
        }
        let _max = _character.getHealth().getMaxHP();
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
            return TEST.wait();
        } ).then( function () {
            let _pane = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
            TEST.ASSERT.equal( _pane.querySelector( ".level-up-life-total-value" ).textContent, "Points de vie : " + _max, "La ligne PV de la Progression devrait afficher le total du domaine (" + _max + "), obtenu : [" + _pane.querySelector( ".level-up-life-total-value" ).textContent + "]" );
            return TEST.clickTab( ".character-sheet-windows", CHARACTER.GeneralWindow.NAME );
        } ).then( function () {
            return TEST.wait();
        } ).then( function () {
            let _pv = document.querySelector( ".characters-sheet-content .area-pv input.health-points-link" );
            TEST.ASSERT.notNull( _pv, "Pre-condition : champ PV du Général rendu" );
            if ( _pv ) {
                TEST.ASSERT.equal( _pv.value.split( " / " )[ 1 ], "" + _max, "Le champ PV du Général devrait afficher le max du domaine (" + _max + "), obtenu : [" + _pv.value + "]" );
            }
            return TEST.clickTab( ".character-sheet-windows", CHARACTER.CombatWindow.NAME );
        } ).then( function () {
            return TEST.wait();
        } ).then( function () {
            let _band = document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.CombatWindow.NAME + "'] .combat-health-points-value" );
            TEST.ASSERT.notNull( _band, "Pre-condition : bande PV du Combat rendue" );
            if ( _band ) {
                TEST.ASSERT.equal( _band.textContent.split( " / " )[ 1 ], "" + _max, "La bande PV du Combat devrait afficher le max du domaine (" + _max + "), obtenu : [" + _band.textContent + "]" );
            }
        } );
    } );
} );

TEST.RUNNER.register( "[PV CARAC] + sur la cellule Niv1 de CON = PV recalculés et suivis partout sans activation", function () {
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage chargé" );
    if ( !_character ) {
        return;
    }
    let _max_before                    = _character.getHealth().getMaxHP();
    let _con                           = _character.getCharacteristics().getContentByUUID( CHARACTERISTICS.CON.key );
    let _mod_before                    = _con.getModifierValue();
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _pane                      = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        let _more                      = _pane.querySelector( ".characteristic-line[data-name='CON'] .characteristic-bonus-level1 [data-name='event__more_button']" );
        TEST.ASSERT.notNull( _more, "Pre-condition : le + de la cellule Niv1 de CON dans le panneau Progression" );
        if ( !_more ) {
            return;
        }
        _more.click();
        return TEST.wait();
    } ).then( function () {
        let _max_after                 = _character.getHealth().getMaxHP();
        TEST.ASSERT.equal( _con.getModifierValue(), _mod_before + 1, "Le mod CON devrait monter d'un pas, obtenu : " + _con.getModifierValue() + " contre " + _mod_before );
        TEST.ASSERT.equal( _max_after, TEST_pvMaxExpectedAfterConBoost( _character, _max_before ), "Le max PV devrait monter de (niveaux actifs) = " + _character.getLevel() + ", attendu : " + TEST_pvMaxExpectedAfterConBoost( _character, _max_before ) + ", obtenu : " + _max_after );
        // Les trois affichages suivent SANS activation d'onglet (lus dans le DOM des panneaux cachés)
        let _pane                      = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.equal( _pane.querySelector( ".level-up-life-total-value" ).textContent, "Points de vie : " + _max_after, "La ligne PV de la Progression devrait suivre sans quitter l'onglet, obtenu : [" + _pane.querySelector( ".level-up-life-total-value" ).textContent + "]" );
        let _pv                        = document.querySelector( ".characters-sheet-content .area-pv input.health-points-link" );
        TEST.ASSERT.equal( _pv.value.split( " / " )[ 1 ], "" + _max_after, "Le champ PV du Général devrait suivre sans activation, obtenu : [" + _pv.value + "]" );
        let _band                      = document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.CombatWindow.NAME + "'] .combat-health-points-value" );
        TEST.ASSERT.equal( _band.textContent.split( " / " )[ 1 ], "" + _max_after, "La bande PV du Combat devrait suivre sans activation, obtenu : [" + _band.textContent + "]" );
    } );
} );

TEST.RUNNER.register( "[PV CARAC] − sur la cellule Niv1 de CON = retour au total d'avant", function () {
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage chargé (état du test précédent : boost CON posé)" );
    if ( !_character ) {
        return;
    }
    let _max_before                    = _character.getHealth().getMaxHP();
    let _pane                          = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
    let _less                          = _pane ? _pane.querySelector( ".characteristic-line[data-name='CON'] .characteristic-bonus-level1 [data-name='event__less_button']" ) : null;
    TEST.ASSERT.notNull( _less, "Pre-condition : le − de la cellule Niv1 de CON" );
    if ( !_less ) {
        return;
    }
    _less.click();
    return TEST.wait().then( function () {
        let _max_after                 = _character.getHealth().getMaxHP();
        TEST.ASSERT.equal( _max_after, _max_before - _character.getLevel(), "Le max PV devrait redescendre de (niveaux actifs) = " + _character.getLevel() + ", attendu : " + ( _max_before - _character.getLevel() ) + ", obtenu : " + _max_after );
        TEST.ASSERT.equal( _pane.querySelector( ".level-up-life-total-value" ).textContent, "Points de vie : " + _max_after, "La ligne PV de la Progression devrait suivre, obtenu : [" + _pane.querySelector( ".level-up-life-total-value" ).textContent + "]" );
        let _pv                        = document.querySelector( ".characters-sheet-content .area-pv input.health-points-link" );
        TEST.ASSERT.equal( _pv.value.split( " / " )[ 1 ], "" + _max_after, "Le champ PV du Général devrait suivre, obtenu : [" + _pv.value + "]" );
        let _band                      = document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.CombatWindow.NAME + "'] .combat-health-points-value" );
        TEST.ASSERT.equal( _band.textContent.split( " / " )[ 1 ], "" + _max_after, "La bande PV du Combat devrait suivre, obtenu : [" + _band.textContent + "]" );
    } );
} );

TEST.RUNNER.register( "[PV CARAC] boost Constitution en ajustement = PV suivis, puis retrait", function () {
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage chargé" );
    if ( !_character ) {
        return;
    }
    let _max_before                    = _character.getHealth().getMaxHP();
    CONTROLLER.Character.doActionAfter( "event__adjustment__add", { "param__adjustment__kind": "characteristic_boost", "param__adjustment__value": "Constitution", "param__adjustment__explanation": "test PV" } );
    return TEST.wait().then( function () {
        let _max_after                 = _character.getHealth().getMaxHP();
        TEST.ASSERT.equal( _max_after, TEST_pvMaxExpectedAfterConBoost( _character, _max_before ), "Le boost Constitution devrait monter le max PV de (niveaux actifs), attendu : " + TEST_pvMaxExpectedAfterConBoost( _character, _max_before ) + ", obtenu : " + _max_after );
        let _pv                        = document.querySelector( ".characters-sheet-content .area-pv input.health-points-link" );
        TEST.ASSERT.equal( _pv.value.split( " / " )[ 1 ], "" + _max_after, "Le champ PV du Général devrait suivre le boost d'ajustement, obtenu : [" + _pv.value + "]" );
        let _band                      = document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.CombatWindow.NAME + "'] .combat-health-points-value" );
        TEST.ASSERT.equal( _band.textContent.split( " / " )[ 1 ], "" + _max_after, "La bande PV du Combat devrait suivre le boost d'ajustement, obtenu : [" + _band.textContent + "]" );
        // La suite reprend une feuille propre
        CONTROLLER.Character.doActionAfter( "event__adjustment__remove", { "param__adjustment__kind": "characteristic_boost", "param__adjustment__value": "Constitution" } );
        return TEST.wait();
    } ).then( function () {
        TEST.ASSERT.equal( _character.getHealth().getMaxHP(), _max_before, "Après retrait du boost, le max PV devrait revenir à " + _max_before + ", obtenu : " + _character.getHealth().getMaxHP() );
    } );
} );
