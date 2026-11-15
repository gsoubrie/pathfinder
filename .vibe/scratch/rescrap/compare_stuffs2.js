// Validation du mapping STUFFS sur toutes les entrées communes (par name_en).
const fs = require("fs");
const ROOT = "C:/dev/workspace/Perso/Pathfinder";
const DATA = "C:/dev/workspace/Perso/Pathfinder/.vibe/scratch/rescrap/data";

let code = fs.readFileSync(ROOT + "/sheet/js/stuffs/constant_stuffs.js", "utf8").replace(/"use strict";/, "").replace(/^var\s+/m, "");
const sb = { STUFFS: null };
new Function("sandbox", "with (sandbox) { " + code + " }")(sb);
const curByEn = {};
for (const e of sb.STUFFS) curByEn[e.name_en] = e;

const eq = JSON.parse(fs.readFileSync(DATA + "/equipment.json", "utf8"));
const traits = JSON.parse(fs.readFileSync(DATA + "/traits.json", "utf8"));
const wgroups = JSON.parse(fs.readFileSync(DATA + "/weapon-groups.json", "utf8"));
const agroups = JSON.parse(fs.readFileSync(DATA + "/armor-groups.json", "utf8"));
const wcats = JSON.parse(fs.readFileSync(DATA + "/weapon-categories.json", "utf8"));
const acats = JSON.parse(fs.readFileSync(DATA + "/armor-categories.json", "utf8"));

function tr(map, key) {
    if (!key) return null;
    const t = map[key];
    if (!t) return "Inconnu:" + key;
    return (t.translations && t.translations.fr && t.translations.fr.name) || t.name;
}
function trTrait(key) { return tr(traits, key); }
function frOf(e) { return (e.translations && e.translations.fr) || {}; }
function mapPrice(p) {
    if (!p) return "";
    const parts = [];
    if (p.pp) parts.push(p.pp + " pp");
    if (p.gp) parts.push(p.gp + " po");
    if (p.sp) parts.push(p.sp + " pa");
    if (p.cp) parts.push(p.cp + " pc");
    return parts.join(" ");
}
function mapBulk(b) {
    if (b === undefined || b === null) return undefined;
    if (b === 0.1) return "L";
    return String(b);
}
function mapDamage(d) {
    if (!d) return undefined;
    // base entry = clé "0" ou première clé
    let base = d["0"] || d[Object.keys(d)[0]];
    if (!base || (!base.dice && !base.die && !base.formula)) return undefined;
    let dice = base.dice || "";
    let die = base.die ? "d" + base.die : "";
    let type = base.type ? " " + trTrait(base.type) : "";
    // "1d8 tranchant" / "1 acide"
    let formula = (base.formula && !dice && !die) ? base.formula : (dice + die);
    return formula + type;
}
function mapUsage(u) {
    if (u === "held-in-one-hand") return "1";
    if (u === "held-in-two-hands") return "2";
    return undefined;
}
function mapRange(r, fr) {
    if (r === null || r === undefined) return undefined;
    if (fr.range) return fr.range.replace(/ mètres$/, " m").replace(/ mètre$/, " m");
    return (r * 0.3) + " m";
}
function mapTraits(e) {
    const out = [];
    const r = e.traits && e.traits.rarity;
    if (r && r !== "common") out.push(trTrait(r));
    for (const v of ((e.traits && e.traits.value) || [])) out.push(trTrait(v));
    return out;
}
function sign(n, force) { return (n > 0 || force ? "+" : "") + n; }

function mapEntry(e) {
    const fr = frOf(e);
    const out = {};
    out.name = fr.name || e.name;
    out.name_en = e.name;
    out.level = e.level;
    out.price = mapPrice(e.price);
    out.traits = mapTraits(e);
    // champs calculés selon le type
    if (e.type === "weapon") {
        const d = mapDamage(e.damage);
        if (d !== undefined) out["Dégâts"] = d;
        const m = mapUsage(e.usage);
        if (m !== undefined) out["Mains"] = m;
        if (e.category) out["Catégorie"] = tr(wcats, e.category);
        else out["Catégorie"] = "Inconnu";
        if (e.group) out["Groupe"] = tr(wgroups, e.group) || "Inconnu";
        const r = mapRange(e.range, fr);
        if (r !== undefined) out["Portée"] = r;
        if (e.reload !== null && e.reload !== undefined && e.reload !== "") out["Rechargement"] = String(e.reload);
    }
    if (e.type === "armor" || e.type === "shield") {
        if (e.acBonus !== undefined && e.acBonus !== null) out["CA bonus"] = sign(e.acBonus, true);
        if (e.type === "armor") {
            if (e.dexCap !== undefined && e.dexCap !== null) out["Mod. de dex. max."] = sign(e.dexCap, true);
            if (e.checkPenalty !== undefined && e.checkPenalty !== null) out["Pénalité d'armure au test"] = String(e.checkPenalty);
            if (e.speedPenalty !== undefined && e.speedPenalty !== null) out["Pénalité à la vitesse"] = e.speedPenalty + " m";
            if (e.strength !== undefined && e.strength !== null) out["Force requise"] = String(e.strength);
            if (e.category) out["Catégorie"] = tr(acats, e.category);
            if (e.group) out["Groupe"] = tr(agroups, e.group);
        }
        if (e.type === "shield") {
            if (e.hardness) out["Solidité"] = e.hardness + " PV " + e.hp + " (SR " + (e.hardness + 5) + ")";
        }
    }
    const b = mapBulk(e.bulk);
    if (b !== undefined) out.bulk = b;
    if (e.baseItem && e.baseItem !== e._id) {
        const base = eq.find(x => x._id === e.baseItem);
        if (base) out["Base"] = frOf(base).name || base.name;
    }
    out.description = fr.description || e.description;
    return out;
}

let common = 0, diff = 0;
const diffSamples = [];
for (const e of eq) {
    const c = curByEn[e.name];
    if (!c) continue;
    common++;
    const m = mapEntry(e);
    const probs = [];
    for (const k of Object.keys(m)) {
        if (k === "description") continue;
        if (JSON.stringify(c[k]) !== JSON.stringify(m[k])) {
            probs.push(k + ": [" + JSON.stringify(c[k]) + "] vs [" + JSON.stringify(m[k]) + "]");
        }
    }
    for (const k of Object.keys(c)) {
        if (k === "description") continue;
        if (m[k] === undefined) probs.push("champ en trop chez nous: " + k + "=[" + JSON.stringify(c[k]) + "]");
    }
    if (probs.length) {
        diff++;
        if (diffSamples.length < 20) diffSamples.push(e.name + " (" + e.type + ")\n    " + probs.slice(0, 6).join("\n    "));
    }
}
console.log("communs:", common, "avec diff:", diff);
console.log(diffSamples.join("\n"));

// stats des manquants
const missing = eq.filter(e => !curByEn[e.name]);
console.log("\nmanquants:", missing.length, missing.reduce((a, e) => { a[e.type] = (a[e.type] || 0) + 1; return a; }, {}));
