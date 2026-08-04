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
 * This component renders the Moderne "Documentation" lockup, linked to the site root.
 *
 * TODO: the node ID below still points at the pre-rebrand "Docs Logo" component.
 * Repoint it at the Morpheus "Documentation" lockup node.
 */
figma.connect(
  DocsLogo,
  'https://www.figma.com/design/uV0jrpyaEkb92biJyRiZ5A?node-id=145-701',
  {
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
 * 2. The component renders the Moderne "Documentation" lockup as two <img> tags,
 *    one light and one dark. Both are always in the DOM; CSS toggles them on
 *    [data-theme] so the logo does not flash on hydration.
 *
 * 3. The component is stateless. The link wrapping the lockup carries the
 *    accessible name ("Moderne Documentation"); the images themselves are
 *    decorative and have empty alt text.
 *
 * 4. This component is automatically used in the Docusaurus navbar via theme swizzling.
 *    Location: src/theme/Navbar/Logo/index.tsx
 */
