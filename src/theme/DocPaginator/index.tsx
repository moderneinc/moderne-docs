/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import type { Props } from '@theme/DocPaginator';
import clsx from 'clsx';
import { type ReactNode } from 'react';

import styles from './styles.module.css';

export default function DocPaginator(props: Props): ReactNode {
  const { previous, next, className } = props;

  return (
    <nav
      className={clsx(styles.paginationNav, 'pagination-nav', className)}
      aria-label={translate({
        id: 'theme.docs.paginator.navAriaLabel',
        message: 'Docs pages',
        description: 'The ARIA label for the docs pagination',
      })}>
      {previous && (
        <Link
          className={clsx(styles.paginationLink, styles.paginationLinkPrev)}
          to={previous.permalink}>
          <span className={styles.arrow}>←</span> {previous.title}
        </Link>
      )}
      {next && (
        <Link
          className={clsx(styles.paginationLink, styles.paginationLinkNext)}
          to={next.permalink}>
          {next.title} <span className={styles.arrow}>→</span>
        </Link>
      )}
    </nav>
  );
}
