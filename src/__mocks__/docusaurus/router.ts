/**
 * Mock implementation of @docusaurus/router for Storybook
 *
 * This mock provides basic implementations of routing utilities
 * to prevent errors when components using router are rendered in Storybook.
 */

export function useHistory() {
  return {
    push: (_path: string) => {
      // No-op in Storybook - navigation is mocked
    },
    replace: (_path: string) => {
      // No-op in Storybook
    },
    go: (_n: number) => {
      // No-op in Storybook
    },
    goBack: () => {
      // No-op in Storybook
    },
    goForward: () => {
      // No-op in Storybook
    },
  };
}

export function useLocation() {
  return {
    pathname: '/storybook',
    search: '',
    hash: '',
    state: undefined,
  };
}

export function matchPath(_pattern: string, _pathname: string) {
  // Simple mock implementation - always returns null (no match)
  // Can be enhanced if needed for specific story requirements
  return null;
}
