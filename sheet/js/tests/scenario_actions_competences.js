"use strict";
/**
 * Scenario : ACTIONS COMPETENCES
 * Depart : etat de fin du scenario COMPETENCES (feuille Elfe + Magicien
 * niveau 5, onglet General actif, popup des actions d'Arcanes ouverte puis
 * refermee). Les donnees des actions viennent de OBJECT.SKILL_ACTIONS
 * (scrap grimoire-vf.fr).
 * 1. Clic sur la ligne Acrobaties (personnage Inexpérimenté) : popup des
 *    actions d'Acrobaties, rang courant "Inexpérimenté" dans l'en-tete, les
 *    4 actions de la compétence : les 2 actions rang I (Déplacement
 *    acrobatique, Garder l'équilibre) utilisables sans classe locked, les
 *    2 actions rang Q (Manœuvrer en vol, Se faufiler) verrouillees (classe
 *    locked, opacite calculee, hint "Rang Qualifié requis"). Une action
 *    utilisable affiche ses résultats (Succès / Échec) et ses exemples de
 *    tâches par rang.
 * 2. Clic sur la ligne Occultisme (Inexpérimenté, pas d'action specifique) :
 *    section "Actions de compétence générales", "Se souvenir" utilisable,
 *    "Déchiffrer un texte" verrouille (rang Qualifié requis).
 */

TEST.RUNNER.register( "[ACTIONS COMPETENCES] Acrobaties → actions I utilisables + actions Q verrouillées selon le rang", function () {
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    let _pane                          = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.GeneralWindow.NAME + "']" );
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Général rendu" );
    if ( !_pane ) {
        return;
    }
    let _acrobaties_row                = _pane.querySelector( ".jets-skills-block .saves-row[data-slot='skill__acrobaties']" );
    TEST.ASSERT.notNull( _acrobaties_row, "Pre-condition : ligne Acrobaties rendue" );
    if ( !_acrobaties_row ) {
        return;
    }
    _acrobaties_row.click();
    let _overlay                       = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
    TEST.ASSERT.notNull( _overlay, "La popup des actions d'Acrobaties devrait s'ouvrir au clic sur la ligne" );
    if ( !_overlay ) {
        return;
    }
    let _title                        = _overlay.querySelector( ".popup-title" );
    TEST.ASSERT.notNull( _title, "La popup devrait afficher un titre" );
    if ( _title ) {
        TEST.ASSERT.equal( _title.textContent, "Acrobaties", "Le titre de la popup devrait être Acrobaties, obtenu : " + _title.textContent );
    }
    let _current_rank                 = _overlay.querySelector( ".skill-current-rank" );
    TEST.ASSERT.notNull( _current_rank, "La popup devrait afficher le rang du personnage sur la compétence (.skill-current-rank)" );
    if ( _current_rank ) {
        TEST.ASSERT.equal( _current_rank.textContent, "Inexpérimenté", "Le rang du personnage sur Acrobaties devrait être Inexpérimenté, obtenu : " + _current_rank.textContent );
    }
    let _actions                      = _overlay.querySelectorAll( ".skill-action" );
    TEST.ASSERT.equal( _actions.length, 4, "La popup devrait afficher les 4 actions d'Acrobaties (scrap grimoire-vf), obtenu : " + _actions.length );
    let _locked                       = _overlay.querySelectorAll( ".skill-action.locked" );
    TEST.ASSERT.equal( _locked.length, 2, "Les 2 actions rang Q (Manœuvrer en vol, Se faufiler) devraient être verrouillées pour un personnage Inexpérimenté, obtenu : " + _locked.length );
    let _find_action                  = function ( name ) {
        let _blocks                   = _overlay.querySelectorAll( ".skill-action" );
        for ( let _i = 0; _i < _blocks.length; _i++ ) {
            let _name                 = _blocks[ _i ].querySelector( ".skill-action-name" );
            if ( _name && _name.textContent === name ) {
                return _blocks[ _i ];
            }
        }
        return null;
    };
    let _deplacement                  = _find_action( "Déplacement acrobatique" );
    TEST.ASSERT.notNull( _deplacement, "L'action Déplacement acrobatique devrait être affichée" );
    if ( _deplacement ) {
        TEST.ASSERT.notOk( _deplacement.classList.contains( "locked" ), "L'action rang I Déplacement acrobatique devrait être utilisable même inexpérimenté" );
        TEST.ASSERT.equal( _deplacement.querySelectorAll( ".skill-action-result" ).length, 2, "L'action utilisable devrait afficher ses résultats (Succès, Échec), obtenu : " + _deplacement.querySelectorAll( ".skill-action-result" ).length );
        let _results                 = _deplacement.querySelectorAll( ".skill-action-result-label" );
        TEST.ASSERT.ok( _results.length === 2 && _results[ 0 ].textContent === "Succès" && _results[ 1 ].textContent === "Échec", "Les résultats devraient être Succès puis Échec, obtenu : " + ( _results.length ? _results[ 0 ].textContent + " / " + _results[ 1 ].textContent : "aucun" ) );
        let _cost                     = _deplacement.querySelector( ".skill-action-cost" );
        TEST.ASSERT.notNull( _cost, "L'action devrait afficher son coût (1 action)" );
        if ( _cost ) {
            TEST.ASSERT.equal( _cost.textContent, "1 action", "Le coût de Déplacement acrobatique devrait être 1 action, obtenu : " + _cost.textContent );
        }
    }
    let _equilibre                    = _find_action( "Garder l'équilibre" );
    TEST.ASSERT.notNull( _equilibre, "L'action Garder l'équilibre devrait être affichée" );
    if ( _equilibre ) {
        TEST.ASSERT.equal( _equilibre.querySelectorAll( ".skill-action-task" ).length, 5, "L'action devrait afficher ses 5 exemples de tâches par rang, obtenu : " + _equilibre.querySelectorAll( ".skill-action-task" ).length );
    }
    let _manoeuvrer                   = _find_action( "Manœuvrer en vol" );
    TEST.ASSERT.notNull( _manoeuvrer, "L'action Manœuvrer en vol devrait être affichée" );
    if ( _manoeuvrer ) {
        TEST.ASSERT.ok( _manoeuvrer.classList.contains( "locked" ), "L'action rang Q Manœuvrer en vol devrait être verrouillée pour un personnage Inexpérimenté" );
        TEST.ASSERT.ok( getComputedStyle( _manoeuvrer ).opacity === "0.55", "L'action verrouillée devrait être estompée (opacité 0.55), obtenu : " + getComputedStyle( _manoeuvrer ).opacity );
        let _hint                     = _manoeuvrer.querySelector( ".skill-action-locked-hint" );
        TEST.ASSERT.notNull( _hint, "L'action verrouillée devrait annoncer le rang requis" );
        if ( _hint ) {
            TEST.ASSERT.equal( _hint.textContent, "Rang Qualifié requis", "Le hint devrait annoncer Rang Qualifié requis, obtenu : " + _hint.textContent );
        }
    }
    CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": "skill_actions__acrobaties" } );
    TEST.ASSERT.equal( _overlay.getAttribute( "data-current-phase" ), "HIDDEN_TO_STRING", "La popup des actions devrait être masquée après fermeture" );
} );

TEST.RUNNER.register( "[ACTIONS COMPETENCES] Occultisme → actions générales utilisables ou verrouillées selon le rang", function () {
    let _pane                          = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.GeneralWindow.NAME + "']" );
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Général rendu" );
    if ( !_pane ) {
        return;
    }
    let _occultisme_row                = _pane.querySelector( ".jets-skills-block .saves-row[data-slot='skill__occultisme']" );
    TEST.ASSERT.notNull( _occultisme_row, "Pre-condition : ligne Occultisme rendue" );
    if ( !_occultisme_row ) {
        return;
    }
    _occultisme_row.click();
    let _overlay                       = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
    TEST.ASSERT.notNull( _overlay, "La popup des actions d'Occultisme devrait s'ouvrir au clic sur la ligne" );
    if ( !_overlay ) {
        return;
    }
    let _title                        = _overlay.querySelector( ".popup-title" );
    if ( _title ) {
        TEST.ASSERT.equal( _title.textContent, "Occultisme", "Le titre de la popup devrait être Occultisme, obtenu : " + _title.textContent );
    }
    let _section                      = _overlay.querySelector( ".skill-general-actions" );
    TEST.ASSERT.notNull( _section, "La popup d'Occultisme devrait afficher la section des actions de compétence générales" );
    if ( !_section ) {
        return;
    }
    TEST.ASSERT.ok( _section.querySelector( ".skill-section-title" ).textContent.indexOf( "Actions de compétence générales" ) !== -1, "La section devrait être titrée Actions de compétence générales, obtenu : " + _section.querySelector( ".skill-section-title" ).textContent );
    let _find_general                 = function ( name ) {
        let _blocks                   = _section.querySelectorAll( ".skill-action" );
        for ( let _i = 0; _i < _blocks.length; _i++ ) {
            let _name                 = _blocks[ _i ].querySelector( ".skill-action-name" );
            if ( _name && _name.textContent === name ) {
                return _blocks[ _i ];
            }
        }
        return null;
    };
    let _souvenir                     = _find_general( "Se souvenir" );
    TEST.ASSERT.notNull( _souvenir, "L'action générale Se souvenir devrait être affichée" );
    if ( _souvenir ) {
        TEST.ASSERT.notOk( _souvenir.classList.contains( "locked" ), "Se souvenir devrait être utilisable même inexpérimenté" );
    }
    let _dechiffrer                   = _find_general( "Déchiffrer un texte" );
    TEST.ASSERT.notNull( _dechiffrer, "L'action générale Déchiffrer un texte devrait être affichée" );
    if ( _dechiffrer ) {
        TEST.ASSERT.ok( _dechiffrer.classList.contains( "locked" ), "Déchiffrer un texte devrait être verrouillée pour un personnage Inexpérimenté (rang Qualifié requis)" );
        let _hint                     = _dechiffrer.querySelector( ".skill-action-locked-hint" );
        TEST.ASSERT.notNull( _hint, "L'action verrouillée devrait annoncer le rang requis" );
        if ( _hint ) {
            TEST.ASSERT.equal( _hint.textContent, "Rang Qualifié requis", "Le hint devrait annoncer Rang Qualifié requis, obtenu : " + _hint.textContent );
        }
    }
    CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": "skill_actions__occultisme" } );
    TEST.ASSERT.equal( _overlay.getAttribute( "data-current-phase" ), "HIDDEN_TO_STRING", "La popup des actions devrait être masquée après fermeture" );
} );
