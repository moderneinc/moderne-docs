import useBaseUrl from '@docusaurus/useBaseUrl';
import type { FunctionComponent } from 'react';
import styles from './WhatsNew.module.css';

export type WhatsNewFigureProps = {
  /** Site path of the screenshot, e.g. /img/whats-new/activity-view.png */
  src: string;
  /** What the screenshot shows, for readers who can't see it */
  alt: string;
  /** Short caption under the screenshot */
  caption?: string;
};

/** A screenshot with a caption, placed anywhere in an entry's body. */
export const WhatsNewFigure: FunctionComponent<WhatsNewFigureProps> = ({ src, alt, caption }) => (
  <figure className={styles.figure}>
    <img className={styles.image} src={useBaseUrl(src)} alt={alt} loading="lazy" />
    {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
  </figure>
);

WhatsNewFigure.displayName = 'WhatsNewFigure';
