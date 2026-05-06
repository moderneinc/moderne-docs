import React from 'react';
import styles from './styles.module.css';

interface VersionBannerProps {
  version: 'v1' | 'v2';
  linkPath: string;
}

export default function VersionBanner({ version, linkPath }: VersionBannerProps): React.ReactElement {
  if (version === 'v2') {
    return (
      <div className={styles.banner}>
        <strong>SaaS v2 documentation.</strong>{' '}
        Looking for the legacy version? See the <a className={styles.bannerLink} href={linkPath}>SaaS v1 docs</a>.
      </div>
    );
  }

  return (
    <div className={styles.banner}>
      <strong>SaaS v1 documentation.</strong>{' '}
      This is a legacy version. See the <a className={styles.bannerLink} href={linkPath}>latest SaaS v2 docs</a>.
    </div>
  );
}
