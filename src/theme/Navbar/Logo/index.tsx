import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import MegaMenu from '@site/src/components/MegaMenu';
import ModerneSymbol from '@site/static/img/moderne-symbol.svg';
import { ChevronDown } from 'lucide-react';
import { type ReactNode, useState } from 'react';
import styles from './styles.module.css';

export default function DocsLogo(): ReactNode {
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
          <div className={styles.logoContainer}>
            <ModerneSymbol className={styles.symbolImage} />
          </div>
          <div className={styles.wordmarkContainer}>
            <span className={styles.wordmarkText}>Moderne</span>
            <sup className={styles.registeredMark}>®</sup>
          </div>
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
      <MegaMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </div>
  );
}
