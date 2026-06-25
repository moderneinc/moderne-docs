import React, { type ReactNode } from 'react';
import Layout from '@theme-original/DocItem/Layout';
import type LayoutType from '@theme/DocItem/Layout';
import type { WrapperProps } from '@docusaurus/types';
import { useSidebarBreadcrumbs } from '@docusaurus/plugin-content-docs/client';
import { CopyPageAction } from '@site/src/components/CopyPageAction';
import styles from './styles.module.css';

type Props = WrapperProps<typeof LayoutType>;

/**
 * The copy-page button normally lives on the breadcrumb row (see the DocBreadcrumbs swizzle). Pages
 * that aren't in a sidebar have no breadcrumbs, so here we provide a fallback: overlay the button at
 * the top-right of the doc body (height:0, so it adds no vertical space) only when breadcrumbs are
 * absent — keeping coverage universal without double-rendering it.
 */
export default function DocItemLayoutWrapper(props: Props): ReactNode {
  const breadcrumbs = useSidebarBreadcrumbs();
  const hasBreadcrumbs = Boolean(breadcrumbs && breadcrumbs.length > 0);

  return (
    <>
      {!hasBreadcrumbs && (
        <div className={styles.copyPageRow}>
          <CopyPageAction />
        </div>
      )}
      <Layout {...props} />
    </>
  );
}
