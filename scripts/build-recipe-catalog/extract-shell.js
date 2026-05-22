// Extracts a reusable HTML "shell" from a Docusaurus-built page so the recipe
// renderer can wrap each recipe in the same chrome (navbar, sidebar, footer)
// as the rest of the site. Operates on the rendered HTML via cheerio (jQuery-
// style DOM selectors) instead of regex.
//
// What we keep:
//   * <head>: all <meta>, <link rel="stylesheet">, <link rel="preconnect">,
//     <link rel="icon">. Title is replaced per-recipe at render time.
//   * <body> wrapper, navbar, sidebar (pre-rendered SSR markup), main grid.
//   * Inline <style> tags (Docusaurus emits critical CSS this way).
//
// What we drop:
//   * <script src="/assets/js/*.js"> and pre-hydration data blobs. Without
//     these the React app never hydrates onto recipe URLs (which aren't in
//     its route map) and so doesn't replace our content with a 404.
//   * Right-side TOC column (theme-doc-toc-desktop and mobile variant).
//   * Per-doc footer (theme-doc-footer) — edit-this-page + last-updated rows
//     that referenced the source page used to extract the shell.
//
// Per-recipe data is injected at render time via these sentinels:
//   <!--RECIPE_TITLE-->        — used inside <title>
//   <!--RECIPE_BREADCRUMB-->   — replaces source-page crumbs after home link
//   <!--RECIPE_CONTENT-->      — replaces the source page's body inside
//                                <div class="theme-doc-markdown markdown">

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const SHELL_OUT = path.join(__dirname, 'shell-template.html');
const META_OUT = path.join(__dirname, 'shell-template-meta.json');
const CONTENT_SENTINEL = '<!--RECIPE_CONTENT-->';
const TITLE_SENTINEL = '<!--RECIPE_TITLE-->';
const BREADCRUMB_SENTINEL = '<!--RECIPE_BREADCRUMB-->';

const RECIPE_HREFS = {
  catalog: '/user-documentation/recipes/recipe-catalog',
  collapseWhenNotActive: [
    '/user-documentation/recipes/how-to-guides',
    '/user-documentation/recipes/popular-recipe-guides',
    '/user-documentation/recipes/lists',
  ],
};

function transformShell($) {
  const meta = {};

  // Strip Docusaurus hydration artefacts.
  $('script[src*="/assets/js/"]').remove();
  $('script')
    .filter((_, el) => /__DOCUSAURUS_/.test($(el).html() || ''))
    .remove();
  $('link[rel="modulepreload"]').remove();
  $('link[rel="preload"][as="script"]').remove();

  // Strip the right-side TOC column and mobile TOC.
  $('.col.col--3:has(.theme-doc-toc-desktop)').remove();
  $('.theme-doc-toc-mobile').remove();

  // Strip the per-doc footer (edit-this-page + last-updated).
  $('.theme-doc-footer').remove();

  // Retarget the sidebar to make sense for recipe pages.
  $('.menu__link--active').removeClass('menu__link--active');
  $('li.theme-doc-sidebar-item-category').each((_, li) => {
    const $li = $(li);
    const href = $li.find('> .menu__list-item-collapsible > a').attr('href');
    if (href === RECIPE_HREFS.catalog) {
      $li.removeClass('menu__list-item--collapsed');
    } else if (RECIPE_HREFS.collapseWhenNotActive.includes(href)) {
      $li.addClass('menu__list-item--collapsed');
    }
  });

  // Templatize the breadcrumb: keep the home link + first separator, replace
  // the rest with a sentinel and capture meta so layout.js can re-render
  // per-recipe crumbs using the same hashed CSS classes.
  const $nav = $('nav[aria-label="Breadcrumbs"]').first();
  if ($nav.length) {
    const homeLink = $nav.find('a[class^="homeLink_"]').first();
    const firstSep = homeLink.next('svg[class*="separator_"]');
    const crumbCls = ($nav.find('span[class^="crumb_"]').first().attr('class') || '').trim();
    const linkCls = ($nav.find('a[class^="link_"]').first().attr('class') || '').trim();
    const sepCls = (firstSep.attr('class') || '').match(/separator_[A-Za-z0-9_-]+/);
    meta.breadcrumb = {
      crumbCls,
      linkCls,
      sepCls: sepCls ? sepCls[0] : null,
      separatorSvg: $.html(firstSep),
    };
    // Replace nav contents: home link + first separator + sentinel.
    $nav.empty().append(homeLink).append(firstSep).append(BREADCRUMB_SENTINEL);
  }

  // Replace inner content of .theme-doc-markdown with sentinel.
  const $markdown = $('.theme-doc-markdown.markdown').first();
  if (!$markdown.length) {
    throw new Error('extract-shell: .theme-doc-markdown.markdown not found in source page');
  }
  $markdown.html(CONTENT_SENTINEL);

  // Replace the <title>.
  $('title').text(TITLE_SENTINEL);

  return { html: $.html(), meta };
}

function main() {
  const root = path.resolve(__dirname, '../..');
  // Need a page that has both the Recipes sidebar context AND the
  // .theme-doc-markdown wrapper Docusaurus uses for real doc pages
  // (category-index pages use a different template).
  const candidates = [
    'build/user-documentation/recipes/coordinating-parent-pom-migrations/index.html',
    'build/user-documentation/recipes/managing-gradle-lock-files/index.html',
    'build/user-documentation/recipes/recipe-authoring/index.html',
  ];
  const src = candidates
    .map((p) => path.join(root, p))
    .find((p) => fs.existsSync(p));
  if (!src) {
    console.error('[extract-shell] no Docusaurus-built page found. Run yarn build:docs first.');
    process.exit(1);
  }
  console.log(`[extract-shell] reading: ${path.relative(root, src)}`);

  const $ = cheerio.load(fs.readFileSync(src, 'utf8'), { decodeEntities: false });
  const { html, meta } = transformShell($);

  fs.writeFileSync(SHELL_OUT, html);
  fs.writeFileSync(META_OUT, JSON.stringify(meta, null, 2));
  const sizeKb = (fs.statSync(SHELL_OUT).size / 1024).toFixed(1);
  console.log(`[extract-shell] wrote ${path.relative(root, SHELL_OUT)} (${sizeKb} KB)`);
}

if (require.main === module) main();

module.exports = { CONTENT_SENTINEL, TITLE_SENTINEL, BREADCRUMB_SENTINEL, META_OUT };
