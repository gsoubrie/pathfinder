"use strict";
/**
 * Scenario : PAGE VIDE
 * Chargement de la fiche sans personnage. La page se charge, le premier onglet
 * affiche TOUT (decision utilisateur : plus de zone conditionnelle) — les
 * champs bases, l'heritage, les caracteristiques, la zone Classe et les jets
 * avec leurs valeurs par defaut ; seules les zones jamais implementees et le
 * champ porte par une classe restent absents.
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

TEST.RUNNER.register( "[PAGE VIDE] champs visibles = Nom, Joueur, Ascendance, Héritage, Taille", function () {
    let _fields                          = [
        { key: "name", editable: true },
        { key: "player", editable: true },
        { key: "race", editable: false },
        { key: "legacy", editable: false },
        { key: "body_size", editable: true }
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

TEST.RUNNER.register( "[PAGE VIDE] zones cachees : jamais implementees", function () {
    let _hidden_areas                    = [
        "area-heritage",
        "area-alignment",
        "area-divinity",
        "area-heroism",
        "area-ca",
        "area-surprise"
    ];
    for ( let i = 0, _size_i = _hidden_areas.length; i < _size_i; i++ ) {
        let _area                        = document.querySelector( ".characters-sheet-content ." + _hidden_areas[ i ] );
        TEST.ASSERT.isNull( _area, "La zone " + _hidden_areas[ i ] + " devrait etre cachee sur une page vide" );
    }
} );

TEST.RUNNER.register( "[PAGE VIDE] tout s'affiche : classe, caracteristiques, jets, infos ascendance", function () {
    // La zone Classe vit DES LE DEBUT : un input readOnly cliquable (vide)
    let _class_area                      = document.querySelector( ".characters-sheet-content .grid-area.area-class" );
    TEST.ASSERT.notNull( _class_area, "La zone Classe devrait etre rendue sur une page vide" );
    if ( _class_area ) {
        let _class_input                  = _class_area.querySelector( "input.value" );
        TEST.ASSERT.notNull( _class_input, "Le champ classe devrait etre rendu (input cliquable) sans ascendance" );
        if ( _class_input ) {
            TEST.ASSERT.equal( _class_input.value, "", "Le champ classe devrait etre vide sur une page vide, obtenu : [" + _class_input.value + "]" );
            TEST.ASSERT.ok( ( _class_input.getAttribute( "onclick" ) || "" ).indexOf( "event__property_popup__open" ) !== -1, "Le champ classe devrait ouvrir le popup au clic, obtenu : [" + _class_input.getAttribute( "onclick" ) + "]" );
        }
        TEST.ASSERT.isNull( _class_area.querySelector( ".class-add-button" ), "Plus de bouton « + » (le champ lui-meme est cliquable)" );
    }
    // Les caracteristiques vivent des le debut : une zone par caractenstique
    let _characteristic_keys             = [];
    for ( let i = 0, _size_i = CHARACTERISTICS.ENUM.length; i < _size_i; i++ ) {
        _characteristic_keys.push( CHARACTERISTICS.ENUM[ i ].key );
    }
    for ( let i = 0, _size_i = _characteristic_keys.length; i < _size_i; i++ ) {
        let _area                        = document.querySelector( ".characters-sheet-content .grid-area.area-" + _characteristic_keys[ i ] );
        TEST.ASSERT.notNull( _area, "La zone de la caracteristique " + _characteristic_keys[ i ] + " devrait etre rendue sur une page vide" );
    }
    // Le champ Archétype vit sur le personnage : il s'affiche des le debut,
    // vide et câblé vers la Bibliothèque
    let _archetype_area                  = document.querySelector( ".characters-sheet-content .grid-area.area-archetype" );
    TEST.ASSERT.notNull( _archetype_area, "Le champ Archétype devrait etre rendu sur une page vide (champ du personnage)" );
    if ( _archetype_area ) {
        let _archetype_input             = _archetype_area.querySelector( "input.value" );
        TEST.ASSERT.notNull( _archetype_input, "Le champ Archétype devrait avoir son input" );
        if ( _archetype_input ) {
            TEST.ASSERT.equal( _archetype_input.value, "", "Le champ Archétype devrait etre vide sur une page vierge, obtenu : [" + _archetype_input.value + "]" );
        }
    }
    // Le champ PV vit aussi sur le General (demande utilisateur : UN CHAMP,
    // le suivi vit dans l'onglet Aventure) : vide sur page vierge, son clic
    // bascule sur l'onglet Aventure
    let _pv_area                          = document.querySelector( ".characters-sheet-content .grid-area.area-pv" );
    TEST.ASSERT.notNull( _pv_area, "Le champ Points de vie devrait etre rendu sur une page vide (area-pv)" );
    if ( _pv_area ) {
        let _pv_input                     = _pv_area.querySelector( "input.health-points-link" );
        TEST.ASSERT.notNull( _pv_input, "Le champ PV devrait avoir son input cliquable" );
        if ( _pv_input ) {
            TEST.ASSERT.equal( _pv_input.value, "0 / 0", "Le champ PV devrait afficher 0 / 0 sur page vierge, obtenu : [" + _pv_input.value + "]" );
            TEST.ASSERT.ok( _pv_input.getAttribute( "onclick" ).indexOf( "goToSheet('" + CHARACTER.CombatWindow.NAME + "')" ) !== -1, "Le clic du champ PV devrait basculer sur l'onglet Combat" );
        }
    }
    // Le champ Niveau vit aussi sur le General : 0 sur page vierge, son
    // clic bascule sur l'onglet Progression
    let _level_area                      = document.querySelector( ".characters-sheet-content .grid-area.area-level" );
    TEST.ASSERT.notNull( _level_area, "Le champ Niveau devrait etre rendu sur une page vide (area-level)" );
    if ( _level_area ) {
        let _level_input                 = _level_area.querySelector( "input.level-link" );
        TEST.ASSERT.notNull( _level_input, "Le champ Niveau devrait avoir son input cliquable" );
        if ( _level_input ) {
            TEST.ASSERT.equal( _level_input.value, "0", "Le champ Niveau devrait afficher 0 sur page vierge, obtenu : [" + _level_input.value + "]" );
            TEST.ASSERT.ok( _level_input.getAttribute( "onclick" ).indexOf( "goToSheet('" + CHARACTER.LevelUpWindow.NAME + "')" ) !== -1, "Le clic du champ Niveau devrait basculer sur l'onglet Progression" );
        }
    }
    // La zone jets vit des le debut : l'entete + une ligne par sauvegarde et
    // par competence, valeurs par defaut (rang I, jet 0)
    let _jets_area                       = document.querySelector( ".characters-sheet-content .jets-grid" );
    TEST.ASSERT.notNull( _jets_area, "La zone jets devrait etre rendue sur une page vide" );
    if ( _jets_area ) {
        TEST.ASSERT.equal( _jets_area.querySelectorAll( ".saves-row" ).length, 1 + MASTERY.SAVES.length + Object.keys( SKILLS.LIST ).length, "L'entete + les " + MASTERY.SAVES.length + " sauvegardes + les " + Object.keys( SKILLS.LIST ).length + " competences devraient etre rendues, obtenu : " + _jets_area.querySelectorAll( ".saves-row" ).length );
    }
    // La zone infos d'ascendance vit des le debut : ses listes restent vides
    let _ancestry_area                   = document.querySelector( ".characters-sheet-content .area-ancestry-info" );
    TEST.ASSERT.notNull( _ancestry_area, "La zone infos ascendance devrait etre rendue sur une page vide" );
    if ( _ancestry_area ) {
        TEST.ASSERT.equal( _ancestry_area.querySelectorAll( ".ancestry-info-trait" ).length, 0, "Aucun trait ne devrait etre affiche sans ascendance, obtenu : " + _ancestry_area.querySelectorAll( ".ancestry-info-trait" ).length );
        TEST.ASSERT.equal( _ancestry_area.querySelectorAll( ".ancestry-list-entry" ).length, 0, "Aucune langue ne devrait etre affichee sans ascendance, obtenu : " + _ancestry_area.querySelectorAll( ".ancestry-list-entry" ).length );
    }
} );

// Placement dans la grille du General (decision utilisateur) : Divinité sous
// Archétype, PV sous Taille, Taille sur une seule ligne de grille, l'ancien
// emplacement de Divinité reste vide. Vérifié par style calculé (lignes et
// colonnes de grille résolues), valable en desktop comme en responsive
TEST.RUNNER.register( "[PAGE VIDE] grille = Divinité sous Archétype, PV sous Taille (1 ligne)", function () {
    let _pane                            = document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.GeneralWindow.NAME + "']" );
    TEST.ASSERT.notNull( _pane, "Pre-condition : le panneau Général devrait etre rendu" );
    if ( !_pane ) {
        return;
    }
    let _archetype_area                  = _pane.querySelector( ".grid-area.area-archetype" );
    let _deity_area                      = _pane.querySelector( ".grid-area.area-deity" );
    let _size_area                       = _pane.querySelector( ".grid-area.area-body_size" );
    let _pv_area                         = _pane.querySelector( ".grid-area.area-pv" );
    TEST.ASSERT.notNull( _archetype_area, "Pre-condition : zone Archétype rendue" );
    TEST.ASSERT.notNull( _deity_area, "Pre-condition : zone Divinité rendue" );
    TEST.ASSERT.notNull( _size_area, "Pre-condition : zone Taille rendue" );
    TEST.ASSERT.notNull( _pv_area, "Pre-condition : zone PV rendue" );
    if ( !_archetype_area || !_deity_area || !_size_area || !_pv_area ) {
        return;
    }
    // gridColumnStart/gridRowStart renvoient le NOM de la ligne avec des aires
    // nommées : la position se lit dans le gridTemplateAreas résolu du conteneur
    let _grid                            = _pane.querySelector( ".character-sheet-grid" );
    TEST.ASSERT.notNull( _grid, "Pre-condition : la grille du Général devrait etre rendue" );
    if ( !_grid ) {
        return;
    }
    let _template                        = getComputedStyle( _grid ).gridTemplateAreas;
    let _rows                            = _template.split( '"' ).filter( function ( row_text ) {
        return row_text.trim().length > 0;
    } );
    let _position_of                     = function ( area_name ) {
        for ( let r = 0, _size_r = _rows.length; r < _size_r; r++ ) {
            let _cells                   = _rows[ r ].trim().split( /\s+/ );
            for ( let c = 0, _size_c = _cells.length; c < _size_c; c++ ) {
                if ( _cells[ c ] === area_name ) {
                    return { row: r, col: c };
                }
            }
        }
        return null;
    };
    let _archetype_pos                   = _position_of( "archetype" );
    let _deity_pos                       = _position_of( "deity" );
    let _size_pos                        = _position_of( "size" );
    let _pv_pos                          = _position_of( "pv" );
    TEST.ASSERT.notNull( _archetype_pos, "Pre-condition : l'aire archetype devrait etre placée dans la grille, template obtenu : " + _template );
    TEST.ASSERT.notNull( _deity_pos, "Pre-condition : l'aire deity devrait etre placée dans la grille, template obtenu : " + _template );
    TEST.ASSERT.notNull( _size_pos, "Pre-condition : l'aire size devrait etre placée dans la grille, template obtenu : " + _template );
    TEST.ASSERT.notNull( _pv_pos, "Pre-condition : l'aire pv devrait etre placée dans la grille, template obtenu : " + _template );
    if ( !_archetype_pos || !_deity_pos || !_size_pos || !_pv_pos ) {
        return;
    }
    TEST.ASSERT.equal( _deity_pos.col, _archetype_pos.col, "Divinité dans la même colonne qu'Archétype (colonne attendue " + ( _archetype_pos.col + 1 ) + ", obtenue " + ( _deity_pos.col + 1 ) + ")" );
    TEST.ASSERT.equal( _deity_pos.row, _archetype_pos.row + 1, "Divinité directement sous Archétype (ligne attendue " + ( _archetype_pos.row + 2 ) + ", obtenue " + ( _deity_pos.row + 1 ) + ")" );
    TEST.ASSERT.equal( _pv_pos.col, _size_pos.col, "PV dans la même colonne que Taille (colonne attendue " + ( _size_pos.col + 1 ) + ", obtenue " + ( _pv_pos.col + 1 ) + ")" );
    TEST.ASSERT.equal( _pv_pos.row, _size_pos.row + 1, "PV directement sous Taille (ligne attendue " + ( _size_pos.row + 2 ) + ", obtenue " + ( _pv_pos.row + 1 ) + ")" );
    let _size_rows                       = _rows.filter( function ( row_text ) {
        return row_text.trim().split( /\s+/ ).indexOf( "size" ) !== -1;
    } );
    TEST.ASSERT.equal( _size_rows.length, 1, "Taille sur une seule ligne de grille, obtenu : " + _size_rows.length + " ligne(s)" );
    TEST.ASSERT.ok( _rows[ _deity_pos.row ].trim().split( /\s+/ ).indexOf( "." ) !== -1, "L'ancien emplacement de Divinité devrait rester vide (cellule « . » dans la ligne de Divinité), ligne obtenue : " + _rows[ _deity_pos.row ] );
    // La zone jets ne couvre plus qu UNE colonne de la grille (décision
    // utilisateur) : dans chaque ligne qui la contient, une seule cellule
    // "jets", et la colonne suivante porte informations (template
    // desktop ; en responsive la zone jets prend toute une ligne)
    if ( window.innerWidth > 1100 ) {
        let _jets_rows                 = 0;
        let _jets_single_column        = true;
        let _ancestry_info_column      = true;
        for ( let r = 0, _size_r = _rows.length; r < _size_r; r++ ) {
            let _cells                 = _rows[ r ].trim().split( /\s+/ );
            let _jets_in_row           = _cells.filter( function ( cell ) { return cell === "jets"; } ).length;
            if ( _jets_in_row ) {
                _jets_rows++;
                let _jets_col          = _cells.indexOf( "jets" );
                if ( _jets_in_row !== 1 ) {
                    _jets_single_column = false;
                }
                if ( _cells[ _jets_col + 1 ] !== "informations" ) {
                    _ancestry_info_column = false;
                }
            }
        }
        TEST.ASSERT.ok( _jets_rows > 0, "La zone jets devrait apparaître dans la grille" );
        TEST.ASSERT.ok( _jets_single_column, "La zone jets devrait couvrir une seule colonne par ligne (template : " + _template + ")" );
        TEST.ASSERT.ok( _ancestry_info_column, "La colonne à droite de jets devrait porter informations, template : " + _template );
    }
} );
