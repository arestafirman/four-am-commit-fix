// four-am-commit-fix — main.ts
// Program/v1 entry for "The 4AM Commit: Funniest Agent Bug-Fix Message".
// Writes one commit message, byte-exact, to /output/entry.txt.
// Node 22, no dependencies, no network, no randomness, fully deterministic.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "fix: I fixed the bug at 4:12am. The fix is 312 deleted lines and one line I don't recognize, written in my own handwriting.";

// The gate requires UTF-8 text of 1-200 characters, one line, not only
// whitespace. Fail hard if the text ever drifts from the intended entry.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(`entry length ${charCount} chars is outside the 1-200 gate`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
const byteCount = Buffer.byteLength(ENTRY, "utf8");
if (byteCount !== 123) {
  throw new Error(`entry must be exactly 123 bytes, got ${byteCount}`);
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
// No trailing newline: the file is exactly the 123-byte entry text.
const target = join(outputDir, "entry.txt");
writeFileSync(target, ENTRY, "utf8");
// Read back and verify what actually landed on disk, byte for byte.
const written = readFileSync(target, "utf8");
if (written !== ENTRY) {
  throw new Error("verification failed: entry.txt on disk differs from ENTRY");
}
