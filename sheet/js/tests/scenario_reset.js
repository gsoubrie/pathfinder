"use strict";
/**
 * Scenario : RESET
 * Reinitialisation de la feuille en cours de suite via TEST.RESET.sheet() :
 * nouveau personnage (uuid different), race vide, aucune classe, historique
 * vide, un seul groupe de fenetres dans le DOM, onglets conditionnels
 * revenus a l'etat desactive, popup fermee. C'est le point de depart des
 * scenarios qui veulent rejouer un parcours depuis un etat vierge.
 */

TEST.RUNNER.register( "[RESET] feuille reinitialisee = page vide", function () {
    let _character_before               = CONTROLLER.Character.current_character;
    let _uuid_before                    = _character_before ? _character_before.getUUID() : null;
    TEST.RESET.sheet();
    let _character                      = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Un nouveau personnage devrait etre instancie apres le reset" );
    if ( !_character ) {
        return;
    }
    TEST.ASSERT.notEqual( _character.getUUID(), _uuid_before, "Le nouveau personnage devrait avoir un uuid different" );
    TEST.ASSERT.notOk( _character.getRace().isSet(), "La race devrait etre vide apres le reset" );
    TEST.ASSERT.ok( _character.getClasses().isEmpty(), "Aucune classe ne devrait etre posee apres le reset" );
    TEST.ASSERT.equal( _character.getLevel(), 0, "Le niveau total devrait etre 0, obtenu : " + _character.getLevel() );
    TEST.ASSERT.equal( _character.getLevelHistory().getSize(), 0, "L'historique des niveaux devrait etre vide" );
    TEST.ASSERT.notOk( document.body.dataset.isRaceSet === "1", "data-is-race-set ne devrait plus etre pose apres le reset" );
    TEST.ASSERT.notOk( document.body.dataset.isClassSet === "1", "data-is-class-set ne devrait plus etre pose apres le reset" );
    TEST.ASSERT.isNull( document.querySelector( "body > .popup" ), "Aucun popup ne devrait rester ouvert apres le reset" );
    TEST.ASSERT.equal( document.querySelectorAll( ".character-sheet-windows .gs-window-group-V2" ).length, 1, "Un seul groupe de fenetres devrait exister apres le reset, obtenu : " + document.querySelectorAll( ".character-sheet-windows .gs-window-group-V2" ).length );
    TEST.ASSERT.notNull( document.querySelector( ".character-sheet-windows .save-button" ), "Le bouton sauvegarde devrait etre rendu apres le reset" );
    let _race_input                     = document.querySelector( ".characters-sheet-content .grid-area.area-race input" );
    TEST.ASSERT.notNull( _race_input, "Le champ Ascendance devrait etre rendu apres le reset" );
    if ( _race_input ) {
        TEST.ASSERT.equal( _race_input.value, "", "Le champ Ascendance devrait etre vide, obtenu : " + _race_input.value );
    }
    let _tabs                           = [
        { name: CHARACTER.CharacteristicWindow.NAME, label: "Caracteristiques" },
        { name: CHARACTER.LevelWindow.NAME,          label: "Niveau" },
        { name: CHARACTER.LevelUpWindow.NAME,        label: "Passage de niveau" }
    ];
    for ( let i = 0, _size_i = _tabs.length; i < _size_i; i++ ) {
        let _tab                         = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + _tabs[ i ].name + "']" );
        TEST.ASSERT.notNull( _tab, "L'onglet " + _tabs[ i ].label + " devrait exister apres le reset" );
        if ( !_tab ) {
            continue;
        }
        TEST.ASSERT.equal( _tab.getAttribute( "data-visibility-state" ), "disabled", "L'onglet " + _tabs[ i ].label + " devrait etre desactive apres le reset" );
        TEST.ASSERT.equal( getComputedStyle( _tab ).opacity, "0.4", "L'onglet " + _tabs[ i ].label + " devrait etre grise apres le reset, obtenu : " + getComputedStyle( _tab ).opacity );
    }
} );
