import type { Preview } from '@storybook/react-webpack5';
import React from 'react';
import { composeProviders } from '@docusaurus/theme-common';
import {
  ColorModeProvider,
  AnnouncementBarProvider,
  ScrollControllerProvider,
  PluginHtmlClassNameProvider,
  NavbarProvider,
} from '@docusaurus/theme-common/internal';

// Geist is loaded from Google Fonts via the previewHead in .storybook/main.ts,
// matching how the site loads it (see docusaurus.config.ts headTags).

// Import Infima CSS framework (Docusaurus base styles)
import 'infima/dist/css/default/default.css';

// Import the token + theme layers around custom.css, mirroring the
// customCss load order in docusaurus.config.ts. Without the token layer here,
// var(--mod-*) is undefined in Storybook and every declaration using it (fonts
// and colors) becomes invalid — components render unstyled / serif.
import '@moderneinc/design-system-tokens/moderne.css';
import '../src/css/tokens-supplement.css';
import '../src/css/custom.css';

// Mirror the Docusaurus LayoutProvider context tree (see
// @docusaurus/theme-classic Layout/Provider). Swizzled theme components such as
// Navbar/Layout and Navbar/Content call hooks (useNavbarMobileSidebar,
// useAnnouncementBar, color mode, scroll) that throw a ReactContextError when
// rendered outside these providers. DocsPreferredVersionContextProvider is
// intentionally omitted — it requires plugin-content-docs generated data that
// none of our stories consume.
const DocusaurusProviders = composeProviders([
  ColorModeProvider,
  AnnouncementBarProvider,
  ScrollControllerProvider,
  PluginHtmlClassNameProvider,
  NavbarProvider,
]);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#F8F8FF',
        },
        {
          name: 'dark',
          value: '#041834',
        },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      // Apply Docusaurus theme class and data attribute
      // Check both the hex value and the name to handle both URL formats
      const bgValue = context.globals.backgrounds?.value;
      const theme = bgValue === '#041834' || bgValue === 'dark' ? 'dark' : 'light';

      // Update document attributes to match Docusaurus
      React.useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        document.body.className = theme === 'dark' ? 'dark-theme' : '';
      }, [theme]);

      return (
        <DocusaurusProviders>
          <div className="theme-doc-page" data-theme={theme}>
            <Story />
          </div>
        </DocusaurusProviders>
      );
    },
  ],
};

export default preview;