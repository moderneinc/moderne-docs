// Wraps each rendered recipe in the Docusaurus page shell extracted by
// extract-shell.js so recipe pages look identical to the rest of the site.
//
// Trade-offs of this approach:
//   * Visual chrome (navbar, sidebar, footer, fonts, theme) matches the live
//     Docusaurus pages exactly because we re-use the same compiled CSS and the
//     same pre-rendered SSR markup.
//   * No client-side interactivity on recipe pages: sidebar collapse, mobile
//     menu, MegaMenu hover, search box, theme toggle. These all require the
//     Docusaurus React bundle, which we strip to prevent it from hydrating
//     onto an unknown route and rendering a 404. Users can still click links
//     (intercepted by recipeCatalogLinks.js for navigation back into the
//     Docusaurus app).

const fs = require('fs');
const path = require('path');

const SHELL_PATH = path.join(__dirname, 'shell-template.html');
const META_PATH = path.join(__dirname, 'shell-template-meta.json');
const { CONTENT_SENTINEL, TITLE_SENTINEL, BREADCRUMB_SENTINEL } = require('./extract-shell');

const URL_PREFIX = '/user-documentation/recipes/recipe-catalog';

let shellTemplate = null;
let shellMeta = null;

function loadShell() {
  if (shellTemplate !== null) return shellTemplate;
  if (!fs.existsSync(SHELL_PATH)) {
    console.warn('[layout] shell-template.html missing; falling back to minimal layout. Run extract-shell first.');
    shellTemplate = false;
  } else {
    shellTemplate = fs.readFileSync(SHELL_PATH, 'utf8');
    shellMeta = fs.existsSync(META_PATH) ? JSON.parse(fs.readFileSync(META_PATH, 'utf8')) : {};
  }
  return shellTemplate;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function prettifySegment(seg) {
  return seg.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

// Builds the breadcrumb HTML for a recipe page using class names extracted
// from the source Docusaurus page so the markup styles consistently. The
// crumb shape is:
//   Home (icon) > Recipes > Catalog > <category…> > <recipe title (current)>
// Intermediate <category> crumbs link to the category index page (rendered
// from each directory's README.md by the streaming build).
function renderBreadcrumb(href, title) {
  const meta = shellMeta && shellMeta.breadcrumb;
  if (!meta) return '';

  const rel = href.startsWith(URL_PREFIX) ? href.slice(URL_PREFIX.length).replace(/^\//, '') : '';
  const segments = rel ? rel.split('/') : [];

  const crumbs = [
    { href: '/user-documentation/recipes', label: 'Recipes' },
    { href: URL_PREFIX, label: 'Catalog' },
  ];
  // Intermediate path segments link to their category index page.
  let acc = URL_PREFIX;
  for (let i = 0; i < segments.length - 1; i++) {
    acc += '/' + segments[i];
    crumbs.push({ href: acc, label: prettifySegment(segments[i]) });
  }
  // Last crumb: current page, no link.
  crumbs.push({ label: title });

  const { crumbCls, linkCls, separatorSvg } = meta;
  return crumbs.map((c, idx) => {
    const isLast = idx === crumbs.length - 1;
    const inner = c.href && !isLast
      ? `<a class=${linkCls} href=${c.href}>${escapeHtml(c.label)}</a>`
      : `<span class=${linkCls}>${escapeHtml(c.label)}</span>`;
    const sep = isLast ? '' : separatorSvg;
    return `<span class=${crumbCls}>${inner}${sep}</span>`;
  }).join('');
}

function renderMinimalLayout({ title, content }) {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>${escapeHtml(title)}</title></head>
<body><main>${content}</main></body></html>`;
}

function renderLayout({ title, href, content }) {
  const shell = loadShell();
  if (!shell) return renderMinimalLayout({ title, content });
  const docTitle = title ? `${title} | Moderne Docs` : 'Moderne Docs';
  return shell
    .replace(TITLE_SENTINEL, escapeHtml(docTitle))
    .replace(BREADCRUMB_SENTINEL, renderBreadcrumb(href, title))
    .replace(CONTENT_SENTINEL, content);
}

module.exports = { renderLayout };
