import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {useLocation} from '@docusaurus/router';
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
import PersonaSwitcher, {type PersonaSwitcherMetadata} from '@site/src/components/PersonaSwitcher';
import {PERSONA_CONFIGS} from '@site/src/config/personaConfig';
import styles from './styles.module.css';

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

function NavbarItems({items}: {items: NavbarItemConfig[]}): ReactNode {
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
}

function NavbarContentLayout({
  left,
  right,
}: {
  left: ReactNode;
  right: ReactNode;
}) {
  return (
    <div className="navbar__inner">
      <div
        className={clsx(
          ThemeClassNames.layout.navbar.containerLeft,
          'navbar__items',
        )}>
        {left}
      </div>
      <div
        className={clsx(
          ThemeClassNames.layout.navbar.containerRight,
          'navbar__items navbar__items--right',
        )}>
        {right}
      </div>
    </div>
  );
}

/**
 * Checks if a pathname matches a base path exactly or is a sub-path
 *
 * This prevents false positives like:
 * - '/user-documentation/moderne-platform-new' matching '/user-documentation/moderne-platform'
 *
 * A match occurs when:
 * - pathname === basePath (exact match)
 * - pathname starts with basePath and the next character is '/' (proper sub-path)
 */
function isPathMatch(pathname: string, basePath: string): boolean {
  if (pathname === basePath) {
    return true;
  }
  if (pathname.startsWith(basePath)) {
    const nextChar = pathname[basePath.length];
    return nextChar === '/' || nextChar === undefined;
  }
  return false;
}

/**
 * Navbar Content with integrated persona switcher
 *
 * Detects the current documentation section based on the URL path
 * and renders a dropdown in the navbar to switch between personas (e.g., Practitioner ↔ Admin)
 *
 * The PersonaSwitcher is injected after the MegaMenu (which is in NavbarLogo)
 * and before the ColorModeToggle on the right side of the navbar.
 */
export default function NavbarContent(): ReactNode {
  const location = useLocation();
  const mobileSidebar = useNavbarMobileSidebar();

  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);

  const searchBarItem = items.find((item) => item.type === 'search');

  // Determine which persona configuration to use based on the current path
  let personaSwitcherMetadata: PersonaSwitcherMetadata | undefined;

  // Check if the current path matches any persona configuration
  // Uses proper path boundary detection to avoid false positives
  for (const [pathPrefix, config] of Object.entries(PERSONA_CONFIGS)) {
    if (isPathMatch(location.pathname, pathPrefix)) {
      personaSwitcherMetadata = config;
      break;
    }
  }

  return (
    <NavbarContentLayout
      left={
        <>
          {/* Hide mobile sidebar toggle - sidebar filtering causes issues on mobile */}
          {/* {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />} */}
          <div className={styles.logoGroup}>
            <NavbarLogo />
            {personaSwitcherMetadata && (
              <PersonaSwitcher metadata={personaSwitcherMetadata} />
            )}
          </div>
          <NavbarItems items={leftItems} />
        </>
      }
      right={
        <>
          <NavbarItems items={rightItems} />
          <NavbarColorModeToggle className={styles.colorModeToggle} />
          {!searchBarItem && (
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          )}
        </>
      }
    />
  );
}
