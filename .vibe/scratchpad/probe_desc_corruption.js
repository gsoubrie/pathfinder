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
var samples = [];
var counts = {};
files.forEach( function ( fp ) {
    var content = fs.readFileSync( base + fp, "utf8" );
    var desc_re = /"(?:[^"\\]|\\.)*"/g;
    var m;
    while ( ( m = desc_re.exec( content ) ) !== null ) {
        var text = m[ 0 ];
        if ( text.indexOf( "gs_link" ) !== -1 ) { counts[ fp + ":gs_link" ] = ( counts[ fp + ":gs_link" ] || 0 ) + 1; }
        if ( text.indexOf( "auto_awesome" ) !== -1 ) { counts[ fp + ":auto_awesome" ] = ( counts[ fp + ":auto_awesome" ] || 0 ) + 1; }
        if ( text.indexOf( "casino" ) !== -1 ) { counts[ fp + ":casino" ] = ( counts[ fp + ":casino" ] || 0 ) + 1; }
        if ( text.indexOf( "crop_free" ) !== -1 ) { counts[ fp + ":crop_free" ] = ( counts[ fp + ":crop_free" ] || 0 ) + 1; }
        if ( text.indexOf( "sports_martial" ) !== -1 ) { counts[ fp + ":sports" ] = ( counts[ fp + ":sports" ] || 0 ) + 1; }
        if ( text.indexOf( "sentiment_very" ) !== -1 ) { counts[ fp + ":sentiment" ] = ( counts[ fp + ":sentiment" ] || 0 ) + 1; }
        if ( text.indexOf( "military_tech" ) !== -1 ) { counts[ fp + ":military" ] = ( counts[ fp + ":military" ] || 0 ) + 1; }
        if ( text.indexOf( "flare" ) !== -1 ) { counts[ fp + ":flare" ] = ( counts[ fp + ":flare" ] || 0 ) + 1; }
        if ( text.indexOf( "work" ) !== -1 ) { counts[ fp + ":work" ] = ( counts[ fp + ":work" ] || 0 ) + 1; }
        if ( samples.length < 6 && ( text.indexOf( "gs_link" ) !== -1 || text.indexOf( "casino" ) !== -1 || text.indexOf( "crop_free" ) !== -1 ) ) {
            samples.push( fp + "\n  " + text.slice( 0, 420 ) );
        }
    }
} );
console.log( JSON.stringify( counts, null, 1 ) );
console.log( "--- samples ---" );
console.log( samples.join( "\n" ) );
