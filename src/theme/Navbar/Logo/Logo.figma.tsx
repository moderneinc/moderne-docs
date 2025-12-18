/**
 * Figma Code Connect for Navbar Logo Component
 *
 * This file maps the Figma "Docs Logo" component to the Navbar Logo React component.
 * It provides code examples that appear in Figma Dev Mode.
 *
 * Figma Component: Docs Working File - Docs Logo
 * URL: https://www.figma.com/design/uV0jrpyaEkb92biJyRiZ5A/Docs-Working-File---11-2025---Current?node-id=145-701
 */

import figma from '@figma/code-connect';
import DocsLogo from './index';

/**
 * Connect the Figma component to the React component
 * This component renders the Moderne logo with "Docs" dropdown button
 */
figma.connect(
  DocsLogo,
  'https://www.figma.com/design/uV0jrpyaEkb92biJyRiZ5A?node-id=145-701',
  {
    language: 'React - Docusaurus',
    example: () => (
      <DocsLogo />
    ),
  }
);

/**
 * Usage Notes:
 *
 * 1. This is a swizzled Docusaurus theme component that replaces the default navbar logo.
 *
 * 2. The component includes:
 *    - Moderne logo symbol (SVG)
 *    - "Moderne®" wordmark with registered trademark
 *    - "Docs" button with dropdown chevron
 *    - MegaMenu dropdown (opens when button is clicked)
 *
 * 3. The "Property 1=Standard" variant from Figma represents the default state.
 *    The component handles its own state for menu open/closed.
 *
 * 4. Features:
 *    - Toggles MegaMenu on click
 *    - Chevron rotates when menu is open
 *    - Accessible with ARIA labels and expanded state
 *
 * 5. This component is automatically used in the Docusaurus navbar via theme swizzling.
 *    Location: src/theme/Navbar/Logo/index.tsx
 */
