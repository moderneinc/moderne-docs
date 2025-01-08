import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Moderne Docs',
  tagline: 'Large-scale automated source code refactoring',
  favicon: 'img/favicon.svg',

  url: 'https://docs.moderne.io',
  baseUrl: '/',

  organizationName: 'moderneinc',
  projectName: 'moderne-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

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
    // <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;1,400;1,500&display=swap" rel="stylesheet">
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;1,400;1,500&display=swap',
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
  },

  themes: [
    '@docusaurus/theme-mermaid',
  ],

  future: {
    experimental_faster: true,
  },

  themeConfig: {
    algolia: {
      appId: "MEFFK0HGO6",
      apiKey: "15eb9c9f6f3147b1cf82b1b7f93cace8",
      indexName: "moderne",
    },
    announcementBar: {
      id: "code_remix",
      content: 'Now announcing the inaugural <a href="https://coderemix.ai/"><strong>Code Remix Summit</strong></a> – in Miami May 12th-14th. Use the code <strong>MODERNE3VIP</strong> for an additional $300 off.',
    },
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
          href: "https://www.moderne.io/",
          label: "Moderne website",
          position: "right",
        },
        {
          href: "https://docs.openrewrite.org/",
          label: "OpenRewrite",
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
      theme: prismThemes.github,
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
