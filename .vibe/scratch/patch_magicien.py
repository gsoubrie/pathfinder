# -*- coding: utf-8 -*-
import io
p = r"C:/dev/workspace/Perso/Pathfinder/sheet/js/tests/scenario_levelup_magicien.js"
s = io.open(p, encoding="utf-8").read()

def swap(old, new):
    global s
    assert old in s, old[:100]
    s = s.replace(old, new, 1)

EXPECTED = '( 5 + _additional_count + _ancestry_pending_count )'

# S1 : label + badge fixed read -> convergence (fin du test take_level n5)
swap('''        let _warning                      = _pane.querySelector( ".level-up-global-warning" );
        TEST.ASSERT.ok( _warning && _warning.textContent.indexOf( ( 5 + _additional_count + _ancestry_pending_count ) + " capacités non validées" ) !== -1, "Le warning global devrait annoncer " + ( 5 + _additional_count + _ancestry_pending_count ) + " capacités non validées (5 capacités + compétences supplémentaires + don et langues d'ascendance en attente), obtenu : " + ( _warning ? _warning.textContent : "aucun" ) );
        let _counter                      = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
        TEST.ASSERT.notNull( _counter, "L'onglet Progression devrait porter le counter warnings (.gs-warnings-counter)" );
        if ( _counter ) {
            TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), "" + ( 5 + _additional_count + _ancestry_pending_count ), "Le counter de l'onglet devrait valoir " + ( 5 + _additional_count + _ancestry_pending_count ) + " (5 capacités + compétences supplémentaires + don et langues d'ascendance en attente), obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );
            TEST.ASSERT.notEqual( getComputedStyle( _counter ).display, "none", "Le counter devrait etre visible quand des capacités sont en attente, obtenu : " + getComputedStyle( _counter ).display );
        }''',
'''        // Le label global a disparu avec sa classe : le badge de l'onglet
        // porte LA SEULE lecture de la somme des compteurs
        let _counter                      = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
        TEST.ASSERT.notNull( _counter, "L'onglet Progression devrait porter le counter warnings (.gs-warnings-counter)" );
        return TEST.waitCounterValue( _counter, "" + ( 5 + _additional_count + _ancestry_pending_count ) ).then( function () {
            TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), "" + ( 5 + _additional_count + _ancestry_pending_count ), "Le counter de l'onglet devrait valoir " + ( 5 + _additional_count + _ancestry_pending_count ) + " (5 capacités + compétences supplémentaires + don et langues d'ascendance en attente), obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );
            TEST.ASSERT.notEqual( getComputedStyle( _counter ).display, "none", "Le counter devrait etre visible quand des capacités sont en attente, obtenu : " + getComputedStyle( _counter ).display );
        } );''')

# S2 : label "4+..." (badge convergence existe deja juste apres)
swap('''            let _warning                      = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-global-warning" );
            TEST.ASSERT.ok( _warning && _warning.textContent.indexOf( ( 4 + _additional_count + _ancestry_pending_count ) + " capacités non validées" ) !== -1, "Le warning global devrait annoncer " + ( 4 + _additional_count + _ancestry_pending_count ) + " capacités non validées apres la première validation, obtenu : " + ( _warning ? _warning.textContent : "aucun" ) );
            let _counter                      = document.querySelector''',
'''            let _counter                      = document.querySelector''')

# S3 : label "5+..." + badge fixed read
swap('''        let _warning                      = document.querySelector( ".gs-tab-pane[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .level-up-global-warning" );
        TEST.ASSERT.ok( _warning && _warning.textContent.indexOf( ( 5 + _additional_count + _ancestry_pending_count ) + " capacités non validées" ) !== -1, "Le warning global devrait annoncer de nouveau " + ( 5 + _additional_count + _ancestry_pending_count ) + " capacités non validées, obtenu : " + ( _warning ? _warning.textContent : "aucun" ) );
        let _counter                      = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
        TEST.ASSERT.notNull( _counter, "L'onglet Progression devrait porter le counter warnings" );
        if ( _counter ) {
            TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), "" + ( 5 + _additional_count + _ancestry_pending_count ), "Le counter de l'onglet devrait etre de retour a " + ( 5 + _additional_count + _ancestry_pending_count ) + ", obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );
        }''',
'''        let _counter                      = document.querySelector( ".character-sheet-windows .gs-window-element-V2[data-name='" + CHARACTER.LevelUpWindow.NAME + "'] .gs-counter.gs-warnings-counter" );
        TEST.ASSERT.notNull( _counter, "L'onglet Progression devrait porter le counter warnings" );
        return TEST.waitCounterValue( _counter, "" + ( 5 + _additional_count + _ancestry_pending_count ) ).then( function () {
            TEST.ASSERT.equal( _counter.getAttribute( "data-number" ), "" + ( 5 + _additional_count + _ancestry_pending_count ), "Le counter de l'onglet devrait etre de retour a " + ( 5 + _additional_count + _ancestry_pending_count ) + ", obtenu : [" + _counter.getAttribute( "data-number" ) + "]" );
        } );''')

# S4 : label "Toutes les capacités sont validées"
swap('''        let _warning                      = _pane.querySelector( ".level-up-global-warning" );
        TEST.ASSERT.ok( _warning && _warning.textContent.indexOf( "Toutes les capacités sont validées" ) !== -1, "Le warning global devrait annoncer que toutes les capacités sont validées (don et langues d'ascendance compris), obtenu : " + ( _warning ? _warning.textContent : "aucun" ) );
        TEST.ASSERT.notOk( _warning.classList.contains( "visible" ), "Le warning global ne devrait plus porter la classe visible" );
        let _counter                      = document.querySelector''',
'''        let _counter                      = document.querySelector''')

io.open(p, "w", encoding="utf-8", newline="\n").write(s)
print("magicien OK")
