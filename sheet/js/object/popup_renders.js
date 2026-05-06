"use strict";

// ─────────────────────────────────────────────
//  ABSTRACT BASE RENDERER
// ─────────────────────────────────────────────

class PopupRenderer {
    /**
     * @param {Object} obj  — entrée de OBJECT.CONST
     */
    constructor(obj) {
        if (new.target === PopupRenderer) {
            throw new Error("PopupRenderer est une classe abstraite.");
        }
        this.obj = obj;
    }

    /** À surcharger dans chaque sous-classe */
    computeHtml() {
        throw new Error("computeHtml() doit être implémenté.");
    }

    // ── Helpers partagés ──────────────────────

    _badge(label, extraClass = "") {
        if (!label) return "";
        return `<span class="popup-badge ${extraClass}">${label}</span>`;
    }

    _traitsList() {
        const traits = this.obj.traits ?? [];
        if (!traits.length) return "";
        return `
          <div class="popup-traits">
            ${traits.map(t => this._badge(t, "popup-badge--trait")).join("")}
          </div>`;
    }

    _description() {
        return this.obj.description
            ? `<div class="popup-description">${this.obj.description}</div>`
            : "";
    }

    _metaRow(icon, label, value) {
        if (!value) return "";
        return `
          <div class="popup-meta-row">
            <span class="popup-meta-icon">${icon}</span>
            <span class="popup-meta-label">${label}</span>
            <span class="popup-meta-value">${value}</span>
          </div>`;
    }
}

// ─────────────────────────────────────────────
//  FEAT  (don)
// ─────────────────────────────────────────────

class FeatPopupRenderer extends PopupRenderer {
    computeHtml() {
        const { obj } = this;
        return `
          <div class="popup-header popup-header--feat">
            <div class="popup-header__left">
              <div class="popup-category-label">DON</div>
              <h2 class="popup-title">${obj.text ?? ""}</h2>
            </div>
            ${obj.element_type ? `<div class="popup-level-badge">${obj.element_type}</div>` : ""}
          </div>

          ${this._traitsList()}

          ${obj.required?.length ? `
          <div class="popup-prerequisites">
            <span class="popup-section-title">Prérequis</span>
            <ul>${obj.required.map(r => `<li>${r}</li>`).join("")}</ul>
          </div>` : ""}

          ${this._description()}`;
    }
}

// ─────────────────────────────────────────────
//  ITEM  (objet / équipement)
// ─────────────────────────────────────────────

class ItemPopupRenderer extends PopupRenderer {
    computeHtml() {
        const { obj } = this;
        return `
          <div class="popup-header popup-header--item">
            <div class="popup-header__left">
              <div class="popup-category-label">OBJET</div>
              <h2 class="popup-title">${obj.text ?? ""}</h2>
            </div>
            ${obj.element_type ? `<div class="popup-level-badge">${obj.element_type}</div>` : ""}
          </div>

          ${this._traitsList()}

          <div class="popup-item-stats">
            ${this._metaRow("⚖️", "Encombrement", obj.bulk)}
            ${this._metaRow("🪙", "Prix", obj.price)}
          </div>

          ${this._description()}`;
    }
}

// ─────────────────────────────────────────────
//  ACTION
// ─────────────────────────────────────────────

class ActionPopupRenderer extends PopupRenderer {
    _actionCostLabel(cost) {
        const map = { "1": "◆", "2": "◆◆", "3": "◆◆◆", "free": "⟳", "reaction": "⟲" };
        return map[cost] ?? cost;
    }

    computeHtml() {
        const { obj } = this;
        return `
          <div class="popup-header popup-header--action">
            <div class="popup-header__left">
              <div class="popup-category-label">ACTION</div>
              <h2 class="popup-title">${obj.text ?? ""}</h2>
            </div>
            ${obj.action_cost
                ? `<div class="popup-action-cost">${this._actionCostLabel(obj.action_cost)}</div>`
                : ""}
          </div>

          ${this._traitsList()}

          ${this._description()}`;
    }
}

// ─────────────────────────────────────────────
//  CLASS FEATURE  (capacité de classe)
// ─────────────────────────────────────────────

class ClassFeaturePopupRenderer extends PopupRenderer {
    computeHtml() {
        const { obj } = this;
        return `
          <div class="popup-header popup-header--class-feature">
            <div class="popup-header__left">
              <div class="popup-category-label">CAPACITÉ DE CLASSE</div>
              <h2 class="popup-title">${obj.text ?? ""}</h2>
            </div>
          </div>

          ${this._traitsList()}

          ${this._description()}`;
    }
}

// ─────────────────────────────────────────────
//  FALLBACK  (catégorie inconnue)
// ─────────────────────────────────────────────

class DefaultPopupRenderer extends PopupRenderer {
    computeHtml() {
        const { obj } = this;
        return `
          <div class="popup-header popup-header--default">
            <h2 class="popup-title">${obj.text ?? ""}</h2>
            ${obj.element_type ? `<div class="popup-level-badge">${obj.element_type}</div>` : ""}
          </div>

          ${this._traitsList()}
          ${this._description()}`;
    }
}

// Export via namespace global (cohérent avec ton architecture)
window.POPUP_RENDERER = window.POPUP_RENDERER || {};
POPUP_RENDERER.FeatPopupRenderer        = FeatPopupRenderer;
POPUP_RENDERER.ItemPopupRenderer        = ItemPopupRenderer;
POPUP_RENDERER.ActionPopupRenderer      = ActionPopupRenderer;
POPUP_RENDERER.ClassFeaturePopupRenderer = ClassFeaturePopupRenderer;
POPUP_RENDERER.DefaultPopupRenderer     = DefaultPopupRenderer;