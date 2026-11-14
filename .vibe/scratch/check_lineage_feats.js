const fs = require("fs");
const src = fs.readFileSync("gift/constant_gift_race.js", "utf8");
// Split into feat entries: each starts with "name": at top level of objects in an array
const feats = [];
const re = /"name"\s*:\s*"([^"]+)"([\s\S]*?)(?=(?:"name"\s*:\s*")|$)/g;
let m;
while ((m = re.exec(src)) !== null) {
  const body = m[2];
  const traits = (body.match(/"traits"\s*:\s*\[([\s\S]*?)\]/) || [])[1] || "";
  const traits_arr = traits.split(",").map(t => t.replace(/[\s"\n]/g, "")).filter(Boolean);
  const level = (body.match(/"level"\s*:\s*"?([^,"\n]+)"?/) || [])[1];
  feats.push({ name: m[1], traits: traits_arr, level });
}
console.log("total:", feats.length);
const ligne = feats.filter(f => f.traits.indexOf("Lignée") !== -1);
console.log("dons avec trait Lignée:", ligne.length);
ligne.slice(0, 30).forEach(f => console.log(" -", f.name, "| lvl", f.level, "|", f.traits.join(" ")));
const sd = feats.filter(f => f.traits.indexOf("Sang-dragon") !== -1);
console.log("dons Sang-dragon:", sd.length, "| dont Lignée:", sd.filter(f => f.traits.indexOf("Lignée") !== -1).length);
sd.forEach(f => console.log(" *", f.name, "| lvl", f.level, "|", f.traits.join(" ")));
