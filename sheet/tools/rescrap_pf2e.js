"use strict";
/**
 * Re-scrap of the generated data files from the source site
 * https://pf2e.pathfinder-fr.org/ (its static JSON under /assets/data/,
 * cached in sheet/tools/.scrap_cache/pf2e/ — refresh the cache with curl,
 * this tool only reads it).
 *
 * Usage : node sheet/tools/rescrap_pf2e.js <target> [--dry]
 *   targets : spells | stuffs | feats | compendium | all
 *
 * The emitted files keep the project format (aligned " : " separators,
 * French display strings, gs-link-information divs for the @UUID links).
 * Generated data : never edit by hand, re-run this tool instead.
 */

var fs   = require( "fs" );
var path = require( "path" );

var ROOT  = path.resolve( __dirname, "..", ".." );
var CACHE = path.join( __dirname, ".scrap_cache", "pf2e" );

var dry_run = process.argv.indexOf( "--dry" ) !== -1;
var target  = process.argv[ 2 ] && process.argv[ 2 ] !== "--dry" ? process.argv[ 2 ] : "all";

function loadCache( name ) {
    return JSON.parse( fs.readFileSync( path.join( CACHE, name + ".json" ), "utf8" ) );
}

var TRAITS   = loadCache( "traits" );
var SPELLS   = loadCache( "spells" );
var EQUIP    = loadCache( "equipment" );
var FEATS    = loadCache( "feats" );
var ACTIONS  = loadCache( "actions" );
var CLASSES  = loadCache( "classes" );
var ANCESTRIES = loadCache( "ancestries" );
var HERITAGES  = loadCache( "heritages" );
var SKILLS     = loadCache( "skills" );
var CONDITIONS = loadCache( "conditions" );
var EFFECTS    = loadCache( "effects" );
var CLASS_FEATURES = loadCache( "class-features" );
var ANC_FEATURES   = loadCache( "ancestry-features" );
var BACKGROUNDS    = loadCache( "backgrounds" );
var ARCHETYPES     = loadCache( "archetypes" );
var DEITIES        = loadCache( "deities" );
var LANGUAGES      = loadCache( "languages" );
var WEAPON_GROUPS  = loadCache( "weapon-groups" );
var ARMOR_GROUPS   = loadCache( "armor-groups" );
var WEAPON_CATS    = loadCache( "weapon-categories" );
var ARMOR_CATS     = loadCache( "armor-categories" );

//********************************************  SHARED HELPERS  **************************************************//

function frOf( entry ) {
    return ( entry.translations && entry.translations.fr ) || {};
}

function trName( map, key ) {
    if ( !key ) {
        return null;
    }
    var t = map[ key ];
    if ( !t ) {
        return null;
    }
    return frOf( t ).name || t.name;
}

function trTrait( key ) {
    if ( !key ) {
        return null;
    }
    var t = TRAITS[ key ];
    if ( !t ) {
        return key.charAt( 0 ).toUpperCase() + key.slice( 1 );
    }
    return frOf( t ).name || t.name;
}

// The rarity rides along only when it is not "common" (the source table
// shows it in its own column, the scraped trait list skips it)
function mapTraits( entry ) {
    var out = [];
    var r   = entry.traits && entry.traits.rarity;
    if ( r && r !== "common" ) {
        out.push( trTrait( r ) );
    }
    var values = ( entry.traits && entry.traits.value ) || [];
    for ( var i = 0; i < values.length; i++ ) {
        out.push( trTrait( values[ i ] ) );
    }
    return out;
}

// @UUID[Compendium.pf2e.<pack>.Item.<id>]{<label>} becomes the clickable
// information link of the sheet (the popup reads OBJECT.COMPENDIUM by id)
// The @UUID link tolerates a missing closing bracket in the source data
var UUID_RE = /@UUID\[([^\]]+)\]\{([^}]*)\}|@UUID\[([^\]{]+)\{([^}]*)\}/g;

function linkifyUuids( html ) {
    return html.replace( UUID_RE, function ( match, path_a, label_a, path_b, label_b ) {
        var uuid_path = path_a || path_b;
        var label     = label_a !== undefined ? label_a : label_b;
        var id = uuid_path.split( "." ).pop();
        return "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__object__uuid': '" + id + "', 'param__object__label': this.textContent})\">" + label + "</div>";
    } );
}

// The French descriptions of the source link the actions by @UUID with
// CONJUGATED labels ("Vous souvenir", "Sollicitez"...) while the plain-text
// prose of the feat descriptions carries the same forms unlinked : the
// labels seen in the French descriptions of the loaded packs become
// linkable names, mapped to the uuid of their action entry
var ACTION_UUID_RE = /@UUID\[Compendium\.pf2e\.[\w-]*action[\w-]*\.Item\.(\w+)\]\{([^}]*)\}/g;

var ACTION_LABEL_TO_UUID = null;
var ACTION_LINK_RE       = null;

function escapeRegExp( text ) {
    return text.replace( /[.*+?^${}()|[\]\\]/g, "\\$&" );
}

function buildActionLinkIndex() {
    if ( ACTION_LABEL_TO_UUID ) {
        return;
    }
    var label_to_uuid = {};
    var pack_lists    = [ SPELLS, FEATS, EQUIP, ACTIONS, CLASS_FEATURES, ANC_FEATURES, BACKGROUNDS, ARCHETYPES, CONDITIONS, EFFECTS ];
    for ( var p = 0, _size_p = pack_lists.length; p < _size_p; p++ ) {
        var list = pack_lists[ p ];
        if ( !list ) {
            continue;
        }
        for ( var i = 0, _size_i = list.length; i < _size_i; i++ ) {
            var fr_desc = frOf( list[ i ] ).description;
            if ( !fr_desc ) {
                continue;
            }
            ACTION_UUID_RE.lastIndex = 0;
            var m;
            while ( ( m = ACTION_UUID_RE.exec( fr_desc ) ) !== null ) {
                if ( m[ 2 ].length > 1 && !label_to_uuid[ m[ 2 ] ] ) {
                    label_to_uuid[ m[ 2 ] ] = m[ 1 ];
                }
            }
        }
    }
    var labels = Object.keys( label_to_uuid ).sort( function ( a, b ) { return b.length - a.length; } );
    ACTION_LABEL_TO_UUID = label_to_uuid;
    ACTION_LINK_RE       = labels.length ? new RegExp( "(?<![\\p{L}\\p{N}_])(?:" + labels.map( escapeRegExp ).join( "|" ) + ")(?![\\p{L}\\p{N}_])", "gu" ) : null;
}

function makeLinkDiv( id, label ) {
    return "<div class=\"gs-link-information\" onclick=\"CONTROLLER.Main.doActionAfter('event__show_information', {'param__object__uuid': '" + id + "', 'param__object__label': this.textContent})\">" + label + "</div>";
}

function linkifyActionLabels( html ) {
    buildActionLinkIndex();
    if ( !ACTION_LINK_RE ) {
        return html;
    }
    return html.replace( ACTION_LINK_RE, function ( match ) {
        return makeLinkDiv( ACTION_LABEL_TO_UUID[ match ], match );
    } );
}

// The flatten strips every tag at the end : the information links ride the
// strip as placeholders and are restored once the text is plain
var LINK_DIV_RE = /<div class="gs-link-information"[\s\S]*?<\/div>/g;

function protectLinks( html, links ) {
    return html.replace( LINK_DIV_RE, function ( match ) {
        links.push( match );
        return "\u0000" + ( links.length - 1 ) + "\u0000";
    } );
}

function restoreLinks( html, links ) {
    return html.replace( /\u0000(\d+)\u0000/g, function ( match, index ) {
        return links[ parseInt( index, 10 ) ];
    } );
}

// The other Foundry inline tags (@Damage, @Check, @Template...) collapse to
// their label, the [[/act ...]]{label} links to the plain label
var GENERIC_TAG_RE = /@\w+(?:\[[^\]]*\])+\{([^}]*)\}/g;
var ACT_LINK_RE    = /\[\[[^\]]*\]\]?\{([^}]*)\}/g;
var STRONG_RE      = /<strong>([^<]*)<\/strong>/g;
// Leftover Foundry tags without a label, including the malformed source
// forms (@Check[fortitude|dc:27], [[/r 1d20]], @Damage[(6d6)[slashing])
var BARE_TAG_RE    = /@\w+\[[^\])]*[\])]?|\[\[[^\]]*\]\]?/g;

function stripBareTags( html ) {
    return html.replace( BARE_TAG_RE, "" );
}

// The spell descriptions keep their HTML structure (<p> kept, <hr> becomes
// a newline, <strong> becomes quotes, icon spans collapse to their text)
function cleanSpellDescription( html ) {
    if ( !html ) {
        return "";
    }
    var out = linkifyUuids( html );
    out = out.replace( GENERIC_TAG_RE, " $1" );
    out = out.replace( ACT_LINK_RE, "$1" );
    out = out.replace( STRONG_RE, "\"$1\"" );
    out = stripBareTags( out );
    out = out.replace( /<span class="action-glyph">([^<]*)<\/span>/g, "$1" );
    out = out.replace( /<hr\s*\/?>/g, "\n" );
    return out;
}

// The equipment / feat descriptions are flattened to plain text (the source
// innerText), the information links stay as divs inside the text
function flattenHtml( html ) {
    if ( !html ) {
        return "";
    }
    // The information links ride the tag strip as placeholders
    var links = [];
    var out = protectLinks( linkifyUuids( html ), links );
    out = protectLinks( linkifyActionLabels( out ), links );
    out = out.replace( GENERIC_TAG_RE, " $1" );
    out = out.replace( ACT_LINK_RE, "$1" );
    out = out.replace( STRONG_RE, "$1" );
    out = stripBareTags( out );
    out = out.replace( /<span class="action-glyph">([^<]*)<\/span>/g, "$1" );
    // tables flatten to tab-separated rows
    out = out.replace( /<tr[^>]*>/g, "\n" );
    out = out.replace( /<\/tr>/g, "\n" );
    out = out.replace( /<\/t[dh]>/g, "\t" );
    out = out.replace( /<\/?(thead|tbody|table)[^>]*>/g, "" );
    out = out.replace( /<hr\s*\/?>/g, "\n" );
    out = out.replace( /<\/p>/g, "\n\n" );
    out = out.replace( /<br\s*\/?>/g, "\n" );
    out = out.replace( /<\/?li[^>]*>/g, "\n" );
    out = out.replace( /<[^>]+>/g, "" );
    out = out.replace( /&nbsp;/g, " " ).replace( /&amp;/g, "&" ).replace( /&lt;/g, "<" ).replace( /&gt;/g, ">" ).replace( /&quot;/g, "\"" ).replace( /&#39;/g, "'" );
    // table cells keep their tab separator, the layout spaces go away
    out = out.replace( /[ \t]*\t[ \t]*/g, "\t" );
    out = out.replace( /[ \t]+\n/g, "\n" ).replace( /\n[ \t]+/g, "\n" );
    out = out.replace( /[ ]{2,}/g, " " );
    out = out.replace( /\n{3,}/g, "\n\n" ).replace( /^\n+|\n+$/g, "" );
    out = restoreLinks( out, links );
    return out;
}

// The feat descriptions are one array entry per paragraph, plain text
function splitDescriptionParagraphs( html ) {
    var flat = flattenHtml( html );
    if ( !flat ) {
        return [];
    }
    return flat.split( "\n\n" ).map( function ( p ) { return p.replace( /\n/g, " " ).trim(); } ).filter( Boolean );
}

// The project output format : JSON pretty with the aligned " : "
// separators (a quote inside a string is always escaped, so the replace
// only hits the key separators)
function emitJs( global_assign, obj, indent ) {
    var json = JSON.stringify( obj, null, indent || 4 ).replace( /": /g, "\" : " );
    return global_assign + " = " + json + ";\n";
}

// The accessor tail of a generated data file (everything after the ENUM
// object closes) is stable across re-scraps : it is copied verbatim from
// the current file before it is overwritten
function extractTail( relative_path ) {
    var full = path.join( ROOT, relative_path );
    if ( !fs.existsSync( full ) ) {
        return "";
    }
    var content = fs.readFileSync( full, "utf8" );
    var enum_at = content.indexOf( "ENUM" );
    var close_at = content.indexOf( "\n};", enum_at );
    if ( close_at === -1 ) {
        return "";
    }
    return content.slice( close_at + 3 );
}

function writeGenerated( relative_path, content ) {
    var full = path.join( ROOT, relative_path );
    if ( dry_run ) {
        console.log( "[dry] " + relative_path + " (" + content.length + " octets)" );
        return;
    }
    fs.writeFileSync( full, content );
    console.log( relative_path + " : " + content.length + " octets" );
}

//********************************************  SPELLS  **************************************************//

var NATURE_FR = { "spell": "SORT", "cantrip": "TOUR DE MAGIE", "focus": "FOCALISÉ", "ritual": "RITUEL" };

function spellNatureOf( s ) {
    var v = ( s.traits && s.traits.value ) || [];
    if ( v.indexOf( "cantrip" ) !== -1 ) {
        return "cantrip";
    }
    if ( v.indexOf( "focus" ) !== -1 ) {
        return "focus";
    }
    if ( s.ritual !== undefined && s.ritual !== null ) {
        return "ritual";
    }
    return "spell";
}

function spellCostOf( time ) {
    if ( time === "1" || time === "2" || time === "3" ) {
        return time;
    }
    if ( time === "reaction" ) {
        return "r";
    }
    if ( time === "free" ) {
        return "f";
    }
    var m = /(\d) to (\d)/.exec( time || "" );
    if ( m ) {
        return m[ 1 ];
    }
    return null;
}

function generateSpells() {
    var out = {};
    for ( var i = 0; i < SPELLS.length; i++ ) {
        var s  = SPELLS[ i ];
        var fr = frOf( s );
        var entry = {
            "action_cost" : spellCostOf( s.time ),
            "category"    : "spell",
            "description" : cleanSpellDescription( fr.description || s.description ),
            "element_type": NATURE_FR[ spellNatureOf( s ) ] + " " + s.level,
            "href"        : "/spells/" + s._id,
            "id"          : s._id,
            "required"    : [],
            "text"        : fr.name || s.name,
            "traits"      : mapTraits( s )
        };
        out[ s._id ] = entry;
    }
    // re-emit keyed by id but ordered by French spell name
    var sorted = {};
    Object.keys( out ).sort( function ( a, b ) { return out[ a ].text.localeCompare( out[ b ].text, "fr" ); } )
        .forEach( function ( k ) { sorted[ k ] = out[ k ]; } );
    out = sorted;
    writeGenerated( "sheet/js/spell/spells_constant.js", emitJs( "SPELLS.CONST", out ) );
    console.log( "spells: " + Object.keys( out ).length + " entrées" );
    return out;
}

//********************************************  STUFFS  **************************************************//

var DAMAGE_TYPE_LABELS = {
    "poison": "de poison",
    "mental": "mentaux"
};

function damageTypeLabel( type_key ) {
    if ( !type_key ) {
        return "";
    }
    if ( DAMAGE_TYPE_LABELS[ type_key ] ) {
        return DAMAGE_TYPE_LABELS[ type_key ];
    }
    var label = trTrait( type_key );
    return label.charAt( 0 ).toLowerCase() + label.slice( 1 );
}

function mapDamage( damage ) {
    if ( !damage ) {
        return undefined;
    }
    var base = damage;
    if ( damage.damageType === undefined ) {
        base = damage[ "0" ] || damage[ Object.keys( damage )[ 0 ] ];
    }
    if ( !base || ( !base.dice && !base.die && !base.formula ) ) {
        return undefined;
    }
    var formula = base.dice !== undefined && base.dice !== null && base.dice !== ""
        ? String( base.dice ) + ( base.die || "" )
        : ( base.formula || "" );
    var type_key = base.type || base.damageType;
    var type = type_key ? " " + damageTypeLabel( type_key ) : "";
    return formula + type;
}

function mapUsage( usage ) {
    if ( usage === "held-in-one-hand" ) {
        return "1";
    }
    if ( usage === "held-in-two-hands" ) {
        return "2";
    }
    return undefined;
}

function mapRange( range, fr ) {
    if ( range === null || range === undefined ) {
        return undefined;
    }
    if ( fr.range ) {
        return fr.range.replace( / mètres$/, " m" ).replace( / mètre$/, " m" );
    }
    return ( range * 0.3 ) + " m";
}

function mapBulk( bulk ) {
    if ( bulk === undefined || bulk === null || bulk === 0 ) {
        return undefined;
    }
    if ( bulk === 0.1 ) {
        return "L";
    }
    return String( bulk );
}

function formatPrice( p ) {
    if ( !p ) {
        return "";
    }
    var parts = [];
    if ( p.pp ) { parts.push( p.pp + " pp" ); }
    if ( p.gp ) { parts.push( p.gp + " po" ); }
    if ( p.sp ) { parts.push( p.sp + " pa" ); }
    if ( p.cp ) { parts.push( p.cp + " pc" ); }
    return parts.join( " " );
}

function signPlus( n ) {
    return ( n > 0 ? "+" : "" ) + n;
}

var EQUIP_BY_ID = {};
for ( var _ei = 0; _ei < EQUIP.length; _ei++ ) {
    EQUIP_BY_ID[ EQUIP[ _ei ]._id ] = EQUIP[ _ei ];
}

function stuffEntry( e ) {
    var fr  = frOf( e );
    var out = {};
    out[ "name" ]    = fr.name || e.name;
    out[ "name_en" ] = e.name;
    out[ "level" ]   = e.level === undefined || e.level === null ? 0 : e.level;
    out[ "price" ]   = formatPrice( e.price );
    out[ "traits" ]  = mapTraits( e );
    if ( e.type === "weapon" ) {
        var d = mapDamage( e.damage );
        if ( d !== undefined ) {
            out[ "Dégâts" ] = d;
        }
        var m = mapUsage( e.usage );
        if ( m !== undefined ) {
            out[ "Mains" ] = m;
        }
        out[ "Catégorie" ] = e.category ? ( trName( WEAPON_CATS, e.category ) || "Inconnu" ) : "Inconnu";
        if ( e.group ) {
            out[ "Groupe" ] = trName( WEAPON_GROUPS, e.group ) || "Inconnu";
        }
        var r = mapRange( e.range, fr );
        if ( r !== undefined ) {
            out[ "Portée" ] = r;
        }
        if ( e.reload !== null && e.reload !== undefined && e.reload !== "" ) {
            out[ "Rechargement" ] = String( e.reload );
        }
    }
    if ( e.type === "armor" || e.type === "shield" ) {
        if ( e.acBonus !== undefined && e.acBonus !== null ) {
            out[ "CA bonus" ] = signPlus( e.acBonus );
        }
        if ( e.type === "armor" ) {
            if ( e.dexCap !== undefined && e.dexCap !== null ) {
                out[ "Mod. de dex. max." ] = signPlus( e.dexCap );
            }
            if ( e.checkPenalty !== undefined && e.checkPenalty !== null ) {
                out[ "Pénalité d'armure au test" ] = String( e.checkPenalty );
            }
            if ( e.speedPenalty !== undefined && e.speedPenalty !== null ) {
                out[ "Pénalité à la vitesse" ] = e.speedPenalty + " m";
            }
            if ( e.strength !== undefined && e.strength !== null ) {
                out[ "Force requise" ] = String( e.strength );
            }
            if ( e.category ) {
                out[ "Catégorie" ] = trName( ARMOR_CATS, e.category ) || "Inconnu";
            }
            if ( e.group ) {
                out[ "Groupe" ] = trName( ARMOR_GROUPS, e.group ) || "Inconnu";
            }
        }
        if ( e.type === "shield" && e.hardness ) {
            out[ "Solidité" ] = e.hardness + " PV " + e.hp + " (SR " + ( e.hp / 2 ) + ")";
        }
    }
    var b = mapBulk( e.bulk );
    if ( b !== undefined ) {
        out[ "bulk" ] = b;
    }
    if ( e.baseItem && EQUIP_BY_ID[ e.baseItem ] ) {
        var base = EQUIP_BY_ID[ e.baseItem ];
        out[ "Base" ] = frOf( base ).name || base.name;
    }
    out[ "description" ] = flattenHtml( fr.description || e.description || "" );
    return out;
}

function generateStuffs() {
    var out = [];
    for ( var i = 0; i < EQUIP.length; i++ ) {
        out.push( stuffEntry( EQUIP[ i ] ) );
    }
    out.sort( function ( a, b ) { return a.name.localeCompare( b.name, "fr" ); } );
    var header = "\"use strict\";\n" +
        "/**\n" +
        " * Inventory of the sheet: every equipment of the game, scraped from\n" +
        " * pathfinder-fr. Generated data : do not edit by hand, the extraction\n" +
        " * tool emits this wrapper with the next re-scrap.\n" +
        " */\n";
    writeGenerated( "sheet/js/stuffs/constant_stuffs.js", header + emitJs( "var STUFFS", out, 2 ) );
    console.log( "stuffs: " + out.length + " entrées" );
}

//********************************************  FEATS (DON.*)  **************************************************//

var CLASS_BY_TRAIT = {};
for ( var _ci = 0; _ci < CLASSES.length; _ci++ ) {
    CLASS_BY_TRAIT[ CLASSES[ _ci ].name.toLowerCase() ] = frOf( CLASSES[ _ci ] ).name || CLASSES[ _ci ].name;
}
var ANC_BY_TRAIT = {};
for ( var _ai = 0; _ai < ANCESTRIES.length; _ai++ ) {
    ANC_BY_TRAIT[ ANCESTRIES[ _ai ].name.toLowerCase() ] = frOf( ANCESTRIES[ _ai ] ).name || ANCESTRIES[ _ai ].name;
}
var HER_BY_TRAIT = {};
for ( var _hi = 0; _hi < HERITAGES.length; _hi++ ) {
    var hname = HERITAGES[ _hi ].name;
    HER_BY_TRAIT[ hname.toLowerCase().replace( /[^a-z0-9]+/g, "" ) ] = frOf( HERITAGES[ _hi ] ).name || hname;
}

function normTraitKey( v ) {
    return String( v ).toLowerCase().replace( /[^a-z0-9]+/g, "" );
}

// The feat traits : rarity (when not common), then the value traits with
// the class / ancestry / lineage traits resolved to their French names
function featTraits( f ) {
    var out    = [];
    var r      = f.traits && f.traits.rarity;
    if ( r && r !== "common" ) {
        out.push( trTrait( r ) );
    }
    var values = ( f.traits && f.traits.value ) || [];
    var lineage = values.indexOf( "lineage" ) !== -1;
    for ( var i = 0; i < values.length; i++ ) {
        var v = values[ i ];
        if ( v === "lineage" ) {
            continue;
        }
        if ( CLASS_BY_TRAIT[ v ] ) {
            out.push( CLASS_BY_TRAIT[ v ] );
            continue;
        }
        if ( ANC_BY_TRAIT[ v ] ) {
            out.push( ANC_BY_TRAIT[ v ] );
            continue;
        }
        var hk = normTraitKey( v );
        if ( HER_BY_TRAIT[ hk ] ) {
            out.push( HER_BY_TRAIT[ hk ] );
            continue;
        }
        out.push( trTrait( v ) );
    }
    if ( lineage ) {
        out.push( "Lignée" );
    }
    return out;
}

// English name -> French name index over the main packs, to translate the
// proper nouns inside the prerequisite strings
var NAME_FR_INDEX = {};
function indexNames( list ) {
    for ( var i = 0; i < list.length; i++ ) {
        var e = list[ i ];
        if ( e.name && !NAME_FR_INDEX[ e.name ] ) {
            NAME_FR_INDEX[ e.name ] = frOf( e ).name || e.name;
        }
    }
}
indexNames( FEATS ); indexNames( SPELLS ); indexNames( ACTIONS ); indexNames( EQUIP );
indexNames( CLASS_FEATURES ); indexNames( CONDITIONS ); indexNames( CLASSES );
indexNames( ANCESTRIES ); indexNames( HERITAGES );

var SKILL_FR_INDEX = {};
for ( var _sk in SKILLS ) {
    SKILL_FR_INDEX[ SKILLS[ _sk ].name ] = frOf( SKILLS[ _sk ] ).name;
}

function translateSkillList( text ) {
    return text.split( /,\s*|\s+or\s+/ ).map( function ( part ) {
        var p = part.trim();
        return SKILL_FR_INDEX[ p ] || p;
    } ).join( ", " ).replace( /, ([^,]*)$/, " ou $1" );
}

// The prerequisite strings : the skill ranks translate fully (they drive
// the availability calculation), the known proper nouns translate inside
// the string, the rest stays as-is (permissive for the calculation anyway)
var RANK_RE = /^(trained|expert|master|legendary) in (.+)$/i;
var RANK_FR = { "trained": "qualifié en", "expert": "expert en", "master": "maître en", "legendary": "légende en" };

function translatePrerequisite( p ) {
    var m = RANK_RE.exec( p );
    if ( m ) {
        return RANK_FR[ m[ 1 ].toLowerCase() ] + " " + translateSkillList( m[ 2 ] );
    }
    var out = p;
    var keys = Object.keys( NAME_FR_INDEX ).sort( function ( a, b ) { return b.length - a.length; } );
    for ( var i = 0; i < keys.length; i++ ) {
        if ( out.indexOf( keys[ i ] ) !== -1 ) {
            out = out.split( keys[ i ] ).join( NAME_FR_INDEX[ keys[ i ] ] );
        }
    }
    return out;
}

function featEntry( f ) {
    var fr = frOf( f );
    return {
        "name"       : fr.name || f.name,
        "level"      : String( f.level === undefined ? 0 : f.level ),
        "traits"     : featTraits( f ),
        "required"   : ( f.prerequisites || [] ).map( translatePrerequisite ),
        "description": splitDescriptionParagraphs( fr.description || f.description || "" )
    };
}

function generateFeats() {
    var general = [];
    var classe  = [];
    var race    = [];
    var skill   = [];
    for ( var i = 0; i < FEATS.length; i++ ) {
        var f = FEATS[ i ];
        if ( f.category === "general" ) {
            general.push( featEntry( f ) );
        }
        else if ( f.category === "class" ) {
            if ( ( f.traits && f.traits.value || [] ).indexOf( "archetype" ) !== -1 ) {
                continue; // archetype feats live with the archetypes, not here
            }
            classe.push( featEntry( f ) );
        }
        else if ( f.category === "ancestry" ) {
            race.push( featEntry( f ) );
        }
        else if ( f.category === "skill" ) {
            skill.push( featEntry( f ) );
        }
    }
    function emitGift( file, assign, enum_value, is_general ) {
        var tail = extractTail( file );
        if ( enum_value.length && Array.isArray( enum_value[ 0 ] ) ) {
            // grouped lists (race / skill feats): sort each group by French name
            enum_value = enum_value.map( function ( g ) {
                return g.slice().sort( function ( a, b ) { return a.name.localeCompare( b.name, "fr" ); } );
            } );
        }
        else if ( enum_value.length ) {
            enum_value = enum_value.slice().sort( function ( a, b ) { return a.name.localeCompare( b.name, "fr" ); } );
        }
        var head = "\"use strict\";\n" + ( is_general ? "var DON = {};\n" : "" );
        var body = head + assign + " = {\n    \"ENUM\" : " +
            JSON.stringify( enum_value, null, 4 ).replace( /": /g, "\" : " ).replace( /^/gm, "    " ).replace( /^    /, "" ) +
            "\n};\n" + tail;
        writeGenerated( file, body );
        console.log( file + " : " + ( Array.isArray( enum_value[ 0 ] ) ? enum_value[ 0 ].length : enum_value.length ) + " entrées" );
    }
    emitGift( "sheet/js/gift/constant_gift_general.js", "DON.GENERAL", general, true );
    emitGift( "sheet/js/gift/constant_gift_class.js", "DON.CLASS", classe, false );
    emitGift( "sheet/js/gift/constant_gift_race.js", "DON.RACE", [ race ], false );
    emitGift( "sheet/js/gift/constant_gift_skill.js", "DON.SKILL", [ skill ], false );
}

//********************************************  COMPENDIUM  **************************************************//

var ITEM_TYPE_FR = {
    "equipment": "OBJET", "weapon": "ARME", "armor": "ARMURE", "shield": "BOUCLIER",
    "consumable": "CONSOMMABLE", "backpack": "SAC À DOS", "treasure": "TRÉSOR", "kit": "KIT"
};

// OBJECT.COMPENDIUM feeds the information popups of the @UUID links : one
// entry per scraped id, every source pack merged, French display strings
function compendiumEntry( e, category, href_prefix ) {
    var fr = frOf( e );
    var element_type = null;
    if ( category === "feat" ) {
        element_type = "DON " + ( e.level === undefined ? 0 : e.level );
    }
    else if ( category === "item" ) {
        element_type = ( ITEM_TYPE_FR[ e.type ] || "OBJET" ) + " " + ( e.level === undefined ? 0 : e.level );
    }
    else if ( category === "spell" ) {
        element_type = NATURE_FR[ spellNatureOf( e ) ] + " " + e.level;
    }
    else if ( category === "creature" ) {
        element_type = e.level !== undefined && e.level !== null ? "Niveau " + e.level : null;
    }
    return {
        "action_cost" : e.actionType === "action" ? String( e.actions ) : ( e.actionType === "reaction" ? "r" : ( e.actionType === "free" ? "f" : null ) ),
        "bulk"        : e.bulk === undefined || e.bulk === null ? null : ( e.bulk === 0.1 ? "L" : ( e.bulk === 0 ? null : String( e.bulk ) ) ),
        "category"    : category,
        "description" : cleanSpellDescription( fr.description || e.description || "" ),
        "element_type": element_type,
        "href"        : href_prefix + e._id,
        "id"          : e._id,
        "price"       : e.price ? formatPrice( e.price ) : null,
        "required"    : ( e.prerequisites || [] ).map( translatePrerequisite ),
        "text"        : fr.name || e.name,
        "traits"      : mapTraits( e )
    };
}

function generateCompendium() {
    var out = {};
    function addAll( list, category, href_prefix ) {
        if ( !list ) {
            return;
        }
        for ( var i = 0; i < list.length; i++ ) {
            var e = list[ i ];
            if ( e._id && !out[ e._id ] ) {
                out[ e._id ] = compendiumEntry( e, category, href_prefix );
            }
        }
    }
    addAll( SPELLS, "spell", "/spells/" );
    addAll( EQUIP, "item", "/equipment/" );
    addAll( FEATS, "feat", "/feats/" );
    addAll( ACTIONS, "action", "/actions/" );
    addAll( CONDITIONS, "condition", "/conditions/" );
    addAll( EFFECTS, "effect", "/effects/" );
    addAll( CLASS_FEATURES, "class-feature", "/class-features/" );
    addAll( ANC_FEATURES, "ancestry-feature", "/ancestry-features/" );
    addAll( DEITIES, "deity", "/deities/" );
    addAll( HERITAGES, "heritage", "/heritages/" );
    addAll( ANCESTRIES, "ancestry", "/ancestries/" );
    addAll( BACKGROUNDS, "background", "/backgrounds/" );
    addAll( ARCHETYPES, "archetype", "/archetypes/" );
    addAll( loadCache( "hazards" ), "hazard", "/hazards/" );
    addAll( loadCache( "vehicles" ), "vehicle", "/vehicles/" );
    addAll( loadCache( "domains" ), "domain", "/domains/" );
    addAll( loadCache( "boons-and-curses" ), "boon", "/boons-and-curses/" );
    addAll( loadCache( "companions" ), "companion", "/companions/" );
    addAll( loadCache( "familiar-abilities" ), "familiar-ability", "/familiar-abilities/" );
    addAll( loadCache( "npc-abilities" ), "npc-ability", "/npc-abilities/" );
    addAll( loadCache( "creatures" ), "creature", "/creatures/" );
    // The accessor tail of the compendium file (getKnownActions,
    // getActionInformation...) is hand-written : it survives the re-scrap,
    // copied verbatim after the regenerated OBJECT.COMPENDIUM object
    var compendium_tail = "";
    var compendium_full = path.join( ROOT, "sheet/js/object/constant_objects.js" );
    if ( fs.existsSync( compendium_full ) ) {
        var compendium_content = fs.readFileSync( compendium_full, "utf8" );
        var compendium_at      = compendium_content.indexOf( "OBJECT.COMPENDIUM" );
        var compendium_close   = compendium_content.indexOf( "\n};", compendium_at );
        if ( compendium_close !== -1 ) {
            compendium_tail = compendium_content.slice( compendium_close + 3 );
        }
    }
    writeGenerated( "sheet/js/object/constant_objects.js", emitJs( "OBJECT.COMPENDIUM", out ) + compendium_tail );
    console.log( "compendium: " + Object.keys( out ).length + " entrées" );
}

//********************************************  MERGE (historiques, héritages, archétypes)  **************************************************//

// The existing entries of these hand-shaped files come from a richer scrap :
// they are kept verbatim, only the MISSING ones are appended from the site
// data (merge by French name, never a rewrite of what exists)
var PROJECT_PRE = [ "SPELLS","STUFFS","DON","CLASSES","ARCHETYPES","HISTORICS","RACES","LEGACIES","OBJECT","SKILLS","SERVICE","LEVELUP","MASTERY","SPELL","STUFF","LIBRARY","COMBAT","ADJUSTMENT","CHARACTER","GS","WINDOW_V2","MANAGER","CONTROLLER","CHARACTERISTICS","POPUP","COMPONENT" ];

function loadProject( files ) {
    var sandbox = {};
    for ( var i = 0; i < PROJECT_PRE.length; i++ ) {
        sandbox[ PROJECT_PRE[ i ] ] = {};
    }
    sandbox.SERVICE = { STRING: { containsIgnoreCase: function () { return false; } } };
    for ( var f = 0; f < files.length; f++ ) {
        var code = fs.readFileSync( path.join( ROOT, files[ f ] ), "utf8" );
        code = code.replace( /"use strict";/g, "" ).replace( /^var\s+/gm, "" );
        new Function( "sandbox", "with (sandbox) { " + code + " }" )( sandbox );
    }
    return sandbox;
}

var ABILITY_TO_CHAR_KEY = { "str": "FOR", "dex": "DEX", "con": "CON", "int": "INT", "wis": "SAG", "cha": "CHA" };

function historicEntry( b, skill_label_by_key, skill_char_by_key ) {
    var fr  = frOf( b );
    var desc_html = fr.description || b.description || "";
    // the skill feat granted by the background : the feats-srd @UUID links
    // of its description
    var gift_skill = [];
    var uuid_re = /@UUID\[Compendium\.pf2e\.feats-srd\.Item\.([^\]]+)\]\{([^}]*)\}/g;
    var um;
    while ( ( um = uuid_re.exec( desc_html ) ) !== null ) {
        gift_skill.push( um[ 2 ] );
    }
    // the attribute boosts : one choice list per boost, "free" becomes FRE
    var choice = [];
    var number = 0;
    if ( b.boosts ) {
        var boost_keys = Object.keys( b.boosts ).sort( function ( a, b2 ) { return parseInt( a, 10 ) - parseInt( b2, 10 ); } );
        number = boost_keys.length;
        for ( var i = 0; i < boost_keys.length; i++ ) {
            var attrs = b.boosts[ boost_keys[ i ] ];
            for ( var a = 0; a < attrs.length; a++ ) {
                if ( attrs[ a ] === "free" ) {
                    choice.push( "FRE" );
                }
                else {
                    choice.push( ABILITY_TO_CHAR_KEY[ attrs[ a ] ] || attrs[ a ].toUpperCase() );
                }
            }
        }
    }
    // the trained skills
    var skills = [];
    var trained = b.trainedSkills || [];
    for ( var t = 0; t < trained.length; t++ ) {
        var key = trained[ t ];
        var label = skill_label_by_key[ key ] || ( /lore/i.test( key ) ? "Connaissance" : key );
        skills.push( {
            "label"         : label,
            "characteristic": skill_char_by_key[ key ] || "INT",
            "rank"          : "qualify"
        } );
    }
    // a lore mentioned in the description but not in trainedSkills
    if ( /connaissance/i.test( desc_html ) && !skills.some( function ( s2 ) { return s2.label === "Connaissance"; } ) ) {
        skills.push( { "label": "Connaissance", "characteristic": skill_char_by_key[ "lore" ] || "INT", "rank": "qualify" } );
    }
    return {
        "name"                 : fr.name || b.name,
        "description"          : splitDescriptionParagraphs( desc_html ),
        "gift_skill"           : gift_skill,
        "characteristics_bonus": { "number": number, "choice": choice },
        "skills"               : skills
    };
}

function legacyEntry( h ) {
    var fr   = frOf( h );
    var desc = fr.description || h.description || "";
    var values = ( h.traits && h.traits.value ) || [];
    var sens   = [];
    if ( /vision nocturne/i.test( desc ) ) { sens.push( "vision nocturne" ); }
    if ( /vision dans le noir/i.test( desc ) ) { sens.push( "vision dans le noir" ); }
    var name = fr.name || h.name;
    return {
        "bonus": {
            "dons" : { "ancestraux": [ name.toLowerCase() + "s" ] },
            "sens" : sens,
            "traits": values.map( function ( v ) { return trTrait( v ).toLowerCase(); } )
        },
        "category"     : "heritages",
        "general_desc" : splitDescriptionParagraphs( desc ),
        "href"         : "/heritages/" + h._id,
        "id"           : h._id,
        "name"         : name,
        "text"         : name,
        "traits"       : [ name ]
    };
}

function archetypeEntry( a ) {
    var fr = frOf( a );
    return {
        "name"       : fr.name || a.name,
        "name_en"    : a.name,
        "level"      : 0,
        "traits"     : mapTraits( a ),
        "description": splitDescriptionParagraphs( fr.description || a.description || "" ),
        "skills"     : []
    };
}

function generateMerge() {
    var proj = loadProject( [ "sheet/js/constant.js", "sheet/js/constant_divers.js", "sheet/js/historics/constant_historic.js", "sheet/js/legacy/legacy_constant.js", "sheet/js/legacy/legacy_enum.js", "sheet/js/archetype/constant_archetype.js" ] );

    // skill key -> French label / characteristic key, from SKILLS.LIST
    var skill_label_by_key = {};
    var skill_char_by_key  = {};
    var list = proj.SKILLS && proj.SKILLS.LIST ? proj.SKILLS.LIST : {};
    var list_keys = Object.keys( list );
    for ( var i = 0; i < list_keys.length; i++ ) {
        var entry = list[ list_keys[ i ] ];
        skill_label_by_key[ list_keys[ i ].toLowerCase() ] = entry.label;
        skill_char_by_key[ list_keys[ i ].toLowerCase() ]  = entry.characteristic;
    }

    // HISTORICS
    var hist_enum  = [];
    var hist_names = {};
    for ( var h = 0; h < proj.HISTORICS.ENUM.length; h++ ) {
        var hn = proj.HISTORICS.ENUM[ h ].name;
        if ( hist_names[ hn ] ) { continue; }
        hist_names[ hn ] = true;
        hist_enum.push( proj.HISTORICS.ENUM[ h ] );
    }
    var added_h = 0;
    for ( var b = 0; b < BACKGROUNDS.length; b++ ) {
        var fr_name = frOf( BACKGROUNDS[ b ] ).name || BACKGROUNDS[ b ].name;
        if ( hist_names[ fr_name ] ) { continue; }
        hist_names[ fr_name ] = true;
        hist_enum.push( historicEntry( BACKGROUNDS[ b ], skill_label_by_key, skill_char_by_key ) );
        added_h++;
    }
    hist_enum.sort( function ( a, b ) { return a.name.localeCompare( b.name, "fr" ); } );
    var hist_content = "\"use strict\";\nvar HISTORICS = " + JSON.stringify( proj.HISTORICS, null, 4 ).replace( /": /g, "\" : " ).replace( /"ENUM"/, "\"ENUM\"" ) + ";\n";
    // rebuild only ENUM, keep the rest of the namespace as-is
    hist_content = "\"use strict\";\nvar HISTORICS = {\n    key          : \"historics\",\n    label        : \"Historiques\",\n    key_element  : \"historic\",\n    label_element: \"Historique\",\n    ENUM         : " +
        JSON.stringify( hist_enum, null, 4 ).replace( /": /g, "\" : " ).replace( /^/gm, "    " ) + "\n};\n";
    // keep the accessor tail of the current file if any
    var hist_tail = extractTail( "sheet/js/historics/constant_historic.js" );
    if ( hist_tail.trim() ) { hist_content += hist_tail; }
    writeGenerated( "sheet/js/historics/constant_historic.js", hist_content );
    console.log( "historiques: " + hist_enum.length + " (" + added_h + " ajoutés)" );

    // LEGACIES (object keyed by id)
    var leg_enum  = proj.LEGACIES.ENUM;
    var leg_names = {};
    var leg_ids   = Object.keys( leg_enum );
    for ( var l = 0; l < leg_ids.length; l++ ) { leg_names[ leg_enum[ leg_ids[ l ] ].name ] = true; }
    var added_l = 0;
    for ( var g = 0; g < HERITAGES.length; g++ ) {
        var h_fr = frOf( HERITAGES[ g ] ).name || HERITAGES[ g ].name;
        if ( leg_names[ h_fr ] ) { continue; }
        leg_enum[ HERITAGES[ g ]._id ] = legacyEntry( HERITAGES[ g ] );
        added_l++;
    }
    // the legacy object is re-emitted with its keys sorted by French name
    var leg_sorted = {};
    Object.keys( leg_enum ).sort( function ( a, b ) { return leg_enum[ a ].name.localeCompare( leg_enum[ b ].name, "fr" ); } )
        .forEach( function ( k ) { leg_sorted[ k ] = leg_enum[ k ]; } );
    leg_enum = leg_sorted;
    var leg_content = "\"use strict\";\nLEGACIES.ENUM = " + JSON.stringify( leg_enum, null, 4 ).replace( /": /g, "\" : " ) + ";\n";
    var leg_tail = extractTail( "sheet/js/legacy/legacy_enum.js" );
    if ( leg_tail.trim() ) { leg_content += leg_tail; }
    writeGenerated( "sheet/js/legacy/legacy_enum.js", leg_content );
    console.log( "héritages: " + Object.keys( leg_enum ).length + " (" + added_l + " ajoutés)" );

    // ARCHETYPES (array)
    var arch_enum  = proj.ARCHETYPES.ENUM.slice();
    var arch_names = {};
    for ( var a2 = 0; a2 < arch_enum.length; a2++ ) { arch_names[ arch_enum[ a2 ].name ] = true; }
    var added_a = 0;
    for ( var c = 0; c < ARCHETYPES.length; c++ ) {
        var a_fr = frOf( ARCHETYPES[ c ] ).name || ARCHETYPES[ c ].name;
        if ( arch_names[ a_fr ] ) { continue; }
        arch_enum.push( archetypeEntry( ARCHETYPES[ c ] ) );
        added_a++;
    }
    arch_enum.sort( function ( a, b ) { return a.name.localeCompare( b.name, "fr" ); } );
    var arch_content = "\"use strict\";\nvar ARCHETYPES = " + JSON.stringify( proj.ARCHETYPES, null, 4 ).replace( /": /g, "\" : " ) + ";\n";
    arch_content = "\"use strict\";\nvar ARCHETYPES = {\n    key          : \"archetypes\",\n    label        : \"Archétypes\",\n    key_element  : \"archetype\",\n    default_value: \"Aucun\",\n    label_element: \"Archétype\",\n    ENUM         : " +
        JSON.stringify( arch_enum, null, 2 ).replace( /": /g, "\" : " ).replace( /^/gm, "    " ) + "\n};\n";
    var arch_tail = extractTail( "sheet/js/archetype/constant_archetype.js" );
    if ( arch_tail.trim() ) { arch_content += arch_tail; }
    writeGenerated( "sheet/js/archetype/constant_archetype.js", arch_content );
    console.log( "archétypes: " + arch_enum.length + " (" + added_a + " ajoutés)" );
}

//********************************************  CLASSES (merge)  **************************************************//

var RANK_LETTER = { 1: "Q", 2: "E", 3: "M", 4: "L" };
var RANK_FR_LABEL = { "I": "Inexpérimenté", "Q": "Qualifié", "E": "Expert", "M": "Maître", "L": "Légende" };
var SAVE_FR = { "fortitude": "Vigueur", "reflex": "Réflexes", "will": "Volonté" };
var ATTACK_FR = [
    [ "unarmed", "attaques à mains nues", "en" ],
    [ "simple", "armes simples", "avec les" ],
    [ "martial", "armes de guerre", "avec les" ],
    [ "advanced", "armes évoluées", "avec les" ]
];
var DEFENSE_FR = [
    [ "unarmored", "défense sans armure", "en" ],
    [ "light", "armures légères", "avec les" ],
    [ "medium", "armures intermédiaires", "avec les" ],
    [ "heavy", "armures lourdes", "avec les" ]
];

function lowerFirst( s ) {
    return s.charAt( 0 ).toLowerCase() + s.slice( 1 );
}

function abilityKeyOf( label ) {
    return label.toLowerCase().normalize( "NFD" ).replace( /[̀-ͯ]/g, "" ).replace( /[^a-z0-9]+/g, "_" ).replace( /^_+|_+$/g, "" );
}

// split a cleaned HTML description into paragraphs (HTML kept, like the
// existing class abilities)
function htmlParagraphs( html ) {
    if ( !html ) {
        return [];
    }
    var cleaned = cleanSpellDescription( html );
    return cleaned.split( /<\/p>/ ).map( function ( p ) { return p.trim(); } ).filter( Boolean )
        .map( function ( p ) { return p.match( /^<p/ ) ? p : ( "<p>" + p + "</p>" ); } );
}

// the prose sections of a class description (h2 driven)
function classDescSections( desc_html ) {
    var out = { "desc_fight": "", "desc_socially": "", "desc_exploration": "", "desc_interlude": "", "desc_you_could": "", "desc_probably_others": "" };
    var parts = desc_html.split( /<h[12][^>]*>/i );
    for ( var i = 1; i < parts.length; i++ ) {
        var head = parts[ i - 1 ].match( /<h[12][^>]*>([\s\S]*?)<\/h[12]>/i );
        var head_text = head ? head[ 1 ].replace( /<[^>]+>/g, "" ).trim().toLowerCase() : "";
        var body = parts[ i ].split( /<h[12][^>]*>/i )[ 0 ];
        var body_clean = cleanSpellDescription( body ).trim();
        if ( head_text.indexOf( "combat" ) !== -1 ) { out.desc_fight = body_clean; }
        else if ( head_text.indexOf( "social" ) !== -1 ) { out.desc_socially = body_clean; }
        else if ( head_text.indexOf( "exploration" ) !== -1 ) { out.desc_exploration = body_clean; }
        else if ( head_text.indexOf( "intermède" ) !== -1 || head_text.indexOf( "intermede" ) !== -1 ) { out.desc_interlude = body_clean; }
        else if ( head_text.indexOf( "pourriez" ) !== -1 ) { out.desc_you_could = body_clean; }
        else if ( head_text.indexOf( "autres" ) !== -1 ) { out.desc_probably_others = body_clean; }
    }
    return out;
}

function classEntry( c ) {
    var fr   = frOf( c );
    // the source spells a few names "X ou Y" : keep the first form
    var name = ( fr.name || c.name ).split( " ou " )[ 0 ];
    var desc_html = fr.description || c.description || "";
    var trait = c.name.toLowerCase();

    // the class features of this class (the trait carries the English name)
    var features = [];
    for ( var i = 0; i < CLASS_FEATURES.length; i++ ) {
        var v = ( CLASS_FEATURES[ i ].traits && CLASS_FEATURES[ i ].traits.value ) || [];
        if ( v.indexOf( trait ) !== -1 ) {
            features.push( CLASS_FEATURES[ i ] );
        }
    }
    var base_features = features.filter( function ( f ) { return !( f.subfeatures && f.subfeatures.length ); } );

    // abilities : every feature, keyed by the ability key of its French name
    var abilities = {};
    for ( var a = 0; a < features.length; a++ ) {
        var fname = frOf( features[ a ] ).name || features[ a ].name;
        abilities[ abilityKeyOf( fname ) ] = {
            "name"       : fname,
            "description": htmlParagraphs( frOf( features[ a ] ).description || features[ a ].description || "" )
        };
    }

    // capacity_by_level : one string per level 1..20, base features + the
    // standard labels, alphabetically sorted
    var capacity_by_level = [];
    for ( var lvl = 1; lvl <= 20; lvl++ ) {
        var labels = [];
        for ( var b = 0; b < base_features.length; b++ ) {
            if ( base_features[ b ].level === lvl ) {
                labels.push( lowerFirst( frOf( base_features[ b ] ).name || base_features[ b ].name ) );
            }
        }
        if ( lvl === 1 ) {
            labels.push( "maîtrises initiales" );
        }
        if ( ( c.skillFeatLevels || [] ).indexOf( lvl ) !== -1 ) { labels.push( "don de compétence" ); }
        if ( ( c.classFeatLevels || [] ).indexOf( lvl ) !== -1 ) { labels.push( "don de " + lowerFirst( name ) ); }
        if ( ( c.generalFeatLevels || [] ).indexOf( lvl ) !== -1 ) { labels.push( "don général" ); }
        if ( ( c.ancestryFeatLevels || [] ).indexOf( lvl ) !== -1 ) { labels.push( "don ancestral" ); }
        if ( ( c.skillIncreaseLevels || [] ).indexOf( lvl ) !== -1 ) { labels.push( "amélioration de compétence" ); }
        if ( lvl === 5 || lvl === 10 || lvl === 15 || lvl === 20 ) { labels.push( "primes d'attributs" ); }
        if ( c.spellcasting && lvl % 2 === 1 && lvl >= 3 && lvl <= 17 ) { labels.push( "sorts de rang " + ( ( lvl + 1 ) / 2 ) ); }
        labels.sort( function ( x, y ) { return x.localeCompare( y, "fr" ); } );
        capacity_by_level.push( labels.join( ", " ) );
    }

    // mastery block
    var mastery = { "perception": RANK_LETTER[ c.perception ] || null, "saves": [], "skills": [], "attacks": [], "defenses": [], "spells": [], "class_dc": null, "rarity": null };
    var saves = c.savingThrows || {};
    var save_keys = [ "fortitude", "reflex", "will" ];
    for ( var s = 0; s < save_keys.length; s++ ) {
        var r = RANK_LETTER[ saves[ save_keys[ s ] ] ];
        if ( r ) {
            mastery.saves.push( { "level": r, "description": RANK_FR_LABEL[ r ] + " en " + SAVE_FR[ save_keys[ s ] ] } );
        }
    }
    var skill_label_by_key = {};
    for ( var sk in SKILLS ) { skill_label_by_key[ sk ] = frOf( SKILLS[ sk ] ).name; }
    var trained = c.trainedSkills || [];
    for ( var t = 0; t < trained.length; t++ ) {
        mastery.skills.push( { "level": "Q", "description": "Qualifié en " + ( skill_label_by_key[ trained[ t ] ] || trained[ t ] ) } );
    }
    var choice_m = desc_html.match( /qualifié à votre choix en ([^.<]+)/i );
    if ( choice_m ) {
        mastery.skills.push( { "level": "Q", "description": "Qualifié à votre choix en " + choice_m[ 1 ].trim() } );
    }
    var sup_m = desc_html.match( /égal à (\d+) plus votre modificateur d&#39;Intelligence/i ) || desc_html.match( /égal à (\d+) plus votre modificateur d'Intelligence/i );
    if ( sup_m ) {
        mastery.skills.push( { "level": "Q", "description": "Qualifié dans un nombre de compétences supplémentaire égal à " + sup_m[ 1 ] + " plus votre modificateur d'Intelligence" } );
    }
    var attacks = c.attacks || {};
    for ( var at = 0; at < ATTACK_FR.length; at++ ) {
        var ar = RANK_LETTER[ attacks[ ATTACK_FR[ at ][ 0 ] ] ];
        if ( ar ) {
            mastery.attacks.push( { "level": ar, "description": RANK_FR_LABEL[ ar ] + " " + ATTACK_FR[ at ][ 2 ] + " " + ATTACK_FR[ at ][ 1 ] } );
        }
    }
    var defenses = c.defenses || {};
    var def_list = [];
    for ( var df = 0; df < DEFENSE_FR.length; df++ ) {
        var dr = RANK_LETTER[ defenses[ DEFENSE_FR[ df ][ 0 ] ] ];
        if ( dr ) {
            def_list.push( { "level": dr, "description": RANK_FR_LABEL[ dr ] + " " + DEFENSE_FR[ df ][ 2 ] + " " + DEFENSE_FR[ df ][ 1 ] } );
        }
    }
    mastery.defenses = def_list.length === 1 ? def_list[ 0 ] : def_list;
    if ( c.spellcasting ) {
        mastery.spells = [
            { "level": "Q", "description": "Qualifié en modificateurs d'attaques de sort" },
            { "level": "Q", "description": "Qualifié en DD des sorts" },
            { "level": "Q", "description": "Qualifié en DD de classe de " + lowerFirst( name ) }
        ];
    }

    // the prose description : first paragraph + the h2 sections
    var first_p = desc_html.match( /<p[^>]*>([\s\S]*?)<\/p>/ );
    var sections = classDescSections( desc_html );
    var out = {
        "name"                 : name,
        "key"                  : abilityKeyOf( name ),
        "general_desc"         : cleanSpellDescription( first_p ? first_p[ 0 ] : desc_html ),
        "characteristics_bonus": { "number": ( c.keyAbility || [] ).length, "choice": ( c.keyAbility || [] ).map( function ( a ) { return ABILITY_TO_CHAR_KEY[ a ] || a.toUpperCase(); } ) },
        "life_point_by_level"  : c.hp,
        "mastery"              : mastery,
        "capacity_by_level"    : capacity_by_level,
        "abilities"            : abilities
    };
    for ( var k2 in sections ) { out[ k2 ] = sections[ k2 ]; }
    return out;
}

function generateClasses() {
    var proj = loadProject( [ "sheet/js/class/constant_class.js" ] );
    var enum_existing = proj.CLASSES.ENUM.filter( function ( e ) { return e.name.indexOf( " ou " ) === -1; } );
    var names = {};
    for ( var i = 0; i < enum_existing.length; i++ ) { names[ enum_existing[ i ].name ] = true; }
    var added = 0;
    for ( var c = 0; c < CLASSES.length; c++ ) {
        var fr_name = ( frOf( CLASSES[ c ] ).name || CLASSES[ c ].name ).split( " ou " )[ 0 ];
        if ( names[ fr_name ] ) { continue; }
        enum_existing.push( classEntry( CLASSES[ c ] ) );
        added++;
    }
    enum_existing.sort( function ( a, b ) { return a.name.localeCompare( b.name, "fr" ); } );
    var content = "\"use strict\";\nvar CLASSES = " + JSON.stringify( proj.CLASSES, null, 4 ).replace( /": /g, "\" : " ) + ";\n";
    content = "\"use strict\";\nvar CLASSES = {\n    key          : \"classes\",\n    label        : \"Classes\",\n    key_element  : \"class\",\n    default_value: \"Guerrier\",\n    label_element: \"Classe\",\n    ENUM         : " +
        JSON.stringify( enum_existing, null, 4 ).replace( /": /g, "\" : " ).replace( /^/gm, "    " ) + "\n};\n";
    var tail = extractTail( "sheet/js/class/constant_class.js" );
    if ( tail.trim() ) { content += tail; }
    writeGenerated( "sheet/js/class/constant_class.js", content );
    console.log( "classes: " + enum_existing.length + " (" + added + " ajoutées)" );
}

//********************************************  SORT RACES  **************************************************//

// race_enum.js is not re-scraped (its format is richer than the site data) :
// this target only re-emits it with its entries sorted by French name, so
// the selection popup lists the ancestries alphabetically
function sortRaces() {
    var proj = loadProject( [ "sheet/js/race/race_constant.js", "sheet/js/race/race_enum.js" ] );
    var sorted = {};
    Object.keys( proj.RACES.ENUM ).sort( function ( a, b ) {
        return proj.RACES.ENUM[ a ].name.localeCompare( proj.RACES.ENUM[ b ].name, "fr" );
    } ).forEach( function ( k ) { sorted[ k ] = proj.RACES.ENUM[ k ]; } );
    writeGenerated( "sheet/js/race/race_enum.js", "RACES.ENUM = " + JSON.stringify( sorted, null, 4 ).replace( /": /g, "\" : " ) + ";\n" );
    console.log( "races triées: " + Object.keys( sorted ).length + " entrées" );
}

//********************************************  MAIN  **************************************************//

if ( target === "spells" || target === "all" ) {
    generateSpells();
}
if ( target === "stuffs" || target === "all" ) {
    generateStuffs();
}
if ( target === "feats" || target === "all" ) {
    generateFeats();
}
if ( target === "compendium" || target === "all" ) {
    generateCompendium();
}
if ( target === "merge" || target === "all" ) {
    generateMerge();
}
if ( target === "classes" || target === "all" ) {
    generateClasses();
}
if ( target === "sort-races" ) {
    sortRaces();
}
