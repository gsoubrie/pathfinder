"use strict";
/**
 * @param {string} label
 * @returns {string}  "skill_feat" | "skill_increase" | "general_feat" | "ancestry_feat" |
 *                    "attribute_boost" | "spell" | "class_feat" | "class_feature"
 */
CHARACTER.Level.detectType = function ( label ) {
    var low = label.toLowerCase();

    if ( LEVELS.KEYWORDS.SKILL_INCREASE.some( function ( k ) {
        return low.indexOf( k ) !== -1;
    } ) ) {
        return "skill_increase";
    }
    if ( LEVELS.KEYWORDS.GENERAL_FEAT.some( function ( k ) {
        return low.indexOf( k ) !== -1;
    } ) ) {
        return "general_feat";
    }
    if ( LEVELS.KEYWORDS.SKILL_FEAT.some( function ( k ) {
        return low.indexOf( k ) !== -1;
    } ) ) {
        return "skill_feat";
    }
    if ( LEVELS.KEYWORDS.ANCESTRY_FEAT.some( function ( k ) {
        return low.indexOf( k ) !== -1;
    } ) ) {
        return "ancestry_feat";
    }
    if ( LEVELS.KEYWORDS.ATTRIBUTE_BOOST.some( function ( k ) {
        return low.indexOf( k ) !== -1;
    } ) ) {
        return "attribute_boost";
    }
    if ( LEVELS.KEYWORDS.SPELL.some( function ( k ) {
        return low.indexOf( k ) !== -1;
    } ) ) {
        return "spell";
    }
    if ( low.indexOf( "don de " ) !== -1 || low.indexOf( "don d'" ) !== -1 ) {
        return "class_feat";
    }
    return "class_feature";
};

/**
 * @class CHARACTER.Levels
 * @extends OBJECT.InterfaceContainerHtml
 */
CHARACTER.Levels = function () {
    this.init();
};
CHARACTER.Levels.prototype = {
    init: function () {
        this.initContents();
        this.max_level = 20;
        this.current = 1;
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID         : function () {
        return LEVELS.KEY_NAME;
    },
    setCurrentLevel: function ( to_set ) {
        this.current = to_set;
    },
    //********************************************  UPDATE DATA   **************************************************//
    /**
     * @param {object} class_data   Objet CLASSES.ClassPopup (a capacity_by_level et life_point_by_level)
     * @param {number} char_level   Niveau actuel du personnage (1-20)
     */
    buildFromClass: function ( class_data, char_level ) {
        if ( !class_data ) {
            return;
        }
        
        var capacities   = class_data.capacity_by_level || [];
        var life_per_lvl = class_data.life_point_by_level || 0;
        var max          = Math.min( char_level || this.max_level, this.max_level );
        
        for ( var n = 1; n <= max; n++ ) {
            var lvl = new CHARACTER.Level( n );
            lvl.buildFromCapacity( capacities[ n - 1 ] || "", life_per_lvl );
            this.add( lvl );
        }
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        var to_return = [];
        for ( var i = 0, _size = this.getSize(); i < _size; i++ ) {
            to_return.push( this.getContent( i ).getDataToSave() );
        }
        return to_return;
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Levels, OBJECT.InterfaceContainerHtml );

var LEVELS = {
    KEY_NAME : "levels",
    KEYWORDS : {
        SKILL_FEAT     : ["don de compétence"],
        SKILL_INCREASE : ["amélioration de compétence"],
        GENERAL_FEAT   : ["don général"],
        ANCESTRY_FEAT  : ["don ancestral"],
        CLASS_FEAT     : ["don de ", "don d'"],
        ATTRIBUTE_BOOST: ["primes d'attribut", "prime d'attribut"],
        SPELL          : ["sorts de rang", "sort "],
        CLASS_FEATURE  : []
    }
};