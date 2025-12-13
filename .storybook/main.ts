import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "./**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  staticDirs: ['../static'],
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: async (config) => {
    // Add Docusaurus aliases
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@site': path.resolve(__dirname, '..'),
      '@docusaurus/Link': path.resolve(__dirname, '../src/__mocks__/docusaurus/Link.tsx'),
      '@docusaurus/Head': path.resolve(__dirname, '../src/__mocks__/docusaurus/Head.tsx'),
      '@docusaurus/useBaseUrl': path.resolve(__dirname, '../src/__mocks__/docusaurus/useBaseUrl.ts'),
      '@docusaurus/useDocusaurusContext': path.resolve(__dirname, '../src/__mocks__/docusaurus/useDocusaurusContext.ts'),
      '@docusaurus/router': path.resolve(__dirname, '../src/__mocks__/docusaurus/router.ts'),
      '@docusaurus/Translate': path.resolve(__dirname, '../src/__mocks__/docusaurus/Translate.tsx'),
      '@theme/Heading': path.resolve(__dirname, '../src/__mocks__/theme/Heading.tsx'),
      '@theme/Layout': path.resolve(__dirname, '../src/__mocks__/theme/Layout.tsx'),
      '@theme': path.resolve(__dirname, '../src/theme'),
    };

    // Ensure node_modules resolution works correctly
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../node_modules'),
    ];

    // IMPORTANT: CSS Modules Configuration for Docusaurus Compatibility
    //
    // Docusaurus uses css-loader with default exports (import styles from './file.module.css')
    // but css-loader v7+ defaults to named exports. We need to configure namedExport: false
    // to maintain compatibility with existing component imports.
    //
    // This configuration finds Storybook's existing CSS rule and modifies it to match
    // Docusaurus's pattern. Without this, CSS module imports return undefined, causing
    // runtime errors when components try to access style classes.
    //
    // WARNING: When upgrading Storybook, verify this configuration still works.
    // If Storybook's webpack config changes, this rule-finding logic may need updates.
    //
    // References:
    // - css-loader v7 breaking change: https://toknow.ai/posts/breaking-change-css-loader-v7/
    // - Webpack css-loader docs: https://webpack.js.org/loaders/css-loader/
    if (config.module && config.module.rules) {
      const cssRule = config.module.rules.find((rule) => {
        if (rule && typeof rule === 'object' && 'test' in rule) {
          return rule.test instanceof RegExp && rule.test.test('test.css');
        }
        return false;
      });

      if (cssRule && typeof cssRule === 'object' && 'use' in cssRule && Array.isArray(cssRule.use)) {
        cssRule.use.forEach((loader) => {
          if (loader && typeof loader === 'object' && 'loader' in loader &&
              typeof loader.loader === 'string' && loader.loader.includes('css-loader')) {
            if (!loader.options) {
              loader.options = {};
            }
            if (typeof loader.options === 'object') {
              loader.options.modules = {
                auto: true, // Enable CSS modules for files matching .module.css
                localIdentName: '[name]__[local]--[hash:base64:5]',
                namedExport: false, // Use default export instead of named exports (matches Docusaurus)
                exportLocalsConvention: 'as-is', // Keep class names as-is
              };
            }
          }
        });
      }
    }

    // Configure SVG handling with SVGR
    const fileLoaderRule = config.module?.rules?.find((rule: any) => {
      return rule && typeof rule === 'object' && rule.test instanceof RegExp && rule.test.test('.svg');
    });

    if (fileLoaderRule && typeof fileLoaderRule === 'object') {
      fileLoaderRule.exclude = /\.svg$/;
    }

    config.module?.rules?.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

export default config;