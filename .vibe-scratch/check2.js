const fs = require( "fs" );
let code = fs.readFileSync( "sheet/js/object/constant_objects.js", "utf8" ).replace( /"use strict";/g, "" );
code = "var OBJECT = {};\n" + code + "\n; OBJECT;";
const OBJECT = ( 0, eval )( code );
function key( t ) {
    return String( t || "" ).toLowerCase().normalize( "NFD" ).replace( /[̀-ͯ]/g, "" )
        .replace( /œ/g, "oe" ).replace( /æ/g, "ae" ).replace( /aux\b/g, "al" )
        .replace( /s\b/g, "" ).replace( /\s+/g, " " ).trim();
}
const idx = {};
for ( const k in OBJECT.COMPENDIUM ) { const o = OBJECT.COMPENDIUM[ k ]; if ( o && o.text ) { const kk = key( o.text ); ( idx[ kk ] = idx[ kk ] || [] ).push( o ); } }
for ( const n of [ "Tisseurs des flots", "Affiliation aux Tisseurs des flots", "Uzunjati", "Affiliation aux Uzunjati" ] ) {
    const r = idx[ key( n ) ] || [];
    console.log( JSON.stringify( n ), "->", r.length ? r.map( x => x.category + " " + x.text + " desc=" + ( x.description ? String( x.description ).length : "null" ) ).join( " | " ) : "AUCUN" );
}
