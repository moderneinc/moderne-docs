import React from 'react';
import type { ReactNode } from 'react';
import clsx from 'clsx';
import AdmonitionLayout from '@theme/Admonition/Layout';
import { OctagonAlert } from 'lucide-react';

const infimaClassName = 'alert alert--danger';

const defaultProps = {
  icon: <OctagonAlert size={18} strokeWidth={2} />,
  title: 'danger',
};

export default function AdmonitionTypeDanger(
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
