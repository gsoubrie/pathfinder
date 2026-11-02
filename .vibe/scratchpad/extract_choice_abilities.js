"use strict";
var fs = require( "fs" );
var src = fs.readFileSync( "C:/dev/workspace/Perso/Pathfinder/sheet/js/class/constant_class.js", "utf8" );
var CLASSES = new Function( src + "; return CLASSES;" )();
var wanted = {
    "Alchimiste"  : [ "champ_de_recherche" ],
    "Barbare"     : [ "instinct" ],
    "Barde"       : [ "muses" ],
    "Bretteur"    : [ "style_de_bretteur" ],
    "Champion"    : [ "devotion", "cause" ],
    "Druide"      : [ "ordre_druuidique", "ordre" ],
    "Enquêteur"   : [ "methodologie" ],
    "Ensorceleur" : [ "lignage" ],
    "Oracle"      : [ "mystere" ],
    "Prêtre"      : [ "doctrine" ],
    "Rôdeur"      : [ "proie", "discipline" ],
    "Roublard"    : [ "trafic_de_roublard" ],
    "Sorcier"     : [ "patron" ]
};
CLASSES.ENUM.forEach( function ( c ) {
    if ( !wanted[ c.name ] ) { return; }
    console.log( "=== " + c.name + " ===" );
    if ( !c.abilities ) { console.log( "(no abilities)" ); return; }
    Object.keys( c.abilities ).forEach( function ( k ) {
        var a = c.abilities[ k ];
        console.log( "  [" + k + "] " + ( a.name || "?" ) );
        if ( a.description ) {
            a.description.forEach( function ( line ) { console.log( "      " + line.replace( /<[^>]+>/g, "" ).slice( 0, 700 ) ); } );
        }
    } );
} );
