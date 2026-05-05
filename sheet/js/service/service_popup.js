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
  
      popup.appendChild(closeBtn);
      popup.appendChild(content);
      overlay.appendChild(popup);
  
      document.body.appendChild(overlay);
  
      this.popup = overlay;
      this.contentNode = content;
    }
  
    open(data) {
      // reset si déjà ouverte
      if (this.popup) {
        this._reset();
      } else {
        this._createPopup();
      }
  
      // injecter le contenu (adaptable)
      this.contentNode.innerHTML = this._render(data);
  
      this.popup.style.display = 'block';
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
  
    _render(data) {
      return `
        <h2>${data.title || ''}</h2>
        <p>${data.description || ''}</p>
      `;
    }
  }
  
  SERVICE.instance_popup = new DetailPopupService();
