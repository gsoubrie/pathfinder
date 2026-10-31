"use strict";
/**
 * @class CHARACTER.Current
 * @extends CHARACTER.ComponentInterface
 */
CHARACTER.Current = function () {
    this.uuid            = null;
    this.name_object     = new CHARACTER.Name();
    this.player          = new CHARACTER.Player();
    this.alignment       = null;
    this.level           = null;
    this.point_heroism   = null;
    this.race            = new RACES.Race();
    this.health          = new CHARACTER.Health();
    this.class           = new CLASSES.CharacterClasses();
    this.characteristics = new CHARACTERISTICS.Characteristics();
    this.levels_history  = new CHARACTER.LevelsHistory();
    this.gifts           = new CHARACTER.Gifts();
    this.level_up_skills = new CHARACTER.LevelsUpSkills();
    this.masteries       = new CHARACTER.Masteries( this );
    this.children        = new OBJECT.InterfaceContainer();
    this.children.add( this.player );
    this.children.add( this.name_object );
    this.children.add( this.race );
    this.children.add( this.class );
    this.children.add( this.characteristics );
    this.children.add( this.levels_history );
    this.children.add( this.level_up_skills );
};
CHARACTER.Current.prototype = {
    init: function ( uuid ) {
        this.uuid = uuid || SERVICE.STRING.buildUUID();
        this.addParamForEvents( "param__current_character__uuid", this.uuid );
        this.updateData( SERVICE.DATA.loadDataByUUID( uuid ) );
        this.doActionAfter( "event__data_loaded__done", { "param__current_character__object": this } );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__property_popup__open":
                this.getObjectByKey( params[ "property_name" ] ).doActionAfter( event_name, params );
                break;
            case "event__has_change__input":
                this.setData( params[ "property_name" ], params[ MANAGER.EVENT_MANAGER_V2.PARAM.EVENT ].target.value );
                break;
            case "event__form__element_changed":
                params[ "param__current_character__object" ] = this;
                params[ "param__characteristics__object" ]   = this.getCharacteristics();
                this.getObjectByKey( params[ "param__property" ] ).doActionAfter( event_name, params );
                this.level_up_skills.doActionAfter( event_name, params );
                this.windows.doActionAfterContentChildren( event_name, params );
                this.windows.setVisibilityWindowState( this.getRace().isSet() ? GS.CONST.VISIBILITY_STATE.NORMAL : GS.CONST.VISIBILITY_STATE.DISABLED, CHARACTER.CharacteristicWindow.NAME );
                this.windows.setVisibilityWindowState( this.class.isEmpty() ? GS.CONST.VISIBILITY_STATE.DISABLED : GS.CONST.VISIBILITY_STATE.NORMAL, CHARACTER.LevelWindow.NAME );
                this.windows.setVisibilityWindowState( this.class.isEmpty() ? GS.CONST.VISIBILITY_STATE.DISABLED : GS.CONST.VISIBILITY_STATE.NORMAL, CHARACTER.LevelUpWindow.NAME );
                break;
            case "event__level_up__take_level":
                params[ "param__level_name" ]                = this.getLevelHistory().getNextLevelName();
                params[ "param__current_character__object" ] = this;
                this.class.getContentByUUID( params[ "param__class_name" ] ).doActionAfter( event_name, params );
                let _new_entry = this.getLevelHistory().add( new CHARACTER.LevelHistory( params[ "param__level_name" ] ) );
                _new_entry.setData( "class_name", params[ "param__class_name" ] );
                _new_entry.setData( "life_class", CLASSES.getDataByName( params[ "param__class_name" ] ).life_point_by_level );
                this.computeTotalLife();
                this.class.updateHtmlData();
                this.level_up_skills.doActionAfter( event_name, params );
                break;
            case "event__level_up__remove_level":
                params[ "param__current_character__object" ] = this;
                let _removed_class = this.class.getContentByUUID( params[ "param__class_name" ] );
                if ( !_removed_class ) {
                    break;
                }
                let _removed_entry_name = null;
                for ( let i = this.getLevelHistory().getSize() - 1; i >= 0; i-- ) {
                    if ( this.getLevelHistory().getContent( i ).getClassName() === _removed_class.getName() ) {
                        _removed_entry_name = this.getLevelHistory().getContent( i ).getUUID();
                        break;
                    }
                }
                if ( _removed_entry_name === null ) {
                    break;
                }
                this.getLevelHistory().removeContent( _removed_entry_name, null, true );
                _removed_class.doActionAfter( event_name, params );
                if ( _removed_class.getLevel() === 0 ) {
                    this.class.removeContent( _removed_class.getName(), null, true );
                    document.body.dataset.isClassSet = this.class.isEmpty() ? 0 : 1;
                    this.getCharacteristics().doActionAfter( "event__reset_characteristics_bonuses", { "param__is_for": CLASSES.key_element } );
                    this.getCharacteristics().doActionAfter( "event__set_object_bonuses", { "param__current__object": this.class.getBonusesData(), "param__is_for": CLASSES.key_element } );
                }
                this.computeTotalLife();
                this.class.updateHtmlData();
                params[ "param__level_name" ] = _removed_entry_name;
                this.level_up_skills.doActionAfter( event_name, params );
                this.windows.setVisibilityWindowState( this.class.isEmpty() ? GS.CONST.VISIBILITY_STATE.DISABLED : GS.CONST.VISIBILITY_STATE.NORMAL, CHARACTER.LevelWindow.NAME );
                this.windows.setVisibilityWindowState( this.class.isEmpty() ? GS.CONST.VISIBILITY_STATE.DISABLED : GS.CONST.VISIBILITY_STATE.NORMAL, CHARACTER.LevelUpWindow.NAME );
                break;
            case "event__level__toggle":
                params[ "param__current_character__object" ] = this;
                let _level_entry = this.getLevelHistory().getContentByUUID( params[ "param__level_name" ] );
                if ( _level_entry ) {
                    _level_entry.setEnabled( !_level_entry.isEnabled() );
                    this.computeTotalLife();
                    this.level_up_skills.doActionAfter( event_name, params );
                    this.windows.doActionAfterContentChildren( event_name, params );
                }
                break;
            case "event__level_up__toggle_skill":
                this.level_up_skills.doActionAfter( event_name, params );
                break;
            case "event__more_button":
            case "event__less_button":
                if ( params[ "param__characteristics__is" ] ) {
                    this.characteristics.doActionAfter( event_name, params );
                    return;
                }
                break;
            case "event__free_bonus_is_zero":
                this.characteristics.doActionAfter( event_name, params );
                break;
            case "event__data_loaded__done":
                this.level_up_skills.doActionAfter( event_name, params );
                this.computeTotalLife();
                break;
            case "event__compute_html__done":
                this.health.doActionAfter( event_name, params );
                break;
            case "event__open_modal__hp_heal":
            case "event__open_modal__hp_temp":
            case "event__open_modal__hp_damage":
                this.health.doActionAfter( event_name, params );
                break;
            case "event__heal_modal__confirm":
            case "event__temp_hp_modal__confirm":
            case "event__damage_modal__confirm":
                this.health.doActionAfter( event_name, params );
                this.windows.doActionAfterContentChildren( event_name, params );
                break;
            case "event__health_history__load":
                this.windows.doActionAfterContentChildren( event_name, params );
                break;
            case "event__gift__toggle":
                this.gifts.doActionAfter( event_name, params );
                break;
            case "click_on__window_navigation__done":
                params[ "param__current_character__object" ] = this;
                this.windows.doActionAfter( event_name, params );
                break;
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    
    getUUID              : function () {
        return this.uuid;
    },
    getSpecificDataToSave: function () {
        return { "uuid": this.uuid };
    },
    addParamForEvents    : function ( key, value ) {
        this.addParamForEventsCommon( key, value );
        this.race.addParamForEvents( key, value );
        this.class.addParamForEvents( key, value );
        this.characteristics.addParamForEvents( key, value );
        this.levels_history.addParamForEvents( key, value );
    },
    //********************************************  COMPUTE   **************************************************//
    computeTotalLife: function () {
        let total_life           = 0;
        let life_point_from_cons = this.getCharacteristics().getContentByUUID( CHARACTERISTICS.CON.key );
        for ( let i = 0, _size_i = this.getLevelHistory().getSize(); i < _size_i; i++ ) {
            let _level = this.getLevelHistory().getContent( i );
            if ( !_level.isEnabled() ) {
                continue;
            }
            total_life += life_point_from_cons.getModifierValue();
            total_life += _level.life_class;
        }
        this.health.setMaxHP( total_life );
    },
    //********************************************  UPDATE DATA   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case this.race.getKey():
                this.race.updateData( value );
                this.characteristics.doActionAfter( "event__set_object_bonuses", { "param__current__object": this.getRace(), "param__is_for": RACES.key_element } );
                break;
            case CLASSES.key:
                this.class.updateData( value );
                this.characteristics.doActionAfter( "event__set_object_bonuses", { "param__current__object": this.class.getBonusesData(), "param__is_for": CLASSES.key_element } );
                break;
            case CHARACTERISTICS.key:
                this.characteristics.updateData( value );
                break;
            case "uuid":
                break;
            case "levels_history":
                this.levels_history.updateData( value );
                break;
            case this.player.getKey():
                this.player.setValue( value );
                break;
            case this.name_object.getKey():
                this.name_object.setValue( value );
                break;
            case "body_size":
            case "alignment":
            case "divinity":
            case "point_heroism":
                this[ key ] = value;
                this.updateHtmlData( key, value );
                break;
            case "level":
                this[ key ] = parseInt( value );
                break;
            case "health":
                this.health.updateData( value );
                break;
            case "gifts":
                this.gifts.updateData( value );
                break;
            case "levelup_choices":
            case "level_up_skills":
                this.level_up_skills.updateData( value );
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    },
    /**
     * @returns {CHARACTER.Name}
     */
    getNameObject: function () {
        return this.name_object;
    },
    /**
     * @returns {CHARACTER.Player}
     */
    getPlayer: function () {
        return this.player;
    },
    /**
     * @returns {RACES.Race}
     */
    getRace: function () {
        return this.race;
    },
    /**
     * @returns {string}
     */
    getAlignment: function () {
        return this.alignment;
    },
    /**
     * @returns {Legacy}
     */
    getLegacy: function () {
        return this.getRace().getLegacy();
    },
    /**
     * @returns {CLASSES.CharacterClasses}
     */
    getClasses: function () {
        return this.class;
    },
    /**
     * @returns {number}
     */
    getLevel: function () {
        return this.class.getLevel();
    },
    /**
     * @returns {number}
     */
    getActiveLevel    : function () {
        return this.levels_history.getActiveSize();
    },
    getHistoric       : function () {
        return this.getLevelHistory().getSpecialContent( HISTORICS.key_element );
    },
    getCharacteristics: function () {
        return this.characteristics;
    },
    getLevelHistory   : function () {
        return this.levels_history;
    },
    getHealth         : function () {
        return this.health;
    },
    getGifts          : function () {
        return this.gifts;
    },
    getLevelUpSkills : function () {
        return this.level_up_skills;
    },
    getMasteries     : function () {
        return this.masteries;
    },
    //********************************************  HTML   **************************************************//
    updateHtmlData: function ( key, value ) {
        if ( !this[ key + "_html" ] ) {
            this[ key + "_html" ] = SERVICE.DOM.createElement( "div", {}, value );
        }
        else {
            this[ key + "_html" ].innerHTML = value;
        }
    },
    computeHTML   : function () {
        this.windows = new CHARACTER.WindowGroup();
        this.windows.computeHtmlWithData( this );
        this.doActionAfter( "event__compute_html__done", {} );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Current, CHARACTER.ComponentInterface );