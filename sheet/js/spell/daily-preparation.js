"use strict";

// ─────────────────────────────────────────────────────────────────────────────
// CHARACTER.DailyPreparation
// La préparation journalière des emplacements de sorts (PF2 remaster : les
// rangs 1+ se répartissent chaque jour entre les sorts du répertoire, un
// sort de rang inférieur peut occuper un emplacement de rang supérieur, le
// même sort peut occuper plusieurs emplacements — les tours de magie et les
// focalisés ne se préparent pas). L'état vit ici, enfant du personnage, save
// clé "daily_preparation" : { preparation: { "<rang>": [nom, ...] },
// spent: { "<rang>": [bool, ...] } } — l'index du tableau est l'emplacement.
// La fenêtre Sorts synchronise la structure aux rangs ouverts (syncWithSlots)
// à chaque rendu : un rang qui ferme part, un sort retiré du répertoire
// quitte la préparation, un emplacement vidé n'est plus dépensé.
// ─────────────────────────────────────────────────────────────────────────────
/**
 * @class CHARACTER.DailyPreparation
 * @extends OBJECT.InterfaceHtml
 */
CHARACTER.DailyPreparation = function () {
    this.init();
};
CHARACTER.DailyPreparation.prototype = {
    init: function () {
        this.preparation = {};
        this.spent       = {};
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__daily_spell__select_choice":
                this.setSlotValue( params[ "param__daily_spell__rank" ], params[ "param__daily_spell__index" ], params[ "param__choice_value" ] );
                return;
            case "event__daily_spell__toggle_spent":
                this.toggleSpent( params[ "param__daily_spell__rank" ], params[ "param__daily_spell__index" ] );
                return;
            // Repos long : réallume tous les emplacements, la préparation reste
            case "event__daily_spell__long_rest":
                this.spent = {};
                return;
            // Nouveau jour : la préparation repart à vide (et les dépenses avec)
            case "event__daily_spell__new_day":
                this.preparation = {};
                this.spent       = {};
                return;
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID: function () {
        return "daily_preparation";
    },
    getSlotValue: function ( rank, index ) {
        let rank_values = this.preparation[ "" + rank ];
        return rank_values ? ( rank_values[ index ] || "" ) : "";
    },
    isSpent: function ( rank, index ) {
        let rank_spent = this.spent[ "" + rank ];
        return rank_spent ? !!rank_spent[ index ] : false;
    },
    setSlotValue: function ( rank, index, value ) {
        let rank_key    = "" + rank;
        let rank_values = this.preparation[ rank_key ] = this.preparation[ rank_key ] || [];
        let rank_spent  = this.spent[ rank_key ] = this.spent[ rank_key ] || [];
        rank_values[ index ] = value || "";
        // Un emplacement vidé n'est plus dépensé
        if ( !value ) {
            rank_spent[ index ] = false;
        }
    },
    toggleSpent: function ( rank, index ) {
        // Un emplacement sans sort ne se dépense pas
        if ( !this.getSlotValue( rank, index ) ) {
            return;
        }
        let rank_key   = "" + rank;
        let rank_spent = this.spent[ rank_key ] = this.spent[ rank_key ] || [];
        rank_spent[ index ] = !rank_spent[ index ];
    },
    // Ajuste la structure aux rangs ouverts (taille = compte du rang) et au
    // répertoire courant : appelé par la fenêtre à chaque rendu de la zone
    syncWithSlots: function ( slots_data, spells ) {
        let open_ranks = slots_data ? Object.keys( slots_data.ranks ) : [];
        let _keys      = Object.keys( this.preparation );
        for ( let k = 0, _size_k = _keys.length; k < _size_k; k++ ) {
            if ( open_ranks.indexOf( _keys[ k ] ) === -1 ) {
                delete this.preparation[ _keys[ k ] ];
                delete this.spent[ _keys[ k ] ];
            }
        }
        for ( let r = 0, _size_r = open_ranks.length; r < _size_r; r++ ) {
            let rank  = open_ranks[ r ];
            let count = slots_data.ranks[ rank ].count;
            let values = this.preparation[ rank ] || [];
            let spent  = this.spent[ rank ] || [];
            // Pas d'extension avec des vides : une préparation vide reste {}
            // (round-trip du save stable), seuls les rangs qui rétrécissent
            // sont tronqués et les sorts retirés du répertoire purgés
            if ( values.length > count ) {
                values.length = count;
                spent.length  = count;
                this.preparation[ rank ] = values;
                this.spent[ rank ]       = spent;
            }
            for ( let i = 0; i < count; i++ ) {
                if ( values[ i ] && !spells.getContentByUUID( "spell__" + values[ i ] ) ) {
                    values[ i ] = "";
                    spent[ i ]  = false;
                }
            }
        }
    },
    // { nom du sort: nombre d'emplacements préparés } — badges du répertoire
    getPreparedCounts: function () {
        let to_return = {};
        let _ranks    = Object.keys( this.preparation );
        for ( let r = 0, _size_r = _ranks.length; r < _size_r; r++ ) {
            let values = this.preparation[ _ranks[ r ] ];
            for ( let i = 0, _size_i = values.length; i < _size_i; i++ ) {
                if ( values[ i ] ) {
                    to_return[ values[ i ] ] = ( to_return[ values[ i ] ] || 0 ) + 1;
                }
            }
        }
        return to_return;
    },
    getSpentCountOfRank: function ( rank ) {
        let rank_spent = this.spent[ "" + rank ] || [];
        let to_return  = 0;
        for ( let i = 0, _size_i = rank_spent.length; i < _size_i; i++ ) {
            if ( rank_spent[ i ] ) {
                to_return++;
            }
        }
        return to_return;
    },
    // Emplacements ouverts laissés vides — badge de l'onglet Sorts
    getEmptySlotsCount: function ( slots_data ) {
        let to_return = 0;
        if ( !slots_data ) {
            return to_return;
        }
        let _ranks = Object.keys( slots_data.ranks );
        for ( let r = 0, _size_r = _ranks.length; r < _size_r; r++ ) {
            let rank  = _ranks[ r ];
            let count = slots_data.ranks[ rank ].count;
            for ( let i = 0; i < count; i++ ) {
                if ( !this.getSlotValue( rank, i ) ) {
                    to_return++;
                }
            }
        }
        return to_return;
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        return {
            "daily_preparation": {
                "preparation": this.preparation,
                "spent"      : this.spent
            }
        };
    },
    //********************************************  UPDATE DATA   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case "preparation":
                this.preparation = value || {};
                break;
            case "spent":
                this.spent = value || {};
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.DailyPreparation, OBJECT.InterfaceHtml );
