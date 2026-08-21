#!/usr/bin/env node
// Builds the Pagefind search index from a built site's HTML.
// Must see the whole site, so the sharded CI build runs it after the merge.
// What gets indexed is decided in src/theme/DocItem/Content, not here.
// Usage: node scripts/pagefind-index.mjs [siteDir]   (default: build)

import { existsSync } from 'node:fs';
import { readdir, readFile, rm } from 'node:fs/promises';
import path from 'node:path';
import * as pagefind from 'pagefind';

// Pagefind's drop-in UIs, ~400 kB nothing requests since we render our own.
const UNUSED_BUNDLE_PATTERN = /^pagefind-(ui|modular-ui|component-ui|highlight)\.(js|css)$/;

/** Indexes `siteDir` in place, into the path src/theme/SearchBar/pagefind.ts fetches from. */
export async function buildIndex(siteDir) {
  const resolved = path.resolve(siteDir);

  if (!existsSync(resolved)) {
    throw new Error(`Cannot index "${resolved}": directory does not exist.`);
  }

  const started = Date.now();
  const { errors: createErrors, index } = await pagefind.createIndex({
    // Stops a stray `lang` attribute from splitting off a second index nothing loads.
    forceLanguage: 'en',
    writePlayground: false,
  });

  if (createErrors.length > 0) {
    throw new Error(`Pagefind failed to start:\n${createErrors.join('\n')}`);
  }

  // Its `page_count` is files read, not pages indexed; the real count is read back below.
  const { errors: addErrors } = await index.addDirectory({ path: resolved });

  if (addErrors.length > 0) {
    throw new Error(`Pagefind failed while indexing:\n${addErrors.join('\n')}`);
  }

  const bundleDir = path.join(resolved, 'pagefind');
  const { errors: writeErrors } = await index.writeFiles({ outputPath: bundleDir });

  if (writeErrors.length > 0) {
    throw new Error(`Pagefind failed while writing the index:\n${writeErrors.join('\n')}`);
  }

  await pagefind.close();
  await removeUnusedBundles(bundleDir);

  const pageCount = await indexedPageCount(bundleDir);
  const seconds = ((Date.now() - started) / 1000).toFixed(1);
  console.log(`[pagefind] Indexed ${pageCount} pages in ${seconds}s -> ${path.join(siteDir, 'pagefind')}`);

  // An empty index would otherwise ship a search box that finds nothing.
  if (pageCount === 0) {
    throw new Error(
      'Pagefind indexed 0 pages. Expected the doc body to be marked with ' +
        '`data-pagefind-body` (see src/theme/DocItem/Content).',
    );
  }

  return pageCount;
}

async function indexedPageCount(bundleDir) {
  const entry = JSON.parse(await readFile(path.join(bundleDir, 'pagefind-entry.json'), 'utf8'));
  return Object.values(entry.languages).reduce((total, language) => total + language.page_count, 0);
}

async function removeUnusedBundles(bundleDir) {
  const entries = await readdir(bundleDir);
  await Promise.all(
    entries
      .filter((entry) => UNUSED_BUNDLE_PATTERN.test(entry))
      .map((entry) => rm(path.join(bundleDir, entry))),
  );
}

const invokedDirectly =
  process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname);

if (invokedDirectly) {
  buildIndex(process.argv[2] ?? 'build').catch((error) => {
    console.error(`[pagefind] ${error.message}`);
    process.exit(1);
  });
}
