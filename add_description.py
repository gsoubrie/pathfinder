# -*- coding: utf-8 -*-
import io

# --- feuille de la fenêtre : la description vit entre les traits et le
#     commentaire, coupee aux QUATRE lignes ---
p = 'sheet/css/sheet/sheet_spells.css'
s = io.open(p, newline='', encoding='utf-8').read()

old = '    grid-template-columns : 40px minmax(150px, 220px) 42px minmax(120px, 1.1fr) minmax(90px, 0.6fr) 16px;'
new = '''    grid-template-columns : 40px minmax(150px, 220px) 42px minmax(100px, 1fr) minmax(200px, 1.6fr) minmax(80px, 0.6fr) 16px;'''
assert old in s
s = s.replace(old, new)

old = '''.spells-col-comment {
    grid-column: 5;
    min-width   : 0;
}

.spells-col-actions {
    grid-column: 6;
    text-align  : center;
}'''
new = '''/* La description scrapée se coupe aux QUATRE lignes (line-clamp) : la
   cellule grandit en hauteur, les longues fiches se lisent seules, le « ? »
   rend la description complete */
.spells-col-description {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    display           : -webkit-box;
    font-size         : 12px;
    grid-column       : 5;
    line-height       : 15px;
    min-width         : 0;
    overflow          : hidden;
}

.spells-col-comment {
    grid-column: 6;
    min-width   : 0;
}

.spells-col-actions {
    grid-column: 7;
    text-align  : center;
}'''
assert old in s
s = s.replace(old, new)
io.open(p, 'w', newline='', encoding='utf-8').write(s)
print('css ok')

# --- la fenêtre : entête + cellule description dans l'ordre des colonnes ---
p = 'sheet/js/character/character_windows/spells_window.js'
s = io.open(p, newline='', encoding='utf-8').read()

old = '            { "column": "traits",  "label": "Traits" },\n            { "column": "comment", "label": "Commentaire" },'
new = '            { "column": "traits",  "label": "Traits" },\n            { "column": "description", "label": "Description" },\n            { "column": "comment", "label": "Commentaire" },'
assert old in s
s = s.replace(old, new)

old = '''        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
            class: "spells-entry-comment spells-col-comment",
            "title": spell.comment || ""
        }, spell.comment || "" ), entry );'''
new = '''        // The scraped description reads as PLAIN text cut at four lines
        // (line-clamp) : the text travels by textContent, never by
        // innerHTML — the " ?" renders the whole description with its
        // clickable links
        let description_dom = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
            class: "spells-entry-description spells-col-description"
        } ), entry );
        if ( spell_data && spell_data[ "description" ] ) {
            description_dom.textContent = spell_data[ "description" ].replace( /<[^>]*>/g, " " ).replace( /\\s+/g, " " ).trim();
        }
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
            class: "spells-entry-comment spells-col-comment",
            "title": spell.comment || ""
        }, spell.comment || "" ), entry );'''
assert old in s
s = s.replace(old, new)
io.open(p, 'w', newline='', encoding='utf-8').write(s)
print('window ok')

# --- scenario : la colonne verrouillee sur Bouclier ---
p = 'sheet/js/tests/scenario_sorts.js'
s = io.open(p, newline='', encoding='utf-8').read()

old = '''        TEST.ASSERT.equal( _entry.querySelector( ".spells-entry-comment" ).textContent, "Gardé pour le boss", "Le commentaire devrait se lire dans sa colonne, obtenu : [" + _entry.querySelector( ".spells-entry-comment" ).textContent + "]" );'''
new = old + '''
        let _section_header_titles = _cantrip_section.querySelectorAll( ".spells-entries-header-title" );
        TEST.ASSERT.equal( _section_header_titles.length, 7, "L'entete du repertoire devrait porter ses colonnes (cout, sort, rang, traits, description, commentaire, actions), obtenu : " + _section_header_titles.length );
        let _section_description_cell = _entry.querySelector( ".spells-entry-description" );
        TEST.ASSERT.ok( _section_description_cell ? _section_description_cell.textContent.length > 0 : false, "La description scrapee de Bouclier devrait se lire dans SA colonne, obtenu : [" + ( _section_description_cell ? _section_description_cell.textContent.substring( 0, 60 ) : "absente" ) + "]" );
        TEST.ASSERT.equal( _section_description_cell ? getComputedStyle( _section_description_cell ).webkitLineClamp : null, "4", "La description du repertoire devrait se couper aux QUATRE lignes (line-clamp), obtenu : [" + ( _section_description_cell ? getComputedStyle( _section_description_cell ).webkitLineClamp : "null" ) + "]" );'''
assert old in s
s = s.replace(old, new)
io.open(p, 'w', newline='', encoding='utf-8').write(s)
print('scenario ok')
