import Heading from '@theme/Heading';
import type { FunctionComponent, ReactNode } from 'react';
import { slugify } from './slugify';
import styles from './WhatsNew.module.css';

export type WhatsNewMonthProps = {
  /** Month label, e.g. "November 2026" */
  label: string;
  /** Anchor id; defaults to a slug of the label, e.g. november-2026 */
  id?: string;
  /** The month's WhatsNewCard elements */
  children?: ReactNode;
};

/**
 * A month section in the What's new feed: a small label with a rule beside
 * it, followed by that month's cards.
 */
export const WhatsNewMonth: FunctionComponent<WhatsNewMonthProps> = ({ label, id, children }) => (
  <section className={styles.month}>
    <div className={styles.monthHeader}>
      <Heading as="h2" id={id ?? slugify(label)} className={styles.monthTitle}>
        {label}
      </Heading>
    </div>
    <div className={styles.cards}>{children}</div>
  </section>
);

WhatsNewMonth.displayName = 'WhatsNewMonth';
