"use strict";

/**
 * @class CHARACTER.LevelUpSkillsClass
 * @extends CHARACTER.ContainerComponentInterface
 * @extends GS.OBJECT.CounterInterfaceV2
 */
CHARACTER.LevelUpSkillsClass = function ( class_name, parent_object ) {
    this.init( class_name, parent_object );
};
CHARACTER.LevelUpSkillsClass.prototype = {
    init: function ( class_name, parent_object ) {
        this.class_name = class_name;
        CHARACTER.ContainerComponentInterface.prototype.init.call( this );
        this.initCounterCommon();
        this.setCountersParent( parent_object );
    },
    initCounterCommon: function () {
        this.counters = {};
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__level_up__toggle_skill":
                // Only the holder of the uuid routes to its line, the other class containers ignore it
                let level_up_skill = this.getContentByUUID( params[ "param__level_up_skill__uuid" ] );
                if ( level_up_skill ) {
                    level_up_skill.doActionAfter( event_name, params );
                }
                return;
        }
        CHARACTER.ContainerComponentInterface.prototype.doActionAfter.call( this, event_name, params );
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID: function () {
        return this.class_name;
    },
    getKey: function () {
        return this.class_name;
    },
    //********************************************  DATA   **************************************************//
    // One line per capacity of the class's level entry, the save seeds the validated state at load
    buildSkills: function ( history_entry, class_level_number, saved_values ) {
        let level_name = history_entry.getUUID();
        let class_data = CLASSES.getDataByName( this.class_name );
        let capacities = class_data ? ( class_data.capacity_by_level || [] ) : [];
        let parts      = ( capacities[ class_level_number - 1 ] || "" ).split( "," );
        for ( let p = 0, _size_p = parts.length; p < _size_p; p++ ) {
            let label = parts[ p ].trim();
            if ( !label ) {
                continue;
            }
            let type        = CHARACTER.Level.detectType( label );
            let ability_key = CLASSES.getAbilityKey( label );
            let slot_key    = LEVELUP.CHOICE_TYPES.indexOf( type ) !== -1 ? ( type + "_" + p ) : ability_key;
            this.add( new CHARACTER.LevelUpSkillClass( {
                "level"      : level_name,
                "slot_key"   : slot_key,
                "label"      : label,
                "type"       : type,
                "class_name" : this.class_name,
                "ability_key": ability_key,
                "is_active"  : !!saved_values[ level_name + "__" + slot_key ]
            }, this ) );
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.LevelUpSkillsClass, CHARACTER.ContainerComponentInterface );
SERVICE.CLASS.addPrototype( CHARACTER.LevelUpSkillsClass, GS.OBJECT.CounterInterfaceV2 );
