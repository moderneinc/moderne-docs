/**
 * Ejected from @docusaurus/theme-classic to remove React.memo caching
 * This ensures the sidebar re-renders when navigating between sections
 */
import React, {FunctionComponent} from 'react';
import clsx from 'clsx';
import {useThemeConfig} from '@docusaurus/theme-common';
import Logo from '@theme/Logo';
import CollapseButton from '@theme/DocSidebar/Desktop/CollapseButton';
import Content from '@theme/DocSidebar/Desktop/Content';
import styles from './styles.module.css';

type Props = {
  path: string;
  sidebar: any[];
  onCollapse: () => void;
  isHidden: boolean;
};

const DocSidebarDesktop: FunctionComponent<Props> = ({path, sidebar, onCollapse, isHidden}) => {
  const {
    navbar: {hideOnScroll},
    docs: {
      sidebar: {hideable},
    },
  } = useThemeConfig();

  return (
    <div
      className={clsx(
        styles.sidebar,
        hideOnScroll && styles.sidebarWithHideableNavbar,
        isHidden && styles.sidebarHidden,
      )}>
      {hideOnScroll && <Logo tabIndex={-1} className={styles.sidebarLogo} />}
      <Content path={path} sidebar={sidebar} />
      {hideable && <CollapseButton onClick={onCollapse} />}
    </div>
  );
};

DocSidebarDesktop.displayName = 'DocSidebarDesktop';

// IMPORTANT: Do NOT wrap with React.memo - we need to re-render on navigation
export default DocSidebarDesktop;
