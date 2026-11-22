"use strict";
/**
 * @class CHARACTER.CombatWindow
 * @extends WINDOW_V2.ElementFromData
 */
CHARACTER.CombatWindow = function ( parent_name ) {
    this.initSpecific( CHARACTER.CombatWindow.NAME, parent_name, "Aventure" );
};

CHARACTER.CombatWindow.prototype = {
    // The current mode tab is a VIEW STATE of the window (never saved) :
    // Exploration at load (user decision)
    initSpecific: function ( name, parent_name, label ) {
        WINDOW_V2.ElementFromData.prototype.initSpecific.call( this, name, parent_name, label );
        this.current_mode = COMBAT.DEFAULT_MODE;
    },

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
            case "event__stuff__set_slot":
            case "event__stuff__edit_current_hp":
                this._refreshCombatZones( CONTROLLER.Character.current_character );
                break;
            // Les actions du personnage (ajustements) bougent : la zone
            // Actions de combat suit ; un boost de caractéristique change
            // aussi les PV et les jets (CA, attaques, sauvegardes)
            case "event__adjustment__add":
            case "event__adjustment__remove":
            case "event__more_button":
            case "event__less_button":
                this._refreshHealthBand( CONTROLLER.Character.current_character );
                this._refreshCombatZones( CONTROLLER.Character.current_character );
                break;
            // Changement de race/héritage/classe : la vitesse, la CA et les
            // astérisques de bonus conditionnel suivent (l'héritage peut
            // porter ou retirer un bonus)
            case "event__form__element_changed":
                this._refreshHealthBand( CONTROLLER.Character.current_character );
                this._refreshCombatZones( CONTROLLER.Character.current_character );
                break;
            // The mode tabs swap the action column on the right only, the
            // main column stays identical
            case "event__combat__select_mode":
                this.current_mode = params[ "param__combat__mode" ];
                this._updateModeTabs();
                this._refreshActionsZone( CONTROLLER.Character.current_character );
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
            // Les onglets de mode en tête, puis deux colonnes : le contenu
            // de combat à gauche, la liste des actions à droite sur TOUTE
            // la hauteur de l'onglet
            this._computeModeTabs( this.content_dom_element_target );
            this.body_element = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-window-body" } ), this.content_dom_element_target );
            this.main_column = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-main-column" } ), this.body_element );
            this._computeHealthBand( character_object );
            this._computeReferenceZone( character_object );
            this._computeEquipmentZone( character_object );
            this._computeSavesZone( character_object );
            this._computeAttacksZone( this.main_column );
            this._computeSpellcastingZone( character_object );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-health-history-title" }, "Journal" ), this.main_column );
            let journal = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-health-history" } ), this.main_column );
            character_object.getHealth().getHistoryEntries().renderInto( journal );
            this._computeActionsZone( this.body_element );
        }
        this._refreshHealthBand( character_object );
        this._refreshCombatZones( character_object );
    },

    _computeHealthBand: function ( character_object ) {
        this.band_element = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-health-band" } ), this.main_column );
        let points        = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-health-points" } ), this.band_element );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-health-label" }, "Points de vie" ), points );
        this.dom_element_current_hp          = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "combat-health-points-value" } ), points );
        this.dom_element_health_percentage   = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "combat-health-percentage between-parentheses" } ), points );
        let temp = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-health-temp combat-health-temp--hidden" } ), this.band_element );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-health-label" }, "PV temporaires" ), temp );
        this.dom_element_temp_cell = temp;
        this.dom_element_temp_hp   = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "combat-health-temp-value" } ), temp );
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
        let zone     = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-reference-zone" } ), this.main_column );
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

    // The character schema : one row per body slot (STUFF.SLOTS order,
    // every slot shows, the empty ones read "—"), the equipped pieces
    // grouped by slot, the affixed/etched pieces under their host, the
    // durability (Solidité · PV −/+ · SR) of the pieces that own HP
    _computeEquipmentZone: function ( character_object ) {
        this.equipment_zone = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-equipment-zone" } ), this.main_column );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-attacks-title" }, "Équipé" ), this.equipment_zone );
        this.equipment_list = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-equipment-list combat-schema" } ), this.equipment_zone );
    },

    _refreshEquipmentZone: function ( character_object ) {
        SERVICE.DOM.empty( this.equipment_list );
        let rows = character_object.getCombat().getEquipmentSlotsData( character_object );
        let rendered = 0;
        for ( let i = 0, _size_i = rows.length; i < _size_i; i++ ) {
            // Un emplacement vide ne rend aucune rangée
            if ( !rows[ i ].items.length && !rows[ i ].orphan_hosts.length ) {
                continue;
            }
            this._buildSchemaRow( this.equipment_list, rows[ i ] );
            rendered++;
        }
        // Rien d'équipé : une ligne grisée le dit sous le titre
        if ( !rendered ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-schema-empty" }, "Rien d'équipé" ), this.equipment_list );
        }
    },

    _buildSchemaRow: function ( parent, row ) {
        let row_dom = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-schema-row", "data-slot": row.slot_key } ), parent );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-schema-slot-label" }, row.label ), row_dom );
        let items_dom = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-schema-slot-items" } ), row_dom );
        for ( let i = 0, _size_i = row.items.length; i < _size_i; i++ ) {
            this._buildSchemaItem( items_dom, row.items[ i ] );
        }
        // The affixed pieces whose host is not equipped still list under
        // their slot
        for ( let h = 0, _size_h = row.orphan_hosts.length; h < _size_h; h++ ) {
            this._buildSchemaHost( items_dom, row.orphan_hosts[ h ] );
        }
    },

    _buildSchemaItem: function ( parent, item ) {
        let entry    = item.entry;
        let item_dom = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-schema-item" } ), parent );
        let name_dom = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-schema-item-name" } ), item_dom );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "combat-schema-item-value" }, entry.value ), name_dom );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
            class      : "combat-attack-info",
            "data-value": entry.value,
            title      : "Détails de l'équipement",
            onclick    : "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__item',{'param__stuff__value':this.getAttribute('data-value')})"
        }, "?" ), name_dom );
        // The durability of the piece : Solidité · PV −/+ · SR — the −/+
        // send a delta, the identity rides the data attributes (the names
        // carry apostrophes, jamais inline)
        if ( item.hp ) {
            let hp_dom = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-schema-item-hp" + ( item.hp.current <= 0 ? " combat-schema-item-hp--destroyed" : "" ) } ), item_dom );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "combat-schema-item-hardness" }, "Solidité " + item.hp.hardness ), hp_dom );
            let hp_buttons = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "combat-schema-hp-buttons" } ), hp_dom );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
                class      : "combat-schema-hp-btn",
                "data-kind": entry.getKind(),
                "data-value": entry.value,
                "data-delta": "-1",
                title      : "Un dégât de plus (l'objet perd 1 PV au-delà de sa Solidité)",
                onclick    : "MANAGER.EventManagerV2.doActionAfter(event,'event__stuff__edit_current_hp',{'param__stuff__kind':this.getAttribute('data-kind'),'param__stuff__value':this.getAttribute('data-value'),'param__delta':this.getAttribute('data-delta')})"
            }, "−" ), hp_buttons );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "combat-schema-hp-value" }, item.hp.current + " / " + item.hp.max ), hp_buttons );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
                class      : "combat-schema-hp-btn",
                "data-kind": entry.getKind(),
                "data-value": entry.value,
                "data-delta": "1",
                title      : "Réparer (1 PV de plus)",
                onclick    : "MANAGER.EventManagerV2.doActionAfter(event,'event__stuff__edit_current_hp',{'param__stuff__kind':this.getAttribute('data-kind'),'param__stuff__value':this.getAttribute('data-value'),'param__delta':this.getAttribute('data-delta')})"
            }, "+" ), hp_buttons );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "combat-schema-item-bt" }, "SR " + item.hp.bt ), hp_dom );
        }
        // The affixed/etched pieces ride under their host
        for ( let h = 0, _size_h = item.hosts.length; h < _size_h; h++ ) {
            this._buildSchemaHost( item_dom, item.hosts[ h ] );
        }
    },

    _buildSchemaHost: function ( parent, host_entry ) {
        let host_dom = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-schema-host" } ), parent );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "combat-schema-host-name" }, host_entry.value ), host_dom );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
            class      : "combat-attack-info",
            "data-value": host_entry.value,
            title      : "Détails de l'équipement",
            onclick    : "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__item',{'param__stuff__value':this.getAttribute('data-value')})"
        }, "?" ), host_dom );
    },

    //********************************************  SAVES ZONE   **************************************************//

    _computeSavesZone: function ( character_object ) {
        let zone = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-saves-zone" } ), this.main_column );
        for ( let i = 0, _size_i = COMBAT.SAVES.length; i < _size_i; i++ ) {
            let save = COMBAT.SAVES[ i ];
            let cell = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
                class  : "combat-save-cell combat-reference-clickable",
                "data-name": save.slot,
                onclick : "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__masteries',{})"
            } ), zone );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "combat-save-label" }, save.label ), cell );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "combat-save-value", "data-name": save.slot }, "" ), cell );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "combat-save-bonus", "data-name": save.slot } ), cell );
        }
    },

    //********************************************  ATTACKS ZONE   **************************************************//

    // Un en-tête et une ligne par attaque : les mains nues plus chaque arme
    // EQUIPÉE — les colonnes partagent la meme grille fractionnaire (regle
    // de la zone jets, jamais d'auto)
    _computeAttacksZone: function ( parent_element ) {
        this.attacks_zone = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-attacks-zone" } ), parent_element );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-attacks-title" }, "Attaques" ), this.attacks_zone );
        this.attacks_header = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-attack-row combat-attack-row--header" } ), this.attacks_zone );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-attack-col combat-attack-col-name" }, "Arme" ), this.attacks_header );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-attack-col combat-attack-col-rank" }, "Rang" ), this.attacks_header );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-attack-col combat-attack-col-modifier" }, "Mod" ), this.attacks_header );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-attack-col combat-attack-col-roll" }, "Jet" ), this.attacks_header );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-attack-col combat-attack-col-damage" }, "Dégâts" ), this.attacks_header );
        this.attacks_list = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-attacks-list" } ), this.attacks_zone );
    },

    //********************************************  MODE TABS   **************************************************//

    // The three play modes in a chip row on top of the tab (same visual
    // language as the library subjects) : the selected state rides the
    // data-selected attribute, never a class
    _computeModeTabs: function ( parent_element ) {
        this.mode_tabs_element = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-mode-tabs" } ), parent_element );
        for ( let i = 0, _size_i = COMBAT.MODE_TABS.length; i < _size_i; i++ ) {
            let tab = COMBAT.MODE_TABS[ i ];
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
                class          : "combat-mode-tab",
                "data-mode"    : tab.key,
                "data-selected": this.current_mode === tab.key ? "true" : "false",
                onclick        : "MANAGER.EventManagerV2.doActionAfter(event,'event__combat__select_mode',{'param__combat__mode':this.getAttribute('data-mode')})"
            }, tab.label ), this.mode_tabs_element );
        }
    },

    _updateModeTabs: function () {
        let tabs = this.mode_tabs_element.querySelectorAll( ".combat-mode-tab" );
        for ( let i = 0, _size_i = tabs.length; i < _size_i; i++ ) {
            tabs[ i ].setAttribute( "data-selected", tabs[ i ].getAttribute( "data-mode" ) === this.current_mode ? "true" : "false" );
        }
    },

    //********************************************  ACTIONS ZONE   **************************************************//

    // La colonne de droite affiche les actions du mode actif (onglets de mode
    // en tête) : Combats = la carte de base plus les actions du personnage
    // identifiées comme combat ; Exploration/Intermède = les activités du
    // trait de mode. Pas de titre de zone (décision utilisateur Round 88),
    // mais un titre par partie avec une séparation visuelle entre les types ;
    // une ligne Nom | Coût, le NOM ouvre la popup ACTION (traits en infobulle
    // de la ligne)
    _computeActionsZone: function ( parent_element ) {
        this.actions_zone = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-actions-zone" } ), parent_element );
        this.actions_list = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-actions-list" } ), this.actions_zone );
    },

    _refreshActionsZone: function ( character_object ) {
        SERVICE.DOM.empty( this.actions_list );
        let sections = character_object.getCombat().getModeSections( character_object, this.current_mode );
        for ( let i = 0, _size_i = sections.length; i < _size_i; i++ ) {
            // Chaque catégorie est une PARTIE : bloc carte séparé des autres
            // (pattern de l'onglet Équipement), titre centré en tête
            let section_element = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-actions-section", "data-section": sections[ i ].key } ), this.actions_list );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-actions-section-title" }, sections[ i ].label ), section_element );
            let lines = sections[ i ].lines;
            for ( let j = 0, _size_j = lines.length; j < _size_j; j++ ) {
                this._buildActionLine( section_element, lines[ j ] );
            }
        }
    },

    // La grille est partagée entre les lignes (regle des colonnes zone jets) :
    // chaque cellule porte sa classe de colonne, le DOM suit l'ordre des
    // colonnes (nom, coût). Le nom connu est cliquable : il ouvre la popup
    // ACTION (le nom part en data-value, jamais inline — les apostrophes)
    _buildActionLine: function ( parent, line ) {
        let row       = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-action-row", "data-section": line.section_key } ), parent );
        let name_attrs = {
            class : "combat-action-col combat-action-col-name",
            title : line.traits.join( ", " )
        };
        if ( line.known ) {
            name_attrs[ "class" ]     += " combat-action-col-name--known";
            name_attrs[ "data-value" ] = line.name;
            name_attrs[ "onclick" ]    = "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__action',{'param__action__name':this.getAttribute('data-value')})";
        }
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", name_attrs, line.name ), row );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-action-col combat-action-col-cost" }, line.cost_label ), row );
    },

    //********************************************  SPELLCASTING ZONE   **************************************************//

    _computeSpellcastingZone: function ( character_object ) {
        this.spellcasting_zone = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "combat-spellcasting-zone" } ), this.main_column );
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
        this._refreshActionsZone( character_object );
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
        let combat     = character_object.getCombat();
        for ( let i = 0, _size_i = COMBAT.SAVES.length; i < _size_i; i++ ) {
            let save          = COMBAT.SAVES[ i ];
            let value_element = this.content_dom_element_target.querySelector( ".combat-save-value[data-name='" + save.slot + "']" );
            if ( !value_element ) {
                continue;
            }
            // Le jet affiché reste le jet BRUT : les bonus conditionnels ne
            // s'appliquent que contre des tentatives précises (le MJ les applique)
            value_element.textContent = masteries.getRollModifier( character_object, {
                "slot"         : save.slot,
                "characteristic": save.characteristic
            } );
            // L'astérisque n'apparaît que quand un bonus conditionnel actif
            // vise cette sauvegarde : il ouvre la popup explicative
            let bonus_cell = this.content_dom_element_target.querySelector( ".combat-save-bonus[data-name='" + save.slot + "']" );
            if ( !bonus_cell ) {
                continue;
            }
            SERVICE.DOM.empty( bonus_cell );
            if ( combat.getSaveBonusMarkers( character_object, save.slot ).length ) {
                SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {
                    class      : "combat-save-bonus-marker",
                    "data-slot": save.slot,
                    title      : "Bonus conditionnel",
                    onclick    : "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__save_bonus',{'param__save__slot':this.getAttribute('data-slot')})"
                }, "*" ), bonus_cell );
            }
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
        // La cellule ne se montre qu'avec des PV temporaires (0 = masquée)
        this.dom_element_temp_cell.classList.toggle( "combat-health-temp--hidden", health.getTempHP() <= 0 );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.CombatWindow, WINDOW_V2.ElementFromData );

CHARACTER.CombatWindow.NAME = "combat_sheet";
