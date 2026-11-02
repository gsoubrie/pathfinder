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
var glued = {};
var samples = [];
files.forEach( function ( file_path ) {
    var content = fs.readFileSync( base + file_path, "utf8" );
    // strings in description arrays: "..." values
    var desc_re = /"(?:[^"\\]|\\.)*"/g;
    var m;
    while ( ( m = desc_re.exec( content ) ) !== null ) {
        var text = m[ 0 ];
        var token_re = /([a-z][a-z0-9]*(?:_[a-z0-9]+)*)(?=[A-Z\u00C0-\u00DE])/g;
        var t;
        while ( ( t = token_re.exec( text ) ) !== null ) {
            var token = t[ 1 ];
            if ( token.length < 3 ) { continue; }
            glued[ token ] = ( glued[ token ] || 0 ) + 1;
            if ( samples.length < 40 ) {
                samples.push( token + "  <<<  " + text.slice( Math.max( 0, t.index - 40 ), Math.min( text.length, t.index + 60 ) ) );
            }
        }
    }
} );
console.log( "--- tokens glued to a CAPITAL inside strings, by frequency ---" );
Object.keys( glued ).sort( function ( a, b ) { return glued[ b ] - glued[ a ]; } ).forEach( function ( k ) { console.log( k + " : " + glued[ k ] ); } );
console.log( "--- samples ---" );
console.log( samples.join( "\n" ) );
