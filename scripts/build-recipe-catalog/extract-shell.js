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
const META_OUT = path.join(__dirname, 'shell-template-meta.json');
const CONTENT_SENTINEL = '<!--RECIPE_CONTENT-->';
const TITLE_SENTINEL = '<!--RECIPE_TITLE-->';
const BREADCRUMB_SENTINEL = '<!--RECIPE_BREADCRUMB-->';

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

// The sidebar SSR markup reflects the source page we extracted: its parent
// category is expanded and its link is marked active. Rewrite that state so
// the sidebar makes sense for recipe pages: the "Catalog" category is
// expanded, the source-page's section ("How-to guides") is collapsed, and
// no link is marked active (acceptable for POC; per-recipe active marking
// would require knowing each page's path here).
function retargetSidebar(html) {
  // Drop active-link modifier wherever it appears.
  html = html.replace(/\s+menu__link--active\b/g, '');

  // Walk every <li class="theme-doc-sidebar-item-category ..."> and patch its
  // collapsed state based on the href of its categoryLink.
  // - href ending in /recipe-catalog        → ensure NOT collapsed (expand)
  // - href ending in any other top-level recipes section → ensure collapsed
  const liRe = /<li class="(theme-doc-sidebar-item-category[^"]*)"([^>]*)><div class=menu__list-item-collapsible><a [^>]*\bhref=([^\s>]+)/g;
  html = html.replace(liRe, (full, classes, rest, href) => {
    let next = classes;
    if (href === '/user-documentation/recipes/recipe-catalog') {
      next = next.replace(/\s+menu__list-item--collapsed\b/g, '');
    } else if (
      href === '/user-documentation/recipes/how-to-guides' ||
      href === '/user-documentation/recipes/popular-recipe-guides' ||
      href === '/user-documentation/recipes/lists'
    ) {
      if (!/\bmenu__list-item--collapsed\b/.test(next)) next += ' menu__list-item--collapsed';
    }
    return `<li class="${next}"${rest}><div class=menu__list-item-collapsible><a ${full.split('><a ')[1]}`.replace(/href=[^\s>]+/, `href=${href}`);
  });
  return html;
}

// Strips the right-side TOC column and the mobile TOC. Recipe pages don't ship
// a per-page TOC for now; the content column expands to fill the freed space
// because Docusaurus' grid lets a class="col" sibling auto-stretch.
function stripTOC(html) {
  // Mobile TOC sits in a div with theme-doc-toc-mobile (and friends).
  html = removeBalancedDiv(html, /<div class="[^"]*\btheme-doc-toc-mobile\b[^"]*"/);
  // Desktop TOC is wrapped in <div class="col col--3"> — strip that whole column.
  html = removeBalancedDiv(html, /<div class="col col--3"/);
  return html;
}

// Strips Docusaurus' per-doc footer (edit-this-page link + last-updated row)
// since they reference the source page we extracted the shell from.
function stripFooterMeta(html) {
  return removeBalancedFooter(html, /<footer class="[^"]*\btheme-doc-footer\b[^"]*"/);
}

// Strips the breadcrumb's per-page crumbs (everything after the home link's
// initial separator), leaving a sentinel so layout.js can re-render
// per-recipe crumbs. Also extracts the hashed CSS class names so layout.js
// can produce markup that matches the rest of the site.
function templatizeBreadcrumb(html, meta) {
  const navOpenRe = /<nav class=breadcrumbs_[A-Za-z0-9_-]+[^>]*>/;
  const navMatch = html.match(navOpenRe);
  if (!navMatch) return html;

  const navOpenIdx = navMatch.index;
  const navOpenLen = navMatch[0].length;
  const navCloseIdx = html.indexOf('</nav>', navOpenIdx);
  if (navCloseIdx === -1) return html;

  const navInner = html.slice(navOpenIdx + navOpenLen, navCloseIdx);

  // Extract hashed class names from the inner markup.
  const homeLinkCls = (navInner.match(/<a class=(homeLink_[A-Za-z0-9_-]+)/) || [])[1];
  const crumbCls = (navInner.match(/<span class=(crumb_[A-Za-z0-9_-]+)/) || [])[1];
  const linkCls = (navInner.match(/<a class=(link_[A-Za-z0-9_-]+)/) || [])[1];

  // Capture the home-link <a>...</a> and the very first separator <svg>...</svg>.
  // These come immediately after the nav opening tag; keep them, drop the rest.
  const homeMatch = navInner.match(/^<a class=homeLink_[A-Za-z0-9_-]+[\s\S]*?<\/a>/);
  const sepMatch = navInner.match(/<svg [^>]*separator_[A-Za-z0-9_-]+[\s\S]*?<\/svg>/);
  if (!homeMatch || !sepMatch) return html;

  const sepCls = (sepMatch[0].match(/(separator_[A-Za-z0-9_-]+)/) || [])[1];
  meta.breadcrumb = { homeLinkCls, crumbCls, linkCls, sepCls, separatorSvg: sepMatch[0] };

  const newInner = `${homeMatch[0]}${sepMatch[0]}${BREADCRUMB_SENTINEL}`;
  return html.slice(0, navOpenIdx + navOpenLen) + newInner + html.slice(navCloseIdx);
}

// Generic helper: given a regex matching the opening tag of a <div>, removes
// that div and everything nested inside it (using a depth counter, since
// regex can't balance nested divs).
function removeBalancedDiv(html, openTagRe) {
  return removeBalancedTag(html, openTagRe, 'div');
}

function removeBalancedFooter(html, openTagRe) {
  return removeBalancedTag(html, openTagRe, 'footer');
}

function removeBalancedTag(html, openTagRe, tag) {
  const m = html.match(openTagRe);
  if (!m) return html;
  const start = m.index;
  const openEnd = html.indexOf('>', start) + 1;
  const openTag = `<${tag}`;
  const closeTag = `</${tag}>`;
  let depth = 1;
  let i = openEnd;
  while (i < html.length && depth > 0) {
    if (html.startsWith(openTag, i) && (html[i + openTag.length] === ' ' || html[i + openTag.length] === '>')) {
      depth += 1;
      i = html.indexOf('>', i) + 1;
    } else if (html.startsWith(closeTag, i)) {
      depth -= 1;
      i += closeTag.length;
    } else {
      i += 1;
    }
  }
  return html.slice(0, start) + html.slice(i);
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

  const meta = {};
  let html = fs.readFileSync(src, 'utf8');
  html = stripDocusaurusScripts(html);
  html = stripTOC(html);
  html = stripFooterMeta(html);
  html = retargetSidebar(html);
  html = templatizeBreadcrumb(html, meta);
  html = replacePageContent(html);
  html = replaceTitle(html);

  fs.writeFileSync(SHELL_OUT, html);
  fs.writeFileSync(META_OUT, JSON.stringify(meta, null, 2));
  const sizeKb = (fs.statSync(SHELL_OUT).size / 1024).toFixed(1);
  console.log(`[extract-shell] wrote ${path.relative(root, SHELL_OUT)} (${sizeKb} KB)`);
}

if (require.main === module) main();

module.exports = { CONTENT_SENTINEL, TITLE_SENTINEL, BREADCRUMB_SENTINEL, META_OUT };
