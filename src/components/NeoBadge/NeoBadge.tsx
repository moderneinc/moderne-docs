import React from 'react';
import styles from './NeoBadge.module.css';
import clsx from 'clsx';

export interface NeoBadgeProps {
  /** Badge text content */
  children: React.ReactNode;

  /** Visual style variant */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';

  /** Size variant */
  size?: 'small' | 'medium';

  /** Optional icon element */
  icon?: React.ReactNode;

  /** Icon position relative to text */
  iconPosition?: 'left' | 'right';

  /** Click handler - if provided, badge becomes interactive */
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLSpanElement>) => void;

  /** Additional CSS classes */
  className?: string;

  /** Aria label for accessibility */
  ariaLabel?: string;

  /** Aria expanded state (for dropdown badges) */
  ariaExpanded?: boolean;

  /** Aria haspopup (for dropdown badges) */
  ariaHasPopup?: boolean;
}

/**
 * NeoBadge component following Moderne's Neo Design system
 * Based on Figma design with Neo Design CSS variables
 *
 * Badges are compact, pill-shaped elements used to display status, labels, or categories.
 * They can be static (span) or interactive (button) depending on whether onClick is provided.
 */
export const NeoBadge: React.FC<NeoBadgeProps> = ({
  children,
  variant = 'default',
  size = 'medium',
  icon,
  iconPosition = 'left',
  onClick,
  className,
  ariaLabel,
  ariaExpanded,
  ariaHasPopup,
}) => {
  const badgeClasses = clsx(
    styles.badge,
    styles[`badge--${variant}`],
    styles[`badge--${size}`],
    {
      [styles['badge--interactive']]: onClick,
      [styles['badge--icon-only']]: icon && !children,
    },
    className
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className={styles.badge__icon}>{icon}</span>
      )}
      {children && <span className={styles.badge__text}>{children}</span>}
      {icon && iconPosition === 'right' && (
        <span className={styles.badge__icon}>{icon}</span>
      )}
    </>
  );

  // Render as button if onClick is provided (interactive badge)
  if (onClick) {
    return (
      <button
        type="button"
        className={badgeClasses}
        onClick={onClick}
        aria-label={ariaLabel}
        aria-expanded={ariaExpanded}
        aria-haspopup={ariaHasPopup}
      >
        {content}
      </button>
    );
  }

  // Render as span (static badge)
  return (
    <span
      className={badgeClasses}
      aria-label={ariaLabel}
    >
      {content}
    </span>
  );
};

export default NeoBadge;
