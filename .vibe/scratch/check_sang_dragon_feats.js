const fs = require("fs");
const src = fs.readFileSync("gift/constant_gift_race.js", "utf8");
// reconstruct DON.getAvailableAncestryFeats filter for race "Humain" + heritage "Sang-dragon", max_level 1
// entries are objects in an array; find blocks with "name" + "traits" + "level"
const feats = [];
const re = /"name"\s*:\s*"([^"]+)"[\s\S]*?"level"\s*:\s*"?([^,"\n]+)"?[\s\S]*?"traits"\s*:\s*\[([\s\S]*?)\]/g;
let m;
while ((m = re.exec(src)) !== null) {
  feats.push({ name: m[1], level: m[2], traits: m[3] });
}
console.log("total feats:", feats.length);
function containsExactly(traits_str, name) {
  // traits array items are quoted strings
  return traits_str.split(",").map(t => t.replace(/[\ "\n]/g, "")).indexOf(name) !== -1;
}
let race_only = feats.filter(f => containsExactly(f.traits, "Humain") && parseInt(f.level, 10) <= 1);
let heritage = feats.filter(f => containsExactly(f.traits, "Sang-dragon") && parseInt(f.level, 10) <= 1);
console.log("dons Humain niveau <= 1:", race_only.length);
console.log("dons Sang-dragon niveau <= 1:", heritage.length);
console.log("union:", [...race_only, ...heritage].length);
console.log("exemples Sang-dragon:", heritage.slice(0, 5).map(f => f.name + " lvl " + f.level));
let both = heritage.filter(f => containsExactly(f.traits, "Humain"));
console.log("dons dans les deux pools:", both.length);
