import React from 'react';
import styles from './styles.module.css';

interface FrostedGlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function FrostedGlassCard({ children, className }: FrostedGlassCardProps): JSX.Element {
  return (
    <div className={`${styles.card} ${className || ''}`}>
      <div className={styles.cardInner}>
        {children}
      </div>
    </div>
  );
}
