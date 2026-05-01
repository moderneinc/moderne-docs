import React from 'react';
import type { ReactNode } from 'react';
import clsx from 'clsx';
import AdmonitionLayout from '@theme/Admonition/Layout';
import { Info } from 'lucide-react';

const infimaClassName = 'alert alert--info';

const defaultProps = {
  icon: <Info size={18} strokeWidth={2} />,
  title: 'info',
};

export default function AdmonitionTypeInfo(
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
