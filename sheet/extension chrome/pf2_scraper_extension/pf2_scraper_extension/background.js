"use strict";

/*
=========================================================
PF2e LINKS SCRAPER — background service worker
Reçoit les messages du content script et du popup
=========================================================
*/

// Quand le scraping est terminé → déclenche le téléchargement
chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {

    if (msg.type === "done") {
        const json = JSON.stringify(msg.entries, null, 4);
        const url  = `data:application/json;charset=utf-8,${encodeURIComponent(json)}`;

        chrome.downloads.download({
            url,
            filename : "enriched_links.json",
            saveAs   : false
        });

        sendResponse({ ok: true });
    }

    if (msg.type === "savePartial") {
        // Demandé par le popup : sauvegarde intermédiaire
        chrome.storage.local.get("pf2scraper", (data) => {
            if (!data.pf2scraper) return;
            const json = JSON.stringify(data.pf2scraper.entries, null, 4);
            const url  = `data:application/json;charset=utf-8,${encodeURIComponent(json)}`;
            chrome.downloads.download({
                url,
                filename : "enriched_links_partial.json",
                saveAs   : false
            });
        });
        sendResponse({ ok: true });
    }

    return true; // keepAlive pour réponse async
});
