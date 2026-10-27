"use strict";
/**
 * Scenario : CLASSE - prime d'attribut dans le popup de selection
 * Le popup de selection d'une classe affiche, dans la description, les
 * caracteristiques que le niveau 1 va rajouter — comme le fait deja le popup
 * de race ("Prime d'attribut : Nombre de choix / Dextérité / Libre").
 * 1. Magicien (bonus force) : la propriete "Attribut clé" affiche
 *    "Nombre de choix : 1" et "Intelligence".
 * 2. Champion (choix entre candidates) : "Nombre de choix : 1" avec "Force"
 *    et "Dextérité" ; puis fermeture du popup via Quitter.
 */

TEST.RUNNER.register( "[CLASSE] popup Magicien → attribut clé = Intelligence", function () {
    TEST.RESET.sheet();
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Un nouveau personnage devrait etre instancie apres le reset" );
    if ( !_character ) {
        return;
    }
    TEST_openRacePopup();
    return TEST.clickTab( "body > .popup", "Elfe" ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        TEST_openClassPopup();
        return TEST.clickTab( "body > .popup", "Magicien" );
    } ).then( function () {
        let _pane                        = document.querySelector( "body > .popup .gs-tab-pane[data-name='Magicien']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Magicien devrait exister dans le popup" );
        if ( !_pane ) {
            return;
        }
        let _edition                     = _pane.querySelector( ".class-edition" );
        TEST.ASSERT.notNull( _edition, "Les infos de Magicien devraient etre rendues (.class-edition)" );
        if ( !_edition ) {
            return;
        }
        let _prime                       = TEST_editionPropertyValue( _edition, "Attribut clé" );
        TEST.ASSERT.notNull( _prime, "La description de Magicien devrait afficher la propriete Attribut clé (comme la Prime d'attribut de la race)" );
        if ( !_prime ) {
            return;
        }
        TEST.ASSERT.ok( _prime.indexOf( "Nombre de choix : 1" ) !== -1, "L'attribut clé devrait afficher le nombre de choix, obtenu : [" + _prime + "]" );
        TEST.ASSERT.ok( _prime.indexOf( "Intelligence" ) !== -1, "L'attribut clé de Magicien devrait afficher Intelligence, obtenu : [" + _prime + "]" );
    } );
} );

TEST.RUNNER.register( "[CLASSE] popup Champion → attribut clé = Force ou Dextérité", function () {
    let _edition_popup                  = CONTROLLER.Character.edition_popup;
    TEST.ASSERT.notNull( _edition_popup, "Pre-condition : popup de classe ouvert" );
    if ( !_edition_popup ) {
        return;
    }
    return TEST.clickTab( "body > .popup", "Champion" ).then( function () {
        let _pane                       = document.querySelector( "body > .popup .gs-tab-pane[data-name='Champion']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Champion devrait exister dans le popup" );
        if ( !_pane ) {
            return;
        }
        let _edition                    = _pane.querySelector( ".class-edition" );
        TEST.ASSERT.notNull( _edition, "Les infos de Champion devraient etre rendues (.class-edition)" );
        if ( !_edition ) {
            return;
        }
        let _prime                      = TEST_editionPropertyValue( _edition, "Attribut clé" );
        TEST.ASSERT.notNull( _prime, "La description de Champion devrait afficher la propriete Attribut clé" );
        if ( !_prime ) {
            return;
        }
        TEST.ASSERT.ok( _prime.indexOf( "Nombre de choix : 1" ) !== -1, "L'attribut clé devrait afficher le nombre de choix, obtenu : [" + _prime + "]" );
        TEST.ASSERT.ok( _prime.indexOf( "Force" ) !== -1, "L'attribut clé de Champion devrait afficher Force, obtenu : [" + _prime + "]" );
        TEST.ASSERT.ok( _prime.indexOf( "Dextérité" ) !== -1, "L'attribut clé de Champion devrait afficher Dextérité, obtenu : [" + _prime + "]" );
        let _cancel                     = document.querySelector( "body > .popup .popup-up-cancel" );
        TEST.ASSERT.notNull( _cancel, "Le bouton Quitter devrait etre rendu" );
        if ( _cancel ) {
            _cancel.click();
        }
        TEST.ASSERT.isNull( document.querySelector( "body > .popup" ), "Le popup devrait etre ferme apres Quitter" );
        TEST.ASSERT.isNull( CONTROLLER.Character.edition_popup, "edition_popup devrait etre reinitialisee apres Quitter" );
    } );
} );
