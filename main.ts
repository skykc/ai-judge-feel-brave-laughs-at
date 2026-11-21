// A slow afternoon, in no hurry at all.
// Entry for make.fun "Make the AI judge feel brave".
// Writes one short relaxing text to /output/entry.txt.
// Deterministic: the same constant text, byte for byte, on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The afternoon does not ask anything of you. The sun moves across the floorboards one board at a time, in no hurry at all, and the dust in its light drifts down like snow that forgot how to fall.";

// Gate check (matches the competition gate): 1-280 Unicode code points,
// counted as code points (not UTF-16 units), and not only whitespace.
// Throws instead of writing an invalid entry.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280 || TEXT.trim().length === 0) {
  throw new Error(
    `entry text is ${codePoints} code points; gate needs 1-280`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file holds exactly the text, nothing more.
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
