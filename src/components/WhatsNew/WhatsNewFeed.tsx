import clsx from 'clsx';
import { type FunctionComponent, type ReactNode, useMemo, useState } from 'react';
import { collectProducts, WhatsNewFilterContext, type WhatsNewSelection } from './filter';
import { FILTERABLE_PRODUCTS, products } from './products';
import styles from './WhatsNew.module.css';

export type WhatsNewFeedProps = {
  /** The WhatsNewMonth sections */
  children?: ReactNode;
};

/**
 * Wraps the What's new feed with a row of product filter chips. A chip
 * appears for each filterable product that at least one entry uses.
 */
export const WhatsNewFeed: FunctionComponent<WhatsNewFeedProps> = ({ children }) => {
  const [selected, setSelected] = useState<WhatsNewSelection>('all');

  const options = useMemo(() => {
    const present = new Set(collectProducts(children));
    const productOptions = FILTERABLE_PRODUCTS.filter((product) => present.has(product)).map((product) => ({
      value: product as WhatsNewSelection,
      label: products[product].label,
    }));
    return [{ value: 'all' as WhatsNewSelection, label: 'All' }, ...productOptions];
  }, [children]);

  return (
    <WhatsNewFilterContext.Provider value={selected}>
      {/* The global class lets custom.css restyle the surrounding doc page with :has() */}
      <div className="whats-new-page">
        <div role="group" aria-label="Filter by product" className={styles.filters}>
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              aria-pressed={selected === option.value}
              className={clsx(styles.chip, { [styles.chipSelected]: selected === option.value })}
              onClick={() => setSelected(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
        {children}
      </div>
    </WhatsNewFilterContext.Provider>
  );
};

WhatsNewFeed.displayName = 'WhatsNewFeed';
