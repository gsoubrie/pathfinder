"use strict";

/**
 * @class CHARACTER.LevelUpSkills
 * @extends CHARACTER.ContainerComponentInterface
 * @extends GS.OBJECT.CounterInterfaceV2
 */
CHARACTER.LevelUpSkills = function ( history_entry, parent_object ) {
    this.init( history_entry, parent_object );
};
CHARACTER.LevelUpSkills.prototype = {
    init: function ( history_entry, parent_object ) {
        this.key           = history_entry.getUUID();
        this.is_enabled    = history_entry.isEnabled();
        this.history_entry = history_entry;
        CHARACTER.ContainerComponentInterface.prototype.init.call( this );
        this.initCounterCommon();
        this.setCountersParent( parent_object );
    },
    initCounterCommon: function () {
        this.counters = {};
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__level__toggle":
                // The character already toggled the history entry, the block syncs its state (the window re-renders)
                this.is_enabled = this.history_entry.isEnabled();
                return;
        }
        CHARACTER.ContainerComponentInterface.prototype.doActionAfter.call( this, event_name, params );
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID: function () {
        return this.key;
    },
    isEnabled: function () {
        return this.is_enabled;
    },
    //********************************************  HTML   **************************************************//
    computeHtml: function () {
        let block = SERVICE.DOM.createElement( "div", {
            class              : "level-up-block" + ( this.is_enabled ? "" : " disabled" ),
            "data-level-name"  : this.key,
            "data-level-number": this.key
        } );
        let title = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "level-up-block-title" } ),
            block
        );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "level-up-block-level-num" }, "Niveau " + this.key ), title );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
            class  : "level-up-level-toggle",
            onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__level__toggle',{'param__level_name':'" + this.key + "'})"
        }, this.is_enabled ? "Activé" : "Désactivé" ), title );
        // Disabled layer: the lines stay alive with their validated state, they are just not rendered
        if ( !this.is_enabled ) {
            return block;
        }
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            let class_container = this.getContent( i );
            for ( let s = 0, _size_s = class_container.getSize(); s < _size_s; s++ ) {
                SERVICE.DOM.addElementTo( class_container.getContent( s ).computeHtml(), block );
            }
        }
        return block;
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.LevelUpSkills, CHARACTER.ContainerComponentInterface );
SERVICE.CLASS.addPrototype( CHARACTER.LevelUpSkills, GS.OBJECT.CounterInterfaceV2 );
