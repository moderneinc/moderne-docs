/**
 * Mock implementation of @docusaurus/router for Storybook
 *
 * This mock provides a basic implementation of useHistory hook
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
