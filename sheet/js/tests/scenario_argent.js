"use strict";
/**
 * Scenario : ARGENT (suite independante, RESET — placee APRES scenario_stuffs)
 * La partie Argent en tete de l'onglet Équipement : le total converti dans
 * le titre (unités collées : « 2pp 2po »), un bloc de solde EN LECTURE
 * SEULE par emplacement (Équipé / Sac à dos / Entreposé — les puces de
 * filtre s'appliquent comme aux sections) : une puce par monnaie, icône de
 * la pièce + montant + unité collée. L'argent ne se modifie QUE par la
 * ligne d'opération « de → vers » (4e choix « Extérieur » = gain /
 * dépense), qui applique son delta aux soldes et journalise ; le journal
 * est append-only, replié dans un <details>.
 * 1. Page vide, onglet Équipement : zone rendue (titre « 0 pc », 3 blocs
 *    x 4 puces à 0 avec icône, AUCUN input de solde, ligne d'opération avec
 *    2 sélecteurs x 4 options, 4 montants icône + unité collée, libellé
 *    optionnel, « Valider », journal replié et vide).
 * 2. Opération gain Extérieur → Équipé, 2 pp (libellé vide → auto) →
 *    solde Équipé pp = 2, puce « 2pp », titre « 2pp », entrée journalisée
 *    (« +2pp », « Opération : Extérieur → Équipé »), clé « coins » dans le
 *    save avec pp=2.
 * 3. Opération gain Extérieur → Sac à dos, 2 po, « Butin du gobelin » →
 *    solde Sac à dos po = 2, puce « 2po », titre « 2pp 2po », entrée
 *    « +2po » / « Sac à dos » / libellé, DOM = domaine.
 * 4. Opération interne : Équipé → Sac à dos, 1 pp, sans libellé →
 *    pp Équipé 2→1, pp Sac à dos = 1 (puces « 1pp » des deux côtés), total
 *    inchangé « 2pp 2po », entrée avec libellé auto « Opération : Équipé →
 *    Sac à dos ».
 * 5. Filtre : puce « Entreposé » → seul le bloc Entreposé reste, les
 *    entrées journal des autres emplacements sont masquées, la ligne
 *    d'opération reste ; retour « Tous ».
 * 6. Dépense clampée : Sac à dos → Extérieur, 5 po (il en a 2) → seuls 2 po
 *    partent (solde 0, jamais négatif, puce « 0po »), entrée « −2po » en
 *    tête, puis save → load (relecture mémoire) : soldes et journal
 *    restaurés. RESET final pour laisser la suite propre.
 */
function TEST_coinsPane() {
    return document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "']" );
}


// La puce de solde d'une monnaie d'un emplacement : .stuffs-coins-coin[data-coin]
function TEST_coinsChip( location, coin ) {
    return TEST_coinsPane().querySelector( ".stuffs-coins-location[data-location='" + location + "'] .stuffs-coins-coin[data-coin='" + coin + "']" );
}

// Pose une opération de -> to : un montant positif sur une monnaie,
// un libellé optionnel, puis clic sur « Valider »
function TEST_coinsOperation( from_key, to_key, coin_key, amount, label ) {
    let _row = TEST_coinsPane().querySelector( ".stuffs-coins-add" );
    if ( !_row ) {
        return;
    }
    _row.querySelector( ".stuffs-coins-add-from" ).value = from_key;
    _row.querySelector( ".stuffs-coins-add-to" ).value = to_key;
    let _inputs = _row.querySelectorAll( ".stuffs-coins-add-amount" );
    for ( let i = 0, _size_i = _inputs.length; i < _size_i; i++ ) {
        _inputs[ i ].value = _inputs[ i ].getAttribute( "data-coin" ) === coin_key ? "" + amount : "";
    }
    _row.querySelector( ".stuffs-coins-add-label" ).value = label || "";
    _row.querySelector( ".stuffs-coins-add-button" ).click();
}

TEST.RUNNER.register( "[ARGENT] zone rendue sur page vide : titre 0 pc, 3 blocs x 4 puces à 0 (icône + unité collée), aucun input, ligne d'opération, journal replié vide", function () {
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
        // Les soldes sont en LECTURE SEULE : aucune input, des puces à icône
        TEST.ASSERT.equal( _zone.querySelectorAll( ".stuffs-coins-input" ).length, 0, "Aucun input de solde ne devrait exister (l'argent ne se modifie que par opération), obtenu : " + _zone.querySelectorAll( ".stuffs-coins-input" ).length );
        let _rows = _zone.querySelectorAll( ".stuffs-coins-location" );
        TEST.ASSERT.equal( _rows.length, STUFF.LOCATIONS.length, "Un bloc de solde par emplacement devrait être rendu (" + STUFF.LOCATIONS.length + "), obtenu : " + _rows.length );
        for ( let i = 0, _size_i = _rows.length; i < _size_i; i++ ) {
            let _chips = _rows[ i ].querySelectorAll( ".stuffs-coins-coin" );
            TEST.ASSERT.equal( _chips.length, STUFF.COINS.length, "Chaque bloc devrait porter 4 puces de monnaies, obtenu : " + _chips.length );
            for ( let c = 0, _size_c = _chips.length; c < _size_c; c++ ) {
                let _coin_key = _chips[ c ].getAttribute( "data-coin" );
                let _icon     = _chips[ c ].querySelector( ".stuffs-coins-coin-icon" );
                TEST.ASSERT.notNull( _icon, "Chaque puce devrait porter l'icône de sa pièce" );
                if ( _icon ) {
                    TEST.ASSERT.ok( _icon.classList.contains( "stuffs-coin-" + _coin_key ), "L'icône devrait porter la classe de sa monnaie (stuffs-coin-" + _coin_key + "), obtenu : [" + _icon.className + "]" );
                }
                TEST.ASSERT.equal( _chips[ c ].querySelector( ".stuffs-coins-coin-value" ).textContent, "0", "Le solde devrait être à 0 sur page vierge (" + _rows[ i ].getAttribute( "data-location" ) + " " + _coin_key + ")" );
                TEST.ASSERT.equal( _chips[ c ].querySelector( ".stuffs-coins-coin-unit" ).textContent, _coin_key, "L'unité devrait être collée au montant (" + _coin_key + ")" );
            }
        }
        let _add = _zone.querySelector( ".stuffs-coins-add" );
        TEST.ASSERT.notNull( _add, "La ligne d'opération devrait être rendue" );
        if ( _add ) {
            let _from = _add.querySelector( ".stuffs-coins-add-from" );
            let _to   = _add.querySelector( ".stuffs-coins-add-to" );
            TEST.ASSERT.notNull( _from, "Le sélecteur « de » devrait être rendu" );
            TEST.ASSERT.notNull( _to, "Le sélecteur « vers » devrait être rendu" );
            if ( _from && _to ) {
                TEST.ASSERT.equal( _from.querySelectorAll( "option" ).length, STUFF.LOCATIONS.length + 1, "Le sélecteur « de » devrait porter les 3 emplacements + Extérieur" );
                TEST.ASSERT.equal( _to.querySelectorAll( "option" ).length, STUFF.LOCATIONS.length + 1, "Le sélecteur « vers » devrait porter les 3 emplacements + Extérieur" );
                let _last_from = _from.querySelectorAll( "option" );
                _last_from = _last_from[ _last_from.length - 1 ];
                TEST.ASSERT.equal( _last_from.getAttribute( "value" ), STUFF.COIN_OPERATION_OUTSIDE.key, "La 4e option devrait être Extérieur" );
                TEST.ASSERT.equal( _last_from.textContent, STUFF.COIN_OPERATION_OUTSIDE.label, "La 4e option devrait s'appeler « Extérieur »" );
            }
            let _amounts = _add.querySelectorAll( ".stuffs-coins-add-amount" );
            TEST.ASSERT.equal( _amounts.length, STUFF.COINS.length, "La ligne d'opération devrait porter 4 montants" );
            for ( let i = 0, _size_i = _amounts.length; i < _size_i; i++ ) {
                let _box = _amounts[ i ].parentNode;
                TEST.ASSERT.ok( _box.querySelector( ".stuffs-coins-coin-icon" ), "Chaque montant devrait porter l'icône de sa pièce" );
                let _unit = _box.querySelector( ".stuffs-coins-add-unit" );
                TEST.ASSERT.notNull( _unit, "Chaque montant devrait être suivi de son unité collée" );
                if ( _unit ) {
                    TEST.ASSERT.equal( _unit.textContent, _amounts[ i ].getAttribute( "data-coin" ), "L'unité collée devrait être la clé de la monnaie (" + _amounts[ i ].getAttribute( "data-coin" ) + ")" );
                }
            }
            TEST.ASSERT.notNull( _add.querySelector( ".stuffs-coins-add-label" ), "La ligne d'opération devrait porter un champ libellé optionnel" );
            let _btn = _add.querySelector( ".stuffs-coins-add-button" );
            TEST.ASSERT.notNull( _btn, "La ligne d'opération devrait porter son bouton" );
            if ( _btn ) {
                TEST.ASSERT.equal( _btn.textContent, "Valider", "Le bouton devrait s'appeler « Valider », obtenu : [" + _btn.textContent + "]" );
            }
        }
        let _details = _zone.querySelector( ".stuffs-coins-journal-details" );
        TEST.ASSERT.notNull( _details, "Le journal devrait être rendu dans un <details>" );
        if ( _details ) {
            TEST.ASSERT.ok( !_details.hasAttribute( "open" ), "Le journal devrait être replié par défaut" );
        }
        TEST.ASSERT.equal( _zone.querySelectorAll( ".stuffs-coins-entry" ).length, 0, "Le journal devrait être vide sur page vierge" );
    } );
} );

TEST.RUNNER.register( "[ARGENT] opération gain Extérieur → Équipé, 2 pp : solde, puce, titre, journal, save", function () {
    TEST_coinsOperation( "outside", "equipped", "pp", 2, "" );
    return TEST.wait().then( function () {
        let _coins = CONTROLLER.Character.current_character.getCoins();
        TEST.ASSERT.equal( _coins.getAmount( "equipped", "pp" ), 2, "Le gain de 2 pp devrait s'appliquer au solde d'Équipé, obtenu : " + _coins.getAmount( "equipped", "pp" ) );
        // La puce d'Équipé pp affiche « 2pp » (valeur + unité collée, icône)
        let _chip = TEST_coinsChip( "equipped", "pp" );
        TEST.ASSERT.notNull( _chip, "La puce pp d'Équipé devrait exister" );
        if ( _chip ) {
            TEST.ASSERT.equal( _chip.querySelector( ".stuffs-coins-coin-value" ).textContent, "2", "La puce devrait afficher 2, obtenu : [" + _chip.querySelector( ".stuffs-coins-coin-value" ).textContent + "]" );
            TEST.ASSERT.equal( _chip.querySelector( ".stuffs-coins-coin-unit" ).textContent, "pp", "L'unité pp devrait être collée" );
            TEST.ASSERT.ok( _chip.querySelector( ".stuffs-coins-coin-icon" ), "La puce devrait porter l'icône pp" );
        }
        TEST.ASSERT.equal( TEST_coinsPane().querySelector( ".stuffs-coins-title" ).textContent, "Argent — total : 2pp", "Le titre devrait suivre le solde avec l'unité collée, obtenu : [" + TEST_coinsPane().querySelector( ".stuffs-coins-title" ).textContent + "]" );
        // Journal : entrée sur l'emplacement concerné, libellé auto
        TEST.ASSERT.equal( _coins.getJournalEntries().length, 1, "Le journal devrait porter une entrée" );
        let _entry = _coins.getJournalEntries()[ 0 ];
        TEST.ASSERT.equal( _entry.location, "equipped", "L'entrée de gain devrait porter l'emplacement d'arrivée" );
        TEST.ASSERT.equal( _entry.coins.pp, 2, "L'entrée devrait porter son delta signé positif" );
        TEST.ASSERT.equal( _entry.label, "Opération : Extérieur → Équipé", "Sans libellé saisi, le libellé auto devrait être « Opération : Extérieur → Équipé », obtenu : [" + _entry.label + "]" );
        TEST.ASSERT.ok( _entry.timestamp > 0, "L'entrée devrait porter un timestamp" );
        let _rows = TEST_coinsPane().querySelectorAll( ".stuffs-coins-entry" );
        TEST.ASSERT.equal( _rows.length, 1, "Une entrée de journal devrait être rendue, obtenu : " + _rows.length );
        if ( _rows.length ) {
            TEST.ASSERT.equal( _rows[ 0 ].querySelector( ".stuffs-coins-entry-amount" ).textContent, "+2pp", "Le montant signé devrait s'afficher avec l'unité collée, obtenu : [" + _rows[ 0 ].querySelector( ".stuffs-coins-entry-amount" ).textContent + "]" );
            TEST.ASSERT.equal( _rows[ 0 ].querySelector( ".stuffs-coins-entry-location" ).textContent, "Équipé", "L'emplacement devrait s'afficher" );
            TEST.ASSERT.equal( _rows[ 0 ].querySelector( ".stuffs-coins-entry-label" ).textContent, "Opération : Extérieur → Équipé", "Le libellé auto devrait s'afficher" );
            TEST.ASSERT.ok( _rows[ 0 ].querySelector( ".stuffs-coins-entry-date" ).textContent.length >= 5, "La date JJ/MM HH:MM devrait s'afficher" );
        }
        let _save = JSON.stringify( CONTROLLER.Character.current_character.getDataToSave() );
        TEST.ASSERT.ok( _save.indexOf( "\"coins\"" ) !== -1, "Le save devrait porter la clé coins" );
        TEST.ASSERT.ok( _save.indexOf( "\"pp\":2" ) !== -1, "Le save devrait porter pp=2 sur Équipé, extrait : " + _save.slice( _save.indexOf( "\"coins\"" ), _save.indexOf( "\"coins\"" ) + 120 ) );
    } );
} );

TEST.RUNNER.register( "[ARGENT] opération gain Extérieur → Sac à dos, 2 po « Butin du gobelin » : puce 2po, titre 2pp 2po, DOM = domaine", function () {
    TEST_coinsOperation( "outside", "backpack", "po", 2, "Butin du gobelin" );
    return TEST.wait().then( function () {
        let _coins = CONTROLLER.Character.current_character.getCoins();
        TEST.ASSERT.equal( _coins.getAmount( "backpack", "po" ), 2, "Le gain de 2 po devrait s'appliquer au solde de Sac à dos, obtenu : " + _coins.getAmount( "backpack", "po" ) );
        let _chip = TEST_coinsChip( "backpack", "po" );
        TEST.ASSERT.notNull( _chip, "La puce po de Sac à dos devrait exister" );
        if ( _chip ) {
            TEST.ASSERT.equal( _chip.querySelector( ".stuffs-coins-coin-value" ).textContent, "2", "La puce devrait afficher 2, obtenu : [" + _chip.querySelector( ".stuffs-coins-coin-value" ).textContent + "]" );
            TEST.ASSERT.equal( _chip.querySelector( ".stuffs-coins-coin-unit" ).textContent, "po", "L'unité po devrait être collée" );
        }
        TEST.ASSERT.equal( _coins.getJournalEntries().length, 2, "Le journal devrait porter 2 entrées" );
        TEST.ASSERT.equal( _coins.getJournalEntries()[ 1 ].label, "Butin du gobelin", "La 2e entrée devrait porter son libellé" );
        TEST.ASSERT.equal( TEST_coinsPane().querySelector( ".stuffs-coins-title" ).textContent, "Argent — total : 2pp 2po", "Le titre devrait cumuler les deux emplacements, obtenu : [" + TEST_coinsPane().querySelector( ".stuffs-coins-title" ).textContent + "]" );
        let _rows = TEST_coinsPane().querySelectorAll( ".stuffs-coins-entry" );
        TEST.ASSERT.equal( _rows.length, 2, "Les 2 entrées devraient être rendues (plus récent en tête), obtenu : " + _rows.length );
        if ( _rows.length === 2 ) {
            TEST.ASSERT.equal( _rows[ 0 ].querySelector( ".stuffs-coins-entry-amount" ).textContent, "+2po", "Le gain devrait s'afficher en tête avec l'unité collée, obtenu : [" + _rows[ 0 ].querySelector( ".stuffs-coins-entry-amount" ).textContent + "]" );
            TEST.ASSERT.equal( _rows[ 0 ].querySelector( ".stuffs-coins-entry-location" ).textContent, "Sac à dos", "L'emplacement d'arrivée devrait s'afficher" );
            TEST.ASSERT.equal( _rows[ 0 ].querySelector( ".stuffs-coins-entry-label" ).textContent, "Butin du gobelin", "Le libellé devrait s'afficher" );
        }
    } );
} );

TEST.RUNNER.register( "[ARGENT] opération interne Équipé → Sac à dos, 1 pp : soldes déplacés, total inchangé, libellé auto", function () {
    TEST_coinsOperation( "equipped", "backpack", "pp", 1, "" );
    return TEST.wait().then( function () {
        let _coins = CONTROLLER.Character.current_character.getCoins();
        TEST.ASSERT.equal( _coins.getAmount( "equipped", "pp" ), 1, "pp Équipé devrait passer de 2 à 1, obtenu : " + _coins.getAmount( "equipped", "pp" ) );
        TEST.ASSERT.equal( _coins.getAmount( "backpack", "pp" ), 1, "pp Sac à dos devrait recevoir le 1 pp, obtenu : " + _coins.getAmount( "backpack", "pp" ) );
        let _chip_eq = TEST_coinsChip( "equipped", "pp" );
        let _chip_bp = TEST_coinsChip( "backpack", "pp" );
        TEST.ASSERT.equal( _chip_eq ? _chip_eq.querySelector( ".stuffs-coins-coin-value" ).textContent : null, "1", "La puce pp Équipé devrait relire 1 après le refresh" );
        TEST.ASSERT.equal( _chip_bp ? _chip_bp.querySelector( ".stuffs-coins-coin-value" ).textContent : null, "1", "La puce pp Sac à dos devrait relire 1 après le refresh" );
        TEST.ASSERT.equal( _coins.getJournalEntries().length, 3, "Le journal devrait porter 3 entrées" );
        let _entry = _coins.getJournalEntries()[ 2 ];
        TEST.ASSERT.equal( _entry.location, "equipped", "L'entrée d'une opération interne devrait porter l'emplacement de départ" );
        TEST.ASSERT.equal( _entry.coins.pp, 1, "L'entrée devrait porter le montant déplacé" );
        TEST.ASSERT.equal( _entry.label, "Opération : Équipé → Sac à dos", "Sans libellé saisi, le libellé auto devrait être « Opération : Équipé → Sac à dos », obtenu : [" + _entry.label + "]" );
        // Le total ne bouge pas dans un transfert interne
        TEST.ASSERT.equal( TEST_coinsPane().querySelector( ".stuffs-coins-title" ).textContent, "Argent — total : 2pp 2po", "Le titre devrait rester « 2pp 2po » après un transfert interne, obtenu : [" + TEST_coinsPane().querySelector( ".stuffs-coins-title" ).textContent + "]" );
        let _rows = TEST_coinsPane().querySelectorAll( ".stuffs-coins-entry" );
        TEST.ASSERT.equal( _rows.length, 3, "Les 3 entrées devraient être rendues (plus récent en tête), obtenu : " + _rows.length );
        if ( _rows.length === 3 ) {
            TEST.ASSERT.equal( _rows[ 0 ].querySelector( ".stuffs-coins-entry-amount" ).textContent, "+1pp", "L'opération interne devrait s'afficher en tête, obtenu : [" + _rows[ 0 ].querySelector( ".stuffs-coins-entry-amount" ).textContent + "]" );
            TEST.ASSERT.equal( _rows[ 0 ].querySelector( ".stuffs-coins-entry-label" ).textContent, "Opération : Équipé → Sac à dos", "Le libellé auto devrait s'afficher, obtenu : [" + _rows[ 0 ].querySelector( ".stuffs-coins-entry-label" ).textContent + "]" );
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
        TEST.ASSERT.equal( TEST_coinsPane().querySelectorAll( ".stuffs-coins-entry" ).length, 0, "Les entrées journal des autres emplacements devraient être masquées par le filtre Entreposé" );
        TEST.ASSERT.notNull( TEST_coinsPane().querySelector( ".stuffs-coins-add" ), "La ligne d'opération devrait rester visible quel que soit le filtre" );
        let _all = TEST_coinsPane().querySelector( ".stuffs-location-filter[data-location='all']" );
        if ( _all ) {
            _all.click();
        }
        return TEST.wait();
    } ).then( function () {
        TEST.ASSERT.equal( TEST_coinsPane().querySelectorAll( ".stuffs-coins-location" ).length, STUFF.LOCATIONS.length, "Retour sur Tous : les 3 blocs devraient réapparaître" );
        TEST.ASSERT.equal( TEST_coinsPane().querySelectorAll( ".stuffs-coins-entry" ).length, 3, "Retour sur Tous : les 3 entrées journal devraient réapparaître" );
    } );
} );

TEST.RUNNER.register( "[ARGENT] dépense clampée vers l'Extérieur, save → load restaure soldes et journal", function () {
    // Dépense de 5 po depuis Sac à dos (qui en a 2) vers l'Extérieur :
    // seuls les 2 po disponibles partent, le solde tombe à 0, pas négatif
    TEST_coinsOperation( "backpack", "outside", "po", 5, "" );
    return TEST.wait().then( function () {
        let _character = CONTROLLER.Character.current_character;
        let _coins     = _character.getCoins();
        TEST.ASSERT.equal( _coins.getAmount( "backpack", "po" ), 0, "Le solde ne devrait jamais passer sous 0 (clamp), obtenu : " + _coins.getAmount( "backpack", "po" ) );
        let _chip = TEST_coinsChip( "backpack", "po" );
        TEST.ASSERT.equal( _chip ? _chip.querySelector( ".stuffs-coins-coin-value" ).textContent : null, "0", "La puce po de Sac à dos devrait relire 0 après le clamp" );
        TEST.ASSERT.equal( _coins.getJournalEntries().length, 4, "Le journal devrait porter 4 entrées" );
        let _entry = _coins.getJournalEntries()[ 3 ];
        TEST.ASSERT.equal( _entry.location, "backpack", "L'entrée de dépense devrait porter l'emplacement d'où sort l'argent" );
        TEST.ASSERT.equal( _entry.coins.po, -2, "L'entrée devrait porter le delta signé négatif du montant réellement parti (clampé à 2), obtenu : " + _entry.coins.po );
        TEST.ASSERT.equal( _entry.label, "Opération : Sac à dos → Extérieur", "Le libellé auto de la dépense devrait s'afficher, obtenu : [" + _entry.label + "]" );
        let _rows = TEST_coinsPane().querySelectorAll( ".stuffs-coins-entry" );
        TEST.ASSERT.equal( _rows.length, 4, "Les 4 entrées devraient être rendues (plus récent en tête), obtenu : " + _rows.length );
        if ( _rows.length === 4 ) {
            TEST.ASSERT.equal( _rows[ 0 ].querySelector( ".stuffs-coins-entry-amount" ).textContent, "−2po", "La dépense clampée devrait s'afficher signée en tête, obtenu : [" + _rows[ 0 ].querySelector( ".stuffs-coins-entry-amount" ).textContent + "]" );
        }
        TEST.ASSERT.equal( TEST_coinsPane().querySelector( ".stuffs-coins-title" ).textContent, "Argent — total : 2pp", "Le titre devrait refléter le clamp (2pp restent), obtenu : [" + TEST_coinsPane().querySelector( ".stuffs-coins-title" ).textContent + "]" );
        // Relecture mémoire du save
        let _saved    = _character.getDataToSave();
        let _reloaded = new CHARACTER.Current();
        _reloaded.updateData( _saved );
        let _coins_reloaded = _reloaded.getCoins();
        TEST.ASSERT.equal( _coins_reloaded.getAmount( "equipped", "pp" ), 1, "Après load : pp Équipé = 1 attendu" );
        TEST.ASSERT.equal( _coins_reloaded.getAmount( "backpack", "pp" ), 1, "Après load : pp Sac à dos = 1 attendu" );
        TEST.ASSERT.equal( _coins_reloaded.getAmount( "backpack", "po" ), 0, "Après load : po Sac à dos = 0 attendu (clamp persisté)" );
        TEST.ASSERT.equal( _coins_reloaded.getJournalEntries().length, 4, "Après load : le journal devrait porter 4 entrées" );
        TEST.ASSERT.equal( _coins_reloaded.getJournalEntries()[ 1 ].label, "Butin du gobelin", "Après load : le libellé de la 2e entrée devrait être restauré" );
        TEST.ASSERT.equal( _coins_reloaded.getJournalEntries()[ 3 ].coins.po, -2, "Après load : le delta signé de la dépense devrait être restauré" );
        // Laisser la suite propre
        TEST.RESET.sheet();
    } );
} );
