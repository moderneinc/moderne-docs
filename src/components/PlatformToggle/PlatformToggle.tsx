import { type FunctionComponent } from 'react';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import styles from './PlatformToggle.module.css';

const USER_BASE = '/user-documentation/moderne-platform';
const ADMIN_BASE = '/administrator-documentation/moderne-platform';

export const PlatformToggle: FunctionComponent = () => {
  const location = useLocation();

  const isAdmin = location.pathname.includes('/administrator-documentation/');

  return (
    <nav className={styles.toggle} aria-label="Platform documentation type">
      <Link
        to={USER_BASE}
        className={`${styles.segment} ${!isAdmin ? styles.active : ''}`}
        aria-current={!isAdmin ? 'page' : undefined}
      >
        User
      </Link>
      <Link
        to={ADMIN_BASE}
        className={`${styles.segment} ${isAdmin ? styles.active : ''}`}
        aria-current={isAdmin ? 'page' : undefined}
      >
        Admin
      </Link>
    </nav>
  );
};

PlatformToggle.displayName = 'PlatformToggle';
