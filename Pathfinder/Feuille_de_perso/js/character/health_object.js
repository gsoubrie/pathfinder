"use strict";

/**
 * @class CHARACTER.Health
 * @extends OBJECT.InterfaceHtml
 */
CHARACTER.Health = function () {
    this.current_hp      = 0;
    this.max_hp          = 0;
    this.temp_hp_effects = [];
    this.damage_history  = [];
    this.healing_history = [];
    this.wounds          = [];
    this.dying_level     = 0;
    this.wounded_level   = 0;
    this.doomed_level    = 0;
};

CHARACTER.Health.prototype = {
    //********************************************  INITIALISATION  **************************************************//
    init: function ( max_hp ) {
        this.max_hp     = max_hp;
        this.current_hp = max_hp;
    },
    //********************************************  GETTER / SETTER  **************************************************//
    getCurrentHP: function () {
        return this.current_hp;
    },
    getMaxHP: function () {
        return this.max_hp;
    },
    setMaxHP: function ( value ) {
        this.max_hp = value;
        // Si les PV actuels dépassent le nouveau max, on ajuste
        if ( this.current_hp > this.max_hp ) {
            this.current_hp = this.max_hp;
        }
    },
    getTotalTempHP: function () {
        return this.temp_hp_effects.reduce( function ( sum, effect ) {
            return sum + effect.value;
        }, 0 );
    },
    
    getEffectiveHP: function () {
        return this.current_hp + this.getTotalTempHP();
    },
    
    getDyingLevel: function () {
        return this.dying_level;
    },
    
    getWoundedLevel: function () {
        return this.wounded_level;
    },
    
    getDoomedLevel: function () {
        return this.doomed_level;
    },
    
    isDying: function () {
        return this.dying_level > 0;
    },
    
    isDead: function () {
        return this.dying_level >= 4;
    },
    
    isUnconscious: function () {
        return this.current_hp <= 0;
    },
    
    getHealthPercentage: function () {
        return (this.current_hp / this.max_hp) * 100;
    },
    
    //********************************************  GESTION DES PV TEMPORAIRES  **************************************************//
    
    /**
     * Ajoute des PV temporaires
     * @param {number} value - Montant des PV temporaires
     * @param {string} comment - Raison/source des PV temporaires
     * @param {string} source - Source de l'effet (sort, capacité, etc.)
     * @returns {object} L'effet créé
     */
    addTempHP: function ( value, comment, source ) {
        if ( value <= 0 ) {
            return null;
        }
        
        var effect = {
            value    : value,
            comment  : comment || "",
            source   : source || "",
            timestamp: new Date().getTime(),
            uuid     : this.generateUUID()
        };
        
        this.temp_hp_effects.push( effect );
        return effect;
    },
    
    /**
     * Retire un effet de PV temporaires
     * @param {string} uuid - UUID de l'effet à retirer
     */
    removeTempHP: function ( uuid ) {
        for ( var i = 0; i < this.temp_hp_effects.length; i++ ) {
            if ( this.temp_hp_effects[ i ].uuid === uuid ) {
                this.temp_hp_effects.splice( i, 1 );
                return true;
            }
        }
        return false;
    },
    
    /**
     * Retire tous les PV temporaires
     */
    clearAllTempHP: function () {
        this.temp_hp_effects = [];
    },
    
    //********************************************  GESTION DES DÉGÂTS  **************************************************//
    
    /**
     * Applique des dégâts au personnage
     * @param {number} value - Montant des dégâts
     * @param {string} damage_type - Type de dégâts
     * @param {string} comment - Notes sur la source des dégâts
     * @returns {object} Résumé des dégâts appliqués
     */
    applyDamage: function ( value, damage_type, comment ) {
        if ( value <= 0 ) {
            return null;
        }
        
        var remaining_damage = value;
        var temp_hp_lost     = 0;
        var real_hp_lost     = 0;
        
        // D'abord, consommer les PV temporaires (du plus ancien au plus récent)
        while ( remaining_damage > 0 && this.temp_hp_effects.length > 0 ) {
            var temp_effect = this.temp_hp_effects[ 0 ];
            
            if ( temp_effect.value <= remaining_damage ) {
                // Cet effet est complètement consommé
                remaining_damage -= temp_effect.value;
                temp_hp_lost += temp_effect.value;
                this.temp_hp_effects.shift();
            }
            else {
                // Cet effet est partiellement consommé
                temp_effect.value -= remaining_damage;
                temp_hp_lost += remaining_damage;
                remaining_damage = 0;
            }
        }
        
        // Ensuite, retirer des PV réels
        if ( remaining_damage > 0 ) {
            this.current_hp -= remaining_damage;
            real_hp_lost = remaining_damage;
            
            // Gérer l'état "Mourant" si les PV tombent à 0 ou moins
            if ( this.current_hp <= 0 ) {
                this.handleFallingUnconscious();
            }
        }
        
        // Enregistrer dans l'historique
        var damage_record = {
            value       : value,
            damage_type : damage_type || "",
            comment     : comment || "",
            temp_hp_lost: temp_hp_lost,
            real_hp_lost: real_hp_lost,
            timestamp   : new Date().getTime(),
            uuid        : this.generateUUID()
        };
        
        this.damage_history.push( damage_record );
        
        // Limiter l'historique à 20 entrées
        if ( this.damage_history.length > 20 ) {
            this.damage_history.shift();
        }
        
        return damage_record;
    },
    
    /**
     * Gère le passage à l'état inconscient
     */
    handleFallingUnconscious: function () {
        // Augmenter le niveau "Blessé" si applicable
        if ( this.wounded_level < 3 ) {
            this.wounded_level++;
        }
        
        // Commencer à mourir
        this.dying_level = Math.max( 1, this.wounded_level + this.doomed_level );
        
        // Vérifier la mort immédiate
        if ( this.dying_level >= 4 ) {
            this.handleDeath();
        }
    },
    
    /**
     * Gère la mort du personnage
     */
    handleDeath: function () {
        this.dying_level = 4;
        // Ici, vous pouvez ajouter des événements ou notifications
        console.log( "[CHARACTER.Health] Le personnage est mort!" );
    },
    
    /**
     * Retire une entrée de l'historique des dégâts
     */
    removeDamageRecord: function ( uuid ) {
        for ( var i = 0; i < this.damage_history.length; i++ ) {
            if ( this.damage_history[ i ].uuid === uuid ) {
                this.damage_history.splice( i, 1 );
                return true;
            }
        }
        return false;
    },
    
    //********************************************  GESTION DES SOINS  **************************************************//
    
    /**
     * Applique des soins au personnage
     * @param {number} value - Montant des soins
     * @param {string} comment - Notes sur la source des soins
     * @param {string} source - Source des soins (sort, potion, etc.)
     * @returns {object} Résumé des soins appliqués
     */
    applyHealing: function ( value, comment, source ) {
        if ( value <= 0 ) {
            return null;
        }
        
        var old_hp = this.current_hp;
        
        // Si le personnage est mourant, les soins le stabilisent
        if ( this.dying_level > 0 ) {
            this.dying_level = 0;
            this.current_hp  = Math.min( value, this.max_hp );
        }
        else {
            // Soigner normalement (ne peut pas dépasser le max)
            this.current_hp = Math.min( this.current_hp + value, this.max_hp );
        }
        
        var actual_healing = this.current_hp - old_hp;
        
        // Enregistrer dans l'historique
        var healing_record = {
            value         : value,
            actual_healing: actual_healing,
            comment       : comment || "",
            source        : source || "",
            timestamp     : new Date().getTime(),
            uuid          : this.generateUUID()
        };
        
        this.healing_history.push( healing_record );
        
        // Limiter l'historique à 20 entrées
        if ( this.healing_history.length > 20 ) {
            this.healing_history.shift();
        }
        
        return healing_record;
    },
    
    /**
     * Retire une entrée de l'historique des soins
     */
    removeHealingRecord: function ( uuid ) {
        for ( var i = 0; i < this.healing_history.length; i++ ) {
            if ( this.healing_history[ i ].uuid === uuid ) {
                this.healing_history.splice( i, 1 );
                return true;
            }
        }
        return false;
    },
    
    /**
     * Repos complet - restaure tous les PV
     */
    fullRest: function () {
        this.current_hp = this.max_hp;
        this.clearAllTempHP();
        // Réduire le niveau "Blessé" d'un cran après un repos
        if ( this.wounded_level > 0 ) {
            this.wounded_level--;
        }
    },
    
    //********************************************  GESTION DES BLESSURES  **************************************************//
    
    /**
     * Ajoute une blessure
     * @param {string} name - Nom de la blessure
     * @param {string} description - Description des effets
     * @param {string} severity - Gravité (légère, modérée, grave, critique)
     * @returns {object} La blessure créée
     */
    addWound: function ( name, description, severity ) {
        var wound = {
            name       : name || "Blessure",
            description: description || "",
            severity   : severity || "modérée",
            timestamp  : new Date().getTime(),
            uuid       : this.generateUUID()
        };
        
        this.wounds.push( wound );
        return wound;
    },
    
    /**
     * Retire une blessure
     */
    removeWound: function ( uuid ) {
        for ( var i = 0; i < this.wounds.length; i++ ) {
            if ( this.wounds[ i ].uuid === uuid ) {
                this.wounds.splice( i, 1 );
                return true;
            }
        }
        return false;
    },
    
    /**
     * Nettoie toutes les blessures
     */
    clearAllWounds: function () {
        this.wounds = [];
    },
    
    //********************************************  GESTION DES ÉTATS MOURANT/BLESSÉ  **************************************************//
    
    /**
     * Modifie le niveau "Mourant"
     */
    setDyingLevel: function ( value ) {
        this.dying_level = Math.max( 0, Math.min( 4, value ) );
        
        if ( this.dying_level >= 4 ) {
            this.handleDeath();
        }
        else if ( this.dying_level === 0 && this.current_hp <= 0 ) {
            // Stabilisé mais toujours à 0 PV
            this.current_hp = 0;
        }
    },
    
    /**
     * Augmente le niveau "Mourant"
     */
    increaseDyingLevel: function ( amount ) {
        amount = amount || 1;
        this.setDyingLevel( this.dying_level + amount );
    },
    
    /**
     * Diminue le niveau "Mourant"
     */
    decreaseDyingLevel: function ( amount ) {
        amount = amount || 1;
        this.setDyingLevel( this.dying_level - amount );
    },
    
    /**
     * Modifie le niveau "Blessé"
     */
    setWoundedLevel: function ( value ) {
        this.wounded_level = Math.max( 0, Math.min( 3, value ) );
    },
    
    /**
     * Modifie le niveau "Condamné"
     */
    setDoomedLevel: function ( value ) {
        this.doomed_level = Math.max( 0, Math.min( 3, value ) );
    },
    
    //********************************************  SAUVEGARDE / CHARGEMENT  **************************************************//
    
    getDataToSave: function () {
        return {
            current_hp     : this.current_hp,
            max_hp         : this.max_hp,
            temp_hp_effects: this.temp_hp_effects,
            damage_history : this.damage_history,
            healing_history: this.healing_history,
            wounds         : this.wounds,
            dying_level    : this.dying_level,
            wounded_level  : this.wounded_level,
            doomed_level   : this.doomed_level
        };
    },
    
    updateData: function ( data ) {
        if ( !data ) {
            return;
        }
        
        this.current_hp      = data.current_hp || 0;
        this.max_hp          = data.max_hp || 0;
        this.temp_hp_effects = data.temp_hp_effects || [];
        this.damage_history  = data.damage_history || [];
        this.healing_history = data.healing_history || [];
        this.wounds          = data.wounds || [];
        this.dying_level     = data.dying_level || 0;
        this.wounded_level   = data.wounded_level || 0;
        this.doomed_level    = data.doomed_level || 0;
    },
    
    //********************************************  UTILITAIRES  **************************************************//
    
    generateUUID: function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace( /[xy]/g, function ( c ) {
            var r = Math.random() * 16 | 0;
            var v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString( 16 );
        } );
    },
    
    /**
     * Obtient un résumé de l'état de santé
     */
    getHealthSummary: function () {
        return {
            current_hp    : this.current_hp,
            max_hp        : this.max_hp,
            temp_hp       : this.getTotalTempHP(),
            effective_hp  : this.getEffectiveHP(),
            percentage    : this.getHealthPercentage(),
            is_dying      : this.isDying(),
            is_dead       : this.isDead(),
            is_unconscious: this.isUnconscious(),
            dying_level   : this.dying_level,
            wounded_level : this.wounded_level,
            doomed_level  : this.doomed_level,
            wounds_count  : this.wounds.length
        };
    },
    
    /**
     * Nettoie l'historique ancien (plus de 24h)
     */
    cleanOldHistory: function () {
        var now       = new Date().getTime();
        var day_in_ms = 24 * 60 * 60 * 1000;
        
        this.damage_history = this.damage_history.filter( function ( record ) {
            return (now - record.timestamp) < day_in_ms;
        } );
        
        this.healing_history = this.healing_history.filter( function ( record ) {
            return (now - record.timestamp) < day_in_ms;
        } );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Health, OBJECT.InterfaceHtml );

CHARACTER.Health.DAMAGE_TYPES = [
    "Contondant",
    "Perforant",
    "Tranchant",
    "Acide",
    "Froid",
    "Feu",
    "Force",
    "Foudre",
    "Nécrotique",
    "Poison",
    "Psychique",
    "Radiant",
    "Sonore"
];

CHARACTER.Health.WOUND_SEVERITY = {
    LIGHT   : "légère",
    MODERATE: "modérée",
    SEVERE  : "grave",
    CRITICAL: "critique"
};