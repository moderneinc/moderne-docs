/**
 * Shared persona switcher configuration
 *
 * This configuration is used by:
 * - sidebars.ts: To add personaSwitcher metadata to sidebar categories
 * - Navbar/Content/index.tsx: To render persona switcher in navbar
 *
 * Centralizing this configuration ensures consistency and reduces maintenance burden.
 */

export interface PersonaAlternate {
  label: string;
  path: string;
  sidebarCategory: string;
}

export interface PersonaConfig {
  current: string;
  currentLabel: string;
  alternates: PersonaAlternate[];
}

/**
 * Persona switcher configurations mapped by base path
 *
 * The keys in this record are base paths that must match exactly with the
 * documented section paths. When checking if a path matches, ensure you're
 * checking for exact matches or proper path boundaries (next character is '/').
 */
export const PERSONA_CONFIGS: Record<string, PersonaConfig> = {
  '/user-documentation/moderne-platform': {
    current: 'practitioner',
    currentLabel: 'Practitioner',
    alternates: [
      {
        label: 'Admin',
        path: '/administrator-documentation/moderne-platform',
        sidebarCategory: 'platform.admin'
      }
    ]
  },
  '/administrator-documentation/moderne-platform': {
    current: 'admin',
    currentLabel: 'Admin',
    alternates: [
      {
        label: 'Practitioner',
        path: '/user-documentation/moderne-platform',
        sidebarCategory: 'platform.practitioner'
      }
    ]
  }
};
