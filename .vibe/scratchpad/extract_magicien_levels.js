"use strict";
var fs = require( "fs" );
var src = fs.readFileSync( "C:/dev/workspace/Perso/Pathfinder/sheet/js/class/constant_class.js", "utf8" );
var CLASSES = new Function( src + "; return CLASSES;" )();
var c = CLASSES.ENUM.filter( function ( x ) { return x.name === "Magicien"; } )[ 0 ];
for ( var i = 0; i < 10; i++ ) {
    console.log( "Niveau " + ( i + 1 ) + " : " + c.capacity_by_level[ i ] );
}
