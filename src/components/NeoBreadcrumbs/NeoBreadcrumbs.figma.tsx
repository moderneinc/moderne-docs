/**
 * Figma Code Connect for NeoBreadcrumbs Component
 *
 * This file maps the Figma "Breadcrumbs" component to the NeoBreadcrumbs React component.
 * It provides code examples that appear in Figma Dev Mode.
 *
 * Figma Component: Neo Design System 2025 - Breadcrumbs
 * URL: https://www.figma.com/design/fQTkGSFbYyE7LiHuQJsENC/Neo---Moderne-Design-system---2025?node-id=4563-122921
 */

import figma from '@figma/code-connect';
import { NeoBreadcrumbs } from './NeoBreadcrumbs';

/**
 * Connect the Figma component to the React component
 * Provides a basic example that appears in Dev Mode
 */
figma.connect(
  NeoBreadcrumbs,
  'https://www.figma.com/design/fQTkGSFbYyE7LiHuQJsENC?node-id=4563-122921',
  {
    example: () => (
      <NeoBreadcrumbs
        items={[
          { label: 'User Documentation', href: '/user-documentation' },
          { label: 'Moderne CLI', href: '/user-documentation/cli' },
          { label: 'Getting Started' },
        ]}
        showHomeIcon={true}
      />
    ),
  }
);

/**
 * Usage Notes:
 *
 * 1. The theme (light/dark) is handled automatically by CSS
 *    via the html[data-theme='dark'] selector, so we don't need to map it.
 *
 * 2. The breadcrumb items array defines the navigation path:
 *    - Each item has a label (required) and optional href
 *    - The last item is automatically styled as the current page
 *    - Items without href render as plain text
 *
 * 3. The showHomeIcon prop controls whether the home icon appears at the start
 *    of the breadcrumb trail. Default is true.
 *
 * 4. Separators (chevron icons) are automatically inserted between items
 *    and are marked as aria-hidden for accessibility.
 *
 * 5. The component uses lucide-react icons (Home, ChevronRight) which are
 *    automatically included - no need to import them separately.
 */
