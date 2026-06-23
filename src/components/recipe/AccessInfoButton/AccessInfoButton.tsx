import React, { type FunctionComponent } from 'react';
import { Info } from 'lucide-react';
import { NeoButton } from '@site/src/components/NeoButton';
import styles from '../shared/styles.module.css';

/** Info icon-button beside the "Moderne Only" badge; popover opens on hover and focus. */
export const AccessInfoButton: FunctionComponent = () => (
  <span className={styles.accessInfo}>
    <button type="button" className={styles.accessInfoIcon} aria-label="About Moderne-only recipes" aria-haspopup="dialog">
      <Info size={15} />
    </button>
    <span className={styles.accessInfoPopover}>
      <span className={styles.accessInfoText}>
        This recipe is proprietary to Moderne and runs on the Moderne platform or CLI — it isn’t part of the
        open-source catalog. Available with a Moderne subscription.
      </span>
      <NeoButton variant="primary" size="small" href="https://www.moderne.io/contact-us" target="_blank" rel="noopener noreferrer">
        Contact Sales
      </NeoButton>
    </span>
  </span>
);
