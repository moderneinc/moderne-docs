import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'introduction',
    {
      type: 'html',
      value: '<strong>User Documentation</strong>',
      defaultStyle: true,
    },
    {
      type: 'category',
      label: 'Moderne Platform',
      link: {
        type: 'generated-index',
        title: 'Moderne Platform',
        description: 'Learn how to use the Moderne Platform.',
        slug: '/user-documentation/moderne-platform',
        keywords: ['guides'],
      },
      items: [
        {
          type: 'category',
          label: 'Getting started',
          link: {
            type: 'generated-index',
            title: 'Getting started',
            description: 'Getting started guides.',
            slug: '/user-documentation/moderne-platform/getting-started',
            keywords: ['guides'],
          },
          items: [
            'user-documentation/moderne-platform/getting-started/running-your-first-recipe',
          ],
        },
        // 'user-documentation/moderne-platform/getting-started/running-your-first-recipe',
      ],
    },
  ]
};

export default sidebars;
