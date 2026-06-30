/**
 * Mock implementation of Docusaurus useDocusaurusContext hook for Storybook
 */
export default function useDocusaurusContext() {
  return {
    siteConfig: {
      title: 'Moderne Documentation',
      tagline: 'Enterprise automated code remediation',
      url: 'https://docs.moderne.io',
      baseUrl: '/',
      organizationName: 'moderneinc',
      projectName: 'moderne-docs',
      // Mirror of the *normalized* themeConfig that Docusaurus produces at runtime.
      // `useThemeConfig()` from @docusaurus/theme-common simply returns
      // `siteConfig.themeConfig`, so components that destructure `navbar`, `docs`,
      // `announcementBar`, etc. need these keys present (with Docusaurus defaults
      // filled in) or they throw when rendered outside the Docusaurus runtime.
      themeConfig: {
        colorMode: {
          defaultMode: 'light',
          disableSwitch: false,
          respectPrefersColorScheme: true,
        },
        navbar: {
          hideOnScroll: false,
          items: [],
          logo: {
            alt: 'Moderne Logo',
            src: 'img/logo.svg',
            srcDark: 'img/darkLogo.svg',
          },
        },
        announcementBar: undefined,
        footer: {
          style: 'light',
          links: [],
          copyright: `© Moderne`,
        },
        docs: {
          versionPersistence: 'localStorage',
          sidebar: {
            hideable: true,
            autoCollapseCategories: false,
          },
        },
        tableOfContents: {
          minHeadingLevel: 2,
          maxHeadingLevel: 3,
        },
      },
    },
    siteMetadata: {
      docusaurusVersion: '3.9.1',
    },
  };
}
