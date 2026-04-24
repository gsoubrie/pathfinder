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

    /**
     * Crée un bloc de section avec titre et contenu
     */
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

    /**
     * Traduit le code de maîtrise en libellé + classe CSS
     */
    _masteryInfo: function ( code ) {
        const map = {
            "I": { label: "Inexpérimenté", css: "mastery-untrained" },
            "Q": { label: "Qualifié",       css: "mastery-trained"   },
            "E": { label: "Expert",          css: "mastery-expert"    },
            "M": { label: "Maître",          css: "mastery-master"    },
            "L": { label: "Légendaire",      css: "mastery-legendary" }
        };
        return map[ code ] || { label: code, css: "" };
    },

    /**
     * Crée un badge de maîtrise
     */
    _createMasteryBadge: function ( code ) {
        let info  = this._masteryInfo( code );
        let badge = SERVICE.DOM.createElement( "span", { class: "class-mastery-badge " + info.css } );
        badge.textContent = info.label;
        return badge;
    },

    /**
     * Crée une ligne de maîtrise avec badge + description
     */
    _createMasteryRow: function ( level, description ) {
        let row  = SERVICE.DOM.createElement( "div", { class: "class-mastery-row" } );
        let badge = this._createMasteryBadge( level );
        let desc = SERVICE.DOM.createElement( "span", { class: "class-mastery-desc" } );
        desc.textContent = description;
        SERVICE.DOM.addElementTo( badge, row );
        SERVICE.DOM.addElementTo( desc, row );
        return row;
    },

    //********************************************  HTML SECTIONS   **************************************************//

    /**
     * En-tête : description générale + stats clés
     */
    _buildHeader: function ( container ) {
        let header = SERVICE.DOM.createElement( "div", { class: "class-header-block" } );

        if ( this.general_desc ) {
            let desc = SERVICE.DOM.createElement( "p", { class: "class-general-desc" } );
            desc.textContent = this.general_desc;
            SERVICE.DOM.addElementTo( desc, header );
        }

        let stats = SERVICE.DOM.createElement( "div", { class: "class-quick-stats" } );
        if ( this.life_point_by_level !== undefined ) {
            let hp = SERVICE.DOM.createElement( "div", { class: "class-stat-chip class-stat-hp" } );
            hp.innerHTML = "<span class='stat-chip-number'>" + this.life_point_by_level + "</span><span class='stat-chip-label'>PV / niveau</span>";
            SERVICE.DOM.addElementTo( hp, stats );
        }
        if ( this.mastery && this.mastery.initial ) {
            let mi    = this._masteryInfo( this.mastery.initial );
            let chip  = SERVICE.DOM.createElement( "div", { class: "class-stat-chip class-stat-mastery " + mi.css } );
            chip.innerHTML = "<span class='stat-chip-label'>Maîtrise initiale</span><span class='stat-chip-value'>" + mi.label + "</span>";
            SERVICE.DOM.addElementTo( chip, stats );
        }
        if ( this.mastery && this.mastery.perception ) {
            let pi   = this._masteryInfo( this.mastery.perception );
            let chip = SERVICE.DOM.createElement( "div", { class: "class-stat-chip class-stat-mastery " + pi.css } );
            chip.innerHTML = "<span class='stat-chip-label'>Perception</span><span class='stat-chip-value'>" + pi.label + "</span>";
            SERVICE.DOM.addElementTo( chip, stats );
        }
        SERVICE.DOM.addElementTo( stats, header );
        SERVICE.DOM.addElementTo( header, container );
    },

    /**
     * Section Rôles (combat, social, exploration, interlude)
     */
    _buildRoles: function ( container ) {
        if ( !this.desc_fight && !this.desc_socially && !this.desc_exploration && !this.desc_interlude ) return;

        let section = SERVICE.DOM.createElement( "div", { class: "class-section" } );
        let title   = SERVICE.DOM.createElement( "div", { class: "class-section-title" } );
        title.textContent = "Rôles";
        SERVICE.DOM.addElementTo( title, section );

        let grid = SERVICE.DOM.createElement( "div", { class: "class-roles-grid" } );
        let roles = [
            { icon: "⚔️", label: "Combat",      desc: this.desc_fight       },
            { icon: "🗣️", label: "Social",       desc: this.desc_socially    },
            { icon: "🧭", label: "Exploration",  desc: this.desc_exploration },
            { icon: "🏕️", label: "Intermède",    desc: this.desc_interlude   }
        ];
        roles.forEach( function ( role ) {
            if ( !role.desc ) return;
            let card  = SERVICE.DOM.createElement( "div", { class: "class-role-card" } );
            let head  = SERVICE.DOM.createElement( "div", { class: "class-role-head" } );
            let icon  = SERVICE.DOM.createElement( "span", { class: "class-role-icon" } );
            icon.textContent = role.icon;
            let lbl   = SERVICE.DOM.createElement( "span", { class: "class-role-label" } );
            lbl.textContent = role.label;
            SERVICE.DOM.addElementTo( icon, head );
            SERVICE.DOM.addElementTo( lbl, head );
            SERVICE.DOM.addElementTo( head, card );
            let body  = SERVICE.DOM.createElement( "p", { class: "class-role-desc" } );
            body.textContent = role.desc;
            SERVICE.DOM.addElementTo( body, card );
            SERVICE.DOM.addElementTo( card, grid );
        } );
        SERVICE.DOM.addElementTo( grid, section );
        SERVICE.DOM.addElementTo( section, container );
    },

    /**
     * Section "Vous pourriez…" / "Les autres pensent…"
     */
    _buildPersonality: function ( container ) {
        if ( !this.desc_you_could && !this.desc_probably_others ) return;

        let section = SERVICE.DOM.createElement( "div", { class: "class-section" } );
        let title   = SERVICE.DOM.createElement( "div", { class: "class-section-title" } );
        title.textContent = "Personnalité";
        SERVICE.DOM.addElementTo( title, section );

        let wrap = SERVICE.DOM.createElement( "div", { class: "class-personality-wrap" } );

        let buildList = function ( items, heading, iconCss ) {
            if ( !items || !items.length ) return;
            let block  = SERVICE.DOM.createElement( "div", { class: "class-personality-block" } );
            let h      = SERVICE.DOM.createElement( "div", { class: "class-personality-heading " + iconCss } );
            h.textContent = heading;
            SERVICE.DOM.addElementTo( h, block );
            let ul = SERVICE.DOM.createElement( "ul", { class: "class-personality-list" } );
            items.forEach( function ( item ) {
                let li = SERVICE.DOM.createElement( "li", {} );
                li.textContent = item;
                SERVICE.DOM.addElementTo( li, ul );
            } );
            SERVICE.DOM.addElementTo( ul, block );
            SERVICE.DOM.addElementTo( block, wrap );
        };

        buildList( this.desc_you_could,       "Vous pourriez…",          "heading-you"    );
        buildList( this.desc_probably_others, "Les autres pensent…",     "heading-others" );

        SERVICE.DOM.addElementTo( wrap, section );
        SERVICE.DOM.addElementTo( section, container );
    },

    /**
     * Section Maîtrises
     */
    _buildMastery: function ( container ) {
        if ( !this.mastery ) return;
        let m = this.mastery;
        let self = this;

        let section = SERVICE.DOM.createElement( "div", { class: "class-section" } );
        let title   = SERVICE.DOM.createElement( "div", { class: "class-section-title" } );
        title.textContent = "Maîtrises";
        SERVICE.DOM.addElementTo( title, section );

        let grid = SERVICE.DOM.createElement( "div", { class: "class-mastery-grid" } );

        let buildGroup = function ( groupTitle, items ) {
            if ( !items || !items.length ) return;
            let group = SERVICE.DOM.createElement( "div", { class: "class-mastery-group" } );
            let gh    = SERVICE.DOM.createElement( "div", { class: "class-mastery-group-title" } );
            gh.textContent = groupTitle;
            SERVICE.DOM.addElementTo( gh, group );
            items.forEach( function ( item ) {
                SERVICE.DOM.addElementTo( self._createMasteryRow( item.level, item.description ), group );
            } );
            SERVICE.DOM.addElementTo( group, grid );
        };

        buildGroup( "Jets de sauvegarde", m.saves    );
        buildGroup( "Compétences",        m.skills   );
        buildGroup( "Attaques",           m.attacks  );
        buildGroup( "Défenses",           m.defenses );
        buildGroup( "Sorts",              m.spells   );

        // DD de classe + Rareté
        if ( m.class_dc || m.rarity ) {
            let extra = SERVICE.DOM.createElement( "div", { class: "class-mastery-group" } );
            let eh    = SERVICE.DOM.createElement( "div", { class: "class-mastery-group-title" } );
            eh.textContent = "Divers";
            SERVICE.DOM.addElementTo( eh, extra );
            if ( m.class_dc ) {
                SERVICE.DOM.addElementTo( self._createMasteryRow( m.class_dc, "DD de classe" ), extra );
            }
            if ( m.rarity ) {
                let rarRow = SERVICE.DOM.createElement( "div", { class: "class-mastery-row" } );
                let rarVal = SERVICE.DOM.createElement( "span", { class: "class-mastery-desc" } );
                rarVal.textContent = "Rareté : " + m.rarity;
                SERVICE.DOM.addElementTo( rarVal, rarRow );
                SERVICE.DOM.addElementTo( rarRow, extra );
            }
            SERVICE.DOM.addElementTo( extra, grid );
        }

        SERVICE.DOM.addElementTo( grid, section );
        SERVICE.DOM.addElementTo( section, container );
    },

    /**
     * Section Capacités par niveau (timeline)
     */
    _buildCapacityByLevel: function ( container ) {
        if ( !this.capacity_by_level || !this.capacity_by_level.length ) return;

        let section = SERVICE.DOM.createElement( "div", { class: "class-section" } );
        let title   = SERVICE.DOM.createElement( "div", { class: "class-section-title" } );
        title.textContent = "Capacités par niveau";
        SERVICE.DOM.addElementTo( title, section );

        let timeline = SERVICE.DOM.createElement( "div", { class: "class-timeline" } );
        this.capacity_by_level.forEach( function ( caps, idx ) {
            let row   = SERVICE.DOM.createElement( "div", { class: "class-timeline-row" } );
            let lvl   = SERVICE.DOM.createElement( "div", { class: "class-timeline-level" } );
            lvl.textContent = "Niv. " + ( idx + 1 );
            let dot   = SERVICE.DOM.createElement( "div", { class: "class-timeline-dot" } );
            let body  = SERVICE.DOM.createElement( "div", { class: "class-timeline-body" } );
            body.textContent = caps;
            SERVICE.DOM.addElementTo( lvl,  row );
            SERVICE.DOM.addElementTo( dot,  row );
            SERVICE.DOM.addElementTo( body, row );
            SERVICE.DOM.addElementTo( row,  timeline );
        } );

        SERVICE.DOM.addElementTo( timeline, section );
        SERVICE.DOM.addElementTo( section, container );
    },

    /**
     * Section Capacités détaillées (abilities)
     */
    _buildAbilities: function ( container ) {
        if ( !this.abilities ) return;
        let keys = Object.keys( this.abilities );
        if ( !keys.length ) return;

        let section = SERVICE.DOM.createElement( "div", { class: "class-section" } );
        let title   = SERVICE.DOM.createElement( "div", { class: "class-section-title" } );
        title.textContent = "Capacités de classe";
        SERVICE.DOM.addElementTo( title, section );

        let list = SERVICE.DOM.createElement( "div", { class: "class-abilities-list" } );

        keys.forEach( ( key ) => {
            let ability = this.abilities[ key ];
            let card    = SERVICE.DOM.createElement( "div", { class: "class-ability-card" } );

            // En-tête : nom + niveau
            let head = SERVICE.DOM.createElement( "div", { class: "class-ability-head" } );
            let name = SERVICE.DOM.createElement( "div", { class: "class-ability-name" } );
            name.textContent = ability.name || key;
            SERVICE.DOM.addElementTo( name, head );
            if ( ability.level ) {
                let lvl = SERVICE.DOM.createElement( "div", { class: "class-ability-level" } );
                lvl.textContent = "Niv. " + ability.level;
                SERVICE.DOM.addElementTo( lvl, head );
            }
            SERVICE.DOM.addElementTo( head, card );

            // Descriptions
            if ( ability.description && ability.description.length ) {
                let descWrap = SERVICE.DOM.createElement( "div", { class: "class-ability-descs" } );
                ability.description.forEach( function ( line ) {
                    let p = SERVICE.DOM.createElement( "p", { class: "class-ability-desc" } );
                    p.textContent = line;
                    SERVICE.DOM.addElementTo( p, descWrap );
                } );
                SERVICE.DOM.addElementTo( descWrap, card );
            }

            SERVICE.DOM.addElementTo( card, list );
        } );

        SERVICE.DOM.addElementTo( list, section );
        SERVICE.DOM.addElementTo( section, container );
    },

    //********************************************  HTML MAIN   **************************************************//

    computeHTMLEdition: function () {
        let wrap = SERVICE.DOM.createElement( "div", { class: "class-edition" } );
        this.setDomElement( wrap );

        this._buildHeader( wrap );
        this._buildRoles( wrap );
        this._buildPersonality( wrap );
        this._buildMastery( wrap );
        this._buildCapacityByLevel( wrap );
        this._buildAbilities( wrap );

        return this.getDomElement();
    }
};

SERVICE.CLASS.addPrototype( CLASSES.ClassPopup, CLASSES.Class );