"use strict";
/**
 * @class CHARACTER.Stuffs
 * @extends OBJECT.InterfaceContainerHtml
 */
CHARACTER.Stuffs = function () {
    this.init();
};
CHARACTER.Stuffs.prototype = {
    init: function () {
        this.initContents();
        this.counters = {};
        this.initCounter( "bulk" );
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS );
        this.initCounter( GS.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS );
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__stuff__add": {
                this.addStuff( params[ "param__stuff__kind" ], params[ "param__stuff__value" ], params[ "param__stuff__location" ], params[ "param__stuff__comment" ], params[ "param__stuff__place" ] );
                return;
            }
            case "event__stuff__remove": {
                let removed_stuff = this.getContentByUUID( params[ "param__stuff__kind" ] + "__" + params[ "param__stuff__value" ] );
                if ( removed_stuff ) {
                    this.removeContent( removed_stuff.getUUID(), null, true );
                }
                return;
            }
            // The location of an entry moves it between the sections, the
            // place free text describes where a stored stuff sits, the
            // comment is edited in place, the quantity and the
            // characteristics overrides land by the edit popup (tout est
            // éditable — retour utilisateur)
            // The equip gesture (a click on a backpack card) : the entry
            // lands equipped, the schema case rules apply (exchange with
            // the piece on the same case, a two-handed weapon takes both
            // hands and sends the shield back)
            case "event__stuff__equip": {
                this.equipStuff( params[ "param__stuff__kind" ], params[ "param__stuff__value" ] );
                return;
            }
            case "event__stuff__set_location":
            case "event__stuff__edit_place":
            case "event__stuff__edit_comment":
            case "event__stuff__edit_characteristics":
            case "event__stuff__edit_quantity":
            case "event__stuff__set_slot":
            case "event__stuff__edit_current_hp": {
                let entry = this.getContentByUUID( params[ "param__stuff__kind" ] + "__" + params[ "param__stuff__value" ] );
                if ( entry ) {
                    if ( event_name === "event__stuff__set_location" ) {
                        entry.setData( "location", params[ "param__stuff__location" ] );
                        if ( params[ "param__stuff__location" ] === "equipped" ) {
                            this._resolveEquipConflicts( entry );
                        }
                    }
                    else if ( event_name === "event__stuff__edit_place" ) {
                        entry.setData( "place", params[ "param__stuff__place" ] );
                    }
                    else if ( event_name === "event__stuff__edit_comment" ) {
                        entry.setData( "comment", params[ "param__stuff__comment" ] );
                    }
                    else if ( event_name === "event__stuff__edit_characteristics" ) {
                        entry.setData( "characteristics", params[ "param__stuff__characteristics" ] );
                    }
                    else if ( event_name === "event__stuff__set_slot" ) {
                        entry.setSlot( params[ "param__stuff__slot" ] );
                        this._resolveEquipConflicts( entry );
                    }
                    else if ( event_name === "event__stuff__edit_current_hp" ) {
                        // The −/+ buttons of the Combat schema send a
                        // delta, the edit popup sends an absolute value
                        if ( params[ "param__delta" ] !== undefined ) {
                            entry.setCurrentHp( entry.getCurrentHp() + parseInt( params[ "param__delta" ], 10 ) );
                        }
                        else {
                            entry.setCurrentHp( params[ "param__stuff__current_hp" ] );
                        }
                    }
                    else {
                        entry.setData( "quantity", params[ "param__stuff__quantity" ] );
                    }
                }
                return;
            }
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID: function () {
        return "stuffs";
    },
    getStuffsByLocation: function ( location_key ) {
        let to_return = [];
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            if ( this.getContent( i ).location === location_key ) {
                to_return.push( this.getContent( i ) );
            }
        }
        return to_return;
    },
    //********************************************  DATA   **************************************************//
    // The equip gesture : the entry lands equipped, then the schema case
    // rules apply (see _resolveEquipConflicts)
    equipStuff: function ( kind, value ) {
        let entry = this.getContentByUUID( kind + "__" + value );
        if ( !entry ) {
            return;
        }
        entry.setData( "location", "equipped" );
        this._resolveEquipConflicts( entry );
    },
    // Schema case rules : two equipped pieces cannot share a case, a
    // two-handed weapon occupies Main + off-hand (the shield included) and
    // nothing of the hands cohabits with it
    _resolveEquipConflicts: function ( entry ) {
        if ( entry.location !== "equipped" ) {
            return;
        }
        if ( STUFFS.isTwoHanded( entry.value ) ) {
            this._unequipCases( [ "main", "off_hand" ], entry.getUUID() );
            return;
        }
        let case_key = STUFF.getSlotCase( entry.getSlot() );
        if ( case_key === "main" || case_key === "off_hand" ) {
            this._unequipTwoHanded( entry.getUUID() );
        }
        this._unequipCases( [ case_key ], entry.getUUID() );
    },
    _unequipCases: function ( case_keys, except_uuid ) {
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            let other = this.getContent( i );
            if ( other.location === "equipped" && other.getUUID() !== except_uuid && case_keys.indexOf( STUFF.getSlotCase( other.getSlot() ) ) !== -1 ) {
                other.setData( "location", STUFF.DEFAULT_LOCATION );
            }
        }
    },
    _unequipTwoHanded: function ( except_uuid ) {
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            let other = this.getContent( i );
            if ( other.location === "equipped" && other.getUUID() !== except_uuid && STUFFS.isTwoHanded( other.value ) ) {
                other.setData( "location", STUFF.DEFAULT_LOCATION );
            }
        }
    },
    // Relecture : applique la règle de case aux pièces équipées (vieux
    // saves avec deux armes dans la même main) — une arme à 2 mains
    // occupe Main + Main secondaire, sinon la première pièce de chaque
    // case gagne, les suivantes partent au sac à dos
    _resolveAllEquipConflicts: function () {
        let equipped  = this.getStuffsByLocation( "equipped" );
        let seen_case = {};
        for ( let i = 0, _size_i = equipped.length; i < _size_i; i++ ) {
            let entry = equipped[ i ];
            if ( STUFFS.isTwoHanded( entry.value ) ) {
                this._unequipCases( [ "main", "off_hand" ], entry.getUUID() );
                seen_case[ "main" ]     = entry.getUUID();
                seen_case[ "off_hand" ] = entry.getUUID();
                continue;
            }
            let case_key = STUFF.getSlotCase( entry.getSlot() );
            if ( seen_case[ case_key ] ) {
                entry.setData( "location", STUFF.DEFAULT_LOCATION );
                continue;
            }
            seen_case[ case_key ] = entry.getUUID();
        }
    },

    addStuff: function ( kind, value, location, comment, place ) {
        if ( !value ) {
            return;
        }
        let existing = this.getContentByUUID( kind + "__" + value );
        if ( existing ) {
            // The consumables stack, the rest stays alone : picking the +
            // on an owned sword does nothing, on a potion it counts one
            // — the entry keeps its location, stacking does not move it
            if ( existing.isConsumable() ) {
                existing.setData( "quantity", existing.quantity + 1 );
            }
            return;
        }
        let added_stuff = this.add( new CHARACTER.Stuff( kind, value, 1, location || STUFF.DEFAULT_LOCATION, comment, place ) );
        if ( added_stuff && added_stuff.location === "equipped" ) {
            this._resolveEquipConflicts( added_stuff );
        }
    },
    // The bulk of the asked locations only : the bar counts the carried
    // stuff (STUFF.CARRIED_LOCATIONS), the stored section carries its own
    getBulkTotal: function ( location_keys ) {
        let bulk_total = 0;
        let carried    = false;
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            let _location = this.getContent( i ).location;
            if ( location_keys.indexOf( _location ) !== -1 ) {
                bulk_total += STUFFS.getEntryBulk( this.getContent( i ) );
                if ( STUFF.CARRIED_LOCATIONS.indexOf( _location ) !== -1 ) {
                    carried = true;
                }
            }
        }
        bulk_total = Math.round( bulk_total * 10 ) / 10;
        // Règle maison : la part portée compte pour moitié moins, arrondi
        // à l'inférieur (l'entreposé garde son poids plein hors de la barre)
        if ( carried ) {
            bulk_total = STUFFS.getCarriedBulk( bulk_total );
        }
        return bulk_total;
    },
    // PF2 : the maximum bulk is 10 + the Strength modifier
    getBulkMax: function ( character_object ) {
        let for_modifier = character_object.getCharacteristics().getContentByUUID( CHARACTERISTICS.FOR.key ).getModifierValue();
        return 10 + for_modifier;
    },
    // Pushes the carried bulk and its state on the counters : the window
    // follows by itself (counter → window), nothing recalculates by hand.
    // over the max = warning, over twice the max = error (PF2 : no more move)
    pushBulkCounters: function ( character_object ) {
        let bulk_total = this.getBulkTotal( STUFF.CARRIED_LOCATIONS );
        let bulk_max   = this.getBulkMax( character_object );
        this.setCounterValue( "bulk", "carried_bulk", bulk_total );
        // Le max accompagne le total dans un compteur SÉPARÉ (le compteur
        // « bulk » de la fenêtre somme ses fils et ne doit porter QUE le
        // total) : un changement de Force qui ne bouge pas le total doit
        // quand meme rafraichir l'affichage (un compteur ne repousse que
        // sur changement de valeur)
        this.setCounterValue( "bulk_max", "carried_max", bulk_max );
        this.setCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.WARNINGS, "bulk_over", bulk_total > bulk_max ? 1 : 0 );
        this.setCounterValue( GS.OBJECT.COUNTER_V2_CONST.TYPE.ERRORS, "bulk_critical", bulk_total > 2 * bulk_max ? 1 : 0 );
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        let to_return          = {};
        to_return[ "stuffs" ] = [];
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            to_return[ "stuffs" ].push( this.getContent( i ).getDataToSave() );
        }
        return to_return;
    },
    //********************************************  UPDATE DATA   **************************************************//
    updateData: function ( data ) {
        if ( !data ) {
            return;
        }
        for ( let i = 0, _size_i = data.length; i < _size_i; i++ ) {
            // The saves of the worn era carry no location : worn reads
            // back equipped, the rest lands in the backpack
            let location = data[ i ][ "location" ] !== undefined ? data[ i ][ "location" ] : ( data[ i ][ "worn" ] ? "equipped" : STUFF.DEFAULT_LOCATION );
            let current  = this.getContentByUUID( data[ i ][ "kind" ] + "__" + data[ i ][ "value" ] );
            if ( !current ) {
                current = this.add( new CHARACTER.Stuff( data[ i ][ "kind" ], data[ i ][ "value" ], data[ i ][ "quantity" ], location, data[ i ][ "comment" ], data[ i ][ "place" ], data[ i ][ "characteristics" ] ) );
            }
            current.setData( "quantity", data[ i ][ "quantity" ] );
            current.setData( "location", location );
            current.setData( "characteristics", data[ i ][ "characteristics" ] );
            current.setData( "place", data[ i ][ "place" ] );
            if ( data[ i ][ "comment" ] !== undefined ) {
                current.setData( "comment", data[ i ][ "comment" ] );
            }
            if ( data[ i ][ "slot" ] !== undefined ) {
                current.setData( "slot", data[ i ][ "slot" ] );
            }
            if ( data[ i ][ "current_hp" ] !== undefined ) {
                current.setData( "current_hp", data[ i ][ "current_hp" ] );
            }
        }

        // Vieux saves : deux pièces peuvent partager une case (avant la
        // règle « une case = une pièce ») — à la relecture la règle
        // s'applique : la première pièce équipée de chaque case gagne,
        // les autres retournent au sac à dos
        this._resolveAllEquipConflicts();
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Stuffs, OBJECT.InterfaceContainerHtml );
SERVICE.CLASS.addPrototype( CHARACTER.Stuffs, GS.OBJECT.CounterInterfaceV2 );
