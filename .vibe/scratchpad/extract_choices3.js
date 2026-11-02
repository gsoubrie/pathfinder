"use strict";
var fs = require( "fs" );
var src = fs.readFileSync( "C:/dev/workspace/Perso/Pathfinder/sheet/js/class/constant_class.js", "utf8" );
var CLASSES = new Function( src + "; return CLASSES;" )();
CLASSES.ENUM.forEach( function ( c ) {
    if ( [ "Alchimiste", "Barbare", "Magicien", "Rôdeur", "Enquêteur", "Ensorceleur" ].indexOf( c.name ) === -1 ) { return; }
    console.log( "=== " + c.name + " level1: " + c.capacity_by_level[ 0 ] );
    Object.keys( c.abilities ).forEach( function ( k ) {
        var a = c.abilities[ k ];
        if ( /methodologie|lignage|specialite|sp_cialit|chasseur|patrons/.test( k ) ) {
            console.log( "  [" + k + "] " + ( a.name || "?" ) );
            a.description.forEach( function ( line ) { console.log( "      " + line.replace( /<[^>]+>/g, "" ).slice( 0, 200 ) ); } );
        }
    } );
} );
