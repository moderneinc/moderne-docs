import React, { createContext, useContext, type FunctionComponent } from 'react';
import CopyPageButton from 'docusaurus-plugin-copy-page-button/react';

/**
 * Set true around a subtree to suppress the copy-page button there — used by the generated category
 * index pages, which are navigation/card lists, not content worth copying for an LLM.
 */
export const SuppressCopyPageContext = createContext(false);

const DOCS_BASE_URL = 'https://docs.moderne.io';

/**
 * Where the View / Open-in-ChatGPT / Open-in-Claude actions fetch markdown from: the per-page markdown
 * that `docusaurus-plugin-llms` already publishes at `/<path>.md`.
 * (The clipboard "Copy" action always DOM-scrapes; this only redirects View + the AI links.)
 */
const markdownUrlFor = (pageUrl: string): string => {
  const path = new URL(pageUrl, DOCS_BASE_URL).pathname.replace(/\/$/, '');
  return `${DOCS_BASE_URL}${path}.md`;
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
