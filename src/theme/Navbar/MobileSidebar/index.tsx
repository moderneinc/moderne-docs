/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Swizzled to provide two-level mobile navigation:
 * - L1: Main menu (MobileMegaMenuContent) - shows products/sections
 * - L2: Doc sidebar with "Back to main menu" button
 */
import React, { type ReactNode, useState, useEffect } from 'react';
import {
  useLockBodyScroll,
  useNavbarMobileSidebar,
  useNavbarSecondaryMenu,
} from '@docusaurus/theme-common/internal';
import { useLocation } from '@docusaurus/router';
import { translate } from '@docusaurus/Translate';
import { ArrowLeft } from 'lucide-react';
import NavbarMobileSidebarHeader from '@theme/Navbar/MobileSidebar/Header';
import MobileMegaMenuContent from './MegaMenuContent';
import styles from './styles.module.css';

/**
 * Back button to return to main menu (L1)
 */
function BackToMainMenuButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      className={styles.backButton}
      onClick={onClick}
    >
      <ArrowLeft size={16} />
      <span>
        {translate({
          id: 'theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel',
          message: 'Back to main menu',
          description: 'The label of the back button to return to main menu',
        })}
      </span>
    </button>
  );
}

export default function NavbarMobileSidebar(): ReactNode {
  const mobileSidebar = useNavbarMobileSidebar();
  const secondaryMenu = useNavbarSecondaryMenu();
  const location = useLocation();
  useLockBodyScroll(mobileSidebar.shown);

  // Track whether to show main menu (L1) or doc sidebar (L2)
  // Start with main menu when opening from homepage, doc sidebar when on doc page
  const hasDocSidebar = secondaryMenu.content != null;
  const [showMainMenu, setShowMainMenu] = useState(!hasDocSidebar);

  // Reset to appropriate view when sidebar opens or location changes
  useEffect(() => {
    if (mobileSidebar.shown) {
      // When opening sidebar, show main menu on homepage, doc sidebar on doc pages
      setShowMainMenu(!hasDocSidebar);
    }
  }, [mobileSidebar.shown, hasDocSidebar]);

  // Reset when navigating to a new page
  useEffect(() => {
    setShowMainMenu(!hasDocSidebar);
  }, [location.pathname, hasDocSidebar]);

  if (!mobileSidebar.shown) {
    return null;
  }

  // Determine what content to show
  const shouldShowDocSidebar = hasDocSidebar && !showMainMenu;

  return (
    <div className="navbar-sidebar">
      <NavbarMobileSidebarHeader />
      <div className="navbar-sidebar__content">
        {shouldShowDocSidebar ? (
          <>
            <BackToMainMenuButton onClick={() => setShowMainMenu(true)} />
            {secondaryMenu.content}
          </>
        ) : (
          <MobileMegaMenuContent />
        )}
      </div>
    </div>
  );
}
