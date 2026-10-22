var fs       = require( "fs" );
var vm       = require( "vm" );
var path     = require( "path" );
var base     = "C:/dev/workspace/Perso/Pathfinder/sheet/js";
var sandbox  = { console: console };
var ctx      = vm.createContext( sandbox );
function load( rel ) {
    var code = fs.readFileSync( path.join( base, rel ), "utf8" );
    vm.runInContext( code, ctx, { filename: rel } );
}

vm.runInContext( "var SERVICE = {}; var RACES = {}; var LEGACIES = {}; var DON = {};", ctx );
load( "service/service_string.js" );
load( "race/race_constant.js" );
load( "race/race_enum.js" );
load( "legacy/legacy_constant.js" );
load( "legacy/legacy_enum.js" );
load( "gift/constant_gift_general.js" );
load( "gift/constant_gift_class.js" );
load( "gift/constant_gift_race.js" );
load( "gift/constant_gift_skill.js" );

var R = sandbox.RACES, L = sandbox.LEGACIES, D = sandbox.DON, SS = sandbox.SERVICE.STRING;

// 1. Race names uniqueness + exact-match used by getDataByName
var raceNames = Object.keys( R.ENUM ).map( function ( k ) { return R.ENUM[ k ].name; } );
var dupRaces = raceNames.filter( function ( n, i ) { return raceNames.indexOf( n ) !== i; } );
console.log( "== races:", raceNames.length, "duplicated names:", JSON.stringify( dupRaces ) );

// 2. Required fields for RacePopup.computeHTMLEdition
var required = ["traits", "start_life", "body_size", "speed", "characteristics_bonus", "language", "sens", "general_desc", "physical_desc", "society_desc", "believe_desc"];
Object.keys( R.ENUM ).forEach( function ( k ) {
    var missing = required.filter( function ( f ) { return R.ENUM[ k ][ f ] === undefined; } );
    if ( missing.length ) { console.log( "race missing fields:", R.ENUM[ k ].name, "->", missing.join( "," ) ); }
} );

// 3. Race "legacies" vs LEGACIES.ENUM (containsIgnoreCase like getDataByName)
function findLegacy( name ) {
    var keys = Object.keys( L.ENUM );
    for ( var i = 0; i < keys.length; i++ ) {
        if ( SS.containsIgnoreCase( L.ENUM[ keys[ i ] ].name, name ) ) { return L.ENUM[ keys[ i ] ]; }
    }
    return null;
}
var allLegacyNames = Object.keys( L.ENUM ).map( function ( k ) { return L.ENUM[ k ].name; } );
console.log( "== legacies in enum:", allLegacyNames.length, "duplicated names:", JSON.stringify( allLegacyNames.filter( function ( n, i ) { return allLegacyNames.indexOf( n ) !== i; } ) ) );
Object.keys( R.ENUM ).forEach( function ( k ) {
    var legs = R.ENUM[ k ].legacies || [];
    legs.forEach( function ( ln ) {
        var found = findLegacy( ln );
        if ( !found ) {
            console.log( "LEGACY NOT FOUND for race", R.ENUM[ k ].name, "->", JSON.stringify( ln ) );
        } else {
            if ( found.general_desc === undefined ) { console.log( "legacy without general_desc used by", R.ENUM[ k ].name, "->", found.name ); }
            if ( found.traits === undefined ) { console.log( "legacy without traits used by", R.ENUM[ k ].name, "->", found.name ); }
        }
    } );
} );

// 4. containsIgnoreCase subtlety: multiple matches / substring ambiguity
Object.keys( R.ENUM ).forEach( function ( k ) {
    ( R.ENUM[ k ].legacies || [] ).forEach( function ( ln ) {
        var count = 0;
        Object.keys( L.ENUM ).forEach( function ( lk ) {
            if ( SS.containsIgnoreCase( L.ENUM[ lk ].name, ln ) ) { count++; }
        } );
        if ( count > 1 ) { console.log( "AMBIGUOUS legacy match:", ln, "matches", count ); }
    } );
} );

// 5. Gift structures: flat arrays, nested arrays, duplicates, key completeness
function scanEnum( label, arr ) {
    var names = [];
    arr.forEach( function ( item ) {
        var groups = Array.isArray( item ) ? item : [item];
        groups.forEach( function ( g ) {
            if ( g === null || typeof g !== "object" ) { console.log( label, "BAD ITEM:", JSON.stringify( item ).slice( 0, 60 ) ); return; }
            ["name", "level", "traits", "required", "description"].forEach( function ( f ) {
                if ( g[ f ] === undefined ) { console.log( label, "missing", f, "->", g.name ); }
            } );
            names.push( g.name );
        } );
    } );
    var dups = names.filter( function ( n, i ) { return names.indexOf( n ) !== i; } );
    if ( dups.length ) { console.log( label, "duplicated names:", JSON.stringify( dups.slice( 0, 20 ) ) ); }
    var nested = arr.filter( function ( i ) { return Array.isArray( i ); } ).length;
    console.log( "== " + label + ": items:", arr.length, "nested arrays:", nested, "names:", names.length );
}
scanEnum( "DON.GENERAL", D.GENERAL.ENUM );
scanEnum( "DON.CLASS", D.CLASS.ENUM );
scanEnum( "DON.RACE", D.RACE.ENUM );
scanEnum( "DON.SKILL", D.SKILL.ENUM );

// 6. Cross-file duplicates (toggle keyed by name only)
var seen = {};
function collect( arr, tag ) {
    arr.forEach( function ( item ) {
        var groups = Array.isArray( item ) ? item : [item];
        groups.forEach( function ( g ) {
            if ( seen[ g.name ] && seen[ g.name ] !== tag ) { console.log( "CROSS-DUPLICATE gift name:", g.name, "in", tag, "and", seen[ g.name ] ); }
            seen[ g.name ] = tag;
        } );
    } );
}
collect( D.GENERAL.ENUM, "general" );
collect( D.CLASS.ENUM, "class" );
collect( D.RACE.ENUM, "race" );
collect( D.SKILL.ENUM, "skill" );

// 7. Gift race traits vs race names (matching used by _hasTrait)
var traitCount = {};
D.RACE.ENUM.forEach( function ( item ) {
    var groups = Array.isArray( item ) ? item : [item];
    groups.forEach( function ( g ) {
        ( g.traits || [] ).forEach( function ( t ) { traitCount[ t ] = ( traitCount[ t ] || 0 ) + 1; } );
    } );
} );
console.log( "== gift race traits:", JSON.stringify( traitCount ) );
console.log( "== race names:", JSON.stringify( raceNames ) );

// 8. Legacy enum names lowercase/odd
var odd = allLegacyNames.filter( function ( n ) { return n === undefined || n === null || n === ""; } );
console.log( "== legacy names empty/undefined:", odd.length );
