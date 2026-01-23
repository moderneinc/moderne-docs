/**
 * Represents a product documentation item in the mega menu
 */
export type ProductItem = {
  name: string;
  href: string;
  icon: string;
  description: string;
  homepageHref?: string;
};

/**
 * Represents a learning resource link in the mega menu
 */
export type LearningItem = {
  name: string;
  href: string;
  external?: boolean;
};

/**
 * Represents a footer link in the mega menu
 */
export type FooterLink = {
  name: string;
  href: string;
  external?: boolean;
};

/**
 * Props for the NeoMegaMenu component
 */
export type NeoMegaMenuProps = {
  /** Whether the mega menu is currently open */
  isOpen: boolean;
  /** Callback to close the mega menu */
  onClose: () => void;
};

/**
 * Props for MegaMenu section components
 */
export type SectionProps = {
  /** Callback to close the mega menu */
  onClose: () => void;
};
