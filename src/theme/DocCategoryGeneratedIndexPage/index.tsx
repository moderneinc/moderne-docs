import { useCurrentSidebarCategory, useSidebarBreadcrumbs } from '@docusaurus/plugin-content-docs/client';
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
      // NOTE: TODO below is from upstream Docusaurus theme-classic, copied during swizzling
      // TODO `require` this?
      image={useBaseUrl(categoryGeneratedIndex.image)}
    />
  );
};

DocCategoryGeneratedIndexPageMetadata.displayName = 'DocCategoryGeneratedIndexPageMetadata';

type WaveConfig = {file: string; flip?: boolean};

const WAVE_IMAGES: string[] = [
  'wave-14.png',
  'wave-19.png',
  'wave-20.png',
  'wave-23.png',
  'wave-26.png',
  'wave-27.png',
  'wave-36.png',
  'wave-45.png',
];

const TITLE_OVERRIDES: Record<string, WaveConfig> = {
  'Moderne Platform': {file: 'wave-23.png'},
  'Moddy': {file: 'wave-19.png'},
  'Moderne IDE plugins': {file: 'wave-5.png'},
  'IDE plugins': {file: 'wave-5.png'},
  'Moderne CLI': {file: 'wave-49.png'},
  'CLI': {file: 'wave-49.png'},
  'Recipes': {file: 'wave-37.png'},
};

function pickWaveForTitle(title: string): WaveConfig {
  if (TITLE_OVERRIDES[title]) return TITLE_OVERRIDES[title];
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = (hash * 31 + title.charCodeAt(i)) >>> 0;
  }
  return {file: WAVE_IMAGES[hash % WAVE_IMAGES.length]};
}

const DocCategoryGeneratedIndexPageContent: FunctionComponent<Props> = ({
  categoryGeneratedIndex,
}) => {
  const category = useCurrentSidebarCategory();
  const breadcrumbs = useSidebarBreadcrumbs();
  const isTopLevel = (breadcrumbs?.length ?? 0) <= 1;
  const waveConfig = pickWaveForTitle(categoryGeneratedIndex.title);
  const headerStyle = {
    '--header-wave-image': `url('/img/waves/${waveConfig.file}')`,
    '--header-wave-transform': waveConfig.flip ? 'scaleX(-1)' : 'none',
  } as React.CSSProperties;
  return (
    <div className={`${styles.generatedIndexPage} ${isTopLevel ? styles.topLevelCategory : ''}`}>
      <DocVersionBanner />
      <div className={styles.content}>
        <DocBreadcrumbs />
        <DocVersionBadge />
        <header className={styles.header} style={headerStyle}>
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
