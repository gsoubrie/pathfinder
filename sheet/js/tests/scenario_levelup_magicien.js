"use strict";
/**
 * Scenario : LEVELUP MAGICIEN
 * Depart : feuille vide (TEST.RESET.sheet()). Race Elfe posee, classe
 * Magicien posee a niveau 1, onglet Passage de niveau ouvert.
 * 1. Bloc Niveau 1 : 5 lignes de capacites, quatre portant un interrupteur
 *    de validation en pilule sans texte (.level-up-row-toggle : piste
 *    allongee aux bouts ronds + bouton coulissant .level-up-row-toggle-knob,
 *    pas de libelle), la ligne ecole arcanique porte un selecteur de choix
 *    (.level-up-row-select, option vide + 11 ecoles : choisir une valeur
 *    valide la ligne), tout eteint par defaut : ligne en attente, counter de ligne a 1 visible,
 *    warning global "5 capacites non validees", counter de l'onglet a 5.
 *    Toute capacite decrite porte son "?" : le bloc niveau 1 du Magicien en
 *    compte 5 (ecole arcanique, incantation arcanique via l'alias de
 *    renommage, lien arcanique, maitrises initiales, these arcanique).
 * 2. Lien "?" de ecole arcanique → popup de la capacite ouverte (renderer
 *    capacite de classe) puis masquee a la fermeture. Meme parcours sur le "?"
 *    de "lien arcanique", "incantation arcanique" et "maitrises initiales"
 *    (rangs courants du personnage).
 * 3. Choix d'une ecole dans le selecteur de ecole arcanique : capacite
 *    validee (isActive true, le choix porte la phase de la ligne), ligne
 *    repasse au vert
 *    (phase ACTIVE sur la ligne), selecteur dore, counter de la
 *    ligne vide et masque, warning global a "4 capacites non validees",
 *    counter de l'onglet a 4.
 * 4. Retour a l'option vide du selecteur : capacite de nouveau non validee,
 *    ligne en attente,
 *    counters de retour (ligne 1, onglet 5, warning 5).
 * 5. Validation des 5 lignes du niveau 1 : warning global vert "Toutes les
 *    capacites sont validees", counter de l'onglet vide et masque.
 * 6. Niveau 5 : tant que "expertise en reflexes" n'est pas validee, la
 *    maitrise Reflexes du personnage reste Qualifiee (seules les capacites
 *    validees alimentent CHARACTER.Masteries). Validation de la ligne →
 *    Reflexes Expert, Vigueur reste Qualifiee, badge Expert dans la popup
 *    des maitrises.
 * 7. Prise du niveau 6 (rebuild des skills) : l'etat validee survit au
 *    rebuild (ecole arcanique et expertise en reflexes toujours actives,
 *    Reflexes toujours Expert).
 */

TEST.RUNNER.register( "[LEVELUP MAGICIEN] Magicien 1 → 5 lignes (4 interrupteurs + 1 sélecteur) non validées + counters ligne et onglet = 5", function () {
    TEST.RESET.sheet();
    TEST_openRacePopup();
    return TEST.clickTab( "body > .popup", "Elfe" ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        return TEST_AjouterClasse( "Magicien" );
    } ).then( function () {
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME );
    } ).then( function () {
        return TEST.wait( 300 );
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
        let _level                        = _character.getLevelHistory().getContentByUUID( "1" );
        let _skill                        = _level.getContentByUUID( "1__ecole_arcanique" );
        TEST.ASSERT.notNull( _skill, "Le skill école arcanique du niveau 1 devrait exister dans le conteneur" );
        if ( !_skill ) {
            return;
        }
        TEST.ASSERT.notOk( _skill.isActive(), "Aucune capacité ne devrait etre validée par défaut, école arcanique active : " + _skill.isActive() );
        let _pane                         = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Passage de niveau devrait exister" );
        if ( !_pane ) {
            return;
        }
        let _block                        = _pane.querySelector( ".level-up-block" );
        TEST.ASSERT.notNull( _block, "Le bloc du niveau 1 devrait etre rendu" );
        if ( !_block ) {
            return;
        }
        TEST.ASSERT.equal( _block.querySelector( ".level-up-block-level-num" ).textContent, "Niveau 1", "Le premier bloc devrait etre celui du niveau 1, obtenu : " + _block.querySelector( ".level-up-block-level-num" ).textContent );
        let _rows                         = _block.querySelectorAll( ".level-up-row" );
        TEST.ASSERT.equal( _rows.length, 5, "Le bloc du niveau 1 devrait rendre ses 5 capacités (école arcanique, incantation arcanique, lien arcanique, maîtrises initiales, thèse arcanique), obtenu : " + _rows.length );
        TEST.ASSERT.equal( _block.querySelectorAll( ".level-up-row-info" ).length, 5, "Toute capacité décrite du niveau 1 devrait porter le ?, obtenu : " + _block.querySelectorAll( ".level-up-row-info" ).length );
        for ( let _i = 0; _i < _rows.length; _i++ ) {
            let _row                      = _rows[ _i ];
            if ( _row.dataset.slotKey === "ecole_arcanique" ) {
                // Ligne à choix : le sélecteur remplace l'interrupteur, choisir une valeur valide la ligne
                let _select               = _row.querySelector( ".level-up-row-select" );
                TEST.ASSERT.notNull( _select, "La ligne école arcanique devrait porter son sélecteur de choix (.level-up-row-select)" );
                if ( !_select ) {
                    return;
                }
                TEST.ASSERT.equal( _select.value, "", "Le sélecteur devrait etre sur l'option vide par défaut, obtenu : [" + _select.value + "]" );
                TEST.ASSERT.equal( _select.options.length, 12, "Le sélecteur devrait proposer l'option vide + les 11 écoles, obtenu : " + _select.options.length );
                let _onchange              = _select.getAttribute( "onchange" ) || "";
                TEST.ASSERT.ok( _onchange.indexOf( "event__level_up__select_choice" ) !== -1, "Le sélecteur devrait emettre event__level_up__select_choice, obtenu : " + _onchange );
            }
            else {
                let _toggle                = _row.querySelector( ".level-up-row-toggle" );
                TEST.ASSERT.notNull( _toggle, "Chaque ligne à interrupteur devrait porter son interrupteur de validation (.level-up-row-toggle), ligne " + _i + " sans bouton" );
                if ( !_toggle ) {
                    return;
                }
                TEST.ASSERT.equal( _toggle.textContent, "", "L'interrupteur devrait etre sans texte, obtenu : [" + _toggle.textContent + "]" );
                TEST.ASSERT.notNull( _toggle.querySelector( ".level-up-row-toggle-knob" ), "L'interrupteur radio devrait porter son bouton coulissant (.level-up-row-toggle-knob), ligne " + _i );
                let _onclick               = _toggle.getAttribute( "onclick" ) || "";
                TEST.ASSERT.ok( _onclick.indexOf( "event__level_up__toggle_skill" ) !== -1, "L'interrupteur devrait emettre event__level_up__toggle_skill, ligne " + _i + ", obtenu : " + _onclick );
            }
            TEST.ASSERT.ok( _row.dataset.currentPhase === "RUNNING", "Toute ligne non validée devrait etre en phase RUNNING, ligne " + _i + ", obtenu : " + _row.dataset.currentPhase );
            let _row_counter              = _row.querySelector( ".gs-warnings-counter" );
            TEST.ASSERT.notNull( _row_counter, "Chaque ligne devrait porter un counter de warning enfant de celui de la fenêtre, ligne " + _i + " sans counter" );
            if ( _row_counter ) {
                TEST.ASSERT.equal( _row_counter.getAttribute( "data-number" ), "1", "Le counter d'une ligne non validée devrait valoir 1, ligne " + _i + ", obtenu : [" + _row_counter.getAttribute( "data-number" ) + "]" );
                TEST.ASSERT.notEqual( getComputedStyle( _row_counter ).display, "none", "Le counter d'une ligne non validée devrait etre visible, ligne " + _i );
            }
        }
        let _warning                      = _pane.querySelector( ".level-up-global-warning" );
        TEST.ASSERT.ok( _warning && _warning.textContent.indexOf( "5 capacités non validées" ) !== -1, "Le warning global devrait annoncer 5 capacités non validées, obtenu : " + ( _warning ? _warning.textContent : "aucun" ) );
        let _counter                      = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
        TEST.ASSERT.notNull( _counter, "L'onglet Passage de niveau devrait porter le counter warnings (.gs-warnings-counter)" );
        if ( _counter ) {
            TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), "5", "Le counter de l'onglet devrait valoir 5 (5 lignes en attente), obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );
            TEST.ASSERT.notEqual( getComputedStyle( _counter ).display, "none", "Le counter devrait etre visible quand des capacités sont en attente, obtenu : " + getComputedStyle( _counter ).display );
        }
    } );
} );

TEST.RUNNER.register( "[LEVELUP MAGICIEN] liens ? → popups capacité, alias incantation et maîtrises", function () {
    let _row                              = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-row[data-slot-key='ecole_arcanique']" );
    TEST.ASSERT.notNull( _row, "Pre-condition : ligne école arcanique rendue" );
    if ( !_row ) {
        return;
    }
    let _info                             = _row.querySelector( ".level-up-row-info" );
    TEST.ASSERT.notNull( _info, "Pre-condition : lien d'information (?) rendu" );
    if ( !_info ) {
        return;
    }
    _info.click();
    let _overlay                          = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
    TEST.ASSERT.notNull( _overlay, "La popup de la capacité devrait etre ouverte (.popup-overlay en phase SELECTED)" );
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
    let _lien_row                        = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-row[data-slot-key='lien_arcanique']" );
    TEST.ASSERT.notNull( _lien_row, "La ligne lien arcanique devrait etre rendue au niveau 1" );
    if ( !_lien_row ) {
        return;
    }
    let _lien_info                       = _lien_row.querySelector( ".level-up-row-info" );
    TEST.ASSERT.notNull( _lien_info, "La ligne lien arcanique devrait porter le ? (capacité décrite)" );
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
    let _incantation_row                  = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-row[data-slot-key='incantation_arcanique']" );
    TEST.ASSERT.notNull( _incantation_row, "La ligne incantation arcanique devrait etre rendue au niveau 1" );
    if ( !_incantation_row ) {
        return;
    }
    let _incantation_info                = _incantation_row.querySelector( ".level-up-row-info" );
    TEST.ASSERT.notNull( _incantation_info, "La ligne incantation arcanique devrait porter le ? (alias vers la capacité Incantation de magicien)" );
    if ( !_incantation_info ) {
        return;
    }
    _incantation_info.click();
    let _incantation_overlay             = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
    TEST.ASSERT.notNull( _incantation_overlay, "La popup de la capacité d'incantation devrait etre ouverte" );
    if ( !_incantation_overlay ) {
        return;
    }
    let _incantation_title               = _incantation_overlay.querySelector( ".popup-title" );
    TEST.ASSERT.notNull( _incantation_title, "La popup d'incantation devrait afficher un titre" );
    if ( _incantation_title ) {
        TEST.ASSERT.equal( _incantation_title.textContent, "Incantation de magicien", "Le libelle du tableau de niveaux (incantation arcanique) designe la capacité Incantation de magicien, obtenu : " + _incantation_title.textContent );
    }
    CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": "Magicien__incantation_de_magicien" } );
    TEST.ASSERT.equal( _incantation_overlay.getAttribute( "data-current-phase" ), "HIDDEN_TO_STRING", "La popup d'incantation devrait etre masquee apres fermeture" );
    let _masteries_row                   = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-row[data-slot-key='initial_masteries']" );
    TEST.ASSERT.notNull( _masteries_row, "La ligne maîtrises initiales devrait etre rendue au niveau 1" );
    if ( !_masteries_row ) {
        return;
    }
    let _masteries_info                 = _masteries_row.querySelector( ".level-up-row-info" );
    TEST.ASSERT.notNull( _masteries_info, "La ligne maîtrises initiales devrait porter le ? (rangs courants du personnage)" );
    if ( !_masteries_info ) {
        return;
    }
    _masteries_info.click();
    let _masteries_overlay              = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
    TEST.ASSERT.notNull( _masteries_overlay, "La popup des maîtrises du personnage devrait etre ouverte" );
    if ( !_masteries_overlay ) {
        return;
    }
    let _masteries_title               = _masteries_overlay.querySelector( ".popup-title" );
    TEST.ASSERT.notNull( _masteries_title, "La popup des maîtrises devrait afficher un titre" );
    if ( _masteries_title ) {
        TEST.ASSERT.equal( _masteries_title.textContent, "Maîtrises", "Le titre de la popup devrait etre Maîtrises, obtenu : " + _masteries_title.textContent );
    }
    let _masteries_groups               = _masteries_overlay.querySelectorAll( ".class-mastery-group" );
    TEST.ASSERT.ok( _masteries_groups.length >= 4, "La popup devrait regrouper les rangs par section (Perception, sauvegardes, attaques, défenses, sorts), obtenu : " + _masteries_groups.length );
    let _masteries_descs               = _masteries_overlay.querySelectorAll( ".class-mastery-row .class-mastery-desc" );
    let _has_vigueur                   = false;
    let _has_volonte                   = false;
    for ( let _i = 0; _i < _masteries_descs.length; _i++ ) {
        if ( _masteries_descs[ _i ].textContent === "Vigueur" ) { _has_vigueur = true; }
        if ( _masteries_descs[ _i ].textContent === "Volonté" ) { _has_volonte = true; }
    }
    TEST.ASSERT.ok( _has_vigueur, "Les maîtrises du Magicien devraient inclure Vigueur (rang du bloc mastery de la classe)" );
    TEST.ASSERT.ok( _has_volonte, "Les maîtrises du Magicien devraient inclure Volonté" );
    CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": "character__masteries" } );
    TEST.ASSERT.equal( _masteries_overlay.getAttribute( "data-current-phase" ), "HIDDEN_TO_STRING", "La popup des maîtrises devrait etre masquee apres fermeture" );
} );

TEST.RUNNER.register( "[LEVELUP MAGICIEN] choix d'une école dans le sélecteur → capacité validée + counters à 4", function () {
    let _character                        = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    let _row                              = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-row[data-slot-key='ecole_arcanique']" );
    TEST.ASSERT.notNull( _row, "Pre-condition : ligne école arcanique rendue" );
    if ( !_row ) {
        return;
    }
    let _select                           = _row.querySelector( ".level-up-row-select" );
    TEST.ASSERT.notNull( _select, "Pre-condition : sélecteur de choix rendu" );
    if ( !_select ) {
        return;
    }
    _select.value                         = "École du mentalisme";
    _select.dispatchEvent( new Event( "change" ) );
    return TEST.wait( 300 ).then( function () {
        let _skill                         = _character.getLevelHistory().getContentByUUID( "1" ).getContentByUUID( "1__ecole_arcanique" );
        TEST.ASSERT.notNull( _skill, "Le skill école arcanique devrait rester dans le conteneur apres bascule" );
        if ( !_skill ) {
            return;
        }
        TEST.ASSERT.ok( _skill.isActive(), "La capacité devrait etre validée apres le choix d'une école, la phase de la ligne porte l'état, obtenu : " + _skill.isActive() );
        let _row_after                    = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-row[data-slot-key='ecole_arcanique']" );
        TEST.ASSERT.notNull( _row_after, "La ligne école arcanique devrait rester rendue apres bascule" );
        if ( !_row_after ) {
            return;
        }
        TEST.ASSERT.ok( _row_after.dataset.currentPhase === "SELECTED", "La ligne validée devrait etre en phase SELECTED, obtenu : " + _row_after.dataset.currentPhase );
        let _select_after                 = _row_after.querySelector( ".level-up-row-select" );
        TEST.ASSERT.notNull( _select_after, "La ligne devrait toujours porter son sélecteur apres bascule" );
        if ( _select_after ) {
            TEST.ASSERT.equal( _select_after.value, "École du mentalisme", "Le sélecteur devrait afficher l'école choisie, obtenu : [" + _select_after.value + "]" );
        }
        let _other_row                     = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-row[data-slot-key='lien_arcanique']" );
        let _other_toggle                 = _other_row ? _other_row.querySelector( ".level-up-row-toggle" ) : null;
        if ( _other_toggle ) {
            TEST.ASSERT.ok( getComputedStyle( _other_toggle ).backgroundImage.indexOf( "212, 175, 55" ) === -1, "L'interrupteur eteint d'une autre ligne ne devrait pas etre dore, obtenu : " + getComputedStyle( _other_toggle ).backgroundImage );
            let _other_knob              = _other_toggle.querySelector( ".level-up-row-toggle-knob" );
            if ( _other_knob ) {
                TEST.ASSERT.equal( getComputedStyle( _other_knob ).left, "1px", "Le bouton coulissant eteint devrait rester a gauche (1px), obtenu : " + getComputedStyle( _other_knob ).left );
            }
        }
        let _row_counter_after            = _row_after.querySelector( ".gs-warnings-counter" );
        TEST.ASSERT.notNull( _row_counter_after, "La ligne devrait toujours porter son counter de warning apres bascule" );
        if ( _row_counter_after ) {
            TEST.ASSERT.equal( _row_counter_after.getAttribute( "data-number" ), "", "Le counter de la ligne validée devrait etre vide, obtenu : [" + _row_counter_after.getAttribute( "data-number" ) + "]" );
            TEST.ASSERT.equal( getComputedStyle( _row_counter_after ).display, "none", "Le counter de la ligne validée devrait etre masque, obtenu : " + getComputedStyle( _row_counter_after ).display );
        }
        let _warning                      = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-global-warning" );
        TEST.ASSERT.ok( _warning && _warning.textContent.indexOf( "4 capacités non validées" ) !== -1, "Le warning global devrait annoncer 4 capacités non validées apres la première validation, obtenu : " + ( _warning ? _warning.textContent : "aucun" ) );
        let _counter                      = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
        TEST.ASSERT.notNull( _counter, "L'onglet Passage de niveau devrait porter le counter warnings" );
        if ( _counter ) {
            TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), "4", "Le counter de l'onglet devrait valoir 4 apres la première validation, obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );
        }
        let _block_title                   = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-block[data-level-number='1'] .level-up-block-title" );
        TEST.ASSERT.notNull( _block_title, "Le titre du bloc du niveau 1 devrait etre rendu (data-level-number=1)" );
    } );
} );

TEST.RUNNER.register( "[LEVELUP MAGICIEN] retour à l'option vide du sélecteur → capacité retirée + counters de retour à 5", function () {
    let _character                        = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    let _skill                          = _character.getLevelHistory().getContentByUUID( "1" ).getContentByUUID( "1__ecole_arcanique" );
    TEST.ASSERT.notNull( _skill, "Pre-condition : skill école arcanique present" );
    if ( !_skill ) {
        return;
    }
    TEST.ASSERT.ok( _skill.isActive(), "Pre-condition : école arcanique validée" );
    let _row                              = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-row[data-slot-key='ecole_arcanique']" );
    TEST.ASSERT.notNull( _row, "Pre-condition : ligne école arcanique rendue" );
    if ( !_row ) {
        return;
    }
    let _select                           = _row.querySelector( ".level-up-row-select" );
    TEST.ASSERT.notNull( _select, "Pre-condition : sélecteur de choix rendu" );
    if ( !_select ) {
        return;
    }
    _select.value                         = "";
    _select.dispatchEvent( new Event( "change" ) );
    return TEST.wait( 300 ).then( function () {
        let _skill_after                  = _character.getLevelHistory().getContentByUUID( "1" ).getContentByUUID( "1__ecole_arcanique" );
        TEST.ASSERT.notNull( _skill_after, "Le skill école arcanique devrait rester dans le conteneur apres la seconde bascule" );
        if ( !_skill_after ) {
            return;
        }
        TEST.ASSERT.notOk( _skill_after.isActive(), "La capacité ne devrait plus etre validée apres le retour a l'option vide, obtenu : " + _skill_after.isActive() );
        let _save_entry_1                  = _character.getLevelHistory().getContentByUUID( "1" ).getDataToSave();
        TEST.ASSERT.ok( _save_entry_1[ "validated_skills" ][ "ecole_arcanique" ] === false, "Le save de l'entrée 1 devrait dériver école arcanique à false des phases de ses lignes, obtenu : " + JSON.stringify( _save_entry_1[ "validated_skills" ] ) );
        let _row_after                    = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-row[data-slot-key='ecole_arcanique']" );
        TEST.ASSERT.notNull( _row_after, "La ligne école arcanique devrait rester rendue apres la seconde bascule" );
        if ( !_row_after ) {
            return;
        }
        TEST.ASSERT.ok( _row_after.dataset.currentPhase === "RUNNING", "La ligne devrait etre de nouveau en phase RUNNING apres la seconde bascule, obtenu : " + _row_after.dataset.currentPhase );
        let _select_after                 = _row_after.querySelector( ".level-up-row-select" );
        TEST.ASSERT.notNull( _select_after, "La ligne devrait toujours porter son sélecteur" );
        if ( _select_after ) {
            TEST.ASSERT.equal( _select_after.value, "", "Le sélecteur devrait etre de retour sur l'option vide, obtenu : [" + _select_after.value + "]" );
        }
        let _row_counter_after            = _row_after.querySelector( ".gs-warnings-counter" );
        TEST.ASSERT.notNull( _row_counter_after, "La ligne devrait porter son counter de warning apres la seconde bascule" );
        if ( _row_counter_after ) {
            TEST.ASSERT.equal( _row_counter_after.getAttribute( "data-number" ), "1", "Le counter de la ligne devrait etre de retour a 1, obtenu : [" + _row_counter_after.getAttribute( "data-number" ) + "]" );
            TEST.ASSERT.notEqual( getComputedStyle( _row_counter_after ).display, "none", "Le counter de la ligne devrait etre de nouveau visible, obtenu : " + getComputedStyle( _row_counter_after ).display );
        }
        let _warning                      = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-global-warning" );
        TEST.ASSERT.ok( _warning && _warning.textContent.indexOf( "5 capacités non validées" ) !== -1, "Le warning global devrait annoncer de nouveau 5 capacités non validées, obtenu : " + ( _warning ? _warning.textContent : "aucun" ) );
        let _counter                      = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
        TEST.ASSERT.notNull( _counter, "L'onglet Passage de niveau devrait porter le counter warnings" );
        if ( _counter ) {
            TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), "5", "Le counter de l'onglet devrait etre de retour a 5, obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );
        }
    } );
} );

TEST.RUNNER.register( "[LEVELUP MAGICIEN] 5 lignes validées → warning vert + counter onglet masqué", function () {
    let _pane                             = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
    TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Passage de niveau rendu" );
    if ( !_pane ) {
        return;
    }
    let _block                           = _pane.querySelector( ".level-up-block" );
    TEST.ASSERT.notNull( _block, "Pre-condition : bloc du niveau 1 rendu" );
    if ( !_block ) {
        return;
    }
    let _character                        = CONTROLLER.Character.current_character;
    let _toggles                         = _block.querySelectorAll( ".level-up-row-toggle" );
    TEST.ASSERT.equal( _toggles.length, 4, "Pre-condition : 4 interrupteurs rendus dans le bloc du niveau 1, obtenu : " + _toggles.length );
    TEST.ASSERT.equal( _block.querySelectorAll( ".level-up-row-select" ).length, 1, "Pre-condition : 1 sélecteur de choix rendu (école arcanique), obtenu : " + _block.querySelectorAll( ".level-up-row-select" ).length );
    let _rows                           = _block.querySelectorAll( ".level-up-row" );
    for ( let _i = 0; _i < _rows.length; _i++ ) {
        if ( _rows[ _i ].dataset.currentPhase !== "SELECTED" ) {
            let _select                   = _rows[ _i ].querySelector( ".level-up-row-select" );
            if ( _select ) {
                _select.value             = _select.options[ 1 ].value;
                _select.dispatchEvent( new Event( "change" ) );
            }
            else {
                _rows[ _i ].querySelector( ".level-up-row-toggle" ).click();
            }
        }
    }
    return TEST.wait( 300 ).then( function () {
        let _level                      = _character.getLevelHistory().getContentByUUID( "1" );
        for ( let _i = 0, _size_i = _level.getSize(); _i < _size_i; _i++ ) {
            let _skill                   = _level.getContent( _i );
            TEST.ASSERT.ok( _skill.isActive(), "Toute capacité du niveau 1 devrait etre validée, " + _skill.getUUID() + " obtenu : " + _skill.isActive() );
        }
        let _warning                      = _pane.querySelector( ".level-up-global-warning" );
        TEST.ASSERT.ok( _warning && _warning.textContent.indexOf( "Toutes les capacités sont validées" ) !== -1, "Le warning global devrait annoncer que toutes les capacités sont validées, obtenu : " + ( _warning ? _warning.textContent : "aucun" ) );
        TEST.ASSERT.notOk( _warning.classList.contains( "visible" ), "Le warning global ne devrait plus porter la classe visible" );
        let _counter                      = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
        TEST.ASSERT.notNull( _counter, "L'onglet Passage de niveau devrait porter le counter warnings" );
        if ( _counter ) {
            TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), "", "Le counter de l'onglet devrait etre vide quand tout est validé, obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );
            TEST.ASSERT.equal( getComputedStyle( _counter ).display, "none", "Le counter devrait etre masque quand tout est validé, obtenu : " + getComputedStyle( _counter ).display );
        }
        let _title                        = _pane.querySelector( ".level-up-block-title" );
        TEST.ASSERT.notNull( _title, "Le titre du bloc du niveau 1 devrait etre rendu" );
    } );
} );

TEST.RUNNER.register( "[LEVELUP MAGICIEN] niveau 5 → Réflexes experte seulement après validation d'expertise en réflexes", function () {
    let _character                        = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    TEST.ASSERT.equal( _character.getLevel(), 1, "Pre-condition : Magicien niveau 1, obtenu : " + _character.getLevel() );
    for ( let _take = 0; _take < 4; _take++ ) {
        let _take_button                 = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-class-option[data-name='Magicien'] .level-up-class-option-take" );
        TEST.ASSERT.notNull( _take_button, "Le plus de prise de niveau devrait etre rendu (iteration " + _take + ")" );
        if ( !_take_button ) {
            return;
        }
        _take_button.click();
    }
    return TEST.wait().then( function () {
        TEST.ASSERT.equal( _character.getLevel(), 5, "Le Magicien devrait etre niveau 5, obtenu : " + _character.getLevel() );
        let _rank_gated                  = _character.getMasteries().getFinalRank( _character, "save__reflexes" );
        TEST.ASSERT.equal( _rank_gated, "Q", "La maîtrise Réflexes devrait rester qualifiée tant que expertise en réflexes n'est pas validée (seules les capacités validées alimentent les maîtrises), obtenu : " + _rank_gated );
        let _expertise_row               = null;
        let _rows                        = document.querySelectorAll( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-block[data-level-name] .level-up-row" );
        for ( let _i = 0; _i < _rows.length; _i++ ) {
            let _label                   = _rows[ _i ].querySelector( ".level-up-row-label" );
            if ( _label && _label.textContent === "expertise en réflexes" ) {
                _expertise_row           = _rows[ _i ];
                break;
            }
        }
        TEST.ASSERT.notNull( _expertise_row, "La ligne expertise en réflexes devrait etre rendue au niveau 5" );
        if ( !_expertise_row ) {
            return;
        }
        let _toggle                     = _expertise_row.querySelector( ".level-up-row-toggle" );
        TEST.ASSERT.notNull( _toggle, "La ligne expertise en réflexes devrait porter son interrupteur" );
        if ( !_toggle ) {
            return;
        }
        _toggle.click();
        return TEST.wait().then( function () {
            let _rank_after              = _character.getMasteries().getFinalRank( _character, "save__reflexes" );
            TEST.ASSERT.equal( _rank_after, "E", "La maîtrise Réflexes devrait etre experte apres validation d'expertise en réflexes, obtenu : " + _rank_after );
            let _rank_vigueur            = _character.getMasteries().getFinalRank( _character, "save__vigueur" );
            TEST.ASSERT.equal( _rank_vigueur, "Q", "La maîtrise Vigueur devrait rester qualifiee avant le niveau 9 (vigueur magique), obtenu : " + _rank_vigueur );
            let _masteries_info          = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-row[data-slot-key='initial_masteries'] .level-up-row-info" );
            TEST.ASSERT.notNull( _masteries_info, "Le ? de la ligne maîtrises initiales devrait etre rendu au niveau 5" );
            if ( !_masteries_info ) {
                return;
            }
            _masteries_info.click();
            let _overlay                 = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
            TEST.ASSERT.notNull( _overlay, "La popup des maîtrises devrait etre ouverte apres validation" );
            if ( !_overlay ) {
                return;
            }
            let _rows                    = _overlay.querySelectorAll( ".class-mastery-row" );
            let _reflexes_badge          = null;
            for ( let _i = 0; _i < _rows.length; _i++ ) {
                let _desc                = _rows[ _i ].querySelector( ".class-mastery-desc" );
                if ( _desc && _desc.textContent === "Réflexes" ) {
                    _reflexes_badge      = _rows[ _i ].querySelector( ".class-mastery-badge" );
                }
            }
            TEST.ASSERT.notNull( _reflexes_badge, "La popup devrait afficher la ligne Réflexes" );
            if ( _reflexes_badge ) {
                TEST.ASSERT.equal( _reflexes_badge.textContent, "Expert", "Le badge de Réflexes dans la popup devrait etre Expert, obtenu : " + _reflexes_badge.textContent );
            }
            CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": "character__masteries" } );
            TEST.ASSERT.equal( _overlay.getAttribute( "data-current-phase" ), "HIDDEN_TO_STRING", "La popup des maîtrises devrait etre masquee apres fermeture" );
        } );
    } );
} );

TEST.RUNNER.register( "[LEVELUP MAGICIEN] prise du niveau 6 → état validé conservé au rebuild", function () {
    let _character                        = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    TEST.ASSERT.equal( _character.getLevel(), 5, "Pre-condition : Magicien niveau 5, obtenu : " + _character.getLevel() );
    let _take_button                     = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-class-option[data-name='Magicien'] .level-up-class-option-take" );
    TEST.ASSERT.notNull( _take_button, "Pre-condition : bouton de prise de niveau rendu" );
    if ( !_take_button ) {
        return;
    }
    _take_button.click();
    return TEST.wait().then( function () {
        TEST.ASSERT.equal( _character.getLevel(), 6, "Le Magicien devrait etre niveau 6, obtenu : " + _character.getLevel() );
        let _level                       = _character.getLevelHistory().getContentByUUID( "1" );
        let _ecole                       = _level.getContentByUUID( "1__ecole_arcanique" );
        TEST.ASSERT.notNull( _ecole, "Le skill école arcanique devrait exister apres le rebuild" );
        if ( _ecole ) {
            TEST.ASSERT.ok( _ecole.isActive(), "La validation de école arcanique devrait survivre au rebuild de la prise de niveau, obtenu : " + _ecole.isActive() );
        }
        let _expertise                    = _character.getLevelHistory().getContentByUUID( "5" ).getContentByUUID( "5__expertise_en_reflexes" );
        TEST.ASSERT.notNull( _expertise, "Le skill expertise en réflexes du niveau 5 devrait exister apres le rebuild" );
        if ( _expertise ) {
            TEST.ASSERT.ok( _expertise.isActive(), "La validation d'expertise en réflexes devrait survivre au rebuild, obtenu : " + _expertise.isActive() );
        }
        let _rank                        = _character.getMasteries().getFinalRank( _character, "save__reflexes" );
        TEST.ASSERT.equal( _rank, "E", "La maîtrise Réflexes devrait rester experte apres le rebuild, obtenu : " + _rank );
    } );
} );

TEST.RUNNER.register( "[LEVELUP MAGICIEN][SAVE] save → load = validations restaurées", function () {
    let _character                        = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    let _saved                            = _character.getDataToSave();
    let _entry_1                          = null;
    let _entry_5                          = null;
    for ( let _i = 0; _i < _saved.levels_history.length; _i++ ) {
        if ( _saved.levels_history[ _i ][ "level_name" ] === "1" ) {
            _entry_1                      = _saved.levels_history[ _i ];
        }
        if ( _saved.levels_history[ _i ][ "level_name" ] === "5" ) {
            _entry_5                      = _saved.levels_history[ _i ];
        }
    }
    TEST.ASSERT.notNull( _entry_1, "La sauvegarde devrait contenir l'entree 1 de levels_history" );
    TEST.ASSERT.notNull( _entry_5, "La sauvegarde devrait contenir l'entree 5 de levels_history" );
    if ( !_entry_1 || !_entry_5 ) {
        return;
    }
    TEST.ASSERT.ok( _entry_1[ "validated_skills" ] && _entry_1[ "validated_skills" ][ "ecole_arcanique" ] === "École de forme protéenne", "Le choix d'école arcanique devrait etre sauvegarde (l'école choisie) dans validated_skills de l'entree 1, obtenu : " + JSON.stringify( _entry_1[ "validated_skills" ] ) );
    TEST.ASSERT.ok( _entry_5[ "validated_skills" ] && _entry_5[ "validated_skills" ][ "expertise_en_reflexes" ] === true, "La validation d'expertise en réflexes devrait etre sauvegardee dans validated_skills de l'entree 5, obtenu : " + JSON.stringify( _entry_5[ "validated_skills" ] ) );
    TEST.ASSERT.ok( _entry_5[ "validated_skills" ] && _entry_5[ "validated_skills" ][ "sorts_de_rang_3" ] === false, "La ligne non validee sorts de rang 3 devrait etre sauvegardee a false dans l'entree 5, obtenu : " + JSON.stringify( _entry_5[ "validated_skills" ] ) );
    let _reloaded                         = new CHARACTER.Current();
    _reloaded.updateData( _saved );
    _reloaded.doActionAfter( "event__data_loaded__done", { "param__current_character__object": _reloaded } );
    let _ecole                            = _reloaded.getLevelHistory().getContentByUUID( "1" ).getContentByUUID( "1__ecole_arcanique" );
    TEST.ASSERT.notNull( _ecole, "La ligne école arcanique devrait exister apres relecture" );
    if ( _ecole ) {
        TEST.ASSERT.ok( _ecole.isActive(), "La validation d'école arcanique devrait etre restauree apres relecture, obtenu : " + _ecole.isActive() );
    }
    let _reloaded_save_entry_1           = _reloaded.getLevelHistory().getContentByUUID( "1" ).getDataToSave();
    TEST.ASSERT.equal( _reloaded_save_entry_1[ "validated_skills" ][ "ecole_arcanique" ], "École de forme protéenne", "Le choix d'école arcanique devrait etre restaure apres relecture (staging → phase → save derivé), obtenu : " + JSON.stringify( _reloaded_save_entry_1[ "validated_skills" ] ) );
    let _expertise                        = _reloaded.getLevelHistory().getContentByUUID( "5" ).getContentByUUID( "5__expertise_en_reflexes" );
    TEST.ASSERT.notNull( _expertise, "La ligne expertise en réflexes devrait exister apres relecture" );
    if ( _expertise ) {
        TEST.ASSERT.ok( _expertise.isActive(), "La validation d'expertise en réflexes devrait etre restauree apres relecture, obtenu : " + _expertise.isActive() );
    }
    let _rank                             = _reloaded.getMasteries().getFinalRank( _reloaded, "save__reflexes" );
    TEST.ASSERT.equal( _rank, "E", "La maîtrise Réflexes devrait rester experte apres relecture, obtenu : " + _rank );
} );
