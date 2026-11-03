import React, { useContext, type ComponentProps, type CSSProperties, type ReactNode } from 'react';
import Token from '@theme-original/CodeBlock/Line/Token';
import { BreaksContext, splitAtBreaks } from '@site/src/utils/joinContinuations';

type Props = ComponentProps<typeof Token>;

export default function TokenWrapper(props: Props): ReactNode {
  const breaks = useContext(BreaksContext);
  if (!breaks || typeof props.children !== 'string') return <Token {...props} />;
  const lineBreaks = breaks.get(props.line.map((t) => t.content).join(''));
  if (!lineBreaks) return <Token {...props} />;
  const index = props.line.indexOf(props.token);
  const start = props.line.slice(0, index).reduce((n, t) => n + t.content.length, 0);
  const parts = splitAtBreaks(props.children, start, lineBreaks, (b) => (
    <span key={b.offset} className="code-continuation" style={{ '--indent': `${b.indent}ch` } as CSSProperties} />
  ));
  return parts ? <Token {...props}>{parts}</Token> : <Token {...props} />;
}
