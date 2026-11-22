"use strict";
/**
 * Scenario : SAVE FICHIER (suite independante, RESET)
 * Depart : feuille vide. Elfe posee, Magicien pousse au niveau 5, ecole
 * arcanique choisie (École du mentalisme), expertise en réflexes validée,
 * un ajustement de langue avec explication libre.
 * 1. Le contenu de fichier du save (CONTROLLER.Character.getSaveFileContent)
 *    est le texte exact de sheet/save/<uuid>.js : "let <uuid> = <json>;",
 *    le json parse egale le getDataToSave du personnage.
 * 2. Le contenu est injecte comme balise script dans la page (meme
 *    mecanisme que les fichiers de save charges par index.html), puis la
 *    feuille est RECHARGEE par la voie reelle :
 *    CONTROLLER.Character.init( uuid ) → loadDataByUUID (eval) →
 *    updateData → fenetres re-rendues.
 * 3. Etat restaure : uuid, niveau 5, 5 entrees d'historique, ecole
 *    validee avec sa valeur, Reflexes experte, ajustement de langue avec
 *    son explication libre.
 * 4. La feuille rechargee est VIVANTE : la bascule de expertise en
 *    réflexes fait retomber Reflexes qualifiee, la re-validation la
 *    remonte a experte.
 */
let TEST_saveFichierTargetLanguage = null;

TEST.RUNNER.register( "[SAVE FICHIER] contenu = let <uuid> = <json>; du personnage", function () {
    TEST.RESET.sheet();
    TEST_openRacePopup();
    return TEST.clickTab( "body > .popup", "Elfe" ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        return TEST_AjouterClasse( "Magicien" );
    } ).then( function () {
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME );
    } ).then( function () {
        return TEST.wait( 300 );
    } ).then( function () {
        let _character                     = CONTROLLER.Character.current_character;
        TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
        if ( !_character ) {
            return;
        }
        let _option                        = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-row[data-slot-key='ecole_arcanique'] .single-select-option[data-value='École du mentalisme']" );
        TEST.ASSERT.notNull( _option, "Pre-condition : option École du mentalisme rendue" );
        if ( !_option ) {
            return;
        }
        _option.click();
        return TEST.wait( 300 );
    } ).then( function () {
        for ( let _take = 0; _take < 4; _take++ ) {
            let _take_button               = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-class-option[data-name='Magicien'] .level-up-class-option-take" );
            TEST.ASSERT.notNull( _take_button, "Le plus de prise de niveau devrait etre rendu (iteration " + _take + ")" );
            if ( !_take_button ) {
                return;
            }
            _take_button.click();
        }
        return TEST.wait();
    } ).then( function () {
        let _rows                          = document.querySelectorAll( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-block[data-level-name] .level-up-row" );
        let _expertise_row                 = null;
        for ( let _i = 0, _size_i = _rows.length; _i < _size_i; _i++ ) {
            let _label                     = _rows[ _i ].querySelector( ".level-up-row-label" );
            if ( _label && _label.textContent === "expertise en réflexes" ) {
                _expertise_row             = _rows[ _i ];
                break;
            }
        }
        TEST.ASSERT.notNull( _expertise_row, "Pre-condition : ligne expertise en réflexes rendue au niveau 5" );
        if ( !_expertise_row ) {
            return;
        }
        let _toggle                        = _expertise_row.querySelector( ".level-up-row-toggle" );
        TEST.ASSERT.notNull( _toggle, "La ligne expertise en réflexes devrait porter son interrupteur" );
        if ( !_toggle ) {
            return;
        }
        _toggle.click();
        return TEST.wait().then( function () {
            return TEST.clickTab( ".character-sheet-windows", CHARACTER.AdjustmentsWindow.NAME );
        } );
    } ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _character                     = CONTROLLER.Character.current_character;
        TEST.ASSERT.equal( _character.getLevel(), 5, "Pre-condition : Magicien niveau 5, obtenu : " + _character.getLevel() );
        let _section                       = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.AdjustmentsWindow.NAME + "'] .adjustments-section[data-kind='language']" );
        TEST.ASSERT.notNull( _section, "Pre-condition : section Langues rendue" );
        if ( !_section ) {
            return;
        }
        let _base_languages                = _character.getRace().language;
        let _known_languages               = RACES.getKnownLanguages();
        for ( let _i = 0, _size_i = _known_languages.length; _i < _size_i; _i++ ) {
            if ( _base_languages.indexOf( _known_languages[ _i ].name ) === -1 ) {
                TEST_saveFichierTargetLanguage = _known_languages[ _i ].name;
                break;
            }
        }
        TEST.ASSERT.notNull( TEST_saveFichierTargetLanguage, "Les donnees devraient proposer une langue connue hors base d'Elfe" );
        if ( !TEST_saveFichierTargetLanguage ) {
            return;
        }
        let _language_option                = _section.querySelector( ".single-select-option[data-value='" + TEST_saveFichierTargetLanguage + "']" );
        TEST.ASSERT.notNull( _language_option, "Le sélecteur de langues devrait proposer " + TEST_saveFichierTargetLanguage );
        if ( !_language_option ) {
            return;
        }
        _language_option.click();
        return TEST.wait();
    } ).then( function () {
        let _section                      = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.AdjustmentsWindow.NAME + "'] .adjustments-section[data-kind='language']" );
        TEST.ASSERT.notNull( _section, "La section Langues devrait rester rendue" );
        if ( !_section ) {
            return;
        }
        let _explanation_input             = _section.querySelector( '[data-name="adjustment-explanation"]' );
        TEST.ASSERT.notNull( _explanation_input, "La section Langues devrait porter son champ d'explication libre" );
        if ( !_explanation_input ) {
            return;
        }
        _explanation_input.value           = "Épreuve du pont";
        _section.querySelector( ".adjustments-add-button" ).click();
        return TEST.wait();
    } ).then( function () {
        let _character                     = CONTROLLER.Character.current_character;
        let _file_content                  = CONTROLLER.Character.getSaveFileContent();
        let _uuid                          = _character.getUUID();
        TEST.ASSERT.ok( _file_content.indexOf( "let " + _uuid + " = " ) === 0, "Le contenu de fichier devrait declarer la variable du personnage (let " + _uuid + " = ...), obtenu : [" + _file_content.substring( 0, 60 ) + "...]" );
        TEST.ASSERT.ok( _file_content.charAt( _file_content.length - 1 ) === ";", "Le contenu de fichier devrait finir par un point-virgule" );
        let _json_part                     = _file_content.substring( ( "let " + _uuid + " = " ).length, _file_content.length - 1 );
        let _parsed_save                   = null;
        try {
            _parsed_save                   = JSON.parse( _json_part );
        } catch ( e ) {
            TEST.ASSERT.ok( false, "Le corps du fichier devrait etre du JSON parseable, obtenu : [" + _json_part.substring( 0, 60 ) + "...]" );
            return;
        }
        TEST.ASSERT.deepEqual( _parsed_save, _character.getDataToSave(), "Le JSON du fichier devrait egaler le getDataToSave du personnage" );
        TEST.ASSERT.equal( _parsed_save.levels_history.length, 5, "Le save devrait compter 5 entrees d'historique, obtenu : " + _parsed_save.levels_history.length );
    } );
} );

TEST.RUNNER.register( "[SAVE FICHIER] load par init( uuid ) = etat restaure + feuille vivante", function () {
    let _character                          = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage du test precedent vivant" );
    TEST.ASSERT.notNull( TEST_saveFichierTargetLanguage, "Pre-condition : langue cible mise de cote par le test precedent" );
    if ( !_character || !TEST_saveFichierTargetLanguage ) {
        return;
    }
    let _uuid                               = _character.getUUID();
    let _file_content                       = CONTROLLER.Character.getSaveFileContent();
    // Injection en page : meme mecanisme qu'un fichier de sheet/save/
    // charge par balise script (le let du script est visible du eval
    // de SERVICE.DATA.loadDataByUUID)
    let _script                             = document.createElement( "script" );
    _script.textContent                    = _file_content;
    document.head.appendChild( _script );
    TEST.RESET.sheet( _uuid );
    let _loaded                             = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _loaded, "Le personnage devrait etre recharge depuis le fichier" );
    if ( !_loaded ) {
        return;
    }
    TEST.ASSERT.equal( _loaded.getUUID(), _uuid, "Le personnage recharge devrait porter l'uuid du fichier, obtenu : " + _loaded.getUUID() );
    TEST.ASSERT.equal( _loaded.getLevel(), 5, "Le niveau 5 devrait survenir au chargement, obtenu : " + _loaded.getLevel() );
    TEST.ASSERT.equal( _loaded.getLevelHistory().getSize(), 5, "L'historique devrait compter 5 entrees, obtenu : " + _loaded.getLevelHistory().getSize() );
    let _ecole_line                         = _loaded.getLevelHistory().getContentByUUID( "1" ).getContentByUUID( "1__ecole_arcanique" );
    TEST.ASSERT.notNull( _ecole_line, "La ligne école arcanique du niveau 1 devrait exister apres chargement" );
    if ( _ecole_line ) {
        TEST.ASSERT.ok( _ecole_line.isActive(), "La validation école arcanique devrait survenir au chargement (la phase de la ligne est la donnee)" );
        TEST.ASSERT.equal( _ecole_line.getDataToSave(), "École du mentalisme", "Le choix d'école devrait survenir au chargement, obtenu : " + _ecole_line.getDataToSave() );
    }
    TEST.ASSERT.equal( _loaded.getMasteries().getFinalRank( _loaded, "save__reflex" ), "E", "La maîtrise Réflexes devrait etre experte apres chargement (expertise en réflexes validee), obtenu : " + _loaded.getMasteries().getFinalRank( _loaded, "save__reflex" ) );
    let _language_entry                     = _loaded.getAdjustments().getContentByUUID( "language__" + TEST_saveFichierTargetLanguage );
    TEST.ASSERT.notNull( _language_entry, "L'ajustement de langue devrait etre restaure par son uuid (language__" + TEST_saveFichierTargetLanguage + ")" );
    if ( _language_entry ) {
        TEST.ASSERT.equal( _language_entry.explanation, "Épreuve du pont", "L'explication libre devrait survenir au chargement (accents et apostrophes du texte libre), obtenu : [" + _language_entry.explanation + "]" );
    }
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _row                           = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-row[data-slot-key='ecole_arcanique']" );
        TEST.ASSERT.notNull( _row, "La ligne école arcanique devrait etre rendue apres chargement" );
        if ( !_row ) {
            return;
        }
        TEST.ASSERT.ok( _row.dataset.currentPhase === "SELECTED", "La ligne école arcanique chargee devrait etre en phase SELECTED, obtenu : " + _row.dataset.currentPhase );
        let _selector_label                = _row.querySelector( ".single-select-selector-label" );
        if ( _selector_label ) {
            TEST.ASSERT.equal( _selector_label.textContent, "École du mentalisme", "Le sélecteur chargee devrait afficher l'ecole choisie, obtenu : [" + _selector_label.textContent + "]" );
        }
        let _expertise_row                 = null;
        let _rows                          = document.querySelectorAll( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-block[data-level-name] .level-up-row" );
        for ( let _i = 0, _size_i = _rows.length; _i < _size_i; _i++ ) {
            let _label                     = _rows[ _i ].querySelector( ".level-up-row-label" );
            if ( _label && _label.textContent === "expertise en réflexes" ) {
                _expertise_row             = _rows[ _i ];
                break;
            }
        }
        TEST.ASSERT.notNull( _expertise_row, "La ligne expertise en réflexes devrait etre rendue apres chargement" );
        if ( !_expertise_row ) {
            return;
        }
        let _toggle                        = _expertise_row.querySelector( ".level-up-row-toggle" );
        TEST.ASSERT.notNull( _toggle, "La ligne expertise en réflexes chargee devrait porter son interrupteur" );
        if ( !_toggle ) {
            return;
        }
        _toggle.click();
        return TEST.wait().then( function () {
            let _loaded_after              = CONTROLLER.Character.current_character;
            TEST.ASSERT.equal( _loaded_after.getMasteries().getFinalRank( _loaded_after, "save__reflex" ), "Q", "La bascule sur la feuille chargee devrait faire retomber Réflexes qualifiee (le bus vit), obtenu : " + _loaded_after.getMasteries().getFinalRank( _loaded_after, "save__reflex" ) );
            _toggle.click();
            return TEST.wait().then( function () {
                TEST.ASSERT.equal( _loaded_after.getMasteries().getFinalRank( _loaded_after, "save__reflex" ), "E", "La re-validation devrait remonter Réflexes a experte, obtenu : " + _loaded_after.getMasteries().getFinalRank( _loaded_after, "save__reflex" ) );
            } );
        } );
    } );
} );

// Le badge warning de l'onglet Progression doit porter les lignes en attente
// DÈS le chargement du personnage, SANS activer l'onglet : la chaîne de
// compteurs ligne → fenêtre est branchée à la création de la fenêtre
TEST.RUNNER.register( "[SAVE FICHIER] load = badge warning de Progression visible sans ouvrir l'onglet", function () {
    let _character                          = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage vivant (le save a ete injecte par le test precedent)" );
    if ( !_character ) {
        return;
    }
    let _uuid                               = _character.getUUID();
    TEST.RESET.sheet( _uuid );
    let _loaded                             = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _loaded, "Le personnage devrait etre recharge par la voie reelle (init(uuid))" );
    if ( !_loaded ) {
        return;
    }
    // Pre-condition : au chargement l'onglet actif est le Général, la
    // Progression n'a JAMAIS ete activée sur cette feuille
    let _active                             = _loaded.windows.getActiveWindow();
    TEST.ASSERT.ok( _active && _active.getName() === CHARACTER.GeneralWindow.NAME, "L'onglet actif au chargement devrait etre le Général, obtenu : " + ( _active ? _active.getName() : "null" ) );
    // Le badge attendu = somme des compteurs du contenu de la Progression :
    // warnings des caractéristiques + lignes non validées des historiques
    // (une entrée désactivée ne contribue pas, règle des compteurs)
    let _expected                           = _loaded.getCharacteristics().getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
    let _pending_lines                      = 0;
    let _histories                          = [ _loaded.getLevelHistory(), _loaded.getAncestryHistory(), _loaded.getArchetypeHistory() ];
    for ( let h = 0, _size_h = _histories.length; h < _size_h; h++ ) {
        let _history                        = _histories[ h ];
        for ( let e = 0, _size_e = _history.getSize(); e < _size_e; e++ ) {
            let _entry                      = _history.getContent( e );
            if ( typeof _entry.isEnabled === "function" && !_entry.isEnabled() ) {
                continue;
            }
            for ( let l = 0, _size_l = _entry.getSize(); l < _size_l; l++ ) {
                if ( !_entry.getContent( l ).isActive() ) {
                    _expected++;
                    _pending_lines++;
                }
            }
        }
    }
    TEST.ASSERT.ok( _pending_lines > 0, "Le personnage recharge devrait avoir des lignes de progression en attente (sinon le test ne prouve rien), obtenu : " + _pending_lines );
    let _badge                              = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
    TEST.ASSERT.notNull( _badge, "Le badge warning devrait exister sur l'onglet Progression" );
    if ( !_badge ) {
        return;
    }
    let _expected_text                      = _expected === 0 ? "" : "" + _expected;
    return TEST.waitCounterValue( _badge, _expected_text ).then( function () {
        TEST.ASSERT.equal( _badge.getAttribute( "data-number" ), _expected_text, "Le badge devrait porter les " + _expected + " warnings du personnage charge SANS activer l'onglet (attendu [" + _expected_text + "]), obtenu : [" + _badge.getAttribute( "data-number" ) + "]" );
    } );
} );

TEST.RUNNER.register( "[SAVE FICHIER] load insensible a la casse (id=ANASTASIA charge anastasia)", function () {
    let _character = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage du test precedent vivant" );
    if ( !_character ) {
        return;
    }
    let _uuid  = _character.getUUID();
    // Une casse surement différente (majuscules sur les lettres)
    let _casse = _uuid.replace( /[a-z]/g, function ( c ) { return c.toUpperCase(); } );
    TEST.ASSERT.notEqual( _casse, _uuid, "Pre-condition : le uuid devrait contenir au moins une lettre (sinon la casse ne change rien)" );
    // Le save est deja injecte en script inline par le test precedent :
    // la resolution de casse passe par le scan des balises script
    TEST.RESET.sheet( _casse );
    let _loaded = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _loaded, "Le personnage devrait etre recharge malgre la casse" );
    if ( !_loaded ) {
        return;
    }
    TEST.ASSERT.equal( _loaded.getUUID(), _uuid, "L'uuid canonique (casse du fichier) devrait etre repris, obtenu : " + _loaded.getUUID() );
    TEST.ASSERT.equal( _loaded.getLevel(), 5, "Le niveau 5 devrait survenir au chargement par casse différente, obtenu : " + _loaded.getLevel() );
    TEST.ASSERT.equal( _loaded.getLevelHistory().getSize(), 5, "L'historique devrait compter 5 entrees" );
    // La resolution directe du service : loadDataByUUID accepte les deux casses
    let _data_lower = SERVICE.DATA.loadDataByUUID( _uuid.toLowerCase() );
    let _data_upper = SERVICE.DATA.loadDataByUUID( _uuid.toUpperCase() );
    TEST.ASSERT.equal( _data_lower.uuid, _uuid, "loadDataByUUID en minuscules devrait retrouver le save" );
    TEST.ASSERT.equal( _data_upper.uuid, _uuid, "loadDataByUUID en majuscules devrait retrouver le save" );
    TEST.ASSERT.equal( SERVICE.DATA.getExistingUUID( "nope-introuvable" ), null, "Un uuid inconnu devrait ne rien resoudre" );
} );
