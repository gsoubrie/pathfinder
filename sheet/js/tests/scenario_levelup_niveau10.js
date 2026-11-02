"use strict";
/**
 * [LEVELUP MAGICIEN 10] parcours structurel sur la chaîne (Magicien niveau 5,
 * expertise en réflexes validée, l'amélioration Arcanes du niveau 3 a fait
 * passer Arcanes experte, une compétence supplémentaire qualifie Diplomatie).
 * Le test des choix et de l'enchaînement des rangs jusqu'au niveau 10
 * appartient à l'utilisateur (règle de travail) : ce scénario ne verrouille
 * que la mécanique.
 *  1. Cinq prises de niveau → niveau 10, les entrées 6 à 10 rendent leurs
 *     capacités, l'état des niveaux précédents survit aux rebuilds.
 *  2. Save → load : les dix entrées et leurs validations sont restaurées.
 */
TEST.RUNNER.register( "[LEVELUP MAGICIEN 10] cinq prises → niveau 10, état conservé", function () {
    let _character                        = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    TEST.ASSERT.equal( _character.getLevel(), 5, "Pre-condition : Magicien niveau 5, obtenu : " + _character.getLevel() );
    let _validated_before                 = [];
    for ( let _i = 0, _size_i = _character.getLevelHistory().getContentByUUID( "3" ).getSize(); _i < _size_i; _i++ ) {
        let _line                         = _character.getLevelHistory().getContentByUUID( "3" ).getContent( _i );
        if ( _line.isActive() ) {
            _validated_before.push( _line.getUUID() );
        }
    }
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
        for ( let _take = 0; _take < 5; _take++ ) {
            let _take_button             = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-class-option[data-name='Magicien'] .level-up-class-option-take" );
            TEST.ASSERT.notNull( _take_button, "Le bouton de prise de niveau devrait etre rendu (iteration " + _take + ")" );
            if ( !_take_button ) {
                return null;
            }
            _take_button.click();
        }
        return TEST.wait();
    } ).then( function ( to_skip ) {
        if ( to_skip === null ) {
            return;
        }
        TEST.ASSERT.equal( _character.getLevel(), 10, "Le Magicien devrait etre niveau 10, obtenu : " + _character.getLevel() );
        TEST.ASSERT.equal( _character.getLevelHistory().getSize(), 10, "L'historique devrait compter 10 entrees, obtenu : " + _character.getLevelHistory().getSize() );
        TEST.ASSERT.equal( _character.getLevelHistory().getContentByUUID( "10" ).getSize(), 3, "L'entree 10 devrait rendre ses 3 capacites (Don de compétence, don de magicien, primes d'attributs), obtenu : " + _character.getLevelHistory().getContentByUUID( "10" ).getSize() );
        TEST.ASSERT.equal( _character.getLevelHistory().getContentByUUID( "7" ).getSize(), 4, "L'entree 7 devrait rendre ses 4 capacites (Amélioration de compétence, don général, incantateur expert, sorts de rang 4), obtenu : " + _character.getLevelHistory().getContentByUUID( "7" ).getSize() );
        let _validated_after              = [];
        for ( let _i = 0, _size_i = _character.getLevelHistory().getContentByUUID( "3" ).getSize(); _i < _size_i; _i++ ) {
            let _line                     = _character.getLevelHistory().getContentByUUID( "3" ).getContent( _i );
            if ( _line.isActive() ) {
                _validated_after.push( _line.getUUID() );
            }
        }
        TEST.ASSERT.deepEqual( _validated_after, _validated_before, "Les validations du niveau 3 devraient survivre aux prises de niveau, avant : " + JSON.stringify( _validated_before ) + ", apres : " + JSON.stringify( _validated_after ) );
        // Les lignes de don du niveau 2 (Don de compétence, Don de magicien)
        // portent une liste déroulante maison (un "?" par option pour ouvrir
        // la popup du don avant de choisir), remplie par le sync depuis
        // l'état du personnage — le choix lui-même appartient à la
        // vérification manuelle
        let _block_2                        = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-block[data-level-number='2']" );
        TEST.ASSERT.notNull( _block_2, "Le bloc du niveau 2 devrait etre rendu" );
        if ( _block_2 ) {
            let _feat_dropdowns             = _block_2.querySelectorAll( ".single-select-container" );
            TEST.ASSERT.equal( _feat_dropdowns.length, 2, "Le bloc du niveau 2 devrait porter ses 2 listes déroulantes de don (Don de compétence, Don de magicien), obtenu : " + _feat_dropdowns.length );
            let _class_feat_dropdown        = _block_2.querySelector( ".level-up-row[data-slot-key^='class_feat_'] .single-select-container" );
            TEST.ASSERT.notNull( _class_feat_dropdown, "La ligne Don de magicien du niveau 2 devrait porter sa liste déroulante" );
            if ( _class_feat_dropdown ) {
                let _class_options          = _class_feat_dropdown.querySelectorAll( ".single-select-option" );
                TEST.ASSERT.equal( _class_options.length, 1 + DON.getAvailableClassFeats( "Magicien", 2 ).length, "La liste de Don de magicien devrait proposer l'option vide + les dons de Magicien de niveau 2 ou moins, obtenu : " + _class_options.length );
                let _class_infos            = _class_feat_dropdown.querySelectorAll( ".single-select-option .level-up-row-info" );
                TEST.ASSERT.equal( _class_infos.length, DON.getAvailableClassFeats( "Magicien", 2 ).length, "Chaque option de don de la liste Don de magicien devrait porter son ? de popup (l'option vide n'en porte pas), obtenu : " + _class_infos.length );
            }
            // Chaque ligne de don porte aussi le ? de SA capacité (la
            // description du don de compétence/magicien, comme toute ligne
            // décrite), hors liste déroulante
            let _capacity_infos             = _block_2.querySelectorAll( ".level-up-row-label-group .level-up-row-info" );
            TEST.ASSERT.equal( _capacity_infos.length, 2, "Chaque ligne de don du niveau 2 devrait porter le ? de sa capacité, obtenu : " + _capacity_infos.length );
            // Le clic sur le sélecteur ouvre la liste : l'état vit dans le
            // data-state-selector du conteneur, la liste s'affiche
            if ( _class_feat_dropdown ) {
                let _selector_header          = _class_feat_dropdown.querySelector( ".single-select-selector" );
                TEST.ASSERT.notNull( _selector_header, "Le sélecteur de Don de magicien devrait porter son header cliquable" );
                let _class_list               = _class_feat_dropdown.querySelector( ".single-select-list" );
                TEST.ASSERT.notNull( _class_list, "Le sélecteur de Don de magicien devrait porter sa liste d'options" );
                if ( _selector_header && _class_list ) {
                    _selector_header.click();
                    return TEST.wait().then( function () {
                        TEST.ASSERT.equal( _class_feat_dropdown.getAttribute( "data-state-selector" ), "1", "Le clic sur le sélecteur devrait ouvrir la liste (data-state-selector a 1), obtenu : [" + _class_feat_dropdown.getAttribute( "data-state-selector" ) + "]" );
                        TEST.ASSERT.notEqual( getComputedStyle( _class_list ).display, "none", "La liste ouverte devrait etre affichée, obtenu : " + getComputedStyle( _class_list ).display );
                        _selector_header.click();
                        return TEST.wait();
                    } ).then( function () {
                        TEST.ASSERT.equal( _class_feat_dropdown.getAttribute( "data-state-selector" ), "0", "Le second clic devrait refermer la liste, obtenu : [" + _class_feat_dropdown.getAttribute( "data-state-selector" ) + "]" );
                    } );
                }
            }
        }
        // Rien ne doit rester sous le pli : le dernier bloc est révélé au
        // scroll (ou tient dans la fenêtre), la dernière ligne du bloc 1
        // aussi — le contenu peut légitimement tenir, l'assertion porte la
        // visibilité, pas le débordement
        let _panes                           = document.querySelectorAll( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.equal( _panes.length, 1, "Il ne devrait exister qu'un panneau Passage de niveau (les resets vident la zone de contenu), obtenu : " + _panes.length );
        let _active_pane                     = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']:not(.gs-hidden)" );
        TEST.ASSERT.notNull( _active_pane, "Le panneau Passage de niveau actif devrait etre rendu (sans la classe gs-hidden)" );
        if ( !_active_pane ) {
            return;
        }
        let _levelup_window                  = _active_pane.querySelector( ".level-up-window" );
        TEST.ASSERT.notNull( _levelup_window, "La fenêtre Passage de niveau devrait etre rendue dans son panneau actif" );
        if ( !_levelup_window ) {
            return;
        }
        let _last_additional_row             = _active_pane.querySelector( ".level-up-block[data-level-number='1'] .level-up-row[data-slot-key^='" + LEVELUP.ADDITIONAL_SKILL_KEY + "']:last-child" );
        TEST.ASSERT.notNull( _last_additional_row, "La dernière compétence supplémentaire du niveau 1 devrait etre rendue dans son bloc" );
        if ( !_last_additional_row ) {
            return;
        }
        TEST.ASSERT.ok( _last_additional_row.closest( ".level-up-window" ) === _levelup_window, "La dernière compétence supplémentaire devrait vivre dans la fenêtre active du panneau, obtenu : " + ( _last_additional_row.closest( ".level-up-window" ) === _levelup_window ? "meme fenetre" : "une autre fenetre" ) );
        _last_additional_row.scrollIntoView( { "block": "nearest" } );
        let _window_rect                     = _levelup_window.getBoundingClientRect();
        let _first_rect                      = _last_additional_row.getBoundingClientRect();
        TEST.ASSERT.ok( _first_rect.height > 0, "La dernière compétence supplémentaire du niveau 1 devrait occuper une hauteur affichée, obtenu : " + _first_rect.height );
        TEST.ASSERT.ok( _first_rect.top >= _window_rect.top && _first_rect.bottom <= _window_rect.bottom, "La dernière compétence supplémentaire du niveau 1 devrait etre visible dans la fenêtre, ligne haut " + _first_rect.top + " bas " + _first_rect.bottom + " contre fenêtre haut " + _window_rect.top + " bas " + _window_rect.bottom );
        let _last_block_last_row             = _active_pane.querySelector( ".level-up-block:last-child .level-up-row:last-child" );
        TEST.ASSERT.notNull( _last_block_last_row, "La dernière ligne du dernier bloc devrait etre rendue" );
        if ( !_last_block_last_row ) {
            return;
        }
        _last_block_last_row.scrollIntoView( { "block": "nearest" } );
        let _last_rect                       = _last_block_last_row.getBoundingClientRect();
        TEST.ASSERT.ok( _last_rect.height > 0, "La dernière ligne du dernier bloc devrait occuper une hauteur affichée, obtenu : " + _last_rect.height );
        TEST.ASSERT.ok( _last_rect.top >= _window_rect.top && _last_rect.bottom <= _window_rect.bottom, "La dernière ligne du dernier bloc devrait etre révélée au scroll (visible dans la fenêtre), ligne haut " + _last_rect.top + " bas " + _last_rect.bottom + " contre fenêtre haut " + _window_rect.top + " bas " + _window_rect.bottom );
    } );
} );

TEST.RUNNER.register( "[LEVELUP MAGICIEN 10] save → load = dix entrées restaurées", function () {
    let _character                        = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    let _saved                            = _character.getDataToSave();
    TEST.ASSERT.equal( _saved.levels_history.length, 10, "La sauvegarde devrait compter 10 entrees, obtenu : " + _saved.levels_history.length );
    let _reloaded                         = new CHARACTER.Current();
    _reloaded.updateData( _saved );
    _reloaded.doActionAfter( "event__data_loaded__done", { "param__current_character__object": _reloaded } );
    TEST.ASSERT.equal( _reloaded.getLevel(), 10, "Le personnage relu devrait etre niveau 10, obtenu : " + _reloaded.getLevel() );
    TEST.ASSERT.equal( _reloaded.getLevelHistory().getSize(), 10, "L'historique relu devrait compter 10 entrees, obtenu : " + _reloaded.getLevelHistory().getSize() );
    let _arcana_rank                      = _reloaded.getMasteries().getFinalRank( _reloaded, "skill__arcana" );
    TEST.ASSERT.equal( _arcana_rank, "E", "Arcanes devrait garder son rang expert (amélioration du niveau 3) apres relecture, obtenu : " + _arcana_rank );
} );
