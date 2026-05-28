// background.js — service worker
// Orchestre l'ouverture des pages et la collecte des données

const STATE_KEY   = "extract_state";
const TIMEOUT_MS  = 10000; // 10s avant retry
const RETRY_MAX   = 1;

// ─── Initialisation de l'état ─────────────────────────────────────────────────
function defaultState() {
  return {
    running:   false,
    queue:     [],      // [{id, href, category, text}]
    current:   null,    // item en cours
    retries:   0,
    results:   {},      // id → extracted data
    errors:    [],      // [{id, href, error}]
    tabId:     null,
    total:     0,
    done:      0,
  };
}

async function getState() {
  return new Promise(resolve => {
    chrome.storage.local.get(STATE_KEY, data => {
      resolve(data[STATE_KEY] || defaultState());
    });
  });
}

async function setState(state) {
  return new Promise(resolve => {
    chrome.storage.local.set({ [STATE_KEY]: state }, resolve);
  });
}

// ─── Messages depuis le popup ─────────────────────────────────────────────────
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

  if (request.action === "start_extraction") {
    startExtraction(request.items).then(sendResponse);
    return true;
  }

  if (request.action === "get_state") {
    getState().then(sendResponse);
    return true;
  }

  if (request.action === "reset") {
    chrome.storage.local.remove(STATE_KEY, () => sendResponse({ ok: true }));
    return true;
  }

  if (request.action === "get_results") {
    getState().then(state => sendResponse({ results: state.results, errors: state.errors }));
    return true;
  }
});

// ─── Démarrage ────────────────────────────────────────────────────────────────
async function startExtraction(items) {
  const state    = defaultState();
  state.running  = true;
  state.queue    = [...items];
  state.total    = items.length;
  await setState(state);
  processNext();
  return { ok: true, total: items.length };
}

// ─── Boucle principale ────────────────────────────────────────────────────────
async function processNext() {
  const state = await getState();

  if (!state.running || state.queue.length === 0) {
    state.running = false;
    await setState(state);
    notifyPopup({ action: "extraction_done" });
    return;
  }

  // Prend le prochain item
  const item      = state.queue.shift();
  state.current   = item;
  state.retries   = 0;
  await setState(state);

  notifyPopup({ action: "progress", done: state.done, total: state.total, current: item });

  openAndExtract(item, 0);
}

// ─── Ouvre un onglet et extrait ───────────────────────────────────────────────
async function openAndExtract(item, attempt) {
  const url = "https://pf2e.pathfinder-fr.org" + item.href;

  // Ouvre ou réutilise l'onglet
  const state = await getState();
  let tabId   = state.tabId;

  if (tabId) {
    try {
      await chrome.tabs.update(tabId, { url });
    } catch {
      tabId = null;
    }
  }

  if (!tabId) {
    const tab = await chrome.tabs.create({ url, active: false });
    tabId = tab.id;
    const s   = await getState();
    s.tabId   = tabId;
    await setState(s);
  }

  // Attend le chargement complet
  waitForTabReady(tabId, TIMEOUT_MS, async (loaded) => {
    if (!loaded) {
      // Timeout
      if (attempt < RETRY_MAX) {
        notifyPopup({ action: "retry", item, attempt: attempt + 1 });
        openAndExtract(item, attempt + 1);
      } else {
        await recordError(item, "Timeout après " + RETRY_MAX + " tentative(s)");
        processNext();
      }
      return;
    }

    // Injecte et extrait
    try {
      const response = await chrome.tabs.sendMessage(tabId, { action: "extract_page" });
      if (response && response.success) {
        await recordResult(item, response.data);
      } else {
        await recordError(item, response ? response.error : "Pas de réponse");
      }
    } catch (e) {
      // Le content script n'est peut-être pas prêt : on réinjecte
      if (attempt < RETRY_MAX) {
        try {
          await chrome.scripting.executeScript({ target: { tabId }, files: ["content.js"] });
          await sleep(1000);
          const r2 = await chrome.tabs.sendMessage(tabId, { action: "extract_page" });
          if (r2 && r2.success) {
            await recordResult(item, r2.data);
          } else {
            await recordError(item, r2 ? r2.error : "Échec après ré-injection");
          }
        } catch (e2) {
          await recordError(item, e2.message);
        }
      } else {
        await recordError(item, e.message);
      }
    }

    processNext();
  });
}

// ─── Attend que l'onglet soit chargé ─────────────────────────────────────────
function waitForTabReady(tabId, timeout, callback) {
  const start = Date.now();

  function check() {
    if (Date.now() - start > timeout) {
      callback(false);
      return;
    }
    chrome.tabs.get(tabId, tab => {
      if (chrome.runtime.lastError || !tab) { callback(false); return; }
      if (tab.status === "complete") {
        // Petit délai pour Angular
        setTimeout(() => callback(true), 1500);
      } else {
        setTimeout(check, 300);
      }
    });
  }
  check();
}

// ─── Enregistrement ───────────────────────────────────────────────────────────
async function recordResult(item, data) {
  const state = await getState();
  state.results[item.id] = { ...item, extracted: data };
  state.done++;
  await setState(state);
  notifyPopup({ action: "progress", done: state.done, total: state.total, current: item });
}

async function recordError(item, error) {
  const state = await getState();
  state.errors.push({ ...item, error });
  state.done++;
  await setState(state);
  notifyPopup({ action: "error", item, error });
}

// ─── Notifie le popup s'il est ouvert ─────────────────────────────────────────
function notifyPopup(msg) {
  chrome.runtime.sendMessage(msg).catch(() => {}); // ignore si popup fermé
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
