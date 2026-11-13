"use strict";
/**
 * @class CHARACTER.LibraryWindow
 * @extends WINDOW_V2.ElementFromData
 */
CHARACTER.LibraryWindow = function ( parent_name ) {
    this.current_subject    = LIBRARY.DEFAULT_SUBJECT_KEY;
    this.filter_type        = LIBRARY.FILTER_ALL_KEY;
    this.search_filters     = [];
    this.initSpecific( CHARACTER.LibraryWindow.NAME, parent_name, "Bibliothèque" );
};
CHARACTER.LibraryWindow.prototype = {
    initSpecific: WINDOW_V2.ElementFromData.initSpecific,

    //********************************************  EVENT LISTENER  **************************************************//

    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "click_on__window_navigation__done":
                if ( this.name === params[ "window_name" ] ) {
                    this.computeContent( params[ "param__current_character__object" ] );
                }
                return;
        }
        WINDOW_V2.Element.prototype.doActionAfter.call( this, event_name, params );
    },

    //********************************************  HTML   **************************************************//

    computeHtmlWithData: function () {
        this.content_dom_element_target = SERVICE.DOM.createElement( "div", { class: "library-window" } );
        SERVICE.DOM.addElementToAfterEmpty( this.content_dom_element_target, this.dom_element_target );
    },

    computeContent: function ( character_object ) {
        let self = this;
        SERVICE.DOM.empty( this.content_dom_element_target );
        this._buildSubjectChips( this.content_dom_element_target );
        let filters_container = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-filters" } ), this.content_dom_element_target );
        this._buildFilterChips( filters_container );
        this._buildSearchZone( filters_container );
        // The row of the posed filters : the container only lives in the
        // flow while it carries tags (the CSS hides it once empty)
        this.active_filters_dom_element = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-active-filters" } ), this.content_dom_element_target );
        this._renderActiveFilters();
        this.list_dom_element = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-list" } ), this.content_dom_element_target );
        this._renderList( this.list_dom_element, character_object );
    },

    // ONE search zone matching name, traits AND content of the card : the
    // commit comes from the Enter key OR the + button (the virtual
    // keyboards of mobiles and tablets don't always send the Enter key)
    _buildSearchZone: function ( parent ) {
        let self          = this;
        let input_dom     = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "input", { class: "library-search", type: "text", placeholder: this._getSubjectData()[ "placeholder" ] } ),
            parent
        );
        let commit_button = SERVICE.DOM.addElementTo(
            SERVICE.DOM.createElement( "div", { class: "library-search-commit", title: "Poser le filtre" }, "+" ),
            parent
        );
        input_dom.addEventListener( "keydown", function ( event ) {
            if ( event.key === "Enter" ) {
                self._addSearchFilter( input_dom.value, input_dom );
            }
        } );
        commit_button.addEventListener( "click", function () {
            self._addSearchFilter( input_dom.value, input_dom );
        } );
    },

    _addSearchFilter: function ( raw_value, input_dom ) {
        let filter_value = raw_value.trim();
        if ( !filter_value ) {
            return;
        }
        if ( this.search_filters.indexOf( filter_value ) === -1 ) {
            this.search_filters.push( filter_value );
        }
        input_dom.value = "";
        this._renderActiveFilters();
        this._renderList( this.list_dom_element, CONTROLLER.Character.current_character );
    },

    // Every posed filter paints its tag, the × of a tag removes IT and
    // only it
    _renderActiveFilters: function () {
        let self = this;
        SERVICE.DOM.empty( this.active_filters_dom_element );
        if ( !this.search_filters.length ) {
            return;
        }
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "library-active-filters-label" }, "Filtres :" ), this.active_filters_dom_element );
        this._buildActiveFilterTags( this.active_filters_dom_element );
    },

    _buildActiveFilterTags: function ( parent ) {
        let self = this;
        for ( let i = 0, _size_i = this.search_filters.length; i < _size_i; i++ ) {
            let filter_index = i;
            let tag_dom      = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "library-active-tag" } ), parent );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "library-active-tag-value" }, this.search_filters[ filter_index ] ), tag_dom );
            let remove_dom   = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "library-active-tag-remove", title: "Retirer le filtre" }, "×" ), tag_dom );
            remove_dom.addEventListener( "click", function () {
                self.search_filters.splice( filter_index, 1 );
                self._renderActiveFilters();
                self._renderList( self.list_dom_element, CONTROLLER.Character.current_character );
            } );
        }
    },

    // The subject chips : the current subject paints itself, a click swaps
    // the subject and resets the filters of the view
    _buildSubjectChips: function ( parent ) {
        let self   = this;
        let chips  = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-subjects" } ), parent );
        for ( let s = 0, _size_s = LIBRARY.SUBJECTS.length; s < _size_s; s++ ) {
            let subject_key = LIBRARY.SUBJECTS[ s ][ "key" ];
            let btn        = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", {
                    class: "library-subject-btn" + ( this.current_subject === subject_key ? " active" : "" ),
                    title: LIBRARY.SUBJECTS[ s ][ "label" ]
                }, LIBRARY.SUBJECTS[ s ][ "label" ] ),
                chips
            );
            btn.addEventListener( "click", function () {
                self.current_subject    = subject_key;
                self.filter_type        = LIBRARY.FILTER_ALL_KEY;
                self.search_filters     = [];
                self.computeContent( CONTROLLER.Character.current_character );
            } );
        }
    },

    _buildFilterChips: function ( parent ) {
        let self  = this;
        let chips = this._getFilterChipsData();
        if ( !chips.length ) {
            return;
        }
        let chips_dom = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-filter-types" } ), parent );
        for ( let c = 0, _size_c = chips.length; c < _size_c; c++ ) {
            let chip_key = chips[ c ][ "key" ];
            let btn      = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", {
                    class: "library-filter-btn" + ( this.filter_type === chip_key ? " active" : "" )
                }, chips[ c ][ "label" ] ),
                chips_dom
            );
            btn.addEventListener( "click", function () {
                chips_dom.querySelectorAll( ".library-filter-btn" ).forEach( function ( other_btn ) {
                    other_btn.classList.remove( "active" );
                } );
                btn.classList.add( "active" );
                self.filter_type = chip_key;
                self._renderList( self.list_dom_element, CONTROLLER.Character.current_character );
            } );
        }
    },

    //********************************************  GETTER SETTER  **************************************************//

    _getSubjectData: function () {
        for ( let s = 0, _size_s = LIBRARY.SUBJECTS.length; s < _size_s; s++ ) {
            if ( LIBRARY.SUBJECTS[ s ][ "key" ] === this.current_subject ) {
                return LIBRARY.SUBJECTS[ s ];
            }
        }
        return LIBRARY.SUBJECTS[ 0 ];
    },

    // The type chips of a subject : the feats own their sources types, the
    // stuffs own the kinds of the scrap, the spells browse in one sectionless list
    _getFilterChipsData: function () {
        if ( this.current_subject === "feats" ) {
            return LIBRARY.FEAT_TYPES;
        }
        if ( this.current_subject === "stuffs" ) {
            let to_return = [ { "key": LIBRARY.FILTER_ALL_KEY, "label": LIBRARY.FILTER_ALL_LABEL } ];
            for ( let k = 0, _size_k = STUFF.KINDS.length; k < _size_k; k++ ) {
                to_return.push( { "key": STUFF.KINDS[ k ][ "key" ], "label": STUFF.KINDS[ k ][ "label" ] } );
            }
            return to_return;
        }
        return [];
    },

    //********************************************  LIST  **************************************************//

    // The posed filters ALL apply (AND) : each one must be carried by the
    // name, the type tag, the key line, ONE of the traits OR the content
    // of the card (user decision — everything the card DISPLAYS is
    // searchable, the "Prix 1 po" of an equipment filters by its price)
    _matchesSearchFilters: function ( name, traits, content, type_text, key_line_text ) {
        if ( !this.search_filters.length ) {
            return true;
        }
        let lower_name    = String( name ).toLowerCase();
        let lower_type    = type_text ? String( type_text ).toLowerCase() : "";
        let lower_key     = key_line_text ? String( key_line_text ).toLowerCase() : "";
        let lower_content = content ? this._formatScrapedDescription( content ).toLowerCase() : "";
        let lower_traits  = [];
        if ( traits && traits.length ) {
            for ( let i = 0, _size_i = traits.length; i < _size_i; i++ ) {
                lower_traits.push( String( traits[ i ] ).toLowerCase() );
            }
        }
        for ( let f = 0, _size_f = this.search_filters.length; f < _size_f; f++ ) {
            let filter_lower = this.search_filters[ f ].toLowerCase();
            if ( lower_name.indexOf( filter_lower ) !== -1 || lower_content.indexOf( filter_lower ) !== -1 || lower_type.indexOf( filter_lower ) !== -1 || lower_key.indexOf( filter_lower ) !== -1 ) {
                continue;
            }
            let carried = false;
            for ( let t = 0, _size_t = lower_traits.length; t < _size_t; t++ ) {
                if ( lower_traits[ t ].indexOf( filter_lower ) !== -1 ) {
                    carried = true;
                }
            }
            if ( !carried ) {
                return false;
            }
        }
        return true;
    },

    // The description arrays of the feats mix strings and arrays of
    // strings : the searchable text flattens everything (the FULL
    // description, not the first paragraph shown by the card)
    _formatFeatSearchText: function ( description ) {
        if ( !description || !description.length ) {
            return "";
        }
        let parts = [];
        for ( let i = 0, _size_i = description.length; i < _size_i; i++ ) {
            parts.push( Array.isArray( description[ i ] ) ? description[ i ].join( " " ) : String( description[ i ] ) );
        }
        return parts.join( " " );
    },

    // The type text of a feat card : the type label rides the tag, the
    // archetype source name rides its own tag — both searchable
    _getFeatTypeText: function ( source ) {
        let to_return = LIBRARY.FEAT_TYPE_LABELS[ source.type ] || source.type;
        if ( source.feat.archetype ) {
            to_return = to_return + " " + source.feat.archetype;
        }
        return to_return;
    },

    // The type text of a stuff card : the label of its kind (the chip and
    // the card tag speak the same labels)
    _getStuffTypeText: function ( entry ) {
        let kind_data = STUFF.getKindData( STUFFS.getKindKeyOfData( entry ) );
        return kind_data ? kind_data.label : "";
    },

    _renderList: function ( list_dom, character_object ) {
        SERVICE.DOM.empty( list_dom );
        if ( this.current_subject === "feats" ) {
            this._renderFeatList( list_dom, character_object );
            return;
        }
        if ( this.current_subject === "spells" ) {
            this._renderSpellList( list_dom, character_object );
            return;
        }
        this._renderStuffList( list_dom, character_object );
    },

    _renderFeatList: function ( list_dom, character_object ) {
        let sources = this._collectFeatSources( character_object );
        let filtered = [];
        for ( let i = 0, _size_i = sources.length; i < _size_i; i++ ) {
            let source = sources[ i ];
            if ( !source || !source.feat || !source.feat.name ) {
                continue;
            }
            if ( this.filter_type !== LIBRARY.FILTER_ALL_KEY && source.type !== this.filter_type ) {
                continue;
            }
            if ( !this._matchesSearchFilters( source.feat.name, source.feat.traits, this._formatFeatSearchText( source.feat.description ), this._getFeatTypeText( source ), "" ) ) {
                continue;
            }
            filtered.push( source );
        }
        filtered.sort( function ( source_a, source_b ) {
            let level_a = parseInt( source_a.feat.level ) || 0;
            let level_b = parseInt( source_b.feat.level ) || 0;
            if ( level_a !== level_b ) {
                return level_a - level_b;
            }
            return ( source_a.feat.name || "" ).localeCompare( source_b.feat.name || "" );
        } );
        if ( !filtered.length ) {
            this._renderEmpty( list_dom );
            return;
        }
        let current_level = null;
        let section       = null;
        for ( let f = 0, _size_f = filtered.length; f < _size_f; f++ ) {
            let level = parseInt( filtered[ f ].feat.level ) || 0;
            if ( level !== current_level ) {
                current_level = level;
                section       = this._addSection( list_dom, "Niveau " + level );
            }
            this._buildFeatCard( section, filtered[ f ] );
        }
    },

    _collectFeatSources: function ( character_object ) {
        let to_return = [];
        for ( let i = 0, _size_i = DON.GENERAL.ENUM.length; i < _size_i; i++ ) {
            to_return.push( { feat: DON.GENERAL.ENUM[ i ], type: "general" } );
        }
        for ( let j = 0, _size_j = DON.CLASS.ENUM.length; j < _size_j; j++ ) {
            if ( this._hasClassTrait( character_object, DON.CLASS.ENUM[ j ] ) ) {
                to_return.push( { feat: DON.CLASS.ENUM[ j ], type: "class" } );
            }
        }
        for ( let r = 0, _size_r = DON.RACE.ENUM.length; r < _size_r; r++ ) {
            let group = DON.RACE.ENUM[ r ];
            let items = Array.isArray( group ) ? group : [group];
            for ( let r2 = 0, _size_r2 = items.length; r2 < _size_r2; r2++ ) {
                if ( this._hasTrait( items[ r2 ], this._getRaceName( character_object ) ) ) {
                    to_return.push( { feat: items[ r2 ], type: "race" } );
                }
            }
        }
        for ( let s = 0, _size_s = DON.SKILL.ENUM.length; s < _size_s; s++ ) {
            let group = DON.SKILL.ENUM[ s ];
            let items = Array.isArray( group ) ? group : [group];
            for ( let s2 = 0, _size_s2 = items.length; s2 < _size_s2; s2++ ) {
                to_return.push( { feat: items[ s2 ], type: "skill" } );
            }
        }
        for ( let a = 0, _size_a = ARCHETYPES.ENUM.length; a < _size_a; a++ ) {
            let archetype = ARCHETYPES.ENUM[ a ];
            if ( !this._hasClassArchetype( character_object, archetype.name ) ) {
                continue;
            }
            let archetype_skills = archetype.skills || [];
            for ( let af = 0, _size_af = archetype_skills.length; af < _size_af; af++ ) {
                to_return.push( {
                    feat: {
                        name       : archetype_skills[ af ].name,
                        level      : archetype_skills[ af ].level,
                        traits     : archetype.traits || [],
                        required   : archetype_skills[ af ].required ? this._formatRequired( archetype_skills[ af ].required ) : [],
                        description: archetype_skills[ af ].description || [],
                        archetype  : archetype.name
                    },
                    type : "archetype"
                } );
            }
            break;
        }
        return to_return;
    },

    _getRaceName: function ( character_object ) {
        return character_object && character_object.getRace() ? character_object.getRace().getValue() : "";
    },

    _hasTrait: function ( feat, trait_name ) {
        if ( !feat || !feat.traits ) {
            return false;
        }
        for ( let i = 0, _size_i = feat.traits.length; i < _size_i; i++ ) {
            if ( feat.traits[ i ] === trait_name ) {
                return true;
            }
        }
        return false;
    },

    _hasClassTrait: function ( character_object, feat ) {
        if ( !character_object || !character_object.getClasses ) {
            return false;
        }
        let classes = character_object.getClasses();
        for ( let c = 0, _size_c = classes.getSize(); c < _size_c; c++ ) {
            if ( this._hasTrait( feat, classes.getContent( c ).getName() ) ) {
                return true;
            }
        }
        return false;
    },

    _hasClassArchetype: function ( character_object, archetype_name ) {
        if ( !character_object || !character_object.getClasses ) {
            return false;
        }
        let classes = character_object.getClasses();
        for ( let c = 0, _size_c = classes.getSize(); c < _size_c; c++ ) {
            if ( classes.getContent( c ).getArchetype().getValue() === archetype_name ) {
                return true;
            }
        }
        return false;
    },

    _formatRequired: function ( required ) {
        let parts = [];
        if ( required.archetypes ) {
            for ( let a = 0, _size_a = required.archetypes.length; a < _size_a; a++ ) {
                parts.push( "Dévouement " + required.archetypes[ a ].name );
            }
        }
        if ( required.skills ) {
            let label_map = { arcane: "Arcanes", nature: "Nature", occultism: "Occultisme", religion: "Religion", trained: "qualifié", expert: "expert", master: "maître", legendary: "légendaire" };
            let skill_list = required.skills.list || [];
            let texts      = [];
            for ( let s = 0, _size_s = skill_list.length; s < _size_s; s++ ) {
                texts.push( ( label_map[ skill_list[ s ].level ] || skill_list[ s ].level ) + " en " + ( label_map[ skill_list[ s ].type ] || skill_list[ s ].type ) );
            }
            parts.push( texts.join( " ou " ) );
        }
        return parts;
    },

    _renderSpellList: function ( list_dom, character_object ) {
        let spells = SPELLS.getSpellListData();
        let filtered = [];
        for ( let i = 0, _size_i = spells.length; i < _size_i; i++ ) {
            // The content of a spell rides with its list entry, its traits
            // come from the by-name dataset accessor (a full-map scan) :
            // never fetched while no filter is posed
            if ( this.search_filters.length ) {
                let spell_data = SPELLS.getSpellData( spells[ i ].name );
                let key_line   = spells[ i ].cost_label !== SPELL.NO_COST_LABEL ? "Coût " + spells[ i ].cost_label : "";
                if ( !this._matchesSearchFilters( spells[ i ].name, spell_data ? spell_data[ "traits" ] : [], spells[ i ].description, SPELLS.getFullTypeLabel( spells[ i ].name ), key_line ) ) {
                    continue;
                }
            }
            filtered.push( spells[ i ] );
        }
        if ( !filtered.length ) {
            this._renderEmpty( list_dom );
            return;
        }
        let current_section_label = null;
        let section               = null;
        for ( let s = 0, _size_s = filtered.length; s < _size_s; s++ ) {
            let section_label = this._getSpellSectionLabel( filtered[ s ] );
            if ( section_label !== current_section_label ) {
                current_section_label = section_label;
                section               = this._addSection( list_dom, section_label );
            }
            this._buildSpellCard( section, filtered[ s ] );
        }
    },

    // The spellbook reads by nature : the cantrips group together, the
    // ranked spells unfold one section per rank, the rests own their label
    _getSpellSectionLabel: function ( spell_list_entry ) {
        let nature_key = SPELLS.getNatureKeyOfName( spell_list_entry.name );
        if ( nature_key === "spell" ) {
            return "Rang " + spell_list_entry.rank;
        }
        let nature_data = SPELL.getNatureData( nature_key );
        return nature_data && nature_data.label ? nature_data.label : nature_key;
    },

    _renderStuffList: function ( list_dom, character_object ) {
        let count = 0;
        for ( let i = 0, _size_i = STUFFS.length; i < _size_i; i++ ) {
            let entry = STUFFS[ i ];
            if ( !entry || !entry.name ) {
                continue;
            }
            if ( this.filter_type !== LIBRARY.FILTER_ALL_KEY && STUFFS.getKindKeyOfData( entry ) !== this.filter_type ) {
                continue;
            }
            if ( !this._matchesSearchFilters( entry.name, entry.traits, entry.description, this._getStuffTypeText( entry ), STUFFS.getKeyLineText( entry ) ) ) {
                continue;
            }
            this._buildStuffCard( list_dom, entry );
            count++;
        }
        if ( !count ) {
            this._renderEmpty( list_dom );
        }
    },

    //********************************************  CARDS  **************************************************//

    _addSection: function ( parent, label ) {
        let section = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-level-section" } ), parent );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-level-header" }, label ), section );
        return section;
    },

    _renderEmpty: function ( parent ) {
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-empty" }, "Aucun résultat." ), parent );
    },

    // The card owns the whole information (description inline) : no
    // information popup, the "?" of the old Dons tab is gone (user
    // decision — the popups stay reachable from their own windows)
    _buildCard: function ( parent, card_data ) {
        let card    = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-card" } ), parent );
        let content = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-card-content" } ), card );
        let top_line = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-card-top-line" } ), content );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "library-card-name" }, card_data[ "name" ] ), top_line );
        let tags_dom = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-card-tags" } ), top_line );
        for ( let t = 0, _size_t = card_data[ "tags" ].length; t < _size_t; t++ ) {
            SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "span", { class: "library-tag " + ( card_data[ "tags" ][ t ][ "css" ] || "" ) }, card_data[ "tags" ][ t ][ "label" ] ),
                tags_dom
            );
        }
        // The add button of the repertoire/inventory cards : the params
        // ride by data attributes (the names carry apostrophes), the flat
        // is the ONE of the add popups — the possession rules (stacking,
        // no-op on an owned entry) live in the domains
        if ( card_data[ "add" ] ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", card_data[ "add" ], "+" ), top_line );
        }
        if ( card_data[ "key_line" ] ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-card-key-line" }, card_data[ "key_line" ] ), content );
        }
        if ( card_data[ "required" ] && card_data[ "required" ].length ) {
            let required_dom = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-card-required" } ), content );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "library-card-required-label" }, "Prérequis : " ), required_dom );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "library-card-required-value" }, card_data[ "required" ].join( " | " ) ), required_dom );
        }
        if ( card_data[ "description" ] ) {
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-card-description" }, card_data[ "description" ] ), content );
        }
        return card;
    },

    _buildFeatCard: function ( parent, source ) {
        let feat            = source.feat;
        let type_label      = LIBRARY.FEAT_TYPE_LABELS[ source.type ] || source.type;
        let tags            = [ { "label": type_label, "css": "library-tag--" + source.type } ];
        if ( feat.archetype ) {
            tags.push( { "label": feat.archetype, "css": "library-tag--archetype-name" } );
        }
        if ( feat.traits && feat.traits.length ) {
            for ( let t = 0, _size_t = feat.traits.length; t < _size_t; t++ ) {
                tags.push( { "label": feat.traits[ t ], "css": "library-tag--trait" } );
            }
        }
        this._buildCard( parent, {
            "name"       : feat.name,
            "tags"       : tags,
            "required"   : Array.isArray( feat.required ) ? feat.required : ( feat.required ? this._formatRequired( feat.required ) : [] ),
            "description": feat.description && feat.description.length ? ( Array.isArray( feat.description[ 0 ] ) ? feat.description[ 0 ].join( " / " ) : feat.description[ 0 ] ) : ""
        } );
    },

    _buildSpellCard: function ( parent, spell_list_entry ) {
        let spell_data  = SPELLS.getSpellData( spell_list_entry.name );
        let tags        = [ { "label": SPELLS.getFullTypeLabel( spell_list_entry.name ), "css": "library-tag--spell" } ];
        if ( spell_data && spell_data[ "traits" ] ) {
            for ( let t = 0, _size_t = spell_data[ "traits" ].length; t < _size_t; t++ ) {
                tags.push( { "label": spell_data[ "traits" ][ t ], "css": "library-tag--trait" } );
            }
        }
        this._buildCard( parent, {
            "name"       : spell_list_entry.name,
            "tags"       : tags,
            "key_line"   : spell_list_entry.cost_label !== SPELL.NO_COST_LABEL ? "Coût " + spell_list_entry.cost_label : null,
            "description": this._formatScrapedDescription( spell_list_entry.description ),
            "add"        : {
                class       : "library-card-add",
                title       : "Ajouter au répertoire",
                "data-value": spell_list_entry.name,
                onclick     : "MANAGER.EventManagerV2.doActionAfter(event,'event__spell__add',{'param__spell__value':this.getAttribute('data-value'),'param__spell__comment':null});CHARACTER.LibraryWindow.goToSheet('" + CHARACTER.SpellsWindow.NAME + "')"
            }
        } );
    },

    _buildStuffCard: function ( parent, entry ) {
        let kind_key   = STUFFS.getKindKeyOfData( entry );
        let kind_data  = STUFF.getKindData( kind_key );
        let tags       = [ { "label": ( STUFF.ICONS[ kind_key ] ? STUFF.ICONS[ kind_key ] + " " : "" ) + ( kind_data ? kind_data.label : "" ), "css": "library-tag--stuff" } ];
        if ( entry.traits && entry.traits.length ) {
            for ( let t = 0, _size_t = entry.traits.length; t < _size_t; t++ ) {
                tags.push( { "label": entry.traits[ t ], "css": "library-tag--trait" } );
            }
        }
        this._buildCard( parent, {
            "name"       : entry.name,
            "tags"       : tags,
            "key_line"  : STUFFS.getKeyLineText( entry ) || null,
            "description": this._formatScrapedDescription( entry.description ),
            "add"        : {
                class          : "library-card-add",
                title          : "Ajouter à l'inventaire",
                "data-value"   : entry.name,
                "data-kind"    : kind_key,
                "data-location": STUFF.DEFAULT_LOCATION,
                onclick        : "MANAGER.EventManagerV2.doActionAfter(event,'event__stuff__add',{'param__stuff__kind':this.getAttribute('data-kind'),'param__stuff__value':this.getAttribute('data-value'),'param__stuff__location':this.getAttribute('data-location'),'param__stuff__comment':null,'param__stuff__place':null});CHARACTER.LibraryWindow.goToSheet('" + CHARACTER.StuffsWindow.NAME + "')"
            }
        } );
    },

    // The scraped descriptions carry HTML : the card owns the plain text
    // only, the markup of the source never renders raw
    _formatScrapedDescription: function ( description ) {
        if ( !description ) {
            return "";
        }
        let text = Array.isArray( description ) ? description[ 0 ] : description;
        return String( text ).replace( /<[^>]*>/g, " " ).replace( /\s+/g, " " ).trim();
    }
};

SERVICE.CLASS.addPrototype( CHARACTER.LibraryWindow, WINDOW_V2.ElementFromData );

CHARACTER.LibraryWindow.NAME = "library_sheet";

// The + of a card does not leave the user on the Bibliothèque : the
// sheet lands on the target window (repertoire, inventory) by the SAME
// tour as a real tab click — the click_on__window_navigation__done
// rides its own dispatch, the target window refreshes with it
CHARACTER.LibraryWindow.goToSheet = function ( window_name ) {
    let tab_dom    = document.querySelector( ".gs-window-element-V2[data-name='" + window_name + "']" );
    if ( !tab_dom ) {
        return;
    }
    let params = {};
    params[ WINDOW_V2.CONST.PARAM.WINDOW_NAME ] = window_name;
    params[ WINDOW_V2.CONST.PARAM.WINDOW_GROUP_NAME ] = tab_dom.dataset.groupName;
    MANAGER.EventManagerV2.clickOnWindowNavigation( { target: tab_dom, button: 0, stopPropagation: function () {} }, params );
};
