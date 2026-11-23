"use strict";
/**
 * @class CHARACTER.Coins
 * @extends CHARACTER.ComponentInterface
 */
CHARACTER.Coins = function () {
    this.init();
};

CHARACTER.Coins.prototype = {
    init: function () {
        // The wallet rides the SAME locations as the inventory : each
        // location owns its { pp, po, pa, pc } amounts (zeroed at start)
        this.amounts = {};
        for ( let l = 0, _size_l = STUFF.LOCATIONS.length; l < _size_l; l++ ) {
            this.amounts[ STUFF.LOCATIONS[ l ].key ] = this._zeroCoins();
        }
        // The journal : append-only operation lines { timestamp, location,
        // coins: { pp, po, pa, pc } signed, label } — a line applies its
        // delta to its location ONCE, at creation (the balances are saved
        // data, never replayed from the journal, same contract as the
        // health history)
        this.journal           = [];
        this.last_timestamp    = 0;
    },

    _zeroCoins: function () {
        let to_return = {};
        for ( let c = 0, _size_c = STUFF.COINS.length; c < _size_c; c++ ) {
            to_return[ STUFF.COINS[ c ].key ] = 0;
        }
        return to_return;
    },

    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            // An operation lands : internal (equipped -> backpack) or with
            // the outside (gain : outside -> equipped, expense : equipped ->
            // outside). It is recorded in the journal AND its delta applies
            // to the balance(s) — a balance never goes below zero
            case "event__coins__operation": {
                let coins = {};
                for ( let c = 0, _size_c = STUFF.COINS.length; c < _size_c; c++ ) {
                    let coin_key = STUFF.COINS[ c ].key;
                    coins[ coin_key ] = parseInt( params[ "param__coins__" + coin_key ], 10 ) || 0;
                }
                this.applyOperation( params[ "param__coins__from" ], params[ "param__coins__to" ], coins, params[ "param__coins__label" ] || "" );
                return;
            }
        }
    },

    //********************************************  GETTER SETTER  **************************************************//
    getKey: function () {
        return "coins";
    },
    getUUID: function () {
        return "coins";
    },

    getAmountsByLocation: function ( location_key ) {
        return this.amounts[ location_key ] || this._zeroCoins();
    },
    getAmount: function ( location_key, coin_key ) {
        let amounts = this.getAmountsByLocation( location_key );
        return amounts[ coin_key ] || 0;
    },
    // The summed coin map of every location (the title total of the zone)
    getTotalCoinsMap: function () {
        let to_return = this._zeroCoins();
        for ( let l = 0, _size_l = STUFF.LOCATIONS.length; l < _size_l; l++ ) {
            let location_key = STUFF.LOCATIONS[ l ].key;
            for ( let c = 0, _size_c = STUFF.COINS.length; c < _size_c; c++ ) {
                let coin_key = STUFF.COINS[ c ].key;
                to_return[ coin_key ] += this.amounts[ location_key ][ coin_key ];
            }
        }
        return to_return;
    },
    getJournalEntries: function () {
        return this.journal;
    },

    //********************************************  DATA   **************************************************//
    // A coin operation : from -> to, either side may be the outside (gain /
    // expense). The amount is clamped on the leaving location's balance ; the
    // journal entry rides the character location concerned, signed (negative
    // when the money leaves, positive on a gain)
    applyOperation: function ( from_key, to_key, coins, label ) {
        let outside  = STUFF.COIN_OPERATION_OUTSIDE.key;
        let moved    = this._zeroCoins();
        for ( let c = 0, _size_c = STUFF.COINS.length; c < _size_c; c++ ) {
            let coin_key = STUFF.COINS[ c ].key;
            let amount   = parseInt( coins[ coin_key ], 10 ) || 0;
            if ( amount <= 0 ) {
                continue;
            }
            if ( from_key !== outside && this.amounts[ from_key ] ) {
                amount = Math.min( amount, this.amounts[ from_key ][ coin_key ] );
            }
            if ( !amount ) {
                continue;
            }
            moved[ coin_key ] = amount;
            if ( from_key !== outside && this.amounts[ from_key ] ) {
                this.amounts[ from_key ][ coin_key ] -= amount;
            }
            if ( to_key !== outside && this.amounts[ to_key ] ) {
                this.amounts[ to_key ][ coin_key ] += amount;
            }
        }
        let any_moved = false;
        for ( let c = 0, _size_c = STUFF.COINS.length; c < _size_c; c++ ) {
            if ( moved[ STUFF.COINS[ c ].key ] ) {
                any_moved = true;
            }
        }
        if ( !any_moved ) {
            return;
        }
        let now             = new Date().getTime();
        this.last_timestamp = Math.max( now, this.last_timestamp + 1 );
        let signed          = this._zeroCoins();
        for ( let c = 0, _size_c = STUFF.COINS.length; c < _size_c; c++ ) {
            let coin_key = STUFF.COINS[ c ].key;
            signed[ coin_key ] = ( to_key === outside ? -1 : 1 ) * moved[ coin_key ];
        }
        let from_data     = STUFF.getLocationData( from_key ) || STUFF.COIN_OPERATION_OUTSIDE;
        let to_data       = STUFF.getLocationData( to_key ) || STUFF.COIN_OPERATION_OUTSIDE;
        let journal_entry = {
            "timestamp": this.last_timestamp,
            "location" : from_key !== outside ? from_key : to_key,
            "coins"    : signed,
            "label"    : label || ( "Opération : " + from_data.label + " → " + to_data.label )
        };
        this.journal.push( journal_entry );
    },

    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        return {
            "coins": {
                "amounts": this.amounts,
                "journal": this.journal
            }
        };
    },

    //********************************************  UPDATE DATA   **************************************************//
    updateData: function ( data ) {
        if ( !data ) {
            return;
        }
        if ( data.amounts ) {
            for ( let l = 0, _size_l = STUFF.LOCATIONS.length; l < _size_l; l++ ) {
                let location_key = STUFF.LOCATIONS[ l ].key;
                let saved        = data.amounts[ location_key ] || {};
                for ( let c = 0, _size_c = STUFF.COINS.length; c < _size_c; c++ ) {
                    let coin_key = STUFF.COINS[ c ].key;
                    this.amounts[ location_key ][ coin_key ] = parseInt( saved[ coin_key ], 10 ) || 0;
                }
            }
        }
        if ( data.journal ) {
            this.journal        = data.journal;
            this.last_timestamp = 0;
            for ( let i = 0, _size_i = this.journal.length; i < _size_i; i++ ) {
                this.last_timestamp = Math.max( this.last_timestamp, this.journal[ i ].timestamp || 0 );
            }
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Coins, CHARACTER.ComponentInterface );
