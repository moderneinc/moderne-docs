#!/usr/bin/env node
/**
 * Group existing changelog entries under "## Month Year" headers.
 *
 * Reads a changelog markdown file containing entries shaped like:
 *   ### <Component> v<version> (YYYY/MM/DD)
 *   ...body...
 *
 * Rewrites the file with a "## Month Year" separator before each
 * group of entries, preserving the file preamble and entry bodies.
 *
 * Usage: node scripts/group-changelog-by-month.mjs <path/to/changelog.md>
 */

import {readFileSync, writeFileSync} from 'node:fs';
import {resolve} from 'node:path';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/**
 * Matches a `### ` heading whose tail contains a YYYY-MM-DD date,
 * with `/` or `-` separators, optionally wrapped in parentheses.
 *
 * Examples:
 *   ### UI v12.36.0 (2026/04/30)
 *   ### CLI / DX v4.2.1 (2026-04-28)
 *   ### v0.259.0 - 2026-04-29
 */
const DATED_HEADER_RE = /^###\s+.+?[\s(](\d{4})[/-](\d{2})[/-](\d{2})\)?\s*$/;
const ANY_HEADER_RE = /^###\s+\S/;
const MONTH_HEADER_RE = new RegExp(`^##\\s+(${MONTH_NAMES.join('|')})\\s+\\d{4}\\s*$`);
const EARLIER_HEADER = '## Earlier releases';

function group(content) {
  const lines = content.split('\n');
  let lastDatedIdx = -1;
  for (let i = lines.length - 1; i >= 0; i--) {
    if (DATED_HEADER_RE.test(lines[i])) {
      lastDatedIdx = i;
      break;
    }
  }

  const preamble = [];
  const dated = [];
  const undated = [];
  let current = null;
  let currentIsUndated = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (MONTH_HEADER_RE.test(line) || line.trim() === EARLIER_HEADER) continue;
    const m = line.match(DATED_HEADER_RE);
    if (m) {
      if (current) (currentIsUndated ? undated : dated).push(current);
      currentIsUndated = false;
      current = {
        year: Number(m[1]),
        month: Number(m[2]),
        day: Number(m[3]),
        lines: [line],
      };
    } else if (ANY_HEADER_RE.test(line) && i > lastDatedIdx) {
      if (current) (currentIsUndated ? undated : dated).push(current);
      currentIsUndated = true;
      current = {lines: [line]};
    } else if (current) {
      current.lines.push(line);
    } else {
      preamble.push(line);
    }
  }
  if (current) (currentIsUndated ? undated : dated).push(current);

  dated.sort((a, b) =>
    b.year - a.year || b.month - a.month || b.day - a.day,
  );

  const out = [];
  if (preamble.length) {
    out.push(preamble.join('\n').replace(/\s+$/, ''));
    out.push('');
  }

  let activeKey = '';
  for (const entry of dated) {
    const key = `${entry.year}-${entry.month}`;
    if (key !== activeKey) {
      activeKey = key;
      out.push(`## ${MONTH_NAMES[entry.month - 1]} ${entry.year}`);
      out.push('');
    }
    out.push(entry.lines.join('\n').replace(/\s+$/, ''));
    out.push('');
  }

  if (undated.length) {
    out.push(EARLIER_HEADER);
    out.push('');
    for (const entry of undated) {
      out.push(entry.lines.join('\n').replace(/\s+$/, ''));
      out.push('');
    }
  }

  return out.join('\n').replace(/\n{3,}/g, '\n\n').replace(/\s+$/, '') + '\n';
}

const target = process.argv[2];
if (!target) {
  console.error('Usage: node scripts/group-changelog-by-month.mjs <file>');
  process.exit(1);
}

const path = resolve(target);
const original = readFileSync(path, 'utf8');
const updated = group(original);
writeFileSync(path, updated);
console.log(`Rewrote ${path} (${updated.split('\n').length} lines)`);
