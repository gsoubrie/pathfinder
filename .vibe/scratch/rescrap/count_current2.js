// Comptage robuste : eval dans un sandbox via with(), sans "use strict".
const fs = require("fs");
const ROOT = "C:/dev/workspace/Perso/Pathfinder/sheet/js";

function run(files, globals) {
    const sandbox = Object.assign({}, globals);
    for (const f of files) {
        let code = fs.readFileSync(ROOT + "/" + f, "utf8");
        code = code.replace(/"use strict";/g, "").replace(/^var\s+/gm, "");
        const names = Object.keys(sandbox);
        const fn = new Function(...names, `with (this) { ${code} }`);
        fn.call(sandbox, ...names.map(n => sandbox[n]));
    }
    return sandbox;
}

function len(o) { if (Array.isArray(o)) return o.length; if (o && typeof o === "object") return Object.keys(o).length; return o; }

let s = run(["stuffs/constant_stuffs.js"], {});
console.log("STUFFS:", len(s.STUFFS));

s = run(["gift/constant_gift_general.js", "gift/constant_gift_class.js", "gift/constant_gift_race.js", "gift/constant_gift_skill.js"], {});
console.log("DON.GENERAL.ENUM:", len(s.DON.GENERAL && s.DON.GENERAL.ENUM));
console.log("DON.CLASS.ENUM:", len(s.DON.CLASS && s.DON.CLASS.ENUM), "(peut être tableau de tableaux)");
console.log("DON.RACE.ENUM:", len(s.DON.RACE && s.DON.RACE.ENUM));
console.log("DON.SKILL.ENUM:", len(s.DON.SKILL && s.DON.SKILL.ENUM));
// aplatir
function flat(e) { if (!Array.isArray(e)) return 0; return e.reduce((a, x) => a + (Array.isArray(x) ? x.length : 1), 0); }
console.log("DON.CLASS aplati:", flat(s.DON.CLASS.ENUM), " RACE aplati:", flat(s.DON.RACE.ENUM), " SKILL aplati:", flat(s.DON.SKILL.ENUM), " GENERAL:", len(s.DON.GENERAL.ENUM));

s = run(["class/constant_class.js"], {});
console.log("CLASSES.ENUM:", len(s.CLASSES.ENUM), (s.CLASSES.ENUM || []).map(c => c.name).join(", "));

s = run(["archetype/constant_archetype.js"], {});
console.log("ARCHETYPES.ENUM:", len(s.ARCHETYPES.ENUM));

s = run(["historics/constant_historic.js"], {});
console.log("HISTORICS.ENUM:", len(s.HISTORICS.ENUM));

s = run(["race/race_constant.js", "race/race_enum.js"], {});
console.log("RACES.ENUM:", len(s.RACES.ENUM), "exemple clés:", Object.keys(s.RACES.ENUM[Object.keys(s.RACES.ENUM)[0]]).join(","));

s = run(["legacy/legacy_constant.js", "legacy/legacy_enum.js"], {});
console.log("LEGACIES.ENUM:", len(s.LEGACIES.ENUM), "type:", Array.isArray(s.LEGACIES.ENUM) ? "array" : "object");

s = run(["constant.js", "constant_divers.js"], {});
console.log("SKILLS.LIST:", len(s.SKILLS && s.SKILLS.LIST), "keys:", s.SKILLS ? Object.keys(s.SKILLS.LIST).join(",") : "");
console.log("LEVELUP const?", !!s.LEVELUP, "MASTERY?", !!s.MASTERY, "SPELL?", !!s.SPELL, "DON?", !!s.DON, "STUFF?", !!s.STUFF, "LIBRARY?", !!s.LIBRARY, "COMBAT?", !!s.COMBAT, "ADJUSTMENT?", !!s.ADJUSTMENT);
