// popup.js

const jsonInput    = document.getElementById("json-input");
const btnLoad      = document.getElementById("btn-load");
const btnStart     = document.getElementById("btn-start");
const btnDownload  = document.getElementById("btn-download");
const btnReset     = document.getElementById("btn-reset");
const statusBar    = document.getElementById("status");
const statusText   = document.getElementById("status-text");
const progressWrap = document.getElementById("progress-wrap");
const progressFill = document.getElementById("progress-fill");
const progressTxt  = document.getElementById("progress-text");
const progressPct  = document.getElementById("progress-pct");
const currentItem  = document.getElementById("current-item");
const statsDiv     = document.getElementById("stats");
const statOk       = document.getElementById("stat-ok");
const statErr      = document.getElementById("stat-err");
const logDiv       = document.getElementById("log");

let loadedItems = null; // tableau [{id, href, category, text}]

// ─── Helpers UI ───────────────────────────────────────────────────────────────
function setStatus(type, text) {
  statusBar.className = "status-bar " + type;
  statusText.textContent = text;
}

function addLog(msg, isError = false) {
  const line = document.createElement("div");
  if (isError) line.className = "err";
  line.textContent = msg;
  logDiv.appendChild(line);
  logDiv.scrollTop = logDiv.scrollHeight;
}

function setProgress(done, total) {
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  progressFill.style.width = pct + "%";
  progressTxt.textContent  = `${done} / ${total}`;
  progressPct.textContent  = pct + "%";
}

// ─── Chargement depuis le textarea ───────────────────────────────────────────
btnLoad.addEventListener("click", () => parseJsonInput());
jsonInput.addEventListener("keydown", e => {
  if (e.key === "Enter" && e.ctrlKey) parseJsonInput();
});

function parseJsonInput() {
  const raw = jsonInput.value.trim();
  if (!raw) { setStatus("error", "Le champ JSON est vide."); return; }
  try {
    const json = JSON.parse(raw);

    // Accepte deux formats :
    // 1. Dict {id: {id, href, category, text}} (sorti par scrapper_spell_uuid)
    // 2. Tableau [{id, href, category, text}]
    let items;
    if (Array.isArray(json)) {
      items = json;
    } else {
      items = Object.values(json);
    }

    items = items.filter(it => it && it.href);

    if (items.length === 0) {
      setStatus("error", "JSON vide ou format invalide.");
      return;
    }

    loadedItems = items;
    setStatus("ok", `${items.length} éléments prêts à extraire.`);
    btnStart.disabled = false;
    btnReset.disabled = false;
    btnLoad.textContent = `✓ ${items.length} éléments chargés`;
    addLog(`JSON chargé : ${items.length} éléments (${items[0]?.category || "?"}).`);
  } catch (err) {
    setStatus("error", "JSON invalide : " + err.message);
  }
}

// ─── Lancement ────────────────────────────────────────────────────────────────
btnStart.addEventListener("click", async () => {
  if (!loadedItems) return;

  btnStart.disabled = true;
  progressWrap.classList.add("visible");
  currentItem.classList.add("visible");
  statsDiv.style.display = "none";
  logDiv.innerHTML = "";
  setProgress(0, loadedItems.length);
  setStatus("info", "Extraction en cours…");

  await chrome.runtime.sendMessage({
    action: "start_extraction",
    items: loadedItems
  });
});

// ─── Réinitialiser ────────────────────────────────────────────────────────────
btnReset.addEventListener("click", async () => {
  await chrome.runtime.sendMessage({ action: "reset" });
  loadedItems   = null;
  dropZone.classList.remove("loaded");
  dropZone.innerHTML = `Glissez-déposez votre JSON ici<br/><small>ou cliquez pour sélectionner</small>`;
  logDiv.innerHTML   = "";
  progressWrap.classList.remove("visible");
  currentItem.classList.remove("visible");
  statsDiv.style.display = "none";
  btnStart.disabled    = true;
  btnDownload.disabled = true;
  btnReset.disabled    = true;
  setStatus("", "Chargez un fichier JSON pour commencer.");
});

// ─── Téléchargement ───────────────────────────────────────────────────────────
btnDownload.addEventListener("click", async () => {
  const { results, errors } = await chrome.runtime.sendMessage({ action: "get_results" });
  const output = { results, errors, exported_at: new Date().toISOString() };
  const blob   = new Blob([JSON.stringify(output, null, 2)], { type: "application/json" });
  const url    = URL.createObjectURL(blob);
  const cat    = loadedItems?.[0]?.category || "elements";
  chrome.downloads.download({ url, filename: `pf2e_${cat}_extracted.json`, saveAs: false });
  btnDownload.textContent = "✓ Téléchargé !";
  setTimeout(() => { btnDownload.textContent = "↓ Télécharger les résultats"; }, 2000);
});

// ─── Messages du background ───────────────────────────────────────────────────
chrome.runtime.onMessage.addListener((msg) => {
  switch (msg.action) {

    case "progress":
      setProgress(msg.done, msg.total);
      if (msg.current) {
        currentItem.textContent = `⚙ ${msg.current.text || msg.current.id} (${msg.done + 1}/${msg.total})`;
      }
      break;

    case "retry":
      addLog(`↺ Retry ${msg.attempt}/${1} : ${msg.item.text || msg.item.id}`, false);
      setStatus("info", `Réessai en cours… ${msg.item.text || msg.item.id}`);
      break;

    case "error":
      addLog(`✗ ${msg.item.text || msg.item.id} — ${msg.error}`, true);
      break;

    case "extraction_done":
      chrome.runtime.sendMessage({ action: "get_state" }).then(state => {
        const ok  = Object.keys(state.results).length;
        const err = state.errors.length;
        setStatus("ok", `Terminé ! ${ok} extraits, ${err} erreur(s).`);
        currentItem.textContent = "✓ Extraction terminée.";
        statsDiv.style.display  = "flex";
        statOk.textContent      = ok;
        statErr.textContent     = err;
        btnDownload.disabled    = false;
        addLog(`─── Terminé : ${ok} OK / ${err} erreur(s) ───`);
      });
      break;
  }
});

// ─── Restaure l'état si le popup est rouvert pendant une extraction ───────────
chrome.runtime.sendMessage({ action: "get_state" }).then(state => {
  if (!state) return;
  if (state.running) {
    progressWrap.classList.add("visible");
    currentItem.classList.add("visible");
    setProgress(state.done, state.total);
    setStatus("info", "Extraction en cours…");
    btnReset.disabled = false;
    addLog("Extraction en cours, reprise de l'affichage…");
  } else if (Object.keys(state.results || {}).length > 0) {
    const ok  = Object.keys(state.results).length;
    const err = (state.errors || []).length;
    setStatus("ok", `Résultats disponibles : ${ok} extraits, ${err} erreur(s).`);
    progressWrap.classList.add("visible");
    setProgress(state.done, state.total);
    statsDiv.style.display = "flex";
    statOk.textContent     = ok;
    statErr.textContent    = err;
    btnDownload.disabled   = false;
    btnReset.disabled      = false;
    addLog(`Résultats en mémoire : ${ok} éléments. Téléchargez ou réinitialisez.`);
  }
});