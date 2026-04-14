"use strict";
/**
 * @param {string} label
 * @returns {string}  "skill_skill" | "skill_increase" | "general_skill" | "ancestry_skill" |
 *                    "attribute_boost" | "spell" | "class_skill" | "class_feature"
 */
CHARACTER.Level.detectType = function ( label ) {
    var low = label.toLowerCase();
    
    if ( LEVEL.KEYWORDS.SKILL_INCREASE.some( function ( k ) {
        return low.indexOf( k ) !== -1;
    } ) ) {
        return "skill_increase";
    }
    if ( LEVEL.KEYWORDS.GENERAL_SKILL.some( function ( k ) {
        return low.indexOf( k ) !== -1;
    } ) ) {
        return "general_skill";
    }
    if ( LEVEL.KEYWORDS.SKILL_SKILL.some( function ( k ) {
        return low.indexOf( k ) !== -1;
    } ) ) {
        return "skill_skill";
    }
    if ( LEVEL.KEYWORDS.ANCESTRY_SKILL.some( function ( k ) {
        return low.indexOf( k ) !== -1;
    } ) ) {
        return "ancestry_skill";
    }
    if ( LEVEL.KEYWORDS.ATTRIBUTE_BOOST.some( function ( k ) {
        return low.indexOf( k ) !== -1;
    } ) ) {
        return "attribute_boost";
    }
    if ( LEVEL.KEYWORDS.SPELL.some( function ( k ) {
        return low.indexOf( k ) !== -1;
    } ) ) {
        return "spell";
    }
    // Don de classe = "don de X" ou "don d'X" (pas "don général", "don de compétence", "don ancestral")
    if ( low.indexOf( "don de " ) !== -1 || low.indexOf( "don d'" ) !== -1 ) {
        return "class_skill";
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
    GENERAL_SKILL_LEVELS  : [3, 7, 11, 15, 19],
    ATTRIBUTE_BOOST_LEVELS: [5, 10, 15, 20],
    KEYWORDS              : {
        SKILL_SKILL    : ["don de compétence"],
        SKILL_INCREASE : ["amélioration de compétence"],
        GENERAL_SKILL  : ["don général"],
        ANCESTRY_SKILL : ["don ancestral"],
        CLASS_SKILL    : ["don de ", "don d'"],  // suivi du nom de classe
        ATTRIBUTE_BOOST: ["primes d'attribut", "prime d'attribut"],
        SPELL          : ["sorts de rang", "sort "],
        CLASS_FEATURE  : []
    }
};