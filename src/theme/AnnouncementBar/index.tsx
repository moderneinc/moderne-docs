import {type FunctionComponent} from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useAnnouncementBar} from '@docusaurus/theme-common/internal';
import AnnouncementBarCloseButton from '@theme/AnnouncementBar/CloseButton';
import AnnouncementBarContent from '@theme/AnnouncementBar/Content';

import styles from './styles.module.css';

/**
 * Renders nothing in the default Layout position.
 * The announcement bar is rendered inside the fixed NavbarLayout wrapper instead,
 * so it scrolls together with the navbar.
 */
const AnnouncementBar: FunctionComponent = () => {
  return null;
};

/**
 * Internal implementation used by NavbarLayout to render the announcement bar
 * inside the fixed navbar wrapper.
 */
export const AnnouncementBarInline: FunctionComponent = () => {
  const {announcementBar} = useThemeConfig();
  const {isActive, close} = useAnnouncementBar();
  if (!isActive) {
    return null;
  }
  const {isCloseable} = announcementBar!;
  return (
    <div
      className={styles.announcementBar}
      role="banner">
      {isCloseable && <div className={styles.announcementBarPlaceholder} />}
      <AnnouncementBarContent className={styles.announcementBarContent} />
      {isCloseable && (
        <AnnouncementBarCloseButton
          onClick={close}
          className={styles.announcementBarClose}
        />
      )}
    </div>
  );
};

AnnouncementBar.displayName = 'AnnouncementBar';

export default AnnouncementBar;
