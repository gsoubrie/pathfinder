"use strict";

/**
 * @class CHARACTER.Health
 * @extends OBJECT.InterfaceHtml
 */
CHARACTER.Health = function () {
    this.init();
};

CHARACTER.Health.prototype = {
    init: function () {
        this.current_hp    = 0;
        this.max_hp        = 0;
        this.temp_hp_total = 0;
        this.history       = [];
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__data_loaded__done":
                break;
            case "event__open_modal__hp_heal":
                this.showHealModal();
                break;
            case "event__open_modal__hp_temp":
                this.showTempHPModal();
                break;
            case "event__open_modal__hp_damage":
                this.showDamageModal();
                break;
            case "event__heal_modal__confirm":
                this.addHistory( params.param__modal__data );
                this.current_hp = Math.min( this.current_hp + params.param__modal__data.value, this.max_hp );
                break;
            case "event__temp_hp_modal__confirm":
                this.addHistory( params.param__modal__data );
                this.temp_hp_total += params.param__modal__data.value;
                break;
            case "event__damage_modal__confirm":
                this.addHistory( params.param__modal__data );
                
                const damage = params.param__modal__data.value;
                
                if ( this.temp_hp_total ) {
                    const damage_overflow = Math.max( damage - this.temp_hp_total, 0 );
                    this.temp_hp_total    = Math.max( this.temp_hp_total - damage, 0 );
                    this.current_hp -= damage_overflow;
                }
                else {
                    this.current_hp -= damage;
                }
                break;
        }
    },
    //********************************************  GETTER / SETTER  **************************************************//
    getCurrentHP       : function () {
        return this.current_hp;
    },
    getMaxHP           : function () {
        return this.max_hp;
    },
    getTempHP           : function () {
        return this.temp_hp_total;
    },
    setMaxHP           : function ( value ) {
        this.max_hp = value;
    },
    getEffectiveHP     : function () {
        return this.current_hp + this.temp_hp_total;
    },
    getHealthPercentage: function () {
        return (this.getEffectiveHP() / this.max_hp) * 100;
    },
    
    //********************************************  TEMP HP MANAGEMENT  **************************************************//
    /**
     * @param {object} data
     */
    addHistory: function ( data ) {
        this.history.push( {
            value      : data.value,
            comment    : data.comment || "",
            damage_type: data.damage_type || "",
            source     : data.source || "",
            timestamp  : new Date().getTime()
        } );
    },
    //********************************************  SAUVEGARDE / CHARGEMENT  **************************************************//
    
    getDataToSave: function () {
        return {
            current_hp: this.current_hp,
            max_hp    : this.max_hp,
            history   : this.history
        };
    },
    
    updateData: function ( data ) {
        if ( !data ) {
            return;
        }
        
        this.current_hp    = data.current_hp || 0;
        this.max_hp        = data.max_hp || 0;
        this.history       = data.history || [];
        this.history       = data.history || [];
        this.wounds        = data.wounds || [];
        this.dying_level   = data.dying_level || 0;
        this.wounded_level = data.wounded_level || 0;
        this.doomed_level  = data.doomed_level || 0;
    },
    
    //********************************************  MODAL  **************************************************//
    showHealModal: function () {
        var modal = SERVICE.MODAL.create( "Soigner le personnage", "event__heal_modal__confirm", this, {} );
        SERVICE.MODAL.addField( modal, "number", "Points de vie restaurés", "value", "10", { min: 1, placeholder: "Entrez le montant des soins" } );
        SERVICE.MODAL.addField( modal, "text", "Source des soins (optionnel)", "source", "", { placeholder: "Potion, sort, repos..." } );
        SERVICE.MODAL.addField( modal, "textarea", "Notes (optionnel)", "comment", "", { placeholder: "Détails supplémentaires..." } );
        SERVICE.MODAL.show( modal );
    },
    
    showTempHPModal: function () {
        var modal = SERVICE.MODAL.create( "Ajouter des PV temporaires", "event__temp_hp_modal__confirm", this, {} );
        SERVICE.MODAL.addField( modal, "number", "Montant des PV temporaires", "value", "10", { min: 1, placeholder: "Nombre de PV temporaires" } );
        SERVICE.MODAL.addField( modal, "text", "Source (optionnel)", "source", "", { placeholder: "Sort, capacité, objet..." } );
        SERVICE.MODAL.addField( modal, "textarea", "Raison (optionnel)", "comment", "", { placeholder: "Pourquoi ces PV temporaires ?" } );
        SERVICE.MODAL.show( modal );
    },
    
    showDamageModal: function () {
        var modal = SERVICE.MODAL.create( "Appliquer des dégâts", "event__damage_modal__confirm", this, {} );
        SERVICE.MODAL.addField( modal, "number", "Montant des dégâts", "value", "5", { min: 1, placeholder: "Nombre de points de dégâts" } );
        SERVICE.MODAL.addSelectField( modal, "Type de dégâts", "damage_type", COMBAT.DAMAGE_TYPES, "Contondant" );
        SERVICE.MODAL.addField( modal, "textarea", "Notes (optionnel)", "comment", "", { placeholder: "Source des dégâts, circonstances..." } );
        SERVICE.MODAL.show( modal );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Health, OBJECT.InterfaceHtml );