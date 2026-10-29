"use strict";

/**
 * Masteries of the character: derived state aggregating the mastery
 * contributions of every source (the classes today, the race, the gifts and
 * the items later). Masteries take the highest rank of all sources, they
 * never add, and the state is computed on demand: nothing is saved.
 *
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
    // Toutes les contributions des sources, aplaties : [{ slot, rank, label }]
    // Sources : le bloc mastery initial de chaque classe posée, puis les
    // capacités des niveaux actifs qui garantissent un rang supérieur.
    getSourcesData: function () {
        let to_return = [];
        let classes   = this.character.getClasses();
        for ( let i = 0, _size_i = classes.getSize(); i < _size_i; i++ ) {
            to_return = to_return.concat( CLASSES.getMasteriesContributions( classes.getContent( i ).getName() ) );
        }
        let skills = this.character.getLevelUpSkills();
        for ( let i = 0, _size_i = skills.getSize(); i < _size_i; i++ ) {
            let skill    = skills.getContent( i );
            let upgrades = CLASSES.getMasteriesUpgrade( skill.getClassName(), skill.getAbilityKey() );
            for ( let u = 0, _size_u = upgrades.length; u < _size_u; u++ ) {
                to_return.push( {
                    slot : upgrades[ u ].slot,
                    rank : upgrades[ u ].rank,
                    label: MASTERY.getSlotLabel( upgrades[ u ].slot )
                } );
            }
        }
        return to_return;
    },
    // Rang final par slot, trie par section puis libelle pour l'affichage
    getDataBySlot: function () {
        let to_return = {};
        let sources   = this.getSourcesData();
        for ( let i = 0, _size_i = sources.length; i < _size_i; i++ ) {
            let source  = sources[ i ];
            let current = to_return[ source.slot ];
            if ( !current || MASTERY.ORDER[ source.rank ] > MASTERY.ORDER[ current.rank ] ) {
                to_return[ source.slot ] = { rank: source.rank, label: source.label };
            }
        }
        return to_return;
    },
    //********************************************  DATA   **************************************************//
    // Donnee de la popup d'information : rangs finaux agrégés du personnage
    getInformationData: function () {
        return {
            "id"                 : "character__masteries",
            "category"           : "masteries",
            "text"               : "Maîtrises",
            "character_masteries": this.getDataBySlot()
        };
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Masteries, OBJECT.InterfaceHtml );
