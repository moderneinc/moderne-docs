/**
 * Mock implementation of Docusaurus useBaseUrl hook for Storybook
 */
export default function useBaseUrl(url: string): string {
  return url;
}

export function useBaseUrlUtils() {
  return {
    withBaseUrl: (url: string): string => url,
  };
}
