// content.js — injecté sur pf2e.pathfinder-fr.org/spells
// Écoute les messages venant du popup

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "scrape_spells") {
    const result = scrapeSpells();
    sendResponse(result);
  }
  if (request.action === "get_page_info") {
    sendResponse({
      url: window.location.href,
      ready: document.querySelectorAll("table tr").length > 1
    });
  }
  return true; // garder le canal ouvert pour les réponses async
});

function generateUUID() {
  // Génère un UUID v4 aléatoire de 16 caractères alphanum (style Foundry VTT)
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 16; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function scrapeSpells() {
  const rows = document.querySelectorAll("tr[mat-row], tr.mat-mdc-row, tbody tr");

  if (rows.length === 0) {
    return { success: false, error: "Aucune ligne trouvée. La page est-elle bien chargée ?", count: 0 };
  }

  const spells = {};
  let count = 0;
  const errors = [];

  rows.forEach((row, index) => {
    try {
      // Cherche le lien /spells/{id} dans la ligne
      const link = row.querySelector('a[href^="/spells/"]');
      if (!link) return;

      const href = link.getAttribute("href");
      // Extrait l'ID depuis /spells/w7BHU5rk5JKuIRCe
      const id = href.split("/spells/")[1];
      if (!id) return;

      // Cherche la cellule du nom (column name_trans)
      let nameCell = row.querySelector(
        'td.cdk-column-name_trans, td.mat-column-name_trans, td[class*="column-name_trans"]'
      );

      // Fallback : première cellule TD si pas trouvé
      if (!nameCell) {
        const cells = row.querySelectorAll("td");
        nameCell = cells[0] || null;
      }

      if (!nameCell) return;

      // Extrait le texte brut du nom, sans les icônes d'action
      let text = extractCleanName(nameCell);
      if (!text) return;

      const uuid = generateUUID();

      spells[uuid] = {
        category: "spell",
        href: href,
        id: id,
        text: text
      };

      count++;
    } catch (e) {
      errors.push(`Ligne ${index}: ${e.message}`);
    }
  });

  if (count === 0) {
    return {
      success: false,
      error: "Aucun sort extrait. Structure HTML inattendue.",
      errors,
      count: 0
    };
  }

  return { success: true, spells, count, errors };
}

function extractCleanName(cell) {
  // Clone pour ne pas modifier le DOM
  const clone = cell.cloneNode(true);

  // Supprime les icônes app-action-icon et mat-icon
  clone.querySelectorAll("app-action-icon, mat-icon, .mat-icon").forEach(el => el.remove());

  // Récupère le texte et nettoie les espaces superflus
  let text = clone.textContent || clone.innerText || "";
  text = text.replace(/\s+/g, " ").trim();

  return text;
}
