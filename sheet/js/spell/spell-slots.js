"use strict";

/**
 * @class CHARACTER.SpellSlots
 */
CHARACTER.SpellSlots = function () {
    this.init();
};
CHARACTER.SpellSlots.prototype = {
    init: function () {
    },
    //********************************************  GETTER SETTER  **************************************************//
    getSlotContributions: function ( character_object ) {
        let params = { "param__slot_contributions": [] };
        character_object.doActionAfter( "event__get__slot_contributions", params );
        return params[ "param__slot_contributions" ];
    },
    // Daily spell slots of the character, rank 0 = tours de magie: the base
    // grid of each casting class at its class level, the school curriculum
    // expanding on every rank its class base grid holds — never at the
    // exception rank, the sort d'archimage slot takes no bonus
    getSlotsData: function ( character_object ) {
        let contributions       = this.getSlotContributions( character_object );
        let base_cantrips       = [];
        let class_ranks         = {};
        let curriculum_by_class = {};
        for ( let i = 0, _size_i = contributions.length; i < _size_i; i++ ) {
            let contribution = contributions[ i ];
            if ( contribution.type === "curriculum" ) {
                curriculum_by_class[ contribution.class_name ] = contribution;
                continue;
            }
            if ( contribution.rank === 0 ) {
                base_cantrips.push( contribution );
                continue;
            }
            let ranks_of_class = class_ranks[ contribution.class_name ] = class_ranks[ contribution.class_name ] || {};
            ranks_of_class[ contribution.rank ] = contribution;
        }
        if ( !base_cantrips.length && !Object.keys( class_ranks ).length ) {
            return null;
        }
        let to_return = { "cantrips": this._computeCantrips( base_cantrips, curriculum_by_class ), "ranks": {} };
        let _rank_keys = this._unionRankKeys( class_ranks );
        for ( let r = 0, _size_r = _rank_keys.length; r < _size_r; r++ ) {
            let rank       = _rank_keys[ r ];
            let slot_data  = { "count": 0, "sources": [] };
            let curriculum = curriculum_by_class[ _rank_keys[ r ].owner ];
            this._accumulateRank( slot_data, rank, class_ranks, curriculum );
            to_return.ranks[ rank.key ] = slot_data;
        }
        return to_return;
    },
    _computeCantrips: function ( base_cantrips, curriculum_by_class ) {
        let to_return = { "count": 0, "sources": [] };
        for ( let i = 0, _size_i = base_cantrips.length; i < _size_i; i++ ) {
            to_return.count += base_cantrips[ i ].count;
            to_return.sources.push( { "value": "" + base_cantrips[ i ].count, "source": base_cantrips[ i ].source } );
        }
        let _classes = Object.keys( curriculum_by_class );
        for ( let c = 0, _size_c = _classes.length; c < _size_c; c++ ) {
            let curriculum = curriculum_by_class[ _classes[ c ] ];
            if ( !curriculum.extra_cantrips ) {
                continue;
            }
            to_return.count += curriculum.extra_cantrips;
            to_return.sources.push( { "value": "+" + curriculum.extra_cantrips, "source": curriculum.source } );
        }
        return to_return;
    },
    _unionRankKeys: function ( class_ranks ) {
        let to_return = [];
        let seen      = {};
        let _classes  = Object.keys( class_ranks ).sort();
        for ( let c = 0, _size_c = _classes.length; c < _size_c; c++ ) {
            let class_name = _classes[ c ];
            let _ranks     = Object.keys( class_ranks[ class_name ] ).sort( function ( rank_a, rank_b ) {
                return parseInt( rank_a, 10 ) - parseInt( rank_b, 10 );
            } );
            for ( let r = 0, _size_r = _ranks.length; r < _size_r; r++ ) {
                if ( !seen[ _ranks[ r ] ] ) {
                    seen[ _ranks[ r ] ] = true;
                    to_return.push( { "key": _ranks[ r ], "owner": class_name } );
                }
            }
        }
        return to_return;
    },
    _accumulateRank: function ( slot_data, rank, class_ranks, curriculum ) {
        let _classes = Object.keys( class_ranks ).sort();
        for ( let c = 0, _size_c = _classes.length; c < _size_c; c++ ) {
            let contribution = class_ranks[ _classes[ c ] ][ rank.key ];
            if ( contribution ) {
                slot_data.count += contribution.count;
                slot_data.sources.push( { "value": "" + contribution.count, "source": contribution.source } );
            }
        }
        if ( curriculum && parseInt( rank.key, 10 ) !== curriculum.except_rank ) {
            slot_data.count += curriculum.count;
            slot_data.sources.push( { "value": "+" + curriculum.count, "source": curriculum.source } );
        }
    },
    //********************************************  DATA   **************************************************//
    // The slots popup data, rebuilt at each opening: the totals are a
    // dynamic state of the character
    getInformationData: function ( character_object, rank ) {
        let slots_data = this.getSlotsData( character_object );
        let slot_data  = rank === 0 ? ( slots_data ? slots_data.cantrips : null ) : ( slots_data ? slots_data.ranks[ rank ] : null );
        if ( !slot_data ) {
            return null;
        }
        return {
            "id"           : "character__spell_slots__" + rank,
            "category"     : "spell-slots",
            "text"         : rank === 0 ? "Tours de magie" : "Rang " + rank,
            "slots_count"  : slot_data.count,
            "slots_unit"   : rank === 0 ? " tours de magie" : " emplacements",
            "slots_sources": slot_data.sources
        };
    }
};
