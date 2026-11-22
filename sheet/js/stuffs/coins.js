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
            // The balance of one coin of one location is edited in place
            case "event__coins__set_amount":
                this.setAmount( params[ "param__coins__location" ], params[ "param__coins__coin" ], params[ "param__coins__value" ] );
                return;
            // A journal line lands : it is recorded AND its delta applies to
            // the balance of its location (a balance never goes below zero)
            case "event__coins__add_journal": {
                let coins = {};
                for ( let c = 0, _size_c = STUFF.COINS.length; c < _size_c; c++ ) {
                    let coin_key = STUFF.COINS[ c ].key;
                    coins[ coin_key ] = parseInt( params[ "param__coins__" + coin_key ], 10 ) || 0;
                }
                this.addJournalEntry( params[ "param__coins__location" ], coins, params[ "param__coins__label" ] || "" );
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
    setAmount: function ( location_key, coin_key, to_set ) {
        if ( !this.amounts[ location_key ] || STUFF.COIN_VALUE_IN_PC[ coin_key ] === undefined ) {
            return;
        }
        let parsed = parseInt( to_set, 10 );
        if ( isNaN( parsed ) || parsed < 0 ) {
            parsed = 0;
        }
        this.amounts[ location_key ][ coin_key ] = parsed;
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
    addJournalEntry: function ( location_key, coins, label ) {
        if ( !this.amounts[ location_key ] ) {
            return;
        }
        let now                = new Date().getTime();
        this.last_timestamp    = Math.max( now, this.last_timestamp + 1 );
        let entry              = {
            "timestamp": this.last_timestamp,
            "location" : location_key,
            "coins"    : {},
            "label"    : label
        };
        for ( let c = 0, _size_c = STUFF.COINS.length; c < _size_c; c++ ) {
            let coin_key = STUFF.COINS[ c ].key;
            entry[ "coins" ][ coin_key ] = parseInt( coins[ coin_key ], 10 ) || 0;
            // The delta applies ONCE, at creation ; the balance is clamped
            // at zero (no negative wallet)
            this.amounts[ location_key ][ coin_key ] = Math.max( 0, this.amounts[ location_key ][ coin_key ] + entry[ "coins" ][ coin_key ] );
        }
        this.journal.push( entry );
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
