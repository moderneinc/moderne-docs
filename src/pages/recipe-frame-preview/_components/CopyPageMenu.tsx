import React, { useEffect, useRef, useState, type FunctionComponent } from 'react';
import { NeoButton } from '@site/src/components/NeoButton';
import { Check, ChevronDown, Copy, FileText, Sparkles } from 'lucide-react';
import styles from './styles.module.css';

interface CopyPageMenuProps {
  /** Raw markdown for this recipe page (used by "Copy as Markdown"). */
  markdown: string;
  /** Canonical page URL handed to the LLM "open in" actions. */
  pageUrl: string;
  /** Human-readable recipe name used in the LLM prompt. */
  displayName: string;
}

/**
 * The AI-readiness "Copy page" action menu — Copy as Markdown + Open in Claude /
 * ChatGPT. "Copy as Markdown" is fully functional with the hardcoded markdown.
 *
 * NOTE (phase 2): the "Open in…" links pass the page URL so the assistant can
 * fetch it. The robust version would point at a clean per-page `.md` endpoint /
 * llms.txt so the LLM ingests markdown rather than rendered HTML.
 */
export const CopyPageMenu: FunctionComponent<CopyPageMenuProps> = ({ markdown, pageUrl, displayName }) => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be unavailable (e.g. insecure context) — fail quietly in the mockup.
    }
  };

  const prompt = `Explain the OpenRewrite recipe "${displayName}". Reference its documentation at ${pageUrl}`;
  const claudeUrl = `https://claude.ai/new?q=${encodeURIComponent(prompt)}`;
  const chatGptUrl = `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`;

  return (
    <div className={styles.copyMenu} ref={containerRef}>
      <NeoButton
        variant="outline"
        size="small"
        icon={<ChevronDown size={14} />}
        iconPosition="right"
        onClick={() => setOpen((v) => !v)}
        aria-label="Copy page options"
      >
        Copy page
      </NeoButton>

      {open && (
        <div className={styles.copyMenuPopover} role="menu">
          <button type="button" className={styles.copyMenuItem} role="menuitem" onClick={handleCopy}>
            <span className={styles.copyMenuItemIcon}>
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </span>
            <span className={styles.copyMenuItemBody}>
              <span className={styles.copyMenuItemTitle}>{copied ? 'Copied!' : 'Copy as Markdown'}</span>
              <span className={styles.copyMenuItemHint}>Clean markdown for prompts and notes</span>
            </span>
          </button>

          <a
            className={styles.copyMenuItem}
            role="menuitem"
            href={claudeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.copyMenuItemIcon}>
              <Sparkles size={16} />
            </span>
            <span className={styles.copyMenuItemBody}>
              <span className={styles.copyMenuItemTitle}>Open in Claude</span>
              <span className={styles.copyMenuItemHint}>Ask Claude about this recipe</span>
            </span>
          </a>

          <a
            className={styles.copyMenuItem}
            role="menuitem"
            href={chatGptUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.copyMenuItemIcon}>
              <FileText size={16} />
            </span>
            <span className={styles.copyMenuItemBody}>
              <span className={styles.copyMenuItemTitle}>Open in ChatGPT</span>
              <span className={styles.copyMenuItemHint}>Ask ChatGPT about this recipe</span>
            </span>
          </a>
        </div>
      )}
    </div>
  );
};
