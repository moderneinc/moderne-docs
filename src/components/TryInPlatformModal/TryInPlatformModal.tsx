import React, { useEffect, useCallback, useRef, type FunctionComponent } from 'react';
import { ModButton } from '@site/src/components/ModButton';
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
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

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

  useEffect(() => {
    if (!isOpen) return undefined;
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    modalRef.current?.focus();
    return () => {
      previousFocusRef.current?.focus();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div
        ref={modalRef}
        tabIndex={-1}
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
          <ModButton variant="secondary" onClick={onClose}>
            Not now
          </ModButton>
          <ModButton variant="primary" onClick={onConfirm}>
            Continue to sign in
          </ModButton>
        </div>
      </div>
    </>
  );
};

TryInPlatformModal.displayName = 'TryInPlatformModal';

export { TryInPlatformModal };
