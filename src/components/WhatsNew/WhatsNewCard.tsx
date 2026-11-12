import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import { ArrowRight, TriangleAlert } from 'lucide-react';
import type { FunctionComponent, ReactNode } from 'react';
import { products, type WhatsNewProduct } from './products';
import { slugify } from './slugify';
import styles from './WhatsNew.module.css';

export type WhatsNewLink = {
  /** Link text, e.g. "Activity view documentation" */
  label: string;
  /** Site route or external URL */
  to: string;
};

export type WhatsNewCardProps = {
  /** Which product the update belongs to; sets the icon, label, and color */
  product: WhatsNewProduct;
  /** What kind of update this is, e.g. "Feature", "Release · v4.12.8", "Notice" */
  kind: string;
  /** Card title */
  title: string;
  /** Anchor id for the title; defaults to a slug of the title */
  id?: string;
  /** Warning tone tints the card for notices that need action */
  tone?: 'default' | 'warning';
  /** Short pill shown at the right of the header, e.g. "Action required", "Preview" */
  badge?: string;
  /** Site path of a screenshot, e.g. /img/whats-new/activity-view.png */
  image?: string;
  /** Alt text for the screenshot; required when image is set */
  imageAlt?: string;
  /** Links shown as a row at the bottom of the card */
  links?: WhatsNewLink[];
  /** Markdown body: paragraphs and bullet lists */
  children?: ReactNode;
};

/**
 * One update in the What's new feed: a product header, title, markdown body,
 * optional screenshot, and a row of arrow links.
 */
export const WhatsNewCard: FunctionComponent<WhatsNewCardProps> = ({
  product,
  kind,
  title,
  id,
  tone = 'default',
  badge,
  image,
  imageAlt,
  links,
  children,
}) => {
  const meta = products[product];
  const imageSrc = useBaseUrl(image ?? '');
  const isWarning = tone === 'warning';

  return (
    <article className={clsx(styles.card, { [styles.cardWarning]: isWarning })}>
      <div className={clsx(styles.header, meta.className)}>
        <span className={styles.icon}>
          <meta.Icon />
        </span>
        <div className={styles.meta}>
          <span className={styles.product}>{meta.label}</span>
          <span className={styles.kind}>{kind}</span>
        </div>
        {badge && (
          <span className={clsx(styles.badge, { [styles.badgeWarning]: isWarning })}>
            {isWarning && <TriangleAlert size={13} strokeWidth={2.4} aria-hidden="true" />}
            {badge}
          </span>
        )}
      </div>
      <Heading as="h3" id={id ?? slugify(title)} className={styles.cardTitle}>
        {title}
      </Heading>
      {children && <div className={styles.body}>{children}</div>}
      {image && <img className={styles.image} src={imageSrc} alt={imageAlt ?? ''} loading="lazy" />}
      {links && links.length > 0 && (
        <div className={styles.links}>
          {links.map((link) => (
            <Link key={link.to} to={link.to} className={styles.link}>
              {link.label}
              <ArrowRight size={14} strokeWidth={2.2} aria-hidden="true" />
            </Link>
          ))}
        </div>
      )}
    </article>
  );
};

WhatsNewCard.displayName = 'WhatsNewCard';
