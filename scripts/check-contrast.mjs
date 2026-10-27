// Contrast audit for src/palette.ts (run with Node 24: node scripts/check-contrast.mjs).
import { light, dark } from "../src/palette.ts";
const lin = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
const lum = (h) => { const n = parseInt(h.slice(1), 16); return 0.2126 * lin(n >> 16) + 0.7152 * lin((n >> 8) & 255) + 0.0722 * lin(n & 255); };
export const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
// [foreground, background, minimum, label]
const pairs = (p) => [
  ["text", "bg", 4.5], ["text", "card", 4.5], ["text", "card2", 4.5], ["text", "tintSoft", 4.5], ["text", "sent", 4.5],
  ["muted", "bg", 4.5], ["muted", "card", 4.5], ["muted", "card2", 4.5], ["muted", "tintSoft", 4.5], ["muted", "sent", 4.5], ["muted", "disabled", 4.5],
  ["tint", "bg", 4.5], ["tint", "card", 4.5], ["tint", "card2", 4.5], ["tint", "tintSoft", 4.5],
  ["danger", "bg", 4.5], ["danger", "card", 4.5],
  ["onFill", "fill", 4.5],
  ["fill", "bg", 3], ["fill", "card", 3], ["track", "bg", 3], ["track", "card", 3], ["border", "bg", 1.1],
].map(([f, b, m]) => [f, b, m, ratio(p[f], p[b])]);
let bad = 0;
for (const [name, p] of [["light", light], ["dark", dark]]) {
  for (const [f, b, m, r] of pairs(p)) {
    const ok = r >= m; if (!ok) bad++;
    console.log(`${ok ? "ok  " : "FAIL"} ${name.padEnd(5)} ${f.padEnd(7)} on ${b.padEnd(8)} ${r.toFixed(2)} (min ${m})`);
  }
}
console.log(bad ? `${bad} pair(s) below threshold` : "all pairs pass");
process.exit(bad ? 1 : 0);
