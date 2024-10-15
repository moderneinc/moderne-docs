import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'introduction',
    {
      type: 'html',
      value: '<br/><strong>User Documentation</strong>',
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
            'user-documentation/moderne-platform/getting-started/code-quality',
            'user-documentation/moderne-platform/getting-started/data-tables',
            'user-documentation/moderne-platform/getting-started/visualizations',
            'user-documentation/moderne-platform/getting-started/dev-center',
            'user-documentation/moderne-platform/getting-started/activity-view',
            'user-documentation/moderne-platform/getting-started/code-mods',
          ],
        },
        {
          type: 'category',
          label: 'How to guides',
          link: {
            type: 'generated-index',
            title: 'How to guides',
            description: 'How to guides.',
            slug: '/user-documentation/moderne-platform/how-to-guides',
            keywords: ['guides'],
          },
          items: [
            'user-documentation/moderne-platform/how-to-guides/new-recipe-builder',
          ],
        },
      ],
    },
  ]
};

export default sidebars;
