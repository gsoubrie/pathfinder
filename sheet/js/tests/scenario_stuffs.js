"use strict";
/**
 * Scenario : STUFFS (suite independante, RESET — placee APRES la chaine
 * classe/multiclasse/niveaux : ces suites ne resetent pas, elles heritent
 * de l'etat laisse par la precedente) L'onglet Équipement : l'inventaire
 * sur TROIS emplacements (Équipé / Sac à dos / Entreposé), le « + » en
 * tête de barre ouvre la POPUP D'AJOUT (TROIS sélecteurs VIERGES
 * « -- » : type → modèle [ses options suivent le type, un nom inconnu au
 * filtre devient le modèle — une entrée vit hors dataset] → emplacement
 * [vide = Sac à dos au Valider] → lieu si entreposé → commentaire →
 * Valider), les CATÉGORIES filtrent les sections dans la barre, une
 * section par emplacement avec sa LIGNE D'ENTÊTE titrée (colonnes
 * partagées par grille), les lignes ne gardent que leurs colonnes de
 * lecture et la ROUE CRANTÉE ouvre la POPUP D'ÉDITION (emplacement, lieu,
 * commentaire, RETRAIT), l'encombrement de la barre ne compte que le
 * porté (équipé + sac à dos, PF2), la section Entreposé porte son
 * aucun total (demande utilisateur : pas de somme sur l'entreposé).
 * 1. Onglet actif sur page vide : barre + filtre 4 puces (Tous +
 * 3 emplacements, comptes à 0, puce active visible) + encombrement 0,
 * 3 sections vides chacune titrée avec son entête de colonnes, le
 * filtre n'affiche que sa section puis Tous les rend, la popup
 * d'ajout vierge (tout « -- », aucune option de modèle sans type,
 * ligne lieu absente sans entreposage), Quitter referme sans créer.
 * 2. Une épée longue (type Armes posé, Entrée sur le filtre du
 * modèle, emplacement vide → Sac à dos) → l'entrée vit dans Sac à dos
 * avec ses Dégâts inline et SA quantité (toute entrée en porte une),
 * la ROUE CRANTÉE ouvre l'édition (emplacement courant affiché, lieu
 * absent hors entreposage), choisir Équipé valide et déplace
 * l'entrée, l'édition des CARACTÉRISTIQUES surcharge le scrapé (vides
 * = retour au scrapé) et la quantité suit l'encombrement, son "?"
 * ouvre la popup objet (champs de type scrapés), un nom inconnu au
 * filtre DEVIENT le modèle (entrée hors dataset : pas d'info inline,
 * pas de "?", encombrement « — »), Valider sans type ne crée rien,
 * Valider sur un possédé ne fait rien.
 * 3. Une armure changée de type + emplacement Entreposé + lieu +
 * commentaire → l'entrée vit dans la section Entreposé, l'édition
 * modifie son lieu (le titre suit), l'encombrement de la barre ne la
 * compte PAS (aucun total sur l'entreposé), l'édition la ramène
 * au Sac à dos (bulk qui la compte, lieu GARDÉ mais révélé seulement
 * au retour sur Entreposé). FERMETURE de la popup d'information d'un
 * objet APOSTROPHE (regression : l'uuid embarqué inline cassait le
 * handler) : le clic sur le « x » ET le clic sur le fond de l'overlay
 * referment.
 * 4. Un consommable (premier trait Consommable du dataset autres
 * objets, emplacement posé explicitement) : empile au Valider
 * (quantité 2, sans déplacement), sa quantité se modifie,
 * l'encombrement suit en place, le filtre isole chaque catégorie,
 * save → load : emplacements, lieux et commentaires restaurés, les
 * vieux save "worn" se relisent équipé/sac à dos, RETRAIT par la
 * popup d'édition, encombrement rendu.
 */
function TEST_stuffsOpenAddPopup() {
    let _button = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-add-bar .stuffs-add-button" );
    if ( !_button ) {
        return;
    }
    _button.click();
}

function TEST_stuffsQuitAddPopup() {
    let _cancel = document.querySelector( "body > .popup .stuffs-add-popup .popup-up-cancel" );
    if ( !_cancel ) {
        return;
    }
    _cancel.click();
}

function TEST_stuffsValidateAddPopup() {
    let _valid = document.querySelector( "body > .popup .stuffs-add-popup .popup-up-valid" );
    if ( !_valid ) {
        return;
    }
    _valid.click();
}

// Le clavier du filtre : le geste reel (frappe + Entrée sur l'input du
// selecteur MODELE de la popup), meme parcours que l'onglet Ajustements
function TEST_stuffsFilterEnter( filter_value ) {
    let _popup = document.querySelector( "body > .popup .stuffs-add-popup" );
    if ( !_popup ) {
        return;
    }
    let _selector = _popup.querySelector( ".stuffs-add-popup-model .single-select-selector" );
    let _filter   = _popup.querySelector( ".stuffs-add-popup-model .single-select-filter" );
    if ( !_selector || !_filter ) {
        return;
    }
    _selector.click();
    _filter.value = filter_value;
    _filter.dispatchEvent( new KeyboardEvent( "keydown", { "key": "Enter" } ) );
}

function TEST_stuffsPickType( type_key ) {
    let _option = document.querySelector( "body > .popup .stuffs-add-popup .stuffs-add-popup-type .single-select-option[data-value='" + type_key + "']" );
    if ( !_option ) {
        return;
    }
    _option.click();
}

function TEST_stuffsPickLocation( location_key ) {
    let _option = document.querySelector( "body > .popup .stuffs-add-popup .stuffs-form-popup-location .single-select-option[data-value='" + location_key + "']" );
    if ( !_option ) {
        return;
    }
    _option.click();
}

function TEST_stuffsPickModel( value ) {
    let _option = document.querySelector( "body > .popup .stuffs-add-popup .stuffs-add-popup-model .single-select-option[data-value=" + JSON.stringify( value ) + "]" );
    if ( !_option ) {
        return;
    }
    _option.click();
}

// La roue crantée d'une entrée : le geste reel d'ouverture de l'édition
function TEST_stuffsOpenEditPopup( kind, value ) {
    let _gear = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-entry[data-kind='" + kind + "'][data-value=" + JSON.stringify( value ) + "] .stuffs-entry-edit" );
    if ( !_gear ) {
        return;
    }
    _gear.click();
}

function TEST_stuffsEditPickLocation( location_key ) {
    let _option = document.querySelector( "body > .popup .stuffs-edit-popup .stuffs-form-popup-location .single-select-option[data-value='" + location_key + "']" );
    if ( !_option ) {
        return;
    }
    _option.click();
}

function TEST_stuffsValidateEditPopup() {
    let _valid = document.querySelector( "body > .popup .stuffs-edit-popup .popup-up-valid" );
    if ( !_valid ) {
        return;
    }
    _valid.click();
}

function TEST_stuffsRemoveEditPopup() {
    let _remove = document.querySelector( "body > .popup .stuffs-edit-popup .stuffs-edit-popup-remove-button" );
    if ( !_remove ) {
        return;
    }
    _remove.click();
}

function TEST_stuffsClickLocationFilter( location_key ) {
    let _filter = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-add-bar .stuffs-location-filter[data-location='" + location_key + "']" );
    if ( !_filter ) {
        return;
    }
    _filter.click();
}

function TEST_stuffsDiagnosis() {
    let _description  = "";
    let _popup        = document.querySelector( "body > .popup" );
    if ( _popup && _popup.querySelector( ".stuffs-add-popup" ) ) {
        let _type_label     = _popup.querySelector( ".stuffs-add-popup-type .single-select-selector-label" );
        let _model_label    = _popup.querySelector( ".stuffs-add-popup-model .single-select-selector-label" );
        let _location_label = _popup.querySelector( ".stuffs-form-popup-location .single-select-selector-label" );
        _description        += "[popup ajout : type=" + ( _type_label ? _type_label.textContent : "?" ) + ", modèle=" + ( _model_label ? _model_label.textContent : "?" ) + ", emplacement=" + ( _location_label ? _location_label.textContent : "?" ) + "] ";
    }
    else if ( _popup && _popup.querySelector( ".stuffs-edit-popup" ) ) {
        let _location_label = _popup.querySelector( ".stuffs-form-popup-location .single-select-selector-label" );
        _description        += "[popup édition : emplacement=" + ( _location_label ? _location_label.textContent : "?" ) + "] ";
    }
    else {
        _description        += "[pas de popup] ";
    }
    let _sections = document.querySelectorAll( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-section" );
    for ( let _i = 0, _size_i = _sections.length; _i < _size_i; _i++ ) {
        _description += "[" + _sections[ _i ].getAttribute( "data-location" ) + " : " + _sections[ _i ].querySelectorAll( ".stuffs-entry" ).length + "] ";
    }
    let _bulk = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-bulk-total" );
    _description                    += _bulk ? _bulk.textContent : "?";
    return _description;
}

function TEST_stuffsBulkText( bulk_total ) {
    // The bar reads "porté / max", the max comes from the domain (10 + FOR)
    let _character = CONTROLLER.Character.current_character;
    let _max       = _character.getStuffs().getBulkMax( _character );
    return "Encombrement : " + String( bulk_total ).replace( ".", "," ) + " / " + _max;
}

TEST.RUNNER.register( "[STUFFS] onglet = + en tête + filtre catégories + popup d'ajout", function () {
    TEST.RESET.sheet();
    let _tab = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.StuffsWindow.NAME + "']" );
    TEST.ASSERT.notNull( _tab, "L'onglet Équipement devrait exister" );
    if ( !_tab ) {
        return;
    }
    TEST.ASSERT.notEqual( _tab.getAttribute( "data-visibility-state" ), GS.CONST.VISIBILITY_STATE.DISABLED, "L'onglet Équipement ne devrait pas porter l'etat disabled sur page vide" );
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.StuffsWindow.NAME ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _pane = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Équipement devrait exister" );
        if ( !_pane ) {
            return;
        }
        // La barre : le + en tête (PREMIER enfant), les catégories qui
        // filtrent, l'encombrement porté a sa droite
        let _add_bar = _pane.querySelector( ".stuffs-add-bar" );
        TEST.ASSERT.notNull( _add_bar, "La barre devrait etre rendue" );
        if ( !_add_bar ) {
            return;
        }
        TEST.ASSERT.ok( _add_bar.firstElementChild.classList.contains( "stuffs-add-button" ), "Le + devrait ouvrir la barre (premier enfant), obtenu : [" + ( _add_bar.firstElementChild ? _add_bar.firstElementChild.className : "vide" ) + "]" );
        TEST.ASSERT.equal( _pane.querySelectorAll( ".stuffs-add-button" ).length, 1, "Un seul + devrait vivre dans la fenêtre, obtenu : " + _pane.querySelectorAll( ".stuffs-add-button" ).length );
        let _bulk_total = _pane.querySelector( ".stuffs-bulk-total" );
        TEST.ASSERT.equal( _bulk_total ? _bulk_total.textContent : null, TEST_stuffsBulkText( 0 ), "L'encombrement porté devrait etre 0 sur page vide, obtenu : [" + ( _bulk_total ? _bulk_total.textContent : "null" ) + "]" );
        // Les catégories : Tous + une puce par emplacement, comptes à 0,
        // la puce Tous active par défaut (la data porte l'état)
        let _filters = _pane.querySelectorAll( ".stuffs-add-bar .stuffs-location-filter" );
        TEST.ASSERT.equal( _filters.length, STUFF.LOCATIONS.length + 1, "La barre devrait porter Tous + une puce par emplacement (" + ( STUFF.LOCATIONS.length + 1 ) + "), obtenu : " + _filters.length );
        TEST.ASSERT.equal( _filters.length ? _filters[ 0 ].getAttribute( "data-location" ) : null, STUFF.FILTER_ALL, "La premiere puce devrait etre Tous, obtenu : [" + ( _filters.length ? _filters[ 0 ].getAttribute( "data-location" ) : "null" ) + "]" );
        TEST.ASSERT.equal( _filters.length ? _filters[ 0 ].getAttribute( "data-selected" ) : null, "true", "La puce Tous devrait etre active par défaut, obtenu : [" + ( _filters.length ? _filters[ 0 ].getAttribute( "data-selected" ) : "null" ) + "]" );
        for ( let _l = 0; _l < _filters.length; _l++ ) {
            if ( _filters[ _l ].getAttribute( "data-location" ) !== STUFF.FILTER_ALL ) {
                TEST.ASSERT.equal( _filters[ _l ].getAttribute( "data-selected" ), "false", "Seule Tous devrait etre active sur page vide" );
                TEST.ASSERT.ok( _filters[ _l ].textContent.indexOf( "(0)" ) !== -1, "La puce " + _filters[ _l ].getAttribute( "data-location" ) + " devrait compter 0 entrée, obtenu : [" + _filters[ _l ].textContent + "]" );
            }
        }
        // Une section par emplacement (STUFF.LOCATIONS = l'ordre affiché),
        // chacune titrée avec sa ligne d'entête de colonnes (le premier
        // titre nomme l'objet)
        let _sections = _pane.querySelectorAll( ".stuffs-section" );
        TEST.ASSERT.equal( _sections.length, STUFF.LOCATIONS.length, "L'onglet devrait rendre une section par emplacement (" + STUFF.LOCATIONS.length + "), obtenu : " + _sections.length );
        for ( let _s = 0; _s < _sections.length && _s < STUFF.LOCATIONS.length; _s++ ) {
            TEST.ASSERT.equal( _sections[ _s ].getAttribute( "data-location" ), STUFF.LOCATIONS[ _s ].key, "La section " + _s + " devrait porter l'emplacement " + STUFF.LOCATIONS[ _s ].key + ", obtenu : [" + _sections[ _s ].getAttribute( "data-location" ) + "]" );
            let _header_titles = _sections[ _s ].querySelectorAll( ".stuffs-entries-header-title" );
            TEST.ASSERT.ok( _header_titles.length >= 3 && _header_titles[ 0 ].textContent === "Objet" && _header_titles[ 1 ].textContent === "Caractéristiques" && _header_titles[ 2 ].textContent === "Commentaire", "Chaque section devrait porter son entête de colonnes (Objet, Caractéristiques, Commentaire), obtenu : " + ( _header_titles.length ? "[" + _header_titles[ 0 ].textContent + " | " + _header_titles[ 1 ].textContent + " | " + _header_titles[ 2 ].textContent + "]" : "aucun entête" ) );
        }
        // Le filtre n'affiche que sa section, Tous les rend toutes
        TEST_stuffsClickLocationFilter( "equipped" );
        return TEST.wait().then( function () {
            let _filtered_sections = _pane.querySelectorAll( ".stuffs-section" );
            TEST.ASSERT.equal( _filtered_sections.length, 1, "Le filtre Équipé devrait laisser une seule section, obtenu : " + _filtered_sections.length );
            TEST.ASSERT.equal( _filtered_sections.length ? _filtered_sections[ 0 ].getAttribute( "data-location" ) : null, "equipped", "La section filtrée devrait etre Équipé" );
            let _equipped_filter = _pane.querySelector( ".stuffs-add-bar .stuffs-location-filter[data-location='equipped']" );
            TEST.ASSERT.equal( _equipped_filter ? _equipped_filter.getAttribute( "data-selected" ) : null, "true", "La puce Équipé devrait etre active, obtenu : [" + ( _equipped_filter ? _equipped_filter.getAttribute( "data-selected" ) : "null" ) + "]" );
            TEST_stuffsClickLocationFilter( STUFF.FILTER_ALL );
            return TEST.wait();
        } ).then( function () {
            TEST.ASSERT.equal( _pane.querySelectorAll( ".stuffs-section" ).length, STUFF.LOCATIONS.length, "Le filtre Tous devrait rendre toutes les sections, obtenu : " + _pane.querySelectorAll( ".stuffs-section" ).length );
            // La popup d'ajout : le + l'ouvre VIERGE — retour
            // utilisateur : TOUT sélecteur démarre « -- », aucune
            // option de modèle sans type, lieu absent sans entreposage
            TEST_stuffsOpenAddPopup();
            let _popup = document.querySelector( "body > .popup .stuffs-add-popup" );
            TEST.ASSERT.notNull( _popup, "La popup d'ajout devrait s'ouvrir sur le +" );
            if ( !_popup ) {
                return;
            }
            let _type_label = _popup.querySelector( ".stuffs-add-popup-type .single-select-selector-label" );
            TEST.ASSERT.equal( _type_label.textContent, "--", "Le type devrait démarrer vierge (--), obtenu : [" + _type_label.textContent + "]" );
            let _model_options_count = _popup.querySelectorAll( ".stuffs-add-popup-model .single-select-option" ).length;
            TEST.ASSERT.equal( _model_options_count, 1, "Le sélecteur de modèle devrait porter L'option vide seule sans type, obtenu : " + _model_options_count );
            let _location_label = _popup.querySelector( ".stuffs-form-popup-location .single-select-selector-label" );
            TEST.ASSERT.equal( _location_label.textContent, "--", "L'emplacement devrait démarrer vierge (--), obtenu : [" + _location_label.textContent + "]" );
            TEST.ASSERT.equal( _popup.querySelectorAll( ".stuffs-form-popup-location .single-select-option" ).length, STUFF.LOCATIONS.length + 1, "Le sélecteur d'emplacement devrait porter chaque emplacement + l'option vide, obtenu : " + _popup.querySelectorAll( ".stuffs-form-popup-location .single-select-option" ).length );
            let _place_row = _popup.querySelector( ".stuffs-form-popup-place" );
            TEST.ASSERT.notOk( _place_row && _place_row.offsetParent, "La ligne lieu ne devrait pas s'afficher sans entreposage, obtenu : [" + ( _place_row ? "affichée" : "absente" ) + "]" );
            // Le sélecteur de type se lit ALPHABÉTIQUEMENT (retour
            // utilisateur) : l'option vide se saute
            let _type_option_labels = [];
            let _type_options_all   = _popup.querySelectorAll( ".stuffs-add-popup-type .single-select-option" );
            for ( let _t = 0, _size_t = _type_options_all.length; _t < _size_t; _t++ ) {
                let _option_value = _type_options_all[ _t ].getAttribute( "data-value" );
                if ( _option_value ) {
                    _type_option_labels.push( _type_options_all[ _t ].querySelector( ".single-select-option-label" ).textContent );
                }
            }
            let _labels_sorted = _type_option_labels.slice().sort();
            TEST.ASSERT.ok( _type_option_labels.length === _labels_sorted.length && _type_option_labels.every( function ( label, index ) { return label === _labels_sorted[ index ]; } ), "Le sélecteur de type devrait etre alphabétique, obtenu : [" + _type_option_labels.join( " | " ) + "]" );
            let _comment_input = _popup.querySelector( ".stuffs-form-popup-comment-input" );
            TEST.ASSERT.notNull( _comment_input, "La popup devrait porter son champ commentaire" );
            TEST.ASSERT.ok( !_comment_input.value, "Le champ commentaire devrait etre vide a l'ouverture, obtenu : [" + _comment_input.value + "]" );
            TEST_stuffsQuitAddPopup();
            TEST.ASSERT.isNull( document.querySelector( "body > .popup .stuffs-add-popup" ), "La popup devrait etre refermée sur Quitter" );
            TEST.ASSERT.equal( CONTROLLER.Character.current_character.getStuffs().getSize(), 0, "Quitter ne devrait rien créer, obtenu : " + CONTROLLER.Character.current_character.getStuffs().getSize() );
        } );
    } );
} );

TEST.RUNNER.register( "[STUFFS] épée longue = sac à dos + roue crantée équipé + popup objet", function () {
    let _pane = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "']" );
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Équipement ouvert" );
    if ( !_pane ) {
        return;
    }
    TEST_stuffsOpenAddPopup();
    // La popup démarre vierge : le type Armes se POSE, puis l'Entrée sur
    // le filtre du modèle (insensible à la casse, ACCENTS COMPRIS — la
    // comparaison ne normalise pas les diacritiques) devient la valeur
    // en attente, l'emplacement reste vide → Sac à dos au Valider
    return TEST.wait().then( function () {
        TEST_stuffsPickType( "weapon" );
        return TEST.wait();
    } ).then( function () {
        TEST_stuffsFilterEnter( "épée longue" );
        return TEST.wait();
    } ).then( function () {
        let _popup = document.querySelector( "body > .popup .stuffs-add-popup" );
        TEST.ASSERT.notNull( _popup, "Pre-condition : popup d'ajout ouverte" );
        if ( !_popup ) {
            return;
        }
        let _model_label = _popup.querySelector( ".stuffs-add-popup-model .single-select-selector-label" );
        TEST.ASSERT.equal( _model_label.textContent, "Épée longue", "L'Entrée sur nom exact devrait poser la valeur canonique en attente, obtenu : [" + _model_label.textContent + "] — fenêtre : " + TEST_stuffsDiagnosis() );
        TEST_stuffsValidateAddPopup();
        return TEST.wait();
    } ).then( function () {
        let _character = CONTROLLER.Character.current_character;
        TEST.ASSERT.isNull( document.querySelector( "body > .popup .stuffs-add-popup" ), "La popup devrait etre refermée apres Valider" );
        let _entry_dom = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-section[data-location='backpack'] .stuffs-entry[data-value='Épée longue']" );
        TEST.ASSERT.notNull( _entry_dom, "L'épée longue devrait etre rendue dans la section Sac à dos après Valider, fenêtre : " + TEST_stuffsDiagnosis() );
        let _stuff_object = _character.getStuffs().getContentByUUID( "weapon__Épée longue" );
        TEST.ASSERT.notNull( _stuff_object, "L'épée longue devrait vivre dans le conteneur (weapon__Épée longue)" );
        if ( !_entry_dom || !_stuff_object ) {
            return;
        }
        TEST.ASSERT.equal( _stuff_object.location, "backpack", "L'emplacement vide au Valider devrait retomber au Sac à dos (PF2 : ce qui n'est ni équipé ni entreposé se porte), obtenu : [" + _stuff_object.location + "]" );
        let _sword_chars = _entry_dom.querySelector( ".stuffs-entry-chars" );
TEST.ASSERT.notNull( _sword_chars, "L'entrée d'arme devrait porter sa colonne de caractéristiques" );
TEST.ASSERT.ok( _sword_chars && _sword_chars.textContent.indexOf( "Dégâts" ) !== -1 && _sword_chars.textContent.indexOf( STUFFS.getFieldValue( "Épée longue", "Dégâts" ) ) !== -1, "L'entrée d'arme devrait porter ses Dégâts libellés, obtenu : [" + ( _sword_chars ? _sword_chars.textContent : "null" ) + "]" );
TEST.ASSERT.ok( _sword_chars && _sword_chars.textContent.indexOf( "Mains" ) !== -1, "L'entrée d'arme devrait porter ses Mains libellées, obtenu : [" + ( _sword_chars ? _sword_chars.textContent : "null" ) + "]" );
        let _sword_quantity_input = _entry_dom.querySelector( ".stuffs-entry-quantity" );
        TEST.ASSERT.notNull( _sword_quantity_input, "Toute entrée AFFICHE sa quantité (l'édition vit dans la popup de la roue crantée, jamais d'input dans la liste)" );
        TEST.ASSERT.notEqual( _sword_quantity_input ? _sword_quantity_input.tagName : null, "INPUT", "La quantité de la ligne reste en lecture, obtenu : [" + ( _sword_quantity_input ? _sword_quantity_input.tagName : "null" ) + "]" );
        TEST.ASSERT.equal( _sword_quantity_input ? _sword_quantity_input.textContent : null, "1", "La quantité de l'épée devrait etre 1, obtenu : [" + ( _sword_quantity_input ? _sword_quantity_input.textContent : "null" ) + "]" );
        // Le GLYPHE du type ouvre la ligne (retour utilisateur : le type
        // se lit d'un coup d'oeil), l'infobulle porte son nom
        let _kind_cell = _entry_dom.querySelector( ".stuffs-entry-kind" );
        TEST.ASSERT.ok( _entry_dom.firstElementChild === _kind_cell, "L'icône du type devrait ouvrir la ligne, obtenu : [" + ( _entry_dom.firstElementChild ? _entry_dom.firstElementChild.className : "vide" ) + "]" );
        TEST.ASSERT.equal( _kind_cell ? _kind_cell.textContent : null, STUFF.ICONS.weapon, "L'icône de l'épée devrait etre le glyphe des armes, obtenu : [" + ( _kind_cell ? _kind_cell.textContent : "null" ) + "]" );
        TEST.ASSERT.equal( _kind_cell ? _kind_cell.getAttribute( "title" ) : null, "Armes", "L'infobulle de l'icône devrait porter le nom du type, obtenu : [" + ( _kind_cell ? _kind_cell.getAttribute( "title" ) : "null" ) + "]" );
        // Le DOM de la ligne suit l'ORDRE DES COLONNES (object, quantité,
        // encombrement, roue) : le placement automatique de la grille
        // marche au curseur, une cellule construite en désordre rejette
        // les suivantes sur la RANGÉE 2 (regression du run utilisateur)
        let _entry_cells = _entry_dom.children;
        TEST.ASSERT.ok( _entry_cells.length >= 4 && _entry_cells[ _entry_cells.length - 1 ].classList.contains( "stuffs-entry-edit" ) && _entry_cells[ _entry_cells.length - 2 ].classList.contains( "stuffs-entry-bulk" ) && _entry_cells[ _entry_cells.length - 3 ].classList.contains( "stuffs-entry-quantity" ), "La ligne devrait construire ses cellules colonne par colonne (quantité avant encombrement, roue en dernier), obtenu : [" + _entry_dom.innerHTML.slice( 0, 120 ) + "…]" );
        TEST.ASSERT.equal( _entry_dom.querySelector( ".stuffs-entry-bulk" ).textContent, STUFFS.getFieldValue( "Épée longue", "bulk" ), "L'entrée devrait porter son encombrement inline, obtenu : [" + _entry_dom.querySelector( ".stuffs-entry-bulk" ).textContent + "]" );
        TEST.ASSERT.notNull( _entry_dom.querySelector( ".stuffs-entry-edit" ), "L'entrée devrait porter sa roue crantée d'édition" );
        // L'encombrement porté suit l'ajout : croisé avec le domaine
        let _bulk_total = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-bulk-total" );
        TEST.ASSERT.equal( _bulk_total.textContent, TEST_stuffsBulkText( Math.round( STUFFS.parseBulk( "Épée longue" ) * 10 ) / 10 ), "L'encombrement porté devrait compter l'épée, obtenu : [" + _bulk_total.textContent + "]" );
        // La ROUE CRANTÉE ouvre l'édition : l'emplacement courant
        // s'affiche, choisir Équipé valide et déplace l'entrée
        TEST_stuffsOpenEditPopup( "weapon", "Épée longue" );
        return TEST.wait().then( function () {
            let _edit_popup = document.querySelector( "body > .popup .stuffs-edit-popup" );
            TEST.ASSERT.notNull( _edit_popup, "La popup d'édition devrait s'ouvrir sur la roue crantée" );
            if ( !_edit_popup ) {
                return;
            }
            // Les boutons vivent EN BAS de la popup (retour utilisateur :
            // ils chevauchaient le titre), jamais dans le titre
            TEST.ASSERT.ok( _edit_popup.lastElementChild.classList.contains( "popup-up-actions" ), "La rangée d'actions devrait etre le DERNIER enfant de la popup (boutons en bas)" );
            TEST.ASSERT.isNull( _edit_popup.querySelector( ".title .popup-up-actions" ), "Aucune rangée d'actions ne devrait vivre dans le titre" );
            let _edit_location_label = _edit_popup.querySelector( ".stuffs-form-popup-location .single-select-selector-label" );
            TEST.ASSERT.equal( _edit_location_label.textContent, STUFF.getLocationData( "backpack" ).label, "L'édition devrait afficher l'emplacement courant de l'entrée, obtenu : [" + _edit_location_label.textContent + "]" );
            let _edit_place_row = _edit_popup.querySelector( ".stuffs-form-popup-place" );
            TEST.ASSERT.notOk( _edit_place_row && _edit_place_row.offsetParent, "La ligne lieu ne devrait pas s'afficher sur l'édition d'un objet non entreposé, obtenu : [" + ( _edit_place_row ? "affichée" : "absente" ) + "]" );
            TEST_stuffsEditPickLocation( "equipped" );
            return TEST.wait().then( function () {
                TEST_stuffsValidateEditPopup();
                return TEST.wait();
            } );
        } );
    } ).then( function () {
        let _character = CONTROLLER.Character.current_character;
        TEST.ASSERT.isNull( document.querySelector( "body > .popup .stuffs-edit-popup" ), "La popup d'édition devrait etre refermée apres Valider" );
        let _entry_after = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-section[data-location='equipped'] .stuffs-entry[data-value='Épée longue']" );
        TEST.ASSERT.notNull( _entry_after, "L'épée devrait vivre dans la section Équipé apres l'édition, fenêtre : " + TEST_stuffsDiagnosis() );
        TEST.ASSERT.equal( _character.getStuffs().getContentByUUID( "weapon__Épée longue" ).location, "equipped", "Le domaine devrait porter l'épée équipée, obtenu : [" + _character.getStuffs().getContentByUUID( "weapon__Épée longue" ).location + "]" );
        // Le "?" ouvre la popup objet (données scrapées) — le sélecteur
        // de la feuille pour une popup OUVERTE est l'overlay en phase
        // RUNNING, la popup refermée reste au DOM masquée
        let _info = _entry_after ? _entry_after.querySelector( ".stuffs-entry-info" ) : null;
        TEST.ASSERT.notNull( _info, "L'entrée devrait porter son ?" );
        if ( !_info ) {
            return;
        }
        _info.click();
        let _overlay       = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
        TEST.ASSERT.notNull( _overlay, "La popup objet devrait etre ouverte (overlay RUNNING)" );
        let _popup_title = _overlay ? _overlay.querySelector( ".popup-title" ) : null;
        TEST.ASSERT.equal( _popup_title ? _popup_title.textContent : null, "Épée longue", "La popup devrait afficher le nom de l'objet, obtenu : [" + ( _popup_title ? _popup_title.textContent : "null" ) + "]" );
        // Les champs de type scrapés vivent dans la popup : croisés
        // avec le domaine
        let _popup_text     = _overlay ? _overlay.textContent : "";
        let _detail_fields  = STUFF.getKindData( "weapon" ).detail_fields;
        for ( let _f = 0, _size_f = _detail_fields.length; _f < _size_f; _f++ ) {
            let _expected = STUFFS.getFieldValue( "Épée longue", _detail_fields[ _f ] );
            if ( _expected ) {
                TEST.ASSERT.ok( _popup_text.indexOf( _expected ) !== -1, "La popup devrait porter le champ scrapé " + _detail_fields[ _f ] + " [" + _expected + "]" );
            }
        }
        CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": "stuff__Épée longue" } );
            TEST.ASSERT.equal( _overlay.getAttribute( "data-current-phase" ), "HIDDEN_TO_STRING", "La popup devrait passer en phase masquee apres fermeture" );
        // L'ÉDITION porte TOUT (retour utilisateur) : la quantité et
            // les caractéristiques du type s'y règlent — la valeur
            // saisie SURCHARGE le scrapé, un input vidé retombe dessus
        TEST_stuffsOpenEditPopup( "weapon", "Épée longue" );
        return TEST.wait().then( function () {
                let _edit_popup = document.querySelector( "body > .popup .stuffs-edit-popup" );
                TEST.ASSERT.notNull( _edit_popup, "La popup d'édition devrait s'ouvrir sur la roue crantée" );
                if ( !_edit_popup ) {
                    return;
                }
                let _quantity_input = _edit_popup.querySelector( ".stuffs-edit-popup-quantity-input" );
                TEST.ASSERT.notNull( _quantity_input, "L'édition devrait porter son champ quantité" );
                TEST.ASSERT.equal( _quantity_input ? _quantity_input.value : null, "1", "Le champ quantité part de l'état du domaine, obtenu : [" + ( _quantity_input ? _quantity_input.value : "null" ) + "]" );
                let _damage_row = _edit_popup.querySelector( ".stuffs-edit-popup-char-row[data-field=" + JSON.stringify( "Dégâts" ) + "]" );
                TEST.ASSERT.notNull( _damage_row, "L'édition devrait porter la rangée Dégâts de son type" );
                let _damage_input = _damage_row ? _damage_row.querySelector( "input" ) : null;
                TEST.ASSERT.equal( _damage_input ? _damage_input.value : null, STUFFS.getFieldValue( "Épée longue", "Dégâts" ), "Le champ Dégâts part de la valeur scrapée, obtenu : [" + ( _damage_input ? _damage_input.value : "null" ) + "]" );
                if ( _quantity_input && _damage_input ) {
                    _quantity_input.value = "2";
                    _damage_input.value   = "2d6+";
                }
                TEST_stuffsValidateEditPopup();
                return TEST.wait();
            } ).then( function () {
                let _sword_object = _character.getStuffs().getContentByUUID( "weapon__Épée longue" );
                TEST.ASSERT.equal( _sword_object ? _sword_object.quantity : null, 2, "La quantité éditée devrait vivre dans le domaine, obtenu : " + ( _sword_object ? _sword_object.quantity : "null" ) );
                TEST.ASSERT.equal( _sword_object ? _sword_object.getCharacteristicValue( "Dégâts" ) : null, "2d6+", "La caractéristique saisie devrait surcharger le scrapé, obtenu : [" + ( _sword_object ? _sword_object.getCharacteristicValue( "Dégâts" ) : "null" ) + "]" );
                let _entry_with_override = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-section[data-location='equipped'] .stuffs-entry[data-value='Épée longue']" );
                TEST.ASSERT.ok( _entry_with_override && _entry_with_override.textContent.indexOf( "2d6+" ) !== -1, "La ligne devrait porter la caractéristique surchargée, obtenu : [" + ( _entry_with_override ? _entry_with_override.textContent : "null" ) + "]" );
                TEST.ASSERT.equal( _entry_with_override ? _entry_with_override.querySelector( ".stuffs-entry-quantity" ).textContent : null, "2", "La quantité AFFICHÉE de la ligne devrait suivre l'édition, obtenu : [" + ( _entry_with_override ? _entry_with_override.querySelector( ".stuffs-entry-quantity" ).textContent : "null" ) + "]" );
                // La quantité pèse : l'encombrement porté suit les unités
                let _bulk_with_stack = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-bulk-total" );
                TEST.ASSERT.equal( _bulk_with_stack.textContent, TEST_stuffsBulkText( Math.round( STUFFS.parseBulk( "Épée longue" ) * 2 * 10 ) / 10 ), "L'encombrement porté devrait compter les DEUX épées, obtenu : [" + _bulk_with_stack.textContent + "]" );
                // Save → load : la surcharge et la quantité survivent
                let _reloaded_sword_save = new CHARACTER.Current();
                _reloaded_sword_save.updateData( _character.getDataToSave() );
                let _reloaded_sword = _reloaded_sword_save.getStuffs().getContentByUUID( "weapon__Épée longue" );
                TEST.ASSERT.equal( _reloaded_sword ? _reloaded_sword.quantity : null, 2, "La quantité devrait survivre a la relecture, obtenu : " + ( _reloaded_sword ? _reloaded_sword.quantity : "null" ) );
                TEST.ASSERT.equal( _reloaded_sword ? _reloaded_sword.getCharacteristicValue( "Dégâts" ) : null, "2d6+", "La surcharge de caractéristique devrait survivre a la relecture, obtenu : [" + ( _reloaded_sword ? _reloaded_sword.getCharacteristicValue( "Dégâts" ) : "null" ) + "]" );
                // Un input VIDÉ retombe sur la valeur scrapée, la quantité
                // revenue remet l'encombrement du test suivant
                TEST_stuffsOpenEditPopup( "weapon", "Épée longue" );
                return TEST.wait().then( function () {
                    let _edit_popup_back = document.querySelector( "body > .popup .stuffs-edit-popup" );
                    let _damage_back     = _edit_popup_back ? _edit_popup_back.querySelector( ".stuffs-edit-popup-char-row[data-field=" + JSON.stringify( "Dégâts" ) + "] input" ) : null;
                    let _quantity_back   = _edit_popup_back ? _edit_popup_back.querySelector( ".stuffs-edit-popup-quantity-input" ) : null;
                    if ( _damage_back ) {
                        _damage_back.value = "";
                    }
                    if ( _quantity_back ) {
                        _quantity_back.value = "1";
                    }
                    TEST_stuffsValidateEditPopup();
                    return TEST.wait();
                } ).then( function () {
                    let _sword_back = _character.getStuffs().getContentByUUID( "weapon__Épée longue" );
                    TEST.ASSERT.equal( _sword_back ? _sword_back.getCharacteristicValue( "Dégâts" ) : null, STUFFS.getFieldValue( "Épée longue", "Dégâts" ), "Une caractéristique vidée devrait retomber sur la valeur scrapée, obtenu : [" + ( _sword_back ? _sword_back.getCharacteristicValue( "Dégâts" ) : "null" ) + "]" );
                    TEST.ASSERT.equal( _sword_back ? _sword_back.quantity : null, 1, "La quantité revenue devrait vivre dans le domaine, obtenu : " + ( _sword_back ? _sword_back.quantity : "null" ) );
                    // Le Valider sur un objet déjà possédé ne fait rien
                    // (pas un consommable) : la popup se rouvre VIERGE, le
                    // type se repose
                    TEST_stuffsOpenAddPopup();
        return TEST.wait().then( function () {
            let _fresh_type_label = document.querySelector( "body > .popup .stuffs-add-popup .stuffs-add-popup-type .single-select-selector-label" );
            TEST.ASSERT.equal( _fresh_type_label ? _fresh_type_label.textContent : null, "--", "La popup réouverte devrait démarrer vierge (--), obtenu : [" + ( _fresh_type_label ? _fresh_type_label.textContent : "null" ) + "]" );
            TEST_stuffsPickType( "weapon" );
            return TEST.wait().then( function () {
                TEST_stuffsPickModel( "Épée longue" );
                return TEST.wait().then( function () {
                    TEST_stuffsValidateAddPopup();
                    return TEST.wait().then( function () {
                        TEST.ASSERT.equal( _character.getStuffs().getStuffsByLocation( "equipped" ).length, 1, "Le Valider sur une épée déjà possédée ne devrait rien ajouter" );
                        // Un nom inconnu au filtre DEVIENT le modèle
                        // (demande utilisateur : une entrée vit hors
                        // du dataset scrapé) : l'entrée n'a ni info
                        // inline, ni "?", ni encombrement
                        TEST_stuffsOpenAddPopup();
                        return TEST.wait().then( function () {
                            TEST_stuffsPickType( "weapon" );
                            return TEST.wait().then( function () {
                                TEST_stuffsFilterEnter( "Zebulon le magnifique" );
                                return TEST.wait().then( function () {
                                    let _model_label_after = document.querySelector( "body > .popup .stuffs-add-popup .stuffs-add-popup-model .single-select-selector-label" );
                                    TEST.ASSERT.equal( _model_label_after.textContent, "Zebulon le magnifique", "L'Entrée sur nom inconnu devrait poser le TEXTE BRUT en modèle, obtenu : [" + _model_label_after.textContent + "]" );
                                    TEST_stuffsValidateAddPopup();
                                    return TEST.wait();
                                } );
                            } );
                        } ).then( function () {
                            let _free_entry_dom = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-section[data-location='backpack'] .stuffs-entry[data-value='Zebulon le magnifique']" );
                            TEST.ASSERT.notNull( _free_entry_dom, "L'entrée au nom libre devrait vivre dans la section Sac à dos, fenêtre : " + TEST_stuffsDiagnosis() );
                            if ( _free_entry_dom ) {
                                TEST.ASSERT.isNull( _free_entry_dom.querySelector( ".stuffs-entry-chars" ), "Une entrée hors dataset ne porte pas de caractéristiques" );
                                TEST.ASSERT.isNull( _free_entry_dom.querySelector( ".stuffs-entry-info" ), "Une entrée hors dataset ne porte pas de ?" );
                                TEST.ASSERT.equal( _free_entry_dom.querySelector( ".stuffs-entry-bulk" ).textContent, "—", "Une entrée hors dataset porte l'encombrement —, obtenu : [" + _free_entry_dom.querySelector( ".stuffs-entry-bulk" ).textContent + "]" );
                            }
                            TEST.ASSERT.equal( _character.getStuffs().getSize(), 2, "Le nom libre devrait créer SA deuxième entrée, obtenu : " + _character.getStuffs().getSize() );
                            // Valider sans rien : la popup reste ouverte
                            // et rien ne se crée
                            TEST_stuffsOpenAddPopup();
                            return TEST.wait().then( function () {
                                TEST_stuffsValidateAddPopup();
                                TEST.ASSERT.notNull( document.querySelector( "body > .popup .stuffs-add-popup" ), "Valider sans type ni modèle ne devrait pas fermer la popup" );
                                TEST.ASSERT.equal( _character.getStuffs().getSize(), 2, "Valider sans type ni modèle ne devrait rien créer, obtenu : " + _character.getStuffs().getSize() );
                                TEST_stuffsQuitAddPopup();
                                TEST.ASSERT.isNull( document.querySelector( "body > .popup .stuffs-add-popup" ), "La popup devrait etre refermée sur Quitter" );
                            } );
                        } );
                    } );
                } );
            } );
        } );
        } );
        } );
    } );
} );

TEST.RUNNER.register( "[STUFFS] armure entreposée = édition lieu/emplacement + fermeture popup apostrophe", function () {
    let _pane = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "']" );
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Équipement ouvert" );
    if ( !_pane ) {
        return;
    }
    let _comment     = "Armure de la garde, transmission familiale";
    let _place       = "Coffre du manoir de Katapesh";
    let _place_edited = "Sous-sol de l'ordre du Chêne";
    TEST_stuffsOpenAddPopup();
    // Le type change dans la popup : le sélecteur de modèle suit, puis
    // l'emplacement Entreposé révèle la ligne lieu — l'épée équipée ne
    // compte pas dans le test du total porté
    return TEST.wait().then( function () {
        let _popup = document.querySelector( "body > .popup .stuffs-add-popup" );
        TEST.ASSERT.notNull( _popup, "Pre-condition : popup d'ajout ouverte" );
        if ( !_popup ) {
            return;
        }
        TEST_stuffsPickType( "armor" );
        return TEST.wait().then( function () {
            TEST_stuffsFilterEnter( "armure d'écailles" );
            return TEST.wait();
        } ).then( function () {
            TEST_stuffsPickLocation( "stored" );
            return TEST.wait().then( function () {
                let _popup_body     = document.querySelector( "body > .popup .stuffs-add-popup .stuffs-form-popup-body" );
                let _location_label = _popup_body.querySelector( ".stuffs-form-popup-location .single-select-selector-label" );
                TEST.ASSERT.equal( _location_label.textContent, STUFF.getLocationData( "stored" ).label, "L'emplacement choisi devrait s'afficher, obtenu : [" + _location_label.textContent + "]" );
                TEST.ASSERT.equal( _popup_body.getAttribute( "data-stored" ), "true", "La ligne lieu devrait etre révélée sur entreposage, obtenu : [" + _popup_body.getAttribute( "data-stored" ) + "]" );
                document.querySelector( "body > .popup .stuffs-add-popup .stuffs-form-popup-place-input" ).value = _place;
                _popup_body.querySelector( ".stuffs-form-popup-comment-input" ).value = _comment;
                TEST_stuffsValidateAddPopup();
                return TEST.wait();
            } );
        } );
    } ).then( function () {
        let _character = CONTROLLER.Character.current_character;
        // Les noms d'objets portent des apostrophes : le sélecteur par
        // valeur embarque des guillemets doubles (JSON.stringify)
        let _entry_dom = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-section[data-location='stored'] .stuffs-entry[data-value=" + JSON.stringify( "Armure d'écailles" ) + "]" );
        TEST.ASSERT.notNull( _entry_dom, "L'armure devrait etre rendue dans la section Entreposé, fenêtre : " + TEST_stuffsDiagnosis() );
        if ( !_entry_dom ) {
            return;
        }
        let _armor_object = _character.getStuffs().getContentByUUID( "armor__Armure d'écailles" );
        TEST.ASSERT.notNull( _armor_object, "L'armure devrait vivre dans le conteneur (armor__Armure d'écailles)" );
        let _armor_chars = _entry_dom.querySelector( ".stuffs-entry-chars" );
TEST.ASSERT.notNull( _armor_chars, "L'entrée d'armure devrait porter sa colonne de caractéristiques" );
TEST.ASSERT.ok( _armor_chars && _armor_chars.textContent.indexOf( "CA bonus" ) !== -1 && _armor_chars.textContent.indexOf( STUFFS.getFieldValue( "Armure d'écailles", "CA bonus" ) ) !== -1, "L'entrée d'armure devrait porter son CA bonus libellé, obtenu : [" + ( _armor_chars ? _armor_chars.textContent : "null" ) + "]" );
        TEST.ASSERT.equal( _armor_object.location, "stored", "L'armure devrait etre entreposée dans le domaine, obtenu : [" + _armor_object.location + "]" );
        TEST.ASSERT.equal( _armor_object.place, _place, "Le lieu choisi dans la popup devrait vivre dans le domaine, obtenu : [" + _armor_object.place + "]" );
        TEST.ASSERT.equal( _armor_object.comment, _comment, "Le commentaire devrait vivre dans le domaine, obtenu : [" + _armor_object.comment + "]" );
        // L'entreposé ne pèse pas sur le total PORTÉ de la barre : seule
        // l'épée (équipée au test précédent) y compte ; la section
        let _bulk_total = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-bulk-total" );
        TEST.ASSERT.equal( _bulk_total.textContent, TEST_stuffsBulkText( Math.round( STUFFS.parseBulk( "Épée longue" ) * 10 ) / 10 ), "L'encombrement porté devrait compter l'épée seule (l'armure entreposée ne pèse pas), obtenu : [" + _bulk_total.textContent + "]" );
        // La FERMETURE de la popup d'information d'un objet APOSTROPHE :
        // le « x » et le clic sur le fond referment (regression —
        // l'uuid embarquait en inline, la quote du nom cassait le
        // handler)
        let _info = _entry_dom.querySelector( ".stuffs-entry-info" );
        TEST.ASSERT.notNull( _info, "L'entrée d'armure devrait porter son ?" );
        if ( !_info ) {
            return;
        }
        _info.click();
        let _overlay = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
        TEST.ASSERT.notNull( _overlay, "La popup objet devrait etre ouverte (overlay RUNNING)" );
        TEST.ASSERT.equal( _overlay.getAttribute( "data-popup-uuid" ), "stuff__Armure d'écailles", "L'overlay devrait porter son uuid en data-attribute, obtenu : [" + _overlay.getAttribute( "data-popup-uuid" ) + "]" );
        let _close_button = document.querySelector( ".popup-overlay[data-current-phase='RUNNING'] .popup-container [data-name='event__popup__close']" );
        TEST.ASSERT.notNull( _close_button, "La popup devrait porter son bouton x" );
        if ( _close_button ) {
            _close_button.click();
        }
        return TEST.wait().then( function () {
            TEST.ASSERT.equal( _overlay.getAttribute( "data-current-phase" ), "HIDDEN_TO_STRING", "Le clic sur le x devrait refermer la popup apostrophe, obtenu : [" + _overlay.getAttribute( "data-current-phase" ) + "]" );
            // Réouverture puis fermeture par le clic sur le FOND de
            // l'overlay (la cible du clic JS est l'overlay lui-meme)
            _info.click();
            let _overlay_again = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
            TEST.ASSERT.notNull( _overlay_again, "La popup objet réouverte devrait etre ouverte" );
            if ( _overlay_again ) {
                _overlay_again.click();
                TEST.ASSERT.equal( _overlay_again.getAttribute( "data-current-phase" ), "HIDDEN_TO_STRING", "Le clic sur le fond de l'overlay devrait refermer la popup apostrophe, obtenu : [" + _overlay_again.getAttribute( "data-current-phase" ) + "]" );
            }
            // L'édition modifie le lieu sur place (le titre suit) : le
            // lieu et le commentaire partent de l'état du domaine
            TEST_stuffsOpenEditPopup( "armor", "Armure d'écailles" );
            return TEST.wait().then( function () {
                let _edit_popup = document.querySelector( "body > .popup .stuffs-edit-popup" );
                TEST.ASSERT.notNull( _edit_popup, "La popup d'édition devrait s'ouvrir sur la roue crantée" );
                if ( !_edit_popup ) {
                    return;
                }
                TEST.ASSERT.equal( _edit_popup.querySelector( ".stuffs-edit-popup-name" ).textContent, "Armure d'écailles", "L'édition devrait afficher le nom de l'objet, obtenu : [" + _edit_popup.querySelector( ".stuffs-edit-popup-name" ).textContent + "]" );
                let _place_input = _edit_popup.querySelector( ".stuffs-form-popup-place-input" );
                TEST.ASSERT.ok( _place_input && _place_input.offsetParent, "La ligne lieu devrait s'afficher sur l'édition d'un objet entreposé" );
                TEST.ASSERT.equal( _place_input ? _place_input.value : null, _place, "Le lieu de l'édition devrait partir de l'état du domaine, obtenu : [" + ( _place_input ? _place_input.value : "null" ) + "]" );
                _place_input.value = _place_edited;
                TEST_stuffsValidateEditPopup();
                return TEST.wait();
            } );
        } );
    } ).then( function () {
        let _character = CONTROLLER.Character.current_character;
        let _armor_object = _character.getStuffs().getContentByUUID( "armor__Armure d'écailles" );
        TEST.ASSERT.equal( _armor_object ? _armor_object.place : null, _place_edited, "Le lieu modifié devrait vivre dans le domaine, obtenu : [" + ( _armor_object ? _armor_object.place : "null" ) + "]" );
        let _entry_stored = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-section[data-location='stored'] .stuffs-entry[data-value=" + JSON.stringify( "Armure d'écailles" ) + "]" );
        TEST.ASSERT.notNull( _entry_stored, "L'armure devrait rester dans la section Entreposé apres l'édition du lieu" );
        TEST.ASSERT.ok( _entry_stored && _entry_stored.getAttribute( "title" ).indexOf( _place_edited ) !== -1, "Le titre de l'entrée devrait porter le lieu édité, obtenu : [" + ( _entry_stored ? _entry_stored.getAttribute( "title" ) : "null" ) + "]" );
        let _comment_cell = _entry_stored ? _entry_stored.querySelector( ".stuffs-entry-comment" ) : null;
        TEST.ASSERT.equal( _comment_cell ? _comment_cell.textContent : null, _comment, "La colonne Commentaire devrait porter le commentaire de l'entrée, obtenu : [" + ( _comment_cell ? _comment_cell.textContent : "null" ) + "]" );
        // L'édition la ramène au Sac à dos : le total porté la compte,
        // le lieu vit toujours dans le domaine (il ne s'affiche que sur
        // entreposage) et se révèle au retour
        TEST_stuffsOpenEditPopup( "armor", "Armure d'écailles" );
        return TEST.wait().then( function () {
            TEST_stuffsEditPickLocation( "backpack" );
            return TEST.wait().then( function () {
                TEST_stuffsValidateEditPopup();
                return TEST.wait();
            } );
        } ).then( function () {
            let _entry_backpack = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-section[data-location='backpack'] .stuffs-entry[data-value=" + JSON.stringify( "Armure d'écailles" ) + "]" );
            TEST.ASSERT.notNull( _entry_backpack, "L'armure devrait vivre dans la section Sac à dos apres l'édition, fenêtre : " + TEST_stuffsDiagnosis() );
            let _bulk_with_armor = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-bulk-total" );
            let _expected        = Math.round( ( STUFFS.parseBulk( "Épée longue" ) + STUFFS.parseBulk( "Armure d'écailles" ) ) * 10 ) / 10;
            TEST.ASSERT.equal( _bulk_with_armor.textContent, TEST_stuffsBulkText( _expected ), "L'encombrement porté devrait compter l'armure revenue au sac, obtenu : [" + _bulk_with_armor.textContent + "]" );
            TEST.ASSERT.equal( _character.getStuffs().getContentByUUID( "armor__Armure d'écailles" ).place, _place_edited, "Le lieu devrait survivre dans le domaine hors entreposage" );
            TEST_stuffsOpenEditPopup( "armor", "Armure d'écailles" );
            return TEST.wait().then( function () {
                let _edit_popup_back = document.querySelector( "body > .popup .stuffs-edit-popup" );
                let _place_input_back = _edit_popup_back ? _edit_popup_back.querySelector( ".stuffs-form-popup-place-input" ) : null;
                TEST.ASSERT.notOk( _place_input_back && _place_input_back.offsetParent, "La ligne lieu ne devrait pas s'afficher sur l'édition d'un objet non entreposé" );
                TEST_stuffsEditPickLocation( "stored" );
                return TEST.wait().then( function () {
                    TEST.ASSERT.ok( _place_input_back && _place_input_back.offsetParent, "La ligne lieu devrait se révéler au retour sur Entreposé" );
                    TEST.ASSERT.equal( _place_input_back ? _place_input_back.value : null, _place_edited, "Le lieu devrait survivre a l'aller-retour dans l'édition, obtenu : [" + ( _place_input_back ? _place_input_back.value : "null" ) + "]" );
                    TEST_stuffsValidateEditPopup();
                    return TEST.wait();
                } );
            } );
        } );
    } );
} );

TEST.RUNNER.register( "[STUFFS] consommable = empilement + save → load + vieux worn + retrait édité", function () {
    // Le consommable se pique du dataset : le trait décide, jamais le nom,
    // et il vit dans la zone autres objets (ni Dégâts ni CA bonus)
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
    let _pane = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "']" );
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Équipement ouvert" );
    if ( !_pane ) {
        return;
    }
    TEST_stuffsOpenAddPopup();
    return TEST.wait().then( function () {
        // La popup démarre vierge : le type et l'emplacement se posent
        // au geste
        let _popup           = document.querySelector( "body > .popup .stuffs-add-popup" );
        let _location_label  = _popup ? _popup.querySelector( ".stuffs-form-popup-location .single-select-selector-label" ) : null;
        TEST.ASSERT.equal( _location_label ? _location_label.textContent : null, "--", "La popup réouverte devrait démarrer vierge (--), obtenu : [" + ( _location_label ? _location_label.textContent : "null" ) + "]" );
        TEST_stuffsPickType( "other" );
        return TEST.wait().then( function () {
            TEST_stuffsPickLocation( "backpack" );
            return TEST.wait().then( function () {
                let _option = document.querySelector( "body > .popup .stuffs-add-popup .stuffs-add-popup-model .single-select-option[data-value=" + JSON.stringify( _consumable_name ) + "]" );
                TEST.ASSERT.notNull( _option, "Le modèle d'autres objets devrait proposer " + _consumable_name );
                if ( !_option ) {
                    return;
                }
                _option.click();
                return TEST.wait().then( function () {
                    TEST_stuffsValidateAddPopup();
                    return TEST.wait();
                } );
            } );
        } );
    } ).then( function () {
        let _character     = CONTROLLER.Character.current_character;
        let _stuffs        = _character.getStuffs();
        let _stuff_before  = _stuffs.getContentByUUID( "other__" + _consumable_name );
        TEST.ASSERT.notNull( _stuff_before, "Le consommable devrait vivre dans le conteneur" );
        if ( !_stuff_before ) {
            return;
        }
        TEST.ASSERT.equal( _stuff_before.location, "backpack", "Le consommable devrait vivre au Sac à dos, obtenu : [" + _stuff_before.location + "]" );
        TEST.ASSERT.ok( _stuff_before.isConsumable(), "Le trait Consommable devrait porter la quantité" );
        TEST.ASSERT.equal( _stuff_before.quantity, 1, "Le premier Valider pose la quantité 1, obtenu : " + _stuff_before.quantity );
        // Le Valider empile les consommables déjà possédés : le choix
        // repasse par la popup (l'emplacement reste vide → Sac à dos)
        TEST_stuffsOpenAddPopup();
        return TEST.wait().then( function () {
            return TEST.wait();
        } ).then( function () {
            TEST_stuffsPickType( "other" );
            return TEST.wait().then( function () {
                let _option_again = document.querySelector( "body > .popup .stuffs-add-popup .stuffs-add-popup-model .single-select-option[data-value=" + JSON.stringify( _consumable_name ) + "]" );
                TEST.ASSERT.notNull( _option_again, "L'option du consommable devrait etre rendue a la réouverture de la popup" );
                if ( !_option_again ) {
                    return;
                }
                _option_again.click();
                return TEST.wait().then( function () {
                    TEST_stuffsValidateAddPopup();
                    return TEST.wait();
                } );
            } );
        } ).then( function () {
            TEST.ASSERT.equal( _stuffs.getContentByUUID( "other__" + _consumable_name ).quantity, 2, "Le Valider sur un consommable possédé devrait empiler (quantité 2), obtenu : " + _stuffs.getContentByUUID( "other__" + _consumable_name ).quantity );
            TEST.ASSERT.equal( _stuffs.getContentByUUID( "other__" + _consumable_name ).location, "backpack", "L'empilement ne devrait pas déplacer l'entrée, obtenu : [" + _stuffs.getContentByUUID( "other__" + _consumable_name ).location + "]" );
            // La quantité se règle par la POPUP D'ÉDITION (retour
            // utilisateur : plus d'input dans la liste, l'édition vit
            // dans la configuration de la roue crantée) — l'ouverture,
            // le pick et le commit courent de façon synchrone par le bus
            TEST_stuffsOpenEditPopup( "other", _consumable_name );
            let _edit_quantity_input = document.querySelector( "body > .popup .stuffs-edit-popup .stuffs-edit-popup-quantity-input" );
            TEST.ASSERT.notNull( _edit_quantity_input, "L'édition devrait porter son champ quantité" );
            if ( !_edit_quantity_input ) {
                return;
            }
            _edit_quantity_input.value = "5";
            TEST_stuffsValidateEditPopup();
            TEST.ASSERT.equal( _stuffs.getContentByUUID( "other__" + _consumable_name ).quantity, 5, "La quantité modifiée devrait vivre dans le domaine, obtenu : " + _stuffs.getContentByUUID( "other__" + _consumable_name ).quantity );
            let _consumable_line = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-entry[data-value=" + JSON.stringify( _consumable_name ) + "]" );
            TEST.ASSERT.equal( _consumable_line ? _consumable_line.querySelector( ".stuffs-entry-quantity" ).textContent : null, "5", "La ligne devrait AFFICHER la quantité éditée en lecture, obtenu : [" + ( _consumable_line ? _consumable_line.querySelector( ".stuffs-entry-quantity" ).textContent : "null" ) + "]" );
            // Sans caractéristiques (autre type), la roue crantée doit
            // rester sur SA colonne : chaque cellule porte son
            // grid-column explicite — sans lui la grille auto-place la
            // roue dans la colonne Caractéristiques vide (regression du
            // matériel d'entrée)
            let _consumable_gear = _consumable_line ? _consumable_line.querySelector( ".stuffs-entry-edit" ) : null;
            TEST.ASSERT.ok( _consumable_gear && _consumable_gear.classList.contains( "stuffs-col-actions" ), "La roue crantée d'une entrée sans caractéristiques devrait porter sa colonne explicite, obtenu : [" + ( _consumable_gear ? _consumable_gear.className : "pas de roue" ) + "]" );
            // L'encombrement porté suit en place : les consommables
            // comptent a l'unité, l'armure entreposée reste hors compte
            let _bulk_total = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-bulk-total" );
            let _expected   = Math.round( ( STUFFS.parseBulk( "Épée longue" ) + STUFFS.parseBulk( _consumable_name ) * 5 ) * 10 ) / 10;
            TEST.ASSERT.equal( _bulk_total.textContent, TEST_stuffsBulkText( _expected ), "L'encombrement porté devrait suivre la quantité en place (l'armure entreposée ne compte pas), obtenu : [" + _bulk_total.textContent + "]" );
            // Les puces de la barre comptent les entrées par emplacement
            let _filters = document.querySelectorAll( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-add-bar .stuffs-location-filter" );
            TEST.ASSERT.equal( _filters.length ? _filters[ 0 ].textContent : null, "Tous (" + _stuffs.getSize() + ")", "La puce Tous devrait compter toutes les entrées, obtenu : [" + ( _filters.length ? _filters[ 0 ].textContent : "null" ) + "]" );
            let _equipped_filter = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-add-bar .stuffs-location-filter[data-location='equipped']" );
            TEST.ASSERT.equal( _equipped_filter.textContent, STUFF.getLocationData( "equipped" ).label + " (" + _stuffs.getStuffsByLocation( "equipped" ).length + ")", "La puce Équipé devrait compter les entrées équipées, obtenu : [" + _equipped_filter.textContent + "]" );
            // Le filtre isole chaque catégorie : une section, les
            // entrées qui vont avec
            TEST_stuffsClickLocationFilter( "stored" );
            return TEST.wait().then( function () {
                let _filtered_sections = _pane.querySelectorAll( ".stuffs-section" );
                TEST.ASSERT.equal( _filtered_sections.length, 1, "Le filtre Entreposé devrait laisser une seule section, obtenu : " + _filtered_sections.length );
                if ( _filtered_sections.length ) {
                    TEST.ASSERT.equal( _filtered_sections[ 0 ].querySelectorAll( ".stuffs-entry" ).length, _stuffs.getStuffsByLocation( "stored" ).length, "La section filtrée devrait porter les entrées entreposées" );
                }
                TEST_stuffsClickLocationFilter( STUFF.FILTER_ALL );
                return TEST.wait();
            } ).then( function () {
                // Save → load : emplacements, quantités, lieux et
                // commentaires restaurés ; le format ne porte plus la
                // clé worn
                let _saved        = _character.getDataToSave();
                TEST.ASSERT.isArray( _saved.stuffs, "La sauvegarde devrait contenir stuffs" );
                for ( let _e = 0; _e < _saved.stuffs.length; _e++ ) {
                    TEST.ASSERT.notOk( _saved.stuffs[ _e ][ "worn" ] !== undefined, "La sauvegarde ne devrait plus porter la clé worn (l'emplacement la remplace)" );
                }
                let _reloaded     = new CHARACTER.Current();
                _reloaded.updateData( _saved );
                TEST.ASSERT.equal( _reloaded.getStuffs().getSize(), _stuffs.getSize(), "La relecture devrait restaurer tous les objets, obtenu : " + _reloaded.getStuffs().getSize() );
                let _sword_reloaded  = _reloaded.getStuffs().getContentByUUID( "weapon__Épée longue" );
                TEST.ASSERT.equal( _sword_reloaded ? _sword_reloaded.location : null, "equipped", "L'épée équipée devrait survivre a la relecture" );
                let _armor_reloaded  = _reloaded.getStuffs().getContentByUUID( "armor__Armure d'écailles" );
                TEST.ASSERT.equal( _armor_reloaded ? _armor_reloaded.location : null, "stored", "L'armure entreposée devrait survivre a la relecture" );
                TEST.ASSERT.equal( _armor_reloaded ? _armor_reloaded.place : null, "Sous-sol de l'ordre du Chêne", "Le lieu devrait survivre a la relecture, obtenu : [" + ( _armor_reloaded ? _armor_reloaded.place : "null" ) + "]" );
                TEST.ASSERT.equal( _armor_reloaded ? _armor_reloaded.comment : null, "Armure de la garde, transmission familiale", "Le commentaire de l'armure devrait survivre a la relecture" );
                let _consumable_reloaded = _reloaded.getStuffs().getContentByUUID( "other__" + _consumable_name );
                TEST.ASSERT.equal( _consumable_reloaded ? _consumable_reloaded.quantity : null, 5, "La quantité devrait survivre a la relecture, obtenu : " + ( _consumable_reloaded ? _consumable_reloaded.quantity : "null" ) );
                TEST.ASSERT.equal( _consumable_reloaded ? _consumable_reloaded.location : null, "backpack", "Le consommable devrait survivre au Sac à dos a la relecture" );
                // Les vieux save worn se relisent : porté → équipé, le
                // reste → sac à dos (l'emplacement d'avant l'ère des
                // catégories)
                let _legacy        = new CHARACTER.Current();
                _legacy.updateData( { "stuffs": [ { "kind": "weapon", "value": "Épée longue", "quantity": null, "worn": true, "comment": null }, { "kind": "other", "value": _consumable_name, "quantity": 3, "worn": false, "comment": null } ] } );
                let _legacy_sword  = _legacy.getStuffs().getContentByUUID( "weapon__Épée longue" );
                TEST.ASSERT.equal( _legacy_sword ? _legacy_sword.location : null, "equipped", "Un vieux save worn:true devrait se relire équipé, obtenu : [" + ( _legacy_sword ? _legacy_sword.location : "null" ) + "]" );
                let _legacy_consumable = _legacy.getStuffs().getContentByUUID( "other__" + _consumable_name );
                TEST.ASSERT.equal( _legacy_consumable ? _legacy_consumable.location : null, "backpack", "Un vieux save worn:false devrait se relire au Sac à dos, obtenu : [" + ( _legacy_consumable ? _legacy_consumable.location : "null" ) + "]" );
                TEST.ASSERT.equal( _legacy_consumable ? _legacy_consumable.quantity : null, 3, "La quantité du vieux save devrait survivre, obtenu : " + ( _legacy_consumable ? _legacy_consumable.quantity : "null" ) );
                // L'encombrement porté du domaine : épée + consommable x5,
                // l'armure entreposée hors compte
                TEST.ASSERT.equal( _stuffs.getBulkTotal( STUFF.CARRIED_LOCATIONS ), _expected, "Le total porté du domaine devrait croiser l'affichage, obtenu : " + _stuffs.getBulkTotal( STUFF.CARRIED_LOCATIONS ) );
                // Retrait PAR LA POPUP D'ÉDITION (la roue crantée remplace
                // la croix de la liste) : l'entrée et le domaine suivent,
                // le total rend la place du consommable
                TEST_stuffsOpenEditPopup( "other", _consumable_name );
                return TEST.wait().then( function () {
                    let _edit_popup = document.querySelector( "body > .popup .stuffs-edit-popup" );
                    TEST.ASSERT.notNull( _edit_popup, "La popup d'édition du consommable devrait s'ouvrir sur la roue crantée" );
                    TEST_stuffsRemoveEditPopup();
                    return TEST.wait();
                } ).then( function () {
                    TEST.ASSERT.isNull( _stuffs.getContentByUUID( "other__" + _consumable_name ), "Le consommable devrait etre retiré du conteneur" );
                    TEST.ASSERT.isNull( document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-entry[data-value=" + JSON.stringify( _consumable_name ) + "]" ), "Le consommable ne devrait plus etre rendu apres le retrait" );
                    TEST.ASSERT.isNull( document.querySelector( "body > .popup .stuffs-edit-popup" ), "La popup d'édition devrait etre refermée apres le retrait" );
                    let _bulk_after = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-bulk-total" );
                    TEST.ASSERT.equal( _bulk_after.textContent, TEST_stuffsBulkText( Math.round( STUFFS.parseBulk( "Épée longue" ) * 10 ) / 10 ), "L'encombrement porté devrait rendre la place du consommable au retrait, obtenu : [" + _bulk_after.textContent + "]" );
                } );
            } );
        } );
    } );
} );

TEST.RUNNER.register( "[STUFFS] catégories : boucliers avec les armures, potions, parchemin de tous les sorts", function () {
    let _pane = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "']" );
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Équipement ouvert" );
    if ( !_pane ) {
        return;
    }
    let _stuffs   = CONTROLLER.Character.current_character.getStuffs();
    let _start_nb = _stuffs.getSize();
    // Les noms viennent des options classées du dataset (le classifieur
    // décide : la Solidité fait les boucliers, les préfixes font la
    // potion)
    // Les boucliers vivent AVEC les armures (retour utilisateur) : le
    // bouclier se pique des options des armures, celui qui porte
    // Solidité — le champ bouclier rend sur la ligne des armures
    let _armor_options = STUFFS.getKindOptions( "armor" );
    let _shield_name   = null;
    for ( let _i = 0, _size_i = _armor_options.length; _i < _size_i && !_shield_name; _i++ ) {
        if ( STUFFS.getFieldValue( _armor_options[ _i ].name, "Solidité" ) ) {
            _shield_name = _armor_options[ _i ].name;
        }
    }
    TEST.ASSERT.notNull( _shield_name, "Les armures devraient contenir les boucliers (un porteur de Solidité dans leurs options)" );
    if ( !_shield_name ) {
        return;
    }
    let _potion_name = STUFFS.getKindOptions( "potion" )[ 0 ].name;
    TEST_stuffsOpenAddPopup();
    return TEST.wait().then( function () {
        TEST_stuffsPickType( "armor" );
        return TEST.wait();
    } ).then( function () {
        TEST_stuffsPickModel( _shield_name );
        return TEST.wait();
    } ).then( function () {
        TEST_stuffsValidateAddPopup();
        return TEST.wait();
    } ).then( function () {
        // Le bouclier vit dans la catégorie des ARMURES, la ligne porte
        // sa Solidité (le champ bouclier rend sur les lignes d'armures,
        // les armures n'en portent pas)
        let _shield_object = _stuffs.getContentByUUID( "armor__" + _shield_name );
        TEST.ASSERT.notNull( _shield_object, "Le bouclier devrait vivre dans le conteneur (armor__" + _shield_name + ")" );
        TEST.ASSERT.equal( _shield_object ? _shield_object.kind : null, "armor", "Le bouclier devrait porter la catégorie des armures, obtenu : [" + ( _shield_object ? _shield_object.kind : "null" ) + "]" );
        let _shield_entry = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-entry[data-value=" + JSON.stringify( _shield_name ) + "]" );
        TEST.ASSERT.ok( _shield_entry && _shield_entry.textContent.indexOf( "Solidité" ) !== -1 && _shield_entry.textContent.indexOf( STUFFS.getFieldValue( _shield_name, "Solidité" ) ) !== -1, "La ligne du bouclier devrait porter sa Solidité libellée, obtenu : [" + ( _shield_entry ? _shield_entry.textContent : "null" ) + "]" );
        // La potion vit dans SA catégorie, la ligne porte son Niveau (la
        // clé scrapée "level" se lit "Niveau")
        TEST_stuffsOpenAddPopup();
        return TEST.wait();
    } ).then( function () {
        TEST_stuffsPickType( "potion" );
        return TEST.wait();
    } ).then( function () {
        TEST_stuffsPickModel( _potion_name );
        return TEST.wait();
    } ).then( function () {
        TEST_stuffsValidateAddPopup();
        return TEST.wait();
    } ).then( function () {
        let _potion_object = _stuffs.getContentByUUID( "potion__" + _potion_name );
        TEST.ASSERT.notNull( _potion_object, "La potion devrait vivre dans le conteneur (potion__" + _potion_name + ")" );
        let _potion_entry = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-entry[data-value=" + JSON.stringify( _potion_name ) + "]" );
        let _potion_level = _potion_object ? _potion_object.getCharacteristicValue( "Niveau" ) : null;
        TEST.ASSERT.ok( _potion_entry && _potion_entry.textContent.indexOf( "Niveau" ) !== -1 && _potion_level && _potion_entry.textContent.indexOf( _potion_level ) !== -1, "La ligne de la potion devrait porter son Niveau libellé, obtenu : [" + ( _potion_entry ? _potion_entry.textContent : "null" ) + "]" );
        // Le PARCHemin couvre TOUS les sorts (retour utilisateur) : le
        // nom libre du filtre crée le parchemin du sort, la roue crantée
        // lui pose son rang par la caractéristique Niveau
        TEST_stuffsOpenAddPopup();
        return TEST.wait();
    } ).then( function () {
        TEST_stuffsPickType( "scroll" );
        return TEST.wait();
    } ).then( function () {
        TEST_stuffsFilterEnter( "Parchemin de boule de feu" );
        return TEST.wait();
    } ).then( function () {
        let _model_label = document.querySelector( "body > .popup .stuffs-add-popup .stuffs-add-popup-model .single-select-selector-label" );
        TEST.ASSERT.equal( _model_label ? _model_label.textContent : null, "Parchemin de boule de feu", "Un parchemin hors dataset devrait se poser par le TEXTE BRUT du filtre, obtenu : [" + ( _model_label ? _model_label.textContent : "null" ) + "]" );
        TEST_stuffsValidateAddPopup();
        return TEST.wait();
    } ).then( function () {
        let _scroll_object = _stuffs.getContentByUUID( "scroll__Parchemin de boule de feu" );
        TEST.ASSERT.notNull( _scroll_object, "Le parchemin au nom libre devrait vivre dans le conteneur" );
        TEST.ASSERT.equal( _scroll_object ? _scroll_object.kind : null, "scroll", "Le parchemin au nom libre devrait porter SA catégorie, obtenu : [" + ( _scroll_object ? _scroll_object.kind : "null" ) + "]" );
        // La roue crantée lui pose sa caractéristique Niveau (le rang du
        // sort) : l'édition rend la rangée du type Parchemins
        TEST_stuffsOpenEditPopup( "scroll", "Parchemin de boule de feu" );
        return TEST.wait();
    } ).then( function () {
        let _edit_popup = document.querySelector( "body > .popup .stuffs-edit-popup" );
        TEST.ASSERT.notNull( _edit_popup, "La popup d'édition du parchemin devrait s'ouvrir" );
        let _level_input = _edit_popup ? _edit_popup.querySelector( ".stuffs-edit-popup-char-row[data-field=" + JSON.stringify( "Niveau" ) + "] input" ) : null;
        TEST.ASSERT.notNull( _level_input, "L'édition d'un parchemin devrait porter sa rangée Niveau" );
        if ( _level_input ) {
            _level_input.value = "3";
        }
        TEST_stuffsValidateEditPopup();
        return TEST.wait();
    } ).then( function () {
        let _scroll_object = _stuffs.getContentByUUID( "scroll__Parchemin de boule de feu" );
        TEST.ASSERT.equal( _scroll_object ? _scroll_object.getCharacteristicValue( "Niveau" ) : null, "3", "Le parchemin édité devrait porter SA caractéristique Niveau, obtenu : [" + ( _scroll_object ? _scroll_object.getCharacteristicValue( "Niveau" ) : "null" ) + "]" );
        let _scroll_entry = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-entry[data-value='Parchemin de boule de feu']" );
        TEST.ASSERT.ok( _scroll_entry && _scroll_entry.textContent.indexOf( "Niveau" ) !== -1 && _scroll_entry.textContent.indexOf( "3" ) !== -1, "La ligne du parchemin devrait porter son Niveau édité, obtenu : [" + ( _scroll_entry ? _scroll_entry.textContent : "null" ) + "]" );
        TEST.ASSERT.equal( _stuffs.getSize(), _start_nb + 3, "Le test devrait avoir posé ses trois entrées, obtenu : " + ( _stuffs.getSize() - _start_nb ) + " — fenêtre : " + TEST_stuffsDiagnosis() );
    } );
} );

TEST.RUNNER.register( "[STUFFS] encombrement max + warning + erreur via compteur", function () {
    let _pane = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "']" );
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Équipement ouvert" );
    if ( !_pane ) {
        return;
    }
    let _character = CONTROLLER.Character.current_character;
    let _stuffs    = _character.getStuffs();
    let _window    = _character.windows.getActiveWindow();
    TEST.ASSERT.notNull( _window, "Pre-condition : une fenêtre active" );
    if ( !_window ) {
        return;
    }
    TEST.ASSERT.equal( _window.getName(), CHARACTER.StuffsWindow.NAME, "La fenêtre active devrait etre Équipement, obtenu : " + _window.getName() );
    // L'objet le plus LÉGER du dataset (bulk > 0) sert à pousser le poids
    // par la quantité : on traverse le warning (over) avant l'erreur
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
    let _bulk_max   = _stuffs.getBulkMax( _character );
    // État courant : le texte du div porte « porté / max », la data porte l'état
    let _bulk_total = _stuffs.getBulkTotal( STUFF.CARRIED_LOCATIONS );
    let _bulk_div   = _pane.querySelector( ".stuffs-bulk-total" );
    TEST.ASSERT.equal( _bulk_div ? _bulk_div.textContent : null, TEST_stuffsBulkText( _bulk_total ), "La barre devrait lire « porté / max », obtenu : [" + ( _bulk_div ? _bulk_div.textContent : "null" ) + "]" );
    // Le compteur du domaine se répercute sur la fenêtre (contrat compteur)
    TEST.ASSERT.equal( _window.getCounter( "bulk" ) ? _window.getCounter( "bulk" ).getValue() : null, _bulk_total, "Le compteur bulk de la fenêtre devrait suivre le total porté, obtenu : " + ( _window.getCounter( "bulk" ) ? _window.getCounter( "bulk" ).getValue() : "null" ) );
    TEST.ASSERT.equal( _window.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ).getValue(), _bulk_total > _bulk_max ? 1 : 0, "Le compteur warnings de la fenêtre devrait refléter l'état courant, obtenu : " + _window.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ).getValue() );
    // On pousse le poids au-delà du max par la quantité (geste bus réel)
    CONTROLLER.Character.doActionAfter( "event__stuff__add", { "param__stuff__kind": _heavy_kind, "param__stuff__value": _heavy.name, "param__stuff__location": "backpack" } );
    let _quantity = 1;
    while ( _stuffs.getBulkTotal( STUFF.CARRIED_LOCATIONS ) <= _bulk_max && _quantity < 1000 ) {
        _quantity++;
        CONTROLLER.Character.doActionAfter( "event__stuff__edit_quantity", { "param__stuff__kind": _heavy_kind, "param__stuff__value": _heavy.name, "param__stuff__quantity": _quantity } );
    }
    _bulk_total = _stuffs.getBulkTotal( STUFF.CARRIED_LOCATIONS );
    TEST.ASSERT.ok( _bulk_total > _bulk_max, "Le poids porté devrait dépasser le max (" + _bulk_max + "), obtenu : " + _bulk_total );
    _bulk_div   = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-bulk-total" );
    TEST.ASSERT.equal( _bulk_div ? _bulk_div.getAttribute( "data-bulk-state" ) : null, "over", "L'état devrait passer en warning (over), obtenu : [" + ( _bulk_div ? _bulk_div.getAttribute( "data-bulk-state" ) : "null" ) + "]" );
    TEST.ASSERT.equal( _bulk_div ? _bulk_div.textContent : null, TEST_stuffsBulkText( _bulk_total ), "La barre devrait suivre le dépassement, obtenu : [" + ( _bulk_div ? _bulk_div.textContent : "null" ) + "]" );
    TEST.ASSERT.equal( _window.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ).getValue(), 1, "Le compteur warnings de la fenêtre devrait valoir 1, obtenu : " + _window.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ).getValue() );
    TEST.ASSERT.equal( window.getComputedStyle( _bulk_div ).color, "rgb(255, 186, 11)", "La barre devrait virer au warning (--c-bulk-warning), obtenu : " + window.getComputedStyle( _bulk_div ).color );
    // Au-delà du double du max : erreur
    while ( _stuffs.getBulkTotal( STUFF.CARRIED_LOCATIONS ) <= 2 * _bulk_max && _quantity < 1000 ) {
        _quantity++;
        CONTROLLER.Character.doActionAfter( "event__stuff__edit_quantity", { "param__stuff__kind": _heavy_kind, "param__stuff__value": _heavy.name, "param__stuff__quantity": _quantity } );
    }
    _bulk_total = _stuffs.getBulkTotal( STUFF.CARRIED_LOCATIONS );
    TEST.ASSERT.ok( _bulk_total > 2 * _bulk_max, "Le poids porté devrait dépasser le double du max (" + ( 2 * _bulk_max ) + "), obtenu : " + _bulk_total );
    _bulk_div   = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-bulk-total" );
    TEST.ASSERT.equal( _bulk_div ? _bulk_div.getAttribute( "data-bulk-state" ) : null, "critical", "L'état devrait passer en erreur (critical), obtenu : [" + ( _bulk_div ? _bulk_div.getAttribute( "data-bulk-state" ) : "null" ) + "]" );
    TEST.ASSERT.equal( _window.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS ).getValue(), 1, "Le compteur errors de la fenêtre devrait valoir 1, obtenu : " + _window.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS ).getValue() );
    TEST.ASSERT.equal( window.getComputedStyle( _bulk_div ).color, "rgb(236, 87, 87)", "La barre devrait virer à l'erreur (--c-bulk-error), obtenu : " + window.getComputedStyle( _bulk_div ).color );
    // Retour sous le max : les compteurs retombent à 0
    CONTROLLER.Character.doActionAfter( "event__stuff__remove", { "param__stuff__kind": _heavy_kind, "param__stuff__value": _heavy.name } );
    _bulk_total = _stuffs.getBulkTotal( STUFF.CARRIED_LOCATIONS );
    _bulk_div   = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.StuffsWindow.NAME + "'] .stuffs-bulk-total" );
    TEST.ASSERT.equal( _bulk_div ? _bulk_div.getAttribute( "data-bulk-state" ) : null, _bulk_total > _bulk_max ? ( _bulk_total > 2 * _bulk_max ? "critical" : "over" ) : "ok", "L'état devrait suivre le retrait, obtenu : [" + ( _bulk_div ? _bulk_div.getAttribute( "data-bulk-state" ) : "null" ) + "]" );
    TEST.ASSERT.equal( _window.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ).getValue(), 0, "Le compteur warnings devrait retomber à 0, obtenu : " + _window.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ).getValue() );
    TEST.ASSERT.equal( _window.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS ).getValue(), 0, "Le compteur errors devrait retomber à 0, obtenu : " + _window.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS ).getValue() );
} );
