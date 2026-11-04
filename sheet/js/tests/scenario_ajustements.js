"use strict";
/**
 * [AJUSTEMENTS] parcours indépendant (RESET, Elfe) : l'onglet Ajustements
 * est le point neutre d'édition du personnage — une section par catégorie,
 * chaque entrée porte sa valeur et son explication libre, le reste de la
 * feuille reste lecture.
 *  1. L'onglet rend ses 6 sections (langues, sens, vitesse, dons, maîtrises,
 *     notes), chacune avec sa ligne d'ajout (valeur + explication).
 *  2. Ajouter la langue "Céleste" (source "Épreuve du pont") : l'entrée
 *     apparaît avec son explication (modifiable sur place), le save la
 *     porte, la zone du Général l'affiche en lecture seule. Le retrait la
 *     fait disparaitre.
 *  3. Entrée sur le filtre : le sélecteur valide la valeur (nom exact ou
 *     texte inconnu comme valeur), RIEN n'est créé — le + seul crée,
 *     l'explication s'écrit entre les deux.
 *  4. Save → load : les ajustements sont restaurés (valeur, explication).
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
            // La valeur se choisit dans un sélecteur quand une liste existe,
            // en champ libre sinon ; l'explication reste toujours libre
            let _expected_selectors     = ( _kind_data.value_picker === "input" ) ? 0 : 1;
            TEST.ASSERT.equal( _section.querySelectorAll( ".single-select-container" ).length, _expected_selectors, "La section " + _kind_data.key + " devrait porter " + _expected_selectors + " sélecteur de valeur, obtenu : " + _section.querySelectorAll( ".single-select-container" ).length );
            let _expected_inputs        = ( _kind_data.value_picker === "input" ) ? 2 : ( _kind_data.value_picker === "speed" ? 2 : 1 );
            TEST.ASSERT.equal( _section.querySelectorAll( ".adjustments-add-input" ).length, _expected_inputs, "La section " + _kind_data.key + " devrait porter " + _expected_inputs + " champ(s) libre(s), obtenu : " + _section.querySelectorAll( ".adjustments-add-input" ).length );
            TEST.ASSERT.notNull( _section.querySelector( ".adjustments-add-button" ), "La section " + _kind_data.key + " devrait porter son bouton d'ajout" );
        }
        // Les sélecteurs portent les listes du domaine
        let _known_languages_count         = RACES.getKnownLanguages().length;
        let _language_options              = _pane.querySelectorAll( ".adjustments-section[data-kind='language'] .single-select-option" );
        TEST.ASSERT.equal( _language_options.length, 1 + _known_languages_count, "Le sélecteur de langues devrait proposer l'option vide + les langues connues des donnees, obtenu : " + _language_options.length );
        let _feat_options               = _pane.querySelectorAll( ".adjustments-section[data-kind='feat'] .single-select-option" );
        TEST.ASSERT.equal( _feat_options.length, 1 + DON.getKnownFeats().length, "Le sélecteur de dons devrait proposer l'option vide + les dons connus, obtenu : " + _feat_options.length );
        let _speed_options               = _pane.querySelectorAll( ".adjustments-section[data-kind='speed'] .single-select-option" );
        TEST.ASSERT.equal( _speed_options.length, 1 + ADJUSTMENT.SPEED_MODES.length, "Le sélecteur de vitesse devrait proposer l'option vide + les modes, obtenu : " + _speed_options.length );
        // Tout sélecteur porte sa ligne de filtre (pattern shinken-list)
        let _filter_input                = _pane.querySelector( ".adjustments-section[data-kind='language'] .single-select-filter" );
        TEST.ASSERT.notNull( _filter_input, "La liste ouverte du sélecteur de langues devrait porter sa ligne de filtre" );
        if ( !_filter_input ) {
            return;
        }
        _filter_input.value               = "dracon";
        COMPONENT.SingleSelectFromData.filterOptions( { target: _filter_input } );
        let _all_options                  = _pane.querySelectorAll( ".adjustments-section[data-kind='language'] .single-select-option" );
        let _visible_count                = 0;
        for ( let _i = 0, _size_i = _all_options.length; _i < _size_i; _i++ ) {
            if ( getComputedStyle( _all_options[ _i ] ).display !== "none" ) {
                _visible_count++;
            }
        }
        let _expected_matching            = 1;
        for ( let _i = 0, _size_i = _known_languages_count; _i < _size_i; _i++ ) {
            if ( RACES.getKnownLanguages()[ _i ].name.toLowerCase().indexOf( "dracon" ) !== -1 ) {
                _expected_matching++;
            }
        }
        TEST.ASSERT.equal( _visible_count, _expected_matching, "Le filtre 'dracon' ne devrait laisser visibles que l'option vide + les langues matchant, obtenu : " + _visible_count );
        _filter_input.value               = "";
        COMPONENT.SingleSelectFromData.filterOptions( { target: _filter_input } );
        let _visible_after_clear          = 0;
        for ( let _i = 0, _size_i = _all_options.length; _i < _size_i; _i++ ) {
            if ( getComputedStyle( _all_options[ _i ] ).display !== "none" ) {
                _visible_after_clear++;
            }
        }
        TEST.ASSERT.equal( _visible_after_clear, _all_options.length, "Vider le filtre devrait réafficher toutes les options, obtenu : " + _visible_after_clear + " sur " + _all_options.length );
        // L'ouverture du sélecteur pose le focus sur la ligne de filtre :
        // le clavier pilote la liste dès le clic sur le header
        let _selector_header          = _pane.querySelector( ".adjustments-section[data-kind='language'] .single-select-selector" );
        TEST.ASSERT.notNull( _selector_header, "Pre-condition : header du sélecteur de langues rendu" );
        if ( _selector_header ) {
            _selector_header.click();
            let _selector_container   = _pane.querySelector( ".adjustments-section[data-kind='language'] .single-select-container" );
            TEST.ASSERT.equal( _selector_container.getAttribute( "data-state-selector" ), "1", "Le clic sur le header devrait ouvrir la liste du sélecteur, obtenu : " + _selector_container.getAttribute( "data-state-selector" ) );
            TEST.ASSERT.ok( document.activeElement && document.activeElement.classList.contains( "single-select-filter" ), "La ligne de filtre devrait prendre le focus à l'ouverture du sélecteur, obtenu : " + ( document.activeElement ? document.activeElement.className : "aucun" ) );
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
    // Le parcours réel : choisir dans le sélecteur une langue CONNUE des
    // donnees (la premiere hors langues de base d'Elfe), le choix attend le
    // +, remplir l'explication libre, puis cliquer le bouton
    let _base_languages                 = _character.getRace().language;
    let _target_language                = null;
    let _known_languages                = RACES.getKnownLanguages();
    for ( let _i = 0, _size_i = _known_languages.length; _i < _size_i; _i++ ) {
        if ( _base_languages.indexOf( _known_languages[ _i ].name ) === -1 ) {
            _target_language            = _known_languages[ _i ].name;
            break;
        }
    }
    TEST.ASSERT.notNull( _target_language, "Les donnees devraient proposer une langue connue hors base d'Elfe" );
    if ( !_target_language ) {
        return;
    }
    let _language_option                = _section.querySelector( ".single-select-option[data-value='" + _target_language + "']" );
    TEST.ASSERT.notNull( _language_option, "Le sélecteur de langues devrait proposer " + _target_language + " (langue connue des donnees)" );
    if ( !_language_option ) {
        return;
    }
    _language_option.click();
    return TEST.wait().then( function () {
        let _selector_label             = _section.querySelector( ".single-select-selector-label" );
        TEST.ASSERT.equal( _selector_label.textContent, _target_language, "Le sélecteur devrait afficher le choix en attente, obtenu : [" + _selector_label.textContent + "]" );
        let _explanation_input          = _section.querySelector( '[data-name="adjustment-explanation"]' );
        TEST.ASSERT.notNull( _explanation_input, "La section Langues devrait porter son champ d'explication libre" );
        if ( !_explanation_input ) {
            return;
        }
        _explanation_input.value        = "Épreuve du pont";
        _section.querySelector( ".adjustments-add-button" ).click();
        return TEST.wait().then( function () {
        let _section_after              = _pane.querySelector( ".adjustments-section[data-kind='language']" );
        let _entry                      = _section_after ? _section_after.querySelector( ".adjustments-entry[data-value='" + _target_language + "']" ) : null;
        TEST.ASSERT.notNull( _entry, "La langue ajoutée devrait etre rendue dans sa section" );
        if ( !_entry ) {
            return;
        }
        let _entry_explanation           = _entry.querySelector( ".adjustments-entry-explanation" );
        TEST.ASSERT.equal( _entry_explanation.value, "Épreuve du pont", "L'entrée devrait porter son explication libre (input de l'entrée), obtenu : [" + _entry_explanation.value + "]" );
        let _saved                      = _character.getDataToSave();
        TEST.ASSERT.isArray( _saved.adjustments, "La sauvegarde devrait contenir adjustments" );
        if ( !_saved.adjustments ) {
            return;
        }
        TEST.ASSERT.ok( _saved.adjustments.length === 1 && _saved.adjustments[ 0 ].kind === "language" && _saved.adjustments[ 0 ].value === _target_language && _saved.adjustments[ 0 ].explanation === "Épreuve du pont", "L'ajustement devrait etre sauvegardé (kind, value, explanation), obtenu : " + JSON.stringify( _saved.adjustments ) );
        // La zone du Général consomme l'ajustement, en lecture seule
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.GeneralWindow.NAME ).then( function () {
            return TEST.wait();
        } ).then( function () {
            let _general_pane           = document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.GeneralWindow.NAME + "']" );
            TEST.ASSERT.notNull( _general_pane, "Pre-condition : panneau Général ouvert" );
            if ( !_general_pane ) {
                return;
            }
            let _language_entry         = TEST_ancestryInfoEntry( _general_pane, _target_language );
            TEST.ASSERT.notNull( _language_entry, "La langue ajoutée dans Ajustements devrait etre affichée dans la liste Langues du Général" );
            if ( _language_entry ) {
                TEST.ASSERT.isNull( _language_entry.querySelector( ".ancestry-list-remove" ), "L'entrée du Général ne devrait pas etre retirable (lecture seule), obtenu : bouton rendu" );
            }
            TEST.ASSERT.notNull( TEST_ancestryInfoEntry( _general_pane, "Commun" ), "Les langues de base devraient rester affichées" );
            return TEST.clickTab( ".character-sheet-windows", CHARACTER.AdjustmentsWindow.NAME );
        } ).then( function () {
            return TEST.wait();
        } ).then( function () {
            let _entry_to_remove        = _pane.querySelector( ".adjustments-section[data-kind='language'] .adjustments-entry[data-value='" + _target_language + "'] .adjustments-entry-remove" );
            TEST.ASSERT.notNull( _entry_to_remove, "Pre-condition : bouton de retrait de la langue rendu" );
            if ( !_entry_to_remove ) {
                return;
            }
            _entry_to_remove.click();
            return TEST.wait();
        } ).then( function () {
            TEST.ASSERT.isNull( _pane.querySelector( ".adjustments-section[data-kind='language'] .adjustments-entry[data-value='" + _target_language + "']" ), "L'entrée devrait etre retiree apres le clic sur son bouton de retrait" );
            TEST.ASSERT.equal( _character.getAdjustments().getValuesByKind( "language" ).length, 0, "Le retrait devrait vider les ajustements de langue, obtenu : " + _character.getAdjustments().getValuesByKind( "language" ).length );
            // Entrée sur le filtre avec nom EXACT : la valeur se pose en
            // attente sur le sélecteur, l'Entrée ne crée RIEN (le + seul
            // crée), l'explication s'écrit entre les deux
            let _enter_section            = _pane.querySelector( ".adjustments-section[data-kind='language']" );
            let _enter_filter             = _enter_section.querySelector( ".single-select-filter" );
            _enter_filter.value           = _target_language;
            _enter_filter.dispatchEvent( new KeyboardEvent( "keydown", { "key": "Enter" } ) );
            return TEST.wait().then( function () {
                let _entered_section      = _pane.querySelector( ".adjustments-section[data-kind='language']" );
                TEST.ASSERT.isNull( _entered_section.querySelector( ".adjustments-entry[data-value='" + _target_language + "']" ), "L'Entrée sur le filtre ne devrait pas creer l'entree : seul le bouton + cree, obtenu : entree rendue" );
                TEST.ASSERT.equal( _entered_section.querySelector( ".single-select-selector-label" ).textContent, _target_language, "Le sélecteur devrait afficher la langue exacte validée par l'Entrée (valeur en attente), obtenu : [" + _entered_section.querySelector( ".single-select-selector-label" ).textContent + "]" );
                let _enter_explanation     = _entered_section.querySelector( '[data-name="adjustment-explanation"]' );
                _enter_explanation.value   = "Manuel de campagne";
                _entered_section.querySelector( ".adjustments-add-button" ).click();
                return TEST.wait();
            } ).then( function () {
                let _entered_section      = _pane.querySelector( ".adjustments-section[data-kind='language']" );
                let _entered_entry        = _entered_section.querySelector( ".adjustments-entry[data-value='" + _target_language + "']" );
                TEST.ASSERT.notNull( _entered_entry, "Le + devrait creer l'entree validée par l'Entrée" );
                if ( _entered_entry ) {
                    let _entered_explanation = _entered_entry.querySelector( ".adjustments-entry-explanation" );
                    TEST.ASSERT.equal( _entered_explanation.value, "Manuel de campagne", "L'entree validée par Entrée devrait porter son explication libre, obtenu : [" + _entered_explanation.value + "]" );
                }
                TEST.ASSERT.ok( _character.getAdjustments().getValuesByKind( "language" ).length === 1, "L'Entrée puis le + devraient creer l'ajustement, obtenu : " + _character.getAdjustments().getValuesByKind( "language" ).length );
                // L'explication reste modifiable sur l'entrée créée
                let _edited_explanation   = _entered_section.querySelector( ".adjustments-entry[data-value='" + _target_language + "'] .adjustments-entry-explanation" );
                _edited_explanation.value = "Erratum du pont";
                _edited_explanation.dispatchEvent( new Event( "change" ) );
                TEST.ASSERT.equal( _character.getAdjustments().getContentByUUID( "language__" + _target_language ).explanation, "Erratum du pont", "L'explication de l'entrée devrait etre modifiable après creation, obtenu : " + _character.getAdjustments().getContentByUUID( "language__" + _target_language ).explanation );
                // Entrée avec un nom INCONNU : le texte du filtre devient la
                // valeur en attente, le + la crée comme si elle existait
                let _unknown_section      = _pane.querySelector( ".adjustments-section[data-kind='language']" );
                let _unknown_filter       = _unknown_section.querySelector( ".single-select-filter" );
                _unknown_filter.value     = "Quenya";
                _unknown_filter.dispatchEvent( new KeyboardEvent( "keydown", { "key": "Enter" } ) );
                return TEST.wait();
            } ).then( function () {
                let _unknown_section      = _pane.querySelector( ".adjustments-section[data-kind='language']" );
                TEST.ASSERT.isNull( _unknown_section.querySelector( ".adjustments-entry[data-value='Quenya']" ), "L'Entrée sur nom inconnu ne devrait pas creer l'entree non plus, obtenu : entree rendue" );
                TEST.ASSERT.equal( _unknown_section.querySelector( ".single-select-selector-label" ).textContent, "Quenya", "Le sélecteur devrait afficher le nom inconnu comme valeur en attente, obtenu : [" + _unknown_section.querySelector( ".single-select-selector-label" ).textContent + "]" );
                let _unknown_add_explanation = _unknown_section.querySelector( '[data-name="adjustment-explanation"]' );
                _unknown_add_explanation.value = "Langue maison";
                _unknown_section.querySelector( ".adjustments-add-button" ).click();
                return TEST.wait();
            } ).then( function () {
                let _unknown_entry        = _pane.querySelector( ".adjustments-section[data-kind='language'] .adjustments-entry[data-value='Quenya']" );
                TEST.ASSERT.notNull( _unknown_entry, "Le + devrait creer l'entree de la valeur inconnue (comme si elle existait)" );
                if ( _unknown_entry ) {
                    let _unknown_explanation = _unknown_entry.querySelector( ".adjustments-entry-explanation" );
                    TEST.ASSERT.equal( _unknown_explanation.value, "Langue maison", "L'entree inconnue devrait porter son explication, obtenu : [" + _unknown_explanation.value + "]" );
                }
                // nettoyage pour le test SAVE (aucun ajustement) : le re-rendu
                // invalide les elements captures, un retrait par pas de temps
                let _remove_1            = _pane.querySelector( ".adjustments-section[data-kind='language'] .adjustments-entry[data-value='" + _target_language + "'] .adjustments-entry-remove" );
                if ( _remove_1 ) {
                    _remove_1.click();
                }
                return TEST.wait().then( function () {
                    let _remove_2        = _pane.querySelector( ".adjustments-section[data-kind='language'] .adjustments-entry[data-value='Quenya'] .adjustments-entry-remove" );
                    if ( _remove_2 ) {
                        _remove_2.click();
                    }
                    return TEST.wait();
                } ).then( function () {
                    TEST.ASSERT.equal( _character.getAdjustments().getSize(), 0, "Nettoyage : aucun ajustement ne devrait rester pour le test suivant, obtenu : " + _character.getAdjustments().getSize() );
                } );
            } );
            } );
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
    let _saved_language                 = RACES.getKnownLanguages()[ 0 ].name;
    _character.getAdjustments().addAdjustment( "sense", "Perception aveugle", "Manuel des sens" );
    _character.getAdjustments().addAdjustment( "language", _saved_language, "Épreuve du pont" );
    _saved                              = _character.getDataToSave();
    let _reloaded                       = new CHARACTER.Current();
    _reloaded.updateData( _saved );
    _reloaded.doActionAfter( "event__data_loaded__done", { "param__current_character__object": _reloaded } );
    let _reloaded_adjustments           = _reloaded.getAdjustments();
    TEST.ASSERT.equal( _reloaded_adjustments.getSize(), 2, "La relecture devrait restaurer les deux ajustements, obtenu : " + _reloaded_adjustments.getSize() );
    TEST.ASSERT.ok( _reloaded_adjustments.getContentByUUID( "sense__Perception aveugle" ) !== null, "Le sens devrait etre restaure par son uuid" );
    TEST.ASSERT.ok( _reloaded_adjustments.getContentByUUID( "language__" + _saved_language ) !== null, "La langue devrait etre restauree par son uuid" );
    let _reloaded_sense                 = _reloaded_adjustments.getContentByUUID( "sense__Perception aveugle" );
    if ( _reloaded_sense ) {
        TEST.ASSERT.equal( _reloaded_sense.explanation, "Manuel des sens", "L'explication libre devrait survivre a la relecture, obtenu : " + _reloaded_sense.explanation );
    }
} );
