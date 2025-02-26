"use strict";
SERVICE.DOM = (function ( self ) {
    self.createElement            = function ( tag, attributes, innerHTML ) {
        const toReturn = document.createElement( tag );
        if ( attributes ) {
            const keys = Object.keys( attributes );
            const size = keys.length;
            for ( var i = 0; i < size; i++ ) {
                toReturn.setAttribute( keys[ i ], attributes[ keys[ i ] ] );
            }
        }
        if ( innerHTML !== undefined && innerHTML !== null ) {
            toReturn.innerHTML = innerHTML;
        }
        return toReturn;
    };
    self.removeElement            = function ( element ) {
        if ( !element ) {
            return;
        }
        const parent = element.parentNode;
        
        try {
            return parent.removeChild( element );
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
    //********************************************  PROPERTY   **************************************************//
    self.createPropertyHorizontal = function ( property_name, value, label, is_editable ) {
        var toReturn = SERVICE.DOM.createElement( "div", { class: " property horizontal", "data-name": property_name } );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "label" }, label ), toReturn );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "value", contentEditable: is_editable }, value ), toReturn );
        return toReturn;
    };
    self.createPropertyVertical   = function ( property_name, value, label, is_editable ) {
        var toReturn = SERVICE.DOM.createElement( "div", { class: " property vertical", "data-name": property_name } );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "label" }, label ), toReturn );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "value", contentEditable: is_editable, onclick: "CONTROLLER.Main.openEdition('" + property_name + "')" }, value ), toReturn );
        return toReturn;
    };
        //********************************************  EDITION POP UP   **************************************************//
        self.createEditionPropertyHorizontal = function ( value, label ) {
            var toReturn = SERVICE.DOM.createElement( "div", { class: " edition-property horizontal"} );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "label" }, label ), toReturn );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "value" }, value ), toReturn );
            return toReturn;
        };
        
    return self;
})( SERVICE.DOM || {} );


