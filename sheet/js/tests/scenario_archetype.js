"use strict";
/**
 * Scenario : ARCHETYPE - le choix d'archétype vit dans la Bibliothèque
 * Le champ Archétype (onglet Général) vit sur le PERSONNAGE (un seul
 * archétype, affiché dès le début) ; son clic bascule la feuille sur la
 * Bibliothèque, sujet Archétypes, avec le filtre sur le nom posé (aucun
 * filtre si vide). Le « + » d'une carte pose l'archétype du personnage et
 * bascule sur la Progression ; son second clic le vide (l'option Aucun de
 * la popup disparue). Les sections de la Progression (une par palier pair
 * atteint) portent une ligne « Don d'archétype » dont le sélecteur est la
 * validation.
 * Depart : feuille vide (TEST.RESET.sheet()) puis race Elfe et classe
 * Magicien niveau 1.
 * 1. Champ rendu dès le reset (sans classe), input readOnly câblé sur
 *    event__archetype__goto_library, puis Elves + Magicien posés.
 * 2. Clic champ → Bibliothèque, sujet Archétypes actif, filtre vide, la
 *    liste porte une carte par archétype du scrape, AUCUNE chip de type.
 * 3. Filtre « acolyte draconique » + clic « + » de la carte → archétype
 *    posé sur le personnage (objet + champ du Général), bascule
 *    Progression, aucune section au niveau 1 (PF2 : le premier don
 *    d'archétype se prend au niveau 2).
 * 4. Prise de niveau 2 → section « Archétype : Acolyte draconique (2) »
 *    APRES la section de classe du meme niveau, ligne en attente, le choix
 *    de Dévouement valide la ligne, la sauvegarde dérive le choix.
 * 5. Sauvegarde → relecture en mémoire : clé archetype du personnage +
 *    section 2 restaurées.
 * 6. Second clic « + » de la carte possédée → archétype vidé, champ vide,
 *    sections retirées, plus de tag « Mon archétype ».
 */

function TEST_archetypeComponent() {
    return CONTROLLER.Character.current_character.getArchetype();
}

function TEST_archetypeCardContent() {
    return document.querySelector( ".library-window .library-card" );
}

TEST.RUNNER.register( "[ARCHETYPE] champ posé, câblé vers la Bibliothèque", function () {
    TEST.RESET.sheet();
    let _character                     = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Un nouveau personnage devrait etre instancie apres le reset" );
    if ( !_character ) {
        return;
    }
    // Le champ vit sur le PERSONNAGE : rendu DES LE RESET, sans aucune classe
    TEST.ASSERT.notNull( document.querySelector( ".characters-sheet-content .grid-area.area-archetype" ), "Le champ Archétype devrait etre rendu sur une page vide (affiche tout des le debut)" );
    TEST_openRacePopup();
    return TEST.clickTab( "body > .popup", "Elfe" ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        TEST_openClassPopup();
        return TEST.clickTab( "body > .popup", "Magicien" );
    } ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        TEST.ASSERT.equal( _character.getClasses().getLevel(), 1, "Pre-condition : Magicien niveau 1 pose, obtenu : " + _character.getClasses().getLevel() );
        let _archetype                  = TEST_archetypeComponent();
        TEST.ASSERT.equal( _archetype.getValue(), "", "L'archétype du personnage devrait etre vide avant tout choix, obtenu : [" + _archetype.getValue() + "]" );
        let _area                       = document.querySelector( ".characters-sheet-content .grid-area.area-archetype" );
        TEST.ASSERT.notNull( _area, "La zone Archétype devrait etre rendue apres la pose d'une classe" );
        if ( !_area ) {
            return;
        }
        let _input                      = _area.querySelector( "input.value" );
        TEST.ASSERT.notNull( _input, "Le champ Archétype devrait etre rendu" );
        if ( !_input ) {
            return;
        }
        TEST.ASSERT.ok( _input.readOnly, "Le champ Archétype devrait etre en lecture seule" );
        // La popup des 246 archétypes est supprimée : le clic de la feuille
        // bascule sur la Bibliothèque, le plat ne porte AUCUNE valeur inline
        let _onclick                    = _input.getAttribute( "onclick" ) || "";
        TEST.ASSERT.ok( _onclick.indexOf( "event__archetype__goto_library" ) !== -1, "Le champ devrait etre câblé sur event__archetype__goto_library, obtenu : [" + _onclick + "]" );
        TEST.ASSERT.notOk( _onclick.indexOf( "event__property_popup__open" ) !== -1, "Le champ ne devrait plus ouvrir la popup d'édition, obtenu : [" + _onclick + "]" );
    } );
} );

TEST.RUNNER.register( "[ARCHETYPE] clic champ → Bibliothèque, sujet Archétypes, filtre vide", function () {
    let _input                          = document.querySelector( ".characters-sheet-content .grid-area.area-archetype input" );
    TEST.ASSERT.notNull( _input, "Pre-condition : champ Archétype rendu" );
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
        TEST.ASSERT.equal( _active_subject.textContent, "Archétypes", "Le sujet actif devrait etre Archétypes (pose par le clic du champ), obtenu : " + _active_subject.textContent );
    }
    // La valeur est vide : AUCUN filtre pré-posé
    let _active_filters                 = _window_dom.querySelector( ".library-active-filters" );
    if ( _active_filters ) {
        TEST.ASSERT.equal( _active_filters.childElementCount, 0, "Aucun filtre ne devrait etre posé (archétype vide), obtenu : " + _active_filters.childElementCount );
    }
    // Le sujet ne porte AUCUNE chip de type : la liste alphabétique parle
    // d'elle-meme
    TEST.ASSERT.equal( _window_dom.querySelectorAll( ".library-filter-btn" ).length, 0, "Le sujet Archétypes ne devrait porter aucune chip de type, obtenu : " + _window_dom.querySelectorAll( ".library-filter-btn" ).length );
    let _expected                       = 0;
    for ( let _i = 0, _size_i = ARCHETYPES.ENUM.length; _i < _size_i; _i++ ) {
        if ( ARCHETYPES.ENUM[ _i ].name ) {
            _expected++;
        }
    }
    let _cards                          = TEST_libraryCards();
    TEST.ASSERT.equal( _cards.length, _expected, "Le sujet devrait rendre une carte par archétype scrape (" + _expected + "), obtenu : " + _cards.length );
    TEST.ASSERT.equal( _window_dom.querySelectorAll( ".library-card-add" ).length, _expected, "Chaque carte devrait porter son bouton « + »" );
} );

TEST.RUNNER.register( "[ARCHETYPE] « + » de la carte → personnage + bascule Progression", function () {
    let _character                      = CONTROLLER.Character.current_character;
    let _window_dom                     = TEST_libraryWindowDom();
    TEST.ASSERT.notNull( _window_dom, "Pre-condition : fenêtre Bibliothèque rendue" );
    if ( !_window_dom ) {
        return;
    }
    TEST_libraryCommitFilterByEnter( "acolyte draconique" );
    let _cards                          = TEST_libraryCards();
    TEST.ASSERT.equal( _cards.length, 1, "Le filtre « acolyte draconique » devrait laisser l'unique archétype correspondant, obtenu : " + _cards.length );
    if ( _cards.length !== 1 ) {
        return;
    }
    // La carte affiche ses lignes de dons : le don d'entrée de l'archétype
    let _devotion_line                  = _cards[ 0 ].querySelector( ".library-card-key-line" );
    TEST.ASSERT.notNull( _devotion_line, "La carte devrait porter ses lignes de dons" );
    if ( _devotion_line ) {
        TEST.ASSERT.ok( _devotion_line.textContent.indexOf( "Dévouement" ) !== -1, "La première ligne de don devrait citer le Dévouement, obtenu : [" + _devotion_line.textContent + "]" );
    }
    _cards[ 0 ].querySelector( ".library-card-add" ).click();
    let _archetype                      = TEST_archetypeComponent();
    TEST.ASSERT.equal( _archetype.getValue(), "Acolyte draconique", "Le « + » devrait poser Acolyte draconique sur le personnage, obtenu : [" + _archetype.getValue() + "]" );
    TEST.ASSERT.equal( _character.windows.getActiveWindow().getName(), CHARACTER.LevelUpWindow.NAME, "Le « + » devrait basculer la feuille sur la Progression, obtenu : " + _character.windows.getActiveWindow().getName() );
    let _input                          = document.querySelector( ".characters-sheet-content .grid-area.area-archetype input" );
    if ( _input ) {
        TEST.ASSERT.equal( _input.value, "Acolyte draconique", "Le champ du Général devrait suivre en place, obtenu : [" + _input.value + "]" );
    }
    // PF2 : le premier don d'archétype se prend au niveau 2, aucune section
    // au niveau 1
    TEST.ASSERT.equal( document.querySelectorAll( ".archetype-up-block" ).length, 0, "Aucune section d'archétype ne devrait exister au niveau 1, obtenu : " + document.querySelectorAll( ".archetype-up-block" ).length );
} );

TEST.RUNNER.register( "[ARCHETYPE] niveau 2 → section (2), choix du don = validation", function () {
    let _character                      = CONTROLLER.Character.current_character;
    let _take_button                    = document.querySelector( ".level-up-class-option[data-name='Magicien'] .level-up-class-option-take" );
    TEST.ASSERT.notNull( _take_button, "Pre-condition : bouton de prise de niveau rendu" );
    if ( !_take_button ) {
        return;
    }
    _take_button.click();
    let _blocks                          = document.querySelectorAll( ".level-up-block" );
    let _class_block_index               = -1;
    let _archetype_block_index           = -1;
    for ( let _i = 0, _size_i = _blocks.length; _i < _size_i; _i++ ) {
        let _level_name                  = _blocks[ _i ].getAttribute( "data-level-name" );
        if ( _level_name === "2" ) {
            _class_block_index           = _i;
        }
        if ( _blocks[ _i ].getAttribute( "data-archetype-level-name" ) === "2" ) {
            _archetype_block_index       = _i;
        }
    }
    TEST.ASSERT.ok( _class_block_index !== -1, "La section de classe du niveau 2 devrait etre rendue" );
    TEST.ASSERT.ok( _archetype_block_index !== -1, "La section d'archétype du palier 2 devrait etre rendue" );
    if ( _class_block_index !== -1 && _archetype_block_index !== -1 ) {
        TEST.ASSERT.ok( _archetype_block_index > _class_block_index, "La section d'archétype devrait vivre APRES la section de classe du meme niveau, obtenu : classe " + _class_block_index + " contre archétype " + _archetype_block_index );
    }
    let _archetype_block                 = document.querySelector( ".archetype-up-block[data-archetype-level-name='2']" );
    if ( !_archetype_block ) {
        return;
    }
    let _title                          = _archetype_block.querySelector( ".level-up-block-level-num" );
    if ( _title ) {
        TEST.ASSERT.ok( _title.textContent.indexOf( "Archétype : Acolyte draconique (2)" ) !== -1, "Le titre devrait porter l'archétype et son palier, obtenu : [" + _title.textContent + "]" );
    }
    let _line                           = _archetype_block.querySelector( ".level-up-row[data-slot-key='archetype_feat']" );
    TEST.ASSERT.notNull( _line, "La ligne Don d'archétype devrait etre rendue" );
    if ( !_line ) {
        return;
    }
    TEST.ASSERT.equal( _line.getAttribute( "data-current-phase" ), "RUNNING", "La ligne devrait etre en attente avant le choix, obtenu : " + _line.getAttribute( "data-current-phase" ) );
    // Les options du palier : les dons de l'archétype de niveau <= 2 (compte
    // calcule du domaine, jamais figé)
    let _expected_options               = 0;
    let _expected_feat                  = null;
    let _feats                          = ARCHETYPES.getFeatsUpToLevel( "Acolyte draconique", 2 );
    for ( let _f = 0, _size_f = _feats.length; _f < _size_f; _f++ ) {
        _expected_options++;
        if ( _feats[ _f ].level === 2 ) {
            _expected_feat               = _feats[ _f ].name;
        }
    }
    let _options                        = _line.querySelectorAll( ".single-select-option" );
    TEST.ASSERT.equal( _options.length - 1, _expected_options, "Le sélecteur devrait porter l'option vide plus les " + _expected_options + " don(s) du palier, obtenu : " + ( _options.length - 1 ) );
    if ( !_expected_feat ) {
        return;
    }
    let _option                        = _line.querySelector( ".single-select-option[data-value=" + JSON.stringify( _expected_feat ) + "]" );
    TEST.ASSERT.notNull( _option, "L'option " + _expected_feat + " devrait vivre dans le sélecteur du palier 2" );
    if ( !_option ) {
        return;
    }
    _option.click();
    return TEST.wait().then( function () {
        TEST.ASSERT.equal( _line.getAttribute( "data-current-phase" ), "SELECTED", "Le choix devrait valider la ligne (la valeur choisie EST la validation), obtenu : " + _line.getAttribute( "data-current-phase" ) );
        let _saved                      = _character.getDataToSave();
        TEST.ASSERT.isArray( _saved.archetype_history, "La sauvegarde devrait porter la clé archetype_history" );
        if ( !_saved.archetype_history || !_saved.archetype_history.length ) {
            return;
        }
        let _entry_2                    = null;
        for ( let _i = 0, _size_i = _saved.archetype_history.length; _i < _size_i; _i++ ) {
            if ( _saved.archetype_history[ _i ][ "level_name" ] === "2" ) {
                _entry_2                = _saved.archetype_history[ _i ];
            }
        }
        TEST.ASSERT.notNull( _entry_2, "La sauvegarde devrait contenir l'entree 2 de archetype_history" );
        if ( _entry_2 ) {
            TEST.ASSERT.equal( _entry_2[ "level_skill" ][ LEVELUP.ARCHETYPE_FEAT_KEY ], _expected_feat, "Le don choisi devrait vivre dans level_skill de l'entree 2, obtenu : [" + _entry_2[ "level_skill" ][ LEVELUP.ARCHETYPE_FEAT_KEY ] + "]" );
        }
    } );
} );

TEST.RUNNER.register( "[ARCHETYPE][SAVE] relecture en mémoire → archétype + choix restaurés", function () {
    let _character                      = CONTROLLER.Character.current_character;
    let _saved                          = _character.getDataToSave();
    TEST.ASSERT.equal( _saved[ ARCHETYPES.key_element ], "Acolyte draconique", "La sauvegarde devrait porter l'archétype au niveau du personnage (clé " + ARCHETYPES.key_element + "), obtenu : [" + _saved[ ARCHETYPES.key_element ] + "]" );
    if ( _saved.classes && _saved.classes.length ) {
        TEST.ASSERT.notOk( _saved.classes[ 0 ][ ARCHETYPES.key_element ] !== undefined, "La classe sauvegardée ne devrait plus porter l'archétype (le champ vit sur le personnage), obtenu : [" + _saved.classes[ 0 ][ ARCHETYPES.key_element ] + "]" );
    }
    let _reloaded                       = new CHARACTER.Current();
    _reloaded.updateData( _saved );
    _reloaded.doActionAfter( "event__data_loaded__done", { "param__current_character__object": _reloaded } );
    TEST.ASSERT.equal( _reloaded.getArchetype().getValue(), "Acolyte draconique", "L'archétype du personnage devrait etre restauré, obtenu : [" + _reloaded.getArchetype().getValue() + "]" );
    let _section_2                      = _reloaded.getArchetypeHistory().getContentByUUID( "2" );
    TEST.ASSERT.notNull( _section_2, "La section 2 de l'historique d'archétype devrait exister apres relecture" );
    if ( !_section_2 ) {
        return;
    }
    let _line                           = _section_2.getLine();
    TEST.ASSERT.notNull( _line, "La ligne Don d'archétype du palier 2 devrait exister apres relecture" );
    if ( _line ) {
        let _expected_feat              = null;
        let _feats                      = ARCHETYPES.getFeatsUpToLevel( "Acolyte draconique", 2 );
        for ( let _f = 0, _size_f = _feats.length; _f < _size_f; _f++ ) {
            if ( _feats[ _f ].level === 2 ) {
                _expected_feat          = _feats[ _f ].name;
            }
        }
        TEST.ASSERT.ok( _line.isActive(), "La ligne du palier 2 devrait etre validée apres relecture, obtenu : " + _line.isActive() );
        TEST.ASSERT.equal( _line.getSelectedValue(), _expected_feat, "Le don choisi devrait etre restauré, obtenu : [" + _line.getSelectedValue() + "]" );
    }
} );

TEST.RUNNER.register( "[ARCHETYPE] second clic « + » → archétype vidé, sections retirées", function () {
    let _character                      = CONTROLLER.Character.current_character;
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LibraryWindow.NAME ).then( function () {
        let _window_dom                 = TEST_libraryWindowDom();
        TEST.ASSERT.notNull( _window_dom, "Pre-condition : fenêtre Bibliothèque rendue" );
        if ( !_window_dom ) {
            return;
        }
        let _card                       = TEST_archetypeCardContent();
        TEST.ASSERT.notNull( _card, "La carte de l'archétype possédé devrait etre rendue (le filtre posé persiste)" );
        if ( !_card ) {
            return;
        }
        let _owned_tag                  = _card.querySelector( ".library-tag--archetype-name" );
        TEST.ASSERT.notNull( _owned_tag, "La carte possédée devrait porter le tag Mon archétype" );
        if ( _owned_tag ) {
            TEST.ASSERT.equal( _owned_tag.textContent, "Mon archétype", "Le tag de possession devrait porter son libelle, obtenu : [" + _owned_tag.textContent + "]" );
        }
        _card.querySelector( ".library-card-add" ).click();
        let _archetype                  = TEST_archetypeComponent();
        TEST.ASSERT.equal( _archetype.getValue(), "", "Le second clic « + » devrait vider l'archétype (le Aucun de l'ancienne popup), obtenu : [" + _archetype.getValue() + "]" );
        TEST.ASSERT.equal( _character.windows.getActiveWindow().getName(), CHARACTER.LevelUpWindow.NAME, "Le second clic devrait rebasculer sur la Progression, obtenu : " + _character.windows.getActiveWindow().getName() );
        TEST.ASSERT.equal( document.querySelectorAll( ".archetype-up-block" ).length, 0, "Aucune section d'archétype ne devrait rester apres le vidage, obtenu : " + document.querySelectorAll( ".archetype-up-block" ).length );
        let _input                      = document.querySelector( ".characters-sheet-content .grid-area.area-archetype input" );
        if ( _input ) {
            TEST.ASSERT.equal( _input.value, "", "Le champ du Général devrait suivre le vidage en place, obtenu : [" + _input.value + "]" );
        }
    } );
} );
