"use strict";
/**
 * @class CHARACTER.Adjustments
 * @extends OBJECT.InterfaceContainerHtml
 */
CHARACTER.Adjustments = function () {
    this.init();
};
CHARACTER.Adjustments.prototype = {
    init: function () {
        this.initContents();
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__adjustment__add":
                this.addAdjustment( params[ "param__adjustment__kind" ], params[ "param__adjustment__value" ], params[ "param__adjustment__explanation" ] );
                return;
            case "event__adjustment__remove": {
                let adjustment = this.getContentByUUID( params[ "param__adjustment__kind" ] + "__" + params[ "param__adjustment__value" ] );
                if ( adjustment ) {
                    this.removeContent( adjustment.getUUID(), null, true );
                }
                return;
            }
            case "event__adjustment__edit_explanation": {
                let adjustment = this.getContentByUUID( params[ "param__adjustment__kind" ] + "__" + params[ "param__adjustment__value" ] );
                if ( adjustment ) {
                    adjustment.setData( "explanation", params[ "param__adjustment__explanation" ] );
                }
                return;
            }
            case "event__get__rank_contributions": {
                let mastery_entries = this.getEntriesByKind( "mastery" );
                for ( let i = 0, _size_i = mastery_entries.length; i < _size_i; i++ ) {
                    let contribution = mastery_entries[ i ].getRankContribution();
                    if ( contribution ) {
                        params[ "param__rank_contributions" ].push( contribution );
                    }
                }
                return;
            }
            // The manual deity of the adjustments ALWAYS wins over the
            // class line of the Progression (routed before, overwritten here)
            case "event__get__deity_choice": {
                let deity_entries = this.getEntriesByKind( "deity" );
                if ( deity_entries.length ) {
                    let deity_data = OBJECT.getDeityInformation( deity_entries[ 0 ].value );
                    params[ "param__deity_choice" ] = {
                        "name": deity_entries[ 0 ].value,
                        "uuid": deity_data ? deity_data.id : null
                    };
                }
                return;
            }
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID: function () {
        return "adjustments";
    },
    getEntriesByKind: function ( kind ) {
        let to_return = [];
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            if ( this.getContent( i ).getKind() === kind ) {
                to_return.push( this.getContent( i ) );
            }
        }
        return to_return;
    },
    // The display zones consume values, the tab consumes entries
    getValuesByKind: function ( kind ) {
        let to_return = [];
        let entries   = this.getEntriesByKind( kind );
        for ( let i = 0, _size_i = entries.length; i < _size_i; i++ ) {
            to_return.push( entries[ i ].value );
        }
        return to_return;
    },
    // Sum of the manual skill bonuses (kind "skill_bonus") on a mastery
    // slot, with their sources for the tooltip (column "Bonus" of the
    // Progression table — display only, the roll stays brut)
    getBonusBySlot: function ( slot ) {
        let to_return = { "value": 0, "sources": [] };
        let entries   = this.getEntriesByKind( "skill_bonus" );
        for ( let i = 0, _size_i = entries.length; i < _size_i; i++ ) {
            let contribution = entries[ i ].getBonusContribution();
            if ( contribution && contribution.slot === slot ) {
                to_return[ "value" ] += contribution.bonus;
                if ( contribution.source ) {
                    to_return[ "sources" ].push( contribution.source );
                }
            }
        }
        return to_return;
    },
    //********************************************  DATA   **************************************************//
    addAdjustment: function ( kind, value, explanation ) {
        if ( !value || this.getContentByUUID( kind + "__" + value ) ) {
            return;
        }
        this.add( new CHARACTER.Adjustment( kind, value, explanation ) );
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        let to_return              = {};
        to_return[ "adjustments" ] = [];
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            to_return[ "adjustments" ].push( this.getContent( i ).getDataToSave() );
        }
        return to_return;
    },
    //********************************************  UPDATE DATA   **************************************************//
    updateData: function ( data ) {
        if ( !data ) {
            return;
        }
        for ( let i = 0, _size_i = data.length; i < _size_i; i++ ) {
            this.addAdjustment( data[ i ][ "kind" ], data[ i ][ "value" ], data[ i ][ "explanation" ] );
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Adjustments, OBJECT.InterfaceContainerHtml );
