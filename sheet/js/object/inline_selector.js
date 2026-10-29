"use strict";

/**
 * Generic inline selector for level-up choices.
 * Collapsed state: a "Choisir..." button, or the chosen value with its
 * information link and a clear button. Open state: a search field and the
 * filtered entry list. Selecting an entry dispatches the event given at
 * construction, with the given params plus the chosen value; clearing
 * dispatches the same event without the value.
 *
 * @class OBJECT.InlineSelector
 * @extends OBJECT.InterfaceHtml
 */
OBJECT.InlineSelector = function ( options ) {
    this.init( options );
};
OBJECT.InlineSelector.prototype = {
    init: function ( options ) {
        this.selector_id = options[ "selector_id" ];
        this.entries     = options[ "entries" ];
        this.value       = options[ "value" ] || null;
        this.event_name  = options[ "event_name" ];
        this.params      = options[ "params" ];
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__inline_selector__open":
                this.computeHtmlOpen();
                return;
            case "event__inline_selector__search":
                this._renderEntries( this.search_dom_element.value );
                return;
            case "event__inline_selector__entry":
                this._selectEntry( parseInt( params[ "param__entry__index" ], 10 ) );
                return;
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID: function () {
        return this.selector_id;
    },
    //********************************************  HTML   **************************************************//
    computeHtml: function () {
        this.dom_element = SERVICE.DOM.createElement( "div", { class: "inline-selector", "data-selector-id": this.selector_id } );
        if ( this.value ) {
            this._computeHtmlValue();
            return this.dom_element;
        }
        let open_button = SERVICE.DOM_HELPER.createButton( "event__inline_selector__open", "Choisir...", { "param__selector__id": this.selector_id } );
        SERVICE.DOM.addClasses( open_button, "inline-selector-open-btn" );
        SERVICE.DOM.addElementTo( open_button, this.dom_element );
        return this.dom_element;
    },

    _computeHtmlValue: function () {
        let value_div  = SERVICE.DOM.createElement( "div", { class: "inline-selector-value" } );
        let chosen     = this._getEntryByName( this.value );
        let value_name;
        if ( chosen && chosen.uuid ) {
            value_name = SERVICE.DOM.createElement( "span", {
                class  : "inline-selector-value-name gs-link-information",
                onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information',{'param__object__uuid': '" + chosen.uuid + "'})"
            }, this.value );
        }
        else {
            value_name = SERVICE.DOM.createElement( "span", { class: "inline-selector-value-name" }, this.value );
        }
        SERVICE.DOM.addElementTo( value_name, value_div );
        let clear_button = SERVICE.DOM_HELPER.createButton( this.event_name, "✕", this.params );
        SERVICE.DOM.addClasses( clear_button, "inline-selector-clear-btn" );
        SERVICE.DOM.addElementTo( clear_button, value_div );
        SERVICE.DOM.addElementTo( value_div, this.dom_element );
    },

    computeHtmlOpen: function () {
        SERVICE.DOM.empty( this.dom_element );
        let open_div = SERVICE.DOM.createElement( "div", { class: "inline-selector-open" } );
        this.search_dom_element = SERVICE.DOM.createElement( "input", {
            class      : "inline-selector-search",
            type       : "text",
            placeholder: "Rechercher...",
            oninput    : "MANAGER.EventManagerV2.doActionAfter(event,'event__inline_selector__search',{'param__selector__id': '" + this.selector_id + "'})"
        } );
        SERVICE.DOM.addElementTo( this.search_dom_element, open_div );
        this.list_dom_element = SERVICE.DOM.createElement( "div", { class: "inline-selector-list" } );
        SERVICE.DOM.addElementTo( this.list_dom_element, open_div );
        SERVICE.DOM.addElementTo( open_div, this.dom_element );
        this._renderEntries( "" );
        this.search_dom_element.focus();
    },

    _renderEntries: function ( filter_text ) {
        SERVICE.DOM.empty( this.list_dom_element );
        let low_filter = ( filter_text || "" ).toLowerCase();
        for ( let i = 0, _size_i = this.entries.length; i < _size_i; i++ ) {
            let entry = this.entries[ i ];
            if ( low_filter && entry.name.toLowerCase().indexOf( low_filter ) === -1 ) {
                continue;
            }
            let entry_div = SERVICE.DOM.createElement( "div", {
                class      : "inline-selector-entry",
                "data-name": entry.name,
                onclick    : "MANAGER.EventManagerV2.doActionAfter(event,'event__inline_selector__entry',{'param__selector__id': '" + this.selector_id + "','param__entry__index': " + i + "})"
            } );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "inline-selector-entry-name" }, entry.name ), entry_div );
            if ( entry.uuid ) {
                SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
                    class  : "inline-selector-entry-info gs-link-information",
                    onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information',{'param__object__uuid': '" + entry.uuid + "'})"
                }, "?" ), entry_div );
            }
            SERVICE.DOM.addElementTo( entry_div, this.list_dom_element );
        }
    },
    //********************************************  DATA   **************************************************//
    _getEntryByName: function ( name ) {
        for ( let i = 0, _size_i = this.entries.length; i < _size_i; i++ ) {
            if ( this.entries[ i ].name === name ) {
                return this.entries[ i ];
            }
        }
        return null;
    },

    _selectEntry: function ( entry_index ) {
        let entry = this.entries[ entry_index ];
        if ( !entry ) {
            return;
        }
        let params_to_dispatch = {};
        let _keys              = Object.keys( this.params );
        for ( let i = 0, _size_i = _keys.length; i < _size_i; i++ ) {
            params_to_dispatch[ _keys[ i ] ] = this.params[ _keys[ i ] ];
        }
        params_to_dispatch[ "param__value" ] = entry.name;
        MANAGER.EventManagerV2.doActionAfter(
            { target: this.dom_element, button: 0, stopPropagation: function () {} },
            this.event_name,
            params_to_dispatch
        );
    }
};

SERVICE.CLASS.addPrototype( OBJECT.InlineSelector, OBJECT.InterfaceHtml );
