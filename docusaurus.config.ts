import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Moderne Docs',
  tagline: 'Large-scale automated source code refactoring',

  url: 'https://docs.moderne.io',
  baseUrl: '/',

  organizationName: 'moderneinc',
  projectName: 'moderne-docs',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  scripts: [
    {
      src: 'reo.js',
    }
  ],

  clientModules: [
    require.resolve('./src/client/loadNeoDesign.js'),
  ],

  headTags: [
    // <link rel="preconnect" href="https://fonts.googleapis.com">
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        href: '/img/favicon.ico',
        type: 'image/x-icon',
        sizes: '32x32',
        media: '(prefers-color-scheme: light)',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        href: '/img/favicon_dark.ico',
        type: 'image/x-icon',
        sizes: '32x32',
        media: '(prefers-color-scheme: dark)',
      },
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: "/",
          sidebarCollapsible: true,
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/moderneinc/moderne-docs/edit/main',
        },
        gtag: {
          trackingID: "G-Q1CMC219Y5",
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      onBrokenMarkdownImages: 'warn',
    }
  },

  themes: [
    '@docusaurus/theme-mermaid',
  ],

  plugins: [
    [
      'docusaurus-plugin-llms',
      {
        generateLLMsTxt: true,
        generateLLMsFullTxt: false,
        generateMarkdownFiles: true,
        docsDir: 'docs',
        title: 'Moderne Documentation',
        description: 'Large-scale automated source code refactoring',
        excludeImports: true,
        removeDuplicateHeadings: true,
        customLLMFiles: [
          {
            filename: 'llms-platform.txt',
            includePatterns: ['**/moderne-platform/**/*'],
            fullContent: false,
            title: 'Moderne Platform Documentation',
            description: 'Enterprise SaaS solution for automated code remediation',
          },
          {
            filename: 'llms-cli.txt',
            includePatterns: ['**/moderne-cli/**/*'],
            fullContent: false,
            title: 'Moderne CLI Documentation',
            description: 'Command-line interface for running recipes locally',
          },
          {
            filename: 'llms-dx.txt',
            includePatterns: ['**/moderne-dx/**/*'],
            fullContent: false,
            title: 'Moderne DX Documentation',
            description: 'On-premise deployment solution',
          },
        ],
      },
    ],
  ],

  future: {
    experimental_faster: true,
    v4: true,
  },

  themeConfig: {
    algolia: {
      appId: "MEFFK0HGO6",
      apiKey: "15eb9c9f6f3147b1cf82b1b7f93cace8",
      indexName: "moderne",
    },
    // announcementBar: {
    //   id: "code_remix",
    //   content: 'Now announcing the inaugural <a href="https://coderemix.ai/"><strong>Code Remix Summit</strong></a> – in Miami May 12th-14th.',
    // },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    image: 'img/moderne-poster-logo.svg',
    navbar: {
      logo: {
        alt: 'Moderne Logo Logo',
        src: 'img/logo.svg',
        srcDark: 'img/darkLogo.svg',
      },
      items: [
        {
          href: "https://www.moderne.ai/",
          label: "Moderne website",
          position: "right",
        },
        {
          href: "https://docs.openrewrite.org/",
          label: "OpenRewrite docs",
          position: "right",
        },
        {
          href: "https://app.moderne.io/",
          label: "Go to app",
          position: "right",
        },
      ],
    },
    footer: {
      copyright: `© Moderne, ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: [
        "bash",
        "docker",
        "groovy",
        "java",
        "kotlin",
        "yaml",
        "powershell",
        "csv",
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
