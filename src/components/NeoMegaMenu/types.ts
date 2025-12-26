/**
 * Represents a product documentation item in the mega menu
 */
export interface ProductItem {
  name: string;
  href: string;
  icon: string;
  description: string;
}

/**
 * Represents a learning resource link in the mega menu
 */
export interface LearningItem {
  name: string;
  href: string;
  external?: boolean;
}

/**
 * Represents a footer link in the mega menu
 */
export interface FooterLink {
  name: string;
  href: string;
  external?: boolean;
}

/**
 * Props for the NeoMegaMenu component
 */
export interface NeoMegaMenuProps {
  /** Whether the mega menu is currently open */
  isOpen: boolean;
  /** Callback to close the mega menu */
  onClose: () => void;
}

/**
 * Props for MegaMenu section components
 */
export interface SectionProps {
  /** Callback to close the mega menu */
  onClose: () => void;
}
