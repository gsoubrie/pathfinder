"use strict";
/**
 * @class CHARACTER.AncestryLevelHistory
 * @extends OBJECT.InterfaceContainerHtml
 */
CHARACTER.AncestryLevelHistory = function ( level_name ) {
    this.init( level_name );
};
CHARACTER.AncestryLevelHistory.prototype = {
    init: function ( level_name ) {
        this.level_name = level_name;
        this.initContents();
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__level_up__select_choice": {
                let line = this.getContentByUUID( params[ "param__level_up_skill__uuid" ] );
                if ( line ) {
                    line.setSelectedValue( params[ "param__choice_value" ] );
                    this._updateAdditionalSelectOptions( line );
                }
                return;
            }
            case "event__level_up__toggle_selector": {
                let line = this.getContentByUUID( params[ "param__level_up_skill__uuid" ] );
                if ( line ) {
                    line.doActionAfter( event_name, params );
                }
                return;
            }
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID: function () {
        return this.level_name;
    },
    setLinesCountersParent: function ( parent ) {
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            this.getContent( i ).setCountersParent( parent );
        }
    },
    //********************************************  DATA   **************************************************//
    // The ancestry feat line of the level plus, on the first level, the
    // additional language lines (N = Intelligence modifier if positive):
    // everything builds once (consuming the loaded staging), the options
    // follow the current ancestry at every sync, the feat pool widens with
    // the versatile heritage pool and the language pool with its languages
    syncLines: function ( race_name, int_modifier, legacy_name ) {
        this.syncLine( race_name, legacy_name );
        if ( parseInt( this.level_name, 10 ) === 1 ) {
            this.syncAdditionalLanguages( race_name, int_modifier, legacy_name );
        }
        this.level_skill = null;
    },
    syncLine: function ( race_name, legacy_name ) {
        let line = this.getContentByUUID( this.level_name + "__" + LEVELUP.ANCESTRY_FEAT_KEY );
        if ( !line ) {
            line = this.add( new CHARACTER.LevelUpSkillWithSelect( {
                "level_name" : this.level_name,
                "slot_key"   : LEVELUP.ANCESTRY_FEAT_KEY,
                "label"      : LEVELUP.ANCESTRY_FEAT_LABEL,
                "type"       : LEVELUP.ANCESTRY_FEAT_KEY,
                "ability_key": LEVELUP.ANCESTRY_FEAT_KEY,
                "options"    : [],
                "level_skill": this.level_skill
            } ) );
        }
        else if ( this.level_skill ) {
            line.setSelectedValue( this.level_skill[ LEVELUP.ANCESTRY_FEAT_KEY ] || null );
        }
        line.setOptions( DON.getAvailableAncestryFeats( race_name, parseInt( this.level_name, 10 ), legacy_name ) );
    },
    syncAdditionalLanguages: function ( race_name, int_modifier, legacy_name ) {
        let language_options = RACES.getAdditionalLanguages( race_name );
        // A versatile heritage adds its own languages to the pool
        // (Sang-dragon : Draconique) : an ancestry may already carry one
        // (le Nain propose le draconique), the union dedups
        let legacy_languages = LEGACIES.getAdditionalLanguages( legacy_name );
        for ( let i = 0, _size_i = legacy_languages.length; i < _size_i; i++ ) {
            let already_there = false;
            for ( let j = 0, _size_j = language_options.length; j < _size_j; j++ ) {
                if ( SERVICE.STRING.containsIgnoreCase( language_options[ j ].name, legacy_languages[ i ] ) ) {
                    already_there = true;
                    break;
                }
            }
            if ( !already_there ) {
                language_options.push( { "name": legacy_languages[ i ] } );
            }
        }
        let target_count     = RACES.getAdditionalLanguagesNumber( race_name, int_modifier );
        let language_lines    = [];
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            if ( this.getContent( i ).getSlotKey().indexOf( LEVELUP.ADDITIONAL_LANGUAGE_KEY ) === 0 ) {
                language_lines.push( this.getContent( i ) );
            }
        }
        for ( let i = language_lines.length; i < target_count; i++ ) {
            let slot_key = LEVELUP.ADDITIONAL_LANGUAGE_KEY + i;
            language_lines.push( this.add( new CHARACTER.LevelUpSkillWithSelect( {
                "level_name" : this.level_name,
                "slot_key"   : slot_key,
                "label"      : LEVELUP.ADDITIONAL_LANGUAGE_LABEL,
                "type"       : LEVELUP.ADDITIONAL_LANGUAGE_TYPE,
                "ability_key": slot_key,
                "options"    : language_options,
                "level_skill": this.level_skill
            } ) ) );
        }
        for ( let i = target_count; i < language_lines.length; i++ ) {
            language_lines[ i ].getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ).showForParent( false );
            this.removeContent( language_lines[ i ].getUUID(), null, true );
        }
        for ( let i = 0; i < target_count; i++ ) {
            let line = language_lines[ i ];
            // A sync may have built the lines before the load : the loaded
            // value applies in place, the options follow the current ancestry
            if ( this.level_skill && this.level_skill[ line.getSlotKey() ] !== undefined ) {
                line.setSelectedValue( this.level_skill[ line.getSlotKey() ] || null );
            }
            line.setOptions( language_options );
        }
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        let to_return              = {};
        to_return[ "level_name" ]  = this.level_name;
        to_return[ "level_skill" ] = {};
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            to_return[ "level_skill" ][ this.getContent( i ).getSlotKey() ] = this.getContent( i ).getDataToSave();
        }
        return to_return;
    },
    //********************************************  UPDATE DATA   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case "level_name":
                this.level_name = value;
                break;
            case "level_skill":
                this.level_skill = value;
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    },
    //********************************************  HTML   **************************************************//
    computeHtml: function ( race_name ) {
        this.dom_element = SERVICE.DOM.createElement( "div", {
            class                    : "level-up-block ancestry-up-block",
            "data-ancestry-level-name": this.level_name
        } );
        let title = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "level-up-block-title" } ),
            this.dom_element
        );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "level-up-block-level-num" }, race_name + " " + this.level_name ), title );
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            let line = this.getContent( i );
            if ( line.getSlotKey().indexOf( LEVELUP.ADDITIONAL_LANGUAGE_KEY ) === 0 ) {
                line.computeHtml( undefined, this._getTakenValues( line ) );
            }
            else {
                line.computeHtml();
            }
            SERVICE.DOM.addElementTo( line.getDomElement(), this.dom_element );
        }
    },
    // A language cannot be taken twice: the values chosen on the other
    // language lines leave their selectors
    _getTakenValues: function ( except_line ) {
        let to_return = [];
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            let line = this.getContent( i );
            if ( line === except_line || line.getSlotKey().indexOf( LEVELUP.ADDITIONAL_LANGUAGE_KEY ) !== 0 ) {
                continue;
            }
            if ( line.getSelectedValue() ) {
                to_return.push( line.getSelectedValue() );
            }
        }
        return to_return;
    },
    _updateAdditionalSelectOptions: function ( changed_line ) {
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            let line = this.getContent( i );
            if ( line === changed_line || line.getSlotKey().indexOf( LEVELUP.ADDITIONAL_LANGUAGE_KEY ) !== 0 ) {
                continue;
            }
            line.updateSelectOptions( this._getTakenValues( line ) );
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.AncestryLevelHistory, OBJECT.InterfaceContainerHtml );
