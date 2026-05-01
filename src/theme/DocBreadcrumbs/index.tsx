import {type FunctionComponent} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useSidebarBreadcrumbs} from '@docusaurus/plugin-content-docs/client';
import DocBreadcrumbsStructuredData from '@theme/DocBreadcrumbs/StructuredData';
import {House, ChevronRight} from 'lucide-react';
import styles from './styles.module.css';

const DocBreadcrumbsWrapper: FunctionComponent = () => {
  const breadcrumbs = useSidebarBreadcrumbs();
  const homeHref = useBaseUrl('/');

  if (!breadcrumbs) {
    return null;
  }

  return (
    <>
      <DocBreadcrumbsStructuredData breadcrumbs={breadcrumbs} />
      <nav className={styles.breadcrumbs} aria-label="Breadcrumbs">
        <Link to={homeHref} className={styles.homeLink} aria-label="Home page">
          <House size={16} strokeWidth={2} aria-hidden="true" />
        </Link>
        <ChevronRight size={16} strokeWidth={2} className={styles.separator} aria-hidden="true" />
        {breadcrumbs.map((item, idx) => {
          const isLast = idx === breadcrumbs.length - 1;
          const label = item.type === 'category' || item.type === 'link' ? item.label : '';
          const href = 'href' in item ? item.href : undefined;

          return (
            <span key={idx} className={styles.crumb}>
              {isLast ? (
                <span className={styles.current} aria-current="page">{label}</span>
              ) : href ? (
                <Link to={href} className={styles.link}>{label}</Link>
              ) : (
                <span className={styles.link}>{label}</span>
              )}
              {!isLast && (
                <ChevronRight size={16} strokeWidth={2} className={styles.separator} aria-hidden="true" />
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
};

DocBreadcrumbsWrapper.displayName = 'DocBreadcrumbsWrapper';

export default DocBreadcrumbsWrapper;
