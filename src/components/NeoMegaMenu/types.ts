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
