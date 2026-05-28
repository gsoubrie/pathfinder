// popup.js

let scrapedData = null;

const statusBar  = document.getElementById("status");
const statusDot  = statusBar.querySelector(".dot");
const statusText = document.getElementById("status-text");
const btnScrape  = document.getElementById("btn-scrape");
const results    = document.getElementById("results");
const statCount  = document.getElementById("stat-count");
const statErrors = document.getElementById("stat-errors");
const preview    = document.getElementById("preview");
const btnDl      = document.getElementById("btn-download");
const btnCopy    = document.getElementById("btn-copy");
const warnMsg    = document.getElementById("warn-msg");

function setStatus(type, text) {
  statusBar.className = "status-bar " + type;
  statusText.textContent = text;
}

// Vérifie si on est sur la bonne page
async function checkPage() {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (!tab || !tab.url) {
      setStatus("error", "Impossible de lire l'onglet actif.");
      return;
    }

    if (!tab.url.includes("pf2e.pathfinder-fr.org/spells")) {
      setStatus("error", "Ouvrez pf2e.pathfinder-fr.org/spells");
      warnMsg.innerHTML = '→ <a href="https://pf2e.pathfinder-fr.org/spells" target="_blank">Ouvrir la page</a>';
      return;
    }

    // Page correcte — vérifier si le contenu est chargé
    const response = await chrome.tabs.sendMessage(tab.id, { action: "get_page_info" }).catch(() => null);

    if (!response) {
      setStatus("error", "Content script non chargé. Rechargez la page.");
      return;
    }

    if (!response.ready) {
      setStatus("info", "Page en chargement… attendez quelques secondes.");
      setTimeout(checkPage, 1500);
      return;
    }

    setStatus("ok", "Page prête. Cliquez pour extraire.");
    btnScrape.disabled = false;

  } catch (e) {
    setStatus("error", "Erreur : " + e.message);
  }
}

// Lance le scraping
btnScrape.addEventListener("click", async () => {
  btnScrape.disabled = true;
  setStatus("info", "Extraction en cours…");
  results.classList.remove("visible");
  scrapedData = null;
  warnMsg.textContent = "";

  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const response = await chrome.tabs.sendMessage(tab.id, { action: "scrape_spells" });

    if (!response.success) {
      setStatus("error", response.error || "Échec de l'extraction.");
      if (response.errors && response.errors.length > 0) {
        warnMsg.textContent = response.errors.slice(0, 3).join(" | ");
      }
      btnScrape.disabled = false;
      return;
    }

    scrapedData = response.spells;
    const count  = response.count;
    const errLen = (response.errors || []).length;

    setStatus("ok", `${count} sort${count > 1 ? "s" : ""} extrait${count > 1 ? "s" : ""} avec succès.`);

    statCount.textContent  = count;
    statErrors.textContent = errLen;

    // Aperçu des 3 premiers sorts
    const entries = Object.entries(scrapedData).slice(0, 3);
    let previewText = "{\n";
    entries.forEach(([uuid, spell]) => {
      previewText += `  "${uuid}": {\n`;
      previewText += `    "category": "${spell.category}",\n`;
      previewText += `    "href": "${spell.href}",\n`;
      previewText += `    "id": "${spell.id}",\n`;
      previewText += `    "text": "${spell.text}"\n`;
      previewText += `  },\n`;
    });
    if (count > 3) previewText += `  … (${count - 3} autres)\n`;
    previewText += "}";
    preview.textContent = previewText;

    results.classList.add("visible");
    btnDl.disabled   = false;
    btnCopy.disabled = false;

    if (errLen > 0) {
      warnMsg.textContent = `⚠ ${errLen} ligne(s) ignorée(s) (structure inattendue).`;
    }

  } catch (e) {
    setStatus("error", "Erreur JS : " + e.message);
    btnScrape.disabled = false;
  }
});

// Télécharger le JSON
btnDl.addEventListener("click", () => {
  if (!scrapedData) return;
  const json = JSON.stringify(scrapedData, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url  = URL.createObjectURL(blob);
  chrome.downloads.download({
    url,
    filename: "pf2e_spells_uuid.json",
    saveAs: false
  });
  btnDl.textContent = "✓ Téléchargé !";
  setTimeout(() => { btnDl.textContent = "↓ Télécharger JSON"; }, 2000);
});

// Copier dans le presse-papier
btnCopy.addEventListener("click", async () => {
  if (!scrapedData) return;
  const json = JSON.stringify(scrapedData, null, 2);
  await navigator.clipboard.writeText(json);
  btnCopy.textContent = "✓ Copié !";
  setTimeout(() => { btnCopy.textContent = "⎘ Copier dans le presse-papier"; }, 2000);
});

// Init
checkPage();
