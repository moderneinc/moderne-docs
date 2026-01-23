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
    },
    siteMetadata: {
      docusaurusVersion: '3.9.1',
    },
  };
}
