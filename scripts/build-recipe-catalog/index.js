// Streaming-render entry point for the recipe catalog.
//
// Reads every .md file under docs/user-documentation/recipes/recipe-catalog/
// and writes a corresponding static HTML page to the output directory. Memory
// stays flat regardless of recipe count: one file in, one file out, no
// accumulation in a global module graph. Pair this with the Docusaurus build
// (which excludes the recipe-catalog directory) and merge the outputs.

const fs = require('fs');
const path = require('path');

const { parseRecipe } = require('./parse-mdx');
const { renderLayout } = require('./layout');

const ROOT = path.resolve(__dirname, '../..');
const CATALOG_DIR = path.join(ROOT, 'docs/user-documentation/recipes/recipe-catalog');
// Default: write straight into build/ so local `yarn build:recipes` after
// `yarn build:docs` produces a single ready-to-serve directory. CI overrides
// RECIPE_OUT_DIR so the two jobs can run in parallel and emit separate artifacts.
const OUT_BASE = process.env.RECIPE_OUT_DIR
  ? path.resolve(process.env.RECIPE_OUT_DIR)
  : path.join(ROOT, 'build/user-documentation/recipes/recipe-catalog');
const URL_PREFIX = '/user-documentation/recipes/recipe-catalog';

function* walkMd(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walkMd(p);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      yield p;
    }
  }
}

// Returns [urlPath, outputFilePath] for a given .md source file.
// README.md maps to the directory index; all other files become slug/index.html.
function pathsFor(mdPath) {
  const rel = path.relative(CATALOG_DIR, mdPath);
  const dir = path.dirname(rel);
  const base = path.basename(rel, '.md');
  const isIndex = base === 'README';
  const urlParts = [URL_PREFIX, dir, isIndex ? '' : base].filter((s) => s && s !== '.');
  const href = urlParts.join('/');
  const out = isIndex
    ? path.join(OUT_BASE, dir, 'index.html')
    : path.join(OUT_BASE, dir, base, 'index.html');
  return { href, out };
}

function main() {
  if (!fs.existsSync(CATALOG_DIR)) {
    console.error(`[build-recipes] catalog dir missing: ${CATALOG_DIR}`);
    process.exit(1);
  }

  fs.mkdirSync(OUT_BASE, { recursive: true });

  const start = Date.now();
  let processed = 0;
  let errors = 0;
  let peakHeap = 0;

  for (const mdPath of walkMd(CATALOG_DIR)) {
    try {
      const source = fs.readFileSync(mdPath, 'utf8');
      const { frontMatter, html: contentHtml } = parseRecipe(source);
      const h1 = contentHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
      const title = frontMatter.sidebar_label
        || (h1 ? h1[1].replace(/<[^>]+>/g, '').trim() : null)
        || path.basename(mdPath, '.md');
      const { href, out } = pathsFor(mdPath);
      const full = renderLayout({ title, href, content: contentHtml });

      fs.mkdirSync(path.dirname(out), { recursive: true });
      fs.writeFileSync(out, full);
      processed += 1;

      if (processed % 1000 === 0) {
        const heap = Math.round(process.memoryUsage().rss / 1024 / 1024);
        peakHeap = Math.max(peakHeap, heap);
        console.log(`[build-recipes] ${processed} pages rendered  rss=${heap} MB`);
      }
    } catch (err) {
      errors += 1;
      console.error(`[build-recipes] failed: ${mdPath}`);
      console.error(`  ${err?.message ?? err}`);
    }
  }

  const elapsed = ((Date.now() - start) / 1000).toFixed(1);
  const finalRss = Math.round(process.memoryUsage().rss / 1024 / 1024);
  peakHeap = Math.max(peakHeap, finalRss);
  console.log(`[build-recipes] done: ${processed} pages, ${errors} errors, ${elapsed}s, peak RSS ${peakHeap} MB`);

  if (errors > 0) process.exit(1);
}

main();
