import React, { type ComponentProps, type ReactNode } from 'react';
import MDXCode from '@theme-original/MDXComponents/Code';
import { useIsWindowsSelected } from '@site/src/utils/cliInstallOs';
import { BreaksContext, joinContinuations } from '@site/src/utils/joinContinuations';

type Props = ComponentProps<typeof MDXCode>;

// `\` continuations break when pasted into PowerShell or cmd, so Windows readers copy one line.
function JoinOnWindows(props: Props & { children: string }): ReactNode {
  const windows = useIsWindowsSelected();
  if (!windows) return <MDXCode {...props} />;
  const joined = joinContinuations(props.children);
  return (
    <BreaksContext.Provider value={joined.breaks}>
      <MDXCode {...props}>{joined.code}</MDXCode>
    </BreaksContext.Provider>
  );
}

export default function Code(props: Props): ReactNode {
  const { children, className } = props;
  return typeof children === 'string' && /\blanguage-(bash|shell|sh)\b/.test(className ?? '') && children.includes('\\\n')
    ? <JoinOnWindows {...props} children={children} />
    : <MDXCode {...props} />;
}
