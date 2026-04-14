"use strict";

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