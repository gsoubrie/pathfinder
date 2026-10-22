"use strict";
/**
 * Scenario : CLASSE
 * Meme principe que le scenario ASCENDANCE : clic sur le champ Classe,
 * verification du popup (Guerrier actif par defaut), selection de Champion,
 * validation (champ Archetype affiche) et re-activation de l'onglet
 * Passage de niveau.
 */

function TEST_openClassPopup() {
    // le onclick reel du champ class (cf _component_interface.js)
    MANAGER.EventManagerV2.doActionAfter(
        { target: document.querySelector( ".grid-area.area-class input" ), button: 0, stopPropagation: function () {} },
        "event__property_popup__open",
        { "property_name": "class" }
    );
}

TEST.RUNNER.register( "[CLASSE] clic sur le champ → popup ouvert", function () {
    TEST_openClassPopup();
    let _popup                          = document.querySelector( "body > .popup" );
    TEST.ASSERT.notNull( _popup, "Le popup d'edition devrait etre ouvert dans le body" );
    TEST.ASSERT.notNull( CONTROLLER.Character.edition_popup, "Le controleur devrait avoir une edition_popup" );
    if ( !_popup || !CONTROLLER.Character.edition_popup ) {
        return;
    }
    let _container                      = _popup.querySelector( ".edition-property-popup" );
    TEST.ASSERT.notNull( _container, "Le popup devrait contenir son conteneur d'edition" );
    let _title                          = _popup.querySelector( ".title" );
    TEST.ASSERT.notNull( _title, "Le popup devrait avoir un titre" );
    if ( _title ) {
        TEST.ASSERT.ok( _title.textContent.indexOf( CLASSES.label ) === 0, "Le titre du popup devrait commencer par le libelle, obtenu : " + _title.textContent );
    }
    TEST.ASSERT.notNull( _popup.querySelector( ".popup-up-valid" ), "Le bouton Valider devrait etre rendu" );
    TEST.ASSERT.notNull( _popup.querySelector( ".popup-up-cancel" ), "Le bouton Quitter devrait etre rendu" );
    let _tabs                           = _popup.querySelectorAll( ".gs-window-element-V2" );
    TEST.ASSERT.equal( _tabs.length, 16, "Le popup devrait afficher les 16 classes en onglets, obtenu : " + _tabs.length );
} );

TEST.RUNNER.register( "[CLASSE] popup : Guerrier actif par defaut", function () {
    let _edition_popup                  = CONTROLLER.Character.edition_popup;
    TEST.ASSERT.notNull( _edition_popup && _edition_popup.windows, "Pre-condition : popup de classe ouvert" );
    if ( !_edition_popup || !_edition_popup.windows ) {
        return;
    }
    TEST.ASSERT.equal( _edition_popup.windows.getActiveWindow().getName(), CLASSES.default_value, "La classe active par defaut devrait etre Guerrier" );
    let _running_tabs                   = document.querySelectorAll( "body > .popup .gs-window-element-V2[data-current-phase='RUNNING']" );
    TEST.ASSERT.equal( _running_tabs.length, 1, "Un seul onglet RUNNING dans le popup" );
    if ( _running_tabs.length === 1 ) {
        TEST.ASSERT.equal( _running_tabs[ 0 ].getAttribute( "data-name" ), "Guerrier", "L'onglet RUNNING du popup devrait etre Guerrier" );
    }
    let _pane                           = document.querySelector( "body > .popup .gs-tab-pane[data-name='Guerrier']" );
    TEST.ASSERT.notNull( _pane, "Le panneau Guerrier devrait exister" );
    if ( !_pane ) {
        return;
    }
    TEST.ASSERT.notOk( _pane.classList.contains( "gs-hidden" ), "Le panneau Guerrier devrait etre visible (gs-hidden encore present)" );
    let _edition                        = _pane.querySelector( ".class-edition" );
    TEST.ASSERT.notNull( _edition, "Les infos de la classe devraient etre rendues (.class-edition)" );
    if ( !_edition ) {
        return;
    }
    TEST.ASSERT.notNull( _edition.querySelector( ".class-header-block" ), "L'entete de la classe devrait etre rendu" );
    TEST.ASSERT.notNull( _edition.querySelector( ".class-general-desc" ), "La description de la classe devrait etre affichee" );
    TEST.ASSERT.notNull( _edition.querySelector( ".class-stat-hp .stat-chip-number" ), "Les pv par niveau de la classe devraient etre affiches" );
} );

TEST.RUNNER.register( "[CLASSE] selection Champion → actif = Champion", function () {
    return TEST.clickTab( "body > .popup", "Champion" ).then( function () {
        let _edition_popup              = CONTROLLER.Character.edition_popup;
        TEST.ASSERT.notNull( _edition_popup && _edition_popup.windows, "Pre-condition : popup de classe ouvert" );
        if ( !_edition_popup || !_edition_popup.windows ) {
            return;
        }
        TEST.ASSERT.equal( _edition_popup.windows.getActiveWindow().getName(), "Champion", "Fenetre active apres selection" );
        let _running_tabs               = document.querySelectorAll( "body > .popup .gs-window-element-V2[data-current-phase='RUNNING']" );
        TEST.ASSERT.equal( _running_tabs.length, 1, "Un seul onglet RUNNING dans le popup" );
        if ( _running_tabs.length === 1 ) {
            TEST.ASSERT.equal( _running_tabs[ 0 ].getAttribute( "data-name" ), "Champion", "L'onglet RUNNING du popup devrait etre Champion" );
        }
        let _pane                       = document.querySelector( "body > .popup .gs-tab-pane[data-name='Champion']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Champion devrait exister" );
        if ( _pane ) {
            TEST.ASSERT.notOk( _pane.classList.contains( "gs-hidden" ), "Le panneau Champion devrait etre visible apres selection" );
            TEST.ASSERT.notNull( _pane.querySelector( ".class-edition" ), "Les infos de Champion devraient etre rendues (.class-edition)" );
        }
        let _guerrier_pane              = document.querySelector( "body > .popup .gs-tab-pane[data-name='Guerrier']" );
        if ( _guerrier_pane ) {
            TEST.ASSERT.ok( _guerrier_pane.classList.contains( "gs-hidden" ), "Le panneau Guerrier devrait etre masque apres la selection de Champion" );
        }
    } );
} );

TEST.RUNNER.register( "[CLASSE] validation Champion → champ Archétype affiché", function () {
    // le onclick reel du bouton Valider (cf popup.js)
    CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
    let _popup                          = document.querySelector( "body > .popup" );
    TEST.ASSERT.isNull( _popup, "Le popup devrait etre ferme apres validation" );
    TEST.ASSERT.isNull( CONTROLLER.Character.edition_popup, "edition_popup devrait etre reinitialisee" );
    let _character                      = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    TEST.ASSERT.ok( _character.getClass().isSet(), "La classe devrait etre posee apres validation" );
    TEST.ASSERT.equal( _character.getClass().getValue(), "Champion", "Classe posee" );
    TEST.ASSERT.equal( document.body.dataset.isClassSet, "1", "data-is-class-set devrait passer a 1" );
    let _class_input                    = document.querySelector( ".characters-sheet-content .grid-area.area-class input" );
    if ( _class_input ) {
        TEST.ASSERT.equal( _class_input.value, "Champion", "Le champ Classe devrait afficher Champion" );
    }
    let _archetype_area                 = document.querySelector( ".characters-sheet-content .grid-area.area-archetype" );
    TEST.ASSERT.notNull( _archetype_area, "Le champ Archetype devrait etre affiche apres le choix de la classe (div.grid-area.area-archetype)" );
    if ( _archetype_area ) {
        TEST.ASSERT.notNull( _archetype_area.querySelector( ".property[data-name='archetype']" ), "La propriete archetype devrait exister" );
        let _archetype_input            = _archetype_area.querySelector( "input.value" );
        TEST.ASSERT.notNull( _archetype_input, "Le champ Archetype devrait avoir un input" );
        if ( _archetype_input ) {
            TEST.ASSERT.equal( _archetype_input.value, "", "Le champ Archetype devrait etre vide (aucun archetype choisi)" );
            TEST.ASSERT.ok( _archetype_input.getAttribute( "onclick" ) !== null && _archetype_input.getAttribute( "onclick" ).indexOf( "event__property_popup__open" ) !== -1, "Le champ Archetype devrait ouvrir le popup au clic" );
        }
    }
} );

TEST.RUNNER.register( "[CLASSE] onglet Niveau re-active", function () {
    let _tab                             = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelWindow.NAME + "']" );
    TEST.ASSERT.notNull( _tab, "L'onglet Niveau devrait exister" );
    if ( !_tab ) {
        return;
    }
    TEST.ASSERT.notEqual( _tab.getAttribute( "data-visibility-state" ), GS.CONST.VISIBILITY_STATE.DISABLED, "L'onglet Niveau ne devrait plus porter l'etat disabled apres le choix de la classe" );
    let _style                           = getComputedStyle( _tab );
    TEST.ASSERT.ok( parseFloat( _style.opacity ) >= 1, "L'onglet Niveau ne devrait plus etre grise, obtenu : " + _style.opacity );
    TEST.ASSERT.notEqual( _style.pointerEvents, "none", "L'onglet Niveau devrait intercepter les clics, obtenu : " + _style.pointerEvents );
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelWindow.NAME ).then( function () {
        let _character                   = CONTROLLER.Character.current_character;
        TEST.ASSERT.equal( _character.windows.getActiveWindow().getName(), CHARACTER.LevelWindow.NAME, "Fenetre active apres le clic" );
        let _running_tabs                = document.querySelectorAll( ".character-sheet-windows .gs-window-element-V2[data-current-phase='RUNNING']" );
        TEST.ASSERT.equal( _running_tabs.length, 1, "Un seul onglet RUNNING" );
        if ( _running_tabs.length === 1 ) {
            TEST.ASSERT.equal( _running_tabs[ 0 ].getAttribute( "data-name" ), CHARACTER.LevelWindow.NAME, "Onglet RUNNING" );
            let _active_style            = getComputedStyle( _running_tabs[ 0 ].querySelector( ".gs-div-tab" ) );
            TEST.ASSERT.ok( _active_style.backgroundImage.indexOf( "212, 175, 55" ) !== -1, "L'onglet Niveau actif devrait etre dore, obtenu : " + _active_style.backgroundImage );
        }
        let _pane                        = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Niveau devrait exister" );
        if ( _pane ) {
            TEST.ASSERT.notOk( _pane.classList.contains( "gs-hidden" ), "Le panneau Niveau devrait etre visible apres le clic" );
            TEST.ASSERT.notNull( _pane.querySelector( ".level-window" ), "Le contenu Niveau (.level-window) devrait etre rendu" );
            TEST.ASSERT.notNull( _pane.querySelector( ".level-container-life" ), "La zone points de vie du panneau Niveau devrait etre rendue" );
        }
    } );
} );

TEST.RUNNER.register( "[CLASSE] onglet Passage de niveau re-active", function () {
    let _tab                            = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
    TEST.ASSERT.notNull( _tab, "L'onglet Passage de niveau devrait exister" );
    if ( !_tab ) {
        return;
    }
    TEST.ASSERT.notEqual( _tab.getAttribute( "data-visibility-state" ), GS.CONST.VISIBILITY_STATE.DISABLED, "L'onglet Passage de niveau ne devrait plus porter l'etat disabled apres le choix de la classe" );
    let _style                          = getComputedStyle( _tab );
    TEST.ASSERT.ok( parseFloat( _style.opacity ) >= 1, "L'onglet Passage de niveau ne devrait plus etre grise, obtenu : " + _style.opacity );
    TEST.ASSERT.notEqual( _style.pointerEvents, "none", "L'onglet Passage de niveau devrait intercepter les clics, obtenu : " + _style.pointerEvents );
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
        let _character                   = CONTROLLER.Character.current_character;
        TEST.ASSERT.equal( _character.windows.getActiveWindow().getName(), CHARACTER.LevelUpWindow.NAME, "Le clic sur Passage de niveau devrait l'activer apres le choix de la classe" );
    } );
} );
