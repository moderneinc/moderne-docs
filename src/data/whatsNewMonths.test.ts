import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { whatsNewMonths, whatsNewToc } from './whatsNewMonths';

describe('whatsNewMonths', () => {
  it('matches the month sections in docs/whats-new.mdx, in order', () => {
    const mdx = readFileSync(path.resolve(__dirname, '../../docs/whats-new.mdx'), 'utf8');
    const labels = [...mdx.matchAll(/<WhatsNewMonth label="([^"]+)"/g)].map((match) => match[1]);

    expect(labels).toEqual(whatsNewMonths);
  });

  it('builds a table of contents entry for each month heading', () => {
    expect(whatsNewToc[0]).toEqual({ value: 'November 2026', id: 'november-2026', level: 2 });
    expect(whatsNewToc).toHaveLength(whatsNewMonths.length);
  });
});
