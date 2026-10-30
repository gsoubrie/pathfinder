"use strict";
/**
 * Scenario : COMPETENCES
 * Depart : etat de fin du scenario SAUVEGARDES (feuille Elfe + Magicien
 * niveau 5, capacite "expertise en reflexes" validee, onglet General actif).
 * 1. Bloc Compétences, a la suite du bloc des jets dans la meme zone elargie
 *    (grid-area jets) : separation titree "Competences" (pas de second
 *    en-tete, le titre Jet | Rang | Mod | Niv n'est qu'en haut), une ligne par
 *    compétence du jeu (SKILLS.LIST, 17), triées par libellé, sans la
 *    caractéristique associée (le nom suffit). Jet complet
 *    "niveau + modificateur de caractéristique + bonus de rang", rang I
 *    (bonus 0) pour les compétences non maîtrisées : Arcanes seule Qualifiée
 *    du Magicien. Clic sur une ligne → popup des maîtrises (source du rang).
 */

TEST.RUNNER.register( "[COMPETENCES] affichage = 17 lignes triées + charac associée", function () {
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    TEST.ASSERT.equal( _character.getLevel(), 5, "Pre-condition : Magicien niveau 5, obtenu : " + _character.getLevel() );
    let _pane                          = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.GeneralWindow.NAME + "']" );
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Général rendu" );
    if ( !_pane ) {
        return;
    }
    let _area                          = _pane.querySelector( ".jets-skills-block" );
    TEST.ASSERT.notNull( _area, "La zone Compétences devrait être rendue à la suite des jets (.jets-skills-block)" );
    if ( !_area ) {
        return;
    }
    let _saves_area                    = _pane.querySelector( ".jets-saves-block" );
    TEST.ASSERT.notNull( _saves_area, "Pre-condition : zone des jets rendue" );
    if ( _saves_area ) {
        TEST.ASSERT.ok( _area.getBoundingClientRect().top >= _saves_area.getBoundingClientRect().bottom, "Le bloc Compétences devrait être en dessous du bloc des jets, obtenu : compétences haut " + _area.getBoundingClientRect().top + " contre jets bas " + _saves_area.getBoundingClientRect().bottom );
    }
    let _separator                      = _area.querySelector( ".saves-separator" );
    TEST.ASSERT.notNull( _separator, "Une séparation titrée devrait ouvrir le bloc Compétences (.saves-separator)" );
    if ( _separator ) {
        TEST.ASSERT.equal( _separator.textContent, "Compétences", "La séparation devrait être titrée Compétences, obtenu : " + _separator.textContent );
    }
    TEST.ASSERT.isNull( _area.querySelector( ".saves-header-row" ), "Le bloc Compétences ne devrait pas porter de second en-tête (le titre Jet | Rang | Mod | Niv n'est qu'en haut des jets)" );
    let _rows                          = _area.querySelectorAll( ".saves-row[data-slot]" );
    TEST.ASSERT.equal( _rows.length, 17, "La zone devrait rendre les 17 compétences du jeu (SKILLS.LIST), obtenu : " + _rows.length );
    if ( _rows.length !== 17 ) {
        return;
    }
    let _labels                        = [];
    for ( let _i = 0; _i < _rows.length; _i++ ) {
        _labels.push( _rows[ _i ].querySelector( ".saves-label" ).textContent );
    }
    for ( let _i = 0; _i < _labels.length - 1; _i++ ) {
        TEST.ASSERT.ok( _labels[ _i ].localeCompare( _labels[ _i + 1 ] ) <= 0, "Les compétences devraient être triées par libellé, obtenu : " + _labels[ _i ] + " avant " + _labels[ _i + 1 ] );
    }
    let _level                         = _character.getLevel();
    for ( let _i = 0; _i < _rows.length; _i++ ) {
        let _row                       = _rows[ _i ];
        let _label                     = _row.querySelector( ".saves-label" ).textContent;
        let _skill_data                = null;
        let _skill_keys                = Object.keys( SKILLS.LIST );
        for ( let _k = 0; _k < _skill_keys.length; _k++ ) {
            if ( SKILLS.LIST[ _skill_keys[ _k ] ].label === _label ) {
                _skill_data            = SKILLS.LIST[ _skill_keys[ _k ] ];
            }
        }
        TEST.ASSERT.notNull( _skill_data, "Chaque ligne devrait correspondre à une compétence de SKILLS.LIST, obtenu : " + _label );
        if ( !_skill_data ) {
            return;
        }
        TEST.ASSERT.equal( _row.getAttribute( "data-slot" ), "skill__" + CLASSES.getAbilityKey( _label ), "La ligne " + _label + " devrait porter le slot de maîtrise de la compétence, obtenu : " + _row.getAttribute( "data-slot" ) );
        TEST.ASSERT.isNull( _row.querySelector( ".saves-label-charac" ), "La ligne " + _label + " ne devrait afficher que son nom, sans la caractéristique" );
        let _expected_rank             = _label === "Arcanes" ? "Q" : "I";
        let _expected_bonus            = _expected_rank === "Q" ? 2 : 0;
        TEST.ASSERT.equal( _row.querySelector( ".saves-rank" ).textContent, _expected_rank, "Le rang de " + _label + " devrait être " + _expected_rank + " (Arcanes seule Qualifiée du Magicien), obtenu : " + _row.querySelector( ".saves-rank" ).textContent );
        let _modifier                  = _character.getCharacteristics().getContentByUUID( _skill_data.characteristic ).getModifierValue();
        let _expected_value            = _level + _modifier + _expected_bonus;
        TEST.ASSERT.equal( _row.querySelector( ".saves-value" ).textContent, ( "" + _expected_value ), "Le jet de " + _label + " devrait valoir niveau + mod " + _skill_data.characteristic + " + bonus de rang (" + _expected_value + "), obtenu : " + _row.querySelector( ".saves-value" ).textContent );
        TEST.ASSERT.equal( _row.querySelector( ".saves-cell[data-name='modifier']" ).textContent, ( "" + _modifier ), "La colonne Mod de " + _label + " devrait afficher le modificateur de " + _skill_data.characteristic + ", obtenu : " + _row.querySelector( ".saves-cell[data-name='modifier']" ).textContent );
        TEST.ASSERT.equal( _row.querySelector( ".saves-cell[data-name='level']" ).textContent, "" + _level, "La colonne Niv de " + _label + " devrait afficher le niveau (" + _level + "), obtenu : " + _row.querySelector( ".saves-cell[data-name='level']" ).textContent );
        let _row_onclick               = _row.getAttribute( "onclick" ) || "";
        TEST.ASSERT.ok( _row_onclick.indexOf( "event__show_information__skill_actions" ) !== -1, "La ligne " + _label + " devrait être cliquable vers la popup des actions de la compétence, obtenu : " + _row_onclick );
        TEST.ASSERT.ok( _row_onclick.indexOf( "'param__skill'" ) !== -1, "La ligne " + _label + " devrait passer la clé de la compétence au clic, obtenu : " + _row_onclick );
    }
    let _arcanes_row                   = _area.querySelector( ".saves-row[data-slot='skill__arcanes']" );
    TEST.ASSERT.notNull( _arcanes_row, "La ligne Arcanes devrait être rendue" );
    if ( _arcanes_row ) {
        _arcanes_row.click();
        let _overlay                   = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
        TEST.ASSERT.notNull( _overlay, "La popup des actions d'Arcanes devrait s'ouvrir au clic sur la ligne" );
        if ( _overlay ) {
            let _title                 = _overlay.querySelector( ".popup-title" );
            TEST.ASSERT.notNull( _title, "La popup des actions devrait afficher un titre" );
            if ( _title ) {
                TEST.ASSERT.equal( _title.textContent, "Arcanes", "Le titre de la popup ouverte depuis la ligne Arcanes devrait être Arcanes, obtenu : " + _title.textContent );
            }
            let _current_rank         = _overlay.querySelector( ".skill-current-rank" );
            TEST.ASSERT.notNull( _current_rank, "La popup devrait afficher le rang du personnage sur la compétence" );
            if ( _current_rank ) {
                TEST.ASSERT.equal( _current_rank.textContent, "Qualifié", "Le rang du personnage sur Arcanes devrait être Qualifié, obtenu : " + _current_rank.textContent );
            }
            CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": "skill_actions__arcanes" } );
            TEST.ASSERT.equal( _overlay.getAttribute( "data-current-phase" ), "HIDDEN_TO_STRING", "La popup des actions devrait être masquée après fermeture" );
        }
    }
} );
