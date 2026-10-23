"use strict";
/**
 * Scenario : PAGE VIDE
 * Chargement de la fiche sans personnage. La page se charge, le premier onglet
 * affiche les champs disponibles et cache les zones conditionnelles.
 */

TEST.RUNNER.register( "[PAGE VIDE] La page se charge.", function () {
    TEST.ASSERT.equal( TEST.RUNNER.page_errors.length, 0, "Des erreurs JS ont eu lieu pendant le chargement" );
    TEST.ASSERT.notNull( CONTROLLER.Character.current_character, "Le controleur devrait avoir instancie un personnage" );
    if ( !CONTROLLER.Character.current_character ) {
        return;
    }
    TEST.ASSERT.ok( typeof CONTROLLER.Character.current_character.getUUID() === "string" && CONTROLLER.Character.current_character.getUUID().length > 0, "Le personnage devrait avoir un uuid genere" );
} );

TEST.RUNNER.register( "[PAGE VIDE][SAVE] bouton barre d'onglets + contenu vide", function () {
    let _save_button                     = document.querySelector( ".character-sheet-windows .save-button" );
    TEST.ASSERT.notNull( _save_button, "Le bouton de sauvegarde devrait etre rendu dans la barre d'onglets (.character-sheet-windows .save-button)" );
    if ( _save_button ) {
        TEST.ASSERT.ok( _save_button.getAttribute( "onclick" ).indexOf( "event__current_character__save" ) !== -1, "Le bouton sauvegarde devrait declencher event__current_character__save" );
    }
    TEST.ASSERT.isNull( document.querySelector( ".characters-sheet-content .area-save" ), "L'ancienne zone save ne devrait plus etre rendue dans l'onglet General" );
    let _character                       = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    let _saved                           = _character.getDataToSave();
    TEST.ASSERT.isArray( _saved.classes, "La sauvegarde devrait contenir un tableau de classes" );
    if ( _saved.classes ) {
        TEST.ASSERT.equal( _saved.classes.length, 0, "La sauvegarde ne devrait contenir aucune classe sur une page vide, obtenu : " + _saved.classes.length );
    }
    TEST.ASSERT.isArray( _saved.levels_history, "La sauvegarde devrait contenir un tableau d'historique" );
    if ( _saved.levels_history ) {
        TEST.ASSERT.equal( _saved.levels_history.length, 0, "La sauvegarde ne devrait contenir aucun niveau sur une page vide, obtenu : " + _saved.levels_history.length );
    }
    if ( _saved.race ) {
        TEST.ASSERT.equal( _saved.race.value, "", "La sauvegarde ne devrait pas contenir de race sur une page vide, obtenu : " + _saved.race.value );
    }
} );

TEST.RUNNER.register( "[PAGE VIDE] logo aligne sur les onglets", function () {
    let _logo                            = document.querySelector( ".logo-pathfinder" );
    TEST.ASSERT.notNull( _logo, "Le logo devrait etre rendu (div.logo-pathfinder)" );
    let _tab_bar                         = document.querySelector( ".character-sheet-windows" );
    TEST.ASSERT.notNull( _tab_bar, "La barre d'onglets devrait exister (.character-sheet-windows)" );
    if ( !_logo || !_tab_bar ) {
        return;
    }
    let _logo_rect                       = _logo.getBoundingClientRect();
    let _bar_rect                        = _tab_bar.getBoundingClientRect();
    TEST.ASSERT.ok( _logo_rect.top >= _bar_rect.top - 1 && _logo_rect.bottom <= _bar_rect.bottom + 1,
        "Le logo devrait tenir dans la bande verticale de la barre d'onglets, obtenu : logo top=" + _logo_rect.top + " bottom=" + _logo_rect.bottom + ", barre top=" + _bar_rect.top + " bottom=" + _bar_rect.bottom );
} );

TEST.RUNNER.register( "[PAGE VIDE] champs visibles = Nom, Joueur, Ascendance", function () {
    let _fields                          = [
        { key: "name", editable: true },
        { key: "player", editable: true },
        { key: "race", editable: false }
    ];
    for ( let i = 0, _size_i = _fields.length; i < _size_i; i++ ) {
        let _field                       = _fields[ i ];
        let _area                        = document.querySelector( ".characters-sheet-content .grid-area.area-" + _field.key );
        TEST.ASSERT.notNull( _area, "Le champ " + _field.key + " devrait etre rendu (div.grid-area.area-" + _field.key + ")" );
        if ( !_area ) {
            continue;
        }
        let _property                    = _area.querySelector( ".property[data-name='" + _field.key + "']" );
        TEST.ASSERT.notNull( _property, "Le champ " + _field.key + " devrait avoir sa propriete avec data-name" );
        let _label                       = _area.querySelector( ".label" );
        TEST.ASSERT.notNull( _label, "Le champ " + _field.key + " devrait avoir un label" );
        if ( _label ) {
            TEST.ASSERT.ok( _label.textContent.length > 0, "Le label du champ " + _field.key + " ne devrait pas etre vide" );
        }
        let _input                       = _area.querySelector( "input.value" );
        TEST.ASSERT.notNull( _input, "Le champ " + _field.key + " devrait avoir un input" );
        if ( !_input ) {
            continue;
        }
        TEST.ASSERT.equal( _input.value, "", "L'input du champ " + _field.key + " devrait etre vide sur une page vierge" );
        if ( _field.editable ) {
            TEST.ASSERT.ok( _input.getAttribute( "onchange" ) !== null && _input.getAttribute( "onchange" ).indexOf( "event__has_change__input" ) !== -1, "Le champ " + _field.key + " devrait declencher event__has_change__input a la saisie" );
        }
        else {
            TEST.ASSERT.ok( _input.getAttribute( "onclick" ) !== null && _input.getAttribute( "onclick" ).indexOf( "event__property_popup__open" ) !== -1, "Le champ " + _field.key + " devrait ouvrir le popup au clic (event__property_popup__open)" );
        }
    }
} );

TEST.RUNNER.register( "[PAGE VIDE] zones cachees : classe, niveau, etc", function () {
    let _hidden_areas                    = [
        "area-legacy",
        "area-heritage",
        "area-class",
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
        TEST.ASSERT.isNull( _area, "La zone " + _hidden_areas[ i ] + " devrait etre cachee sur une page vide" );
    }
} );
