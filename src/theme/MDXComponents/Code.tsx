import React, { type ComponentProps, type ReactNode } from 'react';
import clsx from 'clsx';
import MDXCode from '@theme-original/MDXComponents/Code';
import { joinContinuations, useIsWindowsSelected } from '@site/src/utils/cliInstallOs';

type Props = ComponentProps<typeof MDXCode>;

// ```bash join-on-windows: `\` continuations break when pasted into PowerShell or cmd.
function JoinOnWindows({ children, className, ...props }: Props): ReactNode {
  const windows = useIsWindowsSelected();
  return (
    <MDXCode {...props} className={clsx(className, 'wrap-code')}>
      {windows && typeof children === 'string' ? joinContinuations(children) : children}
    </MDXCode>
  );
}

export default function Code(props: Props): ReactNode {
  return /\bjoin-on-windows\b/.test(props.metastring ?? '') ? <JoinOnWindows {...props} /> : <MDXCode {...props} />;
}
