/**
 * Figma Code Connect for NeoButton Component
 *
 * This file maps the Figma "Button" component to the NeoButton React component.
 * It provides code examples that appear in Figma Dev Mode.
 *
 * Figma Component: Neo Design System 2025 - Button
 * URL: https://www.figma.com/design/fQTkGSFbYyE7LiHuQJsENC/Neo---Moderne-Design-system---2025?node-id=4086-7590
 */

import figma from '@figma/code-connect';
import { NeoButton } from './NeoButton';

/**
 * Placeholder icon for Figma Code Connect examples
 */
const Icon = () => <svg width="16" height="16"><circle cx="8" cy="8" r="6" /></svg>;

/**
 * Connect the Figma component to the React component
 * Maps Figma properties to React props
 */
figma.connect(
  NeoButton,
  'https://www.figma.com/design/fQTkGSFbYyE7LiHuQJsENC?node-id=4086-7590',
  {
    example: () => (
      <NeoButton
        variant="primary"
        size="medium"
        icon={<Icon />}
        iconPosition="left"
      >
        Button Text
      </NeoButton>
    ),
  }
);

/**
 * Usage Notes:
 *
 * 1. The theme (light/dark) is handled automatically by CSS
 *    via the html[data-theme='dark'] selector, so we don't need to map it.
 *
 * 2. The variant prop controls the visual style:
 *    - 'primary': Filled button with primary color
 *    - 'secondary': Filled button with secondary color
 *    - 'outline': Outlined button with transparent background
 *    - 'text': Text-only button with no background
 *
 * 3. The size prop controls the button dimensions:
 *    - 'small': Compact size for dense UIs
 *    - 'medium': Default size (default)
 *    - 'large': Larger size for prominent actions
 *
 * 4. Icon support:
 *    - Optional icon prop accepts any React node
 *    - iconPosition prop controls placement ('left' or 'right')
 *    - If only icon is provided (no children), renders as icon-only button
 *
 * 5. The component can render as either <button> or <a> tag:
 *    - If href prop is provided, renders as anchor tag
 *    - Otherwise renders as button element
 *
 * 6. Disabled state is controlled by the disabled prop (boolean)
 *
 * 7. The onClick handler should be defined in your implementation
 *    based on the specific use case.
 */
