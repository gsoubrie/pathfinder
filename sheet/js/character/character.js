"use strict";
/**
 * @class CHARACTER.Current
 * @extends CHARACTER.ComponentInterface
 */
CHARACTER.Current = function () {
    this.uuid              = null;
    this.name_object       = new CHARACTER.Name();
    this.player            = new CHARACTER.Player();
    this.alignment         = null;
    this.level             = null;
    this.point_heroism     = null;
    this.race              = new RACES.Race();
    this.health            = new CHARACTER.Health();
    this.class             = new CLASSES.CharacterClasses();
    this.characteristics   = new CHARACTERISTICS.Characteristics();
    this.levels_history    = new CHARACTER.LevelsHistory();
    this.ancestry_history  = new CHARACTER.AncestryHistory();
    this.adjustments       = new CHARACTER.Adjustments();
    this.stuffs            = new CHARACTER.Stuffs();
    this.spells            = new CHARACTER.Spells();
    this.spell_slots       = new CHARACTER.SpellSlots();
    this.gifts             = new CHARACTER.Gifts();
    this.masteries         = new CHARACTER.Masteries();
    this.children          = new OBJECT.InterfaceContainer();
    this.children.add( this.player );
    this.children.add( this.name_object );
    this.children.add( this.race );
    this.children.add( this.class );
    this.children.add( this.characteristics );
    this.children.add( this.levels_history );
    this.children.add( this.ancestry_history );
    this.children.add( this.adjustments );
    this.children.add( this.stuffs );
    this.children.add( this.spells );
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
                this.levels_history.buildSkills();
                this.levels_history.doActionAfter( "event__level_up__sync_lines", { "param__current_character__object": this } );
                this.ancestry_history.doActionAfter( "event__level_up__sync_lines", { "param__current_character__object": this } );
                this.windows.doActionAfterContentChildren( event_name, params );
                this.windows.setVisibilityWindowState( this.getRace().isSet() ? GS.CONST.VISIBILITY_STATE.NORMAL : GS.CONST.VISIBILITY_STATE.DISABLED, CHARACTER.CharacteristicWindow.NAME );
                this.windows.setVisibilityWindowState( this.class.isEmpty() ? GS.CONST.VISIBILITY_STATE.DISABLED : GS.CONST.VISIBILITY_STATE.NORMAL, CHARACTER.LevelWindow.NAME );
                // Les sections d'ascendance (don, langues) vivent des le choix
                // de l'ascendance : l'onglet Progression s'allume avec elle
                this.windows.setVisibilityWindowState( this.getRace().isSet() ? GS.CONST.VISIBILITY_STATE.NORMAL : GS.CONST.VISIBILITY_STATE.DISABLED, CHARACTER.LevelUpWindow.NAME );
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
                this.levels_history.buildSkills();
                this.levels_history.doActionAfter( "event__level_up__sync_lines", { "param__current_character__object": this } );
                this.ancestry_history.doActionAfter( "event__level_up__sync_lines", { "param__current_character__object": this } );
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
                // The lines die with their entry: their counters stop contributing before the removal
                this.getLevelHistory().getContentByUUID( _removed_entry_name ).doActionAfter( event_name, params );
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
                this.windows.setVisibilityWindowState( this.class.isEmpty() ? GS.CONST.VISIBILITY_STATE.DISABLED : GS.CONST.VISIBILITY_STATE.NORMAL, CHARACTER.LevelWindow.NAME );
                this.windows.setVisibilityWindowState( this.getRace().isSet() ? GS.CONST.VISIBILITY_STATE.NORMAL : GS.CONST.VISIBILITY_STATE.DISABLED, CHARACTER.LevelUpWindow.NAME );
                this.levels_history.doActionAfter( "event__level_up__sync_lines", { "param__current_character__object": this } );
                this.ancestry_history.doActionAfter( "event__level_up__sync_lines", { "param__current_character__object": this } );
                break;
            case "event__level__toggle":
                params[ "param__current_character__object" ] = this;
                let _level_entry = this.getLevelHistory().getContentByUUID( params[ "param__level_name" ] );
                if ( _level_entry ) {
                    _level_entry.setEnabled( !_level_entry.isEnabled() );
                    this.computeTotalLife();
                    this.windows.doActionAfterContentChildren( event_name, params );
                }
                break;
            case "event__level_up__toggle_skill":
            case "event__level_up__select_choice":
                this.levels_history.doActionAfter( event_name, params );
                this.ancestry_history.doActionAfter( event_name, params );
                // The validation may move the skill ranks: the feat options
                // depend on them
                this.levels_history.doActionAfter( "event__level_up__sync_lines", { "param__current_character__object": this } );
                this.ancestry_history.doActionAfter( "event__level_up__sync_lines", { "param__current_character__object": this } );
                break;
            case "event__level_up__toggle_selector":
                this.levels_history.doActionAfter( event_name, params );
                this.ancestry_history.doActionAfter( event_name, params );
                break;
            case "event__adjustment__add":
            case "event__adjustment__remove":
                this.adjustments.doActionAfter( event_name, params );
                // The displays consuming the adjustments refresh with the entry
                this.windows.doActionAfterContentChildren( event_name, params );
                break;
            // The explanation lives on its entry: nothing to redraw, the
            // input of the entry follows in place and keeps its focus
            case "event__adjustment__edit_explanation":
                this.adjustments.doActionAfter( event_name, params );
                break;
            case "event__stuff__add":
            case "event__stuff__remove":
                this.stuffs.doActionAfter( event_name, params );
                // The inventory refreshes with its entries
                this.windows.doActionAfterContentChildren( event_name, params );
                break;
            case "event__spell__add":
            case "event__spell__remove":
                this.spells.doActionAfter( event_name, params );
                // The spellbook refreshes with its entries
                this.windows.doActionAfterContentChildren( event_name, params );
                break;
            // The location, the place, the comment and the quantity live
            // on their entry : the window routes and follows its display
            // in place
            case "event__stuff__set_location":
            case "event__stuff__edit_place":
            case "event__stuff__edit_comment":
            case "event__stuff__edit_characteristics":
            case "event__stuff__edit_quantity":
                this.stuffs.doActionAfter( event_name, params );
                break;
            case "event__spell__edit_comment":
                this.spells.doActionAfter( event_name, params );
                break;
            case "event__get__rank_contributions":
                this.class.doActionAfterContentChildren( event_name, params );
                this.levels_history.doActionAfterContentChildren( event_name, params );
                break;
            case "event__get__slot_contributions":
                this.class.doActionAfterContentChildren( event_name, params );
                this.levels_history.doActionAfterContentChildren( event_name, params );
                break;
            case "event__more_button":
            case "event__less_button":
                if ( params[ "param__characteristics__is" ] ) {
                    this.characteristics.doActionAfter( event_name, params );
                    this.levels_history.doActionAfter( "event__level_up__sync_lines", { "param__current_character__object": this } );
                    // The Intelligence modifier moves the additional
                    // languages count of the ancestry level-1 entry
                    this.ancestry_history.doActionAfter( "event__level_up__sync_lines", { "param__current_character__object": this } );
                    return;
                }
                break;
            case "event__free_bonus_is_zero":
                this.characteristics.doActionAfter( event_name, params );
                break;
            case "event__data_loaded__done":
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
        this.ancestry_history.addParamForEvents( key, value );
    },
    //********************************************  COMPUTE   **************************************************//
    computeTotalLife: function () {
        let total_life           = 0;
        let life_point_from_cons = this.getCharacteristics().getContentByUUID( CHARACTERISTICS.CON.key );
        let has_active_level     = false;
        for ( let i = 0, _size_i = this.getLevelHistory().getSize(); i < _size_i; i++ ) {
            let _level = this.getLevelHistory().getContent( i );
            if ( !_level.isEnabled() ) {
                continue;
            }
            has_active_level = true;
            total_life += life_point_from_cons.getModifierValue();
            total_life += _level.life_class;
        }
        // Les PV de depart de l'ascendance ne comptent qu'une fois, au
        // premier niveau du personnage (PF2 : niveau 1 = ascendance + classe + CON)
        if ( has_active_level && this.getRace().isSet() ) {
            total_life += this.getRace().start_life || 0;
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
                // The entries rebuild their lines while loading: the case
                // level_skill of each entry constructs them from the save
                this.levels_history.updateData( value );
                // The characteristics are loaded before the history: the
                // additional skills lines sync on the fresh Intelligence
                this.levels_history.doActionAfter( "event__level_up__sync_lines", { "param__current_character__object": this } );
                // The race is loaded before the history: the ancestry entries
                // materialize (an old save carries no ancestry key)
                this.ancestry_history.doActionAfter( "event__level_up__sync_lines", { "param__current_character__object": this } );
                break;
            case "ancestry_history":
                this.ancestry_history.updateData( value );
                this.ancestry_history.doActionAfter( "event__level_up__sync_lines", { "param__current_character__object": this } );
                break;
            case "adjustments":
                this.adjustments.updateData( value );
                break;
            case "stuffs":
                this.stuffs.updateData( value );
                break;
            case "spells":
                this.spells.updateData( value );
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
    /**
     * @returns {CHARACTER.AncestryHistory}
     */
    getAncestryHistory: function () {
        return this.ancestry_history;
    },
    /**
     * @returns {CHARACTER.Adjustments}
     */
    getAdjustments: function () {
        return this.adjustments;
    },
    /**
     * @returns {CHARACTER.Stuffs}
     */
    getStuffs: function () {
        return this.stuffs;
    },
    /**
     * @returns {CHARACTER.Spells}
     */
    getSpells: function () {
        return this.spells;
    },
    /**
     * @returns {CHARACTER.SpellSlots}
     */
    getSpellSlots: function () {
        return this.spell_slots;
    },
    getHealth         : function () {
        return this.health;
    },
    getGifts          : function () {
        return this.gifts;
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