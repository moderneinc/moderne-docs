import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
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
    },
  },
});
