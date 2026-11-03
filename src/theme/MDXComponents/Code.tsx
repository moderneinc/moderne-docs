import React, { type ComponentProps, type ReactNode } from 'react';
import clsx from 'clsx';
import MDXCode from '@theme-original/MDXComponents/Code';
import { useIsWindowsSelected } from '@site/src/utils/cliInstallOs';
import { BreaksContext, joinContinuations } from '@site/src/utils/joinContinuations';

type Props = ComponentProps<typeof MDXCode>;

// ```bash join-on-windows: `\` continuations break when pasted into PowerShell or cmd.
function JoinOnWindows({ children, className, ...props }: Props): ReactNode {
  const windows = useIsWindowsSelected();
  const code = clsx(className, 'wrap-code');
  if (!windows || typeof children !== 'string') {
    return <MDXCode {...props} className={code}>{children}</MDXCode>;
  }
  const joined = joinContinuations(children);
  return (
    <BreaksContext.Provider value={joined.breaks}>
      <MDXCode {...props} className={code}>{joined.code}</MDXCode>
    </BreaksContext.Provider>
  );
}

export default function Code(props: Props): ReactNode {
  return /\bjoin-on-windows\b/.test(props.metastring ?? '') ? <JoinOnWindows {...props} /> : <MDXCode {...props} />;
}
