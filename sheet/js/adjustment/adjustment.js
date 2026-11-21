"use strict";
/**
 * @class CHARACTER.Adjustment
 * @extends OBJECT.InterfaceHtml
 */
CHARACTER.Adjustment = function ( kind, value, explanation ) {
    this.init( kind, value, explanation );
};
CHARACTER.Adjustment.prototype = {
    init: function ( kind, value, explanation ) {
        this.kind        = kind;
        this.value      = value;
        this.explanation = explanation || "";
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID: function () {
        return this.kind + "__" + this.value;
    },
    getKind: function () {
        return this.kind;
    },
    //********************************************  DATA   **************************************************//
    // A mastery entry assembles "<compétence> — <Rang> (lettre)" ; without
    // its rank the entry stays a display note and contributes nothing
    getRankContribution: function () {
        if ( this.kind !== "mastery" || this.value.indexOf( " — " ) === -1 ) {
            return null;
        }
        let value_parts = this.value.split( " — " );
        let rank_match  = value_parts[ 1 ].match( /\(([QEML])\)/ );
        if ( !rank_match ) {
            return null;
        }
        let slot = MASTERY.getSkillSlot( value_parts[ 0 ] );
        return {
            slot  : slot,
            rank  : rank_match[ 1 ],
            label : MASTERY.getSlotLabel( slot ),
            source: this.explanation || "Ajustement"
        };
    },
    // A skill bonus entry assembles "<compétence> — <bonus>" (ex "Arcanes —
    // +2") : the bonus is display-only (the shown roll stays the brut roll,
    // the MJ applies it against specific attempts), the explanation cites
    // the source (objet, sort, autre)
    getBonusContribution: function () {
        if ( this.kind !== "skill_bonus" || this.value.indexOf( " — " ) === -1 ) {
            return null;
        }
        let value_parts = this.value.split( " — " );
        let bonus_match = value_parts[ 1 ].match( /^([+-]?\d+)$/ );
        if ( !bonus_match ) {
            return null;
        }
        let slot = MASTERY.getSkillSlot( value_parts[ 0 ] );
        return {
            slot  : slot,
            bonus : parseInt( bonus_match[ 1 ], 10 ),
            source: this.explanation || "Ajustement"
        };
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        return {
            "kind"       : this.kind,
            "value"      : this.value,
            "explanation": this.explanation
        };
    },
    //********************************************  UPDATE DATA   **************************************************//
    setData: function ( key, value ) {
        switch ( key ) {
            case "kind":
                this.kind = value;
                break;
            case "value":
                this.value = value;
                break;
            case "explanation":
                this.explanation = value;
                break;
            default:
                console.warn( "[IGNORED DATA]", key, value );
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Adjustment, OBJECT.InterfaceHtml );
