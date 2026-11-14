"use strict";
/**
 * @class CHARACTER.ArchetypeHistory
 * @extends OBJECT.InterfaceContainerHtml
 */
CHARACTER.ArchetypeHistory = function () {
    this.init();
};
CHARACTER.ArchetypeHistory.prototype = {
    init: function () {
        this.initContents();
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__level_up__sync_lines":
                this.sync( params[ "param__current_character__object" ] );
                return;
            // A choice moves the shared feat pool: the container alone owns
            // the sibling sections, it routes the choice then refreshes
            // every options list at once
            case "event__level_up__select_choice":
                this._setLineChoice( params );
                return;
        }
        OBJECT.InterfaceContainer.prototype.doActionAfter.call( this, event_name, params );
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID: function () {
        return "archetype_history";
    },
    // The archetype carried by the whole character (user decision: one
    // field, visible from the start): its feats belong to the Progression
    // sections
    getArchetypeName: function ( character_object ) {
        if ( !character_object || !character_object.getArchetype ) {
            return null;
        }
        let archetype_value = character_object.getArchetype().getValue();
        if ( !archetype_value || archetype_value === ARCHETYPES.default_value ) {
            return null;
        }
        return archetype_value;
    },
    // The values chosen by the other sections: a feat leaves the options of
    // the sections that can still pick it
    getTakenValuesForEntry: function ( entry_uuid ) {
        let to_return = [];
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            let entry = this.getContent( i );
            if ( entry.getUUID() === entry_uuid ) {
                continue;
            }
            let line = entry.getLine();
            if ( line && line.getSelectedValue() ) {
                to_return.push( line.getSelectedValue() );
            }
        }
        return to_return;
    },
    //********************************************  DATA   **************************************************//
    // One entry per even level reached (LEVELUP.ARCHETYPE_FEAT_LEVELS),
    // while the first class carries an archetype. The entries persist : the
    // chosen feat is a save key, the options follow the archetype and the
    // character level
    sync: function ( character_object ) {
        let archetype_name  = this.getArchetypeName( character_object );
        let character_level = archetype_name ? character_object.getLevel() : 0;
        let target_levels   = [];
        for ( let i = 0, _size_i = LEVELUP.ARCHETYPE_FEAT_LEVELS.length; i < _size_i; i++ ) {
            if ( LEVELUP.ARCHETYPE_FEAT_LEVELS[ i ] <= character_level ) {
                target_levels.push( "" + LEVELUP.ARCHETYPE_FEAT_LEVELS[ i ] );
            }
        }
        for ( let i = 0, _size_i = target_levels.length; i < _size_i; i++ ) {
            let entry = this.getContentByUUID( target_levels[ i ] );
            if ( !entry ) {
                entry = this.add( new CHARACTER.ArchetypeLevelHistory( target_levels[ i ] ) );
            }
            entry.syncLine( archetype_name );
            entry.updateLineOptions( this.getTakenValuesForEntry( entry.getUUID() ) );
        }
        for ( let i = this.getSize() - 1; i >= 0; i-- ) {
            let entry = this.getContent( i );
            if ( target_levels.indexOf( entry.getUUID() ) !== -1 ) {
                continue;
            }
            // The lines die with their entry: their counters stop
            // contributing before the removal
            entry.clearLineCounter();
            this.removeContent( entry.getUUID(), null, true );
        }
    },
    _setLineChoice: function ( params ) {
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            let line = this.getContent( i ).getContentByUUID( params[ "param__level_up_skill__uuid" ] );
            if ( line ) {
                line.setSelectedValue( params[ "param__choice_value" ] );
                break;
            }
        }
        this._updateTakenOptions();
    },
    _updateTakenOptions: function () {
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            let entry = this.getContent( i );
            entry.updateLineOptions( this.getTakenValuesForEntry( entry.getUUID() ) );
        }
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        let to_return                    = {};
        to_return[ "archetype_history" ] = [];
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            to_return[ "archetype_history" ].push( this.getContent( i ).getDataToSave() );
        }
        return to_return;
    },
    //********************************************  UPDATE DATA   **************************************************//
    updateData: function ( data ) {
        if ( !data ) {
            return;
        }
        for ( let i = 0, _size_i = data.length; i < _size_i; i++ ) {
            let current = this.getContentByUUID( data[ i ][ "level_name" ] );
            if ( !current ) {
                current = this.add( new CHARACTER.ArchetypeLevelHistory( data[ i ][ "level_name" ] ) );
            }
            current.updateData( data[ i ] );
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.ArchetypeHistory, OBJECT.InterfaceContainerHtml );
