// Extracts a reusable HTML "shell" from a Docusaurus-built page so the recipe
// renderer can wrap each recipe in the same chrome (navbar, sidebar, footer)
// as the rest of the site. Operates entirely on the rendered HTML — no
// React/Docusaurus imports needed.
//
// What we keep:
//   * The <head>: all <meta>, <link rel="stylesheet">, <link rel="preconnect">,
//     <link rel="icon">. Page-specific meta (title, description, og:url, etc.)
//     gets replaced at render time.
//   * The <body> wrapper, navbar, sidebar (pre-rendered SSR markup), footer.
//   * Inline <style> tags (Docusaurus emits a couple for critical CSS).
//
// What we drop:
//   * <script src="/assets/js/*.js"> — Docusaurus's hydration bundles. If we
//     kept these, React would hydrate, fail to find a route for the recipe
//     URL, and replace the page with Docusaurus's 404 component.
//   * <script>__DOCUSAURUS_*__ = ...</script> — pre-hydration data blobs.
//     They reference modules we're not loading.
//   * <link rel="modulepreload"> / <link rel="preload" as="script">
//     pointing at JS bundles — same reason.
//
// The template uses a sentinel `<!--RECIPE_CONTENT-->` to mark where the
// recipe HTML gets injected at render time.

const fs = require('fs');
const path = require('path');

const SHELL_OUT = path.join(__dirname, 'shell-template.html');
const CONTENT_SENTINEL = '<!--RECIPE_CONTENT-->';
const TITLE_SENTINEL = '<!--RECIPE_TITLE-->';

function stripDocusaurusScripts(html) {
  // Docusaurus' swcHtmlMinimizer emits unquoted attribute values (e.g.
  // `src=/assets/js/main.abc.js`), so match both quoted and unquoted forms.
  // Self-closing and full <script>...</script> forms both appear.
  //
  // <script ... src=[/]?assets/js/...></script>
  html = html.replace(
    /<script[^>]*\bsrc=(?:"\/assets\/js\/[^"]+"|\/assets\/js\/[^\s>]+)[^>]*>(?:[^<]*<\/script>)?/g,
    '',
  );
  // <script>...__DOCUSAURUS_*__...</script>  (pre-hydration data blobs)
  html = html.replace(/<script(?:\s[^>]*)?>[^<]*__DOCUSAURUS_[\s\S]*?<\/script>/g, '');
  // <link rel="modulepreload" href="...">  (quoted or unquoted rel)
  html = html.replace(/<link[^>]*\brel=(?:"modulepreload"|modulepreload)[^>]*>/g, '');
  // <link rel="preload" as="script" ...> in either attribute order, with or
  // without quotes.
  html = html.replace(
    /<link[^>]*\brel=(?:"preload"|preload)[^>]*\bas=(?:"script"|script)[^>]*>/g,
    '',
  );
  html = html.replace(
    /<link[^>]*\bas=(?:"script"|script)[^>]*\brel=(?:"preload"|preload)[^>]*>/g,
    '',
  );
  return html;
}

function replacePageContent(html) {
  // Replace only the inner content of <div class="theme-doc-markdown markdown">,
  // keeping every outer wrapper (main container, row, sidebar col, content col,
  // TOC col, article element, edit-meta footer rows, …). That preserves the
  // grid layout Docusaurus relies on for the sidebar + content + TOC three-up.
  //
  // We use balanced-tag matching by counting nested <div>s because regex
  // can't natively balance.
  const openIdx = html.search(/<div class=(?:"|)theme-doc-markdown markdown(?:"|\s)/);
  if (openIdx === -1) {
    throw new Error('extract-shell: could not find .theme-doc-markdown div in source page');
  }
  // Walk forward from openIdx to find the matching </div>.
  let depth = 0;
  let i = openIdx;
  while (i < html.length) {
    if (html[i] === '<') {
      if (html.startsWith('<div', i)) {
        depth += 1;
        i = html.indexOf('>', i) + 1;
        continue;
      }
      if (html.startsWith('</div>', i)) {
        depth -= 1;
        if (depth === 0) {
          // i points to start of closing </div>
          const innerStart = html.indexOf('>', openIdx) + 1;
          const innerEnd = i;
          return html.slice(0, innerStart) + CONTENT_SENTINEL + html.slice(innerEnd);
        }
        i += '</div>'.length;
        continue;
      }
    }
    i += 1;
  }
  throw new Error('extract-shell: unbalanced div nesting walking from .theme-doc-markdown');
}

function replaceTitle(html) {
  // <title data-rh=true>...</title> — Docusaurus uses react-helmet.
  return html.replace(/<title[^>]*>[^<]*<\/title>/, `<title>${TITLE_SENTINEL}</title>`);
}

function main() {
  const root = path.resolve(__dirname, '../..');
  // Need a page that (a) has the Recipes sidebar context expanded, and
  // (b) is a real markdown doc page (so it carries the
  // .theme-doc-markdown/.docItemContainer/.row content wrappers we want
  // to clone). The category-index pages don't qualify because they use
  // a different (generated-index) template.
  const candidates = [
    'build/user-documentation/recipes/coordinating-parent-pom-migrations/index.html',
    'build/user-documentation/recipes/managing-gradle-lock-files/index.html',
    'build/user-documentation/recipes/recipe-authoring/index.html',
  ];
  let src;
  for (const c of candidates) {
    const full = path.join(root, c);
    if (fs.existsSync(full)) { src = full; break; }
  }
  if (!src) {
    console.error('[extract-shell] no Docusaurus-built page found. Run yarn build:docs first.');
    process.exit(1);
  }
  console.log(`[extract-shell] reading: ${path.relative(root, src)}`);

  let html = fs.readFileSync(src, 'utf8');
  html = stripDocusaurusScripts(html);
  html = replacePageContent(html);
  html = replaceTitle(html);

  fs.writeFileSync(SHELL_OUT, html);
  const sizeKb = (fs.statSync(SHELL_OUT).size / 1024).toFixed(1);
  console.log(`[extract-shell] wrote ${path.relative(root, SHELL_OUT)} (${sizeKb} KB)`);
}

if (require.main === module) main();

module.exports = { CONTENT_SENTINEL, TITLE_SENTINEL };
