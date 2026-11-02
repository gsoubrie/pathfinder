"use strict";
var fs = require( "fs" );
var extract = function ( file_name ) {
    var src = fs.readFileSync( "C:/dev/workspace/Perso/Pathfinder/sheet/js/gift/" + file_name, "utf8" );
    src = src.replace( "var DON = {};", "var DON = {};" );
    return new Function( "var DON = {}; " + src + "; return DON;" )();
};
var skill = extract( "constant_gift_skill.js" );
var classe = extract( "constant_gift_class.js" );
console.log( "SKILL ENUM shape: outer length", skill.ENUM.length, "inner lengths:", skill.ENUM.map( function ( x ) { return Array.isArray( x ) ? x.length : typeof x; } ).slice( 0, 20 ) );
var sample = skill.ENUM[ 1 ] || skill.ENUM[ 0 ];
console.log( "sample[0]:", JSON.stringify( sample[ 0 ] ).slice( 0, 300 ) );
var with_req = [];
skill.ENUM.forEach( function ( group ) {
    ( Array.isArray( group ) ? group : [] ).forEach( function ( f ) {
        if ( f.required && f.required.length ) { with_req.push( f.name + " => " + JSON.stringify( f.required ) ); }
    } );
} );
console.log( "--- required samples (first 12) ---" );
console.log( with_req.slice( 0, 12 ).join( "\n" ) );
console.log( "total with required:", with_req.length );
console.log( "CLASS ENUM shape: outer length", classe.ENUM.length, "inner:", classe.ENUM.map( function ( x ) { return Array.isArray( x ) ? x.length : typeof x; } ).slice( 0, 20 ) );
var class_traits = {};
classe.ENUM.forEach( function ( group ) {
    ( Array.isArray( group ) ? group : [] ).forEach( function ( f ) {
        ( f.traits || [] ).forEach( function ( t ) { class_traits[ t ] = ( class_traits[ t ] || 0 ) + 1; } );
    } );
} );
console.log( "class feat traits:", JSON.stringify( class_traits ) );
