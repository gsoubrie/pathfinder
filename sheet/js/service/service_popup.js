"use strict";

class DetailPopupService {
    constructor() {
        if (DetailPopupService.instance) {
            return DetailPopupService.instance;
        }

        this.popup = null;
        this.contentNode = null;

        DetailPopupService.instance = this;
    }

    _createPopup() {
        const overlay = document.createElement('div');
        overlay.className = 'popup-overlay';

        const popup = document.createElement('div');
        popup.className = 'popup-container';

        const closeBtn = document.createElement('button');
        closeBtn.className = 'popup-close';
        closeBtn.innerText = '×';

        const content = document.createElement('div');
        content.className = 'popup-content';

        closeBtn.addEventListener('click', () => this.close());
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) this.close();
        });

        popup.appendChild(closeBtn);
        popup.appendChild(content);
        overlay.appendChild(popup);

        document.body.appendChild(overlay);

        this.popup = overlay;
        this.contentNode = content;
    }

    /**
     * Ouvre la popup avec du HTML déjà rendu (produit par un PopupRenderer).
     * @param {string} html
     */
    openHtml(html) {
        if (this.popup) {
            this._reset();
        } else {
            this._createPopup();
        }

        this.contentNode.innerHTML = html;
        this.popup.style.display = 'flex';
    }

    /**
     * Compatibilité ascendante : ouvre avec un objet {title, description}.
     * @param {Object} data
     */
    open(data) {
        this.openHtml(`
          <h2>${data.title || ''}</h2>
          <p>${data.description || ''}</p>
        `);
    }

    close() {
        if (!this.popup) return;
        this._reset();
        this.popup.style.display = 'none';
    }

    _reset() {
        if (this.contentNode) {
            this.contentNode.innerHTML = '';
        }
    }
}

SERVICE.instance_popup = new DetailPopupService();