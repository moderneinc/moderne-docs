#!/usr/bin/env node
// Wrapper that runs `docusaurus build` for a single shard, with the SSG
// route-filter patch pre-loaded via --require. Reads SHARD_INDEX and
// SHARD_TOTAL from env; writes output to build-shards/shard-<index>/.

const { spawn } = require('child_process');
const path = require('path');

const shardIndex = process.env.SHARD_INDEX;
const shardTotal = process.env.SHARD_TOTAL;

if (!shardIndex || !shardTotal) {
  console.error('SHARD_INDEX and SHARD_TOTAL env vars are required');
  process.exit(2);
}

const outDir = path.join('build-shards', `shard-${shardIndex}`);
const patchPath = path.join(__dirname, 'build-shard-patch.js');
const docusaurusBin = require.resolve('@docusaurus/core/bin/docusaurus.mjs');

const child = spawn(
  process.execPath,
  ['--require', patchPath, docusaurusBin, 'build', '--out-dir', outDir],
  { stdio: 'inherit', env: process.env },
);

child.on('exit', (code) => process.exit(code ?? 1));
