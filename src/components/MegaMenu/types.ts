/**
 * Type definitions for MegaMenu component
 */

/**
 * Represents a product documentation item in the mega menu
 */
export interface ProductItem {
  /** Display name of the product */
  name: string;
  /** Navigation URL/route */
  href: string;
  /** Path to the product icon (gem) */
  icon: string;
  /** Short description of the product */
  description: string;
}

/**
 * Represents a learning resource link in the mega menu
 */
export interface LearningItem {
  /** Display name of the learning resource */
  name: string;
  /** Navigation URL/route */
  href: string;
  /** Whether the link opens in a new tab (external) */
  external?: boolean;
}

/**
 * Represents a footer link in the mega menu
 */
export interface FooterLink {
  /** Display name of the footer link */
  name: string;
  /** Navigation URL/route */
  href: string;
  /** Whether the link opens in a new tab (external) */
  external?: boolean;
}

/**
 * Props for the MegaMenu component
 */
export interface MegaMenuProps {
  /** Whether the mega menu is currently open */
  isOpen: boolean;
  /** Callback to close the mega menu */
  onClose: () => void;
}
