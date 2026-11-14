# -*- coding: utf-8 -*-
import io
p = r"C:/dev/workspace/Perso/Pathfinder/sheet/js/tests/scenario_caracteristiques_classe.js"
s = io.open(p, encoding="utf-8").read()

def swap(old, new):
    global s
    assert old in s, old[:80]
    s = s.replace(old, new, 1)

swap(""" * Le passage de niveau 1 d'une classe ajoute des bonus dans la colonne Classe
 * de l'onglet Caracteristiques. Deux formes de donnees :""",
""" * Le passage de niveau 1 d'une classe ajoute des bonus dans la colonne Classe
 * de la grille des caracteristiques, en tete de l'onglet Progression (le
 * badge de l'onglet vaut la somme des compteurs du contenu, helper du
 * scenario caracteristiques). Deux formes de donnees :""")

assert "CHARACTER.CharacteristicWindow.NAME" in s
s = s.replace("CHARACTER.CharacteristicWindow.NAME", "CHARACTER.LevelUpWindow.NAME")

# t1 Magicien : badge "1" -> dynamic (after class popup validation)
swap("""        TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), "1", "Le compteur d'onglet devrait afficher 1 : le bonus libre de la race en attente, obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );""",
"""        TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), TEST_caracteristiquesBadgeNumber( _character ), "Le badge devrait valoir la somme des compteurs de la Progression (bonus libres + lignes en attente), obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );""")

# t1 : the clickTab then badge read needs convergence afterwards -> wrap : insert waitCounterValue before the panneau read
swap("""        return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME );
    } ).then( function () {
        let _pane                       = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Caracteristiques devrait exister" );
        if ( !_pane ) {
            return;
        }
        let _int_final                  = _pane.querySelector( ".characteristic-line[data-name='INT'] .characteristic-final-value" );""",
"""        return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
            return TEST.waitCounterValue( document.querySelector( TEST_caracteristiquesBadge() ), TEST_caracteristiquesBadgeNumber( _character ) );
        } );
    } ).then( function () {
        let _pane                       = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Progression devrait exister (grille en tete)" );
        if ( !_pane ) {
            return;
        }
        let _int_final                  = _pane.querySelector( ".characteristic-line[data-name='INT'] .characteristic-final-value" );""")

# t2 Champion : badge "2" -> dynamic
swap("""        TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), "2", "Le compteur d'onglet devrait afficher 2 : 1 libre de race + 1 libre de classe, obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );""",
"""        TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), TEST_caracteristiquesBadgeNumber( _character ), "Le badge devrait valoir la somme des compteurs de la Progression (bonus libres + lignes en attente), obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );""")

swap("""        return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME );
    } ).then( function () {
        let _pane                       = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Caracteristiques devrait exister" );
        if ( !_pane ) {
            return;
        }
        let _candidates                = [ "FOR", "DEX" ];""",
"""        return TEST.clickTab( ".character-sheet-windows", CHARACTER.LevelUpWindow.NAME ).then( function () {
            return TEST.waitCounterValue( document.querySelector( TEST_caracteristiquesBadge() ), TEST_caracteristiquesBadgeNumber( _character ) );
        } );
    } ).then( function () {
        let _pane                       = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "']" );
        TEST.ASSERT.notNull( _pane, "Le panneau Progression devrait exister (grille en tete)" );
        if ( !_pane ) {
            return;
        }
        let _candidates                = [ "FOR", "DEX" ];""")

# t3 : wait + badge "1" -> dynamic
swap("""    TEST.ASSERT.equal( _character.getCharacteristics().getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ), 1, "Le compteur warning devrait redescendre a 1 : le libre de race" );
    return TEST.wait().then( function () {""",
"""    TEST.ASSERT.equal( _character.getCharacteristics().getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ), 1, "Le compteur warning devrait redescendre a 1 : le libre de race" );
    return TEST.waitCounterValue( document.querySelector( TEST_caracteristiquesBadge() ), TEST_caracteristiquesBadgeNumber( _character ) ).then( function () {""")

swap("""        TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), "1", "Le compteur d'onglet devrait afficher 1 : le libre de race restant, obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );""",
"""        TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), TEST_caracteristiquesBadgeNumber( _character ), "Le badge devrait valoir la somme des compteurs de la Progression, obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );""")

# t4 : wait + badge "2" -> dynamic
swap("""    TEST.ASSERT.equal( _character.getCharacteristics().getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ), 2, "Le compteur warning devrait remonter a 2 apres le retrait" );
    return TEST.wait().then( function () {""",
"""    TEST.ASSERT.equal( _character.getCharacteristics().getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ), 2, "Le compteur warning devrait remonter a 2 apres le retrait" );
    return TEST.waitCounterValue( document.querySelector( TEST_caracteristiquesBadge() ), TEST_caracteristiquesBadgeNumber( _character ) ).then( function () {""")

swap("""        TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), "2", "Le compteur d'onglet devrait reafficher 2 apres le retrait, obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );""",
"""        TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), TEST_caracteristiquesBadgeNumber( _character ), "Le badge devrait valoir la somme des compteurs de la Progression, obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );""")

# badge selectors via helper
s = s.replace('document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name=\'" + CHARACTER.LevelUpWindow.NAME + "\'] .gs-counter.gs-warnings-counter" )', 'document.querySelector( TEST_caracteristiquesBadge() )')

io.open(p, "w", encoding="utf-8", newline="\n").write(s)
print("classe OK")
