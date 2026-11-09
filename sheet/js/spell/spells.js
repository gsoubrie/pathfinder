"use strict";

/**
 * @class CHARACTER.Spells
 * @extends OBJECT.InterfaceContainerHtml
 */
CHARACTER.Spells = function () {
    this.init();
};
CHARACTER.Spells.prototype = {
    init: function () {
        this.initContents();
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__spell__add": {
                this.addSpell( params[ "param__spell__value" ], params[ "param__spell__comment" ] );
                return;
            }
            case "event__spell__remove": {
                let removed_spell = this.getContentByUUID( "spell__" + params[ "param__spell__value" ] );
                if ( removed_spell ) {
                    this.removeContent( removed_spell.getUUID(), null, true );
                }
                return;
            }
            case "event__spell__edit_comment": {
                let entry = this.getContentByUUID( "spell__" + params[ "param__spell__value" ] );
                if ( entry ) {
                    entry.setData( "comment", params[ "param__spell__comment" ] );
                }
                return;
            }
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID: function () {
        return "spells";
    },
    //********************************************  DATA   **************************************************//
    addSpell: function ( value, comment ) {
        if ( !value ) {
            return;
        }
        // A spell owns its repertory slot alone : adding an owned one does
        // nothing (no stacking, the repertoire is a set)
        if ( this.getContentByUUID( "spell__" + value ) ) {
            return;
        }
        this.add( new CHARACTER.Spell( value, comment ) );
    },
    getSpellsByNature: function ( nature_key ) {
        let to_return = [];
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            if ( SPELLS.getNatureKeyOfName( this.getContent( i ).value ) === nature_key ) {
                to_return.push( this.getContent( i ) );
            }
        }
        return to_return;
    },
    getSpellsByNatureAndRank: function ( nature_key, rank ) {
        let to_return = [];
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            if ( SPELLS.getNatureKeyOfName( this.getContent( i ).value ) === nature_key && SPELLS.getRankOfName( this.getContent( i ).value ) === rank ) {
                to_return.push( this.getContent( i ) );
            }
        }
        return to_return;
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        let to_return          = {};
        to_return[ "spells" ] = [];
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            to_return[ "spells" ].push( this.getContent( i ).getDataToSave() );
        }
        return to_return;
    },
    //********************************************  UPDATE DATA   **************************************************//
    updateData: function ( data ) {
        if ( !data ) {
            return;
        }
        for ( let i = 0, _size_i = data.length; i < _size_i; i++ ) {
            if ( !data[ i ][ "value" ] ) {
                continue;
            }
            let current = this.getContentByUUID( "spell__" + data[ i ][ "value" ] );
            if ( !current ) {
                current = this.add( new CHARACTER.Spell( data[ i ][ "value" ], data[ i ][ "comment" ] ) );
            }
            if ( data[ i ][ "comment" ] !== undefined ) {
                current.setData( "comment", data[ i ][ "comment" ] );
            }
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Spells, OBJECT.InterfaceContainerHtml );
