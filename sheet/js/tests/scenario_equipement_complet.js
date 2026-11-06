"use strict";
/**
 * Scenario : ÉQUIPEMENT COMPLET (fin de run, EN DERNIER apres
 * scenario_save_complet — demande utilisateur : la feuille du run se
 * termine avec UNE DIZAINE D'OBJETS CONFIGURÉS pour tester l'onglet
 * Équipement a la main ; il ne se RESET pas, il part de la feuille
 * Magicien niveau 10 rechargée du save et la GARDE pleine). Chaque
 * objet se pose par les GESTES RÉELS de la popup d'ajout (les "?",
 * les éditions et les filtres restent a l'utilisateur) : deux armes
 * (dont une équipée), deux armures (une équipée, une entreposée avec
 * son lieu), trois ajouts d'un meme consommable qui empilent, un
 * objet d'autre type entreposé, un objet d'autre type au sac (le nom
 * porte une APOSTROPHE si le dataset en propose une — la fermeture
 * des popups s'y teste a la main) et une création au NOM LIBRE (hors
 * dataset, par le filtre). Le compte attendu se CALCULE (les objets
 * dupliqués ne créent pas d'entrée), l'encombrement porté croise le
 * domaine, le save part en console GSOU (l'utilisateur copie le
 * JSON) et le run se termine sur la feuille vivante — les objets
 * restent posés.
 */
function TEST_equipementCompletAddExisting( kind, value, location, place, comment ) {
    TEST_stuffsOpenAddPopup();
    return TEST.wait().then( function () {
        TEST_stuffsPickType( kind );
        return TEST.wait();
    } ).then( function () {
        TEST_stuffsPickModel( value );
        return TEST.wait();
    } ).then( function () {
        if ( location ) {
            TEST_stuffsPickLocation( location );
            return TEST.wait();
        }
        return;
    } ).then( function () {
        let _popup = document.querySelector( "body > .popup .stuffs-add-popup" );
        if ( !_popup ) {
            return;
        }
        if ( place ) {
            _popup.querySelector( ".stuffs-form-popup-place-input" ).value = place;
        }
        if ( comment ) {
            _popup.querySelector( ".stuffs-form-popup-comment-input" ).value = comment;
        }
        TEST_stuffsValidateAddPopup();
        return TEST.wait();
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
        if ( !STUFFS[ _i ][ "Dégâts" ] && !STUFFS[ _i ][ "CA bonus" ] && STUFFS[ _i ].traits.indexOf( STUFF.CONSUMABLE_TRAIT ) !== -1 ) {
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
    let _free_name = "Fiole de souvenirs de la Guerre des Nains";
    // Les gestes d'ajout : trois ajouts du meme consommable (il
    // empile), une création libre par le FILTRE (hors dataset), le
    // reste au picker de modèle
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
        .then( function () { return TEST_equipementCompletAddExisting( "other", _other_apostrophe, "backpack" ); } )
        .then( function () {
            TEST_stuffsOpenAddPopup();
            return TEST.wait();
        } )
        .then( function () {
            TEST_stuffsPickType( "other" );
            return TEST.wait();
        } )
        .then( function () {
            TEST_stuffsFilterEnter( _free_name );
            return TEST.wait();
        } )
        .then( function () {
            TEST_stuffsValidateAddPopup();
            return TEST.wait();
        } );
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
        _expected_keys[ "other__" + _free_name ]                  = true;
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
        TEST.ASSERT.ok( _stuffs.getContentByUUID( "other__" + _free_name ), "La création au nom libre devrait vivre dans le conteneur" );
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
        TEST.ASSERT.equal( _reloaded.getStuffs().getContentByUUID( "other__" + _free_name ) ? _reloaded.getStuffs().getContentByUUID( "other__" + _free_name ).location : null, "backpack", "La création libre devrait survivre a la relecture au Sac à dos" );
        // Le save part en console GSOU pour l'utilisateur (il garde le
        // JSON avec l'équipement)
        CONTROLLER.Character.save();
    } );
} );
