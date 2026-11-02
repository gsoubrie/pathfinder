"use strict";
var fs = require( "fs" );
var base = "C:/dev/workspace/Perso/Pathfinder/";
var files = [
    "sheet/js/gift/constant_gift_class.js",
    "sheet/js/gift/constant_gift_skill.js",
    "sheet/js/gift/constant_gift_race.js",
    "sheet/js/gift/constant_gift_general.js",
    "sheet/js/class/constant_class.js",
    "sheet/js/object/constant_skill_actions.js"
];
var found = {};
files.forEach( function ( fp ) {
    var c = fs.readFileSync( base + fp, "utf8" );
    var re = /\[([a-z][a-z0-9_]{2,30})\]/g;
    var m;
    while ( ( m = re.exec( c ) ) !== null ) {
        found[ m[ 1 ] ] = ( found[ m[ 1 ] ] || 0 ) + 1;
    }
} );
Object.keys( found ).sort().forEach( function ( k ) { console.log( k + " : " + found[ k ] ); } );
