"use strict";
/**
 * Re-scrap of OBJECT.SKILL_ACTIONS from grimoire-vf.fr (the skill pages
 * under /competences/skill-<slug>/, cached in .scrap_cache/grimoire/).
 *
 * Usage : node sheet/tools/rescrap_skill_actions.js [--dry]
 *
 * Refresh the cache with curl (browser UA) :
 *   for slug in skill-... ; do curl -A "<UA>" -L
 *     "https://www.grimoire-vf.fr/competences/$slug/" -o "$slug.html" ; done
 *
 * Generated data : never edit by hand, re-run this tool instead.
 */

var fs   = require( "fs" );
var path = require( "path" );

var ROOT  = path.resolve( __dirname, "..", ".." );
var CACHE = path.join( __dirname, ".scrap_cache", "grimoire" );

var dry_run = process.argv.indexOf( "--dry" ) !== -1;

// Same slug rule as CLASSES.getAbilityKey (constant_class_choices.js)
function abilityKey( label ) {
    return label.toLowerCase()
        .normalize( "NFD" )
        .replace( /[̀-ͯ]/g, "" )
        .replace( /[^a-z0-9]+/g, "_" )
        .replace( /^_+|_+$/g, "" );
}

// The grimoire spells two skills differently than SKILLS.LIST labels do
var SLUG_KEY_OVERRIDES = {
    "skill-larcin"        : "vol",
    "skill-connaissances": "connaissance"
};
var LABEL_KEY_OVERRIDES = {
    "Connaissances": "connaissance",
    "Larcin"      : "vol"
};

var GENERAL_RANK = {
    "inexpérimenté": "I", "inexperimente": "I",
    "qualifié"     : "Q",
    "expert"      : "E",
    "maître"      : "M", "maitre": "M",
    "légende"     : "L", "legende": "L"
};

function decodeEntities( txt ) {
    return txt
        .replace( /&nbsp;/g, " " )
        .replace( /&#39;/g, "'" )
        .replace( /&apos;/g, "'" )
        .replace( /&quot;/g, "\"" )
        .replace( /&lt;/g, "<" )
        .replace( /&gt;/g, ">" )
        .replace( /&amp;/g, "&" );
}

// Plain text of an HTML fragment : links get a space on each side (the
// scraped text keeps the gap the rendered link leaves), tags go away
function textOf( html ) {
    if ( !html ) {
        return "";
    }
    var out = html;
    out = out.replace( /<a\s[^>]*>/g, " " ).replace( /<\/a>/g, " " );
    out = out.replace( /<br\s*\/?>/g, " " );
    out = out.replace( /<\/p>/g, " " );
    out = out.replace( /<\/li>/g, " " );
    out = out.replace( /<[^>]+>/g, "" );
    out = decodeEntities( out );
    out = out.replace( /[ \t]{2,}/g, " " ).trim();
    return out;
}

function rankOfSection( h2_text ) {
    var t = h2_text.toLowerCase();
    if ( t.indexOf( "non qualifi" ) !== -1 ) { return "I"; }
    if ( t.indexOf( "qualifi" ) !== -1 ) { return "Q"; }
    if ( t.indexOf( "expert" ) !== -1 ) { return "E"; }
    if ( t.indexOf( "maître" ) !== -1 || t.indexOf( "maitre" ) !== -1 ) { return "M"; }
    if ( t.indexOf( "légende" ) !== -1 || t.indexOf( "legende" ) !== -1 ) { return "L"; }
    if ( t.indexOf( "générale" ) !== -1 || t.indexOf( "generale" ) !== -1 ) { return "general"; }
    return null;
}

function parseArticle( art ) {
    var out = {};
    var h1 = art.match( /<h1[^>]*>([\s\S]*?)<\/h1>/ );
    out[ "name" ] = textOf( h1 ? h1[ 1 ] : "" );
    var icon = art.match( /<span class="action-icon"[^>]*aria-label="([^"]*)"/ );
    out[ "cost" ] = icon ? icon[ 1 ] : "";
    var traits = [];
    var ul = art.match( /<ul[^>]*aria-label="traits"[^>]*>([\s\S]*?)<\/ul>/ );
    if ( ul ) {
        var lis = ul[ 1 ].match( /<li[^>]*data-entry-key="([^"]*)"/g ) || [];
        for ( var i = 0; i < lis.length; i++ ) {
            traits.push( lis[ i ].match( /data-entry-key="([^"]*)"/ )[ 1 ] );
        }
    }
    out[ "traits" ] = traits;
    // the dl block : Prérequis / Conditions
    out[ "prerequisite" ] = "";
    out[ "condition" ]    = "";
    var dl = art.match( /<dl[^>]*>([\s\S]*?)<\/dl>/ );
    if ( dl ) {
        var divs = dl[ 1 ].match( /<div>[\s\S]*?<\/div>/g ) || [];
        for ( var d = 0; d < divs.length; d++ ) {
            var dt = divs[ d ].match( /<dt[^>]*>([\s\S]*?)<\/dt>/ );
            var dd = divs[ d ].match( /<dd[^>]*>([\s\S]*?)<\/dd>/ );
            if ( !dt || !dd ) {
                continue;
            }
            var key = textOf( dt[ 1 ] ).toLowerCase();
            var val = textOf( dd[ 1 ] );
            if ( key.indexOf( "prérequis" ) === 0 || key.indexOf( "prerequis" ) === 0 ) {
                out[ "prerequisite" ] = val;
            }
            if ( key.indexOf( "condition" ) === 0 ) {
                out[ "condition" ] = val;
            }
        }
    }
    // the description div (first div.text-base.leading), tasks ul extracted
    out[ "description" ] = "";
    out[ "results" ]     = [];
    out[ "tasks" ]       = [];
    var divs_all = art.match( /<div class="[^"]*text-base[^"]*"[^>]*>[\s\S]*?<\/div>\s*(?=<div|$)/g ) || [];
    // safer : split manually on the two known div classes
    var desc_m = art.match( /<div class="text-base leading-\[1\.65\]">([\s\S]*?)(?=<div class="mt-3|<\/article>)/ );
    if ( desc_m ) {
        var body = desc_m[ 1 ];
        var tasks = [];
        var tasks_m = body.match( /<ul class="list-disc[^"]*"[^>]*>([\s\S]*?)<\/ul>/ );
        if ( tasks_m ) {
            var lis2 = tasks_m[ 1 ].match( /<li>([\s\S]*?)<\/li>/g ) || [];
            for ( var t = 0; t < lis2.length; t++ ) {
                var strong = lis2[ t ].match( /<strong[^>]*>([\s\S]*?)<\/strong>/ );
                tasks.push( {
                    "rank_label": strong ? textOf( strong[ 1 ] ) : "",
                    "text"      : textOf( lis2[ t ].replace( /<strong[\s\S]*?<\/strong>/, "" ) )
                } );
            }
            body = body.replace( tasks_m[ 0 ], "" );
        }
        out[ "tasks" ]       = tasks;
        out[ "description" ] = textOf( body );
    }
    // the results block (last div of the article)
    var res_m = art.match( /<div class="mt-3[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/article>/ );
    if ( res_m ) {
        var ps = res_m[ 1 ].match( /<p>([\s\S]*?)<\/p>/g ) || [];
        for ( var p = 0; p < ps.length; p++ ) {
            var st = ps[ p ].match( /<strong[^>]*>([\s\S]*?)<\/strong>/ );
            if ( !st ) {
                continue;
            }
            out[ "results" ].push( {
                "label": textOf( st[ 1 ] ),
                "text" : textOf( ps[ p ].replace( /<strong[\s\S]*?<\/strong>/, "" ) )
            } );
        }
    }
    return out;
}

function parseSkillPage( html ) {
    var h1 = html.match( /<h1[^>]*>([\s\S]*?)<\/h1>/ );
    var label = textOf( h1 ? h1[ 1 ] : "" ).replace( /\s*\(.*$/, "" ).trim();
    // the skill description : first text-base div after the page h1
    var after_h1 = html.slice( html.indexOf( "</h1>" ) );
    var desc_m = after_h1.match( /<div class="text-base leading-\[1\.65\]">([\s\S]*?)(?=<section|<h2)/ );
    var description = desc_m ? textOf( desc_m[ 1 ] ) : "";
    // sections
    var actions = [];
    var general = [];
    var sections = html.split( /<section(?=[ >])/ );
    for ( var s = 0; s < sections.length; s++ ) {
        var h2 = sections[ s ].match( /<h2[^>]*>([\s\S]*?)<\/h2>/ );
        if ( !h2 ) {
            continue;
        }
        var rank = rankOfSection( textOf( h2[ 1 ] ) );
        if ( !rank ) {
            continue;
        }
        var arts = sections[ s ].match( /<article class="prose-fiche statblock">[\s\S]*?<\/article>/g ) || [];
        for ( var a = 0; a < arts.length; a++ ) {
            var entry = parseArticle( arts[ a ] );
            entry[ "rank" ] = rank === "general" ? "" : rank;
            if ( rank === "general" ) {
                general.push( entry );
            }
            else {
                actions.push( entry );
            }
        }
    }
    // key order of the emitted entries
    var ordered = actions.map( function ( e ) {
        return {
            "name"       : e.name,
            "cost"       : e.cost,
            "traits"     : e.traits,
            "rank"       : e.rank,
            "prerequisite": e.prerequisite,
            "condition"  : e.condition,
            "description": e.description,
            "results"    : e.results,
            "tasks"      : e.tasks
        };
    } );
    var ordered_general = general.map( function ( e ) {
        var copy = {};
        for ( var k in e ) { copy[ k ] = e[ k ]; }
        delete copy[ "rank" ];
        return copy;
    } );
    return {
        "label"          : label,
        "description"    : description,
        "actions"        : ordered,
        "general_actions": ordered_general
    };
}

// The general actions page is one table : action name, required rank,
// the skills it works with. The general entries carry only name + rank
function parseGeneralPage( html, out ) {
    var rows = html.match( /<tr[^>]*>[\s\S]*?<\/tr>/g ) || [];
    for ( var i = 0; i < rows.length; i++ ) {
        var cells = rows[ i ].match( /<td[^>]*>[\s\S]*?<\/td>/g ) || [];
        if ( cells.length < 3 ) {
            continue;
        }
        var name = textOf( cells[ 0 ] );
        var rank_label = textOf( cells[ 1 ] ).toLowerCase();
        var rank = GENERAL_RANK[ rank_label ] || "I";
        var skills_text = textOf( cells[ 2 ] );
        var labels = skills_text.split( /,\s*/ );
        for ( var s = 0; s < labels.length; s++ ) {
            var label = labels[ s ].trim();
            if ( !label ) {
                continue;
            }
            var key = LABEL_KEY_OVERRIDES[ label ] || abilityKey( label );
            if ( !out[ key ] ) {
                continue;
            }
            out[ key ].general_actions.push( { "name": name, "rank": rank } );
        }
    }
}

function main() {
    var files = fs.readdirSync( CACHE ).filter( function ( f ) { return /^skill-.*\.html$/.test( f ); } ).sort();
    var out = {};
    for ( var i = 0; i < files.length; i++ ) {
        var html  = fs.readFileSync( path.join( CACHE, files[ i ] ), "utf8" );
        var skill = parseSkillPage( html );
        var key   = SLUG_KEY_OVERRIDES[ files[ i ].replace( /\.html$/, "" ) ] || abilityKey( skill.label );
        out[ key ] = skill;
        console.log( key + " (" + skill.label + ") : " + skill.actions.length + " actions, " + skill.general_actions.length + " générales" );
    }
    var general_file = path.join( CACHE, "actions-generales.html" );
    if ( fs.existsSync( general_file ) ) {
        parseGeneralPage( fs.readFileSync( general_file, "utf8" ), out );
        for ( var k in out ) {
            if ( out[ k ].general_actions.length ) {
                console.log( k + " : +" + out[ k ].general_actions.length + " générales" );
            }
        }
    }
    var header = "\"use strict\";\n\n" +
        "/**\n" +
        " * Actions of each skill, keyed by skill key (CLASSES.getAbilityKey of\n" +
        " * the SKILLS.LIST label). One entry per action with its rank requirement\n" +
        " * (\"I\" usable untrained, \"Q\", \"E\", \"M\", \"L\"), the general actions usable\n" +
        " * with the skill, and the descriptions of both. The character sheet shows\n" +
        " * an action as usable when his rank on the skill reaches the requirement.\n" +
        " * Scraped from grimoire-vf.fr, generated data : do not edit by hand,\n" +
        " * re-run the extraction instead.\n" +
        " */\n";
    var json = JSON.stringify( out, null, 4 ).replace( /": /g, "\" : " );
    var content = header + "OBJECT.SKILL_ACTIONS = " + json + ";\n";
    if ( dry_run ) {
        console.log( "[dry] sheet/js/object/constant_skill_actions.js (" + content.length + " octets)" );
        return;
    }
    fs.writeFileSync( path.join( ROOT, "sheet/js/object/constant_skill_actions.js" ), content );
    console.log( "sheet/js/object/constant_skill_actions.js : " + content.length + " octets, " + Object.keys( out ).length + " compétences" );
}

main();
