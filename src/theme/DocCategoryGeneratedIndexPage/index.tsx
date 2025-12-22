import { useCurrentSidebarCategory } from '@docusaurus/plugin-content-docs/client';
import { PageMetadata } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
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
  return (
    <div className={styles.generatedIndexPage}>
      <DocVersionBanner />
      <div className={styles.content}>
        <DocBreadcrumbs />
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
