"use strict";
/**
 * [AJUSTEMENTS] parcours indépendant (RESET, Elfe) : l'onglet Ajustements
 * est le point neutre d'édition du personnage — une section par catégorie,
 * chaque entrée porte sa valeur et son explication libre, le reste de la
 * feuille reste lecture.
 *  1. L'onglet rend ses sections (langues, connaissances, sens, vitesse,
 *     dons, maîtrises, bonus de caractéristique, notes), chacune avec sa
 *     ligne d'ajout (valeur + explication).
 *  2. Ajouter la langue "Céleste" (source "Épreuve du pont") : l'entrée
 *     apparaît avec son explication (modifiable sur place), le save la
 *     porte, la zone du Général l'affiche en lecture seule. Le retrait la
 *     fait disparaitre.
 *  3. Entrée sur le filtre : le sélecteur valide la valeur (nom exact ou
 *     texte inconnu comme valeur), RIEN n'est créé — le + seul crée,
 *     l'explication s'écrit entre les deux.
 *  4. Save → load : les ajustements sont restaurés (valeur, explication).
 */
TEST.RUNNER.register( "[AJUSTEMENTS] onglet = une section par catégorie avec sa ligne d'ajout", function () {
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
            let _expected_selectors     = ( _kind_data.value_picker === "input" ) ? 0 : ( _kind_data.value_picker === "mastery" ? 2 : 1 );
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
        let _lore_options                = _pane.querySelectorAll( ".adjustments-section[data-kind='lore'] .single-select-option" );
        TEST.ASSERT.equal( _lore_options.length, 1 + HISTORICS.getKnownLores().length, "Le sélecteur de connaissances devrait proposer l'option vide + les lores connus des historiques, obtenu : " + _lore_options.length );
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

TEST.RUNNER.register( "[AJUSTEMENTS] bonus de caractéristique par le sélecteur", function () {
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
    let _section                        = _pane.querySelector( ".adjustments-section[data-kind='characteristic_boost']" );
    TEST.ASSERT.notNull( _section, "La section Bonus de caractéristique devrait etre rendue" );
    if ( !_section ) {
        return;
    }
    // Le sélecteur propose les six caractéristiques par leur libellé
    let _options                        = _section.querySelectorAll( ".single-select-option" );
    TEST.ASSERT.equal( _options.length - 1, CHARACTERISTICS.ENUM.length, "Le sélecteur devrait proposer les " + CHARACTERISTICS.ENUM.length + " caractéristiques en plus de l'option vide, obtenu : " + ( _options.length - 1 ) );
    let _force_option                   = _section.querySelector( ".single-select-option[data-value='Force']" );
    TEST.ASSERT.notNull( _force_option, "Le sélecteur devrait proposer Force" );
    if ( !_force_option ) {
        return;
    }
    _force_option.click();
    return TEST.wait().then( function () {
        let _selector_label             = _section.querySelector( ".single-select-selector-label" );
        TEST.ASSERT.equal( _selector_label.textContent, "Force", "Le sélecteur devrait afficher Force en attente, obtenu : [" + _selector_label.textContent + "]" );
        let _explanation_input          = _section.querySelector( '[data-name="adjustment-explanation"]' );
        if ( !_explanation_input ) {
            return;
        }
        _explanation_input.value        = "Historique — Acolyte";
        _section.querySelector( ".adjustments-add-button" ).click();
        // L'ajout re-rend l'onglet : la lecture de l'entrée repart du panneau
        // frais, la reference de section est morte
        let _fresh_pane                 = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.AdjustmentsWindow.NAME + "']" );
        let _entry                      = _fresh_pane.querySelector( ".adjustments-section[data-kind='characteristic_boost'] .adjustments-entry[data-value='Force']" );
        TEST.ASSERT.notNull( _entry, "Le + devrait poser l'entrée Force, le boost du choix libre de l'historique" );
        let _saved                      = _character.getDataToSave();
        TEST.ASSERT.ok( _saved.adjustments && JSON.stringify( _saved.adjustments ).indexOf( "Force" ) !== -1, "La sauvegarde devrait porter le boost Force, obtenu : [" + JSON.stringify( _saved.adjustments ) + "]" );
        // Le retrait rend a la suite son etat : la langues qui suivent
        // attendent un onglet sans reste
        if ( _entry ) {
            _entry.querySelector( ".adjustments-entry-remove" ).click();
            TEST.ASSERT.equal( JSON.stringify( _character.getDataToSave().adjustments ).indexOf( "Force" ), -1, "Le retrait devrait retirer le boost de la sauvegarde" );
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

TEST.RUNNER.register( "[AJUSTEMENTS] ajout connaissance (lore) = entrée + affichage Général, retrait = disparition", function () {
    let _character                      = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    // Le lore cible est calculé des données (historique Criminel -> Pègre)
    let _target_lore                    = null;
    let _known_lores                    = HISTORICS.getKnownLores();
    for ( let _i = 0, _size_i = _known_lores.length; _i < _size_i; _i++ ) {
        if ( _known_lores[ _i ].name.toLowerCase().indexOf( "pègre" ) !== -1 ) {
            _target_lore                = _known_lores[ _i ].name;
            break;
        }
    }
    TEST.ASSERT.notNull( _target_lore, "Les données devraient proposer un lore de la Pègre, obtenu : " + JSON.stringify( _known_lores.slice( 0, 5 ) ) );
    if ( !_target_lore ) {
        return;
    }
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.AdjustmentsWindow.NAME ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _pane                       = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.AdjustmentsWindow.NAME + "']" );
        let _section                    = _pane.querySelector( ".adjustments-section[data-kind='lore']" );
        TEST.ASSERT.notNull( _section, "La section Connaissances devrait etre rendue" );
        if ( !_section ) {
            return;
        }
        let _option                     = _section.querySelector( ".single-select-option[data-value='" + _target_lore + "']" );
        TEST.ASSERT.notNull( _option, "Le sélecteur de connaissances devrait proposer " + _target_lore );
        if ( !_option ) {
            return;
        }
        _option.click();
        return TEST.wait().then( function () {
            _section.querySelector( '[data-name="adjustment-explanation"]' ).value = "Historique Criminel";
            _section.querySelector( ".adjustments-add-button" ).click();
            return TEST.wait();
        } ).then( function () {
            let _fresh_pane             = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.AdjustmentsWindow.NAME + "']" );
            let _entry                  = _fresh_pane.querySelector( ".adjustments-section[data-kind='lore'] .adjustments-entry[data-value='" + _target_lore + "']" );
            TEST.ASSERT.notNull( _entry, "Le lore ajouté devrait etre rendu dans sa section" );
            TEST.ASSERT.ok( _character.getAdjustments().getValuesByKind( "lore" ).indexOf( _target_lore ) !== -1, "Le lore devrait etre dans les ajustements du domaine, obtenu : " + JSON.stringify( _character.getAdjustments().getValuesByKind( "lore" ) ) );
            // La zone ancestry-info du Général affiche la liste Connaissances
            return TEST.clickTab( ".character-sheet-windows", CHARACTER.GeneralWindow.NAME ).then( function () {
                return TEST.wait();
            } ).then( function () {
                let _general_pane       = document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.GeneralWindow.NAME + "']" );
                TEST.ASSERT.notNull( _general_pane, "Pre-condition : panneau Général ouvert" );
                if ( !_general_pane ) {
                    return;
                }
                TEST.ASSERT.notNull( _general_pane.querySelector( ".area-ancestry-info .ancestry-info-property[data-name='lore']" ), "La zone ancestry-info devrait porter la liste Connaissances" );
                TEST.ASSERT.notNull( TEST_ancestryInfoEntry( _general_pane, _target_lore ), "Le lore devrait etre affiché dans la liste Connaissances du Général" );
                return TEST.clickTab( ".character-sheet-windows", CHARACTER.AdjustmentsWindow.NAME );
            } ).then( function () {
                return TEST.wait();
            } ).then( function () {
                let _fresh_pane_2       = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.AdjustmentsWindow.NAME + "']" );
                let _remove             = _fresh_pane_2.querySelector( ".adjustments-section[data-kind='lore'] .adjustments-entry[data-value='" + _target_lore + "'] .adjustments-entry-remove" );
                TEST.ASSERT.notNull( _remove, "Pre-condition : bouton de retrait du lore rendu" );
                if ( _remove ) {
                    _remove.click();
                }
                return TEST.wait();
            } ).then( function () {
                TEST.ASSERT.equal( _character.getAdjustments().getValuesByKind( "lore" ).length, 0, "Le retrait devrait vider les connaissances (nettoyage pour le test suivant), obtenu : " + _character.getAdjustments().getValuesByKind( "lore" ).length );
            } );
        } );
    } );
} );

TEST.RUNNER.register( "[AJUSTEMENTS] maîtrise manuelle = compétence + rang choisis, valeur assemblée, retrait", function () {
    let _character                      = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.AdjustmentsWindow.NAME ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _pane                       = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.AdjustmentsWindow.NAME + "']" );
        let _section                    = _pane.querySelector( ".adjustments-section[data-kind='mastery']" );
        TEST.ASSERT.notNull( _section, "La section Compétences devrait etre rendue" );
        if ( !_section ) {
            return;
        }
        let _containers                 = _section.querySelectorAll( ".single-select-container" );
        TEST.ASSERT.equal( _containers.length, 2, "La section Compétences devrait porter deux sélecteurs (compétence + rang), obtenu : " + _containers.length );
        TEST.ASSERT.equal( _section.querySelectorAll( ".single-select-option" ).length, 1 + 17 + 1 + ADJUSTMENT.MASTERY_RANKS.length, "Les deux sélecteurs devraient proposer option vide + 17 compétences + option vide + les rangs, obtenu : " + _section.querySelectorAll( ".single-select-option" ).length );
        let _skill_option               = _containers[ 0 ].querySelector( ".single-select-option[data-value='Arcanes']" );
        let _rank_option                = _containers[ 1 ].querySelector( ".single-select-option[data-value='Expert (E)']" );
        TEST.ASSERT.notNull( _skill_option, "Le sélecteur de compétence devrait proposer Arcanes" );
        TEST.ASSERT.notNull( _rank_option, "Le sélecteur de rang devrait proposer Expert (E), options : " + ( _containers[ 1 ] ? _containers[ 1 ].textContent.slice( 0, 120 ) : "aucun" ) );
        if ( !_skill_option || !_rank_option ) {
            return;
        }
        _skill_option.click();
        return TEST.wait().then( function () {
            _rank_option.click();
            return TEST.wait();
        } ).then( function () {
            let _fresh_section          = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.AdjustmentsWindow.NAME + "'] .adjustments-section[data-kind='mastery']" );
            _fresh_section.querySelector( '[data-name="adjustment-explanation"]' ).value = "Don de classe";
            _fresh_section.querySelector( ".adjustments-add-button" ).click();
            return TEST.wait();
        } ).then( function () {
            let _fresh2                 = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.AdjustmentsWindow.NAME + "']" );
            let _entry                  = _fresh2.querySelector( ".adjustments-section[data-kind='mastery'] .adjustments-entry[data-value='Arcanes — Expert (E)']" );
            TEST.ASSERT.notNull( _entry, "L'entrée devrait porter la valeur assemblée 'Arcanes — Expert (E)', obtained : " + ( _fresh2.querySelector( ".adjustments-section[data-kind='mastery'] .adjustments-entry" ) ? _fresh2.querySelector( ".adjustments-section[data-kind='mastery'] .adjustments-entry" ).getAttribute( "data-value" ) : "aucune entrée" ) );
            TEST.ASSERT.ok( _character.getAdjustments().getValuesByKind( "mastery" ).indexOf( "Arcanes — Expert (E)" ) !== -1, "La valeur assemblée devrait etre dans les ajustements du domaine, obtenu : " + JSON.stringify( _character.getAdjustments().getValuesByKind( "mastery" ) ) );
            // L'ajustement de compétence alimente la collecte des rangs :
            // la maitrise posée a la main vit au même titre qu'une maitrise de classe
            let _arcana_slot            = MASTERY.getSkillSlot( "Arcanes" );
            TEST.ASSERT.equal( _character.getMasteries().getFinalRank( _character, _arcana_slot ), "E", "La compétence posée en Ajustements devrait porter son rang dans l'agrégation, obtenu : " + _character.getMasteries().getFinalRank( _character, _arcana_slot ) );
            let _arcana_sources         = _character.getMasteries().getDataBySlot( _character )[ _arcana_slot ];
            TEST.ASSERT.ok( _arcana_sources && _arcana_sources.sources.indexOf( "Don de classe" ) !== -1, "La source de la maitrise manuelle devrait porter l'explication de l'ajustement, obtenu : " + JSON.stringify( _arcana_sources ) );
            let _saved                  = _character.getDataToSave();
            TEST.ASSERT.ok( _saved.adjustments && _saved.adjustments.some( function ( a ) { return a.kind === "mastery" && a.value === "Arcanes — Expert (E)"; } ), "Le save devrait porter la maîtrise assemblée, obtenu : " + JSON.stringify( _saved.adjustments ) );
            let _remove                 = _fresh2.querySelector( ".adjustments-section[data-kind='mastery'] .adjustments-entry[data-value='Arcanes — Expert (E)'] .adjustments-entry-remove" );
            if ( _remove ) {
                _remove.click();
            }
            return TEST.wait();
        } ).then( function () {
            TEST.ASSERT.equal( _character.getAdjustments().getValuesByKind( "mastery" ).length, 0, "Nettoyage : aucune maîtrise ne devrait rester pour le test suivant, obtenu : " + _character.getAdjustments().getValuesByKind( "mastery" ).length );
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

TEST.RUNNER.register( "[AJUSTEMENTS] maîtrise qualifiée = type révélé par la compétence, valeur composite au +", function () {
    let _character                      = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.AdjustmentsWindow.NAME ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _pane                       = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.AdjustmentsWindow.NAME + "']" );
        let _section                    = _pane.querySelector( ".adjustments-section[data-kind='mastery']" );
        TEST.ASSERT.notNull( _section, "La section Compétences devrait etre rendue" );
        if ( !_section ) {
            return;
        }
        let _skill_option               = _section.querySelector( ".adjustments-add-row .single-select-option[data-value='Connaissance']" );
        TEST.ASSERT.notNull( _skill_option, "Le sélecteur de compétence devrait proposer Connaissance" );
        if ( !_skill_option ) {
            return;
        }
        TEST.ASSERT.isNull( _section.querySelector( ".adjustments-mastery-qualifier .single-select-container" ), "Aucun sélecteur de type ne devrait exister avant le choix de la compétence" );
        _skill_option.click();
        return TEST.wait().then( function () {
            // Le choix de Connaissance révéle le sélecteur de type, entre la
            // compétence et le rang
            let _fresh_section          = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.AdjustmentsWindow.NAME + "'] .adjustments-section[data-kind='mastery']" );
            let _qualifier              = _fresh_section.querySelector( ".adjustments-mastery-qualifier .single-select-container" );
            TEST.ASSERT.notNull( _qualifier, "Choisir Connaissance devrait révéler le sélecteur de type" );
            TEST.ASSERT.ok( _qualifier.querySelectorAll( ".single-select-option" ).length >= 2, "Le sélecteur de type devrait proposer l'option vide + les types connus, obtenu : " + _qualifier.querySelectorAll( ".single-select-option" ).length );
            let _rank_option           = _fresh_section.querySelector( ".adjustments-add-row .single-select-option[data-value='Qualifié (Q)']" );
            if ( _rank_option ) {
                _rank_option.click();
            }
            return TEST.wait().then( function () {
                // Le + ne crée RIEN tant que le type manque (la compétence à
                // qualifier ne s'assemble pas sans lui)
                let _no_type_section    = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.AdjustmentsWindow.NAME + "'] .adjustments-section[data-kind='mastery']" );
                _no_type_section.querySelector( ".adjustments-add-button" ).click();
                let _entries            = _character.getAdjustments().getValuesByKind( "mastery" );
                TEST.ASSERT.equal( _entries.length, 0, "Le + sans type ne devrait créer aucune entrée, obtenu : " + JSON.stringify( _entries ) );
                // Entrée sur un type LIBRE : liste + libre (pattern du filtre)
                let _filter_input       = _qualifier.querySelector( ".single-select-filter" );
                TEST.ASSERT.notNull( _filter_input, "Le sélecteur de type devrait porter sa ligne de filtre" );
                _filter_input.value     = "sous le Quart-Monde";
                _filter_input.dispatchEvent( new KeyboardEvent( "keydown", { "key": "Enter" } ) );
                return TEST.wait().then( function () {
                    let _mastery_value  = "Connaissance (sous le Quart-Monde) — Qualifié (Q)";
                    let _commit_section  = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.AdjustmentsWindow.NAME + "'] .adjustments-section[data-kind='mastery']" );
                    _commit_section.querySelector( ".adjustments-add-button" ).click();
                    return TEST.wait().then( function () {
                        let _mastery_slot  = MASTERY.getSkillSlot( "Connaissance (sous le Quart-Monde)" );
                        TEST.ASSERT.ok( _character.getAdjustments().getValuesByKind( "mastery" ).indexOf( _mastery_value ) !== -1, "La maîtrise qualifiée assemblée devrait vivre dans les ajustements, obtenu : " + JSON.stringify( _character.getAdjustments().getValuesByKind( "mastery" ) ) );
                        // La compétence QUALIFIEE posée en Ajustements traverse
                        // la collecte sur SON slot, le label restitue le type
                        // accentue
                        TEST.ASSERT.equal( _character.getMasteries().getFinalRank( _character, _mastery_slot ), "Q", "La compétence qualifiée d'Ajustements devrait porter son rang sur son slot, obtenu : " + _character.getMasteries().getFinalRank( _character, _mastery_slot ) );
                        let _slot_data    = _character.getMasteries().getDataBySlot( _character )[ _mastery_slot ];
                        TEST.ASSERT.ok( _slot_data, "La collecte devrait porter le slot de la compétence qualifiée, obtenu : " + JSON.stringify( _character.getMasteries().getDataBySlot( _character ) ) );
                        if ( _slot_data ) {
                            TEST.ASSERT.equal( _slot_data.label, "Connaissance (sous le Quart-Monde)", "Le label du slot qualifie devrait restituer le type accentue, obtenu : " + _slot_data.label );
                        }
                        let _fresh        = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.AdjustmentsWindow.NAME + "']" );
                        let _entry        = _fresh.querySelector( ".adjustments-section[data-kind='mastery'] .adjustments-entry[data-value=\"" + _mastery_value + "\"]" );
                        TEST.ASSERT.notNull( _entry, "L'entrée devrait porter la valeur composite assemblée, obtenu : aucune entrée" );
                        let _saved        = _character.getDataToSave();
                        TEST.ASSERT.ok( _saved.adjustments && _saved.adjustments.some( function ( a ) { return a.kind === "mastery" && a.value === _mastery_value; } ), "Le save devrait porter la maîtrise qualifiée, obtenu : " + JSON.stringify( _saved.adjustments ) );
                        // Nettoyage : la suite repart sans maîtrise
                        let _remove      = _entry ? _entry.querySelector( ".adjustments-entry-remove" ) : null;
                        if ( _remove ) {
                            _remove.click();
                        }
                        return TEST.wait().then( function () {
                            TEST.ASSERT.equal( _character.getAdjustments().getValuesByKind( "mastery" ).length, 0, "Nettoyage : aucune maîtrise ne devrait rester, obtenu : " + JSON.stringify( _character.getAdjustments().getValuesByKind( "mastery" ) ) );
                        } );
                    } );
                } );
            } );
        } );
    } );
} );

TEST.RUNNER.register( "[AJUSTEMENTS] action = sélecteur compendium + zone Actions du Général avec popup", function () {
    let _character                      = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.AdjustmentsWindow.NAME ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _pane                       = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.AdjustmentsWindow.NAME + "']" );
        let _section                    = _pane.querySelector( ".adjustments-section[data-kind='action']" );
        TEST.ASSERT.notNull( _section, "La section Actions devrait etre rendue" );
        if ( !_section ) {
            return;
        }
        let _action_option               = _section.querySelector( ".single-select-option[data-value='Préparation rapide']" );
        TEST.ASSERT.notNull( _action_option, "Le sélecteur d'actions devrait proposer Préparation rapide (compendium), obtenu : absence" );
        if ( !_action_option ) {
            return;
        }
        _action_option.click();
        return TEST.wait().then( function () {
            let _fresh_section           = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.AdjustmentsWindow.NAME + "'] .adjustments-section[data-kind='action']" );
            _fresh_section.querySelector( ".adjustments-add-button" ).click();
            return TEST.wait().then( function () {
                TEST.ASSERT.ok( _character.getAdjustments().getValuesByKind( "action" ).indexOf( "Préparation rapide" ) !== -1, "L'action posée devrait vivre dans les ajustements, obtenu : " + JSON.stringify( _character.getAdjustments().getValuesByKind( "action" ) ) );
                let _saved              = _character.getDataToSave();
                TEST.ASSERT.ok( _saved.adjustments && _saved.adjustments.some( function ( a ) { return a.kind === "action" && a.value === "Préparation rapide"; } ), "Le save devrait porter l'action, obtenu : " + JSON.stringify( _saved.adjustments ) );
                // La zone Actions du Général (colonne 5, a droite des infos
                // d'ascendance) liste l'action, son clic ouvre la popup ACTION
                return TEST.clickTab( ".character-sheet-windows", CHARACTER.GeneralWindow.NAME ).then( function () {
                    return TEST.wait();
                } ).then( function () {
                    let _general_pane    = document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.GeneralWindow.NAME + "']" );
                    TEST.ASSERT.notNull( _general_pane, "Pre-condition : panneau Général ouvert" );
                    if ( !_general_pane ) {
                        return;
                    }
                    let _area_actions    = _general_pane.querySelector( ".grid-area.area-actions" );
                    TEST.ASSERT.notNull( _area_actions, "La zone Actions devrait etre rendue dans le Général (a droite des infos d'ascendance)" );
                    let _entry           = _area_actions ? _area_actions.querySelector( ".actions-list-entry[data-value='Préparation rapide']" ) : null;
                    TEST.ASSERT.notNull( _entry, "La zone Actions devrait lister Préparation rapide, obtenu : absence" );
                    if ( !_entry ) {
                        return;
                    }
                    _entry.click();
                    let _overlay         = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
                    TEST.ASSERT.notNull( _overlay, "La popup de l'action devrait s'ouvrir au clic sur son entree" );
                    if ( _overlay ) {
                        let _title       = _overlay.querySelector( ".popup-title" );
                        TEST.ASSERT.notNull( _title, "La popup de l'action devrait afficher un titre" );
                        if ( _title ) {
                            TEST.ASSERT.equal( _title.textContent, "Préparation rapide", "Le titre de la popup devrait etre le nom de l'action, obtenu : " + _title.textContent );
                        }
                        CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": "QHFMeJGzFWj2QczA" } );
                    }
                    // Nettoyage : le retrait reproduit la zone vide (le — de lecture)
                    return TEST.clickTab( ".character-sheet-windows", CHARACTER.AdjustmentsWindow.NAME ).then( function () {
                        return TEST.wait();
                    } ).then( function () {
                        let _adj_pane    = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.AdjustmentsWindow.NAME + "']" );
                        let _remove     = _adj_pane.querySelector( ".adjustments-section[data-kind='action'] .adjustments-entry[data-value='Préparation rapide'] .adjustments-entry-remove" );
                        if ( _remove ) {
                            _remove.click();
                        }
                        return TEST.wait().then( function () {
                            TEST.ASSERT.equal( _character.getAdjustments().getValuesByKind( "action" ).length, 0, "Nettoyage : aucune action ne devrait rester, obtenu : " + JSON.stringify( _character.getAdjustments().getValuesByKind( "action" ) ) );
                            return TEST.clickTab( ".character-sheet-windows", CHARACTER.GeneralWindow.NAME ).then( function () {
                                return TEST.wait();
                            } ).then( function () {
                                let _general_pane_clean = document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.GeneralWindow.NAME + "']" );
                                let _empty_entry        = _general_pane_clean ? _general_pane_clean.querySelector( ".grid-area.area-actions .actions-list-entry-empty" ) : null;
                                TEST.ASSERT.notNull( _empty_entry, "La zone vidée devrait afficher son placeholder de lecture" );
                            } );
                        } );
                    } );
                } );
            } );
        } );
    } );
} );
