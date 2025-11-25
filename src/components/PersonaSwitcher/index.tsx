import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useHistory } from '@docusaurus/router';
import NeoBadge from '@site/src/components/NeoBadge';
import styles from './PersonaSwitcher.module.css';

export interface PersonaAlternate {
  label: string;
  path: string;
  sidebarCategory?: string;
}

export interface PersonaSwitcherMetadata {
  current: string;
  currentLabel: string;
  alternates: PersonaAlternate[];
}

export interface PersonaSwitcherProps {
  metadata: PersonaSwitcherMetadata;
}

/**
 * PersonaSwitcher - Dropdown navigation for switching between documentation personas
 *
 * Displays a dropdown in the navbar that allows users to switch between different
 * personas (e.g., Practitioner ↔ Admin) within product documentation.
 *
 * Features:
 * - Click-outside-to-close behavior
 * - Keyboard navigation (Escape to close, Enter to select)
 * - Visual checkmark for current persona
 * - Smooth navigation to alternate persona paths
 *
 * @param props.metadata - Persona switcher configuration from sidebar customProps
 */
export default function PersonaSwitcher({ metadata }: PersonaSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const history = useHistory();

  const toggleDropdown = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Handle click outside to close
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeDropdown]);

  // Handle Escape key to close
  useEffect(() => {
    if (!isOpen) return;

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeDropdown();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, closeDropdown]);

  const handlePersonaSelect = (alternate: PersonaAlternate) => {
    closeDropdown();
    history.push(alternate.path);
  };

  const dropdownIcon = (
    <svg
      className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 4.5L6 8L9.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className={styles.personaSwitcher} ref={dropdownRef}>
      <NeoBadge
        variant="default"
        size="medium"
        onClick={toggleDropdown}
        icon={dropdownIcon}
        iconPosition="right"
        ariaExpanded={isOpen}
        ariaHasPopup={true}
        ariaLabel={`Switch persona from ${metadata.currentLabel}`}
      >
        {metadata.currentLabel}
      </NeoBadge>

      {isOpen && (
        <div className={styles.dropdown}>
          <ul className={styles.menu} role="menu">
            <li className={styles.menuItem} role="none">
              <button
                className={`${styles.menuButton} ${styles.currentPersona}`}
                role="menuitem"
                type="button"
                disabled
              >
                <span className={styles.menuLabel}>{metadata.currentLabel}</span>
                <svg
                  className={styles.checkmark}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8L6.5 11.5L13 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
            {metadata.alternates.map((alternate) => (
              <li key={alternate.path} className={styles.menuItem} role="none">
                <button
                  className={styles.menuButton}
                  onClick={() => handlePersonaSelect(alternate)}
                  role="menuitem"
                  type="button"
                >
                  <span className={styles.menuLabel}>{alternate.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
