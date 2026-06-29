#!/usr/bin/env node
/**
 * Performance optimization script for AscendiaPrime.
 * - Deduplicates CSS files pasted twice during WordPress migration
 * - Reports stylesheet sizes and savings
 * - Optionally runs production build
 *
 * Usage:
 *   node scripts/optimize-perf.mjs          # audit + dedupe
 *   node scripts/optimize-perf.mjs --build  # audit + dedupe + npm run build
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { execSync } from "node:child_process";

const ROOT = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const STYLES_DIR = join(ROOT, "styles");
const RUN_BUILD = process.argv.includes("--build");

function normalizeCss(text) {
  return text
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n+/g, "\n")
    .trim();
}

function similarity(a, b) {
  if (!a.length || !b.length) return 0;
  const len = Math.min(a.length, b.length);
  let matches = 0;
  for (let i = 0; i < len; i++) {
    if (a[i] === b[i]) matches++;
  }
  return matches / Math.max(a.length, b.length);
}

function findDuplicateHalf(content) {
  const lines = content.split(/\r?\n/);
  if (lines.length < 40) return null;

  for (const ratio of [0.5, 0.48, 0.52, 0.49, 0.51]) {
    const splitAt = Math.floor(lines.length * ratio);
    const first = normalizeCss(lines.slice(0, splitAt).join("\n"));
    const second = normalizeCss(lines.slice(splitAt).join("\n"));
    if (first.length < 400 || second.length < 400) continue;
    const score = similarity(first, second);
    if (score >= 0.92) {
      return { splitAt, score, keptLines: splitAt, removedLines: lines.length - splitAt };
    }
  }
  return null;
}

function formatKb(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

function auditStyles() {
  const files = readdirSync(STYLES_DIR)
    .filter((f) => f.endsWith(".css"))
    .sort();

  const rows = [];
  let totalBytes = 0;

  for (const file of files) {
    const path = join(STYLES_DIR, file);
    const stat = statSync(path);
    totalBytes += stat.size;
    rows.push({ file, bytes: stat.size, duplicate: false });
  }

  return { rows, totalBytes };
}

function dedupeStyles() {
  const files = readdirSync(STYLES_DIR).filter((f) => f.endsWith(".css"));
  const results = [];

  for (const file of files) {
    const path = join(STYLES_DIR, file);
    const original = readFileSync(path, "utf8");
    const before = Buffer.byteLength(original, "utf8");
    const dup = findDuplicateHalf(original);

    if (!dup) {
      results.push({ file, action: "ok", before, after: before });
      continue;
    }

    const lines = original.split(/\r?\n/);
    const deduped = lines.slice(0, dup.splitAt).join("\n").trimEnd() + "\n";
    const after = Buffer.byteLength(deduped, "utf8");

    writeFileSync(path, deduped, "utf8");
    results.push({
      file,
      action: "deduped",
      before,
      after,
      saved: before - after,
      score: dup.score,
      removedLines: dup.removedLines,
    });
  }

  return results;
}

function printReport(dedupeResults, auditAfter) {
  console.log("\n=== AscendiaPrime Performance Optimization ===\n");

  const deduped = dedupeResults.filter((r) => r.action === "deduped");
  if (deduped.length === 0) {
    console.log("CSS deduplication: no duplicate blocks found.\n");
  } else {
    console.log("CSS deduplication:");
    let savedTotal = 0;
    for (const r of deduped) {
      savedTotal += r.saved;
      console.log(
        `  ✓ ${r.file}: ${formatKb(r.before)} → ${formatKb(r.after)} (saved ${formatKb(r.saved)}, ${(r.score * 100).toFixed(0)}% match, −${r.removedLines} lines)`,
      );
    }
    console.log(`  Total CSS saved: ${formatKb(savedTotal)}\n`);
  }

  console.log("Stylesheet inventory (largest first):");
  const sorted = [...auditAfter.rows].sort((a, b) => b.bytes - a.bytes);
  for (const row of sorted.slice(0, 12)) {
    const flag = dedupeResults.find((d) => d.file === row.file && d.action === "deduped") ? " [deduped]" : "";
    console.log(`  ${row.file.padEnd(36)} ${formatKb(row.bytes).padStart(8)}${flag}`);
  }
  console.log(`  ${"TOTAL".padEnd(36)} ${formatKb(auditAfter.totalBytes).padStart(8)}\n`);

  console.log("Runtime optimizations applied in codebase:");
  console.log("  • Removed hydration repaint flash (globals.css reveal overrides)");
  console.log("  • Reduced Google font weights (14 → 8 files)");
  console.log("  • Lazy-loaded ParticleCanvas + ContactModal");
  console.log("  • ParticleCanvas: fewer nodes, pause when tab hidden, reduced-motion skip");
  console.log("  • PageRevealEffects: single observer, unobserve after reveal\n");
}

const beforeAudit = auditStyles();
const dedupeResults = dedupeStyles();
const afterAudit = auditStyles();

printReport(dedupeResults, afterAudit);

if (RUN_BUILD) {
  console.log("Running production build...\n");
  execSync("npm run build", { cwd: ROOT, stdio: "inherit" });
  console.log("\nBuild complete.");
} else {
  console.log("Tip: run with --build to verify production build after optimization.\n");
}
