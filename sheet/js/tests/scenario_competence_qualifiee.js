"use strict";
/**
 * [COMPETENCE QUALIFIEE] Les compétences Artisanat et Connaissance
 * s'accompagnent d'un TYPE (demande utilisateur : "les compétences
 * artisanat ou connaissance doivent s'accompagner d'un type" — le type se
 * choisit AU MOMENT du choix de la compétence, onglet Progression : un
 * NOUVEAU sélecteur apparait, puis la compétence est spécifiée dans la zone
 * area-ancestry-info de l'onglet Général).
 * Depart : feuille vide (TEST.RESET.sheet()). Race Elfe posée, classe
 * Magicien posée à niveau 1 (les lignes "Compétence supplémentaire" du
 * niveau 1 vivent en attente, compte = 2 + mod INT).
 *  1. Choisir "Connaissance" sur la première ligne : le sélecteur de TYPE
 *     apparait (liste + libre : les lores connus des historiques comme
 *     options, l'Entrée du filtre crée un type libre), la ligne RESTE en
 *     attente sans son type.
 *  2. Entrée sur un type libre ("sous le Quart-Monde") : la ligne passe
 *     SELECTED, la valeur sauvegardée vaut "Connaissance (sous le
 *     Quart-Monde)", le rang Q vit sur SON slot distinct (jamais sur la
 *     compétence de base).
 *  3. La seconde ligne propose TOUJOURS "Connaissance" (un autre type
 *     reste prenable) : y choisir "Artisanat" puis le type "Alchimie" —
 *     SELECTED, slot distinct, valeur composite.
 *  4. Onglet Général : le bloc Compétences rend une LIGNE par compétence
 *     qualifiée possédée (libellé entre parenthèses, badge du rang sur
 *     SON slot).
 *  5. Save → relecture en mémoire : le choix composite est restauré
 *     (compétence + type + phase).
 */
TEST.RUNNER.register( "[COMPETENCE QUALIFIEE] type = second sélecteur, validation par le type, slot et zone Général dédiés", function () {
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
        let _pane                          = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Progression ouvert" );
        if ( !_pane ) {
            return;
        }
        let _row                           = _pane.querySelector( ".level-up-block[data-level-number='1'] .level-up-row[data-slot-key='additional_skill_0']" );
        TEST.ASSERT.notNull( _row, "Pre-condition : première compétence supplémentaire rendue" );
        if ( !_row ) {
            return;
        }
        TEST.ASSERT.isNull( _row.querySelector( ".level-up-row-qualifier .single-select-container" ), "Aucun sélecteur de type ne devrait exister avant le choix de la compétence" );
        let _connaissance_option           = _row.querySelector( ".single-select-option[data-value='Connaissance']" );
        TEST.ASSERT.notNull( _connaissance_option, "La ligne devrait proposer Connaissance" );
        if ( !_connaissance_option ) {
            return;
        }
        // 1. Le choix de Connaissance révèle le sélecteur de TYPE, la ligne
        // ne valide pas sans lui
        _connaissance_option.click();
        let _qualifier                     = _row.querySelector( ".level-up-row-qualifier .single-select-container" );
        TEST.ASSERT.notNull( _qualifier, "Choisir Connaissance devrait faire apparaitre le sélecteur de type" );
        if ( !_qualifier ) {
            return;
        }
        TEST.ASSERT.equal( _row.dataset.currentPhase, "RUNNING", "La ligne qualifiée sans son type devrait rester en attente, obtenu : " + _row.dataset.currentPhase );
        let _expected_types                = SKILLS.getQualifierList( "Connaissance" );
        TEST.ASSERT.ok( _expected_types.length > 0, "Pre-condition : les types de Connaissance devraient etre proposes (lores des historiques)" );
        TEST.ASSERT.equal( _qualifier.querySelectorAll( ".single-select-option" ).length, 1 + _expected_types.length, "Le sélecteur de type devrait proposer l'option vide + les " + _expected_types.length + " types connus, obtenu : " + _qualifier.querySelectorAll( ".single-select-option" ).length );
        // 2. Entrée sur un type LIBRE : la ligne valide (liste + libre)
        let _filter_input                  = _qualifier.querySelector( ".single-select-filter" );
        TEST.ASSERT.notNull( _filter_input, "Le sélecteur de type devrait porter sa ligne de filtre" );
        if ( !_filter_input ) {
            return;
        }
        _filter_input.value                = "sous le Quart-Monde";
        _filter_input.dispatchEvent( new KeyboardEvent( "keydown", { "key": "Enter" } ) );
        TEST.ASSERT.equal( _row.dataset.currentPhase, "SELECTED", "Poser le type devrait valider la ligne, obtenu : " + _row.dataset.currentPhase );
        let _entry                         = _character.getLevelHistory().getContentByUUID( "1" );
        TEST.ASSERT.notNull( _entry, "Pre-condition : entree 1 de l'historique" );
        if ( !_entry ) {
            return;
        }
        let _line                          = _entry.getContentByUUID( "1__additional_skill_0" );
        TEST.ASSERT.notNull( _line, "La ligne devrait exister dans son entree" );
        if ( !_line ) {
            return;
        }
        let _qualified_value               = "Connaissance (sous le Quart-Monde)";
        TEST.ASSERT.equal( _line.getSelectedValue(), "Connaissance", "La ligne validée devrait porter la compétence de base, obtenu : " + _line.getSelectedValue() );
        TEST.ASSERT.equal( _line.getQualifiedValue(), _qualified_value, "La valeur qualifiée devrait assembler la compétence et son type, obtenu : " + _line.getQualifiedValue() );
        let _qualified_slot                = MASTERY.getSkillSlot( _qualified_value );
        TEST.ASSERT.notEqual( _qualified_slot, MASTERY.getSkillSlot( "Connaissance" ), "La compétence qualifiée devrait vivre sur SON slot, pas sur la compétence de base" );
        TEST.ASSERT.equal( _character.getMasteries().getFinalRank( _character, _qualified_slot ), "Q", "La compétence qualifiée validée devrait etre Qualifiée sur son slot, obtenu : " + _character.getMasteries().getFinalRank( _character, _qualified_slot ) );
        TEST.ASSERT.notEqual( _character.getMasteries().getFinalRank( _character, MASTERY.getSkillSlot( "Connaissance" ) ), "Q", "La compétence de base ne devrait jamais porter le rang du type" );
        let _qualifier_header              = _row.querySelector( ".level-up-row-qualifier .single-select-selector-label" );
        if ( _qualifier_header ) {
            TEST.ASSERT.equal( _qualifier_header.textContent, "sous le Quart-Monde", "Le sélecteur de type devrait afficher le type posé, obtenu : [" + _qualifier_header.textContent + "]" );
        }
        // 3. La seconde ligne propose toujours Connaissance (un autre type
        // reste prenable), puis Artisanat + Alchimie par les gestes canoniques
        let _row_1                         = _pane.querySelector( ".level-up-block[data-level-number='1'] .level-up-row[data-slot-key='additional_skill_1']" );
        TEST.ASSERT.notNull( _row_1, "Pre-condition : seconde compétence supplémentaire rendue" );
        if ( !_row_1 ) {
            return;
        }
        TEST.ASSERT.notNull( _row_1.querySelector( ".single-select-option[data-value='Connaissance']" ), "La seconde ligne devrait toujours proposer Connaissance (un autre type reste prenable)" );
        let _artisanat_option             = _row_1.querySelector( ".single-select-option[data-value='Artisanat']" );
        TEST.ASSERT.notNull( _artisanat_option, "La seconde ligne devrait proposer Artisanat" );
        if ( !_artisanat_option ) {
            return;
        }
        _artisanat_option.click();
        let _crafting_qualifier           = _row_1.querySelector( ".level-up-row-qualifier .single-select-container" );
        TEST.ASSERT.notNull( _crafting_qualifier, "Choisir Artisanat devrait faire apparaitre le sélecteur de type" );
        if ( !_crafting_qualifier ) {
            return;
        }
        TEST.ASSERT.equal( _row_1.dataset.currentPhase, "RUNNING", "La ligne Artisanat sans son type devrait rester en attente, obtenu : " + _row_1.dataset.currentPhase );
        let _alchimie_option              = _crafting_qualifier.querySelector( ".single-select-option[data-value='Alchimie']" );
        TEST.ASSERT.notNull( _alchimie_option, "Le sélecteur de type d'Artisanat devrait proposer Alchimie (liste écrite)" );
        if ( !_alchimie_option ) {
            return;
        }
        _alchimie_option.click();
        TEST.ASSERT.equal( _row_1.dataset.currentPhase, "SELECTED", "Poser le type Alchimie devrait valider la ligne, obtenu : " + _row_1.dataset.currentPhase );
        let _crafting_qualified            = "Artisanat (Alchimie)";
        TEST.ASSERT.equal( _character.getMasteries().getFinalRank( _character, MASTERY.getSkillSlot( _crafting_qualified ) ), "Q", "L'Artisanat qualifié validé devrait etre Qualifié sur son slot, obtenu : " + _character.getMasteries().getFinalRank( _character, MASTERY.getSkillSlot( _crafting_qualified ) ) );
        // 4. La zone area-ancestry-info du Général spécifie les compétences
        // qualifiées (comme les langues choisies de l'ascendance)
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.GeneralWindow.NAME ).then( function () {
            return TEST.wait();
        } ).then( function () {
            let _general_pane               = document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.GeneralWindow.NAME + "']" );
            TEST.ASSERT.notNull( _general_pane, "Pre-condition : panneau Général ouvert" );
            if ( !_general_pane ) {
                return;
            }
            // 4. Le bloc Compétences du Général rend une LIGNE par
            // compétence qualifiée possédée : libellé entre parenthèses,
            // badge du rang sur SON slot
            let _lore_row                   = _general_pane.querySelector( ".jets-skills-block .saves-row[data-slot='" + _qualified_slot + "']" );
            TEST.ASSERT.notNull( _lore_row, "Le bloc Compétences devrait rendre la ligne de la Connaissance qualifiée, slot : " + _qualified_slot );
            if ( _lore_row ) {
                TEST.ASSERT.equal( _lore_row.querySelector( ".saves-label" ).textContent, _qualified_value, "La ligne qualifiée devrait porter son type entre parenthèses, obtenu : " + _lore_row.querySelector( ".saves-label" ).textContent );
                TEST.ASSERT.equal( _lore_row.querySelector( ".saves-rank" ).textContent, "Q", "La ligne qualifiée devrait porter le badge Q, obtenu : " + _lore_row.querySelector( ".saves-rank" ).textContent );
            }
            let _crafting_slot             = MASTERY.getSkillSlot( _crafting_qualified );
            let _crafting_row               = _general_pane.querySelector( ".jets-skills-block .saves-row[data-slot='" + _crafting_slot + "']" );
            TEST.ASSERT.notNull( _crafting_row, "Le bloc Compétences devrait rendre la ligne de l'Artisanat qualifié, slot : " + _crafting_slot );
            if ( _crafting_row ) {
                TEST.ASSERT.equal( _crafting_row.querySelector( ".saves-label" ).textContent, _crafting_qualified, "La ligne de l'Artisanat qualifié devrait porter son type entre parenthèses, obtenu : " + _crafting_row.querySelector( ".saves-label" ).textContent );
                TEST.ASSERT.equal( _crafting_row.querySelector( ".saves-rank" ).textContent, "Q", "La ligne de l'Artisanat qualifié devrait porter le badge Q, obtenu : " + _crafting_row.querySelector( ".saves-rank" ).textContent );
            }
            // 5. Save → relecture en mémoire : le composite se restaure
            let _saved                     = _character.getDataToSave();
            let _saved_entry               = _saved.levels_history ? _saved.levels_history[ 0 ] : null;
            TEST.ASSERT.notNull( _saved_entry, "La sauvegarde devrait contenir l'entree 1" );
            if ( !_saved_entry ) {
                return;
            }
            TEST.ASSERT.equal( _saved_entry[ "level_skill" ][ "additional_skill_0" ], _qualified_value, "Le save devrait porter la valeur composite de la ligne qualifiée, obtenu : " + _saved_entry[ "level_skill" ][ "additional_skill_0" ] );
            TEST.ASSERT.equal( _saved_entry[ "level_skill" ][ "additional_skill_1" ], _crafting_qualified, "Le save devrait porter la valeur composite de l'Artisanat qualifié, obtenu : " + _saved_entry[ "level_skill" ][ "additional_skill_1" ] );
            let _reloaded                  = new CHARACTER.Current();
            _reloaded.updateData( _saved );
            _reloaded.doActionAfter( "event__data_loaded__done", { "param__current_character__object": _reloaded } );
            let _reloaded_line             = _reloaded.getLevelHistory().getContentByUUID( "1" ).getContentByUUID( "1__additional_skill_0" );
            TEST.ASSERT.notNull( _reloaded_line, "La ligne qualifiée devrait exister apres relecture" );
            if ( _reloaded_line ) {
                TEST.ASSERT.ok( _reloaded_line.isActive(), "La validation de la compétence qualifiée devrait etre restauree, obtenu : " + _reloaded_line.isActive() );
                TEST.ASSERT.equal( _reloaded_line.getSelectedValue(), "Connaissance", "La compétence de base devrait etre restauree, obtenu : " + _reloaded_line.getSelectedValue() );
                TEST.ASSERT.equal( _reloaded_line.getQualifiedValue(), _qualified_value, "La valeur composite devrait etre restauree, obtenu : " + _reloaded_line.getQualifiedValue() );
            }
            TEST.ASSERT.equal( _reloaded.getMasteries().getFinalRank( _reloaded, _qualified_slot ), "Q", "La relecture devrait restaurer le rang de la compétence qualifiée sur son slot, obtenu : " + _reloaded.getMasteries().getFinalRank( _reloaded, _qualified_slot ) );
        } );
    } );
} );
