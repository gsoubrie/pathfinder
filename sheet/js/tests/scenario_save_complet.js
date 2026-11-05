"use strict";
/**
 * Scenario : SAVE COMPLET — fin de chaine (charge l'etat laisse par
 * scenario_levelup_niveau10 : Elfe + Magicien niveau 10), DERNIER run de
 * tests.html : la feuille reste ouverte sur le personnage recharge pour
 * verification manuelle par l'utilisateur.
 * 1. Toutes les lignes en attente de l'onglet Progression se valident par
 *    les memes gestes que l'utilisateur : interrupteur pour une ligne
 *    simple, premiere option disponible du selecteur pour une ligne a
 *    choix. La boucle court en POINT FIXE : une ligne a choix sans option
 *    disponible est SAUTEE puis rediscutee au tour suivant (ses options
 *    peuvent s'ouvrir quand les validations concurrentes montent les
 *    rangs des dons), elle s'arrete quand plus aucune ligne n'est
 *    actionnable — jusqu'a zero ligne en attente : personnage totalement
 *    configure. Les lignes restees bloquees sont listees par slot key +
 *    label dans le message d'echec (et la console).
 * 2. Le save part au format JSON (getSaveFileContent) tel quel, la page
 *    est RESETee puis RECHARGEE depuis ce JSON (injection en balise
 *    script + CONTROLLER.Character.init( uuid )) : dix entrees, toutes
 *    les lignes validees, ecole SELECTED au DOM, Reflexes experte,
 *    re-save identique au JSON d'origine — l'affichage affiche EST le
 *    personnage recharge, l'utilisateur verifie a la main.
 */
function TEST_saveCompletValidateOne( window_name ) {
    let _pane                           = document.querySelector( ".gs-tab-pane[data-name='" + window_name + "']" );
    if ( !_pane ) {
        return false;
    }
    let _rows                           = _pane.querySelectorAll( ".level-up-row" );
    for ( let _i = 0, _size_i = _rows.length; _i < _size_i; _i++ ) {
        let _row                        = _rows[ _i ];
        if ( _row.dataset.currentPhase !== "RUNNING" ) {
            continue;
        }
        let _toggle                     = _row.querySelector( ".level-up-row-toggle" );
        if ( _toggle ) {
            _toggle.click();
            return true;
        }
        let _options                    = _row.querySelectorAll( ".single-select-option" );
        for ( let _j = 0, _size_j = _options.length; _j < _size_j; _j++ ) {
            let _value                  = _options[ _j ].getAttribute( "data-value" );
            if ( _value !== "" && _value !== null ) {
                _options[ _j ].click();
                return true;
            }
        }
        // Ligne a choix sans option disponible : on passe, elle sera
        // rediscutee au tour suivant (ses options peuvent s'ouvrir quand
        // les validations concurrentes montent les rangs des dons)
    }
    return false;
}

function TEST_saveCompletPendingRowsDescription( window_name ) {
    let _description                    = "";
    let _pending_rows                   = document.querySelectorAll( ".gs-tab-pane[data-name='" + window_name + "'] .level-up-row[data-current-phase='RUNNING']" );
    for ( let _i = 0, _size_i = _pending_rows.length; _i < _size_i; _i++ ) {
        let _row                        = _pending_rows[ _i ];
        let _label                      = _row.querySelector( ".level-up-row-label" );
        let _options                    = _row.querySelectorAll( ".single-select-option" );
        let _values                     = "";
        for ( let _j = 0, _size_j = _options.length; _j < _size_j && _j < 4; _j++ ) {
            _values                    += "'" + _options[ _j ].getAttribute( "data-value" ) + "' ";
        }
        _description                    += "[" + _row.getAttribute( "data-slot-key" ) + " = " + ( _label ? _label.textContent : "?" ) + " | options DOM " + _options.length + " : " + _values + "] ";
    }
    return _description;
}

TEST.RUNNER.register( "[SAVE COMPLET] toutes les lignes validées : 0 en attente", function () {
    let _character                      = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage de fin de chaine vivant" );
    if ( !_character ) {
        return;
    }
    TEST.ASSERT.equal( _character.getLevel(), 10, "Pre-condition : Magicien niveau 10, obtenu : " + _character.getLevel() );
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
        let _guard                      = 0;
        let _validate_next              = function () {
            let _result                 = TEST_saveCompletValidateOne( CHARACTER.LevelUpWindow.NAME );
            if ( _result !== true ) {
                return _result;
            }
            _guard++;
            if ( _guard > 300 ) {
                return "guard";
            }
            return TEST.wait().then( _validate_next );
        };
        return _validate_next();
    } ).then( function () {
        return TEST.wait( 300 ).then( function () {
            let _pending                = document.querySelectorAll( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-row[data-current-phase='RUNNING']" ).length;
            let _stuck                 = TEST_saveCompletPendingRowsDescription( CHARACTER.LevelUpWindow.NAME );
            let _race_name             = CONTROLLER.Character.current_character.getRace().getValue();
            console.log( "GSOU", "[SAVE COMPLET] lignes restées en attente :", _stuck || "aucune",
                "| race courante :", _race_name,
                "| dons d'ascendance dispo niveau 1 :", DON.getAvailableAncestryFeats( _race_name, 1 ).length,
                "niveau 5 :", DON.getAvailableAncestryFeats( _race_name, 5 ).length );
            TEST.ASSERT.equal( _pending, 0, "Toutes les lignes du passage de niveau devraient etre validées, obtenu : " + _pending + " en attente : " + _stuck );
            let _character_now          = CONTROLLER.Character.current_character;
            TEST.ASSERT.equal( _character_now.getLevel(), 10, "Le personnage devrait rester niveau 10 apres configuration, obtenu : " + _character_now.getLevel() );
            TEST.ASSERT.equal( _character_now.getLevelHistory().getSize(), 10, "L'historique devrait rester a dix entrees, obtenu : " + _character_now.getLevelHistory().getSize() );
        } );
    } );
} );

TEST.RUNNER.register( "[SAVE COMPLET] reset page → affichage rechargé depuis le JSON du save", function () {
    let _character                      = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage configure vivant" );
    if ( !_character ) {
        return;
    }
    let _uuid                           = _character.getUUID();
    let _file_content                   = CONTROLLER.Character.getSaveFileContent();
    console.log( "GSOU", "[SAVE COMPLET] JSON du personnage configure :", _file_content );
    TEST.ASSERT.ok( _file_content.indexOf( "let " + _uuid + " = " ) === 0, "Le contenu de fichier devrait declarer la variable du personnage (let " + _uuid + " = ...), obtenu : [" + _file_content.substring( 0, 60 ) + "...]" );
    TEST.ASSERT.ok( _file_content.charAt( _file_content.length - 1 ) === ";", "Le contenu de fichier devrait finir par un point-virgule" );
    let _json_before                    = JSON.parse( _file_content.substring( ( "let " + _uuid + " = " ).length, _file_content.length - 1 ) );
    let _script                         = document.createElement( "script" );
    _script.textContent                 = _file_content;
    document.head.appendChild( _script );
    TEST.RESET.sheet( _uuid );
    let _loaded                         = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _loaded, "Le personnage devrait etre recharge depuis le JSON" );
    if ( !_loaded ) {
        return;
    }
    TEST.ASSERT.equal( _loaded.getUUID(), _uuid, "Le personnage recharge devrait porter l'uuid du save, obtenu : " + _loaded.getUUID() );
    TEST.ASSERT.equal( _loaded.getLevel(), 10, "Le niveau 10 devrait survenir au chargement, obtenu : " + _loaded.getLevel() );
    TEST.ASSERT.equal( _loaded.getLevelHistory().getSize(), 10, "L'historique recharge devrait compter 10 entrees, obtenu : " + _loaded.getLevelHistory().getSize() );
    TEST.ASSERT.equal( _loaded.getMasteries().getFinalRank( _loaded, "save__reflex" ), "E", "La maîtrise Réflexes devrait etre experte apres chargement, obtenu : " + _loaded.getMasteries().getFinalRank( _loaded, "save__reflex" ) );
    let _ecole_selected                   = _character.getLevelHistory().getContentByUUID( "1" ).getContentByUUID( "1__ecole_arcanique" ).getSelectedValue();
    TEST.ASSERT.notNull( _ecole_selected, "Pre-condition : ecole arcanique validee dans l'etat sauvegarde" );
    let _file_content_after             = CONTROLLER.Character.getSaveFileContent();
    let _json_after                     = JSON.parse( _file_content_after.substring( ( "let " + _uuid + " = " ).length, _file_content_after.length - 1 ) );
    TEST.ASSERT.deepEqual( _json_after, _json_before, "Le save re-derive apres rechargement devrait egaler le JSON d'origine (round-trip stable)" );
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
        return TEST.wait( 300 );
    } ).then( function () {
        let _pending                    = document.querySelectorAll( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-row[data-current-phase='RUNNING']" ).length;
        TEST.ASSERT.equal( _pending, 0, "L'affichage recharge devrait montrer toutes les lignes validées, obtenu : " + _pending + " en attente" );
        let _ecole_row                  = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-row[data-slot-key='ecole_arcanique']" );
        TEST.ASSERT.notNull( _ecole_row, "La ligne école arcanique devrait etre rendue apres rechargement" );
        if ( _ecole_row ) {
            TEST.ASSERT.ok( _ecole_row.dataset.currentPhase === "SELECTED", "La ligne école arcanique chargee devrait etre en phase SELECTED, obtenu : " + _ecole_row.dataset.currentPhase );
            let _label                  = _ecole_row.querySelector( ".single-select-selector-label" );
            TEST.ASSERT.equal( _label ? _label.textContent : null, _ecole_selected, "Le sélecteur chargee devrait afficher l'ecole sauvegardee, obtenu : [" + ( _label ? _label.textContent : "null" ) + "]" );
        }
    } );
} );
