// One original funny line about everyday life.
// This program writes that single line to the entry file.
// The joke's twist is personification: naming the vacuum makes cleaning
// feel collaborative, then Gerald turns the teamwork back on the owner
// by filing complaints — the vacuum judges the mess instead of fixing it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE_LINE =
  "I named my vacuum Gerald so cleaning feels like teamwork, and Gerald has now filed three complaints about my hair, my crumbs, and my attitude.";

function writeEntry(dir: string, line: string): void {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), line + "\n", "utf8");
}

function main(): void {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  writeEntry(dir, JOKE_LINE);
  console.log(`entry.txt: ${[...JOKE_LINE].length} characters`);
}

main();
