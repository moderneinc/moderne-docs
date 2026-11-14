import Heading from '@theme/Heading';
import { type FunctionComponent, type ReactNode, useMemo } from 'react';
import { collectProducts, useWhatsNewFilter } from './filter';
import { slugify } from './slugify';
import styles from './WhatsNew.module.css';

export type WhatsNewMonthProps = {
  /** Month label, e.g. "November 2026" */
  label: string;
  /** Anchor id; defaults to a slug of the label, e.g. november-2026 */
  id?: string;
  /** The month's WhatsNewEntry elements */
  children?: ReactNode;
};

/**
 * A month section in the What's new feed: a ruled heading followed by that
 * month's entries. The section disappears when the product filter leaves it
 * with nothing to show.
 */
export const WhatsNewMonth: FunctionComponent<WhatsNewMonthProps> = ({ label, id, children }) => {
  const selected = useWhatsNewFilter();
  const productsInMonth = useMemo(() => collectProducts(children), [children]);

  if (selected !== 'all' && !productsInMonth.includes(selected)) {
    return null;
  }

  return (
    <section className={styles.month}>
      {/* The heading sits alone in its own box so the theme's "indent everything
          after a month heading" rule for changelog pages has no siblings to hit. */}
      <div className={styles.monthHeader}>
        <Heading as="h2" id={id ?? slugify(label)} className={styles.monthTitle}>
          {label}
        </Heading>
      </div>
      {children}
    </section>
  );
};

WhatsNewMonth.displayName = 'WhatsNewMonth';
