// content.js — injecté sur pf2e.pathfinder-fr.org/*

// Mapping URL path → category
const CATEGORY_MAP = {
  "spells":      "spell",
  "ancestries":  "ancestry",
  "classes":     "class",
  "feats":       "feat",
  "items":       "item",
  "monsters":    "monster",
  "conditions":  "condition",
  "backgrounds": "background",
  "deities":     "deity",
  "domains":     "domain",
  "traits":      "trait",
};

function getCategoryFromUrl(url) {
  const segment = url.split("/").filter(Boolean).pop(); // dernier segment de l'URL
  return CATEGORY_MAP[segment] || segment || "unknown";
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "scrape") {
    const result = scrape();
    sendResponse(result);
  }
  if (request.action === "get_page_info") {
    const category = getCategoryFromUrl(window.location.pathname);
    sendResponse({
      url: window.location.href,
      category,
      ready: document.querySelectorAll("table tr").length > 1
    });
  }
  return true;
});

function scrape() {
  const category = getCategoryFromUrl(window.location.pathname);
  const rows = document.querySelectorAll("tr[mat-row], tr.mat-mdc-row, tbody tr");

  if (rows.length === 0) {
    return { success: false, error: "Aucune ligne trouvée. La page est-elle bien chargée ?", count: 0 };
  }

  const entries = {};
  let count = 0;
  const errors = [];

  rows.forEach((row, index) => {
    try {
      // Cherche n'importe quel lien interne /{segment}/{id}
      const link = row.querySelector("a[href]");
      if (!link) return;

      const href = link.getAttribute("href");
      // L'ID est toujours le dernier segment du href : /spells/abc123 → abc123
      const id = href.split("/").filter(Boolean).pop();
      if (!id) return;

      // Cellule du nom
      let nameCell = row.querySelector(
        'td.cdk-column-name_trans, td.mat-column-name_trans, td[class*="column-name_trans"]'
      );
      if (!nameCell) {
        const cells = row.querySelectorAll("td");
        nameCell = cells[0] || null;
      }
      if (!nameCell) return;

      const text = extractCleanName(nameCell);
      if (!text) return;

      entries[id] = { category, href, id, text };
      count++;
    } catch (e) {
      errors.push(`Ligne ${index}: ${e.message}`);
    }
  });

  if (count === 0) {
    return { success: false, error: "Aucune entrée extraite. Structure HTML inattendue.", errors, count: 0 };
  }

  return { success: true, entries, count, errors, category };
}

function extractCleanName(cell) {
  const clone = cell.cloneNode(true);
  clone.querySelectorAll("app-action-icon, mat-icon, .mat-icon").forEach(el => el.remove());
  let text = clone.textContent || clone.innerText || "";
  return text.replace(/\s+/g, " ").trim();
}
