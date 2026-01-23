import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { NeoMegaMenu } from '@site/src/components/NeoMegaMenu';
import ModerneWordmark from '@site/static/img/moderne-wordmark-w-symbol.svg';
import { ChevronDown } from 'lucide-react';
import { type FunctionComponent, useState } from 'react';
import styles from './styles.module.css';

const LogoWrapper: FunctionComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    siteConfig: {baseUrl},
  } = useDocusaurusContext();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <Link to={baseUrl} className={styles.logoLink} aria-label="Moderne Documentation">
          <ModerneWordmark className={styles.wordmarkImage} />
          <span className={styles.docsLabel}>Docs</span>
        </Link>
        <button
          className={styles.docsButton}
          onClick={toggleMenu}
          aria-label="Toggle documentation menu"
          aria-expanded={isMenuOpen}
        >
          <span className={styles.docsText}>Docs</span>
          <ChevronDown
            className={`${styles.chevron} ${isMenuOpen ? styles.chevronOpen : ''}`}
            size={24}
          />
        </button>
      </div>
      <NeoMegaMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </div>
  );
};

LogoWrapper.displayName = 'LogoWrapper';

export default LogoWrapper;
