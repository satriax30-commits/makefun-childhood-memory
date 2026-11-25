// make.fun bounty: "Make the AI Judge Feel Nostalgic: A Childhood Memory"
// Slug: u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363
//
// CHOSEN ENTRY (one sentence, a childhood memory):
// "Every Saturday my grandmother let me stir the soup with her wooden spoon,
//  and I still hear it tapping the side of the pot whenever a kitchen smells
//  like home."
//
// Why this line won:
// - Concrete place/time/sensation: grandmother's kitchen, Saturday, the wooden
//   spoon tapping the side of the pot, the smell of a kitchen that feels like
//   home. Nothing abstract; every image can be seen, heard, smelled.
// - Honest small detail: a child is not handed the cooking, only the stirring
//   — a small trusted job. That modesty is what makes it sound truly lived.
// - Warmth that lingers: the sentence ends in the present ("I still hear it"),
//   so the memory is not closed off in the past; it keeps happening whenever
//   a kitchen smells right.
// - Every word earns its place: no greeting-card filler, no "those were the
//   days", no "I miss the simple times".
//
// REJECTED ALTERNATIVES:
// 1. "The last summer before high school, my best friend and I rode our bikes
//    until the streetlights buzzed on, and nobody ever told us to come home."
//    Rejected: the streetlights-buzzing-on image is a well-worn trope, and the
//    sentence has no single sharp sensory detail that could only belong to
//    this memory; it could be anyone's summer.
// 2. "I can still taste the mango my father cut for me on the porch, juice
//    running down my chin while the radio played songs I did not understand yet."
//    Rejected: close, but "songs I did not understand yet" leans into
//    sentimentality for its own sake, and mango-on-the-porch is a common
//    stock image; the spoon-tapping detail is sharper and more specific.
//
// Verified: 158 characters / 158 bytes (limit 280), single line, UTF-8.
// Deterministic: no network, no clock, no randomness. Node 22, stdlib only.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Every Saturday my grandmother let me stir the soup with her wooden spoon, and I still hear it tapping the side of the pot whenever a kitchen smells like home.";

const MAX_CHARS = 280;

function main(): void {
  // Length guard: one clean sentence, 1-280 characters, single line.
  if (ENTRY.length === 0) {
    throw new Error("entry is empty");
  }
  if (ENTRY.length > MAX_CHARS) {
    throw new Error(
      `entry is ${ENTRY.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }

  const outputDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  const outPath = join(outputDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");

  // Self-check: read back and require byte-identical content.
  const readBack = readFileSync(outPath, "utf8");
  if (readBack !== ENTRY) {
    throw new Error("self-check failed: entry.txt does not match the entry");
  }
}

main();
