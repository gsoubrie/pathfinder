"use strict";
/**
 * Scenario : CLASSE - clic sur une entree de classe de l'onglet General
 * Le personnage possede deja une classe (entree .class-entry dans la zone
 * Classe). Un clic sur cette entree ouvre le popup de la classe en
 * consultation : menu d'onglets pour lire les autres classes, bouton Quitter,
 * mais pas de bouton Valider (aucune classe ne peut etre ajoutee depuis ce
 * popup, contrairement au popup d'ajout du bouton +). Quitter ferme le popup
 * sans modifier le personnage.
 * Depart : feuille vide (TEST.RESET.sheet()) puis race Elfe (necessaire
 * pour activer la zone Classe) et classe Magicien niveau 1.
 */
TEST.RUNNER.register( "[CLASSE] clic entrée Magicien → popup consultation sans Valider", function () {
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
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        TEST.ASSERT.equal( _character.getClasses().getLevel(), 1, "Pre-condition : Magicien niveau 1 pose, obtenu : " + _character.getClasses().getLevel() );
        let _entry                      = document.querySelector( ".grid-area.area-class .class-entry[data-name='Magicien']" );
        TEST.ASSERT.notNull( _entry, "L'entree de classe Magicien devrait etre rendue dans la zone Classe" );
        if ( !_entry ) {
            return;
        }
        let _onclick                    = _entry.getAttribute( "onclick" ) || "";
        TEST.ASSERT.ok( _onclick.indexOf( "event__property_popup__open" ) !== -1, "L'entree de classe devrait etre câblee sur event__property_popup__open, obtenu : [" + _onclick + "]" );
        TEST.ASSERT.ok( _onclick.indexOf( "Magicien" ) !== -1, "L'entree de classe devrait porter le nom de la classe cliquee dans son câblage, obtenu : [" + _onclick + "]" );
        _entry.click();
        TEST.ASSERT.notNull( CONTROLLER.Character.edition_popup, "Le clic sur l'entree devrait ouvrir le popup de classe (edition_popup)" );
        return TEST.wait().then( function () {
            let _popup                  = document.querySelector( "body > .popup" );
            TEST.ASSERT.notNull( _popup, "Le popup de classe devrait etre ouvert dans le body" );
            if ( !_popup ) {
                return;
            }
            TEST.ASSERT.isNull( _popup.querySelector( ".popup-up-valid" ), "Le bouton Valider ne devrait pas etre rendu en consultation (aucune classe ajoutable depuis une entree), obtenu un bouton Valider" );
            TEST.ASSERT.notNull( _popup.querySelector( ".popup-up-cancel" ), "Le bouton Quitter devrait etre rendu" );
            let _tabs                   = _popup.querySelectorAll( ".gs-window-element-V2" );
            TEST.ASSERT.equal( _tabs.length, 16, "Le popup devrait afficher les 16 classes en onglets, obtenu : " + _tabs.length );
            let _running_tabs           = _popup.querySelectorAll( ".gs-window-element-V2[data-current-phase='RUNNING']" );
            TEST.ASSERT.equal( _running_tabs.length, 1, "Un seul onglet RUNNING attendu, obtenu : " + _running_tabs.length );
            if ( _running_tabs.length === 1 ) {
                TEST.ASSERT.equal( _running_tabs[ 0 ].getAttribute( "data-name" ), "Magicien", "L'onglet actif devrait etre Magicien (la classe cliquee), obtenu : " + _running_tabs[ 0 ].getAttribute( "data-name" ) );
            }
            TEST.ASSERT.equal( CONTROLLER.Character.edition_popup.windows.getActiveWindow().getName(), "Magicien", "La fenetre active du popup devrait etre Magicien, obtenu : " + CONTROLLER.Character.edition_popup.windows.getActiveWindow().getName() );
            let _pane                   = _popup.querySelector( ".gs-tab-pane[data-name='Magicien']" );
            TEST.ASSERT.notNull( _pane, "Le panneau Magicien devrait exister dans le popup" );
            if ( _pane ) {
                TEST.ASSERT.notOk( _pane.classList.contains( "gs-hidden" ), "Le panneau Magicien devrait etre visible" );
                TEST.ASSERT.notNull( _pane.querySelector( ".class-edition" ), "Les infos de Magicien devraient etre rendues (.class-edition)" );
            }
            let _cancel                 = _popup.querySelector( ".popup-up-cancel" );
            _cancel.click();
            TEST.ASSERT.isNull( document.querySelector( "body > .popup" ), "Le popup devrait etre ferme apres Quitter" );
            TEST.ASSERT.isNull( CONTROLLER.Character.edition_popup, "edition_popup devrait etre reinitialisee apres Quitter" );
            TEST.ASSERT.equal( _character.getClasses().getLevel(), 1, "Le personnage devrait toujours avoir son Magicien niveau 1 apres Quitter, obtenu : " + _character.getClasses().getLevel() );
        } );
    } );
} );
