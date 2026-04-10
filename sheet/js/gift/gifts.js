"use strict";
/**
 * @class CHARACTER.Gifts
 * @extends OBJECT.InterfaceHtml
 */
CHARACTER.Gifts = function () {
    this.init();
};
CHARACTER.Gifts.prototype = {
    init: function () {
        console.log("GSOU", "[Gifts - init]",this );
        this.selected = {}; // { "nom du don" : true }
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__gift__toggle":
                this.toggle( params[ "param__gift__name" ] );
                break;
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    isSelected: function ( name ) {
        return !!this.selected[ name ];
    },
    toggle: function ( name ) {
        if ( this.selected[ name ] ) {
            delete this.selected[ name ];
        } else {
            this.selected[ name ] = true;
        }
        this.refreshCheckbox( name );
    },
    getSelectedList: function () {
        return Object.keys( this.selected );
    },
    //********************************************  HTML   **************************************************//
    refreshCheckbox: function ( name ) {
        var id  = "gift-cb-" + name.replace( /[^a-zA-Z0-9]/g, "_" );
        var cb  = document.getElementById( id );
        var row = cb && cb.closest( ".gift-row" );
        if ( cb ) {
            cb.checked = this.isSelected( name );
        }
        if ( row ) {
            if ( this.isSelected( name ) ) {
                row.classList.add( "gift-row--selected" );
            } else {
                row.classList.remove( "gift-row--selected" );
            }
        }
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        return { gifts: this.getSelectedList() };
    },
    updateData: function ( data ) {
        if ( !data ) {
            return;
        }
        this.selected = {};
        for ( var i = 0; i < data.length; i++ ) {
            this.selected[ data[ i ] ] = true;
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Gifts, OBJECT.InterfaceHtml );