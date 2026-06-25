import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import type { ProductItem } from '@site/src/components/NeoMegaMenu/types';
import type { NavLink } from '@site/src/config/megaMenuData';
import clsx from 'clsx';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { type FunctionComponent, useCallback, useEffect, useRef, useState } from 'react';
import styles from './SecondaryNav.module.css';

export type SecondaryNavProps = {
  /** Product items to display as links */
  products: ProductItem[];
  /** Items for the "Training" dropdown */
  trainingItems: NavLink[];
  /** Items for the "Releases" dropdown */
  releasesItems: NavLink[];
};

type DropdownState = 'training' | 'releases' | null;

/**
 * Secondary navigation bar displayed below the primary navbar on desktop.
 * Shows product links, a "Training" dropdown, and a "Releases" dropdown.
 * Hidden on mobile where the MegaMenu handles navigation.
 */
export const SecondaryNav: FunctionComponent<SecondaryNavProps> = ({
  products,
  trainingItems,
  releasesItems,
}) => {
  const [openDropdown, setOpenDropdown] = useState<DropdownState>(null);
  const trainingRef = useRef<HTMLDivElement>(null);
  const releasesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isProductActive = (productHref: string) => {
    // Case-insensitive: some category slugs differ in case from their doc routes — e.g. the DX
    // section slug is `/administrator-documentation/moderne-DX` but its pages live under
    // `…/moderne-dx/…`, so a case-sensitive match would never highlight DX.
    return location.pathname.toLowerCase().startsWith(productHref.toLowerCase());
  };

  const isDropdownItemActive = (itemHref: string) => {
    // Don't mark external links as active
    if (itemHref.startsWith('http')) {
      return false;
    }
    return location.pathname.startsWith(itemHref);
  };

  // A dropdown (Training / Releases) is active when the current page lives under one of its items.
  const isDropdownActive = (items: NavLink[]) => items.some((item) => isDropdownItemActive(item.href));

  const toggleDropdown = useCallback((dropdown: 'training' | 'releases') => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  }, []);

  const closeDropdowns = useCallback(() => {
    setOpenDropdown(null);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const isOutsideTraining = trainingRef.current && !trainingRef.current.contains(target);
      const isOutsideReleases = releasesRef.current && !releasesRef.current.contains(target);

      if (isOutsideTraining && isOutsideReleases) {
        closeDropdowns();
      }
    };

    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown, closeDropdowns]);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeDropdowns();
      }
    };

    if (openDropdown) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [openDropdown, closeDropdowns]);

  return (
    <nav className={styles.secondaryNav} aria-label="Product navigation">
      <div className={styles.leftSection}>
        <div className={styles.productLinks}>
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className={clsx(styles.productLink, {
                [styles.productLinkActive]: isProductActive(product.href),
              })}
              aria-current={isProductActive(product.href) ? 'page' : undefined}
            >
              {product.name}
            </Link>
          ))}
        </div>
        <div className={styles.dropdownWrapper} ref={trainingRef}>
          <button
            className={clsx(styles.dropdownButton, {
              [styles.dropdownButtonOpen]: openDropdown === 'training',
              [styles.dropdownButtonActive]: isDropdownActive(trainingItems),
            })}
            onClick={() => toggleDropdown('training')}
            aria-expanded={openDropdown === 'training'}
            aria-haspopup="true"
          >
            Training
            <ChevronDown
              size={16}
              className={clsx(styles.chevron, {
                [styles.chevronOpen]: openDropdown === 'training',
              })}
            />
          </button>
          {openDropdown === 'training' && (
            <div className={styles.dropdown} role="menu">
              {trainingItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(styles.dropdownLink, {
                    [styles.dropdownLinkActive]: isDropdownItemActive(item.href),
                  })}
                  role="menuitem"
                  onClick={closeDropdowns}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  aria-current={isDropdownItemActive(item.href) ? 'page' : undefined}
                >
                  {item.name}
                  {item.external && <ExternalLink size={12} className={styles.externalIcon} />}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.dropdownWrapper} ref={releasesRef}>
          <button
            className={clsx(styles.dropdownButton, {
              [styles.dropdownButtonOpen]: openDropdown === 'releases',
              [styles.dropdownButtonActive]: isDropdownActive(releasesItems),
            })}
            onClick={() => toggleDropdown('releases')}
            aria-expanded={openDropdown === 'releases'}
            aria-haspopup="true"
          >
            Releases
            <ChevronDown
              size={16}
              className={clsx(styles.chevron, {
                [styles.chevronOpen]: openDropdown === 'releases',
              })}
            />
          </button>
          {openDropdown === 'releases' && (
            <div className={clsx(styles.dropdown, styles.dropdownRight)} role="menu">
              {releasesItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(styles.dropdownLink, {
                    [styles.dropdownLinkActive]: isDropdownItemActive(item.href),
                  })}
                  role="menuitem"
                  onClick={closeDropdowns}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  aria-current={isDropdownItemActive(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

SecondaryNav.displayName = 'SecondaryNav';
