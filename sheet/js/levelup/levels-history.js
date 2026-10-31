"use strict";
/**
 * @class CHARACTER.LevelsHistory
 * @extends OBJECT.InterfaceContainerHtml
 */
CHARACTER.LevelsHistory = function () {
    this.init();
};
CHARACTER.LevelsHistory.prototype = {
    init: function () {
        this.initContents();
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
        }
        OBJECT.InterfaceContainer.prototype.doActionAfter.call( this, event_name, params );
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID          : function () {
        return this.uuid;
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave    : function () {
        let to_return                 = {};
        to_return[ "levels_history" ] = [];
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            to_return[ "levels_history" ].push( this.getContent( i ).getDataToSave() );
        }
        return to_return;
    },
    getActiveSize    : function () {
        let to_return = 0;
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            if ( this.getContent( i ).isEnabled() ) {
                to_return++;
            }
        }
        return to_return;
    },
    getNextLevelName: function () {
        let to_return = 1;
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            let _current = parseInt( this.getContent( i ).getUUID() );
            if ( !isNaN( _current ) && _current >= to_return ) {
                to_return = _current + 1;
            }
        }
        return "" + to_return;
    },
    getTotalLife     : function () {
        let to_return = 0;
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            to_return += this.getContent( i ).life_class;
        }
        return to_return;
    },
    getSpecialContent: function ( key_name ) {
        switch ( key_name ) {
            case HISTORICS.key_element :
                return this.getContent( 0 ).skills.getContentByUUID( "1 - " + key_name );
        }
    },
    //********************************************  DATA   **************************************************//
    // Builds the level-up block of every entry missing one: initial load and
    // incremental adds (take level, class from the popup) share the same
    // idempotent path
    buildSkills: function () {
        let class_level_counts = {};
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            let history_entry      = this.getContent( i );
            let class_name         = history_entry.getClassName();
            let class_level_number = 0;
            if ( class_name ) {
                class_level_counts[ class_name ] = ( class_level_counts[ class_name ] || 0 ) + 1;
                class_level_number               = class_level_counts[ class_name ];
            }
            history_entry.buildSkills( class_level_number );
        }
    },
    //********************************************  UPDATE DATA   **************************************************//
    updateData: function ( data ) {
        if ( !data ) {
            return;
        }
        for ( let i = 0, _size_i = data.length; i < _size_i; i++ ) {
            let current = this.getContentByUUID( data[ i ][ "level_name" ] );
            if ( !current ) {
                current = this.add( new CHARACTER.LevelHistory( data[ i ][ "level_name" ] ) );
            }
            current.updateData( data[ i ] );
        }
    },
    //********************************************  HTML   **************************************************//
    updateHtmlData : function ( key, value ) {
    },
    computePageHTML: function () {
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.LevelsHistory, OBJECT.InterfaceContainerHtml );

/**
 * @class CHARACTER.LevelHistory
 * @extends OBJECT.InterfaceContainerHtml
 */
CHARACTER.LevelHistory = function ( level_name ) {
    this.init( level_name );
};
CHARACTER.LevelHistory.prototype = {
    init: function ( level_name ) {
        this.level_name       = level_name;
        this.life_class       = null;
        this.class_name       = null;
        this.enabled          = true;
        this.validated_skills = {};
        this.initContents();
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__level_up__toggle_skill":
                // Broadcast: every entry receives it, the holder of the uuid
                // toggles ITS state then pushes the new value to its line
                let level_up_skill = this.getContentByUUID( params[ "param__level_up_skill__uuid" ] );
                if ( level_up_skill ) {
                    this.toggleSkillValidation( level_up_skill.getSlotKey() );
                    level_up_skill.setIsActive( this.isSkillValidated( level_up_skill.getSlotKey() ) );
                }
                return;
            case "event__level_up__remove_level":
                // The lines die with their entry: their counters stop contributing before the removal
                for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
                    this.getContent( i ).getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ).showForParent( false );
                }
                return;
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID      : function () {
        return this.level_name;
    },
    getClassName : function () {
        return this.class_name;
    },
    isEnabled    : function () {
        return !!this.enabled;
    },
    setEnabled   : function ( to_set ) {
        this.enabled = !!to_set;
    },
    // Validation states of the level-up capacities of this entry, owned here
    // like enabled: the level-up lines read and write through these
    initSkillValidation  : function ( slot_key ) {
        if ( this.validated_skills[ slot_key ] === undefined ) {
            this.validated_skills[ slot_key ] = false;
        }
    },
    isSkillValidated     : function ( slot_key ) {
        return !!this.validated_skills[ slot_key ];
    },
    toggleSkillValidation: function ( slot_key ) {
        this.validated_skills[ slot_key ] = !this.validated_skills[ slot_key ];
    },
    // One line per capacity of the class's level, idempotent: the lines stay
    // the only build of the entry and read their validation state right here
    buildSkills: function ( class_level_number ) {
        if ( this.getSize() > 0 ) {
            return;
        }
        let class_name = this.getClassName();
        if ( !class_name ) {
            return;
        }
        let class_data  = CLASSES.getDataByName( class_name );
        let capacities  = class_data ? ( class_data.capacity_by_level || [] ) : [];
        let parts       = ( capacities[ class_level_number - 1 ] || "" ).split( "," );
        for ( let p = 0, _size_p = parts.length; p < _size_p; p++ ) {
            let label = parts[ p ].trim();
            if ( !label ) {
                continue;
            }
            let type        = CHARACTER.Level.detectType( label );
            let ability_key = CLASSES.getAbilityKey( label );
            let slot_key    = LEVELUP.CHOICE_TYPES.indexOf( type ) !== -1 ? ( type + "_" + p ) : ability_key;
            this.initSkillValidation( slot_key );
            this.add( new CHARACTER.LevelUpSkillClass( {
                "level_name" : this.level_name,
                "slot_key"   : slot_key,
                "label"      : label,
                "type"       : type,
                "ability_key": ability_key,
                "is_active"  : this.isSkillValidated( slot_key )
            } ) );
        }
    },
    // Counter chain: line → window, branched at each render of the level-up window
    setLinesCountersParent: function ( parent ) {
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            this.getContent( i ).setCountersParent( parent );
        }
    },
    getDataToSave: function () {
        let to_return                   = {};
        to_return[ "level_name" ]       = this.level_name;
        to_return[ "life_class" ]       = this.life_class;
        to_return[ "class_name" ]       = this.class_name;
        to_return[ "enabled" ]          = this.enabled;
        to_return[ "validated_skills" ] = this.validated_skills;
        if ( this.skills ) {
            to_return[ "skills" ] = this.skills.getDataToSave();
        }
        return to_return;
    },
    //********************************************  UPDATE DATA   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case "level_name":
                this.level_name = value;
                break;
            case "life_class":
                this.life_class = value;
                break;
            case "class_name":
                this.class_name = value;
                break;
            case "enabled":
                this.setEnabled( value );
                break;
            case "validated_skills":
                this.validated_skills = value;
                break;
            case "skills":
                this.skills = new CHARACTER.LevelHistorySkills( this.level_name, value );
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    },
    //********************************************  HTML   **************************************************//
    // The entry renders its own level section: title, activation toggle, then
    // its lines (the disabled layer hides them, they stay alive)
    computeHtml: function () {
        this.dom_element = SERVICE.DOM.createElement( "div", {
            class              : "level-up-block" + ( this.isEnabled() ? "" : " disabled" ),
            "data-level-name"  : this.level_name,
            "data-level-number": this.level_name
        } );
        let title = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "level-up-block-title" } ),
            this.dom_element
        );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "level-up-block-level-num" }, "Niveau " + this.level_name ), title );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
            class  : "level-up-level-toggle",
            onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__level__toggle',{'param__level_name':'" + this.level_name + "'})"
        }, this.isEnabled() ? "Activé" : "Désactivé" ), title );
        if ( !this.isEnabled() ) {
            return;
        }
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            this.getContent( i ).computeHtml( this.class_name );
            SERVICE.DOM.addElementTo( this.getContent( i ).getDomElement(), this.dom_element );
        }
    },
    updateHtmlData : function ( key, value ) {
    },
    computePageHTML: function () {
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.LevelHistory, OBJECT.InterfaceContainerHtml );
