import React from 'react';
import type { ReactNode } from 'react';
import clsx from 'clsx';
import AdmonitionLayout from '@theme/Admonition/Layout';

const infimaClassName = 'alert alert--info';

function SummaryIcon(): ReactNode {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H4V4Zm0 3h16v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Zm5 3a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H9Zm0 4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2H9Z" />
    </svg>
  );
}

const defaultProps = {
  icon: <SummaryIcon />,
  title: 'Session summary',
};

export default function AdmonitionTypeSummary(
  props: React.ComponentProps<typeof AdmonitionLayout>,
): ReactNode {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}
