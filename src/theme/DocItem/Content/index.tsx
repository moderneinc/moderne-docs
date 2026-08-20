import { type ReactNode } from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDoc, useSidebarBreadcrumbs } from '@docusaurus/plugin-content-docs/client';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';

/** Ejected from @docusaurus/theme-classic (v3.10.2); the data attributes below are the only change. */

const RECIPE_CATALOG_PATH = '/user-documentation/recipes/recipe-catalog/';

/** Upstream: supplies the h1 when front matter declares the title instead of the markdown. */
function useSyntheticTitle(): string | null {
  const { metadata, frontMatter, contentTitle } = useDoc();
  const shouldRender = !frontMatter.hide_title && typeof contentTitle === 'undefined';
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}

/** The heading results are grouped under, taken from the first breadcrumb. */
function useSearchSection(): string {
  const breadcrumbs = useSidebarBreadcrumbs();
  const root = breadcrumbs?.[0];
  if (root && (root.type === 'category' || root.type === 'link') && root.label) {
    return root.label;
  }
  return 'Documentation';
}

export default function DocItemContent({ children }: { children: ReactNode }): ReactNode {
  const syntheticTitle = useSyntheticTitle();
  const section = useSearchSection();
  const { metadata } = useDoc();
  const category = metadata.permalink.startsWith(RECIPE_CATALOG_PATH) ? 'recipes' : 'documentation';

  return (
    <div
      className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}
      data-pagefind-body=""
      data-pagefind-meta={`section:${section}`}
      data-pagefind-filter={`category:${category}`}>
      {syntheticTitle && (
        <header>
          <Heading as="h1">{syntheticTitle}</Heading>
        </header>
      )}
      <MDXContent>{children}</MDXContent>
    </div>
  );
}
