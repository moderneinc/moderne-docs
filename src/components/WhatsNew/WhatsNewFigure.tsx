import useBaseUrl from '@docusaurus/useBaseUrl';
import useIsBrowser from '@docusaurus/useIsBrowser';
import clsx from 'clsx';
import { type FunctionComponent, useEffect, useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
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

type Theme = 'light' | 'dark';

/**
 * The theme the page is currently showing, read from the html element's
 * data-theme attribute. Undefined until the component has mounted, so the
 * first client render matches the server's.
 */
function useDocumentTheme(): Theme | undefined {
  const isBrowser = useIsBrowser();
  const [theme, setTheme] = useState<Theme | undefined>(undefined);

  useEffect(() => {
    if (!isBrowser) {
      return undefined;
    }
    const root = document.documentElement;
    const read = () => setTheme(root.dataset.theme === 'dark' ? 'dark' : 'light');
    read();
    const observer = new MutationObserver(read);
    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, [isBrowser]);

  return theme;
}

/**
 * A screenshot with a caption, placed anywhere in an entry's body. Click the
 * image to see it at full size. With a dark capture, the one matching the
 * reader's theme is shown.
 */
export const WhatsNewFigure: FunctionComponent<WhatsNewFigureProps> = ({ src, srcDark, alt, caption }) => {
  const lightSrc = useBaseUrl(src);
  const darkSrc = useBaseUrl(srcDark ?? src);
  const theme = useDocumentTheme();

  let image;
  if (theme === undefined) {
    // Before mount, render each capture with its own theme class so CSS picks
    // the right one. This matches the server output, so hydration is clean.
    image = (
      <>
        <img className={clsx(styles.image, styles.imageLight)} src={lightSrc} alt={alt} loading="lazy" />
        {srcDark && <img className={clsx(styles.image, styles.imageDark)} src={darkSrc} alt={alt} loading="lazy" />}
      </>
    );
  } else {
    image = (
      <Zoom>
        <img className={styles.image} src={theme === 'dark' ? darkSrc : lightSrc} alt={alt} loading="lazy" />
      </Zoom>
    );
  }

  return (
    <figure className={styles.figure}>
      {image}
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
};

WhatsNewFigure.displayName = 'WhatsNewFigure';
