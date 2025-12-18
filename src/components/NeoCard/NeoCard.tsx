import React from 'react';
import styles from './NeoCard.module.css';

export interface NeoCardProps {
  /**
   * Card title text
   */
  title: string;

  /**
   * Card description text
   */
  description: string;

  /**
   * Optional icon element (recommended 16x16 or 20x20)
   */
  icon?: React.ReactNode;

  /**
   * Optional gem/logo element (20x20)
   */
  gem?: React.ReactNode;

  /**
   * Optional action buttons (max 2 recommended)
   */
  buttons?: React.ReactNode;

  /**
   * Visual state of the card
   * @default 'default'
   */
  state?: 'default' | 'active' | 'focused' | 'disabled';

  /**
   * Click handler - makes the card interactive
   */
  onClick?: () => void;

  /**
   * Disabled state - prevents interaction
   * @default false
   */
  disabled?: boolean;

  /**
   * Additional CSS class name
   */
  className?: string;

  /**
   * Test ID for automated testing
   */
  'data-testid'?: string;
}

/**
 * NeoCard - Large Card Component
 *
 * A flexible card component based on the Neo Design System.
 * Supports multiple states (default, active, focused, disabled) and
 * automatic dark mode theming.
 *
 * @example
 * ```tsx
 * <NeoCard
 *   title="Code Remix"
 *   description="Weekly live sessions covering updates and key topics"
 *   icon={<Icon />}
 *   gem={<GemLogo />}
 *   buttons={<><Button>CTA 1</Button><Button>CTA 2</Button></>}
 *   onClick={() => handleClick()}
 * />
 * ```
 */
export const NeoCard: React.FC<NeoCardProps> = ({
  title,
  description,
  icon,
  gem,
  buttons,
  state = 'default',
  onClick,
  disabled = false,
  className,
  'data-testid': testId,
}) => {
  // Determine if card should be interactive
  const isInteractive = !disabled && !!onClick;
  const effectiveState = disabled ? 'disabled' : state;

  // Build class names
  const cardClasses = [
    styles.card,
    styles[`card--${effectiveState}`],
    isInteractive && styles['card--interactive'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Handle click with disabled check
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  // Handle keyboard interaction
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!disabled && onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  };

  // Determine the element type and props
  const ElementType = isInteractive ? 'button' : 'div';
  const interactiveProps = isInteractive
    ? {
        onClick: handleClick,
        onKeyDown: handleKeyDown,
        tabIndex: 0,
        role: 'button',
        'aria-disabled': disabled,
      }
    : {};

  return (
    <ElementType
      className={cardClasses}
      data-testid={testId}
      {...interactiveProps}
    >
      {/* Content Section */}
      <div className={styles.card__content}>
        {/* Header with icon, gem, and title */}
        <div className={styles.card__header}>
          {icon && <div className={styles.card__icon}>{icon}</div>}
          {gem && <div className={styles.card__gem}>{gem}</div>}
          <h3 className={styles.card__title}>{title}</h3>
        </div>

        {/* Description */}
        <p className={styles.card__description}>{description}</p>
      </div>

      {/* Action Buttons Section */}
      {buttons && <div className={styles.card__buttons}>{buttons}</div>}
    </ElementType>
  );
};

NeoCard.displayName = 'NeoCard';
