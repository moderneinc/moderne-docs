import React, { useState, useRef, useEffect, type FunctionComponent } from 'react';
import { Copy, Check } from 'lucide-react';
import styles from '../shared/styles.module.css';

/** Shared clipboard button used for recipe IDs and data-table IDs. */
export const CopyButton: FunctionComponent<{ value: string; label: string }> = ({ value, label }) => {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timerRef.current), []);
  return (
    <button
      type="button"
      className={styles.copyId}
      aria-label={label}
      onClick={() => {
        navigator.clipboard
          ?.writeText(value)
          .then(() => {
            setCopied(true);
            clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => setCopied(false), 2000);
          })
          .catch(() => {
            /* clipboard can be unavailable in insecure contexts — fail quietly */
          });
      }}
    >
      {copied ? <Check size={14} data-testid="copy-check" /> : <Copy size={14} />}
    </button>
  );
};
