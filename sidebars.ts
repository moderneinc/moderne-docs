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
            'user-documentation/moderne-platform/how-to-guides/introduction-to-type-aware-code-search',
            'user-documentation/moderne-platform/how-to-guides/moderne-platform-search',
            'user-documentation/moderne-platform/how-to-guides/recipe-execution-and-commits-with-graphql',
            'user-documentation/moderne-platform/how-to-guides/accessing-the-moderne-api',
            'user-documentation/moderne-platform/how-to-guides/find-pii',
            'user-documentation/moderne-platform/how-to-guides/managing-user-configured-organizations',
            'user-documentation/moderne-platform/how-to-guides/create-api-access-tokens',
            'user-documentation/moderne-platform/how-to-guides/preconditions',
            'user-documentation/moderne-platform/how-to-guides/track-migrations',
            'user-documentation/moderne-platform/how-to-guides/transitive-dependencies',
            'user-documentation/moderne-platform/how-to-guides/how-to-find-method-invocations-based-on-a-pattern',
            'user-documentation/moderne-platform/how-to-guides/how-to-gain-a-high-level-overview-of-your-codebase-using-clustering',
          ],
        },
        {
          type: 'category',
          label: 'References',
          link: {
            type: 'generated-index',
            title: 'References',
            description: 'Reference docs.',
            slug: '/user-documentation/moderne-platform/references',
            keywords: ['references'],
          },
          items: [
            'user-documentation/moderne-platform/references/moderne-tokens',
            'user-documentation/moderne-platform/references/create-scm-access-tokens',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Moderne CLI',
      link: {
        type: 'generated-index',
        title: 'Moderne CLI',
        description: 'Learn how to use the Moderne CLI.',
        slug: '/user-documentation/moderne-cli',
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
            slug: '/user-documentation/moderne-cli/getting-started',
            keywords: ['guides'],
          },
          items: [
            'user-documentation/moderne-cli/getting-started/cli-intro',
            'user-documentation/moderne-cli/getting-started/moderne-cli-license',
          ],
        },
        {
          type: 'category',
          label: 'How to guides',
          link: {
            type: 'generated-index',
            title: 'How to guides',
            description: 'How to guides.',
            slug: '/user-documentation/moderne-cli/how-to-guides',
            keywords: ['guides'],
          },
          items: [
            'user-documentation/moderne-cli/how-to-guides/layer-config-cli',
            'user-documentation/moderne-cli/how-to-guides/jdk-selection-and-config',
            'user-documentation/moderne-cli/how-to-guides/air-gapped-cli-install',
            'user-documentation/moderne-cli/how-to-guides/execute-user-supplied-commands',
            'user-documentation/moderne-cli/how-to-guides/clone-and-sync',
            'user-documentation/moderne-cli/how-to-guides/on-prem-scm-config',
            'user-documentation/moderne-cli/how-to-guides/build-steps',
            'user-documentation/moderne-cli/how-to-guides/build-partitions',
            'user-documentation/moderne-cli/how-to-guides/bazel-support',
          ],
        },
        'user-documentation/moderne-cli/cli-reference',
        'user-documentation/moderne-cli/faq',
      ],
    }
  ]
};

export default sidebars;
