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

    /* ── transformation HTML description ───────────────── */

    /**
     * Transforme le HTML brut d'un nœud .description en HTML propre :
     *  - <strong>Texte</strong>  →  "Texte"
     *  - <elt-foundry-annotation formula="@UUID[...Item.UUID]">
     *      →  <div class="gs-link-information" onclick="...UUID...">Texte</div>
     *  - <p>...</p>              →  contenu + <br>
     *  - <ul>/<ol>/<li>          →  conservés tels quels
     *  - <mat-icon> et balises Angular → supprimés
     *  - \n multiples            →  nettoyés
     */
    const transformDescription = (descRoot) => {
        if (!descRoot) return "";

        // Clone pour ne pas toucher le DOM réel
        const clone = descRoot.cloneNode(true);

        // 1. Supprimer les balises inutiles (icônes Angular, router-outlet…)
        clone.querySelectorAll("mat-icon, app-action-icon, router-outlet").forEach(el => el.remove());

        // 2. Transformer elt-foundry-annotation → gs-link-information
        clone.querySelectorAll("elt-foundry-annotation").forEach(el => {
            const formula = el.getAttribute("formula") || "";
            // Extraire l'UUID : @UUID[Compendium.pf2e.xxx.Item.UUID]
            const match = formula.match(/\.([A-Za-z0-9]+)\]$/);
            const uuid  = match ? match[1] : null;
            const label = (el.querySelector("span") || el).innerText.trim();

            if (uuid) {
                const div = document.createElement("div");
                div.className = "gs-link-information";
                div.setAttribute("onclick",
                    `CONTROLLER.Main.doActionAfter('event__show_information', {'param__information__uuid': '${uuid}'})`
                );
                div.textContent = label;
                el.replaceWith(div);
            } else {
                // Pas d'UUID reconnu → texte brut
                el.replaceWith(label);
            }
        });

        // 3. Transformer <strong> → "texte entre guillemets"
        clone.querySelectorAll("strong").forEach(el => {
            const txt = el.innerText.trim();
            el.replaceWith(`"${txt}"`);
        });

        // 4. Transformer <em> / <i> → <em> conservé (ou texte simple)
        // On les garde tels quels, c'est du HTML de toute façon

        // 5. Construire la sortie HTML propre nœud par nœud
        const parts = [];

        clone.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                const t = node.textContent.trim();
                if (t) parts.push(t);
                return;
            }
            if (node.nodeType !== Node.ELEMENT_NODE) return;

            const tag = node.tagName.toLowerCase();

            if (tag === "p") {
                // Sérialiser le contenu interne (conserve les div gs-link etc.)
                const inner = serializeInner(node);
                if (inner.trim()) parts.push(`<p>${inner.trim()}</p>`);
            }
            else if (tag === "ul" || tag === "ol") {
                parts.push(serializeList(node, tag));
            }
            else if (tag === "h1" || tag === "h2" || tag === "h3" || tag === "h4") {
                const inner = serializeInner(node);
                if (inner.trim()) parts.push(`<${tag}>${inner.trim()}</${tag}>`);
            }
            else {
                // Autres balises → on prend le texte
                const t = node.innerText?.trim();
                if (t) parts.push(t);
            }
        });

        return parts.join("\n");
    };

    /** Sérialise le contenu interne d'un nœud en HTML string */
    const serializeInner = (node) => {
        let html = "";
        node.childNodes.forEach(child => {
            if (child.nodeType === Node.TEXT_NODE) {
                html += child.textContent;
                return;
            }
            if (child.nodeType !== Node.ELEMENT_NODE) return;
            const tag = child.tagName.toLowerCase();
            if (tag === "div" && child.className.includes("gs-link-information")) {
                // Déjà transformé — reconstruire l'attribut onclick
                const onclick = child.getAttribute("onclick") || "";
                html += `<div class="gs-link-information" onclick="${onclick}">${child.textContent}</div>`;
            } else if (tag === "br") {
                html += "<br>";
            } else if (tag === "em" || tag === "i") {
                html += `<em>${child.innerText}</em>`;
            } else {
                html += child.innerText || child.textContent || "";
            }
        });
        return html;
    };

    /** Sérialise un ul/ol avec ses li */
    const serializeList = (node, tag) => {
        let html = `<${tag}>`;
        node.querySelectorAll(":scope > li").forEach(li => {
            const inner = serializeInner(li);
            html += `<li>${inner.trim()}</li>`;
        });
        html += `</${tag}>`;
        return html;
    };

    const extractPageData = () => {
        const result = { element_type: null, action_cost: null, traits: [], required: [], price: null, bulk: null, description: "" };

        // ── Element type ──────────────────────────────────
        const elementTypeEl = document.querySelector(".header .element-type");
        if (elementTypeEl) result.element_type = cleanText(elementTypeEl);

        // ── Action cost ───────────────────────────────────
        // Structure : .title > app-action-icon > span.pf2-icon
        // Valeurs : "1", "2", "3", "4", "5" (5 = réaction)
        const pf2IconEl = document.querySelector(".title .pf2-icon");
        if (pf2IconEl) result.action_cost = cleanText(pf2IconEl);

        // ── Traits ────────────────────────────────────────
        // Structure réelle : div.trait dans .traits-container
        const traitSet = new Set();
        document.querySelectorAll(".traits-container .trait").forEach(el => {
            const t = cleanText(el);
            if (t) traitSet.add(t);
        });
        result.traits = [...traitSet];

        // ── Prérequis / Prix / Encombrement ───────────────
        // Structure réelle : .metadata > div > strong "Prérequis|Prix|Encombrement" + span ou texte
        document.querySelectorAll(".metadata > div").forEach(div => {
            const strong = div.querySelector("strong");
            if (!strong) return;
            const label = cleanText(strong).toLowerCase();

            if (/pr[eé]requis/.test(label)) {
                const spans = div.querySelectorAll("span");
                if (spans.length) {
                    spans.forEach(span => {
                        const txt = cleanText(span);
                        if (txt) result.required.push(txt);
                    });
                } else {
                    const rest = cleanText(div).replace(cleanText(strong), "").trim();
                    if (rest) result.required.push(rest);
                }
            }

            if (/prix/.test(label)) {
                // Le prix est un texte direct après le <strong>, pas dans un <span>
                const fullTxt = cleanText(div);
                result.price  = fullTxt.replace(cleanText(strong), "").trim();
            }

            if (/encombrement/.test(label)) {
                const fullTxt = cleanText(div);
                result.bulk   = fullTxt.replace(cleanText(strong), "").trim();
            }
        });

        // ── Description ───────────────────────────────────
        // On conserve le HTML propre : p, ul/ol/li, gs-link-information
        const descRoot = document.querySelector(".description");
        result.description = transformDescription(descRoot);
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
            entry.element_type = data.element_type;
            entry.action_cost  = data.action_cost;
            entry.traits       = data.traits;
            entry.required     = data.required;
            entry.price        = data.price;
            entry.bulk         = data.bulk;
            entry.description  = data.description;

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
            chrome.runtime.sendMessage({ type: "done", state }).catch(() => {});
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