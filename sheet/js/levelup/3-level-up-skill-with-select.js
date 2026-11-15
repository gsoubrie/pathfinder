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
        this.selected_value    = null;
        this.qualifier_value   = null;
        this.qualifier_component = null;
        this.taken_values      = [];
        CHARACTER.LevelUpSkillBasic.prototype.init.call( this, skill_data );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__level_up__toggle_selector":
                this.select_component.toggleState();
                return;
            // The type selector of a qualified skill (Artisanat, Connaissance)
            case "event__level_up__toggle_qualifier_selector":
                if ( this.qualifier_component ) {
                    this.qualifier_component.toggleState();
                }
                return;
            case "event__level_up__select_qualifier":
                this.setQualifierValue( params[ "param__choice_value" ] );
                return;
            // Enter on the type filter: the canonical name when an option
            // matches, the raw text otherwise (user decision: list + free)
            case "event__level_up__qualifier_filter_enter":
                this.setQualifierValue( this._canonicalQualifierValue( params[ "param__filter_value" ] ) );
                return;
        }
        CHARACTER.LevelUpSkillBasic.prototype.doActionAfter.call( this, event_name, params );
    },
    //********************************************  GETTER SETTER  **************************************************//
    setSelectedValue  : function ( to_set ) {
        this.selected_value = to_set || null;
        this.qualifier_value = null;
        // The loaded value may carry the qualified form "Connaissance (du
        // copiste)" : the skill and its type split here (the skill choices
        // only — a feat name may carry parentheses)
        if ( this._isSkillChoice() ) {
            let qualified_match = ( this.selected_value || "" ).match( /^(.+?) \((.+)\)$/ );
            if ( qualified_match && this._isQualifiedSkill( qualified_match[ 1 ] ) ) {
                this.selected_value  = qualified_match[ 1 ];
                this.qualifier_value = qualified_match[ 2 ];
            }
        }
        this._updateSelectedPhase();
        this.updateHtml();
    },
    getSelectedValue  : function () {
        return this.selected_value;
    },
    setQualifierValue : function ( to_set ) {
        if ( !this._needsQualifier() ) {
            return;
        }
        this.qualifier_value = to_set || null;
        this._updateSelectedPhase();
        this.updateHtml();
    },
    // The value flowing to the masteries and the save : the qualified form
    // carries its type, a qualified skill never validates without it
    getQualifiedValue: function () {
        if ( !this.selected_value ) {
            return null;
        }
        if ( this._needsQualifier() ) {
            return this.qualifier_value ? this.selected_value + " (" + this.qualifier_value + ")" : null;
        }
        return this.selected_value;
    },
    _updateSelectedPhase: function () {
        let qualified_value = this.getQualifiedValue();
        this.setPhaseOrPhase( !!qualified_value, LEVELUP.PHASE.SELECTED, LEVELUP.PHASE.RUNNING );
    },
    _isSkillChoice    : function () {
        return this.type === "skill_increase" || this.slot_key.indexOf( LEVELUP.ADDITIONAL_SKILL_KEY ) === 0;
    },
    _isQualifiedSkill : function ( skill_label ) {
        if ( !skill_label ) {
            return false;
        }
        let is_as_skill = SKILLS.isASkill( skill_label );
        return !!( is_as_skill && is_as_skill.need_qualifier );
    },
    _needsQualifier   : function () {
        return this._isSkillChoice() && this._isQualifiedSkill( this.selected_value );
    },
    getMasteriesUpgrades: function ( class_name ) {
        let upgrades        = CHARACTER.LevelUpSkillBasic.prototype.getMasteriesUpgrades.call( this, class_name );
        let qualified_value = this.getQualifiedValue();
        if ( this.type === LEVELUP.ADDITIONAL_SKILL_TYPE && qualified_value ) {
            upgrades = upgrades.concat( [ { "slot": MASTERY.getSkillSlot( qualified_value ), "rank": "Q" } ] );
        }
        if ( this.selected_value ) {
            upgrades = upgrades.concat( CLASSES.getChoiceMasteriesUpgrade( class_name, this.ability_key, this.selected_value ) );
        }
        return upgrades;
    },
    // A skill increase validates by its chosen skill: the contribution carries
    // no rank, the granted rank derives from the skill's current one — a
    // qualified skill carries its OWN slot, its rank never lands on the base
    getRankIncreaseContribution: function () {
        if ( this.type !== "skill_increase" || !this.getQualifiedValue() ) {
            return null;
        }
        return {
            slot          : MASTERY.getSkillSlot( this.getQualifiedValue() ),
            skill_increase: true,
            level         : parseInt( this.level_name, 10 ),
            source        : this.getSourceLabel()
        };
    },
    // The curriculum of the chosen school grants slot bonuses of its class:
    // the aggregation expands them on every rank the class base grid holds
    getSlotContribution: function ( class_name ) {
        if ( !this.selected_value ) {
            return null;
        }
        let curriculum = CLASSES.getChoiceCurriculum( class_name, this.ability_key, this.selected_value );
        if ( !curriculum ) {
            return null;
        }
        return {
            "type"          : "curriculum",
            "class_name"    : class_name,
            "count"         : curriculum.slots_per_rank,
            "extra_cantrips": curriculum.extra_cantrips,
            "except_rank"   : curriculum.except_rank,
            "source"        : this.selected_value + " (cursus)"
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
    _computeHtmlValidation: function ( class_name ) {
        this.select_component = new COMPONENT.SingleSelectFromData();
        this.select_component.addParamsForEvents( { "param__level_up_skill__uuid": this.uuid } );
        this.select_component.setToggleEventName( "event__level_up__toggle_selector" );
        this.select_component.setClickEventName( "event__level_up__select_choice" );
        let is_feat_line      = LEVELUP.FEAT_TYPES.indexOf( this.type ) !== -1;
        let has_choice_info   = !is_feat_line && this._hasChoiceInformation();
        if ( is_feat_line ) {
            this.select_component.setInfoEvent( "event__show_information__feat", { "param__feat_category": LEVELUP.FEAT_CATEGORIES[ this.type ] }, "param__feat_name" );
        }
        // A choice line whose entries own a compendium uuid (the
        // methodology of the Enquêteur, the arcanic school of the
        // Magicien) opens the information of EACH option
        if ( has_choice_info ) {
            this.select_component.setInfoEvent( "event__show_information__choice", { "param__class_name": class_name, "param__ability_key": this.ability_key }, "param__choice_value" );
        }
        this.select_component.setOptions( this._getAvailableOptions() );
        this.select_component.setSelectedName( this.selected_value );
        this.select_component.computeHtml();
        SERVICE.DOM.addElementTo( this.select_component.getDomElement(), this.dom_element );
        // The type selector of a qualified skill lives between the skill
        // selector and the info link : empty and hidden while the chosen
        // skill needs no type — the DOM order IS the render order
        this.qualifier_container = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "level-up-row-qualifier" } ),
            this.dom_element
        );
        this._renderQualifierSelect();
        if ( is_feat_line || has_choice_info ) {
            // Le ? de la valeur choisie, posé APRES le composant : la
            // valeur sélectionnée garde son lien de popup hors liste. Le
            // nom ne s'embarque jamais en dur dans le handler (les noms
            // portent des apostrophes), il part par data attribute au clic
            let info_onclick = is_feat_line ?
                               "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__feat',{'param__feat_category':'" + LEVELUP.FEAT_CATEGORIES[ this.type ] + "','param__feat_name':this.getAttribute('data-value')})" :
                               "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__choice',{'param__class_name':'" + class_name + "','param__ability_key':'" + this.ability_key + "','param__choice_value':this.getAttribute('data-value')})";
            this.info_dom_element = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "span", {
                    class       : "level-up-row-info gs-link-information",
                    "data-value": this.selected_value || "",
                    onclick     : info_onclick
                }, "?" ),
                this.dom_element
            );
        }
    },
    // The choice entries carrying a compendium uuid open the information
    // popup of their option: the line knows them at build (the choice
    // options never depend on the character state)
    _hasChoiceInformation: function () {
        for ( let i = 0, _size_i = this.options.length; i < _size_i; i++ ) {
            if ( this.options[ i ].uuid ) {
                return true;
            }
        }
        return false;
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
        this._renderQualifierSelect();
        if ( this.info_dom_element ) {
            this.info_dom_element.setAttribute( "data-value", this.selected_value || "" );
        }
    },
    // The type selector builds in place on every change of the chosen
    // skill : it appears on Artisanat and Connaissance, leaves on the
    // others (the container hides when empty)
    _renderQualifierSelect: function () {
        if ( !this.qualifier_container ) {
            return;
        }
        SERVICE.DOM.empty( this.qualifier_container );
        this.qualifier_component = null;
        if ( !this._needsQualifier() ) {
            return;
        }
        this.qualifier_component = new COMPONENT.SingleSelectFromData();
        this.qualifier_component.addParamsForEvents( { "param__level_up_skill__uuid": this.uuid } );
        this.qualifier_component.setToggleEventName( "event__level_up__toggle_qualifier_selector" );
        this.qualifier_component.setClickEventName( "event__level_up__select_qualifier" );
        this.qualifier_component.setFilterEnterEventName( "event__level_up__qualifier_filter_enter" );
        this.qualifier_component.setOptions( SKILLS.getQualifierList( this.selected_value ) );
        this.qualifier_component.setSelectedName( this.qualifier_value );
        this.qualifier_component.computeHtml();
        SERVICE.DOM.addElementTo( this.qualifier_component.getDomElement(), this.qualifier_container );
    },
    _canonicalQualifierValue: function ( raw_value ) {
        let trimmed = ( raw_value || "" ).trim();
        if ( !trimmed ) {
            return "";
        }
        let options = SKILLS.getQualifierList( this.selected_value );
        for ( let i = 0, _size_i = options.length; i < _size_i; i++ ) {
            if ( options[ i ].name.toLowerCase() === trimmed.toLowerCase() ) {
                return options[ i ].name;
            }
        }
        return trimmed;
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        return this.getQualifiedValue() || false;
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.LevelUpSkillWithSelect, CHARACTER.LevelUpSkillBasic );
