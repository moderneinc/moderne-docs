#!/usr/bin/env node
// Regenerates the OpenRewrite pages that docs.moderne.io hosts as noindex copies.
//
// Usage: node .github/scripts/sync-openrewrite-docs.mjs <rewrite-docs checkout> [report.md]
//
// The page list lives in .github/data/openrewrite-docs.json. A `pinned` page carries
// deliberate Moderne changes, so it is never overwritten. Its `reconciledWith` commit
// records the upstream version a person last ported from, and the report lists pinned
// pages whose upstream source has changed since. Advance that commit by hand after porting.

import { execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const UPSTREAM_SITE = 'https://docs.openrewrite.org';
const MODERNE_SITE = 'https://docs.moderne.io';
const CONFIG_PATH = '.github/data/openrewrite-docs.json';

const [upstreamRoot, reportPath] = process.argv.slice(2);
if (!upstreamRoot) {
  console.error('Usage: sync-openrewrite-docs.mjs <rewrite-docs checkout> [report.md]');
  process.exit(2);
}

const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
const byUpstream = new Map(config.pages.map(page => [page.upstream, page]));
const redirects = loadRedirects();
const upstreamCommit = execFileSync('git', ['-C', upstreamRoot, 'rev-parse', 'HEAD']).toString().trim();
const problems = [];
const pinnedDrift = [];

for (const page of config.pages) {
  if (page.linkOnly) continue;
  const source = path.join(upstreamRoot, page.upstream);
  if (!fs.existsSync(source)) {
    problems.push(`\`${page.upstream}\` no longer exists upstream (renamed or deleted), so \`${page.moderne}\` was left as is.`);
    continue;
  }
  if (page.pinned) {
    if (upstreamChangedSince(page.upstream, page.pinned.reconciledWith)) pinnedDrift.push(page);
    continue;
  }
  fs.mkdirSync(path.dirname(page.moderne), { recursive: true });
  fs.writeFileSync(page.moderne, transform(page, fs.readFileSync(source, 'utf8')));
}

config.upstreamCommit = upstreamCommit;
fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2) + '\n');

const report = [
  `Synced from openrewrite/rewrite-docs@${upstreamCommit.slice(0, 10)}.`,
  ...problems.map(problem => `* ${problem}`),
  ...pinnedDrift.map(page =>
    `* Pinned \`${page.moderne}\` needs porting: https://github.com/${config.repository}/compare/${page.pinned.reconciledWith}...${upstreamCommit}`),
].join('\n\n');
console.log(report);
if (reportPath) fs.writeFileSync(reportPath, report + '\n');

function transform(page, text) {
  let { frontMatter, body } = splitFrontMatter(text);
  if (page.sidebar_label) {
    frontMatter = setFrontMatter(frontMatter, 'sidebar_label', page.sidebar_label);
  }
  body = rewriteOutsideCode(body, line => rewriteLinks(page, line).replace(/^(\s*)- /, '$1* '));
  body = collapseBlankLines(body);
  return `---\n${frontMatter}\n---\n\n${insertHead(body.trimStart(), UPSTREAM_SITE + upstreamRoute(page.upstream))}`;
}

function splitFrontMatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n/);
  return match ? { frontMatter: match[1], body: text.slice(match[0].length) } : { frontMatter: '', body: text };
}

function setFrontMatter(frontMatter, key, value) {
  const line = `${key}: ${value}`;
  const pattern = new RegExp(`^${key}:.*$`, 'm');
  return pattern.test(frontMatter) ? frontMatter.replace(pattern, line) : `${line}\n${frontMatter}`.trim();
}

// Docusaurus requires MDX imports before any JSX, so the head goes after the import block.
function insertHead(body, canonical) {
  const head = `<head>\n  <meta name="robots" content="noindex" />\n  <link rel="canonical" href="${canonical}" />\n</head>\n\n`;
  const imports = body.match(/^(?:import .*\n+)+/);
  return imports ? imports[0].trimEnd() + '\n\n' + head + body.slice(imports[0].length) : head + body;
}

function rewriteOutsideCode(body, rewriteLine) {
  let fence = null;
  return body.split('\n').map(line => {
    const marker = line.match(/^\s*(`{3,}|~{3,})/);
    if (marker) {
      if (!fence) fence = marker[1];
      else if (marker[1].startsWith(fence[0]) && marker[1].length >= fence.length) fence = null;
      return line;
    }
    return fence ? line : rewriteLine(line);
  }).join('\n');
}

function collapseBlankLines(body) {
  let fenced = false;
  return body.split('\n').filter((line, index, lines) => {
    if (/^\s*(`{3,}|~{3,})/.test(line)) fenced = !fenced;
    return fenced || line.trim() !== '' || index === 0 || lines[index - 1].trim() !== '';
  }).join('\n');
}

function rewriteLinks(page, line) {
  return line.replace(/\]\(([^)\s]+)\)/g, (whole, target) => `](${resolveTarget(page, target)})`);
}

function resolveTarget(page, target) {
  const [targetPath, anchor] = splitAnchor(target);
  if (target.startsWith('#') || /^(mailto|tel):/.test(target)) return target;
  if (target.startsWith(MODERNE_SITE)) return moderneLink(page, targetPath, anchor) ?? target;
  if (target.startsWith(UPSTREAM_SITE)) return upstreamRouteLink(page, targetPath.slice(UPSTREAM_SITE.length), anchor) ?? target;
  if (/^https?:/.test(target)) return target;
  if (target.startsWith('/')) return upstreamRouteLink(page, targetPath, anchor) ?? UPSTREAM_SITE + target;

  const upstreamTarget = path.posix.normalize(path.posix.join(path.posix.dirname(page.upstream), targetPath));
  const override = config.linkOverrides?.[withMarkdownExtension(upstreamTarget) + hash(anchor)];
  if (override) return relativeLink(page.moderne, override);
  if (/\.(png|jpe?g|gif|svg|webp)$/i.test(upstreamTarget)) {
    return copyAsset(page, upstreamTarget) + hash(anchor);
  }
  const mapped = byUpstream.get(withMarkdownExtension(upstreamTarget));
  if (mapped) return relativeLink(page.moderne, mapped.moderne) + hash(anchor);
  return UPSTREAM_SITE + upstreamRoute(withMarkdownExtension(upstreamTarget)) + hash(anchor);
}

function splitAnchor(target) {
  const index = target.indexOf('#');
  return index < 0 ? [target, ''] : [target.slice(0, index), target.slice(index + 1)];
}

function hash(anchor) {
  return anchor ? `#${anchor}` : '';
}

function withMarkdownExtension(file) {
  return /\.mdx?$/.test(file) ? file : `${file}.md`;
}

function relativeLink(from, to) {
  const link = path.posix.relative(path.posix.dirname(from), to);
  return link.startsWith('.') ? link : `./${link}`;
}

function copyAsset(page, upstreamAsset) {
  const relative = path.posix.relative(path.posix.dirname(page.upstream), upstreamAsset);
  const destination = path.posix.join(path.posix.dirname(page.moderne), relative);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(path.join(upstreamRoot, upstreamAsset), destination);
  return relative.startsWith('.') ? relative : `./${relative}`;
}

function upstreamRoute(file) {
  const slug = readFrontMatterValue(path.join(upstreamRoot, file), 'slug');
  if (slug) return slug.startsWith('/') ? slug : '/' + path.posix.join(path.posix.dirname(file.replace(/^docs\//, '')), slug);
  return '/' + file.replace(/^docs\//, '').replace(/\.mdx?$/, '').replace(/\/index$/, '');
}

function upstreamRouteLink(page, route, anchor) {
  const clean = route.replace(/\/$/, '');
  for (const mapped of config.pages) {
    if (upstreamRoute(mapped.upstream) === clean) return relativeLink(page.moderne, mapped.moderne) + hash(anchor);
  }
  return null;
}

function moderneLink(page, url, anchor) {
  let route = url.slice(MODERNE_SITE.length).replace(/\/$/, '');
  if (!route) return null;
  route = redirects.get(route) ?? route;
  if (/^https?:/.test(route)) return route + hash(anchor);
  for (const candidate of [`docs${route}.md`, `docs${route}.mdx`, `docs${route}/index.md`]) {
    if (fs.existsSync(candidate)) return relativeLink(page.moderne, candidate) + hash(anchor);
  }
  problems.push(`${page.upstream} links to ${url}, which does not exist on docs.moderne.io`);
  return null;
}

function readFrontMatterValue(file, key) {
  if (!fs.existsSync(file)) return null;
  const { frontMatter } = splitFrontMatter(fs.readFileSync(file, 'utf8'));
  return frontMatter.match(new RegExp(`^${key}:\\s*['"]?(.*?)['"]?\\s*$`, 'm'))?.[1] ?? null;
}

function loadRedirects() {
  const source = fs.readFileSync('redirects.ts', 'utf8');
  const map = new Map();
  for (const [, from, to] of source.matchAll(/from:\s*(\[[^\]]*\]|'[^']*')\s*,\s*to:\s*'([^']*)'/g)) {
    for (const [, single] of from.matchAll(/'([^']*)'/g)) map.set(single.replace(/\/$/, ''), to);
  }
  return map;
}

function upstreamChangedSince(file, commit) {
  const changes = execFileSync('git', ['-C', upstreamRoot, 'diff', '--name-only', commit, 'HEAD', '--', file]).toString();
  return changes.trim().length > 0;
}
