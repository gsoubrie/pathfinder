"use strict";
/**
 * @class CLASSES.Classes
 * @extends OBJECT.InterfaceContainerHtml
 */
CLASSES.Classes           = function () {
    this.init();
};
CLASSES.Classes.prototype = {
    init: function () {
        this.initContents();
        for ( let i = 0, _size_i = CLASSES.ENUM.length; i < _size_i; i++ ) {
            this.add( new CLASSES.ClassPopup( CLASSES.ENUM[ i ] ) );
        }
    }
};

SERVICE.CLASS.addPrototype( CLASSES.Classes, OBJECT.InterfaceContainerHtml );

/**
 * @class CLASSES.ClassPopup
 * @extends CLASSES.Class
 */
CLASSES.ClassPopup           = function ( data ) {
    this.init( data );
};
CLASSES.ClassPopup.prototype = {
    init: function ( data ) {
        this.updateData( data );
    },

    //********************************************  DATA   **************************************************//

    setData: function ( key, value ) {
        switch ( key ) {
            case "name":
                this[ "name" ] = value;
                this[ "key" ]  = value;
                break;
            case "general_desc":
            case "life_point_by_level":
            case "desc_fight":
            case "desc_socially":
            case "desc_exploration":
            case "desc_interlude":
            case "desc_you_could":
            case "desc_probably_others":
            case "mastery":
            case "capacity_by_level":
            case "abilities":
                this[ key ] = value;
                break;
            case "characteristics_bonus":
                this[ key ] = new CHARACTERISTICS.Bonus( true );
                this[ key ].initWithData( value );
                break;
            default:
                console.warn( "[IGNORED DATA]", key );
        }
    },

    //********************************************  HTML HELPERS   **************************************************//
    _createSection: function ( titleText, contentEl, cssClass ) {
        let section = SERVICE.DOM.createElement( "div", { class: "class-section " + ( cssClass || "" ) } );
        if ( titleText ) {
            let title = SERVICE.DOM.createElement( "div", { class: "class-section-title" } );
            title.textContent = titleText;
            SERVICE.DOM.addElementTo( title, section );
        }
        if ( contentEl ) {
            SERVICE.DOM.addElementTo( contentEl, section );
        }
        return section;
    },

    /**
     * Crée une ligne d'information horizontale label / valeur
     */
    _createInfoRow: function ( label, value ) {
        let row = SERVICE.DOM.createElement( "div", { class: "class-info-row" } );
        let lbl = SERVICE.DOM.createElement( "span", { class: "class-info-label" } );
        lbl.textContent = label;
        let val = SERVICE.DOM.createElement( "span", { class: "class-info-value" } );
        val.textContent = value;
        SERVICE.DOM.addElementTo( lbl, row );
        SERVICE.DOM.addElementTo( val, row );
        return row;
    },
    computeHTMLMasteryRow: function ( level, description ) {
        let to_return  = SERVICE.DOM.createElement( "div", { class: "class-mastery-row" } );
        let mastery   = MASTERY.getByShort( level );
        SERVICE.DOM.addElementTo(SERVICE.DOM.createElement( "span", { class: "class-mastery-badge " + mastery.css }, mastery.label ), to_return);
        SERVICE.DOM.addElementTo(SERVICE.DOM.createElement( "span", { class: "class-mastery-desc" } , description), to_return);
        return to_return;
    },

    //********************************************  HTML SECTIONS   **************************************************//

     computeHTMLHeader: function () {
        let to_return = SERVICE.DOM.createElement( "div", { class: "class-header-block" } );

        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "class-general-desc" } , this.general_desc), to_return );

        let dom_stats = SERVICE.DOM.addElementTo(SERVICE.DOM.createElement( "div", { class: "class-quick-stats" } ), to_return );
        
        let dom_stats_hp = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "class-stat-chip class-stat-hp" } ), dom_stats );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stat-chip-number" } , this.life_point_by_level), dom_stats_hp );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stat-chip-label" } , "PV / niveau"), dom_stats_hp );

        let perception_mastery   = MASTERY.getByShort( this.mastery.perception );
        let dom_perception = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "class-stat-chip class-stat-mastery " + perception_mastery.css } ), dom_stats );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stat-chip-label" } , "Perception"), dom_perception );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "stat-chip-value" } , perception_mastery.label), dom_perception );
    

        SERVICE.DOM.addElementTo( dom_stats, to_return );
        return to_return;
    },

    /**
     * Section Rôles (combat, social, exploration, interlude)
     */
     computeHTMLRoles: function () {

        let to_return = SERVICE.DOM.createElement( "div", { class: "class-section" } );
        SERVICE.DOM.addElementTo(SERVICE.DOM.createElement( "div", { class: "class-section-title" }, "Rôles" ), to_return);

        let grid = SERVICE.DOM.addElementTo(SERVICE.DOM.createElement( "div", { class: "class-roles-grid" } ), to_return);
        let roles = [
            { icon: "⚔️", label: "Combat",       desc: this.desc_fight       },
            { icon: "🗣️", label: "Social",       desc: this.desc_socially    },
            { icon: "🧭", label: "Exploration",  desc: this.desc_exploration },
            { icon: "🏕️", label: "Intermède",    desc: this.desc_interlude   }
        ];
        roles.forEach( function ( role ) {
            let card  = SERVICE.DOM.addElementTo(SERVICE.DOM.createElement( "div", { class: "class-role-card" } ), grid);
            let head  = SERVICE.DOM.addElementTo(SERVICE.DOM.createElement( "div", { class: "class-role-head" } ), card);
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "class-role-icon" }, role.icon ), head);
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "class-role-label" } , role.label), head);
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "p", { class: "class-role-desc" }, role.desc ), card);
        } );
        return to_return;
    },


     computeHTMLPersonality: function (  ) {

        let to_return = SERVICE.DOM.createElement( "div", { class: "class-section" } );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "class-section-title" }, "Personnalité" ), to_return);


        let wrap = SERVICE.DOM.addElementTo(SERVICE.DOM.createElement( "div", { class: "class-personality-wrap" } ), to_return);

        let buildList = function ( items, heading, iconCss ) {
            if ( !items || !items.length ) return;
            let block  = SERVICE.DOM.addElementTo(SERVICE.DOM.createElement( "div", { class: "class-personality-block" } ), wrap);
            SERVICE.DOM.addElementTo(SERVICE.DOM.createElement( "div", { class: "class-personality-heading " + iconCss } , heading), block);
            let ul = SERVICE.DOM.addElementTo(SERVICE.DOM.createElement( "ul", { class: "class-personality-list" } ), block);
            items.forEach( function ( item ) {
                SERVICE.DOM.addElementTo(SERVICE.DOM.createElement( "li", {}, item ), ul);
            } );
        };

        buildList( this.desc_you_could,       "Vous pourriez…",          "heading-you"    );
        buildList( this.desc_probably_others, "Les autres pensent…",     "heading-others" );

        return to_return;
    },

    /**
     * Section Maîtrises
     */
     computeHTMLMastery: function () {
        let self = this;

        let to_return = SERVICE.DOM.createElement( "div", { class: "class-section" } );
        SERVICE.DOM.addElementTo(SERVICE.DOM.createElement( "div", { class: "class-section-title" }, "Maîtrises" ), to_return);

        let grid = SERVICE.DOM.addElementTo(SERVICE.DOM.createElement( "div", { class: "class-mastery-grid" } ), to_return);

        let buildGroup = function ( groupTitle, items ) {
            if ( !items || !items.length ) return;
            let group = SERVICE.DOM.addElementTo(SERVICE.DOM.createElement( "div", { class: "class-mastery-group" } ), grid );
            let gh    =SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "class-mastery-group-title" }, groupTitle ), group);
            items.forEach( function ( item ) {
                SERVICE.DOM.addElementTo( self.computeHTMLMasteryRow( item.level, item.description ), group );
            } );
        };

        buildGroup( "Jets de sauvegarde", this.mastery.saves    );
        buildGroup( "Compétences",        this.mastery.skills   );
        buildGroup( "Attaques",           this.mastery.attacks  );
        buildGroup( "Défenses",           this.mastery.defenses );
        buildGroup( "Sorts",              this.mastery.spells   );

        // DD de classe + Rareté
        if ( this.mastery.class_dc || this.mastery.rarity ) {
            let extra = SERVICE.DOM.createElement( "div", { class: "class-mastery-group" } );
            let eh    = SERVICE.DOM.createElement( "div", { class: "class-mastery-group-title" } );
            eh.textContent = "Divers";
            SERVICE.DOM.addElementTo( eh, extra );
            if ( this.mastery.class_dc ) {
                SERVICE.DOM.addElementTo( self.computeHTMLMasteryRow( this.mastery.class_dc, "DD de classe" ), extra );
            }
            if ( this.mastery.rarity ) {
                let rarRow = SERVICE.DOM.createElement( "div", { class: "class-mastery-row" } );
                let rarVal = SERVICE.DOM.createElement( "span", { class: "class-mastery-desc" } );
                rarVal.textContent = "Rareté : " + this.mastery.rarity;
                SERVICE.DOM.addElementTo( rarVal, rarRow );
                SERVICE.DOM.addElementTo( rarRow, extra );
            }
            SERVICE.DOM.addElementTo( extra, grid );
        }

        SERVICE.DOM.addElementTo( grid, to_return );
    },

     computeHTMLCapacityByLevel: function () {

        let to_return = SERVICE.DOM.createElement( "div", { class: "class-section" } );
        SERVICE.DOM.addElementTo(SERVICE.DOM.createElement( "div", { class: "class-section-title" } , "Capacités par niveau"), to_return);

        let timeline = SERVICE.DOM.addElementTo(SERVICE.DOM.createElement( "div", { class: "class-timeline" } ), to_return);
        this.capacity_by_level.forEach( function ( caps, idx ) {
            let row   = SERVICE.DOM.addElementTo(SERVICE.DOM.createElement( "div", { class: "class-timeline-row" } ),timeline);
            SERVICE.DOM.addElementTo(SERVICE.DOM.createElement( "div", { class: "class-timeline-level" } , "Niv. " + ( idx + 1 )), row);
            SERVICE.DOM.addElementTo(SERVICE.DOM.createElement( "div", { class: "class-timeline-dot" } ), row);
            SERVICE.DOM.addElementTo(SERVICE.DOM.createElement( "div", { class: "class-timeline-body" }, caps ), row);
        } );
        return to_return;
    },

     computeHTMLAbilities: function () {
        let keys = Object.keys( this.abilities );
        let to_return = SERVICE.DOM.createElement( "div", { class: "class-section" } );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "class-section-title" },  "Capacités de classe" ), to_return);
        let list = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "class-abilities-list" } ), to_return);

        keys.forEach( ( key ) => {
            let ability = this.abilities[ key ];
            let card    = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "class-ability-card" } ), list);

            let head = SERVICE.DOM.addElementTo(SERVICE.DOM.createElement( "div", { class: "class-ability-head" } ), card);
            SERVICE.DOM.addElementTo(SERVICE.DOM.createElement( "div", { class: "class-ability-name" }, ability.name || key ), head);
            if ( ability.level ) {
                SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "class-ability-level" }, "Niv. " + ability.level ), head);
            }

            if ( ability.description && ability.description.length ) {
                let descWrap = SERVICE.DOM.addElementTo(SERVICE.DOM.createElement( "div", { class: "class-ability-descs" } ), card);
                ability.description.forEach( function ( line ) {
                    SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "p", { class: "class-ability-desc" }, line ), descWrap);
                } );
            }
        } );

        return to_return;
    },

    computeHTMLEdition: function () {
        this.setDomElement( SERVICE.DOM.createElement( "div", { class: "class-edition" } ) );

        SERVICE.DOM.addElementTo( this.computeHTMLHeader(), this.getDomElement() );
        let params_key_attribute = { "param__window": "param__popup__select", "param__hide_number_when_unique": true };
        SERVICE.DOM.addElementTo( SERVICE.DOM_HELPER.createFieldPropertyHorizontal( this.characteristics_bonus, "Attribut clé", params_key_attribute ), this.getDomElement() );
        SERVICE.DOM.addElementTo( this.computeHTMLRoles(), this.getDomElement() );
        SERVICE.DOM.addElementTo( this.computeHTMLPersonality(), this.getDomElement() );
        SERVICE.DOM.addElementTo( this.computeHTMLMastery(), this.getDomElement() );
        SERVICE.DOM.addElementTo( this.computeHTMLCapacityByLevel(), this.getDomElement() );
        SERVICE.DOM.addElementTo( this.computeHTMLAbilities(), this.getDomElement() );

        return this.getDomElement();
    }
};

SERVICE.CLASS.addPrototype( CLASSES.ClassPopup, CLASSES.Class );
/**
 * @class CLASSES.CharacterClasses
 * @extends OBJECT.InterfaceContainerHtml
 */
CLASSES.CharacterClasses           = function () {
    this.init();
};
CLASSES.CharacterClasses.prototype = {
    init: function () {
        this.initContents();
    },
    //********************************************  EVENT LISTENER  **************************************************//
    doActionAfter: function ( event_name, params ) {
        switch ( event_name ) {
            case "event__property_popup__open":
                CONTROLLER.Character.edition_popup = new POPUP.PropertyEdition( CLASSES.key_element, params[ "param__class_name" ] || ( this.isEmpty() ? CLASSES.default_value : this.getContent( 0 ).getName() ), !!params[ "param__class_name" ] );
                return;
            case "event__form__element_changed":
                this.addClassFromEdition( params );
                return;
            case "event__compute__html":
                switch ( params[ "param__window" ] ) {
                    case CHARACTER.GeneralWindow.NAME:
                        this.computeHtmlGeneralWindow( params[ "param__dom_element_parent" ] );
                        return;
                }
                return;
        }
    },
    //********************************************  GETTER SETTER  **************************************************//
    getObjectByKey: function ( key_name ) {
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            let current = this.getContent( i ).getObjectByKey( key_name );
            if ( current ) {
                return current;
            }
        }
        return null;
    },
    getUUID         : function () {
        return CLASSES.key;
    },
    getLevel        : function () {
        let to_return = 0;
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            to_return += this.getContent( i ).getLevel();
        }
        return to_return;
    },
    getHighestClassName: function () {
        let to_return = null;
        let max_level = -1;
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            let _current = this.getContent( i );
            if ( _current.getLevel() > max_level ) {
                max_level = _current.getLevel();
                to_return = _current.getName();
            }
        }
        return to_return;
    },
    getDisplayValue : function () {
        let to_return = [];
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            to_return.push( this.getContent( i ).getName() + " " + this.getContent( i ).getLevel() );
        }
        return to_return.join( ", " );
    },
    getBonusesData  : function () {
        let _number = 0;
        let _choice = [];
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            let _data = CLASSES.getDataByName( this.getContent( i ).getName() );
            if ( _data && _data.characteristics_bonus ) {
                _number += _data.characteristics_bonus.number;
                _choice  = _choice.concat( _data.characteristics_bonus.choice );
            }
        }
        return { "characteristics_bonus": { "number": _number, "choice": _choice } };
    },
    //********************************************  DATA   **************************************************//
    addClassFromEdition: function ( params ) {
        let _name = params[ "param__edition_value" ];
        if ( !_name || this.containsUUID( _name ) ) {
            return;
        }
        let _character     = params[ "param__current_character__object" ];
        let _characteristics = params[ "param__characteristics__object" ];
        this.add( new CLASSES.Class( _name ) );
        let _class_data = CLASSES.getDataByName( _name );
        let _entry      = new CHARACTER.LevelHistory( _character.getLevelHistory().getNextLevelName() );
        _entry.setData( "life_class", _class_data ? _class_data.life_point_by_level : 0 );
        _entry.setData( "class_name", _name );
        _character.getLevelHistory().add( _entry );
        _character.computeTotalLife();
        _characteristics.doActionAfter( "event__reset_characteristics_bonuses", { "param__is_for": CLASSES.key_element } );
        _characteristics.doActionAfter( "event__set_object_bonuses", { "param__current__object": this.getBonusesData(), "param__is_for": CLASSES.key_element } );
        document.body.dataset.isClassSet = 1;
        this.updateHtmlData();
    },
    updateData: function ( data ) {
        if ( !data ) {
            return;
        }
        for ( let i = 0, _size_i = data.length; i < _size_i; i++ ) {
            let _class = this.getContentByUUID( data[ i ][ "name" ] );
            if ( !_class ) {
                _class = this.add( new CLASSES.Class( data[ i ][ "name" ] ) );
            }
            _class.updateData( data[ i ] );
        }
        document.body.dataset.isClassSet = this.isEmpty() ? 0 : 1;
        this.updateHtmlData();
    },
    //********************************************  HTML   **************************************************//
    computeHtmlGeneralWindow: function ( dom_element_parent ) {
        if ( this.dom_element_general ) {
            this.updateHtmlData();
            return;
        }
        this.dom_element_general = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "grid-area area-" + CLASSES.key_element } ), dom_element_parent );
        let div                  = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: " property vertical", "data-name": CLASSES.key_element } ), this.dom_element_general );
        SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "label" }, CLASSES.label_element ), div );
        this.dom_element__class_list = SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "div", { class: "class-list" } ), div );
        this.dom_element__add_button = SERVICE.DOM.createElement( "div", {
            class  : "button class-add-button",
            onclick: "MANAGER.EventManagerV2.doActionAfter(event,'event__property_popup__open',{'property_name':'" + CLASSES.key_element + "'})"
        }, "+" );
        this.updateHtmlData();
    },
    updateHtmlData: function () {
        if ( !this.dom_element__class_list ) {
            return;
        }
        SERVICE.DOM.empty( this.dom_element__class_list );
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            let _class = this.getContent( i );
            let _entry = SERVICE.DOM.createElement( "div", {
                class     : "class-entry",
                "data-name": _class.getName(),
                title      : _class.getName() + " — Niveau " + _class.getLevel(),
                onclick    : "MANAGER.EventManagerV2.doActionAfter(event,'event__property_popup__open',{'property_name':'" + CLASSES.key_element + "','param__class_name':'" + _class.getName() + "'})"
            } );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "class-entry-icon" }, CLASSES.ICONS[ _class.getName() ] || "⚔" ), _entry );
            SERVICE.DOM.addElementTo( SERVICE.DOM.createElement( "span", { class: "class-entry-level" }, "" + _class.getLevel() ), _entry );
            SERVICE.DOM.addElementTo( _entry, this.dom_element__class_list );
        }
        SERVICE.DOM.addElementTo( this.dom_element__add_button, this.dom_element__class_list );
    },
    //********************************************  SAVE   **************************************************//
    getDataToSave: function () {
        let to_return            = {};
        to_return[ CLASSES.key ] = [];
        for ( let i = 0, _size_i = this.getSize(); i < _size_i; i++ ) {
            to_return[ CLASSES.key ].push( this.getContent( i ).getDataToSave() );
        }
        return to_return;
    }
};

SERVICE.CLASS.addPrototype( CLASSES.CharacterClasses, OBJECT.InterfaceContainerHtml );
