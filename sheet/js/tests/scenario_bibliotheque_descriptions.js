"use strict";
/**
 * Scenario : BIBLIOTHEQUE DESCRIPTIONS (suite de scenario_bibliotheque)
 * Suite de consultation, aucun personnage requis. Certaines entrées
 * scrapées n'ont pas de texte propre (titre de section nu dans la source :
 * dons d'archétype « Affiliation aux … », archétypes entiers, historique
 * « Pupille ») : la carte ne doit PAS rendre « undefined ». Quand l'entrée
 * compendium de même nom existe, sa description sert de repli (affiché =
 * cherchable) ; sinon la carte n'a simplement pas de bloc description.
 *  1. Sujet Dons : aucune carte « undefined » ; « Affiliation aux Branches
 *     d'émeraude » existe SANS bloc description (pas d'entrée compendium de
 *     ce nom) ; « Changement de costume » (don d'archétype à description
 *     scrapée vide) A un bloc description = repli compendium ; le contrôle
 *     « Animal de compagnie » garde son premier paragraphe scrapé.
 *  2. Sujets Archétypes puis Historiques : idem — « Maître des parchemins »
 *     et « Pupille » ont un bloc description (repli compendium), « Gardien du
 *     Magaambya » garde le sien ; aucun « undefined ». Un filtre posé sur un
 *     mot de la description compendium de « Pupille » fait passer sa carte
 *     (le repli est cherchable), le × du tag restaure la liste.
 */
var TEST_descCard = function ( name ) {
    let _cards = TEST_libraryCards();
    for ( let i = 0, _size_i = _cards.length; i < _size_i; i++ ) {
        let _name = _cards[ i ].querySelector( ".library-card-name" );
        if ( _name && _name.textContent === name ) {
            return _cards[ i ];
        }
    }
    return null;
};

var TEST_descNoUndefined = function ( subject_label ) {
    let _cards = TEST_libraryCards();
    let _bad   = [];
    for ( let i = 0, _size_i = _cards.length; i < _size_i; i++ ) {
        let _desc = _cards[ i ].querySelector( ".library-card-description" );
        if ( _desc && _desc.textContent.indexOf( "undefined" ) !== -1 ) {
            let _name = _cards[ i ].querySelector( ".library-card-name" );
            _bad.push( _name ? _name.textContent : "?" );
        }
    }
    TEST.ASSERT.equal( _bad.length, 0, "Aucune carte du sujet " + subject_label + " ne devrait rendre « undefined », cartes fautives : " + JSON.stringify( _bad.slice( 0, 5 ) ) );
};

// Le texte aplati attendu d'une description compendium (même strip que la carte)
var TEST_descStrip = function ( html ) {
    return String( html || "" ).replace( /<[^>]*>/g, " " ).replace( /\s+/g, " " ).trim();
};

TEST.RUNNER.register( "[BIBLIOTHEQUE DESCRIPTIONS] sujet Dons = pas de « undefined », repli compendium, contrôle scrapé", function () {
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LibraryWindow.NAME ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _chip = TEST_librarySubjectChip( "Dons" );
        TEST.ASSERT.notNull( _chip, "Pre-condition : la puce Dons devrait être rendue" );
        if ( _chip ) {
            _chip.click();
        }
        return TEST.wait();
    } ).then( function () {
        TEST_descNoUndefined( "Dons" );
        // « Affiliation aux Branches d'émeraude » : titre de section nu dans la
        // source, repli par la carte d'alias écrite à la main sur l'entrée
        // compendium de la branche (Branches d'émeraude, class-feature)
        let _alias_entry = OBJECT.getInformationByName( "Affiliation aux Branches d'émeraude" );
        TEST.ASSERT.notNull( _alias_entry, "Pre-condition : l'alias devrait résoudre l'affiliation vers sa branche du compendium" );
        TEST.ASSERT.equal( _alias_entry ? _alias_entry.text : null, "Branches d'émeraude", "L'alias devrait pointer sur l'entrée de la branche, obtenu : [" + ( _alias_entry ? _alias_entry.text : "null" ) + "]" );
        let _card = TEST_descCard( "Affiliation aux Branches d'émeraude" );
        TEST.ASSERT.notNull( _card, "La carte « Affiliation aux Branches d'émeraude » devrait être rendue dans le sujet Dons" );
        if ( _card && _alias_entry ) {
            let _desc = _card.querySelector( ".library-card-description" );
            TEST.ASSERT.notNull( _desc, "L'affiliation devrait porter le repli de sa branche (alias compendium)" );
            if ( _desc ) {
                TEST.ASSERT.equal( _desc.textContent, TEST_descStrip( _alias_entry.description ), "La description affichée devrait être celle de la branche, aplatie" );
            }
        }
        // « Dons communs à tous les gardiens du Magaambya » : titre de section
        // sans aucune entrée compendium derrière -> carte présente, SANS bloc
        TEST.ASSERT.isNull( OBJECT.getInformationByName( "Dons communs à tous les gardiens du Magaambya" ), "Pre-condition : aucun repli compendium pour ce titre de section" );
        let _header_card = TEST_descCard( "Dons communs à tous les gardiens du Magaambya" );
        TEST.ASSERT.notNull( _header_card, "La carte « Dons communs… » devrait être rendue dans le sujet Dons" );
        if ( _header_card ) {
            TEST.ASSERT.isNull( _header_card.querySelector( ".library-card-description" ), "Sans repli compendium, la carte ne devrait rendre aucun bloc (et surtout pas « undefined »), obtenu : [" + ( _header_card.querySelector( ".library-card-description" ) || { textContent: "" } ).textContent + "]" );
        }
        // « Changement de costume » : description scrapée vide MAIS entrée
        // compendium connue -> le bloc description retombe sur le compendium
        let _compendium = OBJECT.getInformationByName( "Changement de costume" );
        TEST.ASSERT.notNull( _compendium, "Pre-condition : le compendium devrait connaître « Changement de costume »" );
        let _fallback_card = TEST_descCard( "Changement de costume" );
        TEST.ASSERT.notNull( _fallback_card, "La carte « Changement de costume » devrait être rendue dans le sujet Dons" );
        if ( _fallback_card && _compendium ) {
            let _desc = _fallback_card.querySelector( ".library-card-description" );
            TEST.ASSERT.notNull( _desc, "La carte « Changement de costume » devrait porter un bloc description (repli compendium)" );
            if ( _desc ) {
                TEST.ASSERT.equal( _desc.textContent, TEST_descStrip( _compendium.description ), "La description affichée devrait être le repli compendium aplati, obtenu : [" + _desc.textContent.slice( 0, 80 ) + "...]" );
            }
        }
        // Contrôle positif : « Animal de compagnie » affiche son premier paragraphe scrapé
        let _control = TEST_descCard( "Animal de compagnie" );
        TEST.ASSERT.notNull( _control, "La carte « Animal de compagnie » devrait être rendue" );
        if ( _control ) {
            let _desc = _control.querySelector( ".library-card-description" );
            TEST.ASSERT.notNull( _desc, "La carte « Animal de compagnie » devrait porter un bloc description" );
            if ( _desc ) {
                TEST.ASSERT.ok( _desc.textContent.indexOf( "animal de compagnie" ) !== -1, "La description du contrôle devrait être le texte scrapé, obtenu : [" + _desc.textContent.slice( 0, 60 ) + "]" );
            }
        }
    } );
} );

TEST.RUNNER.register( "[BIBLIOTHEQUE DESCRIPTIONS] Archétypes + Historiques = repli compendium, cherchard, pas de « undefined »", function () {
    let _chip = TEST_librarySubjectChip( "Archétypes" );
    TEST.ASSERT.notNull( _chip, "Pre-condition : la puce Archétypes devrait être rendue" );
    if ( !_chip ) {
        return;
    }
    _chip.click();
    return TEST.wait().then( function () {
        TEST_descNoUndefined( "Archétypes" );
        // « Maître des parchemins » : description scrapée vide, repli sur l'entrée archetype du compendium
        let _compendium = OBJECT.getInformationByName( "Maître des parchemins" );
        TEST.ASSERT.notNull( _compendium, "Pre-condition : le compendium devrait connaître l'archétype « Maître des parchemins »" );
        let _empty = TEST_descCard( "Maître des parchemins" );
        TEST.ASSERT.notNull( _empty, "La carte « Maître des parchemins » devrait être rendue" );
        if ( _empty && _compendium ) {
            let _desc = _empty.querySelector( ".library-card-description" );
            TEST.ASSERT.notNull( _desc, "L'archétype à description scrapée vide devrait porter le repli compendium" );
            if ( _desc ) {
                TEST.ASSERT.equal( _desc.textContent, TEST_descStrip( _compendium.description ), "La description devrait être le repli compendium aplati" );
            }
        }
        // Contrôle : « Gardien du Magaambya » garde sa description scrapée
        let _control = TEST_descCard( "Gardien du Magaambya" );
        TEST.ASSERT.notNull( _control, "La carte « Gardien du Magaambya » devrait être rendue" );
        if ( _control ) {
            TEST.ASSERT.notNull( _control.querySelector( ".library-card-description" ), "L'archétype « Gardien du Magaambya » devrait porter un bloc description" );
        }
        let _chip_h = TEST_librarySubjectChip( "Historiques" );
        TEST.ASSERT.notNull( _chip_h, "Pre-condition : la puce Historiques devrait être rendue" );
        if ( !_chip_h ) {
            return;
        }
        _chip_h.click();
        return TEST.wait();
    } ).then( function () {
        TEST_descNoUndefined( "Historiques" );
        // « Pupille » : description scrapée vide, repli sur le background du compendium
        let _compendium = OBJECT.getInformationByName( "Pupille" );
        TEST.ASSERT.notNull( _compendium, "Pre-condition : le compendium devrait connaître l'historique « Pupille »" );
        let _pupille = TEST_descCard( "Pupille" );
        TEST.ASSERT.notNull( _pupille, "La carte « Pupille » devrait être rendue dans le sujet Historiques" );
        if ( _pupille && _compendium ) {
            let _desc = _pupille.querySelector( ".library-card-description" );
            TEST.ASSERT.notNull( _desc, "L'historique « Pupille » devrait porter le repli compendium" );
        }
        // Le repli affiché est cherchable : un mot de la description compendium
        // de « Pupille » fait passer sa carte par le filtre texte
        let _strip     = TEST_descStrip( _compendium ? _compendium.description : "" );
        let _words     = _strip.split( " " );
        let _probe     = null;
        for ( let w = 0, _size_w = _words.length; w < _size_w; w++ ) {
            if ( _words[ w ].length >= 6 && _words[ w ].toLowerCase().indexOf( "pupille" ) === -1 ) {
                _probe = _words[ w ];
                break;
            }
        }
        TEST.ASSERT.notNull( _probe, "Pre-condition : un mot-sonde de la description compendium de Pupille" );
        if ( _probe ) {
            TEST_libraryCommitFilterByButton( _probe );
            return TEST.wait();
        }
    } ).then( function () {
        let _probe_card = TEST_descCard( "Pupille" );
        TEST.ASSERT.notNull( _probe_card, "Avec un filtre sur un mot de sa description compendium, la carte « Pupille » devrait rester affichée (repli cherchable)" );
        // Le × du tag restaure la liste complète
        let _remove = TEST_libraryWindowDom().querySelector( ".library-active-tag-remove" );
        TEST.ASSERT.notNull( _remove, "Le tag posé devrait porter son ×" );
        if ( _remove ) {
            _remove.click();
        }
        return TEST.wait();
    } ).then( function () {
        TEST.ASSERT.notNull( TEST_descCard( "Pupille" ), "Après retrait du filtre, « Pupille » devrait réapparaître" );
        TEST.ASSERT.ok( TEST_libraryCards().length > 1, "La liste historiques devrait être restaurée (plusieurs cartes), obtenu : " + TEST_libraryCards().length );
    } );
} );
