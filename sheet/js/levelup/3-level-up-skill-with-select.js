"use strict";
/**
 * @class CHARACTER.LevelUpSkillWithSelect
 * @extends CHARACTER.LevelUpSkillBasic
 */
CHARACTER.LevelUpSkillWithSelect = function ( skill_data ) {
    this.init( skill_data );
};
CHARACTER.LevelUpSkillWithSelect.prototype = {
    init: function ( skill_data ) {
        this.selected_value = null;
        this.taken_values   = [];
        CHARACTER.LevelUpSkillBasic.prototype.init.call( this, skill_data );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__level_up__toggle_selector":
                this.select_component.toggleState();
                return;
        }
        CHARACTER.LevelUpSkillBasic.prototype.doActionAfter.call( this, event_name, params );
    },
    //********************************************  GETTER SETTER  **************************************************//
    setSelectedValue  : function ( to_set ) {
        this.selected_value = to_set || null;
        this.setPhaseOrPhase( !!this.selected_value, LEVELUP.PHASE.SELECTED, LEVELUP.PHASE.RUNNING );
        this.updateHtml();
    },
    getSelectedValue  : function () {
        return this.selected_value;
    },
    getMasteriesUpgrades: function ( class_name ) {
        let upgrades = CHARACTER.LevelUpSkillBasic.prototype.getMasteriesUpgrades.call( this, class_name );
        if ( this.type === LEVELUP.ADDITIONAL_SKILL_TYPE && this.selected_value ) {
            upgrades = upgrades.concat( [ { "slot": MASTERY.getSkillSlot( this.selected_value ), "rank": "Q" } ] );
        }
        if ( this.selected_value ) {
            upgrades = upgrades.concat( CLASSES.getChoiceMasteriesUpgrade( class_name, this.ability_key, this.selected_value ) );
        }
        return upgrades;
    },
    // A skill increase validates by its chosen skill: the contribution carries
    // no rank, the granted rank derives from the skill's current one
    getRankIncreaseContribution: function () {
        if ( this.type !== "skill_increase" || !this.selected_value ) {
            return null;
        }
        return {
            slot          : MASTERY.getSkillSlot( this.selected_value ),
            skill_increase: true,
            level         : parseInt( this.level_name, 10 ),
            source        : this.getSourceLabel()
        };
    },
    //********************************************  UPDATE DATA   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case "options":
                this.options = value;
                break;
            case "level_skill":
                this.setSelectedValue( value ? value[ this.slot_key ] : null );
                break;
            default:
                CHARACTER.LevelUpSkillBasic.prototype.setData.call( this, key, value );
        }
    },
    //********************************************  HTML   **************************************************//
    computeHtml: function ( class_name, taken_values ) {
        this.taken_values = taken_values || [];
        CHARACTER.LevelUpSkillBasic.prototype.computeHtml.call( this, class_name );
    },
    _computeHtmlValidation: function () {
        this.select_component = new COMPONENT.SingleSelectFromData();
        this.select_component.addParamsForEvents( { "param__level_up_skill__uuid": this.uuid } );
        this.select_component.setToggleEventName( "event__level_up__toggle_selector" );
        this.select_component.setClickEventName( "event__level_up__select_choice" );
        let is_feat_line = LEVELUP.FEAT_TYPES.indexOf( this.type ) !== -1;
        if ( is_feat_line ) {
            this.select_component.setInfoEvent( "event__show_information__feat", { "param__feat_category": LEVELUP.FEAT_CATEGORIES[ this.type ] }, "param__feat_name" );
        }
        this.select_component.setOptions( this._getAvailableOptions() );
        this.select_component.setSelectedName( this.selected_value );
        this.select_component.computeHtml();
        SERVICE.DOM.addElementTo( this.select_component.getDomElement(), this.dom_element );
        if ( is_feat_line ) {
            // Le ? de la valeur choisie, posé APRES le composant : le don
            // sélectionné garde son lien de popup hors liste. Le nom ne
            // s'embarque jamais en dur dans le handler (les noms de dons
            // portent des apostrophes), il part par data attribute au clic
            this.info_dom_element = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "span", {
                    class       : "level-up-row-info gs-link-information",
                    "data-value": this.selected_value || "",
                    onclick     : "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__feat',{'param__feat_category':'" + LEVELUP.FEAT_CATEGORIES[ this.type ] + "','param__feat_name':this.getAttribute('data-value')})"
                }, "?" ),
                this.dom_element
            );
        }
    },
    // A qualification cannot be taken twice: the entry passes the values
    // already chosen by the sibling lines, they leave the options
    _getAvailableOptions: function () {
        let to_return = [];
        for ( let i = 0, _size_i = this.options.length; i < _size_i; i++ ) {
            if ( this.taken_values.indexOf( this.options[ i ].name ) !== -1 ) {
                continue;
            }
            to_return.push( this.options[ i ] );
        }
        return to_return;
    },
    // A sibling chose or cleared its value: the taken values move
    updateSelectOptions: function ( taken_values ) {
        this.taken_values = taken_values || [];
        if ( this.select_component ) {
            this.select_component.setOptions( this._getAvailableOptions() );
        }
    },
    // The feat lines receive their options by sync, after their build: the
    // available feats depend on the character state
    setOptions: function ( options ) {
        this.options = options;
        if ( this.select_component ) {
            this.select_component.setOptions( this._getAvailableOptions() );
        }
    },
    updateHtml: function () {
        if ( this.select_component ) {
            this.select_component.setSelectedName( this.selected_value );
            this.select_component.hidePopup();
        }
        if ( this.info_dom_element ) {
            this.info_dom_element.setAttribute( "data-value", this.selected_value || "" );
        }
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        return this.selected_value || false;
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.LevelUpSkillWithSelect, CHARACTER.LevelUpSkillBasic );
