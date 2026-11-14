import React from 'react';
import { describe, expect, it } from 'vitest';
import { collectProducts } from './filter';

// Stand-ins for the MDX output: a month holds entries, and MDX may wrap
// siblings in a fragment.
const Month = ({ children }: { children?: React.ReactNode }) => <section>{children}</section>;
const Entry = ({ product, children }: { product: string; children?: React.ReactNode }) => (
  <article data-product={product}>{children}</article>
);

describe('collectProducts', () => {
  it('finds the product of every entry, walking through months and fragments', () => {
    const tree = (
      <>
        <Month>
          <Entry product="platform">
            <p>Body text with no product of its own.</p>
          </Entry>
          <Entry product="cli" />
        </Month>
        <Month>
          <>
            <Entry product="platform" />
          </>
        </Month>
      </>
    );

    expect(collectProducts(tree)).toEqual(['platform', 'cli', 'platform']);
  });

  it('does not look inside an entry for nested products', () => {
    const tree = (
      <Entry product="docs">
        <Entry product="cli" />
      </Entry>
    );

    expect(collectProducts(tree)).toEqual(['docs']);
  });

  it('returns nothing for text and empty children', () => {
    expect(collectProducts('just text')).toEqual([]);
    expect(collectProducts(null)).toEqual([]);
  });
});
