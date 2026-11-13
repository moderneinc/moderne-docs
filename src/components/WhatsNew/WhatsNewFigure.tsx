import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import type { FunctionComponent } from 'react';
import styles from './WhatsNew.module.css';

export type WhatsNewFigureProps = {
  /** Site path of the screenshot, e.g. /img/whats-new/activity-view.png */
  src: string;
  /** Site path of a dark-mode capture of the same screen, shown in dark mode when set */
  srcDark?: string;
  /** What the screenshot shows, for readers who can't see it */
  alt: string;
  /** Short caption under the screenshot */
  caption?: string;
};

/** A screenshot with a caption, placed anywhere in an entry's body. */
export const WhatsNewFigure: FunctionComponent<WhatsNewFigureProps> = ({ src, srcDark, alt, caption }) => {
  const lightSrc = useBaseUrl(src);
  const darkSrc = useBaseUrl(srcDark ?? src);

  return (
    <figure className={styles.figure}>
      {srcDark ? (
        <ThemedImage className={styles.image} sources={{ light: lightSrc, dark: darkSrc }} alt={alt} loading="lazy" />
      ) : (
        <img className={styles.image} src={lightSrc} alt={alt} loading="lazy" />
      )}
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
};

WhatsNewFigure.displayName = 'WhatsNewFigure';
