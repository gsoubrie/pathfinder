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
