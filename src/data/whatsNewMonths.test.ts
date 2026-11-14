import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { whatsNewMonthHref, whatsNewMonths } from './whatsNewMonths';

describe('whatsNewMonths', () => {
  it('matches the month sections in docs/whats-new.mdx, in order', () => {
    const mdx = readFileSync(path.resolve(__dirname, '../../docs/whats-new.mdx'), 'utf8');
    const labels = [...mdx.matchAll(/<WhatsNewMonth label="([^"]+)"/g)].map((match) => match[1]);

    expect(labels).toEqual(whatsNewMonths);
  });

  it('links to the month anchor on the page', () => {
    expect(whatsNewMonthHref('November 2026')).toBe('/whats-new#november-2026');
  });
});
