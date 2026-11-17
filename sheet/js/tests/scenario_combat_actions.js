"use strict";
/**
 * Scenario : COMBAT ACTIONS (chaîne, suite de scenario_combat)
 * Départ : fin du scenario COMBAT — Magicien niveau 5, onglet Combat actif,
 * inventaire vierge, aucun ajustement "action" posé dans la chaîne.
 * L'onglet Combat porte une zone Actions : la carte de base des actions de
 * combat (COMBAT.BASIC_ACTIONS, résolues dans le compendium scrapé) groupées
 * par section titrée, plus les ajustements "action" du personnage que le
 * compendium identifie comme des actions de combat (OBJECT.isCombatAction),
 * dédupliqués par nom. La zone est une colonne de 250px à droite de
 * l'onglet, sur toute sa hauteur ; le fond panneau vit sur la liste.
 * PAS de titre de zone (Round 88), mais une PARTIE par catégorie (bloc carte
 * séparé, titre centré doré). Chaque ligne : nom cliquable (traits en
 * infobulle) | coût en glyphe — le clic sur le nom ouvre la popup ACTION.
 *  1. La zone rend la carte de base en parties titrées (Frapper ◆ en
 *     Attaques, Aider ⟲ en Réactions...), en 250px sur toute la hauteur
 *     de l'onglet, texte lisible (style calculé).
 *  2. Le clic sur le nom de Frapper ouvre la popup ACTION (titre, coût ◆, trait Attaque) ;
 *     un clic dans le contenu ne referme pas, le clic sur le fond referme.
 *  3. Ajustements : "Démoraliser" (action de combat) apparaît dans la zone
 *     Combat ET dans la zone Actions du Général, "Subsister" (Intermède)
 *     reste dans le Général seul, "Frapper" en ajustement ne duplique pas la
 *     ligne de base ; les retraits rendent la zone à la carte de base seule.
 *  4. Save → relecture en mémoire : les actions du personnage sont
 *     restaurées dans les lignes de la zone.
 */
var TEST_combatActionsRow = function ( action_name ) {
    let _rows = document.querySelectorAll( ".property-tab-pane[data-name='" + CHARACTER.CombatWindow.NAME + "'] .combat-action-row" );
    for ( let i = 0, _size_i = _rows.length; i < _size_i; i++ ) {
        if ( _rows[ i ].querySelector( ".combat-action-col-name" ).textContent === action_name ) {
            return _rows[ i ];
        }
    }
    return null;
};

TEST.RUNNER.register( "[COMBAT ACTIONS] zone = sections titrées + carte de base", function () {
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.CombatWindow.NAME ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _character = CONTROLLER.Character.current_character;
        TEST.ASSERT.notNull( _character, "Pre-condition : personnage chargé" );
        if ( !_character ) {
            return;
        }
        let _pane      = document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.CombatWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Combat rendu" );
        if ( !_pane ) {
            return;
        }
        let _zone      = _pane.querySelector( ".combat-actions-zone" );
        TEST.ASSERT.notNull( _zone, "La zone Actions devrait être rendue dans l'onglet Combat" );
        if ( !_zone ) {
            return;
        }
        // Mise en page : colonne de 300px à droite sur TOUTE la hauteur de
        // l'onglet (même hauteur que la colonne principale), texte lisible
        let _main_column = _pane.querySelector( ".combat-main-column" );
        TEST.ASSERT.notNull( _main_column, "La colonne principale du Combat devrait exister" );
        TEST.ASSERT.equal( getComputedStyle( _zone ).width, "250px", "La zone Actions devrait faire 250px de large, obtenu : " + getComputedStyle( _zone ).width );
        // Pas de fond panneau sur la zone ni sur la liste (édition manuelle) :
        // seules les parties portent le fond carte --g-card, sans cadre sur la liste
        let _list            = _zone.querySelector( ".combat-actions-list" );
        TEST.ASSERT.equal( getComputedStyle( _list ).backgroundImage, "none", "La liste ne devrait pas porter de fond, obtenu : " + getComputedStyle( _list ).backgroundImage );
        TEST.ASSERT.equal( getComputedStyle( _list ).borderTopWidth, "0px", "La liste ne devrait pas avoir de cadre (bordure), obtenu : " + getComputedStyle( _list ).borderTopWidth );
        TEST.ASSERT.equal( getComputedStyle( _zone ).backgroundImage, "none", "La zone ne devrait pas porter de fond, obtenu : " + getComputedStyle( _zone ).backgroundImage );
        let _first_part      = _zone.querySelector( ".combat-actions-section" );
        TEST.ASSERT.ok( getComputedStyle( _first_part ).backgroundImage.indexOf( "rgb(61, 40, 23)" ) !== -1, "Chaque partie devrait porter le fond carte --g-card, obtenu : " + getComputedStyle( _first_part ).backgroundImage );
        if ( _main_column ) {
            TEST.ASSERT.equal( _zone.offsetHeight, _main_column.offsetHeight, "La zone Actions devrait s'étirer sur toute la hauteur de l'onglet (" + _main_column.offsetHeight + "px), obtenu : " + _zone.offsetHeight + "px" );
        }
        TEST.ASSERT.equal( _zone.querySelectorAll( ".combat-attack-info" ).length, 0, "La zone Actions ne devrait plus porter de \"?\"" );
        // Pas de titre de zone (Round 88) ; chaque catégorie est une PARTIE
        // (bloc carte séparé, pattern Équipement) avec titre centré en doré
        TEST.ASSERT.equal( _zone.querySelectorAll( ".combat-actions-title" ).length, 0, "La zone Actions ne devrait pas porter de titre de zone" );
        let _parts           = _zone.querySelectorAll( ".combat-actions-section" );
        TEST.ASSERT.equal( _parts.length, COMBAT.ACTION_SECTIONS.length, "Chaque catégorie devrait être une partie (bloc .combat-actions-section), attendu " + COMBAT.ACTION_SECTIONS.length + ", obtenu : " + _parts.length );
        TEST.ASSERT.equal( getComputedStyle( _zone.querySelector( ".combat-actions-list" ) ).gap, "12px", "Les parties devraient être aérées (gap 12px entre elles), obtenu : " + getComputedStyle( _zone.querySelector( ".combat-actions-list" ) ).gap );
        TEST.ASSERT.equal( getComputedStyle( _zone.querySelector( ".combat-actions-list" ) ).padding, "4px", "La liste devrait avoir un padding intérieur (aération, règle AGENTS.md), obtenu : " + getComputedStyle( _zone.querySelector( ".combat-actions-list" ) ).padding );
        TEST.ASSERT.equal( getComputedStyle( _parts[ 0 ] ).borderTopWidth, "1px", "Chaque partie devrait être un bloc carte bordé, obtenu : " + getComputedStyle( _parts[ 0 ] ).borderTopWidth );
        let _titles          = _zone.querySelectorAll( ".combat-actions-section-title" );
        let _expected_labels = COMBAT.ACTION_SECTIONS.map( function ( section_data ) { return section_data.label; } );
        let _labels          = [];
        for ( let i = 0, _size_i = _titles.length; i < _size_i; i++ ) {
            _labels.push( _titles[ i ].textContent );
        }
        TEST.ASSERT.deepEqual( _labels, _expected_labels, "Les titres de catégorie devraient être rendus dans l'ordre " + JSON.stringify( _expected_labels ) + ", obtenu : " + JSON.stringify( _labels ) );
        TEST.ASSERT.equal( getComputedStyle( _titles[ 0 ] ).textAlign, "center", "Le titre de chaque partie devrait être centré, obtenu : " + getComputedStyle( _titles[ 0 ] ).textAlign );
        TEST.ASSERT.equal( getComputedStyle( _titles[ 0 ] ).color, "rgb(240, 216, 144)", "Le titre de chaque partie devrait être en doré clair --c-text-gold, obtenu : " + getComputedStyle( _titles[ 0 ] ).color );
        // Le DOM rejoint le domaine : toutes les lignes calculées sont rendues
        let _domain_lines  = 0;
        let _sections      = _character.getCombat().getActionLines( _character );
        for ( let i = 0, _size_i = _sections.length; i < _size_i; i++ ) {
            _domain_lines += _sections[ i ].lines.length;
        }
        TEST.ASSERT.equal( _zone.querySelectorAll( ".combat-action-row" ).length, _domain_lines, "La zone devrait rendre toutes les lignes du domaine (" + _domain_lines + "), obtenu : " + _zone.querySelectorAll( ".combat-action-row" ).length );
        TEST.ASSERT.equal( _domain_lines, COMBAT.BASIC_ACTIONS.length, "Pré-condition : aucun ajustement action dans la chaîne, la carte de base seule devrait être rendue (" + COMBAT.BASIC_ACTIONS.length + " lignes)" );
        // Quelques lignes repères : section, coût, "?", infobulle des traits
        let _frapper = TEST_combatActionsRow( "Frapper" );
        TEST.ASSERT.notNull( _frapper, "La ligne Frapper devrait être rendue" );
        if ( _frapper ) {
            TEST.ASSERT.equal( _frapper.getAttribute( "data-section" ), "attack", "Frapper devrait être en section Attaques" );
            // Ordre des colonnes : nom à gauche, coût (nombre d'actions) à droite
            TEST.ASSERT.ok( _frapper.children[ 0 ].classList.contains( "combat-action-col-name" ), "La première colonne de la ligne devrait être le nom, obtenu : " + _frapper.children[ 0 ].className );
            TEST.ASSERT.ok( _frapper.children[ 1 ].classList.contains( "combat-action-col-cost" ), "La seconde colonne de la ligne devrait être le coût, obtenu : " + _frapper.children[ 1 ].className );
            TEST.ASSERT.equal( getComputedStyle( _frapper.querySelector( ".combat-action-col-cost" ) ).textAlign, "right", "Le coût devrait être aligné à droite" );
            TEST.ASSERT.equal( _frapper.querySelector( ".combat-action-col-cost" ).textContent, "◆", "Frapper devrait coûter ◆" );
            let _name_cell = _frapper.querySelector( ".combat-action-col-name" );
            TEST.ASSERT.equal( _name_cell.getAttribute( "data-value" ), "Frapper", "Le nom de l'action devrait porter son data-value (clic popup), obtenu : [" + _name_cell.getAttribute( "data-value" ) + "]" );
            TEST.ASSERT.ok( ( _name_cell.getAttribute( "onclick" ) || "" ).indexOf( "event__show_information__action" ) !== -1, "Le clic sur le nom devrait ouvrir la popup ACTION" );
            TEST.ASSERT.equal( _name_cell.getAttribute( "title" ), "Attaque", "L'infobulle de Frapper devrait porter son trait, obtenu : [" + _name_cell.getAttribute( "title" ) + "]" );
            // Lisibilité : le texte de la ligne est clair sur le fond marron
            TEST.ASSERT.equal( getComputedStyle( _name_cell ).color, "rgb(232, 212, 168)", "Le nom de l'action devrait être en --c-text #E8D4A8, obtenu : " + getComputedStyle( _name_cell ).color );
        }
        let _aider = TEST_combatActionsRow( "Aider" );
        TEST.ASSERT.notNull( _aider, "La ligne Aider devrait être rendue" );
        if ( _aider ) {
            TEST.ASSERT.equal( _aider.getAttribute( "data-section" ), "reaction", "Aider devrait être en section Réactions" );
            TEST.ASSERT.equal( _aider.querySelector( ".combat-action-col-cost" ).textContent, "⟲", "Aider devrait coûter ⟲" );
        }
        let _cover = TEST_combatActionsRow( "Mise à l'abri" );
        TEST.ASSERT.notNull( _cover, "La ligne Mise à l'abri devrait être rendue" );
        if ( _cover ) {
            TEST.ASSERT.equal( _cover.getAttribute( "data-section" ), "other", "Mise à l'abri (sans trait de famille) devrait être en section Autres" );
        }
        let _sneak = TEST_combatActionsRow( "Être furtif" );
        TEST.ASSERT.notNull( _sneak, "La ligne Être furtif devrait être rendue" );
        if ( _sneak ) {
            TEST.ASSERT.equal( _sneak.getAttribute( "data-section" ), "move", "Être furtif (Déplacement + Secret) devrait être en section Déplacements" );
        }
        let _seek = TEST_combatActionsRow( "Chercher" );
        TEST.ASSERT.notNull( _seek, "La ligne Chercher devrait être rendue" );
        if ( _seek ) {
            TEST.ASSERT.equal( _seek.getAttribute( "data-section" ), "stealth", "Chercher (Secret) devrait être en section Discrétion" );
        }
    } );
} );

TEST.RUNNER.register( "[COMBAT ACTIONS] clic sur le nom de Frapper = popup ACTION, le clic sur le fond referme", function () {
    let _row                           = TEST_combatActionsRow( "Frapper" );
    TEST.ASSERT.notNull( _row, "Pre-condition : ligne Frapper rendue" );
    if ( !_row ) {
        return;
    }
    _row.querySelector( ".combat-action-col-name" ).click();
    let _overlay                       = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
    TEST.ASSERT.notNull( _overlay, "Le clic sur le nom de Frapper devrait ouvrir la popup ACTION" );
    if ( !_overlay ) {
        return;
    }
    TEST.ASSERT.equal( _overlay.querySelector( ".popup-title" ).textContent, "Frapper", "La popup devrait titrer Frapper, obtenu : [" + _overlay.querySelector( ".popup-title" ).textContent + "]" );
    TEST.ASSERT.equal( _overlay.querySelector( ".popup-action-cost" ).textContent, "◆", "La popup devrait afficher le coût ◆, obtenu : [" + _overlay.querySelector( ".popup-action-cost" ).textContent + "]" );
    let _trait                         = _overlay.querySelector( ".popup-badge--trait" );
    TEST.ASSERT.notNull( _trait, "La popup devrait porter le badge de trait" );
    if ( _trait ) {
        TEST.ASSERT.equal( _trait.textContent, "Attaque", "Le trait de Frapper devrait être Attaque, obtenu : [" + _trait.textContent + "]" );
    }
    _overlay.querySelector( ".popup-title" ).click();
    TEST.ASSERT.notNull( document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" ), "Un clic dans le contenu de la popup ne devrait pas la refermer" );
    _overlay.click();
    TEST.ASSERT.equal( _overlay.getAttribute( "data-current-phase" ), "HIDDEN_TO_STRING", "Un clic sur le fond de l'overlay devrait refermer la popup" );
    TEST.ASSERT.equal( getComputedStyle( _overlay ).display, "none", "L'overlay refermé devrait être masqué, obtenu : " + getComputedStyle( _overlay ).display );
} );

TEST.RUNNER.register( "[COMBAT ACTIONS] ajustements : combat affichée, intermède exclue, pas de doublon", function () {
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage chargé" );
    if ( !_character ) {
        return;
    }
    CONTROLLER.Character.doActionAfter( "event__adjustment__add", { "param__adjustment__kind": "action", "param__adjustment__value": "Démoraliser", "param__adjustment__explanation": "test combat" } );
    CONTROLLER.Character.doActionAfter( "event__adjustment__add", { "param__adjustment__kind": "action", "param__adjustment__value": "Subsister", "param__adjustment__explanation": "test intermède" } );
    CONTROLLER.Character.doActionAfter( "event__adjustment__add", { "param__adjustment__kind": "action", "param__adjustment__value": "Frapper", "param__adjustment__explanation": "test doublon" } );
    return TEST.wait().then( function () {
        // Démoraliser (coût 1, pas de trait Exploration/Intermède) rejoint la zone Combat
        let _row                       = TEST_combatActionsRow( "Démoraliser" );
        TEST.ASSERT.notNull( _row, "L'ajustement action de combat Démoraliser devrait apparaître dans la zone Actions du Combat" );
        if ( _row ) {
            TEST.ASSERT.equal( _row.getAttribute( "data-section" ), "other", "Démoraliser (Audible, Concentration...) devrait être en section Autres" );
            TEST.ASSERT.equal( _row.querySelector( ".combat-action-col-cost" ).textContent, "◆", "Démoraliser devrait coûter ◆" );
            TEST.ASSERT.equal( _row.querySelector( ".combat-action-col-name" ).getAttribute( "data-value" ), "Démoraliser", "Le nom Démoraliser devrait être cliquable (popup ACTION)" );
        }
        // Subsister (Intermède) n'est pas une action de combat : zone Combat exclue
        TEST.ASSERT.isNull( TEST_combatActionsRow( "Subsister" ), "L'ajustement Subsister (Intermède) ne devrait PAS apparaître dans la zone Actions du Combat" );
        // Frapper en ajustement ne duplique pas la ligne de base
        let _frapper_rows              = document.querySelectorAll( ".property-tab-pane[data-name='" + CHARACTER.CombatWindow.NAME + "'] .combat-action-row" );
        let _frapper_count             = 0;
        for ( let i = 0, _size_i = _frapper_rows.length; i < _size_i; i++ ) {
            if ( _frapper_rows[ i ].querySelector( ".combat-action-col-name" ).textContent === "Frapper" ) {
                _frapper_count++;
            }
        }
        TEST.ASSERT.equal( _frapper_count, 1, "Frapper ne devrait apparaître qu'une seule fois dans la zone (pas de doublon avec l'ajustement), obtenu : " + _frapper_count );
        // La zone Actions du Général porte les trois ajustements (sans filtre combat)
        let _general_entries           = document.querySelectorAll( ".characters-sheet-content .area-actions .actions-list-entry" );
        let _general_values            = [];
        for ( let i = 0, _size_i = _general_entries.length; i < _size_i; i++ ) {
            _general_values.push( _general_entries[ i ].textContent );
        }
        TEST.ASSERT.ok( _general_values.indexOf( "Démoraliser" ) !== -1, "La zone Actions du Général devrait porter Démoraliser, obtenu : " + JSON.stringify( _general_values ) );
        TEST.ASSERT.ok( _general_values.indexOf( "Subsister" ) !== -1, "La zone Actions du Général devrait porter Subsister (même hors combat), obtenu : " + JSON.stringify( _general_values ) );
        // Retraits : la zone Combat revient à la carte de base seule
        CONTROLLER.Character.doActionAfter( "event__adjustment__remove", { "param__adjustment__kind": "action", "param__adjustment__value": "Démoraliser" } );
        CONTROLLER.Character.doActionAfter( "event__adjustment__remove", { "param__adjustment__kind": "action", "param__adjustment__value": "Subsister" } );
        CONTROLLER.Character.doActionAfter( "event__adjustment__remove", { "param__adjustment__kind": "action", "param__adjustment__value": "Frapper" } );
        return TEST.wait();
    } ).then( function () {
        TEST.ASSERT.isNull( TEST_combatActionsRow( "Démoraliser" ), "Après retrait, Démoraliser ne devrait plus être dans la zone Actions du Combat" );
        let _zone                      = document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.CombatWindow.NAME + "'] .combat-actions-zone" );
        TEST.ASSERT.equal( _zone.querySelectorAll( ".combat-action-row" ).length, COMBAT.BASIC_ACTIONS.length, "Après retraits, la zone devrait revenir à la carte de base seule (" + COMBAT.BASIC_ACTIONS.length + " lignes), obtenu : " + _zone.querySelectorAll( ".combat-action-row" ).length );
    } );
} );

TEST.RUNNER.register( "[COMBAT ACTIONS] save → relecture conserve les actions du personnage", function () {
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage chargé" );
    if ( !_character ) {
        return;
    }
    CONTROLLER.Character.doActionAfter( "event__adjustment__add", { "param__adjustment__kind": "action", "param__adjustment__value": "Démoraliser", "param__adjustment__explanation": "test combat" } );
    let _saved                         = _character.getDataToSave();
    let _reloaded                      = new CHARACTER.Current();
    _reloaded.updateData( _saved );
    let _found                         = false;
    let _sections                      = _reloaded.getCombat().getActionLines( _reloaded );
    for ( let i = 0, _size_i = _sections.length; i < _size_i; i++ ) {
        let _lines                     = _sections[ i ].lines;
        for ( let j = 0, _size_j = _lines.length; j < _size_j; j++ ) {
            if ( _lines[ j ].name === "Démoraliser" ) {
                _found                 = true;
            }
        }
    }
    TEST.ASSERT.ok( _found, "L'action Démoraliser devrait être restaurée dans les lignes de la zone après relecture du save" );
    // La suite reprend une feuille propre : l'ajustement de test repart
    CONTROLLER.Character.doActionAfter( "event__adjustment__remove", { "param__adjustment__kind": "action", "param__adjustment__value": "Démoraliser" } );
} );
