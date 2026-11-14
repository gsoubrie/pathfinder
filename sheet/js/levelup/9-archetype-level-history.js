"use strict";
/**
 * @class CHARACTER.ArchetypeLevelHistory
 * @extends OBJECT.InterfaceContainerHtml
 */
CHARACTER.ArchetypeLevelHistory = function ( level_name ) {
    this.init( level_name );
};
CHARACTER.ArchetypeLevelHistory.prototype = {
    init: function ( level_name ) {
        this.level_name = level_name;
        this.initContents();
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
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
    getLine: function () {
        return this.getContentByUUID( this.level_name + "__" + LEVELUP.ARCHETYPE_FEAT_KEY );
    },
    setLinesCountersParent: function ( parent ) {
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            this.getContent( i ).setCountersParent( parent );
        }
    },
    //********************************************  DATA   **************************************************//
    // The single line of the section builds once (consuming the loaded
    // staging), a change of archetype empties a choice the new one doesn't
    // carry (user decision: the sections resynchronize)
    syncLine: function ( archetype_name ) {
        let line = this.getLine();
        if ( !line ) {
            line = this.add( new CHARACTER.LevelUpSkillWithSelect( {
                "level_name" : this.level_name,
                "slot_key"   : LEVELUP.ARCHETYPE_FEAT_KEY,
                "label"      : LEVELUP.ARCHETYPE_FEAT_LABEL,
                "type"       : LEVELUP.ARCHETYPE_FEAT_KEY,
                "ability_key": LEVELUP.ARCHETYPE_FEAT_KEY,
                "options"    : [],
                "level_skill": this.level_skill
            } ) );
        }
        else if ( this.level_skill ) {
            line.setSelectedValue( this.level_skill[ LEVELUP.ARCHETYPE_FEAT_KEY ] || null );
        }
        let options = ARCHETYPES.getFeatsUpToLevel( archetype_name, parseInt( this.level_name, 10 ) );
        if ( line.getSelectedValue() ) {
            let still_carried = false;
            for ( let i = 0, _size_i = options.length; i < _size_i; i++ ) {
                if ( options[ i ].name === line.getSelectedValue() ) {
                    still_carried = true;
                }
            }
            if ( !still_carried ) {
                line.setSelectedValue( null );
            }
        }
        line.setOptions( options );
        // The staging is consumed: a later sync must not replay it over a
        // fresh choice
        this.level_skill = null;
    },
    clearLineCounter: function () {
        let line = this.getLine();
        if ( line ) {
            line.getCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS ).showForParent( false );
        }
    },
    updateLineOptions: function ( taken_values ) {
        let line = this.getLine();
        if ( line ) {
            line.updateSelectOptions( taken_values );
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
    computeHtml: function ( archetype_name, taken_values ) {
        this.dom_element = SERVICE.DOM.createElement( "div", {
            class                     : "level-up-block archetype-up-block",
            "data-archetype-level-name": this.level_name
        } );
        let title = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "level-up-block-title" } ),
            this.dom_element
        );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "level-up-block-level-num" }, "Archétype : " + archetype_name + " (" + this.level_name + ")" ), title );
        let line = this.getLine();
        line.computeHtml( null, taken_values );
        SERVICE.DOM.addElementTo( line.getDomElement(), this.dom_element );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.ArchetypeLevelHistory, OBJECT.InterfaceContainerHtml );
