"use strict";

/**
 * Cleans the scraped data files: the icon class names of the source site got
 * glued to the following word during the scrap ("casinoDiplomatie",
 * "crop_freeémanation", "auto_awesomeÀ trois temps"). Re-run after every
 * re-scrap. Node: node sheet/tools/clean_scraped_text.js [--dry]
 */

var fs = require( "fs" );

// Snake-cased icon names: they never occur in French text, removed anywhere
var RAW_ICONS = [
    "sports_martial_arts",
    "sentiment_very_dissatisfied",
    "auto_awesome",
    "military_tech",
    "crop_free"
];

// Single-word icon names: removed only when glued to the following word
var GLUED_ICONS = [
    "casino",
    "flare",
    "work"
];

var FILES = [
    "sheet/js/gift/constant_gift_class.js",
    "sheet/js/gift/constant_gift_skill.js",
    "sheet/js/gift/constant_gift_general.js",
    "sheet/js/gift/constant_gift_race.js",
    "sheet/js/class/constant_class.js",
    "sheet/js/object/constant_skill_actions.js"
];

var dry_run = process.argv.indexOf( "--dry" ) !== -1;
var raw_re   = new RegExp( RAW_ICONS.join( "|" ), "g" );
var glued_re = new RegExp( "\\b(?:" + GLUED_ICONS.join( "|" ) + ")(?=[(A-Za-z0-9\u00C0-\u017F])", "g" );
// The icon glued right after an escaped newline: the "n" of the \n sequence
// kills the word boundary
var escaped_re = new RegExp( "(\\\\n)(?:" + GLUED_ICONS.join( "|" ) + ")(?=[A-Z\u00C0-\u017F])", "g" );

FILES.forEach( function ( file_path ) {
    var content = fs.readFileSync( file_path, "utf8" );
    var raw_hits   = content.match( raw_re ) || [];
    content        = content.replace( raw_re, "" );
    var escaped_hits = content.match( escaped_re ) || [];
    content        = content.replace( escaped_re, "$1" );
    var glued_hits = content.match( glued_re ) || [];
    content        = content.replace( glued_re, "" );
    if ( raw_hits.length === 0 && glued_hits.length === 0 && escaped_hits.length === 0 ) {
        console.log( file_path + " : propre" );
        return;
    }
    console.log( file_path + " : " + raw_hits.length + " icones pleines, " + escaped_hits.length + " apres retour ligne, " + glued_hits.length + " collees" );
    if ( !dry_run ) {
        fs.writeFileSync( file_path, content );
    }
} );
if ( dry_run ) {
    console.log( "(dry run : rien n'a ete ecrit)" );
}
