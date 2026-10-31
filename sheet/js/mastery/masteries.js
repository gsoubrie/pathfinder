"use strict";

/**
 * @class CHARACTER.Masteries
 * @extends OBJECT.InterfaceHtml
 */
CHARACTER.Masteries = function ( character_object ) {
    this.init( character_object );
};
CHARACTER.Masteries.prototype = {
    init: function ( character_object ) {
        this.character = character_object;
    },
    //********************************************  GETTER SETTER  **************************************************//
    getFinalRank: function ( slot ) {
        let to_return = null;
        let sources   = this.getSourcesData();
        for ( let i = 0, _size_i = sources.length; i < _size_i; i++ ) {
            if ( sources[ i ].slot === slot ) {
                to_return = MASTERY.getHigherRank( to_return, sources[ i ].rank );
            }
        }
        return to_return;
    },
    // Full PF2 roll: character level + characteristic modifier + rank bonus, bonus 0 while the rank is unknown
    getSaveModifier: function ( save ) {
        let rank           = this.getFinalRank( save.slot );
        let rank_bonus     = rank ? MASTERY.getByShort( rank ).bonus : 0;
        let characteristic = this.character.getCharacteristics().getContentByUUID( save.characteristic );
        return this.character.getLevel() + ( characteristic ? characteristic.getModifierValue() : 0 ) + rank_bonus;
    },
    // Flattened contributions of every source: [{ slot, rank, label, source }].
    // Sources: the initial mastery block of each class taken, then the validated
    // level-up abilities granting a higher rank.
    getSourcesData: function () {
        let to_return = [];
        let classes   = this.character.getClasses();
        for ( let i = 0, _size_i = classes.getSize(); i < _size_i; i++ ) {
            let contributions = CLASSES.getMasteriesContributions( classes.getContent( i ).getName() );
            for ( let c = 0, _size_c = contributions.length; c < _size_c; c++ ) {
                to_return.push( {
                    slot  : contributions[ c ].slot,
                    rank  : contributions[ c ].rank,
                    label : contributions[ c ].label,
                    source: classes.getContent( i ).getName() + " — maîtrises initiales"
                } );
            }
        }
        let skills = this.character.getLevelUpSkills();
        for ( let i = 0, _size_i = skills.getSize(); i < _size_i; i++ ) {
            let level_object = skills.getContent( i );
            // A disabled level keeps its lines alive, they just do not count
            if ( !level_object.isEnabled() ) {
                continue;
            }
            for ( let c = 0, _size_c = level_object.getSize(); c < _size_c; c++ ) {
                let class_container = level_object.getContent( c );
                for ( let s = 0, _size_s = class_container.getSize(); s < _size_s; s++ ) {
                    let skill = class_container.getContent( s );
                    if ( !skill.isActive() ) {
                        continue;
                    }
                    let upgrades = skill.getMasteriesUpgrades();
                    for ( let u = 0, _size_u = upgrades.length; u < _size_u; u++ ) {
                        to_return.push( {
                            slot  : upgrades[ u ].slot,
                            rank  : upgrades[ u ].rank,
                            label : MASTERY.getSlotLabel( upgrades[ u ].slot ),
                            source: skill.getSourceLabel()
                        } );
                    }
                }
            }
        }
        return to_return;
    },
    // Final rank by slot with the sources carrying it: { slot: { rank, label, sources } }
    getDataBySlot: function () {
        let to_return = {};
        let sources   = this.getSourcesData();
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
            let carrying   = [];
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
    // Data of the masteries popup: aggregated current ranks of the character
    getInformationData: function () {
        return {
            "id"                 : "character__masteries",
            "category"           : "masteries",
            "text"               : "Maîtrises",
            "character_masteries": this.getDataBySlot()
        };
    },
    // Data of the skill actions popup: each action carries its required rank
    // and its usable state, computed against the current character rank
    getSkillActionsInformationData: function ( skill_key, skill_data ) {
        let skill_rank = this.getFinalRank( MASTERY.getSkillSlot( skill_data.label ) ) || "I";
        let is_usable  = function ( rank_required ) {
            return MASTERY.ORDER[ rank_required ] <= MASTERY.ORDER[ skill_rank ];
        };
        let build_action = function ( action ) {
            let to_return                = {};
            to_return.name               = action.name;
            to_return.cost               = action.cost;
            to_return.traits             = action.traits;
            to_return.rank               = action.rank;
            to_return.rank_label         = MASTERY.getByShort( action.rank ).label;
            to_return.prerequisite       = action.prerequisite;
            to_return.condition          = action.condition;
            to_return.description        = action.description;
            to_return.tasks              = action.tasks;
            to_return.results            = action.results;
            to_return.usable             = is_usable( action.rank );
            return to_return;
        };
        let actions         = [];
        let general_actions = [];
        for ( let i = 0, _size_i = skill_data.actions.length; i < _size_i; i++ ) {
            actions.push( build_action( skill_data.actions[ i ] ) );
        }
        for ( let i = 0, _size_i = skill_data.general_actions.length; i < _size_i; i++ ) {
            general_actions.push( build_action( skill_data.general_actions[ i ] ) );
        }
        return {
            "id"             : "skill_actions__" + skill_key,
            "category"       : "skill-actions",
            "text"           : skill_data.label,
            "skill_rank"     : skill_rank,
            "skill_rank_label": MASTERY.getByShort( skill_rank ).label,
            "skill_badge_css": MASTERY.getByShort( skill_rank ).css,
            "skill_description": skill_data.description,
            "actions"        : actions,
            "general_actions": general_actions
        };
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Masteries, OBJECT.InterfaceHtml );
