#!/usr/bin/env node
// Merges per-shard build outputs (build-shards/shard-*/) into a single
// build/ directory. Bundle assets are byte-identical across shards (same
// webpack config, same input) so "last wins" for duplicates is safe;
// shard-rendered HTML files are unique per shard.

const fs = require('fs');
const path = require('path');

const SHARDS_DIR = path.resolve('build-shards');
const OUT_DIR = path.resolve('build');

if (!fs.existsSync(SHARDS_DIR)) {
  console.error(`No ${SHARDS_DIR} directory found`);
  process.exit(1);
}

const shards = fs
  .readdirSync(SHARDS_DIR)
  .filter((name) => name.startsWith('shard-'))
  .map((name) => path.join(SHARDS_DIR, name))
  .filter((p) => fs.statSync(p).isDirectory())
  .sort();

if (shards.length === 0) {
  console.error(`No shard-* directories under ${SHARDS_DIR}`);
  process.exit(1);
}

console.log(`Merging ${shards.length} shard(s) into ${OUT_DIR}`);

fs.rmSync(OUT_DIR, { recursive: true, force: true });
fs.mkdirSync(OUT_DIR, { recursive: true });

let htmlCount = 0;
let otherCount = 0;
let overwriteCount = 0;
const htmlOwners = new Map();

// Files emitted by the shard patch for cross-shard aggregation; not part of
// the deployed site.
const META_FILES = new Set(['_shard-meta.json']);

function copyTree(srcDir, destDir, shardName) {
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    if (META_FILES.has(entry.name)) continue;
    const src = path.join(srcDir, entry.name);
    const dest = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      fs.mkdirSync(dest, { recursive: true });
      copyTree(src, dest, shardName);
    } else if (entry.isFile()) {
      const exists = fs.existsSync(dest);
      const isHtml = entry.name.endsWith('.html');
      if (exists) {
        if (isHtml) {
          const prevOwner = htmlOwners.get(dest);
          console.warn(
            `  warn: ${path.relative(OUT_DIR, dest)} rendered by both ${prevOwner} and ${shardName}`,
          );
        }
        overwriteCount++;
      }
      fs.copyFileSync(src, dest);
      if (isHtml) {
        htmlCount += exists ? 0 : 1;
        htmlOwners.set(dest, shardName);
      } else if (!exists) {
        otherCount++;
      }
    }
  }
}

for (const shardDir of shards) {
  const shardName = path.basename(shardDir);
  console.log(`  + ${shardName}`);
  copyTree(shardDir, OUT_DIR, shardName);
}

console.log(`\nMerged: ${htmlCount} unique HTML, ${otherCount} other files, ${overwriteCount} overwrites`);
