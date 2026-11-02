"use strict";
var fs = require( "fs" );
var src = fs.readFileSync( "C:/dev/workspace/Perso/Pathfinder/sheet/js/class/constant_class.js", "utf8" );
var CLASSES = new Function( src + "; return CLASSES;" )();
var wanted = [ "Barde", "Bretteur", "Champion", "Druide", "Enquêteur", "Ensorceleur", "Oracle", "Prêtre", "Rôdeur", "Roublard", "Sorcier", "Moine", "Guerrier" ];
CLASSES.ENUM.forEach( function ( c ) {
    if ( wanted.indexOf( c.name ) === -1 ) { return; }
    console.log( "=== " + c.name + " ===" );
    console.log( "  capacity_by_level: " + JSON.stringify( c.capacity_by_level ) );
    Object.keys( c.abilities ).forEach( function ( k ) {
        var a = c.abilities[ k ];
        var n = ( a.name || "" );
        if ( /style|muse|ordre|myst|lignage|doctrine|trafic|patron|method|devotion|cause|champ_de_recherche|instinct|colere/i.test( k ) ) {
            console.log( "  [" + k + "] " + n );
            a.description.forEach( function ( line ) { console.log( "      " + line.replace( /<[^>]+>/g, "" ).slice( 0, 500 ) ); } );
        }
    } );
} );
