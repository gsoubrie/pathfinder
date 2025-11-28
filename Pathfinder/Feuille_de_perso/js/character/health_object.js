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
        this.history       = []; // Array de CHARACTER.HealthHistoryEntry
    },
    
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__data_loaded__done":
                this.renderHistory();
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
                this.addHistory(params.param__modal__data, "heal");
                this.current_hp = Math.min(this.current_hp + params.param__modal__data.value, this.max_hp);
                this.renderHistory();
                break;
            case "event__temp_hp_modal__confirm":
                this.addHistory(params.param__modal__data, "temp_hp");
                this.temp_hp_total += params.param__modal__data.value;
                this.renderHistory();
                break;
            case "event__damage_modal__confirm":
                this.addHistory(params.param__modal__data, "damage");
                
                const damage = params.param__modal__data.value;
                
                if (this.temp_hp_total) {
                    const damage_overflow = Math.max(damage - this.temp_hp_total, 0);
                    this.temp_hp_total    = Math.max(this.temp_hp_total - damage, 0);
                    this.current_hp -= damage_overflow;
                }
                else {
                    this.current_hp -= damage;
                }
                this.renderHistory();
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
        this.current_hp = value;
    },
    getEffectiveHP     : function () {
        return this.current_hp + this.temp_hp_total;
    },
    getHealthPercentage: function () {
        return parseInt((this.getEffectiveHP() / this.max_hp) * 100);
    },
    
    //********************************************  HISTORY MANAGEMENT  **************************************************//
    /**
     * @param {object} data
     * @param {string} type - "damage", "heal", or "temp_hp"
     */
    addHistory: function (data, type) {
        const entryData = {
            value      : data.value,
            comment    : data.comment || "",
            damage_type: data.damage_type || "",
            source     : data.source || "",
            timestamp  : new Date().getTime(),
            type       : type
        };
        
        const entry = new CHARACTER.HealthHistoryEntry(entryData);
        this.history.push(entry);
    },
    
    /**
     * Affiche l'historique dans le conteneur HTML
     */
    renderHistory: function () {
        console.log("dddd")
        const container = document.getElementById("health-history-container");
        if (!container) return;
        
        // Vider le conteneur
        container.innerHTML = "";
        
        // Si pas d'historique
        if (this.history.length === 0) {
            container.innerHTML = '<div class="health-history-empty">Aucun événement dans l\'historique</div>';
            return;
        }
        
        // Afficher les entrées (plus récentes en premier)
        const sortedHistory = [...this.history].reverse();
        sortedHistory.forEach(entry => {
            container.appendChild(entry.html);
        });
    },
    
    /**
     * Efface l'historique
     */
    clearHistory: function () {
        if (confirm("Êtes-vous sûr de vouloir effacer tout l'historique ?")) {
            this.history = [];
            this.renderHistory();
        }
    },
    
    //********************************************  SAUVEGARDE / CHARGEMENT  **************************************************//
    
    getDataToSave: function () {
        return {
            current_hp: this.current_hp,
            max_hp    : this.max_hp,
            history   : this.history.map(entry => entry.getDataToSave())
        };
    },
    
    updateData: function (data) {
        if (!data) {
            return;
        }
        
        this.current_hp = data.current_hp || 0;
        this.max_hp     = data.max_hp || 0;
        
        // Reconstruire les objets d'historique
        this.history = [];
        if (data.history && Array.isArray(data.history)) {
            data.history.forEach(entryData => {
                const entry = new CHARACTER.HealthHistoryEntry(entryData);
                this.history.push(entry);
            });
        }
        
        this.renderHistory();
    },
    
    //********************************************  MODAL  **************************************************//
    showHealModal: function () {
        var modal = SERVICE.MODAL.create("Soigner le personnage", "event__heal_modal__confirm", this, {});
        SERVICE.MODAL.addField(modal, "number", "Points de vie restaurés", "value", "10", { min: 1, placeholder: "Entrez le montant des soins" });
        SERVICE.MODAL.addField(modal, "text", "Source des soins (optionnel)", "source", "", { placeholder: "Potion, sort, repos..." });
        SERVICE.MODAL.addField(modal, "textarea", "Notes (optionnel)", "comment", "", { placeholder: "Détails supplémentaires..." });
        SERVICE.MODAL.show(modal);
    },
    
    showTempHPModal: function () {
        var modal = SERVICE.MODAL.create("Ajouter des PV temporaires", "event__temp_hp_modal__confirm", this, {});
        SERVICE.MODAL.addField(modal, "number", "Montant des PV temporaires", "value", "10", { min: 1, placeholder: "Nombre de PV temporaires" });
        SERVICE.MODAL.addField(modal, "text", "Source (optionnel)", "source", "", { placeholder: "Sort, capacité, objet..." });
        SERVICE.MODAL.addField(modal, "textarea", "Raison (optionnel)", "comment", "", { placeholder: "Pourquoi ces PV temporaires ?" });
        SERVICE.MODAL.show(modal);
    },
    
    showDamageModal: function () {
        var modal = SERVICE.MODAL.create("Appliquer des dégâts", "event__damage_modal__confirm", this, {});
        SERVICE.MODAL.addField(modal, "number", "Montant des dégâts", "value", "5", { min: 1, placeholder: "Nombre de points de dégâts" });
        SERVICE.MODAL.addSelectField(modal, "Type de dégâts", "damage_type", COMBAT.DAMAGE_TYPES, "Contondant");
        SERVICE.MODAL.addField(modal, "textarea", "Notes (optionnel)", "comment", "", { placeholder: "Source des dégâts, circonstances..." });
        SERVICE.MODAL.show(modal);
    }
};

SERVICE.CLASS.addPrototype(CHARACTER.Health, OBJECT.InterfaceHtml);

"use strict";

/**
 * @class CHARACTER.HealthHistoryEntry
 * @extends OBJECT.InterfaceHtml
 * Représente une entrée dans l'historique de santé du personnage
 */
CHARACTER.HealthHistoryEntry = function (data) {
    this.init(data);
};

CHARACTER.HealthHistoryEntry.prototype = {
    init: function (data) {
        this.value = data.value || 0;
        this.comment = data.comment || "";
        this.damage_type = data.damage_type || "";
        this.source = data.source || "";
        this.timestamp = data.timestamp || new Date().getTime();
        this.type = data.type || "damage"; // "damage", "heal", "temp_hp"
        
        this.createHtml();
    },

    //********************************************  HTML GENERATION  **************************************************//
    
    createHtml: function () {
        this.html = document.createElement("div");
        this.html.classList.add("health-history-entry");
        this.html.classList.add("health-history-entry--" + this.type);
        
        this.updateHtml();
    },
    
    updateHtml: function () {
        if (!this.html) return;
        
        const icon = this.getTypeIcon();
        const color = this.getTypeColor();
        const label = this.getTypeLabel();
        const formattedDate = this.formatDate();
        const valueDisplay = this.getValueDisplay();
        
        this.html.innerHTML = `
            <div class="health-history-entry__header">
                <div class="health-history-entry__icon" style="color: ${color}">
                    ${icon}
                </div>
                <div class="health-history-entry__info">
                    <div class="health-history-entry__title">
                        <span class="health-history-entry__label">${label}</span>
                        <span class="health-history-entry__value" style="color: ${color}">${valueDisplay}</span>
                    </div>
                    <div class="health-history-entry__date">${formattedDate}</div>
                </div>
            </div>
            ${this.getDetailsHtml()}
        `;
    },
    
    getDetailsHtml: function () {
        let details = [];
        
        if (this.source) {
            details.push(`<div class="health-history-entry__source"><strong>Source:</strong> ${this.source}</div>`);
        }
        
        if (this.damage_type && this.type === "damage") {
            details.push(`<div class="health-history-entry__damage-type"><strong>Type:</strong> ${this.damage_type}</div>`);
        }
        
        if (this.comment) {
            details.push(`<div class="health-history-entry__comment">${this.comment}</div>`);
        }
        
        if (details.length === 0) return "";
        
        return `<div class="health-history-entry__details">${details.join("")}</div>`;
    },
    
    //********************************************  HELPERS  **************************************************//
    
    getTypeIcon: function () {
        switch (this.type) {
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
        switch (this.type) {
            case "heal":
                return "#22c55e";
            case "temp_hp":
                return "#3b82f6";
            case "damage":
                return "#ef4444";
            default:
                return "#6b7280";
        }
    },
    
    getTypeLabel: function () {
        switch (this.type) {
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
        return `${sign}${Math.abs(this.value)} PV`;
    },
    
    formatDate: function () {
        const date = new Date(this.timestamp);
        const now = new Date();
        const diff = now - date;
        
        // Moins d'une minute
        if (diff < 60000) {
            return "À l'instant";
        }
        
        // Moins d'une heure
        if (diff < 3600000) {
            const minutes = Math.floor(diff / 60000);
            return `Il y a ${minutes} minute${minutes > 1 ? 's' : ''}`;
        }
        
        // Moins d'un jour
        if (diff < 86400000) {
            const hours = Math.floor(diff / 3600000);
            return `Il y a ${hours} heure${hours > 1 ? 's' : ''}`;
        }
        
        // Format complet
        const options = { 
            day: '2-digit', 
            month: '2-digit', 
            year: 'numeric',
            hour: '2-digit', 
            minute: '2-digit' 
        };
        return date.toLocaleDateString('fr-FR', options);
    },
    
    //********************************************  GETTER / SETTER  **************************************************//
    
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
            value: this.value,
            comment: this.comment,
            damage_type: this.damage_type,
            source: this.source,
            timestamp: this.timestamp,
            type: this.type
        };
    }
};

SERVICE.CLASS.addPrototype(CHARACTER.HealthHistoryEntry, OBJECT.InterfaceHtml);


