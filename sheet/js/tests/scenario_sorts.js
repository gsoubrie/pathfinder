"use strict";
/**
 * Scenario : SORTS (suite independante, RESET — placee APRES scenario_stuffs,
 * elle re-set la feuille elle-meme). L'onglet "Sorts" : le repertoire de
 * sorts du personnage, disponible pour TOUT LE MONDE (actif sur page
 * vide, aucune pré-condition). Le « + » en tête de barre ouvre la POPUP
 * D'AJOUT : la LISTE du dataset scrapé en colonnes (rang, type, nom,
 * coût, description coupée aux deux lignes, « ? » par ligne ouvrant la popup
 * spell), UN FILTRE PAR COLONNE sous l'entête (Entrée du filtre NOM : le
 * nom CANONIQUE d'une ligne qui matche se pose, sinon le TEXTE BRUT
 * DEVIENT le sort — entrée hors dataset, demande utilisateur — champ
 * COMMENTAIRE, Valider, Quitter). Une section par NATURE habitée :
 * Tours de magie, Rang 1..10 (la nature sort se déplie par rang), Sorts
 * focalisés, Rituels, Autres sorts (hors dataset) — chaque ligne porte
 * son COÛT d'action en glyphes (◆/⟲, « — » sans coût), son nom + « ? »
 * (popup spell : type, coût, traits, description — pas de « ? » hors
 * dataset), son RANG, ses TRAITS en badges, son COMMENTAIRE, et sa ROUE
 * CRANTÉE d'édition (commentaire, Retirer).
 * 1. Onglet actif sur page vide : barre avec « + » + compte « 0 sort »,
 * AUCUNE section (seules les sections habitées se rendent, l'invitation
 * s'affiche), la popup d'ajout ouvre VIERGE (aucun sort en attente,
 * tout le dataset en lignes, comptes croisés), Quitter referme sans
 * créer.
 * 2. Bouclier par Entrée + commentaire → section Tours de magie, coût ◆,
 * rang 1, traits, « ? » ouvre la popup spell (overlay RUNNING, nom, coût,
 * description) puis se referme ; Boule de feu → section Rang 3 (coût ◆◆) ;
 * Contre-représentation (focalisée, ⟲) ; Appel d'un esprit (rituel, —,
 * rang 5) ; la homebrew « Fureur du dragon maudit » vit dans Autres sans
 * « ? » sans coût, UN RE-AJOUT NE FAIT RIEN (le repertoire est un
 * ensemble), les sections suivent L'ORDRE des natures.
 * 3. La roue crantée : nom en LECTURE, le commentaire édité suit SA
 * cellule en place, Retirer supprime l'entrée (sa section disparait
 * quand elle se vide), save → load relit tout (entrées + commentaires).
 */
function TEST_spellsOpenAddPopup() {
    let _button = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.SpellsWindow.NAME + "'] .spells-add-bar .spells-add-button" );
    if ( !_button ) {
        return;
    }
    _button.click();
}

function TEST_spellsQuitAddPopup() {
    let _cancel = document.querySelector( "body > .popup .spells-add-popup .popup-up-cancel" );
    if ( !_cancel ) {
        return;
    }
    _cancel.click();
}

function TEST_spellsValidateAddPopup() {
    let _valid = document.querySelector( "body > .popup .spells-add-popup .popup-up-valid" );
    if ( !_valid ) {
        return;
    }
    _valid.click();
}

// Le clavier du filtre : le geste reel (frappe + Entrée sur l'input de
// la liste de la popup), meme parcours que l'onglet Équipement
function TEST_spellsFilterEnter( filter_value ) {
    let _popup = document.querySelector( "body > .popup .spells-add-popup" );
    if ( !_popup ) {
        return;
    }
    let _filter = _popup.querySelector( ".spells-add-spell-filter[data-col='name']" );
    if ( !_filter ) {
        return;
    }
    _filter.value = filter_value;
    _filter.dispatchEvent( new KeyboardEvent( "keydown", { "key": "Enter" } ) );
}

// Le clic d'une ligne : le geste reel d'ajout de la liste, le sort pose
// en attente se lit sur sa ligne peinte
function TEST_spellsClickRow( value ) {
    let _row = document.querySelector( "body > .popup .spells-add-popup .spells-add-spell-row[data-value=" + JSON.stringify( value ) + "]" );
    if ( !_row ) {
        return;
    }
    _row.click();
}

function TEST_spellsSetComment( comment_value ) {
    let _comment = document.querySelector( "body > .popup .spells-add-popup .spells-form-popup-comment-input" );
    if ( !_comment ) {
        return;
    }
    _comment.value = comment_value;
}

// La roue crantée d'une entrée : le geste reel d'ouverture de l'édition
function TEST_spellsOpenEditPopup( value ) {
    let _gear = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.SpellsWindow.NAME + "'] .spells-entry[data-value=" + JSON.stringify( value ) + "] .spells-entry-edit" );
    if ( !_gear ) {
        return;
    }
    _gear.click();
}

function TEST_spellsClickInfo( value ) {
    let _info = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.SpellsWindow.NAME + "'] .spells-entry[data-value=" + JSON.stringify( value ) + "] .spells-entry-info" );
    if ( !_info ) {
        return;
    }
    _info.click();
}

function TEST_spellsValidateEditPopup() {
    let _valid = document.querySelector( "body > .popup .spells-edit-popup .popup-up-valid" );
    if ( !_valid ) {
        return;
    }
    _valid.click();
}

function TEST_spellsRemoveEditPopup() {
    let _remove = document.querySelector( "body > .popup .spells-edit-popup .spells-edit-popup-remove-button" );
    if ( !_remove ) {
        return;
    }
    _remove.click();
}

function TEST_spellsCloseSpellPopup( value ) {
    let _spell_data = SPELLS.getSpellData( value );
    if ( !_spell_data ) {
        return;
    }
    CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": _spell_data[ "id" ] } );
}

function TEST_spellsDiagnosis() {
    let _description = "";
    let _sections    = document.querySelectorAll( ".gs-tab-pane[data-name='" + CHARACTER.SpellsWindow.NAME + "'] .spells-section" );
    for ( let _i = 0, _size_i = _sections.length; _i < _size_i; _i++ ) {
        _description += "[" + _sections[ _i ].getAttribute( "data-nature" ) + ( _sections[ _i ].getAttribute( "data-rank" ) ? " " + _sections[ _i ].getAttribute( "data-rank" ) : "" ) + " : " + _sections[ _i ].querySelectorAll( ".spells-entry" ).length + "] ";
    }
    let _count = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.SpellsWindow.NAME + "'] .spells-count" );
    _description += _count ? _count.textContent : "?";
    return _description;
}

TEST.RUNNER.register( "[SORTS] onglet = + en tête + répertoire vide + popup d'ajout", function () {
    TEST.RESET.sheet();
    let _tab = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.SpellsWindow.NAME + "']" );
    TEST.ASSERT.notNull( _tab, "L'onglet Sorts devrait exister" );
    if ( !_tab ) {
        return;
    }
    TEST.ASSERT.notEqual( _tab.getAttribute( "data-visibility-state" ), GS.CONST.VISIBILITY_STATE.DISABLED, "L'onglet Sorts ne devrait pas porter l'etat disabled sur page vide (disponible pour tout le monde)" );
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.SpellsWindow.NAME ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _pane = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.SpellsWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Sorts devrait exister" );
        if ( !_pane ) {
            return;
        }
        // La barre : le + en tête (PREMIER enfant), le compte du repertoire
        // a sa droite
        let _add_bar = _pane.querySelector( ".spells-add-bar" );
        TEST.ASSERT.notNull( _add_bar, "La barre devrait etre rendue" );
        if ( !_add_bar ) {
            return;
        }
        TEST.ASSERT.ok( _add_bar.firstElementChild.classList.contains( "spells-add-button" ), "Le + devrait ouvrir la barre (premier enfant), obtenu : [" + ( _add_bar.firstElementChild ? _add_bar.firstElementChild.className : "vide" ) + "]" );
        let _count = _pane.querySelector( ".spells-count" );
        TEST.ASSERT.equal( _count ? _count.textContent : null, "0 sort", "Le compte du repertoire vide devrait etre 0 sort, obtenu : [" + ( _count ? _count.textContent : "null" ) + "]" );
        // Aucune coquille vide : seules les sections HABITÉES se rendent,
        // l'invitation tient la page
        TEST.ASSERT.equal( _pane.querySelectorAll( ".spells-section" ).length, 0, "Aucune section ne devrait vivre sur un repertoire vide, obtenu : " + _pane.querySelectorAll( ".spells-section" ).length );
        let _hint = _pane.querySelector( ".spells-empty-hint" );
        TEST.ASSERT.notNull( _hint, "L'invitation devrait s'afficher sur un repertoire vide" );
        // La popup d'ajout : le + l'ouvre VIERGE, le sélecteur porte TOUT
        // le dataset + l'option vide (comptes croisés avec le domaine)
        TEST_spellsOpenAddPopup();
        let _popup = document.querySelector( "body > .popup .spells-add-popup" );
        TEST.ASSERT.notNull( _popup, "La popup d'ajout devrait s'ouvrir sur le +" );
        if ( !_popup ) {
            return;
        }
        let _pending = _popup.querySelector( ".spells-add-popup-pending" );
        TEST.ASSERT.ok( _pending ? !_pending.textContent : false, "Aucun sort ne devrait etre en attente a l'ouverture, obtenu : [" + ( _pending ? _pending.textContent : "null" ) + "]" );
        TEST.ASSERT.equal( _popup.querySelectorAll( ".spells-add-spell-row.selected" ).length, 0, "Aucune ligne ne devrait etre peinte a l'ouverture, obtenu : " + _popup.querySelectorAll( ".spells-add-spell-row.selected" ).length );
        let _rows_count = _popup.querySelectorAll( ".spells-add-spell-row" ).length;
        TEST.ASSERT.equal( _rows_count, Object.keys( SPELLS.CONST ).length, "La liste devrait porter tout le dataset en lignes, obtenu : " + _rows_count );
        let _header_titles = _popup.querySelectorAll( ".spells-add-spell-header-title" );
        TEST.ASSERT.equal( _header_titles.length, 6, "L'entete devrait porter ses colonnes (rang, type, nom, cout, description + actions), obtenu : " + _header_titles.length );
        TEST.ASSERT.equal( _header_titles[ 0 ].textContent, "Rang", "La premiere colonne devrait se lire Rang, obtenu : [" + _header_titles[ 0 ].textContent + "]" );
        TEST.ASSERT.equal( _header_titles[ 1 ].textContent, "Type", "La deuxieme colonne devrait se lire Type, obtenu : [" + _header_titles[ 1 ].textContent + "]" );
        TEST.ASSERT.equal( _header_titles[ 2 ].textContent, "Nom", "La troisieme colonne devrait se lire Nom, obtenu : [" + _header_titles[ 2 ].textContent + "]" );
        let _filters = _popup.querySelectorAll( ".spells-add-spell-filter" );
        TEST.ASSERT.equal( _filters.length, 5, "Une ligne de filtres devrait vivre sous l'entete (rang, type, nom, cout, description), obtenu : " + _filters.length );
        let _shield_row = _popup.querySelector( ".spells-add-spell-row[data-value=" + JSON.stringify( "Bouclier" ) + "]" );
        TEST.ASSERT.equal( _shield_row ? _shield_row.querySelector( ".spells-add-col-type" ).textContent : null, "Tour de magie", "Le type de Bouclier devrait se lire en colonne, obtenu : [" + ( _shield_row ? _shield_row.querySelector( ".spells-add-col-type" ).textContent : "null" ) + "]" );
        let _desc_style = getComputedStyle( _popup.querySelector( ".spells-add-spell-row .spells-add-col-description" ) );
        TEST.ASSERT.equal( _desc_style.webkitLineClamp, "2", "La description devrait se couper aux deux lignes (line-clamp), obtenu : [" + _desc_style.webkitLineClamp + "]" );
        let _comment_input = _popup.querySelector( ".spells-form-popup-comment-input" );
        TEST.ASSERT.notNull( _comment_input, "La popup devrait porter son champ commentaire" );
        TEST.ASSERT.ok( !_comment_input.value, "Le champ commentaire devrait etre vide a l'ouverture, obtenu : [" + _comment_input.value + "]" );
        TEST_spellsQuitAddPopup();
        TEST.ASSERT.isNull( document.querySelector( "body > .popup .spells-add-popup" ), "La popup devrait etre refermée sur Quitter" );
        TEST.ASSERT.equal( CONTROLLER.Character.current_character.getSpells().getSize(), 0, "Quitter ne devrait rien créer, obtenu : " + CONTROLLER.Character.current_character.getSpells().getSize() );
    } );
} );

TEST.RUNNER.register( "[SORTS] Bouclier = tours de magie + popup sort + sections par nature", function () {
    let _pane = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.SpellsWindow.NAME + "']" );
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Sorts ouvert" );
    if ( !_pane ) {
        return;
    }
    // Bouclier par le clavier du filtre + commentaire : le tour de magie
    // vit dans SA section, avec son coût, son rang, ses traits et son "?"
    TEST_spellsOpenAddPopup();
    return TEST.wait().then( function () {
        TEST_spellsFilterEnter( "Bouclier" );
        return TEST.wait();
    } ).then( function () {
        let _popup = document.querySelector( "body > .popup .spells-add-popup" );
        TEST.ASSERT.notNull( _popup, "Pre-condition : popup d'ajout ouverte" );
        if ( !_popup ) {
            return null;
        }
        let _pending = _popup.querySelector( ".spells-add-popup-pending" );
        TEST.ASSERT.equal( _pending ? _pending.textContent : null, "Bouclier", "L'Entrée sur nom exact devrait poser la valeur canonique en attente, obtenu : [" + ( _pending ? _pending.textContent : "null" ) + "]" );
        let _selected_row = _popup.querySelector( ".spells-add-spell-row.selected" );
        TEST.ASSERT.equal( _selected_row ? _selected_row.getAttribute( "data-value" ) : null, "Bouclier", "La ligne du sort en attente devrait etre peinte, obtenu : [" + ( _selected_row ? _selected_row.getAttribute( "data-value" ) : "null" ) + "]" );
        TEST_spellsSetComment( "Gardé pour le boss" );
        TEST_spellsValidateAddPopup();
        return TEST.wait();
    } ).then( function () {
        let _character = CONTROLLER.Character.current_character;
        TEST.ASSERT.isNull( document.querySelector( "body > .popup .spells-add-popup" ), "La popup d'ajout devrait etre refermée apres Valider" );
        TEST.ASSERT.equal( _character.getSpells().getSize(), 1, "Bouclier devrait vivre dans le repertoire (1 entree), obtenu : " + _character.getSpells().getSize() );
        let _cantrip_section = _pane.querySelector( ".spells-section[data-nature='cantrip']" );
        TEST.ASSERT.notNull( _cantrip_section, "La section Tours de magie devrait etre rendue, fenêtre : " + TEST_spellsDiagnosis() );
        if ( !_cantrip_section ) {
            return null;
        }
        TEST.ASSERT.equal( _cantrip_section.querySelectorAll( ".spells-entry" ).length, 1, "La section Tours de magie devrait porter Bouclier, fenêtre : " + TEST_spellsDiagnosis() );
        let _entry = _cantrip_section.querySelector( ".spells-entry[data-value='Bouclier']" );
        TEST.ASSERT.notNull( _entry, "Bouclier devrait etre rendu dans sa section" );
        if ( !_entry ) {
            return null;
        }
        TEST.ASSERT.equal( _entry.querySelector( ".spells-entry-cost" ).textContent, SPELLS.getActionCostLabel( "Bouclier" ), "Le coût de Bouclier devrait etre son glyphe scrapé, obtenu : [" + _entry.querySelector( ".spells-entry-cost" ).textContent + "]" );
        TEST.ASSERT.equal( _entry.querySelector( ".spells-entry-rank" ).textContent, String( SPELLS.getRankOfName( "Bouclier" ) ), "Le rang affiché devrait suivre le domaine, obtenu : [" + _entry.querySelector( ".spells-entry-rank" ).textContent + "]" );
        let _traits_text = _entry.querySelector( ".spells-entry-traits" ).textContent;
        TEST.ASSERT.ok( _traits_text.indexOf( "Concentration" ) !== -1, "Les traits de Bouclier devraient se lire en badges, obtenu : [" + _traits_text + "]" );
        TEST.ASSERT.equal( _entry.querySelector( ".spells-entry-comment" ).textContent, "Gardé pour le boss", "Le commentaire devrait se lire dans sa colonne, obtenu : [" + _entry.querySelector( ".spells-entry-comment" ).textContent + "]" );
        let _section_header_titles = _cantrip_section.querySelectorAll( ".spells-entries-header-title" );
        TEST.ASSERT.equal( _section_header_titles.length, 7, "L'entete du repertoire devrait porter ses colonnes (cout, sort, rang, traits, description, commentaire, actions), obtenu : " + _section_header_titles.length );
        let _section_description_cell = _entry.querySelector( ".spells-entry-description" );
        TEST.ASSERT.ok( _section_description_cell ? _section_description_cell.textContent.length > 0 : false, "La description scrapee de Bouclier devrait se lire dans SA colonne, obtenu : [" + ( _section_description_cell ? _section_description_cell.textContent.substring( 0, 60 ) : "absente" ) + "]" );
        TEST.ASSERT.equal( _section_description_cell ? getComputedStyle( _section_description_cell ).webkitLineClamp : null, "4", "La description du repertoire devrait se couper aux QUATRE lignes (line-clamp), obtenu : [" + ( _section_description_cell ? getComputedStyle( _section_description_cell ).webkitLineClamp : "null" ) + "]" );
        // Une entrée TOUTE seule : le compte passe au singulier
        let _count = _pane.querySelector( ".spells-count" );
        TEST.ASSERT.equal( _count ? _count.textContent : null, "1 sort", "Le compte devrait passer a 1 sort, obtenu : [" + ( _count ? _count.textContent : "null" ) + "]" );
        // Le "?" ouvre la popup spell : overlay RUNNING (la popup refermée
        // reste au DOM masquée), nom, coût et description croisés avec le
        // domaine, puis fermeture par l'uuid scrapé
        TEST_spellsClickInfo( "Bouclier" );
        let _overlay = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
        TEST.ASSERT.notNull( _overlay, "La popup sort devrait etre ouverte (overlay RUNNING)" );
        if ( _overlay ) {
            TEST.ASSERT.equal( _overlay.querySelector( ".popup-title" ).textContent, "Bouclier", "La popup devrait afficher le nom du sort, obtenu : [" + _overlay.querySelector( ".popup-title" ).textContent + "]" );
            let _popup_text = _overlay.textContent;
            TEST.ASSERT.ok( _popup_text.indexOf( SPELLS.getFullTypeLabel( "Bouclier" ) ) !== -1, "La popup devrait porter le type du sort ([" + SPELLS.getFullTypeLabel( "Bouclier" ) + "]), obtenu : [" + _popup_text.slice( 0, 120 ) + "]" );
            TEST.ASSERT.ok( _popup_text.indexOf( "tour de magie" ) !== -1 || _popup_text.indexOf( "Tour de magie" ) !== -1, "La description de Bouclier devrait se lire dans la popup" );
            TEST_spellsCloseSpellPopup( "Bouclier" );
            TEST.ASSERT.equal( _overlay.getAttribute( "data-current-phase" ), "HIDDEN_TO_STRING", "La popup devrait passer en phase masquée apres fermeture" );
        }
        // Boule de feu par le clavier : la nature sort se déplie PAR RANG
        TEST_spellsOpenAddPopup();
        return TEST.wait().then( function () {
            TEST_spellsFilterEnter( "Boule de feu" );
            return TEST.wait();
        } ).then( function () {
            TEST_spellsValidateAddPopup();
            return TEST.wait();
        } ).then( function () {
            let _rank_section = _pane.querySelector( ".spells-section[data-nature='spell'][data-rank='3']" );
            TEST.ASSERT.notNull( _rank_section, "La section Rang 3 devrait etre rendue pour Boule de feu, fenêtre : " + TEST_spellsDiagnosis() );
            if ( _rank_section ) {
                let _fire_entry = _rank_section.querySelector( ".spells-entry[data-value='Boule de feu']" );
                TEST.ASSERT.notNull( _fire_entry, "Boule de feu devrait etre rendue dans sa section de rang" );
                if ( _fire_entry ) {
                    TEST.ASSERT.equal( _fire_entry.querySelector( ".spells-entry-cost" ).textContent, "◆◆", "Le coût de Boule de feu devrait etre deux glyphs, obtenu : [" + _fire_entry.querySelector( ".spells-entry-cost" ).textContent + "]" );
                }
            }
            // Focalisée et rituel : les natures se posent chacune dans SA
            // section, les coûts suivent (⟲ en réaction, — sans coût)
            TEST_spellsOpenAddPopup();
            return TEST.wait().then( function () {
                TEST_spellsFilterEnter( "Contre-représentation" );
                return TEST.wait();
            } ).then( function () {
                TEST_spellsValidateAddPopup();
                return TEST.wait();
            } ).then( function () {
                TEST_spellsOpenAddPopup();
                return TEST.wait().then( function () {
                    TEST_spellsClickRow( "Appel d'un esprit" );
                    return TEST.wait();
                } ).then( function () {
                    TEST_spellsValidateAddPopup();
                    return TEST.wait();
                } );
            } );
        } ).then( function () {
            let _focus_section = _pane.querySelector( ".spells-section[data-nature='focus']" );
            TEST.ASSERT.notNull( _focus_section, "La section Sorts focalisés devrait etre rendue, fenêtre : " + TEST_spellsDiagnosis() );
            if ( _focus_section ) {
                let _focus_entry = _focus_section.querySelector( ".spells-entry[data-value='Contre-représentation']" );
                TEST.ASSERT.notNull( _focus_entry, "Contre-représentation devrait vivre dans les focalisés" );
                if ( _focus_entry ) {
                    TEST.ASSERT.equal( _focus_entry.querySelector( ".spells-entry-cost" ).textContent, "⟲", "Le coût du focalisé en réaction devrait etre ⟲, obtenu : [" + _focus_entry.querySelector( ".spells-entry-cost" ).textContent + "]" );
                }
            }
            let _ritual_section = _pane.querySelector( ".spells-section[data-nature='ritual']" );
            TEST.ASSERT.notNull( _ritual_section, "La section Rituels devrait etre rendue, fenêtre : " + TEST_spellsDiagnosis() );
            if ( _ritual_section ) {
                let _ritual_entry = _ritual_section.querySelector( ".spells-entry[data-value=" + JSON.stringify( "Appel d'un esprit" ) + "]" );
                TEST.ASSERT.notNull( _ritual_entry, "Appel d'un esprit devrait vivre dans les rituels" );
                if ( _ritual_entry ) {
                    TEST.ASSERT.equal( _ritual_entry.querySelector( ".spells-entry-cost" ).textContent, "—", "Le coût d'un rituel sans action_cost devrait etre —, obtenu : [" + _ritual_entry.querySelector( ".spells-entry-cost" ).textContent + "]" );
                    TEST.ASSERT.equal( _ritual_entry.querySelector( ".spells-entry-rank" ).textContent, String( SPELLS.getRankOfName( "Appel d'un esprit" ) ), "Le rang du rituel devrait suivre le domaine" );
                }
            }
            // Une homebrew par le filtre inconnu : le TEXTE BRUT devient
            // le sort (hors dataset), elle vit dans Autres sans "?" ni
            // coût, et un RE-AJOUT ne fait rien (le repertoire est un
            // ensemble)
            TEST_spellsOpenAddPopup();
            return TEST.wait().then( function () {
                TEST_spellsFilterEnter( "Fureur du dragon maudit" );
                return TEST.wait();
            } ).then( function () {
                let _free_pending = document.querySelector( "body > .popup .spells-add-popup .spells-add-popup-pending" );
                TEST.ASSERT.equal( _free_pending ? _free_pending.textContent : null, "Fureur du dragon maudit", "L'Entrée sur nom inconnu devrait poser le TEXTE BRUT en sort, obtenu : [" + ( _free_pending ? _free_pending.textContent : "null" ) + "]" );
                TEST_spellsValidateAddPopup();
                return TEST.wait();
            } );
        } );
    } ).then( function () {
        let _unknown_section = _pane.querySelector( ".spells-section[data-nature='unknown']" );
        TEST.ASSERT.notNull( _unknown_section, "La section Autres sorts devrait etre rendue, fenêtre : " + TEST_spellsDiagnosis() );
        if ( _unknown_section ) {
            let _free_entry = _unknown_section.querySelector( ".spells-entry[data-value='Fureur du dragon maudit']" );
            TEST.ASSERT.notNull( _free_entry, "La homebrew devrait vivre dans les Autres sorts" );
            if ( _free_entry ) {
                TEST.ASSERT.isNull( _free_entry.querySelector( ".spells-entry-info" ), "Une entrée hors dataset ne porte pas de ?" );
                TEST.ASSERT.equal( _free_entry.querySelector( ".spells-entry-cost" ).textContent, "—", "Une entrée hors dataset ne porte pas de coût, obtenu : [" + _free_entry.querySelector( ".spells-entry-cost" ).textContent + "]" );
                TEST.ASSERT.equal( _free_entry.querySelector( ".spells-entry-rank" ).textContent, "—", "Une entrée hors dataset ne porte pas de rang, obtenu : [" + _free_entry.querySelector( ".spells-entry-rank" ).textContent + "]" );
            }
        }
        let _character = CONTROLLER.Character.current_character;
        let _size_before = _character.getSpells().getSize();
        TEST_spellsOpenAddPopup();
        return TEST.wait().then( function () {
            TEST_spellsFilterEnter( "Bouclier" );
            return TEST.wait();
        } ).then( function () {
            TEST_spellsValidateAddPopup();
            return TEST.wait();
        } ).then( function () {
            TEST.ASSERT.equal( CONTROLLER.Character.current_character.getSpells().getSize(), _size_before, "Un re-ajout ne devrait rien changer (le repertoire est un ensemble), obtenu : " + CONTROLLER.Character.current_character.getSpells().getSize() + " contre " + _size_before );
            // Les sections suivent l'ORDRE des natures : tours de magie,
            // rangs, focalisés, rituels, autres
            let _sections = _pane.querySelectorAll( ".spells-section" );
            TEST.ASSERT.equal( _sections.length, 5, "Cinq natures habitées devraient etre rendues, obtenu : " + _sections.length + " — fenêtre : " + TEST_spellsDiagnosis() );
            if ( _sections.length === 5 ) {
                TEST.ASSERT.equal( _sections[ 0 ].getAttribute( "data-nature" ), "cantrip", "La premiere section devrait etre les tours de magie, obtenu : [" + _sections[ 0 ].getAttribute( "data-nature" ) + "]" );
                TEST.ASSERT.equal( _sections[ 1 ].getAttribute( "data-nature" ) + " " + _sections[ 1 ].getAttribute( "data-rank" ), "spell 3", "La deuxieme section devrait etre le rang 3, obtenu : [" + _sections[ 1 ].getAttribute( "data-nature" ) + " " + _sections[ 1 ].getAttribute( "data-rank" ) + "]" );
                TEST.ASSERT.equal( _sections[ 2 ].getAttribute( "data-nature" ), "focus", "La troisieme section devrait etre les focalisés" );
                TEST.ASSERT.equal( _sections[ 3 ].getAttribute( "data-nature" ), "ritual", "La quatrieme section devrait etre les rituels" );
                TEST.ASSERT.equal( _sections[ 4 ].getAttribute( "data-nature" ), "unknown", "La derniere section devrait etre les autres sorts" );
            }
        } );
    } );
} );

TEST.RUNNER.register( "[SORTS] roue crantée = commentaire en place + retrait + save → load", function () {
    let _pane = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.SpellsWindow.NAME + "']" );
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Sorts ouvert" );
    if ( !_pane ) {
        return;
    }
    // La roue crantée ouvre l'édition : le nom en LECTURE, le commentaire
    // édité suit SA cellule en place (jamais de rebuild par frappe)
    TEST_spellsOpenEditPopup( "Bouclier" );
    return TEST.wait().then( function () {
        let _edit_popup = document.querySelector( "body > .popup .spells-edit-popup" );
        TEST.ASSERT.notNull( _edit_popup, "La popup d'édition devrait s'ouvrir sur la roue crantée" );
        if ( !_edit_popup ) {
            return null;
        }
        TEST.ASSERT.equal( _edit_popup.querySelector( ".spells-edit-popup-name" ).textContent, "Bouclier", "L'édition devrait afficher le nom en lecture" );
        let _comment_input = _edit_popup.querySelector( ".spells-form-popup-comment-input" );
        TEST.ASSERT.equal( _comment_input ? _comment_input.value : null, "Gardé pour le boss", "Le champ commentaire part de l'état du domaine, obtenu : [" + ( _comment_input ? _comment_input.value : "null" ) + "]" );
        if ( _comment_input ) {
            _comment_input.value = "Réaction du gobelin";
        }
        TEST_spellsValidateEditPopup();
        return TEST.wait();
    } ).then( function () {
        let _character = CONTROLLER.Character.current_character;
        TEST.ASSERT.isNull( document.querySelector( "body > .popup .spells-edit-popup" ), "La popup d'édition devrait etre refermée apres Valider" );
        let _shield = _character.getSpells().getContentByUUID( "spell__Bouclier" );
        TEST.ASSERT.equal( _shield ? _shield.comment : null, "Réaction du gobelin", "Le commentaire édité devrait vivre dans le domaine, obtenu : [" + ( _shield ? _shield.comment : "null" ) + "]" );
        let _entry_dom = _pane.querySelector( ".spells-entry[data-value='Bouclier']" );
        TEST.ASSERT.equal( _entry_dom ? _entry_dom.querySelector( ".spells-entry-comment" ).textContent : null, "Réaction du gobelin", "La cellule commentaire devrait suivre en place, obtenu : [" + ( _entry_dom ? _entry_dom.querySelector( ".spells-entry-comment" ).textContent : "null" ) + "]" );
        // Save → load : le repertoire et ses commentaires survivent a la
        // relecture memoire (le format fichier est verrouille par
        // scenario_save_fichier)
        let _reloaded = new CHARACTER.Current();
        _reloaded.updateData( _character.getDataToSave() );
        TEST.ASSERT.equal( _reloaded.getSpells().getSize(), _character.getSpells().getSize(), "Tous les sorts devraient survivre a la relecture, obtenu : " + _reloaded.getSpells().getSize() + " contre " + _character.getSpells().getSize() );
        let _reloaded_shield = _reloaded.getSpells().getContentByUUID( "spell__Bouclier" );
        TEST.ASSERT.equal( _reloaded_shield ? _reloaded_shield.comment : null, "Réaction du gobelin", "Le commentaire devrait survivre a la relecture, obtenu : [" + ( _reloaded_shield ? _reloaded_shield.comment : "null" ) + "]" );
        let _reloaded_free = _reloaded.getSpells().getContentByUUID( "spell__Fureur du dragon maudit" );
        TEST.ASSERT.notNull( _reloaded_free, "La homebrew hors dataset devrait survivre a la relecture" );
        // Retirer par la popup d'édition : l'entrée part, sa section se
        // vide puis disparait
        TEST_spellsOpenEditPopup( "Fureur du dragon maudit" );
        return TEST.wait().then( function () {
            TEST_spellsRemoveEditPopup();
            return TEST.wait();
        } ).then( function () {
            TEST.ASSERT.isNull( _character.getSpells().getContentByUUID( "spell__Fureur du dragon maudit" ), "La homebrew devrait etre retirée du domaine" );
            TEST.ASSERT.isNull( _pane.querySelector( ".spells-section[data-nature='unknown']" ), "La section Autres sorts vide devrait disparaitre, fenêtre : " + TEST_spellsDiagnosis() );
            let _count = _pane.querySelector( ".spells-count" );
            TEST.ASSERT.equal( _count ? _count.textContent : null, "4 sorts", "Le compte devrait suivre le retrait, obtenu : [" + ( _count ? _count.textContent : "null" ) + "]" );
        } );
    } );
} );
