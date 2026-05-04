"use strict";

/*
=========================================================
PF2_LINKS_SCRAPER
Enrichit chaque entrée de OBJECT.CONST avec :
  - traits       : string[]
  - required     : string[]   (prérequis)
  - description  : string

→ Coller dans la console sur n'importe quelle page de
  https://pf2e.pathfinder-fr.org/
  (le script navigue lui-même vers chaque href)

Prérequis : avoir OBJECT.CONST en mémoire (coller links.json
avant, ou laisser le script le chercher dans window.LINKS_DATA)
=========================================================
*/

const PF2_LINKS_SCRAPER = (function () {

    const self = {};

    /* ── utils ─────────────────────────────────────────── */

    self.wait = (ms) => new Promise(r => setTimeout(r, ms));

    self.waitFor = async (selector, timeout = 8000) => {
        const start = Date.now();
        while (!document.querySelector(selector)) {
            if (Date.now() - start > timeout) throw new Error(`Timeout: ${selector} introuvable`);
            await self.wait(150);
        }
    };

    /* ── navigation ─────────────────────────────────────── */

    self.navigateTo = (href) => {
        // href ex: "/feats/is3Oz9wt11lNq62K"
        const url = `https://pf2e.pathfinder-fr.org${href}`;
        window.location.href = url;
    };

    /* ── extraction ─────────────────────────────────────── */

    /**
     * Cherche le bloc de la fiche sur la page courante.
     * Les pages du site ont une structure `.description` similaire
     * aux fiches de classe — on s'adapte.
     */
    self.extractPageData = () => {

        const result = {
            traits     : [],
            required   : [],
            description: ""
        };

        // ── TRAITS ────────────────────────────────────────
        // Présents dans des balises .trait, .traits, span.trait, etc.
        const traitSelectors = [
            ".trait",
            ".traits .trait",
            "span.trait",
            ".tag.trait",
            "[class*='trait']"
        ];
        const traitSet = new Set();
        for (const sel of traitSelectors) {
            document.querySelectorAll(sel).forEach(el => {
                const t = el.innerText.trim();
                if (t) traitSet.add(t);
            });
        }
        result.traits = [...traitSet];

        // ── PRÉREQUIS ─────────────────────────────────────
        // Cherche un <p> ou une ligne qui commence par "Prérequis"
        const allParagraphs = document.querySelectorAll(".description p, .description li, p, li");
        for (const p of allParagraphs) {
            const txt = p.innerText.trim();
            if (/^pr[eé]requis/i.test(txt)) {
                // On prend ce qui suit le ":" ou toute la ligne
                const afterColon = txt.includes(":") ? txt.split(":").slice(1).join(":").trim() : txt;
                // Split sur virgule ou "et"
                const parts = afterColon
                    .split(/,|\bet\b/)
                    .map(s => s.trim())
                    .filter(Boolean);
                result.required.push(...parts);
            }
        }

        // ── DESCRIPTION ───────────────────────────────────
        // On collecte tous les <p> qui ne sont pas traits/prérequis/titre
        const descParts = [];
        const descRoot  = document.querySelector(".description");

        if (descRoot) {
            const children = descRoot.querySelectorAll("p, ul, ol");
            for (const el of children) {
                const txt = el.innerText.trim();
                if (!txt) continue;
                // Exclure les lignes de traits / prérequis / source
                if (/^pr[eé]requis/i.test(txt)) continue;
                if (/^source/i.test(txt))        continue;
                if (result.traits.some(t => txt === t)) continue;
                descParts.push(txt);
            }
        }

        // Fallback si pas de .description : prendre tous les <p> hors header
        if (!descParts.length) {
            document.querySelectorAll("main p, article p").forEach(p => {
                const txt = p.innerText.trim();
                if (!txt)                          return;
                if (/^pr[eé]requis/i.test(txt))    return;
                if (/^source/i.test(txt))           return;
                descParts.push(txt);
            });
        }

        result.description = descParts.join("\n\n");
        return result;
    };

    /* ── moteur principal ────────────────────────────────── */

    /**
     * Lance le scraping en mode "session persistante" :
     * à chaque chargement de page, le script relit son état
     * depuis sessionStorage, traite l'entrée courante, sauvegarde,
     * puis navigue vers la suivante.
     *
     * Usage :
     *   1. Charger OBJECT.CONST (coller le JSON dans la console)
     *   2. PF2_LINKS_SCRAPER.start(OBJECT.CONST)
     *
     * Le script se relance automatiquement à chaque navigation.
     * Quand tout est fini, il télécharge enriched_links.json.
     */
    self.start = (linksObj) => {

        // Initialiser l'état dans sessionStorage
        const ids = Object.keys(linksObj);
        const state = {
            entries : linksObj,       // l'objet complet (enrichi au fur et à mesure)
            queue   : ids,            // IDs restants à traiter
            current : null            // ID en cours de traitement
        };

        sessionStorage.setItem("pf2scraper", JSON.stringify(state));
        console.log(`[PF2_SCRAPER] Démarrage — ${ids.length} entrées à traiter.`);

        // Lancer la boucle
        self._resume();
    };

    /**
     * Appelé automatiquement au chargement si un état existe.
     * Peut aussi être appelé manuellement.
     */
    self._resume = async () => {

        const raw = sessionStorage.getItem("pf2scraper");
        if (!raw) {
            console.warn("[PF2_SCRAPER] Aucun état trouvé. Appelle start(OBJECT.CONST) d'abord.");
            return;
        }

        const state = JSON.parse(raw);

        // ── Si on vient d'arriver sur une page à scraper ──
        if (state.current) {
            const id    = state.current;
            const entry = state.entries[id];

            console.log(`[PF2_SCRAPER] Extraction de "${entry.text}" (${id})…`);

            // Attendre que la page soit prête
            try {
                await self.waitFor(".description, main p", 6000);
            } catch (e) {
                console.warn(`[PF2_SCRAPER] Page non chargée pour ${id}, on passe.`);
            }

            await self.wait(400); // laisser le rendu JS se stabiliser

            const data = self.extractPageData();
            entry.traits      = data.traits;
            entry.required    = data.required;
            entry.description = data.description;

            state.entries[id] = entry;
            state.current     = null;

            console.log(`[PF2_SCRAPER] ✓ "${entry.text}" — traits: [${data.traits.join(", ")}]`);
        }

        // ── Prendre la prochaine entrée ────────────────────
        if (state.queue.length === 0) {
            console.log("[PF2_SCRAPER] ✅ Terminé ! Téléchargement…");
            sessionStorage.removeItem("pf2scraper");
            self._download(state.entries, "enriched_links.json");
            return;
        }

        const nextId    = state.queue.shift();
        const nextEntry = state.entries[nextId];

        // Entrées sans href valide → skip
        if (!nextEntry.href) {
            console.log(`[PF2_SCRAPER] Skip (pas de href) : ${nextId}`);
            state.current = null;
            sessionStorage.setItem("pf2scraper", JSON.stringify(state));
            await self.wait(50);
            self._resume();
            return;
        }

        state.current = nextId;
        sessionStorage.setItem("pf2scraper", JSON.stringify(state));

        const remaining = state.queue.length;
        console.log(`[PF2_SCRAPER] → Navigation vers "${nextEntry.text}" (${remaining} restants)…`);

        await self.wait(300);
        self.navigateTo(nextEntry.href);
        // La page va se recharger → le script doit se relancer
        // via l'auto-lancement en bas de ce fichier
    };

    /* ── téléchargement ──────────────────────────────────── */

    self._download = (data, filename) => {
        const blob = new Blob([JSON.stringify(data, null, 4)], { type: "application/json" });
        const url  = URL.createObjectURL(blob);
        const a    = document.createElement("a");
        a.href     = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    };

    /* ── sauvegarde manuelle (état intermédiaire) ─────────── */

    self.saveNow = () => {
        const raw = sessionStorage.getItem("pf2scraper");
        if (!raw) { console.warn("Pas d'état en cours."); return; }
        const state = JSON.parse(raw);
        self._download(state.entries, "enriched_links_partial.json");
    };

    /* ── pause / reprise manuelle ─────────────────────────── */

    self.pause = () => {
        const raw = sessionStorage.getItem("pf2scraper");
        if (!raw) return;
        const state = JSON.parse(raw);
        state._paused = true;
        sessionStorage.setItem("pf2scraper", JSON.stringify(state));
        console.log("[PF2_SCRAPER] ⏸ Mis en pause. Appelle PF2_LINKS_SCRAPER.resume() pour reprendre.");
    };

    self.resume = () => {
        const raw = sessionStorage.getItem("pf2scraper");
        if (!raw) return;
        const state = JSON.parse(raw);
        delete state._paused;
        sessionStorage.setItem("pf2scraper", JSON.stringify(state));
        console.log("[PF2_SCRAPER] ▶ Reprise…");
        self._resume();
    };

    return self;

})();

/*
=========================================================
AUTO-LANCEMENT
À chaque chargement de page, si un état de scraping existe
ET n'est pas en pause → on reprend automatiquement.
=========================================================
*/
(async () => {
    await PF2_LINKS_SCRAPER.wait(600); // laisser le DOM se stabiliser

    const raw = sessionStorage.getItem("pf2scraper");
    if (!raw) {
        console.log(`[PF2_SCRAPER] Prêt.
► Pour lancer : PF2_LINKS_SCRAPER.start(OBJECT.CONST)
  (assure-toi d'avoir OBJECT.CONST en mémoire)
► Pour reprendre après un rechargement manuel : PF2_LINKS_SCRAPER.resume()
► Pour sauvegarder l'état intermédiaire : PF2_LINKS_SCRAPER.saveNow()`);
        return;
    }

    const state = JSON.parse(raw);
    if (state._paused) {
        console.log("[PF2_SCRAPER] ⏸ En pause. Appelle PF2_LINKS_SCRAPER.resume() pour reprendre.");
        return;
    }

    console.log("[PF2_SCRAPER] Auto-reprise détectée…");
    PF2_LINKS_SCRAPER._resume();
})();