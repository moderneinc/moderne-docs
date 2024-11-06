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

  themeConfig: {
    algolia: {
      appId: "MEFFK0HGO6",
      apiKey: "15eb9c9f6f3147b1cf82b1b7f93cace8",
      indexName: "moderne",
    },
    announcementBar: {
      id: "code_remix",
      content: 'Now announcing the inaugural <a href="https://coderemix.ai/"><strong>Code Remix Summit</strong></a> – in Miami May 12th-14th. Use the code <strong>MODERNE3VIP</strong> for an additional $300 off.',
      textColor: "#E3F2FD",
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
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Moderne, Inc.`,
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
