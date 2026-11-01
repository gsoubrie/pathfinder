"use strict";
/**
 * @class CHARACTER.LevelUpSkillChoice
 * @extends CHARACTER.LevelUpSkillClass
 */
CHARACTER.LevelUpSkillChoice = function ( skill_data ) {
    this.init( skill_data );
};
CHARACTER.LevelUpSkillChoice.prototype = {
    init: function ( skill_data ) {
        this.selected_value = null;
        CHARACTER.LevelUpSkillClass.prototype.init.call( this, skill_data );
    },
    //********************************************  GETTER SETTER  **************************************************//
    // The chosen value owns the validation: the phase derives from it,
    // picking the empty option unvalidates the line
    setSelectedValue  : function ( to_set ) {
        this.selected_value = to_set || null;
        this.setPhaseOrPhase( !!this.selected_value, LEVELUP.PHASE.SELECTED, LEVELUP.PHASE.RUNNING );
    },
    getValidatedValue : function () {
        return this.selected_value || false;
    },
    //********************************************  UPDATE DATA   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case "choice_data":
                this.choice_data = value;
                break;
            case "selected_value":
                this.setSelectedValue( value );
                break;
            default:
                CHARACTER.LevelUpSkillClass.prototype.setData.call( this, key, value );
        }
    },
    //********************************************  HTML   **************************************************//
    // The selector replaces the toggle: choosing a value IS the validation
    _computeHtmlValidation: function () {
        let select = SERVICE.DOM.createElement( "select", {
            class   : "level-up-row-select",
            onchange: "MANAGER.EventManagerV2.doActionAfter(event,'event__level_up__select_choice',{'param__level_up_skill__uuid':'" + this.uuid + "','param__choice_value':this.value})"
        } );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "option", { value: "" }, "—" ), select );
        let entries = this.choice_data.entries;
        for ( let i = 0, _size_i = entries.length; i < _size_i; i++ ) {
            let option = SERVICE.DOM.createElement( "option", { value: entries[ i ].name }, entries[ i ].name );
            if ( this.selected_value === entries[ i ].name ) {
                option.selected = true;
            }
            SERVICE.DOM.addElementTo( option, select );
        }
        SERVICE.DOM.addElementTo( select, this.dom_element );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.LevelUpSkillChoice, CHARACTER.LevelUpSkillClass );
