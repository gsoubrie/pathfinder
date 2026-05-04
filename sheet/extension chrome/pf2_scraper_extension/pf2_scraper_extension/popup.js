"use strict";

/*
=========================================================
PF2e LINKS SCRAPER — popup.js
=========================================================
*/

const $ = (id) => document.getElementById(id);

const toast = (msg, duration = 2500) => {
    const el = $("toast");
    el.textContent = msg;
    el.classList.add("show");
    setTimeout(() => el.classList.remove("show"), duration);
};

const updateProgress = (done, total, last) => {
    const pct = total ? Math.round((done / total) * 100) : 0;
    $("prog-count").textContent = `${done} / ${total}`;
    $("prog-bar").style.width   = `${pct}%`;
    $("prog-last").textContent  = last ? `↳ ${last}` : "—";
    $("status-box").classList.add("visible");
};

/* ── Lecture de l'état courant au démarrage ─────────── */
chrome.storage.local.get("pf2scraper", (data) => {
    const state = data.pf2scraper;
    if (state && !state._paused) {
        const done  = state.done  || 0;
        const total = state.total || 0;
        updateProgress(done, total, state.current ? state.entries[state.current]?.text : null);
    }
});

/* ── Lancer ─────────────────────────────────────────── */
$("btn-start").addEventListener("click", () => {
    const raw = $("json-input").value.trim();
    if (!raw) { toast("⚠ Colle ton JSON d'abord !"); return; }

    let entries;
    try {
        entries = JSON.parse(raw);
    } catch (e) {
        toast("⚠ JSON invalide !");
        return;
    }

    // Normalise : accepte soit l'objet direct, soit { CONST: {...} }
    if (entries.CONST) entries = entries.CONST;

    const ids   = Object.keys(entries);
    const state = {
        entries,
        queue  : ids.slice(),    // copie de la liste
        current: null,
        done   : 0,
        total  : ids.length,
        _paused: false
    };

    chrome.storage.local.set({ pf2scraper: state }, () => {
        toast(`▶ Démarrage — ${ids.length} entrées`);
        updateProgress(0, ids.length, null);

        // Ouvrir / activer un onglet sur le site pour déclencher le content script
        chrome.tabs.query({ url: "https://pf2e.pathfinder-fr.org/*" }, (tabs) => {
            if (tabs.length > 0) {
                chrome.tabs.reload(tabs[0].id);
            } else {
                chrome.tabs.create({ url: "https://pf2e.pathfinder-fr.org/" });
            }
        });
    });
});

/* ── Sauvegarder (partiel) ───────────────────────────── */
$("btn-save").addEventListener("click", () => {
    chrome.runtime.sendMessage({ type: "savePartial" }, () => {
        toast("💾 Sauvegarde en cours…");
    });
});

/* ── Arrêter ─────────────────────────────────────────── */
$("btn-stop").addEventListener("click", () => {
    chrome.storage.local.get("pf2scraper", (data) => {
        const state = data.pf2scraper;
        if (!state) { toast("Rien à arrêter."); return; }
        state._paused = true;
        chrome.storage.local.set({ pf2scraper: state }, () => {
            toast("⏸ Mis en pause — sauvegarde partielle…");
            chrome.runtime.sendMessage({ type: "savePartial" });
        });
    });
});

/* ── Messages du content script ─────────────────────── */
chrome.runtime.onMessage.addListener((msg) => {
    if (msg.type === "progress") {
        updateProgress(msg.done, msg.total, msg.last);
    }
    if (msg.type === "done") {
        updateProgress(msg.total, msg.total, "Terminé !");
        toast("✅ Fichier téléchargé !", 4000);
    }
});
