"use strict";
var fs = require( "fs" );

// selector -> lines to delete inside its block (matched on trimmed text)
var targets = {
    "popup/popup.css": {
        ".popup .edition-property-popup .title"                        : [ "font-weight: bold;", ],
        ".popup .edition-property-popup .title .popup-up-actions .button": [ "font-weight: var(--font-weight-bold);", ],
        ".popup .container-skill-label"                                : [ "font-weight: var(--font-weight-bold);", ],
        ".popup .container-skill-characteristic"                       : [ "font-weight: var(--font-weight-bold);", "text-transform: uppercase;" ],
        ".popup .gs-tab-pane[data-name]::before"                       : [ "font-weight: bold;", "text-transform: uppercase;" ],
        ".popup .edition-property .label"                               : [ "font-weight: var(--font-weight-bold);", "text-transform: uppercase;" ],
        ".popup .gs-window-element-V2 .gs-label"                         : [ "font-weight: var(--font-weight-bold);", ],
        ".archetype-trait"                                              : [ "font-weight: var(--font-weight-bold);", "text-transform: uppercase;" ],
        ".archetype-skills-title"                                       : [ "font-weight: var(--font-weight-bold);", "text-transform: uppercase;" ],
        ".archetype-skill-name"                                         : [ "font-weight: var(--font-weight-bold);", ],
        ".archetype-skill-level"                                        : [ "font-weight: var(--font-weight-bold);", ],
        ".archetype-skill-required-label"                               : [ "font-weight: var(--font-weight-bold);", ],
        ".archetype-req-tag"                                            : [ "font-weight: var(--font-weight-bold);", ]
    },
    "popup/popup_class.css": {
        ".class-stat-hp .stat-chip-label"        : [ "text-transform: uppercase;" ],
        ".class-stat-mastery .stat-chip-label"    : [ "text-transform: uppercase;" ],
        ".class-section-title"                    : [ "font-weight : bold;", "text-transform : uppercase;" ],
        ".class-role-label"                        : [ "font-weight : bold;", "text-transform : uppercase;" ],
        ".class-personality-heading"               : [ "font-weight : bold;", "text-transform : uppercase;" ],
        ".class-mastery-group-title"               : [ "font-weight : bold;", "text-transform : uppercase;" ],
        ".class-mastery-badge"                     : [ "font-weight : bold;", "text-transform : uppercase;" ],
        ".class-ability-name"                      : [ "font-weight : bold;" ],
        ".class-ability-level"                     : [ "font-weight : bold;" ]
    },
    "popup/popup_object.css": {
        ".popup-category-label"      : [ "font-weight : 700;", "text-transform : uppercase;" ],
        ".popup-title"               : [ "font-weight : 700;", "text-transform : uppercase;" ],
        ".popup-level-badge"         : [ "font-weight : 600;" ],
        ".popup-badge"               : [ "font-weight : 700;", "text-transform : uppercase;" ],
        ".popup-section-title"       : [ "font-weight : 700;", "text-transform : uppercase;" ],
        ".popup-description strong"  : [ "font-weight : 600;" ]
    }
};

Object.keys( targets ).forEach( function ( file_path ) {
    var full_path = "C:/dev/workspace/Perso/Pathfinder/sheet/css/" + file_path;
    var raw       = fs.readFileSync( full_path, "utf8" );
    var lines     = raw.split( String.fromCharCode( 10 ) ).map( function ( line ) {
        return line.charAt( line.length - 1 ) === String.fromCharCode( 13 ) ? line.slice( 0, -1 ) : line;
    } );
    var eol        = raw.indexOf( String.fromCharCode( 13 ) ) !== -1 ? "\r\n" : "\n";
    var selectors = targets[ file_path ];
    var current   = null;
    var removed   = 0;
    var kept      = [];
    for ( var i = 0; i < lines.length; i++ ) {
        var line   = lines[ i ];
        var trimmed = line.split( " " ).filter( Boolean ).join( " " );
        if ( current === null && trimmed.charAt( trimmed.length - 1 ) === "{" ) {
            var selector = trimmed.slice( 0, -1 ).trim();
            // only leave the block scope at its closing brace
            current = { selector: selector, in_block: true };
            kept.push( line );
            continue;
        }
        if ( current !== null && trimmed === "}" ) {
            current = null;
            kept.push( line );
            continue;
        }
        if ( current !== null && selectors[ current.selector ] && selectors[ current.selector ].indexOf( trimmed ) !== -1 ) {
            removed++;
            continue;
        }
        kept.push( line );
    }
    fs.writeFileSync( full_path, kept.join( eol ) );
    console.log( file_path + " : " + removed + " lignes retirees" );
} );
