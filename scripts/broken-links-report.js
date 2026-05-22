#!/usr/bin/env node
// Aggregates per-shard collected link/anchor data and runs a single,
// cross-shard broken-link check — eliminating the cross-shard anchor
// false-positives each shard would otherwise produce on its own.
//
// Usage:
//   node scripts/broken-links-report.js <shard-meta.json>... [--out <file.md>]
//
// Writes a Markdown report to <file.md> (default: broken-links-summary.md).
// Exit code is always 0 so the workflow step never fails on warnings; callers
// can grep the report or use the JSON sidecar (`<file.md>.json`) for gating.
//
// The check logic is ported from @docusaurus/core/lib/server/brokenLinks
// (private API, not exported). Keep in sync on Docusaurus upgrades.

const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const { matchRoutes } = require('react-router-config');
const {
  parseURLPath,
  serializeURLPath,
  flattenRoutes,
} = require('@docusaurus/utils');
const {
  addTrailingSlash,
  removeTrailingSlash,
} = require('@docusaurus/utils-common');

const args = process.argv.slice(2);
const outIdx = args.indexOf('--out');
const outPath =
  outIdx >= 0 ? args.splice(outIdx, 2)[1] : 'broken-links-summary.md';
const inputs = args;

if (inputs.length === 0) {
  console.error(
    'Usage: broken-links-report.js <shard-meta.json>... [--out <file.md>]',
  );
  process.exit(2);
}

const merged = mergeShardMeta(inputs);
const brokenLinks = getBrokenLinks(merged.collectedLinks, merged.flatRoutes);
const { brokenPaths, brokenAnchors } = splitBrokenLinks(brokenLinks);

writeMarkdown(outPath, { brokenPaths, brokenAnchors, merged, inputs });
writeJsonSidecar(outPath, { brokenPaths, brokenAnchors });

const summary = `Found ${countTargets(brokenPaths)} broken paths across ${Object.keys(brokenPaths).length} pages, ${countTargets(brokenAnchors)} broken anchors across ${Object.keys(brokenAnchors).length} pages.`;
console.log(`[broken-links-report] ${summary}`);
console.log(`[broken-links-report] wrote ${outPath}`);

// ---------------------------------------------------------------------------
// Merge per-shard meta files
// ---------------------------------------------------------------------------

function mergeShardMeta(files) {
  let flatRoutes = null;
  const collectedLinks = {};
  const shardIndices = [];

  for (const f of files) {
    const data = JSON.parse(fs.readFileSync(f, 'utf8'));
    shardIndices.push(data.shardIndex);
    if (flatRoutes === null) flatRoutes = data.flatRoutes;
    Object.assign(collectedLinks, data.collectedLinks);
  }

  return {
    collectedLinks,
    flatRoutes,
    shardIndices: shardIndices.sort((a, b) => a - b),
  };
}

// ---------------------------------------------------------------------------
// Broken-link check (ported from @docusaurus/core/lib/server/brokenLinks)
// ---------------------------------------------------------------------------

function normalizeCollectedLinks(collectedLinks) {
  const result = new Map();
  for (const [pathname, page] of Object.entries(collectedLinks)) {
    result.set(pathname, {
      links: new Set((page.links || []).filter((l) => typeof l === 'string')),
      anchors: new Set(
        (page.anchors || [])
          .filter((a) => typeof a === 'string')
          .map((a) => (a.startsWith('#') ? a.slice(1) : a)),
      ),
    });
  }
  return result;
}

function filterIntermediateRoutes(routes) {
  return flattenRoutes(routes.filter((r) => r.path !== '*'));
}

function createHelper({ collectedLinks, routes }) {
  const validPathnames = new Set(collectedLinks.keys());
  const [validPathnameRoutes, otherRoutes] = _.partition(
    routes,
    (r) => r.exact && validPathnames.has(r.path),
  );
  for (const r of validPathnameRoutes) {
    if (!r.strict) {
      validPathnames.add(addTrailingSlash(r.path));
      validPathnames.add(removeTrailingSlash(r.path));
    }
  }

  function isPathnameMatchingAnyRoute(pathname) {
    if (matchRoutes(otherRoutes, pathname).length > 0) {
      validPathnames.add(pathname);
      return true;
    }
    return false;
  }

  function isPathBrokenLink(linkPath) {
    const candidates = [linkPath.pathname, decodeURI(linkPath.pathname)];
    if (candidates.some((p) => validPathnames.has(p))) return false;
    if (candidates.some(isPathnameMatchingAnyRoute)) return false;
    return true;
  }

  function isAnchorBrokenLink(linkPath) {
    const { pathname, hash } = linkPath;
    if (hash === undefined || hash === '') return false;
    const targetPage =
      collectedLinks.get(pathname) ||
      collectedLinks.get(decodeURI(pathname)) ||
      collectedLinks.get(addTrailingSlash(pathname)) ||
      collectedLinks.get(addTrailingSlash(decodeURI(pathname))) ||
      collectedLinks.get(removeTrailingSlash(pathname)) ||
      collectedLinks.get(removeTrailingSlash(decodeURI(pathname)));
    if (!targetPage) return true;
    if (
      targetPage.anchors.has(hash) ||
      targetPage.anchors.has(decodeURIComponent(hash))
    ) {
      return false;
    }
    return true;
  }

  return { collectedLinks, isPathBrokenLink, isAnchorBrokenLink };
}

function getBrokenLinks(collectedLinksObj, routes) {
  const normalized = normalizeCollectedLinks(collectedLinksObj);
  const helper = createHelper({
    collectedLinks: normalized,
    routes: filterIntermediateRoutes(routes),
  });

  const result = {};
  for (const pagePath of normalized.keys()) {
    const pageData = normalized.get(pagePath);
    const pageBroken = [];
    for (const link of pageData.links) {
      const linkPath = parseURLPath(link, pagePath);
      if (helper.isPathBrokenLink(linkPath)) {
        pageBroken.push({
          link,
          resolvedLink: serializeURLPath(linkPath),
          anchor: false,
        });
      } else if (helper.isAnchorBrokenLink(linkPath)) {
        pageBroken.push({
          link,
          resolvedLink: serializeURLPath(linkPath),
          anchor: true,
        });
      }
    }
    if (pageBroken.length > 0) result[pagePath] = pageBroken;
  }
  return result;
}

function splitBrokenLinks(brokenLinks) {
  const brokenPaths = {};
  const brokenAnchors = {};
  for (const [pathname, links] of Object.entries(brokenLinks)) {
    const [anchors, paths] = _.partition(links, (l) => l.anchor);
    if (paths.length > 0) brokenPaths[pathname] = paths;
    if (anchors.length > 0) brokenAnchors[pathname] = anchors;
  }
  return { brokenPaths, brokenAnchors };
}

// ---------------------------------------------------------------------------
// Markdown formatting
// ---------------------------------------------------------------------------

function countTargets(byPage) {
  return Object.values(byPage).reduce((sum, arr) => sum + arr.length, 0);
}

function frequentTargets(byPage, threshold = 5) {
  const counts = {};
  for (const links of Object.values(byPage)) {
    for (const { link } of links) {
      counts[link] = (counts[link] || 0) + 1;
    }
  }
  return Object.entries(counts)
    .filter(([, n]) => n >= threshold)
    .sort((a, b) => b[1] - a[1]);
}

function renderSection(title, byPage) {
  const pages = Object.keys(byPage).sort();
  if (pages.length === 0) {
    return `## ${title}\n\nNone. ✓\n`;
  }

  const total = countTargets(byPage);
  let md = `## ${title}\n\n`;
  md += `**${total}** broken target${total === 1 ? '' : 's'} across **${pages.length}** source page${pages.length === 1 ? '' : 's'}.\n\n`;

  const frequent = frequentTargets(byPage);
  if (frequent.length > 0) {
    md += `### Most-linked broken targets\n\n`;
    md += `| Count | Target |\n|------:|:-------|\n`;
    for (const [link, count] of frequent.slice(0, 10)) {
      md += `| ${count} | \`${link}\` |\n`;
    }
    md += '\n';
  }

  md += `<details><summary>All broken targets by source page</summary>\n\n`;
  for (const page of pages) {
    md += `**\`${page}\`**\n\n`;
    for (const { link, resolvedLink } of byPage[page]) {
      const display =
        link === resolvedLink
          ? `\`${link}\``
          : `\`${link}\` (resolved as \`${resolvedLink}\`)`;
      md += `* ${display}\n`;
    }
    md += '\n';
  }
  md += `</details>\n`;
  return md;
}

function writeMarkdown(outPath, { brokenPaths, brokenAnchors, merged, inputs }) {
  let md = `# Broken links report\n\n`;
  md += `Aggregated from ${inputs.length} shard${inputs.length === 1 ? '' : 's'} (`;
  md += merged.shardIndices.map((i) => `shard-${i}`).join(', ');
  md += `) covering **${Object.keys(merged.collectedLinks).length}** rendered routes and **${merged.flatRoutes.length}** total routes.\n\n`;
  md += renderSection('Broken paths', brokenPaths);
  md += '\n';
  md += renderSection('Broken anchors', brokenAnchors);
  fs.writeFileSync(outPath, md);
}

function writeJsonSidecar(outPath, payload) {
  const jsonPath = outPath + '.json';
  fs.writeFileSync(jsonPath, JSON.stringify(payload, null, 2));
}
