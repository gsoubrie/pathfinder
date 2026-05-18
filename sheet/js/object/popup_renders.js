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
    console.log( "GSOU", "[ActionPopupRenderer - ActionPopupRenderer]", this );
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