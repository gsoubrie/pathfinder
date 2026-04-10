"use strict";
/**
 * @class CHARACTER.GiftsWindow
 * @extends WINDOW_V2.ElementFromData
 */
CHARACTER.GiftsWindow = function ( parent_name ) {
    this.initSpecific( CHARACTER.GiftsWindow.NAME, parent_name, "Dons" );
};
CHARACTER.GiftsWindow.prototype = {
    initSpecific: WINDOW_V2.ElementFromData.initSpecific,
    
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__gift__toggle":
                CONTROLLER.Character.current_character.getGifts().doActionAfter( event_name, params );
                return;
            case "click_on__window_navigation__done":
                console.log("doaction");
                if ( this.name === params[ "window_name" ] ) {
                    SERVICE.DOM.empty(this.content_dom_element_target);
                    this.computeContent( params[ "param__current_character__object" ] );
                    
                }
                return;
        }
    },
    
    //********************************************  HTML   **************************************************//
    computeHtmlWithData: function () {
        this.content_dom_element_target = SERVICE.DOM.createElement( "div", { class: "gifts-window" } );
        SERVICE.DOM.addElementToAfterEmpty( this.content_dom_element_target, this.dom_element_target );
    },
    
    computeContent: function ( character_object ) {
        var gifts = character_object.getGifts();
        var sources = this._collectAllFeats( character_object );
        var self    = this;
        
        var filter_container = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "gifts-filters" } ),
            this.content_dom_element_target
        );
        
        var filter_state = { type: "all", text: "" };
        
        var types = [
            { key: "all", label: "Tous" },
            { key: "general", label: "Généraux" },
            { key: "class", label: "Classe" },
            { key: "race", label: "Ascendance" },
            { key: "skill", label: "Compétence" },
            { key: "archetype", label: "Archétype" }
        ];
        
        var btns_div = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "gifts-filter-types" } ),
            filter_container
        );
        
        var list_div = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "gifts-list" } ),
            this.content_dom_element_target
        );
        
        var search_input = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "input", {
                class      : "gifts-search",
                type       : "text",
                placeholder: "Rechercher un don..."
            } ),
            filter_container
        );
        
        search_input.addEventListener( "input", function () {
            filter_state.text = search_input.value.toLowerCase().trim();
            self._renderList( list_div, sources, gifts, filter_state );
        } );
        
        for ( var i = 0; i < types.length; i++ ) {
            (function ( type ) {
                var btn = SERVICE.DOM.addElementTo(
                    SERVICE.DOM.createElement( "button", { class: "gifts-filter-btn" + (type.key === "all" ? " active" : ""), "data-type": type.key }, type.label ),
                    btns_div
                );
                btn.addEventListener( "click", function () {
                    btns_div.querySelectorAll( ".gifts-filter-btn" ).forEach( function ( b ) {
                        b.classList.remove( "active" );
                    } );
                    btn.classList.add( "active" );
                    filter_state.type = type.key;
                    self._renderList( list_div, sources, gifts, filter_state );
                } );
            })( types[ i ] );
        }
        
        this._renderList( list_div, sources, gifts, filter_state );
    },
    
    _collectAllFeats: function ( character_object ) {
        var all = [];
        console.log("xxx");
        var class_name     = character_object.getClass().getValue();
        var race_name      = character_object.getRace().getValue();
        var archetype_name = character_object.getClass().getArchetype().getValue();
        
        // Dons généraux : tous disponibles
        if ( DON && DON.GENERAL && DON.GENERAL.ENUM ) {
            for ( var i = 0; i < DON.GENERAL.ENUM.length; i++ ) {
                all.push( { feat: DON.GENERAL.ENUM[ i ], type: "general" } );
            }
        }
        
        // Dons de classe : uniquement ceux avec le trait de la classe
        if ( class_name && DON && DON.CLASS && DON.CLASS.ENUM ) {
            for ( var j = 0; j < DON.CLASS.ENUM.length; j++ ) {
                if ( this._hasTrait( DON.CLASS.ENUM[ j ], class_name ) ) {
                    all.push( { feat: DON.CLASS.ENUM[ j ], type: "class" } );
                }
            }
        }
        
        // Dons de race : uniquement ceux avec le trait de la race
        if ( race_name && DON && DON.RACE && DON.RACE.ENUM ) {
            for ( var r = 0; r < DON.RACE.ENUM.length; r++ ) {
                var group = DON.RACE.ENUM[ r ];
                var items = Array.isArray( group ) ? group : [group];
                for ( var r2 = 0; r2 < items.length; r2++ ) {
                    if ( this._hasTrait( items[ r2 ], race_name ) ) {
                        all.push( { feat: items[ r2 ], type: "race" } );
                    }
                }
            }
        }
        
        // Dons de competence : tous disponibles (prerequis = informatif)
        if ( DON && DON.SKILL && DON.SKILL.ENUM ) {
            for ( var s = 0; s < DON.SKILL.ENUM.length; s++ ) {
                var sgroup = DON.SKILL.ENUM[ s ];
                var sitems = Array.isArray( sgroup ) ? sgroup : [sgroup];
                for ( var s2 = 0; s2 < sitems.length; s2++ ) {
                    all.push( { feat: sitems[ s2 ], type: "skill" } );
                }
            }
        }
        
        // Dons d'archetype : uniquement l'archetype selectionne
        if ( archetype_name && archetype_name !== ARCHETYPES.default_value && typeof ARCHETYPES !== "undefined" && ARCHETYPES.ENUM ) {
            for ( var a = 0; a < ARCHETYPES.ENUM.length; a++ ) {
                var arch = ARCHETYPES.ENUM[ a ];
                if ( arch.name !== archetype_name ) {
                    continue;
                }
                var feats = arch.feats || [];
                for ( var af = 0; af < feats.length; af++ ) {
                    all.push( {
                        feat: {
                            name       : feats[ af ].name,
                            level      : feats[ af ].level,
                            traits     : arch.traits || [],
                            required   : feats[ af ].required ? this._formatRequired( feats[ af ].required ) : [],
                            description: feats[ af ].description || [],
                            archetype  : arch.name
                        },
                        type: "archetype"
                    } );
                }
                break;
            }
        }
        
        return all;
    },
    
    _hasTrait: function ( feat, trait_name ) {
        if ( !feat || !feat.traits ) {
            return false;
        }
        for ( var i = 0; i < feat.traits.length; i++ ) {
            if ( feat.traits[ i ] === trait_name ) {
                return true;
            }
        }
        return false;
    },
    
    _formatRequired: function ( required ) {
        var parts = [];
        if ( required.archetypes ) {
            for ( var a = 0; a < required.archetypes.length; a++ ) {
                parts.push( "Dévouement " + required.archetypes[ a ].name );
            }
        }
        if ( required.skills ) {
            var label_map  = { arcane: "Arcanes", nature: "Nature", occultism: "Occultisme", religion: "Religion", trained: "qualifié", expert: "expert", master: "maître", legendary: "légendaire" };
            var skill_list = required.skills.list || [];
            var texts      = [];
            for ( var s = 0; s < skill_list.length; s++ ) {
                texts.push( (label_map[ skill_list[ s ].level ] || skill_list[ s ].level) + " en " + (label_map[ skill_list[ s ].type ] || skill_list[ s ].type) );
            }
            parts.push( texts.join( " ou " ) );
        }
        return parts;
    },
    
    _renderList: function ( container, sources, gifts, filter_state ) {
        // Vider
        while ( container.firstChild ) {
            container.removeChild( container.firstChild );
        }
        
        var type_labels = { general: "Général", class: "Classe", race: "Ascendance", skill: "Compétence", archetype: "Archétype" };
        var type_colors = { general: "gift-tag--general", class: "gift-tag--class", race: "gift-tag--race", skill: "gift-tag--skill", archetype: "gift-tag--archetype" };
        
        // Filtrer
        var filtered = [];
        for ( var i = 0; i < sources.length; i++ ) {
            var entry = sources[ i ];
            var feat  = entry.feat;
            if ( !feat || !feat.name ) {
                continue;
            }
            if ( filter_state.type !== "all" && entry.type !== filter_state.type ) {
                continue;
            }
            if ( filter_state.text && feat.name.toLowerCase().indexOf( filter_state.text ) === -1 ) {
                continue;
            }
            filtered.push( entry );
        }
        
        // Trier par niveau puis nom
        filtered.sort( function ( a, b ) {
            var la = parseInt( a.feat.level ) || 0;
            var lb = parseInt( b.feat.level ) || 0;
            if ( la !== lb ) {
                return la - lb;
            }
            return (a.feat.name || "").localeCompare( b.feat.name || "" );
        } );
        
        if ( filtered.length === 0 ) {
            SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", { class: "gifts-empty" }, "Aucun don trouvé." ),
                container
            );
            return;
        }
        
        // Grouper par niveau
        var by_level = {};
        var levels   = [];
        for ( var j = 0; j < filtered.length; j++ ) {
            var lvl = parseInt( filtered[ j ].feat.level ) || 0;
            if ( !by_level[ lvl ] ) {
                by_level[ lvl ] = [];
                levels.push( lvl );
            }
            by_level[ lvl ].push( filtered[ j ] );
        }
        
        for ( var li = 0; li < levels.length; li++ ) {
            var level   = levels[ li ];
            var section = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", { class: "gifts-level-section" } ),
                container
            );
            SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", { class: "gifts-level-header" }, "Niveau " + level ),
                section
            );
            
            var group = by_level[ level ];
            for ( var gi = 0; gi < group.length; gi++ ) {
                var entry = group[ gi ];
                var feat  = entry.feat;
                var cb_id = "gift-cb-" + feat.name.replace( /[^a-zA-Z0-9]/g, "_" );
                
                var row = SERVICE.DOM.addElementTo(
                    SERVICE.DOM.createElement( "div", { class: "gift-row" + (gifts.isSelected( feat.name ) ? " gift-row--selected" : "") } ),
                    section
                );
                
                // Checkbox
                var cb     = SERVICE.DOM.addElementTo(
                    SERVICE.DOM.createElement( "input", {
                        type   : "checkbox",
                        id     : cb_id,
                        class  : "gift-checkbox",
                        onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__gift__toggle',{'param__gift__name':'" + feat.name.replace( /'/g, "\\'" ) + "'})"
                    } ),
                    row
                );
                cb.checked = gifts.isSelected( feat.name );
                
                // Contenu principal
                var content = SERVICE.DOM.addElementTo(
                    SERVICE.DOM.createElement( "label", { class: "gift-content", "for": cb_id } ),
                    row
                );
                
                // Ligne du haut : nom + tags
                var top_line = SERVICE.DOM.addElementTo(
                    SERVICE.DOM.createElement( "div", { class: "gift-top-line" } ),
                    content
                );
                SERVICE.DOM.addElementTo(
                    SERVICE.DOM.createElement( "span", { class: "gift-name" }, feat.name ),
                    top_line
                );
                
                var tags = SERVICE.DOM.addElementTo(
                    SERVICE.DOM.createElement( "span", { class: "gift-tags" } ),
                    top_line
                );
                
                // Tag type
                SERVICE.DOM.addElementTo(
                    SERVICE.DOM.createElement( "span", { class: "gift-tag " + (type_colors[ entry.type ] || "") }, type_labels[ entry.type ] || entry.type ),
                    tags
                );
                
                // Tag archétype parent si applicable
                if ( feat.archetype ) {
                    SERVICE.DOM.addElementTo(
                        SERVICE.DOM.createElement( "span", { class: "gift-tag gift-tag--archetype-name" }, feat.archetype ),
                        tags
                    );
                }
                
                // Traits
                if ( feat.traits && feat.traits.length ) {
                    for ( var ti = 0; ti < feat.traits.length; ti++ ) {
                        SERVICE.DOM.addElementTo(
                            SERVICE.DOM.createElement( "span", { class: "gift-tag gift-tag--trait" }, feat.traits[ ti ] ),
                            tags
                        );
                    }
                }
                
                // Prérequis
                var required = Array.isArray( feat.required ) ? feat.required : (feat.required ? this._formatRequired( feat.required ) : []);
                if ( required && required.length ) {
                    var req_div = SERVICE.DOM.addElementTo(
                        SERVICE.DOM.createElement( "div", { class: "gift-required" } ),
                        content
                    );
                    SERVICE.DOM.addElementTo(
                        SERVICE.DOM.createElement( "span", { class: "gift-required-label" }, "Prérequis : " ),
                        req_div
                    );
                    SERVICE.DOM.addElementTo(
                        SERVICE.DOM.createElement( "span", { class: "gift-required-value" }, required.join( " | " ) ),
                        req_div
                    );
                }
                
                // Description (premier paragraphe uniquement, expandable)
                if ( feat.description && feat.description.length ) {
                    var first = Array.isArray( feat.description[ 0 ] ) ? feat.description[ 0 ].join( " / " ) : feat.description[ 0 ];
                    var desc  = SERVICE.DOM.addElementTo(
                        SERVICE.DOM.createElement( "div", { class: "gift-desc" }, first ),
                        content
                    );
                }
            }
        }
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.GiftsWindow, WINDOW_V2.ElementFromData );

CHARACTER.GiftsWindow.NAME = "gifts_sheet";