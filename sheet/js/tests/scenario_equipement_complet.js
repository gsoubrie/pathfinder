"use strict";
/**
 * Scenario : ÉQUIPEMENT COMPLET (fin de run, EN DERNIER apres
 * scenario_save_complet — demande utilisateur : la feuille du run se
 * termine avec UNE DIZAINE D'OBJETS CONFIGURÉS pour tester l'onglet
 * Équipement a la main ; il ne se RESET pas, il part de la feuille
 * Magicien niveau 10 rechargée du save et la GARDE pleine). Chaque
 * objet se pose par les GESTES RÉELS de la BIBLIOTHÈQUE (le « + » de
 * l'onglet Équipement y bascule, le « + » de la carte pose ; les "?",
 * les éditions et les filtres restent a l'utilisateur) : deux armes
 * (dont une équipée), deux armures (une équipée, une entreposée avec
 * son lieu), trois ajouts d'un meme consommable qui empilent, un
 * objet d'autre type entreposé, un objet d'autre type au sac (le nom
 * porte une APOSTROPHE si le dataset en propose une — la fermeture
 * des popups s'y teste a la main). L'emplacement, le lieu et le
 * commentaire se règlent par la roue crantée (popup d'édition).
 * Le compte attendu se CALCULE (les objets
 * dupliqués ne créent pas d'entrée), l'encombrement porté croise le
 * domaine, le save part en console GSOU (l'utilisateur copie le
 * JSON) et le run se termine sur la feuille vivante — les objets
 * restent posés.
 */
// Ajoute un objet du dataset par la BIBLIOTHÈQUE (le + de la barre de
// l'Équipement y bascule, le « + » de la carte pose au Sac à dos), puis
// règle l'emplacement / le lieu / le commentaire par la roue crantée
// (popup d'édition)
function TEST_equipementCompletAddExisting( kind, value, location, place, comment ) {
    return TEST_stuffsAddViaLibrary( value ).then( function () {
        if ( !location && !place && !comment ) {
            return;
        }
        TEST_stuffsOpenEditPopup( kind, value );
        return TEST.wait().then( function () {
            if ( location ) {
                TEST_stuffsEditPickLocation( location );
                return TEST.wait();
            }
            return;
        } ).then( function () {
            let _popup = document.querySelector( "body > .popup .stuffs-edit-popup" );
            if ( !_popup ) {
                return;
            }
            if ( place ) {
                _popup.querySelector( ".stuffs-form-popup-place-input" ).value = place;
            }
            if ( comment ) {
                _popup.querySelector( ".stuffs-form-popup-comment-input" ).value = comment;
            }
            TEST_stuffsValidateEditPopup();
            return TEST.wait();
        } );
    } );
}

TEST.RUNNER.register( "[EQUIPEMENT COMPLET] une dizaine d'objets configurés, la feuille vivante pour l'utilisateur", function () {
    let _character = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : la feuille du run doit exister" );
    if ( !_character ) {
        return;
    }
    // Les noms viennent du dataset scrapé (les options du type), la
    // répartition couvre les trois emplacements, les unités des
    // consommables et un lieu d'entreposage
    let _weapon_options = STUFFS.getKindOptions( "weapon" );
    let _armor_options  = STUFFS.getKindOptions( "armor" );
    let _other_options  = STUFFS.getKindOptions( "other" );
    TEST.ASSERT.ok( _weapon_options.length >= 2 && _armor_options.length >= 2 && _other_options.length >= 2, "Le dataset devrait proposer assez d'options (" + _weapon_options.length + " armes, " + _armor_options.length + " armures, " + _other_options.length + " autres)" );
    if ( _weapon_options.length < 2 || _armor_options.length < 2 || _other_options.length < 2 ) {
        return;
    }
    // Le premier consommable du type Autres objets : le trait décide
    let _consumable_name = null;
    for ( let _i = 0, _size_i = STUFFS.length; !_consumable_name && _i < _size_i; _i++ ) {
        if ( STUFFS.getKindKeyOfData( STUFFS[ _i ] ) === "other" && STUFFS[ _i ].traits.indexOf( STUFF.CONSUMABLE_TRAIT ) !== -1 ) {
            _consumable_name = STUFFS[ _i ].name;
        }
    }
    TEST.ASSERT.notNull( _consumable_name, "Le dataset devrait proposer un consommable de la zone autres objets" );
    if ( !_consumable_name ) {
        return;
    }
    // Deux options du type autre DISTINCTES du consommable : une au
    // nom apostrophe si le dataset en propose une (la feuille livrée
    // laisse les popups apostrophes a la main de l'utilisateur)
    let _other_apostrophe = null;
    let _other_plain      = null;
    for ( let _i = 0, _size_i = _other_options.length; _i < _size_i && !_other_apostrophe; _i++ ) {
        if ( _other_options[ _i ].name !== _consumable_name && _other_options[ _i ].name.indexOf( "'" ) !== -1 ) {
            _other_apostrophe = _other_options[ _i ].name;
        }
    }
    for ( let _i = 0, _size_i = _other_options.length; _i < _size_i && !_other_plain; _i++ ) {
        if ( _other_options[ _i ].name !== _consumable_name && _other_options[ _i ].name !== _other_apostrophe ) {
            _other_plain = _other_options[ _i ].name;
        }
    }
    TEST.ASSERT.notNull( _other_apostrophe, "Le dataset devrait proposer un objet d'autre type portant une apostrophe" );
    TEST.ASSERT.notNull( _other_plain, "Le dataset devrait proposer un objet d'autre type sans apostrophe" );
    if ( !_other_apostrophe || !_other_plain ) {
        return;
    }
    // Les gestes d'ajout : trois ajouts du meme consommable (il empile
    // via le « + » de sa carte), le reste au « + » des cartes du dataset
    let _start_size = _character.getStuffs().getSize();
    let _stuffs     = _character.getStuffs();
    let _promise    = TEST_equipementCompletAddExisting( "weapon", _weapon_options[ 0 ].name, "backpack", null, "Trouvée sur un bandit de la côte" )
        .then( function () { return TEST_equipementCompletAddExisting( "weapon", _weapon_options[ 1 ].name, "equipped" ); } )
        .then( function () { return TEST_equipementCompletAddExisting( "armor", _armor_options[ 0 ].name, "equipped" ); } )
        .then( function () { return TEST_equipementCompletAddExisting( "armor", _armor_options[ 1 ].name, "stored", "Coffre de l'auberge du Pont Brisé", "Trop voyante en ville" ); } )
        .then( function () { return TEST_equipementCompletAddExisting( "other", _consumable_name, "backpack" ); } )
        .then( function () { return TEST_equipementCompletAddExisting( "other", _consumable_name, "backpack" ); } )
        .then( function () { return TEST_equipementCompletAddExisting( "other", _consumable_name, "backpack" ); } )
        .then( function () { return TEST_equipementCompletAddExisting( "other", _other_plain, "stored", "Chapelle du quartier" ); } )
        .then( function () { return TEST_equipementCompletAddExisting( "other", _other_apostrophe, "backpack" ); } );
    return _promise.then( function () {
        // Le compte attendu se CALCULE : les objets dupliqués ne créent
        // pas d'entrée (le consommable empile, les non-consommables
        // restent seuls) — une dizaine d'entrées vivantes
        let _expected_keys = {};
        _expected_keys[ "weapon__" + _weapon_options[ 0 ].name ] = true;
        _expected_keys[ "weapon__" + _weapon_options[ 1 ].name ] = true;
        _expected_keys[ "armor__" + _armor_options[ 0 ].name ]    = true;
        _expected_keys[ "armor__" + _armor_options[ 1 ].name ]    = true;
        _expected_keys[ "other__" + _consumable_name ]            = true;
        _expected_keys[ "other__" + _other_plain ]                 = true;
        _expected_keys[ "other__" + _other_apostrophe ]           = true;
        let _expected_size = Object.keys( _expected_keys ).length;
        TEST.ASSERT.equal( _stuffs.getSize(), _start_size + _expected_size, "Le run devrait laisser " + _expected_size + " entrées d'équipement, obtenu : " + ( _stuffs.getSize() - _start_size ) + " — fenêtre : " + TEST_stuffsDiagnosis() );
        TEST.ASSERT.equal( _stuffs.getContentByUUID( "weapon__" + _weapon_options[ 0 ].name ).location, "backpack", "La premiere arme vit au Sac à dos" );
        TEST.ASSERT.equal( _stuffs.getContentByUUID( "weapon__" + _weapon_options[ 1 ].name ).location, "equipped", "La deuxieme arme vit Équipée" );
        TEST.ASSERT.equal( _stuffs.getContentByUUID( "armor__" + _armor_options[ 0 ].name ).location, "equipped", "La premiere armure vit Équipée" );
        let _stored_armor = _stuffs.getContentByUUID( "armor__" + _armor_options[ 1 ].name );
        TEST.ASSERT.equal( _stored_armor ? _stored_armor.location : null, "stored", "La deuxieme armure vit Entreposée" );
        TEST.ASSERT.equal( _stored_armor ? _stored_armor.place : null, "Coffre de l'auberge du Pont Brisé", "La deuxieme armure porte son lieu d'entreposage" );
        TEST.ASSERT.ok( _stuffs.getContentByUUID( "other__" + _consumable_name ).isConsumable(), "Le consommable empilé devrait porter sa quantité" );
        TEST.ASSERT.equal( _stuffs.getContentByUUID( "other__" + _consumable_name ).quantity, 3, "Le consommable empilé trois fois porte la quantité 3, obtenu : " + _stuffs.getContentByUUID( "other__" + _consumable_name ).quantity );
        // L'encombrement porté : équipé + sac à dos, calculé des
        // entrées, l'entreposé reste hors compte
        let _bulk_expected = 0;
        for ( let _i = 0, _size_i = _stuffs.getSize(); _i < _size_i; _i++ ) {
            if ( STUFF.CARRIED_LOCATIONS.indexOf( _stuffs.getContent( _i ).location ) !== -1 ) {
                _bulk_expected += STUFFS.getEntryBulk( _stuffs.getContent( _i ) );
            }
        }
        _bulk_expected = Math.round( _bulk_expected * 10 ) / 10;
        TEST.ASSERT.equal( _stuffs.getBulkTotal( STUFF.CARRIED_LOCATIONS ), _bulk_expected, "Le total porté du domaine vaut le calcul des entrées, obtenu : " + _stuffs.getBulkTotal( STUFF.CARRIED_LOCATIONS ) );
        // La relecture verrouille l'état (la feuille vivante ne se
        // détruit pas — le run se termine posé pour l'utilisateur)
        let _reloaded = new CHARACTER.Current();
        _reloaded.updateData( _character.getDataToSave() );
        TEST.ASSERT.equal( _reloaded.getStuffs().getSize(), _start_size + _expected_size, "La relecture devrait restaurer toutes les entrées, obtenu : " + _reloaded.getStuffs().getSize() );
        TEST.ASSERT.equal( _reloaded.getStuffs().getContentByUUID( "other__" + _consumable_name ).quantity, 3, "La quantité empilée devrait survivre a la relecture" );
        // Le save part en console GSOU pour l'utilisateur (il garde le
        // JSON avec l'équipement)
        CONTROLLER.Character.save();
    } );
} );

// FIN DU RUN (demande utilisateur : terminer sur l'affichage encombré pour
// l'inspecter dans le navigateur) : on pousse le poids porté juste au-delà
// du max par la quantité d'un petit objet (geste bus réel), l'onglet
// Équipement devient actif, la jauge s'affiche en warning (curseur dans
// la moitié orange de la piste). Le save est reparti en console GSOU avec
// cet état.
TEST.RUNNER.register( "[EQUIPEMENT COMPLET] fin du run : onglet Équipement actif, jauge encombrée (over) à inspecter", function () {
    let _character = CONTROLLER.Character.current_character;
    let _stuffs    = _character.getStuffs();
    TEST.ASSERT.notNull( _character, "Pre-condition : la feuille du run doit exister" );
    if ( !_character ) {
        return;
    }
    let _bulk_max   = _stuffs.getBulkMax( _character );
    let _bulk_total = _stuffs.getBulkTotal( STUFF.CARRIED_LOCATIONS );
    TEST.ASSERT.ok( _bulk_total <= _bulk_max, "Pre-condition : le run devrait partir sous le max, obtenu : " + _bulk_total + " / " + _bulk_max );
    // Le plus petit objet positif du dataset, posé au sac à dos
    let _heavy      = null;
    let _heavy_bulk = Infinity;
    for ( let _i = 0, _size_i = STUFFS.length; _i < _size_i; _i++ ) {
        let _bulk = STUFFS.parseBulk( STUFFS[ _i ].name );
        if ( _bulk > 0 && _bulk < _heavy_bulk ) {
            _heavy_bulk = _bulk;
            _heavy      = STUFFS[ _i ];
        }
    }
    TEST.ASSERT.notNull( _heavy, "Le dataset devrait proposer un objet avec un petit bulk" );
    if ( !_heavy ) {
        return;
    }
    let _heavy_kind = STUFFS.getKindKeyOfData( _heavy );
    CONTROLLER.Character.doActionAfter( "event__stuff__add", { "param__stuff__kind": _heavy_kind, "param__stuff__value": _heavy.name, "param__stuff__location": "backpack" } );
    let _quantity      = 1;
    while ( _stuffs.getBulkTotal( STUFF.CARRIED_LOCATIONS ) <= _bulk_max && _quantity < 1000 ) {
        _quantity++;
        CONTROLLER.Character.doActionAfter( "event__stuff__edit_quantity", { "param__stuff__kind": _heavy_kind, "param__stuff__value": _heavy.name, "param__stuff__quantity": _quantity } );
    }
    _bulk_total = _stuffs.getBulkTotal( STUFF.CARRIED_LOCATIONS );
    TEST.ASSERT.ok( _bulk_total > _bulk_max && _bulk_total <= 2 * _bulk_max, "Le personnage devrait finir encombré (entre max et 2×max), obtenu : " + _bulk_total + " / " + _bulk_max );
    // Le save repart en console GSOU avec l'état encombré
    CONTROLLER.Character.save();
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.StuffsWindow.NAME ).then( function () {
        TEST.ASSERT.equal( _character.windows.getActiveWindow().getName(), CHARACTER.StuffsWindow.NAME, "L'onglet Équipement devrait etre actif en fin de run, obtenu : " + _character.windows.getActiveWindow().getName() );
        let _pane  = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "']" );
        let _range = _pane ? _pane.querySelector( ".stuffs-bulk-range" ) : null;
        let _box   = _pane ? _pane.querySelector( ".stuffs-bulk" ) : null;
        let _text  = _pane ? _pane.querySelector( ".stuffs-bulk-total" ) : null;
        TEST.ASSERT.equal( _box ? _box.getAttribute( "data-bulk-state" ) : null, "over", "La jauge devrait etre en état over en fin de run, obtenu : [" + ( _box ? _box.getAttribute( "data-bulk-state" ) : "null" ) + "]" );
        TEST.ASSERT.equal( _range ? _range.getAttribute( "max" ) : null, "" + ( 2 * _bulk_max ), "La piste devrait aller à 2×max, obtenu : [" + ( _range ? _range.getAttribute( "max" ) : "null" ) + "]" );
        TEST.ASSERT.equal( _range ? parseFloat( _range.value ) : null, Math.min( _bulk_total, 2 * _bulk_max ), "Le curseur devrait valoir le total encombré, obtenu : [" + ( _range ? _range.value : "null" ) + "] pour " + _bulk_total );
        TEST.ASSERT.equal( _text ? _text.textContent : null, "Encombrement : " + String( _bulk_total ).replace( ".", "," ) + " / " + _bulk_max, "La barre devrait lire le total encombré, obtenu : [" + ( _text ? _text.textContent : "null" ) + "]" );
    } );
} );
