"use strict";
/**
 * @class CLASSES.Class
 * @extends OBJECT.InterfaceHtml
 */
CLASSES.Class           = function ( class_name ) {
    this.init( class_name );
};
CLASSES.Class.prototype = {
    init: function ( class_name ) {
        this.name      = class_name;
        this.level     = 1;
        this.skills    = new CLASSES.Skills();
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__level_up__take_level":
                this.setLevel( this.getLevel() + 1 );
                return;
            case "event__level_up__remove_level":
                this.setLevel( this.getLevel() - 1 );
                return;
            case "event__get__rank_contributions": {
                let contributions = CLASSES.getMasteriesContributions( this.getName() );
                for ( let i = 0, _size_i = contributions.length; i < _size_i; i++ ) {
                    params[ "param__rank_contributions" ].push( {
                        slot  : contributions[ i ].slot,
                        rank  : contributions[ i ].rank,
                        label : contributions[ i ].label,
                        source: this.getName() + " — maîtrises initiales"
                    } );
                }
                return;
            }
            // The base spell slot grid of a casting class, each day, at its
            // current class level: rank 0 carries the tours de magie
            case "event__get__slot_contributions": {
                let slots_row = CLASSES.getSpellSlotsForLevel( this.getName(), this.getLevel() );
                if ( !slots_row ) {
                    return;
                }
                for ( let i = 0, _size_i = slots_row.length; i < _size_i; i++ ) {
                    if ( !slots_row[ i ] ) {
                        continue;
                    }
                    params[ "param__slot_contributions" ].push( {
                        "type"     : "base",
                        "class_name": this.getName(),
                        "rank"     : i,
                        "count"    : slots_row[ i ],
                        "source"   : this.getName() + " (niveau " + this.getLevel() + ")"
                    } );
                }
                return;
            }
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    getObjectByKey: CHARACTER.ComponentInterface.prototype.getObjectByKey,
    getUUID       : function () {
        return this.name;
    },
    getKey        : function () {
        return CLASSES.key_element;
    },
    getName       : function () {
        return this.name;
    },
    getLabel      : function () {
        return CLASSES.label_element;
    },
    isSet         : function () {
        return !!this.name;
    },
    getLevel      : function () {
        return this.level;
    },
    setLevel      : function ( to_set ) {
        this.level = to_set;
    },
    getSkills     : function () {
        return this.skills;
    },
    //********************************************  DATA   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case "name":
                this.name = value;
                break;
            case "level":
                this.setLevel( parseInt( value ) );
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        let to_return            = {};
        to_return[ "name" ]      = this.name;
        to_return[ "level" ]     = this.level;
        return to_return;
    }
};

SERVICE.CLASS.addPrototype( CLASSES.Class, OBJECT.InterfaceHtml );
