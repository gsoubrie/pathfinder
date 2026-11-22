"use strict";
/**
 * Scenario : COMBAT MODES (chaîne, entre scenario_combat et
 * scenario_combat_actions)
 * Départ : fin du scenario COMBAT — Magicien niveau 5, onglet Combat actif,
 * aucun ajustement "action" posé. La fenêtre Combat vient d'être rendue avec
 * son mode par défaut (Exploration) : personne n'a encore cliqué sur une
 * puce de mode dans la chaîne.
 * L'onglet Combat porte trois onglets de mode en tête (puces Exploration /
 * Combats / Intermède, ordre et défaut validés par l'utilisateur) : seule la
 * colonne de droite (actions) dépend du mode actif, la colonne principale
 * reste identique. Exploration et Intermède listent toutes les activités du
 * compendium portant le trait du mode (OBJECT.getKnownActionsByTrait), plus
 * les ajustements "action" du personnage ayant ce trait (dédup par nom),
 * triées par nom, dans UNE partie titrée avec le compte ; le coût vaut "—"
 * quand l'activité n'a pas de coût d'action. Combats garde la carte de base
 * groupée par sections. Le mode actif est un état de vue de la fenêtre, il
 * n'est jamais sauvegardé.
 *  1. Trois puces rendues dans l'ordre, Exploration active par défaut
 *     (data-selected + style calculé : actif peint + gras, inactif non).
 *  2. Vue Exploration : une partie "Activités d'exploration (N)" avec
 *     N = OBJECT.getKnownActionsByTrait("Exploration").length, lignes triées
 *     par nom, "Recueillir des informations" à coût "—" et cliquable.
 *  3. Clic sur Combats : les sections de combat (COMBAT.ACTION_SECTIONS),
 *     Frapper ◆ en Attaques ; la puce Combats devient sélectionnée, la
 *     colonne principale (bande PV) ne bouge pas.
 *  4. Clic sur Intermède : partie "Activités d'intermède (N)", "Gagner de
 *     l'argent" à coût "—".
 *  5. Un ajustement "action" connu du compendium avec le trait du mode ne
 *     duplique pas la ligne de base (Subsister en Intermède, compte inchangé) ;
 *     un ajustement de combat (Démoraliser) n'apparaît ni en Exploration ni
 *     en Intermède.
 *  6. Le mode actif n'est pas dans le save.
 */
var TEST_combatModesRow = function ( action_name ) {
    let _rows = document.querySelectorAll( ".property-tab-pane[data-name='" + CHARACTER.CombatWindow.NAME + "'] .combat-action-row" );
    for ( let i = 0, _size_i = _rows.length; i < _size_i; i++ ) {
        if ( _rows[ i ].querySelector( ".combat-action-col-name" ).textContent === action_name ) {
            return _rows[ i ];
        }
    }
    return null;
};

var TEST_combatModeTab = function ( mode_key ) {
    return document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.CombatWindow.NAME + "'] .combat-mode-tab[data-mode='" + mode_key + "']" );
};

TEST.RUNNER.register( "[COMBAT MODES] trois puces, Exploration actif par défaut", function () {
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.CombatWindow.NAME ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _pane = document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.CombatWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Combat rendu" );
        if ( !_pane ) {
            return;
        }
        TEST.ASSERT.equal( COMBAT.DEFAULT_MODE, "exploration", "Le mode par défaut devrait être Exploration (décision utilisateur)" );
        let _tabs   = _pane.querySelectorAll( ".combat-mode-tab" );
        TEST.ASSERT.equal( _tabs.length, COMBAT.MODE_TABS.length, "Trois puces de mode devraient être rendues, obtenu : " + _tabs.length );
        let _labels = [];
        for ( let i = 0, _size_i = _tabs.length; i < _size_i; i++ ) {
            _labels.push( _tabs[ i ].textContent );
        }
        TEST.ASSERT.deepEqual( _labels, [ "Exploration", "Combats", "Intermède" ], "Les puces devraient être dans l'ordre Exploration / Combats / Intermède, obtenu : " + JSON.stringify( _labels ) );
        TEST.ASSERT.equal( _tabs[ 0 ].getAttribute( "data-selected" ), "true", "La puce Exploration devrait être sélectionnée par défaut" );
        TEST.ASSERT.equal( _tabs[ 1 ].getAttribute( "data-selected" ), "false", "La puce Combats ne devrait pas être sélectionnée par défaut" );
        TEST.ASSERT.equal( _tabs[ 2 ].getAttribute( "data-selected" ), "false", "La puce Intermède ne devrait pas être sélectionnée par défaut" );
        TEST.ASSERT.ok( ( _tabs[ 0 ].getAttribute( "onclick" ) || "" ).indexOf( "event__combat__select_mode" ) !== -1, "Chaque puce devrait dispatcher event__combat__select_mode au clic" );
        // Style calculé : l'actif est peint + gras (règle des onglets), l'inactif non
        let _active_style = getComputedStyle( _tabs[ 0 ] );
        TEST.ASSERT.equal( _active_style.fontWeight, "700", "La puce active devrait porter le gras, obtenu : " + _active_style.fontWeight );
        TEST.ASSERT.equal( _active_style.backgroundColor, "rgb(74, 53, 32)", "La puce active devrait être peinte (--c-bg-card-light #4A3520), obtenu : " + _active_style.backgroundColor );
        TEST.ASSERT.equal( _active_style.color, "rgb(212, 175, 55)", "La puce active devrait être en doré (--c-gold #D4AF37), obtenu : " + _active_style.color );
        let _inactive_style = getComputedStyle( _tabs[ 1 ] );
        TEST.ASSERT.equal( _inactive_style.fontWeight, "400", "La puce inactive ne devrait pas être grasse, obtenu : " + _inactive_style.fontWeight );
        TEST.ASSERT.equal( _inactive_style.backgroundColor, "rgba(0, 0, 0, 0)", "La puce inactive devrait être transparente, obtenu : " + _inactive_style.backgroundColor );
    } );
} );

TEST.RUNNER.register( "[COMBAT MODES] vue Exploration = liste de base du trait, triée, coût —", function () {
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.CombatWindow.NAME ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _character = CONTROLLER.Character.current_character;
        TEST.ASSERT.notNull( _character, "Pre-condition : personnage chargé" );
        if ( !_character ) {
            return;
        }
        let _pane = document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.CombatWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Combat rendu" );
        if ( !_pane ) {
            return;
        }
        // Le mode actif est encore le défaut (Exploration) : aucun test de la
        // chaîne n'a cliqué sur une puce avant celui-ci
        TEST.ASSERT.equal( TEST_combatModeTab( "exploration" ).getAttribute( "data-selected" ), "true", "Pre-condition : le mode actif devrait être Exploration" );
        let _zone           = _pane.querySelector( ".combat-actions-zone" );
        let _expected_count = OBJECT.getKnownActionsByTrait( "Exploration" ).length;
        TEST.ASSERT.ok( _expected_count > 0, "Pre-condition : le compendium devrait porter des activités Exploration (" + _expected_count + ")" );
        let _parts          = _zone.querySelectorAll( ".combat-actions-section" );
        TEST.ASSERT.equal( _parts.length, 1, "Une seule partie devrait être rendue en mode Exploration, obtenu : " + _parts.length );
        let _title = _parts[ 0 ].querySelector( ".combat-actions-section-title" );
        TEST.ASSERT.equal( _title.textContent, "Activités d'exploration (" + _expected_count + ")", "Le titre de la partie devrait porter le compte, obtenu : [" + _title.textContent + "]" );
        let _rows = _parts[ 0 ].querySelectorAll( ".combat-action-row" );
        TEST.ASSERT.equal( _rows.length, _expected_count, "Toutes les activités Exploration devraient être rendues (" + _expected_count + "), obtenu : " + _rows.length );
        let _names = [];
        for ( let i = 0, _size_i = _rows.length; i < _size_i; i++ ) {
            _names.push( _rows[ i ].querySelector( ".combat-action-col-name" ).textContent );
        }
        let _sorted = _names.slice().sort( function ( name_a, name_b ) {
            return name_a.localeCompare( name_b, "fr" );
        } );
        TEST.ASSERT.deepEqual( _names, _sorted, "Les lignes devraient être triées par nom (fr), obtenu : " + JSON.stringify( _names.slice( 0, 5 ) ) + "..." );
        let _row = TEST_combatModesRow( "Recueillir des informations" );
        TEST.ASSERT.notNull( _row, "L'activité Recueillir des informations devrait être rendue en Exploration" );
        if ( _row ) {
            TEST.ASSERT.equal( _row.querySelector( ".combat-action-col-cost" ).textContent, "—", "Une activité sans coût d'action devrait afficher —, obtenu : [" + _row.querySelector( ".combat-action-col-cost" ).textContent + "]" );
            TEST.ASSERT.equal( _row.querySelector( ".combat-action-col-name" ).getAttribute( "data-value" ), "Recueillir des informations", "Le nom devrait porter son data-value (clic popup ACTION)" );
            TEST.ASSERT.ok( ( _row.querySelector( ".combat-action-col-name" ).getAttribute( "onclick" ) || "" ).indexOf( "event__show_information__action" ) !== -1, "Le clic sur le nom devrait ouvrir la popup ACTION" );
        }
        // Le DOM rejoint le domaine
        let _sections = _character.getCombat().getModeSections( _character, "exploration" );
        TEST.ASSERT.equal( _sections.length, 1, "Le domaine devrait rendre une seule section en exploration, obtenu : " + _sections.length );
        TEST.ASSERT.equal( _sections[ 0 ].lines.length, _expected_count, "Le domaine devrait calculer " + _expected_count + " lignes d'exploration, obtenu : " + _sections[ 0 ].lines.length );
    } );
} );

TEST.RUNNER.register( "[COMBAT MODES] clic Combats = carte de base en sections, colonne principale inchangée", function () {
    let _tab = TEST_combatModeTab( "combat" );
    TEST.ASSERT.notNull( _tab, "Pre-condition : puce Combats rendue" );
    if ( !_tab ) {
        return;
    }
    _tab.click();
    return TEST.wait().then( function () {
        let _pane = document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.CombatWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Combat rendu" );
        if ( !_pane ) {
            return;
        }
        TEST.ASSERT.equal( TEST_combatModeTab( "combat" ).getAttribute( "data-selected" ), "true", "La puce Combats devrait être sélectionnée après le clic" );
        TEST.ASSERT.equal( TEST_combatModeTab( "exploration" ).getAttribute( "data-selected" ), "false", "La puce Exploration ne devrait plus être sélectionnée" );
        let _zone = _pane.querySelector( ".combat-actions-zone" );
        TEST.ASSERT.equal( _zone.querySelectorAll( ".combat-actions-section" ).length, COMBAT.ACTION_SECTIONS.length, "Les sections de combat devraient être rendues (" + COMBAT.ACTION_SECTIONS.length + " parties), obtenu : " + _zone.querySelectorAll( ".combat-actions-section" ).length );
        let _frapper = TEST_combatModesRow( "Frapper" );
        TEST.ASSERT.notNull( _frapper, "La ligne Frapper devrait être rendue en mode Combats" );
        if ( _frapper ) {
            TEST.ASSERT.equal( _frapper.getAttribute( "data-section" ), "attack", "Frapper devrait être en section Attaques" );
            TEST.ASSERT.equal( _frapper.querySelector( ".combat-action-col-cost" ).textContent, "◆", "Frapper devrait coûter ◆, obtenu : [" + _frapper.querySelector( ".combat-action-col-cost" ).textContent + "]" );
        }
        // La colonne principale ne dépend pas du mode
        TEST.ASSERT.notNull( _pane.querySelector( ".combat-health-band" ), "La bande PV devrait rester rendue (colonne principale identique)" );
        TEST.ASSERT.notNull( _pane.querySelector( ".combat-attacks-zone" ), "La zone Attaques devrait rester rendue (colonne principale identique)" );
    } );
} );

TEST.RUNNER.register( "[COMBAT MODES] clic Intermède = activités du trait Intermède", function () {
    let _tab = TEST_combatModeTab( "intermede" );
    TEST.ASSERT.notNull( _tab, "Pre-condition : puce Intermède rendue" );
    if ( !_tab ) {
        return;
    }
    _tab.click();
    return TEST.wait().then( function () {
        let _character = CONTROLLER.Character.current_character;
        TEST.ASSERT.notNull( _character, "Pre-condition : personnage chargé" );
        if ( !_character ) {
            return;
        }
        let _pane           = document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.CombatWindow.NAME + "']" );
        TEST.ASSERT.equal( TEST_combatModeTab( "intermede" ).getAttribute( "data-selected" ), "true", "La puce Intermède devrait être sélectionnée après le clic" );
        let _zone           = _pane.querySelector( ".combat-actions-zone" );
        let _expected_count = OBJECT.getKnownActionsByTrait( "Intermède" ).length;
        let _parts          = _zone.querySelectorAll( ".combat-actions-section" );
        TEST.ASSERT.equal( _parts.length, 1, "Une seule partie en mode Intermède, obtenu : " + _parts.length );
        let _title = _parts[ 0 ].querySelector( ".combat-actions-section-title" );
        TEST.ASSERT.equal( _title.textContent, "Activités d'intermède (" + _expected_count + ")", "Le titre devrait porter le compte intermède, obtenu : [" + _title.textContent + "]" );
        TEST.ASSERT.equal( _parts[ 0 ].querySelectorAll( ".combat-action-row" ).length, _expected_count, "Toutes les activités Intermède devraient être rendues (" + _expected_count + ")" );
        let _row = TEST_combatModesRow( "Gagner de l'argent" );
        TEST.ASSERT.notNull( _row, "L'activité Gagner de l'argent devrait être rendue en Intermède" );
        if ( _row ) {
            TEST.ASSERT.equal( _row.querySelector( ".combat-action-col-cost" ).textContent, "—", "Gagner de l'argent n'a pas de coût d'action : — attendu" );
        }
    } );
} );

TEST.RUNNER.register( "[COMBAT MODES] ajustements : pas de doublon avec la base, combat exclu des vues activité", function () {
    let _character = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage chargé" );
    if ( !_character ) {
        return;
    }
    CONTROLLER.Character.doActionAfter( "event__adjustment__add", { "param__adjustment__kind": "action", "param__adjustment__value": "Subsister", "param__adjustment__explanation": "test modes" } );
    CONTROLLER.Character.doActionAfter( "event__adjustment__add", { "param__adjustment__kind": "action", "param__adjustment__value": "Démoraliser", "param__adjustment__explanation": "test modes" } );
    let _tab = TEST_combatModeTab( "intermede" );
    TEST.ASSERT.notNull( _tab, "Pre-condition : puce Intermède rendue" );
    if ( _tab ) {
        _tab.click();
    }
    return TEST.wait().then( function () {
        // Subsister a le trait Intermède : déjà dans la liste de base, l'ajustement ne duplique pas
        let _expected = OBJECT.getKnownActionsByTrait( "Intermède" ).length;
        let _zone     = document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.CombatWindow.NAME + "'] .combat-actions-zone" );
        let _title    = _zone.querySelector( ".combat-actions-section-title" );
        TEST.ASSERT.equal( _title.textContent, "Activités d'intermède (" + _expected + ")", "L'ajustement Subsister ne devrait pas ajouter de ligne (déjà dans la base), obtenu : [" + _title.textContent + "]" );
        let _count    = 0;
        let _rows     = _zone.querySelectorAll( ".combat-action-row" );
        for ( let i = 0, _size_i = _rows.length; i < _size_i; i++ ) {
            if ( _rows[ i ].querySelector( ".combat-action-col-name" ).textContent === "Subsister" ) {
                _count++;
            }
        }
        TEST.ASSERT.equal( _count, 1, "Subsister ne devrait apparaître qu'une seule fois en Intermède, obtenu : " + _count );
        TEST.ASSERT.isNull( TEST_combatModesRow( "Démoraliser" ), "Démoraliser (action de combat) ne devrait pas apparaître en Intermède" );
        let _tab_explo = TEST_combatModeTab( "exploration" );
        if ( _tab_explo ) {
            _tab_explo.click();
        }
        return TEST.wait();
    } ).then( function () {
        TEST.ASSERT.isNull( TEST_combatModesRow( "Subsister" ), "Subsister (Intermède) ne devrait pas apparaître en Exploration" );
        TEST.ASSERT.isNull( TEST_combatModesRow( "Démoraliser" ), "Démoraliser (combat) ne devrait pas apparaître en Exploration" );
        // Retraits : la feuille revient à la liste de base seule (laisser la suite propre)
        CONTROLLER.Character.doActionAfter( "event__adjustment__remove", { "param__adjustment__kind": "action", "param__adjustment__value": "Subsister" } );
        CONTROLLER.Character.doActionAfter( "event__adjustment__remove", { "param__adjustment__kind": "action", "param__adjustment__value": "Démoraliser" } );
        return TEST.wait();
    } ).then( function () {
        let _zone  = document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.CombatWindow.NAME + "'] .combat-actions-zone" );
        let _rows  = _zone.querySelectorAll( ".combat-action-row" );
        let _names = [];
        for ( let i = 0, _size_i = _rows.length; i < _size_i; i++ ) {
            _names.push( _rows[ i ].querySelector( ".combat-action-col-name" ).textContent );
        }
        TEST.ASSERT.ok( _names.indexOf( "Démoraliser" ) === -1, "Après retrait, Démoraliser ne devrait plus être affiché dans la vue active" );
    } );
} );

TEST.RUNNER.register( "[COMBAT MODES] le mode actif n'est pas sauvegardé", function () {
    let _character = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage chargé" );
    if ( !_character ) {
        return;
    }
    let _save_text = JSON.stringify( _character.getDataToSave() );
    TEST.ASSERT.ok( _save_text.indexOf( "current_mode" ) === -1, "Le mode actif ne devrait pas figurer dans le save, extrait : " + _save_text.slice( 0, 200 ) );
    TEST.ASSERT.ok( _save_text.indexOf( "param__combat__mode" ) === -1, "Aucun paramètre de mode ne devrait figurer dans le save" );
} );
