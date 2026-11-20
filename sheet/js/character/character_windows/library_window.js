"use strict";
/**
 * @class CHARACTER.LibraryWindow
 * @extends WINDOW_V2.ElementFromData
 */
CHARACTER.LibraryWindow = function ( parent_name ) {
    this.current_subject        = LIBRARY.DEFAULT_SUBJECT_KEY;
    this.filter_type            = LIBRARY.FILTER_ALL_KEY;
    this.search_filters         = [];
    this.owned_only             = false;
    this.spell_tradition_filter = LIBRARY.FILTER_ALL_KEY;
    this.spell_rank_filter      = LIBRARY.FILTER_ALL_KEY;
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
        // An incoming arrival from the Général field: the pending subject
        // and filters apply ONCE, the visits afterwards keep the state the
        // user left
        if ( CHARACTER.LibraryWindow.pending_subject_key ) {
            this.current_subject        = CHARACTER.LibraryWindow.pending_subject_key;
            this.filter_type            = LIBRARY.FILTER_ALL_KEY;
            this.search_filters         = [].concat( CHARACTER.LibraryWindow.pending_filters || [] );
            this.owned_only             = false;
            this.spell_tradition_filter = LIBRARY.FILTER_ALL_KEY;
            this.spell_rank_filter      = LIBRARY.FILTER_ALL_KEY;
            CHARACTER.LibraryWindow.pending_subject_key = null;
            CHARACTER.LibraryWindow.pending_filters      = null;
        }
        SERVICE.DOM.empty( this.content_dom_element_target );
        this._buildSubjectChips( this.content_dom_element_target );
        let filters_container = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-filters" } ), this.content_dom_element_target );
        this._buildFilterChips( filters_container );
        this._buildSpellFilterRows( filters_container );
        this._buildSearchZone( filters_container );
        // The row of the posed filters : the container only lives in the
        // flow while it carries tags (the CSS hides it once empty)
        this.active_filters_dom_element = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-active-filters" } ), this.content_dom_element_target );
        this._renderActiveFilters();
        let list_wrap             = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-list-wrap" } ), this.content_dom_element_target );
        this.list_dom_element     = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-list" } ), list_wrap );
        this._buildListScrollbar( list_wrap );
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
        // Mass add, Sorts subject only : adds every spell the current
        // filters leave visible to the repertoire, then lands on the
        // Sorts tab (same tour as a real tab click)
        if ( this.current_subject === "spells" ) {
            this.add_all_dom = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", { class: "library-add-all", title: "Ajouter tous les sorts affichés au répertoire" } ),
                parent
            );
            this.add_all_dom.addEventListener( "click", function () {
                self._addAllSpells();
            } );
            this._updateAddAllButton();
        }
    },

    _updateAddAllButton: function () {
        if ( !this.add_all_dom ) {
            return;
        }
        let count = ( this._current_filtered_spells || [] ).length;
        this.add_all_dom.textContent = "Tout ajouter (" + count + ")";
        this.add_all_dom.classList.toggle( "hidden", count === 0 );
    },

    _addAllSpells: function () {
        let names = this._current_filtered_spells || [];
        if ( !names.length ) {
            return;
        }
        CONTROLLER.Character.current_character.doActionAfter( "event__spell__add_many", { "param__spell__values": names } );
        CHARACTER.LibraryWindow.goToSheet( CHARACTER.SpellsWindow.NAME );
    },

    _addSpellSection: function ( section_label ) {
        let names = ( this._section_spell_names || {} )[ section_label ] || [];
        if ( !names.length ) {
            return;
        }
        CONTROLLER.Character.current_character.doActionAfter( "event__spell__add_many", { "param__spell__values": names } );
        CHARACTER.LibraryWindow.goToSheet( CHARACTER.SpellsWindow.NAME );
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
                self.current_subject        = subject_key;
                self.filter_type            = LIBRARY.FILTER_ALL_KEY;
                self.search_filters         = [];
                self.owned_only             = false;
                self.spell_tradition_filter = LIBRARY.FILTER_ALL_KEY;
                self.spell_rank_filter      = LIBRARY.FILTER_ALL_KEY;
                self.computeContent( CONTROLLER.Character.current_character );
            } );
        }
    },

    // The Tradition and Rank chip rows of the Sorts subject : they cross
    // (AND) with each other and with the posed search tags, the chips reuse
    // the type-chip look. Only rendered for the spells subject
    _buildSpellFilterRows: function ( parent ) {
        if ( this.current_subject !== "spells" ) {
            return;
        }
        let self = this;
        let rows = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-spell-filters" } ), parent );
        let tradition_chips = [{ "key": LIBRARY.FILTER_ALL_KEY, "label": LIBRARY.FILTER_ALL_LABEL }];
        for ( let t = 0, _size_t = SPELL.TRADITIONS.length; t < _size_t; t++ ) {
            tradition_chips.push( { "key": SPELL.TRADITIONS[ t ].key, "label": SPELL.TRADITIONS[ t ].label } );
        }
        this._buildSpellFilterRow( rows, "Tradition :", tradition_chips, this.spell_tradition_filter, function ( chip_key ) {
            self.spell_tradition_filter = chip_key;
            self._renderList( self.list_dom_element, CONTROLLER.Character.current_character );
        } );
        let rank_chips = [{ "key": LIBRARY.FILTER_ALL_KEY, "label": LIBRARY.FILTER_ALL_LABEL }];
        for ( let rank = 1; rank <= 10; rank++ ) {
            rank_chips.push( { "key": String( rank ), "label": String( rank ) } );
        }
        this._buildSpellFilterRow( rows, "Rang :", rank_chips, this.spell_rank_filter, function ( chip_key ) {
            self.spell_rank_filter = chip_key;
            self._renderList( self.list_dom_element, CONTROLLER.Character.current_character );
        } );
    },

    _buildSpellFilterRow: function ( parent, row_label, chips, current_key, on_pick ) {
        let row_dom = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-spell-filter-row" } ), parent );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "library-spell-filter-label" }, row_label ), row_dom );
        let chips_dom = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-filter-types" } ), row_dom );
        for ( let c = 0, _size_c = chips.length; c < _size_c; c++ ) {
            let chip_key = chips[ c ][ "key" ];
            let btn      = SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", {
                    class: "library-filter-btn" + ( current_key === chip_key ? " active" : "" )
                }, chips[ c ][ "label" ] ),
                chips_dom
            );
            btn.addEventListener( "click", function () {
                chips_dom.querySelectorAll( ".library-filter-btn" ).forEach( function ( other_btn ) {
                    other_btn.classList.remove( "active" );
                } );
                btn.classList.add( "active" );
                on_pick( chip_key );
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
        // La case « Mes dons » du sujet Dons : cochée, elle enlève tous les
        // filtres (chip, recherche, tags) et ne liste que les dons actifs
        // du personnage (décision utilisateur)
        if ( this.current_subject === "feats" ) {
            let character_object = CONTROLLER.Character.current_character;
            let active_count     = character_object && character_object.getGifts() ? character_object.getGifts().getActiveFeats( character_object ).length : 0;
            let owned_dom        = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "label", { class: "library-owned-filter", title: "Ne voir que les dons du personnage (enlève les autres filtres)" } ), chips_dom );
            let checkbox         = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "input", { class: "library-owned-checkbox", type: "checkbox" } ), owned_dom );
            checkbox.checked     = this.owned_only;
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "library-owned-label" }, "Mes dons (" + active_count + ")" ), owned_dom );
            checkbox.addEventListener( "change", function () {
                self.owned_only = checkbox.checked;
                if ( self.owned_only ) {
                    self.filter_type    = LIBRARY.FILTER_ALL_KEY;
                    self.search_filters = [];
                }
                self.computeContent( CONTROLLER.Character.current_character );
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
    // description, not the first paragraph shown by the card), the
    // information links of the scraped text strip to their plain label
    _formatFeatSearchText: function ( description ) {
        if ( !description || !description.length ) {
            return "";
        }
        let parts = [];
        for ( let i = 0, _size_i = description.length; i < _size_i; i++ ) {
            let paragraph = Array.isArray( description[ i ] ) ? description[ i ].join( " " ) : String( description[ i ] );
            parts.push( paragraph.replace( /<[^>]*>/g, " " ).replace( /\s+/g, " " ).trim() );
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

    // Scrollbar graduée de la liste : la scrollbar native est masquée en
    // CSS, une piste verticale à droite de la liste porte un pouce
    // draggable et des labels en nombre de résultats (0 … total)
    _buildListScrollbar: function ( parent ) {
        let self                 = this;
        this.scrollbar_dom_element = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-scrollbar" } ), parent );
        this.scrollbar_ticks_dom   = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-scrollbar-ticks" } ), this.scrollbar_dom_element );
        this.scrollbar_track_dom   = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-scrollbar-track" } ), this.scrollbar_dom_element );
        this.scrollbar_thumb_dom   = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-scrollbar-thumb" } ), this.scrollbar_track_dom );
        this.list_dom_element.addEventListener( "scroll", function () {
            self._updateListScrollbar();
        } );
        if ( this._list_resize_handler ) {
            window.removeEventListener( "resize", this._list_resize_handler );
        }
        this._list_resize_handler = function () {
            self._updateListScrollbar();
        };
        window.addEventListener( "resize", this._list_resize_handler );
        this.scrollbar_thumb_dom.addEventListener( "pointerdown", function ( event ) {
            event.preventDefault();
            event.stopPropagation();
            self._dragListScrollbar( event );
        } );
        this.scrollbar_track_dom.addEventListener( "pointerdown", function ( event ) {
            self._jumpListScrollbar( event );
        } );
    },

    _dragListScrollbar: function ( event ) {
        let list         = this.list_dom_element;
        let thumb_height = this.scrollbar_thumb_dom.offsetHeight;
        let start_y      = event.clientY;
        let start_scroll = list.scrollTop;
        let max_scroll   = Math.max( 1, list.scrollHeight - list.clientHeight );
        let track_range  = Math.max( 1, this.scrollbar_track_dom.clientHeight - thumb_height );
        function on_move ( move_event ) {
            list.scrollTop = start_scroll + ( move_event.clientY - start_y ) / track_range * max_scroll;
        }
        function on_up () {
            document.removeEventListener( "pointermove", on_move );
            document.removeEventListener( "pointerup", on_up );
        }
        document.addEventListener( "pointermove", on_move );
        document.addEventListener( "pointerup", on_up );
    },

    // Clic sur la piste : le pouce se centre sur le clic
    _jumpListScrollbar: function ( event ) {
        let list         = this.list_dom_element;
        let track_rect   = this.scrollbar_track_dom.getBoundingClientRect();
        let thumb_height = this.scrollbar_thumb_dom.offsetHeight;
        let max_scroll   = Math.max( 1, list.scrollHeight - list.clientHeight );
        let track_range  = Math.max( 1, track_rect.height - thumb_height );
        let ratio        = ( event.clientY - track_rect.top - thumb_height / 2 ) / track_range;
        list.scrollTop   = Math.max( 0, Math.min( 1, ratio ) ) * max_scroll;
    },

    _updateListScrollbar: function () {
        if ( !this.list_dom_element || !this.scrollbar_dom_element || !this.scrollbar_track_dom || !this.scrollbar_thumb_dom ) {
            return;
        }
        let list       = this.list_dom_element;
        let max_scroll = list.scrollHeight - list.clientHeight;
        if ( max_scroll <= 0 ) {
            this.scrollbar_dom_element.classList.add( "hidden" );
            this._scrollbar_ticks_key = null;
            return;
        }
        this.scrollbar_dom_element.classList.remove( "hidden" );
        let track_height = this.scrollbar_track_dom.clientHeight;
        let thumb_height = Math.max( 28, Math.round( track_height * list.clientHeight / list.scrollHeight ) );
        this.scrollbar_thumb_dom.style.height = thumb_height + "px";
        let track_range = Math.max( 0, track_height - thumb_height );
        let ratio       = track_range > 0 ? list.scrollTop / max_scroll : 0;
        this.scrollbar_thumb_dom.style.top    = Math.round( ratio * track_range ) + "px";
        this._renderScrollbarTicks();
    },

    // Labels 0 … total répartis le long de la piste, pas « beau » 1/2/2,5/5×10ⁿ
    _renderScrollbarTicks: function () {
        let total  = this._list_progressive ? this._list_progressive.items.length : 0;
        let height = this.scrollbar_ticks_dom.clientHeight;
        let key    = total + "x" + height;
        if ( key === this._scrollbar_ticks_key ) {
            return;
        }
        this._scrollbar_ticks_key = key;
        SERVICE.DOM.empty( this.scrollbar_ticks_dom );
        if ( total <= 0 || height <= 0 ) {
            return;
        }
        let step  = this._niceScrollbarStep( total / 4 );
        let ticks = [];
        for ( let value = 0; value < total; value += step ) {
            ticks.push( value );
        }
        ticks.push( total );
        for ( let t = 0, _size_t = ticks.length; t < _size_t; t++ ) {
            SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "div", { class: "library-scrollbar-tick", style: "top:" + Math.round( ticks[ t ] / total * height ) + "px" }, String( ticks[ t ] ) ),
                this.scrollbar_ticks_dom
            );
        }
    },

    _niceScrollbarStep: function ( raw_step ) {
        if ( raw_step < 1 ) {
            return 1;
        }
        let pow10 = Math.pow( 10, Math.floor( Math.log10( raw_step ) ) );
        let norm  = raw_step / pow10;
        let nice  = norm <= 1 ? 1 : norm <= 2 ? 2 : norm <= 2.5 ? 2.5 : norm <= 5 ? 5 : 10;
        return Math.max( 1, Math.round( nice * pow10 ) );
    },

    _renderList: function ( list_dom, character_object ) {
        SERVICE.DOM.empty( list_dom );
        if ( this.current_subject === "feats" ) {
            this._renderFeatList( list_dom, character_object );
        }
        else if ( this.current_subject === "spells" ) {
            this._renderSpellList( list_dom, character_object );
        }
        else if ( this.current_subject === "archetypes" ) {
            this._renderArchetypeList( list_dom, character_object );
        }
        else if ( this.current_subject === "historics" ) {
            this._renderHistoricList( list_dom, character_object );
        }
        else if ( this.current_subject === "actions" ) {
            this._renderActionList( list_dom, character_object );
        }
        else {
            this._renderStuffList( list_dom, character_object );
        }
        if ( this.current_subject !== "spells" ) {
            this._current_filtered_spells = [];
        }
        this._updateAddAllButton();
        this._updateListScrollbar();
    },

    // Chargement progressif : la liste se rend par lots de
    // LIBRARY.RENDER_BATCH_SIZE cartes — le lot suivant se charge quand le
    // sentinel approche du viewport (scroll, phase capture : n'importe quel
    // ancêtre scrollable) ou au clic sur le sentinel (tactile). Un filtre ou
    // un sujet qui change re-rend depuis le premier lot.
    _renderInBatches: function ( list_dom, items, build_fn ) {
        let self  = this;
        let state = {
            list_dom : list_dom,
            items    : items,
            build_fn : build_fn,
            index    : 0,
            done     : false,
            sentinel : null
        };
        this._list_progressive = state;
        if ( this._list_scroll_handler ) {
            document.removeEventListener( "scroll", this._list_scroll_handler, true );
            this._list_scroll_handler = null;
        }
        if ( !items.length ) {
            this._renderEmpty( list_dom );
            return;
        }
        state.sentinel = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-list-sentinel" } ), list_dom );
        state.sentinel.addEventListener( "click", function () {
            self._renderNextBatch();
        } );
        this._list_scroll_handler = function () {
            if ( state.done || !state.sentinel.isConnected ) {
                document.removeEventListener( "scroll", self._list_scroll_handler, true );
                self._list_scroll_handler = null;
                return;
            }
            if ( state.sentinel.getBoundingClientRect().top < window.innerHeight + 400 ) {
                self._renderNextBatch();
            }
        };
        document.addEventListener( "scroll", this._list_scroll_handler, true );
        this._renderNextBatch();
    },

    _renderNextBatch: function () {
        let state = this._list_progressive;
        if ( !state || state.done ) {
            return;
        }
        let end = Math.min( state.index + LIBRARY.RENDER_BATCH_SIZE, state.items.length );
        for ( ; state.index < end; state.index++ ) {
            state.build_fn( state.list_dom, state.items[ state.index ] );
        }
        // Le sentinel reste en queue de liste
        state.list_dom.appendChild( state.sentinel );
        let remaining = state.items.length - state.index;
        if ( remaining > 0 ) {
            state.sentinel.textContent = "Afficher " + Math.min( LIBRARY.RENDER_BATCH_SIZE, remaining ) + " de plus (" + remaining + " restants)";
            state.sentinel.classList.remove( "done" );
        }
        else {
            state.done               = true;
            state.sentinel.textContent = state.items.length + " résultats";
            state.sentinel.classList.add( "done" );
            if ( this._list_scroll_handler ) {
                document.removeEventListener( "scroll", this._list_scroll_handler, true );
                this._list_scroll_handler = null;
            }
        }
        this._updateListScrollbar();
    },

    _renderFeatList: function ( list_dom, character_object ) {
        let sources = this._collectFeatSources( character_object );
        // Les dons actifs du personnage portent le tag « Mon don » sur leur
        // carte (cochée ou non la case « Mes dons ») ; la case cochée filtre
        // la liste sur eux et enlève la chip de type et les tags
        let active_names = {};
        let active_feats = character_object && character_object.getGifts() ? character_object.getGifts().getActiveFeats( character_object ) : [];
        for ( let a = 0, _size_a = active_feats.length; a < _size_a; a++ ) {
            active_names[ active_feats[ a ].name ] = true;
        }
        let filtered = [];
        for ( let i = 0, _size_i = sources.length; i < _size_i; i++ ) {
            let source = sources[ i ];
            if ( !source || !source.feat || !source.feat.name ) {
                continue;
            }
            if ( this.owned_only ) {
                if ( !active_names[ source.feat.name ] ) {
                    continue;
                }
            }
            else {
                if ( this.filter_type !== LIBRARY.FILTER_ALL_KEY && source.type !== this.filter_type ) {
                    continue;
                }
                if ( !this._matchesSearchFilters( source.feat.name, source.feat.traits, this._formatFeatSearchText( source.feat.description ), this._getFeatTypeText( source ), "" ) ) {
                    continue;
                }
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
        let self          = this;
        let current_level = null;
        let section       = null;
        this._renderInBatches( list_dom, filtered, function ( parent, source ) {
            let level = parseInt( source.feat.level ) || 0;
            if ( level !== current_level ) {
                current_level = level;
                section       = self._addSection( parent, "Niveau " + level );
            }
            self._buildFeatCard( section, source, active_names );
        } );
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
        if ( !character_object || !character_object.getArchetype ) {
            return false;
        }
        return character_object.getArchetype().getValue() === archetype_name;
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
        // The Tradition and Rank chips cross (AND) with the search tags
        let tradition_source_key = null;
        if ( this.spell_tradition_filter !== LIBRARY.FILTER_ALL_KEY ) {
            let tradition_data = SPELL.getTraditionDataByKey( this.spell_tradition_filter );
            tradition_source_key = tradition_data ? tradition_data.source_key : null;
        }
        let rank_filter = this.spell_rank_filter !== LIBRARY.FILTER_ALL_KEY ? parseInt( this.spell_rank_filter, 10 ) : null;
        let filtered = [];
        for ( let i = 0, _size_i = spells.length; i < _size_i; i++ ) {
            if ( tradition_source_key && ( spells[ i ].traditions || [] ).indexOf( tradition_source_key ) === -1 ) {
                continue;
            }
            if ( rank_filter !== null && spells[ i ].rank !== rank_filter ) {
                continue;
            }
            // The content of a spell rides with its list entry, its traits
            // come from the by-name dataset accessor (a full-map scan) :
            // never fetched while no filter is posed
            if ( this.search_filters.length ) {
                let spell_data = SPELLS.getSpellData( spells[ i ].name );
                let key_line   = spells[ i ].cost_label !== SPELL.NO_COST_LABEL ? "Coût " + spells[ i ].cost_label : "";
                // The rank and the tradition labels ride the searchable type
                // text ("rang 1" and "divin" filter from the search zone)
                let type_text  = SPELLS.getFullTypeLabel( spells[ i ].name ) + " rang " + spells[ i ].rank;
                for ( let t = 0, _size_t = ( spells[ i ].traditions || [] ).length; t < _size_t; t++ ) {
                    type_text += " " + SPELLS.getTraditionLabelOfSource( spells[ i ].traditions[ t ] );
                }
                if ( !this._matchesSearchFilters( spells[ i ].name, spell_data ? spell_data[ "traits" ] : [], spells[ i ].description, type_text, key_line ) ) {
                    continue;
                }
            }
            filtered.push( spells[ i ] );
        }
        // The names of the filtered spells and of each section feed the
        // mass-add buttons (« Tout ajouter » and the « + » of a section)
        this._current_filtered_spells = [];
        this._section_spell_names     = {};
        for ( let i = 0, _size_i = filtered.length; i < _size_i; i++ ) {
            let entry_label = this._getSpellSectionLabel( filtered[ i ] );
            this._current_filtered_spells.push( filtered[ i ].name );
            if ( !this._section_spell_names[ entry_label ] ) {
                this._section_spell_names[ entry_label ] = [];
            }
            this._section_spell_names[ entry_label ].push( filtered[ i ].name );
        }
        let self                  = this;
        let current_section_label = null;
        let section               = null;
        this._renderInBatches( list_dom, filtered, function ( parent, spell_list_entry ) {
            let section_label = self._getSpellSectionLabel( spell_list_entry );
            if ( section_label !== current_section_label ) {
                current_section_label = section_label;
                section               = self._addSection( parent, section_label, true );
            }
            self._buildSpellCard( section, spell_list_entry );
        } );
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

    // The compendium actions, deduplicated by name like getKnownActions but
    // keeping the full entries (traits, cost, description ride the card)
    _collectActionEntries: function () {
        let to_return = [];
        let seen      = {};
        let _keys     = Object.keys( OBJECT.COMPENDIUM );
        for ( let i = 0, _size_i = _keys.length; i < _size_i; i++ ) {
            let object_data = OBJECT.COMPENDIUM[ _keys[ i ] ];
            if ( !object_data || object_data.category !== "action" || !object_data.text ) {
                continue;
            }
            let seen_key = object_data.text.toLowerCase();
            if ( seen[ seen_key ] ) {
                continue;
            }
            seen[ seen_key ] = true;
            to_return.push( object_data );
        }
        to_return.sort( function ( entry_a, entry_b ) {
            return entry_a.text.localeCompare( entry_b.text, "fr" );
        } );
        return to_return;
    },

    // The French label of an action cost key, for the section, the card tag
    // and the searchable type text ("réaction" filters the reactions)
    _getActionCostLabel: function ( cost_key ) {
        if ( !cost_key ) {
            return LIBRARY.ACTION_NO_COST_LABEL;
        }
        for ( let c = 0, _size_c = LIBRARY.ACTION_COST_SECTIONS.length; c < _size_c; c++ ) {
            if ( LIBRARY.ACTION_COST_SECTIONS[ c ][ "key" ] === cost_key ) {
                return LIBRARY.ACTION_COST_SECTIONS[ c ][ "label" ];
            }
        }
        return cost_key;
    },

    _getActionCostOrder: function ( cost_key ) {
        for ( let c = 0, _size_c = LIBRARY.ACTION_COST_SECTIONS.length; c < _size_c; c++ ) {
            if ( LIBRARY.ACTION_COST_SECTIONS[ c ][ "key" ] === cost_key ) {
                return c;
            }
        }
        return LIBRARY.ACTION_COST_SECTIONS.length;
    },

    _renderActionList: function ( list_dom, character_object ) {
        let actions  = this._collectActionEntries();
        let filtered = [];
        for ( let i = 0, _size_i = actions.length; i < _size_i; i++ ) {
            let entry      = actions[ i ];
            let cost_label = this._getActionCostLabel( entry.action_cost );
            let key_line   = entry.action_cost ? "Coût " + OBJECT.ACTION_COST_LABELS[ entry.action_cost ] : "";
            if ( !this._matchesSearchFilters( entry.text, entry.traits, entry.description, cost_label, key_line ) ) {
                continue;
            }
            filtered.push( entry );
        }
        let self = this;
        filtered.sort( function ( entry_a, entry_b ) {
            let order_a = self._getActionCostOrder( entry_a.action_cost || "" );
            let order_b = self._getActionCostOrder( entry_b.action_cost || "" );
            if ( order_a !== order_b ) {
                return order_a - order_b;
            }
            return entry_a.text.localeCompare( entry_b.text, "fr" );
        } );
        let current_section_label = null;
        let section               = null;
        this._renderInBatches( list_dom, filtered, function ( parent, entry ) {
            let section_label = self._getActionCostLabel( entry.action_cost || "" );
            if ( section_label !== current_section_label ) {
                current_section_label = section_label;
                section               = self._addSection( parent, section_label );
            }
            self._buildActionCard( section, entry );
        } );
    },

    _buildActionCard: function ( parent, entry ) {
        let tags = [ { "label": this._getActionCostLabel( entry.action_cost || "" ), "css": "library-tag--action" } ];
        if ( entry.traits && entry.traits.length ) {
            for ( let t = 0, _size_t = entry.traits.length; t < _size_t; t++ ) {
                tags.push( { "label": entry.traits[ t ], "css": "library-tag--trait" } );
            }
        }
        this._buildCard( parent, {
            "name"       : entry.text,
            "tags"       : tags,
            "key_line"   : entry.action_cost ? "Coût " + OBJECT.ACTION_COST_LABELS[ entry.action_cost ] : null,
            "description": this._formatScrapedDescription( entry.description )
        } );
    },

    _renderStuffList: function ( list_dom, character_object ) {
        let self     = this;
        let filtered = [];
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
            filtered.push( entry );
        }
        this._renderInBatches( list_dom, filtered, function ( parent, entry ) {
            self._buildStuffCard( parent, entry );
        } );
    },

    //********************************************  CARDS  **************************************************//

    // One sectionless list, alphabetical : the sections by level of the
    // feats subject carry nothing (the scraped level of an archetype is
    // almost always 0, user decision). Every displayed line is searchable :
    // the description, the traits AND the feat lines the card displays
    _renderArchetypeList: function ( list_dom, character_object ) {
        let archetypes = [];
        for ( let i = 0, _size_i = ARCHETYPES.ENUM.length; i < _size_i; i++ ) {
            let entry = ARCHETYPES.ENUM[ i ];
            if ( !entry || !entry.name ) {
                continue;
            }
            let search_text = this._formatScrapedDescription( entry.description ) + " " + ARCHETYPES.getFeatsSearchText( entry.name );
            if ( !this._matchesSearchFilters( entry.name, entry.traits, search_text, "", "" ) ) {
                continue;
            }
            archetypes.push( entry );
        }
        archetypes.sort( function ( entry_a, entry_b ) {
            return ( entry_a.name || "" ).localeCompare( entry_b.name || "" );
        } );
        let self = this;
        this._renderInBatches( list_dom, archetypes, function ( parent, entry ) {
            self._buildArchetypeCard( parent, entry, character_object );
        } );
    },

    // The archetype card : traits, description clampée, its feats one per
    // line. The « + » poses the archetype on the first class (its second
    // click empties it, the Aucun of the old popup), the sheet lands on
    // the Progression of its sections (user decision)
    _buildArchetypeCard: function ( parent, entry, character_object ) {
        let owned       = character_object && character_object.getArchetypeHistory().getArchetypeName( character_object ) === entry.name;
        let card_data   = {
            "name"       : entry.name,
            "tags"       : [],
            "description": this._formatScrapedDescription( entry.description ),
            "add"        : {
                class       : "library-card-add",
                title       : owned ? "Retirer l'archétype" : "Choisir l'archétype",
                "data-value": entry.name,
                onclick     : "MANAGER.EventManagerV2.doActionAfter(event,'event__archetype__select',{'param__archetype__name':this.getAttribute('data-value')});CHARACTER.LibraryWindow.goToSheet('" + CHARACTER.LevelUpWindow.NAME + "')"
            }
        };
        if ( entry.traits && entry.traits.length ) {
            for ( let t = 0, _size_t = entry.traits.length; t < _size_t; t++ ) {
                card_data[ "tags" ].push( { "label": entry.traits[ t ], "css": "library-tag--trait" } );
            }
        }
        if ( owned ) {
            card_data[ "tags" ].push( { "label": "Mon archétype", "css": "library-tag--archetype-name" } );
        }
        let card = this._buildCard( parent, card_data );
        this._buildArchetypeFeatsLines( card, entry );
    },

    // The feats of the archetype, one point per line under the description.
    // A feat indexed in the compendium carries its information link (the
    // uuid rides a data attribute, read at click time — never inline), an
    // unknown name stays plain text
    _buildArchetypeFeatsLines: function ( card, entry ) {
        if ( !entry.skills || !entry.skills.length ) {
            return;
        }
        let content = card.querySelector( ".library-card-content" );
        if ( !content ) {
            return;
        }
        for ( let i = 0, _size_i = entry.skills.length; i < _size_i; i++ ) {
            let feat       = entry.skills[ i ];
            let line       = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-card-key-line" } ), content );
            let feat_entry = OBJECT.getFeatCompendiumEntry( feat.name );
            if ( feat_entry ) {
                SERVICE.DOM.addElementTo(
                    SERVICE.DOM.createElement( "span", {
                        class       : "library-card-feat-link gs-link-information",
                        "data-uuid" : feat_entry.id,
                        title       : "Informations du don",
                        onclick     : "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information',{'param__object__uuid':this.getAttribute('data-uuid'),'param__object__label':this.textContent})"
                    }, feat.name ),
                    line
                );
            }
            else {
                SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {}, feat.name ), line );
            }
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {}, " (Don " + ( feat.level || 0 ) + ")" ), line );
        }
    },

    // One sectionless list, alphabetical, the choice rides the « + » of the
    // card. Every displayed line is searchable (the skills, the skill feat
    // AND the characteristic bonuses line)
    _renderHistoricList: function ( list_dom, character_object ) {
        let historics = [];
        for ( let i = 0, _size_i = HISTORICS.ENUM.length; i < _size_i; i++ ) {
            let entry = HISTORICS.ENUM[ i ];
            if ( !entry || !entry.name ) {
                continue;
            }
            let search_text = this._formatScrapedDescription( entry.description ) + " " + this._getHistoricLines( entry ).join( " " );
            if ( !this._matchesSearchFilters( entry.name, [], search_text, "", "" ) ) {
                continue;
            }
            historics.push( entry );
        }
        historics.sort( function ( entry_a, entry_b ) {
            return ( entry_a.name || "" ).localeCompare( entry_b.name || "" );
        } );
        let self = this;
        this._renderInBatches( list_dom, historics, function ( parent, entry ) {
            self._buildHistoricCard( parent, entry, character_object );
        } );
    },

    // The historic card : its lines render ONE point per line under the
    // description. The « + » poses the historic of the character (its
    // second click empties it), the sheet lands on the Général of its field
    // (user decision — display only, the bonuses ride the Ajustements tab
    // by hand)
    _buildHistoricCard: function ( parent, entry, character_object ) {
        let owned     = character_object && character_object.getHistoric().getValue() === entry.name;
        let card_data = {
            "name"       : entry.name,
            "tags"       : [],
            "description": this._formatScrapedDescription( entry.description ),
            "add"        : {
                class       : "library-card-add",
                title       : owned ? "Retirer l'historique" : "Choisir l'historique",
                "data-value": entry.name,
                onclick     : "MANAGER.EventManagerV2.doActionAfter(event,'event__historic__select',{'param__historic__name':this.getAttribute('data-value')});CHARACTER.LibraryWindow.goToSheet('" + CHARACTER.GeneralWindow.NAME + "')"
            }
        };
        if ( owned ) {
            card_data[ "tags" ].push( { "label": "Mon historique", "css": "library-tag--owned" } );
        }
        let card    = this._buildCard( parent, card_data );
        let content = card.querySelector( ".library-card-content" );
        let lines   = this._getHistoricLines( entry );
        for ( let l = 0, _size_l = lines.length; l < _size_l; l++ ) {
            if ( lines[ l ].indexOf( "Don : " ) === 0 ) {
                this._buildHistoricGiftLine( content, entry.gift_skill );
                continue;
            }
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-card-key-line" }, lines[ l ] ), content );
        }
    },

    // La ligne des dons de l'historique : chaque nom porte son lien de popup
    // feat quand les donnees l'indexent (skill, sa race sinon — un nom hors
    // dataset reste texte brut). Le nom ne s'embarque JAMAIS inline (les dons
    // portent des apostrophes), il part par data attribute au clic
    _buildHistoricGiftLine: function ( content, gift_names ) {
        if ( !gift_names || !gift_names.length ) {
            return;
        }
        let line = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-card-key-line" } ), content );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {}, "Don : " ), line );
        for ( let g = 0, _size_g = gift_names.length; g < _size_g; g++ ) {
            if ( g > 0 ) {
                SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {}, ", " ), line );
            }
            let feat_name     = gift_names[ g ];
            let feat_category = DON.getFeatInformation( "skill", feat_name ) ? "skill" : ( DON.getFeatInformation( "race", feat_name ) ? "race" : null );
            if ( !feat_category ) {
                SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", {}, feat_name ), line );
                continue;
            }
            SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "span", {
                    class       : "library-card-gift-link gs-link-information",
                    "data-value": feat_name,
                    "data-category": feat_category,
                    title       : "Informations du don",
                    onclick     : "MANAGER.EventManagerV2.doActionAfter(event,'event__show_information__feat',{'param__feat_category':this.getAttribute('data-category'),'param__feat_name':this.getAttribute('data-value')})"
                }, feat_name ),
                line
            );
        }
    },

    // The displayed lines of a historic : its qualified skills, its skill
    // feat and its characteristic bonuses (FRE reads as the free boost)
    _getHistoricLines: function ( entry ) {
        let to_return = [];
        if ( entry.skills ) {
            for ( let i = 0, _size_i = entry.skills.length; i < _size_i; i++ ) {
                let skill = entry.skills[ i ];
                to_return.push( skill.label + ( skill.qualifier ? " " + skill.qualifier : "" ) + " — " + skill.characteristic );
            }
        }
        if ( entry.gift_skill && entry.gift_skill.length ) {
            to_return.push( "Don : " + entry.gift_skill.join( ", " ) );
        }
        let bonus_choices = [];
        if ( entry.characteristics_bonus && entry.characteristics_bonus.choice ) {
            for ( let c = 0, _size_c = entry.characteristics_bonus.choice.length; c < _size_c; c++ ) {
                bonus_choices.push( entry.characteristics_bonus.choice[ c ] === "FRE" ? "libre" : entry.characteristics_bonus.choice[ c ] );
            }
        }
        if ( bonus_choices.length ) {
            to_return.push( "Bonus : " + bonus_choices.join( " ou " ) );
        }
        return to_return;
    },

    // with_add poses a « + » on the section header (Sorts subject) : it mass
    // adds every spell of the section to the repertoire
    _addSection: function ( parent, label, with_add ) {
        let self    = this;
        let section = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-level-section" } ), parent );
        let header  = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-level-header" } ), section );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "library-level-header-label" }, label ), header );
        if ( with_add ) {
            let add_btn = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", {
                class        : "library-section-add",
                title        : "Ajouter toute la section au répertoire",
                "data-section": label
            }, "+" ), header );
            add_btn.addEventListener( "click", function () {
                self._addSpellSection( label );
            } );
        }
        return section;
    },

    _renderEmpty: function ( parent ) {
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-empty" }, "Aucun résultat." ), parent );
    },

    // The card owns the whole information (description inline) : no
    // information popup, the "?" of the old Dons tab is gone (user
    // decision — the popups stay reachable from their own windows)
    _buildCard: function ( parent, card_data ) {
        // La description se rend ENTIERE sous la ligne du haut, sur toute la
        // largeur : pas de clamp, pas d'indicateur « suite », la carte n'est
        // pas cliquable (le « + » a son propre handler)
        let card    = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-card" } ), parent );
        let content = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-card-content" } ), card );
        let top_line = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-card-top-line" } ), content );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "library-card-name" }, card_data[ "name" ] ), top_line );
        let tags_dom = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "library-card-tags" } ), top_line );
        for ( let t = 0, _size_t = card_data[ "tags" ].length; t < _size_t; t++ ) {
            let tag_attributes = { class: "library-tag " + ( card_data[ "tags" ][ t ][ "css" ] || "" ) };
            if ( card_data[ "tags" ][ t ][ "data-value" ] ) {
                tag_attributes[ "data-value" ] = card_data[ "tags" ][ t ][ "data-value" ];
            }
            SERVICE.DOM.addElementTo(
                SERVICE.DOM.createElement( "span", tag_attributes, card_data[ "tags" ][ t ][ "label" ] ),
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

    _buildFeatCard: function ( parent, source, active_names ) {
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
        // Un don actif du personnage porte le tag « Mon don » (même classe
        // que « Mon historique »), cochée ou non la case « Mes dons »
        if ( active_names && active_names[ feat.name ] ) {
            tags.push( { "label": "Mon don", "css": "library-tag--owned" } );
        }
        this._buildCard( parent, {
            "name"       : feat.name,
            "tags"       : tags,
            "required"   : Array.isArray( feat.required ) ? feat.required : ( feat.required ? this._formatRequired( feat.required ) : [] ),
            "description": this._formatScrapedDescription( feat.description )
        } );
    },

    _buildSpellCard: function ( parent, spell_list_entry ) {
        let spell_data  = SPELLS.getSpellData( spell_list_entry.name );
        let tags        = [
            { "label": SPELLS.getFullTypeLabel( spell_list_entry.name ), "css": "library-tag--spell" },
            { "label": "Rang " + spell_list_entry.rank, "css": "library-tag--rank" }
        ];
        // Each magic tradition rides its own tag, keyed Tradition_* (the
        // data-value carries the tag key, the label speaks French)
        for ( let t = 0, _size_t = ( spell_list_entry.traditions || [] ).length; t < _size_t; t++ ) {
            tags.push( {
                "label"     : SPELLS.getTraditionLabelOfSource( spell_list_entry.traditions[ t ] ),
                "css"       : "library-tag--tradition",
                "data-value": SPELLS.getTraditionKeyOfSource( spell_list_entry.traditions[ t ] )
            } );
        }
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

CHARACTER.LibraryWindow.pending_subject_key = null;
CHARACTER.LibraryWindow.pending_filters     = null;

// The Général Archétype field lands the sheet HERE : subject Archétypes,
// the posed filter rides the current value — empty when unset, the name of
// the archeype otherwise (user decision). The pending applies ONCE (the
// computeContent of the navigation consumes it), the visits afterwards
// keep the state the user left
CHARACTER.LibraryWindow.goToArchetypesSubject = function ( character_object ) {
    if ( !character_object ) {
        return;
    }
    let archetype_name = character_object.getArchetypeHistory().getArchetypeName( character_object );
    CHARACTER.LibraryWindow.pending_subject_key = "archetypes";
    CHARACTER.LibraryWindow.pending_filters     = archetype_name ? [ archetype_name ] : [];
    CHARACTER.LibraryWindow.goToSheet( CHARACTER.LibraryWindow.NAME );
};

// The « + » of the Équipement tab lands the sheet HERE : subject
// Équipement, no posed filter (the full scraped dataset)
CHARACTER.LibraryWindow.goToStuffsSubject = function () {
    CHARACTER.LibraryWindow.pending_subject_key = "stuffs";
    CHARACTER.LibraryWindow.pending_filters     = [];
    CHARACTER.LibraryWindow.goToSheet( CHARACTER.LibraryWindow.NAME );
};

// The Général Historique field lands the sheet HERE : subject Historiques,
// the posed filter rides the current value — empty when unset, the name of
// the historic otherwise (same contract as the archetypes)
CHARACTER.LibraryWindow.goToHistoricsSubject = function ( character_object ) {
    if ( !character_object ) {
        return;
    }
    let historic_name = character_object.getHistoric().getValue();
    CHARACTER.LibraryWindow.pending_subject_key = "historics";
    CHARACTER.LibraryWindow.pending_filters     = historic_name ? [ historic_name ] : [];
    CHARACTER.LibraryWindow.goToSheet( CHARACTER.LibraryWindow.NAME );
};
