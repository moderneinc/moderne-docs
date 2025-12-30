import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// Helper function for section dividers
const sectionDivider = (label: string) => ({
  type: 'html' as const,
  value: `<br/><strong>${label}</strong>`,
  defaultStyle: true,
});

// Product-specific sections
const platform = {
  practitioner: {
    type: 'category' as const,
    label: 'Platform',
    customProps: {
      gemIcon: 'clear-block',
      megaMenu: true,
    },
    link: {
      type: 'generated-index' as const,
      title: 'Moderne Platform',
      description: 'A secure platform and toolchain for fast, enterprise-wide code modernization.',
      slug: '/user-documentation/moderne-platform',
      keywords: ['guides'],
    },
    items: [
      {
        type: 'category' as const,
        label: 'Getting started',
        link: {
          type: 'generated-index' as const,
          title: 'Getting started',
          description: 'Learn how to get started with the Moderne Platform.',
          slug: '/user-documentation/moderne-platform/getting-started',
          keywords: ['guides'],
        },
        items: [
          'user-documentation/moderne-platform/getting-started/running-your-first-recipe',
          'user-documentation/moderne-platform/getting-started/proof-of-value',
          'user-documentation/moderne-platform/getting-started/code-quality',
          'user-documentation/moderne-platform/getting-started/data-tables',
          'user-documentation/moderne-platform/getting-started/visualizations',
          'user-documentation/moderne-platform/getting-started/dev-center',
          'user-documentation/moderne-platform/getting-started/activity-view',
          'user-documentation/moderne-platform/getting-started/code-mods',
        ],
      },
      {
        type: 'category' as const,
        label: 'How to guides',
        link: {
          type: 'generated-index' as const,
          title: 'How to guides',
          description: 'Learn how to work with the Moderne Platform.',
          slug: '/user-documentation/moderne-platform/how-to-guides',
          keywords: ['guides'],
        },
        items: [
          'user-documentation/moderne-platform/how-to-guides/new-recipe-builder',
          'user-documentation/moderne-platform/how-to-guides/introduction-to-type-aware-code-search',
          'user-documentation/moderne-platform/how-to-guides/moderne-platform-search',
          'user-documentation/moderne-platform/how-to-guides/accessing-the-moderne-api',
          'user-documentation/moderne-platform/how-to-guides/recipe-execution-and-commits-with-graphql',
          'user-documentation/moderne-platform/how-to-guides/find-pii',
          'user-documentation/moderne-platform/how-to-guides/vulnerable-dependencies',
          'user-documentation/moderne-platform/how-to-guides/managing-user-configured-organizations',
          'user-documentation/moderne-platform/how-to-guides/create-api-access-tokens',
          'user-documentation/moderne-platform/how-to-guides/preconditions',
          'user-documentation/moderne-platform/how-to-guides/track-migrations',
          'user-documentation/moderne-platform/how-to-guides/track-commits',
          'user-documentation/moderne-platform/how-to-guides/transitive-dependencies',
          'user-documentation/moderne-platform/how-to-guides/how-to-find-method-invocations-based-on-a-pattern',
          'user-documentation/moderne-platform/how-to-guides/how-to-gain-a-high-level-overview-of-your-codebase-using-clustering',
          'user-documentation/moderne-platform/how-to-guides/writing-and-installing-recipes',
        ],
      },
      {
        type: 'category' as const,
        label: 'References',
        link: {
          type: 'generated-index' as const,
          title: 'References',
          description: 'Moderne Platform reference documentation.',
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

  admin: {
    type: 'category' as const,
    label: 'Platform',
    customProps: {},
    link: {
      type: 'generated-index' as const,
      title: 'Moderne Platform',
      description: 'Moderne Platform administrator documentation. Includes information on configuring and setting up the Moderne Agent among other things.',
      slug: '/administrator-documentation/moderne-platform',
      keywords: ['guides'],
    },
    items: [
      {
        type: 'category' as const,
        label: 'Getting started',
        link: {
          type: 'generated-index' as const,
          title: 'Getting started',
          description: 'Learn how to get started with the Moderne Platform as an administrator.',
          slug: '/administrator-documentation/moderne-platform/getting-started',
          keywords: ['guides'],
        },
        items: [
          'administrator-documentation/moderne-platform/getting-started/admin-pages',
        ],
      },
      {
        type: 'category' as const,
        label: 'How to guides',
        link: {
          type: 'generated-index' as const,
          title: 'How to guides',
          description: 'Administrator setup and configuration documentation.',
          slug: '/administrator-documentation/moderne-platform/how-to-guides',
          keywords: ['guides'],
        },
        items: [
          'administrator-documentation/moderne-platform/how-to-guides/mass-ingest',
          {
            type: 'category' as const,
            label: 'Moderne Agent',
            link: {
              type: 'generated-index' as const,
              title: 'Moderne Agent',
              description: 'Moderne Agent configuration documentation.',
              slug: '/administrator-documentation/moderne-platform/agent-configuration',
              keywords: ['guides'],
            },
            items: [
              'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/agent-config',
              'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-azure-devops-services',
              'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-bitbucket-to-agent',
              'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-bitbucket-cloud-to-agent',
              'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-github',
              'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-gitlab',
              'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-maven-repository-access',
              'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-artifactory-access',
              'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configuring-artifactory-with-recipes',
              'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-s3-access',
              'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-pypi-access-visualizations',
              'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-llm-for-moddy',
              'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-organizations-hierarchy',
              'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-generic-http-tools-for-use-in-recipes',
              'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-strict-recipe-sources',
              'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-client-ssl-certificates',
              'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-a-moderne-tenant-ssl-certificate',
              'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-to-connect-to-moderne-via-an-http-proxy',
              'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-cli-download-instructions-override',
              'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-an-agent-with-ui-customizations',
              'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/agent-variables',
              'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/multi-tenant-private-recipes',
              'administrator-documentation/moderne-platform/how-to-guides/agent-configuration/experimental-builder',
            ],
          },
          'administrator-documentation/moderne-platform/how-to-guides/creating-a-devcenter-recipe',
          'administrator-documentation/moderne-platform/how-to-guides/recipe-based-devcenter',
          'administrator-documentation/moderne-platform/how-to-guides/org-service',
          'administrator-documentation/moderne-platform/how-to-guides/create-visualization',
          'administrator-documentation/moderne-platform/how-to-guides/importing-external-recipes',
          'administrator-documentation/moderne-platform/how-to-guides/lst-cleanup',
          'administrator-documentation/moderne-platform/how-to-guides/troubleshooting-lst-issues',
        ],
      },
      {
        type: 'category' as const,
        label: 'References',
        link: {
          type: 'generated-index' as const,
          title: 'References',
          description: 'Administrator reference documentation for the Moderne Platform.',
          slug: '/administrator-documentation/moderne-platform/references',
          keywords: ['reference'],
        },
        items: [
          'administrator-documentation/moderne-platform/references/authentication',
          'administrator-documentation/moderne-platform/references/reporting',
          'administrator-documentation/moderne-platform/references/architecture',
          'administrator-documentation/moderne-platform/references/ai-architecture',
          'administrator-documentation/moderne-platform/references/flow',
          'administrator-documentation/moderne-platform/references/user-roles',
          'administrator-documentation/moderne-platform/references/github-permissions',
          'administrator-documentation/moderne-platform/references/how-moderne-applies-changes',
          'administrator-documentation/moderne-platform/references/routing-requests-to-agents',
          'administrator-documentation/moderne-platform/references/how-lst-artifacts-are-produced',
          'administrator-documentation/moderne-platform/references/supported-scms',
          'administrator-documentation/moderne-platform/references/standard-vs-enterprise-edition',
          'administrator-documentation/moderne-platform/references/lossless-semantic-trees',
          {
            type: 'link' as const,
            label: 'GraphQL API reference',
            description: 'A link to the Moderne GraphQL API reference docs.',
            href: 'https://studio.apollographql.com/public/Moderne-SaaS-API/variant/current',
          },
        ],
      },
      'administrator-documentation/moderne-platform/faq',
    ],
  },
};

const dx = {
  type: 'category' as const,
  label: 'DX',
  customProps: {
    gemIcon: 'red-triangle',
    megaMenu: true,
  },
  link: {
    type: 'generated-index' as const,
    title: 'Moderne DX',
    description: 'An air-gapped, on-prem unified refactoring CLI/IDE solution with recipes and reporting.',
    slug: '/administrator-documentation/moderne-DX',
    keywords: ['guides'],
  },
  items: [
    {
      type: 'category' as const,
      label: 'Getting started',
      link: {
        type: 'generated-index' as const,
        title: 'Getting started',
        description: 'Learn how to get started with Moderne DX as an administrator.',
        slug: '/administrator-documentation/moderne-dx/getting-started',
        keywords: ['guides'],
      },
      items: [
        'administrator-documentation/moderne-dx/getting-started/overview',
      ],
    },
    {
      type: 'category' as const,
      label: 'How to guides',
      link: {
        type: 'generated-index' as const,
        title: 'How to guides',
        description: 'How to configure and use Moderne DX.',
        slug: '/administrator-documentation/moderne-dx/how-to-guides',
        keywords: ['guides'],
      },
      items: [
        'administrator-documentation/moderne-dx/how-to-guides/mass-ingest-dx',
        'administrator-documentation/moderne-dx/how-to-guides/mass-run-dx',
      ],
    },
    {
      type: 'category' as const,
      label: 'References',
      link: {
        type: 'generated-index' as const,
        title: 'References',
        description: 'Moderne DX reference docs.',
        slug: '/administrator-documentation/moderne-dx/references',
        keywords: ['reference'],
      },
      items: [
        'administrator-documentation/moderne-dx/references/moderne-dx-architecture',
      ],
    },
  ],
};

const cli = {
  type: 'category' as const,
  label: 'CLI',
  customProps: {
    gemIcon: 'blue-block',
    megaMenu: true,
  },
  link: {
    type: 'generated-index' as const,
    title: 'Moderne CLI',
    description: 'A command-line tool for building LSTs and running recipes locally across multiple repositories.',
    slug: '/user-documentation/moderne-cli',
    keywords: ['guides'],
  },
  items: [
    {
      type: 'category' as const,
      label: 'Getting started',
      link: {
        type: 'generated-index' as const,
        title: 'Getting started',
        description: 'Learn how to get started with the Moderne CLI.',
        slug: '/user-documentation/moderne-cli/getting-started',
        keywords: ['guides'],
      },
      items: [
        'user-documentation/moderne-cli/getting-started/cli-intro',
        {
          type: 'link' as const,
          label: 'Proof of value process',
          href: '/user-documentation/moderne-platform/getting-started/proof-of-value',
        },
        'user-documentation/moderne-cli/getting-started/moderne-cli-workshop',
        'user-documentation/moderne-cli/getting-started/moderne-cli-license',
        'user-documentation/moderne-cli/getting-started/cli-internal-tools',
      ],
    },
    {
      type: 'category' as const,
      label: 'How to guides',
      link: {
        type: 'generated-index' as const,
        title: 'How to guides',
        description: 'Learn how to use the Moderne CLI.',
        slug: '/user-documentation/moderne-cli/how-to-guides',
        keywords: ['guides'],
      },
      items: [
        'user-documentation/moderne-cli/how-to-guides/cli-upgrade',
        'user-documentation/moderne-cli/how-to-guides/cli-dev-center',
        'user-documentation/moderne-cli/how-to-guides/javascript',
        'user-documentation/moderne-cli/how-to-guides/parallelism',
        'user-documentation/moderne-cli/how-to-guides/afterburner',
        'user-documentation/moderne-cli/how-to-guides/ssh-key',
        'user-documentation/moderne-cli/how-to-guides/layer-config-cli',
        'user-documentation/moderne-cli/how-to-guides/jdk-selection-and-config',
        'user-documentation/moderne-cli/how-to-guides/execute-user-supplied-commands',
        'user-documentation/moderne-cli/how-to-guides/on-prem-scm-config',
        'user-documentation/moderne-cli/how-to-guides/build-steps',
        'user-documentation/moderne-cli/how-to-guides/build-partitions',
        'user-documentation/moderne-cli/how-to-guides/batch-changes',
        'user-documentation/moderne-cli/how-to-guides/repos-lock-csv',
        'user-documentation/moderne-cli/how-to-guides/cli-telemetry'
      ],
    },
    'user-documentation/moderne-cli/cli-reference',
    {
      type: 'category' as const,
      label: 'References',
      link: {
        type: 'generated-index' as const,
        title: 'References',
        description: 'Reference documentation for the Moderne CLI.',
        slug: '/user-documentation/moderne-cli/references',
        keywords: ['references'],
      },
      items: [
        'user-documentation/moderne-cli/references/repos-csv',
        'user-documentation/moderne-cli/references/cli-3-44-0-changes',
        'user-documentation/moderne-cli/references/cli-3-45-0-changes',
        'user-documentation/moderne-cli/references/faq',
      ],
    },
  ],
};

const moddy = {
  type: 'category' as const,
  label: 'Moddy',
  customProps: {
    gemIcon: 'green-triangle',
    megaMenu: true,
  },
  link: {
    type: 'generated-index' as const,
    title: 'Moddy',
    description: 'A multi-repository AI agent that combines natural language with the accuracy and scalability of Moderne and OpenRewrite.',
    slug: '/user-documentation/moddy',
    keywords: ['guides'],
  },
  items: [
    'user-documentation/moddy/moddy-platform',
    'user-documentation/moddy/moddy-desktop',
    'user-documentation/moddy/moddy-mcp-integration',
    'user-documentation/moddy/mcp-tools-reference',
    'user-documentation/moddy/moddy-data-privacy',
  ],
};

const recipes = {
  type: 'category' as const,
  label: 'Recipes',
  customProps: {
    gemIcon: 'yellow-block',
    megaMenu: true,
  },
  link: {
    type: 'generated-index' as const,
    title: 'Recipes',
    description: 'Best practices and patterns for customizing and contributing recipes.',
    slug: '/user-documentation/recipes',
    keywords: ['recipes'],
  },
  items: [
    'user-documentation/recipes/common-custom-recipes',
    'user-documentation/recipes/contributing-to-openrewrite',
    'user-documentation/recipes/conventions-and-best-practices',
  ],
};

const jetbrainsPlugin = {
  type: 'category' as const,
  label: 'Moderne Plugin for JetBrains IDEs',
  link: {
    type: 'generated-index' as const,
    title: 'Moderne Plugin for JetBrains IDEs',
    description: 'An IntelliJ IDEA plugin for multi-repository code search and recipe development.',
    slug: '/user-documentation/moderne-ide-integration',
    keywords: ['guides'],
  },
  items: [
    {
      type: 'category' as const,
      label: 'How to guides',
      link: {
        type: 'generated-index' as const,
        title: 'How to guides',
        description: 'Learn how to work with the Moderne IntelliJ IDEA plugin.',
        slug: '/user-documentation/moderne-ide-integration/how-to-guides',
        keywords: ['guides'],
      },
      items: [
        'user-documentation/moderne-ide-integration/how-to-guides/moderne-plugin-install',
        'user-documentation/moderne-ide-integration/how-to-guides/code-search',
        'user-documentation/moderne-ide-integration/how-to-guides/creating-recipes',
        'user-documentation/moderne-ide-integration/how-to-guides/debugging-recipes',
      ],
    },
    {
      type: 'category' as const,
      label: 'Reference',
      link: {
        type: 'generated-index' as const,
        title: 'Reference',
        description: 'Reference documentation for Moderne IDE integrations.',
        slug: '/user-documentation/moderne-ide-integration/reference',
        keywords: ['reference'],
      },
      items: [
        'user-documentation/moderne-ide-integration/reference/code-search-actions',
        'user-documentation/moderne-ide-integration/reference/refactor-actions',
      ],
    },
  ],
};

// Topic-based sections
const handsOnLearning = [
  {
    type: 'category' as const,
    label: 'Fundamentals of recipe development',
    link: {
      type: 'generated-index' as const,
      title: 'Fundamentals of recipe development workshop',
      description: 'Learn how OpenRewrite works and get hands-on experience developing recipes.',
      slug: '/hands-on-learning/fundamentals',
      keywords: ['recipes'],
    },
    items: [
      {
        type: 'doc' as const,
        id: 'hands-on-learning/fundamentals/workshop-overview',
        customProps: { gemIcon: 'pink' }
      },
      {
        type: 'doc' as const,
        id: 'hands-on-learning/fundamentals/module-1-running-recipes',
        customProps: { gemIcon: 'green' }
      },
      {
        type: 'doc' as const,
        id: 'hands-on-learning/fundamentals/module-2-recipe-builder',
        customProps: { gemIcon: 'orange' }
      },
      {
        type: 'doc' as const,
        id: 'hands-on-learning/fundamentals/module-3-recipe-development-environment',
        customProps: { gemIcon: 'gray' }
      },
      {
        type: 'doc' as const,
        id: 'hands-on-learning/fundamentals/module-4-declarative-yaml-recipes',
        customProps: { gemIcon: 'pink' }
      },
      {
        type: 'doc' as const,
        id: 'hands-on-learning/fundamentals/module-5-preconditions',
        customProps: { gemIcon: 'green' }
      },
      {
        type: 'doc' as const,
        id: 'hands-on-learning/fundamentals/module-6-testing-recipes',
        customProps: { gemIcon: 'orange' }
      },
      {
        type: 'doc' as const,
        id: 'hands-on-learning/fundamentals/module-7-refaster-recipes',
        customProps: { gemIcon: 'gray' }
      },
      {
        type: 'doc' as const,
        id: 'hands-on-learning/fundamentals/module-8-imperative-recipes',
        customProps: { gemIcon: 'pink' }
      },
    ],
  },
  {
    type: 'category' as const,
    label: 'Advanced recipe development',
    link: {
      type: 'generated-index' as const,
      title: 'Advanced recipe development workshop',
      description: 'Learn to build advanced recipes that can extract insights and generate code.',
      slug: '/hands-on-learning/advanced',
      keywords: ['recipes'],
    },
    items: [
      'hands-on-learning/advanced/workshop-overview',
      'hands-on-learning/advanced/module-1-recipe-development-environment',
      'hands-on-learning/advanced/module-2-data-tables',
      'hands-on-learning/advanced/module-3-scanning-recipes',
      'hands-on-learning/advanced/module-4-traits',
    ],
  },
  {
    type: 'link' as const,
    label: 'Live OpenRewrite training',
    description: 'Hands-on sessions for both newcomers and advanced practitioners.',
    href: 'https://www.moderne.ai/moderne-openrewrite-training-hub',
  },
];

const openRewriteAdvanced = [
  {
    type: 'category' as const,
    label: 'Control flow',
    link: {
      type: 'generated-index' as const,
      title: 'Control flow analysis',
      description: 'Learn about control flow analysis in OpenRewrite.',
      slug: '/openrewrite-advanced-program-analysis/control-flow',
      keywords: ['control-flow', 'cfg', 'analysis'],
    },
    items: [
      'openrewrite-advanced-program-analysis/control-flow/introduction',
      'openrewrite-advanced-program-analysis/control-flow/building-cfgs',
      'openrewrite-advanced-program-analysis/control-flow/reachability-analysis',
      'openrewrite-advanced-program-analysis/control-flow/dominance-analysis',
      'openrewrite-advanced-program-analysis/control-flow/loop-analysis',
    ],
  },
  {
    type: 'category' as const,
    label: 'Data flow',
    link: {
      type: 'generated-index' as const,
      title: 'Data flow analysis',
      description: 'Learn about data flow analysis in OpenRewrite.',
      slug: '/openrewrite-advanced-program-analysis/data-flow',
      keywords: ['data-flow', 'analysis'],
    },
    items: [
      'openrewrite-advanced-program-analysis/data-flow/introduction',
      'openrewrite-advanced-program-analysis/data-flow/building-your-first-data-flow-analysis',
      'openrewrite-advanced-program-analysis/data-flow/liveness-analysis',
      'openrewrite-advanced-program-analysis/data-flow/reaching-definitions',
      'openrewrite-advanced-program-analysis/data-flow/inter-procedural-analysis',
      'openrewrite-advanced-program-analysis/data-flow/method-summary-analysis',
    ],
  },
  {
    type: 'category' as const,
    label: 'Taint analysis',
    link: {
      type: 'generated-index' as const,
      title: 'Taint analysis',
      description: 'Learn about taint analysis for security vulnerability detection.',
      slug: '/openrewrite-advanced-program-analysis/taint-analysis',
      keywords: ['taint', 'security', 'analysis'],
    },
    items: [
      'openrewrite-advanced-program-analysis/taint-analysis/introduction',
      'openrewrite-advanced-program-analysis/taint-analysis/comprehensive-guide',
    ],
  },
  {
    type: 'category' as const,
    label: 'Security',
    link: {
      type: 'generated-index' as const,
      title: 'Security analysis',
      description: 'Learn how to find and fix security vulnerabilities using OpenRewrite.',
      slug: '/openrewrite-advanced-program-analysis/security',
      keywords: ['security', 'vulnerabilities', 'analysis'],
    },
    items: [
      'openrewrite-advanced-program-analysis/security/overview',
      'openrewrite-advanced-program-analysis/security/sql-injection',
      'openrewrite-advanced-program-analysis/security/xss',
      'openrewrite-advanced-program-analysis/security/command-injection',
      'openrewrite-advanced-program-analysis/security/ldap-injection',
      'openrewrite-advanced-program-analysis/security/path-traversal',
      'openrewrite-advanced-program-analysis/security/xxe',
      'openrewrite-advanced-program-analysis/security/pii-protection',
      'openrewrite-advanced-program-analysis/security/post-quantum-cryptography',
    ],
  },
  'openrewrite-advanced-program-analysis/advanced-analysis-techniques',
];

const releases = {
  type: 'category' as const,
  label: 'Releases',
  customProps: {
    gemIcon: 'gray',
  },
  link: {
    type: 'generated-index' as const,
    title: 'Releases',
    description: 'Release notes and changelogs for Moderne products including the Agent, CLI, DX, and recipes.',
    slug: '/releases',
    keywords: ['releases', 'changelog'],
  },
  items: [
    'releases/agent-releases',
    'releases/cli-releases',
    'releases/changelog',
    'releases/cli-dx',
    'releases/proprietary-recipe-changelog',
  ],
};

const licensing = {
  type: 'category' as const,
  label: 'Licensing',
  customProps: {
    gemIcon: 'orange',
  },
  link: {
    type: 'generated-index' as const,
    title: 'Licensing',
    description: 'Licensing information for Moderne products and the Moderne Source Available License.',
    slug: '/licensing',
    keywords: ['licensing', 'license'],
  },
  items: [
    'licensing/overview',
    'licensing/moderne-source-available-license',
  ],
};

const sharedReferences = {
  type: 'category' as const,
  label: 'Shared references',
  link: {
    type: 'generated-index' as const,
    title: 'Shared references',
    description: 'Shared administrative reference documentation.',
    slug: '/administrator-documentation/references',
    keywords: ['reference'],
  },
  items: [
    'administrator-documentation/references/faq',
  ],
};

// Final sidebar composition
const sidebars: SidebarsConfig = {
  docs: [
    platform.practitioner,
    cli,
    moddy,
    jetbrainsPlugin,
    recipes,
    'user-documentation/community-office-hours',
    ...handsOnLearning,
    ...openRewriteAdvanced,
    platform.admin,
    dx,
    sharedReferences,
    releases,
    licensing,
  ]
};

export default sidebars;
