"use strict";
/**
 * Scenario : HISTORIQUES - le choix d'historique vit dans la Bibliothèque
 * Le champ Historique (onglet Général, sous les PV) vit sur le PERSONNAGE,
 * affiché dès le début ; son clic bascule la feuille sur la Bibliothèque,
 * sujet Historiques, avec le filtre sur le nom posé (aucun filtre si vide).
 * Le « + » d'une carte pose l'historique du personnage et bascule sur le
 * Général ; son second clic le vide. Affichage seul (décision utilisateur :
 * les bonus de l'historique ne s'appliquent pas au v1, le boost du choix
 * libre se pose à la main dans l'onglet Ajustements).
 * Depart : feuille vide (TEST.RESET.sheet()).
 * 1. Champ rendu sur page vide, input readOnly câblé sur
 *    event__historic__goto_library.
 * 2. Clic champ → Bibliothèque, sujet Historiques actif, filtre vide,
 *    AUCUNE chip de type, une carte par historique du scrape.
 * 3. Filtre + « + » de la carte → historique posé (objet + champ du
 *    Général), bascule Général, la carte porte ses lignes (compétences,
 *    don, bonus) et le tag Mon historique.
 * 4. Recherche par contenu : compétence, don, bonus — comptes CALCULÉS du
 *    dataset (le matcher reconstruit côté test), jamais figés.
 * 5. Sauvegarde → relecture en mémoire : clé historic restaurée ; migration
 *    FOSSILE : les vieux fichiers portent l'historique DANS le tableau
 *    skills de l'entrée de niveau.
 * 6. Second clic « + » → historique vidé, champ vide du Général.
 */

function TEST_historicComponent() {
    return CONTROLLER.Character.current_character.getHistoric();
}

function TEST_historicFieldInput() {
    return document.querySelector( ".characters-sheet-content .grid-area.area-historic input" );
}

// Les lignes de la carte reconstruites côté test au format EXACT de la
// fenêtre : la recherche peut viser la ligne « Bonus : INT ou SAG » elle-meme
function TEST_historicLines( entry ) {
    let _lines = [];
    if ( entry.skills ) {
        for ( let _i = 0, _size_i = entry.skills.length; _i < _size_i; _i++ ) {
            _lines.push( entry.skills[ _i ].label + ( entry.skills[ _i ].qualifier ? " " + entry.skills[ _i ].qualifier : "" ) + " — " + entry.skills[ _i ].characteristic );
        }
    }
    if ( entry.gift_skill && entry.gift_skill.length ) {
        _lines.push( "Don : " + entry.gift_skill.join( ", " ) );
    }
    let _bonus_choices = [];
    if ( entry.characteristics_bonus && entry.characteristics_bonus.choice ) {
        for ( let _i = 0, _size_i = entry.characteristics_bonus.choice.length; _i < _size_i; _i++ ) {
            _bonus_choices.push( entry.characteristics_bonus.choice[ _i ] === "FRE" ? "libre" : entry.characteristics_bonus.choice[ _i ] );
        }
    }
    if ( _bonus_choices.length ) {
        _lines.push( "Bonus : " + _bonus_choices.join( " ou " ) );
    }
    return _lines;
}

// Le texte cherché de la bibliothèque reconstruit côté test : le nom, la
// description et les lignes (le meme matcher que la fenêtre)
function TEST_historicMatches( entry, filter_value ) {
    let _filter                        = filter_value.toLowerCase();
    if ( String( entry.name ).toLowerCase().indexOf( _filter ) !== -1 ) {
        return true;
    }
    let _description = Array.isArray( entry.description ) ? entry.description[ 0 ] : ( entry.description || "" );
    let _parts                           = [];
    _parts.push( String( _description ).replace( /<[^>]*>/g, " " ).replace( /\s+/g, " " ).trim() );
    let _lines                           = TEST_historicLines( entry );
    for ( let _i = 0, _size_i = _lines.length; _i < _size_i; _i++ ) {
        _parts.push( _lines[ _i ] );
    }
    return _parts.join( " " ).toLowerCase().indexOf( _filter ) !== -1;
}

function TEST_historicMatchingCount( filter_value ) {
    let _count = 0;
    for ( let _i = 0, _size_i = HISTORICS.ENUM.length; _i < _size_i; _i++ ) {
        if ( HISTORICS.ENUM[ _i ] && HISTORICS.ENUM[ _i ].name && TEST_historicMatches( HISTORICS.ENUM[ _i ], filter_value ) ) {
            _count++;
        }
    }
    return _count;
}

TEST.RUNNER.register( "[HISTORIQUES] champ posé, câblé vers la Bibliothèque", function () {
    TEST.RESET.sheet();
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Un nouveau personnage devrait etre instancie apres le reset" );
    if ( !_character ) {
        return;
    }
    // Le champ vit sur le PERSONNAGE : rendu DES LE RESET, sans aucune classe
    TEST.ASSERT.notNull( document.querySelector( ".characters-sheet-content .grid-area.area-historic" ), "Le champ Historique devrait etre rendu sur une page vide (affiche tout des le debut)" );
    let _input                         = TEST_historicFieldInput();
    TEST.ASSERT.notNull( _input, "Le champ Historique devrait etre rendu" );
    if ( !_input ) {
        return;
    }
    TEST.ASSERT.ok( _input.readOnly, "Le champ Historique devrait etre en lecture seule" );
    let _onclick                       = _input.getAttribute( "onclick" ) || "";
    TEST.ASSERT.ok( _onclick.indexOf( "event__historic__goto_library" ) !== -1, "Le champ devrait etre câblé sur event__historic__goto_library, obtenu : [" + _onclick + "]" );
    TEST.ASSERT.equal( TEST_historicComponent().getValue(), "", "L'historique du personnage devrait etre vide avant tout choix, obtenu : [" + TEST_historicComponent().getValue() + "]" );
} );

TEST.RUNNER.register( "[HISTORIQUES] clic champ → Bibliothèque, sujet Historiques, filtre vide", function () {
    let _input                          = TEST_historicFieldInput();
    TEST.ASSERT.notNull( _input, "Pre-condition : champ Historique rendu" );
    if ( !_input ) {
        return;
    }
    _input.click();
    let _character                      = CONTROLLER.Character.current_character;
    TEST.ASSERT.equal( _character.windows.getActiveWindow().getName(), CHARACTER.LibraryWindow.NAME, "Le clic sur le champ devrait basculer la feuille sur la Bibliothèque, obtenu : " + _character.windows.getActiveWindow().getName() );
    let _window_dom                     = TEST_libraryWindowDom();
    TEST.ASSERT.notNull( _window_dom, "La fenêtre Bibliothèque devrait etre rendue" );
    if ( !_window_dom ) {
        return;
    }
    let _active_subject                 = _window_dom.querySelector( ".library-subject-btn.active" );
    TEST.ASSERT.notNull( _active_subject, "Un sujet devrait etre actif" );
    if ( _active_subject ) {
        TEST.ASSERT.equal( _active_subject.textContent, "Historiques", "Le sujet actif devrait etre Historiques (pose par le clic du champ), obtenu : " + _active_subject.textContent );
    }
    // La valeur est vide : AUCUN filtre pré-posé
    let _active_filters                 = _window_dom.querySelector( ".library-active-filters" );
    if ( _active_filters ) {
        TEST.ASSERT.equal( _active_filters.childElementCount, 0, "Aucun filtre ne devrait etre posé (historique vide), obtenu : " + _active_filters.childElementCount );
    }
    TEST.ASSERT.equal( _window_dom.querySelectorAll( ".library-filter-btn" ).length, 0, "Le sujet Historiques ne devrait porter aucune chip de type, obtenu : " + _window_dom.querySelectorAll( ".library-filter-btn" ).length );
    let _expected                       = TEST_historicMatchingCount( "" );
    let _cards                          = _window_dom.querySelectorAll( ".library-card" );
    TEST.ASSERT.equal( _cards.length, _expected, "Le sujet devrait rendre une carte par historique scrape (" + _expected + "), obtenu : " + _cards.length );
    TEST.ASSERT.equal( _window_dom.querySelectorAll( ".library-card-add" ).length, _expected, "Chaque carte devrait porter son bouton « + »" );
} );

TEST.RUNNER.register( "[HISTORIQUES] « + » de la carte → personnage + bascule Général", function () {
    let _character                      = CONTROLLER.Character.current_character;
    let _window_dom                     = TEST_libraryWindowDom();
    TEST.ASSERT.notNull( _window_dom, "Pre-condition : fenêtre Bibliothèque rendue" );
    if ( !_window_dom ) {
        return;
    }
    TEST_libraryCommitFilterByEnter( "acolyte" );
    let _expected                       = TEST_historicMatchingCount( "acolyte" );
    let _cards                          = _window_dom.querySelectorAll( ".library-card" );
    TEST.ASSERT.equal( _cards.length, _expected, "Le filtre « acolyte » devrait laisser les " + _expected + " historique(s) correspondants, obtenu : " + _cards.length );
    if ( !_expected || !_cards.length ) {
        return;
    }
    let _entry                          = null;
    for ( let _i = 0, _size_i = HISTORICS.ENUM.length; _i < _size_i; _i++ ) {
        if ( HISTORICS.ENUM[ _i ] && HISTORICS.ENUM[ _i ].name === _cards[ 0 ].querySelector( ".library-card-name" ).textContent ) {
            _entry                      = HISTORICS.ENUM[ _i ];
        }
    }
    TEST.ASSERT.notNull( _entry, "La carte rendue devrait correspondre a une entrée du dataset" );
    if ( !_entry ) {
        return;
    }
    // La carte porte ses lignes : ses compétences qualifiées, son don, ses
    // bonus de caractéristiques (un point par ligne)
    let _lines                          = _cards[ 0 ].querySelectorAll( ".library-card-key-line" );
    TEST.ASSERT.ok( _lines.length >= ( _entry.skills ? _entry.skills.length : 0 ) + ( _entry.gift_skill ? 1 : 0 ) + ( _entry.characteristics_bonus ? 1 : 0 ), "La carte devrait porter une ligne par compétence, son don et son bonus, obtenu : " + _lines.length );
    let _lines_text                     = "";
    for ( let _i = 0, _size_i = _lines.length; _i < _size_i; _i++ ) {
        _lines_text                     = _lines_text + " " + _lines[ _i ].textContent.toLowerCase();
    }
    for ( let _i = 0, _size_i = _entry.skills ? _entry.skills.length : 0; _i < _size_i; _i++ ) {
        TEST.ASSERT.ok( _lines_text.indexOf( _entry.skills[ _i ].label.toLowerCase() ) !== -1, "La carte devrait citer la compétence " + _entry.skills[ _i ].label + ", obtenu : [" + _lines_text + "]" );
    }
    if ( _entry.gift_skill && _entry.gift_skill.length ) {
        TEST.ASSERT.ok( _lines_text.indexOf( "don : " + _entry.gift_skill[ 0 ].toLowerCase() ) !== -1, "La carte devrait citer le don " + _entry.gift_skill[ 0 ] + ", obtenu : [" + _lines_text + "]" );
    }
    if ( _entry.characteristics_bonus && _entry.characteristics_bonus.choice ) {
        TEST.ASSERT.ok( _lines_text.indexOf( "bonus : " ) !== -1, "La carte devrait citer ses bonus, obtenu : [" + _lines_text + "]" );
    }
    _cards[ 0 ].querySelector( ".library-card-add" ).click();
    TEST.ASSERT.equal( TEST_historicComponent().getValue(), _entry.name, "Le « + » devrait poser " + _entry.name + " sur le personnage, obtenu : [" + TEST_historicComponent().getValue() + "]" );
    TEST.ASSERT.equal( _character.windows.getActiveWindow().getName(), CHARACTER.GeneralWindow.NAME, "Le « + » devrait basculer la feuille sur le Général, obtenu : " + _character.windows.getActiveWindow().getName() );
    let _input                          = TEST_historicFieldInput();
    if ( _input ) {
        TEST.ASSERT.equal( _input.value, _entry.name, "Le champ du Général devrait suivre en place, obtenu : [" + _input.value + "]" );
    }
    TEST.ASSERT.equal( _character.getDataToSave()[ HISTORICS.key_element ], _entry.name, "La sauvegarde devrait porter la clé " + HISTORICS.key_element + ", obtenu : [" + _character.getDataToSave()[ HISTORICS.key_element ] + "]" );
} );

TEST.RUNNER.register( "[HISTORIQUES] recherche par contenu = compétence, don, bonus", function () {
    let _window_dom;
    let _active_tags;
    let _input                          = TEST_historicFieldInput();
    TEST.ASSERT.notNull( _input, "Pre-condition : champ Historique rendu" );
    if ( !_input ) {
        return;
    }
    _input.click();
    _window_dom                         = TEST_libraryWindowDom();
    TEST.ASSERT.notNull( _window_dom, "Pre-condition : fenêtre Bibliothèque rendue" );
    if ( !_window_dom ) {
        return;
    }
    // Le clic du champ pose le filtre du nom courant : on repart d'une vue
    // vierge avant chaque recherche (le × retire LUI SEUL son filtre)
    let _commit                          = function ( filter_value ) {
        _active_tags                    = _window_dom.querySelectorAll( ".library-active-tag-remove" );
        for ( let _i = 0, _size_i = _active_tags.length; _i < _size_i; _i++ ) {
            _active_tags[ _i ].click();
        }
        TEST_libraryCommitFilterByEnter( filter_value );
        let _cards                      = _window_dom.querySelectorAll( ".library-card" );
        TEST.ASSERT.equal( _cards.length, TEST_historicMatchingCount( filter_value ), "Le filtre « " + filter_value + " » devrait laisser les " + TEST_historicMatchingCount( filter_value ) + " historique(s) correspondants, obtenu : " + _cards.length );
        return _cards;
    };
    let _religion_cards                 = _commit( "religion" );
    if ( _religion_cards.length ) {
        let _lines_text                  = "";
        let _lines                       = _religion_cards[ 0 ].querySelectorAll( ".library-card-key-line" );
        for ( let _i = 0, _size_i = _lines.length; _i < _size_i; _i++ ) {
            _lines_text                  = _lines_text + " " + _lines[ _i ].textContent.toLowerCase();
        }
        TEST.ASSERT.ok( _lines_text.indexOf( "religion" ) !== -1, "La carte passée par « religion » devrait citer la compétence en ligne (tout ce qui s'affiche se filtre), obtenu : [" + _lines_text + "]" );
    }
    let _feat_cards                      = _commit( "étudiant du droit canon" );
    TEST.ASSERT.ok( _feat_cards.length >= 1, "Le don de l'historique devrait filtrer la carte qui l'affiche, obtenu : " + _feat_cards.length );
    let _bonus_cards                     = _commit( "int ou sag" );
    TEST.ASSERT.ok( _bonus_cards.length >= 1, "La ligne de bonus devrait filtrer les cartes qui l'affichent, obtenu : " + _bonus_cards.length );
} );

TEST.RUNNER.register( "[HISTORIQUES][SAVE] relecture en mémoire + migration fossile", function () {
    let _character                      = CONTROLLER.Character.current_character;
    let _historic                       = TEST_historicComponent().getValue();
    TEST.ASSERT.ok( !!_historic, "Pre-condition : un historique posé sur le personnage" );
    let _saved                          = _character.getDataToSave();
    TEST.ASSERT.equal( _saved[ HISTORICS.key_element ], _historic, "La sauvegarde devrait porter l'historique au niveau du personnage, obtenu : [" + _saved[ HISTORICS.key_element ] + "]" );
    let _reloaded                       = new CHARACTER.Current();
    _reloaded.updateData( _saved );
    TEST.ASSERT.equal( _reloaded.getHistoric().getValue(), _historic, "L'historique du personnage devrait etre restauré, obtenu : [" + _reloaded.getHistoric().getValue() + "]" );
    // FOSSILE : les vieux fichiers portent l'historique DANS le tableau
    // skills de l'entree de niveau (forme reelle du fichier a9b2...)
    let _fossil                         = new CHARACTER.Current();
    _fossil.updateData( {
        "class"          : { "name": "Magicien" },
        "levels_history" : [ {
            "level_name": 1,
            "life_class": 10,
            "skills"    : [ { "origin": "class", "historic": "Acolyte" } ]
        } ]
    } );
    TEST.ASSERT.equal( _fossil.getHistoric().getValue(), "Acolyte", "L'historique des vieux fichiers (dans skills de l'entree) devrait migrer vers le champ, obtenu : [" + _fossil.getHistoric().getValue() + "]" );
} );

TEST.RUNNER.register( "[HISTORIQUES] second clic « + » → historique vidé", function () {
    let _input                          = TEST_historicFieldInput();
    TEST.ASSERT.notNull( _input, "Pre-condition : champ Historique rendu" );
    if ( !_input ) {
        return;
    }
    _input.click();
    let _window_dom                     = TEST_libraryWindowDom();
    TEST.ASSERT.notNull( _window_dom, "Pre-condition : fenêtre Bibliothèque rendue" );
    if ( !_window_dom ) {
        return;
    }
    // Le clic du champ pose le filtre du nom courant : la carte possédée est
    // la et porte son tag de possession
    let _card                           = _window_dom.querySelector( ".library-card" );
    TEST.ASSERT.notNull( _card, "La carte de l'historique possédé devrait etre rendue (le filtre posé persiste)" );
    if ( !_card ) {
        return;
    }
    let _owned_tag                      = _card.querySelector( ".library-tag--owned" );
    TEST.ASSERT.notNull( _owned_tag, "La carte possédée devrait porter le tag Mon historique" );
    if ( _owned_tag ) {
        TEST.ASSERT.equal( _owned_tag.textContent, "Mon historique", "Le tag de possession devrait porter son libelle, obtenu : [" + _owned_tag.textContent + "]" );
    }
    _card.querySelector( ".library-card-add" ).click();
    TEST.ASSERT.equal( TEST_historicComponent().getValue(), "", "Le second clic « + » devrait vider l'historique, obtenu : [" + TEST_historicComponent().getValue() + "]" );
    let _field                          = TEST_historicFieldInput();
    if ( _field ) {
        TEST.ASSERT.equal( _field.value, "", "Le champ du Général devrait suivre le vidage en place, obtenu : [" + _field.value + "]" );
    }
} );
