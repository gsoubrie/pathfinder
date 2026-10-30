"use strict";
/**
 * Scenario : FERMETURE POPUP
 * Depart : etat de fin du scenario ACTIONS COMPETENCES (feuille Elfe +
 * Magicien niveau 5, onglet General actif, popups refermees).
 * 1. Ouverture d'une popup d'information (maitrises, depuis une ligne de jet)
 *    : un clic dans la zone de contenu (titre) ne la referme pas, un clic sur
 *    le fond de l'overlay la referme (phase masquee, overlay none).
 * 2. Meme comportement sur la popup des actions d'une competence (Arcanes) :
 *    clic dans la zone ouverte, clic sur le fond refermee.
 */

TEST.RUNNER.register( "[FERMETURE POPUP] clic hors zone → popup refermée, clic dans la zone → ouverte", function () {
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
    let _jets_row                      = _pane.querySelector( ".jets-saves-block .saves-row[data-slot='save__vigueur']" );
    TEST.ASSERT.notNull( _jets_row, "Pre-condition : ligne de jet Vigueur rendue" );
    if ( !_jets_row ) {
        return;
    }
    _jets_row.click();
    let _overlay                       = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
    TEST.ASSERT.notNull( _overlay, "La popup des maîtrises devrait s'ouvrir au clic sur la ligne de jet" );
    if ( !_overlay ) {
        return;
    }
    let _title                        = _overlay.querySelector( ".popup-title" );
    TEST.ASSERT.notNull( _title, "Pre-condition : titre de la popup rendu" );
    _title.click();
    let _overlay_after_inside          = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
    TEST.ASSERT.notNull( _overlay_after_inside, "Un clic dans la zone de contenu ne devrait pas refermer la popup" );
    if ( !_overlay_after_inside ) {
        return;
    }
    _overlay.click();
    TEST.ASSERT.equal( _overlay.getAttribute( "data-current-phase" ), "HIDDEN_TO_STRING", "Un clic sur le fond de l'overlay devrait refermer la popup" );
    TEST.ASSERT.equal( getComputedStyle( _overlay ).display, "none", "L'overlay refermé devrait être masqué à l'écran, obtenu : " + getComputedStyle( _overlay ).display );

    let _arcanes_row                   = _pane.querySelector( ".jets-skills-block .saves-row[data-slot='skill__arcanes']" );
    TEST.ASSERT.notNull( _arcanes_row, "Pre-condition : ligne Arcanes rendue" );
    if ( !_arcanes_row ) {
        return;
    }
    _arcanes_row.click();
    let _actions_overlay               = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
    TEST.ASSERT.notNull( _actions_overlay, "La popup des actions d'Arcanes devrait s'ouvrir au clic sur la ligne" );
    if ( !_actions_overlay ) {
        return;
    }
    _actions_overlay.click();
    TEST.ASSERT.equal( _actions_overlay.getAttribute( "data-current-phase" ), "HIDDEN_TO_STRING", "Un clic sur le fond de l'overlay des actions devrait aussi refermer la popup" );
    TEST.ASSERT.equal( getComputedStyle( _actions_overlay ).display, "none", "L'overlay des actions refermé devrait être masqué à l'écran, obtenu : " + getComputedStyle( _actions_overlay ).display );
} );
