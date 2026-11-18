"use strict";
/**
 * [CHOIX-UUID] Verrou global des choix de classe : toutes les entrées de
 * CLASSES.CHOICES portent un uuid valide dans OBJECT.COMPENDIUM (sinon le
 * « ? » de l'option ne se rend pas — _hasChoiceInformation exige un uuid).
 *  1. Données pures : chaque entrée de chaque choix a un uuid indexé dans
 *     le compendium (compte calculé, jamais figé).
 *  2. Rendu UI (RESET, Elfe + Sorcier niveau 1) : la ligne "patron" du
 *     niveau 1 rend son sélecteur, chaque option porte son « ? », le clic
 *     sur le « ? » de la première option ouvre la popup compendium de son
 *     uuid, refermée par cet uuid.
 */
TEST.RUNNER.register( "[CHOIX-UUID] toutes les entrées de CLASSES.CHOICES ont un uuid compendium valide", function () {
    let _total    = 0;
    let _with_uuid = 0;
    let _invalid  = [];
    let _class_keys = Object.keys( CLASSES.CHOICES );
    for ( let c = 0, _size_c = _class_keys.length; c < _size_c; c++ ) {
        let _class_name = _class_keys[ c ];
        let _abilities  = Object.keys( CLASSES.CHOICES[ _class_name ] );
        for ( let a = 0, _size_a = _abilities.length; a < _size_a; a++ ) {
            let _entries = CLASSES.CHOICES[ _class_name ][ _abilities[ a ] ].entries;
            for ( let e = 0, _size_e = _entries.length; e < _size_e; e++ ) {
                _total++;
                if ( _entries[ e ].uuid && OBJECT.COMPENDIUM[ _entries[ e ].uuid ] ) {
                    _with_uuid++;
                }
                else {
                    _invalid.push( _class_name + "/" + _abilities[ a ] + " -> " + _entries[ e ].name );
                }
            }
        }
    }
    TEST.ASSERT.ok( _total > 0, "Pre-condition : CLASSES.CHOICES devrait porter des entrées, obtenu : " + _total );
    TEST.ASSERT.equal( _with_uuid, _total, "Chaque entrée de chaque choix devrait porter un uuid valide dans le compendium (" + _total + " attendues), invalides : " + _invalid.join( " | " ) );
} );

TEST.RUNNER.register( "[CHOIX-UUID] Sorcier 1 = ligne patron avec «?» par option, popup compendium", function () {
    TEST.RESET.sheet();
    TEST_openRacePopup();
    return TEST.clickTab( "body > .popup", "Elfe" ).then( function () {
        CONTROLLER.Character.doActionAfter( "event__form__element_changed" );
        return TEST_AjouterClasse( "Sorcier" );
    } ).then( function () {
        return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME );
    } ).then( function () {
        return TEST.wait();
    } ).then( function () {
        let _choices = CLASSES.getChoices( "Sorcier", "patron" );
        TEST.ASSERT.notNull( _choices, "Pre-condition : la classe Sorcier devrait ouvrir le choix patron" );
        if ( !_choices ) {
            return;
        }
        let _pane    = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Pre-condition : panneau Progression ouvert" );
        if ( !_pane ) {
            return;
        }
        let _row     = _pane.querySelector( ".level-up-block[data-level-number='1'] .level-up-row[data-slot-key='patron']" );
        TEST.ASSERT.notNull( _row, "La ligne patron du niveau 1 devrait etre rendue dans la Progression" );
        if ( !_row ) {
            return;
        }
        let _options = _row.querySelectorAll( ".single-select-option" );
        TEST.ASSERT.equal( _options.length, 1 + _choices.entries.length, "Le sélecteur devrait proposer l'option vide + les " + _choices.entries.length + " patrons, obtenu : " + _options.length );
        let _infos   = _row.querySelectorAll( ".single-select-option:not([data-value='']) .level-up-row-info" );
        TEST.ASSERT.equal( _infos.length, _choices.entries.length, "Chaque option de patron devrait porter son ?, obtenu : " + _infos.length );
        // Le ? de la première option ouvre la popup compendium de son uuid
        let _target  = null;
        for ( let i = 0, _size_i = _choices.entries.length; i < _size_i; i++ ) {
            if ( _choices.entries[ i ].uuid && OBJECT.COMPENDIUM[ _choices.entries[ i ].uuid ] ) {
                _target = _choices.entries[ i ];
                break;
            }
        }
        TEST.ASSERT.notNull( _target, "Pre-condition : un patron avec uuid compendium" );
        if ( !_target ) {
            return;
        }
        let _option  = _row.querySelector( ".single-select-option[data-value=" + JSON.stringify( _target.name ) + "]" );
        TEST.ASSERT.notNull( _option, "Le sélecteur devrait proposer le patron " + _target.name );
        if ( !_option ) {
            return;
        }
        let _info    = _option.querySelector( ".level-up-row-info" );
        TEST.ASSERT.notNull( _info, "L'option " + _target.name + " devrait porter son ?" );
        if ( !_info ) {
            return;
        }
        _info.click();
        let _overlay = document.querySelector( ".popup-overlay[data-current-phase='RUNNING']" );
        TEST.ASSERT.notNull( _overlay, "La popup du patron devrait s'ouvrir au clic sur le ? de l'option" );
        if ( _overlay ) {
            let _title = _overlay.querySelector( ".popup-title" );
            TEST.ASSERT.ok( _title && _title.textContent === OBJECT.COMPENDIUM[ _target.uuid ][ "text" ], "Le titre de la popup devrait etre l'entrée compendium du patron, obtenu : " + ( _title ? _title.textContent : null ) );
            CONTROLLER.Main.doActionAfter( "event__popup__close", { "param__popup__uuid": _target.uuid } );
            TEST.ASSERT.equal( _overlay.getAttribute( "data-current-phase" ), "HIDDEN_TO_STRING", "La popup du patron devrait etre masquee apres fermeture" );
        }
    } );
} );
