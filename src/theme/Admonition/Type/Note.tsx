import React from 'react';
import type { ReactNode } from 'react';
import clsx from 'clsx';
import AdmonitionLayout from '@theme/Admonition/Layout';
import { StickyNote } from 'lucide-react';

const infimaClassName = 'alert alert--secondary';

const defaultProps = {
  icon: <StickyNote size={18} strokeWidth={2} />,
  title: 'note',
};

export default function AdmonitionTypeNote(
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
