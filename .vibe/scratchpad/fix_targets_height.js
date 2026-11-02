"use strict";
var fs = require( "fs" );
var full_path = "C:/dev/workspace/Perso/Pathfinder/sheet/css/style.css";
var raw       = fs.readFileSync( full_path, "utf8" );
var eol       = raw.indexOf( String.fromCharCode( 13 ) ) !== -1 ? "\r\n" : "\n";
var anchor    = ".characters-sheet-content {" + eol + "    flex: 1;" + eol + "    min-height: 0;" + eol + "    overflow: hidden;" + eol + "    padding: var(--s-xl);" + eol + "}";
if ( raw.indexOf( anchor ) === -1 ) {
    console.log( "ANCHOR NOT FOUND" );
    process.exit( 1 );
}
var addition = anchor + eol + eol +
    ".characters-sheet-content .gs-window-targets-V2 {" + eol +
    "    height: 100%;" + eol +
    "}";
fs.writeFileSync( full_path, raw.replace( anchor, addition ) );
console.log( "style.css: targets container bounded" );
