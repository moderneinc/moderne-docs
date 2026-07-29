import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { MessageCircleIcon } from 'lucide-react';
import EditThisPage from '@theme/EditThisPage';
import LastUpdated from '@theme/LastUpdated';
import type { Props } from '@theme/EditMetaRow';
import styles from './styles.module.css';

/**
 * Swizzled to place a "Give feedback" link beside "Edit this page" in the doc
 * footer's edit-meta row (relocated out of the site footer).
 */
export default function EditMetaRow({
  className,
  editUrl,
  lastUpdatedAt,
  lastUpdatedBy,
}: Props): ReactNode {
  return (
    <div className={clsx('row', className)}>
      <div className={clsx('col', styles.noPrint, styles.editCol)}>
        {editUrl && <EditThisPage editUrl={editUrl} />}
        <Link
          to="mailto:support@moderne.io"
          className={styles.feedback}
          aria-label="Give feedback"
        >
          <MessageCircleIcon size={16} />
          Give feedback
        </Link>
      </div>
      <div className={clsx('col', styles.lastUpdated)}>
        {(lastUpdatedAt || lastUpdatedBy) && (
          <LastUpdated
            lastUpdatedAt={lastUpdatedAt}
            lastUpdatedBy={lastUpdatedBy}
          />
        )}
      </div>
    </div>
  );
}
