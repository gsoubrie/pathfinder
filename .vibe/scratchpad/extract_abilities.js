"use strict";
var fs = require( "fs" );
var src = fs.readFileSync( "C:/dev/workspace/Perso/Pathfinder/sheet/js/class/constant_class.js", "utf8" );
var CLASSES = new Function( src + "; return CLASSES;" )();
CLASSES.ENUM.forEach( function ( c ) {
    console.log( "=== " + c.name + " ===" );
    if ( !c.abilities ) { console.log( "(no abilities)" ); return; }
    Object.keys( c.abilities ).forEach( function ( k ) {
        var a = c.abilities[ k ];
        var extra = [];
        if ( a.choices ) { extra.push( "CHOICES:" + JSON.stringify( a.choices ).slice( 0, 400 ) ); }
        if ( a.options ) { extra.push( "OPTIONS:" + JSON.stringify( a.options ).slice( 0, 400 ) ); }
        if ( a.uuid ) { extra.push( "uuid:" + a.uuid ); }
        console.log( "  " + k + " (" + ( a.name || "?" ) + ")" + ( extra.length ? " " + extra.join( " " ) : "" ) );
    } );
} );
