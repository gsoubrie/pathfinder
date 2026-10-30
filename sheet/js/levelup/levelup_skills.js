"use strict";

/**
 * All skills unlocked by the level history, one child per skill. Rebuilt from
 * the character at every history change (load, class edition, take/remove
 * level, toggle), preserving the validated state. Owns the warning counter
 * fed by the skill counters, wired as parent of the level-up window counter.
 *
 * @class CHARACTER.LevelUpSkills
 * @extends CHARACTER.ContainerComponentInterface
 * @extends GS.OBJECT.CounterInterfaceV2
 */
CHARACTER.LevelUpSkills = function () {
    this.init();
};
CHARACTER.LevelUpSkills.prototype = {
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
            case "event__level_up__toggle_skill":
                let skill = this.getSkill( params[ "param__level" ], params[ "param__slot_key" ] );
                if ( skill ) {
                    skill.doActionAfter( event_name, params );
                }
                return;
        }
        CHARACTER.ContainerComponentInterface.prototype.doActionAfter.call( this, event_name, params );
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID: function () {
        return this.key;
    },
    getSkill: function ( level, slot_key ) {
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            let skill = this.getContent( i );
            if ( skill.getLevel() === parseInt( level, 10 ) && skill.getSlotKey() === slot_key ) {
                return skill;
            }
        }
        return null;
    },
    getSkillsForLevel: function ( level ) {
        let to_return = [];
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            if ( this.getContent( i ).getLevel() === level ) {
                to_return.push( this.getContent( i ) );
            }
        }
        return to_return;
    },
    isLevelPending: function ( level ) {
        let level_skills = this.getSkillsForLevel( level );
        for ( let i = 0, _size_i = level_skills.length; i < _size_i; i++ ) {
            if ( level_skills[ i ].isPending() ) {
                return true;
            }
        }
        return false;
    },
    getMissingCount: function () {
        return this.getCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
    },
    //********************************************  DATA   **************************************************//
    buildSkills: function ( character_object ) {
        this.resetCounterByType( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
        let preserved_values = this._getPreservedValues();
        while ( this.getSize() > 0 ) {
            this.removeContent( this.getContent( 0 ).getUUID(), null, true );
        }
        let history        = character_object.getLevelHistory();
        let class_counters = {};
        for ( let i = 0, _size_i = history.getSize(); i < _size_i; i++ ) {
            let entry      = history.getContent( i );
            let class_name = entry.getClassName();
            if ( !class_name || !entry.isEnabled() ) {
                continue;
            }
            class_counters[ class_name ] = ( class_counters[ class_name ] || 0 ) + 1;
            let class_data = CLASSES.getDataByName( class_name );
            let capacities = class_data ? ( class_data.capacity_by_level || [] ) : [];
            let parts      = ( capacities[ class_counters[ class_name ] - 1 ] || "" ).split( "," );
            for ( let p = 0, _size_p = parts.length; p < _size_p; p++ ) {
                let label = parts[ p ].trim();
                if ( !label ) {
                    continue;
                }
                let type        = CHARACTER.Level.detectType( label );
                let ability_key = CLASSES.getAbilityKey( label );
                let slot_key    = LEVELUP.CHOICE_TYPES.indexOf( type ) !== -1 ? ( type + "_" + p ) : ability_key;
                this.add( new CHARACTER.LevelUpSkill( {
                    "level"      : i + 1,
                    "slot_key"   : slot_key,
                    "label"      : label,
                    "type"       : type,
                    "class_name" : class_name,
                    "ability_key": ability_key,
                    "is_active"  : !!preserved_values[ ( i + 1 ) + "__" + slot_key ]
                }, character_object, this ) );
            }
        }
    },
    _getPreservedValues: function () {
        let to_return = {};
        let _keys     = Object.keys( this.values_from_save );
        for ( let i = 0, _size_i = _keys.length; i < _size_i; i++ ) {
            to_return[ _keys[ i ] ] = this.values_from_save[ _keys[ i ] ];
        }
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            let skill = this.getContent( i );
            if ( skill.isActive() ) {
                to_return[ skill.getLevel() + "__" + skill.getSlotKey() ] = true;
            }
        }
        this.values_from_save = {};
        return to_return;
    },
    //********************************************  SAVE   **************************************************//
    updateData: function ( data ) {
        if ( !data ) {
            return;
        }
        this.values_from_save = data;
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.LevelUpSkills, CHARACTER.ContainerComponentInterface );
SERVICE.CLASS.addPrototype( CHARACTER.LevelUpSkills, GS.OBJECT.CounterInterfaceV2 );
