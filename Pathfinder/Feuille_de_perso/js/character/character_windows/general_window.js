"use strict";
CHARACTER.GeneralWindow = function ( window_name, parent_name ) {
    this.initSpecific( window_name, parent_name );
    this.tempHpEffects = [];  // Liste des PV temporaires
    this.damageEffects = [];  // Liste des dégâts avec détails
};

CHARACTER.GeneralWindow.prototype = {
    initSpecific: WINDOW_V2.ElementFromData.initSpecific,
    
    //********************************************  HTML   **************************************************//
    computeHtmlWithData: function ( character_object ) {
        this.content_dom_element_target = new SERVICE.DOM.createElement( "div", { class: "character-sheet-grid" } );
        
        this.computeArea__logo( character_object );
        this.computeArea__save( character_object );
        this.computeArea__name( character_object );
        this.computeArea__player( character_object );
        this.computeArea__health( character_object );
        this.computeArea__temp_health( character_object );
        this.computeArea__wound( character_object );
        this.computeArea__ancestry( character_object );
        this.computeArea__heritage( character_object );
        this.computeArea__class( character_object );
        this.computeArea__historic( character_object );
        this.computeArea__size( character_object );
        this.computeArea__alignment( character_object );
        this.computeArea__divinity( character_object );
        this.computeArea__level( character_object );
        this.computeArea__heroism( character_object );
        this.computeArea__ca( character_object );
        this.computeArea__surprise( character_object );
        
        SERVICE.DOM.addElementToAfterEmpty( this.content_dom_element_target, this.dom_element_target );
    },
    
    computeArea__logo: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-logo neutral" } ), this.content_dom_element_target );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "logo-pathfinder" } ), area );
    },
    
    computeArea__save: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-save neutral" } ), this.content_dom_element_target );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "save-button", onclick: "CONTROLLER.Main.save()" } ), area );
    },
    
    computeArea__name: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-name" } ), this.content_dom_element_target );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createPropertyVertical( "name", character_object.name, SERVICE.DOM.createElement("div", {}, character_object.name), "Nom du personnage", true ), area );
    },
    
    computeArea__player: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-player" } ), this.content_dom_element_target );
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createPropertyVertical( "player", character_object.player, SERVICE.DOM.createElement("div", {}, character_object.player), "Nom du joueur", true ), area );
    },
    
    computeArea__health: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-health" } ), this.content_dom_element_target );
        
        // Récupérer les PV actuels et max
        var currentHP = character_object.current_life || character_object.total_life;
        var maxHP = character_object.total_life;
        var tempHP = this.getTotalTempHP();
        
        // Header avec affichage des PV
        var header = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "hp-header" } ),
            area
        );
        
        var hpDisplay = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "hp-display" } ),
            header
        );
        
        this.hpCurrentElement = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "span", { class: "hp-current" }, currentHP ),
            hpDisplay
        );
        
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {}, " / " ), hpDisplay );
        
        this.hpMaxElement = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "span", { class: "hp-max" }, maxHP ),
            hpDisplay
        );
        
        if (tempHP > 0) {
            SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "span", { style: "color: #51CF66; margin-left: 8px;" }, " (+" + tempHP + " temp)" ),
                hpDisplay
            );
        }
        
        // Boutons d'actions
        var actions = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "hp-actions" } ),
            header
        );
        
        SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "button", {
                class: "hp-button heal",
                onclick: function() { self.showHealModal(); }
            }, "Soigner" ),
            actions
        );
        
        SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "button", {
                class: "hp-button",
                onclick: function() { self.showTempHPModal(); }
            }, "+ PV Temp" ),
            actions
        );
        
        SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "button", {
                class: "hp-button damage",
                onclick: function() { self.showDamageModal(); }
            }, "Dégâts" ),
            actions
        );
        
        // Barre de vie
        var barContainer = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "hp-bar-container" } ),
            area
        );
        
        this.hpBarElement = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", {
                class: "hp-bar",
                style: "width: " + (currentHP / maxHP * 100) + "%"
            } ),
            barContainer
        );
        
        if (tempHP > 0) {
            this.hpBarTempElement = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", {
                    class: "hp-bar-temp",
                    style: "width: " + (tempHP / maxHP * 100) + "%"
                } ),
                barContainer
            );
        }
        
        // Liste des effets (PV temp et dégâts)
        this.hpEffectsContainer = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "hp-effects-list" } ),
            area
        );
        
        this.updateEffectsList();
    },
    
    getTotalTempHP: function() {
        return this.tempHpEffects.reduce(function(sum, effect) { return sum + effect.value; }, 0);
    },
    
    updateEffectsList: function() {
        var self = this;
        if (!this.hpEffectsContainer) return;
        
        SERVICE.DOM.empty(this.hpEffectsContainer);
        
        // Afficher les PV temporaires
        this.tempHpEffects.forEach(function(effect, index) {
            var item = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", { class: "hp-effect-item" } ),
                self.hpEffectsContainer
            );
            
            SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "span", { class: "hp-effect-label" }, effect.comment || "PV temporaires" ),
                item
            );
            
            SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "span", { class: "hp-effect-value", style: "color: #51CF66;" }, "+" + effect.value ),
                item
            );
            
            SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "span", {
                    class: "hp-effect-remove",
                    onclick: function() { self.removeTempHP(index); }
                }, "✕" ),
                item
            );
        });
        
        // Afficher les dégâts récents
        this.damageEffects.forEach(function(effect, index) {
            var item = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", { class: "hp-effect-item damage" } ),
                self.hpEffectsContainer
            );
            
            var label = effect.comment || "Dégâts";
            if (effect.damageType) {
                label += " (" + effect.damageType + ")";
            }
            
            SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "span", { class: "hp-effect-label" }, label ),
                item
            );
            
            SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "span", { class: "hp-effect-value", style: "color: #FF6B6B;" }, "-" + effect.value ),
                item
            );
            
            SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "span", {
                    class: "hp-effect-remove",
                    onclick: function() { self.removeDamageEffect(index); }
                }, "✕" ),
                item
            );
        });
    },
    
    showTempHPModal: function() {
        var self = this;
        var modal = this.createModal("Ajouter des PV Temporaires");
        
        var valueField = this.createModalField(modal, "number", "Montant", "value", "10");
        var commentField = this.createModalField(modal, "textarea", "Raison (optionnel)", "comment", "");
        
        this.createModalButtons(modal, function() {
            var value = parseInt(valueField.value) || 0;
            if (value > 0) {
                self.tempHpEffects.push({
                    value: value,
                    comment: commentField.value
                });
                self.updateHealthDisplay();
                self.updateEffectsList();
            }
            document.body.removeChild(modal);
        }, function() {
            document.body.removeChild(modal);
        });
        
        document.body.appendChild(modal);
    },
    
    showDamageModal: function() {
        var self = this;
        var modal = this.createModal("Appliquer des Dégâts");
        
        var valueField = this.createModalField(modal, "number", "Montant des dégâts", "value", "5");
        var typeField = this.createModalSelectField(modal, "Type de dégâts", "damageType", [
            "Contondant", "Perforant", "Tranchant", "Acide", "Froid", "Feu",
            "Force", "Foudre", "Nécrotique", "Poison", "Psychique", "Radiant", "Sonore"
        ]);
        var commentField = this.createModalField(modal, "textarea", "Notes (optionnel)", "comment", "");
        
        this.createModalButtons(modal, function() {
            var value = parseInt(valueField.value) || 0;
            if (value > 0) {
                self.applyDamage(value, typeField.value, commentField.value);
            }
            document.body.removeChild(modal);
        }, function() {
            document.body.removeChild(modal);
        });
        
        document.body.appendChild(modal);
    },
    
    showHealModal: function() {
        var self = this;
        var modal = this.createModal("Soigner");
        
        var valueField = this.createModalField(modal, "number", "Points de vie restaurés", "value", "10");
        var commentField = this.createModalField(modal, "textarea", "Notes (optionnel)", "comment", "");
        
        this.createModalButtons(modal, function() {
            var value = parseInt(valueField.value) || 0;
            if (value > 0) {
                self.applyHealing(value, commentField.value);
            }
            document.body.removeChild(modal);
        }, function() {
            document.body.removeChild(modal);
        });
        
        document.body.appendChild(modal);
    },
    
    applyDamage: function(value, damageType, comment) {
        var character = CONTROLLER.Character.current_character;
        
        // D'abord, enlever des PV temporaires si présents
        var remainingDamage = value;
        while (remainingDamage > 0 && this.tempHpEffects.length > 0) {
            var tempEffect = this.tempHpEffects[0];
            if (tempEffect.value <= remainingDamage) {
                remainingDamage -= tempEffect.value;
                this.tempHpEffects.shift();
            } else {
                tempEffect.value -= remainingDamage;
                remainingDamage = 0;
            }
        }
        
        // Puis enlever des PV réels
        if (remainingDamage > 0) {
            character.current_life = Math.max(0, (character.current_life || character.total_life) - remainingDamage);
            
            // Ajouter à l'historique des dégâts
            this.damageEffects.push({
                value: value,
                damageType: damageType,
                comment: comment,
                timestamp: new Date()
            });
        }
        
        this.updateHealthDisplay();
        this.updateEffectsList();
    },
    
    applyHealing: function(value, comment) {
        var character = CONTROLLER.Character.current_character;
        character.current_life = Math.min(character.total_life, (character.current_life || 0) + value);
        
        this.updateHealthDisplay();
    },
    
    removeTempHP: function(index) {
        this.tempHpEffects.splice(index, 1);
        this.updateHealthDisplay();
        this.updateEffectsList();
    },
    
    removeDamageEffect: function(index) {
        this.damageEffects.splice(index, 1);
        this.updateEffectsList();
    },
    
    updateHealthDisplay: function() {
        var character = CONTROLLER.Character.current_character;
        var currentHP = character.current_life || character.total_life;
        var maxHP = character.total_life;
        var tempHP = this.getTotalTempHP();
        
        if (this.hpCurrentElement) {
            this.hpCurrentElement.textContent = currentHP;
        }
        
        if (this.hpBarElement) {
            this.hpBarElement.style.width = (currentHP / maxHP * 100) + "%";
        }
        
        // Mettre à jour la barre de PV temporaires
        if (this.hpBarTempElement && tempHP > 0) {
            this.hpBarTempElement.style.width = (tempHP / maxHP * 100) + "%";
        }
    },
    
    // Fonctions utilitaires pour les modales
    createModal: function(title) {
        var modal = SERVICE.DOM.createElement( "div", { class: "hp-modal" } );
        var content = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "hp-modal-content" } ),
            modal
        );
        
        SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "hp-modal-title" }, title ),
            content
        );
        
        return modal;
    },
    
    createModalField: function(modal, type, label, name, defaultValue) {
        var content = modal.querySelector(".hp-modal-content");
        var field = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "hp-modal-field" } ),
            content
        );
        
        SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "label", { class: "hp-modal-label" }, label ),
            field
        );
        
        var inputClass = type === "textarea" ? "hp-modal-textarea" : "hp-modal-input";
        var input = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( type === "textarea" ? "textarea" : "input", {
                class: inputClass,
                type: type,
                name: name,
                value: defaultValue
            } ),
            field
        );
        
        return input;
    },
    
    createModalSelectField: function(modal, label, name, options) {
        var content = modal.querySelector(".hp-modal-content");
        var field = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "hp-modal-field" } ),
            content
        );
        
        SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "label", { class: "hp-modal-label" }, label ),
            field
        );
        
        var select = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "select", { class: "hp-modal-select", name: name } ),
            field
        );
        
        options.forEach(function(option) {
            SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "option", { value: option }, option ),
                select
            );
        });
        
        return select;
    },
    
    createModalButtons: function(modal, onConfirm, onCancel) {
        var content = modal.querySelector(".hp-modal-content");
        var buttons = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "hp-modal-buttons" } ),
            content
        );
        
        SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "button", {
                class: "hp-modal-button cancel",
                onclick: onCancel
            }, "Annuler" ),
            buttons
        );
        
        SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "button", {
                class: "hp-modal-button",
                onclick: onConfirm
            }, "Confirmer" ),
            buttons
        );
    },
    
    // Zone TEMP HEALTH - Affiche les états temporaires
    computeArea__temp_health: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "grid-area area-temp-health" } ),
            this.content_dom_element_target
        );
        SERVICE.DOM.addElementTo(
            SERVICE.DOM_HELPER.createPropertyHorizontal( "temp_life", "", "États temporaires", true ),
            area
        );
    },
    
    // Zone WOUND - Affiche les blessures et états
    computeArea__wound: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "grid-area area-wound" } ),
            this.content_dom_element_target
        );
        SERVICE.DOM.addElementTo(
            SERVICE.DOM_HELPER.createPropertyHorizontal( "wound", "", "Blessures / Mourant", true ),
            area
        );
    },
    
    computeArea__ancestry: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "grid-area area-ancestry" } ),
            this.content_dom_element_target
        );
        SERVICE.DOM.addElementTo(
            SERVICE.DOM_HELPER.createPropertyVertical(
                RACES.key_element,
                character_object.getRace().getName(),
                character_object.getRace().getLabel(),
                RACES.label_element,
                false
            ),
            area
        );
    },
    
    computeArea__heritage: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "grid-area area-heritage" } ),
            this.content_dom_element_target
        );
        SERVICE.DOM.addElementTo(
            SERVICE.DOM_HELPER.createPropertyVertical(
                LEGACIES.key_element,
                character_object.getRace().getLegacy().getName(),
                character_object.getRace().getLegacy().getLabel(),
                LEGACIES.label_element,
                false
            ),
            area
        );
    },
    
    computeArea__class: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "grid-area area-class" } ),
            this.content_dom_element_target
        );
        SERVICE.DOM.addElementTo(
            SERVICE.DOM_HELPER.createPropertyVertical(
                CLASSES.key_element,
                character_object.getClass().getName(),
                character_object.getClass().getLabel(),
                CLASSES.label_element,
                false
            ),
            area
        );
    },
    
    computeArea__historic: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "grid-area area-historic" } ),
            this.content_dom_element_target
        );
        SERVICE.DOM.addElementTo( character_object.getHistoric().getLabel(), area );
    },
    
    computeArea__size: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "grid-area area-size" } ),
            this.content_dom_element_target
        );
        SERVICE.DOM.addElementTo(
            SERVICE.DOM_HELPER.createPropertyVertical(
                RACES.PARAM.BODY_SIZE.key,
                character_object.getRace().getBodySize().value,
                character_object.getRace().getBodySize().label,
                "Taille",
                false
            ),
            area
        );
    },
    
    computeArea__alignment: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "grid-area area-alignment" } ),
            this.content_dom_element_target
        );
        SERVICE.DOM.addElementTo(
            SERVICE.DOM_HELPER.createPropertyVertical(
                ALIGNEMENT.key_element,
                character_object.getAlignment(),
                character_object.getAlignment(),
                "Alignement",
                false
            ),
            area
        );
    },
    
    computeArea__divinity: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "grid-area area-divinity" } ),
            this.content_dom_element_target
        );
        SERVICE.DOM.addElementTo(
            SERVICE.DOM_HELPER.createPropertyVertical( "divinite", "", "", "Divinité", false ),
            area
        );
    },
    
    computeArea__level: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "grid-area area-level" } ),
            this.content_dom_element_target
        );
        SERVICE.DOM.addElementTo(
            SERVICE.DOM_HELPER.createPropertyHorizontal( "level", CONTROLLER.Character.current_character.level, "Niveau", true ),
            area
        );
    },
    
    computeArea__heroism: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "grid-area area-heroism" } ),
            this.content_dom_element_target
        );
        SERVICE.DOM.addElementTo(
            SERVICE.DOM_HELPER.createPropertyHorizontal( "point_heroism", CONTROLLER.Character.current_character.point_heroism, "Point d'héroisme", true ),
            area
        );
    },
    
    computeArea__ca: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "grid-area area-ca" } ),
            this.content_dom_element_target
        );
        SERVICE.DOM.addElementTo(
            SERVICE.DOM_HELPER.createPropertyHorizontal( "ca", "", "CA", true ),
            area
        );
    },
    
    computeArea__surprise: function ( character_object ) {
        var area = SERVICE.DOM.addElementTo( 
            SERVICE.DOM.createElement( "div", { class: "grid-area area-surprise" } ), 
            this.content_dom_element_target 
        );
        SERVICE.DOM.addElementTo( 
            SERVICE.DOM_HELPER.createPropertyHorizontal( "surprise", "", "Surpris", true ), 
            area 
        );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.GeneralWindow, WINDOW_V2.ElementFromData );