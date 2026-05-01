import React from 'react';
import type { ReactNode } from 'react';
import clsx from 'clsx';
import AdmonitionLayout from '@theme/Admonition/Layout';
import { Lightbulb } from 'lucide-react';

const infimaClassName = 'alert alert--success';

const defaultProps = {
  icon: <Lightbulb size={18} strokeWidth={2} />,
  title: 'tip',
};

export default function AdmonitionTypeTip(
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
