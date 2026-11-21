"use strict";
/**
 * Scenario : CLASSE UNIQUE (l'ancien MULTICLASSE est retire — demande
 * utilisateur : le personnage ne porte JAMAIS deux classes).
 * Pre-condition : fin du scenario CLASSE (race Elfe posee, classe Champion
 * posee a niveau 1, champ Classe affiche "Champion 1", onglet Progression
 * actif).
 * Le + du champ Classe avec une classe posee ouvre la CONSULTATION de la
 * classe possedee : pas de bouton Valider (aucune seconde classe ne peut
 * etre ajoutee), navigation libre dans les autres classes, Quitter ne
 * change rien. Le changement de classe passe par le retrait complet de ses
 * niveaux dans la Progression (le - retire le dernier niveau, la classe
 * part a 0).
 */

TEST.RUNNER.register( "[CLASSE UNIQUE] + avec classe posée → consultation sans Valider", function () {
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    TEST.ASSERT.equal( _character.getClasses().getSize(), 1, "Pre-condition : une seule classe posee (Champion), obtenu : " + _character.getClasses().getSize() );
    if ( _character.getClasses().getSize() !== 1 ) {
        return;
    }
    TEST_openClassPopup();
    return TEST.wait().then( function () {
        let _popup                      = document.querySelector( "body > .popup" );
        TEST.ASSERT.notNull( _popup, "Le popup de classe devrait etre ouvert dans le body" );
        if ( !_popup ) {
            return;
        }
        TEST.ASSERT.isNull( _popup.querySelector( ".popup-up-valid" ), "Le bouton Valider ne devrait pas etre rendu (une classe est deja posee), obtenu un bouton Valider" );
        TEST.ASSERT.notNull( _popup.querySelector( ".popup-up-cancel" ), "Le bouton Quitter devrait etre rendu" );
        TEST.ASSERT.equal( CONTROLLER.Character.edition_popup.windows.getActiveWindow().getName(), "Champion", "Le popup devrait s'ouvrir sur la classe possedee, obtenu : " + CONTROLLER.Character.edition_popup.windows.getActiveWindow().getName() );
        // La navigation vers une autre classe reste possible : le popup reste
        // une consultation, jamais une prise
        return TEST.clickTab( "body > .popup", "Guerrier" ).then( function () {
            TEST.ASSERT.equal( CONTROLLER.Character.edition_popup.windows.getActiveWindow().getName(), "Guerrier", "L'onglet Guerrier devrait s'ouvrir en consultation, obtenu : " + CONTROLLER.Character.edition_popup.windows.getActiveWindow().getName() );
            TEST.ASSERT.isNull( _popup.querySelector( ".popup-up-valid" ), "Le bouton Valider ne devrait toujours pas exister sur l'onglet Guerrier" );
            let _cancel                 = _popup.querySelector( ".popup-up-cancel" );
            TEST.ASSERT.notNull( _cancel, "Le bouton Quitter devrait etre rendu" );
            if ( !_cancel ) {
                return;
            }
            _cancel.click();
            TEST.ASSERT.isNull( document.querySelector( "body > .popup" ), "Le popup devrait etre ferme apres Quitter" );
            TEST.ASSERT.equal( _character.getClasses().getSize(), 1, "Aucune seconde classe ne devrait etre ajoutee, obtenu : " + _character.getClasses().getSize() );
            if ( _character.getClasses().getContentByUUID( "Champion" ) ) {
                TEST.ASSERT.equal( _character.getClasses().getContentByUUID( "Champion" ).getLevel(), 1, "Champion devrait rester a niveau 1, obtenu : " + _character.getClasses().getContentByUUID( "Champion" ).getLevel() );
            }
            TEST.ASSERT.equal( _character.getLevel(), 1, "Le niveau total devrait rester a 1, obtenu : " + _character.getLevel() );
            TEST.ASSERT.isNull( _character.getClasses().getContentByUUID( "Guerrier" ), "Guerrier ne devrait pas exister dans le conteneur" );
            let _class_input            = document.querySelector( ".characters-sheet-content .grid-area.area-class input.value" );
            TEST.ASSERT.notNull( _class_input, "Le champ classe devrait exister (input cliquable)" );
            TEST.ASSERT.equal( _class_input ? _class_input.value : null, "Champion", "Le champ classe devrait afficher la seule classe posée (Champion), obtenu : [" + ( _class_input ? _class_input.value : "null" ) + "]" );
        } );
    } );
} );
