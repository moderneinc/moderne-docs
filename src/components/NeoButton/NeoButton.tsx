import React, { FunctionComponent } from 'react';
import styles from './NeoButton.module.css';
import clsx from 'clsx';

export interface NeoButtonProps {
  /** Button text content */
  children?: React.ReactNode;

  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'outline' | 'text';

  /** Size variant */
  size?: 'small' | 'medium' | 'large';

  /** Optional icon element */
  icon?: React.ReactNode;

  /** Icon position relative to text */
  iconPosition?: 'left' | 'right';

  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;

  /** Disabled state */
  disabled?: boolean;

  /** Additional CSS classes */
  className?: string;

  /** Button type attribute (only used when rendering as button) */
  type?: 'button' | 'submit' | 'reset';

  /** Aria label for accessibility */
  'aria-label'?: string;

  /** If provided, renders as an <a> tag instead of <button> */
  href?: string;

  /** Link target (only used with href) */
  target?: '_blank' | '_self' | '_parent' | '_top';

  /** Link rel attribute (only used with href) */
  rel?: string;
}

/**
 * NeoButton component following Moderne's Neo Design system
 * Based on Figma design with Neo Design CSS variables
 */
export const NeoButton: FunctionComponent<NeoButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'left',
  onClick,
  disabled = false,
  className,
  type = 'button',
  'aria-label': ariaLabel,
  href,
  target,
  rel,
}) => {
  const buttonClasses = clsx(
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    {
      [styles['button--disabled']]: disabled,
      [styles['button--icon-only']]: icon && !children,
    },
    className
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className={styles.button__icon}>{icon}</span>
      )}
      {children && <span className={styles.button__text}>{children}</span>}
      {icon && iconPosition === 'right' && (
        <span className={styles.button__icon}>{icon}</span>
      )}
    </>
  );

  // Render as link if href is provided
  if (href) {
    // Add security attributes for target="_blank" to prevent tabnapping
    const secureRel = target === '_blank'
      ? rel
        ? `${rel} noopener noreferrer`
        : 'noopener noreferrer'
      : rel;

    return (
      <a
        href={href}
        className={buttonClasses}
        onClick={onClick}
        aria-label={ariaLabel}
        target={target}
        rel={secureRel}
        aria-disabled={disabled}
      >
        {content}
      </a>
    );
  }

  // Render as button
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};

NeoButton.displayName = 'NeoButton';

export default NeoButton;
