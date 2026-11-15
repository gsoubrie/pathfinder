// Compte les entrées actuelles de chaque fichier de données du projet.
const fs = require("fs");
const ROOT = "C:/dev/workspace/Perso/Pathfinder/sheet/js";

function evalFile(file, globals) {
    const code = fs.readFileSync(file, "utf8");
    const names = Object.keys(globals);
    const fn = new Function(...names, code);
    fn(...names.map(n => globals[n]));
    return globals;
}

function count(obj, path) {
    let o = obj;
    for (const p of path) { o = o && o[p]; }
    if (Array.isArray(o)) return o.length;
    if (o && typeof o === "object") return Object.keys(o).length;
    return o;
}

// SPELLS.CONST
let g = { SPELLS: {} };
evalFile(ROOT + "/spell/spells_constant.js", g);
console.log("SPELLS.CONST:", count(g.SPELLS, ["CONST"]));

// STUFFS
g = { STUFFS: null };
evalFile(ROOT + "/stuffs/constant_stuffs.js", g);
console.log("STUFFS:", count(g, ["STUFFS"]));

// DON.*
g = { DON: {} };
for (const f of ["constant_gift_general.js", "constant_gift_class.js", "constant_gift_race.js", "constant_gift_skill.js"]) {
    evalFile(ROOT + "/gift/" + f, g);
}
console.log("DON.GENERAL:", count(g.DON, ["GENERAL", "ENUM"]), " CLASS:", count(g.DON, ["CLASS", "ENUM"]), " RACE:", count(g.DON, ["RACE", "ENUM"]), " SKILL:", count(g.DON, ["SKILL", "ENUM"]));

// CLASSES.ENUM
g = { CLASSES: null };
evalFile(ROOT + "/class/constant_class.js", g);
console.log("CLASSES.ENUM:", count(g, ["CLASSES", "ENUM"]), g.CLASSES && g.CLASSES.ENUM ? g.CLASSES.ENUM.map(c => (c.name || "?")).join(",") : "");

// ARCHETYPES.ENUM
g = { ARCHETYPES: null };
evalFile(ROOT + "/archetype/constant_archetype.js", g);
console.log("ARCHETYPES.ENUM:", count(g, ["ARCHETYPES", "ENUM"]));

// HISTORICS.ENUM
g = { HISTORICS: null };
evalFile(ROOT + "/historics/constant_historic.js", g);
console.log("HISTORICS.ENUM:", count(g, ["HISTORICS", "ENUM"]));

// RACES.ENUM
g = { RACES: {} };
evalFile(ROOT + "/race/race_constant.js", g);
evalFile(ROOT + "/race/race_enum.js", g);
console.log("RACES.ENUM:", count(g, ["RACES", "ENUM"]), "keys sample:", g.RACES.ENUM ? Object.keys(Array.isArray(g.RACES.ENUM) ? g.RACES.ENUM[0] || {} : g.RACES.ENUM).slice(0, 30) : "");

// LEGACIES.ENUM
g = { LEGACIES: {} };
evalFile(ROOT + "/legacy/legacy_constant.js", g);
evalFile(ROOT + "/legacy/legacy_enum.js", g);
console.log("LEGACIES.ENUM:", count(g, ["LEGACIES", "ENUM"]));

// OBJECT.COMPENDIUM
g = { OBJECT: {} };
evalFile(ROOT + "/object/constant_objects.js", g);
console.log("OBJECT.COMPENDIUM:", count(g, ["OBJECT", "COMPENDIUM"]));
const cats = {};
for (const k of Object.keys(g.OBJECT.COMPENDIUM)) { const c = g.OBJECT.COMPENDIUM[k].category; cats[c] = (cats[c] || 0) + 1; }
console.log("  categories:", cats);

// OBJECT.SKILL_ACTIONS
g = { OBJECT: {} };
evalFile(ROOT + "/object/constant_skill_actions.js", g);
console.log("SKILL_ACTIONS keys:", Object.keys(g.OBJECT.SKILL_ACTIONS || {}).length);

// SKILLS.LIST (constant_divers.js)
g = { SKILLS: null, SERVICE: { STRING: { containsIgnoreCase: () => false } } };
try { evalFile(ROOT + "/constant_divers.js", g); } catch (e) { console.log("constant_divers eval err:", e.message); }
console.log("SKILLS.LIST:", g.SKILLS ? count(g, ["SKILLS", "LIST"]) : "?");
