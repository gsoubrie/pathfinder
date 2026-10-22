"use strict";
/**
 * Scenario : ONGLETS
 * Le groupe d'onglets de la fiche sur une page vide : nombre, onglet actif
 * (objet, DOM, style), libelles, etats desactives (Caracteristiques sans
 * ascendance, Niveau et Passage de niveau sans classe), clic sur Dons
 * (toujours actif) et retour sur l'onglet general.
 * Les clics Caracteristiques et Niveau se trouvent respectivement dans les
 * scenarios ASCENDANCE et CLASSE : ces onglets sont inactifs sans pre-requis.
 */

TEST.RUNNER.register( "[ONGLETS] nombre = 5", function () {
    let _character                      = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character && _character.windows, "Pre-condition : personnage et fenetres charges" );
    if ( !_character || !_character.windows ) {
        return;
    }
    TEST.ASSERT.equal( _character.windows.contents.length, 5, "Le groupe devrait contenir 5 fenetres, obtenu : " + _character.windows.contents.length );
    let _windows_dom                     = document.querySelectorAll( ".character-sheet-windows .gs-window-element-V2" );
    TEST.ASSERT.equal( _windows_dom.length, 5, "Les 5 onglets devraient etre rendus dans le DOM, trouve : " + _windows_dom.length );
} );

TEST.RUNNER.register( "[ONGLETS] actif = Général", function () {
    let _character                      = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character && _character.windows, "Pre-condition : personnage et fenetres charges" );
    if ( !_character || !_character.windows ) {
        return;
    }
    let _active_window                   = _character.windows.getActiveWindow();
    TEST.ASSERT.notNull( _active_window, "Une fenetre active devrait etre definie" );
    if ( !_active_window ) {
        return;
    }
    TEST.ASSERT.equal( _active_window.getName(), CHARACTER.GeneralWindow.NAME, "Fenetre active" );
    TEST.ASSERT.ok( _active_window.isPhase( GS.OBJECT.CONST.PHASE.RUNNING_TO_STRING ), "La fenetre active devrait etre en phase RUNNING_TO_STRING" );
    let _running_tabs                    = document.querySelectorAll( ".character-sheet-windows .gs-window-element-V2[data-current-phase='RUNNING']" );
    TEST.ASSERT.equal( _running_tabs.length, 1, "Un seul onglet devrait porter data-current-phase='RUNNING' dans le DOM, trouve : " + _running_tabs.length );
    if ( _running_tabs.length === 1 ) {
        TEST.ASSERT.equal( _running_tabs[ 0 ].getAttribute( "data-name" ), CHARACTER.GeneralWindow.NAME, "L'onglet RUNNING devrait etre general_sheet (sans cet attribut, aucun style d'onglet actif)" );
    }
} );

TEST.RUNNER.register( "[ONGLETS] style actif = doré", function () {
    let _running_tabs                    = document.querySelectorAll( ".character-sheet-windows .gs-window-element-V2[data-current-phase='RUNNING']" );
    TEST.ASSERT.equal( _running_tabs.length, 1, "Pre-condition : un onglet actif dans le DOM" );
    if ( _running_tabs.length !== 1 ) {
        return;
    }
    let _active_div                      = _running_tabs[ 0 ].querySelector( ".gs-div-tab" );
    TEST.ASSERT.notNull( _active_div, "L'onglet actif devrait contenir un div.gs-div-tab" );
    if ( !_active_div ) {
        return;
    }
    let _active_style                    = getComputedStyle( _active_div );
    TEST.ASSERT.ok( _active_style.backgroundImage.indexOf( "212, 175, 55" ) !== -1, "Le fond de l'onglet actif devrait etre le degrade dore (var(--g-gold), #D4AF37), obtenu : " + _active_style.backgroundImage );
    let _inactive_tab                    = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.GiftsWindow.NAME + "']" );
    if ( _inactive_tab ) {
        let _inactive_div                = _inactive_tab.querySelector( ".gs-div-tab" );
        if ( _inactive_div ) {
            let _inactive_style          = getComputedStyle( _inactive_div );
            TEST.ASSERT.notEqual( _active_style.backgroundImage, _inactive_style.backgroundImage, "L'onglet actif devrait etre visuellement distinct d'un onglet inactif (meme fond, le style actif ne s'applique pas)" );
        }
    }
} );

TEST.RUNNER.register( "[ONGLETS] libelles en francais", function () {
    let _expected_labels                 = [
        { name: CHARACTER.GeneralWindow.NAME,        label: "Général" },
        { name: CHARACTER.CharacteristicWindow.NAME, label: "Caractéristiques" },
        { name: CHARACTER.LevelWindow.NAME,          label: "Niveau" },
        { name: CHARACTER.GiftsWindow.NAME,          label: "Dons" },
        { name: CHARACTER.LevelUpWindow.NAME,        label: "Passage de niveau" }
    ];
    for ( let i = 0, _size_i = _expected_labels.length; i < _size_i; i++ ) {
        let _expected                     = _expected_labels[ i ];
        let _tab                          = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + _expected.name + "']" );
        TEST.ASSERT.notNull( _tab, "L'onglet " + _expected.name + " devrait exister dans le DOM" );
        if ( !_tab ) {
            continue;
        }
        let _label                        = _tab.querySelector( ".gs-label" );
        TEST.ASSERT.notNull( _label, "L'onglet " + _expected.name + " devrait afficher un libelle (div.gs-label)" );
        if ( !_label ) {
            continue;
        }
        TEST.ASSERT.equal( _label.textContent, _expected.label, "Libelle de l'onglet " + _expected.name );
    }
} );

TEST.RUNNER.register( "[ONGLETS] Caractéristiques = disabled sur page vide", function () {
    let _tab                             = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.CharacteristicWindow.NAME + "']" );
    TEST.ASSERT.notNull( _tab, "L'onglet Caracteristiques devrait exister" );
    if ( !_tab ) {
        return;
    }
    TEST.ASSERT.equal( _tab.getAttribute( "data-visibility-state" ), GS.CONST.VISIBILITY_STATE.DISABLED, "L'onglet Caracteristiques devrait porter l'etat disabled sans ascendance" );
    let _style                           = getComputedStyle( _tab );
    TEST.ASSERT.ok( parseFloat( _style.opacity ) < 1, "L'onglet desactive devrait apparaitre grise (opacity < 1), obtenu : " + _style.opacity );
    TEST.ASSERT.equal( _style.pointerEvents, "none", "Un onglet desactive ne devrait pas intercepter les clics (pointer-events none), obtenu : " + _style.pointerEvents );
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.CharacteristicWindow.NAME ).then( function () {
        let _character                   = CONTROLLER.Character.current_character;
        TEST.ASSERT.equal( _character.windows.getActiveWindow().getName(), CHARACTER.GeneralWindow.NAME, "Le clic sur un onglet desactive ne devrait rien changer (fenetre active)" );
    } );
} );

TEST.RUNNER.register( "[ONGLETS] Niveau = disabled sur page vide", function () {
    let _tab                             = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelWindow.NAME + "']" );
    TEST.ASSERT.notNull( _tab, "L'onglet Niveau devrait exister" );
    if ( !_tab ) {
        return;
    }
    TEST.ASSERT.equal( _tab.getAttribute( "data-visibility-state" ), GS.CONST.VISIBILITY_STATE.DISABLED, "L'onglet Niveau devrait porter l'etat disabled sans classe" );
    let _style                           = getComputedStyle( _tab );
    TEST.ASSERT.ok( parseFloat( _style.opacity ) < 1, "L'onglet desactive devrait apparaitre grise (opacity < 1), obtenu : " + _style.opacity );
    TEST.ASSERT.equal( _style.pointerEvents, "none", "Un onglet desactive ne devrait pas intercepter les clics (pointer-events none), obtenu : " + _style.pointerEvents );
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelWindow.NAME ).then( function () {
        let _character                   = CONTROLLER.Character.current_character;
        TEST.ASSERT.equal( _character.windows.getActiveWindow().getName(), CHARACTER.GeneralWindow.NAME, "Le clic sur un onglet desactive ne devrait rien changer (fenetre active)" );
    } );
} );

TEST.RUNNER.register( "[ONGLETS] Passage de niveau = disabled sur page vide", function () {
    let _tab                             = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
    TEST.ASSERT.notNull( _tab, "L'onglet Passage de niveau devrait exister" );
    if ( !_tab ) {
        return;
    }
    TEST.ASSERT.equal( _tab.getAttribute( "data-visibility-state" ), GS.CONST.VISIBILITY_STATE.DISABLED, "L'onglet Passage de niveau devrait porter l'etat disabled" );
    let _style                           = getComputedStyle( _tab );
    TEST.ASSERT.ok( parseFloat( _style.opacity ) < 1, "L'onglet desactive devrait apparaitre grise (opacity < 1), obtenu : " + _style.opacity );
    TEST.ASSERT.equal( _style.pointerEvents, "none", "Un onglet desactive ne devrait pas intercepter les clics (pointer-events none), obtenu : " + _style.pointerEvents );
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
        let _character                   = CONTROLLER.Character.current_character;
        TEST.ASSERT.equal( _character.windows.getActiveWindow().getName(), CHARACTER.GeneralWindow.NAME, "Le clic sur un onglet desactive ne devrait rien changer (fenetre active)" );
    } );
} );

TEST.RUNNER.register( "[ONGLETS] clic Dons → actif = Dons", function () {
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.GiftsWindow.NAME ).then( function () {
        let _character                   = CONTROLLER.Character.current_character;
        TEST.ASSERT.equal( _character.windows.getActiveWindow().getName(), CHARACTER.GiftsWindow.NAME, "Fenetre active apres le clic" );
        let _running_tabs                = document.querySelectorAll( ".character-sheet-windows .gs-window-element-V2[data-current-phase='RUNNING']" );
        TEST.ASSERT.equal( _running_tabs.length, 1, "Un seul onglet RUNNING" );
        if ( _running_tabs.length === 1 ) {
            TEST.ASSERT.equal( _running_tabs[ 0 ].getAttribute( "data-name" ), CHARACTER.GiftsWindow.NAME, "Onglet RUNNING" );
            let _style                   = getComputedStyle( _running_tabs[ 0 ].querySelector( ".gs-div-tab" ) );
            TEST.ASSERT.ok( _style.backgroundImage.indexOf( "212, 175, 55" ) !== -1, "L'onglet Dons actif devrait etre dore, obtenu : " + _style.backgroundImage );
        }
        let _pane                        = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.GiftsWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Dons devrait exister" );
        if ( _pane ) {
            TEST.ASSERT.notOk( _pane.classList.contains( "gs-hidden" ), "Le panneau Dons devrait etre visible apres le clic" );
            TEST.ASSERT.notNull( _pane.querySelector( ".gifts-window" ), "Le contenu Dons (.gifts-window) devrait etre rendu" );
            TEST.ASSERT.notNull( _pane.querySelector( ".gifts-filters" ), "Les filtres de dons devraient etre rendus apres le clic" );
        }
    } );
} );

TEST.RUNNER.register( "[ONGLETS] retour sur Général → actif = Général", function () {
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.GeneralWindow.NAME ).then( function () {
        let _character                   = CONTROLLER.Character.current_character;
        TEST.ASSERT.equal( _character.windows.getActiveWindow().getName(), CHARACTER.GeneralWindow.NAME, "Fenetre active apres le retour" );
        let _running_tabs                = document.querySelectorAll( ".character-sheet-windows .gs-window-element-V2[data-current-phase='RUNNING']" );
        TEST.ASSERT.equal( _running_tabs.length, 1, "Un seul onglet RUNNING" );
        if ( _running_tabs.length === 1 ) {
            TEST.ASSERT.equal( _running_tabs[ 0 ].getAttribute( "data-name" ), CHARACTER.GeneralWindow.NAME, "L'onglet RUNNING devrait etre general_sheet" );
        }
        let _general_style               = getComputedStyle( _running_tabs[ 0 ].querySelector( ".gs-div-tab" ) );
        TEST.ASSERT.ok( _general_style.backgroundImage.indexOf( "212, 175, 55" ) !== -1, "L'onglet General devrait etre dore a nouveau, obtenu : " + _general_style.backgroundImage );
        let _gifts_pane                  = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.GiftsWindow.NAME + "']" );
        if ( _gifts_pane ) {
            TEST.ASSERT.ok( _gifts_pane.classList.contains( "gs-hidden" ), "Le panneau Dons devrait etre masque a nouveau" );
        }
    } );
} );
