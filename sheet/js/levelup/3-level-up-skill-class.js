"use strict";

/**
 * @class CHARACTER.LevelUpSkillClass
 * @extends CHARACTER.ComponentInterface
 * @extends GS.OBJECT.CounterInterfaceV2
 * @extends GS.OBJECT.PhaseInterface
 */
CHARACTER.LevelUpSkillClass = function ( skill_data ) {
    this.init( skill_data );
};
CHARACTER.LevelUpSkillClass.prototype = {
    init: function ( skill_data ) {
        this.dom_element = null;
        this.initCounterCommon();
        this.initPhase();
        this.updateData( skill_data );
        this.setUUID();
    },
    initCounterCommon: function () {
        this.counters = {};
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID: function () {
        return this.uuid;
    },
    setUUID: function () {
        this.uuid = this.level_name + "__" + this.slot_key;
    },
    getSlotKey: function () {
        return this.slot_key;
    },
    getMasteriesUpgrades: function ( class_name ) {
        return CLASSES.getMasteriesUpgrade( class_name, this.ability_key );
    },
    getSourceLabel: function () {
        return this.label + " (niveau " + this.level_name + ")";
    },
    // The phase is the data: the validated state lives on it
    isActive  : function () {
        return this.isPhase( LEVELUP.PHASE.SELECTED );
    },
    setIsActive: function ( to_set ) {
        this.setPhaseOrPhase( to_set, LEVELUP.PHASE.SELECTED, LEVELUP.PHASE.RUNNING );
    },
    // What the entry saves: the phase for a plain line, the chosen value for a choice line
    getValidatedValue: function () {
        return this.isActive();
    },
    callbackForPhase: function () {
        this.setCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS, "pending", this.isPhase( LEVELUP.PHASE.SELECTED ) ? 0 : 1 );
    },
    //********************************************  HTML   **************************************************//
    computeHtml: function ( class_name ) {
        this.dom_element = SERVICE.DOM.createElement( "div", { class         : "level-up-row", "data-slot-key": this.slot_key } );
        this.setPhaseDomElement( this.dom_element );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "level-up-row-icon" }, LEVELUP.ICONS[ this.type ] || "•" ), this.dom_element );
        this._computeHtmlLabel( class_name );
        this.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ).computeHtml();
        SERVICE.DOM.addElementTo( this.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ).getDomElement(), this.dom_element );
        this._computeHtmlValidation();
    },
    _computeHtmlLabel: function ( class_name ) {
        let is_masteries_line = this.ability_key === LEVELUP.INITIAL_MASTERIES_KEY;
        let has_information    = is_masteries_line || CLASSES.getAbilityInformation( class_name, this.ability_key ) !== null;
        if ( !has_information ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "level-up-row-label" }, this.label ), this.dom_element );
            return;
        }
        let label_parent = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "level-up-row-label-group" } ), this.dom_element );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "level-up-row-label" }, this.label ), label_parent );
        let info_onclick = is_masteries_line ?
            "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__masteries',{})" :
            "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__class_ability',{'param__class_name':'" + class_name + "','param__ability_key':'" + this.ability_key + "'})";
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class  : "level-up-row-info gs-link-information", onclick: info_onclick }, "?" ), label_parent );
    },
    // The validation control of the line: the toggle for a plain line, the
    // choice class overrides it with its selector
    _computeHtmlValidation: function () {
        let toggle_switch = SERVICE.DOM.createElement( "div", {
            class  : "level-up-row-toggle",
            onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__level_up__toggle_skill',{'param__level_up_skill__uuid':'" + this.uuid + "'})"
        } );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "level-up-row-toggle-knob" } ), toggle_switch );
        SERVICE.DOM.addElementTo( toggle_switch, this.dom_element );
    },
    //********************************************  UPDATE DATA   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case "level_name":
            case "slot_key":
            case "label":
            case "type":
            case "ability_key":
                this[ key ] = value;
                break;
            case "is_active":
                this.setIsActive( value );
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.LevelUpSkillClass, CHARACTER.ComponentInterface );
SERVICE.CLASS.addPrototype( CHARACTER.LevelUpSkillClass, GS.OBJECT.CounterInterfaceV2 );
SERVICE.CLASS.addPrototype( CHARACTER.LevelUpSkillClass, GS.OBJECT.PhaseInterface );
