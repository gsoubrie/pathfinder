const fs = require( "fs" );
let code = fs.readFileSync( "sheet/js/object/constant_objects.js", "utf8" ).replace( /"use strict";/g, "" );
code = "var OBJECT = {};\n" + code + "\n; OBJECT;";
const OBJECT = ( 0, eval )( code );
const names = [ "Branches d’émeraude", "Branches d'émeraude", "Mages de la tempête solaire", "Scribes de la pluie", "Tisseurs des flots", "Uzunjati" ];
for ( const n of names ) {
    let found = [];
    for ( const k in OBJECT.COMPENDIUM ) {
        const o = OBJECT.COMPENDIUM[ k ];
        if ( o && o.text === n ) { found.push( o.category + " " + k + " desc=" + ( o.description ? String( o.description ).length : "null" ) ); }
    }
    console.log( JSON.stringify( n ), "->", found.length ? found.join( " | " ) : "AUCUN" );
}
