"use strict";
/**
 * Scenario : SAUVEGARDES
 * Depart : feuille vide (TEST.RESET.sheet()). Race Elfe posee, classe Magicien
 * posee a niveau 1, onglet General ouvert.
 * 1. Colonne dediee des jets (grid-area save, colonne 1, sans titre) : en-tete
 *    Jet | Rang | Mod | Niv, 4 lignes Perception / Vigueur / Reflexes / Volonte.
 *    Chaque ligne porte la valeur du jet en premier, le badge de rang courant
 *    a son initiale (Magicien : Q, Q, Q, E ; clic sur la ligne = popup des
 *    maitrises avec la source de chaque rang), puis le modificateur de
 *    caracteristique et le niveau. Le jet complet vaut "niveau + modificateur
 *    de caracteristique + bonus de rang" (Q +2, E +4). Les valeurs affichees
 *    croisees avec le domaine : getSaveModifier de CHARACTER.Masteries et les
 *    modificateurs des caracteristiques.
 * 2. Passage de niveau : 4 prises de niveau (niveau 5) → retour au General,
 *    jets recalculés au niveau 5 (badge Reflexes encore Q, valeur
 *    5 + mod DEX + 2). Validation de "expertise en reflexes" dans l'onglet
 *    Passage de niveau → retour au General : badge Reflexes E et jet
 *    5 + mod DEX + 4, Vigueur et Volonte inchangés.
 */

TEST.RUNNER.register( "[SAUVEGARDES] Magicien 1 → colonne dédiée = 3 jets complets", function () {
    TEST.RESET.sheet();
    TEST_openRacePopup();
    return TEST.clickTab( "body > .popup", "Elfe" ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        return TEST_AjouterClasse( "Magicien" );
    } ).then( function () {
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.GeneralWindow.NAME );
    } ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _character                     = CONTROLLER.Character.current_character;
        TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
        if ( !_character ) {
            return;
        }
        TEST.ASSERT.notNull( _character.getClasses().getContentByUUID( "Magicien" ), "Pre-condition : Magicien posee" );
        if ( !_character.getClasses().getContentByUUID( "Magicien" ) ) {
            return;
        }
        let _pane                         = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.GeneralWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Général devrait exister" );
        if ( !_pane ) {
            return;
        }
        let _area                         = _pane.querySelector( ".jets-saves-block" );
        TEST.ASSERT.notNull( _area, "La colonne dédiée Jets de sauvegarde devrait être rendue (.jets-saves-block)" );
        if ( !_area ) {
            return;
        }
        let _area_for                     = _pane.querySelector( ".grid-area.area-FOR" );
        TEST.ASSERT.notNull( _area_for, "Pre-condition : la caractéristique FOR devrait être rendue (.area-FOR)" );
        if ( _area_for ) {
            let _area_rect                = _area.getBoundingClientRect();
            let _for_rect                 = _area_for.getBoundingClientRect();
            TEST.ASSERT.ok( _area_rect.left >= _for_rect.right, "La colonne Jets de sauvegarde devrait être à côté des caractéristiques (à droite de la pile FOR/DEX/CON...), obtenue : gauche " + _area_rect.left + " contre droite FOR " + _for_rect.right );
        }
        TEST.ASSERT.isNull( _area.querySelector( ".saves-title" ), "La colonne ne devrait plus porter de titre 'Jets de sauvegarde' (le libellé de chaque ligne suffit)" );
        let _separator                   = _area.querySelector( ".saves-separator" );
        TEST.ASSERT.notNull( _separator, "Une séparation titrée devrait séparer le jet de Perception des jets de sauvegarde (.saves-separator)" );
        if ( _separator ) {
            TEST.ASSERT.equal( _separator.textContent, "Jets de sauvegarde", "La séparation devrait être titrée Jets de sauvegarde, obtenu : " + _separator.textContent );
        }
        let _header                        = _area.querySelector( ".saves-header-row" );
        TEST.ASSERT.notNull( _header, "La ligne d'en-tête des colonnes de calcul devrait être rendue (.saves-header-row)" );
        if ( _header ) {
            let _header_cells              = _header.querySelectorAll( ".saves-cell" );
            TEST.ASSERT.equal( _header_cells.length, 4, "L'en-tête devrait annoncer les 4 colonnes de calcul, obtenu : " + _header_cells.length );
            TEST.ASSERT.equal( _header_cells[ 0 ].textContent, "Jet", "La 1re colonne devrait être Jet (la valeur à utiliser en premier), obtenu : " + _header_cells[ 0 ].textContent );
            TEST.ASSERT.equal( _header_cells[ 1 ].textContent, "Rang", "La 2e colonne devrait être Rang, obtenu : " + _header_cells[ 1 ].textContent );
            TEST.ASSERT.equal( _header_cells[ 2 ].textContent, "Mod", "La 3e colonne devrait être Mod, obtenu : " + _header_cells[ 2 ].textContent );
            TEST.ASSERT.equal( _header_cells[ 3 ].textContent, "Niv", "La 4e colonne devrait être Niv, obtenu : " + _header_cells[ 3 ].textContent );
        }
        let _rows                         = _area.querySelectorAll( ".saves-row[data-slot]" );
        TEST.ASSERT.equal( _rows.length, 4, "La colonne devrait rendre le jet de Perception et les 3 jets de sauvegarde, obtenu : " + _rows.length );
        TEST.ASSERT.equal( _rows[ 0 ].getAttribute( "data-slot" ), "perception", "La première ligne devrait être le jet de Perception, obtenu : " + _rows[ 0 ].getAttribute( "data-slot" ) );
        let _expected                     = {
            "perception"    : { "label": "Perception / Initiative", "rank": "Q", "bonus": 2, "characteristic": "SAG", "characteristic_label": "Sagesse" },
            "save__vigueur" : { "label": "Vigueur",  "rank": "Q", "bonus": 2, "characteristic": "CON", "characteristic_label": "Constitution" },
            "save__reflexes": { "label": "Réflexes", "rank": "Q", "bonus": 2, "characteristic": "DEX", "characteristic_label": "Dextérité" },
            "save__volonte" : { "label": "Volonté",  "rank": "E", "bonus": 4, "characteristic": "SAG", "characteristic_label": "Sagesse" }
        };
        let _level                        = _character.getLevel();
        for ( let _i = 0; _i < _rows.length; _i++ ) {
            let _slot                     = _rows[ _i ].getAttribute( "data-slot" );
            let _expected_save            = _expected[ _slot ];
            TEST.ASSERT.notNull( _expected_save, "Chaque ligne devrait porter un slot de sauvegarde connu, obtenu : " + _slot );
            if ( !_expected_save ) {
                return;
            }
            let _label                    = _rows[ _i ].querySelector( ".saves-label" );
            TEST.ASSERT.equal( _label.textContent, _expected_save.label, "Le libellé de " + _slot + " devrait être " + _expected_save.label + ", obtenu : " + _label.textContent );
            let _modifier                = _character.getCharacteristics().getContentByUUID( _expected_save.characteristic ).getModifierValue();
            let _value                    = _rows[ _i ].querySelector( ".saves-value" );
            let _badge                    = _rows[ _i ].querySelector( ".saves-rank" );
            let _modifier_cell            = _rows[ _i ].querySelector( ".saves-cell[data-name='modifier']" );
            let _level_cell               = _rows[ _i ].querySelector( ".saves-cell[data-name='level']" );
            TEST.ASSERT.notNull( _value, "La colonne Jet devrait être rendue pour " + _slot );
            TEST.ASSERT.notNull( _badge, "La colonne Rang devrait être rendue pour " + _slot );
            TEST.ASSERT.notNull( _modifier_cell, "La colonne Mod devrait être rendue pour " + _slot );
            TEST.ASSERT.notNull( _level_cell, "La colonne Niv devrait être rendue pour " + _slot );
            if ( !_value || !_badge || !_modifier_cell || !_level_cell ) {
                return;
            }
            let _row_onclick                = _rows[ _i ].getAttribute( "onclick" ) || "";
            TEST.ASSERT.ok( _row_onclick.indexOf( "event__show_information__masteries" ) !== -1, "La ligne de " + _slot + " devrait être cliquable et ouvrir la popup des maîtrises (infos supplémentaires), obtenu : " + _row_onclick );
            TEST.ASSERT.isNull( _rows[ _i ].querySelector( ".saves-rank-bonus" ), "La ligne de " + _slot + " ne devrait pas afficher le bonus de rang en permanence (infos supplémentaires au clic seulement)" );
            let _value_rect               = _value.getBoundingClientRect();
            let _badge_rect               = _badge.getBoundingClientRect();
            let _modifier_rect            = _modifier_cell.getBoundingClientRect();
            let _level_rect               = _level_cell.getBoundingClientRect();
            TEST.ASSERT.ok( _value_rect.right <= _badge_rect.left, "La colonne Jet devrait venir en premier, à gauche du rang (" + _slot + "), obtenu : jet droite " + _value_rect.right + " contre rang gauche " + _badge_rect.left );
            TEST.ASSERT.ok( _badge_rect.right <= _modifier_rect.left, "La colonne Rang devrait venir avant Mod (" + _slot + "), obtenu : rang droite " + _badge_rect.right + " contre mod gauche " + _modifier_rect.left );
            TEST.ASSERT.ok( _modifier_rect.right <= _level_rect.left, "La colonne Mod devrait venir avant Niv, en dernier (" + _slot + "), obtenu : mod droite " + _modifier_rect.right + " contre niv gauche " + _level_rect.left );
            let _expected_value           = _character.getMasteries().getSaveModifier( MASTERY.SAVES[ _i ] );
            let _expected_from_character  = _level + _modifier + _expected_save.bonus;
            TEST.ASSERT.equal( _expected_value, _expected_from_character, "Le jet " + _slot + " du domaine devrait valoir niveau + modificateur + bonus de rang (" + _expected_from_character + "), obtenu : " + _expected_value );
            TEST.ASSERT.equal( _value.textContent, ( "" + _expected_value ), "La colonne Jet de " + _slot + " devrait afficher le jet complet " + ( "" + _expected_value ) + ", obtenu : " + _value.textContent );
            TEST.ASSERT.equal( _badge.textContent, _expected_save.rank, "La colonne Rang de " + _slot + " devrait afficher l'initiale du rang (" + _expected_save.rank + "), obtenu : " + _badge.textContent );
            TEST.ASSERT.equal( _modifier_cell.textContent, ( "" + _modifier ), "La colonne Mod de " + _slot + " devrait afficher le modificateur seul (" + _modifier + "), obtenu : " + _modifier_cell.textContent );
            TEST.ASSERT.ok( ( _modifier_cell.getAttribute( "title" ) || "" ).indexOf( _expected_save.characteristic_label ) !== -1, "La colonne Mod de " + _slot + " devrait nommer sa caractéristique dans l'infobulle, obtenu : " + _modifier_cell.getAttribute( "title" ) );
            TEST.ASSERT.equal( _level_cell.textContent, "" + _level, "La colonne Niv de " + _slot + " devrait afficher le niveau du personnage (" + _level + "), obtenu : " + _level_cell.textContent );
            let _next_row                 = _rows[ _i + 1 ];
            if ( _next_row ) {
                let _next_level_rect      = _next_row.querySelector( ".saves-cell[data-name='level']" ).getBoundingClientRect();
                let _next_badge_rect      = _next_row.querySelector( ".saves-rank" ).getBoundingClientRect();
                TEST.ASSERT.ok( Math.abs( _level_rect.left - _next_level_rect.left ) < 2 && Math.abs( _badge_rect.left - _next_badge_rect.left ) < 2, "Les colonnes devraient être alignées entre les lignes (" + _slot + "), obtenu : niv gauche " + _level_rect.left + "/" + _next_level_rect.left + " et rang gauche " + _badge_rect.left + "/" + _next_badge_rect.left );
            }
        }
        let _badge_trained                = _area.querySelector( ".saves-row[data-slot='save__vigueur'] .saves-rank" );
        let _badge_expert                 = _area.querySelector( ".saves-row[data-slot='save__volonte'] .saves-rank" );
        TEST.ASSERT.ok( getComputedStyle( _badge_trained ).backgroundImage.indexOf( "42, 74, 42" ) !== -1, "Le badge Qualifié devrait porter le fond vert entraîné (#2a4a2a), obtenu : " + getComputedStyle( _badge_trained ).backgroundImage );
        TEST.ASSERT.ok( getComputedStyle( _badge_expert ).backgroundImage.indexOf( "42, 61, 90" ) !== -1, "Le badge Expert devrait porter le fond bleu expert (#2a3d5a), obtenu : " + getComputedStyle( _badge_expert ).backgroundImage );
        let _row_vigueur                  = _area.querySelector( ".saves-row[data-slot='save__vigueur']" );
        TEST.ASSERT.notNull( _row_vigueur, "La ligne Vigueur devrait être rendue pour le test du clic" );
        let _row_onclick                  = _row_vigueur.getAttribute( "onclick" ) || "";
        TEST.ASSERT.ok( _row_onclick.indexOf( "event__show_information__masteries" ) !== -1, "La ligne de jet devrait ouvrir la popup des maîtrises du personnage au clic, obtenu : " + _row_onclick );
        _row_vigueur.click();
        let _masteries_overlay            = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
        TEST.ASSERT.notNull( _masteries_overlay, "La popup des maîtrises du personnage devrait s'ouvrir au clic sur un badge de rang" );
        if ( _masteries_overlay ) {
            let _masteries_title          = _masteries_overlay.querySelector( ".popup-title" );
            TEST.ASSERT.notNull( _masteries_title, "La popup des maîtrises devrait afficher un titre" );
            if ( _masteries_title ) {
                TEST.ASSERT.equal( _masteries_title.textContent, "Maîtrises", "Le titre de la popup ouverte depuis un badge devrait être Maîtrises, obtenu : " + _masteries_title.textContent );
            }
            let _masteries_descs          = _masteries_overlay.querySelectorAll( ".class-mastery-row .class-mastery-desc" );
            let _has_vigueur              = false;
            let _vigueur_row              = null;
            for ( let _i = 0; _i < _masteries_descs.length; _i++ ) {
                if ( _masteries_descs[ _i ].textContent === "Vigueur" ) {
                    _has_vigueur = true;
                    _vigueur_row = _masteries_descs[ _i ].parentNode;
                }
            }
            TEST.ASSERT.ok( _has_vigueur, "La popup ouverte depuis le badge Vigueur devrait lister la maîtrise Vigueur" );
            if ( _vigueur_row ) {
                let _vigueur_sources        = _vigueur_row.nextElementSibling;
                TEST.ASSERT.ok( _vigueur_sources && _vigueur_sources.classList.contains( "class-mastery-sources" ), "La ligne Vigueur devrait être suivie de ses sources (.class-mastery-sources)" );
                if ( _vigueur_sources ) {
                    TEST.ASSERT.ok( _vigueur_sources.textContent.indexOf( "Magicien" ) !== -1 && _vigueur_sources.textContent.indexOf( "maîtrises initiales" ) !== -1, "Les sources de Vigueur devraient nommer le bloc maîtrises initiales du Magicien, obtenu : " + _vigueur_sources.textContent );
                }
            }
            CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": "character__masteries" } );
            TEST.ASSERT.equal( _masteries_overlay.getAttribute( "data-current-phase" ), "HIDDEN_TO_STRING", "La popup des maîtrises devrait être masquée après fermeture" );
        }
    } );
} );

TEST.RUNNER.register( "[SAUVEGARDES] niveau 5 + expertise validée → jet Réflexes recalculé", function () {
    let _character                        = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    TEST.ASSERT.equal( _character.getLevel(), 1, "Pre-condition : Magicien niveau 1, obtenu : " + _character.getLevel() );
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
        for ( let _take = 0; _take < 4; _take++ ) {
            let _take_button             = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .levelup-class-option[data-name='Magicien'] .levelup-class-option-take" );
            TEST.ASSERT.notNull( _take_button, "Le plus de prise de niveau devrait etre rendu (iteration " + _take + ")" );
            if ( !_take_button ) {
                return null;
            }
            _take_button.click();
        }
        return TEST.wait();
    } ).then( function ( to_skip ) {
        if ( to_skip === null ) {
            return;
        }
        TEST.ASSERT.equal( _character.getLevel(), 5, "Le Magicien devrait etre niveau 5, obtenu : " + _character.getLevel() );
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.GeneralWindow.NAME ).then( function () {
            return TEST.wait();
        } ).then( function () {
            let _pane                 = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.GeneralWindow.NAME + "']" );
            let _reflexes_row         = _pane.querySelector( ".jets-saves-block .saves-row[data-slot='save__reflexes']" );
            TEST.ASSERT.notNull( _reflexes_row, "La ligne Réflexes devrait rester rendue au niveau 5" );
            let _mod_dex              = _character.getCharacteristics().getContentByUUID( "DEX" ).getModifierValue();
            TEST.ASSERT.equal( _reflexes_row.querySelector( ".saves-rank" ).textContent, "Q", "Le badge Réflexes devrait encore être Q (Qualifié) avant validation d'expertise en réflexes, obtenu : " + _reflexes_row.querySelector( ".saves-rank" ).textContent );
            let _expected_level_5     = 5 + _mod_dex + 2;
            TEST.ASSERT.equal( _reflexes_row.querySelector( ".saves-value" ).textContent, "" + _expected_level_5, "Le jet Réflexes devrait être recalculé au niveau 5 (5 + mod DEX + 2 = " + _expected_level_5 + "), obtenu : " + _reflexes_row.querySelector( ".saves-value" ).textContent );
            return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
                let _expertise_row   = null;
                let _rows            = document.querySelectorAll( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .levelup-block[data-level-name] .levelup-row" );
                for ( let _i = 0; _i < _rows.length; _i++ ) {
                    let _label       = _rows[ _i ].querySelector( ".levelup-row-label" );
                    if ( _label && _label.textContent === "expertise en réflexes" ) {
                        _expertise_row = _rows[ _i ];
                        break;
                    }
                }
                TEST.ASSERT.notNull( _expertise_row, "La ligne expertise en réflexes devrait etre rendue au niveau 5" );
                if ( !_expertise_row ) {
                    return null;
                }
                let _toggle         = _expertise_row.querySelector( ".levelup-row-toggle" );
                TEST.ASSERT.notNull( _toggle, "La ligne expertise en réflexes devrait porter son interrupteur" );
                if ( !_toggle ) {
                    return null;
                }
                _toggle.click();
                return TEST.wait();
            } ).then( function ( to_skip_toggle ) {
                if ( to_skip_toggle === null ) {
                    return;
                }
                return TEST.clickTab( ".character-sheet-windows", CHARACTER.GeneralWindow.NAME ).then( function () {
                    return TEST.wait();
                } ).then( function () {
                    let _pane_after      = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.GeneralWindow.NAME + "']" );
                    let _reflexes_after  = _pane_after.querySelector( ".jets-saves-block .saves-row[data-slot='save__reflexes']" );
                    let _mod_dex         = _character.getCharacteristics().getContentByUUID( "DEX" ).getModifierValue();
                    let _expected_expert = 5 + _mod_dex + 4;
                    TEST.ASSERT.equal( _reflexes_after.querySelector( ".saves-rank" ).textContent, "E", "Le badge Réflexes devrait être E (Expert) après validation d'expertise en réflexes, obtenu : " + _reflexes_after.querySelector( ".saves-rank" ).textContent );
                    TEST.ASSERT.equal( _reflexes_after.querySelector( ".saves-value" ).textContent, "" + _expected_expert, "Le jet Réflexes devrait valoir 5 + mod DEX + 4 = " + _expected_expert + ", obtenu : " + _reflexes_after.querySelector( ".saves-value" ).textContent );
                    let _vigueur_after   = _pane_after.querySelector( ".jets-saves-block .saves-row[data-slot='save__vigueur']" );
                    let _mod_con         = _character.getCharacteristics().getContentByUUID( "CON" ).getModifierValue();
                    TEST.ASSERT.equal( _vigueur_after.querySelector( ".saves-value" ).textContent, "" + ( 5 + _mod_con + 2 ), "Le jet Vigueur ne devrait pas bouger (vigueur magique au niveau 9), obtenu : " + _vigueur_after.querySelector( ".saves-value" ).textContent );
                    let _volonte_after   = _pane_after.querySelector( ".jets-saves-block .saves-row[data-slot='save__volonte']" );
                    let _mod_sag         = _character.getCharacteristics().getContentByUUID( "SAG" ).getModifierValue();
                    TEST.ASSERT.equal( _volonte_after.querySelector( ".saves-rank" ).textContent, "E", "Le badge Volonté devrait rester E (Expert), obtenu : " + _volonte_after.querySelector( ".saves-rank" ).textContent );
                    TEST.ASSERT.equal( _volonte_after.querySelector( ".saves-value" ).textContent, "" + ( 5 + _mod_sag + 4 ), "Le jet Volonté devrait valoir 5 + mod SAG + 4, obtenu : " + _volonte_after.querySelector( ".saves-value" ).textContent );
                    _reflexes_after.click();
                    let _sources_overlay  = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
                    TEST.ASSERT.notNull( _sources_overlay, "La popup des maîtrises devrait s'ouvrir au clic sur la ligne Réflexes" );
                    if ( !_sources_overlay ) {
                        return;
                    }
                    let _sources_descs    = _sources_overlay.querySelectorAll( ".class-mastery-row .class-mastery-desc" );
                    let _reflexes_row    = null;
                    for ( let _i = 0; _i < _sources_descs.length; _i++ ) {
                        if ( _sources_descs[ _i ].textContent === "Réflexes" ) {
                            _reflexes_row = _sources_descs[ _i ].parentNode;
                        }
                    }
                    TEST.ASSERT.notNull( _reflexes_row, "La popup devrait afficher la ligne Réflexes" );
                    if ( _reflexes_row ) {
                        let _reflexes_sources = _reflexes_row.nextElementSibling;
                        TEST.ASSERT.ok( _reflexes_sources && _reflexes_sources.classList.contains( "class-mastery-sources" ), "La ligne Réflexes devrait être suivie de ses sources" );
                        if ( _reflexes_sources ) {
                            TEST.ASSERT.ok( _reflexes_sources.textContent.indexOf( "expertise en réflexes (niveau 5)" ) !== -1, "Les sources de Réflexes devraient nommer la capacité validée expertise en réflexes (niveau 5), obtenu : " + _reflexes_sources.textContent );
                        }
                    }
                    CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": "character__masteries" } );
                    TEST.ASSERT.equal( _sources_overlay.getAttribute( "data-current-phase" ), "HIDDEN_TO_STRING", "La popup des maîtrises devrait être masquée après fermeture" );
                } );
            } );
        } );
    } );
} );
