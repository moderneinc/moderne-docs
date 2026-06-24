import React, { createContext, useContext, type FunctionComponent } from 'react';
import CopyPageButton from 'docusaurus-plugin-copy-page-button/react';

/**
 * Set true around a subtree to suppress the copy-page button there — used by the generated category
 * index pages, which are navigation/card lists, not content worth copying for an LLM.
 */
export const SuppressCopyPageContext = createContext(false);

const GITHUB_RAW_DOCS = 'https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs';

/**
 * Where the View / Open-in-ChatGPT / Open-in-Claude actions fetch markdown from:
 * - Recipe-catalog pages are generated React-component MDX, so DOM-scraping is noisy — point at the
 *   committed markdown source on GitHub (always exists on `main`; no extra files to build/serve).
 * - Every other page reuses the per-page markdown that `docusaurus-plugin-llms` already publishes at
 *   `/<path>.md`.
 * (The clipboard "Copy" action always DOM-scrapes; this only redirects View + the AI links.)
 */
const markdownUrlFor = (pageUrl: string): string => {
  const path = new URL(pageUrl, 'https://docs.moderne.io').pathname.replace(/\/$/, '');
  return path.includes('/recipe-catalog/') ? `${GITHUB_RAW_DOCS}${path}.md` : `${path}.md`;
};

/**
 * The configured copy / view-as-markdown / open-in-LLM button, shared by the breadcrumb-row placement
 * (DocBreadcrumbs swizzle) and the no-breadcrumb fallback (DocItem/Layout swizzle).
 */
export const CopyPageAction: FunctionComponent = () => {
  if (useContext(SuppressCopyPageContext)) {
    return null;
  }
  return (
    <CopyPageButton enabledActions={['copy', 'view', 'chatgpt', 'claude']} markdownUrl={markdownUrlFor} />
  );
};
