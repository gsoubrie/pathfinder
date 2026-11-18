"use strict";
/**
 * Scenario : BIBLIOTHEQUE
 * Suite independante de consultation (aucune pre-condition d'ascendance ni
 * de classe, aucune ecriture sur le personnage — l'onglet remplace les
 * Dons, les cases a cocher de selection et le « ? » de popup ont disparu
 * avec eux : la carte porte le texte, rien ne double l'information).
 * UNE SEULE zone de filtre par sujet : un tag pose matche le NOM, un TRAIT
 * ou le CONTENU (texte) de la carte, les tags se cumulent en ET, le ×
 * retire SON tag seul. Le commit se fait par ENTREE ou par le BOUTON « + »
 * (les claviers virtuels des mobiles/tablettes n'emettent pas toujours
 * l'Entree — retour utilisateur).
 * 1. Clic onglet Bibliothèque : 3 sujets rendus, Dons actif par defaut,
 *    une zone de filtre + son bouton « + », cartes SANS case a cocher ni
 *    « ? » ni bouton d'ajout (consultation pure, la possession d'un don
 *    reste a trancher), aucune rangee de filtres poses.
 * 2. Sujet Dons : le filtre texte matche AUSSI LE TAG DE TYPE (retour
 *    utilisateur : « Ascendance » sur Abajoues ne se filtrait pas) — chip
 *    Ascendance + tag « ascendance » = tous les dons d'ascendance gates
 *    par la race posee (compte calcule), le tag de la carte visible.
 * 3. Sujet Dons : chip Généraux, tag par trait (Entree) + tag par nom
 *    (bouton +) + tag par CONTENU (Entree, mot de la description), le ET
 *    cumule (comptes calcules du dataset), un tag inconnu vide la liste,
 *    le × de SON tag restaure le compte d'avant.
 * 4. Sujet Sorts : cartes du dataset scrape, sections par nature, tag par
 *    le premier trait du premier sort (bouton +, compte calcule) ; LE
 *    BOUTON « + » d'un sort non possede l'AJOUTE AU REPERTOIRE (le plat
 *    des popups d'ajout, domaine + rendu de la fenêtre Sorts par le
 *    broadcast) ET BASCULE LA FEUILLE SUR L'ONGLET SORTS (retour
 *    utilisateur — meme tour qu'un clic d'onglet reel), le second clic
 *    sur un sort possede ne fait rien (un repertoire est un ensemble).
 * 5. Sujet Équipement : chips des types de la scrap, tag par nom « épée
 *    longue » (accents reels), le × restaure toute la liste, tag par le
 *    trait Consommable, tag par le PRIX (la ligne clé « Prix 1 po » est
 *    cherchable — retour utilisateur) ; LE BOUTON « + » d'un objet non
 *    consommable non possede l'AJOUTE A L'INVENTAIRE (type embarque du
 *    classifieur, emplacement par defaut, rendu de la fenêtre Équipement
 *    par le broadcast) ET BASCULE LA FEUILLE SUR L'ONGLET ÉQUIPEMENT,
 *    le second clic ne se duplique pas.
 * 6. Retour sujet Dons : le changement de sujet reinitialise chip, zone et
 *    tags de filtre.
 */

function TEST_libraryWindowDom () {
    return document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LibraryWindow.NAME + "'] .library-window" );
}

function TEST_librarySubjectChip ( subject_label ) {
    let _chips = TEST_libraryWindowDom() ? TEST_libraryWindowDom().querySelectorAll( ".library-subject-btn" ) : [];
    for ( let i = 0, _size_i = _chips.length; i < _size_i; i++ ) {
        if ( _chips[ i ].textContent === subject_label ) {
            return _chips[ i ];
        }
    }
    return null;
}

function TEST_libraryFilterChip ( chip_label ) {
    let _chips = TEST_libraryWindowDom() ? TEST_libraryWindowDom().querySelectorAll( ".library-filter-btn" ) : [];
    for ( let i = 0, _size_i = _chips.length; i < _size_i; i++ ) {
        if ( _chips[ i ].textContent === chip_label ) {
            return _chips[ i ];
        }
    }
    return null;
}

// Le geste reel du clavier : le texte pose dans la zone, l'ENTREE qui
// dispatche le keydown
function TEST_libraryCommitFilterByEnter ( text_value ) {
    let _window_dom     = TEST_libraryWindowDom();
    let _input_dom      = _window_dom ? _window_dom.querySelector( ".library-search" ) : null;
    if ( !_input_dom ) {
        return null;
    }
    _input_dom.value    = text_value;
    _input_dom.dispatchEvent( new KeyboardEvent( "keydown", { "key": "Enter" } ) );
    return _window_dom;
}

// Le geste reel du tactile : le bouton « + » commit la valeur de la zone
function TEST_libraryCommitFilterByButton ( text_value ) {
    let _window_dom     = TEST_libraryWindowDom();
    let _input_dom      = _window_dom ? _window_dom.querySelector( ".library-search" ) : null;
    let _button_dom     = _window_dom ? _window_dom.querySelector( ".library-search-commit" ) : null;
    if ( !_input_dom || !_button_dom ) {
        return null;
    }
    _input_dom.value    = text_value;
    _button_dom.click();
    return _window_dom;
}

// Le chargement progressif rend un lot de LIBRARY.RENDER_BATCH_SIZE cartes,
// le sentinel en charge un autre au clic : on draine les lots jusqu'au bout
// (synchrone, déterministe en test — aucun scroll ne se produit en headless)
function TEST_libraryLoadAll() {
    let _window_dom = TEST_libraryWindowDom();
    if ( !_window_dom ) {
        return;
    }
    let _guard    = 0;
    let _sentinel = _window_dom.querySelector( ".library-list-sentinel:not(.done)" );
    while ( _sentinel && _guard++ < 100000 ) {
        _sentinel.click();
        _sentinel = _window_dom.querySelector( ".library-list-sentinel:not(.done)" );
    }
}

// Toutes les cartes affichables (draine les lots progressifs d'abord) :
// pour les comptages, jamais le lot partiel
function TEST_libraryCards() {
    TEST_libraryLoadAll();
    let _window_dom = TEST_libraryWindowDom();
    return _window_dom ? _window_dom.querySelectorAll( ".library-card" ) : [];
}

// Le matcher du domaine reconduit par le test (comptes calcules, jamais
// figes) : un filtre passe quand il vit dans le nom, dans un trait ou
// dans le texte de la carte
function TEST_libraryEntryMatchesFilter ( name, traits, description_text, type_text, key_line_text, filter_text ) {
    let _filter_lower  = filter_text.toLowerCase();
    if ( key_line_text && key_line_text.toLowerCase().indexOf( _filter_lower ) !== -1 ) {
        return true;
    }
    if ( type_text && type_text.toLowerCase().indexOf( _filter_lower ) !== -1 ) {
        return true;
    }
    if ( name && name.toLowerCase().indexOf( _filter_lower ) !== -1 ) {
        return true;
    }
    if ( traits && traits.length && traits.join( " " ).toLowerCase().indexOf( _filter_lower ) !== -1 ) {
        return true;
    }
    if ( description_text && description_text.replace( /<[^>]*>/g, " " ).replace( /\s+/g, " " ).toLowerCase().indexOf( _filter_lower ) !== -1 ) {
        return true;
    }
    return false;
}

// Les descriptions des dons melangent chaines et tableaux : le texte
// cherchable aplatit tout (la description COMPLETE, pas le premier
// paragraphe affiche par la carte)
function TEST_libraryFlattenFeatDescription ( description ) {
    if ( !description || !description.length ) {
        return "";
    }
    let _parts = [];
    for ( let i = 0, _size_i = description.length; i < _size_i; i++ ) {
        _parts.push( Array.isArray( description[ i ] ) ? description[ i ].join( " " ) : String( description[ i ] ) );
    }
    return _parts.join( " " );
}

function TEST_libraryCountGeneralFeats ( filters_array ) {
    let _count = 0;
    for ( let i = 0, _size_i = DON.GENERAL.ENUM.length; i < _size_i; i++ ) {
        let _feat          = DON.GENERAL.ENUM[ i ];
        let _all_match     = true;
        for ( let f = 0, _size_f = filters_array.length; f < _size_f; f++ ) {
            if ( !TEST_libraryEntryMatchesFilter( _feat.name, _feat.traits, TEST_libraryFlattenFeatDescription( _feat.description ), LIBRARY.FEAT_TYPE_LABELS[ "general" ], "", filters_array[ f ] ) ) {
                _all_match = false;
            }
        }
        if ( _all_match ) {
            _count++;
        }
    }
    return _count;
}

function TEST_libraryTagPresent ( tag_text ) {
    let _window_dom     = TEST_libraryWindowDom();
    let _tags           = _window_dom ? _window_dom.querySelectorAll( ".library-active-tag" ) : [];
    for ( let i = 0, _size_i = _tags.length; i < _size_i; i++ ) {
        let _value_dom  = _tags[ i ].querySelector( ".library-active-tag-value" );
        if ( _value_dom && _value_dom.textContent === tag_text ) {
            return true;
        }
    }
    return false;
}

function TEST_libraryRemoveTag ( tag_text ) {
    let _window_dom     = TEST_libraryWindowDom();
    let _tags           = _window_dom ? _window_dom.querySelectorAll( ".library-active-tag" ) : [];
    for ( let i = 0, _size_i = _tags.length; i < _size_i; i++ ) {
        let _value_dom  = _tags[ i ].querySelector( ".library-active-tag-value" );
        if ( _value_dom && _value_dom.textContent === tag_text ) {
            let _remove_dom = _tags[ i ].querySelector( ".library-active-tag-remove" );
            if ( _remove_dom ) {
                _remove_dom.click();
                return _window_dom;
            }
        }
    }
    return null;
}

// Le bouton « + » de la PREMIERE carte non possedee : les suites sorts et
// equipement couraient avant, une carte deja possedee masquerait le geste
// d'ajout (le no-op du domaine est asserte par ailleurs sur les dons)
function TEST_libraryFirstUnownedAddButton ( owned_check ) {
    let _window_dom     = TEST_libraryWindowDom();
    let _buttons        = _window_dom ? _window_dom.querySelectorAll( ".library-card-add" ) : [];
    for ( let i = 0, _size_i = _buttons.length; i < _size_i; i++ ) {
        if ( !owned_check( _buttons[ i ] ) ) {
            return _buttons[ i ];
        }
    }
    return null;
}

TEST.RUNNER.register( "[BIBLIOTHÈQUE] onglet = Bibliothèque, sujets = Dons, Sorts, Équipement, Archétypes, Historiques", function () {
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LibraryWindow.NAME ).then( function () {
        let _character                      = CONTROLLER.Character.current_character;
        TEST.ASSERT.equal( _character.windows.getActiveWindow().getName(), CHARACTER.LibraryWindow.NAME, "Fenetre active apres le clic" );
        let _pane                           = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LibraryWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Bibliothèque devrait etre rendu" );
        if ( !_pane ) {
            return;
        }
        let _window_dom                     = _pane.querySelector( ".library-window" );
        TEST.ASSERT.notNull( _window_dom, "La fenêtre Bibliothèque (.library-window) devrait etre rendue" );
        if ( !_window_dom ) {
            return;
        }
        let _subject_chips                  = _window_dom.querySelectorAll( ".library-subject-btn" );
        TEST.ASSERT.equal( _subject_chips.length, LIBRARY.SUBJECTS.length, "Les " + LIBRARY.SUBJECTS.length + " sujets devraient etre rendus, obtenu : " + _subject_chips.length );
        for ( let i = 0, _size_i = LIBRARY.SUBJECTS.length; i < _size_i; i++ ) {
            TEST.ASSERT.equal( _subject_chips[ i ].textContent, LIBRARY.SUBJECTS[ i ][ "label" ], "Le sujet en position " + ( i + 1 ) + " devrait porter son libelle" );
        }
        let _active_subject                 = _window_dom.querySelector( ".library-subject-btn.active" );
        TEST.ASSERT.notNull( _active_subject, "Le sujet Dons devrait etre actif par defaut" );
        if ( _active_subject ) {
            TEST.ASSERT.equal( _active_subject.textContent, "Dons", "Le sujet actif par defaut devrait etre Dons, obtenu : " + _active_subject.textContent );
        }
        let _filter_chips                   = _window_dom.querySelectorAll( ".library-filter-btn" );
        TEST.ASSERT.equal( _filter_chips.length, LIBRARY.FEAT_TYPES.length, "Le sujet Dons devrait porter ses " + LIBRARY.FEAT_TYPES.length + " chips de type, obtenu : " + _filter_chips.length );
        // Une seule zone de filtre, son bouton « + » pose le filtre (le
        // clavier virtuel des tablettes n'emt pas l'Entree)
        let _search_input                   = _window_dom.querySelector( ".library-search" );
        TEST.ASSERT.notNull( _search_input, "La zone de filtre devrait etre rendue" );
        if ( _search_input ) {
            TEST.ASSERT.equal( _search_input.getAttribute( "placeholder" ), LIBRARY.SUBJECTS[ 0 ][ "placeholder" ], "La zone devrait porter le placeholder du sujet Dons, obtenu : " + _search_input.getAttribute( "placeholder" ) );
        }
        let _commit_button                  = _window_dom.querySelector( ".library-search-commit" );
        TEST.ASSERT.notNull( _commit_button, "Le bouton « + » de commit devrait etre rendu (clavier virtuel sans Entree)" );
        TEST.ASSERT.equal( _window_dom.querySelectorAll( ".library-search" ).length, 1, "Une seule zone de filtre devrait exister (nom, trait et contenu fusionnes), obtenu : " + _window_dom.querySelectorAll( ".library-search" ).length );
        TEST.ASSERT.notNull( _window_dom.querySelector( ".library-list" ), "La zone de liste devrait etre rendue" );
        TEST.ASSERT.ok( TEST_libraryCards().length > 0, "Des cartes de dons devraient etre rendues" );
        // Consultation pure : aucune case a cocher de SELECTION sur les
        // cartes (la carte porte le texte, le « ? » de popup est parti) ;
        // seule la case « Mes dons » de la barre de filtres existe (filtre
        // de vue, pas une selection)
        TEST.ASSERT.equal( _window_dom.querySelectorAll( ".library-card input[type='checkbox']" ).length, 0, "Aucune case a cocher de selection sur les cartes (consultation pure), obtenu : " + _window_dom.querySelectorAll( ".library-card input[type='checkbox']" ).length );
        let _owned_checkbox                     = _window_dom.querySelector( ".library-owned-checkbox" );
        TEST.ASSERT.notNull( _owned_checkbox, "La case « Mes dons » devrait exister dans la barre de filtres du sujet Dons" );
        if ( _owned_checkbox ) {
            let _owned_label   = _window_dom.querySelector( ".library-owned-label" );
            let _active_count  = _character.getGifts().getActiveFeats( _character ).length;
            TEST.ASSERT.equal( _owned_label ? _owned_label.textContent : null, "Mes dons (" + _active_count + ")", "Le label de la case devrait porter le compte de dons actifs (" + _active_count + "), obtenu : [" + ( _owned_label ? _owned_label.textContent : "null" ) + "]" );
        }
        TEST.ASSERT.equal( _window_dom.querySelectorAll( ".library-card-info" ).length, 0, "Aucune carte ne devrait porter de « ? » (le texte vit sur la carte), obtenu : " + _window_dom.querySelectorAll( ".library-card-info" ).length );
        // Les dons restent en consultation pure : le sujet ne porte AUCUN
        // bouton « + » tant que la possession d'un don n'est pas tranchee
        TEST.ASSERT.equal( _window_dom.querySelectorAll( ".library-card-add" ).length, 0, "Aucune carte de don ne devrait porter de bouton « + » (consultation pure), obtenu : " + _window_dom.querySelectorAll( ".library-card-add" ).length );
        // Rien de commit : aucune rangee de filtres poses ne devrait exister
        let _active_filters                = _window_dom.querySelector( ".library-active-filters" );
        if ( _active_filters ) {
            TEST.ASSERT.equal( _active_filters.childElementCount, 0, "Aucun filtre pose au chargement, la rangee devrait etre vide, obtenu : " + _active_filters.childElementCount );
        }
    } );
} );

TEST.RUNNER.register( "[BIBLIOTHÈQUE] sujet Dons = le filtre texte matche le tag de type (Ascendance)", function () {
    let _window_dom     = TEST_libraryWindowDom();
    TEST.ASSERT.notNull( _window_dom, "Pre-condition : fenêtre Bibliothèque rendue" );
    if ( !_window_dom ) {
        return;
    }
    let _race_chip      = TEST_libraryFilterChip( "Ascendance" );
    TEST.ASSERT.notNull( _race_chip, "Pre-condition : chip Ascendance rendue" );
    if ( !_race_chip ) {
        return;
    }
    _race_chip.click();
    // Attendu : TOUS les dons d'ascendance gates par la race posee — leur
    // tag de type « Ascendance » matche le filtre, leurs traits scrapes ne
    // portent que le nom de la race (retour utilisateur : « Abajoues » ne
    // se filtrait pas par son tag affiche)
    let _race_name     = CONTROLLER.Character.current_character.getRace().getValue();
    let _expected      = 0;
    for ( let r = 0, _size_r = DON.RACE.ENUM.length; r < _size_r; r++ ) {
        let _group     = DON.RACE.ENUM[ r ];
        let _items     = Array.isArray( _group ) ? _group : [_group];
        for ( let i = 0, _size_i = _items.length; i < _size_i; i++ ) {
            if ( _items[ i ].traits && _items[ i ].traits.indexOf( _race_name ) !== -1 ) {
                _expected++;
            }
        }
    }
    TEST_libraryCommitFilterByEnter( "ascendance" );
    let _cards          = TEST_libraryCards();
    TEST.ASSERT.equal( _cards.length, _expected, "Le tag « ascendance » devrait laisser les " + _expected + " don(s) d'ascendance de la race posee, obtenu : " + _cards.length );
    if ( _expected > 0 ) {
        TEST.ASSERT.notNull( _window_dom.querySelector( ".library-card .library-tag--race" ), "La carte passee devrait porter son tag de type Ascendance en evidence" );
    }
    // le filtre retire laisse la suite propre
    TEST_libraryRemoveTag( "ascendance" );
    _cards              = TEST_libraryCards();
    TEST.ASSERT.equal( _cards.length, _expected, "Le retrait du tag ne devrait rien changer au compte de la chip Ascendance, obtenu : " + _cards.length );
} );

TEST.RUNNER.register( "[BIBLIOTHÈQUE] sujet Dons = tags cumulatifs sur nom, trait et contenu", function () {
    let _window_dom     = TEST_libraryWindowDom();
    TEST.ASSERT.notNull( _window_dom, "Pre-condition : fenêtre Bibliothèque rendue" );
    if ( !_window_dom ) {
        return;
    }
    let _general_chip   = TEST_libraryFilterChip( "Généraux" );
    TEST.ASSERT.notNull( _general_chip, "Pre-condition : chip Généraux rendue" );
    if ( !_general_chip ) {
        return;
    }
    _general_chip.click();
    let _cards          = TEST_libraryCards();
    TEST.ASSERT.equal( _cards.length, DON.GENERAL.ENUM.length, "La chip Généraux devrait laisser exactement les dons generaux (" + DON.GENERAL.ENUM.length + "), obtenu : " + _cards.length );
    // Tag par TRAIT : l'Entree commit
    TEST_libraryCommitFilterByEnter( "général" );
    TEST.ASSERT.ok( TEST_libraryTagPresent( "général" ), "Le filtre pose devrait vivre en tag dans la rangee des filtres actifs" );
    let _expected_trait = TEST_libraryCountGeneralFeats( [ "général" ] );
    _cards              = TEST_libraryCards();
    TEST.ASSERT.equal( _cards.length, _expected_trait, "Le tag « général » devrait laisser " + _expected_trait + " don(s), obtenu : " + _cards.length );
    // Tag par NOM : le bouton « + » commit (le geste du tactile)
    TEST_libraryCommitFilterByButton( "animal" );
    TEST.ASSERT.ok( TEST_libraryTagPresent( "animal" ), "Le second filtre pose devrait vivre en tag lui aussi" );
    let _expected_and   = TEST_libraryCountGeneralFeats( [ "général", "animal" ] );
    _cards              = TEST_libraryCards();
    TEST.ASSERT.equal( _cards.length, _expected_and, "Les deux tags cumules en ET devraient laisser " + _expected_and + " carte(s), obtenu : " + _cards.length );
    // Tag par CONTENU : le mot ne vit que dans la description de la carte
    TEST_libraryCommitFilterByEnter( "rongeur" );
    TEST.ASSERT.ok( TEST_libraryTagPresent( "rongeur" ), "Le troisieme filtre pose devrait vivre en tag lui aussi" );
    let _expected_content = TEST_libraryCountGeneralFeats( [ "général", "animal", "rongeur" ] );
    _cards              = TEST_libraryCards();
    TEST.ASSERT.equal( _cards.length, _expected_content, "Le tag de contenu cumule devrait laisser " + _expected_content + " carte(s), obtenu : " + _cards.length );
    TEST.ASSERT.ok( _expected_content > 0, "La description de Animal de compagnie cite un rongeur : au moins une carte devrait passer (obtenu : " + _expected_content + ")" );
    // Un tag qui ne matche RIEN vide la liste (ET cumulatif)
    TEST_libraryCommitFilterByEnter( "zzzzz" );
    _cards              = TEST_libraryCards();
    TEST.ASSERT.equal( _cards.length, 0, "Le tag qui ne matche rien devrait vider la liste (ET cumulatif), obtenu : " + _cards.length );
    TEST.ASSERT.notNull( _window_dom.querySelector( ".library-empty" ), "La liste vide devrait afficher l'invitation" );
    // Le × retire SON tag seul
    TEST_libraryRemoveTag( "zzzzz" );
    _cards              = TEST_libraryCards();
    TEST.ASSERT.equal( _cards.length, _expected_content, "Le × de SON tag devrait restaurer les " + _expected_content + " carte(s) d'avant, obtenu : " + _cards.length );
    TEST.ASSERT.notOk( TEST_libraryTagPresent( "zzzzz" ), "Le tag retire ne devrait plus vivre dans la rangee" );
} );

TEST.RUNNER.register( "[BIBLIOTHÈQUE] sujet Sorts = sections par nature + tag par trait", function () {
    let _spells_subject = TEST_librarySubjectChip( "Sorts" );
    TEST.ASSERT.notNull( _spells_subject, "Pre-condition : puce sujet Sorts rendue" );
    if ( !_spells_subject ) {
        return;
    }
    _spells_subject.click();
    let _window_dom     = TEST_libraryWindowDom();
    TEST.ASSERT.notNull( _window_dom, "Pre-condition : fenêtre Bibliothèque rendue" );
    if ( !_window_dom ) {
        return;
    }
    let _spell_list     = SPELLS.getSpellListData();
    let _cards          = TEST_libraryCards();
    TEST.ASSERT.equal( _cards.length, _spell_list.length, "Le sujet Sorts devrait rendre les " + _spell_list.length + " sorts scraping, obtenu : " + _cards.length );
    let _first_nature   = SPELLS.getNatureKeyOfName( _spell_list[ 0 ].name );
    let _first_header   = _window_dom.querySelector( ".library-level-header" );
    TEST.ASSERT.notNull( _first_header, "Le sujet Sorts devrait rendre ses sections par nature" );
    if ( _first_header ) {
        let _expected_label = SPELL.getNatureData( _first_nature )[ "label" ];
        let _first_header_label = _first_header.querySelector( ".library-level-header-label" );
        TEST.ASSERT.equal( _first_header_label ? _first_header_label.textContent : null, _expected_label, "La premiere section devrait porter le libelle de la nature du premier sort (" + _expected_label + "), obtenu : " + ( _first_header_label ? _first_header_label.textContent : "null" ) );
    }
    let _first_data     = SPELLS.getSpellData( _spell_list[ 0 ].name );
    if ( !( _first_data && _first_data[ "traits" ] && _first_data[ "traits" ].length ) ) {
        return;
    }
    let _trait_text     = _first_data[ "traits" ][ 0 ];
    let _expected_trait = 0;
    for ( let i = 0, _size_i = _spell_list.length; i < _size_i; i++ ) {
        let _spell_data = SPELLS.getSpellData( _spell_list[ i ].name );
        let _traits     = _spell_data ? _spell_data[ "traits" ] : [];
        if ( TEST_libraryEntryMatchesFilter( _spell_list[ i ].name, _traits, _spell_list[ i ].description, SPELLS.getFullTypeLabel( _spell_list[ i ].name ) + " rang " + _spell_list[ i ].rank, "", _trait_text ) ) {
            _expected_trait++;
        }
    }
    TEST_libraryCommitFilterByButton( _trait_text );
    TEST.ASSERT.ok( TEST_libraryTagPresent( _trait_text ), "Le filtre pose devrait vivre en tag dans la rangee des filtres actifs" );
    _cards              = TEST_libraryCards();
    TEST.ASSERT.equal( _cards.length, _expected_trait, "Le tag devrait laisser " + _expected_trait + " sort(s) portant « " + _trait_text + " » (nom, trait ou contenu), obtenu : " + _cards.length );
    // LE BOUTON « + » : la carte ajoute le sort AU REPERTOIRE du
    // personnage (le plat des popups d'ajout du repertoire, la valeur
    // lue du data-value au clic — les apostrophes), et la fenêtre Sorts
    // suit par le broadcast du personnage
    let _spells_domain  = CONTROLLER.Character.current_character.getSpells();
    let _add_button     = TEST_libraryFirstUnownedAddButton( function ( button_dom ) {
        return _spells_domain.getContentByUUID( "spell__" + button_dom.getAttribute( "data-value" ) );
    } );
    TEST.ASSERT.notNull( _add_button, "Chaque carte de sort devrait poser un bouton « + » sur un sort non possede" );
    if ( _add_button ) {
        let _spell_name = _add_button.getAttribute( "data-value" );
        _add_button.click();
        TEST.ASSERT.notNull( _spells_domain.getContentByUUID( "spell__" + _spell_name ), "Le clic sur « + » devrait ajouter le sort « " + _spell_name + " » au repertoire du personnage" );
        let _spell_entry = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.SpellsWindow.NAME + "'] .spells-entry[data-value=" + JSON.stringify( _spell_name ) + "]" );
        TEST.ASSERT.notNull( _spell_entry, "La fenêtre Sorts devrait rendre l'entree ajoutee par le broadcast du personnage" );
        // La feuille BASCULE sur l'onglet de destination : le clic sur « + »
        // ne laisse pas l'utilisateur sur la Bibliothèque (retour utilisateur)
        TEST.ASSERT.equal( CONTROLLER.Character.current_character.windows.getActiveWindow().getName(), CHARACTER.SpellsWindow.NAME, "Le clic sur « + » devrait basculer la feuille sur l'onglet Sorts, obtenu : " + CONTROLLER.Character.current_character.windows.getActiveWindow().getName() );
        // Un repertoire est un ensemble : re-cliquer sur un sort possede ne fait rien
        let _size_before = _spells_domain.getSize();
        _add_button.click();
        TEST.ASSERT.equal( _spells_domain.getSize(), _size_before, "Un sort possede ne devrait pas se dupliquer (le repertoire est un ensemble), obtenu : " + _spells_domain.getSize() + " contre " + _size_before );
    }
} );

TEST.RUNNER.register( "[BIBLIOTHÈQUE] sujet Équipement = chips + tags par nom et par trait", function () {
    let _stuffs_subject = TEST_librarySubjectChip( "Équipement" );
    TEST.ASSERT.notNull( _stuffs_subject, "Pre-condition : puce sujet Équipement rendue" );
    if ( !_stuffs_subject ) {
        return;
    }
    _stuffs_subject.click();
    let _window_dom     = TEST_libraryWindowDom();
    TEST.ASSERT.notNull( _window_dom, "Pre-condition : fenêtre Bibliothèque rendue" );
    if ( !_window_dom ) {
        return;
    }
    let _filter_chips   = _window_dom.querySelectorAll( ".library-filter-btn" );
    TEST.ASSERT.equal( _filter_chips.length, STUFF.KINDS.length + 1, "Le sujet Équipement devrait porter la chip Tous plus les " + STUFF.KINDS.length + " types de la scrap, obtenu : " + _filter_chips.length );
    let _expected_all   = 0;
    for ( let i = 0, _size_i = STUFFS.length; i < _size_i; i++ ) {
        if ( STUFFS[ i ].name ) {
            _expected_all++;
        }
    }
    TEST_libraryCommitFilterByEnter( "épée longue" );
    let _cards          = TEST_libraryCards();
    TEST.ASSERT.ok( _cards.length > 0 && _cards.length < _expected_all, "Le tag de nom devrait ecreter la liste (obtenu : " + _cards.length + " sur " + _expected_all + ")" );
    let _expected       = 0;
    let _first_entry    = null;
    for ( let i = 0, _size_i = STUFFS.length; i < _size_i; i++ ) {
        if ( !STUFFS[ i ].name ) {
            continue;
        }
        if ( TEST_libraryEntryMatchesFilter( STUFFS[ i ].name, STUFFS[ i ].traits, STUFFS[ i ].description, STUFF.getKindData( STUFFS.getKindKeyOfData( STUFFS[ i ] ) )[ "label" ], STUFFS.getKeyLineText( STUFFS[ i ] ), "épée longue" ) ) {
            if ( !_first_entry ) {
                _first_entry = STUFFS[ i ];
            }
            _expected++;
        }
    }
    TEST.ASSERT.equal( _cards.length, _expected, "Le tag de nom devrait laisser " + _expected + " carte(s) d'objet, obtenu : " + _cards.length );
    let _first_key_line = _window_dom.querySelector( ".library-card .library-card-key-line" );
    if ( _first_entry && _first_entry.level !== undefined && _first_entry.level !== "" ) {
        TEST.ASSERT.notNull( _first_key_line, "La carte devrait porter sa ligne clé (Niveau, encombrement)" );
        if ( _first_key_line ) {
            TEST.ASSERT.ok( _first_key_line.textContent.indexOf( "Niveau" ) !== -1, "La ligne clé devrait citer le niveau de l'objet, obtenu : " + _first_key_line.textContent );
        }
    }
    TEST_libraryRemoveTag( "épée longue" );
    _cards              = TEST_libraryCards();
    TEST.ASSERT.equal( _cards.length, _expected_all, "Le × du tag devrait restaurer toute la liste (" + _expected_all + "), obtenu : " + _cards.length );
    TEST_libraryCommitFilterByButton( STUFF.CONSUMABLE_TRAIT.toLowerCase() );
    let _expected_trait = 0;
    for ( let i = 0, _size_i = STUFFS.length; i < _size_i; i++ ) {
        if ( STUFFS[ i ].name && TEST_libraryEntryMatchesFilter( STUFFS[ i ].name, STUFFS[ i ].traits, STUFFS[ i ].description, STUFF.getKindData( STUFFS.getKindKeyOfData( STUFFS[ i ] ) )[ "label" ], STUFFS.getKeyLineText( STUFFS[ i ] ), STUFF.CONSUMABLE_TRAIT.toLowerCase() ) ) {
            _expected_trait++;
        }
    }
    _cards              = TEST_libraryCards();
    TEST.ASSERT.equal( _cards.length, _expected_trait, "Le tag de trait devrait laisser " + _expected_trait + " objet(s) Consommable, obtenu : " + _cards.length );
    // Le PRIX vit sur la ligne clé (retour utilisateur : « le filtre par
    // le prix ne marche pas ») : la ligne clé est cherchable comme le
    // reste de l'affiché
    TEST_libraryRemoveTag( STUFF.CONSUMABLE_TRAIT.toLowerCase() );
    let _sword_entry   = STUFFS.getByName( "Épée longue" );
    if ( _sword_entry && _sword_entry.price !== undefined && _sword_entry.price !== "" ) {
        let _price_text  = _sword_entry.price;
        let _expected_price = 0;
        for ( let i = 0, _size_i = STUFFS.length; i < _size_i; i++ ) {
            if ( STUFFS[ i ].name && TEST_libraryEntryMatchesFilter( STUFFS[ i ].name, STUFFS[ i ].traits, STUFFS[ i ].description, STUFF.getKindData( STUFFS.getKindKeyOfData( STUFFS[ i ] ) )[ "label" ], STUFFS.getKeyLineText( STUFFS[ i ] ), _price_text ) ) {
                _expected_price++;
            }
        }
        TEST_libraryCommitFilterByEnter( _price_text );
        TEST.ASSERT.ok( TEST_libraryTagPresent( _price_text ), "Le tag de prix pose devrait vivre dans la rangee des filtres actifs" );
        _cards          = TEST_libraryCards();
        TEST.ASSERT.equal( _cards.length, _expected_price, "Le tag de prix « " + _price_text + " » devrait laisser " + _expected_price + " objet(s), obtenu : " + _cards.length );
        TEST_libraryRemoveTag( _price_text );
    }
    // LE BOUTON « + » : la carte ajoute l'objet A L'INVENTAIRE du
    // personnage (le plat de la popup d'ajout, type du classifieur et
    // emplacement par defaut embarques en data attributes), et la fenêtre
    // Équipement suit par le broadcast du personnage
    let _stuffs_domain  = CONTROLLER.Character.current_character.getStuffs();
    let _add_button     = TEST_libraryFirstUnownedAddButton( function ( button_dom ) {
        // Un non consommable : le second clic doit rester un no-op (les
        // consommables empilent par le +, verrouille par scenario_stuffs)
        return STUFFS.isConsumable( button_dom.getAttribute( "data-value" ) ) || _stuffs_domain.getContentByUUID( button_dom.getAttribute( "data-kind" ) + "__" + button_dom.getAttribute( "data-value" ) );
    } );
    TEST.ASSERT.notNull( _add_button, "Chaque carte d'equipement devrait poser un bouton « + » sur un objet non possede" );
    if ( _add_button ) {
        let _stuff_name = _add_button.getAttribute( "data-value" );
        let _stuff_kind = _add_button.getAttribute( "data-kind" );
        let _stuff_data = STUFFS.getByName( _stuff_name );
        TEST.ASSERT.equal( _stuff_kind, STUFFS.getKindKeyOfData( _stuff_data ), "Le type embarque du bouton devrait etre celui du classifieur, obtenu : " + _stuff_kind );
        _add_button.click();
        let _added_stuff = _stuffs_domain.getContentByUUID( _stuff_kind + "__" + _stuff_name );
        TEST.ASSERT.notNull( _added_stuff, "Le clic sur « + » devrait ajouter « " + _stuff_name + " » a l'inventaire du personnage" );
        if ( _added_stuff ) {
            TEST.ASSERT.equal( _added_stuff.location, STUFF.DEFAULT_LOCATION, "L'entree ajoutee devrait vivre a l'emplacement par defaut, obtenu : " + _added_stuff.location );
        }
        let _stuff_entry = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-entry[data-value=" + JSON.stringify( _stuff_name ) + "][data-kind='" + _stuff_kind + "']" );
        TEST.ASSERT.notNull( _stuff_entry, "La fenêtre Équipement devrait rendre l'entree ajoutee par le broadcast du personnage" );
        // La feuille BASCULE sur l'onglet de destination (retour utilisateur)
        TEST.ASSERT.equal( CONTROLLER.Character.current_character.windows.getActiveWindow().getName(), CHARACTER.StuffsWindow.NAME, "Le clic sur « + » devrait basculer la feuille sur l'onglet Équipement, obtenu : " + CONTROLLER.Character.current_character.windows.getActiveWindow().getName() );
        // Un objet non consommable possede ne se re-ajoute pas : le
        // second clic est un no-op du domaine (l'empilage est reserve aux
        // consommables, verrouille par scenario_stuffs)
        let _size_before = _stuffs_domain.getSize();
        _add_button.click();
        TEST.ASSERT.equal( _stuffs_domain.getSize(), _size_before, "Un objet non consommable possede ne devrait pas se dupliquer, obtenu : " + _stuffs_domain.getSize() + " contre " + _size_before );
    }
} );

TEST.RUNNER.register( "[BIBLIOTHÈQUE] sujet Archétypes = liste alphabétique, dons cherchables", function () {
    let _archetypes_subject = TEST_librarySubjectChip( "Archétypes" );
    TEST.ASSERT.notNull( _archetypes_subject, "Pre-condition : puce sujet Archétypes rendue" );
    if ( !_archetypes_subject ) {
        return;
    }
    _archetypes_subject.click();
    let _window_dom     = TEST_libraryWindowDom();
    TEST.ASSERT.notNull( _window_dom, "Pre-condition : fenêtre Bibliothèque rendue" );
    if ( !_window_dom ) {
        return;
    }
    // Aucune chip de type sur le sujet : la liste alphabétique parle d'elle-meme
    TEST.ASSERT.equal( _window_dom.querySelectorAll( ".library-filter-btn" ).length, 0, "Le sujet Archétypes ne devrait porter aucune chip de type, obtenu : " + _window_dom.querySelectorAll( ".library-filter-btn" ).length );
    let _expected       = 0;
    for ( let i = 0, _size_i = ARCHETYPES.ENUM.length; i < _size_i; i++ ) {
        if ( ARCHETYPES.ENUM[ i ].name ) {
            _expected++;
        }
    }
    let _cards          = TEST_libraryCards();
    TEST.ASSERT.equal( _cards.length, _expected, "Le sujet devrait rendre une carte par archétype scrape (" + _expected + "), obtenu : " + _cards.length );
    // Ordre alphabétique brut : la premiere carte ne suit pas la dernière
    if ( _cards.length > 1 ) {
        let _first_name = _cards[ 0 ].querySelector( ".library-card-name" ).textContent;
        let _last_name  = _cards[ _cards.length - 1 ].querySelector( ".library-card-name" ).textContent;
        TEST.ASSERT.ok( _first_name.localeCompare( _last_name ) <= 0, "La liste devrait etre triee alphabetiquement, obtenu : [" + _first_name + "] avant [" + _last_name + "]" );
    }
    // Le texte cherchable du domaine reconduit par le test (la description
    // ET les lignes de dons affichées) : le matcher partagé couvre aussi le
    // nom et les traits, comme la fenêtre
    let _expected_feats = 0;
    for ( let i = 0, _size_i = ARCHETYPES.ENUM.length; i < _size_i; i++ ) {
        let _entry             = ARCHETYPES.ENUM[ i ];
        if ( !_entry.name ) {
            continue;
        }
        let _description_first = _entry.description ? ( Array.isArray( _entry.description ) ? _entry.description[ 0 ] : _entry.description ) : "";
        let _search_text       = String( _description_first ).replace( /<[^>]*>/g, " " ).replace( /\s+/g, " " ).trim() + " " + ARCHETYPES.getFeatsSearchText( _entry.name );
        if ( TEST_libraryEntryMatchesFilter( _entry.name, _entry.traits, _search_text, "", "", "dévouement" ) ) {
            _expected_feats++;
        }
    }
    TEST_libraryCommitFilterByEnter( "dévouement" );
    _cards              = TEST_libraryCards();
    TEST.ASSERT.equal( _cards.length, _expected_feats, "Le tag « dévouement » devrait laisser les " + _expected_feats + " archétype(s) dont un don le porte, obtenu : " + _cards.length );
    TEST_libraryRemoveTag( "dévouement" );
    _cards              = TEST_libraryCards();
    TEST.ASSERT.equal( _cards.length, _expected, "Le × du tag devrait restaurer la liste complete (" + _expected + "), obtenu : " + _cards.length );
} );

TEST.RUNNER.register( "[BIBLIOTHÈQUE] archétype = lignes de dons avec lien de popup", function () {
    // Un don d'archétype indexé dans le compendium ET un nom hors compendium,
    // calculés du dataset (jamais figés)
    let _linked = null;
    let _plain  = null;
    for ( let i = 0, _size_i = ARCHETYPES.ENUM.length; i < _size_i && ( !_linked || !_plain ); i++ ) {
        let _entry = ARCHETYPES.ENUM[ i ];
        if ( !_entry.skills ) {
            continue;
        }
        for ( let s = 0, _size_s = _entry.skills.length; s < _size_s; s++ ) {
            let _compendium_entry = OBJECT.getFeatCompendiumEntry( _entry.skills[ s ].name );
            if ( !_linked && _compendium_entry ) {
                _linked = { "arch": _entry.name, "feat": _entry.skills[ s ].name, "uuid": _compendium_entry.id };
            }
            else if ( !_plain && !_compendium_entry ) {
                _plain = { "arch": _entry.name, "feat": _entry.skills[ s ].name };
            }
        }
    }
    TEST.ASSERT.notNull( _linked, "Pre-condition : un don d'archétype devrait etre indexé dans le compendium" );
    if ( !_linked ) {
        return;
    }
    let _archetypes_subject = TEST_librarySubjectChip( "Archétypes" );
    TEST.ASSERT.notNull( _archetypes_subject, "Pre-condition : puce sujet Archétypes rendue" );
    if ( !_archetypes_subject ) {
        return;
    }
    _archetypes_subject.click();
    let _cards = TEST_libraryCards();
    let _card  = null;
    for ( let i = 0, _size_i = _cards.length; i < _size_i; i++ ) {
        let _name_dom = _cards[ i ].querySelector( ".library-card-name" );
        if ( _name_dom && _name_dom.textContent === _linked.arch ) {
            _card = _cards[ i ];
        }
    }
    TEST.ASSERT.notNull( _card, "La carte de l'archétype « " + _linked.arch + " » devrait etre rendue" );
    if ( !_card ) {
        return;
    }
    // La ligne du don indexé porte son lien : uuid en data-uuid (lu au clic,
    // jamais embarqué inline), le « (Don N) » reste à côté en texte
    let _links = _card.querySelectorAll( ".library-card-key-line .library-card-feat-link" );
    TEST.ASSERT.ok( _links.length > 0, "La carte devrait porter au moins un lien de don, obtenu : " + _links.length );
    let _link  = null;
    for ( let i = 0, _size_i = _links.length; i < _size_i; i++ ) {
        if ( _links[ i ].textContent === _linked.feat ) {
            _link = _links[ i ];
        }
    }
    TEST.ASSERT.notNull( _link, "La ligne « " + _linked.feat + " » devrait porter son lien" );
    if ( _link ) {
        TEST.ASSERT.equal( _link.getAttribute( "data-uuid" ), _linked.uuid, "Le lien devrait porter l'uuid compendium du don en data-uuid, obtenu : " + _link.getAttribute( "data-uuid" ) );
        TEST.ASSERT.ok( _link.getAttribute( "onclick" ).indexOf( "event__show_information" ) !== -1, "Le lien devrait ouvrir la popup d'information, obtenu : " + _link.getAttribute( "onclick" ) );
        TEST.ASSERT.ok( _link.getAttribute( "onclick" ).indexOf( _linked.uuid ) === -1, "L'uuid ne devrait pas etre embarqué inline dans le handler" );
        let _line = _link.closest( ".library-card-key-line" );
        TEST.ASSERT.ok( _line && _line.textContent.indexOf( "(Don " ) !== -1, "Le niveau du don devrait rester affiché à côté du lien, obtenu : " + ( _line ? _line.textContent : "" ) );
        _link.click();
        let _overlay = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
        TEST.ASSERT.notNull( _overlay, "Le clic sur le lien devrait ouvrir la popup du don" );
        if ( _overlay ) {
            let _title = _overlay.querySelector( ".popup-title" );
            TEST.ASSERT.equal( _title ? _title.textContent : null, _linked.feat, "Le titre de la popup devrait etre le nom du don, obtenu : " + ( _title ? _title.textContent : "pas de titre" ) );
            CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": _linked.uuid } );
            TEST.ASSERT.equal( _overlay.getAttribute( "data-current-phase" ), "HIDDEN_TO_STRING", "La popup devrait etre refermee par son uuid" );
        }
    }
    // Un don hors compendium reste du texte brut dans sa ligne (si le
    // dataset en porte un)
    if ( _plain ) {
        let _plain_card = null;
        for ( let i = 0, _size_i = _cards.length; i < _size_i; i++ ) {
            let _name_dom = _cards[ i ].querySelector( ".library-card-name" );
            if ( _name_dom && _name_dom.textContent === _plain.arch ) {
                _plain_card = _cards[ i ];
            }
        }
        let _plain_line = null;
        if ( _plain_card ) {
            let _lines = _plain_card.querySelectorAll( ".library-card-key-line" );
            for ( let i = 0, _size_i = _lines.length; i < _size_i; i++ ) {
                if ( _lines[ i ].textContent.indexOf( _plain.feat ) !== -1 && !_lines[ i ].querySelector( ".library-card-feat-link" ) ) {
                    _plain_line = _lines[ i ];
                }
            }
        }
        TEST.ASSERT.notNull( _plain_line, "La ligne du don « " + _plain.feat + " » hors compendium devrait rester du texte brut sans lien" );
    }
} );

TEST.RUNNER.register( "[BIBLIOTHÈQUE] archétype Chevalier infernal = chaque ligne de don porte son lien quand le compendium l'indexe", function () {
    let _entry = ARCHETYPES.getDataByName( "Chevalier infernal" );
    TEST.ASSERT.notNull( _entry, "Pre-condition : l'archétype Chevalier infernal devrait exister dans les données" );
    if ( !_entry ) {
        return;
    }
    let _archetypes_subject = TEST_librarySubjectChip( "Archétypes" );
    TEST.ASSERT.notNull( _archetypes_subject, "Pre-condition : puce sujet Archétypes rendue" );
    if ( !_archetypes_subject ) {
        return;
    }
    _archetypes_subject.click();
    let _cards = TEST_libraryCards();
    let _card  = null;
    for ( let i = 0, _size_i = _cards.length; i < _size_i; i++ ) {
        let _name_dom = _cards[ i ].querySelector( ".library-card-name" );
        if ( _name_dom && _name_dom.textContent === _entry.name ) {
            _card = _cards[ i ];
        }
    }
    TEST.ASSERT.notNull( _card, "La carte Chevalier infernal devrait etre rendue" );
    if ( !_card ) {
        return;
    }
    let _lines = _card.querySelectorAll( ".library-card-key-line" );
    TEST.ASSERT.equal( _lines.length, _entry.skills.length, "La carte devrait rendre une ligne par don (" + _entry.skills.length + "), obtenu : " + _lines.length );
    // Chaque ligne porte son lien exactement quand le compendium indexe le
    // nom (résolution du domaine, calculée ici — jamais figée)
    for ( let i = 0, _size_i = _entry.skills.length; i < _size_i; i++ ) {
        let _skill  = _entry.skills[ i ];
        let _expect = OBJECT.getFeatCompendiumEntry( _skill.name );
        let _link   = _lines[ i ] ? _lines[ i ].querySelector( ".library-card-feat-link" ) : null;
        if ( _expect ) {
            TEST.ASSERT.notNull( _link, "La ligne « " + _skill.name + " » devrait porter son lien (uuid " + _expect.id + ")" );
            if ( _link ) {
                TEST.ASSERT.equal( _link.getAttribute( "data-uuid" ), _expect.id, "Le lien de « " + _skill.name + " » devrait porter l'uuid attendu, obtenu : " + _link.getAttribute( "data-uuid" ) );
                TEST.ASSERT.equal( _link.textContent, _skill.name, "Le lien devrait afficher le nom du don, obtenu : " + _link.textContent );
            }
        }
        else {
            TEST.ASSERT.isNull( _link, "La ligne « " + _skill.name + " » hors compendium devrait rester du texte brut sans lien" );
        }
    }
} );

TEST.RUNNER.register( "[BIBLIOTHÈQUE] don SRD « Perception du chaos » = entrée compendium enrichie (niveau, traits, description)", function () {
    // Cas utilisateur : don du Chevalier infernal absent du scrap pf2e, ajouté
    // par le scrap SRD (constant_objects_srd.js, id dérivé srd__<slug>)
    let _entry = OBJECT.getFeatCompendiumEntry( "Perception du chaos" );
    TEST.ASSERT.notNull( _entry, "Le don « Perception du chaos » devrait etre indexé dans le compendium (scrap SRD)" );
    if ( !_entry ) {
        return;
    }
    TEST.ASSERT.equal( _entry.category, "feat", "L'entrée SRD devrait etre de catégorie feat, obtenu : " + _entry.category );
    TEST.ASSERT.ok( _entry.element_type && _entry.element_type.indexOf( "DON " ) === 0, "L'entrée devrait porter son niveau (badge DON N), obtenu : " + _entry.element_type );
    TEST.ASSERT.ok( _entry.description && _entry.description.length > 50, "L'entrée devrait porter la description SRD" );
    TEST.ASSERT.ok( _entry.href && _entry.href.indexOf( "pathfinder-fr.org/srd/pf2/dons/" ) !== -1, "L'entrée devrait porter son lien SRD, obtenu : " + _entry.href );
} );

TEST.RUNNER.register( "[BIBLIOTHÈQUE] changement de sujet = vue et filtres reinitialisees", function () {
    let _dons_subject   = TEST_librarySubjectChip( "Dons" );
    TEST.ASSERT.notNull( _dons_subject, "Pre-condition : puce sujet Dons rendue" );
    if ( !_dons_subject ) {
        return;
    }
    _dons_subject.click();
    let _window_dom     = TEST_libraryWindowDom();
    TEST.ASSERT.notNull( _window_dom, "Pre-condition : fenêtre Bibliothèque rendue" );
    if ( !_window_dom ) {
        return;
    }
    let _active_chip    = _window_dom.querySelector( ".library-filter-btn.active" );
    TEST.ASSERT.notNull( _active_chip, "Le sujet Dons devrait porter sa chip Tous active" );
    if ( _active_chip ) {
        TEST.ASSERT.equal( _active_chip.textContent, LIBRARY.FILTER_ALL_LABEL, "La chip active devrait etre Tous apres un changement de sujet, obtenu : " + _active_chip.textContent );
    }
    let _active_filters = _window_dom.querySelector( ".library-active-filters" );
    if ( _active_filters ) {
        TEST.ASSERT.equal( _active_filters.childElementCount, 0, "Aucun filtre pose apres un changement de sujet, la rangee devrait etre vide, obtenu : " + _active_filters.childElementCount );
    }
    let _search_input   = _window_dom.querySelector( ".library-search" );
    TEST.ASSERT.notNull( _search_input, "La zone de filtre devrait etre rendue" );
    if ( _search_input ) {
        TEST.ASSERT.equal( _search_input.value, "", "La zone de filtre devrait etre vide apres un changement de sujet, obtenu : " + _search_input.value );
    }
    TEST.ASSERT.ok( _window_dom.querySelectorAll( ".library-card" ).length > 0, "Les cartes de dons devraient etre rendues apres le retour au sujet Dons" );
} );

// Le chargement progressif : la liste se rend par lots de
// LIBRARY.RENDER_BATCH_SIZE cartes, le sentinel en queue charge le lot
// suivant au clic (et au scroll proche du viewport en vrai navigateur)
TEST.RUNNER.register( "[BIBLIOTHÈQUE] chargement progressif : premier lot de 20, sentinel lot par lot, filtre qui repart au lot 1", function () {
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LibraryWindow.NAME ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _window_dom = TEST_libraryWindowDom();
        TEST.ASSERT.notNull( _window_dom, "Pre-condition : fenêtre Bibliothèque rendue" );
        if ( !_window_dom ) {
            return;
        }
        // Premier lot : au plus RENDER_BATCH_SIZE cartes, sentinel en queue
        let _first  = _window_dom.querySelectorAll( ".library-card" ).length;
        TEST.ASSERT.ok( _first > 0 && _first <= LIBRARY.RENDER_BATCH_SIZE, "Le premier lot devrait rendre au plus " + LIBRARY.RENDER_BATCH_SIZE + " cartes, obtenu : " + _first );
        let _sentinel = _window_dom.querySelector( ".library-list-sentinel" );
        TEST.ASSERT.notNull( _sentinel, "Le sentinel devrait etre rendu en queue de liste" );
        if ( _sentinel ) {
            TEST.ASSERT.ok( _sentinel.textContent.indexOf( "restants" ) !== -1 || _sentinel.classList.contains( "done" ), "Le sentinel devrait annoncer les restants ou le total, obtenu : [" + _sentinel.textContent + "]" );
        }
        // Drain complet au clic du sentinel
        TEST_libraryLoadAll();
        let _all = _window_dom.querySelectorAll( ".library-card" ).length;
        TEST.ASSERT.ok( _all >= _first, "Le drain devrait rendre au moins le premier lot, obtenu : " + _all + " (premier lot : " + _first + ")" );
        _sentinel = _window_dom.querySelector( ".library-list-sentinel" );
        TEST.ASSERT.ok( _sentinel && _sentinel.classList.contains( "done" ), "Le sentinel devrait porter la classe done une fois tout rendu" );
        if ( _sentinel ) {
            TEST.ASSERT.ok( _sentinel.textContent.indexOf( "" + _all ) !== -1, "Le sentinel devrait annoncer le total (" + _all + " résultats), obtenu : [" + _sentinel.textContent + "]" );
        }
        // Un clic de sentinel en cours de chargement ajoute UN lot
        TEST_libraryCommitFilterByEnter( "zzzzz" );
        TEST.ASSERT.equal( _window_dom.querySelectorAll( ".library-card" ).length, 0, "Un filtre sans correspondance ne devrait rendre aucune carte" );
        TEST.ASSERT.notNull( _window_dom.querySelector( ".library-empty" ), "La liste vide devrait porter son marqueur .library-empty" );
        let _remove = _window_dom.querySelector( ".library-active-tag-remove" );
        if ( _remove ) {
            _remove.click();
        }
        let _back = _window_dom.querySelectorAll( ".library-card" ).length;
        TEST.ASSERT.ok( _back > 0 && _back <= LIBRARY.RENDER_BATCH_SIZE, "Le retrait du filtre devrait revenir au premier lot (≤ " + LIBRARY.RENDER_BATCH_SIZE + "), obtenu : " + _back );
        if ( _all > _back ) {
            let _sentinel2 = _window_dom.querySelector( ".library-list-sentinel:not(.done)" );
            TEST.ASSERT.notNull( _sentinel2, "Le sentinel devrait proposer le lot suivant" );
            if ( _sentinel2 ) {
                _sentinel2.click();
                let _second = _window_dom.querySelectorAll( ".library-card" ).length;
                TEST.ASSERT.equal( _second, Math.min( _all, _back + LIBRARY.RENDER_BATCH_SIZE ), "Un clic sur le sentinel devrait charger exactement le lot suivant, obtenu : " + _second + " (attendu " + Math.min( _all, _back + LIBRARY.RENDER_BATCH_SIZE ) + ")" );
            }
        }
    } );
} );

// La scrollbar graduée de la liste : scrollbar native masquée (CSS),
// piste + pouce draggable + labels 0…total en nombre de résultats,
// masquée quand la liste tient sans défiler
TEST.RUNNER.register( "[BIBLIOTHÈQUE] scrollbar graduée : labels 0…total, pouce suit le scroll et se drague, clic piste, masquée si la liste tient", function () {
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LibraryWindow.NAME ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _stuffs_subject = TEST_librarySubjectChip( "Équipement" );
        TEST.ASSERT.notNull( _stuffs_subject, "Pre-condition : puce sujet Équipement rendue" );
        if ( !_stuffs_subject ) {
            return;
        }
        _stuffs_subject.click();
        let _window_dom     = TEST_libraryWindowDom();
        TEST.ASSERT.notNull( _window_dom, "Pre-condition : fenêtre Bibliothèque rendue" );
        if ( !_window_dom ) {
            return;
        }
        TEST_libraryLoadAll();
        let _list      = _window_dom.querySelector( ".library-list" );
        let _scrollbar = _window_dom.querySelector( ".library-scrollbar" );
        let _track     = _window_dom.querySelector( ".library-scrollbar-track" );
        let _thumb     = _window_dom.querySelector( ".library-scrollbar-thumb" );
        TEST.ASSERT.ok( _list && _scrollbar && _track && _thumb, "La liste devrait porter sa scrollbar graduée (piste + pouce)" );
        if ( !_list || !_scrollbar || !_track || !_thumb ) {
            return;
        }
        let _total = _window_dom.querySelectorAll( ".library-card" ).length;
        TEST.ASSERT.ok( _total > LIBRARY.RENDER_BATCH_SIZE, "Le sujet Équipement devrait déborder après le drain (" + _total + " cartes)" );
        TEST.ASSERT.ok( _list.scrollHeight > _list.clientHeight, "La liste devrait déborder (scrollHeight " + _list.scrollHeight + " > clientHeight " + _list.clientHeight + ")" );
        TEST.ASSERT.ok( !_scrollbar.classList.contains( "hidden" ), "La scrollbar devrait être visible quand la liste déborde" );
        let _ticks = _window_dom.querySelectorAll( ".library-scrollbar-tick" );
        TEST.ASSERT.ok( _ticks.length >= 2, "La scrollbar devrait porter au moins 2 labels, obtenu : " + _ticks.length );
        if ( _ticks.length >= 2 ) {
            TEST.ASSERT.equal( _ticks[ 0 ].textContent, "0", "Le premier label devrait être 0, obtenu : [" + _ticks[ 0 ].textContent + "]" );
            TEST.ASSERT.equal( _ticks[ _ticks.length - 1 ].textContent, String( _total ), "Le dernier label devrait être le total " + _total + ", obtenu : [" + _ticks[ _ticks.length - 1 ].textContent + "]" );
        }
        TEST.ASSERT.ok( parseInt( _thumb.style.height, 10 ) > 0, "Le pouce devrait avoir une hauteur posée, obtenu : [" + _thumb.style.height + "]" );
        TEST.ASSERT.equal( _thumb.style.top, "0px", "Le pouce devrait être en haut au départ, obtenu : [" + _thumb.style.top + "]" );
        // Scroll au fond : le pouce descend au bout de la piste
        _list.scrollTop = _list.scrollHeight;
        _list.dispatchEvent( new Event( "scroll" ) );
        let _max_top = Math.max( 0, _track.clientHeight - _thumb.offsetHeight );
        TEST.ASSERT.ok( parseInt( _thumb.style.top, 10 ) >= _max_top - 1, "Le pouce devrait être en bas après un scroll au fond (top [" + _thumb.style.top + "], max " + _max_top + ")" );
        // Drag du pouce vers le haut : la liste remonte
        let _before     = _list.scrollTop;
        let _thumb_rect = _thumb.getBoundingClientRect();
        _thumb.dispatchEvent( new PointerEvent( "pointerdown", { "clientY": _thumb_rect.top + _thumb_rect.height / 2, "bubbles": true } ) );
        document.dispatchEvent( new PointerEvent( "pointermove", { "clientY": _thumb_rect.top - 300, "bubbles": true } ) );
        document.dispatchEvent( new PointerEvent( "pointerup", { "bubbles": true } ) );
        TEST.ASSERT.ok( _list.scrollTop < _before, "Le drag du pouce vers le haut devrait remonter la liste (avant " + _before + ", après " + _list.scrollTop + ")" );
        // Clic en bas de piste : saut vers le bas
        let _track_rect = _track.getBoundingClientRect();
        _track.dispatchEvent( new PointerEvent( "pointerdown", { "clientY": _track_rect.bottom - 4, "bubbles": true } ) );
        TEST.ASSERT.ok( _list.scrollTop > _list.clientHeight, "Le clic en bas de piste devrait sauter vers le bas (scrollTop " + _list.scrollTop + ")" );
        // Filtre sans résultat : la liste ne déborde plus, scrollbar masquée
        TEST_libraryCommitFilterByEnter( "zzzzz" );
        _scrollbar = _window_dom.querySelector( ".library-scrollbar" );
        TEST.ASSERT.ok( _scrollbar && _scrollbar.classList.contains( "hidden" ), "La scrollbar devrait être masquée quand la liste tient sans défiler" );
        TEST_libraryRemoveTag( "zzzzz" );
        TEST_libraryLoadAll();
    } );
} );

TEST.RUNNER.register( "[BIBLIOTHÈQUE] « Mes dons » : enlève les filtres, tag « Mon don », carte dépliable au clic", function () {
    let _character = CONTROLLER.Character.current_character;
    let _active    = null;
    let _feat_name = null;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    // Pre-condition : au moins un don actif (race posée si besoin, don
    // d'ascendance du palier 1 validé par le geste reel en Progression)
    let _ensure_feat = function () {
        if ( _character.getGifts().getActiveFeats( _character ).length > 0 ) {
            return Promise.resolve();
        }
        if ( !_character.getRace().isSet() ) {
            TEST_openRacePopup();
            return TEST.clickTab( "body > .popup", "Elfe" ).then( function () {
                CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
                return TEST.wait();
            } );
        }
        return Promise.resolve();
    };
    return _ensure_feat().then( function () {
        if ( _character.getGifts().getActiveFeats( _character ).length > 0 ) {
            return;
        }
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
            return TEST.wait();
        } ).then( function () {
            let _row = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .ancestry-up-block[data-ancestry-level-name='1'] .level-up-row[data-slot-key='ancestry_feat']" );
            TEST.ASSERT.notNull( _row, "Pre-condition : la ligne don d'ascendance du palier 1 devrait etre rendue" );
            if ( !_row ) {
                return;
            }
            let _option = _row.querySelector( ".single-select-option:not([data-value=''])" );
            TEST.ASSERT.notNull( _option, "Pre-condition : une option de don d'ascendance" );
            if ( _option ) {
                _option.click();
            }
            return TEST.wait( 300 );
        } );
    } ).then( function () {
        _active     = _character.getGifts().getActiveFeats( _character );
        TEST.ASSERT.ok( _active.length > 0, "Pre-condition : au moins un don actif, obtenu : " + _active.length );
        _feat_name  = _active.length ? _active[ 0 ].name : null;
        // Sujet Dons en vue vierge (changement de sujet = reset des filtres)
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.LibraryWindow.NAME ).then( function () {
            return TEST.wait();
        } ).then( function () {
            let _sorts_chip = TEST_librarySubjectChip( "Sorts" );
            if ( _sorts_chip ) {
                _sorts_chip.click();
            }
            return TEST.wait();
        } ).then( function () {
            let _dons_chip = TEST_librarySubjectChip( "Dons" );
            if ( _dons_chip ) {
                _dons_chip.click();
            }
            return TEST.wait();
        } ).then( function () {
            // Un tag qui vide la liste + la chip Généraux : la case « Mes
            // dons » devra enlever les deux
            TEST_libraryCommitFilterByEnter( "zzzzz" );
            let _chip = TEST_libraryFilterChip( "Généraux" );
            if ( _chip ) {
                _chip.click();
            }
            return TEST.wait();
        } ).then( function () {
            TEST.ASSERT.equal( TEST_libraryCards().length, 0, "Le tag zzzzz + chip Généraux devraient vider la liste avant le test, obtenu : " + TEST_libraryCards().length );
            let _checkbox = TEST_libraryWindowDom() ? TEST_libraryWindowDom().querySelector( ".library-owned-checkbox" ) : null;
            TEST.ASSERT.notNull( _checkbox, "La case « Mes dons » devrait exister" );
            if ( !_checkbox ) {
                return;
            }
            _checkbox.click();
            return TEST.wait();
        } ).then( function () {
            let _window_dom = TEST_libraryWindowDom();
            TEST.ASSERT.notNull( _window_dom, "Pre-condition : fenêtre rendue" );
            if ( !_window_dom || !_active ) {
                return;
            }
            let _active_chip = _window_dom.querySelector( ".library-filter-btn.active" );
            TEST.ASSERT.equal( _active_chip ? _active_chip.textContent : null, LIBRARY.FILTER_ALL_LABEL, "Cocher « Mes dons » devrait remettre la chip sur Tous, obtenu : [" + ( _active_chip ? _active_chip.textContent : "null" ) + "]" );
            TEST.ASSERT.equal( _window_dom.querySelectorAll( ".library-active-tag" ).length, 0, "Cocher « Mes dons » devrait enlever tous les tags posés, obtenu : " + _window_dom.querySelectorAll( ".library-active-tag" ).length );
            let _search = _window_dom.querySelector( ".library-search" );
            TEST.ASSERT.equal( _search ? _search.value : null, "", "Cocher « Mes dons » devrait vider la zone de recherche, obtenu : [" + ( _search ? _search.value : "null" ) + "]" );
            let _cards = TEST_libraryCards();
            TEST.ASSERT.equal( _cards.length, _active.length, "La liste ne devrait plus porter que les dons actifs (" + _active.length + "), obtenu : " + _cards.length );
            TEST.ASSERT.equal( _window_dom.querySelectorAll( ".library-card .library-tag--owned" ).length, _active.length, "Chaque carte de don actif devrait porter le tag « Mon don », obtenu : " + _window_dom.querySelectorAll( ".library-card .library-tag--owned" ).length );
            // La carte du don actif se déplie au clic, se replie au second
            let _owned_card = null;
            for ( let i = 0, _size_i = _cards.length; i < _size_i; i++ ) {
                let _name_dom = _cards[ i ].querySelector( ".library-card-name" );
                if ( _name_dom && _name_dom.textContent === _feat_name ) {
                    _owned_card = _cards[ i ];
                }
            }
            TEST.ASSERT.notNull( _owned_card, "La carte du don actif devrait etre dans la liste" );
            if ( _owned_card ) {
                _owned_card.click();
                TEST.ASSERT.ok( _owned_card.classList.contains( "library-card--expanded" ), "Le clic sur la carte devrait la déplier" );
                _owned_card.click();
                TEST.ASSERT.ok( !_owned_card.classList.contains( "library-card--expanded" ), "Le second clic devrait replier la carte" );
            }
            // Décocher : la liste revient complète, les tags « Mon don » restent
            let _checkbox2 = TEST_libraryWindowDom() ? TEST_libraryWindowDom().querySelector( ".library-owned-checkbox" ) : null;
            if ( _checkbox2 ) {
                _checkbox2.click();
            }
            return TEST.wait();
        } ).then( function () {
            let _window_dom = TEST_libraryWindowDom();
            if ( !_window_dom || !_active ) {
                return;
            }
            let _cards = TEST_libraryCards();
            TEST.ASSERT.ok( _cards.length > _active.length, "Décocher devrait restaurer la liste complète, obtenu : " + _cards.length + " cartes pour " + _active.length + " don actif" );
            TEST.ASSERT.equal( _window_dom.querySelectorAll( ".library-card .library-tag--owned" ).length, _active.length, "Le tag « Mon don » devrait rester même case décochée, obtenu : " + _window_dom.querySelectorAll( ".library-card .library-tag--owned" ).length );
        } );
    } );
} );

// Le label FR d'un coût d'action, même carte que la fenêtre (constante
// publique LIBRARY.ACTION_COST_SECTIONS)
function TEST_libraryActionCostLabel ( cost_key ) {
    if ( !cost_key ) {
        return LIBRARY.ACTION_NO_COST_LABEL;
    }
    for ( let c = 0, _size_c = LIBRARY.ACTION_COST_SECTIONS.length; c < _size_c; c++ ) {
        if ( LIBRARY.ACTION_COST_SECTIONS[ c ][ "key" ] === cost_key ) {
            return LIBRARY.ACTION_COST_SECTIONS[ c ][ "label" ];
        }
    }
    return cost_key;
}

TEST.RUNNER.register( "[BIBLIOTHÈQUE] sujet Actions = sections par coût, recherche nom/trait/contenu/coût, carte dépliable", function () {
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LibraryWindow.NAME ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _actions_chip = TEST_librarySubjectChip( "Actions" );
        TEST.ASSERT.notNull( _actions_chip, "Le sujet Actions devrait exister dans la rangée de sujets" );
        if ( !_actions_chip ) {
            return;
        }
        _actions_chip.click();
        return TEST.wait();
    } ).then( function () {
        let _window_dom = TEST_libraryWindowDom();
        TEST.ASSERT.notNull( _window_dom, "Pre-condition : fenêtre rendue" );
        if ( !_window_dom ) {
            return;
        }
        let _search = _window_dom.querySelector( ".library-search" );
        TEST.ASSERT.equal( _search ? _search.getAttribute( "placeholder" ) : null, "Rechercher une action...", "Le placeholder du sujet Actions, obtenu : [" + ( _search ? _search.getAttribute( "placeholder" ) : "null" ) + "]" );
        // Pas de chips de type sur ce sujet (les sections portent les coûts)
        TEST.ASSERT.equal( _window_dom.querySelectorAll( ".library-filter-btn" ).length, 0, "Le sujet Actions ne devrait porter aucune chip de type, obtenu : " + _window_dom.querySelectorAll( ".library-filter-btn" ).length );
        TEST.ASSERT.equal( _window_dom.querySelectorAll( ".library-owned-checkbox" ).length, 0, "La case « Mes dons » ne vit que sur le sujet Dons, obtenu : " + _window_dom.querySelectorAll( ".library-owned-checkbox" ).length );
        // Toutes les actions du compendium (compte calculé, jamais figé)
        let _expected_count = OBJECT.getKnownActions().length;
        let _cards          = TEST_libraryCards();
        TEST.ASSERT.equal( _cards.length, _expected_count, "Toutes les actions devraient etre rendues (" + _expected_count + "), obtenu : " + _cards.length );
        // Sections par coût + tag de coût + ligne clé, consultation pure (pas de « + »)
        let _sections = _window_dom.querySelectorAll( ".library-level-header" );
        TEST.ASSERT.ok( _sections.length >= 2, "Plusieurs sections de coût devraient exister, obtenu : " + _sections.length );
        TEST.ASSERT.equal( _window_dom.querySelectorAll( ".library-card .library-tag--action" ).length, _cards.length, "Chaque carte devrait porter son tag de coût, obtenu : " + _window_dom.querySelectorAll( ".library-card .library-tag--action" ).length );
        TEST.ASSERT.equal( _window_dom.querySelectorAll( ".library-card-add" ).length, 0, "Les actions sont en consultation pure : aucun bouton « + », obtenu : " + _window_dom.querySelectorAll( ".library-card-add" ).length );
        // Recherche par le coût en mots ("réaction") : compte calculé du dataset
        TEST_libraryCommitFilterByEnter( "réaction" );
        let _expected_reaction = 0;
        let _actions           = OBJECT.getKnownActions();
        for ( let i = 0, _size_i = _actions.length; i < _size_i; i++ ) {
            let _entry      = OBJECT.getActionInformation( _actions[ i ].name );
            let _cost_label = TEST_libraryActionCostLabel( _entry ? _entry.action_cost : null );
            let _key_line   = _entry && _entry.action_cost ? "Coût " + OBJECT.ACTION_COST_LABELS[ _entry.action_cost ] : "";
            if ( _entry && TEST_libraryEntryMatchesFilter( _entry.text, _entry.traits, _entry.description, _cost_label, _key_line, "réaction" ) ) {
                _expected_reaction++;
            }
        }
        TEST.ASSERT.ok( _expected_reaction > 0, "Pre-condition : des réactions devraient exister dans le dataset, obtenu : " + _expected_reaction );
        TEST.ASSERT.equal( TEST_libraryCards().length, _expected_reaction, "Le filtre « réaction » ne devrait garder que les réactions (coût cherchable), attendu : " + _expected_reaction + ", obtenu : " + TEST_libraryCards().length );
        TEST_libraryRemoveTag( "réaction" );
        // Recherche par nom : premier nom du dataset, compte calculé
        let _first_name = _actions[ 0 ].name;
        TEST_libraryCommitFilterByButton( _first_name.toLowerCase() );
        let _expected_name = 0;
        for ( let i = 0, _size_i = _actions.length; i < _size_i; i++ ) {
            let _entry = OBJECT.getActionInformation( _actions[ i ].name );
            if ( _entry && TEST_libraryEntryMatchesFilter( _entry.text, _entry.traits, _entry.description, "", "", _first_name.toLowerCase() ) ) {
                _expected_name++;
            }
        }
        TEST.ASSERT.equal( TEST_libraryCards().length, _expected_name, "Le filtre par nom devrait ne garder que les actions matchant [" + _first_name + "], attendu : " + _expected_name + ", obtenu : " + TEST_libraryCards().length );
        TEST_libraryRemoveTag( _first_name.toLowerCase() );
        // Carte dépliable : la première carte du sujet se déplie au clic
        let _cards2 = TEST_libraryCards();
        TEST.ASSERT.ok( _cards2.length > 0, "Pre-condition : des cartes rendues" );
        if ( _cards2.length ) {
            _cards2[ 0 ].click();
            TEST.ASSERT.ok( _cards2[ 0 ].classList.contains( "library-card--expanded" ), "Le clic sur une carte action devrait la déplier" );
        }
        // Retour sujet Dons pour laisser la suite propre
        let _dons_chip = TEST_librarySubjectChip( "Dons" );
        if ( _dons_chip ) {
            _dons_chip.click();
        }
        return TEST.wait();
    } );
} );

// Le label de section d'un sort, même calcul que la fenêtre
function TEST_spellSectionLabel ( spell_list_entry ) {
    let _nature_key = SPELLS.getNatureKeyOfName( spell_list_entry.name );
    if ( _nature_key === "spell" ) {
        return "Rang " + spell_list_entry.rank;
    }
    let _nature_data = SPELL.getNatureData( _nature_key );
    return _nature_data && _nature_data.label ? _nature_data.label : _nature_key;
}

TEST.RUNNER.register( "[BIBLIOTHÈQUE] sujet Sorts = ajout en masse (« Tout ajouter (N) » + « + » de section), rang cherchable", function () {
    let _character = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    let _domain = _character.getSpells();
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LibraryWindow.NAME ).then( function () {
        return TEST.wait();
    } ).then( function () {
        // Sur le sujet Dons : ni bouton « Tout ajouter » ni « + » de section
        let _dons_chip = TEST_librarySubjectChip( "Dons" );
        if ( _dons_chip ) {
            _dons_chip.click();
        }
        return TEST.wait();
    } ).then( function () {
        let _window_dom = TEST_libraryWindowDom();
        TEST.ASSERT.equal( _window_dom ? _window_dom.querySelectorAll( ".library-add-all" ).length : null, 0, "Le bouton « Tout ajouter » ne devrait exister que sur le sujet Sorts, obtenu : " + ( _window_dom ? _window_dom.querySelectorAll( ".library-add-all" ).length : "null" ) );
        TEST.ASSERT.equal( _window_dom ? _window_dom.querySelectorAll( ".library-section-add" ).length : null, 0, "Le « + » de section ne devrait exister que sur le sujet Sorts, obtenu : " + ( _window_dom ? _window_dom.querySelectorAll( ".library-section-add" ).length : "null" ) );
        let _sorts_chip = TEST_librarySubjectChip( "Sorts" );
        if ( _sorts_chip ) {
            _sorts_chip.click();
        }
        return TEST.wait();
    } ).then( function () {
        // Le rang est cherchable : tag « rang 1 »
        TEST_libraryCommitFilterByEnter( "rang 1" );
        return TEST.wait();
    } ).then( function () {
        let _window_dom  = TEST_libraryWindowDom();
        let _spell_list  = SPELLS.getSpellListData();
        let _expected_r1 = [];
        for ( let i = 0, _size_i = _spell_list.length; i < _size_i; i++ ) {
            let _spell_data = SPELLS.getSpellData( _spell_list[ i ].name );
            let _traits     = _spell_data ? _spell_data[ "traits" ] : [];
            let _key_line   = _spell_list[ i ].cost_label !== SPELL.NO_COST_LABEL ? "Coût " + _spell_list[ i ].cost_label : "";
            if ( TEST_libraryEntryMatchesFilter( _spell_list[ i ].name, _traits, _spell_list[ i ].description, SPELLS.getFullTypeLabel( _spell_list[ i ].name ) + " rang " + _spell_list[ i ].rank, _key_line, "rang 1" ) ) {
                _expected_r1.push( _spell_list[ i ].name );
            }
        }
        TEST.ASSERT.ok( _expected_r1.length > 0, "Pre-condition : des sorts de rang 1, obtenu : " + _expected_r1.length );
        let _cards = TEST_libraryCards();
        TEST.ASSERT.equal( _cards.length, _expected_r1.length, "Le tag « rang 1 » ne devrait garder que les sorts de rang 1, attendu : " + _expected_r1.length + ", obtenu : " + _cards.length );
        TEST.ASSERT.equal( _window_dom.querySelectorAll( ".library-card .library-tag--rank" ).length, _cards.length, "Chaque carte de sort devrait porter son tag de rang, obtenu : " + _window_dom.querySelectorAll( ".library-card .library-tag--rank" ).length );
        let _add_all = _window_dom.querySelector( ".library-add-all" );
        TEST.ASSERT.notNull( _add_all, "Le bouton « Tout ajouter » devrait exister sur le sujet Sorts" );
        TEST.ASSERT.equal( _add_all ? _add_all.textContent : null, "Tout ajouter (" + _expected_r1.length + ")", "Le bouton devrait porter le compte filtré, obtenu : [" + ( _add_all ? _add_all.textContent : "null" ) + "]" );
        // Clic « Tout ajouter » : tous les sorts filtrés partent au répertoire
        if ( _add_all ) {
            _add_all.click();
        }
        return TEST.wait().then( function () {
            TEST.ASSERT.equal( _character.windows.getActiveWindow().getName(), CHARACTER.SpellsWindow.NAME, "La feuille devrait basculer sur l'onglet Sorts après l'ajout en masse, obtenu : " + _character.windows.getActiveWindow().getName() );
            for ( let i = 0, _size_i = _expected_r1.length; i < _size_i; i++ ) {
                TEST.ASSERT.notNull( _domain.getContentByUUID( "spell__" + _expected_r1[ i ] ), "Le sort « " + _expected_r1[ i ] + " » devrait etre possede apres l'ajout en masse" );
            }
            // Second « Tout ajouter » : no-op (les possédés ne doublent pas)
            return TEST.clickTab( ".character-sheet-windows", CHARACTER.LibraryWindow.NAME ).then( function () {
                return TEST.wait();
            } ).then( function () {
                let _size_mid = _domain.getSize();
                let _btn2     = TEST_libraryWindowDom() ? TEST_libraryWindowDom().querySelector( ".library-add-all" ) : null;
                TEST.ASSERT.notNull( _btn2, "Le bouton « Tout ajouter » devrait etre de retour sur le sujet Sorts (filtre conservé)" );
                if ( _btn2 ) {
                    _btn2.click();
                }
                return TEST.wait().then( function () {
                    TEST.ASSERT.equal( _domain.getSize(), _size_mid, "Le second « Tout ajouter » ne devrait rien ajouter (répertoire = ensemble), avant " + _size_mid + ", après " + _domain.getSize() );
                    // « + » d'une section sans filtre : retirer le tag rang 1 d'abord
                    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LibraryWindow.NAME ).then( function () {
                        return TEST.wait();
                    } ).then( function () {
                        if ( TEST_libraryTagPresent( "rang 1" ) ) {
                            TEST_libraryRemoveTag( "rang 1" );
                        }
                        return TEST.wait();
                    } ).then( function () {
                        let _window_dom2  = TEST_libraryWindowDom();
                        let _first_header = _window_dom2 ? _window_dom2.querySelector( ".library-level-header" ) : null;
                        let _add_btn      = _first_header ? _first_header.querySelector( ".library-section-add" ) : null;
                        TEST.ASSERT.notNull( _add_btn, "Chaque section du sujet Sorts devrait porter son « + »" );
                        if ( !_add_btn ) {
                            return;
                        }
                        let _section_label = _add_btn.getAttribute( "data-section" );
                        let _section_names = [];
                        for ( let i = 0, _size_i = _spell_list.length; i < _size_i; i++ ) {
                            if ( TEST_spellSectionLabel( _spell_list[ i ] ) === _section_label ) {
                                _section_names.push( _spell_list[ i ].name );
                            }
                        }
                        TEST.ASSERT.ok( _section_names.length > 0, "Pre-condition : la section [" + _section_label + "] devrait avoir des sorts, obtenu : " + _section_names.length );
                        _add_btn.click();
                        return TEST.wait().then( function () {
                            for ( let i = 0, _size_i = _section_names.length; i < _size_i; i++ ) {
                                TEST.ASSERT.notNull( _domain.getContentByUUID( "spell__" + _section_names[ i ] ), "Le sort « " + _section_names[ i ] + " » de la section [" + _section_label + "] devrait etre possede" );
                            }
                            TEST.ASSERT.equal( _character.windows.getActiveWindow().getName(), CHARACTER.SpellsWindow.NAME, "Le « + » de section devrait aussi basculer sur l'onglet Sorts" );
                        } );
                    } );
                } );
            } );
        } );
    } );
} );
