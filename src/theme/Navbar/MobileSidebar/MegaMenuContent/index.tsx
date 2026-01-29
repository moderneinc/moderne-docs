/**
 * MobileMegaMenuContent - Tree-style mega menu for mobile sidebar (L1)
 *
 * Shows a list of products and sections with chevrons that navigate
 * to the corresponding doc pages. Footer links are shown at the bottom.
 */
import React, { FunctionComponent } from 'react';
import Link from '@docusaurus/Link';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import { ChevronRight, ExternalLink } from 'lucide-react';
import {
  products,
  trainingItems,
  releasesItems,
  footerLinks,
} from '@site/src/config/megaMenuData';
import styles from './styles.module.css';

/**
 * Menu item data structure
 */
interface MenuItem {
  name: string;
  href: string;
  external?: boolean;
}

/**
 * Single menu item row with optional chevron
 */
const MenuItemRow: FunctionComponent<{
  item: MenuItem;
  onClick: () => void;
  showChevron?: boolean;
}> = ({ item, onClick, showChevron = true }) => {
  if (item.external) {
    return (
      <a
        href={item.href}
        className={styles.menuItem}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.menuItemLabel}>{item.name}</span>
        <ExternalLink size={16} className={styles.externalIcon} />
      </a>
    );
  }

  return (
    <Link
      to={item.href}
      className={styles.menuItem}
      onClick={onClick}
    >
      <span className={styles.menuItemLabel}>{item.name}</span>
      {showChevron && <ChevronRight size={20} className={styles.chevronIcon} />}
    </Link>
  );
};

MenuItemRow.displayName = 'MenuItemRow';

const MobileMegaMenuContent: FunctionComponent = () => {
  const mobileSidebar = useNavbarMobileSidebar();

  const handleLinkClick = () => {
    mobileSidebar.toggle();
  };

  // Build menu items from products
  const productItems: MenuItem[] = products.map((product) => ({
    name: product.name,
    href: product.href,
  }));

  // Add Training as a menu item (links to first training item)
  const trainingMenuItem: MenuItem = {
    name: 'Training',
    href: trainingItems[0]?.href || '/hands-on-learning',
  };

  // Add Releases as a menu item (links to first releases item)
  const releasesMenuItem: MenuItem = {
    name: 'Releases',
    href: releasesItems[0]?.href || '/releases/agent-releases',
  };

  return (
    <div className={styles.container}>
      {/* Main menu items */}
      <nav className={styles.menuList}>
        {productItems.map((item) => (
          <MenuItemRow
            key={item.name}
            item={item}
            onClick={handleLinkClick}
          />
        ))}
        <MenuItemRow
          item={trainingMenuItem}
          onClick={handleLinkClick}
        />
        <MenuItemRow
          item={releasesMenuItem}
          onClick={handleLinkClick}
        />
      </nav>

      {/* Footer links */}
      <div className={styles.footerSection}>
        {footerLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={styles.footerLink}
            onClick={handleLinkClick}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
            {link.external && <ExternalLink size={12} className={styles.footerExternalIcon} />}
          </a>
        ))}
      </div>
    </div>
  );
};

MobileMegaMenuContent.displayName = 'MobileMegaMenuContent';

export default MobileMegaMenuContent;
