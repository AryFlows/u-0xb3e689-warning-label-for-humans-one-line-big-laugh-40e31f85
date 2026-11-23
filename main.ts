// Warning Label for Humans — one-line safety label entry.
// Writes the label to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LABEL = "WARNING: This human runs on six hours of sleep and pure spite. Do not operate before coffee — may spontaneously start a podcast.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// Gate guards: 1-160 characters, one line, not blank.
if (LABEL.length < 1 || LABEL.length > 160) {
  throw new Error(`label must be 1-160 characters, got ${LABEL.length}`);
}
if (LABEL.trim().length === 0 || LABEL.includes("\n")) {
  throw new Error("label must be a single non-blank line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LABEL, "utf8");
