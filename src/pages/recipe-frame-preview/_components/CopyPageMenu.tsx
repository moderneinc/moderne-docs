import React, { useState, type FunctionComponent } from 'react';
import { NeoButton } from '@site/src/components/NeoButton';
import { Check, Copy } from 'lucide-react';

interface CopyPageMenuProps {
  /** Raw markdown for this recipe page. */
  markdown: string;
}

/**
 * AI-readiness action: copy the page as clean Markdown. Standup feedback was that
 * "open in ChatGPT / Claude" isn't particularly useful and full markdown is always
 * the more usable AI reference — so this is a single Copy-as-Markdown action rather
 * than a dropdown of LLM links. (Phase 2: back it with a per-page `.md` / llms.txt
 * endpoint so the copy is the canonical source the model ingests.)
 */
export const CopyPageMenu: FunctionComponent<CopyPageMenuProps> = ({ markdown }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be unavailable (e.g. insecure context) — fail quietly in the mockup.
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
