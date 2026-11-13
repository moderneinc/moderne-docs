import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import { ArrowRight, TriangleAlert } from 'lucide-react';
import type { FunctionComponent, ReactNode } from 'react';
import { useWhatsNewFilter } from './filter';
import { products, type WhatsNewProduct } from './products';
import { slugify } from './slugify';
import styles from './WhatsNew.module.css';

export type WhatsNewLink = {
  /** Link text, e.g. "Full release notes" */
  label: string;
  /** Site route or external URL */
  to: string;
};

export type WhatsNewEntryProps = {
  /** Which product the update belongs to; sets the icon and label */
  product: WhatsNewProduct;
  /** What kind of update this is, e.g. "Feature", "Release · v4.12.8", "Notice" */
  kind: string;
  /** Entry title */
  title: string;
  /** Anchor id for the title; defaults to a slug of the title */
  id?: string;
  /** Badge under the kind for notices that need action, e.g. "Action required" */
  badge?: string;
  /** Links shown as a row at the end of the entry */
  links?: WhatsNewLink[];
  /** Markdown body: paragraphs, bullet lists, and WhatsNewFigure elements */
  children?: ReactNode;
};

/**
 * One update in the What's new feed: a product column on the left and the
 * title, body, and links on the right, separated from its neighbors by a rule.
 */
export const WhatsNewEntry: FunctionComponent<WhatsNewEntryProps> = ({
  product,
  kind,
  title,
  id,
  badge,
  links,
  children,
}) => {
  const selected = useWhatsNewFilter();

  if (selected !== 'all' && selected !== product) {
    return null;
  }

  const { label, Icon } = products[product];

  return (
    <article className={styles.entry}>
      <div className={styles.aside}>
        <span className={styles.product}>
          <span className={styles.icon}>
            <Icon />
          </span>
          {label}
        </span>
        <span className={styles.kind}>{kind}</span>
        {badge && (
          <span className={styles.badgeRow}>
            <span className={styles.badge}>
              <TriangleAlert size={13} strokeWidth={2.4} aria-hidden="true" />
              {badge}
            </span>
          </span>
        )}
      </div>
      <div className={styles.main}>
        <Heading as="h3" id={id ?? slugify(title)} className={styles.title}>
          {title}
        </Heading>
        {children && <div className={styles.body}>{children}</div>}
        {links && links.length > 0 && (
          <div className={styles.links}>
            {links.map((link) => (
              <Link key={link.to} to={link.to} className={styles.link}>
                {link.label}
                <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

WhatsNewEntry.displayName = 'WhatsNewEntry';
