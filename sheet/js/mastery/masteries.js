"use strict";

/**
 * @class CHARACTER.Masteries
 */
CHARACTER.Masteries = function () {
    this.init();
};
CHARACTER.Masteries.prototype = {
    init: function () {
    },
    //********************************************  GETTER SETTER  **************************************************//
    getFinalRank: function ( character_object, slot ) {
        let to_return = null;
        let sources   = this.getRankContributions( character_object );
        for ( let i = 0, _size_i = sources.length; i < _size_i; i++ ) {
            if ( sources[ i ].slot === slot ) {
                to_return = MASTERY.getHigherRank( to_return, sources[ i ].rank );
            }
        }
        return to_return;
    },
    getRollModifier: function ( character_object, roll ) {
        let rank           = this.getFinalRank( character_object, roll.slot );
        let rank_bonus     = rank ? MASTERY.getByShort( rank ).bonus : 0;
        let characteristic = character_object.getCharacteristics().getContentByUUID( roll.characteristic );
        return character_object.getLevel() + ( characteristic ? characteristic.getModifierValue() : 0 ) + rank_bonus;
    },
    getRankContributions: function ( character_object ) {
        let params = { "param__rank_contributions": [] };
        character_object.doActionAfter( "event__get__rank_contributions", params );
        return params[ "param__rank_contributions" ];
    },
    getDataBySlot: function ( character_object ) {
        let to_return = {};
        let sources   = this.getRankContributions( character_object );
        for ( let i = 0, _size_i = sources.length; i < _size_i; i++ ) {
            let source  = sources[ i ];
            let current = to_return[ source.slot ];
            if ( !current ) {
                current = to_return[ source.slot ] = { rank: source.rank, label: source.label, sources: [] };
            }
            else if ( MASTERY.ORDER[ source.rank ] > MASTERY.ORDER[ current.rank ] ) {
                current.rank  = source.rank;
                current.label = source.label;
            }
            current.sources.push( { rank: source.rank, source: source.source } );
        }
        let _slots = Object.keys( to_return );
        for ( let i = 0, _size_i = _slots.length; i < _size_i; i++ ) {
            let slot_data = to_return[ _slots[ i ] ];
            let carrying  = [];
            for ( let s = 0, _size_s = slot_data.sources.length; s < _size_s; s++ ) {
                if ( slot_data.sources[ s ].rank === slot_data.rank ) {
                    carrying.push( slot_data.sources[ s ].source );
                }
            }
            slot_data.sources = carrying;
        }
        return to_return;
    },
    //********************************************  DATA   **************************************************//
    getInformationData: function ( character_object ) {
        return {
            "id"                 : "character__masteries",
            "category"           : "masteries",
            "text"               : "Maîtrises",
            "character_masteries": this.getDataBySlot( character_object )
        };
    },
    getSkillActionsInformationData: function ( character_object, skill_key, skill_data ) {
        let skill_rank      = this.getFinalRank( character_object, MASTERY.getSkillSlot( skill_data.label ) ) || "I";
        let actions         = [];
        let general_actions = [];
        for ( let i = 0, _size_i = skill_data.actions.length; i < _size_i; i++ ) {
            actions.push( this._getSkillActionData( skill_data.actions[ i ], skill_rank ) );
        }
        for ( let i = 0, _size_i = skill_data.general_actions.length; i < _size_i; i++ ) {
            general_actions.push( this._getSkillActionData( skill_data.general_actions[ i ], skill_rank ) );
        }
        return {
            "id"               : "skill_actions__" + skill_key,
            "category"         : "skill-actions",
            "text"             : skill_data.label,
            "skill_rank"       : skill_rank,
            "skill_rank_label" : MASTERY.getByShort( skill_rank ).label,
            "skill_badge_css"  : MASTERY.getByShort( skill_rank ).css,
            "skill_description": skill_data.description,
            "actions"          : actions,
            "general_actions"  : general_actions
        };
    },
    _getSkillActionData: function ( action, skill_rank ) {
        return {
            "name"        : action.name,
            "cost"        : action.cost,
            "traits"      : action.traits,
            "rank"        : action.rank,
            "rank_label"  : MASTERY.getByShort( action.rank ).label,
            "prerequisite": action.prerequisite,
            "condition"   : action.condition,
            "description" : action.description,
            "tasks"       : action.tasks,
            "results"     : action.results,
            "usable"      : MASTERY.ORDER[ action.rank ] <= MASTERY.ORDER[ skill_rank ]
        };
    }
};
