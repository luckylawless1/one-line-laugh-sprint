// One-Line Laugh Sprint — u-daring-gecko-25-one-line-laugh-sprint-cda708b2
// The entry is a single original funny line about everyday life.
// The program writes that line to /output/entry.txt (UTF-8, 1-200 chars).

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I started jogging to clear my head, but my head just jogs along with me.";

function main(): void {
  // The grader mounts /output: create it if missing, never remove it.
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
  console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
}

main();
