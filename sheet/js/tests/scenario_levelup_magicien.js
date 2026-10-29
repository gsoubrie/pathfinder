"use strict";
/**
 * Scenario : LEVELUP MAGICIEN
 * Depart : feuille vide (TEST.RESET.sheet()). Race Elfe posee, classe
 * Magicien posee a niveau 1, onglet Passage de niveau ouvert.
 * 1. Bloc Niveau 1 : ligne "école arcanique" avec le lien d'information "?"
 *    (popup de la capacité de classe) colle a droite du libelle dans le groupe
 *    label, et selecteur generique replie (bouton Choisir...). Toute capacité
 *    décrite porte son "?" : le bloc niveau 1 du Magicien en compte 3 (école
 *    arcanique, lien arcanique, thèse arcanique). La ligne porte un counter de
 *    warning enfant de celui de la fenêtre, affiche 1 ; le counter warnings de
 *    l'onglet vaut 1 par cumul, pas de badge "!" dans le bloc.
 * 2. Lien "?" de école arcanique → popup de la capacité ouverte (renderer
 *    capacite de classe, description de l'abilité) puis masquee a la fermeture.
 *    Même parcours sur le "?" de "lien arcanique" (capacité décrite sans
 *    choix ouvert).
 * 3. Ouverture du selecteur : champ de recherche + les 11 écoles de magicien ;
 *    la recherche "mental" filtre a une seule entree.
 * 4. Selection "École du mentalisme" : choix enregistre sur le skill du
 *    conteneur (niveau 1, slot ecole_arcanique), valeur affichee avec son lien
 *    d'information, ligne et warning global repasses au vert, counter de la
 *    ligne vide et masque, counter de l'onglet vide et masque.
 * 5. Lien de la valeur → popup d'information de l'école choisie (renderer
 *    DON car categorie feat) puis fermee.
 * 6. Effacement : choix retire, bouton Choisir... de retour, ligne et warning
 *    de nouveau en attente, counters de la ligne et de l'onglet de retour a 1.
 */

TEST.RUNNER.register( "[LEVELUP MAGICIEN] Magicien 1 → ligne école arcanique + ? au libellé + counters ligne et onglet = 1", function () {
    TEST.RESET.sheet();
    TEST_openRacePopup();
    return TEST.clickTab( "body > .popup", "Elfe" ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        return TEST_AjouterClasse( "Magicien" );
    } ).then( function () {
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME );
    } ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _character                     = CONTROLLER.Character.current_character;
        TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
        if ( !_character ) {
            return;
        }
        TEST.ASSERT.notNull( _character.getClasses().getContentByUUID( "Magicien" ), "Pre-condition : Magicien posee" );
        if ( !_character.getClasses().getContentByUUID( "Magicien" ) ) {
            return;
        }
        let _skill                          = _character.getLevelUpSkills().getSkill( 1, "ecole_arcanique" );
        TEST.ASSERT.notNull( _skill, "Le skill école arcanique du niveau 1 devrait exister dans le conteneur" );
        if ( !_skill ) {
            return;
        }
        TEST.ASSERT.isNull( _skill.getValue(), "Aucune école ne devrait etre choisie avant selection, obtenu : " + _skill.getValue() );
        let _pane                         = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Passage de niveau devrait exister" );
        if ( !_pane ) {
            return;
        }
        let _block                        = _pane.querySelector( ".levelup-block" );
        TEST.ASSERT.notNull( _block, "Le bloc du niveau 1 devrait etre rendu" );
        if ( _block ) {
            TEST.ASSERT.equal( _block.querySelector( ".levelup-block-level-num" ).textContent, "Niveau 1", "Le premier bloc devrait etre celui du niveau 1, obtenu : " + _block.querySelector( ".levelup-block-level-num" ).textContent );
            TEST.ASSERT.isNull( _block.querySelector( ".levelup-pending-badge" ), "Le badge '!' ne devrait plus etre rendu (remplace par le counter de l'onglet)" );
            let _block_infos                 = _block.querySelectorAll( ".levelup-row-info" );
            TEST.ASSERT.equal( _block_infos.length, 3, "Toute capacité décrite du niveau 1 devrait porter le ? (école arcanique, lien arcanique, thèse arcanique), obtenu : " + _block_infos.length );
        }
        let _row                          = _pane.querySelector( ".levelup-row[data-slot-key='ecole_arcanique']" );
        TEST.ASSERT.notNull( _row, "La ligne école arcanique devrait etre rendue (.levelup-row[data-slot-key='ecole_arcanique'])" );
        if ( !_row ) {
            return;
        }
        TEST.ASSERT.equal( _row.querySelector( ".levelup-row-label" ).textContent, "école arcanique", "Le libelle de la ligne devrait etre école arcanique, obtenu : " + _row.querySelector( ".levelup-row-label" ).textContent );
        TEST.ASSERT.ok( _row.classList.contains( "levelup-row--pending" ), "La ligne devrait etre en attente tant qu'aucune école n'est choisie" );
        let _info                         = _row.querySelector( ".levelup-row-info" );
        TEST.ASSERT.notNull( _info, "La ligne devrait porter le lien d'information (?) a cote du libelle" );
        if ( _info ) {
            let _onclick                  = _info.getAttribute( "onclick" ) || "";
            TEST.ASSERT.ok( _onclick.indexOf( "event__show_information__class_ability" ) !== -1, "Le ? devrait ouvrir la popup de capacite de classe, obtenu : " + _onclick );
            TEST.ASSERT.ok( _onclick.indexOf( "Magicien" ) !== -1 && _onclick.indexOf( "ecole_arcanique" ) !== -1, "Le ? devrait viser la capacite ecole_arcanique du Magicien, obtenu : " + _onclick );
            TEST.ASSERT.notNull( _row.querySelector( ".levelup-row-label-group .levelup-row-info" ), "Le ? devrait vivre dans le groupe du libelle (.levelup-row-label-group .levelup-row-info)" );
            let _label_rect               = _row.querySelector( ".levelup-row-label" ).getBoundingClientRect();
            let _info_rect                = _info.getBoundingClientRect();
            TEST.ASSERT.ok( _info_rect.left >= _label_rect.right, "Le ? devrait demarrer a droite du libelle, obtenu : ? gauche " + _info_rect.left + " contre libelle droite " + _label_rect.right );
            TEST.ASSERT.ok( _info_rect.top >= _label_rect.top && _info_rect.bottom <= _label_rect.bottom, "Le ? devrait etre aligne verticalement avec le libelle, obtenu : ? " + _info_rect.top + "-" + _info_rect.bottom + " contre libelle " + _label_rect.top + "-" + _label_rect.bottom );
        }
        TEST.ASSERT.isNull( _row.querySelector( ".levelup-row-reminder" ), "Le rappel inline ne devrait plus etre rendu (explication en popup via le ?)" );
        let _row_counter                   = _row.querySelector( ".levelup-row-warning" );
        TEST.ASSERT.notNull( _row_counter, "La ligne devrait porter un counter de warning enfant de celui de la fenêtre (.levelup-row-warning)" );
        if ( _row_counter ) {
            TEST.ASSERT.ok( _row_counter.classList.contains( "gs-warnings-counter" ), "Le counter de ligne devrait etre un gs-warnings-counter, obtenu : " + _row_counter.className );
            TEST.ASSERT.equal( _row_counter.getAttribute( "data-number" ), "1", "Le counter de la ligne devrait valoir 1 tant que le choix n'est pas fait, obtenu : [" + _row_counter.getAttribute( "data-number" ) + "]" );
            TEST.ASSERT.notEqual( getComputedStyle( _row_counter ).display, "none", "Le counter de la ligne devrait etre visible quand le choix est en attente, obtenu : " + getComputedStyle( _row_counter ).display );
        }
        let _open_btn                     = _row.querySelector( ".inline-selector-open-btn" );
        TEST.ASSERT.notNull( _open_btn, "Le bouton Choisir... du selecteur devrait etre rendu" );
        if ( _open_btn ) {
            TEST.ASSERT.ok( _open_btn.textContent.indexOf( "Choisir" ) !== -1, "Le bouton d'ouverture devrait etre libelle Choisir..., obtenu : " + _open_btn.textContent );
            let _label_rect                 = _row.querySelector( ".levelup-row-label" ).getBoundingClientRect();
            let _btn_rect                   = _open_btn.getBoundingClientRect();
            let _btn_center                 = _btn_rect.top + _btn_rect.height / 2;
            TEST.ASSERT.ok( _btn_center >= _label_rect.top && _btn_center <= _label_rect.bottom, "Le bouton Choisir... devrait etre sur la meme ligne que le libelle (pas renvoye a la ligne), obtenu : centre bouton " + _btn_center + " contre libelle " + _label_rect.top + "-" + _label_rect.bottom );
            let _label_size                 = getComputedStyle( _row.querySelector( ".levelup-row-label" ) ).fontSize;
            let _btn_size                   = getComputedStyle( _open_btn ).fontSize;
            TEST.ASSERT.ok( parseFloat( _btn_size ) < parseFloat( _label_size ), "Le bouton Choisir... devrait etre plus petit que le libelle, obtenu : " + _btn_size + " contre " + _label_size );
        }
        let _warning                      = _pane.querySelector( ".levelup-global-warning" );
        TEST.ASSERT.ok( _warning && _warning.textContent.indexOf( "1 choix en attente" ) !== -1, "Le warning global devrait annoncer 1 choix en attente, obtenu : " + ( _warning ? _warning.textContent : "aucun" ) );
        let _counter                      = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
        TEST.ASSERT.notNull( _counter, "L'onglet Passage de niveau devrait porter le counter warnings (.gs-warnings-counter)" );
        if ( _counter ) {
            TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), "1", "Le counter de l'onglet devrait valoir 1, obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );
            TEST.ASSERT.notEqual( getComputedStyle( _counter ).display, "none", "Le counter devrait etre visible quand des choix sont en attente, obtenu : " + getComputedStyle( _counter ).display );
        }
    } );
} );

TEST.RUNNER.register( "[LEVELUP MAGICIEN] liens ? → popups École arcanique puis Lien arcanique", function () {
    let _row                              = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .levelup-row[data-slot-key='ecole_arcanique']" );
    TEST.ASSERT.notNull( _row, "Pre-condition : ligne école arcanique rendue" );
    if ( !_row ) {
        return;
    }
    let _info                             = _row.querySelector( ".levelup-row-info" );
    TEST.ASSERT.notNull( _info, "Pre-condition : lien d'information (?) rendu" );
    if ( !_info ) {
        return;
    }
    _info.click();
    let _overlay                          = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
    TEST.ASSERT.notNull( _overlay, "La popup de la capacité devrait etre ouverte (.popup-overlay en phase RUNNING)" );
    if ( !_overlay ) {
        return;
    }
    let _title                           = _overlay.querySelector( ".popup-title" );
    TEST.ASSERT.notNull( _title, "La popup devrait afficher un titre (.popup-title)" );
    if ( _title ) {
        TEST.ASSERT.equal( _title.textContent, "École arcanique", "Le titre de la popup devrait etre le nom de la capacité École arcanique, obtenu : " + _title.textContent );
    }
    let _category_label                  = _overlay.querySelector( ".popup-category-label" );
    TEST.ASSERT.notNull( _category_label, "La popup devrait afficher le libelle de categorie (renderer capacite de classe)" );
    if ( _category_label ) {
        TEST.ASSERT.equal( _category_label.textContent, "CAPACITÉ DE CLASSE", "Le libelle de categorie devrait etre CAPACITÉ DE CLASSE, obtenu : " + _category_label.textContent );
    }
    let _description                     = _overlay.querySelector( ".popup-description" );
    TEST.ASSERT.notNull( _description, "La popup devrait afficher la description de la capacité" );
    if ( _description ) {
        TEST.ASSERT.ok( _description.textContent.indexOf( "Arcanamirium" ) !== -1, "La description devrait contenir le premier paragraphe de l'abilité (Arcanamirium), obtenu : " + _description.textContent.substring( 0, 60 ) );
        TEST.ASSERT.ok( _description.textContent.indexOf( "théorie magique unifiée" ) !== -1, "La description devrait contenir le second paragraphe de l'abilité (théorie magique unifiée), obtenu : " + _description.textContent.substring( 0, 60 ) );
    }
    CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": "Magicien__ecole_arcanique" } );
    TEST.ASSERT.equal( _overlay.getAttribute( "data-current-phase" ), "HIDDEN_TO_STRING", "La popup devrait passer en phase masquee apres fermeture" );
    TEST.ASSERT.equal( getComputedStyle( _overlay ).display, "none", "L'overlay devrait etre masque a l'ecran, obtenu : " + getComputedStyle( _overlay ).display );
    let _lien_row                        = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .levelup-row[data-slot-key='lien_arcanique']" );
    TEST.ASSERT.notNull( _lien_row, "La ligne lien arcanique devrait etre rendue au niveau 1" );
    if ( !_lien_row ) {
        return;
    }
    let _lien_info                       = _lien_row.querySelector( ".levelup-row-info" );
    TEST.ASSERT.notNull( _lien_info, "La ligne lien arcanique devrait porter le ? (capacité décrite, sans choix ouvert)" );
    if ( !_lien_info ) {
        return;
    }
    _lien_info.click();
    let _lien_overlay                    = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
    TEST.ASSERT.notNull( _lien_overlay, "La popup de Lien arcanique devrait etre ouverte" );
    if ( !_lien_overlay ) {
        return;
    }
    let _lien_title                      = _lien_overlay.querySelector( ".popup-title" );
    TEST.ASSERT.notNull( _lien_title, "La popup de Lien arcanique devrait afficher un titre" );
    if ( _lien_title ) {
        TEST.ASSERT.equal( _lien_title.textContent, "Lien arcanique", "Le titre de la popup devrait etre Lien arcanique, obtenu : " + _lien_title.textContent );
    }
    CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": "Magicien__lien_arcanique" } );
    TEST.ASSERT.equal( _lien_overlay.getAttribute( "data-current-phase" ), "HIDDEN_TO_STRING", "La popup de Lien arcanique devrait etre masquee apres fermeture" );
} );

TEST.RUNNER.register( "[LEVELUP MAGICIEN] selecteur ouvert = 11 écoles + recherche filtrante", function () {
    let _row                              = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .levelup-row[data-slot-key='ecole_arcanique']" );
    TEST.ASSERT.notNull( _row, "Pre-condition : ligne école arcanique rendue" );
    if ( !_row ) {
        return;
    }
    let _open_btn                         = _row.querySelector( ".inline-selector-open-btn" );
    TEST.ASSERT.notNull( _open_btn, "Pre-condition : bouton Choisir... rendu" );
    if ( !_open_btn ) {
        return;
    }
    _open_btn.click();
    let _search                           = _row.querySelector( ".inline-selector-search" );
    TEST.ASSERT.notNull( _search, "Le champ de recherche devrait etre rendu apres ouverture (.inline-selector-search)" );
    let _entries                          = _row.querySelectorAll( ".inline-selector-entry" );
    TEST.ASSERT.equal( _entries.length, 11, "La liste devrait contenir les 11 écoles de magicien, obtenu : " + _entries.length );
    if ( !_search ) {
        return;
    }
    _search.value                         = "mental";
    _search.dispatchEvent( new Event( "input" ) );
    let _filtered                         = _row.querySelectorAll( ".inline-selector-entry" );
    TEST.ASSERT.equal( _filtered.length, 1, "La recherche 'mental' devrait laisser une seule école, obtenu : " + _filtered.length );
    if ( _filtered.length === 1 ) {
        TEST.ASSERT.equal( _filtered[ 0 ].getAttribute( "data-name" ), "École du mentalisme", "L'école filtrée devrait etre École du mentalisme, obtenu : " + _filtered[ 0 ].getAttribute( "data-name" ) );
    }
} );

TEST.RUNNER.register( "[LEVELUP MAGICIEN] sélection École du mentalisme → choix enregistré + counter masqué", function () {
    let _character                        = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    let _row                              = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .levelup-row[data-slot-key='ecole_arcanique']" );
    TEST.ASSERT.notNull( _row, "Pre-condition : ligne école arcanique rendue" );
    if ( !_row ) {
        return;
    }
    let _entry                            = _row.querySelector( ".inline-selector-entry[data-name='École du mentalisme']" );
    if ( !_entry ) {
        let _open_btn                     = _row.querySelector( ".inline-selector-open-btn" );
        TEST.ASSERT.notNull( _open_btn, "Le selecteur devrait pouvoir etre ouvert pour choisir" );
        if ( !_open_btn ) {
            return;
        }
        _open_btn.click();
        _entry                            = _row.querySelector( ".inline-selector-entry[data-name='École du mentalisme']" );
    }
    TEST.ASSERT.notNull( _entry, "L'entrée École du mentalisme devrait etre presente dans la liste" );
    if ( !_entry ) {
        return;
    }
    _entry.click();
    return TEST.wait().then( function () {
        let _skill                         = _character.getLevelUpSkills().getSkill( 1, "ecole_arcanique" );
        TEST.ASSERT.notNull( _skill, "Le skill école arcanique devrait rester dans le conteneur apres selection" );
        if ( !_skill ) {
            return;
        }
        TEST.ASSERT.equal( _skill.getValue(), "École du mentalisme", "Le choix devrait etre enregistre (niveau 1, slot ecole_arcanique), obtenu : " + _skill.getValue() );
        let _row_after                    = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .levelup-row[data-slot-key='ecole_arcanique']" );
        TEST.ASSERT.notNull( _row_after, "La ligne école arcanique devrait rester rendue apres selection" );
        if ( !_row_after ) {
            return;
        }
        let _value_name                   = _row_after.querySelector( ".inline-selector-value-name" );
        TEST.ASSERT.notNull( _value_name, "La valeur choisie devrait etre affichee (.inline-selector-value-name)" );
        if ( _value_name ) {
            TEST.ASSERT.equal( _value_name.textContent, "École du mentalisme", "La valeur affichee devrait etre École du mentalisme, obtenu : " + _value_name.textContent );
            TEST.ASSERT.ok( ( _value_name.getAttribute( "onclick" ) || "" ).indexOf( "L5FiuXsfW6Sa31gO" ) !== -1, "La valeur affichee devrait porter le lien d'information de l'école (uuid L5FiuXsfW6Sa31gO)" );
        }
        TEST.ASSERT.notOk( _row_after.classList.contains( "levelup-row--pending" ), "La ligne ne devrait plus etre en attente apres le choix" );
        let _row_counter_after            = _row_after.querySelector( ".levelup-row-warning" );
        TEST.ASSERT.notNull( _row_counter_after, "La ligne devrait toujours porter son counter de warning apres le choix" );
        if ( _row_counter_after ) {
            TEST.ASSERT.equal( _row_counter_after.getAttribute( "data-number" ), "", "Le counter de la ligne devrait etre vide apres le choix, obtenu : [" + _row_counter_after.getAttribute( "data-number" ) + "]" );
            TEST.ASSERT.equal( getComputedStyle( _row_counter_after ).display, "none", "Le counter de la ligne devrait etre masque apres le choix, obtenu : " + getComputedStyle( _row_counter_after ).display );
        }
        let _warning                      = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .levelup-global-warning" );
        TEST.ASSERT.ok( _warning && _warning.textContent.indexOf( "Tous les choix" ) !== -1, "Le warning global devrait annoncer que tous les choix sont faits, obtenu : " + ( _warning ? _warning.textContent : "aucun" ) );
        let _counter                      = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
        TEST.ASSERT.notNull( _counter, "L'onglet Passage de niveau devrait porter le counter warnings" );
        if ( _counter ) {
            TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), "", "Le counter de l'onglet devrait etre vide apres le choix, obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );
            TEST.ASSERT.equal( getComputedStyle( _counter ).display, "none", "Le counter devrait etre masque quand il n'y a plus de choix en attente, obtenu : " + getComputedStyle( _counter ).display );
        }
    } );
} );

TEST.RUNNER.register( "[LEVELUP MAGICIEN] lien de la valeur → popup école choisie", function () {
    let _row                              = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .levelup-row[data-slot-key='ecole_arcanique']" );
    TEST.ASSERT.notNull( _row, "Pre-condition : ligne école arcanique rendue" );
    if ( !_row ) {
        return;
    }
    let _value_name                       = _row.querySelector( ".inline-selector-value-name" );
    TEST.ASSERT.notNull( _value_name, "Pre-condition : valeur choisie affichee" );
    if ( !_value_name ) {
        return;
    }
    _value_name.click();
    let _overlay                          = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
    TEST.ASSERT.notNull( _overlay, "La popup de l'école choisie devrait etre ouverte" );
    if ( !_overlay ) {
        return;
    }
    let _title                           = _overlay.querySelector( ".popup-title" );
    TEST.ASSERT.notNull( _title, "La popup devrait afficher un titre" );
    if ( _title ) {
        TEST.ASSERT.equal( _title.textContent, "École du mentalisme", "Le titre de la popup devrait etre École du mentalisme, obtenu : " + _title.textContent );
    }
    let _category_label                   = _overlay.querySelector( ".popup-category-label" );
    TEST.ASSERT.notNull( _category_label, "La popup devrait afficher le libelle de categorie (renderer DON, categorie feat)" );
    CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": "L5FiuXsfW6Sa31gO" } );
    TEST.ASSERT.equal( _overlay.getAttribute( "data-current-phase" ), "HIDDEN_TO_STRING", "La popup de l'école devrait etre masquee apres fermeture" );
} );

TEST.RUNNER.register( "[LEVELUP MAGICIEN] effacement → choix retiré + counter de retour à 1", function () {
    let _character                        = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    let _skill                          = _character.getLevelUpSkills().getSkill( 1, "ecole_arcanique" );
    TEST.ASSERT.notNull( _skill, "Pre-condition : skill école arcanique present" );
    if ( !_skill ) {
        return;
    }
    TEST.ASSERT.equal( _skill.getValue(), "École du mentalisme", "Pre-condition : école choisie" );
    let _row                              = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .levelup-row[data-slot-key='ecole_arcanique']" );
    TEST.ASSERT.notNull( _row, "Pre-condition : ligne école arcanique rendue" );
    if ( !_row ) {
        return;
    }
    let _clear_btn                        = _row.querySelector( ".inline-selector-clear-btn" );
    TEST.ASSERT.notNull( _clear_btn, "Le bouton d'effacement devrait etre rendu (.inline-selector-clear-btn)" );
    if ( !_clear_btn ) {
        return;
    }
    _clear_btn.click();
    return TEST.wait().then( function () {
        let _skill_after                  = _character.getLevelUpSkills().getSkill( 1, "ecole_arcanique" );
        TEST.ASSERT.notNull( _skill_after, "Le skill école arcanique devrait rester dans le conteneur apres effacement" );
        if ( !_skill_after ) {
            return;
        }
        TEST.ASSERT.isNull( _skill_after.getValue(), "Le choix devrait etre retire apres effacement, obtenu : " + _skill_after.getValue() );
        let _row_after                    = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .levelup-row[data-slot-key='ecole_arcanique']" );
        TEST.ASSERT.notNull( _row_after, "La ligne école arcanique devrait rester rendue apres effacement" );
        if ( !_row_after ) {
            return;
        }
        TEST.ASSERT.notNull( _row_after.querySelector( ".inline-selector-open-btn" ), "Le bouton Choisir... devrait etre de retour apres effacement" );
        TEST.ASSERT.ok( _row_after.classList.contains( "levelup-row--pending" ), "La ligne devrait etre de nouveau en attente apres effacement" );
        let _row_counter_after            = _row_after.querySelector( ".levelup-row-warning" );
        TEST.ASSERT.notNull( _row_counter_after, "La ligne devrait porter son counter de warning apres effacement" );
        if ( _row_counter_after ) {
            TEST.ASSERT.equal( _row_counter_after.getAttribute( "data-number" ), "1", "Le counter de la ligne devrait etre de retour a 1 apres effacement, obtenu : [" + _row_counter_after.getAttribute( "data-number" ) + "]" );
            TEST.ASSERT.notEqual( getComputedStyle( _row_counter_after ).display, "none", "Le counter de la ligne devrait etre de nouveau visible apres effacement, obtenu : " + getComputedStyle( _row_counter_after ).display );
        }
        let _warning                      = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .levelup-global-warning" );
        TEST.ASSERT.ok( _warning && _warning.textContent.indexOf( "1 choix en attente" ) !== -1, "Le warning global devrait annoncer de nouveau 1 choix en attente, obtenu : " + ( _warning ? _warning.textContent : "aucun" ) );
        let _counter                      = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
        TEST.ASSERT.notNull( _counter, "L'onglet Passage de niveau devrait porter le counter warnings" );
        if ( _counter ) {
            TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), "1", "Le counter de l'onglet devrait etre de retour a 1, obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );
            TEST.ASSERT.notEqual( getComputedStyle( _counter ).display, "none", "Le counter devrait etre de nouveau visible, obtenu : " + getComputedStyle( _counter ).display );
        }
    } );
} );
