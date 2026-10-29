"use strict";

/**
 * One skill unlocked at a class level of the level history. It knows whether
 * it opens a choice (requiresChoice) and carries the chosen value: it feeds
 * its own warning counter, child of the container counter feeding the
 * level-up window counter, and renders its own row of the window.
 *
 * @class CHARACTER.LevelUpSkill
 * @extends CHARACTER.ComponentInterface
 * @extends GS.OBJECT.CounterInterfaceV2
 */
CHARACTER.LevelUpSkill = function ( skill_data, character_object, parent_object ) {
    this.init( skill_data, character_object, parent_object );
};
CHARACTER.LevelUpSkill.prototype = {
    init: function ( skill_data, character_object, parent_object ) {
        this.level_number = skill_data[ "level" ];
        this.slot_key     = skill_data[ "slot_key" ];
        this.label        = skill_data[ "label" ];
        this.type         = skill_data[ "type" ];
        this.class_name   = skill_data[ "class_name" ];
        this.ability_key  = skill_data[ "ability_key" ];
        this.choices_data = skill_data[ "choices_data" ];
        this.character    = character_object;
        this.value        = skill_data[ "value" ] || null;
        this.uuid         = skill_data[ "level" ] + "__" + skill_data[ "slot_key" ];
        this.dom_element  = null;
        this.selector     = null;
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
            case "event__levelup__select":
                if ( params[ "param__value" ] ) {
                    this.setValue( params[ "param__value" ] );
                }
                else {
                    this.clearValue();
                }
                return;
            case "event__inline_selector__open":
            case "event__inline_selector__search":
            case "event__inline_selector__entry":
                if ( this.selector && params[ "param__selector__id" ] === this.selector.getUUID() ) {
                    this.selector.doActionAfter( event_name, params );
                }
                return;
        }
        CHARACTER.ComponentInterface.prototype.doActionAfter.call( this, event_name, params );
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID: function () {
        return this.uuid;
    },
    getLevel: function () {
        return this.level_number;
    },
    getSlotKey: function () {
        return this.slot_key;
    },
    getValue: function () {
        return this.value;
    },
    requiresChoice: function () {
        return LEVELUP.CHOICE_TYPES.indexOf( this.type ) !== -1 || this.choices_data !== null;
    },
    isPending: function () {
        return this.requiresChoice() && !this.value;
    },
    setValue: function ( to_set ) {
        this.value = to_set;
        this._updateWarningCounter();
        this._renderInPlace();
    },
    clearValue: function () {
        this.value = null;
        this._updateWarningCounter();
        this._renderInPlace();
    },
    _updateWarningCounter: function () {
        this.setCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS, "pending", this.isPending() ? 1 : 0 );
    },
    //********************************************  HTML   **************************************************//
    computeHtml: function () {
        this.dom_element = SERVICE.DOM.createElement( "div", {
            class         : "levelup-row" + ( this.requiresChoice() ? " levelup-row--choice" : "" ) + ( this.isPending() ? " levelup-row--pending" : "" ),
            "data-slot-key": this.slot_key
        } );
        this._computeHtmlIcon();
        this._computeHtmlLabel();
        this._computeHtmlWarning();
        this._computeHtmlSelector();
        return this.dom_element;
    },
    _computeHtmlIcon: function () {
        SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "span", { class: "levelup-row-icon" }, LEVELUP.ICONS[ this.type ] || "•" ),
            this.dom_element
        );
    },
    _computeHtmlLabel: function () {
        // Libellé : groupe libellé + lien d'information (?) pour toute capacité décrite dans les données de classe
        let label_parent = this.dom_element;
        if ( CLASSES.getAbilityInformation( this.class_name, this.ability_key ) !== null ) {
            label_parent = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", { class: "levelup-row-label-group" } ),
                this.dom_element
            );
        }
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "levelup-row-label" }, this.label ), label_parent );
        if ( label_parent === this.dom_element ) {
            return;
        }
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
            class  : "levelup-row-info gs-link-information",
            onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__class_ability',{'param__class_name':'" + this.class_name + "','param__ability_key':'" + this.ability_key + "'})"
        }, "?" ), label_parent );
    },
    _computeHtmlWarning: function () {
        // Badge de warning de la ligne : compteur enfant de celui du conteneur, masque quand le choix est fait
        let warning_counter = this.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
        warning_counter.computeHtml();
        SERVICE.DOM.addClasses( warning_counter.getDomElement(), "levelup-row-warning" );
        SERVICE.DOM.addElementTo( warning_counter.getDomElement(), this.dom_element );
    },
    _computeHtmlSelector: function () {
        if ( this.choices_data ) {
            this.selector = new OBJECT.InlineSelector( {
                "selector_id": "levelup__" + this.level_number + "__" + this.slot_key,
                "entries"    : this.choices_data.entries,
                "value"      : this.value,
                "event_name" : "event__levelup__select",
                "params"     : { "param__level": this.level_number, "param__slot_key": this.slot_key }
            } );
            SERVICE.DOM.addElementTo( this.selector.computeHtml(), this.dom_element );
        }
    },
    _renderInPlace: function () {
        if ( !this.dom_element || !this.dom_element.parentNode ) {
            return;
        }
        SERVICE.DOM.replaceElement( this.dom_element, this.computeHtml() );
    },
    //********************************************  SAVE   **************************************************//
    getSpecificDataToSave: function () {
        if ( !this.value ) {
            return {};
        }
        let to_return = {};
        to_return[ this.level_number + "__" + this.slot_key ] = this.value;
        return to_return;
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.LevelUpSkill, CHARACTER.ComponentInterface );
SERVICE.CLASS.addPrototype( CHARACTER.LevelUpSkill, GS.OBJECT.CounterInterfaceV2 );
