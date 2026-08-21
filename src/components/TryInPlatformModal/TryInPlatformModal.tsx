import React, { useEffect, useCallback, type FunctionComponent } from 'react';
import styles from './TryInPlatformModal.module.css';

export type TryInPlatformModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  recipeName: string;
};

const TryInPlatformModal: FunctionComponent<TryInPlatformModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  recipeName,
}) => {
  const handleEscapeKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (!isOpen) return undefined;
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, handleEscapeKey]);

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="try-in-platform-title"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="try-in-platform-title" className={styles.title}>
          Here&apos;s what happens next
        </h2>
        <ol className={styles.steps}>
          <li>Sign in to Moderne (GitHub, Bitbucket, or GitLab)</li>
          <li>
            Run <strong>{recipeName}</strong> on a curated sample repository
          </li>
          <li>Explore the results with a quick guided tour</li>
        </ol>
        <div className={styles.actions}>
          <button type="button" className={styles.secondaryButton} onClick={onClose}>
            Not now
          </button>
          <button type="button" className={styles.primaryButton} onClick={onConfirm}>
            Continue to sign in
          </button>
        </div>
      </div>
    </>
  );
};

TryInPlatformModal.displayName = 'TryInPlatformModal';

export { TryInPlatformModal };
