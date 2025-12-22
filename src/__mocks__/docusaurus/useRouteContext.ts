/**
 * Mock implementation of @docusaurus/useRouteContext for Storybook
 */

export default function useRouteContext() {
  return {
    plugin: {
      id: 'default',
      name: 'docusaurus-plugin-content-docs',
    },
  };
}
