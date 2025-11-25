import React, {type ReactNode} from 'react';
import {useSidebarBreadcrumbs} from '@docusaurus/plugin-content-docs/client';
import {useHomePageRoute} from '@docusaurus/theme-common/internal';
import DocBreadcrumbsStructuredData from '@theme/DocBreadcrumbs/StructuredData';
import NeoBreadcrumbs from '@site/src/components/NeoBreadcrumbs';

export default function DocBreadcrumbsWrapper(): ReactNode {
  const breadcrumbs = useSidebarBreadcrumbs();
  const homePageRoute = useHomePageRoute();

  if (!breadcrumbs) {
    return null;
  }

  // Transform Docusaurus breadcrumbs to our custom component format
  const items = breadcrumbs.map((item) => {
    const href =
      item.type === 'category' && item.linkUnlisted
        ? undefined
        : item.href;

    return {
      label: item.label,
      href,
    };
  });

  return (
    <>
      <DocBreadcrumbsStructuredData breadcrumbs={breadcrumbs} />
      <NeoBreadcrumbs items={items} showHomeIcon={!!homePageRoute} />
    </>
  );
}
