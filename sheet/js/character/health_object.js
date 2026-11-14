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
        this.current_hp          = 0;
        this.max_hp              = 0;
        this.temp_hp_total       = 0;
        this.pending_current_hp = null;
        this.pending_temp_hp    = null;
        this.history_entries     = new CHARACTER.HealthHistoryEntries();
    },

    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
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
        this.current_hp = to_set;
    },
    getTempHP          : function () {
        return this.temp_hp_total;
    },
    setTempHP          : function ( to_set ) {
        this.temp_hp_total = to_set;
    },
    getMaxHP           : function () {
        return this.max_hp;
    },
    // Un personnage au maximum suit son maximum (prise de niveau, bonus
    // CON) ; un personnage blesse garde ses pertes, borne au maximum
    setMaxHP           : function ( to_set ) {
        if ( this.current_hp === this.max_hp || this.current_hp > to_set ) {
            this.current_hp = to_set;
        }
        this.max_hp = to_set;
    },
    getEffectiveHP     : function () {
        return this.current_hp + this.temp_hp_total;
    },
    getHealthPercentage: function () {
        if ( !this.max_hp ) {
            return 100;
        }
        return parseInt( ( this.getEffectiveHP() / this.max_hp ) * 100 );
    },
    getHistoryEntries  : function () {
        return this.history_entries;
    },
    // PV courant et PV temp poses par le chargement du save : le maximum
    // se calcule APRES la lecture des cles (computeTotalLife au
    // data_loaded), l'etat pose s'applique une fois le maximum connu
    applyPendingState  : function () {
        if ( this.pending_current_hp !== null ) {
            this.setCurrentHP( Math.max( 0, Math.min( this.pending_current_hp, this.max_hp ) ) );
        }
        if ( this.pending_temp_hp !== null ) {
            this.setTempHP( this.pending_temp_hp );
        }
        this.pending_current_hp = null;
        this.pending_temp_hp    = null;
    },
    // Les sources du total : une ligne par niveau actif (PV de classe +
    // mod CON), les PV de depart de l'ascendance comptes UNE fois quand au
    // moins un niveau est actif (PF2 : niveau 1 = ascendance + classe +
    // CON, cf. computeTotalLife du personnage — la popup lit l'etat, elle
    // ne recalcule rien)
    getInformationData: function ( character_object ) {
        let sources       = [];
        let levels        = character_object.getLevelHistory();
        let con_modifier  = character_object.getCharacteristics().getContentByUUID( CHARACTERISTICS.CON.key ).getModifierValue();
        let has_active    = false;
        for ( let i = 0, _size_i = levels.getSize(); i < _size_i; i++ ) {
            let entry = levels.getContent( i );
            if ( !entry.isEnabled() ) {
                continue;
            }
            has_active = true;
            sources.push( {
                "value": entry.life_class + con_modifier,
                "text" : "Niveau " + entry.getUUID() + " — " + entry.getClassName()
            } );
        }
        if ( has_active && character_object.getRace().isSet() ) {
            sources.unshift( {
                "value": character_object.getRace().start_life || 0,
                "text" : character_object.getRace().getValue() + " (départ)"
            } );
        }
        if ( !sources.length ) {
            return null;
        }
        return {
            "id"            : "character__health",
            "category"      : "health",
            "title"         : "Points de vie",
            "health_total"  : this.getMaxHP(),
            "health_sources": sources
        };
    },
    //********************************************  SAVE / LOADING  **************************************************//
    getSpecificDataToSave: function () {
        return {
            current_hp: this.current_hp,
            temp_hp   : this.temp_hp_total,
            history   : this.history_entries.getDataToSave()
        };
    },
    getDataToSave: function () {
        return { "health": this.getSpecificDataToSave() };
    },
    updateData   : function ( data ) {
        this.pending_current_hp = data.current_hp;
        this.pending_temp_hp    = data.temp_hp;
        let _max_timestamp       = 0;
        for ( let i = 0, _size_i = data.history.length; i < _size_i; i++ ) {
            let entry = new CHARACTER.HealthHistoryEntry( data.history[ i ] );
            this.history_entries.add( entry );
            if ( entry.getTimestamp() > _max_timestamp ) {
                _max_timestamp = entry.getTimestamp();
            }
        }
        this.history_entries.setLastEntryTimestamp( _max_timestamp );
    },
    //********************************************  MODAL  **************************************************//
    showHealModal: function () {
        let modal = SERVICE.MODAL.create( "Soigner le personnage", "event__heal_modal__confirm", this, {} );
        SERVICE.MODAL.addField( modal, "number", "Points de vie restaurés", "value", "10", { min: 1, placeholder: "Entrez le montant des soins" } );
        SERVICE.MODAL.addField( modal, "text", "Source des soins (optionnel)", "source", "", { placeholder: "Potion, sort, repos..." } );
        SERVICE.MODAL.addField( modal, "textarea", "Notes (optionnel)", "comment", "", { placeholder: "Détails supplémentaires..." } );
        SERVICE.MODAL.show( modal );
    },

    showTempHPModal: function () {
        let modal = SERVICE.MODAL.create( "Ajouter des PV temporaires", "event__temp_hp_modal__confirm", this, {} );
        SERVICE.MODAL.addField( modal, "number", "Montant des PV temporaires", "value", "10", { min: 1, placeholder: "Nombre de PV temporaires" } );
        SERVICE.MODAL.addField( modal, "text", "Source (optionnel)", "source", "", { placeholder: "Sort, capacité, objet..." } );
        SERVICE.MODAL.addField( modal, "textarea", "Raison (optionnel)", "comment", "", { placeholder: "Pourquoi ces PV temporaires ?" } );
        SERVICE.MODAL.show( modal );
    },

    showDamageModal: function () {
        let modal = SERVICE.MODAL.create( "Appliquer des dégâts", "event__damage_modal__confirm", this, {} );
        SERVICE.MODAL.addField( modal, "number", "Montant des dégâts", "value", "5", { min: 1, placeholder: "Nombre de points de dégâts" } );
        SERVICE.MODAL.addSelectField( modal, "Type de dégâts", "damage_type", COMBAT.DAMAGE_TYPES, "Contondant" );
        SERVICE.MODAL.addField( modal, "textarea", "Notes (optionnel)", "comment", "", { placeholder: "Source des dégâts, circonstances..." } );
        SERVICE.MODAL.show( modal );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.Health, OBJECT.InterfaceHtml );

/**
 * @class CHARACTER.HealthHistoryEntries
 * @extends OBJECT.InterfaceContainerHtml
 */
CHARACTER.HealthHistoryEntries = function () {
    this.init();
};

CHARACTER.HealthHistoryEntries.prototype = {
    init: function () {
        this.initContents();
        this.last_entry_timestamp = 0;
    },

    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__heal_modal__confirm":
            case "event__temp_hp_modal__confirm":
            case "event__damage_modal__confirm":
                // Deux événements peuvent tomber dans la même milliseconde
                // : l'uuid d'une entrée est son timestamp et le conteneur
                // déduplique par uuid — le compteur du journal reste strictement croissant
                let entry_data = {
                    value      : parseInt( params[ "param__modal__data" ].value ) || 0,
                    comment    : params[ "param__modal__data" ].comment || "",
                    damage_type: params[ "param__modal__data" ].damage_type || "",
                    source     : params[ "param__modal__data" ].source || "",
                    timestamp  : this._getEntryTimestamp(),
                    type       : params[ "param__modal__type" ]
                };
                let added     = this.add( new CHARACTER.HealthHistoryEntry( entry_data ) );
                added.doActionAfter( event_name, params );
                this.refresh();
                return;
        }
    },
    _getEntryTimestamp: function () {
        let now                     = new Date().getTime();
        this.last_entry_timestamp   = Math.max( now, this.last_entry_timestamp + 1 );
        return this.last_entry_timestamp;
    },
    setLastEntryTimestamp: function ( to_set ) {
        this.last_entry_timestamp = to_set;
    },
    //********************************************  HTML  **************************************************//
    renderInto: function ( dom_element ) {
        this.dom_element = dom_element;
        this.refresh();
    },
    refresh   : function () {
        if ( !this.dom_element ) {
            return;
        }
        SERVICE.DOM.empty( this.dom_element );
        // Le journal se lit du plus récent au plus ancien : la dernière
        // action de jeu apparaît en tête
        for ( let i = this.getSize() - 1; i >= 0; i-- ) {
            this.getContent( i ).computeHtml();
            SERVICE.DOM.addElementTo( this.getContent( i ).getDomElement(), this.dom_element );
        }
    },
    //********************************************  SAVE / LOADING  **************************************************//
    getDataToSave: function () {
        let to_return = [];
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            to_return.push( this.getContent( i ).getDataToSave() );
        }
        return to_return;
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.HealthHistoryEntries, OBJECT.InterfaceContainerHtml );

/**
 * @class CHARACTER.HealthHistoryEntry
 * @extends OBJECT.InterfaceHtml
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
                this.applyToHealth( params[ "param__character_health__object" ] );
                return;
        }
    },
    //********************************************  COMPUTE  **************************************************//
    // L'entree s'applique UNIQUEMENT au moment de sa creation : le PV
    // courant est une donnee sauvegardee, jamais rejouee depuis le journal
    applyToHealth: function ( character_health__object ) {
        switch ( this.type ) {
            case "damage":
                let damage_overflow = Math.max( this.value - character_health__object.getTempHP(), 0 );
                character_health__object.setTempHP( Math.max( character_health__object.getTempHP() - this.value, 0 ) );
                character_health__object.setCurrentHP( Math.max( character_health__object.getCurrentHP() - damage_overflow, 0 ) );
                break;
            case "heal":
                character_health__object.setCurrentHP( Math.min( character_health__object.getCurrentHP() + this.value, character_health__object.getMaxHP() ) );
                break;
            case "temp_hp":
                character_health__object.setTempHP( this.value + character_health__object.getTempHP() );
                break;
        }
    },
    //********************************************  HTML  **************************************************//
    computeHtml: function () {
        this.dom_element = SERVICE.DOM.createElement( "div", { class: "health-history-entry", "data-type": this.type } );
        let header       = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "health-history-entry__header" } ), this.dom_element );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "health-history-entry__icon" }, this.getTypeIcon() ), header );
        let info = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "health-history-entry__info" } ), header );
        let title = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "health-history-entry__title" } ), info );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "health-history-entry__label" }, this.getTypeLabel() ), title );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "health-history-entry__value" }, this.getValueDisplay() ), title );
        if ( this.damage_type ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "health-history-entry__damage-type" }, this.damage_type ), title );
        }
        if ( this.source || this.comment ) {
            let details = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "health-history-entry__details" } ), this.dom_element );
            if ( this.source ) {
                SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "health-history-entry__source" }, "Source : " + this.source ), details );
            }
            if ( this.comment ) {
                SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "health-history-entry__comment" }, this.comment ), details );
            }
        }
    },
    //********************************************  HELPERS  **************************************************//
    getTypeIcon: function () {
        switch ( this.type ) {
            case "heal":
                return "❤️";
            case "temp_hp":
                return "🛡️";
            default:
                return "⚔️";
        }
    },
    getTypeLabel: function () {
        switch ( this.type ) {
            case "heal":
                return "Soins";
            case "temp_hp":
                return "PV temporaires";
            default:
                return "Dégâts";
        }
    },
    getValueDisplay: function () {
        let sign = this.type === "damage" ? "-" : "+";
        return sign + Math.abs( this.value ) + " PV";
    },
    //********************************************  GETTER / SETTER  **************************************************//
    getUUID  : function () {
        return this.getTimestamp();
    },
    getValue: function () {
        return this.value;
    },
    getType  : function () {
        return this.type;
    },
    getTimestamp: function () {
        return this.timestamp;
    },
    //********************************************  SAVE  **************************************************//
    getSpecificDataToSave: function () {
        return {
            value      : this.value,
            comment    : this.comment,
            damage_type: this.damage_type,
            source     : this.source,
            timestamp  : this.timestamp,
            type       : this.type
        };
    },
    getDataToSave: function () {
        return this.getSpecificDataToSave();
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.HealthHistoryEntry, OBJECT.InterfaceHtml );
