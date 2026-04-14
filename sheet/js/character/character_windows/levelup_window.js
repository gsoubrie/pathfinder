"use strict";

// ─────────────────────────────────────────────────────────────────────────────
// CHARACTER.LevelUpChoices — stocke les choix faits à chaque niveau
// { level_number: { slot_key: gift_name } }
// ex: { 1: { "general_feat": "Animal de compagnie" }, 3: { "class_feat": "..." } }
// ─────────────────────────────────────────────────────────────────────────────

CHARACTER.LevelUpChoices = function () {
    this.init();
};
CHARACTER.LevelUpChoices.prototype = {
    init: function () {
        this.choices = {}; // { "level_slot_key" : gift_name }
    },
    _key: function ( level, slot_key ) {
        return level + "__" + slot_key;
    },
    set: function ( level, slot_key, gift_name ) {
        this.choices[ this._key( level, slot_key ) ] = gift_name;
        this._updateWarnings();
    },
    get: function ( level, slot_key ) {
        return this.choices[ this._key( level, slot_key ) ] || null;
    },
    clear: function ( level, slot_key ) {
        delete this.choices[ this._key( level, slot_key ) ];
        this._updateWarnings();
    },
    // Retourne tous les slots attendus pour le perso courant
    getExpectedSlots: function ( character_object ) {
        var levels   = this._buildLevels( character_object );
        var slots    = [];
        for ( var n = 0; n < levels.length; n++ ) {
            var unlocks = levels[ n ].unlocks;
            for ( var u = 0; u < unlocks.length; u++ ) {
                var type = unlocks[ u ].type;
                if ( this._requiresChoice( type ) ) {
                    slots.push( { level: levels[ n ].level_number, slot_key: type + "_" + u } );
                }
            }
        }
        return slots;
    },
    getMissingCount: function ( character_object ) {
        var slots   = this.getExpectedSlots( character_object );
        var missing = 0;
        for ( var i = 0; i < slots.length; i++ ) {
            if ( !this.get( slots[ i ].level, slots[ i ].slot_key ) ) {
                missing++;
            }
        }
        return missing;
    },
    _requiresChoice: function ( type ) {
        return type === "general_feat" || type === "class_feat" ||
               type === "skill_feat" || type === "ancestry_feat";
    },
    _buildLevels: function ( character_object ) {
        var class_name = character_object.getClass().getValue();
        var class_data = CLASSES.getDataByName( class_name );
        var char_level = character_object.level || 1;
        var capacities = class_data ? ( class_data.capacity_by_level || [] ) : [];
        var levels     = [];
        for ( var n = 1; n <= char_level; n++ ) {
            var str     = capacities[ n - 1 ] || "";
            var parts   = str.split( "," );
            var unlocks = [];
            for ( var p = 0; p < parts.length; p++ ) {
                var label = parts[ p ].trim();
                if ( label ) {
                    unlocks.push( { label: label, type: CHARACTER.Level.detectType( label ) } );
                }
            }
            levels.push( { level_number: n, unlocks: unlocks } );
        }
        return levels;
    },
    _updateWarnings: function () {
        var character = CONTROLLER.Character.current_character;
        if ( !character ) { return; }
        var missing = this.getMissingCount( character );
        document.body.dataset.levelupMissing = missing;
        // Badge sur l'onglet
        var tab = document.getElementById( "id-gs-window-V2-" + CHARACTER.LevelUpWindow.NAME + "-character_group" );
        if ( tab ) {
            var badge = tab.querySelector( ".levelup-warning-badge" );
            if ( missing > 0 ) {
                if ( !badge ) {
                    badge = document.createElement( "span" );
                    badge.className = "levelup-warning-badge";
                    tab.querySelector( ".gs-div-tab" ).appendChild( badge );
                }
                badge.textContent = missing;
            } else if ( badge ) {
                badge.remove();
            }
        }
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        return { levelup_choices: this.choices };
    },
    updateData: function ( data ) {
        if ( !data ) { return; }
        this.choices = data;
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.LevelUpChoices, OBJECT.InterfaceHtml );

// ─────────────────────────────────────────────────────────────────────────────
// CHARACTER.LevelUpWindow
// ─────────────────────────────────────────────────────────────────────────────
/**
 * @class CHARACTER.LevelUpWindow
 * @extends WINDOW_V2.ElementFromData
 */
CHARACTER.LevelUpWindow = function ( parent_name ) {
    this.initSpecific( CHARACTER.LevelUpWindow.NAME, parent_name, "Passage de niveau" );
};
CHARACTER.LevelUpWindow.prototype = {
    initSpecific: WINDOW_V2.ElementFromData.initSpecific,

    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "click_on__window_navigation__done":
                if ( this.name === params[ "window_name" ] ) {
                    SERVICE.DOM.empty( this.content_dom_element_target );
                    this._buildContent( params[ "param__current_character__object" ] );
                }
                break;
            case "event__levelup__select":
                this._onSelect( params );
                break;
        }
    },

    //********************************************  HTML   **************************************************//
    computeHtmlWithData: function () {
        this.content_dom_element_target = SERVICE.DOM.createElement( "div", { class: "levelup-window" } );
        SERVICE.DOM.addElementToAfterEmpty( this.content_dom_element_target, this.dom_element_target );
    },

    _buildContent: function ( character_object ) {
        var self       = this;
        var choices    = character_object.getLevelUpChoices();
        var class_name = character_object.getClass().getValue();
        var class_data = class_name ? CLASSES.getDataByName( class_name ) : null;
        var char_level = character_object.level || 1;
        var capacities = class_data ? ( class_data.capacity_by_level || [] ) : [];

        // En-tête récap
        var header = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "levelup-header" } ),
            this.content_dom_element_target
        );
        SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "span", { class: "levelup-header-class" }, class_name || "Aucune classe" ),
            header
        );
        SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "span", { class: "levelup-header-level" }, "Niveau " + char_level ),
            header
        );

        // Nombre de choix manquants
        var missing       = choices.getMissingCount( character_object );
        this._warningDiv  = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "levelup-global-warning" + ( missing > 0 ? " visible" : "" ) },
                missing > 0 ? "⚠ " + missing + " choix en attente" : "✓ Tous les choix sont faits"
            ),
            this.content_dom_element_target
        );

        // Un bloc par niveau
        for ( var n = 1; n <= char_level; n++ ) {
            this._buildLevelBlock( n, capacities[ n - 1 ] || "", choices, character_object );
        }
    },

    _buildLevelBlock: function ( level_number, capacity_str, choices, character_object ) {
        var self    = this;
        var parts   = capacity_str.split( "," );
        var unlocks = [];
        for ( var p = 0; p < parts.length; p++ ) {
            var lbl = parts[ p ].trim();
            if ( lbl ) {
                unlocks.push( { label: lbl, type: CHARACTER.Level.detectType( lbl ) } );
            }
        }

        var block = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "levelup-block" } ),
            this.content_dom_element_target
        );

        // Titre du niveau
        var has_pending = unlocks.some( function ( u ) {
            return self._requiresChoice( u.type ) && !choices.get( level_number, u.type + "_" + unlocks.indexOf( u ) );
        } );

        var title = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "levelup-block-title" + ( has_pending ? " has-pending" : "" ) } ),
            block
        );
        SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "span", { class: "levelup-block-level-num" }, "Niveau " + level_number ),
            title
        );
        if ( has_pending ) {
            SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "span", { class: "levelup-pending-badge" }, "!" ),
                title
            );
        }

        // Lignes d'unlock
        for ( var u = 0; u < unlocks.length; u++ ) {
            this._buildUnlockRow( block, level_number, u, unlocks[ u ], choices, character_object );
        }
    },

    _buildUnlockRow: function ( block, level_number, u_index, unlock, choices, character_object ) {
        var self      = this;
        var slot_key  = unlock.type + "_" + u_index;
        var requires  = this._requiresChoice( unlock.type );
        var chosen    = choices.get( level_number, slot_key );

        var row = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "levelup-row" + ( requires ? " levelup-row--choice" : "" ) + ( requires && !chosen ? " levelup-row--pending" : "" ) } ),
            block
        );

        // Icône type
        var icon_map = {
            "general_feat"   : "🎖",
            "class_feat"     : "⚔",
            "skill_feat"     : "📚",
            "ancestry_feat"  : "🌿",
            "skill_increase" : "📈",
            "attribute_boost": "💪",
            "spell"          : "✨",
            "class_feature"  : "🔧"
        };
        SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "span", { class: "levelup-row-icon" }, icon_map[ unlock.type ] || "•" ),
            row
        );

        // Label
        SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "span", { class: "levelup-row-label" }, unlock.label ),
            row
        );

        // Sélecteur si choix requis
        if ( requires ) {
            var selector_wrap = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", { class: "levelup-selector-wrap" } ),
                row
            );

            if ( chosen ) {
                // Afficher le don choisi + bouton effacer
                var chosen_div = SERVICE.DOM.addElementTo(
                    SERVICE.DOM.createElement( "div", { class: "levelup-chosen" } ),
                    selector_wrap
                );
                SERVICE.DOM.addElementTo(
                    SERVICE.DOM.createElement( "span", { class: "levelup-chosen-name" }, chosen ),
                    chosen_div
                );
                var clear_btn = SERVICE.DOM.addElementTo(
                    SERVICE.DOM.createElement( "button", { class: "levelup-clear-btn" }, "✕" ),
                    chosen_div
                );
                (function ( ln, sk ) {
                    clear_btn.addEventListener( "click", function () {
                        choices.clear( ln, sk );
                        SERVICE.DOM.empty( self.content_dom_element_target );
                        self._buildContent( character_object );
                    } );
                })( level_number, slot_key );
            } else {
                // Bouton "Choisir" qui ouvre le mini-sélecteur inline
                var choose_btn = SERVICE.DOM.addElementTo(
                    SERVICE.DOM.createElement( "button", { class: "levelup-choose-btn" }, "Choisir..." ),
                    selector_wrap
                );
                (function ( ln, sk, u_type, u_label ) {
                    choose_btn.addEventListener( "click", function () {
                        self._openInlineSelector( selector_wrap, ln, sk, u_type, u_label, choices, character_object );
                    } );
                })( level_number, slot_key, unlock.type, unlock.label );
            }
        }
    },

    // Mini-sélecteur inline avec recherche
    _openInlineSelector: function ( wrap, level_number, slot_key, unlock_type, unlock_label, choices, character_object ) {
        var self  = this;
        var pool  = this._getPool( unlock_type, level_number, character_object );

        // Vider le wrap et construire le sélecteur
        SERVICE.DOM.empty( wrap );

        var selector = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "levelup-inline-selector" } ),
            wrap
        );

        var search = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "input", { class: "levelup-inline-search", type: "text", placeholder: "Rechercher..." } ),
            selector
        );

        var list = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "levelup-inline-list" } ),
            selector
        );

        var cancel = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "button", { class: "levelup-cancel-btn" }, "Annuler" ),
            selector
        );
        cancel.addEventListener( "click", function () {
            SERVICE.DOM.empty( self.content_dom_element_target );
            self._buildContent( character_object );
        } );

        var render = function ( filter_text ) {
            SERVICE.DOM.empty( list );
            var filtered = pool.filter( function ( item ) {
                return !filter_text || item.name.toLowerCase().indexOf( filter_text ) !== -1;
            } );
            if ( filtered.length === 0 ) {
                SERVICE.DOM.addElementTo(
                    SERVICE.DOM.createElement( "div", { class: "levelup-inline-empty" }, "Aucun résultat." ),
                    list
                );
                return;
            }
            for ( var i = 0; i < filtered.length; i++ ) {
                (function ( item ) {
                    var entry = SERVICE.DOM.addElementTo(
                        SERVICE.DOM.createElement( "div", { class: "levelup-inline-entry" } ),
                        list
                    );
                    SERVICE.DOM.addElementTo(
                        SERVICE.DOM.createElement( "span", { class: "levelup-inline-name" }, item.name ),
                        entry
                    );
                    if ( item.level ) {
                        SERVICE.DOM.addElementTo(
                            SERVICE.DOM.createElement( "span", { class: "levelup-inline-level" }, "Don " + item.level ),
                            entry
                        );
                    }
                    entry.addEventListener( "click", function () {
                        choices.set( level_number, slot_key, item.name );
                        SERVICE.DOM.empty( self.content_dom_element_target );
                        self._buildContent( character_object );
                    } );
                })( filtered[ i ] );
            }
        };

        search.addEventListener( "input", function () {
            render( search.value.toLowerCase().trim() );
        } );

        render( "" );
        search.focus();
    },

    // Retourne la pool de dons disponibles selon le type et le niveau
    _getPool: function ( unlock_type, level_number, character_object ) {
        var pool       = [];
        var class_name = character_object.getClass().getValue();
        var race_name  = character_object.getRace().getValue();

        if ( unlock_type === "general_feat" ) {
            for ( var i = 0; i < DON.GENERAL.ENUM.length; i++ ) {
                var f = DON.GENERAL.ENUM[ i ];
                if ( parseInt( f.level ) <= level_number ) {
                    pool.push( f );
                }
            }
        } else if ( unlock_type === "class_feat" ) {
            for ( var j = 0; j < DON.CLASS.ENUM.length; j++ ) {
                var fc = DON.CLASS.ENUM[ j ];
                if ( this._hasTrait( fc, class_name ) && parseInt( fc.level ) <= level_number ) {
                    pool.push( fc );
                }
            }
        } else if ( unlock_type === "skill_feat" ) {
            for ( var s = 0; s < DON.SKILL.ENUM.length; s++ ) {
                var sg = DON.SKILL.ENUM[ s ];
                var si = Array.isArray( sg ) ? sg : [ sg ];
                for ( var s2 = 0; s2 < si.length; s2++ ) {
                    if ( parseInt( si[ s2 ].level ) <= level_number ) {
                        pool.push( si[ s2 ] );
                    }
                }
            }
        } else if ( unlock_type === "ancestry_feat" ) {
            for ( var r = 0; r < DON.RACE.ENUM.length; r++ ) {
                var rg = DON.RACE.ENUM[ r ];
                var ri = Array.isArray( rg ) ? rg : [ rg ];
                for ( var r2 = 0; r2 < ri.length; r2++ ) {
                    if ( this._hasTrait( ri[ r2 ], race_name ) && parseInt( ri[ r2 ].level ) <= level_number ) {
                        pool.push( ri[ r2 ] );
                    }
                }
            }
        }

        // Trier par niveau puis nom
        pool.sort( function ( a, b ) {
            var la = parseInt( a.level ) || 0;
            var lb = parseInt( b.level ) || 0;
            return la !== lb ? la - lb : ( a.name || "" ).localeCompare( b.name || "" );
        } );

        return pool;
    },

    _requiresChoice: function ( type ) {
        return type === "general_feat" || type === "class_feat" ||
               type === "skill_feat" || type === "ancestry_feat";
    },

    _hasTrait: function ( feat, trait_name ) {
        if ( !feat || !feat.traits ) { return false; }
        for ( var i = 0; i < feat.traits.length; i++ ) {
            if ( feat.traits[ i ] === trait_name ) { return true; }
        }
        return false;
    },

    _onSelect: function ( params ) {
        var character = CONTROLLER.Character.current_character;
        character.getLevelUpChoices().set( params.level, params.slot_key, params.gift_name );
        SERVICE.DOM.empty( this.content_dom_element_target );
        this._buildContent( character );
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.LevelUpWindow, WINDOW_V2.ElementFromData );
CHARACTER.LevelUpWindow.NAME = "levelup_sheet";