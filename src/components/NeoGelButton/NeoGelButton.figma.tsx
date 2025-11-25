/**
 * Figma Code Connect for NeoGelButton Component
 *
 * This file maps the Figma "Gel Button" component to the NeoGelButton React component.
 * It provides code examples that appear in Figma Dev Mode.
 *
 * Figma Component: Neo Design System 2025 - Gel Button
 * URL: https://www.figma.com/design/fQTkGSFbYyE7LiHuQJsENC/Neo---Moderne-Design-system---2025?node-id=5920-3874
 */

import figma from '@figma/code-connect';
import { NeoGelButton } from './NeoGelButton';

/**
 * Gem icon paths for each product (matching sidebar configuration)
 */
const GEM_ICONS = {
  platform: '/img/gems/clear-block.png',
  dx: '/img/gems/red-triangle.png',
  cli: '/img/gems/blue-block.png',
  moddy: '/img/gems/green-triangle.png',
  recipes: '/img/gems/yellow-block.png',
};

/**
 * Connect the Figma component to the React component
 * Maps Property 1 (product type) to the gemIcon prop
 */
figma.connect(
  NeoGelButton,
  'https://www.figma.com/design/fQTkGSFbYyE7LiHuQJsENC?node-id=5920-3874',
  {
    props: {
      gemIcon: figma.enum('Property 1', {
        dx: GEM_ICONS.dx,
        cli: GEM_ICONS.cli,
        platform: GEM_ICONS.platform,
        recipes: GEM_ICONS.recipes,
        moddy: GEM_ICONS.moddy,
      }),
    },
    example: ({ gemIcon }) => (
      <NeoGelButton gemIcon={gemIcon}>
        Product Name
      </NeoGelButton>
    ),
  }
);

/**
 * Usage Notes:
 *
 * 1. The "Property 2" (theme: Light/DM) is handled automatically by CSS
 *    via the html[data-theme='dark'] selector, so we don't need to map it.
 *
 * 2. The hover state (Property 1 options: Default/Hover) is handled by CSS
 *    :hover pseudo-class, so it's not mapped to a React prop.
 *
 * 3. The onClick handler is not mapped from Figma as it's interaction logic
 *    that should be defined in the implementation.
 *
 * 4. The gemIcon prop accepts the path to the gem image. In production,
 *    this is derived from the sidebar configuration (customProps.gemIcon).
 *
 * 5. Product-specific text should be provided as children.
 */
