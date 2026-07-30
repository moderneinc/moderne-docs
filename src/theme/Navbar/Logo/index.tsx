import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { type FunctionComponent } from 'react';
import styles from './styles.module.css';

/**
 * Navbar logo — Moderne "Documentation" lockup.
 *
 * Two pre-colored lockups (light/dark) are both rendered and toggled via
 * [data-theme] in CSS, rather than swapped in JS, so there is no logo flash on
 * hydration (Docusaurus sets data-theme before React mounts). The inactive image
 * is display:none, which also removes it from the accessibility tree; the link's
 * aria-label supplies the accessible name, so the images themselves are
 * decorative (empty alt).
 */
const LogoWrapper: FunctionComponent = () => {
  const {
    siteConfig: { baseUrl },
  } = useDocusaurusContext();
  const lightLockup = useBaseUrl('/img/moderne-docs-lockup-light.png');
  const darkLockup = useBaseUrl('/img/moderne-docs-lockup-dark.png');

  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <Link to={baseUrl} className={styles.logoLink} aria-label="Moderne Documentation">
          <img src={lightLockup} alt="" className={`${styles.lockup} ${styles.lockupLight}`} />
          <img src={darkLockup} alt="" className={`${styles.lockup} ${styles.lockupDark}`} />
        </Link>
      </div>
    </div>
  );
};

LogoWrapper.displayName = 'LogoWrapper';

export default LogoWrapper;
