"use strict";
/**
 * Scenario : ARGENT (suite independante, RESET — placee APRES scenario_stuffs)
 * La partie Argent en tete de l'onglet Équipement : le total converti dans
 * le titre, un bloc de solde par emplacement (Équipé / Sac à dos /
 * Entreposé — les puces de filtre s'appliquent comme aux sections), les
 * 4 monnaies (pp/po/pa/pc) en inputs éditables, et un journal append-only :
 * la ligne d'ajout applique son delta au solde de l'emplacement choisi.
 * 1. Page vide, onglet Équipement : zone rendue (titre « 0 pc », 3 blocs
 *    x 4 inputs à 0, ligne d'ajout, journal vide).
 * 2. Édition du solde : l'input pp d'Équipé passe à 2 (change) → domaine,
 *    titre « 2 pp », input relu à 2 après le refresh, clé « coins » dans
 *    le save.
 * 3. Journal : ligne d'ajout (Sac à dos, po +2, « Butin du gobelin », clic
 *    +) → solde Sac à dos po = 2, entrée rendue (date, emplacement, « +2 po »,
 *    libellé), titre « 2 pp 2 po », DOM = domaine.
 * 4. Filtre : puce « Entreposé » → seul le bloc Entreposé reste, les entrées
 *    journal des autres emplacements sont masquées, la ligne d'ajout reste ;
 *    retour « Tous ».
 * 5. Dépense clampe à 0 (journal −5 po sur Sac à dos qui a 2 → 0, entrée
 *    « −5 po » rendue), puis save → load (relecture mémoire) : soldes et
 *    journal restaurés. RESET final pour laisser la suite propre.
 */
function TEST_coinsPane() {
    return document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "']" );
}

function TEST_coinsInput( location, coin ) {
    return TEST_coinsPane().querySelector( ".stuffs-coins-input[data-location='" + location + "'][data-coin='" + coin + "']" );
}

function TEST_coinsSetInput( location, coin, value ) {
    let _input = TEST_coinsInput( location, coin );
    if ( !_input ) {
        return;
    }
    _input.value = value;
    _input.dispatchEvent( new Event( "change" ) );
}

function TEST_coinsAddJournal( location, coin_key, amount, label ) {
    let _row = TEST_coinsPane().querySelector( ".stuffs-coins-add" );
    if ( !_row ) {
        return;
    }
    _row.querySelector( ".stuffs-coins-add-location" ).value = location;
    let _inputs = _row.querySelectorAll( ".stuffs-coins-add-amount" );
    for ( let i = 0, _size_i = _inputs.length; i < _size_i; i++ ) {
        _inputs[ i ].value = _inputs[ i ].getAttribute( "data-coin" ) === coin_key ? "" + amount : "";
    }
    _row.querySelector( ".stuffs-coins-add-label" ).value = label;
    _row.querySelector( ".stuffs-coins-add-button" ).click();
}

TEST.RUNNER.register( "[ARGENT] zone rendue sur page vide : titre 0 pc, 3 blocs x 4 inputs, ligne d'ajout, journal vide", function () {
    TEST.RESET.sheet();
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.StuffsWindow.NAME ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _zone = TEST_coinsPane().querySelector( ".stuffs-coins-zone" );
        TEST.ASSERT.notNull( _zone, "La zone Argent devrait être rendue en tête de l'onglet Équipement" );
        if ( !_zone ) {
            return;
        }
        TEST.ASSERT.equal( _zone.querySelector( ".stuffs-coins-title" ).textContent, "Argent — total : 0 pc", "Le titre devrait porter le total converti (0 pc sur page vide), obtenu : [" + _zone.querySelector( ".stuffs-coins-title" ).textContent + "]" );
        let _rows = _zone.querySelectorAll( ".stuffs-coins-location" );
        TEST.ASSERT.equal( _rows.length, STUFF.LOCATIONS.length, "Un bloc de solde par emplacement devrait être rendu (" + STUFF.LOCATIONS.length + "), obtenu : " + _rows.length );
        for ( let i = 0, _size_i = _rows.length; i < _size_i; i++ ) {
            let _inputs = _rows[ i ].querySelectorAll( ".stuffs-coins-input" );
            TEST.ASSERT.equal( _inputs.length, STUFF.COINS.length, "Chaque bloc devrait porter 4 inputs de monnaies, obtenu : " + _inputs.length );
            for ( let c = 0, _size_c = _inputs.length; c < _size_c; c++ ) {
                TEST.ASSERT.equal( _inputs[ c ].value, "0", "Le solde devrait être à 0 sur page vierge (" + _rows[ i ].getAttribute( "data-location" ) + " " + _inputs[ c ].getAttribute( "data-coin" ) + "), obtenu : " + _inputs[ c ].value );
            }
        }
        let _add = _zone.querySelector( ".stuffs-coins-add" );
        TEST.ASSERT.notNull( _add, "La ligne d'ajout du journal devrait être rendue" );
        if ( _add ) {
            TEST.ASSERT.equal( _add.querySelectorAll( ".stuffs-coins-add-location option" ).length, STUFF.LOCATIONS.length, "Le sélecteur d'emplacement de la ligne d'ajout devrait porter les 3 emplacements" );
            TEST.ASSERT.equal( _add.querySelectorAll( ".stuffs-coins-add-amount" ).length, STUFF.COINS.length, "La ligne d'ajout devrait porter 4 montants signés" );
            TEST.ASSERT.notNull( _add.querySelector( ".stuffs-coins-add-label" ), "La ligne d'ajout devrait porter un champ libellé" );
            TEST.ASSERT.notNull( _add.querySelector( ".stuffs-coins-add-button" ), "La ligne d'ajout devrait porter son bouton +" );
        }
        TEST.ASSERT.equal( _zone.querySelectorAll( ".stuffs-coins-entry" ).length, 0, "Le journal devrait être vide sur page vierge" );
    } );
} );

TEST.RUNNER.register( "[ARGENT] édition du solde par input (change → domaine + titre + save)", function () {
    TEST_coinsSetInput( "equipped", "pp", "2" );
    return TEST.wait().then( function () {
        let _coins = CONTROLLER.Character.current_character.getCoins();
        TEST.ASSERT.equal( _coins.getAmount( "equipped", "pp" ), 2, "Le domaine devrait porter pp=2 sur Équipé, obtenu : " + _coins.getAmount( "equipped", "pp" ) );
        TEST.ASSERT.equal( TEST_coinsPane().querySelector( ".stuffs-coins-title" ).textContent, "Argent — total : 2 pp", "Le titre devrait suivre le solde, obtenu : [" + TEST_coinsPane().querySelector( ".stuffs-coins-title" ).textContent + "]" );
        TEST.ASSERT.equal( TEST_coinsInput( "equipped", "pp" ).value, "2", "L'input devrait relire 2 après le refresh" );
        let _save = JSON.stringify( CONTROLLER.Character.current_character.getDataToSave() );
        TEST.ASSERT.ok( _save.indexOf( "\"coins\"" ) !== -1, "Le save devrait porter la clé coins" );
        TEST.ASSERT.ok( _save.indexOf( "\"pp\":2" ) !== -1, "Le save devrait porter pp=2 sur Équipé, extrait : " + _save.slice( _save.indexOf( "\"coins\"" ), _save.indexOf( "\"coins\"" ) + 120 ) );
    } );
} );

TEST.RUNNER.register( "[ARGENT] journal : la ligne d'ajout applique son delta au solde et s'affiche", function () {
    TEST_coinsAddJournal( "backpack", "po", 2, "Butin du gobelin" );
    return TEST.wait().then( function () {
        let _coins = CONTROLLER.Character.current_character.getCoins();
        TEST.ASSERT.equal( _coins.getAmount( "backpack", "po" ), 2, "Le delta +2 po devrait s'appliquer au solde de Sac à dos, obtenu : " + _coins.getAmount( "backpack", "po" ) );
        TEST.ASSERT.equal( _coins.getJournalEntries().length, 1, "Le journal devrait porter une entrée" );
        let _entry = _coins.getJournalEntries()[ 0 ];
        TEST.ASSERT.equal( _entry.location, "backpack", "L'entrée devrait porter son emplacement" );
        TEST.ASSERT.equal( _entry.coins.po, 2, "L'entrée devrait porter son delta" );
        TEST.ASSERT.equal( _entry.label, "Butin du gobelin", "L'entrée devrait porter son libellé" );
        TEST.ASSERT.ok( _entry.timestamp > 0, "L'entrée devrait porter un timestamp" );
        // DOM = domaine
        TEST.ASSERT.equal( TEST_coinsPane().querySelector( ".stuffs-coins-title" ).textContent, "Argent — total : 2 pp 2 po", "Le titre devrait cumuler les deux emplacements, obtenu : [" + TEST_coinsPane().querySelector( ".stuffs-coins-title" ).textContent + "]" );
        TEST.ASSERT.equal( TEST_coinsInput( "backpack", "po" ).value, "2", "L'input Sac à dos po devrait relire 2 après le refresh" );
        let _rows = TEST_coinsPane().querySelectorAll( ".stuffs-coins-entry" );
        TEST.ASSERT.equal( _rows.length, 1, "Une entrée de journal devrait être rendue, obtenu : " + _rows.length );
        if ( _rows.length ) {
            TEST.ASSERT.equal( _rows[ 0 ].querySelector( ".stuffs-coins-entry-amount" ).textContent, "+2 po", "Le montant signé devrait s'afficher, obtenu : [" + _rows[ 0 ].querySelector( ".stuffs-coins-entry-amount" ).textContent + "]" );
            TEST.ASSERT.equal( _rows[ 0 ].querySelector( ".stuffs-coins-entry-location" ).textContent, "Sac à dos", "L'emplacement devrait s'afficher" );
            TEST.ASSERT.equal( _rows[ 0 ].querySelector( ".stuffs-coins-entry-label" ).textContent, "Butin du gobelin", "Le libellé devrait s'afficher" );
            TEST.ASSERT.ok( _rows[ 0 ].querySelector( ".stuffs-coins-entry-date" ).textContent.length >= 5, "La date JJ/MM HH:MM devrait s'afficher" );
        }
    } );
} );

TEST.RUNNER.register( "[ARGENT] le filtre par puce s'applique aux blocs d'argent et au journal", function () {
    let _chip = TEST_coinsPane().querySelector( ".stuffs-location-filter[data-location='stored']" );
    TEST.ASSERT.notNull( _chip, "Pre-condition : la puce Entreposé devrait être rendue" );
    if ( !_chip ) {
        return;
    }
    _chip.click();
    return TEST.wait().then( function () {
        let _rows = TEST_coinsPane().querySelectorAll( ".stuffs-coins-location" );
        TEST.ASSERT.equal( _rows.length, 1, "Seul le bloc Entreposé devrait rester avec le filtre actif, obtenu : " + _rows.length );
        if ( _rows.length ) {
            TEST.ASSERT.equal( _rows[ 0 ].getAttribute( "data-location" ), "stored", "Le bloc restant devrait être Entreposé" );
        }
        TEST.ASSERT.equal( TEST_coinsPane().querySelectorAll( ".stuffs-coins-entry" ).length, 0, "L'entrée journal (Sac à dos) devrait être masquée par le filtre Entreposé" );
        TEST.ASSERT.notNull( TEST_coinsPane().querySelector( ".stuffs-coins-add" ), "La ligne d'ajout du journal devrait rester visible quel que soit le filtre" );
        let _all = TEST_coinsPane().querySelector( ".stuffs-location-filter[data-location='all']" );
        if ( _all ) {
            _all.click();
        }
        return TEST.wait();
    } ).then( function () {
        TEST.ASSERT.equal( TEST_coinsPane().querySelectorAll( ".stuffs-coins-location" ).length, STUFF.LOCATIONS.length, "Retour sur Tous : les 3 blocs devraient réapparaître" );
        TEST.ASSERT.equal( TEST_coinsPane().querySelectorAll( ".stuffs-coins-entry" ).length, 1, "Retour sur Tous : l'entrée journal devrait réapparaître" );
    } );
} );

TEST.RUNNER.register( "[ARGENT] dépense clampe à 0, save → load restaure soldes et journal", function () {
    // Dépense de 5 po sur Sac à dos (qui en a 2) : le solde tombe à 0, pas négatif
    TEST_coinsAddJournal( "backpack", "po", -5, "Achat au forgeron" );
    return TEST.wait().then( function () {
        let _character = CONTROLLER.Character.current_character;
        let _coins     = _character.getCoins();
        TEST.ASSERT.equal( _coins.getAmount( "backpack", "po" ), 0, "Le solde ne devrait jamais passer sous 0 (clamp), obtenu : " + _coins.getAmount( "backpack", "po" ) );
        TEST.ASSERT.equal( _coins.getJournalEntries().length, 2, "Le journal devrait porter 2 entrées" );
        let _rows = TEST_coinsPane().querySelectorAll( ".stuffs-coins-entry" );
        TEST.ASSERT.equal( _rows.length, 2, "Les 2 entrées devraient être rendues (plus récent en tête)" );
        if ( _rows.length === 2 ) {
            TEST.ASSERT.equal( _rows[ 0 ].querySelector( ".stuffs-coins-entry-amount" ).textContent, "−5 po", "La dépense devrait s'afficher signée en tête, obtenu : [" + _rows[ 0 ].querySelector( ".stuffs-coins-entry-amount" ).textContent + "]" );
        }
        TEST.ASSERT.equal( TEST_coinsPane().querySelector( ".stuffs-coins-title" ).textContent, "Argent — total : 2 pp", "Le titre devrait refléter le clamp, obtenu : [" + TEST_coinsPane().querySelector( ".stuffs-coins-title" ).textContent + "]" );
        // Relecture mémoire du save
        let _saved    = _character.getDataToSave();
        let _reloaded = new CHARACTER.Current();
        _reloaded.updateData( _saved );
        let _coins_reloaded = _reloaded.getCoins();
        TEST.ASSERT.equal( _coins_reloaded.getAmount( "equipped", "pp" ), 2, "Après load : pp Équipé = 2 attendu" );
        TEST.ASSERT.equal( _coins_reloaded.getAmount( "backpack", "po" ), 0, "Après load : po Sac à dos = 0 attendu (clamp persisté)" );
        TEST.ASSERT.equal( _coins_reloaded.getJournalEntries().length, 2, "Après load : le journal devrait porter 2 entrées" );
        TEST.ASSERT.equal( _coins_reloaded.getJournalEntries()[ 0 ].label, "Butin du gobelin", "Après load : le libellé de la première entrée devrait être restauré" );
        // Laisser la suite propre
        TEST.RESET.sheet();
    } );
} );
