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
        CHARACTER.LevelUpSkillBasic.prototype.init.call( this, skill_data );
    },
    //********************************************  GETTER SETTER  **************************************************//
    setSelectedValue  : function ( to_set ) {
        this.selected_value = to_set || null;
        this.setPhaseOrPhase( !!this.selected_value, LEVELUP.PHASE.SELECTED, LEVELUP.PHASE.RUNNING );
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
    _computeHtmlValidation: function () {
        let select = SERVICE.DOM.createElement( "select", {
            class   : "level-up-row-select",
            onchange: "MANAGER.EventManagerV2.doActionAfter(event,'event__level_up__select_choice',{'param__level_up_skill__uuid':'" + this.uuid + "','param__choice_value':this.value})"
        } );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "option", { value: "" }, "—" ), select );
        let options = this.options;
        for ( let i = 0, _size_i = options.length; i < _size_i; i++ ) {
            let option = SERVICE.DOM.createElement( "option", { value: options[ i ].name }, options[ i ].name );
            if ( this.selected_value === options[ i ].name ) {
                option.selected = true;
            }
            SERVICE.DOM.addElementTo( option, select );
        }
        SERVICE.DOM.addElementTo( select, this.dom_element );
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        return this.selected_value || false;
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.LevelUpSkillWithSelect, CHARACTER.LevelUpSkillBasic );
