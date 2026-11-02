"use strict";
var fs = require( "fs" );
var base = "C:/dev/workspace/Perso/Pathfinder/sheet/js/";
var files = [
    "gift/constant_gift_class.js",
    "gift/constant_gift_skill.js",
    "gift/constant_gift_general.js",
    "gift/constant_gift_race.js",
    "class/constant_class.js",
    "object/constant_skill_actions.js"
];
var snake = {};
var glued = {};
files.forEach( function ( file_path ) {
    var content = fs.readFileSync( base + file_path, "utf8" );
    var m;
    var snake_re = /([a-z][a-z0-9]*(?:_[a-z0-9]+)+)(?=[A-Za-zÀ-ÿà-ÿ])/g;
    while ( ( m = snake_re.exec( content ) ) !== null ) {
        snake[ m[ 1 ] ] = ( snake[ m[ 1 ] ] || 0 ) + 1;
    }
    var glued_re = /([a-z]{4,})(?=[A-ZÀ-ÿ])/g;
    while ( ( m = glued_re.exec( content ) ) !== null ) {
        glued[ m[ 1 ] ] = ( glued[ m[ 1 ] ] || 0 ) + 1;
    }
} );
console.log( "--- snake_case tokens glued to a following word ---" );
Object.keys( snake ).sort().forEach( function ( k ) { console.log( k + " : " + snake[ k ] ); } );
console.log( "--- lowercase words glued to a CAPITAL (single-word icon suspects) ---" );
Object.keys( glued ).sort().forEach( function ( k ) { console.log( k + " : " + glued[ k ] ); } );
