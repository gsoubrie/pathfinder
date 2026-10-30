"use strict";

/**
 * @class OBJECT.BasePopupRenderer
 */
OBJECT.BasePopupRenderer = function ( object_data ) {
    this.init( object_data );
};
OBJECT.BasePopupRenderer.prototype = {
    init: function ( object_data ) {
        this.object_data = object_data;
    },
    
    computeHtml: function () {
        throw new Error( "computeHtml() doit être implémenté." );
    },
    
    _badge: function ( label, extraClass ) {
        if ( extraClass === undefined ) {
            extraClass = "";
        }
        if ( !label ) {
            return "";
        }
        return `<span class="popup-badge ${extraClass}">${label}</span>`;
    },
    
    _traitsList: function () {
        const traits = this.object_data.traits ? this.object_data.traits : [];
        if ( !traits.length ) {
            return "";
        }
        return `
          <div class="popup-traits">
            ${traits.map( t => this._badge( t, "popup-badge--trait" ) ).join( "" )}
          </div>`;
    },
    
    _description: function () {
        if ( this.object_data.description ) {
            return `<div class="popup-description">${this.object_data.description}</div>`;
        }
        return "";
    },
    
    _metaRow: function ( icon, label, value ) {
        if ( !value ) {
            return "";
        }
        return `
          <div class="popup-meta-row">
            <span class="popup-meta-icon">${icon}</span>
            <span class="popup-meta-label">${label}</span>
            <span class="popup-meta-value">${value}</span>
          </div>`;
    }
};


/**
 * @class OBJECT.FeatPopupRenderer
 * @extends OBJECT.BasePopupRenderer
 */
OBJECT.FeatPopupRenderer = function ( object_data ) {
    this.init( object_data );
};
OBJECT.FeatPopupRenderer.prototype = {
    computeHtml: function () {
        const object_data = this.object_data;
        const text        = object_data.text ? object_data.text : "";
        const required    = object_data.required ? object_data.required : [];
        this.dom_element  = SERVICE.DOM.createElement( "div", {}, `
          <div class="popup-header popup-header--feat">
            <div class="popup-header__left">
              <div class="popup-category-label">DON</div>
              <h2 class="popup-title">${text}</h2>
            </div>
            ${object_data.element_type ? `<div class="popup-level-badge">${object_data.element_type}</div>` : ""}
          </div>

          ${this._traitsList()}

          ${required.length ? `
          <div class="popup-prerequisites">
            <span class="popup-section-title">Prérequis</span>
            <ul>${required.map( r => `<li>${r}</li>` ).join( "" )}</ul>
          </div>` : ""}

          ${this._description()}` );
    }
};
SERVICE.CLASS.addPrototype( OBJECT.FeatPopupRenderer, OBJECT.BasePopupRenderer );


/**
 * @class OBJECT.ItemPopupRenderer
 * @extends OBJECT.BasePopupRenderer
 */
OBJECT.ItemPopupRenderer = function ( object_data ) {
    this.init( object_data );
};
OBJECT.ItemPopupRenderer.prototype = {
    computeHtml: function () {
        const object_data = this.object_data;
        const text        = object_data.text ? object_data.text : "";
        this.dom_element  = SERVICE.DOM.createElement( "div", {}, `
          <div class="popup-header popup-header--item">
            <div class="popup-header__left">
              <div class="popup-category-label">OBJET</div>
              <h2 class="popup-title">${text}</h2>
            </div>
            ${object_data.element_type ? `<div class="popup-level-badge">${object_data.element_type}</div>` : ""}
          </div>

          ${this._traitsList()}

          <div class="popup-item-stats">
            ${this._metaRow( "⚖️", "Encombrement", object_data.bulk )}
            ${this._metaRow( "🪙", "Prix", object_data.price )}
          </div>

          ${this._description()}` );
    }
};
SERVICE.CLASS.addPrototype( OBJECT.ItemPopupRenderer, OBJECT.BasePopupRenderer );


/**
 * @class OBJECT.ActionPopupRenderer
 * @extends OBJECT.BasePopupRenderer
 */
OBJECT.ActionPopupRenderer = function ( object_data ) {
    this.init( object_data );
};
OBJECT.ActionPopupRenderer.prototype = {
    _actionCostLabel: function ( cost ) {
        const map = { "1": "◆", "2": "◆◆", "3": "◆◆◆", "free": "⟳", "reaction": "⟲" };
        return map[ cost ] !== undefined ? map[ cost ] : cost;
    },
    
    computeHtml: function () {
        const object_data = this.object_data;
        const text        = object_data.text ? object_data.text : "";
        this.dom_element  = SERVICE.DOM.createElement( "div", {}, `
          <div class="popup-header popup-header--action">
            <div class="popup-header__left">
              <div class="popup-category-label">ACTION</div>
              <h2 class="popup-title">${text}</h2>
            </div>
            ${object_data.action_cost
              ? `<div class="popup-action-cost">${this._actionCostLabel( object_data.action_cost )}</div>`
              : ""}
          </div>

          ${this._traitsList()}

          ${this._description()}` );
    }
};
SERVICE.CLASS.addPrototype( OBJECT.ActionPopupRenderer, OBJECT.BasePopupRenderer );


/**
 * @class OBJECT.ClassFeaturePopupRenderer
 * @extends OBJECT.BasePopupRenderer
 */
OBJECT.ClassFeaturePopupRenderer = function ( object_data ) {
    this.init( object_data );
};
OBJECT.ClassFeaturePopupRenderer.prototype = {
    computeHtml: function () {
        const object_data = this.object_data;
        const text        = object_data.text ? object_data.text : "";
        this.dom_element  = SERVICE.DOM.createElement( "div", {}, `
          <div class="popup-header popup-header--class-feature">
            <div class="popup-header__left">
              <div class="popup-category-label">CAPACITÉ DE CLASSE</div>
              <h2 class="popup-title">${text}</h2>
            </div>
          </div>

          ${this._traitsList()}

          ${this._description()}` );
    }
};
SERVICE.CLASS.addPrototype( OBJECT.ClassFeaturePopupRenderer, OBJECT.BasePopupRenderer );


/**
 * @class OBJECT.MasteriesPopupRenderer
 * @extends OBJECT.BasePopupRenderer
 * Renders the aggregated masteries of the character: one grid group per
 * section, one badge row per line (data built by CHARACTER.Masteries).
 */
OBJECT.MasteriesPopupRenderer = function ( object_data ) {
    this.init( object_data );
};
OBJECT.MasteriesPopupRenderer.prototype = {
    computeHtml: function () {
        const object_data = this.object_data;
        const text        = object_data.text ? object_data.text : "";
        this.dom_element  = SERVICE.DOM.createElement( "div", {}, `
          <div class="popup-header popup-header--default">
            <h2 class="popup-title">${text}</h2>
          </div>

          <div class="popup-description">${this._masteriesGrid()}</div>` );
    },

    _masteriesGrid: function () {
        const by_slot = this.object_data.character_masteries || {};
        const slots   = Object.keys( by_slot );
        if ( !slots.length ) {
            return `<div class="class-mastery-desc">Aucune maîtrise : posez d'abord une classe.</div>`;
        }
        let grid   = `<div class="class-mastery-grid">`;
        let placed = {};
        for ( let i = 0, _size_i = MASTERY.SECTIONS.length; i < _size_i; i++ ) {
            const section = MASTERY.SECTIONS[ i ];
            const lines   = slots
                .filter( ( slot ) => !placed[ slot ] && slot.indexOf( section.key ) === 0 )
                .sort( ( slot_a, slot_b ) => by_slot[ slot_a ].label.localeCompare( by_slot[ slot_b ].label ) );
            for ( let j = 0, _size_j = lines.length; j < _size_j; j++ ) {
                placed[ lines[ j ] ] = true;
            }
            if ( !lines.length ) {
                continue;
            }
            grid += `<div class="class-mastery-group"><div class="class-mastery-group-title">${section.title}</div>`;
            for ( let k = 0, _size_k = lines.length; k < _size_k; k++ ) {
                const line  = by_slot[ lines[ k ] ];
                const badge = MASTERY.getByShort( line.rank );
                grid += `<div class="class-mastery-row"><span class="class-mastery-badge ${badge.css}">${badge.label}</span><span class="class-mastery-desc">${line.label}</span></div>`;
                if ( line.sources && line.sources.length ) {
                    grid += `<div class="class-mastery-sources">${line.sources.join( " · " )}</div>`;
                }
            }
            grid += `</div>`;
        }
        return grid + `</div>`;
    }
};
SERVICE.CLASS.addPrototype( OBJECT.MasteriesPopupRenderer, OBJECT.BasePopupRenderer );


/**
 * @class OBJECT.DefaultPopupRenderer
 * @extends OBJECT.BasePopupRenderer
 */
OBJECT.DefaultPopupRenderer = function ( object_data ) {
    this.init( object_data );
};
OBJECT.DefaultPopupRenderer.prototype = {
    computeHtml: function () {
        const object_data = this.object_data;
        const text        = object_data.text ? object_data.text : "";
        this.dom_element  = SERVICE.DOM.createElement( "div", {}, `
          <div class="popup-header popup-header--default">
            <h2 class="popup-title">${text}</h2>
            ${object_data.element_type ? `<div class="popup-level-badge">${object_data.element_type}</div>` : ""}
          </div>

          ${this._traitsList()}
          ${this._description()}` );
    }
};
SERVICE.CLASS.addPrototype( OBJECT.DefaultPopupRenderer, OBJECT.BasePopupRenderer );

/**
 * @class OBJECT.SkillActionsPopupRenderer
 * @extends OBJECT.BasePopupRenderer
 * Renders one skill of the character: its description, the rank of the
 * character on it, then every action of the skill and the general actions
 * usable with it. An action shows usable or locked, the data carries the
 * rank requirement and the usable flag (built by CHARACTER.Masteries).
 */
OBJECT.SkillActionsPopupRenderer = function ( object_data ) {
    this.init( object_data );
};
OBJECT.SkillActionsPopupRenderer.prototype = {
    computeHtml: function () {
        const object_data = this.object_data;
        const text        = object_data.text ? object_data.text : "";
        this.dom_element  = SERVICE.DOM.createElement( "div", {}, `
          <div class="popup-header popup-header--default">
            <h2 class="popup-title">${text}</h2>
            <span class="class-mastery-badge ${object_data.skill_badge_css} skill-current-rank">${object_data.skill_rank_label}</span>
          </div>

          <div class="popup-description">
            ${object_data.skill_description ? `<div class="skill-description">${object_data.skill_description}</div>` : ""}
            ${this._actionsHtml( object_data.actions, "" )}
            ${this._actionsHtml( object_data.general_actions, "skill-general-actions", "Actions de compétence générales" )}
          </div>` );
    },

    _actionsHtml: function ( actions, wrap_class, section_title ) {
        if ( !actions || !actions.length ) {
            return "";
        }
        const lines = actions.map( ( action ) => this._actionHtml( action ) ).join( "" );
        return `
          <div class="${wrap_class}">
            ${section_title ? `<div class="skill-section-title">${section_title}</div>` : ""}
            ${lines}
          </div>`;
    },

    _actionHtml: function ( action ) {
        const locked = action.usable ? "" : " locked";
        const traits = ( action.traits || [] ).map( ( trait ) => this._badge( trait, "popup-badge--trait" ) ).join( "" );
        const cost   = action.cost ? `<span class="skill-action-cost">${action.cost}</span>` : "";
        return `
          <div class="skill-action${locked}">
            <div class="skill-action-header">
              <span class="skill-action-name">${action.name}</span>
              ${cost}
              <span class="class-mastery-badge ${MASTERY.getByShort( action.rank ).css}">${action.rank_label}</span>
            </div>
            ${traits ? `<div class="popup-traits skill-action-traits">${traits}</div>` : ""}
            ${action.prerequisite ? `<div class="skill-action-line"><span class="skill-action-line-label">Prérequis</span>${action.prerequisite}</div>` : ""}
            ${action.condition ? `<div class="skill-action-line"><span class="skill-action-line-label">Conditions</span>${action.condition}</div>` : ""}
            ${action.description ? `<div class="skill-action-description">${action.description}</div>` : ""}
            ${this._tasksHtml( action.tasks )}
            ${this._resultsHtml( action.results )}
            ${action.usable ? "" : `<div class="skill-action-locked-hint">Rang ${action.rank_label} requis</div>`}
          </div>`;
    },

    _tasksHtml: function ( tasks ) {
        if ( !tasks || !tasks.length ) {
            return "";
        }
        const lines = tasks.map( ( task ) => `<span class="skill-action-task"><span class="skill-action-task-rank">${task.rank_label}</span>${task.text}</span>` ).join( "" );
        return `<div class="skill-action-tasks">${lines}</div>`;
    },

    _resultsHtml: function ( results ) {
        if ( !results || !results.length ) {
            return "";
        }
        const lines = results.map( ( result ) => `<div class="skill-action-result"><span class="skill-action-result-label">${result.label}</span>${result.text}</div>` ).join( "" );
        return `<div class="skill-action-results">${lines}</div>`;
    }
};
SERVICE.CLASS.addPrototype( OBJECT.SkillActionsPopupRenderer, OBJECT.BasePopupRenderer );
