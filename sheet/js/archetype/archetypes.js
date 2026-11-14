"use strict";

//********************************************  DATA   **************************************************//

ARCHETYPES.getDataByName = function ( name ) {
    for ( let i = 0, _size_i = ARCHETYPES.ENUM.length; i < _size_i; i++ ) {
        if ( ARCHETYPES.ENUM[ i ].name === name ) {
            return ARCHETYPES.ENUM[ i ];
        }
    }
    return null;
};

// The feats of an archetype up to a level, sorted by feat level then name :
// the options of a Progression section at level N offer every feat the
// archetype carries at or under N
ARCHETYPES.getFeatsUpToLevel = function ( name, level ) {
    let data      = ARCHETYPES.getDataByName( name );
    let to_return = [];
    if ( !data || !data.skills ) {
        return to_return;
    }
    for ( let i = 0, _size_i = data.skills.length; i < _size_i; i++ ) {
        if ( ( parseInt( data.skills[ i ].level, 10 ) || 0 ) <= level ) {
            to_return.push( data.skills[ i ] );
        }
    }
    to_return.sort( function ( feat_a, feat_b ) {
        let level_a = parseInt( feat_a.level, 10 ) || 0;
        let level_b = parseInt( feat_b.level, 10 ) || 0;
        if ( level_a !== level_b ) {
            return level_a - level_b;
        }
        return ( feat_a.name || "" ).localeCompare( feat_b.name || "" );
    } );
    return to_return;
};

// The feat lines a library card displays (one per feat, with its feat
// level) : displayed means searchable, the rule of the library
ARCHETYPES.getFeatsSearchText = function ( name ) {
    let data = ARCHETYPES.getDataByName( name );
    if ( !data || !data.skills ) {
        return "";
    }
    let parts = [];
    for ( let i = 0, _size_i = data.skills.length; i < _size_i; i++ ) {
        parts.push( data.skills[ i ].name + " (Don " + ( data.skills[ i ].level || 0 ) + ")" );
    }
    return parts.join( " " );
};
