/**
 * Figma Code Connect for Footer Component
 *
 * This file maps the Figma "footer" component to the Footer React component.
 * It provides code examples that appear in Figma Dev Mode.
 *
 * Figma Component: Docs Working File - footer
 * URL: https://www.figma.com/design/uV0jrpyaEkb92biJyRiZ5A/Docs-Working-File---11-2025---Current?node-id=634-2110
 */

import figma from '@figma/code-connect';
import Footer from './index';

/**
 * Connect the Figma component to the React component
 * Property 2 (LM/DM) is handled automatically by CSS dark mode
 */
figma.connect(
  Footer,
  'https://www.figma.com/design/uV0jrpyaEkb92biJyRiZ5A?node-id=634-2110',
  {
    example: () => (
      <Footer />
    ),
  }
);

/**
 * Usage Notes:
 *
 * 1. This is a swizzled Docusaurus theme component that replaces the default footer.
 *
 * 2. The component includes three sections:
 *    - Social Links: X (Twitter), LinkedIn, YouTube
 *    - Footer Links: Contact us, Privacy, Terms, Copyright
 *    - Feedback Button: "Give feedback" primary button
 *
 * 3. The "Property 2" variants (LM/DM) from Figma represent light/dark mode.
 *    Dark mode is handled automatically via CSS using html[data-theme='dark'].
 *
 * 4. Features:
 *    - Responsive layout
 *    - External links open in new tab with proper rel attributes
 *    - Dynamic copyright year
 *    - Accessible with ARIA labels on social links
 *
 * 5. This component is automatically used in the Docusaurus layout via theme swizzling.
 *    Location: src/theme/Footer/index.tsx
 *
 * 6. Social media links and contact email point to actual Moderne resources.
 */
