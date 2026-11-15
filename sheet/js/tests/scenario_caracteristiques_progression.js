"use strict";
/**
 * [PROGRESSION] Les comptes des lignes supplémentaires suivent le
 * modificateur d'Intelligence SANS ré-activation d'onglet.
 * Depart : feuille vide (TEST.RESET.sheet()). Race Elfe posée, classe
 * Magicien posée à niveau 1 (les bonus de race Elfe et de classe Magicien
 * sont FORCÉS, auto-posés au choix : le mod INT vit déjà à sa valeur de
 * départ — jamais figée, les assertions attendent le domaine).
 * Le bloc des caractéristiques vit DANS la fenêtre Progression (l'ancien
 * onglet a disparu) : le + / − de la cellule Niv1 de la ligne INT est un
 * geste DE LA FENÊTRE, aucune activation d'onglet ne suit pour rafraîchir
 * les sections — la fenêtre reconstruit ses sections avec l'événement,
 * les lignes "Compétence supplémentaire" (2 + mod INT du niveau de classe
 * 1) et "Langue supplémentaire" (mod INT de l'entrée d'ascendance du
 * palier 1) suivent :
 *  1. Progression ouverte : les comptes du niveau 1 valent le domaine.
 *  2. Geste réel du + de la cellule Niv1 de INT : le mod monte d'un pas,
 *     les lignes supplémentaires apparaissent SANS quitter l'onglet.
 *  3. Geste réel du − de la même cellule : le mod redescend, les lignes
 *     repartent, toujours sans activation d'onglet.
 */
TEST.RUNNER.register( "[PROGRESSION] INT au +/− de sa cellule Niv1 = lignes supplémentaires suivent sans activation", function () {
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
        TEST.ASSERT.equal( _character.getRace().getValue(), "Elfe", "Pre-condition : ascendance Elfe, obtenu : " + _character.getRace().getValue() );
        if ( _character.getRace().getValue() !== "Elfe" ) {
            return;
        }
        let _pane                          = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Progression ouvert" );
        if ( !_pane ) {
            return;
        }
        let _int                          = _character.getCharacteristics().getContentByUUID( CHARACTERISTICS.INT.key );
        let _int_pane_line                = _pane.querySelector( ".characteristic-line[data-name='INT'] .characteristic-bonus-level1 [data-name='event__more_button']" );
        TEST.ASSERT.notNull( _int_pane_line, "Pre-condition : la cellule Niv1 de INT devrait porter son + dans le panneau Progression" );
        if ( !_int_pane_line ) {
            return;
        }
        let _less_pane_line               = _pane.querySelector( ".characteristic-line[data-name='INT'] .characteristic-bonus-level1 [data-name='event__less_button']" );
        TEST.ASSERT.notNull( _less_pane_line, "Pre-condition : la cellule Niv1 de INT devrait porter son - dans le panneau Progression" );
        if ( !_less_pane_line ) {
            return;
        }
        let _expectedSkillsLines          = function () {
            let _modifier                  = _character.getCharacteristics().getContentByUUID( CHARACTERISTICS.INT.key ).getModifierValue();
            return CLASSES.getAdditionalSkillsNumber( "Magicien" ) + _modifier;
        };
        let _expectedLanguageLines        = function () {
            let _modifier                  = _character.getCharacteristics().getContentByUUID( CHARACTERISTICS.INT.key ).getModifierValue();
            return RACES.getAdditionalLanguagesNumber( "Elfe", _modifier );
        };
        let _skills_rows                   = function () {
            return _pane.querySelectorAll( ".level-up-block[data-level-number='1'] .level-up-row[data-slot-key^='" + LEVELUP.ADDITIONAL_SKILL_KEY + "']" );
        };
        let _language_rows                 = function () {
            return _pane.querySelectorAll( ".ancestry-up-block[data-ancestry-level-name='1'] .level-up-row[data-slot-key^='additional_language_']" );
        };
        let _modifier_before              = _int.getModifierValue();
        TEST.ASSERT.equal( _skills_rows().length, _expectedSkillsLines(), "Le bloc du niveau 1 devrait rendre " + _expectedSkillsLines() + " compétences supplémentaires au départ, obtenu : " + _skills_rows().length );
        TEST.ASSERT.equal( _language_rows().length, _expectedLanguageLines(), "Le bloc Elfe 1 devrait rendre " + _expectedLanguageLines() + " langues supplémentaires au départ, obtenu : " + _language_rows().length );
        // Le geste réel du + de la cellule Niv1 de INT, DANS la fenêtre
        _int_pane_line.click();
        return TEST.wait().then( function () {
            TEST.ASSERT.equal( _int.getModifierValue(), _modifier_before + 1, "Le boost de creation devrait monter le mod INT d'un pas, obtenu : " + _int.getModifierValue() + " contre avant " + _modifier_before );
            TEST.ASSERT.equal( _skills_rows().length, _expectedSkillsLines(), "La fenêtre devrait suivre SANS activation : " + _expectedSkillsLines() + " compétences supplémentaires apres le +, obtenu : " + _skills_rows().length );
            TEST.ASSERT.equal( _language_rows().length, _expectedLanguageLines(), "La fenêtre devrait suivre SANS activation : " + _expectedLanguageLines() + " langues supplémentaires apres le +, obtenu : " + _language_rows().length );
            let _newest_skill_line        = _character.getLevelHistory().getContentByUUID( "1" ).getContentByUUID( "1__" + LEVELUP.ADDITIONAL_SKILL_KEY + ( _expectedSkillsLines() - 1 ) );
            TEST.ASSERT.notNull( _newest_skill_line, "La ligne de compétence supplémentaire ajoutee devrait exister dans l'entree" );
            // Le geste réel du - : le mod redescend, les lignes repartent
            let _less_after_more            = _pane.querySelector( ".characteristic-line[data-name='INT'] .characteristic-bonus-level1 [data-name='event__less_button']" );
            TEST.ASSERT.notNull( _less_after_more, "Le - de la cellule Niv1 de INT devrait rester rendu apres la reconstruction" );
            if ( !_less_after_more ) {
                return;
            }
            _less_after_more.click();
            return TEST.wait().then( function () {
                TEST.ASSERT.equal( _int.getModifierValue(), _modifier_before, "Le retrait du boost devrait redescendre le mod INT a sa valeur de depart, obtenu : " + _int.getModifierValue() );
                TEST.ASSERT.equal( _skills_rows().length, _expectedSkillsLines(), "La fenêtre devrait suivre SANS activation : " + _expectedSkillsLines() + " compétences supplémentaires apres le -, obtenu : " + _skills_rows().length );
                TEST.ASSERT.equal( _language_rows().length, _expectedLanguageLines(), "La fenêtre devrait suivre SANS activation : " + _expectedLanguageLines() + " langues supplémentaires apres le -, obtenu : " + _language_rows().length );
                TEST.ASSERT.isNull( _character.getLevelHistory().getContentByUUID( "1" ).getContentByUUID( "1__" + LEVELUP.ADDITIONAL_SKILL_KEY + _expectedSkillsLines() ), "La ligne de compétence supplémentaire retiree ne devrait plus exister dans l'entree" );
            } );
        } );
    } );
} );
