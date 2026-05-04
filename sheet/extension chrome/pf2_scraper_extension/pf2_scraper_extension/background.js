"use strict";

/*
=========================================================
PF2e LINKS SCRAPER — background service worker
Reçoit les messages du content script et du popup
=========================================================
*/

// Reconstruit un objet ordonné depuis state.order
const buildOrdered = (state) => {
    const ordered = {};
    const keys = state.order || Object.keys(state.entries);
    keys.forEach(id => {
        if (state.entries[id]) ordered[id] = state.entries[id];
    });
    return ordered;
};

const triggerDownload = (entries, filename) => {
    const json = JSON.stringify(entries, null, 4);
    const url  = `data:application/json;charset=utf-8,${encodeURIComponent(json)}`;
    chrome.downloads.download({ url, filename, saveAs: false });
};

chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {

    if (msg.type === "done") {
        // state complet envoyé par content.js
        const ordered = buildOrdered(msg.state);
        triggerDownload(ordered, "enriched_links.json");
        sendResponse({ ok: true });
    }

    if (msg.type === "savePartial") {
        chrome.storage.local.get("pf2scraper", (data) => {
            if (!data.pf2scraper) return;
            const ordered = buildOrdered(data.pf2scraper);
            triggerDownload(ordered, "enriched_links_partial.json");
        });
        sendResponse({ ok: true });
    }

    return true;
});