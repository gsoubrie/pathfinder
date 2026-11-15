// Compare les entrées communes entre spells_constant.js (actuel) et spells.json (site)
// pour valider le mapping de transformation.
const fs = require("fs");
const path = require("path");
const ROOT = "C:/dev/workspace/Perso/Pathfinder";
const DATA = "C:/dev/workspace/Perso/Pathfinder/.vibe/scratch/rescrap/data";

const code = fs.readFileSync(ROOT + "/sheet/js/spell/spells_constant.js", "utf8");
const SPELLS = { CONST: null };
new Function("SPELLS", code)(SPELLS);
const cur = SPELLS.CONST;

const site = JSON.parse(fs.readFileSync(DATA + "/spells.json", "utf8"));
const traits = JSON.parse(fs.readFileSync(DATA + "/traits.json", "utf8"));

function natureOf(s) {
    const v = (s.traits && s.traits.value) || [];
    if (v.includes("cantrip")) return "cantrip";
    if (v.includes("focus")) return "focus";
    if (s.ritual !== undefined && s.ritual !== null) return "ritual";
    return "spell";
}
const NATURE_FR = { spell: "SORT", cantrip: "TOUR DE MAGIE", focus: "FOCALISÉ", ritual: "RITUEL" };
function mapCost(time) {
    if (time === "1" || time === "2" || time === "3") return time;
    if (time === "reaction") return "r";
    if (time === "free") return "f";
    return null;
}
function trTrait(key) {
    const t = traits[key];
    if (!t) return key;
    return (t.translations && t.translations.fr && t.translations.fr.name) || t.name;
}
function mapTraits(s) {
    const out = [];
    if (s.traits && s.traits.rarity) out.push(trTrait(s.traits.rarity));
    for (const v of ((s.traits && s.traits.value) || [])) out.push(trTrait(v));
    return out;
}

let common = 0, diff = 0;
const diffs = [];
for (const s of site) {
    const c = cur[s._id];
    if (!c) continue;
    common++;
    const fr = s.translations && s.translations.fr ? s.translations.fr : {};
    const mapped = {
        text: fr.name || s.name,
        element_type: NATURE_FR[natureOf(s)] + " " + s.level,
        action_cost: mapCost(s.time),
        traits: mapTraits(s),
        description: fr.description || s.description
    };
    const problems = [];
    if (c.text !== mapped.text) problems.push("text: [" + c.text + "] vs [" + mapped.text + "]");
    if (c.element_type !== mapped.element_type) problems.push("element_type: [" + c.element_type + "] vs [" + mapped.element_type + "]");
    if ((c.action_cost === null ? null : String(c.action_cost)) !== mapped.action_cost) problems.push("action_cost: [" + c.action_cost + "] vs [" + mapped.action_cost + "] site.time=" + JSON.stringify(s.time));
    if (JSON.stringify(c.traits) !== JSON.stringify(mapped.traits)) problems.push("traits: " + JSON.stringify(c.traits) + " vs " + JSON.stringify(mapped.traits));
    if (c.description !== mapped.description) problems.push("description diff (len " + (c.description||"").length + " vs " + (mapped.description||"").length + ")");
    if (problems.length) {
        diff++;
        if (diffs.length < 15) diffs.push(s._id + " " + mapped.text + "\n    " + problems.join("\n    "));
    }
}
console.log("communs:", common, "avec diff:", diff);
console.log(diffs.join("\n"));
