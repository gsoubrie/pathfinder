"use strict";
/**
 * Scenario : HERITAGES POLIVALENTS
 * Pre-condition : fin du scenario ASCENDANCE (Elfe posee, heritage Aucun).
 * 1) Ouverture de la popup heritage (le meme onclick que le champ) : la
 *    section polyvalente apres celle de l'ascendance, separee par son
 *    titre, les 7 polyvalents en onglets.
 * 2) Selection Dhampir : onglet actif + panneau de description.
 * 3) Validation : heritage posee, champ affiche, save plat race.legacy,
 *    relecture memoire.
 * 4) Changement d'ascendance vers Humain : Aiuvarin et Dromaar (embarques
 *    par le scrap d'Humain) n'apparaissent qu'une fois chacun.
 * 5) Choix de Sang-dragon sur Humain, activation de l'onglet Progression :
 *    le pool du Don d'ascendance s'elargit aux dons Sang-dragon du palier,
 *    dons de lignée compris (trait Lignée, palier 1 seul).
 * 6) Le geste reel du choix d'un don sang-dragon : ligne SELECTED, compteur
 *    converge, save (race.legacy + level_skill.ancestry_feat).
 * 7) La langue ajoutee par l'heritage (Draconique) vit dans les options
 *    des langues supplementaires, le geste reel la choisit et la valide.
 */

function TEST_openLegacyPopup() {
    // le onclick reel du champ heritage (cf _component_interface.js)
    MANAGER.EventManagerV2.doActionAfter(
        { target: document.querySelector( ".grid-area.area-legacy input" ), button: 0, stopPropagation: function () {} },
        "event__property_popup__open",
        { "property_name": "legacy" }
    );
}

TEST.RUNNER.register( "[HÉRITAGES POLYVALENTS] popup = section polyvalente après l'ascendance", function () {
    let _character                      = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    TEST.ASSERT.ok( _character.getRace().isSet(), "Pre-condition : ascendance posee (fin du scenario ASCENDANCE)" );
    if ( !_character.getRace().isSet() ) {
        return;
    }
    TEST_openLegacyPopup();
    let _popup                          = document.querySelector( "body > .popup" );
    TEST.ASSERT.notNull( _popup, "La popup d'edition de l'heritage devrait etre ouverte" );
    if ( !_popup ) {
        return;
    }
    let _group                         = _popup.querySelector( ".gs-window-group-V2" );
    TEST.ASSERT.notNull( _group, "La popup devrait contenir son groupe d'onglets" );
    if ( !_group ) {
        return;
    }
    let _expected_ancestry              = _character.getRace().available_legacies.getSize();
    let _expected_total                 = 1 + _expected_ancestry + LEGACIES.VERSATILE.length;
    let _tabs                           = _group.querySelectorAll( ".gs-window-element-V2" );
    TEST.ASSERT.equal( _tabs.length, _expected_total, "Le nombre d'onglets attendu vaut Aucun + héritages d'ascendance (" + _expected_ancestry + ") + polyvalents (" + LEGACIES.VERSATILE.length + "), obtenu : " + _tabs.length );
    for ( let i = 0, _size_i = LEGACIES.VERSATILE.length; i < _size_i; i++ ) {
        let _versatile_tab              = _group.querySelector( ".gs-window-element-V2[data-name='" + LEGACIES.VERSATILE[ i ] + "']" );
        TEST.ASSERT.notNull( _versatile_tab, "L'onglet du polyvalent " + LEGACIES.VERSATILE[ i ] + " devrait etre rendu, dataset:" + LEGACIES.VERSATILE.join( ", " ) );
    }
    let _separator                      = _group.querySelector( ".legacy-versatile-separator" );
    TEST.ASSERT.notNull( _separator, "Le separateur de section devrait etre rendu entre les deux familles" );
    if ( !_separator ) {
        return;
    }
    TEST.ASSERT.equal( _separator.textContent, LEGACIES.VERSATILE_LABEL, "Le separateur devrait porter le libelle de section, obtenu : " + _separator.textContent );
    let _children                       = _group.children;
    let _separator_index                = Array.prototype.indexOf.call( _children, _separator );
    let _first_versatile                = _group.querySelector( ".gs-window-element-V2[data-name='" + LEGACIES.VERSATILE[ 0 ] + "']" );
    let _last_ancestry_tab              = _children[ _separator_index - 1 ];
    TEST.ASSERT.ok( _last_ancestry_tab && _last_ancestry_tab.classList.contains( "gs-window-element-V2" ), "L'onglet juste avant le separateur devrait etre un heritage d'ascendance (cle " + ( _last_ancestry_tab ? _last_ancestry_tab.getAttribute( "data-name" ) : "aucun" ) + ")" );
    TEST.ASSERT.ok( _first_versatile && Array.prototype.indexOf.call( _children, _first_versatile ) === _separator_index + 1, "Le premier polyvalent (" + LEGACIES.VERSATILE[ 0 ] + ") devrait suivre le separateur immediatement" );
    // le separateur vit sur SA ligne entiere : les onglets se replient
    let _group_style                    = getComputedStyle( _group );
    TEST.ASSERT.equal( _group_style.flexWrap, "wrap", "Le groupe d'onglets de la popup d'heritage devrait replier ses onglets (flex-wrap), obtenu : " + _group_style.flexWrap );
    // la largeur du groupe inclut sa barre de defilement vertical : le
    // bon critere est le bord gauche aligne sur les onglets et la fraction
    // de largeur occupee
    let _separator_rect                 = _separator.getBoundingClientRect();
    let _group_rect                     = _group.getBoundingClientRect();
    let _first_tab_rect                 = _tabs[ 0 ].getBoundingClientRect();
    TEST.ASSERT.ok( Math.abs( _separator_rect.left - _first_tab_rect.left ) <= 1, "Le separateur devrait demarrer dans la colonne des onglets (gauche alignee), obtenu : " + ( _separator_rect.left - _first_tab_rect.left ) + "px d'ecart" );
    TEST.ASSERT.ok( _separator_rect.width / _group_rect.width > 0.9, "Le separateur devrait occuper presque toute la largeur du groupe (sa propre ligne), obtenu : " + _separator_rect.width + "px sur " + _group_rect.width + "px" );
    // les boutons restent visibles en bas : c'est la zone de panneaux qui deroule
    let _targets                        = _popup.querySelector( ".edition-property-popup .gs-window-targets-V2" );
    TEST.ASSERT.notNull( _targets, "La popup devrait contenir la zone de panneaux" );
    if ( _targets ) {
        let _targets_style             = getComputedStyle( _targets );
        TEST.ASSERT.equal( _targets_style.overflowY, "auto", "La zone de panneaux devrait derouler seule (overflow-y), obtenu : " + _targets_style.overflowY );
        TEST.ASSERT.equal( _targets_style.getPropertyValue( "min-height" ), "0px", "La zone de panneaux devrait pouvoir se comprimer sous la taille de son contenu (min-height 0), obtenu : " + _targets_style.getPropertyValue( "min-height" ) );
    }
    let _actions                        = _popup.querySelector( ".edition-property-popup .popup-up-actions" );
    TEST.ASSERT.notNull( _actions, "La rangee Valider/Quitter devrait etre rendue" );
    if ( _actions ) {
        TEST.ASSERT.equal( getComputedStyle( _actions ).flexShrink, "0", "La rangee Valider/Quitter ne devrait jamais se comprimer ni sortir de la popup (flex-shrink), obtenu : " + getComputedStyle( _actions ).flexShrink );
        let _popup_container            = _popup.querySelector( ".edition-property-popup" );
        TEST.ASSERT.ok( _popup_container.lastElementChild === _actions, "La rangee Valider/Quitter devrait etre LE DERNIER enfant du conteneur, sous les panneaux (obtenu : " + _popup_container.lastElementChild.getAttribute( "class" ) + ")" );
        let _container_style            = getComputedStyle( _popup_container );
        TEST.ASSERT.ok( _container_style.backgroundImage.indexOf( "linear-gradient" ) !== -1, "Le conteneur de popup devrait etre peint au degrade du theme, pas en couleur brute (obtenu : " + _container_style.backgroundImage + ")" );
    }
    let _separator_lines                = getComputedStyle( _separator, ":before" );
    TEST.ASSERT.equal( _separator_lines.getPropertyValue( "height" ), "1px", "Le separateur devrait porter ses filets lateraux (::before, recette des separateurs de la zone jets), obtenu : " + _separator_lines.getPropertyValue( "height" ) );
} );

TEST.RUNNER.register( "[HÉRITAGES POLIVALENTS] sélection Dhampir = panneau de description", function () {
    let _edition_popup                  = CONTROLLER.Character.edition_popup;
    TEST.ASSERT.notNull( _edition_popup && _edition_popup.windows, "Pre-condition : popup d'heritage ouverte" );
    if ( !_edition_popup || !_edition_popup.windows ) {
        return;
    }
    return TEST.clickTab( "body > .popup", "Dhampir" ).then( function () {
        TEST.ASSERT.equal( _edition_popup.windows.getActiveWindow().getName(), "Dhampir", "Fenetre active apres selection" );
        let _running_tabs               = document.querySelectorAll( "body > .popup .gs-window-element-V2[data-current-phase='RUNNING']" );
        TEST.ASSERT.equal( _running_tabs.length, 1, "Un seul onglet RUNNING dans la popup" );
        if ( _running_tabs.length === 1 ) {
            TEST.ASSERT.equal( _running_tabs[ 0 ].getAttribute( "data-name" ), "Dhampir", "L'onglet RUNNING du popup devrait etre Dhampir" );
        }
        let _pane                       = document.querySelector( "body > .popup .gs-tab-pane[data-name='Dhampir']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Dhampir devrait exister" );
        if ( !_pane ) {
            return;
        }
        TEST.ASSERT.notOk( _pane.classList.contains( "gs-hidden" ), "Le panneau Dhampir devrait etre visible apres selection" );
        TEST.ASSERT.notNull( _pane.querySelector( ".race-edition .edition-property.description .value p" ), "La description de Dhampir devrait etre affichee" );
    } );
} );

TEST.RUNNER.register( "[HÉRITAGES POLYVALENTS] validation Dhampir = champ posé + save + relecture", function () {
    // le onclick reel du bouton Valider (cf popup.js)
    CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
    TEST.ASSERT.isNull( document.querySelector( "body > .popup" ), "La popup devrait etre fermee apres validation" );
    TEST.ASSERT.isNull( CONTROLLER.Character.edition_popup, "edition_popup devrait etre reinitialisee" );
    let _character                      = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    TEST.ASSERT.equal( _character.getRace().getLegacy().getValue(), "Dhampir", "L'heritage du personnage devrait valoir Dhampir, obtenu : " + _character.getRace().getLegacy().getValue() );
    let _legacy_input                   = document.querySelector( ".characters-sheet-content .grid-area.area-legacy input" );
    if ( _legacy_input ) {
        TEST.ASSERT.equal( _legacy_input.value, "Dhampir", "Le champ Héritage devrait afficher Dhampir" );
    }
    let _saved                          = _character.getDataToSave();
    TEST.ASSERT.ok( _saved.race && _saved.race.legacy === "Dhampir", "La sauvegarde devrait contenir race.legacy = Dhampir, obtenu : " + ( _saved.race ? _saved.race.legacy : "absent" ) );
    let _reloaded                       = new CHARACTER.Current();
    _reloaded.updateData( _saved );
    TEST.ASSERT.equal( _reloaded.getRace().getLegacy().getValue(), "Dhampir", "La relecture du save devrait restaurer l'heritage Dhampir, obtenu : " + _reloaded.getRace().getLegacy().getValue() );
} );

TEST.RUNNER.register( "[HÉRITAGES POLYVALENTS] Humain = polyvalents sans doublon", function () {
    let _character                      = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    // le onclick reel du champ ascendance
    MANAGER.EventManagerV2.doActionAfter(
        { target: document.querySelector( ".grid-area.area-race input" ), button: 0, stopPropagation: function () {} },
        "event__property_popup__open",
        { "property_name": "race" }
    );
    return TEST.clickTab( "body > .popup", "Humain" ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        TEST.ASSERT.equal( _character.getRace().getValue(), "Humain", "L'ascendance devrait valoir Humain apres validation, obtenu : " + _character.getRace().getValue() );
        TEST_openLegacyPopup();
        let _popup                      = document.querySelector( "body > .popup" );
        TEST.ASSERT.notNull( _popup, "La popup d'edition de l'heritage devrait etre ouverte" );
        if ( !_popup ) {
            return;
        }
        let _group                     = _popup.querySelector( ".gs-window-group-V2" );
        TEST.ASSERT.notNull( _group, "La popup devrait contenir son groupe d'onglets" );
        if ( !_group ) {
            return;
        }
        // le scrap d'Humain embarque Aiuvarin et Dromaar : la section
        // polyvalente les porte deja, la liste d'ascendance doit les laisser partir
        TEST.ASSERT.equal( _group.querySelectorAll( ".gs-window-element-V2[data-name='Aiuvarin']" ).length, 1, "Aiuvarin ne devrait apparaitre qu'une fois, obtenu : " + _group.querySelectorAll( ".gs-window-element-V2[data-name='Aiuvarin']" ).length );
        TEST.ASSERT.equal( _group.querySelectorAll( ".gs-window-element-V2[data-name='Dromaar']" ).length, 1, "Dromaar ne devrait apparaitre qu'une fois, obtenu : " + _group.querySelectorAll( ".gs-window-element-V2[data-name='Dromaar']" ).length );
        let _expected_ancestry          = _character.getRace().available_legacies.getSize();
        let _expected_total             = 1 + _expected_ancestry + LEGACIES.VERSATILE.length;
        let _tabs                       = _group.querySelectorAll( ".gs-window-element-V2" );
        TEST.ASSERT.equal( _tabs.length, _expected_total, "Le nombre d'onglets d'Humain attendu vaut Aucun + heritages d'ascendance (" + _expected_ancestry + ") + polyvalents (" + LEGACIES.VERSATILE.length + "), obtenu : " + _tabs.length );
        // la popup refermee par la voie reelle : aucune suite ne doit heriter d'une popup fourree
        CONTROLLER.Character.doActionAfter( "event__form__reset" );
        TEST.ASSERT.isNull( document.querySelector( "body > .popup" ), "La popup devrait etre refermee sans changement" );
    } );
} );

TEST.RUNNER.register( "[HÉRITAGES POLYVALENTS] Sang-dragon = dons sang-dragon dans le pool du don d'ascendance", function () {
    let _character                      = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    TEST.ASSERT.equal( _character.getRace().getValue(), "Humain", "Pre-condition : fin du test Humain, obtenu : " + _character.getRace().getValue() );
    if ( _character.getRace().getValue() !== "Humain" ) {
        return;
    }
    TEST_openLegacyPopup();
    return TEST.clickTab( "body > .popup", "Sang-dragon" ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        TEST.ASSERT.equal( _character.getRace().getLegacy().getValue(), "Sang-dragon", "L'heritage devrait valoir Sang-dragon apres validation, obtenu : " + _character.getRace().getLegacy().getValue() );
        // l'onglet Progression s'active par le geste reel de navigation
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME );
    } ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _pane                       = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Progression devrait etre rendu" );
        if ( !_pane ) {
            return;
        }
        let _row                        = _pane.querySelector( ".ancestry-up-block[data-ancestry-level-name='1'] .level-up-row[data-slot-key='ancestry_feat']" );
        TEST.ASSERT.notNull( _row, "La ligne Don d'ascendance du palier 1 devrait etre rendue" );
        if ( !_row ) {
            return;
        }
        // comptes calcules du dataset : les dons d'Humain du palier PLUS les
        // dons Sang-dragon (le pool de l'heritage polyvalent), lignée comprise
        let _feats                      = DON.RACE.ENUM[ 0 ];
        let _expected_options           = 0;
        let _first_heritage_only_name   = null;
        let _first_lineage_name         = null;
        for ( let i = 0, _size_i = _feats.length; i < _size_i; i++ ) {
            let _race_carries           = _feats[ i ].traits.indexOf( "Humain" ) !== -1;
            let _heritage_carries       = _feats[ i ].traits.indexOf( "Sang-dragon" ) !== -1;
            if ( ( !_race_carries && !_heritage_carries ) || parseInt( _feats[ i ].level, 10 ) > 1 ) {
                continue;
            }
            _expected_options           = _expected_options + 1;
            if ( !_race_carries && _heritage_carries && !_first_heritage_only_name ) {
                _first_heritage_only_name = _feats[ i ].name;
            }
            if ( _heritage_carries && _feats[ i ].traits.indexOf( DON.LINEAGE_TRAIT ) !== -1 && !_first_lineage_name ) {
                _first_lineage_name     = _feats[ i ].name;
            }
        }
        TEST.ASSERT.ok( _expected_options > 0, "Pre-condition : le dataset devrait porter des dons Humain ou Sang-dragon au palier 1" );
        TEST.ASSERT.equal( _row.querySelectorAll( ".single-select-option" ).length, 1 + _expected_options, "Le selecteur devrait proposer l'option vide + les dons d'ascendance ET les dons Sang-dragon du palier, obtenu : " + _row.querySelectorAll( ".single-select-option" ).length );
        TEST.ASSERT.notNull( _first_heritage_only_name, "Le dataset devrait porter un don propre a Sang-dragon" );
        if ( _first_heritage_only_name ) {
            let _heritage_option        = _row.querySelector( ".single-select-option[data-value='" + _first_heritage_only_name + "']" );
            TEST.ASSERT.notNull( _heritage_option, "Le don propre a Sang-dragon (" + _first_heritage_only_name + ") devrait etre proposé dans le selecteur" );
        }
        TEST.ASSERT.notNull( _first_lineage_name, "Le dataset devrait porter un don de lignée Sang-dragon (trait Lignée) au palier 1" );
        if ( _first_lineage_name ) {
            let _lineage_option         = _row.querySelector( ".single-select-option[data-value='" + _first_lineage_name + "']" );
            TEST.ASSERT.notNull( _lineage_option, "Le don de lignée (" + _first_lineage_name + ") devrait etre proposé dans le don d'ascendance du palier 1" );
        }
    } );
} );

TEST.RUNNER.register( "[HÉRITAGES POLYVALENTS] choix du don sang-dragon = ligne validée + save", function () {
    let _character                      = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    TEST.ASSERT.equal( _character.getRace().getLegacy().getValue(), "Sang-dragon", "Pre-condition : heritage Sang-dragon pose, obtenu : " + _character.getRace().getLegacy().getValue() );
    let _pane                           = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Progression ouvert" );
    if ( !_pane ) {
        return;
    }
    let _row                            = _pane.querySelector( ".ancestry-up-block[data-ancestry-level-name='1'] .level-up-row[data-slot-key='ancestry_feat']" );
    TEST.ASSERT.notNull( _row, "Pre-condition : ligne Don d'ascendance du palier 1 rendue" );
    if ( !_row ) {
        return;
    }
    let _feats                          = DON.RACE.ENUM[ 0 ];
    let _feat_name                      = null;
    for ( let i = 0, _size_i = _feats.length; i < _size_i; i++ ) {
        if ( _feats[ i ].traits.indexOf( "Sang-dragon" ) !== -1 && _feats[ i ].traits.indexOf( "Humain" ) === -1 && parseInt( _feats[ i ].level, 10 ) <= 1 ) {
            _feat_name                  = _feats[ i ].name;
            break;
        }
    }
    TEST.ASSERT.notNull( _feat_name, "Pre-condition : le dataset devrait porter un don propre a Sang-dragon au palier 1" );
    if ( !_feat_name ) {
        return;
    }
    let _option                         = _row.querySelector( ".single-select-option[data-value='" + _feat_name + "']" );
    TEST.ASSERT.notNull( _option, "L'option du don " + _feat_name + " devrait etre rendue" );
    if ( !_option ) {
        return;
    }
    let _badge                          = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
    let _warnings_before               = _badge ? parseInt( _badge.getAttribute( "data-number" ), 10 ) : null;
    // le geste reel : le clic JS d'une option fonctionne meme liste fermee
    _option.click();
    if ( _badge && _warnings_before !== null ) {
        return TEST.waitCounterValue( _badge, _warnings_before - 1 ).then( function () {
            TEST_HeritagePolyvalentAssertFeatChosen( _character, _row, _feat_name );
        } );
    }
    TEST_HeritagePolyvalentAssertFeatChosen( _character, _row, _feat_name );
} );

function TEST_HeritagePolyvalentAssertFeatChosen( character_object, row_dom, feat_name ) {
    TEST.ASSERT.equal( row_dom.dataset.currentPhase, LEVELUP.PHASE.SELECTED, "La ligne Don d'ascendance devrait etre en phase SELECTED apres le choix, obtenu : " + row_dom.dataset.currentPhase );
    let _selected_option                = row_dom.querySelector( ".single-select-option.selected" );
    TEST.ASSERT.ok( _selected_option && _selected_option.getAttribute( "data-value" ) === feat_name, "L'option choisie (" + feat_name + ") devrait porter la classe selected" );
    let _line                           = character_object.getAncestryHistory().getContentByUUID( "1" ).getContentByUUID( "1__ancestry_feat" );
    TEST.ASSERT.equal( _line.getSelectedValue(), feat_name, "La ligne du domaine devrait porter le don choisi, obtenu : " + _line.getSelectedValue() );
    let _saved                          = character_object.getDataToSave();
    TEST.ASSERT.ok( _saved.race && _saved.race.legacy === "Sang-dragon", "La sauvegarde devrait contenir race.legacy = Sang-dragon, obtenu : " + ( _saved.race ? _saved.race.legacy : "absent" ) );
    let _entry_saved                    = _saved.ancestry_history && _saved.ancestry_history[ 0 ];
    TEST.ASSERT.ok( _entry_saved && _entry_saved.level_skill && _entry_saved.level_skill.ancestry_feat === feat_name, "Le save de l'entree d'ascendance du palier 1 devrait porter le don choisi (" + feat_name + "), obtenu : " + JSON.stringify( _entry_saved ? _entry_saved.level_skill : null ) );
}

TEST.RUNNER.register( "[HÉRITAGES POLYVALENTS] langue de l'heritage = proposée puis choisie dans les langues supplémentaires", function () {
    let _character                      = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    TEST.ASSERT.equal( _character.getRace().getLegacy().getValue(), "Sang-dragon", "Pre-condition : heritage Sang-dragon pose, obtenu : " + _character.getRace().getLegacy().getValue() );
    let _pane                           = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Progression ouvert" );
    if ( !_pane ) {
        return;
    }
    // Humain posede une ligne de langue au minimum (bonus de langue de race) :
    // le draconique ajoute par l'heritage doit y etre proposé — options
    // attendues calculees du domaine (pool de l'ascendance + langues de
    // l'heritage, dedup, plus l'option vide)
    let _block                          = _pane.querySelector( ".ancestry-up-block[data-ancestry-level-name='1']" );
    TEST.ASSERT.notNull( _block, "La section d'ascendance du palier 1 devrait etre rendue" );
    if ( !_block ) {
        return;
    }
    let _language_row                   = _block.querySelector( ".level-up-row[data-slot-key^='" + LEVELUP.ADDITIONAL_LANGUAGE_KEY + "']" );
    TEST.ASSERT.notNull( _language_row, "Humain devrait poser au moins une ligne de langue supplementaire (bonus de langue), obtenu : aucune ligne" );
    if ( !_language_row ) {
        return;
    }
    let _expected_languages             = RACES.getAdditionalLanguages( "Humain" );
    let _legacy_languages               = LEGACIES.getAdditionalLanguages( "Sang-dragon" );
    for ( let i = 0, _size_i = _legacy_languages.length; i < _size_i; i++ ) {
        let _already_there              = false;
        for ( let j = 0, _size_j = _expected_languages.length; j < _size_j; j++ ) {
            if ( SERVICE.STRING.containsIgnoreCase( _expected_languages[ j ].name, _legacy_languages[ i ] ) ) {
                _already_there          = true;
                break;
            }
        }
        if ( !_already_there ) {
            _expected_languages.push( { "name": _legacy_languages[ i ] } );
        }
    }
    TEST.ASSERT.equal( _language_row.querySelectorAll( ".single-select-option" ).length, 1 + _expected_languages.length, "Les options de la langue supplementaire devraient valoir l'option vide + le pool d'Humain + le draconique de l'heritage, obtenu : " + _language_row.querySelectorAll( ".single-select-option" ).length );
    let _draconique_option              = _language_row.querySelector( ".single-select-option[data-value='" + _legacy_languages[ 0 ] + "']" );
    TEST.ASSERT.notNull( _draconique_option, "Le draconique ajoute par Sang-dragon devrait etre proposé dans la langue supplementaire" );
    if ( !_draconique_option ) {
        return;
    }
    let _badge                          = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
    let _warnings_before               = _badge ? parseInt( _badge.getAttribute( "data-number" ), 10 ) : null;
    _draconique_option.click();
    if ( _badge && _warnings_before !== null ) {
        return TEST.waitCounterValue( _badge, _warnings_before - 1 ).then( function () {
            TEST_HeritagePolyvalentAssertLanguageChosen( _character, _language_row, _legacy_languages[ 0 ] );
        } );
    }
    TEST_HeritagePolyvalentAssertLanguageChosen( _character, _language_row, _legacy_languages[ 0 ] );
} );

function TEST_HeritagePolyvalentAssertLanguageChosen( character_object, row_dom, language_name ) {
    TEST.ASSERT.equal( row_dom.dataset.currentPhase, LEVELUP.PHASE.SELECTED, "La ligne de langue devrait etre en phase SELECTED apres le choix, obtenu : " + row_dom.dataset.currentPhase );
    let _line                           = character_object.getAncestryHistory().getContentByUUID( "1" ).getContentByUUID( "1__" + row_dom.getAttribute( "data-slot-key" ) );
    TEST.ASSERT.equal( _line.getSelectedValue(), language_name, "La ligne du domaine devrait porter la langue choisie, obtenu : " + _line.getSelectedValue() );
    let _saved                          = character_object.getDataToSave();
    let _entry_saved                    = _saved.ancestry_history && _saved.ancestry_history[ 0 ];
    TEST.ASSERT.ok( _entry_saved && _entry_saved.level_skill && _entry_saved.level_skill[ row_dom.getAttribute( "data-slot-key" ) ] === language_name, "Le save de l'entree du palier 1 devrait porter la langue choisie (" + language_name + "), obtenu : " + JSON.stringify( _entry_saved ? _entry_saved.level_skill : null ) );
}
