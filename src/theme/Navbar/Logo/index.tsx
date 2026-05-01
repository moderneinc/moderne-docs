import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ModerneDocsLogo from '@site/static/img/moderne-docs-logo.svg';
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
          <ModerneDocsLogo className={styles.wordmarkImage} />
        </Link>
      </div>
    </div>
  );
};

LogoWrapper.displayName = 'LogoWrapper';

export default LogoWrapper;
