import React, { useEffect, useRef, useState, type FunctionComponent } from 'react';
import { Info } from 'lucide-react';
import { NeoButton } from '@site/src/components/NeoButton';
import styles from './styles.module.css';

/**
 * Small info icon-button shown next to the "Moderne Only" badge. Click opens a
 * compact popover (same interaction as the Copy-page menu — click-outside / Escape
 * to close) with a short explanation and a Contact Sales CTA, so the page itself
 * stays clean (nothing rendered inline until asked for).
 */
export const AccessInfoButton: FunctionComponent = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
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

  return (
    <span className={styles.accessInfo} ref={ref}>
      <button
        type="button"
        className={styles.accessInfoIcon}
        onClick={() => setOpen((v) => !v)}
        aria-label="About Moderne-only recipes"
        aria-expanded={open}
      >
        <Info size={15} />
      </button>
      {open && (
        <span className={styles.accessInfoPopover} role="dialog">
          <span className={styles.accessInfoText}>
            This recipe is proprietary to Moderne and runs on the Moderne platform — it isn’t part of the
            open-source catalog. Available with a Moderne subscription.
          </span>
          <NeoButton
            variant="primary"
            size="small"
            href="https://www.moderne.io/contact-us"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Sales
          </NeoButton>
        </span>
      )}
    </span>
  );
};
