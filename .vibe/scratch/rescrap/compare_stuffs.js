// Mapping STUFFS : comparaison entrées communes (par name_en) entre constant_stuffs.js et equipment.json
const fs = require("fs");
const ROOT = "C:/dev/workspace/Perso/Pathfinder";
const DATA = "C:/dev/workspace/Perso/Pathfinder/.vibe/scratch/rescrap/data";

let code = fs.readFileSync(ROOT + "/sheet/js/stuffs/constant_stuffs.js", "utf8").replace(/"use strict";/, "").replace(/^var\s+/m, "");
const sb = { STUFFS: null };
new Function("sandbox", "with (sandbox) { " + code + " }")(sb);
const cur = sb.STUFFS;
const curByEn = {};
for (const e of cur) curByEn[e.name_en] = e;

const site = JSON.parse(fs.readFileSync(DATA + "/equipment.json", "utf8"));
const traits = JSON.parse(fs.readFileSync(DATA + "/traits.json", "utf8"));
const wgroups = JSON.parse(fs.readFileSync(DATA + "/weapon-groups.json", "utf8"));
const agroups = JSON.parse(fs.readFileSync(DATA + "/armor-groups.json", "utf8"));
const wcats = JSON.parse(fs.readFileSync(DATA + "/weapon-categories.json", "utf8"));
const acats = JSON.parse(fs.readFileSync(DATA + "/armor-categories.json", "utf8"));

console.log("weapon-groups sample:", JSON.stringify(wgroups).slice(0, 300));
console.log("armor-categories:", JSON.stringify(acats).slice(0, 400));
console.log("weapon-categories:", JSON.stringify(wcats).slice(0, 300));

// champs d'une armure côté site
const armor = site.find(x => x.type === "armor" && x.name === "Chain Shirt");
console.log("\nARMOR Chain Shirt:", JSON.stringify(armor, null, 1).slice(0, 2200));
// bouclier
const shield = site.find(x => x.type === "shield" && x.name === "Steel Shield");
console.log("\nSHIELD Steel Shield keys:", Object.keys(shield).join(","), JSON.stringify({bulk:shield.bulk, hardness:shield.hardness, hp:shield.hp, price:shield.price, traits:shield.traits, bonus:shield.bonus, category:shield.category, group:shield.group, fr:shield.translations.fr}).slice(0,600));
// arme à distance
const ranged = site.find(x => x.type === "weapon" && x.range);
console.log("\nRANGED:", ranged.name, JSON.stringify({range:ranged.range, reload:ranged.reload, damage:ranged.damage, usage:ranged.usage, category:ranged.category, group:ranged.group, price:ranged.price, bulk:ranged.bulk, fr_range:ranged.translations.fr.range, fr_reload:ranged.translations.fr.reload}).slice(0,600));
// notre version de la même arme
const curR = curByEn[ranged.name];
console.log("CUR ranged:", JSON.stringify(curR).slice(0, 700));
// notre armure
const curA = curByEn["Chain Shirt"];
console.log("\nCUR armor:", JSON.stringify(curA).slice(0, 800));
// notre bouclier
const curS = curByEn["Steel Shield"];
console.log("\nCUR shield:", JSON.stringify(curS).slice(0, 600));
// divinités
const withD = site.find(x => JSON.stringify(x).includes("deities") || JSON.stringify(x.translations.fr).includes("Divinités"));
console.log("\nDEITY sample:", withD ? withD.name + " keys: " + Object.keys(withD).join(",") : "none");
if (withD) console.log(JSON.stringify({deities: withD.deities, fr: withD.translations.fr.deities || withD.translations.fr}).slice(0, 500));
// catégories valeurs côté nos données
const cats = {}, groups = {};
for (const e of cur) { if (e["Catégorie"]) cats[e["Catégorie"]] = (cats[e["Catégorie"]]||0)+1; if (e["Groupe"]) groups[e["Groupe"]] = (groups[e["Groupe"]]||0)+1; }
console.log("\nCUR catégories:", cats);
console.log("CUR groupes:", Object.keys(groups).slice(0, 40).join(", "));
// portées nos données
const ranges = {};
for (const e of cur) { if (e["Portée"]) ranges[e["Portée"]] = (ranges[e["Portée"]]||0)+1; }
console.log("\nCUR portées:", Object.entries(ranges).slice(0, 15));
// Base nos données
const bases = {};
for (const e of cur) { if (e["Base"] !== undefined) bases[e["Base"]] = (bases[e["Base"]]||0)+1; }
console.log("\nCUR Base:", Object.entries(bases).slice(0, 15));
// CA bonus / dex / pénalités / force / solidité / rechargement nos données
for (const f of ["CA bonus","Mod. de dex. max.","Pénalité d'armure au test","Pénalité à la vitesse","Force requise","Solidité","Rechargement","Divinités associées","Mains","Dégâts"]) {
  const vals = {};
  for (const e of cur) { if (e[f] !== undefined) vals[e[f]] = (vals[e[f]]||0)+1; }
  console.log("\nCUR", f, ":", Object.entries(vals).slice(0, 12));
}
