"use strict";

/**
 * One skill unlocked at a class level of the level history. It carries its
 * validated state: an on/off button toggles it, only a validated skill feeds
 * the final values of the character. It feeds its own warning counter, child
 * of the container counter feeding the level-up window counter, and renders
 * its own row of the window.
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
        this.character    = character_object;
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
    getLabel: function () {
        return this.label;
    },
    getClassName: function () {
        return this.class_name;
    },
    getAbilityKey: function () {
        return this.ability_key;
    },
    isActive: function () {
        return this.is_active;
    },
    isPending: function () {
        return !this.is_active;
    },
    setActive: function ( to_set ) {
        this.is_active = !!to_set;
        this._updateWarningCounter();
        this._renderInPlace();
    },
    _updateWarningCounter: function () {
        this.setCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS, "pending", this.isPending() ? 1 : 0 );
    },
    //********************************************  HTML   **************************************************//
    computeHtml: function () {
        this.dom_element = SERVICE.DOM.createElement( "div", {
            class         : "levelup-row" + ( this.isPending() ? " levelup-row--pending" : " levelup-row--active" ),
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
            SERVICE.DOM.createElement( "span", { class: "levelup-row-icon" }, LEVELUP.ICONS[ this.type ] || "•" ),
            this.dom_element
        );
    },
    _computeHtmlLabel: function () {
        // Libellé : groupe libellé + lien d'information (?) pour toute capacité décrite dans les données de classe.
        // La ligne "maîtrises initiales" ouvre les maîtrises courantes du personnage, pas une capacité de classe.
        let is_masteries_line = this.ability_key === "maitrises_initiales";
        let has_information    = is_masteries_line || CLASSES.getAbilityInformation( this.class_name, this.ability_key ) !== null;
        if ( !has_information ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "levelup-row-label" }, this.label ), this.dom_element );
            return;
        }
        let label_parent = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "levelup-row-label-group" } ),
            this.dom_element
        );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "levelup-row-label" }, this.label ), label_parent );
        let info_onclick = is_masteries_line ?
            "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__masteries',{})" :
            "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__class_ability',{'param__class_name':'" + this.class_name + "','param__ability_key':'" + this.ability_key + "'})";
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
            class  : "levelup-row-info gs-link-information",
            onclick: info_onclick
        }, "?" ), label_parent );
    },
    _computeHtmlWarning: function () {
        // Badge de warning de la ligne : compteur enfant de celui du conteneur, masque quand la capacite est validee
        let warning_counter = this.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
        warning_counter.computeHtml();
        SERVICE.DOM.addClasses( warning_counter.getDomElement(), "levelup-row-warning" );
        SERVICE.DOM.addElementTo( warning_counter.getDomElement(), this.dom_element );
    },
    _computeHtmlToggle: function () {
        // Interrupteur radio de validation : piste allongee + bouton coulissant,
        // sans texte, allume quand la capacite est validee
        let toggle_switch = SERVICE.DOM.createElement( "div", {
            class  : "levelup-row-toggle" + ( this.is_active ? " active" : "" ),
            onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__level_up__toggle_skill',{'param__level':" + this.level_number + ",'param__slot_key':'" + this.slot_key + "'})"
        } );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "levelup-row-toggle-knob" } ), toggle_switch );
        SERVICE.DOM.addElementTo( toggle_switch, this.dom_element );
    },
    _renderInPlace: function () {
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
