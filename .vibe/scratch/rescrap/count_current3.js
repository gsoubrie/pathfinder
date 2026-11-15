// Comptage robuste : eval dans un sandbox via with(), globals pré-déclarés.
const fs = require("fs");
const ROOT = "C:/dev/workspace/Perso/Pathfinder/sheet/js";

const PRE = ["SPELLS","STUFFS","DON","CLASSES","ARCHETYPES","HISTORICS","RACES","LEGACIES","OBJECT","SKILLS","SERVICE","LEVELUP","MASTERY","SPELL","STUFF","LIBRARY","COMBAT","ADJUSTMENT","CHARACTER","GS","WINDOW_V2","MANAGER","CONTROLLER"];

function run(files) {
    const sandbox = {};
    for (const n of PRE) sandbox[n] = {};
    sandbox.SERVICE = { STRING: { containsIgnoreCase: () => false } };
    for (const f of files) {
        let code = fs.readFileSync(ROOT + "/" + f, "utf8");
        code = code.replace(/"use strict";/g, "").replace(/^var\s+/gm, "");
        new Function("sandbox", "with (sandbox) { " + code + " }")(sandbox);
    }
    return sandbox;
}
function len(o) { if (Array.isArray(o)) return o.length; if (o && typeof o === "object") return Object.keys(o).length; return o; }
function flat(e) { if (!Array.isArray(e)) return len(e); return e.reduce((a, x) => a + (Array.isArray(x) ? flat(x) : 1), 0); }

let s = run(["stuffs/constant_stuffs.js"]);
console.log("STUFFS:", len(s.STUFFS), "sample keys:", s.STUFFS[0] ? Object.keys(s.STUFFS[0]).join(",") : "");

s = run(["gift/constant_gift_general.js", "gift/constant_gift_class.js", "gift/constant_gift_race.js", "gift/constant_gift_skill.js"]);
console.log("DON.GENERAL:", flat(s.DON.GENERAL.ENUM), " CLASS:", flat(s.DON.CLASS.ENUM), " RACE:", flat(s.DON.RACE.ENUM), " SKILL:", flat(s.DON.SKILL.ENUM));
console.log("DON.GENERAL sample keys:", s.DON.GENERAL.ENUM[0] ? Object.keys(flatten(s.DON.GENERAL.ENUM)[0]).join(",") : "");
function flatten(e){ if(!Array.isArray(e)) return [e]; let out=[]; for(const x of e){ if(Array.isArray(x)) out=out.concat(flatten(x)); else out.push(x);} return out; }

s = run(["class/constant_class.js"]);
console.log("CLASSES.ENUM:", len(s.CLASSES.ENUM), (s.CLASSES.ENUM || []).map(c => c.name).join(", "));
console.log("CLASS sample keys:", s.CLASSES.ENUM[0] ? Object.keys(s.CLASSES.ENUM[0]).join(",") : "");

s = run(["archetype/constant_archetype.js"]);
console.log("ARCHETYPES.ENUM:", len(s.ARCHETYPES.ENUM));

s = run(["historics/constant_historic.js"]);
console.log("HISTORICS.ENUM:", len(s.HISTORICS.ENUM), "sample keys:", s.HISTORICS.ENUM[0] ? Object.keys(s.HISTORICS.ENUM[0]).join(",") : "");

s = run(["race/race_constant.js", "race/race_enum.js"]);
console.log("RACES.ENUM:", len(s.RACES.ENUM), "sample keys:", s.RACES.ENUM[Object.keys(s.RACES.ENUM)[0]] ? Object.keys(s.RACES.ENUM[Object.keys(s.RACES.ENUM)[0]]).join(",") : "");

s = run(["legacy/legacy_constant.js", "legacy/legacy_enum.js"]);
console.log("LEGACIES.ENUM:", len(s.LEGACIES.ENUM), Array.isArray(s.LEGACIES.ENUM) ? "array" : "object");

s = run(["constant.js", "constant_divers.js"]);
console.log("SKILLS.LIST:", len(s.SKILLS.LIST));
