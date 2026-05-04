"use strict";

/*
=========================================================
PF2e LINKS SCRAPER — content script
Injecté automatiquement sur chaque page pf2e.pathfinder-fr.org
=========================================================
*/

const PF2S = (() => {

    /* ── utils ──────────────────────────────────────────── */

    const wait    = (ms) => new Promise(r => setTimeout(r, ms));

    const waitFor = (selector, timeout = 8000) => new Promise((resolve, reject) => {
        const start = Date.now();
        const check = () => {
            const el = document.querySelector(selector);
            if (el) return resolve(el);
            if (Date.now() - start > timeout) return reject(new Error(`Timeout: ${selector}`));
            setTimeout(check, 200);
        };
        check();
    });

    /* ── state (chrome.storage.local) ──────────────────── */

    const loadState  = () => new Promise(r => chrome.storage.local.get("pf2scraper", d => r(d.pf2scraper || null)));
    const saveState  = (s) => new Promise(r => chrome.storage.local.set({ pf2scraper: s }, r));
    const clearState = ()  => new Promise(r => chrome.storage.local.remove("pf2scraper", r));

    /* ── extraction ─────────────────────────────────────── */

    const cleanText = (el) => el ? el.innerText.replace(/\s+/g, " ").trim() : "";

    const extractPageData = () => {
        const result = { traits: [], required: [], description: "" };

        // ── Traits ────────────────────────────────────────
        // Le site utilise diverses classes selon la catégorie
        const traitSelectors = [
            ".trait",
            ".traits .trait",
            "span.trait",
            ".tag",
            "[class*='trait']",
            ".rarity",
            ".alignment"
        ];
        const traitSet = new Set();
        for (const sel of traitSelectors) {
            document.querySelectorAll(sel).forEach(el => {
                const t = cleanText(el);
                // Filtrer les textes trop longs (pas des traits)
                if (t && t.length < 60 && !t.includes("\n")) traitSet.add(t);
            });
        }
        result.traits = [...traitSet];

        // ── Prérequis ─────────────────────────────────────
        const allNodes = document.querySelectorAll(
            ".description p, .description li, main p, article p, .stat-block p"
        );
        for (const el of allNodes) {
            const txt = cleanText(el);
            if (/^pr[eé]requis\s*:/i.test(txt)) {
                const afterColon = txt.split(":").slice(1).join(":").trim();
                const parts = afterColon
                    .split(/,\s*|\s+et\s+/)
                    .map(s => s.trim())
                    .filter(Boolean);
                result.required.push(...parts);
            }
        }

        // ── Description ───────────────────────────────────
        const descParts = [];

        // Cherche le conteneur principal
        const descRoot = document.querySelector(
            ".description, .content, .stat-block, main article, main .entry"
        );

        const collectText = (root) => {
            if (!root) return;
            root.querySelectorAll("p, li, h3, h4").forEach(el => {
                const txt = cleanText(el);
                if (!txt || txt.length < 3)               return;
                if (/^pr[eé]requis\s*:/i.test(txt))       return;
                if (/^source\s*:/i.test(txt))              return;
                if (/^fréquence\s*:/i.test(txt))           return; // on pourrait le capturer plus tard
                if (result.traits.includes(txt))           return;
                descParts.push(txt);
            });
        };

        collectText(descRoot);

        // Fallback : tout le main
        if (!descParts.length) {
            collectText(document.querySelector("main"));
        }

        result.description = descParts.join("\n\n");
        return result;
    };

    /* ── boucle principale ───────────────────────────────── */

    const run = async () => {
        const state = await loadState();
        if (!state || state._paused) return;

        // On vient d'arriver sur une page → scraper si on a un "current"
        if (state.current) {
            const id    = state.current;
            const entry = state.entries[id];

            // Attendre que le contenu soit là
            try {
                await waitFor(".description, main p, article p", 7000);
            } catch (_) {
                console.warn(`[PF2S] Timeout sur ${id}, passage à la suite.`);
            }

            await wait(500); // laisser Angular/React finir le rendu

            const data = extractPageData();
            entry.traits      = data.traits;
            entry.required    = data.required;
            entry.description = data.description;

            state.entries[id] = entry;
            state.current     = null;
            state.done        = (state.done || 0) + 1;

            await saveState(state);

            // Notifier le popup
            chrome.runtime.sendMessage({
                type   : "progress",
                done   : state.done,
                total  : state.total,
                last   : entry.text
            }).catch(() => {});

            console.log(`[PF2S] ✓ ${entry.text} — ${state.done}/${state.total}`);
        }

        // Prendre la prochaine entrée
        if (!state.queue || state.queue.length === 0) {
            console.log("[PF2S] ✅ Scraping terminé !");
            chrome.runtime.sendMessage({ type: "done", entries: state.entries }).catch(() => {});
            await clearState();
            return;
        }

        const nextId    = state.queue.shift();
        const nextEntry = state.entries[nextId];

        // Skip si pas de href
        if (!nextEntry || !nextEntry.href) {
            console.log(`[PF2S] Skip (sans href) : ${nextId}`);
            await saveState(state);
            await wait(100);
            run();
            return;
        }

        state.current = nextId;
        await saveState(state);

        console.log(`[PF2S] → "${nextEntry.text}" (${state.queue.length} restants)`);
        await wait(400);
        window.location.href = `https://pf2e.pathfinder-fr.org${nextEntry.href}`;
    };

    return { run };
})();

// Lancement automatique à chaque page
PF2S.run();
