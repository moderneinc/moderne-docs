import Link from '@docusaurus/Link';
import React, {type ReactNode, FunctionComponent} from 'react';
import clsx from 'clsx';
import {
  useThemeConfig,
  ErrorCauseBoundary,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarItem, {type Props as NavbarItemConfig} from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarSearch from '@theme/Navbar/Search';
import { externalNavLinks } from '@site/src/config/megaMenuData';
import { ExternalLink } from 'lucide-react';
import styles from './styles.module.css';

/**
 * External navigation links displayed in the primary navbar (desktop only)
 */
const ExternalNavLinks: FunctionComponent = () => {
  return (
    <div className={styles.externalLinks}>
      {externalNavLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={styles.externalLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.name}
          {link.external && <ExternalLink size={12} className={styles.externalLinkIcon} />}
        </Link>
      ))}
    </div>
  );
};

ExternalNavLinks.displayName = 'ExternalNavLinks';

function useNavbarItems() {
  // NOTE: TODO below is from upstream Docusaurus theme-classic, copied during swizzling
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

interface NavbarItemsProps {
  items: NavbarItemConfig[];
}

const NavbarItems: FunctionComponent<NavbarItemsProps> = ({items}) => {
  return (
    <>
      {items.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
              {cause: error},
            )
          }>
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
};

NavbarItems.displayName = 'NavbarItems';

interface NavbarContentLayoutProps {
  left: ReactNode;
  center: ReactNode;
  right: ReactNode;
}

const NavbarContentLayout: FunctionComponent<NavbarContentLayoutProps> = ({left, center, right}) => {
  return (
    <div className={clsx("navbar__inner", styles.navbarInner)}>
      <div
        className={clsx(
          ThemeClassNames.layout.navbar.containerLeft,
          'navbar__items',
          styles.navbarLeft,
        )}>
        {left}
      </div>
      <div className={styles.navbarCenter}>
        {center}
      </div>
      <div
        className={clsx(
          ThemeClassNames.layout.navbar.containerRight,
          'navbar__items navbar__items--right',
          styles.navbarRight,
        )}>
        {right}
      </div>
    </div>
  );
};

NavbarContentLayout.displayName = 'NavbarContentLayout';

/**
 * Navbar Content
 *
 * Renders the main navbar with logo, navigation items, color mode toggle, and search.
 */
const NavbarContent: FunctionComponent = () => {
  const mobileSidebar = useNavbarMobileSidebar();

  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);

  const searchBarItem = items.find((item) => item.type === 'search');

  return (
    <NavbarContentLayout
      left={
        <>
          {/* Hide mobile sidebar toggle - sidebar filtering causes issues on mobile */}
          {/* {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />} */}
          <div className={styles.logoGroup}>
            <NavbarLogo />
          </div>
          <NavbarItems items={leftItems} />
        </>
      }
      center={
        <>
          {!searchBarItem && (
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          )}
          <NavbarColorModeToggle className={styles.colorModeToggle} />
        </>
      }
      right={
        <>
          <NavbarItems items={rightItems} />
          <ExternalNavLinks />
          {/* Mobile controls - search + theme toggle, hidden on desktop */}
          <div className={styles.mobileControls}>
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
            <NavbarColorModeToggle className={styles.colorModeToggle} />
          </div>
        </>
      }
    />
  );
};

NavbarContent.displayName = 'NavbarContent';

export default NavbarContent;
