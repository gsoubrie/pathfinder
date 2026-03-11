"use strict";
SERVICE.STRING = (function ( self ) {
    self.replaceAll                   = function ( string, target, replacement ) {
        return string.split( target ).join( replacement || '' );
    };
    self.containsIgnoreCase           = function ( string, to_find ) {
        if ( !string ) {
            return false;
        }
        
        var _string_to_lower_case  = string.toLowerCase();
        var _to_find_to_lower_case = to_find.toLowerCase();
        return self.contains( _string_to_lower_case, _to_find_to_lower_case );
    };
    self.contains                     = function ( string, to_find ) {
        if ( !string || !to_find ) {
            return false;
        }
        return string.indexOf( to_find ) !== -1;
    };
    self.startsWith                   = function ( string, to_find ) {
        if ( !string ) {
            return false;
        }
        return string.substr( 0, to_find.length ) === to_find;
    };
    self.splitAndTrim                 = function ( string_to_split, separator, index_to_return ) {
        let to_return = string_to_split.split( separator );
        return to_return[ index_to_return ].trim();
    };
    self.endsWith                     = function ( string, to_find ) {
        if ( !string ) {
            return false;
        }
        var _start_index = string.length - to_find.length;
        return string.substr( _start_index ) === to_find;
    };
    self.buildS4                      = function () {
        return Math.floor( (1 + Math.random()) * 0x10000 )
                   .toString( 16 )
                   .substring( 1 );
    };
    self.buildUUID                    = function () {
        return "U" + self.buildS4() + self.buildS4() + self.buildS4() + self.buildS4() +
               self.buildS4() + self.buildS4() + self.buildS4() + self.buildS4();
    };
    self.parseStringToPositiveInteger = function ( value ) {
        return parseInt( value.replace( /[^\d]/g, '' ) );
    };
    self.parseMatching                = function ( text, matching_list ) {
        let to_return = [];
        var _keys     = Object.keys( matching_list );
        var _current_key;
        for ( let i = 0, _size = _keys.length; i < _size; i++ ) {
            _current_key = _keys[ i ];
            if ( self.containsIgnoreCase( text, matching_list[ _current_key ].label ) ) {
                to_return.push( matching_list[ _current_key ].key );
            }
        }
        return to_return;
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
