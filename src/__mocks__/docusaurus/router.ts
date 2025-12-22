/**
 * Mock implementation of @docusaurus/router for Storybook
 *
 * This mock provides basic implementations of routing utilities
 * to prevent errors when components using router are rendered in Storybook.
 */

export function useHistory() {
  return {
    push: (path: string) => {
      console.log('[Storybook Mock] Navigation to:', path);
      // In Storybook, we just log navigation instead of actually navigating
    },
    replace: (path: string) => {
      console.log('[Storybook Mock] Replace to:', path);
    },
    go: (n: number) => {
      console.log('[Storybook Mock] Go:', n);
    },
    goBack: () => {
      console.log('[Storybook Mock] Go back');
    },
    goForward: () => {
      console.log('[Storybook Mock] Go forward');
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

export function matchPath(pattern: string, pathname: string) {
  console.log('[Storybook Mock] matchPath:', pattern, pathname);
  // Simple mock implementation - always returns null (no match)
  // Can be enhanced if needed for specific story requirements
  return null;
}
