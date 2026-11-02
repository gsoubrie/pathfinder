"use strict";
var fs = require( "fs" );
var full_path = "C:/dev/workspace/Perso/Pathfinder/sheet/css/style.css";
var raw   = fs.readFileSync( full_path, "utf8" );
var eol   = raw.indexOf( String.fromCharCode( 13 ) ) !== -1 ? "\r\n" : "\n";
var lines = raw.split( String.fromCharCode( 10 ) ).map( function ( line ) {
    return line.charAt( line.length - 1 ) === String.fromCharCode( 13 ) ? line.slice( 0, -1 ) : line;
} );
var kept   = [];
for ( var i = 0; i < lines.length; i++ ) {
    var line = lines[ i ];
    if ( line === "    overflow: hidden;" ) {
        // .character-content: the paper becomes a column flex, the content zone can take the remaining height
        kept.push( "    display: flex;" );
        kept.push( "    flex-direction: column;" );
        kept.push( line );
        continue;
    }
    if ( line === "    padding: var(--s-xl);" ) {
        kept.push( "    flex: 1;" );
        kept.push( "    min-height: 0;" );
        kept.push( "    overflow: hidden;" );
        kept.push( line );
        continue;
    }
    kept.push( line );
}
fs.writeFileSync( full_path, kept.join( eol ) );
console.log( "style.css patched" );
