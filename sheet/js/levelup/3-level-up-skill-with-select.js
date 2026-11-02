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
    //********************************************  GETTER SETTER  **************************************************//
    setSelectedValue  : function ( to_set ) {
        this.selected_value = to_set || null;
        this.setPhaseOrPhase( !!this.selected_value, LEVELUP.PHASE.SELECTED, LEVELUP.PHASE.RUNNING );
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
        let select = SERVICE.DOM.createElement( "select", {
            class   : "level-up-row-select",
            onchange: "MANAGER.EventManagerV2.doActionAfter(event,'event__level_up__select_choice',{'param__level_up_skill__uuid':'" + this.uuid + "','param__choice_value':this.value})"
        } );
        this._buildSelectOptions( select );
        SERVICE.DOM.addElementTo( select, this.dom_element );
    },
    // A qualification cannot be taken twice: the entry passes the values
    // already chosen by the sibling lines, the line rebuilds its options
    _buildSelectOptions: function ( select ) {
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "option", { value: "" }, "—" ), select );
        let options = this.options;
        for ( let i = 0, _size_i = options.length; i < _size_i; i++ ) {
            if ( this.taken_values.indexOf( options[ i ].name ) !== -1 ) {
                continue;
            }
            let option = SERVICE.DOM.createElement( "option", { value: options[ i ].name }, options[ i ].name );
            if ( this.selected_value === options[ i ].name ) {
                option.selected = true;
            }
            SERVICE.DOM.addElementTo( option, select );
        }
    },
    updateSelectOptions: function ( taken_values ) {
        this.taken_values = taken_values || [];
        if ( !this.dom_element ) {
            return;
        }
        let select = this.dom_element.querySelector( ".level-up-row-select" );
        if ( !select ) {
            return;
        }
        SERVICE.DOM.empty( select );
        this._buildSelectOptions( select );
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        return this.selected_value || false;
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.LevelUpSkillWithSelect, CHARACTER.LevelUpSkillBasic );
