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

TEST.RUNNER.register( "[BIBLIOTHÈQUE] onglet = Bibliothèque, sujets = Dons, Sorts, Équipement", function () {
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
        TEST.ASSERT.ok( _window_dom.querySelectorAll( ".library-card" ).length > 0, "Des cartes de dons devraient etre rendues" );
        // Consultation pure : la case a cocher de selection des dons a
        // disparu, la carte porte le texte, le « ? » de popup est parti
        TEST.ASSERT.equal( _window_dom.querySelectorAll( "input[type='checkbox']" ).length, 0, "Aucune case a cocher de selection ne devrait exister (consultation pure), obtenu : " + _window_dom.querySelectorAll( "input[type='checkbox']" ).length );
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
    let _cards          = _window_dom.querySelectorAll( ".library-card" );
    TEST.ASSERT.equal( _cards.length, _expected, "Le tag « ascendance » devrait laisser les " + _expected + " don(s) d'ascendance de la race posee, obtenu : " + _cards.length );
    if ( _expected > 0 ) {
        TEST.ASSERT.notNull( _window_dom.querySelector( ".library-card .library-tag--race" ), "La carte passee devrait porter son tag de type Ascendance en evidence" );
    }
    // le filtre retire laisse la suite propre
    TEST_libraryRemoveTag( "ascendance" );
    _cards              = _window_dom.querySelectorAll( ".library-card" );
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
    let _cards          = _window_dom.querySelectorAll( ".library-card" );
    TEST.ASSERT.equal( _cards.length, DON.GENERAL.ENUM.length, "La chip Généraux devrait laisser exactement les dons generaux (" + DON.GENERAL.ENUM.length + "), obtenu : " + _cards.length );
    // Tag par TRAIT : l'Entree commit
    TEST_libraryCommitFilterByEnter( "général" );
    TEST.ASSERT.ok( TEST_libraryTagPresent( "général" ), "Le filtre pose devrait vivre en tag dans la rangee des filtres actifs" );
    let _expected_trait = TEST_libraryCountGeneralFeats( [ "général" ] );
    _cards              = _window_dom.querySelectorAll( ".library-card" );
    TEST.ASSERT.equal( _cards.length, _expected_trait, "Le tag « général » devrait laisser " + _expected_trait + " don(s), obtenu : " + _cards.length );
    // Tag par NOM : le bouton « + » commit (le geste du tactile)
    TEST_libraryCommitFilterByButton( "animal" );
    TEST.ASSERT.ok( TEST_libraryTagPresent( "animal" ), "Le second filtre pose devrait vivre en tag lui aussi" );
    let _expected_and   = TEST_libraryCountGeneralFeats( [ "général", "animal" ] );
    _cards              = _window_dom.querySelectorAll( ".library-card" );
    TEST.ASSERT.equal( _cards.length, _expected_and, "Les deux tags cumules en ET devraient laisser " + _expected_and + " carte(s), obtenu : " + _cards.length );
    // Tag par CONTENU : le mot ne vit que dans la description de la carte
    TEST_libraryCommitFilterByEnter( "rongeur" );
    TEST.ASSERT.ok( TEST_libraryTagPresent( "rongeur" ), "Le troisieme filtre pose devrait vivre en tag lui aussi" );
    let _expected_content = TEST_libraryCountGeneralFeats( [ "général", "animal", "rongeur" ] );
    _cards              = _window_dom.querySelectorAll( ".library-card" );
    TEST.ASSERT.equal( _cards.length, _expected_content, "Le tag de contenu cumule devrait laisser " + _expected_content + " carte(s), obtenu : " + _cards.length );
    TEST.ASSERT.ok( _expected_content > 0, "La description de Animal de compagnie cite un rongeur : au moins une carte devrait passer (obtenu : " + _expected_content + ")" );
    // Un tag qui ne matche RIEN vide la liste (ET cumulatif)
    TEST_libraryCommitFilterByEnter( "zzzzz" );
    _cards              = _window_dom.querySelectorAll( ".library-card" );
    TEST.ASSERT.equal( _cards.length, 0, "Le tag qui ne matche rien devrait vider la liste (ET cumulatif), obtenu : " + _cards.length );
    TEST.ASSERT.notNull( _window_dom.querySelector( ".library-empty" ), "La liste vide devrait afficher l'invitation" );
    // Le × retire SON tag seul
    TEST_libraryRemoveTag( "zzzzz" );
    _cards              = _window_dom.querySelectorAll( ".library-card" );
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
    let _cards          = _window_dom.querySelectorAll( ".library-card" );
    TEST.ASSERT.equal( _cards.length, _spell_list.length, "Le sujet Sorts devrait rendre les " + _spell_list.length + " sorts scraping, obtenu : " + _cards.length );
    let _first_nature   = SPELLS.getNatureKeyOfName( _spell_list[ 0 ].name );
    let _first_header   = _window_dom.querySelector( ".library-level-header" );
    TEST.ASSERT.notNull( _first_header, "Le sujet Sorts devrait rendre ses sections par nature" );
    if ( _first_header ) {
        let _expected_label = SPELL.getNatureData( _first_nature )[ "label" ];
        TEST.ASSERT.equal( _first_header.textContent, _expected_label, "La premiere section devrait porter le libelle de la nature du premier sort (" + _expected_label + "), obtenu : " + _first_header.textContent );
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
        if ( TEST_libraryEntryMatchesFilter( _spell_list[ i ].name, _traits, _spell_list[ i ].description, SPELLS.getFullTypeLabel( _spell_list[ i ].name ), "", _trait_text ) ) {
            _expected_trait++;
        }
    }
    TEST_libraryCommitFilterByButton( _trait_text );
    TEST.ASSERT.ok( TEST_libraryTagPresent( _trait_text ), "Le filtre pose devrait vivre en tag dans la rangee des filtres actifs" );
    _cards              = _window_dom.querySelectorAll( ".library-card" );
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
    let _cards          = _window_dom.querySelectorAll( ".library-card" );
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
    _cards              = _window_dom.querySelectorAll( ".library-card" );
    TEST.ASSERT.equal( _cards.length, _expected_all, "Le × du tag devrait restaurer toute la liste (" + _expected_all + "), obtenu : " + _cards.length );
    TEST_libraryCommitFilterByButton( STUFF.CONSUMABLE_TRAIT.toLowerCase() );
    let _expected_trait = 0;
    for ( let i = 0, _size_i = STUFFS.length; i < _size_i; i++ ) {
        if ( STUFFS[ i ].name && TEST_libraryEntryMatchesFilter( STUFFS[ i ].name, STUFFS[ i ].traits, STUFFS[ i ].description, STUFF.getKindData( STUFFS.getKindKeyOfData( STUFFS[ i ] ) )[ "label" ], STUFFS.getKeyLineText( STUFFS[ i ] ), STUFF.CONSUMABLE_TRAIT.toLowerCase() ) ) {
            _expected_trait++;
        }
    }
    _cards              = _window_dom.querySelectorAll( ".library-card" );
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
        _cards          = _window_dom.querySelectorAll( ".library-card" );
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
