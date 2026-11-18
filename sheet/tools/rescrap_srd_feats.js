"use strict";

/**
 * Scraps the feats of the SRD site (pathfinder-fr.org/srd/pf2/dons/, source
 * repo mirrored on GitHub pathfinder-fr/pf2-jekyll, folder _dons/*.md) and
 * emits the compendium entries for every feat whose NAME is missing from
 * the scraped compendium: sheet/js/object/constant_objects_srd.js (generated,
 * never edit by hand — it only Object.assign's NEW keys, an existing id is
 * never overwritten: when the Foundry uuid is already indexed under another
 * name, the SRD entry gets the derived id "srd__<slug>").
 * Local cache: sheet/tools/.scrap_cache/srd/ (git-ignored). When the cache
 * is empty the GitHub archive of the repo is downloaded and untarred.
 * Node: node sheet/tools/rescrap_srd_feats.js [--dry]
 */

var fs   = require( "fs" );
var path = require( "path" );
var zlib = require( "zlib" );
var https = require( "https" );

var ROOT       = path.join( __dirname, "..", ".." );
var CACHE_DIR  = path.join( ROOT, "sheet/tools/.scrap_cache/srd" );
var DONS_DIR   = path.join( CACHE_DIR, "pf2-jekyll-master", "_dons" );
var ARCHIVE_URL = "https://codeload.github.com/pathfinder-fr/pf2-jekyll/tar.gz/refs/heads/master";
var SRD_BASE   = "https://www.pathfinder-fr.org/srd/pf2/dons/";
var OUT_FILE   = path.join( ROOT, "sheet/js/object/constant_objects_srd.js" );

//********************************************  HTTP  **************************************************//

function httpGetBuffer( url, redirects ) {
    redirects = redirects || 0;
    return new Promise( function ( resolve, reject ) {
        https.get( url, { headers: { "User-Agent": "Mozilla/5.0" } }, function ( res ) {
            if ( res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && redirects < 5 ) {
                res.resume();
                resolve( httpGetBuffer( res.headers.location, redirects + 1 ) );
                return;
            }
            var chunks = [];
            res.on( "data", function ( c ) { chunks.push( c ); } );
            res.on( "end", function () {
                if ( res.statusCode !== 200 ) {
                    reject( new Error( "HTTP " + res.statusCode + " " + url ) );
                    return;
                }
                resolve( Buffer.concat( chunks ) );
            } );
        } ).on( "error", reject );
    } );
}

//********************************************  TAR.GZ (minimal reader)  **************************************************//

function untarGz( buffer, dest_dir ) {
    var data = zlib.gunzipSync( buffer );
    var offset = 0;
    while ( offset + 512 <= data.length ) {
        var header = data.slice( offset, offset + 512 ).toString( "utf8" );
        if ( header === "" || /^\0+$/.test( header ) ) {
            break;
        }
        var name = header.slice( 0, 100 ).replace( /\0.*$/, "" );
        var size = parseInt( header.slice( 124, 136 ).replace( /\0.*$/, "" ).trim(), 8 ) || 0;
        offset += 512;
        if ( name && size > 0 && name.indexOf( "_dons/" ) !== -1 && /\.md$/.test( name ) ) {
            var rel = name.replace( /^[^/]*\/_dons\//, "" );
            var target = path.join( dest_dir, rel );
            fs.mkdirSync( path.dirname( target ), { recursive: true } );
            fs.writeFileSync( target, data.slice( offset, offset + size ) );
        }
        offset += Math.ceil( size / 512 ) * 512;
    }
}

async function ensureCache() {
    if ( fs.existsSync( DONS_DIR ) && fs.readdirSync( DONS_DIR ).length ) {
        return;
    }
    fs.mkdirSync( CACHE_DIR, { recursive: true } );
    console.log( "download " + ARCHIVE_URL );
    var buffer = await httpGetBuffer( ARCHIVE_URL );
    untarGz( buffer, DONS_DIR );
    console.log( "cache: " + fs.readdirSync( DONS_DIR ).length + " fichiers _dons" );
}

function sleep( ms ) {
    return new Promise( function ( resolve ) { setTimeout( resolve, ms ); } );
}

//********************************************  ENRICHMENT (level)  **************************************************//

// The French Foundry translation repo (pathfinder-fr/foundryvtt-pathfinder2-fr,
// mirrored on GitHub) names each feat file data/feats/<cat>-<level>-<uuid>.htm :
// the level prefix is the current feat level (checked against known feats).
// One GitHub API call (recursive tree), cached in .scrap_cache/srd/fr_tree.json
var FR_TREE_URL = "https://api.github.com/repos/pathfinder-fr/foundryvtt-pathfinder2-fr/git/trees/master?recursive=1";

async function loadFrTreeIndex() {
    var cache = path.join( CACHE_DIR, "fr_tree.json" );
    if ( !fs.existsSync( cache ) ) {
        console.log( "download " + FR_TREE_URL );
        var buffer = await httpGetBuffer( FR_TREE_URL );
        fs.writeFileSync( cache, buffer );
    }
    var tree = JSON.parse( fs.readFileSync( cache, "utf8" ) ).tree || [];
    var index = {};
    for ( var i = 0; i < tree.length; i++ ) {
        var m = tree[ i ].path.match( /^data\/feats\/[a-z]+-(\d+)-([A-Za-z0-9.]+)\.htm$/ );
        if ( m ) {
            index[ m[ 2 ] ] = parseInt( m[ 1 ], 10 );
        }
    }
    return index;
}

//********************************************  MARKDOWN -> HTML  **************************************************//

function escapeHtml( text ) {
    return text.replace( /&/g, "&amp;" ).replace( /</g, "&lt;" ).replace( />/g, "&gt;" );
}

function resolveSrdUrl( url ) {
    if ( /^https?:\/\//.test( url ) ) {
        return url;
    }
    if ( url.charAt( 0 ) === "#" ) {
        return null;
    }
    return SRD_BASE + url.replace( /^\.\//, "" );
}

// Minimal markdown: paragraphs, bullet lists, links, bold/italic
function mdToHtml( body ) {
    var lines = escapeHtml( body ).split( /\n/ );
    var html  = [];
    var list  = null;
    function closeList() {
        if ( list ) {
            html.push( "</ul>" );
            list = null;
        }
    }
    function inline( text ) {
        return text
            .replace( /\[([^\]]*)\]\(([^)\s]*)\)/g, function ( all, label, url ) {
                var href = resolveSrdUrl( url );
                return href ? '<a href="' + href + '" target="_blank">' + label + "</a>" : label;
            } )
            .replace( /\*\*([^*]+)\*\*/g, "<strong>$1</strong>" )
            .replace( /\*([^*]+)\*/g, "<em>$1</em>" );
    }
    for ( var i = 0; i < lines.length; i++ ) {
        var line = lines[ i ];
        var bullet = line.match( /^\s*[-*]\s+(.*)$/ );
        if ( bullet ) {
            if ( !list ) {
                html.push( "<ul>" );
                list = true;
            }
            html.push( "<li>" + inline( bullet[ 1 ] ) + "</li>" );
            continue;
        }
        closeList();
        if ( line.trim() === "" ) {
            continue;
        }
        html.push( "<p>" + inline( line.trim() ) + "</p>" );
    }
    closeList();
    return html.join( "\n" );
}

//********************************************  PROJECT LOAD (same pattern as rescrap_pf2e.js)  **************************************************//

var PROJECT_PRE = [ "SERVICE", "OBJECT", "CONTROLLER", "RACES", "LEGACIES", "ARCHETYPES", "CLASSES", "HISTORICS", "SKILLS", "DON", "STUFF", "STUFFS", "SPELLS", "LEVELUP", "MASTERY", "LIBRARY", "ADJUSTMENT", "COMBAT", "CHARACTER", "MANAGER", "GS", "WINDOW_V2", "COMPONENT" ];

function loadProject( files ) {
    var sandbox = {};
    for ( var i = 0; i < PROJECT_PRE.length; i++ ) {
        sandbox[ PROJECT_PRE[ i ] ] = {};
    }
    for ( var f = 0; f < files.length; f++ ) {
        var code = fs.readFileSync( path.join( ROOT, files[ f ] ), "utf8" );
        code = code.replace( /"use strict";/g, "" ).replace( /^var\s+/gm, "" );
        new Function( "sandbox", "with (sandbox) { " + code + " }" )( sandbox );
    }
    return sandbox;
}

function normName( text ) {
    return String( text || "" ).toLowerCase()
        .normalize( "NFD" ).replace( /[̀-ͯ]/g, "" )
        .replace( /œ/g, "oe" ).replace( /æ/g, "ae" )
        .replace( /[^a-z0-9]+/g, " " ).trim();
}

//********************************************  MAIN  **************************************************//

async function main() {
    var dry = process.argv.indexOf( "--dry" ) !== -1;
    await ensureCache();

    var proj       = loadProject( [ "sheet/js/constant.js", "sheet/js/constant_divers.js", "sheet/js/object/constant_objects.js" ] );
    var compendium = proj.OBJECT.COMPENDIUM;
    var all_ids    = {};
    var feat_names = {};
    for ( var key in compendium ) {
        all_ids[ key ] = true;
        var od = compendium[ key ];
        if ( od && od.category === "feat" && od.text ) {
            feat_names[ normName( od.text ) ] = true;
        }
    }

    var files   = fs.readdirSync( DONS_DIR ).filter( function ( f ) { return /\.md$/.test( f ); } );
    var missing = [];
    var seen    = {};
    for ( var i = 0, _size_i = files.length; i < _size_i; i++ ) {
        var raw = fs.readFileSync( path.join( DONS_DIR, files[ i ] ), "utf8" );
        var m   = raw.match( /^---\n([\s\S]*?)\n---\n([\s\S]*)$/ );
        if ( !m ) {
            continue;
        }
        var fm = {};
        m[ 1 ].split( "\n" ).forEach( function ( line ) {
            var mm = line.match( /^(\w+):\s*(.*)$/ );
            if ( mm ) {
                fm[ mm[ 1 ] ] = mm[ 2 ].trim();
            }
        } );
        if ( !fm.title || seen[ normName( fm.title ) ] || feat_names[ normName( fm.title ) ] ) {
            continue;
        }
        seen[ normName( fm.title ) ] = true;
        var slug = files[ i ].replace( /\.md$/, "" );
        // The Foundry uuid already indexed under another name must not be
        // overwritten: the SRD entry then carries the derived slug id
        var id = ( fm.id && !all_ids[ fm.id ] ) ? fm.id : "srd__" + slug;
        missing.push( {
            "action_cost" : null,
            "bulk"        : null,
            "category"    : "feat",
            "description" : mdToHtml( m[ 2 ].trim() ),
            "element_type": null,
            "href"        : SRD_BASE + slug + ".html",
            "id"          : id,
            "price"       : null,
            "required"    : [],
            "text"        : fm.title,
            "traits"      : [],
            "foundry_id"  : fm.id || null,
            "url_en"      : fm.urlEn || null
        } );
    }
    missing.sort( function ( a, b ) { return a.text.localeCompare( b.text, "fr" ); } );

    // Enrichment: the compendium entry of the same Foundry uuid already
    // carries the translated level / traits / prerequisites / cost (the SRD
    // and the French pack sometimes name the same feat differently) ; when
    // the uuid is indexed nowhere, the English pack entry gives the level,
    // traits and cost (prerequisites stay empty, they are English-only there)
    // Enrichment: the compendium entry of the same Foundry uuid already
    // carries the translated level / traits / prerequisites / cost (the SRD
    // and the French pack sometimes name the same feat differently) ; when
    // the uuid is indexed nowhere, the French translation repo's file naming
    // still gives the current feat level
    var fr_levels = await loadFrTreeIndex();
    var enriched  = 0;
    var from_fr   = 0;
    for ( var e = 0, _size_e = missing.length; e < _size_e; e++ ) {
        var entry = missing[ e ];
        var src   = entry.foundry_id && compendium[ entry.foundry_id ];
        if ( src ) {
            entry.element_type = src.element_type;
            entry.traits       = src.traits || [];
            entry.required     = src.required || [];
            entry.action_cost  = src.action_cost !== undefined ? src.action_cost : null;
            enriched++;
            continue;
        }
        if ( entry.foundry_id && fr_levels[ entry.foundry_id ] !== undefined ) {
            entry.element_type = "DON " + fr_levels[ entry.foundry_id ];
            from_fr++;
        }
    }
    console.log( "enrichissement: " + enriched + " via compendium[id], " + from_fr + " niveau via arbre FR" );

    var out = {};
    for ( var j = 0, _size_j = missing.length; j < _size_j; j++ ) {
        delete missing[ j ].foundry_id;
        delete missing[ j ].url_en;
        out[ missing[ j ].id ] = missing[ j ];
    }
    console.log( "dons SRD: " + files.length + ", noms manquants ajoutes: " + missing.length + ( dry ? " (dry)" : "" ) );
    if ( dry ) {
        return;
    }
    var content = "\"use strict\";\n"
        + "// Generated by sheet/tools/rescrap_srd_feats.js — never edit by hand.\n"
        + "// Feats of the SRD site (pathfinder-fr.org/srd/pf2/dons/) whose NAME was missing\n"
        + "// from the scraped compendium. Only NEW keys: an existing id is never overwritten.\n"
        + "OBJECT.COMPENDIUM = Object.assign( OBJECT.COMPENDIUM, "
        + JSON.stringify( out, null, 4 ).replace( /": /g, "\" : " )
        + " );\n";
    fs.writeFileSync( OUT_FILE, content );
    console.log( "written: " + path.relative( ROOT, OUT_FILE ) + " (" + Math.round( content.length / 1024 ) + " Ko)" );
}

main().catch( function ( e ) { console.error( e ); process.exit( 1 ); } );
