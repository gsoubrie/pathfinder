"use strict";
/**
 * @typedef {Object} SERVICE.DATA
 */
SERVICE.DATA = (function ( /** @type {SERVICE.DATA} */ self ) {
    // The uuid of a loaded save, whatever the case of the asked one (the
    // url ?id=anastasia and ?id=Anastasia load the same character) : the
    // saves are declared by a top-level `let <uuid> = ...` (a lexical
    // global binding, not a window property), so the available uuids are
    // read back from the loaded script tags — the save files of
    // sheet/save/ by their src filename, the inline injected saves by
    // their `let <uuid> =` declaration. Null when nothing matches
    self.getExistingUUID = function ( uuid ) {
        if ( !uuid ) {
            return null;
        }
        try {
            eval( uuid );
            return uuid;
        } catch ( e ) {}
        let wanted  = ( "" + uuid ).toLowerCase();
        let scripts = document.querySelectorAll( "script" );
        for ( let i = 0, _size_i = scripts.length; i < _size_i; i++ ) {
            let src_attr = scripts[ i ].getAttribute( "src" );
            if ( src_attr ) {
                let file_match = src_attr.match( /sheet\/save\/([^\/]+)\.js(\?|#|$)/ );
                if ( file_match && file_match[ 1 ].toLowerCase() === wanted ) {
                    return file_match[ 1 ];
                }
                continue;
            }
            let inline_match = ( scripts[ i ].textContent || "" ).match( /(?:^|\n)\s*let\s+([A-Za-z0-9_]+)\s*=/ );
            if ( inline_match && inline_match[ 1 ].toLowerCase() === wanted ) {
                return inline_match[ 1 ];
            }
        }
        return null;
    };
    self.loadDataByUUID  = function ( uuid ) {
        // Case-insensitive resolution first ; an unknown uuid keeps the
        // historical behaviour (eval throws)
        return eval( self.getExistingUUID( uuid ) || uuid );
    };
    return self;
})( SERVICE.DATA || {} );


