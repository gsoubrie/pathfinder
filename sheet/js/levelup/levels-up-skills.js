"use strict";

/**
 * @class CHARACTER.LevelsUpSkills
 * @extends CHARACTER.ContainerComponentInterface
 * @extends GS.OBJECT.CounterInterfaceV2
 */
CHARACTER.LevelsUpSkills = function () {
    this.init();
};
CHARACTER.LevelsUpSkills.prototype = {
    init: function () {
        this.key = LEVELUP.key;
        CHARACTER.ContainerComponentInterface.prototype.init.call( this );
        this.initCounterCommon();
        this.values_from_save = {};
    },
    initCounterCommon: function () {
        this.counters = {};
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__data_loaded__done":
                this.buildSkills( params[ "param__current_character__object" ] );
                return;
            case "event__form__element_changed":
                if ( params[ "param__property" ] !== CLASSES.key_element ) {
                    return;
                }
                this.doActionAfter("event__level_up__take_level", params);
                return;
            case "event__level_up__take_level":
                this.buildLevel( params[ "param__current_character__object" ] );
                return;
            case "event__level_up__remove_level":
                this.removeLevel( params[ "param__level_name" ] );
                return;
            case "event__level__toggle":
                this.getContentByUUID( params[ "param__level_name" ] ).doActionAfter( event_name, params );
                return;
            case "event__level_up__toggle_skill":
                this.doActionAfterContentChildren( event_name, params );
                return;
        }
        CHARACTER.ContainerComponentInterface.prototype.doActionAfter.call( this, event_name, params );
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID: function () {
        return this.key;
    },
    //********************************************  DATA   **************************************************//
    // Initial build on load: one block per history entry, the save seeds the validated state of the lines
    buildSkills: function ( character_object ) {
        this.resetCounterByType( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
        let saved_values       = this._getSavedValues();
        console.warn("GSOU", "[LevelsUpSkills - buildSkills]", saved_values );
        this.removeAllContentFromIndex( 0 );
        let history            = character_object.getLevelHistory();
        let class_level_counts = {};
        for ( let i = 0, _size_i = history.getSize(); i < _size_i; i++ ) {
            let history_entry      = history.getContent( i );
            let class_name         = history_entry.getClassName();
            let class_level_number = 0;
            if ( class_name ) {
                class_level_counts[ class_name ] = ( class_level_counts[ class_name ] || 0 ) + 1;
                class_level_number               = class_level_counts[ class_name ];
            }
            this._buildLevel( history_entry, class_level_number, saved_values );
        }
    },
    // One new block for the last history entry (take level, class added by the popup)
    buildLevel: function ( character_object ) {
        let history = character_object.getLevelHistory();
        if ( history.getSize() === this.getSize() ) {
            return;
        }
        let history_entry      = history.getContent( history.getSize() - 1 );
        let class_name         = history_entry.getClassName();
        let class_level_number = 0;
        if ( class_name ) {
            for ( let i = 0, _size_i = history.getSize(); i < _size_i; i++ ) {
                if ( history.getContent( i ).getClassName() === class_name ) {
                    class_level_number++;
                }
            }
        }
        this._buildLevel( history_entry, class_level_number, {} );
    },
    _buildLevel: function ( history_entry, class_level_number, saved_values ) {
        let level_object = new CHARACTER.LevelUpSkills( history_entry, this );
        this.add( level_object );
        let class_name = history_entry.getClassName();
        if ( !class_name ) {
            return;
        }
        let class_container = new CHARACTER.LevelUpSkillsClass( class_name, level_object );
        level_object.add( class_container );
        class_container.buildSkills( history_entry, class_level_number, saved_values );
    },
    // Removes the block of a history entry: its warnings counter stops contributing before the removal
    removeLevel: function ( level_name ) {
        let level_object = this.getContentByUUID( level_name );
        if ( !level_object ) {
            return;
        }
        level_object.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ).showForParent( false );
        this.removeContent( level_name, null, true );
    },
    // Save flattened to { "<level>__<slot>": true }, consumed once by the initial build
    _getSavedValues: function () {
        let to_return = {};
        this._flattenValues( this.values_from_save, to_return );
        this.values_from_save = {};
        return to_return;
    },
    _flattenValues: function ( values, to_return ) {
        let _keys = Object.keys( values );
        for ( let i = 0, _size_i = _keys.length; i < _size_i; i++ ) {
            let current = values[ _keys[ i ] ];
            if ( current && typeof current === "object" ) {
                this._flattenValues( current, to_return );
            }
            else {
                to_return[ _keys[ i ] ] = current;
            }
        }
    },
    //********************************************  SAVE   **************************************************//
    updateData: function ( data ) {
        if ( !data ) {
            return;
        }
        this.values_from_save = data;
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.LevelsUpSkills, CHARACTER.ContainerComponentInterface );
SERVICE.CLASS.addPrototype( CHARACTER.LevelsUpSkills, GS.OBJECT.CounterInterfaceV2 );
