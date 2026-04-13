"use strict";

var LEVEL = {
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

/**
 * @class CHARACTER.Level
 * @extends OBJECT.InterfaceHtml
 */
CHARACTER.Level = function ( level_number ) {
    this.init( level_number );
};
CHARACTER.Level.prototype = {
    init: function ( level_number ) {
        this.level_number = level_number;
        this.unlocks      = [];
        this.life_class   = null;
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID       : function () {
        return this.level_number;
    },
    getLevelNumber: function () {
        return this.level_number;
    },
    getUnlocks    : function () {
        return this.unlocks;
    },
    getLifeClass  : function () {
        return this.life_class;
    },
    //********************************************  UPDATE DATA   **************************************************//
    /**
     * @param {string} capacity_string  ex: "Amélioration de compétence, don général, sorts de rang 2"
     * @param {number} life_point       PV de classe
     */
    buildFromCapacity: function ( capacity_string, life_point ) {
        this.life_class = life_point;
        this.unlocks    = [];
        
        if ( !capacity_string ) {
            return;
        }
        
        // Découper par virgule
        var parts = capacity_string.split( "," );
        for ( var i = 0; i < parts.length; i++ ) {
            var label = parts[ i ].trim();
            if ( !label ) {
                continue;
            }
            this.unlocks.push( {
                label: label,
                type : CHARACTER.Level.detectType( label )
            } );
        }
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        return {
            level_number: this.level_number,
            life_class  : this.life_class,
            unlocks     : this.unlocks.map( function ( u ) {
                return u.label;
            } )
        };
    }
};

/**
 * @param {string} label
 * @returns {string}  "skill_feat" | "skill_increase" | "general_feat" | "ancestry_feat" |
 *                    "attribute_boost" | "spell" | "class_feat" | "class_feature"
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
        return "general_feat";
    }
    if ( LEVEL.KEYWORDS.SKILL_SKILL.some( function ( k ) {
        return low.indexOf( k ) !== -1;
    } ) ) {
        return "skill_feat";
    }
    if ( LEVEL.KEYWORDS.ANCESTRY_SKILL.some( function ( k ) {
        return low.indexOf( k ) !== -1;
    } ) ) {
        return "ancestry_feat";
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
    },
    //********************************************  GETTER SETTER  **************************************************//
    getUUID         : function () {
        return "levels";
    },
    getLevelByNumber: function ( n ) {
        return this.getContentByUUID( n );
    },
    //********************************************  UPDATE DATA   **************************************************//
    /**
     * @param {object} class_data   Objet CLASSES.ClassPopup (a capacity_by_level et life_point_by_level)
     * @param {number} char_level   Niveau actuel du personnage (1-20)
     */
    buildFromClass: function ( class_data, char_level ) {
        this.initContents();
        
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