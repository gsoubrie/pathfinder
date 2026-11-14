const fs = require("fs");
const src = fs.readFileSync("legacy/legacy_enum.js", "utf8");
const names = [...src.matchAll(/"name"\s*:\s*"([^"]+)"/g)].map(m => m[1]);
console.log("total name fields:", names.length);
const uniq = [...new Set(names)];
console.log("uniques:", uniq.length);
const versatile = ["Aiuvarin", "Changelin", "Cr\u00e9pusculaire", "Dhampir", "Dromaar", "N\u00e9philim", "Sang-dragon", "M\u00e9tamorphe", "Beastkin", "Ifrit", "Ondine", "Sylphe", "Gnoll"];
versatile.forEach(v => console.log(names.includes(v) ? "[OK] " + v : "[ABSENT] " + v));

// print the bonus + sens/traits of each found versatile
["Aiuvarin", "Changelin", "Cr\u00e9pusculaire", "Dhampir", "Dromaar", "N\u00e9philim", "Sang-dragon"].forEach(v => {
  const idx = src.indexOf('"' + v + '"');
  if (idx < 0) return;
  const block = src.slice(Math.max(0, src.lastIndexOf(/\n    "/.source ? idx - 400 : idx - 400), idx), src.indexOf("\n    },", idx));
  console.log("\n=== " + v + " ===\n" + block.slice(block.indexOf('"bonus"') >= 0 ? block.indexOf('"bonus"') - 4 : 0, block.length).slice(0, 600));
});
