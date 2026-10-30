"use strict";

/**
 * @class CHARACTER.LevelUpSkill
 * @extends CHARACTER.ComponentInterface
 * @extends GS.OBJECT.CounterInterfaceV2
 */
CHARACTER.LevelUpSkill = function ( skill_data, parent_object ) {
    this.init( skill_data, parent_object );
};
CHARACTER.LevelUpSkill.prototype = {
    init: function ( skill_data, parent_object ) {
        this.level_number = skill_data[ "level" ];
        this.slot_key     = skill_data[ "slot_key" ];
        this.label        = skill_data[ "label" ];
        this.type         = skill_data[ "type" ];
        this.class_name   = skill_data[ "class_name" ];
        this.ability_key  = skill_data[ "ability_key" ];
        this.is_active    = !!skill_data[ "is_active" ];
        this.uuid         = skill_data[ "level" ] + "__" + skill_data[ "slot_key" ];
        this.dom_element  = null;
        this.initCounterCommon();
        this.setCountersParent( parent_object );
        this._updateWarningCounter();
    },
    initCounterCommon: function () {
        this.counters = {};
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__level_up__toggle_skill":
                this.setActive( !this.is_active );
                return;
            case "event__get__level_up__with_level":
                if ( this.level_number === params[ "param__level" ] ) {
                    params[ "param__level_up__with_level" ].push( this );
                }
                return;
        }
        CHARACTER.ComponentInterface.prototype.doActionAfter.call( this, event_name, params );
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID: function () {
        return this.uuid;
    },
    // Mastery upgrades promised by the class data for this ability
    getMasteriesUpgrades: function () {
        return CLASSES.getMasteriesUpgrade( this.class_name, this.ability_key );
    },
    // Display name of the source shown in the masteries popup
    getSourceLabel: function () {
        return this.label + " (niveau " + this.level_number + ")";
    },
    isActive: function () {
        return this.is_active;
    },
    setActive: function ( to_set ) {
        this.is_active = !!to_set;
        this._updateWarningCounter();
        this.updateHtml();
    },
    _updateWarningCounter: function () {
        this.setCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS, "pending", this.isActive() ? 0 : 1 );
    },
    //********************************************  HTML   **************************************************//
    computeHtml: function () {
        this.dom_element = SERVICE.DOM.createElement( "div", {
            class         : "level-up-row" + ( this.isActive() ? " level-up-row--active" : " level-up-row--pending" ),
            "data-slot-key": this.slot_key
        } );
        this._computeHtmlIcon();
        this._computeHtmlLabel();
        this._computeHtmlWarning();
        this._computeHtmlToggle();
        return this.dom_element;
    },
    _computeHtmlIcon: function () {
        SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "span", { class: "level-up-row-icon" }, LEVELUP.ICONS[ this.type ] || "•" ),
            this.dom_element
        );
    },
    _computeHtmlLabel: function () {
        let is_masteries_line = this.ability_key === LEVELUP.INITIAL_MASTERIES_KEY;
        let has_information    = is_masteries_line || CLASSES.getAbilityInformation( this.class_name, this.ability_key ) !== null;
        if ( !has_information ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "level-up-row-label" }, this.label ), this.dom_element );
            return;
        }
        let label_parent = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "level-up-row-label-group" } ),
            this.dom_element
        );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "level-up-row-label" }, this.label ), label_parent );
        let info_onclick = is_masteries_line ?
            "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__masteries',{})" :
            "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__class_ability',{'param__class_name':'" + this.class_name + "','param__ability_key':'" + this.ability_key + "'})";
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
            class  : "level-up-row-info gs-link-information",
            onclick: info_onclick
        }, "?" ), label_parent );
    },
    _computeHtmlWarning: function () {
        let warning_counter = this.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
        warning_counter.computeHtml();
        SERVICE.DOM.addClasses( warning_counter.getDomElement(), "level-up-row-warning" );
        SERVICE.DOM.addElementTo( warning_counter.getDomElement(), this.dom_element );
    },
    _computeHtmlToggle: function () {
        // Validation toggle: track and sliding knob, no text, on when the skill is validated
        let toggle_switch = SERVICE.DOM.createElement( "div", {
            class  : "level-up-row-toggle" + ( this.is_active ? " active" : "" ),
            onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__level_up__toggle_skill',{'param__level_up_skill__uuid':'" + this.uuid + "'})"
        } );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "level-up-row-toggle-knob" } ), toggle_switch );
        SERVICE.DOM.addElementTo( toggle_switch, this.dom_element );
    },
    updateHtml: function () {
        if ( !this.dom_element || !this.dom_element.parentNode ) {
            return;
        }
        SERVICE.DOM.replaceElement( this.dom_element, this.computeHtml() );
    },
    //********************************************  SAVE   **************************************************//
    getSpecificDataToSave: function () {
        if ( !this.is_active ) {
            return {};
        }
        let to_return = {};
        to_return[ this.uuid ] = true;
        return to_return;
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.LevelUpSkill, CHARACTER.ComponentInterface );
SERVICE.CLASS.addPrototype( CHARACTER.LevelUpSkill, GS.OBJECT.CounterInterfaceV2 );
