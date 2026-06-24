import React, { createContext, useContext, type FunctionComponent } from 'react';
import CopyPageButton from 'docusaurus-plugin-copy-page-button/react';

/**
 * Set true around a subtree to suppress the copy-page button there — used by the generated category
 * index pages, which are navigation/card lists, not content worth copying for an LLM.
 */
export const SuppressCopyPageContext = createContext(false);

/**
 * The configured copy / view-as-markdown / open-in-LLM button, shared by the breadcrumb-row placement
 * (DocBreadcrumbs swizzle) and the no-breadcrumb fallback (DocItem/Layout swizzle).
 *
 * `generateMarkdownRoutes` emits a `/path.md` per page that the View + AI-tool actions point at.
 * FOLLOW-UP: recipe pages are React components, so that generated markdown is DOM-scraped (noisy). Once
 * rewrite-recipe-markdown-generator (PR #344) emits a clean `.md` per recipe, pass a `markdownUrl`
 * function here that maps recipe-catalog pages to it — landed together so the URLs never 404.
 */
export const CopyPageAction: FunctionComponent = () => {
  if (useContext(SuppressCopyPageContext)) {
    return null;
  }
  return <CopyPageButton generateMarkdownRoutes enabledActions={['copy', 'view', 'chatgpt', 'claude']} />;
};
