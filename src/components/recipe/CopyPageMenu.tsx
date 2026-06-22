import React, { useState, useRef, useEffect, type FunctionComponent } from 'react';
import { NeoButton } from '@site/src/components/NeoButton';
import { Check, Copy } from 'lucide-react';

interface CopyPageMenuProps {
  /** Raw markdown for this recipe page. */
  markdown: string;
}

/**
 * AI-readiness action: copy the page as clean Markdown. (Phase 2: back it with a
 * per-page `.md` / llms.txt endpoint so the copy is the canonical source the
 * model ingests.)
 */
export const CopyPageMenu: FunctionComponent<CopyPageMenuProps> = ({ markdown }) => {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timerRef.current), []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable (insecure context) — fail quietly */
    }
  };

  return (
    <NeoButton
      variant="outline"
      size="small"
      icon={copied ? <Check size={14} /> : <Copy size={14} />}
      iconPosition="left"
      onClick={handleCopy}
    >
      {copied ? 'Copied!' : 'Copy as Markdown'}
    </NeoButton>
  );
};
