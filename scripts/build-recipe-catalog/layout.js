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
//
// At first run, shell-template.html may not exist yet. We fall back to a
// minimal layout in that case so error messages stay readable during dev.

const fs = require('fs');
const path = require('path');

const SHELL_PATH = path.join(__dirname, 'shell-template.html');
const { CONTENT_SENTINEL, TITLE_SENTINEL } = require('./extract-shell');

let shellTemplate = null;

function loadShell() {
  if (shellTemplate !== null) return shellTemplate;
  if (!fs.existsSync(SHELL_PATH)) {
    console.warn('[layout] shell-template.html missing; falling back to minimal layout. Run extract-shell first.');
    shellTemplate = false;
  } else {
    shellTemplate = fs.readFileSync(SHELL_PATH, 'utf8');
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

function renderMinimalLayout({ title, content }) {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>${escapeHtml(title)}</title></head>
<body><main>${content}</main></body></html>`;
}

function renderLayout({ title, content }) {
  const shell = loadShell();
  if (!shell) return renderMinimalLayout({ title, content });
  const docTitle = title ? `${title} | Moderne Docs` : 'Moderne Docs';
  return shell
    .replace(TITLE_SENTINEL, escapeHtml(docTitle))
    .replace(CONTENT_SENTINEL, content);
}

module.exports = { renderLayout };
