//priority 10
//__lib__ lib_common
"use strict";
SERVICE.DOM = (function ( self ) {
    self.createElement            = function ( tag, attributes, innerHTML ) {
        const toReturn = document.createElement( tag );
        if ( attributes ) {
            const keys = Object.keys( attributes );
            const size = keys.length;
            for ( let i = 0; i < size; i++ ) {
                toReturn.setAttribute( keys[ i ], attributes[ keys[ i ] ] );
            }
        }
        if ( innerHTML !== undefined && innerHTML !== null ) {
            toReturn.innerHTML = innerHTML;
        }
        return toReturn;
    };
    self.createPropertyHorizontal = function ( property_name, value, label ) {
        let toReturn = SERVICE.DOM.createElement( "div", { class: " property_horizontal " + property_name } );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "label" }, label ), toReturn );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "value", contentEditable: "true" }, value ), toReturn );
        return toReturn;
    };
    self.removeElement            = function ( element ) {
        if ( !element ) {
            return;
        }
        const parent = element.parentNode;
        
        try {
            const _to_return = parent.removeChild( element );
            return _to_return;
        }
        catch ( e ) {
            return false;
        }
    };
    self.addElementTo             = function ( element, parent ) {
        if ( parent && element ) {
            parent.appendChild( element );
            return element;
        }
        return null;
    };
    return self;
})( SERVICE.DOM || {} );


