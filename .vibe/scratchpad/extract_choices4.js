"use strict";
var fs = require( "fs" );
var src = fs.readFileSync( "C:/dev/workspace/Perso/Pathfinder/sheet/js/class/constant_class.js", "utf8" );
var CLASSES = new Function( src + "; return CLASSES;" )();
CLASSES.ENUM.forEach( function ( c ) {
    if ( [ "Magicien", "Sorcier" ].indexOf( c.name ) === -1 ) { return; }
    Object.keys( c.abilities ).forEach( function ( k ) {
        var a = c.abilities[ k ];
        if ( /these|patrons/.test( k ) ) {
            console.log( "=== " + c.name + " [" + k + "] " + ( a.name || "?" ) );
            a.description.forEach( function ( line ) { console.log( "      " + line.replace( /<[^>]+>/g, "" ).slice( 0, 150 ) ); } );
        }
    } );
} );
