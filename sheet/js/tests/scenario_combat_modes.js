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
 * reste identique. Exploration et Intermède listent la carte écrite à la main
 * des activités COMMUNES du mode (COMBAT.MODE_COMMON_ACTIONS — le compendium
 * scrape bien plus d'activités portant le trait, campagnes et dons compris),
 * plus les ajustements "action" du personnage ayant ce trait (dédup par nom),
 * triées par nom, dans UNE partie titrée avec le compte ; le coût vaut "—"
 * quand l'activité n'a pas de coût d'action. Combats garde la carte de base
 * groupée par sections. Le mode actif est un état de vue de la fenêtre, il
 * n'est jamais sauvegardé.
 *  1. Trois puces rendues dans l'ordre, Exploration active par défaut
 *     (data-selected + style calculé : actif peint + gras, inactif non).
 *  2. Vue Exploration : une partie "Activités d'exploration (N)", lignes
 *     triées par nom, "Recueillir des informations" à coût "—" et cliquable ;
 *     la carte commune est FILTRÉE par les prérequis PF2 (compétence qualifiée
 *     ou lancer de sorts, COMBAT.MODE_ACTION_REQUIREMENTS) : N = lignes
 *     disponibles calculées par le domaine, "Identifier la magie" selon
 *     Arcanes, "Soigner les blessures" selon Médecine, "Détection de la magie"
 *     selon le lancer de sorts ; une activité du trait HORS carte commune
 *     ("Piller les Coffres") est absente.
 *  3. Clic sur Combats : les sections de combat (COMBAT.ACTION_SECTIONS),
 *     Frapper ◆ en Attaques ; la puce Combats devient sélectionnée, la
 *     colonne principale (bande PV) ne bouge pas.
 *  4. Clic sur Intermède : partie "Activités d'intermède (N)" filtrée de la
 *     même façon ("Fabriquer" selon Artisanat, "Gagner de l'argent" dès qu'une
 *     compétence est qualifiée), "Gagner de l'argent" à coût "—".
 *  5. Un ajustement "action" connu du compendium avec le trait du mode ne
 *     duplique pas la ligne de base (Subsister en Intermède, compte inchangé) ;
 *     un ajustement de combat (Démoraliser) n'apparaît ni en Exploration ni
 *     en Intermède ; une activité du trait HORS carte commune (Piller les
 *     Coffres en Exploration) rejoint la vue par l'ajustement seul.
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
        let _zone         = _pane.querySelector( ".combat-actions-zone" );
        let _common_names = COMBAT.MODE_COMMON_ACTIONS[ "exploration" ];
        TEST.ASSERT.ok( _common_names.length > 0, "Pre-condition : la carte des activités communes d'exploration ne devrait pas être vide" );
        // La carte écrite à la main pointe des entrées réelles du compendium,
        // portant bien le trait du mode (garde anti re-scrap)
        for ( let i = 0, _size_i = _common_names.length; i < _size_i; i++ ) {
            let _info = OBJECT.getActionInformation( _common_names[ i ] );
            TEST.ASSERT.notNull( _info, "Chaque nom de la carte commune exploration devrait exister dans le compendium : " + _common_names[ i ] );
            TEST.ASSERT.ok( _info && ( _info.traits || [] ).indexOf( "Exploration" ) !== -1, "Chaque nom de la carte commune exploration devrait porter le trait Exploration : " + _common_names[ i ] );
        }
        // Le compte attendu est FILTRÉ par les prérequis PF2 (compétence qualifiée)
        let _sections       = _character.getCombat().getModeSections( _character, "exploration" );
        let _expected_count = _sections.length ? _sections[ 0 ].lines.length : 0;
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
        // Une activité du trait Exploration HORS carte commune (campagne/don)
        // ne s'affiche pas tant que le personnage ne l'a pas choisie
        TEST.ASSERT.isNull( TEST_combatModesRow( "Piller les Coffres" ), "Piller les Coffres (trait Exploration, hors carte commune) ne devrait PAS être rendue en Exploration" );
        // Filtre PF2 : chaque ligne de la carte commune n'est rendue que si le
        // personnage remplit son prérequis (compétence qualifiée / lancer de sorts)
        let _masteries = _character.getMasteries();
        for ( let i = 0, _size_i = _common_names.length; i < _size_i; i++ ) {
            let _available = _character.getCombat().isCommonActivityAvailable( _character, _common_names[ i ] );
            if ( _available ) {
                TEST.ASSERT.notNull( TEST_combatModesRow( _common_names[ i ] ), _common_names[ i ] + " devrait être rendue (pré-requis remplis)" );
            } else {
                TEST.ASSERT.isNull( TEST_combatModesRow( _common_names[ i ] ), _common_names[ i ] + " ne devrait PAS être rendue (pré-requis non remplis)" );
            }
        }
        // Cas concrets : Identifier la magie ride Arcanes, Soigner les blessures
        // ride Médecine, Détection de la magie exige de lancer des sorts
        let _arcane_rank   = _masteries.getFinalRank( _character, MASTERY.getSkillSlot( "Arcanes" ) );
        let _medicine_rank = _masteries.getFinalRank( _character, MASTERY.getSkillSlot( "Médecine" ) );
        let _has_spell     = !!_masteries.getFinalRank( _character, "spell_attack" ) || !!_masteries.getFinalRank( _character, "spell_dc" );
        if ( _arcane_rank && MASTERY.ORDER[ _arcane_rank ] >= MASTERY.ORDER[ "Q" ] ) {
            TEST.ASSERT.notNull( TEST_combatModesRow( "Identifier la magie" ), "Identifier la magie devrait être rendue (Arcanes qualifiée, rang " + _arcane_rank + ")" );
        } else {
            TEST.ASSERT.isNull( TEST_combatModesRow( "Identifier la magie" ), "Identifier la magie ne devrait PAS être rendue (Arcanes non qualifiée, rang " + _arcane_rank + ")" );
        }
        if ( _medicine_rank && MASTERY.ORDER[ _medicine_rank ] >= MASTERY.ORDER[ "Q" ] ) {
            TEST.ASSERT.notNull( TEST_combatModesRow( "Soigner les blessures" ), "Soigner les blessures devrait être rendue (Médecine qualifiée)" );
        } else {
            TEST.ASSERT.isNull( TEST_combatModesRow( "Soigner les blessures" ), "Soigner les blessures ne devrait PAS être rendue (Médecine non qualifiée, rang " + _medicine_rank + ")" );
        }
        if ( _has_spell ) {
            TEST.ASSERT.notNull( TEST_combatModesRow( "Détection de la magie" ), "Détection de la magie devrait être rendue (lanceur de sorts)" );
        } else {
            TEST.ASSERT.isNull( TEST_combatModesRow( "Détection de la magie" ), "Détection de la magie ne devrait PAS être rendue (pas de lancer de sorts)" );
        }
        TEST.ASSERT.ok( _expected_count <= _common_names.length, "Le compte filtré devrait être inférieur ou égal à la carte (" + _expected_count + " vs " + _common_names.length + ")" );
        // Le DOM rejoint le domaine
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
        let _zone         = _pane.querySelector( ".combat-actions-zone" );
        let _common_names = COMBAT.MODE_COMMON_ACTIONS[ "intermede" ];
        for ( let i = 0, _size_i = _common_names.length; i < _size_i; i++ ) {
            let _info = OBJECT.getActionInformation( _common_names[ i ] );
            TEST.ASSERT.notNull( _info, "Chaque nom de la carte commune intermède devrait exister dans le compendium : " + _common_names[ i ] );
            TEST.ASSERT.ok( _info && ( _info.traits || [] ).indexOf( "Intermède" ) !== -1, "Chaque nom de la carte commune intermède devrait porter le trait Intermède : " + _common_names[ i ] );
        }
        // Compte filtré par les prérequis PF2, calculé depuis le domaine
        let _sections       = _character.getCombat().getModeSections( _character, "intermede" );
        let _expected_count = _sections.length ? _sections[ 0 ].lines.length : 0;
        let _parts          = _zone.querySelectorAll( ".combat-actions-section" );
        TEST.ASSERT.equal( _parts.length, 1, "Une seule partie en mode Intermède, obtenu : " + _parts.length );
        let _title = _parts[ 0 ].querySelector( ".combat-actions-section-title" );
        TEST.ASSERT.equal( _title.textContent, "Activités d'intermède (" + _expected_count + ")", "Le titre devrait porter le compte intermède, obtenu : [" + _title.textContent + "]" );
        TEST.ASSERT.equal( _parts[ 0 ].querySelectorAll( ".combat-action-row" ).length, _expected_count, "Toutes les activités Intermède devraient être rendues (" + _expected_count + ")" );
        let _row = TEST_combatModesRow( "Gagner de l'argent" );
        // Gagner de l'argent ride sur n'importe quelle compétence qualifiée
        let _masteries   = _character.getMasteries();
        let _any_trained = false;
        let _skill_keys  = Object.keys( SKILLS.LIST );
        for ( let i = 0, _size_i = _skill_keys.length; i < _size_i; i++ ) {
            let _rank = _masteries.getFinalRank( _character, MASTERY.getSkillSlot( SKILLS.LIST[ _skill_keys[ i ] ].label ) );
            if ( _rank && MASTERY.ORDER[ _rank ] >= MASTERY.ORDER[ "Q" ] ) {
                _any_trained = true;
            }
        }
        if ( _any_trained ) {
            TEST.ASSERT.notNull( _row, "L'activité Gagner de l'argent devrait être rendue en Intermède (au moins une compétence qualifiée)" );
        } else {
            TEST.ASSERT.isNull( _row, "Gagner de l'argent ne devrait PAS être rendue (aucune compétence qualifiée)" );
        }
        if ( _row ) {
            TEST.ASSERT.equal( _row.querySelector( ".combat-action-col-cost" ).textContent, "—", "Gagner de l'argent n'a pas de coût d'action : — attendu" );
        }
        // Fabriquer exige Artisanat qualifiée
        let _craft_rank = _masteries.getFinalRank( _character, MASTERY.getSkillSlot( "Artisanat" ) );
        if ( _craft_rank && MASTERY.ORDER[ _craft_rank ] >= MASTERY.ORDER[ "Q" ] ) {
            TEST.ASSERT.notNull( TEST_combatModesRow( "Fabriquer" ), "Fabriquer devrait être rendue (Artisanat qualifiée)" );
        } else {
            TEST.ASSERT.isNull( TEST_combatModesRow( "Fabriquer" ), "Fabriquer ne devrait PAS être rendue (Artisanat non qualifiée, rang " + _craft_rank + ")" );
        }
        // Chaque ligne de la carte commune intermède suit sa disponibilité
        for ( let i = 0, _size_i = _common_names.length; i < _size_i; i++ ) {
            let _available = _character.getCombat().isCommonActivityAvailable( _character, _common_names[ i ] );
            if ( _available ) {
                TEST.ASSERT.notNull( TEST_combatModesRow( _common_names[ i ] ), _common_names[ i ] + " devrait être rendue (pré-requis remplis)" );
            } else {
                TEST.ASSERT.isNull( TEST_combatModesRow( _common_names[ i ] ), _common_names[ i ] + " ne devrait PAS être rendue (pré-requis non remplis)" );
            }
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
        // Subsister a le trait Intermède : déjà dans la carte commune, l'ajustement ne duplique pas
        let _intermede_sections = _character.getCombat().getModeSections( _character, "intermede" );
        let _expected = _intermede_sections.length ? _intermede_sections[ 0 ].lines.length : 0;
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
        // Une activité du trait Exploration HORS carte commune rejoint la vue
        // par l'ajustement seul (le personnage l'a choisie)
        CONTROLLER.Character.doActionAfter( "event__adjustment__add", { "param__adjustment__kind": "action", "param__adjustment__value": "Piller les Coffres", "param__adjustment__explanation": "test modes" } );
        return TEST.wait();
    } ).then( function () {
        let _zone     = document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.CombatWindow.NAME + "'] .combat-actions-zone" );
        let _title    = _zone.querySelector( ".combat-actions-section-title" );
        let _explo_sections = _character.getCombat().getModeSections( _character, "exploration" );
        let _expected = ( _explo_sections.length ? _explo_sections[ 0 ].lines.length : 0 );
        TEST.ASSERT.equal( _title.textContent, "Activités d'exploration (" + _expected + ")", "L'ajustement Piller les Coffres (hors carte commune) devrait ajouter une ligne en Exploration, obtenu : [" + _title.textContent + "]" );
        TEST.ASSERT.notNull( TEST_combatModesRow( "Piller les Coffres" ), "Piller les Coffres devrait apparaître en Exploration via l'ajustement" );
        // Retraits : la feuille revient à la carte commune seule (laisser la suite propre)
        CONTROLLER.Character.doActionAfter( "event__adjustment__remove", { "param__adjustment__kind": "action", "param__adjustment__value": "Subsister" } );
        CONTROLLER.Character.doActionAfter( "event__adjustment__remove", { "param__adjustment__kind": "action", "param__adjustment__value": "Démoraliser" } );
        CONTROLLER.Character.doActionAfter( "event__adjustment__remove", { "param__adjustment__kind": "action", "param__adjustment__value": "Piller les Coffres" } );
        return TEST.wait();
    } ).then( function () {
        let _zone  = document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.CombatWindow.NAME + "'] .combat-actions-zone" );
        let _rows  = _zone.querySelectorAll( ".combat-action-row" );
        let _names = [];
        for ( let i = 0, _size_i = _rows.length; i < _size_i; i++ ) {
            _names.push( _rows[ i ].querySelector( ".combat-action-col-name" ).textContent );
        }
        TEST.ASSERT.ok( _names.indexOf( "Démoraliser" ) === -1, "Après retrait, Démoraliser ne devrait plus être affiché dans la vue active" );
        TEST.ASSERT.ok( _names.indexOf( "Piller les Coffres" ) === -1, "Après retrait, Piller les Coffres ne devrait plus être affiché en Exploration" );
        let _explo_after = _character.getCombat().getModeSections( _character, "exploration" );
        let _expected_after = _explo_after.length ? _explo_after[ 0 ].lines.length : 0;
        TEST.ASSERT.equal( _rows.length, _expected_after, "Après retraits, la vue Exploration devrait revenir à la carte commune disponible seule, obtenu : " + _rows.length + ", attendu : " + _expected_after );
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
