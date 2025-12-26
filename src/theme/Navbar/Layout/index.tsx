/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * EJECTED from @docusaurus/theme-classic to apply module CSS styles.
 * Changes from original:
 * - Added className parameter to function signature for module CSS styling
 * - Applied styles.navbar from module CSS for frosted glass effect
 * - Removed mobile sidebar components (disabled in our implementation)
 */
import {type FunctionComponent} from 'react';
import clsx from 'clsx';
import {ThemeClassNames, useThemeConfig} from '@docusaurus/theme-common';
import {useHideableNavbar} from '@docusaurus/theme-common/internal';
import {translate} from '@docusaurus/Translate';
import type {Props} from '@theme/Navbar/Layout';
import styles from './styles.module.css';

export interface NavbarLayoutProps extends Props {
  readonly className?: string;
}

const NavbarLayout: FunctionComponent<NavbarLayoutProps> = ({
  children,
  className,
}) => {
  const {
    navbar: {hideOnScroll, style},
  } = useThemeConfig();
  const {navbarRef, isNavbarVisible} = useHideableNavbar(hideOnScroll);

  return (
    <nav
      ref={navbarRef}
      aria-label={translate({
        id: 'theme.NavBar.navAriaLabel',
        message: 'Main',
        description: 'The ARIA label for the main navigation',
      })}
      className={clsx(
        styles.navbar,
        ThemeClassNames.layout.navbar.container,
        'navbar',
        'navbar--fixed-top',
        hideOnScroll && [
          styles.navbarHideable,
          !isNavbarVisible && styles.navbarHidden,
        ],
        {
          'navbar--dark': style === 'dark',
          'navbar--primary': style === 'primary',
        },
        className,
      )}>
      {children}
    </nav>
  );
};

NavbarLayout.displayName = 'NavbarLayout';

export default NavbarLayout;
