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
        this.current_hp             = 0;
        this.max_hp                 = 0;
        this.dom_element_current_hp = SERVICE.DOM.createElement( "span", { class: "hp-current" } );
        this.dom_element_temp_hp    = SERVICE.DOM.createElement( "span", { class: "hp-temp" }, "temp : " );
        SERVICE.DOM.addElementTo( this.dom_element_temp_hp, this.dom_element_current_hp );
        this.temp_hp_total   = 0;
        this.history_entries = new CHARACTER.HealthHistoryEntries();
    },
    
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__compute_html__done":
                params[ "param__character_health__object" ] = this;
                this.history_entries.doActionAfter( event_name, params );
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
                params[ "param__modal__type" ]              = "heal";
                params[ "param__character_health__object" ] = this;
                this.history_entries.doActionAfter( event_name, params );
                break;
            case "event__temp_hp_modal__confirm":
                params[ "param__modal__type" ]              = "temp_hp";
                params[ "param__character_health__object" ] = this;
                this.history_entries.doActionAfter( event_name, params );
                break;
            case "event__damage_modal__confirm":
                params[ "param__modal__type" ]              = "damage";
                params[ "param__character_health__object" ] = this;
                this.history_entries.doActionAfter( event_name, params );
                break;
        }
    },
    
    //********************************************  GETTER / SETTER  **************************************************//
    getCurrentHP       : function () {
        return this.current_hp;
    },
    setCurrentHP       : function ( to_set ) {
        this.current_hp                       = to_set;
        this.dom_element_current_hp.innerText = this.getCurrentHP();
        SERVICE.DOM.addElementTo( this.dom_element_temp_hp, this.dom_element_current_hp );
    },
    setTempHP          : function ( to_set ) {
        this.temp_hp_total                 = to_set;
        this.dom_element_temp_hp.innerText = "temp : " + this.temp_hp_total;
    },
    getDomCurrentHP    : function () {
        return this.dom_element_current_hp;
    },
    getDomTempHP       : function () {
        return this.dom_element_temp_hp;
    },
    getMaxHP           : function () {
        return this.max_hp;
    },
    setMaxHP           : function ( value ) {
        this.max_hp = value;
        this.setCurrentHP( value );
    },
    getEffectiveHP     : function () {
        return this.current_hp + this.temp_hp_total;
    },
    getHealthPercentage: function () {
        return parseInt( (this.getEffectiveHP() / this.max_hp) * 100 );
    },
    //********************************************  SAVE / LOADING  **************************************************//
    getDataToSave: function () {
        return {
            history: this.history_entries.getDataToSave()
        };
    },
    updateData   : function ( data ) {
        if ( !data ) {
            return;
        }
        for ( let i = 0, _size_i = data.history.length; i < _size_i; i++ ) {
            this.history_entries.add( new CHARACTER.HealthHistoryEntry( data.history[ i ] ) );
        }
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


/**
 * @class CHARACTER.HealthHistoryEntries
 * @extends OBJECT.InterfaceHtml
 * Représente une entrée dans l'historique de santé du personnage
 */
CHARACTER.HealthHistoryEntries = function () {
    this.init();
};

CHARACTER.HealthHistoryEntries.prototype = {
    init: function ( data ) {
        this.initContents();
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__heal_modal__confirm":
            case "event__temp_hp_modal__confirm":
            case "event__damage_modal__confirm":
                const entryData = {
                    value      : params.param__modal__data.value,
                    comment    : params.param__modal__data.comment || "",
                    damage_type: params.param__modal__data.damage_type || "",
                    source     : params.param__modal__data.source || "",
                    timestamp  : new Date().getTime(),
                    type       : params.param__modal__type
                };
                let added       = this.add( new CHARACTER.HealthHistoryEntry( entryData ) );
                this.computeHtml();
                added.doActionAfter( event_name, params );
                return;
            case "event__compute_html__done":
                this.computeHtml();
                this.doActionAfterContentChildren( event_name, params );
                return;
        }
    },
    //********************************************  HTML  **************************************************//
    computeHtml  : function () {
        const container = this.getDomElement();
        SERVICE.DOM.empty( container );
        for ( var i = this.getSize() - 1; i >= 0; i-- ) {
            this.getContent( i ).computeHtml();
            container.appendChild( this.getContent( i ).dom_element );
        }
    },
    getDomElement: function () {
        if ( !this.dom_element ) {
            this.dom_element = document.getElementById( "health-history-container" );
        }
        return this.dom_element;
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.HealthHistoryEntries, OBJECT.InterfaceContainerHtml );
/**
 * @class CHARACTER.HealthHistoryEntry
 * @extends OBJECT.InterfaceHtml
 * Représente une entrée dans l'historique de santé du personnage
 */
CHARACTER.HealthHistoryEntry = function ( data ) {
    this.init( data );
};

CHARACTER.HealthHistoryEntry.prototype = {
    init: function ( data ) {
        this.value       = data.value || 0;
        this.comment     = data.comment || "";
        this.damage_type = data.damage_type || "";
        this.source      = data.source || "";
        this.timestamp   = data.timestamp || new Date().getTime();
        this.type        = data.type || "damage";
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__heal_modal__confirm":
            case "event__temp_hp_modal__confirm":
            case "event__damage_modal__confirm":
            case "event__compute_html__done":
                this.computeHP( params[ "param__character_health__object" ] );
                return;
        }
    },
    computeHP    : function ( character_health__object ) {
        switch ( this.type ) {
            case "damage":
                if ( character_health__object.temp_hp_total ) {
                    const damage_overflow = Math.max( this.value - character_health__object.temp_hp_total, 0 );
                    character_health__object.setTempHP( Math.max( character_health__object.temp_hp_total - this.value, 0 ) );
                    character_health__object.setCurrentHP( character_health__object.getCurrentHP() - damage_overflow );
                }
                else {
                    character_health__object.setCurrentHP( character_health__object.getCurrentHP() - this.value );
                }
                break;
            case "heal":
                character_health__object.setCurrentHP( Math.min( character_health__object.current_hp + this.value, character_health__object.max_hp ) );
                break;
            case "temp_hp":
                character_health__object.setTempHP( this.value + character_health__object.temp_hp_total );
                break;
        }
    },
    //********************************************  HTML  **************************************************//
    computeHtml: function () {
        this.dom_element   = SERVICE.DOM.createElement( "div", { "class": "health-history-entry", "data-type": this.type } );
        const icon         = this.getTypeIcon();
        const color        = this.getTypeColor();
        const label        = this.getTypeLabel();
        const valueDisplay = this.getValueDisplay();
        
        let damage_type = "";
        
        if ( this.damage_type ) {
            damage_type = `<div class="health-history-entry__damage-type">${this.damage_type}</div>`;
        }
        
        this.dom_element.innerHTML = `
            <div class="health-history-entry__header">
                <div class="health-history-entry__icon" style="color: ${color}">
                    ${icon}
                </div>
                <div class="health-history-entry__info">
                    <div class="health-history-entry__title">
                        <span class="health-history-entry__label">${label}</span>
                        <span class="health-history-entry__value" style="color: ${color}">${valueDisplay}</span>
                        ${damage_type}
                    </div>
                </div>
            </div>
            ${this.getDetailsHtml()}
        `;
    },
    
    getDetailsHtml: function () {
        let details = [];
        
        if ( this.source ) {
            details.push( `<div class="health-history-entry__source"><strong>Source:</strong> ${this.source}</div>` );
        }
        
        if ( this.comment ) {
            details.push( `<div class="health-history-entry__comment">${this.comment}</div>` );
        }
        
        if ( details.length === 0 ) {
            return "";
        }
        
        return `<div class="health-history-entry__details">${details.join( "" )}</div>`;
    },
    
    //********************************************  HELPERS  **************************************************//
    
    getTypeIcon: function () {
        switch ( this.type ) {
            case "heal":
                return "❤️";
            case "temp_hp":
                return "🛡️";
            case "damage":
                return "⚔️";
            default:
                return "•";
        }
    },
    
    getTypeColor: function () {
        switch ( this.type ) {
            case "heal":
                return "#22C55E";
            case "temp_hp":
                return "#3B82F6";
            case "damage":
                return "#EF4444";
            default:
                return "#6B7280";
        }
    },
    
    getTypeLabel: function () {
        switch ( this.type ) {
            case "heal":
                return "Soins";
            case "temp_hp":
                return "PV Temporaires";
            case "damage":
                return "Dégâts";
            default:
                return "Événement";
        }
    },
    
    getValueDisplay: function () {
        const sign = this.type === "damage" ? "-" : "+";
        return `${sign}${Math.abs( this.value )} PV`;
    },
    //********************************************  GETTER / SETTER  **************************************************//
    getUUID : function () {
        return this.getTimestamp();
    },
    getValue: function () {
        return this.value;
    },
    
    getType: function () {
        return this.type;
    },
    
    getTimestamp: function () {
        return this.timestamp;
    },
    
    //********************************************  DATA  **************************************************//
    
    getDataToSave: function () {
        return {
            value      : this.value,
            comment    : this.comment,
            damage_type: this.damage_type,
            source     : this.source,
            timestamp  : this.timestamp,
            type       : this.type
        };
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.HealthHistoryEntry, OBJECT.InterfaceHtml );


