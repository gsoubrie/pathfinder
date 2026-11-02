"use strict";
var fs = require( "fs" );
var src = fs.readFileSync( "C:/dev/workspace/Perso/Pathfinder/sheet/js/class/constant_class.js", "utf8" );
var CLASSES = new Function( src + "; return CLASSES;" )();
var lines = [];
CLASSES.ENUM.forEach( function ( c ) {
    [ "saves", "skills", "attacks", "defenses", "spells" ].forEach( function ( arr ) {
        var list = Array.isArray( c.mastery[ arr ] ) ? c.mastery[ arr ] : ( c.mastery[ arr ] ? [ c.mastery[ arr ] ] : [] );
        list.forEach( function ( l ) { lines.push( l.description ); } );
    } );
} );
var seen = {};
lines.forEach( function ( l ) { seen[ l ] = true; } );
console.log( "total lines:", lines.length, "unique:", Object.keys( seen ).length );
console.log( Object.keys( seen ).sort().join( "\n" ) );
