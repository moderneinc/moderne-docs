import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import ProductDocsSection from './ProductDocsSection';
import ForBusinessSection from './ForBusinessSection';
import LearningSection from './LearningSection';
import MegaMenuFooter from './MegaMenuFooter';
import type { MegaMenuProps } from './types';
import styles from './MegaMenu.module.css';

/**
 * MegaMenu - Dropdown navigation menu
 *
 * Displays a two-column mega menu with:
 * - Left: Product documentation links with icons and descriptions
 * - Right: Learning resources and external links
 * - Footer: Quick links to Moderne website, app, and OpenRewrite docs
 *
 * Features:
 * - Click-outside-to-close behavior
 * - Keyboard navigation (Escape to close)
 *
 * TODO: Implement in subsequent tasks
 * - Animations
 * - Mobile responsive behavior
 *
 * @param props.isOpen - Whether the mega menu is currently visible
 * @param props.onClose - Callback to close the mega menu
 */
export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
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
        <MegaMenuFooter onClose={onClose} />
      </div>
    </>
  );

  // Render overlay using portal to ensure it's at document root level
  // This fixes the click-away listener by ensuring the overlay isn't affected by parent positioning
  return createPortal(menuContent, document.body);
}
