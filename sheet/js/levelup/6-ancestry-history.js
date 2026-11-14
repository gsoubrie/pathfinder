"use strict";
/**
 * @class CHARACTER.AncestryHistory
 * @extends OBJECT.InterfaceContainerHtml
 */
CHARACTER.AncestryHistory = function () {
    this.init();
};
CHARACTER.AncestryHistory.prototype = {
    init: function () {
        this.initContents();
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__level_up__sync_lines":
                this.sync( params[ "param__current_character__object" ] );
                return;
        }
        // The choice events (select_choice, toggle_selector) fall through to
        // the entries broadcast: the uuid owner acts, the others ignore it
        OBJECT.InterfaceContainer.prototype.doActionAfter.call( this, event_name, params );
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID: function () {
        return "ancestry_history";
    },
    // The languages chosen on the ancestry level-1 entry (validated lines) :
    // the General window displays them next to the base languages
    getSelectedLanguages: function () {
        let to_return = [];
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            let entry = this.getContent( i );
            for ( let l = 0, _size_l = entry.getSize(); l < _size_l; l++ ) {
                let line = entry.getContent( l );
                if ( line.getSlotKey().indexOf( LEVELUP.ADDITIONAL_LANGUAGE_KEY ) !== 0 ) {
                    continue;
                }
                if ( line.getSelectedValue() ) {
                    to_return.push( line.getSelectedValue() );
                }
            }
        }
        return to_return;
    },
    //********************************************  DATA   **************************************************//
    // One entry per ancestry feat level reached (LEVELUP.ANCESTRY_FEAT_LEVELS),
    // while an ancestry is set. The entries persist: the chosen feat is a save
    // key, only the options follow the current ancestry and character level
    sync: function ( character_object ) {
        let race            = character_object.getRace();
        let race_name       = race.isSet() ? race.getValue() : null;
        // A versatile heritage opens its own ancestry-feat pool (PF2 :
        // « parmi ceux des sang-dragons et ceux de votre ascendance ») :
        // only the versatile ones add their pool, an ancestry heritage
        // or the empty value changes nothing
        let legacy_name     = race.getLegacy().getValue();
        if ( !LEGACIES.isVersatile( legacy_name ) ) {
            legacy_name    = null;
        }
        // The ancestry grants (feat, languages) belong to character level 1:
        // they exist as soon as an ancestry is set, before any class — the
        // higher levels follow the class levels
        let character_level = race_name ? Math.max( 1, character_object.getLevel() ) : 0;
        let int_characteristic = character_object.getCharacteristics().getContentByUUID( CHARACTERISTICS.INT.key );
        let int_modifier    = int_characteristic ? int_characteristic.getModifierValue() : 0;
        let target_levels   = [];
        for ( let i = 0, _size_i = LEVELUP.ANCESTRY_FEAT_LEVELS.length; i < _size_i; i++ ) {
            if ( LEVELUP.ANCESTRY_FEAT_LEVELS[ i ] <= character_level ) {
                target_levels.push( "" + LEVELUP.ANCESTRY_FEAT_LEVELS[ i ] );
            }
        }
        for ( let i = 0, _size_i = target_levels.length; i < _size_i; i++ ) {
            let entry = this.getContentByUUID( target_levels[ i ] );
            if ( !entry ) {
                entry = this.add( new CHARACTER.AncestryLevelHistory( target_levels[ i ] ) );
            }
            entry.syncLines( race_name, int_modifier, legacy_name );
        }
        for ( let i = this.getSize() - 1; i >= 0; i-- ) {
            let entry = this.getContent( i );
            if ( target_levels.indexOf( entry.getUUID() ) !== -1 ) {
                continue;
            }
            // The lines die with their entry: their counters stop contributing before the removal
            for ( let l = 0, _size_l = entry.getSize(); l < _size_l; l++ ) {
                entry.getContent( l ).getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ).showForParent( false );
            }
            this.removeContent( entry.getUUID(), null, true );
        }
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        let to_return                   = {};
        to_return[ "ancestry_history" ] = [];
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            to_return[ "ancestry_history" ].push( this.getContent( i ).getDataToSave() );
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
                current = this.add( new CHARACTER.AncestryLevelHistory( data[ i ][ "level_name" ] ) );
            }
            current.updateData( data[ i ] );
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.AncestryHistory, OBJECT.InterfaceContainerHtml );
