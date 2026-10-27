"use strict";
/**
 * Scenario : ARCHETYPE - choix d'un archétype de classe
 * Le champ Archétype (onglet General) n'est rendu qu'apres la pose d'une
 * classe : chaque classe porte son archétype (ComponentInterfacePopup),
 * choisi dans un popup avec une option "Aucun" (la suppression est la
 * validation de l'onglet Aucun).
 * Depart : feuille vide (TEST.RESET.sheet()) puis race Elfe (necessaire
 * pour activer la zone Classe) et classe Magicien niveau 1.
 * 1. Champ rendu : input readOnly câble sur event__property_popup__open,
 *    valeur vide.
 * 2. Ouverture : popup avec un onglet par archétype + Aucun, actif = Aucun,
 *    boutons Valider / Quitter rendus.
 * 3. Ajout : selection Acolyte draconique puis Valider → valeur posee
 *    (objet + champ), popup ferme.
 * 4. Sauvegarde : classes[ 0 ].archetype = Acolyte draconique.
 * 5. Reouverture : onglet actif = l'archétype pose.
 * 6. Changement : selection Acrobate puis Valider → nouvelle valeur.
 * 7. Quitter sans valider : valeur inchangee.
 * 8. Suppression : selection Aucun puis Valider → valeur Aucun.
 */

function TEST_openArchetypePopup() {
    // le onclick reel du champ Archétype (cf _component_interface.js)
    MANAGER.EventManagerV2.doActionAfter(
        { target: document.querySelector( ".grid-area.area-archetype input" ), button: 0, stopPropagation: function () {} },
        "event__property_popup__open",
        { "property_name": "archetype" }
    );
}

TEST.RUNNER.register( "[ARCHETYPE] classe posée → champ rendu, câblé popup", function () {
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
        let _archetype                  = _character.getClasses().getContent( 0 ).getArchetype();
        TEST.ASSERT.equal( _archetype.getValue(), "", "L'archétype de la classe devrait etre vide avant tout choix, obtenu : [" + _archetype.getValue() + "]" );
        let _area                       = document.querySelector( ".characters-sheet-content .grid-area.area-archetype" );
        TEST.ASSERT.notNull( _area, "La zone Archétype devrait etre rendue apres la pose d'une classe" );
        if ( !_area ) {
            return;
        }
        let _input                      = _area.querySelector( "input.value" );
        TEST.ASSERT.notNull( _input, "Le champ Archétype devrait etre rendu" );
        if ( !_input ) {
            return;
        }
        TEST.ASSERT.equal( _input.value, "", "Le champ Archétype devrait etre vide avant tout choix, obtenu : [" + _input.value + "]" );
        TEST.ASSERT.ok( _input.readOnly, "Le champ Archétype devrait etre en lecture seule (choix par popup)" );
        let _onclick                    = _input.getAttribute( "onclick" ) || "";
        TEST.ASSERT.ok( _onclick.indexOf( "event__property_popup__open" ) !== -1, "Le champ devrait etre câblé sur event__property_popup__open, obtenu : [" + _onclick + "]" );
    } );
} );

TEST.RUNNER.register( "[ARCHETYPE] clic champ → popup ouvert, actif = Aucun", function () {
    TEST_openArchetypePopup();
    let _popup                          = document.querySelector( "body > .popup" );
    TEST.ASSERT.notNull( _popup, "Le popup d'archétype devrait etre ouvert dans le body" );
    TEST.ASSERT.notNull( CONTROLLER.Character.edition_popup, "Le controleur devrait avoir une edition_popup" );
    if ( !_popup || !CONTROLLER.Character.edition_popup ) {
        return;
    }
    let _title                          = _popup.querySelector( ".title" );
    if ( _title ) {
        TEST.ASSERT.ok( _title.textContent.indexOf( ARCHETYPES.label ) === 0, "Le titre du popup devrait commencer par " + ARCHETYPES.label + ", obtenu : " + _title.textContent );
    }
    TEST.ASSERT.notNull( _popup.querySelector( ".popup-up-valid" ), "Le bouton Valider devrait etre rendu" );
    TEST.ASSERT.notNull( _popup.querySelector( ".popup-up-cancel" ), "Le bouton Quitter devrait etre rendu" );
    let _tabs                           = _popup.querySelectorAll( ".gs-window-element-V2" );
    TEST.ASSERT.equal( _tabs.length, ARCHETYPES.ENUM.length + 1, "Le popup devrait afficher un onglet par archétype + l'option Aucun, obtenu : " + _tabs.length + " attendus : " + ( ARCHETYPES.ENUM.length + 1 ) );
    TEST.ASSERT.equal( CONTROLLER.Character.edition_popup.windows.getActiveWindow().getName(), ARCHETYPES.default_value, "La fenetre active par defaut devrait etre Aucun" );
    return TEST.wait().then( function () {
        let _running_tabs               = _popup.querySelectorAll( ".gs-window-element-V2[data-current-phase='RUNNING']" );
        TEST.ASSERT.equal( _running_tabs.length, 1, "Un seul onglet RUNNING attendu, obtenu : " + _running_tabs.length );
        if ( _running_tabs.length === 1 ) {
            TEST.ASSERT.equal( _running_tabs[ 0 ].getAttribute( "data-name" ), ARCHETYPES.default_value, "L'onglet actif par defaut devrait etre Aucun, obtenu : " + _running_tabs[ 0 ].getAttribute( "data-name" ) );
        }
        let _pane_none                  = _popup.querySelector( ".gs-tab-pane[data-name='" + ARCHETYPES.default_value + "']" );
        TEST.ASSERT.notNull( _pane_none, "Le panneau Aucun devrait exister dans le popup" );
        if ( _pane_none ) {
            TEST.ASSERT.notOk( _pane_none.classList.contains( "gs-hidden" ), "Le panneau Aucun devrait etre visible" );
            TEST.ASSERT.ok( _pane_none.textContent.indexOf( "Aucun Archétype" ) !== -1, "Le panneau Aucun devrait afficher Aucun Archétype, obtenu : [" + _pane_none.textContent + "]" );
        }
    } );
} );

TEST.RUNNER.register( "[ARCHETYPE] validation Acolyte draconique → archétype posé", function () {
    let _character                      = CONTROLLER.Character.current_character;
    return TEST.clickTab( "body > .popup", "Acolyte draconique" ).then( function () {
        let _pane                       = document.querySelector( "body > .popup .gs-tab-pane[data-name='Acolyte draconique']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Acolyte draconique devrait exister" );
        if ( _pane ) {
            TEST.ASSERT.notOk( _pane.classList.contains( "gs-hidden" ), "Le panneau Acolyte draconique devrait etre visible apres selection" );
            TEST.ASSERT.notNull( _pane.querySelector( ".archetype-edition" ), "Les infos de l'archétype devraient etre rendues (.archetype-edition)" );
        }
        // le onclick reel du bouton Valider (cf popup.js)
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        TEST.ASSERT.isNull( document.querySelector( "body > .popup" ), "Le popup devrait etre ferme apres validation" );
        TEST.ASSERT.isNull( CONTROLLER.Character.edition_popup, "edition_popup devrait etre reinitialisee" );
        let _archetype                  = _character.getClasses().getContent( 0 ).getArchetype();
        TEST.ASSERT.equal( _archetype.getValue(), "Acolyte draconique", "L'archétype de la classe devrait valoir Acolyte draconique, obtenu : [" + _archetype.getValue() + "]" );
        let _input                      = document.querySelector( ".characters-sheet-content .grid-area.area-archetype input" );
        if ( _input ) {
            TEST.ASSERT.equal( _input.value, "Acolyte draconique", "Le champ Archétype devrait afficher Acolyte draconique, obtenu : [" + _input.value + "]" );
        }
    } );
} );

TEST.RUNNER.register( "[ARCHETYPE][SAVE] classes[0] = Acolyte draconique", function () {
    let _character                      = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    let _saved                          = _character.getDataToSave();
    TEST.ASSERT.isArray( _saved.classes, "La sauvegarde devrait contenir un tableau de classes" );
    if ( !_saved.classes || !_saved.classes.length ) {
        return;
    }
    TEST.ASSERT.equal( _saved.classes[ 0 ][ ARCHETYPES.key_element ], "Acolyte draconique", "La sauvegarde de la classe devrait contenir l'archétype Acolyte draconique, obtenu : [" + _saved.classes[ 0 ][ ARCHETYPES.key_element ] + "]" );
} );

TEST.RUNNER.register( "[ARCHETYPE] réouverture → actif = Acolyte draconique", function () {
    TEST_openArchetypePopup();
    let _popup                          = document.querySelector( "body > .popup" );
    TEST.ASSERT.notNull( _popup, "Le popup d'archétype devrait etre ouvert dans le body" );
    if ( !_popup || !CONTROLLER.Character.edition_popup ) {
        return;
    }
    TEST.ASSERT.equal( CONTROLLER.Character.edition_popup.windows.getActiveWindow().getName(), "Acolyte draconique", "La fenetre active devrait etre l'archétype pose, obtenu : " + CONTROLLER.Character.edition_popup.windows.getActiveWindow().getName() );
    return TEST.wait().then( function () {
        let _running_tabs               = _popup.querySelectorAll( ".gs-window-element-V2[data-current-phase='RUNNING']" );
        TEST.ASSERT.equal( _running_tabs.length, 1, "Un seul onglet RUNNING attendu, obtenu : " + _running_tabs.length );
        if ( _running_tabs.length === 1 ) {
            TEST.ASSERT.equal( _running_tabs[ 0 ].getAttribute( "data-name" ), "Acolyte draconique", "L'onglet actif devrait etre l'archétype pose, obtenu : " + _running_tabs[ 0 ].getAttribute( "data-name" ) );
        }
        let _pane                       = _popup.querySelector( ".gs-tab-pane[data-name='Acolyte draconique']" );
        if ( _pane ) {
            TEST.ASSERT.notOk( _pane.classList.contains( "gs-hidden" ), "Le panneau de l'archétype pose devrait etre visible" );
        }
    } );
} );

TEST.RUNNER.register( "[ARCHETYPE] changement → Acrobate", function () {
    let _character                      = CONTROLLER.Character.current_character;
    return TEST.clickTab( "body > .popup", "Acrobate" ).then( function () {
        // le onclick reel du bouton Valider (cf popup.js)
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        let _archetype                  = _character.getClasses().getContent( 0 ).getArchetype();
        TEST.ASSERT.equal( _archetype.getValue(), "Acrobate", "L'archétype devrait valoir Acrobate apres changement, obtenu : [" + _archetype.getValue() + "]" );
        let _input                      = document.querySelector( ".characters-sheet-content .grid-area.area-archetype input" );
        if ( _input ) {
            TEST.ASSERT.equal( _input.value, "Acrobate", "Le champ Archétype devrait afficher Acrobate, obtenu : [" + _input.value + "]" );
        }
    } );
} );

TEST.RUNNER.register( "[ARCHETYPE] Quitter sans valider → Acrobate inchangé", function () {
    TEST_openArchetypePopup();
    return TEST.clickTab( "body > .popup", "Acteur kitharodien" ).then( function () {
        let _cancel                     = document.querySelector( "body > .popup .popup-up-cancel" );
        TEST.ASSERT.notNull( _cancel, "Le bouton Quitter devrait etre rendu" );
        if ( _cancel ) {
            _cancel.click();
        }
        TEST.ASSERT.isNull( document.querySelector( "body > .popup" ), "Le popup devrait etre ferme apres Quitter" );
        TEST.ASSERT.isNull( CONTROLLER.Character.edition_popup, "edition_popup devrait etre reinitialisee apres Quitter" );
        let _character                  = CONTROLLER.Character.current_character;
        let _archetype                  = _character.getClasses().getContent( 0 ).getArchetype();
        TEST.ASSERT.equal( _archetype.getValue(), "Acrobate", "L'archétype devrait rester Acrobate apres Quitter, obtenu : [" + _archetype.getValue() + "]" );
        let _input                      = document.querySelector( ".characters-sheet-content .grid-area.area-archetype input" );
        if ( _input ) {
            TEST.ASSERT.equal( _input.value, "Acrobate", "Le champ Archétype devrait toujours afficher Acrobate, obtenu : [" + _input.value + "]" );
        }
    } );
} );

TEST.RUNNER.register( "[ARCHETYPE] suppression → Aucun", function () {
    TEST_openArchetypePopup();
    return TEST.clickTab( "body > .popup", ARCHETYPES.default_value ).then( function () {
        // le onclick reel du bouton Valider (cf popup.js)
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        let _character                  = CONTROLLER.Character.current_character;
        let _archetype                  = _character.getClasses().getContent( 0 ).getArchetype();
        TEST.ASSERT.equal( _archetype.getValue(), ARCHETYPES.default_value, "L'archétype devrait etre remis a Aucun apres suppression, obtenu : [" + _archetype.getValue() + "]" );
        let _input                      = document.querySelector( ".characters-sheet-content .grid-area.area-archetype input" );
        if ( _input ) {
            TEST.ASSERT.equal( _input.value, ARCHETYPES.default_value, "Le champ Archétype devrait afficher Aucun, obtenu : [" + _input.value + "]" );
        }
        let _saved                      = _character.getDataToSave();
        if ( _saved.classes && _saved.classes.length ) {
            TEST.ASSERT.equal( _saved.classes[ 0 ][ ARCHETYPES.key_element ], ARCHETYPES.default_value, "La sauvegarde devrait contenir l'archétype Aucun, obtenu : [" + _saved.classes[ 0 ][ ARCHETYPES.key_element ] + "]" );
        }
    } );
} );
