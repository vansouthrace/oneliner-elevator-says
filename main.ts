import { mkdirSync, writeFileSync } from "node:fs";

// The funniest thing a talking elevator would say, in its own voice:
// it stops at floor 13 — a floor that does not exist — purely to watch
// passengers panic in the mirror.
const ENTRY =
  "Floor 13 doesn't exist, but I stop there anyway, just to watch you panic in the mirror.";

// Gate: 1 to 120 characters, not only whitespace, and a single line.
if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-120`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
