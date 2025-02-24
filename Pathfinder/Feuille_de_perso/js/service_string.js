"use strict";
SERVICE.STRING = (function ( self ) {
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
