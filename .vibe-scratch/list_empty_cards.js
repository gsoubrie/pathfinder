// Liste les cartes de la Bibliothèque qui restent sans description même
// avec le repli compendium (entrée scrapée vide + aucune entrée compendium
// de même nom avec description)
const fs = require( "fs" );
const ROOT = "C:\\dev\\workspace\\Perso\\Pathfinder\\";
let code = "var DON={}, ARCHETYPES={}, HISTORICS={}, OBJECT={};\n";
const files = [
    "sheet/js/gift/constant_gift_general.js",
    "sheet/js/gift/constant_gift_class.js",
    "sheet/js/gift/constant_gift_race.js",
    "sheet/js/gift/constant_gift_skill.js",
    "sheet/js/archetype/constant_archetype.js",
    "sheet/js/historics/constant_historic.js",
    "sheet/js/object/constant_objects.js"
];
for ( const f of files ) {
    code += fs.readFileSync( ROOT + f, "utf8" ).replace( /"use strict";/g, "" )
        .replace( /var (DON|ARCHETYPES|HISTORICS|OBJECT) =/g, "$1 =" ) + "\n";
}
code += "; [DON, ARCHETYPES, HISTORICS, OBJECT];";
const [ DON, ARCHETYPES, HISTORICS, OBJECT ] = ( 0, eval )( code );

function key( t ) {
    return String( t || "" ).toLowerCase().normalize( "NFD" ).replace( /[̀-ͯ]/g, "" )
        .replace( /œ/g, "oe" ).replace( /æ/g, "ae" ).replace( /aux\b/g, "al" )
        .replace( /s\b/g, "" ).replace( /\s+/g, " " ).trim();
}
const nameIndex = {};
for ( const k in OBJECT.COMPENDIUM ) {
    const o = OBJECT.COMPENDIUM[ k ];
    if ( o && o.text ) {
        const kk = key( o.text );
        ( nameIndex[ kk ] = nameIndex[ kk ] || [] ).push( o );
    }
}
function compDesc( name ) {
    const r = nameIndex[ key( name ) ] || [];
    const e = r.find( x => x.description );
    return e ? e.description : null;
}
function emptyDesc( d ) {
    return !d || ( Array.isArray( d ) && !d.length ) || ( typeof d === "string" && !d.trim() );
}
// DON lists: check all feat entries too
let out = [];
function scanFeats( list, label ) {
    for ( const g of ( Array.isArray( list ) ? list : [] ) ) {
        for ( const it of ( Array.isArray( g ) ? g : [ g ] ) ) {
            if ( it && it.name && emptyDesc( it.description ) && !compDesc( it.name ) ) {
                out.push( label + ": " + it.name );
            }
        }
    }
}
scanFeats( DON.GENERAL.ENUM, "DON-general" );
scanFeats( DON.CLASS.ENUM, "DON-class" );
scanFeats( DON.RACE.ENUM, "DON-race" );
scanFeats( DON.SKILL.ENUM, "DON-skill" );
for ( const a of ARCHETYPES.ENUM ) {
    for ( const s of ( a.skills || [] ) ) {
        if ( s.name && emptyDesc( s.description ) && !compDesc( s.name ) ) {
            out.push( "DON-archetype [" + a.name + "]: " + s.name );
        }
    }
    if ( a.name && emptyDesc( a.description ) && !compDesc( a.name ) ) {
        out.push( "ARCHETYPE: " + a.name );
    }
}
for ( const h of HISTORICS.ENUM ) {
    if ( h.name && emptyDesc( h.description ) && !compDesc( h.name ) ) {
        out.push( "HISTORIC: " + h.name );
    }
}
console.log( "Cartes sans description même avec repli compendium :" );
console.log( out.join( "\n" ) || "(aucune)" );
console.log( "total : " + out.length );
