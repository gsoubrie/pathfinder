"use strict";
/**
 * @class CHARACTER.LevelHistory
 * @extends OBJECT.InterfaceContainerHtml
 */
CHARACTER.LevelHistory = function ( level_name ) {
    this.init( level_name );
};
CHARACTER.LevelHistory.prototype = {
    init: function ( level_name ) {
        this.level_name = level_name;
        this.life_class = null;
        this.class_name = null;
        this.enabled    = true;
        this.initContents();
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__level_up__toggle_skill": {
                let level_up_skill = this.getContentByUUID( params[ "param__level_up_skill__uuid" ] );
                if ( level_up_skill ) {
                    level_up_skill.setIsActive( !level_up_skill.isActive() );
                }
                return;
            }
            case "event__level_up__toggle_selector": {
                let level_up_skill = this.getContentByUUID( params[ "param__level_up_skill__uuid" ] );
                if ( level_up_skill ) {
                    level_up_skill.doActionAfter( event_name, params );
                }
                return;
            }
            case "event__level_up__select_choice": {
                let level_up_skill = this.getContentByUUID( params[ "param__level_up_skill__uuid" ] );
                if ( level_up_skill ) {
                    level_up_skill.setSelectedValue( params[ "param__choice_value" ] );
                    this._updateAdditionalSelectOptions( level_up_skill );
                }
                return;
            }
            case "event__level_up__remove_level":
                for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
                    this.getContent( i ).getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ).showForParent( false );
                }
                return;
            case "event__level_up__sync_lines": {
                let character_object = params[ "param__current_character__object" ];
                let int_characteristic = character_object.getCharacteristics().getContentByUUID( "INT" );
                this.syncAdditionalSkills( int_characteristic.getModifierValue() );
                this._syncFeatLinesOptions( character_object );
                return;
            }
            case "event__get__rank_contributions":
                if ( !this.isEnabled() ) {
                    return;
                }
                params[ "param__class_name" ] = this.getClassName();
                this.doActionAfterContentChildren( event_name, params );
                return;
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID     : function () {
        return this.level_name;
    },
    getClassName: function () {
        return this.class_name;
    },
    isEnabled   : function () {
        return !!this.enabled;
    },
    setEnabled  : function ( to_set ) {
        this.enabled = !!to_set;
    },
    //********************************************  DATA   **************************************************//
    buildSkills: function ( class_level_number ) {
        if ( this.getSize() > 0 ) {
            return;
        }
        // The container passes the ordinal of the class among the entries:
        // the entry keeps it, the additional skills lines only live on the
        // first level of a class
        this.class_level_number = class_level_number;
        let class_name = this.getClassName();
        let capacities = CLASSES.getDataByName( class_name ).capacity_by_level;
        let parts      = ( capacities[ class_level_number - 1 ] || "" ).split( "," );

        for ( let p = 0, _size_p = parts.length; p < _size_p; p++ ) {
            let label = parts[ p ].trim();
            let type        = CHARACTER.Level.detectType( label );
            let ability_key = CLASSES.getAbilityKey( label );
            let slot_key    = LEVELUP.CHOICE_TYPES.indexOf( type ) !== -1 ? (type + "_" + p) : ability_key;
            let skill_data  = {
                "level_name" : this.level_name,
                "slot_key"   : slot_key,
                "label"      : label,
                "type"       : type,
                "ability_key": ability_key,
                "level_skill": this.level_skill
            };
            let choices = CLASSES.getChoices( class_name, ability_key );
            if ( choices || LEVELUP.FEAT_TYPES.indexOf( type ) !== -1 ) {
                // The feat lines open their selector at build, their options
                // arrive by sync (they depend on the character state)
                skill_data[ "options" ] = choices ? choices.entries : [];
                this.add( new CHARACTER.LevelUpSkillWithSelect( skill_data ) );
            }
            else {
                this.add( new CHARACTER.LevelUpSkillBasic( skill_data ) );
            }
        }
    },
    // Additional trained skills of the class (N + Intelligence modifier):
    // one selector line per pick on the class level-1 entry, the count is the
    // entry's own (its class data) plus the Intelligence modifier by param
    syncAdditionalSkills: function ( int_modifier ) {
        let target_count = 0;
        if ( this.class_level_number === 1 ) {
            target_count = Math.max( 0, CLASSES.getAdditionalSkillsNumber( this.getClassName() ) + int_modifier );
        }
        let additional_lines = [];
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            if ( this.getContent( i ).getSlotKey().indexOf( LEVELUP.ADDITIONAL_SKILL_KEY ) === 0 ) {
                additional_lines.push( this.getContent( i ) );
            }
        }
        for ( let i = additional_lines.length; i < target_count; i++ ) {
            let slot_key = LEVELUP.ADDITIONAL_SKILL_KEY + i;
            this.add( new CHARACTER.LevelUpSkillWithSelect( {
                "level_name" : this.level_name,
                "slot_key"   : slot_key,
                "label"      : LEVELUP.ADDITIONAL_SKILL_LABEL,
                "type"       : LEVELUP.ADDITIONAL_SKILL_TYPE,
                "ability_key": slot_key,
                "options"    : CLASSES.COMMON_CHOICES[ "amelioration_de_competence" ].entries,
                "level_skill": this.level_skill
            } ) );
        }
        for ( let i = target_count; i < additional_lines.length; i++ ) {
            let removed_line = additional_lines[ i ];
            removed_line.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ).showForParent( false );
            this.removeContent( removed_line.getUUID(), null, true );
        }
        this.level_skill = null;
    },
    // The feat line options depend on the character state: the feat level and
    // the skill prerequisites — they refresh at every sync, the chosen value
    // of a line stays
    _syncFeatLinesOptions: function ( character_object ) {
        let skill_ranks  = character_object.getMasteries().getSkillRanksByLabel( character_object );
        let level_number = parseInt( this.level_name, 10 );
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            let line = this.getContent( i );
            if ( line.getSlotKey().indexOf( LEVELUP.ADDITIONAL_SKILL_KEY ) === 0 ) {
                continue;
            }
            if ( line.type === "skill_feat" ) {
                line.setOptions( DON.getAvailableSkillFeats( skill_ranks, level_number ) );
            }
            else if ( line.type === "class_feat" ) {
                line.setOptions( DON.getAvailableClassFeats( this.getClassName(), level_number ) );
            }
        }
    },
    setLinesCountersParent: function ( parent ) {
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            this.getContent( i ).setCountersParent( parent );
        }
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        let to_return               = {};
        to_return[ "level_name" ]   = this.level_name;
        to_return[ "life_class" ]  = this.life_class;
        to_return[ "class_name" ]   = this.class_name;
        to_return[ "enabled" ]     = this.enabled;
        to_return[ "level_skill" ] = {};
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            to_return[ "level_skill" ][ this.getContent( i ).getSlotKey() ] = this.getContent( i ).getDataToSave();
        }
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
            case "class_level_number":
                this.class_level_number = value;
                break;
            case "level_skill":
                this.level_skill = value;
                this.buildSkills( this.class_level_number );
                break;
            case "skills":
                this.skills = new CHARACTER.LevelHistorySkills( this.level_name, value );
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    },
    //********************************************  HTML   **************************************************//
    computeHtml: function () {
        this.dom_element = SERVICE.DOM.createElement( "div", {
            class              : "level-up-block" + (this.isEnabled() ? "" : " disabled"),
            "data-level-name"  : this.level_name,
            "data-level-number": this.level_name
        } );
        let title        = SERVICE.DOM.addElementTo(
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
            let line = this.getContent( i );
            if ( line.getSlotKey().indexOf( LEVELUP.ADDITIONAL_SKILL_KEY ) === 0 ) {
                line.computeHtml( this.class_name, this._getTakenValues( line ) );
            }
            else {
                line.computeHtml( this.class_name );
            }
            SERVICE.DOM.addElementTo( line.getDomElement(), this.dom_element );
        }
    },
    // A qualification cannot be taken twice: the values chosen on the other
    // additional skill lines leave their selectors
    _getTakenValues: function ( except_line ) {
        let to_return = [];
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            let line = this.getContent( i );
            if ( line === except_line || line.getSlotKey().indexOf( LEVELUP.ADDITIONAL_SKILL_KEY ) !== 0 ) {
                continue;
            }
            if ( line.getSelectedValue() ) {
                to_return.push( line.getSelectedValue() );
            }
        }
        return to_return;
    },
    _updateAdditionalSelectOptions: function ( changed_line ) {
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            let line = this.getContent( i );
            if ( line === changed_line || line.getSlotKey().indexOf( LEVELUP.ADDITIONAL_SKILL_KEY ) !== 0 ) {
                continue;
            }
            line.updateSelectOptions( this._getTakenValues( line ) );
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.LevelHistory, OBJECT.InterfaceContainerHtml );
