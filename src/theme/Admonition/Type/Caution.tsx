import React from 'react';
import type { ReactNode } from 'react';
import clsx from 'clsx';
import AdmonitionLayout from '@theme/Admonition/Layout';
import { TriangleAlert } from 'lucide-react';

const infimaClassName = 'alert alert--warning';

const defaultProps = {
  icon: <TriangleAlert size={18} strokeWidth={2} />,
  title: 'caution',
};

export default function AdmonitionTypeCaution(
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
