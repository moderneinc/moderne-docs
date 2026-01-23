import {type FunctionComponent} from 'react';
import {useSidebarBreadcrumbs} from '@docusaurus/plugin-content-docs/client';
import DocBreadcrumbsStructuredData from '@theme/DocBreadcrumbs/StructuredData';

const DocBreadcrumbsWrapper: FunctionComponent = () => {
  const breadcrumbs = useSidebarBreadcrumbs();

  if (!breadcrumbs) {
    return null;
  }

  return <DocBreadcrumbsStructuredData breadcrumbs={breadcrumbs} />;
};

DocBreadcrumbsWrapper.displayName = 'DocBreadcrumbsWrapper';

export default DocBreadcrumbsWrapper;
