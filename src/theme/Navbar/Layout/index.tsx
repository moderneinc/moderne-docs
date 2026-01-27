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
 * - Added SecondaryNav component below primary navbar (desktop only)
 */
import {type FunctionComponent, type ComponentProps} from 'react';
import clsx from 'clsx';
import {ThemeClassNames, useThemeConfig} from '@docusaurus/theme-common';
import {useHideableNavbar, useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import {translate} from '@docusaurus/Translate';
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar';
import type {Props} from '@theme/Navbar/Layout';
import { SecondaryNav } from '@site/src/components/SecondaryNav';
import { products, releasesItems, trainingItems } from '@site/src/config/megaMenuData';
import styles from './styles.module.css';

function NavbarBackdrop(props: ComponentProps<'div'>) {
  return (
    <div
      role="presentation"
      {...props}
      className={clsx('navbar-sidebar__backdrop', props.className)}
    />
  );
}

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
  const mobileSidebar = useNavbarMobileSidebar();
  const {navbarRef, isNavbarVisible} = useHideableNavbar(hideOnScroll);

  return (
    <div className={styles.navbarWrapper}>
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
            'navbar-sidebar--show': mobileSidebar.shown,
          },
          className,
        )}>
        {children}
        <NavbarBackdrop onClick={mobileSidebar.toggle} />
        <NavbarMobileSidebar />
      </nav>
      <SecondaryNav products={products} trainingItems={trainingItems} releasesItems={releasesItems} />
    </div>
  );
};

NavbarLayout.displayName = 'NavbarLayout';

export default NavbarLayout;
