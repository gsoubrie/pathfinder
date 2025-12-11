"use strict";
SERVICE.DOM_HELPER = (function ( self ) {
    //********************************************  BUTTON   **************************************************//
    self.createMoreButton                 = function ( params_for_events ) {
        return self.createButton( "event__more_button", "+", params_for_events );
    };
    self.createLessButton                 = function ( params_for_events ) {
        return self.createButton( "event__less_button", "-", params_for_events );
    };
    self.createButton                     = function ( event_name, label, params_for_events ) {
        var toReturn = new COMPONENT.ButtonFromData_V3( event_name, label );
        toReturn.addParamsForEvents( params_for_events );
        toReturn.computeHtml();
        return toReturn.dom_element;
    };
    //********************************************  DIV   **************************************************//
    self.createDiv_SpaceAround            = function ( label, class_to_add ) {
        class_to_add = class_to_add || "";
        return self.createDiv_FullyCentred( label, class_to_add + " flex-layout-justify-around" );
    };
    self.createDiv_FullyCentred           = function ( label, class_to_add ) {
        let to_return = SERVICE.DOM.createElement( "div", { class: "flex-layout-center-h-v" }, label );
        if ( class_to_add ) {
            SERVICE.DOM.addClasses( to_return, class_to_add );
        }
        return to_return;
    };
    //********************************************  PROPERTY   **************************************************//
    self.createPropertyHorizontal         = function ( property_name, value, label, is_editable ) {
        var toReturn = SERVICE.DOM.createElement( "div", { class: " property horizontal", "data-name": property_name } );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "label" }, label ), toReturn );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "value", contentEditable: is_editable }, value ), toReturn );
        return toReturn;
    };
    self.createPropertyVertical           = function ( property_name, value, value_html, label, is_editable ) {
        var toReturn = SERVICE.DOM.createElement( "div", { class: " property vertical", "data-name": property_name } );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "label" }, label ), toReturn );
        let value_dom = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
            class  : "value", contentEditable: is_editable,
            onclick: "MANAGER.EventManagerV2.doActionAfter(event,'open_edition_popup',{'property_name':'" + property_name + "','param__property__value':'" + value + "'})"
        } ), toReturn );
        SERVICE.DOM.addElementTo( value_html, value_dom );
        return toReturn;
    };
    //********************************************  EDITION POP UP   **************************************************//
    self.createEditionPropertyHorizontal  = function ( value, label ) {
        var toReturn = SERVICE.DOM.createElement( "div", { class: " edition-property horizontal" } );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "label" }, label ), toReturn );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "value" }, value ), toReturn );
        return toReturn;
    };
    self.createEditionPropertyDescription = function ( value, label ) {
        var toReturn = SERVICE.DOM.createElement( "div", { class: " edition-property description" } );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "label" }, label ), toReturn );
        let label_desc = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "value" } ), toReturn );
        if ( value ) {
            for ( let i = 0, _size_i = value.length; i < _size_i; i++ ) {
                SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "p", {}, value[ i ] ), label_desc );
            }
        }
        return toReturn;
    };
    
    return self;
})( SERVICE.DOM_HELPER || {} );


