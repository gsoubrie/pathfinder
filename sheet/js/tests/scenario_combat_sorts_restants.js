"use strict";
/**
 * Scenario : COMBAT SORTS RESTANTS (chaîne, entre scenario_combat_modes et
 * scenario_combat_actions)
 * Départ : fin du scenario COMBAT MODES — Magicien niveau 5, onglet Combat
 * actif, mode Exploration, aucun sort au répertoire dans la chaîne.
 * En mode Exploration ou Intermède, la colonne principale masque les zones
 * Attaques et Incantation et affiche la zone « Sorts restants » : une ligne
 * par sort préparé NON dépensé (rang + nom + « ? » de popup spell), ou la
 * ligne « Aucun sort restant » quand rien n'est préparé. Un non-lanceur ne
 * voit jamais la zone (data-has-spells false). En mode Combats, Attaques et
 * Incantation reviennent et la zone sorts restants est masquée. L'état de
 * visibilité vit dans data-current-mode sur la colonne principale (posé au
 * rendu et à chaque clic de puce), lu par le CSS — jamais une classe.
 *  1. Mode Exploration par défaut : data-current-mode, display calculé des
 *     trois zones (Attaques/Incantation none, Sorts restants flex), titre,
 *     ligne vide (aucune préparation), domaine = tableau vide non null.
 *  2. Trois sorts ajoutés au répertoire puis préparés par le bus (Sommeil
 *     rang 1, Invisibilité rang 2, Boule de feu rang 3) : trois lignes dans
 *     l'ordre des rangs, nom + « ? » data-value, domaine croisé, le « ? »
 *     ouvre la popup spell (titre) refermée par uuid.
 *  3. Dépense du rang 1 (toggle_spent) : le sort quitte la liste (2 lignes),
 *     Repos long le rend (3 lignes).
 *  4. Puce Combats : Attaques/Incantation visibles (display flex), sorts
 *     restants masqués ; puce Intermède : retour à la vue Exploration ;
 *     retour sur Exploration.
 *  5. Nouveau jour : la liste se vide (ligne « Aucun sort restant ») ; les
 *     trois sorts sont retirés du répertoire — la feuille est laissée propre
 *     pour la suite (mode Exploration).
 */
var TEST_sortsRestantsPane = function () {
    return document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.CombatWindow.NAME + "']" );
};

var TEST_sortsRestantsModeTab = function ( mode_key ) {
    return TEST_sortsRestantsPane().querySelector( ".combat-mode-tab[data-mode='" + mode_key + "']" );
};

var TEST_sortsRestantsZone = function () {
    return TEST_sortsRestantsPane().querySelector( ".combat-spells-remaining-zone" );
};

var TEST_sortsRestantsLine = function ( name ) {
    let _lines = TEST_sortsRestantsZone().querySelectorAll( ".combat-spell-remaining-line" );
    for ( let i = 0, _size_i = _lines.length; i < _size_i; i++ ) {
        if ( _lines[ i ].querySelector( ".combat-spell-remaining-name" ).textContent === name ) {
            return _lines[ i ];
        }
    }
    return null;
};

TEST.RUNNER.register( "[COMBAT SORTS RESTANTS] Exploration = Attaques/Incantation masquées, sorts restants affichés", function () {
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.CombatWindow.NAME ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _character = CONTROLLER.Character.current_character;
        TEST.ASSERT.notNull( _character, "Pre-condition : personnage chargé" );
        let _pane = TEST_sortsRestantsPane();
        TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Combat rendu" );
        if ( !_pane || !_character ) {
            return;
        }
        let _main = _pane.querySelector( ".combat-main-column" );
        TEST.ASSERT.equal( _main.getAttribute( "data-current-mode" ), "exploration", "La colonne principale devrait porter data-current-mode=exploration (défaut), obtenu : [" + _main.getAttribute( "data-current-mode" ) + "]" );
        let _attacks_zone   = _pane.querySelector( ".combat-attacks-zone" );
        let _spellcast_zone = _pane.querySelector( ".combat-spellcasting-zone" );
        let _zone           = TEST_sortsRestantsZone();
        TEST.ASSERT.notNull( _attacks_zone, "Pre-condition : zone Attaques dans le DOM" );
        TEST.ASSERT.notNull( _spellcast_zone, "Pre-condition : zone Incantation dans le DOM" );
        TEST.ASSERT.notNull( _zone, "Pre-condition : zone Sorts restants dans le DOM" );
        if ( !_attacks_zone || !_spellcast_zone || !_zone ) {
            return;
        }
        TEST.ASSERT.equal( getComputedStyle( _attacks_zone ).display, "none", "En Exploration la zone Attaques devrait être masquée, display obtenu : " + getComputedStyle( _attacks_zone ).display );
        TEST.ASSERT.equal( getComputedStyle( _spellcast_zone ).display, "none", "En Exploration la zone Incantation devrait être masquée, display obtenu : " + getComputedStyle( _spellcast_zone ).display );
        // Le Magicien a des emplacements : la zone est visible, vide de sorts préparés
        TEST.ASSERT.equal( _zone.getAttribute( "data-has-spells" ), "true", "Un lanceur de sorts devrait porter data-has-spells=true" );
        TEST.ASSERT.equal( getComputedStyle( _zone ).display, "flex", "En Exploration la zone Sorts restants devrait être affichée, display obtenu : " + getComputedStyle( _zone ).display );
        TEST.ASSERT.equal( _zone.querySelector( ".combat-attacks-title" ).textContent, COMBAT.REMAINING_SPELLS_TITLE, "Le titre de la zone devrait être « Sorts restants »" );
        TEST.ASSERT.equal( _zone.querySelectorAll( ".combat-spell-remaining-line" ).length, 0, "Aucune ligne de sort ne devrait être rendue (rien de préparé), obtenu : " + _zone.querySelectorAll( ".combat-spell-remaining-line" ).length );
        TEST.ASSERT.equal( _zone.querySelector( ".combat-spell-remaining-empty" ).textContent, COMBAT.REMAINING_SPELLS_EMPTY, "La ligne vide devrait dire « Aucun sort restant »" );
        let _data = _character.getCombat().getRemainingSpellsData( _character );
        TEST.ASSERT.isArray( _data, "Le domaine devrait retourner un tableau (lanceur), pas null" );
        TEST.ASSERT.equal( _data ? _data.length : -1, 0, "Le domaine devrait calculer zéro sort restant (aucune préparation)" );
    } );
} );

TEST.RUNNER.register( "[COMBAT SORTS RESTANTS] sorts préparés non dépensés = une ligne par nom, « ? » popup", function () {
    let _character = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage chargé" );
    if ( !_character ) {
        return;
    }
    // Pré-condition : le Magicien niveau 5 ouvre les rangs 1 à 3
    let _slots_data = _character.getSpellSlots().getSlotsData( _character );
    TEST.ASSERT.notNull( _slots_data, "Pre-condition : le Magicien devrait avoir des emplacements de sorts" );
    if ( !_slots_data ) {
        return;
    }
    TEST.ASSERT.ok( _slots_data.ranks[ "1" ] && _slots_data.ranks[ "1" ].count >= 1, "Pre-condition : le rang 1 devrait être ouvert" );
    TEST.ASSERT.ok( _slots_data.ranks[ "2" ] && _slots_data.ranks[ "2" ].count >= 1, "Pre-condition : le rang 2 devrait être ouvert" );
    TEST.ASSERT.ok( _slots_data.ranks[ "3" ] && _slots_data.ranks[ "3" ].count >= 1, "Pre-condition : le rang 3 devrait être ouvert" );
    for ( let s = 0, _size_s = 3; s < _size_s; s++ ) {
        let _names = [ "Sommeil", "Invisibilité", "Boule de feu" ];
        TEST.ASSERT.equal( SPELLS.getNatureKeyOfName( _names[ s ] ), "spell", "Pre-condition : " + _names[ s ] + " devrait être un sort de rang du dataset" );
        CONTROLLER.Character.doActionAfter( "event__spell__add", { "param__spell__value": _names[ s ] } );
    }
    CONTROLLER.Character.doActionAfter( "event__daily_spell__select_choice", { "param__daily_spell__rank": "1", "param__daily_spell__index": "0", "param__choice_value": "Sommeil" } );
    CONTROLLER.Character.doActionAfter( "event__daily_spell__select_choice", { "param__daily_spell__rank": "2", "param__daily_spell__index": "0", "param__choice_value": "Invisibilité" } );
    CONTROLLER.Character.doActionAfter( "event__daily_spell__select_choice", { "param__daily_spell__rank": "3", "param__daily_spell__index": "0", "param__choice_value": "Boule de feu" } );
    return TEST.wait().then( function () {
        let _zone  = TEST_sortsRestantsZone();
        let _lines = _zone.querySelectorAll( ".combat-spell-remaining-line" );
        TEST.ASSERT.equal( _lines.length, 3, "Trois sorts restants devraient être listés, obtenu : " + _lines.length );
        let _expected = [ { "rank": 1, "name": "Sommeil" }, { "rank": 2, "name": "Invisibilité" }, { "rank": 3, "name": "Boule de feu" } ];
        for ( let i = 0; i < 3; i++ ) {
            TEST.ASSERT.equal( _lines[ i ].querySelector( ".combat-spell-remaining-rank" ).textContent, "Rang " + _expected[ i ].rank, "La ligne " + i + " devrait porter Rang " + _expected[ i ].rank );
            TEST.ASSERT.equal( _lines[ i ].querySelector( ".combat-spell-remaining-name" ).textContent, _expected[ i ].name, "La ligne " + i + " devrait porter le nom " + _expected[ i ].name );
            let _info = _lines[ i ].querySelector( ".combat-attack-info" );
            TEST.ASSERT.equal( _info ? _info.getAttribute( "data-value" ) : null, _expected[ i ].name, "Le ? de la ligne " + i + " devrait porter le nom en data-value" );
            TEST.ASSERT.ok( _info && ( _info.getAttribute( "onclick" ) || "" ).indexOf( "event__show_information__spell" ) !== -1, "Le ? de la ligne " + i + " devrait ouvrir la popup spell" );
        }
        // Le DOM croise le domaine
        TEST.ASSERT.deepEqual( _character.getCombat().getRemainingSpellsData( _character ), _expected, "Le domaine devrait calculer les trois sorts restants dans l'ordre des rangs" );
        // Le « ? » ouvre la popup spell, refermée par uuid
        let _sommeil_line = TEST_sortsRestantsLine( "Sommeil" );
        TEST.ASSERT.notNull( _sommeil_line, "La ligne Sommeil devrait exister" );
        if ( _sommeil_line ) {
            _sommeil_line.querySelector( ".combat-attack-info" ).click();
        }
        return TEST.wait();
    } ).then( function () {
        let _overlay = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
        TEST.ASSERT.notNull( _overlay, "La popup spell devrait s'ouvrir depuis le ? de la ligne" );
        if ( _overlay ) {
            TEST.ASSERT.equal( _overlay.querySelector( ".popup-title" ).textContent, "Sommeil", "La popup devrait porter le nom du sort, obtenu : [" + _overlay.querySelector( ".popup-title" ).textContent + "]" );
            CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": SPELLS.getSpellData( "Sommeil" )[ "id" ] } );
            TEST.ASSERT.equal( _overlay.getAttribute( "data-current-phase" ), "HIDDEN_TO_STRING", "La popup devrait être refermée par son uuid" );
        }
    } );
} );

TEST.RUNNER.register( "[COMBAT SORTS RESTANTS] dépense retire le sort, repos long le rend", function () {
    let _character = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage chargé" );
    if ( !_character ) {
        return;
    }
    CONTROLLER.Character.doActionAfter( "event__daily_spell__toggle_spent", { "param__daily_spell__rank": "1", "param__daily_spell__index": "0" } );
    return TEST.wait().then( function () {
        let _zone = TEST_sortsRestantsZone();
        TEST.ASSERT.equal( _zone.querySelectorAll( ".combat-spell-remaining-line" ).length, 2, "Après dépense du rang 1, deux sorts devraient rester, obtenu : " + _zone.querySelectorAll( ".combat-spell-remaining-line" ).length );
        TEST.ASSERT.isNull( TEST_sortsRestantsLine( "Sommeil" ), "Sommeil dépensé ne devrait plus être listé" );
        TEST.ASSERT.notNull( TEST_sortsRestantsLine( "Boule de feu" ), "Boule de feu devrait rester listée" );
        TEST.ASSERT.equal( _character.getCombat().getRemainingSpellsData( _character ).length, 2, "Le domaine devrait calculer 2 sorts restants" );
        CONTROLLER.Character.doActionAfter( "event__daily_spell__long_rest", {} );
        return TEST.wait();
    } ).then( function () {
        let _zone = TEST_sortsRestantsZone();
        TEST.ASSERT.equal( _zone.querySelectorAll( ".combat-spell-remaining-line" ).length, 3, "Après repos long, les trois sorts devraient revenir, obtenu : " + _zone.querySelectorAll( ".combat-spell-remaining-line" ).length );
        TEST.ASSERT.notNull( TEST_sortsRestantsLine( "Sommeil" ), "Sommeil devrait être de retour après le repos long" );
    } );
} );

TEST.RUNNER.register( "[COMBAT SORTS RESTANTS] Combats = Attaques/Incantation visibles + sorts restants masqués, Intermède idem Exploration", function () {
    let _tab = TEST_sortsRestantsModeTab( "combat" );
    TEST.ASSERT.notNull( _tab, "Pre-condition : puce Combats rendue" );
    if ( !_tab ) {
        return;
    }
    _tab.click();
    return TEST.wait().then( function () {
        let _pane = TEST_sortsRestantsPane();
        let _main = _pane.querySelector( ".combat-main-column" );
        TEST.ASSERT.equal( _main.getAttribute( "data-current-mode" ), "combat", "La colonne principale devrait porter data-current-mode=combat après le clic" );
        let _attacks_zone   = _pane.querySelector( ".combat-attacks-zone" );
        let _spellcast_zone = _pane.querySelector( ".combat-spellcasting-zone" );
        let _zone           = TEST_sortsRestantsZone();
        TEST.ASSERT.equal( getComputedStyle( _attacks_zone ).display, "flex", "En Combats la zone Attaques devrait être affichée, display obtenu : " + getComputedStyle( _attacks_zone ).display );
        TEST.ASSERT.equal( getComputedStyle( _spellcast_zone ).display, "flex", "En Combats la zone Incantation devrait être affichée (le Magicien porte ses rangs), display obtenu : " + getComputedStyle( _spellcast_zone ).display );
        TEST.ASSERT.equal( getComputedStyle( _zone ).display, "none", "En Combats la zone Sorts restants devrait être masquée, display obtenu : " + getComputedStyle( _zone ).display );
        TEST.ASSERT.ok( _attacks_zone.querySelectorAll( ".combat-attack-row:not(.combat-attack-row--header)" ).length >= 1, "La zone Attaques devrait porter ses lignes (mains nues)" );
        let _tab_intermede = TEST_sortsRestantsModeTab( "intermede" );
        TEST.ASSERT.notNull( _tab_intermede, "Pre-condition : puce Intermède rendue" );
        if ( _tab_intermede ) {
            _tab_intermede.click();
        }
        return TEST.wait();
    } ).then( function () {
        let _pane = TEST_sortsRestantsPane();
        let _main = _pane.querySelector( ".combat-main-column" );
        TEST.ASSERT.equal( _main.getAttribute( "data-current-mode" ), "intermede", "La colonne principale devrait porter data-current-mode=intermede" );
        TEST.ASSERT.equal( getComputedStyle( _pane.querySelector( ".combat-attacks-zone" ) ).display, "none", "En Intermède la zone Attaques devrait être masquée" );
        TEST.ASSERT.equal( getComputedStyle( _pane.querySelector( ".combat-spellcasting-zone" ) ).display, "none", "En Intermède la zone Incantation devrait être masquée" );
        TEST.ASSERT.equal( getComputedStyle( TEST_sortsRestantsZone() ).display, "flex", "En Intermède la zone Sorts restants devrait être affichée" );
        TEST.ASSERT.equal( TEST_sortsRestantsZone().querySelectorAll( ".combat-spell-remaining-line" ).length, 3, "Les trois sorts restants devraient toujours être listés en Intermède" );
        let _tab_explo = TEST_sortsRestantsModeTab( "exploration" );
        if ( _tab_explo ) {
            _tab_explo.click();
        }
        return TEST.wait();
    } ).then( function () {
        let _pane = TEST_sortsRestantsPane();
        TEST.ASSERT.equal( _pane.querySelector( ".combat-main-column" ).getAttribute( "data-current-mode" ), "exploration", "Retour sur Exploration : data-current-mode=exploration" );
        TEST.ASSERT.equal( getComputedStyle( _pane.querySelector( ".combat-attacks-zone" ) ).display, "none", "Retour sur Exploration : Attaques masquées" );
        TEST.ASSERT.equal( getComputedStyle( TEST_sortsRestantsZone() ).display, "flex", "Retour sur Exploration : Sorts restants affichés" );
    } );
} );

TEST.RUNNER.register( "[COMBAT SORTS RESTANTS] nouveau jour vide la liste, retraits : feuille laissée propre", function () {
    let _character = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage chargé" );
    if ( !_character ) {
        return;
    }
    CONTROLLER.Character.doActionAfter( "event__daily_spell__new_day", {} );
    return TEST.wait().then( function () {
        let _zone = TEST_sortsRestantsZone();
        TEST.ASSERT.equal( _zone.querySelectorAll( ".combat-spell-remaining-line" ).length, 0, "Après nouveau jour, aucune ligne de sort, obtenu : " + _zone.querySelectorAll( ".combat-spell-remaining-line" ).length );
        TEST.ASSERT.equal( _zone.querySelector( ".combat-spell-remaining-empty" ).textContent, COMBAT.REMAINING_SPELLS_EMPTY, "La ligne vide devrait revenir après le nouveau jour" );
        TEST.ASSERT.equal( _character.getCombat().getRemainingSpellsData( _character ).length, 0, "Le domaine devrait calculer zéro sort restant" );
        // La suite reprend un répertoire VIERGE (règle : laisser la suite propre)
        CONTROLLER.Character.doActionAfter( "event__spell__remove", { "param__spell__value": "Sommeil" } );
        CONTROLLER.Character.doActionAfter( "event__spell__remove", { "param__spell__value": "Invisibilité" } );
        CONTROLLER.Character.doActionAfter( "event__spell__remove", { "param__spell__value": "Boule de feu" } );
        return TEST.wait();
    } ).then( function () {
        TEST.ASSERT.equal( _character.getSpells().getSize(), 0, "Le répertoire devrait être revenu à vide, obtenu : " + _character.getSpells().getSize() );
        TEST.ASSERT.equal( TEST_sortsRestantsPane().querySelector( ".combat-main-column" ).getAttribute( "data-current-mode" ), "exploration", "Le mode actif devrait rester Exploration pour la suite" );
    } );
} );
