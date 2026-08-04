import { useCurrentSidebarCategory, useSidebarBreadcrumbs } from '@docusaurus/plugin-content-docs/client';
import { PageMetadata } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import { SuppressCopyPageContext } from '@site/src/components/CopyPageAction';
import DocCardList from '@theme/DocCardList';
import type { Props } from '@theme/DocCategoryGeneratedIndexPage';
import DocPaginator from '@theme/DocPaginator';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocVersionBanner from '@theme/DocVersionBanner';
import Heading from '@theme/Heading';
import { type FunctionComponent, type ReactNode } from 'react';

import styles from './styles.module.css';

const DocCategoryGeneratedIndexPageMetadata: FunctionComponent<Props> = ({
  categoryGeneratedIndex,
}) => {
  return (
    <PageMetadata
      title={categoryGeneratedIndex.title}
      description={categoryGeneratedIndex.description}
      keywords={categoryGeneratedIndex.keywords}
      // NOTE: TODO below is from upstream Docusaurus theme-classic, copied during swizzling
      // TODO `require` this?
      image={useBaseUrl(categoryGeneratedIndex.image)}
    />
  );
};

DocCategoryGeneratedIndexPageMetadata.displayName = 'DocCategoryGeneratedIndexPageMetadata';

const DocCategoryGeneratedIndexPageContent: FunctionComponent<Props> = ({
  categoryGeneratedIndex,
}) => {
  const category = useCurrentSidebarCategory();
  const breadcrumbs = useSidebarBreadcrumbs();
  const isTopLevel = (breadcrumbs?.length ?? 0) <= 1;
  return (
    <div className={`${styles.generatedIndexPage} ${isTopLevel ? styles.topLevelCategory : ''}`}>
      <DocVersionBanner />
      <div className={styles.content}>
        {/* Category index pages are card lists — no copy-page button on their breadcrumb row. */}
        <SuppressCopyPageContext.Provider value={true}>
          <DocBreadcrumbs />
        </SuppressCopyPageContext.Provider>
        <DocVersionBadge />
        <header className={styles.header}>
          <Heading as="h1" className={styles.title}>
            {categoryGeneratedIndex.title}
          </Heading>
          {categoryGeneratedIndex.description && (
            <p>{categoryGeneratedIndex.description}</p>
          )}
        </header>
        <article>
          <DocCardList items={category.items} className={styles.list} />
        </article>
        <footer>
          <DocPaginator
            previous={categoryGeneratedIndex.navigation.previous}
            next={categoryGeneratedIndex.navigation.next}
          />
        </footer>
      </div>
    </div>
  );
};

DocCategoryGeneratedIndexPageContent.displayName = 'DocCategoryGeneratedIndexPageContent';

const DocCategoryGeneratedIndexPage: FunctionComponent<Props> = (props) => {
  return (
    <>
      <DocCategoryGeneratedIndexPageMetadata {...props} />
      <DocCategoryGeneratedIndexPageContent {...props} />
    </>
  );
};

DocCategoryGeneratedIndexPage.displayName = 'DocCategoryGeneratedIndexPage';

export default DocCategoryGeneratedIndexPage;
