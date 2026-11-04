"use strict";
/**
 * [AJUSTEMENTS] parcours indépendant (RESET, Elfe) : l'onglet Ajustements
 * est le point neutre d'édition du personnage — une section par catégorie,
 * chaque entrée porte sa valeur et son explication libre, le reste de la
 * feuille reste lecture.
 *  1. L'onglet rend ses 6 sections (langues, sens, vitesse, dons, maîtrises,
 *     notes), chacune avec sa ligne d'ajout (valeur + explication).
 *  2. Ajouter la langue "Céleste" (source "Épreuve du pont") : l'entrée
 *     apparaît avec son explication, le save la porte, la zone du Général
 *     l'affiche en lecture seule. Le retrait la fait disparaitre.
 *  3. Save → load : les ajustements sont restaurés (valeur, explication).
 */
TEST.RUNNER.register( "[AJUSTEMENTS] onglet = 6 sections avec leurs lignes d'ajout", function () {
    TEST.RESET.sheet();
    TEST_openRacePopup();
    return TEST.clickTab( "body > .popup", "Elfe" ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.AdjustmentsWindow.NAME );
    } ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _pane                        = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.AdjustmentsWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Ajustements devrait exister" );
        if ( !_pane ) {
            return;
        }
        let _sections                   = _pane.querySelectorAll( ".adjustments-section" );
        TEST.ASSERT.equal( _sections.length, ADJUSTMENT.KINDS.length, "L'onglet devrait rendre une section par catégorie (" + ADJUSTMENT.KINDS.length + "), obtenu : " + _sections.length );
        for ( let _i = 0, _size_i = ADJUSTMENT.KINDS.length; _i < _size_i; _i++ ) {
            let _kind_data              = ADJUSTMENT.KINDS[ _i ];
            let _section                = _pane.querySelector( ".adjustments-section[data-kind='" + _kind_data.key + "']" );
            TEST.ASSERT.notNull( _section, "La section " + _kind_data.key + " devrait etre rendue" );
            if ( !_section ) {
                continue;
            }
            TEST.ASSERT.equal( _section.querySelector( ".adjustments-section-title" ).textContent, _kind_data.label, "Le titre de la section " + _kind_data.key + " devrait afficher " + _kind_data.label + ", obtenu : " + _section.querySelector( ".adjustments-section-title" ).textContent );
            TEST.ASSERT.equal( _section.querySelectorAll( ".adjustments-add-input" ).length, 2, "La section " + _kind_data.key + " devrait porter ses deux champs d'ajout (valeur + explication)" );
            TEST.ASSERT.notNull( _section.querySelector( ".adjustments-add-button" ), "La section " + _kind_data.key + " devrait porter son bouton d'ajout" );
        }
    } );
} );

TEST.RUNNER.register( "[AJUSTEMENTS] ajout langue = entrée + save + affichage Général, retrait = disparition", function () {
    let _character                      = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    let _pane                           = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.AdjustmentsWindow.NAME + "']" );
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Ajustements ouvert" );
    if ( !_pane ) {
        return;
    }
    let _section                        = _pane.querySelector( ".adjustments-section[data-kind='language']" );
    TEST.ASSERT.notNull( _section, "Pre-condition : section Langues rendue" );
    if ( !_section ) {
        return;
    }
    // Le parcours réel : remplir les champs puis cliquer le bouton
    let _inputs                         = _section.querySelectorAll( ".adjustments-add-input" );
    _inputs[ 0 ].value                  = "Céleste";
    _inputs[ 1 ].value                  = "Épreuve du pont";
    _section.querySelector( ".adjustments-add-button" ).click();
    return TEST.wait().then( function () {
        let _section_after              = _pane.querySelector( ".adjustments-section[data-kind='language']" );
        let _entry                      = _section_after ? _section_after.querySelector( ".adjustments-entry[data-value='Céleste']" ) : null;
        TEST.ASSERT.notNull( _entry, "La langue ajoutée devrait etre rendue dans sa section" );
        if ( !_entry ) {
            return;
        }
        TEST.ASSERT.ok( _entry.textContent.indexOf( "Épreuve du pont" ) !== -1, "L'entrée devrait porter son explication libre, obtenu : " + _entry.textContent );
        let _saved                      = _character.getDataToSave();
        TEST.ASSERT.isArray( _saved.adjustments, "La sauvegarde devrait contenir adjustments" );
        if ( !_saved.adjustments ) {
            return;
        }
        TEST.ASSERT.ok( _saved.adjustments.length === 1 && _saved.adjustments[ 0 ].kind === "language" && _saved.adjustments[ 0 ].value === "Céleste" && _saved.adjustments[ 0 ].explanation === "Épreuve du pont", "L'ajustement devrait etre sauvegardé (kind, value, explanation), obtenu : " + JSON.stringify( _saved.adjustments ) );
        // La zone du Général consomme l'ajustement, en lecture seule
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.GeneralWindow.NAME ).then( function () {
            return TEST.wait();
        } ).then( function () {
            let _general_pane           = document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.GeneralWindow.NAME + "']" );
            TEST.ASSERT.notNull( _general_pane, "Pre-condition : panneau Général ouvert" );
            if ( !_general_pane ) {
                return;
            }
            let _language_entry         = TEST_ancestryInfoEntry( _general_pane, "Céleste" );
            TEST.ASSERT.notNull( _language_entry, "La langue ajoutée dans Ajustements devrait etre affichée dans la liste Langues du Général" );
            if ( _language_entry ) {
                TEST.ASSERT.isNull( _language_entry.querySelector( ".ancestry-list-remove" ), "L'entrée du Général ne devrait pas etre retirable (lecture seule), obtenu : bouton rendu" );
            }
            TEST.ASSERT.notNull( TEST_ancestryInfoEntry( _general_pane, "Commun" ), "Les langues de base devraient rester affichées" );
            return TEST.clickTab( ".character-sheet-windows", CHARACTER.AdjustmentsWindow.NAME );
        } ).then( function () {
            return TEST.wait();
        } ).then( function () {
            let _entry_to_remove        = _pane.querySelector( ".adjustments-section[data-kind='language'] .adjustments-entry[data-value='Céleste'] .adjustments-entry-remove" );
            TEST.ASSERT.notNull( _entry_to_remove, "Pre-condition : bouton de retrait de la langue rendu" );
            if ( !_entry_to_remove ) {
                return;
            }
            _entry_to_remove.click();
            return TEST.wait();
        } ).then( function () {
            TEST.ASSERT.isNull( _pane.querySelector( ".adjustments-section[data-kind='language'] .adjustments-entry[data-value='Céleste']" ), "L'entrée devrait etre retiree apres le clic sur son bouton de retrait" );
            TEST.ASSERT.equal( _character.getAdjustments().getValuesByKind( "language" ).length, 0, "Le retrait devrait vider les ajustements de langue, obtenu : " + _character.getAdjustments().getValuesByKind( "language" ).length );
        } );
    } );
} );

TEST.RUNNER.register( "[AJUSTEMENTS][SAVE] save → load = ajustements restaurés", function () {
    let _character                      = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    let _saved                          = _character.getDataToSave();
    TEST.ASSERT.ok( _saved.adjustments && _saved.adjustments.length === 0, "Pre-condition : aucun ajustement en cours, obtenu : " + JSON.stringify( _saved.adjustments ) );
    _character.getAdjustments().addAdjustment( "sense", "Perception aveugle", "Manuel des sens" );
    _character.getAdjustments().addAdjustment( "language", "Céleste", "Épreuve du pont" );
    _saved                              = _character.getDataToSave();
    let _reloaded                       = new CHARACTER.Current();
    _reloaded.updateData( _saved );
    _reloaded.doActionAfter( "event__data_loaded__done", { "param__current_character__object": _reloaded } );
    let _reloaded_adjustments           = _reloaded.getAdjustments();
    TEST.ASSERT.equal( _reloaded_adjustments.getSize(), 2, "La relecture devrait restaurer les deux ajustements, obtenu : " + _reloaded_adjustments.getSize() );
    TEST.ASSERT.ok( _reloaded_adjustments.getContentByUUID( "sense__Perception aveugle" ) !== null, "Le sens devrait etre restaure par son uuid" );
    TEST.ASSERT.ok( _reloaded_adjustments.getContentByUUID( "language__Céleste" ) !== null, "La langue devrait etre restauree par son uuid" );
    let _reloaded_sense                 = _reloaded_adjustments.getContentByUUID( "sense__Perception aveugle" );
    if ( _reloaded_sense ) {
        TEST.ASSERT.equal( _reloaded_sense.explanation, "Manuel des sens", "L'explication libre devrait survivre a la relecture, obtenu : " + _reloaded_sense.explanation );
    }
} );
