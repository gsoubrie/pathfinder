"use strict";

// ─────────────────────────────────────────────
//  POPUP RENDERER FACTORY
// ─────────────────────────────────────────────

/**
 * Retourne le renderer approprié selon la category de l'objet.
 *
 * Usage :
 *   const renderer = PopupRendererFactory.create(OBJECT.CONST[uuid]);
 *   const html     = renderer.computeHtml();
 */
const PopupRendererFactory = (function () {

    /**
     * Map category → classe renderer.
     * Ajoute ici de nouvelles catégories sans toucher au reste du code.
     */
    const REGISTRY = {
        "feat"          : () => POPUP_RENDERER.FeatPopupRenderer,
        "item"          : () => POPUP_RENDERER.ItemPopupRenderer,
        "action"        : () => POPUP_RENDERER.ActionPopupRenderer,
        "class-feature" : () => POPUP_RENDERER.ClassFeaturePopupRenderer,
    };

    /**
     * @param  {Object} obj  Entrée de OBJECT.CONST
     * @returns {PopupRenderer}
     */
    function create(obj) {
        if (!obj) {
            throw new Error("PopupRendererFactory.create() : objet null ou undefined.");
        }

        const category = obj.category ?? "";
        const RendererClass = REGISTRY[category]?.() ?? POPUP_RENDERER.DefaultPopupRenderer;

        return new RendererClass(obj);
    }

    /**
     * Enregistre dynamiquement une nouvelle catégorie.
     *
     * @param {string}   category      Valeur de obj.category
     * @param {Function} rendererClass Sous-classe de PopupRenderer
     */
    function register(category, rendererClass) {
        REGISTRY[category] = () => rendererClass;
    }

    return { create, register };
})();

window.PopupRendererFactory = PopupRendererFactory;