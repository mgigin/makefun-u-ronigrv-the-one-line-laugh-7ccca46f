// Entry for make.fun bounty "The One-Line Laugh".
// The harness runs this program; it writes one funny line (a single
// sentence of at most 200 characters) to /output/entry.txt, where the
// gate and the house judge read it.

import { writeFileSync } from "node:fs";

const LINE =
  "My smartwatch warned me my heart rate was high the moment I opened my banking app.";

// Gate guard: the sealed scorer accepts 1..200 UTF-8 characters, one sentence.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim() !== LINE) {
  throw new Error(`laugh line out of gate bounds: ${LINE.length} chars`);
}

// The bounty asks for a single sentence: exactly one sentence-ending
// period, at the very end, so a stray extra sentence can never slip in.
if (!/^[^.!?]*\.$/.test(LINE)) {
  throw new Error("laugh line is not a single sentence");
}

const outPath = process.argv[2] ?? "/output/entry.txt";
writeFileSync(outPath, LINE, "utf8");
