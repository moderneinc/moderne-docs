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
    image: 'img/moderne-poster-logo.svg',
    announcementBar: {
      id: "doc_release",
      content:
        "We are currently migrating where we host our docs. Because of this, search is temporarily unavailable.",
      backgroundColor: "#555555",
      textColor: "#E3F2FD",
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
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
