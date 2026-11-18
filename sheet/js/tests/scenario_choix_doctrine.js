"use strict";
/**
 * [DOCTRINE] suite indépendante (RESET en tête) : Elfe + Prêtre niveau 1,
 * la ligne "doctrine" de l'entrée 1 rend son sélecteur avec un "?" par
 * option (les entrées de CHOICES portent leur uuid compendium) et le "?"
 * de la valeur choisie à côté du sélecteur ; le clic sur un "?" ouvre la
 * popup class-feature de la doctrine.
 */

function TEST_openRacePopup() {
    MANAGER.EventManagerV2.doActionAfter(
        { target: document.querySelector( ".grid-area.area-race input" ), button: 0, stopPropagation: function () {} },
        "event__property_popup__open",
        { "property_name": "race" }
    );
}

function TEST_openClassPopup() {
    MANAGER.EventManagerV2.doActionAfter(
        { target: document.querySelector( ".grid-area.area-class .class-add-button" ), button: 0, stopPropagation: function () {} },
        "event__property_popup__open",
        { "property_name": "class" }
    );
}

TEST.RUNNER.register( "[DOCTRINE] setup : Elfe + Prêtre niveau 1, ligne doctrine rendue", function () {
    TEST.RESET.sheet();
    let _character   = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge apres reset" );
    if ( !_character ) {
        return;
    }
    TEST_openRacePopup();
    return TEST.clickTab( "body > .popup", "Elfe" ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        TEST.ASSERT.equal( _character.getRace().getValue(), "Elfe", "Pre-condition : race Elfe posee, obtenu : " + _character.getRace().getValue() );
        TEST_openClassPopup();
        return TEST.clickTab( "body > .popup", "Prêtre" );
    } ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        TEST.ASSERT.equal( _character.getClasses().getContentByUUID( "Prêtre" ).getLevel(), 1, "Pre-condition : Prêtre pose niveau 1" );
        TEST.ASSERT.equal( _character.getLevel(), 1, "Pre-condition : niveau total 1, obtenu : " + _character.getLevel() );
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME );
    } ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _row     = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-row[data-slot-key='doctrine']" );
        TEST.ASSERT.notNull( _row, "La ligne doctrine de l'entrée 1 devrait etre rendue" );
        if ( !_row ) {
            return;
        }
        let _side_info = _row.querySelector( ".single-select-container ~ .level-up-row-info" );
        TEST.ASSERT.notNull( _side_info, "La ligne doctrine devrait porter le ? de la valeur choisie à côté du sélecteur" );
        let _options = _row.querySelectorAll( ".single-select-option" );
        TEST.ASSERT.ok( _options.length >= 3, "Le sélecteur devrait porter l'option vide + les deux doctrines, obtenu : " + _options.length );
        let _infos   = _row.querySelectorAll( ".single-select-option .level-up-row-info" );
        TEST.ASSERT.equal( _infos.length, 2, "Chaque option de doctrine devrait porter son ?, obtenu : " + _infos.length );
    } );
} );

TEST.RUNNER.register( "[DOCTRINE] ? de l'option Prêtre cloîtré → popup class-feature ouverte", function () {
    let _row         = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-row[data-slot-key='doctrine']" );
    TEST.ASSERT.notNull( _row, "Pre-condition : ligne doctrine rendue" );
    if ( !_row ) {
        return;
    }
    let _option      = _row.querySelector( ".single-select-option[data-value='Prêtre cloîtré']" );
    TEST.ASSERT.notNull( _option, "Pre-condition : option Prêtre cloîtré" );
    if ( !_option ) {
        return;
    }
    let _info        = _option.querySelector( ".level-up-row-info" );
    TEST.ASSERT.notNull( _info, "L'option Prêtre cloîtré devrait porter son ?" );
    if ( !_info ) {
        return;
    }
    _info.click();
    let _overlay     = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
    TEST.ASSERT.notNull( _overlay, "Le clic sur le ? de l'option devrait ouvrir la popup de la doctrine" );
    if ( _overlay ) {
        let _title   = _overlay.querySelector( ".popup-title" );
        TEST.ASSERT.ok( _title && _title.textContent === "Prêtre cloîtré", "Le titre de la popup devrait etre la doctrine, obtenu : " + ( _title ? _title.textContent : null ) );
        CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": "ZZzLMOUAtBVgV1DF" } );
        TEST.ASSERT.equal( _overlay.getAttribute( "data-current-phase" ), "HIDDEN_TO_STRING", "La popup de la doctrine devrait etre masquee apres fermeture" );
    }
} );

TEST.RUNNER.register( "[DOCTRINE] choix Prêtre combattant → ? de la valeur choisie ouvre sa popup", function () {
    let _row         = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-row[data-slot-key='doctrine']" );
    TEST.ASSERT.notNull( _row, "Pre-condition : ligne doctrine rendue" );
    if ( !_row ) {
        return;
    }
    let _option      = _row.querySelector( ".single-select-option[data-value='Prêtre combattant']" );
    TEST.ASSERT.notNull( _option, "Pre-condition : option Prêtre combattant" );
    if ( !_option ) {
        return;
    }
    _option.click();
    return TEST.wait( 300 ).then( function () {
        TEST.ASSERT.equal( _row.dataset.currentPhase, "SELECTED", "Le choix de la doctrine devrait valider la ligne, obtenu : " + _row.dataset.currentPhase );
        let _side_info = _row.querySelector( ".single-select-container ~ .level-up-row-info" );
        TEST.ASSERT.notNull( _side_info, "Le ? de la valeur choisie devrait exister apres le choix" );
        if ( !_side_info ) {
            return;
        }
        TEST.ASSERT.equal( _side_info.getAttribute( "data-value" ), "Prêtre combattant", "Le ? de la valeur choisie devrait porter la doctrine choisie, obtenu : [" + _side_info.getAttribute( "data-value" ) + "]" );
        _side_info.click();
        let _overlay   = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
        TEST.ASSERT.notNull( _overlay, "Le clic sur le ? de la valeur choisie devrait ouvrir la popup de la doctrine" );
        if ( _overlay ) {
            let _title = _overlay.querySelector( ".popup-title" );
            TEST.ASSERT.ok( _title && _title.textContent === "Prêtre combattant", "Le titre de la popup devrait etre la doctrine choisie, obtenu : " + ( _title ? _title.textContent : null ) );
            CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": "0Aocw3igLwna9cjp" } );
        }
    } );
} );

TEST.RUNNER.register( "[DOCTRINE] ligne divinité = sélecteur des divinités, choix → case Général + popup", function () {
    let _character   = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    TEST.ASSERT.equal( _character.getClasses().getContentByUUID( "Prêtre" ) ? 1 : 0, 1, "Pre-condition : Prêtre pose" );
    let _deities     = OBJECT.getKnownDeities();
    TEST.ASSERT.ok( _deities.length > 10, "Pre-condition : les divinités devraient etre nombreuses, obtenu : " + _deities.length );
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _row     = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-row[data-slot-key='divinite']" );
        TEST.ASSERT.notNull( _row, "La ligne divinité de l'entrée 1 devrait etre rendue" );
        if ( !_row ) {
            return;
        }
        let _options = _row.querySelectorAll( ".single-select-option" );
        TEST.ASSERT.equal( _options.length, _deities.length + 1, "Le sélecteur devrait porter l'option vide + toutes les divinités, attendu : " + ( _deities.length + 1 ) + ", obtenu : " + _options.length );
        let _infos   = _row.querySelectorAll( ".single-select-option:not([data-value='']) .level-up-row-info" );
        TEST.ASSERT.equal( _infos.length, _deities.length, "Chaque option de divinité devrait porter son ?, obtenu : " + _infos.length );
        let _target  = _deities[ 0 ];
        let _option  = null;
        for ( let i = 0, _size_i = _options.length; i < _size_i; i++ ) {
            if ( _options[ i ].getAttribute( "data-value" ) === _target.name ) {
                _option = _options[ i ];
            }
        }
        TEST.ASSERT.notNull( _option, "L'option de la première divinité devrait exister" );
        if ( !_option ) {
            return;
        }
        _option.click();
        return TEST.wait( 300 ).then( function () {
            TEST.ASSERT.equal( _row.dataset.currentPhase, "SELECTED", "Le choix de la divinité devrait valider la ligne, obtenu : " + _row.dataset.currentPhase );
            let _line = _character.getLevelHistory().getContentByUUID( "1" ).getContentByUUID( "1__divinite" );
            TEST.ASSERT.equal( _line ? _line.getSelectedValue() : null, _target.name, "La ligne devrait porter la divinité choisie, obtenu : " + ( _line ? _line.getSelectedValue() : null ) );
            TEST.ASSERT.equal( _character.getDeityChoice().name, _target.name, "Le domaine devrait retourner la divinité choisie, obtenu : " + JSON.stringify( _character.getDeityChoice() ) );
            return TEST.clickTab( ".character-sheet-windows", CHARACTER.GeneralWindow.NAME );
        } ).then( function () {
            return TEST.wait();
        } ).then( function () {
            let _input = document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.GeneralWindow.NAME + "'] .area-deity input.deity-link" );
            TEST.ASSERT.notNull( _input, "La case Divinité du Général devrait exister" );
            if ( !_input ) {
                return;
            }
            TEST.ASSERT.equal( _input.value, _target.name, "La case Divinité devrait afficher la divinité choisie, obtenu : [" + _input.value + "]" );
            TEST.ASSERT.equal( _input.getAttribute( "data-uuid" ), _target.uuid, "La case devrait porter l'uuid de la divinité, obtenu : [" + _input.getAttribute( "data-uuid" ) + "]" );
            _input.click();
            let _overlay = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
            TEST.ASSERT.notNull( _overlay, "Le clic sur la case Divinité devrait ouvrir sa popup" );
            if ( _overlay ) {
                let _title = _overlay.querySelector( ".popup-title" );
                TEST.ASSERT.ok( _title && _title.textContent === _target.name, "Le titre de la popup devrait etre la divinité, obtenu : " + ( _title ? _title.textContent : null ) );
                CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": _target.uuid } );
            }
        } );
    } );
} );

TEST.RUNNER.register( "[DOCTRINE] divinité : données structurées FR (sorts divins, armes de prédilection) + popup", function () {
    // Une divinité "riche" (sorts divins + armes de prédilection), calculée
    // depuis les données — jamais figée
    let _deities = OBJECT.getKnownDeities();
    let _rich    = null;
    for ( let i = 0, _size_i = _deities.length; i < _size_i; i++ ) {
        let _data = OBJECT.getDeityInformation( _deities[ i ].name );
        if ( _data && ( _data.deity_spells || [] ).length > 0 && ( _data.deity_weapons || [] ).length > 0 ) {
            _rich = { "name": _deities[ i ].name, "uuid": _deities[ i ].uuid, "data": _data };
            break;
        }
    }
    TEST.ASSERT.notNull( _rich, "Pre-condition : une divinité avec sorts divins et armes de prédilection" );
    if ( !_rich ) {
        return;
    }
    let _data = _rich.data;
    TEST.ASSERT.ok( ( _data.deity_attribute || [] ).length > 0, "La divinité devrait porter ses attributs, obtenu : " + JSON.stringify( _data.deity_attribute ) );
    TEST.ASSERT.ok( ( _data.deity_skill || [] ).length > 0, "La divinité devrait porter sa compétence, obtenu : " + JSON.stringify( _data.deity_skill ) );
    TEST.ASSERT.ok( _data.deity_domains && ( _data.deity_domains.primary || [] ).length > 0, "La divinité devrait porter ses domaines primaires" );
    TEST.ASSERT.ok( ( _data.deity_font || [] ).length > 0, "La divinité devrait porter sa font divine" );
    for ( let s = 0, _size_s = _data.deity_spells.length; s < _size_s; s++ ) {
        TEST.ASSERT.ok( typeof _data.deity_spells[ s ].rank === "number" && !!_data.deity_spells[ s ].name && !!_data.deity_spells[ s ].uuid, "Chaque sort divin devrait porter rang + nom FR + uuid, obtenu : " + JSON.stringify( _data.deity_spells[ s ] ) );
    }
    // La popup rend les champs structurés, un lien cliquable par sort divin
    CONTROLLER.Main.doActionAfter( "event__show_information", { "param__object__uuid": _rich.uuid } );
    let _overlay = document.querySelector( ".popup-overlay[data-popup-uuid='" + _rich.uuid + "'][data-current-phase='RUNNING']" );
    TEST.ASSERT.notNull( _overlay, "La popup de la divinité devrait s'ouvrir (RUNNING)" );
    if ( !_overlay ) {
        return;
    }
    TEST.ASSERT.ok( !!_overlay.querySelector( ".popup-header--deity" ), "Le header devrait porter la catégorie divinité" );
    let _meta = {};
    let _rows = _overlay.querySelectorAll( ".popup-item-stats .popup-meta-row" );
    for ( let r = 0, _size_r = _rows.length; r < _size_r; r++ ) {
        let _label = _rows[ r ].querySelector( ".popup-meta-label" );
        let _value = _rows[ r ].querySelector( ".popup-meta-value" );
        if ( _label && _value ) {
            _meta[ _label.textContent ] = _value.textContent;
        }
    }
    TEST.ASSERT.equal( _meta[ "Attributs" ] || null, _data.deity_attribute.join( ", " ), "La ligne Attributs devrait lister les boosts, obtenu : [" + _meta[ "Attributs" ] + "]" );
    TEST.ASSERT.equal( _meta[ "Armes de prédilection" ] || null, _data.deity_weapons.join( ", " ), "La ligne Armes de prédilection devrait lister les armes FR, obtenu : [" + _meta[ "Armes de prédilection" ] + "]" );
    TEST.ASSERT.equal( _meta[ "Font divine" ] || null, _data.deity_font.join( ", " ), "La ligne Font divine, obtenu : [" + _meta[ "Font divine" ] + "]" );
    TEST.ASSERT.ok( ( _meta[ "Domaines" ] || "" ).indexOf( _data.deity_domains.primary[ 0 ] ) !== -1, "La ligne Domaines devrait citer le premier domaine primaire, obtenu : [" + _meta[ "Domaines" ] + "]" );
    let _spell_rows = _overlay.querySelectorAll( ".popup-deity-spells .popup-meta-row" );
    TEST.ASSERT.equal( _spell_rows.length, _data.deity_spells.length, "Une ligne par sort divin, attendu : " + _data.deity_spells.length + ", obtenu : " + _spell_rows.length );
    let _link = _spell_rows.length ? _spell_rows[ 0 ].querySelector( ".gs-link-information" ) : null;
    TEST.ASSERT.notNull( _link, "Le premier sort divin devrait etre un lien cliquable" );
    if ( !_link ) {
        CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": _rich.uuid } );
        return;
    }
    TEST.ASSERT.equal( _link.textContent, _data.deity_spells[ 0 ].name, "Le lien devrait porter le nom FR du sort, obtenu : [" + _link.textContent + "]" );
    let _first_spell = _data.deity_spells[ 0 ];
    _link.click();
    return TEST.wait().then( function () {
        let _spell_overlay = document.querySelector( ".popup-overlay[data-popup-uuid='" + _first_spell.uuid + "'][data-current-phase='RUNNING']" );
        TEST.ASSERT.notNull( _spell_overlay, "Le clic sur le sort divin devrait ouvrir sa popup" );
        if ( _spell_overlay ) {
            let _spell_title = _spell_overlay.querySelector( ".popup-title" );
            TEST.ASSERT.equal( _spell_title ? _spell_title.textContent : null, _first_spell.name, "La popup du sort devrait porter son nom, obtenu : [" + ( _spell_title ? _spell_title.textContent : "null" ) + "]" );
            CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": _first_spell.uuid } );
        }
        CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": _rich.uuid } );
    } );
} );

TEST.RUNNER.register( "[DOCTRINE] ajustement Divinité gagne toujours sur la Progression", function () {
    let _character   = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    let _deities     = OBJECT.getKnownDeities();
    let _progression = _character.getDeityChoice();
    TEST.ASSERT.ok( _progression, "Pre-condition : une divinité choisie en Progression, obtenu : " + JSON.stringify( _progression ) );
    if ( !_progression ) {
        return;
    }
    let _override    = null;
    for ( let i = 0, _size_i = _deities.length; i < _size_i; i++ ) {
        if ( _deities[ i ].name !== _progression.name ) {
            _override = _deities[ i ];
            break;
        }
    }
    TEST.ASSERT.notNull( _override, "Pre-condition : une autre divinité disponible" );
    if ( !_override ) {
        return;
    }
    return TEST.clickTab( ".character-sheet-windows", CHARACTER.AdjustmentsWindow.NAME ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _section = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.AdjustmentsWindow.NAME + "'] .adjustments-section[data-kind='deity']" );
        TEST.ASSERT.notNull( _section, "La section Divinité devrait exister dans l'onglet Ajustements" );
        if ( !_section ) {
            return;
        }
        let _options = _section.querySelectorAll( ".single-select-option" );
        TEST.ASSERT.equal( _options.length, _deities.length + 1, "Le sélecteur de la section Divinité devrait porter toutes les divinités, obtenu : " + _options.length );
        let _option  = null;
        for ( let i = 0, _size_i = _options.length; i < _size_i; i++ ) {
            if ( _options[ i ].getAttribute( "data-value" ) === _override.name ) {
                _option = _options[ i ];
            }
        }
        TEST.ASSERT.notNull( _option, "L'option de la divinité de remplacement devrait exister" );
        if ( !_option ) {
            return;
        }
        _option.click();
        let _add = _section.querySelector( ".adjustments-add-button" );
        TEST.ASSERT.notNull( _add, "Le bouton + de la ligne d'ajout devrait exister" );
        if ( !_add ) {
            return;
        }
        _add.click();
        return TEST.wait( 300 );
    } ).then( function () {
        TEST.ASSERT.ok( _character.getAdjustments().getValuesByKind( "deity" ).indexOf( _override.name ) !== -1, "L'ajustement Divinité devrait etre posé, obtenu : " + JSON.stringify( _character.getAdjustments().getValuesByKind( "deity" ) ) );
        TEST.ASSERT.equal( _character.getDeityChoice().name, _override.name, "L'ajustement devrait écraser la Progression, obtenu : " + JSON.stringify( _character.getDeityChoice() ) );
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.GeneralWindow.NAME );
    } ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _input = document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.GeneralWindow.NAME + "'] .area-deity input.deity-link" );
        TEST.ASSERT.notNull( _input, "La case Divinité devrait exister" );
        if ( _input ) {
            TEST.ASSERT.equal( _input.value, _override.name, "La case Divinité devrait afficher l'ajustement (qui gagne), obtenu : [" + _input.value + "]" );
        }
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.AdjustmentsWindow.NAME );
    } ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _entry = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.AdjustmentsWindow.NAME + "'] .adjustments-entry[data-kind='deity'] .adjustments-entry-remove" );
        TEST.ASSERT.notNull( _entry, "Le × de l'entrée Divinité devrait exister" );
        if ( !_entry ) {
            return;
        }
        _entry.click();
        return TEST.wait( 300 );
    } ).then( function () {
        TEST.ASSERT.equal( _character.getAdjustments().getValuesByKind( "deity" ).length, 0, "L'ajustement Divinité devrait etre retiré" );
        TEST.ASSERT.equal( _character.getDeityChoice().name, _progression.name, "Apres retrait, la Progression devrait reprendre la main, obtenu : " + JSON.stringify( _character.getDeityChoice() ) );
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.GeneralWindow.NAME );
    } ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _input = document.querySelector( ".property-tab-pane[data-name='" + CHARACTER.GeneralWindow.NAME + "'] .area-deity input.deity-link" );
        TEST.ASSERT.notNull( _input, "La case Divinité devrait exister" );
        if ( _input ) {
            TEST.ASSERT.equal( _input.value, _progression.name, "La case Divinité devrait réafficher la divinité de la Progression, obtenu : [" + _input.value + "]" );
        }
    } );
} );
