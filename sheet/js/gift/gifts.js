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
    // The active feats of the character: the validated feat lines of the
    // Progression (class levels + ancestry tiers), collected by event. A
    // feat taken on several lines is displayed once, with its level (PF2:
    // a repeated feat is a higher-level one)
    getActiveFeats: function ( character_object ) {
        let params    = { "param__active_feats": [] };
        character_object.doActionAfter( "event__get__active_feats", params );
        let seen      = {};
        let to_return = [];
        let collected = params[ "param__active_feats" ];
        for ( let i = 0, _size_i = collected.length; i < _size_i; i++ ) {
            if ( seen[ collected[ i ].name ] ) {
                continue;
            }
            seen[ collected[ i ].name ] = true;
            let entry = DON.getFeatEntry( collected[ i ].category, collected[ i ].name );
            to_return.push( {
                "name"    : collected[ i ].name,
                "category": collected[ i ].category,
                "level"   : entry ? entry.level : null,
                "source"  : collected[ i ].source
            } );
        }
        to_return.sort( function ( feat_a, feat_b ) {
            let level_a = parseInt( feat_a.level, 10 ) || 0;
            let level_b = parseInt( feat_b.level, 10 ) || 0;
            if ( level_a !== level_b ) {
                return level_a - level_b;
            }
            return feat_a.name.localeCompare( feat_b.name, "fr" );
        } );
        return to_return;
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