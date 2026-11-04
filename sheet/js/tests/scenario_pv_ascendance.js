"use strict";
/**
 * [PV ASCENDANCE] parcours sur la chaîne (le personnage est laissé par
 * scenario_dons_ascendance : Elfe + Magicien niveau 5, don du palier 1
 * choisi) : les PV de départ de l'ascendance doivent compter UNE fois dans
 * le total du personnage (PF2 : niveau 1 = ascendance + classe + CON),
 * pas par niveau.
 */
TEST.RUNNER.register( "[PV ASCENDANCE] total = PV de départ de l'ascendance + somme des niveaux", function () {
    let _character                        = CONTROLLER.Character.current_character;
    TEST.ASSERT.notNull( _character, "Pre-condition : personnage charge" );
    if ( !_character ) {
        return;
    }
    TEST.ASSERT.equal( _character.getLevel(), 5, "Pre-condition : Magicien niveau 5, obtenu : " + _character.getLevel() );
    if ( _character.getLevel() !== 5 ) {
        return;
    }
    TEST.ASSERT.equal( _character.getRace().getValue(), "Elfe", "Pre-condition : ascendance Elfe, obtenu : " + _character.getRace().getValue() );
    if ( _character.getRace().getValue() !== "Elfe" ) {
        return;
    }
    let _con                              = _character.getCharacteristics().getContentByUUID( CHARACTERISTICS.CON.key );
    TEST.ASSERT.notNull( _con, "Pre-condition : caracteristique CON chargee" );
    if ( !_con ) {
        return;
    }
    let _levels_total                     = 0;
    for ( let _i = 0, _size_i = _character.getLevelHistory().getSize(); _i < _size_i; _i++ ) {
        let _level                        = _character.getLevelHistory().getContent( _i );
        if ( !_level.isEnabled() ) {
            continue;
        }
        _levels_total += _con.getModifierValue() + _level.life_class;
    }
    let _expected                         = RACES.getDataByName( "Elfe" ).start_life + _levels_total;
    TEST.ASSERT.ok( RACES.getDataByName( "Elfe" ).start_life > 0, "Les donnees d'Elfe devraient porter des PV de depart, obtenu : " + RACES.getDataByName( "Elfe" ).start_life );
    TEST.ASSERT.equal( _character.getHealth().getMaxHP(), _expected, "Le total PV devrait valoir les PV de depart de l'ascendance + la somme des niveaux (CON + PV de classe), obtenu : " + _character.getHealth().getMaxHP() + ", attendu : " + _expected );
    // Une seule fois : le total ne doit pas valoir la somme des niveaux
    // seule (les PV de depart oublies) ni la somme + start_life par niveau
    TEST.ASSERT.notEqual( _character.getHealth().getMaxHP(), _levels_total, "Le total PV ne devrait pas oublier les PV de depart de l'ascendance" );
} );
