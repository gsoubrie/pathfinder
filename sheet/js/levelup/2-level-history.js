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
            case "event__level_up__select_choice": {
                let level_up_skill = this.getContentByUUID( params[ "param__level_up_skill__uuid" ] );
                if ( level_up_skill ) {
                    level_up_skill.setSelectedValue( params[ "param__choice_value" ] );
                }
                return;
            }
            case "event__level_up__remove_level":
                for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
                    this.getContent( i ).getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ).showForParent( false );
                }
                return;
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
            if ( choices ) {
                skill_data[ "options" ] = choices.entries;
                this.add( new CHARACTER.LevelUpSkillWithSelect( skill_data ) );
            }
            else {
                this.add( new CHARACTER.LevelUpSkillBasic( skill_data ) );
            }
        }
        this.level_skill = null;
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
            this.getContent( i ).computeHtml( this.class_name );
            SERVICE.DOM.addElementTo( this.getContent( i ).getDomElement(), this.dom_element );
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.LevelHistory, OBJECT.InterfaceContainerHtml );
