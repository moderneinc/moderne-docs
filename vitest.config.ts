import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  // @docusaurus/tsconfig sets jsx: preserve for the editor, which leaves JSX in .tsx test files
  // untransformed. Vite's own automatic runtime handles it instead.
  oxc: { jsx: { runtime: 'automatic' } },
  test: {
    environment: 'happy-dom',
    globals: true,
  },
  resolve: {
    alias: {
      '@site': path.resolve(__dirname, '.'),
      '@theme/Tabs': path.resolve(__dirname, '__mocks__/theme-tabs.tsx'),
      '@theme/TabItem': path.resolve(__dirname, '__mocks__/theme-tabitem.tsx'),
      '@theme/CodeBlock': path.resolve(__dirname, '__mocks__/theme-codeblock.tsx'),
      '@theme': path.resolve(__dirname, 'src/theme'),
      '@docusaurus/plugin-content-docs/client': path.resolve(__dirname, '__mocks__/docusaurus-client.ts'),
      '@docusaurus/router': path.resolve(__dirname, '__mocks__/docusaurus-router.ts'),
      '@docusaurus/Link': path.resolve(__dirname, '__mocks__/docusaurus-link.tsx'),
      '@docusaurus/Translate': path.resolve(__dirname, '__mocks__/docusaurus-translate.tsx'),
      '@docusaurus/useBaseUrl': path.resolve(__dirname, '__mocks__/docusaurus-use-base-url.ts'),
    },
  },
});
