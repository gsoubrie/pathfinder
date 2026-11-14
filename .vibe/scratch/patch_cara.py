# -*- coding: utf-8 -*-
import io, sys
base = r"C:/dev/workspace/Perso/Pathfinder/sheet/js/tests"
p = base + "/scenario_caracteristiques.js"
s = io.open(p, encoding="utf-8").read()

BADGE_SEL = 'TEST_caracteristiquesBadge()'
old_doc = """ * Scenario : CARACTERISTIQUES
 * Depart : feuille vide (TEST.RESET.sheet()). Ajout de la race Elfe via le
 * popup, puis travail dans l'onglet Caracteristiques.
 * Elfe : bonus forces DEX et INT, malus force CON, 1 bonus libre (choice FREE).
"""
new_doc = """ * Scenario : CARACTERISTIQUES
 * Depart : feuille vide (TEST.RESET.sheet()). Ajout de la race Elfe via le
 * popup, puis travail dans la grille des caracteristiques, en tete de
 * l'onglet Progression (l'ancien onglet Caracteristiques a fusionne dedans :
 * le badge de l'onglet vaut la SOMME des compteurs du contenu, bonus libres
 * + lignes de progression en attente).
 * Elfe : bonus forces DEX et INT, malus force CON, 1 bonus libre (choice FREE).
"""
assert old_doc in s
s = s.replace(old_doc, new_doc)

old_step7 = """ * 7. Pose des 2 libres sur FOR puis DEX : compteur "1" puis masque ; contraste :
 *    le - du bonus pose reste actif, le + est attenue.
 */
"""
new_step7 = """ * 7. Pose des 2 libres sur FOR puis DEX : compteur 1 puis masque ; contraste :
 *    le - du bonus pose reste actif, le + est attenue.
 */

function TEST_caracteristiquesBadge() {
    return ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .gs-counter.gs-warnings-counter";
}

// Le badge vaut la SOMME des compteurs du contenu de la Progression : les
// bonus de caracteristiques en attente + les lignes de progression non
// validees (don d'ascendance, langues)
function TEST_caracteristiquesBadgeExpected( character_object ) {
    let _expected            = character_object.getCharacteristics().getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
    let _ancestry_history    = character_object.getAncestryHistory();
    for ( let i = 0, _size_i = _ancestry_history.getSize(); i < _size_i; i++ ) {
        let _entry           = _ancestry_history.getContent( i );
        for ( let l = 0, _size_l = _entry.getSize(); l < _size_l; l++ ) {
            if ( !_entry.getContent( l ).isActive() ) {
                _expected++;
            }
        }
    }
    let _levels_history      = character_object.getLevelHistory();
    for ( let i = 0, _size_i = _levels_history.getSize(); i < _size_i; i++ ) {
        let _entry           = _levels_history.getContent( i );
        for ( let l = 0, _size_l = _entry.getSize(); l < _size_l; l++ ) {
            if ( !_entry.getContent( l ).isActive() ) {
                _expected++;
            }
        }
    }
    return _expected;
}

function TEST_caracteristiquesBadgeNumber( character_object ) {
    let _expected = TEST_caracteristiquesBadgeExpected( character_object );
    return _expected === 0 ? "" : "" + _expected;
}
"""
assert old_step7 in s
s = s.replace(old_step7, new_step7)

assert "CHARACTER.CharacteristicWindow.NAME" in s
s = s.replace("CHARACTER.CharacteristicWindow.NAME", "CHARACTER.LevelUpWindow.NAME")

def swap(old, new):
    global s
    assert old in s, old[:80]
    s = s.replace(old, new, 1)

# t1 badge after Elfe
swap(
'''        TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), "1", "Le compteur d'onglet devrait afficher 1 choix de bonus de race en attente, obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );
        TEST.ASSERT.equal( _counter.textContent, "1", "Le libelle du compteur devrait afficher 1, obtenu : [" + _counter.textContent + "]" );''',
'''        TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), TEST_caracteristiquesBadgeNumber( _character ), "Le badge devrait valoir la somme des compteurs de la Progression, obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );''')

# t1 wait before badge
swap(
'''        TEST.ASSERT.equal( _character.getCharacteristics().getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ), 1, "Le compteur warning devrait valoir 1 : un choix de bonus de race en attente" );
        return TEST.wait();''',
'''        TEST.ASSERT.equal( _character.getCharacteristics().getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ), 1, "Le compteur warning devrait valoir 1 : un choix de bonus de race en attente" );
        return TEST.waitCounterValue( document.querySelector( TEST_caracteristiquesBadge() ), TEST_caracteristiquesBadgeNumber( _character ) );''')

# t3 badge block
swap(
'''    return TEST.wait().then( function () {
        let _counter                   = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
        if ( !_counter ) {
            TEST.ASSERT.notNull( _counter, "Le compteur warning devrait exister sur l'onglet (.gs-warnings-counter)" );
            return;
        }
        TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), "", "Le compteur d'onglet devrait etre vide une fois le choix fait, obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );
        TEST.ASSERT.equal( getComputedStyle( _counter ).display, "none", "Le compteur vide devrait etre masque, obtenu : " + getComputedStyle( _counter ).display );
    } );
} );''',
'''    return TEST.waitCounterValue( document.querySelector( TEST_caracteristiquesBadge() ), TEST_caracteristiquesBadgeNumber( _character ) ).then( function () {
        let _counter                   = document.querySelector( TEST_caracteristiquesBadge() );
        TEST.ASSERT.notNull( _counter, "Le compteur warning devrait exister sur l'onglet (.gs-warnings-counter)" );
        TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), TEST_caracteristiquesBadgeNumber( _character ), "Le badge devrait valoir la somme des compteurs de la Progression (les lignes en attente restent), obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );
    } );
} );''')

# t4 mid badge
swap(
'''        let _counter                   = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
        if ( !_counter ) {
            TEST.ASSERT.notNull( _counter, "Le compteur warning devrait exister sur l'onglet (.gs-warnings-counter)" );
            return;
        }
        TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), "1", "Le compteur d'onglet devrait reafficher 1 choix en attente, obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );''',
'''        let _counter                   = document.querySelector( TEST_caracteristiquesBadge() );
        if ( !_counter ) {
            TEST.ASSERT.notNull( _counter, "Le compteur warning devrait exister sur l'onglet (.gs-warnings-counter)" );
            return;
        }
        TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), TEST_caracteristiquesBadgeNumber( _character ), "Le badge devrait valoir la somme des compteurs de la Progression, obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );''')

# t4 wait before mid badge
swap(
'''    TEST.ASSERT.equal( _character.getCharacteristics().getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ), 1, "Le compteur warning devrait reafficher 1 choix en attente apres le retrait du bonus" );
    return TEST.wait().then( function () {''',
'''    TEST.ASSERT.equal( _character.getCharacteristics().getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ), 1, "Le compteur warning devrait reafficher 1 choix en attente apres le retrait du bonus" );
    return TEST.waitCounterValue( document.querySelector( TEST_caracteristiquesBadge() ), TEST_caracteristiquesBadgeNumber( _character ) ).then( function () {''')

# t4 final badge
swap(
'''    } ).then( function () {
        let _counter_after             = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
        if ( !_counter_after ) {
            TEST.ASSERT.notNull( _counter_after, "Le compteur warning devrait exister sur l'onglet (.gs-warnings-counter)" );
            return;
        }
        TEST.ASSERT.equal( _counter_after.getAttribute( "data-number" ), "", "Le compteur d'onglet devrait etre vide apres le nouveau choix, obtenu : [" + _counter_after.getAttribute( "data-number" ) + "]" );
        TEST.ASSERT.equal( getComputedStyle( _counter_after ).display, "none", "Le compteur vide devrait etre masque, obtenu : " + getComputedStyle( _counter_after ).display );
    } );
} );''',
'''    } ).then( function () {
        return TEST.waitCounterValue( document.querySelector( TEST_caracteristiquesBadge() ), TEST_caracteristiquesBadgeNumber( _character ) );
    } ).then( function () {
        let _counter_after             = document.querySelector( TEST_caracteristiquesBadge() );
        TEST.ASSERT.notNull( _counter_after, "Le compteur warning devrait exister sur l'onglet (.gs-warnings-counter)" );
        TEST.ASSERT.equal( _counter_after.getAttribute( "data-number" ), TEST_caracteristiquesBadgeNumber( _character ), "Le badge devrait valoir la somme des compteurs de la Progression, obtenu : [" + _counter_after.getAttribute( "data-number" ) + "]" );
    } );
} );''')

# t6 Humain wait + badge
swap(
'''        TEST.ASSERT.equal( _character.getCharacteristics().getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ), 2, "Le compteur warning devrait valoir 2 : les 2 choix libres Humain en attente" );
        return TEST.wait();''',
'''        TEST.ASSERT.equal( _character.getCharacteristics().getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ), 2, "Le compteur warning devrait valoir 2 : les 2 choix libres Humain en attente" );
        return TEST.waitCounterValue( document.querySelector( TEST_caracteristiquesBadge() ), TEST_caracteristiquesBadgeNumber( _character ) );''')

swap(
'''        else {
            TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), "2", "Le compteur d'onglet devrait afficher 2 choix libres Humain en attente, obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );
        }''',
'''        else {
            TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), TEST_caracteristiquesBadgeNumber( _character ), "Le badge devrait valoir la somme des compteurs de la Progression, obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );
        }''')

# t7 badge "1"
swap(
'''        TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), "1", "Le compteur d'onglet devrait afficher 1 choix restant apres le premier bonus, obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );''',
'''        TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), TEST_caracteristiquesBadgeNumber( _character ), "Le badge devrait valoir la somme des compteurs de la Progression, obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );''')

swap(
'''    TEST.ASSERT.equal( _character.getCharacteristics().getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ), 1, "Le compteur warning devrait descendre a 1 apres le premier bonus" );
    return TEST.wait().then( function () {''',
'''    TEST.ASSERT.equal( _character.getCharacteristics().getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ), 1, "Le compteur warning devrait descendre a 1 apres le premier bonus" );
    return TEST.waitCounterValue( document.querySelector( TEST_caracteristiquesBadge() ), TEST_caracteristiquesBadgeNumber( _character ) ).then( function () {''')

swap(
'''        TEST.ASSERT.equal( _character.getCharacteristics().getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ), 0, "Le compteur warning devrait revenir a 0 une fois les 2 choix faits" );
        return TEST.wait();''',
'''        TEST.ASSERT.equal( _character.getCharacteristics().getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ), 0, "Le compteur warning devrait revenir a 0 une fois les 2 choix faits" );
        return TEST.waitCounterValue( document.querySelector( TEST_caracteristiquesBadge() ), TEST_caracteristiquesBadgeNumber( _character ) );''')

swap(
'''    } ).then( function () {
        let _counter_after             = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
        if ( !_counter_after ) {
            TEST.ASSERT.notNull( _counter_after, "Le compteur warning devrait exister sur l'onglet (.gs-warnings-counter)" );
            return;
        }
        TEST.ASSERT.equal( _counter_after.getAttribute( "data-number" ), "", "Le compteur d'onglet devrait etre vide une fois les 2 choix faits, obtenu : [" + _counter_after.getAttribute( "data-number" ) + "]" );
        TEST.ASSERT.equal( getComputedStyle( _counter_after ).display, "none", "Le compteur vide devrait etre masque, obtenu : " + getComputedStyle( _counter_after ).display );
        let _for_less                  = _pane.querySelector( ".characteristic-line[data-name='FOR'] .characteristic-bonus-race [data-name='event__less_button']" );''',
'''    } ).then( function () {
        let _counter_after             = document.querySelector( TEST_caracteristiquesBadge() );
        TEST.ASSERT.notNull( _counter_after, "Le compteur warning devrait exister sur l'onglet (.gs-warnings-counter)" );
        TEST.ASSERT.equal( _counter_after.getAttribute( "data-number" ), TEST_caracteristiquesBadgeNumber( _character ), "Le badge devrait valoir la somme des compteurs de la Progression, obtenu : [" + _counter_after.getAttribute( "data-number" ) + "]" );
        let _for_less                  = _pane.querySelector( ".characteristic-line[data-name='FOR'] .characteristic-bonus-race [data-name='event__less_button']" );''')

io.open(p, "w", encoding="utf-8", newline="\n").write(s)
print("caracteristiques OK")
