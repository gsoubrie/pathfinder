"use strict";
/**
 * Scenario : ASCENDANCE
 * Clic sur le champ Ascendance de la fiche (le meme appel que le onclick
 * genere), verification du popup d'edition : ouvert, 16 races en onglets,
 * Humain actif par defaut avec ses infos affichees, selection d'Elfe puis
 * validation : race posee, popup ferme et champ Classe affiche.
 */

function TEST_openRacePopup() {
    // le onclick reel du champ race (cf _component_interface.js)
    MANAGER.EventManagerV2.doActionAfter(
        { target: document.querySelector( ".grid-area.area-race input" ), button: 0, stopPropagation: function () {} },
        "event__property_popup__open",
        { "property_name": "race" }
    );
}

function TEST_editionPropertyValue( edition_dom, property_label ) {
    let _properties                    = edition_dom.querySelectorAll( ".edition-property.horizontal" );
    for ( let i = 0, _size_i = _properties.length; i < _size_i; i++ ) {
        let _label                     = _properties[ i ].querySelector( ".label" );
        if ( _label && _label.textContent === property_label ) {
            let _value                 = _properties[ i ].querySelector( ".value" );
            return _value ? _value.textContent : null;
        }
    }
    return null;
}

TEST.RUNNER.register( "[ASCENDANCE] clic sur le champ → popup ouvert", function () {
    TEST_openRacePopup();
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
        TEST.ASSERT.ok( _title.textContent.indexOf( RACES.label ) === 0, "Le titre du popup devrait commencer par le libelle, obtenu : " + _title.textContent );
    }
    TEST.ASSERT.notNull( _popup.querySelector( ".popup-up-valid" ), "Le bouton Valider devrait etre rendu" );
    TEST.ASSERT.notNull( _popup.querySelector( ".popup-up-cancel" ), "Le bouton Quitter devrait etre rendu" );
    let _tabs                           = _popup.querySelectorAll( ".gs-window-element-V2" );
    TEST.ASSERT.equal( _tabs.length, 16, "Le popup devrait afficher les 16 races en onglets, obtenu : " + _tabs.length );
} );

TEST.RUNNER.register( "[ASCENDANCE] popup : Humain actif par defaut", function () {
    let _edition_popup                  = CONTROLLER.Character.edition_popup;
    TEST.ASSERT.notNull( _edition_popup && _edition_popup.windows, "Pre-condition : popup d'ascendance ouvert" );
    if ( !_edition_popup || !_edition_popup.windows ) {
        return;
    }
    TEST.ASSERT.equal( _edition_popup.windows.getActiveWindow().getName(), RACES.default_value, "La race active par defaut devrait etre Humain" );
    let _running_tabs                   = document.querySelectorAll( "body > .popup .gs-window-element-V2[data-current-phase='RUNNING']" );
    TEST.ASSERT.equal( _running_tabs.length, 1, "Un seul onglet RUNNING dans le popup" );
    if ( _running_tabs.length === 1 ) {
        TEST.ASSERT.equal( _running_tabs[ 0 ].getAttribute( "data-name" ), "Humain", "L'onglet RUNNING du popup devrait etre Humain" );
    }
    let _pane                           = document.querySelector( "body > .popup .gs-tab-pane[data-name='Humain']" );
    TEST.ASSERT.notNull( _pane, "Le panneau Humain devrait exister" );
    if ( !_pane ) {
        return;
    }
    TEST.ASSERT.notOk( _pane.classList.contains( "gs-hidden" ), "Le panneau Humain devrait etre visible (gs-hidden encore present)" );
    let _edition                        = _pane.querySelector( ".race-edition" );
    TEST.ASSERT.notNull( _edition, "Les infos de la race devraient etre rendues (.race-edition)" );
    if ( !_edition ) {
        return;
    }
    TEST.ASSERT.notNull( _edition.querySelector( ".traits .trait" ), "Les traits de la race devraient etre affiches" );
    TEST.ASSERT.equal( TEST_editionPropertyValue( _edition, "Point de vie" ), "8", "Les pv de depart de Humain (8) devraient etre affiches" );
    TEST.ASSERT.notNull( _edition.querySelector( ".edition-property.description .value p" ), "La description de la race devrait etre affichee" );
} );

TEST.RUNNER.register( "[ASCENDANCE] selection Elfe → actif = Elfe", function () {
    return TEST.clickTab( "body > .popup", "Elfe" ).then( function () {
        let _edition_popup              = CONTROLLER.Character.edition_popup;
        TEST.ASSERT.notNull( _edition_popup && _edition_popup.windows, "Pre-condition : popup d'ascendance ouvert" );
        if ( !_edition_popup || !_edition_popup.windows ) {
            return;
        }
        TEST.ASSERT.equal( _edition_popup.windows.getActiveWindow().getName(), "Elfe", "Fenetre active apres selection" );
        let _running_tabs               = document.querySelectorAll( "body > .popup .gs-window-element-V2[data-current-phase='RUNNING']" );
        TEST.ASSERT.equal( _running_tabs.length, 1, "Un seul onglet RUNNING dans le popup" );
        if ( _running_tabs.length === 1 ) {
            TEST.ASSERT.equal( _running_tabs[ 0 ].getAttribute( "data-name" ), "Elfe", "L'onglet RUNNING du popup devrait etre Elfe" );
        }
        let _pane                       = document.querySelector( "body > .popup .gs-tab-pane[data-name='Elfe']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Elfe devrait exister" );
        if ( _pane ) {
            TEST.ASSERT.notOk( _pane.classList.contains( "gs-hidden" ), "Le panneau Elfe devrait etre visible apres selection" );
            let _edition                = _pane.querySelector( ".race-edition" );
            TEST.ASSERT.notNull( _edition, "Les infos d'Elfe devraient etre rendues (.race-edition)" );
            if ( _edition ) {
                TEST.ASSERT.equal( TEST_editionPropertyValue( _edition, "Point de vie" ), "6", "Les pv de depart d'Elfe (6) devraient etre affiches" );
                TEST.ASSERT.notNull( _edition.querySelector( ".traits .trait" ), "Les traits d'Elfe devraient etre affiches" );
            }
        }
        let _humain_pane                = document.querySelector( "body > .popup .gs-tab-pane[data-name='Humain']" );
        if ( _humain_pane ) {
            TEST.ASSERT.ok( _humain_pane.classList.contains( "gs-hidden" ), "Le panneau Humain devrait etre masque apres la selection d'Elfe" );
        }
    } );
} );

TEST.RUNNER.register( "[ASCENDANCE] validation Elfe → champ Classe affiché", function () {
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
    TEST.ASSERT.ok( _character.getRace().isSet(), "La race devrait etre posee apres validation" );
    TEST.ASSERT.equal( _character.getRace().getValue(), "Elfe", "Race posee" );
    TEST.ASSERT.equal( document.body.dataset.isRaceSet, "1", "data-is-race-set devrait passer a 1" );
    let _race_input                     = document.querySelector( ".characters-sheet-content .grid-area.area-race input" );
    if ( _race_input ) {
        TEST.ASSERT.equal( _race_input.value, "Elfe", "Le champ Ascendance devrait afficher Elfe" );
    }
    let _class_area                     = document.querySelector( ".characters-sheet-content .grid-area.area-class" );
    TEST.ASSERT.notNull( _class_area, "Le champ Classe devrait etre affiche apres le choix de l'ascendance (div.grid-area.area-class)" );
    if ( _class_area ) {
        TEST.ASSERT.notNull( _class_area.querySelector( ".property[data-name='class']" ), "La propriete class devrait exister" );
        let _class_input                = _class_area.querySelector( "input.value" );
        TEST.ASSERT.notNull( _class_input, "Le champ Classe devrait avoir un input" );
        if ( _class_input ) {
            TEST.ASSERT.equal( _class_input.value, "", "Le champ Classe devrait etre vide (aucune classe choisie)" );
            TEST.ASSERT.ok( _class_input.getAttribute( "onclick" ) !== null && _class_input.getAttribute( "onclick" ).indexOf( "event__property_popup__open" ) !== -1, "Le champ Classe devrait ouvrir le popup au clic" );
        }
    }
    TEST.ASSERT.notOk( _character.getClass().isSet(), "Aucune classe ne devrait etre posee" );
} );

TEST.RUNNER.register( "[ASCENDANCE] champs visibles apres validation = Ascendance, Héritage, Caractéristiques, Classe", function () {
    let _visible_areas                  = [
        { key: "name" },
        { key: "player" },
        { key: "race" },
        { key: "legacy",       expected_input: "Aucun" },
        { key: "class",        expected_input: "" }
    ];
    for ( let i = 0, _size_i = _visible_areas.length; i < _size_i; i++ ) {
        let _expected                    = _visible_areas[ i ];
        let _area                        = document.querySelector( ".characters-sheet-content .grid-area.area-" + _expected.key );
        TEST.ASSERT.notNull( _area, "La zone " + _expected.key + " devrait etre visible apres la validation de l'ascendance" );
        if ( !_area ) {
            continue;
        }
        TEST.ASSERT.notNull( _area.querySelector( ".property[data-name='" + _expected.key + "']" ), "La propriete " + _expected.key + " devrait exister" );
        let _input                       = _area.querySelector( "input.value" );
        TEST.ASSERT.notNull( _input, "La zone " + _expected.key + " devrait avoir un input" );
        if ( _input && _expected.expected_input !== undefined ) {
            TEST.ASSERT.equal( _input.value, _expected.expected_input, "Valeur affichee du champ " + _expected.key );
        }
    }
    let _characteristic_keys             = ["FOR", "DEX", "CON", "INT", "SAG", "CHA"];
    for ( let j = 0, _size_j = _characteristic_keys.length; j < _size_j; j++ ) {
        let _key                         = _characteristic_keys[ j ];
        let _area                        = document.querySelector( ".characters-sheet-content .grid-area.area-" + _key );
        TEST.ASSERT.notNull( _area, "La zone de la caracteristique " + _key + " devrait etre visible apres la validation de l'ascendance" );
        if ( _area ) {
            TEST.ASSERT.notNull( _area.querySelector( ".characteristic[data-name='" + _key + "']" ), "La caracteristique " + _key + " devrait etre rendue dans sa zone" );
        }
    }
} );

TEST.RUNNER.register( "[ASCENDANCE] zones toujours cachees : archétype, niveau, etc", function () {
    let _hidden_areas                   = [
        "area-archetype",
        "area-level",
        "area-alignment",
        "area-divinity",
        "area-heroism",
        "area-ca",
        "area-surprise",
        "area-health"
    ];
    for ( let i = 0, _size_i = _hidden_areas.length; i < _size_i; i++ ) {
        let _area                        = document.querySelector( ".characters-sheet-content ." + _hidden_areas[ i ] );
        TEST.ASSERT.isNull( _area, "La zone " + _hidden_areas[ i ] + " devrait rester cachee tant que la classe n'est pas choisie" );
    }
} );

TEST.RUNNER.register( "[ASCENDANCE] onglet Caractéristiques re-active", function () {
    let _tab                             = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.CharacteristicWindow.NAME + "']" );
    TEST.ASSERT.notNull( _tab, "L'onglet Caracteristiques devrait exister" );
    if ( !_tab ) {
        return;
    }
    TEST.ASSERT.notEqual( _tab.getAttribute( "data-visibility-state" ), GS.CONST.VISIBILITY_STATE.DISABLED, "L'onglet Caracteristiques ne devrait plus porter l'etat disabled apres le choix de l'ascendance" );
    let _style                           = getComputedStyle( _tab );
    TEST.ASSERT.ok( parseFloat( _style.opacity ) >= 1, "L'onglet Caracteristiques ne devrait plus etre grise, obtenu : " + _style.opacity );
    TEST.ASSERT.notEqual( _style.pointerEvents, "none", "L'onglet Caracteristiques devrait intercepter les clics, obtenu : " + _style.pointerEvents );
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.CharacteristicWindow.NAME ).then( function () {
        let _character                   = CONTROLLER.Character.current_character;
        TEST.ASSERT.equal( _character.windows.getActiveWindow().getName(), CHARACTER.CharacteristicWindow.NAME, "Fenetre active apres le clic" );
        let _running_tabs                = document.querySelectorAll( ".character-sheet-windows .gs-window-element-V2[data-current-phase='RUNNING']" );
        TEST.ASSERT.equal( _running_tabs.length, 1, "Un seul onglet RUNNING" );
        if ( _running_tabs.length === 1 ) {
            TEST.ASSERT.equal( _running_tabs[ 0 ].getAttribute( "data-name" ), CHARACTER.CharacteristicWindow.NAME, "Onglet RUNNING" );
            let _active_style            = getComputedStyle( _running_tabs[ 0 ].querySelector( ".gs-div-tab" ) );
            TEST.ASSERT.ok( _active_style.backgroundImage.indexOf( "212, 175, 55" ) !== -1, "L'onglet Caracteristiques actif devrait etre dore, obtenu : " + _active_style.backgroundImage );
        }
        let _general_div                 = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.GeneralWindow.NAME + "'] .gs-div-tab" );
        if ( _general_div ) {
            let _general_style           = getComputedStyle( _general_div );
            TEST.ASSERT.ok( _general_style.backgroundImage.indexOf( "212, 175, 55" ) === -1, "L'onglet General inactif ne devrait plus etre dore, obtenu : " + _general_style.backgroundImage );
        }
        let _pane                        = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.CharacteristicWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Caracteristiques devrait exister (.gs-tab-pane)" );
        if ( !_pane ) {
            return;
        }
        TEST.ASSERT.notOk( _pane.classList.contains( "gs-hidden" ), "Le panneau Caracteristiques devrait etre visible apres le clic (classe gs-hidden encore presente)" );
        let _container                    = _pane.querySelector( ".characteristic-container" );
        TEST.ASSERT.notNull( _container, "Le panneau devrait contenir la grille des caracteristiques (.characteristic-container)" );
        if ( _container ) {
            let _expected_keys            = ["FOR", "DEX", "CON", "INT", "SAG", "CHA"];
            for ( let i = 0, _size_i = _expected_keys.length; i < _size_i; i++ ) {
                TEST.ASSERT.notNull( _container.querySelector( ".characteristic-line[data-name='" + _expected_keys[ i ] + "']" ), "La ligne de la caracteristique " + _expected_keys[ i ] + " devrait etre rendue" );
            }
        }
        let _general_pane                = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.GeneralWindow.NAME + "']" );
        if ( _general_pane ) {
            TEST.ASSERT.ok( _general_pane.classList.contains( "gs-hidden" ), "Le panneau General devrait etre masque apres le clic sur Caracteristiques" );
        }
    } );
} );
