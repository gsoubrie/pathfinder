"use strict";
/**
 * Scenario : PREPARATION DES SORTS (suite indépendante, RESET — placée après
 * scenario_bibliotheque, elle re-set la feuille elle-même).
 * La zone "Préparation du jour" de l'onglet Sorts : une partie par rang
 * d'emplacement ouvert (calcul SpellSlots), une ligne par emplacement avec
 * sa coche de dépense, son sélecteur de sort (composant lib, options = sorts
 * de rang du répertoire de rang <= rang de l'emplacement, sort surclassé
 * autorisé et libellé "(rang N)", même sort dans plusieurs emplacements,
 * jamais de tour de magie/focalisé/rituel/homebrew) et son "?" (popup spell).
 * Le badge de l'onglet Sorts porte les emplacements laissés vides, les lignes
 * du répertoire portent le badge "Préparé ×N". "Repos long" réallume les
 * dépenses sans toucher à la préparation, "Nouveau jour" vide tout. Un sort
 * retiré du répertoire quitte la préparation. Save → load relit préparation
 * et dépenses.
 * 1. Page vide : aucune zone (pas de lanceur), badge de l'onglet vide.
 * 2. Magicien niveau 5 + 6 sorts au répertoire : la zone rend une partie par
 *    rang ouvert avec le compte calculé du domaine, les options du rang 3
 *    croisées (5 sorts + option vide, pas de Bouclier).
 * 3. Gestes réels : choix par clic d'option (Boule de feu rang 3, Sommeil
 *    surclassé en rang 2, Boule de feu à nouveau en rang 3), toggle du
 *    sélecteur, "?" par option → popup spell, domaine + headers + badge
 *    "Préparé ×2" + badge d'onglet à total-3.
 * 4. Coche de dépense (data-spent, titre "dépensé"), Repos long réallume,
 *    save → load relit, retrait de Sommeil le fait quitter la préparation,
 *    Nouveau jour vide tout.
 */

function TEST_prepPane() {
    return document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.SpellsWindow.NAME + "']" );
}

function TEST_prepSlot( rank, index ) {
    return TEST_prepPane().querySelector( ".spells-preparation-slot[data-rank='" + rank + "'][data-index='" + index + "']" );
}

function TEST_prepClickOption( rank, index, value ) {
    let _slot   = TEST_prepSlot( rank, index );
    let _option = _slot ? _slot.querySelector( ".single-select-option[data-value=" + JSON.stringify( value ) + "]" ) : null;
    if ( _option ) {
        _option.click();
    }
    return !!_option;
}

function TEST_prepSlotsData() {
    let _character = CONTROLLER.Character.current_character;
    return _character.getSpellSlots().getSlotsData( _character );
}

function TEST_prepTotalSlots( slots_data ) {
    let _total = 0;
    let _ranks = Object.keys( slots_data.ranks );
    for ( let i = 0, _size_i = _ranks.length; i < _size_i; i++ ) {
        _total += slots_data.ranks[ _ranks[ i ] ].count;
    }
    return _total;
}

function TEST_prepTabCounter() {
    return document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.SpellsWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
}

TEST.RUNNER.register( "[PREPARATION] page vide = aucune zone de préparation", function () {
    TEST.RESET.sheet();
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.SpellsWindow.NAME ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _pane = TEST_prepPane();
        TEST.ASSERT.notNull( _pane, "Le panneau Sorts devrait exister" );
        if ( !_pane ) {
            return;
        }
        TEST.ASSERT.isNull( _pane.querySelector( ".spells-preparation" ), "Aucune zone de préparation sans lanceur (pas d'emplacements)" );
        let _counter = TEST_prepTabCounter();
        TEST.ASSERT.ok( !_counter || !_counter.getAttribute( "data-number" ), "Le badge de l'onglet Sorts devrait etre vide sans lanceur, obtenu : [" + ( _counter ? _counter.getAttribute( "data-number" ) : "null" ) + "]" );
    } );
} );

TEST.RUNNER.register( "[PREPARATION] Magicien 5 + répertoire = zone par rang, options croisées", function () {
    let _character = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    // Setup : Magicien niveau 5 (la validation pose le niveau 1, 4 prises)
    TEST_openClassPopup();
    return TEST.clickTab( "body > .popup", "Magicien" ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        TEST.ASSERT.equal( _character.getClasses().getLevel(), 1, "Magicien niveau 1 pose par la validation, obtenu : " + _character.getClasses().getLevel() );
        for ( let i = 0; i < 4; i++ ) {
            _character.doActionAfter( "event__level_up__take_level", { "param__class_name": "Magicien" } );
        }
        TEST.ASSERT.equal( _character.getClasses().getLevel(), 5, "Magicien niveau 5, obtenu : " + _character.getClasses().getLevel() );
        // Répertoire par le plat : 5 sorts de rang + 1 tour de magie
        let _names = [ "Boule de feu", "Éclair", "Invisibilité", "Sommeil", "Guérison", "Bouclier" ];
        for ( let i = 0, _size_i = _names.length; i < _size_i; i++ ) {
            CONTROLLER.Character.doActionAfter( "event__spell__add", { "param__spell__value": _names[ i ] } );
        }
        TEST.ASSERT.equal( _character.getSpells().getSize(), 6, "6 sorts au répertoire, obtenu : " + _character.getSpells().getSize() );
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.SpellsWindow.NAME );
    } ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _pane       = TEST_prepPane();
        let _slots_data = TEST_prepSlotsData();
        TEST.ASSERT.notNull( _slots_data, "Pre-condition : le Magicien 5 devrait avoir des emplacements" );
        if ( !_pane || !_slots_data ) {
            return;
        }
        let _area = _pane.querySelector( ".spells-preparation" );
        TEST.ASSERT.notNull( _area, "La zone Préparation du jour devrait etre rendue" );
        if ( !_area ) {
            return;
        }
        TEST.ASSERT.equal( _area.querySelector( ".spells-preparation-title" ).textContent, "Préparation du jour", "Le titre de la zone, obtenu : [" + _area.querySelector( ".spells-preparation-title" ).textContent + "]" );
        let _buttons = _area.querySelectorAll( ".spells-preparation-button" );
        TEST.ASSERT.equal( _buttons.length, 2, "Les deux boutons Repos long / Nouveau jour, obtenu : " + _buttons.length );
        TEST.ASSERT.equal( _buttons[ 0 ].textContent, "Repos long", "Le premier bouton devrait etre Repos long, obtenu : [" + _buttons[ 0 ].textContent + "]" );
        TEST.ASSERT.equal( _buttons[ 1 ].textContent, "Nouveau jour", "Le second bouton devrait etre Nouveau jour, obtenu : [" + _buttons[ 1 ].textContent + "]" );
        // Une partie par rang ouvert, avec le compte calculé du domaine
        let _ranks   = Object.keys( _slots_data.ranks ).sort( function ( a, b ) { return parseInt( a, 10 ) - parseInt( b, 10 ); } );
        let _sections = _area.querySelectorAll( ".spells-preparation-rank" );
        TEST.ASSERT.equal( _sections.length, _ranks.length, "Une partie par rang ouvert (" + _ranks.join( "," ) + "), obtenu : " + _sections.length );
        for ( let r = 0, _size_r = _ranks.length; r < _size_r; r++ ) {
            let _rank   = _ranks[ r ];
            let _count  = _slots_data.ranks[ _rank ].count;
            let _sec    = _area.querySelector( ".spells-preparation-rank[data-rank='" + _rank + "']" );
            TEST.ASSERT.notNull( _sec, "La partie du rang " + _rank + " devrait exister" );
            if ( _sec ) {
                TEST.ASSERT.equal( _sec.querySelectorAll( ".spells-preparation-slot" ).length, _count, "Le rang " + _rank + " devrait porter " + _count + " lignes, obtenu : " + _sec.querySelectorAll( ".spells-preparation-slot" ).length );
                TEST.ASSERT.ok( _sec.querySelector( ".spells-preparation-rank-title" ).textContent.indexOf( "Rang " + _rank + " — " + _count ) === 0, "Le titre du rang " + _rank + " devrait porter le compte, obtenu : [" + _sec.querySelector( ".spells-preparation-rank-title" ).textContent + "]" );
            }
        }
        // Options du rang 3 calculées : les 5 sorts de rang du répertoire
        // (rang <= 3), PAS le tour de magie Bouclier, tri rang puis nom
        let _expected = [ "Guérison", "Sommeil", "Invisibilité", "Boule de feu", "Éclair" ];
        let _slot     = TEST_prepSlot( "3", 0 );
        let _options  = _slot.querySelectorAll( ".single-select-option" );
        TEST.ASSERT.equal( _options.length, _expected.length + 1, "Le sélecteur du rang 3 devrait porter l'option vide + les 5 sorts, obtenu : " + _options.length );
        for ( let i = 0; i < _expected.length; i++ ) {
            TEST.ASSERT.equal( _options[ i + 1 ].getAttribute( "data-value" ), _expected[ i ], "Option " + ( i + 1 ) + " du rang 3, obtenu : [" + _options[ i + 1 ].getAttribute( "data-value" ) + "]" );
        }
        TEST.ASSERT.isNull( _slot.querySelector( ".single-select-option[data-value='Bouclier']" ), "Un tour de magie ne devrait jamais etre proposé à la préparation" );
        // Le "?" par option non vide (classe de la lib), absent de l'option vide
        TEST.ASSERT.notNull( _slot.querySelector( ".single-select-option[data-value='Boule de feu'] .level-up-row-info" ), "Chaque option non vide devrait porter son ?" );
        TEST.ASSERT.isNull( _slot.querySelector( ".single-select-option[data-value=''] .level-up-row-info" ), "L'option vide ne porte pas de ?" );
        // Le "?" à côté du sélecteur masqué sans sélection (data-value vide)
        let _info = _slot.querySelector( ".spells-preparation-info" );
        TEST.ASSERT.equal( _info.getAttribute( "data-value" ), "", "Le ? à côté du sélecteur devrait etre sans valeur, obtenu : [" + _info.getAttribute( "data-value" ) + "]" );
        TEST.ASSERT.equal( getComputedStyle( _info ).display, "none", "Le ? à côté du sélecteur devrait etre masqué sans sélection" );
        // Badge de l'onglet = tous les emplacements vides au départ
        let _total   = TEST_prepTotalSlots( _slots_data );
        let _counter = TEST_prepTabCounter();
        return TEST.waitCounterValue( _counter, "" + _total ).then( function () {
            TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), "" + _total, "Le badge de l'onglet devrait valoir tous les emplacements vides (" + _total + "), obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );
        } );
    } );
} );

TEST.RUNNER.register( "[PREPARATION] choix par gestes réels : surclassé, doublon, badges, popup", function () {
    let _character = CONTROLLER.Character.current_character;
    let _pane      = TEST_prepPane();
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Sorts ouvert" );
    if ( !_pane || !_character ) {
        return;
    }
    let _daily = _character.getDailyPreparation();
    // Le toggle du sélecteur : clic header → ouvert, second clic → fermé
    let _header = TEST_prepSlot( "3", 0 ).querySelector( ".single-select-selector" );
    _header.click();
    let _container = TEST_prepSlot( "3", 0 ).querySelector( ".single-select-container" );
    TEST.ASSERT.equal( _container.getAttribute( "data-state-selector" ), "1", "Le premier clic devrait ouvrir la liste, obtenu : [" + _container.getAttribute( "data-state-selector" ) + "]" );
    _header.click();
    TEST.ASSERT.equal( _container.getAttribute( "data-state-selector" ), "0", "Le second clic devrait refermer la liste, obtenu : [" + _container.getAttribute( "data-state-selector" ) + "]" );
    // Le "?" d'une option ouvre la popup spell (overlay RUNNING), refermée par uuid
    TEST_prepSlot( "3", 0 ).querySelector( ".single-select-option[data-value='Boule de feu'] .level-up-row-info" ).click();
    let _overlay = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
    TEST.ASSERT.notNull( _overlay, "La popup spell devrait s'ouvrir depuis le ? d'une option" );
    if ( _overlay ) {
        TEST.ASSERT.equal( _overlay.querySelector( ".popup-title" ).textContent, "Boule de feu", "La popup devrait porter le nom du sort, obtenu : [" + _overlay.querySelector( ".popup-title" ).textContent + "]" );
        CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": SPELLS.getSpellData( "Boule de feu" )[ "id" ] } );
        TEST.ASSERT.equal( _overlay.getAttribute( "data-current-phase" ), "HIDDEN_TO_STRING", "La popup devrait etre refermée par son uuid" );
    }
    // Choix 1 : Boule de feu dans le rang 3, emplacement 0 (clic réel de l'option)
    TEST.ASSERT.ok( TEST_prepClickOption( "3", 0, "Boule de feu" ), "L'option Boule de feu devrait exister dans le rang 3" );
    return TEST.wait().then( function () {
        TEST.ASSERT.equal( _daily.getSlotValue( "3", 0 ), "Boule de feu", "Le domaine devrait porter le choix du rang 3, obtenu : [" + _daily.getSlotValue( "3", 0 ) + "]" );
        let _slot = TEST_prepSlot( "3", 0 );
        TEST.ASSERT.equal( _slot.querySelector( ".single-select-selector-label" ).textContent, "Boule de feu", "Le header du sélecteur devrait afficher le sort, obtenu : [" + _slot.querySelector( ".single-select-selector-label" ).textContent + "]" );
        // Le "?" à côté du sélecteur devient visible et porte la valeur
        let _info = _slot.querySelector( ".spells-preparation-info" );
        TEST.ASSERT.equal( _info.getAttribute( "data-value" ), "Boule de feu", "Le ? à côté devrait porter la valeur choisie" );
        TEST.ASSERT.notEqual( getComputedStyle( _info ).display, "none", "Le ? à côté devrait etre visible avec une sélection" );
        // Choix 2 : Sommeil (rang 1) surclassé dans le rang 2, libellé "(rang 1)"
        let _rank2_option = TEST_prepSlot( "2", 0 ).querySelector( ".single-select-option[data-value='Sommeil']" );
        TEST.ASSERT.notNull( _rank2_option, "Sommeil devrait etre proposé dans le rang 2 (sort surclassé autorisé)" );
        if ( _rank2_option ) {
            TEST.ASSERT.equal( _rank2_option.querySelector( ".single-select-option-label" ).textContent, "Sommeil (rang 1)", "Le libellé d'un sort surclassé devrait porter son rang, obtenu : [" + _rank2_option.querySelector( ".single-select-option-label" ).textContent + "]" );
            _rank2_option.click();
        }
        return TEST.wait();
    } ).then( function () {
        TEST.ASSERT.equal( _daily.getSlotValue( "2", 0 ), "Sommeil", "Le domaine devrait porter le sort surclassé en rang 2, obtenu : [" + _daily.getSlotValue( "2", 0 ) + "]" );
        // Choix 3 : le MEME sort dans un second emplacement du rang 3 (pas de dédup)
        TEST.ASSERT.ok( TEST_prepClickOption( "3", 1, "Boule de feu" ), "Boule de feu devrait rester proposed dans le second emplacement du rang 3 (pas de dédup)" );
        return TEST.wait();
    } ).then( function () {
        TEST.ASSERT.equal( _daily.getSlotValue( "3", 1 ), "Boule de feu", "Le doublon devrait etre accepté, obtenu : [" + _daily.getSlotValue( "3", 1 ) + "]" );
        // Le badge du répertoire compte la préparation : Boule de feu ×2
        let _entry = TEST_prepPane().querySelector( ".spells-entry[data-value='Boule de feu'] .spells-entry-prepared" );
        TEST.ASSERT.notNull( _entry, "La ligne Boule de feu du répertoire devrait porter le badge Préparé" );
        if ( _entry ) {
            TEST.ASSERT.equal( _entry.textContent, "Préparé ×2", "Le badge devrait compter 2 emplacements, obtenu : [" + _entry.textContent + "]" );
        }
        let _sommeil_badge = TEST_prepPane().querySelector( ".spells-entry[data-value='Sommeil'] .spells-entry-prepared" );
        TEST.ASSERT.notNull( _sommeil_badge, "La ligne Sommeil devrait porter le badge Préparé ×1" );
        if ( _sommeil_badge ) {
            TEST.ASSERT.equal( _sommeil_badge.textContent, "Préparé ×1", "Le badge de Sommeil devrait valoir ×1, obtenu : [" + _sommeil_badge.textContent + "]" );
        }
        // Le badge de l'onglet a perdu les 3 emplacements remplis
        let _slots_data = TEST_prepSlotsData();
        let _expected   = TEST_prepTotalSlots( _slots_data ) - 3;
        let _counter    = TEST_prepTabCounter();
        return TEST.waitCounterValue( _counter, "" + _expected ).then( function () {
            TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), "" + _expected, "Le badge de l'onglet devrait valoir total-3 (" + _expected + "), obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );
        } );
    } );
} );

TEST.RUNNER.register( "[PREPARATION] dépense + repos long + save/load + retrait + nouveau jour", function () {
    let _character = CONTROLLER.Character.current_character;
    let _pane      = TEST_prepPane();
    TEST.ASSERT.notNull( _pane && _character, "Pre-condition : panneau ouvert, personnage charge" );
    if ( !_pane || !_character ) {
        return;
    }
    let _daily = _character.getDailyPreparation();
    TEST.ASSERT.equal( _daily.getSlotValue( "3", 0 ), "Boule de feu", "Pre-condition : Boule de feu en rang 3, obtenu : [" + _daily.getSlotValue( "3", 0 ) + "]" );
    // La coche de dépense : un emplacement vide ne se coche pas, un rempli oui
    TEST_prepSlot( "3", 0 ).querySelector( ".spells-preparation-spent" ).click();
    return TEST.wait().then( function () {
        TEST.ASSERT.ok( _daily.isSpent( "3", 0 ), "L'emplacement rang 3 #0 devrait etre dépensé dans le domaine" );
        TEST.ASSERT.equal( TEST_prepSlot( "3", 0 ).getAttribute( "data-spent" ), "1", "Le data-spent devrait suivre au DOM, obtenu : [" + TEST_prepSlot( "3", 0 ).getAttribute( "data-spent" ) + "]" );
        let _title = TEST_prepPane().querySelector( ".spells-preparation-rank[data-rank='3'] .spells-preparation-rank-title" );
        TEST.ASSERT.ok( _title.textContent.indexOf( "1 dépensé" ) !== -1, "Le titre du rang 3 devrait citer la dépense, obtenu : [" + _title.textContent + "]" );
        // Un emplacement vide ne se coche pas
        let _empty_index = _daily.getSlotValue( "3", 0 ) ? 1 : 0;
        // (le rang 3 a ses deux emplacements remplis : on teste sur le rang 1)
        let _empty_slot = TEST_prepSlot( "1", 0 );
        TEST.ASSERT.equal( _daily.getSlotValue( "1", 0 ), "", "Pre-condition : rang 1 #0 vide" );
        _empty_slot.querySelector( ".spells-preparation-spent" ).click();
        return TEST.wait();
    } ).then( function () {
        TEST.ASSERT.notOk( _daily.isSpent( "1", 0 ), "Un emplacement sans sort ne devrait pas se cocher" );
        // Save → load en mémoire : préparation et dépenses survivent
        let _reloaded = new CHARACTER.Current();
        _reloaded.updateData( _character.getDataToSave() );
        let _reloaded_daily = _reloaded.getDailyPreparation();
        TEST.ASSERT.equal( _reloaded_daily.getSlotValue( "3", 0 ), "Boule de feu", "La relecture devrait rendre le choix du rang 3, obtenu : [" + _reloaded_daily.getSlotValue( "3", 0 ) + "]" );
        TEST.ASSERT.equal( _reloaded_daily.getSlotValue( "3", 1 ), "Boule de feu", "La relecture devrait rendre le doublon, obtenu : [" + _reloaded_daily.getSlotValue( "3", 1 ) + "]" );
        TEST.ASSERT.equal( _reloaded_daily.getSlotValue( "2", 0 ), "Sommeil", "La relecture devrait rendre le sort surclassé, obtenu : [" + _reloaded_daily.getSlotValue( "2", 0 ) + "]" );
        TEST.ASSERT.ok( _reloaded_daily.isSpent( "3", 0 ), "La relecture devrait rendre la dépense" );
        TEST.ASSERT.notOk( _reloaded_daily.isSpent( "1", 0 ), "La relecture ne devrait pas inventer de dépense" );
        // Repos long : réallume les dépenses, la préparation reste
        TEST_prepPane().querySelectorAll( ".spells-preparation-button" )[ 0 ].click();
        return TEST.wait();
    } ).then( function () {
        TEST.ASSERT.notOk( _daily.isSpent( "3", 0 ), "Le repos long devrait réallumer l'emplacement dépensé" );
        TEST.ASSERT.equal( _daily.getSlotValue( "3", 0 ), "Boule de feu", "Le repos long devrait GARDER la préparation, obtenu : [" + _daily.getSlotValue( "3", 0 ) + "]" );
        TEST.ASSERT.equal( TEST_prepSlot( "3", 0 ).getAttribute( "data-spent" ), "0", "Le data-spent devrait etre revenu à 0 au DOM" );
        // Retirer Sommeil du répertoire : il quitte la préparation au rendu
        CONTROLLER.Character.doActionAfter( "event__spell__remove", { "param__spell__value": "Sommeil" } );
        return TEST.wait();
    } ).then( function () {
        TEST.ASSERT.equal( _daily.getSlotValue( "2", 0 ), "", "Un sort retiré du répertoire devrait quitter la préparation, obtenu : [" + _daily.getSlotValue( "2", 0 ) + "]" );
        TEST.ASSERT.isNull( TEST_prepPane().querySelector( ".spells-entry[data-value='Sommeil']" ), "La ligne Sommeil devrait avoir quitté le répertoire" );
        // Nouveau jour : tout est vidé, le badge de l'onglet revient au total
        TEST_prepPane().querySelectorAll( ".spells-preparation-button" )[ 1 ].click();
        return TEST.wait();
    } ).then( function () {
        TEST.ASSERT.equal( _daily.getSlotValue( "3", 0 ), "", "Nouveau jour devrait vider la préparation, obtenu : [" + _daily.getSlotValue( "3", 0 ) + "]" );
        TEST.ASSERT.equal( Object.keys( _daily.getPreparedCounts() ).length, 0, "Plus aucun badge de préparation, obtenu : " + JSON.stringify( _daily.getPreparedCounts() ) );
        TEST.ASSERT.isNull( TEST_prepPane().querySelector( ".spells-entry-prepared" ), "Plus aucun badge Préparé dans le répertoire au DOM" );
        let _slots_data = TEST_prepSlotsData();
        let _total      = TEST_prepTotalSlots( _slots_data );
        let _counter    = TEST_prepTabCounter();
        return TEST.waitCounterValue( _counter, "" + _total ).then( function () {
            TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), "" + _total, "Le badge de l'onglet devrait revenir au total (" + _total + "), obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );
        } );
    } );
} );
