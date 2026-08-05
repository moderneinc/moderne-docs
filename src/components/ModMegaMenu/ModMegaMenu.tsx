import React, { useEffect, useCallback, FunctionComponent } from 'react';
import ProductDocsSection from './ProductDocsSection';
import ForBusinessSection from './ForBusinessSection';
import LearningSection from './LearningSection';
import ModMegaMenuFooter from './ModMegaMenuFooter';
import type { ModMegaMenuProps } from './types';
import styles from './ModMegaMenu.module.css';

/**
 * ModMegaMenu - Dropdown navigation menu
 *
 * Displays a two-column mega menu with:
 * - Left: Product documentation links with icons and descriptions
 * - Right: Learning resources and external links
 * - Footer: Quick links to Moderne website, app, and OpenRewrite docs
 *
 * Features:
 * - Click-outside-to-close behavior
 * - Keyboard navigation (Escape to close)
 * - Responsive layout (single column on mobile, two columns on desktop)
 *
 * @param props.isOpen - Whether the mega menu is currently visible
 * @param props.onClose - Callback to close the mega menu
 */
const ModMegaMenu: FunctionComponent<ModMegaMenuProps> = ({ isOpen, onClose }) => {
  // Memoize the Escape key handler to prevent recreation on every render
  const handleEscapeKey = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  // Handle Escape key to close menu
  useEffect(() => {
    if (!isOpen) return;

    // Add event listener when menu opens
    document.addEventListener('keydown', handleEscapeKey);

    // Cleanup: remove event listener when menu closes or component unmounts
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, handleEscapeKey]);

  // Don't render if menu is closed
  if (!isOpen) return null;

  const menuContent = (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.menu} onClick={(e) => e.stopPropagation()}>
        <div className={styles.content}>
          <ProductDocsSection onClose={onClose} />
          <div className={styles.rightColumn}>
            <ForBusinessSection onClose={onClose} />
            <LearningSection onClose={onClose} />
          </div>
        </div>
        <ModMegaMenuFooter onClose={onClose} />
      </div>
    </>
  );

  // Render menu content directly (not using portal)
  // The parent container has position: relative which provides the positioning context
  return menuContent;
};

ModMegaMenu.displayName = 'ModMegaMenu';

export { ModMegaMenu };
