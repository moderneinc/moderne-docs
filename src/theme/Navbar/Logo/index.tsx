import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ModerneWordmark from '@site/static/img/moderne-wordmark-w-symbol.svg';
import { type FunctionComponent } from 'react';
import styles from './styles.module.css';

const LogoWrapper: FunctionComponent = () => {
  const {
    siteConfig: {baseUrl},
  } = useDocusaurusContext();

  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <Link to={baseUrl} className={styles.logoLink} aria-label="Moderne Documentation">
          <ModerneWordmark className={styles.wordmarkImage} />
          <span className={styles.docsLabel}>Docs</span>
        </Link>
      </div>
    </div>
  );
};

LogoWrapper.displayName = 'LogoWrapper';

export default LogoWrapper;
