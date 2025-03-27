"use strict";
SERVICE.STRING = (function ( self ) {
    self.replaceAll   = function ( string, target, replacement ) {
        return string.split( target ).join( replacement || '' );
    };
    self.contains     = function ( string, to_find ) {
        if ( !string || !to_find ) {
            return false;
        }
        return string.indexOf( to_find ) !== -1;
    };
    self.splitAndTrim = function ( string_to_split, separator, index_to_return ) {
        let to_return = string_to_split.split( separator );
        return to_return[ index_to_return ].trim();
    };
    return self;
})( SERVICE.STRING || {} );


SERVICE.CLASS = (function ( self ) {
    self.addPrototype = function ( object_to_add_in, object_to_add_from ) {
        var _current;
        var _keys = Object.keys( object_to_add_from.prototype );
        for ( var i = 0, _size = _keys.length; i < _size; i++ ) {
            _current = _keys[ i ];
            if ( object_to_add_in.prototype[ _current ] === undefined ) {
                object_to_add_in.prototype[ _current ] = object_to_add_from.prototype[ _current ];
            }
        }
    };
    return self;
})( SERVICE.CLASS || {} );
