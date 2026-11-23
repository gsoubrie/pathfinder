"use strict";
/**
 * @class CHARACTER.Current
 * @extends CHARACTER.ComponentInterface
 */
CHARACTER.Current = function () {
    this.uuid              = null;
    this._fossil_class_name = null;
    this.name_object       = new CHARACTER.Name();
    this.player            = new CHARACTER.Player();
    this.alignment         = null;
    this.photo             = null;
    this.level             = null;
    this.point_heroism     = null;
    this.race              = new RACES.Race();
    this.archetype         = new ARCHETYPES.Archetype();
    this.historic          = new HISTORICS.Historic();
    this.health            = new CHARACTER.Health();
    this.class             = new CLASSES.CharacterClasses();
    this.characteristics   = new CHARACTERISTICS.Characteristics();
    this.levels_history    = new CHARACTER.LevelsHistory();
    this.ancestry_history  = new CHARACTER.AncestryHistory();
    this.archetype_history = new CHARACTER.ArchetypeHistory();
    this.adjustments       = new CHARACTER.Adjustments();
    this.stuffs            = new CHARACTER.Stuffs();
    this.coins             = new CHARACTER.Coins();
    this.spells            = new CHARACTER.Spells();
    this.spell_slots       = new CHARACTER.SpellSlots();
    this.daily_preparation = new CHARACTER.DailyPreparation();
    this.gifts             = new CHARACTER.Gifts();
    this.masteries         = new CHARACTER.Masteries();
    this.combat            = new CHARACTER.Combat();
    this.children          = new OBJECT.InterfaceContainer();
    this.children.add( this.player );
    this.children.add( this.name_object );
    this.children.add( this.race );
    this.children.add( this.archetype );
    this.children.add( this.historic );
    this.children.add( this.class );
    this.children.add( this.characteristics );
    this.children.add( this.levels_history );
    this.children.add( this.ancestry_history );
    this.children.add( this.archetype_history );
    this.children.add( this.adjustments );
    this.children.add( this.stuffs );
    this.children.add( this.coins );
    this.children.add( this.spells );

    this.children.add( this.daily_preparation );
};
CHARACTER.Current.prototype = {
    init: function ( uuid ) {
        this.uuid = uuid || SERVICE.STRING.buildUUID();
        this.addParamForEvents( "param__current_character__uuid", this.uuid );
        this.updateData( SERVICE.DATA.loadDataByUUID( uuid ) );
        this.stuffs.pushBulkCounters( this );
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
                this.archetype_history.doActionAfter( "event__level_up__sync_lines", { "param__current_character__object": this } );
                this.windows.doActionAfterContentChildren( event_name, params );
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
                this.archetype_history.doActionAfter( "event__level_up__sync_lines", { "param__current_character__object": this } );
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
                this.levels_history.doActionAfter( "event__level_up__sync_lines", { "param__current_character__object": this } );
                this.ancestry_history.doActionAfter( "event__level_up__sync_lines", { "param__current_character__object": this } );
                this.archetype_history.doActionAfter( "event__level_up__sync_lines", { "param__current_character__object": this } );
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
                this.archetype_history.doActionAfter( event_name, params );
                // The validation may move the skill ranks: the feat options
                // depend on them
                this.levels_history.doActionAfter( "event__level_up__sync_lines", { "param__current_character__object": this } );
                this.ancestry_history.doActionAfter( "event__level_up__sync_lines", { "param__current_character__object": this } );
                break;
            // The type of a qualified skill validates its line alone : the
            // feat options do not move with it (the base rank never moves)
            case "event__level_up__toggle_qualifier_selector":
            case "event__level_up__qualifier_filter_enter":
            case "event__level_up__select_qualifier":
                this.levels_history.doActionAfter( event_name, params );
                break;
            case "event__level_up__toggle_selector":
                this.levels_history.doActionAfter( event_name, params );
                this.ancestry_history.doActionAfter( event_name, params );
                this.archetype_history.doActionAfter( event_name, params );
                break;
            // The « + » of a library card poses the archetype of the
            // CHARACTER (user decision: one field, visible from the start),
            // its second click empties it (the Aucun of the old popup): the
            // value follows in place on the field of the Général, the
            // sections of the Progression resynchronize
            case "event__archetype__select": {
                let _current_value      = this.archetype.getValue();
                let _selected_archetype = params[ "param__archetype__name" ] === _current_value ? "" : params[ "param__archetype__name" ];
                this.archetype.setValue( _selected_archetype );
                this.archetype_history.doActionAfter( "event__level_up__sync_lines", { "param__current_character__object": this } );
                break;
            }
            // The « + » of a library card poses the historic of the
            // CHARACTER, its second click empties it : the value follows in
            // place on the field of the Général, and the characteristic
            // grid distributes its bonus (displayed and placed on its own
            // column, the Ajustements detour of the v1 does not come back)
            case "event__historic__select": {
                let _selected_historic = params[ "param__historic__name" ] === this.historic.getValue() ? "" : params[ "param__historic__name" ];
                this.historic.setValue( _selected_historic );
                this.characteristics.doActionAfter( "event__reset_characteristics_bonuses", { "param__is_for": HISTORICS.key_element } );
                if ( this.historic.characteristics_bonus ) {
                    this.characteristics.doActionAfter( "event__set_object_bonuses", { "param__current__object": this.historic, "param__is_for": HISTORICS.key_element } );
                }
                else {
                    this.characteristics.doActionAfter( "event__reset_object_bonuses", { "param__is_for": HISTORICS.key_element } );
                }
                break;
            }
            case "event__adjustment__add":
            case "event__adjustment__remove":
                this.adjustments.doActionAfter( event_name, params );
                // La grille des caractéristiques consomme les boosts de
                // l'onglet : sa colonne Autre et la valeur finale suivent
                this.characteristics.doActionAfter( "event__adjustments__changed", { "param__current_character__object": this } );
                // Un boost de Force change l'encombrement max, un boost de
                // Constitution change les PV : recalcul avant le broadcast
                this.stuffs.pushBulkCounters( this );
                this.computeTotalLife();
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
                this.stuffs.pushBulkCounters( this );
                // The inventory refreshes with its entries
                this.windows.doActionAfterContentChildren( event_name, params );
                break;
            case "event__spell__add":
            case "event__spell__add_many":
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
                this.stuffs.pushBulkCounters( this );
                break;
            // The body slot and the current HP live on their entry : the
            // controller routes them here FIRST (like add/remove), the
            // domain lands, then the windows broadcast refreshes with
            // the fresh state (the Combat schema reads the new slot/HP)
            case "event__stuff__set_slot":
            case "event__stuff__edit_current_hp":
                this.stuffs.doActionAfter( event_name, params );
                this.windows.doActionAfterContentChildren( event_name, params );
                break;
            // The wallet (coins) lands on its domain, then the windows
            // refresh with the fresh state
            case "event__coins__operation":
                this.coins.doActionAfter( event_name, params );
                this.windows.doActionAfterContentChildren( event_name, params );
                break;
            case "event__spell__edit_comment":
                this.spells.doActionAfter( event_name, params );
                break;

            // La préparation journalière des sorts atterrit sur son domaine,
            // puis les fenêtres se rafraîchissent sur l'état frais
            case "event__daily_spell__select_choice":

            case "event__daily_spell__toggle_spent":

            case "event__daily_spell__long_rest":

            case "event__daily_spell__new_day":

                this.daily_preparation.doActionAfter( event_name, params );

                this.windows.doActionAfterContentChildren( event_name, params );

                break;
            // La photo (dataURL) vit sur le personnage, pas dans les
            // children : pose/retrait puis broadcast aux fenetres
            case "event__photo__set":

                this.photo = params[ "param__photo__data" ] || null;

                this.windows.doActionAfterContentChildren( event_name, params );

                break;

            case "event__photo__remove":

                this.photo = null;

                this.windows.doActionAfterContentChildren( event_name, params );

                break;

            case "event__get__rank_contributions":
                this.class.doActionAfterContentChildren( event_name, params );
                this.levels_history.doActionAfterContentChildren( event_name, params );
                this.adjustments.doActionAfter( event_name, params );
                break;
            case "event__get__active_feats":
                this.levels_history.doActionAfterContentChildren( event_name, params );
                this.ancestry_history.doActionAfterContentChildren( event_name, params );
                break;
            case "event__get__deity_choice":
                // The adjustment of kind "deity" is routed LAST : it always
                // overrides the class line of the Progression
                this.levels_history.doActionAfterContentChildren( event_name, params );
                this.adjustments.doActionAfter( event_name, params );
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
                    this.archetype_history.doActionAfter( "event__level_up__sync_lines", { "param__current_character__object": this } );
                    // The Strength modifier moves the maximum bulk
                    this.stuffs.pushBulkCounters( this );
                    // The Constitution modifier moves the total life points :
                    // recompute BEFORE the windows broadcast, they read the
                    // fresh state (PV field of the General, band of the Combat,
                    // life line of the Progression)
                    this.computeTotalLife();
                    // The characteristics grid lives IN the Progression
                    // window : its additional lines (skills N + INT,
                    // languages INT) follow the domain here, but no tab
                    // activation will ever refresh them — the window
                    // rebuilds its sections with the event
                    this.windows.doActionAfterContentChildren( event_name, params );
                    return;
                }
                break;
            case "event__free_bonus_is_zero":
                this.characteristics.doActionAfter( event_name, params );
                break;
            case "event__data_loaded__done":
                this.computeTotalLife();
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
        this.archetype_history.addParamForEvents( key, value );
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
        this.health.applyPendingState();
    },
    //********************************************  SAVE  **************************************************//
    // Le domaine PV ne vit pas dans les children (aucun rendu au General,
    // aucune diffusion d'evenement) : sa cle rejoint le save explicitement
    getDataToSave: function () {
        let to_return = CHARACTER.ComponentInterface.prototype.getDataToSave.call( this );
        to_return = Object.assign( to_return, this.health.getDataToSave() );
        // La photo (dataURL) ne vit pas dans les children : sa cle rejoint le save explicitement, comme health
        to_return[ "photo" ] = this.photo || null;
        return to_return;
    },
    //********************************************  UPDATE DATA   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case this.race.getKey():
                this.race.updateData( value );
                this.characteristics.doActionAfter( "event__set_object_bonuses", { "param__current__object": this.getRace(), "param__is_for": RACES.key_element } );
                // The race arrives in ANY order in the old files : the
                // ancestry sections materialize at load, not only at the
                // next event
                this.ancestry_history.doActionAfter( "event__level_up__sync_lines", { "param__current_character__object": this } );
                break;
            // FOSSILS : the oldest files carry ONE root class object —
            // today's model lives by the classes container. The name is
            // stashed here, the levels_history case builds the class with it
            case "class":
                if ( value && value.name ) {
                    this._fossil_class_name = value.name;
                }
                break;
            case this.archetype.getKey():
                this.archetype.setValue( value && value.value !== undefined ? value.value : value );
                break;
            case this.historic.getKey():
                this.historic.setValue( value && value.value !== undefined ? value.value : value );
                // Un historique vide ne distribute rien : les cellules
                // restent a leur phase de depart (jamais FORBIDDEN, le
                // round-trip du save le verrouille)
                this.characteristics.doActionAfter( "event__reset_characteristics_bonuses", { "param__is_for": HISTORICS.key_element } );
                if ( this.historic.characteristics_bonus ) {
                    this.characteristics.doActionAfter( "event__set_object_bonuses", { "param__current__object": this.historic, "param__is_for": HISTORICS.key_element } );
                }
                break;
            case CLASSES.key:
                this.class.updateData( value );
                this.characteristics.doActionAfter( "event__set_object_bonuses", { "param__current__object": this.class.getBonusesData(), "param__is_for": CLASSES.key_element } );
                // The old files carry the archetype INSIDE each class: the
                // field lives on the character today, the relecture moves it
                if ( Array.isArray( value ) ) {
                    for ( let i = 0, _size_i = value.length; i < _size_i; i++ ) {
                        if ( value[ i ] && value[ i ][ ARCHETYPES.key_element ] ) {
                            this.archetype.setValue( value[ i ][ ARCHETYPES.key_element ] );
                            break;
                        }
                    }
                }
                break;
            case CHARACTERISTICS.key:
                this.characteristics.updateData( value );
                break;
            case "uuid":
                break;
            case "levels_history":
                // FOSSILS : the old entries carry no class_name and numeric
                // level names — the class of the root object (case "class")
                // lands on every entry, the skill lines rebuild by today's
                // model (the old class_capacity/skills arrays stay as they
                // ride, ignored by the entry)
                if ( this._fossil_class_name ) {
                    let _normalized_entries = [];
                    for ( let i = 0, _size_i = value.length; i < _size_i; i++ ) {
                        let _entry_data                = Object.assign( {}, value[ i ] );
                        _entry_data[ "level_name" ]     = "" + value[ i ][ "level_name" ];
                        if ( !_entry_data[ "class_name" ] ) {
                            _entry_data[ "class_name" ] = this._fossil_class_name;
                        }
                        // The lines build in the level_skill case of the
                        // entry : the old entries never carried the key
                        _entry_data[ "level_skill" ]    = value[ i ][ "level_skill" ] || {};
                        _normalized_entries.push( _entry_data );
                    }
                    this.class.updateData( [ { "name": this._fossil_class_name, "level": _normalized_entries.length } ] );
                    this.characteristics.doActionAfter( "event__set_object_bonuses", { "param__current__object": this.class.getBonusesData(), "param__is_for": CLASSES.key_element } );
                    this._fossil_class_name = null;
                    value = _normalized_entries;
                }
                // FOSSILS : the old entries carry the historic INSIDE their
                // skills array — the field lives on the character today,
                // the relecture moves the first found
                let _old_historic = null;
                for ( let i = 0, _size_i = value.length; i < _size_i && !_old_historic; i++ ) {
                    let _old_skills = value[ i ][ "skills" ];
                    if ( !_old_skills ) {
                        continue;
                    }
                    for ( let j = 0, _size_j = _old_skills.length; j < _size_j; j++ ) {
                        if ( _old_skills[ j ] && _old_skills[ j ][ HISTORICS.key_element ] ) {
                            _old_historic = _old_skills[ j ][ HISTORICS.key_element ];
                            break;
                        }
                    }
                }
                if ( _old_historic && !this.historic.getValue() ) {
                    this.historic.setValue( _old_historic );
                }
                // The entries rebuild their lines while loading: the case
                // level_skill of each entry constructs them from the save
                this.levels_history.updateData( value );
                // The characteristics are loaded before the history: the
                // additional skills lines sync on the fresh Intelligence
                this.levels_history.doActionAfter( "event__level_up__sync_lines", { "param__current_character__object": this } );
                // The race is loaded before the history: the ancestry entries
                // materialize (an old save carries no ancestry key)
                this.ancestry_history.doActionAfter( "event__level_up__sync_lines", { "param__current_character__object": this } );
                // The classes are loaded before the history: the archetype
                // sections materialize (an old save carries no archetype key)
                this.archetype_history.doActionAfter( "event__level_up__sync_lines", { "param__current_character__object": this } );
                break;
            case "ancestry_history":
                this.ancestry_history.updateData( value );
                this.ancestry_history.doActionAfter( "event__level_up__sync_lines", { "param__current_character__object": this } );
                break;
            case "archetype_history":
                this.archetype_history.updateData( value );
                this.archetype_history.doActionAfter( "event__level_up__sync_lines", { "param__current_character__object": this } );
                break;
            case "adjustments":
                this.adjustments.updateData( value );
                this.characteristics.doActionAfter( "event__adjustments__changed", { "param__current_character__object": this } );
                break;
            case "stuffs":
                this.stuffs.updateData( value );
                this.stuffs.pushBulkCounters( this );
                break;
            case "coins":
                this.coins.updateData( value );
                break;
            case "spells":
                this.spells.updateData( value );
                break;

            case "daily_preparation":
                this.daily_preparation.updateData( value );
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

            case "photo":
                this.photo = value || null;
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
     * @returns {ARCHETYPES.Archetype}
     */
    getArchetype: function () {
        return this.archetype;
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
        return this.historic;
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
     * @returns {CHARACTER.ArchetypeHistory}
     */
    getArchetypeHistory: function () {
        return this.archetype_history;
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
     * @returns {CHARACTER.Coins}
     */
    getCoins : function () {
        return this.coins;
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
    /**
     * @returns {CHARACTER.DailyPreparation}
     */
    getDailyPreparation: function () {
        return this.daily_preparation;
    },
    getHealth         : function () {
        return this.health;
    },

    /**
     * @returns {string|null} dataURL de la photo du personnage
     */
    getPhoto          : function () {
        return this.photo;
    },
    // The chosen deity: { name, uuid } from the validated class line of the
    // Progression, overridden by a manual "deity" adjustment when it exists
    getDeityChoice    : function () {
        let params = { "param__deity_choice": null };
        this.doActionAfter( "event__get__deity_choice", params );
        return params[ "param__deity_choice" ];
    },
    getGifts          : function () {
        return this.gifts;
    },
    getMasteries     : function () {
        return this.masteries;
    },
    /**
     * @returns {CHARACTER.Combat}
     */
    getCombat        : function () {
        return this.combat;
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
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Current, CHARACTER.ComponentInterface );
