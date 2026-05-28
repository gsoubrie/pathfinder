// content.js — injecté sur chaque page pf2e.pathfinder-fr.org
// Écoute une demande d'extraction depuis le background

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "extract_page") {
    // Petit délai pour laisser Angular finir le rendu
    setTimeout(() => {
      try {
        const result = extractPage();
        sendResponse({ success: true, data: result });
      } catch (e) {
        sendResponse({ success: false, error: e.message });
      }
    }, 800);
    return true; // async
  }
  if (request.action === "ping") {
    sendResponse({ ready: true });
    return true;
  }
});

// ─── Routeur principal ────────────────────────────────────────────────────────
function extractPage() {
  const path     = window.location.pathname;
  const segments = path.split("/").filter(Boolean);
  const category = segments[0];  // "ancestries", "classes", etc.
  const id       = segments[1];

  const links = extractLinks();

  let data = {};
  switch (category) {
    case "ancestries":
      data = extractAncestry();
      break;
    default:
      data = { _raw: true, text: document.body.innerText.slice(0, 500) };
  }

  return {
    category,
    id,
    href: path,
    data,
    links
  };
}

// ─── Extraction des liens internes ───────────────────────────────────────────
function extractLinks() {
  // Toutes les elt-foundry-annotation avec un href interne
  const anchors = document.querySelectorAll("elt-foundry-annotation a[href]");
  // Regroupement par catégorie (premier segment du href)
  const byCategory = {};

  anchors.forEach(a => {
    const href     = a.getAttribute("href");
    const parts    = href.split("/").filter(Boolean);
    const cat      = parts[0];   // ex: "heritages", "feats", "spells"…
    const linkId   = parts[1];
    const name     = a.textContent.trim();

    if (!cat || !linkId) return;

    if (!byCategory[cat]) byCategory[cat] = {};

    // Clé = id pour éviter les doublons
    byCategory[cat][linkId] = {
      id:       linkId,
      href:     href,
      name:     name,
      category: cat
    };
  });

  return byCategory;
}

// ─── Extraction d'une race (ancestry) ────────────────────────────────────────
function extractAncestry() {
  const result = {};

  // Nom principal (h1 ou titre de la page)
  const h1 = document.querySelector("h1, .title, [class*='title']");
  result.name = h1 ? cleanText(h1) : "";

  // Ouvre le panneau de détail si pas encore ouvert (click sur la ligne)
  // Sur une page dédiée /ancestries/{id}, le détail est directement visible
  const detailBlock = document.querySelector(".description, [class*='description'], .detail-content");

  if (!detailBlock) {
    // Fallback : tout le texte de la page principale
    result._fallback = true;
    return result;
  }

  const children = Array.from(detailBlock.children);

  // Traits
  const traits = document.querySelectorAll(".trait");
  result.traits = Array.from(traits).map(t => cleanText(t));

  // Parcours des sections
  let currentSection = "general_desc";
  result[currentSection] = [];

  children.forEach(el => {
    const tag  = el.tagName.toUpperCase();
    const text = cleanText(el);

    if (tag === "H2" || tag === "H3") {
      currentSection = parseSectionTitle(text);
      if (!["Vous", "Les autres", "Vous pourriez...", "Les autres pourraient…"].includes(currentSection)) {
        if (!result[currentSection]) result[currentSection] = [];
      }
      return;
    }

    switch (currentSection) {
      case "Vous":
      case "Les autres":
      case "Vous pourriez...":
      case "Les autres pourraient…":
        result["general_desc"].push(currentSection + " : " + el.innerHTML.replace(/\n/g, ""));
        break;

      case "noms":
        // On ignore les noms
        break;

      case "mecanic":
        parseMecanic(el, result);
        break;

      default:
        if (text) {
          if (!result[currentSection]) result[currentSection] = [];
          result[currentSection].push(text);
        }
    }
  });

  return result;
}

// ─── Parsing des mécaniques ───────────────────────────────────────────────────
function parseMecanic(el, result) {
  const strong = el.querySelector("strong");
  if (!strong) {
    if (!result["mecanic"]) result["mecanic"] = [];
    result["mecanic"].push(cleanText(el));
    return;
  }

  const label = cleanText(strong);
  const full  = cleanText(el);
  // Retire le label du début pour garder la valeur seule
  const value = full.replace(label, "").trim();

  switch (label) {
    case "Points de vie":
      result.start_life = parseInt(value) || value;
      break;
    case "Taille":
      result.body_size = parseTaille(value);
      break;
    case "Vitesse":
      result.speed = parseInt(value) || value;
      break;
    case "Primes d'attributs":
      result.characteristics_bonus = value.split(", ").map(s => s.trim());
      break;
    case "Pénalité d'attribut":
    case "Pénalités d'attribut":
      result.characteristics_malus = value.split(", ").map(s => s.trim());
      break;
    case "Langues":
      result.language = value.split(", ").map(s => s.trim());
      break;
    case "Langues supplémentaires":
      // Retire le texte fixe pour ne garder que la liste
      const cleaned = value
        .replace(/^égal à votre modificateur d'Intelligence \(si(l est)? positif\)\. Choisissez parmi\s*/i, "")
        .replace(/ et toute autre langue.*$/i, "")
        .trim();
      result.language_sup = cleaned.split(", ").map(s => s.trim());
      break;
    case "Sens":
      result.sens = value;
      break;
    default:
      if (!result["mecanic"]) result["mecanic"] = [];
      result["mecanic"].push(cleanText(el));
  }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function parseSectionTitle(text) {
  if (text.startsWith("Méchaniques") || text.startsWith("Mécaniques")) return "mecanic";
  if (text.startsWith("Héritages")) return "legacies";
  const map = {
    "Vous...":                   "Vous",
    "Probablement que les autres...": "Les autres",
    "Vous pourriez...":          "Vous pourriez...",
    "Les autres pourraient…":    "Les autres pourraient…",
    "Description physique":      "physical_desc",
    "Description Physique":      "physical_desc",
    "Société":                   "society_desc",
    "Croyances":                 "believe_desc",
    "Noms":                      "noms",
  };
  return map[text] || text;
}

function parseTaille(value) {
  const map = {
    "Moyenne":     "M",
    "Petite":      "P",
    "Très petite": "TP",
    "Grande":      "G",
    "Très grande": "TG",
    "Gigantesque": "T",
  };
  return map[value] || value;
}

function cleanText(el) {
  if (!el) return "";
  // Clone pour ne pas modifier le DOM
  const clone = el.cloneNode ? el.cloneNode(true) : el;
  if (clone.querySelectorAll) {
    clone.querySelectorAll("app-action-icon, mat-icon, .mat-icon").forEach(n => n.remove());
  }
  return (clone.textContent || clone.innerText || "").replace(/\s+/g, " ").trim();
}
