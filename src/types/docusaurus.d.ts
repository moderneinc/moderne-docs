/**
 * TypeScript type extensions for Docusaurus
 *
 * This file extends Docusaurus types to add custom properties
 * used throughout the documentation site.
 */

/**
 * Available gem icon colors for DocCards
 */
export type GemIconColor = 'blue' | 'gray' | 'green' | 'orange' | 'pink' | 'red' | 'yellow';

/**
 * Extend Docusaurus sidebar item types to include custom properties
 */
declare module '@docusaurus/plugin-content-docs' {
  export interface SidebarItemConfig {
    /**
     * Custom properties for sidebar items
     * These properties are passed to components like DocCard
     */
    customProps?: {
      /**
       * Gem icon color to display on DocCards
       * @see /docs/__internal__/card-gem-icons.md for usage documentation
       */
      gemIcon?: GemIconColor;
    };
  }
}
