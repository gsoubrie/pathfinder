"use strict";
/**
 * @class CHARACTER.CombatWindow
 * @extends WINDOW_V2.ElementFromData
 */
CHARACTER.CombatWindow = function ( parent_name ) {
    this.initSpecific( CHARACTER.CombatWindow.NAME, parent_name, "Combat" );
};

CHARACTER.CombatWindow.prototype = {
    initSpecific: WINDOW_V2.ElementFromData.initSpecific,

    //********************************************  EVENT LISTENER  **************************************************//

    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            // Les trois modales ont confirme : le journal se rafraichit
            // lui-meme (le domaine possede son conteneur), la bande PV
            // relit l'etat frais du domaine
            case "event__heal_modal__confirm":
            case "event__temp_hp_modal__confirm":
            case "event__damage_modal__confirm":
                this._refreshHealthBand( CONTROLLER.Character.current_character );
                break;
            // L'inventaire bouge : la classe d'armure et les lignes
            // d'attaque suivent (les events du domaine emportent l'etat
            // frais — la fenetre lit, elle ne calcule pas)
            case "event__stuff__add":
            case "event__stuff__remove":
            case "event__stuff__set_location":
                this._refreshCombatZones( CONTROLLER.Character.current_character );
                break;
            case "click_on__window_navigation__done":
                if ( this.name === params[ "window_name" ] ) {
                    this._refreshHealthBand( CONTROLLER.Character.current_character );
                    this._refreshCombatZones( CONTROLLER.Character.current_character );
                }
                break;
        }
        WINDOW_V2.Element.prototype.doActionAfter.call( this, event_name, params );
    },

    //********************************************  HTML   **************************************************//

    computeHtmlWithData: function ( character_object ) {
        if ( !this.content_dom_element_target ) {
            this.content_dom_element_target = SERVICE.DOM.createElement( "div", { class: "combat-window" } );
            SERVICE.DOM.addElementToAfterEmpty( this.content_dom_element_target, this.dom_element_target );
            this._computeHealthBand( character_object );
            this._computeReferenceZone( character_object );
            this._computeEquipmentZone( character_object );
            this._computeSavesZone( character_object );
            this._computeAttacksZone( character_object );
            this._computeSpellcastingZone( character_object );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-health-history-title" }, "Journal" ), this.content_dom_element_target );
            let journal = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-health-history" } ), this.content_dom_element_target );
            character_object.getHealth().getHistoryEntries().renderInto( journal );
        }
        this._refreshHealthBand( character_object );
        this._refreshCombatZones( character_object );
    },

    _computeHealthBand: function ( character_object ) {
        this.band_element = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-health-band" } ), this.content_dom_element_target );
        let points        = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-health-points" } ), this.band_element );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-health-label" }, "Points de vie" ), points );
        this.dom_element_current_hp          = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "combat-health-points-value" } ), points );
        this.dom_element_health_percentage   = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "combat-health-percentage between-parentheses" } ), points );
        let temp = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-health-temp" } ), this.band_element );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-health-label" }, "PV temporaires" ), temp );
        this.dom_element_temp_hp = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "combat-health-temp-value" } ), temp );
        let actions = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-health-actions" } ), this.band_element );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "button", {
            class  : "combat-health-button combat-health-button--heal",
            onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__open_modal__hp_heal')"
        }, "Soigner" ), actions );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "button", {
            class  : "combat-health-button combat-health-button--temp",
            onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__open_modal__hp_temp')"
        }, "+ PV Temp" ), actions );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "button", {
            class  : "combat-health-button combat-health-button--damage",
            onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__open_modal__hp_damage')"
        }, "Dégâts" ), actions );
    },

    //********************************************  REFERENCE ZONE   **************************************************//

    // La ligne de reference de la fenetre : vitesse, initiative (elle roule
    // sur Perception) et classe d'armure — tout s'affiche des le debut, la
    // classe d'armure ouvre sa popup de sources
    _computeReferenceZone: function ( character_object ) {
        let zone     = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-reference-zone" } ), this.content_dom_element_target );
        let speed    = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-reference-cell", "data-name": "speed" } ), zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-reference-label" }, "Vitesse" ), speed );
        this.dom_element_speed = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-reference-value" } ), speed );
        let initiative = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
            class  : "combat-reference-cell combat-reference-clickable",
            "data-name": "initiative",
            onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__masteries',{})"
        } ), zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-reference-label" }, "Initiative" ), initiative );
        this.dom_element_initiative = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-reference-value" } ), initiative );
        let armor_class = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
            class  : "combat-reference-cell combat-reference-clickable",
            "data-name": "armor_class",
            onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__armor_class',{})"
        } ), zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-reference-label" }, "Classe d'armure" ), armor_class );
        this.dom_element_armor_class = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-reference-value" } ), armor_class );
    },

    //********************************************  EQUIPMENT ZONE  **************************************************//

    // The worn protection : ONE armor and ONE shield, one property line each
    // — the "?" opens the item popup of the piece (jamais inline, les
    // apostrophes des noms d'objets)
    _computeEquipmentZone: function ( character_object ) {
        this.equipment_zone = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-equipment-zone" } ), this.content_dom_element_target );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-attacks-title" }, "Équipement" ), this.equipment_zone );
        this.equipment_list = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-equipment-list" } ), this.equipment_zone );
    },

    _refreshEquipmentZone: function ( character_object ) {
        SERVICE.DOM.empty( this.equipment_list );
        let lines = character_object.getCombat().getEquipmentLines( character_object );
        for ( let i = 0, _size_i = lines.length; i < _size_i; i++ ) {
            this._buildEquipmentLine( this.equipment_list, lines[ i ] );
        }
    },

    _buildEquipmentLine: function ( parent, line ) {
        let row       = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-equipment-row" } ), parent );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-equipment-label" }, line.label ), row );
        let name_cell = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-equipment-name" } ), row );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "combat-equipment-value" }, line.entry ? line.entry.value : "—" ), name_cell );
        if ( line.entry ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
                class      : "combat-attack-info",
                "data-value": line.entry.value,
                title      : "Détails de l'équipement",
                onclick    : "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__item',{'param__stuff__value':this.getAttribute('data-value')})"
            }, "?" ), name_cell );
        }
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-equipment-stats" }, line.stats || "" ), row );
    },

    //********************************************  SAVES ZONE   **************************************************//

    _computeSavesZone: function ( character_object ) {
        let zone = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-saves-zone" } ), this.content_dom_element_target );
        for ( let i = 0, _size_i = COMBAT.SAVES.length; i < _size_i; i++ ) {
            let save = COMBAT.SAVES[ i ];
            let cell = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
                class  : "combat-save-cell combat-reference-clickable",
                "data-name": save.slot,
                onclick : "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__masteries',{})"
            } ), zone );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "combat-save-label" }, save.label ), cell );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "combat-save-value", "data-name": save.slot }, "" ), cell );
        }
    },

    //********************************************  ATTACKS ZONE   **************************************************//

    // Un en-tête et une ligne par attaque : les mains nues plus chaque arme
    // EQUIPÉE — les colonnes partagent la meme grille fractionnaire (regle
    // de la zone jets, jamais d'auto)
    _computeAttacksZone: function ( character_object ) {
        this.attacks_zone = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-attacks-zone" } ), this.content_dom_element_target );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-attacks-title" }, "Attaques" ), this.attacks_zone );
        this.attacks_header = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-attack-row combat-attack-row--header" } ), this.attacks_zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-attack-col combat-attack-col-name" }, "Arme" ), this.attacks_header );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-attack-col combat-attack-col-rank" }, "Rang" ), this.attacks_header );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-attack-col combat-attack-col-modifier" }, "Mod" ), this.attacks_header );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-attack-col combat-attack-col-roll" }, "Jet" ), this.attacks_header );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-attack-col combat-attack-col-damage" }, "Dégâts" ), this.attacks_header );
        this.attacks_list = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-attacks-list" } ), this.attacks_zone );
    },

    //********************************************  SPELLCASTING ZONE   **************************************************//

    _computeSpellcastingZone: function ( character_object ) {
        this.spellcasting_zone = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-spellcasting-zone" } ), this.content_dom_element_target );
    },

    //********************************************  REFRESH   **************************************************//

    // Les zones relisent l'etat frais du personnage a chaque activation et
    // a chaque mouvement d'inventaire : les valeurs suivent en place, la
    // liste des attaques se reconstruit (ses lignes bougent)
    _refreshCombatZones: function ( character_object ) {
        if ( !this.dom_element_armor_class || !character_object ) {
            return;
        }
        this._refreshReferenceZone( character_object );
        this._refreshEquipmentZone( character_object );
        this._refreshSavesZone( character_object );
        this._refreshAttacksZone( character_object );
        this._refreshSpellcastingZone( character_object );
    },

    _refreshReferenceZone: function ( character_object ) {
        let race = character_object.getRace();
        this.dom_element_speed.textContent = race.isSet() && race.speed !== undefined ? race.speed + " mètres" : "—";
        let masteries = character_object.getMasteries();
        this.dom_element_initiative.textContent = masteries.getRollModifier( character_object, COMBAT.INITIATIVE_ROLL );
        this.dom_element_armor_class.textContent = character_object.getCombat().getArmorClassData( character_object ).value;
    },

    _refreshSavesZone: function ( character_object ) {
        let masteries = character_object.getMasteries();
        for ( let i = 0, _size_i = COMBAT.SAVES.length; i < _size_i; i++ ) {
            let value_element = this.content_dom_element_target.querySelector( ".combat-save-value[data-name='" + COMBAT.SAVES[ i ].slot + "']" );
            if ( !value_element ) {
                continue;
            }
            value_element.textContent = masteries.getRollModifier( character_object, {
                "slot"         : COMBAT.SAVES[ i ].slot,
                "characteristic": COMBAT.SAVES[ i ].characteristic
            } );
        }
    },

    _refreshAttacksZone: function ( character_object ) {
        SERVICE.DOM.empty( this.attacks_list );
        let combat = character_object.getCombat();
        let lines  = combat.getAttackLines( character_object );
        for ( let i = 0, _size_i = lines.length; i < _size_i; i++ ) {
            this._buildAttackLine( this.attacks_list, character_object, lines[ i ] );
        }
    },

    _buildAttackLine: function ( parent, character_object, attack_line ) {
        let combat      = character_object.getCombat();
        let rank        = attack_line.slot ? character_object.getMasteries().getFinalRank( character_object, attack_line.slot ) : null;
        let rank_data   = rank ? MASTERY.getByShort( rank ) : MASTERY.LIST.UNTRAINED;
        let row         = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-attack-row" } ), parent );
        let name_cell   = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-attack-col combat-attack-col-name" } ), row );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "combat-attack-name" }, attack_line.name ), name_cell );
        if ( attack_line.is_stuff ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
                class  : "combat-attack-info",
                "data-value": attack_line.name,
                title  : "Détails de l'arme",
                onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__item',{'param__stuff__value':this.getAttribute('data-value')})"
            }, "?" ), name_cell );
        }
        let rank_cell = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-attack-col combat-attack-col-rank" } ), row );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "combat-attack-rank " + rank_data.css }, rank_data.short ), rank_cell );
        let characteristic_value = character_object.getCharacteristics().getContentByUUID( attack_line.characteristic );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-attack-col combat-attack-col-modifier" }, attack_line.characteristic + " " + ( characteristic_value ? characteristic_value.getModifierValue() : 0 ) ), row );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-attack-col combat-attack-col-roll" }, combat.getAttackRoll( character_object, attack_line ) ), row );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-attack-col combat-attack-col-damage" }, attack_line.damage || "—" ), row );
    },

    _refreshSpellcastingZone: function ( character_object ) {
        SERVICE.DOM.empty( this.spellcasting_zone );
        let lines = character_object.getCombat().getSpellcastingLines( character_object );
        if ( !lines.length ) {
            return;
        }
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-attacks-title" }, "Incantation" ), this.spellcasting_zone );
        for ( let i = 0, _size_i = lines.length; i < _size_i; i++ ) {
            let line = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-spellcasting-line" } ), this.spellcasting_zone );
            let rank_data = MASTERY.getByShort( lines[ i ].rank );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "combat-spellcasting-label" }, lines[ i ].label ), line );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "combat-attack-rank " + rank_data.css }, rank_data.short ), line );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "combat-spellcasting-value" }, lines[ i ].value ), line );
        }
    },

    _refreshHealthBand: function ( character_object ) {
        if ( !this.dom_element_current_hp || !character_object ) {
            return;
        }
        let health = character_object.getHealth();
        this.dom_element_current_hp.textContent        = health.getCurrentHP() + " / " + health.getMaxHP();
        this.dom_element_health_percentage.textContent = health.getHealthPercentage() + "%";
        this.dom_element_temp_hp.textContent           = "" + health.getTempHP();
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.CombatWindow, WINDOW_V2.ElementFromData );

CHARACTER.CombatWindow.NAME = "combat_sheet";
