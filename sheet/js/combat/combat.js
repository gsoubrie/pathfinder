"use strict";
/**
 * @class CHARACTER.Combat
 */
CHARACTER.Combat = function () {
    this.init();
};
CHARACTER.Combat.prototype = {
    init: function () {
    },
    //********************************************  GETTER SETTER  **************************************************//
    // The worn entries of a kind (the combat reads the equipped stuff only,
    // the backpack and the storage stay out of the fight)
    _getEquippedByKind: function ( character_object, kind_key ) {
        let to_return = [];
        let equipped  = character_object.getStuffs().getStuffsByLocation( "equipped" );
        for ( let i = 0, _size_i = equipped.length; i < _size_i; i++ ) {
            if ( equipped[ i ].getKind() === kind_key ) {
                to_return.push( equipped[ i ] );
            }
        }
        return to_return;
    },
    // The worn ARMOR : the shields ride the same kind, their scraped group
    // tells them apart ; several armors worn at once : the best item bonus
    // wins (the sheet wears ONE armor, the pick stays deterministic)
    getWornArmor: function ( character_object ) {
        let to_return = null;
        let worn      = this._getEquippedByKind( character_object, "armor" );
        for ( let i = 0, _size_i = worn.length; i < _size_i; i++ ) {
            if ( worn[ i ].getCharacteristicValue( COMBAT.GROUP_FIELD ) === COMBAT.SHIELD_GROUP ) {
                continue;
            }
            if ( !to_return ) {
                to_return = worn[ i ];
                continue;
            }
            let current_bonus = COMBAT.parseSignedNumber( to_return.getCharacteristicValue( COMBAT.ARMOR_BONUS_FIELD ) );
            let worn_bonus    = COMBAT.parseSignedNumber( worn[ i ].getCharacteristicValue( COMBAT.ARMOR_BONUS_FIELD ) );
            if ( ( worn_bonus || 0 ) > ( current_bonus || 0 ) ) {
                to_return = worn[ i ];
            }
        }
        return to_return;
    },
    getWornShield: function ( character_object ) {
        let worn = this._getEquippedByKind( character_object, "armor" );
        for ( let i = 0, _size_i = worn.length; i < _size_i; i++ ) {
            if ( worn[ i ].getCharacteristicValue( COMBAT.GROUP_FIELD ) === COMBAT.SHIELD_GROUP ) {
                return worn[ i ];
            }
        }
        return null;
    },
    //********************************************  ARMOR CLASS  **************************************************//
    // PF2 : CA = 10 + dexterity (capped by the worn armor) + the item bonus
    // of the armor + the profiency bonus of the matching defense rank ; no
    // armor worn : the unarmored rank drives the class, the dexterity stays
    // uncapped. Every step of the total is a source of the popup
    getArmorClassData: function ( character_object ) {
        let armor     = this.getWornArmor( character_object );
        let dex_value = character_object.getCharacteristics().getContentByUUID( CHARACTERISTICS.DEX.key );
        let dex_mod   = dex_value ? dex_value.getModifierValue() : 0;
        let dex_cap   = armor ? COMBAT.parseSignedNumber( armor.getCharacteristicValue( COMBAT.DEX_CAP_FIELD ) ) : null;
        let dex_used  = dex_cap !== null ? Math.min( dex_mod, dex_cap ) : dex_mod;
        let armor_bonus = armor ? ( COMBAT.parseSignedNumber( armor.getCharacteristicValue( COMBAT.ARMOR_BONUS_FIELD ) ) || 0 ) : 0;
        let defense_slot = armor ? ( COMBAT.ARMOR_CATEGORY_SLOTS[ armor.getCharacteristicValue( COMBAT.CATEGORY_FIELD ) ] || null ) : COMBAT.UNARMORED_DEFENSE_SLOT;
        let rank       = defense_slot ? character_object.getMasteries().getFinalRank( character_object, defense_slot ) : null;
        let rank_bonus = rank ? MASTERY.getByShort( rank ).bonus : 0;
        let sources    = [
            { "value": COMBAT.BASE_ARMOR_CLASS, "text": "Base" },
            { "value": dex_used,                "text": "Dextérité" }
        ];
        if ( armor_bonus ) {
            sources.push( { "value": armor_bonus, "text": armor.value } );
        }
        if ( rank_bonus ) {
            sources.push( {
                "value": rank_bonus,
                "text" : MASTERY.getSlotLabel( defense_slot ) + " " + MASTERY.getByShort( rank ).label
            } );
        }
        return {
            "value"      : COMBAT.BASE_ARMOR_CLASS + dex_used + armor_bonus + rank_bonus,
            "rank"       : rank,
            "armor"      : armor,
            "dex_used"   : dex_used,
            "sources"    : sources,
            "shield"     : this.getWornShield( character_object )
        };
    },
    getArmorClassInformationData: function ( character_object ) {
        let armor_class = this.getArmorClassData( character_object );
        return {
            "id"                 : "character__armor_class",
            "category"           : "armor_class",
            "text"               : "Classe d'armure",
            "armor_class"        : armor_class.value,
            "armor_class_sources": armor_class.sources
        };
    },
    //********************************************  EQUIPMENT  **************************************************//
    // The worn pieces of protection the Combat tab displays : ONE armor and
    // ONE shield (several worn : the best bonus wins), their scraped stats
    // ride with them — the strike weapons live in the attacks zone
    getEquipmentLines: function ( character_object ) {
        let armor  = this.getWornArmor( character_object );
        let shield = this.getWornShield( character_object );
        return [
            {
                "label": "Armure",
                "entry": armor,
                "stats": armor ? this._formatArmorStats( armor ) : null
            },
            {
                "label": "Bouclier",
                "entry": shield,
                "stats": shield ? this._formatShieldStats( shield ) : null
            }
        ];
    },
    // The displayed stats of a worn armor : the pieces the total counts (the
    // item bonus, the dexterity cap), the rest lives in its item popup
    _formatArmorStats: function ( armor ) {
        let parts = [];
        let bonus = armor.getCharacteristicValue( COMBAT.ARMOR_BONUS_FIELD );
        if ( bonus ) {
            parts.push( "CA " + bonus );
        }
        let cap = armor.getCharacteristicValue( COMBAT.DEX_CAP_FIELD );
        if ( cap ) {
            parts.push( "Mod. de dex. max. " + cap );
        }
        return parts.join( ", " );
    },
    // A shield adds its CA only when raised : the sheet never raises it for
    // the player, the hint spells the rule out
    _formatShieldStats: function ( shield ) {
        let parts     = [];
        let solidite  = shield.getCharacteristicValue( COMBAT.STURDINESS_FIELD );
        if ( solidite ) {
            parts.push( "Solidité " + solidite );
        }
        parts.push( "CA +" + COMBAT.SHIELD_CA_BONUS + " brandi" );
        return parts.join( ", " );
    },

    //********************************************  ATTACKS  **************************************************//
    // The strike lines : the fist first, then every EQUIPPED weapon. The roll
    // = level + ability modifier + the profiency bonus of the category slot
    getAttackLines: function ( character_object ) {
        let to_return = [
            {
                "name"         : COMBAT.UNARMED_NAME,
                "slot"         : COMBAT.UNARMED_SLOT,
                "characteristic": COMBAT.UNARMED_CHARACTERISTIC,
                "damage"       : COMBAT.UNARMED_DAMAGE,
                "is_stuff"     : false
            }
        ];
        let weapons = this._getEquippedByKind( character_object, "weapon" );
        for ( let i = 0, _size_i = weapons.length; i < _size_i; i++ ) {
            to_return.push( {
                "name"         : weapons[ i ].value,
                "slot"         : this._getWeaponSlot( weapons[ i ] ),
                "characteristic": this._getWeaponCharacteristic( weapons[ i ] ),
                "damage"       : weapons[ i ].getCharacteristicValue( COMBAT.DAMAGE_FIELD ),
                "is_stuff"     : true
            } );
        }
        return to_return;
    },
    _getWeaponSlot: function ( weapon ) {
        if ( weapon.getCharacteristicValue( COMBAT.GROUP_FIELD ) === COMBAT.BOMB_GROUP ) {
            return COMBAT.BOMB_SLOT;
        }
        return COMBAT.WEAPON_CATEGORY_SLOTS[ weapon.getCharacteristicValue( COMBAT.CATEGORY_FIELD ) ] || null;
    },
    // The bombs and the ranged weapons roll on Dexterity, the finesse ones
    // read their trait, the melee defaults to Strength
    _getWeaponCharacteristic: function ( weapon ) {
        if ( weapon.getCharacteristicValue( COMBAT.GROUP_FIELD ) === COMBAT.BOMB_GROUP ) {
            return COMBAT.RANGED_CHARACTERISTIC;
        }
        if ( weapon.getCharacteristicValue( COMBAT.RANGE_FIELD ) !== null ) {
            return COMBAT.RANGED_CHARACTERISTIC;
        }
        if ( STUFFS.hasTrait( weapon.value, COMBAT.FINESSE_TRAIT ) ) {
            return COMBAT.RANGED_CHARACTERISTIC;
        }
        return COMBAT.MELEE_CHARACTERISTIC;
    },
    getAttackRoll: function ( character_object, attack_line ) {
        return character_object.getMasteries().getRollModifier( character_object, {
            "slot"         : attack_line.slot,
            "characteristic": attack_line.characteristic
        } );
    },
    //********************************************  SPELLCASTING  **************************************************//
    // The spellcasting lines ride ONLY when the character owns the ranks (a
    // fighter never sees them) ; the key characteristic is the one of the
    // highest class — the class carries its key as its bonus choice
    getSpellcastingLines: function ( character_object ) {
        let masteries  = character_object.getMasteries();
        let attack_rank = masteries.getFinalRank( character_object, "spell_attack" );
        let dc_rank     = masteries.getFinalRank( character_object, "spell_dc" );
        if ( !attack_rank && !dc_rank) {
            return [];
        }
        let key_characteristic = this._getSpellcastingCharacteristic( character_object );
        let to_return          = [];
        if ( attack_rank ) {
            to_return.push( {
                "label"        : "Attaque de sort",
                "slot"         : "spell_attack",
                "characteristic": key_characteristic,
                "rank"         : attack_rank,
                "value"        : character_object.getMasteries().getRollModifier( character_object, { "slot": "spell_attack", "characteristic": key_characteristic } )
            } );
        }
        if ( dc_rank ) {
            let dc_value = COMBAT.BASE_ARMOR_CLASS + character_object.getLevel();
            let dc_characteristic = character_object.getCharacteristics().getContentByUUID( key_characteristic );
            dc_value += dc_characteristic ? dc_characteristic.getModifierValue() : 0;
            dc_value += MASTERY.getByShort( dc_rank ).bonus;
            to_return.push( {
                "label"        : "DD des sorts",
                "slot"         : "spell_dc",
                "characteristic": key_characteristic,
                "rank"         : dc_rank,
                "value"        : dc_value
            } );
        }
        return to_return;
    },
    _getSpellcastingCharacteristic: function ( character_object ) {
        let class_name  = character_object.getClasses().getHighestClassName();
        let class_data  = class_name ? CLASSES.getDataByName( class_name ) : null;
        let choices      = class_data && class_data.characteristics_bonus ? class_data.characteristics_bonus.choice : [];
        for ( let i = 0, _size_i = choices.length; i < _size_i; i++ ) {
            if ( choices[ i ] !== "FREE" ) {
                return choices[ i ];
            }
        }
        return CHARACTERISTICS.INT.key;
    },
    //********************************************  ACTIONS  **************************************************//
    // The lines of the Actions zone : the basic combat actions plus the
    // character's own "action" adjustments the compendium identifies as
    // combat actions, deduplicated by name, grouped by section. An
    // adjustment the compendium does not know is not identifiable as a
    // combat action : it stays on the General tab only
    getActionLines: function ( character_object ) {
        let sections_by_key = {};
        let seen_names      = {};
        for ( let i = 0, _size_i = COMBAT.ACTION_SECTIONS.length; i < _size_i; i++ ) {
            let section_data = COMBAT.ACTION_SECTIONS[ i ];
            sections_by_key[ section_data.key ] = { "key": section_data.key, "label": section_data.label, "lines": [] };
        }
        for ( let i = 0, _size_i = COMBAT.BASIC_ACTIONS.length; i < _size_i; i++ ) {
            this._pushActionLine( sections_by_key, seen_names, COMBAT.BASIC_ACTIONS[ i ] );
        }
        let action_values = character_object.getAdjustments().getValuesByKind( "action" );
        for ( let i = 0, _size_i = action_values.length; i < _size_i; i++ ) {
            let action_data = OBJECT.getActionInformation( action_values[ i ] );
            if ( !action_data || !OBJECT.isCombatAction( action_data ) ) {
                continue;
            }
            this._pushActionLine( sections_by_key, seen_names, action_values[ i ] );
        }
        let to_return = [];
        for ( let i = 0, _size_i = COMBAT.ACTION_SECTIONS.length; i < _size_i; i++ ) {
            let section = sections_by_key[ COMBAT.ACTION_SECTIONS[ i ].key ];
            if ( !section.lines.length ) {
                continue;
            }
            section.lines.sort( function ( line_a, line_b ) {
                return line_a.name.localeCompare( line_b.name, "fr" );
            } );
            to_return.push( section );
        }
        return to_return;
    },
    _pushActionLine: function ( sections_by_key, seen_names, action_name ) {
        let seen_key = action_name.toLowerCase();
        if ( seen_names[ seen_key ] ) {
            return;
        }
        seen_names[ seen_key ] = true;
        let action_data  = OBJECT.getActionInformation( action_name );
        let cost_label   = action_data && OBJECT.ACTION_COST_LABELS[ action_data.action_cost ] !== undefined ? OBJECT.ACTION_COST_LABELS[ action_data.action_cost ] : "—";
        let section_key = COMBAT.getActionSectionKey( action_data );
        sections_by_key[ section_key ].lines.push( {
            "name"       : action_name,
            "section_key": section_key,
            "cost_label" : cost_label,
            "traits"     : action_data && action_data.traits ? action_data.traits : [],
            "known"      : !!action_data
        } );
    }
};
