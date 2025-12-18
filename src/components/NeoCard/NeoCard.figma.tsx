/**
 * Figma Code Connect for NeoCard Component
 *
 * This file maps the Figma "Large Card" component to the NeoCard React component.
 * It provides code examples that appear in Figma Dev Mode.
 *
 * Figma Component: Neo Design System 2025 - Large Card
 * URL: https://www.figma.com/design/fQTkGSFbYyE7LiHuQJsENC/Neo---Moderne-Design-system---2025?node-id=5925-11
 */

import figma from '@figma/code-connect';
import { NeoCard } from './NeoCard';

/**
 * Connect the Figma component to the React component
 * Provides a basic example that appears in Dev Mode
 */
figma.connect(
  NeoCard,
  'https://www.figma.com/design/fQTkGSFbYyE7LiHuQJsENC?node-id=5925-11',
  {
    language: 'React - Docusaurus',
    example: () => (
      <NeoCard
        title="Code Remix"
        description="Weekly live Code Remix sessions to cover updates, answer questions, and dive into key topics."
        icon={<Icon />}
        gem={<ProductLogo />}
        buttons={
          <>
            <NeoButton variant="primary" size="small">
              Join Session
            </NeoButton>
            <NeoButton variant="secondary" size="small">
              Learn More
            </NeoButton>
          </>
        }
      />
    ),
  }
);

/**
 * Usage Notes:
 *
 * 1. The "property2" (theme: light/dark) is handled automatically by CSS
 *    via the html[data-theme='dark'] selector, so we don't need to map it.
 *
 * 2. The disabled state is controlled by the "property1" enum when set to "disabled",
 *    which maps to both the state="disabled" and disabled={true} props.
 *
 * 3. The onClick handler is not mapped from Figma as it's interaction logic
 *    that should be defined in the implementation.
 *
 * 4. Custom icons, gems, and buttons should be provided by the developer
 *    based on the specific use case. The Figma component shows placeholders.
 */
