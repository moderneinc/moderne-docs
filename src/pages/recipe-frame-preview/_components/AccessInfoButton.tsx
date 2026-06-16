import React, { type FunctionComponent } from 'react';
import { Info } from 'lucide-react';
import { NeoButton } from '@site/src/components/NeoButton';
import styles from './styles.module.css';

/**
 * ⚠ CUSTOM REACT + CSS — not a stock Docusaurus/Moderne component.
 *
 * Info icon-button beside the "Moderne Only" badge whose popover opens on HOVER
 * (and on keyboard focus, via :focus-within, so tab/tap users can reach it too).
 * A hover popover that contains an interactive button isn't a standard pattern —
 * Docusaurus ships no hover-popover — so this is hand-built. Flagged accordingly.
 */
export const AccessInfoButton: FunctionComponent = () => (
  <span className={styles.accessInfo}>
    <button type="button" className={styles.accessInfoIcon} aria-label="About Moderne-only recipes">
      <Info size={15} />
    </button>
    <span className={styles.accessInfoPopover}>
      <span className={styles.accessInfoText}>
        This recipe is proprietary to Moderne and runs on the Moderne platform or CLI — it isn’t part of the
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
  </span>
);
